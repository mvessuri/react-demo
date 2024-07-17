import './App.css'

import { Route, createBrowserRouter, createRoutesFromElements, RouterProvider } from 'react-router-dom';
import Header from './Layout';
import HomePage from './pages/HomePage';
import ColorsPage from './pages/ColorsPage';
import ComponentsPage from './pages/ComponentsPage';
import WeatherPage from './pages/WeatherPage';

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route>
      <Route path="/" element={<Header  />} >
        <Route index element={<HomePage />} />
        <Route path="/colors" element={<ColorsPage />} />
        <Route path="/components" element={<ComponentsPage />} />
        <Route path="/weather" element={<WeatherPage />} />
      </Route>
    </Route>
  )
);
function App() {
  return (
    <>
      <RouterProvider router={router} />
    </>
  )
}

export default App
