export const getStatus = (code?: string) => {
  if (code === "00") {
    return null;
  } else if (code === "51") {
    return "관리종목";
  } else if (code === "52") {
    return "투자의견";
  } else if (code === "53") {
    return "투자경고";
  } else if (code === "54") {
    return "투자주의";
  } else if (code === "55") {
    return "신용가능";
  } else if (code === "57") {
    return "증거금 100%";
  } else if (code === "58") {
    return "거래정지";
  } else if (code === "59") {
    return "단기과열";
  }
};
