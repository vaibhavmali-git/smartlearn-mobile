import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { useAuth } from "@/hooks/useAuth";
import { validateSignUpForm } from "@/utils/validation";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./SignUpScreen.styles";

interface SignUpScreenProps {
  onNavigateBack: () => void;
  onNavigateToLogin: () => void;
}

export function SignUpScreen({
  onNavigateBack,
  onNavigateToLogin,
}: SignUpScreenProps) {
  const { signUp } = useAuth();

  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleSignUp = async () => {
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
    } catch (error) {
      setErrors({
        email: "Failed to create an account. Please try again.",
      });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScreenContainer scrollable backgroundColor="#FFFFFF">
      <View style={styles.container}>
        <Pressable
          style={styles.backButton}
          onPress={onNavigateBack}
          hitSlop={10}
        >
          <HugeiconsIcon
            icon={ArrowLeft02Icon}
            size={22}
            color="#010000"
            strokeWidth={2}
          />
        </Pressable>

        <View style={styles.content}>
          <View style={styles.header}>
            <Text style={styles.title}>Create Account!</Text>

            <Text style={styles.subtitle}>Start your learning journey</Text>
          </View>

          <View style={styles.form}>
            <View style={styles.field}>
              <Input
                placeholder="Enter your name"
                value={name}
                onChangeText={(text) => {
                  setName(text);

                  if (errors.name) {
                    setErrors((prev) => ({
                      ...prev,
                      name: "",
                    }));
                  }
                }}
                error={errors.name}
              />
            </View>

            <View style={styles.field}>
              <Input
                placeholder="Enter email address"
                value={email}
                onChangeText={(text) => {
                  setEmail(text);

                  if (errors.email) {
                    setErrors((prev) => ({
                      ...prev,
                      email: "",
                    }));
                  }
                }}
                autoCapitalize="none"
                keyboardType="email-address"
                error={errors.email}
              />
            </View>

            <View style={styles.field}>
              <Input
                placeholder="Create password"
                value={password}
                onChangeText={(text) => {
                  setPassword(text);

                  if (errors.password) {
                    setErrors((prev) => ({
                      ...prev,
                      password: "",
                    }));
                  }
                }}
                secureTextEntry
                error={errors.password}
              />
            </View>

            <View style={styles.field}>
              <Input
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={(text) => {
                  setConfirmPassword(text);

                  if (errors.confirmPassword) {
                    setErrors((prev) => ({
                      ...prev,
                      confirmPassword: "",
                    }));
                  }
                }}
                secureTextEntry
                error={errors.confirmPassword}
              />
            </View>

            <Button
              title="Sign Up"
              variant="primary"
              loading={isLoading}
              onPress={handleSignUp}
              style={styles.submitButton}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>

          <Pressable onPress={onNavigateToLogin}>
            <Text style={styles.footerAction}>Log In</Text>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
}
