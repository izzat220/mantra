import React from "react";

const Modal = ({ children }: any) => {
	return (
		<>
			<div className="justify-start items-center flex overflow-x-hidden overflow-y-auto fixed inset-0 z-50 outline-none focus:outline-none">
				<div className="relative w-auto">{children}</div>
			</div>
			<div className="opacity-50 fixed inset-0 bg-black z-20" />;
		</>
	);
};

export default Modal;
