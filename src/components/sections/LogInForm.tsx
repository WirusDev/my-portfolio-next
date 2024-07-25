import { useState } from "react";
import { signIn } from "next-auth/react";

const AuthForm = () => {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  const [isRegister, setIsRegister] = useState(false);

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (isRegister) {
      const res = await fetch("/api/register", {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
        },
        body: JSON.stringify({ username, password }),
      });

      const data = await res.json();
      if (data.success) {
        alert("User registered successfully!");
      } else {
        alert(`Registration failed: ${data.message}`);
      }
    } else {
      const res = await signIn("credentials", {
        redirect: false,
        username,
        password,
      });

      if (res.ok) {
        alert("Login successful!");
      } else {
        alert("Login failed!");
      }
    }
  };

  return (
    <form onSubmit={handleSubmit} className='flex flex-col'>
      <input
        type='text'
        value={username}
        onChange={(e) => setUsername(e.target.value)}
        placeholder='Username'
        className='mb-2 p-2 border border-gray-300 rounded'
      />
      <input
        type='password'
        value={password}
        onChange={(e) => setPassword(e.target.value)}
        placeholder='Password'
        className='mb-2 p-2 border border-gray-300 rounded'
      />
      <button type='submit' className='p-2 bg-blue-500 text-white rounded'>
        {isRegister ? "Register" : "Login"}
      </button>
      <button
        type='button'
        onClick={() => setIsRegister(!isRegister)}
        className='p-2 bg-gray-500 text-white rounded mt-2'
      >
        {isRegister ? "Switch to Login" : "Switch to Register"}
      </button>
    </form>
  );
};

export default AuthForm;
