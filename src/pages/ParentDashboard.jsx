import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useAuth } from "../contexts/AuthContext";

const ParentDashboard = () => {
  const [children, setChildren] = useState([]);
  const [sessions, setSessions] = useState([]); // Store available sessions for enrollment
  const { isAuthenticated } = useAuth();

  useEffect(() => {
    // Fetch children and available sessions when component mounts
    const fetchData = async () => {
      const token = localStorage.getItem('token');
      if (token) {
        try {
          // Fetch children data
          const childrenResponse = await axios.get('http://localhost:8000/api/children/', {
            headers: { Authorization: `Bearer ${token}` }
          });
          console.log(childrenResponse)
          setChildren(childrenResponse.data);

          // Fetch available sessions
          const sessionsResponse = await axios.get('http://localhost:8000/api/sessions/', {
            headers: { Authorization: `Bearer ${token}` }
          });
          setSessions(sessionsResponse.data);

        } catch (error) {
          console.error("Error fetching data", error);
        }
      }
    };

    if (isAuthenticated) {
      fetchData();
    }
  }, [isAuthenticated]);

  // Handle Enrollment
  const handleEnroll = async (child_id, session_id) => {
    console.log(child_id)
    const token = localStorage.getItem('token');
    if (token) {
      try {
        const response = await axios.post(`http://localhost:8000/api/enroll/${child_id}/${session_id}/`, {}, {
          headers: { Authorization: `Bearer ${token}` }
        });
        alert(response.data.detail); // Show success message
      } catch (error) {
        // Check if the error has a response and show its message
        if (error.response && error.response.data) {
          alert(error.response.data.detail); // Display error message from API
        } else {
          console.error("Error enrolling child", error);
          alert("An error occurred. Please try again.");
        }
      }
    }
  };

  return (
    <div className="max-w-4xl mx-auto p-6 bg-gray-100 min-h-screen">
      <h2 className="text-3xl font-bold text-center text-blue-600 mb-6">Parent Dashboard</h2>

      {/* Children List */}
      <section className="mb-8">
        <h3 className="text-2xl font-semibold text-blue-700">Your Children</h3>
        <ul className="space-y-4 mt-4">
          {children.map(child => (
            <li key={child.id} className="bg-white shadow-md rounded-lg p-4">
              <div>
                <p className="font-bold">{child.name} ({child.age} years)</p>
                <p className="text-gray-600">Experience Level: {child.experience_level}</p>
                
                {/* Show Enrolled Courses */}
                <h4 className="font-semibold mt-4">Enrolled Courses:</h4>
                <ul className="list-disc pl-6">
                  {child.enrollments && child.enrollments.length > 0 ? (
                    child.enrollments.map(enrollment => (
                      <li key={enrollment.id}>{enrollment.session_title} </li>
                    ))
                  ) : (
                    <li className="text-gray-500">No enrollments yet.</li>
                  )}
                </ul>

                {/* Enroll in New Course */}
                <h4 className="font-semibold mt-4">Enroll in a New Course:</h4>
                <div className="flex items-center space-x-2">
                  <select
                    className="w-full p-2 border border-gray-300 rounded"
                    onChange={(e) => setSessions((prev) => prev.map((s) => ({
                      ...s, selected: s.id === parseInt(e.target.value, 10)
                    })))}
                    defaultValue=""
                  >
                    <option value="" disabled>Select a course</option>
                    {sessions.map(session => (
                      <option key={session.id} value={session.id}>
                        {session.title} - {session.skill_level}
                      </option>
                    ))}
                  </select>
                  <button
                    onClick={() => {
                      const selectedSession = sessions.find((s) => s.selected);
                      if (selectedSession) handleEnroll(child.id, selectedSession.id);
                    }}
                    className="px-4 py-2 bg-blue-500 text-white rounded"
                  >
                    Enroll
                  </button>
                </div>
              </div>
            </li>
          ))}
        </ul>
      </section>
    </div>
  );
};

export default ParentDashboard;
