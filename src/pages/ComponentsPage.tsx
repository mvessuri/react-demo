import {
  Typography,
  Button,
  ButtonGroup,
  Card,
  CardContent,
  CardActions,
  CardHeader,
  CardMedia,
  TextField,
  Box,
  Grid,
  Divider,
  List,
  ListItem,
  ListItemText,
  Paper,
  Rating,
  Stack
} from '@mui/material';

import HorizontalStepper from '../components/StepperComponent';
import TableComponent from '../components/TableComponent';

const ComponentsPage = () => {
  return (
    <Box sx={{ m: 4 }}>
      <Typography variant="h4" gutterBottom>
        Common MUI Components
      </Typography>
      <Divider sx={{ mb: 4 }} />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Inputs
          </Typography>
          <Paper sx={{ p: 2 }}>
            <TextField label="Outlined" variant="outlined" fullWidth margin="normal" />
            <TextField label="Filled" variant="filled" fullWidth margin="normal" />
            <TextField label="Standard" variant="standard" fullWidth margin="normal" />
          </Paper>
        </Grid>

        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Buttons
          </Typography>
          <Paper sx={{ p: 2, mb: 2 }}>
            <Button variant="contained" color="primary" sx={{ mr: 2 }}>
              Contained
            </Button>
            <Button variant="outlined" color="secondary" sx={{ mr: 2 }}>
              Outlined
            </Button>
            <Button variant="text" color="success" sx={{ mr: 2 }}>
              Text
            </Button>
            <Button variant="contained" color="error" sx={{ mr: 2 }}>
              Error
            </Button>
            <Button variant="contained" color="warning" sx={{ mr: 2 }}>
              Warning
            </Button>
            <Button variant="contained" color="info" sx={{ mr: 2 }}>
              Info
            </Button>
          </Paper>

          <Typography variant="h5" gutterBottom>
            Button Group
          </Typography>
          <Paper sx={{ p: 2, mt: 2 }}>
            <ButtonGroup variant="contained" aria-label="Basic button group" sx={{ mr: 2 }}>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="outlined" aria-label="Basic button group" sx={{ mr: 2 }}>
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
            <ButtonGroup variant="text" aria-label="Basic button group">
              <Button>One</Button>
              <Button>Two</Button>
              <Button>Three</Button>
            </ButtonGroup>
          </Paper>
        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={4}>
        <Grid item xs={12} sm={6}>

          <Typography variant="h5" gutterBottom>
            List Component
          </Typography>
          <List>
            <ListItem>
              <ListItemText primary="Item 1" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Item 2" />
            </ListItem>
            <Divider component="li" />
            <ListItem>
              <ListItemText primary="Item 3" />
            </ListItem>
          </List>

          <Typography variant="h5" gutterBottom>
            Rating
          </Typography>
          <Stack spacing={1}>
            <Rating name="full-rating" value={4} />
            <Rating name="half-rating" defaultValue={2.5} precision={0.5} />
            <Rating name="read-only-rating" value={4} readOnly />
          </Stack>
        </Grid>
        <Grid item xs={12} sm={6}>

          <Card>
            <CardHeader title="Card Component" />
            <CardMedia
              component="img"
              height="194"
              image="https://picsum.photos/800/300"
              alt="random"
            />
            <CardContent>
              <Typography>
                Cards contain content and actions about a single subject.
              </Typography>
            </CardContent>
            <CardActions>
              <Button size="small">Learn More</Button>
            </CardActions>
          </Card>

        </Grid>
      </Grid>

      <Divider sx={{ my: 4 }} />

      <Grid container spacing={4}>

        <Grid item xs={12} sm={6}>
          <Typography variant="h5" gutterBottom>
            Stepper Component
          </Typography>
          <HorizontalStepper />
        </Grid>

        <Grid item xs={12} sm={6}>

          <Typography variant="h5" gutterBottom>
            Table
          </Typography>
          <TableComponent />
        </Grid>
      </Grid>


    </Box>


  );
};

export default ComponentsPage;
