/** @type {import('tailwindcss').Config} */
export default {
  // Proje içinde Tailwind sınıflarının taranacağı dosya yolları
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // TASARIM SİSTEMİ RENK PALETİ
      colors: {
        // Marka Ana Renkleri
        'bucheen-orange': '#FF7A59',      // Ana aksiyon rengi (Butonlar vb.)
        'bucheen-logo-purple': '#7868E6', // Logodaki ikonik mor tonu
        'bucheen-navy': '#1E1B4B',        // Koyu varyasyonlar için lacivert

        // Metin ve Gri Tonları
        'bucheen-text': '#2D2D2D',        // Ana gövde metin rengi
        'bucheen-gray': '#727272',        // Yardımcı metinler ve açıklamalar

        // Bölüm Özel Arka Plan Renkleri (Figma Tasarımına Sadık)
        'bucheen-popular-bg': '#FFF8F7',  // Most Popular bölümü şeftali beyazı
        'bucheen-footer-bg': '#FFF8F7',   // Alt bilgi (Footer) arka planı

        // Yumuşak Dekoratif Renkler
        'bucheen-light-orange': '#FFF5F2', // Hover efektleri ve soft arka planlar
        'bucheen-purple': '#A19BFF',      // Yardımcı mor tonu
        'bucheen-beige': '#FEEEDB',       // Elips ve dekoratif halka detayları
      },

      // Yazı Tipi Ailesi
      fontFamily: {
        'poppins': ['Poppins', 'sans-serif'],
      },
    },
  },
  // Ekstra eklentiler (İhtiyaç halinde buraya eklenir)
  plugins: [],
}