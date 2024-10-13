import { MenuOutlined } from '@ant-design/icons';
import { Button } from 'antd';
import { useState } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IAppDataItem } from '../../reducers/slice/appDataSlice';
import { useAppSelector } from '../../redux/store';

type Props = {};

const capitalizeWords = (str: string) => {
  return str
    .toLowerCase() // Chuyển toàn bộ chuỗi thành chữ thường
    .split(' ') // Tách chuỗi thành mảng các từ dựa trên khoảng trắng
    .map((word) => word.charAt(0).toUpperCase() + word.slice(1)) // Viết hoa chữ cái đầu của mỗi từ
    .join(' '); // Gộp các từ lại thành chuỗi với khoảng trắng giữa các từ
};



const Header = ({}: Props) => {
  const [open, setOpen] = useState(false);
  const appData: Array<IAppDataItem> = useAppSelector((state) => state.appData);  const location = useLocation();
  const { pathname } = location;
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
      {open && (
        <div
          className="absolute w-full bg-white top-full left-0 px-5"
          style={{ border: '1px solid #dfdfdf' }}
        >
          <div
            className="h-10 leading-10 uppercase font-bold"
            style={{ color: 'var(--green)' }}
          >
            Danh mục sản phẩm
          </div>
          {appData.map((item, index) => {
            const active = pathname === '/' + item.query;
            return (
              <Link
                key={index}
                to={'/' + item.query}
                onClick={() => setOpen(false)}
              >
                <div
                  className="w-full h-8 leading-8 px-2 text-base cursor-pointer  hover:text-white"
                  style={{
                    borderBottom: '1px solid var(--green)',
                    backgroundColor: active ? 'var(--green)' : 'transparent',
                    color: active ? '#fff' : '#000',
                  }}
                >
                  {capitalizeWords(item.title)}
                </div>
              </Link>
            );
          })}
          <div className="flex gap-4 items-center my-4">
            {/* <Input size="large" addonAfter={<SearchOutlined />} /> */}
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
      )}
      <div className="container flex justify-between items-center ">
        <div className="flex gap-12 items-center">
          <Link to="/">
            <img src="./images/logo.png" alt="" className="lg:h-16 h-12" />
          </Link>
          <div className="hidden lg:flex gap-10 ">
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
        <div className="hidden lg:flex gap-4 items-center ">
          {/* <Input size="large" addonAfter={<SearchOutlined />} /> */}
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
        <div className="flex lg:hidden gap-4 items-center ">
          <Button
            icon={<MenuOutlined />}
            onClick={() => setOpen(!open)}
          />
        </div>
      </div>
    </div>
  );
};

export default Header;
