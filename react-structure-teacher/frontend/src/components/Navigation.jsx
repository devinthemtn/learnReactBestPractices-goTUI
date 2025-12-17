import React from 'react';
import { Link, useLocation } from 'react-router-dom';
import clsx from 'clsx';

const Navigation = ({ items, activeTab, onTabChange }) => {
  const location = useLocation();

  return (
    <nav className="navigation">
      <div className="nav-header">
        <h2 className="nav-title">Learn React</h2>
        <p className="nav-subtitle">Best Practices</p>
      </div>

      <ul className="nav-list">
        {items.map((item) => {
          const Icon = item.icon;
          const isActive = location.pathname === item.path;

          return (
            <li key={item.id} className="nav-item">
              <Link
                to={item.path}
                className={clsx('nav-link', {
                  'nav-link--active': isActive
                })}
                onClick={() => onTabChange(item.id)}
              >
                <Icon size={20} />
                <span>{item.label}</span>
              </Link>
            </li>
          );
        })}
      </ul>

      <div className="nav-footer">
        <div className="nav-progress">
          <h4>Your Progress</h4>
          <div className="progress-item">
            <span>Lessons Completed</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: '60%' }}></div>
            </div>
            <span className="progress-text">3/5</span>
          </div>
          <div className="progress-item">
            <span>Quiz Score</span>
            <div className="progress">
              <div className="progress-bar" style={{ width: '85%' }}></div>
            </div>
            <span className="progress-text">85%</span>
          </div>
        </div>
      </div>

      <style jsx>{`
        .navigation {
          width: 280px;
          height: calc(100vh - 30px);
          background: var(--bg-secondary);
          border-right: 1px solid var(--border-color);
          display: flex;
          flex-direction: column;
          overflow-y: auto;
        }

        .nav-header {
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--border-color);
          text-align: center;
        }

        .nav-title {
          font-size: var(--font-size-xl);
          margin-bottom: var(--spacing-xs);
          color: var(--accent-blue);
        }

        .nav-subtitle {
          font-size: var(--font-size-sm);
          color: var(--text-muted);
          margin: 0;
        }

        .nav-list {
          flex: 1;
          padding: var(--spacing-md);
          list-style: none;
        }

        .nav-item {
          margin-bottom: var(--spacing-xs);
        }

        .nav-link {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          color: var(--text-secondary);
          text-decoration: none;
          border-radius: var(--border-radius-md);
          transition: all 0.2s ease;
          font-weight: 500;
        }

        .nav-link:hover {
          background-color: var(--hover-bg);
          color: var(--text-primary);
        }

        .nav-link--active {
          background-color: var(--accent-blue);
          color: white;
        }

        .nav-link--active:hover {
          background-color: #4299e1;
        }

        .nav-footer {
          padding: var(--spacing-lg);
          border-top: 1px solid var(--border-color);
          background: var(--bg-primary);
        }

        .nav-progress h4 {
          font-size: var(--font-size-sm);
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .progress-item {
          margin-bottom: var(--spacing-md);
        }

        .progress-item:last-child {
          margin-bottom: 0;
        }

        .progress-item span:first-child {
          display: block;
          font-size: var(--font-size-xs);
          color: var(--text-muted);
          margin-bottom: var(--spacing-xs);
        }

        .progress {
          height: 6px;
          background-color: var(--bg-tertiary);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          margin-bottom: var(--spacing-xs);
        }

        .progress-bar {
          height: 100%;
          background-color: var(--accent-green);
          transition: width 0.3s ease;
        }

        .progress-text {
          font-size: var(--font-size-xs);
          color: var(--text-muted);
          font-weight: 500;
        }

        @media (max-width: 768px) {
          .navigation {
            width: 100%;
            height: auto;
            position: fixed;
            bottom: 0;
            left: 0;
            z-index: 1000;
            flex-direction: row;
          }

          .nav-header,
          .nav-footer {
            display: none;
          }

          .nav-list {
            display: flex;
            justify-content: space-around;
            padding: var(--spacing-sm);
            width: 100%;
          }

          .nav-item {
            margin: 0;
          }

          .nav-link {
            flex-direction: column;
            gap: var(--spacing-xs);
            padding: var(--spacing-xs);
            font-size: var(--font-size-xs);
          }

          .nav-link span {
            display: none;
          }
        }
      `}</style>
    </nav>
  );
};

export default Navigation;
