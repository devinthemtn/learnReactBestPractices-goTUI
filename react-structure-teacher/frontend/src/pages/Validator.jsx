import React, { useState } from "react";
import {
  Upload,
  CheckCircle,
  XCircle,
  AlertTriangle,
  FolderTree,
  Plus,
  Trash2,
} from "lucide-react";
import { ValidateProjectStructure } from "../wailsjs/go/main/App";

const Validator = ({ bestPractices }) => {
  const [projectStructure, setProjectStructure] = useState({
    name: "",
    folders: [],
    files: [],
  });
  const [validationResult, setValidationResult] = useState(null);
  const [isValidating, setIsValidating] = useState(false);
  const [newFolder, setNewFolder] = useState("");
  const [newFile, setNewFile] = useState("");

  const handleAddFolder = () => {
    if (
      newFolder.trim() &&
      !projectStructure.folders.includes(newFolder.trim())
    ) {
      setProjectStructure((prev) => ({
        ...prev,
        folders: [...prev.folders, newFolder.trim()],
      }));
      setNewFolder("");
    }
  };

  const handleAddFile = () => {
    if (newFile.trim() && !projectStructure.files.includes(newFile.trim())) {
      setProjectStructure((prev) => ({
        ...prev,
        files: [...prev.files, newFile.trim()],
      }));
      setNewFile("");
    }
  };

  const handleRemoveFolder = (index) => {
    setProjectStructure((prev) => ({
      ...prev,
      folders: prev.folders.filter((_, i) => i !== index),
    }));
  };

  const handleRemoveFile = (index) => {
    setProjectStructure((prev) => ({
      ...prev,
      files: prev.files.filter((_, i) => i !== index),
    }));
  };

  const handleValidate = async () => {
    if (!projectStructure.name.trim()) {
      alert("Please enter a project name");
      return;
    }

    setIsValidating(true);
    try {
      const result = await ValidateProjectStructure(projectStructure);
      setValidationResult(result);
    } catch (error) {
      console.error("Validation failed:", error);
      alert("Validation failed. Please try again.");
    } finally {
      setIsValidating(false);
    }
  };

  const loadExampleProject = (type) => {
    if (type === "good") {
      setProjectStructure({
        name: "my-awesome-react-app",
        folders: [
          "public",
          "src",
          "src/components",
          "src/components/ui",
          "src/pages",
          "src/features",
          "src/features/auth",
          "src/hooks",
          "src/utils",
          "src/services",
          "src/store",
          "src/constants",
          "src/styles",
        ],
        files: [
          "package.json",
          "README.md",
          ".gitignore",
          ".env.example",
          "public/index.html",
          "src/App.jsx",
          "src/index.jsx",
          "src/components/ui/Button.jsx",
          "src/pages/HomePage.jsx",
          "src/hooks/useAuth.js",
          "src/utils/formatDate.js",
          "src/services/apiClient.js",
        ],
      });
    } else {
      setProjectStructure({
        name: "bad-react-project",
        folders: [
          "src",
          "src/components",
          "src/styles",
          "src/utils",
          "src/pages/user/profile/components",
        ],
        files: [
          "package.json",
          "src/App.js",
          "src/index.jsx",
          "src/components/button.js",
          "src/components/Card.jsx",
          "src/components/thing.jsx",
          "src/styles/button.css",
          "src/utils/helpers.js",
          "secrets.env",
        ],
      });
    }
    setValidationResult(null);
  };

  const getSeverityIcon = (severity) => {
    switch (severity) {
      case "error":
        return <XCircle size={16} className="severity-error" />;
      case "warning":
        return <AlertTriangle size={16} className="severity-warning" />;
      default:
        return <AlertTriangle size={16} className="severity-info" />;
    }
  };

  const getGradeColor = (grade) => {
    switch (grade) {
      case "A":
        return "grade-a";
      case "B":
        return "grade-b";
      case "C":
        return "grade-c";
      case "D":
        return "grade-d";
      default:
        return "grade-f";
    }
  };

  return (
    <div className="validator">
      <div className="validator-header">
        <h1>Project Structure Validator</h1>
        <p>Validate your React project structure against best practices</p>
      </div>

      <div className="validator-content">
        <div className="project-input">
          <div className="input-header">
            <h2>Project Structure</h2>
            <div className="example-buttons">
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => loadExampleProject("good")}
              >
                Load Good Example
              </button>
              <button
                className="btn btn-sm btn-secondary"
                onClick={() => loadExampleProject("bad")}
              >
                Load Bad Example
              </button>
            </div>
          </div>

          <div className="project-form">
            <div className="form-group">
              <label className="form-label">Project Name</label>
              <input
                type="text"
                className="form-control"
                placeholder="my-react-app"
                value={projectStructure.name}
                onChange={(e) =>
                  setProjectStructure((prev) => ({
                    ...prev,
                    name: e.target.value,
                  }))
                }
              />
            </div>

            <div className="form-row">
              <div className="form-group">
                <label className="form-label">Folders</label>
                <div className="input-with-button">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="src/components"
                    value={newFolder}
                    onChange={(e) => setNewFolder(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleAddFolder()}
                  />
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleAddFolder}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="items-list">
                  {projectStructure.folders.map((folder, index) => (
                    <div key={index} className="list-item">
                      <FolderTree size={16} />
                      <span>{folder}</span>
                      <button
                        className="btn-remove"
                        onClick={() => handleRemoveFolder(index)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>

              <div className="form-group">
                <label className="form-label">Files</label>
                <div className="input-with-button">
                  <input
                    type="text"
                    className="form-control"
                    placeholder="src/App.jsx"
                    value={newFile}
                    onChange={(e) => setNewFile(e.target.value)}
                    onKeyPress={(e) => e.key === "Enter" && handleAddFile()}
                  />
                  <button
                    className="btn btn-primary btn-sm"
                    onClick={handleAddFile}
                  >
                    <Plus size={16} />
                  </button>
                </div>
                <div className="items-list">
                  {projectStructure.files.map((file, index) => (
                    <div key={index} className="list-item">
                      <Upload size={16} />
                      <span>{file}</span>
                      <button
                        className="btn-remove"
                        onClick={() => handleRemoveFile(index)}
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  ))}
                </div>
              </div>
            </div>

            <button
              className="btn btn-primary btn-lg"
              onClick={handleValidate}
              disabled={isValidating || !projectStructure.name.trim()}
            >
              {isValidating ? (
                <>
                  <div className="spinner-sm"></div>
                  Validating...
                </>
              ) : (
                <>
                  <CheckCircle size={20} />
                  Validate Structure
                </>
              )}
            </button>
          </div>
        </div>

        {validationResult && (
          <div className="validation-results">
            <h2>Validation Results</h2>

            <div className="results-summary">
              <div className="score-card">
                <div className="score-header">
                  <h3>Overall Score</h3>
                  <div
                    className={`grade ${getGradeColor(validationResult.grade)}`}
                  >
                    {validationResult.grade}
                  </div>
                </div>
                <div className="score-details">
                  <div className="score-bar">
                    <div
                      className="score-fill"
                      style={{ width: `${validationResult.percentage}%` }}
                    ></div>
                  </div>
                  <div className="score-text">
                    {validationResult.score} / {validationResult.maxScore}{" "}
                    points ({Math.round(validationResult.percentage)}%)
                  </div>
                </div>
              </div>
            </div>

            {validationResult.issues && validationResult.issues.length > 0 && (
              <div className="issues-section">
                <h3>Issues Found</h3>
                <div className="issues-list">
                  {validationResult.issues.map((issue, index) => (
                    <div
                      key={index}
                      className={`issue-item issue-${issue.severity}`}
                    >
                      <div className="issue-header">
                        {getSeverityIcon(issue.severity)}
                        <span className="issue-type">{issue.type}</span>
                      </div>
                      <div className="issue-content">
                        <p className="issue-message">{issue.message}</p>
                        {issue.suggestion && (
                          <p className="issue-suggestion">
                            <strong>Suggestion:</strong> {issue.suggestion}
                          </p>
                        )}
                      </div>
                    </div>
                  ))}
                </div>
              </div>
            )}

            {validationResult.suggestions &&
              validationResult.suggestions.length > 0 && (
                <div className="suggestions-section">
                  <h3>Recommendations</h3>
                  <ul className="suggestions-list">
                    {validationResult.suggestions.map((suggestion, index) => (
                      <li key={index}>{suggestion}</li>
                    ))}
                  </ul>
                </div>
              )}

            {validationResult.percentage >= 90 && (
              <div className="success-message">
                <CheckCircle size={24} />
                <div>
                  <h4>Excellent Structure!</h4>
                  <p>Your project follows React best practices very well.</p>
                </div>
              </div>
            )}
          </div>
        )}
      </div>

      <style jsx>{`
        .validator {
          padding: var(--spacing-xl);
          max-width: 1200px;
          margin: 0 auto;
        }

        .validator-header {
          text-align: center;
          margin-bottom: var(--spacing-xl);
        }

        .validator-header h1 {
          margin-bottom: var(--spacing-md);
        }

        .validator-header p {
          font-size: var(--font-size-lg);
          color: var(--text-secondary);
        }

        .validator-content {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-xl);
        }

        .project-input {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
        }

        .input-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-lg);
        }

        .input-header h2 {
          margin: 0;
          color: var(--text-primary);
        }

        .example-buttons {
          display: flex;
          gap: var(--spacing-sm);
        }

        .project-form {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-lg);
        }

        .form-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: var(--spacing-lg);
        }

        .input-with-button {
          display: flex;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-md);
        }

        .items-list {
          max-height: 300px;
          overflow-y: auto;
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          background: var(--bg-tertiary);
        }

        .list-item {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          padding: var(--spacing-sm) var(--spacing-md);
          border-bottom: 1px solid var(--border-color);
        }

        .list-item:last-child {
          border-bottom: none;
        }

        .list-item span {
          flex: 1;
          font-size: var(--font-size-sm);
          color: var(--text-primary);
        }

        .btn-remove {
          background: none;
          border: none;
          color: var(--accent-red);
          cursor: pointer;
          padding: var(--spacing-xs);
          border-radius: var(--border-radius-sm);
          transition: background-color 0.2s ease;
        }

        .btn-remove:hover {
          background: rgba(252, 129, 129, 0.1);
        }

        .validation-results {
          background: var(--bg-secondary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-lg);
          padding: var(--spacing-xl);
        }

        .validation-results h2 {
          margin-bottom: var(--spacing-lg);
          color: var(--text-primary);
        }

        .results-summary {
          margin-bottom: var(--spacing-xl);
        }

        .score-card {
          background: var(--bg-tertiary);
          border: 1px solid var(--border-color);
          border-radius: var(--border-radius-md);
          padding: var(--spacing-lg);
        }

        .score-header {
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-bottom: var(--spacing-md);
        }

        .score-header h3 {
          margin: 0;
          color: var(--text-primary);
        }

        .grade {
          width: 50px;
          height: 50px;
          display: flex;
          align-items: center;
          justify-content: center;
          border-radius: 50%;
          font-size: var(--font-size-xl);
          font-weight: bold;
          color: white;
        }

        .grade-a {
          background: var(--accent-green);
        }
        .grade-b {
          background: var(--accent-blue);
        }
        .grade-c {
          background: var(--accent-yellow);
          color: var(--bg-primary);
        }
        .grade-d {
          background: var(--accent-red);
        }
        .grade-f {
          background: var(--accent-red);
        }

        .score-bar {
          height: 8px;
          background: var(--bg-primary);
          border-radius: var(--border-radius-sm);
          overflow: hidden;
          margin-bottom: var(--spacing-sm);
        }

        .score-fill {
          height: 100%;
          background: var(--accent-green);
          transition: width 0.3s ease;
        }

        .score-text {
          font-size: var(--font-size-sm);
          color: var(--text-secondary);
          text-align: center;
        }

        .issues-section,
        .suggestions-section {
          margin-bottom: var(--spacing-xl);
        }

        .issues-section h3,
        .suggestions-section h3 {
          margin-bottom: var(--spacing-md);
          color: var(--text-primary);
        }

        .issues-list {
          display: flex;
          flex-direction: column;
          gap: var(--spacing-md);
        }

        .issue-item {
          border-left: 4px solid;
          border-radius: var(--border-radius-md);
          padding: var(--spacing-md);
          background: var(--bg-tertiary);
        }

        .issue-error {
          border-left-color: var(--accent-red);
          background: rgba(252, 129, 129, 0.1);
        }

        .issue-warning {
          border-left-color: var(--accent-yellow);
          background: rgba(246, 224, 94, 0.1);
        }

        .issue-info {
          border-left-color: var(--accent-blue);
          background: rgba(99, 179, 237, 0.1);
        }

        .issue-header {
          display: flex;
          align-items: center;
          gap: var(--spacing-sm);
          margin-bottom: var(--spacing-sm);
        }

        .severity-error {
          color: var(--accent-red);
        }
        .severity-warning {
          color: var(--accent-yellow);
        }
        .severity-info {
          color: var(--accent-blue);
        }

        .issue-type {
          font-weight: 500;
          color: var(--text-primary);
        }

        .issue-message {
          color: var(--text-secondary);
          margin-bottom: var(--spacing-sm);
        }

        .issue-suggestion {
          color: var(--text-primary);
          font-size: var(--font-size-sm);
          margin: 0;
        }

        .suggestions-list {
          list-style: none;
          padding: 0;
        }

        .suggestions-list li {
          padding: var(--spacing-sm) 0;
          border-bottom: 1px solid var(--border-color);
          color: var(--text-secondary);
        }

        .suggestions-list li:last-child {
          border-bottom: none;
        }

        .success-message {
          display: flex;
          align-items: center;
          gap: var(--spacing-md);
          padding: var(--spacing-lg);
          background: rgba(104, 211, 145, 0.1);
          border: 1px solid var(--accent-green);
          border-radius: var(--border-radius-md);
          color: var(--accent-green);
        }

        .success-message h4 {
          margin-bottom: var(--spacing-xs);
          color: var(--accent-green);
        }

        .success-message p {
          margin: 0;
          color: var(--text-secondary);
        }

        .spinner-sm {
          width: 16px;
          height: 16px;
          border: 2px solid transparent;
          border-top: 2px solid currentColor;
          border-radius: 50%;
          animation: spin 1s linear infinite;
        }

        @keyframes spin {
          to {
            transform: rotate(360deg);
          }
        }

        @media (max-width: 768px) {
          .validator {
            padding: var(--spacing-md);
          }

          .validator-content {
            grid-template-columns: 1fr;
          }

          .form-row {
            grid-template-columns: 1fr;
          }

          .input-header {
            flex-direction: column;
            gap: var(--spacing-md);
            align-items: stretch;
          }

          .example-buttons {
            justify-content: center;
          }
        }
      `}</style>
    </div>
  );
};

export default Validator;
