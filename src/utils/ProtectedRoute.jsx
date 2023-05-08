import { CircularProgress, Stack, Typography } from "@mui/material";
import { useSelector } from "react-redux";
import { Navigate } from "react-router-dom";
import { selectAuthentication } from "../store/slices/authentication-slice";
import Layout from "../components/Layout";
import FadeIn from "./FadeIn";

function ProtectedRoute({ children }) {
	const authentication = useSelector(selectAuthentication);

	if (!authentication.isAuthenticationInitialized) {
		return (
			<FadeIn>
				<Stack
					sx={{ width: "100%", height: "100vh" }}
					alignItems={"center"}
					justifyContent={"center"}
					gap={2}
				>
					<CircularProgress />
					<Typography>Loading</Typography>
				</Stack>
			</FadeIn>
		);
	}

	if (!authentication.isAuthenticated) {
		return <Navigate to="/login" />;
	}

	return (
		<FadeIn>
			<Layout>{children}</Layout>
		</FadeIn>
	);
}

export default ProtectedRoute;
