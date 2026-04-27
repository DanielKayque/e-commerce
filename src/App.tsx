import { BrowserRouter, Route, Routes } from 'react-router-dom';
import Home from './pages/Home';
import ProdutoDetail from './pages/ProdutoDetail';
import Header from './components/Header';
import { CategoriesDetails } from './pages/CategorieDetail';
import { Footer } from './components/Footer';
import { AllProducts } from './components/AllProducts';
import { ThemeProvider } from './context/ThemeProvider';

const App = () => {
  return (
    <ThemeProvider>
      <BrowserRouter basename="/e-commerce/">
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/produtos" element={<AllProducts />} />
          <Route path="/produto/:id" element={<ProdutoDetail />} />
          <Route
            path="/produto/categorias/:id"
            element={<CategoriesDetails />}
          />
        </Routes>
        <Footer />
      </BrowserRouter>
    </ThemeProvider>
  );
};

export default App;
