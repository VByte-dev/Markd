import React, { useState } from "react";
import axios from "axios";
import { Link, useNavigate } from "react-router-dom";

const Login = () => {
  const navigate = useNavigate();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleLogin = async (e) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "https://markd-5jlq.onrender.com/auth/login",
        {
          email,
          password,
        },
      );

      // Store JWT
      localStorage.setItem("token", response.data.token);

      console.log("Login successful");
      console.log(response.data);

      // Redirect to home
      navigate("/");
    } catch (err) {
      console.log(err.response?.data?.message || "Server error");
    }
  };

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-4 py-12">
      <section className="w-full max-w-md">

        {/* Login Card */}
        <div className="bg-white border-2 border-light rounded-2xl p-6 md:p-8">

          {/* Header */}
          <div className="mb-8">
            <h1 className="font-[bricolage] text-center text-2xl md:text-3xl text-deep">
              Welcome back
            </h1>

            <p className="font-[coolvetica] text-center text-sm md:text-base text-deep/60 mt-2">
              Pick up where you left off.
            </p>
          </div>

          {/* Form */}
          <form onSubmit={handleLogin}>

            {/* Email */}
            <div className="mb-4">
              <label
                htmlFor="email"
                className="block font-[coolvetica] text-sm text-deep mb-2"
              >
                Email
              </label>

              <input
                id="email"
                type="email"
                required
                autoComplete="email"
                placeholder="Email address"
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full border-2 border-light outline-none rounded-lg py-2.5 px-4 text-deep bg-white focus:bg-surface transition font-[coolvetica] text-sm md:text-base placeholder:text-deep/40"
              />
            </div>

            {/* Password */}
            <div className="mb-6">
              <label
                htmlFor="password"
                className="block font-[coolvetica] text-sm text-deep mb-2"
              >
                Password
              </label>

              <input
                id="password"
                type="password"
                required
                autoComplete="current-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-light outline-none rounded-lg py-2.5 px-4 text-deep bg-white focus:bg-surface transition font-[coolvetica] text-sm md:text-base placeholder:text-deep/40"
              />
            </div>

            {/* Login Button */}
            <button
              type="submit"
              className="bg-deep text-sm text-surface font-[bricolage] w-full py-2 rounded-lg border-2 border-deep transition md:text-base cursor-pointer"
            >
              Sign in
            </button>
          </form>

          {/* Register */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-light flex-1"></div>

            <span className="font-[coolvetica] text-xs text-deep/40">
              OR
            </span>

            <div className="h-px bg-light flex-1"></div>
          </div>

          <p className="text-center font-[coolvetica] text-sm text-deep/60">
            New to Markd?{" "}
            <Link
              to="/register"
              className="text-deep font-semibold underline underline-offset-4 hover:text-deep/70 transition"
            >
              Create an account
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Login;