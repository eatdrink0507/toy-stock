import styled from "styled-components";
import { useState } from "react";
import { Autocomplete } from "./autocomplete";

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
export const SearchInput = () => {
  const [focus, setFocus] = useState(true);
  const [keyword, setKeyword] = useState<string>("");
  return (
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
  );
};
