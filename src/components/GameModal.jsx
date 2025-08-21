import { motion, AnimatePresence } from 'framer-motion';
import { X, Play, Pause, RotateCcw, Brain, Timer, Zap, Check, X as XIcon } from 'lucide-react';
import { useState, useEffect, useCallback } from 'react';

const GameModal = ({ isOpen, onClose }) => {
  const [gameState, setGameState] = useState('ready'); // ready, playing, paused, finished
  const [timeLeft, setTimeLeft] = useState(120); // 2 minutes in seconds
  const [score, setScore] = useState(0);
  const [level, setLevel] = useState(1);
  const [highScore, setHighScore] = useState(0);
  const [currentChallenge, setCurrentChallenge] = useState(null);
  const [userAnswer, setUserAnswer] = useState('');
  const [feedback, setFeedback] = useState(null);
  const [challengeType, setChallengeType] = useState('math');
  const [sequence, setSequence] = useState([]);
  const [userSequence, setUserSequence] = useState([]);
  const [showingSequence, setShowingSequence] = useState(false);

  // Load high score from localStorage
  useEffect(() => {
    const savedHighScore = localStorage.getItem('gameHighScore');
    if (savedHighScore) {
      setHighScore(parseInt(savedHighScore));
    }
  }, []);

  // Timer effect
  useEffect(() => {
    let interval = null;
    if (gameState === 'playing' && timeLeft > 0) {
      interval = setInterval(() => {
        setTimeLeft((prev) => {
          if (prev <= 1) {
            endGame();
            return 0;
          }
          return prev - 1;
        });
      }, 1000);
    }
    return () => clearInterval(interval);
  }, [gameState, timeLeft]);

  // Generate new challenges
  useEffect(() => {
    if (gameState === 'playing' && !currentChallenge) {
      generateChallenge();
    }
  }, [gameState, currentChallenge, level]);

  const generateChallenge = () => {
    const challengeTypes = ['math', 'pattern', 'memory', 'reaction'];
    const randomType = challengeTypes[Math.floor(Math.random() * challengeTypes.length)];
    setChallengeType(randomType);

    switch (randomType) {
      case 'math':
        generateMathChallenge();
        break;
      case 'pattern':
        generatePatternChallenge();
        break;
      case 'memory':
        generateMemoryChallenge();
        break;
      case 'reaction':
        generateReactionChallenge();
        break;
    }
  };

  const generateMathChallenge = () => {
    const operations = ['+', '-', '*'];
    const op = operations[Math.floor(Math.random() * operations.length)];
    let num1, num2, answer;

    switch (op) {
      case '+':
        num1 = Math.floor(Math.random() * 50) + 10;
        num2 = Math.floor(Math.random() * 50) + 10;
        answer = num1 + num2;
        break;
      case '-':
        num1 = Math.floor(Math.random() * 50) + 30;
        num2 = Math.floor(Math.random() * 30) + 5;
        answer = num1 - num2;
        break;
      case '*':
        num1 = Math.floor(Math.random() * 12) + 2;
        num2 = Math.floor(Math.random() * 12) + 2;
        answer = num1 * num2;
        break;
    }

    setCurrentChallenge({
      type: 'math',
      question: `${num1} ${op} ${num2} = ?`,
      answer: answer,
      timeLimit: Math.max(5, 15 - level * 2) // Faster as level increases
    });
  };

  const generatePatternChallenge = () => {
    const patterns = [
      { sequence: [2, 4, 6, 8, 10], next: 12, rule: 'Add 2' },
      { sequence: [1, 3, 6, 10, 15], next: 21, rule: 'Add increasing numbers' },
      { sequence: [1, 2, 4, 8, 16], next: 32, rule: 'Multiply by 2' },
      { sequence: [1, 1, 2, 3, 5], next: 8, rule: 'Fibonacci' },
      { sequence: [3, 6, 12, 24, 48], next: 96, rule: 'Multiply by 2' }
    ];
    
    const pattern = patterns[Math.floor(Math.random() * patterns.length)];
    setCurrentChallenge({
      type: 'pattern',
      sequence: pattern.sequence,
      answer: pattern.next,
      rule: pattern.rule,
      timeLimit: Math.max(8, 20 - level * 2)
    });
  };

  const generateMemoryChallenge = () => {
    const sequenceLength = Math.min(3 + level, 7);
    const newSequence = [];
    for (let i = 0; i < sequenceLength; i++) {
      newSequence.push(Math.floor(Math.random() * 9) + 1);
    }
    setSequence(newSequence);
    setUserSequence([]);
    setShowingSequence(true);
    
    // Show sequence for 2 seconds per number
    setTimeout(() => {
      setShowingSequence(false);
      setCurrentChallenge({
        type: 'memory',
        sequence: newSequence,
        answer: newSequence.join(''),
        timeLimit: Math.max(10, 25 - level * 2)
      });
    }, newSequence.length * 2000);
  };

  const generateReactionChallenge = () => {
    const colors = ['red', 'blue', 'green', 'yellow', 'purple'];
    const color = colors[Math.floor(Math.random() * colors.length)];
    const delay = Math.random() * 3000 + 1000; // 1-4 seconds

    setCurrentChallenge({
      type: 'reaction',
      color: color,
      delay: delay,
      timeLimit: 5
    });

    // Start the reaction timer
    setTimeout(() => {
      if (gameState === 'playing') {
        setCurrentChallenge(prev => ({ ...prev, show: true }));
      }
    }, delay);
  };

  const handleAnswerSubmit = () => {
    if (!currentChallenge) return;

    let isCorrect = false;
    switch (currentChallenge.type) {
      case 'math':
        isCorrect = parseInt(userAnswer) === currentChallenge.answer;
        break;
      case 'pattern':
        isCorrect = parseInt(userAnswer) === currentChallenge.answer;
        break;
      case 'memory':
        isCorrect = userAnswer === currentChallenge.answer;
        break;
      case 'reaction':
        isCorrect = true; // For reaction, just clicking is correct
        break;
    }

    if (isCorrect) {
      setScore(prev => {
        const newScore = prev + 10;
        if (newScore > 0 && newScore % 50 === 0) {
          setLevel(prev => prev + 1);
        }
        return newScore;
      });
      setFeedback({ type: 'correct', message: 'Correct! +10 points' });
    } else {
      setFeedback({ type: 'incorrect', message: `Wrong! Answer was ${currentChallenge.answer}` });
    }

    setTimeout(() => {
      setFeedback(null);
      setUserAnswer('');
      setCurrentChallenge(null);
    }, 1500);
  };

  const handleReactionClick = () => {
    if (currentChallenge?.type === 'reaction' && currentChallenge.show) {
      handleAnswerSubmit();
    }
  };

  const startGame = () => {
    setGameState('playing');
    setTimeLeft(120);
    setScore(0);
    setLevel(1);
    setCurrentChallenge(null);
    setUserAnswer('');
    setFeedback(null);
  };

  const pauseGame = () => {
    setGameState('paused');
  };

  const resumeGame = () => {
    setGameState('playing');
  };

  const endGame = () => {
    setGameState('finished');
    if (score > highScore) {
      setHighScore(score);
      localStorage.setItem('gameHighScore', score.toString());
    }
  };

  const resetGame = () => {
    setGameState('ready');
    setTimeLeft(120);
    setScore(0);
    setLevel(1);
    setCurrentChallenge(null);
    setUserAnswer('');
    setFeedback(null);
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const renderChallenge = () => {
    if (!currentChallenge) return null;

    switch (currentChallenge.type) {
      case 'math':
        return (
          <div className="text-center">
            <h3 className="text-2xl font-bold mb-4">Solve the Math Problem</h3>
            <div className="text-4xl font-bold mb-6">{currentChallenge.question}</div>
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAnswerSubmit()}
              className="w-32 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg p-2 mb-4"
              autoFocus
            />
            <button
              onClick={handleAnswerSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        );

      case 'pattern':
        return (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Find the Pattern</h3>
            <div className="text-2xl font-bold mb-4">
              {currentChallenge.sequence.join(' → ')} → ?
            </div>
            <input
              type="number"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAnswerSubmit()}
              className="w-32 text-center text-2xl font-bold border-2 border-gray-300 rounded-lg p-2 mb-4"
              autoFocus
            />
            <button
              onClick={handleAnswerSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        );

      case 'memory':
        if (showingSequence) {
          return (
            <div className="text-center">
              <h3 className="text-xl font-bold mb-4">Memorize the Sequence</h3>
              <div className="text-4xl font-bold text-blue-600">
                {sequence[Math.floor((Date.now() / 2000) % sequence.length)]}
              </div>
            </div>
          );
        }
        return (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Enter the Sequence</h3>
            <input
              type="text"
              value={userAnswer}
              onChange={(e) => setUserAnswer(e.target.value)}
              onKeyPress={(e) => e.key === 'Enter' && handleAnswerSubmit()}
              className="w-48 text-center text-xl font-bold border-2 border-gray-300 rounded-lg p-2 mb-4"
              placeholder="e.g., 12345"
              autoFocus
            />
            <button
              onClick={handleAnswerSubmit}
              className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700"
            >
              Submit
            </button>
          </div>
        );

      case 'reaction':
        return (
          <div className="text-center">
            <h3 className="text-xl font-bold mb-4">Click when you see the color!</h3>
            {currentChallenge.show ? (
              <button
                onClick={handleReactionClick}
                className={`w-32 h-32 rounded-full text-white font-bold text-xl transition-all duration-200 ${currentChallenge.color === 'red' ? 'bg-red-500' : currentChallenge.color === 'blue' ? 'bg-blue-500' : currentChallenge.color === 'green' ? 'bg-green-500' : currentChallenge.color === 'yellow' ? 'bg-yellow-500' : 'bg-purple-500'}`}
              >
                {currentChallenge.color.toUpperCase()}
              </button>
            ) : (
              <div className="w-32 h-32 rounded-full bg-gray-300 mx-auto flex items-center justify-center">
                <span className="text-gray-600">Wait...</span>
              </div>
            )}
          </div>
        );

      default:
        return null;
    }
  };

  const modalVariants = {
    hidden: { opacity: 0 },
    visible: { 
      opacity: 1,
      transition: { duration: 0.3 }
    },
    exit: { 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  const contentVariants = {
    hidden: { scale: 0.8, opacity: 0 },
    visible: { 
      scale: 1, 
      opacity: 1,
      transition: { duration: 0.3, ease: "easeOut" }
    },
    exit: { 
      scale: 0.8, 
      opacity: 0,
      transition: { duration: 0.2 }
    }
  };

  return (
    <AnimatePresence>
      {isOpen && (
        <motion.div
          variants={modalVariants}
          initial="hidden"
          animate="visible"
          exit="exit"
          className="fixed inset-0 bg-black/50 backdrop-blur-sm z-50 flex items-center justify-center p-4"
          onClick={onClose}
        >
          <motion.div
            variants={contentVariants}
            initial="hidden"
            animate="visible"
            exit="exit"
            className="bg-white dark:bg-gray-900 rounded-2xl p-6 w-full max-w-2xl max-h-[90vh] overflow-hidden relative"
            onClick={(e) => e.stopPropagation()}
          >
            {/* Close Button */}
            <button
              onClick={onClose}
              className="absolute top-4 right-4 p-2 text-gray-500 hover:text-gray-700 dark:text-gray-400 dark:hover:text-gray-200 transition-colors"
            >
              <X size={20} />
            </button>

            {/* Game Header */}
            <div className="text-center mb-6">
              <h2 className="text-2xl font-bold text-gray-900 dark:text-white mb-2 flex items-center justify-center">
                <Brain className="w-6 h-6 mr-2" />
                Mental Stress Test
              </h2>
              <p className="text-gray-600 dark:text-gray-400">
                Test your cognitive abilities with math, patterns, memory, and reaction challenges!
              </p>
            </div>

            {/* Game Stats */}
            <div className="grid grid-cols-3 gap-4 mb-6">
              <div className="bg-blue-50 dark:bg-blue-900/20 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-1">
                  <Timer size={16} className="text-blue-600 dark:text-blue-400 mr-1" />
                  <span className="text-sm font-medium text-blue-600 dark:text-blue-400">Time</span>
                </div>
                <div className="text-lg font-bold text-blue-700 dark:text-blue-300">
                  {formatTime(timeLeft)}
                </div>
              </div>
              <div className="bg-green-50 dark:bg-green-900/20 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-1">
                  <Zap size={16} className="text-green-600 dark:text-green-400 mr-1" />
                  <span className="text-sm font-medium text-green-600 dark:text-green-400">Score</span>
                </div>
                <div className="text-lg font-bold text-green-700 dark:text-green-300">
                  {score}
                </div>
              </div>
              <div className="bg-purple-50 dark:bg-purple-900/20 rounded-lg p-3 text-center">
                <div className="flex items-center justify-center mb-1">
                  <Brain size={16} className="text-purple-600 dark:text-purple-400 mr-1" />
                  <span className="text-sm font-medium text-purple-600 dark:text-purple-400">Level</span>
                </div>
                <div className="text-lg font-bold text-purple-700 dark:text-purple-300">
                  {level}
                </div>
              </div>
            </div>

            {/* Game Area */}
            <div className="relative bg-gray-100 dark:bg-gray-800 rounded-xl h-80 mb-6 overflow-hidden flex items-center justify-center">
              {gameState === 'ready' && (
                <div className="text-center">
                  <Brain size={48} className="mx-auto mb-4 text-gray-400" />
                  <p className="text-gray-600 dark:text-gray-400 mb-4">
                    Ready to test your mental abilities?
                  </p>
                  <button
                    onClick={startGame}
                    className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                  >
                    <Play size={16} className="inline mr-2" />
                    Start Test
                  </button>
                </div>
              )}

              {gameState === 'paused' && (
                <div className="absolute inset-0 flex items-center justify-center bg-black/20">
                  <div className="text-center">
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Test Paused
                    </p>
                    <button
                      onClick={resumeGame}
                      className="px-6 py-3 bg-green-600 text-white rounded-lg font-semibold hover:bg-green-700 transition-colors"
                    >
                      <Play size={16} className="inline mr-2" />
                      Resume
                    </button>
                  </div>
                </div>
              )}

              {gameState === 'finished' && (
                <div className="absolute inset-0 flex items-center justify-center">
                  <div className="text-center">
                    <div className="text-4xl mb-4">🧠</div>
                    <h3 className="text-xl font-bold text-gray-900 dark:text-white mb-2">
                      Test Complete!
                    </h3>
                    <p className="text-gray-600 dark:text-gray-400 mb-4">
                      Final Score: {score} | High Score: {highScore}
                    </p>
                    <button
                      onClick={resetGame}
                      className="px-6 py-3 bg-blue-600 text-white rounded-lg font-semibold hover:bg-blue-700 transition-colors"
                    >
                      <RotateCcw size={16} className="inline mr-2" />
                      Try Again
                    </button>
                  </div>
                </div>
              )}

              {/* Game Controls */}
              {gameState === 'playing' && (
                <div className="absolute top-4 left-4">
                  <button
                    onClick={pauseGame}
                    className="p-2 bg-white/80 dark:bg-gray-800/80 rounded-lg text-gray-700 dark:text-gray-300 hover:bg-white dark:hover:bg-gray-800 transition-colors"
                  >
                    <Pause size={16} />
                  </button>
                </div>
              )}

              {/* Challenge Display */}
              {gameState === 'playing' && renderChallenge()}

              {/* Feedback */}
              {feedback && (
                <div className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 p-4 rounded-lg ${
                  feedback.type === 'correct' 
                    ? 'bg-green-500 text-white' 
                    : 'bg-red-500 text-white'
                }`}>
                  <div className="flex items-center">
                    {feedback.type === 'correct' ? <Check size={20} /> : <XIcon size={20} />}
                    <span className="ml-2">{feedback.message}</span>
                  </div>
                </div>
              )}
            </div>

            {/* Instructions */}
            <div className="text-center text-sm text-gray-500 dark:text-gray-400">
              <p>💡 Challenges get harder and faster as you level up!</p>
            </div>
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
};

export default GameModal;
