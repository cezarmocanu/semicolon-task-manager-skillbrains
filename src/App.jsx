import { useEffect } from "react";
import { Routes, Route, BrowserRouter, useNavigate } from "react-router-dom";
import Test from "./pages/TestPage";
import TasksPage from "./pages/TasksPage";
import SignUpPage from "./pages/SignUpPage";
import ForgotPasswordPage from "./pages/ForgotPasswordPage";
import ChangePasswordPage from "./pages/ChangePasswordPage";
import LoginPage from "./pages/LoginPage";
import WorkspacePage from "./pages/WorkspacePage";
import PrivatePage from "./pages/PrivatePage";
import WorkspacesCardsPage from "./pages/WorkspacesCardsPage";
import SettingsPage from "./pages/SettingsPage";
import { initializeAuth, logout } from "./store/slices/authentication-slice";
import { useDispatch, useSelector } from "react-redux";
import { selectModal, closeModal } from "./store/slices/modal-slice";
import RoutePaths from "./constants/route-paths";
import { Dialog } from "@mui/material";
import ModalTypes from "./constants/modal-types";
import TestContent1 from "./components/modal-content/TestContent1";
import TestContent2 from "./components/modal-content/TestContent2";
import CreateTask from "./components/modal-content/CreateTask";
import LogoutModal from "./components/modal-content/LogoutModal";
import DeleteTaskModalContent from "./components/modal-content/DeleteTaskModalContent";
import TaskDetailsPage from "./pages/TaskDetailsPage";
import FadeIn from "./utils/FadeIn";
import ProtectedRoute from "./utils/ProtectedRoute";
import EditTask from "./components/modal-content/EditTask";

function App() {
	const dispatch = useDispatch();
	const modalState = useSelector(selectModal);

	useEffect(() => {
		dispatch(initializeAuth());
	}, []);

	return (
		<>
			<BrowserRouter>
				<Routes>
					<Route
						path={RoutePaths.LOGIN}
						element={
							<FadeIn>
								<LoginPage />
							</FadeIn>
						}
					/>
					<Route
						path={RoutePaths.SIGNUP}
						element={
							<FadeIn>
								<SignUpPage />
							</FadeIn>
						}
					/>
					<Route
						path={RoutePaths.FORGOT_PASSWORD}
						element={
							<FadeIn>
								<ForgotPasswordPage />
							</FadeIn>
						}
					/>
					<Route
						path={RoutePaths.CHANGE_PASSWORD}
						element={
							<FadeIn>
								<ChangePasswordPage />
							</FadeIn>
						}
					/>

					<Route
						path={RoutePaths.PRIVATE}
						element={
							<ProtectedRoute>
								<PrivatePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path={RoutePaths.TEST}
						element={
							<ProtectedRoute>
								<Test />
							</ProtectedRoute>
						}
					/>
					<Route
						path={RoutePaths.WORKSPACE}
						element={
							<ProtectedRoute>
								<WorkspacePage />
							</ProtectedRoute>
						}
					/>
					<Route
						path={RoutePaths.TASKS}
						element={
							<ProtectedRoute>
								<TasksPage />
							</ProtectedRoute>
						}
					/>
					<Route
						exact
						path={RoutePaths.ROOT}
						element={
							<ProtectedRoute>
								<TasksPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path={RoutePaths.WORKSPACES}
						element={
							<ProtectedRoute>
								<WorkspacesCardsPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path={RoutePaths.SETTINGS}
						element={
							<ProtectedRoute>
								<SettingsPage />
							</ProtectedRoute>
						}
					/>
					<Route
						path={RoutePaths.TASK_DETAILS}
						element={
							<ProtectedRoute>
								<TaskDetailsPage />
							</ProtectedRoute>
						}
					/>
				</Routes>

				<Dialog
					open={Boolean(modalState)}
					onClose={() => dispatch(closeModal())}
				>
					{modalState === ModalTypes.TEST && <TestContent1 />}
					{modalState === ModalTypes.TEST2 && <TestContent2 />}
					{modalState === ModalTypes.CREATE_TASK && <CreateTask />}
					{modalState === ModalTypes.LOGOUT && <LogoutModal />}
					{modalState === ModalTypes.DELETE_TASK && <DeleteTaskModalContent />}
					{modalState === ModalTypes.EDIT_TASK && <EditTask />}
				</Dialog>
			</BrowserRouter>
		</>
	);
}

export default App;
