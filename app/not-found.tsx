import Link from "next/link";

export default function NotFound() {
  return (
    <main className="page not-found">
      <p className="card-kicker">404</p>
      <h1>This petal drifted off.</h1>
      <p>The page you were looking for isn&rsquo;t here.</p>
      <Link href="/" className="button button-primary">
        Back to the portfolio
      </Link>
    </main>
  );
}
