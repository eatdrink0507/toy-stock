// 주식 최근 30Week 데이터 불러오기
import axios from "axios";
import { Weekly } from "../data/types";
import { useEffect, useState } from "react";

function useGetWeeklyData(setIsLoading: Function, code?: string) {
  const [raw, setRaw] = useState<Weekly>();
  const header = {
    authorization: `Bearer ${process.env.REACT_APP_KIS_AUTH}`,
    appsecret: process.env.REACT_APP_KIS_APPSECRET,
    appkey: process.env.REACT_APP_KIS_APPKEY,
    tr_id: "FHKST01010400",
    custtype: "P",
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_PROXY_URL}/${process.env.REACT_APP_API_URL}/uapi/domestic-stock/v1/quotations/inquire-daily-price`,
        {
          headers: header,
          params: {
            FID_COND_MRKT_DIV_CODE: "J",
            FID_INPUT_ISCD: code,
            FID_PERIOD_DIV_CODE: "W",
            FID_ORG_ADJ_PRC: 0,
          },
        }
      )
      .then((res) => {
        setRaw(res.data);
        setIsLoading(false);
      });
  }, [code]);

  // 이제 data WeekelyCut 형식으로 가공

  // 각 id는 stck_oprc , stck_hgpr, stck_lwpr, stck_clpr
  // x에 날짜 들어가고 y에 값
  // id:s, color:s, data:[] 만들고 => data에 {x: n, y: n} object push 반복,

  return raw;
}

export default useGetWeeklyData;
