import { LoginCredentials, SignUpCredentials } from "@/types/auth";

export const isValidEmail = (email: string): boolean => {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email.trim());
};

export const validateLoginForm = (
  credentials: LoginCredentials,
): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!credentials.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(credentials.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (credentials.password !== undefined && !credentials.password) {
    errors.password = "Password is required.";
  } else if (
    credentials.password !== undefined &&
    credentials.password.length < 6
  ) {
    errors.password = "Password must be at least 6 characters.";
  }

  return errors;
};

export const validateSignUpForm = (
  credentials: SignUpCredentials,
): Record<string, string> => {
  const errors: Record<string, string> = {};

  if (!credentials.name.trim()) {
    errors.name = "Full name is required.";
  }

  if (!credentials.email.trim()) {
    errors.email = "Email address is required.";
  } else if (!isValidEmail(credentials.email)) {
    errors.email = "Please enter a valid email address.";
  }

  if (!credentials.password) {
    errors.password = "Password is required.";
  } else if (credentials.password.length < 6) {
    errors.password = "Password must be at least 6 characters.";
  }

  if (!credentials.confirmPassword) {
    errors.confirmPassword = "Confirm your password.";
  } else if (credentials.password !== credentials.confirmPassword) {
    errors.confirmPassword = "Passwords do not match.";
  }

  return errors;
};
