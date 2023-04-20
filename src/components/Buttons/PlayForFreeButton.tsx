import Link from "next/link";
const PlayForFreeButton = () => {
	return (
		<button className=" w-48 h-14 bg-slate-300 rounded-xl hover:scale-95 hover:bg-scooter-100  transition duration-75 drop-shadow-2xl shadow-2xl">
			<Link
				href="/play"
				className="text-sm p-1 text-center transition duration-150 font-extrabold"
			>
				PLAY FOR FREE
			</Link>
		</button>
	);
};
export default PlayForFreeButton;
