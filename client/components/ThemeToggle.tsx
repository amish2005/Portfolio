import { Moon, Sun } from "lucide-react";
import { useEffect, useState } from "react";
import { Button } from "@/components/ui/button";

export function ThemeToggle() {
    const [theme, setTheme] = useState<"light" | "dark">("dark");

    useEffect(() => {
        // Check local storage or system preference
        const storedTheme = localStorage.getItem("theme") as "light" | "dark" | null;
        const systemPrefersDark = window.matchMedia("(prefers-color-scheme: dark)").matches;

        // Default to dark if no preference
        const initialTheme = storedTheme || (systemPrefersDark ? "dark" : "dark");
        setTheme(initialTheme);

        // Apply theme
        const root = document.documentElement;
        if (initialTheme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }
    }, []);

    const toggleTheme = () => {
        const newTheme = theme === "dark" ? "light" : "dark";
        setTheme(newTheme);

        const root = document.documentElement;
        if (newTheme === "dark") {
            root.classList.add("dark");
        } else {
            root.classList.remove("dark");
        }

        localStorage.setItem("theme", newTheme);
    };

    return (
        <Button
            variant="ghost"
            size="icon"
            onClick={toggleTheme}
            className="rounded-full hover:bg-portfolio-accent/10 transition-colors"
            title={`Switch to ${theme === "dark" ? "light" : "dark"} mode`}
        >
            {theme === "dark" ? (
                <Sun className="h-5 w-5 text-portfolio-text-muted hover:text-portfolio-accent transition-colors" />
            ) : (
                <Moon className="h-5 w-5 text-portfolio-text-muted hover:text-portfolio-accent transition-colors" />
            )}
            <span className="sr-only">Toggle theme</span>
        </Button>
    );
}
