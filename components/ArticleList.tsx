import { Article } from '@/lib/types';
import { ArticleCard } from '@/components/ArticleCard';

type Props = {
  articles: Article[];
};

export function ArticleList({ articles }) {
  return (
    <div className="list-none grid grid-cols-1 gap-8">
      {articles.map((article) => (
        <ArticleCard key={article.title} article={article} />
      ))}
    </div>
  );
}
