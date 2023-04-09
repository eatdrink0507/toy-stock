import styled from "styled-components";
import { CategoryBt } from "../Style/CategoryBt";
const Aside = styled.aside`
  grid-area: side;
  display: flex;
  flex-direction: column;
`;

const Sidebar = () => {
  return (
    <Aside>
      <CategoryBt Category="Home" />
      <CategoryBt Category="MyPage" />
    </Aside>
  );
};
export default Sidebar;
