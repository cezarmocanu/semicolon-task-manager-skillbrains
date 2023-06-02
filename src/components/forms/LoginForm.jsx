import React, { useState, useCallback, useEffect } from "react";
import { Typography, Stack } from "@mui/material";
import FormLabel from "../shared/input/FormLabel";
import TextField from "../shared/input/TextField";
import PasswordInput from "../shared/password-input/PasswordInput";
import LocalStorageKeys from "../../constants/local-storage-keys";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import authService from "../../services/auth-service";
import RoutePaths from "../../constants/route-paths";
import { login } from "../../store/slices/authentication-slice";
import { useNavigate } from "react-router-dom";
import { useDispatch } from "react-redux";
import Button from "../../components/shared/button/Button";

import { useFormik } from "formik";
import * as yup from "yup";

function LoginForm() {
	const navigate = useNavigate();
	const dispatch = useDispatch();

	const [loginData, setLoginData] = useState({ INITIAL_VALUES });
	const [isChecked, setIsChecked] = useState(false);

	const onSubmit = (values) => {
		console.log("from button", values);
	};

	const formik = useFormik({
		initialValues: INITIAL_VALUES,
		validationSchema,
		onSubmit,
	});

	useEffect(() => {
		const localStorageIsChecked = JSON.parse(
			localStorage.getItem(LocalStorageKeys.isChecked)
		);
		const localStorageEmail = localStorage.getItem(LocalStorageKeys.email);

		if (!localStorageIsChecked || localStorageEmail === null) {
			return;
		}

		setIsChecked(localStorageIsChecked);
		setLoginData({ ...loginData, email: localStorageEmail });
	}, []);

	/* what do I do with handleLoginClick? */
	const handleLoginClick = () => {
		authService
			.login(loginData.email, loginData.password)
			.then((loggedInWithSuccess) => {
				if (!loggedInWithSuccess) {
					return;
				}

				if (isChecked) {
					localStorage.setItem(LocalStorageKeys.email, loginData.email);
				}

				dispatch(login());
				navigate(RoutePaths.TEST);
			});
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

	return (
		<>
			<Stack>
				<Stack>
					<FormLabel>Email Address</FormLabel>
					<TextField
						name="email"
						value={formik.values.email}
						onChange={formik.handleChange}
						error={formik.touched.email && Boolean(formik.errors.email)}
						helperText={formik.touched.email && formik.errors.email}
						variant="outlined"
						required
					/>
				</Stack>
				<Stack>
					<FormLabel>Enter your Password</FormLabel>
					<PasswordInput
						name="password"
						value={formik.values.password}
						onChange={formik.handleChange}
						error={formik.touched.password && Boolean(formik.errors.password)}
						helperText={formik.touched.password && formik.errors.password}
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
			<Button
				variant="contained"
				color="primary"
				size="large"
				type="submit"
				onClick={formik.handleSubmit}
			>
				Log in
			</Button>
		</>
	);
}

const INITIAL_VALUES = {
	email: "",
	password: "",
};
/* how to validate  "email/password is incorrect"? */
const validationSchema = yup.object({
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	password: yup.string("Enter your password").required("Password is required"),
});

export default LoginForm;
