import Card from '@mui/material/Card';
import CardContent from '@mui/material/CardContent';
import CardHeader from '@mui/material/CardHeader';
import Avatar from '@mui/material/Avatar';
import Grid from '@mui/material/Unstable_Grid2';
import Stack from '@mui/material/Stack';
import IconButton from '@mui/material/IconButton';
import MoreVertIcon from '@mui/icons-material/MoreVert';
import Typography from '@mui/material/Typography';
import { useEffect, useState } from 'react';
import { Box } from '@mui/material';
import Menu from '@mui/material/Menu';
import MenuItem from '@mui/material/MenuItem';
interface WeatherCardProps {
  city: string;
}

const locations = [
  'San Jose, Costa Rica',
  'Buenos Aires, Argentina',
  'Mexico City, Mexico',
  'Bogota, Colombia',
  'Lima, Peru',
  'Sao Paulo, Brazil',
  'Madrid, Spain',
  'Paris, France',
  'Auto detection',
]
const WeatherCard = ({ city }: WeatherCardProps) => {

  const [location, setLocation] = useState(city ? city : 'auto:ip');
  const [data, setData] = useState({} as any);
  const [anchorEl, setAnchorEl] = useState<null | HTMLElement>(null);

  const handleMenuOpen = (event: React.MouseEvent<HTMLButtonElement>) => {
    setAnchorEl(event.currentTarget);
  };

  const handleMenuClose = () => {
    setAnchorEl(null);
  };

  useEffect(() => {
    const fetchWeatherData = async () => {

      const url = `http://api.weatherapi.com/v1/current.json?key=${import.meta.env.VITE_WEATHER_API_KEY}&q=${location}&aqi=no`;
      const response = await fetch(url);
      const data = await response.json();
      console.log(data)
      setData(data);

    }

    fetchWeatherData()
      .catch(console.error);
  }, [location])

  return (
    <Card>
      <Menu
        anchorEl={anchorEl}
        open={Boolean(anchorEl)}
        onClose={handleMenuClose}
      >
        {locations.map((location) => (
          <MenuItem key={location} onClick={() => {
            setLocation(location === 'Auto detection' ? 'auto:ip' : location)
            handleMenuClose()
          }}>
            {location}
          </MenuItem>
        ))}
      </Menu>
      <CardHeader
        avatar={
            <Avatar
              alt={ data?.current && data?.current?.condition?.text }
              aria-label="condition"
              src={ data?.current && data?.current?.condition?.icon }
              sx={{ width: 64, height: 64 }}
            />
        }
        action={
          <IconButton aria-label="settings" onClick={handleMenuOpen}>
            <MoreVertIcon />
          </IconButton>
        }
        title={
          <Typography variant="h5">
            {data?.location && data?.location?.name}, {data?.location && data?.location?.country}
          </Typography>
         }
      />
      <CardContent>
        <Grid container spacing={2}>
          <Grid xs={12} md={6}>
            <Typography variant="h6" color="text.secondary">
              {data?.current && data?.current?.condition?.text}
            </Typography>
            <Typography variant="h3" display="inline" color="text.secondary">
              {data?.current && data?.current?.temp_c}
            </Typography>
            <Typography variant="h6" display="inline" sx={{ verticalAlign: 'top' }} color="text.secondary" > °C</Typography>
          </Grid>
          <Grid xs={12} md={6} display={'flex'} justifyContent="flex-end">
            <Stack direction="column" spacing={1}>
              <Box >
                <Typography variant="body2" fontWeight={'bold'} display="inline" color="text.secondary" mr={1}>
                  Wind:
                </Typography>
                <Typography variant="body2" display="inline" color="text.secondary">
                  {data?.current && data?.current?.wind_kph} Km/h
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={'bold'} display="inline" color="text.secondary" mr={1}>
                  Humidity:
                </Typography>
                <Typography variant="body2" display="inline" color="text.secondary">
                  {data?.current && data?.current?.humidity}%
                </Typography>
              </Box>
              <Box>
                <Typography variant="body2" fontWeight={'bold'} display="inline" color="text.secondary" mr={1}>
                  Pressure:
                </Typography>
                <Typography variant="body2" display="inline" color="text.secondary">
                  {data?.current && data?.current?.pressure_mb} mb
                </Typography>
              </Box>
            </Stack>
          </Grid>
        </Grid>
      </CardContent>
    </Card>
  );
};

export default WeatherCard;
