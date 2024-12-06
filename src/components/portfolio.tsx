'use client'

import { useState } from 'react'
import { Switch } from "@/components/ui/switch"
import { Label } from "@/components/ui/label"

export function Portfolio() {
    const [isDeveloperMode, setIsDeveloperMode] = useState(false)

    return (
        <div className="min-h-screen bg-background text-foreground">
            {/* Adjusted spacing to account for the header */}
            <div className="h-24 md:h-32 lg:h-48"></div>

            <div className="container mx-auto px-4 sm:px-6 lg:px-8">
                {/* Main title */}
                <h1 className="text-4xl md:text-6xl font-bold leading-tight mb-8 text-center">
                    Hi I'm Austin Davison <span className="waving-hand">👋</span>
                </h1>

                <div className="flex flex-col items-center mb-12">
                    {/* Overview and toggle */}
                    <div className="max-w-2xl text-center mb-8">
                        <p className="text-lg mb-6">
                            Test Paragraph wow this is crazy!
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
                        <DeveloperFriendlyComponent />
                    ) : (
                        <StandardComponent />
                    )}
                </div>
            </div>
        </div>
    )
}

function StandardComponent() {
    return (
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Standard View</h2>
            <p>Test Standard</p>
        </div>
    )
}

function DeveloperFriendlyComponent() {
    return (
        <div className="bg-card text-card-foreground p-6 rounded-lg shadow-lg">
            <h2 className="text-2xl font-semibold mb-4">Developer-Friendly View</h2>
            <p>Test Dev</p>
        </div>
    )
}

