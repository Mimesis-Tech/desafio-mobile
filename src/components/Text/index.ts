import styled from "styled-components/native";

import { TextProps } from "../../types/text";

export const Text = styled.Text<TextProps>`
	font-family: ${({ font }: { font: TextProps }) =>
		font ? `${font}` : "I400"};
	color: ${({ color }: { color: TextProps }) => color || "#000"};
	font-size: ${({ size }: { size: TextProps }) =>
		size ? `${size}px` : "16px"};
	text-align: ${({ textAlign }: { textAlign: TextProps }) =>
		textAlign ? textAlign : "auto"};
	opacity: ${({ opacity }: { opacity: TextProps }) => opacity || 1};
	padding: ${({ padding }: { padding: TextProps }) => padding || "0px"};
`;
