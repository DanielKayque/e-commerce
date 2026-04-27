import { useContext } from 'react';
import Banner from '../components/Banner';
import BestAvailables from '../components/BestAvailables';
import { HomeFeatures } from '../components/HomeFeatures';
import SectionCategories from '../components/SectionCategories';
import { ThemeContext } from '../context/ThemeContext';

const Home = () => {
  const teste = useContext(ThemeContext);

  console.log(teste);

  return (
    <main>
      <Banner />
      <BestAvailables />
      <SectionCategories />
      <HomeFeatures />
    </main>
  );
};

export default Home;
