import styled from "styled-components";
import data from "../../data/data.json";
import { useState, useEffect } from "react";
import { SearchList } from "../../data/types";
import { useNavigate } from "react-router-dom";

type Props = {
  keyword: string;
  setKeyword: Function;
};
const Div = styled.div`
  background-color: white;
  margin-left: 30px;
  position: relative;
  z-index: 300;
  width: 252px;
  display: block;
  max-height: 490px;
  height: auto;
  overflow: auto;
  border: dotted 2px gray;
`;
const Li = styled.li`
  margin: 5px;
  :hover {
    background-color: #fbffb1;
  }
  list-style: none;
`;
export const Autocomplete = ({ keyword, setKeyword }: Props) => {
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
  );
};
