import React from "react";
import { useTheme } from "@mui/material/styles";
import {
	Typography,
	Stack,
	CardContent,
	CardHeader,
	CardActions,
	Avatar,
	darken,
} from "@mui/material";
import Button from "../components/shared/button/Button";
import CardComponent from "../components/shared/card/Card";
import ArrowForwardIcon from "@mui/icons-material/ArrowForward";
function WorkspacesCardsPage() {
	const theme = useTheme();
	return (
		<Stack sx={{ p: 5 }}>
			<Stack direction="row" justifyContent="space-between" alignItems="center">
				<Typography
					variant="h3"
					gutterBottom
					sx={{ color: darken(theme.palette.primary.main, 0.5) }}
				>
					Workspaces
				</Typography>
				<Button size="Large" variant="contained">
					Create Workspace
				</Button>
			</Stack>
			<Stack
				direction="row"
				justifyContent="space-around"
				gap="2rem"
				sx={{ py: 3 }}
			>
				<CardComponent>
					<CardHeader
						title={
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{ color: darken(theme.palette.primary.main, 0.5) }}
							>
								Workspace 1
							</Typography>
						}
					/>
					<CardContent>
						<Typography variant="body1" color="text.secondary" minHeight="5rem">
							Workspace description lorem ipsum dolor sit amet.
						</Typography>
						<CardActions sx={{ p: 0 }}>
							<Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
								<Button
									size="medium"
									variant="link"
									sx={{ p: 0, justifyContent: "flex-start" }}
								>
									View
								</Button>
								<Avatar
									variant="circular"
									sx={{
										color: theme.palette.text.primary,
										backgroundColor: theme.palette.text.light,
									}}
								>
									<ArrowForwardIcon />
								</Avatar>
							</Stack>
						</CardActions>
					</CardContent>
				</CardComponent>
				<CardComponent>
					<CardHeader
						title={
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{ color: darken(theme.palette.primary.main, 0.5) }}
							>
								Workspace 2
							</Typography>
						}
					/>
					<CardContent>
						<Typography variant="body1" color="text.secondary" minHeight="5rem">
							Workspace description lorem ipsum dolor sit amet.
						</Typography>
						<CardActions sx={{ p: 0 }}>
							<Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
								<Button
									size="medium"
									variant="link"
									sx={{ p: 0, justifyContent: "flex-start" }}
								>
									View
								</Button>
								<Avatar
									variant="circular"
									sx={{
										color: theme.palette.text.primary,
										backgroundColor: theme.palette.text.light,
									}}
								>
									<ArrowForwardIcon />
								</Avatar>
							</Stack>
						</CardActions>
					</CardContent>
				</CardComponent>
				<CardComponent>
					<CardHeader
						title={
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{ color: darken(theme.palette.primary.main, 0.5) }}
							>
								Workspace 3
							</Typography>
						}
					/>
					<CardContent>
						<Typography variant="body1" color="text.secondary" minHeight="5rem">
							Workspace description lorem ipsum dolor sit amet.
						</Typography>
						<CardActions sx={{ p: 0 }}>
							<Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
								<Button
									size="medium"
									variant="link"
									sx={{ p: 0, justifyContent: "flex-start" }}
								>
									View
								</Button>
								<Avatar
									variant="circular"
									sx={{
										color: theme.palette.text.primary,
										backgroundColor: theme.palette.text.light,
									}}
								>
									<ArrowForwardIcon />
								</Avatar>
							</Stack>
						</CardActions>
					</CardContent>
				</CardComponent>
			</Stack>
			<Stack
				direction="row"
				justifyContent="space-around"
				gap="2rem"
				sx={{ py: 3 }}
			>
				<CardComponent>
					<CardHeader
						title={
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{ color: darken(theme.palette.primary.main, 0.5) }}
							>
								Workspace 4
							</Typography>
						}
					/>
					<CardContent>
						<Typography variant="body1" color="text.secondary" minHeight="5rem">
							Workspace description lorem ipsum dolor sit amet.
						</Typography>
						<CardActions sx={{ p: 0 }}>
							<Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
								<Button
									size="medium"
									variant="link"
									sx={{ p: 0, justifyContent: "flex-start" }}
								>
									View
								</Button>
								<Avatar
									variant="circular"
									sx={{
										color: theme.palette.text.primary,
										backgroundColor: theme.palette.text.light,
									}}
								>
									<ArrowForwardIcon />
								</Avatar>
							</Stack>
						</CardActions>
					</CardContent>
				</CardComponent>
				<CardComponent>
					<CardHeader
						title={
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{ color: darken(theme.palette.primary.main, 0.5) }}
							>
								Workspace 5
							</Typography>
						}
					/>
					<CardContent>
						<Typography variant="body1" color="text.secondary" minHeight="5rem">
							Workspace description lorem ipsum dolor sit amet.
						</Typography>
						<CardActions sx={{ p: 0 }}>
							<Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
								<Button
									size="medium"
									variant="link"
									sx={{ p: 0, justifyContent: "flex-start" }}
								>
									View
								</Button>
								<Avatar
									variant="circular"
									sx={{
										color: theme.palette.text.primary,
										backgroundColor: theme.palette.text.light,
									}}
								>
									<ArrowForwardIcon />
								</Avatar>
							</Stack>
						</CardActions>
					</CardContent>
				</CardComponent>
				<CardComponent>
					<CardHeader
						title={
							<Typography
								variant="h5"
								fontWeight="bold"
								sx={{ color: darken(theme.palette.primary.main, 0.5) }}
							>
								Workspace 6
							</Typography>
						}
					/>
					<CardContent>
						<Typography variant="body1" color="text.secondary" minHeight="5rem">
							Workspace description lorem ipsum dolor sit amet.
						</Typography>
						<CardActions sx={{ p: 0 }}>
							<Stack direction="row" alignItems="center" sx={{ width: "100%" }}>
								<Button
									size="medium"
									variant="link"
									sx={{ p: 0, justifyContent: "flex-start" }}
								>
									View
								</Button>
								<Avatar
									variant="circular"
									sx={{
										color: theme.palette.text.primary,
										backgroundColor: theme.palette.text.light,
									}}
								>
									<ArrowForwardIcon />
								</Avatar>
							</Stack>
						</CardActions>
					</CardContent>
				</CardComponent>
			</Stack>
		</Stack>
	);
}
export default WorkspacesCardsPage;
