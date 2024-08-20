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
import { Link } from 'react-router-dom';
type Props = {};

export const chunkArray = (arr: Array<any>, size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
    arr.slice(i * size, i * size + size),
  );

export const getMoney = (x: any) =>
  (x = x.toLocaleString('vi', { style: 'currency', currency: 'VND' }));

const HomePage = ({}: Props) => {
  const data = [
    {
      title: 'set treo tường',
    },
    {
      title: 'thảm',
    },
    {
      title: 'túi',
    },
    {
      title: 'giỏ đựng đồ',
    },
    {
      title: 'khay giỏ',
    },
    {
      title: 'quạt',
    },
    {
      title: 'dép guốc',
    },
    {
      title: 'giỏ tre trung thu - tết',
    },
    {
      title: 'decor cho bé',
    },
    {
      title: 'đồ noel',
    },
    {
      title: 'chao đèn',
    },
    {
      title: 'nội thất',
    },
  ];
  return (
    <div className="text-base overflow-x-hidden">
      <Header />
      <Slider />
      <Shipping />
      <GioiThieu />
      <div className="container mt-12">
        <div className="flex w-full max-w-full min-h-96 gap-10">
          <div
            style={{
              width: 320,
              minWidth: 320,
              maxWidth: 320,
              height: 'auto',
            }}
          >
            {data.map((item, index) => (
              <Link key={index} to={'/?chuyenmuc=' + item.title}>
                <div
                  className="w-full uppercase h-10 leading-10 px-1 text-lg cursor-pointer  hover:text-white sticky"
                  style={{
                    borderBottom: '1px solid var(--green)',
                    top: 6 + index * 2.5 + 'rem',
                  }}
                  onMouseOver={(e) => {
                    console.log(e.target);
                    const ele: any = e.target;
                    ele.style.background = 'var(--green)';
                  }}
                  onMouseLeave={(e) => {
                    console.log(e.target);
                    const ele: any = e.target;
                    ele.style.background = '';
                  }}
                >
                  {item.title}
                </div>
              </Link>
            ))}
          </div>
          <div style={{ width: 'calc(100% - 360px)' }}>
            {data.map((item) => (
              <SanPhamBanChay data={item} />
            ))}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default HomePage;
