import {List} from "@mui/material"

import Layout from "../../components/Layout";
import SearchBar from "../../components/SearchBar";
import EnhancedContainer from "../../components/EnhancedContainer";
import ListItemClass from "../../components/ListItemClass";

const Home = () => {
    return ( 
        <Layout color="#E4EC8A">
            <EnhancedContainer>
                <SearchBar/>
                <List>
                    <ListItemClass text="CS50" isAdded={true}/>
                    <ListItemClass text="CS51" isAdded={false}/>
                </List>
            </EnhancedContainer>
        </Layout>
     );
}

export default Home;