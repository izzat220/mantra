import React, { useEffect, useState } from "react";
import Task from "../../interfaces/Task";

interface DailiesProps {
	dailies: Task[];
	setDailies: (state: Task[]) => void;
}

const Dailies = ({ dailies, setDailies }: DailiesProps) => {
	const [completed, setCompleted] = useState<number>(0);
	const [newDaily, setNewDaily] = useState<string>("");

	useEffect(() => {
		let completedDailies = dailies.filter((i) => i.completed);
		setCompleted(completedDailies.length);
	}, [dailies]);

	const handleSubmit = async (e: any) => {
		e.preventDefault();
		let trimmedDaily = newDaily.trim();
		if (trimmedDaily) {
			let updatedDailies = [...dailies];
			updatedDailies.push({ text: trimmedDaily, completed: false });
			setDailies(updatedDailies);
			setNewDaily("");
			window.localStorage.setItem(
				"mantra_dailies",
				JSON.stringify(updatedDailies)
			);
		}
	};

	const handleDelete = async (index: number) => {
		let updatedDailies = [...dailies];
		updatedDailies.splice(index, 1);
		setDailies(updatedDailies);
		window.localStorage.setItem("mantra_dailies", JSON.stringify(updatedDailies));
	};

	const handleCheck = async (index: number) => {
		let updatedDailies = [...dailies];
		updatedDailies[index].completed = !updatedDailies[index].completed;
		setDailies(updatedDailies);
		window.localStorage.setItem("mantra_dailies", JSON.stringify(updatedDailies));
	};

	return (
		<div className="bg-white rounded-2xl ring-1 ring-slate-200 flex flex-col p-8 w-full">
			<div className="flex items-center w-full justify-between">
				<div className="flex flex-col">
					<span className="font-semibold text-slate-800 text-2xl">Your Dailies</span>
					<p className="text-sm text-slate-400">
						These reset daily, essentials only.
					</p>
				</div>

				<span className="rounded-full bg-[#ff6682] bg-opacity-10 text-[#ff6682] text-sm px-3 py-1">
					{completed} / {dailies.length}
				</span>
			</div>

			<hr className="my-5" />

			<form
				onSubmit={handleSubmit}
				className="flex items-center w-full space-x-2 mb-8"
			>
				<input
					type="text"
					className="input input-sm input-bordered rounded-full w-full text-slate-700"
					placeholder="Add a new daily + Press Enter"
					value={newDaily}
					onChange={(e) => setNewDaily(e.target.value)}
				/>
			</form>

			{dailies.length ? (
				<div className="flex flex-col space-y-3 text-slate-400 w-full">
					{dailies &&
						dailies.map((item, index) => {
							return (
								<div
									key={index}
									className="flex items-center space-x-3 text-sm font-medium text-slate-700 w-full"
								>
									<div className="flex items-center space-x-3 w-full">
										<input
											type="checkbox"
											className="checkbox checkbox-sm checkbox-primary"
											id={`daily${index}`}
											checked={item.completed}
											onChange={() => handleCheck(index)}
										/>

										<label
											htmlFor={`daily${index}`}
											className={`${
												item.completed ? "line-through text-slate-400 w-full " : ""
											}`}
										>
											{item.text}
										</label>
									</div>
									<i
										className="fa-solid fa-times text-slate-300 cursor-pointer hover:text-[#ff6682] duration-100"
										onClick={() => handleDelete(index)}
									/>
								</div>
							);
						})}
				</div>
			) : (
				<div className="flex flex-col w-full items-center justify-center py-3 space-y-2">
					<i className="fas fa-box-open text-5xl text-slate-300"></i>
					<span className="text-slate-400 text-sm">You got no dailies</span>
				</div>
			)}
		</div>
	);
};

export default Dailies;
