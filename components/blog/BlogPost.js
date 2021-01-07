import { FirebaseDatabaseMutation } from '@react-firebase/database';
import { PostHeader } from './PostHeader';
import PostLayout from './PostLayout';
import firebase from "firebase/app";
import "firebase/database";
import { useEffect } from 'react';


export default function BlogPost({ children, meta, related }) {

  useEffect(async () => {
    firebase.database().ref("popular_blog_posts/").child(meta.folder).child('viewCount').set(firebase.database.ServerValue.increment(1))
  });

  return (
    <div>
      <PostLayout related={related}>
        <PostHeader meta={meta} isBlogPost />
        <article>{children}
        <style jsx>{`
        figure {
          width: 50%
          padding: 1rem;
          margin: auto;
        }
        figcaption {
          font-style: italic;
          padding: 1rem;
          text-align: right;
        }
        img {
          display: block;
          margin: auto;
        }
        `}</style></article>
      </PostLayout>
    </div>
  )
}
