import Task from "./Task";

interface Goal {
	id: number;
	createdAt: string;
	title: string;
	description: string;
	tasks: Task[];
	completed: boolean;
}

export default Goal;
