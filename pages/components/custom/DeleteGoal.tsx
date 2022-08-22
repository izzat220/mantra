import { motion } from "framer-motion";
import React from "react";
import Modal from "../Modal";

interface DeleteGoalProps {
	goals: any;
	setGoals: any;
	goalIndex: number;
	setViewModal: (state: boolean) => void;
}

const DeleteGoal = ({
	goalIndex,
	goals,
	setGoals,
	setViewModal,
}: DeleteGoalProps) => {
	const handleSubmit = () => {
		let updatedGoals = [...goals];
		updatedGoals.splice(goalIndex, 1);
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
				className="bg-white rounded-2xl n w-[400px] flex flex-col p-8 text-slate-700"
			>
				<h1 className="font-bold text-3xl  mb-3">Delete Goal</h1>

				<p className="">Are you sure you want to delete this goal?</p>

				<div className="flex items-center justify-end space-x-3 mt-8">
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
						Delete
					</button>
				</div>
			</motion.div>
		</Modal>
	);
};

export default DeleteGoal;
