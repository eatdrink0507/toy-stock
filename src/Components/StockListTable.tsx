// el 받기
import styled from "styled-components";
import { useNavigate } from "react-router-dom";
type List = {
  basDt: string;
  srtnCd: string;
  isinCd: string;
  itmsNm: string;
  mrktCtg: string;
  clpr: string;
  vs: string;
  fltRt: string;
  mkp: string;
  hipr: string;
  lopr: string;
  trqu: string;
  trPrc: string;
  lstgStCnt: string;
  mrktTotAmt: string;
};

type Props = {
  data?: List[];
  index?: number;
};

const Div = styled.div`
  display: grid;
  grid-template-rows: repeat(21, 1fr);
  border: solid 1px #03045e;

  border-radius: 10px;
  padding: 10px;
  margin: 10px auto 10px auto;
`;
const TableDiv = styled.div`
  display: grid;
  border-radius: 5px;

  grid-template-columns: repeat(6, 1fr);
  margin: 5px;
  .stock&: hover {
    background-color: #feff86;
  }
`;

export const StockListTable = ({ data }: Props) => {
  const navigate = useNavigate();
  return (
    <Div>
      <TableDiv>
        <span>이름</span>
        <span>카테고리</span>
        <span>기준일 종가</span>
        <span>거래량</span>
        <span>전일대비</span>
        <span>시가총액</span>
      </TableDiv>
      {data?.map((el, index) => {
        return (
          <TableDiv className="stock" key={index}>
            <span
              onClick={() =>
                navigate(`/detail/${el.srtnCd}`, {
                  state: { code: `${el.srtnCd}` },
                })
              }
            >
              {el.itmsNm}
            </span>

            <span>{el.mrktCtg}</span>
            <span>{el.clpr} </span>
            <span> {el.trqu}</span>
            <span>{el.vs} </span>
            <span>{el.mrktTotAmt}</span>
          </TableDiv>
        );
      })}
    </Div>
  );
};
