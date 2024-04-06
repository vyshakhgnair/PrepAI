import React, { useState } from 'react';
import './style.css'; // Import CSS file for styling

function TestScoresTable() {
    const [tests, setTests] = useState([
        { id: 1, testDate: '2024-04-01', userName: 'John Doe', testScore: 85, testDuration: '1 hour' },
        { id: 2, testDate: '2024-04-02', userName: 'Jane Smith', testScore: 92, testDuration: '45 minutes' },
        { id: 3, testDate: '2024-04-03', userName: 'Alice Johnson', testScore: 78, testDuration: '1.5 hours' },
        { id: 4, testDate: '2024-04-04', userName: 'Bob Brown', testScore: 80, testDuration: '2 hours' },
        { id: 5, testDate: '2024-04-05', userName: 'Eva Williams', testScore: 88, testDuration: '1 hour 15 minutes' },
        { id: 6, testDate: '2024-04-06', userName: 'Chris Wilson', testScore: 95, testDuration: '50 minutes' },
        { id: 7, testDate: '2024-04-07', userName: 'Sarah Thompson', testScore: 72, testDuration: '1.25 hours' },
        { id: 8, testDate: '2024-04-08', userName: 'Michael Garcia', testScore: 83, testDuration: '1.75 hours' }
      ]);

  return (
    <div className="test-scores-table">
x         <table>
        <thead>
          <tr>
            <th>Test Date</th>
            <th>User Name</th>
            <th>Test Score</th>
            <th>Test Duration</th>
          </tr>
        </thead>
        <tbody>
          {tests.map(test => (
            <tr key={test.id}>
              <td>{test.testDate}</td>
              <td>{test.userName}</td>
              <td>{test.testScore}</td>
              <td>{test.testDuration}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
}

export default TestScoresTable;
