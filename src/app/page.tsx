import PostCarousel from '@/components/Post/PostCarousel';
import FeaturedPost from '@/components/Post/FeaturedPost';
import Hero from '@/components/Hero';

export default function HomePage() {
  return (
    <>
      <Hero />
      {/* @ts-expect-error Async Server Component */}
      <FeaturedPost />
      {/* @ts-expect-error Async Server Component */}
      <PostCarousel />
    </>
  );
}
