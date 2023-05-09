import React, { useState, useEffect } from "react";
import { useTheme } from "@mui/material/styles";

import {
	Container,
	Typography,
	Box,
	CardContent,
	Grid,
	Stack,
	CardActions,
	IconButton,
	CardHeader,
	Avatar,
	InputAdornment,
	List,
	ListItemText,
} from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import ErrorOutlineIcon from "@mui/icons-material/ErrorOutline";
import MoreHorizIcon from "@mui/icons-material/MoreHoriz";
import TaskDetailsCard from "../components/TaskDetailsCard";
import Button from "../components/shared/button/Button";
import Chip from "../components/shared/chip/Chip";
import CardComponent from "../components/shared/card/Card";
import CardMedia from "../components/shared/card/CardMedia";
import TaskStatus from "../constants/task-status";
import ContainedImage from "../components/ContainedImage";
import FormLabel from "../components/shared/input/FormLabel";
import TextField from "../components/shared/input/TextField";
import TaskTimeline from "../components/TaskTimeline";
import TestCounter from "../components/TestCounter";
import PasswordInput from "../components/shared/password-input/PasswordInput";
import { useDispatch } from "react-redux";
import { openModal } from "../store/slices/modal-slice";
import ModalTypes from "../constants/modal-types";
import workspaceService from "../services/workspace-service";
import authService from "../services/auth-service";
import { useNavigate } from "react-router-dom";
import RoutePaths from "../constants/route-paths";
import { logout } from "../store/slices/authentication-slice";
import NoTasksPlaceholder from "../components/widget/NoTasksPlaceholder";

function Test() {
	const dispatch = useDispatch();
	const theme = useTheme();

	const navigate = useNavigate();
	const handleLogoutClick = () => {
		authService.logout().then((_) => {
			dispatch(logout());
			navigate(RoutePaths.LOGIN);
		});
	};

	const [workspaces, setWorkspaces] = useState([]);

	useEffect(() => {
		workspaceService.getWorkspaces().then((data) => {
			setWorkspaces(data);
		});
	}, []);

	return (
		<Box style={{ backgroundColor: "whitesmoke" }}>
			<Container>
				<Box>
					<List>
						{workspaces.map((workspace) => (
							<ListItemText key={workspace.id}>{workspace.name}</ListItemText>
						))}
					</List>
				</Box>
				<Button
					variant="contained"
					onClick={() => {
						dispatch(openModal(ModalTypes.DELETE_TASK));
					}}
				>
					DeleteModalContent
				</Button>

				<Button variant="contained" color="primary" onClick={handleLogoutClick}>
					Log out
				</Button>
				<Button
					variant="contained"
					onClick={() => {
						dispatch(openModal(ModalTypes.TEST));
					}}
				>
					Open modal test 1
				</Button>
				<Button
					variant="contained"
					onClick={() => {
						dispatch(openModal(ModalTypes.TEST2));
					}}
				>
					Open modal test 2
				</Button>

				<Button
					variant="contained"
					onClick={() => {
						dispatch(openModal(ModalTypes.LOGOUT));
					}}
				>
					Logout Modal
				</Button>

				<Button
					variant="contained"
					onClick={() => {
						dispatch(openModal(ModalTypes.CREATE_TASK));
					}}
				>
					CreateTask
				</Button>
				<TestCounter />
				<TestCounter />
				<Typography variant="h2" gutterBottom>
					ContainedImage example
				</Typography>
				<Stack direction="row">
					<ContainedImage
						src={"/logo-background.png"}
						width={400}
						height={600}
					/>
					<ContainedImage src={"/vite.svg"} sx={{ width: 400, height: 600 }} />
				</Stack>
				<Typography variant="h2" gutterBottom>
					h2. Heading
				</Typography>
				<Typography variant="h3" gutterBottom>
					h3. Heading
				</Typography>
				<Typography variant="h4" gutterBottom>
					h4. Heading
				</Typography>
				<Typography variant="h5" gutterBottom>
					h5. Heading
				</Typography>
				<Typography variant="h6" gutterBottom>
					h6. Heading
				</Typography>
				<Typography variant="subtitle1" gutterBottom>
					subtitle1. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quos blanditiis tenetur
				</Typography>
				<Typography variant="subtitle2" gutterBottom>
					subtitle2. Lorem ipsum dolor sit amet, consectetur adipisicing elit.
					Quos blanditiis tenetur
				</Typography>
				<Typography variant="body1" gutterBottom>
					body1. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					blanditiis tenetur unde suscipit, quam beatae rerum inventore
					consectetur, neque doloribus, cupiditate numquam dignissimos laborum
					fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
				<Typography variant="body2" gutterBottom>
					body2. Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quos
					blanditiis tenetur unde suscipit, quam beatae rerum inventore
					consectetur, neque doloribus, cupiditate numquam dignissimos laborum
					fugiat deleniti? Eum quasi quidem quibusdam.
				</Typography>
				<Typography variant="button" display="block" gutterBottom>
					button text
				</Typography>
				<Typography variant="caption" display="block" gutterBottom>
					caption text
				</Typography>
				<Typography variant="overline" display="block" gutterBottom>
					overline text
				</Typography>
				<Button sx={{ width: 190 }} size="large" variant="contained">
					Test
				</Button>
				<Button size="medium" variant="link">
					Test
				</Button>
				<Button disabled size="small" variant="contained">
					Test
				</Button>
				<Button size="small" variant="contained" color="success">
					Test
				</Button>
				<Box display="flex" gap="5px">
					<Box>
						<Stack>
							<FormLabel>Label</FormLabel>
							<TextField
								required
								variant="outlined"
								helperText="Information about the label"
							/>
						</Stack>
						<Stack>
							<FormLabel>Label</FormLabel>
							<TextField
								required
								variant="outlined"
								helperText="Information about the input"
							/>
						</Stack>
						<Stack>
							<FormLabel>Label</FormLabel>
							<TextField
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<ErrorOutlineIcon />
										</InputAdornment>
									),
								}}
								error
								required
								variant="outlined"
								helperText="Information about the input"
							/>
						</Stack>

						<Stack>
							<FormLabel disabled>Label</FormLabel>
							<TextField
								disabled
								required
								variant="outlined"
								helperText="This part is disabled"
							/>
						</Stack>
						<Stack>
							<FormLabel>Label</FormLabel>
							<TextField
								required
								variant="outlined"
								helperText="Information about the input"
							/>
						</Stack>
					</Box>
					<Box>
						<Stack>
							<FormLabel>Email Address</FormLabel>
							<TextField
								required
								variant="outlined"
								helperText="Example. mano@gmail.com"
							/>
						</Stack>
						<Stack>
							<FormLabel>Email Address</FormLabel>
							<TextField
								required
								variant="outlined"
								helperText="Example. mano@gmail.com"
							/>
						</Stack>
						<Stack>
							<FormLabel>Email Address</FormLabel>
							<TextField
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<ErrorOutlineIcon />
										</InputAdornment>
									),
								}}
								error
								required
								variant="outlined"
								helperText="Information about the input"
							/>
						</Stack>
						<Stack>
							<FormLabel disabled>Email Address</FormLabel>
							<TextField
								disabled
								required
								variant="outlined"
								helperText="This part is disabled"
							/>
						</Stack>
						<Stack>
							<FormLabel>Email Address</FormLabel>
							<TextField
								required
								type="password"
								variant="outlined"
								helperText="You have a missing .com.."
							/>
						</Stack>
					</Box>
					<Box>
						<Stack>
							<FormLabel>Password</FormLabel>
							<TextField
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<VisibilityOutlinedIcon />
										</InputAdornment>
									),
								}}
								type="password"
								required
								variant="outlined"
								helperText="Upto 8 characters with an Uppercase, symbol and number"
							/>
						</Stack>
						<Stack>
							<FormLabel>Password</FormLabel>
							<TextField
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<VisibilityOutlinedIcon />
										</InputAdornment>
									),
								}}
								type="password"
								required
								variant="outlined"
								helperText="Upto 8 characters with an Uppercase, symbol and number"
							/>
						</Stack>
						<Stack>
							<FormLabel>Password</FormLabel>
							<TextField
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<ErrorOutlineIcon />
										</InputAdornment>
									),
								}}
								type="password"
								error
								required
								variant="outlined"
								helperText="Upto 8 characters with an Uppercase, symbol and number"
							/>
						</Stack>

						<Stack>
							<FormLabel disabled>Password</FormLabel>
							<TextField
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<VisibilityOutlinedIcon />
										</InputAdornment>
									),
								}}
								type="password"
								disabled
								required
								variant="outlined"
								helperText="This part is disabled"
							/>
						</Stack>
						<Stack>
							<FormLabel>Password</FormLabel>
							<TextField
								type="password"
								InputProps={{
									endAdornment: (
										<InputAdornment position="end">
											<VisibilityOutlinedIcon />
										</InputAdornment>
									),
								}}
								required
								variant="outlined"
								helperText="Password doesn’t match requirements"
							/>
						</Stack>
					</Box>
				</Box>
				<Typography>Contained Large</Typography>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="large" variant="contained">
						Button
					</Button>
					<Button size="large" variant="contained" color="secondary">
						Button
					</Button>
					<Button size="large" disabled>
						Button
					</Button>
				</Stack>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="large" variant="contained" color="error">
						Button
					</Button>
					<Button size="large" variant="contained" color="warning">
						Button
					</Button>
					<Button size="large" variant="contained" color="info">
						Button
					</Button>
					<Button size="large" variant="contained" color="success">
						Button
					</Button>
				</Stack>
				<Typography>Contained Medium</Typography>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="medium" variant="contained">
						Button
					</Button>
					<Button size="medium" variant="contained" color="secondary">
						Button
					</Button>
					<Button size="medium" variant="disabled">
						Button
					</Button>
				</Stack>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="medium" variant="contained" color="error">
						Button
					</Button>
					<Button size="medium" variant="contained" color="warning">
						Button
					</Button>
					<Button size="medium" variant="contained" color="info">
						Button
					</Button>
					<Button size="medium" variant="contained" color="success">
						Button
					</Button>
				</Stack>
				<Typography>Contained Small</Typography>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="small" variant="contained">
						Button
					</Button>
					<Button size="small" variant="contained" color="secondary">
						Button
					</Button>
					<Button size="small" variant="disabled" color="secondary">
						Button
					</Button>
				</Stack>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="small" variant="contained" color="error">
						Button
					</Button>
					<Button size="small" variant="contained" color="warning">
						Button
					</Button>
					<Button size="small" variant="contained" color="info">
						Button
					</Button>
					<Button size="small" variant="contained" color="success">
						Button
					</Button>
				</Stack>
				<Typography>Outlined Large</Typography>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="large" variant="outlined">
						Button
					</Button>
					<Button size="large" variant="outlined" color="secondary">
						Button
					</Button>
					<Button size="large" disabled variant="outlined">
						Button
					</Button>
				</Stack>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="large" variant="outlined" color="error">
						Button
					</Button>
					<Button size="large" variant="outlined" color="warning">
						Button
					</Button>
					<Button size="large" variant="outlined" color="info">
						Button
					</Button>
					<Button size="large" variant="outlined" color="success">
						Button
					</Button>
				</Stack>
				<Typography>Outlined Medium</Typography>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="medium" variant="outlined">
						Button
					</Button>
					<Button size="medium" variant="outlined" color="secondary">
						Button
					</Button>
					<Button size="medium" variant="outlined" disabled>
						Button
					</Button>
				</Stack>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="medium" variant="outlined" color="error">
						Button
					</Button>
					<Button size="medium" variant="outlined" color="warning">
						Button
					</Button>
					<Button size="medium" variant="outlined" color="info">
						Button
					</Button>
					<Button size="medium" variant="outlined" color="success">
						Button
					</Button>
				</Stack>
				<Typography>Outlined Small</Typography>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="small" variant="outlined">
						Button
					</Button>
					<Button size="small" variant="outlined" color="secondary">
						Button
					</Button>
					<Button size="small" variant="outlined" disabled>
						Button
					</Button>
				</Stack>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="small" variant="outlined" color="error">
						Button
					</Button>
					<Button size="small" variant="outlined" color="warning">
						Button
					</Button>
					<Button size="small" variant="outlined" color="info">
						Button
					</Button>
					<Button size="small" variant="outlined" color="success">
						Button
					</Button>
				</Stack>
				<Typography>Link Large</Typography>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="large" variant="link">
						Button
					</Button>
					<Button size="large" variant="link" color="secondary">
						Button
					</Button>
				</Stack>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="large" variant="link" color="error">
						Button
					</Button>
					<Button size="large" variant="link" color="warning">
						Button
					</Button>
					<Button size="large" variant="link" color="info">
						Button
					</Button>
					<Button size="large" variant="link" color="success">
						Button
					</Button>
				</Stack>
				<Typography>Link Medium</Typography>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="medium" variant="link">
						Button
					</Button>
					<Button size="medium" variant="link" color="secondary">
						Button
					</Button>
				</Stack>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="medium" variant="link" color="error">
						Button
					</Button>
					<Button size="medium" variant="link" color="warning">
						Button
					</Button>
					<Button size="medium" variant="link" color="info">
						Button
					</Button>
					<Button size="medium" variant="link" color="success">
						Button
					</Button>
				</Stack>
				<Typography>Link Small</Typography>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="small" variant="link">
						Button
					</Button>
					<Button size="small" variant="link" color="secondary">
						Button
					</Button>
				</Stack>
				<Stack direction="row" spacing={1} margin={1}>
					<Button size="small" variant="link" color="error">
						Button
					</Button>
					<Button size="small" variant="link" color="warning">
						Button
					</Button>
					<Button size="small" variant="link" color="info">
						Button
					</Button>
					<Button size="small" variant="link" color="success">
						Button
					</Button>
				</Stack>
				<Chip color="error" label="232223211321321511" />
				<Chip color="error" variant="outlined" label="23" />
				<Chip color="error" variant="disabled" label="23" />
				<Chip color="primary" label="23" />
				<Chip color="primary" variant="outlined" label="23" />
				<Chip color="primary" variant="disabled" label="23" />
				<Chip
					avatar={<Avatar> </Avatar>}
					color="primary"
					variant="outlined"
					label="just text"
				/>
				<Chip avatar={<Avatar> </Avatar>} color="primary" label="just text" />
				<Box>
					<Chip avatar={<Avatar> </Avatar>} color="primary" variant="dot" />
					<Chip
						avatar={<Avatar> </Avatar>}
						color="primary"
						variant="outlined"
					/>
					<Chip
						avatar={<Avatar> </Avatar>}
						color="primary"
						variant="dot"
						disabled
					/>
				</Box>
				<Box>
					<Chip avatar={<Avatar> </Avatar>} color="secondary" variant="dot" />
					<Chip
						avatar={<Avatar> </Avatar>}
						color="secondary"
						variant="outlined"
					/>
					<Chip
						avatar={<Avatar> </Avatar>}
						color="secondary"
						variant="dot"
						disabled
					/>
				</Box>
				<Box>
					<Chip avatar={<Avatar> </Avatar>} color="error" variant="dot" />
					<Chip avatar={<Avatar> </Avatar>} color="error" variant="outlined" />
					<Chip
						avatar={<Avatar> </Avatar>}
						color="error"
						variant="dot"
						disabled
					/>
				</Box>
				<Box>
					<Chip avatar={<Avatar> </Avatar>} variant="dot" color="warning" />
					<Chip
						avatar={<Avatar> </Avatar>}
						color="warning"
						variant="outlined"
					/>
					<Chip
						avatar={<Avatar> </Avatar>}
						color="warning"
						variant="dot"
						disabled
					/>
				</Box>
				<Box>
					<Chip avatar={<Avatar> </Avatar>} color="info" variant="dot" />
					<Chip avatar={<Avatar> </Avatar>} color="info" variant="outlined" />
					<Chip
						avatar={<Avatar> </Avatar>}
						color="info"
						variant="dot"
						disabled
					/>
				</Box>
				<Box>
					<Chip avatar={<Avatar> </Avatar>} color="info" variant="dot" />
					<Chip avatar={<Avatar> </Avatar>} color="info" variant="outlined" />
					<Chip
						avatar={<Avatar> </Avatar>}
						color="info"
						variant="dot"
						disabled
					/>
				</Box>
				<Grid container spacing={4}>
					<Grid item xs={4}>
						<CardComponent>
							<CardHeader
								title={
									<Avatar
										variant="circular"
										sx={{
											color: theme.palette.text.primary,
											backgroundColor: theme.palette.text.light,
										}}
									>
										<ErrorOutlineIcon />
									</Avatar>
								}
								subheader={
									<Typography variant="h5" fontWeight="bold">
										Card
									</Typography>
								}
							/>
							<CardContent>
								<Typography variant="body1" color="text.secondary">
									Emmanuel, always have in mind that you are a great person. A
									man of valor. No matter you would excel.
								</Typography>
							</CardContent>
						</CardComponent>
					</Grid>
					<Grid item xs={4}>
						<CardComponent>
							<CardHeader
								title={
									<Typography variant="h5" fontWeight="bold">
										Card
									</Typography>
								}
							/>
							<CardContent>
								<Typography variant="body1" color="text.secondary">
									Emmanuel, always have in mind that you are a great person. A
									man of valor. No matter you would excel.
								</Typography>
								<CardActions>
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="center"
										sx={{ width: "100%" }}
									>
										<Button variant="contained">Hello wolrd</Button>
										<Avatar
											variant="circular"
											sx={{
												color: theme.palette.text.primary,
												backgroundColor: theme.palette.text.light,
											}}
										>
											<ErrorOutlineIcon />
										</Avatar>
									</Stack>
								</CardActions>
							</CardContent>
						</CardComponent>
					</Grid>
					<Grid item xs={4}>
						<CardComponent>
							<CardHeader
								action={
									<IconButton aria-label="settings">
										<MoreHorizIcon />
									</IconButton>
								}
								title={
									<Typography variant="h5" fontWeight="bold">
										Card
									</Typography>
								}
							/>
							<CardContent>
								<Typography variant="body1" color="text.secondary">
									Emmanuel, always have in mind that you are a great person. A
									man of valor. No matter you would excel.
								</Typography>
								<CardActions>
									<Stack
										direction="row"
										justifyContent="space-between"
										alignItems="center"
										sx={{ width: "100%" }}
									>
										<Button variant="contained">Hello wolrd</Button>
										<Avatar
											variant="circular"
											sx={{
												color: theme.palette.text.primary,
												backgroundColor: theme.palette.text.light,
											}}
										>
											<ErrorOutlineIcon />
										</Avatar>
									</Stack>
								</CardActions>
							</CardContent>
						</CardComponent>
					</Grid>
					<Grid item xs={4}>
						<CardComponent>
							<CardMedia>
								<Box
									sx={{
										p: 2,
										height: 180,
										borderRadius: "16px",
										backgroundColor: theme.palette.primary.main,
									}}
								/>
							</CardMedia>
							<CardHeader
								title={
									<Typography variant="h5" fontWeight="bold">
										Card
									</Typography>
								}
							/>
							<CardContent>
								<Typography variant="body1" color="text.secondary">
									Emmanuel, always have in mind that you are a great person. A
									man of valor. No matter you would excel.
								</Typography>
								<CardActions>
									<Button />
								</CardActions>
							</CardContent>
						</CardComponent>
					</Grid>
					<Grid item xs={4}>
						<CardComponent>
							<CardMedia>
								<Box
									sx={{
										p: 2,
										height: 180,
										borderRadius: "16px",
										backgroundColor: theme.palette.text.primary,
									}}
								/>
							</CardMedia>
							<CardHeader title={<Typography variant="h5">Card</Typography>} />
							<CardContent>
								<Typography variant="body1" color="text.secondary">
									Emmanuel, always have in mind that you are a great person. A
									man of valor. No matter you would excel.
								</Typography>
							</CardContent>
						</CardComponent>
					</Grid>
				</Grid>
				<Container>
					<Grid item md={12} xs={6} mt={5}>
						<TaskDetailsCard
							status={TaskStatus.PENDING}
							setIsDeleteModalOpen={() => {}}
							startDate={new Date("2023-10-10")}
							dueDate={Date.now()}
						/>
						<TaskDetailsCard
							status={TaskStatus.IN_PROGRESS}
							setIsDeleteModalOpen={() => {}}
							startDate={new Date("2023-10-10")}
							dueDate={Date.now()}
						/>
						<TaskDetailsCard
							status={TaskStatus.IN_REVIEW}
							setIsDeleteModalOpen={() => {}}
							startDate={new Date("2023-10-10")}
							dueDate={Date.now()}
						/>
						<TaskDetailsCard
							status={TaskStatus.COMPLETED}
							setIsDeleteModalOpen={() => {}}
							startDate={new Date("2023-10-10")}
							dueDate={Date.now()}
						/>
					</Grid>
				</Container>
			</Container>
			<TaskTimeline startDate={Date.now()} dueDate={Date.now()} />
			<TaskTimeline startDate={new Date("2023-10-10")} dueDate={Date.now()} />
			<PasswordInput />
			<Box sx={{ width: "100vw", height: "100vh" }}>
				<NoTasksPlaceholder
					onCreateTaskClick={() => {
						console.log("Task created 2");
					}}
				/>
			</Box>
		</Box>
	);
}

export default Test;
