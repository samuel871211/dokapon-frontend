import type { GraphJSON } from "global";

const arcticCaveB3Map: GraphJSON = {
  vertices: [
    {
      position: {
        x: 4840,
        y: 2800,
      },
      name: "BattleField",
      id: "a99cb1ff-5d22-4386-8b74-f63e03c6139e",
      edges: [
        "ca15e065-af2a-4c7d-af2a-e77334dc9c4f",
        "5532d476-9b8e-43e1-98e0-e557ef1b607c",
        "3ba8e477-e5b9-4cf3-b1ea-8b0f677791f3",
      ],
      area: "ArcticCaveB3",
      bottom: "7b777bbf-3d4f-4edd-aecf-f33e71e9dbc3",
      top: "7e89ed2c-30dc-4ae9-8a70-1d29555d57f3",
      right: "cf35a1a6-5653-4266-9014-e90080445126",
    },
    {
      id: "7b777bbf-3d4f-4edd-aecf-f33e71e9dbc3",
      name: "CaveField",
      position: {
        x: 4800,
        y: 3300,
      },
      edges: ["ca15e065-af2a-4c7d-af2a-e77334dc9c4f"],
      area: "ArcticCaveB3",
      top: "a99cb1ff-5d22-4386-8b74-f63e03c6139e",
    },
    {
      id: "7e89ed2c-30dc-4ae9-8a70-1d29555d57f3",
      name: "MagicBookField",
      position: {
        x: 4800,
        y: 2360,
      },
      edges: [
        "5532d476-9b8e-43e1-98e0-e557ef1b607c",
        "dd0fdf9c-3bb3-4a91-8822-31c81816b6cf",
        "cdcd69a4-2bba-41e8-8e0f-8411cfa85f0c",
      ],
      area: "ArcticCaveB3",
      bottom: "a99cb1ff-5d22-4386-8b74-f63e03c6139e",
      right: "63d33586-064b-42a6-9eb5-85215e78f13f",
      top: "cf425331-67aa-4025-bc00-74c5b1c14da8",
    },
    {
      id: "63d33586-064b-42a6-9eb5-85215e78f13f",
      name: "BattleField",
      position: {
        x: 5340,
        y: 2320,
      },
      edges: [
        "dd0fdf9c-3bb3-4a91-8822-31c81816b6cf",
        "c729b852-aaf9-4a08-82f6-89a69dd22e3c",
      ],
      area: "ArcticCaveB3",
      left: "7e89ed2c-30dc-4ae9-8a70-1d29555d57f3",
      right: "44671884-0c81-4808-ba8f-714958b8f05b",
    },
    {
      id: "44671884-0c81-4808-ba8f-714958b8f05b",
      name: "TreasureField",
      position: {
        x: 5880,
        y: 2360,
      },
      edges: [
        "c729b852-aaf9-4a08-82f6-89a69dd22e3c",
        "654e4baf-5cc4-4ecd-a5fe-bdf972d0c2e8",
      ],
      area: "ArcticCaveB3",
      left: "63d33586-064b-42a6-9eb5-85215e78f13f",
      bottom: "cf35a1a6-5653-4266-9014-e90080445126",
    },
    {
      id: "cf35a1a6-5653-4266-9014-e90080445126",
      name: "BattleField",
      position: {
        x: 5840,
        y: 2800,
      },
      edges: [
        "654e4baf-5cc4-4ecd-a5fe-bdf972d0c2e8",
        "3ba8e477-e5b9-4cf3-b1ea-8b0f677791f3",
      ],
      area: "ArcticCaveB3",
      top: "44671884-0c81-4808-ba8f-714958b8f05b",
      left: "a99cb1ff-5d22-4386-8b74-f63e03c6139e",
    },
    {
      id: "cf425331-67aa-4025-bc00-74c5b1c14da8",
      name: "BattleField",
      position: {
        x: 4860,
        y: 1920,
      },
      edges: [
        "cdcd69a4-2bba-41e8-8e0f-8411cfa85f0c",
        "69ca5dbd-51fc-40df-b9ae-afe0466770ef",
      ],
      area: "ArcticCaveB3",
      bottom: "7e89ed2c-30dc-4ae9-8a70-1d29555d57f3",
      top: "ee28ffd3-2208-4073-8574-b7b9ab4d5a2a",
    },
    {
      id: "ee28ffd3-2208-4073-8574-b7b9ab4d5a2a",
      name: "RedTreasureField",
      position: {
        x: 4800,
        y: 1500,
      },
      edges: [
        "69ca5dbd-51fc-40df-b9ae-afe0466770ef",
        "0c9110c5-e5c5-46bc-b176-3df7fee91839",
      ],
      area: "ArcticCaveB3",
      bottom: "cf425331-67aa-4025-bc00-74c5b1c14da8",
      right: "429e50cb-f243-4ba6-9d0a-cbc618b4cad8",
    },
    {
      id: "429e50cb-f243-4ba6-9d0a-cbc618b4cad8",
      name: "BattleField",
      position: {
        x: 5340,
        y: 1480,
      },
      edges: [
        "0c9110c5-e5c5-46bc-b176-3df7fee91839",
        "ba2e631b-4157-421b-9402-226fe01bc746",
        "1bdad161-1ec1-4dea-bb75-e603ab2afd42",
      ],
      area: "ArcticCaveB3",
      left: "ee28ffd3-2208-4073-8574-b7b9ab4d5a2a",
      right: "9813a974-074d-4766-8fe8-f8c0a1dabdbd",
      top: "0116e056-cdd3-47df-b5b3-cd63f5d1cc45",
    },
    {
      id: "9813a974-074d-4766-8fe8-f8c0a1dabdbd",
      name: "TreasureField",
      position: {
        x: 5880,
        y: 1500,
      },
      edges: [
        "ba2e631b-4157-421b-9402-226fe01bc746",
        "08e1ec98-be53-48c4-b380-a1debfe5de19",
      ],
      area: "ArcticCaveB3",
      left: "429e50cb-f243-4ba6-9d0a-cbc618b4cad8",
      top: "840e79bc-490b-4b14-a906-26ccaeb2dfc5",
    },
    {
      id: "840e79bc-490b-4b14-a906-26ccaeb2dfc5",
      name: "DamageField",
      position: {
        x: 5920,
        y: 1060,
      },
      edges: [
        "08e1ec98-be53-48c4-b380-a1debfe5de19",
        "4542b17d-cd76-4dba-81e4-bcbcad484e91",
      ],
      area: "ArcticCaveB3",
      bottom: "9813a974-074d-4766-8fe8-f8c0a1dabdbd",
      top: "2ac4c4f9-54bc-4829-a9f2-62ecc8df9f67",
    },
    {
      id: "2ac4c4f9-54bc-4829-a9f2-62ecc8df9f67",
      name: "TreasureField",
      position: {
        x: 5860,
        y: 600,
      },
      edges: [
        "4542b17d-cd76-4dba-81e4-bcbcad484e91",
        "d9852bbf-1dbd-4130-a987-cd9d1fa0dc8e",
      ],
      area: "ArcticCaveB3",
      bottom: "840e79bc-490b-4b14-a906-26ccaeb2dfc5",
      left: "0116e056-cdd3-47df-b5b3-cd63f5d1cc45",
    },
    {
      id: "0116e056-cdd3-47df-b5b3-cd63f5d1cc45",
      name: "DamageField",
      position: {
        x: 5220,
        y: 620,
      },
      edges: [
        "1bdad161-1ec1-4dea-bb75-e603ab2afd42",
        "d9852bbf-1dbd-4130-a987-cd9d1fa0dc8e",
        "47f7024a-5230-4c54-a85e-38010261dec8",
      ],
      area: "ArcticCaveB3",
      bottom: "429e50cb-f243-4ba6-9d0a-cbc618b4cad8",
      right: "2ac4c4f9-54bc-4829-a9f2-62ecc8df9f67",
      left: "e36e4ede-18f0-4c1b-9809-c0396c22a3ed",
    },
    {
      id: "e36e4ede-18f0-4c1b-9809-c0396c22a3ed",
      name: "DamageField",
      position: {
        x: 4480,
        y: 580,
      },
      edges: [
        "47f7024a-5230-4c54-a85e-38010261dec8",
        "beb7eaab-65fa-4d55-bd07-9bfc5de6e964",
      ],
      area: "ArcticCaveB3",
      right: "0116e056-cdd3-47df-b5b3-cd63f5d1cc45",
      left: "27543754-ccd8-45a0-80e0-83507356c78a",
    },
    {
      id: "27543754-ccd8-45a0-80e0-83507356c78a",
      name: "BattleField",
      position: {
        x: 3760,
        y: 600,
      },
      edges: [
        "beb7eaab-65fa-4d55-bd07-9bfc5de6e964",
        "5f8c8ef9-7f25-4e1d-a771-9c129a834035",
        "76c36cfd-00e2-4d48-b1a4-aeda2f25d96a",
      ],
      area: "ArcticCaveB3",
      right: "e36e4ede-18f0-4c1b-9809-c0396c22a3ed",
      left: "d7dae1d6-951a-4151-9803-be97fce28688",
      bottom: "b9abb6e4-b4f5-4acd-9eba-075ca9c3749f",
    },
    {
      id: "d7dae1d6-951a-4151-9803-be97fce28688",
      name: "BattleField",
      position: {
        x: 3060,
        y: 580,
      },
      edges: ["5f8c8ef9-7f25-4e1d-a771-9c129a834035"],
      area: "ArcticCaveB3",
      right: "27543754-ccd8-45a0-80e0-83507356c78a",
    },
    {
      id: "b9abb6e4-b4f5-4acd-9eba-075ca9c3749f",
      name: "BattleField",
      position: {
        x: 3740,
        y: 1020,
      },
      edges: [
        "76c36cfd-00e2-4d48-b1a4-aeda2f25d96a",
        "b77ee38d-56ea-4fa6-b2c6-14dfdbac2ce1",
      ],
      area: "ArcticCaveB3",
      top: "27543754-ccd8-45a0-80e0-83507356c78a",
      left: "994f751c-5875-4523-98ab-cf6e5921065f",
    },
    {
      id: "994f751c-5875-4523-98ab-cf6e5921065f",
      name: "BattleField",
      position: {
        x: 2160,
        y: 1020,
      },
      edges: [
        "b77ee38d-56ea-4fa6-b2c6-14dfdbac2ce1",
        "5fb415f0-6194-4cd9-a852-fc63c0361e93",
        "89436658-b758-44f0-aa09-4ca1e9aa303c",
      ],
      area: "ArcticCaveB3",
      right: "b9abb6e4-b4f5-4acd-9eba-075ca9c3749f",
      left: "b509860d-5083-4013-837a-7d98fa6dd99a",
      top: "b800c14c-be57-4b54-86d9-2a57148578b6",
    },
    {
      id: "b509860d-5083-4013-837a-7d98fa6dd99a",
      name: "TreasureField",
      position: {
        x: 1600,
        y: 1040,
      },
      edges: [
        "5fb415f0-6194-4cd9-a852-fc63c0361e93",
        "8869f31c-b98f-44c1-b606-9b5419f5b134",
      ],
      area: "ArcticCaveB3",
      right: "994f751c-5875-4523-98ab-cf6e5921065f",
      top: "7ed5dd6a-550e-4956-9663-c6b5fa07d1f6",
    },
    {
      id: "7ed5dd6a-550e-4956-9663-c6b5fa07d1f6",
      name: "DamageField",
      position: {
        x: 1560,
        y: 80,
      },
      edges: [
        "8869f31c-b98f-44c1-b606-9b5419f5b134",
        "38e52e10-4045-41f2-a5bf-9b2ab6381074",
        "8aaee050-7431-42b4-87e1-17c110d36921",
      ],
      area: "ArcticCaveB3",
      bottom: "b509860d-5083-4013-837a-7d98fa6dd99a",
      right: "996242bb-70be-4131-a183-081146ad4008",
      left: "ca06c25d-9d56-4300-8780-04a68eb86a22",
    },
    {
      id: "996242bb-70be-4131-a183-081146ad4008",
      name: "BattleField",
      position: {
        x: 2260,
        y: 80,
      },
      edges: [
        "ba21c592-9433-4cd3-93c8-3f35a2b09ea7",
        "feacb8d6-f379-4f97-8f0e-0aa4dc69265a",
        "38e52e10-4045-41f2-a5bf-9b2ab6381074",
        "3e8bae10-de06-4b38-b498-f979e01dd8e6",
      ],
      area: "ArcticCaveB3",
      left: "7ed5dd6a-550e-4956-9663-c6b5fa07d1f6",
      bottom: "b800c14c-be57-4b54-86d9-2a57148578b6",
      right: "acf6dd1a-56d7-4d66-bce1-0156a5af6372",
    },
    {
      id: "b800c14c-be57-4b54-86d9-2a57148578b6",
      name: "BattleField",
      position: {
        x: 2120,
        y: 560,
      },
      edges: [
        "feacb8d6-f379-4f97-8f0e-0aa4dc69265a",
        "89436658-b758-44f0-aa09-4ca1e9aa303c",
      ],
      area: "ArcticCaveB3",
      top: "feacb8d6-f379-4f97-8f0e-0aa4dc69265a",
      bottom: "994f751c-5875-4523-98ab-cf6e5921065f",
    },
    {
      id: "acf6dd1a-56d7-4d66-bce1-0156a5af6372",
      name: "BattleField",
      position: {
        x: 2960,
        y: 80,
      },
      edges: ["3e8bae10-de06-4b38-b498-f979e01dd8e6"],
      area: "ArcticCaveB3",
      left: "996242bb-70be-4131-a183-081146ad4008",
    },
    {
      id: "ca06c25d-9d56-4300-8780-04a68eb86a22",
      name: "RedTreasureField",
      position: {
        x: 820,
        y: 40,
      },
      edges: [
        "8aaee050-7431-42b4-87e1-17c110d36921",
        "6cd66938-6834-4805-9091-f91f20152d66",
      ],
      area: "ArcticCaveB3",
      right: "7ed5dd6a-550e-4956-9663-c6b5fa07d1f6",
      left: "a5a32740-ee2b-4906-a493-618464ff0957",
    },
    {
      id: "a5a32740-ee2b-4906-a493-618464ff0957",
      name: "BattleField",
      position: {
        x: 120,
        y: 60,
      },
      edges: [
        "6cd66938-6834-4805-9091-f91f20152d66",
        "65b35c90-ac72-4a25-925a-a329b781e921",
      ],
      area: "ArcticCaveB3",
      right: "ca06c25d-9d56-4300-8780-04a68eb86a22",
      bottom: "9439b148-13c4-4efa-80e3-6202fbb23f67",
    },
    {
      id: "9439b148-13c4-4efa-80e3-6202fbb23f67",
      name: "DamageField",
      position: {
        x: 40,
        y: 740,
      },
      edges: [
        "65b35c90-ac72-4a25-925a-a329b781e921",
        "3bcffc32-7db9-4c5f-84c5-6debde81b60a",
      ],
      area: "ArcticCaveB3",
      top: "a5a32740-ee2b-4906-a493-618464ff0957",
      bottom: "8add5ff3-fac1-4bdb-8454-1aeaeed59e55",
    },
    {
      id: "8add5ff3-fac1-4bdb-8454-1aeaeed59e55",
      name: "BattleField",
      position: {
        x: 140,
        y: 1440,
      },
      edges: [
        "3bcffc32-7db9-4c5f-84c5-6debde81b60a",
        "bd6fdd89-3315-4849-a5af-bc28372a6601",
      ],
      area: "ArcticCaveB3",
      top: "9439b148-13c4-4efa-80e3-6202fbb23f67",
      right: "3528a5ba-a27f-4a3a-b7c9-e96cdf2ff7c2",
    },
    {
      id: "3528a5ba-a27f-4a3a-b7c9-e96cdf2ff7c2",
      name: "DamageField",
      position: {
        x: 640,
        y: 1460,
      },
      edges: [
        "bd6fdd89-3315-4849-a5af-bc28372a6601",
        "e0c42cf3-e8af-4e35-822e-211b6e037216",
        "be5d2906-aad4-4365-8f5b-dd0b8f788ee1",
      ],
      area: "ArcticCaveB3",
      left: "8add5ff3-fac1-4bdb-8454-1aeaeed59e55",
      top: "423384ae-f0b0-4139-8aae-deeee8ff4f00",
      bottom: "ef705169-ccfb-41d1-92cd-9a458b2f2c69",
    },
    {
      id: "423384ae-f0b0-4139-8aae-deeee8ff4f00",
      name: "TreasureField",
      position: {
        x: 680,
        y: 1020,
      },
      edges: [
        "e0c42cf3-e8af-4e35-822e-211b6e037216",
        "f43c293f-a06a-4f59-917b-d1932bbd348d",
      ],
      area: "ArcticCaveB3",
      bottom: "3528a5ba-a27f-4a3a-b7c9-e96cdf2ff7c2",
      right: "0380e95e-c38e-43e7-b9f0-48f50a33d06c",
    },
    {
      id: "0380e95e-c38e-43e7-b9f0-48f50a33d06c",
      name: "BattleField",
      position: {
        x: 1260,
        y: 1020,
      },
      edges: [
        "f43c293f-a06a-4f59-917b-d1932bbd348d",
        "b143cba2-a6fb-481a-8b62-6b632417e987",
      ],
      area: "ArcticCaveB3",
      left: "423384ae-f0b0-4139-8aae-deeee8ff4f00",
      bottom: "303bbb50-5161-4f19-a83c-2b7f631d4723",
    },
    {
      id: "ef705169-ccfb-41d1-92cd-9a458b2f2c69",
      name: "BattleField",
      position: {
        x: 720,
        y: 1900,
      },
      edges: [
        "be5d2906-aad4-4365-8f5b-dd0b8f788ee1",
        "2130248f-d69c-467e-9855-db4eb3102aea",
      ],
      area: "ArcticCaveB3",
      top: "3528a5ba-a27f-4a3a-b7c9-e96cdf2ff7c2",
      right: "303bbb50-5161-4f19-a83c-2b7f631d4723",
    },
    {
      id: "303bbb50-5161-4f19-a83c-2b7f631d4723",
      name: "TreasureField",
      position: {
        x: 1240,
        y: 1860,
      },
      edges: [
        "b143cba2-a6fb-481a-8b62-6b632417e987",
        "2130248f-d69c-467e-9855-db4eb3102aea",
        "7b7de4f2-55b7-4c8c-bd08-c1cc0cf6a084",
      ],
      area: "ArcticCaveB3",
      top: "0380e95e-c38e-43e7-b9f0-48f50a33d06c",
      left: "ef705169-ccfb-41d1-92cd-9a458b2f2c69",
      bottom: "87bd5f67-ff6f-48e5-9c27-0f826c92a1b4",
    },
    {
      id: "87bd5f67-ff6f-48e5-9c27-0f826c92a1b4",
      name: "BattleField",
      position: {
        x: 1300,
        y: 2300,
      },
      edges: [
        "7b7de4f2-55b7-4c8c-bd08-c1cc0cf6a084",
        "4d21890c-1ab1-4aee-8383-ddd631f3c3d2",
      ],
      area: "ArcticCaveB3",
      top: "303bbb50-5161-4f19-a83c-2b7f631d4723",
      bottom: "1c1097cb-4784-4bbd-994f-94ebbb5f2643",
    },
    {
      id: "1c1097cb-4784-4bbd-994f-94ebbb5f2643",
      name: "TreasureField",
      position: {
        x: 1260,
        y: 2740,
      },
      edges: [
        "4d21890c-1ab1-4aee-8383-ddd631f3c3d2",
        "a312de76-5384-4794-92a7-124de400af9e",
      ],
      area: "ArcticCaveB3",
      top: "87bd5f67-ff6f-48e5-9c27-0f826c92a1b4",
      bottom: "9c54e51c-e431-42a3-84d8-d7bcd7cd943c",
    },
    {
      id: "9c54e51c-e431-42a3-84d8-d7bcd7cd943c",
      name: "CaveField",
      position: {
        x: 1340,
        y: 3160,
      },
      edges: ["a312de76-5384-4794-92a7-124de400af9e"],
      area: "ArcticCaveB3",
      top: "1c1097cb-4784-4bbd-994f-94ebbb5f2643",
    },
  ],
  edges: [
    {
      start: {
        x: 4840,
        y: 2800,
      },
      startId: "a99cb1ff-5d22-4386-8b74-f63e03c6139e",
      end: {
        x: 4800,
        y: 3300,
      },
      endId: "7b777bbf-3d4f-4edd-aecf-f33e71e9dbc3",
      name: "TwoWayVEdge",
      id: "ca15e065-af2a-4c7d-af2a-e77334dc9c4f",
    },
    {
      start: {
        x: 4840,
        y: 2800,
      },
      startId: "a99cb1ff-5d22-4386-8b74-f63e03c6139e",
      end: {
        x: 4800,
        y: 2360,
      },
      endId: "7e89ed2c-30dc-4ae9-8a70-1d29555d57f3",
      name: "TwoWayVEdge",
      id: "5532d476-9b8e-43e1-98e0-e557ef1b607c",
    },
    {
      start: {
        x: 4800,
        y: 2360,
      },
      startId: "7e89ed2c-30dc-4ae9-8a70-1d29555d57f3",
      end: {
        x: 5340,
        y: 2320,
      },
      endId: "63d33586-064b-42a6-9eb5-85215e78f13f",
      name: "TwoWayHEdge",
      id: "dd0fdf9c-3bb3-4a91-8822-31c81816b6cf",
    },
    {
      start: {
        x: 5340,
        y: 2320,
      },
      startId: "63d33586-064b-42a6-9eb5-85215e78f13f",
      end: {
        x: 5880,
        y: 2360,
      },
      endId: "44671884-0c81-4808-ba8f-714958b8f05b",
      name: "TwoWayHEdge",
      id: "c729b852-aaf9-4a08-82f6-89a69dd22e3c",
    },
    {
      start: {
        x: 5880,
        y: 2360,
      },
      startId: "44671884-0c81-4808-ba8f-714958b8f05b",
      end: {
        x: 5840,
        y: 2800,
      },
      endId: "cf35a1a6-5653-4266-9014-e90080445126",
      name: "TwoWayVEdge",
      id: "654e4baf-5cc4-4ecd-a5fe-bdf972d0c2e8",
    },
    {
      start: {
        x: 4840,
        y: 2800,
      },
      startId: "a99cb1ff-5d22-4386-8b74-f63e03c6139e",
      end: {
        x: 5840,
        y: 2800,
      },
      endId: "cf35a1a6-5653-4266-9014-e90080445126",
      name: "TwoWayHEdge",
      id: "3ba8e477-e5b9-4cf3-b1ea-8b0f677791f3",
    },
    {
      start: {
        x: 4800,
        y: 2360,
      },
      startId: "7e89ed2c-30dc-4ae9-8a70-1d29555d57f3",
      end: {
        x: 4860,
        y: 1920,
      },
      endId: "cf425331-67aa-4025-bc00-74c5b1c14da8",
      name: "TwoWayVEdge",
      id: "cdcd69a4-2bba-41e8-8e0f-8411cfa85f0c",
    },
    {
      start: {
        x: 4860,
        y: 1920,
      },
      startId: "cf425331-67aa-4025-bc00-74c5b1c14da8",
      end: {
        x: 4800,
        y: 1500,
      },
      endId: "ee28ffd3-2208-4073-8574-b7b9ab4d5a2a",
      name: "TwoWayVEdge",
      id: "69ca5dbd-51fc-40df-b9ae-afe0466770ef",
    },
    {
      start: {
        x: 4800,
        y: 1500,
      },
      startId: "ee28ffd3-2208-4073-8574-b7b9ab4d5a2a",
      end: {
        x: 5340,
        y: 1480,
      },
      endId: "429e50cb-f243-4ba6-9d0a-cbc618b4cad8",
      name: "TwoWayHEdge",
      id: "0c9110c5-e5c5-46bc-b176-3df7fee91839",
    },
    {
      start: {
        x: 5340,
        y: 1480,
      },
      startId: "429e50cb-f243-4ba6-9d0a-cbc618b4cad8",
      end: {
        x: 5880,
        y: 1500,
      },
      endId: "9813a974-074d-4766-8fe8-f8c0a1dabdbd",
      name: "TwoWayHEdge",
      id: "ba2e631b-4157-421b-9402-226fe01bc746",
    },
    {
      start: {
        x: 5880,
        y: 1500,
      },
      startId: "9813a974-074d-4766-8fe8-f8c0a1dabdbd",
      end: {
        x: 5920,
        y: 1060,
      },
      endId: "840e79bc-490b-4b14-a906-26ccaeb2dfc5",
      name: "TwoWayVEdge",
      id: "08e1ec98-be53-48c4-b380-a1debfe5de19",
    },
    {
      start: {
        x: 5920,
        y: 1060,
      },
      startId: "840e79bc-490b-4b14-a906-26ccaeb2dfc5",
      end: {
        x: 5860,
        y: 600,
      },
      endId: "2ac4c4f9-54bc-4829-a9f2-62ecc8df9f67",
      name: "TwoWayVEdge",
      id: "4542b17d-cd76-4dba-81e4-bcbcad484e91",
    },
    {
      start: {
        x: 5340,
        y: 1480,
      },
      startId: "429e50cb-f243-4ba6-9d0a-cbc618b4cad8",
      end: {
        x: 5220,
        y: 620,
      },
      endId: "0116e056-cdd3-47df-b5b3-cd63f5d1cc45",
      name: "TwoWayVEdge",
      id: "1bdad161-1ec1-4dea-bb75-e603ab2afd42",
    },
    {
      start: {
        x: 5220,
        y: 620,
      },
      startId: "0116e056-cdd3-47df-b5b3-cd63f5d1cc45",
      end: {
        x: 5860,
        y: 600,
      },
      endId: "2ac4c4f9-54bc-4829-a9f2-62ecc8df9f67",
      name: "TwoWayHEdge",
      id: "d9852bbf-1dbd-4130-a987-cd9d1fa0dc8e",
    },
    {
      start: {
        x: 5220,
        y: 620,
      },
      startId: "0116e056-cdd3-47df-b5b3-cd63f5d1cc45",
      end: {
        x: 4480,
        y: 580,
      },
      endId: "e36e4ede-18f0-4c1b-9809-c0396c22a3ed",
      name: "TwoWayHEdge",
      id: "47f7024a-5230-4c54-a85e-38010261dec8",
    },
    {
      start: {
        x: 4480,
        y: 580,
      },
      startId: "e36e4ede-18f0-4c1b-9809-c0396c22a3ed",
      end: {
        x: 3760,
        y: 600,
      },
      endId: "27543754-ccd8-45a0-80e0-83507356c78a",
      name: "TwoWayHEdge",
      id: "beb7eaab-65fa-4d55-bd07-9bfc5de6e964",
    },
    {
      start: {
        x: 3760,
        y: 600,
      },
      startId: "27543754-ccd8-45a0-80e0-83507356c78a",
      end: {
        x: 3060,
        y: 580,
      },
      endId: "d7dae1d6-951a-4151-9803-be97fce28688",
      name: "TwoWayHEdge",
      id: "5f8c8ef9-7f25-4e1d-a771-9c129a834035",
    },
    {
      start: {
        x: 3760,
        y: 600,
      },
      startId: "27543754-ccd8-45a0-80e0-83507356c78a",
      end: {
        x: 3740,
        y: 1020,
      },
      endId: "b9abb6e4-b4f5-4acd-9eba-075ca9c3749f",
      name: "TwoWayVEdge",
      id: "76c36cfd-00e2-4d48-b1a4-aeda2f25d96a",
    },
    {
      start: {
        x: 3740,
        y: 1020,
      },
      startId: "b9abb6e4-b4f5-4acd-9eba-075ca9c3749f",
      end: {
        x: 2160,
        y: 1020,
      },
      endId: "994f751c-5875-4523-98ab-cf6e5921065f",
      name: "TwoWayHEdge",
      id: "b77ee38d-56ea-4fa6-b2c6-14dfdbac2ce1",
    },
    {
      start: {
        x: 2160,
        y: 1020,
      },
      startId: "994f751c-5875-4523-98ab-cf6e5921065f",
      end: {
        x: 1600,
        y: 1040,
      },
      endId: "b509860d-5083-4013-837a-7d98fa6dd99a",
      name: "TwoWayHEdge",
      id: "5fb415f0-6194-4cd9-a852-fc63c0361e93",
    },
    {
      start: {
        x: 1600,
        y: 1040,
      },
      startId: "b509860d-5083-4013-837a-7d98fa6dd99a",
      end: {
        x: 1560,
        y: 80,
      },
      endId: "7ed5dd6a-550e-4956-9663-c6b5fa07d1f6",
      name: "TwoWayVEdge",
      id: "8869f31c-b98f-44c1-b606-9b5419f5b134",
    },
    {
      start: {
        x: 2260,
        y: 80,
      },
      startId: "996242bb-70be-4131-a183-081146ad4008",
      end: {
        x: 2120,
        y: 560,
      },
      endId: "b800c14c-be57-4b54-86d9-2a57148578b6",
      name: "TwoWayVEdge",
      id: "feacb8d6-f379-4f97-8f0e-0aa4dc69265a",
    },
    {
      start: {
        x: 2120,
        y: 560,
      },
      startId: "b800c14c-be57-4b54-86d9-2a57148578b6",
      end: {
        x: 2160,
        y: 1020,
      },
      endId: "994f751c-5875-4523-98ab-cf6e5921065f",
      name: "TwoWayVEdge",
      id: "89436658-b758-44f0-aa09-4ca1e9aa303c",
    },
    {
      start: {
        x: 1560,
        y: 80,
      },
      startId: "7ed5dd6a-550e-4956-9663-c6b5fa07d1f6",
      end: {
        x: 2260,
        y: 80,
      },
      endId: "996242bb-70be-4131-a183-081146ad4008",
      name: "TwoWayHEdge",
      id: "38e52e10-4045-41f2-a5bf-9b2ab6381074",
    },
    {
      start: {
        x: 2260,
        y: 80,
      },
      startId: "996242bb-70be-4131-a183-081146ad4008",
      end: {
        x: 2960,
        y: 80,
      },
      endId: "acf6dd1a-56d7-4d66-bce1-0156a5af6372",
      name: "TwoWayHEdge",
      id: "3e8bae10-de06-4b38-b498-f979e01dd8e6",
    },
    {
      start: {
        x: 1560,
        y: 80,
      },
      startId: "7ed5dd6a-550e-4956-9663-c6b5fa07d1f6",
      end: {
        x: 820,
        y: 40,
      },
      endId: "ca06c25d-9d56-4300-8780-04a68eb86a22",
      name: "TwoWayHEdge",
      id: "8aaee050-7431-42b4-87e1-17c110d36921",
    },
    {
      start: {
        x: 820,
        y: 40,
      },
      startId: "ca06c25d-9d56-4300-8780-04a68eb86a22",
      end: {
        x: 120,
        y: 60,
      },
      endId: "a5a32740-ee2b-4906-a493-618464ff0957",
      name: "TwoWayHEdge",
      id: "6cd66938-6834-4805-9091-f91f20152d66",
    },
    {
      start: {
        x: 120,
        y: 60,
      },
      startId: "a5a32740-ee2b-4906-a493-618464ff0957",
      end: {
        x: 40,
        y: 740,
      },
      endId: "9439b148-13c4-4efa-80e3-6202fbb23f67",
      name: "TwoWayVEdge",
      id: "65b35c90-ac72-4a25-925a-a329b781e921",
    },
    {
      start: {
        x: 40,
        y: 740,
      },
      startId: "9439b148-13c4-4efa-80e3-6202fbb23f67",
      end: {
        x: 140,
        y: 1440,
      },
      endId: "8add5ff3-fac1-4bdb-8454-1aeaeed59e55",
      name: "TwoWayVEdge",
      id: "3bcffc32-7db9-4c5f-84c5-6debde81b60a",
    },
    {
      start: {
        x: 140,
        y: 1440,
      },
      startId: "8add5ff3-fac1-4bdb-8454-1aeaeed59e55",
      end: {
        x: 640,
        y: 1460,
      },
      endId: "3528a5ba-a27f-4a3a-b7c9-e96cdf2ff7c2",
      name: "TwoWayHEdge",
      id: "bd6fdd89-3315-4849-a5af-bc28372a6601",
    },
    {
      start: {
        x: 640,
        y: 1460,
      },
      startId: "3528a5ba-a27f-4a3a-b7c9-e96cdf2ff7c2",
      end: {
        x: 680,
        y: 1020,
      },
      endId: "423384ae-f0b0-4139-8aae-deeee8ff4f00",
      name: "TwoWayVEdge",
      id: "e0c42cf3-e8af-4e35-822e-211b6e037216",
    },
    {
      start: {
        x: 680,
        y: 1020,
      },
      startId: "423384ae-f0b0-4139-8aae-deeee8ff4f00",
      end: {
        x: 1260,
        y: 1020,
      },
      endId: "0380e95e-c38e-43e7-b9f0-48f50a33d06c",
      name: "TwoWayHEdge",
      id: "f43c293f-a06a-4f59-917b-d1932bbd348d",
    },
    {
      start: {
        x: 640,
        y: 1460,
      },
      startId: "3528a5ba-a27f-4a3a-b7c9-e96cdf2ff7c2",
      end: {
        x: 720,
        y: 1900,
      },
      endId: "ef705169-ccfb-41d1-92cd-9a458b2f2c69",
      name: "TwoWayVEdge",
      id: "be5d2906-aad4-4365-8f5b-dd0b8f788ee1",
    },
    {
      start: {
        x: 1260,
        y: 1020,
      },
      startId: "0380e95e-c38e-43e7-b9f0-48f50a33d06c",
      end: {
        x: 1240,
        y: 1860,
      },
      endId: "303bbb50-5161-4f19-a83c-2b7f631d4723",
      name: "TwoWayVEdge",
      id: "b143cba2-a6fb-481a-8b62-6b632417e987",
    },
    {
      start: {
        x: 1240,
        y: 1860,
      },
      startId: "303bbb50-5161-4f19-a83c-2b7f631d4723",
      end: {
        x: 720,
        y: 1900,
      },
      endId: "ef705169-ccfb-41d1-92cd-9a458b2f2c69",
      name: "TwoWayHEdge",
      id: "2130248f-d69c-467e-9855-db4eb3102aea",
    },
    {
      start: {
        x: 1240,
        y: 1860,
      },
      startId: "303bbb50-5161-4f19-a83c-2b7f631d4723",
      end: {
        x: 1300,
        y: 2300,
      },
      endId: "87bd5f67-ff6f-48e5-9c27-0f826c92a1b4",
      name: "TwoWayVEdge",
      id: "7b7de4f2-55b7-4c8c-bd08-c1cc0cf6a084",
    },
    {
      start: {
        x: 1300,
        y: 2300,
      },
      startId: "87bd5f67-ff6f-48e5-9c27-0f826c92a1b4",
      end: {
        x: 1260,
        y: 2740,
      },
      endId: "1c1097cb-4784-4bbd-994f-94ebbb5f2643",
      name: "TwoWayVEdge",
      id: "4d21890c-1ab1-4aee-8383-ddd631f3c3d2",
    },
    {
      start: {
        x: 1260,
        y: 2740,
      },
      startId: "1c1097cb-4784-4bbd-994f-94ebbb5f2643",
      end: {
        x: 1340,
        y: 3160,
      },
      endId: "9c54e51c-e431-42a3-84d8-d7bcd7cd943c",
      name: "TwoWayVEdge",
      id: "a312de76-5384-4794-92a7-124de400af9e",
    },
  ],
};
export default arcticCaveB3Map;
