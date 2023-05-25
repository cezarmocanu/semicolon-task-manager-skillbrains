import React from "react";
import {
	Typography,
	Stack,
	Button,
	TextField,
	Alert,
	AlertTitle,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ForgotPasswordForm from "../components/forms/ForgotPasswordForm";
function ForgotPasswordPage() {
	const theme = useTheme();

	return (
		<Stack
			component="main"
			alignItems={"center"}
			justifyContent={"center"}
			sx={{
				width: "100vw",
				height: "100vh",
				backgroundImage: `url(city-background.svg)`,
				backgroundRepeat: "no-repeat",
				backgroundSize: "cover",
				backgroundPosition: "center",
			}}
		>
			<Stack
				spacing={2}
				sx={{
					padding: "1.5rem",
					[theme.breakpoints.up("lg")]: {
						width: "40%",
					},
					[theme.breakpoints.up("md")]: {
						width: "50%",
					},
					width: "90%",
				}}
			>
				<Typography variant="h5" component="h1" fontWeight={"bold"} mb={1}>
					Forgot Password?
				</Typography>
				<Typography
					variant="body1"
					component="h3"
					sx={{
						color: "text.secondary",
					}}
				>
					We are sorry to hear that happen. Don't be sad we could help you get
					back to productivity in no time.
				</Typography>
				<ForgotPasswordForm/>
				<Stack
					direction="column"
					sx={{
						marginLeft: "1.2rem",
					}}
				>
					<Alert severity="warning">
						<AlertTitle sx={{ ml: "0.5rem" }}>Hello Mano,</AlertTitle>
						You would be sent a recovery password to the email -
						<strong> check it out!</strong>
					</Alert>
				</Stack>
			</Stack>
		</Stack>
	);
}
export default ForgotPasswordPage;
