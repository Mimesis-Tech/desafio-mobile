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
