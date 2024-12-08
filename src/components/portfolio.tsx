'use client'

import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import { Tooltip, TooltipContent, TooltipProvider, TooltipTrigger } from "@/components/ui/tooltip"
import StandardPortfolioContent from "@/components/standard-portfolio-content"
import DeveloperFriendlyPortfolioContent from "@/components/developer-friendly-portfolio-content"
import { Code2 } from 'lucide-react'

export function Portfolio() {
    const [isDeveloperMode, setIsDeveloperMode] = useState(false)

    return (
        <div className="min-h-screen bg-background text-foreground relative">
            {/* Developer mode toggle */}
            <TooltipProvider>
                <Tooltip>
                    <TooltipTrigger asChild>
                        <div className="absolute top-4 right-4 flex items-center space-x-2 bg-muted/50 rounded-full px-3 py-1 text-sm transition-opacity hover:opacity-100 opacity-70">
                            <Code2 className="h-4 w-4 text-muted-foreground" />
                            <Label htmlFor="developer-mode" className="text-muted-foreground cursor-pointer">
                                Dev Mode
                            </Label>
                            <Switch
                                id="developer-mode"
                                aria-label="Developer Mode"
                                checked={isDeveloperMode}
                                onCheckedChange={setIsDeveloperMode}
                                className="data-[state=checked]:bg-primary"
                            />
                        </div>
                    </TooltipTrigger>
                    <TooltipContent>
                        <p>Toggle developer-friendly view</p>
                    </TooltipContent>
                </Tooltip>
            </TooltipProvider>

            {/* Top spacing */}
            <div className="h-24 md:h-32 lg:h-48"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main title */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-center">
                    Hi, I&#39;m Austin Davison <span className="waving-hand">👋</span>
                </h1>

                <div className="flex flex-col items-center mb-12">
                    {/* Overview */}
                    <div className="max-w-2xl text-center mb-8">
                        <p className="text-lg mb-6">
                            An enthusiastic developer who is always open and eager to learn more.
                        </p>
                    </div>
                </div>

                {/* Conditional rendering based on toggle state */}
                <div className="w-11/12 mx-auto">
                    {isDeveloperMode ? (
                        <DeveloperFriendlyPortfolioContent />
                    ) : (
                        <StandardPortfolioContent />
                    )}
                </div>
            </div>
        </div>
    )
}

