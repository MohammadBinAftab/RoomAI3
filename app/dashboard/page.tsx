'use client';

import { Button } from "@/components/ui/button";
import { Card } from "@/components/ui/card";
import { ImageIcon, Upload, Wand2 } from "lucide-react";
import { useState } from "react";
import Image from "next/image";
import { Input } from "@/components/ui/input";
import { getSession, signIn } from "next-auth/react";

const STYLE_OPTIONS = [
  'Modern',
  'Summer',
  'Professional',
  'Tropical',
  'Coastal',
  'Vintage',
  'Industrial',
  'Neoclassic',
  'Tribal'
];

export default function DashboardPage() {
  const [selectedModel, setSelectedModel] = useState('stable-diffusion');
  const [selectedStyle, setSelectedStyle] = useState('');
  const [uploadedImage, setUploadedImage] = useState<string | null>(null);
  const [credits] = useState(1); // New users start with 1 credit
  
  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      const file = e.target.files[0];
      const imageUrl = URL.createObjectURL(file);
      setUploadedImage(imageUrl);
    }
  };

  const handleGenerate = async () => {
    const session = await getSession();
    if (!session) {
      alert('You must log in to generate a design');
      signIn('github'); // Redirect to GitHub login
      return;
    }

    if (!uploadedImage) {
      alert('Please upload an image first');
      return;
    }
    if (!selectedStyle) {
      alert('Please select a style');
      return;
    }
    // Handle generation logic here
    console.log("Design generated successfully");
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-muted-foreground">Transform your room with AI-powered design</p>
      </div>

      <div className="grid gap-6 md:grid-cols-12">
        <div className="md:col-span-8 space-y-6">
          <Card className="p-6">
            <h2 className="text-xl font-semibold mb-4">Generate New Design</h2>
            
            <div className="mb-6">
              <h3 className="font-medium mb-2">1. Choose AI Model</h3>
              <select 
                className="w-full p-2 border rounded"
                value={selectedModel}
                onChange={(e) => setSelectedModel(e.target.value)}
              >
                <option value="stable-diffusion">Stable Diffusion 3</option>
                <option value="dalle2">DALL-E 2</option>
              </select>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">2. Upload Room Photo</h3>
              <div className="border-2 border-dashed rounded-lg p-4 text-center">
                <Input
                  type="file"
                  accept="image/*"
                  onChange={handleImageUpload}
                  className="hidden"
                  id="image-upload"
                />
                <label
                  htmlFor="image-upload"
                  className="cursor-pointer flex flex-col items-center"
                >
                  <Upload className="h-8 w-8 mb-2 text-muted-foreground" />
                  <span className="text-sm text-muted-foreground">
                    Click to upload or drag and drop
                  </span>
                </label>
                {uploadedImage && (
                  <div className="mt-4 relative aspect-video">
                    <Image
                      src={uploadedImage}
                      alt="Uploaded room"
                      fill
                      className="object-cover rounded-lg"
                    />
                  </div>
                )}
              </div>
            </div>

            <div className="mb-6">
              <h3 className="font-medium mb-2">3. Select Style</h3>
              <div className="grid grid-cols-3 gap-2">
                {STYLE_OPTIONS.map((style) => (
                  <Button
                    key={style}
                    variant={selectedStyle === style ? "default" : "outline"}
                    onClick={() => setSelectedStyle(style)}
                    className="w-full"
                  >
                    {style}
                  </Button>
                ))}
              </div>
            </div>

            <Button 
              className="w-full"
              onClick={handleGenerate}
              disabled={!uploadedImage || !selectedStyle}
            >
              <Wand2 className="w-4 h-4 mr-2" />
              Generate Design
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="font-semibold mb-4">Recent Generations</h2>
            <div className="text-sm text-muted-foreground">
              Your generated designs will appear here
            </div>
          </Card>
        </div>

        <div className="md:col-span-4 space-y-6">
          <Card className="p-6">
            <h2 className="font-semibold mb-4">Credits Available</h2>
            <p className="text-3xl font-bold mb-2">{credits}</p>
            <p className="text-sm text-muted-foreground mb-4">
              Each generation uses 1 credit
            </p>
            <Button variant="outline" className="w-full">
              Buy More Credits
            </Button>
          </Card>

          <Card className="p-6">
            <h2 className="font-semibold mb-4">Need Help?</h2>
            <p className="text-sm text-muted-foreground">
              For best results:
              <ul className="list-disc ml-4 mt-2 space-y-1">
                <li>Use well-lit room photos</li>
                <li>Ensure the room is clearly visible</li>
                <li>Avoid blurry images</li>
                <li>Remove personal items if possible</li>
              </ul>
            </p>
          </Card>
        </div>
      </div>
    </div>
  );
}
