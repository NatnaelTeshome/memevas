import {ListItem, ListItemButton, ListItemIcon, ListItemText, Typography, Avatar} from "@mui/material"

const listItemText = {
    fontSize : "30px",
    pl : "10px",
}

const listItemTextButton = {
    bgcolor : "#FFB6B6",
    width : "30vw",
    padding : "10px",
    borderRadius : "10px",
}

const listItemAvatar = {
    fontSize : "50px",
    bgcolor : "green",
    borderRadius : "50%",
    padding : "20px",
    mr : "10px",
}

const ListItemLeader = (props) => {
    if (props.rank == 1) {
        listItemAvatar.bgcolor = "green"
    }
    else if (props.rank == 2) {
        listItemAvatar.bgcolor = "yellow"
    }
    else {
        listItemAvatar.bgcolor = "red"
    }
    return ( 
        <ListItem>
                <Avatar sx={listItemAvatar}>{props.rank}</Avatar>
                <ListItemButton sx={listItemTextButton}>
                    <ListItemText primary={<Typography sx={listItemText} > {props.name} </Typography>}/>
                </ListItemButton>
        </ListItem>
     );
}

export default ListItemLeader;