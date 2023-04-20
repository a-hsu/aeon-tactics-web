import Link from "next/link";


const News = () => {
	const newsArticles = [
		{
			title: "Patch 0.1",
			author: "Huck",
			subtext: "",
			body: "",
		},
		{
			title: "Aeon List",
			author: "Huck",
			subtext: "",
			body: "",
		},
		{
			title: "How to Play Aeon Tactics",
			author: "Huck",
			subtext: "",
			body: "",
		},
	];
	return (
		<>
			<section
				className="flex flex-col w-screen relative bg-white min-h-[600px] mx-auto "
				id="news"
			>
				{/* <BasicDivider /> */}
				{/* Content */}
				{/* The goal here is to be able to programmatically make this list adjust based on the top 3 most recent articles */}
				<div className="flex flex-col mt-40 mx-12">
					{/* Grid */}
					<div className="grid grid-cols-1 grid-rows-3 lg:grid-cols-3 lg:grid-rows-1 gap-4">
						{["01", "02", "03", "11", "12"].map(e => {
							return (
								<div
									key={`${e}`}
									className="border-2 border-solid border-black h-52 m-0 lg:aspect-video flex flex-row"
								>
									<div className="m-0 p-0 h-full w-2/5 border-red-400 border-2 border-solid">
										<img src="" alt="" />
									</div>
									<div className="m-0 p-0 h-full w-3/5 border-blue-400 border-2 border-solid"></div>
								</div>
							);
						})}
					</div>
				</div>
				<div className="flex items-center my-12 p-0 justify-center">
					<Link
						href="/news"
						className="tracking-tighter underline-offset-4 underline hover:text-burnt-orange-500 transition duration-150"
					>
						VIEW ALL
					</Link>
				</div>
			</section>
		</>
	);
};
export default News;
