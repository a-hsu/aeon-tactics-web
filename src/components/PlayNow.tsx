import PlayForFreeButton from "./Buttons/PlayForFreeButton";

const PlayNow = () => {
	return (
		<>
			{/* Play Now section */}
			<section
				className=" lg:min-h-[500px] min-h-[600px] bg-scooter-300 "
				id="playnow"
			>
				{/* Content */}
				<div className="flex flex-col mx-auto mt-16 text-center justify-center items-center">
					<h1 className="mx-auto text-white items-center content-center font-extrabold  text-5xl lg:text-6xl w-96 my-4 ">
						BATTLE FOR SOLARA
					</h1>
					<p className=" items-center content-center justify-center lg:w-[800px] mx-8 pt-1 pb-6 text-lg">
						Draft, build, and dominate with a revolving roster of heroes called
						Aeons in round-based 1v1 matches. Purchase mods to upgrade your
						Aeons and select a strategy for your victory.
					</p>
					<div className="justify-center mt-2">
						<PlayForFreeButton />
					</div>
				</div>
			</section>
			{/* </section> */}
		</>
	);
};
export default PlayNow;
