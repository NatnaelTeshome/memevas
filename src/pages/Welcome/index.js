import { Grid, Button, Typography } from "@mui/material"
import { styled } from "@mui/system"
import { Facebook, Instagram, Twitter } from "@mui/icons-material";
import { keyframes} from "@emotion/react"

// styling using sxProps
const gridItem = {
    display : "flex",
    flexDirection : "column",
    justifyContent : "center",
    alignItems : "center",
    height : "50vh",
}
  
const gridContainer = {
    width : "100vw",
    height : "100vh",
    background: "linear-gradient(90deg, #E4EC8A 50%, #FFB6B6 50%)"
}

const icons = {
    fontSize : {
    xl : "60px",
    lg : "50px",
    md : "30px" 
    },
    margin : "10px",
    '&:hover' : {
        color : "black"
    }
}

const imgStyle = {
    maxHeight : "50vh",
    marginTop : "100px"
}

// emotion keyframes
const colorChange = keyframes`
    0% {
        color : red;
    }
    50% {
        color : yellow;
    }
    100% {
        color : green;
    }
`;

// styling for sx cont. to avoid error of a variable being used before defined
const slogan = {
    mt : "100px",
    animation : `${colorChange} 3s infinite linear`
}


// styling using container styled
const EnhancedButton = styled(Button)({
    backgroundColor : "#D4F7FF",
    color : "black",
    width : "20vw",
    fontSize : "30px",
    fontWeight : "bold",
    margin : "10px",
    textTransform : "none",
    borderRadius : "20px" 
})

const Welcome = () => {

    return ( 
        <Grid container sx = {{...gridContainer}} >
            <Grid item xl={6} sx = {{...gridItem}}>
                <img src = "mvlogo.png" alt = "memevas logo" style = {imgStyle}/>
            </Grid>
            <Grid item xl={6} sx = {{...gridItem}}>
                <EnhancedButton>
                    Sign in
                </EnhancedButton>
                <EnhancedButton>
                    Sign up
                </EnhancedButton>
            </Grid>
            <Grid item xl={12} sx = {{...gridItem, fontSize : "50px", justifyContent : "flex-start"}}>
                <Typography variant = "h2" sx = {slogan}> 
                    Easing School Stress with Memes!
                </Typography>
                <div>
                    <Facebook color = "primary" sx = {icons}/>
                    <Instagram sx = {{...icons, color : "#FB3958"}}/>
                    <Twitter sx = {{...icons, color : "#00ACEE"}}/>
                </div>
            </Grid>
        </Grid>
    );
}
 
export default Welcome;