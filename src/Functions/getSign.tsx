export const getSign = (code?: string) => {
  if (code === "1") {
    return "상한";
  } else if (code === "2") return "▲상승";
  else if (code === "3") return "보합";
  else if (code === "4") return "하한";
  else if (code === "5") return "▼하락";
};
