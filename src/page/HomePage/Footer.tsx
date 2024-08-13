import {} from 'react';

type Props = {};

const Footer = ({}: Props) => {
  return (
    <div
      className="text-center text-white"
      style={{ background: 'var(--green)' }}
    >
      <div className="container py-6">
        <div className="flex gap-10 justify-center">
          <p className="font-bold text-xl">1. Chính sách quy định chung</p>
          <p className="font-bold text-xl">2. Chính sách bảo mật thông tin</p>
        </div>
        <p className="mt-2">
          Số ĐKKD 0108167741 do Sở KHĐT Tp. Hà Nội cấp ngày 12/02/2018
        </p>
        <img
        className='m-auto'
          src="https://theme.hstatic.net/1000308606/1001214695/14/tbbct.png?v=267"
          alt=""
        />
        <p className="mt-2">Copyrights © 2018 by The Bamboo.</p>
        <p className="mt-2">CÔNG TY TNHH MÂY TRE XUẤT KHẨU PHÚ MINH HƯNG YÊN</p>
        <p className="mt-2">
          Địa chỉ: Khu công nghiệp Phố Nối B, Xã Nghĩa Hiệp, Huyện Yên Mỹ, Tỉnh
          Hưng Yên
        </p>
        <p className="mt-2">Giấy phép kinh doanh số: 0900192696</p>
      </div>
    </div>
  );
};

export default Footer;
