import {ListItem, ListItemButton, ListItemIcon, ListItemText, Typography} from "@mui/material"
import {RemoveCircleOutline, Add} from "@mui/icons-material"


const listItemTextButton = {
    backgroundColor : "#FFB6B6",
    width : "30vw",
    padding : "10px",
    borderRadius : "10px",
}

const listItemText = {
    fontSize : "30px"
}

const listItemIcon = {
    fontSize : "50px",
    color : "red"
}

const ListItemClass = (props) => {
    const iconType = props.isAdded ? <RemoveCircleOutline sx={listItemIcon}/> : <Add sx={listItemIcon}/>
    if (props.isAdded) 
        {listItemIcon.color = "red"}
    else {
        listItemIcon.color = "green"
    }
    return ( 
        <ListItem>
            <ListItemButton sx={listItemTextButton} >
                <ListItemText primary={<Typography sx={listItemText} > {props.text} </Typography>}/>
            </ListItemButton>
            <ListItemButton>
                <ListItemIcon>
                    {iconType}
                </ListItemIcon>
            </ListItemButton>
        </ListItem>
     );
}

export default ListItemClass;