import {} from 'react';
import { IAppDataItem } from '../../reducers/slice/appDataSlice';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../redux/store';

type Props = {};

const ProductDetailPage = ({}: Props) => {
  const { productType, productId } = useParams();
  const appData: Array<IAppDataItem> = useAppSelector((state) => state.appData);
  const data: IAppDataItem | undefined = appData.find(
    (i) => i.query === productType,
  );
  if (!data) return null;
  const product = data.data.find(
    (_item, index) => index.toString() === productId,
  );
  return (
    <div className="container ">
      <p className="font-bold text-3xl"></p>
      <div style={{ minHeight: 'calc(100vh - 82px)' }}>
        <img
          style={{
            paddingTop: 60,
            paddingBottom: 60,
            boxSizing: 'border-box',
            maxHeight: 'calc(100vh - 82px)',
            maxWidth: '100%',
            margin: 'auto',
          }}
          src={product.img}
          alt=""
        />
      </div>
      {/* <div style={{ minHeight: '90vh' }}>
        <div className="relative hover:shadow-lg cursor-pointer overflow-hidden">
          <div
            className="absolute top-3 right-3 w-12 h-12 text-white rounded-full flex justify-center items-center"
            style={{ background: 'var(--green)' }}
          >
            {product.sale}
          </div>
          <img
            src={product.img}
            alt=""
            loading="lazy"
            className="w-full h-72 object-contain  hover:scale-105"
          />
          <div className="px-2 py-1">
            <p className="line-clamp-2 text-center">
              {product.name} {product.img}
            </p>
          </div>
          <div className="flex justify-center  items-center gap-4 pb-4" />
        </div>
      </div> */}
    </div>
  );
};

export default ProductDetailPage;
