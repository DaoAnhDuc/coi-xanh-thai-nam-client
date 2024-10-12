
type Props = {
  item:any
};

const CardProduct = ({item}: Props) => {
  return (
    <div
      className="relative hover:shadow-lg cursor-pointer overflow-hidden"
      style={{ border: '1px solid #dfdfdf' }}
    >
      {/* <div
                        className="absolute top-3 right-3 w-12 h-12 text-white 
                        rounded-full flex justify-center items-center"
                        style={{ background: 'var(--green)' }}
                      >
                        {item.sale}
                      </div> */}
      <img
        src={item.img}
        alt=""
        className="w-full h-72 object-contain  hover:scale-105"
      />
      <div className="px-2 py-1">
        <p className="line-clamp-2 text-center">
          {item.name ||
            'Tên sản phẩm ở đây, có thể dài 2 dòng tùy theo dài quá sẽ có ...'}
        </p>
      </div>
      {/* <div className="flex justify-center  items-center gap-4 pb-4" /> */}
    </div>
  );
}

export default CardProduct