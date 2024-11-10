import Image from 'next/image';
import { Button } from '@/components/ui/button';

const features = [
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    title: 'Multiple AI Models',
    description: 'Choose between Stable Diffusion, DALL-E 2, and more',
  },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    title: 'Style Variety',
    description: 'Explore different interior design styles',
  },
  {
    image: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    title: 'Instant Results',
    description: 'Get your redesigned room in seconds',
  },
];

export function FeaturesSection() {
  return (
    <section className="py-12 bg-secondary">
      <div className="container">
        <div className="grid gap-8 md:grid-cols-3">
          {features.map((feature, index) => (
            <div key={index} className="relative group">
              <div className="relative aspect-video overflow-hidden rounded-lg">
                <Image
                  src={feature.image}
                  alt={feature.title}
                  fill
                  className="object-cover transition-transform group-hover:scale-105"
                />
              </div>
              <div className="mt-4">
                <h3 className="text-lg font-semibold">{feature.title}</h3>
                <p className="text-muted-foreground">{feature.description}</p>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-center mt-8">
          <Button size="lg">Try It Now</Button>
        </div>
      </div>
    </section>
  );
}