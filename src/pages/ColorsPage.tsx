import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import ColorCard from '../components/ColorCard.tsx'
const ColorsPage = () => {
  return (
    <Box flexGrow={1}>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <ColorCard color="red" />
        </Grid>
        <Grid xs={12} md={4}>
          <ColorCard color="blue" />
        </Grid>
        <Grid xs={12} md={4}>
          <ColorCard color="green" />
        </Grid>
      </Grid>
    </Box>  )
}

export default ColorsPage
