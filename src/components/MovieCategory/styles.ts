import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #2d2a2a;
`;

export const FlatList = styled.FlatList`
  padding: 12px 0 0 20px;
`;

export const MovieItem = styled.View`
  flex-direction: "row";
  align-items: "center";
  margin: 0 18px 0 0;
`;

export const Poster = styled.Image`
  width: 122px;
  height: 175px;
  border-radius: 4px;
`;
