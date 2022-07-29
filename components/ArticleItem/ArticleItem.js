import { ArticleWrapper } from "./ArticleItem.elements";
import Link from 'next/link';

export const ArticleItem = ({ article }) => {
    return (
        <Link href='/article/[id]' as={`/article/${article.id}`} >
            <ArticleWrapper >
                <h3>{article.title}</h3>
                <p>{article.body}</p>
            </ArticleWrapper>
        </Link>


    )
}