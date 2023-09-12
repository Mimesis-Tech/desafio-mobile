import styled from "styled-components/native";

import { statusBarHeight } from "../../util/getStatusBarHeight";
import { Theme } from "../../types/theme";

export const Container = styled.SafeAreaView`
	flex: 1;
	padding-top: ${statusBarHeight};
`;

export const Content = styled.ScrollView`
	flex: 1;
	background-color: ${({ theme }: { theme: Theme }) => theme.colors.bg};
`;

export const TouchableOpacity = styled.TouchableOpacity`
	flex: 1;
	align-items: center;
	justify-content: center;
`;

export const MovieDetails = styled.View`
	padding-bottom: 32px;
`;

export const PlayImage = styled.Image`
	position: absolute;
	z-index: 100;
`;

export const MovieCover = styled.Image`
	min-width: 100%;
	height: 192px;
`;

export const MovieContent = styled.View`
	padding: 8px 30px 0px;
`;

export const MovieDescription = styled.View`
	margin-top: 1px;
	gap: 4px;
`;

export const MovieInfo = styled.View`
	flex-direction: row;
	align-items: center;
	gap: 16px;
`;
