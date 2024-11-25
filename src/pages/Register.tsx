import { useState } from 'react';
import { useNavigate } from 'react-router-dom'; // For navigation
import axios from 'axios';

const Register = () => {
  const [email, setEmail] = useState('');
  const [username, setUsername] = useState('');
  const [countryCode, setCountryCode] = useState('');
  const [phoneNumber, setPhoneNumber] = useState('');
  const [password, setPassword] = useState('');
  const [error, setError] = useState('');
  const [loading, setLoading] = useState(false); // Loading state

  const navigate = useNavigate();

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setLoading(true);

    const userData = {
      email,
      username,
      phoneNumber: `${countryCode}${phoneNumber}`,
      password,
    };

    try {
      const response = await axios.post(
        'http://localhost:5000/api/auth/register',
        userData
      );

      const { token, user } = response.data; // Extract token and user data
      console.log('User signed up:', user);

      // Save token and user info in local storage
      localStorage.setItem('authToken', token);
      localStorage.setItem('user', JSON.stringify(user));

      // Show success message (can use a toast notification library)
      alert(`Welcome, ${user.username}! Your account was successfully created.`);

      // Redirect to the booking summary page
      navigate('booking/booking-summary');
    } catch (err: any) {
      setError(err.response?.data?.message || 'An error occurred during sign-up');
    } finally {
      setLoading(false);
    }
  };

  return (
    <div className="max-w-sm mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-semibold mb-8">Sign Up</h2>

      <form className="space-y-4" onSubmit={handleSubmit}>
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter your email"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
          <input
            type="text"
            id="username"
            name="username"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter your username"
            value={username}
            onChange={(e) => setUsername(e.target.value)}
            required
          />
        </div>

        <div className="mb-4">
          <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone Number</label>
          <div className="flex items-center">
            <select
              className="border p-2 rounded-l w-24"
              name="country_code"
              value={countryCode}
              onChange={(e) => setCountryCode(e.target.value)}
              required
            >
              {/* Country code options */}
              <option value="" disabled>Select</option> {/* Disabled placeholder option */}
              <option value="+1">🇺🇸 +1 (US)</option>
              <option value="+1">🇨🇦 +1 (Canada)</option>
              <option value="+44">🇬🇧 +44 (UK)</option>
              <option value="+234">🇳🇬 +234 (Nigeria)</option>
              <option value="+91">🇮🇳 +91 (India)</option>
              <option value="+61">🇦🇺 +61 (Australia)</option>
              <option value="+81">🇯🇵 +81 (Japan)</option>
              <option value="+49">🇩🇪 +49 (Germany)</option>
              <option value="+33">🇫🇷 +33 (France)</option>
              <option value="+55">🇧🇷 +55 (Brazil)</option>
              <option value="+27">🇿🇦 +27 (South Africa)</option>
              <option value="+86">🇨🇳 +86 (China)</option>
              <option value="+7">🇷🇺 +7 (Russia)</option>
              <option value="+34">🇪🇸 +34 (Spain)</option>
              <option value="+39">🇮🇹 +39 (Italy)</option>
              <option value="+52">🇲🇽 +52 (Mexico)</option>
              <option value="+46">🇸🇪 +46 (Sweden)</option>
              <option value="+31">🇳🇱 +31 (Netherlands)</option>
              <option value="+47">🇳🇴 +47 (Norway)</option>
              <option value="+41">🇨🇭 +41 (Switzerland)</option>
              <option value="+32">🇧🇪 +32 (Belgium)</option>
              <option value="+45">🇩🇰 +45 (Denmark)</option>
              <option value="+353">🇮🇪 +353 (Ireland)</option>
              <option value="+420">🇨🇿 +420 (Czech Republic)</option>
              <option value="+370">🇱🇹 +370 (Lithuania)</option>
              <option value="+48">🇵🇱 +48 (Poland)</option>
              <option value="+359">🇧🇬 +359 (Bulgaria)</option>
              <option value="+381">🇷🇸 +381 (Serbia)</option>
              <option value="+30">🇬🇷 +30 (Greece)</option>
              <option value="+43">🇦🇹 +43 (Austria)</option>
              <option value="+358">🇫🇮 +358 (Finland)</option>
              <option value="+389">🇲🇰 +389 (North Macedonia)</option>
              <option value="+421">🇸🇰 +421 (Slovakia)</option>
            </select>
            <input
              type="tel"
              placeholder="Phone Number"
              className="p-2 border rounded-r w-full"
              required
              value={phoneNumber}
              onChange={(e) => setPhoneNumber(e.target.value)}
            />
          </div>
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md"
            placeholder="Enter your password"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />
        </div>

        {error && <p className="text-red-500 text-sm">{error}</p>}

        <button
          type="submit"
          className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md"
          disabled={loading}
        >
          {loading ? 'Signing Up...' : 'Sign Up'}
        </button>
      </form>
    </div>
  );
};

export default Register;
