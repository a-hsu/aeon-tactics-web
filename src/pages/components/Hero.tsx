const Hero = () => {
	return (
		<>
			<section
				className="flex  overflow-x-hidden flex-col w-screen h-screen relative"
				id="hero"
			>
				<img
					src="assets/HeroImage.png"
					alt=""
					className=" min-w-max opacity-80 transform -scale-x-100"
				/>
				<div className="flex flex-col w-[450px] min-w-[350px] h-[450px] rounded-3xl bg-opacity-40 p-4 items-center absolute left-0 right-0 m-auto mt-32 md:ml-32 md:mt-32">
					<img src="assets/AeonTacticsLogo.png" alt="" className="w-52 h-52" />
					<div className="flex flex-row justify-around">
						<h1 className=" text-burnt-orange-200 px-2 font-extrabold text-5xl  text-center">
							Aeon
						</h1>
						<h1 className="text-white font-extrabold text-5xl  text-center">
							Tactics
						</h1>
					</div>

					<p className="text-neutral-200 text-lg text-center m-4 px-8">
						Join the battle and lead your team to victory! Unleash your
						strategic prowess and dominate the battlefield!
					</p>
					<button className=" w-54 h-14 justify-around rounded-2xl  flex items-center bg-gradient-to-r shadow-lg from-burnt-orange-600 to-mirage-200 hover:bg-gradient-to-r hover:from-burnt-orange-500 hover:to-mirage-100">
						<div className="relative">
							<img
								src="assets/AeonTacticsLogo.png"
								alt=""
								className="ml-1 w-12 h-12 relative bg-black rounded-full"
							/>
							{/* <div className="rounded-full h-14 w-14 bg-black "></div> */}
						</div>
						<p className="m-2 font-bold text-2xl p-2">Learn More</p>
					</button>
				</div>
			</section>
		</>
	);
};
export default Hero;
