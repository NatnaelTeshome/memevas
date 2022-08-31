import { Grid, TextField } from "@mui/material"

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

const twoTextField = {
    display : "flex",
    alignItems : "center",
    justifyContent : "center",
    width : "53%",
}



const Signup = () => {
    return (
        <Grid container sx = {gridContainer}>
            <Grid item xl={6} sx={gridItem}>
                <TextField sx={textField} label="Username" variant="standard" InputLabelProps={tag} inputProps={tag}/>
                <TextField sx={textField} label="Email" variant="standard" InputLabelProps={tag} inputProps={tag}/>
                <TextField sx={textField} label="Password" variant="standard" InputLabelProps={tag} inputProps={tag}/>
                <TextField sx={textField} label="Confirm Password" variant="standard" InputLabelProps={tag} inputProps={tag}/>
                <div style={twoTextField}>
                    <TextField sx={{...textField, width : "50%"}} label="FName" variant="standard" InputLabelProps={tag} inputProps={tag}/>
                    <TextField sx={{...textField, width : "50%"}} label="LName" variant="standard" InputLabelProps={tag} inputProps={tag}/>
                </div>
                <TextField sx={textField} label="Class of" variant="standard" InputLabelProps={tag} inputProps={tag}/>
                <EnhancedButton>Sign up</EnhancedButton>
            </Grid> 
        </Grid>
    );

}

export default Signup