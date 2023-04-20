import Navbar from "@/components/Navbar";
import Link from "next/link";

const AuthLayout = ({ children }: any) => {
	return (
		<>
			{/* <Navbar /> */}
			<main
				className="mx-auto mt-2 bg-gradient-to-br from-scooter-50 to-mirage-200 h-screen min-h-screen w-full"
				id="signin"
			>
				<Link href="/" className=" underline ml-2 underline-offset-2 cursor-pointer pb-12">BACK TO HOME</Link>
				<div className="h-8"></div>
				{children}
			</main>
		</>
	);
};
export default AuthLayout;
