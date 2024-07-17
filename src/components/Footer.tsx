import {Box, Container} from '@mui/material';
import GitHubIcon from '@mui/icons-material/GitHub';
import IconButton from '@mui/material/IconButton';

export default function HelloWorld() {
  return (
    <Box component="footer" sx={{ bgcolor: 'grey.100', padding: 2 }} >
      <Container maxWidth="lg" sx={{ display: 'flex', justifyContent: 'center' }}>
        <IconButton sx={{ mr: 2 }} href="https://github.com/mvessuri/react-demo" target="_blank">
          <GitHubIcon />
        </IconButton>
      </Container>
    </Box>
  );
}
