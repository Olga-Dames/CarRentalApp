import { Route, Routes } from 'react-router-dom';
import './App.styled'
import Homepage from '../../pages/Homepage/Homepage';
import Catalog from '../../pages/Catalog/Catalog';
import Favorites from '../../pages/Favorites/Favorites';
import NotFound from '../../pages/NotFound/NotFound';
import Layout from '../Layout/Layout';

function App() {
  return (
    <>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Homepage />} />
          <Route path="/catalog" element={<Catalog />} />
          <Route path="/favorites" element={<Favorites />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </>
  );
}

export default App;
