# 주식 정보 조회 서비스

## 개요

### 배포 주소 https://darling-custard-f8aaa2.netlify.app

안녕하세요, 프론트엔드 신입 개발자 박인우입니다.

본 서비스는 코드스테이츠 프론트엔드 부트캠프 41기의 수료 프로젝트로 제작했던 스탁벅스의 조회 기능을 Typescript를 이용해 혼자 만들어 본 서비스입니다.

배포는 Netlify 를 이용했습니다.

https://github.com/codestates-seb/seb41_main_032

### 사용 API
https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15094808

https://apiportal.koreainvestment.com/intro

### 사용 스택
<div align=left> 
  <img src="https://img.shields.io/badge/html5-E34F26?style=for-the-badge&logo=html5&logoColor=white"> 
  <img src="https://img.shields.io/badge/css-1572B6?style=for-the-badge&logo=css3&logoColor=white"> 
  <img src="https://img.shields.io/badge/javascript-F7DF1E?style=for-the-badge&logo=javascript&logoColor=black"> 
  <img src="https://img.shields.io/badge/react-61DAFB?style=for-the-badge&logo=react&logoColor=black">
  <img src="https://img.shields.io/badge/react router-512BD4?style=for-the-badge&logo=react router&logoColor=black">
  <img src="https://img.shields.io/badge/Axios-5A29E4?style=for-the-badge&logo=Axios&logoColor=white">
  <img src="https://img.shields.io/badge/styled-components-DB7093?style=for-the-badge&logo=styled-components&logoColor=white">
  <img src="https://img.shields.io/badge/npm-CB3837?style=for-the-badge&logo=npm&logoColor=white">
</div>

### 시연 

1. 조회 기능

![Apr-11-2023 01-00-24](https://user-images.githubusercontent.com/111216062/230941352-8668dc32-57f1-4b5f-abcb-445c5fea6d33.gif)

홈화면에서 공공API인 금융위원회의 주식시세정보 API를 통해 최근의 주식 정보를 불러옵니다.
https://www.data.go.kr/tcs/dss/selectApiDataDetailView.do?publicDataPk=15094808

각 리스트에서 더 자세하게 조회하고 싶은 항목의 이름을 클릭하면 한국투자증권의 API를 통해 최신 정보를 불러옵니다.
(개인 사용이기 때문에 1초 20회 트래픽 제한이 있어 조회에 실패할 경우, 조금 기다려주세요)

2. 검색 기능

![Apr-11-2023 01-01-14](https://user-images.githubusercontent.com/111216062/230941465-97da44f3-7d65-4d01-b886-d7e49a859d05.gif)

주식 정보에 대한 일괄 리스트를 통해 검색합니다.
검색창에 값이 입력되면, 우선 검색어의 첫글자(index 0) 과 일괄 리스트의 name[0]을 비교하여 첫글자만 일치하는 리스트를 변수로 생성합니다.
이렇게 1차 리스트를 만들어 효율을 높입니다.
두번째 글자부터 includes 메소드를 이용해 검색합니다.

검색하다가 마우스가 바깥을 클릭하면 자동 검색어가 사라지고, 다시 검색창을 클릭하면 자동 검색어가 보이도록 했습니다.

<img width="514" alt="스크린샷 2023-04-11 00 50 06" src="https://user-images.githubusercontent.com/111216062/230941907-61cda84f-961e-4fe2-ae07-1bbde9a5196d.png">
