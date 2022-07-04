import { Vertex, Edge } from "../global";

const europeCave: { vertices: Vertex[]; edges: Edge[] } = {
  vertices: [
    {
      position: {
        x: 740,
        y: 660,
      },
      name: "BattleField",
      id: "923bc7a0-ba19-4481-b5be-2bbd68515476",
      edges: [
        "2328d4b2-9ed2-442b-8d21-809d57a5f0b1",
        "f9e316e4-ffa8-4dc2-9d59-03ea8efb0ba3",
        "e18bfea0-f496-430b-8fc9-4e0f310306dc",
      ],
      right: "968c0ad3-6616-42b6-87c3-3bd4c3daa9f0",
      bottom: "4d0623fe-09db-44fd-8026-2129324355cd",
      left: "b8216840-1eb2-46e3-9a8a-07aec953441b",
    },
    {
      id: "968c0ad3-6616-42b6-87c3-3bd4c3daa9f0",
      name: "TreasureField",
      position: {
        x: 1180,
        y: 640,
      },
      edges: [
        "2328d4b2-9ed2-442b-8d21-809d57a5f0b1",
        "f94e46be-848b-4695-a71a-6969dbbfa335",
      ],
      left: "923bc7a0-ba19-4481-b5be-2bbd68515476",
      top: "16e53271-b09d-4dbf-8b4d-02184254904e",
    },
    {
      id: "4d0623fe-09db-44fd-8026-2129324355cd",
      name: "CaveField",
      position: {
        x: 740,
        y: 1120,
      },
      edges: ["f9e316e4-ffa8-4dc2-9d59-03ea8efb0ba3"],
      top: "923bc7a0-ba19-4481-b5be-2bbd68515476",
    },
    {
      id: "b8216840-1eb2-46e3-9a8a-07aec953441b",
      name: "BattleField",
      position: {
        x: 280,
        y: 640,
      },
      edges: [
        "e18bfea0-f496-430b-8fc9-4e0f310306dc",
        "6e794f37-3703-4388-9470-289435e85a43",
      ],
      right: "923bc7a0-ba19-4481-b5be-2bbd68515476",
      top: "5b412c38-cf3d-4d28-889f-6cd3e8684d70",
    },
    {
      id: "5b412c38-cf3d-4d28-889f-6cd3e8684d70",
      name: "TreasureField",
      position: {
        x: 320,
        y: 180,
      },
      edges: [
        "6e794f37-3703-4388-9470-289435e85a43",
        "cc268b60-2f22-4578-ae53-7a715936434d",
        "c5aeaab6-0f6e-44c8-a051-2352830700d0",
        "ab9ab067-e73a-4fe4-8aa8-aa88ee383483",
      ],
      bottom: "b8216840-1eb2-46e3-9a8a-07aec953441b",
      right: "16e53271-b09d-4dbf-8b4d-02184254904e",
      top: "e1525a45-3195-4dc4-b47c-e4a0ecdbe5ed",
      left: "1be410d8-9b39-4d60-a487-f090cda3f6e9",
    },
    {
      id: "16e53271-b09d-4dbf-8b4d-02184254904e",
      name: "BattleField",
      position: {
        x: 1100,
        y: 180,
      },
      edges: [
        "cc268b60-2f22-4578-ae53-7a715936434d",
        "f94e46be-848b-4695-a71a-6969dbbfa335",
        "6613196c-0104-4369-a1ef-bd8b5f481ba7",
      ],
      left: "5b412c38-cf3d-4d28-889f-6cd3e8684d70",
      bottom: "968c0ad3-6616-42b6-87c3-3bd4c3daa9f0",
      right: "df329ffb-ead9-4a8b-ad9a-74fd656d02c5",
    },
    {
      id: "df329ffb-ead9-4a8b-ad9a-74fd656d02c5",
      name: "BattleField",
      position: {
        x: 1580,
        y: 140,
      },
      edges: [
        "6613196c-0104-4369-a1ef-bd8b5f481ba7",
        "99b97a11-7526-4528-ae8c-45d495d683fe",
        "a1909b6b-53cd-46d3-9bd2-0fdc441c7ec3",
      ],
      left: "16e53271-b09d-4dbf-8b4d-02184254904e",
      top: "73bfe278-b7ef-4a53-a5c3-457165dd8df1",
      right: "23005821-f6a2-4260-bf01-2c51454afcc9",
    },
    {
      id: "23005821-f6a2-4260-bf01-2c51454afcc9",
      name: "BattleField",
      position: {
        x: 2640,
        y: 160,
      },
      edges: [
        "a1909b6b-53cd-46d3-9bd2-0fdc441c7ec3",
        "7d6de301-7743-4c06-9713-27bf97969f22",
      ],
      left: "df329ffb-ead9-4a8b-ad9a-74fd656d02c5",
      top: "45951b9e-47cf-44cd-bdb5-1f6bee42a695",
    },
    {
      id: "73bfe278-b7ef-4a53-a5c3-457165dd8df1",
      name: "TreasureField",
      position: {
        x: 1600,
        y: -220,
      },
      edges: [
        "99b97a11-7526-4528-ae8c-45d495d683fe",
        "782a446d-f47d-4533-9dd2-d78eb7a2a576",
      ],
      bottom: "df329ffb-ead9-4a8b-ad9a-74fd656d02c5",
      right: "02f5f206-6b0d-4960-8178-83c5f6e24762",
    },
    {
      id: "02f5f206-6b0d-4960-8178-83c5f6e24762",
      name: "BattleField",
      position: {
        x: 2120,
        y: -180,
      },
      edges: [
        "782a446d-f47d-4533-9dd2-d78eb7a2a576",
        "fe361f76-98c4-447f-8511-0d5adf9fa6d9",
        "9648a982-62bb-433e-b1b2-c5cda463cd2f",
      ],
      left: "73bfe278-b7ef-4a53-a5c3-457165dd8df1",
      right: "45951b9e-47cf-44cd-bdb5-1f6bee42a695",
      top: "51f9f633-651b-4395-a4e9-3f314c6cd7f1",
    },
    {
      id: "45951b9e-47cf-44cd-bdb5-1f6bee42a695",
      name: "MagicField",
      position: {
        x: 2660,
        y: -200,
      },
      edges: [
        "fe361f76-98c4-447f-8511-0d5adf9fa6d9",
        "7d6de301-7743-4c06-9713-27bf97969f22",
      ],
      left: "02f5f206-6b0d-4960-8178-83c5f6e24762",
      bottom: "23005821-f6a2-4260-bf01-2c51454afcc9",
    },
    {
      id: "51f9f633-651b-4395-a4e9-3f314c6cd7f1",
      name: "TreasureField",
      position: {
        x: 2100,
        y: -600,
      },
      edges: [
        "9648a982-62bb-433e-b1b2-c5cda463cd2f",
        "16c7b672-c5e4-41b5-ae55-3b4694e3e6ed",
        "e0790ffc-3a8e-44e9-89b9-5054740c0045",
        "fad869f4-d95e-4a9d-9ef3-8e6bb3f9e6ce",
      ],
      bottom: "02f5f206-6b0d-4960-8178-83c5f6e24762",
      right: "6ac6d928-362e-442a-9e6b-ddbac0744103",
      top: "031011d7-fe5a-49b7-be64-999d5a2b1b4b",
      left: "20c5b59a-2c70-4751-8ce9-a0038e30a994",
    },
    {
      id: "6ac6d928-362e-442a-9e6b-ddbac0744103",
      name: "BattleField",
      position: {
        x: 2660,
        y: -620,
      },
      edges: [
        "16c7b672-c5e4-41b5-ae55-3b4694e3e6ed",
        "aa0103a2-5c85-4400-b23a-d0b55c84b53f",
      ],
      left: "51f9f633-651b-4395-a4e9-3f314c6cd7f1",
      right: "0181cedf-87f8-4a4a-b986-16d12389d308",
    },
    {
      id: "0181cedf-87f8-4a4a-b986-16d12389d308",
      name: "BattleField",
      position: {
        x: 3200,
        y: -580,
      },
      edges: [
        "aa0103a2-5c85-4400-b23a-d0b55c84b53f",
        "8a87e8ce-c1fd-43fc-b2f3-8fcc87a4cae9",
      ],
      left: "6ac6d928-362e-442a-9e6b-ddbac0744103",
      bottom: "408e5e4a-265b-46db-a694-1b2456606c45",
    },
    {
      id: "408e5e4a-265b-46db-a694-1b2456606c45",
      name: "CollectMoneyField",
      position: {
        x: 3260,
        y: -200,
      },
      edges: ["8a87e8ce-c1fd-43fc-b2f3-8fcc87a4cae9"],
      top: "0181cedf-87f8-4a4a-b986-16d12389d308",
    },
    {
      id: "031011d7-fe5a-49b7-be64-999d5a2b1b4b",
      name: "BattleField",
      position: {
        x: 2120,
        y: -1040,
      },
      edges: [
        "e0790ffc-3a8e-44e9-89b9-5054740c0045",
        "6a3ac97c-b85a-4ee2-b504-a12370d26916",
        "683a0886-9311-4c3b-8e3e-8db660d8211a",
      ],
      bottom: "51f9f633-651b-4395-a4e9-3f314c6cd7f1",
      top: "095575ac-c0fb-4fd7-b121-cbccdf9d523d",
      right: "3e8b13d5-c29c-41e8-abfd-2152c4f95ad3",
    },
    {
      id: "095575ac-c0fb-4fd7-b121-cbccdf9d523d",
      name: "BattleField",
      position: {
        x: 2040,
        y: -1500,
      },
      edges: [
        "6a3ac97c-b85a-4ee2-b504-a12370d26916",
        "2ab81764-f9cc-4663-a125-f3818c38ff71",
      ],
      bottom: "031011d7-fe5a-49b7-be64-999d5a2b1b4b",
      left: "3858fcfd-0281-41de-a627-adeccd18c767",
    },
    {
      id: "3858fcfd-0281-41de-a627-adeccd18c767",
      name: "GoldTreasureField",
      position: {
        x: 1480,
        y: -1460,
      },
      edges: ["2ab81764-f9cc-4663-a125-f3818c38ff71"],
      right: "095575ac-c0fb-4fd7-b121-cbccdf9d523d",
    },
    {
      id: "20c5b59a-2c70-4751-8ce9-a0038e30a994",
      name: "BattleField",
      position: {
        x: 1500,
        y: -620,
      },
      edges: [
        "fad869f4-d95e-4a9d-9ef3-8e6bb3f9e6ce",
        "1e8c5d97-048a-44d2-99e4-e8629bafbd85",
      ],
      right: "51f9f633-651b-4395-a4e9-3f314c6cd7f1",
      left: "77ab92cc-9356-4e3c-b2c5-7818ebbfada7",
    },
    {
      id: "e1525a45-3195-4dc4-b47c-e4a0ecdbe5ed",
      name: "BattleField",
      position: {
        x: 300,
        y: -660,
      },
      edges: [
        "c5aeaab6-0f6e-44c8-a051-2352830700d0",
        "2d1d7058-d6b9-481d-b6fb-f2391d03b4fa",
      ],
      bottom: "5b412c38-cf3d-4d28-889f-6cd3e8684d70",
      right: "77ab92cc-9356-4e3c-b2c5-7818ebbfada7",
    },
    {
      id: "77ab92cc-9356-4e3c-b2c5-7818ebbfada7",
      name: "RedTreasureField",
      position: {
        x: 880,
        y: -620,
      },
      edges: [
        "2d1d7058-d6b9-481d-b6fb-f2391d03b4fa",
        "1e8c5d97-048a-44d2-99e4-e8629bafbd85",
        "229c7c59-6e7a-4510-a757-698f4013aa76",
      ],
      left: "e1525a45-3195-4dc4-b47c-e4a0ecdbe5ed",
      right: "20c5b59a-2c70-4751-8ce9-a0038e30a994",
      top: "4e63f8b7-e156-4eec-9bbb-9cfeaf7e5d5a",
    },
    {
      id: "1be410d8-9b39-4d60-a487-f090cda3f6e9",
      name: "DamageField",
      position: {
        x: -200,
        y: 200,
      },
      edges: [
        "ab9ab067-e73a-4fe4-8aa8-aa88ee383483",
        "e8a4d7a9-a334-41db-a411-095da498c9e4",
      ],
      right: "5b412c38-cf3d-4d28-889f-6cd3e8684d70",
      left: "790ebe6d-fa0f-40ab-bde3-2d2ba049828e",
    },
    {
      id: "790ebe6d-fa0f-40ab-bde3-2d2ba049828e",
      name: "MagicField",
      position: {
        x: -700,
        y: 180,
      },
      edges: [
        "e8a4d7a9-a334-41db-a411-095da498c9e4",
        "74a07b22-ff3e-4d74-be76-87a5d81c7ff3",
        "07a33cbe-8f8a-43e0-bc9b-82f5ad2b4cb3",
      ],
      right: "1be410d8-9b39-4d60-a487-f090cda3f6e9",
      left: "739da62b-04ea-419a-97a4-866cb4946bcd",
      top: "a84ee664-9388-44df-8954-7693248d7cc9",
    },
    {
      id: "739da62b-04ea-419a-97a4-866cb4946bcd",
      name: "BattleField",
      position: {
        x: -1180,
        y: 180,
      },
      edges: [
        "74a07b22-ff3e-4d74-be76-87a5d81c7ff3",
        "ac7cab01-1d0a-426a-996f-0db78f834d6d",
      ],
      right: "790ebe6d-fa0f-40ab-bde3-2d2ba049828e",
      top: "f51c3d8a-9ebd-418c-8345-5c1c149dd684",
    },
    {
      id: "f51c3d8a-9ebd-418c-8345-5c1c149dd684",
      name: "BattleField",
      position: {
        x: -1240,
        y: -220,
      },
      edges: [
        "ac7cab01-1d0a-426a-996f-0db78f834d6d",
        "75fb2249-1c36-439e-b767-d2da0920e8fc",
        "27e3af69-c2c1-464e-b071-6f8ebefef008",
      ],
      bottom: "739da62b-04ea-419a-97a4-866cb4946bcd",
      top: "ab9d7261-e7b0-4d1d-9bed-c752daf170a7",
      left: "8465ff6b-a909-437a-a6c2-a552e88fa308",
    },
    {
      id: "ab9d7261-e7b0-4d1d-9bed-c752daf170a7",
      name: "TreasureField",
      position: {
        x: -1160,
        y: -620,
      },
      edges: [
        "75fb2249-1c36-439e-b767-d2da0920e8fc",
        "b4b71818-18d1-4d79-ba35-78297ad8b180",
      ],
      bottom: "f51c3d8a-9ebd-418c-8345-5c1c149dd684",
      right: "a84ee664-9388-44df-8954-7693248d7cc9",
    },
    {
      id: "a84ee664-9388-44df-8954-7693248d7cc9",
      name: "BattleField",
      position: {
        x: -700,
        y: -560,
      },
      edges: [
        "b4b71818-18d1-4d79-ba35-78297ad8b180",
        "07a33cbe-8f8a-43e0-bc9b-82f5ad2b4cb3",
        "e3a76580-63a8-4998-a348-5a3cea7fb7bc",
      ],
      left: "ab9d7261-e7b0-4d1d-9bed-c752daf170a7",
      bottom: "790ebe6d-fa0f-40ab-bde3-2d2ba049828e",
      top: "8c9194b2-49d7-491d-9c54-636e3e5ec61d",
    },
    {
      id: "8c9194b2-49d7-491d-9c54-636e3e5ec61d",
      name: "BattleField",
      position: {
        x: -640,
        y: -940,
      },
      edges: [
        "e3a76580-63a8-4998-a348-5a3cea7fb7bc",
        "6b1745c8-f1ec-4d4d-b90f-3a2273a1de94",
        "54493e76-e8b6-480a-9018-f29b05776eda",
      ],
      bottom: "a84ee664-9388-44df-8954-7693248d7cc9",
      right: "b99a657d-e8fa-4185-88ef-141fd39969c5",
      top: "4ff662e0-0691-4092-a168-1db413247482",
    },
    {
      id: "b99a657d-e8fa-4185-88ef-141fd39969c5",
      name: "BattleField",
      position: {
        x: 20,
        y: -940,
      },
      edges: [
        "6b1745c8-f1ec-4d4d-b90f-3a2273a1de94",
        "314dcb3f-723a-4d7e-8a6e-b547fbc64c8f",
      ],
      left: "8c9194b2-49d7-491d-9c54-636e3e5ec61d",
      top: "4e5fd11d-5008-4077-93fc-3904b8c29deb",
    },
    {
      id: "4ff662e0-0691-4092-a168-1db413247482",
      name: "TreasureField",
      position: {
        x: -680,
        y: -1320,
      },
      edges: [
        "54493e76-e8b6-480a-9018-f29b05776eda",
        "fc9f1419-53a7-4588-bfaa-7c7a8a105ea1",
        "fe2c3048-5379-4395-b653-18867ed13382",
      ],
      bottom: "8c9194b2-49d7-491d-9c54-636e3e5ec61d",
      top: "6447052c-251c-4531-a0b7-82c3cf02753c",
      left: "2cae1249-b99e-446a-9861-f1fa629c824b",
    },
    {
      id: "6447052c-251c-4531-a0b7-82c3cf02753c",
      name: "BattleField",
      position: {
        x: -640,
        y: -1680,
      },
      edges: [
        "fc9f1419-53a7-4588-bfaa-7c7a8a105ea1",
        "99509eb5-353f-4550-a75a-8717219ba283",
      ],
      bottom: "4ff662e0-0691-4092-a168-1db413247482",
      right: "4e5fd11d-5008-4077-93fc-3904b8c29deb",
    },
    {
      id: "4e5fd11d-5008-4077-93fc-3904b8c29deb",
      name: "BattleField",
      position: {
        x: -60,
        y: -1660,
      },
      edges: [
        "99509eb5-353f-4550-a75a-8717219ba283",
        "314dcb3f-723a-4d7e-8a6e-b547fbc64c8f",
      ],
      left: "6447052c-251c-4531-a0b7-82c3cf02753c",
      bottom: "b99a657d-e8fa-4185-88ef-141fd39969c5",
    },
    {
      id: "4e63f8b7-e156-4eec-9bbb-9cfeaf7e5d5a",
      name: "BattleField",
      position: {
        x: 820,
        y: -1160,
      },
      edges: [
        "229c7c59-6e7a-4510-a757-698f4013aa76",
        "ac72faa7-fcda-41d1-b7fd-7d03c8605b64",
      ],
      bottom: "77ab92cc-9356-4e3c-b2c5-7818ebbfada7",
      top: "e734d641-cb72-4f52-95ee-b112017bf564",
    },
    {
      id: "e734d641-cb72-4f52-95ee-b112017bf564",
      name: "MagicField",
      position: {
        x: 880,
        y: -1760,
      },
      edges: [
        "ac72faa7-fcda-41d1-b7fd-7d03c8605b64",
        "83cd1b7e-f76c-46ba-8568-6159aa62d058",
        "9686904e-5b5b-4fda-9f5a-df81a5feeb95",
      ],
      bottom: "4e63f8b7-e156-4eec-9bbb-9cfeaf7e5d5a",
      top: "f37ead4a-db4f-4290-bed5-137b73202f6a",
      left: "db313919-5bd7-46c3-9a4f-3f1448c8f9de",
    },
    {
      id: "f37ead4a-db4f-4290-bed5-137b73202f6a",
      name: "BattleField",
      position: {
        x: 780,
        y: -2220,
      },
      edges: [
        "83cd1b7e-f76c-46ba-8568-6159aa62d058",
        "b43c32f8-d79e-4c47-bcb7-27c3cfe7ae8c",
        "094fa1d8-afa8-4b05-8eee-7f86f4b65014",
      ],
      bottom: "e734d641-cb72-4f52-95ee-b112017bf564",
      left: "67689a4d-e9f1-4700-a43a-b056824514d9",
      top: "fe21f966-e074-498d-926e-858dfd7ac960",
    },
    {
      id: "db313919-5bd7-46c3-9a4f-3f1448c8f9de",
      name: "BattleField",
      position: {
        x: 400,
        y: -1740,
      },
      edges: [
        "9686904e-5b5b-4fda-9f5a-df81a5feeb95",
        "50bca497-6cc1-45a2-9988-e6497dcafcf1",
      ],
      right: "e734d641-cb72-4f52-95ee-b112017bf564",
      left: "8c313424-f9d0-4feb-ad8e-616497007b67",
    },
    {
      id: "8c313424-f9d0-4feb-ad8e-616497007b67",
      name: "BattleField",
      position: {
        x: -60,
        y: -1800,
      },
      edges: [
        "50bca497-6cc1-45a2-9988-e6497dcafcf1",
        "8994f325-7c25-42bf-9aa6-0795f3b3073b",
      ],
      right: "db313919-5bd7-46c3-9a4f-3f1448c8f9de",
      top: "67689a4d-e9f1-4700-a43a-b056824514d9",
    },
    {
      id: "67689a4d-e9f1-4700-a43a-b056824514d9",
      name: "TreasureField",
      position: {
        x: -20,
        y: -2240,
      },
      edges: [
        "8994f325-7c25-42bf-9aa6-0795f3b3073b",
        "b43c32f8-d79e-4c47-bcb7-27c3cfe7ae8c",
      ],
      bottom: "8c313424-f9d0-4feb-ad8e-616497007b67",
      right: "f37ead4a-db4f-4290-bed5-137b73202f6a",
    },
    {
      id: "fe21f966-e074-498d-926e-858dfd7ac960",
      name: "CaveField",
      position: {
        x: 880,
        y: -2680,
      },
      edges: ["094fa1d8-afa8-4b05-8eee-7f86f4b65014"],
      bottom: "f37ead4a-db4f-4290-bed5-137b73202f6a",
    },
    {
      id: "3e8b13d5-c29c-41e8-abfd-2152c4f95ad3",
      name: "DamageField",
      position: {
        x: 2640,
        y: -1040,
      },
      edges: [
        "683a0886-9311-4c3b-8e3e-8db660d8211a",
        "d342f80b-dffc-4779-9903-4ae8ec004194",
      ],
      left: "031011d7-fe5a-49b7-be64-999d5a2b1b4b",
      right: "c6c30c96-3baa-40f9-a36b-ac28751e6a07",
    },
    {
      id: "c6c30c96-3baa-40f9-a36b-ac28751e6a07",
      name: "DamageField",
      position: {
        x: 3200,
        y: -1040,
      },
      edges: [
        "d342f80b-dffc-4779-9903-4ae8ec004194",
        "5d9d66e7-8e0e-459a-b093-eb73d6644eb5",
      ],
      left: "3e8b13d5-c29c-41e8-abfd-2152c4f95ad3",
      top: "12f07d0c-a15b-4061-a5c6-fb01c290b7dd",
    },
    {
      id: "12f07d0c-a15b-4061-a5c6-fb01c290b7dd",
      name: "BattleField",
      position: {
        x: 3200,
        y: -1460,
      },
      edges: [
        "5d9d66e7-8e0e-459a-b093-eb73d6644eb5",
        "a23795c1-5637-4a9a-a915-ad94458c5416",
      ],
      bottom: "c6c30c96-3baa-40f9-a36b-ac28751e6a07",
      top: "dce48050-c2cc-413a-966d-001771e99fa3",
    },
    {
      id: "dce48050-c2cc-413a-966d-001771e99fa3",
      name: "DamageField",
      position: {
        x: 3200,
        y: -1860,
      },
      edges: [
        "a23795c1-5637-4a9a-a915-ad94458c5416",
        "bb75bb7e-7f03-4f80-bee9-f51ea6eb0474",
      ],
      bottom: "12f07d0c-a15b-4061-a5c6-fb01c290b7dd",
      top: "dcdbedf9-c990-42cf-87c5-a8dcaafc3509",
    },
    {
      id: "dcdbedf9-c990-42cf-87c5-a8dcaafc3509",
      name: "BattleField",
      position: {
        x: 3200,
        y: -2320,
      },
      edges: [
        "bb75bb7e-7f03-4f80-bee9-f51ea6eb0474",
        "4357d0cf-8864-4674-ab2d-ca34c5168dc4",
        "d03a057b-b505-4ed1-b20c-be566beb4327",
      ],
      bottom: "dce48050-c2cc-413a-966d-001771e99fa3",
      top: "69af20b1-084c-422c-929e-4bfcc7d1cf99",
      left: "9716130c-b168-4e90-ac75-600835a7168f",
    },
    {
      id: "69af20b1-084c-422c-929e-4bfcc7d1cf99",
      name: "TreasureField",
      position: {
        x: 3140,
        y: -2780,
      },
      edges: [
        "4357d0cf-8864-4674-ab2d-ca34c5168dc4",
        "10142fb6-940e-4daa-9189-af0e51709a5e",
      ],
      bottom: "dcdbedf9-c990-42cf-87c5-a8dcaafc3509",
      left: "1be36d67-c565-4509-bacb-b20e843ac3d5",
    },
    {
      id: "9716130c-b168-4e90-ac75-600835a7168f",
      name: "TreasureField",
      position: {
        x: 2140,
        y: -2320,
      },
      edges: [
        "d03a057b-b505-4ed1-b20c-be566beb4327",
        "817bde69-a6a4-4cf2-9b12-db2b9eed2af4",
      ],
      right: "dcdbedf9-c990-42cf-87c5-a8dcaafc3509",
      top: "eb0ece28-6f59-4267-830b-09da3b4f356b",
    },
    {
      id: "eb0ece28-6f59-4267-830b-09da3b4f356b",
      name: "BattleField",
      position: {
        x: 2080,
        y: -2780,
      },
      edges: [
        "817bde69-a6a4-4cf2-9b12-db2b9eed2af4",
        "3cbc1c63-72f7-43b3-8986-ff7402f8bb51",
        "36fad0b0-1073-41e1-9aa2-be028f182d6b",
        "4e1b442f-74f0-4d7d-a565-707ab9a624c3",
      ],
      bottom: "9716130c-b168-4e90-ac75-600835a7168f",
      right: "1be36d67-c565-4509-bacb-b20e843ac3d5",
      top: "78cb59e4-6e70-4a3d-a1a6-f72e62875298",
      left: "cf814981-c172-49e4-b955-9e222ed64294",
    },
    {
      id: "1be36d67-c565-4509-bacb-b20e843ac3d5",
      name: "BattleField",
      position: {
        x: 2620,
        y: -2820,
      },
      edges: [
        "3cbc1c63-72f7-43b3-8986-ff7402f8bb51",
        "10142fb6-940e-4daa-9189-af0e51709a5e",
      ],
      left: "eb0ece28-6f59-4267-830b-09da3b4f356b",
      right: "69af20b1-084c-422c-929e-4bfcc7d1cf99",
    },
    {
      id: "78cb59e4-6e70-4a3d-a1a6-f72e62875298",
      name: "CaveField",
      position: {
        x: 2120,
        y: -3260,
      },
      edges: ["36fad0b0-1073-41e1-9aa2-be028f182d6b"],
      bottom: "eb0ece28-6f59-4267-830b-09da3b4f356b",
    },
    {
      id: "cf814981-c172-49e4-b955-9e222ed64294",
      name: "GoldTreasureField",
      position: {
        x: 1480,
        y: -2820,
      },
      edges: [
        "4e1b442f-74f0-4d7d-a565-707ab9a624c3",
        "7ce57d03-4702-4acf-8907-be6198f8e1d7",
      ],
      right: "eb0ece28-6f59-4267-830b-09da3b4f356b",
      left: "80bd602b-223f-4d84-a462-df9ada26fd92",
    },
    {
      id: "80bd602b-223f-4d84-a462-df9ada26fd92",
      name: "BattleField",
      position: {
        x: 900,
        y: -2860,
      },
      edges: [
        "7ce57d03-4702-4acf-8907-be6198f8e1d7",
        "66519b2f-49d4-49f6-8b67-c46cfcd208a0",
      ],
      right: "cf814981-c172-49e4-b955-9e222ed64294",
      left: "b505b12a-a0d7-4996-ab99-d7412c744aa4",
    },
    {
      id: "b505b12a-a0d7-4996-ab99-d7412c744aa4",
      name: "BattleField",
      position: {
        x: 320,
        y: -2860,
      },
      edges: [
        "66519b2f-49d4-49f6-8b67-c46cfcd208a0",
        "e2cf21fa-388f-4f20-854e-534b09b52869",
        "d8507d44-3ff7-4321-8e01-f39cdda9ea79",
      ],
      right: "80bd602b-223f-4d84-a462-df9ada26fd92",
      left: "a0d10b4c-3076-4d5d-8109-d4e91f5453d5",
      bottom: "9716d05e-535d-4ed2-a1fd-110701923993",
    },
    {
      id: "a0d10b4c-3076-4d5d-8109-d4e91f5453d5",
      name: "TreasureField",
      position: {
        x: -240,
        y: -2940,
      },
      edges: [
        "e2cf21fa-388f-4f20-854e-534b09b52869",
        "2804e916-3b2f-476e-8d93-e0ad260db8e8",
        "e106316f-0be4-4d8d-95e5-ba2497aafdff",
      ],
      right: "b505b12a-a0d7-4996-ab99-d7412c744aa4",
      bottom: "5b29439e-dd23-42a5-9075-6c710e144fd4",
      left: "0af7eb83-4856-4bee-b13e-ea1ca4baa32b",
    },
    {
      id: "9716d05e-535d-4ed2-a1fd-110701923993",
      name: "MagicField",
      position: {
        x: 320,
        y: -2320,
      },
      edges: [
        "d8507d44-3ff7-4321-8e01-f39cdda9ea79",
        "ff6cdaa9-6431-4f2f-b967-be120123b19d",
      ],
      top: "b505b12a-a0d7-4996-ab99-d7412c744aa4",
      left: "4fdec21a-9b27-4de4-8b5e-8c614e90f98b",
    },
    {
      id: "4fdec21a-9b27-4de4-8b5e-8c614e90f98b",
      name: "BattleField",
      position: {
        x: -220,
        y: -2320,
      },
      edges: [
        "ff6cdaa9-6431-4f2f-b967-be120123b19d",
        "5b448e3e-f52d-40f3-94fe-66e3491b0418",
      ],
      right: "9716d05e-535d-4ed2-a1fd-110701923993",
      top: "5b29439e-dd23-42a5-9075-6c710e144fd4",
    },
    {
      id: "5b29439e-dd23-42a5-9075-6c710e144fd4",
      name: "BattleField",
      position: {
        x: -340,
        y: -2600,
      },
      edges: [
        "5b448e3e-f52d-40f3-94fe-66e3491b0418",
        "2804e916-3b2f-476e-8d93-e0ad260db8e8",
        "8301afed-72f1-4415-852b-cef56a87903a",
      ],
      bottom: "4fdec21a-9b27-4de4-8b5e-8c614e90f98b",
      top: "a0d10b4c-3076-4d5d-8109-d4e91f5453d5",
      left: "cdf46cba-7430-4d6a-916c-fe700cd8bf56",
    },
    {
      id: "0af7eb83-4856-4bee-b13e-ea1ca4baa32b",
      name: "BattleField",
      position: {
        x: -700,
        y: -2940,
      },
      edges: [
        "e106316f-0be4-4d8d-95e5-ba2497aafdff",
        "84aa0b15-eccd-42d4-a9d0-98c5fbae34e9",
      ],
      right: "a0d10b4c-3076-4d5d-8109-d4e91f5453d5",
      top: "c1c4d562-3d7c-496d-a55f-8f829abacc02",
    },
    {
      id: "c1c4d562-3d7c-496d-a55f-8f829abacc02",
      name: "CaveField",
      position: {
        x: -640,
        y: -3340,
      },
      edges: ["84aa0b15-eccd-42d4-a9d0-98c5fbae34e9"],
      bottom: "0af7eb83-4856-4bee-b13e-ea1ca4baa32b",
    },
    {
      id: "cdf46cba-7430-4d6a-916c-fe700cd8bf56",
      name: "DamageField",
      position: {
        x: -940,
        y: -2540,
      },
      edges: [
        "8301afed-72f1-4415-852b-cef56a87903a",
        "3b9a5723-f728-4ea3-a67e-386cdee56ee9",
      ],
      right: "5b29439e-dd23-42a5-9075-6c710e144fd4",
      left: "e734ac6e-49a1-4153-971b-0fa69d611fc6",
    },
    {
      id: "e734ac6e-49a1-4153-971b-0fa69d611fc6",
      name: "BattleField",
      position: {
        x: -1560,
        y: -2600,
      },
      edges: [
        "3b9a5723-f728-4ea3-a67e-386cdee56ee9",
        "6a94a807-cf73-41a4-8592-f3385c368a71",
      ],
      right: "cdf46cba-7430-4d6a-916c-fe700cd8bf56",
      bottom: "dae89388-7ab3-4588-9388-622901605881",
    },
    {
      id: "dae89388-7ab3-4588-9388-622901605881",
      name: "TreasureField",
      position: {
        x: -1620,
        y: -2140,
      },
      edges: [
        "6a94a807-cf73-41a4-8592-f3385c368a71",
        "de60e892-030b-4139-9849-09585057b4d6",
      ],
      top: "e734ac6e-49a1-4153-971b-0fa69d611fc6",
      bottom: "35771a45-a42e-48c3-b55b-2c2209117163",
    },
    {
      id: "2cae1249-b99e-446a-9861-f1fa629c824b",
      name: "DamageField",
      position: {
        x: -1140,
        y: -1320,
      },
      edges: [
        "fe2c3048-5379-4395-b653-18867ed13382",
        "3b2e1b08-e0ef-407a-9f9a-9a78c14e4439",
      ],
      right: "4ff662e0-0691-4092-a168-1db413247482",
      left: "8b4c82e1-e784-4cb3-89b1-68829c9fa4dd",
    },
    {
      id: "35771a45-a42e-48c3-b55b-2c2209117163",
      name: "BattleField",
      position: {
        x: -1620,
        y: -1700,
      },
      edges: [
        "de60e892-030b-4139-9849-09585057b4d6",
        "2a3e22f8-c846-4663-b15f-6eb2acd9d19f",
      ],
      top: "dae89388-7ab3-4588-9388-622901605881",
      bottom: "8b4c82e1-e784-4cb3-89b1-68829c9fa4dd",
    },
    {
      id: "8b4c82e1-e784-4cb3-89b1-68829c9fa4dd",
      name: "BattleField",
      position: {
        x: -1620,
        y: -1320,
      },
      edges: [
        "2a3e22f8-c846-4663-b15f-6eb2acd9d19f",
        "3b2e1b08-e0ef-407a-9f9a-9a78c14e4439",
      ],
      top: "35771a45-a42e-48c3-b55b-2c2209117163",
      right: "2cae1249-b99e-446a-9861-f1fa629c824b",
    },
    {
      id: "8465ff6b-a909-437a-a6c2-a552e88fa308",
      name: "DamageField",
      position: {
        x: -2160,
        y: -220,
      },
      edges: [
        "27e3af69-c2c1-464e-b071-6f8ebefef008",
        "e1d104e2-4dc5-4216-a622-cea67318165a",
      ],
      right: "f51c3d8a-9ebd-418c-8345-5c1c149dd684",
      bottom: "3aa1bdd8-18ca-4f95-b5b9-1929d6c610ba",
    },
    {
      id: "3aa1bdd8-18ca-4f95-b5b9-1929d6c610ba",
      name: "BattleField",
      position: {
        x: -2160,
        y: 240,
      },
      edges: [
        "e1d104e2-4dc5-4216-a622-cea67318165a",
        "82acbabd-3485-455c-adb7-1413fb9af1cf",
      ],
      top: "8465ff6b-a909-437a-a6c2-a552e88fa308",
      left: "5f478bd0-2796-4778-9c55-19c2d1adc21f",
    },
    {
      id: "5f478bd0-2796-4778-9c55-19c2d1adc21f",
      name: "BattleField",
      position: {
        x: -2680,
        y: 240,
      },
      edges: [
        "82acbabd-3485-455c-adb7-1413fb9af1cf",
        "d8d8f49d-e261-4030-ae97-6dadcdd3f5ac",
      ],
      right: "3aa1bdd8-18ca-4f95-b5b9-1929d6c610ba",
      left: "74a2e441-fac5-4dfc-b5df-406f44c220a6",
    },
    {
      id: "74a2e441-fac5-4dfc-b5df-406f44c220a6",
      name: "KeyTreasureField",
      position: {
        x: -3180,
        y: 240,
      },
      edges: ["d8d8f49d-e261-4030-ae97-6dadcdd3f5ac"],
      right: "5f478bd0-2796-4778-9c55-19c2d1adc21f",
    },
  ],
  edges: [
    {
      start: {
        x: 740,
        y: 660,
      },
      startId: "923bc7a0-ba19-4481-b5be-2bbd68515476",
      end: {
        x: 1180,
        y: 640,
      },
      endId: "968c0ad3-6616-42b6-87c3-3bd4c3daa9f0",
      name: "TwoWayHEdge",
      id: "2328d4b2-9ed2-442b-8d21-809d57a5f0b1",
    },
    {
      start: {
        x: 740,
        y: 660,
      },
      startId: "923bc7a0-ba19-4481-b5be-2bbd68515476",
      end: {
        x: 740,
        y: 1120,
      },
      endId: "4d0623fe-09db-44fd-8026-2129324355cd",
      name: "TwoWayVEdge",
      id: "f9e316e4-ffa8-4dc2-9d59-03ea8efb0ba3",
    },
    {
      start: {
        x: 740,
        y: 660,
      },
      startId: "923bc7a0-ba19-4481-b5be-2bbd68515476",
      end: {
        x: 280,
        y: 640,
      },
      endId: "b8216840-1eb2-46e3-9a8a-07aec953441b",
      name: "TwoWayHEdge",
      id: "e18bfea0-f496-430b-8fc9-4e0f310306dc",
    },
    {
      start: {
        x: 280,
        y: 640,
      },
      startId: "b8216840-1eb2-46e3-9a8a-07aec953441b",
      end: {
        x: 320,
        y: 180,
      },
      endId: "5b412c38-cf3d-4d28-889f-6cd3e8684d70",
      name: "TwoWayVEdge",
      id: "6e794f37-3703-4388-9470-289435e85a43",
    },
    {
      start: {
        x: 320,
        y: 180,
      },
      startId: "5b412c38-cf3d-4d28-889f-6cd3e8684d70",
      end: {
        x: 1100,
        y: 180,
      },
      endId: "16e53271-b09d-4dbf-8b4d-02184254904e",
      name: "TwoWayHEdge",
      id: "cc268b60-2f22-4578-ae53-7a715936434d",
    },
    {
      start: {
        x: 1100,
        y: 180,
      },
      startId: "16e53271-b09d-4dbf-8b4d-02184254904e",
      end: {
        x: 1180,
        y: 640,
      },
      endId: "968c0ad3-6616-42b6-87c3-3bd4c3daa9f0",
      name: "TwoWayVEdge",
      id: "f94e46be-848b-4695-a71a-6969dbbfa335",
    },
    {
      start: {
        x: 1100,
        y: 180,
      },
      startId: "16e53271-b09d-4dbf-8b4d-02184254904e",
      end: {
        x: 1580,
        y: 140,
      },
      endId: "df329ffb-ead9-4a8b-ad9a-74fd656d02c5",
      name: "TwoWayHEdge",
      id: "6613196c-0104-4369-a1ef-bd8b5f481ba7",
    },
    {
      start: {
        x: 1580,
        y: 140,
      },
      startId: "df329ffb-ead9-4a8b-ad9a-74fd656d02c5",
      end: {
        x: 1600,
        y: -220,
      },
      endId: "73bfe278-b7ef-4a53-a5c3-457165dd8df1",
      name: "TwoWayVEdge",
      id: "99b97a11-7526-4528-ae8c-45d495d683fe",
    },
    {
      start: {
        x: 1580,
        y: 140,
      },
      startId: "df329ffb-ead9-4a8b-ad9a-74fd656d02c5",
      end: {
        x: 2640,
        y: 160,
      },
      endId: "23005821-f6a2-4260-bf01-2c51454afcc9",
      name: "TwoWayHEdge",
      id: "a1909b6b-53cd-46d3-9bd2-0fdc441c7ec3",
    },
    {
      start: {
        x: 1600,
        y: -220,
      },
      startId: "73bfe278-b7ef-4a53-a5c3-457165dd8df1",
      end: {
        x: 2120,
        y: -180,
      },
      endId: "02f5f206-6b0d-4960-8178-83c5f6e24762",
      name: "TwoWayHEdge",
      id: "782a446d-f47d-4533-9dd2-d78eb7a2a576",
    },
    {
      start: {
        x: 2120,
        y: -180,
      },
      startId: "02f5f206-6b0d-4960-8178-83c5f6e24762",
      end: {
        x: 2660,
        y: -200,
      },
      endId: "45951b9e-47cf-44cd-bdb5-1f6bee42a695",
      name: "TwoWayHEdge",
      id: "fe361f76-98c4-447f-8511-0d5adf9fa6d9",
    },
    {
      start: {
        x: 2660,
        y: -200,
      },
      startId: "45951b9e-47cf-44cd-bdb5-1f6bee42a695",
      end: {
        x: 2640,
        y: 160,
      },
      endId: "23005821-f6a2-4260-bf01-2c51454afcc9",
      name: "TwoWayVEdge",
      id: "7d6de301-7743-4c06-9713-27bf97969f22",
    },
    {
      start: {
        x: 2120,
        y: -180,
      },
      startId: "02f5f206-6b0d-4960-8178-83c5f6e24762",
      end: {
        x: 2100,
        y: -600,
      },
      endId: "51f9f633-651b-4395-a4e9-3f314c6cd7f1",
      name: "TwoWayVEdge",
      id: "9648a982-62bb-433e-b1b2-c5cda463cd2f",
    },
    {
      start: {
        x: 2100,
        y: -600,
      },
      startId: "51f9f633-651b-4395-a4e9-3f314c6cd7f1",
      end: {
        x: 2660,
        y: -620,
      },
      endId: "6ac6d928-362e-442a-9e6b-ddbac0744103",
      name: "TwoWayHEdge",
      id: "16c7b672-c5e4-41b5-ae55-3b4694e3e6ed",
    },
    {
      start: {
        x: 2660,
        y: -620,
      },
      startId: "6ac6d928-362e-442a-9e6b-ddbac0744103",
      end: {
        x: 3200,
        y: -580,
      },
      endId: "0181cedf-87f8-4a4a-b986-16d12389d308",
      name: "TwoWayHEdge",
      id: "aa0103a2-5c85-4400-b23a-d0b55c84b53f",
    },
    {
      start: {
        x: 3200,
        y: -580,
      },
      startId: "0181cedf-87f8-4a4a-b986-16d12389d308",
      end: {
        x: 3260,
        y: -200,
      },
      endId: "408e5e4a-265b-46db-a694-1b2456606c45",
      name: "TwoWayVEdge",
      id: "8a87e8ce-c1fd-43fc-b2f3-8fcc87a4cae9",
    },
    {
      start: {
        x: 2100,
        y: -600,
      },
      startId: "51f9f633-651b-4395-a4e9-3f314c6cd7f1",
      end: {
        x: 2120,
        y: -1040,
      },
      endId: "031011d7-fe5a-49b7-be64-999d5a2b1b4b",
      name: "TwoWayVEdge",
      id: "e0790ffc-3a8e-44e9-89b9-5054740c0045",
    },
    {
      start: {
        x: 2120,
        y: -1040,
      },
      startId: "031011d7-fe5a-49b7-be64-999d5a2b1b4b",
      end: {
        x: 2040,
        y: -1500,
      },
      endId: "095575ac-c0fb-4fd7-b121-cbccdf9d523d",
      name: "TwoWayVEdge",
      id: "6a3ac97c-b85a-4ee2-b504-a12370d26916",
    },
    {
      start: {
        x: 2040,
        y: -1500,
      },
      startId: "095575ac-c0fb-4fd7-b121-cbccdf9d523d",
      end: {
        x: 1480,
        y: -1460,
      },
      endId: "3858fcfd-0281-41de-a627-adeccd18c767",
      name: "TwoWayHEdge",
      id: "2ab81764-f9cc-4663-a125-f3818c38ff71",
    },
    {
      start: {
        x: 2100,
        y: -600,
      },
      startId: "51f9f633-651b-4395-a4e9-3f314c6cd7f1",
      end: {
        x: 1500,
        y: -620,
      },
      endId: "20c5b59a-2c70-4751-8ce9-a0038e30a994",
      name: "TwoWayHEdge",
      id: "fad869f4-d95e-4a9d-9ef3-8e6bb3f9e6ce",
    },
    {
      start: {
        x: 320,
        y: 180,
      },
      startId: "5b412c38-cf3d-4d28-889f-6cd3e8684d70",
      end: {
        x: 300,
        y: -660,
      },
      endId: "e1525a45-3195-4dc4-b47c-e4a0ecdbe5ed",
      name: "TwoWayVEdge",
      id: "c5aeaab6-0f6e-44c8-a051-2352830700d0",
    },
    {
      start: {
        x: 300,
        y: -660,
      },
      startId: "e1525a45-3195-4dc4-b47c-e4a0ecdbe5ed",
      end: {
        x: 880,
        y: -620,
      },
      endId: "77ab92cc-9356-4e3c-b2c5-7818ebbfada7",
      name: "TwoWayHEdge",
      id: "2d1d7058-d6b9-481d-b6fb-f2391d03b4fa",
    },
    {
      start: {
        x: 880,
        y: -620,
      },
      startId: "77ab92cc-9356-4e3c-b2c5-7818ebbfada7",
      end: {
        x: 1500,
        y: -620,
      },
      endId: "20c5b59a-2c70-4751-8ce9-a0038e30a994",
      name: "TwoWayHEdge",
      id: "1e8c5d97-048a-44d2-99e4-e8629bafbd85",
    },
    {
      start: {
        x: 320,
        y: 180,
      },
      startId: "5b412c38-cf3d-4d28-889f-6cd3e8684d70",
      end: {
        x: -200,
        y: 200,
      },
      endId: "1be410d8-9b39-4d60-a487-f090cda3f6e9",
      name: "TwoWayHEdge",
      id: "ab9ab067-e73a-4fe4-8aa8-aa88ee383483",
    },
    {
      start: {
        x: -200,
        y: 200,
      },
      startId: "1be410d8-9b39-4d60-a487-f090cda3f6e9",
      end: {
        x: -700,
        y: 180,
      },
      endId: "790ebe6d-fa0f-40ab-bde3-2d2ba049828e",
      name: "TwoWayHEdge",
      id: "e8a4d7a9-a334-41db-a411-095da498c9e4",
    },
    {
      start: {
        x: -700,
        y: 180,
      },
      startId: "790ebe6d-fa0f-40ab-bde3-2d2ba049828e",
      end: {
        x: -1180,
        y: 180,
      },
      endId: "739da62b-04ea-419a-97a4-866cb4946bcd",
      name: "TwoWayHEdge",
      id: "74a07b22-ff3e-4d74-be76-87a5d81c7ff3",
    },
    {
      start: {
        x: -1180,
        y: 180,
      },
      startId: "739da62b-04ea-419a-97a4-866cb4946bcd",
      end: {
        x: -1240,
        y: -220,
      },
      endId: "f51c3d8a-9ebd-418c-8345-5c1c149dd684",
      name: "TwoWayVEdge",
      id: "ac7cab01-1d0a-426a-996f-0db78f834d6d",
    },
    {
      start: {
        x: -1240,
        y: -220,
      },
      startId: "f51c3d8a-9ebd-418c-8345-5c1c149dd684",
      end: {
        x: -1160,
        y: -620,
      },
      endId: "ab9d7261-e7b0-4d1d-9bed-c752daf170a7",
      name: "TwoWayVEdge",
      id: "75fb2249-1c36-439e-b767-d2da0920e8fc",
    },
    {
      start: {
        x: -1160,
        y: -620,
      },
      startId: "ab9d7261-e7b0-4d1d-9bed-c752daf170a7",
      end: {
        x: -700,
        y: -560,
      },
      endId: "a84ee664-9388-44df-8954-7693248d7cc9",
      name: "TwoWayHEdge",
      id: "b4b71818-18d1-4d79-ba35-78297ad8b180",
    },
    {
      start: {
        x: -700,
        y: -560,
      },
      startId: "a84ee664-9388-44df-8954-7693248d7cc9",
      end: {
        x: -700,
        y: 180,
      },
      endId: "790ebe6d-fa0f-40ab-bde3-2d2ba049828e",
      name: "TwoWayVEdge",
      id: "07a33cbe-8f8a-43e0-bc9b-82f5ad2b4cb3",
    },
    {
      start: {
        x: -700,
        y: -560,
      },
      startId: "a84ee664-9388-44df-8954-7693248d7cc9",
      end: {
        x: -640,
        y: -940,
      },
      endId: "8c9194b2-49d7-491d-9c54-636e3e5ec61d",
      name: "TwoWayVEdge",
      id: "e3a76580-63a8-4998-a348-5a3cea7fb7bc",
    },
    {
      start: {
        x: -640,
        y: -940,
      },
      startId: "8c9194b2-49d7-491d-9c54-636e3e5ec61d",
      end: {
        x: 20,
        y: -940,
      },
      endId: "b99a657d-e8fa-4185-88ef-141fd39969c5",
      name: "TwoWayHEdge",
      id: "6b1745c8-f1ec-4d4d-b90f-3a2273a1de94",
    },
    {
      start: {
        x: -640,
        y: -940,
      },
      startId: "8c9194b2-49d7-491d-9c54-636e3e5ec61d",
      end: {
        x: -680,
        y: -1320,
      },
      endId: "4ff662e0-0691-4092-a168-1db413247482",
      name: "TwoWayVEdge",
      id: "54493e76-e8b6-480a-9018-f29b05776eda",
    },
    {
      start: {
        x: -680,
        y: -1320,
      },
      startId: "4ff662e0-0691-4092-a168-1db413247482",
      end: {
        x: -640,
        y: -1680,
      },
      endId: "6447052c-251c-4531-a0b7-82c3cf02753c",
      name: "TwoWayVEdge",
      id: "fc9f1419-53a7-4588-bfaa-7c7a8a105ea1",
    },
    {
      start: {
        x: -640,
        y: -1680,
      },
      startId: "6447052c-251c-4531-a0b7-82c3cf02753c",
      end: {
        x: -60,
        y: -1660,
      },
      endId: "4e5fd11d-5008-4077-93fc-3904b8c29deb",
      name: "TwoWayHEdge",
      id: "99509eb5-353f-4550-a75a-8717219ba283",
    },
    {
      start: {
        x: -60,
        y: -1660,
      },
      startId: "4e5fd11d-5008-4077-93fc-3904b8c29deb",
      end: {
        x: 20,
        y: -940,
      },
      endId: "b99a657d-e8fa-4185-88ef-141fd39969c5",
      name: "TwoWayVEdge",
      id: "314dcb3f-723a-4d7e-8a6e-b547fbc64c8f",
    },
    {
      start: {
        x: 880,
        y: -620,
      },
      startId: "77ab92cc-9356-4e3c-b2c5-7818ebbfada7",
      end: {
        x: 820,
        y: -1160,
      },
      endId: "4e63f8b7-e156-4eec-9bbb-9cfeaf7e5d5a",
      name: "TwoWayVEdge",
      id: "229c7c59-6e7a-4510-a757-698f4013aa76",
    },
    {
      start: {
        x: 820,
        y: -1160,
      },
      startId: "4e63f8b7-e156-4eec-9bbb-9cfeaf7e5d5a",
      end: {
        x: 880,
        y: -1760,
      },
      endId: "e734d641-cb72-4f52-95ee-b112017bf564",
      name: "TwoWayVEdge",
      id: "ac72faa7-fcda-41d1-b7fd-7d03c8605b64",
    },
    {
      start: {
        x: 880,
        y: -1760,
      },
      startId: "e734d641-cb72-4f52-95ee-b112017bf564",
      end: {
        x: 780,
        y: -2220,
      },
      endId: "f37ead4a-db4f-4290-bed5-137b73202f6a",
      name: "TwoWayVEdge",
      id: "83cd1b7e-f76c-46ba-8568-6159aa62d058",
    },
    {
      start: {
        x: 880,
        y: -1760,
      },
      startId: "e734d641-cb72-4f52-95ee-b112017bf564",
      end: {
        x: 400,
        y: -1740,
      },
      endId: "db313919-5bd7-46c3-9a4f-3f1448c8f9de",
      name: "TwoWayHEdge",
      id: "9686904e-5b5b-4fda-9f5a-df81a5feeb95",
    },
    {
      start: {
        x: 400,
        y: -1740,
      },
      startId: "db313919-5bd7-46c3-9a4f-3f1448c8f9de",
      end: {
        x: -60,
        y: -1800,
      },
      endId: "8c313424-f9d0-4feb-ad8e-616497007b67",
      name: "TwoWayHEdge",
      id: "50bca497-6cc1-45a2-9988-e6497dcafcf1",
    },
    {
      start: {
        x: -60,
        y: -1800,
      },
      startId: "8c313424-f9d0-4feb-ad8e-616497007b67",
      end: {
        x: -20,
        y: -2240,
      },
      endId: "67689a4d-e9f1-4700-a43a-b056824514d9",
      name: "TwoWayVEdge",
      id: "8994f325-7c25-42bf-9aa6-0795f3b3073b",
    },
    {
      start: {
        x: -20,
        y: -2240,
      },
      startId: "67689a4d-e9f1-4700-a43a-b056824514d9",
      end: {
        x: 780,
        y: -2220,
      },
      endId: "f37ead4a-db4f-4290-bed5-137b73202f6a",
      name: "TwoWayHEdge",
      id: "b43c32f8-d79e-4c47-bcb7-27c3cfe7ae8c",
    },
    {
      start: {
        x: 780,
        y: -2220,
      },
      startId: "f37ead4a-db4f-4290-bed5-137b73202f6a",
      end: {
        x: 880,
        y: -2680,
      },
      endId: "fe21f966-e074-498d-926e-858dfd7ac960",
      name: "TwoWayVEdge",
      id: "094fa1d8-afa8-4b05-8eee-7f86f4b65014",
    },
    {
      start: {
        x: 2120,
        y: -1040,
      },
      startId: "031011d7-fe5a-49b7-be64-999d5a2b1b4b",
      end: {
        x: 2640,
        y: -1040,
      },
      endId: "3e8b13d5-c29c-41e8-abfd-2152c4f95ad3",
      name: "TwoWayHEdge",
      id: "683a0886-9311-4c3b-8e3e-8db660d8211a",
    },
    {
      start: {
        x: 2640,
        y: -1040,
      },
      startId: "3e8b13d5-c29c-41e8-abfd-2152c4f95ad3",
      end: {
        x: 3200,
        y: -1040,
      },
      endId: "c6c30c96-3baa-40f9-a36b-ac28751e6a07",
      name: "TwoWayHEdge",
      id: "d342f80b-dffc-4779-9903-4ae8ec004194",
    },
    {
      start: {
        x: 3200,
        y: -1040,
      },
      startId: "c6c30c96-3baa-40f9-a36b-ac28751e6a07",
      end: {
        x: 3200,
        y: -1460,
      },
      endId: "12f07d0c-a15b-4061-a5c6-fb01c290b7dd",
      name: "TwoWayVEdge",
      id: "5d9d66e7-8e0e-459a-b093-eb73d6644eb5",
    },
    {
      start: {
        x: 3200,
        y: -1460,
      },
      startId: "12f07d0c-a15b-4061-a5c6-fb01c290b7dd",
      end: {
        x: 3200,
        y: -1860,
      },
      endId: "dce48050-c2cc-413a-966d-001771e99fa3",
      name: "TwoWayVEdge",
      id: "a23795c1-5637-4a9a-a915-ad94458c5416",
    },
    {
      start: {
        x: 3200,
        y: -1860,
      },
      startId: "dce48050-c2cc-413a-966d-001771e99fa3",
      end: {
        x: 3200,
        y: -2320,
      },
      endId: "dcdbedf9-c990-42cf-87c5-a8dcaafc3509",
      name: "TwoWayVEdge",
      id: "bb75bb7e-7f03-4f80-bee9-f51ea6eb0474",
    },
    {
      start: {
        x: 3200,
        y: -2320,
      },
      startId: "dcdbedf9-c990-42cf-87c5-a8dcaafc3509",
      end: {
        x: 3140,
        y: -2780,
      },
      endId: "69af20b1-084c-422c-929e-4bfcc7d1cf99",
      name: "TwoWayVEdge",
      id: "4357d0cf-8864-4674-ab2d-ca34c5168dc4",
    },
    {
      start: {
        x: 3200,
        y: -2320,
      },
      startId: "dcdbedf9-c990-42cf-87c5-a8dcaafc3509",
      end: {
        x: 2140,
        y: -2320,
      },
      endId: "9716130c-b168-4e90-ac75-600835a7168f",
      name: "TwoWayHEdge",
      id: "d03a057b-b505-4ed1-b20c-be566beb4327",
    },
    {
      start: {
        x: 2140,
        y: -2320,
      },
      startId: "9716130c-b168-4e90-ac75-600835a7168f",
      end: {
        x: 2080,
        y: -2780,
      },
      endId: "eb0ece28-6f59-4267-830b-09da3b4f356b",
      name: "TwoWayVEdge",
      id: "817bde69-a6a4-4cf2-9b12-db2b9eed2af4",
    },
    {
      start: {
        x: 2080,
        y: -2780,
      },
      startId: "eb0ece28-6f59-4267-830b-09da3b4f356b",
      end: {
        x: 2620,
        y: -2820,
      },
      endId: "1be36d67-c565-4509-bacb-b20e843ac3d5",
      name: "TwoWayHEdge",
      id: "3cbc1c63-72f7-43b3-8986-ff7402f8bb51",
    },
    {
      start: {
        x: 2620,
        y: -2820,
      },
      startId: "1be36d67-c565-4509-bacb-b20e843ac3d5",
      end: {
        x: 3140,
        y: -2780,
      },
      endId: "69af20b1-084c-422c-929e-4bfcc7d1cf99",
      name: "TwoWayHEdge",
      id: "10142fb6-940e-4daa-9189-af0e51709a5e",
    },
    {
      start: {
        x: 2080,
        y: -2780,
      },
      startId: "eb0ece28-6f59-4267-830b-09da3b4f356b",
      end: {
        x: 2120,
        y: -3260,
      },
      endId: "78cb59e4-6e70-4a3d-a1a6-f72e62875298",
      name: "TwoWayVEdge",
      id: "36fad0b0-1073-41e1-9aa2-be028f182d6b",
    },
    {
      start: {
        x: 2080,
        y: -2780,
      },
      startId: "eb0ece28-6f59-4267-830b-09da3b4f356b",
      end: {
        x: 1480,
        y: -2820,
      },
      endId: "cf814981-c172-49e4-b955-9e222ed64294",
      name: "TwoWayHEdge",
      id: "4e1b442f-74f0-4d7d-a565-707ab9a624c3",
    },
    {
      start: {
        x: 1480,
        y: -2820,
      },
      startId: "cf814981-c172-49e4-b955-9e222ed64294",
      end: {
        x: 900,
        y: -2860,
      },
      endId: "80bd602b-223f-4d84-a462-df9ada26fd92",
      name: "TwoWayHEdge",
      id: "7ce57d03-4702-4acf-8907-be6198f8e1d7",
    },
    {
      start: {
        x: 900,
        y: -2860,
      },
      startId: "80bd602b-223f-4d84-a462-df9ada26fd92",
      end: {
        x: 320,
        y: -2860,
      },
      endId: "b505b12a-a0d7-4996-ab99-d7412c744aa4",
      name: "TwoWayHEdge",
      id: "66519b2f-49d4-49f6-8b67-c46cfcd208a0",
    },
    {
      start: {
        x: 320,
        y: -2860,
      },
      startId: "b505b12a-a0d7-4996-ab99-d7412c744aa4",
      end: {
        x: -240,
        y: -2940,
      },
      endId: "a0d10b4c-3076-4d5d-8109-d4e91f5453d5",
      name: "TwoWayHEdge",
      id: "e2cf21fa-388f-4f20-854e-534b09b52869",
    },
    {
      start: {
        x: 320,
        y: -2860,
      },
      startId: "b505b12a-a0d7-4996-ab99-d7412c744aa4",
      end: {
        x: 320,
        y: -2320,
      },
      endId: "9716d05e-535d-4ed2-a1fd-110701923993",
      name: "TwoWayVEdge",
      id: "d8507d44-3ff7-4321-8e01-f39cdda9ea79",
    },
    {
      start: {
        x: 320,
        y: -2320,
      },
      startId: "9716d05e-535d-4ed2-a1fd-110701923993",
      end: {
        x: -220,
        y: -2320,
      },
      endId: "4fdec21a-9b27-4de4-8b5e-8c614e90f98b",
      name: "TwoWayHEdge",
      id: "ff6cdaa9-6431-4f2f-b967-be120123b19d",
    },
    {
      start: {
        x: -220,
        y: -2320,
      },
      startId: "4fdec21a-9b27-4de4-8b5e-8c614e90f98b",
      end: {
        x: -340,
        y: -2600,
      },
      endId: "5b29439e-dd23-42a5-9075-6c710e144fd4",
      name: "TwoWayVEdge",
      id: "5b448e3e-f52d-40f3-94fe-66e3491b0418",
    },
    {
      start: {
        x: -340,
        y: -2600,
      },
      startId: "5b29439e-dd23-42a5-9075-6c710e144fd4",
      end: {
        x: -240,
        y: -2940,
      },
      endId: "a0d10b4c-3076-4d5d-8109-d4e91f5453d5",
      name: "TwoWayVEdge",
      id: "2804e916-3b2f-476e-8d93-e0ad260db8e8",
    },
    {
      start: {
        x: -240,
        y: -2940,
      },
      startId: "a0d10b4c-3076-4d5d-8109-d4e91f5453d5",
      end: {
        x: -700,
        y: -2940,
      },
      endId: "0af7eb83-4856-4bee-b13e-ea1ca4baa32b",
      name: "TwoWayHEdge",
      id: "e106316f-0be4-4d8d-95e5-ba2497aafdff",
    },
    {
      start: {
        x: -700,
        y: -2940,
      },
      startId: "0af7eb83-4856-4bee-b13e-ea1ca4baa32b",
      end: {
        x: -640,
        y: -3340,
      },
      endId: "c1c4d562-3d7c-496d-a55f-8f829abacc02",
      name: "TwoWayVEdge",
      id: "84aa0b15-eccd-42d4-a9d0-98c5fbae34e9",
    },
    {
      start: {
        x: -340,
        y: -2600,
      },
      startId: "5b29439e-dd23-42a5-9075-6c710e144fd4",
      end: {
        x: -940,
        y: -2540,
      },
      endId: "cdf46cba-7430-4d6a-916c-fe700cd8bf56",
      name: "TwoWayHEdge",
      id: "8301afed-72f1-4415-852b-cef56a87903a",
    },
    {
      start: {
        x: -940,
        y: -2540,
      },
      startId: "cdf46cba-7430-4d6a-916c-fe700cd8bf56",
      end: {
        x: -1560,
        y: -2600,
      },
      endId: "e734ac6e-49a1-4153-971b-0fa69d611fc6",
      name: "TwoWayHEdge",
      id: "3b9a5723-f728-4ea3-a67e-386cdee56ee9",
    },
    {
      start: {
        x: -1560,
        y: -2600,
      },
      startId: "e734ac6e-49a1-4153-971b-0fa69d611fc6",
      end: {
        x: -1620,
        y: -2140,
      },
      endId: "dae89388-7ab3-4588-9388-622901605881",
      name: "TwoWayVEdge",
      id: "6a94a807-cf73-41a4-8592-f3385c368a71",
    },
    {
      start: {
        x: -680,
        y: -1320,
      },
      startId: "4ff662e0-0691-4092-a168-1db413247482",
      end: {
        x: -1140,
        y: -1320,
      },
      endId: "2cae1249-b99e-446a-9861-f1fa629c824b",
      name: "TwoWayHEdge",
      id: "fe2c3048-5379-4395-b653-18867ed13382",
    },
    {
      start: {
        x: -1620,
        y: -2140,
      },
      startId: "dae89388-7ab3-4588-9388-622901605881",
      end: {
        x: -1620,
        y: -1700,
      },
      endId: "35771a45-a42e-48c3-b55b-2c2209117163",
      name: "TwoWayVEdge",
      id: "de60e892-030b-4139-9849-09585057b4d6",
    },
    {
      start: {
        x: -1620,
        y: -1700,
      },
      startId: "35771a45-a42e-48c3-b55b-2c2209117163",
      end: {
        x: -1620,
        y: -1320,
      },
      endId: "8b4c82e1-e784-4cb3-89b1-68829c9fa4dd",
      name: "TwoWayVEdge",
      id: "2a3e22f8-c846-4663-b15f-6eb2acd9d19f",
    },
    {
      start: {
        x: -1620,
        y: -1320,
      },
      startId: "8b4c82e1-e784-4cb3-89b1-68829c9fa4dd",
      end: {
        x: -1140,
        y: -1320,
      },
      endId: "2cae1249-b99e-446a-9861-f1fa629c824b",
      name: "TwoWayHEdge",
      id: "3b2e1b08-e0ef-407a-9f9a-9a78c14e4439",
    },
    {
      start: {
        x: -1240,
        y: -220,
      },
      startId: "f51c3d8a-9ebd-418c-8345-5c1c149dd684",
      end: {
        x: -2160,
        y: -220,
      },
      endId: "8465ff6b-a909-437a-a6c2-a552e88fa308",
      name: "TwoWayHEdge",
      id: "27e3af69-c2c1-464e-b071-6f8ebefef008",
    },
    {
      start: {
        x: -2160,
        y: -220,
      },
      startId: "8465ff6b-a909-437a-a6c2-a552e88fa308",
      end: {
        x: -2160,
        y: 240,
      },
      endId: "3aa1bdd8-18ca-4f95-b5b9-1929d6c610ba",
      name: "TwoWayVEdge",
      id: "e1d104e2-4dc5-4216-a622-cea67318165a",
    },
    {
      start: {
        x: -2160,
        y: 240,
      },
      startId: "3aa1bdd8-18ca-4f95-b5b9-1929d6c610ba",
      end: {
        x: -2680,
        y: 240,
      },
      endId: "5f478bd0-2796-4778-9c55-19c2d1adc21f",
      name: "TwoWayHEdge",
      id: "82acbabd-3485-455c-adb7-1413fb9af1cf",
    },
    {
      start: {
        x: -2680,
        y: 240,
      },
      startId: "5f478bd0-2796-4778-9c55-19c2d1adc21f",
      end: {
        x: -3180,
        y: 240,
      },
      endId: "74a2e441-fac5-4dfc-b5df-406f44c220a6",
      name: "TwoWayHEdge",
      id: "d8d8f49d-e261-4030-ae97-6dadcdd3f5ac",
    },
  ],
};
export default europeCave;
