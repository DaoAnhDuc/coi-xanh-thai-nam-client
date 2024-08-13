import {} from 'react';

type Props = {};

const GioiThieu = ({}: Props) => {
  return (
    <div className="mt-10">
      <div className="container p-2 flex gap-10">
        <div
          className="flex-1 p-10 text-white"
          style={{ background: 'var(--green)' }}
        >
          <p className="text-5xl">Giới thiệu</p>
          <p className="ml-2">_____________________</p>
          <p className="text-lg mt-4 leading-8">
            Mây Tre Trung Phương – Tự hào là một trong những thương hiệu đèn mây
            tre đan lớn nhất TP. HCM. Chúng tôi may mắn được sinh ra và lớn lên
            từ mảnh đất Hà Tây cũ, từ lâu đã nổi tiếng với các nghề truyền thống
            làm quạt, nón, lồng chim. Đó chính là điều kiện, cơ hội cũng như
            động lực thôi thúc giám đốc của chúng tôi…
          </p>
          <p  className="text-lg mt-4 leading-8">
            Trong khoảng gần 10 năm trở lại đây, chúng tôi đã và đang đẩy mạnh
            kinh doanh các sản phẩm mây tre thị trường trong nước. Với tiêu chí
            “Người Việt dùng hàng Việt”, rất nhiều các mẫu sản phẩm mây tre đan
            đã được sản xuất đại trà để đáp ứng thị hiếu của người tiêu dùng
            trong nước. Chúng tôi hiện tại đang phân phối chủ yếu các nhóm sản
            phẩm về đèn mây tre, lồng chim, giỏ tre, khay tre, đèn hạt cườm, các
            sản phẩm nhựa giả mây. 
          </p>
        </div>
        <img
          src="https://maytretrungphuong.com/wp-content/uploads/2021/08/cong-ty-may-tre-trung-phuong.jpg"
          alt=""
        />
      </div>
    </div>
  );
};

export default GioiThieu;
