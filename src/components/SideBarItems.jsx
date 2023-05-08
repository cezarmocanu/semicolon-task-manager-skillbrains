import {
	List,
	ListItemIcon,
	ListItem,
	ListItemButton,
	ListItemText,
} from "@mui/material";

import AssignmentIcon from "@mui/icons-material/Assignment";
import SettingsIcon from "@mui/icons-material/Settings";
import AppsIcon from "@mui/icons-material/Apps";
import { useMemo } from "react";
import RoutePaths from "../constants/route-paths";
import { useNavigate } from "react-router-dom";

const MENU_ITEMS = [
	{
		text: "Overview",
		Icon: AppsIcon,
		route: RoutePaths.WORKSPACES,
	},
	{
		text: "Tasks",
		Icon: AssignmentIcon,
		route: RoutePaths.TASKS,
	},
	{
		text: "Settings",
		Icon: SettingsIcon,
		route: RoutePaths.TEST,
	},
];

function SideBarItems() {
	const navigate = useNavigate();
	const items = useMemo(
		() =>
			MENU_ITEMS.map((item) => (
				<ListItem key={item.text} disablePadding>
					<ListItemButton
						onClick={() => {
							navigate(item.route);
						}}
					>
						<ListItemIcon>
							<item.Icon />
						</ListItemIcon>
						<ListItemText primary={item.text} />
					</ListItemButton>
				</ListItem>
			)),
		[MENU_ITEMS]
	);

	return <List>{items}</List>;
}

export default SideBarItems;
