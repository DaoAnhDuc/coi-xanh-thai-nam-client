import { useEffect } from 'react';
import 'swiper/css';
import 'swiper/css/navigation';
import MenuLeft from '../../components/MenuLeft/MenuLeft';
import ProductsHome from '../../components/ProductsHome/ProductsHome';
import Footer from './Footer';
import Header from './_Header';
import Shipping from './__Shipping';
import Slider from './__Slider';
import GioiThieu from './___GioiThieu';
import './style.scss';
type Props = {};

const HomePage = ({}: Props) => {
  useEffect(() => {
    return () => {};
  }, []);

  return (
    <div  className="text-base">
      <Header />
      <Slider />
      <Shipping />
      <section id="section-gioi-thieu">
        <GioiThieu />
      </section>
      <section id="section-san-pham">
        <div className="container mt-12">
          <div className="flex w-full max-w-full min-h-96 gap-10">
            <MenuLeft />
            <ProductsHome />
          </div>
        </div>
      </section>
      <section id="section-lien-he" >
        <Footer />
      </section>
    </div>
  );
};

export default HomePage;
