import React, { useState } from "react";
import {
	Avatar,
	CardActions,
	CardContent,
	CardHeader,
	Grid,
	Stack,
	Typography,
} from "@mui/material";
import Button from "../components/shared/button/Button";
import CardComponent from "../components/shared/card/Card";
import Chip from "../components/shared/chip/Chip";
import TaskStatus from "../constants/task-status";
import { STATUS_CARD_CONFIG } from "../components/TaskDetailsCard";
import theme from "../theme";

const TaskCardComponent = ({
	title,
	content,
	status,
	id,
	buttonText,
	buttonClick,
}) => {
	return (
		<CardComponent>
			<CardHeader
				title={
					<div
						style={{
							display: "flex",
							justifyContent: "space-between",
							alignItems: "center",
						}}
					>
						<Typography variant="body1" color="text.secondary" margin={1}>
							T-{id}
						</Typography>
						<Chip
							color={STATUS_CARD_CONFIG[status].chipColor}
							variant="outlined"
							label={status}
							status={TaskStatus.PENDING}
						/>
					</div>
				}
			/>
			<CardContent>
				<Typography
					variant="body1"
					fontWeight="bold"
					marginBottom={1}
					marginLeft={1}
					sx={{ textTransform: "capitalize" }}
				>
					{content}
				</Typography>
				<CardActions>
					<Stack
						direction="row"
						justifyContent="space-between"
						alignItems="center"
						sx={{ width: "100%" }}
					>
						<Button variant="link">{buttonText}</Button>
						<Avatar
							variant="circular"
							sx={{
								color: theme.palette.text.primary,
								backgroundColor: theme.palette.text.light,
							}}
						></Avatar>
					</Stack>
				</CardActions>
			</CardContent>
		</CardComponent>
	);
};

export default TaskCardComponent;
