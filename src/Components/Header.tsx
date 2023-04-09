import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../Style/money-bill-trend-up-solid.svg";
import { SearchInput } from "./Search";
const Div = styled.header`
  grid-area: header;
  background-color: white;
  border-radius: 20px 20px 0 0;
  padding: 30px 80px;
  display: flex;
  flex-direction: row;
`;

const Header = () => {
  return (
    <Div>
      <Link to="/">
        <Icon width="40" fill="blue"></Icon>
      </Link>
      <SearchInput />
    </Div>
  );
};

export default Header;
