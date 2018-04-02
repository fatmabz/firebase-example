export interface ArticleData {
  name: string;
  description: string;
  type: string;
  status: boolean;
}
export const mapToArticleData = function (article: ArticleData): ArticleData {
  return {
    name: article.name,
    description: article.description,
    type: article.type,
    status: article.status
  };
}
