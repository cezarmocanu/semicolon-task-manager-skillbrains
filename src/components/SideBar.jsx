import * as React from "react";
import { useState } from "react";
import { Drawer, Button, Typography, Stack, Avatar } from "@mui/material";
import AddIcon from "@mui/icons-material/Add";
import Theme from "../theme";
import SideBarItems from "./SideBarItems";

const BASE_DRAWER_WIDTH = 72;
const EXPANDED_DRAWER_WIDTH = 408;

function SideBar() {
	const [isExpanded, setIsExpanded] = useState(false);

	return (
		<Drawer
			variant="permanent"
			anchor={"left"}
			sx={{
				width: isExpanded ? EXPANDED_DRAWER_WIDTH : BASE_DRAWER_WIDTH,
				height: "100vh",
				flexShrink: 0,
			}}
		>
			<Stack direction={"row"} height="100%">
				<Stack
					direction="column"
					spacing={2}
					padding={2}
					sx={{
						backgroundColor: Theme.palette.primary.main,
					}}
					alignItems="center"
				>
					<Button
						color="success"
						onClick={() => setIsExpanded((isExpanded) => !isExpanded)}
					>
						<AddIcon />
					</Button>
					<Avatar sx={{ marginTop: 4 }}>N</Avatar>
					<AddIcon />
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
