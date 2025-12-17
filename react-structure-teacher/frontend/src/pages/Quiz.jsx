import React, { useState, useEffect } from 'react';
import { Award, CheckCircle, XCircle, RotateCcw, ArrowRight, Trophy } from 'lucide-react';

const Quiz = ({ questions, lessons }) => {
  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0);
  const [selectedAnswers, setSelectedAnswers] = useState({});
  const [showResults, setShowResults] = useState(false);
  const [quizComplete, setQuizComplete] = useState(false);
  const [timeSpent, setTimeSpent] = useState(0);
  const [startTime, setStartTime] = useState(null);

  useEffect(() => {
    setStartTime(Date.now());
    const timer = setInterval(() => {
      setTimeSpent(prev => prev + 1);
    }, 1000);

    return () => clearInterval(timer);
  }, []);

  const handleAnswerSelect = (questionIndex, answerIndex) => {
    setSelectedAnswers(prev => ({
      ...prev,
      [questionIndex]: answerIndex
    }));
  };

  const handleNextQuestion = () => {
    if (currentQuestionIndex < questions.length - 1) {
      setCurrentQuestionIndex(currentQuestionIndex + 1);
    }
  };

  const handlePreviousQuestion = () => {
    if (currentQuestionIndex > 0) {
      setCurrentQuestionIndex(currentQuestionIndex - 1);
    }
  };

  const handleSubmitQuiz = () => {
    setShowResults(true);
    setQuizComplete(true);
  };

  const handleRestartQuiz = () => {
    setCurrentQuestionIndex(0);
    setSelectedAnswers({});
    setShowResults(false);
    setQuizComplete(false);
    setTimeSpent(0);
    setStartTime(Date.now());
  };

  const calculateScore = () => {
    const correctAnswers = questions.filter((question, index) =>
      selectedAnswers[index] === question.correct
    ).length;
    return {
      correct: correctAnswers,
      total: questions.length,
      percentage: Math.round((correctAnswers / questions.length) * 100)
    };
  };

  const getScoreGrade = (percentage) => {
    if (percentage >= 90) return { grade: 'A', color: 'var(--accent-green)', message: 'Outstanding!' };
    if (percentage >= 80) return { grade: 'B', color: 'var(--accent-blue)', message: 'Great job!' };
    if (percentage >= 70) return { grade: 'C', color: 'var(--accent-yellow)', message: 'Good work!' };
    if (percentage >= 60) return { grade: 'D', color: 'var(--accent-red)', message: 'Keep studying!' };
    return { grade: 'F', color: 'var(--accent-red)', message: 'More practice needed!' };
  };

  const formatTime = (seconds) => {
    const mins = Math.floor(seconds / 60);
    const secs = seconds % 60;
    return `${mins}:${secs.toString().padStart(2, '0')}`;
  };

  const allQuestionsAnswered = () => {
    return questions.every((_, index) => selectedAnswers.hasOwnProperty(index));
  };

  if (!questions || questions.length === 0) {
    return (
      <div className="quiz-empty">
        <Award size={64} />
        <h2>No Quiz Questions Available</h2>
        <p>Complete some lessons first to unlock quiz questions!</p>
      </div>
    );
  }

  const currentQuestion = questions[currentQuestionIndex];
  const score = showResults ? calculateScore() : null;
  const gradeInfo = showResults ? getScoreGrade(score.percentage) : null;

  return (
    <div className="quiz">
      <div className="quiz-header">
        <h1>React Best Practices Quiz</h1>
        <div className="quiz-stats">
          <div className="stat-item">
            <span className="stat-label">Questions:</span>
            <span className="stat-value">{questions.length}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Time:</span>
            <span className="stat-value">{formatTime(timeSpent)}</span>
          </div>
          <div className="stat-item">
            <span className="stat-label">Progress:</span>
            <span className="stat-value">
              {Object.keys(selectedAnswers).length} / {questions.length}
            </span>
          </div>
        </div>
      </div>

      {!showResults ? (
        <div className="quiz-content">
          <div className="question-navigation">
            <div className="question-indicators">
              {questions.map((_, index) => (
                <button
                  key={index}
                  className={`question-indicator ${
                    index === currentQuestionIndex ? 'question-indicator--current' : ''
                  } ${
                    selectedAnswers.hasOwnProperty(index) ? 'question-indicator--answered' : ''
                  }`}
                  onClick={() => setCurrentQuestionIndex(index)}
                >
                  {index + 1}
                </button>
              ))}
            </div>
            <div className="progress-bar">
              <div
                className="progress-fill"
                style={{
                  width: `${((currentQuestionIndex + 1) / questions.length) * 100}%`
                }}
              ></div>
            </div>
          </div>

          <div className="question-card">
            <div className="question-header">
              <h2>Question {currentQuestionIndex + 1}</h2>
              <span className="question-counter">
                {currentQuestionIndex + 1} of {questions.length}
              </span>
            </div>

            <div className="question-content">
              <p className="question-text">{currentQuestion.question}</p>

              <div className="answer-options">
                {currentQuestion.options.map((option, optionIndex) => {
                  const isSelected = selectedAnswers[currentQuestionIndex] === optionIndex;

                  return (
                    <label
                      key={optionIndex}
                      className={`answer-option ${isSelected ? 'answer-option--selected' : ''}`}
                    >
                      <input
                        type="radio"
                        name={`question-${currentQuestionIndex}`}
                        value={optionIndex}
                        checked={isSelected}
                        onChange={() => handleAnswerSelect(currentQuestionIndex, optionIndex)}
                      />
                      <span className="option-letter">
                        {String.fromCharCode(65 + optionIndex)}
                      </span>
                      <span className="option-text">{option}</span>
                    </label>
                  );
                })}
              </div>
            </div>

            <div className="question-actions">
              <button
                className="btn btn-secondary"
                onClick={handlePreviousQuestion}
                disabled={currentQuestionIndex === 0}
              >
                Previous
              </button>

              <div className="center-actions">
                {currentQuestionIndex === questions.length - 1 ? (
                  <button
                    className="btn btn-success btn-lg"
                    onClick={handleSubmitQuiz}
                    disabled={!allQuestionsAnswered()}
                  >
                    <Trophy size={20} />
                    Submit Quiz
                  </button>
                ) : (
                  <button
                    className="btn btn-primary"
                    onClick={handleNextQuestion}
                    disabled={!selectedAnswers.hasOwnProperty(currentQuestionIndex)}
                  >
                    Next
                    <ArrowRight size={16} />
                  </button>
                )}
              </div>

              <button
                className="btn btn-secondary"
                onClick={handleNextQuestion}
                disabled={currentQuestionIndex === questions.length - 1}
              >
                Next
              </button>
            </div>
          </div>
        </div>
      ) : (
        <div className="quiz-results">
          <div className="results-header">
            <div className="score-display">
              <div
                className="grade-circle"
                style={{ backgroundColor: gradeInfo.color }}
              >
                {gradeInfo.grade}
              </div>
              <div className="score-details">
                <h2>{gradeInfo.message}</h2>
                <div className="score-stats">
                  <span className="score-percentage">{score.percentage}%</span>
                  <span className="score-fraction">
                    {score.correct} out of {score.total} correct
                  </span>
                </div>
                <div className="time-stats">
                  Completed in {formatTime(timeSpent)}
                </div>
              </div>
            </div>
          </div>

          <div className="detailed-results">
            <h3>Question Review</h3>
            <div className="questions-review">
              {questions.map((question, questionIndex) => {
                const userAnswer = selectedAnswers[questionIndex];
                const isCorrect = userAnswer === question.correct;

                return (
                  <div
                    key={questionIndex}
                    className={`review-question ${isCorrect ? 'review-question--correct' : 'review-question--incorrect'}`}
                  >
                    <div className="review-header">
                      <div className="review-status">
                        {isCorrect ? (
                          <CheckCircle size={20} className="status-correct" />
                        ) : (
                          <XCircle size={20} className="status-incorrect" />
                        )}
                        <span>Question {questionIndex + 1}</span>
                      </div>
                    </div>

                    <p className="review-question-text">{question.question}</p>

                    <div className="review-answers">
                      {question.options.map((option, optionIndex) => {
                        const isUserAnswer = userAnswer === optionIndex;
                        const isCorrectAnswer = optionIndex === question.correct;

                        return (
                          <div
                            key={optionIndex}
                            className={`review-option ${
                              isCorrectAnswer ? 'review-option--correct' : ''
                            } ${
                              isUserAnswer && !isCorrectAnswer ? 'review-option--incorrect' : ''
                            }`}
                          >
                            <span className="option-letter">
                              {String.fromCharCode(65 + optionIndex)}
                            </span>
                            <span>{option}</span>
                            {isCorrectAnswer && <CheckCircle size={16} />}
                            {isUserAnswer && !isCorrectAnswer && <XCircle size={16} />}
                          </div>
                        );
                      })}
                    </div>

                    {question.explanation && (
                      <div className="review-explanation">
                        <strong>Explanation:</strong> {question.explanation}
                      </div>
                    )}
                  </div>
                );
              })}
            </div>
          </div>

          <div className="results-actions">
            <button
              className="btn btn-primary btn-lg"
              onClick={handleRestartQuiz}
            >
              <RotateCcw size={20} />
              Take Quiz Again
            </button>
          </div>
        </div>
      )}

      <style jsx>{`
        .quiz {
          padding: var(--spacing-xl);
          max-width: 800px;
          margin: 0 auto;
        }

        .quiz-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .quiz-header h1 {
          margin-bottom: var(--spacing-lg);
        }

        .quiz-stats {
          display: flex;
          justify-content: center;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-lg);
        }

        .stat-item {
          display: flex;
          flex-direction: column;
          align-items: center;
          gap: var(--spacing-xs);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .stat-value {
          font-size: var(--font-size-lg);
          font-weight: 600;
          color: var(--text-primary);
        }

        .question-navigation {
          margin-bottom: var(--spacing-xl);
        }

        .question-indicators {
          display: flex;
          justify-content: center;
          flex-wrap: wrap;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .question-indicator {
          width: 40px;
          height: 40px;
          border: 2px solid var(--border-color);
          border-radius: 50%;
          background: var(--bg-secondary);
          color: var(--text-secondary);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .question-indicator:hover {
          border-color: var(--accent-blue);
        }

        .question-indicator--current {
          border-color: var(--accent-blue);
          background: var(--accent-blue);
          color: white;
        }

        .question-indicator--answered {
          background: var(--accent-green);
          border-color: var(--accent-green);
          color: white;
        }

        .progress-bar {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
        }

        .progress-fill {
          height: 100%;
          background: var(--accent-blue);
          transition: width 0.3s ease;
        }

        .question-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }

        .question-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
          padding-bottom: var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
        }

        .question-header h2 {
          margin: 0;
          color: var(--text-primary);
        }

        .question-counter {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .question-text {
          font-size: var(--font-size-lg);
          color: var(--text-primary);
          line-height: 1.6;
          margin-bottom: var(--spacing-xl);
        }

        .answer-options {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
          margin-bottom: var(--spacing-xl);
        }

        .answer-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .answer-option:hover {
          border-color: var(--accent-blue);
          background: rgba(99, 179, 237, 0.1);
        }

        .answer-option--selected {
          border-color: var(--accent-blue);
          background: rgba(99, 179, 237, 0.1);
        }

        .answer-option input {
          display: none;
        }

        .option-letter {
          width: 30px;
          height: 30px;
          display: flex;
          align-items: center;
          justify-content: center;
          background: var(--bg-tertiary);
          border-radius: 50%;
          font-weight: 600;
          color: var(--text-primary);
          flex-shrink: 0;
        }

        .answer-option--selected .option-letter {
          background: var(--accent-blue);
          color: white;
        }

        .option-text {
          flex: 1;
          color: var(--text-primary);
        }

        .question-actions {
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .center-actions {
          display: flex;
          gap: var(--spacing-md);
        }

        .quiz-results {
          text-align: center;
        }

        .results-header {
          margin-bottom: var(--spacing-2xl);
        }

        .score-display {
          display: flex;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
        }

        .grade-circle {
          width: 120px;
          height: 120px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-3xl);
          font-weight: bold;
          color: white;
        }

        .score-details h2 {
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .score-percentage {
          font-size: var(--font-size-2xl);
          font-weight: bold;
          color: var(--text-primary);
        }

        .score-fraction {
          display: block;
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .time-stats {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .detailed-results {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
          margin-bottom: var(--spacing-xl);
          text-align: left;
        }

        .detailed-results h3 {
          text-align: center;
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }

        .questions-review {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .review-question {
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: var(--spacing-lg);
        }

        .review-question--correct {
          border-left: 4px solid var(--accent-green);
        }

        .review-question--incorrect {
          border-left: 4px solid var(--accent-red);
        }

        .review-header {
          margin-bottom: var(--spacing-md);
        }

        .review-status {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          font-weight: 500;
        }

        .status-correct {
          color: var(--accent-green);
        }

        .status-incorrect {
          color: var(--accent-red);
        }

        .review-question-text {
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .review-answers {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .review-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm);
          border-radius: var(--border-radius-sm);
        }

        .review-option--correct {
          background: rgba(104, 211, 145, 0.1);
          color: var(--accent-green);
        }

        .review-option--incorrect {
          background: rgba(252, 129, 129, 0.1);
          color: var(--accent-red);
        }

        .review-explanation {
          padding: var(--spacing-md);
          background: rgba(99, 179, 237, 0.1);
          border-radius: var(--border-radius-sm);
          font-size: var(--font-size-sm);
          color: var(--text-primary);
        }

        .quiz-empty {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
          text-align: center;
          color: var(--text-muted);
        }

        .quiz-empty svg {
          margin-bottom: var(--spacing-lg);
          opacity: 0.5;
        }

        @media (max-width: 768px) {
          .quiz {
            padding: var(--spacing-md);
          }

          .quiz-stats {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .score-display {
            flex-direction: column;
            gap: var(--spacing-lg);
          }

          .question-actions {
            flex-direction: column;
            gap: var(--spacing-md);
          }

          .center-actions {
            order: -1;
          }
        }
      `}</style>
    </div>
  );
};

export default Quiz;
