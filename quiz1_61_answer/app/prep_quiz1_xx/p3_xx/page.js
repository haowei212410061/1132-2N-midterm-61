import { getBlogs } from '@/lib/db-blog';
import Blogs_xx from '@/components/demo_61/w06_blogs_61/Blogs_61';

export default async function P3Page_xx() {
  const blogs = await getBlogs();
  console.log('blogs', JSON.stringify(blogs));
  return (
    <>
      <Blogs_xx blogs={blogs} />
    </>
  );
}
