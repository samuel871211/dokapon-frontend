import { Vertex, Edge } from "../global";

const asiaCave: { vertices: Vertex[]; edges: Edge[] } = {
  vertices: [
    {
      position: {
        x: 520,
        y: -160,
      },
      name: "BattleField",
      id: "f057bbf6-d5e4-42c4-8b0d-b730d85ef3a3",
      edges: [
        "2fe38931-65d6-4a8a-bb95-408280bf2c6b",
        "3a9adaa6-4466-404a-9771-e68459b0b514",
        "4af89963-0489-41bc-ada0-2d4cfce8ad23",
      ],
      bottom: "2956660d-ff8a-4712-b718-fc8df8e6dc8d",
      right: "c47cef6e-c298-4591-ad42-41d9ac621087",
      area: "AsiaCave",
      top: "512a89c6-af22-4a10-ab77-66a54ecca026",
    },
    {
      id: "2956660d-ff8a-4712-b718-fc8df8e6dc8d",
      name: "CaveField",
      position: {
        x: 460,
        y: 240,
      },
      edges: ["2fe38931-65d6-4a8a-bb95-408280bf2c6b"],
      top: "f057bbf6-d5e4-42c4-8b0d-b730d85ef3a3",
      area: "AsiaCave",
    },
    {
      id: "c47cef6e-c298-4591-ad42-41d9ac621087",
      name: "BattleField",
      position: {
        x: 1320,
        y: -200,
      },
      edges: [
        "3a9adaa6-4466-404a-9771-e68459b0b514",
        "22fbad6b-bd10-4389-af19-4c8b869777d8",
        "d057aad8-1ccf-4f84-a3a6-77e22693b188",
      ],
      left: "f057bbf6-d5e4-42c4-8b0d-b730d85ef3a3",
      top: "dc7a735d-72b0-4db6-bbb4-45704206f17d",
      right: "b2520dd7-37db-428f-8afa-bc59f20e7d00",
      area: "AsiaCave",
    },
    {
      id: "79c16d63-ce1e-4fb5-a540-f9cd4c36cc07",
      name: "TreasureField",
      position: {
        x: 1000,
        y: -560,
      },
      edges: [
        "397a960e-6a15-40a9-bfaa-74224cbdad1f",
        "80cb94c6-33c4-487e-8af2-54b06b1d6ba7",
      ],
      right: "dc7a735d-72b0-4db6-bbb4-45704206f17d",
      area: "AsiaCave",
      left: "512a89c6-af22-4a10-ab77-66a54ecca026",
    },
    {
      id: "dc7a735d-72b0-4db6-bbb4-45704206f17d",
      name: "BattleField",
      position: {
        x: 1440,
        y: -600,
      },
      edges: [
        "397a960e-6a15-40a9-bfaa-74224cbdad1f",
        "22fbad6b-bd10-4389-af19-4c8b869777d8",
        "22c60682-6de7-44b2-a211-467466156b65",
      ],
      left: "79c16d63-ce1e-4fb5-a540-f9cd4c36cc07",
      bottom: "c47cef6e-c298-4591-ad42-41d9ac621087",
      right: "7f373321-29ef-4048-9f26-0978398a9e31",
      area: "AsiaCave",
    },
    {
      id: "7f373321-29ef-4048-9f26-0978398a9e31",
      name: "GoldTreasureField",
      position: {
        x: 1860,
        y: -580,
      },
      edges: [
        "22c60682-6de7-44b2-a211-467466156b65",
        "b438df76-be89-4462-a1f8-9bd35046a56c",
        "90f813bf-87d3-49ca-a103-9e843b660edf",
      ],
      left: "dc7a735d-72b0-4db6-bbb4-45704206f17d",
      top: "4238fa06-fc0a-4ffd-89cb-34285f9a2627",
      right: "b39da1ab-e612-4b14-aefd-54336927cf3e",
      area: "AsiaCave",
    },
    {
      id: "4238fa06-fc0a-4ffd-89cb-34285f9a2627",
      name: "TreasureField",
      position: {
        x: 1800,
        y: -1180,
      },
      edges: [
        "b438df76-be89-4462-a1f8-9bd35046a56c",
        "0dcb2bae-1663-4a97-9d9e-6e3d240ea9f4",
      ],
      bottom: "7f373321-29ef-4048-9f26-0978398a9e31",
      right: "2e8fcd99-3c50-43d5-94e4-90bc1df9ca08",
      area: "AsiaCave",
    },
    {
      id: "2e8fcd99-3c50-43d5-94e4-90bc1df9ca08",
      name: "RedTreasureField",
      position: {
        x: 2240,
        y: -1200,
      },
      edges: [
        "0dcb2bae-1663-4a97-9d9e-6e3d240ea9f4",
        "f210a251-fd43-46fc-9de3-dbbba717ae45",
      ],
      left: "4238fa06-fc0a-4ffd-89cb-34285f9a2627",
      bottom: "180ac457-b075-4e8d-99bb-1c4f53a6fa24",
      area: "AsiaCave",
    },
    {
      id: "180ac457-b075-4e8d-99bb-1c4f53a6fa24",
      name: "GoldTreasureField",
      position: {
        x: 2140,
        y: -900,
      },
      edges: [
        "f210a251-fd43-46fc-9de3-dbbba717ae45",
        "668d091c-17a5-4d2e-b0c5-ecd19da02f1c",
      ],
      top: "2e8fcd99-3c50-43d5-94e4-90bc1df9ca08",
      bottom: "b39da1ab-e612-4b14-aefd-54336927cf3e",
      area: "AsiaCave",
    },
    {
      id: "b39da1ab-e612-4b14-aefd-54336927cf3e",
      name: "BattleField",
      position: {
        x: 2240,
        y: -540,
      },
      edges: [
        "668d091c-17a5-4d2e-b0c5-ecd19da02f1c",
        "90f813bf-87d3-49ca-a103-9e843b660edf",
        "f1608e95-9e12-4a83-963f-03c89e5ca3e1",
      ],
      top: "180ac457-b075-4e8d-99bb-1c4f53a6fa24",
      left: "7f373321-29ef-4048-9f26-0978398a9e31",
      right: "9d03b8af-d1c1-4977-b4e9-c7b9218d399b",
      area: "AsiaCave",
    },
    {
      id: "b2520dd7-37db-428f-8afa-bc59f20e7d00",
      name: "MagicField",
      position: {
        x: 1860,
        y: -160,
      },
      edges: [
        "d057aad8-1ccf-4f84-a3a6-77e22693b188",
        "4a0958a8-28d3-45f5-a0c9-edf5cd58edbd",
      ],
      left: "c47cef6e-c298-4591-ad42-41d9ac621087",
      right: "e29d519b-ee0f-4afd-ac63-996a8772aaeb",
      area: "AsiaCave",
    },
    {
      id: "9d03b8af-d1c1-4977-b4e9-c7b9218d399b",
      name: "TreasureField",
      position: {
        x: 2700,
        y: -500,
      },
      edges: [
        "f1608e95-9e12-4a83-963f-03c89e5ca3e1",
        "0112d425-e178-4e5c-a217-29adc787ee9d",
      ],
      left: "b39da1ab-e612-4b14-aefd-54336927cf3e",
      bottom: "97f967f0-8985-43a9-90da-b1401b7529c5",
      area: "AsiaCave",
    },
    {
      id: "97f967f0-8985-43a9-90da-b1401b7529c5",
      name: "BattleField",
      position: {
        x: 2700,
        y: -120,
      },
      edges: [
        "0112d425-e178-4e5c-a217-29adc787ee9d",
        "e1be1b64-b76f-4e12-8e99-ed5f8ecd7784",
        "0112d425-e178-4e5c-a217-29adc787ee9d",
      ],
      top: "9d03b8af-d1c1-4977-b4e9-c7b9218d399b",
      left: "e29d519b-ee0f-4afd-ac63-996a8772aaeb",
      area: "AsiaCave",
    },
    {
      id: "e29d519b-ee0f-4afd-ac63-996a8772aaeb",
      name: "BattleField",
      position: {
        x: 2240,
        y: -120,
      },
      edges: [
        "4a0958a8-28d3-45f5-a0c9-edf5cd58edbd",
        "e1be1b64-b76f-4e12-8e99-ed5f8ecd7784",
      ],
      left: "b2520dd7-37db-428f-8afa-bc59f20e7d00",
      right: "97f967f0-8985-43a9-90da-b1401b7529c5",
      area: "AsiaCave",
    },
    {
      id: "33a8e628-6973-4a3c-836c-0825ae64b5de",
      name: "BattleField",
      position: {
        x: -40,
        y: -440,
      },
      edges: [
        "3511133f-ba40-46f1-a8aa-fdc9b1f23110",
        "0cc6523a-9f79-499f-b256-c2222ad1e687",
        "74cb959f-3bbe-4693-8702-b701fd0e0bcd",
      ],
      left: "baab1283-747b-4b27-91ef-17cf92a01d50",
      top: "fc013634-07b0-462a-918a-98e75602d093",
      area: "AsiaCave",
      right: "512a89c6-af22-4a10-ab77-66a54ecca026",
    },
    {
      id: "baab1283-747b-4b27-91ef-17cf92a01d50",
      name: "BattleField",
      position: {
        x: -660,
        y: -480,
      },
      edges: [
        "3511133f-ba40-46f1-a8aa-fdc9b1f23110",
        "d5063efb-09dc-4480-81d0-e0581b86e0a8",
        "2736f5d7-0e10-40f4-9012-4adc93267e56",
      ],
      right: "33a8e628-6973-4a3c-836c-0825ae64b5de",
      top: "071ec4cb-df32-40d7-8c71-51b47d5b39d3",
      left: "abef418f-ba6b-4a39-b5c2-09157b9ac835",
      area: "AsiaCave",
    },
    {
      id: "071ec4cb-df32-40d7-8c71-51b47d5b39d3",
      name: "BattleField",
      position: {
        x: -700,
        y: -760,
      },
      edges: [
        "d5063efb-09dc-4480-81d0-e0581b86e0a8",
        "6eb29d5e-447d-4614-9fed-1e97afbb09ba",
        "caaa24b2-d7d7-41d6-885d-84401350d65b",
      ],
      bottom: "baab1283-747b-4b27-91ef-17cf92a01d50",
      top: "a8295ebd-6cbd-4ab4-a053-369af0fb6b9b",
      right: "1390c323-2cb8-43b2-9a6f-22c057362941",
      area: "AsiaCave",
    },
    {
      id: "a8295ebd-6cbd-4ab4-a053-369af0fb6b9b",
      name: "BattleField",
      position: {
        x: -720,
        y: -1140,
      },
      edges: [
        "6eb29d5e-447d-4614-9fed-1e97afbb09ba",
        "d333a5ad-c98c-4beb-961f-31d75cbe2333",
        "53d1c9ee-38b9-48f0-8836-271018313980",
      ],
      bottom: "071ec4cb-df32-40d7-8c71-51b47d5b39d3",
      left: "691dda78-ddf6-4bb7-a5e7-c8b0fabcf0e4",
      top: "e44ad1a3-2e44-4f47-a645-8df373dda54f",
      area: "AsiaCave",
    },
    {
      id: "1390c323-2cb8-43b2-9a6f-22c057362941",
      name: "TreasureField",
      position: {
        x: -400,
        y: -840,
      },
      edges: [
        "caaa24b2-d7d7-41d6-885d-84401350d65b",
        "2f942774-4d96-4e73-ac72-5ddcab47bc86",
      ],
      left: "071ec4cb-df32-40d7-8c71-51b47d5b39d3",
      right: "fc013634-07b0-462a-918a-98e75602d093",
      area: "AsiaCave",
    },
    {
      id: "fc013634-07b0-462a-918a-98e75602d093",
      name: "BattleField",
      position: {
        x: -100,
        y: -920,
      },
      edges: [
        "2f942774-4d96-4e73-ac72-5ddcab47bc86",
        "0cc6523a-9f79-499f-b256-c2222ad1e687",
      ],
      left: "1390c323-2cb8-43b2-9a6f-22c057362941",
      bottom: "33a8e628-6973-4a3c-836c-0825ae64b5de",
      area: "AsiaCave",
    },
    {
      id: "691dda78-ddf6-4bb7-a5e7-c8b0fabcf0e4",
      name: "MagicField",
      position: {
        x: -1120,
        y: -1020,
      },
      edges: [
        "d333a5ad-c98c-4beb-961f-31d75cbe2333",
        "bea8f9b9-9315-4116-abb5-11d766ff769a",
      ],
      right: "a8295ebd-6cbd-4ab4-a053-369af0fb6b9b",
      bottom: "abef418f-ba6b-4a39-b5c2-09157b9ac835",
      area: "AsiaCave",
    },
    {
      id: "abef418f-ba6b-4a39-b5c2-09157b9ac835",
      name: "TreasureField",
      position: {
        x: -1120,
        y: -560,
      },
      edges: [
        "bea8f9b9-9315-4116-abb5-11d766ff769a",
        "2736f5d7-0e10-40f4-9012-4adc93267e56",
      ],
      top: "691dda78-ddf6-4bb7-a5e7-c8b0fabcf0e4",
      right: "baab1283-747b-4b27-91ef-17cf92a01d50",
      area: "AsiaCave",
    },
    {
      id: "e44ad1a3-2e44-4f47-a645-8df373dda54f",
      name: "BattleField",
      position: {
        x: -460,
        y: -1480,
      },
      edges: [
        "53d1c9ee-38b9-48f0-8836-271018313980",
        "6a67f900-b5ed-4283-a84a-517d41445802",
      ],
      bottom: "a8295ebd-6cbd-4ab4-a053-369af0fb6b9b",
      top: "2a382445-e1b8-489c-8ba8-c3b354876ffb",
      area: "AsiaCave",
    },
    {
      id: "2a382445-e1b8-489c-8ba8-c3b354876ffb",
      name: "MagicField",
      position: {
        x: -200,
        y: -1800,
      },
      edges: [
        "6a67f900-b5ed-4283-a84a-517d41445802",
        "401bfaa5-834b-4d87-954e-b8879bf32262",
      ],
      bottom: "e44ad1a3-2e44-4f47-a645-8df373dda54f",
      right: "96d48886-c57c-49e2-afd1-f18e35181020",
      area: "AsiaCave",
    },
    {
      id: "96d48886-c57c-49e2-afd1-f18e35181020",
      name: "BattleField",
      position: {
        x: 260,
        y: -1800,
      },
      edges: [
        "401bfaa5-834b-4d87-954e-b8879bf32262",
        "45308b76-773b-4f6d-bdcc-bb23a5e0da9e",
        "970ff875-638c-4789-a71a-7e3ad9e2d9a3",
      ],
      left: "2a382445-e1b8-489c-8ba8-c3b354876ffb",
      right: "8d099a23-17ad-40e6-8887-24fd91ddf10c",
      top: "0cbed1d0-a8bb-4ead-a2a4-998a9b132fcc",
      area: "AsiaCave",
    },
    {
      id: "8d099a23-17ad-40e6-8887-24fd91ddf10c",
      name: "BattleField",
      position: {
        x: 940,
        y: -1800,
      },
      edges: [
        "45308b76-773b-4f6d-bdcc-bb23a5e0da9e",
        "687ded39-d833-4de6-99c5-d60757aab27a",
        "e59fb085-4974-4435-af7e-6595b74915e4",
      ],
      left: "96d48886-c57c-49e2-afd1-f18e35181020",
      bottom: "cc8549d8-bcd0-4f07-b73e-853477586e15",
      top: "6f5258d9-2e55-44c2-9318-209fded8353d",
      area: "AsiaCave",
    },
    {
      id: "cc8549d8-bcd0-4f07-b73e-853477586e15",
      name: "KeyTreasureField",
      position: {
        x: 900,
        y: -1440,
      },
      edges: ["687ded39-d833-4de6-99c5-d60757aab27a"],
      top: "8d099a23-17ad-40e6-8887-24fd91ddf10c",
      area: "AsiaCave",
    },
    {
      id: "0cbed1d0-a8bb-4ead-a2a4-998a9b132fcc",
      name: "TreasureField",
      position: {
        x: 320,
        y: -2180,
      },
      edges: [
        "970ff875-638c-4789-a71a-7e3ad9e2d9a3",
        "4b402d27-9a8c-4ca5-ae8c-70f11000937b",
      ],
      bottom: "96d48886-c57c-49e2-afd1-f18e35181020",
      right: "6f5258d9-2e55-44c2-9318-209fded8353d",
      area: "AsiaCave",
    },
    {
      id: "6f5258d9-2e55-44c2-9318-209fded8353d",
      name: "BattleField",
      position: {
        x: 880,
        y: -2200,
      },
      edges: [
        "4b402d27-9a8c-4ca5-ae8c-70f11000937b",
        "e59fb085-4974-4435-af7e-6595b74915e4",
        "5146f758-df38-411f-88d8-4b2dcdbfa42b",
      ],
      left: "0cbed1d0-a8bb-4ead-a2a4-998a9b132fcc",
      bottom: "8d099a23-17ad-40e6-8887-24fd91ddf10c",
      top: "4c079e16-bac3-407f-b4b6-dd6eeff6a636",
      area: "AsiaCave",
    },
    {
      id: "4c079e16-bac3-407f-b4b6-dd6eeff6a636",
      name: "BattleField",
      position: {
        x: 980,
        y: -2580,
      },
      edges: [
        "5146f758-df38-411f-88d8-4b2dcdbfa42b",
        "3a1c8888-30b0-4ffd-b0c4-055a8bf8d2a0",
      ],
      bottom: "6f5258d9-2e55-44c2-9318-209fded8353d",
      left: "18e0c388-5332-48a3-9659-949b0b92e1b1",
      area: "AsiaCave",
    },
    {
      id: "18e0c388-5332-48a3-9659-949b0b92e1b1",
      name: "BattleField",
      position: {
        x: 580,
        y: -2600,
      },
      edges: [
        "3a1c8888-30b0-4ffd-b0c4-055a8bf8d2a0",
        "649077d1-dcca-47f8-9a76-03e6cdb866a4",
        "1db19776-2d40-4e2b-9324-7f667b04ee93",
      ],
      right: "4c079e16-bac3-407f-b4b6-dd6eeff6a636",
      left: "630cbc1e-7864-4d28-bd3d-c81727674a8d",
      top: "732a7154-01cd-402b-8f65-29f2d672b28d",
      area: "AsiaCave",
    },
    {
      id: "630cbc1e-7864-4d28-bd3d-c81727674a8d",
      name: "TreasureField",
      position: {
        x: 180,
        y: -2560,
      },
      edges: [
        "649077d1-dcca-47f8-9a76-03e6cdb866a4",
        "323be978-048f-4c86-a76f-8ca8e9b43915",
      ],
      right: "18e0c388-5332-48a3-9659-949b0b92e1b1",
      left: "47f084a4-ece4-4718-b440-c92df51a44ca",
      area: "AsiaCave",
    },
    {
      id: "47f084a4-ece4-4718-b440-c92df51a44ca",
      name: "BattleField",
      position: {
        x: -220,
        y: -2600,
      },
      edges: [
        "323be978-048f-4c86-a76f-8ca8e9b43915",
        "08e4eb5e-df54-4779-9a72-7148de8620e3",
      ],
      right: "630cbc1e-7864-4d28-bd3d-c81727674a8d",
      top: "2ba5a357-2e07-48ed-8e14-730d320856c3",
      area: "AsiaCave",
    },
    {
      id: "2ba5a357-2e07-48ed-8e14-730d320856c3",
      name: "BattleField",
      position: {
        x: -180,
        y: -2960,
      },
      edges: [
        "08e4eb5e-df54-4779-9a72-7148de8620e3",
        "b144c4bd-d9ee-4bac-9ae2-371214ee7883",
      ],
      bottom: "47f084a4-ece4-4718-b440-c92df51a44ca",
      right: "732a7154-01cd-402b-8f65-29f2d672b28d",
      area: "AsiaCave",
    },
    {
      id: "732a7154-01cd-402b-8f65-29f2d672b28d",
      name: "TreasureField",
      position: {
        x: 520,
        y: -2960,
      },
      edges: [
        "b144c4bd-d9ee-4bac-9ae2-371214ee7883",
        "1db19776-2d40-4e2b-9324-7f667b04ee93",
        "2a2445a1-2cea-4ae6-9017-135dbd8499e8",
      ],
      left: "2ba5a357-2e07-48ed-8e14-730d320856c3",
      bottom: "18e0c388-5332-48a3-9659-949b0b92e1b1",
      top: "14f0d94c-3606-4a90-8d4a-60728cc187c6",
      area: "AsiaCave",
    },
    {
      id: "14f0d94c-3606-4a90-8d4a-60728cc187c6",
      name: "BattleField",
      position: {
        x: 480,
        y: -3300,
      },
      edges: [
        "2a2445a1-2cea-4ae6-9017-135dbd8499e8",
        "ea2cc906-0408-431f-b8ef-1d6413470ec0",
      ],
      bottom: "732a7154-01cd-402b-8f65-29f2d672b28d",
      top: "e6fb388b-f218-4e4b-af4c-47d1b33873c4",
      area: "AsiaCave",
    },
    {
      id: "e6fb388b-f218-4e4b-af4c-47d1b33873c4",
      name: "BattleField",
      position: {
        x: 540,
        y: -3640,
      },
      edges: ["ea2cc906-0408-431f-b8ef-1d6413470ec0"],
      bottom: "14f0d94c-3606-4a90-8d4a-60728cc187c6",
      area: "AsiaCave",
    },
    {
      id: "512a89c6-af22-4a10-ab77-66a54ecca026",
      name: "BattleField",
      position: {
        x: 560,
        y: -520,
      },
      edges: [
        "74cb959f-3bbe-4693-8702-b701fd0e0bcd",
        "4af89963-0489-41bc-ada0-2d4cfce8ad23",
        "80cb94c6-33c4-487e-8af2-54b06b1d6ba7",
      ],
      left: "33a8e628-6973-4a3c-836c-0825ae64b5de",
      bottom: "f057bbf6-d5e4-42c4-8b0d-b730d85ef3a3",
      right: "79c16d63-ce1e-4fb5-a540-f9cd4c36cc07",
    },
  ],
  edges: [
    {
      start: {
        x: 520,
        y: -160,
      },
      startId: "f057bbf6-d5e4-42c4-8b0d-b730d85ef3a3",
      end: {
        x: 460,
        y: 240,
      },
      endId: "2956660d-ff8a-4712-b718-fc8df8e6dc8d",
      name: "TwoWayVEdge",
      id: "2fe38931-65d6-4a8a-bb95-408280bf2c6b",
    },
    {
      start: {
        x: 520,
        y: -160,
      },
      startId: "f057bbf6-d5e4-42c4-8b0d-b730d85ef3a3",
      end: {
        x: 1320,
        y: -200,
      },
      endId: "c47cef6e-c298-4591-ad42-41d9ac621087",
      name: "TwoWayHEdge",
      id: "3a9adaa6-4466-404a-9771-e68459b0b514",
    },
    {
      start: {
        x: 1000,
        y: -560,
      },
      startId: "79c16d63-ce1e-4fb5-a540-f9cd4c36cc07",
      end: {
        x: 1440,
        y: -600,
      },
      endId: "dc7a735d-72b0-4db6-bbb4-45704206f17d",
      name: "TwoWayHEdge",
      id: "397a960e-6a15-40a9-bfaa-74224cbdad1f",
    },
    {
      start: {
        x: 1320,
        y: -200,
      },
      startId: "c47cef6e-c298-4591-ad42-41d9ac621087",
      end: {
        x: 1440,
        y: -600,
      },
      endId: "dc7a735d-72b0-4db6-bbb4-45704206f17d",
      name: "TwoWayVEdge",
      id: "22fbad6b-bd10-4389-af19-4c8b869777d8",
    },
    {
      start: {
        x: 1440,
        y: -600,
      },
      startId: "dc7a735d-72b0-4db6-bbb4-45704206f17d",
      end: {
        x: 1860,
        y: -580,
      },
      endId: "7f373321-29ef-4048-9f26-0978398a9e31",
      name: "TwoWayHEdge",
      id: "22c60682-6de7-44b2-a211-467466156b65",
    },
    {
      start: {
        x: 1860,
        y: -580,
      },
      startId: "7f373321-29ef-4048-9f26-0978398a9e31",
      end: {
        x: 1800,
        y: -1180,
      },
      endId: "4238fa06-fc0a-4ffd-89cb-34285f9a2627",
      name: "TwoWayVEdge",
      id: "b438df76-be89-4462-a1f8-9bd35046a56c",
    },
    {
      start: {
        x: 1800,
        y: -1180,
      },
      startId: "4238fa06-fc0a-4ffd-89cb-34285f9a2627",
      end: {
        x: 2240,
        y: -1200,
      },
      endId: "2e8fcd99-3c50-43d5-94e4-90bc1df9ca08",
      name: "TwoWayHEdge",
      id: "0dcb2bae-1663-4a97-9d9e-6e3d240ea9f4",
    },
    {
      start: {
        x: 2240,
        y: -1200,
      },
      startId: "2e8fcd99-3c50-43d5-94e4-90bc1df9ca08",
      end: {
        x: 2140,
        y: -900,
      },
      endId: "180ac457-b075-4e8d-99bb-1c4f53a6fa24",
      name: "TwoWayVEdge",
      id: "f210a251-fd43-46fc-9de3-dbbba717ae45",
    },
    {
      start: {
        x: 2140,
        y: -900,
      },
      startId: "180ac457-b075-4e8d-99bb-1c4f53a6fa24",
      end: {
        x: 2240,
        y: -540,
      },
      endId: "b39da1ab-e612-4b14-aefd-54336927cf3e",
      name: "TwoWayVEdge",
      id: "668d091c-17a5-4d2e-b0c5-ecd19da02f1c",
    },
    {
      start: {
        x: 1860,
        y: -580,
      },
      startId: "7f373321-29ef-4048-9f26-0978398a9e31",
      end: {
        x: 2240,
        y: -540,
      },
      endId: "b39da1ab-e612-4b14-aefd-54336927cf3e",
      name: "TwoWayHEdge",
      id: "90f813bf-87d3-49ca-a103-9e843b660edf",
    },
    {
      start: {
        x: 1320,
        y: -200,
      },
      startId: "c47cef6e-c298-4591-ad42-41d9ac621087",
      end: {
        x: 1860,
        y: -160,
      },
      endId: "b2520dd7-37db-428f-8afa-bc59f20e7d00",
      name: "TwoWayHEdge",
      id: "d057aad8-1ccf-4f84-a3a6-77e22693b188",
    },
    {
      start: {
        x: 2240,
        y: -540,
      },
      startId: "b39da1ab-e612-4b14-aefd-54336927cf3e",
      end: {
        x: 2700,
        y: -500,
      },
      endId: "9d03b8af-d1c1-4977-b4e9-c7b9218d399b",
      name: "TwoWayHEdge",
      id: "f1608e95-9e12-4a83-963f-03c89e5ca3e1",
    },
    {
      start: {
        x: 2700,
        y: -500,
      },
      startId: "9d03b8af-d1c1-4977-b4e9-c7b9218d399b",
      end: {
        x: 2700,
        y: -120,
      },
      endId: "97f967f0-8985-43a9-90da-b1401b7529c5",
      name: "TwoWayVEdge",
      id: "0112d425-e178-4e5c-a217-29adc787ee9d",
    },
    {
      start: {
        x: 1860,
        y: -160,
      },
      startId: "b2520dd7-37db-428f-8afa-bc59f20e7d00",
      end: {
        x: 2240,
        y: -120,
      },
      endId: "e29d519b-ee0f-4afd-ac63-996a8772aaeb",
      name: "TwoWayHEdge",
      id: "4a0958a8-28d3-45f5-a0c9-edf5cd58edbd",
    },
    {
      start: {
        x: 2240,
        y: -120,
      },
      startId: "e29d519b-ee0f-4afd-ac63-996a8772aaeb",
      end: {
        x: 2700,
        y: -120,
      },
      endId: "97f967f0-8985-43a9-90da-b1401b7529c5",
      name: "TwoWayHEdge",
      id: "e1be1b64-b76f-4e12-8e99-ed5f8ecd7784",
    },
    {
      start: {
        x: -40,
        y: -440,
      },
      startId: "33a8e628-6973-4a3c-836c-0825ae64b5de",
      end: {
        x: -660,
        y: -480,
      },
      endId: "baab1283-747b-4b27-91ef-17cf92a01d50",
      name: "TwoWayHEdge",
      id: "3511133f-ba40-46f1-a8aa-fdc9b1f23110",
    },
    {
      start: {
        x: -660,
        y: -480,
      },
      startId: "baab1283-747b-4b27-91ef-17cf92a01d50",
      end: {
        x: -700,
        y: -760,
      },
      endId: "071ec4cb-df32-40d7-8c71-51b47d5b39d3",
      name: "TwoWayVEdge",
      id: "d5063efb-09dc-4480-81d0-e0581b86e0a8",
    },
    {
      start: {
        x: -700,
        y: -760,
      },
      startId: "071ec4cb-df32-40d7-8c71-51b47d5b39d3",
      end: {
        x: -720,
        y: -1140,
      },
      endId: "a8295ebd-6cbd-4ab4-a053-369af0fb6b9b",
      name: "TwoWayVEdge",
      id: "6eb29d5e-447d-4614-9fed-1e97afbb09ba",
    },
    {
      start: {
        x: -700,
        y: -760,
      },
      startId: "071ec4cb-df32-40d7-8c71-51b47d5b39d3",
      end: {
        x: -400,
        y: -840,
      },
      endId: "1390c323-2cb8-43b2-9a6f-22c057362941",
      name: "TwoWayHEdge",
      id: "caaa24b2-d7d7-41d6-885d-84401350d65b",
    },
    {
      start: {
        x: -400,
        y: -840,
      },
      startId: "1390c323-2cb8-43b2-9a6f-22c057362941",
      end: {
        x: -100,
        y: -920,
      },
      endId: "fc013634-07b0-462a-918a-98e75602d093",
      name: "TwoWayHEdge",
      id: "2f942774-4d96-4e73-ac72-5ddcab47bc86",
    },
    {
      start: {
        x: -100,
        y: -920,
      },
      startId: "fc013634-07b0-462a-918a-98e75602d093",
      end: {
        x: -40,
        y: -440,
      },
      endId: "33a8e628-6973-4a3c-836c-0825ae64b5de",
      name: "TwoWayVEdge",
      id: "0cc6523a-9f79-499f-b256-c2222ad1e687",
    },
    {
      start: {
        x: -720,
        y: -1140,
      },
      startId: "a8295ebd-6cbd-4ab4-a053-369af0fb6b9b",
      end: {
        x: -1120,
        y: -1020,
      },
      endId: "691dda78-ddf6-4bb7-a5e7-c8b0fabcf0e4",
      name: "TwoWayHEdge",
      id: "d333a5ad-c98c-4beb-961f-31d75cbe2333",
    },
    {
      start: {
        x: -1120,
        y: -1020,
      },
      startId: "691dda78-ddf6-4bb7-a5e7-c8b0fabcf0e4",
      end: {
        x: -1120,
        y: -560,
      },
      endId: "abef418f-ba6b-4a39-b5c2-09157b9ac835",
      name: "TwoWayVEdge",
      id: "bea8f9b9-9315-4116-abb5-11d766ff769a",
    },
    {
      start: {
        x: -1120,
        y: -560,
      },
      startId: "abef418f-ba6b-4a39-b5c2-09157b9ac835",
      end: {
        x: -660,
        y: -480,
      },
      endId: "baab1283-747b-4b27-91ef-17cf92a01d50",
      name: "TwoWayHEdge",
      id: "2736f5d7-0e10-40f4-9012-4adc93267e56",
    },
    {
      start: {
        x: -720,
        y: -1140,
      },
      startId: "a8295ebd-6cbd-4ab4-a053-369af0fb6b9b",
      end: {
        x: -460,
        y: -1480,
      },
      endId: "e44ad1a3-2e44-4f47-a645-8df373dda54f",
      name: "TwoWayVEdge",
      id: "53d1c9ee-38b9-48f0-8836-271018313980",
    },
    {
      start: {
        x: -460,
        y: -1480,
      },
      startId: "e44ad1a3-2e44-4f47-a645-8df373dda54f",
      end: {
        x: -200,
        y: -1800,
      },
      endId: "2a382445-e1b8-489c-8ba8-c3b354876ffb",
      name: "TwoWayVEdge",
      id: "6a67f900-b5ed-4283-a84a-517d41445802",
    },
    {
      start: {
        x: -200,
        y: -1800,
      },
      startId: "2a382445-e1b8-489c-8ba8-c3b354876ffb",
      end: {
        x: 260,
        y: -1800,
      },
      endId: "96d48886-c57c-49e2-afd1-f18e35181020",
      name: "TwoWayHEdge",
      id: "401bfaa5-834b-4d87-954e-b8879bf32262",
    },
    {
      start: {
        x: 260,
        y: -1800,
      },
      startId: "96d48886-c57c-49e2-afd1-f18e35181020",
      end: {
        x: 940,
        y: -1800,
      },
      endId: "8d099a23-17ad-40e6-8887-24fd91ddf10c",
      name: "TwoWayHEdge",
      id: "45308b76-773b-4f6d-bdcc-bb23a5e0da9e",
    },
    {
      start: {
        x: 940,
        y: -1800,
      },
      startId: "8d099a23-17ad-40e6-8887-24fd91ddf10c",
      end: {
        x: 900,
        y: -1440,
      },
      endId: "cc8549d8-bcd0-4f07-b73e-853477586e15",
      name: "TwoWayVEdge",
      id: "687ded39-d833-4de6-99c5-d60757aab27a",
    },
    {
      start: {
        x: 260,
        y: -1800,
      },
      startId: "96d48886-c57c-49e2-afd1-f18e35181020",
      end: {
        x: 320,
        y: -2180,
      },
      endId: "0cbed1d0-a8bb-4ead-a2a4-998a9b132fcc",
      name: "TwoWayVEdge",
      id: "970ff875-638c-4789-a71a-7e3ad9e2d9a3",
    },
    {
      start: {
        x: 320,
        y: -2180,
      },
      startId: "0cbed1d0-a8bb-4ead-a2a4-998a9b132fcc",
      end: {
        x: 880,
        y: -2200,
      },
      endId: "6f5258d9-2e55-44c2-9318-209fded8353d",
      name: "TwoWayHEdge",
      id: "4b402d27-9a8c-4ca5-ae8c-70f11000937b",
    },
    {
      start: {
        x: 940,
        y: -1800,
      },
      startId: "8d099a23-17ad-40e6-8887-24fd91ddf10c",
      end: {
        x: 880,
        y: -2200,
      },
      endId: "6f5258d9-2e55-44c2-9318-209fded8353d",
      name: "TwoWayVEdge",
      id: "e59fb085-4974-4435-af7e-6595b74915e4",
    },
    {
      start: {
        x: 880,
        y: -2200,
      },
      startId: "6f5258d9-2e55-44c2-9318-209fded8353d",
      end: {
        x: 980,
        y: -2580,
      },
      endId: "4c079e16-bac3-407f-b4b6-dd6eeff6a636",
      name: "TwoWayVEdge",
      id: "5146f758-df38-411f-88d8-4b2dcdbfa42b",
    },
    {
      start: {
        x: 980,
        y: -2580,
      },
      startId: "4c079e16-bac3-407f-b4b6-dd6eeff6a636",
      end: {
        x: 580,
        y: -2600,
      },
      endId: "18e0c388-5332-48a3-9659-949b0b92e1b1",
      name: "TwoWayHEdge",
      id: "3a1c8888-30b0-4ffd-b0c4-055a8bf8d2a0",
    },
    {
      start: {
        x: 580,
        y: -2600,
      },
      startId: "18e0c388-5332-48a3-9659-949b0b92e1b1",
      end: {
        x: 180,
        y: -2560,
      },
      endId: "630cbc1e-7864-4d28-bd3d-c81727674a8d",
      name: "TwoWayHEdge",
      id: "649077d1-dcca-47f8-9a76-03e6cdb866a4",
    },
    {
      start: {
        x: 180,
        y: -2560,
      },
      startId: "630cbc1e-7864-4d28-bd3d-c81727674a8d",
      end: {
        x: -220,
        y: -2600,
      },
      endId: "47f084a4-ece4-4718-b440-c92df51a44ca",
      name: "TwoWayHEdge",
      id: "323be978-048f-4c86-a76f-8ca8e9b43915",
    },
    {
      start: {
        x: -220,
        y: -2600,
      },
      startId: "47f084a4-ece4-4718-b440-c92df51a44ca",
      end: {
        x: -180,
        y: -2960,
      },
      endId: "2ba5a357-2e07-48ed-8e14-730d320856c3",
      name: "TwoWayVEdge",
      id: "08e4eb5e-df54-4779-9a72-7148de8620e3",
    },
    {
      start: {
        x: -180,
        y: -2960,
      },
      startId: "2ba5a357-2e07-48ed-8e14-730d320856c3",
      end: {
        x: 520,
        y: -2960,
      },
      endId: "732a7154-01cd-402b-8f65-29f2d672b28d",
      name: "TwoWayHEdge",
      id: "b144c4bd-d9ee-4bac-9ae2-371214ee7883",
    },
    {
      start: {
        x: 580,
        y: -2600,
      },
      startId: "18e0c388-5332-48a3-9659-949b0b92e1b1",
      end: {
        x: 520,
        y: -2960,
      },
      endId: "732a7154-01cd-402b-8f65-29f2d672b28d",
      name: "TwoWayVEdge",
      id: "1db19776-2d40-4e2b-9324-7f667b04ee93",
    },
    {
      start: {
        x: 520,
        y: -2960,
      },
      startId: "732a7154-01cd-402b-8f65-29f2d672b28d",
      end: {
        x: 480,
        y: -3300,
      },
      endId: "14f0d94c-3606-4a90-8d4a-60728cc187c6",
      name: "TwoWayVEdge",
      id: "2a2445a1-2cea-4ae6-9017-135dbd8499e8",
    },
    {
      start: {
        x: 480,
        y: -3300,
      },
      startId: "14f0d94c-3606-4a90-8d4a-60728cc187c6",
      end: {
        x: 540,
        y: -3640,
      },
      endId: "e6fb388b-f218-4e4b-af4c-47d1b33873c4",
      name: "TwoWayVEdge",
      id: "ea2cc906-0408-431f-b8ef-1d6413470ec0",
    },
    {
      start: {
        x: -40,
        y: -440,
      },
      startId: "33a8e628-6973-4a3c-836c-0825ae64b5de",
      end: {
        x: 560,
        y: -520,
      },
      endId: "512a89c6-af22-4a10-ab77-66a54ecca026",
      name: "TwoWayHEdge",
      id: "74cb959f-3bbe-4693-8702-b701fd0e0bcd",
    },
    {
      start: {
        x: 560,
        y: -520,
      },
      startId: "512a89c6-af22-4a10-ab77-66a54ecca026",
      end: {
        x: 520,
        y: -160,
      },
      endId: "f057bbf6-d5e4-42c4-8b0d-b730d85ef3a3",
      name: "TwoWayVEdge",
      id: "4af89963-0489-41bc-ada0-2d4cfce8ad23",
    },
    {
      start: {
        x: 560,
        y: -520,
      },
      startId: "512a89c6-af22-4a10-ab77-66a54ecca026",
      end: {
        x: 1000,
        y: -560,
      },
      endId: "79c16d63-ce1e-4fb5-a540-f9cd4c36cc07",
      name: "TwoWayHEdge",
      id: "80cb94c6-33c4-487e-8af2-54b06b1d6ba7",
    },
  ],
};
export default asiaCave;
