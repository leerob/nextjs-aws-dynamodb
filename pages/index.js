import useSWR from 'swr';

const fetcher = (url) => fetch(url).then((res) => res.json());

// Learn more about using SWR to fetch data from
// your API routes -> https://swr.vercel.app/
export default function App() {
  const { data, error } = useSWR(
    '/api/item?id=e9b203d9-f338-44e7-b1dd-7249f9182447',
    fetcher
  );

  if (error) return 'An error has occurred.';
  if (!data) return 'Loading...';
  return <code>{JSON.stringify(data, null, 2)}</code>;
}
