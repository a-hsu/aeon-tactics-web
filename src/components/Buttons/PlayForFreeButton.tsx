import Link from "next/link";
const PlayForFreeButton = () => {
	return (
		<button
			className="w-40 h-12 bg-black rounded-xl scale-125 hover:scale-110 hover:bg-scooter-100 text-white hover:text-black transition duration-75 drop-shadow-2xl shadow-2xl"
		>
			<Link
				href="/play"
				className="text-sm text-center transition duration-150 font-extrabold"
			>
				PLAY FOR FREE
			</Link>
		</button>
	);
};
export default PlayForFreeButton;
