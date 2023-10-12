// StatementDetails.js

import React from 'react';
import { useLocation } from 'react-router-dom';

const CustomerStatement = ({ searchStatementData }) => {
//   const location = useLocation();
//   const searchResults = location.state.searchResults || [];

  return (
    <div>
      <h2>Account Statements</h2>
      <table>
        <thead>
          <tr>
            <th>Date</th>
            <th>Amount (tk)</th>
          </tr>
        </thead>
        <tbody>
          {searchStatementData.map((statement, index) => (
            <tr key={index}>
              <td>{statement.date}</td>
              <td>{statement.tk}</td>
            </tr>
          ))}
        </tbody>
      </table>
    </div>
  );
};

export default CustomerStatement;