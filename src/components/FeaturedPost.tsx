import { getFeaturedPosts } from '@/service/posts';
import PostContainer from './PostContainer';

export default async function FeaturedPost() {
  const posts = await getFeaturedPosts();
  return (
    <section>
      <h2 className='text-2xl font-bold my-4'>Featured Posts</h2>
      <PostContainer posts={posts} />
    </section>
  );
}
