import { colors } from "@/theme";
import { Ionicons } from "@expo/vector-icons";
import React from "react";
import { Pressable, Switch, Text, View } from "react-native";
import { styles } from "./SettingRow.styles";

interface SettingRowProps {
  icon: keyof typeof Ionicons.glyphMap;
  label: string;
  value?: string;
  isToggle?: boolean;
  toggleValue?: boolean;
  onToggle?: (val: boolean) => void;
  onPress?: () => void;
  isDanger?: boolean;
}

export function SettingRow({
  icon,
  label,
  value,
  isToggle,
  toggleValue,
  onToggle,
  onPress,
  isDanger,
}: SettingRowProps) {
  return (
    <Pressable
      style={[styles.container, isDanger && styles.dangerContainer]}
      onPress={onPress}
      disabled={!onPress && !isToggle}
    >
      <View style={styles.leftSection}>
        <View style={styles.iconBadge}>
          <Ionicons
            name={icon}
            size={20}
            color={isDanger ? colors.error : colors.primary}
          />
        </View>
        <Text style={[styles.label, isDanger && styles.dangerLabel]}>
          {label}
        </Text>
      </View>

      <View style={styles.rightSection}>
        {value && <Text style={styles.value}>{value}</Text>}

        {isToggle ? (
          <Switch
            value={toggleValue}
            onValueChange={onToggle}
            trackColor={{
              false: colors.border.medium,
              true: colors.pastel.limeDark,
            }}
            thumbColor="#FFFFFF"
          />
        ) : (
          <Ionicons
            name="chevron-forward"
            size={20}
            color={isDanger ? colors.error : colors.text.muted}
          />
        )}
      </View>
    </Pressable>
  );
}
