import type { GraphJSON } from "global";

const oceaniaCaveB2Map: GraphJSON = {
  vertices: [
    {
      position: {
        x: -380,
        y: -40,
      },
      name: "BattleField",
      id: "62a614b8-e6c2-4923-8e97-fdb372502bc3",
      edges: [
        "f7ea5957-a7cf-41b9-b551-5605b4c80009",
        "b06d6518-62a3-45fc-bfb9-7a274554d37e",
      ],
      area: "OceaniaCaveB2",
      right: "479df5cd-ad31-4f22-9edb-521311739dcb",
      left: "805af805-7b15-43ab-9037-1b14f7d7cdb9",
    },
    {
      id: "479df5cd-ad31-4f22-9edb-521311739dcb",
      name: "GoldTreasureField",
      position: {
        x: 460,
        y: 40,
      },
      edges: [
        "f7ea5957-a7cf-41b9-b551-5605b4c80009",
        "60e5b855-63df-4161-8f93-b9d38622bcbe",
        "afa1f230-8dc9-42e4-9be8-4ea2f476d3e9",
      ],
      area: "OceaniaCaveB2",
      left: "62a614b8-e6c2-4923-8e97-fdb372502bc3",
      right: "7691891a-1b53-45ab-87c5-90f1368edada",
      bottom: "3eb8e3fe-e66f-4f0b-960d-9b13ae0e2bbe",
    },
    {
      id: "7691891a-1b53-45ab-87c5-90f1368edada",
      name: "DamageField",
      position: {
        x: 1060,
        y: 80,
      },
      edges: [
        "60e5b855-63df-4161-8f93-b9d38622bcbe",
        "54ff5a7f-d945-48e8-959f-831f86b28f53",
        "2d977614-b13e-4458-8e0e-ff31248634b4",
      ],
      area: "OceaniaCaveB2",
      left: "479df5cd-ad31-4f22-9edb-521311739dcb",
      top: "674655e7-ab49-4a14-8474-11eda42b41f1",
      bottom: "35f607b1-3ea7-418d-b8fc-3932346fd220",
    },
    {
      id: "674655e7-ab49-4a14-8474-11eda42b41f1",
      name: "CaveField",
      position: {
        x: 940,
        y: -460,
      },
      edges: ["54ff5a7f-d945-48e8-959f-831f86b28f53"],
      area: "OceaniaCaveB2",
      bottom: "7691891a-1b53-45ab-87c5-90f1368edada",
    },
    {
      id: "3eb8e3fe-e66f-4f0b-960d-9b13ae0e2bbe",
      name: "BattleField",
      position: {
        x: 400,
        y: 440,
      },
      edges: [
        "afa1f230-8dc9-42e4-9be8-4ea2f476d3e9",
        "528c795c-5014-433c-a097-cef48a616362",
      ],
      area: "OceaniaCaveB2",
      top: "479df5cd-ad31-4f22-9edb-521311739dcb",
      bottom: "d5cf46b1-9aae-4e41-8da8-ab88e809e16e",
    },
    {
      id: "d5cf46b1-9aae-4e41-8da8-ab88e809e16e",
      name: "TreasureField",
      position: {
        x: 460,
        y: 880,
      },
      edges: [
        "528c795c-5014-433c-a097-cef48a616362",
        "e7ee9005-fdb6-4a4c-ab08-599b6d4b7abf",
      ],
      area: "OceaniaCaveB2",
      top: "3eb8e3fe-e66f-4f0b-960d-9b13ae0e2bbe",
      right: "35f607b1-3ea7-418d-b8fc-3932346fd220",
    },
    {
      id: "35f607b1-3ea7-418d-b8fc-3932346fd220",
      name: "DamageField",
      position: {
        x: 1020,
        y: 880,
      },
      edges: [
        "e7ee9005-fdb6-4a4c-ab08-599b6d4b7abf",
        "2d977614-b13e-4458-8e0e-ff31248634b4",
        "d6f4103e-a8f3-44d8-b5e6-f4ebfd585585",
      ],
      area: "OceaniaCaveB2",
      left: "d5cf46b1-9aae-4e41-8da8-ab88e809e16e",
      top: "7691891a-1b53-45ab-87c5-90f1368edada",
      right: "eb140a33-8593-4950-9cbb-39a52c46ad53",
    },
    {
      id: "eb140a33-8593-4950-9cbb-39a52c46ad53",
      name: "DamageField",
      position: {
        x: 1800,
        y: 880,
      },
      edges: [
        "d6f4103e-a8f3-44d8-b5e6-f4ebfd585585",
        "1b2690fd-94c3-46e8-8b05-1fca1ee748e5",
        "6dbc1763-4ac9-4b1a-ad7e-da2f3114f798",
        "51b8f0be-cf4d-4206-a704-d41a407d8b06",
      ],
      area: "OceaniaCaveB2",
      left: "35f607b1-3ea7-418d-b8fc-3932346fd220",
      top: "f1d5ed1c-b70a-47c9-9d7a-3b4c2f32d97d",
      right: "8d2075ad-5875-4fb5-a86c-f02131c02c24",
      bottom: "acf4dfbe-10a2-497b-b865-7af7b2a9ffce",
    },
    {
      id: "f1d5ed1c-b70a-47c9-9d7a-3b4c2f32d97d",
      name: "TreasureField",
      position: {
        x: 1700,
        y: 280,
      },
      edges: [
        "1b2690fd-94c3-46e8-8b05-1fca1ee748e5",
        "012eb970-9a00-4fcb-953b-274117c66aea",
      ],
      area: "OceaniaCaveB2",
      bottom: "eb140a33-8593-4950-9cbb-39a52c46ad53",
      right: "f0603449-a812-4090-a516-650dcf54e45a",
    },
    {
      id: "f0603449-a812-4090-a516-650dcf54e45a",
      name: "BattleField",
      position: {
        x: 2300,
        y: 300,
      },
      edges: [
        "012eb970-9a00-4fcb-953b-274117c66aea",
        "6376c1c4-73e3-4b4a-9dda-3a3138a577ad",
      ],
      area: "OceaniaCaveB2",
      left: "f1d5ed1c-b70a-47c9-9d7a-3b4c2f32d97d",
      right: "75a9e672-a62f-471b-829a-a7d0625e66b9",
    },
    {
      id: "75a9e672-a62f-471b-829a-a7d0625e66b9",
      name: "BattleField",
      position: {
        x: 2900,
        y: 280,
      },
      edges: ["6376c1c4-73e3-4b4a-9dda-3a3138a577ad"],
      area: "OceaniaCaveB2",
      left: "f0603449-a812-4090-a516-650dcf54e45a",
    },
    {
      id: "8d2075ad-5875-4fb5-a86c-f02131c02c24",
      name: "KeyTreasureField",
      position: {
        x: 2400,
        y: 900,
      },
      edges: ["6dbc1763-4ac9-4b1a-ad7e-da2f3114f798"],
      area: "OceaniaCaveB2",
      left: "eb140a33-8593-4950-9cbb-39a52c46ad53",
    },
    {
      id: "acf4dfbe-10a2-497b-b865-7af7b2a9ffce",
      name: "BattleField",
      position: {
        x: 1760,
        y: 1400,
      },
      edges: [
        "51b8f0be-cf4d-4206-a704-d41a407d8b06",
        "751f3d1a-0022-46fa-bcad-0bb221ebd996",
      ],
      area: "OceaniaCaveB2",
      top: "eb140a33-8593-4950-9cbb-39a52c46ad53",
      bottom: "9fdf3052-fce7-4217-869c-d828ca3d3676",
    },
    {
      id: "9fdf3052-fce7-4217-869c-d828ca3d3676",
      name: "TreasureField",
      position: {
        x: 1880,
        y: 1920,
      },
      edges: [
        "751f3d1a-0022-46fa-bcad-0bb221ebd996",
        "c7c210ef-8c75-498c-b4d5-10e1cce4526c",
        "7605f2ca-9463-4d39-8e03-033850f08564",
      ],
      area: "OceaniaCaveB2",
      top: "acf4dfbe-10a2-497b-b865-7af7b2a9ffce",
      left: "f27c771c-cc02-4473-a746-5e80ff81c82e",
      bottom: "eec0a4d1-7260-4e4c-828f-6fc822f9446d",
    },
    {
      id: "f27c771c-cc02-4473-a746-5e80ff81c82e",
      name: "GoldTreasureField",
      position: {
        x: 1140,
        y: 1880,
      },
      edges: [
        "c7c210ef-8c75-498c-b4d5-10e1cce4526c",
        "c59b08fe-e6c4-43d3-bdaf-5609ba141c62",
        "95937a1b-bc00-4a13-9457-c3adde3c8f34",
      ],
      area: "OceaniaCaveB2",
      right: "9fdf3052-fce7-4217-869c-d828ca3d3676",
      left: "b3ad697a-cbdb-45e8-a097-af73c00c2773",
      bottom: "85c154dd-356c-4f49-9181-3e76b66e69d7",
    },
    {
      id: "b3ad697a-cbdb-45e8-a097-af73c00c2773",
      name: "RedTreasureField",
      position: {
        x: 440,
        y: 1900,
      },
      edges: [
        "c59b08fe-e6c4-43d3-bdaf-5609ba141c62",
        "561503f2-f3b5-4e34-a0b0-b403278476fd",
      ],
      area: "OceaniaCaveB2",
      right: "f27c771c-cc02-4473-a746-5e80ff81c82e",
      top: "46e076f1-c458-4373-b134-6d12764ffb42",
    },
    {
      id: "46e076f1-c458-4373-b134-6d12764ffb42",
      name: "BattleField",
      position: {
        x: 540,
        y: 1400,
      },
      edges: [
        "561503f2-f3b5-4e34-a0b0-b403278476fd",
        "5b9c29c0-f191-4bfd-9daa-13b5dedff0ee",
      ],
      area: "OceaniaCaveB2",
      bottom: "b3ad697a-cbdb-45e8-a097-af73c00c2773",
      left: "e7342162-ea27-4f96-ab44-2be013c02f88",
    },
    {
      id: "e7342162-ea27-4f96-ab44-2be013c02f88",
      name: "CaveField",
      position: {
        x: -40,
        y: 1420,
      },
      edges: ["5b9c29c0-f191-4bfd-9daa-13b5dedff0ee"],
      area: "OceaniaCaveB2",
      right: "46e076f1-c458-4373-b134-6d12764ffb42",
    },
    {
      id: "eec0a4d1-7260-4e4c-828f-6fc822f9446d",
      name: "BattleField",
      position: {
        x: 1820,
        y: 2360,
      },
      edges: [
        "7605f2ca-9463-4d39-8e03-033850f08564",
        "a7d51688-7ed0-4a9e-b93d-570a862a1a44",
        "0a18c5f0-df16-4c8e-be08-7b73a7d5a868",
      ],
      area: "OceaniaCaveB2",
      top: "9fdf3052-fce7-4217-869c-d828ca3d3676",
      bottom: "a9b95f13-184a-44b9-81f7-34c9d8fc226e",
      right: "e4002a30-6d57-43bd-a5f6-39d59d8dbf91",
    },
    {
      id: "a9b95f13-184a-44b9-81f7-34c9d8fc226e",
      name: "RedTreasureField",
      position: {
        x: 1900,
        y: 2760,
      },
      edges: [
        "a7d51688-7ed0-4a9e-b93d-570a862a1a44",
        "37c10d9e-1271-4ad4-a240-7bb45601585a",
      ],
      area: "OceaniaCaveB2",
      top: "eec0a4d1-7260-4e4c-828f-6fc822f9446d",
      bottom: "659d1c26-65d3-4187-90a8-3283abf11f14",
    },
    {
      id: "659d1c26-65d3-4187-90a8-3283abf11f14",
      name: "GoldTreasureField",
      position: {
        x: 1820,
        y: 3180,
      },
      edges: [
        "37c10d9e-1271-4ad4-a240-7bb45601585a",
        "a883d61a-327f-4c07-b122-ec5a541879e3",
      ],
      area: "OceaniaCaveB2",
      top: "a9b95f13-184a-44b9-81f7-34c9d8fc226e",
      right: "95e19d6a-d3da-4796-9bec-350cb1dc6579",
    },
    {
      id: "e4002a30-6d57-43bd-a5f6-39d59d8dbf91",
      name: "BattleField",
      position: {
        x: 2440,
        y: 2380,
      },
      edges: [
        "0a18c5f0-df16-4c8e-be08-7b73a7d5a868",
        "f17c313a-72f9-41da-9d60-0a4154c5c63a",
        "e1108b7e-162a-49de-a261-0b79427f2938",
      ],
      area: "OceaniaCaveB2",
      left: "eec0a4d1-7260-4e4c-828f-6fc822f9446d",
      bottom: "95e19d6a-d3da-4796-9bec-350cb1dc6579",
      right: "fd4c95cb-31ec-4c05-9e6b-c78f6d81d227",
    },
    {
      id: "95e19d6a-d3da-4796-9bec-350cb1dc6579",
      name: "TreasureField",
      position: {
        x: 2500,
        y: 3140,
      },
      edges: [
        "f17c313a-72f9-41da-9d60-0a4154c5c63a",
        "a883d61a-327f-4c07-b122-ec5a541879e3",
      ],
      area: "OceaniaCaveB2",
      top: "e4002a30-6d57-43bd-a5f6-39d59d8dbf91",
      left: "659d1c26-65d3-4187-90a8-3283abf11f14",
    },
    {
      id: "fd4c95cb-31ec-4c05-9e6b-c78f6d81d227",
      name: "WhiteTreasureField",
      position: {
        x: 3080,
        y: 2400,
      },
      edges: ["e1108b7e-162a-49de-a261-0b79427f2938"],
      area: "OceaniaCaveB2",
      left: "e4002a30-6d57-43bd-a5f6-39d59d8dbf91",
    },
    {
      id: "85c154dd-356c-4f49-9181-3e76b66e69d7",
      name: "TreasureField",
      position: {
        x: 1100,
        y: 2260,
      },
      edges: [
        "95937a1b-bc00-4a13-9457-c3adde3c8f34",
        "a93a9e6d-6a82-4561-85da-d8895d7031e1",
        "a2dcb9be-d9d0-422e-b75d-7a6fb6b47669",
      ],
      area: "OceaniaCaveB2",
      top: "f27c771c-cc02-4473-a746-5e80ff81c82e",
      bottom: "8429c1ec-9262-43cb-ba21-4166c6e27b21",
      left: "04b676af-0f62-46c3-b332-b6d60ce5a9be",
    },
    {
      id: "8429c1ec-9262-43cb-ba21-4166c6e27b21",
      name: "DamageField",
      position: {
        x: 1160,
        y: 2680,
      },
      edges: [
        "a93a9e6d-6a82-4561-85da-d8895d7031e1",
        "432b7037-94a4-4666-ab4b-28f5ec62926a",
      ],
      area: "OceaniaCaveB2",
      top: "85c154dd-356c-4f49-9181-3e76b66e69d7",
      bottom: "17f15f7a-cd19-4701-98b3-b84f5f3ca33e",
    },
    {
      id: "17f15f7a-cd19-4701-98b3-b84f5f3ca33e",
      name: "BattleField",
      position: {
        x: 1120,
        y: 3100,
      },
      edges: [
        "432b7037-94a4-4666-ab4b-28f5ec62926a",
        "eb9d5e9b-c4da-4f51-881b-23f2e1aac010",
      ],
      area: "OceaniaCaveB2",
      top: "8429c1ec-9262-43cb-ba21-4166c6e27b21",
      left: "86f33145-1b92-4e15-8e88-bdbd55024b00",
    },
    {
      id: "86f33145-1b92-4e15-8e88-bdbd55024b00",
      name: "TreasureField",
      position: {
        x: 540,
        y: 3080,
      },
      edges: [
        "eb9d5e9b-c4da-4f51-881b-23f2e1aac010",
        "1eb5e089-938c-4dfc-9948-02b5aaedafd8",
        "aa3489ac-8e95-4342-92be-a8c2b2b90b01",
      ],
      area: "OceaniaCaveB2",
      right: "17f15f7a-cd19-4701-98b3-b84f5f3ca33e",
      top: "04b676af-0f62-46c3-b332-b6d60ce5a9be",
      left: "696aee00-8ece-4ee2-a0df-1ca2efe24d85",
    },
    {
      id: "04b676af-0f62-46c3-b332-b6d60ce5a9be",
      name: "BattleField",
      position: {
        x: 460,
        y: 2300,
      },
      edges: [
        "a2dcb9be-d9d0-422e-b75d-7a6fb6b47669",
        "1eb5e089-938c-4dfc-9948-02b5aaedafd8",
      ],
      area: "OceaniaCaveB2",
      right: "85c154dd-356c-4f49-9181-3e76b66e69d7",
      bottom: "86f33145-1b92-4e15-8e88-bdbd55024b00",
    },
    {
      id: "696aee00-8ece-4ee2-a0df-1ca2efe24d85",
      name: "BattleField",
      position: {
        x: -80,
        y: 3080,
      },
      edges: [
        "aa3489ac-8e95-4342-92be-a8c2b2b90b01",
        "c10a8caa-3f25-47a5-8706-a5c5d359739b",
      ],
      area: "OceaniaCaveB2",
      right: "86f33145-1b92-4e15-8e88-bdbd55024b00",
      left: "df209413-8de5-40e2-a79e-4aaecd010826",
    },
    {
      id: "df209413-8de5-40e2-a79e-4aaecd010826",
      name: "DamageField",
      position: {
        x: -660,
        y: 3080,
      },
      edges: [
        "c10a8caa-3f25-47a5-8706-a5c5d359739b",
        "d0132d54-b373-4f18-9ea0-98d00e3b3262",
      ],
      area: "OceaniaCaveB2",
      right: "696aee00-8ece-4ee2-a0df-1ca2efe24d85",
      left: "3be2e502-3b44-4794-ae59-836f092b8838",
    },
    {
      id: "3be2e502-3b44-4794-ae59-836f092b8838",
      name: "TreasureField",
      position: {
        x: -1280,
        y: 3080,
      },
      edges: [
        "d0132d54-b373-4f18-9ea0-98d00e3b3262",
        "95e01ba9-2e66-44fb-81ed-17ac4f611b54",
      ],
      area: "OceaniaCaveB2",
      right: "df209413-8de5-40e2-a79e-4aaecd010826",
      bottom: "b93370f6-449e-4df9-b9ea-5153e857fdc8",
    },
    {
      id: "b93370f6-449e-4df9-b9ea-5153e857fdc8",
      name: "BattleField",
      position: {
        x: -1340,
        y: 3560,
      },
      edges: [
        "95e01ba9-2e66-44fb-81ed-17ac4f611b54",
        "6ee11abe-19bd-4bf2-b0f2-4c16b6664916",
      ],
      area: "OceaniaCaveB2",
      top: "3be2e502-3b44-4794-ae59-836f092b8838",
      bottom: "b0d278b9-c81d-4f8a-84c3-333f8d59a100",
    },
    {
      id: "b0d278b9-c81d-4f8a-84c3-333f8d59a100",
      name: "RedTreasureField",
      position: {
        x: -1280,
        y: 4060,
      },
      edges: [
        "6ee11abe-19bd-4bf2-b0f2-4c16b6664916",
        "c9674e2e-45ca-4a42-acde-5923e78faa0d",
      ],
      area: "OceaniaCaveB2",
      top: "b93370f6-449e-4df9-b9ea-5153e857fdc8",
      bottom: "070467a8-e7a7-4096-a78b-84f6822a5409",
    },
    {
      id: "070467a8-e7a7-4096-a78b-84f6822a5409",
      name: "BattleField",
      position: {
        x: -1360,
        y: 4560,
      },
      edges: ["c9674e2e-45ca-4a42-acde-5923e78faa0d"],
      area: "OceaniaCaveB2",
      top: "b0d278b9-c81d-4f8a-84c3-333f8d59a100",
    },
    {
      id: "805af805-7b15-43ab-9037-1b14f7d7cdb9",
      name: "TreasureField",
      position: {
        x: -1140,
        y: -20,
      },
      edges: [
        "b06d6518-62a3-45fc-bfb9-7a274554d37e",
        "9afdd4da-06ec-4351-a3da-e4988f609524",
      ],
      area: "OceaniaCaveB2",
      right: "62a614b8-e6c2-4923-8e97-fdb372502bc3",
      left: "6d8e70e6-bbc7-4824-8627-070e9d2768f8",
    },
    {
      id: "6d8e70e6-bbc7-4824-8627-070e9d2768f8",
      name: "DamageField",
      position: {
        x: -1860,
        y: -60,
      },
      edges: [
        "9afdd4da-06ec-4351-a3da-e4988f609524",
        "564b96ae-7f58-4678-a5e0-54fe4a7a2246",
        "bf69991b-4b5d-4f1e-aa6b-e4340ab411fc",
      ],
      area: "OceaniaCaveB2",
      right: "805af805-7b15-43ab-9037-1b14f7d7cdb9",
      left: "904cec95-e29b-4417-89c1-c3bcff1025ed",
      bottom: "eb6889ef-ded1-4036-8352-0ea68a54ecd8",
    },
    {
      id: "904cec95-e29b-4417-89c1-c3bcff1025ed",
      name: "BattleField",
      position: {
        x: -2920,
        y: -60,
      },
      edges: [
        "564b96ae-7f58-4678-a5e0-54fe4a7a2246",
        "367801ee-3620-444c-a085-bd7946c6d315",
      ],
      area: "OceaniaCaveB2",
      right: "6d8e70e6-bbc7-4824-8627-070e9d2768f8",
      bottom: "af9be5f2-b8dc-4010-87d2-d616a953d2b7",
    },
    {
      id: "af9be5f2-b8dc-4010-87d2-d616a953d2b7",
      name: "BattleField",
      position: {
        x: -2960,
        y: 460,
      },
      edges: [
        "367801ee-3620-444c-a085-bd7946c6d315",
        "982fa28b-15fc-4d81-9c7d-643b9aa41cfa",
      ],
      area: "OceaniaCaveB2",
      top: "904cec95-e29b-4417-89c1-c3bcff1025ed",
      right: "9800c317-89d4-4273-8303-6b0e849fe31d",
    },
    {
      id: "9800c317-89d4-4273-8303-6b0e849fe31d",
      name: "BattleField",
      position: {
        x: -2420,
        y: 440,
      },
      edges: [
        "982fa28b-15fc-4d81-9c7d-643b9aa41cfa",
        "776c6b6d-266a-48f9-bcf6-f6b68b7a19a5",
        "e3b22a36-5af4-49e1-a750-372b5ead614c",
      ],
      area: "OceaniaCaveB2",
      left: "af9be5f2-b8dc-4010-87d2-d616a953d2b7",
      right: "eb6889ef-ded1-4036-8352-0ea68a54ecd8",
      bottom: "5f1265b7-9c53-4d0d-98b5-4c664d2dffb2",
    },
    {
      id: "eb6889ef-ded1-4036-8352-0ea68a54ecd8",
      name: "TreasureField",
      position: {
        x: -1880,
        y: 460,
      },
      edges: [
        "776c6b6d-266a-48f9-bcf6-f6b68b7a19a5",
        "bf69991b-4b5d-4f1e-aa6b-e4340ab411fc",
      ],
      area: "OceaniaCaveB2",
      left: "9800c317-89d4-4273-8303-6b0e849fe31d",
      top: "6d8e70e6-bbc7-4824-8627-070e9d2768f8",
    },
    {
      id: "5f1265b7-9c53-4d0d-98b5-4c664d2dffb2",
      name: "MagicBookField",
      position: {
        x: -2360,
        y: 880,
      },
      edges: [
        "e3b22a36-5af4-49e1-a750-372b5ead614c",
        "a77cfde8-2fe0-4f90-851f-a62698357eea",
      ],
      area: "OceaniaCaveB2",
      top: "9800c317-89d4-4273-8303-6b0e849fe31d",
      bottom: "5e3e260a-11b5-49cb-9218-a3c125d7a1f9",
    },
    {
      id: "5e3e260a-11b5-49cb-9218-a3c125d7a1f9",
      name: "BattleField",
      position: {
        x: -2420,
        y: 1340,
      },
      edges: [
        "a77cfde8-2fe0-4f90-851f-a62698357eea",
        "4ce68f22-b0bb-46c6-aca4-604d27d0a6ff",
      ],
      area: "OceaniaCaveB2",
      top: "5f1265b7-9c53-4d0d-98b5-4c664d2dffb2",
      left: "953403f9-e1cc-4607-8d13-cb657cd250bd",
    },
    {
      id: "953403f9-e1cc-4607-8d13-cb657cd250bd",
      name: "RedTreasureField",
      position: {
        x: -2960,
        y: 1300,
      },
      edges: [
        "4ce68f22-b0bb-46c6-aca4-604d27d0a6ff",
        "a8ad05dd-aec5-4070-b983-130b6a3a00d2",
      ],
      area: "OceaniaCaveB2",
      right: "5e3e260a-11b5-49cb-9218-a3c125d7a1f9",
      left: "10c01992-c69d-4c11-881f-84aceb0ec13a",
    },
    {
      id: "10c01992-c69d-4c11-881f-84aceb0ec13a",
      name: "BattleField",
      position: {
        x: -3540,
        y: 1320,
      },
      edges: [
        "a8ad05dd-aec5-4070-b983-130b6a3a00d2",
        "2539ff64-faae-4a44-9cff-a1a6057b3984",
      ],
      area: "OceaniaCaveB2",
      right: "953403f9-e1cc-4607-8d13-cb657cd250bd",
      left: "bd9fe1cf-edb8-473a-899d-7309f986c560",
    },
    {
      id: "bd9fe1cf-edb8-473a-899d-7309f986c560",
      name: "BattleField",
      position: {
        x: -4180,
        y: 1280,
      },
      edges: ["2539ff64-faae-4a44-9cff-a1a6057b3984"],
      area: "OceaniaCaveB2",
      right: "10c01992-c69d-4c11-881f-84aceb0ec13a",
    },
  ],
  edges: [
    {
      start: {
        x: -380,
        y: -40,
      },
      startId: "62a614b8-e6c2-4923-8e97-fdb372502bc3",
      end: {
        x: 460,
        y: 40,
      },
      endId: "479df5cd-ad31-4f22-9edb-521311739dcb",
      name: "TwoWayHEdge",
      id: "f7ea5957-a7cf-41b9-b551-5605b4c80009",
    },
    {
      start: {
        x: 460,
        y: 40,
      },
      startId: "479df5cd-ad31-4f22-9edb-521311739dcb",
      end: {
        x: 1060,
        y: 80,
      },
      endId: "7691891a-1b53-45ab-87c5-90f1368edada",
      name: "TwoWayHEdge",
      id: "60e5b855-63df-4161-8f93-b9d38622bcbe",
    },
    {
      start: {
        x: 1060,
        y: 80,
      },
      startId: "7691891a-1b53-45ab-87c5-90f1368edada",
      end: {
        x: 940,
        y: -460,
      },
      endId: "674655e7-ab49-4a14-8474-11eda42b41f1",
      name: "TwoWayVEdge",
      id: "54ff5a7f-d945-48e8-959f-831f86b28f53",
    },
    {
      start: {
        x: 460,
        y: 40,
      },
      startId: "479df5cd-ad31-4f22-9edb-521311739dcb",
      end: {
        x: 400,
        y: 440,
      },
      endId: "3eb8e3fe-e66f-4f0b-960d-9b13ae0e2bbe",
      name: "TwoWayVEdge",
      id: "afa1f230-8dc9-42e4-9be8-4ea2f476d3e9",
    },
    {
      start: {
        x: 400,
        y: 440,
      },
      startId: "3eb8e3fe-e66f-4f0b-960d-9b13ae0e2bbe",
      end: {
        x: 460,
        y: 880,
      },
      endId: "d5cf46b1-9aae-4e41-8da8-ab88e809e16e",
      name: "TwoWayVEdge",
      id: "528c795c-5014-433c-a097-cef48a616362",
    },
    {
      start: {
        x: 460,
        y: 880,
      },
      startId: "d5cf46b1-9aae-4e41-8da8-ab88e809e16e",
      end: {
        x: 1020,
        y: 880,
      },
      endId: "35f607b1-3ea7-418d-b8fc-3932346fd220",
      name: "TwoWayHEdge",
      id: "e7ee9005-fdb6-4a4c-ab08-599b6d4b7abf",
    },
    {
      start: {
        x: 1060,
        y: 80,
      },
      startId: "7691891a-1b53-45ab-87c5-90f1368edada",
      end: {
        x: 1020,
        y: 880,
      },
      endId: "35f607b1-3ea7-418d-b8fc-3932346fd220",
      name: "TwoWayVEdge",
      id: "2d977614-b13e-4458-8e0e-ff31248634b4",
    },
    {
      start: {
        x: 1020,
        y: 880,
      },
      startId: "35f607b1-3ea7-418d-b8fc-3932346fd220",
      end: {
        x: 1800,
        y: 880,
      },
      endId: "eb140a33-8593-4950-9cbb-39a52c46ad53",
      name: "TwoWayHEdge",
      id: "d6f4103e-a8f3-44d8-b5e6-f4ebfd585585",
    },
    {
      start: {
        x: 1800,
        y: 880,
      },
      startId: "eb140a33-8593-4950-9cbb-39a52c46ad53",
      end: {
        x: 1700,
        y: 280,
      },
      endId: "f1d5ed1c-b70a-47c9-9d7a-3b4c2f32d97d",
      name: "TwoWayVEdge",
      id: "1b2690fd-94c3-46e8-8b05-1fca1ee748e5",
    },
    {
      start: {
        x: 1700,
        y: 280,
      },
      startId: "f1d5ed1c-b70a-47c9-9d7a-3b4c2f32d97d",
      end: {
        x: 2300,
        y: 300,
      },
      endId: "f0603449-a812-4090-a516-650dcf54e45a",
      name: "TwoWayHEdge",
      id: "012eb970-9a00-4fcb-953b-274117c66aea",
    },
    {
      start: {
        x: 2300,
        y: 300,
      },
      startId: "f0603449-a812-4090-a516-650dcf54e45a",
      end: {
        x: 2900,
        y: 280,
      },
      endId: "75a9e672-a62f-471b-829a-a7d0625e66b9",
      name: "TwoWayHEdge",
      id: "6376c1c4-73e3-4b4a-9dda-3a3138a577ad",
    },
    {
      start: {
        x: 1800,
        y: 880,
      },
      startId: "eb140a33-8593-4950-9cbb-39a52c46ad53",
      end: {
        x: 2400,
        y: 900,
      },
      endId: "8d2075ad-5875-4fb5-a86c-f02131c02c24",
      name: "TwoWayHEdge",
      id: "6dbc1763-4ac9-4b1a-ad7e-da2f3114f798",
    },
    {
      start: {
        x: 1800,
        y: 880,
      },
      startId: "eb140a33-8593-4950-9cbb-39a52c46ad53",
      end: {
        x: 1760,
        y: 1400,
      },
      endId: "acf4dfbe-10a2-497b-b865-7af7b2a9ffce",
      name: "TwoWayVEdge",
      id: "51b8f0be-cf4d-4206-a704-d41a407d8b06",
    },
    {
      start: {
        x: 1760,
        y: 1400,
      },
      startId: "acf4dfbe-10a2-497b-b865-7af7b2a9ffce",
      end: {
        x: 1880,
        y: 1920,
      },
      endId: "9fdf3052-fce7-4217-869c-d828ca3d3676",
      name: "TwoWayVEdge",
      id: "751f3d1a-0022-46fa-bcad-0bb221ebd996",
    },
    {
      start: {
        x: 1880,
        y: 1920,
      },
      startId: "9fdf3052-fce7-4217-869c-d828ca3d3676",
      end: {
        x: 1140,
        y: 1880,
      },
      endId: "f27c771c-cc02-4473-a746-5e80ff81c82e",
      name: "TwoWayHEdge",
      id: "c7c210ef-8c75-498c-b4d5-10e1cce4526c",
    },
    {
      start: {
        x: 1140,
        y: 1880,
      },
      startId: "f27c771c-cc02-4473-a746-5e80ff81c82e",
      end: {
        x: 440,
        y: 1900,
      },
      endId: "b3ad697a-cbdb-45e8-a097-af73c00c2773",
      name: "TwoWayHEdge",
      id: "c59b08fe-e6c4-43d3-bdaf-5609ba141c62",
    },
    {
      start: {
        x: 440,
        y: 1900,
      },
      startId: "b3ad697a-cbdb-45e8-a097-af73c00c2773",
      end: {
        x: 540,
        y: 1400,
      },
      endId: "46e076f1-c458-4373-b134-6d12764ffb42",
      name: "TwoWayVEdge",
      id: "561503f2-f3b5-4e34-a0b0-b403278476fd",
    },
    {
      start: {
        x: 540,
        y: 1400,
      },
      startId: "46e076f1-c458-4373-b134-6d12764ffb42",
      end: {
        x: -40,
        y: 1420,
      },
      endId: "e7342162-ea27-4f96-ab44-2be013c02f88",
      name: "TwoWayHEdge",
      id: "5b9c29c0-f191-4bfd-9daa-13b5dedff0ee",
    },
    {
      start: {
        x: 1880,
        y: 1920,
      },
      startId: "9fdf3052-fce7-4217-869c-d828ca3d3676",
      end: {
        x: 1820,
        y: 2360,
      },
      endId: "eec0a4d1-7260-4e4c-828f-6fc822f9446d",
      name: "TwoWayVEdge",
      id: "7605f2ca-9463-4d39-8e03-033850f08564",
    },
    {
      start: {
        x: 1820,
        y: 2360,
      },
      startId: "eec0a4d1-7260-4e4c-828f-6fc822f9446d",
      end: {
        x: 1900,
        y: 2760,
      },
      endId: "a9b95f13-184a-44b9-81f7-34c9d8fc226e",
      name: "TwoWayVEdge",
      id: "a7d51688-7ed0-4a9e-b93d-570a862a1a44",
    },
    {
      start: {
        x: 1900,
        y: 2760,
      },
      startId: "a9b95f13-184a-44b9-81f7-34c9d8fc226e",
      end: {
        x: 1820,
        y: 3180,
      },
      endId: "659d1c26-65d3-4187-90a8-3283abf11f14",
      name: "TwoWayVEdge",
      id: "37c10d9e-1271-4ad4-a240-7bb45601585a",
    },
    {
      start: {
        x: 1820,
        y: 2360,
      },
      startId: "eec0a4d1-7260-4e4c-828f-6fc822f9446d",
      end: {
        x: 2440,
        y: 2380,
      },
      endId: "e4002a30-6d57-43bd-a5f6-39d59d8dbf91",
      name: "TwoWayHEdge",
      id: "0a18c5f0-df16-4c8e-be08-7b73a7d5a868",
    },
    {
      start: {
        x: 2440,
        y: 2380,
      },
      startId: "e4002a30-6d57-43bd-a5f6-39d59d8dbf91",
      end: {
        x: 2500,
        y: 3140,
      },
      endId: "95e19d6a-d3da-4796-9bec-350cb1dc6579",
      name: "TwoWayVEdge",
      id: "f17c313a-72f9-41da-9d60-0a4154c5c63a",
    },
    {
      start: {
        x: 1820,
        y: 3180,
      },
      startId: "659d1c26-65d3-4187-90a8-3283abf11f14",
      end: {
        x: 2500,
        y: 3140,
      },
      endId: "95e19d6a-d3da-4796-9bec-350cb1dc6579",
      name: "TwoWayHEdge",
      id: "a883d61a-327f-4c07-b122-ec5a541879e3",
    },
    {
      start: {
        x: 2440,
        y: 2380,
      },
      startId: "e4002a30-6d57-43bd-a5f6-39d59d8dbf91",
      end: {
        x: 3080,
        y: 2400,
      },
      endId: "fd4c95cb-31ec-4c05-9e6b-c78f6d81d227",
      name: "TwoWayHEdge",
      id: "e1108b7e-162a-49de-a261-0b79427f2938",
    },
    {
      start: {
        x: 1140,
        y: 1880,
      },
      startId: "f27c771c-cc02-4473-a746-5e80ff81c82e",
      end: {
        x: 1100,
        y: 2260,
      },
      endId: "85c154dd-356c-4f49-9181-3e76b66e69d7",
      name: "TwoWayVEdge",
      id: "95937a1b-bc00-4a13-9457-c3adde3c8f34",
    },
    {
      start: {
        x: 1100,
        y: 2260,
      },
      startId: "85c154dd-356c-4f49-9181-3e76b66e69d7",
      end: {
        x: 1160,
        y: 2680,
      },
      endId: "8429c1ec-9262-43cb-ba21-4166c6e27b21",
      name: "TwoWayVEdge",
      id: "a93a9e6d-6a82-4561-85da-d8895d7031e1",
    },
    {
      start: {
        x: 1160,
        y: 2680,
      },
      startId: "8429c1ec-9262-43cb-ba21-4166c6e27b21",
      end: {
        x: 1120,
        y: 3100,
      },
      endId: "17f15f7a-cd19-4701-98b3-b84f5f3ca33e",
      name: "TwoWayVEdge",
      id: "432b7037-94a4-4666-ab4b-28f5ec62926a",
    },
    {
      start: {
        x: 1120,
        y: 3100,
      },
      startId: "17f15f7a-cd19-4701-98b3-b84f5f3ca33e",
      end: {
        x: 540,
        y: 3080,
      },
      endId: "86f33145-1b92-4e15-8e88-bdbd55024b00",
      name: "TwoWayHEdge",
      id: "eb9d5e9b-c4da-4f51-881b-23f2e1aac010",
    },
    {
      start: {
        x: 1100,
        y: 2260,
      },
      startId: "85c154dd-356c-4f49-9181-3e76b66e69d7",
      end: {
        x: 460,
        y: 2300,
      },
      endId: "04b676af-0f62-46c3-b332-b6d60ce5a9be",
      name: "TwoWayHEdge",
      id: "a2dcb9be-d9d0-422e-b75d-7a6fb6b47669",
    },
    {
      start: {
        x: 460,
        y: 2300,
      },
      startId: "04b676af-0f62-46c3-b332-b6d60ce5a9be",
      end: {
        x: 540,
        y: 3080,
      },
      endId: "86f33145-1b92-4e15-8e88-bdbd55024b00",
      name: "TwoWayVEdge",
      id: "1eb5e089-938c-4dfc-9948-02b5aaedafd8",
    },
    {
      start: {
        x: 540,
        y: 3080,
      },
      startId: "86f33145-1b92-4e15-8e88-bdbd55024b00",
      end: {
        x: -80,
        y: 3080,
      },
      endId: "696aee00-8ece-4ee2-a0df-1ca2efe24d85",
      name: "TwoWayHEdge",
      id: "aa3489ac-8e95-4342-92be-a8c2b2b90b01",
    },
    {
      start: {
        x: -80,
        y: 3080,
      },
      startId: "696aee00-8ece-4ee2-a0df-1ca2efe24d85",
      end: {
        x: -660,
        y: 3080,
      },
      endId: "df209413-8de5-40e2-a79e-4aaecd010826",
      name: "TwoWayHEdge",
      id: "c10a8caa-3f25-47a5-8706-a5c5d359739b",
    },
    {
      start: {
        x: -660,
        y: 3080,
      },
      startId: "df209413-8de5-40e2-a79e-4aaecd010826",
      end: {
        x: -1280,
        y: 3080,
      },
      endId: "3be2e502-3b44-4794-ae59-836f092b8838",
      name: "TwoWayHEdge",
      id: "d0132d54-b373-4f18-9ea0-98d00e3b3262",
    },
    {
      start: {
        x: -1280,
        y: 3080,
      },
      startId: "3be2e502-3b44-4794-ae59-836f092b8838",
      end: {
        x: -1340,
        y: 3560,
      },
      endId: "b93370f6-449e-4df9-b9ea-5153e857fdc8",
      name: "TwoWayVEdge",
      id: "95e01ba9-2e66-44fb-81ed-17ac4f611b54",
    },
    {
      start: {
        x: -1340,
        y: 3560,
      },
      startId: "b93370f6-449e-4df9-b9ea-5153e857fdc8",
      end: {
        x: -1280,
        y: 4060,
      },
      endId: "b0d278b9-c81d-4f8a-84c3-333f8d59a100",
      name: "TwoWayVEdge",
      id: "6ee11abe-19bd-4bf2-b0f2-4c16b6664916",
    },
    {
      start: {
        x: -1280,
        y: 4060,
      },
      startId: "b0d278b9-c81d-4f8a-84c3-333f8d59a100",
      end: {
        x: -1360,
        y: 4560,
      },
      endId: "070467a8-e7a7-4096-a78b-84f6822a5409",
      name: "TwoWayVEdge",
      id: "c9674e2e-45ca-4a42-acde-5923e78faa0d",
    },
    {
      start: {
        x: -380,
        y: -40,
      },
      startId: "62a614b8-e6c2-4923-8e97-fdb372502bc3",
      end: {
        x: -1140,
        y: -20,
      },
      endId: "805af805-7b15-43ab-9037-1b14f7d7cdb9",
      name: "TwoWayHEdge",
      id: "b06d6518-62a3-45fc-bfb9-7a274554d37e",
    },
    {
      start: {
        x: -1140,
        y: -20,
      },
      startId: "805af805-7b15-43ab-9037-1b14f7d7cdb9",
      end: {
        x: -1860,
        y: -60,
      },
      endId: "6d8e70e6-bbc7-4824-8627-070e9d2768f8",
      name: "TwoWayHEdge",
      id: "9afdd4da-06ec-4351-a3da-e4988f609524",
    },
    {
      start: {
        x: -1860,
        y: -60,
      },
      startId: "6d8e70e6-bbc7-4824-8627-070e9d2768f8",
      end: {
        x: -2920,
        y: -60,
      },
      endId: "904cec95-e29b-4417-89c1-c3bcff1025ed",
      name: "TwoWayHEdge",
      id: "564b96ae-7f58-4678-a5e0-54fe4a7a2246",
    },
    {
      start: {
        x: -2920,
        y: -60,
      },
      startId: "904cec95-e29b-4417-89c1-c3bcff1025ed",
      end: {
        x: -2960,
        y: 460,
      },
      endId: "af9be5f2-b8dc-4010-87d2-d616a953d2b7",
      name: "TwoWayVEdge",
      id: "367801ee-3620-444c-a085-bd7946c6d315",
    },
    {
      start: {
        x: -2960,
        y: 460,
      },
      startId: "af9be5f2-b8dc-4010-87d2-d616a953d2b7",
      end: {
        x: -2420,
        y: 440,
      },
      endId: "9800c317-89d4-4273-8303-6b0e849fe31d",
      name: "TwoWayHEdge",
      id: "982fa28b-15fc-4d81-9c7d-643b9aa41cfa",
    },
    {
      start: {
        x: -2420,
        y: 440,
      },
      startId: "9800c317-89d4-4273-8303-6b0e849fe31d",
      end: {
        x: -1880,
        y: 460,
      },
      endId: "eb6889ef-ded1-4036-8352-0ea68a54ecd8",
      name: "TwoWayHEdge",
      id: "776c6b6d-266a-48f9-bcf6-f6b68b7a19a5",
    },
    {
      start: {
        x: -1860,
        y: -60,
      },
      startId: "6d8e70e6-bbc7-4824-8627-070e9d2768f8",
      end: {
        x: -1880,
        y: 460,
      },
      endId: "eb6889ef-ded1-4036-8352-0ea68a54ecd8",
      name: "TwoWayVEdge",
      id: "bf69991b-4b5d-4f1e-aa6b-e4340ab411fc",
    },
    {
      start: {
        x: -2420,
        y: 440,
      },
      startId: "9800c317-89d4-4273-8303-6b0e849fe31d",
      end: {
        x: -2360,
        y: 880,
      },
      endId: "5f1265b7-9c53-4d0d-98b5-4c664d2dffb2",
      name: "TwoWayVEdge",
      id: "e3b22a36-5af4-49e1-a750-372b5ead614c",
    },
    {
      start: {
        x: -2360,
        y: 880,
      },
      startId: "5f1265b7-9c53-4d0d-98b5-4c664d2dffb2",
      end: {
        x: -2420,
        y: 1340,
      },
      endId: "5e3e260a-11b5-49cb-9218-a3c125d7a1f9",
      name: "TwoWayVEdge",
      id: "a77cfde8-2fe0-4f90-851f-a62698357eea",
    },
    {
      start: {
        x: -2420,
        y: 1340,
      },
      startId: "5e3e260a-11b5-49cb-9218-a3c125d7a1f9",
      end: {
        x: -2960,
        y: 1300,
      },
      endId: "953403f9-e1cc-4607-8d13-cb657cd250bd",
      name: "TwoWayHEdge",
      id: "4ce68f22-b0bb-46c6-aca4-604d27d0a6ff",
    },
    {
      start: {
        x: -2960,
        y: 1300,
      },
      startId: "953403f9-e1cc-4607-8d13-cb657cd250bd",
      end: {
        x: -3540,
        y: 1320,
      },
      endId: "10c01992-c69d-4c11-881f-84aceb0ec13a",
      name: "TwoWayHEdge",
      id: "a8ad05dd-aec5-4070-b983-130b6a3a00d2",
    },
    {
      start: {
        x: -3540,
        y: 1320,
      },
      startId: "10c01992-c69d-4c11-881f-84aceb0ec13a",
      end: {
        x: -4180,
        y: 1280,
      },
      endId: "bd9fe1cf-edb8-473a-899d-7309f986c560",
      name: "TwoWayHEdge",
      id: "2539ff64-faae-4a44-9cff-a1a6057b3984",
    },
  ],
};
export default oceaniaCaveB2Map;
