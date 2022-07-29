import { ArticleListWrapper } from './ArticleList.elements';
import { ArticleItem } from '../ArticleItem/ArticleItem';

export const ArticleList = ({ articles }) => {
    return (
        <ArticleListWrapper>
            {articles.map(article =>
                <ArticleItem article={article} key={article.id}></ArticleItem>
            )}
        </ArticleListWrapper>
    )
}
