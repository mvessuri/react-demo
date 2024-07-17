import Card from '@mui/material/Card';
import Button from '@mui/material/Button';
import CardActions from '@mui/material/CardActions';
import CardContent from '@mui/material/CardContent';
import { Typography, Box } from '@mui/material';
import { useState } from 'react';

function ColorCard({ color }: { color: string }) {

  const [count, setCount] = useState(0)

  return (
    <Card style={{ backgroundColor: color }}>
      <Box display={"flex"} flexDirection="column" alignItems="center">
        <CardContent>
          <Typography gutterBottom variant="h5" align="center" color="white">
            Count: {count}
          </Typography>
        </CardContent>
        <CardActions>
          <Button size="small" variant="contained" color="inherit" onClick={() => setCount((count) => count + 1)}>{color}</Button>
        </CardActions>
      </Box>
    </Card>
  );
}

export default ColorCard;
