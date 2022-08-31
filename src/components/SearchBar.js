import { Search } from "@mui/icons-material";
import { IconButton } from "@mui/material";

const searchInput = {
    width : "40vw",
    padding : "20px",
    fontSize : "25px",
    fontFamily : "Chilanka",
    backgroundColor : "#D4F7FF"
}

const searchIcon = {
    fontSize : "50px",
    color : "#FFB6B6"
}

const SearchBar = () => {
    return ( 
        <form>
            <input style={searchInput} type="text" placeholder="Search by class name..."/>
            <IconButton type="submit"> 
                <Search sx={searchIcon} />
            </IconButton>
        </form>
     );
}

export default SearchBar;