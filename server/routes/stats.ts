import { RequestHandler } from "express";
import { StatsResponse, PlatformStats } from "@shared/api";

const LEETCODE_USERNAME = "amish04";
const CODEFORCES_USERNAME = "amish04";
const CODECHEF_USERNAME = "amish2005";
const GFG_USERNAME = "amishsha8g1c";

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

        const response = await fetch("https://leetcode.com/graphql", {
            method: "POST",
            headers: { "Content-Type": "application/json" },
            body: JSON.stringify({ query, variables: { username: LEETCODE_USERNAME } }),
        });

        const data = await response.json();
        const solved = data.data.matchedUser.submitStats.acSubmissionNum.find(
            (s: any) => s.difficulty === "All"
        ).count;

        const rank = data.data.matchedUser.profile.ranking;
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
        const userInfoResponse = await fetch(
            `https://codeforces.com/api/user.info?handles=${CODEFORCES_USERNAME}`
        );
        const userInfo = await userInfoResponse.json();

        let solvedCount = 0;
        let isActive = false;

        if (userInfo.status === "OK") {
            // Fetch submissions to calculate solved count
            const statusResponse = await fetch(
                `https://codeforces.com/api/user.status?handle=${CODEFORCES_USERNAME}`
            );
            const statusData = await statusResponse.json();

            if (statusData.status === "OK") {
                const submissions = statusData.result;
                const solvedProblems = new Set<string>();

                // Submissions are returned in reverse chronological order (newest first)
                if (submissions.length > 0) {
                    const lastSubmissionTime = submissions[0].creationTimeSeconds;
                    const currentTime = Math.floor(Date.now() / 1000);
                    // Active if last submission within 30 days (2592000 seconds)
                    if (currentTime - lastSubmissionTime < 2592000) {
                        isActive = true;
                    }
                }

                submissions.forEach((submission: any) => {
                    if (submission.verdict === "OK" && submission.testset === "TESTS") {
                        // Create a unique key for the problem: contestId + index (e.g., 1234A)
                        const problemId = `${submission.problem.contestId}${submission.problem.index}`;
                        solvedProblems.add(problemId);
                    }
                });
                solvedCount = solvedProblems.size;
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

// Helper for scraping
async function fetchHtml(url: string) {
    const res = await fetch(url);
    return await res.text();
}

async function getCodeChefStats(): Promise<PlatformStats> {
    try {
        const html = await fetchHtml(`https://www.codechef.com/users/${CODECHEF_USERNAME}`);

        // Rating regex: allow single/double quotes, extra spaces/attributes
        // Target: <div class="rating-number">1440</div>
        let ratingMatch = html.match(/class=["']rating-number["'][^>]*?>\s*?(\d+)/);
        const rating = ratingMatch ? ratingMatch[1] : "N/A";

        let starsMatch = html.match(/class=["']rating-star["'][\s\S]*?>\s*<span>\s*(\d+)/);
        // Fallback: look for generic star pattern if class lookup fails
        if (!starsMatch) {
            starsMatch = html.match(/>(\d+)\s*?★</);
        }

        let stars = starsMatch ? starsMatch[1] : null;

        // Fallback: Calculate stars from rating if scraping failed or returned unexpected result
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

        // Solved count regex
        // Target: <h3>Total Problems Solved: 7</h3>
        const solvedMatch = html.match(/Total Problems Solved:\s*(\d+)/);
        const solved = solvedMatch ? parseInt(solvedMatch[1]) : 0;

        // Max Rating
        // Target: <div class="rating-header">...<small>(Highest Rating 1440)</small>...</div>
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

        // GFG uses Next.js and embeds data in script tags. 
        // Pattern: "total_problems_solved":149
        // We look for the JSON-like structure in the raw text.
        // Note: Quotes might be escaped in the source (\")

        const solvedMatch = html.match(/\\?"total_problems_solved\\?"\s*:\s*(\d+)/);
        const scoreMatch = html.match(/\\?"score\\?"\s*:\s*(\d+)/);
        const rankMatch = html.match(/\\?"institute_rank\\?"\s*:\s*(\d+)/);
        // streak? pod_solved_global_longest_streak

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
