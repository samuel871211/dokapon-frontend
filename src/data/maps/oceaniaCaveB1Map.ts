import type { GraphJSON } from "global";

const oceaniaCaveB1Map: GraphJSON = {
  vertices: [
    {
      position: {
        x: 4320,
        y: 4220,
      },
      name: "BattleField",
      id: "fb579ade-9209-4f15-9850-32337420a561",
      edges: [
        "336cff9a-9abc-459b-87be-857850ea9f1d",
        "8e3e72bd-d3c4-46e7-81d3-fa87c2aeef04",
      ],
      area: "OceaniaCaveB1",
      right: "11e99ead-d82d-430d-a20a-2c21923c4f65",
      top: "1af7dcac-4e1a-4008-bdfb-e5a310a932a7",
    },
    {
      id: "11e99ead-d82d-430d-a20a-2c21923c4f65",
      name: "RedTreasureField",
      position: {
        x: 4900,
        y: 4200,
      },
      edges: [
        "336cff9a-9abc-459b-87be-857850ea9f1d",
        "055c3069-94a0-4c0b-889b-40d63b5850b4",
        "5af4c240-6a12-48ca-a27e-9e2fbe1be304",
      ],
      area: "OceaniaCaveB1",
      left: "fb579ade-9209-4f15-9850-32337420a561",
      bottom: "81b7b95e-ce06-4d7a-8a00-b3d4a319f77e",
      top: "8dfe6ee3-d3fd-4d7b-aeed-a839422ba86d",
    },
    {
      id: "81b7b95e-ce06-4d7a-8a00-b3d4a319f77e",
      name: "TreasureField",
      position: {
        x: 4820,
        y: 4660,
      },
      edges: [
        "055c3069-94a0-4c0b-889b-40d63b5850b4",
        "fd2e7226-b8d9-4276-ba6b-33dbc563bb78",
      ],
      area: "OceaniaCaveB1",
      top: "11e99ead-d82d-430d-a20a-2c21923c4f65",
      right: "7edab82d-1774-486d-a77d-17e098ad6174",
    },
    {
      id: "7edab82d-1774-486d-a77d-17e098ad6174",
      name: "CaveField",
      position: {
        x: 5380,
        y: 4600,
      },
      edges: ["fd2e7226-b8d9-4276-ba6b-33dbc563bb78"],
      area: "OceaniaCaveB1",
      left: "81b7b95e-ce06-4d7a-8a00-b3d4a319f77e",
    },
    {
      id: "1af7dcac-4e1a-4008-bdfb-e5a310a932a7",
      name: "TreasureField",
      position: {
        x: 4280,
        y: 3880,
      },
      edges: [
        "8e3e72bd-d3c4-46e7-81d3-fa87c2aeef04",
        "d86f53a0-1d9a-4630-a8d7-b3598be1a9c5",
      ],
      area: "OceaniaCaveB1",
      bottom: "fb579ade-9209-4f15-9850-32337420a561",
      top: "89e62433-79f3-4016-9a6a-69ecdc1b626d",
    },
    {
      id: "89e62433-79f3-4016-9a6a-69ecdc1b626d",
      name: "BattleField",
      position: {
        x: 4320,
        y: 3520,
      },
      edges: [
        "d86f53a0-1d9a-4630-a8d7-b3598be1a9c5",
        "e6b570bd-2e9d-481e-b0bc-36ed9790f66d",
      ],
      area: "OceaniaCaveB1",
      bottom: "1af7dcac-4e1a-4008-bdfb-e5a310a932a7",
      right: "8dfe6ee3-d3fd-4d7b-aeed-a839422ba86d",
    },
    {
      id: "8dfe6ee3-d3fd-4d7b-aeed-a839422ba86d",
      name: "RedTreasureField",
      position: {
        x: 4820,
        y: 3520,
      },
      edges: [
        "e6b570bd-2e9d-481e-b0bc-36ed9790f66d",
        "5af4c240-6a12-48ca-a27e-9e2fbe1be304",
        "734b7891-b5f2-4594-8581-b7484b22cc26",
      ],
      area: "OceaniaCaveB1",
      left: "89e62433-79f3-4016-9a6a-69ecdc1b626d",
      bottom: "11e99ead-d82d-430d-a20a-2c21923c4f65",
      top: "7df9b09f-e130-4393-8b35-f9cd41db3d2e",
    },
    {
      id: "7df9b09f-e130-4393-8b35-f9cd41db3d2e",
      name: "TreasureField",
      position: {
        x: 4880,
        y: 3060,
      },
      edges: [
        "734b7891-b5f2-4594-8581-b7484b22cc26",
        "e51ca5e4-8bb2-44d2-9d5e-504a8b68a125",
      ],
      area: "OceaniaCaveB1",
      bottom: "8dfe6ee3-d3fd-4d7b-aeed-a839422ba86d",
      left: "aed2754d-67cb-47f1-b620-ed17d58e8bbe",
    },
    {
      id: "aed2754d-67cb-47f1-b620-ed17d58e8bbe",
      name: "GoldTreasureField",
      position: {
        x: 4300,
        y: 3000,
      },
      edges: [
        "e51ca5e4-8bb2-44d2-9d5e-504a8b68a125",
        "dfd107c5-b38e-479e-bd55-67489dff07f9",
        "7ec67682-f449-4072-ac67-2c4bf6908f5d",
      ],
      area: "OceaniaCaveB1",
      right: "7df9b09f-e130-4393-8b35-f9cd41db3d2e",
      left: "fa31bbba-0db1-4d8d-b381-c3f2f501f013",
      top: "b5458672-49d9-4065-a573-b0298a97f873",
    },
    {
      id: "fa31bbba-0db1-4d8d-b381-c3f2f501f013",
      name: "BattleField",
      position: {
        x: 3740,
        y: 2960,
      },
      edges: [
        "dfd107c5-b38e-479e-bd55-67489dff07f9",
        "2c4892af-5f07-458a-986f-29c77ae3a947",
        "2ccc8f75-50da-49b9-8e86-a9cf0e2844e2",
      ],
      area: "OceaniaCaveB1",
      right: "aed2754d-67cb-47f1-b620-ed17d58e8bbe",
      bottom: "3c0a5848-88aa-4ca6-a5d4-5a876547dde3",
      left: "8079aba3-286b-43b6-a253-600a1a8f4f96",
    },
    {
      id: "3c0a5848-88aa-4ca6-a5d4-5a876547dde3",
      name: "BattleField",
      position: {
        x: 3800,
        y: 3360,
      },
      edges: [
        "2c4892af-5f07-458a-986f-29c77ae3a947",
        "d68e8fb9-f93b-46a0-86e8-f1b39cf9cf54",
      ],
      area: "OceaniaCaveB1",
      top: "fa31bbba-0db1-4d8d-b381-c3f2f501f013",
      bottom: "779780b2-9d1f-4043-9178-fdbb8d4fbc6c",
    },
    {
      id: "779780b2-9d1f-4043-9178-fdbb8d4fbc6c",
      name: "TreasureField",
      position: {
        x: 3760,
        y: 3780,
      },
      edges: [
        "d68e8fb9-f93b-46a0-86e8-f1b39cf9cf54",
        "1ad8b978-3a95-42ae-accb-febc2132c6a4",
      ],
      area: "OceaniaCaveB1",
      top: "3c0a5848-88aa-4ca6-a5d4-5a876547dde3",
      bottom: "303f2e3c-95b4-4070-8ed7-f5859b4b0fe7",
    },
    {
      id: "303f2e3c-95b4-4070-8ed7-f5859b4b0fe7",
      name: "DamageField",
      position: {
        x: 3820,
        y: 4220,
      },
      edges: [
        "1ad8b978-3a95-42ae-accb-febc2132c6a4",
        "11428e4a-4277-4bcc-887a-05f3a60decc8",
      ],
      area: "OceaniaCaveB1",
      top: "779780b2-9d1f-4043-9178-fdbb8d4fbc6c",
      bottom: "30bb7fcb-9840-408f-a378-1c5497717663",
    },
    {
      id: "8079aba3-286b-43b6-a253-600a1a8f4f96",
      name: "BattleField",
      position: {
        x: 3180,
        y: 2980,
      },
      edges: [
        "2ccc8f75-50da-49b9-8e86-a9cf0e2844e2",
        "3a2801f8-8496-46d1-935b-29fc4aef14c6",
        "81ca31bc-2c88-45bc-bdd6-4a74ab3375d5",
      ],
      area: "OceaniaCaveB1",
      right: "fa31bbba-0db1-4d8d-b381-c3f2f501f013",
      bottom: "f23afbe8-5d39-4d8a-a58d-b70ec747dcff",
      top: "b0bce7f2-eb12-4d7a-ba36-b7bf1f31aae1",
    },
    {
      id: "f23afbe8-5d39-4d8a-a58d-b70ec747dcff",
      name: "TreasureField",
      position: {
        x: 3120,
        y: 3360,
      },
      edges: [
        "3a2801f8-8496-46d1-935b-29fc4aef14c6",
        "86d5f32c-2e78-4640-b6f0-cf203771f1db",
      ],
      area: "OceaniaCaveB1",
      top: "8079aba3-286b-43b6-a253-600a1a8f4f96",
      bottom: "a6be9d3a-c526-4b20-b766-fa02d74882bd",
    },
    {
      id: "a6be9d3a-c526-4b20-b766-fa02d74882bd",
      name: "BattleField",
      position: {
        x: 3180,
        y: 3800,
      },
      edges: [
        "86d5f32c-2e78-4640-b6f0-cf203771f1db",
        "f0b880e8-ecda-47f7-b77d-da7a816e2879",
      ],
      area: "OceaniaCaveB1",
      top: "f23afbe8-5d39-4d8a-a58d-b70ec747dcff",
      bottom: "a04090ec-f03a-433a-8c1e-2768bcf75562",
    },
    {
      id: "a04090ec-f03a-433a-8c1e-2768bcf75562",
      name: "TreasureField",
      position: {
        x: 3120,
        y: 4260,
      },
      edges: [
        "f0b880e8-ecda-47f7-b77d-da7a816e2879",
        "bb5be881-babf-4178-b027-cc718d4d63f9",
      ],
      area: "OceaniaCaveB1",
      top: "a6be9d3a-c526-4b20-b766-fa02d74882bd",
      left: "0075885b-5974-48da-a4fb-6aa2e57155e7",
    },
    {
      id: "0075885b-5974-48da-a4fb-6aa2e57155e7",
      name: "BattleField",
      position: {
        x: 2540,
        y: 4240,
      },
      edges: [
        "bb5be881-babf-4178-b027-cc718d4d63f9",
        "502cdfff-4c6c-4005-8230-a8b5806fa46a",
      ],
      area: "OceaniaCaveB1",
      right: "a04090ec-f03a-433a-8c1e-2768bcf75562",
      bottom: "c1295c60-2601-4487-824a-19ebc75bd8cb",
    },
    {
      id: "c1295c60-2601-4487-824a-19ebc75bd8cb",
      name: "GoldTreasureField",
      position: {
        x: 2460,
        y: 4680,
      },
      edges: [
        "502cdfff-4c6c-4005-8230-a8b5806fa46a",
        "f94e4743-fa33-4aa6-b812-f05a1e340b22",
        "43d91706-b2b3-40f0-8f20-d37aadf83298",
      ],
      area: "OceaniaCaveB1",
      top: "0075885b-5974-48da-a4fb-6aa2e57155e7",
      right: "304cc38c-12db-4861-8eee-2850672bf6fb",
      left: "b01ea4cd-539a-4669-853c-e45abeb418cb",
    },
    {
      id: "304cc38c-12db-4861-8eee-2850672bf6fb",
      name: "TreasureField",
      position: {
        x: 3120,
        y: 4700,
      },
      edges: [
        "f94e4743-fa33-4aa6-b812-f05a1e340b22",
        "82e6bdf6-3593-4ccd-8272-8f0c8ff296f8",
      ],
      area: "OceaniaCaveB1",
      left: "c1295c60-2601-4487-824a-19ebc75bd8cb",
      right: "30bb7fcb-9840-408f-a378-1c5497717663",
    },
    {
      id: "30bb7fcb-9840-408f-a378-1c5497717663",
      name: "BattleField",
      position: {
        x: 3800,
        y: 4680,
      },
      edges: [
        "82e6bdf6-3593-4ccd-8272-8f0c8ff296f8",
        "11428e4a-4277-4bcc-887a-05f3a60decc8",
      ],
      area: "OceaniaCaveB1",
      left: "304cc38c-12db-4861-8eee-2850672bf6fb",
      top: "303f2e3c-95b4-4070-8ed7-f5859b4b0fe7",
    },
    {
      id: "b01ea4cd-539a-4669-853c-e45abeb418cb",
      name: "BattleField",
      position: {
        x: 1780,
        y: 4700,
      },
      edges: [
        "43d91706-b2b3-40f0-8f20-d37aadf83298",
        "8cbd23b5-4fad-4aa0-8a24-6e558dc0cc67",
      ],
      area: "OceaniaCaveB1",
      right: "c1295c60-2601-4487-824a-19ebc75bd8cb",
      left: "2c2c778e-46c9-4833-848e-9bcd2aac5bf5",
    },
    {
      id: "2c2c778e-46c9-4833-848e-9bcd2aac5bf5",
      name: "MagicBookField",
      position: {
        x: 1140,
        y: 4660,
      },
      edges: [
        "8cbd23b5-4fad-4aa0-8a24-6e558dc0cc67",
        "0c91e335-5dc7-422a-aa35-103b8ac013f0",
        "29e88a18-f631-4462-8d4b-f5a29044bbd2",
      ],
      area: "OceaniaCaveB1",
      right: "b01ea4cd-539a-4669-853c-e45abeb418cb",
      top: "991b018c-a0d2-466f-8a19-b894cd1b6fd8",
      left: "cf52e5e6-57e8-4291-8b46-0637b4662ee2",
    },
    {
      id: "991b018c-a0d2-466f-8a19-b894cd1b6fd8",
      name: "BattleField",
      position: {
        x: 1180,
        y: 4200,
      },
      edges: [
        "0c91e335-5dc7-422a-aa35-103b8ac013f0",
        "26ae7984-425a-483d-8f50-b4dddfb13c3c",
      ],
      area: "OceaniaCaveB1",
      bottom: "2c2c778e-46c9-4833-848e-9bcd2aac5bf5",
      top: "41b5efa5-8d34-4f8d-939a-8f49232037af",
    },
    {
      id: "cf52e5e6-57e8-4291-8b46-0637b4662ee2",
      name: "TreasureField",
      position: {
        x: 600,
        y: 4680,
      },
      edges: [
        "29e88a18-f631-4462-8d4b-f5a29044bbd2",
        "7a98e12b-8dec-44d2-984a-54a2e9f668bb",
      ],
      area: "OceaniaCaveB1",
      right: "2c2c778e-46c9-4833-848e-9bcd2aac5bf5",
      left: "b161729a-2298-41a9-b8f2-a1dd1378425c",
    },
    {
      id: "b161729a-2298-41a9-b8f2-a1dd1378425c",
      name: "BattleField",
      position: {
        x: 60,
        y: 4700,
      },
      edges: [
        "7a98e12b-8dec-44d2-984a-54a2e9f668bb",
        "7e24b589-ed06-4a74-a706-5f1dd4bd7b8d",
      ],
      area: "OceaniaCaveB1",
      right: "cf52e5e6-57e8-4291-8b46-0637b4662ee2",
      top: "9f19d213-3c32-43d0-acbb-950e3c0cffe7",
    },
    {
      id: "9f19d213-3c32-43d0-acbb-950e3c0cffe7",
      name: "CaveField",
      position: {
        x: 40,
        y: 4200,
      },
      edges: ["7e24b589-ed06-4a74-a706-5f1dd4bd7b8d"],
      area: "OceaniaCaveB1",
      bottom: "b161729a-2298-41a9-b8f2-a1dd1378425c",
    },
    {
      id: "41b5efa5-8d34-4f8d-939a-8f49232037af",
      name: "TreasureField",
      position: {
        x: 1120,
        y: 3700,
      },
      edges: [
        "26ae7984-425a-483d-8f50-b4dddfb13c3c",
        "8080670c-b12c-40da-a313-074128b40b5c",
      ],
      area: "OceaniaCaveB1",
      bottom: "991b018c-a0d2-466f-8a19-b894cd1b6fd8",
      top: "e0e2ed0e-bebe-415d-b7ac-215e787d16b0",
    },
    {
      id: "e0e2ed0e-bebe-415d-b7ac-215e787d16b0",
      name: "BattleField",
      position: {
        x: 1200,
        y: 3220,
      },
      edges: [
        "8080670c-b12c-40da-a313-074128b40b5c",
        "d4ada453-6fcc-45f2-9844-4c70c59dd89c",
      ],
      area: "OceaniaCaveB1",
      bottom: "41b5efa5-8d34-4f8d-939a-8f49232037af",
      left: "65fc4690-d9c7-4a40-8c88-d6e46fa442ff",
    },
    {
      id: "65fc4690-d9c7-4a40-8c88-d6e46fa442ff",
      name: "WhiteTreasureField",
      position: {
        x: 620,
        y: 3180,
      },
      edges: ["d4ada453-6fcc-45f2-9844-4c70c59dd89c"],
      area: "OceaniaCaveB1",
      right: "e0e2ed0e-bebe-415d-b7ac-215e787d16b0",
    },
    {
      id: "b0bce7f2-eb12-4d7a-ba36-b7bf1f31aae1",
      name: "RedTreasureField",
      position: {
        x: 3120,
        y: 2460,
      },
      edges: [
        "81ca31bc-2c88-45bc-bdd6-4a74ab3375d5",
        "d7ef4e96-008c-4760-86d6-57886d5a9c8b",
        "231ab73b-e07b-493a-97d1-ca4a76e93dc8",
      ],
      area: "OceaniaCaveB1",
      bottom: "8079aba3-286b-43b6-a253-600a1a8f4f96",
      right: "31596b3a-b0c3-4ff3-b9df-c22c93a59dbe",
      top: "1f181529-c841-4c29-94d9-ac8b6ad705d6",
    },
    {
      id: "31596b3a-b0c3-4ff3-b9df-c22c93a59dbe",
      name: "BattleField",
      position: {
        x: 3740,
        y: 2440,
      },
      edges: [
        "d7ef4e96-008c-4760-86d6-57886d5a9c8b",
        "f262a234-41a6-4c76-badf-151069f2beeb",
      ],
      area: "OceaniaCaveB1",
      left: "b0bce7f2-eb12-4d7a-ba36-b7bf1f31aae1",
      top: "05e7d65a-656e-4ec2-a04e-e9d3d7960cc4",
    },
    {
      id: "1f181529-c841-4c29-94d9-ac8b6ad705d6",
      name: "BattleField",
      position: {
        x: 3200,
        y: 1960,
      },
      edges: [
        "231ab73b-e07b-493a-97d1-ca4a76e93dc8",
        "bdf55d4c-cc41-410d-a46a-e480ec5bf959",
        "ec1b8202-4aff-4498-821d-e2986e5c39d9",
      ],
      area: "OceaniaCaveB1",
      bottom: "b0bce7f2-eb12-4d7a-ba36-b7bf1f31aae1",
      top: "b15255c7-ae51-4101-94ac-78020804aab1",
      left: "95c80f2d-cccd-4673-9de4-39494f4fb635",
    },
    {
      id: "b15255c7-ae51-4101-94ac-78020804aab1",
      name: "TreasureField",
      position: {
        x: 3060,
        y: 1520,
      },
      edges: [
        "bdf55d4c-cc41-410d-a46a-e480ec5bf959",
        "e8f0c2be-ae04-4137-a799-863e134f2da0",
        "2bf210eb-c377-45f0-9bd2-da756762a97e",
      ],
      area: "OceaniaCaveB1",
      bottom: "1f181529-c841-4c29-94d9-ac8b6ad705d6",
      right: "05e7d65a-656e-4ec2-a04e-e9d3d7960cc4",
      top: "e06743ac-d011-4dfe-be41-bb5dd70a8761",
    },
    {
      id: "05e7d65a-656e-4ec2-a04e-e9d3d7960cc4",
      name: "DamageField",
      position: {
        x: 3700,
        y: 1520,
      },
      edges: [
        "e8f0c2be-ae04-4137-a799-863e134f2da0",
        "f262a234-41a6-4c76-badf-151069f2beeb",
      ],
      area: "OceaniaCaveB1",
      left: "b15255c7-ae51-4101-94ac-78020804aab1",
      bottom: "31596b3a-b0c3-4ff3-b9df-c22c93a59dbe",
    },
    {
      id: "95c80f2d-cccd-4673-9de4-39494f4fb635",
      name: "CaveField",
      position: {
        x: 2520,
        y: 1960,
      },
      edges: ["ec1b8202-4aff-4498-821d-e2986e5c39d9"],
      area: "OceaniaCaveB1",
      right: "1f181529-c841-4c29-94d9-ac8b6ad705d6",
    },
    {
      id: "b5458672-49d9-4065-a573-b0298a97f873",
      name: "MagicBookField",
      position: {
        x: 4340,
        y: 2500,
      },
      edges: [
        "7ec67682-f449-4072-ac67-2c4bf6908f5d",
        "b7e294a2-0da0-47ff-b159-5ea4f6013192",
      ],
      area: "OceaniaCaveB1",
      bottom: "aed2754d-67cb-47f1-b620-ed17d58e8bbe",
      top: "bc5fecca-928e-4aa5-8fdb-ea4fa32918dc",
    },
    {
      id: "bc5fecca-928e-4aa5-8fdb-ea4fa32918dc",
      name: "BattleField",
      position: {
        x: 4240,
        y: 2000,
      },
      edges: [
        "b7e294a2-0da0-47ff-b159-5ea4f6013192",
        "4566a95d-d442-4596-95e4-b4f2a8f93267",
      ],
      area: "OceaniaCaveB1",
      bottom: "b5458672-49d9-4065-a573-b0298a97f873",
      top: "5792fc15-f984-42c4-9e66-7296ff5909c2",
    },
    {
      id: "5792fc15-f984-42c4-9e66-7296ff5909c2",
      name: "TreasureField",
      position: {
        x: 4300,
        y: 1540,
      },
      edges: [
        "4566a95d-d442-4596-95e4-b4f2a8f93267",
        "86d5f86b-bb5a-4bbf-a09e-7202ffa50ca2",
      ],
      area: "OceaniaCaveB1",
      bottom: "bc5fecca-928e-4aa5-8fdb-ea4fa32918dc",
      top: "0500c647-2d9c-46b4-96eb-a2c750f4f5fb",
    },
    {
      id: "0500c647-2d9c-46b4-96eb-a2c750f4f5fb",
      name: "BattleField",
      position: {
        x: 4220,
        y: 1060,
      },
      edges: [
        "86d5f86b-bb5a-4bbf-a09e-7202ffa50ca2",
        "bfc2b1e9-7ea9-4d09-aec8-4e888c40b5d5",
        "3f0fefe4-3e67-4de2-b7a0-65a4aeee9bd2",
      ],
      area: "OceaniaCaveB1",
      bottom: "5792fc15-f984-42c4-9e66-7296ff5909c2",
      right: "e9be21c0-93cb-4fe3-9e02-21ebe8d8e681",
      left: "632bef08-0e41-4025-9c4d-8605b24e949c",
    },
    {
      id: "e9be21c0-93cb-4fe3-9e02-21ebe8d8e681",
      name: "DamageField",
      position: {
        x: 4800,
        y: 1040,
      },
      edges: [
        "bfc2b1e9-7ea9-4d09-aec8-4e888c40b5d5",
        "44b4d3af-f9c5-416b-ba81-c778ecc79814",
      ],
      area: "OceaniaCaveB1",
      left: "0500c647-2d9c-46b4-96eb-a2c750f4f5fb",
      top: "fdae1dca-de45-420b-a4eb-9f96211215fc",
    },
    {
      id: "632bef08-0e41-4025-9c4d-8605b24e949c",
      name: "DamageField",
      position: {
        x: 3680,
        y: 1040,
      },
      edges: [
        "3f0fefe4-3e67-4de2-b7a0-65a4aeee9bd2",
        "11b3a0c2-4fb2-40bf-8f63-e1bb333547e1",
      ],
      area: "OceaniaCaveB1",
      right: "0500c647-2d9c-46b4-96eb-a2c750f4f5fb",
      top: "775b489f-0bd9-4c64-8f60-09364e575cc0",
    },
    {
      id: "775b489f-0bd9-4c64-8f60-09364e575cc0",
      name: "TreasureField",
      position: {
        x: 3720,
        y: 520,
      },
      edges: [
        "11b3a0c2-4fb2-40bf-8f63-e1bb333547e1",
        "66cef63d-a9e6-4915-b65f-379276105b3e",
        "ca1c7f76-c299-436e-84e8-819b538beee4",
      ],
      area: "OceaniaCaveB1",
      bottom: "632bef08-0e41-4025-9c4d-8605b24e949c",
      right: "fdae1dca-de45-420b-a4eb-9f96211215fc",
      top: "65e94520-07e9-4db8-87b5-059572838400",
    },
    {
      id: "fdae1dca-de45-420b-a4eb-9f96211215fc",
      name: "RedTreasureField",
      position: {
        x: 4720,
        y: 520,
      },
      edges: [
        "66cef63d-a9e6-4915-b65f-379276105b3e",
        "44b4d3af-f9c5-416b-ba81-c778ecc79814",
      ],
      area: "OceaniaCaveB1",
      left: "775b489f-0bd9-4c64-8f60-09364e575cc0",
      bottom: "e9be21c0-93cb-4fe3-9e02-21ebe8d8e681",
    },
    {
      id: "65e94520-07e9-4db8-87b5-059572838400",
      name: "CaveField",
      position: {
        x: 3640,
        y: 40,
      },
      edges: ["ca1c7f76-c299-436e-84e8-819b538beee4"],
      area: "OceaniaCaveB1",
      bottom: "775b489f-0bd9-4c64-8f60-09364e575cc0",
    },
    {
      id: "e06743ac-d011-4dfe-be41-bb5dd70a8761",
      name: "BattleField",
      position: {
        x: 3120,
        y: 1020,
      },
      edges: [
        "2bf210eb-c377-45f0-9bd2-da756762a97e",
        "6f38167d-5f64-4ce1-9b8a-3a7771c39965",
      ],
      area: "OceaniaCaveB1",
      bottom: "b15255c7-ae51-4101-94ac-78020804aab1",
      top: "334f5b91-ae20-4039-a639-7042edcdd60d",
    },
    {
      id: "334f5b91-ae20-4039-a639-7042edcdd60d",
      name: "DamageField",
      position: {
        x: 3040,
        y: 520,
      },
      edges: [
        "6f38167d-5f64-4ce1-9b8a-3a7771c39965",
        "99a04a65-4ff5-4170-954c-92b7e96076e0",
      ],
      area: "OceaniaCaveB1",
      bottom: "e06743ac-d011-4dfe-be41-bb5dd70a8761",
      left: "f71a734b-30d5-46bd-a472-ad151550454a",
    },
    {
      id: "f71a734b-30d5-46bd-a472-ad151550454a",
      name: "TreasureField",
      position: {
        x: 2500,
        y: 540,
      },
      edges: [
        "99a04a65-4ff5-4170-954c-92b7e96076e0",
        "b35c3ae0-1b50-46a0-9b29-270b516abd6b",
      ],
      area: "OceaniaCaveB1",
      right: "334f5b91-ae20-4039-a639-7042edcdd60d",
      left: "c7995e22-f2f5-48c2-aacd-4a02e6ce6e90",
    },
    {
      id: "c7995e22-f2f5-48c2-aacd-4a02e6ce6e90",
      name: "BattleField",
      position: {
        x: 1980,
        y: 520,
      },
      edges: [
        "b35c3ae0-1b50-46a0-9b29-270b516abd6b",
        "4f8c1e26-6094-44e2-8281-7c99da443303",
      ],
      area: "OceaniaCaveB1",
      right: "f71a734b-30d5-46bd-a472-ad151550454a",
      left: "818ce01d-af3d-409b-b6f0-62be7392cff2",
    },
    {
      id: "818ce01d-af3d-409b-b6f0-62be7392cff2",
      name: "DamageField",
      position: {
        x: 1140,
        y: 480,
      },
      edges: [
        "4f8c1e26-6094-44e2-8281-7c99da443303",
        "ff3f98f6-adcf-49f6-93c4-d9e8b34fb312",
      ],
      area: "OceaniaCaveB1",
      right: "c7995e22-f2f5-48c2-aacd-4a02e6ce6e90",
      left: "9be613d6-f2bc-4a37-b338-084bf677f6de",
    },
    {
      id: "9be613d6-f2bc-4a37-b338-084bf677f6de",
      name: "BattleField",
      position: {
        x: 360,
        y: 520,
      },
      edges: [
        "ff3f98f6-adcf-49f6-93c4-d9e8b34fb312",
        "894abbd2-cf18-48f2-836c-1a1b75c44726",
      ],
      area: "OceaniaCaveB1",
      right: "818ce01d-af3d-409b-b6f0-62be7392cff2",
      bottom: "bb89ead0-4e71-4030-93ff-51ea3d55ffec",
    },
    {
      id: "bb89ead0-4e71-4030-93ff-51ea3d55ffec",
      name: "GoldTreasureField",
      position: {
        x: 320,
        y: 980,
      },
      edges: [
        "894abbd2-cf18-48f2-836c-1a1b75c44726",
        "12a2edfc-c0c6-4ba9-8f37-4090e34428bc",
        "f9c774cb-ed82-4e46-aea1-b81357c25855",
      ],
      area: "OceaniaCaveB1",
      top: "9be613d6-f2bc-4a37-b338-084bf677f6de",
      right: "0fc96512-dc88-4692-ad5c-57ff25d39501",
      bottom: "4895d6d5-e4a7-4ca5-ad94-8574de8a71c6",
    },
    {
      id: "0fc96512-dc88-4692-ad5c-57ff25d39501",
      name: "TreasureField",
      position: {
        x: 900,
        y: 960,
      },
      edges: [
        "12a2edfc-c0c6-4ba9-8f37-4090e34428bc",
        "61990d55-5e26-441e-aee5-6401ebbce450",
      ],
      area: "OceaniaCaveB1",
      left: "bb89ead0-4e71-4030-93ff-51ea3d55ffec",
      bottom: "2ed10ab1-5649-4475-8530-9c988350131b",
    },
    {
      id: "4895d6d5-e4a7-4ca5-ad94-8574de8a71c6",
      name: "MagicBookField",
      position: {
        x: 360,
        y: 1820,
      },
      edges: [
        "f9c774cb-ed82-4e46-aea1-b81357c25855",
        "e7cda936-6792-408b-8701-e42e7f1fbdd0",
      ],
      area: "OceaniaCaveB1",
      top: "bb89ead0-4e71-4030-93ff-51ea3d55ffec",
      right: "972d6574-119d-4126-9bca-55bec5016378",
    },
    {
      id: "972d6574-119d-4126-9bca-55bec5016378",
      name: "TreasureField",
      position: {
        x: 940,
        y: 1840,
      },
      edges: [
        "e7cda936-6792-408b-8701-e42e7f1fbdd0",
        "fd13f059-2346-4878-9ce1-b5cb87354208",
        "32319aaf-9a8c-443d-884c-a1c6a8f95b09",
      ],
      area: "OceaniaCaveB1",
      left: "4895d6d5-e4a7-4ca5-ad94-8574de8a71c6",
      top: "2ed10ab1-5649-4475-8530-9c988350131b",
      right: "af949a12-054e-4946-b836-722f237d3ef5",
    },
    {
      id: "2ed10ab1-5649-4475-8530-9c988350131b",
      name: "RedTreasureField",
      position: {
        x: 1000,
        y: 1380,
      },
      edges: [
        "61990d55-5e26-441e-aee5-6401ebbce450",
        "fd13f059-2346-4878-9ce1-b5cb87354208",
        "4ff1bf98-a9fb-43c3-b6b1-fa3f8d2f774b",
      ],
      area: "OceaniaCaveB1",
      top: "0fc96512-dc88-4692-ad5c-57ff25d39501",
      bottom: "972d6574-119d-4126-9bca-55bec5016378",
      right: "7311bece-c69a-4f4e-b730-1b75181bb6ea",
    },
    {
      id: "7311bece-c69a-4f4e-b730-1b75181bb6ea",
      name: "MagicBookField",
      position: {
        x: 1600,
        y: 1400,
      },
      edges: [
        "4ff1bf98-a9fb-43c3-b6b1-fa3f8d2f774b",
        "693d9043-196d-4337-8082-bfaf7d0bcda7",
      ],
      area: "OceaniaCaveB1",
      left: "2ed10ab1-5649-4475-8530-9c988350131b",
      bottom: "af949a12-054e-4946-b836-722f237d3ef5",
    },
    {
      id: "af949a12-054e-4946-b836-722f237d3ef5",
      name: "GoldTreasureField",
      position: {
        x: 1540,
        y: 1880,
      },
      edges: [
        "693d9043-196d-4337-8082-bfaf7d0bcda7",
        "32319aaf-9a8c-443d-884c-a1c6a8f95b09",
      ],
      area: "OceaniaCaveB1",
      top: "7311bece-c69a-4f4e-b730-1b75181bb6ea",
      left: "972d6574-119d-4126-9bca-55bec5016378",
    },
  ],
  edges: [
    {
      start: {
        x: 4320,
        y: 4220,
      },
      startId: "fb579ade-9209-4f15-9850-32337420a561",
      end: {
        x: 4900,
        y: 4200,
      },
      endId: "11e99ead-d82d-430d-a20a-2c21923c4f65",
      name: "TwoWayHEdge",
      id: "336cff9a-9abc-459b-87be-857850ea9f1d",
    },
    {
      start: {
        x: 4900,
        y: 4200,
      },
      startId: "11e99ead-d82d-430d-a20a-2c21923c4f65",
      end: {
        x: 4820,
        y: 4660,
      },
      endId: "81b7b95e-ce06-4d7a-8a00-b3d4a319f77e",
      name: "TwoWayVEdge",
      id: "055c3069-94a0-4c0b-889b-40d63b5850b4",
    },
    {
      start: {
        x: 4820,
        y: 4660,
      },
      startId: "81b7b95e-ce06-4d7a-8a00-b3d4a319f77e",
      end: {
        x: 5380,
        y: 4600,
      },
      endId: "7edab82d-1774-486d-a77d-17e098ad6174",
      name: "TwoWayHEdge",
      id: "fd2e7226-b8d9-4276-ba6b-33dbc563bb78",
    },
    {
      start: {
        x: 4320,
        y: 4220,
      },
      startId: "fb579ade-9209-4f15-9850-32337420a561",
      end: {
        x: 4280,
        y: 3880,
      },
      endId: "1af7dcac-4e1a-4008-bdfb-e5a310a932a7",
      name: "TwoWayVEdge",
      id: "8e3e72bd-d3c4-46e7-81d3-fa87c2aeef04",
    },
    {
      start: {
        x: 4280,
        y: 3880,
      },
      startId: "1af7dcac-4e1a-4008-bdfb-e5a310a932a7",
      end: {
        x: 4320,
        y: 3520,
      },
      endId: "89e62433-79f3-4016-9a6a-69ecdc1b626d",
      name: "TwoWayVEdge",
      id: "d86f53a0-1d9a-4630-a8d7-b3598be1a9c5",
    },
    {
      start: {
        x: 4320,
        y: 3520,
      },
      startId: "89e62433-79f3-4016-9a6a-69ecdc1b626d",
      end: {
        x: 4820,
        y: 3520,
      },
      endId: "8dfe6ee3-d3fd-4d7b-aeed-a839422ba86d",
      name: "TwoWayHEdge",
      id: "e6b570bd-2e9d-481e-b0bc-36ed9790f66d",
    },
    {
      start: {
        x: 4820,
        y: 3520,
      },
      startId: "8dfe6ee3-d3fd-4d7b-aeed-a839422ba86d",
      end: {
        x: 4900,
        y: 4200,
      },
      endId: "11e99ead-d82d-430d-a20a-2c21923c4f65",
      name: "TwoWayVEdge",
      id: "5af4c240-6a12-48ca-a27e-9e2fbe1be304",
    },
    {
      start: {
        x: 4820,
        y: 3520,
      },
      startId: "8dfe6ee3-d3fd-4d7b-aeed-a839422ba86d",
      end: {
        x: 4880,
        y: 3060,
      },
      endId: "7df9b09f-e130-4393-8b35-f9cd41db3d2e",
      name: "TwoWayVEdge",
      id: "734b7891-b5f2-4594-8581-b7484b22cc26",
    },
    {
      start: {
        x: 4880,
        y: 3060,
      },
      startId: "7df9b09f-e130-4393-8b35-f9cd41db3d2e",
      end: {
        x: 4300,
        y: 3000,
      },
      endId: "aed2754d-67cb-47f1-b620-ed17d58e8bbe",
      name: "TwoWayHEdge",
      id: "e51ca5e4-8bb2-44d2-9d5e-504a8b68a125",
    },
    {
      start: {
        x: 4300,
        y: 3000,
      },
      startId: "aed2754d-67cb-47f1-b620-ed17d58e8bbe",
      end: {
        x: 3740,
        y: 2960,
      },
      endId: "fa31bbba-0db1-4d8d-b381-c3f2f501f013",
      name: "TwoWayHEdge",
      id: "dfd107c5-b38e-479e-bd55-67489dff07f9",
    },
    {
      start: {
        x: 3740,
        y: 2960,
      },
      startId: "fa31bbba-0db1-4d8d-b381-c3f2f501f013",
      end: {
        x: 3800,
        y: 3360,
      },
      endId: "3c0a5848-88aa-4ca6-a5d4-5a876547dde3",
      name: "TwoWayVEdge",
      id: "2c4892af-5f07-458a-986f-29c77ae3a947",
    },
    {
      start: {
        x: 3800,
        y: 3360,
      },
      startId: "3c0a5848-88aa-4ca6-a5d4-5a876547dde3",
      end: {
        x: 3760,
        y: 3780,
      },
      endId: "779780b2-9d1f-4043-9178-fdbb8d4fbc6c",
      name: "TwoWayVEdge",
      id: "d68e8fb9-f93b-46a0-86e8-f1b39cf9cf54",
    },
    {
      start: {
        x: 3760,
        y: 3780,
      },
      startId: "779780b2-9d1f-4043-9178-fdbb8d4fbc6c",
      end: {
        x: 3820,
        y: 4220,
      },
      endId: "303f2e3c-95b4-4070-8ed7-f5859b4b0fe7",
      name: "TwoWayVEdge",
      id: "1ad8b978-3a95-42ae-accb-febc2132c6a4",
    },
    {
      start: {
        x: 3740,
        y: 2960,
      },
      startId: "fa31bbba-0db1-4d8d-b381-c3f2f501f013",
      end: {
        x: 3180,
        y: 2980,
      },
      endId: "8079aba3-286b-43b6-a253-600a1a8f4f96",
      name: "TwoWayHEdge",
      id: "2ccc8f75-50da-49b9-8e86-a9cf0e2844e2",
    },
    {
      start: {
        x: 3180,
        y: 2980,
      },
      startId: "8079aba3-286b-43b6-a253-600a1a8f4f96",
      end: {
        x: 3120,
        y: 3360,
      },
      endId: "f23afbe8-5d39-4d8a-a58d-b70ec747dcff",
      name: "TwoWayVEdge",
      id: "3a2801f8-8496-46d1-935b-29fc4aef14c6",
    },
    {
      start: {
        x: 3120,
        y: 3360,
      },
      startId: "f23afbe8-5d39-4d8a-a58d-b70ec747dcff",
      end: {
        x: 3180,
        y: 3800,
      },
      endId: "a6be9d3a-c526-4b20-b766-fa02d74882bd",
      name: "TwoWayVEdge",
      id: "86d5f32c-2e78-4640-b6f0-cf203771f1db",
    },
    {
      start: {
        x: 3180,
        y: 3800,
      },
      startId: "a6be9d3a-c526-4b20-b766-fa02d74882bd",
      end: {
        x: 3120,
        y: 4260,
      },
      endId: "a04090ec-f03a-433a-8c1e-2768bcf75562",
      name: "TwoWayVEdge",
      id: "f0b880e8-ecda-47f7-b77d-da7a816e2879",
    },
    {
      start: {
        x: 3120,
        y: 4260,
      },
      startId: "a04090ec-f03a-433a-8c1e-2768bcf75562",
      end: {
        x: 2540,
        y: 4240,
      },
      endId: "0075885b-5974-48da-a4fb-6aa2e57155e7",
      name: "TwoWayHEdge",
      id: "bb5be881-babf-4178-b027-cc718d4d63f9",
    },
    {
      start: {
        x: 2540,
        y: 4240,
      },
      startId: "0075885b-5974-48da-a4fb-6aa2e57155e7",
      end: {
        x: 2460,
        y: 4680,
      },
      endId: "c1295c60-2601-4487-824a-19ebc75bd8cb",
      name: "TwoWayVEdge",
      id: "502cdfff-4c6c-4005-8230-a8b5806fa46a",
    },
    {
      start: {
        x: 2460,
        y: 4680,
      },
      startId: "c1295c60-2601-4487-824a-19ebc75bd8cb",
      end: {
        x: 3120,
        y: 4700,
      },
      endId: "304cc38c-12db-4861-8eee-2850672bf6fb",
      name: "TwoWayHEdge",
      id: "f94e4743-fa33-4aa6-b812-f05a1e340b22",
    },
    {
      start: {
        x: 3120,
        y: 4700,
      },
      startId: "304cc38c-12db-4861-8eee-2850672bf6fb",
      end: {
        x: 3800,
        y: 4680,
      },
      endId: "30bb7fcb-9840-408f-a378-1c5497717663",
      name: "TwoWayHEdge",
      id: "82e6bdf6-3593-4ccd-8272-8f0c8ff296f8",
    },
    {
      start: {
        x: 3820,
        y: 4220,
      },
      startId: "303f2e3c-95b4-4070-8ed7-f5859b4b0fe7",
      end: {
        x: 3800,
        y: 4680,
      },
      endId: "30bb7fcb-9840-408f-a378-1c5497717663",
      name: "TwoWayVEdge",
      id: "11428e4a-4277-4bcc-887a-05f3a60decc8",
    },
    {
      start: {
        x: 2460,
        y: 4680,
      },
      startId: "c1295c60-2601-4487-824a-19ebc75bd8cb",
      end: {
        x: 1780,
        y: 4700,
      },
      endId: "b01ea4cd-539a-4669-853c-e45abeb418cb",
      name: "TwoWayHEdge",
      id: "43d91706-b2b3-40f0-8f20-d37aadf83298",
    },
    {
      start: {
        x: 1780,
        y: 4700,
      },
      startId: "b01ea4cd-539a-4669-853c-e45abeb418cb",
      end: {
        x: 1140,
        y: 4660,
      },
      endId: "2c2c778e-46c9-4833-848e-9bcd2aac5bf5",
      name: "TwoWayHEdge",
      id: "8cbd23b5-4fad-4aa0-8a24-6e558dc0cc67",
    },
    {
      start: {
        x: 1140,
        y: 4660,
      },
      startId: "2c2c778e-46c9-4833-848e-9bcd2aac5bf5",
      end: {
        x: 1180,
        y: 4200,
      },
      endId: "991b018c-a0d2-466f-8a19-b894cd1b6fd8",
      name: "TwoWayVEdge",
      id: "0c91e335-5dc7-422a-aa35-103b8ac013f0",
    },
    {
      start: {
        x: 1140,
        y: 4660,
      },
      startId: "2c2c778e-46c9-4833-848e-9bcd2aac5bf5",
      end: {
        x: 600,
        y: 4680,
      },
      endId: "cf52e5e6-57e8-4291-8b46-0637b4662ee2",
      name: "TwoWayHEdge",
      id: "29e88a18-f631-4462-8d4b-f5a29044bbd2",
    },
    {
      start: {
        x: 600,
        y: 4680,
      },
      startId: "cf52e5e6-57e8-4291-8b46-0637b4662ee2",
      end: {
        x: 60,
        y: 4700,
      },
      endId: "b161729a-2298-41a9-b8f2-a1dd1378425c",
      name: "TwoWayHEdge",
      id: "7a98e12b-8dec-44d2-984a-54a2e9f668bb",
    },
    {
      start: {
        x: 60,
        y: 4700,
      },
      startId: "b161729a-2298-41a9-b8f2-a1dd1378425c",
      end: {
        x: 40,
        y: 4200,
      },
      endId: "9f19d213-3c32-43d0-acbb-950e3c0cffe7",
      name: "TwoWayVEdge",
      id: "7e24b589-ed06-4a74-a706-5f1dd4bd7b8d",
    },
    {
      start: {
        x: 1180,
        y: 4200,
      },
      startId: "991b018c-a0d2-466f-8a19-b894cd1b6fd8",
      end: {
        x: 1120,
        y: 3700,
      },
      endId: "41b5efa5-8d34-4f8d-939a-8f49232037af",
      name: "TwoWayVEdge",
      id: "26ae7984-425a-483d-8f50-b4dddfb13c3c",
    },
    {
      start: {
        x: 1120,
        y: 3700,
      },
      startId: "41b5efa5-8d34-4f8d-939a-8f49232037af",
      end: {
        x: 1200,
        y: 3220,
      },
      endId: "e0e2ed0e-bebe-415d-b7ac-215e787d16b0",
      name: "TwoWayVEdge",
      id: "8080670c-b12c-40da-a313-074128b40b5c",
    },
    {
      start: {
        x: 1200,
        y: 3220,
      },
      startId: "e0e2ed0e-bebe-415d-b7ac-215e787d16b0",
      end: {
        x: 620,
        y: 3180,
      },
      endId: "65fc4690-d9c7-4a40-8c88-d6e46fa442ff",
      name: "TwoWayHEdge",
      id: "d4ada453-6fcc-45f2-9844-4c70c59dd89c",
    },
    {
      start: {
        x: 3180,
        y: 2980,
      },
      startId: "8079aba3-286b-43b6-a253-600a1a8f4f96",
      end: {
        x: 3120,
        y: 2460,
      },
      endId: "b0bce7f2-eb12-4d7a-ba36-b7bf1f31aae1",
      name: "TwoWayVEdge",
      id: "81ca31bc-2c88-45bc-bdd6-4a74ab3375d5",
    },
    {
      start: {
        x: 3120,
        y: 2460,
      },
      startId: "b0bce7f2-eb12-4d7a-ba36-b7bf1f31aae1",
      end: {
        x: 3740,
        y: 2440,
      },
      endId: "31596b3a-b0c3-4ff3-b9df-c22c93a59dbe",
      name: "TwoWayHEdge",
      id: "d7ef4e96-008c-4760-86d6-57886d5a9c8b",
    },
    {
      start: {
        x: 3120,
        y: 2460,
      },
      startId: "b0bce7f2-eb12-4d7a-ba36-b7bf1f31aae1",
      end: {
        x: 3200,
        y: 1960,
      },
      endId: "1f181529-c841-4c29-94d9-ac8b6ad705d6",
      name: "TwoWayVEdge",
      id: "231ab73b-e07b-493a-97d1-ca4a76e93dc8",
    },
    {
      start: {
        x: 3200,
        y: 1960,
      },
      startId: "1f181529-c841-4c29-94d9-ac8b6ad705d6",
      end: {
        x: 3060,
        y: 1520,
      },
      endId: "b15255c7-ae51-4101-94ac-78020804aab1",
      name: "TwoWayVEdge",
      id: "bdf55d4c-cc41-410d-a46a-e480ec5bf959",
    },
    {
      start: {
        x: 3060,
        y: 1520,
      },
      startId: "b15255c7-ae51-4101-94ac-78020804aab1",
      end: {
        x: 3700,
        y: 1520,
      },
      endId: "05e7d65a-656e-4ec2-a04e-e9d3d7960cc4",
      name: "TwoWayHEdge",
      id: "e8f0c2be-ae04-4137-a799-863e134f2da0",
    },
    {
      start: {
        x: 3700,
        y: 1520,
      },
      startId: "05e7d65a-656e-4ec2-a04e-e9d3d7960cc4",
      end: {
        x: 3740,
        y: 2440,
      },
      endId: "31596b3a-b0c3-4ff3-b9df-c22c93a59dbe",
      name: "TwoWayVEdge",
      id: "f262a234-41a6-4c76-badf-151069f2beeb",
    },
    {
      start: {
        x: 3200,
        y: 1960,
      },
      startId: "1f181529-c841-4c29-94d9-ac8b6ad705d6",
      end: {
        x: 2520,
        y: 1960,
      },
      endId: "95c80f2d-cccd-4673-9de4-39494f4fb635",
      name: "TwoWayHEdge",
      id: "ec1b8202-4aff-4498-821d-e2986e5c39d9",
    },
    {
      start: {
        x: 4300,
        y: 3000,
      },
      startId: "aed2754d-67cb-47f1-b620-ed17d58e8bbe",
      end: {
        x: 4340,
        y: 2500,
      },
      endId: "b5458672-49d9-4065-a573-b0298a97f873",
      name: "TwoWayVEdge",
      id: "7ec67682-f449-4072-ac67-2c4bf6908f5d",
    },
    {
      start: {
        x: 4340,
        y: 2500,
      },
      startId: "b5458672-49d9-4065-a573-b0298a97f873",
      end: {
        x: 4240,
        y: 2000,
      },
      endId: "bc5fecca-928e-4aa5-8fdb-ea4fa32918dc",
      name: "TwoWayVEdge",
      id: "b7e294a2-0da0-47ff-b159-5ea4f6013192",
    },
    {
      start: {
        x: 4240,
        y: 2000,
      },
      startId: "bc5fecca-928e-4aa5-8fdb-ea4fa32918dc",
      end: {
        x: 4300,
        y: 1540,
      },
      endId: "5792fc15-f984-42c4-9e66-7296ff5909c2",
      name: "TwoWayVEdge",
      id: "4566a95d-d442-4596-95e4-b4f2a8f93267",
    },
    {
      start: {
        x: 4300,
        y: 1540,
      },
      startId: "5792fc15-f984-42c4-9e66-7296ff5909c2",
      end: {
        x: 4220,
        y: 1060,
      },
      endId: "0500c647-2d9c-46b4-96eb-a2c750f4f5fb",
      name: "TwoWayVEdge",
      id: "86d5f86b-bb5a-4bbf-a09e-7202ffa50ca2",
    },
    {
      start: {
        x: 4220,
        y: 1060,
      },
      startId: "0500c647-2d9c-46b4-96eb-a2c750f4f5fb",
      end: {
        x: 4800,
        y: 1040,
      },
      endId: "e9be21c0-93cb-4fe3-9e02-21ebe8d8e681",
      name: "TwoWayHEdge",
      id: "bfc2b1e9-7ea9-4d09-aec8-4e888c40b5d5",
    },
    {
      start: {
        x: 4220,
        y: 1060,
      },
      startId: "0500c647-2d9c-46b4-96eb-a2c750f4f5fb",
      end: {
        x: 3680,
        y: 1040,
      },
      endId: "632bef08-0e41-4025-9c4d-8605b24e949c",
      name: "TwoWayHEdge",
      id: "3f0fefe4-3e67-4de2-b7a0-65a4aeee9bd2",
    },
    {
      start: {
        x: 3680,
        y: 1040,
      },
      startId: "632bef08-0e41-4025-9c4d-8605b24e949c",
      end: {
        x: 3720,
        y: 520,
      },
      endId: "775b489f-0bd9-4c64-8f60-09364e575cc0",
      name: "TwoWayVEdge",
      id: "11b3a0c2-4fb2-40bf-8f63-e1bb333547e1",
    },
    {
      start: {
        x: 3720,
        y: 520,
      },
      startId: "775b489f-0bd9-4c64-8f60-09364e575cc0",
      end: {
        x: 4720,
        y: 520,
      },
      endId: "fdae1dca-de45-420b-a4eb-9f96211215fc",
      name: "TwoWayHEdge",
      id: "66cef63d-a9e6-4915-b65f-379276105b3e",
    },
    {
      start: {
        x: 4720,
        y: 520,
      },
      startId: "fdae1dca-de45-420b-a4eb-9f96211215fc",
      end: {
        x: 4800,
        y: 1040,
      },
      endId: "e9be21c0-93cb-4fe3-9e02-21ebe8d8e681",
      name: "TwoWayVEdge",
      id: "44b4d3af-f9c5-416b-ba81-c778ecc79814",
    },
    {
      start: {
        x: 3720,
        y: 520,
      },
      startId: "775b489f-0bd9-4c64-8f60-09364e575cc0",
      end: {
        x: 3640,
        y: 40,
      },
      endId: "65e94520-07e9-4db8-87b5-059572838400",
      name: "TwoWayVEdge",
      id: "ca1c7f76-c299-436e-84e8-819b538beee4",
    },
    {
      start: {
        x: 3060,
        y: 1520,
      },
      startId: "b15255c7-ae51-4101-94ac-78020804aab1",
      end: {
        x: 3120,
        y: 1020,
      },
      endId: "e06743ac-d011-4dfe-be41-bb5dd70a8761",
      name: "TwoWayVEdge",
      id: "2bf210eb-c377-45f0-9bd2-da756762a97e",
    },
    {
      start: {
        x: 3120,
        y: 1020,
      },
      startId: "e06743ac-d011-4dfe-be41-bb5dd70a8761",
      end: {
        x: 3040,
        y: 520,
      },
      endId: "334f5b91-ae20-4039-a639-7042edcdd60d",
      name: "TwoWayVEdge",
      id: "6f38167d-5f64-4ce1-9b8a-3a7771c39965",
    },
    {
      start: {
        x: 3040,
        y: 520,
      },
      startId: "334f5b91-ae20-4039-a639-7042edcdd60d",
      end: {
        x: 2500,
        y: 540,
      },
      endId: "f71a734b-30d5-46bd-a472-ad151550454a",
      name: "TwoWayHEdge",
      id: "99a04a65-4ff5-4170-954c-92b7e96076e0",
    },
    {
      start: {
        x: 2500,
        y: 540,
      },
      startId: "f71a734b-30d5-46bd-a472-ad151550454a",
      end: {
        x: 1980,
        y: 520,
      },
      endId: "c7995e22-f2f5-48c2-aacd-4a02e6ce6e90",
      name: "TwoWayHEdge",
      id: "b35c3ae0-1b50-46a0-9b29-270b516abd6b",
    },
    {
      start: {
        x: 1980,
        y: 520,
      },
      startId: "c7995e22-f2f5-48c2-aacd-4a02e6ce6e90",
      end: {
        x: 1140,
        y: 480,
      },
      endId: "818ce01d-af3d-409b-b6f0-62be7392cff2",
      name: "TwoWayHEdge",
      id: "4f8c1e26-6094-44e2-8281-7c99da443303",
    },
    {
      start: {
        x: 1140,
        y: 480,
      },
      startId: "818ce01d-af3d-409b-b6f0-62be7392cff2",
      end: {
        x: 360,
        y: 520,
      },
      endId: "9be613d6-f2bc-4a37-b338-084bf677f6de",
      name: "TwoWayHEdge",
      id: "ff3f98f6-adcf-49f6-93c4-d9e8b34fb312",
    },
    {
      start: {
        x: 360,
        y: 520,
      },
      startId: "9be613d6-f2bc-4a37-b338-084bf677f6de",
      end: {
        x: 320,
        y: 980,
      },
      endId: "bb89ead0-4e71-4030-93ff-51ea3d55ffec",
      name: "TwoWayVEdge",
      id: "894abbd2-cf18-48f2-836c-1a1b75c44726",
    },
    {
      start: {
        x: 320,
        y: 980,
      },
      startId: "bb89ead0-4e71-4030-93ff-51ea3d55ffec",
      end: {
        x: 900,
        y: 960,
      },
      endId: "0fc96512-dc88-4692-ad5c-57ff25d39501",
      name: "TwoWayHEdge",
      id: "12a2edfc-c0c6-4ba9-8f37-4090e34428bc",
    },
    {
      start: {
        x: 320,
        y: 980,
      },
      startId: "bb89ead0-4e71-4030-93ff-51ea3d55ffec",
      end: {
        x: 360,
        y: 1820,
      },
      endId: "4895d6d5-e4a7-4ca5-ad94-8574de8a71c6",
      name: "TwoWayVEdge",
      id: "f9c774cb-ed82-4e46-aea1-b81357c25855",
    },
    {
      start: {
        x: 360,
        y: 1820,
      },
      startId: "4895d6d5-e4a7-4ca5-ad94-8574de8a71c6",
      end: {
        x: 940,
        y: 1840,
      },
      endId: "972d6574-119d-4126-9bca-55bec5016378",
      name: "TwoWayHEdge",
      id: "e7cda936-6792-408b-8701-e42e7f1fbdd0",
    },
    {
      start: {
        x: 900,
        y: 960,
      },
      startId: "0fc96512-dc88-4692-ad5c-57ff25d39501",
      end: {
        x: 1000,
        y: 1380,
      },
      endId: "2ed10ab1-5649-4475-8530-9c988350131b",
      name: "TwoWayVEdge",
      id: "61990d55-5e26-441e-aee5-6401ebbce450",
    },
    {
      start: {
        x: 1000,
        y: 1380,
      },
      startId: "2ed10ab1-5649-4475-8530-9c988350131b",
      end: {
        x: 940,
        y: 1840,
      },
      endId: "972d6574-119d-4126-9bca-55bec5016378",
      name: "TwoWayVEdge",
      id: "fd13f059-2346-4878-9ce1-b5cb87354208",
    },
    {
      start: {
        x: 1000,
        y: 1380,
      },
      startId: "2ed10ab1-5649-4475-8530-9c988350131b",
      end: {
        x: 1600,
        y: 1400,
      },
      endId: "7311bece-c69a-4f4e-b730-1b75181bb6ea",
      name: "TwoWayHEdge",
      id: "4ff1bf98-a9fb-43c3-b6b1-fa3f8d2f774b",
    },
    {
      start: {
        x: 1600,
        y: 1400,
      },
      startId: "7311bece-c69a-4f4e-b730-1b75181bb6ea",
      end: {
        x: 1540,
        y: 1880,
      },
      endId: "af949a12-054e-4946-b836-722f237d3ef5",
      name: "TwoWayVEdge",
      id: "693d9043-196d-4337-8082-bfaf7d0bcda7",
    },
    {
      start: {
        x: 1540,
        y: 1880,
      },
      startId: "af949a12-054e-4946-b836-722f237d3ef5",
      end: {
        x: 940,
        y: 1840,
      },
      endId: "972d6574-119d-4126-9bca-55bec5016378",
      name: "TwoWayHEdge",
      id: "32319aaf-9a8c-443d-884c-a1c6a8f95b09",
    },
  ],
};
export default oceaniaCaveB1Map;
