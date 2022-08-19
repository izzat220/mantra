export default function Home() {
	return (
		<div className="w-full h-screen bg-gray-50 p-20">
			{/* 
<div className="flex flex-col max-w-[720px] text-center">

  <h1 className="font-bold text-6xl text-slate-800">Lorem ipsum dolor sit amet, <span className="text-[#ff6682]">consectetur</span> adipisicing elit.</h1>
</div> */}

			<div className="flex space-x-2 items-center">
				<a
					href="#"
					className="bg-[#ff6682] border-[1px] border-[#f65a77] text-white px-4 py-2 rounded-full font-medium"
				>
					Get Started
				</a>
				<a
					href="#"
					className="bg-white border-[1px] border-slate-200 text-slate-600 px-4 py-2 rounded-full font-medium"
				>
					<i className="fa-solid fa-play mr-3 text-[#ff6682]" />
					Watch Video
				</a>
			</div>

			<div className="bg-white rounded-xl w-[400px] h-[300px] m-10 ring-1 ring-slate-200"></div>
		</div>
	);
}
