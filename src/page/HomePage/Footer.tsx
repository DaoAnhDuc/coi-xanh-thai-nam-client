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
          Số ĐKKD 0110343909 do Sở KHĐT TP. Hà Nội cấp ngày 08/05/2023
        </p>
        <img
          className="m-auto"
          src="https://theme.hstatic.net/1000308606/1001214695/14/tbbct.png?v=267"
          alt=""
        />
        <p className="mt-2">Copyrights © 2023 by THAI NAM.</p>
        <p className="mt-2">CÔNG TY TNHH SX VÀ TM CÓI XANH THÁI NAM</p>
        <p className="mt-2">Giấy phép kinh doanh số: 0110343909</p>
        <p className="mt-2">
          Địa chỉ: 75 Ngõ 37 Bằng Liệt, Phường Hoàng Liệt, Quận Hoàng Mai, TP Hà
          Nội.
        </p>
        <p>Hotline : 0835248666 - 0916912192</p>
      </div>
    </div>
  );
};

export default Footer;
