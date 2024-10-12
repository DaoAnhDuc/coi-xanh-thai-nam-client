import { createSlice } from '@reduxjs/toolkit';
export interface IAppDataItem {
  title: string;
  query: string;
  data: Array<any>;
}
const initialState: Array<IAppDataItem> = [
  {
    title: 'SẢN PHẨM BÁN CHẠY',
    query: 'san-pham-ban-chay',
    data: [],
  },
  {
    title: 'SET TREO TƯỜNG',
    query: 'set-treo-tuong',
    data: [],
  },
  {
    title: 'THẢM',
    query: 'tham',
    data: [],
  },
  {
    title: 'TÚI',
    query: 'tui',
    data: [],
  },
  {
    title: 'GIỎ ĐỰNG ĐỒ',
    query: 'gio-dung-do',
    data: [],
  },
  {
    title: 'KHAY GIỎ',
    query: 'khay-gio',
    data: [],
  },
  {
    title: 'QUẠT',
    query: 'quat',
    data: [],
  },
  {
    title: 'DÉP GUỐC',
    query: 'dep-guoc',
    data: [],
  },
  {
    title: 'GIỎ TRE TRUNG THU - TẾT',
    query: 'gio-tre-trung-thu-tet',
    data: [],
  },
  {
    title: 'DECOR CHO BÉ',
    query: 'decor-cho-be',
    data: [],
  },
  {
    title: 'GIỎ ĐỰNG HÀNH TỎI',
    query: 'gio-dung-hanh-toi',
    data: [],
  },
  {
    title: 'Khay đựng đồ',
    query: 'decor-cho-be',
    data: [],
  },
  {
    title: 'ĐỒ NOEL',
    query: 'do-noel',
    data: [],
  },
  {
    title: 'CHAO ĐÈN',
    query: 'chao-den',
    data: [],
  },
  {
    title: 'NỘI THẤT',
    query: 'noi-that',
    data: [],
  },
];

export const appDataSlice = createSlice({
  name: 'appData',
  initialState,
  reducers: {
    setAppData: (_state, action) => {
      return action.payload;
    },
  },
});

export const { setAppData } = appDataSlice.actions;

export default appDataSlice.reducer;
