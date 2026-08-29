import { LoginCredentials } from "@/types/auth";
import { validateLoginForm } from "@/utils/validation";
import { useState } from "react";

export function useLoginForm(login: (credentials: LoginCredentials) => Promise<void>) {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const updateField = (field: "email" | "password", value: string) => {
    if (field === "email") {
      setEmail(value);
    } else {
      setPassword(value);
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
    const validationErrors = validateLoginForm({ email, password });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsLoading(true);
      await login({ email, password });
    } catch {
      setErrors({
        email: "Failed to log in. Please check your credentials.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return {
    email,
    password,
    errors,
    isLoading,
    updateField,
    handleSubmit,
  };
}
