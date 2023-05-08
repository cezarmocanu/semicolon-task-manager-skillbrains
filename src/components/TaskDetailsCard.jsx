import * as React from "react";
import { useState } from "react";
import DeleteOutlined from "@mui/icons-material/DeleteOutlined";
import Theme from "../theme";

import { Typography, Stack, Box } from "@mui/material";
import EditIcon from "@mui/icons-material/Edit";
import TaskStatus from "../constants/task-status";
import Chip from "../components/shared/chip/Chip";
import Button from "../components/shared/button/Button";
import Card from "../components/shared/card/Card";
import TaskTimeline from "../components/TaskTimeline";

const STATUS_CARD_CONFIG = {
	[TaskStatus.PENDING]: {
		chipLabel: "Pending",
		chipColor: "warning",
		buttonText: "Work on it now",
		buttonColor: "warning",
		nextStatus: TaskStatus.IN_PROGRESS,
	},
	[TaskStatus.IN_PROGRESS]: {
		chipLabel: "In progress",
		chipColor: "primary",
		buttonText: "Send for review",
		buttonColor: "primary",
		nextStatus: TaskStatus.IN_REVIEW,
	},
	[TaskStatus.IN_REVIEW]: {
		chipLabel: "In review",
		chipColor: "info",
		buttonText: "Mark as done",
		buttonColor: "info",
		nextStatus: TaskStatus.COMPLETED,
	},
	[TaskStatus.COMPLETED]: {
		chipLabel: "Completed",
		chipColor: "success",
		buttonText: "This task has been completed",
		buttonColor: "success",
		nextStatus: null,
	},
};

const TaskDetailsCard = ({
	status,
	startDate,
	dueDate,
	setIsDeleteModalOpen,
}) => {
	//TODO remove inner status when backend status is available
	const [innerStatus, setInnerStatus] = useState(status);

	const { chipLabel, chipColor, buttonText, buttonColor, nextStatus } =
		STATUS_CARD_CONFIG[innerStatus];

	const changeCardStatus = () => {
		if (nextStatus === null) {
			return;
		}
		setInnerStatus(nextStatus);
	};

	return (
		<Card
			elevation={1}
			sx={{
				display: "flex",
				margin: "40px",
				padding: "2rem",
				borderRadius: "12px",
			}}
		>
			<Stack direction={"row"}>
				<Stack gap={2}>
					<Stack>
						<Typography variant="p" component="h1">
							Create a Design System for Enum Workspace
						</Typography>
						<Box>
							<Chip
								label={chipLabel}
								color={chipColor}
								variant="outlined"
								sx={{ marginTop: "0.3rem" }}
							></Chip>
						</Box>
					</Stack>

					<Typography variant="subtitle1" component="h2">
						I am to create a
						sidddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddddmple
						aduabndabd abdabda adbadbad adabdba adadnmamamnda adbadba adnbadanda
						a asda daddadasda asd adas dasda asda dada a d asd asda
						dadsasdadadad adada ad adadad ad ada dad adad ada dad adadad ad a a
						dad a ad adsadadadaedadaq dada a a a a a a a a ssd ss s sds d s ds
					</Typography>

					<Stack
						direction="row"
						mt={"auto"}
						spacing={2}
						sx={{ paddingTop: "1rem" }}
					>
						<Button
							variant="contained"
							size="large"
							color={buttonColor}
							sx={{
								borderRadius: "0.5rem",
							}}
							onClick={changeCardStatus}
						>
							{buttonText}
						</Button>
						<Button
							size="link"
							onClick={() => setIsDeleteModalOpen(true)}
							sx={{
								color: Theme.palette.info.secondary,
								backgroundColor: Theme.palette.info.light,
								borderRadius: "0.5rem",
								p:1.5,
								minHeight:0,
								minWidth:0,
							}}
						>
							<DeleteOutlined />
						</Button>

						<Button
							size="link"
							sx={{
								color: Theme.palette.info.light3,
								backgroundColor: Theme.palette.info.light2,
								borderRadius: "0.5rem",
								p:1.5,
								minHeight:0,
								minWidth:0,
							}}
						>
							<EditIcon />
						</Button>
					</Stack>
				</Stack>
				<Stack>
					<TaskTimeline startDate={startDate} dueDate={dueDate} />
				</Stack>
			</Stack>
		</Card>
	);
};

export default TaskDetailsCard;
