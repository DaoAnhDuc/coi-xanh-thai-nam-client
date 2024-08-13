import {} from 'react';

type Props = {};

const Shipping = ({}: Props) => {
  return (
    <div className="mt-10">
      <div className="container grid grid-cols-3">
        <div className="flex gap-4 items-center">
          <img src="./images/ship.png" alt="" />
          <div>
            <p className="font-bold text-lg">GIAO HÀNG TOÀN QUỐC</p>
            <p>Tới 63 tỉnh thành</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img src="./images/refun.png" alt="" />
          <div>
            <p className="font-bold text-lg">THANH TOÁN KHI NHẬN HÀNG</p>
            <p>Tiện lợi, đơn giản, uy tín</p>
          </div>
        </div>
        <div className="flex gap-4 items-center">
          <img src="./images/contact.png" alt="" />
          <div>
            <p className="font-bold text-lg"> 0982.415.495</p>
            <p>Tư vấn, bán hàng miễn phí !</p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Shipping;
