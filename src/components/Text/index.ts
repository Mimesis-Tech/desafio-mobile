import styled from "styled-components/native";

interface TextProps {
  font?: "R400" | "I400" | "I700";
  color?: string;
  size?: number;
  opacity?: number;
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ font }) => (font ? `${font}` : "I400")};
  color: ${({ color }) => color || "#000"};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  opacity: ${({ opacity }) => opacity || 1};
`;
