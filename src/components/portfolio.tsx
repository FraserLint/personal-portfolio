'use client'

import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"
import StandardPortfolioContent from "@/components/standard-portfolio-content";
import DeveloperFriendlyPortfolioContent from "@/components/developer-friendly-portfolio-content";

export function Portfolio() {
    const [isDeveloperMode, setIsDeveloperMode] = useState(false)

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Top spacing */}
            <div className="h-24 md:h-32 lg:h-48"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main title */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-center">
                    Hi I&#39;m Austin Davison <span className="waving-hand">👋</span>
                </h1>

                <div className="flex flex-col items-center mb-12">
                    {/* Overview and toggle */}
                    <div className="max-w-2xl text-center mb-8">
                        <p className="text-lg mb-6">
                            An enthusiastic developer who is always open and eager to learn more.
                        </p>

                        <div className="flex items-center justify-center space-x-2">
                            <Label htmlFor="developer-mode" className="text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70">
                                Are you a developer? Enable Dev-Friendly Mode
                            </Label>
                            <Switch
                                id="developer-mode"
                                checked={isDeveloperMode}
                                onCheckedChange={setIsDeveloperMode}
                            />
                        </div>
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

