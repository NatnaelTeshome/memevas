import Layout from '../../components/Layout'
import EnhancedContainer from '../../components/EnhancedContainer'
import { Typography, List } from '@mui/material';
import ListItemLeader from '../../components/ListItemLeader';

const leaderTitle = {
    backgroundColor : "#D4F7FF",
    fontWeight : "bold",
    fontSize : "30px",
    padding : "15px",
    mb : "30px"
}

const Leaderboard = () => {
    return (
        <Layout color="#E4EC8A">
            <EnhancedContainer>
                <Typography sx={leaderTitle}> Leaderboard </Typography>
                <List>
                    <ListItemLeader rank={1} name="firstmemer"/>
                    <ListItemLeader rank={2} name="secondmemer"/>
                    <ListItemLeader rank={3} name="thirdmemer"/>
                </List>
            </EnhancedContainer>
        </Layout>
    );
}

export default Leaderboard ;