import * as React from "react";
import colors from "@theme/colors";
import Svg, { Path } from "react-native-svg";
import type { IconProp } from "@interfaces/components";

export default function ArrowDown({ fill = colors["dark-100"], size = 24 }: IconProp) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M16 20.41C14.6801 20.4257 13.4076 19.9189 12.46 19L6.80998 13.29C6.64615 13.0987 6.56054 12.8526 6.57026 12.601C6.57999 12.3493 6.68432 12.1105 6.86241 11.9325C7.04051 11.7544 7.27925 11.65 7.53092 11.6403C7.7826 11.6306 8.02867 11.7162 8.21998 11.88L13.88 17.54C14.4523 18.083 15.2111 18.3857 16 18.3857C16.7889 18.3857 17.5477 18.083 18.12 17.54L23.78 11.88C23.9713 11.7162 24.2174 11.6306 24.469 11.6403C24.7207 11.65 24.9594 11.7544 25.1375 11.9325C25.3156 12.1105 25.42 12.3493 25.4297 12.601C25.4394 12.8526 25.3538 13.0987 25.19 13.29L19.54 19C18.5923 19.9189 17.3198 20.4257 16 20.41Z"
        fill={fill}
      />
    </Svg>
  );
}
