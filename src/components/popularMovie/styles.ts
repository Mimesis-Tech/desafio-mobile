import styled from "styled-components/native";

export const Container = styled.View`
  background-color: #2d2a2a;
`;

export const PlayImage = styled.Image`
  position: absolute;
  z-index: 1000;
  align-self: center;
  top: 50;
`;

export const MovieCover = styled.Image`
  max-width: 100%;
  height: 192px;
`;

export const MovieContent = styled.View`
  padding: 8px 30px 0px;
`;

export const MovieDescription = styled.View`
  margin-top: 1px;
  gap: 4px;
`;

export const MovieDetails = styled.View`
  flex-direction: row;
  align-items: center;
  gap: 16px;
`;
