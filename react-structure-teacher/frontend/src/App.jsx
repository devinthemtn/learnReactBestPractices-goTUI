import React, { useState, useEffect } from "react";
import {
  BrowserRouter as Router,
  Routes,
  Route,
  Navigate,
} from "react-router-dom";
import {
  BookOpen,
  FolderTree,
  CheckCircle,
  Award,
  Settings,
} from "lucide-react";
import Navigation from "./components/Navigation";
import Dashboard from "./pages/Dashboard";
import Lessons from "./pages/Lessons";
import StructureExplorer from "./pages/StructureExplorer";
import Validator from "./pages/Validator";
import Quiz from "./pages/Quiz";
import { GetBestPractices, GetLessons } from "./wailsjs/go/main/App";

function App() {
  const [bestPractices, setBestPractices] = useState(null);
  const [lessons, setLessons] = useState([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);
  const [activeTab, setActiveTab] = useState("dashboard");

  useEffect(() => {
    loadData();
  }, []);

  const loadData = async () => {
    try {
      setLoading(true);
      const [practicesData, lessonsData] = await Promise.all([
        GetBestPractices(),
        GetLessons(),
      ]);
      setBestPractices(practicesData);
      setLessons(lessonsData);
    } catch (err) {
      setError(err.message);
      console.error("Failed to load data:", err);
    } finally {
      setLoading(false);
    }
  };

  const navigationItems = [
    {
      id: "dashboard",
      label: "Dashboard",
      icon: BookOpen,
      path: "/",
    },
    {
      id: "lessons",
      label: "Lessons",
      icon: BookOpen,
      path: "/lessons",
    },
    {
      id: "explorer",
      label: "Structure Explorer",
      icon: FolderTree,
      path: "/explorer",
    },
    {
      id: "validator",
      label: "Project Validator",
      icon: CheckCircle,
      path: "/validator",
    },
    {
      id: "quiz",
      label: "Quiz",
      icon: Award,
      path: "/quiz",
    },
  ];

  if (loading) {
    return (
      <div className="app-loading">
        <div className="titlebar">React Structure Teacher</div>
        <div className="loading-container">
          <div className="spinner"></div>
          <p>Loading React Structure Teacher...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="app-error">
        <div className="titlebar">React Structure Teacher - Error</div>
        <div className="error-container">
          <h2>Failed to Load Application</h2>
          <p>{error}</p>
          <button className="btn btn-primary" onClick={loadData}>
            Try Again
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="app">
      <div className="titlebar">React Structure Teacher</div>

      <Router>
        <div className="app-layout">
          <aside className="sidebar">
            <Navigation
              items={navigationItems}
              activeTab={activeTab}
              onTabChange={setActiveTab}
            />
          </aside>

          <main className="main-content">
            <Routes>
              <Route
                path="/"
                element={
                  <Dashboard
                    bestPractices={bestPractices}
                    lessons={lessons}
                    onTabChange={setActiveTab}
                  />
                }
              />
              <Route
                path="/lessons"
                element={
                  <Lessons lessons={lessons} bestPractices={bestPractices} />
                }
              />
              <Route
                path="/lessons/:lessonId"
                element={
                  <Lessons lessons={lessons} bestPractices={bestPractices} />
                }
              />
              <Route
                path="/explorer"
                element={<StructureExplorer bestPractices={bestPractices} />}
              />
              <Route
                path="/validator"
                element={<Validator bestPractices={bestPractices} />}
              />
              <Route
                path="/quiz"
                element={
                  <Quiz
                    questions={bestPractices?.quizQuestions || []}
                    lessons={lessons}
                  />
                }
              />
              <Route path="*" element={<Navigate to="/" replace />} />
            </Routes>
          </main>
        </div>
      </Router>

      <style jsx>{`
        .app {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
          color: var(--text-primary);
        }

        .titlebar {
          height: 30px;
          background: var(--bg-secondary);
          border-bottom: 1px solid var(--border-color);
          display: flex;
          align-items: center;
          justify-content: center;
          font-size: var(--font-size-sm);
          color: var(--text-muted);
          -webkit-app-region: drag;
          user-select: none;
          z-index: 1000;
        }

        .app-layout {
          flex: 1;
          display: flex;
          overflow: hidden;
        }

        .sidebar {
          flex-shrink: 0;
        }

        .main-content {
          flex: 1;
          overflow-y: auto;
        }

        .app-loading,
        .app-error {
          width: 100vw;
          height: 100vh;
          display: flex;
          flex-direction: column;
          background: var(--bg-primary);
        }

        .loading-container,
        .error-container {
          flex: 1;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          gap: var(--spacing-lg);
          color: var(--text-primary);
        }

        .spinner {
          width: 40px;
          height: 40px;
          border: 4px solid var(--bg-tertiary);
          border-top: 4px solid var(--accent-blue);
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          0% {
            transform: rotate(0deg);
          }
          100% {
            transform: rotate(360deg);
          }
        }

        .error-container h2 {
          color: var(--accent-red);
        }

        @media (max-width: 768px) {
          .app-layout {
            flex-direction: column;
          }

          .main-content {
            padding-bottom: 80px;
          }
        }
      `}</style>
    </div>
  );
}

export default App;
