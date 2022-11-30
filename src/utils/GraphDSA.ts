import type { Vertex, VertexId, Position, Edge } from "global";

class GraphDSA {
  /**
   * constructor階段建立
   */
  #verticesMap: { [key: VertexId]: Vertex } = {};
  /**
   * constructor階段建立
   */
  #adjacencyLists: { [key: VertexId]: VertexId[] } = {};
  #paths: VertexId[][] = [];
  #path: VertexId[] = [];
  /**
   * 用來篩選重複的結尾，優化演算法效能
   */
  #ends: VertexId[] = [];
  /**
   * 用此來渲染UI，N步所能到達的vertex
   */
  #endPositions: Position[] = [];
  #traversedQueues: { vertexId: VertexId; prevVertexId: VertexId }[][] = [];
  #untraversedQueues: VertexId[][] = [];
  /**
   * 從`adjacencyLists`取出來的(會assign新的陣列)
   *
   * 會先經過篩選，才丟進`untraversedQueues`
   */
  #adjacentVertexIds: VertexId[] = [];
  #nextVertexId: VertexId | undefined = undefined;
  #startVertexId: VertexId = "";
  #stepCount = 0;

  constructor(graph: { edges: Edge[]; vertices: Vertex[] }) {
    this.#validateGraph(graph);
    this.#buildAdjacencyLists(graph.vertices);
  }
  #validateGraph(graph: { edges: Edge[]; vertices: Vertex[] }) {
    const { edges, vertices } = graph;

    for (const vertex of vertices) {
      if (vertex.top) {
        const connectedVertex = vertices.find(
          (tempVertex) => tempVertex.id === vertex.top
        );
        if (!connectedVertex) throw new Error(`${vertex.id} top`);
      }
      if (vertex.bottom) {
        const connectedVertex = vertices.find(
          (tempVertex) => tempVertex.id === vertex.bottom
        );
        if (!connectedVertex) throw new Error(`${vertex.id} bottom`);
      }
      if (vertex.left) {
        const connectedVertex = vertices.find(
          (tempVertex) => tempVertex.id === vertex.left
        );
        if (!connectedVertex) throw new Error(`${vertex.id} left`);
      }
      if (vertex.right) {
        const connectedVertex = vertices.find(
          (tempVertex) => tempVertex.id === vertex.right
        );
        if (!connectedVertex) throw new Error(`${vertex.id} right`);
      }
      for (const edgeId of vertex.edges) {
        const edge = edges.find((tempEdge) => tempEdge.id === edgeId);
        if (!edge) throw new Error(`${vertex.id} edge ${edgeId}`);
      }
    }
  }
  #buildAdjacencyLists(vertices: Vertex[]): void {
    for (const vertex of vertices) {
      this.#adjacencyLists[vertex.id] = [];
      this.#verticesMap[vertex.id] = vertex;
      if (vertex.top) this.#adjacencyLists[vertex.id].push(vertex.top);
      if (vertex.bottom) this.#adjacencyLists[vertex.id].push(vertex.bottom);
      if (vertex.left) this.#adjacencyLists[vertex.id].push(vertex.left);
      if (vertex.right) this.#adjacencyLists[vertex.id].push(vertex.right);
    }
  }
  /**
   * 陣列全部assign新的，確保舊的計算結果不會被重置
   */
  #initPrivateVariables(): void {
    this.#paths = [];
    this.#path = [];
    this.#ends = [];
    this.#endPositions = [];
    this.#adjacentVertexIds = [];
    this.#nextVertexId = undefined;
    for (let i = 0; i <= this.#stepCount; i++) {
      this.#traversedQueues[i] = [];
      this.#untraversedQueues[i] = [];
    }
    // 將起點放入，後續traversal才能正常啟動
    this.#untraversedQueues[0].push(this.#startVertexId);
  }
  // eslint-disable-next-line
  getAllPaths(startVertexId: VertexId, stepCount: number) {
    if (this.#stepCount < 0) return this.#getResult();
    this.#startVertexId = startVertexId;
    this.#stepCount = stepCount;
    this.#initPrivateVariables();
    this.#traversal();
    return this.#getResult();
  }
  /**
   * 呼叫此method之前
   *
   * 會先計算目前使用者所在位置，30步能到達的所有組合
   *
   * 接下來只要從`traversedQueues`去尋找，就可以找到最短距離
   */
  calMinDistanceTo(endVertexId: VertexId): number {
    return this.#traversedQueues.findIndex((traversedQueue) =>
      traversedQueue.find(({ vertexId }) => vertexId === endVertexId)
    );
  }
  // eslint-disable-next-line
  #getResult() {
    return {
      paths: this.#paths,
      traversedQueues: this.#traversedQueues,
      untraversedQueues: this.#untraversedQueues,
      ends: this.#ends,
      endPositions: this.#endPositions,
    };
  }
  #addResultAndGoBack(): void {
    const endVertexId = this.#path[this.#path.length - 1];
    this.#paths.push([...this.#path]);
    this.#ends.push(endVertexId);
    this.#endPositions.push(this.#verticesMap[endVertexId].position);
    this.#path.pop();
  }
  /**
   * 1. IsGoBackward：下一步跟上一步不得相同
   *
   * 2. IsTraversed：上一步跟這一步不得相同
   *
   * 3. IsDuplicateEnd：結尾不得相同(要到倒數第二步才知道)
   */
  #addVertexIdToUntraversedQueues(filters: { duplicateEnd: boolean }): void {
    const { duplicateEnd } = filters;
    if (!this.#adjacentVertexIds || this.#adjacentVertexIds.length === 0) {
      console.log(this.#nextVertexId);
      console.log(this.#adjacentVertexIds);
      throw new Error(`adjacencyLists有錯`);
    }
    for (const adjacentVertexId of this.#adjacentVertexIds) {
      const IsDuplicateEnd = duplicateEnd
        ? this.#ends.includes(adjacentVertexId)
        : false;
      const IsGoBackward =
        adjacentVertexId == this.#path[this.#path.length - 2];
      const IsTraversed = this.#IsTraversed(adjacentVertexId);
      if (!IsDuplicateEnd && !IsGoBackward && !IsTraversed) {
        this.#untraversedQueues[this.#path.length].push(adjacentVertexId);
      }
    }
  }
  #IsTraversed(adjacentVertexId: VertexId): boolean {
    const traversedQueue = this.#traversedQueues[this.#path.length];
    const curLastVertex = this.#path[this.#path.length - 1];
    return Boolean(
      traversedQueue.find(
        ({ vertexId, prevVertexId }) =>
          adjacentVertexId === vertexId && curLastVertex === prevVertexId
      )
    );
  }
  #addVertexToTraversedQueues(): void {
    const vertexIdToBeAdded = this.#path[this.#path.length - 1];
    const prevVertexIdToBeAdded = this.#path[this.#path.length - 2];
    const traversedQueue = this.#traversedQueues[this.#path.length - 1];
    const duplicateSubPath = traversedQueue.find(
      (traversedSubPath) =>
        traversedSubPath.vertexId === vertexIdToBeAdded &&
        traversedSubPath.prevVertexId === prevVertexIdToBeAdded
    );
    if (duplicateSubPath) return console.error("why");
    traversedQueue.push({
      vertexId: vertexIdToBeAdded,
      prevVertexId: prevVertexIdToBeAdded,
    });
  }
  #traversal(): void {
    // eslint-disable-next-line
    while (true) {
      this.#nextVertexId = this.#untraversedQueues[this.#path.length].shift();

      // go back until untravered queue is not empty
      while (
        !this.#nextVertexId &&
        this.#path.length !== 0 &&
        this.#untraversedQueues[this.#path.length].length === 0
      ) {
        this.#path.pop();
        this.#nextVertexId = this.#untraversedQueues[this.#path.length].shift();
      }
      if (!this.#nextVertexId && this.#path.length === 0) break;
      if (this.#nextVertexId) {
        // start to traverse
        this.#adjacentVertexIds = [...this.#adjacencyLists[this.#nextVertexId]];
        this.#path.push(this.#nextVertexId);
        this.#addVertexToTraversedQueues();
        const IsReachEnd = this.#path.length === this.#stepCount + 1;
        const IsPenultimate = this.#path.length === this.#stepCount;
        if (IsReachEnd) this.#addResultAndGoBack();
        else if (IsPenultimate)
          this.#addVertexIdToUntraversedQueues({ duplicateEnd: true });
        else this.#addVertexIdToUntraversedQueues({ duplicateEnd: false });
        this.#nextVertexId = undefined;
      }
    }
  }
}

export default GraphDSA;
// const a: { [key: number]: string } = [''];
