import type { GraphJSON } from "global";

const oceaniaCaveMap: GraphJSON = {
  vertices: [
    {
      position: {
        x: 2700,
        y: 60,
      },
      name: "BattleField",
      id: "166e987e-ac8b-4c3b-ac3d-a0c88364b353",
      edges: [
        "46f67c93-1f5c-4d57-9e30-690a13c12d03",
        "1323f68b-90d2-4846-a784-0fdb88a0db1f",
        "a963922a-5adc-42aa-bf7b-dca72ffdd60c",
      ],
      area: "OceaniaCave",
      right: "57336045-939c-4e60-b211-05591ff71692",
      bottom: "9fa2c83e-c483-4b20-943a-84e2ee1fa14b",
      left: "be0287db-d6b0-4cd4-92df-4b60e0402d48",
    },
    {
      id: "57336045-939c-4e60-b211-05591ff71692",
      name: "BattleField",
      position: {
        x: 3280,
        y: 80,
      },
      edges: [
        "46f67c93-1f5c-4d57-9e30-690a13c12d03",
        "2bb39b4d-87b2-4aa5-bf74-e3a32e1e57fe",
      ],
      area: "OceaniaCave",
      left: "166e987e-ac8b-4c3b-ac3d-a0c88364b353",
      right: "b5c28642-1e89-40f2-bd8a-b0b6ec80ac18",
    },
    {
      id: "9fa2c83e-c483-4b20-943a-84e2ee1fa14b",
      name: "CaveField",
      position: {
        x: 2700,
        y: 560,
      },
      edges: ["1323f68b-90d2-4846-a784-0fdb88a0db1f"],
      area: "OceaniaCave",
      top: "166e987e-ac8b-4c3b-ac3d-a0c88364b353",
    },
    {
      id: "b5c28642-1e89-40f2-bd8a-b0b6ec80ac18",
      name: "DamageField",
      position: {
        x: 3880,
        y: 60,
      },
      edges: [
        "2bb39b4d-87b2-4aa5-bf74-e3a32e1e57fe",
        "cb43768f-baa0-44c0-a0cd-58f04dd94b32",
      ],
      area: "OceaniaCave",
      left: "57336045-939c-4e60-b211-05591ff71692",
      right: "1197fa65-4d94-4a33-b709-532b0e414bc2",
    },
    {
      id: "be0287db-d6b0-4cd4-92df-4b60e0402d48",
      name: "DamageField",
      position: {
        x: 2100,
        y: 80,
      },
      edges: [
        "a963922a-5adc-42aa-bf7b-dca72ffdd60c",
        "534a5128-f589-4849-b574-6968d0297623",
      ],
      area: "OceaniaCave",
      right: "166e987e-ac8b-4c3b-ac3d-a0c88364b353",
      left: "5fd4c324-ef84-4762-9aed-91790dd47180",
    },
    {
      id: "5fd4c324-ef84-4762-9aed-91790dd47180",
      name: "TreasureField",
      position: {
        x: 1560,
        y: 40,
      },
      edges: [
        "534a5128-f589-4849-b574-6968d0297623",
        "6b808e08-c374-4c19-a747-7666bbfaabff",
      ],
      area: "OceaniaCave",
      right: "be0287db-d6b0-4cd4-92df-4b60e0402d48",
      left: "15e0ca5e-7c6a-4534-a091-0ffdce2c354b",
    },
    {
      id: "15e0ca5e-7c6a-4534-a091-0ffdce2c354b",
      name: "BattleField",
      position: {
        x: 1040,
        y: 60,
      },
      edges: [
        "6b808e08-c374-4c19-a747-7666bbfaabff",
        "e7409d07-ed86-4971-9d83-e14d1a17e3e2",
      ],
      area: "OceaniaCave",
      right: "5fd4c324-ef84-4762-9aed-91790dd47180",
      bottom: "f9f3c987-b2e6-488b-9a50-6b5834e37bd5",
    },
    {
      id: "f9f3c987-b2e6-488b-9a50-6b5834e37bd5",
      name: "MagicBookField",
      position: {
        x: 1060,
        y: 520,
      },
      edges: [
        "e7409d07-ed86-4971-9d83-e14d1a17e3e2",
        "7c780c86-e52f-4fe2-bb17-54e3cede0c62",
      ],
      area: "OceaniaCave",
      top: "15e0ca5e-7c6a-4534-a091-0ffdce2c354b",
      bottom: "1ba189e2-12e0-48da-9d3c-1745ea4757ab",
    },
    {
      id: "1ba189e2-12e0-48da-9d3c-1745ea4757ab",
      name: "TreasureField",
      position: {
        x: 1040,
        y: 1000,
      },
      edges: [
        "7c780c86-e52f-4fe2-bb17-54e3cede0c62",
        "0a2d355d-65f4-46dc-84e7-56bbe19fc9d0",
        "1bc895d0-ad9a-4965-88c4-006dceac23e2",
      ],
      area: "OceaniaCave",
      top: "f9f3c987-b2e6-488b-9a50-6b5834e37bd5",
      right: "5ea9653e-c1b9-48b8-902b-5c588d61610f",
      bottom: "7078afb5-d03e-406a-ac73-b2ef142a154d",
    },
    {
      id: "5ea9653e-c1b9-48b8-902b-5c588d61610f",
      name: "BattleField",
      position: {
        x: 1640,
        y: 1020,
      },
      edges: [
        "0a2d355d-65f4-46dc-84e7-56bbe19fc9d0",
        "9e7c4f46-e43b-4ee2-8cc6-1389b25374c3",
      ],
      area: "OceaniaCave",
      left: "1ba189e2-12e0-48da-9d3c-1745ea4757ab",
      bottom: "4a78efd9-4be8-42da-90cf-4bdc4dd41c67",
    },
    {
      id: "4a78efd9-4be8-42da-90cf-4bdc4dd41c67",
      name: "TreasureField",
      position: {
        x: 1620,
        y: 1760,
      },
      edges: [
        "9e7c4f46-e43b-4ee2-8cc6-1389b25374c3",
        "754b7662-f028-4a4c-a0b4-947be9edaacb",
      ],
      area: "OceaniaCave",
      top: "5ea9653e-c1b9-48b8-902b-5c588d61610f",
      left: "391b889b-e277-4171-91d3-93c4661abd6c",
    },
    {
      id: "7078afb5-d03e-406a-ac73-b2ef142a154d",
      name: "BattleField",
      position: {
        x: 1080,
        y: 1420,
      },
      edges: [
        "1bc895d0-ad9a-4965-88c4-006dceac23e2",
        "dcbc96bd-0b4e-4207-948f-4b9799b4ae31",
        "0d440155-22b4-429f-be70-5135b225df3b",
      ],
      area: "OceaniaCave",
      top: "1ba189e2-12e0-48da-9d3c-1745ea4757ab",
      bottom: "391b889b-e277-4171-91d3-93c4661abd6c",
      left: "1a46e55f-54c9-45c1-b77f-bfb8f9b67624",
    },
    {
      id: "391b889b-e277-4171-91d3-93c4661abd6c",
      name: "BattleField",
      position: {
        x: 1040,
        y: 1820,
      },
      edges: [
        "dcbc96bd-0b4e-4207-948f-4b9799b4ae31",
        "754b7662-f028-4a4c-a0b4-947be9edaacb",
        "45990f58-f60e-4b23-a416-29feba2ae4c3",
      ],
      area: "OceaniaCave",
      top: "7078afb5-d03e-406a-ac73-b2ef142a154d",
      right: "4a78efd9-4be8-42da-90cf-4bdc4dd41c67",
      bottom: "f048d934-9030-4fab-9394-85fce2087357",
    },
    {
      id: "1a46e55f-54c9-45c1-b77f-bfb8f9b67624",
      name: "BattleField",
      position: {
        x: 560,
        y: 1420,
      },
      edges: [
        "0d440155-22b4-429f-be70-5135b225df3b",
        "f500edfe-4259-4595-be07-3345bcc3a1fd",
      ],
      area: "OceaniaCave",
      right: "7078afb5-d03e-406a-ac73-b2ef142a154d",
      left: "e78e18ee-282a-4991-bfdd-b296e90e1fb4",
    },
    {
      id: "e78e18ee-282a-4991-bfdd-b296e90e1fb4",
      name: "KeyTreasureField",
      position: {
        x: 40,
        y: 1420,
      },
      edges: ["f500edfe-4259-4595-be07-3345bcc3a1fd"],
      area: "OceaniaCave",
      right: "1a46e55f-54c9-45c1-b77f-bfb8f9b67624",
    },
    {
      id: "f048d934-9030-4fab-9394-85fce2087357",
      name: "GoldTreasureField",
      position: {
        x: 1080,
        y: 2320,
      },
      edges: [
        "45990f58-f60e-4b23-a416-29feba2ae4c3",
        "188beba2-e2fb-44bc-8a5b-4bf222820379",
      ],
      area: "OceaniaCave",
      top: "391b889b-e277-4171-91d3-93c4661abd6c",
      right: "193b8b62-715c-4c05-888a-b2ab1b7d62de",
    },
    {
      id: "193b8b62-715c-4c05-888a-b2ab1b7d62de",
      name: "BattleField",
      position: {
        x: 1620,
        y: 2340,
      },
      edges: [
        "188beba2-e2fb-44bc-8a5b-4bf222820379",
        "79667600-688a-457b-95b0-ec2fe526f533",
      ],
      area: "OceaniaCave",
      left: "f048d934-9030-4fab-9394-85fce2087357",
      bottom: "778a1cef-d9e5-4bbb-8a3c-e1cbb5beb652",
    },
    {
      id: "778a1cef-d9e5-4bbb-8a3c-e1cbb5beb652",
      name: "CollectAllMoneyField",
      position: {
        x: 1640,
        y: 2840,
      },
      edges: ["79667600-688a-457b-95b0-ec2fe526f533"],
      area: "OceaniaCave",
      top: "193b8b62-715c-4c05-888a-b2ab1b7d62de",
    },
    {
      id: "1197fa65-4d94-4a33-b709-532b0e414bc2",
      name: "BattleField",
      position: {
        x: 4420,
        y: 80,
      },
      edges: [
        "cb43768f-baa0-44c0-a0cd-58f04dd94b32",
        "b51abb42-1cdf-4e86-9574-bc4a5d9d8b6c",
      ],
      area: "OceaniaCave",
      left: "b5c28642-1e89-40f2-bd8a-b0b6ec80ac18",
      bottom: "07814327-e220-4b67-9e4f-0e2ac6296721",
    },
    {
      id: "07814327-e220-4b67-9e4f-0e2ac6296721",
      name: "GoldTreasureField",
      position: {
        x: 4500,
        y: 620,
      },
      edges: [
        "b51abb42-1cdf-4e86-9574-bc4a5d9d8b6c",
        "6ad2d646-1ccf-4e7a-a1ed-bab8e27f3529",
      ],
      area: "OceaniaCave",
      top: "1197fa65-4d94-4a33-b709-532b0e414bc2",
      bottom: "6333a1cc-d6f4-476b-9c6f-262ee0411903",
    },
    {
      id: "6333a1cc-d6f4-476b-9c6f-262ee0411903",
      name: "TreasureField",
      position: {
        x: 4420,
        y: 1240,
      },
      edges: [
        "6ad2d646-1ccf-4e7a-a1ed-bab8e27f3529",
        "4ed710ad-517f-486b-948d-833c09e83c6c",
        "f7d31a38-be11-4191-af66-3c5e3311e9a8",
      ],
      area: "OceaniaCave",
      top: "07814327-e220-4b67-9e4f-0e2ac6296721",
      left: "24f19210-458e-4f5c-965f-3ca19fc18789",
      bottom: "7b95983a-9695-4507-bdc8-f40c85303c8a",
    },
    {
      id: "24f19210-458e-4f5c-965f-3ca19fc18789",
      name: "MagicBookField",
      position: {
        x: 3880,
        y: 1240,
      },
      edges: [
        "4ed710ad-517f-486b-948d-833c09e83c6c",
        "233af791-00f0-42b0-9127-eeb4edabfc7a",
      ],
      area: "OceaniaCave",
      right: "6333a1cc-d6f4-476b-9c6f-262ee0411903",
      bottom: "b76d8871-3768-4d7d-b583-49ce21e33609",
    },
    {
      id: "7b95983a-9695-4507-bdc8-f40c85303c8a",
      name: "BattleField",
      position: {
        x: 4480,
        y: 1660,
      },
      edges: [
        "f7d31a38-be11-4191-af66-3c5e3311e9a8",
        "0c234927-4e39-490f-a851-1703a8bceb64",
        "712f5e34-6772-4bdb-8afc-41dbfda26712",
      ],
      area: "OceaniaCave",
      top: "6333a1cc-d6f4-476b-9c6f-262ee0411903",
      right: "305cbba7-0f85-4c4d-8d4c-87ba89839fea",
      bottom: "4e0082b6-c695-4b91-aabe-4f1348bf9c24",
    },
    {
      id: "305cbba7-0f85-4c4d-8d4c-87ba89839fea",
      name: "RedTreasureField",
      position: {
        x: 5060,
        y: 1660,
      },
      edges: [
        "0c234927-4e39-490f-a851-1703a8bceb64",
        "523ade62-a91d-430b-8dcf-6217d1574858",
      ],
      area: "OceaniaCave",
      left: "7b95983a-9695-4507-bdc8-f40c85303c8a",
      bottom: "d49ed83d-8b4a-45d3-b8a4-045bc6ab0341",
    },
    {
      id: "d49ed83d-8b4a-45d3-b8a4-045bc6ab0341",
      name: "RedTreasureField",
      position: {
        x: 5100,
        y: 2500,
      },
      edges: [
        "523ade62-a91d-430b-8dcf-6217d1574858",
        "9d5f0c56-b953-4fa3-9089-80580aacabff",
      ],
      area: "OceaniaCave",
      top: "305cbba7-0f85-4c4d-8d4c-87ba89839fea",
      left: "d7caa394-394b-4324-8b2d-c72d84db9146",
    },
    {
      id: "4e0082b6-c695-4b91-aabe-4f1348bf9c24",
      name: "TreasureField",
      position: {
        x: 4440,
        y: 2100,
      },
      edges: [
        "712f5e34-6772-4bdb-8afc-41dbfda26712",
        "ba8f8884-798c-4a09-8bb4-4a82cdcf3ed8",
        "f47edf19-e33e-4e99-b003-25f8672dc61d",
      ],
      area: "OceaniaCave",
      top: "7b95983a-9695-4507-bdc8-f40c85303c8a",
      bottom: "d7caa394-394b-4324-8b2d-c72d84db9146",
      left: "b76d8871-3768-4d7d-b583-49ce21e33609",
    },
    {
      id: "d7caa394-394b-4324-8b2d-c72d84db9146",
      name: "RedTreasureField",
      position: {
        x: 4500,
        y: 2520,
      },
      edges: [
        "ba8f8884-798c-4a09-8bb4-4a82cdcf3ed8",
        "9d5f0c56-b953-4fa3-9089-80580aacabff",
        "abcc3f0e-2ca0-42a1-a8fd-9a00b5103cd0",
      ],
      area: "OceaniaCave",
      top: "4e0082b6-c695-4b91-aabe-4f1348bf9c24",
      right: "d49ed83d-8b4a-45d3-b8a4-045bc6ab0341",
      bottom: "0bf26235-a209-4e9c-8d17-a59a01e956e7",
    },
    {
      id: "b76d8871-3768-4d7d-b583-49ce21e33609",
      name: "BattleField",
      position: {
        x: 3880,
        y: 2100,
      },
      edges: [
        "233af791-00f0-42b0-9127-eeb4edabfc7a",
        "f47edf19-e33e-4e99-b003-25f8672dc61d",
        "9af1d6da-4b0e-4469-aadc-99e3643135e4",
      ],
      area: "OceaniaCave",
      top: "24f19210-458e-4f5c-965f-3ca19fc18789",
      right: "4e0082b6-c695-4b91-aabe-4f1348bf9c24",
      bottom: "1abf7164-d3d5-49e9-8bd8-05707d86d81e",
    },
    {
      id: "0bf26235-a209-4e9c-8d17-a59a01e956e7",
      name: "BattleField",
      position: {
        x: 4460,
        y: 2980,
      },
      edges: [
        "abcc3f0e-2ca0-42a1-a8fd-9a00b5103cd0",
        "e842e45f-ebcf-410b-942d-b5e499d3d3fb",
        "9b315bd2-69cf-439c-966b-83c6a629b395",
      ],
      area: "OceaniaCave",
      top: "d7caa394-394b-4324-8b2d-c72d84db9146",
      right: "96aff49c-03b3-4536-b498-5763c55423aa",
      bottom: "817bc9eb-79df-4a65-b02e-75c781022366",
    },
    {
      id: "96aff49c-03b3-4536-b498-5763c55423aa",
      name: "BattleField",
      position: {
        x: 5100,
        y: 2940,
      },
      edges: [
        "e842e45f-ebcf-410b-942d-b5e499d3d3fb",
        "ad0ae939-8da4-4059-bbe0-ec6413b418da",
      ],
      area: "OceaniaCave",
      left: "0bf26235-a209-4e9c-8d17-a59a01e956e7",
      right: "40641f32-ec84-4f49-bc9a-758d2bac5f5a",
    },
    {
      id: "40641f32-ec84-4f49-bc9a-758d2bac5f5a",
      name: "RedTreasureField",
      position: {
        x: 5740,
        y: 2980,
      },
      edges: [
        "ad0ae939-8da4-4059-bbe0-ec6413b418da",
        "1df699da-87f9-44e0-8e65-7c7123d97d12",
      ],
      area: "OceaniaCave",
      left: "96aff49c-03b3-4536-b498-5763c55423aa",
      bottom: "df5e5b77-a357-47ff-bb07-24c8cbc678b8",
    },
    {
      id: "817bc9eb-79df-4a65-b02e-75c781022366",
      name: "TreasureField",
      position: {
        x: 4480,
        y: 3460,
      },
      edges: [
        "9b315bd2-69cf-439c-966b-83c6a629b395",
        "7ceae4fa-f105-4831-950d-036751a17c46",
      ],
      area: "OceaniaCave",
      top: "0bf26235-a209-4e9c-8d17-a59a01e956e7",
      right: "df5e5b77-a357-47ff-bb07-24c8cbc678b8",
    },
    {
      id: "df5e5b77-a357-47ff-bb07-24c8cbc678b8",
      name: "BattleField",
      position: {
        x: 5700,
        y: 3460,
      },
      edges: [
        "7ceae4fa-f105-4831-950d-036751a17c46",
        "1df699da-87f9-44e0-8e65-7c7123d97d12",
        "831b19da-7a41-4107-9924-65e43fcde9f6",
      ],
      area: "OceaniaCave",
      left: "817bc9eb-79df-4a65-b02e-75c781022366",
      top: "40641f32-ec84-4f49-bc9a-758d2bac5f5a",
      right: "40ba5521-93cc-4603-b349-de5528a39134",
    },
    {
      id: "40ba5521-93cc-4603-b349-de5528a39134",
      name: "CaveField",
      position: {
        x: 6460,
        y: 3460,
      },
      edges: ["831b19da-7a41-4107-9924-65e43fcde9f6"],
      area: "OceaniaCave",
      left: "df5e5b77-a357-47ff-bb07-24c8cbc678b8",
    },
    {
      id: "1abf7164-d3d5-49e9-8bd8-05707d86d81e",
      name: "DamageField",
      position: {
        x: 3920,
        y: 2560,
      },
      edges: [
        "9af1d6da-4b0e-4469-aadc-99e3643135e4",
        "e1ebcd0a-e4fb-45d5-82db-2b2bb94c496b",
      ],
      area: "OceaniaCave",
      top: "b76d8871-3768-4d7d-b583-49ce21e33609",
      bottom: "24011804-2054-4bf6-b46b-4908307f307a",
    },
    {
      id: "24011804-2054-4bf6-b46b-4908307f307a",
      name: "BattleField",
      position: {
        x: 3880,
        y: 3080,
      },
      edges: [
        "e1ebcd0a-e4fb-45d5-82db-2b2bb94c496b",
        "1319d1eb-0bac-4f7b-b2b9-22f113745f5b",
        "6356b446-938c-4d96-83e5-c8783336d737",
      ],
      area: "OceaniaCave",
      top: "1abf7164-d3d5-49e9-8bd8-05707d86d81e",
      bottom: "2463515e-861d-4c49-a051-6d26fba2860c",
      left: "bcae18b7-e3b3-4e6e-9d7e-48710e087130",
    },
    {
      id: "2463515e-861d-4c49-a051-6d26fba2860c",
      name: "BattleField",
      position: {
        x: 3860,
        y: 3520,
      },
      edges: [
        "1319d1eb-0bac-4f7b-b2b9-22f113745f5b",
        "4dda7951-937e-4c86-99c6-0779680fa309",
      ],
      area: "OceaniaCave",
      top: "24011804-2054-4bf6-b46b-4908307f307a",
      left: "3a774bf5-4103-4e74-ab96-3180c9331920",
    },
    {
      id: "bcae18b7-e3b3-4e6e-9d7e-48710e087130",
      name: "MagicBookField",
      position: {
        x: 3320,
        y: 3060,
      },
      edges: [
        "6356b446-938c-4d96-83e5-c8783336d737",
        "f3c07eef-1626-4848-9c2f-fb22283a5de3",
      ],
      area: "OceaniaCave",
      right: "24011804-2054-4bf6-b46b-4908307f307a",
      left: "9f0d0dec-55fc-4eb8-97c9-cde4e83bf656",
    },
    {
      id: "9f0d0dec-55fc-4eb8-97c9-cde4e83bf656",
      name: "TreasureField",
      position: {
        x: 2740,
        y: 3080,
      },
      edges: [
        "f3c07eef-1626-4848-9c2f-fb22283a5de3",
        "0a47baae-63da-4a31-b3dd-1671d8f17039",
      ],
      area: "OceaniaCave",
      right: "bcae18b7-e3b3-4e6e-9d7e-48710e087130",
      bottom: "3a774bf5-4103-4e74-ab96-3180c9331920",
    },
    {
      id: "3a774bf5-4103-4e74-ab96-3180c9331920",
      name: "BattleField",
      position: {
        x: 2780,
        y: 3540,
      },
      edges: [
        "0a47baae-63da-4a31-b3dd-1671d8f17039",
        "4dda7951-937e-4c86-99c6-0779680fa309",
        "eec5ce18-3a88-40b7-a62e-7f688872d943",
      ],
      area: "OceaniaCave",
      top: "9f0d0dec-55fc-4eb8-97c9-cde4e83bf656",
      right: "2463515e-861d-4c49-a051-6d26fba2860c",
      left: "f100b98b-8d31-46ee-859f-694d00bd391c",
    },
    {
      id: "f100b98b-8d31-46ee-859f-694d00bd391c",
      name: "TreasureField",
      position: {
        x: 2260,
        y: 3540,
      },
      edges: [
        "eec5ce18-3a88-40b7-a62e-7f688872d943",
        "2fd94dd0-440f-46ed-a84c-bf4513c9a8bb",
      ],
      area: "OceaniaCave",
      right: "3a774bf5-4103-4e74-ab96-3180c9331920",
      left: "0dc692b0-1915-4ef5-8cca-bc1f559c3198",
    },
    {
      id: "0dc692b0-1915-4ef5-8cca-bc1f559c3198",
      name: "DamageField",
      position: {
        x: 1780,
        y: 3540,
      },
      edges: [
        "2fd94dd0-440f-46ed-a84c-bf4513c9a8bb",
        "81ea97ad-6f6d-4390-b603-4567972218e4",
      ],
      area: "OceaniaCave",
      right: "f100b98b-8d31-46ee-859f-694d00bd391c",
      left: "f1a436a8-0318-4940-ba0f-44d4c8112557",
    },
    {
      id: "f1a436a8-0318-4940-ba0f-44d4c8112557",
      name: "BattleField",
      position: {
        x: 1280,
        y: 3540,
      },
      edges: [
        "81ea97ad-6f6d-4390-b603-4567972218e4",
        "34488cde-f1a6-4756-8df4-9df7d6241146",
      ],
      area: "OceaniaCave",
      right: "0dc692b0-1915-4ef5-8cca-bc1f559c3198",
      top: "49d8b061-f132-4e79-9129-f3414d072622",
    },
    {
      id: "49d8b061-f132-4e79-9129-f3414d072622",
      name: "CaveField",
      position: {
        x: 1220,
        y: 3060,
      },
      edges: ["34488cde-f1a6-4756-8df4-9df7d6241146"],
      area: "OceaniaCave",
      bottom: "f1a436a8-0318-4940-ba0f-44d4c8112557",
    },
  ],
  edges: [
    {
      start: {
        x: 2700,
        y: 60,
      },
      startId: "166e987e-ac8b-4c3b-ac3d-a0c88364b353",
      end: {
        x: 3280,
        y: 80,
      },
      endId: "57336045-939c-4e60-b211-05591ff71692",
      name: "TwoWayHEdge",
      id: "46f67c93-1f5c-4d57-9e30-690a13c12d03",
    },
    {
      start: {
        x: 2700,
        y: 60,
      },
      startId: "166e987e-ac8b-4c3b-ac3d-a0c88364b353",
      end: {
        x: 2700,
        y: 560,
      },
      endId: "9fa2c83e-c483-4b20-943a-84e2ee1fa14b",
      name: "TwoWayVEdge",
      id: "1323f68b-90d2-4846-a784-0fdb88a0db1f",
    },
    {
      start: {
        x: 3280,
        y: 80,
      },
      startId: "57336045-939c-4e60-b211-05591ff71692",
      end: {
        x: 3880,
        y: 60,
      },
      endId: "b5c28642-1e89-40f2-bd8a-b0b6ec80ac18",
      name: "TwoWayHEdge",
      id: "2bb39b4d-87b2-4aa5-bf74-e3a32e1e57fe",
    },
    {
      start: {
        x: 2700,
        y: 60,
      },
      startId: "166e987e-ac8b-4c3b-ac3d-a0c88364b353",
      end: {
        x: 2100,
        y: 80,
      },
      endId: "be0287db-d6b0-4cd4-92df-4b60e0402d48",
      name: "TwoWayHEdge",
      id: "a963922a-5adc-42aa-bf7b-dca72ffdd60c",
    },
    {
      start: {
        x: 2100,
        y: 80,
      },
      startId: "be0287db-d6b0-4cd4-92df-4b60e0402d48",
      end: {
        x: 1560,
        y: 40,
      },
      endId: "5fd4c324-ef84-4762-9aed-91790dd47180",
      name: "TwoWayHEdge",
      id: "534a5128-f589-4849-b574-6968d0297623",
    },
    {
      start: {
        x: 1560,
        y: 40,
      },
      startId: "5fd4c324-ef84-4762-9aed-91790dd47180",
      end: {
        x: 1040,
        y: 60,
      },
      endId: "15e0ca5e-7c6a-4534-a091-0ffdce2c354b",
      name: "TwoWayHEdge",
      id: "6b808e08-c374-4c19-a747-7666bbfaabff",
    },
    {
      start: {
        x: 1040,
        y: 60,
      },
      startId: "15e0ca5e-7c6a-4534-a091-0ffdce2c354b",
      end: {
        x: 1060,
        y: 520,
      },
      endId: "f9f3c987-b2e6-488b-9a50-6b5834e37bd5",
      name: "TwoWayVEdge",
      id: "e7409d07-ed86-4971-9d83-e14d1a17e3e2",
    },
    {
      start: {
        x: 1060,
        y: 520,
      },
      startId: "f9f3c987-b2e6-488b-9a50-6b5834e37bd5",
      end: {
        x: 1040,
        y: 1000,
      },
      endId: "1ba189e2-12e0-48da-9d3c-1745ea4757ab",
      name: "TwoWayVEdge",
      id: "7c780c86-e52f-4fe2-bb17-54e3cede0c62",
    },
    {
      start: {
        x: 1040,
        y: 1000,
      },
      startId: "1ba189e2-12e0-48da-9d3c-1745ea4757ab",
      end: {
        x: 1640,
        y: 1020,
      },
      endId: "5ea9653e-c1b9-48b8-902b-5c588d61610f",
      name: "TwoWayHEdge",
      id: "0a2d355d-65f4-46dc-84e7-56bbe19fc9d0",
    },
    {
      start: {
        x: 1640,
        y: 1020,
      },
      startId: "5ea9653e-c1b9-48b8-902b-5c588d61610f",
      end: {
        x: 1620,
        y: 1760,
      },
      endId: "4a78efd9-4be8-42da-90cf-4bdc4dd41c67",
      name: "TwoWayVEdge",
      id: "9e7c4f46-e43b-4ee2-8cc6-1389b25374c3",
    },
    {
      start: {
        x: 1040,
        y: 1000,
      },
      startId: "1ba189e2-12e0-48da-9d3c-1745ea4757ab",
      end: {
        x: 1080,
        y: 1420,
      },
      endId: "7078afb5-d03e-406a-ac73-b2ef142a154d",
      name: "TwoWayVEdge",
      id: "1bc895d0-ad9a-4965-88c4-006dceac23e2",
    },
    {
      start: {
        x: 1080,
        y: 1420,
      },
      startId: "7078afb5-d03e-406a-ac73-b2ef142a154d",
      end: {
        x: 1040,
        y: 1820,
      },
      endId: "391b889b-e277-4171-91d3-93c4661abd6c",
      name: "TwoWayVEdge",
      id: "dcbc96bd-0b4e-4207-948f-4b9799b4ae31",
    },
    {
      start: {
        x: 1040,
        y: 1820,
      },
      startId: "391b889b-e277-4171-91d3-93c4661abd6c",
      end: {
        x: 1620,
        y: 1760,
      },
      endId: "4a78efd9-4be8-42da-90cf-4bdc4dd41c67",
      name: "TwoWayHEdge",
      id: "754b7662-f028-4a4c-a0b4-947be9edaacb",
    },
    {
      start: {
        x: 1080,
        y: 1420,
      },
      startId: "7078afb5-d03e-406a-ac73-b2ef142a154d",
      end: {
        x: 560,
        y: 1420,
      },
      endId: "1a46e55f-54c9-45c1-b77f-bfb8f9b67624",
      name: "TwoWayHEdge",
      id: "0d440155-22b4-429f-be70-5135b225df3b",
    },
    {
      start: {
        x: 560,
        y: 1420,
      },
      startId: "1a46e55f-54c9-45c1-b77f-bfb8f9b67624",
      end: {
        x: 40,
        y: 1420,
      },
      endId: "e78e18ee-282a-4991-bfdd-b296e90e1fb4",
      name: "TwoWayHEdge",
      id: "f500edfe-4259-4595-be07-3345bcc3a1fd",
    },
    {
      start: {
        x: 1040,
        y: 1820,
      },
      startId: "391b889b-e277-4171-91d3-93c4661abd6c",
      end: {
        x: 1080,
        y: 2320,
      },
      endId: "f048d934-9030-4fab-9394-85fce2087357",
      name: "TwoWayVEdge",
      id: "45990f58-f60e-4b23-a416-29feba2ae4c3",
    },
    {
      start: {
        x: 1080,
        y: 2320,
      },
      startId: "f048d934-9030-4fab-9394-85fce2087357",
      end: {
        x: 1620,
        y: 2340,
      },
      endId: "193b8b62-715c-4c05-888a-b2ab1b7d62de",
      name: "TwoWayHEdge",
      id: "188beba2-e2fb-44bc-8a5b-4bf222820379",
    },
    {
      start: {
        x: 1620,
        y: 2340,
      },
      startId: "193b8b62-715c-4c05-888a-b2ab1b7d62de",
      end: {
        x: 1640,
        y: 2840,
      },
      endId: "778a1cef-d9e5-4bbb-8a3c-e1cbb5beb652",
      name: "TwoWayVEdge",
      id: "79667600-688a-457b-95b0-ec2fe526f533",
    },
    {
      start: {
        x: 3880,
        y: 60,
      },
      startId: "b5c28642-1e89-40f2-bd8a-b0b6ec80ac18",
      end: {
        x: 4420,
        y: 80,
      },
      endId: "1197fa65-4d94-4a33-b709-532b0e414bc2",
      name: "TwoWayHEdge",
      id: "cb43768f-baa0-44c0-a0cd-58f04dd94b32",
    },
    {
      start: {
        x: 4420,
        y: 80,
      },
      startId: "1197fa65-4d94-4a33-b709-532b0e414bc2",
      end: {
        x: 4500,
        y: 620,
      },
      endId: "07814327-e220-4b67-9e4f-0e2ac6296721",
      name: "TwoWayVEdge",
      id: "b51abb42-1cdf-4e86-9574-bc4a5d9d8b6c",
    },
    {
      start: {
        x: 4500,
        y: 620,
      },
      startId: "07814327-e220-4b67-9e4f-0e2ac6296721",
      end: {
        x: 4420,
        y: 1240,
      },
      endId: "6333a1cc-d6f4-476b-9c6f-262ee0411903",
      name: "TwoWayVEdge",
      id: "6ad2d646-1ccf-4e7a-a1ed-bab8e27f3529",
    },
    {
      start: {
        x: 4420,
        y: 1240,
      },
      startId: "6333a1cc-d6f4-476b-9c6f-262ee0411903",
      end: {
        x: 3880,
        y: 1240,
      },
      endId: "24f19210-458e-4f5c-965f-3ca19fc18789",
      name: "TwoWayHEdge",
      id: "4ed710ad-517f-486b-948d-833c09e83c6c",
    },
    {
      start: {
        x: 4420,
        y: 1240,
      },
      startId: "6333a1cc-d6f4-476b-9c6f-262ee0411903",
      end: {
        x: 4480,
        y: 1660,
      },
      endId: "7b95983a-9695-4507-bdc8-f40c85303c8a",
      name: "TwoWayVEdge",
      id: "f7d31a38-be11-4191-af66-3c5e3311e9a8",
    },
    {
      start: {
        x: 4480,
        y: 1660,
      },
      startId: "7b95983a-9695-4507-bdc8-f40c85303c8a",
      end: {
        x: 5060,
        y: 1660,
      },
      endId: "305cbba7-0f85-4c4d-8d4c-87ba89839fea",
      name: "TwoWayHEdge",
      id: "0c234927-4e39-490f-a851-1703a8bceb64",
    },
    {
      start: {
        x: 5060,
        y: 1660,
      },
      startId: "305cbba7-0f85-4c4d-8d4c-87ba89839fea",
      end: {
        x: 5100,
        y: 2500,
      },
      endId: "d49ed83d-8b4a-45d3-b8a4-045bc6ab0341",
      name: "TwoWayVEdge",
      id: "523ade62-a91d-430b-8dcf-6217d1574858",
    },
    {
      start: {
        x: 4480,
        y: 1660,
      },
      startId: "7b95983a-9695-4507-bdc8-f40c85303c8a",
      end: {
        x: 4440,
        y: 2100,
      },
      endId: "4e0082b6-c695-4b91-aabe-4f1348bf9c24",
      name: "TwoWayVEdge",
      id: "712f5e34-6772-4bdb-8afc-41dbfda26712",
    },
    {
      start: {
        x: 4440,
        y: 2100,
      },
      startId: "4e0082b6-c695-4b91-aabe-4f1348bf9c24",
      end: {
        x: 4500,
        y: 2520,
      },
      endId: "d7caa394-394b-4324-8b2d-c72d84db9146",
      name: "TwoWayVEdge",
      id: "ba8f8884-798c-4a09-8bb4-4a82cdcf3ed8",
    },
    {
      start: {
        x: 4500,
        y: 2520,
      },
      startId: "d7caa394-394b-4324-8b2d-c72d84db9146",
      end: {
        x: 5100,
        y: 2500,
      },
      endId: "d49ed83d-8b4a-45d3-b8a4-045bc6ab0341",
      name: "TwoWayHEdge",
      id: "9d5f0c56-b953-4fa3-9089-80580aacabff",
    },
    {
      start: {
        x: 3880,
        y: 1240,
      },
      startId: "24f19210-458e-4f5c-965f-3ca19fc18789",
      end: {
        x: 3880,
        y: 2100,
      },
      endId: "b76d8871-3768-4d7d-b583-49ce21e33609",
      name: "TwoWayVEdge",
      id: "233af791-00f0-42b0-9127-eeb4edabfc7a",
    },
    {
      start: {
        x: 3880,
        y: 2100,
      },
      startId: "b76d8871-3768-4d7d-b583-49ce21e33609",
      end: {
        x: 4440,
        y: 2100,
      },
      endId: "4e0082b6-c695-4b91-aabe-4f1348bf9c24",
      name: "TwoWayHEdge",
      id: "f47edf19-e33e-4e99-b003-25f8672dc61d",
    },
    {
      start: {
        x: 4500,
        y: 2520,
      },
      startId: "d7caa394-394b-4324-8b2d-c72d84db9146",
      end: {
        x: 4460,
        y: 2980,
      },
      endId: "0bf26235-a209-4e9c-8d17-a59a01e956e7",
      name: "TwoWayVEdge",
      id: "abcc3f0e-2ca0-42a1-a8fd-9a00b5103cd0",
    },
    {
      start: {
        x: 4460,
        y: 2980,
      },
      startId: "0bf26235-a209-4e9c-8d17-a59a01e956e7",
      end: {
        x: 5100,
        y: 2940,
      },
      endId: "96aff49c-03b3-4536-b498-5763c55423aa",
      name: "TwoWayHEdge",
      id: "e842e45f-ebcf-410b-942d-b5e499d3d3fb",
    },
    {
      start: {
        x: 5100,
        y: 2940,
      },
      startId: "96aff49c-03b3-4536-b498-5763c55423aa",
      end: {
        x: 5740,
        y: 2980,
      },
      endId: "40641f32-ec84-4f49-bc9a-758d2bac5f5a",
      name: "TwoWayHEdge",
      id: "ad0ae939-8da4-4059-bbe0-ec6413b418da",
    },
    {
      start: {
        x: 4460,
        y: 2980,
      },
      startId: "0bf26235-a209-4e9c-8d17-a59a01e956e7",
      end: {
        x: 4480,
        y: 3460,
      },
      endId: "817bc9eb-79df-4a65-b02e-75c781022366",
      name: "TwoWayVEdge",
      id: "9b315bd2-69cf-439c-966b-83c6a629b395",
    },
    {
      start: {
        x: 4480,
        y: 3460,
      },
      startId: "817bc9eb-79df-4a65-b02e-75c781022366",
      end: {
        x: 5700,
        y: 3460,
      },
      endId: "df5e5b77-a357-47ff-bb07-24c8cbc678b8",
      name: "TwoWayHEdge",
      id: "7ceae4fa-f105-4831-950d-036751a17c46",
    },
    {
      start: {
        x: 5740,
        y: 2980,
      },
      startId: "40641f32-ec84-4f49-bc9a-758d2bac5f5a",
      end: {
        x: 5700,
        y: 3460,
      },
      endId: "df5e5b77-a357-47ff-bb07-24c8cbc678b8",
      name: "TwoWayVEdge",
      id: "1df699da-87f9-44e0-8e65-7c7123d97d12",
    },
    {
      start: {
        x: 5700,
        y: 3460,
      },
      startId: "df5e5b77-a357-47ff-bb07-24c8cbc678b8",
      end: {
        x: 6460,
        y: 3460,
      },
      endId: "40ba5521-93cc-4603-b349-de5528a39134",
      name: "TwoWayHEdge",
      id: "831b19da-7a41-4107-9924-65e43fcde9f6",
    },
    {
      start: {
        x: 3880,
        y: 2100,
      },
      startId: "b76d8871-3768-4d7d-b583-49ce21e33609",
      end: {
        x: 3920,
        y: 2560,
      },
      endId: "1abf7164-d3d5-49e9-8bd8-05707d86d81e",
      name: "TwoWayVEdge",
      id: "9af1d6da-4b0e-4469-aadc-99e3643135e4",
    },
    {
      start: {
        x: 3920,
        y: 2560,
      },
      startId: "1abf7164-d3d5-49e9-8bd8-05707d86d81e",
      end: {
        x: 3880,
        y: 3080,
      },
      endId: "24011804-2054-4bf6-b46b-4908307f307a",
      name: "TwoWayVEdge",
      id: "e1ebcd0a-e4fb-45d5-82db-2b2bb94c496b",
    },
    {
      start: {
        x: 3880,
        y: 3080,
      },
      startId: "24011804-2054-4bf6-b46b-4908307f307a",
      end: {
        x: 3860,
        y: 3520,
      },
      endId: "2463515e-861d-4c49-a051-6d26fba2860c",
      name: "TwoWayVEdge",
      id: "1319d1eb-0bac-4f7b-b2b9-22f113745f5b",
    },
    {
      start: {
        x: 3880,
        y: 3080,
      },
      startId: "24011804-2054-4bf6-b46b-4908307f307a",
      end: {
        x: 3320,
        y: 3060,
      },
      endId: "bcae18b7-e3b3-4e6e-9d7e-48710e087130",
      name: "TwoWayHEdge",
      id: "6356b446-938c-4d96-83e5-c8783336d737",
    },
    {
      start: {
        x: 3320,
        y: 3060,
      },
      startId: "bcae18b7-e3b3-4e6e-9d7e-48710e087130",
      end: {
        x: 2740,
        y: 3080,
      },
      endId: "9f0d0dec-55fc-4eb8-97c9-cde4e83bf656",
      name: "TwoWayHEdge",
      id: "f3c07eef-1626-4848-9c2f-fb22283a5de3",
    },
    {
      start: {
        x: 2740,
        y: 3080,
      },
      startId: "9f0d0dec-55fc-4eb8-97c9-cde4e83bf656",
      end: {
        x: 2780,
        y: 3540,
      },
      endId: "3a774bf5-4103-4e74-ab96-3180c9331920",
      name: "TwoWayVEdge",
      id: "0a47baae-63da-4a31-b3dd-1671d8f17039",
    },
    {
      start: {
        x: 2780,
        y: 3540,
      },
      startId: "3a774bf5-4103-4e74-ab96-3180c9331920",
      end: {
        x: 3860,
        y: 3520,
      },
      endId: "2463515e-861d-4c49-a051-6d26fba2860c",
      name: "TwoWayHEdge",
      id: "4dda7951-937e-4c86-99c6-0779680fa309",
    },
    {
      start: {
        x: 2780,
        y: 3540,
      },
      startId: "3a774bf5-4103-4e74-ab96-3180c9331920",
      end: {
        x: 2260,
        y: 3540,
      },
      endId: "f100b98b-8d31-46ee-859f-694d00bd391c",
      name: "TwoWayHEdge",
      id: "eec5ce18-3a88-40b7-a62e-7f688872d943",
    },
    {
      start: {
        x: 2260,
        y: 3540,
      },
      startId: "f100b98b-8d31-46ee-859f-694d00bd391c",
      end: {
        x: 1780,
        y: 3540,
      },
      endId: "0dc692b0-1915-4ef5-8cca-bc1f559c3198",
      name: "TwoWayHEdge",
      id: "2fd94dd0-440f-46ed-a84c-bf4513c9a8bb",
    },
    {
      start: {
        x: 1780,
        y: 3540,
      },
      startId: "0dc692b0-1915-4ef5-8cca-bc1f559c3198",
      end: {
        x: 1280,
        y: 3540,
      },
      endId: "f1a436a8-0318-4940-ba0f-44d4c8112557",
      name: "TwoWayHEdge",
      id: "81ea97ad-6f6d-4390-b603-4567972218e4",
    },
    {
      start: {
        x: 1280,
        y: 3540,
      },
      startId: "f1a436a8-0318-4940-ba0f-44d4c8112557",
      end: {
        x: 1220,
        y: 3060,
      },
      endId: "49d8b061-f132-4e79-9129-f3414d072622",
      name: "TwoWayVEdge",
      id: "34488cde-f1a6-4756-8df4-9df7d6241146",
    },
  ],
};
export default oceaniaCaveMap;
