import React, { useEffect, useState } from 'react';
import axios from 'axios';

const SessionCatalog = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    axios.get('/api/sessions/')
      .then(response => setSessions(response.data))
      .catch(error => console.error("Error fetching sessions", error));
  }, []);

  return (
    <div className="session-catalog bg-gray-50 min-h-screen p-6">
      <h2 className="text-3xl font-bold text-blue-800 mb-6">Session Catalog</h2>
      <ul className="space-y-6">
        {sessions.map(session => (
          <li key={session.id} className="bg-white shadow-md p-6 rounded-lg">
            <h3 className="text-2xl font-semibold text-gray-800">{session.title}</h3>
            <p className="text-gray-600 mt-2">{session.description}</p>
            <div className="mt-4">
              <p className="text-gray-500">Skill Level: <span className="font-semibold">{session.skill_level}</span></p>
              <p className="text-gray-500">Age Group: <span className="font-semibold">{session.age_group}</span></p>
              <p className="text-gray-500">Cost: <span className="font-semibold">${session.cost}</span></p>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default SessionCatalog;
