import Link from 'next/link';

function NewsPage() {
  return (
    <>
      <h1>News page</h1>
      <ul>
        <li>
          <Link href={'/news/news-page-1'}>
            News Page 1
          </Link>
        </li>
        <li>
          <Link href={'/news/news-page-1'}>
            News Page 1
          </Link>
        </li>
      </ul>
    </>
  );
}

export default NewsPage;
