import React from "react";
import { useDispatch } from "react-redux";
import { Formik, Form, Field, ErrorMessage } from "formik";
import * as Yup from "yup";

import { closeModal } from "../../store/slices/modal-slice";
import {
	DialogTitle,
	DialogContent,
	DialogActions,
	IconButton,
	Stack,
	Typography,
	Grid,
	MenuItem,
} from "@mui/material";
import CloseIcon from "@mui/icons-material/Close";
import Button from "./../shared/button/Button";
import FormLabel from "./../shared/input/FormLabel";
import TextField from "./../shared/input/TextField";
import DatePicker from "./../shared/date-picker/DatePicker";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs from "dayjs";

const OPTIONS = [
	{ value: "Low", id: 1 },
	{ value: "Medium", id: 2 },
	{ value: "High", id: 3 },
];

const validationSchema = Yup.object().shape({
	taskName: Yup.string().required("Task Name is required"),
	priority: Yup.string().required("Priority is required"),
	dueDate: Yup.date().required("Due Date is required"),
	description: Yup.string().required("Description is required"),
});

const EditTask = ({ initialValues }) => {
	const dispatch = useDispatch();
	const today = dayjs();
	const tomorrow = today.add(1, "day");

	const handleSubmit = (values) => {
		console.log(values);
	};

	return (
		<Formik
			initialValues={initialValues}
			validationSchema={validationSchema}
			onSubmit={handleSubmit}
		>
			{(formikProps) => (
				<Form>
					<Stack
						sx={{
							width: "65vw",
							"@media (min-width: 600px)": {
								width: "50vw",
							},
							"@media (min-width: 1280px)": {
								width: "35vw",
							},
						}}
					>
						<Stack
							sx={{
								width: "100%",
							}}
						>
							<DialogActions sx={{ paddingBottom: 0 }}>
								<IconButton
									onClick={() => dispatch(closeModal())}
									color="theme.text.primary"
								>
									<CloseIcon />
								</IconButton>
							</DialogActions>
							<DialogTitle sx={{ paddingTop: 0 }}>Edit Task</DialogTitle>
							<DialogContent>
								<Stack gap={2}>
									<Stack gap={1}>
										<FormLabel>
											<Typography fontWeight="medium">Task Name</Typography>
										</FormLabel>
										<Field
											as={TextField}
											required
											variant="outlined"
											name="taskName"
										/>
										<ErrorMessage
											name="taskName"
											component="div"
											className="error"
										/>
									</Stack>
									<Stack direction={"row"}>
										<Grid container spacing={2}>
											<Grid item xs={6}>
												<Stack gap={1}>
													<FormLabel>
														<Typography fontWeight="medium">
															Task Priority
														</Typography>
													</FormLabel>
													<Field
														as={TextField}
														select
														name="priority"
														variant="outlined"
													>
														{OPTIONS.map((option) => (
															<MenuItem key={option.value} value={option.value}>
																{option.value}
															</MenuItem>
														))}
													</Field>
													<ErrorMessage
														name="priority"
														component="div"
														className="error"
													/>
												</Stack>
											</Grid>
											<Grid item xs={6}>
												<Stack gap={1}>
													<FormLabel>
														<Typography fontWeight="medium">
															Due Date
														</Typography>
													</FormLabel>
													<LocalizationProvider dateAdapter={AdapterDayjs}>
														<Field
															as={DatePicker}
															defaultValue={tomorrow}
															minDate={tomorrow}
															name="dueDate"
														/>
													</LocalizationProvider>
													<ErrorMessage
														name="dueDate"
														component="div"
														className="error"
													/>
												</Stack>
											</Grid>
										</Grid>
									</Stack>
									<Stack gap={1}>
										<FormLabel>
											<Typography fontWeight="medium">
												Task Description
											</Typography>
										</FormLabel>
										<Field
											as={TextField}
											required
											variant="outlined"
											placeholder="Type your content here..."
											name="description"
											multiline
											rows={3}
										/>
										<ErrorMessage
											name="description"
											component="div"
											className="error"
										/>
									</Stack>
									<Stack justifyContent="flex-start" alignItems="flex-start">
										<Button
											variant="contained"
											color="primary"
											size="large"
											type="submit"
										>
											Update Task
										</Button>
									</Stack>
								</Stack>
							</DialogContent>
						</Stack>
					</Stack>
				</Form>
			)}
		</Formik>
	);
};

export default EditTask;
