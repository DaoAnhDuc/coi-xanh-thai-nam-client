// import i18next from 'i18next'
// import { useEffect } from 'react'
import { I18nextProvider } from 'react-i18next';
// import historyNote from './release/history.json'
// import metadata from './release/metadata.json'
import Router from './router/Router';

import { ConfigProvider, Layout, theme } from 'antd';
import { useEffect, useState } from 'react';
import LoadingTopBar from './components/base/loading/LoadingTopBar';
// import Theme from './components/base/theme/Theme';
import { ArrowUpOutlined } from '@ant-design/icons';
import 'antd/dist/reset.css';
import axios from 'axios';
import { useLocation } from 'react-router-dom';
import './App.css';
import i18n from './i18n';
import { IAppDataItem, setAppData } from './reducers/slice/appDataSlice';
import { setLanguge } from './reducers/slice/themeLanguageSlice';
import {
  getStore,
  RootState,
  useAppDispatch,
  useAppSelector,
} from './redux/store';
import { serviceConfig } from './services/serviceManager';
import styleModule from './style.module.scss';
const { defaultAlgorithm, darkAlgorithm } = theme;
const { useToken } = theme;

declare global {
  // tslint:disable-next-line:interface-name
  interface Window {
    MyNamespace: any;
  }
}

const App = () => {
  const { token } = useToken();

  const themeData = useAppSelector(
    (state: RootState) => state.themeLanguage.theme,
  );
  const dispatch = useAppDispatch();
  const { pathname } = useLocation();
  const [loadingApp, setLoadingApp] = useState(true);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [pathname]);
  useEffect(() => {
    serviceConfig(getStore());
    dispatch(setLanguge(i18n.resolvedLanguage));
    getData();
  }, []);

  const getData = () => {
    const appData: Array<IAppDataItem> = getStore().getState().appData;
    const promises: Array<any> = [];
    appData.forEach((i) => {
      try {
        promises.push(axios.get(`/database/${i.query}.json`));
      } catch (error) {}
    });
    Promise.all(promises).then((values) => {
      const newAppData: Array<IAppDataItem> = [];
      values.forEach((item, index) => {
        newAppData.push({
          ...appData[index],
          data: item.data,
        });
      });
      dispatch(setAppData(newAppData));
      setLoadingApp(false);
    });
  };

  return (
    <ConfigProvider
      theme={{
        algorithm: themeData.dark ? darkAlgorithm : defaultAlgorithm,
        token: {
          colorPrimary: themeData.color,
          fontSize: 16,
          sizeStep: 3,
          sizeUnit: 3,
          borderRadius: 3,
          fontFamily: 'Roboto',
        },
      }}
    >
      <I18nextProvider i18n={i18n}>
        <div
          className={styleModule.app}
          style={{ background: token.colorBgBase }}
        >
          <Layout id="app-layout" className={styleModule.monitor}>
            <LoadingTopBar />
            {loadingApp ? <div></div> : <Router />}
            {/* <div className="fixed bottom-40 right-8 z-20">
              <img
                className="w-12 h-12"
                src="https://cdn.haitrieu.com/wp-content/uploads/2022/01/Logo-Zalo-Arc.png"
                alt=""
              />
            </div> */}
            <div
              className="fixed bottom-10 right-8 z-20 w-8 h-8 bg-white flex justify-center items-center rounded-2xl text-xl"
              style={{ border: '1px solid #dfdfdf' }}
              onClick={() => {
                document.getElementById('app-layout')?.scrollTo({
                  top: 0,
                });
              }}
            >
              <ArrowUpOutlined />
            </div>
          </Layout>
        </div>
      </I18nextProvider>
    </ConfigProvider>
  );
};

export default App;
