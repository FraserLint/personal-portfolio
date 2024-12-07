import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'

// Example project data
const projects = [
    {
        id: 1,
        title: "E-commerce Platform",
        description: "A full-stack e-commerce solution with React and Node.js",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A productivity app built with React and Firebase",
        image: "/placeholder.svg?height=200&width=300"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather information using a third-party API",
        image: "/placeholder.svg?height=200&width=300"
    },
]

// Example testimonial data
const testimonials = [
    {
        id: 1,
        name: "John Doe",
        relation: "Project Manager",
        text: "An exceptional developer with a keen eye for detail. Always delivers high-quality work on time."
    },
    {
        id: 2,
        name: "Jane Smith",
        relation: "Client",
        text: "Transformed our business with an innovative web application. Highly recommended!"
    },
    {
        id: 3,
        name: "Alex Johnson",
        relation: "Colleague",
        text: "A true team player with excellent problem-solving skills. A pleasure to work with."
    },
]

// Example qualification data
const qualifications = [
    { id: 1, name: "T-Level in Digital Production Design & Development", grade: "Expected B" },
    { id: 2, name: "AWS Certified Solutions Architect", grade: "Associate" },
    { id: 3, name: "React Advanced Certification", grade: "Expert Level" },
    { id: 4, name: "Node.js Certification", grade: "Professional" },
]

export default function StandardPortfolioContent() {
    return (
        <div className="container mx-auto px-4 py-8">
            <section className="mb-16">
                <h1 className="text-3xl font-bold mb-6">A bit about me</h1>
                <p className="text-lg text-muted-foreground mb-8">
                    Hi I’m Austin Davison, Programming is a very integral part of my life and I am very passionate about it.
                    I have been coding since I was 14, I am currently doing an internship at Lhasa Limited where I am loving learning and improving my skills
                    (especially with an Angular Frontend &amp; Spring Boot Backend technologies) much more.
                    I also enjoy playing the guitar, drums and basketball.
                </p>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">My Projects</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {projects.map((project) => (
                        <Card key={project.id} className="overflow-hidden flex flex-col">
                            <Image
                                src={project.image}
                                alt={project.title}
                                width={300}
                                height={200}
                                className="w-full h-48 object-cover"
                            />
                            <CardHeader>
                                <CardTitle>{project.title}</CardTitle>
                            </CardHeader>
                            <CardContent className="flex flex-col flex-grow">
                                <p className="text-muted-foreground mb-4 flex-grow">{project.description}</p>
                                <Button className="group mt-auto" variant="outline">
                                    See Project
                                    <ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" />
                                </Button>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section className="mb-16">
                <h2 className="text-3xl font-bold mb-6">What People Have to Say About Me</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                    {testimonials.map((testimonial) => (
                        <Card key={testimonial.id} className="flex flex-col h-full">
                            <CardContent className="flex flex-col flex-grow pt-6">
                                <p className="text-lg mb-4 flex-grow">"{testimonial.text}"</p>
                                <div className="mt-auto">
                                    <p className="font-semibold">{testimonial.name}</p>
                                    <p className="text-sm text-muted-foreground">{testimonial.relation}</p>
                                </div>
                            </CardContent>
                        </Card>
                    ))}
                </div>
            </section>

            <section>
                <h2 className="text-3xl font-bold mb-6">My Qualifications</h2>
                <ul className="space-y-2">
                    {qualifications.map((qualification) => (
                        <li key={qualification.id} className="flex justify-between items-center border-b py-2">
                            <span>{qualification.name}</span>
                            <span className="text-muted-foreground">{qualification.grade}</span>
                        </li>
                    ))}
                </ul>
            </section>
        </div>
    )
}

