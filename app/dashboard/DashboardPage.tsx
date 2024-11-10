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
  const [credits] = useState(1);

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
      signIn('github');
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

    console.log("Design generated successfully");
  };

  return (
    <div className="p-8">
      <div className="mb-8">
        <h1 className="text-3xl font-bold mb-4">Dashboard</h1>
        <p className="text-muted-foreground">Transform your room with AI-powered design</p>
      </div>
      {/* Remaining component */}
    </div>
  );
}
