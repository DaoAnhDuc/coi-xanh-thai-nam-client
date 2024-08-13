import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import {} from 'react';

type Props = {};

const Header = ({}: Props) => {
  return (
    <div
      id="header"
      className="w-full p-2 sticky top-0 z-30 bg-white"
      style={{ borderBottom: '1px solid #00000045' }}
    >
      <div className="container flex justify-between items-center">
        <div className="flex gap-12 items-center">
          <img src="./images/logo.png" alt="" className="h-16" />
          <div className="flex gap-10">
            <div className="text-xl">Trang chủ</div>
            <div className="text-xl">Sản phẩm</div>
            <div className="text-xl">Chia sẻ</div>
            <div className="text-xl">Giới thiệu</div>
            <div className="text-xl">Liên hệ</div>
          </div>
        </div>
        <div className="flex gap-2 items-center">
          <Input size="large" addonAfter={<SearchOutlined />} />
          <img
            className="h-8"
            src="https://static.xx.fbcdn.net/rsrc.php/v3/y0/r/eFZD1KABzRA.png"
            alt=""
          />
          <img
            className="h-8"
            src="https://chat.zalo.me/favicon-96x96.v1.png"
            alt=""
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
