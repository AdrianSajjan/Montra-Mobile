import React from "react";
import { IconProps } from "@interfaces/components";
import Svg, { Path } from "react-native-svg";

export default function PieChartIcon({ fill, size }: IconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path d="M28 15H17V4C19.8412 4.22837 22.5083 5.46063 24.5239 7.47614C26.5394 9.49166 27.7716 12.1588 28 15Z" fill={fill} />
      <Path
        d="M28 17C27.801 19.2756 26.9565 21.4471 25.566 23.2594C24.1754 25.0716 22.2965 26.4493 20.15 27.2306C18.0035 28.0119 15.6786 28.1643 13.4484 27.6699C11.2183 27.1755 9.17559 26.0549 7.56036 24.4396C5.94513 22.8244 4.82448 20.7817 4.33008 18.5516C3.83568 16.3214 3.98808 13.9965 4.76937 11.85C5.55066 9.7035 6.92838 7.82457 8.74064 6.43401C10.5529 5.04346 12.7244 4.19905 15 4V16C15 16.2652 15.1054 16.5196 15.2929 16.7071C15.4804 16.8946 15.7348 17 16 17H28Z"
        fill={fill}
      />
    </Svg>
  );
}
