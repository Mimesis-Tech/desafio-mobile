import styled from "styled-components/native";

interface TouchableOpacityProps {
  font?: "R400" | "I400" | "I700";
  color?: string;
  size?: number;
  opacity?: number;
}

export const TouchableOpacity = styled.TouchableOpacity<TouchableOpacityProps>`
  font-family: ${({ font }) => (font ? `${font}` : "I400")};
  color: ${({ color }) => color || "#000"};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  opacity: ${({ opacity }) => opacity || 1};
`;
