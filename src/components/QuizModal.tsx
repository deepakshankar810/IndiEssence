import React, { useState, useEffect } from 'react';
import { X, Award, CheckCircle, XCircle, ArrowRight, Trophy, Star } from 'lucide-react';
import { statesData } from '../data/statesData';

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

// Generate dynamic quiz questions from statesData
const generateDynamicQuestions = (): QuizQuestion[] => {
  const questions: QuizQuestion[] = [];
  
  statesData.forEach(state => {
    // Question about state dish
    const otherDishes = statesData.filter(s => s.id !== state.id).map(s => s.dish.name);
    const dishOptions = [state.dish.name, ...otherDishes.sort(() => 0.5 - Math.random()).slice(0, 3)].sort(() => 0.5 - Math.random());
    questions.push({
      question: `Which dish is famous in ${state.name}?`,
      options: dishOptions,
      correct: dishOptions.indexOf(state.dish.name),
      state: state.name,
      explanation: `${state.dish.name} is the signature dish of ${state.name}. ${state.dish.description}`
    });

    // Question about state capital
    const otherCapitals = statesData.filter(s => s.id !== state.id).map(s => s.capital);
    const capitalOptions = [state.capital, ...otherCapitals.sort(() => 0.5 - Math.random()).slice(0, 3)].sort(() => 0.5 - Math.random());
    questions.push({
      question: `What is the capital of ${state.name}?`,
      options: capitalOptions,
      correct: capitalOptions.indexOf(state.capital),
      state: state.name,
      explanation: `${state.capital} is the capital of ${state.name}. ${state.culturalEssence}`
    });

    // Question about famous attractions
    if (state.touristPlaces.length > 0) {
      const famousPlace = state.touristPlaces[0];
      const otherPlaces = statesData.filter(s => s.id !== state.id && s.touristPlaces.length > 0)
        .map(s => s.touristPlaces[0].name);
      const placeOptions = [famousPlace.name, ...otherPlaces.sort(() => 0.5 - Math.random()).slice(0, 3)].sort(() => 0.5 - Math.random());
      questions.push({
        question: `${famousPlace.name} is located in which state?`,
        options: statesData.filter(s => placeOptions.includes(s.touristPlaces[0]?.name) || s.name === state.name).map(s => s.name).slice(0, 4),
        correct: statesData.filter(s => placeOptions.includes(s.touristPlaces[0]?.name) || s.name === state.name).map(s => s.name).slice(0, 4).indexOf(state.name),
        state: state.name,
        explanation: `${famousPlace.name} is a famous ${famousPlace.category} destination in ${state.name}. ${famousPlace.description}`
      });
    }

    // Question about language greeting
    const otherGreetings = statesData.filter(s => s.id !== state.id).map(s => s.language.phrase);
    const greetingOptions = [state.language.phrase, ...otherGreetings.sort(() => 0.5 - Math.random()).slice(0, 3)].sort(() => 0.5 - Math.random());
    questions.push({
      question: `What does "${state.language.phrase}" mean in ${state.language.language}?`,
      options: [state.language.meaning, "Good morning", "Thank you", "Welcome"].sort(() => 0.5 - Math.random()),
      correct: [state.language.meaning, "Good morning", "Thank you", "Welcome"].sort(() => 0.5 - Math.random()).indexOf(state.language.meaning),
      state: state.name,
      explanation: `"${state.language.phrase}" means "${state.language.meaning}" in ${state.language.language}, the primary language of ${state.name}.`
    });

    // Question about what state is famous for
    const otherFamous = statesData.filter(s => s.id !== state.id).map(s => s.famousFor);
    const famousOptions = [state.famousFor, ...otherFamous.sort(() => 0.5 - Math.random()).slice(0, 3)].sort(() => 0.5 - Math.random());
    questions.push({
      question: `${state.name} is famous for:`,
      options: famousOptions,
      correct: famousOptions.indexOf(state.famousFor),
      state: state.name,
      explanation: `${state.name} is famous for ${state.famousFor}. ${state.culturalEssence}`
    });
  });

  return questions;
};

// Function to get random questions
const getRandomQuestions = (count: number = 5): QuizQuestion[] => {
  const allQuestions = generateDynamicQuestions();
  const shuffled = [...allQuestions].sort(() => Math.random() - 0.5);
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