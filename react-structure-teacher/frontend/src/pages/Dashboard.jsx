import React from "react";
import { Link } from "react-router-dom";
import {
  BookOpen,
  FolderTree,
  CheckCircle,
  Award,
  TrendingUp,
  Star,
} from "lucide-react";

const Dashboard = ({ bestPractices, lessons, onTabChange }) => {
  const completedLessons = 3; // This would come from user progress
  const totalLessons = lessons?.length || 5;
  const progressPercentage = Math.round(
    (completedLessons / totalLessons) * 100,
  );

  const quickStats = [
    {
      label: "Lessons Completed",
      value: `${completedLessons}/${totalLessons}`,
      percentage: progressPercentage,
      icon: BookOpen,
      color: "blue",
    },
    {
      label: "Quiz Average",
      value: "85%",
      percentage: 85,
      icon: Award,
      color: "green",
    },
    {
      label: "Best Practices Learned",
      value: "12/16",
      percentage: 75,
      icon: Star,
      color: "yellow",
    },
    {
      label: "Projects Validated",
      value: "4",
      percentage: 100,
      icon: CheckCircle,
      color: "purple",
    },
  ];

  const recentActivities = [
    {
      action: "Completed",
      item: "Folder Organization Strategies",
      time: "2 hours ago",
      type: "lesson",
    },
    {
      action: "Scored 90% on",
      item: "Naming Conventions Quiz",
      time: "1 day ago",
      type: "quiz",
    },
    {
      action: "Validated",
      item: "E-commerce Project Structure",
      time: "2 days ago",
      type: "validation",
    },
    {
      action: "Started",
      item: "Component Architecture Lesson",
      time: "3 days ago",
      type: "lesson",
    },
  ];

  const quickActions = [
    {
      title: "Continue Learning",
      description: "Resume your current lesson on component architecture",
      action: "Continue Lesson",
      path: "/lessons",
      icon: BookOpen,
      color: "blue",
    },
    {
      title: "Explore Structures",
      description: "Interactive examples of good vs bad project structures",
      action: "Explore Now",
      path: "/explorer",
      icon: FolderTree,
      color: "green",
    },
    {
      title: "Test Your Knowledge",
      description: "Take a quiz to reinforce what you've learned",
      action: "Start Quiz",
      path: "/quiz",
      icon: Award,
      color: "purple",
    },
    {
      title: "Validate Project",
      description: "Check your React project against best practices",
      action: "Validate",
      path: "/validator",
      icon: CheckCircle,
      color: "yellow",
    },
  ];

  return (
    <div className="dashboard">
      <header className="dashboard-header">
        <h1>Welcome to React Structure Teacher</h1>
        <p>
          Master React project organization and filesystem best practices
          through interactive learning
        </p>
      </header>

      {/* Progress Overview */}
      <section className="progress-overview">
        <h2>Your Learning Progress</h2>
        <div className="stats-grid">
          {quickStats.map((stat, index) => {
            const Icon = stat.icon;
            return (
              <div key={index} className={`stat-card stat-card--${stat.color}`}>
                <div className="stat-header">
                  <Icon size={24} />
                  <span className="stat-value">{stat.value}</span>
                </div>
                <div className="stat-label">{stat.label}</div>
                <div className="stat-progress">
                  <div
                    className="stat-progress-bar"
                    style={{ width: `${stat.percentage}%` }}
                  ></div>
                </div>
              </div>
            );
          })}
        </div>
      </section>

      {/* Quick Actions */}
      <section className="quick-actions">
        <h2>Quick Actions</h2>
        <div className="actions-grid">
          {quickActions.map((action, index) => {
            const Icon = action.icon;
            return (
              <Link
                key={index}
                to={action.path}
                className={`action-card action-card--${action.color}`}
                onClick={() => onTabChange(action.path.slice(1))}
              >
                <div className="action-icon">
                  <Icon size={32} />
                </div>
                <div className="action-content">
                  <h3>{action.title}</h3>
                  <p>{action.description}</p>
                  <span className="action-button">{action.action}</span>
                </div>
              </Link>
            );
          })}
        </div>
      </section>

      {/* Recent Activity */}
      <section className="recent-activity">
        <h2>Recent Activity</h2>
        <div className="activity-list">
          {recentActivities.map((activity, index) => (
            <div key={index} className="activity-item">
              <div className={`activity-icon activity-icon--${activity.type}`}>
                {activity.type === "lesson" && <BookOpen size={16} />}
                {activity.type === "quiz" && <Award size={16} />}
                {activity.type === "validation" && <CheckCircle size={16} />}
              </div>
              <div className="activity-content">
                <span className="activity-text">
                  <strong>{activity.action}</strong> {activity.item}
                </span>
                <span className="activity-time">{activity.time}</span>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Core Principles Preview */}
      {bestPractices && (
        <section className="principles-preview">
          <h2>Core Principles</h2>
          <p>The fundamental concepts that guide React project structure</p>
          <div className="principles-grid">
            {bestPractices.corePrinciples?.map((principle, index) => (
              <div key={index} className="principle-card">
                <h3>{principle.title}</h3>
                <p>{principle.description}</p>
                <ul className="principle-examples">
                  {principle.examples?.slice(0, 2).map((example, i) => (
                    <li key={i}>{example}</li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
          <Link to="/lessons" className="btn btn-primary">
            <BookOpen size={16} />
            Start Learning
          </Link>
        </section>
      )}

      <style jsx>{`
        .dashboard {
          padding: var(--spacing-xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .dashboard-header {
          text-align: center;
          margin-bottom: var(--spacing-2xl);
        }

        .dashboard-header h1 {
          font-size: var(--font-size-3xl);
          margin-bottom: var(--spacing-md);
          background: linear-gradient(
            135deg,
            var(--accent-blue),
            var(--accent-purple)
          );
          -webkit-background-clip: text;
          -webkit-text-fill-color: transparent;
          background-clip: text;
        }

        .dashboard-header p {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
          max-width: 600px;
          margin: 0 auto;
        }

        .progress-overview,
        .quick-actions,
        .recent-activity,
        .principles-preview {
          margin-bottom: var(--spacing-2xl);
        }

        .progress-overview h2,
        .quick-actions h2,
        .recent-activity h2,
        .principles-preview h2 {
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }

        .stats-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(240px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-lg);
        }

        .stat-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-lg);
          position: relative;
          overflow: hidden;
        }

        .stat-card::before {
          content: "";
          position: absolute;
          top: 0;
          left: 0;
          right: 0;
          height: 4px;
          background: var(--accent-blue);
        }

        .stat-card--green::before {
          background: var(--accent-green);
        }
        .stat-card--yellow::before {
          background: var(--accent-yellow);
        }
        .stat-card--purple::before {
          background: var(--accent-purple);
        }

        .stat-header {
          display: flex;
          align-items: center;
          justify-content: space-between;
          margin-bottom: var(--spacing-sm);
        }

        .stat-value {
          font-size: var(--font-size-2xl);
          font-weight: 600;
          color: var(--text-primary);
        }

        .stat-label {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          margin-bottom: var(--spacing-md);
        }

        .stat-progress {
          height: 6px;
          background: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
        }

        .stat-progress-bar {
          height: 100%;
          background: var(--accent-green);
          border-radius: var(--border-radius-sm);
          transition: width 0.3s ease;
        }

        .actions-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(280px, 1fr));
          gap: var(--spacing-lg);
        }

        .action-card {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-lg);
          text-decoration: none;
          color: inherit;
          transition: all 0.2s ease;
        }

        .action-card:hover {
          transform: translateY(-2px);
          box-shadow: var(--shadow-lg);
          border-color: var(--accent-blue);
        }

        .action-icon {
          flex-shrink: 0;
          width: 60px;
          height: 60px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: var(--border-radius-lg);
          background: rgba(99, 179, 237, 0.1);
          color: var(--accent-blue);
        }

        .action-card--green .action-icon {
          background: rgba(104, 211, 145, 0.1);
          color: var(--accent-green);
        }

        .action-card--purple .action-icon {
          background: rgba(183, 148, 246, 0.1);
          color: var(--accent-purple);
        }

        .action-card--yellow .action-icon {
          background: rgba(246, 224, 94, 0.1);
          color: var(--accent-yellow);
        }

        .action-content h3 {
          margin-bottom: var(--spacing-xs);
          color: var(--text-primary);
        }

        .action-content p {
          margin-bottom: var(--spacing-md);
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
        }

        .action-button {
          display: inline-flex;
          align-items: center;
          gap: var(--spacing-xs);
          font-size: var(--font-size-sm);
          font-weight: 500;
          color: var(--accent-blue);
        }

        .activity-list {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
        }

        .activity-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-md) var(--spacing-lg);
          border-bottom: 1px solid var(--border-color);
        }

        .activity-item:last-child {
          border-bottom: none;
        }

        .activity-icon {
          width: 32px;
          height: 32px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          flex-shrink: 0;
        }

        .activity-icon--lesson {
          background: rgba(99, 179, 237, 0.1);
          color: var(--accent-blue);
        }

        .activity-icon--quiz {
          background: rgba(183, 148, 246, 0.1);
          color: var(--accent-purple);
        }

        .activity-icon--validation {
          background: rgba(104, 211, 145, 0.1);
          color: var(--accent-green);
        }

        .activity-content {
          flex: 1;
          display: flex;
          justify-content: space-between;
          align-items: center;
        }

        .activity-text {
          color: var(--text-primary);
        }

        .activity-time {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .principles-preview {
          text-align: center;
        }

        .principles-preview p {
          margin-bottom: var(--spacing-lg);
          color: var(--text-secondary);
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
          margin-bottom: var(--spacing-xl);
        }

        .principle-card {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-lg);
          text-align: left;
        }

        .principle-card h3 {
          color: var(--accent-blue);
          margin-bottom: var(--spacing-sm);
        }

        .principle-card p {
          margin-bottom: var(--spacing-md);
          color: var(--text-secondary);
        }

        .principle-examples {
          list-style: none;
          padding-left: 0;
        }

        .principle-examples li {
          position: relative;
          padding-left: var(--spacing-lg);
          margin-bottom: var(--spacing-xs);
          color: var(--text-muted);
          font-size: var(--font-size-sm);
        }

        .principle-examples li::before {
          content: "✓";
          position: absolute;
          left: 0;
          color: var(--accent-green);
          font-weight: bold;
        }

        @media (max-width: 768px) {
          .dashboard {
            padding: var(--spacing-md);
          }

          .stats-grid {
            grid-template-columns: 1fr;
          }

          .actions-grid {
            grid-template-columns: 1fr;
          }

          .principles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default Dashboard;
