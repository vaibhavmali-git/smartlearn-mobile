import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { useAuth } from "@/hooks/useAuth";
import { colors } from "@/theme/colors";
import { validateLoginForm } from "@/utils/validation";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./LoginScreen.styles";

interface LoginScreenProps {
  onNavigateToSignUp: () => void;
}

export function LoginScreen({ onNavigateToSignUp }: LoginScreenProps) {
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
      setErrors({ email: "Failed to log in. Please check your credentials." });
    } finally {
      setIsLoading(false);
    }
  };

  return (
    <ScreenContainer scrollable>
      <View style={styles.container}>
        <View style={styles.header}>
          <View style={styles.iconBadge}>
            <Ionicons
              name="globe-outline"
              size={36}
              color={colors.pastel.lavenderDark}
            />
          </View>
          <Text style={styles.title}>Welcome back</Text>
        </View>

        <View style={styles.form}>
          <Input
            placeholder="Enter email or username"
            value={email}
            onChangeText={(text) => {
              setEmail(text);
              if (errors.email) setErrors((prev) => ({ ...prev, email: "" }));
            }}
            autoCapitalize="none"
            keyboardType="email-address"
            error={errors.email}
            leftIcon={
              <Ionicons
                name="mail-outline"
                size={20}
                color={colors.text.muted}
              />
            }
          />

          <Input
            placeholder="Enter password"
            value={password}
            onChangeText={(text) => {
              setPassword(text);
              if (errors.password)
                setErrors((prev) => ({ ...prev, password: "" }));
            }}
            secureTextEntry
            error={errors.password}
            leftIcon={
              <Ionicons
                name="lock-closed-outline"
                size={20}
                color={colors.text.muted}
              />
            }
          />

          <Button
            title="Continue"
            variant="primary"
            loading={isLoading}
            onPress={handleLogin}
            style={styles.submitButton}
          />

          <Text style={styles.disclaimer}>
            By continuing, you agree to our{" "}
            <Text style={styles.link}>Terms</Text> and{" "}
            <Text style={styles.link}>Privacy Policy</Text>.
          </Text>
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Don&apos;t have an account?</Text>
          <Pressable onPress={onNavigateToSignUp}>
            <Text style={styles.footerAction}>Sign up</Text>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
}
