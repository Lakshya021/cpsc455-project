import { Button, Grid, Paper } from "@mui/material";
import TopNavigation from "../components/TopNavigation";
import { Box } from "@mui/system";
import {ListItemIcon} from "@mui/material";
import BioDescription from "../components/BioDecription";
import ChangeName from "../components/ChangeName";
import LogOut from "../components/LogOut";
import ChangePW from "../components/ChangePW";
import PrivacyOP from "../components/PrivacyOP";
import ImageUpload from "../components/ImageUpload";
import Navigation from "../components/Navigation";




const SettingPage = () => {

    return(        
        <div className="bg-[#FAFAFA] ">
            <TopNavigation />
           
           <Box p={5} >
           <Paper >
            <Box p={5} sx={{ display: 'grid',columnGap: 3, gridTemplateRows: 'repeat(3, 1fr)' }}> 
    somthing here
                </Box>                
            </Paper>
            <br></br>
            <Paper>
            <Box p={5}>
                
                <div>Sign Out</div>
                <LogOut/>
                </Box>
            </Paper>
            <br></br>
            <Paper >
            <Box p={5}>
                <div>Change Profile Picture</div>
                <ImageUpload/>
                </Box>

            </Paper>
            <br></br>
            <Paper >
            <Box p={5}>
            <div>Bio Description</div>
                <BioDescription/>
                </Box>
               
            </Paper>
            <br></br>
            <Paper>
            <Box p={5}>
            <div>Change Username</div>
                <ChangeName/>
                </Box>
            </Paper>          

            <br></br>
            <Paper >
            <Box p={5}>
                <div>Security</div>                
                <ChangePW/>
                </Box>

            </Paper>
            

            <br></br>                


           </Box> 
        </div>
        
        
        
    )

}

export default SettingPage;