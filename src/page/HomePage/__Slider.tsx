import { } from 'react';

import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
type Props = {};

const Slider = ({}: Props) => {
  const imgs = [
    './images/slide/1.jpg',
    './images/slide/2.jpg',
    './images/slide/3.jpg',
  ];
  return (
    <div>
      <Swiper navigation={true} modules={[Navigation]} className="mySwiper">
        {imgs.map((item: string, index: number) => (
          <SwiperSlide key={index} className="relative">
            <img src={item} alt="" className="w-full" />
            {/* <div className="absolute z-10 inset-0">
              <div className="container px-40 flex flex-col justify-center h-full">
                <p className='text-yellow-400 text-6xl font-bold'>CÓI XANH THÁI NAM</p>
                <p>Mang đến những sản phẩm chất lượng, tinh tế và sáng tạo</p>
              </div>
            </div> */}
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
};

export default Slider;
