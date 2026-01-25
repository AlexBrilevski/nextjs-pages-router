import { useRouter } from 'next/router';

function DetailsPage() {
  const router = useRouter();

  const newsId = router.query.newsId;
  console.log(newsId);

  return (
    <h1>Details page</h1>
  );
}

export default DetailsPage;
