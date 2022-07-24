import { Vertex, Edge } from "global";

const europeCaveCanteen: { vertices: Vertex[]; edges: Edge[] } = {
  vertices: [
    {
      area: "EuropeCaveCanteen",
      position: {
        x: -80,
        y: -40,
      },
      name: "BattleField",
      id: "d4387d16-9edf-405a-a662-2deaf77d0e28",
      edges: [
        "b40aec4e-519c-4ebc-be58-7a71ea9e8c1c",
        "29ae6b73-92ee-439a-9f26-a9ecbe4855c1",
      ],
      right: "34aeb47f-17e6-46d5-8d3f-9f333fd94b2a",
      top: "8f1fea03-7388-4d4e-b3f1-0d67c9fdebcd",
    },
    {
      id: "34aeb47f-17e6-46d5-8d3f-9f333fd94b2a",

      area: "EuropeCaveCanteen",
      name: "MagicField",
      position: {
        x: 460,
        y: 0,
      },
      edges: [
        "b40aec4e-519c-4ebc-be58-7a71ea9e8c1c",
        "eee470c2-6321-498e-820d-8b9652a089b5",
        "70274519-5bd9-41ba-86a7-3f5a63cb83a2",
      ],
      left: "d4387d16-9edf-405a-a662-2deaf77d0e28",
      right: "04306521-f418-4bb5-907e-f39bcc9dc113",
      bottom: "a324780e-fbd9-4e88-a7ba-bfb1a71920bc",
    },
    {
      id: "04306521-f418-4bb5-907e-f39bcc9dc113",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: 960,
        y: -20,
      },
      edges: [
        "eee470c2-6321-498e-820d-8b9652a089b5",
        "9fdb6157-6306-4494-8bcc-c557da08d3b1",
      ],
      left: "34aeb47f-17e6-46d5-8d3f-9f333fd94b2a",
      top: "415cb62e-4c2a-47b6-a89b-ee9f3184f1b6",
    },
    {
      id: "a324780e-fbd9-4e88-a7ba-bfb1a71920bc",

      area: "EuropeCaveCanteen",
      name: "TreasureField",
      position: {
        x: 420,
        y: 460,
      },
      edges: [
        "70274519-5bd9-41ba-86a7-3f5a63cb83a2",
        "1cd88f66-b248-4d3b-bdb5-d3f632bec0e2",
      ],
      top: "34aeb47f-17e6-46d5-8d3f-9f333fd94b2a",
      bottom: "3c97ab73-eb8a-4d11-9353-791bfdbce401",
    },
    {
      id: "3c97ab73-eb8a-4d11-9353-791bfdbce401",

      area: "EuropeCaveCanteen",
      name: "CaveField",
      position: {
        x: 480,
        y: 940,
      },
      edges: ["1cd88f66-b248-4d3b-bdb5-d3f632bec0e2"],
      top: "a324780e-fbd9-4e88-a7ba-bfb1a71920bc",
    },
    {
      id: "8f1fea03-7388-4d4e-b3f1-0d67c9fdebcd",

      area: "EuropeCaveCanteen",
      name: "TreasureField",
      position: {
        x: -140,
        y: -520,
      },
      edges: [
        "29ae6b73-92ee-439a-9f26-a9ecbe4855c1",
        "1f2a20dd-9e32-4c2d-b27e-f170b263c10e",
        "223bf82f-9a45-4210-919e-782952186d3b",
        "fe6eecd3-7a27-483e-8e01-957a52e0c3da",
      ],
      bottom: "d4387d16-9edf-405a-a662-2deaf77d0e28",
      right: "415cb62e-4c2a-47b6-a89b-ee9f3184f1b6",
      top: "650442b1-1060-4cb0-8446-e6e629895e89",
      left: "c21d7bb9-c23e-4d58-aac7-1c325f37236d",
    },
    {
      id: "415cb62e-4c2a-47b6-a89b-ee9f3184f1b6",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: 1020,
        y: -520,
      },
      edges: [
        "9fdb6157-6306-4494-8bcc-c557da08d3b1",
        "1f2a20dd-9e32-4c2d-b27e-f170b263c10e",
        "a9f81f3c-6f33-4c60-ace9-c05e0db4a33b",
        "b92ffc8f-4662-498f-916e-c1e436bb43cd",
      ],
      bottom: "04306521-f418-4bb5-907e-f39bcc9dc113",
      left: "8f1fea03-7388-4d4e-b3f1-0d67c9fdebcd",
      right: "0c676acb-7847-47b8-950d-18627f01bc88",
      top: "77a0518d-b204-438a-9c43-20aec60ba6ff",
    },
    {
      id: "650442b1-1060-4cb0-8446-e6e629895e89",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: -100,
        y: -960,
      },
      edges: [
        "223bf82f-9a45-4210-919e-782952186d3b",
        "45526b7e-6a54-4649-9f03-861783e7d24e",
      ],
      bottom: "8f1fea03-7388-4d4e-b3f1-0d67c9fdebcd",
      left: "029d2f03-652b-465c-89e6-f7826da31b7a",
    },
    {
      id: "029d2f03-652b-465c-89e6-f7826da31b7a",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: -560,
        y: -1020,
      },
      edges: [
        "45526b7e-6a54-4649-9f03-861783e7d24e",
        "f12b2850-26c6-4cb7-83af-72fbac83309f",
        "4e5022a0-d199-471a-9130-0a850c362b32",
      ],
      right: "650442b1-1060-4cb0-8446-e6e629895e89",
      left: "d5d15fd5-27a8-4870-ada4-4d58cd55214e",
      top: "24dd5986-cf88-45f5-8c18-486b6c299635",
    },
    {
      id: "d5d15fd5-27a8-4870-ada4-4d58cd55214e",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: -1000,
        y: -960,
      },
      edges: [
        "f12b2850-26c6-4cb7-83af-72fbac83309f",
        "a25a4a2b-03be-43d3-ac53-45e9cd63c469",
        "6f84c51d-799b-40ff-8a5f-fc6a3d0bb077",
      ],
      right: "029d2f03-652b-465c-89e6-f7826da31b7a",
      bottom: "c21d7bb9-c23e-4d58-aac7-1c325f37236d",
      top: "a1ac7cf8-ca57-4ea2-a1c1-c5a5bd42d3ef",
    },
    {
      id: "c21d7bb9-c23e-4d58-aac7-1c325f37236d",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: -920,
        y: -520,
      },
      edges: [
        "a25a4a2b-03be-43d3-ac53-45e9cd63c469",
        "fe6eecd3-7a27-483e-8e01-957a52e0c3da",
      ],
      top: "d5d15fd5-27a8-4870-ada4-4d58cd55214e",
      right: "8f1fea03-7388-4d4e-b3f1-0d67c9fdebcd",
    },
    {
      id: "24dd5986-cf88-45f5-8c18-486b6c299635",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: -620,
        y: -1440,
      },
      edges: [
        "4e5022a0-d199-471a-9130-0a850c362b32",
        "a803d16d-3f0a-4da8-9e92-791074697e66",
      ],
      bottom: "029d2f03-652b-465c-89e6-f7826da31b7a",
      right: "07c8175b-34fc-428d-916a-1ddb5818f771",
    },
    {
      id: "07c8175b-34fc-428d-916a-1ddb5818f771",

      area: "EuropeCaveCanteen",
      name: "CollectMoneyField",
      position: {
        x: -120,
        y: -1440,
      },
      edges: ["a803d16d-3f0a-4da8-9e92-791074697e66"],
      left: "24dd5986-cf88-45f5-8c18-486b6c299635",
    },
    {
      id: "0c676acb-7847-47b8-950d-18627f01bc88",

      area: "EuropeCaveCanteen",
      name: "TreasureField",
      position: {
        x: 1980,
        y: -520,
      },
      edges: [
        "a9f81f3c-6f33-4c60-ace9-c05e0db4a33b",
        "f0bf87b1-1dc8-46d9-9246-487f1475c988",
      ],
      left: "415cb62e-4c2a-47b6-a89b-ee9f3184f1b6",
      top: "9ef9227a-bebd-4139-b749-2f2accce65b5",
    },
    {
      id: "77a0518d-b204-438a-9c43-20aec60ba6ff",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: 940,
        y: -960,
      },
      edges: [
        "b92ffc8f-4662-498f-916e-c1e436bb43cd",
        "1d5f85dc-a3d0-459d-a27f-26974e75c620",
      ],
      bottom: "415cb62e-4c2a-47b6-a89b-ee9f3184f1b6",
      right: "2d6d5e70-1474-4cc1-9b91-36f18d02f005",
    },
    {
      id: "2d6d5e70-1474-4cc1-9b91-36f18d02f005",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: 1480,
        y: -1020,
      },
      edges: [
        "1d5f85dc-a3d0-459d-a27f-26974e75c620",
        "1905d11f-9872-48b9-968f-1e45a944a14d",
        "f59e0a9a-844c-4035-a1b5-9ae6add3a266",
      ],
      left: "77a0518d-b204-438a-9c43-20aec60ba6ff",
      right: "9ef9227a-bebd-4139-b749-2f2accce65b5",
      top: "689473aa-16d8-4aab-8188-b96fdebac303",
    },
    {
      id: "9ef9227a-bebd-4139-b749-2f2accce65b5",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: 2040,
        y: -980,
      },
      edges: [
        "1905d11f-9872-48b9-968f-1e45a944a14d",
        "f0bf87b1-1dc8-46d9-9246-487f1475c988",
        "388e8077-5621-4e1f-b93f-781a7c143b28",
      ],
      left: "2d6d5e70-1474-4cc1-9b91-36f18d02f005",
      bottom: "0c676acb-7847-47b8-950d-18627f01bc88",
      top: "364c75ca-1748-4bf8-9ccc-b6495d8ecf94",
    },
    {
      id: "689473aa-16d8-4aab-8188-b96fdebac303",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: 1520,
        y: -1440,
      },
      edges: [
        "f59e0a9a-844c-4035-a1b5-9ae6add3a266",
        "72f0157f-62af-4578-b0a9-9ac9e2d4cdd8",
      ],
      bottom: "2d6d5e70-1474-4cc1-9b91-36f18d02f005",
      left: "612cf2b6-6f64-44d9-92c4-57bf3ad47300",
    },
    {
      id: "612cf2b6-6f64-44d9-92c4-57bf3ad47300",

      area: "EuropeCaveCanteen",
      name: "WhiteTreasureField",
      position: {
        x: 920,
        y: -1480,
      },
      edges: ["72f0157f-62af-4578-b0a9-9ac9e2d4cdd8"],
      right: "689473aa-16d8-4aab-8188-b96fdebac303",
    },
    {
      id: "364c75ca-1748-4bf8-9ccc-b6495d8ecf94",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: 1900,
        y: -1620,
      },
      edges: [
        "388e8077-5621-4e1f-b93f-781a7c143b28",
        "817e8fbd-c299-4b4d-b476-4b141cfe672e",
      ],
      bottom: "9ef9227a-bebd-4139-b749-2f2accce65b5",
      top: "a7cd04e5-2106-4049-9253-947676ee2ebe",
    },
    {
      id: "a7cd04e5-2106-4049-9253-947676ee2ebe",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: 1980,
        y: -2140,
      },
      edges: [
        "817e8fbd-c299-4b4d-b476-4b141cfe672e",
        "b5fa8562-2131-426b-bb13-7c868d95c0ee",
      ],
      bottom: "364c75ca-1748-4bf8-9ccc-b6495d8ecf94",
      left: "0f10ea15-7e7d-45b6-a403-29a9140f9fad",
    },
    {
      id: "0f10ea15-7e7d-45b6-a403-29a9140f9fad",

      area: "EuropeCaveCanteen",
      name: "RedTreasureField",
      position: {
        x: 1480,
        y: -2200,
      },
      edges: [
        "b5fa8562-2131-426b-bb13-7c868d95c0ee",
        "07f5dede-bb7c-49c9-91b0-26ee84b45b50",
      ],
      right: "a7cd04e5-2106-4049-9253-947676ee2ebe",
      left: "45d0eb88-64a3-4466-aec1-24700bd8aac1",
    },
    {
      id: "45d0eb88-64a3-4466-aec1-24700bd8aac1",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: 1000,
        y: -2160,
      },
      edges: [
        "07f5dede-bb7c-49c9-91b0-26ee84b45b50",
        "9b95050b-ad16-42d9-83cf-5dc1842d57d8",
      ],
      right: "0f10ea15-7e7d-45b6-a403-29a9140f9fad",
      bottom: "b07f552f-e8a7-46a5-92a2-4f9038b85f2a",
    },
    {
      id: "b07f552f-e8a7-46a5-92a2-4f9038b85f2a",

      area: "EuropeCaveCanteen",
      name: "KeyTreasureField",
      position: {
        x: 1040,
        y: -1740,
      },
      edges: ["9b95050b-ad16-42d9-83cf-5dc1842d57d8"],
      top: "45d0eb88-64a3-4466-aec1-24700bd8aac1",
    },
    {
      id: "a1ac7cf8-ca57-4ea2-a1c1-c5a5bd42d3ef",

      area: "EuropeCaveCanteen",
      name: "MagicField",
      position: {
        x: -940,
        y: -1620,
      },
      edges: [
        "6f84c51d-799b-40ff-8a5f-fc6a3d0bb077",
        "4115acea-12c3-46c7-9490-7350541f9447",
      ],
      bottom: "d5d15fd5-27a8-4870-ada4-4d58cd55214e",
      top: "7066ae7e-67e1-4d22-b286-f275d7dacd04",
    },
    {
      id: "7066ae7e-67e1-4d22-b286-f275d7dacd04",

      area: "EuropeCaveCanteen",
      name: "GoldTreasureField",
      position: {
        x: -980,
        y: -2100,
      },
      edges: [
        "4115acea-12c3-46c7-9490-7350541f9447",
        "99134dfd-a97f-4056-8b27-14a386fac8c9",
      ],
      bottom: "a1ac7cf8-ca57-4ea2-a1c1-c5a5bd42d3ef",
      right: "60d35dcb-bd00-460d-b8e6-ef9581cf5050",
    },
    {
      id: "60d35dcb-bd00-460d-b8e6-ef9581cf5050",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: -580,
        y: -2200,
      },
      edges: [
        "99134dfd-a97f-4056-8b27-14a386fac8c9",
        "2b365bb1-b691-422c-b986-96d44607e3f5",
      ],
      left: "7066ae7e-67e1-4d22-b286-f275d7dacd04",
      right: "0647787f-9edf-4562-8566-8a4d730d9f59",
    },
    {
      id: "0647787f-9edf-4562-8566-8a4d730d9f59",

      area: "EuropeCaveCanteen",
      name: "BattleField",
      position: {
        x: -140,
        y: -2100,
      },
      edges: [
        "2b365bb1-b691-422c-b986-96d44607e3f5",
        "34417797-775a-49f5-9921-d51df111e8f4",
      ],
      left: "60d35dcb-bd00-460d-b8e6-ef9581cf5050",
      bottom: "9d23449c-2cda-4599-9761-07c539f02995",
    },
    {
      id: "9d23449c-2cda-4599-9761-07c539f02995",

      area: "EuropeCaveCanteen",
      name: "KeyTreasureField",
      position: {
        x: -220,
        y: -1620,
      },
      edges: ["34417797-775a-49f5-9921-d51df111e8f4"],
      top: "0647787f-9edf-4562-8566-8a4d730d9f59",
    },
  ],
  edges: [
    {
      start: {
        x: -80,
        y: -40,
      },
      startId: "d4387d16-9edf-405a-a662-2deaf77d0e28",
      end: {
        x: 460,
        y: 0,
      },
      endId: "34aeb47f-17e6-46d5-8d3f-9f333fd94b2a",
      name: "TwoWayHEdge",
      id: "b40aec4e-519c-4ebc-be58-7a71ea9e8c1c",
    },
    {
      start: {
        x: 460,
        y: 0,
      },
      startId: "34aeb47f-17e6-46d5-8d3f-9f333fd94b2a",
      end: {
        x: 960,
        y: -20,
      },
      endId: "04306521-f418-4bb5-907e-f39bcc9dc113",
      name: "TwoWayHEdge",
      id: "eee470c2-6321-498e-820d-8b9652a089b5",
    },
    {
      start: {
        x: 460,
        y: 0,
      },
      startId: "34aeb47f-17e6-46d5-8d3f-9f333fd94b2a",
      end: {
        x: 420,
        y: 460,
      },
      endId: "a324780e-fbd9-4e88-a7ba-bfb1a71920bc",
      name: "TwoWayVEdge",
      id: "70274519-5bd9-41ba-86a7-3f5a63cb83a2",
    },
    {
      start: {
        x: 420,
        y: 460,
      },
      startId: "a324780e-fbd9-4e88-a7ba-bfb1a71920bc",
      end: {
        x: 480,
        y: 940,
      },
      endId: "3c97ab73-eb8a-4d11-9353-791bfdbce401",
      name: "TwoWayVEdge",
      id: "1cd88f66-b248-4d3b-bdb5-d3f632bec0e2",
    },
    {
      start: {
        x: -80,
        y: -40,
      },
      startId: "d4387d16-9edf-405a-a662-2deaf77d0e28",
      end: {
        x: -140,
        y: -520,
      },
      endId: "8f1fea03-7388-4d4e-b3f1-0d67c9fdebcd",
      name: "TwoWayVEdge",
      id: "29ae6b73-92ee-439a-9f26-a9ecbe4855c1",
    },
    {
      start: {
        x: 960,
        y: -20,
      },
      startId: "04306521-f418-4bb5-907e-f39bcc9dc113",
      end: {
        x: 1020,
        y: -520,
      },
      endId: "415cb62e-4c2a-47b6-a89b-ee9f3184f1b6",
      name: "TwoWayVEdge",
      id: "9fdb6157-6306-4494-8bcc-c557da08d3b1",
    },
    {
      start: {
        x: -140,
        y: -520,
      },
      startId: "8f1fea03-7388-4d4e-b3f1-0d67c9fdebcd",
      end: {
        x: 1020,
        y: -520,
      },
      endId: "415cb62e-4c2a-47b6-a89b-ee9f3184f1b6",
      name: "TwoWayHEdge",
      id: "1f2a20dd-9e32-4c2d-b27e-f170b263c10e",
    },
    {
      start: {
        x: -140,
        y: -520,
      },
      startId: "8f1fea03-7388-4d4e-b3f1-0d67c9fdebcd",
      end: {
        x: -100,
        y: -960,
      },
      endId: "650442b1-1060-4cb0-8446-e6e629895e89",
      name: "TwoWayVEdge",
      id: "223bf82f-9a45-4210-919e-782952186d3b",
    },
    {
      start: {
        x: -100,
        y: -960,
      },
      startId: "650442b1-1060-4cb0-8446-e6e629895e89",
      end: {
        x: -560,
        y: -1020,
      },
      endId: "029d2f03-652b-465c-89e6-f7826da31b7a",
      name: "TwoWayHEdge",
      id: "45526b7e-6a54-4649-9f03-861783e7d24e",
    },
    {
      start: {
        x: -560,
        y: -1020,
      },
      startId: "029d2f03-652b-465c-89e6-f7826da31b7a",
      end: {
        x: -1000,
        y: -960,
      },
      endId: "d5d15fd5-27a8-4870-ada4-4d58cd55214e",
      name: "TwoWayHEdge",
      id: "f12b2850-26c6-4cb7-83af-72fbac83309f",
    },
    {
      start: {
        x: -1000,
        y: -960,
      },
      startId: "d5d15fd5-27a8-4870-ada4-4d58cd55214e",
      end: {
        x: -920,
        y: -520,
      },
      endId: "c21d7bb9-c23e-4d58-aac7-1c325f37236d",
      name: "TwoWayVEdge",
      id: "a25a4a2b-03be-43d3-ac53-45e9cd63c469",
    },
    {
      start: {
        x: -920,
        y: -520,
      },
      startId: "c21d7bb9-c23e-4d58-aac7-1c325f37236d",
      end: {
        x: -140,
        y: -520,
      },
      endId: "8f1fea03-7388-4d4e-b3f1-0d67c9fdebcd",
      name: "TwoWayHEdge",
      id: "fe6eecd3-7a27-483e-8e01-957a52e0c3da",
    },
    {
      start: {
        x: -560,
        y: -1020,
      },
      startId: "029d2f03-652b-465c-89e6-f7826da31b7a",
      end: {
        x: -620,
        y: -1440,
      },
      endId: "24dd5986-cf88-45f5-8c18-486b6c299635",
      name: "TwoWayVEdge",
      id: "4e5022a0-d199-471a-9130-0a850c362b32",
    },
    {
      start: {
        x: -620,
        y: -1440,
      },
      startId: "24dd5986-cf88-45f5-8c18-486b6c299635",
      end: {
        x: -120,
        y: -1440,
      },
      endId: "07c8175b-34fc-428d-916a-1ddb5818f771",
      name: "TwoWayHEdge",
      id: "a803d16d-3f0a-4da8-9e92-791074697e66",
    },
    {
      start: {
        x: 1020,
        y: -520,
      },
      startId: "415cb62e-4c2a-47b6-a89b-ee9f3184f1b6",
      end: {
        x: 1980,
        y: -520,
      },
      endId: "0c676acb-7847-47b8-950d-18627f01bc88",
      name: "TwoWayHEdge",
      id: "a9f81f3c-6f33-4c60-ace9-c05e0db4a33b",
    },
    {
      start: {
        x: 1020,
        y: -520,
      },
      startId: "415cb62e-4c2a-47b6-a89b-ee9f3184f1b6",
      end: {
        x: 940,
        y: -960,
      },
      endId: "77a0518d-b204-438a-9c43-20aec60ba6ff",
      name: "TwoWayVEdge",
      id: "b92ffc8f-4662-498f-916e-c1e436bb43cd",
    },
    {
      start: {
        x: 940,
        y: -960,
      },
      startId: "77a0518d-b204-438a-9c43-20aec60ba6ff",
      end: {
        x: 1480,
        y: -1020,
      },
      endId: "2d6d5e70-1474-4cc1-9b91-36f18d02f005",
      name: "TwoWayHEdge",
      id: "1d5f85dc-a3d0-459d-a27f-26974e75c620",
    },
    {
      start: {
        x: 1480,
        y: -1020,
      },
      startId: "2d6d5e70-1474-4cc1-9b91-36f18d02f005",
      end: {
        x: 2040,
        y: -980,
      },
      endId: "9ef9227a-bebd-4139-b749-2f2accce65b5",
      name: "TwoWayHEdge",
      id: "1905d11f-9872-48b9-968f-1e45a944a14d",
    },
    {
      start: {
        x: 2040,
        y: -980,
      },
      startId: "9ef9227a-bebd-4139-b749-2f2accce65b5",
      end: {
        x: 1980,
        y: -520,
      },
      endId: "0c676acb-7847-47b8-950d-18627f01bc88",
      name: "TwoWayVEdge",
      id: "f0bf87b1-1dc8-46d9-9246-487f1475c988",
    },
    {
      start: {
        x: 1480,
        y: -1020,
      },
      startId: "2d6d5e70-1474-4cc1-9b91-36f18d02f005",
      end: {
        x: 1520,
        y: -1440,
      },
      endId: "689473aa-16d8-4aab-8188-b96fdebac303",
      name: "TwoWayVEdge",
      id: "f59e0a9a-844c-4035-a1b5-9ae6add3a266",
    },
    {
      start: {
        x: 1520,
        y: -1440,
      },
      startId: "689473aa-16d8-4aab-8188-b96fdebac303",
      end: {
        x: 920,
        y: -1480,
      },
      endId: "612cf2b6-6f64-44d9-92c4-57bf3ad47300",
      name: "TwoWayHEdge",
      id: "72f0157f-62af-4578-b0a9-9ac9e2d4cdd8",
    },
    {
      start: {
        x: 2040,
        y: -980,
      },
      startId: "9ef9227a-bebd-4139-b749-2f2accce65b5",
      end: {
        x: 1900,
        y: -1620,
      },
      endId: "364c75ca-1748-4bf8-9ccc-b6495d8ecf94",
      name: "TwoWayVEdge",
      id: "388e8077-5621-4e1f-b93f-781a7c143b28",
    },
    {
      start: {
        x: 1900,
        y: -1620,
      },
      startId: "364c75ca-1748-4bf8-9ccc-b6495d8ecf94",
      end: {
        x: 1980,
        y: -2140,
      },
      endId: "a7cd04e5-2106-4049-9253-947676ee2ebe",
      name: "TwoWayVEdge",
      id: "817e8fbd-c299-4b4d-b476-4b141cfe672e",
    },
    {
      start: {
        x: 1980,
        y: -2140,
      },
      startId: "a7cd04e5-2106-4049-9253-947676ee2ebe",
      end: {
        x: 1480,
        y: -2200,
      },
      endId: "0f10ea15-7e7d-45b6-a403-29a9140f9fad",
      name: "TwoWayHEdge",
      id: "b5fa8562-2131-426b-bb13-7c868d95c0ee",
    },
    {
      start: {
        x: 1480,
        y: -2200,
      },
      startId: "0f10ea15-7e7d-45b6-a403-29a9140f9fad",
      end: {
        x: 1000,
        y: -2160,
      },
      endId: "45d0eb88-64a3-4466-aec1-24700bd8aac1",
      name: "TwoWayHEdge",
      id: "07f5dede-bb7c-49c9-91b0-26ee84b45b50",
    },
    {
      start: {
        x: 1000,
        y: -2160,
      },
      startId: "45d0eb88-64a3-4466-aec1-24700bd8aac1",
      end: {
        x: 1040,
        y: -1740,
      },
      endId: "b07f552f-e8a7-46a5-92a2-4f9038b85f2a",
      name: "TwoWayVEdge",
      id: "9b95050b-ad16-42d9-83cf-5dc1842d57d8",
    },
    {
      start: {
        x: -1000,
        y: -960,
      },
      startId: "d5d15fd5-27a8-4870-ada4-4d58cd55214e",
      end: {
        x: -940,
        y: -1620,
      },
      endId: "a1ac7cf8-ca57-4ea2-a1c1-c5a5bd42d3ef",
      name: "TwoWayVEdge",
      id: "6f84c51d-799b-40ff-8a5f-fc6a3d0bb077",
    },
    {
      start: {
        x: -940,
        y: -1620,
      },
      startId: "a1ac7cf8-ca57-4ea2-a1c1-c5a5bd42d3ef",
      end: {
        x: -980,
        y: -2100,
      },
      endId: "7066ae7e-67e1-4d22-b286-f275d7dacd04",
      name: "TwoWayVEdge",
      id: "4115acea-12c3-46c7-9490-7350541f9447",
    },
    {
      start: {
        x: -980,
        y: -2100,
      },
      startId: "7066ae7e-67e1-4d22-b286-f275d7dacd04",
      end: {
        x: -580,
        y: -2200,
      },
      endId: "60d35dcb-bd00-460d-b8e6-ef9581cf5050",
      name: "TwoWayHEdge",
      id: "99134dfd-a97f-4056-8b27-14a386fac8c9",
    },
    {
      start: {
        x: -580,
        y: -2200,
      },
      startId: "60d35dcb-bd00-460d-b8e6-ef9581cf5050",
      end: {
        x: -140,
        y: -2100,
      },
      endId: "0647787f-9edf-4562-8566-8a4d730d9f59",
      name: "TwoWayHEdge",
      id: "2b365bb1-b691-422c-b986-96d44607e3f5",
    },
    {
      start: {
        x: -140,
        y: -2100,
      },
      startId: "0647787f-9edf-4562-8566-8a4d730d9f59",
      end: {
        x: -220,
        y: -1620,
      },
      endId: "9d23449c-2cda-4599-9761-07c539f02995",
      name: "TwoWayVEdge",
      id: "34417797-775a-49f5-9921-d51df111e8f4",
    },
  ],
};
export default europeCaveCanteen;
