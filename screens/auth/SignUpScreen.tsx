import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { useAuth } from "@/hooks/useAuth";
import { colors } from "@/theme/colors";
import { validateSignUpForm } from "@/utils/validation";
import { Ionicons } from "@expo/vector-icons";
import React, { useState } from "react";
import { Pressable, Text, View } from "react-native";
import { styles } from "./SignUpScreen.styles";

interface SignUpScreenProps {
  onNavigateToLogin: () => void;
}

export function SignUpScreen({ onNavigateToLogin }: SignUpScreenProps) {
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
      await signUp({ name, email, password, confirmPassword });
    } catch (error) {
      setErrors({ email: "Failed to create an account. Please try again." });
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
              name="sparkles-outline"
              size={34}
              color={colors.pastel.limeDark}
            />
          </View>
          <Text style={styles.title}>Create account</Text>
          <Text style={styles.subtitle}>
            Start your child&apos;s learning journey
          </Text>
        </View>

        <View style={styles.form}>
          <Input
            placeholder="Child or Parent's Name"
            value={name}
            onChangeText={(text) => {
              setName(text);
              if (errors.name) setErrors((prev) => ({ ...prev, name: "" }));
            }}
            error={errors.name}
            leftIcon={
              <Ionicons
                name="person-outline"
                size={20}
                color={colors.text.muted}
              />
            }
          />

          <Input
            placeholder="Enter email address"
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
            placeholder="Create password"
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

          <Input
            placeholder="Confirm password"
            value={confirmPassword}
            onChangeText={(text) => {
              setConfirmPassword(text);
              if (errors.confirmPassword)
                setErrors((prev) => ({ ...prev, confirmPassword: "" }));
            }}
            secureTextEntry
            error={errors.confirmPassword}
            leftIcon={
              <Ionicons
                name="checkmark-circle-outline"
                size={20}
                color={colors.text.muted}
              />
            }
          />

          <Button
            title="Sign up"
            variant="primary"
            loading={isLoading}
            onPress={handleSignUp}
            style={styles.submitButton}
          />
        </View>

        <View style={styles.footer}>
          <Text style={styles.footerText}>Already have an account?</Text>
          <Pressable onPress={onNavigateToLogin}>
            <Text style={styles.footerAction}>Log in</Text>
          </Pressable>
        </View>
      </View>
    </ScreenContainer>
  );
}
