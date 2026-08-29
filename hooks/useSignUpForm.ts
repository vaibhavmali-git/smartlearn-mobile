import { SignUpCredentials } from "@/types/auth";
import { validateSignUpForm } from "@/utils/validation";
import { useState } from "react";

export function useSignUpForm(
  signUp: (credentials: SignUpCredentials) => Promise<void>,
) {
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const updateField = (
    field: "name" | "email" | "password" | "confirmPassword",
    value: string,
  ) => {
    if (field === "name") {
      setName(value);
    } else if (field === "email") {
      setEmail(value);
    } else if (field === "password") {
      setPassword(value);
    } else {
      setConfirmPassword(value);
    }

    setErrors((prev) => {
      if (!prev[field]) {
        return prev;
      }

      const nextErrors = { ...prev };
      delete nextErrors[field];
      return nextErrors;
    });
  };

  const handleSubmit = async () => {
    const validationErrors = validateSignUpForm({
      name,
      email,
      password,
      confirmPassword,
    });

    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsLoading(true);
      await signUp({
        name,
        email,
        password,
        confirmPassword,
      });
    } catch {
      setErrors({
        email: "Failed to create an account. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    name,
    email,
    password,
    confirmPassword,
    errors,
    isLoading,
    updateField,
    handleSubmit,
  };
}
