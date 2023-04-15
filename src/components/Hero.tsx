import Image from "next/image";
import { CgArrowLongDownR } from "react-icons/cg";
import { FaArrowCircleDown, FaArrowCircleRight } from "react-icons/fa";
import HeroImage from "../../public/assets/HeroImage.png";
const Hero = () => {
	return (
		<>
			<section
				className="flex flex-col w-screen relative lg:min-h-[800px] mx-auto"
				id="hero"
			>
				{/* Hero Image */}
				<div className="block newHeroBackground">
					<Image
						src={HeroImage}
						alt="hero"
						placeholder="blur"
						className="object-cover bg-no-repeat bg-cover top-0 left-0 opacity-40 h-screen w-screen lg:min-h-[800px] -scale-x-100"
					/>
				</div>

				{/* Hero Content */}
				<div className="flex flex-col lg:w-[450px] h-[450px] items-center content-center absolute mt-32  lg:ml-32 mx-auto">
					{/* Inner Content */}
					{/* Logo */}
					<img src="assets/AeonTacticsLogo.png" alt="" className="w-52 h-52 mx-auto" />
					{/* Title */}
					<div className="flex flex-row mx-auto">
						<h1 className=" text-burnt-orange-200 px-2 font-extrabold text-5xl ">
							Aeon
						</h1>
						<h1 className=" text-slate-100 font-extrabold text-5xl">Tactics</h1>
					</div>
					{/* Subtext */}
					<div className="flex flex-col items-center mt-6 mx-6">
						<h2 className=" text-slate-100 font-extrabold text-3xl text-center">
							Coming Soon - Developed by AeTa Studios
						</h2>
						<p className="text-neutral-200 text-lg text-center my-4 px-1">
							Aeon Tactics is an online multiplayer deck building autobattler
							set in a fantastical new world. Build your deck, strategize your
							next move, and claim victory!
						</p>
					</div>
					{/* Learn More Button */}
					<button className=" w-72 h-24 justify-around rounded-2xl  flex items-center bg-gradient-to-r shadow-lg to-burnt-orange-600 from-mirage-200 transition duration-300 hover:ease-in hover:to-burnt-orange-500 hover:from-mirage-100">
						<div className="relative">
							<FaArrowCircleRight
								size={42}
								className="ml-2 drop-shadow-xl -mr-2"
							/>
						</div>
						<p className="m-2 font-bold text-3xl tracking-wider p-2">
							Learn More
						</p>
					</button>
				</div>
				{/* <FaArrowCircleDown className="mx-auto motion-safe:animate-bounce" color="white" size={42} /> */}
			</section>
		</>
	);
};
export default Hero;
