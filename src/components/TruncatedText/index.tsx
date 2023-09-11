import { useState } from "react";

import { Container, TouchableOpacity } from "./syles";

import { Text } from "../Text";

interface TruncatedTextProps {
	text: string;
	maxChars: number;
	color: string;
	size: number;
	font: string;
	textAlign: string;
}

export const TruncatedText = ({
	text,
	maxChars,
	color,
	size,
	font,
	textAlign,
}: TruncatedTextProps) => {
	const [isExpanded, setIsExpanded] = useState(false);

	const toggleExpand = () => {
		setIsExpanded(!isExpanded);
	};

	return (
		<Container>
			<TouchableOpacity onPress={toggleExpand}>
				<Text color={color} size={size} font={font} textAlign={textAlign}>
					{isExpanded
						? text
						: `${text.slice(0, maxChars)}${isExpanded ? "" : "..."}`}
				</Text>
			</TouchableOpacity>
		</Container>
	);
};
