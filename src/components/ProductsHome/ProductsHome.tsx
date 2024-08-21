import { } from 'react';
import SanPhamBanChay from '../../page/HomePage/____SanPhamBanChay';
import { IAppDataItem } from '../../reducers/slice/appDataSlice';
import { useAppSelector } from '../../redux/store';

type Props = {}

const ProductsHome = ({}: Props) => {
  const appData: IAppDataItem[] = useAppSelector((state) => state.appData);
  return (
    <div style={{ width: 'calc(100% - 360px)' }}>
      {appData.map((item, index) => (
        <SanPhamBanChay data={item} key={index} />
      ))}
    </div>
  );
}

export default ProductsHome