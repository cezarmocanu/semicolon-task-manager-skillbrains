import * as React from "react";
import { useState } from "react";
import { useTheme } from "@mui/material/styles";
import { Stack, InputAdornment, IconButton } from "@mui/material";
import VisibilityOutlinedIcon from "@mui/icons-material/VisibilityOutlined";
import VisibilityOffOutlinedIcon from "@mui/icons-material/VisibilityOffOutlined";
import FormLabel from "../input/FormLabel";
import TextField from "../input/TextField";

function PasswordInput() {
	const [showPassword, setShowPassword] = useState(false);
	const handleClickShowPassword = () => setShowPassword((show) => !show);

	return (
		<Stack alignItems="center">
			<Stack gap={1}>
				<FormLabel>Password</FormLabel>
				<TextField
					type={showPassword ? "text" : "password"}
					InputProps={{
						endAdornment: (
							<InputAdornment>
								<IconButton
									aria-label="toggle password visibility"
									onClick={handleClickShowPassword}
									edge="end"
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
