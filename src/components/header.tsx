'use client'

import { useTheme } from "next-themes"
import { Moon, Sun, Download } from 'lucide-react'
import { Button } from "@/components/ui/button"
import Link from "next/link"
import {
    DropdownMenu,
    DropdownMenuContent,
    DropdownMenuItem,
    DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu"

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
                <div className="flex items-center space-x-4">
                    <DropdownMenu>
                        <DropdownMenuTrigger asChild>
                            <Button>
                                <Download className="mr-2 h-4 w-4" />
                                Download CV
                            </Button>
                        </DropdownMenuTrigger>
                        <DropdownMenuContent>
                            <DropdownMenuItem>
                                <Link href="https://docs.google.com/document/d/12kU_iblE7_i8FAbqfC-bVZ2xJRAbrkU9/edit?usp=sharing&ouid=100514720449582119310&rtpof=true&sd=true" download>
                                    Word (.docx)
                                </Link>
                            </DropdownMenuItem>
                            <DropdownMenuItem>
                                <Link href="https://drive.google.com/file/d/1YV8dSTWBSDPRgZjTc7QgXhBjzED9Yu0N/view?usp=sharing" download>
                                    Adobe PDF (.pdf)
                                </Link>
                            </DropdownMenuItem>
                        </DropdownMenuContent>
                    </DropdownMenu>
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

