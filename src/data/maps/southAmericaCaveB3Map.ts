import type { GraphJSON } from "global";

const southAmericaCaveB3Map: GraphJSON = {
  vertices: [
    {
      area: "SouthAmericaCaveB3",
      position: {
        x: 7780,
        y: 5560,
      },
      name: "BattleField",
      id: "a597c1a0-7214-4ce8-8e20-f7c224e1ea9a",
      edges: [
        "abf41a25-f037-45a1-b955-580d49c4fbbd",
        "83dfa5e2-b3a0-4e38-8f71-2fed461f6c74",
      ],
      left: "319a3d44-9ce9-42da-9849-b2bbb90f0cc8",
      right: "382e3fb2-03a2-425a-9df8-89ea519a2f71",
    },
    {
      id: "382e3fb2-03a2-425a-9df8-89ea519a2f71",
      area: "SouthAmericaCaveB3",
      name: "CaveField",
      position: {
        x: 8340,
        y: 5560,
      },
      edges: ["83dfa5e2-b3a0-4e38-8f71-2fed461f6c74"],
      left: "a597c1a0-7214-4ce8-8e20-f7c224e1ea9a",
    },
    {
      id: "319a3d44-9ce9-42da-9849-b2bbb90f0cc8",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 7200,
        y: 5560,
      },
      edges: [
        "abf41a25-f037-45a1-b955-580d49c4fbbd",
        "c7bffce1-3a6a-4d7d-8c5c-b7b7a6bd8bda",
      ],
      right: "a597c1a0-7214-4ce8-8e20-f7c224e1ea9a",
      top: "e460c672-5ae8-4f68-ba67-7a339f7570f6",
    },
    {
      id: "e460c672-5ae8-4f68-ba67-7a339f7570f6",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 7240,
        y: 5000,
      },
      edges: [
        "c7bffce1-3a6a-4d7d-8c5c-b7b7a6bd8bda",
        "cea56222-fd89-43bb-89a7-1f527df51f28",
      ],
      bottom: "319a3d44-9ce9-42da-9849-b2bbb90f0cc8",
      top: "ea894272-44c8-45da-b156-2041e90d68c2",
    },
    {
      id: "ea894272-44c8-45da-b156-2041e90d68c2",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 7200,
        y: 4460,
      },
      edges: [
        "cea56222-fd89-43bb-89a7-1f527df51f28",
        "1c5519c2-8e07-41cd-bfb1-e318e49b67f4",
        "9e7cb60a-39d6-4c9c-b75d-e8ec7a0b82a9",
      ],
      bottom: "e460c672-5ae8-4f68-ba67-7a339f7570f6",
      right: "075516ad-dd24-47a4-9450-2365a65c63ac",
      top: "07980ad3-9b68-4a68-9d7e-f6c4abec1b8e",
    },
    {
      id: "075516ad-dd24-47a4-9450-2365a65c63ac",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 7700,
        y: 4520,
      },
      edges: [
        "1c5519c2-8e07-41cd-bfb1-e318e49b67f4",
        "1a47b0ad-7b1c-4853-a62a-1bea7e2895cc",
      ],
      left: "ea894272-44c8-45da-b156-2041e90d68c2",
      top: "17e7af9c-2767-436e-824e-5324f0b688bd",
    },
    {
      id: "07980ad3-9b68-4a68-9d7e-f6c4abec1b8e",
      area: "SouthAmericaCaveB3",
      name: "MagicBookField",
      position: {
        x: 7200,
        y: 3600,
      },
      edges: [
        "9e7cb60a-39d6-4c9c-b75d-e8ec7a0b82a9",
        "06799621-ab39-4d26-8ac5-2e3f36a262c7",
        "46cd1e89-7cf1-4211-83e0-48957d894e3d",
      ],
      bottom: "ea894272-44c8-45da-b156-2041e90d68c2",
      right: "fef9325e-54a2-4faf-a987-66b007ffb3c1",
      left: "727cc2d7-dc41-4fdc-9620-35f0a886b63d",
    },
    {
      id: "fef9325e-54a2-4faf-a987-66b007ffb3c1",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 7680,
        y: 3560,
      },
      edges: [
        "06799621-ab39-4d26-8ac5-2e3f36a262c7",
        "3292be8b-bc67-47e9-b235-1bb0019c9561",
        "7c917015-1fda-4386-a77c-fb886dad2f3c",
      ],
      left: "07980ad3-9b68-4a68-9d7e-f6c4abec1b8e",
      bottom: "17e7af9c-2767-436e-824e-5324f0b688bd",
      right: "4203d247-8801-41a5-93bc-9076d4b889ab",
    },
    {
      id: "17e7af9c-2767-436e-824e-5324f0b688bd",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 7760,
        y: 4020,
      },
      edges: [
        "3292be8b-bc67-47e9-b235-1bb0019c9561",
        "1a47b0ad-7b1c-4853-a62a-1bea7e2895cc",
      ],
      top: "fef9325e-54a2-4faf-a987-66b007ffb3c1",
      bottom: "075516ad-dd24-47a4-9450-2365a65c63ac",
    },
    {
      id: "4203d247-8801-41a5-93bc-9076d4b889ab",
      area: "SouthAmericaCaveB3",
      name: "RedTreasureField",
      position: {
        x: 8340,
        y: 3600,
      },
      edges: [
        "7c917015-1fda-4386-a77c-fb886dad2f3c",
        "c4db0b75-ac71-429c-ab0f-8bde34a925a8",
      ],
      left: "fef9325e-54a2-4faf-a987-66b007ffb3c1",
      top: "0a05eb93-5682-433a-8220-42e63c633a47",
    },
    {
      id: "0a05eb93-5682-433a-8220-42e63c633a47",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 8340,
        y: 3120,
      },
      edges: [
        "c4db0b75-ac71-429c-ab0f-8bde34a925a8",
        "179c4cfc-1938-4208-b9a5-26c5d92cc7fc",
      ],
      bottom: "4203d247-8801-41a5-93bc-9076d4b889ab",
      left: "ccadaff2-9362-4e32-b50a-6202abf4b103",
    },
    {
      id: "ccadaff2-9362-4e32-b50a-6202abf4b103",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 7860,
        y: 3120,
      },
      edges: [
        "179c4cfc-1938-4208-b9a5-26c5d92cc7fc",
        "474bc18c-b17e-467d-8aa3-c481cd5073ab",
      ],
      right: "0a05eb93-5682-433a-8220-42e63c633a47",
      top: "27dc520d-fb8f-4811-9c1f-b1061766f2f7",
    },
    {
      id: "27dc520d-fb8f-4811-9c1f-b1061766f2f7",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 7860,
        y: 2540,
      },
      edges: [
        "474bc18c-b17e-467d-8aa3-c481cd5073ab",
        "851d6079-67d3-4137-af9f-b1d145c884fd",
      ],
      bottom: "ccadaff2-9362-4e32-b50a-6202abf4b103",
      top: "b4faf0a0-72c9-4ea3-8047-dd94a2acf848",
    },
    {
      id: "b4faf0a0-72c9-4ea3-8047-dd94a2acf848",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 7860,
        y: 1940,
      },
      edges: [
        "851d6079-67d3-4137-af9f-b1d145c884fd",
        "d8c1fc0c-0e4b-4190-a8a3-3374c751e737",
      ],
      bottom: "27dc520d-fb8f-4811-9c1f-b1061766f2f7",
      top: "742a1d2e-a066-4a88-8a30-d4865183bc3f",
    },
    {
      id: "742a1d2e-a066-4a88-8a30-d4865183bc3f",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 7860,
        y: 1400,
      },
      edges: [
        "d8c1fc0c-0e4b-4190-a8a3-3374c751e737",
        "62592f33-f2cd-4635-92be-22acbb969f37",
      ],
      bottom: "b4faf0a0-72c9-4ea3-8047-dd94a2acf848",
      top: "984fedc8-5d13-408a-8029-d3f737fb902f",
    },
    {
      id: "984fedc8-5d13-408a-8029-d3f737fb902f",
      area: "SouthAmericaCaveB3",
      name: "RedTreasureField",
      position: {
        x: 7860,
        y: 820,
      },
      edges: [
        "62592f33-f2cd-4635-92be-22acbb969f37",
        "59108a6b-00eb-45d8-b989-5862887a45c4",
      ],
      bottom: "742a1d2e-a066-4a88-8a30-d4865183bc3f",
      top: "b96a78b5-505a-4567-9c64-7013936ae1c6",
    },
    {
      id: "b96a78b5-505a-4567-9c64-7013936ae1c6",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 7860,
        y: 260,
      },
      edges: ["59108a6b-00eb-45d8-b989-5862887a45c4"],
      bottom: "984fedc8-5d13-408a-8029-d3f737fb902f",
    },
    {
      id: "727cc2d7-dc41-4fdc-9620-35f0a886b63d",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 6140,
        y: 3520,
      },
      edges: [
        "46cd1e89-7cf1-4211-83e0-48957d894e3d",
        "772fc61b-30af-4b1b-b736-2cad5b192dd2",
      ],
      right: "07980ad3-9b68-4a68-9d7e-f6c4abec1b8e",
      bottom: "31d14044-797a-43ac-abb3-4d9879b81680",
    },
    {
      id: "31d14044-797a-43ac-abb3-4d9879b81680",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 6020,
        y: 4000,
      },
      edges: [
        "772fc61b-30af-4b1b-b736-2cad5b192dd2",
        "67a8a89b-8e55-4764-84d8-c1d0d015a22c",
      ],
      top: "727cc2d7-dc41-4fdc-9620-35f0a886b63d",
      left: "ddec5024-c604-41c5-aa55-191d1949aa15",
    },
    {
      id: "ddec5024-c604-41c5-aa55-191d1949aa15",
      area: "SouthAmericaCaveB3",
      name: "RedTreasureField",
      position: {
        x: 5440,
        y: 3960,
      },
      edges: [
        "67a8a89b-8e55-4764-84d8-c1d0d015a22c",
        "18e4b527-5d53-488b-a5fb-3b47db7ea676",
        "124118bb-938e-4644-ae01-a249a98aae63",
      ],
      right: "31d14044-797a-43ac-abb3-4d9879b81680",
      top: "0ba42ba2-1e75-4bd3-bab8-a7ce47a416cc",
      left: "75d7d667-2084-4505-977b-9ee3efedf9a9",
    },
    {
      id: "0ba42ba2-1e75-4bd3-bab8-a7ce47a416cc",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 5580,
        y: 3460,
      },
      edges: [
        "18e4b527-5d53-488b-a5fb-3b47db7ea676",
        "07028975-e211-4eda-b6b1-38dc193998a5",
      ],
      bottom: "ddec5024-c604-41c5-aa55-191d1949aa15",
      left: "c8f2eb0b-f30c-40a1-98ed-c9a92e7647fa",
    },
    {
      id: "75d7d667-2084-4505-977b-9ee3efedf9a9",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 4880,
        y: 3980,
      },
      edges: [
        "124118bb-938e-4644-ae01-a249a98aae63",
        "8c084fc8-d8b3-4f84-9ea9-30b1676681cd",
      ],
      right: "ddec5024-c604-41c5-aa55-191d1949aa15",
      left: "c26495f1-f58d-431b-b4af-2c714ab66344",
    },
    {
      id: "c26495f1-f58d-431b-b4af-2c714ab66344",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 3900,
        y: 3940,
      },
      edges: [
        "8c084fc8-d8b3-4f84-9ea9-30b1676681cd",
        "f90f380e-f33c-4420-8fab-a26b77ec9b7d",
        "0fc4d934-96e7-4c69-a8ac-51efb96ec36c",
      ],
      right: "75d7d667-2084-4505-977b-9ee3efedf9a9",
      top: "20d8be4e-b7ae-44d7-ab18-da6e70418700",
      left: "026bce83-3573-4c33-82bc-72b57db4eb58",
    },
    {
      id: "20d8be4e-b7ae-44d7-ab18-da6e70418700",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 3960,
        y: 3420,
      },
      edges: [
        "f90f380e-f33c-4420-8fab-a26b77ec9b7d",
        "80a82a52-0722-4282-b808-122da6bf3291",
      ],
      bottom: "c26495f1-f58d-431b-b4af-2c714ab66344",
      right: "3d71de7d-a6a5-412c-88ea-5030d8fcc1b1",
    },
    {
      id: "3d71de7d-a6a5-412c-88ea-5030d8fcc1b1",
      area: "SouthAmericaCaveB3",
      name: "RedTreasureField",
      position: {
        x: 4520,
        y: 3500,
      },
      edges: [
        "80a82a52-0722-4282-b808-122da6bf3291",
        "45bd8be6-7169-48c2-b085-becc001da088",
      ],
      left: "20d8be4e-b7ae-44d7-ab18-da6e70418700",
      right: "c8f2eb0b-f30c-40a1-98ed-c9a92e7647fa",
    },
    {
      id: "c8f2eb0b-f30c-40a1-98ed-c9a92e7647fa",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 5080,
        y: 3440,
      },
      edges: [
        "45bd8be6-7169-48c2-b085-becc001da088",
        "07028975-e211-4eda-b6b1-38dc193998a5",
        "974faa97-2026-486b-b341-8856b60567e1",
      ],
      left: "3d71de7d-a6a5-412c-88ea-5030d8fcc1b1",
      right: "0ba42ba2-1e75-4bd3-bab8-a7ce47a416cc",
      top: "a7ebd515-d894-4bbe-82cc-6a8e4d94490b",
    },
    {
      id: "a7ebd515-d894-4bbe-82cc-6a8e4d94490b",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 5120,
        y: 2940,
      },
      edges: [
        "974faa97-2026-486b-b341-8856b60567e1",
        "79127549-f01d-49e9-abbc-597a855778ad",
      ],
      bottom: "c8f2eb0b-f30c-40a1-98ed-c9a92e7647fa",
      top: "9b6f2954-5229-4efe-bbf4-850861c5b10a",
    },
    {
      id: "9b6f2954-5229-4efe-bbf4-850861c5b10a",
      area: "SouthAmericaCaveB3",
      name: "GoldTreasureField",
      position: {
        x: 5080,
        y: 2480,
      },
      edges: [
        "79127549-f01d-49e9-abbc-597a855778ad",
        "7221b2a7-d92c-4868-bccb-dcd7295e6892",
      ],
      bottom: "a7ebd515-d894-4bbe-82cc-6a8e4d94490b",
      top: "88d2fd3c-56b9-4fb8-8a6c-6f83ab82b3fd",
    },
    {
      id: "88d2fd3c-56b9-4fb8-8a6c-6f83ab82b3fd",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 5020,
        y: 1900,
      },
      edges: [
        "7221b2a7-d92c-4868-bccb-dcd7295e6892",
        "f06164e7-8912-4cd1-a707-a4a83adb4b75",
      ],
      bottom: "9b6f2954-5229-4efe-bbf4-850861c5b10a",
      top: "f41c8d59-1288-433d-aeb9-027eafbf6402",
    },
    {
      id: "f41c8d59-1288-433d-aeb9-027eafbf6402",
      area: "SouthAmericaCaveB3",
      name: "MagicBookField",
      position: {
        x: 5060,
        y: 1300,
      },
      edges: [
        "f06164e7-8912-4cd1-a707-a4a83adb4b75",
        "038e1191-0b46-4ed7-9c73-6739e00e68d6",
      ],
      bottom: "88d2fd3c-56b9-4fb8-8a6c-6f83ab82b3fd",
      top: "261c47f0-9f50-423b-8a32-bc73d71b6c30",
    },
    {
      id: "261c47f0-9f50-423b-8a32-bc73d71b6c30",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 5000,
        y: 760,
      },
      edges: [
        "038e1191-0b46-4ed7-9c73-6739e00e68d6",
        "7633b523-ca82-418e-aa67-bb4f66951874",
      ],
      bottom: "f41c8d59-1288-433d-aeb9-027eafbf6402",
      top: "62c54bdb-f471-4be6-b282-d0fa7f28dd02",
    },
    {
      id: "62c54bdb-f471-4be6-b282-d0fa7f28dd02",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 5080,
        y: 200,
      },
      edges: ["7633b523-ca82-418e-aa67-bb4f66951874"],
      bottom: "261c47f0-9f50-423b-8a32-bc73d71b6c30",
    },
    {
      id: "026bce83-3573-4c33-82bc-72b57db4eb58",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 2440,
        y: 3980,
      },
      edges: [
        "0fc4d934-96e7-4c69-a8ac-51efb96ec36c",
        "8c9146d9-7a78-4369-b9c2-532f414a3adf",
        "b6117fd2-d706-4c89-9f81-060232c2d967",
      ],
      right: "c26495f1-f58d-431b-b4af-2c714ab66344",
      top: "a9d97e2e-cf8c-4558-b4c2-3838531c1624",
      left: "9bc1b108-53c2-48ed-a75b-d320f1d4b345",
    },
    {
      id: "a9d97e2e-cf8c-4558-b4c2-3838531c1624",
      area: "SouthAmericaCaveB3",
      name: "GoldTreasureField",
      position: {
        x: 2520,
        y: 3520,
      },
      edges: [
        "8c9146d9-7a78-4369-b9c2-532f414a3adf",
        "a9cac88c-c5fa-4773-a93a-520c91f074c5",
      ],
      bottom: "026bce83-3573-4c33-82bc-72b57db4eb58",
      top: "6fd49bc2-d275-4b74-976c-612a4b53a8e1",
    },
    {
      id: "6fd49bc2-d275-4b74-976c-612a4b53a8e1",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 2460,
        y: 3020,
      },
      edges: [
        "a9cac88c-c5fa-4773-a93a-520c91f074c5",
        "3b61abeb-d84d-4955-99ec-4be390574087",
      ],
      bottom: "a9d97e2e-cf8c-4558-b4c2-3838531c1624",
      left: "20c4a558-f39b-43db-91b3-c7e776a4050d",
    },
    {
      id: "9bc1b108-53c2-48ed-a75b-d320f1d4b345",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 1840,
        y: 4000,
      },
      edges: [
        "b6117fd2-d706-4c89-9f81-060232c2d967",
        "b8a9df0f-6121-4047-9a0c-3552d670dbd0",
      ],
      right: "026bce83-3573-4c33-82bc-72b57db4eb58",
      left: "03bfc575-8282-4e35-aeaa-7c781eed3aa4",
    },
    {
      id: "03bfc575-8282-4e35-aeaa-7c781eed3aa4",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 1260,
        y: 3960,
      },
      edges: [
        "b8a9df0f-6121-4047-9a0c-3552d670dbd0",
        "f4f0e12f-dd7e-4ce5-b25a-936408dc7a76",
        "136182d6-689c-42c8-ad37-98760a957ac4",
      ],
      right: "9bc1b108-53c2-48ed-a75b-d320f1d4b345",
      bottom: "7ba8eca5-bf3f-4459-bb82-8ea76d0dc2b3",
      left: "7e726e81-a446-4019-871c-bc1f3b04e375",
    },
    {
      id: "7ba8eca5-bf3f-4459-bb82-8ea76d0dc2b3",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 1200,
        y: 4460,
      },
      edges: [
        "f4f0e12f-dd7e-4ce5-b25a-936408dc7a76",
        "5adc034d-2aea-4bdb-89ef-d51817e31be5",
      ],
      top: "03bfc575-8282-4e35-aeaa-7c781eed3aa4",
      bottom: "e579da4f-11d7-4fed-ac88-d5ac8d7d1c9e",
    },
    {
      id: "e579da4f-11d7-4fed-ac88-d5ac8d7d1c9e",
      area: "SouthAmericaCaveB3",
      name: "CaveField",
      position: {
        x: 1240,
        y: 5000,
      },
      edges: ["5adc034d-2aea-4bdb-89ef-d51817e31be5"],
      top: "7ba8eca5-bf3f-4459-bb82-8ea76d0dc2b3",
    },
    {
      id: "7e726e81-a446-4019-871c-bc1f3b04e375",
      area: "SouthAmericaCaveB3",
      name: "GoldTreasureField",
      position: {
        x: 660,
        y: 3980,
      },
      edges: [
        "136182d6-689c-42c8-ad37-98760a957ac4",
        "696dd06f-8b55-4517-a584-176b7dfe7af1",
      ],
      right: "03bfc575-8282-4e35-aeaa-7c781eed3aa4",
      left: "53ba9c8c-26fd-44b4-96eb-bd3fbd428129",
    },
    {
      id: "53ba9c8c-26fd-44b4-96eb-bd3fbd428129",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 100,
        y: 3940,
      },
      edges: [
        "696dd06f-8b55-4517-a584-176b7dfe7af1",
        "4146ad53-7d61-4f67-bd4f-52ba46ff1ab8",
      ],
      right: "7e726e81-a446-4019-871c-bc1f3b04e375",
      top: "0d6eeb9e-a4ad-41c6-a5c8-759a9289e5d7",
    },
    {
      id: "0d6eeb9e-a4ad-41c6-a5c8-759a9289e5d7",
      area: "SouthAmericaCaveB3",
      name: "RedTreasureField",
      position: {
        x: 40,
        y: 3500,
      },
      edges: [
        "4146ad53-7d61-4f67-bd4f-52ba46ff1ab8",
        "2772ec10-73e4-4bc0-a88e-3ed4dd79b739",
      ],
      bottom: "53ba9c8c-26fd-44b4-96eb-bd3fbd428129",
      top: "5ab95a67-0bfa-49bd-925f-53ddafb33d07",
    },
    {
      id: "5ab95a67-0bfa-49bd-925f-53ddafb33d07",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 140,
        y: 3020,
      },
      edges: [
        "2772ec10-73e4-4bc0-a88e-3ed4dd79b739",
        "c4ccf963-f969-41da-9c94-f24ed8a99987",
      ],
      bottom: "0d6eeb9e-a4ad-41c6-a5c8-759a9289e5d7",
      right: "9385aa4d-035c-472c-bde8-27290ad90e76",
    },
    {
      id: "9385aa4d-035c-472c-bde8-27290ad90e76",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 980,
        y: 2980,
      },
      edges: [
        "c4ccf963-f969-41da-9c94-f24ed8a99987",
        "793dff3e-a092-4da4-9760-fc0615cfe943",
      ],
      left: "5ab95a67-0bfa-49bd-925f-53ddafb33d07",
      right: "20c4a558-f39b-43db-91b3-c7e776a4050d",
    },
    {
      id: "20c4a558-f39b-43db-91b3-c7e776a4050d",
      area: "SouthAmericaCaveB3",
      name: "RedTreasureField",
      position: {
        x: 1720,
        y: 3040,
      },
      edges: [
        "793dff3e-a092-4da4-9760-fc0615cfe943",
        "3b61abeb-d84d-4955-99ec-4be390574087",
        "7ce2f120-399c-4e87-a321-14200c108be8",
      ],
      left: "9385aa4d-035c-472c-bde8-27290ad90e76",
      right: "6fd49bc2-d275-4b74-976c-612a4b53a8e1",
      top: "c7da8c52-1380-437b-ac6d-bfc6ba37041c",
    },
    {
      id: "c7da8c52-1380-437b-ac6d-bfc6ba37041c",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 1780,
        y: 2520,
      },
      edges: [
        "7ce2f120-399c-4e87-a321-14200c108be8",
        "f5c05ba9-0416-4a2d-bb11-c73b835d79d7",
      ],
      bottom: "20c4a558-f39b-43db-91b3-c7e776a4050d",
      left: "3e3faf2b-ca54-495d-8304-9f17e730efa5",
    },
    {
      id: "3e3faf2b-ca54-495d-8304-9f17e730efa5",
      area: "SouthAmericaCaveB3",
      name: "MagicBookField",
      position: {
        x: 1180,
        y: 2480,
      },
      edges: [
        "f5c05ba9-0416-4a2d-bb11-c73b835d79d7",
        "20850ccf-515d-4850-8a10-b7447f41aa36",
      ],
      right: "c7da8c52-1380-437b-ac6d-bfc6ba37041c",
      top: "fa1bde70-8f15-4660-b85e-c00d7ea614a5",
    },
    {
      id: "fa1bde70-8f15-4660-b85e-c00d7ea614a5",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 1220,
        y: 2000,
      },
      edges: [
        "20850ccf-515d-4850-8a10-b7447f41aa36",
        "7be71eb8-53c8-4bb9-b79a-f93e27832350",
      ],
      bottom: "3e3faf2b-ca54-495d-8304-9f17e730efa5",
      top: "7f89452b-dbbe-4580-b08b-7235aa9d3fa9",
    },
    {
      id: "7f89452b-dbbe-4580-b08b-7235aa9d3fa9",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 1280,
        y: 1520,
      },
      edges: [
        "7be71eb8-53c8-4bb9-b79a-f93e27832350",
        "2b6bf64e-a311-4e72-9bbe-b75014b4eb5d",
      ],
      bottom: "fa1bde70-8f15-4660-b85e-c00d7ea614a5",
      top: "70b5d93e-33cc-4a68-bc43-c4e9aa622d19",
    },
    {
      id: "70b5d93e-33cc-4a68-bc43-c4e9aa622d19",
      area: "SouthAmericaCaveB3",
      name: "TreasureField",
      position: {
        x: 1260,
        y: 1020,
      },
      edges: [
        "2b6bf64e-a311-4e72-9bbe-b75014b4eb5d",
        "66c31598-ab2e-4ccb-a81c-fa348ba0df61",
      ],
      bottom: "7f89452b-dbbe-4580-b08b-7235aa9d3fa9",
      top: "c0475c3c-1673-4708-be1a-ceeaa995ffe4",
    },
    {
      id: "c0475c3c-1673-4708-be1a-ceeaa995ffe4",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 1220,
        y: 560,
      },
      edges: [
        "66c31598-ab2e-4ccb-a81c-fa348ba0df61",
        "fa3254c9-c7e4-40da-a2b7-c8153ff44b12",
      ],
      bottom: "70b5d93e-33cc-4a68-bc43-c4e9aa622d19",
      top: "9439488f-15ed-4d9b-9a7c-e838ada9313c",
    },
    {
      id: "9439488f-15ed-4d9b-9a7c-e838ada9313c",
      area: "SouthAmericaCaveB3",
      name: "BattleField",
      position: {
        x: 1280,
        y: 40,
      },
      edges: ["fa3254c9-c7e4-40da-a2b7-c8153ff44b12"],
      bottom: "c0475c3c-1673-4708-be1a-ceeaa995ffe4",
    },
  ],
  edges: [
    {
      start: {
        x: 7780,
        y: 5560,
      },
      startId: "a597c1a0-7214-4ce8-8e20-f7c224e1ea9a",
      end: {
        x: 7200,
        y: 5560,
      },
      endId: "319a3d44-9ce9-42da-9849-b2bbb90f0cc8",
      name: "TwoWayHEdge",
      id: "abf41a25-f037-45a1-b955-580d49c4fbbd",
    },
    {
      start: {
        x: 7780,
        y: 5560,
      },
      startId: "a597c1a0-7214-4ce8-8e20-f7c224e1ea9a",
      end: {
        x: 8340,
        y: 5560,
      },
      endId: "382e3fb2-03a2-425a-9df8-89ea519a2f71",
      name: "TwoWayHEdge",
      id: "83dfa5e2-b3a0-4e38-8f71-2fed461f6c74",
    },
    {
      start: {
        x: 7200,
        y: 5560,
      },
      startId: "319a3d44-9ce9-42da-9849-b2bbb90f0cc8",
      end: {
        x: 7240,
        y: 5000,
      },
      endId: "e460c672-5ae8-4f68-ba67-7a339f7570f6",
      name: "TwoWayVEdge",
      id: "c7bffce1-3a6a-4d7d-8c5c-b7b7a6bd8bda",
    },
    {
      start: {
        x: 7240,
        y: 5000,
      },
      startId: "e460c672-5ae8-4f68-ba67-7a339f7570f6",
      end: {
        x: 7200,
        y: 4460,
      },
      endId: "ea894272-44c8-45da-b156-2041e90d68c2",
      name: "TwoWayVEdge",
      id: "cea56222-fd89-43bb-89a7-1f527df51f28",
    },
    {
      start: {
        x: 7200,
        y: 4460,
      },
      startId: "ea894272-44c8-45da-b156-2041e90d68c2",
      end: {
        x: 7700,
        y: 4520,
      },
      endId: "075516ad-dd24-47a4-9450-2365a65c63ac",
      name: "TwoWayHEdge",
      id: "1c5519c2-8e07-41cd-bfb1-e318e49b67f4",
    },
    {
      start: {
        x: 7200,
        y: 4460,
      },
      startId: "ea894272-44c8-45da-b156-2041e90d68c2",
      end: {
        x: 7200,
        y: 3600,
      },
      endId: "07980ad3-9b68-4a68-9d7e-f6c4abec1b8e",
      name: "TwoWayVEdge",
      id: "9e7cb60a-39d6-4c9c-b75d-e8ec7a0b82a9",
    },
    {
      start: {
        x: 7200,
        y: 3600,
      },
      startId: "07980ad3-9b68-4a68-9d7e-f6c4abec1b8e",
      end: {
        x: 7680,
        y: 3560,
      },
      endId: "fef9325e-54a2-4faf-a987-66b007ffb3c1",
      name: "TwoWayHEdge",
      id: "06799621-ab39-4d26-8ac5-2e3f36a262c7",
    },
    {
      start: {
        x: 7680,
        y: 3560,
      },
      startId: "fef9325e-54a2-4faf-a987-66b007ffb3c1",
      end: {
        x: 7760,
        y: 4020,
      },
      endId: "17e7af9c-2767-436e-824e-5324f0b688bd",
      name: "TwoWayVEdge",
      id: "3292be8b-bc67-47e9-b235-1bb0019c9561",
    },
    {
      start: {
        x: 7760,
        y: 4020,
      },
      startId: "17e7af9c-2767-436e-824e-5324f0b688bd",
      end: {
        x: 7700,
        y: 4520,
      },
      endId: "075516ad-dd24-47a4-9450-2365a65c63ac",
      name: "TwoWayVEdge",
      id: "1a47b0ad-7b1c-4853-a62a-1bea7e2895cc",
    },
    {
      start: {
        x: 7680,
        y: 3560,
      },
      startId: "fef9325e-54a2-4faf-a987-66b007ffb3c1",
      end: {
        x: 8340,
        y: 3600,
      },
      endId: "4203d247-8801-41a5-93bc-9076d4b889ab",
      name: "TwoWayHEdge",
      id: "7c917015-1fda-4386-a77c-fb886dad2f3c",
    },
    {
      start: {
        x: 8340,
        y: 3600,
      },
      startId: "4203d247-8801-41a5-93bc-9076d4b889ab",
      end: {
        x: 8340,
        y: 3120,
      },
      endId: "0a05eb93-5682-433a-8220-42e63c633a47",
      name: "TwoWayVEdge",
      id: "c4db0b75-ac71-429c-ab0f-8bde34a925a8",
    },
    {
      start: {
        x: 8340,
        y: 3120,
      },
      startId: "0a05eb93-5682-433a-8220-42e63c633a47",
      end: {
        x: 7860,
        y: 3120,
      },
      endId: "ccadaff2-9362-4e32-b50a-6202abf4b103",
      name: "TwoWayHEdge",
      id: "179c4cfc-1938-4208-b9a5-26c5d92cc7fc",
    },
    {
      start: {
        x: 7860,
        y: 3120,
      },
      startId: "ccadaff2-9362-4e32-b50a-6202abf4b103",
      end: {
        x: 7860,
        y: 2540,
      },
      endId: "27dc520d-fb8f-4811-9c1f-b1061766f2f7",
      name: "TwoWayVEdge",
      id: "474bc18c-b17e-467d-8aa3-c481cd5073ab",
    },
    {
      start: {
        x: 7860,
        y: 2540,
      },
      startId: "27dc520d-fb8f-4811-9c1f-b1061766f2f7",
      end: {
        x: 7860,
        y: 1940,
      },
      endId: "b4faf0a0-72c9-4ea3-8047-dd94a2acf848",
      name: "TwoWayVEdge",
      id: "851d6079-67d3-4137-af9f-b1d145c884fd",
    },
    {
      start: {
        x: 7860,
        y: 1940,
      },
      startId: "b4faf0a0-72c9-4ea3-8047-dd94a2acf848",
      end: {
        x: 7860,
        y: 1400,
      },
      endId: "742a1d2e-a066-4a88-8a30-d4865183bc3f",
      name: "TwoWayVEdge",
      id: "d8c1fc0c-0e4b-4190-a8a3-3374c751e737",
    },
    {
      start: {
        x: 7860,
        y: 1400,
      },
      startId: "742a1d2e-a066-4a88-8a30-d4865183bc3f",
      end: {
        x: 7860,
        y: 820,
      },
      endId: "984fedc8-5d13-408a-8029-d3f737fb902f",
      name: "TwoWayVEdge",
      id: "62592f33-f2cd-4635-92be-22acbb969f37",
    },
    {
      start: {
        x: 7860,
        y: 820,
      },
      startId: "984fedc8-5d13-408a-8029-d3f737fb902f",
      end: {
        x: 7860,
        y: 260,
      },
      endId: "b96a78b5-505a-4567-9c64-7013936ae1c6",
      name: "TwoWayVEdge",
      id: "59108a6b-00eb-45d8-b989-5862887a45c4",
    },
    {
      start: {
        x: 7200,
        y: 3600,
      },
      startId: "07980ad3-9b68-4a68-9d7e-f6c4abec1b8e",
      end: {
        x: 6140,
        y: 3520,
      },
      endId: "727cc2d7-dc41-4fdc-9620-35f0a886b63d",
      name: "TwoWayHEdge",
      id: "46cd1e89-7cf1-4211-83e0-48957d894e3d",
    },
    {
      start: {
        x: 6140,
        y: 3520,
      },
      startId: "727cc2d7-dc41-4fdc-9620-35f0a886b63d",
      end: {
        x: 6020,
        y: 4000,
      },
      endId: "31d14044-797a-43ac-abb3-4d9879b81680",
      name: "TwoWayVEdge",
      id: "772fc61b-30af-4b1b-b736-2cad5b192dd2",
    },
    {
      start: {
        x: 6020,
        y: 4000,
      },
      startId: "31d14044-797a-43ac-abb3-4d9879b81680",
      end: {
        x: 5440,
        y: 3960,
      },
      endId: "ddec5024-c604-41c5-aa55-191d1949aa15",
      name: "TwoWayHEdge",
      id: "67a8a89b-8e55-4764-84d8-c1d0d015a22c",
    },
    {
      start: {
        x: 5440,
        y: 3960,
      },
      startId: "ddec5024-c604-41c5-aa55-191d1949aa15",
      end: {
        x: 5580,
        y: 3460,
      },
      endId: "0ba42ba2-1e75-4bd3-bab8-a7ce47a416cc",
      name: "TwoWayVEdge",
      id: "18e4b527-5d53-488b-a5fb-3b47db7ea676",
    },
    {
      start: {
        x: 5440,
        y: 3960,
      },
      startId: "ddec5024-c604-41c5-aa55-191d1949aa15",
      end: {
        x: 4880,
        y: 3980,
      },
      endId: "75d7d667-2084-4505-977b-9ee3efedf9a9",
      name: "TwoWayHEdge",
      id: "124118bb-938e-4644-ae01-a249a98aae63",
    },
    {
      start: {
        x: 4880,
        y: 3980,
      },
      startId: "75d7d667-2084-4505-977b-9ee3efedf9a9",
      end: {
        x: 3900,
        y: 3940,
      },
      endId: "c26495f1-f58d-431b-b4af-2c714ab66344",
      name: "TwoWayHEdge",
      id: "8c084fc8-d8b3-4f84-9ea9-30b1676681cd",
    },
    {
      start: {
        x: 3900,
        y: 3940,
      },
      startId: "c26495f1-f58d-431b-b4af-2c714ab66344",
      end: {
        x: 3960,
        y: 3420,
      },
      endId: "20d8be4e-b7ae-44d7-ab18-da6e70418700",
      name: "TwoWayVEdge",
      id: "f90f380e-f33c-4420-8fab-a26b77ec9b7d",
    },
    {
      start: {
        x: 3960,
        y: 3420,
      },
      startId: "20d8be4e-b7ae-44d7-ab18-da6e70418700",
      end: {
        x: 4520,
        y: 3500,
      },
      endId: "3d71de7d-a6a5-412c-88ea-5030d8fcc1b1",
      name: "TwoWayHEdge",
      id: "80a82a52-0722-4282-b808-122da6bf3291",
    },
    {
      start: {
        x: 4520,
        y: 3500,
      },
      startId: "3d71de7d-a6a5-412c-88ea-5030d8fcc1b1",
      end: {
        x: 5080,
        y: 3440,
      },
      endId: "c8f2eb0b-f30c-40a1-98ed-c9a92e7647fa",
      name: "TwoWayHEdge",
      id: "45bd8be6-7169-48c2-b085-becc001da088",
    },
    {
      start: {
        x: 5080,
        y: 3440,
      },
      startId: "c8f2eb0b-f30c-40a1-98ed-c9a92e7647fa",
      end: {
        x: 5580,
        y: 3460,
      },
      endId: "0ba42ba2-1e75-4bd3-bab8-a7ce47a416cc",
      name: "TwoWayHEdge",
      id: "07028975-e211-4eda-b6b1-38dc193998a5",
    },
    {
      start: {
        x: 5080,
        y: 3440,
      },
      startId: "c8f2eb0b-f30c-40a1-98ed-c9a92e7647fa",
      end: {
        x: 5120,
        y: 2940,
      },
      endId: "a7ebd515-d894-4bbe-82cc-6a8e4d94490b",
      name: "TwoWayVEdge",
      id: "974faa97-2026-486b-b341-8856b60567e1",
    },
    {
      start: {
        x: 5120,
        y: 2940,
      },
      startId: "a7ebd515-d894-4bbe-82cc-6a8e4d94490b",
      end: {
        x: 5080,
        y: 2480,
      },
      endId: "9b6f2954-5229-4efe-bbf4-850861c5b10a",
      name: "TwoWayVEdge",
      id: "79127549-f01d-49e9-abbc-597a855778ad",
    },
    {
      start: {
        x: 5080,
        y: 2480,
      },
      startId: "9b6f2954-5229-4efe-bbf4-850861c5b10a",
      end: {
        x: 5020,
        y: 1900,
      },
      endId: "88d2fd3c-56b9-4fb8-8a6c-6f83ab82b3fd",
      name: "TwoWayVEdge",
      id: "7221b2a7-d92c-4868-bccb-dcd7295e6892",
    },
    {
      start: {
        x: 5020,
        y: 1900,
      },
      startId: "88d2fd3c-56b9-4fb8-8a6c-6f83ab82b3fd",
      end: {
        x: 5060,
        y: 1300,
      },
      endId: "f41c8d59-1288-433d-aeb9-027eafbf6402",
      name: "TwoWayVEdge",
      id: "f06164e7-8912-4cd1-a707-a4a83adb4b75",
    },
    {
      start: {
        x: 5060,
        y: 1300,
      },
      startId: "f41c8d59-1288-433d-aeb9-027eafbf6402",
      end: {
        x: 5000,
        y: 760,
      },
      endId: "261c47f0-9f50-423b-8a32-bc73d71b6c30",
      name: "TwoWayVEdge",
      id: "038e1191-0b46-4ed7-9c73-6739e00e68d6",
    },
    {
      start: {
        x: 5000,
        y: 760,
      },
      startId: "261c47f0-9f50-423b-8a32-bc73d71b6c30",
      end: {
        x: 5080,
        y: 200,
      },
      endId: "62c54bdb-f471-4be6-b282-d0fa7f28dd02",
      name: "TwoWayVEdge",
      id: "7633b523-ca82-418e-aa67-bb4f66951874",
    },
    {
      start: {
        x: 3900,
        y: 3940,
      },
      startId: "c26495f1-f58d-431b-b4af-2c714ab66344",
      end: {
        x: 2440,
        y: 3980,
      },
      endId: "026bce83-3573-4c33-82bc-72b57db4eb58",
      name: "TwoWayHEdge",
      id: "0fc4d934-96e7-4c69-a8ac-51efb96ec36c",
    },
    {
      start: {
        x: 2440,
        y: 3980,
      },
      startId: "026bce83-3573-4c33-82bc-72b57db4eb58",
      end: {
        x: 2520,
        y: 3520,
      },
      endId: "a9d97e2e-cf8c-4558-b4c2-3838531c1624",
      name: "TwoWayVEdge",
      id: "8c9146d9-7a78-4369-b9c2-532f414a3adf",
    },
    {
      start: {
        x: 2520,
        y: 3520,
      },
      startId: "a9d97e2e-cf8c-4558-b4c2-3838531c1624",
      end: {
        x: 2460,
        y: 3020,
      },
      endId: "6fd49bc2-d275-4b74-976c-612a4b53a8e1",
      name: "TwoWayVEdge",
      id: "a9cac88c-c5fa-4773-a93a-520c91f074c5",
    },
    {
      start: {
        x: 2440,
        y: 3980,
      },
      startId: "026bce83-3573-4c33-82bc-72b57db4eb58",
      end: {
        x: 1840,
        y: 4000,
      },
      endId: "9bc1b108-53c2-48ed-a75b-d320f1d4b345",
      name: "TwoWayHEdge",
      id: "b6117fd2-d706-4c89-9f81-060232c2d967",
    },
    {
      start: {
        x: 1840,
        y: 4000,
      },
      startId: "9bc1b108-53c2-48ed-a75b-d320f1d4b345",
      end: {
        x: 1260,
        y: 3960,
      },
      endId: "03bfc575-8282-4e35-aeaa-7c781eed3aa4",
      name: "TwoWayHEdge",
      id: "b8a9df0f-6121-4047-9a0c-3552d670dbd0",
    },
    {
      start: {
        x: 1260,
        y: 3960,
      },
      startId: "03bfc575-8282-4e35-aeaa-7c781eed3aa4",
      end: {
        x: 1200,
        y: 4460,
      },
      endId: "7ba8eca5-bf3f-4459-bb82-8ea76d0dc2b3",
      name: "TwoWayVEdge",
      id: "f4f0e12f-dd7e-4ce5-b25a-936408dc7a76",
    },
    {
      start: {
        x: 1200,
        y: 4460,
      },
      startId: "7ba8eca5-bf3f-4459-bb82-8ea76d0dc2b3",
      end: {
        x: 1240,
        y: 5000,
      },
      endId: "e579da4f-11d7-4fed-ac88-d5ac8d7d1c9e",
      name: "TwoWayVEdge",
      id: "5adc034d-2aea-4bdb-89ef-d51817e31be5",
    },
    {
      start: {
        x: 1260,
        y: 3960,
      },
      startId: "03bfc575-8282-4e35-aeaa-7c781eed3aa4",
      end: {
        x: 660,
        y: 3980,
      },
      endId: "7e726e81-a446-4019-871c-bc1f3b04e375",
      name: "TwoWayHEdge",
      id: "136182d6-689c-42c8-ad37-98760a957ac4",
    },
    {
      start: {
        x: 660,
        y: 3980,
      },
      startId: "7e726e81-a446-4019-871c-bc1f3b04e375",
      end: {
        x: 100,
        y: 3940,
      },
      endId: "53ba9c8c-26fd-44b4-96eb-bd3fbd428129",
      name: "TwoWayHEdge",
      id: "696dd06f-8b55-4517-a584-176b7dfe7af1",
    },
    {
      start: {
        x: 100,
        y: 3940,
      },
      startId: "53ba9c8c-26fd-44b4-96eb-bd3fbd428129",
      end: {
        x: 40,
        y: 3500,
      },
      endId: "0d6eeb9e-a4ad-41c6-a5c8-759a9289e5d7",
      name: "TwoWayVEdge",
      id: "4146ad53-7d61-4f67-bd4f-52ba46ff1ab8",
    },
    {
      start: {
        x: 40,
        y: 3500,
      },
      startId: "0d6eeb9e-a4ad-41c6-a5c8-759a9289e5d7",
      end: {
        x: 140,
        y: 3020,
      },
      endId: "5ab95a67-0bfa-49bd-925f-53ddafb33d07",
      name: "TwoWayVEdge",
      id: "2772ec10-73e4-4bc0-a88e-3ed4dd79b739",
    },
    {
      start: {
        x: 140,
        y: 3020,
      },
      startId: "5ab95a67-0bfa-49bd-925f-53ddafb33d07",
      end: {
        x: 980,
        y: 2980,
      },
      endId: "9385aa4d-035c-472c-bde8-27290ad90e76",
      name: "TwoWayHEdge",
      id: "c4ccf963-f969-41da-9c94-f24ed8a99987",
    },
    {
      start: {
        x: 980,
        y: 2980,
      },
      startId: "9385aa4d-035c-472c-bde8-27290ad90e76",
      end: {
        x: 1720,
        y: 3040,
      },
      endId: "20c4a558-f39b-43db-91b3-c7e776a4050d",
      name: "TwoWayHEdge",
      id: "793dff3e-a092-4da4-9760-fc0615cfe943",
    },
    {
      start: {
        x: 1720,
        y: 3040,
      },
      startId: "20c4a558-f39b-43db-91b3-c7e776a4050d",
      end: {
        x: 2460,
        y: 3020,
      },
      endId: "6fd49bc2-d275-4b74-976c-612a4b53a8e1",
      name: "TwoWayHEdge",
      id: "3b61abeb-d84d-4955-99ec-4be390574087",
    },
    {
      start: {
        x: 1720,
        y: 3040,
      },
      startId: "20c4a558-f39b-43db-91b3-c7e776a4050d",
      end: {
        x: 1780,
        y: 2520,
      },
      endId: "c7da8c52-1380-437b-ac6d-bfc6ba37041c",
      name: "TwoWayVEdge",
      id: "7ce2f120-399c-4e87-a321-14200c108be8",
    },
    {
      start: {
        x: 1780,
        y: 2520,
      },
      startId: "c7da8c52-1380-437b-ac6d-bfc6ba37041c",
      end: {
        x: 1180,
        y: 2480,
      },
      endId: "3e3faf2b-ca54-495d-8304-9f17e730efa5",
      name: "TwoWayHEdge",
      id: "f5c05ba9-0416-4a2d-bb11-c73b835d79d7",
    },
    {
      start: {
        x: 1180,
        y: 2480,
      },
      startId: "3e3faf2b-ca54-495d-8304-9f17e730efa5",
      end: {
        x: 1220,
        y: 2000,
      },
      endId: "fa1bde70-8f15-4660-b85e-c00d7ea614a5",
      name: "TwoWayVEdge",
      id: "20850ccf-515d-4850-8a10-b7447f41aa36",
    },
    {
      start: {
        x: 1220,
        y: 2000,
      },
      startId: "fa1bde70-8f15-4660-b85e-c00d7ea614a5",
      end: {
        x: 1280,
        y: 1520,
      },
      endId: "7f89452b-dbbe-4580-b08b-7235aa9d3fa9",
      name: "TwoWayVEdge",
      id: "7be71eb8-53c8-4bb9-b79a-f93e27832350",
    },
    {
      start: {
        x: 1280,
        y: 1520,
      },
      startId: "7f89452b-dbbe-4580-b08b-7235aa9d3fa9",
      end: {
        x: 1260,
        y: 1020,
      },
      endId: "70b5d93e-33cc-4a68-bc43-c4e9aa622d19",
      name: "TwoWayVEdge",
      id: "2b6bf64e-a311-4e72-9bbe-b75014b4eb5d",
    },
    {
      start: {
        x: 1260,
        y: 1020,
      },
      startId: "70b5d93e-33cc-4a68-bc43-c4e9aa622d19",
      end: {
        x: 1220,
        y: 560,
      },
      endId: "c0475c3c-1673-4708-be1a-ceeaa995ffe4",
      name: "TwoWayVEdge",
      id: "66c31598-ab2e-4ccb-a81c-fa348ba0df61",
    },
    {
      start: {
        x: 1220,
        y: 560,
      },
      startId: "c0475c3c-1673-4708-be1a-ceeaa995ffe4",
      end: {
        x: 1280,
        y: 40,
      },
      endId: "9439488f-15ed-4d9b-9a7c-e838ada9313c",
      name: "TwoWayVEdge",
      id: "fa3254c9-c7e4-40da-a2b7-c8153ff44b12",
    },
  ],
};
export default southAmericaCaveB3Map;
