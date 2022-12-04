import type { GraphJSON } from "global";

const arcticCaveMap: GraphJSON = {
  vertices: [
    {
      position: {
        x: 1900,
        y: 4020,
      },
      name: "BattleField",
      id: "a8e11938-2c3b-4685-a716-c0201daaf77e",
      edges: [
        "bf4ef13c-32c5-4a8f-aa18-9886be59dc79",
        "17660ca4-6b07-42f8-8590-6bf894583482",
      ],
      area: "ArcticCave",
      bottom: "c0ddbaa8-e415-441e-8fd5-5dec985ffcd0",
      top: "4195d805-33aa-48a7-9e83-3886de07070a",
    },
    {
      id: "c0ddbaa8-e415-441e-8fd5-5dec985ffcd0",
      name: "CaveField",
      position: {
        x: 1900,
        y: 4440,
      },
      edges: ["bf4ef13c-32c5-4a8f-aa18-9886be59dc79"],
      area: "ArcticCave",
      top: "a8e11938-2c3b-4685-a716-c0201daaf77e",
    },
    {
      id: "4195d805-33aa-48a7-9e83-3886de07070a",
      name: "TreasureField",
      position: {
        x: 1880,
        y: 3620,
      },
      edges: [
        "17660ca4-6b07-42f8-8590-6bf894583482",
        "52c76dfa-6dcd-4ec1-9bfa-f0dbb5c6261b",
        "a869914f-409e-4d09-8194-258f62b4496d",
        "7ea906ed-5a68-40fc-976e-6b6ee566b2af",
      ],
      area: "ArcticCave",
      bottom: "a8e11938-2c3b-4685-a716-c0201daaf77e",
      top: "e5a0700e-38a4-469f-973a-6316e037ffa5",
      left: "6130efab-d28b-48c7-86fd-08d2b6b55ca4",
      right: "5ecb827c-b505-4147-8ec3-64a3d952fa51",
    },
    {
      id: "e5a0700e-38a4-469f-973a-6316e037ffa5",
      name: "DamageField",
      position: {
        x: 1920,
        y: 3200,
      },
      edges: [
        "52c76dfa-6dcd-4ec1-9bfa-f0dbb5c6261b",
        "fc91ee21-f42b-4a8c-8dd1-21efd0f64c57",
      ],
      area: "ArcticCave",
      bottom: "4195d805-33aa-48a7-9e83-3886de07070a",
      top: "d3e5ffe6-2bb7-49f5-b9bc-7eca44d8acbf",
    },
    {
      id: "d3e5ffe6-2bb7-49f5-b9bc-7eca44d8acbf",
      name: "BattleField",
      position: {
        x: 1860,
        y: 2800,
      },
      edges: [
        "fc91ee21-f42b-4a8c-8dd1-21efd0f64c57",
        "99d96394-7c62-409f-88b0-e5c6d835c4b2",
        "9870dde0-3794-445c-bb24-e1766bb499bc",
      ],
      area: "ArcticCave",
      bottom: "e5a0700e-38a4-469f-973a-6316e037ffa5",
      left: "00438450-1d87-419f-b45d-6d52be0991b0",
      right: "abfe70b2-739d-4e48-805f-a3c6a23e44ec",
    },
    {
      id: "6130efab-d28b-48c7-86fd-08d2b6b55ca4",
      name: "BattleField",
      position: {
        x: 1340,
        y: 3620,
      },
      edges: [
        "a869914f-409e-4d09-8194-258f62b4496d",
        "45e766f9-d9e0-4920-b2bf-04e4459c8c45",
        "edc3f63c-10e5-4fcb-898c-b0c8495897e5",
      ],
      area: "ArcticCave",
      right: "4195d805-33aa-48a7-9e83-3886de07070a",
      top: "00438450-1d87-419f-b45d-6d52be0991b0",
      left: "55112194-5e72-4099-98c9-b56549086d27",
    },
    {
      id: "00438450-1d87-419f-b45d-6d52be0991b0",
      name: "BattleField",
      position: {
        x: 1380,
        y: 2800,
      },
      edges: [
        "45e766f9-d9e0-4920-b2bf-04e4459c8c45",
        "99d96394-7c62-409f-88b0-e5c6d835c4b2",
        "6882f455-15b8-441b-b3be-925bf3fb055d",
      ],
      area: "ArcticCave",
      bottom: "6130efab-d28b-48c7-86fd-08d2b6b55ca4",
      right: "d3e5ffe6-2bb7-49f5-b9bc-7eca44d8acbf",
      left: "13e8384e-b19a-471e-8dcf-71bd848ba34e",
    },
    {
      id: "abfe70b2-739d-4e48-805f-a3c6a23e44ec",
      name: "CollectAllMoneyField",
      position: {
        x: 2340,
        y: 2820,
      },
      edges: ["9870dde0-3794-445c-bb24-e1766bb499bc"],
      area: "ArcticCave",
      left: "d3e5ffe6-2bb7-49f5-b9bc-7eca44d8acbf",
    },
    {
      id: "5ecb827c-b505-4147-8ec3-64a3d952fa51",
      name: "BattleField",
      position: {
        x: 2460,
        y: 3600,
      },
      edges: [
        "7ea906ed-5a68-40fc-976e-6b6ee566b2af",
        "cad76a49-2631-4875-ac12-cf528b74a30b",
      ],
      area: "ArcticCave",
      left: "4195d805-33aa-48a7-9e83-3886de07070a",
      right: "9ea695eb-1d82-44f0-952e-14fb36861fd1",
    },
    {
      id: "55112194-5e72-4099-98c9-b56549086d27",
      name: "BattleField",
      position: {
        x: 760,
        y: 3640,
      },
      edges: [
        "edc3f63c-10e5-4fcb-898c-b0c8495897e5",
        "2522f6c3-2450-429f-a054-fc62882bad58",
      ],
      area: "ArcticCave",
      right: "6130efab-d28b-48c7-86fd-08d2b6b55ca4",
      left: "b077fa83-f969-4134-bd4f-8cd3327a6eab",
    },
    {
      id: "b077fa83-f969-4134-bd4f-8cd3327a6eab",
      name: "BattleField",
      position: {
        x: 200,
        y: 3620,
      },
      edges: [
        "2522f6c3-2450-429f-a054-fc62882bad58",
        "f57049e1-1cf5-4914-9238-ff8b54cbe4fb",
      ],
      area: "ArcticCave",
      right: "55112194-5e72-4099-98c9-b56549086d27",
      top: "db89e2c2-c028-4f12-9df3-2f3c94b3e89e",
    },
    {
      id: "db89e2c2-c028-4f12-9df3-2f3c94b3e89e",
      name: "MagicBookField",
      position: {
        x: 120,
        y: 3200,
      },
      edges: [
        "f57049e1-1cf5-4914-9238-ff8b54cbe4fb",
        "6996cc76-21fd-496b-af38-d98dfa89d356",
      ],
      area: "ArcticCave",
      bottom: "b077fa83-f969-4134-bd4f-8cd3327a6eab",
      top: "760203cc-3e71-4b13-8307-8a65e7bab2c6",
    },
    {
      id: "760203cc-3e71-4b13-8307-8a65e7bab2c6",
      name: "BattleField",
      position: {
        x: 240,
        y: 2800,
      },
      edges: [
        "6996cc76-21fd-496b-af38-d98dfa89d356",
        "0ce8128b-b100-4eec-b58a-9c5b9bf612aa",
      ],
      area: "ArcticCave",
      bottom: "db89e2c2-c028-4f12-9df3-2f3c94b3e89e",
      right: "13e8384e-b19a-471e-8dcf-71bd848ba34e",
    },
    {
      id: "13e8384e-b19a-471e-8dcf-71bd848ba34e",
      name: "TreasureField",
      position: {
        x: 800,
        y: 2760,
      },
      edges: [
        "0ce8128b-b100-4eec-b58a-9c5b9bf612aa",
        "6882f455-15b8-441b-b3be-925bf3fb055d",
        "15e4ed47-43a9-4fcb-aa51-076de44d0289",
      ],
      area: "ArcticCave",
      left: "760203cc-3e71-4b13-8307-8a65e7bab2c6",
      right: "00438450-1d87-419f-b45d-6d52be0991b0",
      top: "b64edb02-779b-4446-bf8e-b922800fb75f",
    },
    {
      id: "9ea695eb-1d82-44f0-952e-14fb36861fd1",
      name: "BattleField",
      position: {
        x: 2980,
        y: 3620,
      },
      edges: [
        "cad76a49-2631-4875-ac12-cf528b74a30b",
        "b8349551-7ac5-4c47-bfae-c44b868cc07c",
      ],
      area: "ArcticCave",
      left: "5ecb827c-b505-4147-8ec3-64a3d952fa51",
      right: "d35977ff-dd3a-42c5-bda2-2579924e0d63",
    },
    {
      id: "d35977ff-dd3a-42c5-bda2-2579924e0d63",
      name: "RedTreasureField",
      position: {
        x: 3540,
        y: 3600,
      },
      edges: [
        "b8349551-7ac5-4c47-bfae-c44b868cc07c",
        "69f054e0-c179-40b8-adc7-97431ee1eb15",
      ],
      area: "ArcticCave",
      left: "9ea695eb-1d82-44f0-952e-14fb36861fd1",
      bottom: "70ae7439-83e4-4483-b01d-0ee7f886111e",
    },
    {
      id: "70ae7439-83e4-4483-b01d-0ee7f886111e",
      name: "BattleField",
      position: {
        x: 3620,
        y: 4060,
      },
      edges: [
        "69f054e0-c179-40b8-adc7-97431ee1eb15",
        "55036be0-6c9f-4a29-948f-88b27e397306",
      ],
      area: "ArcticCave",
      top: "d35977ff-dd3a-42c5-bda2-2579924e0d63",
      right: "ab5aad3a-3e12-4e83-80ac-4a8311208fa5",
    },
    {
      id: "ab5aad3a-3e12-4e83-80ac-4a8311208fa5",
      name: "BattleField",
      position: {
        x: 4180,
        y: 4080,
      },
      edges: [
        "55036be0-6c9f-4a29-948f-88b27e397306",
        "a5fb9954-e864-4876-a894-e0fcd7bcf151",
      ],
      area: "ArcticCave",
      left: "70ae7439-83e4-4483-b01d-0ee7f886111e",
      right: "d4635519-ef56-4d1d-bb4a-2cc81e472a64",
    },
    {
      id: "d4635519-ef56-4d1d-bb4a-2cc81e472a64",
      name: "TreasureField",
      position: {
        x: 4720,
        y: 4060,
      },
      edges: [
        "a5fb9954-e864-4876-a894-e0fcd7bcf151",
        "c8a0c4e2-bf99-4557-834c-7d79998cf696",
      ],
      area: "ArcticCave",
      left: "ab5aad3a-3e12-4e83-80ac-4a8311208fa5",
      top: "9d492edb-44f0-4804-bc89-67fe72a173cf",
    },
    {
      id: "9d492edb-44f0-4804-bc89-67fe72a173cf",
      name: "BattleField",
      position: {
        x: 4780,
        y: 3580,
      },
      edges: [
        "c8a0c4e2-bf99-4557-834c-7d79998cf696",
        "e8a0a241-8c68-4774-a209-d768e49a0c4b",
      ],
      area: "ArcticCave",
      bottom: "d4635519-ef56-4d1d-bb4a-2cc81e472a64",
      top: "c5d96ded-ebb6-44f8-98c7-0e4d357c73ae",
    },
    {
      id: "c5d96ded-ebb6-44f8-98c7-0e4d357c73ae",
      name: "BattleField",
      position: {
        x: 4640,
        y: 3080,
      },
      edges: [
        "e8a0a241-8c68-4774-a209-d768e49a0c4b",
        "2fe5fd16-61d6-4a81-b848-fa7024276ea0",
        "2078f742-04f3-4a5f-b18c-722b28692bdc",
      ],
      area: "ArcticCave",
      bottom: "9d492edb-44f0-4804-bc89-67fe72a173cf",
      top: "eb473706-ec16-457d-a41a-2d4ba21ba0d1",
      left: "250235a1-a5fa-429e-8f66-741dc7f80d76",
    },
    {
      id: "eb473706-ec16-457d-a41a-2d4ba21ba0d1",
      name: "MagicBookField",
      position: {
        x: 4680,
        y: 2680,
      },
      edges: [
        "2fe5fd16-61d6-4a81-b848-fa7024276ea0",
        "7ebfccf7-d5e5-42dc-882b-c3a161202a30",
      ],
      area: "ArcticCave",
      bottom: "c5d96ded-ebb6-44f8-98c7-0e4d357c73ae",
      top: "62bcf7cc-d5a5-41d0-90a1-289a26d08123",
    },
    {
      id: "250235a1-a5fa-429e-8f66-741dc7f80d76",
      name: "BattleField",
      position: {
        x: 4180,
        y: 3040,
      },
      edges: [
        "2078f742-04f3-4a5f-b18c-722b28692bdc",
        "cfeb89b9-aa3b-445c-9c22-15703b3f64ae",
      ],
      area: "ArcticCave",
      right: "c5d96ded-ebb6-44f8-98c7-0e4d357c73ae",
      top: "846baf4a-388a-4fc5-82f2-42755dcaaf26",
    },
    {
      id: "62bcf7cc-d5a5-41d0-90a1-289a26d08123",
      name: "BattleField",
      position: {
        x: 4620,
        y: 2300,
      },
      edges: [
        "7ebfccf7-d5e5-42dc-882b-c3a161202a30",
        "4c97bc6e-5006-4349-adf5-01eff8d9c2af",
        "301cf35d-8256-4728-bfb1-5edb685c9a9e",
      ],
      area: "ArcticCave",
      bottom: "eb473706-ec16-457d-a41a-2d4ba21ba0d1",
      left: "846baf4a-388a-4fc5-82f2-42755dcaaf26",
      top: "6c7250f3-0704-433b-bdc9-9374585532ba",
    },
    {
      id: "846baf4a-388a-4fc5-82f2-42755dcaaf26",
      name: "TreasureField",
      position: {
        x: 4140,
        y: 2340,
      },
      edges: [
        "4c97bc6e-5006-4349-adf5-01eff8d9c2af",
        "cfeb89b9-aa3b-445c-9c22-15703b3f64ae",
      ],
      area: "ArcticCave",
      right: "62bcf7cc-d5a5-41d0-90a1-289a26d08123",
      bottom: "250235a1-a5fa-429e-8f66-741dc7f80d76",
    },
    {
      id: "6c7250f3-0704-433b-bdc9-9374585532ba",
      name: "DamageField",
      position: {
        x: 4660,
        y: 1840,
      },
      edges: [
        "301cf35d-8256-4728-bfb1-5edb685c9a9e",
        "e8a322a4-9367-4164-ab63-a5a06e83bce7",
      ],
      area: "ArcticCave",
      bottom: "62bcf7cc-d5a5-41d0-90a1-289a26d08123",
      top: "cc544e2c-e3c9-49da-b1d1-697c2e76796e",
    },
    {
      id: "cc544e2c-e3c9-49da-b1d1-697c2e76796e",
      name: "TreasureField",
      position: {
        x: 4600,
        y: 1380,
      },
      edges: [
        "e8a322a4-9367-4164-ab63-a5a06e83bce7",
        "2fa9abaa-56ae-4525-a84a-ab96cdec36e4",
        "c73a33c3-9f35-4f40-869c-f901f7237ecc",
      ],
      area: "ArcticCave",
      bottom: "6c7250f3-0704-433b-bdc9-9374585532ba",
      left: "b9d83827-d9ce-45db-9ec6-13934942b613",
      top: "bf9d0f91-95ad-4429-a6a9-6e56a42cf319",
    },
    {
      id: "b9d83827-d9ce-45db-9ec6-13934942b613",
      name: "BattleField",
      position: {
        x: 4120,
        y: 1360,
      },
      edges: [
        "2fa9abaa-56ae-4525-a84a-ab96cdec36e4",
        "001231c4-1939-4c54-a070-f487a555350d",
      ],
      area: "ArcticCave",
      right: "cc544e2c-e3c9-49da-b1d1-697c2e76796e",
      left: "4f02501e-c5fb-4598-b68d-ff008d3810d7",
    },
    {
      id: "4f02501e-c5fb-4598-b68d-ff008d3810d7",
      name: "BattleField",
      position: {
        x: 3600,
        y: 1380,
      },
      edges: [
        "001231c4-1939-4c54-a070-f487a555350d",
        "2a5edd83-b54f-4908-acd0-ad234b21b262",
      ],
      area: "ArcticCave",
      right: "b9d83827-d9ce-45db-9ec6-13934942b613",
      bottom: "8af8c53e-cf2e-4cec-8d58-70b5b6ed8f17",
    },
    {
      id: "8af8c53e-cf2e-4cec-8d58-70b5b6ed8f17",
      name: "WhiteTreasureField",
      position: {
        x: 3620,
        y: 1780,
      },
      edges: ["2a5edd83-b54f-4908-acd0-ad234b21b262"],
      area: "ArcticCave",
      top: "4f02501e-c5fb-4598-b68d-ff008d3810d7",
    },
    {
      id: "bf9d0f91-95ad-4429-a6a9-6e56a42cf319",
      name: "DamageField",
      position: {
        x: 4620,
        y: 900,
      },
      edges: [
        "c73a33c3-9f35-4f40-869c-f901f7237ecc",
        "1715402e-835d-4219-a1a6-996af61180aa",
      ],
      area: "ArcticCave",
      bottom: "cc544e2c-e3c9-49da-b1d1-697c2e76796e",
      top: "29ff15f4-a9e5-4c19-9c25-2c06ef7f01df",
    },
    {
      id: "29ff15f4-a9e5-4c19-9c25-2c06ef7f01df",
      name: "BattleField",
      position: {
        x: 4560,
        y: 440,
      },
      edges: [
        "1715402e-835d-4219-a1a6-996af61180aa",
        "494aeba8-71c5-4c79-8171-9d68c0fb1964",
      ],
      area: "ArcticCave",
      bottom: "bf9d0f91-95ad-4429-a6a9-6e56a42cf319",
      left: "ca4c76a6-f13a-40c5-810f-f3a9598de4c3",
    },
    {
      id: "ca4c76a6-f13a-40c5-810f-f3a9598de4c3",
      name: "BattleField",
      position: {
        x: 4080,
        y: 400,
      },
      edges: [
        "494aeba8-71c5-4c79-8171-9d68c0fb1964",
        "285b3e95-4342-45f4-a8a1-0f9850ac4572",
      ],
      area: "ArcticCave",
      right: "29ff15f4-a9e5-4c19-9c25-2c06ef7f01df",
      left: "c0745b78-888f-42f6-a705-4da219302e76",
    },
    {
      id: "c0745b78-888f-42f6-a705-4da219302e76",
      name: "BattleField",
      position: {
        x: 3600,
        y: 400,
      },
      edges: [
        "285b3e95-4342-45f4-a8a1-0f9850ac4572",
        "1c8fe28d-42d2-4e97-8277-25d336008730",
      ],
      area: "ArcticCave",
      right: "ca4c76a6-f13a-40c5-810f-f3a9598de4c3",
      left: "999f3a8d-c07e-4760-a01c-c0acf8fa3874",
    },
    {
      id: "999f3a8d-c07e-4760-a01c-c0acf8fa3874",
      name: "KeyTreasureField",
      position: {
        x: 3160,
        y: 440,
      },
      edges: ["1c8fe28d-42d2-4e97-8277-25d336008730"],
      area: "ArcticCave",
      right: "c0745b78-888f-42f6-a705-4da219302e76",
    },
    {
      id: "b64edb02-779b-4446-bf8e-b922800fb75f",
      name: "DamageField",
      position: {
        x: 760,
        y: 2340,
      },
      edges: [
        "15e4ed47-43a9-4fcb-aa51-076de44d0289",
        "ec10c954-2a50-4c5f-a24c-dc393e45273a",
      ],
      area: "ArcticCave",
      bottom: "13e8384e-b19a-471e-8dcf-71bd848ba34e",
      top: "8384e362-bec0-4353-bbc6-f1d6e9a32805",
    },
    {
      id: "8384e362-bec0-4353-bbc6-f1d6e9a32805",
      name: "MagicBookField",
      position: {
        x: 780,
        y: 1880,
      },
      edges: [
        "ec10c954-2a50-4c5f-a24c-dc393e45273a",
        "ce6365aa-3f46-439e-a7e3-2e4a63526a72",
        "020aa5b2-1407-4735-9a6d-34c12f8bf233",
      ],
      area: "ArcticCave",
      bottom: "b64edb02-779b-4446-bf8e-b922800fb75f",
      top: "b6b1b23b-2b09-4399-9f96-3d010434c182",
      right: "a9cf48a8-fd7d-420b-aba2-c217dff2a856",
    },
    {
      id: "b6b1b23b-2b09-4399-9f96-3d010434c182",
      name: "BattleField",
      position: {
        x: 800,
        y: 1420,
      },
      edges: [
        "ce6365aa-3f46-439e-a7e3-2e4a63526a72",
        "7cc5a4f0-207e-4c2a-8450-d3188a1fbba6",
        "4ce48d9c-87d4-483c-9213-8024535258d1",
      ],
      area: "ArcticCave",
      bottom: "8384e362-bec0-4353-bbc6-f1d6e9a32805",
      right: "381b622f-7a98-4db9-8097-96993de44283",
      left: "84273116-dab1-42c1-b7a3-3c0c963ebe37",
    },
    {
      id: "a9cf48a8-fd7d-420b-aba2-c217dff2a856",
      name: "BattleField",
      position: {
        x: 1380,
        y: 1860,
      },
      edges: [
        "020aa5b2-1407-4735-9a6d-34c12f8bf233",
        "c5a605c0-cfc2-4217-8157-3bef4797de98",
      ],
      area: "ArcticCave",
      left: "8384e362-bec0-4353-bbc6-f1d6e9a32805",
      right: "21fe90cd-edcf-4c49-aded-83a5ffbee13f",
    },
    {
      id: "21fe90cd-edcf-4c49-aded-83a5ffbee13f",
      name: "BattleField",
      position: {
        x: 1920,
        y: 1880,
      },
      edges: [
        "c5a605c0-cfc2-4217-8157-3bef4797de98",
        "2c1178eb-5eb7-47e3-925e-b820994cbe0e",
      ],
      area: "ArcticCave",
      left: "a9cf48a8-fd7d-420b-aba2-c217dff2a856",
      top: "381b622f-7a98-4db9-8097-96993de44283",
    },
    {
      id: "381b622f-7a98-4db9-8097-96993de44283",
      name: "TreasureField",
      position: {
        x: 1820,
        y: 1420,
      },
      edges: [
        "2c1178eb-5eb7-47e3-925e-b820994cbe0e",
        "7cc5a4f0-207e-4c2a-8450-d3188a1fbba6",
        "6de95496-5eb0-483c-8d9c-e9f94749c76f",
      ],
      area: "ArcticCave",
      bottom: "21fe90cd-edcf-4c49-aded-83a5ffbee13f",
      left: "b6b1b23b-2b09-4399-9f96-3d010434c182",
      top: "4bc6b4f2-7984-497b-ab08-d1e68df33e24",
    },
    {
      id: "4bc6b4f2-7984-497b-ab08-d1e68df33e24",
      name: "RedTreasureField",
      position: {
        x: 1880,
        y: 940,
      },
      edges: [
        "6de95496-5eb0-483c-8d9c-e9f94749c76f",
        "68e4bbfb-9b1d-449f-afce-d717ea9e36a1",
      ],
      area: "ArcticCave",
      bottom: "381b622f-7a98-4db9-8097-96993de44283",
      top: "723162fc-7819-4d40-8d88-a38b820a3b29",
    },
    {
      id: "723162fc-7819-4d40-8d88-a38b820a3b29",
      name: "BattleField",
      position: {
        x: 1800,
        y: 480,
      },
      edges: [
        "68e4bbfb-9b1d-449f-afce-d717ea9e36a1",
        "07d3c1eb-0270-4a00-9071-c7303474216b",
      ],
      area: "ArcticCave",
      bottom: "4bc6b4f2-7984-497b-ab08-d1e68df33e24",
      top: "f3d94efa-da94-493a-b06c-e465048d6a22",
    },
    {
      id: "f3d94efa-da94-493a-b06c-e465048d6a22",
      name: "CaveField",
      position: {
        x: 1860,
        y: 40,
      },
      edges: ["07d3c1eb-0270-4a00-9071-c7303474216b"],
      area: "ArcticCave",
      bottom: "723162fc-7819-4d40-8d88-a38b820a3b29",
    },
    {
      id: "84273116-dab1-42c1-b7a3-3c0c963ebe37",
      name: "TreasureField",
      position: {
        x: 120,
        y: 1460,
      },
      edges: [
        "4ce48d9c-87d4-483c-9213-8024535258d1",
        "dae5f8f3-8a34-4ff2-a5c6-913130fd713e",
      ],
      area: "ArcticCave",
      right: "b6b1b23b-2b09-4399-9f96-3d010434c182",
      top: "04526d32-f38b-4f31-853a-f126dddc4734",
    },
    {
      id: "04526d32-f38b-4f31-853a-f126dddc4734",
      name: "BattleField",
      position: {
        x: 40,
        y: 820,
      },
      edges: [
        "dae5f8f3-8a34-4ff2-a5c6-913130fd713e",
        "7c9dbc09-a5ee-42cb-8939-35c1a5c039c3",
      ],
      area: "ArcticCave",
      bottom: "84273116-dab1-42c1-b7a3-3c0c963ebe37",
      top: "5508a59b-5f39-4660-8b50-41d38a9c7cf5",
    },
    {
      id: "5508a59b-5f39-4660-8b50-41d38a9c7cf5",
      name: "BattleField",
      position: {
        x: 120,
        y: 200,
      },
      edges: [
        "7c9dbc09-a5ee-42cb-8939-35c1a5c039c3",
        "39c6959f-1fc5-49e3-8797-4d608ec997a4",
      ],
      area: "ArcticCave",
      bottom: "04526d32-f38b-4f31-853a-f126dddc4734",
      right: "e5523569-c303-4b8f-a67a-89b47b910b95",
    },
    {
      id: "e5523569-c303-4b8f-a67a-89b47b910b95",
      name: "MagicStoreField",
      position: {
        x: 760,
        y: 80,
      },
      edges: ["39c6959f-1fc5-49e3-8797-4d608ec997a4"],
      area: "ArcticCave",
      left: "5508a59b-5f39-4660-8b50-41d38a9c7cf5",
    },
  ],
  edges: [
    {
      start: {
        x: 1900,
        y: 4020,
      },
      startId: "a8e11938-2c3b-4685-a716-c0201daaf77e",
      end: {
        x: 1900,
        y: 4440,
      },
      endId: "c0ddbaa8-e415-441e-8fd5-5dec985ffcd0",
      name: "TwoWayVEdge",
      id: "bf4ef13c-32c5-4a8f-aa18-9886be59dc79",
    },
    {
      start: {
        x: 1900,
        y: 4020,
      },
      startId: "a8e11938-2c3b-4685-a716-c0201daaf77e",
      end: {
        x: 1880,
        y: 3620,
      },
      endId: "4195d805-33aa-48a7-9e83-3886de07070a",
      name: "TwoWayVEdge",
      id: "17660ca4-6b07-42f8-8590-6bf894583482",
    },
    {
      start: {
        x: 1880,
        y: 3620,
      },
      startId: "4195d805-33aa-48a7-9e83-3886de07070a",
      end: {
        x: 1920,
        y: 3200,
      },
      endId: "e5a0700e-38a4-469f-973a-6316e037ffa5",
      name: "TwoWayVEdge",
      id: "52c76dfa-6dcd-4ec1-9bfa-f0dbb5c6261b",
    },
    {
      start: {
        x: 1920,
        y: 3200,
      },
      startId: "e5a0700e-38a4-469f-973a-6316e037ffa5",
      end: {
        x: 1860,
        y: 2800,
      },
      endId: "d3e5ffe6-2bb7-49f5-b9bc-7eca44d8acbf",
      name: "TwoWayVEdge",
      id: "fc91ee21-f42b-4a8c-8dd1-21efd0f64c57",
    },
    {
      start: {
        x: 1880,
        y: 3620,
      },
      startId: "4195d805-33aa-48a7-9e83-3886de07070a",
      end: {
        x: 1340,
        y: 3620,
      },
      endId: "6130efab-d28b-48c7-86fd-08d2b6b55ca4",
      name: "TwoWayHEdge",
      id: "a869914f-409e-4d09-8194-258f62b4496d",
    },
    {
      start: {
        x: 1340,
        y: 3620,
      },
      startId: "6130efab-d28b-48c7-86fd-08d2b6b55ca4",
      end: {
        x: 1380,
        y: 2800,
      },
      endId: "00438450-1d87-419f-b45d-6d52be0991b0",
      name: "TwoWayVEdge",
      id: "45e766f9-d9e0-4920-b2bf-04e4459c8c45",
    },
    {
      start: {
        x: 1380,
        y: 2800,
      },
      startId: "00438450-1d87-419f-b45d-6d52be0991b0",
      end: {
        x: 1860,
        y: 2800,
      },
      endId: "d3e5ffe6-2bb7-49f5-b9bc-7eca44d8acbf",
      name: "TwoWayHEdge",
      id: "99d96394-7c62-409f-88b0-e5c6d835c4b2",
    },
    {
      start: {
        x: 1860,
        y: 2800,
      },
      startId: "d3e5ffe6-2bb7-49f5-b9bc-7eca44d8acbf",
      end: {
        x: 2340,
        y: 2820,
      },
      endId: "abfe70b2-739d-4e48-805f-a3c6a23e44ec",
      name: "TwoWayHEdge",
      id: "9870dde0-3794-445c-bb24-e1766bb499bc",
    },
    {
      start: {
        x: 1880,
        y: 3620,
      },
      startId: "4195d805-33aa-48a7-9e83-3886de07070a",
      end: {
        x: 2460,
        y: 3600,
      },
      endId: "5ecb827c-b505-4147-8ec3-64a3d952fa51",
      name: "TwoWayHEdge",
      id: "7ea906ed-5a68-40fc-976e-6b6ee566b2af",
    },
    {
      start: {
        x: 1340,
        y: 3620,
      },
      startId: "6130efab-d28b-48c7-86fd-08d2b6b55ca4",
      end: {
        x: 760,
        y: 3640,
      },
      endId: "55112194-5e72-4099-98c9-b56549086d27",
      name: "TwoWayHEdge",
      id: "edc3f63c-10e5-4fcb-898c-b0c8495897e5",
    },
    {
      start: {
        x: 760,
        y: 3640,
      },
      startId: "55112194-5e72-4099-98c9-b56549086d27",
      end: {
        x: 200,
        y: 3620,
      },
      endId: "b077fa83-f969-4134-bd4f-8cd3327a6eab",
      name: "TwoWayHEdge",
      id: "2522f6c3-2450-429f-a054-fc62882bad58",
    },
    {
      start: {
        x: 200,
        y: 3620,
      },
      startId: "b077fa83-f969-4134-bd4f-8cd3327a6eab",
      end: {
        x: 120,
        y: 3200,
      },
      endId: "db89e2c2-c028-4f12-9df3-2f3c94b3e89e",
      name: "TwoWayVEdge",
      id: "f57049e1-1cf5-4914-9238-ff8b54cbe4fb",
    },
    {
      start: {
        x: 120,
        y: 3200,
      },
      startId: "db89e2c2-c028-4f12-9df3-2f3c94b3e89e",
      end: {
        x: 240,
        y: 2800,
      },
      endId: "760203cc-3e71-4b13-8307-8a65e7bab2c6",
      name: "TwoWayVEdge",
      id: "6996cc76-21fd-496b-af38-d98dfa89d356",
    },
    {
      start: {
        x: 240,
        y: 2800,
      },
      startId: "760203cc-3e71-4b13-8307-8a65e7bab2c6",
      end: {
        x: 800,
        y: 2760,
      },
      endId: "13e8384e-b19a-471e-8dcf-71bd848ba34e",
      name: "TwoWayHEdge",
      id: "0ce8128b-b100-4eec-b58a-9c5b9bf612aa",
    },
    {
      start: {
        x: 800,
        y: 2760,
      },
      startId: "13e8384e-b19a-471e-8dcf-71bd848ba34e",
      end: {
        x: 1380,
        y: 2800,
      },
      endId: "00438450-1d87-419f-b45d-6d52be0991b0",
      name: "TwoWayHEdge",
      id: "6882f455-15b8-441b-b3be-925bf3fb055d",
    },
    {
      start: {
        x: 2460,
        y: 3600,
      },
      startId: "5ecb827c-b505-4147-8ec3-64a3d952fa51",
      end: {
        x: 2980,
        y: 3620,
      },
      endId: "9ea695eb-1d82-44f0-952e-14fb36861fd1",
      name: "TwoWayHEdge",
      id: "cad76a49-2631-4875-ac12-cf528b74a30b",
    },
    {
      start: {
        x: 2980,
        y: 3620,
      },
      startId: "9ea695eb-1d82-44f0-952e-14fb36861fd1",
      end: {
        x: 3540,
        y: 3600,
      },
      endId: "d35977ff-dd3a-42c5-bda2-2579924e0d63",
      name: "TwoWayHEdge",
      id: "b8349551-7ac5-4c47-bfae-c44b868cc07c",
    },
    {
      start: {
        x: 3540,
        y: 3600,
      },
      startId: "d35977ff-dd3a-42c5-bda2-2579924e0d63",
      end: {
        x: 3620,
        y: 4060,
      },
      endId: "70ae7439-83e4-4483-b01d-0ee7f886111e",
      name: "TwoWayVEdge",
      id: "69f054e0-c179-40b8-adc7-97431ee1eb15",
    },
    {
      start: {
        x: 3620,
        y: 4060,
      },
      startId: "70ae7439-83e4-4483-b01d-0ee7f886111e",
      end: {
        x: 4180,
        y: 4080,
      },
      endId: "ab5aad3a-3e12-4e83-80ac-4a8311208fa5",
      name: "TwoWayHEdge",
      id: "55036be0-6c9f-4a29-948f-88b27e397306",
    },
    {
      start: {
        x: 4180,
        y: 4080,
      },
      startId: "ab5aad3a-3e12-4e83-80ac-4a8311208fa5",
      end: {
        x: 4720,
        y: 4060,
      },
      endId: "d4635519-ef56-4d1d-bb4a-2cc81e472a64",
      name: "TwoWayHEdge",
      id: "a5fb9954-e864-4876-a894-e0fcd7bcf151",
    },
    {
      start: {
        x: 4720,
        y: 4060,
      },
      startId: "d4635519-ef56-4d1d-bb4a-2cc81e472a64",
      end: {
        x: 4780,
        y: 3580,
      },
      endId: "9d492edb-44f0-4804-bc89-67fe72a173cf",
      name: "TwoWayVEdge",
      id: "c8a0c4e2-bf99-4557-834c-7d79998cf696",
    },
    {
      start: {
        x: 4780,
        y: 3580,
      },
      startId: "9d492edb-44f0-4804-bc89-67fe72a173cf",
      end: {
        x: 4640,
        y: 3080,
      },
      endId: "c5d96ded-ebb6-44f8-98c7-0e4d357c73ae",
      name: "TwoWayVEdge",
      id: "e8a0a241-8c68-4774-a209-d768e49a0c4b",
    },
    {
      start: {
        x: 4640,
        y: 3080,
      },
      startId: "c5d96ded-ebb6-44f8-98c7-0e4d357c73ae",
      end: {
        x: 4680,
        y: 2680,
      },
      endId: "eb473706-ec16-457d-a41a-2d4ba21ba0d1",
      name: "TwoWayVEdge",
      id: "2fe5fd16-61d6-4a81-b848-fa7024276ea0",
    },
    {
      start: {
        x: 4640,
        y: 3080,
      },
      startId: "c5d96ded-ebb6-44f8-98c7-0e4d357c73ae",
      end: {
        x: 4180,
        y: 3040,
      },
      endId: "250235a1-a5fa-429e-8f66-741dc7f80d76",
      name: "TwoWayHEdge",
      id: "2078f742-04f3-4a5f-b18c-722b28692bdc",
    },
    {
      start: {
        x: 4680,
        y: 2680,
      },
      startId: "eb473706-ec16-457d-a41a-2d4ba21ba0d1",
      end: {
        x: 4620,
        y: 2300,
      },
      endId: "62bcf7cc-d5a5-41d0-90a1-289a26d08123",
      name: "TwoWayVEdge",
      id: "7ebfccf7-d5e5-42dc-882b-c3a161202a30",
    },
    {
      start: {
        x: 4620,
        y: 2300,
      },
      startId: "62bcf7cc-d5a5-41d0-90a1-289a26d08123",
      end: {
        x: 4140,
        y: 2340,
      },
      endId: "846baf4a-388a-4fc5-82f2-42755dcaaf26",
      name: "TwoWayHEdge",
      id: "4c97bc6e-5006-4349-adf5-01eff8d9c2af",
    },
    {
      start: {
        x: 4140,
        y: 2340,
      },
      startId: "846baf4a-388a-4fc5-82f2-42755dcaaf26",
      end: {
        x: 4180,
        y: 3040,
      },
      endId: "250235a1-a5fa-429e-8f66-741dc7f80d76",
      name: "TwoWayVEdge",
      id: "cfeb89b9-aa3b-445c-9c22-15703b3f64ae",
    },
    {
      start: {
        x: 4620,
        y: 2300,
      },
      startId: "62bcf7cc-d5a5-41d0-90a1-289a26d08123",
      end: {
        x: 4660,
        y: 1840,
      },
      endId: "6c7250f3-0704-433b-bdc9-9374585532ba",
      name: "TwoWayVEdge",
      id: "301cf35d-8256-4728-bfb1-5edb685c9a9e",
    },
    {
      start: {
        x: 4660,
        y: 1840,
      },
      startId: "6c7250f3-0704-433b-bdc9-9374585532ba",
      end: {
        x: 4600,
        y: 1380,
      },
      endId: "cc544e2c-e3c9-49da-b1d1-697c2e76796e",
      name: "TwoWayVEdge",
      id: "e8a322a4-9367-4164-ab63-a5a06e83bce7",
    },
    {
      start: {
        x: 4600,
        y: 1380,
      },
      startId: "cc544e2c-e3c9-49da-b1d1-697c2e76796e",
      end: {
        x: 4120,
        y: 1360,
      },
      endId: "b9d83827-d9ce-45db-9ec6-13934942b613",
      name: "TwoWayHEdge",
      id: "2fa9abaa-56ae-4525-a84a-ab96cdec36e4",
    },
    {
      start: {
        x: 4120,
        y: 1360,
      },
      startId: "b9d83827-d9ce-45db-9ec6-13934942b613",
      end: {
        x: 3600,
        y: 1380,
      },
      endId: "4f02501e-c5fb-4598-b68d-ff008d3810d7",
      name: "TwoWayHEdge",
      id: "001231c4-1939-4c54-a070-f487a555350d",
    },
    {
      start: {
        x: 3600,
        y: 1380,
      },
      startId: "4f02501e-c5fb-4598-b68d-ff008d3810d7",
      end: {
        x: 3620,
        y: 1780,
      },
      endId: "8af8c53e-cf2e-4cec-8d58-70b5b6ed8f17",
      name: "TwoWayVEdge",
      id: "2a5edd83-b54f-4908-acd0-ad234b21b262",
    },
    {
      start: {
        x: 4600,
        y: 1380,
      },
      startId: "cc544e2c-e3c9-49da-b1d1-697c2e76796e",
      end: {
        x: 4620,
        y: 900,
      },
      endId: "bf9d0f91-95ad-4429-a6a9-6e56a42cf319",
      name: "TwoWayVEdge",
      id: "c73a33c3-9f35-4f40-869c-f901f7237ecc",
    },
    {
      start: {
        x: 4620,
        y: 900,
      },
      startId: "bf9d0f91-95ad-4429-a6a9-6e56a42cf319",
      end: {
        x: 4560,
        y: 440,
      },
      endId: "29ff15f4-a9e5-4c19-9c25-2c06ef7f01df",
      name: "TwoWayVEdge",
      id: "1715402e-835d-4219-a1a6-996af61180aa",
    },
    {
      start: {
        x: 4560,
        y: 440,
      },
      startId: "29ff15f4-a9e5-4c19-9c25-2c06ef7f01df",
      end: {
        x: 4080,
        y: 400,
      },
      endId: "ca4c76a6-f13a-40c5-810f-f3a9598de4c3",
      name: "TwoWayHEdge",
      id: "494aeba8-71c5-4c79-8171-9d68c0fb1964",
    },
    {
      start: {
        x: 4080,
        y: 400,
      },
      startId: "ca4c76a6-f13a-40c5-810f-f3a9598de4c3",
      end: {
        x: 3600,
        y: 400,
      },
      endId: "c0745b78-888f-42f6-a705-4da219302e76",
      name: "TwoWayHEdge",
      id: "285b3e95-4342-45f4-a8a1-0f9850ac4572",
    },
    {
      start: {
        x: 3600,
        y: 400,
      },
      startId: "c0745b78-888f-42f6-a705-4da219302e76",
      end: {
        x: 3160,
        y: 440,
      },
      endId: "999f3a8d-c07e-4760-a01c-c0acf8fa3874",
      name: "TwoWayHEdge",
      id: "1c8fe28d-42d2-4e97-8277-25d336008730",
    },
    {
      start: {
        x: 800,
        y: 2760,
      },
      startId: "13e8384e-b19a-471e-8dcf-71bd848ba34e",
      end: {
        x: 760,
        y: 2340,
      },
      endId: "b64edb02-779b-4446-bf8e-b922800fb75f",
      name: "TwoWayVEdge",
      id: "15e4ed47-43a9-4fcb-aa51-076de44d0289",
    },
    {
      start: {
        x: 760,
        y: 2340,
      },
      startId: "b64edb02-779b-4446-bf8e-b922800fb75f",
      end: {
        x: 780,
        y: 1880,
      },
      endId: "8384e362-bec0-4353-bbc6-f1d6e9a32805",
      name: "TwoWayVEdge",
      id: "ec10c954-2a50-4c5f-a24c-dc393e45273a",
    },
    {
      start: {
        x: 780,
        y: 1880,
      },
      startId: "8384e362-bec0-4353-bbc6-f1d6e9a32805",
      end: {
        x: 800,
        y: 1420,
      },
      endId: "b6b1b23b-2b09-4399-9f96-3d010434c182",
      name: "TwoWayVEdge",
      id: "ce6365aa-3f46-439e-a7e3-2e4a63526a72",
    },
    {
      start: {
        x: 780,
        y: 1880,
      },
      startId: "8384e362-bec0-4353-bbc6-f1d6e9a32805",
      end: {
        x: 1380,
        y: 1860,
      },
      endId: "a9cf48a8-fd7d-420b-aba2-c217dff2a856",
      name: "TwoWayHEdge",
      id: "020aa5b2-1407-4735-9a6d-34c12f8bf233",
    },
    {
      start: {
        x: 1380,
        y: 1860,
      },
      startId: "a9cf48a8-fd7d-420b-aba2-c217dff2a856",
      end: {
        x: 1920,
        y: 1880,
      },
      endId: "21fe90cd-edcf-4c49-aded-83a5ffbee13f",
      name: "TwoWayHEdge",
      id: "c5a605c0-cfc2-4217-8157-3bef4797de98",
    },
    {
      start: {
        x: 1920,
        y: 1880,
      },
      startId: "21fe90cd-edcf-4c49-aded-83a5ffbee13f",
      end: {
        x: 1820,
        y: 1420,
      },
      endId: "381b622f-7a98-4db9-8097-96993de44283",
      name: "TwoWayVEdge",
      id: "2c1178eb-5eb7-47e3-925e-b820994cbe0e",
    },
    {
      start: {
        x: 800,
        y: 1420,
      },
      startId: "b6b1b23b-2b09-4399-9f96-3d010434c182",
      end: {
        x: 1820,
        y: 1420,
      },
      endId: "381b622f-7a98-4db9-8097-96993de44283",
      name: "TwoWayHEdge",
      id: "7cc5a4f0-207e-4c2a-8450-d3188a1fbba6",
    },
    {
      start: {
        x: 1820,
        y: 1420,
      },
      startId: "381b622f-7a98-4db9-8097-96993de44283",
      end: {
        x: 1880,
        y: 940,
      },
      endId: "4bc6b4f2-7984-497b-ab08-d1e68df33e24",
      name: "TwoWayVEdge",
      id: "6de95496-5eb0-483c-8d9c-e9f94749c76f",
    },
    {
      start: {
        x: 1880,
        y: 940,
      },
      startId: "4bc6b4f2-7984-497b-ab08-d1e68df33e24",
      end: {
        x: 1800,
        y: 480,
      },
      endId: "723162fc-7819-4d40-8d88-a38b820a3b29",
      name: "TwoWayVEdge",
      id: "68e4bbfb-9b1d-449f-afce-d717ea9e36a1",
    },
    {
      start: {
        x: 1800,
        y: 480,
      },
      startId: "723162fc-7819-4d40-8d88-a38b820a3b29",
      end: {
        x: 1860,
        y: 40,
      },
      endId: "f3d94efa-da94-493a-b06c-e465048d6a22",
      name: "TwoWayVEdge",
      id: "07d3c1eb-0270-4a00-9071-c7303474216b",
    },
    {
      start: {
        x: 800,
        y: 1420,
      },
      startId: "b6b1b23b-2b09-4399-9f96-3d010434c182",
      end: {
        x: 120,
        y: 1460,
      },
      endId: "84273116-dab1-42c1-b7a3-3c0c963ebe37",
      name: "TwoWayHEdge",
      id: "4ce48d9c-87d4-483c-9213-8024535258d1",
    },
    {
      start: {
        x: 120,
        y: 1460,
      },
      startId: "84273116-dab1-42c1-b7a3-3c0c963ebe37",
      end: {
        x: 40,
        y: 820,
      },
      endId: "04526d32-f38b-4f31-853a-f126dddc4734",
      name: "TwoWayVEdge",
      id: "dae5f8f3-8a34-4ff2-a5c6-913130fd713e",
    },
    {
      start: {
        x: 40,
        y: 820,
      },
      startId: "04526d32-f38b-4f31-853a-f126dddc4734",
      end: {
        x: 120,
        y: 200,
      },
      endId: "5508a59b-5f39-4660-8b50-41d38a9c7cf5",
      name: "TwoWayVEdge",
      id: "7c9dbc09-a5ee-42cb-8939-35c1a5c039c3",
    },
    {
      start: {
        x: 120,
        y: 200,
      },
      startId: "5508a59b-5f39-4660-8b50-41d38a9c7cf5",
      end: {
        x: 760,
        y: 80,
      },
      endId: "e5523569-c303-4b8f-a67a-89b47b910b95",
      name: "TwoWayHEdge",
      id: "39c6959f-1fc5-49e3-8797-4d608ec997a4",
    },
  ],
};
export default arcticCaveMap;
