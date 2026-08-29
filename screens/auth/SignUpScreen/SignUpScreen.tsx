import { Button } from "@/components/common/Button";
import { Input } from "@/components/common/Input";
import { ScreenContainer } from "@/components/common/ScreenContainer";
import { useAuth } from "@/hooks/useAuth";
import { useSignUpForm } from "@/hooks/useSignUpForm";
import { ArrowLeft02Icon } from "@hugeicons/core-free-icons";
import { HugeiconsIcon } from "@hugeicons/react-native";
import React from "react";
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
  const {
    name,
    email,
    password,
    confirmPassword,
    errors,
    isLoading,
    updateField,
    handleSubmit,
  } = useSignUpForm(signUp);

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
                onChangeText={(text) => updateField("name", text)}
                error={errors.name}
              />
            </View>

            <View style={styles.field}>
              <Input
                placeholder="Enter email address"
                value={email}
                onChangeText={(text) => updateField("email", text)}
                autoCapitalize="none"
                keyboardType="email-address"
                error={errors.email}
              />
            </View>

            <View style={styles.field}>
              <Input
                placeholder="Create password"
                value={password}
                onChangeText={(text) => updateField("password", text)}
                secureTextEntry
                error={errors.password}
              />
            </View>

            <View style={styles.field}>
              <Input
                placeholder="Confirm password"
                value={confirmPassword}
                onChangeText={(text) =>
                  updateField("confirmPassword", text)
                }
                secureTextEntry
                error={errors.confirmPassword}
              />
            </View>

            <Button
              title="Sign Up"
              variant="primary"
              loading={isLoading}
              onPress={handleSubmit}
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
