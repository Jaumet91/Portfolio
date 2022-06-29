import { NavBlog } from '../nav';
import { ArticlesSection } from '../pages/Blog';

export const Blog = () => {
  return (
    <div className='dark:bg-background-inverted bg-white transition-colors'>
      <NavBlog />
      <ArticlesSection />
    </div>
  );
};
