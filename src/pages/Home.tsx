import Banner from '../components/Banner';
import BestAvailables from '../components/BestAvailables';
import { HomeFeatures } from '../components/HomeFeatures';
import SectionCategories from '../components/SectionCategories';

const Home = () => {
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
