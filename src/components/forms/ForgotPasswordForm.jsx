import React from "react";
import { useFormik } from "formik";
import { FormLabel, TextField, Button, Stack } from "@mui/material";
import * as yup from "yup";

function ForgotPasswordForm(){
    
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
				<FormLabel>Enter your Email :</FormLabel>
				<TextField
					name="email"
					onChange={formik.handleChange}
					value={formik.values.email}
					error={formik.touched.email && Boolean(formik.errors.email)}
					helperText={formik.touched.email && formik.errors.email}
					required
					variant="outlined"
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
				Send Recovery Email
			</Button>
</>
	);
}
const INITIAL_VALUES = {
	email: "",
};
const validationSchema = yup.object({
	email: yup
		.string("Enter your email")
		.email("Enter a valid email")
		.required("Email is required"),
});

export default ForgotPasswordForm;