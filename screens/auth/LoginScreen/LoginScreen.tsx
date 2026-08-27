import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { useAuth } from "@/hooks/useAuth";
import { validateLoginForm } from "@/utils/validation";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./LoginScreen.styles";

interface LoginScreenProps {
  onNavigateBack: () => void;
  onNavigateToSignUp: () => void;
}

export function LoginScreen({
  onNavigateBack,
  onNavigateToSignUp,
}: LoginScreenProps) {
  const { login } = useAuth();

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [errors, setErrors] = useState<Record<string, string>>({});
  const [isLoading, setIsLoading] = useState(false);

  const handleLogin = async () => {
    const validationErrors = validateLoginForm({ email, password });
    setErrors(validationErrors);

    if (Object.keys(validationErrors).length > 0) {
      return;
    }

    try {
      setIsLoading(true);
      await login({ email, password });
    } catch (error) {
      setErrors({
        email: "Failed to log in. Please check your credentials.",
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
            <Text style={styles.title}>Welcome Back!</Text>

            <Text style={styles.subtitle}>
              Log into your verified profile to access
            </Text>
          </View>

          <View style={styles.form}>
            <View style={styles.field}>
              <Input
                placeholder="Enter your email address.."
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
                placeholder="Enter your password.."
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

            <Button
              title="Sign In"
              variant="primary"
              loading={isLoading}
              onPress={handleLogin}
              style={styles.submitButton}
            />
          </View>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don&apos;t have an account?</Text>

          <Pressable onPress={onNavigateToSignUp}>
            <Text style={styles.footerAction}>Sign Up</Text>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
}
