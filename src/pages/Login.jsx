import React, { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { loginUser } from '../redux/slices/authSlice';

const Login = () => {
  const dispatch = useDispatch();
  const { loading, error } = useSelector((state) => state.auth);

  const [form, setForm] = useState({ email: "", password: "" });

  const handleChange = (e) => setForm({ ...form, [e.target.name]: e.target.value });

  const handleSubmit = (e) => {
    e.preventDefault();
    dispatch(loginUser(form));
  };

  return (
    <form onSubmit={handleSubmit} className="p-4 max-w-md mx-auto space-y-3">
      <input name="email" type="email" placeholder="Email" onChange={handleChange} className="border p-2 w-full"/>
      <input name="password" type="password" placeholder="Password" onChange={handleChange} className="border p-2 w-full"/>
      <button type="submit" className="bg-green-600 text-white px-4 py-2 rounded">{loading ? "Loading..." : "Login"}</button>
      {error && <p className="text-red-500">{error}</p>}
    </form>
  );
};

export default Login;
