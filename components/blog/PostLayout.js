import { Container, Row, Col } from "react-bootstrap";
import { Post } from "./Post";

export default function PostLayout({ children, related }) {
    return (
      <div>
        <style jsx>{`
          @import url("https://fonts.googleapis.com/css2?family=Nunito:wght@400;700&display=swap|Roboto:wght@400;700&display=swap");
          html,
          body {
            margin: 0;
            padding: 0;
            font-family: "Roboto", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
            background: #333;
            color: #fff;
            font-size: 1rem;
          }
          h1,
          h2,
          h3,
          h4,
          h5,
          h6 {
            font-weight: 700;
            font-family: "Nunito", -apple-system, BlinkMacSystemFont, "Segoe UI",
              Roboto, Oxygen, Ubuntu, Cantarell, "Open Sans", "Helvetica Neue",
              sans-serif;
          }
          a {
            color: #fff;
          }
          .posts {
            margin: 2rem auto;
            padding: 0 1rem;
          }
          .related-posts {
              margin: 2rem auto;
              padding: 0 1rem;
          }
          .related-posts-title {
            font-size: 2rem;
            font-weight: 700;
            color: white;
            margin-bottom: 2rem;
          }
          blockquote {
            border-left: 10px solid #ccc;
            padding-left: 10px;
          }
        `}</style>
        <main>
          <Container fluid>
              <Row>
                  <Col xs={2}>
                  </Col>
                  <Col xs={7}>
                    <div className="posts">{children}</div>
                  </Col>
                  <Col>
                    <div className="related-posts">
                      <h1 className="related-posts-title">Related Posts</h1>
                      {related}
                    </div>
                  </Col>
              </Row>
          </Container>
        </main>
      </div>
    );
  }