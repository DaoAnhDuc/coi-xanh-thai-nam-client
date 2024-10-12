import { SearchOutlined } from '@ant-design/icons';
import { Input } from 'antd';
import { Link } from 'react-router-dom';

type Props = {};

const Header = ({}: Props) => {


  const scroll = (e: any) => {
    const targetSection: any = document.querySelector(
      e.target.getAttribute('href'),
    );
    const header: any = document.getElementById('header');
    const navHeight: any = header?.offsetHeight; // Lấy chiều cao của navigation
    const targetPosition = targetSection.offsetTop - navHeight; // Tính khoảng cách trừ đi chiều cao của navigation
    const home: any = document.getElementById('app-layout');
    home.scrollTo({
      top: targetPosition - 20,
      behavior: 'smooth',
    });
  };

  return (
    <div
      id="header"
      className="w-full p-2 sticky top-0 z-30 bg-white"
      style={{ borderBottom: '1px solid #00000045' }}
    >
      <div className="container flex justify-between items-center">
        <div className="flex gap-12 items-center">
          <Link to="/">
            <img src="./images/logo.png" alt="" className="h-16" />
          </Link>
          <div className="flex gap-10">
            <div className="text-xl font-bold mt-2">
              <Link to="/">Trang chủ</Link>
            </div>
            <div className="text-xl mt-2">
              <a
                className="smooth"
                href="#section-gioi-thieu"
                onClick={(e) => {
                  e.preventDefault();
                  scroll(e);
                }}
              >
                Giới thiệu
              </a>
            </div>
            <div className="text-xl mt-2">
              <a
                className="smooth"
                href="#section-san-pham"
                onClick={(e) => {
                  e.preventDefault();
                  scroll(e);
                }}
              >
                Sản phẩm
              </a>
            </div>
            <div className="text-xl mt-2">
              <a
                className="smooth"
                href="#section-lien-he"
                onClick={(e) => {
                  e.preventDefault();
                  scroll(e);
                }}
              >
                Liên hệ
              </a>
            </div>
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
