import React from 'react';

/**
 * 1. PROFIL KARTI BİLEŞENİ
 */
const ProfileCard = ({ name, description, bgColor, image, className }) => (
  <div className={`bg-white rounded-[20px] shadow-lg overflow-hidden flex flex-col h-auto min-h-[520px] w-full max-w-[328px] mx-auto transition-transform hover:-translate-y-2 duration-300 ${className}`}>
    <div className={`w-full h-[280px] ${bgColor} relative flex items-end justify-center overflow-hidden`}>
      <img
        src={image}
        alt={name}
        className="w-[85%] h-auto object-contain z-10"
        onError={(e) => { e.target.src = "https://via.placeholder.com/300x300?text=User" }}
      />
    </div>
    <div className="p-8 space-y-4 flex-1">
      <h3 className="text-[24px] font-bold text-[#000026] leading-tight">{name}</h3>
      <p className="text-[#727272] text-[15px] leading-[24px] font-regular">{description}</p>
    </div>
  </div>
);

/**
 * 2. YORUM KARTI BİLEŞENİ
 */
const TestimonialCard = ({ name, role, text }) => (
  <div className="bg-white w-full max-w-[378px] min-h-[278px] p-8 md:p-10 rounded-[16px] shadow-md border border-[#DDDDDD] flex flex-col justify-between mx-auto">
    <div className="space-y-6">
      <div className="flex items-center space-x-4">
        <div className="w-12 h-12 bg-[#C4C4C4] rounded-full shrink-0"></div>
        <div>
          <h4 className="text-[16px] font-bold text-[#262626] mb-1">{name}</h4>
          <p className="text-[12px] text-[#727272] font-medium">{role}</p>
        </div>
      </div>
      <p className="text-[#727272] text-[16px] leading-[24px] italic">"{text}"</p>
    </div>
    <div className="flex text-[#FFD700] text-sm tracking-widest pt-4">★★★★★</div>
  </div>
);

function App() {
  return (
    <div className="min-h-screen bg-slate-100 font-poppins text-bucheen-text py-4 md:py-12 px-4 selection:bg-bucheen-orange selection:text-white overflow-x-hidden">

      {/* ANA KONTEYNER */}
      <div className="max-w-[1440px] mx-auto bg-white shadow-2xl rounded-[1.5rem] md:rounded-[3rem] overflow-hidden border border-gray-100">

        {/* --- NAVBAR --- */}
        <nav className="flex flex-col md:flex-row justify-between items-center px-6 md:px-20 py-6 md:py-10 space-y-6 md:space-y-0">
          <div className="text-[32px] font-bold">
            <span className="text-bucheen-logo-purple font-black">Bu</span><span className="text-bucheen-orange font-black">cheen</span>
          </div>
          <div className="hidden lg:flex space-x-10 text-[16px] font-medium text-bucheen-gray">
            <a href="#" className="text-bucheen-orange font-semibold">Home</a>
            <a href="#" className="hover:text-bucheen-orange transition-colors">Service</a>
            <a href="#" className="hover:text-bucheen-orange transition-colors">About</a>
            <a href="#" className="hover:text-bucheen-orange transition-colors">Pricing</a>
            <a href="#" className="hover:text-bucheen-orange transition-colors">Support</a>
          </div>
          <div className="flex items-center space-x-4">
            <button className="text-bucheen-orange border border-bucheen-orange px-8 py-3 rounded-full text-sm font-bold hover:bg-bucheen-light-orange transition-colors">Sign In</button>
            <button className="bg-bucheen-orange text-white px-8 py-3 rounded-full text-sm font-bold shadow-lg shadow-orange-100 hover:opacity-90 transition-opacity">Sign Up</button>
          </div>
        </nav>

        {/* --- 1. HERO SECTION --- */}
        <section className="relative px-6 md:px-20 pt-10 pb-16 md:pb-24 grid grid-cols-1 md:grid-cols-2 gap-10 items-center overflow-hidden">
          <div className="absolute inset-0 z-0 bg-[#FFB9AF]/10 h-full w-full"></div>
          <div className="space-y-8 md:space-y-10 z-20 text-center md:text-left">
            <h1 className="text-4xl md:text-[56px] font-semibold leading-[110%] tracking-tight text-bucheen-text">
              Find <span className="text-bucheen-orange font-bold">Match Now</span><br />
              and Grow Your<br />Feelings
            </h1>
            <p className="text-[#727272] text-[16px] leading-[32px] max-w-lg mx-auto md:mx-0">There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful.</p>
            <div className="flex flex-col sm:flex-row bg-white shadow-xl rounded-2xl p-2 items-center w-full max-w-[550px] mx-auto md:mx-0">
              <div className="w-full sm:flex-1 px-6 py-4 text-[14px] text-bucheen-gray border-b sm:border-b-0 sm:border-r border-gray-100 font-medium">Male ⌄</div>
              <div className="w-full sm:flex-1 px-6 py-4 text-[14px] text-bucheen-gray font-medium">Female ⌄</div>
              <button className="w-full sm:w-auto bg-bucheen-orange text-white px-10 py-4 rounded-xl font-bold text-sm shadow-md hover:bg-opacity-90 transition-all">Find Now</button>
            </div>
          </div>
          <div className="relative z-20 flex justify-center items-center">
            <img src="./phone_screen.png" alt="Hero Mockup" className="max-w-[80%] md:max-w-full h-auto object-contain" />
          </div>
        </section>

        {/* --- 2. HİS GELİŞTİRME BÖLÜMÜ --- */}
        <section className="px-6 md:px-20 py-20 md:py-32 grid grid-cols-1 md:grid-cols-2 gap-16 items-center border-t border-gray-50 overflow-hidden">
          <div className="relative flex justify-center items-center h-[300px] md:h-[450px] w-full">
            <div className="absolute w-[280px] h-[280px] md:w-[440px] md:h-[440px] border border-[#FFB9AF] opacity-30 rounded-full md:-left-20"></div>
            <div className="absolute w-[220px] h-[220px] md:w-[360px] md:h-[360px] border border-[#FFB9AF] opacity-50 rounded-full md:-left-10 top-10"></div>
            <div className="absolute w-[180px] h-[180px] md:w-[280px] md:h-[280px] border border-[#FFB9AF] opacity-70 rounded-full left-10 top-20"></div>
          </div>
          <div className="space-y-8 text-center md:text-left">
            <h2 className="text-3xl md:text-[40px] font-semibold text-[#262626] leading-tight tracking-tight">Find Match Now and <br /> Develop Your Feelings</h2>
            <p className="text-[#727272] text-[16px] leading-[24px] max-w-[527px] mx-auto md:mx-0">There are so many platforms from this Pokan to make a task manager manage all your time. and we have it all to get you to be successful</p>
            <button className="bg-bucheen-orange text-white px-10 py-4 rounded-xl font-bold text-sm shadow-lg">Read More</button>
          </div>
        </section>

        {/* --- 3. NASIL ÇALIŞIR? --- */}
        <section className="px-6 md:px-20 py-20 md:py-32 border-t border-gray-50 bg-white">
          <div className="max-w-[1020px] mx-auto grid grid-cols-1 md:grid-cols-2 gap-20 items-center">
            <div className="space-y-12 text-center md:text-left">
              <h2 className="text-3xl md:text-[40px] font-semibold text-[#262626] leading-tight tracking-tight">How It Works To Find Your Relationship</h2>
              <div className="space-y-10">
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-16 h-16 bg-[#FFE5E0] rounded-full flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A59" strokeWidth="2"><circle cx="11" cy="11" r="8"></circle><line x1="21" y1="21" x2="16.65" y2="16.65"></line></svg>
                  </div>
                  <p className="text-[#727272] text-[16px] leading-[24px] pt-2">Find your dating relationship in app and waiting until you get a notification. have a good relationship its started</p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-16 h-16 bg-[#FFE5E0] rounded-full flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A59" strokeWidth="2"><path d="M20.84 4.61a5.5 5.5 0 0 0-7.78 0L12 5.67l-1.06-1.06a5.5 5.5 0 0 0-7.78 7.78l1.06 1.06L12 21.23l8.78-8.78 1.06-1.06a5.5 5.5 0 0 0 0-7.78z"></path></svg>
                  </div>
                  <p className="text-[#727272] text-[16px] leading-[24px] pt-2">Dating with benefits and you redefine the expectations of a perfect relationship with your partner</p>
                </div>
                <div className="flex flex-col md:flex-row items-center md:items-start space-y-4 md:space-y-0 md:space-x-6">
                  <div className="w-16 h-16 bg-[#FFE5E0] rounded-full flex items-center justify-center shrink-0">
                    <svg width="24" height="24" viewBox="0 0 24 24" fill="none" stroke="#FF7A59" strokeWidth="2"><path d="M20 21v-2a4 4 0 0 0-4-4H8a4 4 0 0 0-4 4v2"></path><circle cx="12" cy="7" r="4"></circle><polyline points="16 11 18 13 22 9"></polyline></svg>
                  </div>
                  <p className="text-[#727272] text-[16px] leading-[24px] pt-2">Ideal relationship makes your online dating relationship run more smoothly using this app</p>
                </div>
              </div>
            </div>
            <div className="hidden md:block h-[450px] w-full bg-white"></div>
          </div>
        </section>

        {/* --- 4. POPÜLER PROFILLER --- */}
        <section className="bg-bucheen-popular-bg py-20 md:py-48 px-6 md:px-20 border-t border-gray-50 flex flex-col items-center">
          <div className="text-center space-y-6 mb-20 max-w-[670px]">
            <h2 className="text-3xl md:text-[40px] font-medium text-[#000026] tracking-tight">Most Popular In This Week</h2>
            <p className="text-[#727272] text-[16px] leading-[24px]">There are so many platforms from this Pokan to make a task manager manage all your time, the data needed is very useful. and we have it all to get you to be successful</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-full max-w-[1100px]">
            <ProfileCard name="Javar Saripun" description="A man who is ideal for all women, Javar is very handsome and attractive with a very friendly and kind nature. Javar is also a person who excels in the field of music." bgColor="bg-[#FFD6D0]" image="./javar.png" className="md:mt-0" />
            <ProfileCard name="Fausiah Fera" description="Fera is a student from one of the famous universities in Tokyo and she is a very famous and very beautiful woman. and she is so kind." bgColor="bg-[#C1B9FF]" image="./fera.png" className="md:mt-16" />
            <ProfileCard name="Shreryl Olap" description="Olap is a very sweet woman with curly and blonde hair which makes her very beautiful and sweet. He works in the field of music, which is famous in Indonesia." bgColor="bg-[#FFEEDB]" image="./olap.png" className="md:mt-32" />
          </div>
        </section>

        {/* --- 5. MÜŞTERİ YORUMLARI --- */}
        <section className="px-6 md:px-20 py-20 md:py-32 bg-white flex flex-col items-center">
          <div className="text-center mb-16 md:mb-24 space-y-6 max-w-[700px]">
            <h2 className="text-3xl md:text-[40px] font-semibold text-[#262626] leading-tight tracking-tight">What Our Customers Have To Say</h2>
            <p className="text-[#727272] text-[16px] leading-[32px]">Here's what our customers say with Bucheen</p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 w-full">
            <TestimonialCard name="Tasha Wijayanti" role="Curug" text="This Bucheen is so cool, I found the partner I wanted. and it's very easy to use and steady for bcheen. cheers and hopefully many other people can find their partner here" />
            <TestimonialCard name="Sizuka engkol" role="Indonesia" text="Very interesting services are provided to customers, access is very fast and we can also see the development of our partners. and the information provided is accurate and genuine." />
            <TestimonialCard name="Gundam gandim" role="Bulgarian" text="It's crazy that this application can make me find my soul mate very easily and quickly. the information contained in this buceen is very accurate and really real, not a hoax" />
          </div>
        </section>

        {/* --- 6. FOOTER --- */}
        <footer className="bg-bucheen-footer-bg py-16 md:py-24 px-6 md:px-32 border-t border-orange-50/30">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
            <div className="space-y-8 text-center sm:text-left">
              <div className="text-[32px] font-bold italic"><span className="text-bucheen-logo-purple">Bu</span><span className="text-bucheen-orange">cheen</span></div>
              <p className="text-[#727272] text-[16px] leading-[28px]">The most accurate and simplest time tracking for all of you. and we have been serving for more than 4 years and have made you happy</p>
            </div>
            {[
              { title: 'About Us', links: ['Our people', 'Our categories', 'Contact us', 'Testimonial'] },
              { title: 'Product', links: ['Task Mangement', 'Service', 'Task Schedule'] },
              { title: 'Contact us', links: ['(021) 3258 4930', 'Pokan@Hola.com', 'Sukabumi, IDN'] }
            ].map((col, idx) => (
              <div key={idx} className="space-y-8 text-center sm:text-left">
                <h4 className="text-[18px] font-bold text-[#FF806E] uppercase tracking-wider">{col.title}</h4>
                <ul className="space-y-5">
                  {col.links.map((link, lIdx) => (
                    <li key={lIdx}><a href="#" className="text-[#727272] text-[16px] hover:text-bucheen-orange transition-colors duration-200">{link}</a></li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <div className="mt-20 pt-8 border-t border-gray-100 text-center text-bucheen-gray text-sm">
            © 2026 Bucheen Platform. All rights reserved.
          </div>
        </footer>

      </div>
    </div>
  );
}

export default App;