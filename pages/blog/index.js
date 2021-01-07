import { Post } from "../../components/blog/Post";
import { importPost, posts } from "../../functions/blog/getBlogPosts";
import BlogLayout from "../../components/blog/BlogLayout"
import { Col, Container, Row } from "react-bootstrap";
import SearchBar from "../../components/blog/SearchBar";
import { useEffect, useState } from "react";
import levenshtein from "js-levenshtein";
import firebase from "firebase/app";
import "firebase/database";
import BarLoader from "react-spinners/BarLoader";

export default function BlogHome() {
  const [searchWord, setSearchWord] = useState('');
  const [popularPosts, setPopularPosts] = useState();
  const [loading, setLoading] = useState(true);

  const updateSearchWord = (input) => {
    if (input == "")
    {
      setSearchWord('');
      return;
    }

    setSearchWord(input);
  }

  const maxLevenshtein = (input, post) => {
    return post.module.meta.tags.reduce((max, value) => {return Math.min(levenshtein(max, input), levenshtein(value, input))});
  }

  useEffect(() => {
    firebase.database().ref("popular_blog_posts/").orderByChild("viewCount").limitToLast(5).on("value", (snapshot) =>{
      let popularPostsSorted = [];
      snapshot.forEach((child) => {
        popularPostsSorted.push(child.key);
      })

      setPopularPosts(popularPostsSorted.reverse());
    })
  }, [])

  const overrideCSS = `
    display: block;
    margin-top: 10rem;
    margin-right: 5rem;
  `

  return (
    <BlogLayout>
      <Container fluid>
        <Row>
          <Col xs={4}>
            <div className="left-most-col">
              <h1 className="post-title">Popular Posts</h1>
              { popularPosts == null ? 
              <span className="d-flex justify-content-center"><BarLoader color={"white"} css={overrideCSS} size={150} /></span> : 
              popularPosts.map((post) => (<Post key={post} post={importPost(post)} />)) }
            </div>
          </Col>
          <Col xs={4}>
            <h1 className="post-title">Recent Posts</h1>
            {posts
              .sort((a, b) => new Date(a.module.meta.date) - new Date(b.module.meta.date))
              .map((post) => (
              <Post key={post.link} post={post} />
            ))}
          </Col>
          <Col>
            <SearchBar input={searchWord} onChange={updateSearchWord}/>
            {searchWord != "" ? posts
            .sort((postA, postB) => maxLevenshtein(searchWord, postA) - maxLevenshtein(searchWord, postB))
            .slice(0, 5)
            .map((post) => (<Post key={post.link} post={post} />)) 
            : null}
          </Col>
        </Row>

      </Container>
      <style jsx>
        {`
          .left-most-col {
            margin-left: 3rem;
          }
          .post-title {
            font-size: 2.25rem;
            font-weight: 700;
            margin-top: 1.5rem;
            margin-bottom: 1.5rem;
          }
        `}
      </style>
    </BlogLayout>
  );
}