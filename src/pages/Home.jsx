import Header from "../components/Header";
import Memes from "../components/Memes";
import Sidebar from "../components/Sidebar";
import { Box } from '@mui/material';

const Home = () => {
    return (
        <Box display="flex">
            <Sidebar />
            <Box flexGrow={1} marginLeft={30}> {/* Adjust the margin to prevent overlap */}
                <Header />
                <Memes />
            </Box>
        </Box>
    )
}

export default Home;
