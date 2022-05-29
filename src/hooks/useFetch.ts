import React from "react";
export const useFetch = (callback: any): [() => any, boolean, string] => {
	const [error, setError] = React.useState("");
	const [loading, setLoding] = React.useState(false);

	const fetch = () => {
		try {
			setLoding(true);
			callback();
		} catch (e: any) {
			setError(e);
		} finally {
			setLoding(false);
		}
	};
	return [fetch, loading, error];
};
