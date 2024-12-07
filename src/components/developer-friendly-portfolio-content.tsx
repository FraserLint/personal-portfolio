'use client'

import React, { useState, useEffect, useRef } from 'react'
import About from './terminal/about'
import Projects from './terminal/projects'
import Testimonials from './terminal/testimonials'
import Qualifications from './terminal/qualifications'

const sections = ['about', 'projects', 'testimonials', 'qualifications']

export default function DeveloperFriendlyPortfolioContent() {
    const [input, setInput] = useState('')
    const [output, setOutput] = useState<string[]>(['Welcome to Austin Davison\'s Portfolio Terminal', 'Type "help" for a list of commands.'])
    const [currentSection, setCurrentSection] = useState<string | null>(null)
    const bottomRef = useRef<HTMLDivElement>(null)
    const commandStyle = "text-white"

    useEffect(() => {
        bottomRef.current?.scrollIntoView({ behavior: 'smooth' })
    }, [output])

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        setInput(e.target.value)
    }

    const handleSubmit = (e: React.FormEvent) => {
        e.preventDefault()
        processCommand(input)
        setInput('')
    }

    const processCommand = (cmd: string) => {
        const command = cmd.toLowerCase().trim()
        setOutput(prev => [...prev, `$ ${command}`])

        if (command === 'help') {
            setOutput(prev => [...prev, 'Available commands:', ...sections, 'clear - Clear the terminal', 'exit - Exit the current section'])
        } else if (sections.includes(command)) {
            setCurrentSection(command)
        } else if (command === 'clear') {
            setOutput([])
        } else if (command === 'exit') {
            setCurrentSection(null)
            setOutput(prev => [...prev, 'Exited to main menu'])
        } else {
            setOutput(prev => [...prev, `Command not found: ${command}`])
        }
    }

    return (
        <div className="bg-black text-green-400 p-4 mb-4 font-mono h-[70vh] overflow-auto rounded-lg shadow-lg border border-green-500">
            <div className="mb-4">
                {output.map((line, index) => (
                    <div key={index} className={line.startsWith('$') ? commandStyle : ''}>
                        {line}
                    </div>
                ))}
                {currentSection === 'about' && <About />}
                {currentSection === 'projects' && <Projects />}
                {currentSection === 'testimonials' && <Testimonials />}
                {currentSection === 'qualifications' && <Qualifications />}
            </div>
            <form onSubmit={handleSubmit} className="flex">
                <span className="mr-2 text-green-500">$</span>
                <input
                    type="text"
                    value={input}
                    onChange={handleInputChange}
                    className="flex-grow bg-transparent outline-none text-white"
                    autoFocus
                />
            </form>
            <div ref={bottomRef} />
        </div>
    )
}

