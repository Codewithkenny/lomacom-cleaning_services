import { useState, useEffect } from 'react';
import axios from 'axios';
import { useNavigate } from 'react-router-dom';

const CustomerArea = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState<any>(null); // For user data from the backend
  const [bookings, setBookings] = useState<any[]>([]); // For bookings data
  const [selectedTab, setSelectedTab] = useState('profile'); // Default tab is 'profile'
  const [isEditing, setIsEditing] = useState(false); // Toggle profile edit mode

  // Fetch user data and bookings when the component mounts
  useEffect(() => {
    // Get the auth token from local storage
    const authToken = localStorage.getItem('authToken');
   
    
    if (authToken) {
      // Fetch user profile data from the backend
      axios
        .get('http://localhost:5000/api/user/profile', {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => {
          setUser(response.data); // Set user data
        })
        .catch((error) => {
          console.error('Error fetching profile data:', error);
          navigate('/login'); // Redirect to login if there's an error
        });

      // Fetch user booking history from the backend
      axios
        .get('http://localhost:5000/api/user/bookings', {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => {
          setBookings(response.data); // Set booking data
        })
        .catch((error) => {
          console.error('Error fetching bookings data:', error);
        });
    } else {
      navigate('/login'); // Redirect to login if no auth token
    }
  }, [navigate]);

  // Handle logout
  const handleLogout = () => {
    localStorage.removeItem('authToken');
    navigate('/login');
  };

  // Handle profile edit toggle
  const toggleEditProfile = () => {
    setIsEditing((prev) => !prev);
  };

  // Handle profile save (send updated data to backend)
  const handleSaveProfile = () => {
    const authToken = localStorage.getItem('authToken');
    
    if (authToken && user) {
      axios
        .put('http://localhost:5000/api/user/profile', user, {
          headers: { Authorization: `Bearer ${authToken}` },
        })
        .then((response) => {
          setUser(response.data); // Update user data with response from backend
          setIsEditing(false); // Exit edit mode
        })
        .catch((error) => {
          console.error('Error saving profile:', error);
        });
    }
  };

  const renderContent = () => {
    switch (selectedTab) {
      case 'profile':
        return (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">My Profile</h3>
            <form className="space-y-4">
              {user && Object.keys(user).map((key) => {
                if (key !== '_id' && key !== 'password') {
                  return (
                    <div key={key}>
                      <label htmlFor={key} className="block text-sm font-medium text-gray-600 capitalize">
                        {key}
                      </label>
                      <input
                        type="text"
                        id={key}
                        name={key}
                        value={user[key as keyof typeof user]}
                        onChange={(e) => setUser({ ...user, [key]: e.target.value })}
                        className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
                        disabled={!isEditing}
                      />
                    </div>
                  );
                }
                return null;
              })}
            </form>
            <div className="mt-4">
              <button
                onClick={toggleEditProfile}
                className="bg-gray-600 text-white px-4 py-2 rounded-md hover:bg-gray-700 mr-4"
              >
                {isEditing ? 'Cancel' : 'Edit Profile'}
              </button>
              {isEditing && (
                <button
                  onClick={handleSaveProfile}
                  className="bg-blue-600 text-white px-4 py-2 rounded-md hover:bg-blue-700"
                >
                  Save Changes
                </button>
              )}
            </div>
          </div>
        );
      case 'bookings':
        return (
          <div className="bg-white shadow-md rounded-lg p-6">
            <h3 className="text-xl font-semibold mb-4">My Bookings</h3>
            <ul className="space-y-4">
              {bookings.length === 0 ? (
                <p>No bookings found.</p>
              ) : (
                bookings.map((booking: any) => (
                  <li
                    key={booking._id}
                    className="border p-4 rounded-md shadow-md flex justify-between items-center"
                  >
                    <div>
                      <p className="text-sm text-gray-600">
                        <strong>Service:</strong> {booking.service}
                      </p>
                      <p className="text-sm text-gray-600">
                        <strong>Date:</strong> {new Date(booking.date).toLocaleDateString()}
                      </p>
                    </div>
                    <span
                      className={`px-3 py-1 rounded-full text-sm ${
                        booking.status === 'Completed'
                          ? 'bg-green-200 text-green-800'
                          : booking.status === 'Pending'
                          ? 'bg-yellow-200 text-yellow-800'
                          : 'bg-red-200 text-red-800'
                      }`}
                    >
                      {booking.status}
                    </span>
                  </li>
                ))
              )}
            </ul>
          </div>
        );
      default:
        return <p>Select an option from the menu.</p>;
    }
  };

  return (
    <div className="min-h-screen bg-gray-100">
      <header className="bg-[#00bba3] text-white p-4 shadow-md">
        <div className="container mx-auto flex justify-between items-center">
          <h1 className="text-xl font-bold">
            Welcome, {user ? user.username : 'Loading...'}
          </h1>
          <button
            onClick={handleLogout}
            className="bg-red-500 px-4 py-2 rounded-md hover:bg-red-600"
          >
            Logout
          </button>
        </div>
      </header>

      <main className="container mx-auto py-6 flex">
        <aside className="w-1/4 bg-white shadow-md rounded-lg p-4">
          <ul className="space-y-4">
            <li>
              <button
                onClick={() => setSelectedTab('profile')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  selectedTab === 'profile' ? 'bg-[#00bba3] text-white' : 'hover:bg-gray-100'
                }`}
              >
                My Profile
              </button>
            </li>
            <li>
              <button
                onClick={() => setSelectedTab('bookings')}
                className={`w-full text-left px-4 py-2 rounded-md ${
                  selectedTab === 'bookings' ? 'bg-[#00bba3] text-white' : 'hover:bg-gray-100'
                }`}
              >
                My Bookings
              </button>
            </li>
          </ul>
        </aside>

        <section className="w-3/4 pl-6">{renderContent()}</section>
      </main>
    </div>
  );
};

export default CustomerArea;
