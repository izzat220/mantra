import React, { useState } from "react";
import moment from "moment";
import Modal from "../Modal";
import { motion } from "framer-motion";
import Task from "../../interfaces/Task";
import Goal from "../../interfaces/Goal";

interface AddGoalProps {
	goals: Goal[];
	setGoals: (state: Goal[]) => void;
	setViewModal: (state: boolean) => void;
}

const AddGoal = ({ goals, setGoals, setViewModal }: AddGoalProps) => {
	const [title, setTitle] = useState<string>("");
	const [description, setDescription] = useState<string>("");
	const [tasks, setTasks] = useState<Task[]>([{ text: "", completed: false }]);

	const handleSubmit = () => {
		let newGoal = {
			id: goals.length + 1,
			createdAt: moment().toISOString(),
			title: title.trim(),
			description: description.trim(),
			tasks,
			completed: false,
		};

		let updatedGoals = [...goals];
		updatedGoals.push(newGoal);
		updatedGoals.sort((a: Goal, b: Goal) => {
			return Number(a.completed) - Number(b.completed);
		});
		setGoals(updatedGoals);
		window.localStorage.setItem("mantra_goals", JSON.stringify(updatedGoals));
		setViewModal(false);
	};
	return (
		<Modal>
			<motion.div
				initial={{ opacity: 0, y: 50 }}
				animate={{
					opacity: 1,
					y: 0,
					transition: { ease: "easeInOut", duration: 0.25, delay: 0.1 },
				}}
				className="bg-white rounded-2xl n w-[450px] flex flex-col p-8 text-slate-700"
			>
				<h1 className="font-bold text-3xl">Set a New Goal</h1>
				<p className="text-slate-400 mb-8">
					Fill in the fields below to add a goal.
				</p>

				<div className="w-full flex flex-col space-y-5">
					<div className="flex flex-col space-y-1">
						<span className="font-bold text-sm">Goal Title</span>
						<input
							type="text"
							className="input input-bordered rounded-full w-full input-sm"
							value={title}
							onChange={(e) => setTitle(e.target.value)}
						/>
					</div>

					<div className="flex flex-col space-y-1">
						<span className="font-bold text-sm">Goal Description</span>
						<textarea
							className="textarea textarea-bordered rounded-3xl w-full textarea-sm"
							placeholder="Second Mantra..."
							rows={3}
							value={description}
							onChange={(e) => setDescription(e.target.value)}
						/>
					</div>

					<div className="flex flex-col space-y-2 items-start">
						<span className="font-bold text-sm">Goal Tasks</span>
						{tasks.map((item, index) => {
							return (
								<div key={index} className="flex items-center space-x-4 w-full">
									<input
										type="text"
										className="input input-bordered rounded-full w-full input-sm"
										placeholder="Enter task..."
										value={item.text}
										onChange={(e) => {
											let updatedTask = [...tasks];
											updatedTask[index].text = e.target.value;
											setTasks(updatedTask);
										}}
									/>
									<i
										className="fa-solid fa-trash text-primary text-sm opacity-40 hover:opacity-100 duration-100 cursor-pointer"
										onClick={() => {
											let updatedTask = [...tasks];
											updatedTask.splice(index, 1);
											setTasks(updatedTask);
										}}
									/>
								</div>
							);
						})}
					</div>
					<button
						className="bg-white border-[1px] border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium mt-5"
						onClick={() => {
							let updatedTasks = [...tasks];
							updatedTasks.push({ text: "", completed: false });
							setTasks(updatedTasks);
						}}
					>
						<i className="fa-solid fa-plus text-primary mr-2" />
						Add Task
					</button>
				</div>

				<div className="flex items-center justify-end space-x-3 mt-10">
					<button
						onClick={() => setViewModal(false)}
						className="bg-white border-[1px] border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium"
					>
						Cancel
					</button>

					<button
						onClick={handleSubmit}
						className="bg-[#ff6682] border-[1px] border-[#f65a77] text-white text-sm px-3 py-1 rounded-full font-medium"
					>
						Save Mantra
					</button>
				</div>
			</motion.div>
		</Modal>
	);
};
export default AddGoal;
