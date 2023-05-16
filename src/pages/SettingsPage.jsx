import React from "react";
import { Button, Typography, Stack, Box, Input } from "@mui/material";
import { Link } from "react-router-dom";
import ContainedImage from "../components/ContainedImage";
import { useTheme } from "@mui/material/styles";

function SettingsPage() {
	const FULLNAME = "John Doe";
	const EMAIL = "hohndoe@gmail.com";

	const theme = useTheme();
	return (
		<>
			<Stack
				sx={{
					height: "100%",
					padding: 4,
					backgroundColor: theme.palette.white,
				}}
			>
				<Typography sx={{ fontSize: "1.5rem" }} variant="h6" component="h3">
					Settings
				</Typography>
				<Typography
					sx={{ fontSize: "0.8rem", marginTop: "2rem" }}
					variant="h6"
					component="h6"
				>
					Account Settings
				</Typography>
				<Stack
					sx={{
						width: "62%",
						display: "flex",
						padding: 4,
						marginTop: "1rem",
						borderRadius: "12px",
						backgroundColor: "#FFFFFF",
					}}
				>
					<Box
						sx={{
							border: 1,
							padding: 1,
							borderColor: "grey.500",
							borderRadius: "12px",
							display: "flex",
							flexDirection: "row",
						}}
					>
						<Stack
							direction="row"
							sx={{ flexDirection: "flex", marginTop: "0.7rem" }}
						>
							<ContainedImage
								src={"/profile.svg"}
								sx={{ width: 50, height: 30 }}
							/>
						</Stack>
						<Stack>
							<Typography
								sx={{
									fontSize: "0.9rem",
									color: "#545454",
									fontWeight: "400",
								}}
							>
								Fullname
							</Typography>
							<Box>
								<Input
									type="text"
									value={FULLNAME}
									inputProps={{
										style: {
											height: "10px",
											color: "#000000",
											fontWeight: "600",
										},
									}}
									disableUnderline={true}
								/>
							</Box>
						</Stack>
					</Box>
					<Box
						sx={{
							border: 1,
							padding: 1,
							borderColor: "grey.500",
							borderRadius: "12px",
							display: "flex",
							flexDirection: "row",
							marginTop: "1.5rem",
						}}
					>
						<Stack
							direction="row"
							sx={{ flexDirection: "flex", marginTop: "0.7rem" }}
						>
							<ContainedImage
								src={"/message.svg"}
								sx={{ width: 50, height: 30 }}
							/>
						</Stack>
						<Stack>
							<Typography
								sx={{
									fontSize: "0.9rem",
									color: "#545454",
								}}
							>
								Email Address
							</Typography>
							<Box>
								<Input
									type="text"
									value={EMAIL}
									disableUnderline={true}
									inputProps={{
										style: {
											height: "10px",
											color: "#000000",
											fontWeight: "600",
										},
									}}
								/>
							</Box>
						</Stack>
					</Box>
				</Stack>
				<Stack
					direction="row"
					sx={{
						width: "62%",
						display: "flex",
						justifyContent: "flex-end",
						marginTop: "2rem",
					}}
				>
					<Button
						size="medium"
						variant="contained"
						component={Link}
						to="/change-password"
						style={{ textDecoration: "none", textTransform: "none" }}
					>
						Change password
					</Button>
				</Stack>
			</Stack>
		</>
	);
}

export default SettingsPage;
