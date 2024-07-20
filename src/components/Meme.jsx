

import { Card, styled } from '@mui/material';
import dmeme from '../defaultmeme.gif'

const StyledCard = styled(Card)({
    '&:hover': {
        transform: 'scale(1.5)',
        borderRadius: 0,
        height: 200
    }
})

const Meme = ({ meme }) => {
    return (
        <StyledCard>
            {console.log(meme.data.url)}
            <img src={meme.data?meme.data.url:dmeme} alt="meme" style={{ height: 200 }} />
        </StyledCard>
    )
}

export default Meme;