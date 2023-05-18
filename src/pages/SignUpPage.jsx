import React from "react";
import { Typography, Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import ContainedImage from "../components/ContainedImage";
import Button from "../components/shared/button/Button";
import SignUpForm from "../components/forms/SignUpForm";

function SignUpPage() {
	const theme = useTheme();

	return (
		<Stack sx={{ width: "100%", height: "100vh" }}>
			<Stack sx={{ height: "100%" }} direction={"row"}>
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
						src="logo-background.png"
					/>
					<Stack
						justifyContent="space-between"
						sx={{ position: "absolute", width: "100%", height: "100%", p: 6 }}
					>
						<Box />
						<Typography variant="h3" fontWeight="bold" color="white">
							Take your productivity to the next level.
						</Typography>
						<Typography variant="body2" color="white">
							SkillBrain 2022 | All Right Reserved
						</Typography>
					</Stack>
				</Stack>
				<Stack flexGrow={1} sx={{ p: 3 }}>
					<Stack direction="row" justifyContent="end">
						<Box>
							<Button size="small" variant="outlined">
								Log In
							</Button>
						</Box>
					</Stack>
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
									Create an Account
								</Typography>
								<Typography>It’s Simpe and Easy!!</Typography>
							</Stack>
							<SignUpForm />
						</Stack>
					</Stack>
				</Stack>
			</Stack>
		</Stack>
	);
}
export default SignUpPage;
