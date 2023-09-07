import { Container, Menu } from "./styles";
import { Text } from "../Text";
import { Wrapper } from "./styles";
import { Logo, Profile } from "./styles";

import { TouchableOpacity } from "../TouchableOpacity";

export const Header = () => {
  return (
    <Container>
      <Logo source={require("../../assets/huddle.png")} />

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
