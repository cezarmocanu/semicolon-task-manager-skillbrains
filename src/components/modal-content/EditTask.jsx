import { useState, useMemo } from "react";
import { useTheme } from "@mui/material/styles";
import { AdapterDayjs } from "@mui/x-date-pickers/AdapterDayjs";
import { LocalizationProvider } from "@mui/x-date-pickers/LocalizationProvider";
import dayjs, { Dayjs } from "dayjs";
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
import { closeModal } from "../../store/slices/modal-slice";
import { useDispatch } from "react-redux";

const OPTIONS = [
	{ value: "Low", id: 1 },
	{ value: "Medium", id: 2 },
	{ value: "High", id: 3 },
];

function EditTask() {
	const theme = useTheme();
	const today = useMemo(() => dayjs());
	const tomorrow = useMemo(() => today.add(1, "day"));
	const dispatch = useDispatch();
	const [formState, setFormState] = useState({
		taskName: "",
		priority: "",
		dueDate: "",
		description: "",
	});

	const handleFieldChange = (event) => {
		setFormState({ ...formState, [event.target.name]: event.target.value });
	};
	const handleChangeDueDate = (selectedDate) => {
		setFormState({ ...formState, dueDate: selectedDate.toDate() });
	};
	const onSubmitEditTask = () => {
		console.log(formState);
	};
	return (
		<Stack
			sx={{
				[theme.breakpoints.up("lg")]: {
					width: "35vw",
				},
				[theme.breakpoints.up("md")]: {
					width: "50vw",
				},
				width: "65vw",
			}}
		>
			<Stack sx={{ width: "100%" }}>
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
							<TextField
								required
								variant="outlined"
								name="taskName"
								onChange={handleFieldChange}
							/>
						</Stack>
						<Stack direction={"row"}>
							<Grid container spacing={2}>
								<Grid item xs={6}>
									<Stack gap={1}>
										<FormLabel>
											<Typography fontWeight="medium">Task Priority</Typography>
										</FormLabel>
										<TextField
											select
											name="priority"
											value={formState.priority}
											onChange={handleFieldChange}
										>
											{OPTIONS.map((option) => (
												<MenuItem key={option.value} value={option.value}>
													{option.value}
												</MenuItem>
											))}
										</TextField>
									</Stack>
								</Grid>
								<Grid item xs={6}>
									<Stack gap={1}>
										<FormLabel>
											<Typography fontWeight="medium">Due Date</Typography>
										</FormLabel>
										<LocalizationProvider dateAdapter={AdapterDayjs}>
											<DatePicker
												defaultValue={tomorrow}
												minDate={tomorrow}
												onChange={handleChangeDueDate}
											/>
										</LocalizationProvider>
									</Stack>
								</Grid>
							</Grid>
						</Stack>
						<Stack gap={1}>
							<FormLabel>
								<Typography fontWeight="medium">Task Description</Typography>
							</FormLabel>
							<TextField
								required
								variant="outlined"
								placeholder="Type your content here...."
								name="description"
								onChange={handleFieldChange}
								multiline
								rows={3}
							/>
						</Stack>
						<Stack justifyContent="flex-start" alignItems="flex-start">
							<Button
								variant="contained"
								color="primary"
								size="large"
								onClick={onSubmitEditTask}
							>
								Edit Task
							</Button>
						</Stack>
					</Stack>
				</DialogContent>
			</Stack>
		</Stack>
	);
}

export default EditTask;
