import React from "react";

const goals = () => {
	return (
		<main className="bg-gray-50 w-full h-full min-h-screen ">
			<div className="bg-white w-full border-b-[1px] border-slate-200 p-5">
				<div className="w-full max-w-7xl mx-auto flex items-center">
					<span className="text-2xl font-semibold text-slate-700">
						<i className="fa-solid fa-hands-praying mr-3 text-[#ff6682]" />
						Mantra
					</span>
				</div>
			</div>
			<div className="w-full max-w-7xl mx-auto py-20 px-10 flex items-start">
				<div className="flex flex-col w-[400px] mr-14 shrink-0 space-y-16">
					<div className="bg-[#ff6682] rounded-2xl bg-opacity-10 flex flex-col p-8 w-full hover:bg-opacity-20 duration-200">
						<span className="font-semibold text-[#f65a77] text-2xl mb-5">
							Your Mantra
						</span>

						<div className="flex flex-col space-y-5 text-[#ff6682] font-medium">
							<span>{`"I am conquering my fears and becoming stronger each day"`}</span>
							<span>{`“I create my own path and walk it with joy.”`}</span>
							<span>{`“I will have a good day, because it's my choice.”`}</span>
						</div>
					</div>

					<div className="bg-white rounded-2xl ring-1 ring-slate-200 flex flex-col p-8 w-full">
						<span className="font-semibold text-slate-800 text-2xl">
							Your Dailies
						</span>

						<hr className="my-5" />

						<div className="flex flex-col space-y-1 text-slate-400">
							<span className="line-through">1. Lorem ipsum dolor sit amet.</span>
							<span className="line-through">1. Lorem ipsum dolor sit amet.</span>
							<span className="line-through">1. Lorem ipsum dolor sit amet.</span>
							<span>1. Lorem ipsum dolor sit amet.</span>
							<span>1. Lorem ipsum dolor sit amet.</span>
							<span>1. Lorem ipsum dolor sit amet.</span>
							<span>1. Lorem ipsum dolor sit amet.</span>
							<span>1. Lorem ipsum dolor sit amet.</span>
							<span>1. Lorem ipsum dolor sit amet.</span>
						</div>
					</div>
				</div>

				<div className="flex flex-col w-full">
					{/* <h1 className="text-3xl font-semibold">Goals</h1> */}
					<div className="w-full grid grid-cols-2 gap-7">
						<div className="bg-white rounded-xl w-full ring-1 ring-slate-200 flex flex-col p-8">
							<h1 className="font-bold text-2xl mb-3 text-slate-700">
								Finish Creating Mantra
							</h1>
							<p className="text-slate-400 text-sm">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et temporibus,
								doloremque assumenda qui ducimus fuga! Maxime adipisci facere corporis
								nisi consectetur at quas quod.
							</p>

							<hr className="my-5" />

							<div className="flex flex-col space-y-2">
								<div className="flex items-center space-x-3 text-sm font-medium text-slate-700">
									<input
										type="checkbox"
										className="checkbox checkbox-sm checkbox-primary"
									/>

									<span className="line-through text-slate-400">
										Lorem ipsum dolor sit amet.
									</span>
								</div>{" "}
								<div className="flex items-center space-x-3 text-sm font-medium text-slate-700">
									<input
										type="checkbox"
										className="checkbox checkbox-sm checkbox-primary"
									/>

									<span>Lorem ipsum dolor sit amet.</span>
								</div>{" "}
								<div className="flex items-center space-x-3 text-sm font-medium text-slate-700">
									<input
										type="checkbox"
										className="checkbox checkbox-sm checkbox-primary"
									/>

									<span>Lorem ipsum dolor sit amet.</span>
								</div>{" "}
								<div className="flex items-center space-x-3 text-sm font-medium text-slate-700">
									<input
										type="checkbox"
										className="checkbox checkbox-sm checkbox-primary"
									/>

									<span>Lorem ipsum dolor sit amet.</span>
								</div>
							</div>
						</div>

						<div className="bg-white rounded-xl w-full ring-1 ring-slate-200 flex flex-col p-8">
							<h1 className="font-bold text-2xl mb-4">Finish Creating Mantra</h1>
							<p className="text-slate-400 text-sm">
								Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et temporibus,
								doloremque assumenda qui ducimus fuga! Maxime adipisci facere corporis
								nisi consectetur at quas quod.
							</p>
						</div>
					</div>
				</div>
			</div>
		</main>
	);
};

export default goals;
