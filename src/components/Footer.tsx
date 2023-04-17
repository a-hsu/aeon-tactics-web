import Image from "next/image";
import Link from "next/link";
import { AiFillCaretUp } from "react-icons/ai";
import Logo from "../../public/assets/AeonTacticsLogo.png";
const Footer = () => {
	return (
		<>
			<footer className="block m-0 p-0 min-h-[510px] bg-mirage-950 w-screen text-gray-500">
				{/* Content */}
				<div className="pt-[60px] px-[20px] pb-[40px] text-center ">
					<div className="mx-auto w-full max-w-screen-[1440px]">
						{/* Links */}
						<div className="flex flex-col">
							{/* Logo */}
							<div>
								<Link href="#">
									<Image
										src={Logo}
										alt=""
										className="p-0 w-16 h-16 grayscale mx-auto hover:grayscale-0 transition duration-300"
									/>
								</Link>
							</div>
							{/* Links */}
							<nav className="flex">
								<ul className="flex items-center m-0 p-0 font-bold">
									{["GAME", "PLAY", "DATABASE", "AEONS", "SOLARA", "ABOUT"].map(
										item => {
											return (
												<li
													key={`navlink-${item}`}
													className=" hover:bg-slate-600 hover:ease-in px-4 rounded-md transition duration-15 text-white"
												>
													<Link href={`/${item.toLowerCase()}`}>
														<p>{item}</p>
													</Link>
												</li>
											);
										}
									)}
								</ul>
							</nav>
						</div>
						{/* Social Icons */}
						<div>
							{/* Discord */}
							{/* Twitter */}
							{/* YouTube */}
							{/* Reddit */}
							{/* Github */}
						</div>
						{/* Copyright */}
						<div>
							<p className=" text-xs text-center">
								© 2023 AeTa Studios, Inc. All Rights Reserved.
							</p>
						</div>
						{/* TOP THE TOP */}
						<div>
							<Link
								href="#"
								className="text-sm text-center flex flex-row items-center justify-evenly mx-auto w-36 tracking-tighter"
							>
								<p>TO THE SURFACE</p>
								<AiFillCaretUp />
							</Link>
						</div>
					</div>
				</div>
			</footer>
		</>
	);
};
export default Footer;
