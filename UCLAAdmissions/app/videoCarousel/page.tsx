"use client"
// page.tsx
import React from 'react';
import CampusInfo from '@/components/videoCarousels/videoCarousel1';
import CampusFoodInfo from '@/components/videoCarousels/videoCarousel2';
import ExtraCurriculars from '@/components/videoCarousels/videoCarousel3';
import Housing from '@/components/videoCarousels/videoCarousel4';


export default function VideoCarousel() {
  return (
    <main className="relative h-screen">
      <CampusInfo style={{ position: 'absolute', top: '25%', right: '30%' }} />
      <CampusFoodInfo style={{ position: 'absolute', top: '25%', left: '30%' }} />
      <ExtraCurriculars style = {{position: "absolute", top: "65%", right: "30%"}}/>
      <Housing style = {{position: "absolute", top: "65%", left: "82.2%"}}/>
    </main>
  );
}
