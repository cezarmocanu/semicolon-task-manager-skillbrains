import React from "react";
import { useDispatch } from "react-redux";
import { closeModal } from "../../store/slices/modal-slice";
import {
	DialogTitle,
	DialogContent,
	DialogContentText,
	DialogActions,
	Button,
} from "@mui/material";

function LogoutModal() {
	const dispatch = useDispatch();

	return (
		<>
			<DialogTitle>Test Content 1</DialogTitle>
			<DialogContent>
				<DialogContentText>
					Let Google help apps determine location. This means sending anonymous
					location data to Google, even when no apps are running.
				</DialogContentText>
			</DialogContent>
			<DialogActions>
				<Button onClick={() => dispatch(closeModal())}>Disagree</Button>
			</DialogActions>
		</>
	);
}

export default LogoutModal;
