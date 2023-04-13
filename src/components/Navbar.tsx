import Link from "next/link";
import { AiOutlineGithub, AiOutlineLogin, AiOutlineMenu } from "react-icons/ai";

const Navbar = () => {
	return (
		<header className=" overflow-hidden flex fixed w-screen bg-mirage-950 justify-around h-20 z-50">
			{/* Logo */}
			<div className="flex ml-4" id="logo">
				<Link href="/">
					{/* <button className="cursor-pointer">
					<img
						src="/assets/AeonTacticsLogo.png"
						alt=""
						className="w-auto h-auto xs:w-14 xs:h-14 "
					/>
					</button> */}
				</Link>
				<div className="p-0 m-1 items-center flex">
					<Link
						href="/"
						className="p-0 m-0 font-bold text-white text-center text-2xl"
					>
						AEON TACTICS
					</Link>
				</div>
			</div>

			{/* NavLinks */}
			<nav className="flex">
				<ul className="hidden lg:flex items-center m-0 p-0 font-bold">
					{["PLAY", "NEWS", "COMMUNITY", "ABOUT"].map(item => {
						return (
							<li
								key={`navlink-${item}`}
								className=" hover:bg-slate-600 hover:ease-in px-2 rounded-md transition duration-15 text-white"
							>
								<Link href={`/${item.toLowerCase()}`}>
									<p>{item}</p>
								</Link>
							</li>
						);
					})}
				</ul>
				<Link href="https://github.com/a-hsu/aeon-tactics-web">
					<AiOutlineGithub
						color="white"
						className="self-center h-full px-2 hover:bg-slate-600 hover:ease-in transition duration-150"
						size={46}
					/>
				</Link>

				<button className="flex flex-row items-center h-full border-mirage-200 border-solid px-2  hover:bg-slate-600 hover:ease-in transition duration-150">
					<p className="text-white font-bold p-2">LOGIN</p>
					<AiOutlineLogin color="white" size={28} className="mr-1" />
				</button>

				{/* Hamburger Menu */}
				<button
					className="lg:hidden cursor-pointer border-none mx-2 px-2 w mr-4 hover:bg-slate-600 hover:ease-in transition duration-150 "
					onClick={() => {
						console.log("hamburger clicked");
					}}
				>
					<AiOutlineMenu size={28} color="white" className="" />
				</button>
			</nav>
		</header>
	);
};
export default Navbar;
