import Image from "next/image";
import { CgArrowLongDownR } from "react-icons/cg";
import { FaArrowCircleDown, FaArrowCircleRight } from "react-icons/fa";
import HeroImage from "../../../public/assets/HeroImage.png";
const Hero = () => {
	return (
		<>
			<section
				className="flex flex-col w-screen relative lg:min-h-[800px]"
				id="hero"
			>
				{/* Background Image */}
				<div className="block newHeroBackground">
					{/* <div className="opacity-40 transform -scale-x-100 bg-cover h-screen bg-hero-image"></div> */}
					<Image
						src={HeroImage}
						alt="hero"
						placeholder="blur"
						className="object-cover bg-no-repeat bg-cover top-0 left-0 opacity-40 h-screen w-screen lg:min-h-[800px]"
					/>
					{/* <img
						src="assets/HeroImage.png"
						alt=""
						className="bg-no-repeat g-center opacity-40 transform -scale-x-100 object-cover	bg-cover"
					/> */}
				</div>

				{/* Hero CTA */}

				{/* content */}
				{/* inner content */}
				<div className="flex flex-col lg:w-[450px] h-[450px] items-center content-center absolute mt-32 lg:ml-32 lg:mt-48">
					<img src="assets/AeonTacticsLogo.png" alt="" className="w-52 h-52" />
					<div className="flex flex-row">
						<h1 className=" text-burnt-orange-200 px-2 font-extrabold text-5xl ">
							Aeon
						</h1>
						<h1 className=" text-slate-100 font-extrabold text-5xl">Tactics</h1>
					</div>

					<p className="text-neutral-200 text-lg text-center m-4 px-8">
						Join the battle and lead your team to victory! Unleash your
						strategic prowess and dominate the battlefield!
					</p>

					{/* Button */}
					<button className=" w-72 h-24 justify-around rounded-2xl  flex items-center bg-gradient-to-r shadow-lg to-burnt-orange-600 from-mirage-200 transition duration-300 hover:ease-in hover:to-burnt-orange-500 hover:from-mirage-100">
						<div className="relative">
							{/* <CgArrowLongDownR color="white" className="rounded-full bg-black p-2 ml-2 drop-shadow-xl" size={42} /> */}
							<FaArrowCircleDown
								size={42}
								className="ml-2 drop-shadow-xl -mr-2"
							/>
							{/* <img
								src="assets/AeonTacticsLogo.png"
								alt=""
								className="ml-1 w-12 h-12 relative bg-black rounded-full"
							/> */}
							{/* <div className="rounded-full h-14 w-14 bg-black "></div> */}
						</div>
						<p className="m-2 font-bold text-3xl tracking-wider p-2">
							Learn More
						</p>
					</button>
				</div>
			</section>
		</>
	);
};
export default Hero;
