import Image from "next/image";
import ImmortalsPatch from "../../public/assets/ImmortalsPatch.png";
import PlayForFreeButton from "./Buttons/PlayForFreeButton";
const PlayNow = () => {
	return (
		<>
			{/* Play Now section */}
			<section
				className=" lg:min-h-[500px] min-h-[600px] relative"
				id="playnow"
			>
				{/* Content */}
				<div className="block image-wrapper">
					<Image
						src={ImmortalsPatch}
						alt=""
						draggable={false}
						className="object-cover bg-no-repeat opacity-40 h-full w-screen lg:min-h-full absolute"
					/>
				</div>
				<div className="flex flex-col mx-auto mt-16 text-center justify-center items-center">
					<h1 className="mx-auto text-white items-center content-center font-extrabold  text-5xl lg:text-6xl w-full my-4 h-full bg-opacity-40 z-10">
						BATTLE FOR SOLARA
					</h1>
					<p className=" items-center text-white z-10 content-center justify-center lg:w-[800px] mx-8 pt-1 pb-6 text-lg">
						Draft, build, and dominate with a revolving roster of heroes called
						Aeons in round-based 1v1 matches. Purchase mods to upgrade your
						Aeons and select a strategy for your victory.
					</p>
					<div className="justify-center mt-2">
						<PlayForFreeButton />
					</div>
				</div>
			</section>
		</>
	);
};
export default PlayNow;
