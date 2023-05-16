import React from "react";
import TaskDetailsCard from "../components/TaskDetailsCard";
import { Container, Button } from "@mui/material";
import AssignmentReturnSharpIcon from "@mui/icons-material/AssignmentReturnSharp";
import TaskStatus from "../constants/task-status";

function TaskDetailsPage() {
	return (
		<Container>
			<AssignmentReturnSharpIcon />
			<Button size="large" variant="outlined" color="primary">
				Edit Task
			</Button>
			<TaskDetailsCard status={TaskStatus.COMPLETED} />
		</Container>
	);
}

export default TaskDetailsPage;