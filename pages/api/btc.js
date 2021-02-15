const fetch = require("node-fetch");
export default async (req, res) => {
	const response = await fetch(
		`https://api.coindesk.com/v1/bpi/currentprice/USD.json`
	);
	const json = await response.json();
	return res.json(json);
};
