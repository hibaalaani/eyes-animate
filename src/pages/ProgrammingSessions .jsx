import React, {useEffect, useState} from "react";
import axios from "axios";
import {Link} from "react-router-dom";

const ProgrammingSessions = () => {
  const [sessions, setSessions] = useState([]);

  useEffect(() => {
    const token = localStorage.getItem("token");
    axios
      .get("http://localhost:8000/api/sessions/", {
        // headers: {
        //   Authorization: `Bearer ${token}`, // Send token in the header
        // },
      })
      .then((response) => {
        console.log(response);
        setSessions(response.data);
      })
      .catch((error) => {
        console.error("Error fetching sessions", error);
      });
  }, []);

  // Helper function to format date
  const formatDate = (dateString) => {
    const options = {
      year: "numeric",
      month: "long",
      day: "numeric",
      hour: "2-digit",
      minute: "2-digit",
    };
    return new Date(dateString).toLocaleDateString(undefined, options);
  };

  return (
    <div className="bg-gray-100 py-10">
      <div className="container mx-auto px-4">
        <h2 className="text-4xl font-bold text-center mb-8 text-gray-800">
          Available Programming Sessions
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6">
          {sessions.map((session) => (
            <div
              key={session.id}  /*  style={{ background: 'linear-gradient(45deg, #9333ea , #3b82f6)' }} */
              className="bg-indigo-900 text-white shadow-lg rounded-lg p-6 transform hover:scale-105 transition-transform "
            >
              <div className="flex justify-center">
                <img
                  src="/path-to-icon.png"
                  alt="Session Icon"
                  className="h-16 mb-4"
                />{" "}
                {/* Add your session icon */}
              </div>
              <h3 className="text-xl font-bold mb-2 text-center">
                {session.title}
              </h3>
              <p className="text-gray-300 text-center mb-4">
                {new Date(session.date).toLocaleString()}
              </p>
              <p className="text-center text-gray-300 font-bold">
                {session.cost} €
              </p>
              <div className="mt-4 text-center">
                <Link
                  to={`/session/${session.id}`}
                  className="bg-white text-indigo-900 py-2 px-4 rounded hover:bg-gray-200"
                  // onClick={() => window.location.href = `/session/${session.id}`}
                >
                  View More
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default ProgrammingSessions;
