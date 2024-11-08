import {useState} from 'react';

const Contact = () => {

  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: '',
  });
  const [responseMessage, setResponseMessage] = useState('');
  const [error, setError] = useState('');

  const handleChange = (e) => {
    const { id, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [id]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();

    try {
      const response = await fetch('http://localhost:8000/api/send-contact-message/', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });

      const data = await response.json();
      if (response.ok) {
        setResponseMessage(data.success);
        setError('');
        setFormData({ name: '', email: '', message: '' });
      } else {
        setResponseMessage('');
        setError(data.error || 'Failed to send message.');
      }
    } catch (err) {
      setError('An error occurred. Please try again later.');
    }
  };


  return (
    <section id="contact" className="fade-in  py-20  contact-section text-white bg-blend-hue ">
      <div className="container mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-10 text-white">Contact Me</h2>
        <form onSubmit={handleSubmit} className="max-w-lg mx-auto">
          <div className="mb-4">
            <label htmlFor="name" className="block text-lg font-medium text-gray-400">Name</label>
            <input 
              type="text" 
              id="name" 
              value={formData.name}
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Name"
              required
            />
          </div>
          <div className="mb-4">
            <label htmlFor="email" className="block text-lg font-medium text-gray-400">Email</label>
            <input 
              type="email" 
              id="email" 
              value={formData.email}
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="Your Email"
              required
            />
          </div>
          <div className="mb-6">
            <label htmlFor="message" className="block text-lg font-medium text-gray-400">Message</label>
            <textarea 
              id="message" 
              value={formData.message}
              onChange={handleChange}
              className="w-full mt-2 p-3 bg-gray-800 text-white rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              rows="5"
              placeholder="Your Message"
              required
            ></textarea>
          </div>
          <button 
            type="submit" 
            className="bg-gray-500 text-white py-3 px-6 rounded-lg hover:bg-blue-200 hover:text-black transition-colors w-full"
          >
            Send Message
          </button>

          {/* Response Message */}
          {responseMessage && <p className="text-green-400 mt-4">{responseMessage}</p>}
          {error && <p className="text-red-400 mt-4">{error}</p>}
        </form>
      </div>
    </section>
  );
};

export default Contact;
