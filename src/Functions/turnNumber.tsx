// 1,000 4자리 3으로 나누면 1, 1
// 10,000 5자리 3으로 나누면 1, 2
// 100,000 6자리 3으로 나누면 2, 0
// 1,000,000 7자리 나누면 2, 1
// 52010 = 52 * 1000 + 10
export const turnNumber = (props?: string) => {
  let result = props?.substring(props.length - 3, props.length);
  if (!props) return null;
  else if (Number(props) < 1000) return props;
  else
    for (let i = props.length - 3; i > 0; i = i - 3) {
      result = `${props.substring(i - 3, i)},` + result;
    }
  return result;
};
