import type { VertexBriefProps } from "global";

export default isGoBack;

function isGoBack(
  curPath: VertexBriefProps[],
  nextVertex: VertexBriefProps
): boolean {
  const prevVertex = curPath[curPath.length - 2];
  return prevVertex?.id === nextVertex.id && prevVertex?.idx === nextVertex.idx;
}
