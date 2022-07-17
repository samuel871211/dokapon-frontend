import { Vertex, Edge } from "../global";

const africaCaveB2: { vertices: Vertex[]; edges: Edge[] } = {
  vertices: [
    {
      position: {
        x: 920,
        y: 1200,
      },
      name: "BattleField",
      id: "a21fc899-6a29-4195-a7ee-04473014ff28",
      edges: [
        "54dd2618-494a-420d-8e98-317b155f41b4",
        "5bda1494-303d-4ece-a723-aa537c3ca10c",
      ],
      top: "e7d5a410-f0c6-4c2b-bd79-490ad0185c00",
      left: "2186eb8a-be3a-43b7-8001-0cfe426d4495",
    },
    {
      id: "e7d5a410-f0c6-4c2b-bd79-490ad0185c00",
      name: "CaveField",
      position: {
        x: 860,
        y: 600,
      },
      edges: [
        "54dd2618-494a-420d-8e98-317b155f41b4",
        "f4d7a819-0a0d-433d-abc3-5d2716b3d6e9",
      ],
      bottom: "a21fc899-6a29-4195-a7ee-04473014ff28",
      right: "214748e3-3988-4976-a0d7-fdf1c9491907",
    },
    {
      id: "214748e3-3988-4976-a0d7-fdf1c9491907",
      name: "CaveField",
      position: {
        x: 1680,
        y: 600,
      },
      edges: [
        "f4d7a819-0a0d-433d-abc3-5d2716b3d6e9",
        "742fc7bf-c6da-4879-9eff-ab2dd601a9db",
      ],
      left: "e7d5a410-f0c6-4c2b-bd79-490ad0185c00",
      bottom: "121c2a43-5b15-408f-bf45-cac0fff0f969",
    },
    {
      id: "121c2a43-5b15-408f-bf45-cac0fff0f969",
      name: "MagicField",
      position: {
        x: 1760,
        y: 1200,
      },
      edges: [
        "742fc7bf-c6da-4879-9eff-ab2dd601a9db",
        "413c8d3a-c19d-4c64-8adf-7c876b372374",
      ],
      top: "214748e3-3988-4976-a0d7-fdf1c9491907",
      right: "33793361-3bf1-445b-9fdb-f344cf60e4c3",
    },
    {
      id: "33793361-3bf1-445b-9fdb-f344cf60e4c3",
      name: "BattleField",
      position: {
        x: 2520,
        y: 1220,
      },
      edges: [
        "413c8d3a-c19d-4c64-8adf-7c876b372374",
        "7d2e366d-d589-484d-8150-688206e8bde3",
      ],
      left: "121c2a43-5b15-408f-bf45-cac0fff0f969",
      right: "f1c127a9-4d62-429b-8b42-cfd669d01689",
    },
    {
      id: "f1c127a9-4d62-429b-8b42-cfd669d01689",
      name: "TreasureField",
      position: {
        x: 3220,
        y: 1200,
      },
      edges: [
        "7d2e366d-d589-484d-8150-688206e8bde3",
        "ac3eeaef-b8d0-4e24-bcc2-627bb972978e",
      ],
      left: "33793361-3bf1-445b-9fdb-f344cf60e4c3",
      right: "38728806-bcf6-4ec2-bb10-41b85298f0a4",
    },
    {
      id: "38728806-bcf6-4ec2-bb10-41b85298f0a4",
      name: "BattleField",
      position: {
        x: 3900,
        y: 1220,
      },
      edges: [
        "ac3eeaef-b8d0-4e24-bcc2-627bb972978e",
        "75ca3f3b-990a-4667-82d4-98230f0e170d",
      ],
      left: "f1c127a9-4d62-429b-8b42-cfd669d01689",
      right: "cc5f18d1-dd44-49e0-8b2d-907a985ba7e4",
    },
    {
      id: "cc5f18d1-dd44-49e0-8b2d-907a985ba7e4",
      name: "DamageField",
      position: {
        x: 4540,
        y: 1200,
      },
      edges: [
        "75ca3f3b-990a-4667-82d4-98230f0e170d",
        "7f38276d-9f16-47cc-a745-db811a8ffd59",
      ],
      left: "38728806-bcf6-4ec2-bb10-41b85298f0a4",
      right: "89db7df5-37ff-44e1-9bcc-a6d9cf941077",
    },
    {
      id: "89db7df5-37ff-44e1-9bcc-a6d9cf941077",
      name: "MagicField",
      position: {
        x: 5220,
        y: 1220,
      },
      edges: [
        "7f38276d-9f16-47cc-a745-db811a8ffd59",
        "a85a7f25-31c3-4aca-8242-659bcecec10c",
      ],
      left: "cc5f18d1-dd44-49e0-8b2d-907a985ba7e4",
      top: "d44327d9-2b2e-4a31-82f2-1027860405fc",
    },
    {
      id: "d44327d9-2b2e-4a31-82f2-1027860405fc",
      name: "BattleField",
      position: {
        x: 5260,
        y: 640,
      },
      edges: [
        "a85a7f25-31c3-4aca-8242-659bcecec10c",
        "27fec5fe-9518-47d6-b275-692e3f1f7729",
      ],
      bottom: "89db7df5-37ff-44e1-9bcc-a6d9cf941077",
      top: "ce1aa89d-0c18-4f54-b71a-b60ec3f54e0a",
    },
    {
      id: "ce1aa89d-0c18-4f54-b71a-b60ec3f54e0a",
      name: "TreasureField",
      position: {
        x: 5200,
        y: 20,
      },
      edges: [
        "27fec5fe-9518-47d6-b275-692e3f1f7729",
        "8099c639-9f6a-448e-8b2e-5360109f9e56",
      ],
      bottom: "d44327d9-2b2e-4a31-82f2-1027860405fc",
      top: "8e28b52e-e968-4f55-8b45-8377c0075e04",
    },
    {
      id: "8e28b52e-e968-4f55-8b45-8377c0075e04",
      name: "BattleField",
      position: {
        x: 5260,
        y: -580,
      },
      edges: [
        "8099c639-9f6a-448e-8b2e-5360109f9e56",
        "5f54219f-fa97-481b-9973-26397c392ab0",
      ],
      bottom: "ce1aa89d-0c18-4f54-b71a-b60ec3f54e0a",
      top: "22defbbc-d21f-4fe4-9578-68a656baf219",
    },
    {
      id: "22defbbc-d21f-4fe4-9578-68a656baf219",
      name: "BattleField",
      position: {
        x: 5180,
        y: -1220,
      },
      edges: [
        "5f54219f-fa97-481b-9973-26397c392ab0",
        "ecc25c41-f575-461d-b4f6-c3135e72de05",
        "3571933a-2010-4364-a571-4a2506a68f00",
      ],
      bottom: "8e28b52e-e968-4f55-8b45-8377c0075e04",
      left: "626406a1-4b43-4c8e-b352-f82c02fe1800",
      top: "fba02c55-31ac-4d5b-a7dd-51640815dfb5",
    },
    {
      id: "fba02c55-31ac-4d5b-a7dd-51640815dfb5",
      name: "RedTreasureField",
      position: {
        x: 5240,
        y: -1700,
      },
      edges: [
        "3571933a-2010-4364-a571-4a2506a68f00",
        "18ed72ef-8a0c-47aa-9b5e-c3315abed37d",
      ],
      bottom: "22defbbc-d21f-4fe4-9578-68a656baf219",
      top: "66d02b0d-7329-4507-8db4-cd6948cac6c7",
    },
    {
      id: "66d02b0d-7329-4507-8db4-cd6948cac6c7",
      name: "BattleField",
      position: {
        x: 5140,
        y: -2400,
      },
      edges: [
        "18ed72ef-8a0c-47aa-9b5e-c3315abed37d",
        "2cb2adde-f736-417a-a014-da8749d4daf2",
      ],
      bottom: "fba02c55-31ac-4d5b-a7dd-51640815dfb5",
      top: "1ecce24b-c547-477e-9bde-611b72356efb",
    },
    {
      id: "1ecce24b-c547-477e-9bde-611b72356efb",
      name: "WhiteTreasureField",
      position: {
        x: 5140,
        y: -2960,
      },
      edges: ["2cb2adde-f736-417a-a014-da8749d4daf2"],
      bottom: "66d02b0d-7329-4507-8db4-cd6948cac6c7",
    },
    {
      id: "626406a1-4b43-4c8e-b352-f82c02fe1800",
      name: "BattleField",
      position: {
        x: 4240,
        y: -1220,
      },
      edges: [
        "ecc25c41-f575-461d-b4f6-c3135e72de05",
        "b85a7c4c-4f84-440a-beb3-eee9f4ecf47c",
        "d42d11a2-1ebe-471c-8de2-37adfda77a54",
      ],
      right: "22defbbc-d21f-4fe4-9578-68a656baf219",
      left: "fff30218-dcec-4666-92db-98e16636a211",
      bottom: "a34db427-2563-4a26-a68a-99ebbc5b7807",
    },
    {
      id: "fff30218-dcec-4666-92db-98e16636a211",
      name: "DamageField",
      position: {
        x: 3240,
        y: -1240,
      },
      edges: [
        "b85a7c4c-4f84-440a-beb3-eee9f4ecf47c",
        "f4d4a9a6-fed2-4137-b5ca-938cd61e23af",
        "cc4dd193-75bf-4bd6-b3dd-cf192d3e8b6e",
      ],
      right: "626406a1-4b43-4c8e-b352-f82c02fe1800",
      bottom: "0c1df5d2-5130-49d0-adf1-8236eb2c6159",
      left: "47c7c640-1567-4f15-845c-2b013971b60a",
    },
    {
      id: "0c1df5d2-5130-49d0-adf1-8236eb2c6159",
      name: "MagicField",
      position: {
        x: 3180,
        y: -660,
      },
      edges: [
        "f4d4a9a6-fed2-4137-b5ca-938cd61e23af",
        "f35cefb1-bee5-4293-99d0-211bf57b934d",
        "7f98d752-0723-49e9-b3cf-7d5c1f05f2d0",
      ],
      top: "fff30218-dcec-4666-92db-98e16636a211",
      right: "8f74734e-f0ff-4def-805b-2b725f119ad8",
      bottom: "31b2981f-a221-4bc5-9764-dd0f50d74ee8",
    },
    {
      id: "8f74734e-f0ff-4def-805b-2b725f119ad8",
      name: "BattleField",
      position: {
        x: 3760,
        y: -600,
      },
      edges: [
        "f35cefb1-bee5-4293-99d0-211bf57b934d",
        "9746face-6049-4343-9807-a345195d6a3c",
      ],
      left: "0c1df5d2-5130-49d0-adf1-8236eb2c6159",
      right: "a34db427-2563-4a26-a68a-99ebbc5b7807",
    },
    {
      id: "a34db427-2563-4a26-a68a-99ebbc5b7807",
      name: "TreasureField",
      position: {
        x: 4300,
        y: -640,
      },
      edges: [
        "9746face-6049-4343-9807-a345195d6a3c",
        "d42d11a2-1ebe-471c-8de2-37adfda77a54",
      ],
      left: "8f74734e-f0ff-4def-805b-2b725f119ad8",
      top: "626406a1-4b43-4c8e-b352-f82c02fe1800",
    },
    {
      id: "47c7c640-1567-4f15-845c-2b013971b60a",
      name: "TreasureField",
      position: {
        x: 2120,
        y: -1200,
      },
      edges: [
        "cc4dd193-75bf-4bd6-b3dd-cf192d3e8b6e",
        "ee7e2c1a-dc73-42b4-ad84-a9c07f9cb30d",
        "4c8f8346-ece4-4cfd-b576-88db5b5a2c41",
      ],
      right: "fff30218-dcec-4666-92db-98e16636a211",
      left: "d1a637de-4616-4ae8-b5de-6a337d48cf73",
      top: "25dca3ea-4865-44e9-ad28-d754b6421e2b",
    },
    {
      id: "d1a637de-4616-4ae8-b5de-6a337d48cf73",
      name: "BattleField",
      position: {
        x: 1180,
        y: -1220,
      },
      edges: [
        "ee7e2c1a-dc73-42b4-ad84-a9c07f9cb30d",
        "e4d26b0b-fefc-4372-bbac-aab69b77efec",
      ],
      right: "47c7c640-1567-4f15-845c-2b013971b60a",
      left: "64a03e01-c44b-4c3a-988e-d3fa901c6e80",
    },
    {
      id: "25dca3ea-4865-44e9-ad28-d754b6421e2b",
      name: "BattleField",
      position: {
        x: 2060,
        y: -1700,
      },
      edges: [
        "4c8f8346-ece4-4cfd-b576-88db5b5a2c41",
        "548a9b40-c535-4525-9c0d-e71a992ee6b1",
      ],
      bottom: "47c7c640-1567-4f15-845c-2b013971b60a",
      top: "8a7afc32-9fe7-4710-bbfb-3409b92da5bd",
    },
    {
      id: "8a7afc32-9fe7-4710-bbfb-3409b92da5bd",
      name: "TreasureField",
      position: {
        x: 2140,
        y: -2200,
      },
      edges: [
        "548a9b40-c535-4525-9c0d-e71a992ee6b1",
        "27a2fedf-f6ea-424e-93b1-cadc22ccbe18",
      ],
      bottom: "25dca3ea-4865-44e9-ad28-d754b6421e2b",
      top: "ef991af1-1fcc-4137-9138-674e6273f760",
    },
    {
      id: "ef991af1-1fcc-4137-9138-674e6273f760",
      name: "BattleField",
      position: {
        x: 2060,
        y: -2660,
      },
      edges: [
        "27a2fedf-f6ea-424e-93b1-cadc22ccbe18",
        "80a9ab8e-e0f8-459a-937a-543e50d8d4aa",
      ],
      bottom: "8a7afc32-9fe7-4710-bbfb-3409b92da5bd",
      right: "67c95e82-9ac8-498d-ba9c-85251098b34b",
    },
    {
      id: "67c95e82-9ac8-498d-ba9c-85251098b34b",
      name: "MagicField",
      position: {
        x: 2660,
        y: -2620,
      },
      edges: [
        "80a9ab8e-e0f8-459a-937a-543e50d8d4aa",
        "2a822ada-c26b-432f-bfea-b26f8628bb67",
        "3d927934-88f4-48ea-b3c4-e44226042882",
      ],
      left: "ef991af1-1fcc-4137-9138-674e6273f760",
      right: "6eb1eb8d-bde9-4e11-aec0-9312fc146616",
      top: "b3ee3a9b-1f06-4eb9-a6b7-07609b4dea3f",
    },
    {
      id: "6eb1eb8d-bde9-4e11-aec0-9312fc146616",
      name: "TreasureField",
      position: {
        x: 3320,
        y: -2640,
      },
      edges: [
        "2a822ada-c26b-432f-bfea-b26f8628bb67",
        "746dadc2-b048-48b5-8a6b-64dcd529cd0c",
      ],
      left: "67c95e82-9ac8-498d-ba9c-85251098b34b",
      top: "e68a96b3-6700-490f-bad4-8c46ba3826ef",
    },
    {
      id: "e68a96b3-6700-490f-bad4-8c46ba3826ef",
      name: "BattleField",
      position: {
        x: 3460,
        y: -3160,
      },
      edges: [
        "746dadc2-b048-48b5-8a6b-64dcd529cd0c",
        "20549652-d83e-46cd-8023-b0abd83e1daa",
      ],
      bottom: "6eb1eb8d-bde9-4e11-aec0-9312fc146616",
      left: "c0d90f3a-4ea0-4c05-9bdd-df796f5a0a0f",
    },
    {
      id: "b3ee3a9b-1f06-4eb9-a6b7-07609b4dea3f",
      name: "BattleField",
      position: {
        x: 2440,
        y: -3120,
      },
      edges: [
        "3d927934-88f4-48ea-b3c4-e44226042882",
        "83057f42-0571-44f1-ab54-51cff90402f2",
      ],
      bottom: "67c95e82-9ac8-498d-ba9c-85251098b34b",
      right: "c0d90f3a-4ea0-4c05-9bdd-df796f5a0a0f",
    },
    {
      id: "c0d90f3a-4ea0-4c05-9bdd-df796f5a0a0f",
      name: "BattleField",
      position: {
        x: 2920,
        y: -3180,
      },
      edges: [
        "83057f42-0571-44f1-ab54-51cff90402f2",
        "20549652-d83e-46cd-8023-b0abd83e1daa",
        "0ac53e1e-ab4d-4f5a-a940-e8b744dc5702",
      ],
      left: "b3ee3a9b-1f06-4eb9-a6b7-07609b4dea3f",
      right: "e68a96b3-6700-490f-bad4-8c46ba3826ef",
      top: "52c869f4-df71-4a20-a988-34e80ebc9a38",
    },
    {
      id: "52c869f4-df71-4a20-a988-34e80ebc9a38",
      name: "CaveField",
      position: {
        x: 2860,
        y: -3640,
      },
      edges: ["0ac53e1e-ab4d-4f5a-a940-e8b744dc5702"],
      bottom: "c0d90f3a-4ea0-4c05-9bdd-df796f5a0a0f",
    },
    {
      id: "64a03e01-c44b-4c3a-988e-d3fa901c6e80",
      name: "CollectMoneyField",
      position: {
        x: 340,
        y: -1200,
      },
      edges: [
        "e4d26b0b-fefc-4372-bbac-aab69b77efec",
        "2d0df454-1cfe-45a2-80db-11b59741419d",
        "c3d9d4be-e317-41b9-810a-d356792821cb",
      ],
      right: "d1a637de-4616-4ae8-b5de-6a337d48cf73",
      top: "b331e289-0b5e-4f85-9f5f-494c51043fae",
      left: "671273b5-4583-40a8-9899-f9087fd191d4",
    },
    {
      id: "b331e289-0b5e-4f85-9f5f-494c51043fae",
      name: "TreasureField",
      position: {
        x: 300,
        y: -1700,
      },
      edges: [
        "2d0df454-1cfe-45a2-80db-11b59741419d",
        "5d818379-aa6d-4b9e-85d8-57995cd4d787",
      ],
      bottom: "64a03e01-c44b-4c3a-988e-d3fa901c6e80",
      top: "56ee6693-f804-46e5-9d5e-a853122018c5",
    },
    {
      id: "56ee6693-f804-46e5-9d5e-a853122018c5",
      name: "RedTreasureField",
      position: {
        x: 340,
        y: -2220,
      },
      edges: [
        "5d818379-aa6d-4b9e-85d8-57995cd4d787",
        "a2541344-3c8f-49d5-9533-1b222c985a43",
      ],
      bottom: "b331e289-0b5e-4f85-9f5f-494c51043fae",
      top: "1b80329f-8fb9-48dc-904e-5900fef30273",
    },
    {
      id: "1b80329f-8fb9-48dc-904e-5900fef30273",
      name: "TreasureField",
      position: {
        x: 260,
        y: -2700,
      },
      edges: [
        "a2541344-3c8f-49d5-9533-1b222c985a43",
        "9e8930d0-1734-4ff7-8546-dd557f2f6217",
      ],
      bottom: "56ee6693-f804-46e5-9d5e-a853122018c5",
      top: "d8dfbbff-8a4e-45ee-a69d-faa6a88fb71a",
    },
    {
      id: "d8dfbbff-8a4e-45ee-a69d-faa6a88fb71a",
      name: "BattleField",
      position: {
        x: 300,
        y: -3200,
      },
      edges: [
        "9e8930d0-1734-4ff7-8546-dd557f2f6217",
        "0363c5c2-0267-4906-b5c6-2bb031d8f956",
      ],
      bottom: "1b80329f-8fb9-48dc-904e-5900fef30273",
      top: "f6b53193-43f9-40e8-b733-8b90c6320f1a",
    },
    {
      id: "f6b53193-43f9-40e8-b733-8b90c6320f1a",
      name: "CaveField",
      position: {
        x: 260,
        y: -3660,
      },
      edges: ["0363c5c2-0267-4906-b5c6-2bb031d8f956"],
      bottom: "d8dfbbff-8a4e-45ee-a69d-faa6a88fb71a",
    },
    {
      id: "671273b5-4583-40a8-9899-f9087fd191d4",
      name: "BattleField",
      position: {
        x: -400,
        y: -1240,
      },
      edges: [
        "c3d9d4be-e317-41b9-810a-d356792821cb",
        "3f417da8-c428-44ad-a130-e7746929274c",
      ],
      right: "64a03e01-c44b-4c3a-988e-d3fa901c6e80",
      left: "6e69a51e-75c9-4cd6-9424-437c7d45bcf8",
    },
    {
      id: "6e69a51e-75c9-4cd6-9424-437c7d45bcf8",
      name: "DamageField",
      position: {
        x: -1160,
        y: -1220,
      },
      edges: [
        "3f417da8-c428-44ad-a130-e7746929274c",
        "b6807fb0-2c0b-495b-aa25-64092774df8f",
        "666215ee-757c-48a1-98fb-62e8bb271f2c",
      ],
      right: "671273b5-4583-40a8-9899-f9087fd191d4",
      top: "e02c532c-3c5a-4845-a632-f49f5164cfe2",
      left: "f6cc6fc8-f1e7-4dac-9979-aca81608fb8d",
    },
    {
      id: "e02c532c-3c5a-4845-a632-f49f5164cfe2",
      name: "MagicField",
      position: {
        x: -1120,
        y: -1720,
      },
      edges: [
        "b6807fb0-2c0b-495b-aa25-64092774df8f",
        "7e22f02d-4aef-4b95-ad20-364780628f83",
      ],
      bottom: "6e69a51e-75c9-4cd6-9424-437c7d45bcf8",
      top: "232d62a5-1a1d-4e90-a51c-52a5fe7f7561",
    },
    {
      id: "f6cc6fc8-f1e7-4dac-9979-aca81608fb8d",
      name: "BattleField",
      position: {
        x: -1720,
        y: -1220,
      },
      edges: [
        "666215ee-757c-48a1-98fb-62e8bb271f2c",
        "abd1680f-9081-4277-aead-e21b57a17580",
        "3d9758ba-a57d-4cd3-b4fd-f028282202ca",
      ],
      right: "6e69a51e-75c9-4cd6-9424-437c7d45bcf8",
      top: "eb2c25c1-bab1-4796-a323-67a5eea3edec",
      left: "65b225a9-96a6-4041-b746-43a0fee3af77",
    },
    {
      id: "eb2c25c1-bab1-4796-a323-67a5eea3edec",
      name: "RedTreasureField",
      position: {
        x: -1740,
        y: -1800,
      },
      edges: [
        "abd1680f-9081-4277-aead-e21b57a17580",
        "e9925c5c-2c2c-499b-9bfb-9acc75c549ce",
      ],
      bottom: "f6cc6fc8-f1e7-4dac-9979-aca81608fb8d",
      top: "ecf51442-aab0-4810-b171-77c34ae1ea11",
    },
    {
      id: "232d62a5-1a1d-4e90-a51c-52a5fe7f7561",
      name: "TreasureField",
      position: {
        x: -1140,
        y: -2240,
      },
      edges: [
        "7e22f02d-4aef-4b95-ad20-364780628f83",
        "02251498-cb0b-493b-a6f3-3614a1d4d4ee",
      ],
      bottom: "e02c532c-3c5a-4845-a632-f49f5164cfe2",
      top: "6d369e03-1fac-4fb5-87a9-0687ce11767b",
    },
    {
      id: "6d369e03-1fac-4fb5-87a9-0687ce11767b",
      name: "BattleField",
      position: {
        x: -1100,
        y: -2740,
      },
      edges: [
        "02251498-cb0b-493b-a6f3-3614a1d4d4ee",
        "ee0f6504-d5b6-4bb0-91bb-5f6dbcdfe875",
      ],
      bottom: "232d62a5-1a1d-4e90-a51c-52a5fe7f7561",
      left: "ecf51442-aab0-4810-b171-77c34ae1ea11",
    },
    {
      id: "ecf51442-aab0-4810-b171-77c34ae1ea11",
      name: "BattleField",
      position: {
        x: -1700,
        y: -2740,
      },
      edges: [
        "ee0f6504-d5b6-4bb0-91bb-5f6dbcdfe875",
        "e9925c5c-2c2c-499b-9bfb-9acc75c549ce",
        "0b9eaa40-9af6-4767-82ed-04b5621f0af4",
      ],
      right: "6d369e03-1fac-4fb5-87a9-0687ce11767b",
      bottom: "eb2c25c1-bab1-4796-a323-67a5eea3edec",
      left: "fc57c752-6096-4618-8272-69a37bcb9c46",
    },
    {
      id: "fc57c752-6096-4618-8272-69a37bcb9c46",
      name: "TreasureField",
      position: {
        x: -2360,
        y: -2780,
      },
      edges: [
        "0b9eaa40-9af6-4767-82ed-04b5621f0af4",
        "368a7a89-205e-4d45-af6d-a46af12d771d",
      ],
      right: "ecf51442-aab0-4810-b171-77c34ae1ea11",
      top: "4e0b8010-7a6c-4bdd-82ca-616d71561ac6",
    },
    {
      id: "4e0b8010-7a6c-4bdd-82ca-616d71561ac6",
      name: "BattleField",
      position: {
        x: -2400,
        y: -3260,
      },
      edges: [
        "368a7a89-205e-4d45-af6d-a46af12d771d",
        "90628507-ceba-4516-8a16-1f821af3ad34",
        "c3d13916-b679-4cf8-abbc-502af2168cce",
      ],
      bottom: "fc57c752-6096-4618-8272-69a37bcb9c46",
      top: "bc061849-1cd3-4e18-ae54-4a456550f79f",
      left: "cb2bc3e4-6ee3-4b14-b07e-c7a8452d5324",
    },
    {
      id: "bc061849-1cd3-4e18-ae54-4a456550f79f",
      name: "CaveField",
      position: {
        x: -2300,
        y: -3720,
      },
      edges: ["90628507-ceba-4516-8a16-1f821af3ad34"],
      bottom: "4e0b8010-7a6c-4bdd-82ca-616d71561ac6",
    },
    {
      id: "cb2bc3e4-6ee3-4b14-b07e-c7a8452d5324",
      name: "BattleField",
      position: {
        x: -2980,
        y: -3260,
      },
      edges: [
        "c3d13916-b679-4cf8-abbc-502af2168cce",
        "a16d17ec-f4ee-4b12-98e7-f1d9d06bec07",
      ],
      right: "4e0b8010-7a6c-4bdd-82ca-616d71561ac6",
      bottom: "367cb6a0-ec03-4536-8b8b-cb22b59970f9",
    },
    {
      id: "367cb6a0-ec03-4536-8b8b-cb22b59970f9",
      name: "WhiteTreasureField",
      position: {
        x: -3020,
        y: -2740,
      },
      edges: ["a16d17ec-f4ee-4b12-98e7-f1d9d06bec07"],
      top: "cb2bc3e4-6ee3-4b14-b07e-c7a8452d5324",
    },
    {
      id: "65b225a9-96a6-4041-b746-43a0fee3af77",
      name: "MagicField",
      position: {
        x: -2320,
        y: -1220,
      },
      edges: [
        "3d9758ba-a57d-4cd3-b4fd-f028282202ca",
        "27db77af-6da8-4622-bb72-39b0824ba0fa",
        "e8e777f0-63a7-4337-9352-64382dd570b6",
      ],
      right: "f6cc6fc8-f1e7-4dac-9979-aca81608fb8d",
      left: "7d15718c-746a-4766-90b1-cbd45081f10f",
      bottom: "6e8791ab-c473-4fa5-8436-cb0522ac57ae",
    },
    {
      id: "7d15718c-746a-4766-90b1-cbd45081f10f",
      name: "BattleField",
      position: {
        x: -2840,
        y: -1220,
      },
      edges: [
        "27db77af-6da8-4622-bb72-39b0824ba0fa",
        "0b5794e5-f83a-4876-99b5-4232cba2d6c0",
      ],
      right: "65b225a9-96a6-4041-b746-43a0fee3af77",
      bottom: "4c349edf-ec43-4025-946e-cd96f71b7c95",
    },
    {
      id: "4c349edf-ec43-4025-946e-cd96f71b7c95",
      name: "TreasureField",
      position: {
        x: -2900,
        y: -840,
      },
      edges: [
        "0b5794e5-f83a-4876-99b5-4232cba2d6c0",
        "6c8ecdf1-45fb-491f-96b0-2da0e96ed96f",
      ],
      top: "7d15718c-746a-4766-90b1-cbd45081f10f",
      bottom: "40f779ed-e5a0-4cf4-8c51-67ad85d955b9",
    },
    {
      id: "40f779ed-e5a0-4cf4-8c51-67ad85d955b9",
      name: "BattleField",
      position: {
        x: -2820,
        y: -500,
      },
      edges: [
        "6c8ecdf1-45fb-491f-96b0-2da0e96ed96f",
        "d1838e2a-8995-4bdd-bbd5-b102ffd347c1",
      ],
      top: "4c349edf-ec43-4025-946e-cd96f71b7c95",
      right: "6e8791ab-c473-4fa5-8436-cb0522ac57ae",
    },
    {
      id: "6e8791ab-c473-4fa5-8436-cb0522ac57ae",
      name: "DamageField",
      position: {
        x: -2320,
        y: -500,
      },
      edges: [
        "d1838e2a-8995-4bdd-bbd5-b102ffd347c1",
        "e8e777f0-63a7-4337-9352-64382dd570b6",
        "389dc352-eadb-4094-8742-89dd5d134547",
      ],
      left: "40f779ed-e5a0-4cf4-8c51-67ad85d955b9",
      top: "65b225a9-96a6-4041-b746-43a0fee3af77",
      right: "1589b2a1-95b1-45f5-9366-a05a40436911",
    },
    {
      id: "1589b2a1-95b1-45f5-9366-a05a40436911",
      name: "BattleField",
      position: {
        x: -1300,
        y: -540,
      },
      edges: [
        "389dc352-eadb-4094-8742-89dd5d134547",
        "ac24ff8c-69f7-44e4-807c-42a8c1643e56",
      ],
      left: "6e8791ab-c473-4fa5-8436-cb0522ac57ae",
      bottom: "2d69e2d5-d5b4-4b73-a1d1-0d70df66fd01",
    },
    {
      id: "2d69e2d5-d5b4-4b73-a1d1-0d70df66fd01",
      name: "TreasureField",
      position: {
        x: -1360,
        y: -80,
      },
      edges: [
        "ac24ff8c-69f7-44e4-807c-42a8c1643e56",
        "3816cefa-12bf-4078-8ab9-545d701941c4",
      ],
      top: "1589b2a1-95b1-45f5-9366-a05a40436911",
      bottom: "dd7a05d3-f46c-4c29-adc9-02b61236e9bf",
    },
    {
      id: "dd7a05d3-f46c-4c29-adc9-02b61236e9bf",
      name: "BattleField",
      position: {
        x: -1300,
        y: 320,
      },
      edges: [
        "3816cefa-12bf-4078-8ab9-545d701941c4",
        "2e32b1bc-bfc9-4c3d-b793-0623f2143495",
      ],
      top: "2d69e2d5-d5b4-4b73-a1d1-0d70df66fd01",
      left: "0f5389fc-7bc5-4fab-821f-a0d0b02b37f9",
    },
    {
      id: "0f5389fc-7bc5-4fab-821f-a0d0b02b37f9",
      name: "MagicField",
      position: {
        x: -1940,
        y: 320,
      },
      edges: [
        "2e32b1bc-bfc9-4c3d-b793-0623f2143495",
        "24180fa5-6329-4602-818d-96fff62f454b",
        "42e0011b-ae9d-475b-a7cf-65377ebff3d4",
      ],
      right: "dd7a05d3-f46c-4c29-adc9-02b61236e9bf",
      left: "2537c9ad-4057-4746-8d66-3e3d16693e31",
      bottom: "32faecc5-2b7d-4683-8c76-8d528b00322a",
    },
    {
      id: "2537c9ad-4057-4746-8d66-3e3d16693e31",
      name: "BattleField",
      position: {
        x: -2500,
        y: 320,
      },
      edges: [
        "24180fa5-6329-4602-818d-96fff62f454b",
        "0485e526-700b-4f22-b63f-4be6e90eea62",
      ],
      right: "0f5389fc-7bc5-4fab-821f-a0d0b02b37f9",
      bottom: "5ab0d305-c95f-4bc0-9c03-948650d5e21c",
    },
    {
      id: "5ab0d305-c95f-4bc0-9c03-948650d5e21c",
      name: "TreasureField",
      position: {
        x: -2500,
        y: 1180,
      },
      edges: [
        "0485e526-700b-4f22-b63f-4be6e90eea62",
        "b926f3fe-ab0d-430e-988b-d13d3a8b6307",
      ],
      top: "2537c9ad-4057-4746-8d66-3e3d16693e31",
      right: "ddd1d373-416f-4785-ae99-785875422b3a",
    },
    {
      id: "32faecc5-2b7d-4683-8c76-8d528b00322a",
      name: "BattleField",
      position: {
        x: -1880,
        y: 780,
      },
      edges: [
        "42e0011b-ae9d-475b-a7cf-65377ebff3d4",
        "1b48e73a-551e-4e0c-824a-4e762a4d9213",
        "131e15dd-4cf9-4c0e-a34c-c1158f3e343f",
      ],
      top: "0f5389fc-7bc5-4fab-821f-a0d0b02b37f9",
      bottom: "ddd1d373-416f-4785-ae99-785875422b3a",
      right: "e0731ba1-8f79-4fc0-bec0-af57d0a06456",
    },
    {
      id: "ddd1d373-416f-4785-ae99-785875422b3a",
      name: "DamageField",
      position: {
        x: -1900,
        y: 1240,
      },
      edges: [
        "1b48e73a-551e-4e0c-824a-4e762a4d9213",
        "b926f3fe-ab0d-430e-988b-d13d3a8b6307",
      ],
      top: "32faecc5-2b7d-4683-8c76-8d528b00322a",
      left: "5ab0d305-c95f-4bc0-9c03-948650d5e21c",
    },
    {
      id: "e0731ba1-8f79-4fc0-bec0-af57d0a06456",
      name: "RedTreasureField",
      position: {
        x: -1180,
        y: 760,
      },
      edges: [
        "131e15dd-4cf9-4c0e-a34c-c1158f3e343f",
        "b7470ca0-f15d-479c-8bc6-7ef265ae3d98",
      ],
      left: "32faecc5-2b7d-4683-8c76-8d528b00322a",
      bottom: "d8565415-b9ee-445e-ba6c-37ec31141120",
    },
    {
      id: "d8565415-b9ee-445e-ba6c-37ec31141120",
      name: "BattleField",
      position: {
        x: -1180,
        y: 1200,
      },
      edges: [
        "b7470ca0-f15d-479c-8bc6-7ef265ae3d98",
        "5ae1a9dd-e838-4aa2-ac28-7c4e95a2ace8",
      ],
      top: "e0731ba1-8f79-4fc0-bec0-af57d0a06456",
      right: "2186eb8a-be3a-43b7-8001-0cfe426d4495",
    },
    {
      id: "2186eb8a-be3a-43b7-8001-0cfe426d4495",
      name: "TreasureField",
      position: {
        x: -160,
        y: 1240,
      },
      edges: [
        "5bda1494-303d-4ece-a723-aa537c3ca10c",
        "5ae1a9dd-e838-4aa2-ac28-7c4e95a2ace8",
      ],
      right: "a21fc899-6a29-4195-a7ee-04473014ff28",
      left: "d8565415-b9ee-445e-ba6c-37ec31141120",
    },
    {
      id: "31b2981f-a221-4bc5-9764-dd0f50d74ee8",
      name: "DamageField",
      position: {
        x: 3120,
        y: -80,
      },
      edges: [
        "7f98d752-0723-49e9-b3cf-7d5c1f05f2d0",
        "a61f8fe6-e1db-4bb1-bac3-83c4b97bf780",
      ],
      top: "0c1df5d2-5130-49d0-adf1-8236eb2c6159",
      bottom: "a6238586-aaf6-40a1-bfb3-a92e4621e320",
    },
    {
      id: "a6238586-aaf6-40a1-bfb3-a92e4621e320",
      name: "DamageField",
      position: {
        x: 3120,
        y: 460,
      },
      edges: [
        "a61f8fe6-e1db-4bb1-bac3-83c4b97bf780",
        "cd5b1f0c-80b7-46ce-90b1-1d647270c663",
      ],
      top: "31b2981f-a221-4bc5-9764-dd0f50d74ee8",
      left: "68a9fb6c-6637-42a2-a67b-020006be090e",
    },
    {
      id: "68a9fb6c-6637-42a2-a67b-020006be090e",
      name: "KeyTreasureField",
      position: {
        x: 2500,
        y: 460,
      },
      edges: ["cd5b1f0c-80b7-46ce-90b1-1d647270c663"],
      right: "a6238586-aaf6-40a1-bfb3-a92e4621e320",
    },
  ],
  edges: [
    {
      start: {
        x: 920,
        y: 1200,
      },
      startId: "a21fc899-6a29-4195-a7ee-04473014ff28",
      end: {
        x: 860,
        y: 600,
      },
      endId: "e7d5a410-f0c6-4c2b-bd79-490ad0185c00",
      name: "TwoWayVEdge",
      id: "54dd2618-494a-420d-8e98-317b155f41b4",
    },
    {
      start: {
        x: 860,
        y: 600,
      },
      startId: "e7d5a410-f0c6-4c2b-bd79-490ad0185c00",
      end: {
        x: 1680,
        y: 600,
      },
      endId: "214748e3-3988-4976-a0d7-fdf1c9491907",
      name: "TwoWayHEdge",
      id: "f4d7a819-0a0d-433d-abc3-5d2716b3d6e9",
    },
    {
      start: {
        x: 1680,
        y: 600,
      },
      startId: "214748e3-3988-4976-a0d7-fdf1c9491907",
      end: {
        x: 1760,
        y: 1200,
      },
      endId: "121c2a43-5b15-408f-bf45-cac0fff0f969",
      name: "TwoWayVEdge",
      id: "742fc7bf-c6da-4879-9eff-ab2dd601a9db",
    },
    {
      start: {
        x: 1760,
        y: 1200,
      },
      startId: "121c2a43-5b15-408f-bf45-cac0fff0f969",
      end: {
        x: 2520,
        y: 1220,
      },
      endId: "33793361-3bf1-445b-9fdb-f344cf60e4c3",
      name: "TwoWayHEdge",
      id: "413c8d3a-c19d-4c64-8adf-7c876b372374",
    },
    {
      start: {
        x: 2520,
        y: 1220,
      },
      startId: "33793361-3bf1-445b-9fdb-f344cf60e4c3",
      end: {
        x: 3220,
        y: 1200,
      },
      endId: "f1c127a9-4d62-429b-8b42-cfd669d01689",
      name: "TwoWayHEdge",
      id: "7d2e366d-d589-484d-8150-688206e8bde3",
    },
    {
      start: {
        x: 3220,
        y: 1200,
      },
      startId: "f1c127a9-4d62-429b-8b42-cfd669d01689",
      end: {
        x: 3900,
        y: 1220,
      },
      endId: "38728806-bcf6-4ec2-bb10-41b85298f0a4",
      name: "TwoWayHEdge",
      id: "ac3eeaef-b8d0-4e24-bcc2-627bb972978e",
    },
    {
      start: {
        x: 3900,
        y: 1220,
      },
      startId: "38728806-bcf6-4ec2-bb10-41b85298f0a4",
      end: {
        x: 4540,
        y: 1200,
      },
      endId: "cc5f18d1-dd44-49e0-8b2d-907a985ba7e4",
      name: "TwoWayHEdge",
      id: "75ca3f3b-990a-4667-82d4-98230f0e170d",
    },
    {
      start: {
        x: 4540,
        y: 1200,
      },
      startId: "cc5f18d1-dd44-49e0-8b2d-907a985ba7e4",
      end: {
        x: 5220,
        y: 1220,
      },
      endId: "89db7df5-37ff-44e1-9bcc-a6d9cf941077",
      name: "TwoWayHEdge",
      id: "7f38276d-9f16-47cc-a745-db811a8ffd59",
    },
    {
      start: {
        x: 5220,
        y: 1220,
      },
      startId: "89db7df5-37ff-44e1-9bcc-a6d9cf941077",
      end: {
        x: 5260,
        y: 640,
      },
      endId: "d44327d9-2b2e-4a31-82f2-1027860405fc",
      name: "TwoWayVEdge",
      id: "a85a7f25-31c3-4aca-8242-659bcecec10c",
    },
    {
      start: {
        x: 5260,
        y: 640,
      },
      startId: "d44327d9-2b2e-4a31-82f2-1027860405fc",
      end: {
        x: 5200,
        y: 20,
      },
      endId: "ce1aa89d-0c18-4f54-b71a-b60ec3f54e0a",
      name: "TwoWayVEdge",
      id: "27fec5fe-9518-47d6-b275-692e3f1f7729",
    },
    {
      start: {
        x: 5200,
        y: 20,
      },
      startId: "ce1aa89d-0c18-4f54-b71a-b60ec3f54e0a",
      end: {
        x: 5260,
        y: -580,
      },
      endId: "8e28b52e-e968-4f55-8b45-8377c0075e04",
      name: "TwoWayVEdge",
      id: "8099c639-9f6a-448e-8b2e-5360109f9e56",
    },
    {
      start: {
        x: 5260,
        y: -580,
      },
      startId: "8e28b52e-e968-4f55-8b45-8377c0075e04",
      end: {
        x: 5180,
        y: -1220,
      },
      endId: "22defbbc-d21f-4fe4-9578-68a656baf219",
      name: "TwoWayVEdge",
      id: "5f54219f-fa97-481b-9973-26397c392ab0",
    },
    {
      start: {
        x: 5180,
        y: -1220,
      },
      startId: "22defbbc-d21f-4fe4-9578-68a656baf219",
      end: {
        x: 4240,
        y: -1220,
      },
      endId: "626406a1-4b43-4c8e-b352-f82c02fe1800",
      name: "TwoWayHEdge",
      id: "ecc25c41-f575-461d-b4f6-c3135e72de05",
    },
    {
      start: {
        x: 5180,
        y: -1220,
      },
      startId: "22defbbc-d21f-4fe4-9578-68a656baf219",
      end: {
        x: 5240,
        y: -1700,
      },
      endId: "fba02c55-31ac-4d5b-a7dd-51640815dfb5",
      name: "TwoWayVEdge",
      id: "3571933a-2010-4364-a571-4a2506a68f00",
    },
    {
      start: {
        x: 5240,
        y: -1700,
      },
      startId: "fba02c55-31ac-4d5b-a7dd-51640815dfb5",
      end: {
        x: 5140,
        y: -2400,
      },
      endId: "66d02b0d-7329-4507-8db4-cd6948cac6c7",
      name: "TwoWayVEdge",
      id: "18ed72ef-8a0c-47aa-9b5e-c3315abed37d",
    },
    {
      start: {
        x: 5140,
        y: -2400,
      },
      startId: "66d02b0d-7329-4507-8db4-cd6948cac6c7",
      end: {
        x: 5140,
        y: -2960,
      },
      endId: "1ecce24b-c547-477e-9bde-611b72356efb",
      name: "TwoWayVEdge",
      id: "2cb2adde-f736-417a-a014-da8749d4daf2",
    },
    {
      start: {
        x: 4240,
        y: -1220,
      },
      startId: "626406a1-4b43-4c8e-b352-f82c02fe1800",
      end: {
        x: 3240,
        y: -1240,
      },
      endId: "fff30218-dcec-4666-92db-98e16636a211",
      name: "TwoWayHEdge",
      id: "b85a7c4c-4f84-440a-beb3-eee9f4ecf47c",
    },
    {
      start: {
        x: 3240,
        y: -1240,
      },
      startId: "fff30218-dcec-4666-92db-98e16636a211",
      end: {
        x: 3180,
        y: -660,
      },
      endId: "0c1df5d2-5130-49d0-adf1-8236eb2c6159",
      name: "TwoWayVEdge",
      id: "f4d4a9a6-fed2-4137-b5ca-938cd61e23af",
    },
    {
      start: {
        x: 3180,
        y: -660,
      },
      startId: "0c1df5d2-5130-49d0-adf1-8236eb2c6159",
      end: {
        x: 3760,
        y: -600,
      },
      endId: "8f74734e-f0ff-4def-805b-2b725f119ad8",
      name: "TwoWayHEdge",
      id: "f35cefb1-bee5-4293-99d0-211bf57b934d",
    },
    {
      start: {
        x: 3760,
        y: -600,
      },
      startId: "8f74734e-f0ff-4def-805b-2b725f119ad8",
      end: {
        x: 4300,
        y: -640,
      },
      endId: "a34db427-2563-4a26-a68a-99ebbc5b7807",
      name: "TwoWayHEdge",
      id: "9746face-6049-4343-9807-a345195d6a3c",
    },
    {
      start: {
        x: 4240,
        y: -1220,
      },
      startId: "626406a1-4b43-4c8e-b352-f82c02fe1800",
      end: {
        x: 4300,
        y: -640,
      },
      endId: "a34db427-2563-4a26-a68a-99ebbc5b7807",
      name: "TwoWayVEdge",
      id: "d42d11a2-1ebe-471c-8de2-37adfda77a54",
    },
    {
      start: {
        x: 3240,
        y: -1240,
      },
      startId: "fff30218-dcec-4666-92db-98e16636a211",
      end: {
        x: 2120,
        y: -1200,
      },
      endId: "47c7c640-1567-4f15-845c-2b013971b60a",
      name: "TwoWayHEdge",
      id: "cc4dd193-75bf-4bd6-b3dd-cf192d3e8b6e",
    },
    {
      start: {
        x: 2120,
        y: -1200,
      },
      startId: "47c7c640-1567-4f15-845c-2b013971b60a",
      end: {
        x: 1180,
        y: -1220,
      },
      endId: "d1a637de-4616-4ae8-b5de-6a337d48cf73",
      name: "TwoWayHEdge",
      id: "ee7e2c1a-dc73-42b4-ad84-a9c07f9cb30d",
    },
    {
      start: {
        x: 2120,
        y: -1200,
      },
      startId: "47c7c640-1567-4f15-845c-2b013971b60a",
      end: {
        x: 2060,
        y: -1700,
      },
      endId: "25dca3ea-4865-44e9-ad28-d754b6421e2b",
      name: "TwoWayVEdge",
      id: "4c8f8346-ece4-4cfd-b576-88db5b5a2c41",
    },
    {
      start: {
        x: 2060,
        y: -1700,
      },
      startId: "25dca3ea-4865-44e9-ad28-d754b6421e2b",
      end: {
        x: 2140,
        y: -2200,
      },
      endId: "8a7afc32-9fe7-4710-bbfb-3409b92da5bd",
      name: "TwoWayVEdge",
      id: "548a9b40-c535-4525-9c0d-e71a992ee6b1",
    },
    {
      start: {
        x: 2140,
        y: -2200,
      },
      startId: "8a7afc32-9fe7-4710-bbfb-3409b92da5bd",
      end: {
        x: 2060,
        y: -2660,
      },
      endId: "ef991af1-1fcc-4137-9138-674e6273f760",
      name: "TwoWayVEdge",
      id: "27a2fedf-f6ea-424e-93b1-cadc22ccbe18",
    },
    {
      start: {
        x: 2060,
        y: -2660,
      },
      startId: "ef991af1-1fcc-4137-9138-674e6273f760",
      end: {
        x: 2660,
        y: -2620,
      },
      endId: "67c95e82-9ac8-498d-ba9c-85251098b34b",
      name: "TwoWayHEdge",
      id: "80a9ab8e-e0f8-459a-937a-543e50d8d4aa",
    },
    {
      start: {
        x: 2660,
        y: -2620,
      },
      startId: "67c95e82-9ac8-498d-ba9c-85251098b34b",
      end: {
        x: 3320,
        y: -2640,
      },
      endId: "6eb1eb8d-bde9-4e11-aec0-9312fc146616",
      name: "TwoWayHEdge",
      id: "2a822ada-c26b-432f-bfea-b26f8628bb67",
    },
    {
      start: {
        x: 3320,
        y: -2640,
      },
      startId: "6eb1eb8d-bde9-4e11-aec0-9312fc146616",
      end: {
        x: 3460,
        y: -3160,
      },
      endId: "e68a96b3-6700-490f-bad4-8c46ba3826ef",
      name: "TwoWayVEdge",
      id: "746dadc2-b048-48b5-8a6b-64dcd529cd0c",
    },
    {
      start: {
        x: 2660,
        y: -2620,
      },
      startId: "67c95e82-9ac8-498d-ba9c-85251098b34b",
      end: {
        x: 2440,
        y: -3120,
      },
      endId: "b3ee3a9b-1f06-4eb9-a6b7-07609b4dea3f",
      name: "TwoWayVEdge",
      id: "3d927934-88f4-48ea-b3c4-e44226042882",
    },
    {
      start: {
        x: 2440,
        y: -3120,
      },
      startId: "b3ee3a9b-1f06-4eb9-a6b7-07609b4dea3f",
      end: {
        x: 2920,
        y: -3180,
      },
      endId: "c0d90f3a-4ea0-4c05-9bdd-df796f5a0a0f",
      name: "TwoWayHEdge",
      id: "83057f42-0571-44f1-ab54-51cff90402f2",
    },
    {
      start: {
        x: 2920,
        y: -3180,
      },
      startId: "c0d90f3a-4ea0-4c05-9bdd-df796f5a0a0f",
      end: {
        x: 3460,
        y: -3160,
      },
      endId: "e68a96b3-6700-490f-bad4-8c46ba3826ef",
      name: "TwoWayHEdge",
      id: "20549652-d83e-46cd-8023-b0abd83e1daa",
    },
    {
      start: {
        x: 2920,
        y: -3180,
      },
      startId: "c0d90f3a-4ea0-4c05-9bdd-df796f5a0a0f",
      end: {
        x: 2860,
        y: -3640,
      },
      endId: "52c869f4-df71-4a20-a988-34e80ebc9a38",
      name: "TwoWayVEdge",
      id: "0ac53e1e-ab4d-4f5a-a940-e8b744dc5702",
    },
    {
      start: {
        x: 1180,
        y: -1220,
      },
      startId: "d1a637de-4616-4ae8-b5de-6a337d48cf73",
      end: {
        x: 340,
        y: -1200,
      },
      endId: "64a03e01-c44b-4c3a-988e-d3fa901c6e80",
      name: "TwoWayHEdge",
      id: "e4d26b0b-fefc-4372-bbac-aab69b77efec",
    },
    {
      start: {
        x: 340,
        y: -1200,
      },
      startId: "64a03e01-c44b-4c3a-988e-d3fa901c6e80",
      end: {
        x: 300,
        y: -1700,
      },
      endId: "b331e289-0b5e-4f85-9f5f-494c51043fae",
      name: "TwoWayVEdge",
      id: "2d0df454-1cfe-45a2-80db-11b59741419d",
    },
    {
      start: {
        x: 300,
        y: -1700,
      },
      startId: "b331e289-0b5e-4f85-9f5f-494c51043fae",
      end: {
        x: 340,
        y: -2220,
      },
      endId: "56ee6693-f804-46e5-9d5e-a853122018c5",
      name: "TwoWayVEdge",
      id: "5d818379-aa6d-4b9e-85d8-57995cd4d787",
    },
    {
      start: {
        x: 340,
        y: -2220,
      },
      startId: "56ee6693-f804-46e5-9d5e-a853122018c5",
      end: {
        x: 260,
        y: -2700,
      },
      endId: "1b80329f-8fb9-48dc-904e-5900fef30273",
      name: "TwoWayVEdge",
      id: "a2541344-3c8f-49d5-9533-1b222c985a43",
    },
    {
      start: {
        x: 260,
        y: -2700,
      },
      startId: "1b80329f-8fb9-48dc-904e-5900fef30273",
      end: {
        x: 300,
        y: -3200,
      },
      endId: "d8dfbbff-8a4e-45ee-a69d-faa6a88fb71a",
      name: "TwoWayVEdge",
      id: "9e8930d0-1734-4ff7-8546-dd557f2f6217",
    },
    {
      start: {
        x: 300,
        y: -3200,
      },
      startId: "d8dfbbff-8a4e-45ee-a69d-faa6a88fb71a",
      end: {
        x: 260,
        y: -3660,
      },
      endId: "f6b53193-43f9-40e8-b733-8b90c6320f1a",
      name: "TwoWayVEdge",
      id: "0363c5c2-0267-4906-b5c6-2bb031d8f956",
    },
    {
      start: {
        x: 340,
        y: -1200,
      },
      startId: "64a03e01-c44b-4c3a-988e-d3fa901c6e80",
      end: {
        x: -400,
        y: -1240,
      },
      endId: "671273b5-4583-40a8-9899-f9087fd191d4",
      name: "TwoWayHEdge",
      id: "c3d9d4be-e317-41b9-810a-d356792821cb",
    },
    {
      start: {
        x: -400,
        y: -1240,
      },
      startId: "671273b5-4583-40a8-9899-f9087fd191d4",
      end: {
        x: -1160,
        y: -1220,
      },
      endId: "6e69a51e-75c9-4cd6-9424-437c7d45bcf8",
      name: "TwoWayHEdge",
      id: "3f417da8-c428-44ad-a130-e7746929274c",
    },
    {
      start: {
        x: -1160,
        y: -1220,
      },
      startId: "6e69a51e-75c9-4cd6-9424-437c7d45bcf8",
      end: {
        x: -1120,
        y: -1720,
      },
      endId: "e02c532c-3c5a-4845-a632-f49f5164cfe2",
      name: "TwoWayVEdge",
      id: "b6807fb0-2c0b-495b-aa25-64092774df8f",
    },
    {
      start: {
        x: -1160,
        y: -1220,
      },
      startId: "6e69a51e-75c9-4cd6-9424-437c7d45bcf8",
      end: {
        x: -1720,
        y: -1220,
      },
      endId: "f6cc6fc8-f1e7-4dac-9979-aca81608fb8d",
      name: "TwoWayHEdge",
      id: "666215ee-757c-48a1-98fb-62e8bb271f2c",
    },
    {
      start: {
        x: -1720,
        y: -1220,
      },
      startId: "f6cc6fc8-f1e7-4dac-9979-aca81608fb8d",
      end: {
        x: -1740,
        y: -1800,
      },
      endId: "eb2c25c1-bab1-4796-a323-67a5eea3edec",
      name: "TwoWayVEdge",
      id: "abd1680f-9081-4277-aead-e21b57a17580",
    },
    {
      start: {
        x: -1120,
        y: -1720,
      },
      startId: "e02c532c-3c5a-4845-a632-f49f5164cfe2",
      end: {
        x: -1140,
        y: -2240,
      },
      endId: "232d62a5-1a1d-4e90-a51c-52a5fe7f7561",
      name: "TwoWayVEdge",
      id: "7e22f02d-4aef-4b95-ad20-364780628f83",
    },
    {
      start: {
        x: -1140,
        y: -2240,
      },
      startId: "232d62a5-1a1d-4e90-a51c-52a5fe7f7561",
      end: {
        x: -1100,
        y: -2740,
      },
      endId: "6d369e03-1fac-4fb5-87a9-0687ce11767b",
      name: "TwoWayVEdge",
      id: "02251498-cb0b-493b-a6f3-3614a1d4d4ee",
    },
    {
      start: {
        x: -1100,
        y: -2740,
      },
      startId: "6d369e03-1fac-4fb5-87a9-0687ce11767b",
      end: {
        x: -1700,
        y: -2740,
      },
      endId: "ecf51442-aab0-4810-b171-77c34ae1ea11",
      name: "TwoWayHEdge",
      id: "ee0f6504-d5b6-4bb0-91bb-5f6dbcdfe875",
    },
    {
      start: {
        x: -1740,
        y: -1800,
      },
      startId: "eb2c25c1-bab1-4796-a323-67a5eea3edec",
      end: {
        x: -1700,
        y: -2740,
      },
      endId: "ecf51442-aab0-4810-b171-77c34ae1ea11",
      name: "TwoWayVEdge",
      id: "e9925c5c-2c2c-499b-9bfb-9acc75c549ce",
    },
    {
      start: {
        x: -1700,
        y: -2740,
      },
      startId: "ecf51442-aab0-4810-b171-77c34ae1ea11",
      end: {
        x: -2360,
        y: -2780,
      },
      endId: "fc57c752-6096-4618-8272-69a37bcb9c46",
      name: "TwoWayHEdge",
      id: "0b9eaa40-9af6-4767-82ed-04b5621f0af4",
    },
    {
      start: {
        x: -2360,
        y: -2780,
      },
      startId: "fc57c752-6096-4618-8272-69a37bcb9c46",
      end: {
        x: -2400,
        y: -3260,
      },
      endId: "4e0b8010-7a6c-4bdd-82ca-616d71561ac6",
      name: "TwoWayVEdge",
      id: "368a7a89-205e-4d45-af6d-a46af12d771d",
    },
    {
      start: {
        x: -2400,
        y: -3260,
      },
      startId: "4e0b8010-7a6c-4bdd-82ca-616d71561ac6",
      end: {
        x: -2300,
        y: -3720,
      },
      endId: "bc061849-1cd3-4e18-ae54-4a456550f79f",
      name: "TwoWayVEdge",
      id: "90628507-ceba-4516-8a16-1f821af3ad34",
    },
    {
      start: {
        x: -2400,
        y: -3260,
      },
      startId: "4e0b8010-7a6c-4bdd-82ca-616d71561ac6",
      end: {
        x: -2980,
        y: -3260,
      },
      endId: "cb2bc3e4-6ee3-4b14-b07e-c7a8452d5324",
      name: "TwoWayHEdge",
      id: "c3d13916-b679-4cf8-abbc-502af2168cce",
    },
    {
      start: {
        x: -2980,
        y: -3260,
      },
      startId: "cb2bc3e4-6ee3-4b14-b07e-c7a8452d5324",
      end: {
        x: -3020,
        y: -2740,
      },
      endId: "367cb6a0-ec03-4536-8b8b-cb22b59970f9",
      name: "TwoWayVEdge",
      id: "a16d17ec-f4ee-4b12-98e7-f1d9d06bec07",
    },
    {
      start: {
        x: -1720,
        y: -1220,
      },
      startId: "f6cc6fc8-f1e7-4dac-9979-aca81608fb8d",
      end: {
        x: -2320,
        y: -1220,
      },
      endId: "65b225a9-96a6-4041-b746-43a0fee3af77",
      name: "TwoWayHEdge",
      id: "3d9758ba-a57d-4cd3-b4fd-f028282202ca",
    },
    {
      start: {
        x: -2320,
        y: -1220,
      },
      startId: "65b225a9-96a6-4041-b746-43a0fee3af77",
      end: {
        x: -2840,
        y: -1220,
      },
      endId: "7d15718c-746a-4766-90b1-cbd45081f10f",
      name: "TwoWayHEdge",
      id: "27db77af-6da8-4622-bb72-39b0824ba0fa",
    },
    {
      start: {
        x: -2840,
        y: -1220,
      },
      startId: "7d15718c-746a-4766-90b1-cbd45081f10f",
      end: {
        x: -2900,
        y: -840,
      },
      endId: "4c349edf-ec43-4025-946e-cd96f71b7c95",
      name: "TwoWayVEdge",
      id: "0b5794e5-f83a-4876-99b5-4232cba2d6c0",
    },
    {
      start: {
        x: -2900,
        y: -840,
      },
      startId: "4c349edf-ec43-4025-946e-cd96f71b7c95",
      end: {
        x: -2820,
        y: -500,
      },
      endId: "40f779ed-e5a0-4cf4-8c51-67ad85d955b9",
      name: "TwoWayVEdge",
      id: "6c8ecdf1-45fb-491f-96b0-2da0e96ed96f",
    },
    {
      start: {
        x: -2820,
        y: -500,
      },
      startId: "40f779ed-e5a0-4cf4-8c51-67ad85d955b9",
      end: {
        x: -2320,
        y: -500,
      },
      endId: "6e8791ab-c473-4fa5-8436-cb0522ac57ae",
      name: "TwoWayHEdge",
      id: "d1838e2a-8995-4bdd-bbd5-b102ffd347c1",
    },
    {
      start: {
        x: -2320,
        y: -1220,
      },
      startId: "65b225a9-96a6-4041-b746-43a0fee3af77",
      end: {
        x: -2320,
        y: -500,
      },
      endId: "6e8791ab-c473-4fa5-8436-cb0522ac57ae",
      name: "TwoWayVEdge",
      id: "e8e777f0-63a7-4337-9352-64382dd570b6",
    },
    {
      start: {
        x: -2320,
        y: -500,
      },
      startId: "6e8791ab-c473-4fa5-8436-cb0522ac57ae",
      end: {
        x: -1300,
        y: -540,
      },
      endId: "1589b2a1-95b1-45f5-9366-a05a40436911",
      name: "TwoWayHEdge",
      id: "389dc352-eadb-4094-8742-89dd5d134547",
    },
    {
      start: {
        x: -1300,
        y: -540,
      },
      startId: "1589b2a1-95b1-45f5-9366-a05a40436911",
      end: {
        x: -1360,
        y: -80,
      },
      endId: "2d69e2d5-d5b4-4b73-a1d1-0d70df66fd01",
      name: "TwoWayVEdge",
      id: "ac24ff8c-69f7-44e4-807c-42a8c1643e56",
    },
    {
      start: {
        x: -1360,
        y: -80,
      },
      startId: "2d69e2d5-d5b4-4b73-a1d1-0d70df66fd01",
      end: {
        x: -1300,
        y: 320,
      },
      endId: "dd7a05d3-f46c-4c29-adc9-02b61236e9bf",
      name: "TwoWayVEdge",
      id: "3816cefa-12bf-4078-8ab9-545d701941c4",
    },
    {
      start: {
        x: -1300,
        y: 320,
      },
      startId: "dd7a05d3-f46c-4c29-adc9-02b61236e9bf",
      end: {
        x: -1940,
        y: 320,
      },
      endId: "0f5389fc-7bc5-4fab-821f-a0d0b02b37f9",
      name: "TwoWayHEdge",
      id: "2e32b1bc-bfc9-4c3d-b793-0623f2143495",
    },
    {
      start: {
        x: -1940,
        y: 320,
      },
      startId: "0f5389fc-7bc5-4fab-821f-a0d0b02b37f9",
      end: {
        x: -2500,
        y: 320,
      },
      endId: "2537c9ad-4057-4746-8d66-3e3d16693e31",
      name: "TwoWayHEdge",
      id: "24180fa5-6329-4602-818d-96fff62f454b",
    },
    {
      start: {
        x: -2500,
        y: 320,
      },
      startId: "2537c9ad-4057-4746-8d66-3e3d16693e31",
      end: {
        x: -2500,
        y: 1180,
      },
      endId: "5ab0d305-c95f-4bc0-9c03-948650d5e21c",
      name: "TwoWayVEdge",
      id: "0485e526-700b-4f22-b63f-4be6e90eea62",
    },
    {
      start: {
        x: -1940,
        y: 320,
      },
      startId: "0f5389fc-7bc5-4fab-821f-a0d0b02b37f9",
      end: {
        x: -1880,
        y: 780,
      },
      endId: "32faecc5-2b7d-4683-8c76-8d528b00322a",
      name: "TwoWayVEdge",
      id: "42e0011b-ae9d-475b-a7cf-65377ebff3d4",
    },
    {
      start: {
        x: -1880,
        y: 780,
      },
      startId: "32faecc5-2b7d-4683-8c76-8d528b00322a",
      end: {
        x: -1900,
        y: 1240,
      },
      endId: "ddd1d373-416f-4785-ae99-785875422b3a",
      name: "TwoWayVEdge",
      id: "1b48e73a-551e-4e0c-824a-4e762a4d9213",
    },
    {
      start: {
        x: -2500,
        y: 1180,
      },
      startId: "5ab0d305-c95f-4bc0-9c03-948650d5e21c",
      end: {
        x: -1900,
        y: 1240,
      },
      endId: "ddd1d373-416f-4785-ae99-785875422b3a",
      name: "TwoWayHEdge",
      id: "b926f3fe-ab0d-430e-988b-d13d3a8b6307",
    },
    {
      start: {
        x: -1880,
        y: 780,
      },
      startId: "32faecc5-2b7d-4683-8c76-8d528b00322a",
      end: {
        x: -1180,
        y: 760,
      },
      endId: "e0731ba1-8f79-4fc0-bec0-af57d0a06456",
      name: "TwoWayHEdge",
      id: "131e15dd-4cf9-4c0e-a34c-c1158f3e343f",
    },
    {
      start: {
        x: -1180,
        y: 760,
      },
      startId: "e0731ba1-8f79-4fc0-bec0-af57d0a06456",
      end: {
        x: -1180,
        y: 1200,
      },
      endId: "d8565415-b9ee-445e-ba6c-37ec31141120",
      name: "TwoWayVEdge",
      id: "b7470ca0-f15d-479c-8bc6-7ef265ae3d98",
    },
    {
      start: {
        x: 920,
        y: 1200,
      },
      startId: "a21fc899-6a29-4195-a7ee-04473014ff28",
      end: {
        x: -160,
        y: 1240,
      },
      endId: "2186eb8a-be3a-43b7-8001-0cfe426d4495",
      name: "TwoWayHEdge",
      id: "5bda1494-303d-4ece-a723-aa537c3ca10c",
    },
    {
      start: {
        x: -160,
        y: 1240,
      },
      startId: "2186eb8a-be3a-43b7-8001-0cfe426d4495",
      end: {
        x: -1180,
        y: 1200,
      },
      endId: "d8565415-b9ee-445e-ba6c-37ec31141120",
      name: "TwoWayHEdge",
      id: "5ae1a9dd-e838-4aa2-ac28-7c4e95a2ace8",
    },
    {
      start: {
        x: 3180,
        y: -660,
      },
      startId: "0c1df5d2-5130-49d0-adf1-8236eb2c6159",
      end: {
        x: 3120,
        y: -80,
      },
      endId: "31b2981f-a221-4bc5-9764-dd0f50d74ee8",
      name: "TwoWayVEdge",
      id: "7f98d752-0723-49e9-b3cf-7d5c1f05f2d0",
    },
    {
      start: {
        x: 3120,
        y: -80,
      },
      startId: "31b2981f-a221-4bc5-9764-dd0f50d74ee8",
      end: {
        x: 3120,
        y: 460,
      },
      endId: "a6238586-aaf6-40a1-bfb3-a92e4621e320",
      name: "TwoWayVEdge",
      id: "a61f8fe6-e1db-4bb1-bac3-83c4b97bf780",
    },
    {
      start: {
        x: 3120,
        y: 460,
      },
      startId: "a6238586-aaf6-40a1-bfb3-a92e4621e320",
      end: {
        x: 2500,
        y: 460,
      },
      endId: "68a9fb6c-6637-42a2-a67b-020006be090e",
      name: "TwoWayHEdge",
      id: "cd5b1f0c-80b7-46ce-90b1-1d647270c663",
    },
  ],
};
export default africaCaveB2;
