import useSWR from "swr";
import fetch from "unfetch";
import Layout from "../components/Layout";
import Spinner from "../components/Spinner";

const fetcher = (url) => fetch(url).then((r) => r.json());

export default function About() {
	const { data, error } = useSWR(
		"https://api.coindesk.com/v1/bpi/currentprice/USD.json",
		fetcher
	);

	if (error) return <div>failed to load</div>;
	if (!data)
		return (
			<div>
				<Spinner />
			</div>
		);
	console.log(data);
	return (
		<Layout>
			<div className="w-full w-lg h-full bg-gray-800 text-white text-center">
				<h1 className="uppercase md:text-4xl text-2xl p-3 ">
					Precio del bitcoin
				</h1>
				{/* <div>hello {data.bpi}!</div>; */}

				<div className="md:text-6xl text-3xl mt-3 mb-9">
					U$S {data.bpi.USD.rate}
				</div>
				<div className="text-sm  mt-3">{data.time.updated}</div>
			</div>
		</Layout>
	);
}
