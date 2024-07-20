import { Drawer, List, ListItem, ListItemText, Typography } from '@mui/material';

const Sidebar = () => {
    const categories = ["Funny", "Animals", "Gaming", "Movies", "Sports", "News"];

    return (
        <Drawer
            variant="permanent"
            anchor="left"
            PaperProps={{ style: { width: 220, backgroundColor: '#f5f5f5', padding: '10px' } }} // Add background color and padding
        >
            <Typography 
                variant="h6" 
                style={{ 
                    margin: '16px 8px', 
                    backgroundColor: 'orange',  // Background color for the heading
                    padding: '8px 16px', 
                    borderRadius: '4px',
                    display:'flex',
                    alignContent:'center',
                    justifyContent:'center',
                    justifyItems:'center'
                }}
            >
                Categories
            </Typography>
            <List>
                {categories.map((category, index) => (
                    <ListItem 
                        button 
                        key={index} 
                        style={{ margin: '5px 0', borderRadius: '5px', transition: 'background-color 0.3s' }}
                        onMouseEnter={(e) => e.currentTarget.style.backgroundColor = '#e0e0e0'}
                        onMouseLeave={(e) => e.currentTarget.style.backgroundColor = 'transparent'}
                    >
                        <ListItemText primary={category} />
                    </ListItem>
                ))}
            </List>
        </Drawer>
    )
}

export default Sidebar;
