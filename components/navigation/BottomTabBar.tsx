import { colors } from "@/theme";
import { FontAwesome5, Ionicons } from "@expo/vector-icons";
import { BottomTabBarProps } from "@react-navigation/bottom-tabs";
import React from "react";
import { Pressable, View } from "react-native";
import { useSafeAreaInsets } from "react-native-safe-area-context";
import { styles } from "./BottomTabBar.styles";

export function BottomTabBar({
  state,
  descriptors,
  navigation,
}: BottomTabBarProps) {
  const insets = useSafeAreaInsets();

  const bottomPosition = Math.max(insets.bottom, 16);

  return (
    <View style={[styles.container, { bottom: bottomPosition }]}>
      {state.routes.map((route, index) => {
        const { options } = descriptors[route.key];
        const isFocused = state.index === index;

        const onPress = () => {
          const event = navigation.emit({
            type: "tabPress",
            target: route.key,
            canPreventDefault: true,
          });

          if (!isFocused && !event.defaultPrevented) {
            navigation.navigate(route.name, route.params);
          }
        };

        const onLongPress = () => {
          navigation.emit({
            type: "tabLongPress",
            target: route.key,
          });
        };

        const renderIcon = () => {
          const color = isFocused ? colors.onPrimary : colors.primary;
          const size = 22;

          switch (route.name) {
            case "index":
              return (
                <Ionicons
                  name={isFocused ? "home" : "home-outline"}
                  size={size}
                  color={color}
                />
              );
            case "ai":
              return <FontAwesome5 name="robot" size={18} color={color} />;
            case "analytics":
              return (
                <Ionicons
                  name={isFocused ? "bar-chart" : "bar-chart-outline"}
                  size={size}
                  color={color}
                />
              );
            case "profile":
              return (
                <Ionicons
                  name={isFocused ? "person" : "person-outline"}
                  size={size}
                  color={color}
                />
              );
            default:
              return (
                <Ionicons name="ellipse-outline" size={size} color={color} />
              );
          }
        };

        return (
          <Pressable
            key={route.key}
            accessibilityRole="button"
            accessibilityState={isFocused ? { selected: true } : {}}
            accessibilityLabel={options.tabBarAccessibilityLabel}
            testID={options.tabBarButtonTestID}
            onPress={onPress}
            onLongPress={onLongPress}
            style={[styles.tabItem, isFocused && styles.tabItemActive]}
          >
            {renderIcon()}
          </Pressable>
        );
      })}
    </View>
  );
}
