import styled from "styled-components";
import { useState } from "react";
import { Autocomplete } from "./autocomplete";
import { useMediaQuery } from "react-responsive";
const Div = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: 40px;
`;
const Input = styled.input`
  width: 200px;
  height: 20px;
  border: 2px solid blue;
  padding: 10px 25px;
  margin: auto 30px auto 30px;
`;

const MobileDiv = styled.div`
  display: flex;
  flex-direction: column;
  position: absolute;
  margin-left: 20%;
  width: 50%;
`;

const MobileInput = styled.input`
  height: 20px;
  border: 2px solid blue;
  padding: 10px 25px;
`;
export const SearchInput = () => {
  const isPc = useMediaQuery({ minWidth: 500 });
  const [focus, setFocus] = useState(true);
  const [keyword, setKeyword] = useState<string>("");
  return (
    <>
      {isPc ? (
        <Div
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
        >
          <Input value={keyword} onChange={(e) => setKeyword(e.target.value)} />
          {keyword.length && focus ? (
            <Autocomplete setKeyword={setKeyword} keyword={keyword} />
          ) : null}
        </Div>
      ) : (
        <MobileDiv
          onFocus={() => {
            setFocus(true);
          }}
          onBlur={() => {
            setFocus(false);
          }}
        >
          <MobileInput
            value={keyword}
            onChange={(e) => setKeyword(e.target.value)}
          />
          {keyword.length && focus ? (
            <Autocomplete setKeyword={setKeyword} keyword={keyword} />
          ) : null}
        </MobileDiv>
      )}
    </>
  );
};
