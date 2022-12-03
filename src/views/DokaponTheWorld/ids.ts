/**
 * parent component 會需要透過`document.getElementById`來取得child component的DOM節點
 *
 * 透過此id mapping，確保不會因為不小心改到id而導致錯誤
 */
const ids = {
  graphSVG: "graphSVG",
  cellsGroup: "cellsGroup",
  miniMapCurArea: "miniMapCurArea",
};

export default ids;
