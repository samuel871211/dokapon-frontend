import type { GraphJSON, Vertex } from "global";

const asiaVertices: Vertex[] = [
  {
    position: {
      x: 3700,
      y: 2420,
    },
    name: "BattleField",
    id: "af8cc9f3-5031-49ff-92ee-6b2da5bd5dc0",
    bottom: "46da86e3-e7b7-44b5-93d4-2abf4b99cbd9",
    right: "323ac0c1-03ac-4db2-828f-ac2afff386cd",
    edges: [
      "b37717cb-303b-4755-884b-ca8031828f6d",
      "0e3a4ef2-275e-4686-98a2-ec9d4f0f9429",
      "e0f377a9-5518-4894-b957-82c131943c73",
    ],
    left: "a065eb39-be8a-4494-9f10-56a7781f8464",
    area: "Asia",
  },
  {
    position: {
      x: 3700,
      y: 2680,
    },
    name: "TreasureField",
    id: "46da86e3-e7b7-44b5-93d4-2abf4b99cbd9",
    top: "af8cc9f3-5031-49ff-92ee-6b2da5bd5dc0",
    bottom: "bdf4770f-6e87-40ae-8c68-271a9490b71f",
    edges: [
      "b37717cb-303b-4755-884b-ca8031828f6d",
      "47230d0e-35d9-4aac-8874-0556133b5a6c",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 3700,
      y: 2960,
    },
    name: "BattleField",
    id: "bdf4770f-6e87-40ae-8c68-271a9490b71f",
    top: "46da86e3-e7b7-44b5-93d4-2abf4b99cbd9",
    right: "302a4d3b-aab8-4d87-b8ca-9a23c353b740",
    edges: [
      "47230d0e-35d9-4aac-8874-0556133b5a6c",
      "b25d9bd0-ac89-48cb-b635-d5dfc6b66320",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 3900,
      y: 2420,
    },
    name: "BattleField",
    id: "323ac0c1-03ac-4db2-828f-ac2afff386cd",
    left: "af8cc9f3-5031-49ff-92ee-6b2da5bd5dc0",
    top: "a5aa39c5-95eb-4130-8389-08b72b243190",
    edges: [
      "0e3a4ef2-275e-4686-98a2-ec9d4f0f9429",
      "9d9fd583-e90a-4ccc-993b-8ffcbd1c805a",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 3900,
      y: 2260,
    },
    name: "BattleField",
    id: "a5aa39c5-95eb-4130-8389-08b72b243190",
    bottom: "323ac0c1-03ac-4db2-828f-ac2afff386cd",
    edges: [
      "9d9fd583-e90a-4ccc-993b-8ffcbd1c805a",
      "cc8b596f-825f-41dd-b8f7-c62d6e1ce6ef",
    ],
    right: "d016ba22-1124-49d8-b41d-32850b048589",
    area: "Asia",
  },
  {
    position: {
      x: 4140,
      y: 2620,
    },
    name: "BattleField",
    id: "66267139-47f3-47d2-8840-7b389f19aaee",
    bottom: "8d6ba350-64b0-430f-844a-959b5f769f76",
    edges: [
      "53b4940c-ba4a-4fce-9dc5-223253014afb",
      "5386bc89-e84a-457e-995b-cbd15a0030c9",
      "6a256880-af80-4308-aad4-31c01b6c39a8",
    ],
    right: "63d77f19-376a-4994-9dbf-810eef7008ea",
    top: "d016ba22-1124-49d8-b41d-32850b048589",
    area: "Asia",
  },
  {
    position: {
      x: 4140,
      y: 2260,
    },
    name: "TreasureField",
    id: "d016ba22-1124-49d8-b41d-32850b048589",
    right: "5abbabec-0e8d-4d11-835c-1095ded5f143",
    edges: [
      "a215feee-44f8-4723-bb3b-6e965696f5ca",
      "6a256880-af80-4308-aad4-31c01b6c39a8",
      "cc8b596f-825f-41dd-b8f7-c62d6e1ce6ef",
    ],
    bottom: "66267139-47f3-47d2-8840-7b389f19aaee",
    left: "a5aa39c5-95eb-4130-8389-08b72b243190",
    area: "Asia",
  },
  {
    position: {
      x: 4300,
      y: 2420,
    },
    name: "BattleField",
    id: "5a43a908-fe8b-4f09-bac0-4650767b92af",
    bottom: "63d77f19-376a-4994-9dbf-810eef7008ea",
    edges: [
      "9ec01a37-e980-4270-91ce-f0cef5211b7d",
      "89abd63d-29c7-48d4-a8cb-03fce72f1780",
    ],
    top: "5abbabec-0e8d-4d11-835c-1095ded5f143",
    area: "Asia",
  },
  {
    position: {
      x: 4300,
      y: 2620,
    },
    name: "BattleField",
    id: "63d77f19-376a-4994-9dbf-810eef7008ea",
    top: "5a43a908-fe8b-4f09-bac0-4650767b92af",
    bottom: "ca81f639-f7b8-47f7-9470-9ae602d7157c",
    edges: [
      "9ec01a37-e980-4270-91ce-f0cef5211b7d",
      "d5173463-aede-494d-a054-2669618a23e4",
      "5386bc89-e84a-457e-995b-cbd15a0030c9",
    ],
    left: "66267139-47f3-47d2-8840-7b389f19aaee",
    area: "Asia",
  },
  {
    position: {
      x: 3900,
      y: 2600,
    },
    name: "VillageField",
    id: "2c7b565a-345b-4c49-9020-4016c2b1212b",
    bottom: "07a30e7d-f8b4-4982-9b03-29c2677b2a13",
    edges: ["194623f7-8e84-4fb9-b985-858037837a90"],
    area: "Asia",
  },
  {
    position: {
      x: 3900,
      y: 2820,
    },
    name: "BattleField",
    id: "07a30e7d-f8b4-4982-9b03-29c2677b2a13",
    bottom: "302a4d3b-aab8-4d87-b8ca-9a23c353b740",
    right: "1e24287d-43fe-4f5a-9f74-fd2dc1f5cc0c",
    top: "2c7b565a-345b-4c49-9020-4016c2b1212b",
    edges: [
      "dcc4d879-65fc-4c5c-8a8c-494b4916ac91",
      "ee87f914-bc04-448c-84ed-feadc4a57cb1",
      "194623f7-8e84-4fb9-b985-858037837a90",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4020,
      y: 2820,
    },
    name: "BattleField",
    id: "1e24287d-43fe-4f5a-9f74-fd2dc1f5cc0c",
    left: "07a30e7d-f8b4-4982-9b03-29c2677b2a13",
    right: "8d6ba350-64b0-430f-844a-959b5f769f76",
    edges: [
      "ee87f914-bc04-448c-84ed-feadc4a57cb1",
      "cbb8c2a0-1cbf-43e2-ba2f-396626ea9041",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4140,
      y: 2820,
    },
    name: "BattleField",
    id: "8d6ba350-64b0-430f-844a-959b5f769f76",
    bottom: "6336deca-2bf1-4afe-90f4-6d371195be4c",
    left: "1e24287d-43fe-4f5a-9f74-fd2dc1f5cc0c",
    top: "66267139-47f3-47d2-8840-7b389f19aaee",
    edges: [
      "d6f7e812-8e11-4e0f-bd9b-c9f9b4dc909a",
      "cbb8c2a0-1cbf-43e2-ba2f-396626ea9041",
      "53b4940c-ba4a-4fce-9dc5-223253014afb",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 3900,
      y: 2960,
    },
    name: "MagicBookField",
    id: "302a4d3b-aab8-4d87-b8ca-9a23c353b740",
    left: "bdf4770f-6e87-40ae-8c68-271a9490b71f",
    right: "6336deca-2bf1-4afe-90f4-6d371195be4c",
    top: "07a30e7d-f8b4-4982-9b03-29c2677b2a13",
    edges: [
      "b25d9bd0-ac89-48cb-b635-d5dfc6b66320",
      "fcbb2913-33f6-4f47-8b35-e2ea7d381f97",
      "dcc4d879-65fc-4c5c-8a8c-494b4916ac91",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4140,
      y: 2960,
    },
    name: "BattleField",
    id: "6336deca-2bf1-4afe-90f4-6d371195be4c",
    left: "302a4d3b-aab8-4d87-b8ca-9a23c353b740",
    top: "8d6ba350-64b0-430f-844a-959b5f769f76",
    right: "dbbdf9ab-fdd3-497f-b7d2-cdaddf390849",
    bottom: "174ed2c6-a407-4429-ac3c-a2927d3ae8df",
    edges: [
      "fcbb2913-33f6-4f47-8b35-e2ea7d381f97",
      "d6f7e812-8e11-4e0f-bd9b-c9f9b4dc909a",
      "602d5a33-402f-4643-9980-7d43c70e2744",
      "d8914b10-b45a-4170-8d83-ec139387f0e9",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4300,
      y: 2260,
    },
    name: "WeaponStoreField",
    id: "5abbabec-0e8d-4d11-835c-1095ded5f143",
    left: "d016ba22-1124-49d8-b41d-32850b048589",
    edges: [
      "a215feee-44f8-4723-bb3b-6e965696f5ca",
      "20eaa939-e3ba-413d-b5b6-6cb1d66411cc",
      "89abd63d-29c7-48d4-a8cb-03fce72f1780",
    ],
    right: "aafeda89-3a98-4d54-929c-f295dbf47dee",
    bottom: "5a43a908-fe8b-4f09-bac0-4650767b92af",
    area: "Asia",
  },
  {
    position: {
      x: 4300,
      y: 2780,
    },
    name: "BattleField",
    id: "ca81f639-f7b8-47f7-9470-9ae602d7157c",
    top: "63d77f19-376a-4994-9dbf-810eef7008ea",
    right: "cf14f654-3d72-4917-8d61-f30cac68f24a",
    edges: [
      "d5173463-aede-494d-a054-2669618a23e4",
      "5412d6a6-bec8-4210-9f63-5b9697d8aceb",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4480,
      y: 2780,
    },
    name: "TreasureField",
    id: "cf14f654-3d72-4917-8d61-f30cac68f24a",
    left: "ca81f639-f7b8-47f7-9470-9ae602d7157c",
    top: "7e02e76b-8750-4d8f-8a4b-7a154726be9a",
    right: "11e7f68c-47e9-4fe8-ae9b-59ef53bdf831",
    edges: [
      "5412d6a6-bec8-4210-9f63-5b9697d8aceb",
      "76837454-f587-41b0-95cc-f27f0126e582",
      "f85365e6-4557-47a0-87fe-ec3c6edf1e9c",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4480,
      y: 2620,
    },
    name: "BattleField",
    id: "7e02e76b-8750-4d8f-8a4b-7a154726be9a",
    bottom: "cf14f654-3d72-4917-8d61-f30cac68f24a",
    right: "9bd4ebd7-09ba-40ad-9b96-82f955d817de",
    edges: [
      "76837454-f587-41b0-95cc-f27f0126e582",
      "448bf614-ae94-4331-bd2f-9afc035705ea",
      "708b88ed-da0b-4859-a010-d92a545a9d3c",
    ],
    top: "aafeda89-3a98-4d54-929c-f295dbf47dee",
    area: "Asia",
  },
  {
    position: {
      x: 4660,
      y: 2260,
    },
    name: "BattleField",
    id: "99264c2f-3462-420d-b85c-3cbe79ce6d51",
    right: "dee44942-a905-40aa-922c-5fbd2ce35504",
    edges: [
      "929dde8e-a08f-4065-835f-3938b51047a1",
      "5c124733-9dba-4d98-b8c5-e17ac2df28b7",
    ],
    left: "aafeda89-3a98-4d54-929c-f295dbf47dee",
    area: "Asia",
  },
  {
    position: {
      x: 4800,
      y: 2620,
    },
    name: "GroceryStoreField",
    id: "9bd4ebd7-09ba-40ad-9b96-82f955d817de",
    left: "7e02e76b-8750-4d8f-8a4b-7a154726be9a",
    bottom: "d543f24e-cd46-418e-8cb3-56b3b665d958",
    right: "574dfcdf-25b8-4f1c-ad51-9217a1c888a7",
    edges: [
      "448bf614-ae94-4331-bd2f-9afc035705ea",
      "42e9f286-fef9-4490-a9ab-36afd5219004",
      "18210fd9-61fc-47cc-8cb6-6610c7c6ca4c",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4640,
      y: 2780,
    },
    name: "BattleField",
    id: "11e7f68c-47e9-4fe8-ae9b-59ef53bdf831",
    left: "cf14f654-3d72-4917-8d61-f30cac68f24a",
    right: "d543f24e-cd46-418e-8cb3-56b3b665d958",
    edges: [
      "f85365e6-4557-47a0-87fe-ec3c6edf1e9c",
      "86c439fc-20d5-48b7-aaa6-217744777074",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4800,
      y: 2780,
    },
    name: "BattleField",
    id: "d543f24e-cd46-418e-8cb3-56b3b665d958",
    top: "9bd4ebd7-09ba-40ad-9b96-82f955d817de",
    left: "11e7f68c-47e9-4fe8-ae9b-59ef53bdf831",
    bottom: "ca9c14d0-8009-4bdd-b60b-907d7aca81a4",
    edges: [
      "42e9f286-fef9-4490-a9ab-36afd5219004",
      "86c439fc-20d5-48b7-aaa6-217744777074",
      "1fdb381d-bc81-4903-890c-b0b0fd5c20a5",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4860,
      y: 2260,
    },
    name: "TreasureField",
    id: "dee44942-a905-40aa-922c-5fbd2ce35504",
    left: "99264c2f-3462-420d-b85c-3cbe79ce6d51",
    bottom: "f4f16cd2-3467-426d-9642-75de10d56ba5",
    right: "9df16f11-ecf8-4bc2-9b19-2393d31410cc",
    edges: [
      "929dde8e-a08f-4065-835f-3938b51047a1",
      "cafd1178-4228-4dab-a6a6-51f4c756057c",
      "ee51f43f-854c-41f1-8669-5957370e33fe",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5040,
      y: 2260,
    },
    name: "BattleField",
    id: "9df16f11-ecf8-4bc2-9b19-2393d31410cc",
    left: "dee44942-a905-40aa-922c-5fbd2ce35504",
    right: "f634153b-d320-4e0b-ab65-40383cf6fba8",
    edges: [
      "ee51f43f-854c-41f1-8669-5957370e33fe",
      "5b04172e-a4fd-4588-9312-a37644fc539c",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5220,
      y: 2260,
    },
    name: "VillageField",
    id: "f634153b-d320-4e0b-ab65-40383cf6fba8",
    left: "9df16f11-ecf8-4bc2-9b19-2393d31410cc",
    bottom: "29a17b86-6a0b-4f1e-b312-5db62ec89be8",
    right: "b9ac4dfc-6553-4d25-b191-c8fec120808d",
    edges: [
      "5b04172e-a4fd-4588-9312-a37644fc539c",
      "3667ee88-8b1e-49cc-a0f9-92da2f3b209f",
      "b18fa591-1805-41e7-b748-e6c31d2da7f8",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4860,
      y: 2420,
    },
    name: "BattleField",
    id: "f4f16cd2-3467-426d-9642-75de10d56ba5",
    top: "dee44942-a905-40aa-922c-5fbd2ce35504",
    right: "29a17b86-6a0b-4f1e-b312-5db62ec89be8",
    edges: [
      "cafd1178-4228-4dab-a6a6-51f4c756057c",
      "691bffaa-6474-462a-874e-5fe59560307b",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5220,
      y: 2420,
    },
    name: "BattleField",
    id: "29a17b86-6a0b-4f1e-b312-5db62ec89be8",
    top: "f634153b-d320-4e0b-ab65-40383cf6fba8",
    left: "f4f16cd2-3467-426d-9642-75de10d56ba5",
    edges: [
      "3667ee88-8b1e-49cc-a0f9-92da2f3b209f",
      "691bffaa-6474-462a-874e-5fe59560307b",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5400,
      y: 2260,
    },
    name: "BattleField",
    id: "b9ac4dfc-6553-4d25-b191-c8fec120808d",
    left: "f634153b-d320-4e0b-ab65-40383cf6fba8",
    bottom: "752a103c-cf30-4b12-a992-c43e93fe2ea1",
    edges: [
      "b18fa591-1805-41e7-b748-e6c31d2da7f8",
      "c6aa47ae-a8b7-4ade-8ebf-97222167c442",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5400,
      y: 2460,
    },
    name: "TreasureField",
    id: "752a103c-cf30-4b12-a992-c43e93fe2ea1",
    top: "b9ac4dfc-6553-4d25-b191-c8fec120808d",
    right: "5c5ea552-0994-4bbb-bece-98cedf0271e6",
    edges: [
      "c6aa47ae-a8b7-4ade-8ebf-97222167c442",
      "e896aa3d-f139-4210-a878-fe5bdd1cda5d",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5600,
      y: 2460,
    },
    name: "BattleField",
    id: "5c5ea552-0994-4bbb-bece-98cedf0271e6",
    left: "752a103c-cf30-4b12-a992-c43e93fe2ea1",
    right: "6bc85851-0e17-4905-b4b9-546a99f92d59",
    bottom: "c8bdeffc-b9d2-41cd-a6f2-1481f12ecfc6",
    edges: [
      "e896aa3d-f139-4210-a878-fe5bdd1cda5d",
      "14a5bded-e3a9-4a86-80bc-5e04ca5b7343",
      "2c206d33-d992-4025-a2e9-2d74d8a0a926",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5820,
      y: 2460,
    },
    name: "JobStoreField",
    id: "6bc85851-0e17-4905-b4b9-546a99f92d59",
    left: "5c5ea552-0994-4bbb-bece-98cedf0271e6",
    bottom: "4b4320ae-1583-42e3-b963-e9ca1395fb14",
    edges: [
      "14a5bded-e3a9-4a86-80bc-5e04ca5b7343",
      "e0bb5615-0c8f-4bc7-ba10-e4a917a3aa92",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5600,
      y: 2780,
    },
    name: "MagicBookField",
    id: "c8bdeffc-b9d2-41cd-a6f2-1481f12ecfc6",
    top: "5c5ea552-0994-4bbb-bece-98cedf0271e6",
    right: "7267c7da-fef0-4fd1-9f61-c1948e27717a",
    edges: [
      "2c206d33-d992-4025-a2e9-2d74d8a0a926",
      "a052e298-6ba9-484a-8a33-547bdec7c1f3",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5820,
      y: 2620,
    },
    name: "BattleField",
    id: "4b4320ae-1583-42e3-b963-e9ca1395fb14",
    top: "6bc85851-0e17-4905-b4b9-546a99f92d59",
    bottom: "7267c7da-fef0-4fd1-9f61-c1948e27717a",
    right: "62676253-2ed2-480a-9af6-6f4fed4fbfbd",
    edges: [
      "e0bb5615-0c8f-4bc7-ba10-e4a917a3aa92",
      "e6ef2faf-833c-4138-b44c-6c3b75c9cf29",
      "ed110e9d-5445-4fc3-a419-97111dff9ba7",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5820,
      y: 2780,
    },
    name: "BattleField",
    id: "7267c7da-fef0-4fd1-9f61-c1948e27717a",
    top: "4b4320ae-1583-42e3-b963-e9ca1395fb14",
    left: "c8bdeffc-b9d2-41cd-a6f2-1481f12ecfc6",
    bottom: "c4c618f4-be95-461c-85a0-19cb4e6819c5",
    edges: [
      "e6ef2faf-833c-4138-b44c-6c3b75c9cf29",
      "a052e298-6ba9-484a-8a33-547bdec7c1f3",
      "a4a7a2d7-204d-416a-b20a-a968b61f1ec5",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4800,
      y: 2940,
    },
    name: "MagicBookField",
    id: "ca9c14d0-8009-4bdd-b60b-907d7aca81a4",
    top: "d543f24e-cd46-418e-8cb3-56b3b665d958",
    right: "571e15e0-7324-4e98-925e-2aac78952e6c",
    bottom: "95462da4-a5c0-40fe-a763-c5340d355856",
    edges: [
      "1fdb381d-bc81-4903-890c-b0b0fd5c20a5",
      "deb81b1e-097c-442a-bb12-af84909d8999",
      "6583e024-dd2e-431b-9653-054f990e0cb4",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4960,
      y: 2940,
    },
    name: "CastleField",
    id: "571e15e0-7324-4e98-925e-2aac78952e6c",
    left: "ca9c14d0-8009-4bdd-b60b-907d7aca81a4",
    right: "09eff9ac-05cf-418c-9f8b-04547ea045b2",
    edges: [
      "deb81b1e-097c-442a-bb12-af84909d8999",
      "36e56502-933e-4105-b0c7-c8db8e4f8cde",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5140,
      y: 2940,
    },
    name: "TreasureField",
    id: "09eff9ac-05cf-418c-9f8b-04547ea045b2",
    left: "571e15e0-7324-4e98-925e-2aac78952e6c",
    bottom: "32e8bf41-28a9-4c3f-8bfb-c23cb0f512df",
    top: "16f68f81-126f-429d-b4d6-1fce7b67bbc8",
    edges: [
      "36e56502-933e-4105-b0c7-c8db8e4f8cde",
      "c3b0de0f-0e48-4153-9a2b-22a5e86108be",
      "9dc8b9a3-c4ef-48bb-91b6-affd5143ae8f",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4800,
      y: 3080,
    },
    name: "BattleField",
    id: "95462da4-a5c0-40fe-a763-c5340d355856",
    top: "ca9c14d0-8009-4bdd-b60b-907d7aca81a4",
    right: "32e8bf41-28a9-4c3f-8bfb-c23cb0f512df",
    edges: [
      "6583e024-dd2e-431b-9653-054f990e0cb4",
      "175dd7f5-d170-4bfd-9ced-04e80c08b3e0",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5140,
      y: 3080,
    },
    name: "BattleField",
    id: "32e8bf41-28a9-4c3f-8bfb-c23cb0f512df",
    top: "09eff9ac-05cf-418c-9f8b-04547ea045b2",
    left: "95462da4-a5c0-40fe-a763-c5340d355856",
    bottom: "2fb01b13-efb5-4875-bd5c-bd98010e4249",
    edges: [
      "c3b0de0f-0e48-4153-9a2b-22a5e86108be",
      "175dd7f5-d170-4bfd-9ced-04e80c08b3e0",
      "b129f573-2c02-4067-a75a-6b2c94901db9",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5140,
      y: 2780,
    },
    name: "VillageField",
    id: "16f68f81-126f-429d-b4d6-1fce7b67bbc8",
    bottom: "09eff9ac-05cf-418c-9f8b-04547ea045b2",
    right: "243330ff-cefc-4f4a-9b34-5aa654d482a5",
    edges: [
      "9dc8b9a3-c4ef-48bb-91b6-affd5143ae8f",
      "7fd86ae7-e041-49d6-8d71-5db31d9ce8cb",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5320,
      y: 2780,
    },
    name: "BattleField",
    id: "243330ff-cefc-4f4a-9b34-5aa654d482a5",
    left: "16f68f81-126f-429d-b4d6-1fce7b67bbc8",
    bottom: "9cf22ad9-8eb4-405f-90d5-fe15774d4e1e",
    edges: [
      "7fd86ae7-e041-49d6-8d71-5db31d9ce8cb",
      "725293cb-022f-4e02-ac7d-fad6910a3202",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5320,
      y: 2940,
    },
    name: "BattleField",
    id: "9cf22ad9-8eb4-405f-90d5-fe15774d4e1e",
    top: "243330ff-cefc-4f4a-9b34-5aa654d482a5",
    right: "eb57ead9-4030-4994-9a2a-897064788cef",
    edges: [
      "725293cb-022f-4e02-ac7d-fad6910a3202",
      "e4f7d06a-b25f-4f13-8266-811c86cac4ef",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5500,
      y: 2940,
    },
    name: "VillageField",
    id: "eb57ead9-4030-4994-9a2a-897064788cef",
    left: "9cf22ad9-8eb4-405f-90d5-fe15774d4e1e",
    right: "28d4ee00-7574-4240-b7a0-5bad83d987c1",
    edges: [
      "e4f7d06a-b25f-4f13-8266-811c86cac4ef",
      "0e96df10-6db3-4a1c-92bb-082362858eee",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5820,
      y: 2940,
    },
    name: "BattleField",
    id: "c4c618f4-be95-461c-85a0-19cb4e6819c5",
    left: "28d4ee00-7574-4240-b7a0-5bad83d987c1",
    top: "7267c7da-fef0-4fd1-9f61-c1948e27717a",
    edges: [
      "a09f6aa3-1bc6-49b9-b951-05738d874ac4",
      "a4a7a2d7-204d-416a-b20a-a968b61f1ec5",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5660,
      y: 2940,
    },
    name: "BattleField",
    id: "28d4ee00-7574-4240-b7a0-5bad83d987c1",
    left: "eb57ead9-4030-4994-9a2a-897064788cef",
    right: "c4c618f4-be95-461c-85a0-19cb4e6819c5",
    bottom: "0e52d178-9287-41d5-ad95-e7418511d083",
    edges: [
      "0e96df10-6db3-4a1c-92bb-082362858eee",
      "a09f6aa3-1bc6-49b9-b951-05738d874ac4",
      "cdae4c0c-0661-4196-ba94-467441ca5eb5",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5980,
      y: 2620,
    },
    name: "TreasureField",
    id: "62676253-2ed2-480a-9af6-6f4fed4fbfbd",
    left: "4b4320ae-1583-42e3-b963-e9ca1395fb14",
    right: "16a6cd70-54d4-4580-827a-e1487aa52272",
    edges: [
      "ed110e9d-5445-4fc3-a419-97111dff9ba7",
      "81f84b40-77a4-4fdb-a149-ae627deb938f",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 6160,
      y: 2620,
    },
    name: "VillageField",
    id: "16a6cd70-54d4-4580-827a-e1487aa52272",
    left: "62676253-2ed2-480a-9af6-6f4fed4fbfbd",
    right: "3cfb7867-7384-4abd-9146-448374761bde",
    edges: [
      "81f84b40-77a4-4fdb-a149-ae627deb938f",
      "1c0e8d5e-634c-423f-b457-6a8ab1d8c223",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 6340,
      y: 2620,
    },
    name: "BattleField",
    id: "3cfb7867-7384-4abd-9146-448374761bde",
    left: "16a6cd70-54d4-4580-827a-e1487aa52272",
    bottom: "66062c7d-de4b-4f3c-930e-0e4576198242",
    top: "758f18c4-ba05-472e-9eda-5e4c54ab3fae",
    edges: [
      "1c0e8d5e-634c-423f-b457-6a8ab1d8c223",
      "e517117d-b30a-4664-a005-aab4315fa490",
      "a36d24b5-254c-455e-af53-be884d970df3",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 6340,
      y: 2820,
    },
    name: "MagicBookField",
    id: "66062c7d-de4b-4f3c-930e-0e4576198242",
    top: "3cfb7867-7384-4abd-9146-448374761bde",
    bottom: "cf403fd8-f50c-4a61-8e32-2e4a4ab9831b",
    edges: [
      "e517117d-b30a-4664-a005-aab4315fa490",
      "6fa80370-6da1-450e-b7c9-7e590edb2069",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 6340,
      y: 3000,
    },
    name: "BattleField",
    id: "cf403fd8-f50c-4a61-8e32-2e4a4ab9831b",
    top: "66062c7d-de4b-4f3c-930e-0e4576198242",
    left: "686ac19e-5c15-45da-af6b-acb80eb1900b",
    bottom: "5c5fcad1-cd43-4b5e-a9c0-f04dff61937e",
    edges: [
      "6fa80370-6da1-450e-b7c9-7e590edb2069",
      "3e57b0c0-02a7-4fda-8a29-87ea71411812",
      "2aa751f3-265d-4b7e-92e3-934e9397a147",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5980,
      y: 3000,
    },
    name: "TreasureField",
    id: "686ac19e-5c15-45da-af6b-acb80eb1900b",
    right: "cf403fd8-f50c-4a61-8e32-2e4a4ab9831b",
    bottom: "2e5a88c5-a631-4bb9-8525-5845c9c6331a",
    edges: [
      "3e57b0c0-02a7-4fda-8a29-87ea71411812",
      "b986224e-dac9-4a86-ae25-9797b71ad67b",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5660,
      y: 3060,
    },
    name: "TreasureField",
    id: "0e52d178-9287-41d5-ad95-e7418511d083",
    top: "28d4ee00-7574-4240-b7a0-5bad83d987c1",
    bottom: "3caabc5c-dd7f-44dc-b0bb-286648b18491",
    edges: [
      "cdae4c0c-0661-4196-ba94-467441ca5eb5",
      "3c277305-e6ca-4062-8a47-0f2e95c4859f",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5660,
      y: 3180,
    },
    name: "BattleField",
    id: "3caabc5c-dd7f-44dc-b0bb-286648b18491",
    right: "56121fad-4809-453b-8a1f-db1f6a2dd6d5",
    top: "0e52d178-9287-41d5-ad95-e7418511d083",
    left: "2fb01b13-efb5-4875-bd5c-bd98010e4249",
    edges: [
      "3109bcf2-2979-48cd-9b62-d9599f83649d",
      "3c277305-e6ca-4062-8a47-0f2e95c4859f",
      "bede3c45-43e8-4a7e-8685-aabe5d430c4a",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5820,
      y: 3180,
    },
    name: "BattleField",
    id: "56121fad-4809-453b-8a1f-db1f6a2dd6d5",
    bottom: "9e967feb-0913-4d4c-9aad-d43dc3928206",
    left: "3caabc5c-dd7f-44dc-b0bb-286648b18491",
    edges: [
      "9008ca82-1026-4292-9895-2d2cd0dbb56e",
      "3109bcf2-2979-48cd-9b62-d9599f83649d",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5980,
      y: 3180,
    },
    name: "BattleField",
    id: "2e5a88c5-a631-4bb9-8525-5845c9c6331a",
    top: "686ac19e-5c15-45da-af6b-acb80eb1900b",
    right: "41ba12e4-440e-4fc6-b598-9f04880da76c",
    bottom: "6bbcdeb5-f435-48a6-afb2-8ede76ca1a73",
    edges: [
      "b986224e-dac9-4a86-ae25-9797b71ad67b",
      "09960be2-32e0-4937-9b76-ce67716cb80c",
      "b6d79be6-dcbf-4527-b50f-e85b98ff8fb5",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 6160,
      y: 3180,
    },
    name: "VillageField",
    id: "41ba12e4-440e-4fc6-b598-9f04880da76c",
    left: "2e5a88c5-a631-4bb9-8525-5845c9c6331a",
    right: "5c5fcad1-cd43-4b5e-a9c0-f04dff61937e",
    edges: [
      "09960be2-32e0-4937-9b76-ce67716cb80c",
      "a4ab1777-5292-4425-93c9-c7fc41a4605f",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 6340,
      y: 3180,
    },
    name: "BattleField",
    id: "5c5fcad1-cd43-4b5e-a9c0-f04dff61937e",
    top: "cf403fd8-f50c-4a61-8e32-2e4a4ab9831b",
    left: "41ba12e4-440e-4fc6-b598-9f04880da76c",
    edges: [
      "2aa751f3-265d-4b7e-92e3-934e9397a147",
      "a4ab1777-5292-4425-93c9-c7fc41a4605f",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5980,
      y: 3380,
    },
    name: "BattleField",
    id: "6bbcdeb5-f435-48a6-afb2-8ede76ca1a73",
    top: "2e5a88c5-a631-4bb9-8525-5845c9c6331a",
    left: "9e967feb-0913-4d4c-9aad-d43dc3928206",
    bottom: "9efe55a8-f455-4d8b-bc71-3ff2f02ab0e4",
    edges: [
      "b6d79be6-dcbf-4527-b50f-e85b98ff8fb5",
      "19afbf46-0960-4716-863c-ad4fe887942f",
      "6f6656a1-122e-4ca4-a25d-30370453be66",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5820,
      y: 3380,
    },
    name: "BattleField",
    id: "9e967feb-0913-4d4c-9aad-d43dc3928206",
    right: "6bbcdeb5-f435-48a6-afb2-8ede76ca1a73",
    top: "56121fad-4809-453b-8a1f-db1f6a2dd6d5",
    bottom: "c6716bef-fcb1-46d5-8b4c-44d98afb5c0b",
    edges: [
      "19afbf46-0960-4716-863c-ad4fe887942f",
      "9008ca82-1026-4292-9895-2d2cd0dbb56e",
      "8e080097-0cbf-4bb1-ab7c-3fedaf9654d2",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5140,
      y: 3180,
    },
    name: "MagicBookField",
    id: "2fb01b13-efb5-4875-bd5c-bd98010e4249",
    right: "3caabc5c-dd7f-44dc-b0bb-286648b18491",
    top: "32e8bf41-28a9-4c3f-8bfb-c23cb0f512df",
    bottom: "c2a2c5d5-b877-4551-9f40-f7d9979df01b",
    edges: [
      "bede3c45-43e8-4a7e-8685-aabe5d430c4a",
      "b129f573-2c02-4067-a75a-6b2c94901db9",
      "b0a4c2a5-aede-4cc1-b45f-a15993902ad5",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5140,
      y: 3600,
    },
    name: "TreasureField",
    id: "c2a2c5d5-b877-4551-9f40-f7d9979df01b",
    right: "ba52d388-e97e-4248-8c12-ce31812e103d",
    top: "2fb01b13-efb5-4875-bd5c-bd98010e4249",
    left: "aa39f3c5-b7c6-4c9d-b829-53f8672652b5",
    bottom: "11207d52-9b6c-4c48-a445-9acab14a2bbc",
    edges: [
      "31b101b1-e779-4bf4-a20f-cd6dcc376593",
      "b0a4c2a5-aede-4cc1-b45f-a15993902ad5",
      "2a5e3cee-005d-4bec-b3c0-49aea9d679f8",
      "b2d35573-ceb3-44ca-ad3d-43fa3f2f88af",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5360,
      y: 3600,
    },
    name: "MagicStoreField",
    id: "ba52d388-e97e-4248-8c12-ce31812e103d",
    right: "1c31f0b3-b2f6-4b72-a95b-f77a0df3cd9d",
    left: "c2a2c5d5-b877-4551-9f40-f7d9979df01b",
    edges: [
      "92515827-b699-428c-894f-ae759a27791a",
      "31b101b1-e779-4bf4-a20f-cd6dcc376593",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5600,
      y: 3600,
    },
    name: "MagicBookField",
    id: "1c31f0b3-b2f6-4b72-a95b-f77a0df3cd9d",
    right: "c6716bef-fcb1-46d5-8b4c-44d98afb5c0b",
    left: "ba52d388-e97e-4248-8c12-ce31812e103d",
    edges: [
      "2fcf2f3f-56af-4b67-9bd6-12a59f74f1ba",
      "92515827-b699-428c-894f-ae759a27791a",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5820,
      y: 3600,
    },
    name: "BattleField",
    id: "c6716bef-fcb1-46d5-8b4c-44d98afb5c0b",
    top: "9e967feb-0913-4d4c-9aad-d43dc3928206",
    left: "1c31f0b3-b2f6-4b72-a95b-f77a0df3cd9d",
    edges: [
      "8e080097-0cbf-4bb1-ab7c-3fedaf9654d2",
      "2fcf2f3f-56af-4b67-9bd6-12a59f74f1ba",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4960,
      y: 3600,
    },
    name: "BattleField",
    id: "aa39f3c5-b7c6-4c9d-b829-53f8672652b5",
    left: "93274de5-a482-4d98-9bad-ef60f152ab65",
    right: "c2a2c5d5-b877-4551-9f40-f7d9979df01b",
    edges: [
      "ac8519f6-8fa2-4ab2-bce1-8ee4817a3375",
      "2a5e3cee-005d-4bec-b3c0-49aea9d679f8",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4800,
      y: 3600,
    },
    name: "VillageField",
    id: "93274de5-a482-4d98-9bad-ef60f152ab65",
    bottom: "5c309894-c6c1-4d34-9415-1d9940c69a35",
    right: "aa39f3c5-b7c6-4c9d-b829-53f8672652b5",
    edges: [
      "81b0789f-c7c5-4b76-98a8-2a31d0c57e59",
      "ac8519f6-8fa2-4ab2-bce1-8ee4817a3375",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4800,
      y: 3740,
    },
    name: "BattleField",
    id: "5c309894-c6c1-4d34-9415-1d9940c69a35",
    left: "4f5f298a-7b8f-495a-9544-34dbe251a0bd",
    right: "11207d52-9b6c-4c48-a445-9acab14a2bbc",
    top: "93274de5-a482-4d98-9bad-ef60f152ab65",
    edges: [
      "86865bda-47d4-422b-959d-f3078934118f",
      "ba02e43f-0414-4511-a35c-f45485a9bfd8",
      "81b0789f-c7c5-4b76-98a8-2a31d0c57e59",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5140,
      y: 3740,
    },
    name: "BattleField",
    id: "11207d52-9b6c-4c48-a445-9acab14a2bbc",
    left: "5c309894-c6c1-4d34-9415-1d9940c69a35",
    top: "c2a2c5d5-b877-4551-9f40-f7d9979df01b",
    bottom: "4ac3e32f-d6f4-4f72-8945-c80aed3a737f",
    edges: [
      "ba02e43f-0414-4511-a35c-f45485a9bfd8",
      "b2d35573-ceb3-44ca-ad3d-43fa3f2f88af",
      "005f6cae-9196-4195-895a-a8e744b2f9f5",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4280,
      y: 2960,
    },
    name: "VillageField",
    id: "dbbdf9ab-fdd3-497f-b7d2-cdaddf390849",
    left: "6336deca-2bf1-4afe-90f4-6d371195be4c",
    right: "3419f4b7-3867-43ab-b404-3eac0de25e68",
    edges: [
      "602d5a33-402f-4643-9980-7d43c70e2744",
      "000ca383-3f1e-4f85-bb85-6d5809d0619b",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4420,
      y: 2960,
    },
    name: "TreasureField",
    id: "3419f4b7-3867-43ab-b404-3eac0de25e68",
    left: "dbbdf9ab-fdd3-497f-b7d2-cdaddf390849",
    bottom: "bab46de8-04f5-4428-8813-52bbfc45a23b",
    right: "a5269d2e-41ab-4802-b93c-5f2001ddd8ad",
    edges: [
      "000ca383-3f1e-4f85-bb85-6d5809d0619b",
      "778e8e3b-0690-450a-814f-f23aa9b34b15",
      "8c83d3c7-0f37-4e6c-bb3b-380961b15c03",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4680,
      y: 2980,
    },
    name: "CaveField",
    id: "8da802ac-6747-4d09-87bf-f16008798783",
    left: "a5269d2e-41ab-4802-b93c-5f2001ddd8ad",
    edges: ["3504382b-4676-43ff-a057-d31f4769cac1"],
    area: "Asia",
  },
  {
    position: {
      x: 4560,
      y: 3060,
    },
    name: "BattleField",
    id: "a5269d2e-41ab-4802-b93c-5f2001ddd8ad",
    left: "3419f4b7-3867-43ab-b404-3eac0de25e68",
    right: "8da802ac-6747-4d09-87bf-f16008798783",
    edges: [
      "8c83d3c7-0f37-4e6c-bb3b-380961b15c03",
      "3504382b-4676-43ff-a057-d31f4769cac1",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4420,
      y: 3140,
    },
    name: "BattleField",
    id: "bab46de8-04f5-4428-8813-52bbfc45a23b",
    left: "174ed2c6-a407-4429-ac3c-a2927d3ae8df",
    top: "3419f4b7-3867-43ab-b404-3eac0de25e68",
    bottom: "9053c5fe-0a37-4ccf-abc7-22dff8c60d81",
    edges: [
      "82e2edb1-b9b9-4210-a478-f171d622cb1f",
      "778e8e3b-0690-450a-814f-f23aa9b34b15",
      "51b06dee-bad7-4e65-b4b1-d2482673cdeb",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4140,
      y: 3140,
    },
    name: "BattleField",
    id: "174ed2c6-a407-4429-ac3c-a2927d3ae8df",
    top: "6336deca-2bf1-4afe-90f4-6d371195be4c",
    right: "bab46de8-04f5-4428-8813-52bbfc45a23b",
    edges: [
      "d8914b10-b45a-4170-8d83-ec139387f0e9",
      "82e2edb1-b9b9-4210-a478-f171d622cb1f",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4420,
      y: 3740,
    },
    name: "BattleField",
    id: "9053c5fe-0a37-4ccf-abc7-22dff8c60d81",
    top: "bab46de8-04f5-4428-8813-52bbfc45a23b",
    right: "4f5f298a-7b8f-495a-9544-34dbe251a0bd",
    bottom: "992862b4-dd61-468e-b319-03790caede66",
    left: "8e1542c3-f4c6-4100-add8-b227c7d2de56",
    edges: [
      "51b06dee-bad7-4e65-b4b1-d2482673cdeb",
      "e4afb149-93b9-4f93-852b-5539c81ad33f",
      "9f111ebb-d55a-4435-8f29-fa12eb5a3cb7",
      "55b34a4a-a9ad-4149-bb85-945c228bbd80",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4620,
      y: 3740,
    },
    name: "TreasureField",
    id: "4f5f298a-7b8f-495a-9544-34dbe251a0bd",
    left: "9053c5fe-0a37-4ccf-abc7-22dff8c60d81",
    right: "5c309894-c6c1-4d34-9415-1d9940c69a35",
    edges: [
      "e4afb149-93b9-4f93-852b-5539c81ad33f",
      "86865bda-47d4-422b-959d-f3078934118f",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 5140,
      y: 3940,
    },
    name: "BattleField",
    id: "4ac3e32f-d6f4-4f72-8945-c80aed3a737f",
    left: "527ee1e8-96cb-4411-94c4-9c47d0cca600",
    top: "11207d52-9b6c-4c48-a445-9acab14a2bbc",
    edges: [
      "a99a130b-4e2c-4449-b44e-a4fcd6f78d6f",
      "005f6cae-9196-4195-895a-a8e744b2f9f5",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4960,
      y: 3940,
    },
    name: "MagicBookField",
    id: "527ee1e8-96cb-4411-94c4-9c47d0cca600",
    left: "f7a1b803-c52c-4a94-982b-e2cda905d12b",
    right: "4ac3e32f-d6f4-4f72-8945-c80aed3a737f",
    edges: [
      "6d7a6022-f87b-4e3e-8c2d-88936717d760",
      "a99a130b-4e2c-4449-b44e-a4fcd6f78d6f",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4800,
      y: 3940,
    },
    name: "BattleField",
    id: "f7a1b803-c52c-4a94-982b-e2cda905d12b",
    left: "992e307c-3cdd-4c57-ab80-5f66c589e099",
    right: "527ee1e8-96cb-4411-94c4-9c47d0cca600",
    edges: [
      "75b9d7c0-fe92-4271-8dd6-a0e2791c66e7",
      "6d7a6022-f87b-4e3e-8c2d-88936717d760",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4640,
      y: 3940,
    },
    name: "BattleField",
    id: "992e307c-3cdd-4c57-ab80-5f66c589e099",
    left: "992862b4-dd61-468e-b319-03790caede66",
    bottom: "7fd06120-c815-4bd6-86e0-b45404178445",
    right: "f7a1b803-c52c-4a94-982b-e2cda905d12b",
    edges: [
      "b784118d-b3c5-4f31-84df-dad4a7965aba",
      "f2c3cdeb-d6cd-461e-ba00-5d4a979721d8",
      "75b9d7c0-fe92-4271-8dd6-a0e2791c66e7",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4400,
      y: 3940,
    },
    name: "TreasureField",
    id: "992862b4-dd61-468e-b319-03790caede66",
    top: "9053c5fe-0a37-4ccf-abc7-22dff8c60d81",
    bottom: "285ff1dd-8a7e-40bb-b232-c302d751be9a",
    right: "992e307c-3cdd-4c57-ab80-5f66c589e099",
    edges: [
      "9f111ebb-d55a-4435-8f29-fa12eb5a3cb7",
      "3c368652-f290-4536-8e0c-8038d407be60",
      "b784118d-b3c5-4f31-84df-dad4a7965aba",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4400,
      y: 4100,
    },
    name: "BattleField",
    id: "285ff1dd-8a7e-40bb-b232-c302d751be9a",
    top: "992862b4-dd61-468e-b319-03790caede66",
    right: "dfdf7bb9-4051-4c64-b36f-023b24636585",
    edges: [
      "3c368652-f290-4536-8e0c-8038d407be60",
      "28b2b8d5-8834-4136-a7c0-80f40afdaf21",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4520,
      y: 4100,
    },
    name: "VillageField",
    id: "dfdf7bb9-4051-4c64-b36f-023b24636585",
    left: "285ff1dd-8a7e-40bb-b232-c302d751be9a",
    right: "7fd06120-c815-4bd6-86e0-b45404178445",
    edges: [
      "28b2b8d5-8834-4136-a7c0-80f40afdaf21",
      "d9b12513-23e0-4830-8a16-7411294f6a1c",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4640,
      y: 4100,
    },
    name: "BattleField",
    id: "7fd06120-c815-4bd6-86e0-b45404178445",
    left: "dfdf7bb9-4051-4c64-b36f-023b24636585",
    top: "992e307c-3cdd-4c57-ab80-5f66c589e099",
    edges: [
      "d9b12513-23e0-4830-8a16-7411294f6a1c",
      "f2c3cdeb-d6cd-461e-ba00-5d4a979721d8",
    ],
    area: "Asia",
  },
  {
    position: {
      x: 4980,
      y: 2620,
    },
    name: "WorldTransferField",
    id: "574dfcdf-25b8-4f1c-ad51-9217a1c888a7",
    left: "9bd4ebd7-09ba-40ad-9b96-82f955d817de",
    edges: ["18210fd9-61fc-47cc-8cb6-6610c7c6ca4c"],
    area: "Asia",
  },
  {
    id: "aafeda89-3a98-4d54-929c-f295dbf47dee",
    name: "BattleField",
    position: {
      x: 4480,
      y: 2260,
    },
    edges: [
      "5c124733-9dba-4d98-b8c5-e17ac2df28b7",
      "20eaa939-e3ba-413d-b5b6-6cb1d66411cc",
      "708b88ed-da0b-4859-a010-d92a545a9d3c",
    ],
    right: "99264c2f-3462-420d-b85c-3cbe79ce6d51",
    left: "5abbabec-0e8d-4d11-835c-1095ded5f143",
    bottom: "7e02e76b-8750-4d8f-8a4b-7a154726be9a",
    area: "Asia",
  },
];
const europeVertices: Vertex[] = [
  {
    position: {
      x: 860,
      y: 140,
    },
    name: "BattleField",
    id: "209c7458-6352-4402-813a-94c83c86f148",
    bottom: "01f09c6a-5a2d-4a3f-9ab5-3afb21489ce5",
    left: "34c8cd25-57f1-44ac-a407-f185f1cfe6c9",
    edges: [
      "26522ab0-719c-4def-ad30-9efc6e2d3555",
      "8a60cf6d-d236-4676-85d9-97362548b2fb",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 880,
      y: 340,
    },
    name: "BattleField",
    id: "01f09c6a-5a2d-4a3f-9ab5-3afb21489ce5",
    top: "209c7458-6352-4402-813a-94c83c86f148",
    bottom: "d3bff27b-bf42-48fb-b540-503010b5adb2",
    left: "aa84da87-c53e-4c92-8e16-2076f867ce90",
    right: "345b4115-59c1-4784-a26d-36612e941306",
    edges: [
      "26522ab0-719c-4def-ad30-9efc6e2d3555",
      "1a1376c6-7ff7-468a-a83d-7aad4018ba83",
      "e47da2b5-c818-4c1d-8e24-555e8a5a0c2b",
      "ef88d084-5f08-4c5f-9123-13424fabfa53",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 440,
      y: 340,
    },
    name: "CollectMoneyField",
    id: "aa84da87-c53e-4c92-8e16-2076f867ce90",
    right: "01f09c6a-5a2d-4a3f-9ab5-3afb21489ce5",
    bottom: "854a0203-0015-4265-ba94-c09271262856",
    edges: [
      "e47da2b5-c818-4c1d-8e24-555e8a5a0c2b",
      "8cad8240-0089-437a-85d4-b279f700d3db",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 880,
      y: 520,
    },
    name: "TreasureField",
    id: "d3bff27b-bf42-48fb-b540-503010b5adb2",
    top: "01f09c6a-5a2d-4a3f-9ab5-3afb21489ce5",
    bottom: "09b06f97-6f64-488e-8ace-f011f92116c8",
    edges: [
      "1a1376c6-7ff7-468a-a83d-7aad4018ba83",
      "f51e4b52-ebb9-48fa-ac23-9647e4278528",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 880,
      y: 680,
    },
    name: "BattleField",
    id: "09b06f97-6f64-488e-8ace-f011f92116c8",
    top: "d3bff27b-bf42-48fb-b540-503010b5adb2",
    left: "ab2686f1-3e02-45c1-ab19-c6e00c1e9053",
    edges: [
      "f51e4b52-ebb9-48fa-ac23-9647e4278528",
      "76540d8c-e85d-47ef-a47e-b8fca48c4d76",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 640,
      y: 680,
    },
    name: "BattleField",
    id: "ab2686f1-3e02-45c1-ab19-c6e00c1e9053",
    right: "09b06f97-6f64-488e-8ace-f011f92116c8",
    bottom: "28c5bb85-afed-4b3e-94b4-6e1d40220545",
    edges: [
      "76540d8c-e85d-47ef-a47e-b8fca48c4d76",
      "f73c1a1c-b130-4c90-99aa-a4d75b29a6aa",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 440,
      y: 580,
    },
    name: "BattleField",
    id: "854a0203-0015-4265-ba94-c09271262856",
    top: "aa84da87-c53e-4c92-8e16-2076f867ce90",
    bottom: "4e8f733b-cdf7-4b67-b2e4-bcf24b6a7f34",
    edges: [
      "8cad8240-0089-437a-85d4-b279f700d3db",
      "f4f7580d-67e6-48ca-b761-3fd48efaf99a",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 440,
      y: 800,
    },
    name: "MagicBookField",
    id: "4e8f733b-cdf7-4b67-b2e4-bcf24b6a7f34",
    top: "854a0203-0015-4265-ba94-c09271262856",
    right: "28c5bb85-afed-4b3e-94b4-6e1d40220545",
    bottom: "9b9cf06e-1ab1-4983-852f-6bcda421291f",
    edges: [
      "f4f7580d-67e6-48ca-b761-3fd48efaf99a",
      "2a1ac21a-774d-4eb7-8052-f541adcb758c",
      "6a88975b-3875-47a1-b598-202a497844ba",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 600,
      y: 800,
    },
    name: "BattleField",
    id: "28c5bb85-afed-4b3e-94b4-6e1d40220545",
    left: "4e8f733b-cdf7-4b67-b2e4-bcf24b6a7f34",
    top: "ab2686f1-3e02-45c1-ab19-c6e00c1e9053",
    right: "b851246e-78ea-47a3-b8ac-5aeba787cdeb",
    edges: [
      "2a1ac21a-774d-4eb7-8052-f541adcb758c",
      "f73c1a1c-b130-4c90-99aa-a4d75b29a6aa",
      "907484d8-8600-4eca-be4a-e6ac2cd2885e",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 780,
      y: 800,
    },
    name: "BattleField",
    id: "b851246e-78ea-47a3-b8ac-5aeba787cdeb",
    right: "97ce3959-09de-4ffe-a298-37e4732e5269",
    left: "28c5bb85-afed-4b3e-94b4-6e1d40220545",
    edges: [
      "907484d8-8600-4eca-be4a-e6ac2cd2885e",
      "3a4b1770-2923-4aed-b2b5-ad5439113148",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1000,
      y: 800,
    },
    name: "VillageField",
    id: "97ce3959-09de-4ffe-a298-37e4732e5269",
    left: "b851246e-78ea-47a3-b8ac-5aeba787cdeb",
    edges: ["3a4b1770-2923-4aed-b2b5-ad5439113148"],
    area: "Europe",
  },
  {
    position: {
      x: 440,
      y: 1140,
    },
    name: "BattleField",
    id: "9b9cf06e-1ab1-4983-852f-6bcda421291f",
    top: "4e8f733b-cdf7-4b67-b2e4-bcf24b6a7f34",
    right: "28f37596-1abd-440b-a398-5784dff127f3",
    edges: [
      "6a88975b-3875-47a1-b598-202a497844ba",
      "83c16615-50a8-4569-a1a6-54d69633dad1",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 620,
      y: 1140,
    },
    name: "TreasureField",
    id: "28f37596-1abd-440b-a398-5784dff127f3",
    left: "9b9cf06e-1ab1-4983-852f-6bcda421291f",
    right: "196cdd4c-f5d3-4945-af4d-292d2f6045b2",
    bottom: "e0312520-47b3-4ce7-a13e-f6a6c4574adf",
    edges: [
      "83c16615-50a8-4569-a1a6-54d69633dad1",
      "196da66b-4cfb-448f-b2ac-2a924ebcabaa",
      "ab91ad1f-a7d4-4254-982e-c340a0927917",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 800,
      y: 1140,
    },
    name: "BattleField",
    id: "196cdd4c-f5d3-4945-af4d-292d2f6045b2",
    left: "28f37596-1abd-440b-a398-5784dff127f3",
    bottom: "b48e440d-aff0-436f-bb3e-669232a54165",
    right: "a728f48e-5334-45b1-96c9-26528956693e",
    edges: [
      "196da66b-4cfb-448f-b2ac-2a924ebcabaa",
      "4826cdd1-ddaa-4324-adbc-e58e331966e1",
      "3b62f753-9c54-4b82-9c07-f55ddeaffc64",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1060,
      y: 1140,
    },
    name: "BattleField",
    id: "a728f48e-5334-45b1-96c9-26528956693e",
    left: "196cdd4c-f5d3-4945-af4d-292d2f6045b2",
    right: "a02d45a0-23f1-467d-ae2e-d49983b03017",
    edges: [
      "3b62f753-9c54-4b82-9c07-f55ddeaffc64",
      "22c11943-8c76-42d8-9012-5fc374f944b9",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 620,
      y: 1280,
    },
    name: "BattleField",
    id: "e0312520-47b3-4ce7-a13e-f6a6c4574adf",
    top: "28f37596-1abd-440b-a398-5784dff127f3",
    bottom: "bddcc986-fd56-4de9-8f1a-bc1185d45138",
    edges: [
      "ab91ad1f-a7d4-4254-982e-c340a0927917",
      "a3b6aed3-a458-4ced-99af-5adca4d3f4b1",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 620,
      y: 1420,
    },
    name: "BattleField",
    id: "bddcc986-fd56-4de9-8f1a-bc1185d45138",
    top: "e0312520-47b3-4ce7-a13e-f6a6c4574adf",
    right: "b48e440d-aff0-436f-bb3e-669232a54165",
    edges: [
      "a3b6aed3-a458-4ced-99af-5adca4d3f4b1",
      "a00c899f-7ff4-4bf4-8d37-12f422c5d5db",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 800,
      y: 1420,
    },
    name: "BattleField",
    id: "b48e440d-aff0-436f-bb3e-669232a54165",
    top: "196cdd4c-f5d3-4945-af4d-292d2f6045b2",
    left: "bddcc986-fd56-4de9-8f1a-bc1185d45138",
    right: "f3fd7be7-9fc5-4604-bbed-0e0dd3947acd",
    bottom: "912c8abc-c245-4401-b4b1-ddfa882a9891",
    edges: [
      "4826cdd1-ddaa-4324-adbc-e58e331966e1",
      "a00c899f-7ff4-4bf4-8d37-12f422c5d5db",
      "93231771-2f9a-435a-af23-c2a8bdc7b9d2",
      "112d6f45-b5fb-42cc-8005-306361c3086c",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1000,
      y: 1420,
    },
    name: "VillageField",
    id: "f3fd7be7-9fc5-4604-bbed-0e0dd3947acd",
    left: "b48e440d-aff0-436f-bb3e-669232a54165",
    right: "c504f16d-bc4c-4746-8ad9-d3f73085e508",
    edges: [
      "93231771-2f9a-435a-af23-c2a8bdc7b9d2",
      "22446bda-05a5-45e0-8b4c-b0e0121ca26d",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1200,
      y: 1420,
    },
    name: "TreasureField",
    id: "c504f16d-bc4c-4746-8ad9-d3f73085e508",
    left: "f3fd7be7-9fc5-4604-bbed-0e0dd3947acd",
    bottom: "fea85e6d-98e6-4426-969c-7515e31bd416",
    edges: [
      "22446bda-05a5-45e0-8b4c-b0e0121ca26d",
      "d946961d-1493-424b-b0e7-77bb3dc63b0b",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 800,
      y: 1580,
    },
    name: "RedTreasureField",
    id: "912c8abc-c245-4401-b4b1-ddfa882a9891",
    top: "b48e440d-aff0-436f-bb3e-669232a54165",
    right: "fea85e6d-98e6-4426-969c-7515e31bd416",
    edges: [
      "1f659a7a-e00e-4d05-8b61-61cd15f0cecc",
      "112d6f45-b5fb-42cc-8005-306361c3086c",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1200,
      y: 1580,
    },
    name: "BattleField",
    id: "fea85e6d-98e6-4426-969c-7515e31bd416",
    left: "912c8abc-c245-4401-b4b1-ddfa882a9891",
    top: "c504f16d-bc4c-4746-8ad9-d3f73085e508",
    right: "d465b4cd-1158-4af3-9bfd-7c722a297b45",
    edges: [
      "1f659a7a-e00e-4d05-8b61-61cd15f0cecc",
      "d946961d-1493-424b-b0e7-77bb3dc63b0b",
      "4f727d18-7c1e-4024-a1ea-daf710d10dc0",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1260,
      y: 1140,
    },
    name: "BattleField",
    id: "a02d45a0-23f1-467d-ae2e-d49983b03017",
    left: "a728f48e-5334-45b1-96c9-26528956693e",
    right: "b6cede47-5721-42d7-8e36-84124cf74471",
    top: "2f8744a9-4acc-40fe-88ee-a5536b881155",
    edges: [
      "22c11943-8c76-42d8-9012-5fc374f944b9",
      "fa1c224d-f2ce-49b2-a9c3-4e7b7524b826",
      "ca605d0a-d125-461f-9858-e1e0b881b290",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1260,
      y: 960,
    },
    name: "VillageField",
    id: "2f8744a9-4acc-40fe-88ee-a5536b881155",
    bottom: "a02d45a0-23f1-467d-ae2e-d49983b03017",
    edges: ["ca605d0a-d125-461f-9858-e1e0b881b290"],
    area: "Europe",
  },
  {
    position: {
      x: 1500,
      y: 1140,
    },
    name: "MagicBookField",
    id: "b6cede47-5721-42d7-8e36-84124cf74471",
    left: "a02d45a0-23f1-467d-ae2e-d49983b03017",
    right: "9c4c6c3e-61b1-4d59-8eda-95069de694d1",
    bottom: "063e1eae-4be1-4c40-995b-7f1ba1680ae6",
    top: "c2857bb7-35ee-4bef-87de-cb9292a21f0c",
    edges: [
      "fa1c224d-f2ce-49b2-a9c3-4e7b7524b826",
      "80faaa8b-d2ee-4c4d-bc3b-cb146fd81329",
      "7b916f66-788b-43cc-93be-d6f3d06a922f",
      "04bbb3f3-bc26-43a2-81ac-f6fab5ba954d",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1500,
      y: 1320,
    },
    name: "BattleField",
    id: "063e1eae-4be1-4c40-995b-7f1ba1680ae6",
    top: "b6cede47-5721-42d7-8e36-84124cf74471",
    right: "8f0cf0ff-55fa-4e1c-9b17-cf7e5080be99",
    edges: [
      "7b916f66-788b-43cc-93be-d6f3d06a922f",
      "2283f8f1-58a3-4286-9369-61c2e3376202",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1720,
      y: 1140,
    },
    name: "BattleField",
    id: "9c4c6c3e-61b1-4d59-8eda-95069de694d1",
    left: "b6cede47-5721-42d7-8e36-84124cf74471",
    right: "ba424a26-dceb-4989-bc59-ca60c07ac6f4",
    edges: [
      "80faaa8b-d2ee-4c4d-bc3b-cb146fd81329",
      "0def50c6-2eff-4838-a150-2dbe53af0878",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1960,
      y: 1320,
    },
    name: "BattleField",
    id: "8f0cf0ff-55fa-4e1c-9b17-cf7e5080be99",
    top: "ba424a26-dceb-4989-bc59-ca60c07ac6f4",
    left: "063e1eae-4be1-4c40-995b-7f1ba1680ae6",
    right: "3bfb01e9-a672-4552-91d2-598acd166999",
    edges: [
      "f4875da7-036c-4fa8-86bc-c13cc0e7f216",
      "2283f8f1-58a3-4286-9369-61c2e3376202",
      "0ff92e12-2ca6-4251-99ed-c534c8b0219d",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1960,
      y: 1140,
    },
    name: "GroceryStoreField",
    id: "ba424a26-dceb-4989-bc59-ca60c07ac6f4",
    left: "9c4c6c3e-61b1-4d59-8eda-95069de694d1",
    bottom: "8f0cf0ff-55fa-4e1c-9b17-cf7e5080be99",
    edges: [
      "0def50c6-2eff-4838-a150-2dbe53af0878",
      "f4875da7-036c-4fa8-86bc-c13cc0e7f216",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1260,
      y: 340,
    },
    name: "BattleField",
    id: "345b4115-59c1-4784-a26d-36612e941306",
    left: "01f09c6a-5a2d-4a3f-9ab5-3afb21489ce5",
    right: "9f51bd32-401c-4443-9d2f-a9b6da124f6a",
    bottom: "0280bdb4-713a-411d-94b3-904894c96d87",
    edges: [
      "ef88d084-5f08-4c5f-9123-13424fabfa53",
      "d6ff32a3-2e4f-4086-966e-2d2496ce83e1",
      "c3a14126-2ec9-43b4-9827-0399c342d5d4",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1260,
      y: 520,
    },
    name: "BattleField",
    id: "0280bdb4-713a-411d-94b3-904894c96d87",
    top: "345b4115-59c1-4784-a26d-36612e941306",
    right: "86911025-2409-48a8-bd4b-02c832ec32fe",
    edges: [
      "c3a14126-2ec9-43b4-9827-0399c342d5d4",
      "20f32e1a-6946-43fd-af9e-a11b817f89cd",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1460,
      y: 520,
    },
    name: "TreasureField",
    id: "86911025-2409-48a8-bd4b-02c832ec32fe",
    left: "0280bdb4-713a-411d-94b3-904894c96d87",
    right: "cbfbced3-e768-4452-ae48-8b3c1cb3e896",
    bottom: "4a68df29-62d8-46ee-892f-e7a5633caba7",
    edges: [
      "20f32e1a-6946-43fd-af9e-a11b817f89cd",
      "c8daeaf7-c65b-410e-873a-e370241cebf6",
      "7da2daee-c1cf-434b-8507-7bce171cf4db",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1660,
      y: 340,
    },
    name: "BattleField",
    id: "9f51bd32-401c-4443-9d2f-a9b6da124f6a",
    left: "345b4115-59c1-4784-a26d-36612e941306",
    bottom: "cbfbced3-e768-4452-ae48-8b3c1cb3e896",
    right: "e67c9235-c555-4a71-81f7-f2582b1f1122",
    edges: [
      "d6ff32a3-2e4f-4086-966e-2d2496ce83e1",
      "6d988e3a-e0fc-41bc-8789-33df27d11c01",
      "c0f611ef-8901-41e6-8bb9-f8b0f1581651",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1660,
      y: 520,
    },
    name: "BattleField",
    id: "cbfbced3-e768-4452-ae48-8b3c1cb3e896",
    top: "9f51bd32-401c-4443-9d2f-a9b6da124f6a",
    left: "86911025-2409-48a8-bd4b-02c832ec32fe",
    edges: [
      "6d988e3a-e0fc-41bc-8789-33df27d11c01",
      "c8daeaf7-c65b-410e-873a-e370241cebf6",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1460,
      y: 680,
    },
    name: "BattleField",
    id: "4a68df29-62d8-46ee-892f-e7a5633caba7",
    top: "86911025-2409-48a8-bd4b-02c832ec32fe",
    right: "4493ff09-e3a6-4a96-8dc4-041e08e3f678",
    bottom: "dd8e70d2-6115-476a-aa29-5bfa44c62683",
    edges: [
      "7da2daee-c1cf-434b-8507-7bce171cf4db",
      "8d9504ee-3e36-41b6-aa39-4975cd918dc0",
      "fac484ca-d5f1-4952-8163-5a62fdc3d438",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1640,
      y: 680,
    },
    name: "MagicBookField",
    id: "4493ff09-e3a6-4a96-8dc4-041e08e3f678",
    left: "4a68df29-62d8-46ee-892f-e7a5633caba7",
    right: "64f49973-dc31-4168-b69f-e3657788289f",
    edges: [
      "8d9504ee-3e36-41b6-aa39-4975cd918dc0",
      "17ca131e-29cd-4d74-bbf6-e69e86719efd",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1840,
      y: 680,
    },
    name: "BattleField",
    id: "64f49973-dc31-4168-b69f-e3657788289f",
    left: "4493ff09-e3a6-4a96-8dc4-041e08e3f678",
    bottom: "7a91e691-32c1-442f-b7dc-9d180b454f15",
    edges: [
      "17ca131e-29cd-4d74-bbf6-e69e86719efd",
      "74123fc9-2d63-486a-a3e1-2272f38ab0d7",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1480,
      y: 840,
    },
    name: "TreasureField",
    id: "dd8e70d2-6115-476a-aa29-5bfa44c62683",
    right: "7a91e691-32c1-442f-b7dc-9d180b454f15",
    top: "4a68df29-62d8-46ee-892f-e7a5633caba7",
    bottom: "c2857bb7-35ee-4bef-87de-cb9292a21f0c",
    edges: [
      "1e15bb6f-cb17-4352-a021-f98c467ef7d4",
      "fac484ca-d5f1-4952-8163-5a62fdc3d438",
      "8f40ea1e-5d81-422e-b9dc-cc3e4f6d65e6",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1800,
      y: 840,
    },
    name: "BattleField",
    id: "7a91e691-32c1-442f-b7dc-9d180b454f15",
    left: "dd8e70d2-6115-476a-aa29-5bfa44c62683",
    top: "64f49973-dc31-4168-b69f-e3657788289f",
    right: "26eee807-5a9d-41e9-b6eb-1d8e0d60b652",
    bottom: "f6ce8ee5-05c9-4739-87d4-9e44a955ef3b",
    edges: [
      "1e15bb6f-cb17-4352-a021-f98c467ef7d4",
      "74123fc9-2d63-486a-a3e1-2272f38ab0d7",
      "a35b0137-0693-4ca3-8b45-d5a2f456b3df",
      "38f19d69-491e-4793-8b4c-ba1581c09eca",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2000,
      y: 840,
    },
    name: "VillageField",
    id: "26eee807-5a9d-41e9-b6eb-1d8e0d60b652",
    left: "7a91e691-32c1-442f-b7dc-9d180b454f15",
    edges: ["a35b0137-0693-4ca3-8b45-d5a2f456b3df"],
    area: "Europe",
  },
  {
    position: {
      x: 1860,
      y: 980,
    },
    name: "BattleField",
    id: "f6ce8ee5-05c9-4739-87d4-9e44a955ef3b",
    left: "b6787adb-9696-4936-afeb-72f18494ae65",
    top: "7a91e691-32c1-442f-b7dc-9d180b454f15",
    edges: [
      "4e555de9-49ab-45af-9530-2dda62b66857",
      "38f19d69-491e-4793-8b4c-ba1581c09eca",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1680,
      y: 980,
    },
    name: "VillageField",
    id: "b6787adb-9696-4936-afeb-72f18494ae65",
    right: "f6ce8ee5-05c9-4739-87d4-9e44a955ef3b",
    edges: ["4e555de9-49ab-45af-9530-2dda62b66857"],
    area: "Europe",
  },
  {
    position: {
      x: 1500,
      y: 980,
    },
    name: "BattleField",
    id: "c2857bb7-35ee-4bef-87de-cb9292a21f0c",
    top: "dd8e70d2-6115-476a-aa29-5bfa44c62683",
    bottom: "b6cede47-5721-42d7-8e36-84124cf74471",
    edges: [
      "8f40ea1e-5d81-422e-b9dc-cc3e4f6d65e6",
      "04bbb3f3-bc26-43a2-81ac-f6fab5ba954d",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2120,
      y: 340,
    },
    name: "CollectMoneyField",
    id: "e67c9235-c555-4a71-81f7-f2582b1f1122",
    left: "9f51bd32-401c-4443-9d2f-a9b6da124f6a",
    right: "672d1e13-48e3-41ce-ab40-58591ff52ea0",
    edges: [
      "c0f611ef-8901-41e6-8bb9-f8b0f1581651",
      "15884d5b-fb54-44bb-80de-3c1d38619b19",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2420,
      y: 340,
    },
    name: "BattleField",
    id: "672d1e13-48e3-41ce-ab40-58591ff52ea0",
    left: "e67c9235-c555-4a71-81f7-f2582b1f1122",
    right: "4d7c0e69-8d50-43bd-8e53-52523b8d7c78",
    edges: [
      "15884d5b-fb54-44bb-80de-3c1d38619b19",
      "0dd996b7-1974-4cb9-82ec-dde0f2966c32",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2260,
      y: 1320,
    },
    name: "TreasureField",
    id: "3bfb01e9-a672-4552-91d2-598acd166999",
    left: "8f0cf0ff-55fa-4e1c-9b17-cf7e5080be99",
    top: "861e2073-a71d-4af6-a11a-68645e626775",
    bottom: "15b7a6eb-5766-4587-93e3-feee2e270362",
    right: "41dcc5e4-7b29-493b-a840-11c7f23c6278",
    edges: [
      "0ff92e12-2ca6-4251-99ed-c534c8b0219d",
      "ca6224fa-1ace-4caa-995e-eb9ce250a93f",
      "91d88950-fc4c-40ed-a56f-947f69411eb6",
      "67c9246c-2e0a-401a-9f39-2359b52df47c",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2340,
      y: 1060,
    },
    name: "VillageField",
    id: "861e2073-a71d-4af6-a11a-68645e626775",
    bottom: "3bfb01e9-a672-4552-91d2-598acd166999",
    left: "47d16a8e-2a10-420e-9e20-fe2ef37c8ca0",
    edges: [
      "ca6224fa-1ace-4caa-995e-eb9ce250a93f",
      "7d2994be-3509-46b1-b64a-2a642a30e0e6",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2100,
      y: 1060,
    },
    name: "BattleField",
    id: "47d16a8e-2a10-420e-9e20-fe2ef37c8ca0",
    right: "861e2073-a71d-4af6-a11a-68645e626775",
    top: "9a2b2852-378f-4e08-9b3c-54a9e9b00661",
    edges: [
      "7d2994be-3509-46b1-b64a-2a642a30e0e6",
      "b79576f1-e186-45cd-955c-27bcd1298fa8",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2180,
      y: 840,
    },
    name: "CaveField",
    id: "9a2b2852-378f-4e08-9b3c-54a9e9b00661",
    bottom: "47d16a8e-2a10-420e-9e20-fe2ef37c8ca0",
    edges: ["b79576f1-e186-45cd-955c-27bcd1298fa8"],
    area: "Europe",
  },
  {
    position: {
      x: 2700,
      y: 340,
    },
    name: "CollectMoneyField",
    id: "4d7c0e69-8d50-43bd-8e53-52523b8d7c78",
    left: "672d1e13-48e3-41ce-ab40-58591ff52ea0",
    bottom: "00205110-18fd-4eaa-b79a-047f0254cfba",
    edges: [
      "0dd996b7-1974-4cb9-82ec-dde0f2966c32",
      "28adf3f8-6099-465c-9c61-bc3d3b0edb77",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2740,
      y: 520,
    },
    name: "BattleField",
    id: "00205110-18fd-4eaa-b79a-047f0254cfba",
    top: "4d7c0e69-8d50-43bd-8e53-52523b8d7c78",
    bottom: "7bdd10b3-07f4-4253-8f97-cca5c550f720",
    edges: [
      "28adf3f8-6099-465c-9c61-bc3d3b0edb77",
      "38c6799c-d965-4ab5-8fa3-21210290eb70",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2680,
      y: 720,
    },
    name: "BattleField",
    id: "7bdd10b3-07f4-4253-8f97-cca5c550f720",
    top: "00205110-18fd-4eaa-b79a-047f0254cfba",
    bottom: "3be1159a-ddd0-49f6-9700-b35c9ec25104",
    edges: [
      "38c6799c-d965-4ab5-8fa3-21210290eb70",
      "2729757b-45c6-4086-8f41-a48f9e95f515",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2700,
      y: 900,
    },
    name: "BattleField",
    id: "3be1159a-ddd0-49f6-9700-b35c9ec25104",
    top: "7bdd10b3-07f4-4253-8f97-cca5c550f720",
    left: "4794f3ec-c5bb-48e6-825d-f34cbd79db5b",
    bottom: "10ba851c-6d3a-4750-8a51-4be2eb98c9b5",
    right: "da3247b1-37ff-4ffd-862f-b55c72f5ffe6",
    edges: [
      "2729757b-45c6-4086-8f41-a48f9e95f515",
      "78c992ba-f631-4c58-99e6-851d5b23278c",
      "22f26105-e2e4-4652-8497-a53c7a6e4d6a",
      "60a687fe-7356-4d0f-89dc-fe8b8c7db279",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1520,
      y: 1580,
    },
    name: "CollectMoneyField",
    id: "d465b4cd-1158-4af3-9bfd-7c722a297b45",
    left: "fea85e6d-98e6-4426-969c-7515e31bd416",
    right: "f1fb5a08-5ce9-4561-8aec-4c0f15ffbe98",
    edges: [
      "4f727d18-7c1e-4024-a1ea-daf710d10dc0",
      "dac4dd7c-9f1b-4976-9b66-3c833a760fc1",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1740,
      y: 1580,
    },
    name: "BattleField",
    id: "f1fb5a08-5ce9-4561-8aec-4c0f15ffbe98",
    left: "d465b4cd-1158-4af3-9bfd-7c722a297b45",
    bottom: "88129fdb-c3a4-4ece-b790-032f23b52b77",
    right: "622b4534-364f-44da-affe-b11cd92a4600",
    edges: [
      "dac4dd7c-9f1b-4976-9b66-3c833a760fc1",
      "294a9b50-131c-40c6-a8f2-9872046bd8b8",
      "8b2414ba-b4e8-429c-a0a8-678e52da6b61",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1740,
      y: 1740,
    },
    name: "BattleField",
    id: "88129fdb-c3a4-4ece-b790-032f23b52b77",
    top: "f1fb5a08-5ce9-4561-8aec-4c0f15ffbe98",
    right: "bf05b8e6-f290-4d24-829c-af8eb207851e",
    edges: [
      "8b2414ba-b4e8-429c-a0a8-678e52da6b61",
      "71b54b4c-9dd3-4a4a-80fe-9307a9481b1d",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 1920,
      y: 1580,
    },
    name: "TreasureField",
    id: "622b4534-364f-44da-affe-b11cd92a4600",
    left: "f1fb5a08-5ce9-4561-8aec-4c0f15ffbe98",
    right: "f1d8f588-5ef5-4493-b831-c000495c4f54",
    top: "ac14c242-968e-4e04-b2e8-7cd0322c0d86",
    edges: [
      "294a9b50-131c-40c6-a8f2-9872046bd8b8",
      "0ca94e34-2f94-4a02-ad1b-be57abf406e5",
      "e8b82351-3405-4889-b143-036eb916c26c",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2120,
      y: 1580,
    },
    name: "BattleField",
    id: "f1d8f588-5ef5-4493-b831-c000495c4f54",
    left: "622b4534-364f-44da-affe-b11cd92a4600",
    bottom: "bf05b8e6-f290-4d24-829c-af8eb207851e",
    right: "4d1dce0c-1bb9-4fb9-8e92-50fc2cd2a4ba",
    edges: [
      "0ca94e34-2f94-4a02-ad1b-be57abf406e5",
      "a8d7fa6a-389f-4162-b496-b6c2c5d0eb2a",
      "4fa9e463-c1de-4557-8df5-3cf2419a403f",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2120,
      y: 1740,
    },
    name: "BattleField",
    id: "bf05b8e6-f290-4d24-829c-af8eb207851e",
    top: "f1d8f588-5ef5-4493-b831-c000495c4f54",
    left: "88129fdb-c3a4-4ece-b790-032f23b52b77",
    edges: [
      "a8d7fa6a-389f-4162-b496-b6c2c5d0eb2a",
      "71b54b4c-9dd3-4a4a-80fe-9307a9481b1d",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2340,
      y: 1580,
    },
    name: "VillageField",
    id: "4d1dce0c-1bb9-4fb9-8e92-50fc2cd2a4ba",
    left: "f1d8f588-5ef5-4493-b831-c000495c4f54",
    bottom: "43a2a3ea-c5eb-454f-9781-58018b0607ba",
    edges: [
      "4fa9e463-c1de-4557-8df5-3cf2419a403f",
      "0f136564-f100-449f-93d1-2bd5da2cd658",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2340,
      y: 1740,
    },
    name: "TreasureField",
    id: "43a2a3ea-c5eb-454f-9781-58018b0607ba",
    top: "4d1dce0c-1bb9-4fb9-8e92-50fc2cd2a4ba",
    right: "dfe315a6-907e-4657-b919-0d6fbf9ef8f5",
    edges: [
      "0f136564-f100-449f-93d1-2bd5da2cd658",
      "ef388d63-3806-48b7-9adf-a0b00c173604",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2560,
      y: 1740,
    },
    name: "BattleField",
    id: "dfe315a6-907e-4657-b919-0d6fbf9ef8f5",
    left: "43a2a3ea-c5eb-454f-9781-58018b0607ba",
    top: "dce887cc-a393-450d-b518-40b8ea3aea8b",
    right: "e280dff2-8d0b-471d-bd41-a0dadb5953b3",
    edges: [
      "ef388d63-3806-48b7-9adf-a0b00c173604",
      "61d34814-cdd6-4ce5-849a-f846413c28c6",
      "231d978e-42b1-4a1c-8fe4-adff1118ae32",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2560,
      y: 1580,
    },
    name: "BattleField",
    id: "dce887cc-a393-450d-b518-40b8ea3aea8b",
    bottom: "dfe315a6-907e-4657-b919-0d6fbf9ef8f5",
    top: "9de086ae-bc21-4162-9f82-eb8ace196d52",
    edges: [
      "61d34814-cdd6-4ce5-849a-f846413c28c6",
      "84071604-ba99-4648-8bca-0db31d09368e",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2560,
      y: 1440,
    },
    name: "WeaponStoreField",
    id: "9de086ae-bc21-4162-9f82-eb8ace196d52",
    left: "15b7a6eb-5766-4587-93e3-feee2e270362",
    bottom: "dce887cc-a393-450d-b518-40b8ea3aea8b",
    edges: [
      "84071604-ba99-4648-8bca-0db31d09368e",
      "5686b59c-d23b-49b7-a67c-4d774be55e9c",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2260,
      y: 1440,
    },
    name: "BattleField",
    id: "15b7a6eb-5766-4587-93e3-feee2e270362",
    right: "9de086ae-bc21-4162-9f82-eb8ace196d52",
    top: "3bfb01e9-a672-4552-91d2-598acd166999",
    edges: [
      "5686b59c-d23b-49b7-a67c-4d774be55e9c",
      "91d88950-fc4c-40ed-a56f-947f69411eb6",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2440,
      y: 900,
    },
    name: "VillageField",
    id: "4794f3ec-c5bb-48e6-825d-f34cbd79db5b",
    right: "3be1159a-ddd0-49f6-9700-b35c9ec25104",
    edges: ["78c992ba-f631-4c58-99e6-851d5b23278c"],
    area: "Europe",
  },
  {
    position: {
      x: 2900,
      y: 900,
    },
    name: "MagicStoreField",
    id: "da3247b1-37ff-4ffd-862f-b55c72f5ffe6",
    left: "3be1159a-ddd0-49f6-9700-b35c9ec25104",
    bottom: "97851eea-17de-41dc-9860-7d48c11d32cd",
    edges: [
      "22f26105-e2e4-4652-8497-a53c7a6e4d6a",
      "e01a180c-87d0-45cb-bbf6-f53c94f6ee30",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2900,
      y: 1020,
    },
    name: "TreasureField",
    id: "97851eea-17de-41dc-9860-7d48c11d32cd",
    top: "da3247b1-37ff-4ffd-862f-b55c72f5ffe6",
    bottom: "fba9a176-5a8a-4239-85d9-dc8e979fd066",
    edges: [
      "e01a180c-87d0-45cb-bbf6-f53c94f6ee30",
      "373ef062-9f34-4c89-98c0-12acb252ee63",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2700,
      y: 1140,
    },
    name: "BattleField",
    id: "10ba851c-6d3a-4750-8a51-4be2eb98c9b5",
    top: "3be1159a-ddd0-49f6-9700-b35c9ec25104",
    right: "fba9a176-5a8a-4239-85d9-dc8e979fd066",
    edges: [
      "376d9dd4-4dc9-49c7-a350-53ce5620360c",
      "60a687fe-7356-4d0f-89dc-fe8b8c7db279",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2900,
      y: 1140,
    },
    name: "BattleField",
    id: "fba9a176-5a8a-4239-85d9-dc8e979fd066",
    left: "10ba851c-6d3a-4750-8a51-4be2eb98c9b5",
    top: "97851eea-17de-41dc-9860-7d48c11d32cd",
    bottom: "1d874c6c-d287-4c9f-be8a-d6dbbc2f1a35",
    right: "d9950003-e4a0-411b-b31a-aefcb68e8f50",
    edges: [
      "373ef062-9f34-4c89-98c0-12acb252ee63",
      "376d9dd4-4dc9-49c7-a350-53ce5620360c",
      "22fd983e-c0d7-4b67-8059-36cfa210259c",
      "1fb9f130-41d0-4342-b40a-c6769e956b22",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2700,
      y: 1320,
    },
    name: "BattleField",
    id: "41dcc5e4-7b29-493b-a840-11c7f23c6278",
    left: "3bfb01e9-a672-4552-91d2-598acd166999",
    right: "1d874c6c-d287-4c9f-be8a-d6dbbc2f1a35",
    edges: [
      "67c9246c-2e0a-401a-9f39-2359b52df47c",
      "77b8d371-b032-4052-abba-5a940b8f40fe",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2900,
      y: 1320,
    },
    name: "MagicBookField",
    id: "1d874c6c-d287-4c9f-be8a-d6dbbc2f1a35",
    left: "41dcc5e4-7b29-493b-a840-11c7f23c6278",
    top: "fba9a176-5a8a-4239-85d9-dc8e979fd066",
    edges: [
      "77b8d371-b032-4052-abba-5a940b8f40fe",
      "22fd983e-c0d7-4b67-8059-36cfa210259c",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2720,
      y: 1740,
    },
    name: "TreasureField",
    id: "e280dff2-8d0b-471d-bd41-a0dadb5953b3",
    left: "dfe315a6-907e-4657-b919-0d6fbf9ef8f5",
    right: "8d9ee0ae-a302-4624-91d5-feea8b6c3484",
    bottom: "5860de9d-4406-4918-b903-d7a674c468ea",
    edges: [
      "231d978e-42b1-4a1c-8fe4-adff1118ae32",
      "a668415e-e2aa-4e44-b83e-cf95ac7b89fd",
      "c57243eb-6c61-42ad-ad77-142aa5e4be1d",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2720,
      y: 1900,
    },
    name: "BattleField",
    id: "5860de9d-4406-4918-b903-d7a674c468ea",
    bottom: "76e06435-bf9b-4c2c-9ad0-9f8fe6a16459",
    top: "e280dff2-8d0b-471d-bd41-a0dadb5953b3",
    edges: [
      "c57243eb-6c61-42ad-ad77-142aa5e4be1d",
      "e3f102e3-da4f-4626-894a-6b752357a3cd",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2720,
      y: 2060,
    },
    name: "BattleField",
    id: "76e06435-bf9b-4c2c-9ad0-9f8fe6a16459",
    right: "8c3ef819-dd67-433e-a49e-8173f7d2f7d5",
    top: "5860de9d-4406-4918-b903-d7a674c468ea",
    left: "322eaf7d-b7d1-4a44-b489-c5a71c9f4614",
    edges: [
      "e3f102e3-da4f-4626-894a-6b752357a3cd",
      "01c79478-13bc-42a5-ae9e-83f5893e90c5",
      "d5eb48a2-4f51-4058-924a-ad37305f1379",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2900,
      y: 1740,
    },
    name: "JobStoreField",
    id: "8d9ee0ae-a302-4624-91d5-feea8b6c3484",
    left: "e280dff2-8d0b-471d-bd41-a0dadb5953b3",
    bottom: "8c3ef819-dd67-433e-a49e-8173f7d2f7d5",
    edges: [
      "a668415e-e2aa-4e44-b83e-cf95ac7b89fd",
      "fd878a85-a97a-422c-ae42-3aba4d389bea",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 2900,
      y: 2060,
    },
    name: "BattleField",
    id: "8c3ef819-dd67-433e-a49e-8173f7d2f7d5",
    top: "8d9ee0ae-a302-4624-91d5-feea8b6c3484",
    left: "76e06435-bf9b-4c2c-9ad0-9f8fe6a16459",
    right: "ecfc585b-dd78-4b06-81f2-b3d061d51cbf",
    edges: [
      "01c79478-13bc-42a5-ae9e-83f5893e90c5",
      "fd878a85-a97a-422c-ae42-3aba4d389bea",
      "f4bb2f4f-ae49-4d5a-bd78-fd1bd1ec15ed",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 3200,
      y: 2060,
    },
    name: "ChruchField",
    id: "ecfc585b-dd78-4b06-81f2-b3d061d51cbf",
    left: "8c3ef819-dd67-433e-a49e-8173f7d2f7d5",
    right: "3ff4445c-8f79-48d0-b520-cb5671f07e54",
    bottom: "7a25c5b3-59df-423d-b33f-d0bfe00116ab",
    edges: [
      "f4bb2f4f-ae49-4d5a-bd78-fd1bd1ec15ed",
      "8c3b095b-e523-4e60-bd5f-94c919d1d311",
      "93b07633-411a-4c73-a1d2-b24b6e42a634",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 3080,
      y: 2360,
    },
    name: "TreasureField",
    id: "7a25c5b3-59df-423d-b33f-d0bfe00116ab",
    top: "ecfc585b-dd78-4b06-81f2-b3d061d51cbf",
    right: "90df07d5-d5b5-4524-95ff-4a076f510a6a",
    edges: [
      "0c5fb970-baaf-4a6e-8946-0dd0e7ab1911",
      "93b07633-411a-4c73-a1d2-b24b6e42a634",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 3440,
      y: 2060,
    },
    name: "BattleField",
    id: "3ff4445c-8f79-48d0-b520-cb5671f07e54",
    bottom: "a065eb39-be8a-4494-9f10-56a7781f8464",
    left: "ecfc585b-dd78-4b06-81f2-b3d061d51cbf",
    edges: [
      "8c3b095b-e523-4e60-bd5f-94c919d1d311",
      "4c62e8af-63d5-4fae-912a-7fd008c5d977",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 3300,
      y: 2440,
    },
    name: "BattleField",
    id: "90df07d5-d5b5-4524-95ff-4a076f510a6a",
    left: "7a25c5b3-59df-423d-b33f-d0bfe00116ab",
    right: "a065eb39-be8a-4494-9f10-56a7781f8464",
    edges: [
      "0c5fb970-baaf-4a6e-8946-0dd0e7ab1911",
      "2ed2b818-3352-4678-9dcf-45d3d7b20526",
    ],
    area: "Europe",
  },
  {
    position: {
      x: 3500,
      y: 2380,
    },
    name: "BattleField",
    id: "a065eb39-be8a-4494-9f10-56a7781f8464",
    left: "90df07d5-d5b5-4524-95ff-4a076f510a6a",
    top: "3ff4445c-8f79-48d0-b520-cb5671f07e54",
    edges: [
      "2ed2b818-3352-4678-9dcf-45d3d7b20526",
      "4c62e8af-63d5-4fae-912a-7fd008c5d977",
      "e0f377a9-5518-4894-b957-82c131943c73",
    ],
    right: "af8cc9f3-5031-49ff-92ee-6b2da5bd5dc0",
    area: "Europe",
  },
  {
    position: {
      x: 1920,
      y: 1440,
    },
    name: "VillageField",
    id: "ac14c242-968e-4e04-b2e8-7cd0322c0d86",
    bottom: "622b4534-364f-44da-affe-b11cd92a4600",
    edges: ["e8b82351-3405-4889-b143-036eb916c26c"],
    area: "Europe",
  },
  {
    position: {
      x: 560,
      y: 140,
    },
    name: "WorldTransferField",
    id: "34c8cd25-57f1-44ac-a407-f185f1cfe6c9",
    right: "209c7458-6352-4402-813a-94c83c86f148",
    edges: ["8a60cf6d-d236-4676-85d9-97362548b2fb"],
    area: "Europe",
  },
];
const russiaVertices: Vertex[] = [
  {
    position: {
      x: 6340,
      y: 2460,
    },
    name: "BattleField",
    id: "758f18c4-ba05-472e-9eda-5e4c54ab3fae",
    bottom: "3cfb7867-7384-4abd-9146-448374761bde",
    left: "259c8af4-fc8e-4278-bc6d-85cbb6a6ffd5",
    right: "0a2e0f08-4ea6-4b41-a2a5-4e69d1a35aff",
    edges: [
      "a36d24b5-254c-455e-af53-be884d970df3",
      "8e6e4352-7860-4cba-9f71-02fefc3557c6",
      "5bc7634a-3957-453b-ac0d-45b1c2d1bfd6",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6160,
      y: 2460,
    },
    name: "BattleField",
    id: "259c8af4-fc8e-4278-bc6d-85cbb6a6ffd5",
    right: "758f18c4-ba05-472e-9eda-5e4c54ab3fae",
    top: "418029cb-867e-4b21-8bfc-1f12d0740f77",
    edges: [
      "8e6e4352-7860-4cba-9f71-02fefc3557c6",
      "ab735d1d-2ecd-4af6-bde4-5d959b26be35",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6520,
      y: 2460,
    },
    name: "BattleField",
    id: "0a2e0f08-4ea6-4b41-a2a5-4e69d1a35aff",
    left: "758f18c4-ba05-472e-9eda-5e4c54ab3fae",
    top: "1b0e45cf-8a8d-493f-9231-dc1948f5e1a9",
    edges: [
      "5bc7634a-3957-453b-ac0d-45b1c2d1bfd6",
      "9d67d6a6-a55b-454d-b658-789ccbba3a3b",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6160,
      y: 2260,
    },
    name: "VillageField",
    id: "418029cb-867e-4b21-8bfc-1f12d0740f77",
    bottom: "259c8af4-fc8e-4278-bc6d-85cbb6a6ffd5",
    right: "1b0e45cf-8a8d-493f-9231-dc1948f5e1a9",
    edges: [
      "ab735d1d-2ecd-4af6-bde4-5d959b26be35",
      "c0a4253d-0629-424d-9ae8-7c9e76e46bd6",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6520,
      y: 2260,
    },
    name: "BattleField",
    id: "1b0e45cf-8a8d-493f-9231-dc1948f5e1a9",
    bottom: "0a2e0f08-4ea6-4b41-a2a5-4e69d1a35aff",
    left: "418029cb-867e-4b21-8bfc-1f12d0740f77",
    top: "fbff7041-073b-4049-b678-e5de6702546f",
    edges: [
      "9d67d6a6-a55b-454d-b658-789ccbba3a3b",
      "c0a4253d-0629-424d-9ae8-7c9e76e46bd6",
      "f1350a6b-04e8-4a81-a88c-0b783f6286e0",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6520,
      y: 2060,
    },
    name: "TreasureField",
    id: "fbff7041-073b-4049-b678-e5de6702546f",
    bottom: "1b0e45cf-8a8d-493f-9231-dc1948f5e1a9",
    top: "a56ded0e-45f0-4f53-9bd0-fb28c763c07e",
    edges: [
      "f1350a6b-04e8-4a81-a88c-0b783f6286e0",
      "81568af6-3ba6-4a13-9232-095c7ab130f1",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6520,
      y: 1880,
    },
    name: "BattleField",
    id: "a56ded0e-45f0-4f53-9bd0-fb28c763c07e",
    bottom: "fbff7041-073b-4049-b678-e5de6702546f",
    left: "27ad55b1-b9d6-4610-a579-5c7a4026e156",
    edges: [
      "81568af6-3ba6-4a13-9232-095c7ab130f1",
      "87f93231-701d-47e3-a369-8d5dad4ce5f2",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6160,
      y: 1880,
    },
    name: "BattleField",
    id: "27ad55b1-b9d6-4610-a579-5c7a4026e156",
    right: "a56ded0e-45f0-4f53-9bd0-fb28c763c07e",
    left: "3153c21a-9b99-48f7-a9eb-d84c15adc734",
    edges: [
      "87f93231-701d-47e3-a369-8d5dad4ce5f2",
      "f9dc0308-d0c3-4ff5-a69e-6e5073b232c0",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5940,
      y: 1880,
    },
    name: "TreasureField",
    id: "3153c21a-9b99-48f7-a9eb-d84c15adc734",
    right: "27ad55b1-b9d6-4610-a579-5c7a4026e156",
    top: "33cae4c0-5f4e-42b0-bc71-71e3a57c6cbf",
    bottom: "9bec4ce4-612b-4afa-9243-1cd62ecce0cb",
    edges: [
      "f9dc0308-d0c3-4ff5-a69e-6e5073b232c0",
      "65ff7d46-4ee9-4f8c-828a-831e7f6f0d2a",
      "3284df82-db62-4ff9-87fa-2ac3c8fab948",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5940,
      y: 2060,
    },
    name: "BattleField",
    id: "9bec4ce4-612b-4afa-9243-1cd62ecce0cb",
    top: "3153c21a-9b99-48f7-a9eb-d84c15adc734",
    left: "be370898-db0f-4e36-893b-48e6b216186c",
    edges: [
      "3284df82-db62-4ff9-87fa-2ac3c8fab948",
      "221a03c6-9d4b-4db7-b7f1-5bfb4475ffd0",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5940,
      y: 1680,
    },
    name: "BattleField",
    id: "33cae4c0-5f4e-42b0-bc71-71e3a57c6cbf",
    bottom: "3153c21a-9b99-48f7-a9eb-d84c15adc734",
    left: "705188af-98dd-4cc4-bb00-a9ba37445cb2",
    edges: [
      "65ff7d46-4ee9-4f8c-828a-831e7f6f0d2a",
      "1f72beff-a2d0-4324-96fa-6642c42d67f6",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5700,
      y: 1680,
    },
    name: "BattleField",
    id: "705188af-98dd-4cc4-bb00-a9ba37445cb2",
    right: "33cae4c0-5f4e-42b0-bc71-71e3a57c6cbf",
    bottom: "be370898-db0f-4e36-893b-48e6b216186c",
    left: "3c6d04ca-3c84-4291-ad77-6a5ea3c3ba5e",
    edges: [
      "1f72beff-a2d0-4324-96fa-6642c42d67f6",
      "c649bf6f-9a55-483a-a856-3c3534a59e2d",
      "f2e1976e-5b8e-4938-b7ca-464058e0a31a",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5700,
      y: 2060,
    },
    name: "BattleField",
    id: "be370898-db0f-4e36-893b-48e6b216186c",
    top: "705188af-98dd-4cc4-bb00-a9ba37445cb2",
    right: "9bec4ce4-612b-4afa-9243-1cd62ecce0cb",
    edges: [
      "c649bf6f-9a55-483a-a856-3c3534a59e2d",
      "221a03c6-9d4b-4db7-b7f1-5bfb4475ffd0",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5420,
      y: 1680,
    },
    name: "BattleField",
    id: "3c6d04ca-3c84-4291-ad77-6a5ea3c3ba5e",
    right: "705188af-98dd-4cc4-bb00-a9ba37445cb2",
    left: "f9bc4b6e-9ad9-4f94-a903-0f61194c9f04",
    top: "cf7c8c32-3ad2-4481-a7b3-37a5f3c9bc07",
    edges: [
      "f2e1976e-5b8e-4938-b7ca-464058e0a31a",
      "824e96ec-896e-47cf-9893-ea700d2ed06c",
      "bf9733a9-5db0-4544-8085-4fb08d56ad53",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5200,
      y: 1680,
    },
    name: "BattleField",
    id: "f9bc4b6e-9ad9-4f94-a903-0f61194c9f04",
    right: "3c6d04ca-3c84-4291-ad77-6a5ea3c3ba5e",
    left: "d0e7bf3f-c3e2-4bf5-bfeb-2e698a4d8cbc",
    edges: [
      "824e96ec-896e-47cf-9893-ea700d2ed06c",
      "3efb1f36-8f51-4ead-ae5b-9319e62e32a4",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5440,
      y: 1280,
    },
    name: "TreasureField",
    id: "cf7c8c32-3ad2-4481-a7b3-37a5f3c9bc07",
    bottom: "3c6d04ca-3c84-4291-ad77-6a5ea3c3ba5e",
    left: "26db1bd9-4fa9-48e1-baf5-72a5002d7999",
    top: "928c874c-8000-4dbe-94ff-e74e89e24ba7",
    right: "32881a6e-e91c-42b7-ad7b-80aa76a034f9",
    edges: [
      "bf9733a9-5db0-4544-8085-4fb08d56ad53",
      "d415a58c-481c-4103-ac0e-5862bcd67e14",
      "725f285e-2575-4f17-902d-3f4efe37ed39",
      "553e0693-cdae-49ae-8771-f09a71ce436b",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5000,
      y: 1680,
    },
    name: "MagicBookField",
    id: "d0e7bf3f-c3e2-4bf5-bfeb-2e698a4d8cbc",
    right: "f9bc4b6e-9ad9-4f94-a903-0f61194c9f04",
    left: "a099963b-adef-4e2b-8607-fffc3332cdcc",
    bottom: "2f66e572-585f-4adc-883e-2258473c7986",
    top: "83aaf1d8-8ca9-447e-964f-8fcd977577f8",
    edges: [
      "3efb1f36-8f51-4ead-ae5b-9319e62e32a4",
      "910938a5-a436-4652-b522-32718b20eaf4",
      "9cabe1e5-d32d-4498-868e-31748360755d",
      "db39d052-faa4-40e1-bad9-17ef3b2cc27e",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4720,
      y: 1680,
    },
    name: "VillageField",
    id: "a099963b-adef-4e2b-8607-fffc3332cdcc",
    right: "d0e7bf3f-c3e2-4bf5-bfeb-2e698a4d8cbc",
    edges: ["910938a5-a436-4652-b522-32718b20eaf4"],
    area: "Russia",
  },
  {
    position: {
      x: 5000,
      y: 1980,
    },
    name: "BattleField",
    id: "2f66e572-585f-4adc-883e-2258473c7986",
    top: "d0e7bf3f-c3e2-4bf5-bfeb-2e698a4d8cbc",
    left: "e6f93d1d-b061-4b74-bbc1-19590dbc9ff1",
    edges: [
      "9cabe1e5-d32d-4498-868e-31748360755d",
      "5d28f26e-8baf-4cfb-b042-5b93cf5cf818",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4720,
      y: 1980,
    },
    name: "BattleField",
    id: "e6f93d1d-b061-4b74-bbc1-19590dbc9ff1",
    right: "2f66e572-585f-4adc-883e-2258473c7986",
    top: "5cf00cea-67c3-4f41-9f44-7817faafb147",
    edges: [
      "5d28f26e-8baf-4cfb-b042-5b93cf5cf818",
      "87af8bd9-95db-4655-b29b-fe736afa6ad6",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4720,
      y: 1820,
    },
    name: "BattleField",
    id: "5cf00cea-67c3-4f41-9f44-7817faafb147",
    bottom: "e6f93d1d-b061-4b74-bbc1-19590dbc9ff1",
    left: "5e6aa939-1e28-4867-b331-a21e4ccbc6a6",
    edges: [
      "87af8bd9-95db-4655-b29b-fe736afa6ad6",
      "679b6e9f-d9a6-4699-9e8c-3e5fc1d0231c",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4500,
      y: 1820,
    },
    name: "VillageField",
    id: "5e6aa939-1e28-4867-b331-a21e4ccbc6a6",
    right: "5cf00cea-67c3-4f41-9f44-7817faafb147",
    left: "73e35429-9a56-4a9f-8bb5-d3fda80b2e98",
    edges: [
      "679b6e9f-d9a6-4699-9e8c-3e5fc1d0231c",
      "6f4af83a-50ec-4cbc-9aa1-f5031d9d555c",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4300,
      y: 1820,
    },
    name: "BattleField",
    id: "73e35429-9a56-4a9f-8bb5-d3fda80b2e98",
    right: "5e6aa939-1e28-4867-b331-a21e4ccbc6a6",
    left: "a4fa53ee-df3e-4961-93e6-693103ca952b",
    bottom: "61e8bd9e-415d-4ec7-9402-49bca140d07c",
    top: "0a158e23-9084-44d3-be75-d3d981a3b89e",
    edges: [
      "6f4af83a-50ec-4cbc-9aa1-f5031d9d555c",
      "93ce43fd-38e3-4643-b84a-7551f16709a1",
      "beef6b94-e6c1-46dc-a0a0-c17f233a86d3",
      "575989c6-343b-4fc7-8c78-119c425ece56",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4140,
      y: 1820,
    },
    name: "TreasureField",
    id: "a4fa53ee-df3e-4961-93e6-693103ca952b",
    right: "73e35429-9a56-4a9f-8bb5-d3fda80b2e98",
    left: "9e33d151-1869-441e-b700-13bc56a6d8be",
    edges: [
      "93ce43fd-38e3-4643-b84a-7551f16709a1",
      "b5e6b333-7956-4251-92d6-2deebbac3021",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3980,
      y: 1820,
    },
    name: "JobStoreField",
    id: "9e33d151-1869-441e-b700-13bc56a6d8be",
    right: "a4fa53ee-df3e-4961-93e6-693103ca952b",
    bottom: "7a782a62-c7f8-4c24-a1d0-9fcf8c0013c9",
    edges: [
      "b5e6b333-7956-4251-92d6-2deebbac3021",
      "fd2177d6-2eca-450e-b9aa-873a803cb6b0",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3980,
      y: 1980,
    },
    name: "BattleField",
    id: "7a782a62-c7f8-4c24-a1d0-9fcf8c0013c9",
    top: "9e33d151-1869-441e-b700-13bc56a6d8be",
    right: "61e8bd9e-415d-4ec7-9402-49bca140d07c",
    edges: [
      "fd2177d6-2eca-450e-b9aa-873a803cb6b0",
      "936eba7e-6854-419b-87c4-5735e3398641",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4300,
      y: 1980,
    },
    name: "MagicBookField",
    id: "61e8bd9e-415d-4ec7-9402-49bca140d07c",
    left: "7a782a62-c7f8-4c24-a1d0-9fcf8c0013c9",
    top: "73e35429-9a56-4a9f-8bb5-d3fda80b2e98",
    edges: [
      "936eba7e-6854-419b-87c4-5735e3398641",
      "beef6b94-e6c1-46dc-a0a0-c17f233a86d3",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3420,
      y: 1140,
    },
    name: "BattleField",
    id: "d9950003-e4a0-411b-b31a-aefcb68e8f50",
    left: "fba9a176-5a8a-4239-85d9-dc8e979fd066",
    top: "dd46fc17-7d67-425a-9bc1-bb431168e30a",
    right: "20bbac95-c132-42fa-9c65-9b065078cc61",
    bottom: "52bd642a-52d4-4d26-9867-f1ad8fe5c497",
    edges: [
      "1fb9f130-41d0-4342-b40a-c6769e956b22",
      "46e561f9-0ee1-4701-8ea6-38d24ed10d83",
      "d06f55ea-d074-4ba0-950a-344bfd28b70f",
      "0981c422-8ed9-4390-927d-09e72d38de68",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3420,
      y: 1020,
    },
    name: "BattleField",
    id: "dd46fc17-7d67-425a-9bc1-bb431168e30a",
    bottom: "d9950003-e4a0-411b-b31a-aefcb68e8f50",
    left: "5799d54d-fa84-490e-83ab-7a5cf80936e5",
    top: "911b2d82-fb4e-45fc-8e7a-0c7fa10b86dc",
    edges: [
      "46e561f9-0ee1-4701-8ea6-38d24ed10d83",
      "e4a30029-be80-45fa-9de8-6d240d9b031f",
      "2c30c918-c391-4f49-a5e2-03cb8e77fe66",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3260,
      y: 1020,
    },
    name: "BattleField",
    id: "5799d54d-fa84-490e-83ab-7a5cf80936e5",
    right: "dd46fc17-7d67-425a-9bc1-bb431168e30a",
    left: "8263da02-3ee6-470b-b563-8d07200a65d8",
    edges: [
      "e4a30029-be80-45fa-9de8-6d240d9b031f",
      "d1f91f1d-44e1-4fa3-9650-9b6876fdd886",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3080,
      y: 1020,
    },
    name: "VillageField",
    id: "8263da02-3ee6-470b-b563-8d07200a65d8",
    right: "5799d54d-fa84-490e-83ab-7a5cf80936e5",
    edges: ["d1f91f1d-44e1-4fa3-9650-9b6876fdd886"],
    area: "Russia",
  },
  {
    position: {
      x: 3420,
      y: 880,
    },
    name: "BattleField",
    id: "911b2d82-fb4e-45fc-8e7a-0c7fa10b86dc",
    bottom: "dd46fc17-7d67-425a-9bc1-bb431168e30a",
    right: "5ce9c87a-75eb-462c-9d99-9cc02800d0f3",
    edges: [
      "2c30c918-c391-4f49-a5e2-03cb8e77fe66",
      "f9064fc7-2b68-4ab2-84a0-ea5f5e5d98a3",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3600,
      y: 880,
    },
    name: "TreasureField",
    id: "5ce9c87a-75eb-462c-9d99-9cc02800d0f3",
    left: "911b2d82-fb4e-45fc-8e7a-0c7fa10b86dc",
    bottom: "20bbac95-c132-42fa-9c65-9b065078cc61",
    right: "4de1e84c-52ff-4a1c-9ebb-f65b0b5407bf",
    edges: [
      "f9064fc7-2b68-4ab2-84a0-ea5f5e5d98a3",
      "dce5f10f-6f1a-47e7-9bfd-7ba6f9f48fb8",
      "82bd57e7-6c63-4218-9f6b-909f3727c8e0",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3600,
      y: 1140,
    },
    name: "BattleField",
    id: "20bbac95-c132-42fa-9c65-9b065078cc61",
    top: "5ce9c87a-75eb-462c-9d99-9cc02800d0f3",
    left: "d9950003-e4a0-411b-b31a-aefcb68e8f50",
    edges: [
      "dce5f10f-6f1a-47e7-9bfd-7ba6f9f48fb8",
      "d06f55ea-d074-4ba0-950a-344bfd28b70f",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3920,
      y: 880,
    },
    name: "RedTreasureField",
    id: "4de1e84c-52ff-4a1c-9ebb-f65b0b5407bf",
    left: "5ce9c87a-75eb-462c-9d99-9cc02800d0f3",
    right: "9f57289d-af63-462d-ace9-e9f2afe6f7fc",
    bottom: "fa27c588-eadd-415f-83cd-ffe16d01bfa8",
    edges: [
      "82bd57e7-6c63-4218-9f6b-909f3727c8e0",
      "1c6b6cc3-957e-48da-bc25-4e945684ebe1",
      "a0eb823c-9e26-4c10-856b-6a5df2ec90d2",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4060,
      y: 880,
    },
    name: "TreasureField",
    id: "9f57289d-af63-462d-ace9-e9f2afe6f7fc",
    left: "4de1e84c-52ff-4a1c-9ebb-f65b0b5407bf",
    right: "426f3524-4f7e-45a6-a35a-2f1a3a2f5e8e",
    edges: [
      "1c6b6cc3-957e-48da-bc25-4e945684ebe1",
      "b3baa037-b579-45df-9549-9b0d6a49f75c",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4200,
      y: 880,
    },
    name: "BattleField",
    id: "426f3524-4f7e-45a6-a35a-2f1a3a2f5e8e",
    left: "9f57289d-af63-462d-ace9-e9f2afe6f7fc",
    bottom: "05085a9a-dd9c-4bbd-b50a-8193a66ff43f",
    right: "ed48060c-bbbe-40cd-8149-1b9ad26985a5",
    edges: [
      "b3baa037-b579-45df-9549-9b0d6a49f75c",
      "ad5e8576-b843-4ff6-8b12-d3f8e9f9ec46",
      "20562ac9-6db0-4a22-add5-fa98934275a8",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4200,
      y: 1020,
    },
    name: "RedTreasureField",
    id: "05085a9a-dd9c-4bbd-b50a-8193a66ff43f",
    top: "426f3524-4f7e-45a6-a35a-2f1a3a2f5e8e",
    left: "fa27c588-eadd-415f-83cd-ffe16d01bfa8",
    edges: [
      "ad5e8576-b843-4ff6-8b12-d3f8e9f9ec46",
      "584af308-b40f-48c4-a832-0b0121b08d51",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3920,
      y: 1020,
    },
    name: "BattleField",
    id: "fa27c588-eadd-415f-83cd-ffe16d01bfa8",
    right: "05085a9a-dd9c-4bbd-b50a-8193a66ff43f",
    top: "4de1e84c-52ff-4a1c-9ebb-f65b0b5407bf",
    edges: [
      "584af308-b40f-48c4-a832-0b0121b08d51",
      "a0eb823c-9e26-4c10-856b-6a5df2ec90d2",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3420,
      y: 1380,
    },
    name: "TreasureField",
    id: "52bd642a-52d4-4d26-9867-f1ad8fe5c497",
    top: "d9950003-e4a0-411b-b31a-aefcb68e8f50",
    right: "80d9e887-3287-442e-bf52-cc061e6c2f18",
    bottom: "88b7ae1c-c237-434d-9a73-9b97dd884eb6",
    edges: [
      "0981c422-8ed9-4390-927d-09e72d38de68",
      "1165f0ae-3d56-4725-bfce-a986d7656424",
      "f84458cb-9d5d-411d-b97d-726dea534afd",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3420,
      y: 1560,
    },
    name: "BattleField",
    id: "88b7ae1c-c237-434d-9a73-9b97dd884eb6",
    top: "52bd642a-52d4-4d26-9867-f1ad8fe5c497",
    right: "346c87b6-eea8-423d-8432-0dc1e4a206de",
    edges: [
      "f84458cb-9d5d-411d-b97d-726dea534afd",
      "760df448-347f-447d-8167-e42e76bc07e5",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3740,
      y: 1380,
    },
    name: "BattleField",
    id: "80d9e887-3287-442e-bf52-cc061e6c2f18",
    left: "52bd642a-52d4-4d26-9867-f1ad8fe5c497",
    bottom: "b8e82c18-4aba-4a00-96e9-ab7f83744313",
    right: "ece3c926-944e-4ce0-89e4-da8165ccb26e",
    edges: [
      "1165f0ae-3d56-4725-bfce-a986d7656424",
      "92f0ac11-8bd3-41b6-a5e6-62db5eae7404",
      "2c761697-beb7-43eb-b5b0-a4fa1dc3582c",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3580,
      y: 1560,
    },
    name: "BattleField",
    id: "346c87b6-eea8-423d-8432-0dc1e4a206de",
    left: "88b7ae1c-c237-434d-9a73-9b97dd884eb6",
    right: "b8e82c18-4aba-4a00-96e9-ab7f83744313",
    edges: [
      "760df448-347f-447d-8167-e42e76bc07e5",
      "c3544741-5241-45fe-8a00-b93505ac95aa",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3740,
      y: 1560,
    },
    name: "BattleField",
    id: "b8e82c18-4aba-4a00-96e9-ab7f83744313",
    left: "346c87b6-eea8-423d-8432-0dc1e4a206de",
    top: "80d9e887-3287-442e-bf52-cc061e6c2f18",
    right: "f26dd27e-90a4-4991-8625-efbfa68bb95e",
    edges: [
      "c3544741-5241-45fe-8a00-b93505ac95aa",
      "92f0ac11-8bd3-41b6-a5e6-62db5eae7404",
      "32ea8012-d976-48f0-a49a-1205ba1a9fbe",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3880,
      y: 1380,
    },
    name: "BattleField",
    id: "ece3c926-944e-4ce0-89e4-da8165ccb26e",
    left: "80d9e887-3287-442e-bf52-cc061e6c2f18",
    top: "e5c88916-3f77-4776-a647-97294072a6a8",
    edges: [
      "2c761697-beb7-43eb-b5b0-a4fa1dc3582c",
      "654d87e3-38b3-4879-9962-56d4032b30f2",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3920,
      y: 1220,
    },
    name: "VillageField",
    id: "e5c88916-3f77-4776-a647-97294072a6a8",
    bottom: "ece3c926-944e-4ce0-89e4-da8165ccb26e",
    right: "eb799bba-cec7-41f2-a956-49f35e5ce948",
    edges: [
      "654d87e3-38b3-4879-9962-56d4032b30f2",
      "6404535c-0694-4a1d-bd05-6c2fa059c861",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4180,
      y: 1260,
    },
    name: "BattleField",
    id: "eb799bba-cec7-41f2-a956-49f35e5ce948",
    left: "e5c88916-3f77-4776-a647-97294072a6a8",
    top: "d88978a5-8235-4930-8006-cbaaa7246926",
    edges: [
      "6404535c-0694-4a1d-bd05-6c2fa059c861",
      "952ac4ea-0150-4ee3-8baf-31b1267c2eec",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4220,
      y: 1120,
    },
    name: "TreasureField",
    id: "d88978a5-8235-4930-8006-cbaaa7246926",
    bottom: "eb799bba-cec7-41f2-a956-49f35e5ce948",
    right: "154cff4a-48c8-4a6d-b2c4-ada33b7ac5ea",
    edges: [
      "952ac4ea-0150-4ee3-8baf-31b1267c2eec",
      "630e67b4-243a-4a7d-956e-2113b3d7eca1",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4380,
      y: 1100,
    },
    name: "BattleField",
    id: "154cff4a-48c8-4a6d-b2c4-ada33b7ac5ea",
    left: "d88978a5-8235-4930-8006-cbaaa7246926",
    top: "ed48060c-bbbe-40cd-8149-1b9ad26985a5",
    edges: [
      "630e67b4-243a-4a7d-956e-2113b3d7eca1",
      "1866480b-7e66-4836-8691-b59663dcd51e",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4400,
      y: 880,
    },
    name: "BattleField",
    id: "ed48060c-bbbe-40cd-8149-1b9ad26985a5",
    left: "426f3524-4f7e-45a6-a35a-2f1a3a2f5e8e",
    bottom: "154cff4a-48c8-4a6d-b2c4-ada33b7ac5ea",
    right: "f0b76c36-2d32-43df-a7d8-4d5ab7aab14a",
    edges: [
      "20562ac9-6db0-4a22-add5-fa98934275a8",
      "1866480b-7e66-4836-8691-b59663dcd51e",
      "2ae66b4e-9ce0-40b8-bc66-d524ab39f4c4",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4300,
      y: 1580,
    },
    name: "BattleField",
    id: "0a158e23-9084-44d3-be75-d3d981a3b89e",
    bottom: "73e35429-9a56-4a9f-8bb5-d3fda80b2e98",
    left: "c10a973e-397e-4da8-974c-450698946144",
    top: "3095cb04-8cd1-40b9-b288-086b455cb244",
    edges: [
      "575989c6-343b-4fc7-8c78-119c425ece56",
      "bd818e77-81ea-461d-ba3a-95deeaa9ede8",
      "63ae7f2e-914c-4c3d-997a-7753521001f2",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 3920,
      y: 1560,
    },
    name: "TreasureField",
    id: "f26dd27e-90a4-4991-8625-efbfa68bb95e",
    left: "b8e82c18-4aba-4a00-96e9-ab7f83744313",
    right: "c10a973e-397e-4da8-974c-450698946144",
    edges: [
      "32ea8012-d976-48f0-a49a-1205ba1a9fbe",
      "14a76115-a4b1-4056-b41f-d109d837b3ed",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4120,
      y: 1580,
    },
    name: "BattleField",
    id: "c10a973e-397e-4da8-974c-450698946144",
    left: "f26dd27e-90a4-4991-8625-efbfa68bb95e",
    right: "0a158e23-9084-44d3-be75-d3d981a3b89e",
    top: "fae906b5-cf1c-4945-af44-8e807c89ca1d",
    edges: [
      "14a76115-a4b1-4056-b41f-d109d837b3ed",
      "bd818e77-81ea-461d-ba3a-95deeaa9ede8",
      "71fba9ca-04f5-45e9-8ffe-842f640fbb8e",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4120,
      y: 1420,
    },
    name: "VillageField",
    id: "fae906b5-cf1c-4945-af44-8e807c89ca1d",
    bottom: "c10a973e-397e-4da8-974c-450698946144",
    edges: ["71fba9ca-04f5-45e9-8ffe-842f640fbb8e"],
    area: "Russia",
  },
  {
    position: {
      x: 4300,
      y: 1420,
    },
    name: "ChruchField",
    id: "3095cb04-8cd1-40b9-b288-086b455cb244",
    bottom: "0a158e23-9084-44d3-be75-d3d981a3b89e",
    right: "a75696bc-e5d2-4734-9d90-fb6b158a9c14",
    edges: [
      "63ae7f2e-914c-4c3d-997a-7753521001f2",
      "613b015f-0cc2-4de6-b361-b4866e80b4a1",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4620,
      y: 1440,
    },
    name: "TreasureField",
    id: "a75696bc-e5d2-4734-9d90-fb6b158a9c14",
    left: "3095cb04-8cd1-40b9-b288-086b455cb244",
    top: "41ee7858-3646-42d2-9d9c-95b9e04ee573",
    right: "6bac48a6-24f0-4bd6-979b-75878362c431",
    edges: [
      "613b015f-0cc2-4de6-b361-b4866e80b4a1",
      "7b549f32-4986-4a5b-8f3c-931f3488addc",
      "4a944fcb-e41d-4e8b-ab51-193028dbf97d",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4660,
      y: 1240,
    },
    name: "BattleField",
    id: "41ee7858-3646-42d2-9d9c-95b9e04ee573",
    bottom: "a75696bc-e5d2-4734-9d90-fb6b158a9c14",
    top: "f3ea78db-43cb-40a7-9cb5-b040fa32f7af",
    left: "00ec693d-eb9c-4b6e-9009-b1940e9050e4",
    edges: [
      "7b549f32-4986-4a5b-8f3c-931f3488addc",
      "a0652b9f-30fd-4daf-8cdb-db2d51346224",
      "603544ef-fc73-4582-8dcb-f1021638835a",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4640,
      y: 1060,
    },
    name: "TreasureField",
    id: "f3ea78db-43cb-40a7-9cb5-b040fa32f7af",
    bottom: "41ee7858-3646-42d2-9d9c-95b9e04ee573",
    top: "ae494116-38d4-44dc-af55-b764863fda18",
    right: "f50d1f46-3fa4-4569-8983-7e08c7dc74df",
    edges: [
      "a0652b9f-30fd-4daf-8cdb-db2d51346224",
      "327334b5-ebeb-451c-9489-a8d8ae6a521b",
      "d70427aa-bf7d-43b5-90b5-ac0136baa553",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4540,
      y: 880,
    },
    name: "WeaponStoreField",
    id: "f0b76c36-2d32-43df-a7d8-4d5ab7aab14a",
    left: "ed48060c-bbbe-40cd-8149-1b9ad26985a5",
    right: "ae494116-38d4-44dc-af55-b764863fda18",
    bottom: "00ec693d-eb9c-4b6e-9009-b1940e9050e4",
    edges: [
      "2ae66b4e-9ce0-40b8-bc66-d524ab39f4c4",
      "6fa75bec-6f0e-40a6-a8de-16ca9d4108e2",
      "e4059f6b-f7a0-4662-af33-b2f7e88e6055",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4680,
      y: 880,
    },
    name: "BattleField",
    id: "ae494116-38d4-44dc-af55-b764863fda18",
    left: "f0b76c36-2d32-43df-a7d8-4d5ab7aab14a",
    bottom: "f3ea78db-43cb-40a7-9cb5-b040fa32f7af",
    top: "4c947556-8d0e-4d79-a24a-416386f2e40c",
    edges: [
      "6fa75bec-6f0e-40a6-a8de-16ca9d4108e2",
      "327334b5-ebeb-451c-9489-a8d8ae6a521b",
      "074f1e8f-ccf4-4633-82f6-3d9cdf022f29",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4480,
      y: 1240,
    },
    name: "BattleField",
    id: "00ec693d-eb9c-4b6e-9009-b1940e9050e4",
    top: "f0b76c36-2d32-43df-a7d8-4d5ab7aab14a",
    right: "41ee7858-3646-42d2-9d9c-95b9e04ee573",
    edges: [
      "e4059f6b-f7a0-4662-af33-b2f7e88e6055",
      "603544ef-fc73-4582-8dcb-f1021638835a",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4860,
      y: 1060,
    },
    name: "BattleField",
    id: "f50d1f46-3fa4-4569-8983-7e08c7dc74df",
    left: "f3ea78db-43cb-40a7-9cb5-b040fa32f7af",
    bottom: "7eb250aa-3c1d-46b3-9d80-d0d9ee6addb6",
    top: "4be53e84-b53d-4ccd-b561-423e8967e8e1",
    edges: [
      "d70427aa-bf7d-43b5-90b5-ac0136baa553",
      "7689e618-d96d-4067-b227-654babf4fc7b",
      "4939c294-d4b5-44fe-b408-b99f8d927634",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4820,
      y: 1280,
    },
    name: "BattleField",
    id: "7eb250aa-3c1d-46b3-9d80-d0d9ee6addb6",
    top: "f50d1f46-3fa4-4569-8983-7e08c7dc74df",
    bottom: "6bac48a6-24f0-4bd6-979b-75878362c431",
    right: "a7b7a9f4-721d-441e-8ba0-61f1578bde79",
    edges: [
      "7689e618-d96d-4067-b227-654babf4fc7b",
      "74beab06-bd6e-440b-8a5a-8f82b06002f5",
      "0fb9eaf0-53c5-4b1d-9886-02332ba7d473",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4860,
      y: 1440,
    },
    name: "TreasureField",
    id: "6bac48a6-24f0-4bd6-979b-75878362c431",
    top: "7eb250aa-3c1d-46b3-9d80-d0d9ee6addb6",
    left: "a75696bc-e5d2-4734-9d90-fb6b158a9c14",
    edges: [
      "74beab06-bd6e-440b-8a5a-8f82b06002f5",
      "4a944fcb-e41d-4e8b-ab51-193028dbf97d",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5000,
      y: 1480,
    },
    name: "BattleField",
    id: "83aaf1d8-8ca9-447e-964f-8fcd977577f8",
    bottom: "d0e7bf3f-c3e2-4bf5-bfeb-2e698a4d8cbc",
    top: "a7b7a9f4-721d-441e-8ba0-61f1578bde79",
    edges: [
      "db39d052-faa4-40e1-bad9-17ef3b2cc27e",
      "65128552-add5-48e3-9a67-9712de5efa80",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5040,
      y: 1280,
    },
    name: "GroceryStoreField",
    id: "a7b7a9f4-721d-441e-8ba0-61f1578bde79",
    left: "7eb250aa-3c1d-46b3-9d80-d0d9ee6addb6",
    bottom: "83aaf1d8-8ca9-447e-964f-8fcd977577f8",
    right: "26db1bd9-4fa9-48e1-baf5-72a5002d7999",
    edges: [
      "0fb9eaf0-53c5-4b1d-9886-02332ba7d473",
      "65128552-add5-48e3-9a67-9712de5efa80",
      "549a8808-a753-4387-a442-241c7ac1372c",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5240,
      y: 1280,
    },
    name: "BattleField",
    id: "26db1bd9-4fa9-48e1-baf5-72a5002d7999",
    left: "a7b7a9f4-721d-441e-8ba0-61f1578bde79",
    right: "cf7c8c32-3ad2-4481-a7b3-37a5f3c9bc07",
    top: "4ad099f7-b44f-40cd-8b45-3366683f7e80",
    edges: [
      "549a8808-a753-4387-a442-241c7ac1372c",
      "d415a58c-481c-4103-ac0e-5862bcd67e14",
      "6348f183-0d2d-4f2a-8cd8-5dbcd93458e0",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4860,
      y: 920,
    },
    name: "MagicBookField",
    id: "4be53e84-b53d-4ccd-b561-423e8967e8e1",
    bottom: "f50d1f46-3fa4-4569-8983-7e08c7dc74df",
    right: "ce2111b6-ba86-467d-8bd1-227263a11185",
    edges: [
      "4939c294-d4b5-44fe-b408-b99f8d927634",
      "72367f80-5457-49a9-8927-839c05eb44a1",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5060,
      y: 920,
    },
    name: "VillageField",
    id: "ce2111b6-ba86-467d-8bd1-227263a11185",
    left: "4be53e84-b53d-4ccd-b561-423e8967e8e1",
    right: "4ad099f7-b44f-40cd-8b45-3366683f7e80",
    edges: [
      "72367f80-5457-49a9-8927-839c05eb44a1",
      "49cc05df-7f74-4fc5-9fb4-30e084d8a383",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5240,
      y: 920,
    },
    name: "BattleField",
    id: "4ad099f7-b44f-40cd-8b45-3366683f7e80",
    left: "ce2111b6-ba86-467d-8bd1-227263a11185",
    bottom: "26db1bd9-4fa9-48e1-baf5-72a5002d7999",
    right: "18d56c6d-a830-4f18-a3a2-0b54523a4f71",
    edges: [
      "49cc05df-7f74-4fc5-9fb4-30e084d8a383",
      "6348f183-0d2d-4f2a-8cd8-5dbcd93458e0",
      "e626b942-1ba6-4d73-82f2-6b4231718052",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5440,
      y: 920,
    },
    name: "MagicStoreField",
    id: "18d56c6d-a830-4f18-a3a2-0b54523a4f71",
    left: "4ad099f7-b44f-40cd-8b45-3366683f7e80",
    bottom: "928c874c-8000-4dbe-94ff-e74e89e24ba7",
    edges: [
      "e626b942-1ba6-4d73-82f2-6b4231718052",
      "65b8e974-d038-4999-bcf4-96217efd3461",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5440,
      y: 1100,
    },
    name: "BattleField",
    id: "928c874c-8000-4dbe-94ff-e74e89e24ba7",
    top: "18d56c6d-a830-4f18-a3a2-0b54523a4f71",
    bottom: "cf7c8c32-3ad2-4481-a7b3-37a5f3c9bc07",
    right: "dcdb4871-3b5e-49c0-98c8-cf4f724da90c",
    edges: [
      "65b8e974-d038-4999-bcf4-96217efd3461",
      "725f285e-2575-4f17-902d-3f4efe37ed39",
      "82149c13-9474-465e-8232-7ee9463a5c16",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5780,
      y: 1100,
    },
    name: "BattleField",
    id: "dcdb4871-3b5e-49c0-98c8-cf4f724da90c",
    left: "928c874c-8000-4dbe-94ff-e74e89e24ba7",
    bottom: "b31defe8-e0cf-4b3b-bf8b-d5357410230b",
    top: "fbe34faa-f385-4dec-a65e-c2047207f357",
    right: "fcea56f3-edd8-4d2f-8b7b-1d703cda68cb",
    edges: [
      "82149c13-9474-465e-8232-7ee9463a5c16",
      "77e8b64d-1e48-4303-9569-bd6104b4ef77",
      "86e8a342-5b1a-4e19-b8b9-2965c04293e0",
      "dc677681-2c1d-4126-9be6-1e51269060bd",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5600,
      y: 1280,
    },
    name: "BattleField",
    id: "32881a6e-e91c-42b7-ad7b-80aa76a034f9",
    left: "cf7c8c32-3ad2-4481-a7b3-37a5f3c9bc07",
    right: "b31defe8-e0cf-4b3b-bf8b-d5357410230b",
    edges: [
      "553e0693-cdae-49ae-8771-f09a71ce436b",
      "476e712b-d2d9-40af-a357-b9e95c2abbfc",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5780,
      y: 1280,
    },
    name: "RedTreasureField",
    id: "b31defe8-e0cf-4b3b-bf8b-d5357410230b",
    left: "32881a6e-e91c-42b7-ad7b-80aa76a034f9",
    top: "dcdb4871-3b5e-49c0-98c8-cf4f724da90c",
    right: "d8cc33e4-38ca-432b-abec-778a19553f21",
    edges: [
      "476e712b-d2d9-40af-a357-b9e95c2abbfc",
      "77e8b64d-1e48-4303-9569-bd6104b4ef77",
      "85347367-fb6c-4010-8503-83e0fa6315b7",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5780,
      y: 880,
    },
    name: "BattleField",
    id: "fbe34faa-f385-4dec-a65e-c2047207f357",
    bottom: "dcdb4871-3b5e-49c0-98c8-cf4f724da90c",
    top: "d1eb8310-da9b-4686-ba53-4a350c879483",
    edges: [
      "86e8a342-5b1a-4e19-b8b9-2965c04293e0",
      "0f988822-5151-407b-8545-a7cf2901b690",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5780,
      y: 660,
    },
    name: "MagicBookField",
    id: "d1eb8310-da9b-4686-ba53-4a350c879483",
    bottom: "fbe34faa-f385-4dec-a65e-c2047207f357",
    right: "8142bc4e-6005-44c6-a932-8dbf504a9a6d",
    edges: [
      "0f988822-5151-407b-8545-a7cf2901b690",
      "4bc063c5-9f39-4e87-8d7f-31865dac7dda",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5940,
      y: 660,
    },
    name: "BattleField",
    id: "8142bc4e-6005-44c6-a932-8dbf504a9a6d",
    left: "d1eb8310-da9b-4686-ba53-4a350c879483",
    top: "f830ab25-4d38-41c6-94f0-c666a579898e",
    edges: [
      "4bc063c5-9f39-4e87-8d7f-31865dac7dda",
      "fe791b2c-c31b-4c88-bc93-60eaf70f38fa",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5940,
      y: 380,
    },
    name: "TreasureField",
    id: "f830ab25-4d38-41c6-94f0-c666a579898e",
    bottom: "8142bc4e-6005-44c6-a932-8dbf504a9a6d",
    right: "0a83357a-3737-4f23-b262-222f10e6313f",
    left: "9ad0ccea-3959-4374-8cd5-87eb25d049c8",
    edges: [
      "fe791b2c-c31b-4c88-bc93-60eaf70f38fa",
      "58755b9e-fc1f-4773-bac6-2774cbda2f9c",
      "54999d6e-cb2b-46b6-b6b5-2d0569b80ad0",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6120,
      y: 380,
    },
    name: "TreasureField",
    id: "0a83357a-3737-4f23-b262-222f10e6313f",
    left: "f830ab25-4d38-41c6-94f0-c666a579898e",
    right: "8778afea-3860-4b6f-b0e9-c6452cd45cd6",
    edges: [
      "58755b9e-fc1f-4773-bac6-2774cbda2f9c",
      "a2dcf98b-217d-4e1a-b707-9bb0a2a46a19",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5700,
      y: 380,
    },
    name: "BattleField",
    id: "9ad0ccea-3959-4374-8cd5-87eb25d049c8",
    right: "f830ab25-4d38-41c6-94f0-c666a579898e",
    left: "4ab803fa-af4e-485f-b9f9-ed40c7b5168e",
    edges: [
      "54999d6e-cb2b-46b6-b6b5-2d0569b80ad0",
      "0dccfc6d-70f2-446a-b0da-c8ad63c40ebc",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5440,
      y: 380,
    },
    name: "BattleField",
    id: "4ab803fa-af4e-485f-b9f9-ed40c7b5168e",
    right: "9ad0ccea-3959-4374-8cd5-87eb25d049c8",
    bottom: "190d20c9-43d5-4f9f-9091-38458143c741",
    left: "070f4748-dd4a-4833-aee7-e681d14f2208",
    edges: [
      "0dccfc6d-70f2-446a-b0da-c8ad63c40ebc",
      "cb744103-c9f8-494a-92cf-360b9543fa8d",
      "3dee240e-aadb-455b-a859-f50568a00571",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5440,
      y: 520,
    },
    name: "BattleField",
    id: "190d20c9-43d5-4f9f-9091-38458143c741",
    top: "4ab803fa-af4e-485f-b9f9-ed40c7b5168e",
    left: "f8932ec5-3f1b-4544-967c-fdacceeedf76",
    edges: [
      "cb744103-c9f8-494a-92cf-360b9543fa8d",
      "6469500e-3985-48ce-a86e-2977284fdc0f",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5040,
      y: 520,
    },
    name: "BattleField",
    id: "f8932ec5-3f1b-4544-967c-fdacceeedf76",
    right: "190d20c9-43d5-4f9f-9091-38458143c741",
    top: "ead2be82-0949-4b6b-8f0a-395acf3d68d5",
    edges: [
      "6469500e-3985-48ce-a86e-2977284fdc0f",
      "108f14cd-5730-4e40-a892-e2020f14f0d8",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5040,
      y: 380,
    },
    name: "TreasureField",
    id: "ead2be82-0949-4b6b-8f0a-395acf3d68d5",
    bottom: "f8932ec5-3f1b-4544-967c-fdacceeedf76",
    right: "070f4748-dd4a-4833-aee7-e681d14f2208",
    left: "95029cc6-df57-4a7c-bb9b-d35d992b5e0d",
    edges: [
      "108f14cd-5730-4e40-a892-e2020f14f0d8",
      "9a245823-9600-4dea-8fb0-9ab5d07a8f18",
      "75da8bdb-3e9e-4db2-a974-28741ae11069",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5240,
      y: 380,
    },
    name: "MagicBookField",
    id: "070f4748-dd4a-4833-aee7-e681d14f2208",
    left: "ead2be82-0949-4b6b-8f0a-395acf3d68d5",
    right: "4ab803fa-af4e-485f-b9f9-ed40c7b5168e",
    edges: [
      "9a245823-9600-4dea-8fb0-9ab5d07a8f18",
      "3dee240e-aadb-455b-a859-f50568a00571",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4880,
      y: 380,
    },
    name: "CollectMoneyField",
    id: "95029cc6-df57-4a7c-bb9b-d35d992b5e0d",
    right: "ead2be82-0949-4b6b-8f0a-395acf3d68d5",
    bottom: "2ec3f1d2-ed0a-42ad-8493-ef8446e9dde2",
    edges: [
      "75da8bdb-3e9e-4db2-a974-28741ae11069",
      "0b5dbaee-4237-4b3e-8eb2-814462412a9f",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4880,
      y: 520,
    },
    name: "BattleField",
    id: "2ec3f1d2-ed0a-42ad-8493-ef8446e9dde2",
    top: "95029cc6-df57-4a7c-bb9b-d35d992b5e0d",
    bottom: "50dc5469-5f68-4fe8-9755-6b5b95577101",
    edges: [
      "0b5dbaee-4237-4b3e-8eb2-814462412a9f",
      "7cfba16a-8173-4723-8b33-34bdddf60eb8",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4880,
      y: 660,
    },
    name: "TreasureField",
    id: "50dc5469-5f68-4fe8-9755-6b5b95577101",
    top: "2ec3f1d2-ed0a-42ad-8493-ef8446e9dde2",
    left: "4c947556-8d0e-4d79-a24a-416386f2e40c",
    edges: [
      "7cfba16a-8173-4723-8b33-34bdddf60eb8",
      "aa65d8e5-f247-4f06-bf7f-0a3082aa7f47",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 4720,
      y: 660,
    },
    name: "VillageField",
    id: "4c947556-8d0e-4d79-a24a-416386f2e40c",
    right: "50dc5469-5f68-4fe8-9755-6b5b95577101",
    bottom: "ae494116-38d4-44dc-af55-b764863fda18",
    edges: [
      "aa65d8e5-f247-4f06-bf7f-0a3082aa7f47",
      "074f1e8f-ccf4-4633-82f6-3d9cdf022f29",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5960,
      y: 1100,
    },
    name: "BattleField",
    id: "fcea56f3-edd8-4d2f-8b7b-1d703cda68cb",
    left: "dcdb4871-3b5e-49c0-98c8-cf4f724da90c",
    right: "e4abf82c-a900-4dac-8776-36802dccbb3d",
    edges: [
      "dc677681-2c1d-4126-9be6-1e51269060bd",
      "7c9fa105-1d18-4fc4-a121-84682b515a8a",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6120,
      y: 1100,
    },
    name: "BattleField",
    id: "e4abf82c-a900-4dac-8776-36802dccbb3d",
    left: "fcea56f3-edd8-4d2f-8b7b-1d703cda68cb",
    right: "26937dd4-6530-4cd5-bb3a-7b7f065c2ad5",
    edges: [
      "7c9fa105-1d18-4fc4-a121-84682b515a8a",
      "582041f7-3883-4eac-836f-32ee53bd6431",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6300,
      y: 1100,
    },
    name: "BattleField",
    id: "26937dd4-6530-4cd5-bb3a-7b7f065c2ad5",
    left: "e4abf82c-a900-4dac-8776-36802dccbb3d",
    bottom: "75ab1285-3a82-4361-b40c-3a41bbbd9d7b",
    edges: [
      "582041f7-3883-4eac-836f-32ee53bd6431",
      "6ec865a1-1c74-484b-bbb5-6bb02b8f6210",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6300,
      y: 1280,
    },
    name: "BattleField",
    id: "75ab1285-3a82-4361-b40c-3a41bbbd9d7b",
    top: "26937dd4-6530-4cd5-bb3a-7b7f065c2ad5",
    right: "f8171b03-884a-4214-9d51-77c0e065f83f",
    edges: [
      "6ec865a1-1c74-484b-bbb5-6bb02b8f6210",
      "011100c1-85b5-4163-a7fd-b65568e0d6f3",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6500,
      y: 1280,
    },
    name: "BattleField",
    id: "f8171b03-884a-4214-9d51-77c0e065f83f",
    left: "75ab1285-3a82-4361-b40c-3a41bbbd9d7b",
    right: "85768a72-4f25-4fe5-8ab3-35ee315a586a",
    edges: [
      "011100c1-85b5-4163-a7fd-b65568e0d6f3",
      "c44c3f42-dc11-4310-9a1c-1fa96a516912",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6700,
      y: 1280,
    },
    name: "TreasureField",
    id: "85768a72-4f25-4fe5-8ab3-35ee315a586a",
    left: "f8171b03-884a-4214-9d51-77c0e065f83f",
    bottom: "342e3557-7a07-4dc1-8510-54ef022461ee",
    top: "e063e854-de3b-4bb9-b2be-b381faa23eaa",
    edges: [
      "c44c3f42-dc11-4310-9a1c-1fa96a516912",
      "83dbf908-b7c0-4a06-b898-149a8c374296",
      "2e529be6-1bfe-40b3-95bb-ff23f7963b16",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6700,
      y: 1480,
    },
    name: "BattleField",
    id: "342e3557-7a07-4dc1-8510-54ef022461ee",
    top: "85768a72-4f25-4fe5-8ab3-35ee315a586a",
    bottom: "4f8727a8-167b-4ef5-8130-6981c6b381cb",
    edges: [
      "83dbf908-b7c0-4a06-b898-149a8c374296",
      "c7a60d3d-159b-4564-beea-0343dfd0dafa",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6700,
      y: 1680,
    },
    name: "BattleField",
    id: "4f8727a8-167b-4ef5-8130-6981c6b381cb",
    top: "342e3557-7a07-4dc1-8510-54ef022461ee",
    right: "ac631c99-139e-449d-9439-d5e991b9264f",
    edges: [
      "c7a60d3d-159b-4564-beea-0343dfd0dafa",
      "4a1c4477-3e08-4768-94c0-e0c982c5cbf4",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6900,
      y: 1680,
    },
    name: "VillageField",
    id: "ac631c99-139e-449d-9439-d5e991b9264f",
    left: "4f8727a8-167b-4ef5-8130-6981c6b381cb",
    edges: ["4a1c4477-3e08-4768-94c0-e0c982c5cbf4"],
    area: "Russia",
  },
  {
    position: {
      x: 6700,
      y: 1100,
    },
    name: "BattleField",
    id: "e063e854-de3b-4bb9-b2be-b381faa23eaa",
    bottom: "85768a72-4f25-4fe5-8ab3-35ee315a586a",
    right: "a5d495c7-c0f4-4598-841b-d57271d3a4bc",
    edges: [
      "2e529be6-1bfe-40b3-95bb-ff23f7963b16",
      "7669fc8e-b492-4d45-8a8a-f42c39ffce5f",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6920,
      y: 1100,
    },
    name: "BattleField",
    id: "a5d495c7-c0f4-4598-841b-d57271d3a4bc",
    left: "e063e854-de3b-4bb9-b2be-b381faa23eaa",
    right: "e04306ed-97b6-46c5-98ec-4cbdb66ab497",
    edges: [
      "7669fc8e-b492-4d45-8a8a-f42c39ffce5f",
      "2a454058-a957-467d-8aae-4290ade07a64",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 7140,
      y: 1100,
    },
    name: "MagicBookField",
    id: "e04306ed-97b6-46c5-98ec-4cbdb66ab497",
    left: "a5d495c7-c0f4-4598-841b-d57271d3a4bc",
    bottom: "101e444e-6b17-48a4-b752-0e25a15ea17d",
    edges: [
      "2a454058-a957-467d-8aae-4290ade07a64",
      "d72562a5-e40a-4925-a1f3-9993388a8478",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 7140,
      y: 1280,
    },
    name: "BattleField",
    id: "101e444e-6b17-48a4-b752-0e25a15ea17d",
    top: "e04306ed-97b6-46c5-98ec-4cbdb66ab497",
    right: "054360d8-c7a9-4aca-b293-74d8ff1dceda",
    edges: [
      "d72562a5-e40a-4925-a1f3-9993388a8478",
      "870d19bf-f48b-4f3b-9233-27bd14cd44f2",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 7420,
      y: 1300,
    },
    name: "TreasureField",
    id: "054360d8-c7a9-4aca-b293-74d8ff1dceda",
    left: "101e444e-6b17-48a4-b752-0e25a15ea17d",
    right: "feaaa359-1643-4104-8fbf-ee877cbc3f34",
    edges: [
      "870d19bf-f48b-4f3b-9233-27bd14cd44f2",
      "78a4f852-c28b-406d-a6bc-a667065c1e7e",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 7700,
      y: 1280,
    },
    name: "BattleField",
    id: "feaaa359-1643-4104-8fbf-ee877cbc3f34",
    left: "054360d8-c7a9-4aca-b293-74d8ff1dceda",
    top: "5275a5cc-3646-4504-8c98-10ad9d4335c1",
    edges: [
      "78a4f852-c28b-406d-a6bc-a667065c1e7e",
      "4b458349-5489-40d3-b1c8-730baa9a2a0e",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 7720,
      y: 960,
    },
    name: "TreasureField",
    id: "5275a5cc-3646-4504-8c98-10ad9d4335c1",
    bottom: "feaaa359-1643-4104-8fbf-ee877cbc3f34",
    left: "efde90c9-5358-498f-ac87-8e192d9aab99",
    top: "4ba86761-2984-4c1c-bc69-c090e4a14920",
    edges: [
      "4b458349-5489-40d3-b1c8-730baa9a2a0e",
      "efabe1da-a0a8-4b6b-a81d-0d1d856359ad",
      "a1183be7-e61f-44c4-b143-45d8484e7f79",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 7460,
      y: 960,
    },
    name: "BattleField",
    id: "efde90c9-5358-498f-ac87-8e192d9aab99",
    right: "5275a5cc-3646-4504-8c98-10ad9d4335c1",
    top: "560942d6-6ae0-4a08-9484-66779ca0e442",
    edges: [
      "efabe1da-a0a8-4b6b-a81d-0d1d856359ad",
      "f0ec3099-1fe4-40f2-9fa7-9b06e877fade",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6300,
      y: 380,
    },
    name: "BattleField",
    id: "8778afea-3860-4b6f-b0e9-c6452cd45cd6",
    left: "0a83357a-3737-4f23-b262-222f10e6313f",
    right: "c8029b99-b3ec-4a72-a8b9-b2b0b07033f2",
    edges: [
      "a2dcf98b-217d-4e1a-b707-9bb0a2a46a19",
      "2d71c955-6136-4882-a532-f71e76ef28bc",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6540,
      y: 380,
    },
    name: "TreasureField",
    id: "c8029b99-b3ec-4a72-a8b9-b2b0b07033f2",
    left: "8778afea-3860-4b6f-b0e9-c6452cd45cd6",
    bottom: "ca7774a9-73cf-4514-b00e-047fd6629591",
    edges: [
      "2d71c955-6136-4882-a532-f71e76ef28bc",
      "070ddb01-574e-4f02-84a2-084619d345e1",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6500,
      y: 500,
    },
    name: "BattleField",
    id: "ca7774a9-73cf-4514-b00e-047fd6629591",
    top: "c8029b99-b3ec-4a72-a8b9-b2b0b07033f2",
    right: "9443ca65-8362-4c9b-a4e9-83586b4174ad",
    edges: [
      "070ddb01-574e-4f02-84a2-084619d345e1",
      "787452af-178f-4cd8-8014-741658721d57",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6840,
      y: 500,
    },
    name: "CollectMoneyField",
    id: "9443ca65-8362-4c9b-a4e9-83586b4174ad",
    left: "ca7774a9-73cf-4514-b00e-047fd6629591",
    bottom: "fad32c7b-dafb-4f46-8b7f-3b0d5764abf8",
    edges: [
      "787452af-178f-4cd8-8014-741658721d57",
      "bdd3d98f-5038-42ac-8c3a-cd40b02077f9",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 6780,
      y: 640,
    },
    name: "BattleField",
    id: "fad32c7b-dafb-4f46-8b7f-3b0d5764abf8",
    top: "9443ca65-8362-4c9b-a4e9-83586b4174ad",
    right: "eab05b24-e29e-4494-bdc7-dbfcb4fd7782",
    edges: [
      "bdd3d98f-5038-42ac-8c3a-cd40b02077f9",
      "555cc25b-b61a-4ad4-ab7c-e82e1f50dd94",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 7160,
      y: 640,
    },
    name: "CollectMoneyField",
    id: "eab05b24-e29e-4494-bdc7-dbfcb4fd7782",
    left: "fad32c7b-dafb-4f46-8b7f-3b0d5764abf8",
    bottom: "4f495641-ada3-4683-b1dd-ecdaddeab7b2",
    edges: [
      "555cc25b-b61a-4ad4-ab7c-e82e1f50dd94",
      "4c82503c-e756-447b-8669-3827f556b460",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 7100,
      y: 780,
    },
    name: "BattleField",
    id: "4f495641-ada3-4683-b1dd-ecdaddeab7b2",
    top: "eab05b24-e29e-4494-bdc7-dbfcb4fd7782",
    right: "560942d6-6ae0-4a08-9484-66779ca0e442",
    edges: [
      "4c82503c-e756-447b-8669-3827f556b460",
      "09416d59-7f4b-4c5d-b8aa-add7f6eb4778",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 7460,
      y: 780,
    },
    name: "CollectMoneyField",
    id: "560942d6-6ae0-4a08-9484-66779ca0e442",
    left: "4f495641-ada3-4683-b1dd-ecdaddeab7b2",
    bottom: "efde90c9-5358-498f-ac87-8e192d9aab99",
    edges: [
      "09416d59-7f4b-4c5d-b8aa-add7f6eb4778",
      "f0ec3099-1fe4-40f2-9fa7-9b06e877fade",
    ],
    area: "Russia",
  },
  {
    position: {
      x: 5960,
      y: 1280,
    },
    name: "WorldTransferField",
    id: "d8cc33e4-38ca-432b-abec-778a19553f21",
    left: "b31defe8-e0cf-4b3b-bf8b-d5357410230b",
    edges: ["85347367-fb6c-4010-8503-83e0fa6315b7"],
    area: "Russia",
  },
];
const northAmericaVertices: Vertex[] = [
  {
    position: {
      x: 7720,
      y: 760,
    },
    name: "BattleField",
    id: "4ba86761-2984-4c1c-bc69-c090e4a14920",
    bottom: "5275a5cc-3646-4504-8c98-10ad9d4335c1",
    right: "c8be14cd-1366-41bb-b6f9-460890c301da",
    edges: [
      "a1183be7-e61f-44c4-b143-45d8484e7f79",
      "a46a9c0c-c52f-4e74-951d-27fa778c7326",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 7960,
      y: 760,
    },
    name: "BattleField",
    id: "c8be14cd-1366-41bb-b6f9-460890c301da",
    left: "4ba86761-2984-4c1c-bc69-c090e4a14920",
    right: "149099a0-630d-4804-993d-70ae09b85e3e",
    edges: [
      "a46a9c0c-c52f-4e74-951d-27fa778c7326",
      "7c6156fe-05ff-46fe-a9f9-e9450c19ebbd",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8180,
      y: 760,
    },
    name: "TreasureField",
    id: "149099a0-630d-4804-993d-70ae09b85e3e",
    left: "c8be14cd-1366-41bb-b6f9-460890c301da",
    bottom: "f73c1190-388e-4368-b063-7902f3bf8060",
    edges: [
      "7c6156fe-05ff-46fe-a9f9-e9450c19ebbd",
      "72f0645b-8798-4001-8ddd-32fe249a10ad",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8180,
      y: 960,
    },
    name: "BattleField",
    id: "f73c1190-388e-4368-b063-7902f3bf8060",
    top: "149099a0-630d-4804-993d-70ae09b85e3e",
    left: "1a7df359-78df-4b16-82cd-0f27fb981351",
    bottom: "aa70af3b-dffa-485d-826a-a0bda1ed2af3",
    edges: [
      "72f0645b-8798-4001-8ddd-32fe249a10ad",
      "8e7d631d-0a5b-4286-8c9e-5ceb4b037df6",
      "d5e8117b-f1d9-466e-bd9d-47226ce3b65e",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 7960,
      y: 960,
    },
    name: "BattleField",
    id: "1a7df359-78df-4b16-82cd-0f27fb981351",
    right: "f73c1190-388e-4368-b063-7902f3bf8060",
    bottom: "9dbd73e9-1a6b-4b94-839b-19c29b66a061",
    edges: [
      "8e7d631d-0a5b-4286-8c9e-5ceb4b037df6",
      "2e6c5689-39b6-48c3-8121-63b52c7de74e",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 7960,
      y: 1280,
    },
    name: "BattleField",
    id: "9dbd73e9-1a6b-4b94-839b-19c29b66a061",
    top: "1a7df359-78df-4b16-82cd-0f27fb981351",
    right: "fe9f222d-6241-4e47-b6cb-53ccb2347042",
    edges: [
      "2e6c5689-39b6-48c3-8121-63b52c7de74e",
      "a42ad9f1-575c-4968-97f0-575aff9ae29b",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8180,
      y: 1280,
    },
    name: "TreasureField",
    id: "fe9f222d-6241-4e47-b6cb-53ccb2347042",
    left: "9dbd73e9-1a6b-4b94-839b-19c29b66a061",
    top: "aa70af3b-dffa-485d-826a-a0bda1ed2af3",
    right: "d4faf04a-0710-4745-8e25-31d1411d4eba",
    edges: [
      "a42ad9f1-575c-4968-97f0-575aff9ae29b",
      "1ceeffde-ef7a-4e1f-b9c3-b116dc89036b",
      "da58876a-ebc7-4e31-ae0e-2b6b9cca0178",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8180,
      y: 1120,
    },
    name: "BattleField",
    id: "aa70af3b-dffa-485d-826a-a0bda1ed2af3",
    top: "f73c1190-388e-4368-b063-7902f3bf8060",
    bottom: "fe9f222d-6241-4e47-b6cb-53ccb2347042",
    edges: [
      "d5e8117b-f1d9-466e-bd9d-47226ce3b65e",
      "1ceeffde-ef7a-4e1f-b9c3-b116dc89036b",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8400,
      y: 1280,
    },
    name: "BattleField",
    id: "d4faf04a-0710-4745-8e25-31d1411d4eba",
    left: "fe9f222d-6241-4e47-b6cb-53ccb2347042",
    right: "f7b437ff-067b-4b40-b0fa-49bc34211cc8",
    edges: [
      "da58876a-ebc7-4e31-ae0e-2b6b9cca0178",
      "1d12dac1-538f-4c18-84ec-72adb22de4a4",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8600,
      y: 1280,
    },
    name: "BattleField",
    id: "f7b437ff-067b-4b40-b0fa-49bc34211cc8",
    left: "d4faf04a-0710-4745-8e25-31d1411d4eba",
    right: "e895fb08-fcfb-4ab3-bf46-278343fbc028",
    edges: [
      "1d12dac1-538f-4c18-84ec-72adb22de4a4",
      "0d0c34e3-8e9a-4479-9060-252e1e9d9306",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8820,
      y: 1280,
    },
    name: "MagicBookField",
    id: "e895fb08-fcfb-4ab3-bf46-278343fbc028",
    left: "f7b437ff-067b-4b40-b0fa-49bc34211cc8",
    top: "a9d3f4f8-c713-4506-b90e-5586792fc904",
    bottom: "7231f26f-1906-4bf2-bdde-52b5abd1266b",
    edges: [
      "0d0c34e3-8e9a-4479-9060-252e1e9d9306",
      "3520ee99-fd37-4dd3-aa1e-061b6767a1b8",
      "7dcf8f21-c6b2-46a0-bf72-c3cae1c74f52",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8840,
      y: 1480,
    },
    name: "BattleField",
    id: "7231f26f-1906-4bf2-bdde-52b5abd1266b",
    top: "e895fb08-fcfb-4ab3-bf46-278343fbc028",
    right: "b1755364-db98-4512-9074-662437d4d094",
    edges: [
      "7dcf8f21-c6b2-46a0-bf72-c3cae1c74f52",
      "be549ca9-9b97-4b78-945a-9f26dd2248a8",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8860,
      y: 1100,
    },
    name: "BattleField",
    id: "a9d3f4f8-c713-4506-b90e-5586792fc904",
    bottom: "e895fb08-fcfb-4ab3-bf46-278343fbc028",
    right: "d6ea39b0-e83b-48ee-bedd-3191ce747cf2",
    edges: [
      "3520ee99-fd37-4dd3-aa1e-061b6767a1b8",
      "5980dd13-450e-4e65-ba74-eaea5969609c",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9060,
      y: 1100,
    },
    name: "BattleField",
    id: "d6ea39b0-e83b-48ee-bedd-3191ce747cf2",
    left: "a9d3f4f8-c713-4506-b90e-5586792fc904",
    top: "1492d2de-a2ae-4fa8-82b5-16b186163e0b",
    right: "4ed96b84-16e5-42ce-86ea-c46661298638",
    edges: [
      "5980dd13-450e-4e65-ba74-eaea5969609c",
      "136e9eb7-1007-4c88-a366-29d73f2dc944",
      "24506256-e39c-4225-8949-e70053370a77",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9060,
      y: 820,
    },
    name: "CollectMoneyField",
    id: "1492d2de-a2ae-4fa8-82b5-16b186163e0b",
    top: "dcc3324c-0a24-4166-8318-5722e433f9eb",
    bottom: "d6ea39b0-e83b-48ee-bedd-3191ce747cf2",
    edges: [
      "136e9eb7-1007-4c88-a366-29d73f2dc944",
      "c74ac970-1ae7-42fb-a4c9-139b14be8041",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9080,
      y: 1480,
    },
    name: "BattleField",
    id: "b1755364-db98-4512-9074-662437d4d094",
    left: "7231f26f-1906-4bf2-bdde-52b5abd1266b",
    bottom: "e54d56c5-0b24-4799-923b-f5ef4cb16ddb",
    edges: [
      "be549ca9-9b97-4b78-945a-9f26dd2248a8",
      "f1122707-ede6-4144-9de0-132a93d878c7",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9240,
      y: 1100,
    },
    name: "ChruchField",
    id: "4ed96b84-16e5-42ce-86ea-c46661298638",
    left: "d6ea39b0-e83b-48ee-bedd-3191ce747cf2",
    right: "9c015b83-a691-4051-b003-2f0c565d943d",
    bottom: "916c14e4-ea15-4339-9929-95a3cbbd1448",
    edges: [
      "24506256-e39c-4225-8949-e70053370a77",
      "817583e0-1d55-475f-9f6b-6e37e352928f",
      "191659a1-87a5-4260-8aa7-5e527bae6f90",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9440,
      y: 1100,
    },
    name: "BattleField",
    id: "9c015b83-a691-4051-b003-2f0c565d943d",
    left: "4ed96b84-16e5-42ce-86ea-c46661298638",
    right: "380d11df-4522-4b63-bbf8-b57dfe562e44",
    edges: [
      "817583e0-1d55-475f-9f6b-6e37e352928f",
      "e63953f7-e788-45c3-bda6-400129e72384",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9640,
      y: 1100,
    },
    name: "BattleField",
    id: "380d11df-4522-4b63-bbf8-b57dfe562e44",
    left: "9c015b83-a691-4051-b003-2f0c565d943d",
    bottom: "5a77623c-76e3-4503-83a7-81077ece764b",
    right: "e73c10f9-75ae-4309-aa1e-7c5a5bc2bb07",
    edges: [
      "e63953f7-e788-45c3-bda6-400129e72384",
      "b6548525-8645-4d01-b99f-f6beb7d7b233",
      "6e983c8a-ab98-4f6c-8121-50c7f929cefa",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9640,
      y: 1280,
    },
    name: "BattleField",
    id: "5a77623c-76e3-4503-83a7-81077ece764b",
    top: "380d11df-4522-4b63-bbf8-b57dfe562e44",
    left: "916c14e4-ea15-4339-9929-95a3cbbd1448",
    bottom: "f43a0569-9c47-42ab-8c1f-2338d143de66",
    edges: [
      "b6548525-8645-4d01-b99f-f6beb7d7b233",
      "71e75b15-b9f6-49b8-80a3-8ec18e441277",
      "f0204263-9751-44b7-9de5-3adbf592efe8",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9240,
      y: 1280,
    },
    name: "TreasureField",
    id: "916c14e4-ea15-4339-9929-95a3cbbd1448",
    right: "5a77623c-76e3-4503-83a7-81077ece764b",
    top: "4ed96b84-16e5-42ce-86ea-c46661298638",
    edges: [
      "71e75b15-b9f6-49b8-80a3-8ec18e441277",
      "191659a1-87a5-4260-8aa7-5e527bae6f90",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9080,
      y: 1640,
    },
    name: "BattleField",
    id: "e54d56c5-0b24-4799-923b-f5ef4cb16ddb",
    top: "b1755364-db98-4512-9074-662437d4d094",
    right: "b165e202-8b17-47ba-b806-fc56a2668135",
    edges: [
      "f1122707-ede6-4144-9de0-132a93d878c7",
      "8f6f69c1-5920-4e28-93e2-06fc53aa7718",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9300,
      y: 1640,
    },
    name: "BattleField",
    id: "b165e202-8b17-47ba-b806-fc56a2668135",
    left: "e54d56c5-0b24-4799-923b-f5ef4cb16ddb",
    bottom: "2734c943-2057-4493-8681-5a1a2002819c",
    edges: [
      "8f6f69c1-5920-4e28-93e2-06fc53aa7718",
      "8f0003c0-cd0a-4f11-a26e-cb87baaa21d7",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9820,
      y: 1100,
    },
    name: "MagicStoreField",
    id: "e73c10f9-75ae-4309-aa1e-7c5a5bc2bb07",
    left: "380d11df-4522-4b63-bbf8-b57dfe562e44",
    bottom: "45b9a967-380c-47db-8723-24fa81c8b9d5",
    edges: [
      "6e983c8a-ab98-4f6c-8121-50c7f929cefa",
      "003784f7-4a15-47cf-a5a8-a8e7e78516eb",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9640,
      y: 1440,
    },
    name: "TreasureField",
    id: "f43a0569-9c47-42ab-8c1f-2338d143de66",
    top: "5a77623c-76e3-4503-83a7-81077ece764b",
    right: "45b9a967-380c-47db-8723-24fa81c8b9d5",
    edges: [
      "f0204263-9751-44b7-9de5-3adbf592efe8",
      "a0cbce1a-9e7f-49b7-8445-8759f4f28a16",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9820,
      y: 1440,
    },
    name: "BattleField",
    id: "45b9a967-380c-47db-8723-24fa81c8b9d5",
    left: "f43a0569-9c47-42ab-8c1f-2338d143de66",
    top: "e73c10f9-75ae-4309-aa1e-7c5a5bc2bb07",
    right: "5e12c82e-f03c-4201-ab8d-5f851d3f9935",
    edges: [
      "a0cbce1a-9e7f-49b7-8445-8759f4f28a16",
      "003784f7-4a15-47cf-a5a8-a8e7e78516eb",
      "c7f9dba7-5b65-42fa-af09-d9fa66f081e7",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9300,
      y: 1820,
    },
    name: "BattleField",
    id: "2734c943-2057-4493-8681-5a1a2002819c",
    top: "b165e202-8b17-47ba-b806-fc56a2668135",
    right: "82c6c443-887f-4942-9432-58b218aeaf09",
    left: "c3339d60-ef80-4f9a-80b8-277b8fe5f1b5",
    bottom: "52d134cb-b091-46c2-bc31-764aaedb88b7",
    edges: [
      "8f0003c0-cd0a-4f11-a26e-cb87baaa21d7",
      "9b27254f-58f6-4bec-9b2b-f7832beb206b",
      "23ff1a1b-786c-4dcc-a023-97abd073b78d",
      "78105b3a-4e87-41ee-8e96-6cd40435f3f6",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9540,
      y: 1820,
    },
    name: "WorldTransferField",
    id: "82c6c443-887f-4942-9432-58b218aeaf09",
    left: "2734c943-2057-4493-8681-5a1a2002819c",
    right: "739a26fd-a986-4ee8-9730-ce58740c3b9e",
    edges: [
      "9b27254f-58f6-4bec-9b2b-f7832beb206b",
      "87756014-b2ca-4c02-9229-7e4a290bffe2",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9800,
      y: 1820,
    },
    name: "GroceryStoreField",
    id: "739a26fd-a986-4ee8-9730-ce58740c3b9e",
    left: "82c6c443-887f-4942-9432-58b218aeaf09",
    right: "0413aedb-0d34-4c9a-bf60-cd0fc4ee8923",
    bottom: "9a8608fa-437c-47eb-abb0-420820daed52",
    edges: [
      "87756014-b2ca-4c02-9229-7e4a290bffe2",
      "a6174a41-3e72-432a-aa43-e65450a97169",
      "53b9f606-2e60-40d5-9473-65eafbdbce41",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10020,
      y: 1440,
    },
    name: "BattleField",
    id: "5e12c82e-f03c-4201-ab8d-5f851d3f9935",
    left: "45b9a967-380c-47db-8723-24fa81c8b9d5",
    bottom: "0413aedb-0d34-4c9a-bf60-cd0fc4ee8923",
    right: "4dc50917-85de-4eef-8a02-aa89b315766c",
    edges: [
      "c7f9dba7-5b65-42fa-af09-d9fa66f081e7",
      "666dcee8-4710-420b-b4a9-9c2902800268",
      "c8c552d3-ff00-4ce9-ba27-a53cdb4a8479",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10020,
      y: 1820,
    },
    name: "BattleField",
    id: "0413aedb-0d34-4c9a-bf60-cd0fc4ee8923",
    top: "5e12c82e-f03c-4201-ab8d-5f851d3f9935",
    left: "739a26fd-a986-4ee8-9730-ce58740c3b9e",
    right: "050aaa74-fd68-4b69-bdbc-848d3e548406",
    edges: [
      "666dcee8-4710-420b-b4a9-9c2902800268",
      "a6174a41-3e72-432a-aa43-e65450a97169",
      "ddcc2c8d-75a8-4e72-917d-412888424d9e",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9080,
      y: 1820,
    },
    name: "BattleField",
    id: "c3339d60-ef80-4f9a-80b8-277b8fe5f1b5",
    right: "2734c943-2057-4493-8681-5a1a2002819c",
    left: "54cc7e66-22d9-4750-b89a-121e74bfe608",
    edges: [
      "23ff1a1b-786c-4dcc-a023-97abd073b78d",
      "2031f8d1-edc8-4545-a43f-1bda6aebea5a",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8860,
      y: 1820,
    },
    name: "VillageField",
    id: "54cc7e66-22d9-4750-b89a-121e74bfe608",
    right: "c3339d60-ef80-4f9a-80b8-277b8fe5f1b5",
    edges: ["2031f8d1-edc8-4545-a43f-1bda6aebea5a"],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10220,
      y: 1440,
    },
    name: "VillageField",
    id: "4dc50917-85de-4eef-8a02-aa89b315766c",
    left: "5e12c82e-f03c-4201-ab8d-5f851d3f9935",
    right: "cdda4ec5-0d58-466d-b1f0-1b9c7a402198",
    edges: [
      "c8c552d3-ff00-4ce9-ba27-a53cdb4a8479",
      "45e70d52-af99-4cdc-9328-4583282109cd",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10420,
      y: 1440,
    },
    name: "BattleField",
    id: "cdda4ec5-0d58-466d-b1f0-1b9c7a402198",
    left: "4dc50917-85de-4eef-8a02-aa89b315766c",
    top: "dac3b5c1-d873-4139-84ae-25e1d1d12ce1",
    right: "01c614d7-5076-44de-880c-a8ad3b72851a",
    edges: [
      "45e70d52-af99-4cdc-9328-4583282109cd",
      "5e24dbb9-bb68-41c7-9239-f833ccbce0f5",
      "06e499bb-944a-410b-9b72-c94470857f0b",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10420,
      y: 1260,
    },
    name: "BattleField",
    id: "dac3b5c1-d873-4139-84ae-25e1d1d12ce1",
    bottom: "cdda4ec5-0d58-466d-b1f0-1b9c7a402198",
    top: "9652d737-c4c0-4fc6-ad84-396a9d0b7fc0",
    edges: [
      "5e24dbb9-bb68-41c7-9239-f833ccbce0f5",
      "e340aea6-3753-4ca7-926a-dbd6f86f53ef",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10420,
      y: 1080,
    },
    name: "BattleField",
    id: "9652d737-c4c0-4fc6-ad84-396a9d0b7fc0",
    top: "17d01ec4-e212-443b-9f25-271798ad7eae",
    bottom: "dac3b5c1-d873-4139-84ae-25e1d1d12ce1",
    right: "1c17d900-bb17-4b74-b086-593040af65dd",
    edges: [
      "e340aea6-3753-4ca7-926a-dbd6f86f53ef",
      "e6d996d4-f001-49f5-956b-a84568ff4f81",
      "97b91a6c-3c4b-47f1-80f9-06cf3877f3ca",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10640,
      y: 1080,
    },
    name: "BattleField",
    id: "1c17d900-bb17-4b74-b086-593040af65dd",
    left: "9652d737-c4c0-4fc6-ad84-396a9d0b7fc0",
    bottom: "01c614d7-5076-44de-880c-a8ad3b72851a",
    edges: [
      "e6d996d4-f001-49f5-956b-a84568ff4f81",
      "7d679666-3406-402d-8462-f793102f937b",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10640,
      y: 1440,
    },
    name: "TreasureField",
    id: "01c614d7-5076-44de-880c-a8ad3b72851a",
    top: "1c17d900-bb17-4b74-b086-593040af65dd",
    left: "cdda4ec5-0d58-466d-b1f0-1b9c7a402198",
    bottom: "c66616fd-f9bc-439a-ad82-3777b2db474f",
    right: "2d864683-dd16-48bd-8071-dcb9975a467b",
    edges: [
      "7d679666-3406-402d-8462-f793102f937b",
      "06e499bb-944a-410b-9b72-c94470857f0b",
      "904891db-c07d-438f-bd3e-37852d57027c",
      "70034040-bed3-47e7-99b7-1cd0a1143d68",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10840,
      y: 1440,
    },
    name: "WeaponStoreField",
    id: "2d864683-dd16-48bd-8071-dcb9975a467b",
    left: "01c614d7-5076-44de-880c-a8ad3b72851a",
    bottom: "8c466c93-09fa-427e-a8a4-0515292ffa55",
    edges: [
      "70034040-bed3-47e7-99b7-1cd0a1143d68",
      "3a9e3185-6e0f-4814-b82d-66d2e985e249",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10840,
      y: 1580,
    },
    name: "BattleField",
    id: "8c466c93-09fa-427e-a8a4-0515292ffa55",
    top: "2d864683-dd16-48bd-8071-dcb9975a467b",
    bottom: "4c5b5f51-c948-45b0-b6bc-bca93669ec60",
    right: "277beb3b-f1d1-4dd7-af5c-1548a3b71336",
    edges: [
      "3a9e3185-6e0f-4814-b82d-66d2e985e249",
      "12e2c26f-fa20-4a61-95b5-b539d5998d1d",
      "f5681914-1128-4553-90d6-32181d4f885d",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10840,
      y: 1740,
    },
    name: "MagicBookField",
    id: "4c5b5f51-c948-45b0-b6bc-bca93669ec60",
    top: "8c466c93-09fa-427e-a8a4-0515292ffa55",
    left: "c66616fd-f9bc-439a-ad82-3777b2db474f",
    right: "086d2d3f-21bd-4457-bd05-cff57eff10db",
    edges: [
      "12e2c26f-fa20-4a61-95b5-b539d5998d1d",
      "1d29a7d4-6a5f-4d82-87e2-22657030e01e",
      "c074be00-a500-43b1-bcba-320969a35f96",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10640,
      y: 1740,
    },
    name: "BattleField",
    id: "c66616fd-f9bc-439a-ad82-3777b2db474f",
    top: "01c614d7-5076-44de-880c-a8ad3b72851a",
    right: "4c5b5f51-c948-45b0-b6bc-bca93669ec60",
    left: "55f24b18-76d1-4b14-82b0-2a968a110f2d",
    edges: [
      "904891db-c07d-438f-bd3e-37852d57027c",
      "1d29a7d4-6a5f-4d82-87e2-22657030e01e",
      "9f61731f-99d2-4d8e-8e1f-9f0066d5651f",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10380,
      y: 1740,
    },
    name: "BattleField",
    id: "55f24b18-76d1-4b14-82b0-2a968a110f2d",
    right: "c66616fd-f9bc-439a-ad82-3777b2db474f",
    bottom: "e4b87956-75e9-4e2e-9e55-b6cdb9737fd8",
    edges: [
      "9f61731f-99d2-4d8e-8e1f-9f0066d5651f",
      "1e391606-cce9-4968-a683-fea3530a0937",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10380,
      y: 2060,
    },
    name: "BattleField",
    id: "e4b87956-75e9-4e2e-9e55-b6cdb9737fd8",
    top: "55f24b18-76d1-4b14-82b0-2a968a110f2d",
    right: "175ce3e2-1a06-4a33-91ec-6343b4368bc7",
    edges: [
      "1e391606-cce9-4968-a683-fea3530a0937",
      "733f88d3-0450-4ece-a838-d0b0a3285068",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10240,
      y: 1820,
    },
    name: "BattleField",
    id: "050aaa74-fd68-4b69-bdbc-848d3e548406",
    left: "0413aedb-0d34-4c9a-bf60-cd0fc4ee8923",
    bottom: "b7ee85d1-df0d-4b54-bba1-bdfb0a3435bb",
    edges: [
      "ddcc2c8d-75a8-4e72-917d-412888424d9e",
      "1b48f842-071e-4872-bc5e-159aba8bdff8",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10240,
      y: 2000,
    },
    name: "BattleField",
    id: "b7ee85d1-df0d-4b54-bba1-bdfb0a3435bb",
    top: "050aaa74-fd68-4b69-bdbc-848d3e548406",
    left: "9a8608fa-437c-47eb-abb0-420820daed52",
    bottom: "25d523ae-d9b4-4ae9-8104-ace81dbbfa7b",
    edges: [
      "1b48f842-071e-4872-bc5e-159aba8bdff8",
      "7785d008-0029-48af-ad21-ed7c6cf72e2d",
      "be830994-31a9-4dd3-b34a-180cb7830d6b",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9800,
      y: 2000,
    },
    name: "MagicBookField",
    id: "9a8608fa-437c-47eb-abb0-420820daed52",
    top: "739a26fd-a986-4ee8-9730-ce58740c3b9e",
    right: "b7ee85d1-df0d-4b54-bba1-bdfb0a3435bb",
    bottom: "d3d8d335-cd41-4116-aaf3-b4906597bb1c",
    edges: [
      "53b9f606-2e60-40d5-9473-65eafbdbce41",
      "7785d008-0029-48af-ad21-ed7c6cf72e2d",
      "e149f9b9-e065-4695-9311-28135ec5197f",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10240,
      y: 2240,
    },
    name: "BattleField",
    id: "25d523ae-d9b4-4ae9-8104-ace81dbbfa7b",
    top: "b7ee85d1-df0d-4b54-bba1-bdfb0a3435bb",
    right: "18775afe-0621-4d83-83de-1c189103ffc1",
    edges: [
      "be830994-31a9-4dd3-b34a-180cb7830d6b",
      "2b0ee85a-4ecf-4825-8492-dcb8db9d3569",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10400,
      y: 2240,
    },
    name: "TreasureField",
    id: "18775afe-0621-4d83-83de-1c189103ffc1",
    left: "25d523ae-d9b4-4ae9-8104-ace81dbbfa7b",
    right: "facbd51f-33fe-4e88-964a-2f6d60a0b14d",
    edges: [
      "2b0ee85a-4ecf-4825-8492-dcb8db9d3569",
      "54e4d670-38eb-483f-b99e-b034a29e2939",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10580,
      y: 2240,
    },
    name: "BattleField",
    id: "facbd51f-33fe-4e88-964a-2f6d60a0b14d",
    left: "18775afe-0621-4d83-83de-1c189103ffc1",
    top: "175ce3e2-1a06-4a33-91ec-6343b4368bc7",
    edges: [
      "54e4d670-38eb-483f-b99e-b034a29e2939",
      "2b305037-823b-4024-b247-9dc724a32b71",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10580,
      y: 2060,
    },
    name: "VillageField",
    id: "175ce3e2-1a06-4a33-91ec-6343b4368bc7",
    left: "e4b87956-75e9-4e2e-9e55-b6cdb9737fd8",
    bottom: "facbd51f-33fe-4e88-964a-2f6d60a0b14d",
    edges: [
      "733f88d3-0450-4ece-a838-d0b0a3285068",
      "2b305037-823b-4024-b247-9dc724a32b71",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9140,
      y: 220,
    },
    name: "TreasureField",
    id: "dcc3324c-0a24-4166-8318-5722e433f9eb",
    bottom: "1492d2de-a2ae-4fa8-82b5-16b186163e0b",
    right: "0d9218a0-14fc-439c-b421-23eb0a343b44",
    edges: [
      "c74ac970-1ae7-42fb-a4c9-139b14be8041",
      "836c63c6-57dc-440c-9d6b-7d224bcfc839",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9380,
      y: 220,
    },
    name: "BattleField",
    id: "0d9218a0-14fc-439c-b421-23eb0a343b44",
    left: "dcc3324c-0a24-4166-8318-5722e433f9eb",
    right: "6a04a967-c537-4406-be50-78b5e9240746",
    edges: [
      "836c63c6-57dc-440c-9d6b-7d224bcfc839",
      "e31d387c-0bb6-445e-a2bc-5e0308b3ddf6",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9640,
      y: 220,
    },
    name: "CollectMoneyField",
    id: "6a04a967-c537-4406-be50-78b5e9240746",
    left: "0d9218a0-14fc-439c-b421-23eb0a343b44",
    right: "71f9956b-c781-417d-91ad-68ef441a2f9a",
    edges: [
      "e31d387c-0bb6-445e-a2bc-5e0308b3ddf6",
      "9ae4704f-6740-4221-8266-73311911bfad",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9880,
      y: 220,
    },
    name: "TreasureField",
    id: "71f9956b-c781-417d-91ad-68ef441a2f9a",
    left: "6a04a967-c537-4406-be50-78b5e9240746",
    right: "dadd5555-6679-4043-8aae-e99ad4cec2b1",
    edges: [
      "9ae4704f-6740-4221-8266-73311911bfad",
      "37c2b385-4c25-42d3-9e78-6478b9735839",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10120,
      y: 220,
    },
    name: "BattleField",
    id: "dadd5555-6679-4043-8aae-e99ad4cec2b1",
    left: "71f9956b-c781-417d-91ad-68ef441a2f9a",
    bottom: "5ee881de-fe3c-46b9-9895-c11a8875b06d",
    edges: [
      "37c2b385-4c25-42d3-9e78-6478b9735839",
      "ce7329b1-6843-40a3-af0a-1503118f6c5c",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10120,
      y: 460,
    },
    name: "MagicBookField",
    id: "5ee881de-fe3c-46b9-9895-c11a8875b06d",
    top: "dadd5555-6679-4043-8aae-e99ad4cec2b1",
    right: "ffb49d2a-81b9-4474-b45b-fcbf5e89160f",
    edges: [
      "ce7329b1-6843-40a3-af0a-1503118f6c5c",
      "f1c93acd-8de6-4f0c-a09c-574235a6d9bf",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10420,
      y: 460,
    },
    name: "CollectMoneyField",
    id: "ffb49d2a-81b9-4474-b45b-fcbf5e89160f",
    left: "5ee881de-fe3c-46b9-9895-c11a8875b06d",
    bottom: "05b45255-dfea-4bbe-8cf5-60a07e34cd6d",
    edges: [
      "f1c93acd-8de6-4f0c-a09c-574235a6d9bf",
      "85d811de-90e9-4dff-84b1-af7389fd1b91",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10420,
      y: 680,
    },
    name: "BattleField",
    id: "05b45255-dfea-4bbe-8cf5-60a07e34cd6d",
    top: "ffb49d2a-81b9-4474-b45b-fcbf5e89160f",
    bottom: "17d01ec4-e212-443b-9f25-271798ad7eae",
    edges: [
      "85d811de-90e9-4dff-84b1-af7389fd1b91",
      "8b3defdd-708e-438a-9392-803d3fcafdaa",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10420,
      y: 860,
    },
    name: "TreasureField",
    id: "17d01ec4-e212-443b-9f25-271798ad7eae",
    top: "05b45255-dfea-4bbe-8cf5-60a07e34cd6d",
    bottom: "9652d737-c4c0-4fc6-ad84-396a9d0b7fc0",
    edges: [
      "8b3defdd-708e-438a-9392-803d3fcafdaa",
      "97b91a6c-3c4b-47f1-80f9-06cf3877f3ca",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9300,
      y: 2000,
    },
    name: "TreasureField",
    id: "52d134cb-b091-46c2-bc31-764aaedb88b7",
    top: "2734c943-2057-4493-8681-5a1a2002819c",
    bottom: "07bff46b-09c7-4cb1-8699-ed10d7c77782",
    edges: [
      "78105b3a-4e87-41ee-8e96-6cd40435f3f6",
      "10456d81-16c7-48bd-bd4a-a00fd95707ea",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9300,
      y: 2180,
    },
    name: "BattleField",
    id: "07bff46b-09c7-4cb1-8699-ed10d7c77782",
    top: "52d134cb-b091-46c2-bc31-764aaedb88b7",
    bottom: "d9d66308-6739-4aa2-8345-70e6d7223344",
    edges: [
      "10456d81-16c7-48bd-bd4a-a00fd95707ea",
      "c2c152a6-de8b-497c-89ae-80b3e57ca3ff",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9300,
      y: 2360,
    },
    name: "BattleField",
    id: "d9d66308-6739-4aa2-8345-70e6d7223344",
    top: "07bff46b-09c7-4cb1-8699-ed10d7c77782",
    right: "f0ed9f40-dc62-45b8-98fa-6780972106a5",
    edges: [
      "c2c152a6-de8b-497c-89ae-80b3e57ca3ff",
      "7f965706-22a0-491b-8347-fc0c4257c082",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9800,
      y: 2320,
    },
    name: "TreasureField",
    id: "d3d8d335-cd41-4116-aaf3-b4906597bb1c",
    top: "9a8608fa-437c-47eb-abb0-420820daed52",
    right: "28b5a75d-9afd-4129-adb1-e8701a1f8386",
    edges: [
      "e149f9b9-e065-4695-9311-28135ec5197f",
      "68ab9ae2-0f24-43d7-8f21-d791103d9f18",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9500,
      y: 2400,
    },
    name: "CollectMoneyField",
    id: "f0ed9f40-dc62-45b8-98fa-6780972106a5",
    left: "d9d66308-6739-4aa2-8345-70e6d7223344",
    bottom: "f2db85a0-d2b7-4dd5-a9a2-4bbd90f18a4a",
    edges: [
      "7f965706-22a0-491b-8347-fc0c4257c082",
      "fc661176-e010-4a62-a829-e7a18f03bb03",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10060,
      y: 2340,
    },
    name: "BattleField",
    id: "28b5a75d-9afd-4129-adb1-e8701a1f8386",
    left: "d3d8d335-cd41-4116-aaf3-b4906597bb1c",
    bottom: "71c36b08-c9fd-42d7-b63a-f4a06f5889b4",
    edges: [
      "68ab9ae2-0f24-43d7-8f21-d791103d9f18",
      "989e28f3-91b0-49ee-84dd-5b364b51a64c",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10060,
      y: 2580,
    },
    name: "BattleField",
    id: "71c36b08-c9fd-42d7-b63a-f4a06f5889b4",
    top: "28b5a75d-9afd-4129-adb1-e8701a1f8386",
    right: "99f5deab-30c7-429b-ba57-488688378869",
    edges: [
      "989e28f3-91b0-49ee-84dd-5b364b51a64c",
      "2c35a80f-3e24-41e3-8632-65435c8629a9",
      "8d367cd7-7eed-4b2f-a827-02635a870512",
    ],
    left: "658791c4-1096-4656-b767-a3df4caf7ede",
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9500,
      y: 2580,
    },
    name: "BattleField",
    id: "f2db85a0-d2b7-4dd5-a9a2-4bbd90f18a4a",
    top: "f0ed9f40-dc62-45b8-98fa-6780972106a5",
    bottom: "5b347aab-64f1-4cfc-889b-aa0674ff52a9",
    left: "4d48c3f7-cc13-4175-a72d-66720590c048",
    edges: [
      "fc661176-e010-4a62-a829-e7a18f03bb03",
      "e9476f89-4939-4b2c-b202-a1740fe9fb8e",
      "2307e7e2-cd49-455a-a693-b4b608646d7f",
      "4e4a10f8-3948-4d4b-8b74-101c2306d038",
    ],
    right: "658791c4-1096-4656-b767-a3df4caf7ede",
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9720,
      y: 2400,
    },
    name: "CaveField",
    id: "0e4e8736-d81a-486e-8049-5e86318444ee",
    edges: ["3d61b057-4760-4e74-aafd-d2ff5f79308e"],
    bottom: "658791c4-1096-4656-b767-a3df4caf7ede",
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9480,
      y: 2760,
    },
    name: "BattleField",
    id: "5b347aab-64f1-4cfc-889b-aa0674ff52a9",
    top: "f2db85a0-d2b7-4dd5-a9a2-4bbd90f18a4a",
    right: "8f3d5580-028e-423f-9eb8-688b2412836c",
    edges: [
      "e9476f89-4939-4b2c-b202-a1740fe9fb8e",
      "94f2e822-cf08-4408-bc8d-70de5ec523a0",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9760,
      y: 2760,
    },
    name: "BattleField",
    id: "8f3d5580-028e-423f-9eb8-688b2412836c",
    left: "5b347aab-64f1-4cfc-889b-aa0674ff52a9",
    right: "3b0ad8e7-4773-424b-be7d-9fa397971270",
    edges: [
      "94f2e822-cf08-4408-bc8d-70de5ec523a0",
      "5327c0ef-c4f3-4508-84ee-ea3c24aafa5d",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10080,
      y: 2760,
    },
    name: "VillageField",
    id: "3b0ad8e7-4773-424b-be7d-9fa397971270",
    left: "8f3d5580-028e-423f-9eb8-688b2412836c",
    edges: ["5327c0ef-c4f3-4508-84ee-ea3c24aafa5d"],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10280,
      y: 2580,
    },
    name: "JobStoreField",
    id: "99f5deab-30c7-429b-ba57-488688378869",
    left: "71c36b08-c9fd-42d7-b63a-f4a06f5889b4",
    bottom: "69e79c2d-4776-4818-b3a7-7e945be4acf7",
    right: "baa64140-9016-45cd-ac30-4e2a2f6212a8",
    edges: [
      "2c35a80f-3e24-41e3-8632-65435c8629a9",
      "ca01d1c5-a859-48c8-961b-c7e34cea7e10",
      "c22732fd-a811-48df-b270-29ef8cbb4870",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10280,
      y: 2960,
    },
    name: "BattleField",
    id: "69e79c2d-4776-4818-b3a7-7e945be4acf7",
    top: "99f5deab-30c7-429b-ba57-488688378869",
    right: "437c3a1a-48cd-4234-af49-aaa7332e8a5b",
    edges: [
      "ca01d1c5-a859-48c8-961b-c7e34cea7e10",
      "ecf8bb9b-3409-4ad9-a20f-f8b15201f5c8",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10480,
      y: 2580,
    },
    name: "BattleField",
    id: "baa64140-9016-45cd-ac30-4e2a2f6212a8",
    left: "99f5deab-30c7-429b-ba57-488688378869",
    bottom: "211e5d41-ef9b-454e-ba56-584557764f33",
    right: "5d3a955e-6b10-48f4-a75c-075029353ab2",
    edges: [
      "c22732fd-a811-48df-b270-29ef8cbb4870",
      "2a41f89f-9d67-4d99-b821-0c6f7d86737d",
      "887f2d12-82aa-417a-8c80-9284292cdd4e",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10480,
      y: 2760,
    },
    name: "TreasureField",
    id: "211e5d41-ef9b-454e-ba56-584557764f33",
    top: "baa64140-9016-45cd-ac30-4e2a2f6212a8",
    bottom: "437c3a1a-48cd-4234-af49-aaa7332e8a5b",
    edges: [
      "2a41f89f-9d67-4d99-b821-0c6f7d86737d",
      "f3e069c9-5f24-4d8c-a6d2-89adc841dbbd",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10480,
      y: 2960,
    },
    name: "BattleField",
    id: "437c3a1a-48cd-4234-af49-aaa7332e8a5b",
    top: "211e5d41-ef9b-454e-ba56-584557764f33",
    left: "69e79c2d-4776-4818-b3a7-7e945be4acf7",
    bottom: "14071978-d7a2-4e72-8911-c75165c42c6c",
    edges: [
      "f3e069c9-5f24-4d8c-a6d2-89adc841dbbd",
      "ecf8bb9b-3409-4ad9-a20f-f8b15201f5c8",
      "4a3fe16f-4efc-4e35-8e6c-b3a57f1b95a5",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10780,
      y: 2600,
    },
    name: "BattleField",
    id: "5d3a955e-6b10-48f4-a75c-075029353ab2",
    left: "baa64140-9016-45cd-ac30-4e2a2f6212a8",
    top: "85874741-e052-4913-bd28-64203e6e1632",
    edges: [
      "887f2d12-82aa-417a-8c80-9284292cdd4e",
      "77be5133-e1e9-49b1-ad7c-44027dd86748",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10760,
      y: 2420,
    },
    name: "BattleField",
    id: "85874741-e052-4913-bd28-64203e6e1632",
    bottom: "5d3a955e-6b10-48f4-a75c-075029353ab2",
    top: "4d0f3ceb-a3dd-468e-9baf-665bf46d15c6",
    edges: [
      "77be5133-e1e9-49b1-ad7c-44027dd86748",
      "f0f17e11-a3f1-4f43-b1df-d0a234aa8dbf",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10800,
      y: 2240,
    },
    name: "VillageField",
    id: "4d0f3ceb-a3dd-468e-9baf-665bf46d15c6",
    bottom: "85874741-e052-4913-bd28-64203e6e1632",
    edges: ["f0f17e11-a3f1-4f43-b1df-d0a234aa8dbf"],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11200,
      y: 1580,
    },
    name: "BattleField",
    id: "277beb3b-f1d1-4dd7-af5c-1548a3b71336",
    left: "8c466c93-09fa-427e-a8a4-0515292ffa55",
    top: "912d821b-92d2-41a8-8999-79208150d515",
    edges: [
      "f5681914-1128-4553-90d6-32181d4f885d",
      "4029b057-9a89-4e52-ad0d-e0f7cd14bb18",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11020,
      y: 1740,
    },
    name: "BattleField",
    id: "086d2d3f-21bd-4457-bd05-cff57eff10db",
    left: "4c5b5f51-c948-45b0-b6bc-bca93669ec60",
    bottom: "cd81978d-7407-43b2-985a-136e77cc856b",
    edges: [
      "c074be00-a500-43b1-bcba-320969a35f96",
      "995b55db-fdd7-4ac7-b7bf-f39b62f218ab",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11000,
      y: 1900,
    },
    name: "BattleField",
    id: "cd81978d-7407-43b2-985a-136e77cc856b",
    top: "086d2d3f-21bd-4457-bd05-cff57eff10db",
    right: "ace59a88-128f-4dbc-ac51-87381ed9bb1d",
    edges: [
      "995b55db-fdd7-4ac7-b7bf-f39b62f218ab",
      "cefe9add-9d4f-4aec-871b-499ac589c30f",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 1880,
    },
    name: "VillageField",
    id: "ace59a88-128f-4dbc-ac51-87381ed9bb1d",
    left: "cd81978d-7407-43b2-985a-136e77cc856b",
    edges: ["cefe9add-9d4f-4aec-871b-499ac589c30f"],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11200,
      y: 1440,
    },
    name: "BattleField",
    id: "912d821b-92d2-41a8-8999-79208150d515",
    bottom: "277beb3b-f1d1-4dd7-af5c-1548a3b71336",
    right: "ec4542a4-998c-4a96-95b2-f2519dd2386d",
    edges: [
      "4029b057-9a89-4e52-ad0d-e0f7cd14bb18",
      "9a4a6b8e-9bf4-451b-8b9a-301e67b7092b",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11340,
      y: 1440,
    },
    name: "BattleField",
    id: "ec4542a4-998c-4a96-95b2-f2519dd2386d",
    left: "912d821b-92d2-41a8-8999-79208150d515",
    bottom: "6c4a5257-57dc-48fd-82e6-d56afdf85ffc",
    top: "5056649a-a114-4ea8-a952-b789076a9f7b",
    edges: [
      "9a4a6b8e-9bf4-451b-8b9a-301e67b7092b",
      "5a88debb-bd6a-430c-b864-fd7c4500da29",
      "a41ef1b4-846f-49b8-a12e-d3823db0e575",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11340,
      y: 1260,
    },
    name: "TreasureField",
    id: "5056649a-a114-4ea8-a952-b789076a9f7b",
    bottom: "ec4542a4-998c-4a96-95b2-f2519dd2386d",
    right: "171043fd-5f66-45d9-b510-c036c842102b",
    edges: [
      "a41ef1b4-846f-49b8-a12e-d3823db0e575",
      "f5ab208e-a4cc-4e11-a9b4-fc9456338adf",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11340,
      y: 1620,
    },
    name: "BattleField",
    id: "6c4a5257-57dc-48fd-82e6-d56afdf85ffc",
    top: "ec4542a4-998c-4a96-95b2-f2519dd2386d",
    right: "83a22c1f-195d-4d74-b325-e8a11f45490a",
    edges: [
      "5a88debb-bd6a-430c-b864-fd7c4500da29",
      "eb4a3d58-1fcd-496c-8aac-e3c3baf56464",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11540,
      y: 1600,
    },
    name: "MagicBookField",
    id: "83a22c1f-195d-4d74-b325-e8a11f45490a",
    left: "6c4a5257-57dc-48fd-82e6-d56afdf85ffc",
    top: "171043fd-5f66-45d9-b510-c036c842102b",
    right: "542a28f5-3066-4f7c-bb3b-85d540ce0e4d",
    edges: [
      "eb4a3d58-1fcd-496c-8aac-e3c3baf56464",
      "f061dce2-189a-4693-86b1-b334c0d0c71a",
      "1fe17f1f-63a1-484d-abc1-e6b117818b4b",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11540,
      y: 1260,
    },
    name: "BattleField",
    id: "171043fd-5f66-45d9-b510-c036c842102b",
    bottom: "83a22c1f-195d-4d74-b325-e8a11f45490a",
    left: "5056649a-a114-4ea8-a952-b789076a9f7b",
    edges: [
      "f061dce2-189a-4693-86b1-b334c0d0c71a",
      "f5ab208e-a4cc-4e11-a9b4-fc9456338adf",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11880,
      y: 1620,
    },
    name: "RedTreasureField",
    id: "542a28f5-3066-4f7c-bb3b-85d540ce0e4d",
    left: "83a22c1f-195d-4d74-b325-e8a11f45490a",
    right: "8a5e6dfb-f29f-4790-bdad-e6d201d464b5",
    edges: [
      "1fe17f1f-63a1-484d-abc1-e6b117818b4b",
      "d57e273e-54e9-4447-af29-d298eb3e4a7c",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12200,
      y: 1620,
    },
    name: "TreasureField",
    id: "8a5e6dfb-f29f-4790-bdad-e6d201d464b5",
    left: "542a28f5-3066-4f7c-bb3b-85d540ce0e4d",
    right: "925fd683-9e27-4b69-bd12-8adf0cc12157",
    bottom: "3829a24b-bea6-4153-bccc-9688cfd6db14",
    edges: [
      "d57e273e-54e9-4447-af29-d298eb3e4a7c",
      "9e09f6dc-843d-4733-a655-cc326459fc80",
      "48367dbd-34fa-4594-99be-24c3d4d09a26",
      "a32e344a-0c4f-4210-81aa-b30a2f93e37c",
    ],
    top: "711f14ab-2391-476a-8b5a-55551c7cf1bc",
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12420,
      y: 1620,
    },
    name: "RedTreasureField",
    id: "925fd683-9e27-4b69-bd12-8adf0cc12157",
    left: "8a5e6dfb-f29f-4790-bdad-e6d201d464b5",
    right: "0559834c-8f1c-4fb9-b4fb-fc10292b1983",
    edges: [
      "9e09f6dc-843d-4733-a655-cc326459fc80",
      "71b51314-5650-490a-9c59-d6d05e57d814",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12640,
      y: 1620,
    },
    name: "BattleField",
    id: "0559834c-8f1c-4fb9-b4fb-fc10292b1983",
    left: "925fd683-9e27-4b69-bd12-8adf0cc12157",
    bottom: "0fe28f0e-a27c-477f-b931-9888e6b060b5",
    edges: [
      "71b51314-5650-490a-9c59-d6d05e57d814",
      "6443085a-f818-40a4-a545-42e1e9202420",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12640,
      y: 1780,
    },
    name: "BattleField",
    id: "0fe28f0e-a27c-477f-b931-9888e6b060b5",
    top: "0559834c-8f1c-4fb9-b4fb-fc10292b1983",
    left: "3829a24b-bea6-4153-bccc-9688cfd6db14",
    edges: [
      "6443085a-f818-40a4-a545-42e1e9202420",
      "71fc14ab-a734-4cdd-882c-fd57a3b9ea0f",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12200,
      y: 1780,
    },
    name: "BattleField",
    id: "3829a24b-bea6-4153-bccc-9688cfd6db14",
    right: "0fe28f0e-a27c-477f-b931-9888e6b060b5",
    top: "8a5e6dfb-f29f-4790-bdad-e6d201d464b5",
    left: "100e96dc-3e04-4935-9403-8461c17b2c8e",
    bottom: "b03d437b-64de-4a68-88ce-737c7e5eea09",
    edges: [
      "71fc14ab-a734-4cdd-882c-fd57a3b9ea0f",
      "48367dbd-34fa-4594-99be-24c3d4d09a26",
      "e70bf260-78ce-455a-9a1a-eaa1f66e5a8e",
      "0f9125fe-7286-4159-b86a-390e99b4b968",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11980,
      y: 1780,
    },
    name: "BattleField",
    id: "100e96dc-3e04-4935-9403-8461c17b2c8e",
    right: "3829a24b-bea6-4153-bccc-9688cfd6db14",
    bottom: "fb2f98f0-a085-4799-b2e9-ba8164f2059d",
    edges: [
      "e70bf260-78ce-455a-9a1a-eaa1f66e5a8e",
      "141368f2-9bb6-46b3-82ca-c90023152059",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11980,
      y: 2100,
    },
    name: "BattleField",
    id: "fb2f98f0-a085-4799-b2e9-ba8164f2059d",
    top: "100e96dc-3e04-4935-9403-8461c17b2c8e",
    right: "6ae2fd50-7be3-4877-9287-c843f3860d73",
    left: "ce3afe3f-eca3-4fe8-95c3-0db872842be1",
    bottom: "bd29ce94-cef7-48c0-b74c-5c8dd5bb5bb9",
    edges: [
      "141368f2-9bb6-46b3-82ca-c90023152059",
      "2bd74b8b-f116-4af7-8543-6bb64a8f88df",
      "02541e22-8fd5-4d36-8a20-c20d14c5e57b",
      "93cd97b6-11a3-4aba-8fc3-ce65d750c062",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12200,
      y: 2100,
    },
    name: "BattleField",
    id: "6ae2fd50-7be3-4877-9287-c843f3860d73",
    left: "fb2f98f0-a085-4799-b2e9-ba8164f2059d",
    top: "b03d437b-64de-4a68-88ce-737c7e5eea09",
    edges: [
      "2bd74b8b-f116-4af7-8543-6bb64a8f88df",
      "415795a3-670a-4c40-bf9a-fb597cbf41b0",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12200,
      y: 1940,
    },
    name: "TreasureField",
    id: "b03d437b-64de-4a68-88ce-737c7e5eea09",
    top: "3829a24b-bea6-4153-bccc-9688cfd6db14",
    bottom: "6ae2fd50-7be3-4877-9287-c843f3860d73",
    edges: [
      "0f9125fe-7286-4159-b86a-390e99b4b968",
      "415795a3-670a-4c40-bf9a-fb597cbf41b0",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11580,
      y: 2100,
    },
    name: "MagicBookField",
    id: "ce3afe3f-eca3-4fe8-95c3-0db872842be1",
    right: "fb2f98f0-a085-4799-b2e9-ba8164f2059d",
    left: "ea77dc8c-b094-4b42-a3b2-c8e9b6eb1995",
    edges: [
      "02541e22-8fd5-4d36-8a20-c20d14c5e57b",
      "77fdf49c-0633-4b97-88d5-8cf8494acc0f",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11240,
      y: 2080,
    },
    name: "BattleField",
    id: "ea77dc8c-b094-4b42-a3b2-c8e9b6eb1995",
    right: "ce3afe3f-eca3-4fe8-95c3-0db872842be1",
    bottom: "ef160cbd-5f22-41a0-92c8-2060c200418d",
    edges: [
      "77fdf49c-0633-4b97-88d5-8cf8494acc0f",
      "17fa937f-24e5-448b-ba7d-f66d7e4d7868",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11240,
      y: 2280,
    },
    name: "BattleField",
    id: "ef160cbd-5f22-41a0-92c8-2060c200418d",
    top: "ea77dc8c-b094-4b42-a3b2-c8e9b6eb1995",
    left: "f59b2d71-d336-42db-8d73-479b36ee4fc3",
    bottom: "ead6ebfe-2576-48b6-a208-5eafbf7836e1",
    edges: [
      "17fa937f-24e5-448b-ba7d-f66d7e4d7868",
      "583e553b-18dd-4672-b687-e3df231310a8",
      "90951e86-f166-4d50-bb6e-17f4dcccad2b",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10980,
      y: 2220,
    },
    name: "VillageField",
    id: "f59b2d71-d336-42db-8d73-479b36ee4fc3",
    right: "ef160cbd-5f22-41a0-92c8-2060c200418d",
    edges: ["583e553b-18dd-4672-b687-e3df231310a8"],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11240,
      y: 2460,
    },
    name: "GoldTreasureField",
    id: "ead6ebfe-2576-48b6-a208-5eafbf7836e1",
    top: "ef160cbd-5f22-41a0-92c8-2060c200418d",
    right: "b7b562bc-5d4e-40af-a66e-cf9edc1f1c05",
    bottom: "c7397b07-8971-4e6e-9643-7f3d7c0abf34",
    edges: [
      "90951e86-f166-4d50-bb6e-17f4dcccad2b",
      "d7142db6-ee36-4ba7-8b18-4129654041f1",
      "7ff6ae5c-c080-4b1c-a5d4-71937295876f",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11440,
      y: 2460,
    },
    name: "GoldTreasureField",
    id: "b7b562bc-5d4e-40af-a66e-cf9edc1f1c05",
    left: "ead6ebfe-2576-48b6-a208-5eafbf7836e1",
    bottom: "860f7332-e1f1-48ed-bb5f-3d21ac32eeaa",
    edges: [
      "d7142db6-ee36-4ba7-8b18-4129654041f1",
      "b6c0f51f-d53c-4660-95a6-769fdc17c263",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11240,
      y: 2660,
    },
    name: "RedTreasureField",
    id: "c7397b07-8971-4e6e-9643-7f3d7c0abf34",
    top: "ead6ebfe-2576-48b6-a208-5eafbf7836e1",
    bottom: "8d333040-8387-4522-a8f6-bc82643e1541",
    edges: [
      "7ff6ae5c-c080-4b1c-a5d4-71937295876f",
      "92da1e46-9c04-42b2-84dc-1454e56f8426",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11440,
      y: 2660,
    },
    name: "TreasureField",
    id: "860f7332-e1f1-48ed-bb5f-3d21ac32eeaa",
    top: "b7b562bc-5d4e-40af-a66e-cf9edc1f1c05",
    right: "9fe0f910-af6d-4898-98fb-f7fb88ede3f9",
    edges: [
      "b6c0f51f-d53c-4660-95a6-769fdc17c263",
      "814580d0-7c57-4156-8ff8-4ff3b18c5078",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11640,
      y: 2660,
    },
    name: "RedTreasureField",
    id: "9fe0f910-af6d-4898-98fb-f7fb88ede3f9",
    left: "860f7332-e1f1-48ed-bb5f-3d21ac32eeaa",
    bottom: "d6c95449-58b4-47a1-ba79-5e9e27eab6aa",
    edges: [
      "814580d0-7c57-4156-8ff8-4ff3b18c5078",
      "9c5738d1-ac8c-42c3-af82-603461350869",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12020,
      y: 2340,
    },
    name: "RedTreasureField",
    id: "bd29ce94-cef7-48c0-b74c-5c8dd5bb5bb9",
    top: "fb2f98f0-a085-4799-b2e9-ba8164f2059d",
    bottom: "31fcefcd-bf96-4eaf-92cd-755696ae64ae",
    edges: [
      "93cd97b6-11a3-4aba-8fc3-ce65d750c062",
      "6f5e3a80-96df-45be-990c-527eb98a7b96",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12040,
      y: 2560,
    },
    name: "BattleField",
    id: "31fcefcd-bf96-4eaf-92cd-755696ae64ae",
    top: "bd29ce94-cef7-48c0-b74c-5c8dd5bb5bb9",
    bottom: "27e999b9-e5e2-4589-8eaa-d84dd5b3e9c6",
    edges: [
      "6f5e3a80-96df-45be-990c-527eb98a7b96",
      "72925a48-67b6-4b0d-bdf9-dc8feefac249",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11640,
      y: 2820,
    },
    name: "BattleField",
    id: "d6c95449-58b4-47a1-ba79-5e9e27eab6aa",
    top: "9fe0f910-af6d-4898-98fb-f7fb88ede3f9",
    right: "d5342bd2-8c75-4f66-8c56-ae4e42c5300e",
    edges: [
      "9c5738d1-ac8c-42c3-af82-603461350869",
      "7c6b73af-53d6-4b46-a025-279db2569075",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11880,
      y: 2820,
    },
    name: "BattleField",
    id: "d5342bd2-8c75-4f66-8c56-ae4e42c5300e",
    left: "d6c95449-58b4-47a1-ba79-5e9e27eab6aa",
    bottom: "329ba382-7773-41e4-b48b-5d976fee9c21",
    edges: [
      "7c6b73af-53d6-4b46-a025-279db2569075",
      "51d0a53b-75ee-4e5d-9a3b-8de1cce36c45",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11880,
      y: 3000,
    },
    name: "BattleField",
    id: "329ba382-7773-41e4-b48b-5d976fee9c21",
    top: "d5342bd2-8c75-4f66-8c56-ae4e42c5300e",
    right: "bb27247b-c1d8-4d31-b36c-00c13260aaab",
    left: "6967bbf4-f36d-4f04-8064-b3f57079c503",
    bottom: "883081f9-e7f7-487f-9fa3-79da0ac19e09",
    edges: [
      "51d0a53b-75ee-4e5d-9a3b-8de1cce36c45",
      "53b03e8d-c9b6-4df6-91ad-6bf7c552a577",
      "baf617f9-a476-47e2-b754-f8ebada6fb13",
      "6d8f68ea-9d5c-491b-b0a0-06eaccb969b5",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12100,
      y: 3000,
    },
    name: "BattleField",
    id: "bb27247b-c1d8-4d31-b36c-00c13260aaab",
    left: "329ba382-7773-41e4-b48b-5d976fee9c21",
    top: "27e999b9-e5e2-4589-8eaa-d84dd5b3e9c6",
    edges: [
      "53b03e8d-c9b6-4df6-91ad-6bf7c552a577",
      "a93010d9-7686-450f-a1d2-490be221d912",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 12080,
      y: 2780,
    },
    name: "TreasureField",
    id: "27e999b9-e5e2-4589-8eaa-d84dd5b3e9c6",
    top: "31fcefcd-bf96-4eaf-92cd-755696ae64ae",
    bottom: "bb27247b-c1d8-4d31-b36c-00c13260aaab",
    edges: [
      "72925a48-67b6-4b0d-bdf9-dc8feefac249",
      "a93010d9-7686-450f-a1d2-490be221d912",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11560,
      y: 3000,
    },
    name: "GoldTreasureField",
    id: "6967bbf4-f36d-4f04-8064-b3f57079c503",
    left: "8d333040-8387-4522-a8f6-bc82643e1541",
    right: "329ba382-7773-41e4-b48b-5d976fee9c21",
    edges: [
      "baf617f9-a476-47e2-b754-f8ebada6fb13",
      "c650f796-7a65-4377-b99f-91fc4e5e20ff",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11240,
      y: 3000,
    },
    name: "GoldTreasureField",
    id: "8d333040-8387-4522-a8f6-bc82643e1541",
    top: "c7397b07-8971-4e6e-9643-7f3d7c0abf34",
    bottom: "49c2caa3-f755-4514-9093-3eb722c63944",
    right: "6967bbf4-f36d-4f04-8064-b3f57079c503",
    edges: [
      "c650f796-7a65-4377-b99f-91fc4e5e20ff",
      "92da1e46-9c04-42b2-84dc-1454e56f8426",
      "8c2084ef-444e-4ac2-831f-aaafa18c5864",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11240,
      y: 3240,
    },
    name: "RedTreasureField",
    id: "49c2caa3-f755-4514-9093-3eb722c63944",
    top: "8d333040-8387-4522-a8f6-bc82643e1541",
    bottom: "c99766f0-2592-41d5-b8a5-690b77e8c57a",
    edges: [
      "8c2084ef-444e-4ac2-831f-aaafa18c5864",
      "3026e039-62b5-4a07-995e-e1ae633e9ca3",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11880,
      y: 3220,
    },
    name: "BattleField",
    id: "883081f9-e7f7-487f-9fa3-79da0ac19e09",
    top: "329ba382-7773-41e4-b48b-5d976fee9c21",
    left: "9a32e217-40c8-47c0-95d6-cd30fd75194e",
    edges: [
      "6d8f68ea-9d5c-491b-b0a0-06eaccb969b5",
      "a9787ff8-705a-4d1a-aa82-808696cdcf0b",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11660,
      y: 3220,
    },
    name: "BattleField",
    id: "9a32e217-40c8-47c0-95d6-cd30fd75194e",
    right: "883081f9-e7f7-487f-9fa3-79da0ac19e09",
    bottom: "ce4833e2-9a40-4f33-a9d0-c09c7d3921af",
    edges: [
      "a9787ff8-705a-4d1a-aa82-808696cdcf0b",
      "f36c4fc5-f483-486f-9a87-07a13649ad95",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11660,
      y: 3380,
    },
    name: "TreasureField",
    id: "ce4833e2-9a40-4f33-a9d0-c09c7d3921af",
    top: "9a32e217-40c8-47c0-95d6-cd30fd75194e",
    left: "c945346e-3a53-4de6-bfbd-2ce8871fe55c",
    edges: [
      "f36c4fc5-f483-486f-9a87-07a13649ad95",
      "d640f0e1-fc8b-449d-ad96-ab76086208bc",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11460,
      y: 3380,
    },
    name: "MagicBookField",
    id: "c945346e-3a53-4de6-bfbd-2ce8871fe55c",
    right: "ce4833e2-9a40-4f33-a9d0-c09c7d3921af",
    bottom: "4404c220-c12e-44f1-babd-f51fa5d8a4f4",
    edges: [
      "d640f0e1-fc8b-449d-ad96-ab76086208bc",
      "3fe6f8ea-53d8-4935-9c97-c14a7dcf2588",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11240,
      y: 3560,
    },
    name: "BattleField",
    id: "c99766f0-2592-41d5-b8a5-690b77e8c57a",
    top: "49c2caa3-f755-4514-9093-3eb722c63944",
    right: "4404c220-c12e-44f1-babd-f51fa5d8a4f4",
    left: "34587932-38aa-43a7-ace9-4aea1b8d50ca",
    bottom: "e0327ca9-c75d-439d-9ef2-3988149fb9ca",
    edges: [
      "3026e039-62b5-4a07-995e-e1ae633e9ca3",
      "88c570f2-7d39-4ec7-b4ae-da01bd69d637",
      "a229f54c-75bc-4470-a687-1c818ce2e028",
      "8b27d224-1e59-4481-b1e1-129b0f42c3f7",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 11460,
      y: 3560,
    },
    name: "BattleField",
    id: "4404c220-c12e-44f1-babd-f51fa5d8a4f4",
    top: "c945346e-3a53-4de6-bfbd-2ce8871fe55c",
    left: "c99766f0-2592-41d5-b8a5-690b77e8c57a",
    edges: [
      "3fe6f8ea-53d8-4935-9c97-c14a7dcf2588",
      "88c570f2-7d39-4ec7-b4ae-da01bd69d637",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10940,
      y: 3560,
    },
    name: "BattleField",
    id: "34587932-38aa-43a7-ace9-4aea1b8d50ca",
    right: "c99766f0-2592-41d5-b8a5-690b77e8c57a",
    left: "610f3c29-1465-476f-a343-4f7620846744",
    edges: [
      "a229f54c-75bc-4470-a687-1c818ce2e028",
      "8fe7f623-748d-4a2a-899f-a413f7657c27",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10480,
      y: 3200,
    },
    name: "BattleField",
    id: "14071978-d7a2-4e72-8911-c75165c42c6c",
    top: "437c3a1a-48cd-4234-af49-aaa7332e8a5b",
    right: "0363387e-5ecb-44cf-ba28-4bb5b9572393",
    edges: [
      "4a3fe16f-4efc-4e35-8e6c-b3a57f1b95a5",
      "7382b234-a7ed-4b91-a7a2-a2903d026ebf",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10700,
      y: 3200,
    },
    name: "BattleField",
    id: "0363387e-5ecb-44cf-ba28-4bb5b9572393",
    left: "14071978-d7a2-4e72-8911-c75165c42c6c",
    bottom: "610f3c29-1465-476f-a343-4f7620846744",
    edges: [
      "7382b234-a7ed-4b91-a7a2-a2903d026ebf",
      "ed66a21e-0a20-46b4-8b73-1b030e636c49",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 10700,
      y: 3560,
    },
    name: "TreasureField",
    id: "610f3c29-1465-476f-a343-4f7620846744",
    top: "0363387e-5ecb-44cf-ba28-4bb5b9572393",
    right: "34587932-38aa-43a7-ace9-4aea1b8d50ca",
    edges: [
      "ed66a21e-0a20-46b4-8b73-1b030e636c49",
      "8fe7f623-748d-4a2a-899f-a413f7657c27",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9220,
      y: 2580,
    },
    name: "VillageField",
    id: "4d48c3f7-cc13-4175-a72d-66720590c048",
    right: "f2db85a0-d2b7-4dd5-a9a2-4bbd90f18a4a",
    bottom: "a4527f92-dc01-48ef-8da6-80380490cdee",
    edges: [
      "2307e7e2-cd49-455a-a693-b4b608646d7f",
      "9750ac20-d1e7-490f-9069-c64f47cb2a6a",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9240,
      y: 2760,
    },
    name: "BattleField",
    id: "a4527f92-dc01-48ef-8da6-80380490cdee",
    top: "4d48c3f7-cc13-4175-a72d-66720590c048",
    bottom: "52c257a7-e952-47a9-b6a1-b53a21755f6e",
    edges: [
      "9750ac20-d1e7-490f-9069-c64f47cb2a6a",
      "5a31b214-c4a0-4b58-a300-bf931fca09f9",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9200,
      y: 2960,
    },
    name: "TreasureField",
    id: "52c257a7-e952-47a9-b6a1-b53a21755f6e",
    top: "a4527f92-dc01-48ef-8da6-80380490cdee",
    bottom: "0c459e0e-8d69-4356-b381-395c3909a745",
    edges: [
      "5a31b214-c4a0-4b58-a300-bf931fca09f9",
      "681d1529-1b7f-4b39-906d-dc033fd7714c",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9240,
      y: 3160,
    },
    name: "BattleField",
    id: "0c459e0e-8d69-4356-b381-395c3909a745",
    top: "52c257a7-e952-47a9-b6a1-b53a21755f6e",
    left: "effcc5ce-0d98-49a0-9a50-e6056fd89ebf",
    bottom: "6f810394-d7d4-4f5d-b679-9a7076ace911",
    edges: [
      "681d1529-1b7f-4b39-906d-dc033fd7714c",
      "385b2b9e-27b5-4c82-bc40-13864fae0b43",
      "0cb2581e-2ea0-4ae5-b299-5011f0c1e41e",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9020,
      y: 3160,
    },
    name: "MagicBookField",
    id: "effcc5ce-0d98-49a0-9a50-e6056fd89ebf",
    right: "0c459e0e-8d69-4356-b381-395c3909a745",
    bottom: "74bda590-a0ed-46ef-8d43-b95b34821e40",
    edges: [
      "385b2b9e-27b5-4c82-bc40-13864fae0b43",
      "437dfb0c-866a-4933-96d3-09ce144fecc6",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9020,
      y: 3520,
    },
    name: "BattleField",
    id: "74bda590-a0ed-46ef-8d43-b95b34821e40",
    top: "effcc5ce-0d98-49a0-9a50-e6056fd89ebf",
    right: "117b5ce0-3527-4a10-89ae-088ee4583f9e",
    left: "647d5a1f-19b3-4e5f-ab82-38b78161e8b6",
    edges: [
      "437dfb0c-866a-4933-96d3-09ce144fecc6",
      "f011c0e2-8411-4f57-87a1-c1e771fb45ce",
      "55d42a0d-1ffa-4e43-9920-fd41f6811d59",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9240,
      y: 3520,
    },
    name: "TreasureField",
    id: "117b5ce0-3527-4a10-89ae-088ee4583f9e",
    left: "74bda590-a0ed-46ef-8d43-b95b34821e40",
    top: "6f810394-d7d4-4f5d-b679-9a7076ace911",
    edges: [
      "f011c0e2-8411-4f57-87a1-c1e771fb45ce",
      "2aca69e8-0d34-4d95-8433-3582654a0d14",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 9240,
      y: 3340,
    },
    name: "BattleField",
    id: "6f810394-d7d4-4f5d-b679-9a7076ace911",
    bottom: "117b5ce0-3527-4a10-89ae-088ee4583f9e",
    top: "0c459e0e-8d69-4356-b381-395c3909a745",
    edges: [
      "2aca69e8-0d34-4d95-8433-3582654a0d14",
      "0cb2581e-2ea0-4ae5-b299-5011f0c1e41e",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8780,
      y: 3520,
    },
    name: "RedTreasureField",
    id: "647d5a1f-19b3-4e5f-ab82-38b78161e8b6",
    right: "74bda590-a0ed-46ef-8d43-b95b34821e40",
    left: "3fecbfbf-101f-420e-b073-ac346874bd8d",
    bottom: "1bdb1608-680b-4709-934a-af51f3437f0e",
    edges: [
      "55d42a0d-1ffa-4e43-9920-fd41f6811d59",
      "b8335a40-92d6-4389-9415-a596fb8ecf97",
      "6c305ab2-6496-483f-a5b5-2eefc698801e",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8560,
      y: 3520,
    },
    name: "BattleField",
    id: "3fecbfbf-101f-420e-b073-ac346874bd8d",
    right: "647d5a1f-19b3-4e5f-ab82-38b78161e8b6",
    left: "5682655b-7518-4dfb-aaae-eae4abd4a083",
    edges: [
      "b8335a40-92d6-4389-9415-a596fb8ecf97",
      "ef3cdbc5-dd69-4f1e-bd39-703badd09f5b",
    ],
    area: "NorthAmerica",
  },
  {
    position: {
      x: 8320,
      y: 3520,
    },
    name: "VillageField",
    id: "5682655b-7518-4dfb-aaae-eae4abd4a083",
    right: "3fecbfbf-101f-420e-b073-ac346874bd8d",
    edges: ["ef3cdbc5-dd69-4f1e-bd39-703badd09f5b"],
    area: "NorthAmerica",
  },
  {
    id: "658791c4-1096-4656-b767-a3df4caf7ede",
    name: "TreasureField",
    position: {
      x: 9720,
      y: 2580,
    },
    edges: [
      "4e4a10f8-3948-4d4b-8b74-101c2306d038",
      "3d61b057-4760-4e74-aafd-d2ff5f79308e",
      "8d367cd7-7eed-4b2f-a827-02635a870512",
    ],
    left: "f2db85a0-d2b7-4dd5-a9a2-4bbd90f18a4a",
    top: "0e4e8736-d81a-486e-8049-5e86318444ee",
    right: "71c36b08-c9fd-42d7-b63a-f4a06f5889b4",
    area: "NorthAmerica",
  },
];
const southAmericaVertices: Vertex[] = [
  {
    position: {
      x: 11240,
      y: 3980,
    },
    name: "BattleField",
    id: "e0327ca9-c75d-439d-9ef2-3988149fb9ca",
    top: "c99766f0-2592-41d5-b8a5-690b77e8c57a",
    right: "e8904d6c-a885-40f6-929b-271f88b54f44",
    edges: [
      "8b27d224-1e59-4481-b1e1-129b0f42c3f7",
      "2bad3aca-1465-44e1-969c-dd52a8899297",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11520,
      y: 3980,
    },
    name: "VillageField",
    id: "e8904d6c-a885-40f6-929b-271f88b54f44",
    left: "e0327ca9-c75d-439d-9ef2-3988149fb9ca",
    right: "51efae10-b6c7-4ddf-8be1-44ca26eb5805",
    bottom: "f0e65da3-3352-406d-9db3-ed80c26925b8",
    edges: [
      "2bad3aca-1465-44e1-969c-dd52a8899297",
      "53ea955d-3a3d-4c1e-95b5-4b10b82bf0a5",
      "45d9418b-0711-4e9a-a30c-b344db3c0d66",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11720,
      y: 3980,
    },
    name: "TreasureField",
    id: "51efae10-b6c7-4ddf-8be1-44ca26eb5805",
    left: "e8904d6c-a885-40f6-929b-271f88b54f44",
    bottom: "3842b0d8-1c2e-4698-b86d-55256201c6b6",
    edges: [
      "53ea955d-3a3d-4c1e-95b5-4b10b82bf0a5",
      "1670dbcf-4935-4e6f-ad4a-53714bbc61a4",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11520,
      y: 4160,
    },
    name: "TreasureField",
    id: "f0e65da3-3352-406d-9db3-ed80c26925b8",
    top: "e8904d6c-a885-40f6-929b-271f88b54f44",
    bottom: "021aafd6-d7cb-4337-b95a-5e9f350b82c3",
    edges: [
      "45d9418b-0711-4e9a-a30c-b344db3c0d66",
      "5a875e94-539d-41a3-a335-37bbac851cc4",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11520,
      y: 4340,
    },
    name: "BattleField",
    id: "021aafd6-d7cb-4337-b95a-5e9f350b82c3",
    top: "f0e65da3-3352-406d-9db3-ed80c26925b8",
    right: "3842b0d8-1c2e-4698-b86d-55256201c6b6",
    left: "53effe12-91ca-4926-bf35-2e3ae1efe18b",
    edges: [
      "5a875e94-539d-41a3-a335-37bbac851cc4",
      "caeca09b-b47d-493c-9648-01ef34d0f190",
      "180900be-27d8-41b8-b4cd-4cbc4b64f340",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11720,
      y: 4340,
    },
    name: "BattleField",
    id: "3842b0d8-1c2e-4698-b86d-55256201c6b6",
    left: "021aafd6-d7cb-4337-b95a-5e9f350b82c3",
    top: "51efae10-b6c7-4ddf-8be1-44ca26eb5805",
    bottom: "21cf69eb-fec9-4343-a497-3050d4c24015",
    edges: [
      "caeca09b-b47d-493c-9648-01ef34d0f190",
      "1670dbcf-4935-4e6f-ad4a-53714bbc61a4",
      "767bc2ec-b62f-4225-addf-9dd46e355246",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11240,
      y: 4340,
    },
    name: "ChruchField",
    id: "53effe12-91ca-4926-bf35-2e3ae1efe18b",
    right: "021aafd6-d7cb-4337-b95a-5e9f350b82c3",
    left: "8224298a-e89f-4ae3-bff5-5d646d9494a0",
    bottom: "6103c3b2-2a66-4127-9de6-c4977de0180c",
    edges: [
      "180900be-27d8-41b8-b4cd-4cbc4b64f340",
      "3ad6b553-ef16-4d44-bb40-4166ae54d261",
      "dbf43287-c5a0-4ccf-a062-0bf9b13dd295",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10840,
      y: 4340,
    },
    name: "BattleField",
    id: "8224298a-e89f-4ae3-bff5-5d646d9494a0",
    right: "53effe12-91ca-4926-bf35-2e3ae1efe18b",
    bottom: "d35e57f3-1698-470d-9cf2-a6c32d06f9d1",
    left: "8f8027d2-046a-4369-8329-0d2c43300aab",
    edges: [
      "3ad6b553-ef16-4d44-bb40-4166ae54d261",
      "f82b6f3f-c8bc-418a-8faa-a9b6a8bd14eb",
      "badaef94-af53-4a9c-9608-37db4334671e",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10840,
      y: 4520,
    },
    name: "BattleField",
    id: "d35e57f3-1698-470d-9cf2-a6c32d06f9d1",
    top: "8224298a-e89f-4ae3-bff5-5d646d9494a0",
    right: "3332c824-483f-4e8b-b2ca-2ed58ac16694",
    bottom: "46f55746-01f0-47f6-91e3-c6e1994a15dc",
    edges: [
      "f82b6f3f-c8bc-418a-8faa-a9b6a8bd14eb",
      "8b5788fa-6db2-4c2a-aacf-46b919b313b8",
      "98e36b62-0686-4250-a7b6-c2bfeda0db5d",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11040,
      y: 4500,
    },
    name: "BattleField",
    id: "3332c824-483f-4e8b-b2ca-2ed58ac16694",
    left: "d35e57f3-1698-470d-9cf2-a6c32d06f9d1",
    right: "6103c3b2-2a66-4127-9de6-c4977de0180c",
    bottom: "f7920f23-a83a-4b60-8e0d-5fb06ed6971e",
    edges: [
      "8b5788fa-6db2-4c2a-aacf-46b919b313b8",
      "a7a01cdd-4345-4c36-9f11-1c685d861e14",
      "18ccc355-645a-4b6f-b42d-94b75ccb3626",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11240,
      y: 4520,
    },
    name: "BattleField",
    id: "6103c3b2-2a66-4127-9de6-c4977de0180c",
    left: "3332c824-483f-4e8b-b2ca-2ed58ac16694",
    top: "53effe12-91ca-4926-bf35-2e3ae1efe18b",
    edges: [
      "a7a01cdd-4345-4c36-9f11-1c685d861e14",
      "dbf43287-c5a0-4ccf-a062-0bf9b13dd295",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11040,
      y: 4660,
    },
    name: "BattleField",
    id: "f7920f23-a83a-4b60-8e0d-5fb06ed6971e",
    top: "3332c824-483f-4e8b-b2ca-2ed58ac16694",
    bottom: "21300f3e-bf66-4007-8b97-19b2d27368ff",
    edges: [
      "18ccc355-645a-4b6f-b42d-94b75ccb3626",
      "48f40798-57f3-40c1-a222-1ed036a448a6",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11040,
      y: 4820,
    },
    name: "TreasureField",
    id: "21300f3e-bf66-4007-8b97-19b2d27368ff",
    top: "f7920f23-a83a-4b60-8e0d-5fb06ed6971e",
    right: "8e5a4e93-9ada-4c47-b98f-75a4379e87c9",
    edges: [
      "48f40798-57f3-40c1-a222-1ed036a448a6",
      "e44e65f5-1c80-4870-87f8-e9a1d71ee1f1",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11320,
      y: 4820,
    },
    name: "BattleField",
    id: "8e5a4e93-9ada-4c47-b98f-75a4379e87c9",
    left: "21300f3e-bf66-4007-8b97-19b2d27368ff",
    bottom: "ae4d726c-95e8-4ed0-a30b-84420b10fa32",
    edges: [
      "e44e65f5-1c80-4870-87f8-e9a1d71ee1f1",
      "90402844-d474-4cd0-8ee5-a881eef78dd7",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11280,
      y: 5000,
    },
    name: "BattleField",
    id: "ae4d726c-95e8-4ed0-a30b-84420b10fa32",
    top: "8e5a4e93-9ada-4c47-b98f-75a4379e87c9",
    right: "324eda46-0b89-44c1-8cbe-9f8a01ceb400",
    bottom: "42a0a5eb-cad9-4222-8b31-a207f1094e5c",
    edges: [
      "90402844-d474-4cd0-8ee5-a881eef78dd7",
      "de1a3f8c-214a-45c9-ae8b-7ec58ad414d8",
      "ffd4355e-429f-411f-867b-3bf17c209682",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11600,
      y: 5000,
    },
    name: "BattleField",
    id: "324eda46-0b89-44c1-8cbe-9f8a01ceb400",
    left: "ae4d726c-95e8-4ed0-a30b-84420b10fa32",
    top: "7622c1ce-8faa-48f8-b36b-f3301e530589",
    edges: [
      "de1a3f8c-214a-45c9-ae8b-7ec58ad414d8",
      "d381a709-d143-48b8-b28c-915fc3d336ea",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11640,
      y: 4820,
    },
    name: "MagicBookField",
    id: "7622c1ce-8faa-48f8-b36b-f3301e530589",
    bottom: "324eda46-0b89-44c1-8cbe-9f8a01ceb400",
    right: "bcf60b15-f65a-413a-b3d1-0cbd4385ee7d",
    edges: [
      "d381a709-d143-48b8-b28c-915fc3d336ea",
      "c45f6089-b95a-46d0-8309-318f612e7be2",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11920,
      y: 4820,
    },
    name: "BattleField",
    id: "bcf60b15-f65a-413a-b3d1-0cbd4385ee7d",
    left: "7622c1ce-8faa-48f8-b36b-f3301e530589",
    top: "113a3624-e0cd-4932-a9e8-a4ec1eea3ed9",
    bottom: "0ac1b13d-1e2b-4cd6-88dc-e1699935a6e3",
    edges: [
      "c45f6089-b95a-46d0-8309-318f612e7be2",
      "cd63b4c2-ef78-428f-94a5-7a957ee07527",
      "f281b11b-b26a-4dbc-a189-50b0434bd99f",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11720,
      y: 4500,
    },
    name: "TreasureField",
    id: "21cf69eb-fec9-4343-a497-3050d4c24015",
    top: "3842b0d8-1c2e-4698-b86d-55256201c6b6",
    right: "99078231-bffc-4bb9-a51e-bda2b175d1f4",
    edges: [
      "767bc2ec-b62f-4225-addf-9dd46e355246",
      "dcc233cf-659f-4d86-be61-70acb94fdd58",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11920,
      y: 4500,
    },
    name: "BattleField",
    id: "99078231-bffc-4bb9-a51e-bda2b175d1f4",
    left: "21cf69eb-fec9-4343-a497-3050d4c24015",
    bottom: "113a3624-e0cd-4932-a9e8-a4ec1eea3ed9",
    edges: [
      "dcc233cf-659f-4d86-be61-70acb94fdd58",
      "e99f7100-ce3a-4bff-8b75-ae16180ce000",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11960,
      y: 4660,
    },
    name: "BattleField",
    id: "113a3624-e0cd-4932-a9e8-a4ec1eea3ed9",
    top: "99078231-bffc-4bb9-a51e-bda2b175d1f4",
    bottom: "bcf60b15-f65a-413a-b3d1-0cbd4385ee7d",
    right: "b25fbc58-7021-4201-a927-178a8c8b30ed",
    edges: [
      "e99f7100-ce3a-4bff-8b75-ae16180ce000",
      "cd63b4c2-ef78-428f-94a5-7a957ee07527",
      "896a7f15-8851-4781-8988-a55211999741",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12160,
      y: 4660,
    },
    name: "BattleField",
    id: "b25fbc58-7021-4201-a927-178a8c8b30ed",
    left: "113a3624-e0cd-4932-a9e8-a4ec1eea3ed9",
    top: "a36ad201-a212-466a-bcbe-3b3bf3e9a100",
    edges: [
      "896a7f15-8851-4781-8988-a55211999741",
      "a37c0b5f-49e3-4c65-88b2-04e358248fd3",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12220,
      y: 4500,
    },
    name: "MagicBookField",
    id: "a36ad201-a212-466a-bcbe-3b3bf3e9a100",
    bottom: "b25fbc58-7021-4201-a927-178a8c8b30ed",
    right: "d541c219-0737-4d83-adaf-d64966ea59a9",
    edges: [
      "a37c0b5f-49e3-4c65-88b2-04e358248fd3",
      "7b2a9293-ac5e-4ea2-b409-54724b21c264",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11920,
      y: 5000,
    },
    name: "TreasureField",
    id: "0ac1b13d-1e2b-4cd6-88dc-e1699935a6e3",
    top: "bcf60b15-f65a-413a-b3d1-0cbd4385ee7d",
    right: "6d0c280a-a843-4181-a3e9-941b09bdf350",
    edges: [
      "f281b11b-b26a-4dbc-a189-50b0434bd99f",
      "90b5e0e0-5fe9-4b4a-93c4-b59c43bc3f35",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12180,
      y: 5000,
    },
    name: "MagicStoreField",
    id: "6d0c280a-a843-4181-a3e9-941b09bdf350",
    left: "0ac1b13d-1e2b-4cd6-88dc-e1699935a6e3",
    right: "80412215-58dc-4eef-8d01-d4943de40d39",
    edges: [
      "90b5e0e0-5fe9-4b4a-93c4-b59c43bc3f35",
      "3978fcd7-6657-4dec-957f-679a4e8770d0",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12480,
      y: 5000,
    },
    name: "BattleField",
    id: "80412215-58dc-4eef-8d01-d4943de40d39",
    left: "6d0c280a-a843-4181-a3e9-941b09bdf350",
    right: "e5db8eac-d6b1-4113-91c4-c6b42de3427b",
    bottom: "b889ec4d-b91e-4c3a-9827-878a3ab5d9af",
    edges: [
      "3978fcd7-6657-4dec-957f-679a4e8770d0",
      "e3e775e9-5a7d-418a-80b9-53376218f601",
      "30ec7563-21db-42d9-bfe9-ca02fdea9858",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12480,
      y: 4500,
    },
    name: "BattleField",
    id: "d541c219-0737-4d83-adaf-d64966ea59a9",
    left: "a36ad201-a212-466a-bcbe-3b3bf3e9a100",
    right: "44892f89-183a-47a5-8db4-d6ead47d666b",
    edges: [
      "7b2a9293-ac5e-4ea2-b409-54724b21c264",
      "4dbed6c3-5c19-4e03-818f-94917aa9d8e6",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12740,
      y: 4500,
    },
    name: "TreasureField",
    id: "44892f89-183a-47a5-8db4-d6ead47d666b",
    left: "d541c219-0737-4d83-adaf-d64966ea59a9",
    bottom: "ccb3c757-dc35-4a89-ace1-3ab17ca1515a",
    edges: [
      "4dbed6c3-5c19-4e03-818f-94917aa9d8e6",
      "22c0ac4a-7520-4d3c-9586-c64978892766",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12800,
      y: 4760,
    },
    name: "BattleField",
    id: "ccb3c757-dc35-4a89-ace1-3ab17ca1515a",
    top: "44892f89-183a-47a5-8db4-d6ead47d666b",
    bottom: "e5db8eac-d6b1-4113-91c4-c6b42de3427b",
    edges: [
      "22c0ac4a-7520-4d3c-9586-c64978892766",
      "6899d13d-86f6-439d-bb5c-435c08b1f71d",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12760,
      y: 5000,
    },
    name: "BattleField",
    id: "e5db8eac-d6b1-4113-91c4-c6b42de3427b",
    top: "ccb3c757-dc35-4a89-ace1-3ab17ca1515a",
    left: "80412215-58dc-4eef-8d01-d4943de40d39",
    edges: [
      "6899d13d-86f6-439d-bb5c-435c08b1f71d",
      "e3e775e9-5a7d-418a-80b9-53376218f601",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11280,
      y: 5220,
    },
    name: "BattleField",
    id: "42a0a5eb-cad9-4222-8b31-a207f1094e5c",
    top: "ae4d726c-95e8-4ed0-a30b-84420b10fa32",
    right: "865ff1d3-4cdb-4a79-afd0-35f77a99e89a",
    edges: [
      "ffd4355e-429f-411f-867b-3bf17c209682",
      "a15ec907-9991-41d4-a50f-2cdb478bd0f2",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11640,
      y: 5240,
    },
    name: "MagicBookField",
    id: "865ff1d3-4cdb-4a79-afd0-35f77a99e89a",
    left: "42a0a5eb-cad9-4222-8b31-a207f1094e5c",
    right: "57162ab6-3163-4f03-9c4d-cc678e830154",
    edges: [
      "a15ec907-9991-41d4-a50f-2cdb478bd0f2",
      "47232de0-54f9-430f-a4fa-2eec5fb1c5d0",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11880,
      y: 5240,
    },
    name: "VillageField",
    id: "57162ab6-3163-4f03-9c4d-cc678e830154",
    left: "865ff1d3-4cdb-4a79-afd0-35f77a99e89a",
    bottom: "37143f8c-d0ea-41e7-a17a-9ea636f143d9",
    edges: [
      "47232de0-54f9-430f-a4fa-2eec5fb1c5d0",
      "75cc2454-5db5-4f96-91a9-65557be07f79",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11880,
      y: 5420,
    },
    name: "BattleField",
    id: "37143f8c-d0ea-41e7-a17a-9ea636f143d9",
    top: "57162ab6-3163-4f03-9c4d-cc678e830154",
    right: "cf4459c4-44a8-4f24-abe6-e906cbee8db7",
    bottom: "8c214dd0-9f01-4068-85ec-a5c982e21683",
    edges: [
      "75cc2454-5db5-4f96-91a9-65557be07f79",
      "7893474a-f2be-4487-b3ff-6ec78ddafab6",
      "f74a1312-567a-4558-8e4b-e66bde72a9e4",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12120,
      y: 5420,
    },
    name: "GroceryStoreField",
    id: "cf4459c4-44a8-4f24-abe6-e906cbee8db7",
    left: "37143f8c-d0ea-41e7-a17a-9ea636f143d9",
    right: "7f151f03-9c95-4cf4-9e3d-1454a59ea28a",
    bottom: "4e276e92-cc5a-46d3-889d-ae529207d833",
    edges: [
      "7893474a-f2be-4487-b3ff-6ec78ddafab6",
      "dd1a9023-bcdc-4667-b659-f4adbcb7a6b6",
      "31e21edd-2282-4733-8d65-c80076cf9629",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12480,
      y: 5200,
    },
    name: "BattleField",
    id: "b889ec4d-b91e-4c3a-9827-878a3ab5d9af",
    top: "80412215-58dc-4eef-8d01-d4943de40d39",
    bottom: "5e6ffbe4-f16b-47d4-8c8e-e1120d52c783",
    edges: [
      "30ec7563-21db-42d9-bfe9-ca02fdea9858",
      "695b7cb4-5688-4812-a3c4-0fc571886d5a",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12300,
      y: 5420,
    },
    name: "BattleField",
    id: "7f151f03-9c95-4cf4-9e3d-1454a59ea28a",
    left: "cf4459c4-44a8-4f24-abe6-e906cbee8db7",
    right: "5e6ffbe4-f16b-47d4-8c8e-e1120d52c783",
    edges: [
      "dd1a9023-bcdc-4667-b659-f4adbcb7a6b6",
      "f3a3d526-5b19-47b6-ada0-73848cf2a64a",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12480,
      y: 5420,
    },
    name: "TreasureField",
    id: "5e6ffbe4-f16b-47d4-8c8e-e1120d52c783",
    left: "7f151f03-9c95-4cf4-9e3d-1454a59ea28a",
    top: "b889ec4d-b91e-4c3a-9827-878a3ab5d9af",
    bottom: "87827f0e-02d1-47e4-a158-cfc70b7c6770",
    edges: [
      "f3a3d526-5b19-47b6-ada0-73848cf2a64a",
      "695b7cb4-5688-4812-a3c4-0fc571886d5a",
      "7efb7b49-3816-4139-85dd-bee44e9809d5",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12480,
      y: 5600,
    },
    name: "BattleField",
    id: "87827f0e-02d1-47e4-a158-cfc70b7c6770",
    top: "5e6ffbe4-f16b-47d4-8c8e-e1120d52c783",
    left: "4e276e92-cc5a-46d3-889d-ae529207d833",
    edges: [
      "7efb7b49-3816-4139-85dd-bee44e9809d5",
      "5439e63e-f633-49bb-a6b0-b88eeca3d07c",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12120,
      y: 5600,
    },
    name: "MagicBookField",
    id: "4e276e92-cc5a-46d3-889d-ae529207d833",
    right: "87827f0e-02d1-47e4-a158-cfc70b7c6770",
    top: "cf4459c4-44a8-4f24-abe6-e906cbee8db7",
    bottom: "fd0bd91e-a81b-4c40-be7c-0d5513b5de3f",
    edges: [
      "5439e63e-f633-49bb-a6b0-b88eeca3d07c",
      "31e21edd-2282-4733-8d65-c80076cf9629",
      "a2ffba73-6ef9-4bee-a45a-55ce0efc5df2",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11880,
      y: 5780,
    },
    name: "BattleField",
    id: "8c214dd0-9f01-4068-85ec-a5c982e21683",
    top: "37143f8c-d0ea-41e7-a17a-9ea636f143d9",
    right: "fd0bd91e-a81b-4c40-be7c-0d5513b5de3f",
    left: "dced410a-d2c2-4b42-a78e-063a6913d7f1",
    bottom: "0365689d-554b-41f8-8e19-c489e7cd9391",
    edges: [
      "f74a1312-567a-4558-8e4b-e66bde72a9e4",
      "011fceb1-4e23-4f78-a4dc-fce710f41c27",
      "4db1ac2e-7117-403f-8e71-bc4fb5ba800d",
      "b56a6576-e346-4ad5-b270-5fa76e10b903",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 12120,
      y: 5780,
    },
    name: "BattleField",
    id: "fd0bd91e-a81b-4c40-be7c-0d5513b5de3f",
    top: "4e276e92-cc5a-46d3-889d-ae529207d833",
    left: "8c214dd0-9f01-4068-85ec-a5c982e21683",
    edges: [
      "a2ffba73-6ef9-4bee-a45a-55ce0efc5df2",
      "011fceb1-4e23-4f78-a4dc-fce710f41c27",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11640,
      y: 5780,
    },
    name: "WorldTransferField",
    id: "dced410a-d2c2-4b42-a78e-063a6913d7f1",
    right: "8c214dd0-9f01-4068-85ec-a5c982e21683",
    edges: ["4db1ac2e-7117-403f-8e71-bc4fb5ba800d"],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11880,
      y: 5960,
    },
    name: "BattleField",
    id: "0365689d-554b-41f8-8e19-c489e7cd9391",
    top: "8c214dd0-9f01-4068-85ec-a5c982e21683",
    left: "ebbe8686-e001-4891-903f-e961538fc635",
    bottom: "6102fc9c-3597-4c5b-9002-da6735804242",
    edges: [
      "b56a6576-e346-4ad5-b270-5fa76e10b903",
      "c6c7561a-85e6-4bc8-82d6-0b794f50d1a1",
      "ca223ae3-253b-40f3-8d9c-15c0891600ef",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11640,
      y: 5960,
    },
    name: "BattleField",
    id: "ebbe8686-e001-4891-903f-e961538fc635",
    right: "0365689d-554b-41f8-8e19-c489e7cd9391",
    left: "fba740dd-5a02-484e-8a72-2a7a0abbdc3c",
    edges: [
      "c6c7561a-85e6-4bc8-82d6-0b794f50d1a1",
      "7bd13200-57b9-48f1-88ae-8a534cdc7e18",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11880,
      y: 6160,
    },
    name: "BattleField",
    id: "6102fc9c-3597-4c5b-9002-da6735804242",
    top: "0365689d-554b-41f8-8e19-c489e7cd9391",
    left: "fa60d089-19e5-4457-9236-15efa0c0a6a1",
    bottom: "77b641a5-8582-422e-b5ce-37a4bf8a824d",
    edges: [
      "ca223ae3-253b-40f3-8d9c-15c0891600ef",
      "7683051d-1483-482d-bf02-e76ae02c50c2",
      "f2143ee0-385f-4434-816a-00e7b4d9735b",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11640,
      y: 6160,
    },
    name: "VillageField",
    id: "fa60d089-19e5-4457-9236-15efa0c0a6a1",
    right: "6102fc9c-3597-4c5b-9002-da6735804242",
    edges: ["7683051d-1483-482d-bf02-e76ae02c50c2"],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11880,
      y: 6340,
    },
    name: "BattleField",
    id: "77b641a5-8582-422e-b5ce-37a4bf8a824d",
    top: "6102fc9c-3597-4c5b-9002-da6735804242",
    edges: [
      "f2143ee0-385f-4434-816a-00e7b4d9735b",
      "b03ca105-658f-4ad2-8567-331971a12736",
    ],
    bottom: "d383a5cf-e41d-4e27-85b8-dc1276c54e6f",
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11400,
      y: 5960,
    },
    name: "TreasureField",
    id: "fba740dd-5a02-484e-8a72-2a7a0abbdc3c",
    right: "ebbe8686-e001-4891-903f-e961538fc635",
    bottom: "cdb588f3-7713-4385-93b9-7bd683011c25",
    left: "48ec3a26-88d0-4fd3-bb67-918cde855510",
    top: "87fb06be-5d03-4a20-983f-0da4e21a4471",
    edges: [
      "7bd13200-57b9-48f1-88ae-8a534cdc7e18",
      "8aa07261-ec99-44d5-b070-30829ed0dd4b",
      "a1c8683a-b8a3-4e70-a81c-13c7b62a7077",
      "beb232e3-7621-4e5c-b1b2-c233f6824a53",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11400,
      y: 6240,
    },
    name: "BattleField",
    id: "cdb588f3-7713-4385-93b9-7bd683011c25",
    top: "fba740dd-5a02-484e-8a72-2a7a0abbdc3c",
    bottom: "5988860f-565c-4f08-9889-b0bb93c18639",
    edges: [
      "8aa07261-ec99-44d5-b070-30829ed0dd4b",
      "83c40971-bd11-4967-9209-30f5ebb2ae51",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11400,
      y: 6520,
    },
    name: "BattleField",
    id: "5988860f-565c-4f08-9889-b0bb93c18639",
    top: "cdb588f3-7713-4385-93b9-7bd683011c25",
    left: "22ebaa03-4244-49ad-8f19-617fbebe92d4",
    edges: [
      "83c40971-bd11-4967-9209-30f5ebb2ae51",
      "6bc200b9-31bb-4c30-906e-082fe71899df",
      "f203326b-2351-4664-8edb-bf03fc5411d6",
    ],
    right: "d383a5cf-e41d-4e27-85b8-dc1276c54e6f",
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 5960,
    },
    name: "WeaponStoreField",
    id: "48ec3a26-88d0-4fd3-bb67-918cde855510",
    right: "fba740dd-5a02-484e-8a72-2a7a0abbdc3c",
    bottom: "1db72cc7-71c5-433d-9b50-ab20be04f5e5",
    edges: [
      "a1c8683a-b8a3-4e70-a81c-13c7b62a7077",
      "3df74d26-f512-48dc-8eaf-f6f54a535a14",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 6140,
    },
    name: "BattleField",
    id: "1db72cc7-71c5-433d-9b50-ab20be04f5e5",
    top: "48ec3a26-88d0-4fd3-bb67-918cde855510",
    bottom: "437773df-8f38-4312-b28a-f5b94382f265",
    edges: [
      "3df74d26-f512-48dc-8eaf-f6f54a535a14",
      "503c9baa-b185-4d32-b109-c0eafd697773",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 6340,
    },
    name: "MagicBookField",
    id: "437773df-8f38-4312-b28a-f5b94382f265",
    top: "1db72cc7-71c5-433d-9b50-ab20be04f5e5",
    bottom: "22ebaa03-4244-49ad-8f19-617fbebe92d4",
    edges: [
      "503c9baa-b185-4d32-b109-c0eafd697773",
      "09890f2d-df42-480b-b8da-419f0a2af599",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 6520,
    },
    name: "BattleField",
    id: "22ebaa03-4244-49ad-8f19-617fbebe92d4",
    top: "437773df-8f38-4312-b28a-f5b94382f265",
    right: "5988860f-565c-4f08-9889-b0bb93c18639",
    bottom: "59fcc765-08f5-4848-9fc4-ee465595ec26",
    edges: [
      "09890f2d-df42-480b-b8da-419f0a2af599",
      "f203326b-2351-4664-8edb-bf03fc5411d6",
      "933bcda3-2ce7-4a48-b191-ec7bb879bcd8",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11400,
      y: 5780,
    },
    name: "BattleField",
    id: "87fb06be-5d03-4a20-983f-0da4e21a4471",
    bottom: "fba740dd-5a02-484e-8a72-2a7a0abbdc3c",
    top: "23e75a46-1f1f-4203-b216-32d033f6950f",
    edges: [
      "beb232e3-7621-4e5c-b1b2-c233f6824a53",
      "83e4df11-f343-49ea-98b4-5c2e10c7607c",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11400,
      y: 5560,
    },
    name: "BattleField",
    id: "23e75a46-1f1f-4203-b216-32d033f6950f",
    bottom: "87fb06be-5d03-4a20-983f-0da4e21a4471",
    left: "5dcfcd78-2ed2-4732-97c7-8c006cd01339",
    edges: [
      "83e4df11-f343-49ea-98b4-5c2e10c7607c",
      "40858da6-ab78-4548-93b5-19773b084278",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 5560,
    },
    name: "BattleField",
    id: "5dcfcd78-2ed2-4732-97c7-8c006cd01339",
    right: "23e75a46-1f1f-4203-b216-32d033f6950f",
    top: "6392f833-ee05-439e-864e-ecdcf1098c3a",
    edges: [
      "40858da6-ab78-4548-93b5-19773b084278",
      "a9af3d12-795f-491e-a1f9-c1239cc66626",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 5340,
    },
    name: "VillageField",
    id: "6392f833-ee05-439e-864e-ecdcf1098c3a",
    bottom: "5dcfcd78-2ed2-4732-97c7-8c006cd01339",
    edges: ["a9af3d12-795f-491e-a1f9-c1239cc66626"],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10540,
      y: 4340,
    },
    name: "TreasureField",
    id: "8f8027d2-046a-4369-8329-0d2c43300aab",
    right: "8224298a-e89f-4ae3-bff5-5d646d9494a0",
    top: "67be83ed-2f2b-4bf9-8287-1ca00d6c4d8b",
    left: "05d4bde7-9387-499c-9a2d-18a74003930d",
    edges: [
      "badaef94-af53-4a9c-9608-37db4334671e",
      "d3e10e2d-da5c-432c-8efe-de8ae55061aa",
      "f5c0cecf-cc6a-4fb9-bda9-f0616f11e893",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10540,
      y: 4160,
    },
    name: "BattleField",
    id: "67be83ed-2f2b-4bf9-8287-1ca00d6c4d8b",
    bottom: "8f8027d2-046a-4369-8329-0d2c43300aab",
    top: "d9e1f9df-7d5e-47e2-8206-6447e62f3278",
    edges: [
      "d3e10e2d-da5c-432c-8efe-de8ae55061aa",
      "47daea56-84d2-474a-bf69-9b0d7cc8190f",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10540,
      y: 3980,
    },
    name: "VillageField",
    id: "d9e1f9df-7d5e-47e2-8206-6447e62f3278",
    bottom: "67be83ed-2f2b-4bf9-8287-1ca00d6c4d8b",
    edges: ["47daea56-84d2-474a-bf69-9b0d7cc8190f"],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10340,
      y: 4340,
    },
    name: "BattleField",
    id: "05d4bde7-9387-499c-9a2d-18a74003930d",
    right: "8f8027d2-046a-4369-8329-0d2c43300aab",
    left: "fa438c24-0219-4021-bcb7-05b65804acdc",
    edges: [
      "f5c0cecf-cc6a-4fb9-bda9-f0616f11e893",
      "4567dd77-a901-4193-9481-ff260898f1ba",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10140,
      y: 4340,
    },
    name: "BattleField",
    id: "fa438c24-0219-4021-bcb7-05b65804acdc",
    right: "05d4bde7-9387-499c-9a2d-18a74003930d",
    top: "2f3412d6-5927-4552-8e58-ab49350b1d78",
    edges: [
      "4567dd77-a901-4193-9481-ff260898f1ba",
      "d97f4989-4bfb-4a48-a91e-8aef89185a5a",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10140,
      y: 4160,
    },
    name: "RedTreasureField",
    id: "2f3412d6-5927-4552-8e58-ab49350b1d78",
    bottom: "fa438c24-0219-4021-bcb7-05b65804acdc",
    top: "6b67b916-bbe1-4c25-8f58-b025aef5f643",
    left: "891c3b56-8d54-4ed8-bcbd-17b7340166b6",
    edges: [
      "d97f4989-4bfb-4a48-a91e-8aef89185a5a",
      "e63128e5-abf6-4a52-80b5-66b9f4b893e8",
      "0d607893-ebbc-4b86-a89d-53f68859fee7",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10140,
      y: 3980,
    },
    name: "BattleField",
    id: "6b67b916-bbe1-4c25-8f58-b025aef5f643",
    bottom: "2f3412d6-5927-4552-8e58-ab49350b1d78",
    top: "8df06c1f-3879-4a73-a282-fc4cce068ea9",
    edges: [
      "e63128e5-abf6-4a52-80b5-66b9f4b893e8",
      "418b6741-d721-4b4f-81e2-8db0a44f09b1",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10140,
      y: 3780,
    },
    name: "BattleField",
    id: "8df06c1f-3879-4a73-a282-fc4cce068ea9",
    bottom: "6b67b916-bbe1-4c25-8f58-b025aef5f643",
    right: "f59b7f29-a829-4fea-9471-a7420953a7e9",
    edges: [
      "418b6741-d721-4b4f-81e2-8db0a44f09b1",
      "3c74207f-4165-4ec6-aef2-ecb117501696",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10340,
      y: 3780,
    },
    name: "VillageField",
    id: "f59b7f29-a829-4fea-9471-a7420953a7e9",
    left: "8df06c1f-3879-4a73-a282-fc4cce068ea9",
    edges: ["3c74207f-4165-4ec6-aef2-ecb117501696"],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10840,
      y: 4700,
    },
    name: "BattleField",
    id: "46f55746-01f0-47f6-91e3-c6e1994a15dc",
    top: "d35e57f3-1698-470d-9cf2-a6c32d06f9d1",
    left: "b90c3006-b909-4faf-aea1-8f02438482d0",
    edges: [
      "98e36b62-0686-4250-a7b6-c2bfeda0db5d",
      "69ec8bde-10d4-4d69-a558-c7606c391cf0",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10540,
      y: 4640,
    },
    name: "MagicBookField",
    id: "b90c3006-b909-4faf-aea1-8f02438482d0",
    right: "46f55746-01f0-47f6-91e3-c6e1994a15dc",
    bottom: "d6574605-b9d1-4f26-8f08-1fbbdabc5a02",
    edges: [
      "69ec8bde-10d4-4d69-a558-c7606c391cf0",
      "2cc5f168-56b9-46b7-891b-023095495fef",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10540,
      y: 4820,
    },
    name: "BattleField",
    id: "d6574605-b9d1-4f26-8f08-1fbbdabc5a02",
    top: "b90c3006-b909-4faf-aea1-8f02438482d0",
    left: "8ea776cb-d993-4643-8a7c-b043b7c375c9",
    edges: [
      "2cc5f168-56b9-46b7-891b-023095495fef",
      "d024b232-6d51-4a54-a3ba-2f46350e5f4d",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10200,
      y: 4840,
    },
    name: "BattleField",
    id: "8ea776cb-d993-4643-8a7c-b043b7c375c9",
    right: "d6574605-b9d1-4f26-8f08-1fbbdabc5a02",
    top: "f538dcf3-c139-4a00-9414-4be09d505bff",
    bottom: "492ee90d-9e0a-492f-94c1-5a8a0fc6a25b",
    edges: [
      "d024b232-6d51-4a54-a3ba-2f46350e5f4d",
      "ccd45b58-be25-495e-8e27-6d443acffe47",
      "6cf0715d-ca02-449d-86d8-59d84724d1c4",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10200,
      y: 4660,
    },
    name: "BattleField",
    id: "f538dcf3-c139-4a00-9414-4be09d505bff",
    bottom: "8ea776cb-d993-4643-8a7c-b043b7c375c9",
    left: "09116ed1-719d-4bc4-b1d2-d526be63b174",
    edges: [
      "ccd45b58-be25-495e-8e27-6d443acffe47",
      "a0004244-7a21-4174-9529-4ec1e8bbd18b",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10000,
      y: 4660,
    },
    name: "TreasureField",
    id: "09116ed1-719d-4bc4-b1d2-d526be63b174",
    right: "f538dcf3-c139-4a00-9414-4be09d505bff",
    bottom: "7815962e-40bf-4486-9193-e7c0ac3824b3",
    top: "f1ad04d3-a2d4-4d28-abaf-010c7473ea94",
    left: "9eb7954a-9aaa-4def-b093-164f2114fc5c",
    edges: [
      "a0004244-7a21-4174-9529-4ec1e8bbd18b",
      "f95a401c-946d-4d74-90b4-70633b78db98",
      "38dc0cfb-bfbb-4aac-80d0-fcfdbba95775",
      "8e66b48d-7d2d-4d6c-afb4-362ba204ea2c",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10000,
      y: 5000,
    },
    name: "BattleField",
    id: "7815962e-40bf-4486-9193-e7c0ac3824b3",
    top: "09116ed1-719d-4bc4-b1d2-d526be63b174",
    right: "492ee90d-9e0a-492f-94c1-5a8a0fc6a25b",
    bottom: "a28dcef8-291a-4c61-b85a-021793a0f929",
    edges: [
      "f95a401c-946d-4d74-90b4-70633b78db98",
      "d7a24eed-1d39-43ca-a739-1b89d7cd8767",
      "39625694-2a4d-488f-9ee0-d2b757ab56aa",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10200,
      y: 5000,
    },
    name: "BattleField",
    id: "492ee90d-9e0a-492f-94c1-5a8a0fc6a25b",
    left: "7815962e-40bf-4486-9193-e7c0ac3824b3",
    top: "8ea776cb-d993-4643-8a7c-b043b7c375c9",
    right: "45922761-940e-4761-86df-b732f30aa031",
    bottom: "5d476db5-d58b-4836-8818-3f0c48aee6ca",
    edges: [
      "d7a24eed-1d39-43ca-a739-1b89d7cd8767",
      "6cf0715d-ca02-449d-86d8-59d84724d1c4",
      "4b462495-9d53-44e7-a85c-6bd5d8cf0de7",
      "2298cdff-461c-4c25-bcc6-239cfb50fc87",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10680,
      y: 5000,
    },
    name: "TreasureField",
    id: "45922761-940e-4761-86df-b732f30aa031",
    left: "492ee90d-9e0a-492f-94c1-5a8a0fc6a25b",
    top: "27fa5b41-e23f-4eb0-83ed-6d793e48bf4d",
    edges: [
      "4b462495-9d53-44e7-a85c-6bd5d8cf0de7",
      "c8bdaabd-d27d-48f2-9a47-e23a4a35d770",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10700,
      y: 4820,
    },
    name: "VillageField",
    id: "27fa5b41-e23f-4eb0-83ed-6d793e48bf4d",
    bottom: "45922761-940e-4761-86df-b732f30aa031",
    edges: ["c8bdaabd-d27d-48f2-9a47-e23a4a35d770"],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10000,
      y: 4340,
    },
    name: "BattleField",
    id: "f1ad04d3-a2d4-4d28-abaf-010c7473ea94",
    bottom: "09116ed1-719d-4bc4-b1d2-d526be63b174",
    left: "81e0d087-484c-4681-8c07-bca29caa4180",
    edges: [
      "38dc0cfb-bfbb-4aac-80d0-fcfdbba95775",
      "4adf654e-2952-42af-8f22-d8d93d42346e",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 9780,
      y: 4660,
    },
    name: "BattleField",
    id: "9eb7954a-9aaa-4def-b093-164f2114fc5c",
    right: "09116ed1-719d-4bc4-b1d2-d526be63b174",
    top: "78fb2022-3cfc-4fa6-a255-c98a167a4b08",
    edges: [
      "8e66b48d-7d2d-4d6c-afb4-362ba204ea2c",
      "6737f94c-4f85-4215-9346-6bc0f0e3b3b0",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 9780,
      y: 4500,
    },
    name: "BattleField",
    id: "78fb2022-3cfc-4fa6-a255-c98a167a4b08",
    bottom: "9eb7954a-9aaa-4def-b093-164f2114fc5c",
    top: "81e0d087-484c-4681-8c07-bca29caa4180",
    edges: [
      "6737f94c-4f85-4215-9346-6bc0f0e3b3b0",
      "c8b47408-a114-4d14-9f31-d35dc616937d",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 9780,
      y: 4340,
    },
    name: "BattleField",
    id: "81e0d087-484c-4681-8c07-bca29caa4180",
    bottom: "78fb2022-3cfc-4fa6-a255-c98a167a4b08",
    right: "f1ad04d3-a2d4-4d28-abaf-010c7473ea94",
    top: "891c3b56-8d54-4ed8-bcbd-17b7340166b6",
    edges: [
      "c8b47408-a114-4d14-9f31-d35dc616937d",
      "4adf654e-2952-42af-8f22-d8d93d42346e",
      "20eda4ff-4d2f-4749-b7b0-723a263a6fad",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 9780,
      y: 4160,
    },
    name: "BattleField",
    id: "891c3b56-8d54-4ed8-bcbd-17b7340166b6",
    bottom: "81e0d087-484c-4681-8c07-bca29caa4180",
    right: "2f3412d6-5927-4552-8e58-ab49350b1d78",
    top: "5f879ba0-f012-4a70-b304-6713f64df54b",
    edges: [
      "20eda4ff-4d2f-4749-b7b0-723a263a6fad",
      "0d607893-ebbc-4b86-a89d-53f68859fee7",
      "c26d3ebb-e9e5-4498-b792-8fef83def95d",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 9840,
      y: 3820,
    },
    name: "TreasureField",
    id: "5f879ba0-f012-4a70-b304-6713f64df54b",
    bottom: "891c3b56-8d54-4ed8-bcbd-17b7340166b6",
    top: "7dd1aa1b-988b-4a85-aa8c-c26a6922a2d4",
    edges: [
      "c26d3ebb-e9e5-4498-b792-8fef83def95d",
      "8b2e3b5c-279a-465f-a975-c64609b73e18",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 9800,
      y: 3520,
    },
    name: "VillageField",
    id: "7dd1aa1b-988b-4a85-aa8c-c26a6922a2d4",
    bottom: "5f879ba0-f012-4a70-b304-6713f64df54b",
    edges: ["8b2e3b5c-279a-465f-a975-c64609b73e18"],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10200,
      y: 5220,
    },
    name: "BattleField",
    id: "5d476db5-d58b-4836-8818-3f0c48aee6ca",
    top: "492ee90d-9e0a-492f-94c1-5a8a0fc6a25b",
    edges: ["2298cdff-461c-4c25-bcc6-239cfb50fc87"],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10000,
      y: 5220,
    },
    name: "TreasureField",
    id: "a28dcef8-291a-4c61-b85a-021793a0f929",
    top: "7815962e-40bf-4486-9193-e7c0ac3824b3",
    bottom: "3c50a314-5c47-411c-90a7-4be5bc0ec91d",
    edges: [
      "39625694-2a4d-488f-9ee0-d2b757ab56aa",
      "1b9765b0-29ce-4fd6-a51a-a7c092043ffc",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10000,
      y: 5420,
    },
    name: "BattleField",
    id: "3c50a314-5c47-411c-90a7-4be5bc0ec91d",
    top: "a28dcef8-291a-4c61-b85a-021793a0f929",
    right: "0a99bbbf-8948-4f28-bd4d-782bdfe9d3bf",
    bottom: "d116d717-b679-40b7-9899-3a37d3ae0d00",
    edges: [
      "1b9765b0-29ce-4fd6-a51a-a7c092043ffc",
      "becbf9b3-3ef1-4207-a9fe-0fa9a3668eef",
      "302c3b5e-34bb-4d68-bfe1-a45ecaff89b2",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10200,
      y: 5420,
    },
    name: "BattleField",
    id: "0a99bbbf-8948-4f28-bd4d-782bdfe9d3bf",
    left: "3c50a314-5c47-411c-90a7-4be5bc0ec91d",
    bottom: "0c33406b-e0e0-47be-97aa-8307343d9f1b",
    edges: [
      "becbf9b3-3ef1-4207-a9fe-0fa9a3668eef",
      "f08354bd-111a-4030-8dea-b6c180373be5",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10000,
      y: 5840,
    },
    name: "BattleField",
    id: "d116d717-b679-40b7-9899-3a37d3ae0d00",
    top: "3c50a314-5c47-411c-90a7-4be5bc0ec91d",
    right: "1a5155a1-8dcb-478e-bf0f-ca7e91fa433d",
    edges: [
      "302c3b5e-34bb-4d68-bfe1-a45ecaff89b2",
      "5a1d02da-66b0-461c-85c1-360ad204ceb7",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10220,
      y: 5840,
    },
    name: "TreasureField",
    id: "1a5155a1-8dcb-478e-bf0f-ca7e91fa433d",
    left: "d116d717-b679-40b7-9899-3a37d3ae0d00",
    top: "0c33406b-e0e0-47be-97aa-8307343d9f1b",
    edges: [
      "5a1d02da-66b0-461c-85c1-360ad204ceb7",
      "07dd1f54-d2a5-4a05-b1dc-e998fccd982d",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10260,
      y: 5620,
    },
    name: "BattleField",
    id: "0c33406b-e0e0-47be-97aa-8307343d9f1b",
    top: "0a99bbbf-8948-4f28-bd4d-782bdfe9d3bf",
    bottom: "1a5155a1-8dcb-478e-bf0f-ca7e91fa433d",
    right: "a26d0b5e-7477-43f7-820a-419d3ed629df",
    edges: [
      "f08354bd-111a-4030-8dea-b6c180373be5",
      "07dd1f54-d2a5-4a05-b1dc-e998fccd982d",
      "c03daf06-ff3d-4297-b5cf-6cf224269e83",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10560,
      y: 5620,
    },
    name: "TreasureField",
    id: "a26d0b5e-7477-43f7-820a-419d3ed629df",
    left: "0c33406b-e0e0-47be-97aa-8307343d9f1b",
    bottom: "9ed7e992-1203-484c-b061-111db3160578",
    edges: [
      "c03daf06-ff3d-4297-b5cf-6cf224269e83",
      "f262d7b3-7567-4ca6-8f8c-59bf2926530b",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10560,
      y: 5880,
    },
    name: "BattleField",
    id: "9ed7e992-1203-484c-b061-111db3160578",
    top: "a26d0b5e-7477-43f7-820a-419d3ed629df",
    right: "8cf16e49-4f51-4180-acb7-518326133bb1",
    bottom: "8f00ae99-e3e1-4d21-a60d-22fd4e6ec5e9",
    edges: [
      "f262d7b3-7567-4ca6-8f8c-59bf2926530b",
      "883b6287-0a70-424b-8420-19b794fbee18",
      "a5df31b8-bc73-42d9-9bbb-a56cd004f931",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10860,
      y: 5880,
    },
    name: "VillageField",
    id: "8cf16e49-4f51-4180-acb7-518326133bb1",
    left: "9ed7e992-1203-484c-b061-111db3160578",
    edges: ["883b6287-0a70-424b-8420-19b794fbee18"],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10560,
      y: 6160,
    },
    name: "BattleField",
    id: "8f00ae99-e3e1-4d21-a60d-22fd4e6ec5e9",
    top: "9ed7e992-1203-484c-b061-111db3160578",
    left: "7148f97e-4f53-4e9b-96ef-b3ca7aaaa4e8",
    bottom: "cc1d81ad-c4ca-47aa-a90b-6dfa79fdf103",
    edges: [
      "a5df31b8-bc73-42d9-9bbb-a56cd004f931",
      "b5d352da-8edd-4162-85c2-32ab5dddce89",
      "8e147ae5-a800-4f7b-92ce-8b7281ee781b",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10340,
      y: 6160,
    },
    name: "BattleField",
    id: "7148f97e-4f53-4e9b-96ef-b3ca7aaaa4e8",
    right: "8f00ae99-e3e1-4d21-a60d-22fd4e6ec5e9",
    left: "67010eeb-a6f3-4e17-be9e-a614ca893cc3",
    edges: [
      "b5d352da-8edd-4162-85c2-32ab5dddce89",
      "21e91a1e-11f1-4ca9-83e8-b3e403be41b6",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10120,
      y: 6160,
    },
    name: "MagicBookField",
    id: "67010eeb-a6f3-4e17-be9e-a614ca893cc3",
    right: "7148f97e-4f53-4e9b-96ef-b3ca7aaaa4e8",
    left: "f873e57c-66a5-48fd-8974-9b6116c1178b",
    bottom: "fda566ee-ed3f-4b76-ab19-3a7ee7a68162",
    edges: [
      "21e91a1e-11f1-4ca9-83e8-b3e403be41b6",
      "204afc43-4184-425a-a95f-5192a63ac53e",
      "97e4eb16-63b3-4f5f-b479-01461050cde2",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 9840,
      y: 6160,
    },
    name: "BattleField",
    id: "f873e57c-66a5-48fd-8974-9b6116c1178b",
    right: "67010eeb-a6f3-4e17-be9e-a614ca893cc3",
    left: "bdce1b2f-6687-421e-9f15-9ad96a82eb39",
    edges: [
      "204afc43-4184-425a-a95f-5192a63ac53e",
      "c224a74f-c400-4109-9fd2-13e6d9722b72",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 9620,
      y: 6160,
    },
    name: "RedTreasureField",
    id: "bdce1b2f-6687-421e-9f15-9ad96a82eb39",
    right: "f873e57c-66a5-48fd-8974-9b6116c1178b",
    left: "2577337d-9910-4abf-8ca8-b74c214f98d9",
    edges: [
      "c224a74f-c400-4109-9fd2-13e6d9722b72",
      "fa6fb4d9-d5d1-4584-ab8b-5b0c2bc2a2c7",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 9400,
      y: 6160,
    },
    name: "CaveField",
    id: "2577337d-9910-4abf-8ca8-b74c214f98d9",
    right: "bdce1b2f-6687-421e-9f15-9ad96a82eb39",
    left: "5c922aa7-a1b4-46fd-b913-4ba3606153e8",
    edges: [
      "fa6fb4d9-d5d1-4584-ab8b-5b0c2bc2a2c7",
      "8e6a2765-b82c-466d-ac25-1bf6f14a195f",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10120,
      y: 6380,
    },
    name: "TreasureField",
    id: "fda566ee-ed3f-4b76-ab19-3a7ee7a68162",
    top: "67010eeb-a6f3-4e17-be9e-a614ca893cc3",
    right: "cc1d81ad-c4ca-47aa-a90b-6dfa79fdf103",
    edges: [
      "97e4eb16-63b3-4f5f-b479-01461050cde2",
      "e5ad92cf-15c6-48c5-aaa6-61590b4ccf3a",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10560,
      y: 6380,
    },
    name: "BattleField",
    id: "cc1d81ad-c4ca-47aa-a90b-6dfa79fdf103",
    left: "fda566ee-ed3f-4b76-ab19-3a7ee7a68162",
    top: "8f00ae99-e3e1-4d21-a60d-22fd4e6ec5e9",
    bottom: "2e2af268-3e7f-4ab6-9ca2-241980fb87f3",
    edges: [
      "e5ad92cf-15c6-48c5-aaa6-61590b4ccf3a",
      "8e147ae5-a800-4f7b-92ce-8b7281ee781b",
      "f9a693ab-4f94-472f-b181-1312e3a334a0",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 6700,
    },
    name: "BattleField",
    id: "59fcc765-08f5-4848-9fc4-ee465595ec26",
    top: "22ebaa03-4244-49ad-8f19-617fbebe92d4",
    bottom: "68b8a2c6-9498-4b48-b3d0-875713139458",
    edges: [
      "933bcda3-2ce7-4a48-b191-ec7bb879bcd8",
      "c5b002bc-2028-425b-b50d-ebae630a1bb4",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 6880,
    },
    name: "TreasureField",
    id: "68b8a2c6-9498-4b48-b3d0-875713139458",
    top: "59fcc765-08f5-4848-9fc4-ee465595ec26",
    right: "cf0fbcaf-d062-4340-b047-05666c68430e",
    bottom: "f3098aed-ef25-4478-8875-3ebb95ecc4cf",
    edges: [
      "c5b002bc-2028-425b-b50d-ebae630a1bb4",
      "24dd1352-6cf1-4343-a0a9-5d10d8292910",
      "445b20d4-0ffd-4860-ad9a-2ae132953052",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11400,
      y: 6880,
    },
    name: "JobStoreField",
    id: "cf0fbcaf-d062-4340-b047-05666c68430e",
    left: "68b8a2c6-9498-4b48-b3d0-875713139458",
    bottom: "fc6fde1f-c1af-45ec-b5ff-6fc75d663aba",
    edges: [
      "24dd1352-6cf1-4343-a0a9-5d10d8292910",
      "fda4ea28-229a-44f0-8ca5-ce7a52dd950d",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 7040,
    },
    name: "BattleField",
    id: "f3098aed-ef25-4478-8875-3ebb95ecc4cf",
    top: "68b8a2c6-9498-4b48-b3d0-875713139458",
    bottom: "dcab5ebe-447e-4290-8895-e638899f126a",
    edges: [
      "445b20d4-0ffd-4860-ad9a-2ae132953052",
      "71676431-82b9-4209-9944-5b5f798cfd78",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11180,
      y: 7200,
    },
    name: "BattleField",
    id: "dcab5ebe-447e-4290-8895-e638899f126a",
    top: "f3098aed-ef25-4478-8875-3ebb95ecc4cf",
    right: "fc6fde1f-c1af-45ec-b5ff-6fc75d663aba",
    edges: [
      "71676431-82b9-4209-9944-5b5f798cfd78",
      "3cdf7a26-a3f7-44b0-ae5f-dd33a444ec23",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11400,
      y: 7200,
    },
    name: "BattleField",
    id: "fc6fde1f-c1af-45ec-b5ff-6fc75d663aba",
    left: "dcab5ebe-447e-4290-8895-e638899f126a",
    top: "cf0fbcaf-d062-4340-b047-05666c68430e",
    right: "f61646a6-cbcf-417c-9982-d7f6a48dd63e",
    edges: [
      "3cdf7a26-a3f7-44b0-ae5f-dd33a444ec23",
      "fda4ea28-229a-44f0-8ca5-ce7a52dd950d",
      "44481dd2-d850-4679-a44d-3a51d1208225",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11600,
      y: 7200,
    },
    name: "CollectMoneyField",
    id: "f61646a6-cbcf-417c-9982-d7f6a48dd63e",
    left: "fc6fde1f-c1af-45ec-b5ff-6fc75d663aba",
    right: "b7eab131-0e3d-451b-82e3-12bc099df0d4",
    edges: [
      "44481dd2-d850-4679-a44d-3a51d1208225",
      "62c69269-583d-49e8-916f-b2f9b44a3a28",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11800,
      y: 7200,
    },
    name: "TreasureField",
    id: "b7eab131-0e3d-451b-82e3-12bc099df0d4",
    left: "f61646a6-cbcf-417c-9982-d7f6a48dd63e",
    bottom: "f6162eda-2cf9-4589-8415-b34c49fb6cce",
    edges: [
      "62c69269-583d-49e8-916f-b2f9b44a3a28",
      "51275b36-e609-4e00-8163-5219d5ea7859",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11800,
      y: 7400,
    },
    name: "CollectMoneyField",
    id: "f6162eda-2cf9-4589-8415-b34c49fb6cce",
    top: "b7eab131-0e3d-451b-82e3-12bc099df0d4",
    bottom: "5d38eee5-f98b-45d8-a6dd-1a9d06d3a788",
    edges: [
      "51275b36-e609-4e00-8163-5219d5ea7859",
      "dbff9aa4-7d25-4923-9e88-9cdf5add09cf",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11800,
      y: 7600,
    },
    name: "BattleField",
    id: "5d38eee5-f98b-45d8-a6dd-1a9d06d3a788",
    top: "f6162eda-2cf9-4589-8415-b34c49fb6cce",
    left: "9544ad37-9eba-47ae-8036-8af60ea6ba69",
    edges: [
      "dbff9aa4-7d25-4923-9e88-9cdf5add09cf",
      "e9d635b3-322a-47bc-9d29-327ff04f241b",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11600,
      y: 7600,
    },
    name: "CollectMoneyField",
    id: "9544ad37-9eba-47ae-8036-8af60ea6ba69",
    right: "5d38eee5-f98b-45d8-a6dd-1a9d06d3a788",
    left: "aa9b56a3-820f-4c97-8086-9bcd8b046d12",
    edges: [
      "e9d635b3-322a-47bc-9d29-327ff04f241b",
      "ae01fd24-0fcb-4460-bbc0-ec84c5441c8a",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11220,
      y: 7600,
    },
    name: "BattleField",
    id: "aa9b56a3-820f-4c97-8086-9bcd8b046d12",
    right: "9544ad37-9eba-47ae-8036-8af60ea6ba69",
    left: "ad3f00ff-4ece-4407-8baf-72876214da11",
    edges: [
      "ae01fd24-0fcb-4460-bbc0-ec84c5441c8a",
      "c2613c2e-a5db-4b5b-97d4-79298f6b5dc1",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10560,
      y: 6640,
    },
    name: "RedTreasureField",
    id: "2e2af268-3e7f-4ab6-9ca2-241980fb87f3",
    top: "cc1d81ad-c4ca-47aa-a90b-6dfa79fdf103",
    bottom: "6d97a000-007a-4e5d-ad9a-152682b7143a",
    edges: [
      "f9a693ab-4f94-472f-b181-1312e3a334a0",
      "ea4dd0c0-671e-4e88-9958-04875d8710a0",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10560,
      y: 6860,
    },
    name: "BattleField",
    id: "6d97a000-007a-4e5d-ad9a-152682b7143a",
    top: "2e2af268-3e7f-4ab6-9ca2-241980fb87f3",
    bottom: "fb3325fa-a1c9-40ba-b4bb-1813e4eaaa5e",
    edges: [
      "ea4dd0c0-671e-4e88-9958-04875d8710a0",
      "e95d31c1-de0a-4ef5-9020-2e24ae0d5d2a",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10560,
      y: 7080,
    },
    name: "TreasureField",
    id: "fb3325fa-a1c9-40ba-b4bb-1813e4eaaa5e",
    top: "6d97a000-007a-4e5d-ad9a-152682b7143a",
    right: "01698967-62c5-4129-b15d-57a7fc8274e9",
    bottom: "55d3e715-85af-4dd3-846a-6c359d9abcfe",
    edges: [
      "e95d31c1-de0a-4ef5-9020-2e24ae0d5d2a",
      "c4f0479d-7185-42a0-a4c3-162819604d55",
      "8a1c140a-1563-4ee9-a115-ef773e57858b",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10780,
      y: 7060,
    },
    name: "BattleField",
    id: "01698967-62c5-4129-b15d-57a7fc8274e9",
    left: "fb3325fa-a1c9-40ba-b4bb-1813e4eaaa5e",
    right: "2970b6d0-5f6d-4272-b63f-2d3969ef4cae",
    edges: [
      "c4f0479d-7185-42a0-a4c3-162819604d55",
      "b230b8da-5fbe-4dbe-b4a6-243453f0297a",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 11000,
      y: 7080,
    },
    name: "TreasureField",
    id: "2970b6d0-5f6d-4272-b63f-2d3969ef4cae",
    left: "01698967-62c5-4129-b15d-57a7fc8274e9",
    bottom: "e1011d70-ad7f-461e-92cf-104f5643642b",
    edges: [
      "b230b8da-5fbe-4dbe-b4a6-243453f0297a",
      "afaf81fe-10a1-4c67-b48c-bfa5d3e4f718",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10980,
      y: 7300,
    },
    name: "RedTreasureField",
    id: "e1011d70-ad7f-461e-92cf-104f5643642b",
    top: "2970b6d0-5f6d-4272-b63f-2d3969ef4cae",
    left: "55d3e715-85af-4dd3-846a-6c359d9abcfe",
    bottom: "ad3f00ff-4ece-4407-8baf-72876214da11",
    edges: [
      "afaf81fe-10a1-4c67-b48c-bfa5d3e4f718",
      "c62201e1-094e-4356-8b0a-4d3ebbb6ae4e",
      "51680e9d-34b9-424d-a5d2-a54bea035d8e",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10580,
      y: 7300,
    },
    name: "BattleField",
    id: "55d3e715-85af-4dd3-846a-6c359d9abcfe",
    top: "fb3325fa-a1c9-40ba-b4bb-1813e4eaaa5e",
    right: "e1011d70-ad7f-461e-92cf-104f5643642b",
    edges: [
      "8a1c140a-1563-4ee9-a115-ef773e57858b",
      "c62201e1-094e-4356-8b0a-4d3ebbb6ae4e",
    ],
    area: "SouthAmerica",
  },
  {
    position: {
      x: 10980,
      y: 7600,
    },
    name: "BattleField",
    id: "ad3f00ff-4ece-4407-8baf-72876214da11",
    top: "e1011d70-ad7f-461e-92cf-104f5643642b",
    right: "aa9b56a3-820f-4c97-8086-9bcd8b046d12",
    edges: [
      "51680e9d-34b9-424d-a5d2-a54bea035d8e",
      "c2613c2e-a5db-4b5b-97d4-79298f6b5dc1",
    ],
    area: "SouthAmerica",
  },
  {
    id: "d383a5cf-e41d-4e27-85b8-dc1276c54e6f",
    name: "TreasureField",
    position: {
      x: 11880,
      y: 6520,
    },
    edges: [
      "b03ca105-658f-4ad2-8567-331971a12736",
      "6bc200b9-31bb-4c30-906e-082fe71899df",
    ],
    top: "77b641a5-8582-422e-b5ce-37a4bf8a824d",
    left: "5988860f-565c-4f08-9889-b0bb93c18639",
    area: "SouthAmerica",
  },
];
const oceaniaVertices: Vertex[] = [
  {
    position: {
      x: 8780,
      y: 3900,
    },
    name: "BattleField",
    id: "1bdb1608-680b-4709-934a-af51f3437f0e",
    top: "647d5a1f-19b3-4e5f-ab82-38b78161e8b6",
    bottom: "bfbe5a2d-1385-4363-ab74-1c6d491c7694",
    edges: [
      "6c305ab2-6496-483f-a5b5-2eefc698801e",
      "3cb96eaa-dd72-46d0-a045-ec89d01b9c46",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8780,
      y: 4260,
    },
    name: "BattleField",
    id: "bfbe5a2d-1385-4363-ab74-1c6d491c7694",
    top: "1bdb1608-680b-4709-934a-af51f3437f0e",
    bottom: "ea5dfe09-5375-4c2f-a5dc-5a2e5a87546c",
    edges: [
      "3cb96eaa-dd72-46d0-a045-ec89d01b9c46",
      "39d31263-4d5b-448a-855a-36338eb73568",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8780,
      y: 4660,
    },
    name: "BattleField",
    id: "ea5dfe09-5375-4c2f-a5dc-5a2e5a87546c",
    top: "bfbe5a2d-1385-4363-ab74-1c6d491c7694",
    left: "a8ce067e-8382-4974-ac47-9ede8ef805f2",
    edges: [
      "39d31263-4d5b-448a-855a-36338eb73568",
      "25523f9b-e394-496c-80ea-e1c545fa4236",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8560,
      y: 4660,
    },
    name: "BattleField",
    id: "a8ce067e-8382-4974-ac47-9ede8ef805f2",
    right: "ea5dfe09-5375-4c2f-a5dc-5a2e5a87546c",
    bottom: "24660a06-fb01-4c58-8913-275f0f822eb1",
    edges: [
      "25523f9b-e394-496c-80ea-e1c545fa4236",
      "440c0721-904b-49f5-8d12-79c495fb921f",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8560,
      y: 4880,
    },
    name: "MagicBookField",
    id: "24660a06-fb01-4c58-8913-275f0f822eb1",
    top: "a8ce067e-8382-4974-ac47-9ede8ef805f2",
    edges: [
      "440c0721-904b-49f5-8d12-79c495fb921f",
      "ef196c38-b912-4d77-a3b8-1aac449e8d81",
    ],
    bottom: "f2681860-c863-41f0-8180-0f77fafeed4f",
    area: "Oceania",
  },
  {
    position: {
      x: 8560,
      y: 5300,
    },
    name: "BattleField",
    id: "661356f3-f7d5-404c-ab04-d97c3cf2345d",
    right: "e6e5a7d1-4ed1-4eae-a801-77822619d85f",
    bottom: "ed7d8634-4d3f-4f2a-a062-4662f6310649",
    left: "24a78f6f-cdb9-4d9d-a520-0e5accc0065c",
    edges: [
      "cc439bdd-1fff-41bd-a3cc-cac8a0dff4da",
      "4b4fd351-0c22-434d-ba81-b06c69168a70",
      "066c78f2-0db0-4fd7-b888-a7ab6502e26b",
      "69e0ddf7-81a8-48db-b671-017d71736e54",
    ],
    top: "f2681860-c863-41f0-8180-0f77fafeed4f",
    area: "Oceania",
  },
  {
    position: {
      x: 9020,
      y: 5300,
    },
    name: "BattleField",
    id: "e6e5a7d1-4ed1-4eae-a801-77822619d85f",
    left: "661356f3-f7d5-404c-ab04-d97c3cf2345d",
    bottom: "7c6442a1-7a79-4699-bcda-be3a77b2bf55",
    edges: [
      "cc439bdd-1fff-41bd-a3cc-cac8a0dff4da",
      "bfe4ccc4-940e-4670-8f8a-9345ff0ec779",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 9020,
      y: 5580,
    },
    name: "BattleField",
    id: "7c6442a1-7a79-4699-bcda-be3a77b2bf55",
    top: "e6e5a7d1-4ed1-4eae-a801-77822619d85f",
    left: "abf0c57d-c6fa-4a8e-bb42-428f910721d6",
    edges: [
      "bfe4ccc4-940e-4670-8f8a-9345ff0ec779",
      "70696caf-9e28-4eaa-b6cb-e99f086308a2",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8800,
      y: 5580,
    },
    name: "MagicBookField",
    id: "abf0c57d-c6fa-4a8e-bb42-428f910721d6",
    right: "7c6442a1-7a79-4699-bcda-be3a77b2bf55",
    left: "ed7d8634-4d3f-4f2a-a062-4662f6310649",
    bottom: "620529a0-d56b-455d-892e-eb8b31499f09",
    edges: [
      "70696caf-9e28-4eaa-b6cb-e99f086308a2",
      "92d204cd-8961-4c07-b8c5-82647786fae9",
      "b8a167b6-3e92-40f3-95ed-cb44baa4701c",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8560,
      y: 5580,
    },
    name: "TreasureField",
    id: "ed7d8634-4d3f-4f2a-a062-4662f6310649",
    top: "661356f3-f7d5-404c-ab04-d97c3cf2345d",
    right: "abf0c57d-c6fa-4a8e-bb42-428f910721d6",
    edges: [
      "4b4fd351-0c22-434d-ba81-b06c69168a70",
      "92d204cd-8961-4c07-b8c5-82647786fae9",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8800,
      y: 5900,
    },
    name: "BattleField",
    id: "620529a0-d56b-455d-892e-eb8b31499f09",
    top: "abf0c57d-c6fa-4a8e-bb42-428f910721d6",
    bottom: "5c922aa7-a1b4-46fd-b913-4ba3606153e8",
    edges: [
      "b8a167b6-3e92-40f3-95ed-cb44baa4701c",
      "5806d81c-f78c-4ad9-b266-1f58112e4fb8",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8800,
      y: 6160,
    },
    name: "TreasureField",
    id: "5c922aa7-a1b4-46fd-b913-4ba3606153e8",
    top: "620529a0-d56b-455d-892e-eb8b31499f09",
    right: "2577337d-9910-4abf-8ca8-b74c214f98d9",
    bottom: "13748d8a-58cd-4c48-94d0-8242397d75cb",
    edges: [
      "5806d81c-f78c-4ad9-b266-1f58112e4fb8",
      "8e6a2765-b82c-466d-ac25-1bf6f14a195f",
      "b047c741-db5e-47ef-bbb0-4e93eebab616",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8800,
      y: 6440,
    },
    name: "BattleField",
    id: "13748d8a-58cd-4c48-94d0-8242397d75cb",
    top: "5c922aa7-a1b4-46fd-b913-4ba3606153e8",
    bottom: "9e795219-27eb-4cb1-8dd8-e4a9b638b980",
    edges: [
      "b047c741-db5e-47ef-bbb0-4e93eebab616",
      "5ac9e8f4-b71f-429c-a7f0-ce69fcfedfaa",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8800,
      y: 6700,
    },
    name: "BattleField",
    id: "9e795219-27eb-4cb1-8dd8-e4a9b638b980",
    top: "13748d8a-58cd-4c48-94d0-8242397d75cb",
    left: "285d9287-41c8-4f6e-b413-04381c6df3f7",
    edges: [
      "5ac9e8f4-b71f-429c-a7f0-ce69fcfedfaa",
      "b635616a-0e11-4195-b8d6-a1626024a406",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8540,
      y: 6700,
    },
    name: "TreasureField",
    id: "285d9287-41c8-4f6e-b413-04381c6df3f7",
    right: "9e795219-27eb-4cb1-8dd8-e4a9b638b980",
    left: "64f96ab0-456a-4fae-b022-0751db4499fd",
    edges: [
      "b635616a-0e11-4195-b8d6-a1626024a406",
      "aab69e37-b163-41fd-93c4-01aa9dd1d3e2",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8320,
      y: 6700,
    },
    name: "BattleField",
    id: "64f96ab0-456a-4fae-b022-0751db4499fd",
    right: "285d9287-41c8-4f6e-b413-04381c6df3f7",
    left: "76bf1d3b-22b4-4a64-948f-1993c5f6bd07",
    edges: [
      "aab69e37-b163-41fd-93c4-01aa9dd1d3e2",
      "cb32a401-45bb-4c0d-9fa2-d240d3fdfd38",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8060,
      y: 6700,
    },
    name: "VillageField",
    id: "76bf1d3b-22b4-4a64-948f-1993c5f6bd07",
    right: "64f96ab0-456a-4fae-b022-0751db4499fd",
    bottom: "88af796b-5fa3-4d59-9b4c-07e2e8f98d65",
    edges: [
      "cb32a401-45bb-4c0d-9fa2-d240d3fdfd38",
      "49d94b79-5f08-4fda-8257-b493e6a0f477",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8060,
      y: 6980,
    },
    name: "BattleField",
    id: "88af796b-5fa3-4d59-9b4c-07e2e8f98d65",
    top: "76bf1d3b-22b4-4a64-948f-1993c5f6bd07",
    left: "8793a9e4-077d-4b46-b8cd-4508e9149349",
    bottom: "80709a68-9715-4c5f-abf2-81fd2dcbabd6",
    edges: [
      "49d94b79-5f08-4fda-8257-b493e6a0f477",
      "3b52643f-12fb-4171-870d-95ddfb15651c",
      "29bff261-84a0-40d8-ac77-2eaf0ff9acc5",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7820,
      y: 6980,
    },
    name: "JobStoreField",
    id: "8793a9e4-077d-4b46-b8cd-4508e9149349",
    right: "88af796b-5fa3-4d59-9b4c-07e2e8f98d65",
    bottom: "84ee492c-d892-4380-9cfb-65db1e38ecb9",
    left: "9c03d0b1-2ada-48f4-994a-7460e2d95ca6",
    edges: [
      "3b52643f-12fb-4171-870d-95ddfb15651c",
      "27d8ccd6-27d1-4a03-8141-f53e2417eec8",
      "2062df6b-6cc8-4674-9574-7a41596df47c",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7820,
      y: 7340,
    },
    name: "BattleField",
    id: "84ee492c-d892-4380-9cfb-65db1e38ecb9",
    top: "8793a9e4-077d-4b46-b8cd-4508e9149349",
    right: "d9f9d9a2-1b61-4ea1-8032-4072c6e894ea",
    left: "9ce1b81a-463c-4651-8f2a-fd70e1b93c59",
    edges: [
      "27d8ccd6-27d1-4a03-8141-f53e2417eec8",
      "1ed7b294-bfb2-471f-aefa-3bc472fd2317",
      "9f2cef0f-6a6f-47f9-8e61-831c8d3c09a2",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8060,
      y: 7160,
    },
    name: "BattleField",
    id: "80709a68-9715-4c5f-abf2-81fd2dcbabd6",
    top: "88af796b-5fa3-4d59-9b4c-07e2e8f98d65",
    bottom: "d9f9d9a2-1b61-4ea1-8032-4072c6e894ea",
    edges: [
      "29bff261-84a0-40d8-ac77-2eaf0ff9acc5",
      "93f66f75-b452-4b74-aeb6-bd50864ad3d6",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8060,
      y: 7340,
    },
    name: "TreasureField",
    id: "d9f9d9a2-1b61-4ea1-8032-4072c6e894ea",
    top: "80709a68-9715-4c5f-abf2-81fd2dcbabd6",
    left: "84ee492c-d892-4380-9cfb-65db1e38ecb9",
    edges: [
      "93f66f75-b452-4b74-aeb6-bd50864ad3d6",
      "1ed7b294-bfb2-471f-aefa-3bc472fd2317",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7480,
      y: 6980,
    },
    name: "BattleField",
    id: "9c03d0b1-2ada-48f4-994a-7460e2d95ca6",
    right: "8793a9e4-077d-4b46-b8cd-4508e9149349",
    left: "8ed3acf3-6eb1-4470-ac8b-496c98d5dacd",
    edges: [
      "2062df6b-6cc8-4674-9574-7a41596df47c",
      "3f1e662c-6172-49c7-bc6a-70c35608ce63",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7180,
      y: 6980,
    },
    name: "BattleField",
    id: "8ed3acf3-6eb1-4470-ac8b-496c98d5dacd",
    right: "9c03d0b1-2ada-48f4-994a-7460e2d95ca6",
    bottom: "7ad4ffcb-c07a-4079-812c-893bdf152744",
    top: "daaab021-b6bc-47c8-9f71-2c5ea6b60f17",
    edges: [
      "3f1e662c-6172-49c7-bc6a-70c35608ce63",
      "c5558d13-0a3c-491c-93a7-ebcbd966c896",
      "9fd97165-9939-4a7b-8bf7-af0c9016d713",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7180,
      y: 7340,
    },
    name: "TreasureField",
    id: "7ad4ffcb-c07a-4079-812c-893bdf152744",
    top: "8ed3acf3-6eb1-4470-ac8b-496c98d5dacd",
    right: "9ce1b81a-463c-4651-8f2a-fd70e1b93c59",
    left: "e5e7ec5e-4735-4f7b-93e0-01829d942f58",
    edges: [
      "c5558d13-0a3c-491c-93a7-ebcbd966c896",
      "0db836d2-2eac-4d2a-9765-6295e0469c68",
      "a7a2de30-5c4a-4202-b9bf-12bdae4231bd",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7560,
      y: 7340,
    },
    name: "BattleField",
    id: "9ce1b81a-463c-4651-8f2a-fd70e1b93c59",
    left: "7ad4ffcb-c07a-4079-812c-893bdf152744",
    right: "84ee492c-d892-4380-9cfb-65db1e38ecb9",
    edges: [
      "0db836d2-2eac-4d2a-9765-6295e0469c68",
      "9f2cef0f-6a6f-47f9-8e61-831c8d3c09a2",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 8200,
      y: 5300,
    },
    name: "BattleField",
    id: "24a78f6f-cdb9-4d9d-a520-0e5accc0065c",
    right: "661356f3-f7d5-404c-ab04-d97c3cf2345d",
    left: "d4e376b8-4242-46c1-a233-fe767991debd",
    edges: [
      "066c78f2-0db0-4fd7-b888-a7ab6502e26b",
      "b57f47e5-d565-4517-86fd-7d5c24c0a0d1",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7940,
      y: 5300,
    },
    name: "GoldTreasureField",
    id: "d4e376b8-4242-46c1-a233-fe767991debd",
    right: "24a78f6f-cdb9-4d9d-a520-0e5accc0065c",
    bottom: "0f616903-cbc5-43d5-b7a4-f86d90c24827",
    edges: [
      "b57f47e5-d565-4517-86fd-7d5c24c0a0d1",
      "8225817e-03ee-409e-a8e5-91ed59627684",
      "20bc8e6d-46b7-4e36-96ba-8d4cb65e7f97",
    ],
    top: "9ab009e3-fb04-4791-8dba-c2b3ebe48e63",
    area: "Oceania",
  },
  {
    position: {
      x: 7940,
      y: 5560,
    },
    name: "BattleField",
    id: "0f616903-cbc5-43d5-b7a4-f86d90c24827",
    top: "d4e376b8-4242-46c1-a233-fe767991debd",
    left: "1c51fd51-66ec-4269-bbd3-7cdccfbf09a8",
    edges: [
      "8225817e-03ee-409e-a8e5-91ed59627684",
      "b53807ed-fb4d-4007-828c-5b3373e071f4",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7480,
      y: 5560,
    },
    name: "TreasureField",
    id: "1c51fd51-66ec-4269-bbd3-7cdccfbf09a8",
    right: "0f616903-cbc5-43d5-b7a4-f86d90c24827",
    top: "4be7aa7c-e6d5-4fad-bcfb-9c73d56f8e14",
    edges: [
      "b53807ed-fb4d-4007-828c-5b3373e071f4",
      "5dbe1217-8752-4cd5-98cf-27f5fe89bea1",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7480,
      y: 5300,
    },
    name: "GoldTreasureField",
    id: "4be7aa7c-e6d5-4fad-bcfb-9c73d56f8e14",
    bottom: "1c51fd51-66ec-4269-bbd3-7cdccfbf09a8",
    left: "cec383cb-6b5d-4c98-972d-8871444d52c7",
    edges: [
      "5dbe1217-8752-4cd5-98cf-27f5fe89bea1",
      "ae356590-b75b-4767-9ec4-fd5a8de6fcb1",
      "4d8f1e78-0450-47a3-9133-bc53f8fa6896",
    ],
    top: "c9514ae3-0c66-4797-aac7-c4693765d28e",
    area: "Oceania",
  },
  {
    position: {
      x: 7220,
      y: 5300,
    },
    name: "BattleField",
    id: "cec383cb-6b5d-4c98-972d-8871444d52c7",
    right: "4be7aa7c-e6d5-4fad-bcfb-9c73d56f8e14",
    bottom: "6974eaca-a949-495e-80a1-c8ee8c76c8c0",
    left: "4a0e1d47-8a48-4ef2-97ad-7a8ed6f736dd",
    top: "df8481b4-b8ff-4cab-9832-e145a7f06dee",
    edges: [
      "ae356590-b75b-4767-9ec4-fd5a8de6fcb1",
      "8aa29224-7dff-4041-88a5-4b31265cc8fa",
      "902c7a76-e3f0-42de-b0d2-bd3e14305a92",
      "df46387c-7c90-48c1-b390-88043a579b40",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7220,
      y: 5500,
    },
    name: "BattleField",
    id: "6974eaca-a949-495e-80a1-c8ee8c76c8c0",
    top: "cec383cb-6b5d-4c98-972d-8871444d52c7",
    bottom: "bfacafb9-524e-4687-8c39-618cc2ada3d9",
    edges: [
      "8aa29224-7dff-4041-88a5-4b31265cc8fa",
      "23699959-43ff-42df-bbb1-d280d8c80ad5",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7220,
      y: 5720,
    },
    name: "BattleField",
    id: "bfacafb9-524e-4687-8c39-618cc2ada3d9",
    top: "6974eaca-a949-495e-80a1-c8ee8c76c8c0",
    left: "61261f0d-5a62-4f03-b512-94d2964b4727",
    edges: [
      "23699959-43ff-42df-bbb1-d280d8c80ad5",
      "ff9e19e4-69fd-4bfb-8d13-ef256a77203c",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6940,
      y: 5720,
    },
    name: "TreasureField",
    id: "61261f0d-5a62-4f03-b512-94d2964b4727",
    right: "bfacafb9-524e-4687-8c39-618cc2ada3d9",
    top: "4a0e1d47-8a48-4ef2-97ad-7a8ed6f736dd",
    edges: [
      "ff9e19e4-69fd-4bfb-8d13-ef256a77203c",
      "f7059298-bb4c-41fc-a3b9-ee549ad1d776",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6940,
      y: 5300,
    },
    name: "BattleField",
    id: "4a0e1d47-8a48-4ef2-97ad-7a8ed6f736dd",
    bottom: "61261f0d-5a62-4f03-b512-94d2964b4727",
    right: "cec383cb-6b5d-4c98-972d-8871444d52c7",
    edges: [
      "f7059298-bb4c-41fc-a3b9-ee549ad1d776",
      "902c7a76-e3f0-42de-b0d2-bd3e14305a92",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7220,
      y: 5060,
    },
    name: "BattleField",
    id: "df8481b4-b8ff-4cab-9832-e145a7f06dee",
    bottom: "cec383cb-6b5d-4c98-972d-8871444d52c7",
    left: "b6962d63-fc0f-46ed-9f39-b26ea219b161",
    edges: [
      "df46387c-7c90-48c1-b390-88043a579b40",
      "441095ef-56ad-4778-be78-3922311bbf9f",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6940,
      y: 5060,
    },
    name: "BattleField",
    id: "b6962d63-fc0f-46ed-9f39-b26ea219b161",
    right: "df8481b4-b8ff-4cab-9832-e145a7f06dee",
    top: "51ec81c7-b003-434f-a657-8ed6715dcb18",
    edges: [
      "441095ef-56ad-4778-be78-3922311bbf9f",
      "435fa9ee-9d86-4da5-b789-3ced92ce1475",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6940,
      y: 4840,
    },
    name: "BattleField",
    id: "51ec81c7-b003-434f-a657-8ed6715dcb18",
    bottom: "b6962d63-fc0f-46ed-9f39-b26ea219b161",
    top: "83532ab7-ea59-47b7-b532-16ebce69e455",
    edges: [
      "435fa9ee-9d86-4da5-b789-3ced92ce1475",
      "ea872b35-843e-4c6d-a558-bd3ae1a5db6a",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6940,
      y: 4600,
    },
    name: "BattleField",
    id: "83532ab7-ea59-47b7-b532-16ebce69e455",
    bottom: "51ec81c7-b003-434f-a657-8ed6715dcb18",
    left: "2d26ef41-f38f-4fa8-a987-5410b6c3b527",
    edges: [
      "ea872b35-843e-4c6d-a558-bd3ae1a5db6a",
      "cfa8305b-0957-47df-bf09-2f6ea35ee2a2",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7180,
      y: 6780,
    },
    name: "TreasureField",
    id: "daaab021-b6bc-47c8-9f71-2c5ea6b60f17",
    bottom: "8ed3acf3-6eb1-4470-ac8b-496c98d5dacd",
    left: "f0d4e5a4-5b54-49f3-9a5c-8eb11482c775",
    top: "d38da284-ae6b-4dad-abd7-56c209286c7a",
    edges: [
      "9fd97165-9939-4a7b-8bf7-af0c9016d713",
      "81caf242-15a0-4955-9a5d-567632cd907b",
      "f88f1482-087e-46c0-b9f3-dda9907f1979",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6840,
      y: 6780,
    },
    name: "BattleField",
    id: "f0d4e5a4-5b54-49f3-9a5c-8eb11482c775",
    right: "daaab021-b6bc-47c8-9f71-2c5ea6b60f17",
    left: "7b766969-ec3a-4369-98f0-b07824932ca6",
    edges: [
      "81caf242-15a0-4955-9a5d-567632cd907b",
      "a01f46e1-726a-435a-8743-a9150906db9b",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6840,
      y: 7340,
    },
    name: "BattleField",
    id: "e5e7ec5e-4735-4f7b-93e0-01829d942f58",
    right: "7ad4ffcb-c07a-4079-812c-893bdf152744",
    left: "916f081a-5e73-4aff-9874-39f7a39e3716",
    edges: [
      "a7a2de30-5c4a-4202-b9bf-12bdae4231bd",
      "0e1709e7-3450-4938-a983-626d294ab892",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6560,
      y: 6780,
    },
    name: "BattleField",
    id: "7b766969-ec3a-4369-98f0-b07824932ca6",
    right: "f0d4e5a4-5b54-49f3-9a5c-8eb11482c775",
    left: "3e153161-fa74-4893-809c-6abe5111b3bb",
    edges: [
      "a01f46e1-726a-435a-8743-a9150906db9b",
      "d8fa48fc-5349-4605-b796-51b496d27e5e",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6320,
      y: 6780,
    },
    name: "VillageField",
    id: "3e153161-fa74-4893-809c-6abe5111b3bb",
    right: "7b766969-ec3a-4369-98f0-b07824932ca6",
    edges: ["d8fa48fc-5349-4605-b796-51b496d27e5e"],
    area: "Oceania",
  },
  {
    position: {
      x: 6540,
      y: 7340,
    },
    name: "BattleField",
    id: "916f081a-5e73-4aff-9874-39f7a39e3716",
    right: "e5e7ec5e-4735-4f7b-93e0-01829d942f58",
    left: "1c58f6ba-56f7-4a79-8453-e3eb43aecacd",
    edges: [
      "0e1709e7-3450-4938-a983-626d294ab892",
      "f9dd416e-c187-49b5-8e12-65eec82e2887",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6140,
      y: 7340,
    },
    name: "BattleField",
    id: "1c58f6ba-56f7-4a79-8453-e3eb43aecacd",
    right: "916f081a-5e73-4aff-9874-39f7a39e3716",
    top: "a2f835ff-c596-4322-b0cb-c71857189390",
    left: "ff47b800-fdfa-4b55-ab68-748d2245e65e",
    edges: [
      "f9dd416e-c187-49b5-8e12-65eec82e2887",
      "f9005be5-a482-4aaf-99f1-5bb0c9eb91c7",
      "ad5e0def-7a82-48a3-9a87-5173e966134a",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6140,
      y: 7080,
    },
    name: "BattleField",
    id: "a2f835ff-c596-4322-b0cb-c71857189390",
    bottom: "1c58f6ba-56f7-4a79-8453-e3eb43aecacd",
    top: "8de305f9-d3e2-47de-9277-426c9d883a56",
    edges: [
      "f9005be5-a482-4aaf-99f1-5bb0c9eb91c7",
      "cbb9523c-86a6-4b92-a0af-66a5dd49b4f1",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6140,
      y: 6780,
    },
    name: "VillageField",
    id: "8de305f9-d3e2-47de-9277-426c9d883a56",
    bottom: "a2f835ff-c596-4322-b0cb-c71857189390",
    edges: ["cbb9523c-86a6-4b92-a0af-66a5dd49b4f1"],
    area: "Oceania",
  },
  {
    position: {
      x: 5660,
      y: 7340,
    },
    name: "TreasureField",
    id: "ff47b800-fdfa-4b55-ab68-748d2245e65e",
    right: "1c58f6ba-56f7-4a79-8453-e3eb43aecacd",
    top: "25dd6c96-fc59-4432-8f00-40ba8c9f0d2d",
    edges: [
      "ad5e0def-7a82-48a3-9a87-5173e966134a",
      "e944b584-2d38-4fc5-952c-77949eb5a4eb",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5660,
      y: 7140,
    },
    name: "BattleField",
    id: "25dd6c96-fc59-4432-8f00-40ba8c9f0d2d",
    bottom: "ff47b800-fdfa-4b55-ab68-748d2245e65e",
    left: "0b02271d-05a8-4ca5-9c3e-59d946ff0dfc",
    top: "b8c43d7d-f4cc-4ba9-ac75-75f2425a92da",
    edges: [
      "e944b584-2d38-4fc5-952c-77949eb5a4eb",
      "f25d8dc7-b591-4e6b-b0ba-cc7a41a03362",
      "c28f32af-e382-4187-b90f-21ec78f42c3a",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5240,
      y: 7140,
    },
    name: "BattleField",
    id: "0b02271d-05a8-4ca5-9c3e-59d946ff0dfc",
    right: "25dd6c96-fc59-4432-8f00-40ba8c9f0d2d",
    top: "c6873558-3547-46d5-acf0-e474b333e3a6",
    edges: [
      "f25d8dc7-b591-4e6b-b0ba-cc7a41a03362",
      "0ba6927e-f93d-43be-aad3-fafdf0773cc7",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5240,
      y: 6940,
    },
    name: "TreasureField",
    id: "c6873558-3547-46d5-acf0-e474b333e3a6",
    bottom: "0b02271d-05a8-4ca5-9c3e-59d946ff0dfc",
    right: "0f6f5faf-1981-4542-9483-91361ff013d8",
    left: "29242ec7-547a-4057-9611-c621674c18cd",
    top: "0823864a-8a34-493f-ab82-474a930778ca",
    edges: [
      "0ba6927e-f93d-43be-aad3-fafdf0773cc7",
      "f56f005a-c6ff-4243-aa61-1eab67800821",
      "93e5316c-5537-4ad9-892b-bb6063f50201",
      "2ce31c0f-3812-444b-8f1c-adc7769b8233",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5460,
      y: 6940,
    },
    name: "MagicBookField",
    id: "0f6f5faf-1981-4542-9483-91361ff013d8",
    left: "c6873558-3547-46d5-acf0-e474b333e3a6",
    right: "b8c43d7d-f4cc-4ba9-ac75-75f2425a92da",
    edges: [
      "f56f005a-c6ff-4243-aa61-1eab67800821",
      "0a21105a-8ce3-4ee2-b1e1-1b66acc0ffb0",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5660,
      y: 6940,
    },
    name: "BattleField",
    id: "b8c43d7d-f4cc-4ba9-ac75-75f2425a92da",
    left: "0f6f5faf-1981-4542-9483-91361ff013d8",
    bottom: "25dd6c96-fc59-4432-8f00-40ba8c9f0d2d",
    top: "901619df-8a61-4adf-9132-8d54e247128d",
    edges: [
      "0a21105a-8ce3-4ee2-b1e1-1b66acc0ffb0",
      "c28f32af-e382-4187-b90f-21ec78f42c3a",
      "1eadc740-3cfc-4383-8e13-f809084a6621",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5660,
      y: 6620,
    },
    name: "MagicStoreField",
    id: "901619df-8a61-4adf-9132-8d54e247128d",
    bottom: "b8c43d7d-f4cc-4ba9-ac75-75f2425a92da",
    right: "511afd82-3b5f-423c-bf47-45303d3c3967",
    edges: [
      "1eadc740-3cfc-4383-8e13-f809084a6621",
      "bda44373-5118-4350-8484-fa3aac41e98c",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5900,
      y: 6620,
    },
    name: "BattleField",
    id: "511afd82-3b5f-423c-bf47-45303d3c3967",
    left: "901619df-8a61-4adf-9132-8d54e247128d",
    right: "2777df35-bc91-48e2-8d47-a2358becd6f7",
    edges: [
      "bda44373-5118-4350-8484-fa3aac41e98c",
      "e4c6ae58-ab4d-4d7a-a99f-7bae632f0192",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6120,
      y: 6620,
    },
    name: "BattleField",
    id: "2777df35-bc91-48e2-8d47-a2358becd6f7",
    left: "511afd82-3b5f-423c-bf47-45303d3c3967",
    top: "e5a69b8c-6e13-45d4-8589-0938436e9ac1",
    edges: [
      "e4c6ae58-ab4d-4d7a-a99f-7bae632f0192",
      "00d4e604-2286-4334-ae0a-65abed474ab3",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6120,
      y: 6420,
    },
    name: "TreasureField",
    id: "e5a69b8c-6e13-45d4-8589-0938436e9ac1",
    bottom: "2777df35-bc91-48e2-8d47-a2358becd6f7",
    left: "58e20d25-5ccf-4e06-832e-de356e59bac9",
    right: "303a8e17-3f3f-4d0c-a78a-b42c38464726",
    edges: [
      "00d4e604-2286-4334-ae0a-65abed474ab3",
      "6dfe0155-30ac-4d3c-a1d2-22ba573835c6",
      "bc1e1647-6fb9-4e26-a1e7-574ada719ff1",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5900,
      y: 6420,
    },
    name: "BattleField",
    id: "58e20d25-5ccf-4e06-832e-de356e59bac9",
    right: "e5a69b8c-6e13-45d4-8589-0938436e9ac1",
    top: "f1265796-0f2e-43c4-be48-56414d040f00",
    edges: [
      "6dfe0155-30ac-4d3c-a1d2-22ba573835c6",
      "55862d52-2ca5-41a8-8adb-58eb2f209ec7",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5900,
      y: 6220,
    },
    name: "GroceryStoreField",
    id: "f1265796-0f2e-43c4-be48-56414d040f00",
    bottom: "58e20d25-5ccf-4e06-832e-de356e59bac9",
    right: "c2357c24-65d7-462a-85e5-bbb014449119",
    left: "6d6249e9-cca4-4568-8635-a2b54dc630e1",
    edges: [
      "55862d52-2ca5-41a8-8adb-58eb2f209ec7",
      "3bc23a10-8d8e-4352-b1e1-a88b713e0553",
      "af29f912-df2c-4d43-befe-4f1696d23636",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6340,
      y: 6220,
    },
    name: "BattleField",
    id: "c2357c24-65d7-462a-85e5-bbb014449119",
    left: "f1265796-0f2e-43c4-be48-56414d040f00",
    bottom: "303a8e17-3f3f-4d0c-a78a-b42c38464726",
    edges: [
      "3bc23a10-8d8e-4352-b1e1-a88b713e0553",
      "96470474-3d3a-4c22-93b9-091586d11a12",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6340,
      y: 6420,
    },
    name: "BattleField",
    id: "303a8e17-3f3f-4d0c-a78a-b42c38464726",
    top: "c2357c24-65d7-462a-85e5-bbb014449119",
    left: "e5a69b8c-6e13-45d4-8589-0938436e9ac1",
    right: "02c849aa-f126-46e5-a983-b41b0419191e",
    edges: [
      "96470474-3d3a-4c22-93b9-091586d11a12",
      "bc1e1647-6fb9-4e26-a1e7-574ada719ff1",
      "e78af61b-8665-48f9-ba2e-66d74b12ca8c",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6540,
      y: 6420,
    },
    name: "TreasureField",
    id: "02c849aa-f126-46e5-a983-b41b0419191e",
    left: "303a8e17-3f3f-4d0c-a78a-b42c38464726",
    top: "9ab61931-2f59-47c9-91fc-7d3f986dfdf9",
    edges: [
      "e78af61b-8665-48f9-ba2e-66d74b12ca8c",
      "7ae00207-1ec4-4b88-850a-3c1a3dab7068",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6540,
      y: 6080,
    },
    name: "BattleField",
    id: "9ab61931-2f59-47c9-91fc-7d3f986dfdf9",
    bottom: "02c849aa-f126-46e5-a983-b41b0419191e",
    left: "5388c61e-62f4-432d-802d-40138036bf50",
    top: "6b213d5a-5201-4758-b440-fd82433845f7",
    edges: [
      "7ae00207-1ec4-4b88-850a-3c1a3dab7068",
      "a8569941-8444-42cc-9041-cd91e88edd06",
      "73c35609-9f88-4cfa-afd1-14405a9f8dd6",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6100,
      y: 6080,
    },
    name: "BattleField",
    id: "5388c61e-62f4-432d-802d-40138036bf50",
    right: "9ab61931-2f59-47c9-91fc-7d3f986dfdf9",
    top: "68b219c8-3865-40d8-8b55-1985123557f2",
    edges: [
      "a8569941-8444-42cc-9041-cd91e88edd06",
      "ecaa1c78-59d5-4a7f-bb59-33e37801061e",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6100,
      y: 5880,
    },
    name: "BattleField",
    id: "68b219c8-3865-40d8-8b55-1985123557f2",
    bottom: "5388c61e-62f4-432d-802d-40138036bf50",
    right: "ca1fa3dd-7d22-4f42-a99e-99fa69b82d8a",
    top: "63c4d6b2-ee30-4167-9779-472052f29824",
    edges: [
      "ecaa1c78-59d5-4a7f-bb59-33e37801061e",
      "2c71d4bf-1d41-49da-be46-0fdca5593f09",
      "b3f1ef27-46b4-4c74-a267-69992107b50c",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6320,
      y: 5880,
    },
    name: "TreasureField",
    id: "ca1fa3dd-7d22-4f42-a99e-99fa69b82d8a",
    left: "68b219c8-3865-40d8-8b55-1985123557f2",
    right: "6b213d5a-5201-4758-b440-fd82433845f7",
    top: "55fb6a65-6890-4a3a-aa10-96108c1f67ea",
    edges: [
      "2c71d4bf-1d41-49da-be46-0fdca5593f09",
      "572bb1a8-7205-450b-ab86-fb74951b304e",
      "2e2ba4db-bfae-4259-a83d-e00a011a0e88",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6540,
      y: 5880,
    },
    name: "BattleField",
    id: "6b213d5a-5201-4758-b440-fd82433845f7",
    left: "ca1fa3dd-7d22-4f42-a99e-99fa69b82d8a",
    bottom: "9ab61931-2f59-47c9-91fc-7d3f986dfdf9",
    edges: [
      "572bb1a8-7205-450b-ab86-fb74951b304e",
      "73c35609-9f88-4cfa-afd1-14405a9f8dd6",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 7160,
      y: 6380,
    },
    name: "BattleField",
    id: "d38da284-ae6b-4dad-abd7-56c209286c7a",
    bottom: "daaab021-b6bc-47c8-9f71-2c5ea6b60f17",
    left: "fb64289f-8101-4b82-8775-81fedc28966f",
    edges: [
      "f88f1482-087e-46c0-b9f3-dda9907f1979",
      "29768aac-66fd-4f13-ac1a-0ffb84df63a0",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6960,
      y: 6380,
    },
    name: "BattleField",
    id: "fb64289f-8101-4b82-8775-81fedc28966f",
    right: "d38da284-ae6b-4dad-abd7-56c209286c7a",
    left: "b3d620e6-4270-47ad-ba83-28dd639b0ec9",
    top: "9a18db3a-0ed1-4b47-b8bd-975bea9edf87",
    edges: [
      "29768aac-66fd-4f13-ac1a-0ffb84df63a0",
      "a4e6e487-14e7-4a4e-9304-8928fb94d025",
      "35f7d429-7693-4419-a1fd-6ae6e98b2e22",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6740,
      y: 6380,
    },
    name: "BattleField",
    id: "b3d620e6-4270-47ad-ba83-28dd639b0ec9",
    right: "fb64289f-8101-4b82-8775-81fedc28966f",
    top: "87a28c22-4c29-4574-b4f8-ecdeb9b49db9",
    edges: [
      "a4e6e487-14e7-4a4e-9304-8928fb94d025",
      "89f6c28f-8a32-4894-a593-07beea86e749",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6740,
      y: 5920,
    },
    name: "MagicBookField",
    id: "87a28c22-4c29-4574-b4f8-ecdeb9b49db9",
    bottom: "b3d620e6-4270-47ad-ba83-28dd639b0ec9",
    right: "db397003-0d05-4cab-9a70-c810e73b560e",
    top: "025247b8-1345-4b42-95ee-e4aff5e49519",
    edges: [
      "89f6c28f-8a32-4894-a593-07beea86e749",
      "1f4e5954-88ad-47d3-9b88-518287adacf2",
      "3afac629-cabf-489c-89d2-ee8fee8a73a0",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6960,
      y: 5920,
    },
    name: "BattleField",
    id: "db397003-0d05-4cab-9a70-c810e73b560e",
    left: "87a28c22-4c29-4574-b4f8-ecdeb9b49db9",
    bottom: "9a18db3a-0ed1-4b47-b8bd-975bea9edf87",
    edges: [
      "1f4e5954-88ad-47d3-9b88-518287adacf2",
      "624ea6f2-2e80-42fe-9dd7-5342844df94e",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6960,
      y: 6140,
    },
    name: "TreasureField",
    id: "9a18db3a-0ed1-4b47-b8bd-975bea9edf87",
    top: "db397003-0d05-4cab-9a70-c810e73b560e",
    bottom: "fb64289f-8101-4b82-8775-81fedc28966f",
    edges: [
      "624ea6f2-2e80-42fe-9dd7-5342844df94e",
      "35f7d429-7693-4419-a1fd-6ae6e98b2e22",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6740,
      y: 5620,
    },
    name: "TreasureField",
    id: "025247b8-1345-4b42-95ee-e4aff5e49519",
    bottom: "87a28c22-4c29-4574-b4f8-ecdeb9b49db9",
    top: "f63ed4c9-eb4d-45d2-899a-6a2f3ae44428",
    edges: [
      "3afac629-cabf-489c-89d2-ee8fee8a73a0",
      "ead06d87-2f7e-4c08-bcdd-1b69bfe07ea7",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6740,
      y: 5340,
    },
    name: "BattleField",
    id: "f63ed4c9-eb4d-45d2-899a-6a2f3ae44428",
    bottom: "025247b8-1345-4b42-95ee-e4aff5e49519",
    left: "832cede2-4aba-4ed2-8630-88216bfd32e8",
    top: "14b7920a-d8e1-4396-9b30-7dda0906ea8c",
    edges: [
      "ead06d87-2f7e-4c08-bcdd-1b69bfe07ea7",
      "daf3d91d-b294-4551-9f8b-23125ced73fc",
      "f9e5f805-a8fd-4915-b1f1-660ea0c40f93",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6500,
      y: 5340,
    },
    name: "BattleField",
    id: "832cede2-4aba-4ed2-8630-88216bfd32e8",
    right: "f63ed4c9-eb4d-45d2-899a-6a2f3ae44428",
    top: "ba5e6ce4-129b-4136-8da5-b94ab2f40ed0",
    left: "722ceff9-eefc-43e6-a402-342777919041",
    edges: [
      "daf3d91d-b294-4551-9f8b-23125ced73fc",
      "2cc11332-c895-47fe-b386-295dff24eb43",
      "34936117-b10a-467f-9c33-f541e36eb05f",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6500,
      y: 5020,
    },
    name: "MagicBookField",
    id: "ba5e6ce4-129b-4136-8da5-b94ab2f40ed0",
    bottom: "832cede2-4aba-4ed2-8630-88216bfd32e8",
    right: "bf0ecf6b-9b5b-49ab-93b2-9ae6793083fd",
    left: "90e3c78d-1424-4ff6-af98-db7ff0d3012d",
    edges: [
      "2cc11332-c895-47fe-b386-295dff24eb43",
      "cf4e4d05-595a-4b6e-b16f-c89b77c3ef73",
      "c47b8c3f-b19c-49c7-9635-16b382e97eda",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6740,
      y: 5020,
    },
    name: "BattleField",
    id: "bf0ecf6b-9b5b-49ab-93b2-9ae6793083fd",
    left: "ba5e6ce4-129b-4136-8da5-b94ab2f40ed0",
    bottom: "14b7920a-d8e1-4396-9b30-7dda0906ea8c",
    edges: [
      "cf4e4d05-595a-4b6e-b16f-c89b77c3ef73",
      "21288059-5f9e-4559-b9d7-112351fd36a0",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6740,
      y: 5180,
    },
    name: "BattleField",
    id: "14b7920a-d8e1-4396-9b30-7dda0906ea8c",
    top: "bf0ecf6b-9b5b-49ab-93b2-9ae6793083fd",
    bottom: "f63ed4c9-eb4d-45d2-899a-6a2f3ae44428",
    edges: [
      "21288059-5f9e-4559-b9d7-112351fd36a0",
      "f9e5f805-a8fd-4915-b1f1-660ea0c40f93",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6300,
      y: 5700,
    },
    name: "BattleField",
    id: "55fb6a65-6890-4a3a-aa10-96108c1f67ea",
    bottom: "ca1fa3dd-7d22-4f42-a99e-99fa69b82d8a",
    top: "a603f125-23ef-4995-887f-4adc93e70e3b",
    edges: [
      "2e2ba4db-bfae-4259-a83d-e00a011a0e88",
      "a5e7c9ac-67a1-4b49-9e27-7bcf42dd4fa2",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6300,
      y: 5520,
    },
    name: "BattleField",
    id: "a603f125-23ef-4995-887f-4adc93e70e3b",
    bottom: "55fb6a65-6890-4a3a-aa10-96108c1f67ea",
    top: "722ceff9-eefc-43e6-a402-342777919041",
    left: "703fe729-0bf9-4704-9a12-5df43f60f473",
    edges: [
      "a5e7c9ac-67a1-4b49-9e27-7bcf42dd4fa2",
      "f292fb78-e9dc-4494-b95a-26ef57b52b1a",
      "275ea87e-05d3-497e-9c5c-df1de22b6556",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6300,
      y: 5340,
    },
    name: "BattleField",
    id: "722ceff9-eefc-43e6-a402-342777919041",
    bottom: "a603f125-23ef-4995-887f-4adc93e70e3b",
    right: "832cede2-4aba-4ed2-8630-88216bfd32e8",
    edges: [
      "f292fb78-e9dc-4494-b95a-26ef57b52b1a",
      "34936117-b10a-467f-9c33-f541e36eb05f",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6080,
      y: 5700,
    },
    name: "BattleField",
    id: "63c4d6b2-ee30-4167-9779-472052f29824",
    bottom: "68b219c8-3865-40d8-8b55-1985123557f2",
    left: "54a8b9ec-d14c-4c74-89cd-3a04ffbf7718",
    edges: [
      "b3f1ef27-46b4-4c74-a267-69992107b50c",
      "2f502c8d-b6e7-4682-b201-c175ed535a3f",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5520,
      y: 6200,
    },
    name: "BattleField",
    id: "6d6249e9-cca4-4568-8635-a2b54dc630e1",
    right: "f1265796-0f2e-43c4-be48-56414d040f00",
    top: "bb553085-8205-4a55-902b-3f6a3fa7bf69",
    bottom: "a51a1631-727f-41c7-a3b4-fad77fcc5725",
    edges: [
      "af29f912-df2c-4d43-befe-4f1696d23636",
      "a38e00a0-a43e-4ef4-8e03-cbcc54fc250a",
      "616b0b84-3e97-4538-9bf9-e4bc6e7be981",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5440,
      y: 6000,
    },
    name: "BattleField",
    id: "bb553085-8205-4a55-902b-3f6a3fa7bf69",
    bottom: "6d6249e9-cca4-4568-8635-a2b54dc630e1",
    left: "897aa66e-ee2b-492c-8dd6-462d6d8e7a7c",
    edges: [
      "a38e00a0-a43e-4ef4-8e03-cbcc54fc250a",
      "5acb2142-9b9e-4c2a-90d2-41b97eeaf3af",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5460,
      y: 6420,
    },
    name: "BattleField",
    id: "a51a1631-727f-41c7-a3b4-fad77fcc5725",
    top: "6d6249e9-cca4-4568-8635-a2b54dc630e1",
    left: "fa240b54-1345-4fc6-bc87-1286b0bf787e",
    edges: [
      "616b0b84-3e97-4538-9bf9-e4bc6e7be981",
      "e2bf92ae-2b35-4737-897d-4fdc53f2c310",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5240,
      y: 6420,
    },
    name: "BattleField",
    id: "fa240b54-1345-4fc6-bc87-1286b0bf787e",
    right: "a51a1631-727f-41c7-a3b4-fad77fcc5725",
    top: "897aa66e-ee2b-492c-8dd6-462d6d8e7a7c",
    left: "07f146b9-a672-4634-a234-ee7366255698",
    edges: [
      "e2bf92ae-2b35-4737-897d-4fdc53f2c310",
      "82f39d8f-b080-4b99-9a1a-2382ca6b1498",
      "c52f94e2-4f2e-4861-a0cb-165c060e5067",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5240,
      y: 6000,
    },
    name: "TreasureField",
    id: "897aa66e-ee2b-492c-8dd6-462d6d8e7a7c",
    bottom: "fa240b54-1345-4fc6-bc87-1286b0bf787e",
    right: "bb553085-8205-4a55-902b-3f6a3fa7bf69",
    left: "0315783b-1c1b-4c76-b577-d6f19cbebf46",
    edges: [
      "82f39d8f-b080-4b99-9a1a-2382ca6b1498",
      "5acb2142-9b9e-4c2a-90d2-41b97eeaf3af",
      "0bfed79d-36a1-4fd7-89f0-22dadb0e58d9",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5500,
      y: 5740,
    },
    name: "ChruchField",
    id: "54a8b9ec-d14c-4c74-89cd-3a04ffbf7718",
    right: "63c4d6b2-ee30-4167-9779-472052f29824",
    left: "b6d9ab88-93f4-455f-9b52-9e253903a7be",
    edges: [
      "2f502c8d-b6e7-4682-b201-c175ed535a3f",
      "e3ed8c68-14ac-47b5-8a5b-d2d93a335433",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4800,
      y: 6940,
    },
    name: "BattleField",
    id: "29242ec7-547a-4057-9611-c621674c18cd",
    right: "c6873558-3547-46d5-acf0-e474b333e3a6",
    top: "cc318b46-313f-4e6e-9756-f11f40bab280",
    left: "11dd88e3-4d09-41e8-878d-166404daeb24",
    edges: [
      "93e5316c-5537-4ad9-892b-bb6063f50201",
      "6e02351c-c5ed-4ee8-baf7-12a209fa4142",
      "2b178f60-a42c-42f0-b8b5-46a3d142e3fd",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4800,
      y: 6680,
    },
    name: "BattleField",
    id: "cc318b46-313f-4e6e-9756-f11f40bab280",
    bottom: "29242ec7-547a-4057-9611-c621674c18cd",
    right: "9bf09993-ec16-4676-8861-5ad87f6be191",
    edges: [
      "6e02351c-c5ed-4ee8-baf7-12a209fa4142",
      "dafb004b-d3eb-4ad9-bf2f-d4c5819e03ab",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5020,
      y: 6680,
    },
    name: "RedTreasureField",
    id: "9bf09993-ec16-4676-8861-5ad87f6be191",
    left: "cc318b46-313f-4e6e-9756-f11f40bab280",
    right: "0823864a-8a34-493f-ab82-474a930778ca",
    top: "07f146b9-a672-4634-a234-ee7366255698",
    edges: [
      "dafb004b-d3eb-4ad9-bf2f-d4c5819e03ab",
      "fe38e941-946c-44bb-afe4-44167cd539d1",
      "4c02c091-c382-4722-8bdd-f81579d2a40d",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5240,
      y: 6680,
    },
    name: "BattleField",
    id: "0823864a-8a34-493f-ab82-474a930778ca",
    left: "9bf09993-ec16-4676-8861-5ad87f6be191",
    bottom: "c6873558-3547-46d5-acf0-e474b333e3a6",
    edges: [
      "fe38e941-946c-44bb-afe4-44167cd539d1",
      "2ce31c0f-3812-444b-8f1c-adc7769b8233",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5000,
      y: 6440,
    },
    name: "WorldTransferField",
    id: "07f146b9-a672-4634-a234-ee7366255698",
    right: "fa240b54-1345-4fc6-bc87-1286b0bf787e",
    bottom: "9bf09993-ec16-4676-8861-5ad87f6be191",
    edges: [
      "c52f94e2-4f2e-4861-a0cb-165c060e5067",
      "4c02c091-c382-4722-8bdd-f81579d2a40d",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4880,
      y: 5980,
    },
    name: "RedTreasureField",
    id: "0315783b-1c1b-4c76-b577-d6f19cbebf46",
    right: "897aa66e-ee2b-492c-8dd6-462d6d8e7a7c",
    top: "5efd7d93-eb13-49fb-90bd-03b6f1daff20",
    edges: [
      "0bfed79d-36a1-4fd7-89f0-22dadb0e58d9",
      "cf0db81a-ff7d-4ee6-a340-c363e59bdffd",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4840,
      y: 5760,
    },
    name: "BattleField",
    id: "5efd7d93-eb13-49fb-90bd-03b6f1daff20",
    bottom: "0315783b-1c1b-4c76-b577-d6f19cbebf46",
    left: "54a7afcb-ad9e-4a86-a11b-62430d47aee8",
    edges: [
      "cf0db81a-ff7d-4ee6-a340-c363e59bdffd",
      "0bc4e228-e361-4e51-8f77-4a040f896415",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4500,
      y: 5760,
    },
    name: "BattleField",
    id: "54a7afcb-ad9e-4a86-a11b-62430d47aee8",
    right: "5efd7d93-eb13-49fb-90bd-03b6f1daff20",
    bottom: "4c89129c-47e5-4a13-98bd-944dc5daea9e",
    edges: [
      "0bc4e228-e361-4e51-8f77-4a040f896415",
      "2895cd43-429c-4142-aae8-47ebe5c93b31",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4500,
      y: 6100,
    },
    name: "RedTreasureField",
    id: "4c89129c-47e5-4a13-98bd-944dc5daea9e",
    top: "54a7afcb-ad9e-4a86-a11b-62430d47aee8",
    right: "98c44f2c-6f3b-4ab5-bd2a-59b4cce3e409",
    edges: [
      "2895cd43-429c-4142-aae8-47ebe5c93b31",
      "99581254-238b-4508-a892-664adec2d9d9",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4740,
      y: 6100,
    },
    name: "BattleField",
    id: "98c44f2c-6f3b-4ab5-bd2a-59b4cce3e409",
    left: "4c89129c-47e5-4a13-98bd-944dc5daea9e",
    top: "cc833aee-3d20-4f34-98f1-aa6f64192a09",
    edges: [
      "99581254-238b-4508-a892-664adec2d9d9",
      "c31aee16-bd89-4383-84a8-2953ddcdbb68",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4740,
      y: 5920,
    },
    name: "CaveField",
    id: "cc833aee-3d20-4f34-98f1-aa6f64192a09",
    bottom: "98c44f2c-6f3b-4ab5-bd2a-59b4cce3e409",
    edges: ["c31aee16-bd89-4383-84a8-2953ddcdbb68"],
    area: "Oceania",
  },
  {
    position: {
      x: 4380,
      y: 6080,
    },
    name: "BattleField",
    id: "870ba194-5e1e-4669-8fa4-a9635b22b6a8",
    left: "b6bf2e1e-b20f-4dd7-a326-8f2169c0f62f",
    bottom: "ed929ea4-2730-4c70-af6d-68cc482e2fcd",
    top: "351ec349-c18e-485b-bdd6-985d786cd831",
    edges: [
      "180c9ae7-404c-4631-a76c-a2b13fd1ea5b",
      "728893c6-fd23-4d9e-9eb6-44e57fca6cd6",
      "912c5445-5cc3-4083-99fc-cca2ca599ed0",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4260,
      y: 6460,
    },
    name: "BattleField",
    id: "ed929ea4-2730-4c70-af6d-68cc482e2fcd",
    top: "870ba194-5e1e-4669-8fa4-a9635b22b6a8",
    bottom: "19f54ae7-a645-4af2-ab78-008480895080",
    right: "819c4127-4cde-4907-81e9-914de25b11e0",
    edges: [
      "728893c6-fd23-4d9e-9eb6-44e57fca6cd6",
      "31617441-aefc-4c06-a423-4a91941557a4",
      "b8ed90fa-e033-4ceb-9421-c37ceef47690",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4680,
      y: 6940,
    },
    name: "TreasureField",
    id: "11dd88e3-4d09-41e8-878d-166404daeb24",
    right: "29242ec7-547a-4057-9611-c621674c18cd",
    left: "2c16ff2e-212d-4326-8417-b350a16ce3a7",
    edges: [
      "2b178f60-a42c-42f0-b8b5-46a3d142e3fd",
      "b1506972-a876-47f0-9c9e-914d128028bd",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4560,
      y: 6940,
    },
    name: "BattleField",
    id: "2c16ff2e-212d-4326-8417-b350a16ce3a7",
    right: "11dd88e3-4d09-41e8-878d-166404daeb24",
    left: "8ee0e31f-77e1-453b-8c4d-454d3e397e33",
    edges: [
      "b1506972-a876-47f0-9c9e-914d128028bd",
      "50dbc664-5ef3-4c47-8f90-3092c08540d1",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4400,
      y: 6940,
    },
    name: "BattleField",
    id: "8ee0e31f-77e1-453b-8c4d-454d3e397e33",
    right: "2c16ff2e-212d-4326-8417-b350a16ce3a7",
    left: "b68e13fa-f9c7-4e75-802b-e9285bb643d7",
    edges: [
      "50dbc664-5ef3-4c47-8f90-3092c08540d1",
      "156db9b8-b8ca-4359-ad20-3a27cf2e4c5f",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4260,
      y: 6680,
    },
    name: "RedTreasureField",
    id: "19f54ae7-a645-4af2-ab78-008480895080",
    top: "ed929ea4-2730-4c70-af6d-68cc482e2fcd",
    bottom: "b68e13fa-f9c7-4e75-802b-e9285bb643d7",
    edges: [
      "31617441-aefc-4c06-a423-4a91941557a4",
      "926e43a7-bac4-4f23-8635-4b686de018fb",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4400,
      y: 6460,
    },
    name: "TreasureField",
    id: "819c4127-4cde-4907-81e9-914de25b11e0",
    left: "ed929ea4-2730-4c70-af6d-68cc482e2fcd",
    bottom: "3bbceb25-16c4-4da3-8b35-33f85a917459",
    edges: [
      "b8ed90fa-e033-4ceb-9421-c37ceef47690",
      "158b3686-9bba-4c42-bdb5-cfaa424c763a",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4400,
      y: 6680,
    },
    name: "BattleField",
    id: "3bbceb25-16c4-4da3-8b35-33f85a917459",
    top: "819c4127-4cde-4907-81e9-914de25b11e0",
    right: "cbbc4967-81ae-4bd2-98eb-402b46fe820a",
    edges: [
      "158b3686-9bba-4c42-bdb5-cfaa424c763a",
      "68ec08ad-e2fc-48d6-97ae-261bfa3134a2",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4540,
      y: 6680,
    },
    name: "BattleField",
    id: "cbbc4967-81ae-4bd2-98eb-402b46fe820a",
    left: "3bbceb25-16c4-4da3-8b35-33f85a917459",
    right: "9ae4561e-8444-442c-9e33-6fca76876ea6",
    edges: [
      "68ec08ad-e2fc-48d6-97ae-261bfa3134a2",
      "da098e36-0a8a-4d8a-a253-058c1cbf6c37",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4680,
      y: 6680,
    },
    name: "VillageField",
    id: "9ae4561e-8444-442c-9e33-6fca76876ea6",
    left: "cbbc4967-81ae-4bd2-98eb-402b46fe820a",
    edges: ["da098e36-0a8a-4d8a-a253-058c1cbf6c37"],
    area: "Oceania",
  },
  {
    position: {
      x: 4260,
      y: 6940,
    },
    name: "BattleField",
    id: "b68e13fa-f9c7-4e75-802b-e9285bb643d7",
    top: "19f54ae7-a645-4af2-ab78-008480895080",
    right: "8ee0e31f-77e1-453b-8c4d-454d3e397e33",
    edges: [
      "926e43a7-bac4-4f23-8635-4b686de018fb",
      "156db9b8-b8ca-4359-ad20-3a27cf2e4c5f",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4380,
      y: 5860,
    },
    name: "TreasureField",
    id: "351ec349-c18e-485b-bdd6-985d786cd831",
    bottom: "870ba194-5e1e-4669-8fa4-a9635b22b6a8",
    top: "ffaa6de8-c898-4d2f-bbe6-e6274d633bf1",
    edges: [
      "912c5445-5cc3-4083-99fc-cca2ca599ed0",
      "7f7a1c40-6b9d-45c4-8388-a1421637662c",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4380,
      y: 5580,
    },
    name: "BattleField",
    id: "ffaa6de8-c898-4d2f-bbe6-e6274d633bf1",
    bottom: "351ec349-c18e-485b-bdd6-985d786cd831",
    right: "d8eb0795-3674-4249-8900-3f8584694028",
    edges: [
      "7f7a1c40-6b9d-45c4-8388-a1421637662c",
      "f0e45ba7-3e31-4779-b8d6-4cda10dcd98e",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4560,
      y: 5580,
    },
    name: "CollectMoneyField",
    id: "d8eb0795-3674-4249-8900-3f8584694028",
    left: "ffaa6de8-c898-4d2f-bbe6-e6274d633bf1",
    top: "291960d4-844b-4c81-9823-074a2725696c",
    edges: [
      "f0e45ba7-3e31-4779-b8d6-4cda10dcd98e",
      "cf887596-49e3-484e-ab27-12ebae2806c8",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4560,
      y: 5380,
    },
    name: "MagicBookField",
    id: "291960d4-844b-4c81-9823-074a2725696c",
    bottom: "d8eb0795-3674-4249-8900-3f8584694028",
    right: "d99ba8f1-9f96-444a-8250-83ce4e29d8a1",
    edges: [
      "cf887596-49e3-484e-ab27-12ebae2806c8",
      "3e92fc18-2f1b-4c97-acd4-d1a83da5c744",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4700,
      y: 5380,
    },
    name: "BattleField",
    id: "d99ba8f1-9f96-444a-8250-83ce4e29d8a1",
    left: "291960d4-844b-4c81-9823-074a2725696c",
    top: "63e2ff80-12ba-4d0b-bee1-da62994eb509",
    edges: [
      "3e92fc18-2f1b-4c97-acd4-d1a83da5c744",
      "8b96bf5c-9b2f-4953-a175-a1e36b03b3bf",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4700,
      y: 5240,
    },
    name: "CollectMoneyField",
    id: "63e2ff80-12ba-4d0b-bee1-da62994eb509",
    bottom: "d99ba8f1-9f96-444a-8250-83ce4e29d8a1",
    right: "09c5b023-463d-419d-92de-261d9c6add91",
    edges: [
      "8b96bf5c-9b2f-4953-a175-a1e36b03b3bf",
      "0e595ccc-74d1-4ad0-aa04-b8e2d5448f2d",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4840,
      y: 5240,
    },
    name: "TreasureField",
    id: "09c5b023-463d-419d-92de-261d9c6add91",
    left: "63e2ff80-12ba-4d0b-bee1-da62994eb509",
    right: "dabef7e7-d168-47ec-add0-2aa9243a9583",
    edges: [
      "0e595ccc-74d1-4ad0-aa04-b8e2d5448f2d",
      "79bf617b-abc8-4fba-8545-74b073f4523c",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5020,
      y: 5240,
    },
    name: "CollectMoneyField",
    id: "dabef7e7-d168-47ec-add0-2aa9243a9583",
    left: "09c5b023-463d-419d-92de-261d9c6add91",
    bottom: "60709f3c-535e-490b-9115-cf2e465b215b",
    right: "fe9d3525-5e43-4d48-8b2c-06b3d4da8acc",
    edges: [
      "79bf617b-abc8-4fba-8545-74b073f4523c",
      "1a20c2df-7497-4ea3-8aa0-5e9c7dfe21db",
      "02a2d684-25b1-4c7a-939e-73c2a570b35e",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5240,
      y: 5740,
    },
    name: "BattleField",
    id: "b6d9ab88-93f4-455f-9b52-9e253903a7be",
    right: "54a8b9ec-d14c-4c74-89cd-3a04ffbf7718",
    top: "cfb1da0a-df2b-4a00-b64e-12a233e211e7",
    edges: [
      "e3ed8c68-14ac-47b5-8a5b-d2d93a335433",
      "8f154ad0-bd81-4311-abec-8224bfa236da",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5240,
      y: 5600,
    },
    name: "BattleField",
    id: "cfb1da0a-df2b-4a00-b64e-12a233e211e7",
    bottom: "b6d9ab88-93f4-455f-9b52-9e253903a7be",
    top: "1cad5f2c-7f0b-42c4-ab99-e36789e14d2d",
    left: "0fd2a9c7-63ec-4acf-bc0f-8637fef7727b",
    edges: [
      "8f154ad0-bd81-4311-abec-8224bfa236da",
      "9932897b-1417-41ef-8d3d-361f8216e82f",
      "e60969d2-99bc-4c6f-8e2a-d9a1c20ae44d",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5240,
      y: 5460,
    },
    name: "WhiteTreasureField",
    id: "1cad5f2c-7f0b-42c4-ab99-e36789e14d2d",
    bottom: "cfb1da0a-df2b-4a00-b64e-12a233e211e7",
    edges: ["9932897b-1417-41ef-8d3d-361f8216e82f"],
    area: "Oceania",
  },
  {
    position: {
      x: 5020,
      y: 5600,
    },
    name: "BattleField",
    id: "0fd2a9c7-63ec-4acf-bc0f-8637fef7727b",
    right: "cfb1da0a-df2b-4a00-b64e-12a233e211e7",
    left: "8d11c5e9-0dd8-4e8e-b966-aa8b4a63b982",
    top: "60709f3c-535e-490b-9115-cf2e465b215b",
    edges: [
      "e60969d2-99bc-4c6f-8e2a-d9a1c20ae44d",
      "32b8feed-0afc-4a76-9b50-197fddd956a9",
      "f7792c31-c911-4e48-af40-5cb4b408fa63",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 4760,
      y: 5600,
    },
    name: "VillageField",
    id: "8d11c5e9-0dd8-4e8e-b966-aa8b4a63b982",
    right: "0fd2a9c7-63ec-4acf-bc0f-8637fef7727b",
    edges: ["32b8feed-0afc-4a76-9b50-197fddd956a9"],
    area: "Oceania",
  },
  {
    position: {
      x: 5020,
      y: 5440,
    },
    name: "BattleField",
    id: "60709f3c-535e-490b-9115-cf2e465b215b",
    bottom: "0fd2a9c7-63ec-4acf-bc0f-8637fef7727b",
    top: "dabef7e7-d168-47ec-add0-2aa9243a9583",
    edges: [
      "f7792c31-c911-4e48-af40-5cb4b408fa63",
      "1a20c2df-7497-4ea3-8aa0-5e9c7dfe21db",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6300,
      y: 5020,
    },
    name: "WeaponStoreField",
    id: "90e3c78d-1424-4ff6-af98-db7ff0d3012d",
    right: "ba5e6ce4-129b-4136-8da5-b94ab2f40ed0",
    left: "c1d39ac3-72e3-4a74-ba4b-556e1d794d08",
    edges: [
      "c47b8c3f-b19c-49c7-9635-16b382e97eda",
      "0ab4e7be-4d63-40e8-9c77-b6699843878b",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6060,
      y: 5020,
    },
    name: "BattleField",
    id: "c1d39ac3-72e3-4a74-ba4b-556e1d794d08",
    right: "90e3c78d-1424-4ff6-af98-db7ff0d3012d",
    top: "bb0342f3-3f0a-4d4d-aa65-4bb81e82e724",
    edges: [
      "0ab4e7be-4d63-40e8-9c77-b6699843878b",
      "99552b3b-5556-40d7-a904-35e12ec8146f",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6740,
      y: 4600,
    },
    name: "TreasureField",
    id: "2d26ef41-f38f-4fa8-a987-5410b6c3b527",
    right: "83532ab7-ea59-47b7-b532-16ebce69e455",
    left: "5248bed1-540b-4065-8746-949f0b481ada",
    edges: [
      "cfa8305b-0957-47df-bf09-2f6ea35ee2a2",
      "78f36938-0511-4dc3-acb0-591bec192900",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6520,
      y: 4600,
    },
    name: "BattleField",
    id: "5248bed1-540b-4065-8746-949f0b481ada",
    right: "2d26ef41-f38f-4fa8-a987-5410b6c3b527",
    left: "9e18d839-4abb-4e55-9839-4eaaa696df7d",
    edges: [
      "78f36938-0511-4dc3-acb0-591bec192900",
      "ba3d6281-3c01-476f-9848-00d80490d098",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6280,
      y: 4600,
    },
    name: "BattleField",
    id: "9e18d839-4abb-4e55-9839-4eaaa696df7d",
    right: "5248bed1-540b-4065-8746-949f0b481ada",
    left: "d4339577-838e-4d60-b13d-fcc2f64fd779",
    edges: [
      "ba3d6281-3c01-476f-9848-00d80490d098",
      "107706e4-c0c9-4e74-84f8-a821e479e208",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 6040,
      y: 4600,
    },
    name: "BattleField",
    id: "d4339577-838e-4d60-b13d-fcc2f64fd779",
    right: "9e18d839-4abb-4e55-9839-4eaaa696df7d",
    bottom: "bb0342f3-3f0a-4d4d-aa65-4bb81e82e724",
    edges: [
      "107706e4-c0c9-4e74-84f8-a821e479e208",
      "2f7a49ea-53f0-419f-8d2e-11592916348d",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5980,
      y: 4820,
    },
    name: "MagicBookField",
    id: "bb0342f3-3f0a-4d4d-aa65-4bb81e82e724",
    top: "d4339577-838e-4d60-b13d-fcc2f64fd779",
    bottom: "c1d39ac3-72e3-4a74-ba4b-556e1d794d08",
    left: "9f479f60-e172-4c29-9d83-8709c65d75c1",
    edges: [
      "2f7a49ea-53f0-419f-8d2e-11592916348d",
      "99552b3b-5556-40d7-a904-35e12ec8146f",
      "70c31911-165b-43cd-aa49-5401f081c867",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5800,
      y: 5520,
    },
    name: "BattleField",
    id: "703fe729-0bf9-4704-9a12-5df43f60f473",
    right: "a603f125-23ef-4995-887f-4adc93e70e3b",
    top: "913b4d18-24d1-41d0-a03b-61042a5d1c7c",
    edges: [
      "275ea87e-05d3-497e-9c5c-df1de22b6556",
      "7bfe3a88-f06d-476e-bb0e-c8bd8414f42b",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5800,
      y: 5380,
    },
    name: "TreasureField",
    id: "913b4d18-24d1-41d0-a03b-61042a5d1c7c",
    bottom: "703fe729-0bf9-4704-9a12-5df43f60f473",
    top: "1bcae934-b452-44b3-a3ec-4d78e9473f90",
    edges: [
      "7bfe3a88-f06d-476e-bb0e-c8bd8414f42b",
      "6b590acf-c1d7-4496-8f01-c2aec8c052be",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5800,
      y: 5240,
    },
    name: "BattleField",
    id: "1bcae934-b452-44b3-a3ec-4d78e9473f90",
    bottom: "913b4d18-24d1-41d0-a03b-61042a5d1c7c",
    left: "51918156-9021-4da6-9699-7aa2ec931da2",
    edges: [
      "6b590acf-c1d7-4496-8f01-c2aec8c052be",
      "9364c35d-32cb-4a1d-a8cd-398e384574d4",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5280,
      y: 5240,
    },
    name: "BattleField",
    id: "fe9d3525-5e43-4d48-8b2c-06b3d4da8acc",
    left: "dabef7e7-d168-47ec-add0-2aa9243a9583",
    right: "51918156-9021-4da6-9699-7aa2ec931da2",
    edges: [
      "02a2d684-25b1-4c7a-939e-73c2a570b35e",
      "a3d1484c-0a0e-4d1e-8d4c-97fcc9120126",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5520,
      y: 5240,
    },
    name: "BattleField",
    id: "51918156-9021-4da6-9699-7aa2ec931da2",
    left: "fe9d3525-5e43-4d48-8b2c-06b3d4da8acc",
    right: "1bcae934-b452-44b3-a3ec-4d78e9473f90",
    top: "f27c8f02-1dc2-4c82-879e-c9474d60beaf",
    edges: [
      "a3d1484c-0a0e-4d1e-8d4c-97fcc9120126",
      "9364c35d-32cb-4a1d-a8cd-398e384574d4",
      "ea8fda78-39e0-459f-871a-dd2b33440652",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5520,
      y: 4820,
    },
    name: "TreasureField",
    id: "f27c8f02-1dc2-4c82-879e-c9474d60beaf",
    bottom: "51918156-9021-4da6-9699-7aa2ec931da2",
    right: "9f479f60-e172-4c29-9d83-8709c65d75c1",
    left: "28ca4829-c92b-4571-b0ba-cbe745b60d1c",
    edges: [
      "ea8fda78-39e0-459f-871a-dd2b33440652",
      "1794e612-6761-4789-b68a-c2e2e6562c8b",
      "394fd223-bba3-44ca-97a9-f9c8e34759ce",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5760,
      y: 4820,
    },
    name: "BattleField",
    id: "9f479f60-e172-4c29-9d83-8709c65d75c1",
    left: "f27c8f02-1dc2-4c82-879e-c9474d60beaf",
    right: "bb0342f3-3f0a-4d4d-aa65-4bb81e82e724",
    top: "caa5b6fd-392b-46b6-811a-225758052fb1",
    edges: [
      "1794e612-6761-4789-b68a-c2e2e6562c8b",
      "70c31911-165b-43cd-aa49-5401f081c867",
      "f385549e-75af-48c3-b397-ba5a59aab942",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5260,
      y: 4820,
    },
    name: "BattleField",
    id: "28ca4829-c92b-4571-b0ba-cbe745b60d1c",
    right: "f27c8f02-1dc2-4c82-879e-c9474d60beaf",
    top: "ac9f40ea-da18-4a09-9470-ed6878981413",
    edges: [
      "394fd223-bba3-44ca-97a9-f9c8e34759ce",
      "887b8a97-1b8c-4335-a597-1e110c93e211",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5260,
      y: 4600,
    },
    name: "BattleField",
    id: "ac9f40ea-da18-4a09-9470-ed6878981413",
    bottom: "28ca4829-c92b-4571-b0ba-cbe745b60d1c",
    right: "caa5b6fd-392b-46b6-811a-225758052fb1",
    edges: [
      "887b8a97-1b8c-4335-a597-1e110c93e211",
      "abb518f1-f477-4fea-adf1-4c026ff72856",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5760,
      y: 4600,
    },
    name: "BattleField",
    id: "caa5b6fd-392b-46b6-811a-225758052fb1",
    left: "ac9f40ea-da18-4a09-9470-ed6878981413",
    bottom: "9f479f60-e172-4c29-9d83-8709c65d75c1",
    top: "9efe55a8-f455-4d8b-bc71-3ff2f02ab0e4",
    edges: [
      "abb518f1-f477-4fea-adf1-4c026ff72856",
      "f385549e-75af-48c3-b397-ba5a59aab942",
      "67e430fd-0fa4-49f6-8e0f-e65273be1442",
    ],
    area: "Oceania",
  },
  {
    position: {
      x: 5760,
      y: 4360,
    },
    name: "BattleField",
    id: "9efe55a8-f455-4d8b-bc71-3ff2f02ab0e4",
    bottom: "caa5b6fd-392b-46b6-811a-225758052fb1",
    top: "6bbcdeb5-f435-48a6-afb2-8ede76ca1a73",
    edges: [
      "67e430fd-0fa4-49f6-8e0f-e65273be1442",
      "6f6656a1-122e-4ca4-a25d-30370453be66",
    ],
    area: "Oceania",
  },
  {
    id: "f2681860-c863-41f0-8180-0f77fafeed4f",
    name: "BattleField",
    position: {
      x: 8560,
      y: 5100,
    },
    edges: [
      "ef196c38-b912-4d77-a3b8-1aac449e8d81",
      "69e0ddf7-81a8-48db-b671-017d71736e54",
    ],
    top: "24660a06-fb01-4c58-8913-275f0f822eb1",
    bottom: "661356f3-f7d5-404c-ab04-d97c3cf2345d",
    area: "Oceania",
  },
];
const africaVertices: Vertex[] = [
  {
    position: {
      x: 1760,
      y: 2060,
    },
    name: "TreasureField",
    id: "322eaf7d-b7d1-4a44-b489-c5a71c9f4614",
    right: "76e06435-bf9b-4c2c-9ad0-9f8fe6a16459",
    bottom: "88143df3-c23e-4792-9a85-a57f2d0440a4",
    edges: [
      "d5eb48a2-4f51-4058-924a-ad37305f1379",
      "d452abfc-ca8c-47be-ae57-81af987dcc86",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1760,
      y: 2260,
    },
    name: "BattleField",
    id: "88143df3-c23e-4792-9a85-a57f2d0440a4",
    top: "322eaf7d-b7d1-4a44-b489-c5a71c9f4614",
    bottom: "d9bba158-17ec-4bda-9f21-f466cbb89fd4",
    edges: [
      "d452abfc-ca8c-47be-ae57-81af987dcc86",
      "66931558-4ee8-46b1-a0e2-b7d2832a1cb3",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3680,
      y: 3820,
    },
    name: "BattleField",
    id: "8e1542c3-f4c6-4100-add8-b227c7d2de56",
    right: "9053c5fe-0a37-4ccf-abc7-22dff8c60d81",
    left: "1d8d323b-1326-49f1-9bad-38adab906a94",
    edges: [
      "55b34a4a-a9ad-4149-bb85-945c228bbd80",
      "cb54df87-eba7-48eb-8e9a-efcf1261e1dc",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3460,
      y: 3820,
    },
    name: "TreasureField",
    id: "1d8d323b-1326-49f1-9bad-38adab906a94",
    right: "8e1542c3-f4c6-4100-add8-b227c7d2de56",
    top: "8936a8cf-886c-43ad-a0eb-312592992fd9",
    edges: [
      "cb54df87-eba7-48eb-8e9a-efcf1261e1dc",
      "0a3390c8-6861-49cc-a63c-6191138a3ee2",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3480,
      y: 3520,
    },
    name: "BattleField",
    id: "8936a8cf-886c-43ad-a0eb-312592992fd9",
    bottom: "1d8d323b-1326-49f1-9bad-38adab906a94",
    left: "f7b5ff65-c762-425c-9586-a245c385f110",
    edges: [
      "0a3390c8-6861-49cc-a63c-6191138a3ee2",
      "781c60e8-d822-44e5-97d3-6f59fe7d5c51",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3160,
      y: 3520,
    },
    name: "BattleField",
    id: "f7b5ff65-c762-425c-9586-a245c385f110",
    right: "8936a8cf-886c-43ad-a0eb-312592992fd9",
    top: "a5f498e6-b8ce-4a7d-9992-b94f4843e44c",
    bottom: "7175aab2-fb9f-410c-b6de-1019871f4cf1",
    edges: [
      "781c60e8-d822-44e5-97d3-6f59fe7d5c51",
      "2595692e-5dc6-4144-aa2f-b097422c772a",
      "2e55a1f5-c37e-4d14-ba11-24a67a1ce052",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3160,
      y: 3260,
    },
    name: "BattleField",
    id: "a5f498e6-b8ce-4a7d-9992-b94f4843e44c",
    bottom: "f7b5ff65-c762-425c-9586-a245c385f110",
    right: "3f9ecf9d-4c05-4fcf-be46-ab33494df46f",
    edges: [
      "2595692e-5dc6-4144-aa2f-b097422c772a",
      "ca54eb95-7f71-4805-9c86-0a3f9ecd6874",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3380,
      y: 3260,
    },
    name: "BattleField",
    id: "3f9ecf9d-4c05-4fcf-be46-ab33494df46f",
    left: "a5f498e6-b8ce-4a7d-9992-b94f4843e44c",
    top: "abd2d2d1-f967-4b06-b1e2-05f135981a67",
    edges: [
      "ca54eb95-7f71-4805-9c86-0a3f9ecd6874",
      "9e6b35c2-24a5-4fd2-817c-821c6cd5d188",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3380,
      y: 3060,
    },
    name: "TreasureField",
    id: "abd2d2d1-f967-4b06-b1e2-05f135981a67",
    bottom: "3f9ecf9d-4c05-4fcf-be46-ab33494df46f",
    left: "174d85bb-217b-4a54-baa1-2c89c4b11ef1",
    edges: [
      "9e6b35c2-24a5-4fd2-817c-821c6cd5d188",
      "484eb876-3572-40cf-b548-b817d9b12799",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3160,
      y: 3060,
    },
    name: "BattleField",
    id: "174d85bb-217b-4a54-baa1-2c89c4b11ef1",
    right: "abd2d2d1-f967-4b06-b1e2-05f135981a67",
    left: "e8f299b9-0aeb-4799-a7c8-609a124bdcbd",
    edges: [
      "484eb876-3572-40cf-b548-b817d9b12799",
      "7f815fd4-3819-4c4e-92f1-fb0af8508d21",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2960,
      y: 3060,
    },
    name: "BattleField",
    id: "e8f299b9-0aeb-4799-a7c8-609a124bdcbd",
    right: "174d85bb-217b-4a54-baa1-2c89c4b11ef1",
    left: "7bea5b67-ef03-452d-acf4-f611dbcd8aea",
    top: "6cb81b8e-a640-490a-94d0-f1223b4c5421",
    edges: [
      "7f815fd4-3819-4c4e-92f1-fb0af8508d21",
      "5f696359-cbc8-40f4-bf04-02db5c3b93ec",
      "09069232-7303-4d97-9524-65d22c40ddf5",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2760,
      y: 3060,
    },
    name: "BattleField",
    id: "7bea5b67-ef03-452d-acf4-f611dbcd8aea",
    right: "e8f299b9-0aeb-4799-a7c8-609a124bdcbd",
    top: "987230a9-f0a9-441e-97f6-6711b1855ee9",
    edges: [
      "5f696359-cbc8-40f4-bf04-02db5c3b93ec",
      "93f974a2-4eb1-45c7-9255-98c21d512c43",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2760,
      y: 2760,
    },
    name: "BattleField",
    id: "987230a9-f0a9-441e-97f6-6711b1855ee9",
    bottom: "7bea5b67-ef03-452d-acf4-f611dbcd8aea",
    right: "f5b58107-f585-4bd8-b2fc-e01d91e92aca",
    edges: [
      "93f974a2-4eb1-45c7-9255-98c21d512c43",
      "b347d073-c067-42d3-8963-c2e898d656d2",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2960,
      y: 2760,
    },
    name: "BattleField",
    id: "f5b58107-f585-4bd8-b2fc-e01d91e92aca",
    left: "987230a9-f0a9-441e-97f6-6711b1855ee9",
    bottom: "6cb81b8e-a640-490a-94d0-f1223b4c5421",
    top: "68d7fcd7-e960-4514-9603-f271284086d1",
    edges: [
      "b347d073-c067-42d3-8963-c2e898d656d2",
      "c46a202a-4280-4652-b0eb-21b4c9523387",
      "574baae4-b95d-4cec-b729-35c75c73e90c",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3000,
      y: 2920,
    },
    name: "TreasureField",
    id: "6cb81b8e-a640-490a-94d0-f1223b4c5421",
    top: "f5b58107-f585-4bd8-b2fc-e01d91e92aca",
    bottom: "e8f299b9-0aeb-4799-a7c8-609a124bdcbd",
    edges: [
      "c46a202a-4280-4652-b0eb-21b4c9523387",
      "09069232-7303-4d97-9524-65d22c40ddf5",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1760,
      y: 2460,
    },
    name: "TreasureField",
    id: "d9bba158-17ec-4bda-9f21-f466cbb89fd4",
    top: "88143df3-c23e-4792-9a85-a57f2d0440a4",
    bottom: "3a0a7f06-ca31-4ae9-8e5d-67f6d33479e1",
    left: "b07aaa89-3bf7-4cc4-9fbd-958eb1d9319c",
    edges: [
      "66931558-4ee8-46b1-a0e2-b7d2832a1cb3",
      "1bcce949-f732-4164-9633-a9abb06ad930",
      "34584329-d5f6-4b43-b22d-a8a6635a0699",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1760,
      y: 2660,
    },
    name: "BattleField",
    id: "3a0a7f06-ca31-4ae9-8e5d-67f6d33479e1",
    top: "d9bba158-17ec-4bda-9f21-f466cbb89fd4",
    right: "f7ee4c7c-cf1c-4218-a54b-fafaf2fe8968",
    edges: [
      "1bcce949-f732-4164-9633-a9abb06ad930",
      "4a5258ad-bc80-46e4-a4bc-fe90fd7bfa42",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1960,
      y: 2660,
    },
    name: "BattleField",
    id: "f7ee4c7c-cf1c-4218-a54b-fafaf2fe8968",
    left: "3a0a7f06-ca31-4ae9-8e5d-67f6d33479e1",
    top: "aaeb9d25-3961-4529-b9e3-fd6b92f455c2",
    bottom: "cd9e3b5d-7246-4557-848c-a8dac612fbdc",
    edges: [
      "4a5258ad-bc80-46e4-a4bc-fe90fd7bfa42",
      "3f546543-825c-4540-904d-9a23ec29f036",
      "da420198-2bb4-429e-9495-5e3a877f96bb",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1960,
      y: 2460,
    },
    name: "JobStoreField",
    id: "aaeb9d25-3961-4529-b9e3-fd6b92f455c2",
    bottom: "f7ee4c7c-cf1c-4218-a54b-fafaf2fe8968",
    edges: [
      "3f546543-825c-4540-904d-9a23ec29f036",
      "727ee2b1-ffa8-45f6-ab34-4257146c068e",
    ],
    right: "cce4c524-0cee-4d29-b998-04377768c8da",
    area: "Africa",
  },
  {
    position: {
      x: 1960,
      y: 2840,
    },
    name: "BattleField",
    id: "cd9e3b5d-7246-4557-848c-a8dac612fbdc",
    top: "f7ee4c7c-cf1c-4218-a54b-fafaf2fe8968",
    right: "2877e24b-a5aa-4610-a0cb-afca864de892",
    edges: [
      "da420198-2bb4-429e-9495-5e3a877f96bb",
      "7033405f-4727-4379-8267-a3e2a670bea8",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2160,
      y: 2840,
    },
    name: "MagicBookField",
    id: "2877e24b-a5aa-4610-a0cb-afca864de892",
    left: "cd9e3b5d-7246-4557-848c-a8dac612fbdc",
    bottom: "f7b3185e-5513-4527-ada6-507c975faf15",
    edges: [
      "7033405f-4727-4379-8267-a3e2a670bea8",
      "98fd9f17-1330-4eb2-95b7-e331e0e4709a",
      "bd58658e-6214-4418-b6d0-18a1d572d5f8",
    ],
    top: "cce4c524-0cee-4d29-b998-04377768c8da",
    area: "Africa",
  },
  {
    position: {
      x: 2960,
      y: 2460,
    },
    name: "BattleField",
    id: "68d7fcd7-e960-4514-9603-f271284086d1",
    bottom: "f5b58107-f585-4bd8-b2fc-e01d91e92aca",
    edges: [
      "574baae4-b95d-4cec-b729-35c75c73e90c",
      "c6dc6dfa-9e8d-4022-8292-00149771c388",
    ],
    left: "648aa064-fb51-4bbf-8b4c-f8f50e6e82f0",
    area: "Africa",
  },
  {
    position: {
      x: 2720,
      y: 2240,
    },
    name: "VillageField",
    id: "16dc9cb2-c319-48ab-89b2-5ff9a09e7594",
    edges: ["1294098e-7868-460a-97a8-450d62aac954"],
    bottom: "648aa064-fb51-4bbf-8b4c-f8f50e6e82f0",
    area: "Africa",
  },
  {
    position: {
      x: 1540,
      y: 2460,
    },
    name: "BattleField",
    id: "b07aaa89-3bf7-4cc4-9fbd-958eb1d9319c",
    right: "d9bba158-17ec-4bda-9f21-f466cbb89fd4",
    left: "1fa37190-aa3b-4ffb-aa24-bfd3b32a3829",
    top: "5ddb4be4-55e6-4ed5-9757-870c32c16026",
    edges: [
      "34584329-d5f6-4b43-b22d-a8a6635a0699",
      "a695acf4-c195-4046-b8ef-807e906092f3",
      "c4e8445c-067c-4e0e-8206-f4f1c7e2953d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1140,
      y: 2460,
    },
    name: "TreasureField",
    id: "1fa37190-aa3b-4ffb-aa24-bfd3b32a3829",
    right: "b07aaa89-3bf7-4cc4-9fbd-958eb1d9319c",
    top: "5405ed3a-479b-43ee-9f73-eb6c1f14c89f",
    edges: [
      "a695acf4-c195-4046-b8ef-807e906092f3",
      "fef1861b-8691-4ac7-aecb-9f47b96028f4",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1140,
      y: 2300,
    },
    name: "BattleField",
    id: "5405ed3a-479b-43ee-9f73-eb6c1f14c89f",
    bottom: "1fa37190-aa3b-4ffb-aa24-bfd3b32a3829",
    right: "bbfc72ff-1393-46c4-96c3-e3a63ee14fcd",
    left: "fa36d5a2-ace8-4dee-bba1-42cb2cd63920",
    edges: [
      "fef1861b-8691-4ac7-aecb-9f47b96028f4",
      "0ed3eaf7-acbd-4e9d-9f72-c2c7c525be10",
      "2eca67d1-b9bc-43f0-9bbe-b26f508e4055",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1340,
      y: 2300,
    },
    name: "BattleField",
    id: "bbfc72ff-1393-46c4-96c3-e3a63ee14fcd",
    left: "5405ed3a-479b-43ee-9f73-eb6c1f14c89f",
    right: "5ddb4be4-55e6-4ed5-9757-870c32c16026",
    top: "34d157a9-d9f6-4dc7-b2c6-528df4486844",
    edges: [
      "0ed3eaf7-acbd-4e9d-9f72-c2c7c525be10",
      "f76691fe-84ed-4073-9b62-e9a3c437653f",
      "7a8e5bf1-6aa8-4150-872d-232e94e424b3",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1540,
      y: 2300,
    },
    name: "MagicStoreField",
    id: "5ddb4be4-55e6-4ed5-9757-870c32c16026",
    left: "bbfc72ff-1393-46c4-96c3-e3a63ee14fcd",
    bottom: "b07aaa89-3bf7-4cc4-9fbd-958eb1d9319c",
    edges: [
      "f76691fe-84ed-4073-9b62-e9a3c437653f",
      "c4e8445c-067c-4e0e-8206-f4f1c7e2953d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1380,
      y: 2120,
    },
    name: "MagicBookField",
    id: "34d157a9-d9f6-4dc7-b2c6-528df4486844",
    bottom: "bbfc72ff-1393-46c4-96c3-e3a63ee14fcd",
    left: "ae4fce93-6a09-467c-a7aa-bc5b60de3709",
    edges: [
      "7a8e5bf1-6aa8-4150-872d-232e94e424b3",
      "40b2063d-2e80-47b6-8369-5d67f710f886",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1160,
      y: 2120,
    },
    name: "BattleField",
    id: "ae4fce93-6a09-467c-a7aa-bc5b60de3709",
    right: "34d157a9-d9f6-4dc7-b2c6-528df4486844",
    top: "080ec5a9-61b6-4c4b-8fc4-a6e692579093",
    edges: [
      "40b2063d-2e80-47b6-8369-5d67f710f886",
      "b14cffc8-3c71-4f31-9fa5-fb7d78e3de83",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1200,
      y: 1960,
    },
    name: "BattleField",
    id: "080ec5a9-61b6-4c4b-8fc4-a6e692579093",
    bottom: "ae4fce93-6a09-467c-a7aa-bc5b60de3709",
    top: "f28220fb-cebb-4bca-874c-ed7ff1772494",
    edges: [
      "b14cffc8-3c71-4f31-9fa5-fb7d78e3de83",
      "908fd5b4-62d0-4ca6-8ad9-2365729f0901",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1240,
      y: 1780,
    },
    name: "VillageField",
    id: "f28220fb-cebb-4bca-874c-ed7ff1772494",
    bottom: "080ec5a9-61b6-4c4b-8fc4-a6e692579093",
    edges: ["908fd5b4-62d0-4ca6-8ad9-2365729f0901"],
    area: "Africa",
  },
  {
    position: {
      x: 920,
      y: 2300,
    },
    name: "BattleField",
    id: "fa36d5a2-ace8-4dee-bba1-42cb2cd63920",
    right: "5405ed3a-479b-43ee-9f73-eb6c1f14c89f",
    bottom: "619c1270-fba7-4bad-910e-04a9bbd5ed60",
    left: "1ae37fd6-c783-484a-9f62-124406d09511",
    edges: [
      "2eca67d1-b9bc-43f0-9bbe-b26f508e4055",
      "ab921518-119e-4bbf-b241-c662deee1e41",
      "0c7c7a12-f886-4acf-8d81-63b5cc55898b",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 920,
      y: 2460,
    },
    name: "CollectMoneyField",
    id: "619c1270-fba7-4bad-910e-04a9bbd5ed60",
    top: "fa36d5a2-ace8-4dee-bba1-42cb2cd63920",
    left: "89ad7f5d-70d8-45bb-837f-ae21966708ff",
    bottom: "6939e085-9678-4afd-89eb-99ed19440848",
    edges: [
      "ab921518-119e-4bbf-b241-c662deee1e41",
      "c75e87cf-9a18-411d-97eb-7624a97529d0",
      "0a3d6f08-f471-4c11-b055-645207cad63b",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 640,
      y: 2300,
    },
    name: "TreasureField",
    id: "1ae37fd6-c783-484a-9f62-124406d09511",
    right: "fa36d5a2-ace8-4dee-bba1-42cb2cd63920",
    left: "a124e103-4321-468c-81f9-405a49eda01c",
    edges: [
      "0c7c7a12-f886-4acf-8d81-63b5cc55898b",
      "a625c992-5064-4860-9c8e-07e6c3538c1a",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 380,
      y: 2300,
    },
    name: "BattleField",
    id: "a124e103-4321-468c-81f9-405a49eda01c",
    right: "1ae37fd6-c783-484a-9f62-124406d09511",
    bottom: "2b05583a-deef-4751-a687-7dd441e56a25",
    edges: [
      "a625c992-5064-4860-9c8e-07e6c3538c1a",
      "fd750e3f-4950-44ba-a24a-d7ebe2ac1965",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 720,
      y: 2460,
    },
    name: "BattleField",
    id: "89ad7f5d-70d8-45bb-837f-ae21966708ff",
    right: "619c1270-fba7-4bad-910e-04a9bbd5ed60",
    left: "35041058-a31a-4fe3-a316-5fc922b81f65",
    edges: [
      "c75e87cf-9a18-411d-97eb-7624a97529d0",
      "817e5062-e465-4a5e-a542-6f319bb4765b",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 520,
      y: 2460,
    },
    name: "BattleField",
    id: "35041058-a31a-4fe3-a316-5fc922b81f65",
    right: "89ad7f5d-70d8-45bb-837f-ae21966708ff",
    bottom: "503df25c-7e22-48a8-a16a-b34355092f6f",
    edges: [
      "817e5062-e465-4a5e-a542-6f319bb4765b",
      "33d5b3c6-32d7-480b-81df-46b8dd7b55a6",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 340,
      y: 2460,
    },
    name: "TreasureField",
    id: "2b05583a-deef-4751-a687-7dd441e56a25",
    top: "a124e103-4321-468c-81f9-405a49eda01c",
    bottom: "e9650755-5abf-42a3-9e54-95cf54d82ff2",
    left: "508251b0-ed61-474a-ba76-c1baf6d84157",
    edges: [
      "fd750e3f-4950-44ba-a24a-d7ebe2ac1965",
      "a8f0c7d0-3e30-4730-ac74-b767c770187e",
      "c51d9ff1-764b-48b6-b448-1d818ba8187e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 380,
      y: 2640,
    },
    name: "BattleField",
    id: "e9650755-5abf-42a3-9e54-95cf54d82ff2",
    top: "2b05583a-deef-4751-a687-7dd441e56a25",
    left: "9b163651-e5b6-4ba4-986f-589a4792f430",
    edges: [
      "a8f0c7d0-3e30-4730-ac74-b767c770187e",
      "9aa52658-2511-4d6a-a139-ec82570d4fd1",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 480,
      y: 2660,
    },
    name: "BattleField",
    id: "503df25c-7e22-48a8-a16a-b34355092f6f",
    top: "35041058-a31a-4fe3-a316-5fc922b81f65",
    bottom: "95aa9d15-ee59-4683-b364-56488fc692c4",
    edges: [
      "33d5b3c6-32d7-480b-81df-46b8dd7b55a6",
      "1631a321-5ced-463c-bc07-6387910de5f3",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 80,
      y: 2460,
    },
    name: "BattleField",
    id: "508251b0-ed61-474a-ba76-c1baf6d84157",
    right: "2b05583a-deef-4751-a687-7dd441e56a25",
    bottom: "bc9968c9-5592-4513-9831-60716054ded9",
    edges: [
      "c51d9ff1-764b-48b6-b448-1d818ba8187e",
      "d7f9b1f8-883d-4277-ba71-247585ea0d8c",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 40,
      y: 2640,
    },
    name: "BattleField",
    id: "bc9968c9-5592-4513-9831-60716054ded9",
    top: "508251b0-ed61-474a-ba76-c1baf6d84157",
    right: "9b163651-e5b6-4ba4-986f-589a4792f430",
    edges: [
      "d7f9b1f8-883d-4277-ba71-247585ea0d8c",
      "9a64ce5d-b827-4ce7-8f24-9ec747945073",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 200,
      y: 2640,
    },
    name: "GroceryStoreField",
    id: "9b163651-e5b6-4ba4-986f-589a4792f430",
    left: "bc9968c9-5592-4513-9831-60716054ded9",
    right: "e9650755-5abf-42a3-9e54-95cf54d82ff2",
    bottom: "39f7989f-7dcb-451e-88e7-5ad2804d188c",
    edges: [
      "9a64ce5d-b827-4ce7-8f24-9ec747945073",
      "9aa52658-2511-4d6a-a139-ec82570d4fd1",
      "2cdd2473-de40-4844-a087-d538e326d15d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 920,
      y: 2680,
    },
    name: "BattleField",
    id: "6939e085-9678-4afd-89eb-99ed19440848",
    top: "619c1270-fba7-4bad-910e-04a9bbd5ed60",
    right: "bbfd6dd2-a6b8-4024-be59-4cbeb921bde3",
    left: "25d92ae6-fbf0-4a85-9164-6f59cb0d79b1",
    edges: [
      "0a3d6f08-f471-4c11-b055-645207cad63b",
      "8f391eb6-65c6-4af3-8bfd-b45f74c17567",
      "f1ca306d-75b4-4a62-ba50-84b29d04a2f8",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 720,
      y: 2680,
    },
    name: "TreasureField",
    id: "25d92ae6-fbf0-4a85-9164-6f59cb0d79b1",
    right: "6939e085-9678-4afd-89eb-99ed19440848",
    bottom: "9f5f4743-9ddc-48a8-b6d9-c1a79872673f",
    edges: [
      "f1ca306d-75b4-4a62-ba50-84b29d04a2f8",
      "5edec508-2d7d-440c-b921-a9ab84c22bff",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 720,
      y: 2860,
    },
    name: "BattleField",
    id: "9f5f4743-9ddc-48a8-b6d9-c1a79872673f",
    top: "25d92ae6-fbf0-4a85-9164-6f59cb0d79b1",
    right: "bac5cc3d-654b-4e6a-a1ff-cd6ae1df9a31",
    bottom: "44c8b016-f626-4579-93d2-a5a8da72899e",
    edges: [
      "5edec508-2d7d-440c-b921-a9ab84c22bff",
      "381e7cda-0c31-4f6b-a5cc-e946005eed9b",
      "a19b5188-da26-4016-8310-5cb927165f64",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1120,
      y: 2680,
    },
    name: "BattleField",
    id: "bbfd6dd2-a6b8-4024-be59-4cbeb921bde3",
    left: "6939e085-9678-4afd-89eb-99ed19440848",
    bottom: "bac5cc3d-654b-4e6a-a1ff-cd6ae1df9a31",
    edges: [
      "8f391eb6-65c6-4af3-8bfd-b45f74c17567",
      "1320a934-d3ab-458d-9086-565475a2cc18",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1120,
      y: 2860,
    },
    name: "TreasureField",
    id: "bac5cc3d-654b-4e6a-a1ff-cd6ae1df9a31",
    top: "bbfd6dd2-a6b8-4024-be59-4cbeb921bde3",
    left: "9f5f4743-9ddc-48a8-b6d9-c1a79872673f",
    bottom: "2109c97e-6c99-494d-b22d-066e5d546906",
    edges: [
      "1320a934-d3ab-458d-9086-565475a2cc18",
      "381e7cda-0c31-4f6b-a5cc-e946005eed9b",
      "8f23c555-51cf-43b0-98c3-333a80ab7196",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 480,
      y: 2860,
    },
    name: "TreasureField",
    id: "95aa9d15-ee59-4683-b364-56488fc692c4",
    top: "503df25c-7e22-48a8-a16a-b34355092f6f",
    bottom: "4fe5cf19-9e47-4f21-948e-2dfa618eeabd",
    edges: [
      "1631a321-5ced-463c-bc07-6387910de5f3",
      "12cbbfa0-8845-4872-9786-ecff9fb368b3",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 480,
      y: 3200,
    },
    name: "BattleField",
    id: "4fe5cf19-9e47-4f21-948e-2dfa618eeabd",
    top: "95aa9d15-ee59-4683-b364-56488fc692c4",
    right: "97dc432c-1c1f-40a8-b2d8-10b4b23d34c5",
    edges: [
      "12cbbfa0-8845-4872-9786-ecff9fb368b3",
      "e0de1bf7-4de5-4150-9ef5-1bde1a415cae",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 720,
      y: 3020,
    },
    name: "BattleField",
    id: "44c8b016-f626-4579-93d2-a5a8da72899e",
    top: "9f5f4743-9ddc-48a8-b6d9-c1a79872673f",
    bottom: "97dc432c-1c1f-40a8-b2d8-10b4b23d34c5",
    edges: [
      "a19b5188-da26-4016-8310-5cb927165f64",
      "89ffbbdc-4d09-47ca-bf00-804905b59485",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 720,
      y: 3200,
    },
    name: "BattleField",
    id: "97dc432c-1c1f-40a8-b2d8-10b4b23d34c5",
    top: "44c8b016-f626-4579-93d2-a5a8da72899e",
    left: "4fe5cf19-9e47-4f21-948e-2dfa618eeabd",
    right: "3ed15ac5-7b4c-44f9-8fe3-e5aa12c76e9c",
    bottom: "b6f78526-4378-452e-a636-1c54a2f284b2",
    edges: [
      "89ffbbdc-4d09-47ca-bf00-804905b59485",
      "e0de1bf7-4de5-4150-9ef5-1bde1a415cae",
      "4c0803d5-8584-4d6f-b2c6-10eede1fe62f",
      "63f36549-bd5b-4dc7-8aa9-a619acc40ba9",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1120,
      y: 3120,
    },
    name: "BattleField",
    id: "2109c97e-6c99-494d-b22d-066e5d546906",
    top: "bac5cc3d-654b-4e6a-a1ff-cd6ae1df9a31",
    right: "3dde5f36-3c29-4ea8-994f-42e164c26bf4",
    edges: [
      "8f23c555-51cf-43b0-98c3-333a80ab7196",
      "556c7a53-6ea7-49c3-a9cd-d57831d5247b",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1300,
      y: 3120,
    },
    name: "BattleField",
    id: "3dde5f36-3c29-4ea8-994f-42e164c26bf4",
    left: "2109c97e-6c99-494d-b22d-066e5d546906",
    bottom: "82b0d74a-6d10-40e1-ada7-030034d8b0dd",
    right: "e1975b6a-5deb-4900-a851-dee9a177ff74",
    edges: [
      "556c7a53-6ea7-49c3-a9cd-d57831d5247b",
      "1e29c8cd-a5d6-46b8-a08c-53f9cae8b2a2",
      "83ebb287-8f8e-44ce-93c2-59fe8588e8c3",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1300,
      y: 3360,
    },
    name: "BattleField",
    id: "82b0d74a-6d10-40e1-ada7-030034d8b0dd",
    top: "3dde5f36-3c29-4ea8-994f-42e164c26bf4",
    left: "4af81848-da32-4762-a3fd-f429b71ed19a",
    bottom: "391ec145-152e-4677-bc24-63b469b9b6a1",
    edges: [
      "1e29c8cd-a5d6-46b8-a08c-53f9cae8b2a2",
      "dd552f1d-1d88-40b2-af0a-b7ab99f157d3",
      "004a3677-3b08-4b4a-bf98-22fb57748a08",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 880,
      y: 3200,
    },
    name: "BattleField",
    id: "3ed15ac5-7b4c-44f9-8fe3-e5aa12c76e9c",
    left: "97dc432c-1c1f-40a8-b2d8-10b4b23d34c5",
    bottom: "9c2e8482-a87f-456b-b883-ad52956a8c1d",
    edges: [
      "4c0803d5-8584-4d6f-b2c6-10eede1fe62f",
      "fd2e8656-8d09-4f1e-b061-662b0f44e72d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 720,
      y: 3520,
    },
    name: "BattleField",
    id: "b6f78526-4378-452e-a636-1c54a2f284b2",
    top: "97dc432c-1c1f-40a8-b2d8-10b4b23d34c5",
    right: "950ad97b-5e35-487a-8aac-c67eb37eeb19",
    edges: [
      "63f36549-bd5b-4dc7-8aa9-a619acc40ba9",
      "b9f28f26-d620-4f7c-83bf-8f306649505b",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 880,
      y: 3520,
    },
    name: "MagicBookField",
    id: "950ad97b-5e35-487a-8aac-c67eb37eeb19",
    left: "b6f78526-4378-452e-a636-1c54a2f284b2",
    top: "9c2e8482-a87f-456b-b883-ad52956a8c1d",
    right: "391ec145-152e-4677-bc24-63b469b9b6a1",
    bottom: "08857627-5a03-435c-9484-8367c9e71863",
    edges: [
      "b9f28f26-d620-4f7c-83bf-8f306649505b",
      "e287d9c5-1a86-492f-ba0c-3e3a8ad04018",
      "afbc3d2d-a494-46d8-b2ce-3d8096976c87",
      "32054d0d-0fd6-4e11-b211-9bebcb48d68c",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 880,
      y: 3360,
    },
    name: "BattleField",
    id: "9c2e8482-a87f-456b-b883-ad52956a8c1d",
    top: "3ed15ac5-7b4c-44f9-8fe3-e5aa12c76e9c",
    bottom: "950ad97b-5e35-487a-8aac-c67eb37eeb19",
    right: "4af81848-da32-4762-a3fd-f429b71ed19a",
    edges: [
      "fd2e8656-8d09-4f1e-b061-662b0f44e72d",
      "e287d9c5-1a86-492f-ba0c-3e3a8ad04018",
      "1938037f-3903-4895-9b0a-687b53aaf8b6",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1100,
      y: 3360,
    },
    name: "VillageField",
    id: "4af81848-da32-4762-a3fd-f429b71ed19a",
    left: "9c2e8482-a87f-456b-b883-ad52956a8c1d",
    right: "82b0d74a-6d10-40e1-ada7-030034d8b0dd",
    edges: [
      "1938037f-3903-4895-9b0a-687b53aaf8b6",
      "dd552f1d-1d88-40b2-af0a-b7ab99f157d3",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1300,
      y: 3520,
    },
    name: "TreasureField",
    id: "391ec145-152e-4677-bc24-63b469b9b6a1",
    left: "950ad97b-5e35-487a-8aac-c67eb37eeb19",
    top: "82b0d74a-6d10-40e1-ada7-030034d8b0dd",
    bottom: "7842ed3c-4cac-45c8-9866-3f484aa5d356",
    edges: [
      "afbc3d2d-a494-46d8-b2ce-3d8096976c87",
      "004a3677-3b08-4b4a-bf98-22fb57748a08",
      "27f073d5-6706-4600-8d94-8642eba7b8f3",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2160,
      y: 2980,
    },
    name: "BattleField",
    id: "f7b3185e-5513-4527-ada6-507c975faf15",
    top: "2877e24b-a5aa-4610-a0cb-afca864de892",
    left: "3bc2f290-fa82-4c09-bc3e-d474742de716",
    bottom: "7e43d406-c437-4d8d-aa6c-9e01abcb2e32",
    edges: [
      "98fd9f17-1330-4eb2-95b7-e331e0e4709a",
      "0bbbfb8d-2c34-4b95-864f-0a44a4c0a60f",
      "7bcaa979-fc59-4f2e-a99f-60996a924288",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1800,
      y: 2980,
    },
    name: "TreasureField",
    id: "3bc2f290-fa82-4c09-bc3e-d474742de716",
    right: "f7b3185e-5513-4527-ada6-507c975faf15",
    left: "2588b3f6-24d1-448c-8020-1f7a81c10ac4",
    edges: [
      "0bbbfb8d-2c34-4b95-864f-0a44a4c0a60f",
      "e2248b10-3c6b-47b3-9274-86ef4a7e69a5",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1480,
      y: 2980,
    },
    name: "BattleField",
    id: "2588b3f6-24d1-448c-8020-1f7a81c10ac4",
    right: "3bc2f290-fa82-4c09-bc3e-d474742de716",
    bottom: "e1975b6a-5deb-4900-a851-dee9a177ff74",
    edges: [
      "e2248b10-3c6b-47b3-9274-86ef4a7e69a5",
      "4a84c381-9e1f-4d34-ab83-d2591c5349ae",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1480,
      y: 3120,
    },
    name: "MagicBookField",
    id: "e1975b6a-5deb-4900-a851-dee9a177ff74",
    left: "3dde5f36-3c29-4ea8-994f-42e164c26bf4",
    top: "2588b3f6-24d1-448c-8020-1f7a81c10ac4",
    edges: [
      "83ebb287-8f8e-44ce-93c2-59fe8588e8c3",
      "4a84c381-9e1f-4d34-ab83-d2591c5349ae",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2160,
      y: 3200,
    },
    name: "RedTreasureField",
    id: "7e43d406-c437-4d8d-aa6c-9e01abcb2e32",
    top: "f7b3185e-5513-4527-ada6-507c975faf15",
    bottom: "8e0561cc-1352-4243-8129-91b43191fb12",
    edges: [
      "7bcaa979-fc59-4f2e-a99f-60996a924288",
      "763a5169-3690-4c73-b11f-99c4ceb64a9c",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2160,
      y: 3400,
    },
    name: "TreasureField",
    id: "8e0561cc-1352-4243-8129-91b43191fb12",
    top: "7e43d406-c437-4d8d-aa6c-9e01abcb2e32",
    left: "60db115a-341e-4ec1-8740-91f99dd79375",
    right: "58e6727a-ffdf-4cc9-9708-21e8b6a5c0dc",
    edges: [
      "763a5169-3690-4c73-b11f-99c4ceb64a9c",
      "40823ddd-9fc4-4b59-b6e7-e0c1f9393f10",
      "05a39c9b-c78a-42b0-ad41-73bbf4335055",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1300,
      y: 3680,
    },
    name: "BattleField",
    id: "7842ed3c-4cac-45c8-9866-3f484aa5d356",
    top: "391ec145-152e-4677-bc24-63b469b9b6a1",
    right: "9216746c-a2ee-402e-b3c3-c9e0fcf723ab",
    edges: [
      "27f073d5-6706-4600-8d94-8642eba7b8f3",
      "02293332-dac8-447d-8abe-2f66dfeaca36",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1520,
      y: 3680,
    },
    name: "BattleField",
    id: "9216746c-a2ee-402e-b3c3-c9e0fcf723ab",
    left: "7842ed3c-4cac-45c8-9866-3f484aa5d356",
    right: "262bf198-703a-4ca3-a7e5-67c1d40891bf",
    bottom: "f417bc5f-c88d-483f-ac7a-8ef7e4767152",
    edges: [
      "02293332-dac8-447d-8abe-2f66dfeaca36",
      "3ada4b85-3f5a-414c-9123-c36716d481f9",
      "816c0883-5569-4661-b4f7-e94a90518479",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1720,
      y: 3680,
    },
    name: "TreasureField",
    id: "262bf198-703a-4ca3-a7e5-67c1d40891bf",
    left: "9216746c-a2ee-402e-b3c3-c9e0fcf723ab",
    top: "bdccf9dc-f2e9-44c0-bc84-cbb13aaabfe8",
    edges: [
      "3ada4b85-3f5a-414c-9123-c36716d481f9",
      "807ea18f-07d5-4372-9f9c-9022fa486bd5",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1720,
      y: 3540,
    },
    name: "BattleField",
    id: "bdccf9dc-f2e9-44c0-bc84-cbb13aaabfe8",
    bottom: "262bf198-703a-4ca3-a7e5-67c1d40891bf",
    top: "43eccedd-50d4-4958-9f09-c9c718102ae4",
    edges: [
      "807ea18f-07d5-4372-9f9c-9022fa486bd5",
      "9eebf140-c741-4021-8422-b5aa2f5d2263",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1720,
      y: 3400,
    },
    name: "BattleField",
    id: "43eccedd-50d4-4958-9f09-c9c718102ae4",
    bottom: "bdccf9dc-f2e9-44c0-bc84-cbb13aaabfe8",
    right: "60db115a-341e-4ec1-8740-91f99dd79375",
    edges: [
      "9eebf140-c741-4021-8422-b5aa2f5d2263",
      "cd28ecc8-3b96-4259-b43a-0f38936fa798",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1940,
      y: 3400,
    },
    name: "VillageField",
    id: "60db115a-341e-4ec1-8740-91f99dd79375",
    left: "43eccedd-50d4-4958-9f09-c9c718102ae4",
    right: "8e0561cc-1352-4243-8129-91b43191fb12",
    edges: [
      "cd28ecc8-3b96-4259-b43a-0f38936fa798",
      "40823ddd-9fc4-4b59-b6e7-e0c1f9393f10",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3160,
      y: 3800,
    },
    name: "TreasureField",
    id: "7175aab2-fb9f-410c-b6de-1019871f4cf1",
    top: "f7b5ff65-c762-425c-9586-a245c385f110",
    left: "f01e6bc2-9437-4100-bd35-25b988bf9dee",
    bottom: "658fcdcf-7640-4e34-a5b8-ce12554d0d55",
    edges: [
      "2e55a1f5-c37e-4d14-ba11-24a67a1ce052",
      "1c97d5c6-738a-4de9-a61b-4d11983815e6",
      "97e47f92-258b-4db4-be29-ccac113d34b1",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2760,
      y: 3800,
    },
    name: "BattleField",
    id: "f01e6bc2-9437-4100-bd35-25b988bf9dee",
    right: "7175aab2-fb9f-410c-b6de-1019871f4cf1",
    top: "58e6727a-ffdf-4cc9-9708-21e8b6a5c0dc",
    bottom: "bdf8f00d-54e3-42d1-8c0e-70bb71fa0f44",
    edges: [
      "1c97d5c6-738a-4de9-a61b-4d11983815e6",
      "3a1d3ac1-e388-4372-b498-90ddbec45e8b",
      "b3316237-3393-47f7-b34a-8294eebd89d8",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2760,
      y: 3400,
    },
    name: "BattleField",
    id: "58e6727a-ffdf-4cc9-9708-21e8b6a5c0dc",
    left: "8e0561cc-1352-4243-8129-91b43191fb12",
    bottom: "f01e6bc2-9437-4100-bd35-25b988bf9dee",
    edges: [
      "05a39c9b-c78a-42b0-ad41-73bbf4335055",
      "3a1d3ac1-e388-4372-b498-90ddbec45e8b",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2760,
      y: 3980,
    },
    name: "BattleField",
    id: "bdf8f00d-54e3-42d1-8c0e-70bb71fa0f44",
    top: "f01e6bc2-9437-4100-bd35-25b988bf9dee",
    right: "4b7b0f65-729b-4957-a308-5d62f3d84597",
    edges: [
      "b3316237-3393-47f7-b34a-8294eebd89d8",
      "a8746cc8-95db-421d-9ed8-303db02963e0",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2960,
      y: 3980,
    },
    name: "BattleField",
    id: "4b7b0f65-729b-4957-a308-5d62f3d84597",
    left: "bdf8f00d-54e3-42d1-8c0e-70bb71fa0f44",
    right: "658fcdcf-7640-4e34-a5b8-ce12554d0d55",
    bottom: "f0b7fbea-2784-49d2-869b-a7d6ad6fa442",
    edges: [
      "a8746cc8-95db-421d-9ed8-303db02963e0",
      "11124cd7-ac8d-4211-b7ca-02946546aea2",
      "f93202ec-b86d-4294-aa18-33a27c6fb345",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3160,
      y: 3980,
    },
    name: "BattleField",
    id: "658fcdcf-7640-4e34-a5b8-ce12554d0d55",
    left: "4b7b0f65-729b-4957-a308-5d62f3d84597",
    top: "7175aab2-fb9f-410c-b6de-1019871f4cf1",
    edges: [
      "11124cd7-ac8d-4211-b7ca-02946546aea2",
      "97e47f92-258b-4db4-be29-ccac113d34b1",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2960,
      y: 4180,
    },
    name: "BattleField",
    id: "f0b7fbea-2784-49d2-869b-a7d6ad6fa442",
    top: "4b7b0f65-729b-4957-a308-5d62f3d84597",
    bottom: "1f785877-daf9-42b3-a244-60db6af34448",
    edges: [
      "f93202ec-b86d-4294-aa18-33a27c6fb345",
      "5d95719d-b7ca-4e73-bb97-afcd522a6c6c",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2960,
      y: 4360,
    },
    name: "TreasureField",
    id: "1f785877-daf9-42b3-a244-60db6af34448",
    top: "f0b7fbea-2784-49d2-869b-a7d6ad6fa442",
    left: "9ec962b1-09e5-4b10-866f-41df29f7d0cc",
    bottom: "383bb84b-30cd-4862-8653-29a2d120cc9e",
    edges: [
      "5d95719d-b7ca-4e73-bb97-afcd522a6c6c",
      "b2a5efab-262b-438b-81c5-f595b38af0d9",
      "ab991deb-fa77-4a9e-8257-0ec6cfac3be1",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2760,
      y: 4360,
    },
    name: "BattleField",
    id: "9ec962b1-09e5-4b10-866f-41df29f7d0cc",
    right: "1f785877-daf9-42b3-a244-60db6af34448",
    bottom: "89a2590e-0a1b-4bf7-b961-5c16de591390",
    edges: [
      "b2a5efab-262b-438b-81c5-f595b38af0d9",
      "d55c0805-ef5a-440d-bf55-e02922aef2d5",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2960,
      y: 4680,
    },
    name: "MagicBookField",
    id: "383bb84b-30cd-4862-8653-29a2d120cc9e",
    top: "1f785877-daf9-42b3-a244-60db6af34448",
    left: "13d14170-774f-48da-a10e-841314a3185b",
    right: "d43fd910-861d-4d04-b2f6-5a1fc66dcb39",
    bottom: "9026c69f-1b8e-4eda-9f14-04b77fe8c333",
    edges: [
      "ab991deb-fa77-4a9e-8257-0ec6cfac3be1",
      "c61c3991-e5bd-40bf-aa8f-6d6994e749c9",
      "1382a531-41fc-4207-ac24-5a6f72594cb4",
      "e520124c-4e61-4f6a-9b21-db2ef64d6998",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2760,
      y: 4680,
    },
    name: "BattleField",
    id: "13d14170-774f-48da-a10e-841314a3185b",
    right: "383bb84b-30cd-4862-8653-29a2d120cc9e",
    top: "89a2590e-0a1b-4bf7-b961-5c16de591390",
    left: "67dd7739-b6fa-4508-8628-0e215173b95d",
    edges: [
      "c61c3991-e5bd-40bf-aa8f-6d6994e749c9",
      "bc1c212f-f747-43cb-8f38-01d8add2d987",
      "9d2837e6-f05d-49eb-aef2-8e5b527c8624",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2760,
      y: 4520,
    },
    name: "TreasureField",
    id: "89a2590e-0a1b-4bf7-b961-5c16de591390",
    bottom: "13d14170-774f-48da-a10e-841314a3185b",
    top: "9ec962b1-09e5-4b10-866f-41df29f7d0cc",
    edges: [
      "bc1c212f-f747-43cb-8f38-01d8add2d987",
      "d55c0805-ef5a-440d-bf55-e02922aef2d5",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2480,
      y: 4680,
    },
    name: "BattleField",
    id: "67dd7739-b6fa-4508-8628-0e215173b95d",
    right: "13d14170-774f-48da-a10e-841314a3185b",
    left: "c3a8d056-5781-47e4-88e2-02b805b4209f",
    edges: [
      "9d2837e6-f05d-49eb-aef2-8e5b527c8624",
      "9dfd27bc-3bc0-4229-87d5-71b9e9345fab",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2200,
      y: 4680,
    },
    name: "BattleField",
    id: "c3a8d056-5781-47e4-88e2-02b805b4209f",
    right: "67dd7739-b6fa-4508-8628-0e215173b95d",
    top: "5bd23f50-67ac-467e-b6e5-91a30ee3493a",
    edges: [
      "9dfd27bc-3bc0-4229-87d5-71b9e9345fab",
      "6cb5252e-a18e-4e7c-a8c4-e7645960d30b",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2180,
      y: 4460,
    },
    name: "BattleField",
    id: "5bd23f50-67ac-467e-b6e5-91a30ee3493a",
    bottom: "c3a8d056-5781-47e4-88e2-02b805b4209f",
    top: "0afc0ff8-dcab-43c3-9936-977ff129e5a5",
    edges: [
      "6cb5252e-a18e-4e7c-a8c4-e7645960d30b",
      "5d4fe047-ce11-41b9-9a57-0a7aedd6fff8",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2140,
      y: 4180,
    },
    name: "MagicBookField",
    id: "0afc0ff8-dcab-43c3-9936-977ff129e5a5",
    bottom: "5bd23f50-67ac-467e-b6e5-91a30ee3493a",
    top: "a9daa7aa-9e32-4281-b0f6-8f3b5a713b2a",
    left: "c8c22aa5-e5d5-43e1-ab26-0321cf780ac7",
    edges: [
      "5d4fe047-ce11-41b9-9a57-0a7aedd6fff8",
      "5f1b21f1-f524-4f82-aad6-19753f235c39",
      "06758002-cca1-4a28-a9c5-86d0d591d556",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2140,
      y: 3980,
    },
    name: "BattleField",
    id: "a9daa7aa-9e32-4281-b0f6-8f3b5a713b2a",
    bottom: "0afc0ff8-dcab-43c3-9936-977ff129e5a5",
    top: "ce81e242-e552-4aa3-a2a7-d6f1f5983e3b",
    edges: [
      "5f1b21f1-f524-4f82-aad6-19753f235c39",
      "573b0ae7-4c4e-4161-9f10-fab1a872291e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2140,
      y: 3740,
    },
    name: "VillageField",
    id: "ce81e242-e552-4aa3-a2a7-d6f1f5983e3b",
    bottom: "a9daa7aa-9e32-4281-b0f6-8f3b5a713b2a",
    edges: ["573b0ae7-4c4e-4161-9f10-fab1a872291e"],
    area: "Africa",
  },
  {
    position: {
      x: 1920,
      y: 4180,
    },
    name: "ChruchField",
    id: "c8c22aa5-e5d5-43e1-ab26-0321cf780ac7",
    right: "0afc0ff8-dcab-43c3-9936-977ff129e5a5",
    left: "9f020032-d80a-43c2-ae34-6ad401f810dd",
    bottom: "7d0cd4a7-12f7-4db2-b8f7-3d5b1375724d",
    edges: [
      "06758002-cca1-4a28-a9c5-86d0d591d556",
      "10706ce2-fbfa-431d-adc4-341f140871c7",
      "ca48c34b-6cfc-4b48-a178-0b3a73369b1e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1700,
      y: 4180,
    },
    name: "BattleField",
    id: "9f020032-d80a-43c2-ae34-6ad401f810dd",
    right: "c8c22aa5-e5d5-43e1-ab26-0321cf780ac7",
    bottom: "70f7a2a2-e426-4c39-9d66-7c79c46f8799",
    left: "ca228127-0a1f-446a-92b2-fe511a4a214c",
    edges: [
      "10706ce2-fbfa-431d-adc4-341f140871c7",
      "ec9631de-e667-4c96-8cce-29737f048cf6",
      "001cbe58-a3dd-4e14-985f-a7ec5c08bc0d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1720,
      y: 4340,
    },
    name: "BattleField",
    id: "70f7a2a2-e426-4c39-9d66-7c79c46f8799",
    top: "9f020032-d80a-43c2-ae34-6ad401f810dd",
    bottom: "ea46a50b-29e2-417f-815c-a7e005142918",
    edges: [
      "ec9631de-e667-4c96-8cce-29737f048cf6",
      "814881fa-cda3-42cc-86fc-df300c2c26a0",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1740,
      y: 4500,
    },
    name: "TreasureField",
    id: "ea46a50b-29e2-417f-815c-a7e005142918",
    top: "70f7a2a2-e426-4c39-9d66-7c79c46f8799",
    right: "7d0cd4a7-12f7-4db2-b8f7-3d5b1375724d",
    bottom: "c02c3534-12f8-451b-92b4-dfb877638c6d",
    edges: [
      "814881fa-cda3-42cc-86fc-df300c2c26a0",
      "263a0cc6-14be-4a18-9f7e-62d0fc520364",
      "7d627215-a586-4173-a81a-bf799f6a58fd",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1960,
      y: 4500,
    },
    name: "BattleField",
    id: "7d0cd4a7-12f7-4db2-b8f7-3d5b1375724d",
    left: "ea46a50b-29e2-417f-815c-a7e005142918",
    top: "c8c22aa5-e5d5-43e1-ab26-0321cf780ac7",
    edges: [
      "263a0cc6-14be-4a18-9f7e-62d0fc520364",
      "ca48c34b-6cfc-4b48-a178-0b3a73369b1e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1520,
      y: 3920,
    },
    name: "BattleField",
    id: "f417bc5f-c88d-483f-ac7a-8ef7e4767152",
    top: "9216746c-a2ee-402e-b3c3-c9e0fcf723ab",
    bottom: "ca228127-0a1f-446a-92b2-fe511a4a214c",
    edges: [
      "816c0883-5569-4661-b4f7-e94a90518479",
      "3e0f6bb6-c20a-4772-9020-5f87af127dfe",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1520,
      y: 4180,
    },
    name: "BattleField",
    id: "ca228127-0a1f-446a-92b2-fe511a4a214c",
    top: "f417bc5f-c88d-483f-ac7a-8ef7e4767152",
    right: "9f020032-d80a-43c2-ae34-6ad401f810dd",
    left: "19511ca3-748f-4060-891b-3c06401720e1",
    edges: [
      "3e0f6bb6-c20a-4772-9020-5f87af127dfe",
      "001cbe58-a3dd-4e14-985f-a7ec5c08bc0d",
      "cb59b29a-fa7f-4cdf-8ad1-897b8be79cff",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1820,
      y: 4680,
    },
    name: "BattleField",
    id: "c02c3534-12f8-451b-92b4-dfb877638c6d",
    top: "ea46a50b-29e2-417f-815c-a7e005142918",
    right: "2411b4e9-5fdc-447b-ae36-330ed903c2cb",
    left: "2b7aa32a-e089-467f-a621-781acc448dff",
    edges: [
      "7d627215-a586-4173-a81a-bf799f6a58fd",
      "e69157e0-de9d-4c30-8d7e-48a60860d87b",
      "aa881a6d-4cdf-4025-829a-82d5df876b57",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2040,
      y: 4680,
    },
    name: "BattleField",
    id: "2411b4e9-5fdc-447b-ae36-330ed903c2cb",
    left: "c02c3534-12f8-451b-92b4-dfb877638c6d",
    bottom: "64e0a917-ad88-4d33-8a47-d8dcdcc4c4b7",
    edges: [
      "e69157e0-de9d-4c30-8d7e-48a60860d87b",
      "4721cbd1-bab6-40ac-b4c9-d2997e9a7ea2",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2020,
      y: 4860,
    },
    name: "BattleField",
    id: "64e0a917-ad88-4d33-8a47-d8dcdcc4c4b7",
    top: "2411b4e9-5fdc-447b-ae36-330ed903c2cb",
    bottom: "28e75cd6-3298-475c-adbb-92ee38ceda07",
    edges: [
      "4721cbd1-bab6-40ac-b4c9-d2997e9a7ea2",
      "0cea8f74-7cba-4ce1-88eb-954f6758444e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2000,
      y: 5020,
    },
    name: "BattleField",
    id: "28e75cd6-3298-475c-adbb-92ee38ceda07",
    top: "64e0a917-ad88-4d33-8a47-d8dcdcc4c4b7",
    right: "296474f1-be30-4fe8-9045-754e37e1554e",
    edges: [
      "0cea8f74-7cba-4ce1-88eb-954f6758444e",
      "731aa77c-7642-4573-a8c3-e8da1307c400",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3200,
      y: 4680,
    },
    name: "BattleField",
    id: "d43fd910-861d-4d04-b2f6-5a1fc66dcb39",
    left: "383bb84b-30cd-4862-8653-29a2d120cc9e",
    bottom: "eafd1650-9312-40b1-87ed-cb09df886e69",
    edges: [
      "1382a531-41fc-4207-ac24-5a6f72594cb4",
      "300d0ed9-b9d5-4d3c-a7ff-378f4e86fc0e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2960,
      y: 5000,
    },
    name: "BattleField",
    id: "9026c69f-1b8e-4eda-9f14-04b77fe8c333",
    top: "383bb84b-30cd-4862-8653-29a2d120cc9e",
    right: "34a55e15-51e7-43fa-ac03-cffd5874a971",
    edges: [
      "e520124c-4e61-4f6a-9b21-db2ef64d6998",
      "8e6762f9-0a16-4744-89f2-29b5b3dbf3b5",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3200,
      y: 5000,
    },
    name: "BattleField",
    id: "34a55e15-51e7-43fa-ac03-cffd5874a971",
    left: "9026c69f-1b8e-4eda-9f14-04b77fe8c333",
    top: "eafd1650-9312-40b1-87ed-cb09df886e69",
    bottom: "f510b0c1-3f03-476c-903c-31df4b5e6d09",
    edges: [
      "8e6762f9-0a16-4744-89f2-29b5b3dbf3b5",
      "70a00b7b-18e3-477d-b21b-b39a0c3d593d",
      "60278524-1b52-4bb9-863f-d48027cb45e1",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3200,
      y: 4820,
    },
    name: "RedTreasureField",
    id: "eafd1650-9312-40b1-87ed-cb09df886e69",
    top: "d43fd910-861d-4d04-b2f6-5a1fc66dcb39",
    bottom: "34a55e15-51e7-43fa-ac03-cffd5874a971",
    edges: [
      "300d0ed9-b9d5-4d3c-a7ff-378f4e86fc0e",
      "70a00b7b-18e3-477d-b21b-b39a0c3d593d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2380,
      y: 5020,
    },
    name: "TreasureField",
    id: "296474f1-be30-4fe8-9045-754e37e1554e",
    left: "28e75cd6-3298-475c-adbb-92ee38ceda07",
    right: "f5e4d0f2-7dad-44a0-a02e-1edd74e40461",
    edges: [
      "731aa77c-7642-4573-a8c3-e8da1307c400",
      "f4facfeb-a345-4dfe-af74-21aa5c52032e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2740,
      y: 5020,
    },
    name: "VillageField",
    id: "f5e4d0f2-7dad-44a0-a02e-1edd74e40461",
    left: "296474f1-be30-4fe8-9045-754e37e1554e",
    bottom: "dad5a2b6-8c70-4f6c-bd5e-2eb5f1a4829d",
    edges: [
      "f4facfeb-a345-4dfe-af74-21aa5c52032e",
      "9f81979f-c3cf-4c01-b307-784c7de01d4d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2740,
      y: 5240,
    },
    name: "GoldTreasureField",
    id: "dad5a2b6-8c70-4f6c-bd5e-2eb5f1a4829d",
    top: "f5e4d0f2-7dad-44a0-a02e-1edd74e40461",
    bottom: "27040330-5967-41c7-aa6e-2aa29983e2aa",
    edges: [
      "9f81979f-c3cf-4c01-b307-784c7de01d4d",
      "b0448cc3-0a11-4d3a-bd21-9c3eaf51060a",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3200,
      y: 5240,
    },
    name: "BattleField",
    id: "f510b0c1-3f03-476c-903c-31df4b5e6d09",
    top: "34a55e15-51e7-43fa-ac03-cffd5874a971",
    bottom: "6e43fdd4-1e62-4992-b670-b6b9bf6265d5",
    edges: [
      "60278524-1b52-4bb9-863f-d48027cb45e1",
      "7964cbd2-833a-463f-984c-eac791a479bb",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1300,
      y: 4180,
    },
    name: "BattleField",
    id: "19511ca3-748f-4060-891b-3c06401720e1",
    right: "ca228127-0a1f-446a-92b2-fe511a4a214c",
    bottom: "0cadd882-c1bd-481f-9c01-2ed8db61f0a1",
    edges: [
      "cb59b29a-fa7f-4cdf-8ad1-897b8be79cff",
      "0f8709e8-b3ba-4f29-b081-1d27a09745fd",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1300,
      y: 4320,
    },
    name: "BattleField",
    id: "0cadd882-c1bd-481f-9c01-2ed8db61f0a1",
    top: "19511ca3-748f-4060-891b-3c06401720e1",
    bottom: "5f04e060-0b4b-4cf5-a651-9e3f76e4ac22",
    edges: [
      "0f8709e8-b3ba-4f29-b081-1d27a09745fd",
      "d397293b-2b88-49c2-8637-f669bebd0fca",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1300,
      y: 4480,
    },
    name: "TreasureField",
    id: "5f04e060-0b4b-4cf5-a651-9e3f76e4ac22",
    top: "0cadd882-c1bd-481f-9c01-2ed8db61f0a1",
    bottom: "ae05e30a-484a-41a6-b556-78fe582eb3fc",
    edges: [
      "d397293b-2b88-49c2-8637-f669bebd0fca",
      "fcccfe1f-c7cd-4810-9428-5deb9942406e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1300,
      y: 4760,
    },
    name: "BattleField",
    id: "ae05e30a-484a-41a6-b556-78fe582eb3fc",
    top: "5f04e060-0b4b-4cf5-a651-9e3f76e4ac22",
    left: "24387d13-baa8-498e-ac6d-052b8066732d",
    edges: [
      "fcccfe1f-c7cd-4810-9428-5deb9942406e",
      "e25b1335-23e6-4197-87c0-2176a55b915f",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1580,
      y: 4680,
    },
    name: "VillageField",
    id: "2b7aa32a-e089-467f-a621-781acc448dff",
    right: "c02c3534-12f8-451b-92b4-dfb877638c6d",
    bottom: "19e3cf4d-801f-499f-89d6-0c002c16395c",
    edges: [
      "aa881a6d-4cdf-4025-829a-82d5df876b57",
      "0c72dd26-3790-43b9-ada9-7c4391a375fb",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1580,
      y: 4840,
    },
    name: "TreasureField",
    id: "19e3cf4d-801f-499f-89d6-0c002c16395c",
    top: "2b7aa32a-e089-467f-a621-781acc448dff",
    bottom: "17989969-42f5-4aae-8140-d90ae4191ba0",
    edges: [
      "0c72dd26-3790-43b9-ada9-7c4391a375fb",
      "1aa9d324-12b2-4614-a843-96e3391d5314",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1580,
      y: 4980,
    },
    name: "BattleField",
    id: "17989969-42f5-4aae-8140-d90ae4191ba0",
    top: "19e3cf4d-801f-499f-89d6-0c002c16395c",
    bottom: "1fc8ef68-cafe-4456-8c8f-c22613136364",
    edges: [
      "1aa9d324-12b2-4614-a843-96e3391d5314",
      "7f8bdc88-fa51-488e-acac-e873ccfa6844",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1580,
      y: 5140,
    },
    name: "BattleField",
    id: "1fc8ef68-cafe-4456-8c8f-c22613136364",
    top: "17989969-42f5-4aae-8140-d90ae4191ba0",
    left: "4fe387f3-b20d-4502-8162-5cd333cbef07",
    edges: [
      "7f8bdc88-fa51-488e-acac-e873ccfa6844",
      "a24129e5-caa5-41be-bb46-ff6eb38b4e1f",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1340,
      y: 5140,
    },
    name: "MagicBookField",
    id: "4fe387f3-b20d-4502-8162-5cd333cbef07",
    right: "1fc8ef68-cafe-4456-8c8f-c22613136364",
    left: "be192b61-59df-45d2-abb9-08eb818877cf",
    edges: [
      "a24129e5-caa5-41be-bb46-ff6eb38b4e1f",
      "67c6e653-f9bf-40fa-b300-7decb6c3acff",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1080,
      y: 5080,
    },
    name: "BattleField",
    id: "be192b61-59df-45d2-abb9-08eb818877cf",
    right: "4fe387f3-b20d-4502-8162-5cd333cbef07",
    left: "48deb6fd-4088-4297-b6c6-907db8d87494",
    edges: [
      "67c6e653-f9bf-40fa-b300-7decb6c3acff",
      "950b9279-bea3-4ceb-8681-05c44b6f308d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1080,
      y: 4760,
    },
    name: "BattleField",
    id: "24387d13-baa8-498e-ac6d-052b8066732d",
    right: "ae05e30a-484a-41a6-b556-78fe582eb3fc",
    top: "4546db9d-a444-4b41-aeee-660b0a1dfef9",
    edges: [
      "e25b1335-23e6-4197-87c0-2176a55b915f",
      "8223f200-09bf-4542-8622-2b8a92435a2f",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1080,
      y: 4580,
    },
    name: "BattleField",
    id: "4546db9d-a444-4b41-aeee-660b0a1dfef9",
    bottom: "24387d13-baa8-498e-ac6d-052b8066732d",
    top: "4ba7bd86-a33e-4883-a087-8a94ec03cf4a",
    edges: [
      "8223f200-09bf-4542-8622-2b8a92435a2f",
      "4ee46000-9670-4c2d-9a3c-974909c57563",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1080,
      y: 4400,
    },
    name: "VillageField",
    id: "4ba7bd86-a33e-4883-a087-8a94ec03cf4a",
    bottom: "4546db9d-a444-4b41-aeee-660b0a1dfef9",
    edges: ["4ee46000-9670-4c2d-9a3c-974909c57563"],
    area: "Africa",
  },
  {
    position: {
      x: 860,
      y: 5020,
    },
    name: "TreasureField",
    id: "48deb6fd-4088-4297-b6c6-907db8d87494",
    right: "be192b61-59df-45d2-abb9-08eb818877cf",
    bottom: "f9c0cd50-23b0-483c-8cea-5a9dcd7c8778",
    top: "772ee759-3ea5-4360-8efc-683a546bca83",
    edges: [
      "950b9279-bea3-4ceb-8681-05c44b6f308d",
      "1d5c9d18-5126-421f-bc1f-1048fa2623a6",
      "ae3ee9dd-8e31-4ad8-a3dd-ea2f442747d4",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 860,
      y: 5220,
    },
    name: "BattleField",
    id: "f9c0cd50-23b0-483c-8cea-5a9dcd7c8778",
    top: "48deb6fd-4088-4297-b6c6-907db8d87494",
    left: "2ca9ad8a-bf92-42d9-ac0d-181686f33759",
    bottom: "7adbf945-97fb-496f-a5cd-4315d80b18c3",
    edges: [
      "1d5c9d18-5126-421f-bc1f-1048fa2623a6",
      "f0076751-71fc-4221-9548-05c1e5943e94",
      "d2d83a07-4858-4a77-a281-4985832fb815",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 880,
      y: 4760,
    },
    name: "BattleField",
    id: "772ee759-3ea5-4360-8efc-683a546bca83",
    bottom: "48deb6fd-4088-4297-b6c6-907db8d87494",
    left: "e4109724-4dc7-4282-a862-255227af69de",
    top: "d5764ade-8ef7-4503-9d70-5dfe9b5d5a7f",
    edges: [
      "ae3ee9dd-8e31-4ad8-a3dd-ea2f442747d4",
      "3cbabb80-650b-43f2-9349-ec1aed83ec70",
      "7b39eb40-4a3d-4453-93e9-aaca5779c8e8",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 600,
      y: 4760,
    },
    name: "RedTreasureField",
    id: "e4109724-4dc7-4282-a862-255227af69de",
    right: "772ee759-3ea5-4360-8efc-683a546bca83",
    bottom: "2ca9ad8a-bf92-42d9-ac0d-181686f33759",
    left: "f095c49c-633d-4c79-9830-7bf5bc8738e2",
    edges: [
      "3cbabb80-650b-43f2-9349-ec1aed83ec70",
      "6420ae0a-60ca-455e-ab21-ba5599367f25",
      "970b70c5-1da4-47cb-ac4c-8c2dc87b463b",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 600,
      y: 5220,
    },
    name: "BattleField",
    id: "2ca9ad8a-bf92-42d9-ac0d-181686f33759",
    top: "e4109724-4dc7-4282-a862-255227af69de",
    right: "f9c0cd50-23b0-483c-8cea-5a9dcd7c8778",
    edges: [
      "6420ae0a-60ca-455e-ab21-ba5599367f25",
      "f0076751-71fc-4221-9548-05c1e5943e94",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3200,
      y: 5460,
    },
    name: "TreasureField",
    id: "6e43fdd4-1e62-4992-b670-b6b9bf6265d5",
    top: "f510b0c1-3f03-476c-903c-31df4b5e6d09",
    left: "e975f3f8-a047-436b-8308-603035a9de32",
    edges: [
      "7964cbd2-833a-463f-984c-eac791a479bb",
      "a833c84e-7ddc-4ae5-aa98-63000d4337b9",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2960,
      y: 5460,
    },
    name: "BattleField",
    id: "e975f3f8-a047-436b-8308-603035a9de32",
    right: "6e43fdd4-1e62-4992-b670-b6b9bf6265d5",
    left: "27040330-5967-41c7-aa6e-2aa29983e2aa",
    bottom: "1a6ab201-5f6a-44c7-aca3-e93ad1042f02",
    edges: [
      "a833c84e-7ddc-4ae5-aa98-63000d4337b9",
      "ab6f447f-2b4e-47f9-80ef-48ea1181d47e",
      "764709f3-5175-4c2e-910a-4a70a37d7a52",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2740,
      y: 5460,
    },
    name: "BattleField",
    id: "27040330-5967-41c7-aa6e-2aa29983e2aa",
    top: "dad5a2b6-8c70-4f6c-bd5e-2eb5f1a4829d",
    right: "e975f3f8-a047-436b-8308-603035a9de32",
    edges: [
      "b0448cc3-0a11-4d3a-bd21-9c3eaf51060a",
      "ab6f447f-2b4e-47f9-80ef-48ea1181d47e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 2780,
      y: 6320,
    },
    name: "MagicBookField",
    id: "1a6ab201-5f6a-44c7-aca3-e93ad1042f02",
    top: "e975f3f8-a047-436b-8308-603035a9de32",
    right: "6a3347ff-3caa-4323-b3ca-a297dfc5731a",
    edges: [
      "764709f3-5175-4c2e-910a-4a70a37d7a52",
      "d6c8c3a2-38f8-424b-a34d-ebc37d7746e3",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3060,
      y: 6280,
    },
    name: "BattleField",
    id: "6a3347ff-3caa-4323-b3ca-a297dfc5731a",
    left: "1a6ab201-5f6a-44c7-aca3-e93ad1042f02",
    right: "b2bf7c89-ee9f-4b41-a690-09e4697d2a2f",
    edges: [
      "d6c8c3a2-38f8-424b-a34d-ebc37d7746e3",
      "81588604-5675-4864-8df4-d84237f8ce28",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3300,
      y: 6320,
    },
    name: "BattleField",
    id: "b2bf7c89-ee9f-4b41-a690-09e4697d2a2f",
    left: "6a3347ff-3caa-4323-b3ca-a297dfc5731a",
    right: "86e5b447-323e-4917-8caf-5dd110f37ea2",
    edges: [
      "81588604-5675-4864-8df4-d84237f8ce28",
      "05fb98eb-6e48-455b-8ff5-bf4f3112a57d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 3520,
      y: 6280,
    },
    name: "TreasureField",
    id: "86e5b447-323e-4917-8caf-5dd110f37ea2",
    left: "b2bf7c89-ee9f-4b41-a690-09e4697d2a2f",
    right: "3ab457c1-64f7-47b7-8781-db379258876e",
    edges: [
      "05fb98eb-6e48-455b-8ff5-bf4f3112a57d",
      "ad828d19-d34c-418c-969e-ba671caf0461",
      "0208bdec-8eb1-4cd6-85db-09e5fa4ab17e",
    ],
    bottom: "da5baf39-82c0-4678-a693-b2604ac9e426",
    area: "Africa",
  },
  {
    position: {
      x: 3740,
      y: 6320,
    },
    name: "BattleField",
    id: "3ab457c1-64f7-47b7-8781-db379258876e",
    left: "86e5b447-323e-4917-8caf-5dd110f37ea2",
    right: "e5d42ca3-419d-4022-9481-943cf3ee57ef",
    edges: [
      "ad828d19-d34c-418c-969e-ba671caf0461",
      "fb347204-b98c-400f-a3fd-a97b27d4c1a5",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 4000,
      y: 6280,
    },
    name: "BattleField",
    id: "e5d42ca3-419d-4022-9481-943cf3ee57ef",
    left: "3ab457c1-64f7-47b7-8781-db379258876e",
    top: "e1e1f6b5-a506-4426-827c-0f7e1078b983",
    edges: [
      "fb347204-b98c-400f-a3fd-a97b27d4c1a5",
      "5769c637-4f56-4571-96db-f86c476b3fb8",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 4000,
      y: 6080,
    },
    name: "BattleField",
    id: "e1e1f6b5-a506-4426-827c-0f7e1078b983",
    bottom: "e5d42ca3-419d-4022-9481-943cf3ee57ef",
    right: "b6bf2e1e-b20f-4dd7-a326-8f2169c0f62f",
    edges: [
      "5769c637-4f56-4571-96db-f86c476b3fb8",
      "03e2721b-a48f-4970-90dd-a95c48e9eea6",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 4200,
      y: 6060,
    },
    name: "TreasureField",
    id: "b6bf2e1e-b20f-4dd7-a326-8f2169c0f62f",
    left: "e1e1f6b5-a506-4426-827c-0f7e1078b983",
    right: "870ba194-5e1e-4669-8fa4-a9635b22b6a8",
    edges: [
      "03e2721b-a48f-4970-90dd-a95c48e9eea6",
      "180c9ae7-404c-4631-a76c-a2b13fd1ea5b",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 860,
      y: 5420,
    },
    name: "BattleField",
    id: "7adbf945-97fb-496f-a5cd-4315d80b18c3",
    top: "f9c0cd50-23b0-483c-8cea-5a9dcd7c8778",
    bottom: "3399c82c-b335-400c-9487-9517f23cc970",
    edges: [
      "d2d83a07-4858-4a77-a281-4985832fb815",
      "6ec0fd6f-f28e-4d92-83d9-916957895d4b",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 860,
      y: 5620,
    },
    name: "TreasureField",
    id: "3399c82c-b335-400c-9487-9517f23cc970",
    top: "7adbf945-97fb-496f-a5cd-4315d80b18c3",
    left: "4579de61-8c38-4dd8-9575-61672e3bcdd0",
    edges: [
      "6ec0fd6f-f28e-4d92-83d9-916957895d4b",
      "a23fc237-dc0a-4b5d-9b91-2b45016cdc30",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 520,
      y: 5660,
    },
    name: "BattleField",
    id: "4579de61-8c38-4dd8-9575-61672e3bcdd0",
    right: "3399c82c-b335-400c-9487-9517f23cc970",
    left: "3de50d91-6a5f-4d03-a686-2795435bcf44",
    edges: [
      "a23fc237-dc0a-4b5d-9b91-2b45016cdc30",
      "8eafe502-99b9-4994-a8c7-80c641dd6f34",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 180,
      y: 5600,
    },
    name: "TreasureField",
    id: "3de50d91-6a5f-4d03-a686-2795435bcf44",
    right: "4579de61-8c38-4dd8-9575-61672e3bcdd0",
    top: "c09ced90-39fd-42f4-9479-951f566ef281",
    edges: [
      "8eafe502-99b9-4994-a8c7-80c641dd6f34",
      "e88b9d62-272e-4f72-a950-f42096df13b7",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 380,
      y: 4760,
    },
    name: "BattleField",
    id: "f095c49c-633d-4c79-9830-7bf5bc8738e2",
    right: "e4109724-4dc7-4282-a862-255227af69de",
    top: "066a723a-04fa-46a1-a832-c6adca71d721",
    edges: [
      "970b70c5-1da4-47cb-ac4c-8c2dc87b463b",
      "9c3eae14-bdad-4cc8-af94-717b498723c5",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 240,
      y: 5360,
    },
    name: "BattleField",
    id: "c09ced90-39fd-42f4-9479-951f566ef281",
    bottom: "3de50d91-6a5f-4d03-a686-2795435bcf44",
    top: "8597b263-ac74-45e2-aa87-ccd16bdc9f3a",
    edges: [
      "e88b9d62-272e-4f72-a950-f42096df13b7",
      "3cbf0e0e-5cd8-4fdd-b9ec-e582db986739",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 200,
      y: 5140,
    },
    name: "RedTreasureField",
    id: "8597b263-ac74-45e2-aa87-ccd16bdc9f3a",
    bottom: "c09ced90-39fd-42f4-9479-951f566ef281",
    top: "4af0b208-a571-4ea5-a219-75dafcf97efb",
    edges: [
      "3cbf0e0e-5cd8-4fdd-b9ec-e582db986739",
      "7cf02baa-23bc-4d7d-b4c6-8448a5a2a55a",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 220,
      y: 4880,
    },
    name: "TreasureField",
    id: "4af0b208-a571-4ea5-a219-75dafcf97efb",
    bottom: "8597b263-ac74-45e2-aa87-ccd16bdc9f3a",
    left: "44c8cc02-116b-4ca1-bd8d-9649ea0a1384",
    edges: [
      "7cf02baa-23bc-4d7d-b4c6-8448a5a2a55a",
      "7d68ba52-5884-4803-b9ee-f630bfcf07b0",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 20,
      y: 4880,
    },
    name: "BattleField",
    id: "44c8cc02-116b-4ca1-bd8d-9649ea0a1384",
    right: "4af0b208-a571-4ea5-a219-75dafcf97efb",
    top: "8156f96c-e527-4ce0-b804-5feba44eeb77",
    edges: [
      "7d68ba52-5884-4803-b9ee-f630bfcf07b0",
      "9919e7b0-bb8e-4c12-9207-15b73e3fffb9",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 20,
      y: 4660,
    },
    name: "CollectMoneyField",
    id: "8156f96c-e527-4ce0-b804-5feba44eeb77",
    bottom: "44c8cc02-116b-4ca1-bd8d-9649ea0a1384",
    top: "fc6f91b3-86df-4d3c-8293-965db51608da",
    edges: [
      "9919e7b0-bb8e-4c12-9207-15b73e3fffb9",
      "d2a5e2ff-694f-446a-ac6f-47e10216c5e4",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 20,
      y: 4440,
    },
    name: "MagicBookField",
    id: "fc6f91b3-86df-4d3c-8293-965db51608da",
    bottom: "8156f96c-e527-4ce0-b804-5feba44eeb77",
    top: "1450a94d-a56a-4675-8af6-ec8ca0fbb198",
    edges: [
      "d2a5e2ff-694f-446a-ac6f-47e10216c5e4",
      "dc211991-901d-482c-85d6-0975c3459246",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 20,
      y: 4140,
    },
    name: "CollectMoneyField",
    id: "1450a94d-a56a-4675-8af6-ec8ca0fbb198",
    bottom: "fc6f91b3-86df-4d3c-8293-965db51608da",
    right: "0100c7eb-c4d0-4a3c-8228-880a208dca9e",
    left: "f541e6a5-6e08-4e4a-bd87-232c94390306",
    edges: [
      "dc211991-901d-482c-85d6-0975c3459246",
      "8ea5677e-36f8-413e-bf1e-a151d3144c0c",
      "3b0ceb49-59ca-4d5c-b3f8-1cfabb5ece12",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 380,
      y: 4580,
    },
    name: "MagicBookField",
    id: "066a723a-04fa-46a1-a832-c6adca71d721",
    bottom: "f095c49c-633d-4c79-9830-7bf5bc8738e2",
    top: "445dcc14-0d8c-47ed-a61c-ee1c06022494",
    edges: [
      "9c3eae14-bdad-4cc8-af94-717b498723c5",
      "ec48b9d9-90f8-452b-b976-f095d682fe9e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 380,
      y: 4420,
    },
    name: "BattleField",
    id: "445dcc14-0d8c-47ed-a61c-ee1c06022494",
    bottom: "066a723a-04fa-46a1-a832-c6adca71d721",
    top: "0e280b81-dca6-448f-b1f6-56adb0fb3dc5",
    edges: [
      "ec48b9d9-90f8-452b-b976-f095d682fe9e",
      "3e2cd172-d7fc-42c3-bb27-d8f5bb03a7b7",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 380,
      y: 4260,
    },
    name: "BattleField",
    id: "0e280b81-dca6-448f-b1f6-56adb0fb3dc5",
    bottom: "445dcc14-0d8c-47ed-a61c-ee1c06022494",
    right: "3c44cafb-fc10-49da-9340-09d5b77debf8",
    edges: [
      "3e2cd172-d7fc-42c3-bb27-d8f5bb03a7b7",
      "0311fe5d-9aa7-49e6-88d5-30ae182272f2",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 600,
      y: 4260,
    },
    name: "BattleField",
    id: "3c44cafb-fc10-49da-9340-09d5b77debf8",
    left: "0e280b81-dca6-448f-b1f6-56adb0fb3dc5",
    top: "5212c4fe-1123-428c-ad6e-1f89d78a6a64",
    edges: [
      "0311fe5d-9aa7-49e6-88d5-30ae182272f2",
      "1d54e036-d3fb-4c7b-96c5-42ede078532c",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 220,
      y: 4140,
    },
    name: "BattleField",
    id: "0100c7eb-c4d0-4a3c-8228-880a208dca9e",
    left: "1450a94d-a56a-4675-8af6-ec8ca0fbb198",
    right: "a70ce34f-cff1-4610-ab93-ce1fcc6b2c12",
    edges: [
      "8ea5677e-36f8-413e-bf1e-a151d3144c0c",
      "668c95d7-8236-48be-a74a-b993223feb38",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 400,
      y: 4140,
    },
    name: "TreasureField",
    id: "a70ce34f-cff1-4610-ab93-ce1fcc6b2c12",
    left: "0100c7eb-c4d0-4a3c-8228-880a208dca9e",
    top: "b27f79b2-a156-4600-aa68-5f9f89c41778",
    edges: [
      "668c95d7-8236-48be-a74a-b993223feb38",
      "a673acef-b9c9-4f9c-bdfe-bcbfe3a1f1a2",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 880,
      y: 4580,
    },
    name: "BattleField",
    id: "d5764ade-8ef7-4503-9d70-5dfe9b5d5a7f",
    bottom: "772ee759-3ea5-4360-8efc-683a546bca83",
    top: "dcd6a13f-8160-4467-8b9c-70f8c18c0398",
    edges: [
      "7b39eb40-4a3d-4453-93e9-aaca5779c8e8",
      "963b7939-d833-4120-a21d-a2fcfa1e2676",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 880,
      y: 4440,
    },
    name: "TreasureField",
    id: "dcd6a13f-8160-4467-8b9c-70f8c18c0398",
    bottom: "d5764ade-8ef7-4503-9d70-5dfe9b5d5a7f",
    top: "6b58aa37-9f9c-4926-ba4b-33423184068d",
    edges: [
      "963b7939-d833-4120-a21d-a2fcfa1e2676",
      "9a9073e0-c717-42f6-a364-6ee0703315c5",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 620,
      y: 4080,
    },
    name: "MagicBookField",
    id: "5212c4fe-1123-428c-ad6e-1f89d78a6a64",
    bottom: "3c44cafb-fc10-49da-9340-09d5b77debf8",
    right: "f828915f-efd7-4a0e-8ea3-73571d2a33fe",
    edges: [
      "1d54e036-d3fb-4c7b-96c5-42ede078532c",
      "c6980817-bb0b-42dc-b4f6-dd0235f89177",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 880,
      y: 4080,
    },
    name: "BattleField",
    id: "f828915f-efd7-4a0e-8ea3-73571d2a33fe",
    left: "5212c4fe-1123-428c-ad6e-1f89d78a6a64",
    bottom: "6b58aa37-9f9c-4926-ba4b-33423184068d",
    top: "310ba9dc-a0b2-4440-b76c-ae97e402d157",
    edges: [
      "c6980817-bb0b-42dc-b4f6-dd0235f89177",
      "0e3493e7-5dab-4fab-9178-f8b07dc96251",
      "eb129be2-60bc-427f-8c77-95d468571c33",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 880,
      y: 4260,
    },
    name: "BattleField",
    id: "6b58aa37-9f9c-4926-ba4b-33423184068d",
    bottom: "dcd6a13f-8160-4467-8b9c-70f8c18c0398",
    top: "f828915f-efd7-4a0e-8ea3-73571d2a33fe",
    right: "5596dd5b-0a4d-4071-b43a-8ad099238a30",
    edges: [
      "9a9073e0-c717-42f6-a364-6ee0703315c5",
      "0e3493e7-5dab-4fab-9178-f8b07dc96251",
      "e20ee87f-722d-4c7f-b43d-47f8f430ee29",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1080,
      y: 4260,
    },
    name: "BattleField",
    id: "5596dd5b-0a4d-4071-b43a-8ad099238a30",
    left: "6b58aa37-9f9c-4926-ba4b-33423184068d",
    edges: [
      "e20ee87f-722d-4c7f-b43d-47f8f430ee29",
      "111d8bc9-8479-4acd-9f03-19ca16f8eed5",
    ],
    top: "dbd77b59-f9b2-424a-96df-b1b5d5a28ee4",
    area: "Africa",
  },
  {
    position: {
      x: 880,
      y: 3900,
    },
    name: "TreasureField",
    id: "310ba9dc-a0b2-4440-b76c-ae97e402d157",
    bottom: "f828915f-efd7-4a0e-8ea3-73571d2a33fe",
    right: "dbd77b59-f9b2-424a-96df-b1b5d5a28ee4",
    edges: [
      "eb129be2-60bc-427f-8c77-95d468571c33",
      "8eb77137-c869-4b8d-a42e-e682a0ef6696",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 1080,
      y: 3900,
    },
    name: "BattleField",
    id: "dbd77b59-f9b2-424a-96df-b1b5d5a28ee4",
    left: "310ba9dc-a0b2-4440-b76c-ae97e402d157",
    top: "0df27500-7cce-4cdf-92aa-63835279b175",
    edges: [
      "8eb77137-c869-4b8d-a42e-e682a0ef6696",
      "111d8bc9-8479-4acd-9f03-19ca16f8eed5",
      "fa065945-09b3-4603-be64-52463c6150d8",
    ],
    bottom: "5596dd5b-0a4d-4071-b43a-8ad099238a30",
    area: "Africa",
  },
  {
    position: {
      x: 1080,
      y: 3680,
    },
    name: "WeaponStoreField",
    id: "0df27500-7cce-4cdf-92aa-63835279b175",
    bottom: "dbd77b59-f9b2-424a-96df-b1b5d5a28ee4",
    edges: ["fa065945-09b3-4603-be64-52463c6150d8"],
    area: "Africa",
  },
  {
    position: {
      x: 400,
      y: 3940,
    },
    name: "BattleField",
    id: "b27f79b2-a156-4600-aa68-5f9f89c41778",
    bottom: "a70ce34f-cff1-4610-ab93-ce1fcc6b2c12",
    top: "5066cdcb-4082-4b2d-9085-0f61e54a7568",
    edges: [
      "a673acef-b9c9-4f9c-bdfe-bcbfe3a1f1a2",
      "cb8c88bc-ff15-4c08-abb6-9fd076ee042e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 400,
      y: 3760,
    },
    name: "VillageField",
    id: "5066cdcb-4082-4b2d-9085-0f61e54a7568",
    bottom: "b27f79b2-a156-4600-aa68-5f9f89c41778",
    right: "3e1a75c6-42c8-4d17-a7a0-865fcde5fd03",
    left: "15ab35aa-85d1-45fd-b8ec-d84a627d27ee",
    edges: [
      "cb8c88bc-ff15-4c08-abb6-9fd076ee042e",
      "af7eb313-b9d1-4291-a80c-bfc4a8ef31e4",
      "80f5684f-5872-4218-a1c6-075a31b4729f",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 640,
      y: 3720,
    },
    name: "BattleField",
    id: "3e1a75c6-42c8-4d17-a7a0-865fcde5fd03",
    left: "5066cdcb-4082-4b2d-9085-0f61e54a7568",
    right: "08857627-5a03-435c-9484-8367c9e71863",
    edges: [
      "af7eb313-b9d1-4291-a80c-bfc4a8ef31e4",
      "d83b1dcf-7e08-4b84-9e3e-edf87f732805",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 880,
      y: 3680,
    },
    name: "BattleField",
    id: "08857627-5a03-435c-9484-8367c9e71863",
    left: "3e1a75c6-42c8-4d17-a7a0-865fcde5fd03",
    top: "950ad97b-5e35-487a-8aac-c67eb37eeb19",
    edges: [
      "d83b1dcf-7e08-4b84-9e3e-edf87f732805",
      "32054d0d-0fd6-4e11-b211-9bebcb48d68c",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 200,
      y: 3760,
    },
    name: "BattleField",
    id: "15ab35aa-85d1-45fd-b8ec-d84a627d27ee",
    right: "5066cdcb-4082-4b2d-9085-0f61e54a7568",
    top: "5657cdc5-c057-49c7-bc06-ca16304c5afe",
    edges: [
      "80f5684f-5872-4218-a1c6-075a31b4729f",
      "5b62a484-0878-43d4-b947-e16d33253461",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -320,
      y: 4080,
    },
    name: "BattleField",
    id: "f541e6a5-6e08-4e4a-bd87-232c94390306",
    right: "1450a94d-a56a-4675-8af6-ec8ca0fbb198",
    left: "275ffa79-a769-42a6-8fe6-d501c3048c9f",
    edges: [
      "3b0ceb49-59ca-4d5c-b3f8-1cfabb5ece12",
      "f234119e-2325-4513-8f2a-9c5bc370a080",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -540,
      y: 4140,
    },
    name: "TreasureField",
    id: "275ffa79-a769-42a6-8fe6-d501c3048c9f",
    right: "f541e6a5-6e08-4e4a-bd87-232c94390306",
    top: "c3649d5b-ffb3-4458-9b83-b0ecbef883b3",
    edges: [
      "f234119e-2325-4513-8f2a-9c5bc370a080",
      "58c2c300-42d9-4649-83ed-b45e5861bf14",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -540,
      y: 3880,
    },
    name: "CollectMoneyField",
    id: "c3649d5b-ffb3-4458-9b83-b0ecbef883b3",
    bottom: "275ffa79-a769-42a6-8fe6-d501c3048c9f",
    top: "e8c3d7e0-9e55-41fb-8ca6-f08fb6c5966d",
    edges: [
      "58c2c300-42d9-4649-83ed-b45e5861bf14",
      "6d7597cd-db43-4588-8db4-7b51c95af17d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -520,
      y: 3620,
    },
    name: "BattleField",
    id: "e8c3d7e0-9e55-41fb-8ca6-f08fb6c5966d",
    bottom: "c3649d5b-ffb3-4458-9b83-b0ecbef883b3",
    top: "917e0da2-335d-4904-ac3e-7106b9c35a5a",
    edges: [
      "6d7597cd-db43-4588-8db4-7b51c95af17d",
      "1947ab3b-003a-49c2-8551-abd0117f5a78",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -540,
      y: 3380,
    },
    name: "MagicBookField",
    id: "917e0da2-335d-4904-ac3e-7106b9c35a5a",
    bottom: "e8c3d7e0-9e55-41fb-8ca6-f08fb6c5966d",
    top: "e2788169-0475-463a-85af-28b6a5819ac5",
    edges: [
      "1947ab3b-003a-49c2-8551-abd0117f5a78",
      "a6b3fa9c-0921-4741-bd22-85b60fe8d6d7",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -520,
      y: 3100,
    },
    name: "TreasureField",
    id: "e2788169-0475-463a-85af-28b6a5819ac5",
    bottom: "917e0da2-335d-4904-ac3e-7106b9c35a5a",
    right: "1aeeaf02-4fd7-4f21-af71-fdec195ae08f",
    edges: [
      "a6b3fa9c-0921-4741-bd22-85b60fe8d6d7",
      "1fc74699-2389-460d-be39-1e23df174a8e",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -360,
      y: 3100,
    },
    name: "BattleField",
    id: "1aeeaf02-4fd7-4f21-af71-fdec195ae08f",
    left: "e2788169-0475-463a-85af-28b6a5819ac5",
    right: "ca4ffc14-919f-4336-a19a-152166fb15bb",
    edges: [
      "1fc74699-2389-460d-be39-1e23df174a8e",
      "31e024dd-7dd9-4faa-9ce4-cdc216c0828c",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -200,
      y: 3100,
    },
    name: "BattleField",
    id: "ca4ffc14-919f-4336-a19a-152166fb15bb",
    left: "1aeeaf02-4fd7-4f21-af71-fdec195ae08f",
    right: "452f376f-5c2a-4db9-92f6-71d0d2de98e4",
    edges: [
      "31e024dd-7dd9-4faa-9ce4-cdc216c0828c",
      "1415c00d-c570-49f3-bdf0-8409410588ee",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -20,
      y: 3100,
    },
    name: "TreasureField",
    id: "452f376f-5c2a-4db9-92f6-71d0d2de98e4",
    left: "ca4ffc14-919f-4336-a19a-152166fb15bb",
    right: "bda6adb2-e28e-4687-a714-7ad20ab4f210",
    bottom: "df919318-6a00-4255-bfec-1091f311f4ca",
    edges: [
      "1415c00d-c570-49f3-bdf0-8409410588ee",
      "e5c3c917-5733-40ec-ac2c-2f5c3a07f65a",
      "27430f9a-dae0-41b7-a311-be935d0d9d9d",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 200,
      y: 2820,
    },
    name: "BattleField",
    id: "39f7989f-7dcb-451e-88e7-5ad2804d188c",
    top: "9b163651-e5b6-4ba4-986f-589a4792f430",
    bottom: "0c120b5a-2661-4916-86e8-228c5e7dbc2a",
    edges: [
      "2cdd2473-de40-4844-a087-d538e326d15d",
      "389a3860-bc55-4671-a001-63f34b7d9d2c",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 200,
      y: 2960,
    },
    name: "RedTreasureField",
    id: "0c120b5a-2661-4916-86e8-228c5e7dbc2a",
    top: "39f7989f-7dcb-451e-88e7-5ad2804d188c",
    bottom: "bda6adb2-e28e-4687-a714-7ad20ab4f210",
    edges: [
      "389a3860-bc55-4671-a001-63f34b7d9d2c",
      "1c8ab9f4-dbf6-43a9-9651-a49829b4d686",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 200,
      y: 3100,
    },
    name: "BattleField",
    id: "bda6adb2-e28e-4687-a714-7ad20ab4f210",
    top: "0c120b5a-2661-4916-86e8-228c5e7dbc2a",
    left: "452f376f-5c2a-4db9-92f6-71d0d2de98e4",
    bottom: "9ebf2834-1559-463a-b993-2dd5a37e2f82",
    edges: [
      "1c8ab9f4-dbf6-43a9-9651-a49829b4d686",
      "e5c3c917-5733-40ec-ac2c-2f5c3a07f65a",
      "7439b241-3cb7-4aa0-b774-75d0d93bc569",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 200,
      y: 3240,
    },
    name: "BattleField",
    id: "9ebf2834-1559-463a-b993-2dd5a37e2f82",
    top: "bda6adb2-e28e-4687-a714-7ad20ab4f210",
    bottom: "3709d97b-a4db-4849-8ade-82a482eac568",
    edges: [
      "7439b241-3cb7-4aa0-b774-75d0d93bc569",
      "f641992e-dd11-4fb5-acd4-5f68670478f3",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 200,
      y: 3380,
    },
    name: "TreasureField",
    id: "3709d97b-a4db-4849-8ade-82a482eac568",
    top: "9ebf2834-1559-463a-b993-2dd5a37e2f82",
    left: "df919318-6a00-4255-bfec-1091f311f4ca",
    bottom: "5657cdc5-c057-49c7-bc06-ca16304c5afe",
    edges: [
      "f641992e-dd11-4fb5-acd4-5f68670478f3",
      "2865ded3-2cbd-46d9-bce4-0df822ac6381",
      "b0b693b6-3dbd-4762-bca3-1790a5d87edd",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -20,
      y: 3380,
    },
    name: "BattleField",
    id: "df919318-6a00-4255-bfec-1091f311f4ca",
    top: "452f376f-5c2a-4db9-92f6-71d0d2de98e4",
    right: "3709d97b-a4db-4849-8ade-82a482eac568",
    left: "8f2fd2a1-a336-4c46-bf4a-2e5d82254928",
    edges: [
      "27430f9a-dae0-41b7-a311-be935d0d9d9d",
      "2865ded3-2cbd-46d9-bce4-0df822ac6381",
      "5f0ccd89-848b-4793-8941-9fa3314d9c09",
    ],
    area: "Africa",
  },
  {
    position: {
      x: 200,
      y: 3580,
    },
    name: "BattleField",
    id: "5657cdc5-c057-49c7-bc06-ca16304c5afe",
    top: "3709d97b-a4db-4849-8ade-82a482eac568",
    bottom: "15ab35aa-85d1-45fd-b8ec-d84a627d27ee",
    edges: [
      "b0b693b6-3dbd-4762-bca3-1790a5d87edd",
      "5b62a484-0878-43d4-b947-e16d33253461",
    ],
    area: "Africa",
  },
  {
    position: {
      x: -280,
      y: 3380,
    },
    name: "WorldTransferField",
    id: "8f2fd2a1-a336-4c46-bf4a-2e5d82254928",
    right: "df919318-6a00-4255-bfec-1091f311f4ca",
    edges: ["5f0ccd89-848b-4793-8941-9fa3314d9c09"],
    area: "Africa",
  },
  {
    id: "cce4c524-0cee-4d29-b998-04377768c8da",
    name: "BattleField",
    position: {
      x: 2160,
      y: 2460,
    },
    edges: [
      "727ee2b1-ffa8-45f6-ab34-4257146c068e",
      "bd58658e-6214-4418-b6d0-18a1d572d5f8",
      "476314b7-555a-4ad0-8e20-c2a08e36a742",
    ],
    left: "aaeb9d25-3961-4529-b9e3-fd6b92f455c2",
    bottom: "2877e24b-a5aa-4610-a0cb-afca864de892",
    area: "Africa",
  },
  {
    id: "648aa064-fb51-4bbf-8b4c-f8f50e6e82f0",
    name: "BattleField",
    position: {
      x: 2720,
      y: 2460,
    },
    edges: [
      "c6dc6dfa-9e8d-4022-8292-00149771c388",
      "1294098e-7868-460a-97a8-450d62aac954",
      "78c667de-1d76-4f1a-9a4c-6c056adb78c1",
    ],
    right: "68d7fcd7-e960-4514-9603-f271284086d1",
    top: "16dc9cb2-c319-48ab-89b2-5ff9a09e7594",
    left: "969e7397-85e5-48f6-a40d-456bca2bcbbb",
    area: "Africa",
  },
  {
    id: "969e7397-85e5-48f6-a40d-456bca2bcbbb",
    name: "CaveField",
    position: {
      x: 2440,
      y: 2460,
    },
    edges: [
      "78c667de-1d76-4f1a-9a4c-6c056adb78c1",
      "476314b7-555a-4ad0-8e20-c2a08e36a742",
    ],
    right: "648aa064-fb51-4bbf-8b4c-f8f50e6e82f0",
    left: "cce4c524-0cee-4d29-b998-04377768c8da",
    area: "Africa",
  },
];
const arcticVertices: Vertex[] = [
  {
    id: "711f14ab-2391-476a-8b5a-55551c7cf1bc",
    name: "BattleField",
    position: {
      x: 12260,
      y: 1160,
    },
    edges: [
      "a32e344a-0c4f-4210-81aa-b30a2f93e37c",
      "e550dc34-bee3-4fd6-8df3-baac7ee3ef2d",
    ],
    bottom: "8a5e6dfb-f29f-4790-bdad-e6d201d464b5",
    top: "821ee1e0-ea44-40f8-be0d-b7d2a6881ef2",
    area: "Arctic",
  },
  {
    id: "821ee1e0-ea44-40f8-be0d-b7d2a6881ef2",
    name: "BattleField",
    position: {
      x: 12320,
      y: 700,
    },
    edges: [
      "e550dc34-bee3-4fd6-8df3-baac7ee3ef2d",
      "225ff668-2d81-426e-ba13-c7c46f02223e",
    ],
    bottom: "711f14ab-2391-476a-8b5a-55551c7cf1bc",
    left: "70742c92-ea8b-4669-95c0-5a33c393b072",
    area: "Arctic",
  },
  {
    id: "70742c92-ea8b-4669-95c0-5a33c393b072",
    name: "TreasureField",
    position: {
      x: 12020,
      y: 680,
    },
    edges: [
      "225ff668-2d81-426e-ba13-c7c46f02223e",
      "21e913ef-2131-4522-a2e2-65a5378b2c33",
    ],
    right: "821ee1e0-ea44-40f8-be0d-b7d2a6881ef2",
    top: "46b65691-10e5-48ee-a3d8-7eadd022d5c4",
    area: "Arctic",
  },
  {
    id: "46b65691-10e5-48ee-a3d8-7eadd022d5c4",
    name: "RedTreasureField",
    position: {
      x: 11940,
      y: 340,
    },
    edges: [
      "21e913ef-2131-4522-a2e2-65a5378b2c33",
      "1b2667e3-d5aa-4e4e-a3ea-d1d3fc621e22",
    ],
    bottom: "70742c92-ea8b-4669-95c0-5a33c393b072",
    top: "ecc6b82f-3a20-4d5f-bb3f-c88708838371",
    area: "Arctic",
  },
  {
    id: "ecc6b82f-3a20-4d5f-bb3f-c88708838371",
    name: "BattleField",
    position: {
      x: 12020,
      y: 0,
    },
    edges: [
      "1b2667e3-d5aa-4e4e-a3ea-d1d3fc621e22",
      "bea8dce4-995c-4743-9e3c-35606a5d1b4c",
    ],
    bottom: "46b65691-10e5-48ee-a3d8-7eadd022d5c4",
    left: "46c738be-5dd1-48f3-95c3-354f82712adf",
    area: "Arctic",
  },
  {
    id: "46c738be-5dd1-48f3-95c3-354f82712adf",
    name: "TreasureField",
    position: {
      x: 11680,
      y: -40,
    },
    edges: [
      "bea8dce4-995c-4743-9e3c-35606a5d1b4c",
      "19721082-9368-46ca-9c03-73f376fd4e20",
    ],
    right: "ecc6b82f-3a20-4d5f-bb3f-c88708838371",
    top: "0d99633a-bbf7-486d-b9a5-c98cdb5ed91b",
    area: "Arctic",
  },
  {
    id: "0d99633a-bbf7-486d-b9a5-c98cdb5ed91b",
    name: "RedTreasureField",
    position: {
      x: 11760,
      y: -360,
    },
    edges: [
      "19721082-9368-46ca-9c03-73f376fd4e20",
      "e2bed64b-80d0-44ab-a192-3a7becfcbde3",
    ],
    bottom: "46c738be-5dd1-48f3-95c3-354f82712adf",
    left: "c12b2b9d-1fee-4881-9bb5-6a840973cc51",
    area: "Arctic",
  },
  {
    id: "c12b2b9d-1fee-4881-9bb5-6a840973cc51",
    name: "BattleField",
    position: {
      x: 11420,
      y: -380,
    },
    edges: [
      "e2bed64b-80d0-44ab-a192-3a7becfcbde3",
      "f1f0eafa-0d7a-41e2-a659-c3384d87a5d4",
      "8ef2dc4a-3f06-4222-ba8f-74d3456fbdb3",
    ],
    right: "0d99633a-bbf7-486d-b9a5-c98cdb5ed91b",
    top: "e3a8a0bb-892f-4703-b8e4-77531ba4a5db",
    left: "60c21590-262f-47aa-bf46-f9bd36effc00",
    area: "Arctic",
  },
  {
    id: "e3a8a0bb-892f-4703-b8e4-77531ba4a5db",
    name: "WorldTransferField",
    position: {
      x: 11420,
      y: -660,
    },
    edges: ["f1f0eafa-0d7a-41e2-a659-c3384d87a5d4"],
    bottom: "c12b2b9d-1fee-4881-9bb5-6a840973cc51",
    area: "Arctic",
  },
  {
    id: "60c21590-262f-47aa-bf46-f9bd36effc00",
    name: "BattleField",
    position: {
      x: 11060,
      y: -340,
    },
    edges: [
      "8ef2dc4a-3f06-4222-ba8f-74d3456fbdb3",
      "1b30bb45-dc35-4ca8-87e3-d88df230414a",
    ],
    right: "c12b2b9d-1fee-4881-9bb5-6a840973cc51",
    left: "6b13f21f-5a2c-4453-bad8-f7714138be95",
    area: "Arctic",
  },
  {
    id: "6b13f21f-5a2c-4453-bad8-f7714138be95",
    name: "MagicBookField",
    position: {
      x: 10720,
      y: -400,
    },
    edges: [
      "1b30bb45-dc35-4ca8-87e3-d88df230414a",
      "a477f3b0-4ca3-47f1-808e-70a29013af50",
    ],
    right: "60c21590-262f-47aa-bf46-f9bd36effc00",
    left: "59f6d795-ba7c-4936-99fb-1a45084c9bd6",
    area: "Arctic",
  },
  {
    id: "59f6d795-ba7c-4936-99fb-1a45084c9bd6",
    name: "TreasureField",
    position: {
      x: 10400,
      y: -360,
    },
    edges: [
      "a477f3b0-4ca3-47f1-808e-70a29013af50",
      "ff900657-9dec-4ffe-9c5e-549269df2576",
    ],
    right: "6b13f21f-5a2c-4453-bad8-f7714138be95",
    top: "7d7e3fae-a2f5-4d97-a8df-21767ce0f526",
    area: "Arctic",
  },
  {
    id: "7d7e3fae-a2f5-4d97-a8df-21767ce0f526",
    name: "BattleField",
    position: {
      x: 10340,
      y: -660,
    },
    edges: [
      "ff900657-9dec-4ffe-9c5e-549269df2576",
      "9498ca06-7c25-4362-85d8-d3fa6358a04e",
    ],
    bottom: "59f6d795-ba7c-4936-99fb-1a45084c9bd6",
    top: "3ba4e09d-b31f-4685-bdbf-6bf816afb10c",
    area: "Arctic",
  },
  {
    id: "3ba4e09d-b31f-4685-bdbf-6bf816afb10c",
    name: "BattleField",
    position: {
      x: 10400,
      y: -980,
    },
    edges: [
      "9498ca06-7c25-4362-85d8-d3fa6358a04e",
      "b0881151-6da7-463e-b673-5afca42f763f",
    ],
    bottom: "7d7e3fae-a2f5-4d97-a8df-21767ce0f526",
    top: "4e87e85e-9221-464f-812f-c1ca01a33bfe",
    area: "Arctic",
  },
  {
    id: "4e87e85e-9221-464f-812f-c1ca01a33bfe",
    name: "BattleField",
    position: {
      x: 10320,
      y: -1280,
    },
    edges: [
      "b0881151-6da7-463e-b673-5afca42f763f",
      "6acf5c5c-5dd1-4dcc-a62b-69f18a8f2427",
    ],
    bottom: "3ba4e09d-b31f-4685-bdbf-6bf816afb10c",
    right: "ec84fab9-edd2-4aeb-b6d2-5fb398422cab",
    area: "Arctic",
  },
  {
    id: "ec84fab9-edd2-4aeb-b6d2-5fb398422cab",
    name: "TreasureField",
    position: {
      x: 10640,
      y: -1320,
    },
    edges: [
      "6acf5c5c-5dd1-4dcc-a62b-69f18a8f2427",
      "792d97b1-c1f8-4e0c-ac87-eeb076640aa9",
    ],
    left: "4e87e85e-9221-464f-812f-c1ca01a33bfe",
    right: "6b406338-75a7-415f-9765-31dea786f3fd",
    area: "Arctic",
  },
  {
    id: "6b406338-75a7-415f-9765-31dea786f3fd",
    name: "BattleField",
    position: {
      x: 10940,
      y: -1280,
    },
    edges: [
      "792d97b1-c1f8-4e0c-ac87-eeb076640aa9",
      "e9137bfa-3729-493a-97a5-cc3c3783ff76",
    ],
    left: "ec84fab9-edd2-4aeb-b6d2-5fb398422cab",
    top: "864a59a8-037d-40c4-b48a-8997e644a406",
    area: "Arctic",
  },
  {
    id: "864a59a8-037d-40c4-b48a-8997e644a406",
    name: "TreasureField",
    position: {
      x: 11020,
      y: -1940,
    },
    edges: [
      "e9137bfa-3729-493a-97a5-cc3c3783ff76",
      "a722eb0d-3925-4228-a6d5-2916d57880df",
    ],
    bottom: "6b406338-75a7-415f-9765-31dea786f3fd",
    right: "bba70ccc-ec4e-4d07-8b95-6a5f20438952",
    area: "Arctic",
  },
  {
    id: "bba70ccc-ec4e-4d07-8b95-6a5f20438952",
    name: "BattleField",
    position: {
      x: 11340,
      y: -2020,
    },
    edges: [
      "a722eb0d-3925-4228-a6d5-2916d57880df",
      "afcf8e5c-d033-42e0-9320-3a405ad76abf",
    ],
    left: "864a59a8-037d-40c4-b48a-8997e644a406",
    right: "93186749-a439-4fd3-b4ab-4af5a94e126f",
    area: "Arctic",
  },
  {
    id: "93186749-a439-4fd3-b4ab-4af5a94e126f",
    name: "BattleField",
    position: {
      x: 11660,
      y: -1940,
    },
    edges: [
      "afcf8e5c-d033-42e0-9320-3a405ad76abf",
      "5f1e81e3-a764-4dae-a7b4-0294f41a7f1b",
    ],
    left: "bba70ccc-ec4e-4d07-8b95-6a5f20438952",
    bottom: "474fb8f5-b151-487d-9869-f1d22ae3116d",
    area: "Arctic",
  },
  {
    id: "474fb8f5-b151-487d-9869-f1d22ae3116d",
    name: "BattleField",
    position: {
      x: 11700,
      y: -1620,
    },
    edges: [
      "5f1e81e3-a764-4dae-a7b4-0294f41a7f1b",
      "c2be2948-f53c-4eef-86ed-e150cefbfd57",
    ],
    top: "93186749-a439-4fd3-b4ab-4af5a94e126f",
    bottom: "46e36bde-d5f2-4969-847e-3d80031bc3a7",
    area: "Arctic",
  },
  {
    id: "46e36bde-d5f2-4969-847e-3d80031bc3a7",
    name: "RedTreasureField",
    position: {
      x: 11660,
      y: -1260,
    },
    edges: [
      "c2be2948-f53c-4eef-86ed-e150cefbfd57",
      "cad3edfd-18d6-4182-bce0-485c8ed7465b",
    ],
    top: "474fb8f5-b151-487d-9869-f1d22ae3116d",
    right: "333d2f31-e7f8-4387-8d1a-475c32080912",
    area: "Arctic",
  },
  {
    id: "333d2f31-e7f8-4387-8d1a-475c32080912",
    name: "TreasureField",
    position: {
      x: 12040,
      y: -1240,
    },
    edges: [
      "cad3edfd-18d6-4182-bce0-485c8ed7465b",
      "28f25be6-d7c6-44cc-a54d-282c79840f4d",
    ],
    left: "46e36bde-d5f2-4969-847e-3d80031bc3a7",
    right: "da919845-178f-4307-8839-6388fdd5ab52",
    area: "Arctic",
  },
  {
    id: "da919845-178f-4307-8839-6388fdd5ab52",
    name: "BattleField",
    position: {
      x: 12420,
      y: -1300,
    },
    edges: [
      "28f25be6-d7c6-44cc-a54d-282c79840f4d",
      "5817acaa-24ee-485d-94d0-f5f6240bb11c",
    ],
    left: "333d2f31-e7f8-4387-8d1a-475c32080912",
    right: "160c42b2-bd8c-41a0-a3d0-c94c9e65b85d",
    area: "Arctic",
  },
  {
    id: "160c42b2-bd8c-41a0-a3d0-c94c9e65b85d",
    name: "BattleField",
    position: {
      x: 12780,
      y: -1240,
    },
    edges: [
      "5817acaa-24ee-485d-94d0-f5f6240bb11c",
      "b7754b9a-4d24-4ce1-8753-94fe797977c4",
    ],
    left: "da919845-178f-4307-8839-6388fdd5ab52",
    bottom: "023800ab-4d52-4554-9d6f-68961e17f816",
    area: "Arctic",
  },
  {
    id: "023800ab-4d52-4554-9d6f-68961e17f816",
    name: "BattleField",
    position: {
      x: 12700,
      y: -960,
    },
    edges: [
      "b7754b9a-4d24-4ce1-8753-94fe797977c4",
      "dc5b7d1d-6b97-407d-b631-e701c8cc684d",
      "89824b53-2b4d-4ab3-8a12-6d1e6cd4ce85",
    ],
    top: "160c42b2-bd8c-41a0-a3d0-c94c9e65b85d",
    bottom: "a60737b3-4e4c-4e9b-b9f5-028f9d9389a2",
    right: "8d507b57-cc2c-4827-9547-752613754b89",
    area: "Arctic",
  },
  {
    id: "a60737b3-4e4c-4e9b-b9f5-028f9d9389a2",
    name: "BattleField",
    position: {
      x: 12740,
      y: -700,
    },
    edges: [
      "dc5b7d1d-6b97-407d-b631-e701c8cc684d",
      "ce4a3829-9a52-4a04-ab5f-372d81654d51",
    ],
    top: "023800ab-4d52-4554-9d6f-68961e17f816",
    bottom: "8783855b-5505-46b5-bc31-ca0a367135cd",
    area: "Arctic",
  },
  {
    id: "8783855b-5505-46b5-bc31-ca0a367135cd",
    name: "RedTreasureField",
    position: {
      x: 12660,
      y: -440,
    },
    edges: [
      "ce4a3829-9a52-4a04-ab5f-372d81654d51",
      "528f71fc-d79b-42bc-95fd-4b330bc06c07",
      "ed9c4a8e-c725-4b31-890a-cc82ae50c511",
      "3f2d859c-9947-4f93-8146-6948b2032f13",
    ],
    top: "a60737b3-4e4c-4e9b-b9f5-028f9d9389a2",
    right: "2eaf8fe2-3184-4404-a23e-01f3647ae265",
    left: "c2c16ded-efc3-4036-a558-9a90282b2b81",
    bottom: "226e6a74-da4f-4e07-8104-a8a3b0dde402",
    area: "Arctic",
  },
  {
    id: "2eaf8fe2-3184-4404-a23e-01f3647ae265",
    name: "BattleField",
    position: {
      x: 12960,
      y: -480,
    },
    edges: [
      "528f71fc-d79b-42bc-95fd-4b330bc06c07",
      "bb4c7755-0359-46c8-aa60-6b00dbdea68a",
    ],
    left: "8783855b-5505-46b5-bc31-ca0a367135cd",
    top: "8d507b57-cc2c-4827-9547-752613754b89",
    area: "Arctic",
  },
  {
    id: "8d507b57-cc2c-4827-9547-752613754b89",
    name: "TreasureField",
    position: {
      x: 13000,
      y: -940,
    },
    edges: [
      "89824b53-2b4d-4ab3-8a12-6d1e6cd4ce85",
      "bb4c7755-0359-46c8-aa60-6b00dbdea68a",
    ],
    left: "023800ab-4d52-4554-9d6f-68961e17f816",
    bottom: "2eaf8fe2-3184-4404-a23e-01f3647ae265",
    area: "Arctic",
  },
  {
    id: "c2c16ded-efc3-4036-a558-9a90282b2b81",
    name: "BattleField",
    position: {
      x: 12400,
      y: -480,
    },
    edges: [
      "ed9c4a8e-c725-4b31-890a-cc82ae50c511",
      "9ce057c1-54f7-4c5a-bbe5-70c1b1128de9",
    ],
    right: "8783855b-5505-46b5-bc31-ca0a367135cd",
    bottom: "06cd0030-ca41-4e70-8ee3-86fbd82d0487",
    area: "Arctic",
  },
  {
    id: "06cd0030-ca41-4e70-8ee3-86fbd82d0487",
    name: "RedTreasureField",
    position: {
      x: 12340,
      y: -220,
    },
    edges: [
      "9ce057c1-54f7-4c5a-bbe5-70c1b1128de9",
      "5bc09044-6916-4706-a61e-c6a99da9145f",
      "362e75f4-903b-40ef-950e-9ac1cc08c5f5",
    ],
    top: "c2c16ded-efc3-4036-a558-9a90282b2b81",
    bottom: "fef1bbaf-5068-4e1e-992b-312292c07cb3",
    left: "852045ec-f977-4b97-aa74-69304635d045",
    area: "Arctic",
  },
  {
    id: "226e6a74-da4f-4e07-8104-a8a3b0dde402",
    name: "BattleField",
    position: {
      x: 12700,
      y: 20,
    },
    edges: [
      "3f2d859c-9947-4f93-8146-6948b2032f13",
      "2c300eaa-aa80-45e5-b019-98e6edef6944",
    ],
    top: "8783855b-5505-46b5-bc31-ca0a367135cd",
    left: "fef1bbaf-5068-4e1e-992b-312292c07cb3",
    area: "Arctic",
  },
  {
    id: "fef1bbaf-5068-4e1e-992b-312292c07cb3",
    name: "TreasureField",
    position: {
      x: 12380,
      y: 60,
    },
    edges: [
      "2c300eaa-aa80-45e5-b019-98e6edef6944",
      "5bc09044-6916-4706-a61e-c6a99da9145f",
    ],
    right: "226e6a74-da4f-4e07-8104-a8a3b0dde402",
    top: "06cd0030-ca41-4e70-8ee3-86fbd82d0487",
    area: "Arctic",
  },
  {
    id: "852045ec-f977-4b97-aa74-69304635d045",
    name: "BattleField",
    position: {
      x: 12120,
      y: -140,
    },
    edges: [
      "362e75f4-903b-40ef-950e-9ac1cc08c5f5",
      "e882e9b6-3e0a-4aad-8321-e98a786b0284",
    ],
    right: "06cd0030-ca41-4e70-8ee3-86fbd82d0487",
    left: "da5efa67-099a-4457-971d-90e2f8cb1f43",
    area: "Arctic",
  },
  {
    id: "da5efa67-099a-4457-971d-90e2f8cb1f43",
    name: "BattleField",
    position: {
      x: 11940,
      y: -200,
    },
    edges: [
      "e882e9b6-3e0a-4aad-8321-e98a786b0284",
      "594bef31-9c14-4b94-bda8-a14e5da1cddf",
    ],
    right: "852045ec-f977-4b97-aa74-69304635d045",
    top: "b63382e6-e30e-4ed4-a67f-35e3e411dc94",
    area: "Arctic",
  },
  {
    id: "b63382e6-e30e-4ed4-a67f-35e3e411dc94",
    name: "CaveField",
    position: {
      x: 11920,
      y: -400,
    },
    edges: ["594bef31-9c14-4b94-bda8-a14e5da1cddf"],
    bottom: "da5efa67-099a-4457-971d-90e2f8cb1f43",
    area: "Arctic",
  },
];
const antarcticaVertices: Vertex[] = [
  {
    id: "da5baf39-82c0-4678-a693-b2604ac9e426",
    name: "BattleField",
    position: {
      x: 3420,
      y: 7160,
    },
    edges: [
      "0208bdec-8eb1-4cd6-85db-09e5fa4ab17e",
      "f48ab8e1-659b-4525-ba21-54019426c30f",
    ],
    top: "86e5b447-323e-4917-8caf-5dd110f37ea2",
    right: "4258b374-8ede-4149-be46-d757bf2d76c9",
    area: "Antarctica",
  },
  {
    id: "4258b374-8ede-4149-be46-d757bf2d76c9",
    name: "TreasureField",
    position: {
      x: 3760,
      y: 7240,
    },
    edges: [
      "f48ab8e1-659b-4525-ba21-54019426c30f",
      "50f9bff5-58da-4a2e-b72e-7f84b176ed48",
    ],
    left: "da5baf39-82c0-4678-a693-b2604ac9e426",
    right: "cf198975-65ba-4d4e-9df1-58b31c56f227",
    area: "Antarctica",
  },
  {
    id: "cf198975-65ba-4d4e-9df1-58b31c56f227",
    name: "BattleField",
    position: {
      x: 4120,
      y: 7160,
    },
    edges: [
      "50f9bff5-58da-4a2e-b72e-7f84b176ed48",
      "8b1b81b3-4913-4614-ad57-877d333a09aa",
    ],
    left: "4258b374-8ede-4149-be46-d757bf2d76c9",
    right: "a4c1e286-d75c-46ee-9c88-22f7aadc7a7d",
    area: "Antarctica",
  },
  {
    id: "a4c1e286-d75c-46ee-9c88-22f7aadc7a7d",
    name: "BattleField",
    position: {
      x: 4460,
      y: 7240,
    },
    edges: [
      "8b1b81b3-4913-4614-ad57-877d333a09aa",
      "dbc3c50c-a6da-43fd-ad5a-f5636885ac93",
    ],
    left: "cf198975-65ba-4d4e-9df1-58b31c56f227",
    bottom: "540ac755-254b-4690-bbe0-737826aa6bbf",
    area: "Antarctica",
  },
  {
    id: "540ac755-254b-4690-bbe0-737826aa6bbf",
    name: "TreasureField",
    position: {
      x: 4540,
      y: 7560,
    },
    edges: [
      "dbc3c50c-a6da-43fd-ad5a-f5636885ac93",
      "6eb2f86c-2643-4b9a-a041-554ca9278c6d",
    ],
    top: "a4c1e286-d75c-46ee-9c88-22f7aadc7a7d",
    bottom: "95341683-9ede-4590-a173-f04ab09976c0",
    area: "Antarctica",
  },
  {
    id: "95341683-9ede-4590-a173-f04ab09976c0",
    name: "BattleField",
    position: {
      x: 4440,
      y: 7900,
    },
    edges: [
      "6eb2f86c-2643-4b9a-a041-554ca9278c6d",
      "8ab9d0db-89e6-4862-b313-f647ef2f498f",
    ],
    top: "540ac755-254b-4690-bbe0-737826aa6bbf",
    right: "b50a4857-f125-4ce6-b7b9-91131727fb6b",
    area: "Antarctica",
  },
  {
    id: "b50a4857-f125-4ce6-b7b9-91131727fb6b",
    name: "MagicBookField",
    position: {
      x: 4820,
      y: 7980,
    },
    edges: [
      "8ab9d0db-89e6-4862-b313-f647ef2f498f",
      "e18d1bb2-13dc-486a-bf98-ac410df2f0ff",
    ],
    left: "95341683-9ede-4590-a173-f04ab09976c0",
    right: "5c95a1e7-1c38-48a4-ac8b-6fe58e5791ec",
    area: "Antarctica",
  },
  {
    id: "5c95a1e7-1c38-48a4-ac8b-6fe58e5791ec",
    name: "BattleField",
    position: {
      x: 5220,
      y: 7920,
    },
    edges: [
      "e18d1bb2-13dc-486a-bf98-ac410df2f0ff",
      "0e69edbb-2b3f-4aaf-9aba-3ea0ec0ddc18",
    ],
    left: "b50a4857-f125-4ce6-b7b9-91131727fb6b",
    right: "fd673ecf-06df-4a3c-adde-b3b494f53a8c",
    area: "Antarctica",
  },
  {
    id: "fd673ecf-06df-4a3c-adde-b3b494f53a8c",
    name: "TreasureField",
    position: {
      x: 5600,
      y: 7980,
    },
    edges: [
      "0e69edbb-2b3f-4aaf-9aba-3ea0ec0ddc18",
      "32df51ce-24d7-4985-8301-979a7652bbfd",
    ],
    left: "5c95a1e7-1c38-48a4-ac8b-6fe58e5791ec",
    right: "23c44714-91a0-417c-af83-d1ad1b52a504",
    area: "Antarctica",
  },
  {
    id: "23c44714-91a0-417c-af83-d1ad1b52a504",
    name: "BattleField",
    position: {
      x: 6000,
      y: 7920,
    },
    edges: [
      "32df51ce-24d7-4985-8301-979a7652bbfd",
      "7bf285e7-42d5-4e90-b5fb-4e5a67883e4b",
    ],
    left: "fd673ecf-06df-4a3c-adde-b3b494f53a8c",
    bottom: "2b6cf571-17fd-4ac5-aa38-e74e3eeb841d",
    area: "Antarctica",
  },
  {
    id: "2b6cf571-17fd-4ac5-aa38-e74e3eeb841d",
    name: "TreasureField",
    position: {
      x: 6060,
      y: 8300,
    },
    edges: [
      "7bf285e7-42d5-4e90-b5fb-4e5a67883e4b",
      "f1611e48-9435-4ea4-9344-483709b3ba7d",
    ],
    top: "23c44714-91a0-417c-af83-d1ad1b52a504",
    bottom: "05b28ac6-01bc-4a19-9b83-7e0d1b832be9",
    area: "Antarctica",
  },
  {
    id: "05b28ac6-01bc-4a19-9b83-7e0d1b832be9",
    name: "BattleField",
    position: {
      x: 5980,
      y: 8660,
    },
    edges: [
      "f1611e48-9435-4ea4-9344-483709b3ba7d",
      "9ab10894-8cd8-44bd-b366-2823064245f0",
    ],
    top: "2b6cf571-17fd-4ac5-aa38-e74e3eeb841d",
    bottom: "dc7b368a-17dd-48a5-863b-c36f34365c72",
    area: "Antarctica",
  },
  {
    id: "dc7b368a-17dd-48a5-863b-c36f34365c72",
    name: "BattleField",
    position: {
      x: 6040,
      y: 9000,
    },
    edges: [
      "9ab10894-8cd8-44bd-b366-2823064245f0",
      "ba27d81d-3ab1-41d9-b5ce-43fb5716deb5",
    ],
    top: "05b28ac6-01bc-4a19-9b83-7e0d1b832be9",
    bottom: "dfc84ca2-fcad-4cfb-9ddb-3c399527808e",
    area: "Antarctica",
  },
  {
    id: "dfc84ca2-fcad-4cfb-9ddb-3c399527808e",
    name: "BattleField",
    position: {
      x: 5920,
      y: 9360,
    },
    edges: [
      "ba27d81d-3ab1-41d9-b5ce-43fb5716deb5",
      "aca00afb-38ed-4653-9442-e4a630e82d7a",
    ],
    top: "dc7b368a-17dd-48a5-863b-c36f34365c72",
    right: "baa1f9a0-a3e4-4562-9e79-e0c63ce3f4f6",
    area: "Antarctica",
  },
  {
    id: "baa1f9a0-a3e4-4562-9e79-e0c63ce3f4f6",
    name: "BattleField",
    position: {
      x: 6340,
      y: 9420,
    },
    edges: [
      "aca00afb-38ed-4653-9442-e4a630e82d7a",
      "81afcf41-71e9-4d5c-b9e7-515b5c5b985b",
    ],
    left: "dfc84ca2-fcad-4cfb-9ddb-3c399527808e",
    right: "f12b40cd-78e1-43c7-928d-04e13f4fa829",
    area: "Antarctica",
  },
  {
    id: "f12b40cd-78e1-43c7-928d-04e13f4fa829",
    name: "TreasureField",
    position: {
      x: 6700,
      y: 9360,
    },
    edges: [
      "81afcf41-71e9-4d5c-b9e7-515b5c5b985b",
      "820443d9-01f2-4f3d-b4dc-8d6add3c2294",
      "fa1116c8-a38d-4b4f-9b25-7e5aa8fac82b",
    ],
    left: "baa1f9a0-a3e4-4562-9e79-e0c63ce3f4f6",
    right: "915797f9-870e-42af-ae52-44dc6dfa8c8d",
    bottom: "40ada4c9-e43c-4b41-be4d-574736574489",
    area: "Antarctica",
  },
  {
    id: "915797f9-870e-42af-ae52-44dc6dfa8c8d",
    name: "BattleField",
    position: {
      x: 7100,
      y: 9400,
    },
    edges: [
      "820443d9-01f2-4f3d-b4dc-8d6add3c2294",
      "5d57f334-5ddd-4a23-8d45-06487fedac60",
    ],
    left: "f12b40cd-78e1-43c7-928d-04e13f4fa829",
    right: "5d9d68b9-661b-4375-98cd-34f3965e43c4",
    area: "Antarctica",
  },
  {
    id: "5d9d68b9-661b-4375-98cd-34f3965e43c4",
    name: "MagicBookField",
    position: {
      x: 7540,
      y: 9340,
    },
    edges: [
      "5d57f334-5ddd-4a23-8d45-06487fedac60",
      "5071aca8-4ebd-4f5b-8b73-077c934f0f9a",
    ],
    left: "915797f9-870e-42af-ae52-44dc6dfa8c8d",
    bottom: "f4efe165-170e-4cac-bc65-031819e5134a",
    area: "Antarctica",
  },
  {
    id: "40ada4c9-e43c-4b41-be4d-574736574489",
    name: "BattleField",
    position: {
      x: 6620,
      y: 9720,
    },
    edges: [
      "fa1116c8-a38d-4b4f-9b25-7e5aa8fac82b",
      "386dba9e-a655-4a3e-b6ec-4ba3636056eb",
    ],
    top: "f12b40cd-78e1-43c7-928d-04e13f4fa829",
    bottom: "a1996074-8ea4-4dbe-bf35-a10eb01b13fd",
    area: "Antarctica",
  },
  {
    id: "a1996074-8ea4-4dbe-bf35-a10eb01b13fd",
    name: "BattleField",
    position: {
      x: 6660,
      y: 10100,
    },
    edges: [
      "386dba9e-a655-4a3e-b6ec-4ba3636056eb",
      "038c9f1e-9107-45db-b953-11f31f9beb4c",
    ],
    top: "40ada4c9-e43c-4b41-be4d-574736574489",
    right: "d9bf4836-29ac-41d9-8de8-52274fe6141a",
    area: "Antarctica",
  },
  {
    id: "d9bf4836-29ac-41d9-8de8-52274fe6141a",
    name: "TreasureField",
    position: {
      x: 7060,
      y: 10160,
    },
    edges: [
      "038c9f1e-9107-45db-b953-11f31f9beb4c",
      "44d16fcd-44b8-42f1-a16c-8030a66ee70f",
    ],
    left: "a1996074-8ea4-4dbe-bf35-a10eb01b13fd",
    right: "f4efe165-170e-4cac-bc65-031819e5134a",
    area: "Antarctica",
  },
  {
    id: "f4efe165-170e-4cac-bc65-031819e5134a",
    name: "BattleField",
    position: {
      x: 7480,
      y: 10080,
    },
    edges: [
      "44d16fcd-44b8-42f1-a16c-8030a66ee70f",
      "5071aca8-4ebd-4f5b-8b73-077c934f0f9a",
      "fda069ec-3ba5-4bfd-8bd3-ab74a81c3f08",
    ],
    left: "d9bf4836-29ac-41d9-8de8-52274fe6141a",
    top: "5d9d68b9-661b-4375-98cd-34f3965e43c4",
    right: "bc898212-822a-488d-a88e-0c79194f2a67",
    area: "Antarctica",
  },
  {
    id: "bc898212-822a-488d-a88e-0c79194f2a67",
    name: "RedTreasureField",
    position: {
      x: 7840,
      y: 10140,
    },
    edges: [
      "fda069ec-3ba5-4bfd-8bd3-ab74a81c3f08",
      "d8c48226-7da8-450d-913f-47f54af042e9",
    ],
    left: "f4efe165-170e-4cac-bc65-031819e5134a",
    bottom: "8a578148-89e4-4a9b-9737-3da63a81bd7a",
    area: "Antarctica",
  },
  {
    id: "8a578148-89e4-4a9b-9737-3da63a81bd7a",
    name: "BattleField",
    position: {
      x: 7880,
      y: 10460,
    },
    edges: [
      "d8c48226-7da8-450d-913f-47f54af042e9",
      "f44226c2-880a-4ea0-9418-a964588bb0ee",
    ],
    top: "bc898212-822a-488d-a88e-0c79194f2a67",
    right: "f541bcef-aeed-4da9-901e-6b028f52fb3b",
    area: "Antarctica",
  },
  {
    id: "f541bcef-aeed-4da9-901e-6b028f52fb3b",
    name: "TreasureField",
    position: {
      x: 8220,
      y: 10500,
    },
    edges: [
      "f44226c2-880a-4ea0-9418-a964588bb0ee",
      "7f6bd778-b538-438d-acbd-a16298bb67f1",
      "adfcd249-e182-49de-8c04-e6250968c437",
    ],
    left: "8a578148-89e4-4a9b-9737-3da63a81bd7a",
    right: "6651285c-6730-4655-bd1e-1a4d03cbde94",
    bottom: "23e6ea8a-f581-4e9c-848c-8cefbdc4042f",
    area: "Antarctica",
  },
  {
    id: "6651285c-6730-4655-bd1e-1a4d03cbde94",
    name: "BattleField",
    position: {
      x: 8560,
      y: 10460,
    },
    edges: [
      "7f6bd778-b538-438d-acbd-a16298bb67f1",
      "07abc4bc-f01b-4244-95d0-63265108b207",
    ],
    left: "f541bcef-aeed-4da9-901e-6b028f52fb3b",
    top: "85f82b66-9393-4e83-820b-43f22e3a27bd",
    area: "Antarctica",
  },
  {
    id: "85f82b66-9393-4e83-820b-43f22e3a27bd",
    name: "WorldTransferField",
    position: {
      x: 8640,
      y: 10140,
    },
    edges: ["07abc4bc-f01b-4244-95d0-63265108b207"],
    bottom: "6651285c-6730-4655-bd1e-1a4d03cbde94",
    area: "Antarctica",
  },
  {
    id: "23e6ea8a-f581-4e9c-848c-8cefbdc4042f",
    name: "RedTreasureField",
    position: {
      x: 8180,
      y: 10840,
    },
    edges: [
      "adfcd249-e182-49de-8c04-e6250968c437",
      "864f13d8-ed01-4102-849d-7aa307cb69ac",
    ],
    top: "f541bcef-aeed-4da9-901e-6b028f52fb3b",
    bottom: "9d91fbe9-a403-4f6a-bff5-dd66d61f51aa",
    area: "Antarctica",
  },
  {
    id: "9d91fbe9-a403-4f6a-bff5-dd66d61f51aa",
    name: "TreasureField",
    position: {
      x: 8220,
      y: 11160,
    },
    edges: [
      "864f13d8-ed01-4102-849d-7aa307cb69ac",
      "3c852b33-f256-408a-9b8a-1d52c1436061",
      "ebc9d1c9-a11b-4168-8082-b31933547e23",
      "4acdbb10-5d26-4dbb-ab30-19c353a3c681",
    ],
    top: "23e6ea8a-f581-4e9c-848c-8cefbdc4042f",
    bottom: "0b71163e-626a-47e9-bfa1-7239f0de5308",
    left: "a57193f5-ef11-46d9-b02a-a88ed8d93348",
    right: "61624b8f-90fb-4f1c-9162-8dc91f1fba7f",
    area: "Antarctica",
  },
  {
    id: "0b71163e-626a-47e9-bfa1-7239f0de5308",
    name: "BattleField",
    position: {
      x: 8180,
      y: 11520,
    },
    edges: [
      "3c852b33-f256-408a-9b8a-1d52c1436061",
      "5cd59f4f-bfdf-428f-b01f-ad438ab58def",
    ],
    top: "9d91fbe9-a403-4f6a-bff5-dd66d61f51aa",
    left: "90f07f25-1a69-4218-a807-f525a094d69a",
    area: "Antarctica",
  },
  {
    id: "a57193f5-ef11-46d9-b02a-a88ed8d93348",
    name: "BattleField",
    position: {
      x: 7880,
      y: 11120,
    },
    edges: [
      "ebc9d1c9-a11b-4168-8082-b31933547e23",
      "3eef089c-9909-4316-ad26-307677d238af",
    ],
    right: "9d91fbe9-a403-4f6a-bff5-dd66d61f51aa",
    left: "ce7d640b-b699-44aa-a794-cbec34e97427",
    area: "Antarctica",
  },
  {
    id: "ce7d640b-b699-44aa-a794-cbec34e97427",
    name: "BattleField",
    position: {
      x: 7560,
      y: 11160,
    },
    edges: [
      "3eef089c-9909-4316-ad26-307677d238af",
      "89d29f4b-5ae8-4d4a-8592-35c670f6744e",
    ],
    right: "a57193f5-ef11-46d9-b02a-a88ed8d93348",
    bottom: "90f07f25-1a69-4218-a807-f525a094d69a",
    area: "Antarctica",
  },
  {
    id: "90f07f25-1a69-4218-a807-f525a094d69a",
    name: "GoldTreasureField",
    position: {
      x: 7580,
      y: 11480,
    },
    edges: [
      "89d29f4b-5ae8-4d4a-8592-35c670f6744e",
      "5cd59f4f-bfdf-428f-b01f-ad438ab58def",
    ],
    top: "ce7d640b-b699-44aa-a794-cbec34e97427",
    right: "0b71163e-626a-47e9-bfa1-7239f0de5308",
    area: "Antarctica",
  },
  {
    id: "61624b8f-90fb-4f1c-9162-8dc91f1fba7f",
    name: "TreasureField",
    position: {
      x: 8560,
      y: 11120,
    },
    edges: [
      "4acdbb10-5d26-4dbb-ab30-19c353a3c681",
      "777a8083-4799-41c6-8622-a73d032e1f96",
    ],
    left: "9d91fbe9-a403-4f6a-bff5-dd66d61f51aa",
    bottom: "538eac0c-1ed4-41b0-a59b-3688c7169799",
    area: "Antarctica",
  },
  {
    id: "538eac0c-1ed4-41b0-a59b-3688c7169799",
    name: "BattleField",
    position: {
      x: 8580,
      y: 11560,
    },
    edges: [
      "777a8083-4799-41c6-8622-a73d032e1f96",
      "6e915401-70c8-4764-8ae3-f311e6738fab",
    ],
    top: "61624b8f-90fb-4f1c-9162-8dc91f1fba7f",
    right: "9273365c-b48d-4b91-9c35-f980415da24f",
    area: "Antarctica",
  },
  {
    id: "9273365c-b48d-4b91-9c35-f980415da24f",
    name: "RedTreasureField",
    position: {
      x: 8980,
      y: 11500,
    },
    edges: [
      "6e915401-70c8-4764-8ae3-f311e6738fab",
      "e82c5f60-d564-4502-8dc4-d0c0335e7c23",
    ],
    left: "538eac0c-1ed4-41b0-a59b-3688c7169799",
    right: "42637926-3ede-4d14-920b-257004108277",
    area: "Antarctica",
  },
  {
    id: "42637926-3ede-4d14-920b-257004108277",
    name: "RedTreasureField",
    position: {
      x: 9360,
      y: 11560,
    },
    edges: [
      "e82c5f60-d564-4502-8dc4-d0c0335e7c23",
      "7a771397-36ba-4c56-8ce7-7aa49c64dfd6",
    ],
    left: "9273365c-b48d-4b91-9c35-f980415da24f",
    right: "c2c8cc1d-2995-469d-a792-768c1c40a1c3",
    area: "Antarctica",
  },
  {
    id: "c2c8cc1d-2995-469d-a792-768c1c40a1c3",
    name: "RedTreasureField",
    position: {
      x: 9740,
      y: 11500,
    },
    edges: [
      "7a771397-36ba-4c56-8ce7-7aa49c64dfd6",
      "23bfe791-f369-4468-bd5f-1b63011aa290",
    ],
    left: "42637926-3ede-4d14-920b-257004108277",
    right: "762bcb17-2e8d-469c-88d3-d06cc92fe7b8",
    area: "Antarctica",
  },
  {
    id: "762bcb17-2e8d-469c-88d3-d06cc92fe7b8",
    name: "WhiteTreasureField",
    position: {
      x: 10100,
      y: 11560,
    },
    edges: [
      "23bfe791-f369-4468-bd5f-1b63011aa290",
      "4590d21d-5a39-46a2-90cc-8543d1705b22",
    ],
    left: "c2c8cc1d-2995-469d-a792-768c1c40a1c3",
    right: "8ccccdf5-139d-41ff-85c8-b523e007b011",
    area: "Antarctica",
  },
  {
    id: "8ccccdf5-139d-41ff-85c8-b523e007b011",
    name: "CaveField",
    position: {
      x: 10460,
      y: 11480,
    },
    edges: [
      "4590d21d-5a39-46a2-90cc-8543d1705b22",
      "8e55d4e8-baef-4a24-b766-def733a69232",
    ],
    left: "762bcb17-2e8d-469c-88d3-d06cc92fe7b8",
    right: "86ff9b7c-da53-4003-ae8e-992036396961",
    area: "Antarctica",
  },
  {
    id: "86ff9b7c-da53-4003-ae8e-992036396961",
    name: "BattleField",
    position: {
      x: 10780,
      y: 11540,
    },
    edges: [
      "8e55d4e8-baef-4a24-b766-def733a69232",
      "5aa82c3d-c84b-4741-86ff-d7b432852617",
    ],
    left: "8ccccdf5-139d-41ff-85c8-b523e007b011",
    right: "8a05526f-fce6-437d-981e-f88e10bd665b",
    area: "Antarctica",
  },
  {
    id: "8a05526f-fce6-437d-981e-f88e10bd665b",
    name: "RedTreasureField",
    position: {
      x: 11120,
      y: 11480,
    },
    edges: [
      "5aa82c3d-c84b-4741-86ff-d7b432852617",
      "d774d4ee-04d6-4d83-b4d0-1e35b86eaa52",
    ],
    left: "86ff9b7c-da53-4003-ae8e-992036396961",
    right: "82f08002-a4ad-465e-b3bb-80f346b4606a",
    area: "Antarctica",
  },
  {
    id: "82f08002-a4ad-465e-b3bb-80f346b4606a",
    name: "BattleField",
    position: {
      x: 11480,
      y: 11540,
    },
    edges: [
      "d774d4ee-04d6-4d83-b4d0-1e35b86eaa52",
      "461031dc-c072-4d8b-8b4f-f4e48c10f4b2",
      "8e33b850-0696-473e-b018-dd96fdf52aba",
    ],
    left: "8a05526f-fce6-437d-981e-f88e10bd665b",
    right: "28c361bb-a56f-4099-a8bf-40e4869f2b7c",
    top: "eebf013d-79f0-4565-9919-1917ffe72d8e",
    area: "Antarctica",
  },
  {
    id: "28c361bb-a56f-4099-a8bf-40e4869f2b7c",
    name: "TreasureField",
    position: {
      x: 12080,
      y: 11480,
    },
    edges: [
      "461031dc-c072-4d8b-8b4f-f4e48c10f4b2",
      "8540f5c9-516b-46b3-8be8-eda4f2550d7a",
    ],
    left: "82f08002-a4ad-465e-b3bb-80f346b4606a",
    top: "de445304-6eec-43eb-a0ce-db78ae7b9838",
    area: "Antarctica",
  },
  {
    id: "eebf013d-79f0-4565-9919-1917ffe72d8e",
    name: "TreasureField",
    position: {
      x: 11440,
      y: 11160,
    },
    edges: [
      "8e33b850-0696-473e-b018-dd96fdf52aba",
      "2c4802e1-c388-49e8-a80e-809b188e3f93",
    ],
    bottom: "82f08002-a4ad-465e-b3bb-80f346b4606a",
    right: "4276ced9-ee69-4bb9-875d-967c5f17cbe1",
    area: "Antarctica",
  },
  {
    id: "4276ced9-ee69-4bb9-875d-967c5f17cbe1",
    name: "BattleField",
    position: {
      x: 11780,
      y: 11120,
    },
    edges: [
      "2c4802e1-c388-49e8-a80e-809b188e3f93",
      "59517573-4754-4940-92e8-348a6dc6a53f",
    ],
    left: "eebf013d-79f0-4565-9919-1917ffe72d8e",
    right: "de445304-6eec-43eb-a0ce-db78ae7b9838",
    area: "Antarctica",
  },
  {
    id: "de445304-6eec-43eb-a0ce-db78ae7b9838",
    name: "TreasureField",
    position: {
      x: 12120,
      y: 11160,
    },
    edges: [
      "59517573-4754-4940-92e8-348a6dc6a53f",
      "8540f5c9-516b-46b3-8be8-eda4f2550d7a",
      "95e26235-2776-4d16-858c-3d84ce5ee148",
      "79a55615-5b77-4660-a300-f3febe61e5c4",
    ],
    left: "4276ced9-ee69-4bb9-875d-967c5f17cbe1",
    bottom: "28c361bb-a56f-4099-a8bf-40e4869f2b7c",
    right: "818d3bce-2a45-44a9-8470-c10824fd979b",
    top: "a277109b-b6ea-4729-8cad-cf4c199a9d6d",
    area: "Antarctica",
  },
  {
    id: "818d3bce-2a45-44a9-8470-c10824fd979b",
    name: "RedTreasureField",
    position: {
      x: 12420,
      y: 11120,
    },
    edges: [
      "95e26235-2776-4d16-858c-3d84ce5ee148",
      "5f0df2cf-b68e-449d-b429-01e9454a1606",
    ],
    left: "de445304-6eec-43eb-a0ce-db78ae7b9838",
    top: "33870572-f3f8-4291-bb09-2d9dd6047d2b",
    area: "Antarctica",
  },
  {
    id: "33870572-f3f8-4291-bb09-2d9dd6047d2b",
    name: "RedTreasureField",
    position: {
      x: 12360,
      y: 10820,
    },
    edges: [
      "5f0df2cf-b68e-449d-b429-01e9454a1606",
      "8fda4ddf-419e-4736-a75c-2d18201f4ffb",
      "03b4114d-a33e-4435-b641-d1ac8416c806",
    ],
    bottom: "818d3bce-2a45-44a9-8470-c10824fd979b",
    left: "a277109b-b6ea-4729-8cad-cf4c199a9d6d",
    right: "c7f99497-8d14-4d1a-b9a0-d12bac7ff4f3",
    area: "Antarctica",
  },
  {
    id: "a277109b-b6ea-4729-8cad-cf4c199a9d6d",
    name: "MagicBookField",
    position: {
      x: 12060,
      y: 10860,
    },
    edges: [
      "8fda4ddf-419e-4736-a75c-2d18201f4ffb",
      "79a55615-5b77-4660-a300-f3febe61e5c4",
      "3debbb6d-64da-4d22-ba3a-ae5004958ecc",
    ],
    right: "33870572-f3f8-4291-bb09-2d9dd6047d2b",
    bottom: "de445304-6eec-43eb-a0ce-db78ae7b9838",
    top: "a4d45cff-04a5-4a04-9d10-183acb893291",
    area: "Antarctica",
  },
  {
    id: "c7f99497-8d14-4d1a-b9a0-d12bac7ff4f3",
    name: "TreasureField",
    position: {
      x: 12740,
      y: 10860,
    },
    edges: [
      "03b4114d-a33e-4435-b641-d1ac8416c806",
      "0d6db6dd-5676-4654-b64a-e18e773a1eaa",
    ],
    left: "33870572-f3f8-4291-bb09-2d9dd6047d2b",
    top: "a0977898-22c1-4771-aa95-f445696aa693",
    area: "Antarctica",
  },
  {
    id: "a4d45cff-04a5-4a04-9d10-183acb893291",
    name: "RedTreasureField",
    position: {
      x: 12120,
      y: 10520,
    },
    edges: [
      "3debbb6d-64da-4d22-ba3a-ae5004958ecc",
      "65433f77-4f8d-4daf-bf6d-99fd31aac498",
    ],
    bottom: "a277109b-b6ea-4729-8cad-cf4c199a9d6d",
    right: "a0977898-22c1-4771-aa95-f445696aa693",
    area: "Antarctica",
  },
  {
    id: "a0977898-22c1-4771-aa95-f445696aa693",
    name: "RedTreasureField",
    position: {
      x: 12640,
      y: 10500,
    },
    edges: [
      "65433f77-4f8d-4daf-bf6d-99fd31aac498",
      "0d6db6dd-5676-4654-b64a-e18e773a1eaa",
    ],
    left: "a4d45cff-04a5-4a04-9d10-183acb893291",
    bottom: "c7f99497-8d14-4d1a-b9a0-d12bac7ff4f3",
    area: "Antarctica",
  },
];
const hawaiianIslandsVertices: Vertex[] = [
  {
    id: "9ab009e3-fb04-4791-8dba-c2b3ebe48e63",
    name: "BattleField",
    position: {
      x: 7940,
      y: 5100,
    },
    edges: [
      "20bc8e6d-46b7-4e36-96ba-8d4cb65e7f97",
      "d54de841-71cd-4e7a-a7ec-9c3cf143c3b8",
    ],
    bottom: "d4e376b8-4242-46c1-a233-fe767991debd",
    top: "25ccf3f7-0ed0-4d7a-8805-75fd99423527",
    area: "HawaiianIslands",
  },
  {
    id: "c9514ae3-0c66-4797-aac7-c4693765d28e",
    name: "BattleField",
    position: {
      x: 7480,
      y: 5100,
    },
    edges: [
      "4d8f1e78-0450-47a3-9133-bc53f8fa6896",
      "16e78420-0727-417a-88b3-bd2a449d5fc9",
    ],
    bottom: "4be7aa7c-e6d5-4fad-bcfb-9c73d56f8e14",
    top: "851d75dc-ae5b-4663-85fa-eba6050d83b3",
    area: "HawaiianIslands",
  },
  {
    id: "25ccf3f7-0ed0-4d7a-8805-75fd99423527",
    name: "BattleField",
    position: {
      x: 7940,
      y: 4900,
    },
    edges: [
      "d54de841-71cd-4e7a-a7ec-9c3cf143c3b8",
      "7567feca-26ba-42ff-a674-4653f73c0a4e",
    ],
    bottom: "9ab009e3-fb04-4791-8dba-c2b3ebe48e63",
    left: "e962a6aa-155a-4d7a-92d7-5d5e0eb8cace",
    area: "HawaiianIslands",
  },
  {
    id: "851d75dc-ae5b-4663-85fa-eba6050d83b3",
    name: "BattleField",
    position: {
      x: 7480,
      y: 4900,
    },
    edges: [
      "16e78420-0727-417a-88b3-bd2a449d5fc9",
      "8e662346-a984-4eaa-be01-300fb2508cc3",
    ],
    bottom: "c9514ae3-0c66-4797-aac7-c4693765d28e",
    right: "e962a6aa-155a-4d7a-92d7-5d5e0eb8cace",
    area: "HawaiianIslands",
  },
  {
    id: "e962a6aa-155a-4d7a-92d7-5d5e0eb8cace",
    name: "BattleField",
    position: {
      x: 7720,
      y: 4880,
    },
    edges: [
      "8e662346-a984-4eaa-be01-300fb2508cc3",
      "7567feca-26ba-42ff-a674-4653f73c0a4e",
      "6b62c6b5-034a-450d-af19-0d80866639c5",
    ],
    left: "851d75dc-ae5b-4663-85fa-eba6050d83b3",
    right: "25ccf3f7-0ed0-4d7a-8805-75fd99423527",
    top: "7b8e9c81-bf9d-44a1-a21a-1ef2f54905c5",
    area: "HawaiianIslands",
  },
  {
    id: "7b8e9c81-bf9d-44a1-a21a-1ef2f54905c5",
    name: "GoldTreasureField",
    position: {
      x: 7720,
      y: 4680,
    },
    edges: [
      "6b62c6b5-034a-450d-af19-0d80866639c5",
      "64153137-a401-49f7-8ec3-6480b07084a6",
    ],
    bottom: "e962a6aa-155a-4d7a-92d7-5d5e0eb8cace",
    top: "cd37ec09-e29c-460d-a184-bc29197761b8",
    area: "HawaiianIslands",
  },
  {
    id: "cd37ec09-e29c-460d-a184-bc29197761b8",
    name: "BattleField",
    position: {
      x: 7720,
      y: 4420,
    },
    edges: [
      "64153137-a401-49f7-8ec3-6480b07084a6",
      "acfee369-4a0b-48f5-8735-279afa1546b1",
      "adaa0f05-e209-45fe-9f38-6fc1238834b8",
    ],
    bottom: "7b8e9c81-bf9d-44a1-a21a-1ef2f54905c5",
    left: "e4d8e266-5c27-4b1d-9962-bf903598b537",
    top: "e1530b5b-3175-4fb6-a082-ddb70e1e9ca9",
    area: "HawaiianIslands",
  },
  {
    id: "0203890c-753a-41bc-bd85-5b3953e7b9d3",
    name: "MagicBookField",
    position: {
      x: 7980,
      y: 4160,
    },
    edges: [
      "87bb9bea-0ecf-47a8-ba16-e92956332c7a",
      "2afcf164-8c65-4a60-aca8-1fcf82587c8b",
    ],
    top: "f3cfd709-4639-4318-b451-f8240a056a76",
    left: "e1530b5b-3175-4fb6-a082-ddb70e1e9ca9",
    area: "HawaiianIslands",
  },
  {
    id: "f3cfd709-4639-4318-b451-f8240a056a76",
    name: "BattleField",
    position: {
      x: 7980,
      y: 3920,
    },
    edges: [
      "87bb9bea-0ecf-47a8-ba16-e92956332c7a",
      "ea10848c-6c87-4c65-8ff8-8712e297d9f9",
    ],
    bottom: "0203890c-753a-41bc-bd85-5b3953e7b9d3",
    left: "4ed1d0f7-7493-45a9-9866-46beb9d7eb46",
    area: "HawaiianIslands",
  },
  {
    id: "4ed1d0f7-7493-45a9-9866-46beb9d7eb46",
    name: "BattleField",
    position: {
      x: 7720,
      y: 3920,
    },
    edges: [
      "ea10848c-6c87-4c65-8ff8-8712e297d9f9",
      "041ed7eb-5710-422f-8504-d26802dd0bdb",
    ],
    right: "f3cfd709-4639-4318-b451-f8240a056a76",
    left: "ea8acc84-c3aa-441b-b63c-e55c340b633c",
    area: "HawaiianIslands",
  },
  {
    id: "ea8acc84-c3aa-441b-b63c-e55c340b633c",
    name: "TreasureField",
    position: {
      x: 7440,
      y: 3920,
    },
    edges: [
      "041ed7eb-5710-422f-8504-d26802dd0bdb",
      "b4620033-d8b0-43fc-94b9-19b3c8628008",
    ],
    right: "4ed1d0f7-7493-45a9-9866-46beb9d7eb46",
    top: "c8f64d7d-37f2-4e47-b787-de774cd17eb5",
    area: "HawaiianIslands",
  },
  {
    id: "c8f64d7d-37f2-4e47-b787-de774cd17eb5",
    name: "BattleField",
    position: {
      x: 7440,
      y: 3700,
    },
    edges: [
      "b4620033-d8b0-43fc-94b9-19b3c8628008",
      "b2ef6716-9c14-4cca-996a-b88ebcf16248",
    ],
    bottom: "ea8acc84-c3aa-441b-b63c-e55c340b633c",
    top: "547b2b5a-438b-42cb-b983-f9db644328eb",
    area: "HawaiianIslands",
  },
  {
    id: "547b2b5a-438b-42cb-b983-f9db644328eb",
    name: "CaveField",
    position: {
      x: 7440,
      y: 3500,
    },
    edges: ["b2ef6716-9c14-4cca-996a-b88ebcf16248"],
    bottom: "c8f64d7d-37f2-4e47-b787-de774cd17eb5",
    area: "HawaiianIslands",
  },
  {
    id: "e4d8e266-5c27-4b1d-9962-bf903598b537",
    name: "BattleField",
    position: {
      x: 7440,
      y: 4420,
    },
    edges: [
      "acfee369-4a0b-48f5-8735-279afa1546b1",
      "54d9fa73-c9b9-43b5-8581-ea8862a9ad02",
    ],
    right: "cd37ec09-e29c-460d-a184-bc29197761b8",
    left: "1c2e8cb1-5615-490c-be6d-acd36ef19cf7",
    area: "HawaiianIslands",
  },
  {
    id: "1c2e8cb1-5615-490c-be6d-acd36ef19cf7",
    name: "RedTreasureField",
    position: {
      x: 7180,
      y: 4420,
    },
    edges: [
      "54d9fa73-c9b9-43b5-8581-ea8862a9ad02",
      "c345778f-298c-4db0-accd-171f34c70fae",
    ],
    right: "e4d8e266-5c27-4b1d-9962-bf903598b537",
    left: "d2934720-9648-4781-ba5e-b9b7378a1091",
    area: "HawaiianIslands",
  },
  {
    id: "d2934720-9648-4781-ba5e-b9b7378a1091",
    name: "BattleField",
    position: {
      x: 6940,
      y: 4420,
    },
    edges: [
      "c345778f-298c-4db0-accd-171f34c70fae",
      "208d6975-5821-44f9-a02e-e601407af090",
    ],
    right: "1c2e8cb1-5615-490c-be6d-acd36ef19cf7",
    left: "8614e318-60cf-4a15-be0e-ef9d4326a708",
    area: "HawaiianIslands",
  },
  {
    id: "8614e318-60cf-4a15-be0e-ef9d4326a708",
    name: "BattleField",
    position: {
      x: 6720,
      y: 4420,
    },
    edges: [
      "208d6975-5821-44f9-a02e-e601407af090",
      "a79a7555-0c2c-4aae-aa9e-118e7904439b",
    ],
    right: "d2934720-9648-4781-ba5e-b9b7378a1091",
    top: "a4ac2115-372f-4448-ac0f-7de24101196a",
    area: "HawaiianIslands",
  },
  {
    id: "a4ac2115-372f-4448-ac0f-7de24101196a",
    name: "BattleField",
    position: {
      x: 6720,
      y: 4120,
    },
    edges: [
      "a79a7555-0c2c-4aae-aa9e-118e7904439b",
      "f95c4cee-380e-48c6-88f4-7b053668604f",
    ],
    bottom: "8614e318-60cf-4a15-be0e-ef9d4326a708",
    top: "f3bcea10-8802-4252-9f7b-7cd3b2e02ed8",
    area: "HawaiianIslands",
  },
  {
    id: "e1530b5b-3175-4fb6-a082-ddb70e1e9ca9",
    name: "BattleField",
    position: {
      x: 7720,
      y: 4160,
    },
    edges: [
      "adaa0f05-e209-45fe-9f38-6fc1238834b8",
      "2afcf164-8c65-4a60-aca8-1fcf82587c8b",
    ],
    bottom: "cd37ec09-e29c-460d-a184-bc29197761b8",
    right: "0203890c-753a-41bc-bd85-5b3953e7b9d3",
    area: "HawaiianIslands",
  },
  {
    id: "f3bcea10-8802-4252-9f7b-7cd3b2e02ed8",
    name: "BattleField",
    position: {
      x: 6720,
      y: 3820,
    },
    edges: [
      "f95c4cee-380e-48c6-88f4-7b053668604f",
      "66208d07-a2c3-4a68-bae1-b6fc22348d0c",
    ],
    bottom: "a4ac2115-372f-4448-ac0f-7de24101196a",
    right: "a27273dd-688d-4579-82ff-c9c1e1b5e7ff",
    area: "HawaiianIslands",
  },
  {
    id: "a27273dd-688d-4579-82ff-c9c1e1b5e7ff",
    name: "TreasureField",
    position: {
      x: 6940,
      y: 3820,
    },
    edges: [
      "66208d07-a2c3-4a68-bae1-b6fc22348d0c",
      "3072cbaa-2a7e-4fc0-84c5-658e453b17bd",
    ],
    left: "f3bcea10-8802-4252-9f7b-7cd3b2e02ed8",
    top: "d1d2b4d7-be08-4a95-ac9d-5e227189b6b8",
    area: "HawaiianIslands",
  },
  {
    id: "d1d2b4d7-be08-4a95-ac9d-5e227189b6b8",
    name: "BattleField",
    position: {
      x: 6880,
      y: 3500,
    },
    edges: [
      "3072cbaa-2a7e-4fc0-84c5-658e453b17bd",
      "85b8b2e8-b185-4199-ac92-da393b846313",
    ],
    bottom: "a27273dd-688d-4579-82ff-c9c1e1b5e7ff",
    top: "d0a1d19a-b099-4e7d-b1f3-db04defe95b9",
    area: "HawaiianIslands",
  },
  {
    id: "d0a1d19a-b099-4e7d-b1f3-db04defe95b9",
    name: "BattleField",
    position: {
      x: 6940,
      y: 3220,
    },
    edges: [
      "85b8b2e8-b185-4199-ac92-da393b846313",
      "4d18b375-6448-4f70-80a9-bb87a9b366b3",
    ],
    bottom: "d1d2b4d7-be08-4a95-ac9d-5e227189b6b8",
    left: "a7c94a71-b69f-4a25-a26e-b1a458062d15",
    area: "HawaiianIslands",
  },
  {
    id: "a7c94a71-b69f-4a25-a26e-b1a458062d15",
    name: "MagicBookField",
    position: {
      x: 6660,
      y: 3220,
    },
    edges: [
      "4d18b375-6448-4f70-80a9-bb87a9b366b3",
      "ed5cd8e1-9a1a-4046-99a7-3c2e6a9de5df",
    ],
    right: "d0a1d19a-b099-4e7d-b1f3-db04defe95b9",
    top: "13244992-cde2-4cd4-af68-3eaad6291aef",
    area: "HawaiianIslands",
  },
  {
    id: "13244992-cde2-4cd4-af68-3eaad6291aef",
    name: "BattleField",
    position: {
      x: 6640,
      y: 2920,
    },
    edges: [
      "ed5cd8e1-9a1a-4046-99a7-3c2e6a9de5df",
      "ce872b67-9af5-4d4e-84a9-cde880694942",
    ],
    bottom: "a7c94a71-b69f-4a25-a26e-b1a458062d15",
    top: "38fa95ba-9ce7-471a-9f05-b37437481829",
    area: "HawaiianIslands",
  },
  {
    id: "38fa95ba-9ce7-471a-9f05-b37437481829",
    name: "BattleField",
    position: {
      x: 6740,
      y: 2620,
    },
    edges: [
      "ce872b67-9af5-4d4e-84a9-cde880694942",
      "7fbadc15-58f0-4052-8bb6-7822c2c320d6",
    ],
    bottom: "13244992-cde2-4cd4-af68-3eaad6291aef",
    right: "fdfe3d97-8b67-4255-a247-a3b6626c0579",
    area: "HawaiianIslands",
  },
  {
    id: "fdfe3d97-8b67-4255-a247-a3b6626c0579",
    name: "RedTreasureField",
    position: {
      x: 7060,
      y: 2600,
    },
    edges: [
      "7fbadc15-58f0-4052-8bb6-7822c2c320d6",
      "7a3e54a5-51a8-406f-972a-c69d5ab7acba",
    ],
    left: "38fa95ba-9ce7-471a-9f05-b37437481829",
    right: "2d22097e-6403-4db0-a1e3-2afdc3f97804",
    area: "HawaiianIslands",
  },
  {
    id: "2d22097e-6403-4db0-a1e3-2afdc3f97804",
    name: "BattleField",
    position: {
      x: 7360,
      y: 2640,
    },
    edges: [
      "7a3e54a5-51a8-406f-972a-c69d5ab7acba",
      "097b76f1-f9a0-439b-a036-d6426b73fb87",
    ],
    left: "fdfe3d97-8b67-4255-a247-a3b6626c0579",
    top: "80f38e71-8800-4092-a662-298decdb1882",
    area: "HawaiianIslands",
  },
  {
    id: "80f38e71-8800-4092-a662-298decdb1882",
    name: "BattleField",
    position: {
      x: 7400,
      y: 2380,
    },
    edges: [
      "097b76f1-f9a0-439b-a036-d6426b73fb87",
      "c70bf46c-76e0-4d81-bcc9-54ed15ec5e6e",
    ],
    bottom: "2d22097e-6403-4db0-a1e3-2afdc3f97804",
    right: "09609bef-e331-4efa-8a47-e5409f9040a1",
    area: "HawaiianIslands",
  },
  {
    id: "09609bef-e331-4efa-8a47-e5409f9040a1",
    name: "MagicBookField",
    position: {
      x: 7680,
      y: 2380,
    },
    edges: [
      "c70bf46c-76e0-4d81-bcc9-54ed15ec5e6e",
      "ff0d2e8a-080d-43f1-9ab6-d5470497ce96",
      "c00ca638-aa9a-495c-9b50-1df8b09d419b",
    ],
    left: "80f38e71-8800-4092-a662-298decdb1882",
    right: "70e01e2b-1fe4-437e-92b2-42513c3e5524",
    bottom: "9a1c0109-dfe3-43b7-a8a1-b4c926343ffb",
    area: "HawaiianIslands",
  },
  {
    id: "70e01e2b-1fe4-437e-92b2-42513c3e5524",
    name: "BattleField",
    position: {
      x: 7920,
      y: 2340,
    },
    edges: [
      "ff0d2e8a-080d-43f1-9ab6-d5470497ce96",
      "fe82ad4e-bdf6-4dcf-9b10-df3f6f849672",
    ],
    left: "09609bef-e331-4efa-8a47-e5409f9040a1",
    right: "ffd1b0ae-0872-41fc-899e-f40580c7fbca",
    area: "HawaiianIslands",
  },
  {
    id: "ffd1b0ae-0872-41fc-899e-f40580c7fbca",
    name: "BattleField",
    position: {
      x: 8160,
      y: 2380,
    },
    edges: [
      "fe82ad4e-bdf6-4dcf-9b10-df3f6f849672",
      "bebf3d0c-957d-4c51-964f-da98827c0206",
    ],
    left: "70e01e2b-1fe4-437e-92b2-42513c3e5524",
    bottom: "b64ac266-aeed-4e2b-b702-0fb8cc39f3fc",
    area: "HawaiianIslands",
  },
  {
    id: "b64ac266-aeed-4e2b-b702-0fb8cc39f3fc",
    name: "BattleField",
    position: {
      x: 8180,
      y: 2720,
    },
    edges: [
      "bebf3d0c-957d-4c51-964f-da98827c0206",
      "b90c9bf9-2e0f-4506-aa41-174aae62c65b",
      "c1260fee-57da-4160-b791-886e561e1a8f",
    ],
    top: "ffd1b0ae-0872-41fc-899e-f40580c7fbca",
    left: "9a1c0109-dfe3-43b7-a8a1-b4c926343ffb",
    bottom: "1bcf7c80-990f-4360-ac2a-9c5a9a1444fa",
    area: "HawaiianIslands",
  },
  {
    id: "9a1c0109-dfe3-43b7-a8a1-b4c926343ffb",
    name: "BattleField",
    position: {
      x: 7700,
      y: 2700,
    },
    edges: [
      "c00ca638-aa9a-495c-9b50-1df8b09d419b",
      "b90c9bf9-2e0f-4506-aa41-174aae62c65b",
    ],
    top: "09609bef-e331-4efa-8a47-e5409f9040a1",
    right: "b64ac266-aeed-4e2b-b702-0fb8cc39f3fc",
    area: "HawaiianIslands",
  },
  {
    id: "1bcf7c80-990f-4360-ac2a-9c5a9a1444fa",
    name: "RedTreasureField",
    position: {
      x: 8140,
      y: 2980,
    },
    edges: [
      "c1260fee-57da-4160-b791-886e561e1a8f",
      "6f0367af-f77a-463a-b406-da4ec57bd274",
    ],
    top: "b64ac266-aeed-4e2b-b702-0fb8cc39f3fc",
    left: "11a7477b-c9ca-447e-a9f6-663d242561e8",
    area: "HawaiianIslands",
  },
  {
    id: "11a7477b-c9ca-447e-a9f6-663d242561e8",
    name: "BattleField",
    position: {
      x: 7700,
      y: 3040,
    },
    edges: [
      "6f0367af-f77a-463a-b406-da4ec57bd274",
      "f7bf274f-d42c-4fb3-8cb0-41f5cf139c05",
    ],
    right: "1bcf7c80-990f-4360-ac2a-9c5a9a1444fa",
    bottom: "89807f00-8f8a-427e-a8b9-28e313cb62f5",
    area: "HawaiianIslands",
  },
  {
    id: "89807f00-8f8a-427e-a8b9-28e313cb62f5",
    name: "BattleField",
    position: {
      x: 7640,
      y: 3300,
    },
    edges: [
      "f7bf274f-d42c-4fb3-8cb0-41f5cf139c05",
      "83f464bd-b118-44f9-aeee-42830174c1d0",
    ],
    top: "11a7477b-c9ca-447e-a9f6-663d242561e8",
    left: "ba13a2f3-602c-4ab7-8918-cef38a9ebeb2",
    area: "HawaiianIslands",
  },
  {
    id: "ba13a2f3-602c-4ab7-8918-cef38a9ebeb2",
    name: "BattleField",
    position: {
      x: 7300,
      y: 3320,
    },
    edges: [
      "83f464bd-b118-44f9-aeee-42830174c1d0",
      "08c89b10-cc1f-4781-8643-8a7389737262",
    ],
    right: "89807f00-8f8a-427e-a8b9-28e313cb62f5",
    bottom: "dea4f473-0db5-4010-abde-0b79535f543e",
    area: "HawaiianIslands",
  },
  {
    id: "dea4f473-0db5-4010-abde-0b79535f543e",
    name: "BattleField",
    position: {
      x: 7260,
      y: 3560,
    },
    edges: [
      "08c89b10-cc1f-4781-8643-8a7389737262",
      "0d51efb4-1022-46e1-becc-93fd26a22f89",
    ],
    top: "ba13a2f3-602c-4ab7-8918-cef38a9ebeb2",
    left: "0c7ca890-0948-425f-aaa8-d450a6f19798",
    area: "HawaiianIslands",
  },
  {
    id: "0c7ca890-0948-425f-aaa8-d450a6f19798",
    name: "WorldTransferField",
    position: {
      x: 7040,
      y: 3600,
    },
    edges: ["0d51efb4-1022-46e1-becc-93fd26a22f89"],
    right: "dea4f473-0db5-4010-abde-0b79535f543e",
    area: "HawaiianIslands",
  },
];
const atlantisVertices: Vertex[] = [
  {
    id: "9317f67d-8210-4035-b06f-a72a5dd89acc",
    name: "RedTreasureField",
    position: {
      x: 12920,
      y: 3960,
    },
    edges: [
      "5ec5cbb2-fdb4-43ff-9e4f-f2f238004431",
      "a2025091-2212-429d-8586-242103514491",
    ],
    area: "Atlantis",
    top: "aae2494b-ca25-4d4f-baa3-d362ecc7c8c7",
    left: "8a1cbbe7-703c-4ec6-bff9-d84148dfc97c",
  },
  {
    id: "aae2494b-ca25-4d4f-baa3-d362ecc7c8c7",
    name: "KeyTreasureField",
    position: {
      x: 12980,
      y: 3440,
    },
    edges: [
      "5ec5cbb2-fdb4-43ff-9e4f-f2f238004431",
      "ea18713a-adb9-437a-9bdd-4b712889cdbc",
    ],
    area: "Atlantis",
    bottom: "9317f67d-8210-4035-b06f-a72a5dd89acc",
    left: "2703f796-cad8-4e10-8b8b-16d2867229ed",
  },
  {
    id: "8a1cbbe7-703c-4ec6-bff9-d84148dfc97c",
    name: "MagicBookField",
    position: {
      x: 12480,
      y: 3940,
    },
    edges: [
      "a2025091-2212-429d-8586-242103514491",
      "6d79bea7-a944-40df-9325-ddc1714503ab",
    ],
    area: "Atlantis",
    right: "9317f67d-8210-4035-b06f-a72a5dd89acc",
    left: "9eeaa88f-9b54-49b8-a831-6cbe73b0996a",
  },
  {
    id: "9eeaa88f-9b54-49b8-a831-6cbe73b0996a",
    name: "KeyTreasureField",
    position: {
      x: 12080,
      y: 3960,
    },
    edges: [
      "6d79bea7-a944-40df-9325-ddc1714503ab",
      "c9996b4f-88ec-49fd-abec-7b00aacfa45b",
    ],
    area: "Atlantis",
    right: "8a1cbbe7-703c-4ec6-bff9-d84148dfc97c",
    top: "82cd2b2f-fbb3-490f-a528-31be3b29a97b",
  },
  {
    id: "82cd2b2f-fbb3-490f-a528-31be3b29a97b",
    name: "WorldTransferField",
    position: {
      x: 12000,
      y: 3680,
    },
    edges: [
      "c9996b4f-88ec-49fd-abec-7b00aacfa45b",
      "74387f3d-5797-435a-ab74-bb123ffa1088",
    ],
    area: "Atlantis",
    bottom: "9eeaa88f-9b54-49b8-a831-6cbe73b0996a",
    top: "7784cb7a-d461-4a46-bc7b-c17b20067e08",
  },
  {
    id: "7784cb7a-d461-4a46-bc7b-c17b20067e08",
    name: "WhiteTreasureField",
    position: {
      x: 12080,
      y: 3420,
    },
    edges: [
      "74387f3d-5797-435a-ab74-bb123ffa1088",
      "cebdb1fc-27df-4c7d-b71a-675cab6ba1e8",
    ],
    area: "Atlantis",
    bottom: "82cd2b2f-fbb3-490f-a528-31be3b29a97b",
    right: "2703f796-cad8-4e10-8b8b-16d2867229ed",
  },
  {
    id: "2703f796-cad8-4e10-8b8b-16d2867229ed",
    name: "TreasureField",
    position: {
      x: 12500,
      y: 3400,
    },
    edges: [
      "cebdb1fc-27df-4c7d-b71a-675cab6ba1e8",
      "ea18713a-adb9-437a-9bdd-4b712889cdbc",
    ],
    area: "Atlantis",
    left: "7784cb7a-d461-4a46-bc7b-c17b20067e08",
    right: "aae2494b-ca25-4d4f-baa3-d362ecc7c8c7",
  },
];

const dokaponTheWorldMap: GraphJSON = {
  vertices: [
    ...asiaVertices,
    ...europeVertices,
    ...russiaVertices,
    ...northAmericaVertices,
    ...southAmericaVertices,
    ...oceaniaVertices,
    ...africaVertices,
    ...arcticVertices,
    ...antarcticaVertices,
    ...hawaiianIslandsVertices,
    ...atlantisVertices,
  ],
  edges: [
    {
      start: {
        x: 880,
        y: 3520,
      },
      end: {
        x: 880,
        y: 3680,
      },
      id: "32054d0d-0fd6-4e11-b211-9bebcb48d68c",
      name: "TwoWayVEdge",
      startId: "950ad97b-5e35-487a-8aac-c67eb37eeb19",
      endId: "08857627-5a03-435c-9484-8367c9e71863",
    },
    {
      start: {
        x: 3700,
        y: 2420,
      },
      end: {
        x: 3700,
        y: 2680,
      },
      id: "b37717cb-303b-4755-884b-ca8031828f6d",
      name: "TwoWayVEdge",
      startId: "af8cc9f3-5031-49ff-92ee-6b2da5bd5dc0",
      endId: "46da86e3-e7b7-44b5-93d4-2abf4b99cbd9",
    },
    {
      start: {
        x: 3700,
        y: 2680,
      },
      end: {
        x: 3700,
        y: 2960,
      },
      id: "47230d0e-35d9-4aac-8874-0556133b5a6c",
      name: "TwoWayVEdge",
      startId: "46da86e3-e7b7-44b5-93d4-2abf4b99cbd9",
      endId: "bdf4770f-6e87-40ae-8c68-271a9490b71f",
    },
    {
      start: {
        x: 3700,
        y: 2420,
      },
      end: {
        x: 3900,
        y: 2420,
      },
      id: "0e3a4ef2-275e-4686-98a2-ec9d4f0f9429",
      name: "TwoWayHEdge",
      startId: "af8cc9f3-5031-49ff-92ee-6b2da5bd5dc0",
      endId: "323ac0c1-03ac-4db2-828f-ac2afff386cd",
    },
    {
      start: {
        x: 3900,
        y: 2420,
      },
      end: {
        x: 3900,
        y: 2260,
      },
      id: "9d9fd583-e90a-4ccc-993b-8ffcbd1c805a",
      name: "TwoWayVEdge",
      startId: "323ac0c1-03ac-4db2-828f-ac2afff386cd",
      endId: "a5aa39c5-95eb-4130-8389-08b72b243190",
    },
    {
      start: {
        x: 3900,
        y: 2260,
      },
      end: {
        x: 4140,
        y: 2260,
      },
      id: "cc8b596f-825f-41dd-b8f7-c62d6e1ce6ef",
      name: "TwoWayHEdge",
      startId: "a5aa39c5-95eb-4130-8389-08b72b243190",
      endId: "d016ba22-1124-49d8-b41d-32850b048589",
    },
    {
      start: {
        x: 860,
        y: 140,
      },
      end: {
        x: 880,
        y: 340,
      },
      id: "26522ab0-719c-4def-ad30-9efc6e2d3555",
      name: "TwoWayVEdge",
      startId: "209c7458-6352-4402-813a-94c83c86f148",
      endId: "01f09c6a-5a2d-4a3f-9ab5-3afb21489ce5",
    },
    {
      start: {
        x: 880,
        y: 340,
      },
      end: {
        x: 880,
        y: 520,
      },
      id: "1a1376c6-7ff7-468a-a83d-7aad4018ba83",
      name: "TwoWayVEdge",
      startId: "01f09c6a-5a2d-4a3f-9ab5-3afb21489ce5",
      endId: "d3bff27b-bf42-48fb-b540-503010b5adb2",
    },
    {
      start: {
        x: 880,
        y: 520,
      },
      end: {
        x: 880,
        y: 680,
      },
      id: "f51e4b52-ebb9-48fa-ac23-9647e4278528",
      name: "TwoWayVEdge",
      startId: "d3bff27b-bf42-48fb-b540-503010b5adb2",
      endId: "09b06f97-6f64-488e-8ace-f011f92116c8",
    },
    {
      start: {
        x: 640,
        y: 680,
      },
      end: {
        x: 880,
        y: 680,
      },
      id: "76540d8c-e85d-47ef-a47e-b8fca48c4d76",
      name: "TwoWayHEdge",
      startId: "ab2686f1-3e02-45c1-ab19-c6e00c1e9053",
      endId: "09b06f97-6f64-488e-8ace-f011f92116c8",
    },
    {
      start: {
        x: 440,
        y: 340,
      },
      end: {
        x: 880,
        y: 340,
      },
      id: "e47da2b5-c818-4c1d-8e24-555e8a5a0c2b",
      name: "TwoWayHEdge",
      startId: "aa84da87-c53e-4c92-8e16-2076f867ce90",
      endId: "01f09c6a-5a2d-4a3f-9ab5-3afb21489ce5",
    },
    {
      start: {
        x: 440,
        y: 340,
      },
      end: {
        x: 440,
        y: 580,
      },
      id: "8cad8240-0089-437a-85d4-b279f700d3db",
      name: "TwoWayVEdge",
      startId: "aa84da87-c53e-4c92-8e16-2076f867ce90",
      endId: "854a0203-0015-4265-ba94-c09271262856",
    },
    {
      start: {
        x: 440,
        y: 580,
      },
      end: {
        x: 440,
        y: 800,
      },
      id: "f4f7580d-67e6-48ca-b761-3fd48efaf99a",
      name: "TwoWayVEdge",
      startId: "854a0203-0015-4265-ba94-c09271262856",
      endId: "4e8f733b-cdf7-4b67-b2e4-bcf24b6a7f34",
    },
    {
      start: {
        x: 440,
        y: 800,
      },
      end: {
        x: 600,
        y: 800,
      },
      id: "2a1ac21a-774d-4eb7-8052-f541adcb758c",
      name: "TwoWayHEdge",
      startId: "4e8f733b-cdf7-4b67-b2e4-bcf24b6a7f34",
      endId: "28c5bb85-afed-4b3e-94b4-6e1d40220545",
    },
    {
      start: {
        x: 640,
        y: 680,
      },
      end: {
        x: 600,
        y: 800,
      },
      id: "f73c1a1c-b130-4c90-99aa-a4d75b29a6aa",
      name: "TwoWayVEdge",
      startId: "ab2686f1-3e02-45c1-ab19-c6e00c1e9053",
      endId: "28c5bb85-afed-4b3e-94b4-6e1d40220545",
    },
    {
      start: {
        x: 600,
        y: 800,
      },
      end: {
        x: 780,
        y: 800,
      },
      id: "907484d8-8600-4eca-be4a-e6ac2cd2885e",
      name: "TwoWayHEdge",
      startId: "28c5bb85-afed-4b3e-94b4-6e1d40220545",
      endId: "b851246e-78ea-47a3-b8ac-5aeba787cdeb",
    },
    {
      start: {
        x: 780,
        y: 800,
      },
      end: {
        x: 1000,
        y: 800,
      },
      id: "3a4b1770-2923-4aed-b2b5-ad5439113148",
      name: "TwoWayHEdge",
      startId: "b851246e-78ea-47a3-b8ac-5aeba787cdeb",
      endId: "97ce3959-09de-4ffe-a298-37e4732e5269",
    },
    {
      start: {
        x: 3700,
        y: 2960,
      },
      end: {
        x: 3900,
        y: 2960,
      },
      id: "b25d9bd0-ac89-48cb-b635-d5dfc6b66320",
      name: "TwoWayHEdge",
      startId: "bdf4770f-6e87-40ae-8c68-271a9490b71f",
      endId: "302a4d3b-aab8-4d87-b8ca-9a23c353b740",
    },
    {
      start: {
        x: 3900,
        y: 2960,
      },
      end: {
        x: 4140,
        y: 2960,
      },
      id: "fcbb2913-33f6-4f47-8b35-e2ea7d381f97",
      name: "TwoWayHEdge",
      startId: "302a4d3b-aab8-4d87-b8ca-9a23c353b740",
      endId: "6336deca-2bf1-4afe-90f4-6d371195be4c",
    },
    {
      start: {
        x: 3900,
        y: 2820,
      },
      end: {
        x: 3900,
        y: 2960,
      },
      id: "dcc4d879-65fc-4c5c-8a8c-494b4916ac91",
      name: "TwoWayVEdge",
      startId: "07a30e7d-f8b4-4982-9b03-29c2677b2a13",
      endId: "302a4d3b-aab8-4d87-b8ca-9a23c353b740",
    },
    {
      start: {
        x: 4140,
        y: 2820,
      },
      end: {
        x: 4140,
        y: 2960,
      },
      id: "d6f7e812-8e11-4e0f-bd9b-c9f9b4dc909a",
      name: "TwoWayVEdge",
      startId: "8d6ba350-64b0-430f-844a-959b5f769f76",
      endId: "6336deca-2bf1-4afe-90f4-6d371195be4c",
    },
    {
      start: {
        x: 440,
        y: 800,
      },
      end: {
        x: 440,
        y: 1140,
      },
      id: "6a88975b-3875-47a1-b598-202a497844ba",
      name: "TwoWayVEdge",
      startId: "4e8f733b-cdf7-4b67-b2e4-bcf24b6a7f34",
      endId: "9b9cf06e-1ab1-4983-852f-6bcda421291f",
    },
    {
      start: {
        x: 3900,
        y: 2820,
      },
      end: {
        x: 4020,
        y: 2820,
      },
      id: "ee87f914-bc04-448c-84ed-feadc4a57cb1",
      name: "TwoWayHEdge",
      startId: "07a30e7d-f8b4-4982-9b03-29c2677b2a13",
      endId: "1e24287d-43fe-4f5a-9f74-fd2dc1f5cc0c",
    },
    {
      start: {
        x: 440,
        y: 1140,
      },
      end: {
        x: 620,
        y: 1140,
      },
      id: "83c16615-50a8-4569-a1a6-54d69633dad1",
      name: "TwoWayHEdge",
      startId: "9b9cf06e-1ab1-4983-852f-6bcda421291f",
      endId: "28f37596-1abd-440b-a398-5784dff127f3",
    },
    {
      start: {
        x: 4020,
        y: 2820,
      },
      end: {
        x: 4140,
        y: 2820,
      },
      id: "cbb8c2a0-1cbf-43e2-ba2f-396626ea9041",
      name: "TwoWayHEdge",
      startId: "1e24287d-43fe-4f5a-9f74-fd2dc1f5cc0c",
      endId: "8d6ba350-64b0-430f-844a-959b5f769f76",
    },
    {
      start: {
        x: 620,
        y: 1140,
      },
      end: {
        x: 800,
        y: 1140,
      },
      id: "196da66b-4cfb-448f-b2ac-2a924ebcabaa",
      name: "TwoWayHEdge",
      startId: "28f37596-1abd-440b-a398-5784dff127f3",
      endId: "196cdd4c-f5d3-4945-af4d-292d2f6045b2",
    },
    {
      start: {
        x: 3900,
        y: 2600,
      },
      end: {
        x: 3900,
        y: 2820,
      },
      id: "194623f7-8e84-4fb9-b985-858037837a90",
      name: "TwoWayVEdge",
      startId: "2c7b565a-345b-4c49-9020-4016c2b1212b",
      endId: "07a30e7d-f8b4-4982-9b03-29c2677b2a13",
    },
    {
      start: {
        x: 800,
        y: 1140,
      },
      end: {
        x: 800,
        y: 1420,
      },
      id: "4826cdd1-ddaa-4324-adbc-e58e331966e1",
      name: "TwoWayVEdge",
      startId: "196cdd4c-f5d3-4945-af4d-292d2f6045b2",
      endId: "b48e440d-aff0-436f-bb3e-669232a54165",
    },
    {
      start: {
        x: 4140,
        y: 2620,
      },
      end: {
        x: 4140,
        y: 2820,
      },
      id: "53b4940c-ba4a-4fce-9dc5-223253014afb",
      name: "TwoWayVEdge",
      startId: "66267139-47f3-47d2-8840-7b389f19aaee",
      endId: "8d6ba350-64b0-430f-844a-959b5f769f76",
    },
    {
      start: {
        x: 620,
        y: 1140,
      },
      end: {
        x: 620,
        y: 1280,
      },
      id: "ab91ad1f-a7d4-4254-982e-c340a0927917",
      name: "TwoWayVEdge",
      startId: "28f37596-1abd-440b-a398-5784dff127f3",
      endId: "e0312520-47b3-4ce7-a13e-f6a6c4574adf",
    },
    {
      start: {
        x: 620,
        y: 1280,
      },
      end: {
        x: 620,
        y: 1420,
      },
      id: "a3b6aed3-a458-4ced-99af-5adca4d3f4b1",
      name: "TwoWayVEdge",
      startId: "e0312520-47b3-4ce7-a13e-f6a6c4574adf",
      endId: "bddcc986-fd56-4de9-8f1a-bc1185d45138",
    },
    {
      start: {
        x: 620,
        y: 1420,
      },
      end: {
        x: 800,
        y: 1420,
      },
      id: "a00c899f-7ff4-4bf4-8d37-12f422c5d5db",
      name: "TwoWayHEdge",
      startId: "bddcc986-fd56-4de9-8f1a-bc1185d45138",
      endId: "b48e440d-aff0-436f-bb3e-669232a54165",
    },
    {
      start: {
        x: 4300,
        y: 2420,
      },
      end: {
        x: 4300,
        y: 2620,
      },
      id: "9ec01a37-e980-4270-91ce-f0cef5211b7d",
      name: "TwoWayVEdge",
      startId: "5a43a908-fe8b-4f09-bac0-4650767b92af",
      endId: "63d77f19-376a-4994-9dbf-810eef7008ea",
    },
    {
      start: {
        x: 800,
        y: 1140,
      },
      end: {
        x: 1060,
        y: 1140,
      },
      id: "3b62f753-9c54-4b82-9c07-f55ddeaffc64",
      name: "TwoWayHEdge",
      startId: "196cdd4c-f5d3-4945-af4d-292d2f6045b2",
      endId: "a728f48e-5334-45b1-96c9-26528956693e",
    },
    {
      start: {
        x: 4300,
        y: 2620,
      },
      end: {
        x: 4300,
        y: 2780,
      },
      id: "d5173463-aede-494d-a054-2669618a23e4",
      name: "TwoWayVEdge",
      startId: "63d77f19-376a-4994-9dbf-810eef7008ea",
      endId: "ca81f639-f7b8-47f7-9470-9ae602d7157c",
    },
    {
      start: {
        x: 800,
        y: 1420,
      },
      end: {
        x: 1000,
        y: 1420,
      },
      id: "93231771-2f9a-435a-af23-c2a8bdc7b9d2",
      name: "TwoWayHEdge",
      startId: "b48e440d-aff0-436f-bb3e-669232a54165",
      endId: "f3fd7be7-9fc5-4604-bbed-0e0dd3947acd",
    },
    {
      start: {
        x: 4300,
        y: 2780,
      },
      end: {
        x: 4480,
        y: 2780,
      },
      id: "5412d6a6-bec8-4210-9f63-5b9697d8aceb",
      name: "TwoWayHEdge",
      startId: "ca81f639-f7b8-47f7-9470-9ae602d7157c",
      endId: "cf14f654-3d72-4917-8d61-f30cac68f24a",
    },
    {
      start: {
        x: 1000,
        y: 1420,
      },
      end: {
        x: 1200,
        y: 1420,
      },
      id: "22446bda-05a5-45e0-8b4c-b0e0121ca26d",
      name: "TwoWayHEdge",
      startId: "f3fd7be7-9fc5-4604-bbed-0e0dd3947acd",
      endId: "c504f16d-bc4c-4746-8ad9-d3f73085e508",
    },
    {
      start: {
        x: 4140,
        y: 2260,
      },
      end: {
        x: 4300,
        y: 2260,
      },
      id: "a215feee-44f8-4723-bb3b-6e965696f5ca",
      name: "TwoWayHEdge",
      startId: "d016ba22-1124-49d8-b41d-32850b048589",
      endId: "5abbabec-0e8d-4d11-835c-1095ded5f143",
    },
    {
      start: {
        x: 800,
        y: 1580,
      },
      end: {
        x: 1200,
        y: 1580,
      },
      id: "1f659a7a-e00e-4d05-8b61-61cd15f0cecc",
      name: "TwoWayHEdge",
      startId: "912c8abc-c245-4401-b4b1-ddfa882a9891",
      endId: "fea85e6d-98e6-4426-969c-7515e31bd416",
    },
    {
      start: {
        x: 800,
        y: 1420,
      },
      end: {
        x: 800,
        y: 1580,
      },
      id: "112d6f45-b5fb-42cc-8005-306361c3086c",
      name: "TwoWayVEdge",
      startId: "b48e440d-aff0-436f-bb3e-669232a54165",
      endId: "912c8abc-c245-4401-b4b1-ddfa882a9891",
    },
    {
      start: {
        x: 4480,
        y: 2620,
      },
      end: {
        x: 4480,
        y: 2780,
      },
      id: "76837454-f587-41b0-95cc-f27f0126e582",
      name: "TwoWayVEdge",
      startId: "7e02e76b-8750-4d8f-8a4b-7a154726be9a",
      endId: "cf14f654-3d72-4917-8d61-f30cac68f24a",
    },
    {
      start: {
        x: 1200,
        y: 1420,
      },
      end: {
        x: 1200,
        y: 1580,
      },
      id: "d946961d-1493-424b-b0e7-77bb3dc63b0b",
      name: "TwoWayVEdge",
      startId: "c504f16d-bc4c-4746-8ad9-d3f73085e508",
      endId: "fea85e6d-98e6-4426-969c-7515e31bd416",
    },
    {
      start: {
        x: 4480,
        y: 2620,
      },
      end: {
        x: 4800,
        y: 2620,
      },
      id: "448bf614-ae94-4331-bd2f-9afc035705ea",
      name: "TwoWayHEdge",
      startId: "7e02e76b-8750-4d8f-8a4b-7a154726be9a",
      endId: "9bd4ebd7-09ba-40ad-9b96-82f955d817de",
    },
    {
      start: {
        x: 4800,
        y: 2620,
      },
      end: {
        x: 4800,
        y: 2780,
      },
      id: "42e9f286-fef9-4490-a9ab-36afd5219004",
      name: "TwoWayVEdge",
      startId: "9bd4ebd7-09ba-40ad-9b96-82f955d817de",
      endId: "d543f24e-cd46-418e-8cb3-56b3b665d958",
    },
    {
      start: {
        x: 4480,
        y: 2780,
      },
      end: {
        x: 4640,
        y: 2780,
      },
      id: "f85365e6-4557-47a0-87fe-ec3c6edf1e9c",
      name: "TwoWayHEdge",
      startId: "cf14f654-3d72-4917-8d61-f30cac68f24a",
      endId: "11e7f68c-47e9-4fe8-ae9b-59ef53bdf831",
    },
    {
      start: {
        x: 4640,
        y: 2780,
      },
      end: {
        x: 4800,
        y: 2780,
      },
      id: "86c439fc-20d5-48b7-aaa6-217744777074",
      name: "TwoWayHEdge",
      startId: "11e7f68c-47e9-4fe8-ae9b-59ef53bdf831",
      endId: "d543f24e-cd46-418e-8cb3-56b3b665d958",
    },
    {
      start: {
        x: 4660,
        y: 2260,
      },
      end: {
        x: 4860,
        y: 2260,
      },
      id: "929dde8e-a08f-4065-835f-3938b51047a1",
      name: "TwoWayHEdge",
      startId: "99264c2f-3462-420d-b85c-3cbe79ce6d51",
      endId: "dee44942-a905-40aa-922c-5fbd2ce35504",
    },
    {
      start: {
        x: 1060,
        y: 1140,
      },
      end: {
        x: 1260,
        y: 1140,
      },
      id: "22c11943-8c76-42d8-9012-5fc374f944b9",
      name: "TwoWayHEdge",
      startId: "a728f48e-5334-45b1-96c9-26528956693e",
      endId: "a02d45a0-23f1-467d-ae2e-d49983b03017",
    },
    {
      start: {
        x: 1260,
        y: 1140,
      },
      end: {
        x: 1500,
        y: 1140,
      },
      id: "fa1c224d-f2ce-49b2-a9c3-4e7b7524b826",
      name: "TwoWayHEdge",
      startId: "a02d45a0-23f1-467d-ae2e-d49983b03017",
      endId: "b6cede47-5721-42d7-8e36-84124cf74471",
    },
    {
      start: {
        x: 1500,
        y: 1140,
      },
      end: {
        x: 1720,
        y: 1140,
      },
      id: "80faaa8b-d2ee-4c4d-bc3b-cb146fd81329",
      name: "TwoWayHEdge",
      startId: "b6cede47-5721-42d7-8e36-84124cf74471",
      endId: "9c4c6c3e-61b1-4d59-8eda-95069de694d1",
    },
    {
      start: {
        x: 1720,
        y: 1140,
      },
      end: {
        x: 1960,
        y: 1140,
      },
      id: "0def50c6-2eff-4838-a150-2dbe53af0878",
      name: "TwoWayHEdge",
      startId: "9c4c6c3e-61b1-4d59-8eda-95069de694d1",
      endId: "ba424a26-dceb-4989-bc59-ca60c07ac6f4",
    },
    {
      start: {
        x: 4860,
        y: 2260,
      },
      end: {
        x: 4860,
        y: 2420,
      },
      id: "cafd1178-4228-4dab-a6a6-51f4c756057c",
      name: "TwoWayVEdge",
      startId: "dee44942-a905-40aa-922c-5fbd2ce35504",
      endId: "f4f16cd2-3467-426d-9642-75de10d56ba5",
    },
    {
      start: {
        x: 1500,
        y: 1140,
      },
      end: {
        x: 1500,
        y: 1320,
      },
      id: "7b916f66-788b-43cc-93be-d6f3d06a922f",
      name: "TwoWayVEdge",
      startId: "b6cede47-5721-42d7-8e36-84124cf74471",
      endId: "063e1eae-4be1-4c40-995b-7f1ba1680ae6",
    },
    {
      start: {
        x: 4860,
        y: 2260,
      },
      end: {
        x: 5040,
        y: 2260,
      },
      id: "ee51f43f-854c-41f1-8669-5957370e33fe",
      name: "TwoWayHEdge",
      startId: "dee44942-a905-40aa-922c-5fbd2ce35504",
      endId: "9df16f11-ecf8-4bc2-9b19-2393d31410cc",
    },
    {
      start: {
        x: 1960,
        y: 1140,
      },
      end: {
        x: 1960,
        y: 1320,
      },
      id: "f4875da7-036c-4fa8-86bc-c13cc0e7f216",
      name: "TwoWayVEdge",
      startId: "ba424a26-dceb-4989-bc59-ca60c07ac6f4",
      endId: "8f0cf0ff-55fa-4e1c-9b17-cf7e5080be99",
    },
    {
      start: {
        x: 5040,
        y: 2260,
      },
      end: {
        x: 5220,
        y: 2260,
      },
      id: "5b04172e-a4fd-4588-9312-a37644fc539c",
      name: "TwoWayHEdge",
      startId: "9df16f11-ecf8-4bc2-9b19-2393d31410cc",
      endId: "f634153b-d320-4e0b-ab65-40383cf6fba8",
    },
    {
      start: {
        x: 1500,
        y: 1320,
      },
      end: {
        x: 1960,
        y: 1320,
      },
      id: "2283f8f1-58a3-4286-9369-61c2e3376202",
      name: "TwoWayHEdge",
      startId: "063e1eae-4be1-4c40-995b-7f1ba1680ae6",
      endId: "8f0cf0ff-55fa-4e1c-9b17-cf7e5080be99",
    },
    {
      start: {
        x: 5220,
        y: 2260,
      },
      end: {
        x: 5220,
        y: 2420,
      },
      id: "3667ee88-8b1e-49cc-a0f9-92da2f3b209f",
      name: "TwoWayVEdge",
      startId: "f634153b-d320-4e0b-ab65-40383cf6fba8",
      endId: "29a17b86-6a0b-4f1e-b312-5db62ec89be8",
    },
    {
      start: {
        x: 1260,
        y: 960,
      },
      end: {
        x: 1260,
        y: 1140,
      },
      id: "ca605d0a-d125-461f-9858-e1e0b881b290",
      name: "TwoWayVEdge",
      startId: "2f8744a9-4acc-40fe-88ee-a5536b881155",
      endId: "a02d45a0-23f1-467d-ae2e-d49983b03017",
    },
    {
      start: {
        x: 4860,
        y: 2420,
      },
      end: {
        x: 5220,
        y: 2420,
      },
      id: "691bffaa-6474-462a-874e-5fe59560307b",
      name: "TwoWayHEdge",
      startId: "f4f16cd2-3467-426d-9642-75de10d56ba5",
      endId: "29a17b86-6a0b-4f1e-b312-5db62ec89be8",
    },
    {
      start: {
        x: 5220,
        y: 2260,
      },
      end: {
        x: 5400,
        y: 2260,
      },
      id: "b18fa591-1805-41e7-b748-e6c31d2da7f8",
      name: "TwoWayHEdge",
      startId: "f634153b-d320-4e0b-ab65-40383cf6fba8",
      endId: "b9ac4dfc-6553-4d25-b191-c8fec120808d",
    },
    {
      start: {
        x: 5400,
        y: 2260,
      },
      end: {
        x: 5400,
        y: 2460,
      },
      id: "c6aa47ae-a8b7-4ade-8ebf-97222167c442",
      name: "TwoWayVEdge",
      startId: "b9ac4dfc-6553-4d25-b191-c8fec120808d",
      endId: "752a103c-cf30-4b12-a992-c43e93fe2ea1",
    },
    {
      start: {
        x: 5400,
        y: 2460,
      },
      end: {
        x: 5600,
        y: 2460,
      },
      id: "e896aa3d-f139-4210-a878-fe5bdd1cda5d",
      name: "TwoWayHEdge",
      startId: "752a103c-cf30-4b12-a992-c43e93fe2ea1",
      endId: "5c5ea552-0994-4bbb-bece-98cedf0271e6",
    },
    {
      start: {
        x: 5600,
        y: 2460,
      },
      end: {
        x: 5820,
        y: 2460,
      },
      id: "14a5bded-e3a9-4a86-80bc-5e04ca5b7343",
      name: "TwoWayHEdge",
      startId: "5c5ea552-0994-4bbb-bece-98cedf0271e6",
      endId: "6bc85851-0e17-4905-b4b9-546a99f92d59",
    },
    {
      start: {
        x: 5600,
        y: 2460,
      },
      end: {
        x: 5600,
        y: 2780,
      },
      id: "2c206d33-d992-4025-a2e9-2d74d8a0a926",
      name: "TwoWayVEdge",
      startId: "5c5ea552-0994-4bbb-bece-98cedf0271e6",
      endId: "c8bdeffc-b9d2-41cd-a6f2-1481f12ecfc6",
    },
    {
      start: {
        x: 5820,
        y: 2460,
      },
      end: {
        x: 5820,
        y: 2620,
      },
      id: "e0bb5615-0c8f-4bc7-ba10-e4a917a3aa92",
      name: "TwoWayVEdge",
      startId: "6bc85851-0e17-4905-b4b9-546a99f92d59",
      endId: "4b4320ae-1583-42e3-b963-e9ca1395fb14",
    },
    {
      start: {
        x: 5820,
        y: 2620,
      },
      end: {
        x: 5820,
        y: 2780,
      },
      id: "e6ef2faf-833c-4138-b44c-6c3b75c9cf29",
      name: "TwoWayVEdge",
      startId: "4b4320ae-1583-42e3-b963-e9ca1395fb14",
      endId: "7267c7da-fef0-4fd1-9f61-c1948e27717a",
    },
    {
      start: {
        x: 880,
        y: 340,
      },
      end: {
        x: 1260,
        y: 340,
      },
      id: "ef88d084-5f08-4c5f-9123-13424fabfa53",
      name: "TwoWayHEdge",
      startId: "01f09c6a-5a2d-4a3f-9ab5-3afb21489ce5",
      endId: "345b4115-59c1-4784-a26d-36612e941306",
    },
    {
      start: {
        x: 5600,
        y: 2780,
      },
      end: {
        x: 5820,
        y: 2780,
      },
      id: "a052e298-6ba9-484a-8a33-547bdec7c1f3",
      name: "TwoWayHEdge",
      startId: "c8bdeffc-b9d2-41cd-a6f2-1481f12ecfc6",
      endId: "7267c7da-fef0-4fd1-9f61-c1948e27717a",
    },
    {
      start: {
        x: 1260,
        y: 340,
      },
      end: {
        x: 1660,
        y: 340,
      },
      id: "d6ff32a3-2e4f-4086-966e-2d2496ce83e1",
      name: "TwoWayHEdge",
      startId: "345b4115-59c1-4784-a26d-36612e941306",
      endId: "9f51bd32-401c-4443-9d2f-a9b6da124f6a",
    },
    {
      start: {
        x: 1260,
        y: 340,
      },
      end: {
        x: 1260,
        y: 520,
      },
      id: "c3a14126-2ec9-43b4-9827-0399c342d5d4",
      name: "TwoWayVEdge",
      startId: "345b4115-59c1-4784-a26d-36612e941306",
      endId: "0280bdb4-713a-411d-94b3-904894c96d87",
    },
    {
      start: {
        x: 1660,
        y: 340,
      },
      end: {
        x: 1660,
        y: 520,
      },
      id: "6d988e3a-e0fc-41bc-8789-33df27d11c01",
      name: "TwoWayVEdge",
      startId: "9f51bd32-401c-4443-9d2f-a9b6da124f6a",
      endId: "cbfbced3-e768-4452-ae48-8b3c1cb3e896",
    },
    {
      start: {
        x: 1260,
        y: 520,
      },
      end: {
        x: 1460,
        y: 520,
      },
      id: "20f32e1a-6946-43fd-af9e-a11b817f89cd",
      name: "TwoWayHEdge",
      startId: "0280bdb4-713a-411d-94b3-904894c96d87",
      endId: "86911025-2409-48a8-bd4b-02c832ec32fe",
    },
    {
      start: {
        x: 1460,
        y: 520,
      },
      end: {
        x: 1660,
        y: 520,
      },
      id: "c8daeaf7-c65b-410e-873a-e370241cebf6",
      name: "TwoWayHEdge",
      startId: "86911025-2409-48a8-bd4b-02c832ec32fe",
      endId: "cbfbced3-e768-4452-ae48-8b3c1cb3e896",
    },
    {
      start: {
        x: 1460,
        y: 520,
      },
      end: {
        x: 1460,
        y: 680,
      },
      id: "7da2daee-c1cf-434b-8507-7bce171cf4db",
      name: "TwoWayVEdge",
      startId: "86911025-2409-48a8-bd4b-02c832ec32fe",
      endId: "4a68df29-62d8-46ee-892f-e7a5633caba7",
    },
    {
      start: {
        x: 4800,
        y: 2780,
      },
      end: {
        x: 4800,
        y: 2940,
      },
      id: "1fdb381d-bc81-4903-890c-b0b0fd5c20a5",
      name: "TwoWayVEdge",
      startId: "d543f24e-cd46-418e-8cb3-56b3b665d958",
      endId: "ca9c14d0-8009-4bdd-b60b-907d7aca81a4",
    },
    {
      start: {
        x: 1460,
        y: 680,
      },
      end: {
        x: 1640,
        y: 680,
      },
      id: "8d9504ee-3e36-41b6-aa39-4975cd918dc0",
      name: "TwoWayHEdge",
      startId: "4a68df29-62d8-46ee-892f-e7a5633caba7",
      endId: "4493ff09-e3a6-4a96-8dc4-041e08e3f678",
    },
    {
      start: {
        x: 4800,
        y: 2940,
      },
      end: {
        x: 4960,
        y: 2940,
      },
      id: "deb81b1e-097c-442a-bb12-af84909d8999",
      name: "TwoWayHEdge",
      startId: "ca9c14d0-8009-4bdd-b60b-907d7aca81a4",
      endId: "571e15e0-7324-4e98-925e-2aac78952e6c",
    },
    {
      start: {
        x: 1640,
        y: 680,
      },
      end: {
        x: 1840,
        y: 680,
      },
      id: "17ca131e-29cd-4d74-bbf6-e69e86719efd",
      name: "TwoWayHEdge",
      startId: "4493ff09-e3a6-4a96-8dc4-041e08e3f678",
      endId: "64f49973-dc31-4168-b69f-e3657788289f",
    },
    {
      start: {
        x: 4960,
        y: 2940,
      },
      end: {
        x: 5140,
        y: 2940,
      },
      id: "36e56502-933e-4105-b0c7-c8db8e4f8cde",
      name: "TwoWayHEdge",
      startId: "571e15e0-7324-4e98-925e-2aac78952e6c",
      endId: "09eff9ac-05cf-418c-9f8b-04547ea045b2",
    },
    {
      start: {
        x: 1480,
        y: 840,
      },
      end: {
        x: 1800,
        y: 840,
      },
      id: "1e15bb6f-cb17-4352-a021-f98c467ef7d4",
      name: "TwoWayHEdge",
      startId: "dd8e70d2-6115-476a-aa29-5bfa44c62683",
      endId: "7a91e691-32c1-442f-b7dc-9d180b454f15",
    },
    {
      start: {
        x: 1680,
        y: 980,
      },
      end: {
        x: 1860,
        y: 980,
      },
      id: "4e555de9-49ab-45af-9530-2dda62b66857",
      name: "TwoWayHEdge",
      startId: "b6787adb-9696-4936-afeb-72f18494ae65",
      endId: "f6ce8ee5-05c9-4739-87d4-9e44a955ef3b",
    },
    {
      start: {
        x: 1460,
        y: 680,
      },
      end: {
        x: 1480,
        y: 840,
      },
      id: "fac484ca-d5f1-4952-8163-5a62fdc3d438",
      name: "TwoWayVEdge",
      startId: "4a68df29-62d8-46ee-892f-e7a5633caba7",
      endId: "dd8e70d2-6115-476a-aa29-5bfa44c62683",
    },
    {
      start: {
        x: 1840,
        y: 680,
      },
      end: {
        x: 1800,
        y: 840,
      },
      id: "74123fc9-2d63-486a-a3e1-2272f38ab0d7",
      name: "TwoWayVEdge",
      startId: "64f49973-dc31-4168-b69f-e3657788289f",
      endId: "7a91e691-32c1-442f-b7dc-9d180b454f15",
    },
    {
      start: {
        x: 1800,
        y: 840,
      },
      end: {
        x: 2000,
        y: 840,
      },
      id: "a35b0137-0693-4ca3-8b45-d5a2f456b3df",
      name: "TwoWayHEdge",
      startId: "7a91e691-32c1-442f-b7dc-9d180b454f15",
      endId: "26eee807-5a9d-41e9-b6eb-1d8e0d60b652",
    },
    {
      start: {
        x: 1800,
        y: 840,
      },
      end: {
        x: 1860,
        y: 980,
      },
      id: "38f19d69-491e-4793-8b4c-ba1581c09eca",
      name: "TwoWayVEdge",
      startId: "7a91e691-32c1-442f-b7dc-9d180b454f15",
      endId: "f6ce8ee5-05c9-4739-87d4-9e44a955ef3b",
    },
    {
      start: {
        x: 4800,
        y: 2940,
      },
      end: {
        x: 4800,
        y: 3080,
      },
      id: "6583e024-dd2e-431b-9653-054f990e0cb4",
      name: "TwoWayVEdge",
      startId: "ca9c14d0-8009-4bdd-b60b-907d7aca81a4",
      endId: "95462da4-a5c0-40fe-a763-c5340d355856",
    },
    {
      start: {
        x: 1480,
        y: 840,
      },
      end: {
        x: 1500,
        y: 980,
      },
      id: "8f40ea1e-5d81-422e-b9dc-cc3e4f6d65e6",
      name: "TwoWayVEdge",
      startId: "dd8e70d2-6115-476a-aa29-5bfa44c62683",
      endId: "c2857bb7-35ee-4bef-87de-cb9292a21f0c",
    },
    {
      start: {
        x: 5140,
        y: 2940,
      },
      end: {
        x: 5140,
        y: 3080,
      },
      id: "c3b0de0f-0e48-4153-9a2b-22a5e86108be",
      name: "TwoWayVEdge",
      startId: "09eff9ac-05cf-418c-9f8b-04547ea045b2",
      endId: "32e8bf41-28a9-4c3f-8bfb-c23cb0f512df",
    },
    {
      start: {
        x: 1500,
        y: 980,
      },
      end: {
        x: 1500,
        y: 1140,
      },
      id: "04bbb3f3-bc26-43a2-81ac-f6fab5ba954d",
      name: "TwoWayVEdge",
      startId: "c2857bb7-35ee-4bef-87de-cb9292a21f0c",
      endId: "b6cede47-5721-42d7-8e36-84124cf74471",
    },
    {
      start: {
        x: 4800,
        y: 3080,
      },
      end: {
        x: 5140,
        y: 3080,
      },
      id: "175dd7f5-d170-4bfd-9ced-04e80c08b3e0",
      name: "TwoWayHEdge",
      startId: "95462da4-a5c0-40fe-a763-c5340d355856",
      endId: "32e8bf41-28a9-4c3f-8bfb-c23cb0f512df",
    },
    {
      start: {
        x: 5140,
        y: 2780,
      },
      end: {
        x: 5140,
        y: 2940,
      },
      id: "9dc8b9a3-c4ef-48bb-91b6-affd5143ae8f",
      name: "TwoWayVEdge",
      startId: "16f68f81-126f-429d-b4d6-1fce7b67bbc8",
      endId: "09eff9ac-05cf-418c-9f8b-04547ea045b2",
    },
    {
      start: {
        x: 5140,
        y: 2780,
      },
      end: {
        x: 5320,
        y: 2780,
      },
      id: "7fd86ae7-e041-49d6-8d71-5db31d9ce8cb",
      name: "TwoWayHEdge",
      startId: "16f68f81-126f-429d-b4d6-1fce7b67bbc8",
      endId: "243330ff-cefc-4f4a-9b34-5aa654d482a5",
    },
    {
      start: {
        x: 5320,
        y: 2780,
      },
      end: {
        x: 5320,
        y: 2940,
      },
      id: "725293cb-022f-4e02-ac7d-fad6910a3202",
      name: "TwoWayVEdge",
      startId: "243330ff-cefc-4f4a-9b34-5aa654d482a5",
      endId: "9cf22ad9-8eb4-405f-90d5-fe15774d4e1e",
    },
    {
      start: {
        x: 5320,
        y: 2940,
      },
      end: {
        x: 5500,
        y: 2940,
      },
      id: "e4f7d06a-b25f-4f13-8266-811c86cac4ef",
      name: "TwoWayHEdge",
      startId: "9cf22ad9-8eb4-405f-90d5-fe15774d4e1e",
      endId: "eb57ead9-4030-4994-9a2a-897064788cef",
    },
    {
      start: {
        x: 5500,
        y: 2940,
      },
      end: {
        x: 5660,
        y: 2940,
      },
      id: "0e96df10-6db3-4a1c-92bb-082362858eee",
      name: "TwoWayHEdge",
      startId: "eb57ead9-4030-4994-9a2a-897064788cef",
      endId: "28d4ee00-7574-4240-b7a0-5bad83d987c1",
    },
    {
      start: {
        x: 5660,
        y: 2940,
      },
      end: {
        x: 5820,
        y: 2940,
      },
      id: "a09f6aa3-1bc6-49b9-b951-05738d874ac4",
      name: "TwoWayHEdge",
      startId: "28d4ee00-7574-4240-b7a0-5bad83d987c1",
      endId: "c4c618f4-be95-461c-85a0-19cb4e6819c5",
    },
    {
      start: {
        x: 5820,
        y: 2780,
      },
      end: {
        x: 5820,
        y: 2940,
      },
      id: "a4a7a2d7-204d-416a-b20a-a968b61f1ec5",
      name: "TwoWayVEdge",
      startId: "7267c7da-fef0-4fd1-9f61-c1948e27717a",
      endId: "c4c618f4-be95-461c-85a0-19cb4e6819c5",
    },
    {
      start: {
        x: 1960,
        y: 1320,
      },
      end: {
        x: 2260,
        y: 1320,
      },
      id: "0ff92e12-2ca6-4251-99ed-c534c8b0219d",
      name: "TwoWayHEdge",
      startId: "8f0cf0ff-55fa-4e1c-9b17-cf7e5080be99",
      endId: "3bfb01e9-a672-4552-91d2-598acd166999",
    },
    {
      start: {
        x: 2340,
        y: 1060,
      },
      end: {
        x: 2260,
        y: 1320,
      },
      id: "ca6224fa-1ace-4caa-995e-eb9ce250a93f",
      name: "TwoWayVEdge",
      startId: "861e2073-a71d-4af6-a11a-68645e626775",
      endId: "3bfb01e9-a672-4552-91d2-598acd166999",
    },
    {
      start: {
        x: 2100,
        y: 1060,
      },
      end: {
        x: 2340,
        y: 1060,
      },
      id: "7d2994be-3509-46b1-b64a-2a642a30e0e6",
      name: "TwoWayHEdge",
      startId: "47d16a8e-2a10-420e-9e20-fe2ef37c8ca0",
      endId: "861e2073-a71d-4af6-a11a-68645e626775",
    },
    {
      start: {
        x: 2180,
        y: 840,
      },
      end: {
        x: 2100,
        y: 1060,
      },
      id: "b79576f1-e186-45cd-955c-27bcd1298fa8",
      name: "TwoWayVEdge",
      startId: "9a2b2852-378f-4e08-9b3c-54a9e9b00661",
      endId: "47d16a8e-2a10-420e-9e20-fe2ef37c8ca0",
    },
    {
      start: {
        x: 1660,
        y: 340,
      },
      end: {
        x: 2120,
        y: 340,
      },
      id: "c0f611ef-8901-41e6-8bb9-f8b0f1581651",
      name: "TwoWayHEdge",
      startId: "9f51bd32-401c-4443-9d2f-a9b6da124f6a",
      endId: "e67c9235-c555-4a71-81f7-f2582b1f1122",
    },
    {
      start: {
        x: 2120,
        y: 340,
      },
      end: {
        x: 2420,
        y: 340,
      },
      id: "15884d5b-fb54-44bb-80de-3c1d38619b19",
      name: "TwoWayHEdge",
      startId: "e67c9235-c555-4a71-81f7-f2582b1f1122",
      endId: "672d1e13-48e3-41ce-ab40-58591ff52ea0",
    },
    {
      start: {
        x: 5820,
        y: 2620,
      },
      end: {
        x: 5980,
        y: 2620,
      },
      id: "ed110e9d-5445-4fc3-a419-97111dff9ba7",
      name: "TwoWayHEdge",
      startId: "4b4320ae-1583-42e3-b963-e9ca1395fb14",
      endId: "62676253-2ed2-480a-9af6-6f4fed4fbfbd",
    },
    {
      start: {
        x: 5980,
        y: 2620,
      },
      end: {
        x: 6160,
        y: 2620,
      },
      id: "81f84b40-77a4-4fdb-a149-ae627deb938f",
      name: "TwoWayHEdge",
      startId: "62676253-2ed2-480a-9af6-6f4fed4fbfbd",
      endId: "16a6cd70-54d4-4580-827a-e1487aa52272",
    },
    {
      start: {
        x: 1200,
        y: 1580,
      },
      end: {
        x: 1520,
        y: 1580,
      },
      id: "4f727d18-7c1e-4024-a1ea-daf710d10dc0",
      name: "TwoWayHEdge",
      startId: "fea85e6d-98e6-4426-969c-7515e31bd416",
      endId: "d465b4cd-1158-4af3-9bfd-7c722a297b45",
    },
    {
      start: {
        x: 6160,
        y: 2620,
      },
      end: {
        x: 6340,
        y: 2620,
      },
      id: "1c0e8d5e-634c-423f-b457-6a8ab1d8c223",
      name: "TwoWayHEdge",
      startId: "16a6cd70-54d4-4580-827a-e1487aa52272",
      endId: "3cfb7867-7384-4abd-9146-448374761bde",
    },
    {
      start: {
        x: 1520,
        y: 1580,
      },
      end: {
        x: 1740,
        y: 1580,
      },
      id: "dac4dd7c-9f1b-4976-9b66-3c833a760fc1",
      name: "TwoWayHEdge",
      startId: "d465b4cd-1158-4af3-9bfd-7c722a297b45",
      endId: "f1fb5a08-5ce9-4561-8aec-4c0f15ffbe98",
    },
    {
      start: {
        x: 6340,
        y: 2620,
      },
      end: {
        x: 6340,
        y: 2820,
      },
      id: "e517117d-b30a-4664-a005-aab4315fa490",
      name: "TwoWayVEdge",
      startId: "3cfb7867-7384-4abd-9146-448374761bde",
      endId: "66062c7d-de4b-4f3c-930e-0e4576198242",
    },
    {
      start: {
        x: 1740,
        y: 1580,
      },
      end: {
        x: 1920,
        y: 1580,
      },
      id: "294a9b50-131c-40c6-a8f2-9872046bd8b8",
      name: "TwoWayHEdge",
      startId: "f1fb5a08-5ce9-4561-8aec-4c0f15ffbe98",
      endId: "622b4534-364f-44da-affe-b11cd92a4600",
    },
    {
      start: {
        x: 6340,
        y: 2820,
      },
      end: {
        x: 6340,
        y: 3000,
      },
      id: "6fa80370-6da1-450e-b7c9-7e590edb2069",
      name: "TwoWayVEdge",
      startId: "66062c7d-de4b-4f3c-930e-0e4576198242",
      endId: "cf403fd8-f50c-4a61-8e32-2e4a4ab9831b",
    },
    {
      start: {
        x: 1920,
        y: 1580,
      },
      end: {
        x: 2120,
        y: 1580,
      },
      id: "0ca94e34-2f94-4a02-ad1b-be57abf406e5",
      name: "TwoWayHEdge",
      startId: "622b4534-364f-44da-affe-b11cd92a4600",
      endId: "f1d8f588-5ef5-4493-b831-c000495c4f54",
    },
    {
      start: {
        x: 5980,
        y: 3000,
      },
      end: {
        x: 6340,
        y: 3000,
      },
      id: "3e57b0c0-02a7-4fda-8a29-87ea71411812",
      name: "TwoWayHEdge",
      startId: "686ac19e-5c15-45da-af6b-acb80eb1900b",
      endId: "cf403fd8-f50c-4a61-8e32-2e4a4ab9831b",
    },
    {
      start: {
        x: 1740,
        y: 1580,
      },
      end: {
        x: 1740,
        y: 1740,
      },
      id: "8b2414ba-b4e8-429c-a0a8-678e52da6b61",
      name: "TwoWayVEdge",
      startId: "f1fb5a08-5ce9-4561-8aec-4c0f15ffbe98",
      endId: "88129fdb-c3a4-4ece-b790-032f23b52b77",
    },
    {
      start: {
        x: 5980,
        y: 3000,
      },
      end: {
        x: 5980,
        y: 3180,
      },
      id: "b986224e-dac9-4a86-ae25-9797b71ad67b",
      name: "TwoWayVEdge",
      startId: "686ac19e-5c15-45da-af6b-acb80eb1900b",
      endId: "2e5a88c5-a631-4bb9-8525-5845c9c6331a",
    },
    {
      start: {
        x: 2120,
        y: 1580,
      },
      end: {
        x: 2120,
        y: 1740,
      },
      id: "a8d7fa6a-389f-4162-b496-b6c2c5d0eb2a",
      name: "TwoWayVEdge",
      startId: "f1d8f588-5ef5-4493-b831-c000495c4f54",
      endId: "bf05b8e6-f290-4d24-829c-af8eb207851e",
    },
    {
      start: {
        x: 6340,
        y: 3000,
      },
      end: {
        x: 6340,
        y: 3180,
      },
      id: "2aa751f3-265d-4b7e-92e3-934e9397a147",
      name: "TwoWayVEdge",
      startId: "cf403fd8-f50c-4a61-8e32-2e4a4ab9831b",
      endId: "5c5fcad1-cd43-4b5e-a9c0-f04dff61937e",
    },
    {
      start: {
        x: 1740,
        y: 1740,
      },
      end: {
        x: 2120,
        y: 1740,
      },
      id: "71b54b4c-9dd3-4a4a-80fe-9307a9481b1d",
      name: "TwoWayHEdge",
      startId: "88129fdb-c3a4-4ece-b790-032f23b52b77",
      endId: "bf05b8e6-f290-4d24-829c-af8eb207851e",
    },
    {
      start: {
        x: 5980,
        y: 3180,
      },
      end: {
        x: 6160,
        y: 3180,
      },
      id: "09960be2-32e0-4937-9b76-ce67716cb80c",
      name: "TwoWayHEdge",
      startId: "2e5a88c5-a631-4bb9-8525-5845c9c6331a",
      endId: "41ba12e4-440e-4fc6-b598-9f04880da76c",
    },
    {
      start: {
        x: 6160,
        y: 3180,
      },
      end: {
        x: 6340,
        y: 3180,
      },
      id: "a4ab1777-5292-4425-93c9-c7fc41a4605f",
      name: "TwoWayHEdge",
      startId: "41ba12e4-440e-4fc6-b598-9f04880da76c",
      endId: "5c5fcad1-cd43-4b5e-a9c0-f04dff61937e",
    },
    {
      start: {
        x: 5980,
        y: 3180,
      },
      end: {
        x: 5980,
        y: 3380,
      },
      id: "b6d79be6-dcbf-4527-b50f-e85b98ff8fb5",
      name: "TwoWayVEdge",
      startId: "2e5a88c5-a631-4bb9-8525-5845c9c6331a",
      endId: "6bbcdeb5-f435-48a6-afb2-8ede76ca1a73",
    },
    {
      start: {
        x: 5820,
        y: 3380,
      },
      end: {
        x: 5980,
        y: 3380,
      },
      id: "19afbf46-0960-4716-863c-ad4fe887942f",
      name: "TwoWayHEdge",
      startId: "9e967feb-0913-4d4c-9aad-d43dc3928206",
      endId: "6bbcdeb5-f435-48a6-afb2-8ede76ca1a73",
    },
    {
      start: {
        x: 5820,
        y: 3180,
      },
      end: {
        x: 5820,
        y: 3380,
      },
      id: "9008ca82-1026-4292-9895-2d2cd0dbb56e",
      name: "TwoWayVEdge",
      startId: "56121fad-4809-453b-8a1f-db1f6a2dd6d5",
      endId: "9e967feb-0913-4d4c-9aad-d43dc3928206",
    },
    {
      start: {
        x: 5660,
        y: 3180,
      },
      end: {
        x: 5820,
        y: 3180,
      },
      id: "3109bcf2-2979-48cd-9b62-d9599f83649d",
      name: "TwoWayHEdge",
      startId: "3caabc5c-dd7f-44dc-b0bb-286648b18491",
      endId: "56121fad-4809-453b-8a1f-db1f6a2dd6d5",
    },
    {
      start: {
        x: 5660,
        y: 2940,
      },
      end: {
        x: 5660,
        y: 3060,
      },
      id: "cdae4c0c-0661-4196-ba94-467441ca5eb5",
      name: "TwoWayVEdge",
      startId: "28d4ee00-7574-4240-b7a0-5bad83d987c1",
      endId: "0e52d178-9287-41d5-ad95-e7418511d083",
    },
    {
      start: {
        x: 2120,
        y: 1580,
      },
      end: {
        x: 2340,
        y: 1580,
      },
      id: "4fa9e463-c1de-4557-8df5-3cf2419a403f",
      name: "TwoWayHEdge",
      startId: "f1d8f588-5ef5-4493-b831-c000495c4f54",
      endId: "4d1dce0c-1bb9-4fb9-8e92-50fc2cd2a4ba",
    },
    {
      start: {
        x: 5660,
        y: 3060,
      },
      end: {
        x: 5660,
        y: 3180,
      },
      id: "3c277305-e6ca-4062-8a47-0f2e95c4859f",
      name: "TwoWayVEdge",
      startId: "0e52d178-9287-41d5-ad95-e7418511d083",
      endId: "3caabc5c-dd7f-44dc-b0bb-286648b18491",
    },
    {
      start: {
        x: 2340,
        y: 1580,
      },
      end: {
        x: 2340,
        y: 1740,
      },
      id: "0f136564-f100-449f-93d1-2bd5da2cd658",
      name: "TwoWayVEdge",
      startId: "4d1dce0c-1bb9-4fb9-8e92-50fc2cd2a4ba",
      endId: "43a2a3ea-c5eb-454f-9781-58018b0607ba",
    },
    {
      start: {
        x: 2340,
        y: 1740,
      },
      end: {
        x: 2560,
        y: 1740,
      },
      id: "ef388d63-3806-48b7-9adf-a0b00c173604",
      name: "TwoWayHEdge",
      startId: "43a2a3ea-c5eb-454f-9781-58018b0607ba",
      endId: "dfe315a6-907e-4657-b919-0d6fbf9ef8f5",
    },
    {
      start: {
        x: 5140,
        y: 3180,
      },
      end: {
        x: 5660,
        y: 3180,
      },
      id: "bede3c45-43e8-4a7e-8685-aabe5d430c4a",
      name: "TwoWayHEdge",
      startId: "2fb01b13-efb5-4875-bd5c-bd98010e4249",
      endId: "3caabc5c-dd7f-44dc-b0bb-286648b18491",
    },
    {
      start: {
        x: 2560,
        y: 1580,
      },
      end: {
        x: 2560,
        y: 1740,
      },
      id: "61d34814-cdd6-4ce5-849a-f846413c28c6",
      name: "TwoWayVEdge",
      startId: "dce887cc-a393-450d-b518-40b8ea3aea8b",
      endId: "dfe315a6-907e-4657-b919-0d6fbf9ef8f5",
    },
    {
      start: {
        x: 5140,
        y: 3080,
      },
      end: {
        x: 5140,
        y: 3180,
      },
      id: "b129f573-2c02-4067-a75a-6b2c94901db9",
      name: "TwoWayVEdge",
      startId: "32e8bf41-28a9-4c3f-8bfb-c23cb0f512df",
      endId: "2fb01b13-efb5-4875-bd5c-bd98010e4249",
    },
    {
      start: {
        x: 2560,
        y: 1440,
      },
      end: {
        x: 2560,
        y: 1580,
      },
      id: "84071604-ba99-4648-8bca-0db31d09368e",
      name: "TwoWayVEdge",
      startId: "9de086ae-bc21-4162-9f82-eb8ace196d52",
      endId: "dce887cc-a393-450d-b518-40b8ea3aea8b",
    },
    {
      start: {
        x: 2260,
        y: 1440,
      },
      end: {
        x: 2560,
        y: 1440,
      },
      id: "5686b59c-d23b-49b7-a67c-4d774be55e9c",
      name: "TwoWayHEdge",
      startId: "15b7a6eb-5766-4587-93e3-feee2e270362",
      endId: "9de086ae-bc21-4162-9f82-eb8ace196d52",
    },
    {
      start: {
        x: 2260,
        y: 1320,
      },
      end: {
        x: 2260,
        y: 1440,
      },
      id: "91d88950-fc4c-40ed-a56f-947f69411eb6",
      name: "TwoWayVEdge",
      startId: "3bfb01e9-a672-4552-91d2-598acd166999",
      endId: "15b7a6eb-5766-4587-93e3-feee2e270362",
    },
    {
      start: {
        x: 2420,
        y: 340,
      },
      end: {
        x: 2700,
        y: 340,
      },
      id: "0dd996b7-1974-4cb9-82ec-dde0f2966c32",
      name: "TwoWayHEdge",
      startId: "672d1e13-48e3-41ce-ab40-58591ff52ea0",
      endId: "4d7c0e69-8d50-43bd-8e53-52523b8d7c78",
    },
    {
      start: {
        x: 2700,
        y: 340,
      },
      end: {
        x: 2740,
        y: 520,
      },
      id: "28adf3f8-6099-465c-9c61-bc3d3b0edb77",
      name: "TwoWayVEdge",
      startId: "4d7c0e69-8d50-43bd-8e53-52523b8d7c78",
      endId: "00205110-18fd-4eaa-b79a-047f0254cfba",
    },
    {
      start: {
        x: 5820,
        y: 3380,
      },
      end: {
        x: 5820,
        y: 3600,
      },
      id: "8e080097-0cbf-4bb1-ab7c-3fedaf9654d2",
      name: "TwoWayVEdge",
      startId: "9e967feb-0913-4d4c-9aad-d43dc3928206",
      endId: "c6716bef-fcb1-46d5-8b4c-44d98afb5c0b",
    },
    {
      start: {
        x: 2740,
        y: 520,
      },
      end: {
        x: 2680,
        y: 720,
      },
      id: "38c6799c-d965-4ab5-8fa3-21210290eb70",
      name: "TwoWayVEdge",
      startId: "00205110-18fd-4eaa-b79a-047f0254cfba",
      endId: "7bdd10b3-07f4-4253-8f97-cca5c550f720",
    },
    {
      start: {
        x: 5600,
        y: 3600,
      },
      end: {
        x: 5820,
        y: 3600,
      },
      id: "2fcf2f3f-56af-4b67-9bd6-12a59f74f1ba",
      name: "TwoWayHEdge",
      startId: "1c31f0b3-b2f6-4b72-a95b-f77a0df3cd9d",
      endId: "c6716bef-fcb1-46d5-8b4c-44d98afb5c0b",
    },
    {
      start: {
        x: 2680,
        y: 720,
      },
      end: {
        x: 2700,
        y: 900,
      },
      id: "2729757b-45c6-4086-8f41-a48f9e95f515",
      name: "TwoWayVEdge",
      startId: "7bdd10b3-07f4-4253-8f97-cca5c550f720",
      endId: "3be1159a-ddd0-49f6-9700-b35c9ec25104",
    },
    {
      start: {
        x: 5360,
        y: 3600,
      },
      end: {
        x: 5600,
        y: 3600,
      },
      id: "92515827-b699-428c-894f-ae759a27791a",
      name: "TwoWayHEdge",
      startId: "ba52d388-e97e-4248-8c12-ce31812e103d",
      endId: "1c31f0b3-b2f6-4b72-a95b-f77a0df3cd9d",
    },
    {
      start: {
        x: 5140,
        y: 3600,
      },
      end: {
        x: 5360,
        y: 3600,
      },
      id: "31b101b1-e779-4bf4-a20f-cd6dcc376593",
      name: "TwoWayHEdge",
      startId: "c2a2c5d5-b877-4551-9f40-f7d9979df01b",
      endId: "ba52d388-e97e-4248-8c12-ce31812e103d",
    },
    {
      start: {
        x: 2440,
        y: 900,
      },
      end: {
        x: 2700,
        y: 900,
      },
      id: "78c992ba-f631-4c58-99e6-851d5b23278c",
      name: "TwoWayHEdge",
      startId: "4794f3ec-c5bb-48e6-825d-f34cbd79db5b",
      endId: "3be1159a-ddd0-49f6-9700-b35c9ec25104",
    },
    {
      start: {
        x: 5140,
        y: 3180,
      },
      end: {
        x: 5140,
        y: 3600,
      },
      id: "b0a4c2a5-aede-4cc1-b45f-a15993902ad5",
      name: "TwoWayVEdge",
      startId: "2fb01b13-efb5-4875-bd5c-bd98010e4249",
      endId: "c2a2c5d5-b877-4551-9f40-f7d9979df01b",
    },
    {
      start: {
        x: 2700,
        y: 900,
      },
      end: {
        x: 2900,
        y: 900,
      },
      id: "22f26105-e2e4-4652-8497-a53c7a6e4d6a",
      name: "TwoWayHEdge",
      startId: "3be1159a-ddd0-49f6-9700-b35c9ec25104",
      endId: "da3247b1-37ff-4ffd-862f-b55c72f5ffe6",
    },
    {
      start: {
        x: 2900,
        y: 900,
      },
      end: {
        x: 2900,
        y: 1020,
      },
      id: "e01a180c-87d0-45cb-bbf6-f53c94f6ee30",
      name: "TwoWayVEdge",
      startId: "da3247b1-37ff-4ffd-862f-b55c72f5ffe6",
      endId: "97851eea-17de-41dc-9860-7d48c11d32cd",
    },
    {
      start: {
        x: 2900,
        y: 1020,
      },
      end: {
        x: 2900,
        y: 1140,
      },
      id: "373ef062-9f34-4c89-98c0-12acb252ee63",
      name: "TwoWayVEdge",
      startId: "97851eea-17de-41dc-9860-7d48c11d32cd",
      endId: "fba9a176-5a8a-4239-85d9-dc8e979fd066",
    },
    {
      start: {
        x: 2700,
        y: 1140,
      },
      end: {
        x: 2900,
        y: 1140,
      },
      id: "376d9dd4-4dc9-49c7-a350-53ce5620360c",
      name: "TwoWayHEdge",
      startId: "10ba851c-6d3a-4750-8a51-4be2eb98c9b5",
      endId: "fba9a176-5a8a-4239-85d9-dc8e979fd066",
    },
    {
      start: {
        x: 2700,
        y: 900,
      },
      end: {
        x: 2700,
        y: 1140,
      },
      id: "60a687fe-7356-4d0f-89dc-fe8b8c7db279",
      name: "TwoWayVEdge",
      startId: "3be1159a-ddd0-49f6-9700-b35c9ec25104",
      endId: "10ba851c-6d3a-4750-8a51-4be2eb98c9b5",
    },
    {
      start: {
        x: 4140,
        y: 2960,
      },
      end: {
        x: 4280,
        y: 2960,
      },
      id: "602d5a33-402f-4643-9980-7d43c70e2744",
      name: "TwoWayHEdge",
      startId: "6336deca-2bf1-4afe-90f4-6d371195be4c",
      endId: "dbbdf9ab-fdd3-497f-b7d2-cdaddf390849",
    },
    {
      start: {
        x: 2260,
        y: 1320,
      },
      end: {
        x: 2700,
        y: 1320,
      },
      id: "67c9246c-2e0a-401a-9f39-2359b52df47c",
      name: "TwoWayHEdge",
      startId: "3bfb01e9-a672-4552-91d2-598acd166999",
      endId: "41dcc5e4-7b29-493b-a840-11c7f23c6278",
    },
    {
      start: {
        x: 4280,
        y: 2960,
      },
      end: {
        x: 4420,
        y: 2960,
      },
      id: "000ca383-3f1e-4f85-bb85-6d5809d0619b",
      name: "TwoWayHEdge",
      startId: "dbbdf9ab-fdd3-497f-b7d2-cdaddf390849",
      endId: "3419f4b7-3867-43ab-b404-3eac0de25e68",
    },
    {
      start: {
        x: 2700,
        y: 1320,
      },
      end: {
        x: 2900,
        y: 1320,
      },
      id: "77b8d371-b032-4052-abba-5a940b8f40fe",
      name: "TwoWayHEdge",
      startId: "41dcc5e4-7b29-493b-a840-11c7f23c6278",
      endId: "1d874c6c-d287-4c9f-be8a-d6dbbc2f1a35",
    },
    {
      start: {
        x: 4140,
        y: 2960,
      },
      end: {
        x: 4140,
        y: 3140,
      },
      id: "d8914b10-b45a-4170-8d83-ec139387f0e9",
      name: "TwoWayVEdge",
      startId: "6336deca-2bf1-4afe-90f4-6d371195be4c",
      endId: "174ed2c6-a407-4429-ac3c-a2927d3ae8df",
    },
    {
      start: {
        x: 2900,
        y: 1140,
      },
      end: {
        x: 2900,
        y: 1320,
      },
      id: "22fd983e-c0d7-4b67-8059-36cfa210259c",
      name: "TwoWayVEdge",
      startId: "fba9a176-5a8a-4239-85d9-dc8e979fd066",
      endId: "1d874c6c-d287-4c9f-be8a-d6dbbc2f1a35",
    },
    {
      start: {
        x: 4140,
        y: 3140,
      },
      end: {
        x: 4420,
        y: 3140,
      },
      id: "82e2edb1-b9b9-4210-a478-f171d622cb1f",
      name: "TwoWayHEdge",
      startId: "174ed2c6-a407-4429-ac3c-a2927d3ae8df",
      endId: "bab46de8-04f5-4428-8813-52bbfc45a23b",
    },
    {
      start: {
        x: 4420,
        y: 2960,
      },
      end: {
        x: 4420,
        y: 3140,
      },
      id: "778e8e3b-0690-450a-814f-f23aa9b34b15",
      name: "TwoWayVEdge",
      startId: "3419f4b7-3867-43ab-b404-3eac0de25e68",
      endId: "bab46de8-04f5-4428-8813-52bbfc45a23b",
    },
    {
      start: {
        x: 4420,
        y: 2960,
      },
      end: {
        x: 4560,
        y: 3060,
      },
      id: "8c83d3c7-0f37-4e6c-bb3b-380961b15c03",
      name: "TwoWayHEdge",
      startId: "3419f4b7-3867-43ab-b404-3eac0de25e68",
      endId: "a5269d2e-41ab-4802-b93c-5f2001ddd8ad",
    },
    {
      start: {
        x: 4560,
        y: 3060,
      },
      end: {
        x: 4680,
        y: 2980,
      },
      id: "3504382b-4676-43ff-a057-d31f4769cac1",
      name: "TwoWayHEdge",
      startId: "a5269d2e-41ab-4802-b93c-5f2001ddd8ad",
      endId: "8da802ac-6747-4d09-87bf-f16008798783",
    },
    {
      start: {
        x: 4420,
        y: 3140,
      },
      end: {
        x: 4420,
        y: 3740,
      },
      id: "51b06dee-bad7-4e65-b4b1-d2482673cdeb",
      name: "TwoWayVEdge",
      startId: "bab46de8-04f5-4428-8813-52bbfc45a23b",
      endId: "9053c5fe-0a37-4ccf-abc7-22dff8c60d81",
    },
    {
      start: {
        x: 4420,
        y: 3740,
      },
      end: {
        x: 4620,
        y: 3740,
      },
      id: "e4afb149-93b9-4f93-852b-5539c81ad33f",
      name: "TwoWayHEdge",
      startId: "9053c5fe-0a37-4ccf-abc7-22dff8c60d81",
      endId: "4f5f298a-7b8f-495a-9544-34dbe251a0bd",
    },
    {
      start: {
        x: 4620,
        y: 3740,
      },
      end: {
        x: 4800,
        y: 3740,
      },
      id: "86865bda-47d4-422b-959d-f3078934118f",
      name: "TwoWayHEdge",
      startId: "4f5f298a-7b8f-495a-9544-34dbe251a0bd",
      endId: "5c309894-c6c1-4d34-9415-1d9940c69a35",
    },
    {
      start: {
        x: 4800,
        y: 3740,
      },
      end: {
        x: 5140,
        y: 3740,
      },
      id: "ba02e43f-0414-4511-a35c-f45485a9bfd8",
      name: "TwoWayHEdge",
      startId: "5c309894-c6c1-4d34-9415-1d9940c69a35",
      endId: "11207d52-9b6c-4c48-a445-9acab14a2bbc",
    },
    {
      start: {
        x: 4800,
        y: 3600,
      },
      end: {
        x: 4800,
        y: 3740,
      },
      id: "81b0789f-c7c5-4b76-98a8-2a31d0c57e59",
      name: "TwoWayVEdge",
      startId: "93274de5-a482-4d98-9bad-ef60f152ab65",
      endId: "5c309894-c6c1-4d34-9415-1d9940c69a35",
    },
    {
      start: {
        x: 2560,
        y: 1740,
      },
      end: {
        x: 2720,
        y: 1740,
      },
      id: "231d978e-42b1-4a1c-8fe4-adff1118ae32",
      name: "TwoWayHEdge",
      startId: "dfe315a6-907e-4657-b919-0d6fbf9ef8f5",
      endId: "e280dff2-8d0b-471d-bd41-a0dadb5953b3",
    },
    {
      start: {
        x: 4800,
        y: 3600,
      },
      end: {
        x: 4960,
        y: 3600,
      },
      id: "ac8519f6-8fa2-4ab2-bce1-8ee4817a3375",
      name: "TwoWayHEdge",
      startId: "93274de5-a482-4d98-9bad-ef60f152ab65",
      endId: "aa39f3c5-b7c6-4c9d-b829-53f8672652b5",
    },
    {
      start: {
        x: 2720,
        y: 1740,
      },
      end: {
        x: 2900,
        y: 1740,
      },
      id: "a668415e-e2aa-4e44-b83e-cf95ac7b89fd",
      name: "TwoWayHEdge",
      startId: "e280dff2-8d0b-471d-bd41-a0dadb5953b3",
      endId: "8d9ee0ae-a302-4624-91d5-feea8b6c3484",
    },
    {
      start: {
        x: 4960,
        y: 3600,
      },
      end: {
        x: 5140,
        y: 3600,
      },
      id: "2a5e3cee-005d-4bec-b3c0-49aea9d679f8",
      name: "TwoWayHEdge",
      startId: "aa39f3c5-b7c6-4c9d-b829-53f8672652b5",
      endId: "c2a2c5d5-b877-4551-9f40-f7d9979df01b",
    },
    {
      start: {
        x: 2720,
        y: 1740,
      },
      end: {
        x: 2720,
        y: 1900,
      },
      id: "c57243eb-6c61-42ad-ad77-142aa5e4be1d",
      name: "TwoWayVEdge",
      startId: "e280dff2-8d0b-471d-bd41-a0dadb5953b3",
      endId: "5860de9d-4406-4918-b903-d7a674c468ea",
    },
    {
      start: {
        x: 5140,
        y: 3600,
      },
      end: {
        x: 5140,
        y: 3740,
      },
      id: "b2d35573-ceb3-44ca-ad3d-43fa3f2f88af",
      name: "TwoWayVEdge",
      startId: "c2a2c5d5-b877-4551-9f40-f7d9979df01b",
      endId: "11207d52-9b6c-4c48-a445-9acab14a2bbc",
    },
    {
      start: {
        x: 2720,
        y: 1900,
      },
      end: {
        x: 2720,
        y: 2060,
      },
      id: "e3f102e3-da4f-4626-894a-6b752357a3cd",
      name: "TwoWayVEdge",
      startId: "5860de9d-4406-4918-b903-d7a674c468ea",
      endId: "76e06435-bf9b-4c2c-9ad0-9f8fe6a16459",
    },
    {
      start: {
        x: 2720,
        y: 2060,
      },
      end: {
        x: 2900,
        y: 2060,
      },
      id: "01c79478-13bc-42a5-ae9e-83f5893e90c5",
      name: "TwoWayHEdge",
      startId: "76e06435-bf9b-4c2c-9ad0-9f8fe6a16459",
      endId: "8c3ef819-dd67-433e-a49e-8173f7d2f7d5",
    },
    {
      start: {
        x: 2900,
        y: 1740,
      },
      end: {
        x: 2900,
        y: 2060,
      },
      id: "fd878a85-a97a-422c-ae42-3aba4d389bea",
      name: "TwoWayVEdge",
      startId: "8d9ee0ae-a302-4624-91d5-feea8b6c3484",
      endId: "8c3ef819-dd67-433e-a49e-8173f7d2f7d5",
    },
    {
      start: {
        x: 2900,
        y: 2060,
      },
      end: {
        x: 3200,
        y: 2060,
      },
      id: "f4bb2f4f-ae49-4d5a-bd78-fd1bd1ec15ed",
      name: "TwoWayHEdge",
      startId: "8c3ef819-dd67-433e-a49e-8173f7d2f7d5",
      endId: "ecfc585b-dd78-4b06-81f2-b3d061d51cbf",
    },
    {
      start: {
        x: 3200,
        y: 2060,
      },
      end: {
        x: 3440,
        y: 2060,
      },
      id: "8c3b095b-e523-4e60-bd5f-94c919d1d311",
      name: "TwoWayHEdge",
      startId: "ecfc585b-dd78-4b06-81f2-b3d061d51cbf",
      endId: "3ff4445c-8f79-48d0-b520-cb5671f07e54",
    },
    {
      start: {
        x: 3080,
        y: 2360,
      },
      end: {
        x: 3300,
        y: 2440,
      },
      id: "0c5fb970-baaf-4a6e-8946-0dd0e7ab1911",
      name: "TwoWayHEdge",
      startId: "7a25c5b3-59df-423d-b33f-d0bfe00116ab",
      endId: "90df07d5-d5b5-4524-95ff-4a076f510a6a",
    },
    {
      start: {
        x: 3300,
        y: 2440,
      },
      end: {
        x: 3500,
        y: 2380,
      },
      id: "2ed2b818-3352-4678-9dcf-45d3d7b20526",
      name: "TwoWayHEdge",
      startId: "90df07d5-d5b5-4524-95ff-4a076f510a6a",
      endId: "a065eb39-be8a-4494-9f10-56a7781f8464",
    },
    {
      start: {
        x: 3440,
        y: 2060,
      },
      end: {
        x: 3500,
        y: 2380,
      },
      id: "4c62e8af-63d5-4fae-912a-7fd008c5d977",
      name: "TwoWayVEdge",
      startId: "3ff4445c-8f79-48d0-b520-cb5671f07e54",
      endId: "a065eb39-be8a-4494-9f10-56a7781f8464",
    },
    {
      start: {
        x: 3200,
        y: 2060,
      },
      end: {
        x: 3080,
        y: 2360,
      },
      id: "93b07633-411a-4c73-a1d2-b24b6e42a634",
      name: "TwoWayVEdge",
      startId: "ecfc585b-dd78-4b06-81f2-b3d061d51cbf",
      endId: "7a25c5b3-59df-423d-b33f-d0bfe00116ab",
    },
    {
      start: {
        x: 4420,
        y: 3740,
      },
      end: {
        x: 4400,
        y: 3940,
      },
      id: "9f111ebb-d55a-4435-8f29-fa12eb5a3cb7",
      name: "TwoWayVEdge",
      startId: "9053c5fe-0a37-4ccf-abc7-22dff8c60d81",
      endId: "992862b4-dd61-468e-b319-03790caede66",
    },
    {
      start: {
        x: 4400,
        y: 3940,
      },
      end: {
        x: 4400,
        y: 4100,
      },
      id: "3c368652-f290-4536-8e0c-8038d407be60",
      name: "TwoWayVEdge",
      startId: "992862b4-dd61-468e-b319-03790caede66",
      endId: "285ff1dd-8a7e-40bb-b232-c302d751be9a",
    },
    {
      start: {
        x: 4400,
        y: 3940,
      },
      end: {
        x: 4640,
        y: 3940,
      },
      id: "b784118d-b3c5-4f31-84df-dad4a7965aba",
      name: "TwoWayHEdge",
      startId: "992862b4-dd61-468e-b319-03790caede66",
      endId: "992e307c-3cdd-4c57-ab80-5f66c589e099",
    },
    {
      start: {
        x: 4400,
        y: 4100,
      },
      end: {
        x: 4520,
        y: 4100,
      },
      id: "28b2b8d5-8834-4136-a7c0-80f40afdaf21",
      name: "TwoWayHEdge",
      startId: "285ff1dd-8a7e-40bb-b232-c302d751be9a",
      endId: "dfdf7bb9-4051-4c64-b36f-023b24636585",
    },
    {
      start: {
        x: 4520,
        y: 4100,
      },
      end: {
        x: 4640,
        y: 4100,
      },
      id: "d9b12513-23e0-4830-8a16-7411294f6a1c",
      name: "TwoWayHEdge",
      startId: "dfdf7bb9-4051-4c64-b36f-023b24636585",
      endId: "7fd06120-c815-4bd6-86e0-b45404178445",
    },
    {
      start: {
        x: 4640,
        y: 3940,
      },
      end: {
        x: 4640,
        y: 4100,
      },
      id: "f2c3cdeb-d6cd-461e-ba00-5d4a979721d8",
      name: "TwoWayVEdge",
      startId: "992e307c-3cdd-4c57-ab80-5f66c589e099",
      endId: "7fd06120-c815-4bd6-86e0-b45404178445",
    },
    {
      start: {
        x: 4640,
        y: 3940,
      },
      end: {
        x: 4800,
        y: 3940,
      },
      id: "75b9d7c0-fe92-4271-8dd6-a0e2791c66e7",
      name: "TwoWayHEdge",
      startId: "992e307c-3cdd-4c57-ab80-5f66c589e099",
      endId: "f7a1b803-c52c-4a94-982b-e2cda905d12b",
    },
    {
      start: {
        x: 4800,
        y: 3940,
      },
      end: {
        x: 4960,
        y: 3940,
      },
      id: "6d7a6022-f87b-4e3e-8c2d-88936717d760",
      name: "TwoWayHEdge",
      startId: "f7a1b803-c52c-4a94-982b-e2cda905d12b",
      endId: "527ee1e8-96cb-4411-94c4-9c47d0cca600",
    },
    {
      start: {
        x: 4960,
        y: 3940,
      },
      end: {
        x: 5140,
        y: 3940,
      },
      id: "a99a130b-4e2c-4449-b44e-a4fcd6f78d6f",
      name: "TwoWayHEdge",
      startId: "527ee1e8-96cb-4411-94c4-9c47d0cca600",
      endId: "4ac3e32f-d6f4-4f72-8945-c80aed3a737f",
    },
    {
      start: {
        x: 5140,
        y: 3740,
      },
      end: {
        x: 5140,
        y: 3940,
      },
      id: "005f6cae-9196-4195-895a-a8e744b2f9f5",
      name: "TwoWayVEdge",
      startId: "11207d52-9b6c-4c48-a445-9acab14a2bbc",
      endId: "4ac3e32f-d6f4-4f72-8945-c80aed3a737f",
    },
    {
      start: {
        x: 6340,
        y: 2460,
      },
      end: {
        x: 6340,
        y: 2620,
      },
      id: "a36d24b5-254c-455e-af53-be884d970df3",
      name: "TwoWayVEdge",
      startId: "758f18c4-ba05-472e-9eda-5e4c54ab3fae",
      endId: "3cfb7867-7384-4abd-9146-448374761bde",
    },
    {
      start: {
        x: 6160,
        y: 2460,
      },
      end: {
        x: 6340,
        y: 2460,
      },
      id: "8e6e4352-7860-4cba-9f71-02fefc3557c6",
      name: "TwoWayHEdge",
      startId: "259c8af4-fc8e-4278-bc6d-85cbb6a6ffd5",
      endId: "758f18c4-ba05-472e-9eda-5e4c54ab3fae",
    },
    {
      start: {
        x: 6340,
        y: 2460,
      },
      end: {
        x: 6520,
        y: 2460,
      },
      id: "5bc7634a-3957-453b-ac0d-45b1c2d1bfd6",
      name: "TwoWayHEdge",
      startId: "758f18c4-ba05-472e-9eda-5e4c54ab3fae",
      endId: "0a2e0f08-4ea6-4b41-a2a5-4e69d1a35aff",
    },
    {
      start: {
        x: 6160,
        y: 2260,
      },
      end: {
        x: 6160,
        y: 2460,
      },
      id: "ab735d1d-2ecd-4af6-bde4-5d959b26be35",
      name: "TwoWayVEdge",
      startId: "418029cb-867e-4b21-8bfc-1f12d0740f77",
      endId: "259c8af4-fc8e-4278-bc6d-85cbb6a6ffd5",
    },
    {
      start: {
        x: 6520,
        y: 2260,
      },
      end: {
        x: 6520,
        y: 2460,
      },
      id: "9d67d6a6-a55b-454d-b658-789ccbba3a3b",
      name: "TwoWayVEdge",
      startId: "1b0e45cf-8a8d-493f-9231-dc1948f5e1a9",
      endId: "0a2e0f08-4ea6-4b41-a2a5-4e69d1a35aff",
    },
    {
      start: {
        x: 6160,
        y: 2260,
      },
      end: {
        x: 6520,
        y: 2260,
      },
      id: "c0a4253d-0629-424d-9ae8-7c9e76e46bd6",
      name: "TwoWayHEdge",
      startId: "418029cb-867e-4b21-8bfc-1f12d0740f77",
      endId: "1b0e45cf-8a8d-493f-9231-dc1948f5e1a9",
    },
    {
      start: {
        x: 6520,
        y: 2060,
      },
      end: {
        x: 6520,
        y: 2260,
      },
      id: "f1350a6b-04e8-4a81-a88c-0b783f6286e0",
      name: "TwoWayVEdge",
      startId: "fbff7041-073b-4049-b678-e5de6702546f",
      endId: "1b0e45cf-8a8d-493f-9231-dc1948f5e1a9",
    },
    {
      start: {
        x: 6520,
        y: 1880,
      },
      end: {
        x: 6520,
        y: 2060,
      },
      id: "81568af6-3ba6-4a13-9232-095c7ab130f1",
      name: "TwoWayVEdge",
      startId: "a56ded0e-45f0-4f53-9bd0-fb28c763c07e",
      endId: "fbff7041-073b-4049-b678-e5de6702546f",
    },
    {
      start: {
        x: 6160,
        y: 1880,
      },
      end: {
        x: 6520,
        y: 1880,
      },
      id: "87f93231-701d-47e3-a369-8d5dad4ce5f2",
      name: "TwoWayHEdge",
      startId: "27ad55b1-b9d6-4610-a579-5c7a4026e156",
      endId: "a56ded0e-45f0-4f53-9bd0-fb28c763c07e",
    },
    {
      start: {
        x: 5940,
        y: 1880,
      },
      end: {
        x: 6160,
        y: 1880,
      },
      id: "f9dc0308-d0c3-4ff5-a69e-6e5073b232c0",
      name: "TwoWayHEdge",
      startId: "3153c21a-9b99-48f7-a9eb-d84c15adc734",
      endId: "27ad55b1-b9d6-4610-a579-5c7a4026e156",
    },
    {
      start: {
        x: 5940,
        y: 1680,
      },
      end: {
        x: 5940,
        y: 1880,
      },
      id: "65ff7d46-4ee9-4f8c-828a-831e7f6f0d2a",
      name: "TwoWayVEdge",
      startId: "33cae4c0-5f4e-42b0-bc71-71e3a57c6cbf",
      endId: "3153c21a-9b99-48f7-a9eb-d84c15adc734",
    },
    {
      start: {
        x: 5940,
        y: 1880,
      },
      end: {
        x: 5940,
        y: 2060,
      },
      id: "3284df82-db62-4ff9-87fa-2ac3c8fab948",
      name: "TwoWayVEdge",
      startId: "3153c21a-9b99-48f7-a9eb-d84c15adc734",
      endId: "9bec4ce4-612b-4afa-9243-1cd62ecce0cb",
    },
    {
      start: {
        x: 5700,
        y: 1680,
      },
      end: {
        x: 5940,
        y: 1680,
      },
      id: "1f72beff-a2d0-4324-96fa-6642c42d67f6",
      name: "TwoWayHEdge",
      startId: "705188af-98dd-4cc4-bb00-a9ba37445cb2",
      endId: "33cae4c0-5f4e-42b0-bc71-71e3a57c6cbf",
    },
    {
      start: {
        x: 5700,
        y: 1680,
      },
      end: {
        x: 5700,
        y: 2060,
      },
      id: "c649bf6f-9a55-483a-a856-3c3534a59e2d",
      name: "TwoWayVEdge",
      startId: "705188af-98dd-4cc4-bb00-a9ba37445cb2",
      endId: "be370898-db0f-4e36-893b-48e6b216186c",
    },
    {
      start: {
        x: 5700,
        y: 2060,
      },
      end: {
        x: 5940,
        y: 2060,
      },
      id: "221a03c6-9d4b-4db7-b7f1-5bfb4475ffd0",
      name: "TwoWayHEdge",
      startId: "be370898-db0f-4e36-893b-48e6b216186c",
      endId: "9bec4ce4-612b-4afa-9243-1cd62ecce0cb",
    },
    {
      start: {
        x: 5420,
        y: 1680,
      },
      end: {
        x: 5700,
        y: 1680,
      },
      id: "f2e1976e-5b8e-4938-b7ca-464058e0a31a",
      name: "TwoWayHEdge",
      startId: "3c6d04ca-3c84-4291-ad77-6a5ea3c3ba5e",
      endId: "705188af-98dd-4cc4-bb00-a9ba37445cb2",
    },
    {
      start: {
        x: 5200,
        y: 1680,
      },
      end: {
        x: 5420,
        y: 1680,
      },
      id: "824e96ec-896e-47cf-9893-ea700d2ed06c",
      name: "TwoWayHEdge",
      startId: "f9bc4b6e-9ad9-4f94-a903-0f61194c9f04",
      endId: "3c6d04ca-3c84-4291-ad77-6a5ea3c3ba5e",
    },
    {
      start: {
        x: 5440,
        y: 1280,
      },
      end: {
        x: 5420,
        y: 1680,
      },
      id: "bf9733a9-5db0-4544-8085-4fb08d56ad53",
      name: "TwoWayVEdge",
      startId: "cf7c8c32-3ad2-4481-a7b3-37a5f3c9bc07",
      endId: "3c6d04ca-3c84-4291-ad77-6a5ea3c3ba5e",
    },
    {
      start: {
        x: 5000,
        y: 1680,
      },
      end: {
        x: 5200,
        y: 1680,
      },
      id: "3efb1f36-8f51-4ead-ae5b-9319e62e32a4",
      name: "TwoWayHEdge",
      startId: "d0e7bf3f-c3e2-4bf5-bfeb-2e698a4d8cbc",
      endId: "f9bc4b6e-9ad9-4f94-a903-0f61194c9f04",
    },
    {
      start: {
        x: 4720,
        y: 1680,
      },
      end: {
        x: 5000,
        y: 1680,
      },
      id: "910938a5-a436-4652-b522-32718b20eaf4",
      name: "TwoWayHEdge",
      startId: "a099963b-adef-4e2b-8607-fffc3332cdcc",
      endId: "d0e7bf3f-c3e2-4bf5-bfeb-2e698a4d8cbc",
    },
    {
      start: {
        x: 5000,
        y: 1680,
      },
      end: {
        x: 5000,
        y: 1980,
      },
      id: "9cabe1e5-d32d-4498-868e-31748360755d",
      name: "TwoWayVEdge",
      startId: "d0e7bf3f-c3e2-4bf5-bfeb-2e698a4d8cbc",
      endId: "2f66e572-585f-4adc-883e-2258473c7986",
    },
    {
      start: {
        x: 4720,
        y: 1980,
      },
      end: {
        x: 5000,
        y: 1980,
      },
      id: "5d28f26e-8baf-4cfb-b042-5b93cf5cf818",
      name: "TwoWayHEdge",
      startId: "e6f93d1d-b061-4b74-bbc1-19590dbc9ff1",
      endId: "2f66e572-585f-4adc-883e-2258473c7986",
    },
    {
      start: {
        x: 4720,
        y: 1820,
      },
      end: {
        x: 4720,
        y: 1980,
      },
      id: "87af8bd9-95db-4655-b29b-fe736afa6ad6",
      name: "TwoWayVEdge",
      startId: "5cf00cea-67c3-4f41-9f44-7817faafb147",
      endId: "e6f93d1d-b061-4b74-bbc1-19590dbc9ff1",
    },
    {
      start: {
        x: 4500,
        y: 1820,
      },
      end: {
        x: 4720,
        y: 1820,
      },
      id: "679b6e9f-d9a6-4699-9e8c-3e5fc1d0231c",
      name: "TwoWayHEdge",
      startId: "5e6aa939-1e28-4867-b331-a21e4ccbc6a6",
      endId: "5cf00cea-67c3-4f41-9f44-7817faafb147",
    },
    {
      start: {
        x: 4300,
        y: 1820,
      },
      end: {
        x: 4500,
        y: 1820,
      },
      id: "6f4af83a-50ec-4cbc-9aa1-f5031d9d555c",
      name: "TwoWayHEdge",
      startId: "73e35429-9a56-4a9f-8bb5-d3fda80b2e98",
      endId: "5e6aa939-1e28-4867-b331-a21e4ccbc6a6",
    },
    {
      start: {
        x: 4140,
        y: 1820,
      },
      end: {
        x: 4300,
        y: 1820,
      },
      id: "93ce43fd-38e3-4643-b84a-7551f16709a1",
      name: "TwoWayHEdge",
      startId: "a4fa53ee-df3e-4961-93e6-693103ca952b",
      endId: "73e35429-9a56-4a9f-8bb5-d3fda80b2e98",
    },
    {
      start: {
        x: 3980,
        y: 1820,
      },
      end: {
        x: 4140,
        y: 1820,
      },
      id: "b5e6b333-7956-4251-92d6-2deebbac3021",
      name: "TwoWayHEdge",
      startId: "9e33d151-1869-441e-b700-13bc56a6d8be",
      endId: "a4fa53ee-df3e-4961-93e6-693103ca952b",
    },
    {
      start: {
        x: 3980,
        y: 1820,
      },
      end: {
        x: 3980,
        y: 1980,
      },
      id: "fd2177d6-2eca-450e-b9aa-873a803cb6b0",
      name: "TwoWayVEdge",
      startId: "9e33d151-1869-441e-b700-13bc56a6d8be",
      endId: "7a782a62-c7f8-4c24-a1d0-9fcf8c0013c9",
    },
    {
      start: {
        x: 3980,
        y: 1980,
      },
      end: {
        x: 4300,
        y: 1980,
      },
      id: "936eba7e-6854-419b-87c4-5735e3398641",
      name: "TwoWayHEdge",
      startId: "7a782a62-c7f8-4c24-a1d0-9fcf8c0013c9",
      endId: "61e8bd9e-415d-4ec7-9402-49bca140d07c",
    },
    {
      start: {
        x: 4300,
        y: 1820,
      },
      end: {
        x: 4300,
        y: 1980,
      },
      id: "beef6b94-e6c1-46dc-a0a0-c17f233a86d3",
      name: "TwoWayVEdge",
      startId: "73e35429-9a56-4a9f-8bb5-d3fda80b2e98",
      endId: "61e8bd9e-415d-4ec7-9402-49bca140d07c",
    },
    {
      start: {
        x: 2900,
        y: 1140,
      },
      end: {
        x: 3420,
        y: 1140,
      },
      id: "1fb9f130-41d0-4342-b40a-c6769e956b22",
      name: "TwoWayHEdge",
      startId: "fba9a176-5a8a-4239-85d9-dc8e979fd066",
      endId: "d9950003-e4a0-411b-b31a-aefcb68e8f50",
    },
    {
      start: {
        x: 3420,
        y: 1020,
      },
      end: {
        x: 3420,
        y: 1140,
      },
      id: "46e561f9-0ee1-4701-8ea6-38d24ed10d83",
      name: "TwoWayVEdge",
      startId: "dd46fc17-7d67-425a-9bc1-bb431168e30a",
      endId: "d9950003-e4a0-411b-b31a-aefcb68e8f50",
    },
    {
      start: {
        x: 3260,
        y: 1020,
      },
      end: {
        x: 3420,
        y: 1020,
      },
      id: "e4a30029-be80-45fa-9de8-6d240d9b031f",
      name: "TwoWayHEdge",
      startId: "5799d54d-fa84-490e-83ab-7a5cf80936e5",
      endId: "dd46fc17-7d67-425a-9bc1-bb431168e30a",
    },
    {
      start: {
        x: 3080,
        y: 1020,
      },
      end: {
        x: 3260,
        y: 1020,
      },
      id: "d1f91f1d-44e1-4fa3-9650-9b6876fdd886",
      name: "TwoWayHEdge",
      startId: "8263da02-3ee6-470b-b563-8d07200a65d8",
      endId: "5799d54d-fa84-490e-83ab-7a5cf80936e5",
    },
    {
      start: {
        x: 3420,
        y: 880,
      },
      end: {
        x: 3420,
        y: 1020,
      },
      id: "2c30c918-c391-4f49-a5e2-03cb8e77fe66",
      name: "TwoWayVEdge",
      startId: "911b2d82-fb4e-45fc-8e7a-0c7fa10b86dc",
      endId: "dd46fc17-7d67-425a-9bc1-bb431168e30a",
    },
    {
      start: {
        x: 3420,
        y: 880,
      },
      end: {
        x: 3600,
        y: 880,
      },
      id: "f9064fc7-2b68-4ab2-84a0-ea5f5e5d98a3",
      name: "TwoWayHEdge",
      startId: "911b2d82-fb4e-45fc-8e7a-0c7fa10b86dc",
      endId: "5ce9c87a-75eb-462c-9d99-9cc02800d0f3",
    },
    {
      start: {
        x: 3600,
        y: 880,
      },
      end: {
        x: 3600,
        y: 1140,
      },
      id: "dce5f10f-6f1a-47e7-9bfd-7ba6f9f48fb8",
      name: "TwoWayVEdge",
      startId: "5ce9c87a-75eb-462c-9d99-9cc02800d0f3",
      endId: "20bbac95-c132-42fa-9c65-9b065078cc61",
    },
    {
      start: {
        x: 3420,
        y: 1140,
      },
      end: {
        x: 3600,
        y: 1140,
      },
      id: "d06f55ea-d074-4ba0-950a-344bfd28b70f",
      name: "TwoWayHEdge",
      startId: "d9950003-e4a0-411b-b31a-aefcb68e8f50",
      endId: "20bbac95-c132-42fa-9c65-9b065078cc61",
    },
    {
      start: {
        x: 3600,
        y: 880,
      },
      end: {
        x: 3920,
        y: 880,
      },
      id: "82bd57e7-6c63-4218-9f6b-909f3727c8e0",
      name: "TwoWayHEdge",
      startId: "5ce9c87a-75eb-462c-9d99-9cc02800d0f3",
      endId: "4de1e84c-52ff-4a1c-9ebb-f65b0b5407bf",
    },
    {
      start: {
        x: 3920,
        y: 880,
      },
      end: {
        x: 4060,
        y: 880,
      },
      id: "1c6b6cc3-957e-48da-bc25-4e945684ebe1",
      name: "TwoWayHEdge",
      startId: "4de1e84c-52ff-4a1c-9ebb-f65b0b5407bf",
      endId: "9f57289d-af63-462d-ace9-e9f2afe6f7fc",
    },
    {
      start: {
        x: 4060,
        y: 880,
      },
      end: {
        x: 4200,
        y: 880,
      },
      id: "b3baa037-b579-45df-9549-9b0d6a49f75c",
      name: "TwoWayHEdge",
      startId: "9f57289d-af63-462d-ace9-e9f2afe6f7fc",
      endId: "426f3524-4f7e-45a6-a35a-2f1a3a2f5e8e",
    },
    {
      start: {
        x: 4200,
        y: 880,
      },
      end: {
        x: 4200,
        y: 1020,
      },
      id: "ad5e8576-b843-4ff6-8b12-d3f8e9f9ec46",
      name: "TwoWayVEdge",
      startId: "426f3524-4f7e-45a6-a35a-2f1a3a2f5e8e",
      endId: "05085a9a-dd9c-4bbd-b50a-8193a66ff43f",
    },
    {
      start: {
        x: 3920,
        y: 1020,
      },
      end: {
        x: 4200,
        y: 1020,
      },
      id: "584af308-b40f-48c4-a832-0b0121b08d51",
      name: "TwoWayHEdge",
      startId: "fa27c588-eadd-415f-83cd-ffe16d01bfa8",
      endId: "05085a9a-dd9c-4bbd-b50a-8193a66ff43f",
    },
    {
      start: {
        x: 3920,
        y: 880,
      },
      end: {
        x: 3920,
        y: 1020,
      },
      id: "a0eb823c-9e26-4c10-856b-6a5df2ec90d2",
      name: "TwoWayVEdge",
      startId: "4de1e84c-52ff-4a1c-9ebb-f65b0b5407bf",
      endId: "fa27c588-eadd-415f-83cd-ffe16d01bfa8",
    },
    {
      start: {
        x: 3420,
        y: 1140,
      },
      end: {
        x: 3420,
        y: 1380,
      },
      id: "0981c422-8ed9-4390-927d-09e72d38de68",
      name: "TwoWayVEdge",
      startId: "d9950003-e4a0-411b-b31a-aefcb68e8f50",
      endId: "52bd642a-52d4-4d26-9867-f1ad8fe5c497",
    },
    {
      start: {
        x: 3420,
        y: 1380,
      },
      end: {
        x: 3740,
        y: 1380,
      },
      id: "1165f0ae-3d56-4725-bfce-a986d7656424",
      name: "TwoWayHEdge",
      startId: "52bd642a-52d4-4d26-9867-f1ad8fe5c497",
      endId: "80d9e887-3287-442e-bf52-cc061e6c2f18",
    },
    {
      start: {
        x: 3420,
        y: 1380,
      },
      end: {
        x: 3420,
        y: 1560,
      },
      id: "f84458cb-9d5d-411d-b97d-726dea534afd",
      name: "TwoWayVEdge",
      startId: "52bd642a-52d4-4d26-9867-f1ad8fe5c497",
      endId: "88b7ae1c-c237-434d-9a73-9b97dd884eb6",
    },
    {
      start: {
        x: 3420,
        y: 1560,
      },
      end: {
        x: 3580,
        y: 1560,
      },
      id: "760df448-347f-447d-8167-e42e76bc07e5",
      name: "TwoWayHEdge",
      startId: "88b7ae1c-c237-434d-9a73-9b97dd884eb6",
      endId: "346c87b6-eea8-423d-8432-0dc1e4a206de",
    },
    {
      start: {
        x: 3580,
        y: 1560,
      },
      end: {
        x: 3740,
        y: 1560,
      },
      id: "c3544741-5241-45fe-8a00-b93505ac95aa",
      name: "TwoWayHEdge",
      startId: "346c87b6-eea8-423d-8432-0dc1e4a206de",
      endId: "b8e82c18-4aba-4a00-96e9-ab7f83744313",
    },
    {
      start: {
        x: 3740,
        y: 1380,
      },
      end: {
        x: 3740,
        y: 1560,
      },
      id: "92f0ac11-8bd3-41b6-a5e6-62db5eae7404",
      name: "TwoWayVEdge",
      startId: "80d9e887-3287-442e-bf52-cc061e6c2f18",
      endId: "b8e82c18-4aba-4a00-96e9-ab7f83744313",
    },
    {
      start: {
        x: 3740,
        y: 1380,
      },
      end: {
        x: 3880,
        y: 1380,
      },
      id: "2c761697-beb7-43eb-b5b0-a4fa1dc3582c",
      name: "TwoWayHEdge",
      startId: "80d9e887-3287-442e-bf52-cc061e6c2f18",
      endId: "ece3c926-944e-4ce0-89e4-da8165ccb26e",
    },
    {
      start: {
        x: 3920,
        y: 1220,
      },
      end: {
        x: 3880,
        y: 1380,
      },
      id: "654d87e3-38b3-4879-9962-56d4032b30f2",
      name: "TwoWayVEdge",
      startId: "e5c88916-3f77-4776-a647-97294072a6a8",
      endId: "ece3c926-944e-4ce0-89e4-da8165ccb26e",
    },
    {
      start: {
        x: 3920,
        y: 1220,
      },
      end: {
        x: 4180,
        y: 1260,
      },
      id: "6404535c-0694-4a1d-bd05-6c2fa059c861",
      name: "TwoWayHEdge",
      startId: "e5c88916-3f77-4776-a647-97294072a6a8",
      endId: "eb799bba-cec7-41f2-a956-49f35e5ce948",
    },
    {
      start: {
        x: 4220,
        y: 1120,
      },
      end: {
        x: 4180,
        y: 1260,
      },
      id: "952ac4ea-0150-4ee3-8baf-31b1267c2eec",
      name: "TwoWayVEdge",
      startId: "d88978a5-8235-4930-8006-cbaaa7246926",
      endId: "eb799bba-cec7-41f2-a956-49f35e5ce948",
    },
    {
      start: {
        x: 4220,
        y: 1120,
      },
      end: {
        x: 4380,
        y: 1100,
      },
      id: "630e67b4-243a-4a7d-956e-2113b3d7eca1",
      name: "TwoWayHEdge",
      startId: "d88978a5-8235-4930-8006-cbaaa7246926",
      endId: "154cff4a-48c8-4a6d-b2c4-ada33b7ac5ea",
    },
    {
      start: {
        x: 4200,
        y: 880,
      },
      end: {
        x: 4400,
        y: 880,
      },
      id: "20562ac9-6db0-4a22-add5-fa98934275a8",
      name: "TwoWayHEdge",
      startId: "426f3524-4f7e-45a6-a35a-2f1a3a2f5e8e",
      endId: "ed48060c-bbbe-40cd-8149-1b9ad26985a5",
    },
    {
      start: {
        x: 4400,
        y: 880,
      },
      end: {
        x: 4380,
        y: 1100,
      },
      id: "1866480b-7e66-4836-8691-b59663dcd51e",
      name: "TwoWayVEdge",
      startId: "ed48060c-bbbe-40cd-8149-1b9ad26985a5",
      endId: "154cff4a-48c8-4a6d-b2c4-ada33b7ac5ea",
    },
    {
      start: {
        x: 4300,
        y: 1580,
      },
      end: {
        x: 4300,
        y: 1820,
      },
      id: "575989c6-343b-4fc7-8c78-119c425ece56",
      name: "TwoWayVEdge",
      startId: "0a158e23-9084-44d3-be75-d3d981a3b89e",
      endId: "73e35429-9a56-4a9f-8bb5-d3fda80b2e98",
    },
    {
      start: {
        x: 3740,
        y: 1560,
      },
      end: {
        x: 3920,
        y: 1560,
      },
      id: "32ea8012-d976-48f0-a49a-1205ba1a9fbe",
      name: "TwoWayHEdge",
      startId: "b8e82c18-4aba-4a00-96e9-ab7f83744313",
      endId: "f26dd27e-90a4-4991-8625-efbfa68bb95e",
    },
    {
      start: {
        x: 3920,
        y: 1560,
      },
      end: {
        x: 4120,
        y: 1580,
      },
      id: "14a76115-a4b1-4056-b41f-d109d837b3ed",
      name: "TwoWayHEdge",
      startId: "f26dd27e-90a4-4991-8625-efbfa68bb95e",
      endId: "c10a973e-397e-4da8-974c-450698946144",
    },
    {
      start: {
        x: 4120,
        y: 1580,
      },
      end: {
        x: 4300,
        y: 1580,
      },
      id: "bd818e77-81ea-461d-ba3a-95deeaa9ede8",
      name: "TwoWayHEdge",
      startId: "c10a973e-397e-4da8-974c-450698946144",
      endId: "0a158e23-9084-44d3-be75-d3d981a3b89e",
    },
    {
      start: {
        x: 4120,
        y: 1420,
      },
      end: {
        x: 4120,
        y: 1580,
      },
      id: "71fba9ca-04f5-45e9-8ffe-842f640fbb8e",
      name: "TwoWayVEdge",
      startId: "fae906b5-cf1c-4945-af44-8e807c89ca1d",
      endId: "c10a973e-397e-4da8-974c-450698946144",
    },
    {
      start: {
        x: 4300,
        y: 1420,
      },
      end: {
        x: 4300,
        y: 1580,
      },
      id: "63ae7f2e-914c-4c3d-997a-7753521001f2",
      name: "TwoWayVEdge",
      startId: "3095cb04-8cd1-40b9-b288-086b455cb244",
      endId: "0a158e23-9084-44d3-be75-d3d981a3b89e",
    },
    {
      start: {
        x: 4300,
        y: 1420,
      },
      end: {
        x: 4620,
        y: 1440,
      },
      id: "613b015f-0cc2-4de6-b361-b4866e80b4a1",
      name: "TwoWayHEdge",
      startId: "3095cb04-8cd1-40b9-b288-086b455cb244",
      endId: "a75696bc-e5d2-4734-9d90-fb6b158a9c14",
    },
    {
      start: {
        x: 4660,
        y: 1240,
      },
      end: {
        x: 4620,
        y: 1440,
      },
      id: "7b549f32-4986-4a5b-8f3c-931f3488addc",
      name: "TwoWayVEdge",
      startId: "41ee7858-3646-42d2-9d9c-95b9e04ee573",
      endId: "a75696bc-e5d2-4734-9d90-fb6b158a9c14",
    },
    {
      start: {
        x: 4640,
        y: 1060,
      },
      end: {
        x: 4660,
        y: 1240,
      },
      id: "a0652b9f-30fd-4daf-8cdb-db2d51346224",
      name: "TwoWayVEdge",
      startId: "f3ea78db-43cb-40a7-9cb5-b040fa32f7af",
      endId: "41ee7858-3646-42d2-9d9c-95b9e04ee573",
    },
    {
      start: {
        x: 4400,
        y: 880,
      },
      end: {
        x: 4540,
        y: 880,
      },
      id: "2ae66b4e-9ce0-40b8-bc66-d524ab39f4c4",
      name: "TwoWayHEdge",
      startId: "ed48060c-bbbe-40cd-8149-1b9ad26985a5",
      endId: "f0b76c36-2d32-43df-a7d8-4d5ab7aab14a",
    },
    {
      start: {
        x: 4540,
        y: 880,
      },
      end: {
        x: 4680,
        y: 880,
      },
      id: "6fa75bec-6f0e-40a6-a8de-16ca9d4108e2",
      name: "TwoWayHEdge",
      startId: "f0b76c36-2d32-43df-a7d8-4d5ab7aab14a",
      endId: "ae494116-38d4-44dc-af55-b764863fda18",
    },
    {
      start: {
        x: 4680,
        y: 880,
      },
      end: {
        x: 4640,
        y: 1060,
      },
      id: "327334b5-ebeb-451c-9489-a8d8ae6a521b",
      name: "TwoWayVEdge",
      startId: "ae494116-38d4-44dc-af55-b764863fda18",
      endId: "f3ea78db-43cb-40a7-9cb5-b040fa32f7af",
    },
    {
      start: {
        x: 4540,
        y: 880,
      },
      end: {
        x: 4480,
        y: 1240,
      },
      id: "e4059f6b-f7a0-4662-af33-b2f7e88e6055",
      name: "TwoWayVEdge",
      startId: "f0b76c36-2d32-43df-a7d8-4d5ab7aab14a",
      endId: "00ec693d-eb9c-4b6e-9009-b1940e9050e4",
    },
    {
      start: {
        x: 4480,
        y: 1240,
      },
      end: {
        x: 4660,
        y: 1240,
      },
      id: "603544ef-fc73-4582-8dcb-f1021638835a",
      name: "TwoWayHEdge",
      startId: "00ec693d-eb9c-4b6e-9009-b1940e9050e4",
      endId: "41ee7858-3646-42d2-9d9c-95b9e04ee573",
    },
    {
      start: {
        x: 4640,
        y: 1060,
      },
      end: {
        x: 4860,
        y: 1060,
      },
      id: "d70427aa-bf7d-43b5-90b5-ac0136baa553",
      name: "TwoWayHEdge",
      startId: "f3ea78db-43cb-40a7-9cb5-b040fa32f7af",
      endId: "f50d1f46-3fa4-4569-8983-7e08c7dc74df",
    },
    {
      start: {
        x: 4860,
        y: 1060,
      },
      end: {
        x: 4820,
        y: 1280,
      },
      id: "7689e618-d96d-4067-b227-654babf4fc7b",
      name: "TwoWayVEdge",
      startId: "f50d1f46-3fa4-4569-8983-7e08c7dc74df",
      endId: "7eb250aa-3c1d-46b3-9d80-d0d9ee6addb6",
    },
    {
      start: {
        x: 4820,
        y: 1280,
      },
      end: {
        x: 4860,
        y: 1440,
      },
      id: "74beab06-bd6e-440b-8a5a-8f82b06002f5",
      name: "TwoWayVEdge",
      startId: "7eb250aa-3c1d-46b3-9d80-d0d9ee6addb6",
      endId: "6bac48a6-24f0-4bd6-979b-75878362c431",
    },
    {
      start: {
        x: 4620,
        y: 1440,
      },
      end: {
        x: 4860,
        y: 1440,
      },
      id: "4a944fcb-e41d-4e8b-ab51-193028dbf97d",
      name: "TwoWayHEdge",
      startId: "a75696bc-e5d2-4734-9d90-fb6b158a9c14",
      endId: "6bac48a6-24f0-4bd6-979b-75878362c431",
    },
    {
      start: {
        x: 5000,
        y: 1480,
      },
      end: {
        x: 5000,
        y: 1680,
      },
      id: "db39d052-faa4-40e1-bad9-17ef3b2cc27e",
      name: "TwoWayVEdge",
      startId: "83aaf1d8-8ca9-447e-964f-8fcd977577f8",
      endId: "d0e7bf3f-c3e2-4bf5-bfeb-2e698a4d8cbc",
    },
    {
      start: {
        x: 4820,
        y: 1280,
      },
      end: {
        x: 5040,
        y: 1280,
      },
      id: "0fb9eaf0-53c5-4b1d-9886-02332ba7d473",
      name: "TwoWayHEdge",
      startId: "7eb250aa-3c1d-46b3-9d80-d0d9ee6addb6",
      endId: "a7b7a9f4-721d-441e-8ba0-61f1578bde79",
    },
    {
      start: {
        x: 5040,
        y: 1280,
      },
      end: {
        x: 5000,
        y: 1480,
      },
      id: "65128552-add5-48e3-9a67-9712de5efa80",
      name: "TwoWayVEdge",
      startId: "a7b7a9f4-721d-441e-8ba0-61f1578bde79",
      endId: "83aaf1d8-8ca9-447e-964f-8fcd977577f8",
    },
    {
      start: {
        x: 5040,
        y: 1280,
      },
      end: {
        x: 5240,
        y: 1280,
      },
      id: "549a8808-a753-4387-a442-241c7ac1372c",
      name: "TwoWayHEdge",
      startId: "a7b7a9f4-721d-441e-8ba0-61f1578bde79",
      endId: "26db1bd9-4fa9-48e1-baf5-72a5002d7999",
    },
    {
      start: {
        x: 5240,
        y: 1280,
      },
      end: {
        x: 5440,
        y: 1280,
      },
      id: "d415a58c-481c-4103-ac0e-5862bcd67e14",
      name: "TwoWayHEdge",
      startId: "26db1bd9-4fa9-48e1-baf5-72a5002d7999",
      endId: "cf7c8c32-3ad2-4481-a7b3-37a5f3c9bc07",
    },
    {
      start: {
        x: 4860,
        y: 920,
      },
      end: {
        x: 4860,
        y: 1060,
      },
      id: "4939c294-d4b5-44fe-b408-b99f8d927634",
      name: "TwoWayVEdge",
      startId: "4be53e84-b53d-4ccd-b561-423e8967e8e1",
      endId: "f50d1f46-3fa4-4569-8983-7e08c7dc74df",
    },
    {
      start: {
        x: 4860,
        y: 920,
      },
      end: {
        x: 5060,
        y: 920,
      },
      id: "72367f80-5457-49a9-8927-839c05eb44a1",
      name: "TwoWayHEdge",
      startId: "4be53e84-b53d-4ccd-b561-423e8967e8e1",
      endId: "ce2111b6-ba86-467d-8bd1-227263a11185",
    },
    {
      start: {
        x: 5060,
        y: 920,
      },
      end: {
        x: 5240,
        y: 920,
      },
      id: "49cc05df-7f74-4fc5-9fb4-30e084d8a383",
      name: "TwoWayHEdge",
      startId: "ce2111b6-ba86-467d-8bd1-227263a11185",
      endId: "4ad099f7-b44f-40cd-8b45-3366683f7e80",
    },
    {
      start: {
        x: 5240,
        y: 920,
      },
      end: {
        x: 5240,
        y: 1280,
      },
      id: "6348f183-0d2d-4f2a-8cd8-5dbcd93458e0",
      name: "TwoWayVEdge",
      startId: "4ad099f7-b44f-40cd-8b45-3366683f7e80",
      endId: "26db1bd9-4fa9-48e1-baf5-72a5002d7999",
    },
    {
      start: {
        x: 5240,
        y: 920,
      },
      end: {
        x: 5440,
        y: 920,
      },
      id: "e626b942-1ba6-4d73-82f2-6b4231718052",
      name: "TwoWayHEdge",
      startId: "4ad099f7-b44f-40cd-8b45-3366683f7e80",
      endId: "18d56c6d-a830-4f18-a3a2-0b54523a4f71",
    },
    {
      start: {
        x: 5440,
        y: 920,
      },
      end: {
        x: 5440,
        y: 1100,
      },
      id: "65b8e974-d038-4999-bcf4-96217efd3461",
      name: "TwoWayVEdge",
      startId: "18d56c6d-a830-4f18-a3a2-0b54523a4f71",
      endId: "928c874c-8000-4dbe-94ff-e74e89e24ba7",
    },
    {
      start: {
        x: 5440,
        y: 1100,
      },
      end: {
        x: 5440,
        y: 1280,
      },
      id: "725f285e-2575-4f17-902d-3f4efe37ed39",
      name: "TwoWayVEdge",
      startId: "928c874c-8000-4dbe-94ff-e74e89e24ba7",
      endId: "cf7c8c32-3ad2-4481-a7b3-37a5f3c9bc07",
    },
    {
      start: {
        x: 5440,
        y: 1100,
      },
      end: {
        x: 5780,
        y: 1100,
      },
      id: "82149c13-9474-465e-8232-7ee9463a5c16",
      name: "TwoWayHEdge",
      startId: "928c874c-8000-4dbe-94ff-e74e89e24ba7",
      endId: "dcdb4871-3b5e-49c0-98c8-cf4f724da90c",
    },
    {
      start: {
        x: 5440,
        y: 1280,
      },
      end: {
        x: 5600,
        y: 1280,
      },
      id: "553e0693-cdae-49ae-8771-f09a71ce436b",
      name: "TwoWayHEdge",
      startId: "cf7c8c32-3ad2-4481-a7b3-37a5f3c9bc07",
      endId: "32881a6e-e91c-42b7-ad7b-80aa76a034f9",
    },
    {
      start: {
        x: 5600,
        y: 1280,
      },
      end: {
        x: 5780,
        y: 1280,
      },
      id: "476e712b-d2d9-40af-a357-b9e95c2abbfc",
      name: "TwoWayHEdge",
      startId: "32881a6e-e91c-42b7-ad7b-80aa76a034f9",
      endId: "b31defe8-e0cf-4b3b-bf8b-d5357410230b",
    },
    {
      start: {
        x: 5780,
        y: 1100,
      },
      end: {
        x: 5780,
        y: 1280,
      },
      id: "77e8b64d-1e48-4303-9569-bd6104b4ef77",
      name: "TwoWayVEdge",
      startId: "dcdb4871-3b5e-49c0-98c8-cf4f724da90c",
      endId: "b31defe8-e0cf-4b3b-bf8b-d5357410230b",
    },
    {
      start: {
        x: 5780,
        y: 1280,
      },
      end: {
        x: 5960,
        y: 1280,
      },
      id: "85347367-fb6c-4010-8503-83e0fa6315b7",
      name: "TwoWayHEdge",
      startId: "b31defe8-e0cf-4b3b-bf8b-d5357410230b",
      endId: "d8cc33e4-38ca-432b-abec-778a19553f21",
    },
    {
      start: {
        x: 5780,
        y: 880,
      },
      end: {
        x: 5780,
        y: 1100,
      },
      id: "86e8a342-5b1a-4e19-b8b9-2965c04293e0",
      name: "TwoWayVEdge",
      startId: "fbe34faa-f385-4dec-a65e-c2047207f357",
      endId: "dcdb4871-3b5e-49c0-98c8-cf4f724da90c",
    },
    {
      start: {
        x: 5780,
        y: 660,
      },
      end: {
        x: 5780,
        y: 880,
      },
      id: "0f988822-5151-407b-8545-a7cf2901b690",
      name: "TwoWayVEdge",
      startId: "d1eb8310-da9b-4686-ba53-4a350c879483",
      endId: "fbe34faa-f385-4dec-a65e-c2047207f357",
    },
    {
      start: {
        x: 5780,
        y: 660,
      },
      end: {
        x: 5940,
        y: 660,
      },
      id: "4bc063c5-9f39-4e87-8d7f-31865dac7dda",
      name: "TwoWayHEdge",
      startId: "d1eb8310-da9b-4686-ba53-4a350c879483",
      endId: "8142bc4e-6005-44c6-a932-8dbf504a9a6d",
    },
    {
      start: {
        x: 5940,
        y: 380,
      },
      end: {
        x: 5940,
        y: 660,
      },
      id: "fe791b2c-c31b-4c88-bc93-60eaf70f38fa",
      name: "TwoWayVEdge",
      startId: "f830ab25-4d38-41c6-94f0-c666a579898e",
      endId: "8142bc4e-6005-44c6-a932-8dbf504a9a6d",
    },
    {
      start: {
        x: 5940,
        y: 380,
      },
      end: {
        x: 6120,
        y: 380,
      },
      id: "58755b9e-fc1f-4773-bac6-2774cbda2f9c",
      name: "TwoWayHEdge",
      startId: "f830ab25-4d38-41c6-94f0-c666a579898e",
      endId: "0a83357a-3737-4f23-b262-222f10e6313f",
    },
    {
      start: {
        x: 5700,
        y: 380,
      },
      end: {
        x: 5940,
        y: 380,
      },
      id: "54999d6e-cb2b-46b6-b6b5-2d0569b80ad0",
      name: "TwoWayHEdge",
      startId: "9ad0ccea-3959-4374-8cd5-87eb25d049c8",
      endId: "f830ab25-4d38-41c6-94f0-c666a579898e",
    },
    {
      start: {
        x: 5440,
        y: 380,
      },
      end: {
        x: 5700,
        y: 380,
      },
      id: "0dccfc6d-70f2-446a-b0da-c8ad63c40ebc",
      name: "TwoWayHEdge",
      startId: "4ab803fa-af4e-485f-b9f9-ed40c7b5168e",
      endId: "9ad0ccea-3959-4374-8cd5-87eb25d049c8",
    },
    {
      start: {
        x: 5440,
        y: 380,
      },
      end: {
        x: 5440,
        y: 520,
      },
      id: "cb744103-c9f8-494a-92cf-360b9543fa8d",
      name: "TwoWayVEdge",
      startId: "4ab803fa-af4e-485f-b9f9-ed40c7b5168e",
      endId: "190d20c9-43d5-4f9f-9091-38458143c741",
    },
    {
      start: {
        x: 5040,
        y: 520,
      },
      end: {
        x: 5440,
        y: 520,
      },
      id: "6469500e-3985-48ce-a86e-2977284fdc0f",
      name: "TwoWayHEdge",
      startId: "f8932ec5-3f1b-4544-967c-fdacceeedf76",
      endId: "190d20c9-43d5-4f9f-9091-38458143c741",
    },
    {
      start: {
        x: 5040,
        y: 380,
      },
      end: {
        x: 5040,
        y: 520,
      },
      id: "108f14cd-5730-4e40-a892-e2020f14f0d8",
      name: "TwoWayVEdge",
      startId: "ead2be82-0949-4b6b-8f0a-395acf3d68d5",
      endId: "f8932ec5-3f1b-4544-967c-fdacceeedf76",
    },
    {
      start: {
        x: 5040,
        y: 380,
      },
      end: {
        x: 5240,
        y: 380,
      },
      id: "9a245823-9600-4dea-8fb0-9ab5d07a8f18",
      name: "TwoWayHEdge",
      startId: "ead2be82-0949-4b6b-8f0a-395acf3d68d5",
      endId: "070f4748-dd4a-4833-aee7-e681d14f2208",
    },
    {
      start: {
        x: 5240,
        y: 380,
      },
      end: {
        x: 5440,
        y: 380,
      },
      id: "3dee240e-aadb-455b-a859-f50568a00571",
      name: "TwoWayHEdge",
      startId: "070f4748-dd4a-4833-aee7-e681d14f2208",
      endId: "4ab803fa-af4e-485f-b9f9-ed40c7b5168e",
    },
    {
      start: {
        x: 4880,
        y: 380,
      },
      end: {
        x: 5040,
        y: 380,
      },
      id: "75da8bdb-3e9e-4db2-a974-28741ae11069",
      name: "TwoWayHEdge",
      startId: "95029cc6-df57-4a7c-bb9b-d35d992b5e0d",
      endId: "ead2be82-0949-4b6b-8f0a-395acf3d68d5",
    },
    {
      start: {
        x: 4880,
        y: 380,
      },
      end: {
        x: 4880,
        y: 520,
      },
      id: "0b5dbaee-4237-4b3e-8eb2-814462412a9f",
      name: "TwoWayVEdge",
      startId: "95029cc6-df57-4a7c-bb9b-d35d992b5e0d",
      endId: "2ec3f1d2-ed0a-42ad-8493-ef8446e9dde2",
    },
    {
      start: {
        x: 4880,
        y: 520,
      },
      end: {
        x: 4880,
        y: 660,
      },
      id: "7cfba16a-8173-4723-8b33-34bdddf60eb8",
      name: "TwoWayVEdge",
      startId: "2ec3f1d2-ed0a-42ad-8493-ef8446e9dde2",
      endId: "50dc5469-5f68-4fe8-9755-6b5b95577101",
    },
    {
      start: {
        x: 4720,
        y: 660,
      },
      end: {
        x: 4880,
        y: 660,
      },
      id: "aa65d8e5-f247-4f06-bf7f-0a3082aa7f47",
      name: "TwoWayHEdge",
      startId: "4c947556-8d0e-4d79-a24a-416386f2e40c",
      endId: "50dc5469-5f68-4fe8-9755-6b5b95577101",
    },
    {
      start: {
        x: 4720,
        y: 660,
      },
      end: {
        x: 4680,
        y: 880,
      },
      id: "074f1e8f-ccf4-4633-82f6-3d9cdf022f29",
      name: "OneWayVEdge",
      startId: "4c947556-8d0e-4d79-a24a-416386f2e40c",
      endId: "ae494116-38d4-44dc-af55-b764863fda18",
    },
    {
      start: {
        x: 5780,
        y: 1100,
      },
      end: {
        x: 5960,
        y: 1100,
      },
      id: "dc677681-2c1d-4126-9be6-1e51269060bd",
      name: "TwoWayHEdge",
      startId: "dcdb4871-3b5e-49c0-98c8-cf4f724da90c",
      endId: "fcea56f3-edd8-4d2f-8b7b-1d703cda68cb",
    },
    {
      start: {
        x: 5960,
        y: 1100,
      },
      end: {
        x: 6120,
        y: 1100,
      },
      id: "7c9fa105-1d18-4fc4-a121-84682b515a8a",
      name: "TwoWayHEdge",
      startId: "fcea56f3-edd8-4d2f-8b7b-1d703cda68cb",
      endId: "e4abf82c-a900-4dac-8776-36802dccbb3d",
    },
    {
      start: {
        x: 6120,
        y: 1100,
      },
      end: {
        x: 6300,
        y: 1100,
      },
      id: "582041f7-3883-4eac-836f-32ee53bd6431",
      name: "TwoWayHEdge",
      startId: "e4abf82c-a900-4dac-8776-36802dccbb3d",
      endId: "26937dd4-6530-4cd5-bb3a-7b7f065c2ad5",
    },
    {
      start: {
        x: 6300,
        y: 1100,
      },
      end: {
        x: 6300,
        y: 1280,
      },
      id: "6ec865a1-1c74-484b-bbb5-6bb02b8f6210",
      name: "TwoWayVEdge",
      startId: "26937dd4-6530-4cd5-bb3a-7b7f065c2ad5",
      endId: "75ab1285-3a82-4361-b40c-3a41bbbd9d7b",
    },
    {
      start: {
        x: 6300,
        y: 1280,
      },
      end: {
        x: 6500,
        y: 1280,
      },
      id: "011100c1-85b5-4163-a7fd-b65568e0d6f3",
      name: "TwoWayHEdge",
      startId: "75ab1285-3a82-4361-b40c-3a41bbbd9d7b",
      endId: "f8171b03-884a-4214-9d51-77c0e065f83f",
    },
    {
      start: {
        x: 6500,
        y: 1280,
      },
      end: {
        x: 6700,
        y: 1280,
      },
      id: "c44c3f42-dc11-4310-9a1c-1fa96a516912",
      name: "TwoWayHEdge",
      startId: "f8171b03-884a-4214-9d51-77c0e065f83f",
      endId: "85768a72-4f25-4fe5-8ab3-35ee315a586a",
    },
    {
      start: {
        x: 6700,
        y: 1280,
      },
      end: {
        x: 6700,
        y: 1480,
      },
      id: "83dbf908-b7c0-4a06-b898-149a8c374296",
      name: "TwoWayVEdge",
      startId: "85768a72-4f25-4fe5-8ab3-35ee315a586a",
      endId: "342e3557-7a07-4dc1-8510-54ef022461ee",
    },
    {
      start: {
        x: 6700,
        y: 1480,
      },
      end: {
        x: 6700,
        y: 1680,
      },
      id: "c7a60d3d-159b-4564-beea-0343dfd0dafa",
      name: "TwoWayVEdge",
      startId: "342e3557-7a07-4dc1-8510-54ef022461ee",
      endId: "4f8727a8-167b-4ef5-8130-6981c6b381cb",
    },
    {
      start: {
        x: 6700,
        y: 1680,
      },
      end: {
        x: 6900,
        y: 1680,
      },
      id: "4a1c4477-3e08-4768-94c0-e0c982c5cbf4",
      name: "TwoWayHEdge",
      startId: "4f8727a8-167b-4ef5-8130-6981c6b381cb",
      endId: "ac631c99-139e-449d-9439-d5e991b9264f",
    },
    {
      start: {
        x: 6700,
        y: 1100,
      },
      end: {
        x: 6700,
        y: 1280,
      },
      id: "2e529be6-1bfe-40b3-95bb-ff23f7963b16",
      name: "TwoWayVEdge",
      startId: "e063e854-de3b-4bb9-b2be-b381faa23eaa",
      endId: "85768a72-4f25-4fe5-8ab3-35ee315a586a",
    },
    {
      start: {
        x: 6700,
        y: 1100,
      },
      end: {
        x: 6920,
        y: 1100,
      },
      id: "7669fc8e-b492-4d45-8a8a-f42c39ffce5f",
      name: "TwoWayHEdge",
      startId: "e063e854-de3b-4bb9-b2be-b381faa23eaa",
      endId: "a5d495c7-c0f4-4598-841b-d57271d3a4bc",
    },
    {
      start: {
        x: 6920,
        y: 1100,
      },
      end: {
        x: 7140,
        y: 1100,
      },
      id: "2a454058-a957-467d-8aae-4290ade07a64",
      name: "TwoWayHEdge",
      startId: "a5d495c7-c0f4-4598-841b-d57271d3a4bc",
      endId: "e04306ed-97b6-46c5-98ec-4cbdb66ab497",
    },
    {
      start: {
        x: 7140,
        y: 1100,
      },
      end: {
        x: 7140,
        y: 1280,
      },
      id: "d72562a5-e40a-4925-a1f3-9993388a8478",
      name: "TwoWayVEdge",
      startId: "e04306ed-97b6-46c5-98ec-4cbdb66ab497",
      endId: "101e444e-6b17-48a4-b752-0e25a15ea17d",
    },
    {
      start: {
        x: 7140,
        y: 1280,
      },
      end: {
        x: 7420,
        y: 1300,
      },
      id: "870d19bf-f48b-4f3b-9233-27bd14cd44f2",
      name: "TwoWayHEdge",
      startId: "101e444e-6b17-48a4-b752-0e25a15ea17d",
      endId: "054360d8-c7a9-4aca-b293-74d8ff1dceda",
    },
    {
      start: {
        x: 7420,
        y: 1300,
      },
      end: {
        x: 7700,
        y: 1280,
      },
      id: "78a4f852-c28b-406d-a6bc-a667065c1e7e",
      name: "TwoWayHEdge",
      startId: "054360d8-c7a9-4aca-b293-74d8ff1dceda",
      endId: "feaaa359-1643-4104-8fbf-ee877cbc3f34",
    },
    {
      start: {
        x: 7720,
        y: 960,
      },
      end: {
        x: 7700,
        y: 1280,
      },
      id: "4b458349-5489-40d3-b1c8-730baa9a2a0e",
      name: "TwoWayVEdge",
      startId: "5275a5cc-3646-4504-8c98-10ad9d4335c1",
      endId: "feaaa359-1643-4104-8fbf-ee877cbc3f34",
    },
    {
      start: {
        x: 7460,
        y: 960,
      },
      end: {
        x: 7720,
        y: 960,
      },
      id: "efabe1da-a0a8-4b6b-a81d-0d1d856359ad",
      name: "TwoWayHEdge",
      startId: "efde90c9-5358-498f-ac87-8e192d9aab99",
      endId: "5275a5cc-3646-4504-8c98-10ad9d4335c1",
    },
    {
      start: {
        x: 6120,
        y: 380,
      },
      end: {
        x: 6300,
        y: 380,
      },
      id: "a2dcf98b-217d-4e1a-b707-9bb0a2a46a19",
      name: "TwoWayHEdge",
      startId: "0a83357a-3737-4f23-b262-222f10e6313f",
      endId: "8778afea-3860-4b6f-b0e9-c6452cd45cd6",
    },
    {
      start: {
        x: 6300,
        y: 380,
      },
      end: {
        x: 6540,
        y: 380,
      },
      id: "2d71c955-6136-4882-a532-f71e76ef28bc",
      name: "TwoWayHEdge",
      startId: "8778afea-3860-4b6f-b0e9-c6452cd45cd6",
      endId: "c8029b99-b3ec-4a72-a8b9-b2b0b07033f2",
    },
    {
      start: {
        x: 6540,
        y: 380,
      },
      end: {
        x: 6500,
        y: 500,
      },
      id: "070ddb01-574e-4f02-84a2-084619d345e1",
      name: "TwoWayVEdge",
      startId: "c8029b99-b3ec-4a72-a8b9-b2b0b07033f2",
      endId: "ca7774a9-73cf-4514-b00e-047fd6629591",
    },
    {
      start: {
        x: 6500,
        y: 500,
      },
      end: {
        x: 6840,
        y: 500,
      },
      id: "787452af-178f-4cd8-8014-741658721d57",
      name: "TwoWayHEdge",
      startId: "ca7774a9-73cf-4514-b00e-047fd6629591",
      endId: "9443ca65-8362-4c9b-a4e9-83586b4174ad",
    },
    {
      start: {
        x: 6840,
        y: 500,
      },
      end: {
        x: 6780,
        y: 640,
      },
      id: "bdd3d98f-5038-42ac-8c3a-cd40b02077f9",
      name: "TwoWayVEdge",
      startId: "9443ca65-8362-4c9b-a4e9-83586b4174ad",
      endId: "fad32c7b-dafb-4f46-8b7f-3b0d5764abf8",
    },
    {
      start: {
        x: 6780,
        y: 640,
      },
      end: {
        x: 7160,
        y: 640,
      },
      id: "555cc25b-b61a-4ad4-ab7c-e82e1f50dd94",
      name: "TwoWayHEdge",
      startId: "fad32c7b-dafb-4f46-8b7f-3b0d5764abf8",
      endId: "eab05b24-e29e-4494-bdc7-dbfcb4fd7782",
    },
    {
      start: {
        x: 7160,
        y: 640,
      },
      end: {
        x: 7100,
        y: 780,
      },
      id: "4c82503c-e756-447b-8669-3827f556b460",
      name: "TwoWayVEdge",
      startId: "eab05b24-e29e-4494-bdc7-dbfcb4fd7782",
      endId: "4f495641-ada3-4683-b1dd-ecdaddeab7b2",
    },
    {
      start: {
        x: 7100,
        y: 780,
      },
      end: {
        x: 7460,
        y: 780,
      },
      id: "09416d59-7f4b-4c5d-b8aa-add7f6eb4778",
      name: "TwoWayHEdge",
      startId: "4f495641-ada3-4683-b1dd-ecdaddeab7b2",
      endId: "560942d6-6ae0-4a08-9484-66779ca0e442",
    },
    {
      start: {
        x: 7460,
        y: 780,
      },
      end: {
        x: 7460,
        y: 960,
      },
      id: "f0ec3099-1fe4-40f2-9fa7-9b06e877fade",
      name: "TwoWayVEdge",
      startId: "560942d6-6ae0-4a08-9484-66779ca0e442",
      endId: "efde90c9-5358-498f-ac87-8e192d9aab99",
    },
    {
      start: {
        x: 1760,
        y: 2060,
      },
      end: {
        x: 2720,
        y: 2060,
      },
      id: "d5eb48a2-4f51-4058-924a-ad37305f1379",
      name: "TwoWayHEdge",
      startId: "322eaf7d-b7d1-4a44-b489-c5a71c9f4614",
      endId: "76e06435-bf9b-4c2c-9ad0-9f8fe6a16459",
    },
    {
      start: {
        x: 1920,
        y: 1440,
      },
      end: {
        x: 1920,
        y: 1580,
      },
      id: "e8b82351-3405-4889-b143-036eb916c26c",
      name: "TwoWayVEdge",
      startId: "ac14c242-968e-4e04-b2e8-7cd0322c0d86",
      endId: "622b4534-364f-44da-affe-b11cd92a4600",
    },
    {
      start: {
        x: 1760,
        y: 2060,
      },
      end: {
        x: 1760,
        y: 2260,
      },
      id: "d452abfc-ca8c-47be-ae57-81af987dcc86",
      name: "TwoWayVEdge",
      startId: "322eaf7d-b7d1-4a44-b489-c5a71c9f4614",
      endId: "88143df3-c23e-4792-9a85-a57f2d0440a4",
    },
    {
      start: {
        x: 3680,
        y: 3820,
      },
      end: {
        x: 4420,
        y: 3740,
      },
      id: "55b34a4a-a9ad-4149-bb85-945c228bbd80",
      name: "TwoWayHEdge",
      startId: "8e1542c3-f4c6-4100-add8-b227c7d2de56",
      endId: "9053c5fe-0a37-4ccf-abc7-22dff8c60d81",
    },
    {
      start: {
        x: 3460,
        y: 3820,
      },
      end: {
        x: 3680,
        y: 3820,
      },
      id: "cb54df87-eba7-48eb-8e9a-efcf1261e1dc",
      name: "TwoWayHEdge",
      startId: "1d8d323b-1326-49f1-9bad-38adab906a94",
      endId: "8e1542c3-f4c6-4100-add8-b227c7d2de56",
    },
    {
      start: {
        x: 3480,
        y: 3520,
      },
      end: {
        x: 3460,
        y: 3820,
      },
      id: "0a3390c8-6861-49cc-a63c-6191138a3ee2",
      name: "TwoWayVEdge",
      startId: "8936a8cf-886c-43ad-a0eb-312592992fd9",
      endId: "1d8d323b-1326-49f1-9bad-38adab906a94",
    },
    {
      start: {
        x: 3160,
        y: 3520,
      },
      end: {
        x: 3480,
        y: 3520,
      },
      id: "781c60e8-d822-44e5-97d3-6f59fe7d5c51",
      name: "TwoWayHEdge",
      startId: "f7b5ff65-c762-425c-9586-a245c385f110",
      endId: "8936a8cf-886c-43ad-a0eb-312592992fd9",
    },
    {
      start: {
        x: 3160,
        y: 3260,
      },
      end: {
        x: 3160,
        y: 3520,
      },
      id: "2595692e-5dc6-4144-aa2f-b097422c772a",
      name: "TwoWayVEdge",
      startId: "a5f498e6-b8ce-4a7d-9992-b94f4843e44c",
      endId: "f7b5ff65-c762-425c-9586-a245c385f110",
    },
    {
      start: {
        x: 3160,
        y: 3260,
      },
      end: {
        x: 3380,
        y: 3260,
      },
      id: "ca54eb95-7f71-4805-9c86-0a3f9ecd6874",
      name: "TwoWayHEdge",
      startId: "a5f498e6-b8ce-4a7d-9992-b94f4843e44c",
      endId: "3f9ecf9d-4c05-4fcf-be46-ab33494df46f",
    },
    {
      start: {
        x: 3380,
        y: 3060,
      },
      end: {
        x: 3380,
        y: 3260,
      },
      id: "9e6b35c2-24a5-4fd2-817c-821c6cd5d188",
      name: "TwoWayVEdge",
      startId: "abd2d2d1-f967-4b06-b1e2-05f135981a67",
      endId: "3f9ecf9d-4c05-4fcf-be46-ab33494df46f",
    },
    {
      start: {
        x: 3160,
        y: 3060,
      },
      end: {
        x: 3380,
        y: 3060,
      },
      id: "484eb876-3572-40cf-b548-b817d9b12799",
      name: "TwoWayHEdge",
      startId: "174d85bb-217b-4a54-baa1-2c89c4b11ef1",
      endId: "abd2d2d1-f967-4b06-b1e2-05f135981a67",
    },
    {
      start: {
        x: 2960,
        y: 3060,
      },
      end: {
        x: 3160,
        y: 3060,
      },
      id: "7f815fd4-3819-4c4e-92f1-fb0af8508d21",
      name: "TwoWayHEdge",
      startId: "e8f299b9-0aeb-4799-a7c8-609a124bdcbd",
      endId: "174d85bb-217b-4a54-baa1-2c89c4b11ef1",
    },
    {
      start: {
        x: 2760,
        y: 3060,
      },
      end: {
        x: 2960,
        y: 3060,
      },
      id: "5f696359-cbc8-40f4-bf04-02db5c3b93ec",
      name: "TwoWayHEdge",
      startId: "7bea5b67-ef03-452d-acf4-f611dbcd8aea",
      endId: "e8f299b9-0aeb-4799-a7c8-609a124bdcbd",
    },
    {
      start: {
        x: 2760,
        y: 2760,
      },
      end: {
        x: 2760,
        y: 3060,
      },
      id: "93f974a2-4eb1-45c7-9255-98c21d512c43",
      name: "TwoWayVEdge",
      startId: "987230a9-f0a9-441e-97f6-6711b1855ee9",
      endId: "7bea5b67-ef03-452d-acf4-f611dbcd8aea",
    },
    {
      start: {
        x: 2760,
        y: 2760,
      },
      end: {
        x: 2960,
        y: 2760,
      },
      id: "b347d073-c067-42d3-8963-c2e898d656d2",
      name: "TwoWayHEdge",
      startId: "987230a9-f0a9-441e-97f6-6711b1855ee9",
      endId: "f5b58107-f585-4bd8-b2fc-e01d91e92aca",
    },
    {
      start: {
        x: 2960,
        y: 2760,
      },
      end: {
        x: 3000,
        y: 2920,
      },
      id: "c46a202a-4280-4652-b0eb-21b4c9523387",
      name: "TwoWayVEdge",
      startId: "f5b58107-f585-4bd8-b2fc-e01d91e92aca",
      endId: "6cb81b8e-a640-490a-94d0-f1223b4c5421",
    },
    {
      start: {
        x: 3000,
        y: 2920,
      },
      end: {
        x: 2960,
        y: 3060,
      },
      id: "09069232-7303-4d97-9524-65d22c40ddf5",
      name: "TwoWayVEdge",
      startId: "6cb81b8e-a640-490a-94d0-f1223b4c5421",
      endId: "e8f299b9-0aeb-4799-a7c8-609a124bdcbd",
    },
    {
      start: {
        x: 1760,
        y: 2260,
      },
      end: {
        x: 1760,
        y: 2460,
      },
      id: "66931558-4ee8-46b1-a0e2-b7d2832a1cb3",
      name: "TwoWayVEdge",
      startId: "88143df3-c23e-4792-9a85-a57f2d0440a4",
      endId: "d9bba158-17ec-4bda-9f21-f466cbb89fd4",
    },
    {
      start: {
        x: 1760,
        y: 2460,
      },
      end: {
        x: 1760,
        y: 2660,
      },
      id: "1bcce949-f732-4164-9633-a9abb06ad930",
      name: "TwoWayVEdge",
      startId: "d9bba158-17ec-4bda-9f21-f466cbb89fd4",
      endId: "3a0a7f06-ca31-4ae9-8e5d-67f6d33479e1",
    },
    {
      start: {
        x: 1760,
        y: 2660,
      },
      end: {
        x: 1960,
        y: 2660,
      },
      id: "4a5258ad-bc80-46e4-a4bc-fe90fd7bfa42",
      name: "TwoWayHEdge",
      startId: "3a0a7f06-ca31-4ae9-8e5d-67f6d33479e1",
      endId: "f7ee4c7c-cf1c-4218-a54b-fafaf2fe8968",
    },
    {
      start: {
        x: 1960,
        y: 2460,
      },
      end: {
        x: 1960,
        y: 2660,
      },
      id: "3f546543-825c-4540-904d-9a23ec29f036",
      name: "TwoWayVEdge",
      startId: "aaeb9d25-3961-4529-b9e3-fd6b92f455c2",
      endId: "f7ee4c7c-cf1c-4218-a54b-fafaf2fe8968",
    },
    {
      start: {
        x: 1960,
        y: 2660,
      },
      end: {
        x: 1960,
        y: 2840,
      },
      id: "da420198-2bb4-429e-9495-5e3a877f96bb",
      name: "TwoWayVEdge",
      startId: "f7ee4c7c-cf1c-4218-a54b-fafaf2fe8968",
      endId: "cd9e3b5d-7246-4557-848c-a8dac612fbdc",
    },
    {
      start: {
        x: 1960,
        y: 2840,
      },
      end: {
        x: 2160,
        y: 2840,
      },
      id: "7033405f-4727-4379-8267-a3e2a670bea8",
      name: "TwoWayHEdge",
      startId: "cd9e3b5d-7246-4557-848c-a8dac612fbdc",
      endId: "2877e24b-a5aa-4610-a0cb-afca864de892",
    },
    {
      start: {
        x: 2960,
        y: 2460,
      },
      end: {
        x: 2960,
        y: 2760,
      },
      id: "574baae4-b95d-4cec-b729-35c75c73e90c",
      name: "TwoWayVEdge",
      startId: "68d7fcd7-e960-4514-9603-f271284086d1",
      endId: "f5b58107-f585-4bd8-b2fc-e01d91e92aca",
    },
    {
      start: {
        x: 1760,
        y: 2460,
      },
      end: {
        x: 1540,
        y: 2460,
      },
      id: "34584329-d5f6-4b43-b22d-a8a6635a0699",
      name: "TwoWayHEdge",
      startId: "d9bba158-17ec-4bda-9f21-f466cbb89fd4",
      endId: "b07aaa89-3bf7-4cc4-9fbd-958eb1d9319c",
    },
    {
      start: {
        x: 1540,
        y: 2460,
      },
      end: {
        x: 1140,
        y: 2460,
      },
      id: "a695acf4-c195-4046-b8ef-807e906092f3",
      name: "TwoWayHEdge",
      startId: "b07aaa89-3bf7-4cc4-9fbd-958eb1d9319c",
      endId: "1fa37190-aa3b-4ffb-aa24-bfd3b32a3829",
    },
    {
      start: {
        x: 1140,
        y: 2460,
      },
      end: {
        x: 1140,
        y: 2300,
      },
      id: "fef1861b-8691-4ac7-aecb-9f47b96028f4",
      name: "TwoWayVEdge",
      startId: "1fa37190-aa3b-4ffb-aa24-bfd3b32a3829",
      endId: "5405ed3a-479b-43ee-9f73-eb6c1f14c89f",
    },
    {
      start: {
        x: 1140,
        y: 2300,
      },
      end: {
        x: 1340,
        y: 2300,
      },
      id: "0ed3eaf7-acbd-4e9d-9f72-c2c7c525be10",
      name: "TwoWayHEdge",
      startId: "5405ed3a-479b-43ee-9f73-eb6c1f14c89f",
      endId: "bbfc72ff-1393-46c4-96c3-e3a63ee14fcd",
    },
    {
      start: {
        x: 1340,
        y: 2300,
      },
      end: {
        x: 1540,
        y: 2300,
      },
      id: "f76691fe-84ed-4073-9b62-e9a3c437653f",
      name: "TwoWayHEdge",
      startId: "bbfc72ff-1393-46c4-96c3-e3a63ee14fcd",
      endId: "5ddb4be4-55e6-4ed5-9757-870c32c16026",
    },
    {
      start: {
        x: 1540,
        y: 2300,
      },
      end: {
        x: 1540,
        y: 2460,
      },
      id: "c4e8445c-067c-4e0e-8206-f4f1c7e2953d",
      name: "TwoWayVEdge",
      startId: "5ddb4be4-55e6-4ed5-9757-870c32c16026",
      endId: "b07aaa89-3bf7-4cc4-9fbd-958eb1d9319c",
    },
    {
      start: {
        x: 1340,
        y: 2300,
      },
      end: {
        x: 1380,
        y: 2120,
      },
      id: "7a8e5bf1-6aa8-4150-872d-232e94e424b3",
      name: "TwoWayVEdge",
      startId: "bbfc72ff-1393-46c4-96c3-e3a63ee14fcd",
      endId: "34d157a9-d9f6-4dc7-b2c6-528df4486844",
    },
    {
      start: {
        x: 1380,
        y: 2120,
      },
      end: {
        x: 1160,
        y: 2120,
      },
      id: "40b2063d-2e80-47b6-8369-5d67f710f886",
      name: "TwoWayHEdge",
      startId: "34d157a9-d9f6-4dc7-b2c6-528df4486844",
      endId: "ae4fce93-6a09-467c-a7aa-bc5b60de3709",
    },
    {
      start: {
        x: 1160,
        y: 2120,
      },
      end: {
        x: 1200,
        y: 1960,
      },
      id: "b14cffc8-3c71-4f31-9fa5-fb7d78e3de83",
      name: "TwoWayVEdge",
      startId: "ae4fce93-6a09-467c-a7aa-bc5b60de3709",
      endId: "080ec5a9-61b6-4c4b-8fc4-a6e692579093",
    },
    {
      start: {
        x: 1200,
        y: 1960,
      },
      end: {
        x: 1240,
        y: 1780,
      },
      id: "908fd5b4-62d0-4ca6-8ad9-2365729f0901",
      name: "TwoWayVEdge",
      startId: "080ec5a9-61b6-4c4b-8fc4-a6e692579093",
      endId: "f28220fb-cebb-4bca-874c-ed7ff1772494",
    },
    {
      start: {
        x: 1140,
        y: 2300,
      },
      end: {
        x: 920,
        y: 2300,
      },
      id: "2eca67d1-b9bc-43f0-9bbe-b26f508e4055",
      name: "TwoWayHEdge",
      startId: "5405ed3a-479b-43ee-9f73-eb6c1f14c89f",
      endId: "fa36d5a2-ace8-4dee-bba1-42cb2cd63920",
    },
    {
      start: {
        x: 920,
        y: 2300,
      },
      end: {
        x: 920,
        y: 2460,
      },
      id: "ab921518-119e-4bbf-b241-c662deee1e41",
      name: "TwoWayVEdge",
      startId: "fa36d5a2-ace8-4dee-bba1-42cb2cd63920",
      endId: "619c1270-fba7-4bad-910e-04a9bbd5ed60",
    },
    {
      start: {
        x: 920,
        y: 2300,
      },
      end: {
        x: 640,
        y: 2300,
      },
      id: "0c7c7a12-f886-4acf-8d81-63b5cc55898b",
      name: "TwoWayHEdge",
      startId: "fa36d5a2-ace8-4dee-bba1-42cb2cd63920",
      endId: "1ae37fd6-c783-484a-9f62-124406d09511",
    },
    {
      start: {
        x: 640,
        y: 2300,
      },
      end: {
        x: 380,
        y: 2300,
      },
      id: "a625c992-5064-4860-9c8e-07e6c3538c1a",
      name: "TwoWayHEdge",
      startId: "1ae37fd6-c783-484a-9f62-124406d09511",
      endId: "a124e103-4321-468c-81f9-405a49eda01c",
    },
    {
      start: {
        x: 920,
        y: 2460,
      },
      end: {
        x: 720,
        y: 2460,
      },
      id: "c75e87cf-9a18-411d-97eb-7624a97529d0",
      name: "TwoWayHEdge",
      startId: "619c1270-fba7-4bad-910e-04a9bbd5ed60",
      endId: "89ad7f5d-70d8-45bb-837f-ae21966708ff",
    },
    {
      start: {
        x: 720,
        y: 2460,
      },
      end: {
        x: 520,
        y: 2460,
      },
      id: "817e5062-e465-4a5e-a542-6f319bb4765b",
      name: "TwoWayHEdge",
      startId: "89ad7f5d-70d8-45bb-837f-ae21966708ff",
      endId: "35041058-a31a-4fe3-a316-5fc922b81f65",
    },
    {
      start: {
        x: 380,
        y: 2300,
      },
      end: {
        x: 340,
        y: 2460,
      },
      id: "fd750e3f-4950-44ba-a24a-d7ebe2ac1965",
      name: "TwoWayVEdge",
      startId: "a124e103-4321-468c-81f9-405a49eda01c",
      endId: "2b05583a-deef-4751-a687-7dd441e56a25",
    },
    {
      start: {
        x: 340,
        y: 2460,
      },
      end: {
        x: 380,
        y: 2640,
      },
      id: "a8f0c7d0-3e30-4730-ac74-b767c770187e",
      name: "TwoWayVEdge",
      startId: "2b05583a-deef-4751-a687-7dd441e56a25",
      endId: "e9650755-5abf-42a3-9e54-95cf54d82ff2",
    },
    {
      start: {
        x: 520,
        y: 2460,
      },
      end: {
        x: 480,
        y: 2660,
      },
      id: "33d5b3c6-32d7-480b-81df-46b8dd7b55a6",
      name: "TwoWayVEdge",
      startId: "35041058-a31a-4fe3-a316-5fc922b81f65",
      endId: "503df25c-7e22-48a8-a16a-b34355092f6f",
    },
    {
      start: {
        x: 340,
        y: 2460,
      },
      end: {
        x: 80,
        y: 2460,
      },
      id: "c51d9ff1-764b-48b6-b448-1d818ba8187e",
      name: "TwoWayHEdge",
      startId: "2b05583a-deef-4751-a687-7dd441e56a25",
      endId: "508251b0-ed61-474a-ba76-c1baf6d84157",
    },
    {
      start: {
        x: 80,
        y: 2460,
      },
      end: {
        x: 40,
        y: 2640,
      },
      id: "d7f9b1f8-883d-4277-ba71-247585ea0d8c",
      name: "TwoWayVEdge",
      startId: "508251b0-ed61-474a-ba76-c1baf6d84157",
      endId: "bc9968c9-5592-4513-9831-60716054ded9",
    },
    {
      start: {
        x: 40,
        y: 2640,
      },
      end: {
        x: 200,
        y: 2640,
      },
      id: "9a64ce5d-b827-4ce7-8f24-9ec747945073",
      name: "TwoWayHEdge",
      startId: "bc9968c9-5592-4513-9831-60716054ded9",
      endId: "9b163651-e5b6-4ba4-986f-589a4792f430",
    },
    {
      start: {
        x: 200,
        y: 2640,
      },
      end: {
        x: 380,
        y: 2640,
      },
      id: "9aa52658-2511-4d6a-a139-ec82570d4fd1",
      name: "TwoWayHEdge",
      startId: "9b163651-e5b6-4ba4-986f-589a4792f430",
      endId: "e9650755-5abf-42a3-9e54-95cf54d82ff2",
    },
    {
      start: {
        x: 920,
        y: 2460,
      },
      end: {
        x: 920,
        y: 2680,
      },
      id: "0a3d6f08-f471-4c11-b055-645207cad63b",
      name: "TwoWayVEdge",
      startId: "619c1270-fba7-4bad-910e-04a9bbd5ed60",
      endId: "6939e085-9678-4afd-89eb-99ed19440848",
    },
    {
      start: {
        x: 920,
        y: 2680,
      },
      end: {
        x: 1120,
        y: 2680,
      },
      id: "8f391eb6-65c6-4af3-8bfd-b45f74c17567",
      name: "TwoWayHEdge",
      startId: "6939e085-9678-4afd-89eb-99ed19440848",
      endId: "bbfd6dd2-a6b8-4024-be59-4cbeb921bde3",
    },
    {
      start: {
        x: 920,
        y: 2680,
      },
      end: {
        x: 720,
        y: 2680,
      },
      id: "f1ca306d-75b4-4a62-ba50-84b29d04a2f8",
      name: "TwoWayHEdge",
      startId: "6939e085-9678-4afd-89eb-99ed19440848",
      endId: "25d92ae6-fbf0-4a85-9164-6f59cb0d79b1",
    },
    {
      start: {
        x: 720,
        y: 2680,
      },
      end: {
        x: 720,
        y: 2860,
      },
      id: "5edec508-2d7d-440c-b921-a9ab84c22bff",
      name: "TwoWayVEdge",
      startId: "25d92ae6-fbf0-4a85-9164-6f59cb0d79b1",
      endId: "9f5f4743-9ddc-48a8-b6d9-c1a79872673f",
    },
    {
      start: {
        x: 1120,
        y: 2680,
      },
      end: {
        x: 1120,
        y: 2860,
      },
      id: "1320a934-d3ab-458d-9086-565475a2cc18",
      name: "TwoWayVEdge",
      startId: "bbfd6dd2-a6b8-4024-be59-4cbeb921bde3",
      endId: "bac5cc3d-654b-4e6a-a1ff-cd6ae1df9a31",
    },
    {
      start: {
        x: 720,
        y: 2860,
      },
      end: {
        x: 1120,
        y: 2860,
      },
      id: "381e7cda-0c31-4f6b-a5cc-e946005eed9b",
      name: "TwoWayHEdge",
      startId: "9f5f4743-9ddc-48a8-b6d9-c1a79872673f",
      endId: "bac5cc3d-654b-4e6a-a1ff-cd6ae1df9a31",
    },
    {
      start: {
        x: 480,
        y: 2660,
      },
      end: {
        x: 480,
        y: 2860,
      },
      id: "1631a321-5ced-463c-bc07-6387910de5f3",
      name: "TwoWayVEdge",
      startId: "503df25c-7e22-48a8-a16a-b34355092f6f",
      endId: "95aa9d15-ee59-4683-b364-56488fc692c4",
    },
    {
      start: {
        x: 480,
        y: 2860,
      },
      end: {
        x: 480,
        y: 3200,
      },
      id: "12cbbfa0-8845-4872-9786-ecff9fb368b3",
      name: "TwoWayVEdge",
      startId: "95aa9d15-ee59-4683-b364-56488fc692c4",
      endId: "4fe5cf19-9e47-4f21-948e-2dfa618eeabd",
    },
    {
      start: {
        x: 720,
        y: 2860,
      },
      end: {
        x: 720,
        y: 3020,
      },
      id: "a19b5188-da26-4016-8310-5cb927165f64",
      name: "TwoWayVEdge",
      startId: "9f5f4743-9ddc-48a8-b6d9-c1a79872673f",
      endId: "44c8b016-f626-4579-93d2-a5a8da72899e",
    },
    {
      start: {
        x: 720,
        y: 3020,
      },
      end: {
        x: 720,
        y: 3200,
      },
      id: "89ffbbdc-4d09-47ca-bf00-804905b59485",
      name: "TwoWayVEdge",
      startId: "44c8b016-f626-4579-93d2-a5a8da72899e",
      endId: "97dc432c-1c1f-40a8-b2d8-10b4b23d34c5",
    },
    {
      start: {
        x: 480,
        y: 3200,
      },
      end: {
        x: 720,
        y: 3200,
      },
      id: "e0de1bf7-4de5-4150-9ef5-1bde1a415cae",
      name: "TwoWayHEdge",
      startId: "4fe5cf19-9e47-4f21-948e-2dfa618eeabd",
      endId: "97dc432c-1c1f-40a8-b2d8-10b4b23d34c5",
    },
    {
      start: {
        x: 1120,
        y: 2860,
      },
      end: {
        x: 1120,
        y: 3120,
      },
      id: "8f23c555-51cf-43b0-98c3-333a80ab7196",
      name: "TwoWayVEdge",
      startId: "bac5cc3d-654b-4e6a-a1ff-cd6ae1df9a31",
      endId: "2109c97e-6c99-494d-b22d-066e5d546906",
    },
    {
      start: {
        x: 1120,
        y: 3120,
      },
      end: {
        x: 1300,
        y: 3120,
      },
      id: "556c7a53-6ea7-49c3-a9cd-d57831d5247b",
      name: "TwoWayHEdge",
      startId: "2109c97e-6c99-494d-b22d-066e5d546906",
      endId: "3dde5f36-3c29-4ea8-994f-42e164c26bf4",
    },
    {
      start: {
        x: 1300,
        y: 3120,
      },
      end: {
        x: 1300,
        y: 3360,
      },
      id: "1e29c8cd-a5d6-46b8-a08c-53f9cae8b2a2",
      name: "TwoWayVEdge",
      startId: "3dde5f36-3c29-4ea8-994f-42e164c26bf4",
      endId: "82b0d74a-6d10-40e1-ada7-030034d8b0dd",
    },
    {
      start: {
        x: 720,
        y: 3200,
      },
      end: {
        x: 880,
        y: 3200,
      },
      id: "4c0803d5-8584-4d6f-b2c6-10eede1fe62f",
      name: "TwoWayHEdge",
      startId: "97dc432c-1c1f-40a8-b2d8-10b4b23d34c5",
      endId: "3ed15ac5-7b4c-44f9-8fe3-e5aa12c76e9c",
    },
    {
      start: {
        x: 720,
        y: 3200,
      },
      end: {
        x: 720,
        y: 3520,
      },
      id: "63f36549-bd5b-4dc7-8aa9-a619acc40ba9",
      name: "TwoWayVEdge",
      startId: "97dc432c-1c1f-40a8-b2d8-10b4b23d34c5",
      endId: "b6f78526-4378-452e-a636-1c54a2f284b2",
    },
    {
      start: {
        x: 720,
        y: 3520,
      },
      end: {
        x: 880,
        y: 3520,
      },
      id: "b9f28f26-d620-4f7c-83bf-8f306649505b",
      name: "TwoWayHEdge",
      startId: "b6f78526-4378-452e-a636-1c54a2f284b2",
      endId: "950ad97b-5e35-487a-8aac-c67eb37eeb19",
    },
    {
      start: {
        x: 880,
        y: 3200,
      },
      end: {
        x: 880,
        y: 3360,
      },
      id: "fd2e8656-8d09-4f1e-b061-662b0f44e72d",
      name: "TwoWayVEdge",
      startId: "3ed15ac5-7b4c-44f9-8fe3-e5aa12c76e9c",
      endId: "9c2e8482-a87f-456b-b883-ad52956a8c1d",
    },
    {
      start: {
        x: 880,
        y: 3360,
      },
      end: {
        x: 880,
        y: 3520,
      },
      id: "e287d9c5-1a86-492f-ba0c-3e3a8ad04018",
      name: "TwoWayVEdge",
      startId: "9c2e8482-a87f-456b-b883-ad52956a8c1d",
      endId: "950ad97b-5e35-487a-8aac-c67eb37eeb19",
    },
    {
      start: {
        x: 880,
        y: 3360,
      },
      end: {
        x: 1100,
        y: 3360,
      },
      id: "1938037f-3903-4895-9b0a-687b53aaf8b6",
      name: "TwoWayHEdge",
      startId: "9c2e8482-a87f-456b-b883-ad52956a8c1d",
      endId: "4af81848-da32-4762-a3fd-f429b71ed19a",
    },
    {
      start: {
        x: 1100,
        y: 3360,
      },
      end: {
        x: 1300,
        y: 3360,
      },
      id: "dd552f1d-1d88-40b2-af0a-b7ab99f157d3",
      name: "TwoWayHEdge",
      startId: "4af81848-da32-4762-a3fd-f429b71ed19a",
      endId: "82b0d74a-6d10-40e1-ada7-030034d8b0dd",
    },
    {
      start: {
        x: 880,
        y: 3520,
      },
      end: {
        x: 1300,
        y: 3520,
      },
      id: "afbc3d2d-a494-46d8-b2ce-3d8096976c87",
      name: "TwoWayHEdge",
      startId: "950ad97b-5e35-487a-8aac-c67eb37eeb19",
      endId: "391ec145-152e-4677-bc24-63b469b9b6a1",
    },
    {
      start: {
        x: 1300,
        y: 3360,
      },
      end: {
        x: 1300,
        y: 3520,
      },
      id: "004a3677-3b08-4b4a-bf98-22fb57748a08",
      name: "TwoWayVEdge",
      startId: "82b0d74a-6d10-40e1-ada7-030034d8b0dd",
      endId: "391ec145-152e-4677-bc24-63b469b9b6a1",
    },
    {
      start: {
        x: 2160,
        y: 2840,
      },
      end: {
        x: 2160,
        y: 2980,
      },
      id: "98fd9f17-1330-4eb2-95b7-e331e0e4709a",
      name: "TwoWayVEdge",
      startId: "2877e24b-a5aa-4610-a0cb-afca864de892",
      endId: "f7b3185e-5513-4527-ada6-507c975faf15",
    },
    {
      start: {
        x: 2160,
        y: 2980,
      },
      end: {
        x: 1800,
        y: 2980,
      },
      id: "0bbbfb8d-2c34-4b95-864f-0a44a4c0a60f",
      name: "TwoWayHEdge",
      startId: "f7b3185e-5513-4527-ada6-507c975faf15",
      endId: "3bc2f290-fa82-4c09-bc3e-d474742de716",
    },
    {
      start: {
        x: 1800,
        y: 2980,
      },
      end: {
        x: 1480,
        y: 2980,
      },
      id: "e2248b10-3c6b-47b3-9274-86ef4a7e69a5",
      name: "TwoWayHEdge",
      startId: "3bc2f290-fa82-4c09-bc3e-d474742de716",
      endId: "2588b3f6-24d1-448c-8020-1f7a81c10ac4",
    },
    {
      start: {
        x: 1300,
        y: 3120,
      },
      end: {
        x: 1480,
        y: 3120,
      },
      id: "83ebb287-8f8e-44ce-93c2-59fe8588e8c3",
      name: "TwoWayHEdge",
      startId: "3dde5f36-3c29-4ea8-994f-42e164c26bf4",
      endId: "e1975b6a-5deb-4900-a851-dee9a177ff74",
    },
    {
      start: {
        x: 1480,
        y: 2980,
      },
      end: {
        x: 1480,
        y: 3120,
      },
      id: "4a84c381-9e1f-4d34-ab83-d2591c5349ae",
      name: "TwoWayVEdge",
      startId: "2588b3f6-24d1-448c-8020-1f7a81c10ac4",
      endId: "e1975b6a-5deb-4900-a851-dee9a177ff74",
    },
    {
      start: {
        x: 2160,
        y: 2980,
      },
      end: {
        x: 2160,
        y: 3200,
      },
      id: "7bcaa979-fc59-4f2e-a99f-60996a924288",
      name: "TwoWayVEdge",
      startId: "f7b3185e-5513-4527-ada6-507c975faf15",
      endId: "7e43d406-c437-4d8d-aa6c-9e01abcb2e32",
    },
    {
      start: {
        x: 2160,
        y: 3200,
      },
      end: {
        x: 2160,
        y: 3400,
      },
      id: "763a5169-3690-4c73-b11f-99c4ceb64a9c",
      name: "TwoWayVEdge",
      startId: "7e43d406-c437-4d8d-aa6c-9e01abcb2e32",
      endId: "8e0561cc-1352-4243-8129-91b43191fb12",
    },
    {
      start: {
        x: 1300,
        y: 3520,
      },
      end: {
        x: 1300,
        y: 3680,
      },
      id: "27f073d5-6706-4600-8d94-8642eba7b8f3",
      name: "TwoWayVEdge",
      startId: "391ec145-152e-4677-bc24-63b469b9b6a1",
      endId: "7842ed3c-4cac-45c8-9866-3f484aa5d356",
    },
    {
      start: {
        x: 1300,
        y: 3680,
      },
      end: {
        x: 1520,
        y: 3680,
      },
      id: "02293332-dac8-447d-8abe-2f66dfeaca36",
      name: "TwoWayHEdge",
      startId: "7842ed3c-4cac-45c8-9866-3f484aa5d356",
      endId: "9216746c-a2ee-402e-b3c3-c9e0fcf723ab",
    },
    {
      start: {
        x: 1520,
        y: 3680,
      },
      end: {
        x: 1720,
        y: 3680,
      },
      id: "3ada4b85-3f5a-414c-9123-c36716d481f9",
      name: "TwoWayHEdge",
      startId: "9216746c-a2ee-402e-b3c3-c9e0fcf723ab",
      endId: "262bf198-703a-4ca3-a7e5-67c1d40891bf",
    },
    {
      start: {
        x: 1720,
        y: 3680,
      },
      end: {
        x: 1720,
        y: 3540,
      },
      id: "807ea18f-07d5-4372-9f9c-9022fa486bd5",
      name: "TwoWayVEdge",
      startId: "262bf198-703a-4ca3-a7e5-67c1d40891bf",
      endId: "bdccf9dc-f2e9-44c0-bc84-cbb13aaabfe8",
    },
    {
      start: {
        x: 1720,
        y: 3540,
      },
      end: {
        x: 1720,
        y: 3400,
      },
      id: "9eebf140-c741-4021-8422-b5aa2f5d2263",
      name: "TwoWayVEdge",
      startId: "bdccf9dc-f2e9-44c0-bc84-cbb13aaabfe8",
      endId: "43eccedd-50d4-4958-9f09-c9c718102ae4",
    },
    {
      start: {
        x: 1720,
        y: 3400,
      },
      end: {
        x: 1940,
        y: 3400,
      },
      id: "cd28ecc8-3b96-4259-b43a-0f38936fa798",
      name: "TwoWayHEdge",
      startId: "43eccedd-50d4-4958-9f09-c9c718102ae4",
      endId: "60db115a-341e-4ec1-8740-91f99dd79375",
    },
    {
      start: {
        x: 1940,
        y: 3400,
      },
      end: {
        x: 2160,
        y: 3400,
      },
      id: "40823ddd-9fc4-4b59-b6e7-e0c1f9393f10",
      name: "TwoWayHEdge",
      startId: "60db115a-341e-4ec1-8740-91f99dd79375",
      endId: "8e0561cc-1352-4243-8129-91b43191fb12",
    },
    {
      start: {
        x: 3160,
        y: 3520,
      },
      end: {
        x: 3160,
        y: 3800,
      },
      id: "2e55a1f5-c37e-4d14-ba11-24a67a1ce052",
      name: "TwoWayVEdge",
      startId: "f7b5ff65-c762-425c-9586-a245c385f110",
      endId: "7175aab2-fb9f-410c-b6de-1019871f4cf1",
    },
    {
      start: {
        x: 3160,
        y: 3800,
      },
      end: {
        x: 2760,
        y: 3800,
      },
      id: "1c97d5c6-738a-4de9-a61b-4d11983815e6",
      name: "TwoWayHEdge",
      startId: "7175aab2-fb9f-410c-b6de-1019871f4cf1",
      endId: "f01e6bc2-9437-4100-bd35-25b988bf9dee",
    },
    {
      start: {
        x: 2160,
        y: 3400,
      },
      end: {
        x: 2760,
        y: 3400,
      },
      id: "05a39c9b-c78a-42b0-ad41-73bbf4335055",
      name: "TwoWayHEdge",
      startId: "8e0561cc-1352-4243-8129-91b43191fb12",
      endId: "58e6727a-ffdf-4cc9-9708-21e8b6a5c0dc",
    },
    {
      start: {
        x: 2760,
        y: 3400,
      },
      end: {
        x: 2760,
        y: 3800,
      },
      id: "3a1d3ac1-e388-4372-b498-90ddbec45e8b",
      name: "TwoWayVEdge",
      startId: "58e6727a-ffdf-4cc9-9708-21e8b6a5c0dc",
      endId: "f01e6bc2-9437-4100-bd35-25b988bf9dee",
    },
    {
      start: {
        x: 2760,
        y: 3800,
      },
      end: {
        x: 2760,
        y: 3980,
      },
      id: "b3316237-3393-47f7-b34a-8294eebd89d8",
      name: "TwoWayVEdge",
      startId: "f01e6bc2-9437-4100-bd35-25b988bf9dee",
      endId: "bdf8f00d-54e3-42d1-8c0e-70bb71fa0f44",
    },
    {
      start: {
        x: 2760,
        y: 3980,
      },
      end: {
        x: 2960,
        y: 3980,
      },
      id: "a8746cc8-95db-421d-9ed8-303db02963e0",
      name: "TwoWayHEdge",
      startId: "bdf8f00d-54e3-42d1-8c0e-70bb71fa0f44",
      endId: "4b7b0f65-729b-4957-a308-5d62f3d84597",
    },
    {
      start: {
        x: 2960,
        y: 3980,
      },
      end: {
        x: 3160,
        y: 3980,
      },
      id: "11124cd7-ac8d-4211-b7ca-02946546aea2",
      name: "TwoWayHEdge",
      startId: "4b7b0f65-729b-4957-a308-5d62f3d84597",
      endId: "658fcdcf-7640-4e34-a5b8-ce12554d0d55",
    },
    {
      start: {
        x: 3160,
        y: 3800,
      },
      end: {
        x: 3160,
        y: 3980,
      },
      id: "97e47f92-258b-4db4-be29-ccac113d34b1",
      name: "TwoWayVEdge",
      startId: "7175aab2-fb9f-410c-b6de-1019871f4cf1",
      endId: "658fcdcf-7640-4e34-a5b8-ce12554d0d55",
    },
    {
      start: {
        x: 2960,
        y: 3980,
      },
      end: {
        x: 2960,
        y: 4180,
      },
      id: "f93202ec-b86d-4294-aa18-33a27c6fb345",
      name: "TwoWayVEdge",
      startId: "4b7b0f65-729b-4957-a308-5d62f3d84597",
      endId: "f0b7fbea-2784-49d2-869b-a7d6ad6fa442",
    },
    {
      start: {
        x: 2960,
        y: 4180,
      },
      end: {
        x: 2960,
        y: 4360,
      },
      id: "5d95719d-b7ca-4e73-bb97-afcd522a6c6c",
      name: "TwoWayVEdge",
      startId: "f0b7fbea-2784-49d2-869b-a7d6ad6fa442",
      endId: "1f785877-daf9-42b3-a244-60db6af34448",
    },
    {
      start: {
        x: 2960,
        y: 4360,
      },
      end: {
        x: 2760,
        y: 4360,
      },
      id: "b2a5efab-262b-438b-81c5-f595b38af0d9",
      name: "TwoWayHEdge",
      startId: "1f785877-daf9-42b3-a244-60db6af34448",
      endId: "9ec962b1-09e5-4b10-866f-41df29f7d0cc",
    },
    {
      start: {
        x: 2960,
        y: 4360,
      },
      end: {
        x: 2960,
        y: 4680,
      },
      id: "ab991deb-fa77-4a9e-8257-0ec6cfac3be1",
      name: "TwoWayVEdge",
      startId: "1f785877-daf9-42b3-a244-60db6af34448",
      endId: "383bb84b-30cd-4862-8653-29a2d120cc9e",
    },
    {
      start: {
        x: 2960,
        y: 4680,
      },
      end: {
        x: 2760,
        y: 4680,
      },
      id: "c61c3991-e5bd-40bf-aa8f-6d6994e749c9",
      name: "TwoWayHEdge",
      startId: "383bb84b-30cd-4862-8653-29a2d120cc9e",
      endId: "13d14170-774f-48da-a10e-841314a3185b",
    },
    {
      start: {
        x: 2760,
        y: 4680,
      },
      end: {
        x: 2760,
        y: 4520,
      },
      id: "bc1c212f-f747-43cb-8f38-01d8add2d987",
      name: "TwoWayVEdge",
      startId: "13d14170-774f-48da-a10e-841314a3185b",
      endId: "89a2590e-0a1b-4bf7-b961-5c16de591390",
    },
    {
      start: {
        x: 2760,
        y: 4520,
      },
      end: {
        x: 2760,
        y: 4360,
      },
      id: "d55c0805-ef5a-440d-bf55-e02922aef2d5",
      name: "TwoWayVEdge",
      startId: "89a2590e-0a1b-4bf7-b961-5c16de591390",
      endId: "9ec962b1-09e5-4b10-866f-41df29f7d0cc",
    },
    {
      start: {
        x: 2760,
        y: 4680,
      },
      end: {
        x: 2480,
        y: 4680,
      },
      id: "9d2837e6-f05d-49eb-aef2-8e5b527c8624",
      name: "TwoWayHEdge",
      startId: "13d14170-774f-48da-a10e-841314a3185b",
      endId: "67dd7739-b6fa-4508-8628-0e215173b95d",
    },
    {
      start: {
        x: 2480,
        y: 4680,
      },
      end: {
        x: 2200,
        y: 4680,
      },
      id: "9dfd27bc-3bc0-4229-87d5-71b9e9345fab",
      name: "TwoWayHEdge",
      startId: "67dd7739-b6fa-4508-8628-0e215173b95d",
      endId: "c3a8d056-5781-47e4-88e2-02b805b4209f",
    },
    {
      start: {
        x: 2200,
        y: 4680,
      },
      end: {
        x: 2180,
        y: 4460,
      },
      id: "6cb5252e-a18e-4e7c-a8c4-e7645960d30b",
      name: "TwoWayVEdge",
      startId: "c3a8d056-5781-47e4-88e2-02b805b4209f",
      endId: "5bd23f50-67ac-467e-b6e5-91a30ee3493a",
    },
    {
      start: {
        x: 2180,
        y: 4460,
      },
      end: {
        x: 2140,
        y: 4180,
      },
      id: "5d4fe047-ce11-41b9-9a57-0a7aedd6fff8",
      name: "TwoWayVEdge",
      startId: "5bd23f50-67ac-467e-b6e5-91a30ee3493a",
      endId: "0afc0ff8-dcab-43c3-9936-977ff129e5a5",
    },
    {
      start: {
        x: 2140,
        y: 4180,
      },
      end: {
        x: 2140,
        y: 3980,
      },
      id: "5f1b21f1-f524-4f82-aad6-19753f235c39",
      name: "TwoWayVEdge",
      startId: "0afc0ff8-dcab-43c3-9936-977ff129e5a5",
      endId: "a9daa7aa-9e32-4281-b0f6-8f3b5a713b2a",
    },
    {
      start: {
        x: 2140,
        y: 3980,
      },
      end: {
        x: 2140,
        y: 3740,
      },
      id: "573b0ae7-4c4e-4161-9f10-fab1a872291e",
      name: "TwoWayVEdge",
      startId: "a9daa7aa-9e32-4281-b0f6-8f3b5a713b2a",
      endId: "ce81e242-e552-4aa3-a2a7-d6f1f5983e3b",
    },
    {
      start: {
        x: 2140,
        y: 4180,
      },
      end: {
        x: 1920,
        y: 4180,
      },
      id: "06758002-cca1-4a28-a9c5-86d0d591d556",
      name: "TwoWayHEdge",
      startId: "0afc0ff8-dcab-43c3-9936-977ff129e5a5",
      endId: "c8c22aa5-e5d5-43e1-ab26-0321cf780ac7",
    },
    {
      start: {
        x: 1920,
        y: 4180,
      },
      end: {
        x: 1700,
        y: 4180,
      },
      id: "10706ce2-fbfa-431d-adc4-341f140871c7",
      name: "TwoWayHEdge",
      startId: "c8c22aa5-e5d5-43e1-ab26-0321cf780ac7",
      endId: "9f020032-d80a-43c2-ae34-6ad401f810dd",
    },
    {
      start: {
        x: 1700,
        y: 4180,
      },
      end: {
        x: 1720,
        y: 4340,
      },
      id: "ec9631de-e667-4c96-8cce-29737f048cf6",
      name: "TwoWayVEdge",
      startId: "9f020032-d80a-43c2-ae34-6ad401f810dd",
      endId: "70f7a2a2-e426-4c39-9d66-7c79c46f8799",
    },
    {
      start: {
        x: 1720,
        y: 4340,
      },
      end: {
        x: 1740,
        y: 4500,
      },
      id: "814881fa-cda3-42cc-86fc-df300c2c26a0",
      name: "TwoWayVEdge",
      startId: "70f7a2a2-e426-4c39-9d66-7c79c46f8799",
      endId: "ea46a50b-29e2-417f-815c-a7e005142918",
    },
    {
      start: {
        x: 1740,
        y: 4500,
      },
      end: {
        x: 1960,
        y: 4500,
      },
      id: "263a0cc6-14be-4a18-9f7e-62d0fc520364",
      name: "TwoWayHEdge",
      startId: "ea46a50b-29e2-417f-815c-a7e005142918",
      endId: "7d0cd4a7-12f7-4db2-b8f7-3d5b1375724d",
    },
    {
      start: {
        x: 1960,
        y: 4500,
      },
      end: {
        x: 1920,
        y: 4180,
      },
      id: "ca48c34b-6cfc-4b48-a178-0b3a73369b1e",
      name: "TwoWayVEdge",
      startId: "7d0cd4a7-12f7-4db2-b8f7-3d5b1375724d",
      endId: "c8c22aa5-e5d5-43e1-ab26-0321cf780ac7",
    },
    {
      start: {
        x: 1520,
        y: 3680,
      },
      end: {
        x: 1520,
        y: 3920,
      },
      id: "816c0883-5569-4661-b4f7-e94a90518479",
      name: "TwoWayVEdge",
      startId: "9216746c-a2ee-402e-b3c3-c9e0fcf723ab",
      endId: "f417bc5f-c88d-483f-ac7a-8ef7e4767152",
    },
    {
      start: {
        x: 1520,
        y: 3920,
      },
      end: {
        x: 1520,
        y: 4180,
      },
      id: "3e0f6bb6-c20a-4772-9020-5f87af127dfe",
      name: "TwoWayVEdge",
      startId: "f417bc5f-c88d-483f-ac7a-8ef7e4767152",
      endId: "ca228127-0a1f-446a-92b2-fe511a4a214c",
    },
    {
      start: {
        x: 1520,
        y: 4180,
      },
      end: {
        x: 1700,
        y: 4180,
      },
      id: "001cbe58-a3dd-4e14-985f-a7ec5c08bc0d",
      name: "TwoWayHEdge",
      startId: "ca228127-0a1f-446a-92b2-fe511a4a214c",
      endId: "9f020032-d80a-43c2-ae34-6ad401f810dd",
    },
    {
      start: {
        x: 1740,
        y: 4500,
      },
      end: {
        x: 1820,
        y: 4680,
      },
      id: "7d627215-a586-4173-a81a-bf799f6a58fd",
      name: "TwoWayVEdge",
      startId: "ea46a50b-29e2-417f-815c-a7e005142918",
      endId: "c02c3534-12f8-451b-92b4-dfb877638c6d",
    },
    {
      start: {
        x: 1820,
        y: 4680,
      },
      end: {
        x: 2040,
        y: 4680,
      },
      id: "e69157e0-de9d-4c30-8d7e-48a60860d87b",
      name: "TwoWayHEdge",
      startId: "c02c3534-12f8-451b-92b4-dfb877638c6d",
      endId: "2411b4e9-5fdc-447b-ae36-330ed903c2cb",
    },
    {
      start: {
        x: 2040,
        y: 4680,
      },
      end: {
        x: 2020,
        y: 4860,
      },
      id: "4721cbd1-bab6-40ac-b4c9-d2997e9a7ea2",
      name: "TwoWayVEdge",
      startId: "2411b4e9-5fdc-447b-ae36-330ed903c2cb",
      endId: "64e0a917-ad88-4d33-8a47-d8dcdcc4c4b7",
    },
    {
      start: {
        x: 2020,
        y: 4860,
      },
      end: {
        x: 2000,
        y: 5020,
      },
      id: "0cea8f74-7cba-4ce1-88eb-954f6758444e",
      name: "TwoWayVEdge",
      startId: "64e0a917-ad88-4d33-8a47-d8dcdcc4c4b7",
      endId: "28e75cd6-3298-475c-adbb-92ee38ceda07",
    },
    {
      start: {
        x: 2960,
        y: 4680,
      },
      end: {
        x: 3200,
        y: 4680,
      },
      id: "1382a531-41fc-4207-ac24-5a6f72594cb4",
      name: "TwoWayHEdge",
      startId: "383bb84b-30cd-4862-8653-29a2d120cc9e",
      endId: "d43fd910-861d-4d04-b2f6-5a1fc66dcb39",
    },
    {
      start: {
        x: 2960,
        y: 4680,
      },
      end: {
        x: 2960,
        y: 5000,
      },
      id: "e520124c-4e61-4f6a-9b21-db2ef64d6998",
      name: "TwoWayVEdge",
      startId: "383bb84b-30cd-4862-8653-29a2d120cc9e",
      endId: "9026c69f-1b8e-4eda-9f14-04b77fe8c333",
    },
    {
      start: {
        x: 2960,
        y: 5000,
      },
      end: {
        x: 3200,
        y: 5000,
      },
      id: "8e6762f9-0a16-4744-89f2-29b5b3dbf3b5",
      name: "TwoWayHEdge",
      startId: "9026c69f-1b8e-4eda-9f14-04b77fe8c333",
      endId: "34a55e15-51e7-43fa-ac03-cffd5874a971",
    },
    {
      start: {
        x: 3200,
        y: 4680,
      },
      end: {
        x: 3200,
        y: 4820,
      },
      id: "300d0ed9-b9d5-4d3c-a7ff-378f4e86fc0e",
      name: "TwoWayVEdge",
      startId: "d43fd910-861d-4d04-b2f6-5a1fc66dcb39",
      endId: "eafd1650-9312-40b1-87ed-cb09df886e69",
    },
    {
      start: {
        x: 3200,
        y: 4820,
      },
      end: {
        x: 3200,
        y: 5000,
      },
      id: "70a00b7b-18e3-477d-b21b-b39a0c3d593d",
      name: "TwoWayVEdge",
      startId: "eafd1650-9312-40b1-87ed-cb09df886e69",
      endId: "34a55e15-51e7-43fa-ac03-cffd5874a971",
    },
    {
      start: {
        x: 2000,
        y: 5020,
      },
      end: {
        x: 2380,
        y: 5020,
      },
      id: "731aa77c-7642-4573-a8c3-e8da1307c400",
      name: "TwoWayHEdge",
      startId: "28e75cd6-3298-475c-adbb-92ee38ceda07",
      endId: "296474f1-be30-4fe8-9045-754e37e1554e",
    },
    {
      start: {
        x: 2380,
        y: 5020,
      },
      end: {
        x: 2740,
        y: 5020,
      },
      id: "f4facfeb-a345-4dfe-af74-21aa5c52032e",
      name: "TwoWayHEdge",
      startId: "296474f1-be30-4fe8-9045-754e37e1554e",
      endId: "f5e4d0f2-7dad-44a0-a02e-1edd74e40461",
    },
    {
      start: {
        x: 2740,
        y: 5020,
      },
      end: {
        x: 2740,
        y: 5240,
      },
      id: "9f81979f-c3cf-4c01-b307-784c7de01d4d",
      name: "TwoWayVEdge",
      startId: "f5e4d0f2-7dad-44a0-a02e-1edd74e40461",
      endId: "dad5a2b6-8c70-4f6c-bd5e-2eb5f1a4829d",
    },
    {
      start: {
        x: 3200,
        y: 5000,
      },
      end: {
        x: 3200,
        y: 5240,
      },
      id: "60278524-1b52-4bb9-863f-d48027cb45e1",
      name: "TwoWayVEdge",
      startId: "34a55e15-51e7-43fa-ac03-cffd5874a971",
      endId: "f510b0c1-3f03-476c-903c-31df4b5e6d09",
    },
    {
      start: {
        x: 1520,
        y: 4180,
      },
      end: {
        x: 1300,
        y: 4180,
      },
      id: "cb59b29a-fa7f-4cdf-8ad1-897b8be79cff",
      name: "TwoWayHEdge",
      startId: "ca228127-0a1f-446a-92b2-fe511a4a214c",
      endId: "19511ca3-748f-4060-891b-3c06401720e1",
    },
    {
      start: {
        x: 1300,
        y: 4180,
      },
      end: {
        x: 1300,
        y: 4320,
      },
      id: "0f8709e8-b3ba-4f29-b081-1d27a09745fd",
      name: "TwoWayVEdge",
      startId: "19511ca3-748f-4060-891b-3c06401720e1",
      endId: "0cadd882-c1bd-481f-9c01-2ed8db61f0a1",
    },
    {
      start: {
        x: 1300,
        y: 4320,
      },
      end: {
        x: 1300,
        y: 4480,
      },
      id: "d397293b-2b88-49c2-8637-f669bebd0fca",
      name: "TwoWayVEdge",
      startId: "0cadd882-c1bd-481f-9c01-2ed8db61f0a1",
      endId: "5f04e060-0b4b-4cf5-a651-9e3f76e4ac22",
    },
    {
      start: {
        x: 1300,
        y: 4480,
      },
      end: {
        x: 1300,
        y: 4760,
      },
      id: "fcccfe1f-c7cd-4810-9428-5deb9942406e",
      name: "TwoWayVEdge",
      startId: "5f04e060-0b4b-4cf5-a651-9e3f76e4ac22",
      endId: "ae05e30a-484a-41a6-b556-78fe582eb3fc",
    },
    {
      start: {
        x: 1820,
        y: 4680,
      },
      end: {
        x: 1580,
        y: 4680,
      },
      id: "aa881a6d-4cdf-4025-829a-82d5df876b57",
      name: "TwoWayHEdge",
      startId: "c02c3534-12f8-451b-92b4-dfb877638c6d",
      endId: "2b7aa32a-e089-467f-a621-781acc448dff",
    },
    {
      start: {
        x: 1580,
        y: 4680,
      },
      end: {
        x: 1580,
        y: 4840,
      },
      id: "0c72dd26-3790-43b9-ada9-7c4391a375fb",
      name: "TwoWayVEdge",
      startId: "2b7aa32a-e089-467f-a621-781acc448dff",
      endId: "19e3cf4d-801f-499f-89d6-0c002c16395c",
    },
    {
      start: {
        x: 1580,
        y: 4840,
      },
      end: {
        x: 1580,
        y: 4980,
      },
      id: "1aa9d324-12b2-4614-a843-96e3391d5314",
      name: "TwoWayVEdge",
      startId: "19e3cf4d-801f-499f-89d6-0c002c16395c",
      endId: "17989969-42f5-4aae-8140-d90ae4191ba0",
    },
    {
      start: {
        x: 1580,
        y: 4980,
      },
      end: {
        x: 1580,
        y: 5140,
      },
      id: "7f8bdc88-fa51-488e-acac-e873ccfa6844",
      name: "TwoWayVEdge",
      startId: "17989969-42f5-4aae-8140-d90ae4191ba0",
      endId: "1fc8ef68-cafe-4456-8c8f-c22613136364",
    },
    {
      start: {
        x: 1580,
        y: 5140,
      },
      end: {
        x: 1340,
        y: 5140,
      },
      id: "a24129e5-caa5-41be-bb46-ff6eb38b4e1f",
      name: "TwoWayHEdge",
      startId: "1fc8ef68-cafe-4456-8c8f-c22613136364",
      endId: "4fe387f3-b20d-4502-8162-5cd333cbef07",
    },
    {
      start: {
        x: 1340,
        y: 5140,
      },
      end: {
        x: 1080,
        y: 5080,
      },
      id: "67c6e653-f9bf-40fa-b300-7decb6c3acff",
      name: "TwoWayHEdge",
      startId: "4fe387f3-b20d-4502-8162-5cd333cbef07",
      endId: "be192b61-59df-45d2-abb9-08eb818877cf",
    },
    {
      start: {
        x: 1300,
        y: 4760,
      },
      end: {
        x: 1080,
        y: 4760,
      },
      id: "e25b1335-23e6-4197-87c0-2176a55b915f",
      name: "TwoWayHEdge",
      startId: "ae05e30a-484a-41a6-b556-78fe582eb3fc",
      endId: "24387d13-baa8-498e-ac6d-052b8066732d",
    },
    {
      start: {
        x: 1080,
        y: 4760,
      },
      end: {
        x: 1080,
        y: 4580,
      },
      id: "8223f200-09bf-4542-8622-2b8a92435a2f",
      name: "TwoWayVEdge",
      startId: "24387d13-baa8-498e-ac6d-052b8066732d",
      endId: "4546db9d-a444-4b41-aeee-660b0a1dfef9",
    },
    {
      start: {
        x: 1080,
        y: 4580,
      },
      end: {
        x: 1080,
        y: 4400,
      },
      id: "4ee46000-9670-4c2d-9a3c-974909c57563",
      name: "TwoWayVEdge",
      startId: "4546db9d-a444-4b41-aeee-660b0a1dfef9",
      endId: "4ba7bd86-a33e-4883-a087-8a94ec03cf4a",
    },
    {
      start: {
        x: 1080,
        y: 5080,
      },
      end: {
        x: 860,
        y: 5020,
      },
      id: "950b9279-bea3-4ceb-8681-05c44b6f308d",
      name: "TwoWayHEdge",
      startId: "be192b61-59df-45d2-abb9-08eb818877cf",
      endId: "48deb6fd-4088-4297-b6c6-907db8d87494",
    },
    {
      start: {
        x: 860,
        y: 5020,
      },
      end: {
        x: 860,
        y: 5220,
      },
      id: "1d5c9d18-5126-421f-bc1f-1048fa2623a6",
      name: "TwoWayVEdge",
      startId: "48deb6fd-4088-4297-b6c6-907db8d87494",
      endId: "f9c0cd50-23b0-483c-8cea-5a9dcd7c8778",
    },
    {
      start: {
        x: 860,
        y: 5020,
      },
      end: {
        x: 880,
        y: 4760,
      },
      id: "ae3ee9dd-8e31-4ad8-a3dd-ea2f442747d4",
      name: "TwoWayVEdge",
      startId: "48deb6fd-4088-4297-b6c6-907db8d87494",
      endId: "772ee759-3ea5-4360-8efc-683a546bca83",
    },
    {
      start: {
        x: 880,
        y: 4760,
      },
      end: {
        x: 600,
        y: 4760,
      },
      id: "3cbabb80-650b-43f2-9349-ec1aed83ec70",
      name: "TwoWayHEdge",
      startId: "772ee759-3ea5-4360-8efc-683a546bca83",
      endId: "e4109724-4dc7-4282-a862-255227af69de",
    },
    {
      start: {
        x: 600,
        y: 4760,
      },
      end: {
        x: 600,
        y: 5220,
      },
      id: "6420ae0a-60ca-455e-ab21-ba5599367f25",
      name: "TwoWayVEdge",
      startId: "e4109724-4dc7-4282-a862-255227af69de",
      endId: "2ca9ad8a-bf92-42d9-ac0d-181686f33759",
    },
    {
      start: {
        x: 600,
        y: 5220,
      },
      end: {
        x: 860,
        y: 5220,
      },
      id: "f0076751-71fc-4221-9548-05c1e5943e94",
      name: "TwoWayHEdge",
      startId: "2ca9ad8a-bf92-42d9-ac0d-181686f33759",
      endId: "f9c0cd50-23b0-483c-8cea-5a9dcd7c8778",
    },
    {
      start: {
        x: 2740,
        y: 5240,
      },
      end: {
        x: 2740,
        y: 5460,
      },
      id: "b0448cc3-0a11-4d3a-bd21-9c3eaf51060a",
      name: "TwoWayVEdge",
      startId: "dad5a2b6-8c70-4f6c-bd5e-2eb5f1a4829d",
      endId: "27040330-5967-41c7-aa6e-2aa29983e2aa",
    },
    {
      start: {
        x: 3200,
        y: 5240,
      },
      end: {
        x: 3200,
        y: 5460,
      },
      id: "7964cbd2-833a-463f-984c-eac791a479bb",
      name: "TwoWayVEdge",
      startId: "f510b0c1-3f03-476c-903c-31df4b5e6d09",
      endId: "6e43fdd4-1e62-4992-b670-b6b9bf6265d5",
    },
    {
      start: {
        x: 3200,
        y: 5460,
      },
      end: {
        x: 2960,
        y: 5460,
      },
      id: "a833c84e-7ddc-4ae5-aa98-63000d4337b9",
      name: "TwoWayHEdge",
      startId: "6e43fdd4-1e62-4992-b670-b6b9bf6265d5",
      endId: "e975f3f8-a047-436b-8308-603035a9de32",
    },
    {
      start: {
        x: 2740,
        y: 5460,
      },
      end: {
        x: 2960,
        y: 5460,
      },
      id: "ab6f447f-2b4e-47f9-80ef-48ea1181d47e",
      name: "TwoWayHEdge",
      startId: "27040330-5967-41c7-aa6e-2aa29983e2aa",
      endId: "e975f3f8-a047-436b-8308-603035a9de32",
    },
    {
      start: {
        x: 2960,
        y: 5460,
      },
      end: {
        x: 2780,
        y: 6320,
      },
      id: "764709f3-5175-4c2e-910a-4a70a37d7a52",
      name: "TwoWayVEdge",
      startId: "e975f3f8-a047-436b-8308-603035a9de32",
      endId: "1a6ab201-5f6a-44c7-aca3-e93ad1042f02",
    },
    {
      start: {
        x: 2780,
        y: 6320,
      },
      end: {
        x: 3060,
        y: 6280,
      },
      id: "d6c8c3a2-38f8-424b-a34d-ebc37d7746e3",
      name: "TwoWayHEdge",
      startId: "1a6ab201-5f6a-44c7-aca3-e93ad1042f02",
      endId: "6a3347ff-3caa-4323-b3ca-a297dfc5731a",
    },
    {
      start: {
        x: 3060,
        y: 6280,
      },
      end: {
        x: 3300,
        y: 6320,
      },
      id: "81588604-5675-4864-8df4-d84237f8ce28",
      name: "TwoWayHEdge",
      startId: "6a3347ff-3caa-4323-b3ca-a297dfc5731a",
      endId: "b2bf7c89-ee9f-4b41-a690-09e4697d2a2f",
    },
    {
      start: {
        x: 3300,
        y: 6320,
      },
      end: {
        x: 3520,
        y: 6280,
      },
      id: "05fb98eb-6e48-455b-8ff5-bf4f3112a57d",
      name: "TwoWayHEdge",
      startId: "b2bf7c89-ee9f-4b41-a690-09e4697d2a2f",
      endId: "86e5b447-323e-4917-8caf-5dd110f37ea2",
    },
    {
      start: {
        x: 3520,
        y: 6280,
      },
      end: {
        x: 3740,
        y: 6320,
      },
      id: "ad828d19-d34c-418c-969e-ba671caf0461",
      name: "TwoWayHEdge",
      startId: "86e5b447-323e-4917-8caf-5dd110f37ea2",
      endId: "3ab457c1-64f7-47b7-8781-db379258876e",
    },
    {
      start: {
        x: 3740,
        y: 6320,
      },
      end: {
        x: 4000,
        y: 6280,
      },
      id: "fb347204-b98c-400f-a3fd-a97b27d4c1a5",
      name: "TwoWayHEdge",
      startId: "3ab457c1-64f7-47b7-8781-db379258876e",
      endId: "e5d42ca3-419d-4022-9481-943cf3ee57ef",
    },
    {
      start: {
        x: 4000,
        y: 6280,
      },
      end: {
        x: 4000,
        y: 6080,
      },
      id: "5769c637-4f56-4571-96db-f86c476b3fb8",
      name: "TwoWayVEdge",
      startId: "e5d42ca3-419d-4022-9481-943cf3ee57ef",
      endId: "e1e1f6b5-a506-4426-827c-0f7e1078b983",
    },
    {
      start: {
        x: 4000,
        y: 6080,
      },
      end: {
        x: 4200,
        y: 6060,
      },
      id: "03e2721b-a48f-4970-90dd-a95c48e9eea6",
      name: "TwoWayHEdge",
      startId: "e1e1f6b5-a506-4426-827c-0f7e1078b983",
      endId: "b6bf2e1e-b20f-4dd7-a326-8f2169c0f62f",
    },
    {
      start: {
        x: 860,
        y: 5220,
      },
      end: {
        x: 860,
        y: 5420,
      },
      id: "d2d83a07-4858-4a77-a281-4985832fb815",
      name: "TwoWayVEdge",
      startId: "f9c0cd50-23b0-483c-8cea-5a9dcd7c8778",
      endId: "7adbf945-97fb-496f-a5cd-4315d80b18c3",
    },
    {
      start: {
        x: 860,
        y: 5420,
      },
      end: {
        x: 860,
        y: 5620,
      },
      id: "6ec0fd6f-f28e-4d92-83d9-916957895d4b",
      name: "TwoWayVEdge",
      startId: "7adbf945-97fb-496f-a5cd-4315d80b18c3",
      endId: "3399c82c-b335-400c-9487-9517f23cc970",
    },
    {
      start: {
        x: 860,
        y: 5620,
      },
      end: {
        x: 520,
        y: 5660,
      },
      id: "a23fc237-dc0a-4b5d-9b91-2b45016cdc30",
      name: "TwoWayHEdge",
      startId: "3399c82c-b335-400c-9487-9517f23cc970",
      endId: "4579de61-8c38-4dd8-9575-61672e3bcdd0",
    },
    {
      start: {
        x: 520,
        y: 5660,
      },
      end: {
        x: 180,
        y: 5600,
      },
      id: "8eafe502-99b9-4994-a8c7-80c641dd6f34",
      name: "TwoWayHEdge",
      startId: "4579de61-8c38-4dd8-9575-61672e3bcdd0",
      endId: "3de50d91-6a5f-4d03-a686-2795435bcf44",
    },
    {
      start: {
        x: 600,
        y: 4760,
      },
      end: {
        x: 380,
        y: 4760,
      },
      id: "970b70c5-1da4-47cb-ac4c-8c2dc87b463b",
      name: "TwoWayHEdge",
      startId: "e4109724-4dc7-4282-a862-255227af69de",
      endId: "f095c49c-633d-4c79-9830-7bf5bc8738e2",
    },
    {
      start: {
        x: 180,
        y: 5600,
      },
      end: {
        x: 240,
        y: 5360,
      },
      id: "e88b9d62-272e-4f72-a950-f42096df13b7",
      name: "TwoWayVEdge",
      startId: "3de50d91-6a5f-4d03-a686-2795435bcf44",
      endId: "c09ced90-39fd-42f4-9479-951f566ef281",
    },
    {
      start: {
        x: 240,
        y: 5360,
      },
      end: {
        x: 200,
        y: 5140,
      },
      id: "3cbf0e0e-5cd8-4fdd-b9ec-e582db986739",
      name: "TwoWayVEdge",
      startId: "c09ced90-39fd-42f4-9479-951f566ef281",
      endId: "8597b263-ac74-45e2-aa87-ccd16bdc9f3a",
    },
    {
      start: {
        x: 200,
        y: 5140,
      },
      end: {
        x: 220,
        y: 4880,
      },
      id: "7cf02baa-23bc-4d7d-b4c6-8448a5a2a55a",
      name: "TwoWayVEdge",
      startId: "8597b263-ac74-45e2-aa87-ccd16bdc9f3a",
      endId: "4af0b208-a571-4ea5-a219-75dafcf97efb",
    },
    {
      start: {
        x: 220,
        y: 4880,
      },
      end: {
        x: 20,
        y: 4880,
      },
      id: "7d68ba52-5884-4803-b9ee-f630bfcf07b0",
      name: "TwoWayHEdge",
      startId: "4af0b208-a571-4ea5-a219-75dafcf97efb",
      endId: "44c8cc02-116b-4ca1-bd8d-9649ea0a1384",
    },
    {
      start: {
        x: 20,
        y: 4880,
      },
      end: {
        x: 20,
        y: 4660,
      },
      id: "9919e7b0-bb8e-4c12-9207-15b73e3fffb9",
      name: "TwoWayVEdge",
      startId: "44c8cc02-116b-4ca1-bd8d-9649ea0a1384",
      endId: "8156f96c-e527-4ce0-b804-5feba44eeb77",
    },
    {
      start: {
        x: 20,
        y: 4660,
      },
      end: {
        x: 20,
        y: 4440,
      },
      id: "d2a5e2ff-694f-446a-ac6f-47e10216c5e4",
      name: "TwoWayVEdge",
      startId: "8156f96c-e527-4ce0-b804-5feba44eeb77",
      endId: "fc6f91b3-86df-4d3c-8293-965db51608da",
    },
    {
      start: {
        x: 20,
        y: 4440,
      },
      end: {
        x: 20,
        y: 4140,
      },
      id: "dc211991-901d-482c-85d6-0975c3459246",
      name: "TwoWayVEdge",
      startId: "fc6f91b3-86df-4d3c-8293-965db51608da",
      endId: "1450a94d-a56a-4675-8af6-ec8ca0fbb198",
    },
    {
      start: {
        x: 380,
        y: 4760,
      },
      end: {
        x: 380,
        y: 4580,
      },
      id: "9c3eae14-bdad-4cc8-af94-717b498723c5",
      name: "TwoWayVEdge",
      startId: "f095c49c-633d-4c79-9830-7bf5bc8738e2",
      endId: "066a723a-04fa-46a1-a832-c6adca71d721",
    },
    {
      start: {
        x: 380,
        y: 4580,
      },
      end: {
        x: 380,
        y: 4420,
      },
      id: "ec48b9d9-90f8-452b-b976-f095d682fe9e",
      name: "TwoWayVEdge",
      startId: "066a723a-04fa-46a1-a832-c6adca71d721",
      endId: "445dcc14-0d8c-47ed-a61c-ee1c06022494",
    },
    {
      start: {
        x: 380,
        y: 4420,
      },
      end: {
        x: 380,
        y: 4260,
      },
      id: "3e2cd172-d7fc-42c3-bb27-d8f5bb03a7b7",
      name: "TwoWayVEdge",
      startId: "445dcc14-0d8c-47ed-a61c-ee1c06022494",
      endId: "0e280b81-dca6-448f-b1f6-56adb0fb3dc5",
    },
    {
      start: {
        x: 380,
        y: 4260,
      },
      end: {
        x: 600,
        y: 4260,
      },
      id: "0311fe5d-9aa7-49e6-88d5-30ae182272f2",
      name: "TwoWayHEdge",
      startId: "0e280b81-dca6-448f-b1f6-56adb0fb3dc5",
      endId: "3c44cafb-fc10-49da-9340-09d5b77debf8",
    },
    {
      start: {
        x: 20,
        y: 4140,
      },
      end: {
        x: 220,
        y: 4140,
      },
      id: "8ea5677e-36f8-413e-bf1e-a151d3144c0c",
      name: "TwoWayHEdge",
      startId: "1450a94d-a56a-4675-8af6-ec8ca0fbb198",
      endId: "0100c7eb-c4d0-4a3c-8228-880a208dca9e",
    },
    {
      start: {
        x: 220,
        y: 4140,
      },
      end: {
        x: 400,
        y: 4140,
      },
      id: "668c95d7-8236-48be-a74a-b993223feb38",
      name: "TwoWayHEdge",
      startId: "0100c7eb-c4d0-4a3c-8228-880a208dca9e",
      endId: "a70ce34f-cff1-4610-ab93-ce1fcc6b2c12",
    },
    {
      start: {
        x: 880,
        y: 4760,
      },
      end: {
        x: 880,
        y: 4580,
      },
      id: "7b39eb40-4a3d-4453-93e9-aaca5779c8e8",
      name: "TwoWayVEdge",
      startId: "772ee759-3ea5-4360-8efc-683a546bca83",
      endId: "d5764ade-8ef7-4503-9d70-5dfe9b5d5a7f",
    },
    {
      start: {
        x: 880,
        y: 4580,
      },
      end: {
        x: 880,
        y: 4440,
      },
      id: "963b7939-d833-4120-a21d-a2fcfa1e2676",
      name: "TwoWayVEdge",
      startId: "d5764ade-8ef7-4503-9d70-5dfe9b5d5a7f",
      endId: "dcd6a13f-8160-4467-8b9c-70f8c18c0398",
    },
    {
      start: {
        x: 600,
        y: 4260,
      },
      end: {
        x: 620,
        y: 4080,
      },
      id: "1d54e036-d3fb-4c7b-96c5-42ede078532c",
      name: "TwoWayVEdge",
      startId: "3c44cafb-fc10-49da-9340-09d5b77debf8",
      endId: "5212c4fe-1123-428c-ad6e-1f89d78a6a64",
    },
    {
      start: {
        x: 620,
        y: 4080,
      },
      end: {
        x: 880,
        y: 4080,
      },
      id: "c6980817-bb0b-42dc-b4f6-dd0235f89177",
      name: "TwoWayHEdge",
      startId: "5212c4fe-1123-428c-ad6e-1f89d78a6a64",
      endId: "f828915f-efd7-4a0e-8ea3-73571d2a33fe",
    },
    {
      start: {
        x: 880,
        y: 4440,
      },
      end: {
        x: 880,
        y: 4260,
      },
      id: "9a9073e0-c717-42f6-a364-6ee0703315c5",
      name: "TwoWayVEdge",
      startId: "dcd6a13f-8160-4467-8b9c-70f8c18c0398",
      endId: "6b58aa37-9f9c-4926-ba4b-33423184068d",
    },
    {
      start: {
        x: 880,
        y: 4260,
      },
      end: {
        x: 880,
        y: 4080,
      },
      id: "0e3493e7-5dab-4fab-9178-f8b07dc96251",
      name: "TwoWayVEdge",
      startId: "6b58aa37-9f9c-4926-ba4b-33423184068d",
      endId: "f828915f-efd7-4a0e-8ea3-73571d2a33fe",
    },
    {
      start: {
        x: 880,
        y: 4260,
      },
      end: {
        x: 1080,
        y: 4260,
      },
      id: "e20ee87f-722d-4c7f-b43d-47f8f430ee29",
      name: "TwoWayHEdge",
      startId: "6b58aa37-9f9c-4926-ba4b-33423184068d",
      endId: "5596dd5b-0a4d-4071-b43a-8ad099238a30",
    },
    {
      start: {
        x: 880,
        y: 4080,
      },
      end: {
        x: 880,
        y: 3900,
      },
      id: "eb129be2-60bc-427f-8c77-95d468571c33",
      name: "TwoWayVEdge",
      startId: "f828915f-efd7-4a0e-8ea3-73571d2a33fe",
      endId: "310ba9dc-a0b2-4440-b76c-ae97e402d157",
    },
    {
      start: {
        x: 880,
        y: 3900,
      },
      end: {
        x: 1080,
        y: 3900,
      },
      id: "8eb77137-c869-4b8d-a42e-e682a0ef6696",
      name: "TwoWayHEdge",
      startId: "310ba9dc-a0b2-4440-b76c-ae97e402d157",
      endId: "dbd77b59-f9b2-424a-96df-b1b5d5a28ee4",
    },
    {
      start: {
        x: 1080,
        y: 3900,
      },
      end: {
        x: 1080,
        y: 4260,
      },
      id: "111d8bc9-8479-4acd-9f03-19ca16f8eed5",
      name: "TwoWayVEdge",
      startId: "dbd77b59-f9b2-424a-96df-b1b5d5a28ee4",
      endId: "5596dd5b-0a4d-4071-b43a-8ad099238a30",
    },
    {
      start: {
        x: 1080,
        y: 3900,
      },
      end: {
        x: 1080,
        y: 3680,
      },
      id: "fa065945-09b3-4603-be64-52463c6150d8",
      name: "TwoWayVEdge",
      startId: "dbd77b59-f9b2-424a-96df-b1b5d5a28ee4",
      endId: "0df27500-7cce-4cdf-92aa-63835279b175",
    },
    {
      start: {
        x: 400,
        y: 4140,
      },
      end: {
        x: 400,
        y: 3940,
      },
      id: "a673acef-b9c9-4f9c-bdfe-bcbfe3a1f1a2",
      name: "TwoWayVEdge",
      startId: "a70ce34f-cff1-4610-ab93-ce1fcc6b2c12",
      endId: "b27f79b2-a156-4600-aa68-5f9f89c41778",
    },
    {
      start: {
        x: 400,
        y: 3940,
      },
      end: {
        x: 400,
        y: 3760,
      },
      id: "cb8c88bc-ff15-4c08-abb6-9fd076ee042e",
      name: "TwoWayVEdge",
      startId: "b27f79b2-a156-4600-aa68-5f9f89c41778",
      endId: "5066cdcb-4082-4b2d-9085-0f61e54a7568",
    },
    {
      start: {
        x: 400,
        y: 3760,
      },
      end: {
        x: 640,
        y: 3720,
      },
      id: "af7eb313-b9d1-4291-a80c-bfc4a8ef31e4",
      name: "TwoWayHEdge",
      startId: "5066cdcb-4082-4b2d-9085-0f61e54a7568",
      endId: "3e1a75c6-42c8-4d17-a7a0-865fcde5fd03",
    },
    {
      start: {
        x: 640,
        y: 3720,
      },
      end: {
        x: 880,
        y: 3680,
      },
      id: "d83b1dcf-7e08-4b84-9e3e-edf87f732805",
      name: "TwoWayHEdge",
      startId: "3e1a75c6-42c8-4d17-a7a0-865fcde5fd03",
      endId: "08857627-5a03-435c-9484-8367c9e71863",
    },
    {
      start: {
        x: 400,
        y: 3760,
      },
      end: {
        x: 200,
        y: 3760,
      },
      id: "80f5684f-5872-4218-a1c6-075a31b4729f",
      name: "TwoWayHEdge",
      startId: "5066cdcb-4082-4b2d-9085-0f61e54a7568",
      endId: "15ab35aa-85d1-45fd-b8ec-d84a627d27ee",
    },
    {
      start: {
        x: 20,
        y: 4140,
      },
      end: {
        x: -320,
        y: 4080,
      },
      id: "3b0ceb49-59ca-4d5c-b3f8-1cfabb5ece12",
      name: "TwoWayHEdge",
      startId: "1450a94d-a56a-4675-8af6-ec8ca0fbb198",
      endId: "f541e6a5-6e08-4e4a-bd87-232c94390306",
    },
    {
      start: {
        x: -320,
        y: 4080,
      },
      end: {
        x: -540,
        y: 4140,
      },
      id: "f234119e-2325-4513-8f2a-9c5bc370a080",
      name: "TwoWayHEdge",
      startId: "f541e6a5-6e08-4e4a-bd87-232c94390306",
      endId: "275ffa79-a769-42a6-8fe6-d501c3048c9f",
    },
    {
      start: {
        x: -540,
        y: 4140,
      },
      end: {
        x: -540,
        y: 3880,
      },
      id: "58c2c300-42d9-4649-83ed-b45e5861bf14",
      name: "TwoWayVEdge",
      startId: "275ffa79-a769-42a6-8fe6-d501c3048c9f",
      endId: "c3649d5b-ffb3-4458-9b83-b0ecbef883b3",
    },
    {
      start: {
        x: -540,
        y: 3880,
      },
      end: {
        x: -520,
        y: 3620,
      },
      id: "6d7597cd-db43-4588-8db4-7b51c95af17d",
      name: "TwoWayVEdge",
      startId: "c3649d5b-ffb3-4458-9b83-b0ecbef883b3",
      endId: "e8c3d7e0-9e55-41fb-8ca6-f08fb6c5966d",
    },
    {
      start: {
        x: -520,
        y: 3620,
      },
      end: {
        x: -540,
        y: 3380,
      },
      id: "1947ab3b-003a-49c2-8551-abd0117f5a78",
      name: "TwoWayVEdge",
      startId: "e8c3d7e0-9e55-41fb-8ca6-f08fb6c5966d",
      endId: "917e0da2-335d-4904-ac3e-7106b9c35a5a",
    },
    {
      start: {
        x: -540,
        y: 3380,
      },
      end: {
        x: -520,
        y: 3100,
      },
      id: "a6b3fa9c-0921-4741-bd22-85b60fe8d6d7",
      name: "TwoWayVEdge",
      startId: "917e0da2-335d-4904-ac3e-7106b9c35a5a",
      endId: "e2788169-0475-463a-85af-28b6a5819ac5",
    },
    {
      start: {
        x: -520,
        y: 3100,
      },
      end: {
        x: -360,
        y: 3100,
      },
      id: "1fc74699-2389-460d-be39-1e23df174a8e",
      name: "TwoWayHEdge",
      startId: "e2788169-0475-463a-85af-28b6a5819ac5",
      endId: "1aeeaf02-4fd7-4f21-af71-fdec195ae08f",
    },
    {
      start: {
        x: -360,
        y: 3100,
      },
      end: {
        x: -200,
        y: 3100,
      },
      id: "31e024dd-7dd9-4faa-9ce4-cdc216c0828c",
      name: "TwoWayHEdge",
      startId: "1aeeaf02-4fd7-4f21-af71-fdec195ae08f",
      endId: "ca4ffc14-919f-4336-a19a-152166fb15bb",
    },
    {
      start: {
        x: -200,
        y: 3100,
      },
      end: {
        x: -20,
        y: 3100,
      },
      id: "1415c00d-c570-49f3-bdf0-8409410588ee",
      name: "TwoWayHEdge",
      startId: "ca4ffc14-919f-4336-a19a-152166fb15bb",
      endId: "452f376f-5c2a-4db9-92f6-71d0d2de98e4",
    },
    {
      start: {
        x: 200,
        y: 2640,
      },
      end: {
        x: 200,
        y: 2820,
      },
      id: "2cdd2473-de40-4844-a087-d538e326d15d",
      name: "TwoWayVEdge",
      startId: "9b163651-e5b6-4ba4-986f-589a4792f430",
      endId: "39f7989f-7dcb-451e-88e7-5ad2804d188c",
    },
    {
      start: {
        x: 200,
        y: 2820,
      },
      end: {
        x: 200,
        y: 2960,
      },
      id: "389a3860-bc55-4671-a001-63f34b7d9d2c",
      name: "TwoWayVEdge",
      startId: "39f7989f-7dcb-451e-88e7-5ad2804d188c",
      endId: "0c120b5a-2661-4916-86e8-228c5e7dbc2a",
    },
    {
      start: {
        x: 200,
        y: 2960,
      },
      end: {
        x: 200,
        y: 3100,
      },
      id: "1c8ab9f4-dbf6-43a9-9651-a49829b4d686",
      name: "TwoWayVEdge",
      startId: "0c120b5a-2661-4916-86e8-228c5e7dbc2a",
      endId: "bda6adb2-e28e-4687-a714-7ad20ab4f210",
    },
    {
      start: {
        x: -20,
        y: 3100,
      },
      end: {
        x: 200,
        y: 3100,
      },
      id: "e5c3c917-5733-40ec-ac2c-2f5c3a07f65a",
      name: "TwoWayHEdge",
      startId: "452f376f-5c2a-4db9-92f6-71d0d2de98e4",
      endId: "bda6adb2-e28e-4687-a714-7ad20ab4f210",
    },
    {
      start: {
        x: -20,
        y: 3100,
      },
      end: {
        x: -20,
        y: 3380,
      },
      id: "27430f9a-dae0-41b7-a311-be935d0d9d9d",
      name: "TwoWayVEdge",
      startId: "452f376f-5c2a-4db9-92f6-71d0d2de98e4",
      endId: "df919318-6a00-4255-bfec-1091f311f4ca",
    },
    {
      start: {
        x: 200,
        y: 3100,
      },
      end: {
        x: 200,
        y: 3240,
      },
      id: "7439b241-3cb7-4aa0-b774-75d0d93bc569",
      name: "TwoWayVEdge",
      startId: "bda6adb2-e28e-4687-a714-7ad20ab4f210",
      endId: "9ebf2834-1559-463a-b993-2dd5a37e2f82",
    },
    {
      start: {
        x: 200,
        y: 3240,
      },
      end: {
        x: 200,
        y: 3380,
      },
      id: "f641992e-dd11-4fb5-acd4-5f68670478f3",
      name: "TwoWayVEdge",
      startId: "9ebf2834-1559-463a-b993-2dd5a37e2f82",
      endId: "3709d97b-a4db-4849-8ade-82a482eac568",
    },
    {
      start: {
        x: -20,
        y: 3380,
      },
      end: {
        x: 200,
        y: 3380,
      },
      id: "2865ded3-2cbd-46d9-bce4-0df822ac6381",
      name: "TwoWayHEdge",
      startId: "df919318-6a00-4255-bfec-1091f311f4ca",
      endId: "3709d97b-a4db-4849-8ade-82a482eac568",
    },
    {
      start: {
        x: 200,
        y: 3380,
      },
      end: {
        x: 200,
        y: 3580,
      },
      id: "b0b693b6-3dbd-4762-bca3-1790a5d87edd",
      name: "TwoWayVEdge",
      startId: "3709d97b-a4db-4849-8ade-82a482eac568",
      endId: "5657cdc5-c057-49c7-bc06-ca16304c5afe",
    },
    {
      start: {
        x: 200,
        y: 3580,
      },
      end: {
        x: 200,
        y: 3760,
      },
      id: "5b62a484-0878-43d4-b947-e16d33253461",
      name: "TwoWayVEdge",
      startId: "5657cdc5-c057-49c7-bc06-ca16304c5afe",
      endId: "15ab35aa-85d1-45fd-b8ec-d84a627d27ee",
    },
    {
      start: {
        x: 4800,
        y: 2620,
      },
      end: {
        x: 4980,
        y: 2620,
      },
      id: "18210fd9-61fc-47cc-8cb6-6610c7c6ca4c",
      name: "TwoWayHEdge",
      startId: "9bd4ebd7-09ba-40ad-9b96-82f955d817de",
      endId: "574dfcdf-25b8-4f1c-ad51-9217a1c888a7",
    },
    {
      start: {
        x: 860,
        y: 140,
      },
      end: {
        x: 560,
        y: 140,
      },
      id: "8a60cf6d-d236-4676-85d9-97362548b2fb",
      name: "TwoWayHEdge",
      startId: "209c7458-6352-4402-813a-94c83c86f148",
      endId: "34c8cd25-57f1-44ac-a407-f185f1cfe6c9",
    },
    {
      start: {
        x: -20,
        y: 3380,
      },
      end: {
        x: -280,
        y: 3380,
      },
      id: "5f0ccd89-848b-4793-8941-9fa3314d9c09",
      name: "TwoWayHEdge",
      startId: "df919318-6a00-4255-bfec-1091f311f4ca",
      endId: "8f2fd2a1-a336-4c46-bf4a-2e5d82254928",
    },
    {
      start: {
        x: 7720,
        y: 960,
      },
      end: {
        x: 7720,
        y: 760,
      },
      id: "a1183be7-e61f-44c4-b143-45d8484e7f79",
      name: "TwoWayVEdge",
      startId: "5275a5cc-3646-4504-8c98-10ad9d4335c1",
      endId: "4ba86761-2984-4c1c-bc69-c090e4a14920",
    },
    {
      start: {
        x: 7720,
        y: 760,
      },
      end: {
        x: 7960,
        y: 760,
      },
      id: "a46a9c0c-c52f-4e74-951d-27fa778c7326",
      name: "TwoWayHEdge",
      startId: "4ba86761-2984-4c1c-bc69-c090e4a14920",
      endId: "c8be14cd-1366-41bb-b6f9-460890c301da",
    },
    {
      start: {
        x: 7960,
        y: 760,
      },
      end: {
        x: 8180,
        y: 760,
      },
      id: "7c6156fe-05ff-46fe-a9f9-e9450c19ebbd",
      name: "TwoWayHEdge",
      startId: "c8be14cd-1366-41bb-b6f9-460890c301da",
      endId: "149099a0-630d-4804-993d-70ae09b85e3e",
    },
    {
      start: {
        x: 8180,
        y: 760,
      },
      end: {
        x: 8180,
        y: 960,
      },
      id: "72f0645b-8798-4001-8ddd-32fe249a10ad",
      name: "TwoWayVEdge",
      startId: "149099a0-630d-4804-993d-70ae09b85e3e",
      endId: "f73c1190-388e-4368-b063-7902f3bf8060",
    },
    {
      start: {
        x: 8180,
        y: 960,
      },
      end: {
        x: 7960,
        y: 960,
      },
      id: "8e7d631d-0a5b-4286-8c9e-5ceb4b037df6",
      name: "TwoWayHEdge",
      startId: "f73c1190-388e-4368-b063-7902f3bf8060",
      endId: "1a7df359-78df-4b16-82cd-0f27fb981351",
    },
    {
      start: {
        x: 7960,
        y: 960,
      },
      end: {
        x: 7960,
        y: 1280,
      },
      id: "2e6c5689-39b6-48c3-8121-63b52c7de74e",
      name: "TwoWayVEdge",
      startId: "1a7df359-78df-4b16-82cd-0f27fb981351",
      endId: "9dbd73e9-1a6b-4b94-839b-19c29b66a061",
    },
    {
      start: {
        x: 7960,
        y: 1280,
      },
      end: {
        x: 8180,
        y: 1280,
      },
      id: "a42ad9f1-575c-4968-97f0-575aff9ae29b",
      name: "TwoWayHEdge",
      startId: "9dbd73e9-1a6b-4b94-839b-19c29b66a061",
      endId: "fe9f222d-6241-4e47-b6cb-53ccb2347042",
    },
    {
      start: {
        x: 8180,
        y: 960,
      },
      end: {
        x: 8180,
        y: 1120,
      },
      id: "d5e8117b-f1d9-466e-bd9d-47226ce3b65e",
      name: "TwoWayVEdge",
      startId: "f73c1190-388e-4368-b063-7902f3bf8060",
      endId: "aa70af3b-dffa-485d-826a-a0bda1ed2af3",
    },
    {
      start: {
        x: 8180,
        y: 1120,
      },
      end: {
        x: 8180,
        y: 1280,
      },
      id: "1ceeffde-ef7a-4e1f-b9c3-b116dc89036b",
      name: "TwoWayVEdge",
      startId: "aa70af3b-dffa-485d-826a-a0bda1ed2af3",
      endId: "fe9f222d-6241-4e47-b6cb-53ccb2347042",
    },
    {
      start: {
        x: 8180,
        y: 1280,
      },
      end: {
        x: 8400,
        y: 1280,
      },
      id: "da58876a-ebc7-4e31-ae0e-2b6b9cca0178",
      name: "TwoWayHEdge",
      startId: "fe9f222d-6241-4e47-b6cb-53ccb2347042",
      endId: "d4faf04a-0710-4745-8e25-31d1411d4eba",
    },
    {
      start: {
        x: 8400,
        y: 1280,
      },
      end: {
        x: 8600,
        y: 1280,
      },
      id: "1d12dac1-538f-4c18-84ec-72adb22de4a4",
      name: "TwoWayHEdge",
      startId: "d4faf04a-0710-4745-8e25-31d1411d4eba",
      endId: "f7b437ff-067b-4b40-b0fa-49bc34211cc8",
    },
    {
      start: {
        x: 8600,
        y: 1280,
      },
      end: {
        x: 8820,
        y: 1280,
      },
      id: "0d0c34e3-8e9a-4479-9060-252e1e9d9306",
      name: "TwoWayHEdge",
      startId: "f7b437ff-067b-4b40-b0fa-49bc34211cc8",
      endId: "e895fb08-fcfb-4ab3-bf46-278343fbc028",
    },
    {
      start: {
        x: 8820,
        y: 1280,
      },
      end: {
        x: 8860,
        y: 1100,
      },
      id: "3520ee99-fd37-4dd3-aa1e-061b6767a1b8",
      name: "TwoWayVEdge",
      startId: "e895fb08-fcfb-4ab3-bf46-278343fbc028",
      endId: "a9d3f4f8-c713-4506-b90e-5586792fc904",
    },
    {
      start: {
        x: 8820,
        y: 1280,
      },
      end: {
        x: 8840,
        y: 1480,
      },
      id: "7dcf8f21-c6b2-46a0-bf72-c3cae1c74f52",
      name: "TwoWayVEdge",
      startId: "e895fb08-fcfb-4ab3-bf46-278343fbc028",
      endId: "7231f26f-1906-4bf2-bdde-52b5abd1266b",
    },
    {
      start: {
        x: 8860,
        y: 1100,
      },
      end: {
        x: 9060,
        y: 1100,
      },
      id: "5980dd13-450e-4e65-ba74-eaea5969609c",
      name: "TwoWayHEdge",
      startId: "a9d3f4f8-c713-4506-b90e-5586792fc904",
      endId: "d6ea39b0-e83b-48ee-bedd-3191ce747cf2",
    },
    {
      start: {
        x: 9060,
        y: 1100,
      },
      end: {
        x: 9060,
        y: 820,
      },
      id: "136e9eb7-1007-4c88-a366-29d73f2dc944",
      name: "OneWayVEdge",
      startId: "d6ea39b0-e83b-48ee-bedd-3191ce747cf2",
      endId: "1492d2de-a2ae-4fa8-82b5-16b186163e0b",
    },
    {
      start: {
        x: 8840,
        y: 1480,
      },
      end: {
        x: 9080,
        y: 1480,
      },
      id: "be549ca9-9b97-4b78-945a-9f26dd2248a8",
      name: "TwoWayHEdge",
      startId: "7231f26f-1906-4bf2-bdde-52b5abd1266b",
      endId: "b1755364-db98-4512-9074-662437d4d094",
    },
    {
      start: {
        x: 9060,
        y: 1100,
      },
      end: {
        x: 9240,
        y: 1100,
      },
      id: "24506256-e39c-4225-8949-e70053370a77",
      name: "TwoWayHEdge",
      startId: "d6ea39b0-e83b-48ee-bedd-3191ce747cf2",
      endId: "4ed96b84-16e5-42ce-86ea-c46661298638",
    },
    {
      start: {
        x: 9240,
        y: 1100,
      },
      end: {
        x: 9440,
        y: 1100,
      },
      id: "817583e0-1d55-475f-9f6b-6e37e352928f",
      name: "TwoWayHEdge",
      startId: "4ed96b84-16e5-42ce-86ea-c46661298638",
      endId: "9c015b83-a691-4051-b003-2f0c565d943d",
    },
    {
      start: {
        x: 9440,
        y: 1100,
      },
      end: {
        x: 9640,
        y: 1100,
      },
      id: "e63953f7-e788-45c3-bda6-400129e72384",
      name: "TwoWayHEdge",
      startId: "9c015b83-a691-4051-b003-2f0c565d943d",
      endId: "380d11df-4522-4b63-bbf8-b57dfe562e44",
    },
    {
      start: {
        x: 9640,
        y: 1100,
      },
      end: {
        x: 9640,
        y: 1280,
      },
      id: "b6548525-8645-4d01-b99f-f6beb7d7b233",
      name: "TwoWayVEdge",
      startId: "380d11df-4522-4b63-bbf8-b57dfe562e44",
      endId: "5a77623c-76e3-4503-83a7-81077ece764b",
    },
    {
      start: {
        x: 9640,
        y: 1280,
      },
      end: {
        x: 9240,
        y: 1280,
      },
      id: "71e75b15-b9f6-49b8-80a3-8ec18e441277",
      name: "TwoWayHEdge",
      startId: "5a77623c-76e3-4503-83a7-81077ece764b",
      endId: "916c14e4-ea15-4339-9929-95a3cbbd1448",
    },
    {
      start: {
        x: 9240,
        y: 1280,
      },
      end: {
        x: 9240,
        y: 1100,
      },
      id: "191659a1-87a5-4260-8aa7-5e527bae6f90",
      name: "TwoWayVEdge",
      startId: "916c14e4-ea15-4339-9929-95a3cbbd1448",
      endId: "4ed96b84-16e5-42ce-86ea-c46661298638",
    },
    {
      start: {
        x: 9080,
        y: 1480,
      },
      end: {
        x: 9080,
        y: 1640,
      },
      id: "f1122707-ede6-4144-9de0-132a93d878c7",
      name: "TwoWayVEdge",
      startId: "b1755364-db98-4512-9074-662437d4d094",
      endId: "e54d56c5-0b24-4799-923b-f5ef4cb16ddb",
    },
    {
      start: {
        x: 9080,
        y: 1640,
      },
      end: {
        x: 9300,
        y: 1640,
      },
      id: "8f6f69c1-5920-4e28-93e2-06fc53aa7718",
      name: "TwoWayHEdge",
      startId: "e54d56c5-0b24-4799-923b-f5ef4cb16ddb",
      endId: "b165e202-8b17-47ba-b806-fc56a2668135",
    },
    {
      start: {
        x: 9640,
        y: 1100,
      },
      end: {
        x: 9820,
        y: 1100,
      },
      id: "6e983c8a-ab98-4f6c-8121-50c7f929cefa",
      name: "TwoWayHEdge",
      startId: "380d11df-4522-4b63-bbf8-b57dfe562e44",
      endId: "e73c10f9-75ae-4309-aa1e-7c5a5bc2bb07",
    },
    {
      start: {
        x: 9640,
        y: 1280,
      },
      end: {
        x: 9640,
        y: 1440,
      },
      id: "f0204263-9751-44b7-9de5-3adbf592efe8",
      name: "TwoWayVEdge",
      startId: "5a77623c-76e3-4503-83a7-81077ece764b",
      endId: "f43a0569-9c47-42ab-8c1f-2338d143de66",
    },
    {
      start: {
        x: 9640,
        y: 1440,
      },
      end: {
        x: 9820,
        y: 1440,
      },
      id: "a0cbce1a-9e7f-49b7-8445-8759f4f28a16",
      name: "TwoWayHEdge",
      startId: "f43a0569-9c47-42ab-8c1f-2338d143de66",
      endId: "45b9a967-380c-47db-8723-24fa81c8b9d5",
    },
    {
      start: {
        x: 9820,
        y: 1440,
      },
      end: {
        x: 9820,
        y: 1100,
      },
      id: "003784f7-4a15-47cf-a5a8-a8e7e78516eb",
      name: "TwoWayVEdge",
      startId: "45b9a967-380c-47db-8723-24fa81c8b9d5",
      endId: "e73c10f9-75ae-4309-aa1e-7c5a5bc2bb07",
    },
    {
      start: {
        x: 9300,
        y: 1640,
      },
      end: {
        x: 9300,
        y: 1820,
      },
      id: "8f0003c0-cd0a-4f11-a26e-cb87baaa21d7",
      name: "TwoWayVEdge",
      startId: "b165e202-8b17-47ba-b806-fc56a2668135",
      endId: "2734c943-2057-4493-8681-5a1a2002819c",
    },
    {
      start: {
        x: 9300,
        y: 1820,
      },
      end: {
        x: 9540,
        y: 1820,
      },
      id: "9b27254f-58f6-4bec-9b2b-f7832beb206b",
      name: "TwoWayHEdge",
      startId: "2734c943-2057-4493-8681-5a1a2002819c",
      endId: "82c6c443-887f-4942-9432-58b218aeaf09",
    },
    {
      start: {
        x: 9540,
        y: 1820,
      },
      end: {
        x: 9800,
        y: 1820,
      },
      id: "87756014-b2ca-4c02-9229-7e4a290bffe2",
      name: "TwoWayHEdge",
      startId: "82c6c443-887f-4942-9432-58b218aeaf09",
      endId: "739a26fd-a986-4ee8-9730-ce58740c3b9e",
    },
    {
      start: {
        x: 9820,
        y: 1440,
      },
      end: {
        x: 10020,
        y: 1440,
      },
      id: "c7f9dba7-5b65-42fa-af09-d9fa66f081e7",
      name: "TwoWayHEdge",
      startId: "45b9a967-380c-47db-8723-24fa81c8b9d5",
      endId: "5e12c82e-f03c-4201-ab8d-5f851d3f9935",
    },
    {
      start: {
        x: 10020,
        y: 1440,
      },
      end: {
        x: 10020,
        y: 1820,
      },
      id: "666dcee8-4710-420b-b4a9-9c2902800268",
      name: "TwoWayVEdge",
      startId: "5e12c82e-f03c-4201-ab8d-5f851d3f9935",
      endId: "0413aedb-0d34-4c9a-bf60-cd0fc4ee8923",
    },
    {
      start: {
        x: 10020,
        y: 1820,
      },
      end: {
        x: 9800,
        y: 1820,
      },
      id: "a6174a41-3e72-432a-aa43-e65450a97169",
      name: "TwoWayHEdge",
      startId: "0413aedb-0d34-4c9a-bf60-cd0fc4ee8923",
      endId: "739a26fd-a986-4ee8-9730-ce58740c3b9e",
    },
    {
      start: {
        x: 9300,
        y: 1820,
      },
      end: {
        x: 9080,
        y: 1820,
      },
      id: "23ff1a1b-786c-4dcc-a023-97abd073b78d",
      name: "TwoWayHEdge",
      startId: "2734c943-2057-4493-8681-5a1a2002819c",
      endId: "c3339d60-ef80-4f9a-80b8-277b8fe5f1b5",
    },
    {
      start: {
        x: 9080,
        y: 1820,
      },
      end: {
        x: 8860,
        y: 1820,
      },
      id: "2031f8d1-edc8-4545-a43f-1bda6aebea5a",
      name: "TwoWayHEdge",
      startId: "c3339d60-ef80-4f9a-80b8-277b8fe5f1b5",
      endId: "54cc7e66-22d9-4750-b89a-121e74bfe608",
    },
    {
      start: {
        x: 10020,
        y: 1440,
      },
      end: {
        x: 10220,
        y: 1440,
      },
      id: "c8c552d3-ff00-4ce9-ba27-a53cdb4a8479",
      name: "TwoWayHEdge",
      startId: "5e12c82e-f03c-4201-ab8d-5f851d3f9935",
      endId: "4dc50917-85de-4eef-8a02-aa89b315766c",
    },
    {
      start: {
        x: 10220,
        y: 1440,
      },
      end: {
        x: 10420,
        y: 1440,
      },
      id: "45e70d52-af99-4cdc-9328-4583282109cd",
      name: "TwoWayHEdge",
      startId: "4dc50917-85de-4eef-8a02-aa89b315766c",
      endId: "cdda4ec5-0d58-466d-b1f0-1b9c7a402198",
    },
    {
      start: {
        x: 10420,
        y: 1440,
      },
      end: {
        x: 10420,
        y: 1260,
      },
      id: "5e24dbb9-bb68-41c7-9239-f833ccbce0f5",
      name: "TwoWayVEdge",
      startId: "cdda4ec5-0d58-466d-b1f0-1b9c7a402198",
      endId: "dac3b5c1-d873-4139-84ae-25e1d1d12ce1",
    },
    {
      start: {
        x: 10420,
        y: 1260,
      },
      end: {
        x: 10420,
        y: 1080,
      },
      id: "e340aea6-3753-4ca7-926a-dbd6f86f53ef",
      name: "TwoWayVEdge",
      startId: "dac3b5c1-d873-4139-84ae-25e1d1d12ce1",
      endId: "9652d737-c4c0-4fc6-ad84-396a9d0b7fc0",
    },
    {
      start: {
        x: 10420,
        y: 1080,
      },
      end: {
        x: 10640,
        y: 1080,
      },
      id: "e6d996d4-f001-49f5-956b-a84568ff4f81",
      name: "TwoWayHEdge",
      startId: "9652d737-c4c0-4fc6-ad84-396a9d0b7fc0",
      endId: "1c17d900-bb17-4b74-b086-593040af65dd",
    },
    {
      start: {
        x: 10640,
        y: 1080,
      },
      end: {
        x: 10640,
        y: 1440,
      },
      id: "7d679666-3406-402d-8462-f793102f937b",
      name: "TwoWayVEdge",
      startId: "1c17d900-bb17-4b74-b086-593040af65dd",
      endId: "01c614d7-5076-44de-880c-a8ad3b72851a",
    },
    {
      start: {
        x: 10640,
        y: 1440,
      },
      end: {
        x: 10420,
        y: 1440,
      },
      id: "06e499bb-944a-410b-9b72-c94470857f0b",
      name: "TwoWayHEdge",
      startId: "01c614d7-5076-44de-880c-a8ad3b72851a",
      endId: "cdda4ec5-0d58-466d-b1f0-1b9c7a402198",
    },
    {
      start: {
        x: 10640,
        y: 1440,
      },
      end: {
        x: 10640,
        y: 1740,
      },
      id: "904891db-c07d-438f-bd3e-37852d57027c",
      name: "TwoWayVEdge",
      startId: "01c614d7-5076-44de-880c-a8ad3b72851a",
      endId: "c66616fd-f9bc-439a-ad82-3777b2db474f",
    },
    {
      start: {
        x: 10640,
        y: 1440,
      },
      end: {
        x: 10840,
        y: 1440,
      },
      id: "70034040-bed3-47e7-99b7-1cd0a1143d68",
      name: "TwoWayHEdge",
      startId: "01c614d7-5076-44de-880c-a8ad3b72851a",
      endId: "2d864683-dd16-48bd-8071-dcb9975a467b",
    },
    {
      start: {
        x: 10840,
        y: 1440,
      },
      end: {
        x: 10840,
        y: 1580,
      },
      id: "3a9e3185-6e0f-4814-b82d-66d2e985e249",
      name: "TwoWayVEdge",
      startId: "2d864683-dd16-48bd-8071-dcb9975a467b",
      endId: "8c466c93-09fa-427e-a8a4-0515292ffa55",
    },
    {
      start: {
        x: 10840,
        y: 1580,
      },
      end: {
        x: 10840,
        y: 1740,
      },
      id: "12e2c26f-fa20-4a61-95b5-b539d5998d1d",
      name: "TwoWayVEdge",
      startId: "8c466c93-09fa-427e-a8a4-0515292ffa55",
      endId: "4c5b5f51-c948-45b0-b6bc-bca93669ec60",
    },
    {
      start: {
        x: 10640,
        y: 1740,
      },
      end: {
        x: 10840,
        y: 1740,
      },
      id: "1d29a7d4-6a5f-4d82-87e2-22657030e01e",
      name: "TwoWayHEdge",
      startId: "c66616fd-f9bc-439a-ad82-3777b2db474f",
      endId: "4c5b5f51-c948-45b0-b6bc-bca93669ec60",
    },
    {
      start: {
        x: 10640,
        y: 1740,
      },
      end: {
        x: 10380,
        y: 1740,
      },
      id: "9f61731f-99d2-4d8e-8e1f-9f0066d5651f",
      name: "TwoWayHEdge",
      startId: "c66616fd-f9bc-439a-ad82-3777b2db474f",
      endId: "55f24b18-76d1-4b14-82b0-2a968a110f2d",
    },
    {
      start: {
        x: 10380,
        y: 1740,
      },
      end: {
        x: 10380,
        y: 2060,
      },
      id: "1e391606-cce9-4968-a683-fea3530a0937",
      name: "TwoWayVEdge",
      startId: "55f24b18-76d1-4b14-82b0-2a968a110f2d",
      endId: "e4b87956-75e9-4e2e-9e55-b6cdb9737fd8",
    },
    {
      start: {
        x: 10020,
        y: 1820,
      },
      end: {
        x: 10240,
        y: 1820,
      },
      id: "ddcc2c8d-75a8-4e72-917d-412888424d9e",
      name: "TwoWayHEdge",
      startId: "0413aedb-0d34-4c9a-bf60-cd0fc4ee8923",
      endId: "050aaa74-fd68-4b69-bdbc-848d3e548406",
    },
    {
      start: {
        x: 10240,
        y: 1820,
      },
      end: {
        x: 10240,
        y: 2000,
      },
      id: "1b48f842-071e-4872-bc5e-159aba8bdff8",
      name: "TwoWayVEdge",
      startId: "050aaa74-fd68-4b69-bdbc-848d3e548406",
      endId: "b7ee85d1-df0d-4b54-bba1-bdfb0a3435bb",
    },
    {
      start: {
        x: 9800,
        y: 1820,
      },
      end: {
        x: 9800,
        y: 2000,
      },
      id: "53b9f606-2e60-40d5-9473-65eafbdbce41",
      name: "TwoWayVEdge",
      startId: "739a26fd-a986-4ee8-9730-ce58740c3b9e",
      endId: "9a8608fa-437c-47eb-abb0-420820daed52",
    },
    {
      start: {
        x: 9800,
        y: 2000,
      },
      end: {
        x: 10240,
        y: 2000,
      },
      id: "7785d008-0029-48af-ad21-ed7c6cf72e2d",
      name: "TwoWayHEdge",
      startId: "9a8608fa-437c-47eb-abb0-420820daed52",
      endId: "b7ee85d1-df0d-4b54-bba1-bdfb0a3435bb",
    },
    {
      start: {
        x: 10240,
        y: 2000,
      },
      end: {
        x: 10240,
        y: 2240,
      },
      id: "be830994-31a9-4dd3-b34a-180cb7830d6b",
      name: "TwoWayVEdge",
      startId: "b7ee85d1-df0d-4b54-bba1-bdfb0a3435bb",
      endId: "25d523ae-d9b4-4ae9-8104-ace81dbbfa7b",
    },
    {
      start: {
        x: 10240,
        y: 2240,
      },
      end: {
        x: 10400,
        y: 2240,
      },
      id: "2b0ee85a-4ecf-4825-8492-dcb8db9d3569",
      name: "TwoWayHEdge",
      startId: "25d523ae-d9b4-4ae9-8104-ace81dbbfa7b",
      endId: "18775afe-0621-4d83-83de-1c189103ffc1",
    },
    {
      start: {
        x: 10400,
        y: 2240,
      },
      end: {
        x: 10580,
        y: 2240,
      },
      id: "54e4d670-38eb-483f-b99e-b034a29e2939",
      name: "TwoWayHEdge",
      startId: "18775afe-0621-4d83-83de-1c189103ffc1",
      endId: "facbd51f-33fe-4e88-964a-2f6d60a0b14d",
    },
    {
      start: {
        x: 10380,
        y: 2060,
      },
      end: {
        x: 10580,
        y: 2060,
      },
      id: "733f88d3-0450-4ece-a838-d0b0a3285068",
      name: "TwoWayHEdge",
      startId: "e4b87956-75e9-4e2e-9e55-b6cdb9737fd8",
      endId: "175ce3e2-1a06-4a33-91ec-6343b4368bc7",
    },
    {
      start: {
        x: 10580,
        y: 2060,
      },
      end: {
        x: 10580,
        y: 2240,
      },
      id: "2b305037-823b-4024-b247-9dc724a32b71",
      name: "TwoWayVEdge",
      startId: "175ce3e2-1a06-4a33-91ec-6343b4368bc7",
      endId: "facbd51f-33fe-4e88-964a-2f6d60a0b14d",
    },
    {
      start: {
        x: 9060,
        y: 820,
      },
      end: {
        x: 9140,
        y: 220,
      },
      id: "c74ac970-1ae7-42fb-a4c9-139b14be8041",
      name: "TwoWayVEdge",
      startId: "1492d2de-a2ae-4fa8-82b5-16b186163e0b",
      endId: "dcc3324c-0a24-4166-8318-5722e433f9eb",
    },
    {
      start: {
        x: 9140,
        y: 220,
      },
      end: {
        x: 9380,
        y: 220,
      },
      id: "836c63c6-57dc-440c-9d6b-7d224bcfc839",
      name: "TwoWayHEdge",
      startId: "dcc3324c-0a24-4166-8318-5722e433f9eb",
      endId: "0d9218a0-14fc-439c-b421-23eb0a343b44",
    },
    {
      start: {
        x: 9380,
        y: 220,
      },
      end: {
        x: 9640,
        y: 220,
      },
      id: "e31d387c-0bb6-445e-a2bc-5e0308b3ddf6",
      name: "TwoWayHEdge",
      startId: "0d9218a0-14fc-439c-b421-23eb0a343b44",
      endId: "6a04a967-c537-4406-be50-78b5e9240746",
    },
    {
      start: {
        x: 9640,
        y: 220,
      },
      end: {
        x: 9880,
        y: 220,
      },
      id: "9ae4704f-6740-4221-8266-73311911bfad",
      name: "TwoWayHEdge",
      startId: "6a04a967-c537-4406-be50-78b5e9240746",
      endId: "71f9956b-c781-417d-91ad-68ef441a2f9a",
    },
    {
      start: {
        x: 9880,
        y: 220,
      },
      end: {
        x: 10120,
        y: 220,
      },
      id: "37c2b385-4c25-42d3-9e78-6478b9735839",
      name: "TwoWayHEdge",
      startId: "71f9956b-c781-417d-91ad-68ef441a2f9a",
      endId: "dadd5555-6679-4043-8aae-e99ad4cec2b1",
    },
    {
      start: {
        x: 10120,
        y: 220,
      },
      end: {
        x: 10120,
        y: 460,
      },
      id: "ce7329b1-6843-40a3-af0a-1503118f6c5c",
      name: "TwoWayVEdge",
      startId: "dadd5555-6679-4043-8aae-e99ad4cec2b1",
      endId: "5ee881de-fe3c-46b9-9895-c11a8875b06d",
    },
    {
      start: {
        x: 10120,
        y: 460,
      },
      end: {
        x: 10420,
        y: 460,
      },
      id: "f1c93acd-8de6-4f0c-a09c-574235a6d9bf",
      name: "TwoWayHEdge",
      startId: "5ee881de-fe3c-46b9-9895-c11a8875b06d",
      endId: "ffb49d2a-81b9-4474-b45b-fcbf5e89160f",
    },
    {
      start: {
        x: 10420,
        y: 460,
      },
      end: {
        x: 10420,
        y: 680,
      },
      id: "85d811de-90e9-4dff-84b1-af7389fd1b91",
      name: "TwoWayVEdge",
      startId: "ffb49d2a-81b9-4474-b45b-fcbf5e89160f",
      endId: "05b45255-dfea-4bbe-8cf5-60a07e34cd6d",
    },
    {
      start: {
        x: 10420,
        y: 680,
      },
      end: {
        x: 10420,
        y: 860,
      },
      id: "8b3defdd-708e-438a-9392-803d3fcafdaa",
      name: "TwoWayVEdge",
      startId: "05b45255-dfea-4bbe-8cf5-60a07e34cd6d",
      endId: "17d01ec4-e212-443b-9f25-271798ad7eae",
    },
    {
      start: {
        x: 10420,
        y: 860,
      },
      end: {
        x: 10420,
        y: 1080,
      },
      id: "97b91a6c-3c4b-47f1-80f9-06cf3877f3ca",
      name: "OneWayVEdge",
      startId: "17d01ec4-e212-443b-9f25-271798ad7eae",
      endId: "9652d737-c4c0-4fc6-ad84-396a9d0b7fc0",
    },
    {
      start: {
        x: 9300,
        y: 1820,
      },
      end: {
        x: 9300,
        y: 2000,
      },
      id: "78105b3a-4e87-41ee-8e96-6cd40435f3f6",
      name: "TwoWayVEdge",
      startId: "2734c943-2057-4493-8681-5a1a2002819c",
      endId: "52d134cb-b091-46c2-bc31-764aaedb88b7",
    },
    {
      start: {
        x: 9300,
        y: 2000,
      },
      end: {
        x: 9300,
        y: 2180,
      },
      id: "10456d81-16c7-48bd-bd4a-a00fd95707ea",
      name: "TwoWayVEdge",
      startId: "52d134cb-b091-46c2-bc31-764aaedb88b7",
      endId: "07bff46b-09c7-4cb1-8699-ed10d7c77782",
    },
    {
      start: {
        x: 9300,
        y: 2180,
      },
      end: {
        x: 9300,
        y: 2360,
      },
      id: "c2c152a6-de8b-497c-89ae-80b3e57ca3ff",
      name: "TwoWayVEdge",
      startId: "07bff46b-09c7-4cb1-8699-ed10d7c77782",
      endId: "d9d66308-6739-4aa2-8345-70e6d7223344",
    },
    {
      start: {
        x: 9800,
        y: 2000,
      },
      end: {
        x: 9800,
        y: 2320,
      },
      id: "e149f9b9-e065-4695-9311-28135ec5197f",
      name: "TwoWayVEdge",
      startId: "9a8608fa-437c-47eb-abb0-420820daed52",
      endId: "d3d8d335-cd41-4116-aaf3-b4906597bb1c",
    },
    {
      start: {
        x: 9300,
        y: 2360,
      },
      end: {
        x: 9500,
        y: 2400,
      },
      id: "7f965706-22a0-491b-8347-fc0c4257c082",
      name: "TwoWayHEdge",
      startId: "d9d66308-6739-4aa2-8345-70e6d7223344",
      endId: "f0ed9f40-dc62-45b8-98fa-6780972106a5",
    },
    {
      start: {
        x: 9800,
        y: 2320,
      },
      end: {
        x: 10060,
        y: 2340,
      },
      id: "68ab9ae2-0f24-43d7-8f21-d791103d9f18",
      name: "TwoWayHEdge",
      startId: "d3d8d335-cd41-4116-aaf3-b4906597bb1c",
      endId: "28b5a75d-9afd-4129-adb1-e8701a1f8386",
    },
    {
      start: {
        x: 10060,
        y: 2340,
      },
      end: {
        x: 10060,
        y: 2580,
      },
      id: "989e28f3-91b0-49ee-84dd-5b364b51a64c",
      name: "TwoWayVEdge",
      startId: "28b5a75d-9afd-4129-adb1-e8701a1f8386",
      endId: "71c36b08-c9fd-42d7-b63a-f4a06f5889b4",
    },
    {
      start: {
        x: 9500,
        y: 2400,
      },
      end: {
        x: 9500,
        y: 2580,
      },
      id: "fc661176-e010-4a62-a829-e7a18f03bb03",
      name: "TwoWayVEdge",
      startId: "f0ed9f40-dc62-45b8-98fa-6780972106a5",
      endId: "f2db85a0-d2b7-4dd5-a9a2-4bbd90f18a4a",
    },
    {
      start: {
        x: 9500,
        y: 2580,
      },
      end: {
        x: 9480,
        y: 2760,
      },
      id: "e9476f89-4939-4b2c-b202-a1740fe9fb8e",
      name: "TwoWayVEdge",
      startId: "f2db85a0-d2b7-4dd5-a9a2-4bbd90f18a4a",
      endId: "5b347aab-64f1-4cfc-889b-aa0674ff52a9",
    },
    {
      start: {
        x: 9480,
        y: 2760,
      },
      end: {
        x: 9760,
        y: 2760,
      },
      id: "94f2e822-cf08-4408-bc8d-70de5ec523a0",
      name: "TwoWayHEdge",
      startId: "5b347aab-64f1-4cfc-889b-aa0674ff52a9",
      endId: "8f3d5580-028e-423f-9eb8-688b2412836c",
    },
    {
      start: {
        x: 9760,
        y: 2760,
      },
      end: {
        x: 10080,
        y: 2760,
      },
      id: "5327c0ef-c4f3-4508-84ee-ea3c24aafa5d",
      name: "TwoWayHEdge",
      startId: "8f3d5580-028e-423f-9eb8-688b2412836c",
      endId: "3b0ad8e7-4773-424b-be7d-9fa397971270",
    },
    {
      start: {
        x: 10060,
        y: 2580,
      },
      end: {
        x: 10280,
        y: 2580,
      },
      id: "2c35a80f-3e24-41e3-8632-65435c8629a9",
      name: "TwoWayHEdge",
      startId: "71c36b08-c9fd-42d7-b63a-f4a06f5889b4",
      endId: "99f5deab-30c7-429b-ba57-488688378869",
    },
    {
      start: {
        x: 10280,
        y: 2580,
      },
      end: {
        x: 10280,
        y: 2960,
      },
      id: "ca01d1c5-a859-48c8-961b-c7e34cea7e10",
      name: "TwoWayVEdge",
      startId: "99f5deab-30c7-429b-ba57-488688378869",
      endId: "69e79c2d-4776-4818-b3a7-7e945be4acf7",
    },
    {
      start: {
        x: 10280,
        y: 2580,
      },
      end: {
        x: 10480,
        y: 2580,
      },
      id: "c22732fd-a811-48df-b270-29ef8cbb4870",
      name: "TwoWayHEdge",
      startId: "99f5deab-30c7-429b-ba57-488688378869",
      endId: "baa64140-9016-45cd-ac30-4e2a2f6212a8",
    },
    {
      start: {
        x: 10480,
        y: 2580,
      },
      end: {
        x: 10480,
        y: 2760,
      },
      id: "2a41f89f-9d67-4d99-b821-0c6f7d86737d",
      name: "TwoWayVEdge",
      startId: "baa64140-9016-45cd-ac30-4e2a2f6212a8",
      endId: "211e5d41-ef9b-454e-ba56-584557764f33",
    },
    {
      start: {
        x: 10480,
        y: 2760,
      },
      end: {
        x: 10480,
        y: 2960,
      },
      id: "f3e069c9-5f24-4d8c-a6d2-89adc841dbbd",
      name: "TwoWayVEdge",
      startId: "211e5d41-ef9b-454e-ba56-584557764f33",
      endId: "437c3a1a-48cd-4234-af49-aaa7332e8a5b",
    },
    {
      start: {
        x: 10280,
        y: 2960,
      },
      end: {
        x: 10480,
        y: 2960,
      },
      id: "ecf8bb9b-3409-4ad9-a20f-f8b15201f5c8",
      name: "TwoWayHEdge",
      startId: "69e79c2d-4776-4818-b3a7-7e945be4acf7",
      endId: "437c3a1a-48cd-4234-af49-aaa7332e8a5b",
    },
    {
      start: {
        x: 10480,
        y: 2580,
      },
      end: {
        x: 10780,
        y: 2600,
      },
      id: "887f2d12-82aa-417a-8c80-9284292cdd4e",
      name: "TwoWayHEdge",
      startId: "baa64140-9016-45cd-ac30-4e2a2f6212a8",
      endId: "5d3a955e-6b10-48f4-a75c-075029353ab2",
    },
    {
      start: {
        x: 10780,
        y: 2600,
      },
      end: {
        x: 10760,
        y: 2420,
      },
      id: "77be5133-e1e9-49b1-ad7c-44027dd86748",
      name: "TwoWayVEdge",
      startId: "5d3a955e-6b10-48f4-a75c-075029353ab2",
      endId: "85874741-e052-4913-bd28-64203e6e1632",
    },
    {
      start: {
        x: 10760,
        y: 2420,
      },
      end: {
        x: 10800,
        y: 2240,
      },
      id: "f0f17e11-a3f1-4f43-b1df-d0a234aa8dbf",
      name: "TwoWayVEdge",
      startId: "85874741-e052-4913-bd28-64203e6e1632",
      endId: "4d0f3ceb-a3dd-468e-9baf-665bf46d15c6",
    },
    {
      start: {
        x: 10840,
        y: 1580,
      },
      end: {
        x: 11200,
        y: 1580,
      },
      id: "f5681914-1128-4553-90d6-32181d4f885d",
      name: "TwoWayHEdge",
      startId: "8c466c93-09fa-427e-a8a4-0515292ffa55",
      endId: "277beb3b-f1d1-4dd7-af5c-1548a3b71336",
    },
    {
      start: {
        x: 10840,
        y: 1740,
      },
      end: {
        x: 11020,
        y: 1740,
      },
      id: "c074be00-a500-43b1-bcba-320969a35f96",
      name: "TwoWayHEdge",
      startId: "4c5b5f51-c948-45b0-b6bc-bca93669ec60",
      endId: "086d2d3f-21bd-4457-bd05-cff57eff10db",
    },
    {
      start: {
        x: 11020,
        y: 1740,
      },
      end: {
        x: 11000,
        y: 1900,
      },
      id: "995b55db-fdd7-4ac7-b7bf-f39b62f218ab",
      name: "TwoWayVEdge",
      startId: "086d2d3f-21bd-4457-bd05-cff57eff10db",
      endId: "cd81978d-7407-43b2-985a-136e77cc856b",
    },
    {
      start: {
        x: 11000,
        y: 1900,
      },
      end: {
        x: 11180,
        y: 1880,
      },
      id: "cefe9add-9d4f-4aec-871b-499ac589c30f",
      name: "TwoWayHEdge",
      startId: "cd81978d-7407-43b2-985a-136e77cc856b",
      endId: "ace59a88-128f-4dbc-ac51-87381ed9bb1d",
    },
    {
      start: {
        x: 11200,
        y: 1580,
      },
      end: {
        x: 11200,
        y: 1440,
      },
      id: "4029b057-9a89-4e52-ad0d-e0f7cd14bb18",
      name: "TwoWayVEdge",
      startId: "277beb3b-f1d1-4dd7-af5c-1548a3b71336",
      endId: "912d821b-92d2-41a8-8999-79208150d515",
    },
    {
      start: {
        x: 11200,
        y: 1440,
      },
      end: {
        x: 11340,
        y: 1440,
      },
      id: "9a4a6b8e-9bf4-451b-8b9a-301e67b7092b",
      name: "TwoWayHEdge",
      startId: "912d821b-92d2-41a8-8999-79208150d515",
      endId: "ec4542a4-998c-4a96-95b2-f2519dd2386d",
    },
    {
      start: {
        x: 11340,
        y: 1440,
      },
      end: {
        x: 11340,
        y: 1620,
      },
      id: "5a88debb-bd6a-430c-b864-fd7c4500da29",
      name: "TwoWayVEdge",
      startId: "ec4542a4-998c-4a96-95b2-f2519dd2386d",
      endId: "6c4a5257-57dc-48fd-82e6-d56afdf85ffc",
    },
    {
      start: {
        x: 11340,
        y: 1440,
      },
      end: {
        x: 11340,
        y: 1260,
      },
      id: "a41ef1b4-846f-49b8-a12e-d3823db0e575",
      name: "TwoWayVEdge",
      startId: "ec4542a4-998c-4a96-95b2-f2519dd2386d",
      endId: "5056649a-a114-4ea8-a952-b789076a9f7b",
    },
    {
      start: {
        x: 11340,
        y: 1620,
      },
      end: {
        x: 11540,
        y: 1600,
      },
      id: "eb4a3d58-1fcd-496c-8aac-e3c3baf56464",
      name: "TwoWayHEdge",
      startId: "6c4a5257-57dc-48fd-82e6-d56afdf85ffc",
      endId: "83a22c1f-195d-4d74-b325-e8a11f45490a",
    },
    {
      start: {
        x: 11540,
        y: 1600,
      },
      end: {
        x: 11540,
        y: 1260,
      },
      id: "f061dce2-189a-4693-86b1-b334c0d0c71a",
      name: "TwoWayVEdge",
      startId: "83a22c1f-195d-4d74-b325-e8a11f45490a",
      endId: "171043fd-5f66-45d9-b510-c036c842102b",
    },
    {
      start: {
        x: 11340,
        y: 1260,
      },
      end: {
        x: 11540,
        y: 1260,
      },
      id: "f5ab208e-a4cc-4e11-a9b4-fc9456338adf",
      name: "TwoWayHEdge",
      startId: "5056649a-a114-4ea8-a952-b789076a9f7b",
      endId: "171043fd-5f66-45d9-b510-c036c842102b",
    },
    {
      start: {
        x: 11540,
        y: 1600,
      },
      end: {
        x: 11880,
        y: 1620,
      },
      id: "1fe17f1f-63a1-484d-abc1-e6b117818b4b",
      name: "TwoWayHEdge",
      startId: "83a22c1f-195d-4d74-b325-e8a11f45490a",
      endId: "542a28f5-3066-4f7c-bb3b-85d540ce0e4d",
    },
    {
      start: {
        x: 11880,
        y: 1620,
      },
      end: {
        x: 12200,
        y: 1620,
      },
      id: "d57e273e-54e9-4447-af29-d298eb3e4a7c",
      name: "TwoWayHEdge",
      startId: "542a28f5-3066-4f7c-bb3b-85d540ce0e4d",
      endId: "8a5e6dfb-f29f-4790-bdad-e6d201d464b5",
    },
    {
      start: {
        x: 12200,
        y: 1620,
      },
      end: {
        x: 12420,
        y: 1620,
      },
      id: "9e09f6dc-843d-4733-a655-cc326459fc80",
      name: "TwoWayHEdge",
      startId: "8a5e6dfb-f29f-4790-bdad-e6d201d464b5",
      endId: "925fd683-9e27-4b69-bd12-8adf0cc12157",
    },
    {
      start: {
        x: 12420,
        y: 1620,
      },
      end: {
        x: 12640,
        y: 1620,
      },
      id: "71b51314-5650-490a-9c59-d6d05e57d814",
      name: "TwoWayHEdge",
      startId: "925fd683-9e27-4b69-bd12-8adf0cc12157",
      endId: "0559834c-8f1c-4fb9-b4fb-fc10292b1983",
    },
    {
      start: {
        x: 12640,
        y: 1620,
      },
      end: {
        x: 12640,
        y: 1780,
      },
      id: "6443085a-f818-40a4-a545-42e1e9202420",
      name: "TwoWayVEdge",
      startId: "0559834c-8f1c-4fb9-b4fb-fc10292b1983",
      endId: "0fe28f0e-a27c-477f-b931-9888e6b060b5",
    },
    {
      start: {
        x: 12640,
        y: 1780,
      },
      end: {
        x: 12200,
        y: 1780,
      },
      id: "71fc14ab-a734-4cdd-882c-fd57a3b9ea0f",
      name: "TwoWayHEdge",
      startId: "0fe28f0e-a27c-477f-b931-9888e6b060b5",
      endId: "3829a24b-bea6-4153-bccc-9688cfd6db14",
    },
    {
      start: {
        x: 12200,
        y: 1620,
      },
      end: {
        x: 12200,
        y: 1780,
      },
      id: "48367dbd-34fa-4594-99be-24c3d4d09a26",
      name: "TwoWayVEdge",
      startId: "8a5e6dfb-f29f-4790-bdad-e6d201d464b5",
      endId: "3829a24b-bea6-4153-bccc-9688cfd6db14",
    },
    {
      start: {
        x: 12200,
        y: 1780,
      },
      end: {
        x: 11980,
        y: 1780,
      },
      id: "e70bf260-78ce-455a-9a1a-eaa1f66e5a8e",
      name: "TwoWayHEdge",
      startId: "3829a24b-bea6-4153-bccc-9688cfd6db14",
      endId: "100e96dc-3e04-4935-9403-8461c17b2c8e",
    },
    {
      start: {
        x: 11980,
        y: 1780,
      },
      end: {
        x: 11980,
        y: 2100,
      },
      id: "141368f2-9bb6-46b3-82ca-c90023152059",
      name: "TwoWayVEdge",
      startId: "100e96dc-3e04-4935-9403-8461c17b2c8e",
      endId: "fb2f98f0-a085-4799-b2e9-ba8164f2059d",
    },
    {
      start: {
        x: 11980,
        y: 2100,
      },
      end: {
        x: 12200,
        y: 2100,
      },
      id: "2bd74b8b-f116-4af7-8543-6bb64a8f88df",
      name: "TwoWayHEdge",
      startId: "fb2f98f0-a085-4799-b2e9-ba8164f2059d",
      endId: "6ae2fd50-7be3-4877-9287-c843f3860d73",
    },
    {
      start: {
        x: 12200,
        y: 1780,
      },
      end: {
        x: 12200,
        y: 1940,
      },
      id: "0f9125fe-7286-4159-b86a-390e99b4b968",
      name: "TwoWayVEdge",
      startId: "3829a24b-bea6-4153-bccc-9688cfd6db14",
      endId: "b03d437b-64de-4a68-88ce-737c7e5eea09",
    },
    {
      start: {
        x: 12200,
        y: 1940,
      },
      end: {
        x: 12200,
        y: 2100,
      },
      id: "415795a3-670a-4c40-bf9a-fb597cbf41b0",
      name: "TwoWayVEdge",
      startId: "b03d437b-64de-4a68-88ce-737c7e5eea09",
      endId: "6ae2fd50-7be3-4877-9287-c843f3860d73",
    },
    {
      start: {
        x: 11980,
        y: 2100,
      },
      end: {
        x: 11580,
        y: 2100,
      },
      id: "02541e22-8fd5-4d36-8a20-c20d14c5e57b",
      name: "TwoWayHEdge",
      startId: "fb2f98f0-a085-4799-b2e9-ba8164f2059d",
      endId: "ce3afe3f-eca3-4fe8-95c3-0db872842be1",
    },
    {
      start: {
        x: 11580,
        y: 2100,
      },
      end: {
        x: 11240,
        y: 2080,
      },
      id: "77fdf49c-0633-4b97-88d5-8cf8494acc0f",
      name: "TwoWayHEdge",
      startId: "ce3afe3f-eca3-4fe8-95c3-0db872842be1",
      endId: "ea77dc8c-b094-4b42-a3b2-c8e9b6eb1995",
    },
    {
      start: {
        x: 11240,
        y: 2080,
      },
      end: {
        x: 11240,
        y: 2280,
      },
      id: "17fa937f-24e5-448b-ba7d-f66d7e4d7868",
      name: "TwoWayVEdge",
      startId: "ea77dc8c-b094-4b42-a3b2-c8e9b6eb1995",
      endId: "ef160cbd-5f22-41a0-92c8-2060c200418d",
    },
    {
      start: {
        x: 11240,
        y: 2280,
      },
      end: {
        x: 10980,
        y: 2220,
      },
      id: "583e553b-18dd-4672-b687-e3df231310a8",
      name: "TwoWayHEdge",
      startId: "ef160cbd-5f22-41a0-92c8-2060c200418d",
      endId: "f59b2d71-d336-42db-8d73-479b36ee4fc3",
    },
    {
      start: {
        x: 11240,
        y: 2280,
      },
      end: {
        x: 11240,
        y: 2460,
      },
      id: "90951e86-f166-4d50-bb6e-17f4dcccad2b",
      name: "TwoWayVEdge",
      startId: "ef160cbd-5f22-41a0-92c8-2060c200418d",
      endId: "ead6ebfe-2576-48b6-a208-5eafbf7836e1",
    },
    {
      start: {
        x: 11240,
        y: 2460,
      },
      end: {
        x: 11440,
        y: 2460,
      },
      id: "d7142db6-ee36-4ba7-8b18-4129654041f1",
      name: "TwoWayHEdge",
      startId: "ead6ebfe-2576-48b6-a208-5eafbf7836e1",
      endId: "b7b562bc-5d4e-40af-a66e-cf9edc1f1c05",
    },
    {
      start: {
        x: 11240,
        y: 2460,
      },
      end: {
        x: 11240,
        y: 2660,
      },
      id: "7ff6ae5c-c080-4b1c-a5d4-71937295876f",
      name: "TwoWayVEdge",
      startId: "ead6ebfe-2576-48b6-a208-5eafbf7836e1",
      endId: "c7397b07-8971-4e6e-9643-7f3d7c0abf34",
    },
    {
      start: {
        x: 11440,
        y: 2460,
      },
      end: {
        x: 11440,
        y: 2660,
      },
      id: "b6c0f51f-d53c-4660-95a6-769fdc17c263",
      name: "TwoWayVEdge",
      startId: "b7b562bc-5d4e-40af-a66e-cf9edc1f1c05",
      endId: "860f7332-e1f1-48ed-bb5f-3d21ac32eeaa",
    },
    {
      start: {
        x: 11440,
        y: 2660,
      },
      end: {
        x: 11640,
        y: 2660,
      },
      id: "814580d0-7c57-4156-8ff8-4ff3b18c5078",
      name: "TwoWayHEdge",
      startId: "860f7332-e1f1-48ed-bb5f-3d21ac32eeaa",
      endId: "9fe0f910-af6d-4898-98fb-f7fb88ede3f9",
    },
    {
      start: {
        x: 11980,
        y: 2100,
      },
      end: {
        x: 12020,
        y: 2340,
      },
      id: "93cd97b6-11a3-4aba-8fc3-ce65d750c062",
      name: "TwoWayVEdge",
      startId: "fb2f98f0-a085-4799-b2e9-ba8164f2059d",
      endId: "bd29ce94-cef7-48c0-b74c-5c8dd5bb5bb9",
    },
    {
      start: {
        x: 12020,
        y: 2340,
      },
      end: {
        x: 12040,
        y: 2560,
      },
      id: "6f5e3a80-96df-45be-990c-527eb98a7b96",
      name: "TwoWayVEdge",
      startId: "bd29ce94-cef7-48c0-b74c-5c8dd5bb5bb9",
      endId: "31fcefcd-bf96-4eaf-92cd-755696ae64ae",
    },
    {
      start: {
        x: 11640,
        y: 2660,
      },
      end: {
        x: 11640,
        y: 2820,
      },
      id: "9c5738d1-ac8c-42c3-af82-603461350869",
      name: "TwoWayVEdge",
      startId: "9fe0f910-af6d-4898-98fb-f7fb88ede3f9",
      endId: "d6c95449-58b4-47a1-ba79-5e9e27eab6aa",
    },
    {
      start: {
        x: 11640,
        y: 2820,
      },
      end: {
        x: 11880,
        y: 2820,
      },
      id: "7c6b73af-53d6-4b46-a025-279db2569075",
      name: "TwoWayHEdge",
      startId: "d6c95449-58b4-47a1-ba79-5e9e27eab6aa",
      endId: "d5342bd2-8c75-4f66-8c56-ae4e42c5300e",
    },
    {
      start: {
        x: 11880,
        y: 2820,
      },
      end: {
        x: 11880,
        y: 3000,
      },
      id: "51d0a53b-75ee-4e5d-9a3b-8de1cce36c45",
      name: "TwoWayVEdge",
      startId: "d5342bd2-8c75-4f66-8c56-ae4e42c5300e",
      endId: "329ba382-7773-41e4-b48b-5d976fee9c21",
    },
    {
      start: {
        x: 11880,
        y: 3000,
      },
      end: {
        x: 12100,
        y: 3000,
      },
      id: "53b03e8d-c9b6-4df6-91ad-6bf7c552a577",
      name: "TwoWayHEdge",
      startId: "329ba382-7773-41e4-b48b-5d976fee9c21",
      endId: "bb27247b-c1d8-4d31-b36c-00c13260aaab",
    },
    {
      start: {
        x: 12040,
        y: 2560,
      },
      end: {
        x: 12080,
        y: 2780,
      },
      id: "72925a48-67b6-4b0d-bdf9-dc8feefac249",
      name: "TwoWayVEdge",
      startId: "31fcefcd-bf96-4eaf-92cd-755696ae64ae",
      endId: "27e999b9-e5e2-4589-8eaa-d84dd5b3e9c6",
    },
    {
      start: {
        x: 12080,
        y: 2780,
      },
      end: {
        x: 12100,
        y: 3000,
      },
      id: "a93010d9-7686-450f-a1d2-490be221d912",
      name: "TwoWayVEdge",
      startId: "27e999b9-e5e2-4589-8eaa-d84dd5b3e9c6",
      endId: "bb27247b-c1d8-4d31-b36c-00c13260aaab",
    },
    {
      start: {
        x: 11880,
        y: 3000,
      },
      end: {
        x: 11560,
        y: 3000,
      },
      id: "baf617f9-a476-47e2-b754-f8ebada6fb13",
      name: "OneWayHEdge",
      startId: "329ba382-7773-41e4-b48b-5d976fee9c21",
      endId: "6967bbf4-f36d-4f04-8064-b3f57079c503",
    },
    {
      start: {
        x: 11560,
        y: 3000,
      },
      end: {
        x: 11240,
        y: 3000,
      },
      id: "c650f796-7a65-4377-b99f-91fc4e5e20ff",
      name: "OneWayHEdge",
      startId: "6967bbf4-f36d-4f04-8064-b3f57079c503",
      endId: "8d333040-8387-4522-a8f6-bc82643e1541",
    },
    {
      start: {
        x: 11240,
        y: 3000,
      },
      end: {
        x: 11240,
        y: 2660,
      },
      id: "92da1e46-9c04-42b2-84dc-1454e56f8426",
      name: "OneWayVEdge",
      startId: "8d333040-8387-4522-a8f6-bc82643e1541",
      endId: "c7397b07-8971-4e6e-9643-7f3d7c0abf34",
    },
    {
      start: {
        x: 11240,
        y: 3000,
      },
      end: {
        x: 11240,
        y: 3240,
      },
      id: "8c2084ef-444e-4ac2-831f-aaafa18c5864",
      name: "OneWayVEdge",
      startId: "8d333040-8387-4522-a8f6-bc82643e1541",
      endId: "49c2caa3-f755-4514-9093-3eb722c63944",
    },
    {
      start: {
        x: 11880,
        y: 3000,
      },
      end: {
        x: 11880,
        y: 3220,
      },
      id: "6d8f68ea-9d5c-491b-b0a0-06eaccb969b5",
      name: "TwoWayVEdge",
      startId: "329ba382-7773-41e4-b48b-5d976fee9c21",
      endId: "883081f9-e7f7-487f-9fa3-79da0ac19e09",
    },
    {
      start: {
        x: 11880,
        y: 3220,
      },
      end: {
        x: 11660,
        y: 3220,
      },
      id: "a9787ff8-705a-4d1a-aa82-808696cdcf0b",
      name: "TwoWayHEdge",
      startId: "883081f9-e7f7-487f-9fa3-79da0ac19e09",
      endId: "9a32e217-40c8-47c0-95d6-cd30fd75194e",
    },
    {
      start: {
        x: 11660,
        y: 3220,
      },
      end: {
        x: 11660,
        y: 3380,
      },
      id: "f36c4fc5-f483-486f-9a87-07a13649ad95",
      name: "TwoWayVEdge",
      startId: "9a32e217-40c8-47c0-95d6-cd30fd75194e",
      endId: "ce4833e2-9a40-4f33-a9d0-c09c7d3921af",
    },
    {
      start: {
        x: 11660,
        y: 3380,
      },
      end: {
        x: 11460,
        y: 3380,
      },
      id: "d640f0e1-fc8b-449d-ad96-ab76086208bc",
      name: "TwoWayHEdge",
      startId: "ce4833e2-9a40-4f33-a9d0-c09c7d3921af",
      endId: "c945346e-3a53-4de6-bfbd-2ce8871fe55c",
    },
    {
      start: {
        x: 11240,
        y: 3240,
      },
      end: {
        x: 11240,
        y: 3560,
      },
      id: "3026e039-62b5-4a07-995e-e1ae633e9ca3",
      name: "TwoWayVEdge",
      startId: "49c2caa3-f755-4514-9093-3eb722c63944",
      endId: "c99766f0-2592-41d5-b8a5-690b77e8c57a",
    },
    {
      start: {
        x: 11460,
        y: 3380,
      },
      end: {
        x: 11460,
        y: 3560,
      },
      id: "3fe6f8ea-53d8-4935-9c97-c14a7dcf2588",
      name: "TwoWayVEdge",
      startId: "c945346e-3a53-4de6-bfbd-2ce8871fe55c",
      endId: "4404c220-c12e-44f1-babd-f51fa5d8a4f4",
    },
    {
      start: {
        x: 11460,
        y: 3560,
      },
      end: {
        x: 11240,
        y: 3560,
      },
      id: "88c570f2-7d39-4ec7-b4ae-da01bd69d637",
      name: "TwoWayHEdge",
      startId: "4404c220-c12e-44f1-babd-f51fa5d8a4f4",
      endId: "c99766f0-2592-41d5-b8a5-690b77e8c57a",
    },
    {
      start: {
        x: 11240,
        y: 3560,
      },
      end: {
        x: 10940,
        y: 3560,
      },
      id: "a229f54c-75bc-4470-a687-1c818ce2e028",
      name: "TwoWayHEdge",
      startId: "c99766f0-2592-41d5-b8a5-690b77e8c57a",
      endId: "34587932-38aa-43a7-ace9-4aea1b8d50ca",
    },
    {
      start: {
        x: 10480,
        y: 2960,
      },
      end: {
        x: 10480,
        y: 3200,
      },
      id: "4a3fe16f-4efc-4e35-8e6c-b3a57f1b95a5",
      name: "TwoWayVEdge",
      startId: "437c3a1a-48cd-4234-af49-aaa7332e8a5b",
      endId: "14071978-d7a2-4e72-8911-c75165c42c6c",
    },
    {
      start: {
        x: 10480,
        y: 3200,
      },
      end: {
        x: 10700,
        y: 3200,
      },
      id: "7382b234-a7ed-4b91-a7a2-a2903d026ebf",
      name: "TwoWayHEdge",
      startId: "14071978-d7a2-4e72-8911-c75165c42c6c",
      endId: "0363387e-5ecb-44cf-ba28-4bb5b9572393",
    },
    {
      start: {
        x: 10700,
        y: 3200,
      },
      end: {
        x: 10700,
        y: 3560,
      },
      id: "ed66a21e-0a20-46b4-8b73-1b030e636c49",
      name: "TwoWayVEdge",
      startId: "0363387e-5ecb-44cf-ba28-4bb5b9572393",
      endId: "610f3c29-1465-476f-a343-4f7620846744",
    },
    {
      start: {
        x: 10700,
        y: 3560,
      },
      end: {
        x: 10940,
        y: 3560,
      },
      id: "8fe7f623-748d-4a2a-899f-a413f7657c27",
      name: "TwoWayHEdge",
      startId: "610f3c29-1465-476f-a343-4f7620846744",
      endId: "34587932-38aa-43a7-ace9-4aea1b8d50ca",
    },
    {
      start: {
        x: 9500,
        y: 2580,
      },
      end: {
        x: 9220,
        y: 2580,
      },
      id: "2307e7e2-cd49-455a-a693-b4b608646d7f",
      name: "TwoWayHEdge",
      startId: "f2db85a0-d2b7-4dd5-a9a2-4bbd90f18a4a",
      endId: "4d48c3f7-cc13-4175-a72d-66720590c048",
    },
    {
      start: {
        x: 9220,
        y: 2580,
      },
      end: {
        x: 9240,
        y: 2760,
      },
      id: "9750ac20-d1e7-490f-9069-c64f47cb2a6a",
      name: "TwoWayVEdge",
      startId: "4d48c3f7-cc13-4175-a72d-66720590c048",
      endId: "a4527f92-dc01-48ef-8da6-80380490cdee",
    },
    {
      start: {
        x: 9240,
        y: 2760,
      },
      end: {
        x: 9200,
        y: 2960,
      },
      id: "5a31b214-c4a0-4b58-a300-bf931fca09f9",
      name: "TwoWayVEdge",
      startId: "a4527f92-dc01-48ef-8da6-80380490cdee",
      endId: "52c257a7-e952-47a9-b6a1-b53a21755f6e",
    },
    {
      start: {
        x: 9200,
        y: 2960,
      },
      end: {
        x: 9240,
        y: 3160,
      },
      id: "681d1529-1b7f-4b39-906d-dc033fd7714c",
      name: "TwoWayVEdge",
      startId: "52c257a7-e952-47a9-b6a1-b53a21755f6e",
      endId: "0c459e0e-8d69-4356-b381-395c3909a745",
    },
    {
      start: {
        x: 9240,
        y: 3160,
      },
      end: {
        x: 9020,
        y: 3160,
      },
      id: "385b2b9e-27b5-4c82-bc40-13864fae0b43",
      name: "TwoWayHEdge",
      startId: "0c459e0e-8d69-4356-b381-395c3909a745",
      endId: "effcc5ce-0d98-49a0-9a50-e6056fd89ebf",
    },
    {
      start: {
        x: 9020,
        y: 3160,
      },
      end: {
        x: 9020,
        y: 3520,
      },
      id: "437dfb0c-866a-4933-96d3-09ce144fecc6",
      name: "TwoWayVEdge",
      startId: "effcc5ce-0d98-49a0-9a50-e6056fd89ebf",
      endId: "74bda590-a0ed-46ef-8d43-b95b34821e40",
    },
    {
      start: {
        x: 9020,
        y: 3520,
      },
      end: {
        x: 9240,
        y: 3520,
      },
      id: "f011c0e2-8411-4f57-87a1-c1e771fb45ce",
      name: "TwoWayHEdge",
      startId: "74bda590-a0ed-46ef-8d43-b95b34821e40",
      endId: "117b5ce0-3527-4a10-89ae-088ee4583f9e",
    },
    {
      start: {
        x: 9240,
        y: 3520,
      },
      end: {
        x: 9240,
        y: 3340,
      },
      id: "2aca69e8-0d34-4d95-8433-3582654a0d14",
      name: "TwoWayVEdge",
      startId: "117b5ce0-3527-4a10-89ae-088ee4583f9e",
      endId: "6f810394-d7d4-4f5d-b679-9a7076ace911",
    },
    {
      start: {
        x: 9240,
        y: 3340,
      },
      end: {
        x: 9240,
        y: 3160,
      },
      id: "0cb2581e-2ea0-4ae5-b299-5011f0c1e41e",
      name: "TwoWayVEdge",
      startId: "6f810394-d7d4-4f5d-b679-9a7076ace911",
      endId: "0c459e0e-8d69-4356-b381-395c3909a745",
    },
    {
      start: {
        x: 9020,
        y: 3520,
      },
      end: {
        x: 8780,
        y: 3520,
      },
      id: "55d42a0d-1ffa-4e43-9920-fd41f6811d59",
      name: "TwoWayHEdge",
      startId: "74bda590-a0ed-46ef-8d43-b95b34821e40",
      endId: "647d5a1f-19b3-4e5f-ab82-38b78161e8b6",
    },
    {
      start: {
        x: 8780,
        y: 3520,
      },
      end: {
        x: 8560,
        y: 3520,
      },
      id: "b8335a40-92d6-4389-9415-a596fb8ecf97",
      name: "TwoWayHEdge",
      startId: "647d5a1f-19b3-4e5f-ab82-38b78161e8b6",
      endId: "3fecbfbf-101f-420e-b073-ac346874bd8d",
    },
    {
      start: {
        x: 8560,
        y: 3520,
      },
      end: {
        x: 8320,
        y: 3520,
      },
      id: "ef3cdbc5-dd69-4f1e-bd39-703badd09f5b",
      name: "TwoWayHEdge",
      startId: "3fecbfbf-101f-420e-b073-ac346874bd8d",
      endId: "5682655b-7518-4dfb-aaae-eae4abd4a083",
    },
    {
      start: {
        x: 11240,
        y: 3560,
      },
      end: {
        x: 11240,
        y: 3980,
      },
      id: "8b27d224-1e59-4481-b1e1-129b0f42c3f7",
      name: "TwoWayVEdge",
      startId: "c99766f0-2592-41d5-b8a5-690b77e8c57a",
      endId: "e0327ca9-c75d-439d-9ef2-3988149fb9ca",
    },
    {
      start: {
        x: 11240,
        y: 3980,
      },
      end: {
        x: 11520,
        y: 3980,
      },
      id: "2bad3aca-1465-44e1-969c-dd52a8899297",
      name: "TwoWayHEdge",
      startId: "e0327ca9-c75d-439d-9ef2-3988149fb9ca",
      endId: "e8904d6c-a885-40f6-929b-271f88b54f44",
    },
    {
      start: {
        x: 11520,
        y: 3980,
      },
      end: {
        x: 11720,
        y: 3980,
      },
      id: "53ea955d-3a3d-4c1e-95b5-4b10b82bf0a5",
      name: "TwoWayHEdge",
      startId: "e8904d6c-a885-40f6-929b-271f88b54f44",
      endId: "51efae10-b6c7-4ddf-8be1-44ca26eb5805",
    },
    {
      start: {
        x: 11520,
        y: 3980,
      },
      end: {
        x: 11520,
        y: 4160,
      },
      id: "45d9418b-0711-4e9a-a30c-b344db3c0d66",
      name: "TwoWayVEdge",
      startId: "e8904d6c-a885-40f6-929b-271f88b54f44",
      endId: "f0e65da3-3352-406d-9db3-ed80c26925b8",
    },
    {
      start: {
        x: 11520,
        y: 4160,
      },
      end: {
        x: 11520,
        y: 4340,
      },
      id: "5a875e94-539d-41a3-a335-37bbac851cc4",
      name: "TwoWayVEdge",
      startId: "f0e65da3-3352-406d-9db3-ed80c26925b8",
      endId: "021aafd6-d7cb-4337-b95a-5e9f350b82c3",
    },
    {
      start: {
        x: 11520,
        y: 4340,
      },
      end: {
        x: 11720,
        y: 4340,
      },
      id: "caeca09b-b47d-493c-9648-01ef34d0f190",
      name: "TwoWayHEdge",
      startId: "021aafd6-d7cb-4337-b95a-5e9f350b82c3",
      endId: "3842b0d8-1c2e-4698-b86d-55256201c6b6",
    },
    {
      start: {
        x: 11720,
        y: 3980,
      },
      end: {
        x: 11720,
        y: 4340,
      },
      id: "1670dbcf-4935-4e6f-ad4a-53714bbc61a4",
      name: "TwoWayVEdge",
      startId: "51efae10-b6c7-4ddf-8be1-44ca26eb5805",
      endId: "3842b0d8-1c2e-4698-b86d-55256201c6b6",
    },
    {
      start: {
        x: 11520,
        y: 4340,
      },
      end: {
        x: 11240,
        y: 4340,
      },
      id: "180900be-27d8-41b8-b4cd-4cbc4b64f340",
      name: "TwoWayHEdge",
      startId: "021aafd6-d7cb-4337-b95a-5e9f350b82c3",
      endId: "53effe12-91ca-4926-bf35-2e3ae1efe18b",
    },
    {
      start: {
        x: 11240,
        y: 4340,
      },
      end: {
        x: 10840,
        y: 4340,
      },
      id: "3ad6b553-ef16-4d44-bb40-4166ae54d261",
      name: "TwoWayHEdge",
      startId: "53effe12-91ca-4926-bf35-2e3ae1efe18b",
      endId: "8224298a-e89f-4ae3-bff5-5d646d9494a0",
    },
    {
      start: {
        x: 10840,
        y: 4340,
      },
      end: {
        x: 10840,
        y: 4520,
      },
      id: "f82b6f3f-c8bc-418a-8faa-a9b6a8bd14eb",
      name: "TwoWayVEdge",
      startId: "8224298a-e89f-4ae3-bff5-5d646d9494a0",
      endId: "d35e57f3-1698-470d-9cf2-a6c32d06f9d1",
    },
    {
      start: {
        x: 10840,
        y: 4520,
      },
      end: {
        x: 11040,
        y: 4500,
      },
      id: "8b5788fa-6db2-4c2a-aacf-46b919b313b8",
      name: "TwoWayHEdge",
      startId: "d35e57f3-1698-470d-9cf2-a6c32d06f9d1",
      endId: "3332c824-483f-4e8b-b2ca-2ed58ac16694",
    },
    {
      start: {
        x: 11040,
        y: 4500,
      },
      end: {
        x: 11240,
        y: 4520,
      },
      id: "a7a01cdd-4345-4c36-9f11-1c685d861e14",
      name: "TwoWayHEdge",
      startId: "3332c824-483f-4e8b-b2ca-2ed58ac16694",
      endId: "6103c3b2-2a66-4127-9de6-c4977de0180c",
    },
    {
      start: {
        x: 11240,
        y: 4520,
      },
      end: {
        x: 11240,
        y: 4340,
      },
      id: "dbf43287-c5a0-4ccf-a062-0bf9b13dd295",
      name: "TwoWayVEdge",
      startId: "6103c3b2-2a66-4127-9de6-c4977de0180c",
      endId: "53effe12-91ca-4926-bf35-2e3ae1efe18b",
    },
    {
      start: {
        x: 11040,
        y: 4500,
      },
      end: {
        x: 11040,
        y: 4660,
      },
      id: "18ccc355-645a-4b6f-b42d-94b75ccb3626",
      name: "TwoWayVEdge",
      startId: "3332c824-483f-4e8b-b2ca-2ed58ac16694",
      endId: "f7920f23-a83a-4b60-8e0d-5fb06ed6971e",
    },
    {
      start: {
        x: 11040,
        y: 4660,
      },
      end: {
        x: 11040,
        y: 4820,
      },
      id: "48f40798-57f3-40c1-a222-1ed036a448a6",
      name: "TwoWayVEdge",
      startId: "f7920f23-a83a-4b60-8e0d-5fb06ed6971e",
      endId: "21300f3e-bf66-4007-8b97-19b2d27368ff",
    },
    {
      start: {
        x: 11040,
        y: 4820,
      },
      end: {
        x: 11320,
        y: 4820,
      },
      id: "e44e65f5-1c80-4870-87f8-e9a1d71ee1f1",
      name: "TwoWayHEdge",
      startId: "21300f3e-bf66-4007-8b97-19b2d27368ff",
      endId: "8e5a4e93-9ada-4c47-b98f-75a4379e87c9",
    },
    {
      start: {
        x: 11320,
        y: 4820,
      },
      end: {
        x: 11280,
        y: 5000,
      },
      id: "90402844-d474-4cd0-8ee5-a881eef78dd7",
      name: "TwoWayVEdge",
      startId: "8e5a4e93-9ada-4c47-b98f-75a4379e87c9",
      endId: "ae4d726c-95e8-4ed0-a30b-84420b10fa32",
    },
    {
      start: {
        x: 11280,
        y: 5000,
      },
      end: {
        x: 11600,
        y: 5000,
      },
      id: "de1a3f8c-214a-45c9-ae8b-7ec58ad414d8",
      name: "TwoWayHEdge",
      startId: "ae4d726c-95e8-4ed0-a30b-84420b10fa32",
      endId: "324eda46-0b89-44c1-8cbe-9f8a01ceb400",
    },
    {
      start: {
        x: 11600,
        y: 5000,
      },
      end: {
        x: 11640,
        y: 4820,
      },
      id: "d381a709-d143-48b8-b28c-915fc3d336ea",
      name: "TwoWayVEdge",
      startId: "324eda46-0b89-44c1-8cbe-9f8a01ceb400",
      endId: "7622c1ce-8faa-48f8-b36b-f3301e530589",
    },
    {
      start: {
        x: 11640,
        y: 4820,
      },
      end: {
        x: 11920,
        y: 4820,
      },
      id: "c45f6089-b95a-46d0-8309-318f612e7be2",
      name: "TwoWayHEdge",
      startId: "7622c1ce-8faa-48f8-b36b-f3301e530589",
      endId: "bcf60b15-f65a-413a-b3d1-0cbd4385ee7d",
    },
    {
      start: {
        x: 11720,
        y: 4340,
      },
      end: {
        x: 11720,
        y: 4500,
      },
      id: "767bc2ec-b62f-4225-addf-9dd46e355246",
      name: "TwoWayVEdge",
      startId: "3842b0d8-1c2e-4698-b86d-55256201c6b6",
      endId: "21cf69eb-fec9-4343-a497-3050d4c24015",
    },
    {
      start: {
        x: 11720,
        y: 4500,
      },
      end: {
        x: 11920,
        y: 4500,
      },
      id: "dcc233cf-659f-4d86-be61-70acb94fdd58",
      name: "TwoWayHEdge",
      startId: "21cf69eb-fec9-4343-a497-3050d4c24015",
      endId: "99078231-bffc-4bb9-a51e-bda2b175d1f4",
    },
    {
      start: {
        x: 11920,
        y: 4500,
      },
      end: {
        x: 11960,
        y: 4660,
      },
      id: "e99f7100-ce3a-4bff-8b75-ae16180ce000",
      name: "TwoWayVEdge",
      startId: "99078231-bffc-4bb9-a51e-bda2b175d1f4",
      endId: "113a3624-e0cd-4932-a9e8-a4ec1eea3ed9",
    },
    {
      start: {
        x: 11960,
        y: 4660,
      },
      end: {
        x: 11920,
        y: 4820,
      },
      id: "cd63b4c2-ef78-428f-94a5-7a957ee07527",
      name: "TwoWayVEdge",
      startId: "113a3624-e0cd-4932-a9e8-a4ec1eea3ed9",
      endId: "bcf60b15-f65a-413a-b3d1-0cbd4385ee7d",
    },
    {
      start: {
        x: 11960,
        y: 4660,
      },
      end: {
        x: 12160,
        y: 4660,
      },
      id: "896a7f15-8851-4781-8988-a55211999741",
      name: "TwoWayHEdge",
      startId: "113a3624-e0cd-4932-a9e8-a4ec1eea3ed9",
      endId: "b25fbc58-7021-4201-a927-178a8c8b30ed",
    },
    {
      start: {
        x: 12160,
        y: 4660,
      },
      end: {
        x: 12220,
        y: 4500,
      },
      id: "a37c0b5f-49e3-4c65-88b2-04e358248fd3",
      name: "TwoWayVEdge",
      startId: "b25fbc58-7021-4201-a927-178a8c8b30ed",
      endId: "a36ad201-a212-466a-bcbe-3b3bf3e9a100",
    },
    {
      start: {
        x: 11920,
        y: 4820,
      },
      end: {
        x: 11920,
        y: 5000,
      },
      id: "f281b11b-b26a-4dbc-a189-50b0434bd99f",
      name: "TwoWayVEdge",
      startId: "bcf60b15-f65a-413a-b3d1-0cbd4385ee7d",
      endId: "0ac1b13d-1e2b-4cd6-88dc-e1699935a6e3",
    },
    {
      start: {
        x: 11920,
        y: 5000,
      },
      end: {
        x: 12180,
        y: 5000,
      },
      id: "90b5e0e0-5fe9-4b4a-93c4-b59c43bc3f35",
      name: "TwoWayHEdge",
      startId: "0ac1b13d-1e2b-4cd6-88dc-e1699935a6e3",
      endId: "6d0c280a-a843-4181-a3e9-941b09bdf350",
    },
    {
      start: {
        x: 12180,
        y: 5000,
      },
      end: {
        x: 12480,
        y: 5000,
      },
      id: "3978fcd7-6657-4dec-957f-679a4e8770d0",
      name: "TwoWayHEdge",
      startId: "6d0c280a-a843-4181-a3e9-941b09bdf350",
      endId: "80412215-58dc-4eef-8d01-d4943de40d39",
    },
    {
      start: {
        x: 12220,
        y: 4500,
      },
      end: {
        x: 12480,
        y: 4500,
      },
      id: "7b2a9293-ac5e-4ea2-b409-54724b21c264",
      name: "TwoWayHEdge",
      startId: "a36ad201-a212-466a-bcbe-3b3bf3e9a100",
      endId: "d541c219-0737-4d83-adaf-d64966ea59a9",
    },
    {
      start: {
        x: 12480,
        y: 4500,
      },
      end: {
        x: 12740,
        y: 4500,
      },
      id: "4dbed6c3-5c19-4e03-818f-94917aa9d8e6",
      name: "TwoWayHEdge",
      startId: "d541c219-0737-4d83-adaf-d64966ea59a9",
      endId: "44892f89-183a-47a5-8db4-d6ead47d666b",
    },
    {
      start: {
        x: 12740,
        y: 4500,
      },
      end: {
        x: 12800,
        y: 4760,
      },
      id: "22c0ac4a-7520-4d3c-9586-c64978892766",
      name: "TwoWayVEdge",
      startId: "44892f89-183a-47a5-8db4-d6ead47d666b",
      endId: "ccb3c757-dc35-4a89-ace1-3ab17ca1515a",
    },
    {
      start: {
        x: 12800,
        y: 4760,
      },
      end: {
        x: 12760,
        y: 5000,
      },
      id: "6899d13d-86f6-439d-bb5c-435c08b1f71d",
      name: "TwoWayVEdge",
      startId: "ccb3c757-dc35-4a89-ace1-3ab17ca1515a",
      endId: "e5db8eac-d6b1-4113-91c4-c6b42de3427b",
    },
    {
      start: {
        x: 12480,
        y: 5000,
      },
      end: {
        x: 12760,
        y: 5000,
      },
      id: "e3e775e9-5a7d-418a-80b9-53376218f601",
      name: "TwoWayHEdge",
      startId: "80412215-58dc-4eef-8d01-d4943de40d39",
      endId: "e5db8eac-d6b1-4113-91c4-c6b42de3427b",
    },
    {
      start: {
        x: 11280,
        y: 5000,
      },
      end: {
        x: 11280,
        y: 5220,
      },
      id: "ffd4355e-429f-411f-867b-3bf17c209682",
      name: "TwoWayVEdge",
      startId: "ae4d726c-95e8-4ed0-a30b-84420b10fa32",
      endId: "42a0a5eb-cad9-4222-8b31-a207f1094e5c",
    },
    {
      start: {
        x: 11280,
        y: 5220,
      },
      end: {
        x: 11640,
        y: 5240,
      },
      id: "a15ec907-9991-41d4-a50f-2cdb478bd0f2",
      name: "TwoWayHEdge",
      startId: "42a0a5eb-cad9-4222-8b31-a207f1094e5c",
      endId: "865ff1d3-4cdb-4a79-afd0-35f77a99e89a",
    },
    {
      start: {
        x: 11640,
        y: 5240,
      },
      end: {
        x: 11880,
        y: 5240,
      },
      id: "47232de0-54f9-430f-a4fa-2eec5fb1c5d0",
      name: "TwoWayHEdge",
      startId: "865ff1d3-4cdb-4a79-afd0-35f77a99e89a",
      endId: "57162ab6-3163-4f03-9c4d-cc678e830154",
    },
    {
      start: {
        x: 11880,
        y: 5240,
      },
      end: {
        x: 11880,
        y: 5420,
      },
      id: "75cc2454-5db5-4f96-91a9-65557be07f79",
      name: "TwoWayVEdge",
      startId: "57162ab6-3163-4f03-9c4d-cc678e830154",
      endId: "37143f8c-d0ea-41e7-a17a-9ea636f143d9",
    },
    {
      start: {
        x: 11880,
        y: 5420,
      },
      end: {
        x: 12120,
        y: 5420,
      },
      id: "7893474a-f2be-4487-b3ff-6ec78ddafab6",
      name: "TwoWayHEdge",
      startId: "37143f8c-d0ea-41e7-a17a-9ea636f143d9",
      endId: "cf4459c4-44a8-4f24-abe6-e906cbee8db7",
    },
    {
      start: {
        x: 12480,
        y: 5000,
      },
      end: {
        x: 12480,
        y: 5200,
      },
      id: "30ec7563-21db-42d9-bfe9-ca02fdea9858",
      name: "TwoWayVEdge",
      startId: "80412215-58dc-4eef-8d01-d4943de40d39",
      endId: "b889ec4d-b91e-4c3a-9827-878a3ab5d9af",
    },
    {
      start: {
        x: 12120,
        y: 5420,
      },
      end: {
        x: 12300,
        y: 5420,
      },
      id: "dd1a9023-bcdc-4667-b659-f4adbcb7a6b6",
      name: "TwoWayHEdge",
      startId: "cf4459c4-44a8-4f24-abe6-e906cbee8db7",
      endId: "7f151f03-9c95-4cf4-9e3d-1454a59ea28a",
    },
    {
      start: {
        x: 12300,
        y: 5420,
      },
      end: {
        x: 12480,
        y: 5420,
      },
      id: "f3a3d526-5b19-47b6-ada0-73848cf2a64a",
      name: "TwoWayHEdge",
      startId: "7f151f03-9c95-4cf4-9e3d-1454a59ea28a",
      endId: "5e6ffbe4-f16b-47d4-8c8e-e1120d52c783",
    },
    {
      start: {
        x: 12480,
        y: 5420,
      },
      end: {
        x: 12480,
        y: 5200,
      },
      id: "695b7cb4-5688-4812-a3c4-0fc571886d5a",
      name: "TwoWayVEdge",
      startId: "5e6ffbe4-f16b-47d4-8c8e-e1120d52c783",
      endId: "b889ec4d-b91e-4c3a-9827-878a3ab5d9af",
    },
    {
      start: {
        x: 12480,
        y: 5420,
      },
      end: {
        x: 12480,
        y: 5600,
      },
      id: "7efb7b49-3816-4139-85dd-bee44e9809d5",
      name: "TwoWayVEdge",
      startId: "5e6ffbe4-f16b-47d4-8c8e-e1120d52c783",
      endId: "87827f0e-02d1-47e4-a158-cfc70b7c6770",
    },
    {
      start: {
        x: 12480,
        y: 5600,
      },
      end: {
        x: 12120,
        y: 5600,
      },
      id: "5439e63e-f633-49bb-a6b0-b88eeca3d07c",
      name: "TwoWayHEdge",
      startId: "87827f0e-02d1-47e4-a158-cfc70b7c6770",
      endId: "4e276e92-cc5a-46d3-889d-ae529207d833",
    },
    {
      start: {
        x: 12120,
        y: 5420,
      },
      end: {
        x: 12120,
        y: 5600,
      },
      id: "31e21edd-2282-4733-8d65-c80076cf9629",
      name: "TwoWayVEdge",
      startId: "cf4459c4-44a8-4f24-abe6-e906cbee8db7",
      endId: "4e276e92-cc5a-46d3-889d-ae529207d833",
    },
    {
      start: {
        x: 11880,
        y: 5420,
      },
      end: {
        x: 11880,
        y: 5780,
      },
      id: "f74a1312-567a-4558-8e4b-e66bde72a9e4",
      name: "TwoWayVEdge",
      startId: "37143f8c-d0ea-41e7-a17a-9ea636f143d9",
      endId: "8c214dd0-9f01-4068-85ec-a5c982e21683",
    },
    {
      start: {
        x: 12120,
        y: 5600,
      },
      end: {
        x: 12120,
        y: 5780,
      },
      id: "a2ffba73-6ef9-4bee-a45a-55ce0efc5df2",
      name: "TwoWayVEdge",
      startId: "4e276e92-cc5a-46d3-889d-ae529207d833",
      endId: "fd0bd91e-a81b-4c40-be7c-0d5513b5de3f",
    },
    {
      start: {
        x: 11880,
        y: 5780,
      },
      end: {
        x: 12120,
        y: 5780,
      },
      id: "011fceb1-4e23-4f78-a4dc-fce710f41c27",
      name: "TwoWayHEdge",
      startId: "8c214dd0-9f01-4068-85ec-a5c982e21683",
      endId: "fd0bd91e-a81b-4c40-be7c-0d5513b5de3f",
    },
    {
      start: {
        x: 11880,
        y: 5780,
      },
      end: {
        x: 11640,
        y: 5780,
      },
      id: "4db1ac2e-7117-403f-8e71-bc4fb5ba800d",
      name: "TwoWayHEdge",
      startId: "8c214dd0-9f01-4068-85ec-a5c982e21683",
      endId: "dced410a-d2c2-4b42-a78e-063a6913d7f1",
    },
    {
      start: {
        x: 11880,
        y: 5780,
      },
      end: {
        x: 11880,
        y: 5960,
      },
      id: "b56a6576-e346-4ad5-b270-5fa76e10b903",
      name: "TwoWayVEdge",
      startId: "8c214dd0-9f01-4068-85ec-a5c982e21683",
      endId: "0365689d-554b-41f8-8e19-c489e7cd9391",
    },
    {
      start: {
        x: 11880,
        y: 5960,
      },
      end: {
        x: 11640,
        y: 5960,
      },
      id: "c6c7561a-85e6-4bc8-82d6-0b794f50d1a1",
      name: "TwoWayHEdge",
      startId: "0365689d-554b-41f8-8e19-c489e7cd9391",
      endId: "ebbe8686-e001-4891-903f-e961538fc635",
    },
    {
      start: {
        x: 11880,
        y: 5960,
      },
      end: {
        x: 11880,
        y: 6160,
      },
      id: "ca223ae3-253b-40f3-8d9c-15c0891600ef",
      name: "TwoWayVEdge",
      startId: "0365689d-554b-41f8-8e19-c489e7cd9391",
      endId: "6102fc9c-3597-4c5b-9002-da6735804242",
    },
    {
      start: {
        x: 11880,
        y: 6160,
      },
      end: {
        x: 11640,
        y: 6160,
      },
      id: "7683051d-1483-482d-bf02-e76ae02c50c2",
      name: "TwoWayHEdge",
      startId: "6102fc9c-3597-4c5b-9002-da6735804242",
      endId: "fa60d089-19e5-4457-9236-15efa0c0a6a1",
    },
    {
      start: {
        x: 11880,
        y: 6160,
      },
      end: {
        x: 11880,
        y: 6340,
      },
      id: "f2143ee0-385f-4434-816a-00e7b4d9735b",
      name: "TwoWayVEdge",
      startId: "6102fc9c-3597-4c5b-9002-da6735804242",
      endId: "77b641a5-8582-422e-b5ce-37a4bf8a824d",
    },
    {
      start: {
        x: 11880,
        y: 6340,
      },
      end: {
        x: 11880,
        y: 6520,
      },
      id: "b03ca105-658f-4ad2-8567-331971a12736",
      name: "TwoWayVEdge",
      startId: "77b641a5-8582-422e-b5ce-37a4bf8a824d",
      endId: "d383a5cf-e41d-4e27-85b8-dc1276c54e6f",
    },
    {
      start: {
        x: 11640,
        y: 5960,
      },
      end: {
        x: 11400,
        y: 5960,
      },
      id: "7bd13200-57b9-48f1-88ae-8a534cdc7e18",
      name: "TwoWayHEdge",
      startId: "ebbe8686-e001-4891-903f-e961538fc635",
      endId: "fba740dd-5a02-484e-8a72-2a7a0abbdc3c",
    },
    {
      start: {
        x: 11400,
        y: 5960,
      },
      end: {
        x: 11400,
        y: 6240,
      },
      id: "8aa07261-ec99-44d5-b070-30829ed0dd4b",
      name: "TwoWayVEdge",
      startId: "fba740dd-5a02-484e-8a72-2a7a0abbdc3c",
      endId: "cdb588f3-7713-4385-93b9-7bd683011c25",
    },
    {
      start: {
        x: 11400,
        y: 6240,
      },
      end: {
        x: 11400,
        y: 6520,
      },
      id: "83c40971-bd11-4967-9209-30f5ebb2ae51",
      name: "TwoWayVEdge",
      startId: "cdb588f3-7713-4385-93b9-7bd683011c25",
      endId: "5988860f-565c-4f08-9889-b0bb93c18639",
    },
    {
      start: {
        x: 11400,
        y: 6520,
      },
      end: {
        x: 11880,
        y: 6520,
      },
      id: "6bc200b9-31bb-4c30-906e-082fe71899df",
      name: "TwoWayHEdge",
      startId: "5988860f-565c-4f08-9889-b0bb93c18639",
      endId: "d383a5cf-e41d-4e27-85b8-dc1276c54e6f",
    },
    {
      start: {
        x: 11400,
        y: 5960,
      },
      end: {
        x: 11180,
        y: 5960,
      },
      id: "a1c8683a-b8a3-4e70-a81c-13c7b62a7077",
      name: "TwoWayHEdge",
      startId: "fba740dd-5a02-484e-8a72-2a7a0abbdc3c",
      endId: "48ec3a26-88d0-4fd3-bb67-918cde855510",
    },
    {
      start: {
        x: 11180,
        y: 5960,
      },
      end: {
        x: 11180,
        y: 6140,
      },
      id: "3df74d26-f512-48dc-8eaf-f6f54a535a14",
      name: "TwoWayVEdge",
      startId: "48ec3a26-88d0-4fd3-bb67-918cde855510",
      endId: "1db72cc7-71c5-433d-9b50-ab20be04f5e5",
    },
    {
      start: {
        x: 11180,
        y: 6140,
      },
      end: {
        x: 11180,
        y: 6340,
      },
      id: "503c9baa-b185-4d32-b109-c0eafd697773",
      name: "TwoWayVEdge",
      startId: "1db72cc7-71c5-433d-9b50-ab20be04f5e5",
      endId: "437773df-8f38-4312-b28a-f5b94382f265",
    },
    {
      start: {
        x: 11180,
        y: 6340,
      },
      end: {
        x: 11180,
        y: 6520,
      },
      id: "09890f2d-df42-480b-b8da-419f0a2af599",
      name: "TwoWayVEdge",
      startId: "437773df-8f38-4312-b28a-f5b94382f265",
      endId: "22ebaa03-4244-49ad-8f19-617fbebe92d4",
    },
    {
      start: {
        x: 11180,
        y: 6520,
      },
      end: {
        x: 11400,
        y: 6520,
      },
      id: "f203326b-2351-4664-8edb-bf03fc5411d6",
      name: "TwoWayHEdge",
      startId: "22ebaa03-4244-49ad-8f19-617fbebe92d4",
      endId: "5988860f-565c-4f08-9889-b0bb93c18639",
    },
    {
      start: {
        x: 11400,
        y: 5960,
      },
      end: {
        x: 11400,
        y: 5780,
      },
      id: "beb232e3-7621-4e5c-b1b2-c233f6824a53",
      name: "TwoWayVEdge",
      startId: "fba740dd-5a02-484e-8a72-2a7a0abbdc3c",
      endId: "87fb06be-5d03-4a20-983f-0da4e21a4471",
    },
    {
      start: {
        x: 11400,
        y: 5780,
      },
      end: {
        x: 11400,
        y: 5560,
      },
      id: "83e4df11-f343-49ea-98b4-5c2e10c7607c",
      name: "TwoWayVEdge",
      startId: "87fb06be-5d03-4a20-983f-0da4e21a4471",
      endId: "23e75a46-1f1f-4203-b216-32d033f6950f",
    },
    {
      start: {
        x: 11400,
        y: 5560,
      },
      end: {
        x: 11180,
        y: 5560,
      },
      id: "40858da6-ab78-4548-93b5-19773b084278",
      name: "TwoWayHEdge",
      startId: "23e75a46-1f1f-4203-b216-32d033f6950f",
      endId: "5dcfcd78-2ed2-4732-97c7-8c006cd01339",
    },
    {
      start: {
        x: 11180,
        y: 5560,
      },
      end: {
        x: 11180,
        y: 5340,
      },
      id: "a9af3d12-795f-491e-a1f9-c1239cc66626",
      name: "TwoWayVEdge",
      startId: "5dcfcd78-2ed2-4732-97c7-8c006cd01339",
      endId: "6392f833-ee05-439e-864e-ecdcf1098c3a",
    },
    {
      start: {
        x: 10840,
        y: 4340,
      },
      end: {
        x: 10540,
        y: 4340,
      },
      id: "badaef94-af53-4a9c-9608-37db4334671e",
      name: "TwoWayHEdge",
      startId: "8224298a-e89f-4ae3-bff5-5d646d9494a0",
      endId: "8f8027d2-046a-4369-8329-0d2c43300aab",
    },
    {
      start: {
        x: 10540,
        y: 4340,
      },
      end: {
        x: 10540,
        y: 4160,
      },
      id: "d3e10e2d-da5c-432c-8efe-de8ae55061aa",
      name: "TwoWayVEdge",
      startId: "8f8027d2-046a-4369-8329-0d2c43300aab",
      endId: "67be83ed-2f2b-4bf9-8287-1ca00d6c4d8b",
    },
    {
      start: {
        x: 10540,
        y: 4160,
      },
      end: {
        x: 10540,
        y: 3980,
      },
      id: "47daea56-84d2-474a-bf69-9b0d7cc8190f",
      name: "TwoWayVEdge",
      startId: "67be83ed-2f2b-4bf9-8287-1ca00d6c4d8b",
      endId: "d9e1f9df-7d5e-47e2-8206-6447e62f3278",
    },
    {
      start: {
        x: 10540,
        y: 4340,
      },
      end: {
        x: 10340,
        y: 4340,
      },
      id: "f5c0cecf-cc6a-4fb9-bda9-f0616f11e893",
      name: "TwoWayHEdge",
      startId: "8f8027d2-046a-4369-8329-0d2c43300aab",
      endId: "05d4bde7-9387-499c-9a2d-18a74003930d",
    },
    {
      start: {
        x: 10340,
        y: 4340,
      },
      end: {
        x: 10140,
        y: 4340,
      },
      id: "4567dd77-a901-4193-9481-ff260898f1ba",
      name: "TwoWayHEdge",
      startId: "05d4bde7-9387-499c-9a2d-18a74003930d",
      endId: "fa438c24-0219-4021-bcb7-05b65804acdc",
    },
    {
      start: {
        x: 10140,
        y: 4340,
      },
      end: {
        x: 10140,
        y: 4160,
      },
      id: "d97f4989-4bfb-4a48-a91e-8aef89185a5a",
      name: "TwoWayVEdge",
      startId: "fa438c24-0219-4021-bcb7-05b65804acdc",
      endId: "2f3412d6-5927-4552-8e58-ab49350b1d78",
    },
    {
      start: {
        x: 10140,
        y: 4160,
      },
      end: {
        x: 10140,
        y: 3980,
      },
      id: "e63128e5-abf6-4a52-80b5-66b9f4b893e8",
      name: "TwoWayVEdge",
      startId: "2f3412d6-5927-4552-8e58-ab49350b1d78",
      endId: "6b67b916-bbe1-4c25-8f58-b025aef5f643",
    },
    {
      start: {
        x: 10140,
        y: 3980,
      },
      end: {
        x: 10140,
        y: 3780,
      },
      id: "418b6741-d721-4b4f-81e2-8db0a44f09b1",
      name: "TwoWayVEdge",
      startId: "6b67b916-bbe1-4c25-8f58-b025aef5f643",
      endId: "8df06c1f-3879-4a73-a282-fc4cce068ea9",
    },
    {
      start: {
        x: 10140,
        y: 3780,
      },
      end: {
        x: 10340,
        y: 3780,
      },
      id: "3c74207f-4165-4ec6-aef2-ecb117501696",
      name: "TwoWayHEdge",
      startId: "8df06c1f-3879-4a73-a282-fc4cce068ea9",
      endId: "f59b7f29-a829-4fea-9471-a7420953a7e9",
    },
    {
      start: {
        x: 10840,
        y: 4520,
      },
      end: {
        x: 10840,
        y: 4700,
      },
      id: "98e36b62-0686-4250-a7b6-c2bfeda0db5d",
      name: "TwoWayVEdge",
      startId: "d35e57f3-1698-470d-9cf2-a6c32d06f9d1",
      endId: "46f55746-01f0-47f6-91e3-c6e1994a15dc",
    },
    {
      start: {
        x: 10840,
        y: 4700,
      },
      end: {
        x: 10540,
        y: 4640,
      },
      id: "69ec8bde-10d4-4d69-a558-c7606c391cf0",
      name: "TwoWayHEdge",
      startId: "46f55746-01f0-47f6-91e3-c6e1994a15dc",
      endId: "b90c3006-b909-4faf-aea1-8f02438482d0",
    },
    {
      start: {
        x: 10540,
        y: 4640,
      },
      end: {
        x: 10540,
        y: 4820,
      },
      id: "2cc5f168-56b9-46b7-891b-023095495fef",
      name: "TwoWayVEdge",
      startId: "b90c3006-b909-4faf-aea1-8f02438482d0",
      endId: "d6574605-b9d1-4f26-8f08-1fbbdabc5a02",
    },
    {
      start: {
        x: 10540,
        y: 4820,
      },
      end: {
        x: 10200,
        y: 4840,
      },
      id: "d024b232-6d51-4a54-a3ba-2f46350e5f4d",
      name: "TwoWayHEdge",
      startId: "d6574605-b9d1-4f26-8f08-1fbbdabc5a02",
      endId: "8ea776cb-d993-4643-8a7c-b043b7c375c9",
    },
    {
      start: {
        x: 10200,
        y: 4840,
      },
      end: {
        x: 10200,
        y: 4660,
      },
      id: "ccd45b58-be25-495e-8e27-6d443acffe47",
      name: "TwoWayVEdge",
      startId: "8ea776cb-d993-4643-8a7c-b043b7c375c9",
      endId: "f538dcf3-c139-4a00-9414-4be09d505bff",
    },
    {
      start: {
        x: 10200,
        y: 4660,
      },
      end: {
        x: 10000,
        y: 4660,
      },
      id: "a0004244-7a21-4174-9529-4ec1e8bbd18b",
      name: "TwoWayHEdge",
      startId: "f538dcf3-c139-4a00-9414-4be09d505bff",
      endId: "09116ed1-719d-4bc4-b1d2-d526be63b174",
    },
    {
      start: {
        x: 10000,
        y: 4660,
      },
      end: {
        x: 10000,
        y: 5000,
      },
      id: "f95a401c-946d-4d74-90b4-70633b78db98",
      name: "TwoWayVEdge",
      startId: "09116ed1-719d-4bc4-b1d2-d526be63b174",
      endId: "7815962e-40bf-4486-9193-e7c0ac3824b3",
    },
    {
      start: {
        x: 10000,
        y: 5000,
      },
      end: {
        x: 10200,
        y: 5000,
      },
      id: "d7a24eed-1d39-43ca-a739-1b89d7cd8767",
      name: "TwoWayHEdge",
      startId: "7815962e-40bf-4486-9193-e7c0ac3824b3",
      endId: "492ee90d-9e0a-492f-94c1-5a8a0fc6a25b",
    },
    {
      start: {
        x: 10200,
        y: 5000,
      },
      end: {
        x: 10200,
        y: 4840,
      },
      id: "6cf0715d-ca02-449d-86d8-59d84724d1c4",
      name: "TwoWayVEdge",
      startId: "492ee90d-9e0a-492f-94c1-5a8a0fc6a25b",
      endId: "8ea776cb-d993-4643-8a7c-b043b7c375c9",
    },
    {
      start: {
        x: 10200,
        y: 5000,
      },
      end: {
        x: 10680,
        y: 5000,
      },
      id: "4b462495-9d53-44e7-a85c-6bd5d8cf0de7",
      name: "TwoWayHEdge",
      startId: "492ee90d-9e0a-492f-94c1-5a8a0fc6a25b",
      endId: "45922761-940e-4761-86df-b732f30aa031",
    },
    {
      start: {
        x: 10680,
        y: 5000,
      },
      end: {
        x: 10700,
        y: 4820,
      },
      id: "c8bdaabd-d27d-48f2-9a47-e23a4a35d770",
      name: "TwoWayVEdge",
      startId: "45922761-940e-4761-86df-b732f30aa031",
      endId: "27fa5b41-e23f-4eb0-83ed-6d793e48bf4d",
    },
    {
      start: {
        x: 10000,
        y: 4660,
      },
      end: {
        x: 10000,
        y: 4340,
      },
      id: "38dc0cfb-bfbb-4aac-80d0-fcfdbba95775",
      name: "TwoWayVEdge",
      startId: "09116ed1-719d-4bc4-b1d2-d526be63b174",
      endId: "f1ad04d3-a2d4-4d28-abaf-010c7473ea94",
    },
    {
      start: {
        x: 10000,
        y: 4660,
      },
      end: {
        x: 9780,
        y: 4660,
      },
      id: "8e66b48d-7d2d-4d6c-afb4-362ba204ea2c",
      name: "TwoWayHEdge",
      startId: "09116ed1-719d-4bc4-b1d2-d526be63b174",
      endId: "9eb7954a-9aaa-4def-b093-164f2114fc5c",
    },
    {
      start: {
        x: 9780,
        y: 4660,
      },
      end: {
        x: 9780,
        y: 4500,
      },
      id: "6737f94c-4f85-4215-9346-6bc0f0e3b3b0",
      name: "TwoWayVEdge",
      startId: "9eb7954a-9aaa-4def-b093-164f2114fc5c",
      endId: "78fb2022-3cfc-4fa6-a255-c98a167a4b08",
    },
    {
      start: {
        x: 9780,
        y: 4500,
      },
      end: {
        x: 9780,
        y: 4340,
      },
      id: "c8b47408-a114-4d14-9f31-d35dc616937d",
      name: "TwoWayVEdge",
      startId: "78fb2022-3cfc-4fa6-a255-c98a167a4b08",
      endId: "81e0d087-484c-4681-8c07-bca29caa4180",
    },
    {
      start: {
        x: 9780,
        y: 4340,
      },
      end: {
        x: 10000,
        y: 4340,
      },
      id: "4adf654e-2952-42af-8f22-d8d93d42346e",
      name: "TwoWayHEdge",
      startId: "81e0d087-484c-4681-8c07-bca29caa4180",
      endId: "f1ad04d3-a2d4-4d28-abaf-010c7473ea94",
    },
    {
      start: {
        x: 9780,
        y: 4340,
      },
      end: {
        x: 9780,
        y: 4160,
      },
      id: "20eda4ff-4d2f-4749-b7b0-723a263a6fad",
      name: "TwoWayVEdge",
      startId: "81e0d087-484c-4681-8c07-bca29caa4180",
      endId: "891c3b56-8d54-4ed8-bcbd-17b7340166b6",
    },
    {
      start: {
        x: 9780,
        y: 4160,
      },
      end: {
        x: 10140,
        y: 4160,
      },
      id: "0d607893-ebbc-4b86-a89d-53f68859fee7",
      name: "OneWayHEdge",
      startId: "891c3b56-8d54-4ed8-bcbd-17b7340166b6",
      endId: "2f3412d6-5927-4552-8e58-ab49350b1d78",
    },
    {
      start: {
        x: 9780,
        y: 4160,
      },
      end: {
        x: 9840,
        y: 3820,
      },
      id: "c26d3ebb-e9e5-4498-b792-8fef83def95d",
      name: "TwoWayVEdge",
      startId: "891c3b56-8d54-4ed8-bcbd-17b7340166b6",
      endId: "5f879ba0-f012-4a70-b304-6713f64df54b",
    },
    {
      start: {
        x: 9840,
        y: 3820,
      },
      end: {
        x: 9800,
        y: 3520,
      },
      id: "8b2e3b5c-279a-465f-a975-c64609b73e18",
      name: "TwoWayVEdge",
      startId: "5f879ba0-f012-4a70-b304-6713f64df54b",
      endId: "7dd1aa1b-988b-4a85-aa8c-c26a6922a2d4",
    },
    {
      start: {
        x: 10200,
        y: 5000,
      },
      end: {
        x: 10200,
        y: 5220,
      },
      id: "2298cdff-461c-4c25-bcc6-239cfb50fc87",
      name: "TwoWayVEdge",
      startId: "492ee90d-9e0a-492f-94c1-5a8a0fc6a25b",
      endId: "5d476db5-d58b-4836-8818-3f0c48aee6ca",
    },
    {
      start: {
        x: 10000,
        y: 5000,
      },
      end: {
        x: 10000,
        y: 5220,
      },
      id: "39625694-2a4d-488f-9ee0-d2b757ab56aa",
      name: "TwoWayVEdge",
      startId: "7815962e-40bf-4486-9193-e7c0ac3824b3",
      endId: "a28dcef8-291a-4c61-b85a-021793a0f929",
    },
    {
      start: {
        x: 10000,
        y: 5220,
      },
      end: {
        x: 10000,
        y: 5420,
      },
      id: "1b9765b0-29ce-4fd6-a51a-a7c092043ffc",
      name: "TwoWayVEdge",
      startId: "a28dcef8-291a-4c61-b85a-021793a0f929",
      endId: "3c50a314-5c47-411c-90a7-4be5bc0ec91d",
    },
    {
      start: {
        x: 10000,
        y: 5420,
      },
      end: {
        x: 10200,
        y: 5420,
      },
      id: "becbf9b3-3ef1-4207-a9fe-0fa9a3668eef",
      name: "TwoWayHEdge",
      startId: "3c50a314-5c47-411c-90a7-4be5bc0ec91d",
      endId: "0a99bbbf-8948-4f28-bd4d-782bdfe9d3bf",
    },
    {
      start: {
        x: 10000,
        y: 5420,
      },
      end: {
        x: 10000,
        y: 5840,
      },
      id: "302c3b5e-34bb-4d68-bfe1-a45ecaff89b2",
      name: "TwoWayVEdge",
      startId: "3c50a314-5c47-411c-90a7-4be5bc0ec91d",
      endId: "d116d717-b679-40b7-9899-3a37d3ae0d00",
    },
    {
      start: {
        x: 10000,
        y: 5840,
      },
      end: {
        x: 10220,
        y: 5840,
      },
      id: "5a1d02da-66b0-461c-85c1-360ad204ceb7",
      name: "TwoWayHEdge",
      startId: "d116d717-b679-40b7-9899-3a37d3ae0d00",
      endId: "1a5155a1-8dcb-478e-bf0f-ca7e91fa433d",
    },
    {
      start: {
        x: 10200,
        y: 5420,
      },
      end: {
        x: 10260,
        y: 5620,
      },
      id: "f08354bd-111a-4030-8dea-b6c180373be5",
      name: "TwoWayVEdge",
      startId: "0a99bbbf-8948-4f28-bd4d-782bdfe9d3bf",
      endId: "0c33406b-e0e0-47be-97aa-8307343d9f1b",
    },
    {
      start: {
        x: 10260,
        y: 5620,
      },
      end: {
        x: 10220,
        y: 5840,
      },
      id: "07dd1f54-d2a5-4a05-b1dc-e998fccd982d",
      name: "TwoWayVEdge",
      startId: "0c33406b-e0e0-47be-97aa-8307343d9f1b",
      endId: "1a5155a1-8dcb-478e-bf0f-ca7e91fa433d",
    },
    {
      start: {
        x: 10260,
        y: 5620,
      },
      end: {
        x: 10560,
        y: 5620,
      },
      id: "c03daf06-ff3d-4297-b5cf-6cf224269e83",
      name: "TwoWayHEdge",
      startId: "0c33406b-e0e0-47be-97aa-8307343d9f1b",
      endId: "a26d0b5e-7477-43f7-820a-419d3ed629df",
    },
    {
      start: {
        x: 10560,
        y: 5620,
      },
      end: {
        x: 10560,
        y: 5880,
      },
      id: "f262d7b3-7567-4ca6-8f8c-59bf2926530b",
      name: "TwoWayVEdge",
      startId: "a26d0b5e-7477-43f7-820a-419d3ed629df",
      endId: "9ed7e992-1203-484c-b061-111db3160578",
    },
    {
      start: {
        x: 10560,
        y: 5880,
      },
      end: {
        x: 10860,
        y: 5880,
      },
      id: "883b6287-0a70-424b-8420-19b794fbee18",
      name: "TwoWayHEdge",
      startId: "9ed7e992-1203-484c-b061-111db3160578",
      endId: "8cf16e49-4f51-4180-acb7-518326133bb1",
    },
    {
      start: {
        x: 10560,
        y: 5880,
      },
      end: {
        x: 10560,
        y: 6160,
      },
      id: "a5df31b8-bc73-42d9-9bbb-a56cd004f931",
      name: "TwoWayVEdge",
      startId: "9ed7e992-1203-484c-b061-111db3160578",
      endId: "8f00ae99-e3e1-4d21-a60d-22fd4e6ec5e9",
    },
    {
      start: {
        x: 10560,
        y: 6160,
      },
      end: {
        x: 10340,
        y: 6160,
      },
      id: "b5d352da-8edd-4162-85c2-32ab5dddce89",
      name: "TwoWayHEdge",
      startId: "8f00ae99-e3e1-4d21-a60d-22fd4e6ec5e9",
      endId: "7148f97e-4f53-4e9b-96ef-b3ca7aaaa4e8",
    },
    {
      start: {
        x: 10340,
        y: 6160,
      },
      end: {
        x: 10120,
        y: 6160,
      },
      id: "21e91a1e-11f1-4ca9-83e8-b3e403be41b6",
      name: "TwoWayHEdge",
      startId: "7148f97e-4f53-4e9b-96ef-b3ca7aaaa4e8",
      endId: "67010eeb-a6f3-4e17-be9e-a614ca893cc3",
    },
    {
      start: {
        x: 10120,
        y: 6160,
      },
      end: {
        x: 9840,
        y: 6160,
      },
      id: "204afc43-4184-425a-a95f-5192a63ac53e",
      name: "TwoWayHEdge",
      startId: "67010eeb-a6f3-4e17-be9e-a614ca893cc3",
      endId: "f873e57c-66a5-48fd-8974-9b6116c1178b",
    },
    {
      start: {
        x: 9840,
        y: 6160,
      },
      end: {
        x: 9620,
        y: 6160,
      },
      id: "c224a74f-c400-4109-9fd2-13e6d9722b72",
      name: "TwoWayHEdge",
      startId: "f873e57c-66a5-48fd-8974-9b6116c1178b",
      endId: "bdce1b2f-6687-421e-9f15-9ad96a82eb39",
    },
    {
      start: {
        x: 9620,
        y: 6160,
      },
      end: {
        x: 9400,
        y: 6160,
      },
      id: "fa6fb4d9-d5d1-4584-ab8b-5b0c2bc2a2c7",
      name: "TwoWayHEdge",
      startId: "bdce1b2f-6687-421e-9f15-9ad96a82eb39",
      endId: "2577337d-9910-4abf-8ca8-b74c214f98d9",
    },
    {
      start: {
        x: 10120,
        y: 6160,
      },
      end: {
        x: 10120,
        y: 6380,
      },
      id: "97e4eb16-63b3-4f5f-b479-01461050cde2",
      name: "TwoWayVEdge",
      startId: "67010eeb-a6f3-4e17-be9e-a614ca893cc3",
      endId: "fda566ee-ed3f-4b76-ab19-3a7ee7a68162",
    },
    {
      start: {
        x: 10120,
        y: 6380,
      },
      end: {
        x: 10560,
        y: 6380,
      },
      id: "e5ad92cf-15c6-48c5-aaa6-61590b4ccf3a",
      name: "TwoWayHEdge",
      startId: "fda566ee-ed3f-4b76-ab19-3a7ee7a68162",
      endId: "cc1d81ad-c4ca-47aa-a90b-6dfa79fdf103",
    },
    {
      start: {
        x: 10560,
        y: 6380,
      },
      end: {
        x: 10560,
        y: 6160,
      },
      id: "8e147ae5-a800-4f7b-92ce-8b7281ee781b",
      name: "TwoWayVEdge",
      startId: "cc1d81ad-c4ca-47aa-a90b-6dfa79fdf103",
      endId: "8f00ae99-e3e1-4d21-a60d-22fd4e6ec5e9",
    },
    {
      start: {
        x: 11180,
        y: 6520,
      },
      end: {
        x: 11180,
        y: 6700,
      },
      id: "933bcda3-2ce7-4a48-b191-ec7bb879bcd8",
      name: "TwoWayVEdge",
      startId: "22ebaa03-4244-49ad-8f19-617fbebe92d4",
      endId: "59fcc765-08f5-4848-9fc4-ee465595ec26",
    },
    {
      start: {
        x: 11180,
        y: 6700,
      },
      end: {
        x: 11180,
        y: 6880,
      },
      id: "c5b002bc-2028-425b-b50d-ebae630a1bb4",
      name: "TwoWayVEdge",
      startId: "59fcc765-08f5-4848-9fc4-ee465595ec26",
      endId: "68b8a2c6-9498-4b48-b3d0-875713139458",
    },
    {
      start: {
        x: 11180,
        y: 6880,
      },
      end: {
        x: 11400,
        y: 6880,
      },
      id: "24dd1352-6cf1-4343-a0a9-5d10d8292910",
      name: "TwoWayHEdge",
      startId: "68b8a2c6-9498-4b48-b3d0-875713139458",
      endId: "cf0fbcaf-d062-4340-b047-05666c68430e",
    },
    {
      start: {
        x: 11180,
        y: 6880,
      },
      end: {
        x: 11180,
        y: 7040,
      },
      id: "445b20d4-0ffd-4860-ad9a-2ae132953052",
      name: "TwoWayVEdge",
      startId: "68b8a2c6-9498-4b48-b3d0-875713139458",
      endId: "f3098aed-ef25-4478-8875-3ebb95ecc4cf",
    },
    {
      start: {
        x: 11180,
        y: 7040,
      },
      end: {
        x: 11180,
        y: 7200,
      },
      id: "71676431-82b9-4209-9944-5b5f798cfd78",
      name: "TwoWayVEdge",
      startId: "f3098aed-ef25-4478-8875-3ebb95ecc4cf",
      endId: "dcab5ebe-447e-4290-8895-e638899f126a",
    },
    {
      start: {
        x: 11180,
        y: 7200,
      },
      end: {
        x: 11400,
        y: 7200,
      },
      id: "3cdf7a26-a3f7-44b0-ae5f-dd33a444ec23",
      name: "TwoWayHEdge",
      startId: "dcab5ebe-447e-4290-8895-e638899f126a",
      endId: "fc6fde1f-c1af-45ec-b5ff-6fc75d663aba",
    },
    {
      start: {
        x: 11400,
        y: 6880,
      },
      end: {
        x: 11400,
        y: 7200,
      },
      id: "fda4ea28-229a-44f0-8ca5-ce7a52dd950d",
      name: "TwoWayVEdge",
      startId: "cf0fbcaf-d062-4340-b047-05666c68430e",
      endId: "fc6fde1f-c1af-45ec-b5ff-6fc75d663aba",
    },
    {
      start: {
        x: 11400,
        y: 7200,
      },
      end: {
        x: 11600,
        y: 7200,
      },
      id: "44481dd2-d850-4679-a44d-3a51d1208225",
      name: "TwoWayHEdge",
      startId: "fc6fde1f-c1af-45ec-b5ff-6fc75d663aba",
      endId: "f61646a6-cbcf-417c-9982-d7f6a48dd63e",
    },
    {
      start: {
        x: 11600,
        y: 7200,
      },
      end: {
        x: 11800,
        y: 7200,
      },
      id: "62c69269-583d-49e8-916f-b2f9b44a3a28",
      name: "TwoWayHEdge",
      startId: "f61646a6-cbcf-417c-9982-d7f6a48dd63e",
      endId: "b7eab131-0e3d-451b-82e3-12bc099df0d4",
    },
    {
      start: {
        x: 11800,
        y: 7200,
      },
      end: {
        x: 11800,
        y: 7400,
      },
      id: "51275b36-e609-4e00-8163-5219d5ea7859",
      name: "TwoWayVEdge",
      startId: "b7eab131-0e3d-451b-82e3-12bc099df0d4",
      endId: "f6162eda-2cf9-4589-8415-b34c49fb6cce",
    },
    {
      start: {
        x: 11800,
        y: 7400,
      },
      end: {
        x: 11800,
        y: 7600,
      },
      id: "dbff9aa4-7d25-4923-9e88-9cdf5add09cf",
      name: "TwoWayVEdge",
      startId: "f6162eda-2cf9-4589-8415-b34c49fb6cce",
      endId: "5d38eee5-f98b-45d8-a6dd-1a9d06d3a788",
    },
    {
      start: {
        x: 11800,
        y: 7600,
      },
      end: {
        x: 11600,
        y: 7600,
      },
      id: "e9d635b3-322a-47bc-9d29-327ff04f241b",
      name: "TwoWayHEdge",
      startId: "5d38eee5-f98b-45d8-a6dd-1a9d06d3a788",
      endId: "9544ad37-9eba-47ae-8036-8af60ea6ba69",
    },
    {
      start: {
        x: 11600,
        y: 7600,
      },
      end: {
        x: 11220,
        y: 7600,
      },
      id: "ae01fd24-0fcb-4460-bbc0-ec84c5441c8a",
      name: "TwoWayHEdge",
      startId: "9544ad37-9eba-47ae-8036-8af60ea6ba69",
      endId: "aa9b56a3-820f-4c97-8086-9bcd8b046d12",
    },
    {
      start: {
        x: 10560,
        y: 6380,
      },
      end: {
        x: 10560,
        y: 6640,
      },
      id: "f9a693ab-4f94-472f-b181-1312e3a334a0",
      name: "TwoWayVEdge",
      startId: "cc1d81ad-c4ca-47aa-a90b-6dfa79fdf103",
      endId: "2e2af268-3e7f-4ab6-9ca2-241980fb87f3",
    },
    {
      start: {
        x: 10560,
        y: 6640,
      },
      end: {
        x: 10560,
        y: 6860,
      },
      id: "ea4dd0c0-671e-4e88-9958-04875d8710a0",
      name: "TwoWayVEdge",
      startId: "2e2af268-3e7f-4ab6-9ca2-241980fb87f3",
      endId: "6d97a000-007a-4e5d-ad9a-152682b7143a",
    },
    {
      start: {
        x: 10560,
        y: 6860,
      },
      end: {
        x: 10560,
        y: 7080,
      },
      id: "e95d31c1-de0a-4ef5-9020-2e24ae0d5d2a",
      name: "TwoWayVEdge",
      startId: "6d97a000-007a-4e5d-ad9a-152682b7143a",
      endId: "fb3325fa-a1c9-40ba-b4bb-1813e4eaaa5e",
    },
    {
      start: {
        x: 10560,
        y: 7080,
      },
      end: {
        x: 10780,
        y: 7060,
      },
      id: "c4f0479d-7185-42a0-a4c3-162819604d55",
      name: "TwoWayHEdge",
      startId: "fb3325fa-a1c9-40ba-b4bb-1813e4eaaa5e",
      endId: "01698967-62c5-4129-b15d-57a7fc8274e9",
    },
    {
      start: {
        x: 10780,
        y: 7060,
      },
      end: {
        x: 11000,
        y: 7080,
      },
      id: "b230b8da-5fbe-4dbe-b4a6-243453f0297a",
      name: "TwoWayHEdge",
      startId: "01698967-62c5-4129-b15d-57a7fc8274e9",
      endId: "2970b6d0-5f6d-4272-b63f-2d3969ef4cae",
    },
    {
      start: {
        x: 11000,
        y: 7080,
      },
      end: {
        x: 10980,
        y: 7300,
      },
      id: "afaf81fe-10a1-4c67-b48c-bfa5d3e4f718",
      name: "TwoWayVEdge",
      startId: "2970b6d0-5f6d-4272-b63f-2d3969ef4cae",
      endId: "e1011d70-ad7f-461e-92cf-104f5643642b",
    },
    {
      start: {
        x: 10560,
        y: 7080,
      },
      end: {
        x: 10580,
        y: 7300,
      },
      id: "8a1c140a-1563-4ee9-a115-ef773e57858b",
      name: "TwoWayVEdge",
      startId: "fb3325fa-a1c9-40ba-b4bb-1813e4eaaa5e",
      endId: "55d3e715-85af-4dd3-846a-6c359d9abcfe",
    },
    {
      start: {
        x: 10580,
        y: 7300,
      },
      end: {
        x: 10980,
        y: 7300,
      },
      id: "c62201e1-094e-4356-8b0a-4d3ebbb6ae4e",
      name: "TwoWayHEdge",
      startId: "55d3e715-85af-4dd3-846a-6c359d9abcfe",
      endId: "e1011d70-ad7f-461e-92cf-104f5643642b",
    },
    {
      start: {
        x: 10980,
        y: 7300,
      },
      end: {
        x: 10980,
        y: 7600,
      },
      id: "51680e9d-34b9-424d-a5d2-a54bea035d8e",
      name: "TwoWayVEdge",
      startId: "e1011d70-ad7f-461e-92cf-104f5643642b",
      endId: "ad3f00ff-4ece-4407-8baf-72876214da11",
    },
    {
      start: {
        x: 10980,
        y: 7600,
      },
      end: {
        x: 11220,
        y: 7600,
      },
      id: "c2613c2e-a5db-4b5b-97d4-79298f6b5dc1",
      name: "TwoWayHEdge",
      startId: "ad3f00ff-4ece-4407-8baf-72876214da11",
      endId: "aa9b56a3-820f-4c97-8086-9bcd8b046d12",
    },
    {
      start: {
        x: 8780,
        y: 3520,
      },
      end: {
        x: 8780,
        y: 3900,
      },
      id: "6c305ab2-6496-483f-a5b5-2eefc698801e",
      name: "TwoWayVEdge",
      startId: "647d5a1f-19b3-4e5f-ab82-38b78161e8b6",
      endId: "1bdb1608-680b-4709-934a-af51f3437f0e",
    },
    {
      start: {
        x: 8780,
        y: 3900,
      },
      end: {
        x: 8780,
        y: 4260,
      },
      id: "3cb96eaa-dd72-46d0-a045-ec89d01b9c46",
      name: "TwoWayVEdge",
      startId: "1bdb1608-680b-4709-934a-af51f3437f0e",
      endId: "bfbe5a2d-1385-4363-ab74-1c6d491c7694",
    },
    {
      start: {
        x: 8780,
        y: 4260,
      },
      end: {
        x: 8780,
        y: 4660,
      },
      id: "39d31263-4d5b-448a-855a-36338eb73568",
      name: "TwoWayVEdge",
      startId: "bfbe5a2d-1385-4363-ab74-1c6d491c7694",
      endId: "ea5dfe09-5375-4c2f-a5dc-5a2e5a87546c",
    },
    {
      start: {
        x: 8780,
        y: 4660,
      },
      end: {
        x: 8560,
        y: 4660,
      },
      id: "25523f9b-e394-496c-80ea-e1c545fa4236",
      name: "TwoWayHEdge",
      startId: "ea5dfe09-5375-4c2f-a5dc-5a2e5a87546c",
      endId: "a8ce067e-8382-4974-ac47-9ede8ef805f2",
    },
    {
      start: {
        x: 8560,
        y: 4660,
      },
      end: {
        x: 8560,
        y: 4880,
      },
      id: "440c0721-904b-49f5-8d12-79c495fb921f",
      name: "TwoWayVEdge",
      startId: "a8ce067e-8382-4974-ac47-9ede8ef805f2",
      endId: "24660a06-fb01-4c58-8913-275f0f822eb1",
    },
    {
      start: {
        x: 8560,
        y: 5300,
      },
      end: {
        x: 9020,
        y: 5300,
      },
      id: "cc439bdd-1fff-41bd-a3cc-cac8a0dff4da",
      name: "TwoWayHEdge",
      startId: "661356f3-f7d5-404c-ab04-d97c3cf2345d",
      endId: "e6e5a7d1-4ed1-4eae-a801-77822619d85f",
    },
    {
      start: {
        x: 9020,
        y: 5300,
      },
      end: {
        x: 9020,
        y: 5580,
      },
      id: "bfe4ccc4-940e-4670-8f8a-9345ff0ec779",
      name: "TwoWayVEdge",
      startId: "e6e5a7d1-4ed1-4eae-a801-77822619d85f",
      endId: "7c6442a1-7a79-4699-bcda-be3a77b2bf55",
    },
    {
      start: {
        x: 9020,
        y: 5580,
      },
      end: {
        x: 8800,
        y: 5580,
      },
      id: "70696caf-9e28-4eaa-b6cb-e99f086308a2",
      name: "TwoWayHEdge",
      startId: "7c6442a1-7a79-4699-bcda-be3a77b2bf55",
      endId: "abf0c57d-c6fa-4a8e-bb42-428f910721d6",
    },
    {
      start: {
        x: 8560,
        y: 5300,
      },
      end: {
        x: 8560,
        y: 5580,
      },
      id: "4b4fd351-0c22-434d-ba81-b06c69168a70",
      name: "TwoWayVEdge",
      startId: "661356f3-f7d5-404c-ab04-d97c3cf2345d",
      endId: "ed7d8634-4d3f-4f2a-a062-4662f6310649",
    },
    {
      start: {
        x: 8560,
        y: 5580,
      },
      end: {
        x: 8800,
        y: 5580,
      },
      id: "92d204cd-8961-4c07-b8c5-82647786fae9",
      name: "TwoWayHEdge",
      startId: "ed7d8634-4d3f-4f2a-a062-4662f6310649",
      endId: "abf0c57d-c6fa-4a8e-bb42-428f910721d6",
    },
    {
      start: {
        x: 8800,
        y: 5580,
      },
      end: {
        x: 8800,
        y: 5900,
      },
      id: "b8a167b6-3e92-40f3-95ed-cb44baa4701c",
      name: "TwoWayVEdge",
      startId: "abf0c57d-c6fa-4a8e-bb42-428f910721d6",
      endId: "620529a0-d56b-455d-892e-eb8b31499f09",
    },
    {
      start: {
        x: 8800,
        y: 5900,
      },
      end: {
        x: 8800,
        y: 6160,
      },
      id: "5806d81c-f78c-4ad9-b266-1f58112e4fb8",
      name: "TwoWayVEdge",
      startId: "620529a0-d56b-455d-892e-eb8b31499f09",
      endId: "5c922aa7-a1b4-46fd-b913-4ba3606153e8",
    },
    {
      start: {
        x: 8800,
        y: 6160,
      },
      end: {
        x: 9400,
        y: 6160,
      },
      id: "8e6a2765-b82c-466d-ac25-1bf6f14a195f",
      name: "TwoWayHEdge",
      startId: "5c922aa7-a1b4-46fd-b913-4ba3606153e8",
      endId: "2577337d-9910-4abf-8ca8-b74c214f98d9",
    },
    {
      start: {
        x: 8800,
        y: 6160,
      },
      end: {
        x: 8800,
        y: 6440,
      },
      id: "b047c741-db5e-47ef-bbb0-4e93eebab616",
      name: "TwoWayVEdge",
      startId: "5c922aa7-a1b4-46fd-b913-4ba3606153e8",
      endId: "13748d8a-58cd-4c48-94d0-8242397d75cb",
    },
    {
      start: {
        x: 8800,
        y: 6440,
      },
      end: {
        x: 8800,
        y: 6700,
      },
      id: "5ac9e8f4-b71f-429c-a7f0-ce69fcfedfaa",
      name: "TwoWayVEdge",
      startId: "13748d8a-58cd-4c48-94d0-8242397d75cb",
      endId: "9e795219-27eb-4cb1-8dd8-e4a9b638b980",
    },
    {
      start: {
        x: 8800,
        y: 6700,
      },
      end: {
        x: 8540,
        y: 6700,
      },
      id: "b635616a-0e11-4195-b8d6-a1626024a406",
      name: "TwoWayHEdge",
      startId: "9e795219-27eb-4cb1-8dd8-e4a9b638b980",
      endId: "285d9287-41c8-4f6e-b413-04381c6df3f7",
    },
    {
      start: {
        x: 8540,
        y: 6700,
      },
      end: {
        x: 8320,
        y: 6700,
      },
      id: "aab69e37-b163-41fd-93c4-01aa9dd1d3e2",
      name: "TwoWayHEdge",
      startId: "285d9287-41c8-4f6e-b413-04381c6df3f7",
      endId: "64f96ab0-456a-4fae-b022-0751db4499fd",
    },
    {
      start: {
        x: 8320,
        y: 6700,
      },
      end: {
        x: 8060,
        y: 6700,
      },
      id: "cb32a401-45bb-4c0d-9fa2-d240d3fdfd38",
      name: "TwoWayHEdge",
      startId: "64f96ab0-456a-4fae-b022-0751db4499fd",
      endId: "76bf1d3b-22b4-4a64-948f-1993c5f6bd07",
    },
    {
      start: {
        x: 8060,
        y: 6700,
      },
      end: {
        x: 8060,
        y: 6980,
      },
      id: "49d94b79-5f08-4fda-8257-b493e6a0f477",
      name: "TwoWayVEdge",
      startId: "76bf1d3b-22b4-4a64-948f-1993c5f6bd07",
      endId: "88af796b-5fa3-4d59-9b4c-07e2e8f98d65",
    },
    {
      start: {
        x: 8060,
        y: 6980,
      },
      end: {
        x: 7820,
        y: 6980,
      },
      id: "3b52643f-12fb-4171-870d-95ddfb15651c",
      name: "TwoWayHEdge",
      startId: "88af796b-5fa3-4d59-9b4c-07e2e8f98d65",
      endId: "8793a9e4-077d-4b46-b8cd-4508e9149349",
    },
    {
      start: {
        x: 7820,
        y: 6980,
      },
      end: {
        x: 7820,
        y: 7340,
      },
      id: "27d8ccd6-27d1-4a03-8141-f53e2417eec8",
      name: "TwoWayVEdge",
      startId: "8793a9e4-077d-4b46-b8cd-4508e9149349",
      endId: "84ee492c-d892-4380-9cfb-65db1e38ecb9",
    },
    {
      start: {
        x: 8060,
        y: 6980,
      },
      end: {
        x: 8060,
        y: 7160,
      },
      id: "29bff261-84a0-40d8-ac77-2eaf0ff9acc5",
      name: "TwoWayVEdge",
      startId: "88af796b-5fa3-4d59-9b4c-07e2e8f98d65",
      endId: "80709a68-9715-4c5f-abf2-81fd2dcbabd6",
    },
    {
      start: {
        x: 8060,
        y: 7160,
      },
      end: {
        x: 8060,
        y: 7340,
      },
      id: "93f66f75-b452-4b74-aeb6-bd50864ad3d6",
      name: "TwoWayVEdge",
      startId: "80709a68-9715-4c5f-abf2-81fd2dcbabd6",
      endId: "d9f9d9a2-1b61-4ea1-8032-4072c6e894ea",
    },
    {
      start: {
        x: 7820,
        y: 7340,
      },
      end: {
        x: 8060,
        y: 7340,
      },
      id: "1ed7b294-bfb2-471f-aefa-3bc472fd2317",
      name: "TwoWayHEdge",
      startId: "84ee492c-d892-4380-9cfb-65db1e38ecb9",
      endId: "d9f9d9a2-1b61-4ea1-8032-4072c6e894ea",
    },
    {
      start: {
        x: 7820,
        y: 6980,
      },
      end: {
        x: 7480,
        y: 6980,
      },
      id: "2062df6b-6cc8-4674-9574-7a41596df47c",
      name: "TwoWayHEdge",
      startId: "8793a9e4-077d-4b46-b8cd-4508e9149349",
      endId: "9c03d0b1-2ada-48f4-994a-7460e2d95ca6",
    },
    {
      start: {
        x: 7480,
        y: 6980,
      },
      end: {
        x: 7180,
        y: 6980,
      },
      id: "3f1e662c-6172-49c7-bc6a-70c35608ce63",
      name: "TwoWayHEdge",
      startId: "9c03d0b1-2ada-48f4-994a-7460e2d95ca6",
      endId: "8ed3acf3-6eb1-4470-ac8b-496c98d5dacd",
    },
    {
      start: {
        x: 7180,
        y: 6980,
      },
      end: {
        x: 7180,
        y: 7340,
      },
      id: "c5558d13-0a3c-491c-93a7-ebcbd966c896",
      name: "TwoWayVEdge",
      startId: "8ed3acf3-6eb1-4470-ac8b-496c98d5dacd",
      endId: "7ad4ffcb-c07a-4079-812c-893bdf152744",
    },
    {
      start: {
        x: 7180,
        y: 7340,
      },
      end: {
        x: 7560,
        y: 7340,
      },
      id: "0db836d2-2eac-4d2a-9765-6295e0469c68",
      name: "TwoWayHEdge",
      startId: "7ad4ffcb-c07a-4079-812c-893bdf152744",
      endId: "9ce1b81a-463c-4651-8f2a-fd70e1b93c59",
    },
    {
      start: {
        x: 7560,
        y: 7340,
      },
      end: {
        x: 7820,
        y: 7340,
      },
      id: "9f2cef0f-6a6f-47f9-8e61-831c8d3c09a2",
      name: "TwoWayHEdge",
      startId: "9ce1b81a-463c-4651-8f2a-fd70e1b93c59",
      endId: "84ee492c-d892-4380-9cfb-65db1e38ecb9",
    },
    {
      start: {
        x: 8560,
        y: 5300,
      },
      end: {
        x: 8200,
        y: 5300,
      },
      id: "066c78f2-0db0-4fd7-b888-a7ab6502e26b",
      name: "TwoWayHEdge",
      startId: "661356f3-f7d5-404c-ab04-d97c3cf2345d",
      endId: "24a78f6f-cdb9-4d9d-a520-0e5accc0065c",
    },
    {
      start: {
        x: 8200,
        y: 5300,
      },
      end: {
        x: 7940,
        y: 5300,
      },
      id: "b57f47e5-d565-4517-86fd-7d5c24c0a0d1",
      name: "TwoWayHEdge",
      startId: "24a78f6f-cdb9-4d9d-a520-0e5accc0065c",
      endId: "d4e376b8-4242-46c1-a233-fe767991debd",
    },
    {
      start: {
        x: 7940,
        y: 5300,
      },
      end: {
        x: 7940,
        y: 5560,
      },
      id: "8225817e-03ee-409e-a8e5-91ed59627684",
      name: "TwoWayVEdge",
      startId: "d4e376b8-4242-46c1-a233-fe767991debd",
      endId: "0f616903-cbc5-43d5-b7a4-f86d90c24827",
    },
    {
      start: {
        x: 7940,
        y: 5560,
      },
      end: {
        x: 7480,
        y: 5560,
      },
      id: "b53807ed-fb4d-4007-828c-5b3373e071f4",
      name: "TwoWayHEdge",
      startId: "0f616903-cbc5-43d5-b7a4-f86d90c24827",
      endId: "1c51fd51-66ec-4269-bbd3-7cdccfbf09a8",
    },
    {
      start: {
        x: 7480,
        y: 5560,
      },
      end: {
        x: 7480,
        y: 5300,
      },
      id: "5dbe1217-8752-4cd5-98cf-27f5fe89bea1",
      name: "TwoWayVEdge",
      startId: "1c51fd51-66ec-4269-bbd3-7cdccfbf09a8",
      endId: "4be7aa7c-e6d5-4fad-bcfb-9c73d56f8e14",
    },
    {
      start: {
        x: 7480,
        y: 5300,
      },
      end: {
        x: 7220,
        y: 5300,
      },
      id: "ae356590-b75b-4767-9ec4-fd5a8de6fcb1",
      name: "TwoWayHEdge",
      startId: "4be7aa7c-e6d5-4fad-bcfb-9c73d56f8e14",
      endId: "cec383cb-6b5d-4c98-972d-8871444d52c7",
    },
    {
      start: {
        x: 7220,
        y: 5300,
      },
      end: {
        x: 7220,
        y: 5500,
      },
      id: "8aa29224-7dff-4041-88a5-4b31265cc8fa",
      name: "TwoWayVEdge",
      startId: "cec383cb-6b5d-4c98-972d-8871444d52c7",
      endId: "6974eaca-a949-495e-80a1-c8ee8c76c8c0",
    },
    {
      start: {
        x: 7220,
        y: 5500,
      },
      end: {
        x: 7220,
        y: 5720,
      },
      id: "23699959-43ff-42df-bbb1-d280d8c80ad5",
      name: "TwoWayVEdge",
      startId: "6974eaca-a949-495e-80a1-c8ee8c76c8c0",
      endId: "bfacafb9-524e-4687-8c39-618cc2ada3d9",
    },
    {
      start: {
        x: 7220,
        y: 5720,
      },
      end: {
        x: 6940,
        y: 5720,
      },
      id: "ff9e19e4-69fd-4bfb-8d13-ef256a77203c",
      name: "TwoWayHEdge",
      startId: "bfacafb9-524e-4687-8c39-618cc2ada3d9",
      endId: "61261f0d-5a62-4f03-b512-94d2964b4727",
    },
    {
      start: {
        x: 6940,
        y: 5720,
      },
      end: {
        x: 6940,
        y: 5300,
      },
      id: "f7059298-bb4c-41fc-a3b9-ee549ad1d776",
      name: "TwoWayVEdge",
      startId: "61261f0d-5a62-4f03-b512-94d2964b4727",
      endId: "4a0e1d47-8a48-4ef2-97ad-7a8ed6f736dd",
    },
    {
      start: {
        x: 6940,
        y: 5300,
      },
      end: {
        x: 7220,
        y: 5300,
      },
      id: "902c7a76-e3f0-42de-b0d2-bd3e14305a92",
      name: "TwoWayHEdge",
      startId: "4a0e1d47-8a48-4ef2-97ad-7a8ed6f736dd",
      endId: "cec383cb-6b5d-4c98-972d-8871444d52c7",
    },
    {
      start: {
        x: 7220,
        y: 5300,
      },
      end: {
        x: 7220,
        y: 5060,
      },
      id: "df46387c-7c90-48c1-b390-88043a579b40",
      name: "TwoWayVEdge",
      startId: "cec383cb-6b5d-4c98-972d-8871444d52c7",
      endId: "df8481b4-b8ff-4cab-9832-e145a7f06dee",
    },
    {
      start: {
        x: 7220,
        y: 5060,
      },
      end: {
        x: 6940,
        y: 5060,
      },
      id: "441095ef-56ad-4778-be78-3922311bbf9f",
      name: "TwoWayHEdge",
      startId: "df8481b4-b8ff-4cab-9832-e145a7f06dee",
      endId: "b6962d63-fc0f-46ed-9f39-b26ea219b161",
    },
    {
      start: {
        x: 6940,
        y: 5060,
      },
      end: {
        x: 6940,
        y: 4840,
      },
      id: "435fa9ee-9d86-4da5-b789-3ced92ce1475",
      name: "TwoWayVEdge",
      startId: "b6962d63-fc0f-46ed-9f39-b26ea219b161",
      endId: "51ec81c7-b003-434f-a657-8ed6715dcb18",
    },
    {
      start: {
        x: 6940,
        y: 4840,
      },
      end: {
        x: 6940,
        y: 4600,
      },
      id: "ea872b35-843e-4c6d-a558-bd3ae1a5db6a",
      name: "TwoWayVEdge",
      startId: "51ec81c7-b003-434f-a657-8ed6715dcb18",
      endId: "83532ab7-ea59-47b7-b532-16ebce69e455",
    },
    {
      start: {
        x: 7180,
        y: 6980,
      },
      end: {
        x: 7180,
        y: 6780,
      },
      id: "9fd97165-9939-4a7b-8bf7-af0c9016d713",
      name: "TwoWayVEdge",
      startId: "8ed3acf3-6eb1-4470-ac8b-496c98d5dacd",
      endId: "daaab021-b6bc-47c8-9f71-2c5ea6b60f17",
    },
    {
      start: {
        x: 7180,
        y: 6780,
      },
      end: {
        x: 6840,
        y: 6780,
      },
      id: "81caf242-15a0-4955-9a5d-567632cd907b",
      name: "TwoWayHEdge",
      startId: "daaab021-b6bc-47c8-9f71-2c5ea6b60f17",
      endId: "f0d4e5a4-5b54-49f3-9a5c-8eb11482c775",
    },
    {
      start: {
        x: 7180,
        y: 7340,
      },
      end: {
        x: 6840,
        y: 7340,
      },
      id: "a7a2de30-5c4a-4202-b9bf-12bdae4231bd",
      name: "TwoWayHEdge",
      startId: "7ad4ffcb-c07a-4079-812c-893bdf152744",
      endId: "e5e7ec5e-4735-4f7b-93e0-01829d942f58",
    },
    {
      start: {
        x: 6840,
        y: 6780,
      },
      end: {
        x: 6560,
        y: 6780,
      },
      id: "a01f46e1-726a-435a-8743-a9150906db9b",
      name: "TwoWayHEdge",
      startId: "f0d4e5a4-5b54-49f3-9a5c-8eb11482c775",
      endId: "7b766969-ec3a-4369-98f0-b07824932ca6",
    },
    {
      start: {
        x: 6560,
        y: 6780,
      },
      end: {
        x: 6320,
        y: 6780,
      },
      id: "d8fa48fc-5349-4605-b796-51b496d27e5e",
      name: "TwoWayHEdge",
      startId: "7b766969-ec3a-4369-98f0-b07824932ca6",
      endId: "3e153161-fa74-4893-809c-6abe5111b3bb",
    },
    {
      start: {
        x: 6840,
        y: 7340,
      },
      end: {
        x: 6540,
        y: 7340,
      },
      id: "0e1709e7-3450-4938-a983-626d294ab892",
      name: "TwoWayHEdge",
      startId: "e5e7ec5e-4735-4f7b-93e0-01829d942f58",
      endId: "916f081a-5e73-4aff-9874-39f7a39e3716",
    },
    {
      start: {
        x: 6540,
        y: 7340,
      },
      end: {
        x: 6140,
        y: 7340,
      },
      id: "f9dd416e-c187-49b5-8e12-65eec82e2887",
      name: "TwoWayHEdge",
      startId: "916f081a-5e73-4aff-9874-39f7a39e3716",
      endId: "1c58f6ba-56f7-4a79-8453-e3eb43aecacd",
    },
    {
      start: {
        x: 6140,
        y: 7340,
      },
      end: {
        x: 6140,
        y: 7080,
      },
      id: "f9005be5-a482-4aaf-99f1-5bb0c9eb91c7",
      name: "TwoWayVEdge",
      startId: "1c58f6ba-56f7-4a79-8453-e3eb43aecacd",
      endId: "a2f835ff-c596-4322-b0cb-c71857189390",
    },
    {
      start: {
        x: 6140,
        y: 7080,
      },
      end: {
        x: 6140,
        y: 6780,
      },
      id: "cbb9523c-86a6-4b92-a0af-66a5dd49b4f1",
      name: "TwoWayVEdge",
      startId: "a2f835ff-c596-4322-b0cb-c71857189390",
      endId: "8de305f9-d3e2-47de-9277-426c9d883a56",
    },
    {
      start: {
        x: 6140,
        y: 7340,
      },
      end: {
        x: 5660,
        y: 7340,
      },
      id: "ad5e0def-7a82-48a3-9a87-5173e966134a",
      name: "TwoWayHEdge",
      startId: "1c58f6ba-56f7-4a79-8453-e3eb43aecacd",
      endId: "ff47b800-fdfa-4b55-ab68-748d2245e65e",
    },
    {
      start: {
        x: 5660,
        y: 7340,
      },
      end: {
        x: 5660,
        y: 7140,
      },
      id: "e944b584-2d38-4fc5-952c-77949eb5a4eb",
      name: "TwoWayVEdge",
      startId: "ff47b800-fdfa-4b55-ab68-748d2245e65e",
      endId: "25dd6c96-fc59-4432-8f00-40ba8c9f0d2d",
    },
    {
      start: {
        x: 5660,
        y: 7140,
      },
      end: {
        x: 5240,
        y: 7140,
      },
      id: "f25d8dc7-b591-4e6b-b0ba-cc7a41a03362",
      name: "TwoWayHEdge",
      startId: "25dd6c96-fc59-4432-8f00-40ba8c9f0d2d",
      endId: "0b02271d-05a8-4ca5-9c3e-59d946ff0dfc",
    },
    {
      start: {
        x: 5240,
        y: 7140,
      },
      end: {
        x: 5240,
        y: 6940,
      },
      id: "0ba6927e-f93d-43be-aad3-fafdf0773cc7",
      name: "TwoWayVEdge",
      startId: "0b02271d-05a8-4ca5-9c3e-59d946ff0dfc",
      endId: "c6873558-3547-46d5-acf0-e474b333e3a6",
    },
    {
      start: {
        x: 5240,
        y: 6940,
      },
      end: {
        x: 5460,
        y: 6940,
      },
      id: "f56f005a-c6ff-4243-aa61-1eab67800821",
      name: "TwoWayHEdge",
      startId: "c6873558-3547-46d5-acf0-e474b333e3a6",
      endId: "0f6f5faf-1981-4542-9483-91361ff013d8",
    },
    {
      start: {
        x: 5460,
        y: 6940,
      },
      end: {
        x: 5660,
        y: 6940,
      },
      id: "0a21105a-8ce3-4ee2-b1e1-1b66acc0ffb0",
      name: "TwoWayHEdge",
      startId: "0f6f5faf-1981-4542-9483-91361ff013d8",
      endId: "b8c43d7d-f4cc-4ba9-ac75-75f2425a92da",
    },
    {
      start: {
        x: 5660,
        y: 6940,
      },
      end: {
        x: 5660,
        y: 7140,
      },
      id: "c28f32af-e382-4187-b90f-21ec78f42c3a",
      name: "TwoWayVEdge",
      startId: "b8c43d7d-f4cc-4ba9-ac75-75f2425a92da",
      endId: "25dd6c96-fc59-4432-8f00-40ba8c9f0d2d",
    },
    {
      start: {
        x: 5660,
        y: 6940,
      },
      end: {
        x: 5660,
        y: 6620,
      },
      id: "1eadc740-3cfc-4383-8e13-f809084a6621",
      name: "TwoWayVEdge",
      startId: "b8c43d7d-f4cc-4ba9-ac75-75f2425a92da",
      endId: "901619df-8a61-4adf-9132-8d54e247128d",
    },
    {
      start: {
        x: 5660,
        y: 6620,
      },
      end: {
        x: 5900,
        y: 6620,
      },
      id: "bda44373-5118-4350-8484-fa3aac41e98c",
      name: "TwoWayHEdge",
      startId: "901619df-8a61-4adf-9132-8d54e247128d",
      endId: "511afd82-3b5f-423c-bf47-45303d3c3967",
    },
    {
      start: {
        x: 5900,
        y: 6620,
      },
      end: {
        x: 6120,
        y: 6620,
      },
      id: "e4c6ae58-ab4d-4d7a-a99f-7bae632f0192",
      name: "TwoWayHEdge",
      startId: "511afd82-3b5f-423c-bf47-45303d3c3967",
      endId: "2777df35-bc91-48e2-8d47-a2358becd6f7",
    },
    {
      start: {
        x: 6120,
        y: 6620,
      },
      end: {
        x: 6120,
        y: 6420,
      },
      id: "00d4e604-2286-4334-ae0a-65abed474ab3",
      name: "TwoWayVEdge",
      startId: "2777df35-bc91-48e2-8d47-a2358becd6f7",
      endId: "e5a69b8c-6e13-45d4-8589-0938436e9ac1",
    },
    {
      start: {
        x: 6120,
        y: 6420,
      },
      end: {
        x: 5900,
        y: 6420,
      },
      id: "6dfe0155-30ac-4d3c-a1d2-22ba573835c6",
      name: "TwoWayHEdge",
      startId: "e5a69b8c-6e13-45d4-8589-0938436e9ac1",
      endId: "58e20d25-5ccf-4e06-832e-de356e59bac9",
    },
    {
      start: {
        x: 5900,
        y: 6420,
      },
      end: {
        x: 5900,
        y: 6220,
      },
      id: "55862d52-2ca5-41a8-8adb-58eb2f209ec7",
      name: "TwoWayVEdge",
      startId: "58e20d25-5ccf-4e06-832e-de356e59bac9",
      endId: "f1265796-0f2e-43c4-be48-56414d040f00",
    },
    {
      start: {
        x: 5900,
        y: 6220,
      },
      end: {
        x: 6340,
        y: 6220,
      },
      id: "3bc23a10-8d8e-4352-b1e1-a88b713e0553",
      name: "TwoWayHEdge",
      startId: "f1265796-0f2e-43c4-be48-56414d040f00",
      endId: "c2357c24-65d7-462a-85e5-bbb014449119",
    },
    {
      start: {
        x: 6340,
        y: 6220,
      },
      end: {
        x: 6340,
        y: 6420,
      },
      id: "96470474-3d3a-4c22-93b9-091586d11a12",
      name: "TwoWayVEdge",
      startId: "c2357c24-65d7-462a-85e5-bbb014449119",
      endId: "303a8e17-3f3f-4d0c-a78a-b42c38464726",
    },
    {
      start: {
        x: 6120,
        y: 6420,
      },
      end: {
        x: 6340,
        y: 6420,
      },
      id: "bc1e1647-6fb9-4e26-a1e7-574ada719ff1",
      name: "TwoWayHEdge",
      startId: "e5a69b8c-6e13-45d4-8589-0938436e9ac1",
      endId: "303a8e17-3f3f-4d0c-a78a-b42c38464726",
    },
    {
      start: {
        x: 6340,
        y: 6420,
      },
      end: {
        x: 6540,
        y: 6420,
      },
      id: "e78af61b-8665-48f9-ba2e-66d74b12ca8c",
      name: "TwoWayHEdge",
      startId: "303a8e17-3f3f-4d0c-a78a-b42c38464726",
      endId: "02c849aa-f126-46e5-a983-b41b0419191e",
    },
    {
      start: {
        x: 6540,
        y: 6420,
      },
      end: {
        x: 6540,
        y: 6080,
      },
      id: "7ae00207-1ec4-4b88-850a-3c1a3dab7068",
      name: "TwoWayVEdge",
      startId: "02c849aa-f126-46e5-a983-b41b0419191e",
      endId: "9ab61931-2f59-47c9-91fc-7d3f986dfdf9",
    },
    {
      start: {
        x: 6540,
        y: 6080,
      },
      end: {
        x: 6100,
        y: 6080,
      },
      id: "a8569941-8444-42cc-9041-cd91e88edd06",
      name: "TwoWayHEdge",
      startId: "9ab61931-2f59-47c9-91fc-7d3f986dfdf9",
      endId: "5388c61e-62f4-432d-802d-40138036bf50",
    },
    {
      start: {
        x: 6100,
        y: 6080,
      },
      end: {
        x: 6100,
        y: 5880,
      },
      id: "ecaa1c78-59d5-4a7f-bb59-33e37801061e",
      name: "TwoWayVEdge",
      startId: "5388c61e-62f4-432d-802d-40138036bf50",
      endId: "68b219c8-3865-40d8-8b55-1985123557f2",
    },
    {
      start: {
        x: 6100,
        y: 5880,
      },
      end: {
        x: 6320,
        y: 5880,
      },
      id: "2c71d4bf-1d41-49da-be46-0fdca5593f09",
      name: "TwoWayHEdge",
      startId: "68b219c8-3865-40d8-8b55-1985123557f2",
      endId: "ca1fa3dd-7d22-4f42-a99e-99fa69b82d8a",
    },
    {
      start: {
        x: 6320,
        y: 5880,
      },
      end: {
        x: 6540,
        y: 5880,
      },
      id: "572bb1a8-7205-450b-ab86-fb74951b304e",
      name: "TwoWayHEdge",
      startId: "ca1fa3dd-7d22-4f42-a99e-99fa69b82d8a",
      endId: "6b213d5a-5201-4758-b440-fd82433845f7",
    },
    {
      start: {
        x: 6540,
        y: 5880,
      },
      end: {
        x: 6540,
        y: 6080,
      },
      id: "73c35609-9f88-4cfa-afd1-14405a9f8dd6",
      name: "TwoWayVEdge",
      startId: "6b213d5a-5201-4758-b440-fd82433845f7",
      endId: "9ab61931-2f59-47c9-91fc-7d3f986dfdf9",
    },
    {
      start: {
        x: 7180,
        y: 6780,
      },
      end: {
        x: 7160,
        y: 6380,
      },
      id: "f88f1482-087e-46c0-b9f3-dda9907f1979",
      name: "TwoWayVEdge",
      startId: "daaab021-b6bc-47c8-9f71-2c5ea6b60f17",
      endId: "d38da284-ae6b-4dad-abd7-56c209286c7a",
    },
    {
      start: {
        x: 7160,
        y: 6380,
      },
      end: {
        x: 6960,
        y: 6380,
      },
      id: "29768aac-66fd-4f13-ac1a-0ffb84df63a0",
      name: "TwoWayHEdge",
      startId: "d38da284-ae6b-4dad-abd7-56c209286c7a",
      endId: "fb64289f-8101-4b82-8775-81fedc28966f",
    },
    {
      start: {
        x: 6960,
        y: 6380,
      },
      end: {
        x: 6740,
        y: 6380,
      },
      id: "a4e6e487-14e7-4a4e-9304-8928fb94d025",
      name: "TwoWayHEdge",
      startId: "fb64289f-8101-4b82-8775-81fedc28966f",
      endId: "b3d620e6-4270-47ad-ba83-28dd639b0ec9",
    },
    {
      start: {
        x: 6740,
        y: 6380,
      },
      end: {
        x: 6740,
        y: 5920,
      },
      id: "89f6c28f-8a32-4894-a593-07beea86e749",
      name: "TwoWayVEdge",
      startId: "b3d620e6-4270-47ad-ba83-28dd639b0ec9",
      endId: "87a28c22-4c29-4574-b4f8-ecdeb9b49db9",
    },
    {
      start: {
        x: 6740,
        y: 5920,
      },
      end: {
        x: 6960,
        y: 5920,
      },
      id: "1f4e5954-88ad-47d3-9b88-518287adacf2",
      name: "TwoWayHEdge",
      startId: "87a28c22-4c29-4574-b4f8-ecdeb9b49db9",
      endId: "db397003-0d05-4cab-9a70-c810e73b560e",
    },
    {
      start: {
        x: 6960,
        y: 5920,
      },
      end: {
        x: 6960,
        y: 6140,
      },
      id: "624ea6f2-2e80-42fe-9dd7-5342844df94e",
      name: "TwoWayVEdge",
      startId: "db397003-0d05-4cab-9a70-c810e73b560e",
      endId: "9a18db3a-0ed1-4b47-b8bd-975bea9edf87",
    },
    {
      start: {
        x: 6960,
        y: 6140,
      },
      end: {
        x: 6960,
        y: 6380,
      },
      id: "35f7d429-7693-4419-a1fd-6ae6e98b2e22",
      name: "TwoWayVEdge",
      startId: "9a18db3a-0ed1-4b47-b8bd-975bea9edf87",
      endId: "fb64289f-8101-4b82-8775-81fedc28966f",
    },
    {
      start: {
        x: 6740,
        y: 5920,
      },
      end: {
        x: 6740,
        y: 5620,
      },
      id: "3afac629-cabf-489c-89d2-ee8fee8a73a0",
      name: "TwoWayVEdge",
      startId: "87a28c22-4c29-4574-b4f8-ecdeb9b49db9",
      endId: "025247b8-1345-4b42-95ee-e4aff5e49519",
    },
    {
      start: {
        x: 6740,
        y: 5620,
      },
      end: {
        x: 6740,
        y: 5340,
      },
      id: "ead06d87-2f7e-4c08-bcdd-1b69bfe07ea7",
      name: "TwoWayVEdge",
      startId: "025247b8-1345-4b42-95ee-e4aff5e49519",
      endId: "f63ed4c9-eb4d-45d2-899a-6a2f3ae44428",
    },
    {
      start: {
        x: 6740,
        y: 5340,
      },
      end: {
        x: 6500,
        y: 5340,
      },
      id: "daf3d91d-b294-4551-9f8b-23125ced73fc",
      name: "TwoWayHEdge",
      startId: "f63ed4c9-eb4d-45d2-899a-6a2f3ae44428",
      endId: "832cede2-4aba-4ed2-8630-88216bfd32e8",
    },
    {
      start: {
        x: 6500,
        y: 5340,
      },
      end: {
        x: 6500,
        y: 5020,
      },
      id: "2cc11332-c895-47fe-b386-295dff24eb43",
      name: "TwoWayVEdge",
      startId: "832cede2-4aba-4ed2-8630-88216bfd32e8",
      endId: "ba5e6ce4-129b-4136-8da5-b94ab2f40ed0",
    },
    {
      start: {
        x: 6500,
        y: 5020,
      },
      end: {
        x: 6740,
        y: 5020,
      },
      id: "cf4e4d05-595a-4b6e-b16f-c89b77c3ef73",
      name: "TwoWayHEdge",
      startId: "ba5e6ce4-129b-4136-8da5-b94ab2f40ed0",
      endId: "bf0ecf6b-9b5b-49ab-93b2-9ae6793083fd",
    },
    {
      start: {
        x: 6740,
        y: 5020,
      },
      end: {
        x: 6740,
        y: 5180,
      },
      id: "21288059-5f9e-4559-b9d7-112351fd36a0",
      name: "TwoWayVEdge",
      startId: "bf0ecf6b-9b5b-49ab-93b2-9ae6793083fd",
      endId: "14b7920a-d8e1-4396-9b30-7dda0906ea8c",
    },
    {
      start: {
        x: 6740,
        y: 5180,
      },
      end: {
        x: 6740,
        y: 5340,
      },
      id: "f9e5f805-a8fd-4915-b1f1-660ea0c40f93",
      name: "TwoWayVEdge",
      startId: "14b7920a-d8e1-4396-9b30-7dda0906ea8c",
      endId: "f63ed4c9-eb4d-45d2-899a-6a2f3ae44428",
    },
    {
      start: {
        x: 6320,
        y: 5880,
      },
      end: {
        x: 6300,
        y: 5700,
      },
      id: "2e2ba4db-bfae-4259-a83d-e00a011a0e88",
      name: "TwoWayVEdge",
      startId: "ca1fa3dd-7d22-4f42-a99e-99fa69b82d8a",
      endId: "55fb6a65-6890-4a3a-aa10-96108c1f67ea",
    },
    {
      start: {
        x: 6300,
        y: 5700,
      },
      end: {
        x: 6300,
        y: 5520,
      },
      id: "a5e7c9ac-67a1-4b49-9e27-7bcf42dd4fa2",
      name: "TwoWayVEdge",
      startId: "55fb6a65-6890-4a3a-aa10-96108c1f67ea",
      endId: "a603f125-23ef-4995-887f-4adc93e70e3b",
    },
    {
      start: {
        x: 6300,
        y: 5520,
      },
      end: {
        x: 6300,
        y: 5340,
      },
      id: "f292fb78-e9dc-4494-b95a-26ef57b52b1a",
      name: "TwoWayVEdge",
      startId: "a603f125-23ef-4995-887f-4adc93e70e3b",
      endId: "722ceff9-eefc-43e6-a402-342777919041",
    },
    {
      start: {
        x: 6300,
        y: 5340,
      },
      end: {
        x: 6500,
        y: 5340,
      },
      id: "34936117-b10a-467f-9c33-f541e36eb05f",
      name: "TwoWayHEdge",
      startId: "722ceff9-eefc-43e6-a402-342777919041",
      endId: "832cede2-4aba-4ed2-8630-88216bfd32e8",
    },
    {
      start: {
        x: 6100,
        y: 5880,
      },
      end: {
        x: 6080,
        y: 5700,
      },
      id: "b3f1ef27-46b4-4c74-a267-69992107b50c",
      name: "TwoWayVEdge",
      startId: "68b219c8-3865-40d8-8b55-1985123557f2",
      endId: "63c4d6b2-ee30-4167-9779-472052f29824",
    },
    {
      start: {
        x: 5900,
        y: 6220,
      },
      end: {
        x: 5520,
        y: 6200,
      },
      id: "af29f912-df2c-4d43-befe-4f1696d23636",
      name: "TwoWayHEdge",
      startId: "f1265796-0f2e-43c4-be48-56414d040f00",
      endId: "6d6249e9-cca4-4568-8635-a2b54dc630e1",
    },
    {
      start: {
        x: 5520,
        y: 6200,
      },
      end: {
        x: 5440,
        y: 6000,
      },
      id: "a38e00a0-a43e-4ef4-8e03-cbcc54fc250a",
      name: "TwoWayVEdge",
      startId: "6d6249e9-cca4-4568-8635-a2b54dc630e1",
      endId: "bb553085-8205-4a55-902b-3f6a3fa7bf69",
    },
    {
      start: {
        x: 5520,
        y: 6200,
      },
      end: {
        x: 5460,
        y: 6420,
      },
      id: "616b0b84-3e97-4538-9bf9-e4bc6e7be981",
      name: "TwoWayVEdge",
      startId: "6d6249e9-cca4-4568-8635-a2b54dc630e1",
      endId: "a51a1631-727f-41c7-a3b4-fad77fcc5725",
    },
    {
      start: {
        x: 5460,
        y: 6420,
      },
      end: {
        x: 5240,
        y: 6420,
      },
      id: "e2bf92ae-2b35-4737-897d-4fdc53f2c310",
      name: "TwoWayHEdge",
      startId: "a51a1631-727f-41c7-a3b4-fad77fcc5725",
      endId: "fa240b54-1345-4fc6-bc87-1286b0bf787e",
    },
    {
      start: {
        x: 5240,
        y: 6420,
      },
      end: {
        x: 5240,
        y: 6000,
      },
      id: "82f39d8f-b080-4b99-9a1a-2382ca6b1498",
      name: "TwoWayVEdge",
      startId: "fa240b54-1345-4fc6-bc87-1286b0bf787e",
      endId: "897aa66e-ee2b-492c-8dd6-462d6d8e7a7c",
    },
    {
      start: {
        x: 5240,
        y: 6000,
      },
      end: {
        x: 5440,
        y: 6000,
      },
      id: "5acb2142-9b9e-4c2a-90d2-41b97eeaf3af",
      name: "TwoWayHEdge",
      startId: "897aa66e-ee2b-492c-8dd6-462d6d8e7a7c",
      endId: "bb553085-8205-4a55-902b-3f6a3fa7bf69",
    },
    {
      start: {
        x: 6080,
        y: 5700,
      },
      end: {
        x: 5500,
        y: 5740,
      },
      id: "2f502c8d-b6e7-4682-b201-c175ed535a3f",
      name: "TwoWayHEdge",
      startId: "63c4d6b2-ee30-4167-9779-472052f29824",
      endId: "54a8b9ec-d14c-4c74-89cd-3a04ffbf7718",
    },
    {
      start: {
        x: 5240,
        y: 6940,
      },
      end: {
        x: 4800,
        y: 6940,
      },
      id: "93e5316c-5537-4ad9-892b-bb6063f50201",
      name: "TwoWayHEdge",
      startId: "c6873558-3547-46d5-acf0-e474b333e3a6",
      endId: "29242ec7-547a-4057-9611-c621674c18cd",
    },
    {
      start: {
        x: 4800,
        y: 6940,
      },
      end: {
        x: 4800,
        y: 6680,
      },
      id: "6e02351c-c5ed-4ee8-baf7-12a209fa4142",
      name: "TwoWayVEdge",
      startId: "29242ec7-547a-4057-9611-c621674c18cd",
      endId: "cc318b46-313f-4e6e-9756-f11f40bab280",
    },
    {
      start: {
        x: 4800,
        y: 6680,
      },
      end: {
        x: 5020,
        y: 6680,
      },
      id: "dafb004b-d3eb-4ad9-bf2f-d4c5819e03ab",
      name: "TwoWayHEdge",
      startId: "cc318b46-313f-4e6e-9756-f11f40bab280",
      endId: "9bf09993-ec16-4676-8861-5ad87f6be191",
    },
    {
      start: {
        x: 5020,
        y: 6680,
      },
      end: {
        x: 5240,
        y: 6680,
      },
      id: "fe38e941-946c-44bb-afe4-44167cd539d1",
      name: "TwoWayHEdge",
      startId: "9bf09993-ec16-4676-8861-5ad87f6be191",
      endId: "0823864a-8a34-493f-ab82-474a930778ca",
    },
    {
      start: {
        x: 5240,
        y: 6680,
      },
      end: {
        x: 5240,
        y: 6940,
      },
      id: "2ce31c0f-3812-444b-8f1c-adc7769b8233",
      name: "TwoWayVEdge",
      startId: "0823864a-8a34-493f-ab82-474a930778ca",
      endId: "c6873558-3547-46d5-acf0-e474b333e3a6",
    },
    {
      start: {
        x: 5240,
        y: 6420,
      },
      end: {
        x: 5000,
        y: 6440,
      },
      id: "c52f94e2-4f2e-4861-a0cb-165c060e5067",
      name: "TwoWayHEdge",
      startId: "fa240b54-1345-4fc6-bc87-1286b0bf787e",
      endId: "07f146b9-a672-4634-a234-ee7366255698",
    },
    {
      start: {
        x: 5000,
        y: 6440,
      },
      end: {
        x: 5020,
        y: 6680,
      },
      id: "4c02c091-c382-4722-8bdd-f81579d2a40d",
      name: "OneWayVEdge",
      startId: "07f146b9-a672-4634-a234-ee7366255698",
      endId: "9bf09993-ec16-4676-8861-5ad87f6be191",
    },
    {
      start: {
        x: 5240,
        y: 6000,
      },
      end: {
        x: 4880,
        y: 5980,
      },
      id: "0bfed79d-36a1-4fd7-89f0-22dadb0e58d9",
      name: "TwoWayHEdge",
      startId: "897aa66e-ee2b-492c-8dd6-462d6d8e7a7c",
      endId: "0315783b-1c1b-4c76-b577-d6f19cbebf46",
    },
    {
      start: {
        x: 4880,
        y: 5980,
      },
      end: {
        x: 4840,
        y: 5760,
      },
      id: "cf0db81a-ff7d-4ee6-a340-c363e59bdffd",
      name: "TwoWayVEdge",
      startId: "0315783b-1c1b-4c76-b577-d6f19cbebf46",
      endId: "5efd7d93-eb13-49fb-90bd-03b6f1daff20",
    },
    {
      start: {
        x: 4840,
        y: 5760,
      },
      end: {
        x: 4500,
        y: 5760,
      },
      id: "0bc4e228-e361-4e51-8f77-4a040f896415",
      name: "TwoWayHEdge",
      startId: "5efd7d93-eb13-49fb-90bd-03b6f1daff20",
      endId: "54a7afcb-ad9e-4a86-a11b-62430d47aee8",
    },
    {
      start: {
        x: 4500,
        y: 5760,
      },
      end: {
        x: 4500,
        y: 6100,
      },
      id: "2895cd43-429c-4142-aae8-47ebe5c93b31",
      name: "TwoWayVEdge",
      startId: "54a7afcb-ad9e-4a86-a11b-62430d47aee8",
      endId: "4c89129c-47e5-4a13-98bd-944dc5daea9e",
    },
    {
      start: {
        x: 4500,
        y: 6100,
      },
      end: {
        x: 4740,
        y: 6100,
      },
      id: "99581254-238b-4508-a892-664adec2d9d9",
      name: "TwoWayHEdge",
      startId: "4c89129c-47e5-4a13-98bd-944dc5daea9e",
      endId: "98c44f2c-6f3b-4ab5-bd2a-59b4cce3e409",
    },
    {
      start: {
        x: 4740,
        y: 6100,
      },
      end: {
        x: 4740,
        y: 5920,
      },
      id: "c31aee16-bd89-4383-84a8-2953ddcdbb68",
      name: "TwoWayVEdge",
      startId: "98c44f2c-6f3b-4ab5-bd2a-59b4cce3e409",
      endId: "cc833aee-3d20-4f34-98f1-aa6f64192a09",
    },
    {
      start: {
        x: 4200,
        y: 6060,
      },
      end: {
        x: 4380,
        y: 6080,
      },
      id: "180c9ae7-404c-4631-a76c-a2b13fd1ea5b",
      name: "TwoWayHEdge",
      startId: "b6bf2e1e-b20f-4dd7-a326-8f2169c0f62f",
      endId: "870ba194-5e1e-4669-8fa4-a9635b22b6a8",
    },
    {
      start: {
        x: 4380,
        y: 6080,
      },
      end: {
        x: 4260,
        y: 6460,
      },
      id: "728893c6-fd23-4d9e-9eb6-44e57fca6cd6",
      name: "TwoWayVEdge",
      startId: "870ba194-5e1e-4669-8fa4-a9635b22b6a8",
      endId: "ed929ea4-2730-4c70-af6d-68cc482e2fcd",
    },
    {
      start: {
        x: 4800,
        y: 6940,
      },
      end: {
        x: 4680,
        y: 6940,
      },
      id: "2b178f60-a42c-42f0-b8b5-46a3d142e3fd",
      name: "TwoWayHEdge",
      startId: "29242ec7-547a-4057-9611-c621674c18cd",
      endId: "11dd88e3-4d09-41e8-878d-166404daeb24",
    },
    {
      start: {
        x: 4680,
        y: 6940,
      },
      end: {
        x: 4560,
        y: 6940,
      },
      id: "b1506972-a876-47f0-9c9e-914d128028bd",
      name: "TwoWayHEdge",
      startId: "11dd88e3-4d09-41e8-878d-166404daeb24",
      endId: "2c16ff2e-212d-4326-8417-b350a16ce3a7",
    },
    {
      start: {
        x: 4560,
        y: 6940,
      },
      end: {
        x: 4400,
        y: 6940,
      },
      id: "50dbc664-5ef3-4c47-8f90-3092c08540d1",
      name: "TwoWayHEdge",
      startId: "2c16ff2e-212d-4326-8417-b350a16ce3a7",
      endId: "8ee0e31f-77e1-453b-8c4d-454d3e397e33",
    },
    {
      start: {
        x: 4260,
        y: 6460,
      },
      end: {
        x: 4260,
        y: 6680,
      },
      id: "31617441-aefc-4c06-a423-4a91941557a4",
      name: "TwoWayVEdge",
      startId: "ed929ea4-2730-4c70-af6d-68cc482e2fcd",
      endId: "19f54ae7-a645-4af2-ab78-008480895080",
    },
    {
      start: {
        x: 4260,
        y: 6460,
      },
      end: {
        x: 4400,
        y: 6460,
      },
      id: "b8ed90fa-e033-4ceb-9421-c37ceef47690",
      name: "TwoWayHEdge",
      startId: "ed929ea4-2730-4c70-af6d-68cc482e2fcd",
      endId: "819c4127-4cde-4907-81e9-914de25b11e0",
    },
    {
      start: {
        x: 4400,
        y: 6460,
      },
      end: {
        x: 4400,
        y: 6680,
      },
      id: "158b3686-9bba-4c42-bdb5-cfaa424c763a",
      name: "TwoWayVEdge",
      startId: "819c4127-4cde-4907-81e9-914de25b11e0",
      endId: "3bbceb25-16c4-4da3-8b35-33f85a917459",
    },
    {
      start: {
        x: 4400,
        y: 6680,
      },
      end: {
        x: 4540,
        y: 6680,
      },
      id: "68ec08ad-e2fc-48d6-97ae-261bfa3134a2",
      name: "TwoWayHEdge",
      startId: "3bbceb25-16c4-4da3-8b35-33f85a917459",
      endId: "cbbc4967-81ae-4bd2-98eb-402b46fe820a",
    },
    {
      start: {
        x: 4540,
        y: 6680,
      },
      end: {
        x: 4680,
        y: 6680,
      },
      id: "da098e36-0a8a-4d8a-a253-058c1cbf6c37",
      name: "TwoWayHEdge",
      startId: "cbbc4967-81ae-4bd2-98eb-402b46fe820a",
      endId: "9ae4561e-8444-442c-9e33-6fca76876ea6",
    },
    {
      start: {
        x: 4260,
        y: 6680,
      },
      end: {
        x: 4260,
        y: 6940,
      },
      id: "926e43a7-bac4-4f23-8635-4b686de018fb",
      name: "TwoWayVEdge",
      startId: "19f54ae7-a645-4af2-ab78-008480895080",
      endId: "b68e13fa-f9c7-4e75-802b-e9285bb643d7",
    },
    {
      start: {
        x: 4260,
        y: 6940,
      },
      end: {
        x: 4400,
        y: 6940,
      },
      id: "156db9b8-b8ca-4359-ad20-3a27cf2e4c5f",
      name: "TwoWayHEdge",
      startId: "b68e13fa-f9c7-4e75-802b-e9285bb643d7",
      endId: "8ee0e31f-77e1-453b-8c4d-454d3e397e33",
    },
    {
      start: {
        x: 4380,
        y: 6080,
      },
      end: {
        x: 4380,
        y: 5860,
      },
      id: "912c5445-5cc3-4083-99fc-cca2ca599ed0",
      name: "TwoWayVEdge",
      startId: "870ba194-5e1e-4669-8fa4-a9635b22b6a8",
      endId: "351ec349-c18e-485b-bdd6-985d786cd831",
    },
    {
      start: {
        x: 4380,
        y: 5860,
      },
      end: {
        x: 4380,
        y: 5580,
      },
      id: "7f7a1c40-6b9d-45c4-8388-a1421637662c",
      name: "TwoWayVEdge",
      startId: "351ec349-c18e-485b-bdd6-985d786cd831",
      endId: "ffaa6de8-c898-4d2f-bbe6-e6274d633bf1",
    },
    {
      start: {
        x: 4380,
        y: 5580,
      },
      end: {
        x: 4560,
        y: 5580,
      },
      id: "f0e45ba7-3e31-4779-b8d6-4cda10dcd98e",
      name: "TwoWayHEdge",
      startId: "ffaa6de8-c898-4d2f-bbe6-e6274d633bf1",
      endId: "d8eb0795-3674-4249-8900-3f8584694028",
    },
    {
      start: {
        x: 4560,
        y: 5580,
      },
      end: {
        x: 4560,
        y: 5380,
      },
      id: "cf887596-49e3-484e-ab27-12ebae2806c8",
      name: "TwoWayVEdge",
      startId: "d8eb0795-3674-4249-8900-3f8584694028",
      endId: "291960d4-844b-4c81-9823-074a2725696c",
    },
    {
      start: {
        x: 4560,
        y: 5380,
      },
      end: {
        x: 4700,
        y: 5380,
      },
      id: "3e92fc18-2f1b-4c97-acd4-d1a83da5c744",
      name: "TwoWayHEdge",
      startId: "291960d4-844b-4c81-9823-074a2725696c",
      endId: "d99ba8f1-9f96-444a-8250-83ce4e29d8a1",
    },
    {
      start: {
        x: 4700,
        y: 5380,
      },
      end: {
        x: 4700,
        y: 5240,
      },
      id: "8b96bf5c-9b2f-4953-a175-a1e36b03b3bf",
      name: "TwoWayVEdge",
      startId: "d99ba8f1-9f96-444a-8250-83ce4e29d8a1",
      endId: "63e2ff80-12ba-4d0b-bee1-da62994eb509",
    },
    {
      start: {
        x: 4700,
        y: 5240,
      },
      end: {
        x: 4840,
        y: 5240,
      },
      id: "0e595ccc-74d1-4ad0-aa04-b8e2d5448f2d",
      name: "TwoWayHEdge",
      startId: "63e2ff80-12ba-4d0b-bee1-da62994eb509",
      endId: "09c5b023-463d-419d-92de-261d9c6add91",
    },
    {
      start: {
        x: 4840,
        y: 5240,
      },
      end: {
        x: 5020,
        y: 5240,
      },
      id: "79bf617b-abc8-4fba-8545-74b073f4523c",
      name: "TwoWayHEdge",
      startId: "09c5b023-463d-419d-92de-261d9c6add91",
      endId: "dabef7e7-d168-47ec-add0-2aa9243a9583",
    },
    {
      start: {
        x: 5500,
        y: 5740,
      },
      end: {
        x: 5240,
        y: 5740,
      },
      id: "e3ed8c68-14ac-47b5-8a5b-d2d93a335433",
      name: "TwoWayHEdge",
      startId: "54a8b9ec-d14c-4c74-89cd-3a04ffbf7718",
      endId: "b6d9ab88-93f4-455f-9b52-9e253903a7be",
    },
    {
      start: {
        x: 5240,
        y: 5740,
      },
      end: {
        x: 5240,
        y: 5600,
      },
      id: "8f154ad0-bd81-4311-abec-8224bfa236da",
      name: "TwoWayVEdge",
      startId: "b6d9ab88-93f4-455f-9b52-9e253903a7be",
      endId: "cfb1da0a-df2b-4a00-b64e-12a233e211e7",
    },
    {
      start: {
        x: 5240,
        y: 5600,
      },
      end: {
        x: 5240,
        y: 5460,
      },
      id: "9932897b-1417-41ef-8d3d-361f8216e82f",
      name: "TwoWayVEdge",
      startId: "cfb1da0a-df2b-4a00-b64e-12a233e211e7",
      endId: "1cad5f2c-7f0b-42c4-ab99-e36789e14d2d",
    },
    {
      start: {
        x: 5240,
        y: 5600,
      },
      end: {
        x: 5020,
        y: 5600,
      },
      id: "e60969d2-99bc-4c6f-8e2a-d9a1c20ae44d",
      name: "TwoWayHEdge",
      startId: "cfb1da0a-df2b-4a00-b64e-12a233e211e7",
      endId: "0fd2a9c7-63ec-4acf-bc0f-8637fef7727b",
    },
    {
      start: {
        x: 5020,
        y: 5600,
      },
      end: {
        x: 4760,
        y: 5600,
      },
      id: "32b8feed-0afc-4a76-9b50-197fddd956a9",
      name: "TwoWayHEdge",
      startId: "0fd2a9c7-63ec-4acf-bc0f-8637fef7727b",
      endId: "8d11c5e9-0dd8-4e8e-b966-aa8b4a63b982",
    },
    {
      start: {
        x: 5020,
        y: 5600,
      },
      end: {
        x: 5020,
        y: 5440,
      },
      id: "f7792c31-c911-4e48-af40-5cb4b408fa63",
      name: "TwoWayVEdge",
      startId: "0fd2a9c7-63ec-4acf-bc0f-8637fef7727b",
      endId: "60709f3c-535e-490b-9115-cf2e465b215b",
    },
    {
      start: {
        x: 5020,
        y: 5440,
      },
      end: {
        x: 5020,
        y: 5240,
      },
      id: "1a20c2df-7497-4ea3-8aa0-5e9c7dfe21db",
      name: "TwoWayVEdge",
      startId: "60709f3c-535e-490b-9115-cf2e465b215b",
      endId: "dabef7e7-d168-47ec-add0-2aa9243a9583",
    },
    {
      start: {
        x: 6500,
        y: 5020,
      },
      end: {
        x: 6300,
        y: 5020,
      },
      id: "c47b8c3f-b19c-49c7-9635-16b382e97eda",
      name: "TwoWayHEdge",
      startId: "ba5e6ce4-129b-4136-8da5-b94ab2f40ed0",
      endId: "90e3c78d-1424-4ff6-af98-db7ff0d3012d",
    },
    {
      start: {
        x: 6300,
        y: 5020,
      },
      end: {
        x: 6060,
        y: 5020,
      },
      id: "0ab4e7be-4d63-40e8-9c77-b6699843878b",
      name: "TwoWayHEdge",
      startId: "90e3c78d-1424-4ff6-af98-db7ff0d3012d",
      endId: "c1d39ac3-72e3-4a74-ba4b-556e1d794d08",
    },
    {
      start: {
        x: 6940,
        y: 4600,
      },
      end: {
        x: 6740,
        y: 4600,
      },
      id: "cfa8305b-0957-47df-bf09-2f6ea35ee2a2",
      name: "TwoWayHEdge",
      startId: "83532ab7-ea59-47b7-b532-16ebce69e455",
      endId: "2d26ef41-f38f-4fa8-a987-5410b6c3b527",
    },
    {
      start: {
        x: 6740,
        y: 4600,
      },
      end: {
        x: 6520,
        y: 4600,
      },
      id: "78f36938-0511-4dc3-acb0-591bec192900",
      name: "TwoWayHEdge",
      startId: "2d26ef41-f38f-4fa8-a987-5410b6c3b527",
      endId: "5248bed1-540b-4065-8746-949f0b481ada",
    },
    {
      start: {
        x: 6520,
        y: 4600,
      },
      end: {
        x: 6280,
        y: 4600,
      },
      id: "ba3d6281-3c01-476f-9848-00d80490d098",
      name: "TwoWayHEdge",
      startId: "5248bed1-540b-4065-8746-949f0b481ada",
      endId: "9e18d839-4abb-4e55-9839-4eaaa696df7d",
    },
    {
      start: {
        x: 6280,
        y: 4600,
      },
      end: {
        x: 6040,
        y: 4600,
      },
      id: "107706e4-c0c9-4e74-84f8-a821e479e208",
      name: "TwoWayHEdge",
      startId: "9e18d839-4abb-4e55-9839-4eaaa696df7d",
      endId: "d4339577-838e-4d60-b13d-fcc2f64fd779",
    },
    {
      start: {
        x: 6040,
        y: 4600,
      },
      end: {
        x: 5980,
        y: 4820,
      },
      id: "2f7a49ea-53f0-419f-8d2e-11592916348d",
      name: "TwoWayVEdge",
      startId: "d4339577-838e-4d60-b13d-fcc2f64fd779",
      endId: "bb0342f3-3f0a-4d4d-aa65-4bb81e82e724",
    },
    {
      start: {
        x: 5980,
        y: 4820,
      },
      end: {
        x: 6060,
        y: 5020,
      },
      id: "99552b3b-5556-40d7-a904-35e12ec8146f",
      name: "TwoWayVEdge",
      startId: "bb0342f3-3f0a-4d4d-aa65-4bb81e82e724",
      endId: "c1d39ac3-72e3-4a74-ba4b-556e1d794d08",
    },
    {
      start: {
        x: 6300,
        y: 5520,
      },
      end: {
        x: 5800,
        y: 5520,
      },
      id: "275ea87e-05d3-497e-9c5c-df1de22b6556",
      name: "TwoWayHEdge",
      startId: "a603f125-23ef-4995-887f-4adc93e70e3b",
      endId: "703fe729-0bf9-4704-9a12-5df43f60f473",
    },
    {
      start: {
        x: 5800,
        y: 5520,
      },
      end: {
        x: 5800,
        y: 5380,
      },
      id: "7bfe3a88-f06d-476e-bb0e-c8bd8414f42b",
      name: "TwoWayVEdge",
      startId: "703fe729-0bf9-4704-9a12-5df43f60f473",
      endId: "913b4d18-24d1-41d0-a03b-61042a5d1c7c",
    },
    {
      start: {
        x: 5800,
        y: 5380,
      },
      end: {
        x: 5800,
        y: 5240,
      },
      id: "6b590acf-c1d7-4496-8f01-c2aec8c052be",
      name: "TwoWayVEdge",
      startId: "913b4d18-24d1-41d0-a03b-61042a5d1c7c",
      endId: "1bcae934-b452-44b3-a3ec-4d78e9473f90",
    },
    {
      start: {
        x: 5020,
        y: 5240,
      },
      end: {
        x: 5280,
        y: 5240,
      },
      id: "02a2d684-25b1-4c7a-939e-73c2a570b35e",
      name: "TwoWayHEdge",
      startId: "dabef7e7-d168-47ec-add0-2aa9243a9583",
      endId: "fe9d3525-5e43-4d48-8b2c-06b3d4da8acc",
    },
    {
      start: {
        x: 5280,
        y: 5240,
      },
      end: {
        x: 5520,
        y: 5240,
      },
      id: "a3d1484c-0a0e-4d1e-8d4c-97fcc9120126",
      name: "TwoWayHEdge",
      startId: "fe9d3525-5e43-4d48-8b2c-06b3d4da8acc",
      endId: "51918156-9021-4da6-9699-7aa2ec931da2",
    },
    {
      start: {
        x: 5520,
        y: 5240,
      },
      end: {
        x: 5800,
        y: 5240,
      },
      id: "9364c35d-32cb-4a1d-a8cd-398e384574d4",
      name: "TwoWayHEdge",
      startId: "51918156-9021-4da6-9699-7aa2ec931da2",
      endId: "1bcae934-b452-44b3-a3ec-4d78e9473f90",
    },
    {
      start: {
        x: 5520,
        y: 5240,
      },
      end: {
        x: 5520,
        y: 4820,
      },
      id: "ea8fda78-39e0-459f-871a-dd2b33440652",
      name: "TwoWayVEdge",
      startId: "51918156-9021-4da6-9699-7aa2ec931da2",
      endId: "f27c8f02-1dc2-4c82-879e-c9474d60beaf",
    },
    {
      start: {
        x: 5520,
        y: 4820,
      },
      end: {
        x: 5760,
        y: 4820,
      },
      id: "1794e612-6761-4789-b68a-c2e2e6562c8b",
      name: "TwoWayHEdge",
      startId: "f27c8f02-1dc2-4c82-879e-c9474d60beaf",
      endId: "9f479f60-e172-4c29-9d83-8709c65d75c1",
    },
    {
      start: {
        x: 5760,
        y: 4820,
      },
      end: {
        x: 5980,
        y: 4820,
      },
      id: "70c31911-165b-43cd-aa49-5401f081c867",
      name: "TwoWayHEdge",
      startId: "9f479f60-e172-4c29-9d83-8709c65d75c1",
      endId: "bb0342f3-3f0a-4d4d-aa65-4bb81e82e724",
    },
    {
      start: {
        x: 5520,
        y: 4820,
      },
      end: {
        x: 5260,
        y: 4820,
      },
      id: "394fd223-bba3-44ca-97a9-f9c8e34759ce",
      name: "TwoWayHEdge",
      startId: "f27c8f02-1dc2-4c82-879e-c9474d60beaf",
      endId: "28ca4829-c92b-4571-b0ba-cbe745b60d1c",
    },
    {
      start: {
        x: 5260,
        y: 4820,
      },
      end: {
        x: 5260,
        y: 4600,
      },
      id: "887b8a97-1b8c-4335-a597-1e110c93e211",
      name: "TwoWayVEdge",
      startId: "28ca4829-c92b-4571-b0ba-cbe745b60d1c",
      endId: "ac9f40ea-da18-4a09-9470-ed6878981413",
    },
    {
      start: {
        x: 5260,
        y: 4600,
      },
      end: {
        x: 5760,
        y: 4600,
      },
      id: "abb518f1-f477-4fea-adf1-4c026ff72856",
      name: "TwoWayHEdge",
      startId: "ac9f40ea-da18-4a09-9470-ed6878981413",
      endId: "caa5b6fd-392b-46b6-811a-225758052fb1",
    },
    {
      start: {
        x: 5760,
        y: 4600,
      },
      end: {
        x: 5760,
        y: 4820,
      },
      id: "f385549e-75af-48c3-b397-ba5a59aab942",
      name: "TwoWayVEdge",
      startId: "caa5b6fd-392b-46b6-811a-225758052fb1",
      endId: "9f479f60-e172-4c29-9d83-8709c65d75c1",
    },
    {
      start: {
        x: 5760,
        y: 4600,
      },
      end: {
        x: 5760,
        y: 4360,
      },
      id: "67e430fd-0fa4-49f6-8e0f-e65273be1442",
      name: "TwoWayVEdge",
      startId: "caa5b6fd-392b-46b6-811a-225758052fb1",
      endId: "9efe55a8-f455-4d8b-bc71-3ff2f02ab0e4",
    },
    {
      start: {
        x: 5760,
        y: 4360,
      },
      end: {
        x: 5980,
        y: 3380,
      },
      id: "6f6656a1-122e-4ca4-a25d-30370453be66",
      name: "TwoWayVEdge",
      startId: "9efe55a8-f455-4d8b-bc71-3ff2f02ab0e4",
      endId: "6bbcdeb5-f435-48a6-afb2-8ede76ca1a73",
    },
    {
      start: {
        x: 1960,
        y: 2460,
      },
      startId: "aaeb9d25-3961-4529-b9e3-fd6b92f455c2",
      end: {
        x: 2160,
        y: 2460,
      },
      endId: "cce4c524-0cee-4d29-b998-04377768c8da",
      name: "TwoWayHEdge",
      id: "727ee2b1-ffa8-45f6-ab34-4257146c068e",
    },
    {
      start: {
        x: 2160,
        y: 2460,
      },
      startId: "cce4c524-0cee-4d29-b998-04377768c8da",
      end: {
        x: 2160,
        y: 2840,
      },
      endId: "2877e24b-a5aa-4610-a0cb-afca864de892",
      name: "TwoWayVEdge",
      id: "bd58658e-6214-4418-b6d0-18a1d572d5f8",
    },
    {
      start: {
        x: 2960,
        y: 2460,
      },
      startId: "68d7fcd7-e960-4514-9603-f271284086d1",
      end: {
        x: 2720,
        y: 2460,
      },
      endId: "648aa064-fb51-4bbf-8b4c-f8f50e6e82f0",
      name: "TwoWayHEdge",
      id: "c6dc6dfa-9e8d-4022-8292-00149771c388",
    },
    {
      start: {
        x: 2720,
        y: 2460,
      },
      startId: "648aa064-fb51-4bbf-8b4c-f8f50e6e82f0",
      end: {
        x: 2720,
        y: 2240,
      },
      endId: "16dc9cb2-c319-48ab-89b2-5ff9a09e7594",
      name: "TwoWayVEdge",
      id: "1294098e-7868-460a-97a8-450d62aac954",
    },
    {
      start: {
        x: 2720,
        y: 2460,
      },
      startId: "648aa064-fb51-4bbf-8b4c-f8f50e6e82f0",
      end: {
        x: 2440,
        y: 2460,
      },
      endId: "969e7397-85e5-48f6-a40d-456bca2bcbbb",
      name: "TwoWayHEdge",
      id: "78c667de-1d76-4f1a-9a4c-6c056adb78c1",
    },
    {
      start: {
        x: 2440,
        y: 2460,
      },
      startId: "969e7397-85e5-48f6-a40d-456bca2bcbbb",
      end: {
        x: 2160,
        y: 2460,
      },
      endId: "cce4c524-0cee-4d29-b998-04377768c8da",
      name: "OneWayHEdge",
      id: "476314b7-555a-4ad0-8e20-c2a08e36a742",
    },
    {
      start: {
        x: 9500,
        y: 2580,
      },
      startId: "f2db85a0-d2b7-4dd5-a9a2-4bbd90f18a4a",
      end: {
        x: 9720,
        y: 2580,
      },
      endId: "658791c4-1096-4656-b767-a3df4caf7ede",
      name: "TwoWayHEdge",
      id: "4e4a10f8-3948-4d4b-8b74-101c2306d038",
    },
    {
      start: {
        x: 9720,
        y: 2580,
      },
      startId: "658791c4-1096-4656-b767-a3df4caf7ede",
      end: {
        x: 9720,
        y: 2400,
      },
      endId: "0e4e8736-d81a-486e-8049-5e86318444ee",
      name: "TwoWayVEdge",
      id: "3d61b057-4760-4e74-aafd-d2ff5f79308e",
    },
    {
      start: {
        x: 9720,
        y: 2580,
      },
      startId: "658791c4-1096-4656-b767-a3df4caf7ede",
      end: {
        x: 10060,
        y: 2580,
      },
      endId: "71c36b08-c9fd-42d7-b63a-f4a06f5889b4",
      name: "TwoWayHEdge",
      id: "8d367cd7-7eed-4b2f-a827-02635a870512",
    },
    {
      start: {
        x: 4660,
        y: 2260,
      },
      startId: "99264c2f-3462-420d-b85c-3cbe79ce6d51",
      end: {
        x: 4480,
        y: 2260,
      },
      endId: "aafeda89-3a98-4d54-929c-f295dbf47dee",
      name: "TwoWayHEdge",
      id: "5c124733-9dba-4d98-b8c5-e17ac2df28b7",
    },
    {
      start: {
        x: 4480,
        y: 2260,
      },
      startId: "aafeda89-3a98-4d54-929c-f295dbf47dee",
      end: {
        x: 4300,
        y: 2260,
      },
      endId: "5abbabec-0e8d-4d11-835c-1095ded5f143",
      name: "TwoWayHEdge",
      id: "20eaa939-e3ba-413d-b5b6-6cb1d66411cc",
    },
    {
      start: {
        x: 4480,
        y: 2260,
      },
      startId: "aafeda89-3a98-4d54-929c-f295dbf47dee",
      end: {
        x: 4480,
        y: 2620,
      },
      endId: "7e02e76b-8750-4d8f-8a4b-7a154726be9a",
      name: "TwoWayVEdge",
      id: "708b88ed-da0b-4859-a010-d92a545a9d3c",
    },
    {
      start: {
        x: 4300,
        y: 2260,
      },
      startId: "5abbabec-0e8d-4d11-835c-1095ded5f143",
      end: {
        x: 4300,
        y: 2420,
      },
      endId: "5a43a908-fe8b-4f09-bac0-4650767b92af",
      name: "TwoWayVEdge",
      id: "89abd63d-29c7-48d4-a8cb-03fce72f1780",
    },
    {
      start: {
        x: 4300,
        y: 2620,
      },
      startId: "63d77f19-376a-4994-9dbf-810eef7008ea",
      end: {
        x: 4140,
        y: 2620,
      },
      endId: "66267139-47f3-47d2-8840-7b389f19aaee",
      name: "TwoWayHEdge",
      id: "5386bc89-e84a-457e-995b-cbd15a0030c9",
    },
    {
      start: {
        x: 4140,
        y: 2620,
      },
      startId: "66267139-47f3-47d2-8840-7b389f19aaee",
      end: {
        x: 4140,
        y: 2260,
      },
      endId: "d016ba22-1124-49d8-b41d-32850b048589",
      name: "TwoWayVEdge",
      id: "6a256880-af80-4308-aad4-31c01b6c39a8",
    },
    {
      start: {
        x: 3700,
        y: 2420,
      },
      startId: "af8cc9f3-5031-49ff-92ee-6b2da5bd5dc0",
      end: {
        x: 3500,
        y: 2380,
      },
      endId: "a065eb39-be8a-4494-9f10-56a7781f8464",
      name: "TwoWayHEdge",
      id: "e0f377a9-5518-4894-b957-82c131943c73",
    },
    {
      start: {
        x: 8560,
        y: 4880,
      },
      startId: "24660a06-fb01-4c58-8913-275f0f822eb1",
      end: {
        x: 8560,
        y: 5100,
      },
      endId: "f2681860-c863-41f0-8180-0f77fafeed4f",
      name: "TwoWayVEdge",
      id: "ef196c38-b912-4d77-a3b8-1aac449e8d81",
    },
    {
      start: {
        x: 8560,
        y: 5100,
      },
      startId: "f2681860-c863-41f0-8180-0f77fafeed4f",
      end: {
        x: 8560,
        y: 5300,
      },
      endId: "661356f3-f7d5-404c-ab04-d97c3cf2345d",
      name: "TwoWayVEdge",
      id: "69e0ddf7-81a8-48db-b671-017d71736e54",
    },
    {
      start: {
        x: 7480,
        y: 5300,
      },
      startId: "4be7aa7c-e6d5-4fad-bcfb-9c73d56f8e14",
      end: {
        x: 7480,
        y: 5100,
      },
      endId: "c9514ae3-0c66-4797-aac7-c4693765d28e",
      name: "TwoWayVEdge",
      id: "4d8f1e78-0450-47a3-9133-bc53f8fa6896",
    },
    {
      start: {
        x: 7940,
        y: 5300,
      },
      startId: "d4e376b8-4242-46c1-a233-fe767991debd",
      end: {
        x: 7940,
        y: 5100,
      },
      endId: "9ab009e3-fb04-4791-8dba-c2b3ebe48e63",
      name: "TwoWayVEdge",
      id: "20bc8e6d-46b7-4e36-96ba-8d4cb65e7f97",
    },
    {
      start: {
        x: 7480,
        y: 5100,
      },
      startId: "c9514ae3-0c66-4797-aac7-c4693765d28e",
      end: {
        x: 7480,
        y: 4900,
      },
      endId: "851d75dc-ae5b-4663-85fa-eba6050d83b3",
      name: "TwoWayVEdge",
      id: "16e78420-0727-417a-88b3-bd2a449d5fc9",
    },
    {
      start: {
        x: 7940,
        y: 5100,
      },
      startId: "9ab009e3-fb04-4791-8dba-c2b3ebe48e63",
      end: {
        x: 7940,
        y: 4900,
      },
      endId: "25ccf3f7-0ed0-4d7a-8805-75fd99423527",
      name: "TwoWayVEdge",
      id: "d54de841-71cd-4e7a-a7ec-9c3cf143c3b8",
    },
    {
      start: {
        x: 7480,
        y: 4900,
      },
      startId: "851d75dc-ae5b-4663-85fa-eba6050d83b3",
      end: {
        x: 7720,
        y: 4880,
      },
      endId: "e962a6aa-155a-4d7a-92d7-5d5e0eb8cace",
      name: "TwoWayHEdge",
      id: "8e662346-a984-4eaa-be01-300fb2508cc3",
    },
    {
      start: {
        x: 7720,
        y: 4880,
      },
      startId: "e962a6aa-155a-4d7a-92d7-5d5e0eb8cace",
      end: {
        x: 7940,
        y: 4900,
      },
      endId: "25ccf3f7-0ed0-4d7a-8805-75fd99423527",
      name: "TwoWayHEdge",
      id: "7567feca-26ba-42ff-a674-4653f73c0a4e",
    },
    {
      start: {
        x: 7720,
        y: 4880,
      },
      startId: "e962a6aa-155a-4d7a-92d7-5d5e0eb8cace",
      end: {
        x: 7720,
        y: 4680,
      },
      endId: "7b8e9c81-bf9d-44a1-a21a-1ef2f54905c5",
      name: "TwoWayVEdge",
      id: "6b62c6b5-034a-450d-af19-0d80866639c5",
    },
    {
      start: {
        x: 7720,
        y: 4680,
      },
      startId: "7b8e9c81-bf9d-44a1-a21a-1ef2f54905c5",
      end: {
        x: 7720,
        y: 4420,
      },
      endId: "cd37ec09-e29c-460d-a184-bc29197761b8",
      name: "TwoWayVEdge",
      id: "64153137-a401-49f7-8ec3-6480b07084a6",
    },
    {
      start: {
        x: 7980,
        y: 4160,
      },
      startId: "0203890c-753a-41bc-bd85-5b3953e7b9d3",
      end: {
        x: 7980,
        y: 3920,
      },
      endId: "f3cfd709-4639-4318-b451-f8240a056a76",
      name: "TwoWayVEdge",
      id: "87bb9bea-0ecf-47a8-ba16-e92956332c7a",
    },
    {
      start: {
        x: 7980,
        y: 3920,
      },
      startId: "f3cfd709-4639-4318-b451-f8240a056a76",
      end: {
        x: 7720,
        y: 3920,
      },
      endId: "4ed1d0f7-7493-45a9-9866-46beb9d7eb46",
      name: "TwoWayHEdge",
      id: "ea10848c-6c87-4c65-8ff8-8712e297d9f9",
    },
    {
      start: {
        x: 7720,
        y: 3920,
      },
      startId: "4ed1d0f7-7493-45a9-9866-46beb9d7eb46",
      end: {
        x: 7440,
        y: 3920,
      },
      endId: "ea8acc84-c3aa-441b-b63c-e55c340b633c",
      name: "TwoWayHEdge",
      id: "041ed7eb-5710-422f-8504-d26802dd0bdb",
    },
    {
      start: {
        x: 7440,
        y: 3920,
      },
      startId: "ea8acc84-c3aa-441b-b63c-e55c340b633c",
      end: {
        x: 7440,
        y: 3700,
      },
      endId: "c8f64d7d-37f2-4e47-b787-de774cd17eb5",
      name: "TwoWayVEdge",
      id: "b4620033-d8b0-43fc-94b9-19b3c8628008",
    },
    {
      start: {
        x: 7440,
        y: 3700,
      },
      startId: "c8f64d7d-37f2-4e47-b787-de774cd17eb5",
      end: {
        x: 7440,
        y: 3500,
      },
      endId: "547b2b5a-438b-42cb-b983-f9db644328eb",
      name: "TwoWayVEdge",
      id: "b2ef6716-9c14-4cca-996a-b88ebcf16248",
    },
    {
      start: {
        x: 7720,
        y: 4420,
      },
      startId: "cd37ec09-e29c-460d-a184-bc29197761b8",
      end: {
        x: 7440,
        y: 4420,
      },
      endId: "e4d8e266-5c27-4b1d-9962-bf903598b537",
      name: "TwoWayHEdge",
      id: "acfee369-4a0b-48f5-8735-279afa1546b1",
    },
    {
      start: {
        x: 7440,
        y: 4420,
      },
      startId: "e4d8e266-5c27-4b1d-9962-bf903598b537",
      end: {
        x: 7180,
        y: 4420,
      },
      endId: "1c2e8cb1-5615-490c-be6d-acd36ef19cf7",
      name: "TwoWayHEdge",
      id: "54d9fa73-c9b9-43b5-8581-ea8862a9ad02",
    },
    {
      start: {
        x: 7180,
        y: 4420,
      },
      startId: "1c2e8cb1-5615-490c-be6d-acd36ef19cf7",
      end: {
        x: 6940,
        y: 4420,
      },
      endId: "d2934720-9648-4781-ba5e-b9b7378a1091",
      name: "TwoWayHEdge",
      id: "c345778f-298c-4db0-accd-171f34c70fae",
    },
    {
      start: {
        x: 6940,
        y: 4420,
      },
      startId: "d2934720-9648-4781-ba5e-b9b7378a1091",
      end: {
        x: 6720,
        y: 4420,
      },
      endId: "8614e318-60cf-4a15-be0e-ef9d4326a708",
      name: "TwoWayHEdge",
      id: "208d6975-5821-44f9-a02e-e601407af090",
    },
    {
      start: {
        x: 6720,
        y: 4420,
      },
      startId: "8614e318-60cf-4a15-be0e-ef9d4326a708",
      end: {
        x: 6720,
        y: 4120,
      },
      endId: "a4ac2115-372f-4448-ac0f-7de24101196a",
      name: "TwoWayVEdge",
      id: "a79a7555-0c2c-4aae-aa9e-118e7904439b",
    },
    {
      start: {
        x: 7720,
        y: 4420,
      },
      startId: "cd37ec09-e29c-460d-a184-bc29197761b8",
      end: {
        x: 7720,
        y: 4160,
      },
      endId: "e1530b5b-3175-4fb6-a082-ddb70e1e9ca9",
      name: "TwoWayVEdge",
      id: "adaa0f05-e209-45fe-9f38-6fc1238834b8",
    },
    {
      start: {
        x: 7720,
        y: 4160,
      },
      startId: "e1530b5b-3175-4fb6-a082-ddb70e1e9ca9",
      end: {
        x: 7980,
        y: 4160,
      },
      endId: "0203890c-753a-41bc-bd85-5b3953e7b9d3",
      name: "TwoWayHEdge",
      id: "2afcf164-8c65-4a60-aca8-1fcf82587c8b",
    },
    {
      start: {
        x: 6720,
        y: 4120,
      },
      startId: "a4ac2115-372f-4448-ac0f-7de24101196a",
      end: {
        x: 6720,
        y: 3820,
      },
      endId: "f3bcea10-8802-4252-9f7b-7cd3b2e02ed8",
      name: "TwoWayVEdge",
      id: "f95c4cee-380e-48c6-88f4-7b053668604f",
    },
    {
      start: {
        x: 6720,
        y: 3820,
      },
      startId: "f3bcea10-8802-4252-9f7b-7cd3b2e02ed8",
      end: {
        x: 6940,
        y: 3820,
      },
      endId: "a27273dd-688d-4579-82ff-c9c1e1b5e7ff",
      name: "TwoWayHEdge",
      id: "66208d07-a2c3-4a68-bae1-b6fc22348d0c",
    },
    {
      start: {
        x: 6940,
        y: 3820,
      },
      startId: "a27273dd-688d-4579-82ff-c9c1e1b5e7ff",
      end: {
        x: 6880,
        y: 3500,
      },
      endId: "d1d2b4d7-be08-4a95-ac9d-5e227189b6b8",
      name: "TwoWayVEdge",
      id: "3072cbaa-2a7e-4fc0-84c5-658e453b17bd",
    },
    {
      start: {
        x: 6880,
        y: 3500,
      },
      startId: "d1d2b4d7-be08-4a95-ac9d-5e227189b6b8",
      end: {
        x: 6940,
        y: 3220,
      },
      endId: "d0a1d19a-b099-4e7d-b1f3-db04defe95b9",
      name: "TwoWayVEdge",
      id: "85b8b2e8-b185-4199-ac92-da393b846313",
    },
    {
      start: {
        x: 6940,
        y: 3220,
      },
      startId: "d0a1d19a-b099-4e7d-b1f3-db04defe95b9",
      end: {
        x: 6660,
        y: 3220,
      },
      endId: "a7c94a71-b69f-4a25-a26e-b1a458062d15",
      name: "TwoWayHEdge",
      id: "4d18b375-6448-4f70-80a9-bb87a9b366b3",
    },
    {
      start: {
        x: 6660,
        y: 3220,
      },
      startId: "a7c94a71-b69f-4a25-a26e-b1a458062d15",
      end: {
        x: 6640,
        y: 2920,
      },
      endId: "13244992-cde2-4cd4-af68-3eaad6291aef",
      name: "TwoWayVEdge",
      id: "ed5cd8e1-9a1a-4046-99a7-3c2e6a9de5df",
    },
    {
      start: {
        x: 6640,
        y: 2920,
      },
      startId: "13244992-cde2-4cd4-af68-3eaad6291aef",
      end: {
        x: 6740,
        y: 2620,
      },
      endId: "38fa95ba-9ce7-471a-9f05-b37437481829",
      name: "TwoWayVEdge",
      id: "ce872b67-9af5-4d4e-84a9-cde880694942",
    },
    {
      start: {
        x: 6740,
        y: 2620,
      },
      startId: "38fa95ba-9ce7-471a-9f05-b37437481829",
      end: {
        x: 7060,
        y: 2600,
      },
      endId: "fdfe3d97-8b67-4255-a247-a3b6626c0579",
      name: "TwoWayHEdge",
      id: "7fbadc15-58f0-4052-8bb6-7822c2c320d6",
    },
    {
      start: {
        x: 7060,
        y: 2600,
      },
      startId: "fdfe3d97-8b67-4255-a247-a3b6626c0579",
      end: {
        x: 7360,
        y: 2640,
      },
      endId: "2d22097e-6403-4db0-a1e3-2afdc3f97804",
      name: "TwoWayHEdge",
      id: "7a3e54a5-51a8-406f-972a-c69d5ab7acba",
    },
    {
      start: {
        x: 7360,
        y: 2640,
      },
      startId: "2d22097e-6403-4db0-a1e3-2afdc3f97804",
      end: {
        x: 7400,
        y: 2380,
      },
      endId: "80f38e71-8800-4092-a662-298decdb1882",
      name: "TwoWayVEdge",
      id: "097b76f1-f9a0-439b-a036-d6426b73fb87",
    },
    {
      start: {
        x: 7400,
        y: 2380,
      },
      startId: "80f38e71-8800-4092-a662-298decdb1882",
      end: {
        x: 7680,
        y: 2380,
      },
      endId: "09609bef-e331-4efa-8a47-e5409f9040a1",
      name: "TwoWayHEdge",
      id: "c70bf46c-76e0-4d81-bcc9-54ed15ec5e6e",
    },
    {
      start: {
        x: 7680,
        y: 2380,
      },
      startId: "09609bef-e331-4efa-8a47-e5409f9040a1",
      end: {
        x: 7920,
        y: 2340,
      },
      endId: "70e01e2b-1fe4-437e-92b2-42513c3e5524",
      name: "TwoWayHEdge",
      id: "ff0d2e8a-080d-43f1-9ab6-d5470497ce96",
    },
    {
      start: {
        x: 7920,
        y: 2340,
      },
      startId: "70e01e2b-1fe4-437e-92b2-42513c3e5524",
      end: {
        x: 8160,
        y: 2380,
      },
      endId: "ffd1b0ae-0872-41fc-899e-f40580c7fbca",
      name: "TwoWayHEdge",
      id: "fe82ad4e-bdf6-4dcf-9b10-df3f6f849672",
    },
    {
      start: {
        x: 8160,
        y: 2380,
      },
      startId: "ffd1b0ae-0872-41fc-899e-f40580c7fbca",
      end: {
        x: 8180,
        y: 2720,
      },
      endId: "b64ac266-aeed-4e2b-b702-0fb8cc39f3fc",
      name: "TwoWayVEdge",
      id: "bebf3d0c-957d-4c51-964f-da98827c0206",
    },
    {
      start: {
        x: 7680,
        y: 2380,
      },
      startId: "09609bef-e331-4efa-8a47-e5409f9040a1",
      end: {
        x: 7700,
        y: 2700,
      },
      endId: "9a1c0109-dfe3-43b7-a8a1-b4c926343ffb",
      name: "TwoWayVEdge",
      id: "c00ca638-aa9a-495c-9b50-1df8b09d419b",
    },
    {
      start: {
        x: 7700,
        y: 2700,
      },
      startId: "9a1c0109-dfe3-43b7-a8a1-b4c926343ffb",
      end: {
        x: 8180,
        y: 2720,
      },
      endId: "b64ac266-aeed-4e2b-b702-0fb8cc39f3fc",
      name: "TwoWayHEdge",
      id: "b90c9bf9-2e0f-4506-aa41-174aae62c65b",
    },
    {
      start: {
        x: 8180,
        y: 2720,
      },
      startId: "b64ac266-aeed-4e2b-b702-0fb8cc39f3fc",
      end: {
        x: 8140,
        y: 2980,
      },
      endId: "1bcf7c80-990f-4360-ac2a-9c5a9a1444fa",
      name: "TwoWayVEdge",
      id: "c1260fee-57da-4160-b791-886e561e1a8f",
    },
    {
      start: {
        x: 8140,
        y: 2980,
      },
      startId: "1bcf7c80-990f-4360-ac2a-9c5a9a1444fa",
      end: {
        x: 7700,
        y: 3040,
      },
      endId: "11a7477b-c9ca-447e-a9f6-663d242561e8",
      name: "TwoWayHEdge",
      id: "6f0367af-f77a-463a-b406-da4ec57bd274",
    },
    {
      start: {
        x: 7700,
        y: 3040,
      },
      startId: "11a7477b-c9ca-447e-a9f6-663d242561e8",
      end: {
        x: 7640,
        y: 3300,
      },
      endId: "89807f00-8f8a-427e-a8b9-28e313cb62f5",
      name: "TwoWayVEdge",
      id: "f7bf274f-d42c-4fb3-8cb0-41f5cf139c05",
    },
    {
      start: {
        x: 7640,
        y: 3300,
      },
      startId: "89807f00-8f8a-427e-a8b9-28e313cb62f5",
      end: {
        x: 7300,
        y: 3320,
      },
      endId: "ba13a2f3-602c-4ab7-8918-cef38a9ebeb2",
      name: "TwoWayHEdge",
      id: "83f464bd-b118-44f9-aeee-42830174c1d0",
    },
    {
      start: {
        x: 7300,
        y: 3320,
      },
      startId: "ba13a2f3-602c-4ab7-8918-cef38a9ebeb2",
      end: {
        x: 7260,
        y: 3560,
      },
      endId: "dea4f473-0db5-4010-abde-0b79535f543e",
      name: "TwoWayVEdge",
      id: "08c89b10-cc1f-4781-8643-8a7389737262",
    },
    {
      start: {
        x: 7260,
        y: 3560,
      },
      startId: "dea4f473-0db5-4010-abde-0b79535f543e",
      end: {
        x: 7040,
        y: 3600,
      },
      endId: "0c7ca890-0948-425f-aaa8-d450a6f19798",
      name: "TwoWayHEdge",
      id: "0d51efb4-1022-46e1-becc-93fd26a22f89",
    },
    {
      start: {
        x: 12200,
        y: 1620,
      },
      startId: "8a5e6dfb-f29f-4790-bdad-e6d201d464b5",
      end: {
        x: 12260,
        y: 1160,
      },
      endId: "711f14ab-2391-476a-8b5a-55551c7cf1bc",
      name: "TwoWayVEdge",
      id: "a32e344a-0c4f-4210-81aa-b30a2f93e37c",
    },
    {
      start: {
        x: 12260,
        y: 1160,
      },
      startId: "711f14ab-2391-476a-8b5a-55551c7cf1bc",
      end: {
        x: 12320,
        y: 700,
      },
      endId: "821ee1e0-ea44-40f8-be0d-b7d2a6881ef2",
      name: "TwoWayVEdge",
      id: "e550dc34-bee3-4fd6-8df3-baac7ee3ef2d",
    },
    {
      start: {
        x: 12320,
        y: 700,
      },
      startId: "821ee1e0-ea44-40f8-be0d-b7d2a6881ef2",
      end: {
        x: 12020,
        y: 680,
      },
      endId: "70742c92-ea8b-4669-95c0-5a33c393b072",
      name: "TwoWayHEdge",
      id: "225ff668-2d81-426e-ba13-c7c46f02223e",
    },
    {
      start: {
        x: 12020,
        y: 680,
      },
      startId: "70742c92-ea8b-4669-95c0-5a33c393b072",
      end: {
        x: 11940,
        y: 340,
      },
      endId: "46b65691-10e5-48ee-a3d8-7eadd022d5c4",
      name: "TwoWayVEdge",
      id: "21e913ef-2131-4522-a2e2-65a5378b2c33",
    },
    {
      start: {
        x: 11940,
        y: 340,
      },
      startId: "46b65691-10e5-48ee-a3d8-7eadd022d5c4",
      end: {
        x: 12020,
        y: 0,
      },
      endId: "ecc6b82f-3a20-4d5f-bb3f-c88708838371",
      name: "TwoWayVEdge",
      id: "1b2667e3-d5aa-4e4e-a3ea-d1d3fc621e22",
    },
    {
      start: {
        x: 12020,
        y: 0,
      },
      startId: "ecc6b82f-3a20-4d5f-bb3f-c88708838371",
      end: {
        x: 11680,
        y: -40,
      },
      endId: "46c738be-5dd1-48f3-95c3-354f82712adf",
      name: "TwoWayHEdge",
      id: "bea8dce4-995c-4743-9e3c-35606a5d1b4c",
    },
    {
      start: {
        x: 11680,
        y: -40,
      },
      startId: "46c738be-5dd1-48f3-95c3-354f82712adf",
      end: {
        x: 11760,
        y: -360,
      },
      endId: "0d99633a-bbf7-486d-b9a5-c98cdb5ed91b",
      name: "TwoWayVEdge",
      id: "19721082-9368-46ca-9c03-73f376fd4e20",
    },
    {
      start: {
        x: 11760,
        y: -360,
      },
      startId: "0d99633a-bbf7-486d-b9a5-c98cdb5ed91b",
      end: {
        x: 11420,
        y: -380,
      },
      endId: "c12b2b9d-1fee-4881-9bb5-6a840973cc51",
      name: "TwoWayHEdge",
      id: "e2bed64b-80d0-44ab-a192-3a7becfcbde3",
    },
    {
      start: {
        x: 11420,
        y: -380,
      },
      startId: "c12b2b9d-1fee-4881-9bb5-6a840973cc51",
      end: {
        x: 11420,
        y: -660,
      },
      endId: "e3a8a0bb-892f-4703-b8e4-77531ba4a5db",
      name: "TwoWayVEdge",
      id: "f1f0eafa-0d7a-41e2-a659-c3384d87a5d4",
    },
    {
      start: {
        x: 11420,
        y: -380,
      },
      startId: "c12b2b9d-1fee-4881-9bb5-6a840973cc51",
      end: {
        x: 11060,
        y: -340,
      },
      endId: "60c21590-262f-47aa-bf46-f9bd36effc00",
      name: "TwoWayHEdge",
      id: "8ef2dc4a-3f06-4222-ba8f-74d3456fbdb3",
    },
    {
      start: {
        x: 11060,
        y: -340,
      },
      startId: "60c21590-262f-47aa-bf46-f9bd36effc00",
      end: {
        x: 10720,
        y: -400,
      },
      endId: "6b13f21f-5a2c-4453-bad8-f7714138be95",
      name: "TwoWayHEdge",
      id: "1b30bb45-dc35-4ca8-87e3-d88df230414a",
    },
    {
      start: {
        x: 10720,
        y: -400,
      },
      startId: "6b13f21f-5a2c-4453-bad8-f7714138be95",
      end: {
        x: 10400,
        y: -360,
      },
      endId: "59f6d795-ba7c-4936-99fb-1a45084c9bd6",
      name: "TwoWayHEdge",
      id: "a477f3b0-4ca3-47f1-808e-70a29013af50",
    },
    {
      start: {
        x: 10400,
        y: -360,
      },
      startId: "59f6d795-ba7c-4936-99fb-1a45084c9bd6",
      end: {
        x: 10340,
        y: -660,
      },
      endId: "7d7e3fae-a2f5-4d97-a8df-21767ce0f526",
      name: "TwoWayVEdge",
      id: "ff900657-9dec-4ffe-9c5e-549269df2576",
    },
    {
      start: {
        x: 10340,
        y: -660,
      },
      startId: "7d7e3fae-a2f5-4d97-a8df-21767ce0f526",
      end: {
        x: 10400,
        y: -980,
      },
      endId: "3ba4e09d-b31f-4685-bdbf-6bf816afb10c",
      name: "TwoWayVEdge",
      id: "9498ca06-7c25-4362-85d8-d3fa6358a04e",
    },
    {
      start: {
        x: 10400,
        y: -980,
      },
      startId: "3ba4e09d-b31f-4685-bdbf-6bf816afb10c",
      end: {
        x: 10320,
        y: -1280,
      },
      endId: "4e87e85e-9221-464f-812f-c1ca01a33bfe",
      name: "TwoWayVEdge",
      id: "b0881151-6da7-463e-b673-5afca42f763f",
    },
    {
      start: {
        x: 10320,
        y: -1280,
      },
      startId: "4e87e85e-9221-464f-812f-c1ca01a33bfe",
      end: {
        x: 10640,
        y: -1320,
      },
      endId: "ec84fab9-edd2-4aeb-b6d2-5fb398422cab",
      name: "TwoWayHEdge",
      id: "6acf5c5c-5dd1-4dcc-a62b-69f18a8f2427",
    },
    {
      start: {
        x: 10640,
        y: -1320,
      },
      startId: "ec84fab9-edd2-4aeb-b6d2-5fb398422cab",
      end: {
        x: 10940,
        y: -1280,
      },
      endId: "6b406338-75a7-415f-9765-31dea786f3fd",
      name: "TwoWayHEdge",
      id: "792d97b1-c1f8-4e0c-ac87-eeb076640aa9",
    },
    {
      start: {
        x: 10940,
        y: -1280,
      },
      startId: "6b406338-75a7-415f-9765-31dea786f3fd",
      end: {
        x: 11020,
        y: -1940,
      },
      endId: "864a59a8-037d-40c4-b48a-8997e644a406",
      name: "TwoWayVEdge",
      id: "e9137bfa-3729-493a-97a5-cc3c3783ff76",
    },
    {
      start: {
        x: 11020,
        y: -1940,
      },
      startId: "864a59a8-037d-40c4-b48a-8997e644a406",
      end: {
        x: 11340,
        y: -2020,
      },
      endId: "bba70ccc-ec4e-4d07-8b95-6a5f20438952",
      name: "TwoWayHEdge",
      id: "a722eb0d-3925-4228-a6d5-2916d57880df",
    },
    {
      start: {
        x: 11340,
        y: -2020,
      },
      startId: "bba70ccc-ec4e-4d07-8b95-6a5f20438952",
      end: {
        x: 11660,
        y: -1940,
      },
      endId: "93186749-a439-4fd3-b4ab-4af5a94e126f",
      name: "TwoWayHEdge",
      id: "afcf8e5c-d033-42e0-9320-3a405ad76abf",
    },
    {
      start: {
        x: 11660,
        y: -1940,
      },
      startId: "93186749-a439-4fd3-b4ab-4af5a94e126f",
      end: {
        x: 11700,
        y: -1620,
      },
      endId: "474fb8f5-b151-487d-9869-f1d22ae3116d",
      name: "TwoWayVEdge",
      id: "5f1e81e3-a764-4dae-a7b4-0294f41a7f1b",
    },
    {
      start: {
        x: 11700,
        y: -1620,
      },
      startId: "474fb8f5-b151-487d-9869-f1d22ae3116d",
      end: {
        x: 11660,
        y: -1260,
      },
      endId: "46e36bde-d5f2-4969-847e-3d80031bc3a7",
      name: "TwoWayVEdge",
      id: "c2be2948-f53c-4eef-86ed-e150cefbfd57",
    },
    {
      start: {
        x: 11660,
        y: -1260,
      },
      startId: "46e36bde-d5f2-4969-847e-3d80031bc3a7",
      end: {
        x: 12040,
        y: -1240,
      },
      endId: "333d2f31-e7f8-4387-8d1a-475c32080912",
      name: "TwoWayHEdge",
      id: "cad3edfd-18d6-4182-bce0-485c8ed7465b",
    },
    {
      start: {
        x: 12040,
        y: -1240,
      },
      startId: "333d2f31-e7f8-4387-8d1a-475c32080912",
      end: {
        x: 12420,
        y: -1300,
      },
      endId: "da919845-178f-4307-8839-6388fdd5ab52",
      name: "TwoWayHEdge",
      id: "28f25be6-d7c6-44cc-a54d-282c79840f4d",
    },
    {
      start: {
        x: 12420,
        y: -1300,
      },
      startId: "da919845-178f-4307-8839-6388fdd5ab52",
      end: {
        x: 12780,
        y: -1240,
      },
      endId: "160c42b2-bd8c-41a0-a3d0-c94c9e65b85d",
      name: "TwoWayHEdge",
      id: "5817acaa-24ee-485d-94d0-f5f6240bb11c",
    },
    {
      start: {
        x: 12780,
        y: -1240,
      },
      startId: "160c42b2-bd8c-41a0-a3d0-c94c9e65b85d",
      end: {
        x: 12700,
        y: -960,
      },
      endId: "023800ab-4d52-4554-9d6f-68961e17f816",
      name: "TwoWayVEdge",
      id: "b7754b9a-4d24-4ce1-8753-94fe797977c4",
    },
    {
      start: {
        x: 12700,
        y: -960,
      },
      startId: "023800ab-4d52-4554-9d6f-68961e17f816",
      end: {
        x: 12740,
        y: -700,
      },
      endId: "a60737b3-4e4c-4e9b-b9f5-028f9d9389a2",
      name: "TwoWayVEdge",
      id: "dc5b7d1d-6b97-407d-b631-e701c8cc684d",
    },
    {
      start: {
        x: 12740,
        y: -700,
      },
      startId: "a60737b3-4e4c-4e9b-b9f5-028f9d9389a2",
      end: {
        x: 12660,
        y: -440,
      },
      endId: "8783855b-5505-46b5-bc31-ca0a367135cd",
      name: "TwoWayVEdge",
      id: "ce4a3829-9a52-4a04-ab5f-372d81654d51",
    },
    {
      start: {
        x: 12660,
        y: -440,
      },
      startId: "8783855b-5505-46b5-bc31-ca0a367135cd",
      end: {
        x: 12960,
        y: -480,
      },
      endId: "2eaf8fe2-3184-4404-a23e-01f3647ae265",
      name: "TwoWayHEdge",
      id: "528f71fc-d79b-42bc-95fd-4b330bc06c07",
    },
    {
      start: {
        x: 12700,
        y: -960,
      },
      startId: "023800ab-4d52-4554-9d6f-68961e17f816",
      end: {
        x: 13000,
        y: -940,
      },
      endId: "8d507b57-cc2c-4827-9547-752613754b89",
      name: "TwoWayHEdge",
      id: "89824b53-2b4d-4ab3-8a12-6d1e6cd4ce85",
    },
    {
      start: {
        x: 13000,
        y: -940,
      },
      startId: "8d507b57-cc2c-4827-9547-752613754b89",
      end: {
        x: 12960,
        y: -480,
      },
      endId: "2eaf8fe2-3184-4404-a23e-01f3647ae265",
      name: "TwoWayVEdge",
      id: "bb4c7755-0359-46c8-aa60-6b00dbdea68a",
    },
    {
      start: {
        x: 12660,
        y: -440,
      },
      startId: "8783855b-5505-46b5-bc31-ca0a367135cd",
      end: {
        x: 12400,
        y: -480,
      },
      endId: "c2c16ded-efc3-4036-a558-9a90282b2b81",
      name: "TwoWayHEdge",
      id: "ed9c4a8e-c725-4b31-890a-cc82ae50c511",
    },
    {
      start: {
        x: 12400,
        y: -480,
      },
      startId: "c2c16ded-efc3-4036-a558-9a90282b2b81",
      end: {
        x: 12340,
        y: -220,
      },
      endId: "06cd0030-ca41-4e70-8ee3-86fbd82d0487",
      name: "TwoWayVEdge",
      id: "9ce057c1-54f7-4c5a-bbe5-70c1b1128de9",
    },
    {
      start: {
        x: 12660,
        y: -440,
      },
      startId: "8783855b-5505-46b5-bc31-ca0a367135cd",
      end: {
        x: 12700,
        y: 20,
      },
      endId: "226e6a74-da4f-4e07-8104-a8a3b0dde402",
      name: "TwoWayVEdge",
      id: "3f2d859c-9947-4f93-8146-6948b2032f13",
    },
    {
      start: {
        x: 12700,
        y: 20,
      },
      startId: "226e6a74-da4f-4e07-8104-a8a3b0dde402",
      end: {
        x: 12380,
        y: 60,
      },
      endId: "fef1bbaf-5068-4e1e-992b-312292c07cb3",
      name: "TwoWayHEdge",
      id: "2c300eaa-aa80-45e5-b019-98e6edef6944",
    },
    {
      start: {
        x: 12340,
        y: -220,
      },
      startId: "06cd0030-ca41-4e70-8ee3-86fbd82d0487",
      end: {
        x: 12380,
        y: 60,
      },
      endId: "fef1bbaf-5068-4e1e-992b-312292c07cb3",
      name: "TwoWayVEdge",
      id: "5bc09044-6916-4706-a61e-c6a99da9145f",
    },
    {
      start: {
        x: 12340,
        y: -220,
      },
      startId: "06cd0030-ca41-4e70-8ee3-86fbd82d0487",
      end: {
        x: 12120,
        y: -140,
      },
      endId: "852045ec-f977-4b97-aa74-69304635d045",
      name: "TwoWayHEdge",
      id: "362e75f4-903b-40ef-950e-9ac1cc08c5f5",
    },
    {
      start: {
        x: 12120,
        y: -140,
      },
      startId: "852045ec-f977-4b97-aa74-69304635d045",
      end: {
        x: 11940,
        y: -200,
      },
      endId: "da5efa67-099a-4457-971d-90e2f8cb1f43",
      name: "TwoWayHEdge",
      id: "e882e9b6-3e0a-4aad-8321-e98a786b0284",
    },
    {
      start: {
        x: 11940,
        y: -200,
      },
      startId: "da5efa67-099a-4457-971d-90e2f8cb1f43",
      end: {
        x: 11920,
        y: -400,
      },
      endId: "b63382e6-e30e-4ed4-a67f-35e3e411dc94",
      name: "TwoWayVEdge",
      id: "594bef31-9c14-4b94-bda8-a14e5da1cddf",
    },
    {
      start: {
        x: 3520,
        y: 6280,
      },
      startId: "86e5b447-323e-4917-8caf-5dd110f37ea2",
      end: {
        x: 3420,
        y: 7160,
      },
      endId: "da5baf39-82c0-4678-a693-b2604ac9e426",
      name: "TwoWayVEdge",
      id: "0208bdec-8eb1-4cd6-85db-09e5fa4ab17e",
    },
    {
      start: {
        x: 3420,
        y: 7160,
      },
      startId: "da5baf39-82c0-4678-a693-b2604ac9e426",
      end: {
        x: 3760,
        y: 7240,
      },
      endId: "4258b374-8ede-4149-be46-d757bf2d76c9",
      name: "TwoWayHEdge",
      id: "f48ab8e1-659b-4525-ba21-54019426c30f",
    },
    {
      start: {
        x: 3760,
        y: 7240,
      },
      startId: "4258b374-8ede-4149-be46-d757bf2d76c9",
      end: {
        x: 4120,
        y: 7160,
      },
      endId: "cf198975-65ba-4d4e-9df1-58b31c56f227",
      name: "TwoWayHEdge",
      id: "50f9bff5-58da-4a2e-b72e-7f84b176ed48",
    },
    {
      start: {
        x: 4120,
        y: 7160,
      },
      startId: "cf198975-65ba-4d4e-9df1-58b31c56f227",
      end: {
        x: 4460,
        y: 7240,
      },
      endId: "a4c1e286-d75c-46ee-9c88-22f7aadc7a7d",
      name: "TwoWayHEdge",
      id: "8b1b81b3-4913-4614-ad57-877d333a09aa",
    },
    {
      start: {
        x: 4460,
        y: 7240,
      },
      startId: "a4c1e286-d75c-46ee-9c88-22f7aadc7a7d",
      end: {
        x: 4540,
        y: 7560,
      },
      endId: "540ac755-254b-4690-bbe0-737826aa6bbf",
      name: "TwoWayVEdge",
      id: "dbc3c50c-a6da-43fd-ad5a-f5636885ac93",
    },
    {
      start: {
        x: 4540,
        y: 7560,
      },
      startId: "540ac755-254b-4690-bbe0-737826aa6bbf",
      end: {
        x: 4440,
        y: 7900,
      },
      endId: "95341683-9ede-4590-a173-f04ab09976c0",
      name: "TwoWayVEdge",
      id: "6eb2f86c-2643-4b9a-a041-554ca9278c6d",
    },
    {
      start: {
        x: 4440,
        y: 7900,
      },
      startId: "95341683-9ede-4590-a173-f04ab09976c0",
      end: {
        x: 4820,
        y: 7980,
      },
      endId: "b50a4857-f125-4ce6-b7b9-91131727fb6b",
      name: "TwoWayHEdge",
      id: "8ab9d0db-89e6-4862-b313-f647ef2f498f",
    },
    {
      start: {
        x: 4820,
        y: 7980,
      },
      startId: "b50a4857-f125-4ce6-b7b9-91131727fb6b",
      end: {
        x: 5220,
        y: 7920,
      },
      endId: "5c95a1e7-1c38-48a4-ac8b-6fe58e5791ec",
      name: "TwoWayHEdge",
      id: "e18d1bb2-13dc-486a-bf98-ac410df2f0ff",
    },
    {
      start: {
        x: 5220,
        y: 7920,
      },
      startId: "5c95a1e7-1c38-48a4-ac8b-6fe58e5791ec",
      end: {
        x: 5600,
        y: 7980,
      },
      endId: "fd673ecf-06df-4a3c-adde-b3b494f53a8c",
      name: "TwoWayHEdge",
      id: "0e69edbb-2b3f-4aaf-9aba-3ea0ec0ddc18",
    },
    {
      start: {
        x: 5600,
        y: 7980,
      },
      startId: "fd673ecf-06df-4a3c-adde-b3b494f53a8c",
      end: {
        x: 6000,
        y: 7920,
      },
      endId: "23c44714-91a0-417c-af83-d1ad1b52a504",
      name: "TwoWayHEdge",
      id: "32df51ce-24d7-4985-8301-979a7652bbfd",
    },
    {
      start: {
        x: 6000,
        y: 7920,
      },
      startId: "23c44714-91a0-417c-af83-d1ad1b52a504",
      end: {
        x: 6060,
        y: 8300,
      },
      endId: "2b6cf571-17fd-4ac5-aa38-e74e3eeb841d",
      name: "TwoWayVEdge",
      id: "7bf285e7-42d5-4e90-b5fb-4e5a67883e4b",
    },
    {
      start: {
        x: 6060,
        y: 8300,
      },
      startId: "2b6cf571-17fd-4ac5-aa38-e74e3eeb841d",
      end: {
        x: 5980,
        y: 8660,
      },
      endId: "05b28ac6-01bc-4a19-9b83-7e0d1b832be9",
      name: "TwoWayVEdge",
      id: "f1611e48-9435-4ea4-9344-483709b3ba7d",
    },
    {
      start: {
        x: 5980,
        y: 8660,
      },
      startId: "05b28ac6-01bc-4a19-9b83-7e0d1b832be9",
      end: {
        x: 6040,
        y: 9000,
      },
      endId: "dc7b368a-17dd-48a5-863b-c36f34365c72",
      name: "TwoWayVEdge",
      id: "9ab10894-8cd8-44bd-b366-2823064245f0",
    },
    {
      start: {
        x: 6040,
        y: 9000,
      },
      startId: "dc7b368a-17dd-48a5-863b-c36f34365c72",
      end: {
        x: 5920,
        y: 9360,
      },
      endId: "dfc84ca2-fcad-4cfb-9ddb-3c399527808e",
      name: "TwoWayVEdge",
      id: "ba27d81d-3ab1-41d9-b5ce-43fb5716deb5",
    },
    {
      start: {
        x: 5920,
        y: 9360,
      },
      startId: "dfc84ca2-fcad-4cfb-9ddb-3c399527808e",
      end: {
        x: 6340,
        y: 9420,
      },
      endId: "baa1f9a0-a3e4-4562-9e79-e0c63ce3f4f6",
      name: "TwoWayHEdge",
      id: "aca00afb-38ed-4653-9442-e4a630e82d7a",
    },
    {
      start: {
        x: 6340,
        y: 9420,
      },
      startId: "baa1f9a0-a3e4-4562-9e79-e0c63ce3f4f6",
      end: {
        x: 6700,
        y: 9360,
      },
      endId: "f12b40cd-78e1-43c7-928d-04e13f4fa829",
      name: "TwoWayHEdge",
      id: "81afcf41-71e9-4d5c-b9e7-515b5c5b985b",
    },
    {
      start: {
        x: 6700,
        y: 9360,
      },
      startId: "f12b40cd-78e1-43c7-928d-04e13f4fa829",
      end: {
        x: 7100,
        y: 9400,
      },
      endId: "915797f9-870e-42af-ae52-44dc6dfa8c8d",
      name: "TwoWayHEdge",
      id: "820443d9-01f2-4f3d-b4dc-8d6add3c2294",
    },
    {
      start: {
        x: 7100,
        y: 9400,
      },
      startId: "915797f9-870e-42af-ae52-44dc6dfa8c8d",
      end: {
        x: 7540,
        y: 9340,
      },
      endId: "5d9d68b9-661b-4375-98cd-34f3965e43c4",
      name: "TwoWayHEdge",
      id: "5d57f334-5ddd-4a23-8d45-06487fedac60",
    },
    {
      start: {
        x: 6700,
        y: 9360,
      },
      startId: "f12b40cd-78e1-43c7-928d-04e13f4fa829",
      end: {
        x: 6620,
        y: 9720,
      },
      endId: "40ada4c9-e43c-4b41-be4d-574736574489",
      name: "TwoWayVEdge",
      id: "fa1116c8-a38d-4b4f-9b25-7e5aa8fac82b",
    },
    {
      start: {
        x: 6620,
        y: 9720,
      },
      startId: "40ada4c9-e43c-4b41-be4d-574736574489",
      end: {
        x: 6660,
        y: 10100,
      },
      endId: "a1996074-8ea4-4dbe-bf35-a10eb01b13fd",
      name: "TwoWayVEdge",
      id: "386dba9e-a655-4a3e-b6ec-4ba3636056eb",
    },
    {
      start: {
        x: 6660,
        y: 10100,
      },
      startId: "a1996074-8ea4-4dbe-bf35-a10eb01b13fd",
      end: {
        x: 7060,
        y: 10160,
      },
      endId: "d9bf4836-29ac-41d9-8de8-52274fe6141a",
      name: "TwoWayHEdge",
      id: "038c9f1e-9107-45db-b953-11f31f9beb4c",
    },
    {
      start: {
        x: 7060,
        y: 10160,
      },
      startId: "d9bf4836-29ac-41d9-8de8-52274fe6141a",
      end: {
        x: 7480,
        y: 10080,
      },
      endId: "f4efe165-170e-4cac-bc65-031819e5134a",
      name: "TwoWayHEdge",
      id: "44d16fcd-44b8-42f1-a16c-8030a66ee70f",
    },
    {
      start: {
        x: 7540,
        y: 9340,
      },
      startId: "5d9d68b9-661b-4375-98cd-34f3965e43c4",
      end: {
        x: 7480,
        y: 10080,
      },
      endId: "f4efe165-170e-4cac-bc65-031819e5134a",
      name: "TwoWayVEdge",
      id: "5071aca8-4ebd-4f5b-8b73-077c934f0f9a",
    },
    {
      start: {
        x: 7480,
        y: 10080,
      },
      startId: "f4efe165-170e-4cac-bc65-031819e5134a",
      end: {
        x: 7840,
        y: 10140,
      },
      endId: "bc898212-822a-488d-a88e-0c79194f2a67",
      name: "TwoWayHEdge",
      id: "fda069ec-3ba5-4bfd-8bd3-ab74a81c3f08",
    },
    {
      start: {
        x: 7840,
        y: 10140,
      },
      startId: "bc898212-822a-488d-a88e-0c79194f2a67",
      end: {
        x: 7880,
        y: 10460,
      },
      endId: "8a578148-89e4-4a9b-9737-3da63a81bd7a",
      name: "TwoWayVEdge",
      id: "d8c48226-7da8-450d-913f-47f54af042e9",
    },
    {
      start: {
        x: 7880,
        y: 10460,
      },
      startId: "8a578148-89e4-4a9b-9737-3da63a81bd7a",
      end: {
        x: 8220,
        y: 10500,
      },
      endId: "f541bcef-aeed-4da9-901e-6b028f52fb3b",
      name: "TwoWayHEdge",
      id: "f44226c2-880a-4ea0-9418-a964588bb0ee",
    },
    {
      start: {
        x: 8220,
        y: 10500,
      },
      startId: "f541bcef-aeed-4da9-901e-6b028f52fb3b",
      end: {
        x: 8560,
        y: 10460,
      },
      endId: "6651285c-6730-4655-bd1e-1a4d03cbde94",
      name: "TwoWayHEdge",
      id: "7f6bd778-b538-438d-acbd-a16298bb67f1",
    },
    {
      start: {
        x: 8560,
        y: 10460,
      },
      startId: "6651285c-6730-4655-bd1e-1a4d03cbde94",
      end: {
        x: 8640,
        y: 10140,
      },
      endId: "85f82b66-9393-4e83-820b-43f22e3a27bd",
      name: "TwoWayVEdge",
      id: "07abc4bc-f01b-4244-95d0-63265108b207",
    },
    {
      start: {
        x: 8220,
        y: 10500,
      },
      startId: "f541bcef-aeed-4da9-901e-6b028f52fb3b",
      end: {
        x: 8180,
        y: 10840,
      },
      endId: "23e6ea8a-f581-4e9c-848c-8cefbdc4042f",
      name: "TwoWayVEdge",
      id: "adfcd249-e182-49de-8c04-e6250968c437",
    },
    {
      start: {
        x: 8180,
        y: 10840,
      },
      startId: "23e6ea8a-f581-4e9c-848c-8cefbdc4042f",
      end: {
        x: 8220,
        y: 11160,
      },
      endId: "9d91fbe9-a403-4f6a-bff5-dd66d61f51aa",
      name: "TwoWayVEdge",
      id: "864f13d8-ed01-4102-849d-7aa307cb69ac",
    },
    {
      start: {
        x: 8220,
        y: 11160,
      },
      startId: "9d91fbe9-a403-4f6a-bff5-dd66d61f51aa",
      end: {
        x: 8180,
        y: 11520,
      },
      endId: "0b71163e-626a-47e9-bfa1-7239f0de5308",
      name: "TwoWayVEdge",
      id: "3c852b33-f256-408a-9b8a-1d52c1436061",
    },
    {
      start: {
        x: 8220,
        y: 11160,
      },
      startId: "9d91fbe9-a403-4f6a-bff5-dd66d61f51aa",
      end: {
        x: 7880,
        y: 11120,
      },
      endId: "a57193f5-ef11-46d9-b02a-a88ed8d93348",
      name: "TwoWayHEdge",
      id: "ebc9d1c9-a11b-4168-8082-b31933547e23",
    },
    {
      start: {
        x: 7880,
        y: 11120,
      },
      startId: "a57193f5-ef11-46d9-b02a-a88ed8d93348",
      end: {
        x: 7560,
        y: 11160,
      },
      endId: "ce7d640b-b699-44aa-a794-cbec34e97427",
      name: "TwoWayHEdge",
      id: "3eef089c-9909-4316-ad26-307677d238af",
    },
    {
      start: {
        x: 7560,
        y: 11160,
      },
      startId: "ce7d640b-b699-44aa-a794-cbec34e97427",
      end: {
        x: 7580,
        y: 11480,
      },
      endId: "90f07f25-1a69-4218-a807-f525a094d69a",
      name: "TwoWayVEdge",
      id: "89d29f4b-5ae8-4d4a-8592-35c670f6744e",
    },
    {
      start: {
        x: 7580,
        y: 11480,
      },
      startId: "90f07f25-1a69-4218-a807-f525a094d69a",
      end: {
        x: 8180,
        y: 11520,
      },
      endId: "0b71163e-626a-47e9-bfa1-7239f0de5308",
      name: "TwoWayHEdge",
      id: "5cd59f4f-bfdf-428f-b01f-ad438ab58def",
    },
    {
      start: {
        x: 8220,
        y: 11160,
      },
      startId: "9d91fbe9-a403-4f6a-bff5-dd66d61f51aa",
      end: {
        x: 8560,
        y: 11120,
      },
      endId: "61624b8f-90fb-4f1c-9162-8dc91f1fba7f",
      name: "TwoWayHEdge",
      id: "4acdbb10-5d26-4dbb-ab30-19c353a3c681",
    },
    {
      start: {
        x: 8560,
        y: 11120,
      },
      startId: "61624b8f-90fb-4f1c-9162-8dc91f1fba7f",
      end: {
        x: 8580,
        y: 11560,
      },
      endId: "538eac0c-1ed4-41b0-a59b-3688c7169799",
      name: "TwoWayVEdge",
      id: "777a8083-4799-41c6-8622-a73d032e1f96",
    },
    {
      start: {
        x: 8580,
        y: 11560,
      },
      startId: "538eac0c-1ed4-41b0-a59b-3688c7169799",
      end: {
        x: 8980,
        y: 11500,
      },
      endId: "9273365c-b48d-4b91-9c35-f980415da24f",
      name: "TwoWayHEdge",
      id: "6e915401-70c8-4764-8ae3-f311e6738fab",
    },
    {
      start: {
        x: 8980,
        y: 11500,
      },
      startId: "9273365c-b48d-4b91-9c35-f980415da24f",
      end: {
        x: 9360,
        y: 11560,
      },
      endId: "42637926-3ede-4d14-920b-257004108277",
      name: "TwoWayHEdge",
      id: "e82c5f60-d564-4502-8dc4-d0c0335e7c23",
    },
    {
      start: {
        x: 9360,
        y: 11560,
      },
      startId: "42637926-3ede-4d14-920b-257004108277",
      end: {
        x: 9740,
        y: 11500,
      },
      endId: "c2c8cc1d-2995-469d-a792-768c1c40a1c3",
      name: "TwoWayHEdge",
      id: "7a771397-36ba-4c56-8ce7-7aa49c64dfd6",
    },
    {
      start: {
        x: 9740,
        y: 11500,
      },
      startId: "c2c8cc1d-2995-469d-a792-768c1c40a1c3",
      end: {
        x: 10100,
        y: 11560,
      },
      endId: "762bcb17-2e8d-469c-88d3-d06cc92fe7b8",
      name: "TwoWayHEdge",
      id: "23bfe791-f369-4468-bd5f-1b63011aa290",
    },
    {
      start: {
        x: 10100,
        y: 11560,
      },
      startId: "762bcb17-2e8d-469c-88d3-d06cc92fe7b8",
      end: {
        x: 10460,
        y: 11480,
      },
      endId: "8ccccdf5-139d-41ff-85c8-b523e007b011",
      name: "TwoWayHEdge",
      id: "4590d21d-5a39-46a2-90cc-8543d1705b22",
    },
    {
      start: {
        x: 10460,
        y: 11480,
      },
      startId: "8ccccdf5-139d-41ff-85c8-b523e007b011",
      end: {
        x: 10780,
        y: 11540,
      },
      endId: "86ff9b7c-da53-4003-ae8e-992036396961",
      name: "TwoWayHEdge",
      id: "8e55d4e8-baef-4a24-b766-def733a69232",
    },
    {
      start: {
        x: 10780,
        y: 11540,
      },
      startId: "86ff9b7c-da53-4003-ae8e-992036396961",
      end: {
        x: 11120,
        y: 11480,
      },
      endId: "8a05526f-fce6-437d-981e-f88e10bd665b",
      name: "TwoWayHEdge",
      id: "5aa82c3d-c84b-4741-86ff-d7b432852617",
    },
    {
      start: {
        x: 11120,
        y: 11480,
      },
      startId: "8a05526f-fce6-437d-981e-f88e10bd665b",
      end: {
        x: 11480,
        y: 11540,
      },
      endId: "82f08002-a4ad-465e-b3bb-80f346b4606a",
      name: "TwoWayHEdge",
      id: "d774d4ee-04d6-4d83-b4d0-1e35b86eaa52",
    },
    {
      start: {
        x: 11480,
        y: 11540,
      },
      startId: "82f08002-a4ad-465e-b3bb-80f346b4606a",
      end: {
        x: 12080,
        y: 11480,
      },
      endId: "28c361bb-a56f-4099-a8bf-40e4869f2b7c",
      name: "TwoWayHEdge",
      id: "461031dc-c072-4d8b-8b4f-f4e48c10f4b2",
    },
    {
      start: {
        x: 11480,
        y: 11540,
      },
      startId: "82f08002-a4ad-465e-b3bb-80f346b4606a",
      end: {
        x: 11440,
        y: 11160,
      },
      endId: "eebf013d-79f0-4565-9919-1917ffe72d8e",
      name: "TwoWayVEdge",
      id: "8e33b850-0696-473e-b018-dd96fdf52aba",
    },
    {
      start: {
        x: 11440,
        y: 11160,
      },
      startId: "eebf013d-79f0-4565-9919-1917ffe72d8e",
      end: {
        x: 11780,
        y: 11120,
      },
      endId: "4276ced9-ee69-4bb9-875d-967c5f17cbe1",
      name: "TwoWayHEdge",
      id: "2c4802e1-c388-49e8-a80e-809b188e3f93",
    },
    {
      start: {
        x: 11780,
        y: 11120,
      },
      startId: "4276ced9-ee69-4bb9-875d-967c5f17cbe1",
      end: {
        x: 12120,
        y: 11160,
      },
      endId: "de445304-6eec-43eb-a0ce-db78ae7b9838",
      name: "TwoWayHEdge",
      id: "59517573-4754-4940-92e8-348a6dc6a53f",
    },
    {
      start: {
        x: 12120,
        y: 11160,
      },
      startId: "de445304-6eec-43eb-a0ce-db78ae7b9838",
      end: {
        x: 12080,
        y: 11480,
      },
      endId: "28c361bb-a56f-4099-a8bf-40e4869f2b7c",
      name: "TwoWayVEdge",
      id: "8540f5c9-516b-46b3-8be8-eda4f2550d7a",
    },
    {
      start: {
        x: 12120,
        y: 11160,
      },
      startId: "de445304-6eec-43eb-a0ce-db78ae7b9838",
      end: {
        x: 12420,
        y: 11120,
      },
      endId: "818d3bce-2a45-44a9-8470-c10824fd979b",
      name: "TwoWayHEdge",
      id: "95e26235-2776-4d16-858c-3d84ce5ee148",
    },
    {
      start: {
        x: 12420,
        y: 11120,
      },
      startId: "818d3bce-2a45-44a9-8470-c10824fd979b",
      end: {
        x: 12360,
        y: 10820,
      },
      endId: "33870572-f3f8-4291-bb09-2d9dd6047d2b",
      name: "TwoWayVEdge",
      id: "5f0df2cf-b68e-449d-b429-01e9454a1606",
    },
    {
      start: {
        x: 12360,
        y: 10820,
      },
      startId: "33870572-f3f8-4291-bb09-2d9dd6047d2b",
      end: {
        x: 12060,
        y: 10860,
      },
      endId: "a277109b-b6ea-4729-8cad-cf4c199a9d6d",
      name: "TwoWayHEdge",
      id: "8fda4ddf-419e-4736-a75c-2d18201f4ffb",
    },
    {
      start: {
        x: 12060,
        y: 10860,
      },
      startId: "a277109b-b6ea-4729-8cad-cf4c199a9d6d",
      end: {
        x: 12120,
        y: 11160,
      },
      endId: "de445304-6eec-43eb-a0ce-db78ae7b9838",
      name: "TwoWayVEdge",
      id: "79a55615-5b77-4660-a300-f3febe61e5c4",
    },
    {
      start: {
        x: 12360,
        y: 10820,
      },
      startId: "33870572-f3f8-4291-bb09-2d9dd6047d2b",
      end: {
        x: 12740,
        y: 10860,
      },
      endId: "c7f99497-8d14-4d1a-b9a0-d12bac7ff4f3",
      name: "TwoWayHEdge",
      id: "03b4114d-a33e-4435-b641-d1ac8416c806",
    },
    {
      start: {
        x: 12060,
        y: 10860,
      },
      startId: "a277109b-b6ea-4729-8cad-cf4c199a9d6d",
      end: {
        x: 12120,
        y: 10520,
      },
      endId: "a4d45cff-04a5-4a04-9d10-183acb893291",
      name: "TwoWayVEdge",
      id: "3debbb6d-64da-4d22-ba3a-ae5004958ecc",
    },
    {
      start: {
        x: 12120,
        y: 10520,
      },
      startId: "a4d45cff-04a5-4a04-9d10-183acb893291",
      end: {
        x: 12640,
        y: 10500,
      },
      endId: "a0977898-22c1-4771-aa95-f445696aa693",
      name: "TwoWayHEdge",
      id: "65433f77-4f8d-4daf-bf6d-99fd31aac498",
    },
    {
      start: {
        x: 12640,
        y: 10500,
      },
      startId: "a0977898-22c1-4771-aa95-f445696aa693",
      end: {
        x: 12740,
        y: 10860,
      },
      endId: "c7f99497-8d14-4d1a-b9a0-d12bac7ff4f3",
      name: "TwoWayVEdge",
      id: "0d6db6dd-5676-4654-b64a-e18e773a1eaa",
    },
    {
      start: {
        x: 12920,
        y: 3960,
      },
      startId: "9317f67d-8210-4035-b06f-a72a5dd89acc",
      end: {
        x: 12980,
        y: 3440,
      },
      endId: "aae2494b-ca25-4d4f-baa3-d362ecc7c8c7",
      name: "TwoWayVEdge",
      id: "5ec5cbb2-fdb4-43ff-9e4f-f2f238004431",
    },
    {
      start: {
        x: 12920,
        y: 3960,
      },
      startId: "9317f67d-8210-4035-b06f-a72a5dd89acc",
      end: {
        x: 12480,
        y: 3940,
      },
      endId: "8a1cbbe7-703c-4ec6-bff9-d84148dfc97c",
      name: "TwoWayHEdge",
      id: "a2025091-2212-429d-8586-242103514491",
    },
    {
      start: {
        x: 12480,
        y: 3940,
      },
      startId: "8a1cbbe7-703c-4ec6-bff9-d84148dfc97c",
      end: {
        x: 12080,
        y: 3960,
      },
      endId: "9eeaa88f-9b54-49b8-a831-6cbe73b0996a",
      name: "TwoWayHEdge",
      id: "6d79bea7-a944-40df-9325-ddc1714503ab",
    },
    {
      start: {
        x: 12080,
        y: 3960,
      },
      startId: "9eeaa88f-9b54-49b8-a831-6cbe73b0996a",
      end: {
        x: 12000,
        y: 3680,
      },
      endId: "82cd2b2f-fbb3-490f-a528-31be3b29a97b",
      name: "TwoWayVEdge",
      id: "c9996b4f-88ec-49fd-abec-7b00aacfa45b",
    },
    {
      start: {
        x: 12000,
        y: 3680,
      },
      startId: "82cd2b2f-fbb3-490f-a528-31be3b29a97b",
      end: {
        x: 12080,
        y: 3420,
      },
      endId: "7784cb7a-d461-4a46-bc7b-c17b20067e08",
      name: "TwoWayVEdge",
      id: "74387f3d-5797-435a-ab74-bb123ffa1088",
    },
    {
      start: {
        x: 12080,
        y: 3420,
      },
      startId: "7784cb7a-d461-4a46-bc7b-c17b20067e08",
      end: {
        x: 12500,
        y: 3400,
      },
      endId: "2703f796-cad8-4e10-8b8b-16d2867229ed",
      name: "TwoWayHEdge",
      id: "cebdb1fc-27df-4c7d-b71a-675cab6ba1e8",
    },
    {
      start: {
        x: 12500,
        y: 3400,
      },
      startId: "2703f796-cad8-4e10-8b8b-16d2867229ed",
      end: {
        x: 12980,
        y: 3440,
      },
      endId: "aae2494b-ca25-4d4f-baa3-d362ecc7c8c7",
      name: "TwoWayHEdge",
      id: "ea18713a-adb9-437a-9bdd-4b712889cdbc",
    },
  ],
};
export default dokaponTheWorldMap;
