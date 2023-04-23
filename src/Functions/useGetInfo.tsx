// 주식 정보 불러오기
import axios from "axios";
import { StockInfo } from "../data/types";
import { useEffect, useState } from "react";

function useGetInfo(setIsInfo: Function, code?: string) {
  const [data, setData] = useState<StockInfo>();
  const header = {
    authorization: `Bearer ${process.env.REACT_APP_KIS_AUTH}`,
    appsecret: process.env.REACT_APP_KIS_APPSECRET,
    appkey: process.env.REACT_APP_KIS_APPKEY,
    tr_id: "CTPF1604R",
    custtype: "P",
  };
  useEffect(() => {
    axios
      .get(
        `${process.env.REACT_APP_PROXY_URL}/${process.env.REACT_APP_API_URL}/uapi/domestic-stock/v1/quotations/search-info`,
        {
          headers: header,
          params: {
            PDNO: code,
            PRDT_TYPE_CD: 300,
          },
        }
      )
      .then((res) => {
        setData(res.data);
        setIsInfo(false);
      });
  }, [code]);

  return data;
}

export default useGetInfo;
