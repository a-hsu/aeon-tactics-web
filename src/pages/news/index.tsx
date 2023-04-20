import Navbar from "@/components/Navbar";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import ImmortalsPatch from "../../../public/assets/ImmortalsPatch.png";

const serverUrl = process.env.SERVER_URL || "";
const News = ({ data }: any) => {
	return (
		<>
			<Head>
				<title>Aeon Tactics News</title>
			</Head>
			<section className="bg-slate-50 h-full">
				<h1 className="font-bold text-center m-2 text-4xl">GAME NEWS</h1>
				<div className="grid grid-cols-1 grid-rows-3 md:grid-cols-2 md:grid-rows-2 lg:grid-cols-3 lg:grid-rows-2 p-12 gap-4 ">
					{data.map((article: any, index: number) => (
						<div
							key={`${index} + ${article.id}`}
							className="border-2 border-solid border-slate-400 bg-white"
						>
							<Link href={`/news/${article.id}`} className="flex flex-row">
								{/* Image */}
								<div className="w-40 h-40 p-1">
									{/* <Image
										src={article.image}
										alt=""
										className="bg-no-repeat object-cover w-full h-full"
									/> */}
									<Image
										src={ImmortalsPatch}
										alt=""
										className="bg-no-repeat object-cover w-full h-full"
									/>
								</div>
								{/* Text */}
								<div className="flex flex-col w-full">
									<h1 className="font-bold">{article.title}</h1>
									<p className=" tracking-tight text-slate-600">
										{article.subtitle}
									</p>
								</div>
							</Link>
						</div>
					))}
				</div>
				<Link
					href="/"
					className=" underline ml-2 underline-offset-2 cursor-pointer pb-12"
				>
					BACK TO HOME
				</Link>
			</section>
		</>
	);
};

export async function getServerSideProps(context: any) {
	try {
		// todo make fetch url go to /news correctly
		const res = await fetch(serverUrl + ``);

		const data = await res.json();
		return {
			props: { data: data.articles }, // will be passed to the page component as props
		};
	} catch (error) {
		console.error(error);
	}
}

export default News;
