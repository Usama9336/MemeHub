import { AppBar, Toolbar, InputBase, Typography, Box } from '@mui/material';
import logo from '../reddit-1-logo-png-transparent.png';
import SearchIcon from '@mui/icons-material/Search';

const Header = () => {
    return (
        <AppBar color="primary" position='static'>
            <Toolbar style={{ display: 'flex', justifyContent: 'space-between' }}>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <img src={logo} alt="logo" style={{ width: 150, height: 50 }} />
                    <Typography variant="h6" style={{ marginLeft: 20 }}>
                        MemeHub
                    </Typography>
                </Box>
                <Box style={{ display: 'flex', alignItems: 'center' }}>
                    <SearchIcon />
                    <InputBase
                        placeholder="Search…"
                        inputProps={{ 'aria-label': 'search' }}
                        style={{ marginLeft: 10, backgroundColor: 'white', padding: '5px 10px', borderRadius: 5 }}
                    />
                </Box>
            </Toolbar>
        </AppBar>
    );
}

export default Header;
