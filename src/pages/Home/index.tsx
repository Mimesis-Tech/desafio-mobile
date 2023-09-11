import { Container, Content } from "./styles";

import { Header } from "../../components/Header";

export const Home = ({ navigation }: { navigation: any }) => {
	return (
		<Container>
			<Content>
				<Header />
			</Content>
		</Container>
	);
};
