import styled from "styled-components";

const Div = styled.footer`
  grid-area: footer;
  border-radius: 0 0 20px 20px;
  background-color: white;
  text-align: center;
  font-size: 0.7em;
`;

const Footer = () => {
  return (
    <Div>
      이 서비스는 한국투자증권과 금융위원회의 API 데이터를 이용하고 있습니다.
    </Div>
  );
};

export default Footer;
