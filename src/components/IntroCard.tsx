import Card from '@mui/material/Card';
import Box from '@mui/material/Box';
import CardContent from '@mui/material/CardContent';
import Typography from '@mui/material/Typography';
import { Link } from '@mui/material';

export default function IntroCard() {
  return (
    <Box sx={{ m: 2 }}>
      <Card>
        <CardContent>
          <Typography variant="h5" mb={2}>
            This is a React app demo showcasing the capabilities of ReactJS.
          </Typography>
          <Typography color="text.secondary">
            This app uses the following tools:
          </Typography>
            <ul>
              <li>
                <Link href="https://vitejs.dev" target="_blank">
                  Vite
                </Link>
              </li>
              <li>
                <Link href="https://reactjs.org" target="_blank">
                  React
                </Link>
              </li>
              <li>
                <Link href="https://reactrouter.com" target="_blank">
                  React Router
                </Link>
              </li>
              <li>
                <Link href="https://www.typescriptlang.org/" target="_blank">
                  TypeScript
                </Link>
              </li>
              <li>
                <Link href="https://mui.com" target="_blank">
                  Material UI (MUI)
                </Link>
              </li>
              <li>
                <Link href="https://www.weatherapi.com/" target="_blank">
                  Weather API
                </Link>
              </li>
            </ul>
        </CardContent>
      </Card>
    </Box>
  );
}
