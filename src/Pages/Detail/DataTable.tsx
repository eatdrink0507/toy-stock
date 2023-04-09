// 22항목
import styled from "styled-components";
import { Data } from "../../data/types";
import { useGetSign } from "../../Hooks/useGetSign";
const Div = styled.div`
  display: grid;
  grid-template-columns: 1fr 1fr;
  grid-template-rows: repeat(10, 1fr);
  > div {
    padding: 5px;
    margin: 3px;
    border-radius: 5px;
    background-color: #daf5ff;
  }
`;
type Props = {
  output?: Data["output"];
};
export const DataTable = ({ output }: Props) => {
  return (
    <Div>
      <div>주식 현재가 {output?.stck_prpr}</div>
      <div>
        전일 대비 {useGetSign(output?.prdy_vrss_sign)} {output?.prdy_vrss}
      </div>
      <div>시가총액 {output?.hts_avls}</div>

      <div>증거금 비율 {output?.marg_rate}</div>

      <div>보증금 비율 {output?.grmn_rate_cls_code} </div>
      <div>자본금 {output?.cpfn}억 </div>
      <div>시가 {output?.stck_oprc} </div>
      <div>고가 {output?.stck_hgpr}</div>
      <div>저가 {output?.stck_lwpr} </div>
      <div>액면가 {output?.stck_fcam}</div>
      <div>외국인 보유율 {output?.hts_frgn_ehrt}%</div>
      <div>누적 거래량(주) {output?.acml_vol}</div>
      <div>누적 거래대금 {output?.acml_tr_pbmn} </div>
      <div>상장주수 {output?.lstn_stcn} </div>
      <div>
        250일 최고가 {output?.d250_hgpr_date} 기준 {output?.d250_hgpr}
      </div>
      <div>
        250일 최저가 {output?.d250_lwpr_date} 기준 {output?.d250_lwpr}
      </div>
      <div>
        52주 최고가 {output?.w52_hgpr_date} 기준 {output?.w52_hgpr}
      </div>
      <div>
        52주 최저가 {output?.w52_lwpr_date} 기준 {output?.w52_lwpr}
      </div>
      <div>EPS {output?.eps}</div>
      <div>BPS {output?.bps}</div>
    </Div>
  );
};
