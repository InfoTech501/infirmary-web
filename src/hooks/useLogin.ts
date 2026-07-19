import { useState } from "react";
import { useRouter } from "next/navigation";
import { login, saveToken } from "@/services/authService";
import { LoginFieldErrors } from "@/interface/auth";

export const useLogin = () => {
  const router = useRouter();

  const [employeeId, setEmployeeId] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<LoginFieldErrors>({});
  const [isSubmitting, setIsSubmitting] = useState(false);

  const validate = (): boolean => {
    const nextErrors: LoginFieldErrors = {};

    if (!employeeId.trim()) {
      nextErrors.employeeId = "Employee ID is required!";
    }
    if (!password) {
      nextErrors.password = "Password is required!";
    }

    setErrors(nextErrors);
    return Object.keys(nextErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    if (!validate()) return;

    setIsSubmitting(true);
    setErrors({});

    try {
      const token = await login({
        username: employeeId.trim(),
        password,
      });

      saveToken(token);
      router.push("/dashboard");
    } catch (err) {
      const status = (err as Error & { status?: number }).status;

      if (status === 401 || status === 400 || status === 403) {
        setErrors({
          employeeId: "Invalid Employee ID!",
          password: "Invalid Password!",
        });
      } else {
        setErrors({
          password: "Something went wrong. Please try again.",
        });
      }
    } finally {
      setIsSubmitting(false);
    }
  };

  return {
    employeeId,
    setEmployeeId,
    password,
    setPassword,
    errors,
    isSubmitting,
    handleSubmit,
  };
};