import {} from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import MenuLeft from '../../components/MenuLeft/MenuLeft';
import Header from '../HomePage/_Header';
import Footer from '../HomePage/Footer';
import { IAppDataItem } from '../../reducers/slice/appDataSlice';
import { useAppSelector } from '../../redux/store';

type Props = {};

const ProductsPage = ({}: Props) => {
  const { productType, productId } = useParams();
  const appData: Array<IAppDataItem> = useAppSelector((state) => state.appData);
  const data: IAppDataItem | undefined = appData.find(
    (i) => i.query === productType,
  );
  if (!data) return null;
  return (
    <div className="text-base overflow-x-hidden">
      <Header />
      {productId ? (
        <Outlet />
      ) : (
        <div className="container mt-12 mb-12">
          <div
            className="flex w-full max-w-full gap-10"
            style={{ minHeight: '80vh' }}
          >
            <MenuLeft />
            <div>
              <p
                className="text-4xl font-bold mb-4"
                style={{ color: 'var(--green)' }}
              >
                {data.title}
              </p>
              <div className="grid grid-cols-4 gap-4">
                {data.data.map((item, idx) => (
                  <Link key={idx} to={`/${data.query}/${idx}`}>
                    <div
                      className="relative hover:shadow-lg cursor-pointer overflow-hidden"
                      key={idx}
                      style={{ border: '1px solid #dfdfdf' }}
                    >
                      <div
                        className="absolute top-3 right-3 w-12 h-12 text-white rounded-full flex justify-center items-center"
                        style={{ background: 'var(--green)' }}
                      >
                        {item.sale}
                      </div>
                      <img
                        src={item.img}
                        alt=""
                        className="w-full h-72 object-contain  hover:scale-105"
                      />
                      <div className="px-2 py-1">
                        <p className="line-clamp-2 text-center">{item.name}</p>
                      </div>
                      <div className="flex justify-center  items-center gap-4 pb-4" />
                    </div>
                  </Link>
                ))}
              </div>
            </div>
          </div>
        </div>
      )}
      <Footer />
    </div>
  );
};

export default ProductsPage;
