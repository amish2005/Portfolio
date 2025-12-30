import { RequestHandler } from "express";
import { StatsResponse, PlatformStats } from "../../shared/api.js";

const LEETCODE_USERNAME = "amish04";
const CODEFORCES_USERNAME = "amish04";
const CODECHEF_USERNAME = "amish2005";
const GFG_USERNAME = "amishsha8g1c";

// Helper for scraping with timeout
async function fetchWithTimeout(url: string, options: RequestInit = {}, timeout = 5000) {
    const controller = new AbortController();
    const id = setTimeout(() => controller.abort(), timeout);
    try {
        const response = await fetch(url, {
            ...options,
            signal: controller.signal,
        });
        return response;
    } finally {
        clearTimeout(id);
    }
}

async function fetchHtml(url: string) {
    const res = await fetchWithTimeout(url);
    if (!res.ok) throw new Error(`Failed to fetch HTML: ${res.status}`);
    return await res.text();
}

// Update getLeetCodeStats to use fetchWithTimeout
async function getLeetCodeStats(): Promise<PlatformStats> {
    try {
        const query = `
      query getUserProfile($username: String!) {
        matchedUser(username: $username) {
          submitStats {
            acSubmissionNum { difficulty count }
          }
          profile { ranking }
          userCalendar {
            totalActiveDays
          }
        }
        userContestRanking(username: $username) {
          rating
        }
      }
    `;

        const response = await fetchWithTimeout("https://leetcode.com/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables: { username: LEETCODE_USERNAME } }),
        });

        if (!response.ok) throw new Error(`LeetCode API error: ${response.status}`);
        const data = await response.json();

        // Safety check for data structure
        if (!data.data?.matchedUser) throw new Error("LeetCode data not found");

        const solved = data.data.matchedUser.submitStats.acSubmissionNum.find(
            (s: any) => s.difficulty === "All"
        )?.count || 0;

        const rank = data.data.matchedUser.profile.ranking || 0;
        const rating = data.data.userContestRanking?.rating
            ? Math.round(data.data.userContestRanking.rating).toString()
            : "N/A";
        const activeDays = data.data.matchedUser.userCalendar?.totalActiveDays ?? 0;

        return {
            solved,
            stats: [
                { label: "Contest Rating", value: rating },
                { label: "Global Rank", value: rank.toLocaleString() },
                { label: "Active Days", value: activeDays.toString() }
            ],
        };
    } catch (error) {
        console.error("LeetCode fetch error:", error);
        return { solved: 0, stats: [] };
    }
}

async function getCodeforcesStats(): Promise<PlatformStats> {
    try {
        const userInfoResponse = await fetchWithTimeout(
            `https://codeforces.com/api/user.info?handles=${CODEFORCES_USERNAME}`
        );
        if (!userInfoResponse.ok) throw new Error("CF User Info failed");
        const userInfo = await userInfoResponse.json();

        let solvedCount = 0;
        let isActive = false;

        if (userInfo.status === "OK") {
            const statusResponse = await fetchWithTimeout(
                `https://codeforces.com/api/user.status?handle=${CODEFORCES_USERNAME}`
            );

            if (statusResponse.ok) {
                const statusData = await statusResponse.json();
                if (statusData.status === "OK") {
                    const submissions = statusData.result;
                    const solvedProblems = new Set<string>();

                    if (submissions.length > 0) {
                        const lastSubmissionTime = submissions[0].creationTimeSeconds;
                        const currentTime = Math.floor(Date.now() / 1000);
                        if (currentTime - lastSubmissionTime < 2592000) {
                            isActive = true;
                        }
                    }

                    submissions.forEach((submission: any) => {
                        if (submission.verdict === "OK" && submission.testset === "TESTS") {
                            const problemId = `${submission.problem.contestId}${submission.problem.index}`;
                            solvedProblems.add(problemId);
                        }
                    });
                    solvedCount = solvedProblems.size;
                }
            }

            const user = userInfo.result[0];
            return {
                solved: solvedCount,
                isActive,
                stats: [
                    { label: "Rating", value: user.rating?.toString() || "N/A" },
                    { label: "Rank", value: user.rank || "N/A" },
                    { label: "Max Rating", value: user.maxRating?.toString() || "N/A" },
                ],
            };
        }
    } catch (error) {
        console.error("Codeforces fetch error:", error);
    }
    return { solved: 0, stats: [] };
}

// ... helper fetchHtml is already defined above ...

async function getCodeChefStats(): Promise<PlatformStats> {
    try {
        const html = await fetchHtml(`https://www.codechef.com/users/${CODECHEF_USERNAME}`);

        // ... scraping logic remains same, fetchHtml now has timeout ...
        // Rating regex: allow single/double quotes, extra spaces/attributes
        // Target: <div class="rating-number">1440</div>
        let ratingMatch = html.match(/class=["']rating-number["'][^>]*?>\s*?(\d+)/);
        const rating = ratingMatch ? ratingMatch[1] : "N/A";

        let starsMatch = html.match(/class=["']rating-star["'][\s\S]*?>\s*<span>\s*(\d+)/);
        if (!starsMatch) starsMatch = html.match(/>(\d+)\s*?★</);
        let stars = starsMatch ? starsMatch[1] : null;

        const ratingNum = parseInt(rating);
        if ((!stars || stars === "N/A") && !isNaN(ratingNum)) {
            if (ratingNum < 1400) stars = "1";
            else if (ratingNum < 1600) stars = "2";
            else if (ratingNum < 1800) stars = "3";
            else if (ratingNum < 2000) stars = "4";
            else if (ratingNum < 2200) stars = "5";
            else if (ratingNum < 2500) stars = "6";
            else stars = "7";
        }
        const starsDisplay = stars ? `${stars}★` : "N/A";

        const solvedMatch = html.match(/Total Problems Solved:\s*(\d+)/);
        const solved = solvedMatch ? parseInt(solvedMatch[1]) : 0;

        const maxRatingMatch = html.match(/Highest Rating\s*(\d+)/);
        const maxRating = maxRatingMatch ? maxRatingMatch[1] : "N/A";

        return {
            solved,
            stats: [
                { label: "Rating", value: rating },
                { label: "Stars", value: starsDisplay },
                { label: "Max Rating", value: maxRating }
            ]
        };
    } catch (error) {
        console.error("CodeChef fetch error:", error);
        return { solved: 0, stats: [] };
    }
}

async function getGFGStats(): Promise<PlatformStats> {
    try {
        const html = await fetchHtml(`https://www.geeksforgeeks.org/profile/${GFG_USERNAME}`);

        // ... scraping logic remains same ...
        const solvedMatch = html.match(/\\?"total_problems_solved\\?"\s*:\s*(\d+)/);
        const scoreMatch = html.match(/\\?"score\\?"\s*:\s*(\d+)/);
        const rankMatch = html.match(/\\?"institute_rank\\?"\s*:\s*(\d+)/);

        const solved = solvedMatch ? parseInt(solvedMatch[1]) : 0;
        const score = scoreMatch ? scoreMatch[1] : "0";
        const rank = rankMatch ? rankMatch[1] : "N/A";

        return {
            solved: solved,
            stats: [
                { label: "Coding Score", value: score },
                { label: "Institute Rank", value: rank }
            ]
        };
    } catch (error) {
        console.error("GFG fetch error:", error);
        return { solved: 0, stats: [] };
    }
}

export const handleGetStats: RequestHandler = async (req, res) => {
    // Use Promise.all since individual functions now handle their own errors and return defaults
    const [leetcode, codeforces, codechef, gfg] = await Promise.all([
        getLeetCodeStats(),
        getCodeforcesStats(),
        getCodeChefStats(),
        getGFGStats(),
    ]);

    const response: StatsResponse = {
        leetcode,
        codeforces,
        codechef,
        geeksforgeeks: gfg,
    };

    res.json(response);
};
