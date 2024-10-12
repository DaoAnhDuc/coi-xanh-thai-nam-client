/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontSize: {
        // Kích thước mặc định
        base: '16px',

        // Tùy chỉnh kích thước chữ cho từng breakpoint
        sm: {
          base: '14px', // Trên màn hình nhỏ (640px)
        },
        md: {
          base: '16px', // Trên màn hình trung bình (768px)
        },
        lg: {
          base: '18px', // Trên màn hình lớn (1024px)
        },
        xl: {
          base: '20px', // Trên màn hình rất lớn (1280px)
        },
      },
    },
  },
  plugins: [],
};
