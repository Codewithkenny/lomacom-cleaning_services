// import { GoogleLogin } from '@react-oauth/google';
// import { useState } from 'react';
// import axios from 'axios';  // Axios for API calls

// const SignUp = () => {
//   const [email, setEmail] = useState('');
//   const [username, setUsername] = useState('');
//   const [countryCode, setCountryCode] = useState('');
//   const [phoneNumber, setPhoneNumber] = useState('');
//   const [password, setPassword] = useState('');
//   const [error, setError] = useState('');  // Error state to display API error messages

//   // Handle Google sign-up response
//   const handleGoogleSignUp = (response: any) => {
//     console.log('Google Sign Up Response:', response);
//     // Here you can send the token to your backend for validation
//     // Example: axios.post('/api/auth/google-signup', { token: response.credential });
//   };

//   // Handle Facebook sign-up logic
//   const handleFacebookSignUp = () => {
//     console.log('Facebook Sign Up Triggered');
//     // Handle Facebook sign-up logic here (e.g., using the Facebook SDK)
//   };

//   // Handle country code change
//   const handleCountryChange = (e: React.ChangeEvent<HTMLSelectElement>) => {
//     setCountryCode(e.target.value);
//   };

//   // Handle phone number change
//   const handlePhoneNumberChange = (e: React.ChangeEvent<HTMLInputElement>) => {
//     setPhoneNumber(e.target.value);
//   };

//   // Handle form submission
//   const handleSubmit = async (e: React.FormEvent) => {
//     e.preventDefault();
    
//     // Create user data object
//     const userData = {
//       email,
//       username,
//       phoneNumber: `${countryCode}${phoneNumber}`,  // Combine country code with phone number
//       password
//     };

//     try {
//       // Send sign-up data to backend API
//       const response = await axios.post('http://localhost:5000/api/auth/register', userData);
//       console.log('User signed up:', response.data);
//       // Redirect or show success message after successful sign-up
//     } catch (err: any) {
//       setError(err.response?.data?.message || 'An error occurred during sign-up');
//     }
//   };

//   return (
//     <div className="max-w-sm mx-auto mt-12 p-6 bg-white shadow-lg rounded-lg">
//       <h2 className="text-center text-2xl font-semibold mb-8">Sign Up</h2>

//       {/* Sign Up Form */}
//       <form className="space-y-4" onSubmit={handleSubmit}>
//         <div className="mb-4">
//           <label htmlFor="email" className="block text-sm font-medium text-gray-600">Email</label>
//           <input
//             type="email"
//             id="email"
//             name="email"
//             className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter your email"
//             value={email}
//             onChange={(e) => setEmail(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="username" className="block text-sm font-medium text-gray-600">Username</label>
//           <input
//             type="text"
//             id="username"
//             name="username"
//             className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter your username"
//             value={username}
//             onChange={(e) => setUsername(e.target.value)}
//             required
//           />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="phone" className="block text-sm font-medium text-gray-600">Phone Number</label>
//           <div className="flex items-center">
//             <select
//               className="border p-2 rounded-l w-24"
//               name="country_code"
//               value={countryCode}
//               onChange={handleCountryChange}
//               required
//             >
//               <option value="" disabled>Select</option> {/* Disabled placeholder option */}
//               <option value="+1">🇺🇸 +1 (US)</option>
//               <option value="+1">🇨🇦 +1 (Canada)</option>
//               <option value="+44">🇬🇧 +44 (UK)</option>
//               <option value="+234">🇳🇬 +234 (Nigeria)</option>
//               <option value="+91">🇮🇳 +91 (India)</option>
//               <option value="+61">🇦🇺 +61 (Australia)</option>
//               <option value="+81">🇯🇵 +81 (Japan)</option>
//               <option value="+49">🇩🇪 +49 (Germany)</option>
//               <option value="+33">🇫🇷 +33 (France)</option>
//               <option value="+55">🇧🇷 +55 (Brazil)</option>
//               <option value="+27">🇿🇦 +27 (South Africa)</option>
//               <option value="+86">🇨🇳 +86 (China)</option>
//               <option value="+7">🇷🇺 +7 (Russia)</option>
//               <option value="+34">🇪🇸 +34 (Spain)</option>
//               <option value="+39">🇮🇹 +39 (Italy)</option>
//               <option value="+52">🇲🇽 +52 (Mexico)</option>
//               <option value="+46">🇸🇪 +46 (Sweden)</option>
//               <option value="+31">🇳🇱 +31 (Netherlands)</option>
//               <option value="+47">🇳🇴 +47 (Norway)</option>
//               <option value="+41">🇨🇭 +41 (Switzerland)</option>
//               <option value="+32">🇧🇪 +32 (Belgium)</option>
//               <option value="+45">🇩🇰 +45 (Denmark)</option>
//               <option value="+353">🇮🇪 +353 (Ireland)</option>
//               <option value="+420">🇨🇿 +420 (Czech Republic)</option>
//               <option value="+370">🇱🇹 +370 (Lithuania)</option>
//               <option value="+48">🇵🇱 +48 (Poland)</option>
//               <option value="+359">🇧🇬 +359 (Bulgaria)</option>
//               <option value="+381">🇷🇸 +381 (Serbia)</option>
//               <option value="+30">🇬🇷 +30 (Greece)</option>
//               <option value="+43">🇦🇹 +43 (Austria)</option>
//               <option value="+358">🇫🇮 +358 (Finland)</option>
//               <option value="+389">🇲🇰 +389 (North Macedonia)</option>
//               <option value="+421">🇸🇰 +421 (Slovakia)</option>
//             </select>
//             <input
//               type="tel"
//               placeholder="Phone Number"
//               className="p-2 border rounded-r w-full"
//               required
//               value={phoneNumber}
//               onChange={handlePhoneNumberChange}
//             />
//           </div>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="password" className="block text-sm font-medium text-gray-600">Password</label>
//           <input
//             type="password"
//             id="password"
//             name="password"
//             className="w-full px-4 py-2 mt-1 border border-gray-300 rounded-md focus:ring-blue-500 focus:border-blue-500"
//             placeholder="Enter your password"
//             value={password}
//             onChange={(e) => setPassword(e.target.value)}
//             required
//           />
//         </div>

//         {error && <p className="text-red-500 text-sm">{error}</p>}

//         <button type="submit" className="w-full py-2 bg-blue-600 text-white font-semibold rounded-md hover:bg-blue-700 focus:ring-4 focus:ring-blue-300">
//           Sign Up
//         </button>
//       </form>

//       {/* Google Sign Up Button */}
//       <div className="mt-6">
//         <GoogleLogin
//           onSuccess={handleGoogleSignUp}
//           onError={() => console.log('Google Sign Up Failed')}
//           useOneTap
//           shape="pill"
//           text="continue_with" // Text on the Google button
//           width="320"
//         />
//       </div>

//       {/* Facebook Sign Up Button */}
//       <button
//         onClick={handleFacebookSignUp}
//         className="facebook-login-btn w-full mt-4 py-2 bg-blue-600 text-white rounded-md flex items-center justify-start"
//       >
//         {/* Facebook Icon */}
//         <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="mr-2">
//           <path d="M18 2H6a2 2 0 0 0-2 2v12a2 2 0 0 0 2 2h6v-4H9v-2h3V9c0-2.25 1.25-3.5 3.25-3.5h2.25V6h-2C12.01 6 12 6.75 12 7.5v1.5h4l-1 2h-3v4h5.5a2 2 0 0 0 2-2V4a2 2 0 0 0-2-2z" />
//         </svg>
//         Sign Up with Facebook
//       </button>
//     </div>
//   );
// };

// export default SignUp;
