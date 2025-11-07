import { useParams, Link, useNavigate } from 'react-router-dom';
import { formations } from '../data/formationsData';
import { theoryData } from '../data/theoryData';

function TheoryPage() {
  const { formationKey } = useParams();
  const navigate = useNavigate();
  
  const formation = formations.find(f => f.key === formationKey);
  const theory = theoryData[formationKey];

  if (!formation || !theory) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-slate-900 to-slate-800 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-white mb-4">Không tìm thấy nội dung</h2>
          <Link to="/" className="text-blue-400 hover:underline">
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 relative overflow-hidden">
      {/* Traditional Vietnamese clouds scattered randomly */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <img src="/src/assets/cloud.png" alt="cloud" className="absolute top-10 left-20 w-32 opacity-40 animate-float" style={{animationDelay: '0s', animationDuration: '20s'}} />
        <img src="/src/assets/cloud.png" alt="cloud" className="absolute top-32 right-32 w-40 opacity-30 animate-float" style={{animationDelay: '2s', animationDuration: '25s', transform: 'scaleX(-1)'}} />
        <img src="/src/assets/cloud.png" alt="cloud" className="absolute top-1/4 left-10 w-28 opacity-35 animate-float" style={{animationDelay: '4s', animationDuration: '22s'}} />
        <img src="/src/assets/cloud.png" alt="cloud" className="absolute top-1/3 right-16 w-36 opacity-25 animate-float" style={{animationDelay: '1s', animationDuration: '28s'}} />
        <img src="/src/assets/cloud.png" alt="cloud" className="absolute top-20 left-1/2 w-32 opacity-30 animate-float" style={{animationDelay: '3s', animationDuration: '24s', transform: 'scaleX(-1)'}} />
        <img src="/src/assets/cloud.png" alt="cloud" className="absolute bottom-1/3 left-1/4 w-36 opacity-35 animate-float" style={{animationDelay: '5s', animationDuration: '26s'}} />
        <img src="/src/assets/cloud.png" alt="cloud" className="absolute bottom-1/4 right-1/3 w-40 opacity-28 animate-float" style={{animationDelay: '2.5s', animationDuration: '23s', transform: 'scaleX(-1)'}} />
        <img src="/src/assets/cloud.png" alt="cloud" className="absolute top-24 left-1/3 w-30 opacity-32 animate-float" style={{animationDelay: '1.5s', animationDuration: '21s'}} />
        <img src="/src/assets/cloud.png" alt="cloud" className="absolute top-1/2 left-2/3 w-34 opacity-27 animate-float" style={{animationDelay: '3.5s', animationDuration: '27s'}} />
        <img src="/src/assets/cloud.png" alt="cloud" className="absolute bottom-20 left-1/2 w-38 opacity-33 animate-float" style={{animationDelay: '4.5s', animationDuration: '29s', transform: 'scaleX(-1)'}} />
      </div>
      
      {/* Subtle amber overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{background: 'radial-gradient(ellipse at center, transparent 0%, rgba(217, 119, 6, 0.05) 100%)'}}></div>

      {/* Header with enhanced gradient */}
      <div className={`relative bg-gradient-to-r ${formation.color} py-16 shadow-2xl overflow-hidden z-10`}>
        {/* Animated background pattern */}
        <div className="absolute inset-0 opacity-10">
          <div className="absolute top-0 left-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
          <div className="absolute bottom-0 right-0 w-80 h-80 bg-white rounded-full blur-3xl animate-float" style={{animationDelay: '1s'}}></div>
        </div>
        
        <div className="container mx-auto px-4 relative z-10 max-w-6xl">
          <button
            onClick={() => navigate(-1)}
            className="group text-white hover:bg-white/30 px-6 py-3 rounded-xl mb-8 transition-all font-semibold flex items-center gap-2 backdrop-blur-sm border-2 border-white/40 hover:scale-105"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Quay lại
          </button>
          <div className="flex flex-col md:flex-row items-center gap-8 animate-fade-in">
            <div className="relative">
              <div className="absolute inset-0 bg-white/20 rounded-full blur-2xl animate-pulse"></div>
              <span className="relative text-8xl md:text-9xl animate-float drop-shadow-2xl">{formation.icon}</span>
            </div>
            <div className="flex-1 text-center md:text-left">
              <h1 className="text-5xl md:text-7xl font-black text-white mb-4 tracking-tight drop-shadow-lg">
                {theory.title}
              </h1>
              <div className="flex items-center gap-3 text-white/95 justify-center md:justify-start">
                <span className="text-2xl">📅</span>
                <p className="text-xl md:text-2xl font-semibold bg-white/10 backdrop-blur-sm px-6 py-2 rounded-full border border-white/20">
                  {formation.period}
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Content */}
      <div className="container mx-auto px-4 py-16 max-w-6xl relative z-10">
        <div className="bg-white/95 backdrop-blur-xl rounded-3xl shadow-xl p-8 md:p-12 animate-slide-up border border-white/20">
          {theory.sections.map((section, index) => (
            <div key={index} className="mb-12 last:mb-0">
              <div className="flex items-center gap-4 mb-8 group">
                <div className={`w-2 h-14 bg-gradient-to-b ${formation.color} rounded-full shadow-md group-hover:scale-110 transition-transform`}></div>
                <h2 className="text-3xl md:text-4xl font-bold text-gray-800 tracking-tight">
                  {section.heading}
                </h2>
              </div>
              <div className="prose prose-lg max-w-none pl-6 md:pl-8">
                {(() => {
                  const lines = section.content.split('\n');
                  let bulletBuffer = [];
                  const elements = [];
                  
                  lines.forEach((paragraph, pIndex) => {
                    // Handle bold text **text**
                    if (paragraph.startsWith('**') && paragraph.endsWith('**')) {
                      // Flush bullet buffer first
                      if (bulletBuffer.length > 0) {
                        elements.push(
                          <p key={`bullets-${pIndex}`} className="text-gray-700 mb-4 leading-relaxed text-lg text-left">
                            {bulletBuffer.join(' ')}
                          </p>
                        );
                        bulletBuffer = [];
                      }
                      
                      elements.push(
                        <h3 key={pIndex} className="text-2xl font-bold text-gray-800 mt-6 mb-3 flex items-center gap-2">
                          <span className="text-blue-500">▸</span>
                          {paragraph.replace(/\*\*/g, '')}
                        </h3>
                      );
                    }
                    // Handle bullet points - collect them
                    else if (paragraph.startsWith('• ')) {
                      bulletBuffer.push(paragraph.substring(2).trim());
                    }
                    // Handle arrows
                    else if (paragraph.includes('→')) {
                      // Flush bullet buffer first
                      if (bulletBuffer.length > 0) {
                        elements.push(
                          <p key={`bullets-${pIndex}`} className="text-gray-700 mb-5 leading-relaxed text-lg">
                            {bulletBuffer.join(' ')}
                          </p>
                        );
                        bulletBuffer = [];
                      }
                      
                      elements.push(
                        <div key={pIndex} className="my-5 p-5 bg-gradient-to-r from-blue-50/70 via-purple-50/70 to-pink-50/70 rounded-xl border-l-3 border-blue-400 shadow-sm hover:shadow-md transition-shadow">
                          <p className="text-blue-700 font-semibold text-lg leading-relaxed flex items-start gap-2">
                            <span className="text-xl">→</span>
                            <span>{paragraph.replace('→', '').trim()}</span>
                          </p>
                        </div>
                      );
                    }
                    // Handle checkmark/cross
                    else if (paragraph.startsWith('✓') || paragraph.startsWith('✗')) {
                      // Flush bullet buffer first
                      if (bulletBuffer.length > 0) {
                        elements.push(
                          <p key={`bullets-${pIndex}`} className="text-gray-700 mb-5 leading-relaxed text-lg">
                            {bulletBuffer.join(' ')}
                          </p>
                        );
                        bulletBuffer = [];
                      }
                      
                      elements.push(
                        <div key={pIndex} className={`my-3 p-4 rounded-lg ${paragraph.startsWith('✓') ? 'bg-green-50/70 border-l-3 border-green-400' : 'bg-red-50/70 border-l-3 border-red-400'}`}>
                          <p className={`text-lg font-medium leading-relaxed ${paragraph.startsWith('✓') ? 'text-green-700' : 'text-red-700'}`}>
                            {paragraph}
                          </p>
                        </div>
                      );
                    }
                    // Regular paragraph
                    else if (paragraph.trim()) {
                      // Flush bullet buffer first
                      if (bulletBuffer.length > 0) {
                        elements.push(
                          <p key={`bullets-${pIndex}`} className="text-gray-700 mb-5 leading-relaxed text-lg">
                            {bulletBuffer.join(' ')}
                          </p>
                        );
                        bulletBuffer = [];
                      }
                      
                      elements.push(
                        <p key={pIndex} className="text-gray-700 mb-4 leading-relaxed text-lg">
                          {paragraph}
                        </p>
                      );
                    }
                  });
                  
                  // Flush any remaining bullets
                  if (bulletBuffer.length > 0) {
                    elements.push(
                      <p key="bullets-final" className="text-gray-700 mb-5 leading-relaxed text-lg">
                        {bulletBuffer.join(' ')}
                      </p>
                    );
                  }
                  
                  return elements;
                })()}
              </div>
            </div>
          ))}
        </div>

        {/* Navigation buttons with enhanced design */}
        <div className="mt-10 flex gap-5 justify-center flex-wrap">
          <Link
            to="/"
            className="group px-8 py-4 bg-amber-100/80 hover:bg-amber-200/80 text-amber-900 rounded-xl font-semibold transition-all shadow-lg hover:shadow-xl border-2 border-amber-300 hover:border-amber-400 flex items-center gap-2 hover:scale-105"
          >
            <span className="text-xl group-hover:-translate-x-1 transition-transform">←</span>
            <span>Trang chủ</span>
          </Link>
          <Link
            to={`/quiz/${formationKey}`}
            className={`group px-8 py-4 bg-gradient-to-r ${formation.color} text-white rounded-xl font-semibold hover:shadow-xl transition-all shadow-lg flex items-center gap-2 border-2 border-amber-200/40 hover:scale-105`}
          >
            <span>Làm bài trắc nghiệm</span>
            <span className="text-xl group-hover:translate-x-1 transition-transform">→</span>
          </Link>
        </div>
      </div>
    </div>
  );
}

export default TheoryPage;
