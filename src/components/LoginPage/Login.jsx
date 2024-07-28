// import React, { useState } from 'react';
// import './Login.css';
// import { FaUser, FaLock } from "react-icons/fa";
// import { Link } from 'react-router-dom';
// import bcrypt from 'bcryptjs';

// const LoginForm = () => {
//   const [username, setUsername] = useState('');
//   const [password, setPassword] = useState('');
//   const [rememberMe, setRememberMe] = useState(false);
//   const [loading, setLoading] = useState(false);
//   const [error, setError] = useState(null);

//   const handleSubmit = async (event) => {
//     event.preventDefault();
//     setError(null); // Clear any previous error messages
//     setLoading(true); // Set loading to true when form is submitted

//     // Validate username and password
//     if (username.length < 3) {
//       setError('Username must be at least 3 characters long');
//       setLoading(false);
//       return;
//     }
//     if (password.length < 8) {
//       setError('Password must be at least 8 characters long');
//       setLoading(false);
//       return;
//     }

//     // Hash password using bcrypt
//     const hashedPassword = await bcrypt.hash(password, 10);

//     // Add your login logic here
//     // For demonstration purposes, I'll just log the hashed password
//     console.log('Login form submitted:', { username, hashedPassword, rememberMe });

//     // Simulate a delay to demonstrate the loading state
//     setTimeout(() => {
//       setLoading(false); // Set loading to false when login logic is complete
//     }, 2000);
//   };

//   return (
//     <div className='wrapper'>
//       <form onSubmit={handleSubmit}>
//         <h1>Login</h1>
//         <div className="input-box">
//           <input
//             type="text"
//             placeholder='Username'
//             value={username}
//             onChange={(event) => setUsername(event.target.value)}
//             required
//           />
//           <FaUser className='icon' size={20} />
//         </div>
//         <div className="input-box">
//           <input
//             type="password"
//             placeholder='Password'
//             value={password}
//             onChange={(event) => setPassword(event.target.value)}
//             required
//           />
//           <FaLock className='icon' size={20} />
//         </div>
//         <div className="remember-forgot">
//           <label>
//             <input
//               type="checkbox"
//               checked={rememberMe}
//               onChange={(event) => setRememberMe(event.target.checked)}
//             />
//             Remember me
//           </label>
//           <a href="#">Forgot password?</a>
//         </div>
//         {error && <div className="error-message">{error}</div>}
//         <button type="submit" disabled={loading}>
//           {loading ? 'Loading...' : 'Login'}
//         </button>
//         <div className="register-link">
//           <p>Don't have an account? <Link to="/signup">Register</Link></p>
//         </div>
//       </form>
//     </div>
//   );
// };

// export default LoginForm;