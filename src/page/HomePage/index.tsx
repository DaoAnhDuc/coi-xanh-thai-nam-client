import {} from 'react';
import './style.scss';
import Header from './_Header';
import 'swiper/css';
import 'swiper/css/navigation';
import Slider from './__Slider';
import Shipping from './__Shipping';
import GioiThieu from './___GioiThieu';
import SanPhamBanChay from './____SanPhamBanChay';
import Footer from './Footer';
type Props = {};

export const chunkArray = (arr: any[], size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
    arr.slice(i * size, i * size + size),
  );

export const getMoney = (x: any) =>
  (x = x.toLocaleString('vi', { style: 'currency', currency: 'VND' }));

const HomePage = ({}: Props) => {
  return (
    <div className="text-base overflow-x-hidden">
      <Header />
      <Slider />
      <Shipping />
      <GioiThieu />
      <SanPhamBanChay />
      <SanPhamBanChay />
      <SanPhamBanChay />
      <SanPhamBanChay />
      <SanPhamBanChay />
      <SanPhamBanChay />
      <Footer/>
    </div>
  );
};

export default HomePage;
