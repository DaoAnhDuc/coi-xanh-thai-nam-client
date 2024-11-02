import {} from 'react';

type Props = {};

const Shipping = ({}: Props) => {
  return (
    <div className="mt-6">
      <div className="container grid lg:grid-cols-3 md:grid-cols-2 grid-cols-1 px-5">
        <div className="flex gap-4 items-center mt-3">
          <img className="w-16 lg:w-12" src="/images/ship.png" alt="" />
          <div>
            <p className="font-bold text-lg">GIAO HÀNG TOÀN QUỐC</p>
            <p>Tới 63 tỉnh thành</p>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-3">
          <img className="w-16 lg:w-12" src="/images/refun.png" alt="" />
          <div>
            <p className="font-bold text-lg">THANH TOÁN KHI NHẬN HÀNG</p>
            <p>Tiện lợi, đơn giản, uy tín</p>
          </div>
        </div>
        <div className="flex gap-4 items-center mt-3">
          <img className="w-16 lg:w-12" src="/images/contact.png" alt="" />
          <div>
            <p className="font-bold text-lg"> 0835.248.666</p>
            <p>Tư vấn, bán hàng miễn phí !</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
