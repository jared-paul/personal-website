import Link from "next/link";

export default function Header() {
  return (
    <nav>
      <div>
        <Link href="/">
          <a className="left-link"><h2>Home</h2></a>
        </Link>
      </div>
      <div>
        <Link href="/blog">
          <a className="right-link">Blog</a>
        </Link>
        <Link href="/">
          <a className="right-link">About</a>
        </Link>
      </div>
      <style jsx>{`
        nav {
          background: #444;
          width: auto;
          padding: 1rem 2rem;
          display: flex;
          justify-content: space-between;
          align-items: center;
          font-size: 1rem;
        }
        nav .right-link {
          margin-right: 1rem;
          text-decoration: none;
        }
        nav .left-link {
          text-decoration: none;
        }
        nav a:hover {
          text-decoration: underline;
        }
      `}</style>
    </nav>
  );
}