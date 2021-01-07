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
              <img src="profile.png"/>
            </div>
          </Col>
          <Col>
            <div className="right-column">
              <Row className="justify-content-center text-center">
                <div>
                  <h1 className="project-title">Projects</h1>
                  <video id="project" src="tinykeep_project_test.mp4" loop={true} muted={true} width="300"/>
                </div>
              </Row>
              <Row className="justify-content-center text-center">
                <div>
                  <h1 className="project-title">Blog</h1>
                </div>
              </Row>
            </div>
          </Col>
        </Row>
      </Container>
      <style jsx>
        {`
          .project-title {
            margin: 2rem auto;
          }
          .right-column {
            margin-right: 10rem;
          }
        `}
      </style>
    </div>
  );
}
