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

const MENU_ITEMS = [
	{
		text: "Overview",
		Icon: AppsIcon,
	},
	{
		text: "Tasks",
		Icon: AssignmentIcon,
	},
	{
		text: "Settings",
		Icon: SettingsIcon,
	},
];

function SideBarItems() {
	const items = useMemo(
		() =>
			MENU_ITEMS.map((item) => (
				<ListItem key={item.text} disablePadding>
					<ListItemButton>
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
