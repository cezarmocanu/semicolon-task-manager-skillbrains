import { Container, Box, Button } from "@mui/material";
import widget from "./widget.png";
import ContainedImage from "../ContainedImage";

function NoTasksPlaceholder({ onCreateTaskClick }) {
	return (
		<Container
			sx={{
				boxSizing: "border-box",
				display: "flex",
				textAlign: "center",
				flexDirection: "column",
				alignItems: "center",
				alignContent: "center",
				justifyContent: "center",
				width: "100%",
				height: "100%",
				margin: "auto",
			}}
		>
			<ContainedImage src={widget} width={170} height={140} />
			<Box
				sx={{
					fontSize: 15,
					fontWeight: 600,
					opacity: 0.9,
					marginBottom: -2,
					marginTop: 4,
					letterSpacing: -0.3,
				}}
			>
				<h1>No Tasks Yet</h1>
			</Box>
			<Box
				sx={{
					lineHeight: 1,
					marginBottom: 2,
					color: "#6D6C6C",
					fontSize: "1em",
					fontWeight: 400,
					letterSpacing: 0.3,
				}}
			>
				<p>You have no task created in your workspace yet.</p>
				<p>Get productive. Create a Task Now.</p>
			</Box>

			<Button
				size="large"
				variant="contained"
				color="primary"
				sx={{
					textTransform: "revert",
					width: "210px",
					height: "55px",
					borderRadius: "10px",
				}}
				onClick={onCreateTaskClick}
			>
				Create a Task
			</Button>
		</Container>
	);
}

export default NoTasksPlaceholder;
