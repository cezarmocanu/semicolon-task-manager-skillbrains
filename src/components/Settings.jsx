import React from 'react'
import { Drawer, Button, Typography, Stack, Avatar, Box, Grid, OutlinedInput } from "@mui/material";
import Theme from '../theme'
import ContainedImage from './ContainedImage';


export default function Settings() {
  return (
    <>
    <Stack sx={{ width: '45%', padding: 4, backgroundColor: Theme.palette.info.light4}}>
            <Typography sx={{fontSize: '1.5rem'}} variant="h6" component="h3">
					Settings
			</Typography>
            <Typography sx={{fontSize: '0.8rem', marginTop: '2rem'}} variant="h6" component="h6">
					Account Settings
			</Typography>
            <Stack sx={{display: 'flex', padding: 4, marginTop: '1rem', borderRadius: '12px', backgroundColor: '#FFFFFF'}}>
                
                <Box sx={{border: 2, padding: 1, borderColor: 'grey.500', borderRadius: '12px', display: 'flex', flexDirection: 'row'}}>
                    <Stack direction="row" sx={{flexDirection: 'flex', marginTop: '1rem'}}>
					<ContainedImage src={"/profile.svg"} sx={{ width: 50, height: 20 }} />
				    </Stack>
                        <Stack>
                        <Typography sx={{fontSize: '0.8rem', color: '#545454'}}>
					        Account Settings
			            </Typography>
                            <Box >
                            <input placeholder='John Doe'/>
                            </Box>
                        </Stack>
                </Box>
                <Box sx={{border: 2, padding: 1, borderColor: 'grey.500', borderRadius: '12px', display: 'flex', flexDirection: 'row', marginTop: '1.5rem'}}>
                    <Stack direction="row" sx={{flexDirection: 'flex', marginTop: '1rem'}}>
					<ContainedImage src={"/message.svg"} sx={{ width: 50, height: 20 }} />
				    </Stack>
                        <Stack>
                        <Typography sx={{fontSize: '0.8rem', color: '#545454'}}>
					        Email Address
			            </Typography>
                            <Box >
                            <input placeholder='johndoe@gmail.com'/>
                            </Box>
                        </Stack>
                </Box>

            </Stack>
            <Stack direction="row" sx={{display: 'flex', justifyContent: 'flex-end', marginTop: '2rem'}}>
                <Button size="medium" variant="contained" >
                    Change password
                </Button>
            </Stack>
    </Stack>
    </>

  )
}
