import styled from "styled-components";

type BtProps = {
  Category: string;
};

const Button = styled.button`
  width: 80px;
  height: 30px;
  border-radius: 10px;
  background-color: #ff0;
  border: none;
  margin: 10px;
`;

export const CategoryBt = ({ Category }: BtProps) => {
  return <Button>{Category}</Button>;
};
