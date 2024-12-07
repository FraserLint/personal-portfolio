import Image from 'next/image'
import { Card, CardContent, CardHeader, CardTitle } from "@/components/ui/card"
import { Button } from "@/components/ui/button"
import { ArrowRight } from 'lucide-react'
import Link from "next/link";

// Example project data
const projects = [
    {
        id: 1,
        title: "Dock Street Studios Photography Website",
        description: "An innovative redesign for Dock Street Studios SEO optimised website when moving to a new location and rebranding. " +
            "Using web design tools such as Webflow to create an easy to manage CMS.",
        image: "/project_screenshots/dockstreetscreenshot.png",
        link: "https://www.dockstreetstudioleeds.co.uk/"
    },
    {
        id: 2,
        title: "Task Management App",
        description: "A productivity app built with React and Firebase",
        image: "/placeholder.svg?height=200&width=300",
        link: "/dockstreetscreenshot.png"
    },
    {
        id: 3,
        title: "Weather Dashboard",
        description: "Real-time weather information using a third-party API",
        image: "/placeholder.svg?height=200&width=300",
        link: "/dockstreetscreenshot.png"
    },
]

// Example testimonial data
const testimonials = [
    {
        id: 1,
        name: "Paul Cooke",
        relation: "Lhasa Limited Internship Manager (personal reference)",
        text: "Austin has worked with me as a placement student as part of his college\n" +
            "course over a 3 month period, 2 days a week. He has been working on a modern\n" +
            "SPA built with Angular 17 (typescript) and Spring Boot 3 (Java 17), working\n" +
            "as part of a small scrum team who practise CI/CD. Worked on both FE & BE\n" +
            "including unit (Junit/Jasmine) and API tests (Spring REST Template),\n" +
            "starting with small bug-fixes and now integrating theming into the app from\n" +
            "an in-house UI library (exposure to tailwind). Tooling IntelliJ, JIRA,\n" +
            "Jenkins, BitBucket/git, SonarQube, MEND. Austin has a passion for technology\n" +
            "and often shows me examples of, or talks about programming he has been doing\n" +
            "in his own time."
    },
    {
        id: 2,
        name: "Mark Wheelwright",
        relation: "Aire Street / Dock Street Studio - Director",
        text: "I hired Austin on a freelancer basis to deliver a website and SEO strategy. \n" +
            "The results were impressive and outcomes much higher than I could have envisioned. \n" +
            "My current website was outdated and had a lot of offsite code which was damaging my Google Lighthouse performance and impacting SEO reputation. \n" +
            "The customer experience and call to action was poor. \n" +
            "Austin worked through a phased improvement plan and brought lots of ideas and innovation to the process as we went along. \n" +
            "I am not a web developer myself so Austin advised me as we went along the process and developed the brief into something much better than I could have created alone.\n" +
            "The result was a much higher ranking website and healthier Google SEO report which will future proof the website for a while. \n" +
            "The return on investment was very good and I will always use Austin in future as do some of my other clients who have had excellent advice and service. "
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
                    (especially with an Angular Frontend &amp; Spring Boot Backend technologies) much more,
                    while studying and completing my T-Level in Digital Production Design & Development.
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
                                <Button asChild className="group mt-auto" variant="outline">
                                    <Link href={project.link}>See project<ArrowRight className="ml-2 h-4 w-4 transition-transform group-hover:translate-x-1" /></Link>
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
                                <p className="text-lg mb-4 flex-grow">&#34;{testimonial.text}&#34;</p>
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

