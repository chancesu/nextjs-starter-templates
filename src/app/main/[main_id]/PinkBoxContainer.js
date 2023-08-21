import styled from "styled-components";

export const PinkBoxContainer = styled.div`
  display: block;
  background : ${props => props.color || 'pink'};
  padding : 10px;
`