import { createSlice } from '@reduxjs/toolkit';
export interface IAppDataItem{
  title: string
  query: string
  data: Array<any>
}
const initialState: Array<IAppDataItem> = [
  {
    title: 'SẢN PHẨM BÁN CHẠY',
    query: 'san-pham-ban-chay',
    data: [
      {
        img: './images/./product/sp9.png',
        name: 'Bàn Khảm Trai Cao Cấp : ms 001',
      },
      {
        img: './images/./product/sp10.png',

        name: 'Bàn Khảm Trai Cao Cấp : ms 001',
      },
      {
        img: './images/./product/sp11.png',
        name: 'Bàn Khảm Trai Cao Cấp : ms 001',
      },
      {
        img: './images/./product/sp12.png',
        name: 'Bàn Khảm Trai Cao Cấp : ms 001',
      },
      {
        img: './images/./product/sp13.png',
        name: 'Bàn Khảm Trai Cao Cấp : ms 001',
      },
      {
        img: './images/./product/sp14.png',
        name: 'Bàn Khảm Trai Cao Cấp : ms 001',
      },
      {
        img: './images/./product/sp1.png',
        name: 'Bàn Khảm Trai Cao Cấp : ms 001',
      },
      {
        img: './images/./product/sp1.png',
        name: 'Bàn Khảm Trai Cao Cấp : ms 001',
      },
    ],
  },
  {
    title: 'SET TREO TƯỜNG',
    query: 'set-treo-tuong',
    data: window.SetTreoTuong,
  },
  {
    title: 'THẢM',
    query: 'tham',
    data: window.Tham,
  },
  {
    title: 'TÚI',
    query: 'tui',
    data: window.Tui,
  },
  {
    title: 'GIỎ ĐỰNG ĐỒ',
    query: 'gio-dung-do',
    data: window.GioDungDo,
  },
  {
    title: 'KHAY GIỎ',
    query: 'khay-gio',
    data: window.KhayGio,
  },
  {
    title: 'QUẠT',
    query: 'quat',
    data: window.Quat,
  },
  {
    title: 'DÉP GUỐC',
    query: 'dep-guoc',
    data: window.DepGuoc,
  },
  {
    title: 'GIỎ TRE TRUNG THU - TẾT',
    query: 'gio-tre-trung-thu-tet',
    data: window.GioTreTrungThuTet,
  },
  {
    title: 'DECOR CHO BÉ',
    query: 'decor-cho-be',
    data: window.DecorCoBe,
  },
  {
    title: 'GIỎ ĐỰNG HÀNH TỎI',
    query: 'gio-dung-hanh-toi',
    data: window.GioDungHanhToi_TreoCay,
  },
  {
    title: 'Khay đựng đồ',
    query: 'khay-dung-do',
    data: window.KhayDungDo,
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
