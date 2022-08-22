import { motion } from "framer-motion";
import React, { useState } from "react";
import Modal from "../Modal";

interface MantraProps {
	mantra: string[];
	setMantra: (state: string[]) => void;
}

const Mantra = ({ mantra, setMantra }: MantraProps) => {
	const [viewModal, setViewModal] = useState<boolean>(false);

	return (
		<>
			<div className="bg-[#ff6682] rounded-2xl bg-opacity-10 flex flex-col p-8 w-full hover:bg-opacity-20 duration-200 mb-16">
				<div className="flex items-center justify-between w-full text-[#f65a77] mb-5">
					<span className="font-semibold text-2xl">Your Mantra</span>
					<i
						className="fa-solid fa-pen text-sm opacity-40 hover:opacity-100 cursor-pointer duration-100"
						onClick={() => setViewModal(true)}
					/>
				</div>

				{mantra.length ? (
					<div className="flex flex-col space-y-5 text-[#ff6682] font-medium">
						{mantra.map((item, index) => {
							return <span key={index}>{`"${item}"`}</span>;
						})}
					</div>
				) : (
					<div className="flex flex-col w-full items-center justify-center py-3 space-y-2 text-primary opacity-50">
						<i className="fas fa-box-open text-5xl "></i>
						<span className="text-sm">You got no mantras</span>
					</div>
				)}
			</div>

			{viewModal && (
				<EditMantra
					mantra={mantra}
					setMantra={setMantra}
					setViewModal={setViewModal}
				/>
			)}
		</>
	);
};

interface EditMantraProps {
	mantra: string[];
	setMantra: (state: string[]) => void;
	setViewModal: (state: boolean) => void;
}

const EditMantra = ({ mantra, setMantra, setViewModal }: EditMantraProps) => {
	const [first, setFirst] = useState(mantra[0] ? mantra[0] : "");
	const [second, setSecond] = useState(mantra[1] ? mantra[1] : "");
	const [third, setThird] = useState(mantra[2] ? mantra[2] : "");
	const [fourth, setFourth] = useState(mantra[3] ? mantra[3] : "");
	const [fifth, setFifth] = useState(mantra[4] ? mantra[4] : "");

	const handleSave = async () => {
		let updatedMantra = [
			first.trim(),
			second.trim(),
			third.trim(),
			fourth.trim(),
			fifth.trim(),
		];
		updatedMantra = updatedMantra.filter((i) => i.length);
		setMantra(updatedMantra);
		window.localStorage.setItem("mantra_mantra", JSON.stringify(updatedMantra));
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
				<h1 className="font-bold text-3xl">Set Your Mantra</h1>
				<p className="text-slate-400 mb-8">
					Lorem ipsum dolor sit amet consectetur.
				</p>
				<span className="font-bold text-sm mb-4">
					Mantra List{" "}
					<span className="text-xs text-slate-400 font-medium ml-2">
						(You got 5, make them count.)
					</span>
				</span>

				<div className="w-full flex flex-col space-y-3">
					<input
						type="text"
						className="input input-bordered rounded-full w-full input-sm"
						placeholder="First Mantra..."
						value={first}
						onChange={(e) => setFirst(e.target.value)}
					/>
					<input
						type="text"
						className="input input-bordered rounded-full w-full input-sm"
						placeholder="Second Mantra..."
						value={second}
						onChange={(e) => setSecond(e.target.value)}
					/>
					<input
						type="text"
						className="input input-bordered rounded-full w-full input-sm"
						placeholder="Third Mantra..."
						value={third}
						onChange={(e) => setThird(e.target.value)}
					/>

					<input
						type="text"
						className="input input-bordered rounded-full w-full input-sm"
						placeholder="Fourth Mantra..."
						value={fourth}
						onChange={(e) => setFourth(e.target.value)}
					/>
					<input
						type="text"
						className="input input-bordered rounded-full w-full input-sm"
						placeholder="Fifth Mantra..."
						value={fifth}
						onChange={(e) => setFifth(e.target.value)}
					/>
				</div>

				<div className="flex items-center justify-end space-x-3 mt-10">
					<button
						className="bg-white border-[1px] border-slate-200 text-slate-600 px-3 py-1 rounded-full text-sm font-medium"
						onClick={() => setViewModal(false)}
					>
						Cancel
					</button>

					<button
						className="bg-[#ff6682] border-[1px] border-[#f65a77] text-white text-sm px-3 py-1 rounded-full font-medium"
						onClick={handleSave}
					>
						Save Mantra
					</button>
				</div>
			</motion.div>
		</Modal>
	);
};

export default Mantra;
