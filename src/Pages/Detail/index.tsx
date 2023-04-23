import { useLocation } from "react-router-dom";
import styled from "styled-components";
import { useState, useEffect } from "react";
import useGetNewPrice from "../../Functions/useGetNewPrice";
import useGetInfo from "../../Functions/useGetInfo";
import { getStatus } from "../../Functions/getStatus";

import { DataTable } from "./DataTable";
import { WeeklyTable } from "./WeeklyTable";
import { Loader } from "../../Style/Loader";

const Div = styled.div`
  display: grid;
  grid-template-rows: 1fr 1.2fr;
  padding: 10px;
`;

const FirstDiv = styled.div`
  display: flex;
  flex-direction: column;

  > .Information {
    display: flex;
    flex-direction: column;
    padding: 10px;
    margin: 0 auto 30px 0;
    > h1 {
      margin: 0;
    }
  }
`;

export const Detail = () => {
  const location = useLocation();
  const state = location.state as { code: string };
  const code = state.code;

  const [isInfo, setIsInfo] = useState<boolean>(true);
  const [isPrice, setIsPrice] = useState<boolean>(true);

  const current = useGetNewPrice(setIsPrice, code)?.output;

  const info = useGetInfo(setIsInfo, code)?.output;
  useEffect(() => {
    setIsInfo(true);
    setIsPrice(true);
  }, [code]);
  return (
    <>
      {isInfo && isPrice ? (
        <Loader />
      ) : (
        <Div>
          <FirstDiv>
            <div className="Information">
              <h1>{info?.prdt_name}</h1>
              <h3>{info?.prdt_eng_name}</h3>
              <span>{info?.shtn_pdno}</span>
              <span>{info?.ivst_prdt_type_cd_name}</span>
              <div>시장 {current?.rprs_mrkt_kor_name}</div>
              <div>
                종목 상태 {getStatus(current?.iscd_stat_cls_code)}(상태 코드
                {current?.iscd_stat_cls_code})
              </div>
              <div>업종 {current?.bstp_kor_isnm}</div>
            </div>
            <div className="now">
              <h4>본 데이터는 실시간으로 반영됩니다</h4>
              <DataTable output={current}></DataTable>
            </div>
          </FirstDiv>

          <WeeklyTable code={code} />
        </Div>
      )}
    </>
  );
};
