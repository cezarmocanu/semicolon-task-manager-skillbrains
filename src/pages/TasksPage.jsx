import React, { useState } from "react";
import { useMemo } from "react";
import { Box, Container, Grid, Tab, Tabs, Typography } from "@mui/material";
import Button from "../components/shared/button/Button";
import TaskStatus from "../constants/task-status";
import TaskCardComponent from "../components/TaskCardComponent";

const mockCards = [
	{
		title: "T-01",
		content: "taskul t01 pentru mine",
		id: "1",
		status: TaskStatus.PENDING,
	},
	{
		title: "T-02",
		content: "taskul t02 pentru mine",
		id: "2",
		status: TaskStatus.PENDING,
	},
	{
		title: "T-03",
		content: "taskul t03 pentru mine",
		id: "3",
		status: TaskStatus.IN_PROGRESS,
	},
	{
		title: "T-04",
		content: "taskul t03 pentru mine",
		id: "4",
		status: TaskStatus.COMPLETED,
	},
];

const TasksMockPage = () => {
	const [data, setData] = useState(mockCards);
	const [tabIndex, setTabIndex] = useState(0);
	const [status, setStatus] = useState(null);
	const handleChange = (event, newValue) => {
		setTabIndex(newValue);
		switch (newValue) {
			case 0:
				setStatus(null);
				break;
			case 1:
				setStatus(TaskStatus.PENDING);
				break;
			case 2:
				setStatus(TaskStatus.IN_PROGRESS);
				break;
			case 3:
				setStatus(TaskStatus.COMPLETED);
				break;
			default:
				break;
		}
	};
	const gridItems = useMemo(() => {
		return data
			.filter((item) => (status ? item.status === status : true))
			.map((item) => (
				<Grid item xs={4} margin={2} direction="row">
					<TaskCardComponent
						title={item.title}
						content={item.content}
						buttonText="View Task"
						status={item.status}
						id={item.id}
					/>
				</Grid>
			));
	}, [data, status]);

	return (
		<Container fixed>
			<Box
				display={"flex"}
				sx={{
					flexDirection: "row",
					justifyContent: "space-between",
					alignItems: "center",
				}}
			>
				<Box>
					<Typography
						variant="h3"
						component="h1"
						sx={{
							fontWeight: "bold",
							marginTop: "2rem",
						}}
					>
						Task
					</Typography>
					<Typography variant="subtitle2" component="h3">
						Your Tasks In Your Page
					</Typography>
				</Box>
				<Button
					variant="contained"
					size="large"
					sx={{
						height: "32px",
						marginTop: "4rem",
						marginRight: "2rem",
					}}
				>
					Create Task
				</Button>
			</Box>
			<Box
				sx={{
					typography: "body1",
					marginTop: "2rem",
					marginBottom: "2rem",
				}}
				style={{ display: "flex", justifyContent: "space-between" }}
			>
				<Box sx={{ width: "100%" }}>
					<Box sx={{ borderBottom: 1, borderColor: "divider" }}>
						<Tabs
							value={tabIndex}
							onChange={handleChange}
							aria-label="basic tabs example"
						>
							<Tab label="All tasks" />
							<Tab label="Pending" />
							<Tab label="In progress" />
							<Tab label="Completed" />
						</Tabs>
					</Box>
				</Box>
			</Box>
			<Grid container spacing={3}>
				{gridItems}
			</Grid>
		</Container>
	);
};

export default TasksMockPage;
