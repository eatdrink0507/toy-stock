import styled from "styled-components";
import data from "../../data/data.json";
import { useState, useEffect } from "react";
import { SearchList } from "../../data/types";
import { useNavigate } from "react-router-dom";
import { useMediaQuery } from "react-responsive";

type Props = {
  keyword: string;
  setKeyword: Function;
};
const Div = styled.div`
  background-color: white;
  margin-left: 30px;
  margin-top: 50px;
  position: fixed;
  z-index: 300;
  width: 252px;
  display: block;
  max-height: 490px;
  height: auto;
  overflow: auto;
  border: dotted 2px gray;
`;
const MobileDiv = styled.div`
  background-color: white;
  margin: 44px auto auto auto;
  position: fixed;
  z-index: 300;
  width: 49%;
  display: block;
  max-height: 490px;
  height: auto;
  overflow: auto;
  border: dotted 2px gray;
`;
const Li = styled.li`
  z-index: 300;
  margin: 5px;
  :hover {
    background-color: #fbffb1;
  }
  list-style: none;
`;
export const Autocomplete = ({ keyword, setKeyword }: Props) => {
  const isPc = useMediaQuery({ minWidth: 500 });
  const navigate = useNavigate();
  const [sort, setSort] = useState<SearchList[]>();
  const list: SearchList[] = data;
  useEffect(() => {
    if (!keyword) {
      setSort([]);
      return;
    }
    const similar = list?.filter((value: SearchList) =>
      value.itmsNm[0].includes(keyword[0].toUpperCase())
    );

    setSort(
      similar?.filter((value: SearchList) =>
        value.itmsNm.includes(keyword.toUpperCase())
      )
    );
  }, [keyword]);

  return (
    <>
      {isPc ? (
        <Div>
          {sort?.map((el) => (
            <Li
              key={el.srtnCd}
              onClick={() => {
                navigate(`/detail/${el.srtnCd}`, {
                  state: { code: `${el.srtnCd}` },
                });
                setKeyword("");
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              {el.itmsNm}
            </Li>
          ))}
        </Div>
      ) : (
        <MobileDiv>
          {sort?.map((el) => (
            <Li
              key={el.srtnCd}
              onClick={() => {
                navigate(`/detail/${el.srtnCd}`, {
                  state: { code: `${el.srtnCd}` },
                });
                setKeyword("");
              }}
              onMouseDown={(e) => e.preventDefault()}
            >
              {el.itmsNm}
            </Li>
          ))}
        </MobileDiv>
      )}
    </>
  );
};
