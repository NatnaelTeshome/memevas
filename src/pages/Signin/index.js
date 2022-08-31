import { Grid, Link, TextField } from "@mui/material"

import EnhancedButton from "../../components/EnhancedButton"

const gridItem = {
    height : "100vh",
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
}

const gridContainer = {
    width : "100vw",
    height : "100vh",
    background: "#FFB6B6"
}

const tag = {
    color : "error",
    sx : {
        fontSize : "25px",
        mx : "20px"
    }
}

const textField = {
    margin : "15px",
    width : "50%",
    backgroundColor : "#D4F7FF",
} 

const Signin = () => {
    return (
        <Grid container sx = {gridContainer}>
            <Grid item xl={6} sx={gridItem}>
                <TextField sx={textField} label="Username" variant="standard" InputLabelProps={tag} inputProps={tag}/>
                <TextField sx={textField} label="Password" variant="standard" InputLabelProps={tag} inputProps={tag}/>
                <EnhancedButton>Sign in</EnhancedButton>
                <Link component="button" variant="body1"> Forgot your password? </Link>
            </Grid> 
            
        </Grid>
    );

}

export default Signin