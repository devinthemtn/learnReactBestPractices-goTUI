import React, { useState, useEffect } from 'react';
import { useParams, useNavigate } from 'react-router-dom';
import { ChevronLeft, ChevronRight, BookOpen, CheckCircle, Play, Clock } from 'lucide-react';

const Lessons = ({ lessons, bestPractices }) => {
  const { lessonId } = useParams();
  const navigate = useNavigate();
  const [currentLessonIndex, setCurrentLessonIndex] = useState(0);
  const [completedLessons, setCompletedLessons] = useState(new Set([0, 1])); // Mock completed lessons
  const [quizAnswers, setQuizAnswers] = useState({});
  const [showQuizResults, setShowQuizResults] = useState(false);

  useEffect(() => {
    if (lessonId && lessons) {
      const index = lessons.findIndex(lesson => lesson.id.toString() === lessonId);
      if (index !== -1) {
        setCurrentLessonIndex(index);
      }
    }
  }, [lessonId, lessons]);

  const currentLesson = lessons?.[currentLessonIndex];

  const handleLessonSelect = (index) => {
    setCurrentLessonIndex(index);
    setQuizAnswers({});
    setShowQuizResults(false);
    navigate(`/lessons/${lessons[index].id}`);
  };

  const handleQuizAnswer = (questionIndex, answer) => {
    setQuizAnswers(prev => ({
      ...prev,
      [questionIndex]: answer
    }));
  };

  const handleQuizSubmit = () => {
    setShowQuizResults(true);
    // Mark lesson as completed if quiz passed
    const score = calculateQuizScore();
    if (score >= 70) {
      setCompletedLessons(prev => new Set([...prev, currentLessonIndex]));
    }
  };

  const calculateQuizScore = () => {
    if (!currentLesson?.quiz || currentLesson.quiz.length === 0) return 100;

    const correctAnswers = currentLesson.quiz.filter((question, index) =>
      quizAnswers[index] === question.correct
    ).length;

    return Math.round((correctAnswers / currentLesson.quiz.length) * 100);
  };

  const nextLesson = () => {
    if (currentLessonIndex < lessons.length - 1) {
      handleLessonSelect(currentLessonIndex + 1);
    }
  };

  const previousLesson = () => {
    if (currentLessonIndex > 0) {
      handleLessonSelect(currentLessonIndex - 1);
    }
  };

  const formatContent = (content) => {
    if (!content) return '';

    // Simple markdown-like formatting
    return content
      .replace(/### (.*)/g, '<h3>$1</h3>')
      .replace(/## (.*)/g, '<h2>$1</h2>')
      .replace(/# (.*)/g, '<h1>$1</h1>')
      .replace(/\*\*(.*?)\*\*/g, '<strong>$1</strong>')
      .replace(/\*(.*?)\*/g, '<em>$1</em>')
      .replace(/`(.*?)`/g, '<code class="code-inline">$1</code>')
      .replace(/```([\s\S]*?)```/g, '<pre class="code-block"><code>$1</code></pre>')
      .split('\n')
      .map(line => line.trim() ? `<p>${line}</p>` : '<br>')
      .join('');
  };

  if (!lessons || lessons.length === 0) {
    return (
      <div className="lessons-loading">
        <div className="spinner"></div>
        <p>Loading lessons...</p>
      </div>
    );
  }

  return (
    <div className="lessons">
      <div className="lessons-sidebar">
        <div className="lessons-header">
          <h2>Lessons</h2>
          <p>Interactive React structure tutorials</p>
        </div>

        <div className="lessons-list">
          {lessons.map((lesson, index) => {
            const isCompleted = completedLessons.has(index);
            const isCurrent = index === currentLessonIndex;
            const isLocked = index > 0 && !completedLessons.has(index - 1);

            return (
              <div
                key={lesson.id}
                className={`lesson-item ${isCurrent ? 'lesson-item--current' : ''} ${isLocked ? 'lesson-item--locked' : ''}`}
                onClick={() => !isLocked && handleLessonSelect(index)}
              >
                <div className="lesson-status">
                  {isCompleted ? (
                    <CheckCircle size={20} className="status-completed" />
                  ) : isCurrent ? (
                    <Play size={20} className="status-current" />
                  ) : (
                    <Clock size={20} className="status-pending" />
                  )}
                </div>
                <div className="lesson-content">
                  <h4>{lesson.title}</h4>
                  <p>{lesson.description}</p>
                  {isLocked && (
                    <span className="lesson-locked">Complete previous lesson to unlock</span>
                  )}
                </div>
              </div>
            );
          })}
        </div>
      </div>

      <div className="lessons-main">
        {currentLesson ? (
          <>
            <div className="lesson-header">
              <div className="lesson-nav">
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={previousLesson}
                  disabled={currentLessonIndex === 0}
                >
                  <ChevronLeft size={16} />
                  Previous
                </button>
                <span className="lesson-counter">
                  Lesson {currentLessonIndex + 1} of {lessons.length}
                </span>
                <button
                  className="btn btn-secondary btn-sm"
                  onClick={nextLesson}
                  disabled={currentLessonIndex === lessons.length - 1}
                >
                  Next
                  <ChevronRight size={16} />
                </button>
              </div>
              <h1>{currentLesson.title}</h1>
              <p className="lesson-description">{currentLesson.description}</p>
            </div>

            <div className="lesson-content">
              <div
                className="lesson-text"
                dangerouslySetInnerHTML={{ __html: formatContent(currentLesson.content) }}
              />

              {currentLesson.quiz && currentLesson.quiz.length > 0 && (
                <div className="lesson-quiz">
                  <h3>Knowledge Check</h3>
                  <p>Test your understanding of this lesson</p>

                  {currentLesson.quiz.map((question, questionIndex) => (
                    <div key={questionIndex} className="quiz-question">
                      <h4>Question {questionIndex + 1}</h4>
                      <p>{question.question}</p>

                      <div className="quiz-options">
                        {question.options.map((option, optionIndex) => {
                          const isSelected = quizAnswers[questionIndex] === optionIndex;
                          const isCorrect = optionIndex === question.correct;
                          const shouldShowResult = showQuizResults;

                          return (
                            <label
                              key={optionIndex}
                              className={`quiz-option ${isSelected ? 'quiz-option--selected' : ''} ${
                                shouldShowResult
                                  ? isCorrect
                                    ? 'quiz-option--correct'
                                    : isSelected
                                    ? 'quiz-option--incorrect'
                                    : ''
                                  : ''
                              }`}
                            >
                              <input
                                type="radio"
                                name={`question-${questionIndex}`}
                                value={optionIndex}
                                checked={isSelected}
                                onChange={() => handleQuizAnswer(questionIndex, optionIndex)}
                                disabled={showQuizResults}
                              />
                              <span>{option}</span>
                            </label>
                          );
                        })}
                      </div>

                      {showQuizResults && (
                        <div className="quiz-explanation">
                          <strong>Explanation:</strong> {question.explanation}
                        </div>
                      )}
                    </div>
                  ))}

                  {!showQuizResults ? (
                    <button
                      className="btn btn-primary"
                      onClick={handleQuizSubmit}
                      disabled={Object.keys(quizAnswers).length !== currentLesson.quiz.length}
                    >
                      Submit Quiz
                    </button>
                  ) : (
                    <div className="quiz-results">
                      <h4>Quiz Results</h4>
                      <div className={`quiz-score ${calculateQuizScore() >= 70 ? 'quiz-score--pass' : 'quiz-score--fail'}`}>
                        Score: {calculateQuizScore()}%
                      </div>
                      {calculateQuizScore() >= 70 ? (
                        <p className="quiz-message quiz-message--success">
                          Excellent! You've mastered this lesson.
                          {currentLessonIndex < lessons.length - 1 && (
                            <button className="btn btn-primary btn-sm mt-md" onClick={nextLesson}>
                              Continue to Next Lesson
                            </button>
                          )}
                        </p>
                      ) : (
                        <p className="quiz-message quiz-message--retry">
                          Review the lesson content and try again to unlock the next lesson.
                        </p>
                      )}
                    </div>
                  )}
                </div>
              )}
            </div>
          </>
        ) : (
          <div className="lesson-placeholder">
            <BookOpen size={64} />
            <h2>Select a Lesson</h2>
            <p>Choose a lesson from the sidebar to begin learning</p>
          </div>
        )}
      </div>

      <style jsx>{`
        .lessons {
          display: flex;
          height: calc(100vh - 30px);
          overflow: hidden;
        }

        .lessons-sidebar {
          width: 350px;
          background: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .lessons-header {
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--border-color);
        }

        .lessons-header h2 {
          margin-bottom: var(--spacing-xs);
          color: var(--text-primary);
        }

        .lessons-header p {
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        .lessons-list {
          flex: 1;
          padding: var(--spacing-md);
        }

        .lesson-item {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-md);
          margin-bottom: var(--spacing-sm);
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
          border: 1px solid transparent;
        }

        .lesson-item:hover:not(.lesson-item--locked) {
          background: var(--hover-bg);
        }

        .lesson-item--current {
          background: rgba(99, 179, 237, 0.1);
          border-color: var(--accent-blue);
        }

        .lesson-item--locked {
          opacity: 0.5;
          cursor: not-allowed;
        }

        .lesson-status {
          flex-shrink: 0;
          margin-top: var(--spacing-xs);
        }

        .status-completed {
          color: var(--accent-green);
        }

        .status-current {
          color: var(--accent-blue);
        }

        .status-pending {
          color: var(--text-muted);
        }

        .lesson-content h4 {
          margin-bottom: var(--spacing-xs);
          color: var(--text-primary);
          font-size: var(--font-size-base);
        }

        .lesson-content p {
          margin-bottom: var(--spacing-xs);
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }

        .lesson-locked {
          font-size: var(--font-size-xs);
          color: var(--text-muted);
          font-style: italic;
        }

        .lessons-main {
          flex: 1;
          overflow-y: auto;
          padding: var(--spacing-xl);
        }

        .lesson-header {
          margin-bottom: var(--spacing-xl);
        }

        .lesson-nav {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--spacing-lg);
        }

        .lesson-counter {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .lesson-header h1 {
          margin-bottom: var(--spacing-md);
        }

        .lesson-description {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
        }

        .lesson-text :global(h1),
        .lesson-text :global(h2),
        .lesson-text :global(h3) {
          color: var(--text-primary);
          margin: var(--spacing-xl) 0 var(--spacing-md) 0;
        }

        .lesson-text :global(h1):first-child,
        .lesson-text :global(h2):first-child,
        .lesson-text :global(h3):first-child {
          margin-top: 0;
        }

        .lesson-text :global(p) {
          margin-bottom: var(--spacing-md);
          line-height: 1.7;
        }

        .lesson-quiz {
          margin-top: var(--spacing-2xl);
          padding: var(--spacing-xl);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
        }

        .lesson-quiz h3 {
          margin-bottom: var(--spacing-xs);
          color: var(--accent-blue);
        }

        .lesson-quiz > p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-xl);
        }

        .quiz-question {
          margin-bottom: var(--spacing-xl);
          padding-bottom: var(--spacing-xl);
          border-bottom: 1px solid var(--border-color);
        }

        .quiz-question:last-of-type {
          border-bottom: none;
          margin-bottom: var(--spacing-lg);
        }

        .quiz-question h4 {
          color: var(--text-primary);
          margin-bottom: var(--spacing-xs);
        }

        .quiz-question p {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-lg);
        }

        .quiz-options {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-lg);
        }

        .quiz-option {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md);
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .quiz-option:hover {
          background: var(--hover-bg);
        }

        .quiz-option--selected {
          border-color: var(--accent-blue);
          background: rgba(99, 179, 237, 0.1);
        }

        .quiz-option--correct {
          border-color: var(--accent-green);
          background: rgba(104, 211, 145, 0.1);
        }

        .quiz-option--incorrect {
          border-color: var(--accent-red);
          background: rgba(252, 129, 129, 0.1);
        }

        .quiz-option input {
          margin: 0;
        }

        .quiz-explanation {
          padding: var(--spacing-md);
          background: rgba(99, 179, 237, 0.1);
          border: 1px solid var(--accent-blue);
          border-radius: var(--border-radius-md);
          color: var(--text-primary);
          font-size: var(--font-size-sm);
        }

        .quiz-results {
          text-align: center;
          padding: var(--spacing-lg);
          background: var(--bg-primary);
          border-radius: var(--border-radius-md);
        }

        .quiz-results h4 {
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .quiz-score {
          font-size: var(--font-size-2xl);
          font-weight: bold;
          margin-bottom: var(--spacing-md);
        }

        .quiz-score--pass {
          color: var(--accent-green);
        }

        .quiz-score--fail {
          color: var(--accent-red);
        }

        .quiz-message--success {
          color: var(--accent-green);
        }

        .quiz-message--retry {
          color: var(--accent-yellow);
        }

        .lesson-placeholder {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 60vh;
          text-align: center;
          color: var(--text-muted);
        }

        .lesson-placeholder svg {
          margin-bottom: var(--spacing-lg);
          opacity: 0.5;
        }

        .lessons-loading {
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          height: 100vh;
          gap: var(--spacing-lg);
        }

        @media (max-width: 768px) {
          .lessons {
            flex-direction: column;
          }

          .lessons-sidebar {
            width: 100%;
            height: auto;
            max-height: 40vh;
          }

          .lessons-main {
            padding: var(--spacing-md);
          }

          .lesson-nav {
            flex-wrap: wrap;
            gap: var(--spacing-sm);
          }
        }
      `}</style>
    </div>
  );
};

export default Lessons;
