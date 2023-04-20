import Navbar from "@/components/Navbar";
import Head from "next/head";
import Link from "next/link";
import { FaDiscord, FaReddit, FaTwitter, FaYoutube } from "react-icons/fa";
const Community = () => {
	return (
		<>
			<Head>
				<title>Aeon Tactics - Community</title>
			</Head>
			<Navbar />
			<main className="block bg-mirage-950 h-full md:h-screen">
				{/* <Navbar /> */}
				<div className="flex flex-col md:flex-row justify-around pt-52 space-y-4 items-center">
					<Link href="/">
						<div className="flex flex-col items-center space-y-2  border-2 border-white w-40 h-40 rounded-full justify-center hover:scale-90 transition duration-150">
							<FaDiscord size={96} color="white" />
						</div>
					</Link>
					<Link href="/">
						<div className="flex flex-col items-center space-y-2  border-2 border-white w-40 h-40 rounded-full justify-center  hover:scale-90 transition duration-150">
							<FaTwitter size={96} color="white" />
						</div>
					</Link>
					<Link href="/">
						<div className="flex flex-col items-center space-y-2  border-2 border-white w-40 h-40 rounded-full justify-center   hover:scale-90 transition duration-150">
							<FaReddit size={96} color="white" />
						</div>
					</Link>
					<Link href="/">
						<div className="flex flex-col items-center space-y-2  border-2 border-white w-40 h-40 rounded-full justify-center  hover:scale-90 transition duration-150">
							<FaYoutube size={96} color="white" />
						</div>
					</Link>
				</div>
				<div className="py-16 px-8">
					<h1 className="text-white text-center font-extrabold md:text-6xl text-4xl tracking-tight">
						JOIN OUR COMMUNITY
					</h1>
				</div>
			</main>
		</>
	);
};

export default Community;
