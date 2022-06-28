import React from "react";
import { IconProps } from "@interfaces/components";
import Svg, { Path } from "react-native-svg";

interface TransactionIconProps extends IconProps {
  colored?: boolean;
}

export default function TransactionIcon({ fill, size, colored }: TransactionIconProps) {
  return (
    <Svg width={size} height={size} viewBox="0 0 32 32" fill="none">
      <Path
        d="M20.13 17.93V18.93C20.13 19.5866 20.0007 20.2368 19.7494 20.8434C19.4981 21.45 19.1298 22.0012 18.6655 22.4655C18.2012 22.9298 17.65 23.2981 17.0434 23.5494C16.4368 23.8007 15.7866 23.93 15.13 23.93H11.87C11.8546 24.4769 11.6899 25.0091 11.3938 25.4692C11.0977 25.9292 10.6814 26.2995 10.19 26.54C9.78016 26.7448 9.32815 26.8509 8.87 26.85C8.19227 26.854 7.53315 26.6284 7 26.21L3.29 23.3C2.92867 23.0196 2.63624 22.6602 2.43507 22.2495C2.2339 21.8387 2.12932 21.3874 2.12932 20.93C2.12932 20.4726 2.2339 20.0213 2.43507 19.6105C2.63624 19.1998 2.92867 18.8404 3.29 18.56L7 15.65C7.447 15.2933 7.98665 15.0717 8.55538 15.0115C9.1241 14.9512 9.69819 15.0548 10.21 15.31C10.8915 15.636 11.4164 16.2184 11.67 16.93H19.1C19.2338 16.926 19.3671 16.9489 19.4919 16.9973C19.6167 17.0458 19.7305 17.1188 19.8266 17.2121C19.9226 17.3053 19.999 17.4169 20.0511 17.5403C20.1032 17.6636 20.1301 17.7961 20.13 17.93Z"
        fill={colored ? "#5233FF" : fill}
      />
      <Path
        d="M29.87 11.07C29.8701 11.5273 29.7656 11.9786 29.5646 12.3894C29.3635 12.8002 29.0712 13.1595 28.71 13.44L25 16.35C24.4594 16.7701 23.7946 16.9987 23.11 17C22.6519 17.0009 22.1998 16.8948 21.79 16.69C21.1085 16.364 20.5836 15.7817 20.33 15.07H12.87C12.6048 15.07 12.3504 14.9647 12.1629 14.7771C11.9754 14.5896 11.87 14.3352 11.87 14.07V13.07C11.87 11.7439 12.3968 10.4722 13.3345 9.53448C14.2722 8.5968 15.5439 8.07001 16.87 8.07001H20.13C20.1422 7.51096 20.3104 6.96644 20.6156 6.4979C20.9208 6.02935 21.3508 5.65543 21.8573 5.41834C22.3637 5.18124 22.9263 5.0904 23.4816 5.15608C24.0369 5.22175 24.5629 5.44132 25 5.79001L28.71 8.70001C29.0712 8.98051 29.3635 9.33987 29.5646 9.75063C29.7656 10.1614 29.8701 10.6127 29.87 11.07Z"
        fill={colored ? "#FF64C8" : fill}
      />
    </Svg>
  );
}
