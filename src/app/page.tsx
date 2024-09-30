import { client } from "@/libs/microcms";

export default async function Home() {
	const fetchedNews = await client.get({
		endpoint: "news",
	});
	const fetchedPuppies = await client.get({
		endpoint: "puppies",
	});
	console.log("🚀 ~ Home ~ fetchedDate:", fetchedNews);
	console.log("🚀 ~ Home ~ fetchedPuppies:", fetchedPuppies.contents[0].breed);

	return (
		<div>
			<h1>Home</h1>
			<p>This is the home page.</p>
		</div>
	);
}
