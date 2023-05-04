import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Stack, InputAdornment, IconButton } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
<<<<<<< HEAD:src/components/shared/PasswordInput/PasswordInput.jsx
import TextField from "../../shared/input/TextField";
=======
import FormLabel from "../input/FormLabel";
import TextField from "../input/TextField";
>>>>>>> main:src/components/shared/password-input/PasswordInput.jsx

function PasswordInput() {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	return (
		<Stack alignItems="left">
			<Stack gap={1}>
				<TextField
					type={showPassword ? "text" : "password"}
					InputProps={{
						endAdornment: (
							<InputAdornment position="end">
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
								>
									{showPassword ? (
										<VisibilityOffOutlinedIcon />
									) : (
										<VisibilityOutlinedIcon />
									)}
								</IconButton>
							</InputAdornment>
						),
					}}
					variant="outlined"
					size="medium"
				/>
			</Stack>
		</Stack>
	);
}

export default PasswordInput;