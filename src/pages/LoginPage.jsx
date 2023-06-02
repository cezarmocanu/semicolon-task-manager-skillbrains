import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContainedImage from "../components/ContainedImage";
import LoginForm from "../components/forms/LoginForm";

function LoginPage() {
	const theme = useTheme();

	return (
		<Stack sx={{ width: "100%", height: "100vh" }}>
			<Stack sx={{ height: "100%" }} direction={"row"}>
				<Stack flexGrow={1} justifyContent="center" alignItems="center">
					<Stack
						gap={8}
						sx={{
							[theme.breakpoints.up("lg")]: {
								width: "60%",
							},
							[theme.breakpoints.up("md")]: {
								width: "80%",
							},
							width: "90%",
						}}
					>
						<Stack>
							<Typography variant="h5" fontWeight="bold">
								Welcome Back
							</Typography>
						</Stack>
						<LoginForm />
						<Stack gap={1}>
							<Typography color="primary" fontWeight="bold">
								Forgot Password?
							</Typography>
							<Typography color="primary" fontWeight="bold">
								Don't have an account? Create one <a href="/signup">here</a>
							</Typography>
						</Stack>
					</Stack>
				</Stack>
				<Stack
					sx={{
						height: "100%",
						width: "auto",
						position: "relative",
					}}
				>
					<ContainedImage
						width="100%"
						height="100%"
						sx={{ transform: "rotateY(180deg)" }}
						src="logo-background.png"
					/>
					<Stack
						justifyContent="space-between"
						alignItems="flex-end"
						sx={{ position: "absolute", width: "100%", height: "100%", p: 6 }}
					>
						<Box />
						<Typography
							variant="h3"
							fontWeight="bold"
							color="white"
							sx={{ width: "80%" }}
						>
							Take your productivity to the next level.
						</Typography>
						<Typography variant="body2" color="white">
							SkillBrain 2022 | All Right Reserved
						</Typography>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}
export default LoginPage;
