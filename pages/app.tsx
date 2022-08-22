import { motion } from "framer-motion";
import React, { useEffect, useState } from "react";

import Modal from "../components/Modal";

import Dailies from "../components/custom/Dailies";
import Mantra from "../components/custom/Mantra";
import Goals from "../components/custom/Goals";
import Task from "../interfaces/Task";
import Goal from "../interfaces/Goal";

const App = () => {
	const [viewAddGoal, setViewAddGoal] = useState<boolean>(false);

	const [mantra, setMantra] = useState<string[]>([]);
	const [dailies, setDailies] = useState<Task[]>([]);
	const [goals, setGoals] = useState<Goal[]>([]);
	const [showCompleted, setShowCompleted] = useState<string>("false");

	const fetchData = async () => {
		const rawMantra = window.localStorage.getItem("mantra_mantra");
		const rawDailies = window.localStorage.getItem("mantra_dailies");
		const rawGoals = window.localStorage.getItem("mantra_goals");
		const rawShowCompleted = window.localStorage.getItem("mantra_showCompleted");

		if (rawShowCompleted) {
			setShowCompleted(rawShowCompleted);
		} else {
			window.localStorage.setItem("mantra_showCompleted", "false");
		}

		let parsedMantra = [];
		let parsedDailies = [];
		let parsedGoals = [];

		if (rawMantra) parsedMantra = await JSON.parse(rawMantra);
		if (rawDailies) parsedDailies = await JSON.parse(rawDailies);
		if (rawGoals) parsedGoals = await JSON.parse(rawGoals);

		parsedGoals.sort((a: Goal, b: Goal) => {
			return Number(a.completed) - Number(b.completed);
		});

		setMantra(parsedMantra);
		setDailies(parsedDailies);
		setGoals(parsedGoals);
	};

	useEffect(() => {
		fetchData();
	}, []);

	return (
		<main className="bg-gray-50 w-full h-full min-h-screen">
			<div className="bg-white w-full border-b-[1px] border-slate-200 p-5">
				<div className="w-full max-w-7xl mx-auto flex items-center">
					<span className="text-2xl font-semibold text-slate-700">
						<i className="fa-solid fa-hands-praying mr-3 text-[#ff6682]" />
						Mantra
					</span>
				</div>
			</div>
			<div className="w-full max-w-7xl mx-auto py-20 px-10 flex items-start">
				<div className="flex flex-col w-[375px] mr-14 shrink-0">
					<Mantra mantra={mantra} setMantra={setMantra} />
					<Dailies dailies={dailies} setDailies={setDailies} />
				</div>

				<Goals
					goals={goals}
					setGoals={setGoals}
					showCompleted={showCompleted}
					setShowCompleted={setShowCompleted}
				/>
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

export default App;
