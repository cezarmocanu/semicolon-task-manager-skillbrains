import React from "react";
import { useFormik } from "formik";
import { Typography,
        FormLabel, 
        TextField,         
        Stack, 
        InputAdornment 
} from "@mui/material";
import Button from "../shared/button/Button";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import * as yup from "yup";


function ChangePasswordForm() {
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
            <Stack
                sx={{
                    width: "20rem",
                    maxWidth: "100%",
                }}
            >
                <FormLabel>Password</FormLabel>
                <TextField
                    name="password"
                    onChange={formik.handleChange}
                    value={formik.values.password}
                    error={formik.touched.password && Boolean(formik.errors.password)}
                    helperText={formik.touched.password && formik.errors.password}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <VisibilityOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                    type="password"
                    required
                    size="small"
                    variant="outlined"
                />
            </Stack>
            <Stack
                sx={{
                    width: "20rem",
                    maxWidth: "100%",
                }}
            >
                <FormLabel>Confirm Password</FormLabel>
                <TextField
                    name="confirmPassword"
                    onChange={formik.handleChange}
                    error={formik.touched.confirmPassword && Boolean(formik.errors.confirmPassword)}
                    helperText={formik.touched.confirmPassword && formik.errors.confirmPassword}
                    InputProps={{
                        endAdornment: (
                            <InputAdornment position="end">
                                <VisibilityOutlinedIcon />
                            </InputAdornment>
                        ),
                    }}
                    type="password"
                    required
                    size="small"
                    variant="outlined"
                />
            </Stack>
            <Stack alignItems="flex-start">
                <Button
                    onClick={formik.handleSubmit} 
                    type="submit"
                    size="medium" 
                    variant="contained">
                    <Typography variant="button">Save</Typography>
                </Button>
            </Stack>
        </>
    );
}

const INITIAL_VALUES = {
	password: "",
	confirmPassword: "",	
};

const validationSchema = yup.object({
	password: yup
		.string("Enter your password")
		.min(8, "Password should be of minimum 8 characters length")
		.required("Password is required"),
    confirmPassword: yup
        .string("Enter your password")       
		.oneOf([yup.ref('password'), null], 'Password must match')
        .required("Password is required"),
		

});
export default ChangePasswordForm;
                