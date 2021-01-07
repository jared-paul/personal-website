import Link from "next/link";
import { PostHeader } from "./PostHeader";

export const Post = ({ post }) => {
  const {
    link,
    module: { meta }
  } = post;

  return (
    <article>
      <PostHeader meta={meta} />
      <Link href={"/blog/posts" + link}>
        <a>Read more...</a>
      </Link>
      <style jsx>
        {`
          article {
            margin-bottom: 2.5rem;
          }
        `}
      </style>
    </article>
  );
};