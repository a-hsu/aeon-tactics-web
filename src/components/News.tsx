import Link from "next/link";
import BasicDivider from "./Dividers/BasicDivider";

const News = () => {
	return (
		<>
			<section
				className="flex flex-col w-screen relative bg-white min-h-[600px] mx-auto "
				id="news"
			>
				{/* <BasicDivider /> */}
				{/* Content */}
				<div className="flex flex-col mt-40 mx-24">
					{/* Grid */}
					<div className="grid grid-cols-3 grid-rows-2 gap-4">
						{["01", "02", "03", "11", "12"].map(e => {
							return (
								<div
									key={`${e}`}
									className="border-2 border-solid border-black h-52 m-0 p-0 flex flex-row"
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
				<div className="flex items-center my-12 p-2 justify-center">
					<button className="mx-auto">
						<Link href="/news" className="text-center tracking-tighter underline-offset-4 underline hover:text-burnt-orange-500 transition duration-150">VIEW ALL</Link>
					</button>
				</div>
			</section>
		</>
	);
};
export default News;
