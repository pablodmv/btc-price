import React from "react";
import Head from "next/head";
//import Sidebar from "./Sidebar";
import { useRouter } from "next/router";
//mport Header from "../components/Header";

const Layout = ({ children }) => {
	return (
		<div>
			<Head>
				<title>Btc Price</title>

				<link rel="preconnect" href="https://fonts.gstatic.com" />
				<link
					href="https://fonts.googleapis.com/css2?family=Roboto:ital,wght@0,100;0,300;0,500;1,900&display=swap"
					rel="stylesheet"
				/>

				<link
					rel="stylesheet"
					href="https://cdnjs.cloudflare.com/ajax/libs/normalize/8.0.1/normalize.min.css"
					integrity="sha512-NhSC1YmyruXifcj/KFRWoC561YpHpc5Jtzgvbuzx5VozKpWvQ+4nXhPdFgmx8xqexRcpAglTj9sIBWINXa8x5w=="
					crossorigin="anonymous"
				/>
			</Head>

			<div className="bg-gray-800 min-h-screen flex flex-col justify-center">
				{children}
			</div>
		</div>
	);
};

export default Layout;
