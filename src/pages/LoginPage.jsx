import React from "react";
import { useFormik } from "formik";
import { FormLabel, TextField, Button, Stack } from "@mui/material";
import * as yup from "yup";
import PasswordInput from "../shared/password-input/PasswordInput";

function LoginPage() {
	const onSubmit = (values) => {
		console.log("from button", values);
	};

	const formik = useFormik({
		initialValues: INITIAL_VALUES,
		validationSchema,
		onSubmit,
	});

	return (
		<>
			<Stack gap={1}>
				<FormLabel>Email Address</FormLabel>
				<TextField
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
					variant="outlined"
					size="small"
				/>
				<FormLabel>Password</FormLabel>
				<PasswordInput
					name="password"
					onChange={formik.handleChange}
					value={formik.values.password}
					error={formik.touched.password && Boolean(formik.errors.password)}
					helperText={formik.touched.password && formik.errors.password}
					size="small"
				/>
			</Stack>

			<Button
				onClick={formik.handleSubmit}
				type="submit"
				variant="contained"
				color="primary"
				size="large"
			>
				Log In
			</Button>
		</>
	);
}

const INITIAL_VALUES = {
	email: "",
	password: "",
};

const validationSchema = yup.object({
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
	password: yup
		.string("Enter your password")
		.min(8, "Password should be of minimum 8 characters length")
		.required("Password is required"),
});

export default LoginPage;
