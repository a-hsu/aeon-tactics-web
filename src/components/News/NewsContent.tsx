import Image from "next/image";
const NewsContent = (imagePath: string) => {
	return (
		<div className="border-2 border-solid border-black h-52 m-0 p-0 flex flex-row">
			<div className="m-0 p-0 h-full w-2/5 border-red-400 border-2 border-solid">
				<img src="" alt="" />
			</div>
			<div className="m-0 p-0 h-full w-3/5 border-blue-400 border-2 border-solid"></div>
		</div>
	);
};
export default NewsContent;
