import {} from 'react';

type Props = {};

const GioiThieu = ({}: Props) => {
  return (
    <div className="mt-10">
      <div className="container lg:flex lg:gap-10">
        <div
          className="flex-1 p-10 text-white"
          style={{ background: 'var(--green)' }}
        >
          <p className="text-5xl">Giới thiệu</p>
          <p className="ml-2">_____________________</p>
          <p className="text-lg mt-4 leading-8">
            Chúng tôi là Công ty Cói Xanh Thái Nam, một đơn vị chuyên sản xuất
            và cung cấp các sản phẩm trang trí nhà cửa từ nguyên liệu tự nhiên,
            an toàn như mây - tre - cói - bèo - sợi nhựa nguyên sinh - sợi giấy
            - sợi cotton. Với sứ mệnh mang đến không gian sống gần gũi với thiên
            nhiên, chúng tôi tự hào là thương hiệu tiên phong trong lĩnh vực sản
            xuất nội thất và trang trí thủ công tại Việt Nam. Tại Cói Xanh Thái
            Nam, chúng tôi cam kết sử dụng 100% nguyên liệu tự nhiên, thân thiện
            với môi trường. Mỗi sản phẩm đều được chế tạo tỉ mỉ bởi những nghệ
            nhân làng nghề, đảm bảo chất lượng vượt trội và thiết kế độc đáo.
            Chúng tôi tin rằng tất cả các sản phẩm được sản xuất tại công ty đều
            đạt chuẩn và thỏa mãn những yêu cầu khắt khe nhất trên thị trường.
          </p>
          <p className="text-lg mt-4 leading-8">
            Cói Xanh Thái Nam cung cấp đa dạng các loại mặt hàng như thảm, khay
            giỏ, đồ trang trí tường, túi, mũ, khay và nhiều sản phẩm khác phù
            hợp với mọi phong cách trang trí nội thất. Chúng tôi không chỉ chú ý
            đến sản phẩm chất lượng mà còn quan tâm đến sự bền vững và trách
            nhiệm xã hội. Bằng cách lựa chọn nguyên liệu từ các nguồn vững chắc
            và thực hiện quy trình sản xuất thân thiện với môi trường, chúng tôi
            đưa ra lời khuyên về việc bảo vệ hệ thống sinh thái và phát triển
            cộng đồng địa phương.
          </p>
        </div>
        <img src="/images/tn4.png" alt="" className="lg:w-1/2 m-auto" />
      </div>
    </div>
  );
};

export default GioiThieu;
