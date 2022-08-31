import {AppBar, Toolbar, IconButton, Tooltip, Typography} from "@mui/material"
import { Home, Logout, AccountBox } from "@mui/icons-material"

const navBar = {
    color : "black", 
    height : "10vh"
}

const box = {
    display : "flex",
    justifyContent : "space-between",
    mx : "150px"
}

const rightBar = {
    display : "flex",
    justifyContent : "space-around",
    width : "15vw"
}

const icons = {
    fontSize : "60px"
}

const toolTip = {
    fontSize : "20px"
}

const Layout = (props) => {
    return (
        <> 
            <AppBar position="static" sx={{...navBar, backgroundColor : `${props.color}`}}>
                <Toolbar sx={box}>
                    <Tooltip title={<Typography sx={toolTip}> Home </Typography>}>
                        <IconButton>
                            <Home sx={{...icons, color : "green"}}/>
                        </IconButton>
                    </Tooltip>
                    <div style={rightBar}>
                        <Tooltip title={<span style={toolTip}> Profile </span>}>                    
                            <IconButton>
                                <AccountBox sx={{...icons, color : "blue"}}/>
                            </IconButton>
                        </Tooltip>
                        <Tooltip title={<span style={toolTip}> Logout </span>}>
                            <IconButton>
                                <Logout sx={{...icons, color : "red"}}/>
                            </IconButton>
                        </Tooltip>
                    </div>
                </Toolbar>
            </AppBar>
            {props.children}
        </>
     );
}

export default Layout;