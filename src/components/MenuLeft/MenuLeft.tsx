import { useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IAppDataItem } from '../../reducers/slice/appDataSlice';
import { useAppSelector } from '../../redux/store';
import './MenuLeft.scss';
type Props = {};

const MenuLeft = ({}: Props) => {
  const appData: Array<IAppDataItem> = useAppSelector((state) => state.appData);
  const location = useLocation();
  const { pathname } = location;
  useEffect(() => {
    const home: any = document.getElementById('app-layout');
    home?.scrollTo({
      top: 0,
      behavior: 'smooth',
    });
    return () => {};
  }, [pathname]);

  return (
    <div
      style={{
        width: 320,
        minWidth: 320,
        maxWidth: 320,
        height: 600,
        position: 'sticky',
        top: 129,
      }}
    >
      {appData.map((item, index) => {
        const active = pathname === '/' + item.query;
        return (
          <Link key={index} to={'/' + item.query}>
            <div
              className="w-full uppercase h-10 leading-10 px-2 text-base cursor-pointer  hover:text-white"
              style={{
                borderBottom: '1px solid var(--green)',
                backgroundColor: active ? 'var(--green)' : 'transparent',
                color: active ? '#fff' : '#000',
              }}
            >
              {item.title}
            </div>
          </Link>
        );
      })}
    </div>
  );
};

export default MenuLeft;
