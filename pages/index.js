import Link from "next/link";
import { useEffect } from "react";
import { Container, Row, Col } from "react-bootstrap";
import { Post } from "../components/blog/Post";
import { posts } from "../functions/blog/getBlogPosts";

function onLoad(video)
{
  console.log("test");
  video.currentTime = 0;
}

export default function Home() {

  useEffect(() => {
    setTimeout(() => document.getElementById('project').play(), 100)
  }, [])

  return (
    <div className="OK">
      <Container fluid>
        <Row>
          <Col>
            <div>
              <img src="/personal-website/profile.png"/>
            </div>
          </Col>
          <Col>
            <div className="right-column">
              <Row className="justify-content-center text-center">
                <div>
                  <Link href={"/projects"}>
                    <a><h1 className="title">Projects</h1></a>
                  </Link>
                  <video id="project" src="/personal-website/tinykeep_project.mp4" loop={true} muted={true} width="300"/>
                </div>
              </Row>
              <Row>
                <div className="text-center blog-title">
                  <Link href={"/blog"}>
                    <a><h1 className="title">Blog</h1></a>
                  </Link>
                </div>
                <div className="recent-blog-post">
                  <div className="inner-blog-post">
                    {posts
                      .sort((a, b) => new Date(a.module.meta.date) - new Date(b.module.meta.date))
                      .slice(0, 1)
                      .map((post) => (
                      <Post key={post.link} post={post} />
                    ))}
                  </div>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          #project {
            width: 59%;
          }
          .title {
            margin: 2rem auto;
          }
          .blog-title {
            min-width: 100%
          }
          .right-column {
            margin-right: 20rem;
          }
          .recent-blog-post {
            margin: 0 auto;
          }
        `}
      </style>
    </div>
  );
}
