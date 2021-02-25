import useSWR from "swr";
import fetch from "unfetch";
import Layout from "../../components/Layout";
import Spinner from "../../components/Spinner";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function About() {
	const { data, error } = useSWR(
		"https://api.coindesk.com/v1/bpi/currentprice/USD.json",
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data) return <div>loading...</div>;
	console.log(data);
	return (
		<Layout>
			<Spinner />
		</Layout>
	);
}
