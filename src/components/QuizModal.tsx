import React, { useState, useEffect } from 'react';
import { X, Award, CheckCircle, XCircle, ArrowRight, Trophy, Star } from 'lucide-react';

interface QuizQuestion {
  question: string;
  options: string[];
  correct: number;
  state: string;
  explanation: string;
}

interface QuizModalProps {
  isOpen: boolean;
  onClose: () => void;
  onExploreState: (stateName: string) => void;
}

// Expanded quiz questions covering all 36 regions
const allQuizQuestions: QuizQuestion[] = [
  {
    question: "Which state is famous for Dal Baati Churma?",
    options: ["Rajasthan", "Gujarat", "Madhya Pradesh", "Uttar Pradesh"],
    correct: 0,
    state: "Rajasthan",
    explanation: "Dal Baati Churma is the signature dish of Rajasthan, representing the desert state's resourceful cuisine."
  },
  {
    question: "What is the traditional greeting in Kerala?",
    options: ["Namaste", "Namaskar", "Namaskaram", "Vanakkam"],
    correct: 2,
    state: "Kerala",
    explanation: "Namaskaram is the traditional Malayalam greeting meaning 'I bow to you' with joined palms."
  },
  {
    question: "Which state celebrates Baisakhi as a major festival?",
    options: ["Haryana", "Punjab", "Himachal Pradesh", "Uttarakhand"],
    correct: 1,
    state: "Punjab",
    explanation: "Baisakhi is Punjab's harvest festival and also marks the Sikh New Year."
  },
  {
    question: "Meenakshi Temple is located in which state?",
    options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    correct: 2,
    state: "Tamil Nadu",
    explanation: "The magnificent Meenakshi Temple with its colorful gopurams is in Madurai, Tamil Nadu."
  },
  {
    question: "Which state is known as 'God's Own Country'?",
    options: ["Goa", "Kerala", "Himachal Pradesh", "Uttarakhand"],
    correct: 1,
    state: "Kerala",
    explanation: "Kerala is famously called 'God's Own Country' for its natural beauty and backwaters."
  },
  {
    question: "Vada Pav originated in which state?",
    options: ["Gujarat", "Maharashtra", "Karnataka", "Goa"],
    correct: 1,
    state: "Maharashtra",
    explanation: "Vada Pav was invented in Mumbai, Maharashtra in the 1960s and became the city's signature street food."
  },
  {
    question: "Which state is famous for Rogan Josh?",
    options: ["Punjab", "Himachal Pradesh", "Jammu and Kashmir", "Uttarakhand"],
    correct: 2,
    state: "Jammu and Kashmir",
    explanation: "Rogan Josh is a signature Kashmiri dish with Persian influences, known for its aromatic spices."
  },
  {
    question: "Dhokla is a traditional dish from which state?",
    options: ["Rajasthan", "Gujarat", "Maharashtra", "Madhya Pradesh"],
    correct: 1,
    state: "Gujarat",
    explanation: "Dhokla is Gujarat's famous steamed snack made from fermented gram flour."
  },
  {
    question: "Which state is known for Litti Chokha?",
    options: ["Bihar", "Jharkhand", "West Bengal", "Odisha"],
    correct: 0,
    state: "Bihar",
    explanation: "Litti Chokha is Bihar's traditional dish - wheat balls stuffed with sattu served with mashed vegetables."
  },
  {
    question: "Hornbill Festival is celebrated in which state?",
    options: ["Assam", "Nagaland", "Manipur", "Mizoram"],
    correct: 1,
    state: "Nagaland",
    explanation: "Hornbill Festival is Nagaland's festival of festivals, showcasing all 16 tribal cultures."
  },
  {
    question: "Which union territory is known for its French colonial heritage?",
    options: ["Chandigarh", "Puducherry", "Daman and Diu", "Lakshadweep"],
    correct: 1,
    state: "Puducherry",
    explanation: "Puducherry (formerly Pondicherry) was a French colony and retains its colonial architecture and culture."
  },
  {
    question: "Bamboo shoot curry is a traditional dish from which state?",
    options: ["Assam", "Nagaland", "Manipur", "Arunachal Pradesh"],
    correct: 1,
    state: "Nagaland",
    explanation: "Bamboo shoot curry is a staple in Naga cuisine, representing their forest-to-table food culture."
  },
  {
    question: "Which state is famous for its tea gardens?",
    options: ["West Bengal", "Assam", "Sikkim", "Meghalaya"],
    correct: 1,
    state: "Assam",
    explanation: "Assam produces the world's largest quantity of tea and is famous for its strong, malty Assam tea."
  },
  {
    question: "Goan Fish Curry gets its unique flavor from which ingredient?",
    options: ["Tamarind", "Kokum", "Vinegar", "Lime"],
    correct: 1,
    state: "Goa",
    explanation: "Kokum gives Goan Fish Curry its distinctive tangy flavor and beautiful color."
  },
  {
    question: "Which state is known as the 'Land of Rising Sun'?",
    options: ["Assam", "Arunachal Pradesh", "Manipur", "Nagaland"],
    correct: 1,
    state: "Arunachal Pradesh",
    explanation: "Arunachal Pradesh is called the 'Land of Rising Sun' as it receives India's first sunrise."
  },
  {
    question: "Machher Jhol is a signature dish from which state?",
    options: ["Odisha", "West Bengal", "Assam", "Tripura"],
    correct: 1,
    state: "West Bengal",
    explanation: "Machher Jhol is Bengal's beloved light fish curry, representing the essence of Bengali home cooking."
  },
  {
    question: "Which state is famous for Mysore Pak?",
    options: ["Tamil Nadu", "Karnataka", "Andhra Pradesh", "Kerala"],
    correct: 1,
    state: "Karnataka",
    explanation: "Mysore Pak originated in the royal kitchens of Mysore Palace in Karnataka."
  },
  {
    question: "Ladakh is known for which type of Buddhism?",
    options: ["Theravada", "Mahayana", "Tibetan", "Zen"],
    correct: 2,
    state: "Ladakh",
    explanation: "Ladakh follows Tibetan Buddhism with ancient monasteries preserving this spiritual tradition."
  },
  {
    question: "Which state is famous for Chettinad cuisine?",
    options: ["Kerala", "Tamil Nadu", "Karnataka", "Andhra Pradesh"],
    correct: 1,
    state: "Tamil Nadu",
    explanation: "Chettinad cuisine from Tamil Nadu is known for its complex spice blends and fiery flavors."
  },
  {
    question: "Sundarbans mangrove forests are primarily in which state?",
    options: ["Odisha", "West Bengal", "Assam", "Andhra Pradesh"],
    correct: 1,
    state: "West Bengal",
    explanation: "The Sundarbans, home to Royal Bengal Tigers, are primarily located in West Bengal."
  },
  {
    question: "Which union territory has Coral Reefs as its main attraction?",
    options: ["Andaman and Nicobar Islands", "Lakshadweep", "Puducherry", "Daman and Diu"],
    correct: 1,
    state: "Lakshadweep",
    explanation: "Lakshadweep is famous for its pristine coral reefs and crystal-clear lagoons."
  },
  {
    question: "Bihu is the main festival of which state?",
    options: ["Assam", "West Bengal", "Tripura", "Manipur"],
    correct: 0,
    state: "Assam",
    explanation: "Bihu is Assam's most important festival, celebrating the Assamese New Year and harvest season."
  },
  {
    question: "Which state is known for Hilsa fish?",
    options: ["Odisha", "West Bengal", "Assam", "Andhra Pradesh"],
    correct: 1,
    state: "West Bengal",
    explanation: "Hilsa fish is considered the king of fish in Bengali cuisine and culture."
  },
  {
    question: "Konark Sun Temple is located in which state?",
    options: ["West Bengal", "Odisha", "Andhra Pradesh", "Tamil Nadu"],
    correct: 1,
    state: "Odisha",
    explanation: "The magnificent Konark Sun Temple, a UNESCO World Heritage Site, is in Odisha."
  },
  {
    question: "Which state is famous for Pochampally sarees?",
    options: ["Tamil Nadu", "Karnataka", "Telangana", "Andhra Pradesh"],
    correct: 2,
    state: "Telangana",
    explanation: "Pochampally in Telangana is famous for its traditional ikat weaving technique."
  },
  {
    question: "Kaziranga National Park is in which state?",
    options: ["Assam", "West Bengal", "Meghalaya", "Arunachal Pradesh"],
    correct: 0,
    state: "Assam",
    explanation: "Kaziranga National Park in Assam is famous for one-horned rhinoceros."
  },
  {
    question: "Which state is known as the 'Spice Garden of India'?",
    options: ["Tamil Nadu", "Kerala", "Karnataka", "Andhra Pradesh"],
    correct: 1,
    state: "Kerala",
    explanation: "Kerala is called the 'Spice Garden of India' for its historic spice trade and cultivation."
  },
  {
    question: "Pongal is primarily celebrated in which state?",
    options: ["Kerala", "Karnataka", "Tamil Nadu", "Andhra Pradesh"],
    correct: 2,
    state: "Tamil Nadu",
    explanation: "Pongal is Tamil Nadu's harvest festival, celebrating the sun god and agricultural abundance."
  },
  {
    question: "Which state is famous for Kanchipuram silk sarees?",
    options: ["Karnataka", "Tamil Nadu", "Kerala", "Andhra Pradesh"],
    correct: 1,
    state: "Tamil Nadu",
    explanation: "Kanchipuram in Tamil Nadu is renowned for its handwoven silk sarees with gold thread work."
  },
  {
    question: "Onam is the major festival of which state?",
    options: ["Tamil Nadu", "Kerala", "Karnataka", "Goa"],
    correct: 1,
    state: "Kerala",
    explanation: "Onam is Kerala's harvest festival celebrating the return of King Mahabali."
  }
];

// Function to get random questions from all regions
const getRandomQuestions = (count: number = 5): QuizQuestion[] => {
  const shuffled = [...allQuizQuestions].sort(() => Math.random() - 0.5);
  return shuffled.slice(0, count);
};

export default function QuizModal({ isOpen, onClose, onExploreState }: QuizModalProps) {
  const [questions, setQuestions] = useState<QuizQuestion[]>([]);
  const [currentQuestion, setCurrentQuestion] = useState(0);
  const [selectedAnswer, setSelectedAnswer] = useState<number | null>(null);
  const [showResult, setShowResult] = useState(false);
  const [score, setScore] = useState(0);
  const [answered, setAnswered] = useState(false);

  // Generate new questions when modal opens
  useEffect(() => {
    if (isOpen) {
      setQuestions(getRandomQuestions(5));
      setCurrentQuestion(0);
      setSelectedAnswer(null);
      setShowResult(false);
      setScore(0);
      setAnswered(false);
    }
  }, [isOpen]);

  if (!isOpen || questions.length === 0) return null;

  const question = questions[currentQuestion];

  const handleAnswerSelect = (answerIndex: number) => {
    if (answered) return;
    
    setSelectedAnswer(answerIndex);
    setAnswered(true);
    
    if (answerIndex === question.correct) {
      setScore(score + 1);
    }

    setTimeout(() => {
      if (currentQuestion < questions.length - 1) {
        setCurrentQuestion(currentQuestion + 1);
        setSelectedAnswer(null);
        setAnswered(false);
      } else {
        setShowResult(true);
      }
    }, 2000);
  };

  const resetQuiz = () => {
    setQuestions(getRandomQuestions(5));
    setCurrentQuestion(0);
    setSelectedAnswer(null);
    setShowResult(false);
    setScore(0);
    setAnswered(false);
  };

  const handleExplore = () => {
    onExploreState(question.state);
    onClose();
    resetQuiz();
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center p-4">
      {/* Backdrop */}
      <div 
        className="absolute inset-0 bg-black/80 backdrop-blur-sm"
        onClick={onClose}
      ></div>
      
      {/* Modal */}
      <div className="relative bg-gradient-to-br from-slate-900 to-slate-800 rounded-3xl border border-white/20 shadow-2xl max-w-2xl w-full max-h-[90vh] overflow-hidden animate-in zoom-in-95 duration-300">
        {/* Header */}
        <div className="bg-gradient-to-r from-rose-500 to-pink-600 p-6">
          <div className="flex items-center justify-between">
            <div className="flex items-center space-x-4">
              <div className="bg-white/20 p-3 rounded-xl">
                <Award className="h-8 w-8 text-white" />
              </div>
              <div>
                <h2 className="text-2xl font-bold text-white">India Knowledge Quiz</h2>
                <p className="text-rose-100">Fresh questions from all 36 regions</p>
              </div>
            </div>
            <button
              onClick={onClose}
              className="text-white/80 hover:text-white p-2 rounded-full hover:bg-white/10 transition-colors"
            >
              <X className="h-6 w-6" />
            </button>
          </div>
        </div>

        {/* Content */}
        <div className="p-8">
          {!showResult ? (
            <>
              {/* Progress */}
              <div className="mb-8">
                <div className="flex justify-between items-center mb-4">
                  <span className="text-gray-400">Question {currentQuestion + 1} of {questions.length}</span>
                  <span className="text-gray-400">Score: {score}</span>
                </div>
                <div className="w-full bg-gray-700 rounded-full h-2">
                  <div 
                    className="bg-gradient-to-r from-rose-500 to-pink-600 h-2 rounded-full transition-all duration-500"
                    style={{ width: `${((currentQuestion + 1) / questions.length) * 100}%` }}
                  ></div>
                </div>
              </div>

              {/* Question */}
              <div className="mb-8">
                <h3 className="text-2xl font-bold text-white mb-6 leading-relaxed">
                  {question.question}
                </h3>
                
                <div className="space-y-4">
                  {question.options.map((option, index) => {
                    let buttonClass = "w-full p-4 rounded-xl border-2 text-left font-medium transition-all duration-300 ";
                    
                    if (!answered) {
                      buttonClass += "border-gray-600 bg-gray-800/50 text-white hover:border-rose-400 hover:bg-rose-500/10";
                    } else {
                      if (index === question.correct) {
                        buttonClass += "border-green-400 bg-green-500/20 text-green-300";
                      } else if (index === selectedAnswer && index !== question.correct) {
                        buttonClass += "border-red-400 bg-red-500/20 text-red-300";
                      } else {
                        buttonClass += "border-gray-600 bg-gray-800/30 text-gray-400";
                      }
                    }

                    return (
                      <button
                        key={index}
                        onClick={() => handleAnswerSelect(index)}
                        className={buttonClass}
                        disabled={answered}
                      >
                        <div className="flex items-center justify-between">
                          <span>{option}</span>
                          {answered && index === question.correct && (
                            <CheckCircle className="h-6 w-6 text-green-400" />
                          )}
                          {answered && index === selectedAnswer && index !== question.correct && (
                            <XCircle className="h-6 w-6 text-red-400" />
                          )}
                        </div>
                      </button>
                    );
                  })}
                </div>

                {/* Explanation */}
                {answered && (
                  <div className="mt-6 p-4 bg-blue-500/10 border border-blue-500/20 rounded-xl animate-in slide-in-from-bottom-4 duration-500">
                    <p className="text-blue-200 leading-relaxed">
                      <strong>Did you know?</strong> {question.explanation}
                    </p>
                    <button
                      onClick={handleExplore}
                      className="mt-4 flex items-center space-x-2 text-blue-300 hover:text-blue-200 font-medium transition-colors"
                    >
                      <span>Explore {question.state}</span>
                      <ArrowRight className="h-4 w-4" />
                    </button>
                  </div>
                )}
              </div>
            </>
          ) : (
            /* Results */
            <div className="text-center">
              <div className="mb-8">
                <div className="bg-gradient-to-r from-yellow-400 to-orange-500 p-6 rounded-full w-24 h-24 mx-auto mb-6 flex items-center justify-center">
                  <Trophy className="h-12 w-12 text-white" />
                </div>
                <h3 className="text-3xl font-bold text-white mb-4">Quiz Complete!</h3>
                <p className="text-xl text-gray-300 mb-6">
                  You scored <span className="text-yellow-400 font-bold">{score}</span> out of <span className="text-yellow-400 font-bold">{questions.length}</span>
                </p>
                
                <div className="flex justify-center mb-6">
                  {[...Array(5)].map((_, i) => (
                    <Star 
                      key={i} 
                      className={`h-8 w-8 ${i < Math.ceil((score / questions.length) * 5) ? 'text-yellow-400 fill-current' : 'text-gray-600'}`} 
                    />
                  ))}
                </div>

                <p className="text-gray-400 mb-8">
                  {score === questions.length ? "Perfect! You're an India expert!" :
                   score >= questions.length * 0.7 ? "Great job! You know India well!" :
                   score >= questions.length * 0.5 ? "Good effort! Keep exploring India!" :
                   "Keep learning about incredible India!"}
                </p>
              </div>

              <div className="flex space-x-4">
                <button
                  onClick={resetQuiz}
                  className="flex-1 bg-gradient-to-r from-rose-500 to-pink-600 text-white px-6 py-3 rounded-xl font-semibold hover:shadow-lg transition-all duration-300"
                >
                  Try New Questions
                </button>
                <button
                  onClick={onClose}
                  className="flex-1 bg-gray-700 text-white px-6 py-3 rounded-xl font-semibold hover:bg-gray-600 transition-colors"
                >
                  Close
                </button>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  );
}