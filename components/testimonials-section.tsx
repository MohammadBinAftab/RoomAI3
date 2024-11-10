import Image from 'next/image';

const testimonials = [
  {
    name: 'Sarah Johnson',
    role: 'Interior Designer',
    content: 'This AI tool has revolutionized how I present design concepts to my clients.',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
  },
  {
    name: 'Michael Chen',
    role: 'Homeowner',
    content: 'I was able to visualize my dream home before making any changes. Amazing!',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
  },
  {
    name: 'Emily Rodriguez',
    role: 'Architect',
    content: 'The AI suggestions are incredibly creative and practical. A game-changer!',
    avatar: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80',
  },
];

export function TestimonialsSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8">
          What Our Users Say
        </h2>
        <div className="grid gap-8 md:grid-cols-3">
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="flex flex-col items-center text-center p-6 bg-background rounded-lg shadow"
            >
              <div className="relative w-16 h-16 mb-4">
                <Image
                  src={testimonial.avatar}
                  alt={testimonial.name}
                  fill
                  className="rounded-full object-cover"
                />
              </div>
              <h3 className="font-semibold">{testimonial.name}</h3>
              <p className="text-sm text-muted-foreground mb-4">{testimonial.role}</p>
              <p className="text-muted-foreground">{testimonial.content}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}