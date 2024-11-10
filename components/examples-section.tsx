import Image from 'next/image';

const examples = [
  {
    before: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    after: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
    style: 'Modern Minimalist',
  },
  {
    before: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    after: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
    style: 'Scandinavian',
  },
  {
    before: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    after: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
    style: 'Industrial',
  },
  {
    before: 'https://images.unsplash.com/photo-1616486338812-3dadae4b4ace',
    after: 'https://images.unsplash.com/photo-1616594039964-ae9021a400a0',
    style: 'Bohemian',
  },
];

export function ExamplesSection() {
  return (
    <section className="py-12">
      <div className="container">
        <h2 className="text-2xl font-bold text-center mb-8">
          AI-Generated Transformations
        </h2>
        <div className="grid gap-8 md:grid-cols-2">
          {examples.map((example, index) => (
            <div key={index} className="space-y-4">
              <div className="grid grid-cols-2 gap-4">
                <div className="relative aspect-video">
                  <Image
                    src={example.before}
                    alt="Before"
                    fill
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-background/90 px-2 py-1 rounded text-sm">
                    Before
                  </div>
                </div>
                <div className="relative aspect-video">
                  <Image
                    src={example.after}
                    alt="After"
                    fill
                    className="rounded-lg object-cover"
                  />
                  <div className="absolute top-2 left-2 bg-background/90 px-2 py-1 rounded text-sm">
                    After
                  </div>
                </div>
              </div>
              <p className="text-center font-medium">{example.style}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}