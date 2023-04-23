// 주식 현재가 시세 구하기
// 필요 정보
//헤더로 토큰, 앱키, 앱시크릿키, tr_id(고정)
// params로 J랑 종목코드
import axios from "axios";
import { Data } from "../data/types";
import { useEffect, useState } from "react";
function useGetNewPrice(setIsPrice: Function, code?: string) {
  const [data, setData] = useState<Data>();
  const header = {
    authorization: `Bearer ${process.env.REACT_APP_KIS_AUTH}`,
    appsecret: process.env.REACT_APP_KIS_APPSECRET,
    appkey: process.env.REACT_APP_KIS_APPKEY,
    tr_id: "FHKST01010100",
    custtype: "P",
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_PROXY_URL}/${process.env.REACT_APP_API_URL}/uapi/domestic-stock/v1/quotations/inquire-price`,
        {
          params: { FID_COND_MRKT_DIV_CODE: "J", FID_INPUT_ISCD: code },
          headers: header,
        }
      )
      .then((res) => {
        setData(res.data);
        setIsPrice(false);
      });
  }, [code]);

  return data;
}
export default useGetNewPrice;
