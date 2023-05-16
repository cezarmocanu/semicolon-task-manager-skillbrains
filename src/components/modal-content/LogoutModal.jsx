import React from "react";
import { useDispatch } from "react-redux";
import { logout } from "../../store/slices/authentication-slice";
import { useNavigate } from "react-router-dom";

import {
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from "@mui/material";
import authService from "../../services/auth-service";
import { closeModal } from "../../store/slices/modal-slice";
import RoutePaths from "../../constants/route-paths";

function LogoutModal() {
	const dispatch = useDispatch();
	const navigate = useNavigate();

	const handleLogoutClick = () => {
		authService.logout().then((_) => {
			dispatch(logout());
			dispatch(closeModal());
			navigate(RoutePaths.LOGIN);
		});
	};

	return (
		<>
			<DialogTitle>Are you sure you want to logout?</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Let Google help apps determine location. This means sending anonymous
					location data to Google, even when no apps are running.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button
					variant="contained"
					color="primary"
					onClick={() => dispatch(closeModal())}
				>
					Cancel
				</Button>
				<Button
					variant="contained"
					color="secondary"
					onClick={handleLogoutClick}
				>
					Logout
				</Button>
			</DialogActions>
		</>
	);
}

export default LogoutModal;
