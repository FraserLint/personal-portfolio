import { testimonials } from "@/components/data/testimonials-list"

export default function Testimonials() {
    return (
        <div>
            <h2 className="text-xl font-bold mb-2 text-white">Testimonials</h2>
            {testimonials.map((testimonial) => (
                <div key={testimonial.id} className="mb-4">
                    <p>&#34;{testimonial.text}&#34;</p>
                    <span className="text-white">- {testimonial.name}, {testimonial.relation}</span>
                </div>
            ))}
        </div>
    )
}
