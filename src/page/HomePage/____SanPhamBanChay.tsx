import {} from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { chunkArray } from '../../utils';
import { Link } from 'react-router-dom';
import { IAppDataItem } from '../../reducers/slice/appDataSlice';
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
        <Link to={'/' + data.query} className="text-black">
          Xem tất cả
        </Link>
      </div>
      <div className="w-full overflow-hidden">
        <Swiper
          navigation={true}
          modules={[Navigation]}
          className="mt-1  w-full max-w-full pb-2"
        >
          {chunkArray(data.data, 4).map((arr: Array<any>, index: number) => (
            <SwiperSlide key={index} className="relative">
              <div className="grid grid-cols-4 gap-4" key={index}>
                {arr.map((item, idx) => (
                  <Link key={idx} to={`/${data.query}/${idx}`}>
                    <div
                      className="relative hover:shadow-lg cursor-pointer overflow-hidden"
                      key={idx}
                      style={{ border: '1px solid #dfdfdf' }}
                    >
                      <div
                        className="absolute top-3 right-3 w-12 h-12 text-white rounded-full flex justify-center items-center"
                        style={{ background: 'var(--green)' }}
                      >
                        {item.sale}
                      </div>
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-72 object-contain  hover:scale-105"
                      />
                      <div className="px-2 py-1">
                        <p className="line-clamp-2 text-center">{item.name}</p>
                      </div>
                      <div className="flex justify-center  items-center gap-4 pb-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </div>
  );
};

export default SanPhamBanChay;
