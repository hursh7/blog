import FilterablePost from '@/components/Post/FilterablePost';
import { getAllPosts } from '@/service/posts';

export default async function PostsPage() {
  const posts = await getAllPosts();
  const categories = [...new Set(posts.map(post => post.category))];
  //Set은 중복이 되지 않으므로 고유한 category 배열이 만들어 진다.

  return <FilterablePost posts={posts} categories={categories} />;
}
