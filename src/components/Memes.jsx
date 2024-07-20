import { useEffect, useState } from "react";
import { getMemes } from "../services/api";
import { Grid, Card, CardMedia, CardContent, Typography } from "@mui/material";

const Memes = () => {
    const [memes, setMemes] = useState([]);

    useEffect(() => {
        const getData = async () => {
            let response = await getMemes();
            setMemes(response.data.children);
        };
        getData();
    }, []);

    return (
        <Grid container spacing={3} padding={3}>
            {memes.map(meme => (
                <Grid item xs={12} sm={6} md={4} lg={3} key={meme.data.id}>
                    <Card>
                        <CardMedia
                            component="img"
                            alt={meme.data.title}
                            image={meme.data.url}
                            style={{ objectFit: 'contain', height: '200px' }} // Adjust the style
                        />
                        <CardContent>
                            <Typography variant="h6">{meme.data.title}</Typography>
                            <Typography variant="body2" color="textSecondary">
                                {meme.data.subreddit_name_prefixed}
                            </Typography>
                        </CardContent>
                    </Card>
                </Grid>
            ))}
        </Grid>
    );
};

export default Memes;
