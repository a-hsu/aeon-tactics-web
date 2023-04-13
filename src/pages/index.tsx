import Head from "next/head";
import Image from "next/image";
import Community from "../components/Community";
import Footer from "../components/Footer";
import Hero from "../components/Hero";
import Navbar from "../components/Navbar";
import News from "../components/News";
import PlayNow from "../components/PlayNow";
import Team from "../components/Team";

export default function Home() {
	return (
		<>
			<Head>
				<title>
					Aeon Tactics - Free to Play - Multiplayer Deck Building Auto Battler
					Game | Use Strategy and Tactics to Dominate the Competition
				</title>
				<meta
					name="description"
					content="Aeon Tactics is a free to play multiplayer deck building auto battler web game. Build, compete, claim victory. Developed by Andrew Hsu - Software Engineer."
				/>
				<meta name="viewport" content="width=device-width, initial-scale=1" />
				<link rel="icon" href="/assets/AeonTacticsLogo.png" />
			</Head>
			<Navbar />
			<main className="content flex flex-col bg-mirage-950">
				<Hero />
				<News />
				<PlayNow />
				<Community />
				<Team />
				<Footer />
			</main>
		</>
	);
}
