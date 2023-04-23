import axios from "axios";
import { Response } from "../data/types";
import { ReactElement } from "react";
import { useState, useEffect } from "react";
import usePagination from "../Functions/usePagination";

const Home = (): ReactElement => {
  const [isLoading, setIsLoading] = useState(true);
  const [now, setNow] = useState(1);
  const [pageNum, setPageNum] = useState(10);
  const [data, setData] = useState<Response>();
  useEffect(() => {
    setIsLoading(true);

    axios
      .get(`${process.env.REACT_APP_GOV_URL}/getStockPriceInfo`, {
        params: {
          serviceKey: `${process.env.REACT_APP_GOV_KEY}`,
          numOfRows: 20,
          pageNo: now,
          resultType: "json",
        },
      })
      .then((res) => {
        let p = res.data;
        setData(p);
        setIsLoading(false);
      });
  }, [now]);

  return (
    <>
      <h2>주식 리스트</h2>
      <div>
        {usePagination({
          list: data?.response.body.items.item,
          pageNum: pageNum,
          setPageNum,
          setNow,
          now,
          isLoading,
        })}
      </div>
    </>
  );
};
export default Home;
