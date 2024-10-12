import {} from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { chunkArray } from '../../utils';
import { Link } from 'react-router-dom';
import { IAppDataItem } from '../../reducers/slice/appDataSlice';
import CardProduct from '../../components/CardProduct/CardProduct';
type Props = {
  data: IAppDataItem;
};

const SanPhamBanChay = ({ data }: Props) => {
  return (
    <div className="mb-12 w-full overflow-hidden">
      <div
        className="text-white flex justify-between"
        style={{ borderBottom: '3px solid var(--green)' }}
      >
        <div
          className="w-fit text-xl px-6 py-1 uppercase"
          style={{ background: 'var(--green)' }}
        >
          {data.title}
        </div>
        <Link to={'/' + data.query} className="text-black pr-5">
          Xem tất cả
        </Link>
      </div>
      <div className="w-full overflow-hidden lg:block hidden">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mt-1 w-full max-w-full pb-2"
        >
          {chunkArray(data.data, 4).map((arr: Array<any>, index: number) => (
            <SwiperSlide key={index} className="relative">
              <div className="grid grid-cols-4 gap-4" key={index}>
                {arr.map((item, idx) => (
                  <Link key={idx} to={`/${data.query}/${idx}`}>
                    <CardProduct item={item} />
                  </Link>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
      <div className="w-full overflow-hidden block lg:hidden">
        <div className="grid md:grid-cols-2 grid-cols-1 gap-2 p-5">
          {data.data.slice(0, 4).map((item, idx) => (
            <Link key={idx} to={`/${data.query}/${idx}`}>
              <CardProduct item={item} />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default SanPhamBanChay;
