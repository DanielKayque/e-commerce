import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import { AllProducts } from './components/AllProducts';
import ProdutoDetail from './pages/ProdutoDetail';
import Header from './components/Header';
import { CategoriesDetails } from './pages/CategorieDetail';
import { Footer } from './components/Footer';

const App = () => {
  return (
    <BrowserRouter>
    <Header />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/produto/:id" element={<ProdutoDetail />} />
        <Route path="/produto/categorias/:id" element={<CategoriesDetails />} />
      </Routes>
      <Footer />
    </BrowserRouter>
  );
};

export default App;
