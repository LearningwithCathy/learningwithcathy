import React, { useState, useEffect, useCallback } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { 
  Volume2, 
  ChevronLeft, 
  ChevronRight, 
  RotateCcw, 
  CheckCircle2, 
  BookOpen, 
  Trophy, 
  Sparkles,
  Heart,
  Star,
  Music
} from 'lucide-react';
import { VOCABULARY_LIST, VocabularyItem } from './data/vocabulary';

const App: React.FC = () => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isFlipped, setIsFlipped] = useState(false);
  const [masteredIds, setMasteredIds] = useState<number[]>([]);
  const [showSummary, setShowSummary] = useState(false);
  const [direction, setDirection] = useState(0);

  const currentWord = VOCABULARY_LIST[currentIndex];
  const isMastered = masteredIds.includes(currentWord.id);
  const progress = ((currentIndex + 1) / VOCABULARY_LIST.length) * 100;

  const speak = (text: string, lang: string = 'en-US') => {
    // Remove brackets, leading dashes/symbols, and underscores for speech
    const cleanText = text
      .replace(/\[|\]/g, '') // Remove brackets
      .replace(/_/g, '') // Remove underscores
      .replace(/^[—\-\s]+/, '') // Remove leading dashes and spaces
      .replace(/\n[—\-\s]+/g, ' '); // Replace newline + dash with a space
    
    const utterance = new SpeechSynthesisUtterance(cleanText);
    utterance.lang = lang;
    utterance.rate = 0.9;
    window.speechSynthesis.speak(utterance);
  };

  const renderHighlightedText = (text: string) => {
    const parts = text.split(/(\[.*?\])/g);
    return parts.map((part, i) => {
      if (part.startsWith('[') && part.endsWith(']')) {
        return (
          <span key={i} className="text-emerald-400 font-bold">
            {part.slice(1, -1)}
          </span>
        );
      }
      return part;
    });
  };

  const handleNext = useCallback(() => {
    if (currentIndex < VOCABULARY_LIST.length - 1) {
      setDirection(1);
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev + 1), 50);
    } else {
      setShowSummary(true);
    }
  }, [currentIndex]);

  const handlePrev = useCallback(() => {
    if (currentIndex > 0) {
      setDirection(-1);
      setIsFlipped(false);
      setTimeout(() => setCurrentIndex(prev => prev - 1), 50);
    }
  }, [currentIndex]);

  const toggleMastered = () => {
    if (isMastered) {
      setMasteredIds(prev => prev.filter(id => id !== currentWord.id));
    } else {
      setMasteredIds(prev => [...prev, currentWord.id]);
    }
  };

  const restart = () => {
    setCurrentIndex(0);
    setIsFlipped(false);
    setMasteredIds([]);
    setShowSummary(false);
  };

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (showSummary) return;
      
      if (e.code === 'Space') {
        e.preventDefault();
        setIsFlipped(prev => !prev);
      } else if (e.code === 'ArrowRight') {
        handleNext();
      } else if (e.code === 'ArrowLeft') {
        handlePrev();
      } else if (e.code === 'KeyV') {
        speak(currentWord.type === 'sentence' ? currentWord.example : currentWord.word);
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [handleNext, handlePrev, showSummary, currentWord.word, currentWord.example, currentWord.type]);

  const categoryColors: Record<string, string> = {
    Fruit: 'bg-pink-100 text-pink-600 border-pink-200',
    Vegetable: 'bg-green-100 text-green-600 border-green-200',
    Meat: 'bg-red-100 text-red-600 border-red-200',
    Snack: 'bg-yellow-100 text-yellow-600 border-yellow-200',
    Food: 'bg-orange-100 text-orange-600 border-orange-200',
    Drink: 'bg-blue-100 text-blue-600 border-blue-200',
    People: 'bg-purple-100 text-purple-600 border-purple-200',
    'Verb/Noun': 'bg-indigo-100 text-indigo-600 border-indigo-200',
    Pronoun: 'bg-stone-100 text-stone-600 border-stone-200',
    Noun: 'bg-cyan-100 text-cyan-600 border-cyan-200',
    Dining: 'bg-teal-100 text-teal-600 border-teal-200',
    Verb: 'bg-violet-100 text-violet-600 border-violet-200',
    Ingredient: 'bg-amber-100 text-amber-600 border-amber-200',
    Phrase: 'bg-rose-100 text-rose-600 border-rose-200',
    'Verb Phrase': 'bg-sky-100 text-sky-600 border-sky-200',
  };

  const getCategoryStyle = (category: string) => categoryColors[category] || 'bg-gray-100 text-gray-600 border-gray-200';

  if (showSummary) {
    return (
      <div className="min-h-screen bg-gradient-to-br from-yellow-400 via-orange-400 to-red-400 flex items-center justify-center p-6 font-sans overflow-hidden relative">
        <motion.div 
          animate={{ rotate: 360 }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute -top-20 -left-20 w-64 h-64 bg-white/20 rounded-full blur-3xl"
        />
        <motion.div 
          animate={{ rotate: -360 }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute -bottom-20 -right-20 w-80 h-80 bg-yellow-200/30 rounded-full blur-3xl"
        />

        <motion.div 
          initial={{ scale: 0.8, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          className="bg-white rounded-[3rem] shadow-2xl p-10 max-w-2xl w-full text-center relative z-10 border-8 border-yellow-200"
        >
          <motion.div
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 2, repeat: Infinity }}
            className="inline-block p-6 bg-yellow-100 rounded-full mb-6"
          >
            <Trophy className="w-20 h-20 text-yellow-500" />
          </motion.div>
          
          <h2 className="text-5xl font-display font-bold text-gray-800 mb-4">太棒了！</h2>
          <p className="text-xl text-gray-600 mb-8 font-medium">你已经完成了所有的词汇复习！</p>
          
          <div className="grid grid-cols-2 gap-6 mb-10">
            <div className="bg-green-50 p-6 rounded-[2rem] border-2 border-green-100">
              <div className="text-4xl font-display font-bold text-green-600 mb-1">{masteredIds.length}</div>
              <div className="text-sm font-bold text-green-500 uppercase tracking-wider">已掌握</div>
            </div>
            <div className="bg-orange-50 p-6 rounded-[2rem] border-2 border-orange-100">
              <div className="text-4xl font-display font-bold text-orange-600 mb-1">{VOCABULARY_LIST.length - masteredIds.length}</div>
              <div className="text-sm font-bold text-orange-500 uppercase tracking-wider">待加强</div>
            </div>
          </div>

          <button
            onClick={restart}
            className="group flex items-center justify-center gap-3 w-full py-5 bg-gradient-to-r from-orange-500 to-yellow-500 text-white rounded-2xl font-display font-bold text-2xl shadow-lg hover:shadow-xl transition-all active:scale-95"
          >
            <RotateCcw className="w-7 h-7 group-hover:rotate-180 transition-transform duration-500" />
            重新开始
          </button>
        </motion.div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-white flex flex-col items-center p-4 md:p-8 font-sans overflow-hidden relative">
      <header className="w-full max-w-4xl flex flex-col md:flex-row items-center justify-between mb-12 gap-6 relative z-10">
        <div className="flex items-center gap-4">
          <div className="p-2 bg-stone-900 rounded-lg">
            <BookOpen className="w-5 h-5 text-white" />
          </div>
          <h1 className="text-xl font-display font-bold text-stone-900 tracking-tight">
            词汇挑战
          </h1>
        </div>

        <div className="flex-1 max-w-md w-full px-4">
          <div className="flex justify-between items-end mb-2">
            <span className="text-stone-400 font-medium text-xs uppercase tracking-widest">
              Progress: {currentIndex + 1} / {VOCABULARY_LIST.length}
            </span>
            <span className="text-stone-900 font-bold text-xs">
              {Math.round(progress)}%
            </span>
          </div>
          <div className="h-1 w-full bg-stone-100 rounded-full overflow-hidden">
            <motion.div 
              className="h-full bg-stone-900 rounded-full"
              initial={{ width: 0 }}
              animate={{ width: `${progress}%` }}
              transition={{ type: "spring", stiffness: 50 }}
            />
          </div>
        </div>
      </header>

      <main className="flex-1 flex flex-col items-center justify-center w-full max-w-4xl relative z-10">
        <div className="relative w-full aspect-[4/5] md:aspect-[16/10] max-h-[600px] perspective-1000 p-2 rounded-[3rem] bg-gradient-to-br from-emerald-50 to-emerald-100 border-4 border-emerald-200 shadow-xl">
          <AnimatePresence mode="wait">
            <motion.div
              key={currentIndex}
              initial={{ x: direction * 100, opacity: 0, rotateY: 0 }}
              animate={{ x: 0, opacity: 1 }}
              exit={{ x: direction * -100, opacity: 0 }}
              transition={{ type: "spring", damping: 20, stiffness: 100 }}
              className="w-full h-full"
            >
              <motion.div
                className="w-full h-full relative transform-style-3d cursor-pointer"
                animate={{ rotateY: isFlipped ? 180 : 0 }}
                transition={{ type: "spring", stiffness: 260, damping: 20 }}
                onClick={() => setIsFlipped(!isFlipped)}
              >
                <div className="absolute inset-0 backface-hidden bg-white rounded-[2.5rem] shadow-sm p-8 flex flex-col items-center justify-center border border-stone-100 overflow-hidden">
                  <div className="absolute top-10 left-10">
                    <div className="flex items-center gap-2 text-stone-900 font-logo text-lg opacity-80">
                      <Sparkles className="w-4 h-4" />
                      Learning with Cathy
                    </div>
                  </div>

                  <div className="flex flex-col items-center justify-center text-center flex-1 w-full px-6">
                    {currentWord.type === 'sentence' ? (
                      <div className="space-y-4 w-full">
                        <div className="flex flex-col items-center gap-3">
                          <p className="text-base md:text-lg font-display font-medium text-stone-400">
                            {currentWord.translation}
                          </p>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speak(currentWord.example);
                            }}
                            className="p-2 text-stone-300 hover:text-stone-900 transition-colors active:scale-90"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>
                        </div>
                        <div className="text-xl md:text-2xl font-display font-bold text-stone-900 leading-relaxed whitespace-pre-wrap">
                          {currentWord.word}
                        </div>
                      </div>
                    ) : (
                      <>
                        <motion.h2 
                          className="text-8xl md:text-10xl font-display font-bold text-stone-900 mb-2 tracking-tight"
                        >
                          {currentWord.word}
                        </motion.h2>
                        <div className="flex items-center gap-4 opacity-40">
                          <span className="text-xl font-mono text-stone-400 font-medium">
                            {currentWord.phonetic}
                          </span>
                          <button
                            onClick={(e) => {
                              e.stopPropagation();
                              speak(currentWord.word);
                            }}
                            className="p-2 text-stone-400 hover:text-stone-900 transition-colors active:scale-90"
                          >
                            <Volume2 className="w-5 h-5" />
                          </button>
                        </div>
                      </>
                    )}
                  </div>

                  <div className="absolute bottom-12 w-full text-center">
                    <div className="text-stone-200 font-bold text-[10px] uppercase tracking-[0.3em]">
                      点击翻面
                    </div>
                  </div>
                </div>

                <div className="absolute inset-0 backface-hidden bg-black rounded-[2.5rem] shadow-sm p-8 flex flex-col rotate-y-180 border border-stone-800 overflow-hidden">
                  <div className="flex justify-between items-start mb-8">
                    <div className="flex items-center gap-2 text-stone-300 font-logo text-lg opacity-80">
                      <Sparkles className="w-4 h-4" />
                      Learning with Cathy
                    </div>
                    <div className={`px-3 py-1 rounded-full border font-bold text-[9px] uppercase tracking-widest ${getCategoryStyle(currentWord.category)}`}>
                      {currentWord.category}
                    </div>
                  </div>

                  <div className="flex flex-col md:flex-row gap-10 flex-1 overflow-hidden">
                    <div className="flex-1 flex flex-col">
                      <div className="mb-4">
                        <h3 className="text-stone-600 text-[9px] font-bold uppercase tracking-[0.2em] mb-2">
                          {currentWord.type === 'sentence' ? 'Translation' : 'Meaning'}
                        </h3>
                        <p className={`${currentWord.type === 'sentence' ? 'text-xl md:text-2xl' : 'text-4xl md:text-5xl'} font-display font-bold text-white`}>
                          {currentWord.translation}
                        </p>
                      </div>

                      <div className={`flex-1 bg-stone-900/50 rounded-3xl ${currentWord.type === 'sentence' ? 'p-5' : 'p-8'} border border-stone-800 overflow-y-auto`}>
                        <h3 className="text-stone-600 text-[9px] font-bold uppercase tracking-[0.2em] mb-4">
                          {currentWord.type === 'sentence' ? 'Full Sentence' : 'Example'}
                        </h3>
                        <div className="space-y-4">
                          <div className="flex items-start gap-4">
                            <button
                              onClick={(e) => {
                                e.stopPropagation();
                                speak(currentWord.example);
                              }}
                              className="mt-1 p-2 text-stone-600 hover:text-white transition-colors active:scale-90"
                            >
                              <Volume2 className="w-5 h-5" />
                            </button>
                            <div>
                              <div className={`${currentWord.type === 'sentence' ? 'text-lg md:text-xl' : 'text-xl md:text-2xl'} font-medium text-stone-100 leading-relaxed whitespace-pre-wrap`}>
                                {currentWord.type === 'sentence' 
                                  ? renderHighlightedText(currentWord.example)
                                  : currentWord.example}
                              </div>
                              {currentWord.type !== 'sentence' && (
                                <p className="text-stone-400 mt-3 text-base italic">
                                  {currentWord.exampleTranslation}
                                </p>
                              )}
                            </div>
                          </div>
                        </div>
                      </div>
                    </div>

                    <div className="w-full md:w-5/12 h-56 md:h-full">
                      <div className="w-full h-full rounded-3xl overflow-hidden shadow-sm border border-stone-800 transition-all duration-700">
                        <img 
                          src={currentWord.imageUrl} 
                          alt={currentWord.word}
                          referrerPolicy="no-referrer"
                          className="w-full h-full object-cover"
                        />
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </AnimatePresence>
        </div>

        <div className="mt-10 flex items-center gap-6 relative z-10">
          <button
            onClick={handlePrev}
            disabled={currentIndex === 0}
            className="p-4 bg-white text-stone-400 rounded-full shadow-sm hover:text-stone-800 disabled:opacity-30 disabled:cursor-not-allowed transition-all active:scale-90 border border-stone-200"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          <button
            onClick={toggleMastered}
            className={`flex items-center gap-3 px-8 py-3 rounded-full font-display font-bold text-lg shadow-sm transition-all active:scale-95 border ${
              isMastered 
                ? 'bg-stone-800 text-white border-stone-800' 
                : 'bg-white text-stone-400 border-stone-200 hover:border-stone-400 hover:text-stone-600'
            }`}
          >
            {isMastered ? (
              <>
                <CheckCircle2 className="w-5 h-5" />
                已掌握
              </>
            ) : (
              <>
                <Heart className="w-5 h-5" />
                掌握它
              </>
            )}
          </button>

          <button
            onClick={handleNext}
            className="p-4 bg-white text-stone-400 rounded-full shadow-sm hover:text-stone-800 transition-all active:scale-90 border border-stone-200"
          >
            <ChevronRight className="w-6 h-6" />
          </button>
        </div>
      </main>

      <footer className="mt-auto py-6 relative z-10">
        <div className="flex flex-wrap justify-center gap-6">
          {[
            { key: '空格', action: '翻转' },
            { key: '← / →', action: '切换' },
            { key: 'V', action: '发音' },
          ].map((item) => (
            <div key={item.key} className="flex items-center gap-2 opacity-40 hover:opacity-100 transition-opacity">
              <span className="bg-stone-200 text-stone-600 px-1.5 py-0.5 rounded text-[10px] font-bold">
                {item.key}
              </span>
              <span className="text-stone-500 text-xs font-medium">{item.action}</span>
            </div>
          ))}
        </div>
      </footer>
    </div>
  );
};

export default App;
