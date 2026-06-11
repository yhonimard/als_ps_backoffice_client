import '@fontsource/roboto/300.css';
import '@fontsource/roboto/400.css';
import '@fontsource/roboto/500.css';
import '@fontsource/roboto/700.css';
import { Button } from '@mui/material';
import AppLayout from './Layout/AppLayout';
import RootPage from './pages/Root';
import { RouterProvider } from 'react-router';
import route from './routes';

const App = () => <RouterProvider router={route} />


export default App
