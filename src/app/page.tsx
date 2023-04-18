import FeaturedPost from '@/components/FeaturedPost';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPost />
    </>
  );
}
