import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../services/api";

import PublicLayout from "../layouts/PublicLayout";

import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

import Background from "../components/Background";
import MouseGlow from "../components/MouseGlow";
import Particles from "../components/Particles";

export default function Register() {

  const navigate = useNavigate();

  const [username, setUsername] = useState("");

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [confirmPassword, setConfirmPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({});

  const validate = () => {

    const err = {};

    if (!username.trim()) {
      err.username = "Username is required.";
    }

    if (!email.trim()) {
      err.email = "Email is required.";
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      err.email = "Invalid email.";
    }

    if (!password) {
      err.password = "Password is required.";
    }

    if (password.length < 6) {
      err.password = "Minimum 6 characters.";
    }

    if (password !== confirmPassword) {
      err.confirmPassword = "Passwords do not match.";
    }

    setErrors(err);

    return Object.keys(err).length === 0;

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {

      await api.post("/auth/register", {
        username,
        email,
        password,
        confirm_password: confirmPassword,
      });
            toast.success("Registration successful!");

      navigate("/login");

    } catch (error) {

      console.error(error);

      if (error.response) {

        toast.error(
          error.response.data?.detail ||
          "Registration failed."
        );

      } else {

        toast.error(
          "Unable to connect to server."
        );

      }

    } finally {

      setLoading(false);

    }

  };

  return (

    <PublicLayout>

      <Background />
      <MouseGlow />
      <Particles />

      <div className="min-h-screen flex items-center justify-center px-6">

        <AuthCard
          title="Create Account"
          subtitle="Join SorryNotSorry today"
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-5"
          >

            <AuthInput
              label="Username"
              placeholder="Enter username"
              value={username}
              onChange={(e) =>
                setUsername(e.target.value)
              }
              error={errors.username}
            />

            <AuthInput
              label="Email Address"
              type="email"
              placeholder="Enter email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              error={errors.email}
            />

            <AuthInput
              label="Password"
              type="password"
              placeholder="Create password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              error={errors.password}
            />

            <AuthInput
              label="Confirm Password"
              type="password"
              placeholder="Confirm password"
              value={confirmPassword}
              onChange={(e) =>
                setConfirmPassword(e.target.value)
              }
              error={errors.confirmPassword}
            />

            <div className="pt-2">

              <AuthButton loading={loading}>
                Register
              </AuthButton>

            </div>
                        <div className="text-center mt-6">

              <p
                style={{
                  color: "var(--text)",
                  opacity: 0.8,
                }}
              >
                Already have an account?
              </p>

              <Link
                to="/login"
                className="font-semibold mt-2 inline-block transition-all duration-300"
                style={{
                  color: "var(--primary)",
                }}
              >
                Sign In
              </Link>

            </div>

            <div className="mt-8 text-center">

              <p
                className="text-sm"
                style={{
                  color: "var(--text)",
                  opacity: 0.65,
                }}
              >
                By creating an account, you agree to our
                Terms of Service and Privacy Policy.
              </p>

            </div>

          </form>

        </AuthCard>

      </div>

    </PublicLayout>

  );

}