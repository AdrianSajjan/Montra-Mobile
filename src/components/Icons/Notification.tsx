import React from "react";
import { IconProp } from "@interfaces/components";
import Svg, { Path } from "react-native-svg";

export default function NotificationIcon({ fill, size }: IconProp) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32">
      <Path
        d="M26 21.5C25.8608 22.2171 25.472 22.8616 24.9026 23.3193C24.3333 23.777 23.6203 24.0181 22.89 24H9.11001C8.37977 24.0181 7.66671 23.777 7.09738 23.3193C6.52805 22.8616 6.13927 22.2171 6.00001 21.5C5.89663 20.885 5.98746 20.2531 6.25988 19.6921C6.5323 19.1312 6.97276 18.669 7.52001 18.37C7.66786 18.2883 7.79065 18.1679 7.87522 18.0216C7.95979 17.8754 8.00293 17.7089 8.00001 17.54V14C7.99726 12.4041 8.4719 10.8438 9.3629 9.51978C10.2539 8.19575 11.5206 7.16847 13 6.57C13.004 5.77435 13.3239 5.01287 13.8893 4.45307C14.4547 3.89328 15.2194 3.58102 16.015 3.585C16.8107 3.58898 17.5721 3.90886 18.1319 4.47428C18.6917 5.03971 19.004 5.80435 19 6.6C20.4923 7.25496 21.7605 8.33179 22.6489 9.69803C23.5372 11.0643 24.0068 12.6604 24 14.29V17.54C23.9931 17.7049 24.0302 17.8688 24.1075 18.0146C24.1848 18.1605 24.2996 18.2832 24.44 18.37C24.9946 18.6631 25.4434 19.1227 25.7233 19.6842C26.0031 20.2456 26.0999 20.8807 26 21.5Z"
        fill={fill}
      />
      <Path
        d="M16 28C16.6981 27.9958 17.3829 27.809 17.9863 27.4581C18.5898 27.1072 19.091 26.6046 19.44 26H12.56C12.909 26.6046 13.4102 27.1072 14.0137 27.4581C14.6171 27.809 15.3019 27.9958 16 28Z"
        fill={fill}
      />
    </Svg>
  );
}
