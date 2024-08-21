import {} from 'react';
import { Link, useLocation } from 'react-router-dom';
import { IAppDataItem } from '../../reducers/slice/appDataSlice';
import { useAppSelector } from '../../redux/store';
import './MenuLeft.scss';
type Props = {};

const MenuLeft = ({}: Props) => {
  const appData: Array<IAppDataItem> = useAppSelector((state) => state.appData);
  const location = useLocation();
  const { pathname } = location;

  return (
    <div
      style={{
        width: 320,
        minWidth: 320,
        maxWidth: 320,
        height: 'auto',
      }}
    >
      {appData.map((item, index) => {
        const active = pathname === '/' + item.query;
        return (
          <Link key={index} to={'/' + item.query}>
            <div
              className="w-full uppercase h-10 leading-10 px-1 text-lg cursor-pointer  hover:text-white sticky"
              style={{
                borderBottom: '1px solid var(--green)',
                top: 6 + index * 2.5 + 'rem',
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
