import React, { useEffect, useState } from 'react';
import { useParams } from 'react-router-dom';
import axios from 'axios';
import { jwtDecode } from 'jwt-decode';
import BookingForm from './BookingForm';
const SessionDetail = () => {
  const { sessionId } = useParams();
  const [session, setSession] = useState({});
//   const [childName, setChildName] = useState('');
//   const [childAge, setChildAge] = useState('');
  const [enrollmentSuccess, setEnrollmentSuccess] = useState(false);
  const token = localStorage.getItem('token');

  useEffect(() => {
    axios.get(`http://localhost:8000/api/sessions/${sessionId}/`)
      .then(response => setSession(response.data))
      .catch(error => console.error(error));
  }, [sessionId]);

  const handleEnrollment = async (e) => {
    e.preventDefault();
    try {
      const decoded = jwtDecode(token);  // Assuming token contains user info
      const userId = decoded.user_id;

      const response = await axios.post('http://localhost:8000/api/enrollments/', {
        user: userId,
        session: sessionId,
        child_name: childName,
        child_age: childAge,
      });
      setEnrollmentSuccess(true);
      alert('Enrollment successful!');
    } catch (error) {
      console.error('Error enrolling in session', error);
    }
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        {session ? (
          <div className="max-w-2xl mx-auto bg-white shadow-lg rounded-lg p-6">
            <div className="text-center">
              <h1 className="text-4xl font-bold mb-4 text-indigo-900">{session.title}</h1>
              <p className="text-gray-600 text-lg mb-4">{new Date(session.date).toLocaleString()}</p>
              <p className="text-gray-800 font-bold mb-6">Cost: {session.cost} €</p>
            </div>
            <BookingForm sessionId={sessionId} />
          </div>
        ) : (
          <p className="text-center text-red-500">Loading session details...</p>
        )}
      </div>
    </div>
  );
};

export default SessionDetail;
