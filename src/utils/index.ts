export const  removeVietnameseTones = (str: string) =>{
  str = str.replace(/[\u0300-\u036f]/g, ''); // Xóa dấu phụ
  str = str.replace(/Đ/g, 'D');
  str = str.replace(/đ/g, 'd');
  str = str.normalize('NFD'); // Chuẩn hóa Unicode để phân tách các dấu từ ký tự
  str = str.replace(/[\u0300-\u036f]/g, ''); // Xóa dấu
  str = str.replace(/[^a-zA-Z0-9 ]/g, ''); // Xóa các ký tự không phải là chữ cái hoặc số
  return str;
}


export const getQueryParameterFromName = (name: string) => {
    return removeVietnameseTones(name).replaceAll('  ', " ").replaceAll(' ', '-')
}


export const chunkArray = (arr: Array<any>, size: number) =>
  Array.from({ length: Math.ceil(arr.length / size) }, (_v, i) =>
    arr.slice(i * size, i * size + size),
  );

export const getMoney = (x: any) =>
  (x = x.toLocaleString('vi', { style: 'currency', currency: 'VND' }));
