import Link from "next/link";

export default function Home() {
	return (
		<main className="bg-white w-full min-h-screen">
			<div className="flex flex-col w-full max-w-7xl mx-auto p-10">
				<div className="w-full flex items-center mb-24">
					<span className="text-2xl font-semibold text-slate-700">
						<i className="fa-solid fa-hands-praying mr-3 text-[#ff6682]" />
						Mantra
					</span>
				</div>

				<div className="flex flex-col items-center justify-center text-center mx-auto max-w-3xl text-slate-700">
					<h1 className="text-6xl font-bold mb-5">
						Never Lose Your <span className="text-primary">Focus.</span> Keep Towards
						Your <span className="text-primary">Goals.</span>
					</h1>
					<p className="text-lg">
						Keep track of your Mantra, daily tasks, and short/long term goals.
					</p>
					<div className="flex items-center justify-end space-x-3 mt-10 mb-10">
						<a
							href="#"
							className="bg-white border-[1px] border-slate-200 text-slate-600 px-4 py-2 rounded-full font-medium flex items-center"
						>
							<i className="fa-solid fa-play mr-2 text-primary" /> Watch Video
						</a>

						<Link href="/app">
							<a className="bg-[#ff6682] border-[1px] border-[#f65a77] text-white px-4 py-2 rounded-full font-medium flex items-center">
								Go to App <i className="fa-solid fa-arrow-right ml-2" />
							</a>
						</Link>
					</div>

					<img src="ill2.png" width={500} alt="" />
				</div>
			</div>
		</main>
	);
}
