import { } from 'react';
import SanPhamBanChay from '../../page/HomePage/____SanPhamBanChay';
import { IAppDataItem } from '../../reducers/slice/appDataSlice';
import { useAppSelector } from '../../redux/store';

type Props = {}

const ProductsHome = ({}: Props) => {
  const appData: Array<IAppDataItem> = useAppSelector((state) => state.appData);
  return (
    <div style={{ width: '100%' }}>
      {appData.map((item, index) => (
        <SanPhamBanChay data={item} key={index} />
      ))}
    </div>
  );
}

export default ProductsHome
