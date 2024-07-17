import Grid from '@mui/material/Unstable_Grid2';
import { Box } from '@mui/material';
import WeatherCard from '../components/WeatherCard';
const WeatherPage = () => {
  return (
    <Box flexGrow={1}>
      <Grid container spacing={2}>
        <Grid xs={12} md={4}>
          <WeatherCard city="San Jose, Costa Rica" />
        </Grid>
        <Grid xs={12} md={4}>
          <WeatherCard city="Bogota, Colombia" />
        </Grid>
        <Grid xs={12} md={4}>
          <WeatherCard city="auto:ip" />
        </Grid>
      </Grid>
    </Box>  )
}

export default WeatherPage
