import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { ActivityIndicator, Pressable, TextInput, View } from "react-native";
import { styles } from "./AIInput.styles";

interface AIInputProps {
  value: string;
  onChangeText: (text: string) => void;
  onSend: () => void;
  isTyping: boolean;
}

export function AIInput({
  value,
  onChangeText,
  onSend,
  isTyping,
}: AIInputProps) {
  const hasText = value.trim().length > 0;

  return (
    <View style={styles.container}>
      <View style={styles.inputWrapper}>
        <TextInput
          style={styles.input}
          placeholder="Ask your learning buddy..."
          placeholderTextColor={colors.text.muted}
          value={value}
          onChangeText={onChangeText}
          onSubmitEditing={onSend}
          returnKeyType="send"
        />
      </View>

      <Pressable
        style={[styles.sendButton, !hasText && styles.sendButtonDisabled]}
        onPress={onSend}
        disabled={!hasText || isTyping}
      >
        {isTyping ? (
          <ActivityIndicator size="small" color={colors.onPrimary} />
        ) : (
          <Ionicons name="arrow-up" size={20} color={colors.onPrimary} />
        )}
      </Pressable>
    </View>
  );
}
