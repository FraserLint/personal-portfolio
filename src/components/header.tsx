'use client'

import { useTheme } from "next-themes"
import { Moon, Sun } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"

export function Header() {
    const { theme, setTheme } = useTheme()

    return (
        <header className="sticky top-0 z-50 w-full border-b border-border/40 bg-background/80 backdrop-blur-xl backdrop-saturate-150 supports-[backdrop-filter]:bg-background/60">
            <div className="container flex h-14 items-center justify-between px-4 md:px-6 max-w-screen-2xl mx-auto">
                <div className="flex items-center">
                    <Link className="flex items-center space-x-2" href="/">
                        <span className="font-bold">Austin Davison</span>
                    </Link>
                </div>
                <div className="flex items-center">
                    <Button
                        variant="ghost"
                        size="icon"
                        aria-label="Toggle theme"
                        onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
                    >
                        <Sun className="h-6 w-6 rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
                        <Moon className="absolute h-6 w-6 rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
                        <span className="sr-only">Toggle theme</span>
                    </Button>
                </div>
            </div>
        </header>
    )
}

