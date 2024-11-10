import Image from 'next/image';
import { Button } from '@/components/ui/button';

export function HeroSection() {
  return (
    <section className="container grid items-center gap-6 pb-8 pt-6 md:py-10">
      <div className="flex max-w-[980px] flex-col items-start gap-2">
        <h1 className="text-3xl font-extrabold leading-tight tracking-tighter md:text-4xl">
          Transform Your Space with AI-Powered Interior Design
        </h1>
        <p className="max-w-[700px] text-lg text-muted-foreground">
          Upload a photo of your room and let our AI transform it into your dream space.
          Choose from various styles and see the magic happen instantly.
        </p>
      </div>
      <div className="grid grid-cols-1 gap-4 sm:grid-cols-2 md:grid-cols-3">
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1616486338812-3dadae4b4ace"
            alt="Modern living room"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1616137466211-f939a420be84"
            alt="Minimalist bedroom"
            fill
            className="object-cover"
          />
        </div>
        <div className="relative aspect-video overflow-hidden rounded-lg">
          <Image
            src="https://images.unsplash.com/photo-1616137466211-f939a420be84"
            alt="Cozy kitchen"
            fill
            className="object-cover"
          />
        </div>
      </div>
      <div className="flex justify-center">
        <Button size="lg" className="mt-4">
          Redesign Your Room
        </Button>
      </div>
    </section>
  );
}