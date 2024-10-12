import {} from 'react';

type Props = {};

const GioiThieu = ({}: Props) => {
  return (
    <div className="mt-10" >
      <div className="container flex gap-10">
        <div
          className="flex-1 p-10 text-white"
          style={{ background: 'var(--green)' }}
        >
          <p className="text-5xl">Giới thiệu</p>
          <p className="ml-2">_____________________</p>
          <p className="text-lg mt-4 leading-8">
            Chúng tôi là Công ty Cói Xanh Thái Nam, một đơn vị chuyên sản xuất
            và cung cấp các sản phẩm trang trí nhà cửa từ nguyên liệu tự nhiên
            như cói và bèo. Với sứ mệnh mang đến không gian sống gần gũi với
            thiên nhiên, chúng tôi tự hào là thương hiệu tiên phong trong lĩnh
            vực sản xuất đồ nội thất và trang trí thủ công tại Việt Nam. Tại Cói
            Xanh Thái Nam, chúng tôi cam kết sử dụng 100% nguyên liệu tự nhiên,
            thân thiện với môi trường. Mỗi sản phẩm đều được chế tác tỉ mỉ bởi
            những nghệ nhân lành nghề, đảm bảo chất lượng vượt trội và thiết kế
            độc đáo.
          </p>
          <p className="text-lg mt-4 leading-8">
            Chúng tôi cung cấp đa dạng các mặt hàng như thảm, giỏ đựng, đồ trang
            trí tường, và nhiều sản phẩm khác, phù hợp với mọi phong cách trang
            trí nội thất. Chúng tôi không chỉ chú trọng đến chất lượng sản phẩm
            mà còn quan tâm đến sự bền vững và trách nhiệm xã hội. Bằng cách lựa
            chọn nguyên liệu từ các nguồn bền vững và thực hiện quy trình sản
            xuất thân thiện với môi trường, chúng tôi góp phần bảo vệ hệ sinh
            thái và phát triển cộng đồng địa phương.
          </p>
        </div>
        <img src="./images/tn4.png" alt="" />
      </div>
    </div>
  );
};

export default GioiThieu;
