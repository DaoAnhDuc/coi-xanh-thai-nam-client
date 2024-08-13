import {} from 'react';
import { Navigation } from 'swiper/modules';
import { Swiper, SwiperSlide } from 'swiper/react';
import { chunkArray, getMoney } from '.';
type Props = {};

const SanPhamBanChay = ({}: Props) => {
  const data = [
    {
      img: 'https://product.hstatic.net/1000308606/product/ban-kham-trai-bambooo-eco-2_7_-copy-_5e4f171bea4e4b7f933f382cb3ce6f6d_large.jpg',
      name: 'Bàn Khảm Trai Cao Cấp BAMBOOO ECO Phong Cách Bắc Âu Để Phòng Khách Trong Gia Đình - Khách Sạn - Resort - Dã Ngoại',
      price: 550000,
      oldPrice: 750000,
      sale: '-27%',
    },
    {
      img: 'https://product.hstatic.net/1000308606/product/don-ban-kham-trai-bamboo-eco-1_68ded9b514d749468aee3a54e3e7dc14_large.jpg',
      name: 'Đôn Bàn Khảm Trai Cao Cấp BAMBOOO ECO Phong Cách Bắc Âu Để Cạnh Sofa Phòng Khách Trong Gia Đình - Khách Sạn - Resort',
      price: 900000,
      oldPrice: 1170000,
      sale: '-23%',
    },
    {
      img: 'https://product.hstatic.net/1000308606/product/don-ban-kham-trai-bambooo-eco-1_3__a63adabf5ac34ccebc487caae245b9d3_large.jpg',
      name: 'Đôn Bàn Khảm Trai Cao Cấp BAMBOOO ECO Phong Cách Bắc Âu Để Cạnh Sofa Phòng Khách Trong Gia Đình - Khách Sạn - Resort NEW',
      price: 1100000,
      oldPrice: 1425000,
      sale: '-23%',
    },
    {
      img: 'https://product.hstatic.net/1000308606/product/hop-giay-an-kham-trai-bambooo-eco-1-avt_e902628f5ff641cdbc59a0e8b2801874_large.jpg',
      name: 'Hộp Đựng Giấy Ăn Khảm Trai Cao Cấp BAMBOOO ECO Nhiều Màu Sắc Trang Trí Trong Phòng Ăn Phòng Ngủ Phòng Khách Khách Sạn',
      price: 210000,
      oldPrice: 295000,
      sale: '-29%',
    },
    {
      img: 'https://product.hstatic.net/1000308606/product/hop-giay-an-kham-trai-bambooo-eco-1-avt_e902628f5ff641cdbc59a0e8b2801874_large.jpg',
      name: 'Hộp Đựng Giấy Ăn Khảm Trai Cao Cấp BAMBOOO ECO Nhiều Màu Sắc Trang Trí Trong Phòng Ăn Phòng Ngủ Phòng Khách Khách Sạn',
      price: 270000,
      oldPrice: 370000,
      sale: '-27%',
    },
    {
      img: 'https://product.hstatic.net/1000308606/product/khay-kham-trai-bambooo-eco-guot0028-1_4__db8cfda1837c498cbac69919f897b4c0_large.jpg',
      name: 'Khay Trà Khảm Trai Cao Cấp BAMBOOO ECO Để Trái Cây Đồ Trang Sức Phong Cách Bắc Âu Để Trong Phòng Ngủ Phòng Khách Đa Năng',
      price: 220000,
      oldPrice: 360000,
      sale: '-39%',
    },
    {
      img: 'https://product.hstatic.net/1000308606/product/khay-kham-trai-hoa-tiet-gach-xep-bambooo-eco-2_3__a22d46e930ce480db7fbbacabfbe2379_large.jpg',
      name: 'Khay Trà Khảm Trai Cao Cấp BAMBOOO ECO Hoạ Tiết Gạch Xếp Phong Cách Bắc Âu Để Trong Phòng Ngủ Phòng Khách Đa Năng',
      price: 250000,
      oldPrice: 250000,
      sale: '-0%',
    },
    {
      img: 'https://product.hstatic.net/1000308606/product/khay-kham-trai-bambooo-eco-1_4__52b7617727f44a63a7b8a3a768472cc1_large.jpg',
      name: 'Khay Trà Khảm Trai Cao Cấp BAMBOOO ECO Phong Cách Bắc Âu',
      price: 290000,
      oldPrice: 360000,
      sale: '-20%',
    },
    {
      img: 'https://product.hstatic.net/1000308606/product/khay-kham-trai-bambooo-eco-hong-xanh-2_f1cedf18e3374c28a273de64c0114702_large.jpg',
      name: 'Khay Trà Khảm Trai Tinh Xảo Phong Cách Bắc Âu BAMBOOO ECO',
      price: 320000,
      oldPrice: 404000,
      sale: '-34%',
    },
    {
      img: 'https://product.hstatic.net/1000308606/product/dia-lot-ban-an-kham-trai-1_4__d1e0b686a6594b09afea4d5c6688d6ec_large.jpg',
      name: 'Tấm Lót Bàn Ăn Khảm Trai BAMBOOO ECO Sang Trọng Phong Cách Bắc Âu Sang Trọng',
      price: 110000,
      oldPrice: 150000,
      sale: '-27%',
    },
  ];
  return (
    <div className="mt-12 mb-12">
      <div className="container">
        <div
          className="text-white"
          style={{ borderBottom: '3px solid var(--green)' }}
        >
          <div
            className="w-fit text-xl px-6 py-1"
            style={{ background: 'var(--green)' }}
          >
            Sản phẩm bán chạy
          </div>
        </div>
        <Swiper navigation={true} modules={[Navigation]} className="mt-1">
          {chunkArray(data, 5).map((arr: any[], index: number) => (
            <SwiperSlide key={index} className="relative">
              <div className="grid grid-cols-5 gap-4" key={index}>
                {arr.map((item, idx) => (
                  <div
                    className="relative "
                    key={idx}
                    style={{ border: '1px solid #dfdfdf' }}
                  >
                    <div
                      className="absolute top-3 right-3 w-12 h-12 text-white rounded-full flex justify-center items-center"
                      style={{ background: 'var(--green)' }}
                    >
                      {item.sale}
                    </div>
                    <img src={item.img} alt="" className="w-full" />
                    <div className="px-2 py-1">
                      <p className="line-clamp-2 text-center">{item.name}</p>
                    </div>
                    <div className="flex justify-center  items-center gap-4 pb-4">
                      <p
                        className="font-bold text-xl "
                        style={{ color: 'var(--green)' }}
                      >
                        {getMoney(item.price)}
                      </p>
                      <p className="line-through">{getMoney(item.oldPrice)}</p>
                    </div>
                  </div>
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
