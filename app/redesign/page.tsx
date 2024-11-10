'use client';

import { useState } from 'react';
import { Button } from '@/components/ui/button';
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from '@/components/ui/card';
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from '@/components/ui/select';
import { Input } from '@/components/ui/input';
import { Label } from '@/components/ui/label';

const styles = [
  'Modern',
  'Minimalist',
  'Scandinavian',
  'Industrial',
  'Bohemian',
  'Tropical',
  'Mediterranean',
  'Contemporary',
];

const models = [
  { id: 'sd', name: 'Stable Diffusion 3' },
  { id: 'dalle', name: 'DALL-E 2' },
];

export default function RedesignPage() {
  const [selectedModel, setSelectedModel] = useState('sd');
  const [selectedStyle, setSelectedStyle] = useState('Modern');
  const [image, setImage] = useState<File | null>(null);

  const handleImageUpload = (e: React.ChangeEvent<HTMLInputElement>) => {
    if (e.target.files && e.target.files[0]) {
      setImage(e.target.files[0]);
    }
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    // Handle image generation here
  };

  return (
    <div className="container py-10">
      <Card className="max-w-2xl mx-auto">
        <CardHeader>
          <CardTitle>Redesign Your Room</CardTitle>
          <CardDescription>
            Upload a photo of your room and choose your preferred style
          </CardDescription>
        </CardHeader>
        <CardContent>
          <form onSubmit={handleSubmit} className="space-y-6">
            <div className="space-y-2">
              <Label htmlFor="model">Choose AI Model</Label>
              <Select
                value={selectedModel}
                onValueChange={setSelectedModel}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select AI model" />
                </SelectTrigger>
                <SelectContent>
                  {models.map((model) => (
                    <SelectItem key={model.id} value={model.id}>
                      {model.name}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="style">Choose Style</Label>
              <Select
                value={selectedStyle}
                onValueChange={setSelectedStyle}
              >
                <SelectTrigger>
                  <SelectValue placeholder="Select style" />
                </SelectTrigger>
                <SelectContent>
                  {styles.map((style) => (
                    <SelectItem key={style} value={style}>
                      {style}
                    </SelectItem>
                  ))}
                </SelectContent>
              </Select>
            </div>
            <div className="space-y-2">
              <Label htmlFor="image">Upload Room Photo</Label>
              <Input
                id="image"
                type="file"
                accept="image/*"
                onChange={handleImageUpload}
              />
            </div>
            <Button type="submit" className="w-full">
              Generate Design
            </Button>
          </form>
        </CardContent>
      </Card>
    </div>
  );
}