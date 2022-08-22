import React, { useState } from "react";
import DeleteGoal from "./DeleteGoal";
import AddGoal from "./AddGoal";
import EditGoal from "./EditGoal";
import CompleteGoal from "./CompleteGoal";
import Goal from "../../interfaces/Goal";

interface GoalsProps {
	goals: Goal[];
	setGoals: (state: Goal[]) => void;
}

const Goals = ({ goals, setGoals }: GoalsProps) => {
	const [viewModal, setViewModal] = useState<boolean>(false);
	const [viewDeleteModal, setViewDeleteModal] = useState<boolean>(false);
	const [viewEditModal, setViewEditModal] = useState<boolean>(false);
	const [viewCompleteModal, setViewCompleteModal] = useState<boolean>(false);
	const [goalIndex, setGoalIndex] = useState<number>(0);

	const handleCheck = async (goalIndex: number, taskIndex: number) => {
		let updatedGoals = [...goals];
		updatedGoals[goalIndex].tasks[taskIndex].completed =
			!updatedGoals[goalIndex].tasks[taskIndex].completed;
		setGoals(updatedGoals);
		window.localStorage.setItem("mantra_goals", JSON.stringify(updatedGoals));
	};

	return (
		<>
			<div className="flex flex-col w-full">
				<div className="flex items-center justify-between w-full mb-8">
					<h1 className="text-3xl font-semibold text-slate-700">Your Goals</h1>

					<div className="flex space-x-5 items-center">
						<div className="form-control">
							<label className="label cursor-pointer">
								<input
									type="checkbox"
									className="toggle toggle-sm toggle-primary mr-2"
								/>
								<span className="label-text">Hide Completed</span>
							</label>
						</div>

						<button
							className="bg-[#ff6682] border-[1px] border-[#f65a77] text-white px-3 py-1 rounded-full text-sm font-medium"
							onClick={() => setViewModal(true)}
						>
							<i className="fa-solid fa-plus mr-3" />
							Add Goal
						</button>
					</div>
				</div>

				<div className="w-full grid grid-cols-2 gap-7 items-start">
					{goals.map((item, index) => {
						return (
							<div
								key={index}
								className="bg-white rounded-xl w-full ring-1 ring-slate-200 flex flex-col p-8"
							>
								<h1 className="font-bold text-2xl mb-3 text-slate-700">{item.title}</h1>
								<p className="text-slate-400 text-sm">{item.description}</p>
								<hr className="my-5" />
								<div className="flex flex-col space-y-2 text-sm">
									{item.tasks.map((task, taskIndex) => {
										return (
											<div key={taskIndex} className="flex items-center space-x-3 w-full">
												<input
													type="checkbox"
													className="checkbox checkbox-sm checkbox-primary"
													id={`task${taskIndex}${item.id}`}
													checked={task.completed}
													onChange={() => handleCheck(index, taskIndex)}
												/>

												<label
													htmlFor={`task${taskIndex}${item.id}`}
													className={`${
														task.completed ? "line-through text-slate-400 w-full" : ""
													}`}
												>
													{task.text}
												</label>
											</div>
										);
									})}
								</div>

								<div className="flex items-center justify-end space-x-5 mt-10 text-sm text-primary">
									<i
										className="fa-solid fa-trash-alt opacity-40 hover:opacity-100 cursor-pointer"
										onClick={() => {
											setGoalIndex(index);
											setViewDeleteModal(true);
										}}
									/>
									<i
										className="fa-solid opacity-40 fa-pen hover:opacity-100 cursor-pointer"
										onClick={() => {
											setGoalIndex(index);
											setViewEditModal(true);
										}}
									/>
									<i
										className="fa-solid opacity-40 fa-check-circle hover:opacity-100 cursor-pointer"
										onClick={() => {
											setGoalIndex(index);
											setViewCompleteModal(true);
										}}
									/>
								</div>
							</div>
						);
					})}
				</div>
			</div>

			{viewModal && (
				<AddGoal goals={goals} setGoals={setGoals} setViewModal={setViewModal} />
			)}

			{viewEditModal && (
				<EditGoal
					goal={goals[goalIndex]}
					goals={goals}
					goalIndex={goalIndex}
					setGoals={setGoals}
					setViewModal={setViewEditModal}
				/>
			)}

			{viewDeleteModal && (
				<DeleteGoal
					setViewModal={setViewDeleteModal}
					goalIndex={goalIndex}
					goals={goals}
					setGoals={setGoals}
				/>
			)}

			{viewCompleteModal && (
				<CompleteGoal
					setViewModal={setViewCompleteModal}
					goalIndex={goalIndex}
					goals={goals}
					setGoals={setGoals}
				/>
			)}
		</>
	);
};

export default Goals;
