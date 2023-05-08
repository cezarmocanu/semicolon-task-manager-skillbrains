import * as React from "react";
import { useState } from "react";
import { Drawer, Typography, Stack, Avatar, IconButton } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import { useTheme } from "@mui/material/styles";
import SideBarItems from "./SideBarItems";
import ChevronLeftIcon from "@mui/icons-material/ChevronLeft";
import ChevronRightIcon from "@mui/icons-material/ChevronRight";

const BASE_DRAWER_WIDTH = 70;
const EXPANDED_DRAWER_WIDTH = 400;

function SideBar() {
	const [isExpanded, setIsExpanded] = useState(false);
	const theme = useTheme();

	return (
		<Drawer
			variant="permanent"
			anchor={"left"}
			sx={{
				width: isExpanded ? EXPANDED_DRAWER_WIDTH : BASE_DRAWER_WIDTH,
				height: "100vh",
				flexShrink: 0,
				"& .MuiDrawer-paper": {
					width: isExpanded ? EXPANDED_DRAWER_WIDTH : BASE_DRAWER_WIDTH,
					boxSizing: "border-box",
				},
				
			}}
		>
			<Stack direction={"row"} height="100%">
				<Stack
					direction="column"
					spacing={2}
					padding={1}
					sx={{
						backgroundColor: theme.palette.primary.main,
					}}
					alignItems="center"
				>
					<IconButton
						sx={{
							color: theme.palette.secondary.contrastText,
							backgroundColor: theme.palette.primary.main,
							borderRadius: "25%",
						}}
						onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
					>
						{isExpanded ? <ChevronLeftIcon /> : <ChevronRightIcon />}
					</IconButton>
					<Avatar sx={{ marginTop: 4, borderRadius: "25%" }} variant="rounded">
						N
					</Avatar>
					<IconButton
						sx={{
							color: theme.palette.secondary.contrastText,
							backgroundColor: theme.palette.primary.main,
							borderRadius: "25%",
						}}
					>
						<AddIcon />
					</IconButton>
				</Stack>
				<Stack
					sx={{
						width: isExpanded ? EXPANDED_DRAWER_WIDTH - BASE_DRAWER_WIDTH : 0,
						transition: "width 0.2s",
					}}
				>
					<Stack padding={2} paddingTop={5}>
						<Typography variant="h6" component="h3">
							Me & I
						</Typography>
						<Typography>Emanuel's Space</Typography>
					</Stack>
					<SideBarItems />
				</Stack>
			</Stack>
		</Drawer>
	);
}

export default SideBar;
