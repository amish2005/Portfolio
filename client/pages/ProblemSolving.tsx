import {
    Code2,
    Trophy,
    Target,
    Award,
    ExternalLink,
    BarChart2,
    ArrowUpRight
} from "lucide-react";
import { Button } from "@/components/ui/button";
import { Card, CardContent } from "@/components/ui/card";
import Navigation from "@/components/Navigation";

import { useQuery } from "@tanstack/react-query";
import { StatsResponse } from "@shared/api";
import { API_BASE_URL } from "@/config";

export default function ProblemSolving() {
    const { data: stats, isLoading } = useQuery<StatsResponse>({
        queryKey: ["stats"],
        queryFn: async () => {
            const res = await fetch(`${API_BASE_URL}/api/stats`);
            if (!res.ok) throw new Error("Failed to fetch stats");
            return res.json();
        }
    });

    const platforms = [
        {
            name: "LeetCode",
            icon: Code2,
            color: "text-[#FFA116]", // LeetCode signature yellow/orange
            bg: "bg-[#FFA116]/10",
            border: "hover:border-[#FFA116]/50",
            solved: stats?.leetcode.solved || 0,
            stats: stats?.leetcode.stats || [],
            link: "https://leetcode.com/u/amish04/",
            description: "Primary platform for DSA practice and weekly contests."
        },
        {
            name: "Codeforces",
            icon: BarChart2,
            color: "text-[#1F8ACB]", // Codeforces blue
            bg: "bg-[#1F8ACB]/10",
            border: "hover:border-[#1F8ACB]/50",
            solved: stats?.codeforces.solved || 0,
            isActive: stats?.codeforces.isActive,
            stats: stats?.codeforces.stats || [],
            link: "https://codeforces.com/profile/amish04",
            description: "Competitive programming and virtual contests."
        },
        {
            name: "CodeChef",
            icon: Award,
            color: "text-orange-500",
            bg: "bg-orange-500/10",
            border: "hover:border-orange-500/50",
            solved: stats?.codechef.solved || 0,
            stats: stats?.codechef.stats || [],
            link: "https://www.codechef.com/users/amish2005",
            description: "Long challenges and monthly cook-offs."
        },
        {
            name: "GeeksForGeeks",
            icon: Target,
            color: "text-[#2F8D46]", // GFG Green
            bg: "bg-[#2F8D46]/10",
            border: "hover:border-[#2F8D46]/50",
            solved: stats?.geeksforgeeks.solved || 0,
            stats: stats?.geeksforgeeks.stats || [],
            link: "https://www.geeksforgeeks.org/profile/amishsha8g1c",
            description: "University course concepts and standard algorithms."
        }
    ];

    const totalSolved = platforms.reduce((acc, curr) => acc + curr.solved, 0);

    if (isLoading) {
        return (
            <div className="min-h-screen bg-portfolio-bg flex items-center justify-center">
                <div className="animate-spin rounded-full h-12 w-12 border-t-2 border-b-2 border-portfolio-accent"></div>
            </div>
        );
    }

    return (
        <div className="min-h-screen bg-portfolio-bg">
            <Navigation />

            <section className="pt-24 pb-20 px-4 md:px-8">
                <div className="container-width max-w-7xl mx-auto">
                    {/* Hero Card */}
                    <div className="relative mb-8 p-8 rounded-3xl overflow-hidden group">
                        <div className="absolute inset-0 bg-gradient-to-br from-portfolio-accent/20 to-purple-500/20 backdrop-blur-xl border border-portfolio-accent/20" />

                        {/* Live Badge */}
                        <div className="absolute top-4 right-4 flex items-center gap-2 px-3 py-1.5 rounded-full bg-green-500/10 backdrop-blur-md border border-green-500/20 shadow-lg">
                            <span className="relative flex h-2 w-2">
                                <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-500 opacity-75"></span>
                                <span className="relative inline-flex rounded-full h-2 w-2 bg-green-500"></span>
                            </span>
                            <span className="text-xs font-semibold text-green-600 dark:text-green-400 tracking-wider uppercase">Live Data</span>
                        </div>

                        <div className="relative z-10 flex flex-col md:flex-row items-center justify-between gap-6">
                            <div className="flex items-center gap-6">
                                <div className="p-4 rounded-2xl bg-portfolio-accent/20 text-portfolio-accent ring-1 ring-portfolio-accent/50 group-hover:scale-110 transition-transform duration-500">
                                    <Trophy className="w-12 h-12" />
                                </div>
                                <div>
                                    <h2 className="text-4xl font-bold text-transparent bg-clip-text bg-gradient-to-r from-portfolio-text to-portfolio-accent mb-2">
                                        Total Problems Solved
                                    </h2>
                                    <p className="text-portfolio-text-muted text-lg">
                                        Across all coding platforms
                                    </p>
                                </div>
                            </div>
                            <div className="text-6xl font-bold text-portfolio-text tabular-nums tracking-tighter">
                                {totalSolved.toLocaleString()}
                            </div>
                        </div>
                    </div>

                    {/* Platforms Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {platforms.map((platform, index) => {
                            const Icon = platform.icon;
                            return (
                                <Card
                                    key={index}
                                    className={`group relative bg-portfolio-surface/60 backdrop-blur-sm border border-portfolio-accent/20 ${platform.border} transition-all duration-500 hover:-translate-y-1 hover:shadow-2xl hover:shadow-${platform.color}/20 overflow-hidden`}
                                >
                                    {/* Decorative background gradient blob */}
                                    <div className={`absolute top-0 right-0 w-64 h-64 ${platform.bg} opacity-20 blur-3xl -mr-16 -mt-16 rounded-full group-hover:opacity-40 transition-opacity duration-500`} />

                                    <CardContent className="p-8 relative z-10">
                                        <div className="flex justify-between items-start mb-8">
                                            <div className="flex items-center gap-4">
                                                <div className={`p-4 rounded-2xl ${platform.bg} ${platform.color} ring-1 ring-portfolio-accent/20 group-hover:scale-110 transition-transform duration-500`}>
                                                    <Icon className="w-8 h-8" />
                                                </div>
                                                <div>
                                                    <h3 className="text-2xl font-bold text-portfolio-text tracking-tight group-hover:text-portfolio-accent transition-colors">
                                                        {platform.name}
                                                    </h3>
                                                    <p className="text-portfolio-text-muted text-sm font-medium">
                                                        {platform.description}
                                                    </p>
                                                </div>
                                            </div>
                                            <a
                                                href={platform.link}
                                                target="_blank"
                                                rel="noopener noreferrer"
                                                className="p-2 rounded-full hover:bg-portfolio-accent/10 text-portfolio-text-muted hover:text-portfolio-text transition-colors"
                                            >
                                                <ArrowUpRight className="w-5 h-5" />
                                            </a>
                                        </div>

                                        <div className="flex items-end gap-3 mb-8">
                                            <span className="text-5xl font-bold text-portfolio-text tracking-tighter">
                                                {platform.solved}
                                            </span>
                                            <span className="text-lg text-portfolio-text-muted mb-2 font-medium">
                                                Solved
                                            </span>
                                        </div>

                                        <div className="grid grid-cols-3 gap-6 pt-6 border-t border-portfolio-accent/10">
                                            {platform.stats.map((stat, i) => (
                                                <div key={i} className="group/stat">
                                                    <div className={`font-bold transition-colors ${i === 0 ? `text-2xl ${platform.color}` : "text-lg text-portfolio-text group-hover/stat:text-portfolio-accent"}`}>
                                                        {stat.value}
                                                    </div>
                                                    <div className="text-xs text-portfolio-text-muted uppercase tracking-wider font-semibold mt-1">
                                                        {stat.label}
                                                    </div>
                                                </div>
                                            ))}
                                        </div>
                                    </CardContent>
                                </Card>
                            );
                        })}
                    </div>
                </div >
            </section >
        </div >
    );
}
