import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import Image from "next/image";
import Link from "next/link";

export default function Home() {
  return (
    <div className="flex flex-col">
      {/* Hero Section */}
      <section className="py-20 px-4">
        <div className="container mx-auto text-center">
          <h1 className="text-5xl font-bold mb-6">Transform Your Space with AI</h1>
          <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
            Redesign your room instantly using advanced AI technology. Choose from multiple styles and see your space transformed in seconds.
          </p>
          <div className="flex gap-4 justify-center">
            <Link href="/dashboard">
              <Button size="lg">Redesign Your Room</Button>
            </Link>
            <Link href="/pricing">
              <Button size="lg" variant="outline">View Pricing</Button>
            </Link>
          </div>
        </div>
      </section>

      {/* Features Section */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="overflow-hidden">
                <div className="p-6">
                  <div className="aspect-video relative mb-4">
                    <Image
                      src={`https://images.unsplash.com/photo-${i}`}
                      alt={`Room design ${i}`}
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Beautiful Design {i}</h3>
                  <p className="text-muted-foreground">Transform your space with our AI-powered design tools.</p>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Testimonials */}
      <section className="py-20">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">What Our Users Say</h2>
          <div className="grid md:grid-cols-3 gap-8">
            {[1, 2, 3].map((i) => (
              <Card key={i} className="p-6">
                <p className="mb-4">"Amazing tool! Completely transformed my living room with just a few clicks."</p>
                <div className="flex items-center">
                  <div className="w-12 h-12 rounded-full bg-muted mr-4"></div>
                  <div>
                    <h4 className="font-semibold">User {i}</h4>
                    <p className="text-sm text-muted-foreground">Interior Designer</p>
                  </div>
                </div>
              </Card>
            ))}
          </div>
        </div>
      </section>

      {/* Gallery */}
      <section className="py-20 bg-muted/50">
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold text-center mb-12">AI-Generated Designs</h2>
          <div className="grid md:grid-cols-4 gap-4">
            {[1, 2, 3, 4].map((i) => (
              <div key={i} className="aspect-square relative">
                <Image
                  src={`https://images.unsplash.com/photo-${i}`}
                  alt={`AI Design ${i}`}
                  fill
                  className="object-cover rounded-lg"
                />
              </div>
            ))}
          </div>
          <div className="text-center mt-12">
            <Link href="/dashboard">
              <Button size="lg">Try It Now</Button>
            </Link>
          </div>
        </div>
      </section>
    </div>
  );
}