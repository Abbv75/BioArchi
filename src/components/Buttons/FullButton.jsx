import { green } from "@mui/material/colors";
import styled from "styled-components";

export default function FullButton({ title, action, border }) {
  return (
    <Wrapper
      className="animate pointer radius8"
      onClick={action ? () => action() : null}
      border={border}
    >
      {title}
    </Wrapper>
  );
}

const Wrapper = styled.button`
  border: 1px solid ${(props) => (props.border ? "#707070" : green[600])};
  background-color: ${(props) => (props.border ? "transparent" : green[600])};
  width: 100%;
  padding: 15px;
  outline: none;
  color: ${(props) => (props.border ? "#707070" : "#fff")};
  :hover {
    background-color: ${(props) => (props.border ? "transparent" : green[800])};
    border: 1px solid ${green[800]};
    color: ${(props) => (props.border ? green[600] : "#fff")};
  }
`;

