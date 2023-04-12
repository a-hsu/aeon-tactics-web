import { AiOutlineLogin, AiOutlineMenu, AiOutlineGithub } from "react-icons/ai";

const Navbar = () => {
	return (
		<nav className="flex fixed w-screen bg-mirage-950 justify-around h-16 z-50">
			{/* Logo */}
			<div className="flex ml-4" id="logo">
				<button className="cursor-pointer">
					<img src="/assets/AeonTacticsLogo.png" alt="" className=" w-16 h-16" />
        </button>
        <div className="p-1 m-1 items-center flex">
          <h1 className="p-1 m-1 font-bold text-white text-center text-2xl">
            AEON TACTICS
          </h1>
        </div>
      </div>

			{/* Links */}
			<div className="flex">
				<ul className="hidden md:flex justify-around items-center p-2 w-72 font-bold">
					{["PLAY NOW", "COMMUNITY", "ABOUT"].map(item => {
						return (
							<li key={`navlink-${item}`} className="p-1 text-white">
								<button>
									<p>{item}</p>
								</button>
							</li>
						);
					})}
				</ul>
        <AiOutlineGithub color="white" className="m-2 items-center self-center" size={32} />
				<button className="flex flex-row items-center p-1 border-mirage-200 border-solid border-2 rounded-2xl m-1">
					<p className="text-white font-bold p-2">LOGIN</p>
          <AiOutlineLogin color="white" size={ 28 } className="mr-1" />
				</button>

				{/* Hamburger Menu */}
				<button
					className="md:hidden cursor-pointer border-none p-1 m-1 mr-4 "
					onClick={() => {
						console.log("hamburger clicked");
					}}
				>
					<AiOutlineMenu size={28} color="white" className=""/>
				</button>
			</div>
		</nav>
	);
};
export default Navbar;
