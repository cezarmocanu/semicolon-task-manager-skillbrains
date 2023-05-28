import React, { useState, useCallback, useEffect } from "react";
import { Typography, Stack, Box } from "@mui/material";
import { useTheme } from "@mui/material/styles";
import { useNavigate } from "react-router-dom";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";

import ContainedImage from "../components/ContainedImage";
import Button from "../components/shared/button/Button";
import FormLabel from "../components/shared/input/FormLabel";
import TextField from "../components/shared/input/TextField";
import authService from "../services/auth-service";
import RoutePaths from "../constants/route-paths";
import PasswordInput from "../components/shared/password-input/PasswordInput";
import { useDispatch } from "react-redux";
import { login } from "../store/slices/authentication-slice";
import LocalStorageKeys from "../constants/local-storage-keys";

function LoginPage() {
	const theme = useTheme();
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [loginData, setLoginData] = useState({
		username: "",
		password: "",
	});
	const [isChecked, setIsChecked] = useState(false);

	useEffect(() => {
		const localStorageIsChecked = JSON.parse(
			localStorage.getItem(LocalStorageKeys.isChecked)
		);
		const localStorageUsername = localStorage.getItem(
			LocalStorageKeys.username
		);

		if (!localStorageIsChecked || localStorageUsername === null) {
			return;
		}

		setIsChecked(localStorageIsChecked);
		setLoginData({ ...loginData, username: localStorageUsername });
	}, []);

	const onTextFieldChange = (e) => {
		setLoginData((prevState) => ({
			...prevState,
			[e.target.name]: e.target.value,
		}));
	};

	const handleRememberCheck = useCallback(() => {
		setIsChecked((isChecked) => {
			const nextValue = !isChecked;
			localStorage.setItem(
				LocalStorageKeys.isChecked,
				JSON.stringify(nextValue)
			);
			return nextValue;
		});
	}, [setIsChecked]);

	const handleLoginClick = () => {
		authService
			.login(loginData.username.trim(), loginData.password)
			.then((loggedInWithSuccess) => {
				if (!loggedInWithSuccess) {
					return;
				}

				if (isChecked) {
					localStorage.setItem(LocalStorageKeys.username, loginData.username.trim());
				}

				dispatch(login());
				navigate(RoutePaths.TEST);
			});
	};

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
						<Stack>
							<Stack>
								<FormLabel>Email Address</FormLabel>
								<TextField
									name="username"
									value={loginData.username}
									onChange={onTextFieldChange}
									required
									variant="outlined"
									helperText="Example. mano@gmail.com"
								/>
							</Stack>
							<Stack>
								<FormLabel>Enter your Password</FormLabel>
								<PasswordInput
									name="password"
									value={loginData.password}
									onChange={onTextFieldChange}
								/>
							</Stack>
							<FormControlLabel
								style={{ pointerEvents: "none" }}
								control={
									<Checkbox
										onClick={handleRememberCheck}
										style={{ pointerEvents: "auto" }}
										checked={isChecked}
										name="checkbox"
										value={loginData.checkbox}
									/>
								}
								label={<Typography fontWeight="bold"> Remember me</Typography>}
							/>
						</Stack>

						<Stack gap={1}>
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={handleLoginClick}
							>
								Log in
							</Button>

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
