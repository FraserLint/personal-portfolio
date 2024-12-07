import { qualifications } from "@/components/data/qualifications-list"

export default function Qualifications() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2 text-white">Qualifications</h2>
            {qualifications.map((qualification) => (
                <div key={qualification.id} className="flex justify-between">
                    <span className="text-white">{qualification.name}</span>
                    <span>{qualification.grade}</span>
                </div>
            ))}
        </div>
    )
}

