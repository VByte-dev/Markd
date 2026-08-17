import axios from "axios";
import { Link, useNavigate } from "react-router-dom";
import { useState } from "react";
import StateMessage from "../components/StateMessage";

const Register = () => {
  const navigate = useNavigate();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const [stateMessage, setStateMessage] = useState(null);
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();

    setStateMessage(null);

    if (password !== confirmPassword) {
      setStateMessage({
        title: "Registration failed",
        description: "Passwords do not match.",
      });
      return;
    }

    if (password.length < 6) {
      setStateMessage({
        title: "Registration failed",
        description: "Password must be at least 6 characters.",
      });
      return;
    }

    try {
      setLoading(true);

      const response = await axios.post(
        "https://markd-5jlq.onrender.com/auth/register",
        {
          name,
          email,
          password,
        },
      );

      if (response.data.token) {
        localStorage.setItem("token", response.data.token);

        navigate("/");
        return;
      }

      navigate("/login");
    } catch (err) {
      setStateMessage({
        title: "Registration failed",
        description:
          err.response?.data?.message ||
          "Unable to create your account. Please try again.",
      });
    } finally {
      setLoading(false);
    }
  };

  return (
    <main className="min-h-screen bg-surface flex items-center justify-center px-4 py-12">
      <section className="w-full max-w-md">
        {/* Register Card */}
        <div className="bg-white border-2 border-light rounded-2xl p-6 md:p-8">
          {/* Header */}
          <div className="mb-8">
            <h1 className="font-[bricolage] text-center text-2xl md:text-3xl text-deep">
              Create your account
            </h1>

            <p className="font-[coolvetica] text-center text-sm md:text-base text-deep/60 mt-2">
              Start saving what matters.
            </p>
          </div>

          {/* State Message */}
          {stateMessage && (
            <div className="mb-5">
              <StateMessage
                title={stateMessage.title}
                description={stateMessage.description}
              />
            </div>
          )}

          {/* Form */}
          <form onSubmit={handleRegister}>
            {/* Name */}
            <div className="mb-4">
              <label
                htmlFor="name"
                className="block font-[coolvetica] text-sm text-deep mb-2"
              >
                Name
              </label>

              <input
                id="name"
                type="text"
                required
                autoComplete="name"
                placeholder="Your name"
                value={name}
                onChange={(e) => setName(e.target.value)}
                className="w-full border-2 border-light outline-none rounded-lg py-2.5 px-4 text-deep bg-white focus:bg-surface transition font-[coolvetica] text-sm md:text-base placeholder:text-deep/40"
              />
            </div>

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
            <div className="mb-4">
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
                autoComplete="new-password"
                placeholder="Password"
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full border-2 border-light outline-none rounded-lg py-2.5 px-4 text-deep bg-white focus:bg-surface transition font-[coolvetica] text-sm md:text-base placeholder:text-deep/40"
              />
            </div>

            {/* Confirm Password */}
            <div className="mb-6">
              <label
                htmlFor="confirmPassword"
                className="block font-[coolvetica] text-sm text-deep mb-2"
              >
                Confirm password
              </label>

              <input
                id="confirmPassword"
                type="password"
                required
                autoComplete="new-password"
                placeholder="Confirm password"
                value={confirmPassword}
                onChange={(e) => setConfirmPassword(e.target.value)}
                className="w-full border-2 border-light outline-none rounded-lg py-2.5 px-4 text-deep bg-white focus:bg-surface transition font-[coolvetica] text-sm md:text-base placeholder:text-deep/40"
              />
            </div>

            {/* Register Button */}
            <button
              type="submit"
              disabled={loading}
              className="bg-deep text-sm text-surface font-[bricolage] w-full py-2 rounded-lg border-2 border-deep transition md:text-base cursor-pointer"
            >
              {loading ? "Creating account..." : "Create account"}
            </button>
          </form>

          {/* Login Link */}
          <div className="flex items-center gap-3 my-6">
            <div className="h-px bg-light flex-1"></div>

            <span className="font-[coolvetica] text-xs text-deep/40">OR</span>

            <div className="h-px bg-light flex-1"></div>
          </div>

          <p className="text-center font-[coolvetica] text-sm text-deep/60">
            Already have an account?{" "}
            <Link
              to="/login"
              className="text-deep font-semibold underline underline-offset-4 hover:text-deep/70 transition"
            >
              Login
            </Link>
          </p>
        </div>
      </section>
    </main>
  );
};

export default Register;
