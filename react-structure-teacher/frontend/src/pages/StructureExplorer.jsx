import React, { useState } from 'react';
import { ChevronRight, ChevronDown, Folder, File, CheckCircle, XCircle, AlertCircle } from 'lucide-react';

const StructureExplorer = ({ bestPractices }) => {
  const [selectedExample, setSelectedExample] = useState('good');
  const [expandedNodes, setExpandedNodes] = useState(new Set(['src', 'components', 'pages']));

  const examples = {
    good: {
      name: 'Well-Structured React Project',
      description: 'A properly organized React project following best practices',
      type: 'good',
      structure: [
        {
          name: 'my-react-app',
          type: 'folder',
          description: 'Project root directory',
          children: [
            {
              name: 'public',
              type: 'folder',
              description: 'Static assets served directly',
              children: [
                { name: 'index.html', type: 'file', description: 'Main HTML template' },
                { name: 'favicon.ico', type: 'file', description: 'Website favicon' },
                { name: 'manifest.json', type: 'file', description: 'PWA manifest' }
              ]
            },
            {
              name: 'src',
              type: 'folder',
              description: 'All application source code',
              children: [
                {
                  name: 'components',
                  type: 'folder',
                  description: 'Reusable UI components',
                  children: [
                    {
                      name: 'ui',
                      type: 'folder',
                      description: 'Basic UI components',
                      children: [
                        {
                          name: 'Button',
                          type: 'folder',
                          children: [
                            { name: 'Button.jsx', type: 'file', description: 'Button component' },
                            { name: 'Button.module.css', type: 'file', description: 'Component styles' },
                            { name: 'Button.test.jsx', type: 'file', description: 'Component tests' }
                          ]
                        },
                        { name: 'Input.jsx', type: 'file', description: 'Input component' },
                        { name: 'Modal.jsx', type: 'file', description: 'Modal component' }
                      ]
                    },
                    {
                      name: 'layout',
                      type: 'folder',
                      description: 'Layout components',
                      children: [
                        { name: 'Header.jsx', type: 'file', description: 'Site header' },
                        { name: 'Footer.jsx', type: 'file', description: 'Site footer' },
                        { name: 'Sidebar.jsx', type: 'file', description: 'Navigation sidebar' }
                      ]
                    }
                  ]
                },
                {
                  name: 'pages',
                  type: 'folder',
                  description: 'Page-level components (routes)',
                  children: [
                    { name: 'HomePage.jsx', type: 'file', description: 'Home page component' },
                    { name: 'LoginPage.jsx', type: 'file', description: 'Login page component' },
                    { name: 'DashboardPage.jsx', type: 'file', description: 'Dashboard page component' }
                  ]
                },
                {
                  name: 'features',
                  type: 'folder',
                  description: 'Feature-specific modules',
                  children: [
                    {
                      name: 'auth',
                      type: 'folder',
                      description: 'Authentication feature',
                      children: [
                        { name: 'components', type: 'folder' },
                        { name: 'hooks', type: 'folder' },
                        { name: 'services', type: 'folder' },
                        { name: 'store', type: 'folder' }
                      ]
                    },
                    {
                      name: 'user-profile',
                      type: 'folder',
                      description: 'User profile feature',
                      children: [
                        { name: 'components', type: 'folder' },
                        { name: 'hooks', type: 'folder' },
                        { name: 'services', type: 'folder' }
                      ]
                    }
                  ]
                },
                {
                  name: 'hooks',
                  type: 'folder',
                  description: 'Custom React hooks',
                  children: [
                    { name: 'useAuth.js', type: 'file', description: 'Authentication hook' },
                    { name: 'useFetch.js', type: 'file', description: 'Data fetching hook' },
                    { name: 'useLocalStorage.js', type: 'file', description: 'Local storage hook' }
                  ]
                },
                {
                  name: 'utils',
                  type: 'folder',
                  description: 'Utility functions',
                  children: [
                    {
                      name: 'formatters',
                      type: 'folder',
                      children: [
                        { name: 'formatDate.js', type: 'file', description: 'Date formatting utilities' },
                        { name: 'formatCurrency.js', type: 'file', description: 'Currency formatting' }
                      ]
                    },
                    {
                      name: 'validators',
                      type: 'folder',
                      children: [
                        { name: 'validateEmail.js', type: 'file', description: 'Email validation' }
                      ]
                    }
                  ]
                },
                {
                  name: 'services',
                  type: 'folder',
                  description: 'API and external services',
                  children: [
                    {
                      name: 'api',
                      type: 'folder',
                      children: [
                        { name: 'apiClient.js', type: 'file', description: 'Base API client' },
                        { name: 'authApi.js', type: 'file', description: 'Authentication API' },
                        { name: 'userApi.js', type: 'file', description: 'User management API' }
                      ]
                    }
                  ]
                },
                {
                  name: 'store',
                  type: 'folder',
                  description: 'State management',
                  children: [
                    { name: 'index.js', type: 'file', description: 'Store configuration' },
                    {
                      name: 'slices',
                      type: 'folder',
                      children: [
                        { name: 'authSlice.js', type: 'file', description: 'Auth state slice' },
                        { name: 'userSlice.js', type: 'file', description: 'User state slice' }
                      ]
                    }
                  ]
                },
                { name: 'App.jsx', type: 'file', description: 'Root application component' },
                { name: 'index.jsx', type: 'file', description: 'Application entry point' }
              ]
            },
            { name: '.env.example', type: 'file', description: 'Environment variables template' },
            { name: '.gitignore', type: 'file', description: 'Git ignore rules' },
            { name: 'package.json', type: 'file', description: 'Dependencies and scripts' },
            { name: 'README.md', type: 'file', description: 'Project documentation' }
          ]
        }
      ]
    },
    bad: {
      name: 'Poorly Structured React Project',
      description: 'A project with common organizational problems',
      type: 'bad',
      structure: [
        {
          name: 'bad-react-app',
          type: 'folder',
          description: 'Project root with poor organization',
          children: [
            {
              name: 'src',
              type: 'folder',
              children: [
                {
                  name: 'components',
                  type: 'folder',
                  description: 'All components mixed together',
                  children: [
                    { name: 'button.js', type: 'file', description: 'Bad naming: lowercase' },
                    { name: 'Card.jsx', type: 'file', description: 'Generic name, unclear purpose' },
                    { name: 'UserCard.jsx', type: 'file', description: 'Better name but wrong location' },
                    { name: 'LoginForm.jsx', type: 'file', description: 'Should be in features/auth' },
                    { name: 'DashboardChart.jsx', type: 'file', description: 'Feature-specific, wrong location' },
                    { name: 'thing.jsx', type: 'file', description: 'Terrible generic name' }
                  ]
                },
                {
                  name: 'styles',
                  type: 'folder',
                  description: 'All styles separated from components',
                  children: [
                    { name: 'button.css', type: 'file', description: 'Separated from component' },
                    { name: 'card.css', type: 'file', description: 'Separated from component' },
                    { name: 'login.css', type: 'file', description: 'Separated from component' }
                  ]
                },
                {
                  name: 'utils',
                  type: 'folder',
                  description: 'Mixed utilities without organization',
                  children: [
                    { name: 'helpers.js', type: 'file', description: 'Generic name, everything mixed' },
                    { name: 'stuff.js', type: 'file', description: 'Meaningless name' },
                    { name: 'formatDate.js', type: 'file', description: 'Good name but could be grouped' }
                  ]
                },
                {
                  name: 'pages',
                  type: 'folder',
                  children: [
                    {
                      name: 'user',
                      type: 'folder',
                      description: 'Unnecessary deep nesting',
                      children: [
                        {
                          name: 'profile',
                          type: 'folder',
                          children: [
                            {
                              name: 'components',
                              type: 'folder',
                              children: [
                                { name: 'UserProfile.jsx', type: 'file', description: 'Too deeply nested' }
                              ]
                            }
                          ]
                        }
                      ]
                    }
                  ]
                },
                { name: 'App.js', type: 'file', description: 'Inconsistent file extension' },
                { name: 'index.jsx', type: 'file', description: 'Mixed extensions in same project' }
              ]
            },
            { name: 'package.json', type: 'file' },
            { name: 'config.js', type: 'file', description: 'Config in root instead of proper location' },
            { name: 'secrets.env', type: 'file', description: 'Bad: secrets in version control' }
          ]
        }
      ]
    }
  };

  const toggleNode = (path) => {
    const newExpanded = new Set(expandedNodes);
    if (expandedNodes.has(path)) {
      newExpanded.delete(path);
    } else {
      newExpanded.add(path);
    }
    setExpandedNodes(newExpanded);
  };

  const renderTreeNode = (node, path = '', level = 0) => {
    const currentPath = path ? `${path}/${node.name}` : node.name;
    const hasChildren = node.children && node.children.length > 0;
    const isExpanded = expandedNodes.has(currentPath);
    const isFolder = node.type === 'folder';

    return (
      <div key={currentPath} className="tree-node" style={{ marginLeft: `${level * 20}px` }}>
        <div
          className={`tree-item ${isFolder ? 'tree-item--folder' : 'tree-item--file'}`}
          onClick={() => hasChildren && toggleNode(currentPath)}
        >
          <div className="tree-item-icon">
            {hasChildren && (
              isExpanded ? <ChevronDown size={16} /> : <ChevronRight size={16} />
            )}
            {isFolder ? <Folder size={16} /> : <File size={16} />}
          </div>
          <span className="tree-item-name">{node.name}</span>
          {node.description && (
            <span className="tree-item-description">{node.description}</span>
          )}
        </div>

        {hasChildren && isExpanded && (
          <div className="tree-children">
            {node.children.map(child => renderTreeNode(child, currentPath, level + 1))}
          </div>
        )}
      </div>
    );
  };

  const currentExample = examples[selectedExample];

  return (
    <div className="structure-explorer">
      <div className="explorer-header">
        <h1>Project Structure Explorer</h1>
        <p>Explore interactive examples of good vs bad React project structures</p>
      </div>

      <div className="explorer-controls">
        <div className="example-selector">
          <button
            className={`example-btn ${selectedExample === 'good' ? 'example-btn--active example-btn--good' : ''}`}
            onClick={() => setSelectedExample('good')}
          >
            <CheckCircle size={20} />
            Good Structure
          </button>
          <button
            className={`example-btn ${selectedExample === 'bad' ? 'example-btn--active example-btn--bad' : ''}`}
            onClick={() => setSelectedExample('bad')}
          >
            <XCircle size={20} />
            Bad Structure
          </button>
        </div>
      </div>

      <div className="explorer-content">
        <div className="example-info">
          <div className={`example-header example-header--${currentExample.type}`}>
            {currentExample.type === 'good' ? (
              <CheckCircle size={24} className="example-icon" />
            ) : (
              <XCircle size={24} className="example-icon" />
            )}
            <div>
              <h2>{currentExample.name}</h2>
              <p>{currentExample.description}</p>
            </div>
          </div>

          {selectedExample === 'good' && (
            <div className="best-practices-highlights">
              <h3>✅ What Makes This Good:</h3>
              <ul>
                <li><strong>Feature-based organization:</strong> Related files are grouped together</li>
                <li><strong>Clear naming conventions:</strong> PascalCase for components, camelCase for utilities</li>
                <li><strong>Logical folder hierarchy:</strong> Easy to find files intuitively</li>
                <li><strong>Colocation:</strong> Component files, styles, and tests are together</li>
                <li><strong>Scalable structure:</strong> Can grow from small to large projects</li>
                <li><strong>Separation of concerns:</strong> Each folder has a clear purpose</li>
              </ul>
            </div>
          )}

          {selectedExample === 'bad' && (
            <div className="anti-patterns-highlights">
              <h3>❌ Problems with This Structure:</h3>
              <ul>
                <li><strong>Type-based organization:</strong> Related files are scattered</li>
                <li><strong>Inconsistent naming:</strong> Mixed case conventions and generic names</li>
                <li><strong>Deep nesting:</strong> Hard to navigate and understand</li>
                <li><strong>Separated concerns:</strong> Styles separated from components</li>
                <li><strong>Poor discoverability:</strong> Hard to find files quickly</li>
                <li><strong>Security issues:</strong> Secrets in version control</li>
              </ul>
            </div>
          )}
        </div>

        <div className="file-tree">
          <div className="tree-header">
            <h3>File Structure</h3>
            <div className="tree-legend">
              <div className="legend-item">
                <Folder size={16} />
                <span>Folder</span>
              </div>
              <div className="legend-item">
                <File size={16} />
                <span>File</span>
              </div>
            </div>
          </div>
          <div className="tree-container">
            {currentExample.structure.map(node => renderTreeNode(node))}
          </div>
        </div>
      </div>

      {bestPractices && (
        <div className="principles-summary">
          <h3>Key Principles Applied</h3>
          <div className="principles-grid">
            {bestPractices.corePrinciples?.map((principle, index) => (
              <div key={index} className="principle-card">
                <h4>{principle.title}</h4>
                <p>{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      )}

      <style jsx>{`
        .structure-explorer {
          padding: var(--spacing-xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .explorer-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .explorer-header h1 {
          margin-bottom: var(--spacing-md);
        }

        .explorer-header p {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
        }

        .explorer-controls {
          margin-bottom: var(--spacing-xl);
          display: flex;
          justify-content: center;
        }

        .example-selector {
          display: flex;
          gap: var(--spacing-md);
        }

        .example-btn {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-md) var(--spacing-lg);
          border: 2px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          background: var(--bg-secondary);
          color: var(--text-secondary);
          font-weight: 500;
          cursor: pointer;
          transition: all 0.2s ease;
        }

        .example-btn:hover {
          background: var(--hover-bg);
        }

        .example-btn--active {
          color: white;
          border-color: currentColor;
        }

        .example-btn--good.example-btn--active {
          background: var(--accent-green);
          border-color: var(--accent-green);
        }

        .example-btn--bad.example-btn--active {
          background: var(--accent-red);
          border-color: var(--accent-red);
        }

        .explorer-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
          margin-bottom: var(--spacing-2xl);
        }

        .example-info {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
        }

        .example-header {
          display: flex;
          align-items: flex-start;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--border-color);
        }

        .example-header--good {
          background: rgba(104, 211, 145, 0.1);
          border-bottom-color: var(--accent-green);
        }

        .example-header--bad {
          background: rgba(252, 129, 129, 0.1);
          border-bottom-color: var(--accent-red);
        }

        .example-icon {
          flex-shrink: 0;
          margin-top: var(--spacing-xs);
        }

        .example-header--good .example-icon {
          color: var(--accent-green);
        }

        .example-header--bad .example-icon {
          color: var(--accent-red);
        }

        .example-header h2 {
          margin-bottom: var(--spacing-xs);
          color: var(--text-primary);
        }

        .example-header p {
          color: var(--text-secondary);
          margin: 0;
        }

        .best-practices-highlights,
        .anti-patterns-highlights {
          padding: var(--spacing-lg);
        }

        .best-practices-highlights h3 {
          color: var(--accent-green);
          margin-bottom: var(--spacing-md);
        }

        .anti-patterns-highlights h3 {
          color: var(--accent-red);
          margin-bottom: var(--spacing-md);
        }

        .best-practices-highlights ul,
        .anti-patterns-highlights ul {
          list-style: none;
          padding: 0;
        }

        .best-practices-highlights li,
        .anti-patterns-highlights li {
          margin-bottom: var(--spacing-sm);
          padding-left: var(--spacing-lg);
          position: relative;
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
          line-height: 1.5;
        }

        .file-tree {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          overflow: hidden;
        }

        .tree-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          padding: var(--spacing-lg);
          border-bottom: 1px solid var(--border-color);
        }

        .tree-header h3 {
          margin: 0;
          color: var(--text-primary);
        }

        .tree-legend {
          display: flex;
          gap: var(--spacing-md);
        }

        .legend-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          font-size: var(--font-size-sm);
          color: var(--text-muted);
        }

        .tree-container {
          padding: var(--spacing-md);
          max-height: 600px;
          overflow-y: auto;
        }

        .tree-node {
          margin-bottom: var(--spacing-xs);
        }

        .tree-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-xs);
          padding: var(--spacing-xs) var(--spacing-sm);
          border-radius: var(--border-radius-sm);
          cursor: pointer;
          transition: background-color 0.2s ease;
        }

        .tree-item:hover {
          background: var(--hover-bg);
        }

        .tree-item--folder {
          font-weight: 500;
        }

        .tree-item-icon {
          display: flex;
          align-items: center;
          width: 20px;
          color: var(--text-muted);
        }

        .tree-item-name {
          font-size: var(--font-size-sm);
          color: var(--text-primary);
          margin-right: var(--spacing-sm);
        }

        .tree-item-description {
          font-size: var(--font-size-xs);
          color: var(--text-muted);
          font-style: italic;
        }

        .tree-children {
          border-left: 1px solid var(--border-color);
          margin-left: 10px;
          padding-left: var(--spacing-sm);
        }

        .principles-summary {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
        }

        .principles-summary h3 {
          text-align: center;
          margin-bottom: var(--spacing-xl);
          color: var(--text-primary);
        }

        .principles-grid {
          display: grid;
          grid-template-columns: repeat(auto-fit, minmax(250px, 1fr));
          gap: var(--spacing-lg);
        }

        .principle-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: var(--spacing-lg);
        }

        .principle-card h4 {
          color: var(--accent-blue);
          margin-bottom: var(--spacing-sm);
        }

        .principle-card p {
          color: var(--text-secondary);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        @media (max-width: 768px) {
          .structure-explorer {
            padding: var(--spacing-md);
          }

          .explorer-content {
            grid-template-columns: 1fr;
          }

          .example-selector {
            flex-direction: column;
            align-items: stretch;
          }

          .principles-grid {
            grid-template-columns: 1fr;
          }
        }
      `}</style>
    </div>
  );
};

export default StructureExplorer;
