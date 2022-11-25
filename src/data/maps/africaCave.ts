import type { GraphJSON } from "global";

const africaCave: GraphJSON = {
  vertices: [
    {
      area: "AfricaCave",
      position: {
        x: 40,
        y: 120,
      },
      name: "BattleField",
      id: "bdd72f70-ed34-45b0-b47d-af27cfe4897f",
      edges: [
        "770cc908-bc7c-4755-b7c9-6a30013cc101",
        "2ad430a5-76aa-4617-87fd-a908708c1202",
      ],
      top: "bc5420c5-d894-4759-935d-644f11dcccfb",
      bottom: "90d6c52b-bb28-47f2-b82e-eddc707b72ed",
    },
    {
      id: "bc5420c5-d894-4759-935d-644f11dcccfb",

      area: "AfricaCave",
      name: "CaveField",
      position: {
        x: 0,
        y: -440,
      },
      edges: ["770cc908-bc7c-4755-b7c9-6a30013cc101"],
      bottom: "bdd72f70-ed34-45b0-b47d-af27cfe4897f",
    },
    {
      id: "90d6c52b-bb28-47f2-b82e-eddc707b72ed",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 0,
        y: 660,
      },
      edges: [
        "2ad430a5-76aa-4617-87fd-a908708c1202",
        "1a1626bb-8173-4eb2-a01c-4ef96823806c",
        "210e3459-7dfa-4906-abc0-5f4c938e7a9c",
      ],
      top: "bdd72f70-ed34-45b0-b47d-af27cfe4897f",
      left: "cb95e296-2a0c-4544-94fb-bec7357c87f8",
      bottom: "12272a5c-f61d-493e-872e-3c5066c3e377",
    },
    {
      id: "cb95e296-2a0c-4544-94fb-bec7357c87f8",

      area: "AfricaCave",
      name: "MagicBookField",
      position: {
        x: -560,
        y: 660,
      },
      edges: [
        "1a1626bb-8173-4eb2-a01c-4ef96823806c",
        "85363dd6-9150-4eaa-be98-4635c892b755",
      ],
      right: "90d6c52b-bb28-47f2-b82e-eddc707b72ed",
      bottom: "f243fab7-6b7c-4c82-9548-d4bb1ca9ee46",
    },
    {
      id: "f243fab7-6b7c-4c82-9548-d4bb1ca9ee46",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -540,
        y: 1500,
      },
      edges: [
        "85363dd6-9150-4eaa-be98-4635c892b755",
        "c6ea57b1-902f-4e7e-8466-50c6080794d6",
        "99969cf3-4a74-4a16-90a7-c4cc5f9ec31d",
      ],
      top: "cb95e296-2a0c-4544-94fb-bec7357c87f8",
      right: "022cbd5c-e345-4be4-abd3-99ea4b0303e5",
      left: "4902edfc-ee6d-4ea7-9fd6-86192e8036b7",
    },
    {
      id: "12272a5c-f61d-493e-872e-3c5066c3e377",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: 100,
        y: 1060,
      },
      edges: [
        "210e3459-7dfa-4906-abc0-5f4c938e7a9c",
        "f7cb2f8f-87a4-49b8-96a9-0e1d5b6624ad",
        "af88a4c5-6b4c-4da4-b3a4-8dd6c00982c4",
      ],
      top: "90d6c52b-bb28-47f2-b82e-eddc707b72ed",
      bottom: "022cbd5c-e345-4be4-abd3-99ea4b0303e5",
      right: "b9a251d2-2864-41b7-8b18-e0042fe6eda8",
    },
    {
      id: "022cbd5c-e345-4be4-abd3-99ea4b0303e5",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 40,
        y: 1500,
      },
      edges: [
        "f7cb2f8f-87a4-49b8-96a9-0e1d5b6624ad",
        "c6ea57b1-902f-4e7e-8466-50c6080794d6",
        "f970cb0f-75fb-49b7-a772-7a3d2c0020ba",
      ],
      top: "12272a5c-f61d-493e-872e-3c5066c3e377",
      left: "f243fab7-6b7c-4c82-9548-d4bb1ca9ee46",
      right: "27bec77d-e13a-4c21-9f69-e556ee2354b9",
    },
    {
      id: "b9a251d2-2864-41b7-8b18-e0042fe6eda8",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 760,
        y: 1000,
      },
      edges: [
        "af88a4c5-6b4c-4da4-b3a4-8dd6c00982c4",
        "eb044bb7-0ed7-401b-b6af-3e15a9baeee9",
      ],
      left: "12272a5c-f61d-493e-872e-3c5066c3e377",
      right: "b4f45ea9-8328-4dc9-9285-5240ccc18d02",
    },
    {
      id: "b4f45ea9-8328-4dc9-9285-5240ccc18d02",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 1380,
        y: 1080,
      },
      edges: [
        "eb044bb7-0ed7-401b-b6af-3e15a9baeee9",
        "9b67d34e-511f-4fa1-a5c2-ac6d0b087a2f",
        "85bf65ec-371e-4bb3-93e1-15676b83d431",
      ],
      left: "b9a251d2-2864-41b7-8b18-e0042fe6eda8",
      bottom: "27bec77d-e13a-4c21-9f69-e556ee2354b9",
      right: "c1176eb2-a5b2-4060-99de-7912298bd513",
    },
    {
      id: "27bec77d-e13a-4c21-9f69-e556ee2354b9",

      area: "AfricaCave",
      name: "RedTreasureField",
      position: {
        x: 1340,
        y: 1540,
      },
      edges: [
        "9b67d34e-511f-4fa1-a5c2-ac6d0b087a2f",
        "f970cb0f-75fb-49b7-a772-7a3d2c0020ba",
      ],
      top: "b4f45ea9-8328-4dc9-9285-5240ccc18d02",
      left: "022cbd5c-e345-4be4-abd3-99ea4b0303e5",
    },
    {
      id: "c1176eb2-a5b2-4060-99de-7912298bd513",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 2220,
        y: 1080,
      },
      edges: [
        "85bf65ec-371e-4bb3-93e1-15676b83d431",
        "cc1da81b-012f-444d-95a2-107716c71b9a",
        "76c76a7d-851a-4397-810f-666830f28a63",
      ],
      left: "b4f45ea9-8328-4dc9-9285-5240ccc18d02",
      bottom: "de97a6dd-c777-45c9-9386-52619e96cd53",
      right: "67fb3994-622f-4bb9-97cc-241718114d57",
    },
    {
      id: "de97a6dd-c777-45c9-9386-52619e96cd53",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: 2200,
        y: 1560,
      },
      edges: [
        "cc1da81b-012f-444d-95a2-107716c71b9a",
        "3d52926a-3e11-4129-a80a-00df1489d126",
      ],
      top: "c1176eb2-a5b2-4060-99de-7912298bd513",
      right: "dfdb736c-7714-4988-b352-d66097bf0302",
    },
    {
      id: "67fb3994-622f-4bb9-97cc-241718114d57",

      area: "AfricaCave",
      name: "GoldTreasureField",
      position: {
        x: 3060,
        y: 1080,
      },
      edges: [
        "76c76a7d-851a-4397-810f-666830f28a63",
        "0051df78-f4f2-4918-a6f0-b294dc33d412",
      ],
      left: "c1176eb2-a5b2-4060-99de-7912298bd513",
      top: "40f60bf2-4bc2-40bd-a9a7-f3b7c41434fa",
    },
    {
      id: "dfdb736c-7714-4988-b352-d66097bf0302",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 2900,
        y: 1560,
      },
      edges: [
        "3d52926a-3e11-4129-a80a-00df1489d126",
        "92cafebf-d46f-45ce-817b-47799c255480",
      ],
      left: "de97a6dd-c777-45c9-9386-52619e96cd53",
      right: "768626eb-22b7-43ac-8028-fc6d65511b63",
    },
    {
      id: "40f60bf2-4bc2-40bd-a9a7-f3b7c41434fa",

      area: "AfricaCave",
      name: "DamageField",
      position: {
        x: 3100,
        y: 560,
      },
      edges: [
        "0051df78-f4f2-4918-a6f0-b294dc33d412",
        "07dd9208-bb4f-4192-bcf7-4d15524b21b8",
      ],
      bottom: "67fb3994-622f-4bb9-97cc-241718114d57",
      top: "ab8bb9ef-e794-4cc3-adf5-755839d2484a",
    },
    {
      id: "ab8bb9ef-e794-4cc3-adf5-755839d2484a",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 3020,
        y: 80,
      },
      edges: [
        "07dd9208-bb4f-4192-bcf7-4d15524b21b8",
        "42a82df1-9598-4c8c-afad-f0a10b9612b5",
      ],
      bottom: "40f60bf2-4bc2-40bd-a9a7-f3b7c41434fa",
      top: "1ac32011-de79-4f41-9db2-729f288b041f",
    },
    {
      id: "1ac32011-de79-4f41-9db2-729f288b041f",

      area: "AfricaCave",
      name: "CollectAllMoneyField",
      position: {
        x: 3080,
        y: -460,
      },
      edges: ["42a82df1-9598-4c8c-afad-f0a10b9612b5"],
      bottom: "ab8bb9ef-e794-4cc3-adf5-755839d2484a",
    },
    {
      id: "768626eb-22b7-43ac-8028-fc6d65511b63",

      area: "AfricaCave",
      name: "RedTreasureField",
      position: {
        x: 3620,
        y: 1520,
      },
      edges: [
        "92cafebf-d46f-45ce-817b-47799c255480",
        "6209c03c-b304-4f0d-8f2e-0e99aab183ee",
      ],
      left: "dfdb736c-7714-4988-b352-d66097bf0302",
      right: "619c3c28-f327-4187-beec-c1fabee4e6ac",
    },
    {
      id: "619c3c28-f327-4187-beec-c1fabee4e6ac",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: 4360,
        y: 1560,
      },
      edges: [
        "6209c03c-b304-4f0d-8f2e-0e99aab183ee",
        "54aa3e35-86f1-42be-90d3-1d899916ce7e",
      ],
      left: "768626eb-22b7-43ac-8028-fc6d65511b63",
      bottom: "7d32bd97-d3e7-4b68-be1a-173c15a84dd8",
    },
    {
      id: "7d32bd97-d3e7-4b68-be1a-173c15a84dd8",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 4400,
        y: 2120,
      },
      edges: [
        "54aa3e35-86f1-42be-90d3-1d899916ce7e",
        "113747c5-b421-4b58-852b-7fe3aa858d8d",
      ],
      top: "619c3c28-f327-4187-beec-c1fabee4e6ac",
      bottom: "17c61d4d-6630-41dc-8054-cd253313ea3c",
    },
    {
      id: "17c61d4d-6630-41dc-8054-cd253313ea3c",

      area: "AfricaCave",
      name: "MagicBookField",
      position: {
        x: 4380,
        y: 2640,
      },
      edges: [
        "113747c5-b421-4b58-852b-7fe3aa858d8d",
        "9db0e340-62e6-43f3-9db2-3b907f030b5d",
      ],
      top: "7d32bd97-d3e7-4b68-be1a-173c15a84dd8",
      bottom: "6fd0858c-b34f-4ef5-8c81-08d440ac9e06",
    },
    {
      id: "6fd0858c-b34f-4ef5-8c81-08d440ac9e06",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: 4440,
        y: 3160,
      },
      edges: [
        "9db0e340-62e6-43f3-9db2-3b907f030b5d",
        "c8ebecf4-e10f-4e07-a886-2a2525c309a6",
      ],
      top: "17c61d4d-6630-41dc-8054-cd253313ea3c",
      bottom: "919cccc1-cc34-4e95-90be-93426c81dc6a",
    },
    {
      id: "919cccc1-cc34-4e95-90be-93426c81dc6a",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 4380,
        y: 3680,
      },
      edges: [
        "c8ebecf4-e10f-4e07-a886-2a2525c309a6",
        "ce62312e-8752-4650-8274-8832b95c3477",
      ],
      top: "6fd0858c-b34f-4ef5-8c81-08d440ac9e06",
      bottom: "46efec56-9dea-46c3-b459-9f6c6b318d56",
    },
    {
      id: "46efec56-9dea-46c3-b459-9f6c6b318d56",

      area: "AfricaCave",
      name: "DamageField",
      position: {
        x: 4440,
        y: 4220,
      },
      edges: [
        "ce62312e-8752-4650-8274-8832b95c3477",
        "2a95165a-1be9-4ddc-bb4a-b2f0b4853fac",
      ],
      top: "919cccc1-cc34-4e95-90be-93426c81dc6a",
      bottom: "d78e3da5-591c-44b0-b022-f3568ea4e3da",
    },
    {
      id: "d78e3da5-591c-44b0-b022-f3568ea4e3da",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 4400,
        y: 4760,
      },
      edges: [
        "2a95165a-1be9-4ddc-bb4a-b2f0b4853fac",
        "ee1ad5c5-c0f2-4e13-834a-73cd0fa0dd83",
      ],
      top: "46efec56-9dea-46c3-b459-9f6c6b318d56",
      left: "b6eb3e64-2221-4ebc-8c9e-150148308572",
    },
    {
      id: "b6eb3e64-2221-4ebc-8c9e-150148308572",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: 3540,
        y: 4720,
      },
      edges: [
        "ee1ad5c5-c0f2-4e13-834a-73cd0fa0dd83",
        "dc24aed4-8e36-41af-a6b8-d615e0140829",
      ],
      right: "d78e3da5-591c-44b0-b022-f3568ea4e3da",
      left: "3d5df7fd-4eb8-4011-ae3a-d269eb892394",
    },
    {
      id: "3d5df7fd-4eb8-4011-ae3a-d269eb892394",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 2780,
        y: 4760,
      },
      edges: [
        "dc24aed4-8e36-41af-a6b8-d615e0140829",
        "82fcccdb-5c2d-4796-9dcd-d392578de277",
        "785a1dc7-3fd6-479c-ba72-8c599de1c2d9",
      ],
      right: "b6eb3e64-2221-4ebc-8c9e-150148308572",
      left: "f7cb3d63-2ead-4caa-9ea9-99c9c71a1daa",
      top: "8fdd13c7-7fd5-43df-8b20-18c4bdba8800",
    },
    {
      id: "f7cb3d63-2ead-4caa-9ea9-99c9c71a1daa",

      area: "AfricaCave",
      name: "DamageField",
      position: {
        x: 2160,
        y: 4720,
      },
      edges: [
        "82fcccdb-5c2d-4796-9dcd-d392578de277",
        "59d76516-24dd-4d2a-9576-9158a6205840",
      ],
      right: "3d5df7fd-4eb8-4011-ae3a-d269eb892394",
      left: "a724c0b2-69f8-4eb6-bf46-d23868e520d9",
    },
    {
      id: "8fdd13c7-7fd5-43df-8b20-18c4bdba8800",

      area: "AfricaCave",
      name: "DamageField",
      position: {
        x: 2700,
        y: 4240,
      },
      edges: [
        "785a1dc7-3fd6-479c-ba72-8c599de1c2d9",
        "94b7ea48-7e98-4799-ab9c-b5941f800eec",
      ],
      bottom: "3d5df7fd-4eb8-4011-ae3a-d269eb892394",
      left: "56e0e175-6a4f-464d-9991-c3f5f9a4ba6d",
    },
    {
      id: "56e0e175-6a4f-464d-9991-c3f5f9a4ba6d",

      area: "AfricaCave",
      name: "MagicBookField",
      position: {
        x: 1620,
        y: 4240,
      },
      edges: [
        "94b7ea48-7e98-4799-ab9c-b5941f800eec",
        "506a5faa-0ed5-4a6a-80a2-8e0bb3e33be5",
      ],
      right: "8fdd13c7-7fd5-43df-8b20-18c4bdba8800",
      bottom: "a724c0b2-69f8-4eb6-bf46-d23868e520d9",
    },
    {
      id: "a724c0b2-69f8-4eb6-bf46-d23868e520d9",

      area: "AfricaCave",
      name: "RedTreasureField",
      position: {
        x: 1560,
        y: 4760,
      },
      edges: [
        "59d76516-24dd-4d2a-9576-9158a6205840",
        "506a5faa-0ed5-4a6a-80a2-8e0bb3e33be5",
        "3ec78b83-50aa-4f6f-b3dd-e7fee8ad3843",
      ],
      right: "f7cb3d63-2ead-4caa-9ea9-99c9c71a1daa",
      top: "56e0e175-6a4f-464d-9991-c3f5f9a4ba6d",
      left: "9572121b-fd7c-4eb0-a61d-518195536ed6",
    },
    {
      id: "9572121b-fd7c-4eb0-a61d-518195536ed6",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 620,
        y: 4720,
      },
      edges: [
        "3ec78b83-50aa-4f6f-b3dd-e7fee8ad3843",
        "43764037-3abd-4990-84fc-6d4ce91b309e",
        "2ca24f36-fdf0-4a1d-ae9e-71e1514d172f",
      ],
      right: "a724c0b2-69f8-4eb6-bf46-d23868e520d9",
      top: "0e2fe179-1988-4e0d-b898-64ad41b9a477",
      left: "ab442928-5cca-44b3-a94d-44f2f56307fa",
    },
    {
      id: "0e2fe179-1988-4e0d-b898-64ad41b9a477",

      area: "AfricaCave",
      name: "CaveField",
      position: {
        x: 660,
        y: 4220,
      },
      edges: ["43764037-3abd-4990-84fc-6d4ce91b309e"],
      bottom: "9572121b-fd7c-4eb0-a61d-518195536ed6",
    },
    {
      id: "ab442928-5cca-44b3-a94d-44f2f56307fa",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: 20,
        y: 4680,
      },
      edges: [
        "2ca24f36-fdf0-4a1d-ae9e-71e1514d172f",
        "6735adc1-39e3-4a53-927f-963cab78e275",
        "83135b0c-193b-4f1b-b56a-16be83587081",
      ],
      right: "9572121b-fd7c-4eb0-a61d-518195536ed6",
      top: "5a3d2949-245e-4a38-89b3-336a32277d3e",
      left: "25f2aba0-ba51-42b1-8bdc-9f21a4c8cb2c",
    },
    {
      id: "5a3d2949-245e-4a38-89b3-336a32277d3e",

      area: "AfricaCave",
      name: "CaveField",
      position: {
        x: -100,
        y: 4220,
      },
      edges: ["6735adc1-39e3-4a53-927f-963cab78e275"],
      bottom: "ab442928-5cca-44b3-a94d-44f2f56307fa",
    },
    {
      id: "25f2aba0-ba51-42b1-8bdc-9f21a4c8cb2c",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: -580,
        y: 4720,
      },
      edges: [
        "83135b0c-193b-4f1b-b56a-16be83587081",
        "e934ab2a-ec1e-4cbb-975b-62c1624d6d58",
      ],
      right: "ab442928-5cca-44b3-a94d-44f2f56307fa",
      left: "1b841f01-7c27-43f9-9979-908f579c33d0",
    },
    {
      id: "1b841f01-7c27-43f9-9979-908f579c33d0",

      area: "AfricaCave",
      name: "DamageField",
      position: {
        x: -1180,
        y: 4700,
      },
      edges: [
        "e934ab2a-ec1e-4cbb-975b-62c1624d6d58",
        "81834504-0300-45c6-a800-805b3686d017",
        "08a9f4c0-0fa0-458b-947d-118452c00556",
      ],
      right: "25f2aba0-ba51-42b1-8bdc-9f21a4c8cb2c",
      top: "6d2beb22-8451-4932-a91c-90805f7748d3",
      left: "4bb9e022-c43c-4eef-ae7f-e8c6d50e66fe",
    },
    {
      id: "6d2beb22-8451-4932-a91c-90805f7748d3",

      area: "AfricaCave",
      name: "RedTreasureField",
      position: {
        x: -1140,
        y: 3940,
      },
      edges: [
        "81834504-0300-45c6-a800-805b3686d017",
        "976aba74-49bc-4e72-bf09-7e02cd6bd13f",
      ],
      bottom: "1b841f01-7c27-43f9-9979-908f579c33d0",
      left: "2361a4d1-fe56-4ce0-8a50-8cc4df740216",
    },
    {
      id: "2361a4d1-fe56-4ce0-8a50-8cc4df740216",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -1920,
        y: 3920,
      },
      edges: [
        "976aba74-49bc-4e72-bf09-7e02cd6bd13f",
        "8e9543e4-02e4-46f5-b098-3838b0006d3d",
      ],
      right: "6d2beb22-8451-4932-a91c-90805f7748d3",
      bottom: "28f33129-884a-4c31-a4dc-3c8a6f21fcfe",
    },
    {
      id: "28f33129-884a-4c31-a4dc-3c8a6f21fcfe",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: -1860,
        y: 4340,
      },
      edges: [
        "8e9543e4-02e4-46f5-b098-3838b0006d3d",
        "835f712d-0add-4b07-aeb4-3c5ec9af7358",
      ],
      top: "2361a4d1-fe56-4ce0-8a50-8cc4df740216",
      bottom: "4bb9e022-c43c-4eef-ae7f-e8c6d50e66fe",
    },
    {
      id: "4bb9e022-c43c-4eef-ae7f-e8c6d50e66fe",

      area: "AfricaCave",
      name: "DamageField",
      position: {
        x: -1940,
        y: 4720,
      },
      edges: [
        "835f712d-0add-4b07-aeb4-3c5ec9af7358",
        "08a9f4c0-0fa0-458b-947d-118452c00556",
        "52d49e35-7edc-47eb-9f19-8e0388a946d5",
      ],
      top: "28f33129-884a-4c31-a4dc-3c8a6f21fcfe",
      right: "1b841f01-7c27-43f9-9979-908f579c33d0",
      left: "ca438061-4d50-4f8f-b66a-25c75c61b612",
    },
    {
      id: "ca438061-4d50-4f8f-b66a-25c75c61b612",

      area: "AfricaCave",
      name: "MagicBookField",
      position: {
        x: -2860,
        y: 4720,
      },
      edges: [
        "52d49e35-7edc-47eb-9f19-8e0388a946d5",
        "7662c7e8-0735-4ff2-adab-7ee77f5f0b59",
      ],
      right: "4bb9e022-c43c-4eef-ae7f-e8c6d50e66fe",
      left: "6917ecb0-6c32-4fea-82c3-888aa0ec418f",
    },
    {
      id: "6917ecb0-6c32-4fea-82c3-888aa0ec418f",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -3740,
        y: 4720,
      },
      edges: [
        "7662c7e8-0735-4ff2-adab-7ee77f5f0b59",
        "70be7107-41c3-4b54-b679-d1c2f03e0681",
      ],
      right: "ca438061-4d50-4f8f-b66a-25c75c61b612",
      top: "597054ca-751b-4d5c-b903-a83968f606bd",
    },
    {
      id: "597054ca-751b-4d5c-b903-a83968f606bd",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: -3700,
        y: 4060,
      },
      edges: [
        "70be7107-41c3-4b54-b679-d1c2f03e0681",
        "6dca0df2-4e45-4b0c-b8f2-d06be4a20fa0",
      ],
      bottom: "6917ecb0-6c32-4fea-82c3-888aa0ec418f",
      top: "3fef4e47-4457-4f4c-95d0-e898b80a1049",
    },
    {
      id: "3fef4e47-4457-4f4c-95d0-e898b80a1049",

      area: "AfricaCave",
      name: "DamageField",
      position: {
        x: -3800,
        y: 3360,
      },
      edges: [
        "6dca0df2-4e45-4b0c-b8f2-d06be4a20fa0",
        "8fdadd93-11a2-49bc-a944-0e358cef4b29",
      ],
      bottom: "597054ca-751b-4d5c-b903-a83968f606bd",
      top: "42319cf2-b471-4ad1-a6af-b60c9dd95ba0",
    },
    {
      id: "42319cf2-b471-4ad1-a6af-b60c9dd95ba0",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -3720,
        y: 2660,
      },
      edges: [
        "8fdadd93-11a2-49bc-a944-0e358cef4b29",
        "d61cbb1c-7695-49f4-8e41-02cef2271740",
      ],
      bottom: "3fef4e47-4457-4f4c-95d0-e898b80a1049",
      top: "d82f2b6f-def0-4f68-99d0-22456cd681e5",
    },
    {
      id: "d82f2b6f-def0-4f68-99d0-22456cd681e5",

      area: "AfricaCave",
      name: "DamageField",
      position: {
        x: -3820,
        y: 2100,
      },
      edges: [
        "d61cbb1c-7695-49f4-8e41-02cef2271740",
        "94c2dae8-5387-4cf5-bd4c-b3e016ca6eb8",
      ],
      bottom: "42319cf2-b471-4ad1-a6af-b60c9dd95ba0",
      top: "fd457200-094e-4474-ab9a-fa0e8778e110",
    },
    {
      id: "fd457200-094e-4474-ab9a-fa0e8778e110",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -3780,
        y: 1540,
      },
      edges: [
        "94c2dae8-5387-4cf5-bd4c-b3e016ca6eb8",
        "4382e2a4-a2be-45f6-9c33-43e780cca8d5",
      ],
      bottom: "d82f2b6f-def0-4f68-99d0-22456cd681e5",
      right: "7dfb8114-9fff-416f-ac37-a483cd5d976d",
    },
    {
      id: "7dfb8114-9fff-416f-ac37-a483cd5d976d",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: -3140,
        y: 1480,
      },
      edges: [
        "4382e2a4-a2be-45f6-9c33-43e780cca8d5",
        "f697012e-c793-4dbf-9b67-c093b5785a2d",
      ],
      left: "fd457200-094e-4474-ab9a-fa0e8778e110",
      right: "45f66a6b-9768-4af9-b69f-9bef27929ab0",
    },
    {
      id: "45f66a6b-9768-4af9-b69f-9bef27929ab0",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -2500,
        y: 1540,
      },
      edges: [
        "f697012e-c793-4dbf-9b67-c093b5785a2d",
        "975c8007-6c70-4da0-840f-4d90ed2ae3eb",
        "14b19c53-e84f-43ea-a2ba-c27dd6c9edb7",
      ],
      left: "7dfb8114-9fff-416f-ac37-a483cd5d976d",
      right: "7a925e26-741c-4a5d-9990-262388cd7ab8",
      top: "de1e589b-690b-4073-a43c-1a200bfdec1b",
    },
    {
      id: "7a925e26-741c-4a5d-9990-262388cd7ab8",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -1940,
        y: 1500,
      },
      edges: [
        "975c8007-6c70-4da0-840f-4d90ed2ae3eb",
        "2e35d792-96a8-4a5d-bd0f-2bbb7f31807e",
      ],
      left: "45f66a6b-9768-4af9-b69f-9bef27929ab0",
      right: "4902edfc-ee6d-4ea7-9fd6-86192e8036b7",
    },
    {
      id: "4902edfc-ee6d-4ea7-9fd6-86192e8036b7",

      area: "AfricaCave",
      name: "MagicBookField",
      position: {
        x: -1240,
        y: 1520,
      },
      edges: [
        "2e35d792-96a8-4a5d-bd0f-2bbb7f31807e",
        "99969cf3-4a74-4a16-90a7-c4cc5f9ec31d",
      ],
      left: "7a925e26-741c-4a5d-9990-262388cd7ab8",
      right: "f243fab7-6b7c-4c82-9548-d4bb1ca9ee46",
    },
    {
      id: "de1e589b-690b-4073-a43c-1a200bfdec1b",

      area: "AfricaCave",
      name: "DamageField",
      position: {
        x: -2540,
        y: 840,
      },
      edges: [
        "14b19c53-e84f-43ea-a2ba-c27dd6c9edb7",
        "2e8f3738-e126-4e76-b4a3-b3de7fea3b04",
      ],
      bottom: "45f66a6b-9768-4af9-b69f-9bef27929ab0",
      top: "39d1d0bd-ea81-4dd7-a878-ed6e2ce6a41f",
    },
    {
      id: "39d1d0bd-ea81-4dd7-a878-ed6e2ce6a41f",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -2480,
        y: 240,
      },
      edges: [
        "2e8f3738-e126-4e76-b4a3-b3de7fea3b04",
        "c36370e2-609d-4e69-bf4a-527d756b4c6c",
      ],
      bottom: "de1e589b-690b-4073-a43c-1a200bfdec1b",
      top: "603228d5-3794-4dcc-a794-81b3cb760c16",
    },
    {
      id: "603228d5-3794-4dcc-a794-81b3cb760c16",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -2540,
        y: -320,
      },
      edges: [
        "c36370e2-609d-4e69-bf4a-527d756b4c6c",
        "cd2d0047-8a57-4a41-8046-81db948dfc05",
        "d125340f-baef-4de4-b835-e673e9c5a7ed",
      ],
      bottom: "39d1d0bd-ea81-4dd7-a878-ed6e2ce6a41f",
      right: "eec3f3b1-36ad-4cf7-8c88-408719206382",
      left: "30bf652e-ce48-48ae-a4fd-77a4dfb4ca1e",
    },
    {
      id: "eec3f3b1-36ad-4cf7-8c88-408719206382",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -1780,
        y: -360,
      },
      edges: [
        "cd2d0047-8a57-4a41-8046-81db948dfc05",
        "76793fd0-7952-4f2a-a6c1-00a16e398263",
      ],
      left: "603228d5-3794-4dcc-a794-81b3cb760c16",
      top: "6814bf38-2eef-4672-8f77-ffdabf539a44",
    },
    {
      id: "6814bf38-2eef-4672-8f77-ffdabf539a44",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: -1740,
        y: -860,
      },
      edges: [
        "76793fd0-7952-4f2a-a6c1-00a16e398263",
        "b17ceaee-43a2-4b9d-885c-633a2e92d548",
      ],
      bottom: "eec3f3b1-36ad-4cf7-8c88-408719206382",
      left: "054328ed-2635-457b-949b-ac0493290a85",
    },
    {
      id: "054328ed-2635-457b-949b-ac0493290a85",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -2280,
        y: -800,
      },
      edges: [
        "b17ceaee-43a2-4b9d-885c-633a2e92d548",
        "16d721c2-774c-4c0a-90f6-df650167bc35",
      ],
      right: "6814bf38-2eef-4672-8f77-ffdabf539a44",
      left: "e615c605-840f-45fc-aabd-901c553b21c0",
    },
    {
      id: "e615c605-840f-45fc-aabd-901c553b21c0",

      area: "AfricaCave",
      name: "KeyTreasureField",
      position: {
        x: -2860,
        y: -840,
      },
      edges: [
        "16d721c2-774c-4c0a-90f6-df650167bc35",
        "2001047d-6faa-42bf-a825-be003e4707d2",
      ],
      right: "054328ed-2635-457b-949b-ac0493290a85",
      left: "d3b5b591-4c13-4f5e-8143-1d09abb3130b",
    },
    {
      id: "d3b5b591-4c13-4f5e-8143-1d09abb3130b",

      area: "AfricaCave",
      name: "BattleField",
      position: {
        x: -3440,
        y: -800,
      },
      edges: [
        "2001047d-6faa-42bf-a825-be003e4707d2",
        "9854f2ec-8a5e-49c4-8ee2-3378cb08e05e",
      ],
      right: "e615c605-840f-45fc-aabd-901c553b21c0",
      bottom: "30bf652e-ce48-48ae-a4fd-77a4dfb4ca1e",
    },
    {
      id: "30bf652e-ce48-48ae-a4fd-77a4dfb4ca1e",

      area: "AfricaCave",
      name: "TreasureField",
      position: {
        x: -3400,
        y: -340,
      },
      edges: [
        "9854f2ec-8a5e-49c4-8ee2-3378cb08e05e",
        "d125340f-baef-4de4-b835-e673e9c5a7ed",
      ],
      top: "d3b5b591-4c13-4f5e-8143-1d09abb3130b",
      right: "603228d5-3794-4dcc-a794-81b3cb760c16",
    },
  ],
  edges: [
    {
      start: {
        x: 40,
        y: 120,
      },
      startId: "bdd72f70-ed34-45b0-b47d-af27cfe4897f",
      end: {
        x: 0,
        y: -440,
      },
      endId: "bc5420c5-d894-4759-935d-644f11dcccfb",
      name: "TwoWayVEdge",
      id: "770cc908-bc7c-4755-b7c9-6a30013cc101",
    },
    {
      start: {
        x: 40,
        y: 120,
      },
      startId: "bdd72f70-ed34-45b0-b47d-af27cfe4897f",
      end: {
        x: 0,
        y: 660,
      },
      endId: "90d6c52b-bb28-47f2-b82e-eddc707b72ed",
      name: "TwoWayVEdge",
      id: "2ad430a5-76aa-4617-87fd-a908708c1202",
    },
    {
      start: {
        x: 0,
        y: 660,
      },
      startId: "90d6c52b-bb28-47f2-b82e-eddc707b72ed",
      end: {
        x: -560,
        y: 660,
      },
      endId: "cb95e296-2a0c-4544-94fb-bec7357c87f8",
      name: "TwoWayHEdge",
      id: "1a1626bb-8173-4eb2-a01c-4ef96823806c",
    },
    {
      start: {
        x: -560,
        y: 660,
      },
      startId: "cb95e296-2a0c-4544-94fb-bec7357c87f8",
      end: {
        x: -540,
        y: 1500,
      },
      endId: "f243fab7-6b7c-4c82-9548-d4bb1ca9ee46",
      name: "TwoWayVEdge",
      id: "85363dd6-9150-4eaa-be98-4635c892b755",
    },
    {
      start: {
        x: 0,
        y: 660,
      },
      startId: "90d6c52b-bb28-47f2-b82e-eddc707b72ed",
      end: {
        x: 100,
        y: 1060,
      },
      endId: "12272a5c-f61d-493e-872e-3c5066c3e377",
      name: "TwoWayVEdge",
      id: "210e3459-7dfa-4906-abc0-5f4c938e7a9c",
    },
    {
      start: {
        x: 100,
        y: 1060,
      },
      startId: "12272a5c-f61d-493e-872e-3c5066c3e377",
      end: {
        x: 40,
        y: 1500,
      },
      endId: "022cbd5c-e345-4be4-abd3-99ea4b0303e5",
      name: "TwoWayVEdge",
      id: "f7cb2f8f-87a4-49b8-96a9-0e1d5b6624ad",
    },
    {
      start: {
        x: -540,
        y: 1500,
      },
      startId: "f243fab7-6b7c-4c82-9548-d4bb1ca9ee46",
      end: {
        x: 40,
        y: 1500,
      },
      endId: "022cbd5c-e345-4be4-abd3-99ea4b0303e5",
      name: "TwoWayHEdge",
      id: "c6ea57b1-902f-4e7e-8466-50c6080794d6",
    },
    {
      start: {
        x: 100,
        y: 1060,
      },
      startId: "12272a5c-f61d-493e-872e-3c5066c3e377",
      end: {
        x: 760,
        y: 1000,
      },
      endId: "b9a251d2-2864-41b7-8b18-e0042fe6eda8",
      name: "TwoWayHEdge",
      id: "af88a4c5-6b4c-4da4-b3a4-8dd6c00982c4",
    },
    {
      start: {
        x: 760,
        y: 1000,
      },
      startId: "b9a251d2-2864-41b7-8b18-e0042fe6eda8",
      end: {
        x: 1380,
        y: 1080,
      },
      endId: "b4f45ea9-8328-4dc9-9285-5240ccc18d02",
      name: "TwoWayHEdge",
      id: "eb044bb7-0ed7-401b-b6af-3e15a9baeee9",
    },
    {
      start: {
        x: 1380,
        y: 1080,
      },
      startId: "b4f45ea9-8328-4dc9-9285-5240ccc18d02",
      end: {
        x: 1340,
        y: 1540,
      },
      endId: "27bec77d-e13a-4c21-9f69-e556ee2354b9",
      name: "TwoWayVEdge",
      id: "9b67d34e-511f-4fa1-a5c2-ac6d0b087a2f",
    },
    {
      start: {
        x: 40,
        y: 1500,
      },
      startId: "022cbd5c-e345-4be4-abd3-99ea4b0303e5",
      end: {
        x: 1340,
        y: 1540,
      },
      endId: "27bec77d-e13a-4c21-9f69-e556ee2354b9",
      name: "TwoWayHEdge",
      id: "f970cb0f-75fb-49b7-a772-7a3d2c0020ba",
    },
    {
      start: {
        x: 1380,
        y: 1080,
      },
      startId: "b4f45ea9-8328-4dc9-9285-5240ccc18d02",
      end: {
        x: 2220,
        y: 1080,
      },
      endId: "c1176eb2-a5b2-4060-99de-7912298bd513",
      name: "TwoWayHEdge",
      id: "85bf65ec-371e-4bb3-93e1-15676b83d431",
    },
    {
      start: {
        x: 2220,
        y: 1080,
      },
      startId: "c1176eb2-a5b2-4060-99de-7912298bd513",
      end: {
        x: 2200,
        y: 1560,
      },
      endId: "de97a6dd-c777-45c9-9386-52619e96cd53",
      name: "TwoWayVEdge",
      id: "cc1da81b-012f-444d-95a2-107716c71b9a",
    },
    {
      start: {
        x: 2220,
        y: 1080,
      },
      startId: "c1176eb2-a5b2-4060-99de-7912298bd513",
      end: {
        x: 3060,
        y: 1080,
      },
      endId: "67fb3994-622f-4bb9-97cc-241718114d57",
      name: "TwoWayHEdge",
      id: "76c76a7d-851a-4397-810f-666830f28a63",
    },
    {
      start: {
        x: 2200,
        y: 1560,
      },
      startId: "de97a6dd-c777-45c9-9386-52619e96cd53",
      end: {
        x: 2900,
        y: 1560,
      },
      endId: "dfdb736c-7714-4988-b352-d66097bf0302",
      name: "TwoWayHEdge",
      id: "3d52926a-3e11-4129-a80a-00df1489d126",
    },
    {
      start: {
        x: 3060,
        y: 1080,
      },
      startId: "67fb3994-622f-4bb9-97cc-241718114d57",
      end: {
        x: 3100,
        y: 560,
      },
      endId: "40f60bf2-4bc2-40bd-a9a7-f3b7c41434fa",
      name: "TwoWayVEdge",
      id: "0051df78-f4f2-4918-a6f0-b294dc33d412",
    },
    {
      start: {
        x: 3100,
        y: 560,
      },
      startId: "40f60bf2-4bc2-40bd-a9a7-f3b7c41434fa",
      end: {
        x: 3020,
        y: 80,
      },
      endId: "ab8bb9ef-e794-4cc3-adf5-755839d2484a",
      name: "TwoWayVEdge",
      id: "07dd9208-bb4f-4192-bcf7-4d15524b21b8",
    },
    {
      start: {
        x: 3020,
        y: 80,
      },
      startId: "ab8bb9ef-e794-4cc3-adf5-755839d2484a",
      end: {
        x: 3080,
        y: -460,
      },
      endId: "1ac32011-de79-4f41-9db2-729f288b041f",
      name: "TwoWayVEdge",
      id: "42a82df1-9598-4c8c-afad-f0a10b9612b5",
    },
    {
      start: {
        x: 2900,
        y: 1560,
      },
      startId: "dfdb736c-7714-4988-b352-d66097bf0302",
      end: {
        x: 3620,
        y: 1520,
      },
      endId: "768626eb-22b7-43ac-8028-fc6d65511b63",
      name: "TwoWayHEdge",
      id: "92cafebf-d46f-45ce-817b-47799c255480",
    },
    {
      start: {
        x: 3620,
        y: 1520,
      },
      startId: "768626eb-22b7-43ac-8028-fc6d65511b63",
      end: {
        x: 4360,
        y: 1560,
      },
      endId: "619c3c28-f327-4187-beec-c1fabee4e6ac",
      name: "TwoWayHEdge",
      id: "6209c03c-b304-4f0d-8f2e-0e99aab183ee",
    },
    {
      start: {
        x: 4360,
        y: 1560,
      },
      startId: "619c3c28-f327-4187-beec-c1fabee4e6ac",
      end: {
        x: 4400,
        y: 2120,
      },
      endId: "7d32bd97-d3e7-4b68-be1a-173c15a84dd8",
      name: "TwoWayVEdge",
      id: "54aa3e35-86f1-42be-90d3-1d899916ce7e",
    },
    {
      start: {
        x: 4400,
        y: 2120,
      },
      startId: "7d32bd97-d3e7-4b68-be1a-173c15a84dd8",
      end: {
        x: 4380,
        y: 2640,
      },
      endId: "17c61d4d-6630-41dc-8054-cd253313ea3c",
      name: "TwoWayVEdge",
      id: "113747c5-b421-4b58-852b-7fe3aa858d8d",
    },
    {
      start: {
        x: 4380,
        y: 2640,
      },
      startId: "17c61d4d-6630-41dc-8054-cd253313ea3c",
      end: {
        x: 4440,
        y: 3160,
      },
      endId: "6fd0858c-b34f-4ef5-8c81-08d440ac9e06",
      name: "TwoWayVEdge",
      id: "9db0e340-62e6-43f3-9db2-3b907f030b5d",
    },
    {
      start: {
        x: 4440,
        y: 3160,
      },
      startId: "6fd0858c-b34f-4ef5-8c81-08d440ac9e06",
      end: {
        x: 4380,
        y: 3680,
      },
      endId: "919cccc1-cc34-4e95-90be-93426c81dc6a",
      name: "TwoWayVEdge",
      id: "c8ebecf4-e10f-4e07-a886-2a2525c309a6",
    },
    {
      start: {
        x: 4380,
        y: 3680,
      },
      startId: "919cccc1-cc34-4e95-90be-93426c81dc6a",
      end: {
        x: 4440,
        y: 4220,
      },
      endId: "46efec56-9dea-46c3-b459-9f6c6b318d56",
      name: "TwoWayVEdge",
      id: "ce62312e-8752-4650-8274-8832b95c3477",
    },
    {
      start: {
        x: 4440,
        y: 4220,
      },
      startId: "46efec56-9dea-46c3-b459-9f6c6b318d56",
      end: {
        x: 4400,
        y: 4760,
      },
      endId: "d78e3da5-591c-44b0-b022-f3568ea4e3da",
      name: "TwoWayVEdge",
      id: "2a95165a-1be9-4ddc-bb4a-b2f0b4853fac",
    },
    {
      start: {
        x: 4400,
        y: 4760,
      },
      startId: "d78e3da5-591c-44b0-b022-f3568ea4e3da",
      end: {
        x: 3540,
        y: 4720,
      },
      endId: "b6eb3e64-2221-4ebc-8c9e-150148308572",
      name: "TwoWayHEdge",
      id: "ee1ad5c5-c0f2-4e13-834a-73cd0fa0dd83",
    },
    {
      start: {
        x: 3540,
        y: 4720,
      },
      startId: "b6eb3e64-2221-4ebc-8c9e-150148308572",
      end: {
        x: 2780,
        y: 4760,
      },
      endId: "3d5df7fd-4eb8-4011-ae3a-d269eb892394",
      name: "TwoWayHEdge",
      id: "dc24aed4-8e36-41af-a6b8-d615e0140829",
    },
    {
      start: {
        x: 2780,
        y: 4760,
      },
      startId: "3d5df7fd-4eb8-4011-ae3a-d269eb892394",
      end: {
        x: 2160,
        y: 4720,
      },
      endId: "f7cb3d63-2ead-4caa-9ea9-99c9c71a1daa",
      name: "TwoWayHEdge",
      id: "82fcccdb-5c2d-4796-9dcd-d392578de277",
    },
    {
      start: {
        x: 2780,
        y: 4760,
      },
      startId: "3d5df7fd-4eb8-4011-ae3a-d269eb892394",
      end: {
        x: 2700,
        y: 4240,
      },
      endId: "8fdd13c7-7fd5-43df-8b20-18c4bdba8800",
      name: "TwoWayVEdge",
      id: "785a1dc7-3fd6-479c-ba72-8c599de1c2d9",
    },
    {
      start: {
        x: 2700,
        y: 4240,
      },
      startId: "8fdd13c7-7fd5-43df-8b20-18c4bdba8800",
      end: {
        x: 1620,
        y: 4240,
      },
      endId: "56e0e175-6a4f-464d-9991-c3f5f9a4ba6d",
      name: "TwoWayHEdge",
      id: "94b7ea48-7e98-4799-ab9c-b5941f800eec",
    },
    {
      start: {
        x: 2160,
        y: 4720,
      },
      startId: "f7cb3d63-2ead-4caa-9ea9-99c9c71a1daa",
      end: {
        x: 1560,
        y: 4760,
      },
      endId: "a724c0b2-69f8-4eb6-bf46-d23868e520d9",
      name: "TwoWayHEdge",
      id: "59d76516-24dd-4d2a-9576-9158a6205840",
    },
    {
      start: {
        x: 1620,
        y: 4240,
      },
      startId: "56e0e175-6a4f-464d-9991-c3f5f9a4ba6d",
      end: {
        x: 1560,
        y: 4760,
      },
      endId: "a724c0b2-69f8-4eb6-bf46-d23868e520d9",
      name: "TwoWayVEdge",
      id: "506a5faa-0ed5-4a6a-80a2-8e0bb3e33be5",
    },
    {
      start: {
        x: 1560,
        y: 4760,
      },
      startId: "a724c0b2-69f8-4eb6-bf46-d23868e520d9",
      end: {
        x: 620,
        y: 4720,
      },
      endId: "9572121b-fd7c-4eb0-a61d-518195536ed6",
      name: "TwoWayHEdge",
      id: "3ec78b83-50aa-4f6f-b3dd-e7fee8ad3843",
    },
    {
      start: {
        x: 620,
        y: 4720,
      },
      startId: "9572121b-fd7c-4eb0-a61d-518195536ed6",
      end: {
        x: 660,
        y: 4220,
      },
      endId: "0e2fe179-1988-4e0d-b898-64ad41b9a477",
      name: "TwoWayVEdge",
      id: "43764037-3abd-4990-84fc-6d4ce91b309e",
    },
    {
      start: {
        x: 620,
        y: 4720,
      },
      startId: "9572121b-fd7c-4eb0-a61d-518195536ed6",
      end: {
        x: 20,
        y: 4680,
      },
      endId: "ab442928-5cca-44b3-a94d-44f2f56307fa",
      name: "TwoWayHEdge",
      id: "2ca24f36-fdf0-4a1d-ae9e-71e1514d172f",
    },
    {
      start: {
        x: 20,
        y: 4680,
      },
      startId: "ab442928-5cca-44b3-a94d-44f2f56307fa",
      end: {
        x: -100,
        y: 4220,
      },
      endId: "5a3d2949-245e-4a38-89b3-336a32277d3e",
      name: "TwoWayVEdge",
      id: "6735adc1-39e3-4a53-927f-963cab78e275",
    },
    {
      start: {
        x: 20,
        y: 4680,
      },
      startId: "ab442928-5cca-44b3-a94d-44f2f56307fa",
      end: {
        x: -580,
        y: 4720,
      },
      endId: "25f2aba0-ba51-42b1-8bdc-9f21a4c8cb2c",
      name: "TwoWayHEdge",
      id: "83135b0c-193b-4f1b-b56a-16be83587081",
    },
    {
      start: {
        x: -580,
        y: 4720,
      },
      startId: "25f2aba0-ba51-42b1-8bdc-9f21a4c8cb2c",
      end: {
        x: -1180,
        y: 4700,
      },
      endId: "1b841f01-7c27-43f9-9979-908f579c33d0",
      name: "TwoWayHEdge",
      id: "e934ab2a-ec1e-4cbb-975b-62c1624d6d58",
    },
    {
      start: {
        x: -1180,
        y: 4700,
      },
      startId: "1b841f01-7c27-43f9-9979-908f579c33d0",
      end: {
        x: -1140,
        y: 3940,
      },
      endId: "6d2beb22-8451-4932-a91c-90805f7748d3",
      name: "TwoWayVEdge",
      id: "81834504-0300-45c6-a800-805b3686d017",
    },
    {
      start: {
        x: -1140,
        y: 3940,
      },
      startId: "6d2beb22-8451-4932-a91c-90805f7748d3",
      end: {
        x: -1920,
        y: 3920,
      },
      endId: "2361a4d1-fe56-4ce0-8a50-8cc4df740216",
      name: "TwoWayHEdge",
      id: "976aba74-49bc-4e72-bf09-7e02cd6bd13f",
    },
    {
      start: {
        x: -1920,
        y: 3920,
      },
      startId: "2361a4d1-fe56-4ce0-8a50-8cc4df740216",
      end: {
        x: -1860,
        y: 4340,
      },
      endId: "28f33129-884a-4c31-a4dc-3c8a6f21fcfe",
      name: "TwoWayVEdge",
      id: "8e9543e4-02e4-46f5-b098-3838b0006d3d",
    },
    {
      start: {
        x: -1860,
        y: 4340,
      },
      startId: "28f33129-884a-4c31-a4dc-3c8a6f21fcfe",
      end: {
        x: -1940,
        y: 4720,
      },
      endId: "4bb9e022-c43c-4eef-ae7f-e8c6d50e66fe",
      name: "TwoWayVEdge",
      id: "835f712d-0add-4b07-aeb4-3c5ec9af7358",
    },
    {
      start: {
        x: -1940,
        y: 4720,
      },
      startId: "4bb9e022-c43c-4eef-ae7f-e8c6d50e66fe",
      end: {
        x: -1180,
        y: 4700,
      },
      endId: "1b841f01-7c27-43f9-9979-908f579c33d0",
      name: "TwoWayHEdge",
      id: "08a9f4c0-0fa0-458b-947d-118452c00556",
    },
    {
      start: {
        x: -1940,
        y: 4720,
      },
      startId: "4bb9e022-c43c-4eef-ae7f-e8c6d50e66fe",
      end: {
        x: -2860,
        y: 4720,
      },
      endId: "ca438061-4d50-4f8f-b66a-25c75c61b612",
      name: "TwoWayHEdge",
      id: "52d49e35-7edc-47eb-9f19-8e0388a946d5",
    },
    {
      start: {
        x: -2860,
        y: 4720,
      },
      startId: "ca438061-4d50-4f8f-b66a-25c75c61b612",
      end: {
        x: -3740,
        y: 4720,
      },
      endId: "6917ecb0-6c32-4fea-82c3-888aa0ec418f",
      name: "TwoWayHEdge",
      id: "7662c7e8-0735-4ff2-adab-7ee77f5f0b59",
    },
    {
      start: {
        x: -3740,
        y: 4720,
      },
      startId: "6917ecb0-6c32-4fea-82c3-888aa0ec418f",
      end: {
        x: -3700,
        y: 4060,
      },
      endId: "597054ca-751b-4d5c-b903-a83968f606bd",
      name: "TwoWayVEdge",
      id: "70be7107-41c3-4b54-b679-d1c2f03e0681",
    },
    {
      start: {
        x: -3700,
        y: 4060,
      },
      startId: "597054ca-751b-4d5c-b903-a83968f606bd",
      end: {
        x: -3800,
        y: 3360,
      },
      endId: "3fef4e47-4457-4f4c-95d0-e898b80a1049",
      name: "TwoWayVEdge",
      id: "6dca0df2-4e45-4b0c-b8f2-d06be4a20fa0",
    },
    {
      start: {
        x: -3800,
        y: 3360,
      },
      startId: "3fef4e47-4457-4f4c-95d0-e898b80a1049",
      end: {
        x: -3720,
        y: 2660,
      },
      endId: "42319cf2-b471-4ad1-a6af-b60c9dd95ba0",
      name: "TwoWayVEdge",
      id: "8fdadd93-11a2-49bc-a944-0e358cef4b29",
    },
    {
      start: {
        x: -3720,
        y: 2660,
      },
      startId: "42319cf2-b471-4ad1-a6af-b60c9dd95ba0",
      end: {
        x: -3820,
        y: 2100,
      },
      endId: "d82f2b6f-def0-4f68-99d0-22456cd681e5",
      name: "TwoWayVEdge",
      id: "d61cbb1c-7695-49f4-8e41-02cef2271740",
    },
    {
      start: {
        x: -3820,
        y: 2100,
      },
      startId: "d82f2b6f-def0-4f68-99d0-22456cd681e5",
      end: {
        x: -3780,
        y: 1540,
      },
      endId: "fd457200-094e-4474-ab9a-fa0e8778e110",
      name: "TwoWayVEdge",
      id: "94c2dae8-5387-4cf5-bd4c-b3e016ca6eb8",
    },
    {
      start: {
        x: -3780,
        y: 1540,
      },
      startId: "fd457200-094e-4474-ab9a-fa0e8778e110",
      end: {
        x: -3140,
        y: 1480,
      },
      endId: "7dfb8114-9fff-416f-ac37-a483cd5d976d",
      name: "TwoWayHEdge",
      id: "4382e2a4-a2be-45f6-9c33-43e780cca8d5",
    },
    {
      start: {
        x: -3140,
        y: 1480,
      },
      startId: "7dfb8114-9fff-416f-ac37-a483cd5d976d",
      end: {
        x: -2500,
        y: 1540,
      },
      endId: "45f66a6b-9768-4af9-b69f-9bef27929ab0",
      name: "TwoWayHEdge",
      id: "f697012e-c793-4dbf-9b67-c093b5785a2d",
    },
    {
      start: {
        x: -2500,
        y: 1540,
      },
      startId: "45f66a6b-9768-4af9-b69f-9bef27929ab0",
      end: {
        x: -1940,
        y: 1500,
      },
      endId: "7a925e26-741c-4a5d-9990-262388cd7ab8",
      name: "TwoWayHEdge",
      id: "975c8007-6c70-4da0-840f-4d90ed2ae3eb",
    },
    {
      start: {
        x: -1940,
        y: 1500,
      },
      startId: "7a925e26-741c-4a5d-9990-262388cd7ab8",
      end: {
        x: -1240,
        y: 1520,
      },
      endId: "4902edfc-ee6d-4ea7-9fd6-86192e8036b7",
      name: "TwoWayHEdge",
      id: "2e35d792-96a8-4a5d-bd0f-2bbb7f31807e",
    },
    {
      start: {
        x: -1240,
        y: 1520,
      },
      startId: "4902edfc-ee6d-4ea7-9fd6-86192e8036b7",
      end: {
        x: -540,
        y: 1500,
      },
      endId: "f243fab7-6b7c-4c82-9548-d4bb1ca9ee46",
      name: "TwoWayHEdge",
      id: "99969cf3-4a74-4a16-90a7-c4cc5f9ec31d",
    },
    {
      start: {
        x: -2500,
        y: 1540,
      },
      startId: "45f66a6b-9768-4af9-b69f-9bef27929ab0",
      end: {
        x: -2540,
        y: 840,
      },
      endId: "de1e589b-690b-4073-a43c-1a200bfdec1b",
      name: "TwoWayVEdge",
      id: "14b19c53-e84f-43ea-a2ba-c27dd6c9edb7",
    },
    {
      start: {
        x: -2540,
        y: 840,
      },
      startId: "de1e589b-690b-4073-a43c-1a200bfdec1b",
      end: {
        x: -2480,
        y: 240,
      },
      endId: "39d1d0bd-ea81-4dd7-a878-ed6e2ce6a41f",
      name: "TwoWayVEdge",
      id: "2e8f3738-e126-4e76-b4a3-b3de7fea3b04",
    },
    {
      start: {
        x: -2480,
        y: 240,
      },
      startId: "39d1d0bd-ea81-4dd7-a878-ed6e2ce6a41f",
      end: {
        x: -2540,
        y: -320,
      },
      endId: "603228d5-3794-4dcc-a794-81b3cb760c16",
      name: "TwoWayVEdge",
      id: "c36370e2-609d-4e69-bf4a-527d756b4c6c",
    },
    {
      start: {
        x: -2540,
        y: -320,
      },
      startId: "603228d5-3794-4dcc-a794-81b3cb760c16",
      end: {
        x: -1780,
        y: -360,
      },
      endId: "eec3f3b1-36ad-4cf7-8c88-408719206382",
      name: "TwoWayHEdge",
      id: "cd2d0047-8a57-4a41-8046-81db948dfc05",
    },
    {
      start: {
        x: -1780,
        y: -360,
      },
      startId: "eec3f3b1-36ad-4cf7-8c88-408719206382",
      end: {
        x: -1740,
        y: -860,
      },
      endId: "6814bf38-2eef-4672-8f77-ffdabf539a44",
      name: "TwoWayVEdge",
      id: "76793fd0-7952-4f2a-a6c1-00a16e398263",
    },
    {
      start: {
        x: -1740,
        y: -860,
      },
      startId: "6814bf38-2eef-4672-8f77-ffdabf539a44",
      end: {
        x: -2280,
        y: -800,
      },
      endId: "054328ed-2635-457b-949b-ac0493290a85",
      name: "TwoWayHEdge",
      id: "b17ceaee-43a2-4b9d-885c-633a2e92d548",
    },
    {
      start: {
        x: -2280,
        y: -800,
      },
      startId: "054328ed-2635-457b-949b-ac0493290a85",
      end: {
        x: -2860,
        y: -840,
      },
      endId: "e615c605-840f-45fc-aabd-901c553b21c0",
      name: "TwoWayHEdge",
      id: "16d721c2-774c-4c0a-90f6-df650167bc35",
    },
    {
      start: {
        x: -2860,
        y: -840,
      },
      startId: "e615c605-840f-45fc-aabd-901c553b21c0",
      end: {
        x: -3440,
        y: -800,
      },
      endId: "d3b5b591-4c13-4f5e-8143-1d09abb3130b",
      name: "TwoWayHEdge",
      id: "2001047d-6faa-42bf-a825-be003e4707d2",
    },
    {
      start: {
        x: -3440,
        y: -800,
      },
      startId: "d3b5b591-4c13-4f5e-8143-1d09abb3130b",
      end: {
        x: -3400,
        y: -340,
      },
      endId: "30bf652e-ce48-48ae-a4fd-77a4dfb4ca1e",
      name: "TwoWayVEdge",
      id: "9854f2ec-8a5e-49c4-8ee2-3378cb08e05e",
    },
    {
      start: {
        x: -3400,
        y: -340,
      },
      startId: "30bf652e-ce48-48ae-a4fd-77a4dfb4ca1e",
      end: {
        x: -2540,
        y: -320,
      },
      endId: "603228d5-3794-4dcc-a794-81b3cb760c16",
      name: "TwoWayHEdge",
      id: "d125340f-baef-4de4-b835-e673e9c5a7ed",
    },
  ],
};
export default africaCave;
