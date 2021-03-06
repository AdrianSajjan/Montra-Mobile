import * as React from "react";
import colors from "@theme/colors";
import typography from "@theme/typography";
import { ButtonProps } from "@interfaces/components";
import { Pressable, StyleSheet, Text } from "react-native";
import Animated, { Easing, useAnimatedStyle, useSharedValue, withTiming } from "react-native-reanimated";

const styles = StyleSheet.create({
  button: {
    height: 56,
    borderWidth: 1,
    borderRadius: 16,
    alignItems: "center",
    flexDirection: "row",
    justifyContent: "center",
    borderColor: colors["light-20"],
  },
  text: {
    ...typography["title-3"],
    color: colors["dark-50"],
  },
});

const AnimatedPressable = Animated.createAnimatedComponent(Pressable);

export default function OutlinedButton({ icon: Icon, onPress, title }: ButtonProps) {
  const scale = useSharedValue(1);

  const style = useAnimatedStyle(() => {
    return {
      transform: [{ scale: scale.value }],
    };
  });

  const handlePressIn = () => {
    scale.value = withTiming(0.9, { duration: 100, easing: Easing.ease });
  };

  const handlePressOut = () => {
    scale.value = withTiming(1, { duration: 100, easing: Easing.ease });
  };

  const marginLeft = React.useMemo(() => {
    return Icon ? 12 : 0;
  }, [Icon]);

  return (
    <AnimatedPressable onPressIn={handlePressIn} onPress={onPress} onPressOut={handlePressOut} style={[style, styles.button]}>
      {Icon && <Icon />}
      <Text style={[styles.text, { marginLeft }]}>{title}</Text>
    </AnimatedPressable>
  );
}
