import { Vertex, Edge } from "../global";

const southAmericaCave: { vertices: Vertex[]; edges: Edge[] } = {
  vertices: [
    {
      position: {
        x: 300,
        y: 620,
      },
      name: "BattleField",
      id: "40d67944-6069-42f8-86cf-5eab76249562",
      edges: [
        "d4609207-7775-4631-900a-5ef1c76617fd",
        "5d10441e-7897-4618-b994-ae81aeb417ed",
        "b86aacd0-7172-4d69-b2f1-a131b0678c9b",
      ],
      top: "ccf39cd3-52af-4949-9b7e-e5a723d07678",
      right: "1210f500-1d87-45d6-8431-4951324b2bf5",
      left: "afaae593-2728-4cc5-a0c7-ac8a7abc65c1",
    },
    {
      id: "ccf39cd3-52af-4949-9b7e-e5a723d07678",
      name: "BattleField",
      position: {
        x: 340,
        y: 120,
      },
      edges: [
        "d4609207-7775-4631-900a-5ef1c76617fd",
        "68094d47-3c47-4dac-904e-6930a9caa68f",
      ],
      bottom: "40d67944-6069-42f8-86cf-5eab76249562",
      right: "41de9c55-0347-4889-bf5f-20830f8b4e1e",
    },
    {
      id: "41de9c55-0347-4889-bf5f-20830f8b4e1e",
      name: "BattleField",
      position: {
        x: 1400,
        y: 80,
      },
      edges: [
        "68094d47-3c47-4dac-904e-6930a9caa68f",
        "c31d3ad2-bf86-4c9f-a631-25dd97c7a146",
        "2ea78b56-a751-462b-b13c-e66fb840b474",
      ],
      left: "ccf39cd3-52af-4949-9b7e-e5a723d07678",
      bottom: "5b4ac141-6c61-4215-9e84-b2cad8805e9c",
      top: "6d2e2c29-ceb8-458f-8764-f6e96ed4d1b2",
    },
    {
      id: "1210f500-1d87-45d6-8431-4951324b2bf5",
      name: "TreasureField",
      position: {
        x: 900,
        y: 580,
      },
      edges: [
        "5d10441e-7897-4618-b994-ae81aeb417ed",
        "89ebbef8-dcbe-42ce-a8ab-bf33bbe7de86",
        "f6fe4e32-a483-4843-a3c6-b4a086da2492",
      ],
      left: "40d67944-6069-42f8-86cf-5eab76249562",
      right: "5b4ac141-6c61-4215-9e84-b2cad8805e9c",
      bottom: "f4997e9b-6cc3-4484-a2f3-bda192559e48",
    },
    {
      id: "5b4ac141-6c61-4215-9e84-b2cad8805e9c",
      name: "BattleField",
      position: {
        x: 1480,
        y: 640,
      },
      edges: [
        "89ebbef8-dcbe-42ce-a8ab-bf33bbe7de86",
        "c31d3ad2-bf86-4c9f-a631-25dd97c7a146",
        "31c58c0b-0ba1-4a75-ab01-2b6a5895dff1",
      ],
      left: "1210f500-1d87-45d6-8431-4951324b2bf5",
      top: "41de9c55-0347-4889-bf5f-20830f8b4e1e",
      right: "3f4c5601-a79a-4ebd-a42e-5ff89906fac7",
    },
    {
      id: "f4997e9b-6cc3-4484-a2f3-bda192559e48",
      name: "CaveField",
      position: {
        x: 820,
        y: 1160,
      },
      edges: ["f6fe4e32-a483-4843-a3c6-b4a086da2492"],
      top: "1210f500-1d87-45d6-8431-4951324b2bf5",
    },
    {
      id: "afaae593-2728-4cc5-a0c7-ac8a7abc65c1",
      name: "BattleField",
      position: {
        x: -280,
        y: 580,
      },
      edges: [
        "b86aacd0-7172-4d69-b2f1-a131b0678c9b",
        "14be5bee-1fe9-4792-9e1d-151fc844a530",
      ],
      right: "40d67944-6069-42f8-86cf-5eab76249562",
      top: "4f67461a-39d3-485d-a559-2275e713bb26",
    },
    {
      id: "4f67461a-39d3-485d-a559-2275e713bb26",
      name: "BattleField",
      position: {
        x: -340,
        y: -300,
      },
      edges: [
        "14be5bee-1fe9-4792-9e1d-151fc844a530",
        "ed48a06b-c17f-46c3-afe9-2bd95a33f14a",
        "e720101e-d7e2-46f8-95b8-86ebee028967",
      ],
      bottom: "afaae593-2728-4cc5-a0c7-ac8a7abc65c1",
      top: "76773e90-0ba1-4aea-80c2-9287a660514e",
      right: "d8822b24-80c2-4a1e-b1aa-c730b901f927",
    },
    {
      id: "76773e90-0ba1-4aea-80c2-9287a660514e",
      name: "TreasureField",
      position: {
        x: -240,
        y: -760,
      },
      edges: [
        "ed48a06b-c17f-46c3-afe9-2bd95a33f14a",
        "34836e67-606e-4ce0-be17-1bee2e1ae70b",
        "a49bdb47-0b23-4e8f-9c4a-4e66e154d8d2",
      ],
      bottom: "4f67461a-39d3-485d-a559-2275e713bb26",
      right: "390e544c-4d97-4f9b-bdb0-fee23d05ffbb",
      top: "d00e7438-95b7-4db9-a7b9-2c87d4cf53c2",
    },
    {
      id: "390e544c-4d97-4f9b-bdb0-fee23d05ffbb",
      name: "BattleField",
      position: {
        x: 860,
        y: -760,
      },
      edges: [
        "34836e67-606e-4ce0-be17-1bee2e1ae70b",
        "89696e73-6257-43d5-904c-d3943b0cbf59",
        "f5554b2d-ebf5-4e1c-b01f-e3780a8d55f8",
      ],
      left: "76773e90-0ba1-4aea-80c2-9287a660514e",
      bottom: "3c518ad4-6809-4ebd-aada-23e3ee875467",
      top: "2b5d08c3-f1d9-40fe-95a6-2b6bf9392598",
    },
    {
      id: "d8822b24-80c2-4a1e-b1aa-c730b901f927",
      name: "MagicField",
      position: {
        x: 280,
        y: -220,
      },
      edges: [
        "e720101e-d7e2-46f8-95b8-86ebee028967",
        "79276fa4-6c6c-4f4a-848a-5bc1e00153c1",
      ],
      left: "4f67461a-39d3-485d-a559-2275e713bb26",
      right: "3c518ad4-6809-4ebd-aada-23e3ee875467",
    },
    {
      id: "3c518ad4-6809-4ebd-aada-23e3ee875467",
      name: "BattleField",
      position: {
        x: 940,
        y: -320,
      },
      edges: [
        "79276fa4-6c6c-4f4a-848a-5bc1e00153c1",
        "89696e73-6257-43d5-904c-d3943b0cbf59",
      ],
      left: "d8822b24-80c2-4a1e-b1aa-c730b901f927",
      top: "390e544c-4d97-4f9b-bdb0-fee23d05ffbb",
    },
    {
      id: "2b5d08c3-f1d9-40fe-95a6-2b6bf9392598",
      name: "RedTreasureField",
      position: {
        x: 880,
        y: -1280,
      },
      edges: [
        "f5554b2d-ebf5-4e1c-b01f-e3780a8d55f8",
        "de0e733a-5ebf-4247-bd11-0974fa0ba77d",
      ],
      bottom: "390e544c-4d97-4f9b-bdb0-fee23d05ffbb",
      top: "3bfa43b7-d383-45e5-af8d-ef50361095c5",
    },
    {
      id: "3bfa43b7-d383-45e5-af8d-ef50361095c5",
      name: "TreasureField",
      position: {
        x: 840,
        y: -1780,
      },
      edges: [
        "de0e733a-5ebf-4247-bd11-0974fa0ba77d",
        "f55a68fc-b150-4782-ab64-cf06896ad5bc",
      ],
      bottom: "2b5d08c3-f1d9-40fe-95a6-2b6bf9392598",
      top: "f8c658c8-ee5b-41bc-8143-a7ade0408e24",
    },
    {
      id: "f8c658c8-ee5b-41bc-8143-a7ade0408e24",
      name: "BattleField",
      position: {
        x: 860,
        y: -2280,
      },
      edges: [
        "f55a68fc-b150-4782-ab64-cf06896ad5bc",
        "bfb573d4-25e1-4c72-9ed8-dbba6aa8fd24",
      ],
      bottom: "3bfa43b7-d383-45e5-af8d-ef50361095c5",
      left: "7a16b299-1b6b-465a-8e84-f3834d1809e4",
    },
    {
      id: "7a16b299-1b6b-465a-8e84-f3834d1809e4",
      name: "DamageField",
      position: {
        x: 260,
        y: -2320,
      },
      edges: [
        "bfb573d4-25e1-4c72-9ed8-dbba6aa8fd24",
        "c191d702-92a7-4fa5-85eb-ac31d4430403",
      ],
      right: "f8c658c8-ee5b-41bc-8143-a7ade0408e24",
      left: "8049a32f-d743-47c2-984f-7bd46c0444f0",
    },
    {
      id: "8049a32f-d743-47c2-984f-7bd46c0444f0",
      name: "WhiteTreasureField",
      position: {
        x: -300,
        y: -2280,
      },
      edges: ["c191d702-92a7-4fa5-85eb-ac31d4430403"],
      right: "7a16b299-1b6b-465a-8e84-f3834d1809e4",
    },
    {
      id: "d00e7438-95b7-4db9-a7b9-2c87d4cf53c2",
      name: "BattleField",
      position: {
        x: -260,
        y: -1220,
      },
      edges: [
        "a49bdb47-0b23-4e8f-9c4a-4e66e154d8d2",
        "1817865c-62cf-4283-ab0e-545314f63676",
      ],
      bottom: "76773e90-0ba1-4aea-80c2-9287a660514e",
      left: "b9b80c4f-784e-4757-a350-de468186104b",
    },
    {
      id: "b9b80c4f-784e-4757-a350-de468186104b",
      name: "BattleField",
      position: {
        x: -800,
        y: -1200,
      },
      edges: [
        "1817865c-62cf-4283-ab0e-545314f63676",
        "59f870d4-10fd-4a8a-a70d-95a9f09f7619",
      ],
      right: "d00e7438-95b7-4db9-a7b9-2c87d4cf53c2",
      left: "028eda39-3228-4f39-969b-deb7b418f859",
    },
    {
      id: "028eda39-3228-4f39-969b-deb7b418f859",
      name: "MagicField",
      position: {
        x: -1300,
        y: -1220,
      },
      edges: [
        "59f870d4-10fd-4a8a-a70d-95a9f09f7619",
        "33171b0e-cb18-4bd7-826e-9b6adb6b048b",
      ],
      right: "b9b80c4f-784e-4757-a350-de468186104b",
      top: "cfaccbea-78f5-4676-872a-3edf44b92940",
    },
    {
      id: "cfaccbea-78f5-4676-872a-3edf44b92940",
      name: "DamageField",
      position: {
        x: -1340,
        y: -1940,
      },
      edges: [
        "33171b0e-cb18-4bd7-826e-9b6adb6b048b",
        "7a24eef0-8e7c-433b-8803-7f34349e25a2",
      ],
      bottom: "028eda39-3228-4f39-969b-deb7b418f859",
      top: "15ca5997-bd65-4b8a-8c8a-05ccb05c695e",
    },
    {
      id: "15ca5997-bd65-4b8a-8c8a-05ccb05c695e",
      name: "RedTreasureField",
      position: {
        x: -1300,
        y: -2720,
      },
      edges: [
        "7a24eef0-8e7c-433b-8803-7f34349e25a2",
        "cd5e89eb-90c7-4601-bea1-e7bb5cb54281",
      ],
      bottom: "cfaccbea-78f5-4676-872a-3edf44b92940",
      top: "59b69fbc-c5a2-47a3-b4c3-d0ce41085620",
    },
    {
      id: "59b69fbc-c5a2-47a3-b4c3-d0ce41085620",
      name: "TreasureField",
      position: {
        x: -1240,
        y: -3200,
      },
      edges: [
        "cd5e89eb-90c7-4601-bea1-e7bb5cb54281",
        "794a6d96-d896-4f66-8961-a67ab0094f5a",
        "5419a4dc-f9f3-4eee-9875-0a0b3406d065",
      ],
      bottom: "15ca5997-bd65-4b8a-8c8a-05ccb05c695e",
      top: "33bff1fa-fc8b-406b-8b05-133b90d65cbf",
      right: "25153b3b-8680-414f-91b6-54ca2acf56ce",
    },
    {
      id: "33bff1fa-fc8b-406b-8b05-133b90d65cbf",
      name: "BattleField",
      position: {
        x: -1280,
        y: -3700,
      },
      edges: [
        "794a6d96-d896-4f66-8961-a67ab0094f5a",
        "69b80459-f426-4493-829b-cfac5f445b7a",
      ],
      bottom: "59b69fbc-c5a2-47a3-b4c3-d0ce41085620",
      right: "4085aa9c-0040-4c4f-bbe5-01e41ab2d363",
    },
    {
      id: "4085aa9c-0040-4c4f-bbe5-01e41ab2d363",
      name: "TreasureField",
      position: {
        x: -700,
        y: -3740,
      },
      edges: [
        "69b80459-f426-4493-829b-cfac5f445b7a",
        "a14a23be-baad-4dad-a255-64c08174cc1a",
        "6a227cbc-1a63-4509-a555-ab24ca8d575f",
      ],
      left: "33bff1fa-fc8b-406b-8b05-133b90d65cbf",
      right: "faf55cd4-6c52-4032-a269-af1d98be307b",
      top: "1c716a27-8815-48bd-ab9f-2875a3640e38",
    },
    {
      id: "faf55cd4-6c52-4032-a269-af1d98be307b",
      name: "GoldTreasureField",
      position: {
        x: -140,
        y: -3680,
      },
      edges: [
        "a14a23be-baad-4dad-a255-64c08174cc1a",
        "3ee7d4f4-9b58-495d-9a37-3fa52d1d7cac",
      ],
      left: "4085aa9c-0040-4c4f-bbe5-01e41ab2d363",
      bottom: "25153b3b-8680-414f-91b6-54ca2acf56ce",
    },
    {
      id: "25153b3b-8680-414f-91b6-54ca2acf56ce",
      name: "BattleField",
      position: {
        x: -200,
        y: -3180,
      },
      edges: [
        "3ee7d4f4-9b58-495d-9a37-3fa52d1d7cac",
        "5419a4dc-f9f3-4eee-9875-0a0b3406d065",
      ],
      top: "faf55cd4-6c52-4032-a269-af1d98be307b",
      left: "59b69fbc-c5a2-47a3-b4c3-d0ce41085620",
    },
    {
      id: "1c716a27-8815-48bd-ab9f-2875a3640e38",
      name: "CaveField",
      position: {
        x: -740,
        y: -4220,
      },
      edges: ["6a227cbc-1a63-4509-a555-ab24ca8d575f"],
      bottom: "4085aa9c-0040-4c4f-bbe5-01e41ab2d363",
    },
    {
      id: "6d2e2c29-ceb8-458f-8764-f6e96ed4d1b2",
      name: "GoldTreasureField",
      position: {
        x: 1460,
        y: -940,
      },
      edges: [
        "2ea78b56-a751-462b-b13c-e66fb840b474",
        "7d1602a5-5f42-43d8-88c0-f7e489370466",
      ],
      bottom: "41de9c55-0347-4889-bf5f-20830f8b4e1e",
      top: "d1bf0dc6-abe2-492e-bd1c-a6dbfdc04efe",
    },
    {
      id: "d1bf0dc6-abe2-492e-bd1c-a6dbfdc04efe",
      name: "DamageField",
      position: {
        x: 1420,
        y: -1580,
      },
      edges: [
        "7d1602a5-5f42-43d8-88c0-f7e489370466",
        "a91f6d5e-9549-4a25-a979-c6a99053e0fa",
      ],
      bottom: "6d2e2c29-ceb8-458f-8764-f6e96ed4d1b2",
      top: "df17d00a-afd7-4017-a694-2131af71ae4d",
    },
    {
      id: "df17d00a-afd7-4017-a694-2131af71ae4d",
      name: "DamageField",
      position: {
        x: 1660,
        y: -2240,
      },
      edges: [
        "a91f6d5e-9549-4a25-a979-c6a99053e0fa",
        "e8f85bf9-f355-44ee-9312-e4edf0be3e73",
        "53736869-d633-43ae-8323-55a6d7d83f73",
      ],
      bottom: "d1bf0dc6-abe2-492e-bd1c-a6dbfdc04efe",
      right: "2513fb0b-5f40-469d-9809-bb0934e4ab8d",
      top: "620fcea8-5956-4619-9e25-30316b9cbc6e",
    },
    {
      id: "2513fb0b-5f40-469d-9809-bb0934e4ab8d",
      name: "BattleField",
      position: {
        x: 2180,
        y: -2300,
      },
      edges: [
        "e8f85bf9-f355-44ee-9312-e4edf0be3e73",
        "03a8e414-4cee-41e4-9700-bff4c288172e",
      ],
      left: "df17d00a-afd7-4017-a694-2131af71ae4d",
      right: "62eae3ba-796b-43a3-ae0d-8b11ea1cf301",
    },
    {
      id: "62eae3ba-796b-43a3-ae0d-8b11ea1cf301",
      name: "TreasureField",
      position: {
        x: 2720,
        y: -2240,
      },
      edges: [
        "03a8e414-4cee-41e4-9700-bff4c288172e",
        "3fe12e70-7e28-4ab6-80de-72c07c686e76",
        "1196a07b-7c90-420c-bf75-4354f1c625de",
      ],
      left: "2513fb0b-5f40-469d-9809-bb0934e4ab8d",
      top: "8ca20b3e-cd3e-44a1-b2ac-206296c8fce1",
      right: "7de6ae34-501d-41ee-b4db-5b28066cde62",
    },
    {
      id: "620fcea8-5956-4619-9e25-30316b9cbc6e",
      name: "TreasureField",
      position: {
        x: 1680,
        y: -2760,
      },
      edges: [
        "53736869-d633-43ae-8323-55a6d7d83f73",
        "36add453-9979-4c34-b030-ab5812135c96",
      ],
      bottom: "df17d00a-afd7-4017-a694-2131af71ae4d",
      right: "8ca20b3e-cd3e-44a1-b2ac-206296c8fce1",
    },
    {
      id: "8ca20b3e-cd3e-44a1-b2ac-206296c8fce1",
      name: "RedTreasureField",
      position: {
        x: 2700,
        y: -2740,
      },
      edges: [
        "36add453-9979-4c34-b030-ab5812135c96",
        "3fe12e70-7e28-4ab6-80de-72c07c686e76",
        "037dafd7-2bb5-49b7-90bf-3d2a8036eb71",
      ],
      left: "620fcea8-5956-4619-9e25-30316b9cbc6e",
      bottom: "62eae3ba-796b-43a3-ae0d-8b11ea1cf301",
      top: "1729155a-55e3-41e1-9359-819acb17d49c",
    },
    {
      id: "1729155a-55e3-41e1-9359-819acb17d49c",
      name: "BattleField",
      position: {
        x: 2740,
        y: -3240,
      },
      edges: [
        "037dafd7-2bb5-49b7-90bf-3d2a8036eb71",
        "230976c4-24d8-4d00-8135-54f13bea562b",
        "29a43a20-ce58-4ecf-8482-39dd3ae84faa",
      ],
      bottom: "8ca20b3e-cd3e-44a1-b2ac-206296c8fce1",
      right: "f789ada4-a7a6-4137-b483-4dec9900b029",
      top: "b5cd05da-fc2a-4c21-9482-fc8aca5f2c79",
    },
    {
      id: "f789ada4-a7a6-4137-b483-4dec9900b029",
      name: "MagicField",
      position: {
        x: 3320,
        y: -3220,
      },
      edges: [
        "230976c4-24d8-4d00-8135-54f13bea562b",
        "eb50e863-7caa-41b5-9379-901cbd830d14",
      ],
      left: "1729155a-55e3-41e1-9359-819acb17d49c",
      bottom: "7de6ae34-501d-41ee-b4db-5b28066cde62",
    },
    {
      id: "7de6ae34-501d-41ee-b4db-5b28066cde62",
      name: "BattleField",
      position: {
        x: 3280,
        y: -2280,
      },
      edges: [
        "eb50e863-7caa-41b5-9379-901cbd830d14",
        "1196a07b-7c90-420c-bf75-4354f1c625de",
      ],
      top: "f789ada4-a7a6-4137-b483-4dec9900b029",
      left: "62eae3ba-796b-43a3-ae0d-8b11ea1cf301",
    },
    {
      id: "b5cd05da-fc2a-4c21-9482-fc8aca5f2c79",
      name: "CaveField",
      position: {
        x: 2700,
        y: -3760,
      },
      edges: ["29a43a20-ce58-4ecf-8482-39dd3ae84faa"],
      bottom: "1729155a-55e3-41e1-9359-819acb17d49c",
    },
    {
      id: "3f4c5601-a79a-4ebd-a42e-5ff89906fac7",
      name: "MagicField",
      position: {
        x: 2060,
        y: 620,
      },
      edges: [
        "31c58c0b-0ba1-4a75-ab01-2b6a5895dff1",
        "24591427-f6ff-4e8e-aa72-e21189f5134c",
      ],
      left: "5b4ac141-6c61-4215-9e84-b2cad8805e9c",
      right: "54c26d45-6dbe-4de0-ae44-a0cacbd51d96",
    },
    {
      id: "54c26d45-6dbe-4de0-ae44-a0cacbd51d96",
      name: "BattleField",
      position: {
        x: 2620,
        y: 660,
      },
      edges: [
        "24591427-f6ff-4e8e-aa72-e21189f5134c",
        "0b418c2e-1c9a-4370-95a0-793a4fd77260",
      ],
      left: "3f4c5601-a79a-4ebd-a42e-5ff89906fac7",
      right: "30f110f4-b830-437a-9a43-bdc515359bd3",
    },
    {
      id: "30f110f4-b830-437a-9a43-bdc515359bd3",
      name: "GoldTreasureField",
      position: {
        x: 3180,
        y: 620,
      },
      edges: [
        "0b418c2e-1c9a-4370-95a0-793a4fd77260",
        "e84f7d0b-421c-4e25-9d9a-abaeb3b208b6",
      ],
      left: "54c26d45-6dbe-4de0-ae44-a0cacbd51d96",
      right: "ff503db6-a644-4917-8855-0941243d2da2",
    },
    {
      id: "ff503db6-a644-4917-8855-0941243d2da2",
      name: "DamageField",
      position: {
        x: 3760,
        y: 660,
      },
      edges: [
        "e84f7d0b-421c-4e25-9d9a-abaeb3b208b6",
        "8a238ffc-89cf-4e0c-aa0e-6205c4e19556",
      ],
      left: "30f110f4-b830-437a-9a43-bdc515359bd3",
      top: "ae0e9bcb-98ff-4d5a-a55b-544ed448b85c",
    },
    {
      id: "ae0e9bcb-98ff-4d5a-a55b-544ed448b85c",
      name: "BattleField",
      position: {
        x: 3780,
        y: 160,
      },
      edges: [
        "8a238ffc-89cf-4e0c-aa0e-6205c4e19556",
        "2bfb0efb-a1cd-4f98-9730-bbce4230243c",
      ],
      bottom: "ff503db6-a644-4917-8855-0941243d2da2",
      top: "8e6b0f7d-b66c-4163-9452-a3196eafde24",
    },
    {
      id: "8e6b0f7d-b66c-4163-9452-a3196eafde24",
      name: "TreasureField",
      position: {
        x: 3740,
        y: -320,
      },
      edges: [
        "2bfb0efb-a1cd-4f98-9730-bbce4230243c",
        "48f6b05a-4094-4e9d-b20a-36818d93ce05",
        "3fa4288f-e607-4f79-8d44-e78eb946133d",
      ],
      bottom: "ae0e9bcb-98ff-4d5a-a55b-544ed448b85c",
      left: "a6a23522-0ede-4fe0-a54a-75fb8c4b6bc0",
      top: "efadc9fb-c0af-41f0-92e8-3901bc0efba3",
    },
    {
      id: "a6a23522-0ede-4fe0-a54a-75fb8c4b6bc0",
      name: "GoldTreasureField",
      position: {
        x: 3240,
        y: -320,
      },
      edges: [
        "48f6b05a-4094-4e9d-b20a-36818d93ce05",
        "b0b41b4e-f66f-48de-90eb-69318299ca6d",
      ],
      right: "8e6b0f7d-b66c-4163-9452-a3196eafde24",
      top: "884687c7-0d83-4085-b772-2a673da5fa1f",
    },
    {
      id: "884687c7-0d83-4085-b772-2a673da5fa1f",
      name: "RedTreasureField",
      position: {
        x: 3260,
        y: -1200,
      },
      edges: [
        "b0b41b4e-f66f-48de-90eb-69318299ca6d",
        "e6d613b3-dc95-4f1e-9e83-0d47578b0816",
      ],
      bottom: "a6a23522-0ede-4fe0-a54a-75fb8c4b6bc0",
      right: "1ec68d55-f04c-4ad0-8d93-5be6cf3d999d",
    },
    {
      id: "1ec68d55-f04c-4ad0-8d93-5be6cf3d999d",
      name: "GoldTreasureField",
      position: {
        x: 3740,
        y: -1240,
      },
      edges: [
        "e6d613b3-dc95-4f1e-9e83-0d47578b0816",
        "d69fd9e1-7323-43c0-a53f-58801b95105e",
        "cf70038e-02fd-43fc-8b93-ea53cf72b734",
      ],
      left: "884687c7-0d83-4085-b772-2a673da5fa1f",
      bottom: "efadc9fb-c0af-41f0-92e8-3901bc0efba3",
      top: "c2593dd5-ccfb-4bcd-8d9c-095d1778b60b",
    },
    {
      id: "efadc9fb-c0af-41f0-92e8-3901bc0efba3",
      name: "DamageField",
      position: {
        x: 3820,
        y: -780,
      },
      edges: [
        "d69fd9e1-7323-43c0-a53f-58801b95105e",
        "3fa4288f-e607-4f79-8d44-e78eb946133d",
      ],
      top: "1ec68d55-f04c-4ad0-8d93-5be6cf3d999d",
      bottom: "8e6b0f7d-b66c-4163-9452-a3196eafde24",
    },
    {
      id: "c2593dd5-ccfb-4bcd-8d9c-095d1778b60b",
      name: "TreasureField",
      position: {
        x: 3780,
        y: -1760,
      },
      edges: [
        "cf70038e-02fd-43fc-8b93-ea53cf72b734",
        "5347fb59-49ff-4eb9-bf95-e88d600f7033",
      ],
      bottom: "1ec68d55-f04c-4ad0-8d93-5be6cf3d999d",
      right: "317eef6c-b056-4216-af5a-bd5d0057e25c",
    },
    {
      id: "317eef6c-b056-4216-af5a-bd5d0057e25c",
      name: "BattleField",
      position: {
        x: 4320,
        y: -1780,
      },
      edges: [
        "5347fb59-49ff-4eb9-bf95-e88d600f7033",
        "7175ac9e-da0b-4d80-9854-d2cca653507e",
      ],
      left: "c2593dd5-ccfb-4bcd-8d9c-095d1778b60b",
      top: "bd9f675d-7572-40ad-8016-8ca207caf9a3",
    },
    {
      id: "bd9f675d-7572-40ad-8016-8ca207caf9a3",
      name: "CollectAllMoneyField",
      position: {
        x: 4360,
        y: -2260,
      },
      edges: ["7175ac9e-da0b-4d80-9854-d2cca653507e"],
      bottom: "317eef6c-b056-4216-af5a-bd5d0057e25c",
    },
  ],
  edges: [
    {
      start: {
        x: 300,
        y: 620,
      },
      startId: "40d67944-6069-42f8-86cf-5eab76249562",
      end: {
        x: 340,
        y: 120,
      },
      endId: "ccf39cd3-52af-4949-9b7e-e5a723d07678",
      name: "TwoWayVEdge",
      id: "d4609207-7775-4631-900a-5ef1c76617fd",
    },
    {
      start: {
        x: 340,
        y: 120,
      },
      startId: "ccf39cd3-52af-4949-9b7e-e5a723d07678",
      end: {
        x: 1400,
        y: 80,
      },
      endId: "41de9c55-0347-4889-bf5f-20830f8b4e1e",
      name: "TwoWayHEdge",
      id: "68094d47-3c47-4dac-904e-6930a9caa68f",
    },
    {
      start: {
        x: 300,
        y: 620,
      },
      startId: "40d67944-6069-42f8-86cf-5eab76249562",
      end: {
        x: 900,
        y: 580,
      },
      endId: "1210f500-1d87-45d6-8431-4951324b2bf5",
      name: "TwoWayHEdge",
      id: "5d10441e-7897-4618-b994-ae81aeb417ed",
    },
    {
      start: {
        x: 900,
        y: 580,
      },
      startId: "1210f500-1d87-45d6-8431-4951324b2bf5",
      end: {
        x: 1480,
        y: 640,
      },
      endId: "5b4ac141-6c61-4215-9e84-b2cad8805e9c",
      name: "TwoWayHEdge",
      id: "89ebbef8-dcbe-42ce-a8ab-bf33bbe7de86",
    },
    {
      start: {
        x: 1400,
        y: 80,
      },
      startId: "41de9c55-0347-4889-bf5f-20830f8b4e1e",
      end: {
        x: 1480,
        y: 640,
      },
      endId: "5b4ac141-6c61-4215-9e84-b2cad8805e9c",
      name: "TwoWayVEdge",
      id: "c31d3ad2-bf86-4c9f-a631-25dd97c7a146",
    },
    {
      start: {
        x: 900,
        y: 580,
      },
      startId: "1210f500-1d87-45d6-8431-4951324b2bf5",
      end: {
        x: 820,
        y: 1160,
      },
      endId: "f4997e9b-6cc3-4484-a2f3-bda192559e48",
      name: "TwoWayVEdge",
      id: "f6fe4e32-a483-4843-a3c6-b4a086da2492",
    },
    {
      start: {
        x: 300,
        y: 620,
      },
      startId: "40d67944-6069-42f8-86cf-5eab76249562",
      end: {
        x: -280,
        y: 580,
      },
      endId: "afaae593-2728-4cc5-a0c7-ac8a7abc65c1",
      name: "TwoWayHEdge",
      id: "b86aacd0-7172-4d69-b2f1-a131b0678c9b",
    },
    {
      start: {
        x: -280,
        y: 580,
      },
      startId: "afaae593-2728-4cc5-a0c7-ac8a7abc65c1",
      end: {
        x: -340,
        y: -300,
      },
      endId: "4f67461a-39d3-485d-a559-2275e713bb26",
      name: "TwoWayVEdge",
      id: "14be5bee-1fe9-4792-9e1d-151fc844a530",
    },
    {
      start: {
        x: -340,
        y: -300,
      },
      startId: "4f67461a-39d3-485d-a559-2275e713bb26",
      end: {
        x: -240,
        y: -760,
      },
      endId: "76773e90-0ba1-4aea-80c2-9287a660514e",
      name: "TwoWayVEdge",
      id: "ed48a06b-c17f-46c3-afe9-2bd95a33f14a",
    },
    {
      start: {
        x: -240,
        y: -760,
      },
      startId: "76773e90-0ba1-4aea-80c2-9287a660514e",
      end: {
        x: 860,
        y: -760,
      },
      endId: "390e544c-4d97-4f9b-bdb0-fee23d05ffbb",
      name: "TwoWayHEdge",
      id: "34836e67-606e-4ce0-be17-1bee2e1ae70b",
    },
    {
      start: {
        x: -340,
        y: -300,
      },
      startId: "4f67461a-39d3-485d-a559-2275e713bb26",
      end: {
        x: 280,
        y: -220,
      },
      endId: "d8822b24-80c2-4a1e-b1aa-c730b901f927",
      name: "TwoWayHEdge",
      id: "e720101e-d7e2-46f8-95b8-86ebee028967",
    },
    {
      start: {
        x: 280,
        y: -220,
      },
      startId: "d8822b24-80c2-4a1e-b1aa-c730b901f927",
      end: {
        x: 940,
        y: -320,
      },
      endId: "3c518ad4-6809-4ebd-aada-23e3ee875467",
      name: "TwoWayHEdge",
      id: "79276fa4-6c6c-4f4a-848a-5bc1e00153c1",
    },
    {
      start: {
        x: 860,
        y: -760,
      },
      startId: "390e544c-4d97-4f9b-bdb0-fee23d05ffbb",
      end: {
        x: 940,
        y: -320,
      },
      endId: "3c518ad4-6809-4ebd-aada-23e3ee875467",
      name: "TwoWayVEdge",
      id: "89696e73-6257-43d5-904c-d3943b0cbf59",
    },
    {
      start: {
        x: 860,
        y: -760,
      },
      startId: "390e544c-4d97-4f9b-bdb0-fee23d05ffbb",
      end: {
        x: 880,
        y: -1280,
      },
      endId: "2b5d08c3-f1d9-40fe-95a6-2b6bf9392598",
      name: "TwoWayVEdge",
      id: "f5554b2d-ebf5-4e1c-b01f-e3780a8d55f8",
    },
    {
      start: {
        x: 880,
        y: -1280,
      },
      startId: "2b5d08c3-f1d9-40fe-95a6-2b6bf9392598",
      end: {
        x: 840,
        y: -1780,
      },
      endId: "3bfa43b7-d383-45e5-af8d-ef50361095c5",
      name: "TwoWayVEdge",
      id: "de0e733a-5ebf-4247-bd11-0974fa0ba77d",
    },
    {
      start: {
        x: 840,
        y: -1780,
      },
      startId: "3bfa43b7-d383-45e5-af8d-ef50361095c5",
      end: {
        x: 860,
        y: -2280,
      },
      endId: "f8c658c8-ee5b-41bc-8143-a7ade0408e24",
      name: "TwoWayVEdge",
      id: "f55a68fc-b150-4782-ab64-cf06896ad5bc",
    },
    {
      start: {
        x: 860,
        y: -2280,
      },
      startId: "f8c658c8-ee5b-41bc-8143-a7ade0408e24",
      end: {
        x: 260,
        y: -2320,
      },
      endId: "7a16b299-1b6b-465a-8e84-f3834d1809e4",
      name: "TwoWayHEdge",
      id: "bfb573d4-25e1-4c72-9ed8-dbba6aa8fd24",
    },
    {
      start: {
        x: 260,
        y: -2320,
      },
      startId: "7a16b299-1b6b-465a-8e84-f3834d1809e4",
      end: {
        x: -300,
        y: -2280,
      },
      endId: "8049a32f-d743-47c2-984f-7bd46c0444f0",
      name: "TwoWayHEdge",
      id: "c191d702-92a7-4fa5-85eb-ac31d4430403",
    },
    {
      start: {
        x: -240,
        y: -760,
      },
      startId: "76773e90-0ba1-4aea-80c2-9287a660514e",
      end: {
        x: -260,
        y: -1220,
      },
      endId: "d00e7438-95b7-4db9-a7b9-2c87d4cf53c2",
      name: "TwoWayVEdge",
      id: "a49bdb47-0b23-4e8f-9c4a-4e66e154d8d2",
    },
    {
      start: {
        x: -260,
        y: -1220,
      },
      startId: "d00e7438-95b7-4db9-a7b9-2c87d4cf53c2",
      end: {
        x: -800,
        y: -1200,
      },
      endId: "b9b80c4f-784e-4757-a350-de468186104b",
      name: "TwoWayHEdge",
      id: "1817865c-62cf-4283-ab0e-545314f63676",
    },
    {
      start: {
        x: -800,
        y: -1200,
      },
      startId: "b9b80c4f-784e-4757-a350-de468186104b",
      end: {
        x: -1300,
        y: -1220,
      },
      endId: "028eda39-3228-4f39-969b-deb7b418f859",
      name: "TwoWayHEdge",
      id: "59f870d4-10fd-4a8a-a70d-95a9f09f7619",
    },
    {
      start: {
        x: -1300,
        y: -1220,
      },
      startId: "028eda39-3228-4f39-969b-deb7b418f859",
      end: {
        x: -1340,
        y: -1940,
      },
      endId: "cfaccbea-78f5-4676-872a-3edf44b92940",
      name: "TwoWayVEdge",
      id: "33171b0e-cb18-4bd7-826e-9b6adb6b048b",
    },
    {
      start: {
        x: -1340,
        y: -1940,
      },
      startId: "cfaccbea-78f5-4676-872a-3edf44b92940",
      end: {
        x: -1300,
        y: -2720,
      },
      endId: "15ca5997-bd65-4b8a-8c8a-05ccb05c695e",
      name: "TwoWayVEdge",
      id: "7a24eef0-8e7c-433b-8803-7f34349e25a2",
    },
    {
      start: {
        x: -1300,
        y: -2720,
      },
      startId: "15ca5997-bd65-4b8a-8c8a-05ccb05c695e",
      end: {
        x: -1240,
        y: -3200,
      },
      endId: "59b69fbc-c5a2-47a3-b4c3-d0ce41085620",
      name: "TwoWayVEdge",
      id: "cd5e89eb-90c7-4601-bea1-e7bb5cb54281",
    },
    {
      start: {
        x: -1240,
        y: -3200,
      },
      startId: "59b69fbc-c5a2-47a3-b4c3-d0ce41085620",
      end: {
        x: -1280,
        y: -3700,
      },
      endId: "33bff1fa-fc8b-406b-8b05-133b90d65cbf",
      name: "TwoWayVEdge",
      id: "794a6d96-d896-4f66-8961-a67ab0094f5a",
    },
    {
      start: {
        x: -1280,
        y: -3700,
      },
      startId: "33bff1fa-fc8b-406b-8b05-133b90d65cbf",
      end: {
        x: -700,
        y: -3740,
      },
      endId: "4085aa9c-0040-4c4f-bbe5-01e41ab2d363",
      name: "TwoWayHEdge",
      id: "69b80459-f426-4493-829b-cfac5f445b7a",
    },
    {
      start: {
        x: -700,
        y: -3740,
      },
      startId: "4085aa9c-0040-4c4f-bbe5-01e41ab2d363",
      end: {
        x: -140,
        y: -3680,
      },
      endId: "faf55cd4-6c52-4032-a269-af1d98be307b",
      name: "TwoWayHEdge",
      id: "a14a23be-baad-4dad-a255-64c08174cc1a",
    },
    {
      start: {
        x: -140,
        y: -3680,
      },
      startId: "faf55cd4-6c52-4032-a269-af1d98be307b",
      end: {
        x: -200,
        y: -3180,
      },
      endId: "25153b3b-8680-414f-91b6-54ca2acf56ce",
      name: "TwoWayVEdge",
      id: "3ee7d4f4-9b58-495d-9a37-3fa52d1d7cac",
    },
    {
      start: {
        x: -1240,
        y: -3200,
      },
      startId: "59b69fbc-c5a2-47a3-b4c3-d0ce41085620",
      end: {
        x: -200,
        y: -3180,
      },
      endId: "25153b3b-8680-414f-91b6-54ca2acf56ce",
      name: "TwoWayHEdge",
      id: "5419a4dc-f9f3-4eee-9875-0a0b3406d065",
    },
    {
      start: {
        x: -700,
        y: -3740,
      },
      startId: "4085aa9c-0040-4c4f-bbe5-01e41ab2d363",
      end: {
        x: -740,
        y: -4220,
      },
      endId: "1c716a27-8815-48bd-ab9f-2875a3640e38",
      name: "TwoWayVEdge",
      id: "6a227cbc-1a63-4509-a555-ab24ca8d575f",
    },
    {
      start: {
        x: 1400,
        y: 80,
      },
      startId: "41de9c55-0347-4889-bf5f-20830f8b4e1e",
      end: {
        x: 1460,
        y: -940,
      },
      endId: "6d2e2c29-ceb8-458f-8764-f6e96ed4d1b2",
      name: "TwoWayVEdge",
      id: "2ea78b56-a751-462b-b13c-e66fb840b474",
    },
    {
      start: {
        x: 1460,
        y: -940,
      },
      startId: "6d2e2c29-ceb8-458f-8764-f6e96ed4d1b2",
      end: {
        x: 1420,
        y: -1580,
      },
      endId: "d1bf0dc6-abe2-492e-bd1c-a6dbfdc04efe",
      name: "TwoWayVEdge",
      id: "7d1602a5-5f42-43d8-88c0-f7e489370466",
    },
    {
      start: {
        x: 1420,
        y: -1580,
      },
      startId: "d1bf0dc6-abe2-492e-bd1c-a6dbfdc04efe",
      end: {
        x: 1660,
        y: -2240,
      },
      endId: "df17d00a-afd7-4017-a694-2131af71ae4d",
      name: "TwoWayVEdge",
      id: "a91f6d5e-9549-4a25-a979-c6a99053e0fa",
    },
    {
      start: {
        x: 1660,
        y: -2240,
      },
      startId: "df17d00a-afd7-4017-a694-2131af71ae4d",
      end: {
        x: 2180,
        y: -2300,
      },
      endId: "2513fb0b-5f40-469d-9809-bb0934e4ab8d",
      name: "TwoWayHEdge",
      id: "e8f85bf9-f355-44ee-9312-e4edf0be3e73",
    },
    {
      start: {
        x: 2180,
        y: -2300,
      },
      startId: "2513fb0b-5f40-469d-9809-bb0934e4ab8d",
      end: {
        x: 2720,
        y: -2240,
      },
      endId: "62eae3ba-796b-43a3-ae0d-8b11ea1cf301",
      name: "TwoWayHEdge",
      id: "03a8e414-4cee-41e4-9700-bff4c288172e",
    },
    {
      start: {
        x: 1660,
        y: -2240,
      },
      startId: "df17d00a-afd7-4017-a694-2131af71ae4d",
      end: {
        x: 1680,
        y: -2760,
      },
      endId: "620fcea8-5956-4619-9e25-30316b9cbc6e",
      name: "TwoWayVEdge",
      id: "53736869-d633-43ae-8323-55a6d7d83f73",
    },
    {
      start: {
        x: 1680,
        y: -2760,
      },
      startId: "620fcea8-5956-4619-9e25-30316b9cbc6e",
      end: {
        x: 2700,
        y: -2740,
      },
      endId: "8ca20b3e-cd3e-44a1-b2ac-206296c8fce1",
      name: "TwoWayHEdge",
      id: "36add453-9979-4c34-b030-ab5812135c96",
    },
    {
      start: {
        x: 2700,
        y: -2740,
      },
      startId: "8ca20b3e-cd3e-44a1-b2ac-206296c8fce1",
      end: {
        x: 2720,
        y: -2240,
      },
      endId: "62eae3ba-796b-43a3-ae0d-8b11ea1cf301",
      name: "TwoWayVEdge",
      id: "3fe12e70-7e28-4ab6-80de-72c07c686e76",
    },
    {
      start: {
        x: 2700,
        y: -2740,
      },
      startId: "8ca20b3e-cd3e-44a1-b2ac-206296c8fce1",
      end: {
        x: 2740,
        y: -3240,
      },
      endId: "1729155a-55e3-41e1-9359-819acb17d49c",
      name: "TwoWayVEdge",
      id: "037dafd7-2bb5-49b7-90bf-3d2a8036eb71",
    },
    {
      start: {
        x: 2740,
        y: -3240,
      },
      startId: "1729155a-55e3-41e1-9359-819acb17d49c",
      end: {
        x: 3320,
        y: -3220,
      },
      endId: "f789ada4-a7a6-4137-b483-4dec9900b029",
      name: "TwoWayHEdge",
      id: "230976c4-24d8-4d00-8135-54f13bea562b",
    },
    {
      start: {
        x: 3320,
        y: -3220,
      },
      startId: "f789ada4-a7a6-4137-b483-4dec9900b029",
      end: {
        x: 3280,
        y: -2280,
      },
      endId: "7de6ae34-501d-41ee-b4db-5b28066cde62",
      name: "TwoWayVEdge",
      id: "eb50e863-7caa-41b5-9379-901cbd830d14",
    },
    {
      start: {
        x: 3280,
        y: -2280,
      },
      startId: "7de6ae34-501d-41ee-b4db-5b28066cde62",
      end: {
        x: 2720,
        y: -2240,
      },
      endId: "62eae3ba-796b-43a3-ae0d-8b11ea1cf301",
      name: "TwoWayHEdge",
      id: "1196a07b-7c90-420c-bf75-4354f1c625de",
    },
    {
      start: {
        x: 2740,
        y: -3240,
      },
      startId: "1729155a-55e3-41e1-9359-819acb17d49c",
      end: {
        x: 2700,
        y: -3760,
      },
      endId: "b5cd05da-fc2a-4c21-9482-fc8aca5f2c79",
      name: "TwoWayVEdge",
      id: "29a43a20-ce58-4ecf-8482-39dd3ae84faa",
    },
    {
      start: {
        x: 1480,
        y: 640,
      },
      startId: "5b4ac141-6c61-4215-9e84-b2cad8805e9c",
      end: {
        x: 2060,
        y: 620,
      },
      endId: "3f4c5601-a79a-4ebd-a42e-5ff89906fac7",
      name: "TwoWayHEdge",
      id: "31c58c0b-0ba1-4a75-ab01-2b6a5895dff1",
    },
    {
      start: {
        x: 2060,
        y: 620,
      },
      startId: "3f4c5601-a79a-4ebd-a42e-5ff89906fac7",
      end: {
        x: 2620,
        y: 660,
      },
      endId: "54c26d45-6dbe-4de0-ae44-a0cacbd51d96",
      name: "TwoWayHEdge",
      id: "24591427-f6ff-4e8e-aa72-e21189f5134c",
    },
    {
      start: {
        x: 2620,
        y: 660,
      },
      startId: "54c26d45-6dbe-4de0-ae44-a0cacbd51d96",
      end: {
        x: 3180,
        y: 620,
      },
      endId: "30f110f4-b830-437a-9a43-bdc515359bd3",
      name: "TwoWayHEdge",
      id: "0b418c2e-1c9a-4370-95a0-793a4fd77260",
    },
    {
      start: {
        x: 3180,
        y: 620,
      },
      startId: "30f110f4-b830-437a-9a43-bdc515359bd3",
      end: {
        x: 3760,
        y: 660,
      },
      endId: "ff503db6-a644-4917-8855-0941243d2da2",
      name: "TwoWayHEdge",
      id: "e84f7d0b-421c-4e25-9d9a-abaeb3b208b6",
    },
    {
      start: {
        x: 3760,
        y: 660,
      },
      startId: "ff503db6-a644-4917-8855-0941243d2da2",
      end: {
        x: 3780,
        y: 160,
      },
      endId: "ae0e9bcb-98ff-4d5a-a55b-544ed448b85c",
      name: "TwoWayVEdge",
      id: "8a238ffc-89cf-4e0c-aa0e-6205c4e19556",
    },
    {
      start: {
        x: 3780,
        y: 160,
      },
      startId: "ae0e9bcb-98ff-4d5a-a55b-544ed448b85c",
      end: {
        x: 3740,
        y: -320,
      },
      endId: "8e6b0f7d-b66c-4163-9452-a3196eafde24",
      name: "TwoWayVEdge",
      id: "2bfb0efb-a1cd-4f98-9730-bbce4230243c",
    },
    {
      start: {
        x: 3740,
        y: -320,
      },
      startId: "8e6b0f7d-b66c-4163-9452-a3196eafde24",
      end: {
        x: 3240,
        y: -320,
      },
      endId: "a6a23522-0ede-4fe0-a54a-75fb8c4b6bc0",
      name: "TwoWayHEdge",
      id: "48f6b05a-4094-4e9d-b20a-36818d93ce05",
    },
    {
      start: {
        x: 3240,
        y: -320,
      },
      startId: "a6a23522-0ede-4fe0-a54a-75fb8c4b6bc0",
      end: {
        x: 3260,
        y: -1200,
      },
      endId: "884687c7-0d83-4085-b772-2a673da5fa1f",
      name: "TwoWayVEdge",
      id: "b0b41b4e-f66f-48de-90eb-69318299ca6d",
    },
    {
      start: {
        x: 3260,
        y: -1200,
      },
      startId: "884687c7-0d83-4085-b772-2a673da5fa1f",
      end: {
        x: 3740,
        y: -1240,
      },
      endId: "1ec68d55-f04c-4ad0-8d93-5be6cf3d999d",
      name: "TwoWayHEdge",
      id: "e6d613b3-dc95-4f1e-9e83-0d47578b0816",
    },
    {
      start: {
        x: 3740,
        y: -1240,
      },
      startId: "1ec68d55-f04c-4ad0-8d93-5be6cf3d999d",
      end: {
        x: 3820,
        y: -780,
      },
      endId: "efadc9fb-c0af-41f0-92e8-3901bc0efba3",
      name: "TwoWayVEdge",
      id: "d69fd9e1-7323-43c0-a53f-58801b95105e",
    },
    {
      start: {
        x: 3820,
        y: -780,
      },
      startId: "efadc9fb-c0af-41f0-92e8-3901bc0efba3",
      end: {
        x: 3740,
        y: -320,
      },
      endId: "8e6b0f7d-b66c-4163-9452-a3196eafde24",
      name: "TwoWayVEdge",
      id: "3fa4288f-e607-4f79-8d44-e78eb946133d",
    },
    {
      start: {
        x: 3740,
        y: -1240,
      },
      startId: "1ec68d55-f04c-4ad0-8d93-5be6cf3d999d",
      end: {
        x: 3780,
        y: -1760,
      },
      endId: "c2593dd5-ccfb-4bcd-8d9c-095d1778b60b",
      name: "TwoWayVEdge",
      id: "cf70038e-02fd-43fc-8b93-ea53cf72b734",
    },
    {
      start: {
        x: 3780,
        y: -1760,
      },
      startId: "c2593dd5-ccfb-4bcd-8d9c-095d1778b60b",
      end: {
        x: 4320,
        y: -1780,
      },
      endId: "317eef6c-b056-4216-af5a-bd5d0057e25c",
      name: "TwoWayHEdge",
      id: "5347fb59-49ff-4eb9-bf95-e88d600f7033",
    },
    {
      start: {
        x: 4320,
        y: -1780,
      },
      startId: "317eef6c-b056-4216-af5a-bd5d0057e25c",
      end: {
        x: 4360,
        y: -2260,
      },
      endId: "bd9f675d-7572-40ad-8016-8ca207caf9a3",
      name: "TwoWayVEdge",
      id: "7175ac9e-da0b-4d80-9854-d2cca653507e",
    },
  ],
};
export default southAmericaCave;
