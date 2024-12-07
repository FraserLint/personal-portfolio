import { projects } from "@/components/data/projects-list"

export default function Projects() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2 text-white">Projects</h2>
            {projects.map((project) => (
                <div key={project.id} className="mb-4">
                    <h3 className="font-bold text-white">{project.title}</h3>
                    <p>{project.description}</p>
                    <p>Link: {project.link}</p>
                </div>
            ))}
        </div>
    )
}
