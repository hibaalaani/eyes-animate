import React, { useState, useEffect } from "react";
import DatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import axios from "axios";

const BookingForm = ({ sessionId }) => {
  // State variables to hold user input and data from the backend
  const [email, setEmail] = useState(""); // Store the user's email
  const [selectedDate, setSelectedDate] = useState(null); // Store the selected date
  const [availableTimes, setAvailableTimes] = useState([]); // Store available times for the selected date
  const [selectedTime, setSelectedTime] = useState(""); // Store the selected time
  const [bookingSuccess, setBookingSuccess] = useState(""); // Store the success message when booking is confirmed
  const [childName, setChildName] = useState(""); // Store child's name
const [childAge, setChildAge] = useState(""); // Store child's age
//! helper

function convertTime(selectedDate){
  const year = selectedDate.getFullYear();
  const month = String(selectedDate.getMonth()+1).padStart(2,'0')
  const day = String(selectedDate.getDate()).padStart(2,'0')
  const dateString = `${year}-${month}-${day}`
          return dateString
}
// Fetch available times when the selected date changes
  useEffect(() => {
    if (selectedDate) {
    
      const fetchAvailableTimes = async () => {
        try {
          // Format the date to 'YYYY-MM-DD' to pass it in the request
        const dateString =  convertTime(selectedDate)
          // Send a request to the backend to get available time slots for the selected date
          const response = await axios.get(`http://localhost:8000/api/booked-slots/${dateString}`);
          // Update the available times state based on the response from the backend
          console.log(response.data)
          setAvailableTimes(response.data);
        } catch (error) {
          console.error("Error fetching available time slots:", error);
          setAvailableTimes([]); // Reset available times if there's an error
        }
      };

      fetchAvailableTimes(); // Trigger the function when date changes
    }
  }, [selectedDate]); // Only runs when 'selectedDate' changes

  // Handle form submission when the user clicks "Book"
  const handleSubmit = async (e) => {
    e.preventDefault(); 
  
    const dateString =  convertTime(selectedDate)
    // Create the booking data object to send to the backend
    const bookingData = {
      email,
      date:dateString, // Format date to 'YYYY-MM-DD'
      time: selectedTime, // Send the selected time
      child_name: childName, // Add child name to the booking data
      child_age: childAge, // Add child age to the booking data
      session_id: sessionId,  // Include session ID in the request
    };

    try {
      // Make a POST request to book the selected date and time
      const response = await axios.post("http://localhost:8000/api/book-time/", bookingData);
      setBookingSuccess("Booking successful! Check your email :)"); // Set the success message if booking is successful
    } catch (error) {
      console.error("Error during booking:", error.response ? error.response.data : error.message);
      alert("'This time slot is already booked!'"); 
    }
  };
  return (
    <div className="max-w-lg mx-auto mt-10 p-6 bg-white shadow-md rounded-lg">
      {/* Header */}
      <h2 className="text-2xl font-bold mb-6">Book a Date and Time</h2>

      {/* Success message */}
      {bookingSuccess && (
        <p className="text-green-600 font-semibold mb-4">{bookingSuccess}</p> // Show success message if booking is successful
      )}

      {/* Form */}
      <form onSubmit={handleSubmit}>
        {/* Email input field */}
        <label htmlFor="email" className="block text-gray-700">Email:</label>
        <input
          type="email"
          id="email"
          name="email"
          value={email} // Bind email state to the input value
          onChange={(e) => setEmail(e.target.value)} // Update email state when input changes
          className="w-full p-3 border rounded-md mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholder="Enter your email"
          required // Make email input required
        />

        {/* Date picker */}
        <label htmlFor="date" className="block text-gray-700">Select Date:</label>
        <DatePicker
          selected={selectedDate} // Bind selected date to DatePicker
          onChange={(date) => setSelectedDate(date)} // Update selected date state when user chooses a date
          className="w-full p-3 border rounded-md mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          placeholderText="Select a date"
          dateFormat="yyyy-MM-dd" // Display date in 'YYYY-MM-DD' format
          minDate={new Date()} // Disable past dates
          filterDate={(date) => date.getDay() !== 0} // Example: block Sundays (Day 0 is Sunday)
          required // Make date selection required
        />

        {/* Time dropdown */}
        <label htmlFor="time" className="block text-gray-700">Select Time:</label>
        <select
          id="time"
          name="time"
          value={selectedTime} // Bind selected time to the dropdown
          onChange={(e) => setSelectedTime(e.target.value)} // Update selected time state when user picks a time
          className="w-full p-3 border rounded-md mt-2 mb-6 focus:outline-none focus:ring-2 focus:ring-indigo-400"
          required // Make time selection required
        >
          {/* Default option */}
          <option value="" disabled>Select a time</option>
  {availableTimes.length === 0 ? (
    <option value="" disabled>No available times</option>
  ) : (
    availableTimes.map((time) => {
      const isBooked =! availableTimes.includes(time); // Check if time is booked
      return (
        <option
          key={time}
          value={time}
          disabled={isBooked} // Disable if booked
          className={isBooked ? "text-gray-500 bg-gray-200" : "text-green-500 "} // Apply different style if booked
        >
          {time}
        </option>
      );
    })
  )}
</select>
 {/* Child Name input */}
 <label htmlFor="childName" className="block text-gray-700">Child's Name:</label>
    <input
      type="text"
      id="childName"
      name="childName"
      value={childName}
      onChange={(e) => setChildName(e.target.value)}
      className="w-full p-3 border rounded-md mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      placeholder="Enter child's name"
      required
    />

    {/* Child Age input */}
    <label htmlFor="childAge" className="block text-gray-700">Child's Age:</label>
    <input
      type="number"
      id="childAge"
      name="childAge"
      value={childAge}
      onChange={(e) => setChildAge(e.target.value)}
      className="w-full p-3 border rounded-md mt-2 mb-4 focus:outline-none focus:ring-2 focus:ring-indigo-400"
      placeholder="Enter child's age"
      required
    />
        {/* Submit button */}
        <button
          type="submit"
          className="w-full bg-indigo-600 text-white p-3 rounded-md hover:bg-indigo-700 transition duration-300"
        >
          Book
        </button>


        
      </form>
    </div>
  );
};

export default BookingForm;
