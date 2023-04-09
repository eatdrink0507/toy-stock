import styled from "styled-components";

const Button = styled.button`
  background: ${(props) => props.color};
  width: 30px;
  height: 30px;
  border: 1px solid #03045e;
  border-radius: 5px;
  color: #03045e;
  margin: 10px 5px;
  :hover {
    background: #c0dbea;
  }
`;

type ButtonProps = {
  children?: React.ReactNode;
  onClick?: any;
  bgcolor?: string;
  num: number | string;
};

export const PageButton = ({ num, bgcolor, onClick }: ButtonProps) => {
  return (
    <Button color={bgcolor} onClick={onClick}>
      {num}
    </Button>
  );
};
