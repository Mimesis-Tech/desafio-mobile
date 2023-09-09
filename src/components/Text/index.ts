import styled from "styled-components/native";

interface TextProps {
  font?: "R400" | "I400" | "I700";
  color?: string;
  size?: number;
  opacity?: number;
  textAlign?: "auto" | "center" | "justify" | "left" | "right";
}

export const Text = styled.Text<TextProps>`
  font-family: ${({ font }) => (font ? `${font}` : "I400")};
  color: ${({ color }) => color || "#000"};
  font-size: ${({ size }) => (size ? `${size}px` : "16px")};
  text-align: ${({ textAlign }) => (textAlign ? textAlign : "auto")};
  opacity: ${({ opacity }) => opacity || 1};
`;
