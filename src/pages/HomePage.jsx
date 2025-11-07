import { Link } from 'react-router-dom';
import { formations } from '../data/formationsData';

function HomePage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Traditional Vietnamese clouds scattered randomly */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        {/* Cloud 1 - Top left */}
        <img 
          src="/src/assets/cloud.png" 
          alt="cloud"
          className="absolute top-10 left-20 w-32 opacity-40 animate-float"
          style={{animationDelay: '0s', animationDuration: '20s'}}
        />
        {/* Cloud 2 - Top right */}
        <img 
          src="/src/assets/cloud.png" 
          alt="cloud"
          className="absolute top-32 right-32 w-40 opacity-30 animate-float"
          style={{animationDelay: '2s', animationDuration: '25s', transform: 'scaleX(-1)'}}
        />
        {/* Cloud 3 - Middle left */}
        <img 
          src="/src/assets/cloud.png" 
          alt="cloud"
          className="absolute top-1/4 left-10 w-28 opacity-35 animate-float"
          style={{animationDelay: '4s', animationDuration: '22s'}}
        />
        {/* Cloud 4 - Middle right */}
        <img 
          src="/src/assets/cloud.png" 
          alt="cloud"
          className="absolute top-1/3 right-16 w-36 opacity-25 animate-float"
          style={{animationDelay: '1s', animationDuration: '28s'}}
        />
        {/* Cloud 5 - Center top */}
        <img 
          src="/src/assets/cloud.png" 
          alt="cloud"
          className="absolute top-20 left-1/2 w-32 opacity-30 animate-float"
          style={{animationDelay: '3s', animationDuration: '24s', transform: 'scaleX(-1)'}}
        />
        {/* Cloud 6 - Lower left */}
        <img 
          src="/src/assets/cloud.png" 
          alt="cloud"
          className="absolute bottom-1/3 left-1/4 w-36 opacity-35 animate-float"
          style={{animationDelay: '5s', animationDuration: '26s'}}
        />
        {/* Cloud 7 - Lower right */}
        <img 
          src="/src/assets/cloud.png" 
          alt="cloud"
          className="absolute bottom-1/4 right-1/3 w-40 opacity-28 animate-float"
          style={{animationDelay: '2.5s', animationDuration: '23s', transform: 'scaleX(-1)'}}
        />
        {/* Cloud 8 - Top center-left */}
        <img 
          src="/src/assets/cloud.png" 
          alt="cloud"
          className="absolute top-24 left-1/3 w-30 opacity-32 animate-float"
          style={{animationDelay: '1.5s', animationDuration: '21s'}}
        />
        {/* Cloud 9 - Middle center */}
        <img 
          src="/src/assets/cloud.png" 
          alt="cloud"
          className="absolute top-1/2 left-2/3 w-34 opacity-27 animate-float"
          style={{animationDelay: '3.5s', animationDuration: '27s'}}
        />
        {/* Cloud 10 - Bottom center */}
        <img 
          src="/src/assets/cloud.png" 
          alt="cloud"
          className="absolute bottom-20 left-1/2 w-38 opacity-33 animate-float"
          style={{animationDelay: '4.5s', animationDuration: '29s', transform: 'scaleX(-1)'}}
        />
      </div>

      {/* Subtle amber overlay for antique feel */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{
        background: 'radial-gradient(ellipse at center, transparent 0%, rgba(217, 119, 6, 0.05) 100%)'
      }}></div>

      {/* Header */}
      <div className="w-full py-12 relative z-10">
        <div className="text-center mb-16 animate-fade-in px-4">
          <div className="inline-block mb-6">
            <div className="text-6xl md:text-8xl mb-4 animate-float">🇻🇳</div>
          </div>
          <h1 className="text-5xl md:text-7xl font-black text-transparent bg-clip-text bg-gradient-to-r from-amber-800 via-orange-700 to-amber-900 mb-4 tracking-tight">
            CÁC HÌNH THÁI KINH TẾ - XÃ HỘI
          </h1>
          <h2 className="text-3xl md:text-4xl font-bold text-amber-900 mb-6 tracking-wide">
            Ở VIỆT NAM
          </h2>
          <div className="flex items-center justify-center gap-3 mb-6">
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-amber-600 to-transparent rounded-full"></div>
            <span className="text-xl text-amber-700">✦</span>
            <div className="h-1 w-20 bg-gradient-to-r from-transparent via-orange-600 to-transparent rounded-full"></div>
          </div>
          <p className="text-xl md:text-2xl text-amber-800 max-w-2xl mx-auto leading-relaxed">
            Hành trình qua <span className="text-orange-700 font-semibold">5 giai đoạn</span> phát triển lịch sử đầy ấn tượng
          </p>
        </div>

        {/* Timeline Overview - Always visible */}
        <div className="max-w-6xl mx-auto mb-16 px-4">
          <div className="bg-gradient-to-r from-amber-100/80 via-yellow-100/80 to-orange-100/80 backdrop-blur-sm rounded-2xl p-8 shadow-xl border-2 border-amber-300/50">
            <h3 className="text-2xl font-bold text-amber-900 mb-6 text-center flex items-center justify-center gap-3">
              Dòng thời gian lịch sử
            </h3>
            <div className="relative flex flex-col md:flex-row items-center justify-between gap-8 md:gap-4">
              {formations.map((formation, index) => (
                <div key={formation.id} className="flex flex-col items-center text-center flex-1 relative z-10">
                  <div className={`w-20 h-20 rounded-full bg-gradient-to-r ${formation.color} border-4 border-amber-200 shadow-lg flex items-center justify-center mb-3 hover:scale-110 transition-transform overflow-hidden`}>
                    <img 
                      src={`/src/assets/Image/${formation.id}.png`} 
                      alt={formation.name}
                      className="w-full h-full object-cover"
                    />
                  </div>
                  <p className="text-xs font-semibold text-amber-700 mb-1">{formation.period}</p>
                  <p className="text-sm font-bold text-amber-900">{formation.name}</p>
                  
                  {/* Connecting line - hidden on mobile, shown on desktop */}
                  {index < formations.length - 1 && (
                    <div className="hidden md:block absolute left-1/2 top-10 w-full h-0.5">
                      <div className="relative w-full h-full">
                        <div className="absolute left-10 right-0 h-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 opacity-50"></div>
                        <div className="absolute left-10 right-0 h-full bg-gradient-to-r from-amber-600 via-orange-600 to-amber-600 opacity-50 animate-pulse"></div>
                      </div>
                    </div>
                  )}
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Timeline */}
        <div className="max-w-6xl mx-auto">
          <div className="relative">
            {/* Vertical line with gradient */}
            <div className="absolute left-1/2 transform -translate-x-1/2 h-full w-1 bg-gradient-to-b from-amber-600 via-orange-600 to-amber-700 hidden md:block opacity-50"></div>

            {formations.map((formation, index) => (
              <div
                key={formation.id}
                className={`mb-20 flex flex-col md:flex-row items-center animate-slide-up ${
                  index % 2 === 0 ? 'md:flex-row' : 'md:flex-row-reverse'
                }`}
                style={{animationDelay: `${index * 0.15}s`}}
              >
                {/* Content Card */}
                <div className="w-full md:w-5/12 mb-6 md:mb-0">
                  <div
                    className={`group relative bg-gradient-to-br from-amber-50/90 to-yellow-50/90 backdrop-blur-xl rounded-3xl p-8 shadow-2xl border-2 border-amber-300/50 hover:scale-105 hover:border-amber-400 transition-all duration-500 hover:shadow-amber-500/30`}
                  >
                    {/* Glow effect on hover */}
                    <div className={`absolute inset-0 rounded-3xl bg-gradient-to-r ${formation.color} opacity-0 group-hover:opacity-10 blur-xl transition-opacity duration-500`}></div>
                    
                    <div className="relative z-10">
                      <div className="text-center mb-6">
                        <span className="text-6xl inline-block animate-float" style={{animationDelay: `${index * 0.3}s`}}>{formation.icon}</span>
                        <div className="flex items-center justify-center gap-2 mt-3">
                          <span className="text-sm text-amber-700">📅</span>
                          <p className="text-sm text-amber-800 font-semibold">{formation.period}</p>
                        </div>
                      </div>
                      <h3 className="text-3xl font-black text-amber-900 mb-4 tracking-tight text-center">
                        {formation.name}
                      </h3>
                      
                      <p className="text-amber-800 mb-8 leading-relaxed text-base">
                        {formation.description}
                      </p>
                      
                      <div className="flex gap-4">
                        <Link
                          to={`/theory/${formation.key}`}
                          className={`flex-1 relative overflow-hidden bg-gradient-to-r ${formation.color} text-white px-6 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 text-center group/btn border-2 border-amber-200/30`}
                        >
                          <span className="relative z-10">
                            Lý thuyết
                          </span>
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                        </Link>
                        <Link
                          to={`/quiz/${formation.key}`}
                          className={`flex-1 relative overflow-hidden bg-gradient-to-r ${formation.color} text-white px-6 py-4 rounded-xl font-bold hover:shadow-2xl transition-all duration-300 text-center group/btn border-2 border-amber-200/30`}
                        >
                          <span className="relative z-10">
                            Trắc nghiệm
                          </span>
                          <div className="absolute inset-0 bg-white/20 transform scale-x-0 group-hover/btn:scale-x-100 transition-transform origin-left duration-300"></div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Center dot with pulse effect */}
                <div className="w-full md:w-2/12 flex justify-center relative">
                  <div className={`w-12 h-12 rounded-full bg-gradient-to-r ${formation.color} border-4 border-amber-200 shadow-2xl z-10 flex items-center justify-center font-bold text-white relative`}>
                    <span>{formation.id}</span>
                    <div className={`absolute inset-0 rounded-full bg-gradient-to-r ${formation.color} animate-ping opacity-30`}></div>
                  </div>
                </div>

                {/* Spacer */}
                <div className="w-full md:w-5/12"></div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Footer */}
      <div className="relative z-10 text-center py-12 border-t-2 border-amber-300/50">
        <div className="mb-4">
          <p className="text-amber-800 text-lg font-semibold">Dự án sản phẩm sáng tạo MLN122</p>
        </div>
        <p className="text-amber-700 text-sm">Group 6 from with ❤️ Nguyễn Hà Phúc</p>
      </div>
    </div>
  );
}

export default HomePage;
