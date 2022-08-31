import {IconButton, FormControl, InputLabel, Select, MenuItem, Tooltip, Typography} from "@mui/material"
import {AddPhotoAlternate} from "@mui/icons-material"

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import EnhancedContainer from "../../components/EnhancedContainer";
import MemeCard from "../../components/MemeCard";

const addPicture = {
    color : "green",
    fontSize : "50px"
}

const toolTip = {
    fontSize : "20px"
}

const sort = {
    backgroundColor : "#D4F7FF",
    width : "10vw",
}

const select = {
    fontSize : "20px"
}

const Class = () => {
    return ( 
        <Layout color="#E4EC8A">
            <EnhancedContainer>
                <SearchBar/>
                <Tooltip title={<Typography sx={toolTip}>Add a meme</Typography>}>
                    <IconButton>
                        <AddPhotoAlternate sx={addPicture}/>
                    </IconButton>
                </Tooltip>
                <FormControl sx={sort}>
                    <InputLabel sx={select}>Sort by</InputLabel>
                    <Select
                    sx = {select}
                    label="sort by"
                    >
                        <MenuItem>Date</MenuItem>
                        <MenuItem>Likes</MenuItem>
                    </Select>
                </FormControl>
                <MemeCard isOwner={true} name="firstmemer" post="first Meme" likesCount={6}/>
            </EnhancedContainer>            
        </Layout>
     );
}

export default Class;