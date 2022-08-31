import { Card, CardHeader, CardMedia, CardContent, CardActions, Avatar, IconButton, Typography, Container } from "@mui/material";
import { Delete } from "@mui/icons-material"

const imageCard = {
    margin : "15px",
    bgcolor : "#FFB6B6"
}

const image = {
    height : "40vh",
    width : "30vw"
}

const actions = {
    display : "flex",
    justifyContent : "space-around",
    alignItems : "center"
}

const fonts = {
    fontSize : "20px"  
}

const icon = {
    fontSize : "40px"
}

const laughContainer = {
    display : "flex",
    alignItems : "center",
    padding : "0px",
    margin : "0px"
}


const MemeCard = (props) => {

    const deleteIcon = props.isOwner ? (<IconButton> <Delete sx={{...icon, color : "red"}}/> </IconButton>) : null
    return (
        <Card sx={imageCard}>
            <CardHeader
                avatar={
                <Avatar>
                    PP
                </Avatar>
                }
                title={<Typography sx={fonts}> {props.name} </Typography>}
                subheader="September 14, 2016"
            />
            <CardMedia
                sx={image}
                component="img"
                image="/static/images/cards/paella.jpg"
                alt="Paella dish"
            />
            <CardContent>
                <Typography sx={fonts}>
                    {props.post}
                </Typography>
            </CardContent>
            <CardActions sx={actions}>
                <Container sx={laughContainer}>
                    jlikfasjdsfsa
                    <Typography sx={fonts}> {props.likesCount} </Typography>
                </Container>
                {deleteIcon}
            </CardActions>
        </Card>
    );
}

export default MemeCard;