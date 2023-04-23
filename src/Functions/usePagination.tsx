// data, page당 출력수, page수 받기
import { useState, useEffect } from "react";
import { Loader } from "../Style/Loader";
import { PageButton } from "../Style/PageButton";
import { StockListTable } from "../Components/StockListTable";
interface Props {
  list?: [List];

  pageNum: number;
  setPageNum: Function;
  setNow: Function;
  now: number;
  isLoading: boolean;
}

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

// list : 출력할 데이터
// pageNum, setPageNum : 만들어야하는 페이지 (1~10, 11~20, ...)
// now, setNow : 현재 보고 있는 페이지
// isLoading: 로딩여부

function usePagination({
  list,
  pageNum,
  setPageNum,
  setNow,
  now,
  isLoading,
}: Props) {
  const [pageList, setPageList] = useState([1, 2, 3, 4, 5, 6, 7, 8, 9, 10]);
  let arr: number[] = [];
  useEffect(() => {
    arr.length = 0;
    if (pageNum === 10) {
      for (let i = 1; i <= pageNum; i++) {
        arr.push(i);
        setPageList(arr);
      }
    } else {
      for (let i = pageNum - 9; i <= pageNum; i++) {
        arr.push(i);
        setPageList(arr);
      }
    }
  }, [pageNum]);

  return (
    <>
      {isLoading ? (
        <Loader />
      ) : (
        <>
          <span>기준일 {list ? list[0].basDt : null}</span>
          <StockListTable data={list} />
          <div>
            <PageButton
              onClick={() => {
                setNow(now === 1 ? 1 : now - 1);
                if (now % 10 === 1) setPageNum(pageNum - 10);
              }}
              bgcolor="white"
              num={"<"}
            ></PageButton>
            {pageList.map((index) => {
              return (
                <PageButton
                  key={index}
                  num={index}
                  bgcolor={index === now ? "#C0DBEA" : "white"}
                  onClick={() => {
                    setNow(index);
                  }}
                ></PageButton>
              );
            })}
            <PageButton
              onClick={() => {
                setNow(now + 1);
                if (now % 10 === 0) setPageNum(pageNum + 10);
              }}
              bgcolor="white"
              num={">"}
            ></PageButton>
          </div>
        </>
      )}
    </>
  );
}

export default usePagination;
