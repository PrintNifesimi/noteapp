import styled from "styled-components";

export const Title = styled.h2``;
export const Note = styled.p`
  font-family: "Inder", sans-serif;
  line-height: 28px;
  margin-bottom: 15px;
  color: #666;
`;
export const NoteType = styled.p`
  color: ${(props) => (props.color ? props.color : "black")};
  display: inline-block;
`;
