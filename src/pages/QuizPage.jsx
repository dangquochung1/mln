import { useState } from 'react';
import { useParams, Link, useNavigate } from 'react-router-dom';
import { formations } from '../data/formationsData';
import { quizData } from '../data/quizData';

function QuizPage() {
  const { formationKey } = useParams();
  const navigate = useNavigate();

  const formation = formations.find(f => f.key === formationKey);
  const questions = quizData[formationKey];

  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResult, setShowResult] = useState(false);
  const [showExplanation, setShowExplanation] = useState({});

  if (!formation || !questions) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 flex items-center justify-center">
        <div className="text-center">
          <h2 className="text-3xl text-amber-900 mb-4">Không tìm thấy bài trắc nghiệm</h2>
          <Link to="/" className="text-amber-700 hover:underline font-semibold">
            Quay về trang chủ
          </Link>
        </div>
      </div>
    );
  }

  const handleAnswer = (questionId, answerIndex) => {
    setSelectedAnswers({
      ...selectedAnswers,
      [questionId]: answerIndex
    });
  };

  const handleNext = () => {
    if (currentQuestion < questions.length - 1) {
      setCurrentQuestion(currentQuestion + 1);
    }
  };

  const handlePrev = () => {
    if (currentQuestion > 0) {
      setCurrentQuestion(currentQuestion - 1);
    }
  };

  const handleSubmit = () => {
    setShowResult(true);
  };

  const calculateScore = () => {
    let correct = 0;
    questions.forEach((q) => {
      if (selectedAnswers[q.id] === q.correctAnswer) {
        correct++;
      }
    });
    return correct;
  };

  const toggleExplanation = (questionId) => {
    setShowExplanation({
      ...showExplanation,
      [questionId]: !showExplanation[questionId]
    });
  };

  const resetQuiz = () => {
    setCurrentQuestion(0);
    setSelectedAnswers({});
    setShowResult(false);
    setShowExplanation({});
  };

  if (showResult) {
    const score = calculateScore();
    const percentage = (score / questions.length) * 100;

    return (
      <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-8 relative overflow-hidden">
        {/* Traditional Vietnamese clouds scattered randomly */}
        <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
          <img src="/assets//cloud.png" alt="cloud" className="absolute top-10 left-20 w-32 opacity-40 animate-float" style={{ animationDelay: '0s', animationDuration: '20s' }} />
          <img src="/assets//cloud.png" alt="cloud" className="absolute top-32 right-32 w-40 opacity-30 animate-float" style={{ animationDelay: '2s', animationDuration: '25s', transform: 'scaleX(-1)' }} />
          <img src="/assets//cloud.png" alt="cloud" className="absolute top-1/4 left-10 w-28 opacity-35 animate-float" style={{ animationDelay: '4s', animationDuration: '22s' }} />
          <img src="/assets//cloud.png" alt="cloud" className="absolute top-1/3 right-16 w-36 opacity-25 animate-float" style={{ animationDelay: '1s', animationDuration: '28s' }} />
          <img src="/assets//cloud.png" alt="cloud" className="absolute top-20 left-1/2 w-32 opacity-30 animate-float" style={{ animationDelay: '3s', animationDuration: '24s', transform: 'scaleX(-1)' }} />
          <img src="/assets//cloud.png" alt="cloud" className="absolute bottom-1/3 left-1/4 w-36 opacity-35 animate-float" style={{ animationDelay: '5s', animationDuration: '26s' }} />
          <img src="/assets//cloud.png" alt="cloud" className="absolute bottom-1/4 right-1/3 w-40 opacity-28 animate-float" style={{ animationDelay: '2.5s', animationDuration: '23s', transform: 'scaleX(-1)' }} />
          <img src="/assets//cloud.png" alt="cloud" className="absolute top-24 left-1/3 w-30 opacity-32 animate-float" style={{ animationDelay: '1.5s', animationDuration: '21s' }} />
          <img src="/assets//cloud.png" alt="cloud" className="absolute top-1/2 left-2/3 w-34 opacity-27 animate-float" style={{ animationDelay: '3.5s', animationDuration: '27s' }} />
          <img src="/assets//cloud.png" alt="cloud" className="absolute bottom-20 left-1/2 w-38 opacity-33 animate-float" style={{ animationDelay: '4.5s', animationDuration: '29s', transform: 'scaleX(-1)' }} />
        </div>

        {/* Subtle amber overlay */}
        <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(217, 119, 6, 0.05) 100%)' }}></div>

        <div className="container mx-auto px-4 max-w-4xl relative z-10">
          {/* Header */}
          <div className={`relative bg-gradient-to-r ${formation.color} rounded-3xl p-8 mb-8 text-white shadow-2xl overflow-hidden`}>
            <div className="absolute inset-0 opacity-10">
              <div className="absolute top-0 right-0 w-64 h-64 bg-white rounded-full blur-3xl animate-float"></div>
            </div>
            <div className="relative z-10 text-center">
              <h1 className="text-4xl md:text-5xl font-black mb-3 tracking-tight flex items-center justify-center gap-4">
                <span className="text-5xl animate-float">{formation.icon}</span>
                Kết quả bài trắc nghiệm
              </h1>
              <p className="text-2xl font-medium opacity-90">{formation.name}</p>
            </div>
          </div>

          {/* Score Card with enhanced design */}
          <div className="bg-white rounded-3xl p-10 mb-8 shadow-2xl text-center animate-slide-up border-4 border-gray-100">
            <div className="text-8xl mb-6 animate-float">
              {percentage >= 80 ? '🎉' : percentage >= 60 ? '😊' : percentage >= 40 ? '😐' : '😢'}
            </div>
            <div className={`inline-block bg-gradient-to-r ${formation.color} text-white px-8 py-3 rounded-2xl mb-6 shadow-lg`}>
              <h2 className="text-5xl font-black">
                {score}<span className="text-3xl opacity-80">/{questions.length}</span>
              </h2>
            </div>
            <div className="mb-6">
              <div className="relative w-full h-6 bg-gray-200 rounded-full overflow-hidden mb-3">
                <div
                  className={`h-full bg-gradient-to-r ${formation.color} transition-all duration-1000 relative`}
                  style={{ width: `${percentage}%` }}
                >
                  <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
                </div>
              </div>
              <p className="text-3xl font-bold text-gray-800">
                {percentage.toFixed(1)}%
              </p>
            </div>
            <p className="text-xl text-gray-700 font-medium max-w-md mx-auto leading-relaxed">
              {percentage >= 80 ? '🌟 Xuất sắc! Bạn nắm vững kiến thức!' :
                percentage >= 60 ? '👍 Khá tốt! Hãy ôn thêm một chút.' :
                  percentage >= 40 ? '💪 Cần cố gắng thêm nha!' :
                    '📚 Bạn nên đọc lại lý thuyết nhé!'}
            </p>
          </div>

          {/* Review Answers with enhanced design */}
          <div className="bg-white rounded-3xl p-8 mb-8 shadow-2xl">
            <h3 className="text-3xl font-black text-gray-800 mb-8 flex items-center gap-3">
              Chi tiết từng câu
            </h3>
            {questions.map((q, index) => {
              const userAnswer = selectedAnswers[q.id];
              const isCorrect = userAnswer === q.correctAnswer;

              return (
                <div key={q.id} className="mb-8 pb-8 border-b-2 border-gray-100 last:border-b-0">
                  <div className="flex items-start gap-4 mb-4">
                    <div className={`flex-shrink-0 w-14 h-14 rounded-2xl flex items-center justify-center text-3xl ${isCorrect ? 'bg-green-100' : 'bg-red-100'
                      }`}>
                      {isCorrect ? '✅' : '❌'}
                    </div>
                    <div className="flex-1">
                      <p className="font-bold text-gray-800 mb-3 text-xl leading-relaxed">
                        <span className="text-blue-600">Câu {index + 1}:</span> {q.question}
                      </p>
                      <div className="space-y-2">
                        <div className="p-4 rounded-xl bg-blue-50 border-l-4 border-blue-500">
                          <p className="text-sm font-semibold text-blue-700 mb-1">Bạn đã chọn:</p>
                          <p className="text-gray-800 font-medium">
                            {userAnswer !== undefined ? q.options[userAnswer] : 'Chưa trả lời'}
                          </p>
                        </div>
                        {!isCorrect && (
                          <div className="p-4 rounded-xl bg-green-50 border-l-4 border-green-500">
                            <p className="text-sm font-semibold text-green-700 mb-1">Đáp án đúng:</p>
                            <p className="text-gray-800 font-medium">
                              {q.options[q.correctAnswer]}
                            </p>
                          </div>
                        )}
                      </div>
                      <button
                        onClick={() => toggleExplanation(q.id)}
                        className={`mt-4 px-5 py-2 rounded-xl font-semibold transition-all flex items-center gap-2 ${showExplanation[q.id]
                            ? 'bg-blue-100 text-blue-700 hover:bg-blue-200'
                            : 'bg-gray-100 text-gray-700 hover:bg-gray-200'
                          }`}
                      >
                        <span>{showExplanation[q.id] ? '▼' : '▶'}</span>
                        {showExplanation[q.id] ? 'Ẩn giải thích' : 'Xem giải thích'}
                      </button>
                      {showExplanation[q.id] && (
                        <div className="mt-4 p-5 bg-gradient-to-r from-purple-50 to-blue-50 rounded-2xl border-2 border-purple-200 animate-slide-up">
                          <p className="text-gray-700 leading-relaxed font-medium">
                            💡 <span className="font-bold text-purple-700">Giải thích:</span> {q.explanation}
                          </p>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              );
            })}
          </div>

          {/* Action Buttons with enhanced design */}
          <div className="flex gap-4 justify-center flex-wrap">
            <button
              onClick={resetQuiz}
              className={`group bg-gradient-to-r ${formation.color} text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all shadow-lg flex items-center gap-3`}
            >
              <span className="group-hover:rotate-180 transition-transform duration-500">↻</span>
              Làm lại
            </button>
            <Link
              to={`/theory/${formationKey}`}
              className="group bg-white text-amber-700 border-2 border-amber-300 px-10 py-4 rounded-2xl font-bold transition-all shadow-lg hover:bg-amber-50 flex items-center gap-3"
            >
              Xem lý thuyết
            </Link>
            <Link
              to="/"
              className="group bg-white text-amber-700 border-2 border-amber-300 px-10 py-4 rounded-2xl font-bold transition-all shadow-lg hover:bg-amber-50 flex items-center gap-3"
            >
              <span className="group-hover:-translate-x-1 transition-transform">←</span>
              Trang chủ
            </Link>
          </div>
        </div>
      </div>
    );
  }

  const question = questions[currentQuestion];
  const selectedAnswer = selectedAnswers[question.id];

  return (
    <div className="min-h-screen bg-gradient-to-br from-amber-50 via-yellow-50 to-orange-50 py-8 relative overflow-hidden">
      {/* Traditional Vietnamese clouds scattered randomly */}
      <div className="fixed inset-0 overflow-hidden pointer-events-none z-0">
        <img src="/assets//cloud.png" alt="cloud" className="absolute top-10 left-20 w-32 opacity-40 animate-float" style={{ animationDelay: '0s', animationDuration: '20s' }} />
        <img src="/assets//cloud.png" alt="cloud" className="absolute top-32 right-32 w-40 opacity-30 animate-float" style={{ animationDelay: '2s', animationDuration: '25s', transform: 'scaleX(-1)' }} />
        <img src="/assets//cloud.png" alt="cloud" className="absolute top-1/4 left-10 w-28 opacity-35 animate-float" style={{ animationDelay: '4s', animationDuration: '22s' }} />
        <img src="/assets//cloud.png" alt="cloud" className="absolute top-1/3 right-16 w-36 opacity-25 animate-float" style={{ animationDelay: '1s', animationDuration: '28s' }} />
        <img src="/assets//cloud.png" alt="cloud" className="absolute top-20 left-1/2 w-32 opacity-30 animate-float" style={{ animationDelay: '3s', animationDuration: '24s', transform: 'scaleX(-1)' }} />
        <img src="/assets//cloud.png" alt="cloud" className="absolute bottom-1/3 left-1/4 w-36 opacity-35 animate-float" style={{ animationDelay: '5s', animationDuration: '26s' }} />
        <img src="/assets//cloud.png" alt="cloud" className="absolute bottom-1/4 right-1/3 w-40 opacity-28 animate-float" style={{ animationDelay: '2.5s', animationDuration: '23s', transform: 'scaleX(-1)' }} />
        <img src="/assets//cloud.png" alt="cloud" className="absolute top-24 left-1/3 w-30 opacity-32 animate-float" style={{ animationDelay: '1.5s', animationDuration: '21s' }} />
        <img src="/assets//cloud.png" alt="cloud" className="absolute top-1/2 left-2/3 w-34 opacity-27 animate-float" style={{ animationDelay: '3.5s', animationDuration: '27s' }} />
        <img src="/assets//cloud.png" alt="cloud" className="absolute bottom-20 left-1/2 w-38 opacity-33 animate-float" style={{ animationDelay: '4.5s', animationDuration: '29s', transform: 'scaleX(-1)' }} />
      </div>

      {/* Subtle amber overlay */}
      <div className="fixed inset-0 pointer-events-none z-0" style={{ background: 'radial-gradient(ellipse at center, transparent 0%, rgba(217, 119, 6, 0.05) 100%)' }}></div>

      <div className="container mx-auto px-4 max-w-4xl relative z-10">
        {/* Header with enhanced design */}
        <div className={`relative bg-gradient-to-r ${formation.color} rounded-3xl p-8 mb-8 text-white shadow-2xl overflow-hidden`}>
          {/* Background pattern */}
          <div className="absolute inset-0 opacity-10">
            <div className="absolute top-0 right-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
            <div className="absolute bottom-0 left-0 w-40 h-40 bg-white rounded-full blur-2xl"></div>
          </div>

          <button
            onClick={() => navigate(-1)}
            className="relative z-10 group hover:bg-white/20 px-5 py-3 rounded-xl mb-6 transition-all font-semibold flex items-center gap-2 backdrop-blur-sm border border-white/20"
          >
            <span className="group-hover:-translate-x-1 transition-transform">←</span>
            Quay lại
          </button>
          <div className="relative z-10 flex items-center justify-between flex-wrap gap-4">
            <div className="flex items-center gap-4">
              <span className="text-5xl animate-float">{formation.icon}</span>
              <div>
                <h1 className="text-3xl md:text-4xl font-black mb-1 tracking-tight">
                  Trắc nghiệm
                </h1>
                <p className="text-xl font-medium opacity-90">{formation.name}</p>
              </div>
            </div>
            <div className="text-right bg-white/20 backdrop-blur-sm rounded-2xl px-6 py-3 border border-white/30">
              <p className="text-sm opacity-90 mb-1">Câu hỏi</p>
              <p className="text-4xl font-black">
                {currentQuestion + 1}<span className="text-2xl opacity-70">/{questions.length}</span>
              </p>
            </div>
          </div>
        </div>

        {/* Progress Bar with animation */}
        <div className="mb-8 bg-white/10 backdrop-blur-lg rounded-full h-4 overflow-hidden border border-white/20 shadow-lg">
          <div
            className={`h-full bg-gradient-to-r ${formation.color} transition-all duration-500 relative overflow-hidden`}
            style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
          >
            <div className="absolute inset-0 bg-white/30 animate-pulse"></div>
          </div>
        </div>

        {/* Question Card with enhanced design */}
        <div className="bg-white rounded-3xl p-8 md:p-10 shadow-2xl mb-8 animate-slide-up border-2 border-gray-100">
          <div className="flex items-start gap-4 mb-8">
            <div className={`flex-shrink-0 w-12 h-12 rounded-2xl bg-gradient-to-r ${formation.color} flex items-center justify-center text-white font-black text-xl shadow-lg`}>
              {currentQuestion + 1}
            </div>
            <h2 className="text-2xl md:text-3xl font-bold text-gray-800 leading-tight">
              {question.question}
            </h2>
          </div>

          {/* Image if available */}
          {question.image && (
            <div className="mb-6 rounded-2xl overflow-hidden shadow-lg">
              <img
                src={question.image}
                alt={`Câu hỏi ${currentQuestion + 1}`}
                className="w-full h-auto object-cover max-h-96"
              />
            </div>
          )}

          <div className="space-y-4">
            {question.options.map((option, index) => {
              const isSelected = selectedAnswer === index;

              return (
                <button
                  key={index}
                  onClick={() => handleAnswer(question.id, index)}
                  className={`group w-full text-left p-5 md:p-6 rounded-2xl border-2 transition-all duration-300 ${isSelected
                      ? `border-blue-500 bg-gradient-to-r from-blue-50 to-purple-50 shadow-xl scale-[1.02]`
                      : 'border-gray-200 hover:border-blue-300 hover:bg-gray-50 hover:shadow-lg'
                    }`}
                >
                  <div className="flex items-center gap-4">
                    <div className={`flex-shrink-0 w-8 h-8 rounded-full border-2 flex items-center justify-center transition-all ${isSelected ? 'border-blue-500 bg-blue-500 scale-110' : 'border-gray-300 group-hover:border-blue-400'
                      }`}>
                      {isSelected && (
                        <svg className="w-5 h-5 text-white" fill="currentColor" viewBox="0 0 20 20">
                          <path fillRule="evenodd" d="M16.707 5.293a1 1 0 010 1.414l-8 8a1 1 0 01-1.414 0l-4-4a1 1 0 011.414-1.414L8 12.586l7.293-7.293a1 1 0 011.414 0z" clipRule="evenodd" />
                        </svg>
                      )}
                    </div>
                    <span className={`text-gray-800 font-medium text-lg flex-1 ${isSelected ? 'text-blue-700 font-semibold' : ''}`}>
                      {option}
                    </span>
                  </div>
                </button>
              );
            })}
          </div>
        </div>

        {/* Navigation Buttons with enhanced design */}
        <div className="flex gap-4 justify-between mb-8">
          <button
            onClick={handlePrev}
            disabled={currentQuestion === 0}
            className={`group px-8 py-4 rounded-2xl font-bold transition-all flex items-center gap-2 ${currentQuestion === 0
                ? 'bg-gray-300 text-gray-500 cursor-not-allowed'
                : 'bg-white text-amber-700 border-2 border-amber-300 shadow-lg hover:shadow-xl hover:bg-amber-50'
              }`}
          >
            <span className={currentQuestion === 0 ? '' : 'group-hover:-translate-x-1 transition-transform'}>←</span>
            Câu trước
          </button>

          <div className="flex gap-4">
            {currentQuestion === questions.length - 1 ? (
              <button
                onClick={handleSubmit}
                className={`group bg-gradient-to-r ${formation.color} text-white px-10 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all flex items-center gap-3 shadow-lg`}
              >
                Nộp bài
                <span className="group-hover:scale-110 transition-transform">→</span>
              </button>
            ) : (
              <button
                onClick={handleNext}
                className={`group bg-gradient-to-r ${formation.color} text-white px-8 py-4 rounded-2xl font-bold hover:shadow-2xl transition-all flex items-center gap-2 shadow-lg`}
              >
                Câu sau
                <span className="group-hover:translate-x-1 transition-transform">→</span>
              </button>
            )}
          </div>
        </div>

        {/* Question Navigation with enhanced design */}
        <div className="bg-white rounded-3xl p-6 md:p-8 shadow-xl border-2 border-amber-300">
          <h3 className="text-xl font-bold text-amber-900 mb-6 flex items-center gap-2">
            Danh sách câu hỏi:
          </h3>
          <div className="grid grid-cols-5 md:grid-cols-10 gap-3">
            {questions.map((q, index) => {
              const isAnswered = selectedAnswers[q.id] !== undefined;
              const isCurrent = index === currentQuestion;

              return (
                <button
                  key={q.id}
                  onClick={() => setCurrentQuestion(index)}
                  className={`relative w-full aspect-square rounded-xl font-bold transition-all text-lg ${isCurrent
                      ? `bg-gradient-to-br ${formation.color} text-white shadow-2xl scale-110 z-10`
                      : isAnswered
                        ? 'bg-green-500 text-white shadow-lg hover:scale-105'
                        : 'bg-amber-100 text-amber-800 hover:bg-amber-200 hover:scale-105 border-2 border-amber-300'
                    }`}
                >
                  <span className="absolute inset-0 flex items-center justify-center">
                    {index + 1}
                  </span>
                  {isCurrent && (
                    <div className="absolute inset-0 rounded-xl bg-white/20 animate-ping"></div>
                  )}
                </button>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuizPage;
