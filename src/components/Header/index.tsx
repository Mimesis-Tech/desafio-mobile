import {
	Container,
	Menu,
	Wrapper,
	Logo,
	Profile,
	TouchableOpacity,
} from "./styles";

import { Text } from "../Text";

export const Header = () => {
	return (
		<Container>
			<Logo source={require("../../assets/logo.png")} />

			<Menu>
				<Wrapper>
					<TouchableOpacity>
						<Text color="#fff">Filmes</Text>
					</TouchableOpacity>
					<TouchableOpacity>
						<Text color="#fff">Séries</Text>
					</TouchableOpacity>
				</Wrapper>

				<TouchableOpacity>
					<Profile source={require("../../assets/profile.png")} />
				</TouchableOpacity>
			</Menu>
		</Container>
	);
};
