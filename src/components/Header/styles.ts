import styled from "styled-components/native";
import { Theme } from "../../types/theme";

export const Container = styled.View`
	flex-direction: row;
	align-items: center;
	justify-content: space-between;
	background-color: ${({ theme }: { theme: Theme }) => theme.colors.black};
	padding: 24px 16px;
`;

export const Menu = styled.View`
	flex-direction: row;
	gap: 16px;
	align-items: center;
`;

export const Wrapper = styled.View`
	align-items: center;
	flex-direction: row;
	gap: 26px;
`;

export const Logo = styled.Image``;

export const Profile = styled.Image``;

export const TouchableOpacity = styled.TouchableOpacity``;
