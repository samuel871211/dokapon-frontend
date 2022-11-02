export default transferNumberToArray;

function transferNumberToArray(params: {
  /**
   * The number you want to transfer to array
   */
  num: number;
  /**
   * the output array len
   */
  arrLen: number;
  /**
   * how would you want to fill empty indexes with
   */
  fillEmpty: string;
}) {
  const { num, arrLen, fillEmpty } = params;
  const result = String(num).split("");
  const initResultLen = result.length;
  for (let i = 0; i < arrLen - initResultLen; i++) {
    result.unshift(fillEmpty);
  }
  return result;
}
