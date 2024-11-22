
import { GoogleLogin } from '@react-oauth/google';

const Login = () => {
  const handleGoogleLogin = (response: any) => {
    console.log('Google Login Response:', response);
    // Handle the login response here (e.g., send token to backend for validation)
  };

  const handleFacebookLogin = () => {
    console.log('Facebook Login Triggered');
    // Handle Facebook login logic (e.g., using the Facebook SDK)
  };

  return (
    <div className="max-w-sm mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
      <h2 className="text-center text-2xl font-semibold mb-8">Login</h2>

      {/* Original Login Form */}
      <form className="space-y-4">
        <div className="mb-4">
          <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
          <input
            type="email"
            id="email"
            name="email"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your email"
          />
        </div>

        <div className="mb-6">
          <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
          <input
            type="password"
            id="password"
            name="password"
            className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
            placeholder="Enter your password"
          />
        </div>

        <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
          Login
        </button>
      </form>

      {/* Google Login Button */}
      <div className="mt-6">
        <GoogleLogin
          onSuccess={handleGoogleLogin}
          onError={() => console.log('Google Login Failed')}
          useOneTap
          shape="pill"
          text="continue_with" // Text on the Google button
          width="320"
        />
      </div>

      {/* Facebook Login Button */}
      <button
        onClick={handleFacebookLogin}
        className="facebook-login-btn w-full mt-4 py-2 bg-blue-600 text-white rounded-md flex items-center justify-start"
      >
        {/* Facebook Icon */}
        <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
          <path d="M18 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6v-4H9v-2h3V9c0-2.25 1.25-3.5 3.25-3.5h2.25V6h-2C12.01 6 12 6.75 12 7.5v1.5h4l-1 2h-3v4h5.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
        </svg>
        Login with Facebook
      </button>
    </div>
  );
};

export default Login;
