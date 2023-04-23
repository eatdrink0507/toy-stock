import styled from "styled-components";
import { Link } from "react-router-dom";
import { ReactComponent as Icon } from "../Style/money-bill-trend-up-solid.svg";
import { SearchInput } from "./Search";
import { useMediaQuery } from "react-responsive";

const Div = styled.header`
  grid-area: header;
  background-color: white;
  border-radius: 20px 20px 0 0;
  padding: 30px 80px;
  display: flex;
  flex-direction: row;
`;

const MobileDiv = styled.header`
  grid-area: header;
  background-color: white;
  border-radius: 20px 20px 0 0;
  padding: 30px;
  display: flex;
  flex-direction: row;
`;

const Header = () => {
  const isPc = useMediaQuery({ minWidth: 500 });
  return (
    <>
      {isPc ? (
        <Div>
          <Link to="/">
            <Icon width="40" fill="blue"></Icon>
          </Link>
          <SearchInput />
        </Div>
      ) : (
        <MobileDiv>
          <Link to="/">
            <Icon width="35" fill="blue"></Icon>
          </Link>
          <SearchInput />
        </MobileDiv>
      )}
    </>
  );
};

export default Header;
