import type { GraphJSON } from "global";

const hawaiianIslandsCaveMap: GraphJSON = {
  vertices: [
    {
      area: "HawaiianIslandsCave",
      position: {
        x: 2900,
        y: 5720,
      },
      name: "BattleField",
      id: "da1bf4f4-f163-4932-b34b-ee57127c60f1",
      edges: [
        "47b4c5eb-323e-46ec-bdd1-a9ff6b6eee9a",
        "1cd9e11f-cc06-4d73-803f-d7336aa1ce15",
      ],
      bottom: "590ade98-a8b6-4074-bf8a-fb0e8194cb07",
      top: "5d5aefde-547e-4ef9-9897-025e9297739b",
    },
    {
      id: "590ade98-a8b6-4074-bf8a-fb0e8194cb07",
      area: "HawaiianIslandsCave",
      name: "CaveField",
      position: {
        x: 2900,
        y: 6260,
      },
      edges: ["47b4c5eb-323e-46ec-bdd1-a9ff6b6eee9a"],
      top: "da1bf4f4-f163-4932-b34b-ee57127c60f1",
    },
    {
      id: "5d5aefde-547e-4ef9-9897-025e9297739b",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 2900,
        y: 5200,
      },
      edges: [
        "1cd9e11f-cc06-4d73-803f-d7336aa1ce15",
        "2defac6f-af5a-4b23-ad84-60dbd3b3a490",
        "c59242c1-2df6-4c58-a755-a4b10badcb09",
      ],
      bottom: "da1bf4f4-f163-4932-b34b-ee57127c60f1",
      left: "76c644c0-5319-4519-aac8-1080909941e1",
      right: "ed89eeaf-1ffc-4eec-a60b-fc31eb7cde76",
    },
    {
      id: "ed89eeaf-1ffc-4eec-a60b-fc31eb7cde76",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 3500,
        y: 5180,
      },
      edges: [
        "c59242c1-2df6-4c58-a755-a4b10badcb09",
        "9ee9dac3-0d71-416a-a763-e561b68ddb3f",
      ],
      left: "5d5aefde-547e-4ef9-9897-025e9297739b",
      right: "003c4322-2927-4b6c-911a-4699a78c8adc",
    },
    {
      id: "76c644c0-5319-4519-aac8-1080909941e1",
      area: "HawaiianIslandsCave",
      name: "DamageField",
      position: {
        x: 2340,
        y: 5180,
      },
      edges: [
        "2defac6f-af5a-4b23-ad84-60dbd3b3a490",
        "13e18de7-2dcd-4268-b39b-6a38aa941d62",
      ],
      right: "5d5aefde-547e-4ef9-9897-025e9297739b",
      left: "f6835483-0566-47ff-ab55-befd97e71e80",
    },
    {
      id: "003c4322-2927-4b6c-911a-4699a78c8adc",
      area: "HawaiianIslandsCave",
      name: "MagicBookField",
      position: {
        x: 4080,
        y: 5200,
      },
      edges: [
        "9ee9dac3-0d71-416a-a763-e561b68ddb3f",
        "620c917e-729b-4f74-bc34-19e65da6358f",
        "04674a4b-d66d-4d7b-810e-b663654e9286",
      ],
      left: "ed89eeaf-1ffc-4eec-a60b-fc31eb7cde76",
      top: "e52887cf-a580-42cc-8918-86c335a87b63",
      right: "655621c9-3494-486a-9d56-f970655070dd",
    },
    {
      id: "e52887cf-a580-42cc-8918-86c335a87b63",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 4080,
        y: 4640,
      },
      edges: [
        "620c917e-729b-4f74-bc34-19e65da6358f",
        "52987efa-8a37-4317-bfaf-390ac3294076",
      ],
      bottom: "003c4322-2927-4b6c-911a-4699a78c8adc",
      top: "91a6131f-0e20-4167-957b-74dfba1d85f0",
    },
    {
      id: "655621c9-3494-486a-9d56-f970655070dd",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 4960,
        y: 5180,
      },
      edges: [
        "04674a4b-d66d-4d7b-810e-b663654e9286",
        "294afee0-ab98-408c-8059-a5e8da3e458b",
      ],
      left: "003c4322-2927-4b6c-911a-4699a78c8adc",
      right: "b40b8874-baa7-4f75-b704-ad04e52543d1",
    },
    {
      id: "91a6131f-0e20-4167-957b-74dfba1d85f0",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 4080,
        y: 4140,
      },
      edges: [
        "52987efa-8a37-4317-bfaf-390ac3294076",
        "bcfe73e6-aab9-4986-84a2-54f274331d75",
      ],
      bottom: "e52887cf-a580-42cc-8918-86c335a87b63",
      top: "ad418492-ea3a-46c3-81f3-5a946f9313a7",
    },
    {
      id: "ad418492-ea3a-46c3-81f3-5a946f9313a7",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 4080,
        y: 3540,
      },
      edges: [
        "bcfe73e6-aab9-4986-84a2-54f274331d75",
        "4fab5d90-03b8-469a-b621-a91ff3fd8e13",
        "e6c90d11-9eda-4fa9-b142-e1d37c54ba3e",
      ],
      bottom: "91a6131f-0e20-4167-957b-74dfba1d85f0",
      right: "273c75b0-6ad9-4b94-a21d-cdcacc144518",
      top: "1d4cefb7-4554-4b73-98f4-a9ac51519c9e",
    },
    {
      id: "b40b8874-baa7-4f75-b704-ad04e52543d1",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 5700,
        y: 5200,
      },
      edges: [
        "294afee0-ab98-408c-8059-a5e8da3e458b",
        "ede7aff1-e6de-4c7f-ac15-b2d8d24ccd21",
      ],
      left: "655621c9-3494-486a-9d56-f970655070dd",
      top: "26d3c55c-3247-41b3-afee-e1f136e25caf",
    },
    {
      id: "26d3c55c-3247-41b3-afee-e1f136e25caf",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 5700,
        y: 4660,
      },
      edges: [
        "ede7aff1-e6de-4c7f-ac15-b2d8d24ccd21",
        "e706b7d0-535e-49a9-a058-286ba181930b",
      ],
      bottom: "b40b8874-baa7-4f75-b704-ad04e52543d1",
      top: "ae997fb6-e762-4381-87a3-15c938c6a0f5",
    },
    {
      id: "ae997fb6-e762-4381-87a3-15c938c6a0f5",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 5700,
        y: 4160,
      },
      edges: [
        "e706b7d0-535e-49a9-a058-286ba181930b",
        "61fcf199-f7c2-4b72-9d52-0a7a7be10df3",
      ],
      bottom: "26d3c55c-3247-41b3-afee-e1f136e25caf",
      top: "5ae46b80-d231-4194-84dd-16c72431bb54",
    },
    {
      id: "5ae46b80-d231-4194-84dd-16c72431bb54",
      area: "HawaiianIslandsCave",
      name: "RedTreasureField",
      position: {
        x: 5700,
        y: 3560,
      },
      edges: [
        "61fcf199-f7c2-4b72-9d52-0a7a7be10df3",
        "61442d14-b151-4937-885f-27540a811327",
      ],
      bottom: "ae997fb6-e762-4381-87a3-15c938c6a0f5",
      top: "6f6d02e4-8c98-4d06-8b93-531a5428dcc7",
    },
    {
      id: "273c75b0-6ad9-4b94-a21d-cdcacc144518",
      area: "HawaiianIslandsCave",
      name: "DamageField",
      position: {
        x: 4620,
        y: 3540,
      },
      edges: [
        "4fab5d90-03b8-469a-b621-a91ff3fd8e13",
        "93e42569-fe11-4783-acfb-c5dda8465832",
      ],
      left: "ad418492-ea3a-46c3-81f3-5a946f9313a7",
      right: "c0a36c85-b31e-495c-b903-a5c6e3c844fc",
    },
    {
      id: "c0a36c85-b31e-495c-b903-a5c6e3c844fc",
      area: "HawaiianIslandsCave",
      name: "MagicBookField",
      position: {
        x: 5160,
        y: 3540,
      },
      edges: [
        "93e42569-fe11-4783-acfb-c5dda8465832",
        "ca6de315-d4fc-4659-8660-034e4dfd1b13",
      ],
      left: "273c75b0-6ad9-4b94-a21d-cdcacc144518",
      top: "d3c59e59-9e0d-401e-bb8c-504593b7daa6",
    },
    {
      id: "6f6d02e4-8c98-4d06-8b93-531a5428dcc7",
      area: "HawaiianIslandsCave",
      name: "DamageField",
      position: {
        x: 5700,
        y: 2960,
      },
      edges: [
        "61442d14-b151-4937-885f-27540a811327",
        "33d196da-3497-43a7-beb7-2c64590bd7d4",
      ],
      bottom: "5ae46b80-d231-4194-84dd-16c72431bb54",
      top: "6d1cd74e-d519-4e85-9a93-a659b9c7ecfd",
    },
    {
      id: "d3c59e59-9e0d-401e-bb8c-504593b7daa6",
      area: "HawaiianIslandsCave",
      name: "RedTreasureField",
      position: {
        x: 5160,
        y: 2980,
      },
      edges: [
        "ca6de315-d4fc-4659-8660-034e4dfd1b13",
        "b3179f14-916e-4550-b981-50a20181765a",
        "889fe340-f576-4448-8950-c436de3bc18a",
      ],
      bottom: "c0a36c85-b31e-495c-b903-a5c6e3c844fc",
      left: "1d4cefb7-4554-4b73-98f4-a9ac51519c9e",
      top: "38743a95-4984-4f3a-8eb4-07b46dbc584a",
    },
    {
      id: "1d4cefb7-4554-4b73-98f4-a9ac51519c9e",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 4080,
        y: 2980,
      },
      edges: [
        "e6c90d11-9eda-4fa9-b142-e1d37c54ba3e",
        "b3179f14-916e-4550-b981-50a20181765a",
        "be7d3c02-cc30-415d-912d-ef4673646211",
      ],
      bottom: "ad418492-ea3a-46c3-81f3-5a946f9313a7",
      right: "d3c59e59-9e0d-401e-bb8c-504593b7daa6",
      top: "a3347c95-e67c-4cbc-98c9-a2d60aef0b03",
    },
    {
      id: "38743a95-4984-4f3a-8eb4-07b46dbc584a",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 5160,
        y: 2420,
      },
      edges: [
        "889fe340-f576-4448-8950-c436de3bc18a",
        "3a4ebcfa-d367-4b77-b310-47399743976e",
      ],
      bottom: "d3c59e59-9e0d-401e-bb8c-504593b7daa6",
      top: "f56a083e-a794-4b93-9b11-6bee91d8c19f",
    },
    {
      id: "6d1cd74e-d519-4e85-9a93-a659b9c7ecfd",
      area: "HawaiianIslandsCave",
      name: "MagicBookField",
      position: {
        x: 5700,
        y: 2420,
      },
      edges: [
        "33d196da-3497-43a7-beb7-2c64590bd7d4",
        "fc27bfe7-6a87-4fb3-b1d1-11899ced63c9",
      ],
      bottom: "6f6d02e4-8c98-4d06-8b93-531a5428dcc7",
      top: "a0eac911-b36b-476d-9301-563779fb0368",
    },
    {
      id: "f56a083e-a794-4b93-9b11-6bee91d8c19f",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 5160,
        y: 1840,
      },
      edges: [
        "3a4ebcfa-d367-4b77-b310-47399743976e",
        "7fd9ce91-1c79-4c1e-8a6a-167a0d4d1cce",
        "c097b3b8-5174-4c32-8a97-100382c947b1",
      ],
      bottom: "38743a95-4984-4f3a-8eb4-07b46dbc584a",
      right: "a0eac911-b36b-476d-9301-563779fb0368",
      top: "ba1b909d-5f68-4cff-916a-c9fcf2338482",
    },
    {
      id: "a0eac911-b36b-476d-9301-563779fb0368",
      area: "HawaiianIslandsCave",
      name: "GoldTreasureField",
      position: {
        x: 5700,
        y: 1840,
      },
      edges: [
        "7fd9ce91-1c79-4c1e-8a6a-167a0d4d1cce",
        "fc27bfe7-6a87-4fb3-b1d1-11899ced63c9",
      ],
      left: "f56a083e-a794-4b93-9b11-6bee91d8c19f",
      bottom: "6d1cd74e-d519-4e85-9a93-a659b9c7ecfd",
    },
    {
      id: "ba1b909d-5f68-4cff-916a-c9fcf2338482",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 5160,
        y: 1220,
      },
      edges: [
        "c097b3b8-5174-4c32-8a97-100382c947b1",
        "861696b3-4597-4f37-858b-dd7248558959",
      ],
      bottom: "f56a083e-a794-4b93-9b11-6bee91d8c19f",
      top: "2ce7a2c8-adbe-413d-9304-93ef6d79cceb",
    },
    {
      id: "2ce7a2c8-adbe-413d-9304-93ef6d79cceb",
      area: "HawaiianIslandsCave",
      name: "CaveField",
      position: {
        x: 5160,
        y: 620,
      },
      edges: ["861696b3-4597-4f37-858b-dd7248558959"],
      bottom: "ba1b909d-5f68-4cff-916a-c9fcf2338482",
    },
    {
      id: "a3347c95-e67c-4cbc-98c9-a2d60aef0b03",
      area: "HawaiianIslandsCave",
      name: "DamageField",
      position: {
        x: 4040,
        y: 2540,
      },
      edges: [
        "be7d3c02-cc30-415d-912d-ef4673646211",
        "ed49f54b-864a-456a-907c-ca94b16f8abd",
        "f7b0de68-7af9-4b81-b121-67f16fa8aaa9",
      ],
      bottom: "1d4cefb7-4554-4b73-98f4-a9ac51519c9e",
      top: "be0946f4-039f-4510-b5f5-87e56a050dcb",
      left: "dc335c00-faf0-4804-b5eb-ce5a7fdbf483",
    },
    {
      id: "be0946f4-039f-4510-b5f5-87e56a050dcb",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 4040,
        y: 2060,
      },
      edges: [
        "ed49f54b-864a-456a-907c-ca94b16f8abd",
        "b4f1778a-352c-42b0-b9fa-689a02e0d2d8",
      ],
      bottom: "a3347c95-e67c-4cbc-98c9-a2d60aef0b03",
      left: "bd610a15-005a-4145-9a23-cc3ba77f35a4",
    },
    {
      id: "bd610a15-005a-4145-9a23-cc3ba77f35a4",
      area: "HawaiianIslandsCave",
      name: "RedTreasureField",
      position: {
        x: 3440,
        y: 2020,
      },
      edges: [
        "b4f1778a-352c-42b0-b9fa-689a02e0d2d8",
        "f3d48abe-a855-4913-ba5e-71237d2ab35d",
      ],
      right: "be0946f4-039f-4510-b5f5-87e56a050dcb",
      left: "d5150388-eacc-41e1-917c-a68fdfa67297",
    },
    {
      id: "d5150388-eacc-41e1-917c-a68fdfa67297",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 2900,
        y: 2040,
      },
      edges: [
        "f3d48abe-a855-4913-ba5e-71237d2ab35d",
        "40a59631-aaea-4a22-9255-66f32439246a",
        "0e41fc51-87e6-4421-a69e-f2eae38907cd",
      ],
      right: "bd610a15-005a-4145-9a23-cc3ba77f35a4",
      bottom: "dc335c00-faf0-4804-b5eb-ce5a7fdbf483",
      top: "e5947e2b-922c-4f53-a602-f0fbdcd593e0",
    },
    {
      id: "dc335c00-faf0-4804-b5eb-ce5a7fdbf483",
      area: "HawaiianIslandsCave",
      name: "MagicBookField",
      position: {
        x: 2900,
        y: 2540,
      },
      edges: [
        "40a59631-aaea-4a22-9255-66f32439246a",
        "f7b0de68-7af9-4b81-b121-67f16fa8aaa9",
        "1505e555-4c00-4b40-ad05-d43811afc959",
      ],
      top: "d5150388-eacc-41e1-917c-a68fdfa67297",
      right: "a3347c95-e67c-4cbc-98c9-a2d60aef0b03",
      left: "95138de6-b273-41c6-859e-40270677478a",
    },
    {
      id: "e5947e2b-922c-4f53-a602-f0fbdcd593e0",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 2900,
        y: 1580,
      },
      edges: [
        "0e41fc51-87e6-4421-a69e-f2eae38907cd",
        "eb888c30-0c8c-4d44-9057-a0ed55cd678f",
      ],
      bottom: "d5150388-eacc-41e1-917c-a68fdfa67297",
      top: "8a55b791-7a6f-4494-aec1-7fc3165d4f49",
    },
    {
      id: "8a55b791-7a6f-4494-aec1-7fc3165d4f49",
      area: "HawaiianIslandsCave",
      name: "MagicBookField",
      position: {
        x: 2900,
        y: 1080,
      },
      edges: [
        "eb888c30-0c8c-4d44-9057-a0ed55cd678f",
        "b86ff361-97ab-42a1-a285-ff28aafbfb6d",
      ],
      bottom: "e5947e2b-922c-4f53-a602-f0fbdcd593e0",
      top: "21a4391b-3954-44a0-bfe4-9e5c4bb56b2d",
    },
    {
      id: "21a4391b-3954-44a0-bfe4-9e5c4bb56b2d",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 2900,
        y: 560,
      },
      edges: [
        "b86ff361-97ab-42a1-a285-ff28aafbfb6d",
        "0240e426-c7d1-4230-a36a-7bae73149835",
      ],
      bottom: "8a55b791-7a6f-4494-aec1-7fc3165d4f49",
      top: "ff121d17-8cd6-4b02-b497-fea0b23cbfd4",
    },
    {
      id: "ff121d17-8cd6-4b02-b497-fea0b23cbfd4",
      area: "HawaiianIslandsCave",
      name: "CaveField",
      position: {
        x: 2900,
        y: 40,
      },
      edges: ["0240e426-c7d1-4230-a36a-7bae73149835"],
      bottom: "21a4391b-3954-44a0-bfe4-9e5c4bb56b2d",
    },
    {
      id: "95138de6-b273-41c6-859e-40270677478a",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 2360,
        y: 2580,
      },
      edges: [
        "1505e555-4c00-4b40-ad05-d43811afc959",
        "7a259d0a-a4f1-4207-a3e6-408c2667d69e",
      ],
      right: "dc335c00-faf0-4804-b5eb-ce5a7fdbf483",
      left: "e41ea3f2-0d42-4f28-b8da-4dd9e3839ad6",
    },
    {
      id: "e41ea3f2-0d42-4f28-b8da-4dd9e3839ad6",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 1800,
        y: 2520,
      },
      edges: [
        "7a259d0a-a4f1-4207-a3e6-408c2667d69e",
        "0b2d95b0-a4b6-49d9-9ed9-bc817abbead4",
      ],
      right: "95138de6-b273-41c6-859e-40270677478a",
      left: "bc147d75-859a-4451-8f0f-d2445169a1b9",
    },
    {
      id: "bc147d75-859a-4451-8f0f-d2445169a1b9",
      area: "HawaiianIslandsCave",
      name: "DamageField",
      position: {
        x: 1100,
        y: 2540,
      },
      edges: [
        "0b2d95b0-a4b6-49d9-9ed9-bc817abbead4",
        "20d1f9ec-587e-4173-8b7a-a7f375e961e8",
      ],
      right: "e41ea3f2-0d42-4f28-b8da-4dd9e3839ad6",
      bottom: "69d4a78c-cb73-4cdf-b93b-6965095532a2",
    },
    {
      id: "f6835483-0566-47ff-ab55-befd97e71e80",
      area: "HawaiianIslandsCave",
      name: "MagicBookField",
      position: {
        x: 1720,
        y: 5220,
      },
      edges: [
        "13e18de7-2dcd-4268-b39b-6a38aa941d62",
        "2f7146c2-4fa7-46f8-bae3-869bf8bb4e4e",
      ],
      right: "76c644c0-5319-4519-aac8-1080909941e1",
      left: "e4d47017-417a-4137-83b1-f6b61c86abed",
    },
    {
      id: "e4d47017-417a-4137-83b1-f6b61c86abed",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 1100,
        y: 5180,
      },
      edges: [
        "2f7146c2-4fa7-46f8-bae3-869bf8bb4e4e",
        "8cf3c86a-7285-459b-a8ec-78abfcab18f5",
      ],
      right: "f6835483-0566-47ff-ab55-befd97e71e80",
      top: "f7682617-0484-4f80-b86f-407349024c5c",
    },
    {
      id: "f7682617-0484-4f80-b86f-407349024c5c",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 1100,
        y: 4640,
      },
      edges: [
        "8cf3c86a-7285-459b-a8ec-78abfcab18f5",
        "d2c99089-8b1d-44b9-b2aa-8f2cd9d36b2d",
      ],
      bottom: "e4d47017-417a-4137-83b1-f6b61c86abed",
      top: "8778d3b8-3a1c-461d-b621-375b96d71822",
    },
    {
      id: "8778d3b8-3a1c-461d-b621-375b96d71822",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 1100,
        y: 4100,
      },
      edges: [
        "d2c99089-8b1d-44b9-b2aa-8f2cd9d36b2d",
        "858ba057-b047-4477-a9bb-e47bd1a3e33b",
      ],
      bottom: "f7682617-0484-4f80-b86f-407349024c5c",
      top: "dd4c94e8-0758-456b-9b7b-e51133b37973",
    },
    {
      id: "dd4c94e8-0758-456b-9b7b-e51133b37973",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 1100,
        y: 3500,
      },
      edges: [
        "858ba057-b047-4477-a9bb-e47bd1a3e33b",
        "53f0aa7d-f007-4815-8df7-e0cd90364e14",
        "883319c7-103c-41e4-9f3e-b53e65f9baa1",
      ],
      bottom: "8778d3b8-3a1c-461d-b621-375b96d71822",
      top: "69d4a78c-cb73-4cdf-b93b-6965095532a2",
      left: "28c57ecd-19e6-4b4a-89d6-d279a4cd5e7d",
    },
    {
      id: "69d4a78c-cb73-4cdf-b93b-6965095532a2",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 1060,
        y: 3020,
      },
      edges: [
        "53f0aa7d-f007-4815-8df7-e0cd90364e14",
        "20d1f9ec-587e-4173-8b7a-a7f375e961e8",
      ],
      bottom: "dd4c94e8-0758-456b-9b7b-e51133b37973",
      top: "bc147d75-859a-4451-8f0f-d2445169a1b9",
    },
    {
      id: "28c57ecd-19e6-4b4a-89d6-d279a4cd5e7d",
      area: "HawaiianIslandsCave",
      name: "RedTreasureField",
      position: {
        x: 40,
        y: 3500,
      },
      edges: [
        "883319c7-103c-41e4-9f3e-b53e65f9baa1",
        "906542a5-59ec-43f6-a601-6bb6d4cc0092",
      ],
      right: "dd4c94e8-0758-456b-9b7b-e51133b37973",
      top: "9e93f175-9201-44bc-a53e-75a6e730c40d",
    },
    {
      id: "9e93f175-9201-44bc-a53e-75a6e730c40d",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 40,
        y: 2760,
      },
      edges: [
        "906542a5-59ec-43f6-a601-6bb6d4cc0092",
        "5269d373-1fb0-4388-9369-fb4b6606c123",
      ],
      bottom: "28c57ecd-19e6-4b4a-89d6-d279a4cd5e7d",
      top: "2f56bed8-5cea-4ff1-8cba-0469c913a750",
    },
    {
      id: "2f56bed8-5cea-4ff1-8cba-0469c913a750",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 40,
        y: 1940,
      },
      edges: [
        "5269d373-1fb0-4388-9369-fb4b6606c123",
        "9e06f2d2-d638-4383-ba06-e499e141e95f",
      ],
      bottom: "9e93f175-9201-44bc-a53e-75a6e730c40d",
      top: "bfbc3c31-8890-47ff-97c0-4d1eb6a86660",
    },
    {
      id: "bfbc3c31-8890-47ff-97c0-4d1eb6a86660",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 40,
        y: 1380,
      },
      edges: [
        "9e06f2d2-d638-4383-ba06-e499e141e95f",
        "7db7a63e-2c65-4a8a-b7e5-0430291c6dd7",
      ],
      bottom: "2f56bed8-5cea-4ff1-8cba-0469c913a750",
      right: "e39f52b1-390c-4d43-9fdf-ebbd5566f1df",
    },
    {
      id: "e39f52b1-390c-4d43-9fdf-ebbd5566f1df",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 820,
        y: 1380,
      },
      edges: [
        "7db7a63e-2c65-4a8a-b7e5-0430291c6dd7",
        "c00bddb0-647f-4f3f-84fd-694b109fd36a",
        "0c243afb-526f-4a17-968a-d830e876e533",
        "05b70071-b49c-4bfa-8d7e-7ae5f9ed3f47",
      ],
      left: "bfbc3c31-8890-47ff-97c0-4d1eb6a86660",
      bottom: "52f4d316-bfd6-4794-ba38-6af91aff5697",
      right: "9fb33d62-d96f-4085-85bb-28dfb5fa3b12",
      top: "b4d18726-c22c-4711-a53d-530572d80a9d",
    },
    {
      id: "52f4d316-bfd6-4794-ba38-6af91aff5697",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 800,
        y: 1940,
      },
      edges: [
        "c00bddb0-647f-4f3f-84fd-694b109fd36a",
        "eaad0020-83e4-499e-8e9f-825f42e31772",
      ],
      top: "e39f52b1-390c-4d43-9fdf-ebbd5566f1df",
      right: "19b41d47-887d-4535-b8a4-5acd468969ae",
    },
    {
      id: "19b41d47-887d-4535-b8a4-5acd468969ae",
      area: "HawaiianIslandsCave",
      name: "MagicBookField",
      position: {
        x: 1280,
        y: 1960,
      },
      edges: [
        "eaad0020-83e4-499e-8e9f-825f42e31772",
        "f3c99eb3-76c2-4dcd-b626-f4ccd3274b04",
      ],
      left: "52f4d316-bfd6-4794-ba38-6af91aff5697",
      right: "a1239d18-2170-42ab-95b1-335bdc0cf6d2",
    },
    {
      id: "a1239d18-2170-42ab-95b1-335bdc0cf6d2",
      area: "HawaiianIslandsCave",
      name: "BattleField",
      position: {
        x: 1800,
        y: 1940,
      },
      edges: [
        "f3c99eb3-76c2-4dcd-b626-f4ccd3274b04",
        "4a769eb3-a3c5-41e7-a29f-c83c450908d2",
      ],
      left: "19b41d47-887d-4535-b8a4-5acd468969ae",
      top: "9fb33d62-d96f-4085-85bb-28dfb5fa3b12",
    },
    {
      id: "9fb33d62-d96f-4085-85bb-28dfb5fa3b12",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 1780,
        y: 1380,
      },
      edges: [
        "0c243afb-526f-4a17-968a-d830e876e533",
        "4a769eb3-a3c5-41e7-a29f-c83c450908d2",
      ],
      left: "e39f52b1-390c-4d43-9fdf-ebbd5566f1df",
      bottom: "a1239d18-2170-42ab-95b1-335bdc0cf6d2",
    },
    {
      id: "b4d18726-c22c-4711-a53d-530572d80a9d",
      area: "HawaiianIslandsCave",
      name: "TreasureField",
      position: {
        x: 820,
        y: 860,
      },
      edges: [
        "05b70071-b49c-4bfa-8d7e-7ae5f9ed3f47",
        "661ab21e-a14d-467a-891a-33ef66ad0720",
      ],
      bottom: "e39f52b1-390c-4d43-9fdf-ebbd5566f1df",
      top: "491e03d1-9f2d-4170-a4b2-13646ce67862",
    },
    {
      id: "491e03d1-9f2d-4170-a4b2-13646ce67862",
      area: "HawaiianIslandsCave",
      name: "CaveField",
      position: {
        x: 820,
        y: 320,
      },
      edges: ["661ab21e-a14d-467a-891a-33ef66ad0720"],
      bottom: "b4d18726-c22c-4711-a53d-530572d80a9d",
    },
  ],
  edges: [
    {
      start: {
        x: 2900,
        y: 5720,
      },
      startId: "da1bf4f4-f163-4932-b34b-ee57127c60f1",
      end: {
        x: 2900,
        y: 6260,
      },
      endId: "590ade98-a8b6-4074-bf8a-fb0e8194cb07",
      name: "TwoWayVEdge",
      id: "47b4c5eb-323e-46ec-bdd1-a9ff6b6eee9a",
    },
    {
      start: {
        x: 2900,
        y: 5720,
      },
      startId: "da1bf4f4-f163-4932-b34b-ee57127c60f1",
      end: {
        x: 2900,
        y: 5200,
      },
      endId: "5d5aefde-547e-4ef9-9897-025e9297739b",
      name: "TwoWayVEdge",
      id: "1cd9e11f-cc06-4d73-803f-d7336aa1ce15",
    },
    {
      start: {
        x: 2900,
        y: 5200,
      },
      startId: "5d5aefde-547e-4ef9-9897-025e9297739b",
      end: {
        x: 2340,
        y: 5180,
      },
      endId: "76c644c0-5319-4519-aac8-1080909941e1",
      name: "TwoWayHEdge",
      id: "2defac6f-af5a-4b23-ad84-60dbd3b3a490",
    },
    {
      start: {
        x: 2900,
        y: 5200,
      },
      startId: "5d5aefde-547e-4ef9-9897-025e9297739b",
      end: {
        x: 3500,
        y: 5180,
      },
      endId: "ed89eeaf-1ffc-4eec-a60b-fc31eb7cde76",
      name: "TwoWayHEdge",
      id: "c59242c1-2df6-4c58-a755-a4b10badcb09",
    },
    {
      start: {
        x: 3500,
        y: 5180,
      },
      startId: "ed89eeaf-1ffc-4eec-a60b-fc31eb7cde76",
      end: {
        x: 4080,
        y: 5200,
      },
      endId: "003c4322-2927-4b6c-911a-4699a78c8adc",
      name: "TwoWayHEdge",
      id: "9ee9dac3-0d71-416a-a763-e561b68ddb3f",
    },
    {
      start: {
        x: 4080,
        y: 5200,
      },
      startId: "003c4322-2927-4b6c-911a-4699a78c8adc",
      end: {
        x: 4080,
        y: 4640,
      },
      endId: "e52887cf-a580-42cc-8918-86c335a87b63",
      name: "TwoWayVEdge",
      id: "620c917e-729b-4f74-bc34-19e65da6358f",
    },
    {
      start: {
        x: 4080,
        y: 5200,
      },
      startId: "003c4322-2927-4b6c-911a-4699a78c8adc",
      end: {
        x: 4960,
        y: 5180,
      },
      endId: "655621c9-3494-486a-9d56-f970655070dd",
      name: "TwoWayHEdge",
      id: "04674a4b-d66d-4d7b-810e-b663654e9286",
    },
    {
      start: {
        x: 4080,
        y: 4640,
      },
      startId: "e52887cf-a580-42cc-8918-86c335a87b63",
      end: {
        x: 4080,
        y: 4140,
      },
      endId: "91a6131f-0e20-4167-957b-74dfba1d85f0",
      name: "TwoWayVEdge",
      id: "52987efa-8a37-4317-bfaf-390ac3294076",
    },
    {
      start: {
        x: 4080,
        y: 4140,
      },
      startId: "91a6131f-0e20-4167-957b-74dfba1d85f0",
      end: {
        x: 4080,
        y: 3540,
      },
      endId: "ad418492-ea3a-46c3-81f3-5a946f9313a7",
      name: "TwoWayVEdge",
      id: "bcfe73e6-aab9-4986-84a2-54f274331d75",
    },
    {
      start: {
        x: 4960,
        y: 5180,
      },
      startId: "655621c9-3494-486a-9d56-f970655070dd",
      end: {
        x: 5700,
        y: 5200,
      },
      endId: "b40b8874-baa7-4f75-b704-ad04e52543d1",
      name: "TwoWayHEdge",
      id: "294afee0-ab98-408c-8059-a5e8da3e458b",
    },
    {
      start: {
        x: 5700,
        y: 5200,
      },
      startId: "b40b8874-baa7-4f75-b704-ad04e52543d1",
      end: {
        x: 5700,
        y: 4660,
      },
      endId: "26d3c55c-3247-41b3-afee-e1f136e25caf",
      name: "TwoWayVEdge",
      id: "ede7aff1-e6de-4c7f-ac15-b2d8d24ccd21",
    },
    {
      start: {
        x: 5700,
        y: 4660,
      },
      startId: "26d3c55c-3247-41b3-afee-e1f136e25caf",
      end: {
        x: 5700,
        y: 4160,
      },
      endId: "ae997fb6-e762-4381-87a3-15c938c6a0f5",
      name: "TwoWayVEdge",
      id: "e706b7d0-535e-49a9-a058-286ba181930b",
    },
    {
      start: {
        x: 5700,
        y: 4160,
      },
      startId: "ae997fb6-e762-4381-87a3-15c938c6a0f5",
      end: {
        x: 5700,
        y: 3560,
      },
      endId: "5ae46b80-d231-4194-84dd-16c72431bb54",
      name: "TwoWayVEdge",
      id: "61fcf199-f7c2-4b72-9d52-0a7a7be10df3",
    },
    {
      start: {
        x: 4080,
        y: 3540,
      },
      startId: "ad418492-ea3a-46c3-81f3-5a946f9313a7",
      end: {
        x: 4620,
        y: 3540,
      },
      endId: "273c75b0-6ad9-4b94-a21d-cdcacc144518",
      name: "TwoWayHEdge",
      id: "4fab5d90-03b8-469a-b621-a91ff3fd8e13",
    },
    {
      start: {
        x: 4620,
        y: 3540,
      },
      startId: "273c75b0-6ad9-4b94-a21d-cdcacc144518",
      end: {
        x: 5160,
        y: 3540,
      },
      endId: "c0a36c85-b31e-495c-b903-a5c6e3c844fc",
      name: "TwoWayHEdge",
      id: "93e42569-fe11-4783-acfb-c5dda8465832",
    },
    {
      start: {
        x: 5700,
        y: 3560,
      },
      startId: "5ae46b80-d231-4194-84dd-16c72431bb54",
      end: {
        x: 5700,
        y: 2960,
      },
      endId: "6f6d02e4-8c98-4d06-8b93-531a5428dcc7",
      name: "TwoWayVEdge",
      id: "61442d14-b151-4937-885f-27540a811327",
    },
    {
      start: {
        x: 5160,
        y: 3540,
      },
      startId: "c0a36c85-b31e-495c-b903-a5c6e3c844fc",
      end: {
        x: 5160,
        y: 2980,
      },
      endId: "d3c59e59-9e0d-401e-bb8c-504593b7daa6",
      name: "TwoWayVEdge",
      id: "ca6de315-d4fc-4659-8660-034e4dfd1b13",
    },
    {
      start: {
        x: 4080,
        y: 3540,
      },
      startId: "ad418492-ea3a-46c3-81f3-5a946f9313a7",
      end: {
        x: 4080,
        y: 2980,
      },
      endId: "1d4cefb7-4554-4b73-98f4-a9ac51519c9e",
      name: "TwoWayVEdge",
      id: "e6c90d11-9eda-4fa9-b142-e1d37c54ba3e",
    },
    {
      start: {
        x: 4080,
        y: 2980,
      },
      startId: "1d4cefb7-4554-4b73-98f4-a9ac51519c9e",
      end: {
        x: 5160,
        y: 2980,
      },
      endId: "d3c59e59-9e0d-401e-bb8c-504593b7daa6",
      name: "TwoWayHEdge",
      id: "b3179f14-916e-4550-b981-50a20181765a",
    },
    {
      start: {
        x: 5160,
        y: 2980,
      },
      startId: "d3c59e59-9e0d-401e-bb8c-504593b7daa6",
      end: {
        x: 5160,
        y: 2420,
      },
      endId: "38743a95-4984-4f3a-8eb4-07b46dbc584a",
      name: "TwoWayVEdge",
      id: "889fe340-f576-4448-8950-c436de3bc18a",
    },
    {
      start: {
        x: 5700,
        y: 2960,
      },
      startId: "6f6d02e4-8c98-4d06-8b93-531a5428dcc7",
      end: {
        x: 5700,
        y: 2420,
      },
      endId: "6d1cd74e-d519-4e85-9a93-a659b9c7ecfd",
      name: "TwoWayVEdge",
      id: "33d196da-3497-43a7-beb7-2c64590bd7d4",
    },
    {
      start: {
        x: 5160,
        y: 2420,
      },
      startId: "38743a95-4984-4f3a-8eb4-07b46dbc584a",
      end: {
        x: 5160,
        y: 1840,
      },
      endId: "f56a083e-a794-4b93-9b11-6bee91d8c19f",
      name: "TwoWayVEdge",
      id: "3a4ebcfa-d367-4b77-b310-47399743976e",
    },
    {
      start: {
        x: 5160,
        y: 1840,
      },
      startId: "f56a083e-a794-4b93-9b11-6bee91d8c19f",
      end: {
        x: 5700,
        y: 1840,
      },
      endId: "a0eac911-b36b-476d-9301-563779fb0368",
      name: "TwoWayHEdge",
      id: "7fd9ce91-1c79-4c1e-8a6a-167a0d4d1cce",
    },
    {
      start: {
        x: 5700,
        y: 1840,
      },
      startId: "a0eac911-b36b-476d-9301-563779fb0368",
      end: {
        x: 5700,
        y: 2420,
      },
      endId: "6d1cd74e-d519-4e85-9a93-a659b9c7ecfd",
      name: "TwoWayVEdge",
      id: "fc27bfe7-6a87-4fb3-b1d1-11899ced63c9",
    },
    {
      start: {
        x: 5160,
        y: 1840,
      },
      startId: "f56a083e-a794-4b93-9b11-6bee91d8c19f",
      end: {
        x: 5160,
        y: 1220,
      },
      endId: "ba1b909d-5f68-4cff-916a-c9fcf2338482",
      name: "TwoWayVEdge",
      id: "c097b3b8-5174-4c32-8a97-100382c947b1",
    },
    {
      start: {
        x: 5160,
        y: 1220,
      },
      startId: "ba1b909d-5f68-4cff-916a-c9fcf2338482",
      end: {
        x: 5160,
        y: 620,
      },
      endId: "2ce7a2c8-adbe-413d-9304-93ef6d79cceb",
      name: "TwoWayVEdge",
      id: "861696b3-4597-4f37-858b-dd7248558959",
    },
    {
      start: {
        x: 4080,
        y: 2980,
      },
      startId: "1d4cefb7-4554-4b73-98f4-a9ac51519c9e",
      end: {
        x: 4040,
        y: 2540,
      },
      endId: "a3347c95-e67c-4cbc-98c9-a2d60aef0b03",
      name: "TwoWayVEdge",
      id: "be7d3c02-cc30-415d-912d-ef4673646211",
    },
    {
      start: {
        x: 4040,
        y: 2540,
      },
      startId: "a3347c95-e67c-4cbc-98c9-a2d60aef0b03",
      end: {
        x: 4040,
        y: 2060,
      },
      endId: "be0946f4-039f-4510-b5f5-87e56a050dcb",
      name: "TwoWayVEdge",
      id: "ed49f54b-864a-456a-907c-ca94b16f8abd",
    },
    {
      start: {
        x: 4040,
        y: 2060,
      },
      startId: "be0946f4-039f-4510-b5f5-87e56a050dcb",
      end: {
        x: 3440,
        y: 2020,
      },
      endId: "bd610a15-005a-4145-9a23-cc3ba77f35a4",
      name: "TwoWayHEdge",
      id: "b4f1778a-352c-42b0-b9fa-689a02e0d2d8",
    },
    {
      start: {
        x: 3440,
        y: 2020,
      },
      startId: "bd610a15-005a-4145-9a23-cc3ba77f35a4",
      end: {
        x: 2900,
        y: 2040,
      },
      endId: "d5150388-eacc-41e1-917c-a68fdfa67297",
      name: "TwoWayHEdge",
      id: "f3d48abe-a855-4913-ba5e-71237d2ab35d",
    },
    {
      start: {
        x: 2900,
        y: 2040,
      },
      startId: "d5150388-eacc-41e1-917c-a68fdfa67297",
      end: {
        x: 2900,
        y: 2540,
      },
      endId: "dc335c00-faf0-4804-b5eb-ce5a7fdbf483",
      name: "TwoWayVEdge",
      id: "40a59631-aaea-4a22-9255-66f32439246a",
    },
    {
      start: {
        x: 2900,
        y: 2540,
      },
      startId: "dc335c00-faf0-4804-b5eb-ce5a7fdbf483",
      end: {
        x: 4040,
        y: 2540,
      },
      endId: "a3347c95-e67c-4cbc-98c9-a2d60aef0b03",
      name: "TwoWayHEdge",
      id: "f7b0de68-7af9-4b81-b121-67f16fa8aaa9",
    },
    {
      start: {
        x: 2900,
        y: 2040,
      },
      startId: "d5150388-eacc-41e1-917c-a68fdfa67297",
      end: {
        x: 2900,
        y: 1580,
      },
      endId: "e5947e2b-922c-4f53-a602-f0fbdcd593e0",
      name: "TwoWayVEdge",
      id: "0e41fc51-87e6-4421-a69e-f2eae38907cd",
    },
    {
      start: {
        x: 2900,
        y: 1580,
      },
      startId: "e5947e2b-922c-4f53-a602-f0fbdcd593e0",
      end: {
        x: 2900,
        y: 1080,
      },
      endId: "8a55b791-7a6f-4494-aec1-7fc3165d4f49",
      name: "TwoWayVEdge",
      id: "eb888c30-0c8c-4d44-9057-a0ed55cd678f",
    },
    {
      start: {
        x: 2900,
        y: 1080,
      },
      startId: "8a55b791-7a6f-4494-aec1-7fc3165d4f49",
      end: {
        x: 2900,
        y: 560,
      },
      endId: "21a4391b-3954-44a0-bfe4-9e5c4bb56b2d",
      name: "TwoWayVEdge",
      id: "b86ff361-97ab-42a1-a285-ff28aafbfb6d",
    },
    {
      start: {
        x: 2900,
        y: 560,
      },
      startId: "21a4391b-3954-44a0-bfe4-9e5c4bb56b2d",
      end: {
        x: 2900,
        y: 40,
      },
      endId: "ff121d17-8cd6-4b02-b497-fea0b23cbfd4",
      name: "TwoWayVEdge",
      id: "0240e426-c7d1-4230-a36a-7bae73149835",
    },
    {
      start: {
        x: 2900,
        y: 2540,
      },
      startId: "dc335c00-faf0-4804-b5eb-ce5a7fdbf483",
      end: {
        x: 2360,
        y: 2580,
      },
      endId: "95138de6-b273-41c6-859e-40270677478a",
      name: "TwoWayHEdge",
      id: "1505e555-4c00-4b40-ad05-d43811afc959",
    },
    {
      start: {
        x: 2360,
        y: 2580,
      },
      startId: "95138de6-b273-41c6-859e-40270677478a",
      end: {
        x: 1800,
        y: 2520,
      },
      endId: "e41ea3f2-0d42-4f28-b8da-4dd9e3839ad6",
      name: "TwoWayHEdge",
      id: "7a259d0a-a4f1-4207-a3e6-408c2667d69e",
    },
    {
      start: {
        x: 1800,
        y: 2520,
      },
      startId: "e41ea3f2-0d42-4f28-b8da-4dd9e3839ad6",
      end: {
        x: 1100,
        y: 2540,
      },
      endId: "bc147d75-859a-4451-8f0f-d2445169a1b9",
      name: "TwoWayHEdge",
      id: "0b2d95b0-a4b6-49d9-9ed9-bc817abbead4",
    },
    {
      start: {
        x: 2340,
        y: 5180,
      },
      startId: "76c644c0-5319-4519-aac8-1080909941e1",
      end: {
        x: 1720,
        y: 5220,
      },
      endId: "f6835483-0566-47ff-ab55-befd97e71e80",
      name: "TwoWayHEdge",
      id: "13e18de7-2dcd-4268-b39b-6a38aa941d62",
    },
    {
      start: {
        x: 1720,
        y: 5220,
      },
      startId: "f6835483-0566-47ff-ab55-befd97e71e80",
      end: {
        x: 1100,
        y: 5180,
      },
      endId: "e4d47017-417a-4137-83b1-f6b61c86abed",
      name: "TwoWayHEdge",
      id: "2f7146c2-4fa7-46f8-bae3-869bf8bb4e4e",
    },
    {
      start: {
        x: 1100,
        y: 5180,
      },
      startId: "e4d47017-417a-4137-83b1-f6b61c86abed",
      end: {
        x: 1100,
        y: 4640,
      },
      endId: "f7682617-0484-4f80-b86f-407349024c5c",
      name: "TwoWayVEdge",
      id: "8cf3c86a-7285-459b-a8ec-78abfcab18f5",
    },
    {
      start: {
        x: 1100,
        y: 4640,
      },
      startId: "f7682617-0484-4f80-b86f-407349024c5c",
      end: {
        x: 1100,
        y: 4100,
      },
      endId: "8778d3b8-3a1c-461d-b621-375b96d71822",
      name: "TwoWayVEdge",
      id: "d2c99089-8b1d-44b9-b2aa-8f2cd9d36b2d",
    },
    {
      start: {
        x: 1100,
        y: 4100,
      },
      startId: "8778d3b8-3a1c-461d-b621-375b96d71822",
      end: {
        x: 1100,
        y: 3500,
      },
      endId: "dd4c94e8-0758-456b-9b7b-e51133b37973",
      name: "TwoWayVEdge",
      id: "858ba057-b047-4477-a9bb-e47bd1a3e33b",
    },
    {
      start: {
        x: 1100,
        y: 3500,
      },
      startId: "dd4c94e8-0758-456b-9b7b-e51133b37973",
      end: {
        x: 1060,
        y: 3020,
      },
      endId: "69d4a78c-cb73-4cdf-b93b-6965095532a2",
      name: "TwoWayVEdge",
      id: "53f0aa7d-f007-4815-8df7-e0cd90364e14",
    },
    {
      start: {
        x: 1100,
        y: 2540,
      },
      startId: "bc147d75-859a-4451-8f0f-d2445169a1b9",
      end: {
        x: 1060,
        y: 3020,
      },
      endId: "69d4a78c-cb73-4cdf-b93b-6965095532a2",
      name: "TwoWayVEdge",
      id: "20d1f9ec-587e-4173-8b7a-a7f375e961e8",
    },
    {
      start: {
        x: 1100,
        y: 3500,
      },
      startId: "dd4c94e8-0758-456b-9b7b-e51133b37973",
      end: {
        x: 40,
        y: 3500,
      },
      endId: "28c57ecd-19e6-4b4a-89d6-d279a4cd5e7d",
      name: "TwoWayHEdge",
      id: "883319c7-103c-41e4-9f3e-b53e65f9baa1",
    },
    {
      start: {
        x: 40,
        y: 3500,
      },
      startId: "28c57ecd-19e6-4b4a-89d6-d279a4cd5e7d",
      end: {
        x: 40,
        y: 2760,
      },
      endId: "9e93f175-9201-44bc-a53e-75a6e730c40d",
      name: "TwoWayVEdge",
      id: "906542a5-59ec-43f6-a601-6bb6d4cc0092",
    },
    {
      start: {
        x: 40,
        y: 2760,
      },
      startId: "9e93f175-9201-44bc-a53e-75a6e730c40d",
      end: {
        x: 40,
        y: 1940,
      },
      endId: "2f56bed8-5cea-4ff1-8cba-0469c913a750",
      name: "TwoWayVEdge",
      id: "5269d373-1fb0-4388-9369-fb4b6606c123",
    },
    {
      start: {
        x: 40,
        y: 1940,
      },
      startId: "2f56bed8-5cea-4ff1-8cba-0469c913a750",
      end: {
        x: 40,
        y: 1380,
      },
      endId: "bfbc3c31-8890-47ff-97c0-4d1eb6a86660",
      name: "TwoWayVEdge",
      id: "9e06f2d2-d638-4383-ba06-e499e141e95f",
    },
    {
      start: {
        x: 40,
        y: 1380,
      },
      startId: "bfbc3c31-8890-47ff-97c0-4d1eb6a86660",
      end: {
        x: 820,
        y: 1380,
      },
      endId: "e39f52b1-390c-4d43-9fdf-ebbd5566f1df",
      name: "TwoWayHEdge",
      id: "7db7a63e-2c65-4a8a-b7e5-0430291c6dd7",
    },
    {
      start: {
        x: 820,
        y: 1380,
      },
      startId: "e39f52b1-390c-4d43-9fdf-ebbd5566f1df",
      end: {
        x: 800,
        y: 1940,
      },
      endId: "52f4d316-bfd6-4794-ba38-6af91aff5697",
      name: "TwoWayVEdge",
      id: "c00bddb0-647f-4f3f-84fd-694b109fd36a",
    },
    {
      start: {
        x: 800,
        y: 1940,
      },
      startId: "52f4d316-bfd6-4794-ba38-6af91aff5697",
      end: {
        x: 1280,
        y: 1960,
      },
      endId: "19b41d47-887d-4535-b8a4-5acd468969ae",
      name: "TwoWayHEdge",
      id: "eaad0020-83e4-499e-8e9f-825f42e31772",
    },
    {
      start: {
        x: 1280,
        y: 1960,
      },
      startId: "19b41d47-887d-4535-b8a4-5acd468969ae",
      end: {
        x: 1800,
        y: 1940,
      },
      endId: "a1239d18-2170-42ab-95b1-335bdc0cf6d2",
      name: "TwoWayHEdge",
      id: "f3c99eb3-76c2-4dcd-b626-f4ccd3274b04",
    },
    {
      start: {
        x: 820,
        y: 1380,
      },
      startId: "e39f52b1-390c-4d43-9fdf-ebbd5566f1df",
      end: {
        x: 1780,
        y: 1380,
      },
      endId: "9fb33d62-d96f-4085-85bb-28dfb5fa3b12",
      name: "TwoWayHEdge",
      id: "0c243afb-526f-4a17-968a-d830e876e533",
    },
    {
      start: {
        x: 1780,
        y: 1380,
      },
      startId: "9fb33d62-d96f-4085-85bb-28dfb5fa3b12",
      end: {
        x: 1800,
        y: 1940,
      },
      endId: "a1239d18-2170-42ab-95b1-335bdc0cf6d2",
      name: "TwoWayVEdge",
      id: "4a769eb3-a3c5-41e7-a29f-c83c450908d2",
    },
    {
      start: {
        x: 820,
        y: 1380,
      },
      startId: "e39f52b1-390c-4d43-9fdf-ebbd5566f1df",
      end: {
        x: 820,
        y: 860,
      },
      endId: "b4d18726-c22c-4711-a53d-530572d80a9d",
      name: "TwoWayVEdge",
      id: "05b70071-b49c-4bfa-8d7e-7ae5f9ed3f47",
    },
    {
      start: {
        x: 820,
        y: 860,
      },
      startId: "b4d18726-c22c-4711-a53d-530572d80a9d",
      end: {
        x: 820,
        y: 320,
      },
      endId: "491e03d1-9f2d-4170-a4b2-13646ce67862",
      name: "TwoWayVEdge",
      id: "661ab21e-a14d-467a-891a-33ef66ad0720",
    },
  ],
};
export default hawaiianIslandsCaveMap;
