import { Vertex, Edge } from "global";

const europeCaveHall: { vertices: Vertex[]; edges: Edge[] } = {
  vertices: [
    {
      area: "EuropeCaveHall",
      position: {
        x: 380,
        y: 560,
      },
      name: "BattleField",
      id: "ae7077d7-6fc3-4676-80c4-2bb1e9e6c7d3",
      edges: [
        "37d0441b-1002-4b4e-906d-b0c35b22f2d8",
        "738ee87a-17c1-448b-b00c-f6f74d94981e",
        "1fe8ac31-a80a-4582-ab28-d85106df7371",
        "468f0a53-c178-4f03-a0fa-7f2b224a6c91",
      ],
      right: "5beaaca7-2c41-4cf6-8516-7cf07477d0f4",
      left: "21ccb754-2f35-4c3f-8cde-41f54a42007e",
      bottom: "b742acfb-fd17-4fe5-a54e-6d7a2f4de3e9",
    },
    {
      id: "5beaaca7-2c41-4cf6-8516-7cf07477d0f4",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: 920,
        y: 560,
      },
      edges: [
        "37d0441b-1002-4b4e-906d-b0c35b22f2d8",
        "52de64fa-4fbf-48a8-b797-4762da94abc0",
        "0e915e55-8412-4eaf-bd3b-d01f7f84a91a",
      ],
      top: "ecefbec2-7bd1-4c0b-9357-e3579daa678b",
      right: "54c232e5-b23e-4c94-bad9-e4a7cd0e78ba",
    },
    {
      id: "21ccb754-2f35-4c3f-8cde-41f54a42007e",

      area: "EuropeCaveHall",
      name: "TreasureField",
      position: {
        x: -660,
        y: 560,
      },
      edges: [
        "738ee87a-17c1-448b-b00c-f6f74d94981e",
        "e3f42f1a-e2ba-426d-824a-555bab6d55c0",
      ],
      top: "82ee86b0-80ba-43d1-b7c0-1af4643fe22e",
    },
    {
      id: "b742acfb-fd17-4fe5-a54e-6d7a2f4de3e9",

      area: "EuropeCaveHall",
      name: "CaveField",
      position: {
        x: 380,
        y: 1000,
      },
      edges: ["1fe8ac31-a80a-4582-ab28-d85106df7371"],
      top: "ae7077d7-6fc3-4676-80c4-2bb1e9e6c7d3",
    },
    {
      id: "ecefbec2-7bd1-4c0b-9357-e3579daa678b",

      area: "EuropeCaveHall",
      name: "MagicBookField",
      position: {
        x: 920,
        y: 120,
      },
      edges: [
        "52de64fa-4fbf-48a8-b797-4762da94abc0",
        "f93c5042-9172-45de-9ab7-d09175128827",
        "82204fc8-ed24-43c1-ba28-922f1251351c",
      ],
      left: "8b06a550-a40d-41fa-af35-78b95a2a25ca",
      top: "5eb78328-5f2a-4d83-af98-53a06b124260",
    },
    {
      id: "8b06a550-a40d-41fa-af35-78b95a2a25ca",

      area: "EuropeCaveHall",
      name: "TreasureField",
      position: {
        x: 380,
        y: 120,
      },
      edges: [
        "f93c5042-9172-45de-9ab7-d09175128827",
        "468f0a53-c178-4f03-a0fa-7f2b224a6c91",
        "3a26d3e5-9deb-4528-bb10-f9720a1b40e0",
        "51c485ad-65f0-4e1c-9f35-ac5c3908227c",
      ],
      right: "ecefbec2-7bd1-4c0b-9357-e3579daa678b",
      bottom: "ae7077d7-6fc3-4676-80c4-2bb1e9e6c7d3",
      left: "ab98343f-b6bb-4e65-99a2-bb4d8cb31125",
      top: "9f33b95e-d11f-4d39-8322-4fd4516ed0c7",
    },
    {
      id: "ab98343f-b6bb-4e65-99a2-bb4d8cb31125",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: -140,
        y: 140,
      },
      edges: [
        "3a26d3e5-9deb-4528-bb10-f9720a1b40e0",
        "b76db4ff-58af-42e5-93f7-bc7bc05b73bd",
      ],
      right: "8b06a550-a40d-41fa-af35-78b95a2a25ca",
      left: "82ee86b0-80ba-43d1-b7c0-1af4643fe22e",
    },
    {
      id: "82ee86b0-80ba-43d1-b7c0-1af4643fe22e",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: -660,
        y: 120,
      },
      edges: [
        "e3f42f1a-e2ba-426d-824a-555bab6d55c0",
        "b76db4ff-58af-42e5-93f7-bc7bc05b73bd",
        "d6f487f2-0443-44a7-9a69-1eae213d1861",
      ],
      bottom: "21ccb754-2f35-4c3f-8cde-41f54a42007e",
      right: "ab98343f-b6bb-4e65-99a2-bb4d8cb31125",
      top: "0105fe2d-7ede-4cad-b9b9-5c80bf5db8ef",
    },
    {
      id: "0105fe2d-7ede-4cad-b9b9-5c80bf5db8ef",

      area: "EuropeCaveHall",
      name: "MagicBookField",
      position: {
        x: -600,
        y: -500,
      },
      edges: [
        "d6f487f2-0443-44a7-9a69-1eae213d1861",
        "b924067f-a619-4bfc-8aec-dbc73209bbdf",
        "22fa99c8-ef60-442b-8480-70c50e4a65fa",
      ],
      bottom: "82ee86b0-80ba-43d1-b7c0-1af4643fe22e",
      right: "9f33b95e-d11f-4d39-8322-4fd4516ed0c7",
      top: "beb09acf-c05c-4527-ad06-87c66173fafa",
    },
    {
      id: "9f33b95e-d11f-4d39-8322-4fd4516ed0c7",

      area: "EuropeCaveHall",
      name: "DamageField",
      position: {
        x: 280,
        y: -500,
      },
      edges: [
        "b924067f-a619-4bfc-8aec-dbc73209bbdf",
        "51c485ad-65f0-4e1c-9f35-ac5c3908227c",
        "90e359f2-c7c7-4a39-8c81-9aa3878348d4",
      ],
      left: "0105fe2d-7ede-4cad-b9b9-5c80bf5db8ef",
      bottom: "8b06a550-a40d-41fa-af35-78b95a2a25ca",
      top: "c4b57755-a1b4-40f0-b2f9-503f77cc45c9",
    },
    {
      id: "54c232e5-b23e-4c94-bad9-e4a7cd0e78ba",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: 1440,
        y: 540,
      },
      edges: [
        "0e915e55-8412-4eaf-bd3b-d01f7f84a91a",
        "3648acd9-5d4b-49a9-a073-b604e0eb1cad",
      ],
      left: "5beaaca7-2c41-4cf6-8516-7cf07477d0f4",
      top: "49eac2c9-ffa0-4581-ae86-c00537488b25",
    },
    {
      id: "5eb78328-5f2a-4d83-af98-53a06b124260",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: 780,
        y: -280,
      },
      edges: [
        "82204fc8-ed24-43c1-ba28-922f1251351c",
        "b5ce8d27-fa39-4f53-bd69-8a817c79c001",
      ],
      bottom: "ecefbec2-7bd1-4c0b-9357-e3579daa678b",
      right: "49eac2c9-ffa0-4581-ae86-c00537488b25",
    },
    {
      id: "49eac2c9-ffa0-4581-ae86-c00537488b25",

      area: "EuropeCaveHall",
      name: "TreasureField",
      position: {
        x: 1480,
        y: -240,
      },
      edges: [
        "b5ce8d27-fa39-4f53-bd69-8a817c79c001",
        "3648acd9-5d4b-49a9-a073-b604e0eb1cad",
        "b282601d-70c9-4a57-86c1-7e417ee81003",
      ],
      left: "5eb78328-5f2a-4d83-af98-53a06b124260",
      bottom: "54c232e5-b23e-4c94-bad9-e4a7cd0e78ba",
      top: "5d1b5b1f-09c1-418d-a970-0b603466717d",
    },
    {
      id: "5d1b5b1f-09c1-418d-a970-0b603466717d",

      area: "EuropeCaveHall",
      name: "DamageField",
      position: {
        x: 1360,
        y: -700,
      },
      edges: [
        "b282601d-70c9-4a57-86c1-7e417ee81003",
        "325db631-fc34-43bd-b232-e36fa02f5157",
        "4662442d-3021-413f-be94-3d4f1ea7f58c",
      ],
      bottom: "49eac2c9-ffa0-4581-ae86-c00537488b25",
      right: "69db8570-6b62-4883-ae55-fd4634f28af1",
      top: "4a14e719-872e-49e8-b9a0-c929eab417f0",
    },
    {
      id: "69db8570-6b62-4883-ae55-fd4634f28af1",

      area: "EuropeCaveHall",
      name: "RedTreasureField",
      position: {
        x: 1860,
        y: -680,
      },
      edges: [
        "325db631-fc34-43bd-b232-e36fa02f5157",
        "eb38e7e5-4cbc-4950-9987-54c3a074af02",
        "d169d38b-927b-4840-ac72-210c703cedf4",
      ],
      left: "5d1b5b1f-09c1-418d-a970-0b603466717d",
      right: "dda25ad0-965d-4866-86e4-4245febba1a7",
      top: "9b5f9dc0-d74c-4ed4-ab31-a559208dfca7",
    },
    {
      id: "dda25ad0-965d-4866-86e4-4245febba1a7",

      area: "EuropeCaveHall",
      name: "RedTreasureField",
      position: {
        x: 2240,
        y: -700,
      },
      edges: [
        "eb38e7e5-4cbc-4950-9987-54c3a074af02",
        "56b3b23c-e580-48db-8761-066e63aa9c3f",
      ],
      left: "69db8570-6b62-4883-ae55-fd4634f28af1",
      top: "76439c5a-48f3-46aa-838f-e35df4eb3a7a",
    },
    {
      id: "76439c5a-48f3-46aa-838f-e35df4eb3a7a",

      area: "EuropeCaveHall",
      name: "RedTreasureField",
      position: {
        x: 2240,
        y: -1280,
      },
      edges: [
        "56b3b23c-e580-48db-8761-066e63aa9c3f",
        "26cb9b81-2fbf-4bb8-b485-665a3e34efb5",
      ],
      bottom: "dda25ad0-965d-4866-86e4-4245febba1a7",
      left: "7a3ed1f9-2526-4d5a-bea6-f87eace30550",
    },
    {
      id: "7a3ed1f9-2526-4d5a-bea6-f87eace30550",

      area: "EuropeCaveHall",
      name: "TreasureField",
      position: {
        x: 1820,
        y: -1320,
      },
      edges: [
        "26cb9b81-2fbf-4bb8-b485-665a3e34efb5",
        "05ea5433-d999-4b2a-836d-b09766f75fd4",
      ],
      right: "76439c5a-48f3-46aa-838f-e35df4eb3a7a",
      bottom: "9b5f9dc0-d74c-4ed4-ab31-a559208dfca7",
    },
    {
      id: "9b5f9dc0-d74c-4ed4-ab31-a559208dfca7",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: 1760,
        y: -1020,
      },
      edges: [
        "05ea5433-d999-4b2a-836d-b09766f75fd4",
        "d169d38b-927b-4840-ac72-210c703cedf4",
      ],
      top: "7a3ed1f9-2526-4d5a-bea6-f87eace30550",
      bottom: "69db8570-6b62-4883-ae55-fd4634f28af1",
    },
    {
      id: "4a14e719-872e-49e8-b9a0-c929eab417f0",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: 1280,
        y: -1100,
      },
      edges: [
        "4662442d-3021-413f-be94-3d4f1ea7f58c",
        "8129cd10-4208-49f9-bcfd-89ab0590bf1c",
        "98ec52ac-85cf-4f52-abef-5b8c4c3ad3f9",
      ],
      bottom: "5d1b5b1f-09c1-418d-a970-0b603466717d",
      left: "eabdc0a8-a8ce-436a-bcc4-fc45be47e029",
      top: "e281d79d-a476-406d-b933-ba0bcc8ab751",
    },
    {
      id: "eabdc0a8-a8ce-436a-bcc4-fc45be47e029",

      area: "EuropeCaveHall",
      name: "GoldTreasureField",
      position: {
        x: 880,
        y: -1080,
      },
      edges: [
        "8129cd10-4208-49f9-bcfd-89ab0590bf1c",
        "0f7fd7da-5096-4ea9-826a-843303463fa4",
        "349f1780-6382-4630-9d40-8423f577ebb6",
      ],
      right: "4a14e719-872e-49e8-b9a0-c929eab417f0",
      top: "e19bd0c0-7d6b-4c0c-ac7e-7b9657a2672e",
    },
    {
      id: "e281d79d-a476-406d-b933-ba0bcc8ab751",

      area: "EuropeCaveHall",
      name: "DamageField",
      position: {
        x: 1340,
        y: -1640,
      },
      edges: [
        "98ec52ac-85cf-4f52-abef-5b8c4c3ad3f9",
        "34b51a0b-2118-4a40-8032-2ae9797c148e",
      ],
      bottom: "4a14e719-872e-49e8-b9a0-c929eab417f0",
      top: "8abc85c3-7e27-42c4-80d5-285a759c2f76",
    },
    {
      id: "e19bd0c0-7d6b-4c0c-ac7e-7b9657a2672e",

      area: "EuropeCaveHall",
      name: "DamageField",
      position: {
        x: 900,
        y: -1640,
      },
      edges: [
        "0f7fd7da-5096-4ea9-826a-843303463fa4",
        "2b1434ac-50b6-4df5-815b-50fae4e646b8",
        "5d70dcab-2677-4a08-a2f1-30de848bcb12",
      ],
      bottom: "eabdc0a8-a8ce-436a-bcc4-fc45be47e029",
      left: "7e523595-c172-4256-9679-2f238ff26a66",
      top: "2bc7c638-64f5-487e-a192-6d0b5e0b0863",
    },
    {
      id: "8abc85c3-7e27-42c4-80d5-285a759c2f76",

      area: "EuropeCaveHall",
      name: "RedTreasureField",
      position: {
        x: 1260,
        y: -2220,
      },
      edges: [
        "34b51a0b-2118-4a40-8032-2ae9797c148e",
        "c9b0d350-4736-4cc6-8971-b57f8d5b0d05",
      ],
      bottom: "e281d79d-a476-406d-b933-ba0bcc8ab751",
      right: "85b9fd88-1ff7-443f-8777-67a3e997302b",
    },
    {
      id: "85b9fd88-1ff7-443f-8777-67a3e997302b",

      area: "EuropeCaveHall",
      name: "DamageField",
      position: {
        x: 1780,
        y: -2260,
      },
      edges: [
        "c9b0d350-4736-4cc6-8971-b57f8d5b0d05",
        "29779836-039e-459f-af15-90fdd0c5031b",
      ],
      left: "8abc85c3-7e27-42c4-80d5-285a759c2f76",
      right: "31c40d6c-c329-4ce7-81aa-6da8232ce1c3",
    },
    {
      id: "31c40d6c-c329-4ce7-81aa-6da8232ce1c3",

      area: "EuropeCaveHall",
      name: "KeyTreasureField",
      position: {
        x: 2340,
        y: -2220,
      },
      edges: ["29779836-039e-459f-af15-90fdd0c5031b"],
      left: "85b9fd88-1ff7-443f-8777-67a3e997302b",
    },
    {
      id: "7e523595-c172-4256-9679-2f238ff26a66",

      area: "EuropeCaveHall",
      name: "MagicBookField",
      position: {
        x: -200,
        y: -1640,
      },
      edges: [
        "2b1434ac-50b6-4df5-815b-50fae4e646b8",
        "69c7625e-8f2c-4cf6-ab56-dca3e2321582",
        "156184f3-3aeb-4dfb-89f5-bc276db5b781",
      ],
      right: "e19bd0c0-7d6b-4c0c-ac7e-7b9657a2672e",
      bottom: "b7f91dba-adf7-43a0-a840-8f6ff5dd9fd4",
      top: "6b636bd3-c5f1-46a3-8701-3fae0dce1728",
    },
    {
      id: "b7f91dba-adf7-43a0-a840-8f6ff5dd9fd4",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: -180,
        y: -1080,
      },
      edges: [
        "69c7625e-8f2c-4cf6-ab56-dca3e2321582",
        "b62dd8db-870b-402e-a382-e8cfcc1cadf9",
      ],
      top: "7e523595-c172-4256-9679-2f238ff26a66",
    },
    {
      id: "c4b57755-a1b4-40f0-b2f9-503f77cc45c9",

      area: "EuropeCaveHall",
      name: "WhiteTreasureField",
      position: {
        x: 320,
        y: -1120,
      },
      edges: [
        "90e359f2-c7c7-4a39-8c81-9aa3878348d4",
        "349f1780-6382-4630-9d40-8423f577ebb6",
        "b62dd8db-870b-402e-a382-e8cfcc1cadf9",
      ],
      bottom: "9f33b95e-d11f-4d39-8322-4fd4516ed0c7",
      right: "eabdc0a8-a8ce-436a-bcc4-fc45be47e029",
      left: "b7f91dba-adf7-43a0-a840-8f6ff5dd9fd4",
    },
    {
      id: "6b636bd3-c5f1-46a3-8701-3fae0dce1728",

      area: "EuropeCaveHall",
      name: "TreasureField",
      position: {
        x: -140,
        y: -2000,
      },
      edges: [
        "156184f3-3aeb-4dfb-89f5-bc276db5b781",
        "836b4c79-c516-4fc3-829f-625d0611eaa0",
        "65a3c650-78dc-4bd6-93c8-f870148080a5",
      ],
      bottom: "7e523595-c172-4256-9679-2f238ff26a66",
      right: "b3c50da5-e4c3-462f-b23c-ba646ebbbecc",
      top: "4b28d623-9d4f-4cb3-b5d0-52b4b434c9a4",
    },
    {
      id: "b3c50da5-e4c3-462f-b23c-ba646ebbbecc",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: 280,
        y: -2000,
      },
      edges: [
        "836b4c79-c516-4fc3-829f-625d0611eaa0",
        "82f31502-561b-45a9-82ab-2dac6c13626a",
      ],
      left: "6b636bd3-c5f1-46a3-8701-3fae0dce1728",
      top: "35d6d4c2-e182-4f55-a67e-85dddd43b362",
    },
    {
      id: "2bc7c638-64f5-487e-a192-6d0b5e0b0863",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: 780,
        y: -2340,
      },
      edges: [
        "5d70dcab-2677-4a08-a2f1-30de848bcb12",
        "6cd7aabc-b1de-45be-810b-1cb435b40c74",
      ],
      bottom: "e19bd0c0-7d6b-4c0c-ac7e-7b9657a2672e",
      left: "35d6d4c2-e182-4f55-a67e-85dddd43b362",
    },
    {
      id: "35d6d4c2-e182-4f55-a67e-85dddd43b362",

      area: "EuropeCaveHall",
      name: "TreasureField",
      position: {
        x: 320,
        y: -2400,
      },
      edges: [
        "82f31502-561b-45a9-82ab-2dac6c13626a",
        "6cd7aabc-b1de-45be-810b-1cb435b40c74",
        "0f454b88-41cc-4358-9e63-66953894067e",
      ],
      bottom: "b3c50da5-e4c3-462f-b23c-ba646ebbbecc",
      right: "2bc7c638-64f5-487e-a192-6d0b5e0b0863",
      top: "93e57c8b-a724-48e8-8b8c-0276b7c65b9d",
    },
    {
      id: "4b28d623-9d4f-4cb3-b5d0-52b4b434c9a4",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: -200,
        y: -2380,
      },
      edges: [
        "65a3c650-78dc-4bd6-93c8-f870148080a5",
        "70093737-652e-491c-9108-630d2bd2c032",
        "ed6fa6c1-2cb5-455c-9531-d6ed2044fca2",
      ],
      bottom: "6b636bd3-c5f1-46a3-8701-3fae0dce1728",
      top: "7b80b862-ac42-4774-a22b-e7fbc84da615",
      left: "7f93126e-30da-45ad-9464-8a59b8a587a6",
    },
    {
      id: "7b80b862-ac42-4774-a22b-e7fbc84da615",

      area: "EuropeCaveHall",
      name: "MagicBookField",
      position: {
        x: -140,
        y: -2780,
      },
      edges: [
        "70093737-652e-491c-9108-630d2bd2c032",
        "c6f8ec45-5f8c-4444-88de-65331c7f6c53",
      ],
      bottom: "4b28d623-9d4f-4cb3-b5d0-52b4b434c9a4",
      right: "93e57c8b-a724-48e8-8b8c-0276b7c65b9d",
    },
    {
      id: "93e57c8b-a724-48e8-8b8c-0276b7c65b9d",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: 360,
        y: -2780,
      },
      edges: [
        "c6f8ec45-5f8c-4444-88de-65331c7f6c53",
        "0f454b88-41cc-4358-9e63-66953894067e",
        "7dd7eb1b-4aad-4df1-841e-fd0afb02badf",
      ],
      left: "7b80b862-ac42-4774-a22b-e7fbc84da615",
      bottom: "35d6d4c2-e182-4f55-a67e-85dddd43b362",
      top: "bb84ee52-aa76-494d-b1a0-e4a34852f35b",
    },
    {
      id: "bb84ee52-aa76-494d-b1a0-e4a34852f35b",

      area: "EuropeCaveHall",
      name: "TreasureField",
      position: {
        x: 320,
        y: -3200,
      },
      edges: [
        "7dd7eb1b-4aad-4df1-841e-fd0afb02badf",
        "40fb540b-eba4-48cf-932f-ae1a9bead8df",
      ],
      bottom: "93e57c8b-a724-48e8-8b8c-0276b7c65b9d",
      right: "ab15fe4a-a97a-43f3-a645-36d8b9852e12",
    },
    {
      id: "ab15fe4a-a97a-43f3-a645-36d8b9852e12",

      area: "EuropeCaveHall",
      name: "DamageField",
      position: {
        x: 960,
        y: -3240,
      },
      edges: [
        "40fb540b-eba4-48cf-932f-ae1a9bead8df",
        "1edbc4b8-84ca-446e-9f3d-157192e349d2",
      ],
      left: "bb84ee52-aa76-494d-b1a0-e4a34852f35b",
      right: "9af7fe94-93c2-4e03-b568-14ede868504c",
    },
    {
      id: "9af7fe94-93c2-4e03-b568-14ede868504c",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: 1560,
        y: -3180,
      },
      edges: [
        "1edbc4b8-84ca-446e-9f3d-157192e349d2",
        "e672638f-5bec-44d0-8b05-398a9b26659b",
      ],
      left: "ab15fe4a-a97a-43f3-a645-36d8b9852e12",
      bottom: "b53c7dc2-e0dd-4732-8ce8-2e0d0c638783",
    },
    {
      id: "b53c7dc2-e0dd-4732-8ce8-2e0d0c638783",

      area: "EuropeCaveHall",
      name: "DamageField",
      position: {
        x: 1560,
        y: -2740,
      },
      edges: [
        "e672638f-5bec-44d0-8b05-398a9b26659b",
        "ec3374df-3164-433e-9828-9e7d0e0739d7",
      ],
      top: "9af7fe94-93c2-4e03-b568-14ede868504c",
      left: "b59a2c3d-9203-4ecf-8e5d-910271e51446",
    },
    {
      id: "b59a2c3d-9203-4ecf-8e5d-910271e51446",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: 960,
        y: -2740,
      },
      edges: ["ec3374df-3164-433e-9828-9e7d0e0739d7"],
      right: "b53c7dc2-e0dd-4732-8ce8-2e0d0c638783",
    },
    {
      id: "beb09acf-c05c-4527-ad06-87c66173fafa",

      area: "EuropeCaveHall",
      name: "DamageField",
      position: {
        x: -700,
        y: -1320,
      },
      edges: [
        "22fa99c8-ef60-442b-8480-70c50e4a65fa",
        "f60b7528-d981-4130-ada1-0f657c782cbd",
        "e59d4ce6-673e-4e30-96df-60e6aa8ed267",
      ],
      bottom: "0105fe2d-7ede-4cad-b9b9-5c80bf5db8ef",
      left: "dffedfc6-ab65-4469-83a5-2ebbd268bf4d",
      top: "15b1af06-26c5-4c48-8fc3-57001782ffdd",
    },
    {
      id: "dffedfc6-ab65-4469-83a5-2ebbd268bf4d",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: -1220,
        y: -1360,
      },
      edges: [
        "f60b7528-d981-4130-ada1-0f657c782cbd",
        "e8206ee9-dccd-4578-84f0-adbe13eb4f40",
      ],
      right: "beb09acf-c05c-4527-ad06-87c66173fafa",
      left: "cd05210f-4b04-455b-84fd-1560bdfc40b6",
    },
    {
      id: "15b1af06-26c5-4c48-8fc3-57001782ffdd",

      area: "EuropeCaveHall",
      name: "GoldTreasureField",
      position: {
        x: -580,
        y: -2040,
      },
      edges: [
        "e59d4ce6-673e-4e30-96df-60e6aa8ed267",
        "417b1a0f-cfb0-4fd4-959a-e18c412f20f9",
        "5b72b775-b4d1-4b66-85d4-3fc7ea85a3d3",
      ],
      bottom: "beb09acf-c05c-4527-ad06-87c66173fafa",
      top: "7f93126e-30da-45ad-9464-8a59b8a587a6",
      left: "a570e52d-8680-40ff-8df8-0af72810c162",
    },
    {
      id: "7f93126e-30da-45ad-9464-8a59b8a587a6",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: -660,
        y: -2400,
      },
      edges: [
        "ed6fa6c1-2cb5-455c-9531-d6ed2044fca2",
        "417b1a0f-cfb0-4fd4-959a-e18c412f20f9",
        "3b31aa76-a129-49b0-94fe-4fe16f9bdcb6",
      ],
      right: "4b28d623-9d4f-4cb3-b5d0-52b4b434c9a4",
      bottom: "15b1af06-26c5-4c48-8fc3-57001782ffdd",
      top: "95bf2652-6f20-44fb-8f5d-c2eaad6504fa",
    },
    {
      id: "a570e52d-8680-40ff-8df8-0af72810c162",

      area: "EuropeCaveHall",
      name: "TreasureField",
      position: {
        x: -1240,
        y: -2080,
      },
      edges: [
        "5b72b775-b4d1-4b66-85d4-3fc7ea85a3d3",
        "7415e5b3-77e7-4fa5-9cef-e799d193b68d",
      ],
      right: "15b1af06-26c5-4c48-8fc3-57001782ffdd",
      top: "8031e377-b46a-43e8-8138-594ceaeee66b",
    },
    {
      id: "8031e377-b46a-43e8-8138-594ceaeee66b",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: -1200,
        y: -2820,
      },
      edges: [
        "7415e5b3-77e7-4fa5-9cef-e799d193b68d",
        "378986a7-79c1-4f91-9bcb-65cd60d009ea",
        "bea8d1e7-1e56-40e5-9964-4470cae5b2bc",
      ],
      bottom: "a570e52d-8680-40ff-8df8-0af72810c162",
      right: "95bf2652-6f20-44fb-8f5d-c2eaad6504fa",
      left: "23c56dc0-4265-4efc-93fc-090914d2dcd6",
    },
    {
      id: "95bf2652-6f20-44fb-8f5d-c2eaad6504fa",

      area: "EuropeCaveHall",
      name: "GoldTreasureField",
      position: {
        x: -600,
        y: -2840,
      },
      edges: [
        "378986a7-79c1-4f91-9bcb-65cd60d009ea",
        "3b31aa76-a129-49b0-94fe-4fe16f9bdcb6",
      ],
      left: "8031e377-b46a-43e8-8138-594ceaeee66b",
      bottom: "7f93126e-30da-45ad-9464-8a59b8a587a6",
    },
    {
      id: "cd05210f-4b04-455b-84fd-1560bdfc40b6",

      area: "EuropeCaveHall",
      name: "TreasureField",
      position: {
        x: -1660,
        y: -1300,
      },
      edges: [
        "e8206ee9-dccd-4578-84f0-adbe13eb4f40",
        "96a86061-2b3c-4c0e-af2e-728352f00df0",
      ],
      right: "dffedfc6-ab65-4469-83a5-2ebbd268bf4d",
      top: "6ef35753-d9c9-4b12-8832-5b2f5d695674",
    },
    {
      id: "6ef35753-d9c9-4b12-8832-5b2f5d695674",

      area: "EuropeCaveHall",
      name: "GoldTreasureField",
      position: {
        x: -1580,
        y: -1940,
      },
      edges: [
        "96a86061-2b3c-4c0e-af2e-728352f00df0",
        "7fec3359-2d03-4a5d-992b-19bc81b53b88",
      ],
      bottom: "cd05210f-4b04-455b-84fd-1560bdfc40b6",
      top: "252e5871-5f5b-4fe3-adcf-f82de3b6ff28",
    },
    {
      id: "252e5871-5f5b-4fe3-adcf-f82de3b6ff28",

      area: "EuropeCaveHall",
      name: "BattleField",
      position: {
        x: -1700,
        y: -2400,
      },
      edges: [
        "7fec3359-2d03-4a5d-992b-19bc81b53b88",
        "01b25e5a-a890-45b2-8dc0-d79602111f97",
      ],
      bottom: "6ef35753-d9c9-4b12-8832-5b2f5d695674",
      top: "23c56dc0-4265-4efc-93fc-090914d2dcd6",
    },
    {
      id: "23c56dc0-4265-4efc-93fc-090914d2dcd6",

      area: "EuropeCaveHall",
      name: "GoldTreasureField",
      position: {
        x: -1680,
        y: -2840,
      },
      edges: [
        "bea8d1e7-1e56-40e5-9964-4470cae5b2bc",
        "01b25e5a-a890-45b2-8dc0-d79602111f97",
      ],
      right: "8031e377-b46a-43e8-8138-594ceaeee66b",
      bottom: "252e5871-5f5b-4fe3-adcf-f82de3b6ff28",
    },
  ],
  edges: [
    {
      start: {
        x: 380,
        y: 560,
      },
      startId: "ae7077d7-6fc3-4676-80c4-2bb1e9e6c7d3",
      end: {
        x: 920,
        y: 560,
      },
      endId: "5beaaca7-2c41-4cf6-8516-7cf07477d0f4",
      name: "OneWayHEdge",
      id: "37d0441b-1002-4b4e-906d-b0c35b22f2d8",
    },
    {
      start: {
        x: 380,
        y: 560,
      },
      startId: "ae7077d7-6fc3-4676-80c4-2bb1e9e6c7d3",
      end: {
        x: -660,
        y: 560,
      },
      endId: "21ccb754-2f35-4c3f-8cde-41f54a42007e",
      name: "OneWayHEdge",
      id: "738ee87a-17c1-448b-b00c-f6f74d94981e",
    },
    {
      start: {
        x: 380,
        y: 560,
      },
      startId: "ae7077d7-6fc3-4676-80c4-2bb1e9e6c7d3",
      end: {
        x: 380,
        y: 1000,
      },
      endId: "b742acfb-fd17-4fe5-a54e-6d7a2f4de3e9",
      name: "TwoWayVEdge",
      id: "1fe8ac31-a80a-4582-ab28-d85106df7371",
    },
    {
      start: {
        x: 920,
        y: 560,
      },
      startId: "5beaaca7-2c41-4cf6-8516-7cf07477d0f4",
      end: {
        x: 920,
        y: 120,
      },
      endId: "ecefbec2-7bd1-4c0b-9357-e3579daa678b",
      name: "OneWayVEdge",
      id: "52de64fa-4fbf-48a8-b797-4762da94abc0",
    },
    {
      start: {
        x: 920,
        y: 120,
      },
      startId: "ecefbec2-7bd1-4c0b-9357-e3579daa678b",
      end: {
        x: 380,
        y: 120,
      },
      endId: "8b06a550-a40d-41fa-af35-78b95a2a25ca",
      name: "TwoWayHEdge",
      id: "f93c5042-9172-45de-9ab7-d09175128827",
    },
    {
      start: {
        x: 380,
        y: 120,
      },
      startId: "8b06a550-a40d-41fa-af35-78b95a2a25ca",
      end: {
        x: 380,
        y: 560,
      },
      endId: "ae7077d7-6fc3-4676-80c4-2bb1e9e6c7d3",
      name: "OneWayVEdge",
      id: "468f0a53-c178-4f03-a0fa-7f2b224a6c91",
    },
    {
      start: {
        x: 380,
        y: 120,
      },
      startId: "8b06a550-a40d-41fa-af35-78b95a2a25ca",
      end: {
        x: -140,
        y: 140,
      },
      endId: "ab98343f-b6bb-4e65-99a2-bb4d8cb31125",
      name: "TwoWayHEdge",
      id: "3a26d3e5-9deb-4528-bb10-f9720a1b40e0",
    },
    {
      start: {
        x: -660,
        y: 560,
      },
      startId: "21ccb754-2f35-4c3f-8cde-41f54a42007e",
      end: {
        x: -660,
        y: 120,
      },
      endId: "82ee86b0-80ba-43d1-b7c0-1af4643fe22e",
      name: "TwoWayVEdge",
      id: "e3f42f1a-e2ba-426d-824a-555bab6d55c0",
    },
    {
      start: {
        x: -660,
        y: 120,
      },
      startId: "82ee86b0-80ba-43d1-b7c0-1af4643fe22e",
      end: {
        x: -140,
        y: 140,
      },
      endId: "ab98343f-b6bb-4e65-99a2-bb4d8cb31125",
      name: "TwoWayHEdge",
      id: "b76db4ff-58af-42e5-93f7-bc7bc05b73bd",
    },
    {
      start: {
        x: -660,
        y: 120,
      },
      startId: "82ee86b0-80ba-43d1-b7c0-1af4643fe22e",
      end: {
        x: -600,
        y: -500,
      },
      endId: "0105fe2d-7ede-4cad-b9b9-5c80bf5db8ef",
      name: "TwoWayVEdge",
      id: "d6f487f2-0443-44a7-9a69-1eae213d1861",
    },
    {
      start: {
        x: -600,
        y: -500,
      },
      startId: "0105fe2d-7ede-4cad-b9b9-5c80bf5db8ef",
      end: {
        x: 280,
        y: -500,
      },
      endId: "9f33b95e-d11f-4d39-8322-4fd4516ed0c7",
      name: "TwoWayHEdge",
      id: "b924067f-a619-4bfc-8aec-dbc73209bbdf",
    },
    {
      start: {
        x: 280,
        y: -500,
      },
      startId: "9f33b95e-d11f-4d39-8322-4fd4516ed0c7",
      end: {
        x: 380,
        y: 120,
      },
      endId: "8b06a550-a40d-41fa-af35-78b95a2a25ca",
      name: "TwoWayVEdge",
      id: "51c485ad-65f0-4e1c-9f35-ac5c3908227c",
    },
    {
      start: {
        x: 920,
        y: 560,
      },
      startId: "5beaaca7-2c41-4cf6-8516-7cf07477d0f4",
      end: {
        x: 1440,
        y: 540,
      },
      endId: "54c232e5-b23e-4c94-bad9-e4a7cd0e78ba",
      name: "TwoWayHEdge",
      id: "0e915e55-8412-4eaf-bd3b-d01f7f84a91a",
    },
    {
      start: {
        x: 920,
        y: 120,
      },
      startId: "ecefbec2-7bd1-4c0b-9357-e3579daa678b",
      end: {
        x: 780,
        y: -280,
      },
      endId: "5eb78328-5f2a-4d83-af98-53a06b124260",
      name: "TwoWayVEdge",
      id: "82204fc8-ed24-43c1-ba28-922f1251351c",
    },
    {
      start: {
        x: 780,
        y: -280,
      },
      startId: "5eb78328-5f2a-4d83-af98-53a06b124260",
      end: {
        x: 1480,
        y: -240,
      },
      endId: "49eac2c9-ffa0-4581-ae86-c00537488b25",
      name: "TwoWayHEdge",
      id: "b5ce8d27-fa39-4f53-bd69-8a817c79c001",
    },
    {
      start: {
        x: 1440,
        y: 540,
      },
      startId: "54c232e5-b23e-4c94-bad9-e4a7cd0e78ba",
      end: {
        x: 1480,
        y: -240,
      },
      endId: "49eac2c9-ffa0-4581-ae86-c00537488b25",
      name: "TwoWayVEdge",
      id: "3648acd9-5d4b-49a9-a073-b604e0eb1cad",
    },
    {
      start: {
        x: 1480,
        y: -240,
      },
      startId: "49eac2c9-ffa0-4581-ae86-c00537488b25",
      end: {
        x: 1360,
        y: -700,
      },
      endId: "5d1b5b1f-09c1-418d-a970-0b603466717d",
      name: "TwoWayVEdge",
      id: "b282601d-70c9-4a57-86c1-7e417ee81003",
    },
    {
      start: {
        x: 1360,
        y: -700,
      },
      startId: "5d1b5b1f-09c1-418d-a970-0b603466717d",
      end: {
        x: 1860,
        y: -680,
      },
      endId: "69db8570-6b62-4883-ae55-fd4634f28af1",
      name: "TwoWayHEdge",
      id: "325db631-fc34-43bd-b232-e36fa02f5157",
    },
    {
      start: {
        x: 1860,
        y: -680,
      },
      startId: "69db8570-6b62-4883-ae55-fd4634f28af1",
      end: {
        x: 2240,
        y: -700,
      },
      endId: "dda25ad0-965d-4866-86e4-4245febba1a7",
      name: "TwoWayHEdge",
      id: "eb38e7e5-4cbc-4950-9987-54c3a074af02",
    },
    {
      start: {
        x: 2240,
        y: -700,
      },
      startId: "dda25ad0-965d-4866-86e4-4245febba1a7",
      end: {
        x: 2240,
        y: -1280,
      },
      endId: "76439c5a-48f3-46aa-838f-e35df4eb3a7a",
      name: "TwoWayVEdge",
      id: "56b3b23c-e580-48db-8761-066e63aa9c3f",
    },
    {
      start: {
        x: 2240,
        y: -1280,
      },
      startId: "76439c5a-48f3-46aa-838f-e35df4eb3a7a",
      end: {
        x: 1820,
        y: -1320,
      },
      endId: "7a3ed1f9-2526-4d5a-bea6-f87eace30550",
      name: "TwoWayHEdge",
      id: "26cb9b81-2fbf-4bb8-b485-665a3e34efb5",
    },
    {
      start: {
        x: 1820,
        y: -1320,
      },
      startId: "7a3ed1f9-2526-4d5a-bea6-f87eace30550",
      end: {
        x: 1760,
        y: -1020,
      },
      endId: "9b5f9dc0-d74c-4ed4-ab31-a559208dfca7",
      name: "TwoWayVEdge",
      id: "05ea5433-d999-4b2a-836d-b09766f75fd4",
    },
    {
      start: {
        x: 1760,
        y: -1020,
      },
      startId: "9b5f9dc0-d74c-4ed4-ab31-a559208dfca7",
      end: {
        x: 1860,
        y: -680,
      },
      endId: "69db8570-6b62-4883-ae55-fd4634f28af1",
      name: "TwoWayVEdge",
      id: "d169d38b-927b-4840-ac72-210c703cedf4",
    },
    {
      start: {
        x: 1360,
        y: -700,
      },
      startId: "5d1b5b1f-09c1-418d-a970-0b603466717d",
      end: {
        x: 1280,
        y: -1100,
      },
      endId: "4a14e719-872e-49e8-b9a0-c929eab417f0",
      name: "TwoWayVEdge",
      id: "4662442d-3021-413f-be94-3d4f1ea7f58c",
    },
    {
      start: {
        x: 1280,
        y: -1100,
      },
      startId: "4a14e719-872e-49e8-b9a0-c929eab417f0",
      end: {
        x: 880,
        y: -1080,
      },
      endId: "eabdc0a8-a8ce-436a-bcc4-fc45be47e029",
      name: "TwoWayHEdge",
      id: "8129cd10-4208-49f9-bcfd-89ab0590bf1c",
    },
    {
      start: {
        x: 1280,
        y: -1100,
      },
      startId: "4a14e719-872e-49e8-b9a0-c929eab417f0",
      end: {
        x: 1340,
        y: -1640,
      },
      endId: "e281d79d-a476-406d-b933-ba0bcc8ab751",
      name: "TwoWayVEdge",
      id: "98ec52ac-85cf-4f52-abef-5b8c4c3ad3f9",
    },
    {
      start: {
        x: 880,
        y: -1080,
      },
      startId: "eabdc0a8-a8ce-436a-bcc4-fc45be47e029",
      end: {
        x: 900,
        y: -1640,
      },
      endId: "e19bd0c0-7d6b-4c0c-ac7e-7b9657a2672e",
      name: "TwoWayVEdge",
      id: "0f7fd7da-5096-4ea9-826a-843303463fa4",
    },
    {
      start: {
        x: 1340,
        y: -1640,
      },
      startId: "e281d79d-a476-406d-b933-ba0bcc8ab751",
      end: {
        x: 1260,
        y: -2220,
      },
      endId: "8abc85c3-7e27-42c4-80d5-285a759c2f76",
      name: "TwoWayVEdge",
      id: "34b51a0b-2118-4a40-8032-2ae9797c148e",
    },
    {
      start: {
        x: 1260,
        y: -2220,
      },
      startId: "8abc85c3-7e27-42c4-80d5-285a759c2f76",
      end: {
        x: 1780,
        y: -2260,
      },
      endId: "85b9fd88-1ff7-443f-8777-67a3e997302b",
      name: "TwoWayHEdge",
      id: "c9b0d350-4736-4cc6-8971-b57f8d5b0d05",
    },
    {
      start: {
        x: 1780,
        y: -2260,
      },
      startId: "85b9fd88-1ff7-443f-8777-67a3e997302b",
      end: {
        x: 2340,
        y: -2220,
      },
      endId: "31c40d6c-c329-4ce7-81aa-6da8232ce1c3",
      name: "TwoWayHEdge",
      id: "29779836-039e-459f-af15-90fdd0c5031b",
    },
    {
      start: {
        x: 900,
        y: -1640,
      },
      startId: "e19bd0c0-7d6b-4c0c-ac7e-7b9657a2672e",
      end: {
        x: -200,
        y: -1640,
      },
      endId: "7e523595-c172-4256-9679-2f238ff26a66",
      name: "TwoWayHEdge",
      id: "2b1434ac-50b6-4df5-815b-50fae4e646b8",
    },
    {
      start: {
        x: -200,
        y: -1640,
      },
      startId: "7e523595-c172-4256-9679-2f238ff26a66",
      end: {
        x: -180,
        y: -1080,
      },
      endId: "b7f91dba-adf7-43a0-a840-8f6ff5dd9fd4",
      name: "TwoWayVEdge",
      id: "69c7625e-8f2c-4cf6-ab56-dca3e2321582",
    },
    {
      start: {
        x: 280,
        y: -500,
      },
      startId: "9f33b95e-d11f-4d39-8322-4fd4516ed0c7",
      end: {
        x: 320,
        y: -1120,
      },
      endId: "c4b57755-a1b4-40f0-b2f9-503f77cc45c9",
      name: "TwoWayVEdge",
      id: "90e359f2-c7c7-4a39-8c81-9aa3878348d4",
    },
    {
      start: {
        x: 320,
        y: -1120,
      },
      startId: "c4b57755-a1b4-40f0-b2f9-503f77cc45c9",
      end: {
        x: 880,
        y: -1080,
      },
      endId: "eabdc0a8-a8ce-436a-bcc4-fc45be47e029",
      name: "OneWayHEdge",
      id: "349f1780-6382-4630-9d40-8423f577ebb6",
    },
    {
      start: {
        x: 320,
        y: -1120,
      },
      startId: "c4b57755-a1b4-40f0-b2f9-503f77cc45c9",
      end: {
        x: -180,
        y: -1080,
      },
      endId: "b7f91dba-adf7-43a0-a840-8f6ff5dd9fd4",
      name: "OneWayHEdge",
      id: "b62dd8db-870b-402e-a382-e8cfcc1cadf9",
    },
    {
      start: {
        x: -200,
        y: -1640,
      },
      startId: "7e523595-c172-4256-9679-2f238ff26a66",
      end: {
        x: -140,
        y: -2000,
      },
      endId: "6b636bd3-c5f1-46a3-8701-3fae0dce1728",
      name: "TwoWayVEdge",
      id: "156184f3-3aeb-4dfb-89f5-bc276db5b781",
    },
    {
      start: {
        x: -140,
        y: -2000,
      },
      startId: "6b636bd3-c5f1-46a3-8701-3fae0dce1728",
      end: {
        x: 280,
        y: -2000,
      },
      endId: "b3c50da5-e4c3-462f-b23c-ba646ebbbecc",
      name: "TwoWayHEdge",
      id: "836b4c79-c516-4fc3-829f-625d0611eaa0",
    },
    {
      start: {
        x: 900,
        y: -1640,
      },
      startId: "e19bd0c0-7d6b-4c0c-ac7e-7b9657a2672e",
      end: {
        x: 780,
        y: -2340,
      },
      endId: "2bc7c638-64f5-487e-a192-6d0b5e0b0863",
      name: "TwoWayVEdge",
      id: "5d70dcab-2677-4a08-a2f1-30de848bcb12",
    },
    {
      start: {
        x: 280,
        y: -2000,
      },
      startId: "b3c50da5-e4c3-462f-b23c-ba646ebbbecc",
      end: {
        x: 320,
        y: -2400,
      },
      endId: "35d6d4c2-e182-4f55-a67e-85dddd43b362",
      name: "TwoWayVEdge",
      id: "82f31502-561b-45a9-82ab-2dac6c13626a",
    },
    {
      start: {
        x: 320,
        y: -2400,
      },
      startId: "35d6d4c2-e182-4f55-a67e-85dddd43b362",
      end: {
        x: 780,
        y: -2340,
      },
      endId: "2bc7c638-64f5-487e-a192-6d0b5e0b0863",
      name: "TwoWayHEdge",
      id: "6cd7aabc-b1de-45be-810b-1cb435b40c74",
    },
    {
      start: {
        x: -140,
        y: -2000,
      },
      startId: "6b636bd3-c5f1-46a3-8701-3fae0dce1728",
      end: {
        x: -200,
        y: -2380,
      },
      endId: "4b28d623-9d4f-4cb3-b5d0-52b4b434c9a4",
      name: "TwoWayVEdge",
      id: "65a3c650-78dc-4bd6-93c8-f870148080a5",
    },
    {
      start: {
        x: -200,
        y: -2380,
      },
      startId: "4b28d623-9d4f-4cb3-b5d0-52b4b434c9a4",
      end: {
        x: -140,
        y: -2780,
      },
      endId: "7b80b862-ac42-4774-a22b-e7fbc84da615",
      name: "TwoWayVEdge",
      id: "70093737-652e-491c-9108-630d2bd2c032",
    },
    {
      start: {
        x: -140,
        y: -2780,
      },
      startId: "7b80b862-ac42-4774-a22b-e7fbc84da615",
      end: {
        x: 360,
        y: -2780,
      },
      endId: "93e57c8b-a724-48e8-8b8c-0276b7c65b9d",
      name: "TwoWayHEdge",
      id: "c6f8ec45-5f8c-4444-88de-65331c7f6c53",
    },
    {
      start: {
        x: 360,
        y: -2780,
      },
      startId: "93e57c8b-a724-48e8-8b8c-0276b7c65b9d",
      end: {
        x: 320,
        y: -2400,
      },
      endId: "35d6d4c2-e182-4f55-a67e-85dddd43b362",
      name: "TwoWayVEdge",
      id: "0f454b88-41cc-4358-9e63-66953894067e",
    },
    {
      start: {
        x: 360,
        y: -2780,
      },
      startId: "93e57c8b-a724-48e8-8b8c-0276b7c65b9d",
      end: {
        x: 320,
        y: -3200,
      },
      endId: "bb84ee52-aa76-494d-b1a0-e4a34852f35b",
      name: "TwoWayVEdge",
      id: "7dd7eb1b-4aad-4df1-841e-fd0afb02badf",
    },
    {
      start: {
        x: 320,
        y: -3200,
      },
      startId: "bb84ee52-aa76-494d-b1a0-e4a34852f35b",
      end: {
        x: 960,
        y: -3240,
      },
      endId: "ab15fe4a-a97a-43f3-a645-36d8b9852e12",
      name: "TwoWayHEdge",
      id: "40fb540b-eba4-48cf-932f-ae1a9bead8df",
    },
    {
      start: {
        x: 960,
        y: -3240,
      },
      startId: "ab15fe4a-a97a-43f3-a645-36d8b9852e12",
      end: {
        x: 1560,
        y: -3180,
      },
      endId: "9af7fe94-93c2-4e03-b568-14ede868504c",
      name: "TwoWayHEdge",
      id: "1edbc4b8-84ca-446e-9f3d-157192e349d2",
    },
    {
      start: {
        x: 1560,
        y: -3180,
      },
      startId: "9af7fe94-93c2-4e03-b568-14ede868504c",
      end: {
        x: 1560,
        y: -2740,
      },
      endId: "b53c7dc2-e0dd-4732-8ce8-2e0d0c638783",
      name: "TwoWayVEdge",
      id: "e672638f-5bec-44d0-8b05-398a9b26659b",
    },
    {
      start: {
        x: 1560,
        y: -2740,
      },
      startId: "b53c7dc2-e0dd-4732-8ce8-2e0d0c638783",
      end: {
        x: 960,
        y: -2740,
      },
      endId: "b59a2c3d-9203-4ecf-8e5d-910271e51446",
      name: "TwoWayHEdge",
      id: "ec3374df-3164-433e-9828-9e7d0e0739d7",
    },
    {
      start: {
        x: -600,
        y: -500,
      },
      startId: "0105fe2d-7ede-4cad-b9b9-5c80bf5db8ef",
      end: {
        x: -700,
        y: -1320,
      },
      endId: "beb09acf-c05c-4527-ad06-87c66173fafa",
      name: "TwoWayVEdge",
      id: "22fa99c8-ef60-442b-8480-70c50e4a65fa",
    },
    {
      start: {
        x: -700,
        y: -1320,
      },
      startId: "beb09acf-c05c-4527-ad06-87c66173fafa",
      end: {
        x: -1220,
        y: -1360,
      },
      endId: "dffedfc6-ab65-4469-83a5-2ebbd268bf4d",
      name: "TwoWayHEdge",
      id: "f60b7528-d981-4130-ada1-0f657c782cbd",
    },
    {
      start: {
        x: -700,
        y: -1320,
      },
      startId: "beb09acf-c05c-4527-ad06-87c66173fafa",
      end: {
        x: -580,
        y: -2040,
      },
      endId: "15b1af06-26c5-4c48-8fc3-57001782ffdd",
      name: "TwoWayVEdge",
      id: "e59d4ce6-673e-4e30-96df-60e6aa8ed267",
    },
    {
      start: {
        x: -200,
        y: -2380,
      },
      startId: "4b28d623-9d4f-4cb3-b5d0-52b4b434c9a4",
      end: {
        x: -660,
        y: -2400,
      },
      endId: "7f93126e-30da-45ad-9464-8a59b8a587a6",
      name: "TwoWayHEdge",
      id: "ed6fa6c1-2cb5-455c-9531-d6ed2044fca2",
    },
    {
      start: {
        x: -580,
        y: -2040,
      },
      startId: "15b1af06-26c5-4c48-8fc3-57001782ffdd",
      end: {
        x: -660,
        y: -2400,
      },
      endId: "7f93126e-30da-45ad-9464-8a59b8a587a6",
      name: "TwoWayVEdge",
      id: "417b1a0f-cfb0-4fd4-959a-e18c412f20f9",
    },
    {
      start: {
        x: -580,
        y: -2040,
      },
      startId: "15b1af06-26c5-4c48-8fc3-57001782ffdd",
      end: {
        x: -1240,
        y: -2080,
      },
      endId: "a570e52d-8680-40ff-8df8-0af72810c162",
      name: "TwoWayHEdge",
      id: "5b72b775-b4d1-4b66-85d4-3fc7ea85a3d3",
    },
    {
      start: {
        x: -1240,
        y: -2080,
      },
      startId: "a570e52d-8680-40ff-8df8-0af72810c162",
      end: {
        x: -1200,
        y: -2820,
      },
      endId: "8031e377-b46a-43e8-8138-594ceaeee66b",
      name: "TwoWayVEdge",
      id: "7415e5b3-77e7-4fa5-9cef-e799d193b68d",
    },
    {
      start: {
        x: -1200,
        y: -2820,
      },
      startId: "8031e377-b46a-43e8-8138-594ceaeee66b",
      end: {
        x: -600,
        y: -2840,
      },
      endId: "95bf2652-6f20-44fb-8f5d-c2eaad6504fa",
      name: "TwoWayHEdge",
      id: "378986a7-79c1-4f91-9bcb-65cd60d009ea",
    },
    {
      start: {
        x: -660,
        y: -2400,
      },
      startId: "7f93126e-30da-45ad-9464-8a59b8a587a6",
      end: {
        x: -600,
        y: -2840,
      },
      endId: "95bf2652-6f20-44fb-8f5d-c2eaad6504fa",
      name: "TwoWayVEdge",
      id: "3b31aa76-a129-49b0-94fe-4fe16f9bdcb6",
    },
    {
      start: {
        x: -1220,
        y: -1360,
      },
      startId: "dffedfc6-ab65-4469-83a5-2ebbd268bf4d",
      end: {
        x: -1660,
        y: -1300,
      },
      endId: "cd05210f-4b04-455b-84fd-1560bdfc40b6",
      name: "TwoWayHEdge",
      id: "e8206ee9-dccd-4578-84f0-adbe13eb4f40",
    },
    {
      start: {
        x: -1660,
        y: -1300,
      },
      startId: "cd05210f-4b04-455b-84fd-1560bdfc40b6",
      end: {
        x: -1580,
        y: -1940,
      },
      endId: "6ef35753-d9c9-4b12-8832-5b2f5d695674",
      name: "TwoWayVEdge",
      id: "96a86061-2b3c-4c0e-af2e-728352f00df0",
    },
    {
      start: {
        x: -1580,
        y: -1940,
      },
      startId: "6ef35753-d9c9-4b12-8832-5b2f5d695674",
      end: {
        x: -1700,
        y: -2400,
      },
      endId: "252e5871-5f5b-4fe3-adcf-f82de3b6ff28",
      name: "TwoWayVEdge",
      id: "7fec3359-2d03-4a5d-992b-19bc81b53b88",
    },
    {
      start: {
        x: -1200,
        y: -2820,
      },
      startId: "8031e377-b46a-43e8-8138-594ceaeee66b",
      end: {
        x: -1680,
        y: -2840,
      },
      endId: "23c56dc0-4265-4efc-93fc-090914d2dcd6",
      name: "TwoWayHEdge",
      id: "bea8d1e7-1e56-40e5-9964-4470cae5b2bc",
    },
    {
      start: {
        x: -1700,
        y: -2400,
      },
      startId: "252e5871-5f5b-4fe3-adcf-f82de3b6ff28",
      end: {
        x: -1680,
        y: -2840,
      },
      endId: "23c56dc0-4265-4efc-93fc-090914d2dcd6",
      name: "TwoWayVEdge",
      id: "01b25e5a-a890-45b2-8dc0-d79602111f97",
    },
  ],
};
export default europeCaveHall;
