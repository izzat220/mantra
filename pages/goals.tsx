import { motion } from "framer-motion";
import React, { useState } from "react";
import Modal from "./components/Modal";

let arr = [1, 2, 3, 4, 5];

interface Daily {
	text: string;
	completed: boolean;
}
const Goals = () => {
	const [dailies, setDailies] = useState<Daily[]>([
		{ text: "First daily goes here", completed: false },
		{ text: "Second daily goes here", completed: false },
		{ text: "Third daily goes here", completed: false },
		{ text: "Fourth daily goes here", completed: false },
		{ text: "Fifth daily goes here", completed: false },
		{ text: "Sixth daily goes here", completed: false },
		{ text: "Seventh daily goes here", completed: false },
	]);
	const [viewAddGoal, setViewAddGoal] = useState<boolean>(false);

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
				<div className="flex flex-col w-[375px] mr-14 shrink-0 space-y-16">
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

						<div className="flex flex-col space-y-3 text-slate-400">
							{dailies.map((item, index) => {
								return (
									<div
										key={index}
										className="flex items-center space-x-3 text-sm font-medium text-slate-700"
									>
										<input
											type="checkbox"
											className="checkbox checkbox-sm checkbox-primary"
											checked={item.completed}
											onChange={() => {
												let newArr = [...dailies];
												newArr[index].completed = !item.completed;
												newArr = newArr
													.filter((e) => !e.completed)
													.concat(newArr.filter((e) => e.completed));

												setDailies(newArr);
											}}
										/>

										<span
											className={`${item.completed ? "line-through text-slate-400" : ""}`}
										>
											{item.text}
										</span>
									</div>
								);
							})}
						</div>
					</div>
				</div>

				<div className="flex flex-col w-full">
					<div className="flex items-center justify-between w-full mb-8">
						<h1 className="text-3xl font-semibold text-slate-700">Your Goals</h1>

						<div className="flex space-x-2 items-center">
							<a
								href="#"
								className="bg-[#ff6682] border-[1px] border-[#f65a77] text-white text-sm px-3 py-1 rounded-full font-medium"
							>
								Get Started
							</a>
							<a
								href="#"
								className="bg-white border-[1px] border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium"
							>
								<i className="fa-solid fa-play mr-3 text-[#ff6682]" />
								Watch Video
							</a>
						</div>
					</div>
					{/* <h1 className="text-3xl font-semibold">Goals</h1> */}
					<div className="w-full grid grid-cols-2 gap-7">
						{arr.map((item, index) => {
							return (
								<div
									key={index}
									className="bg-white rounded-xl w-full ring-1 ring-slate-200 flex flex-col p-8"
								>
									<h1 className="font-bold text-2xl mb-3 text-slate-700">
										Finish Creating Mantra
									</h1>
									<p className="text-slate-400 text-sm">
										Lorem ipsum dolor, sit amet consectetur adipisicing elit. Et
										temporibus, doloremque assumenda qui ducimus fuga! Maxime adipisci
										facere corporis nisi consectetur at quas quod.
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

									<div className="flex items-center justify-between mt-10">
										<a
											href="#"
											className="bg-white border-[1px] border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium"
										>
											<i className="fa-solid fa-pen mr-2 text-[#ff6682]" />
											Edit Goal
										</a>

										<a
											href="#"
											className="bg-[#ff6682] border-[1px] border-[#f65a77] text-white text-sm px-3 py-1 rounded-full font-medium"
										>
											<i className="fa-solid fa-check mr-2" />
											Complete
										</a>
									</div>
								</div>
							);
						})}
					</div>
				</div>
			</div>

			{viewAddGoal && (
				<Modal>
					<motion.div
						initial={{ opacity: 0, x: -100 }}
						animate={{
							opacity: 1,
							x: 0,
							transition: { ease: "easeInOut", duration: 0.2525 },
						}}
						className="bg-white rounded-r-2xl min-h-screen w-[450px] flex flex-col p-8 text-slate-700"
					>
						<h1 className="font-bold text-3xl mb-10">Set A New Goal</h1>
						<span className="font-bold text-sm mb-1">Goal Title</span>
						<input className="input input-bordered mb-5" />

						<span className="font-bold text-sm mb-1">Goal Description</span>
						<textarea className="textarea textarea-bordered mb-5" rows={3} />

						<span className="font-bold text-sm mb-1">Steps to Achieve Goal</span>
						<input className="input input-bordered input-sm mb-5" />

						<div className="flex items-center justify-end space-x-3 mt-10">
							<a
								href="#"
								className="bg-white border-[1px] border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium"
							>
								Cancel
							</a>

							<a
								href="#"
								className="bg-[#ff6682] border-[1px] border-[#f65a77] text-white text-sm px-3 py-1 rounded-full font-medium"
							>
								Complete
							</a>
						</div>
					</motion.div>
				</Modal>
			)}
		</main>
	);
};

export default Goals;
