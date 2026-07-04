import { useState } from "react";
import { Link, useNavigate } from "react-router-dom";
import toast from "react-hot-toast";

import api from "../services/api";
import { useAuth } from "../context/AuthContext";

import PublicLayout from "../layouts/PublicLayout";

import AuthCard from "../components/auth/AuthCard";
import AuthInput from "../components/auth/AuthInput";
import AuthButton from "../components/auth/AuthButton";

import Background from "../components/Background";
import MouseGlow from "../components/MouseGlow";
import Particles from "../components/Particles";

export default function Login() {

  const navigate = useNavigate();

  const { login } = useAuth();

  const [email, setEmail] = useState("");

  const [password, setPassword] = useState("");

  const [loading, setLoading] = useState(false);

  const [errors, setErrors] = useState({
    email: "",
    password: "",
  });

  const validate = () => {

    const newErrors = {};

    if (!email.trim()) {
      newErrors.email = "Email is required.";
    }

    if (!password.trim()) {
      newErrors.password = "Password is required.";
    }

    if (
      email &&
      !/^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email)
    ) {
      newErrors.email = "Enter a valid email.";
    }

    setErrors(newErrors);

    return Object.keys(newErrors).length === 0;

  };

  const handleSubmit = async (e) => {

    e.preventDefault();

    if (!validate()) return;

    setLoading(true);

    try {

      const { data } = await api.post(
        "/auth/login",
        {
          email,
          password,
        }
      );

      login(data.access_token);

      toast.success("Login successful!");

      navigate("/dashboard");

    } catch (error) {

      console.error(error);

      if (error.response) {

        toast.error(
          error.response.data?.detail ||
          "Login failed."
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
          title="Welcome Back"
          subtitle="Sign in to continue using SorryNotSorry"
        >

          <form
            onSubmit={handleSubmit}
            className="space-y-4"
          >

            <AuthInput
              label="Email Address"
              type="email"
              placeholder="Enter your email"
              value={email}
              onChange={(e) =>
                setEmail(e.target.value)
              }
              error={errors.email}
            />

            <AuthInput
              label="Password"
              type="password"
              placeholder="Enter your password"
              value={password}
              onChange={(e) =>
                setPassword(e.target.value)
              }
              error={errors.password}
            />

            <div className="pt-2">

              <AuthButton
                loading={loading}
              >
                Login
              </AuthButton>

            </div>

            <div className="text-center mt-6">

              <p
                style={{
                  color: "var(--text)",
                  opacity: .8,
                }}
              >
                Don't have an account?
              </p>

              <Link
                to="/register"
                className="font-semibold mt-2 inline-block transition-all duration-300"
                style={{
                  color: "var(--primary)",
                }}
              >
                Create an account
              </Link>

            </div>
                        <div className="mt-6 text-center">

              <p
                className="text-xs leading-5"
                style={{
                  color: "var(--text)",
                  opacity: 0.4,
                }}
              >
                By continuing, you agree to our Terms of Service
                and Privacy Policy.
              </p>

            </div>

          </form>

        </AuthCard>

      </div>

    </PublicLayout>
  );

}