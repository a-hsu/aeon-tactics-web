import Image from "next/image";

export default function Home() {
	return (
		<main className="flex min-h-screen flex-col items-center justify-between p-24">
			<div className="justify-content">
				<h1 className="font-bold">Aeon Tactics</h1>
				<p className="flex text-center">
					Aeon Tactics is a web based autobattler game. Build your team,
					dominate your opponents, claim victory!
				</p>
			</div>
		</main>
	);
}
