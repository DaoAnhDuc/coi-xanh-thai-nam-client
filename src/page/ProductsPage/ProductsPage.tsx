import {} from 'react';
import { Link, Outlet, useParams } from 'react-router-dom';
import MenuLeft from '../../components/MenuLeft/MenuLeft';
import Header from '../HomePage/_Header';
import Footer from '../HomePage/Footer';
import { IAppDataItem } from '../../reducers/slice/appDataSlice';
import { useAppSelector } from '../../redux/store';
import CardProduct from '../../components/CardProduct/CardProduct';

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
            <div className="lg:block hidden" style={{ width: 320 }}>
              <MenuLeft />
            </div>
            <div style={{ flex: 1 }}>
              <p
                className="text-4xl font-bold mb-4  lg:px-0 px-5"
                style={{ color: 'var(--green)' }}
              >
                {data.title}
              </p>
              <div className="grid xl:grid-cols-4  lg:grid-cols-3 md:grid-cols-2 col-span-1 gap-4 lg:px-0 px-5">
                {data.data.map((item, idx) => (
                  <Link key={idx} to={`/${data.query}/${idx}`}>
                    <CardProduct item={item} />
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
