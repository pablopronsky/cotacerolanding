import { Hero } from '@/components/Hero';
import { Concept } from '@/components/Concept';
import { Problem } from '@/components/Problem';
import { Protocol } from '@/components/Protocol';
import { Materials } from '@/components/Materials';
import { Works } from '@/components/Works';
import { Cta } from '@/components/Cta';
import { Footer } from '@/components/Footer';

export default function Page() {
  return (
    <main className="w-full flex flex-col">
      <Hero />
      <Concept />
      <Problem />
      <Protocol />
      <Materials />
      <Works />
      <Cta />
      <Footer />
    </main>
  );
}
