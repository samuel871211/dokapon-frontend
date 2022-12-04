import type { GraphJSON } from "global";

const hawaiianIslandsCaveB2Map: GraphJSON = {
  vertices: [
    {
      area: "HawaiianIslandsCaveB2Center",
      position: {
        x: 5180,
        y: 6980,
      },
      name: "BattleField",
      id: "e469812f-8a26-470b-a963-0417e52d69f8",
      edges: [
        "c249e473-8416-4960-b158-6d65d9942a15",
        "35e58080-3c15-4951-a9ba-d04a2c689938",
        "e224162a-8fd1-46dc-bb5f-ff35b42cf408",
      ],
      top: "de43a84b-fab8-4450-94df-4352818d71e9",
      bottom: "71fb1a9d-b885-493b-b7b8-16b2a179a069",
      right: "5dc932fd-4e44-44c6-a267-3004a1d146fe",
    },
    {
      id: "de43a84b-fab8-4450-94df-4352818d71e9",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 5180,
        y: 6420,
      },
      edges: [
        "c249e473-8416-4960-b158-6d65d9942a15",
        "2f3d6b4c-0b0e-48a5-9cf7-a6b8b0d5440c",
      ],
      bottom: "e469812f-8a26-470b-a963-0417e52d69f8",
      right: "7c06e959-e728-4793-9d01-fa9228af040a",
    },
    {
      id: "7c06e959-e728-4793-9d01-fa9228af040a",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 5800,
        y: 6400,
      },
      edges: [
        "2f3d6b4c-0b0e-48a5-9cf7-a6b8b0d5440c",
        "845858bb-d80b-4815-9c22-26d823dea017",
      ],
      left: "de43a84b-fab8-4450-94df-4352818d71e9",
      right: "a28f87d3-5fae-450b-874c-82ceb839af5d",
    },
    {
      id: "71fb1a9d-b885-493b-b7b8-16b2a179a069",
      area: "HawaiianIslandsCaveB2Center",
      name: "CaveField",
      position: {
        x: 5180,
        y: 7520,
      },
      edges: ["35e58080-3c15-4951-a9ba-d04a2c689938"],
      top: "e469812f-8a26-470b-a963-0417e52d69f8",
    },
    {
      id: "a28f87d3-5fae-450b-874c-82ceb839af5d",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 6380,
        y: 6420,
      },
      edges: [
        "845858bb-d80b-4815-9c22-26d823dea017",
        "2b5f3b12-5698-4105-a9a2-7568e9ccf845",
      ],
      left: "7c06e959-e728-4793-9d01-fa9228af040a",
      bottom: "5dc932fd-4e44-44c6-a267-3004a1d146fe",
    },
    {
      id: "5dc932fd-4e44-44c6-a267-3004a1d146fe",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 6380,
        y: 6980,
      },
      edges: [
        "e224162a-8fd1-46dc-bb5f-ff35b42cf408",
        "2b5f3b12-5698-4105-a9a2-7568e9ccf845",
        "1d676049-2ad7-4896-8290-d7ef1984d329",
      ],
      left: "e469812f-8a26-470b-a963-0417e52d69f8",
      top: "a28f87d3-5fae-450b-874c-82ceb839af5d",
      right: "c6864fb7-b953-435f-9c05-dad6e9b5b656",
    },
    {
      id: "c6864fb7-b953-435f-9c05-dad6e9b5b656",
      area: "HawaiianIslandsCaveB2Center",
      name: "RedTreasureField",
      position: {
        x: 6960,
        y: 6960,
      },
      edges: [
        "1d676049-2ad7-4896-8290-d7ef1984d329",
        "43d74d53-101d-42bf-804b-5e8057574428",
      ],
      left: "5dc932fd-4e44-44c6-a267-3004a1d146fe",
      top: "55ed7e8e-ab9a-4678-9374-eb166a380b86",
    },
    {
      id: "55ed7e8e-ab9a-4678-9374-eb166a380b86",
      area: "HawaiianIslandsCaveB2Center",
      name: "DamageField",
      position: {
        x: 6980,
        y: 6420,
      },
      edges: [
        "43d74d53-101d-42bf-804b-5e8057574428",
        "7d99ef4a-4303-4cb2-af54-f08c367db46b",
      ],
      bottom: "c6864fb7-b953-435f-9c05-dad6e9b5b656",
      top: "1dd61898-0f88-4707-94ea-46a7751870b6",
    },
    {
      id: "1dd61898-0f88-4707-94ea-46a7751870b6",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 6960,
        y: 5860,
      },
      edges: [
        "7d99ef4a-4303-4cb2-af54-f08c367db46b",
        "c6294adb-acee-4d75-9bcc-b8969216b95c",
      ],
      bottom: "55ed7e8e-ab9a-4678-9374-eb166a380b86",
      top: "33be92d3-de38-47ad-b892-d008fc77fdf5",
    },
    {
      id: "33be92d3-de38-47ad-b892-d008fc77fdf5",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 7000,
        y: 5300,
      },
      edges: [
        "c6294adb-acee-4d75-9bcc-b8969216b95c",
        "90b2fe31-306a-4516-9407-5b14ae6c1e7d",
      ],
      bottom: "1dd61898-0f88-4707-94ea-46a7751870b6",
      top: "8da0dcc5-5576-4caa-a4b0-6ccb92c6704c",
    },
    {
      id: "8da0dcc5-5576-4caa-a4b0-6ccb92c6704c",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 6940,
        y: 4780,
      },
      edges: [
        "90b2fe31-306a-4516-9407-5b14ae6c1e7d",
        "5dadb993-1b5b-4133-9b4b-a60ba7679d9f",
      ],
      bottom: "33be92d3-de38-47ad-b892-d008fc77fdf5",
      top: "0ac0b986-e0fe-498f-b632-e9fcc1703554",
    },
    {
      id: "0ac0b986-e0fe-498f-b632-e9fcc1703554",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 7000,
        y: 4260,
      },
      edges: [
        "5dadb993-1b5b-4133-9b4b-a60ba7679d9f",
        "7937b608-c129-4130-b6ac-1efc642ff712",
      ],
      bottom: "8da0dcc5-5576-4caa-a4b0-6ccb92c6704c",
      top: "7e44bb00-1966-4a99-9b04-ca902c4bdb5e",
    },
    {
      id: "7e44bb00-1966-4a99-9b04-ca902c4bdb5e",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 6940,
        y: 3740,
      },
      edges: [
        "7937b608-c129-4130-b6ac-1efc642ff712",
        "d9e4fa59-c8e5-40da-bdab-28929d53d286",
      ],
      bottom: "0ac0b986-e0fe-498f-b632-e9fcc1703554",
      top: "f2875f5d-5e91-4d61-b808-cd4cb29c58b2",
    },
    {
      id: "f2875f5d-5e91-4d61-b808-cd4cb29c58b2",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 7000,
        y: 3220,
      },
      edges: [
        "d9e4fa59-c8e5-40da-bdab-28929d53d286",
        "2dc2f32d-a18d-4cc5-bcc2-1a9cb21c7615",
      ],
      bottom: "7e44bb00-1966-4a99-9b04-ca902c4bdb5e",
      top: "dd384adb-fdd8-4661-b2fd-dbaefe224eea",
    },
    {
      id: "dd384adb-fdd8-4661-b2fd-dbaefe224eea",
      area: "HawaiianIslandsCaveB2Center",
      name: "RedTreasureField",
      position: {
        x: 6920,
        y: 2700,
      },
      edges: [
        "2dc2f32d-a18d-4cc5-bcc2-1a9cb21c7615",
        "5d8f98be-945f-4273-ba88-46720e3da87e",
      ],
      bottom: "f2875f5d-5e91-4d61-b808-cd4cb29c58b2",
      top: "5a9ca774-3ad4-4ae4-bfe1-edce61926fb5",
    },
    {
      id: "5a9ca774-3ad4-4ae4-bfe1-edce61926fb5",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 6980,
        y: 2180,
      },
      edges: [
        "5d8f98be-945f-4273-ba88-46720e3da87e",
        "17bd8206-bae8-4536-b322-81cbf691f203",
        "f694cb30-228c-41cc-b31b-186030522fa6",
      ],
      bottom: "dd384adb-fdd8-4661-b2fd-dbaefe224eea",
      top: "680fb5ac-6e94-4246-9582-463fb515668f",
      left: "eb1ab3c8-6512-4fdf-90cd-43bfcb7e120c",
    },
    {
      id: "680fb5ac-6e94-4246-9582-463fb515668f",
      area: "HawaiianIslandsCaveB2Center",
      name: "DamageField",
      position: {
        x: 6900,
        y: 1640,
      },
      edges: [
        "17bd8206-bae8-4536-b322-81cbf691f203",
        "6185d913-9290-41cd-aaae-4cdce662a90e",
      ],
      bottom: "5a9ca774-3ad4-4ae4-bfe1-edce61926fb5",
      left: "d7c5e7f9-c4c2-4fe3-8027-5b02f929b9f4",
    },
    {
      id: "d7c5e7f9-c4c2-4fe3-8027-5b02f929b9f4",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 6360,
        y: 1600,
      },
      edges: [
        "6185d913-9290-41cd-aaae-4cdce662a90e",
        "480af18b-e77b-45c0-a401-f2b799c67f44",
      ],
      right: "680fb5ac-6e94-4246-9582-463fb515668f",
      left: "5c45eea2-a6e7-47cb-858f-7ad1a0a91d2e",
    },
    {
      id: "5c45eea2-a6e7-47cb-858f-7ad1a0a91d2e",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 5860,
        y: 1640,
      },
      edges: [
        "480af18b-e77b-45c0-a401-f2b799c67f44",
        "7e8c4100-7571-454a-98f1-2d312141e13c",
        "f509e9bd-f6f2-4207-9da4-6bee59731647",
      ],
      right: "d7c5e7f9-c4c2-4fe3-8027-5b02f929b9f4",
      bottom: "eb1ab3c8-6512-4fdf-90cd-43bfcb7e120c",
      left: "448abc25-e25f-4183-b750-1ecfb4f97ed9",
    },
    {
      id: "eb1ab3c8-6512-4fdf-90cd-43bfcb7e120c",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 5820,
        y: 2200,
      },
      edges: [
        "7e8c4100-7571-454a-98f1-2d312141e13c",
        "f694cb30-228c-41cc-b31b-186030522fa6",
        "968e8ba1-316c-4abb-8cd6-0dcb465385f9",
      ],
      top: "5c45eea2-a6e7-47cb-858f-7ad1a0a91d2e",
      right: "5a9ca774-3ad4-4ae4-bfe1-edce61926fb5",
      left: "a100d594-0e58-43ed-a629-1dda65fabf1f",
    },
    {
      id: "448abc25-e25f-4183-b750-1ecfb4f97ed9",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 4840,
        y: 1640,
      },
      edges: [
        "f509e9bd-f6f2-4207-9da4-6bee59731647",
        "e78c3753-0354-4106-ab76-bacc4509dc93",
      ],
      right: "5c45eea2-a6e7-47cb-858f-7ad1a0a91d2e",
      top: "1d646024-3cf5-433e-9285-da5eb537342d",
    },
    {
      id: "a100d594-0e58-43ed-a629-1dda65fabf1f",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 5300,
        y: 2160,
      },
      edges: [
        "968e8ba1-316c-4abb-8cd6-0dcb465385f9",
        "858defed-26af-4fe8-9f21-060e5a56d627",
      ],
      right: "eb1ab3c8-6512-4fdf-90cd-43bfcb7e120c",
      left: "fedf7a1b-dc88-476d-9986-e39afc5a24ab",
    },
    {
      id: "fedf7a1b-dc88-476d-9986-e39afc5a24ab",
      area: "HawaiianIslandsCaveB2Center",
      name: "KeyTreasureField",
      position: {
        x: 4820,
        y: 2200,
      },
      edges: ["858defed-26af-4fe8-9f21-060e5a56d627"],
      right: "a100d594-0e58-43ed-a629-1dda65fabf1f",
    },
    {
      id: "1d646024-3cf5-433e-9285-da5eb537342d",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 4840,
        y: 1120,
      },
      edges: [
        "e78c3753-0354-4106-ab76-bacc4509dc93",
        "89f89cb9-8916-498b-866f-c92d29e88d71",
      ],
      bottom: "448abc25-e25f-4183-b750-1ecfb4f97ed9",
      top: "c71e4f31-686c-4444-b3d6-3b7731471696",
    },
    {
      id: "c71e4f31-686c-4444-b3d6-3b7731471696",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 4840,
        y: 600,
      },
      edges: [
        "89f89cb9-8916-498b-866f-c92d29e88d71",
        "a0a539e5-5ea6-44f7-bf3d-e5b606d7dcee",
      ],
      bottom: "1d646024-3cf5-433e-9285-da5eb537342d",
      top: "3403df36-57b5-4d5c-a9f9-ce116fde7f2d",
    },
    {
      id: "3403df36-57b5-4d5c-a9f9-ce116fde7f2d",
      area: "HawaiianIslandsCaveB2Center",
      name: "CaveField",
      position: {
        x: 4840,
        y: 40,
      },
      edges: ["a0a539e5-5ea6-44f7-bf3d-e5b606d7dcee"],
      bottom: "c71e4f31-686c-4444-b3d6-3b7731471696",
    },
    {
      id: "c716eec3-b54e-401a-bdb6-7b658546e5d1",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 3680,
        y: 6960,
      },
      edges: [
        "7f0e846b-c8c7-4510-9367-25b780073a61",
        "20802fa0-38ae-4446-beb6-18effe7a4494",
      ],
      bottom: "219819e4-0c88-4ecb-970d-0a9ee80a98bc",
      top: "3dbefca2-3a1c-4641-9165-ef17d570dfd4",
    },
    {
      id: "219819e4-0c88-4ecb-970d-0a9ee80a98bc",
      area: "HawaiianIslandsCaveB2Center",
      name: "CaveField",
      position: {
        x: 3680,
        y: 7500,
      },
      edges: ["7f0e846b-c8c7-4510-9367-25b780073a61"],
      top: "c716eec3-b54e-401a-bdb6-7b658546e5d1",
    },
    {
      id: "3dbefca2-3a1c-4641-9165-ef17d570dfd4",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 3680,
        y: 6440,
      },
      edges: [
        "20802fa0-38ae-4446-beb6-18effe7a4494",
        "d61ac6c2-2906-4d5e-9ea2-1c2b8cc7fbe9",
      ],
      bottom: "c716eec3-b54e-401a-bdb6-7b658546e5d1",
      top: "ee496063-89bf-43d8-8bd6-03f42d86e749",
    },
    {
      id: "ee496063-89bf-43d8-8bd6-03f42d86e749",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 3680,
        y: 5840,
      },
      edges: [
        "d61ac6c2-2906-4d5e-9ea2-1c2b8cc7fbe9",
        "30c9e29f-a4ba-4f84-9208-eb0654a139ad",
        "10d0d34f-2529-4fcd-abd5-d42170df98cf",
      ],
      bottom: "3dbefca2-3a1c-4641-9165-ef17d570dfd4",
      right: "1fdcdd5e-eec7-4916-8acb-9a98fa00ab90",
      left: "f6d59c80-9927-41ac-814c-3716ab9873a7",
    },
    {
      id: "1fdcdd5e-eec7-4916-8acb-9a98fa00ab90",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 4220,
        y: 5820,
      },
      edges: [
        "30c9e29f-a4ba-4f84-9208-eb0654a139ad",
        "396e550b-db3e-4b5b-aa57-ffd97cd3cd87",
      ],
      left: "ee496063-89bf-43d8-8bd6-03f42d86e749",
      top: "a81725cb-6c64-45d3-bf5a-554fa40bf2a2",
    },
    {
      id: "f6d59c80-9927-41ac-814c-3716ab9873a7",
      area: "HawaiianIslandsCaveB2Center",
      name: "DamageField",
      position: {
        x: 3140,
        y: 5820,
      },
      edges: [
        "10d0d34f-2529-4fcd-abd5-d42170df98cf",
        "992898f5-cd9d-4502-98e5-29a9bad72583",
      ],
      right: "ee496063-89bf-43d8-8bd6-03f42d86e749",
      top: "3240154c-f8e1-4f37-a626-5019f6889de9",
    },
    {
      id: "a81725cb-6c64-45d3-bf5a-554fa40bf2a2",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 4180,
        y: 5260,
      },
      edges: [
        "396e550b-db3e-4b5b-aa57-ffd97cd3cd87",
        "b379fb7a-9ceb-4ccd-9344-f82a7cd536c3",
      ],
      bottom: "1fdcdd5e-eec7-4916-8acb-9a98fa00ab90",
      top: "441d0a9a-fe4f-4130-aa25-ca6a3c43b823",
    },
    {
      id: "3240154c-f8e1-4f37-a626-5019f6889de9",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 3200,
        y: 5260,
      },
      edges: [
        "992898f5-cd9d-4502-98e5-29a9bad72583",
        "1dc36f91-521a-4cb1-a3f2-2dc0afc3d49a",
      ],
      bottom: "f6d59c80-9927-41ac-814c-3716ab9873a7",
      top: "abff4747-e9bc-449a-90aa-5b47f61fac4a",
    },
    {
      id: "441d0a9a-fe4f-4130-aa25-ca6a3c43b823",
      area: "HawaiianIslandsCaveB2Center",
      name: "DamageField",
      position: {
        x: 4240,
        y: 4680,
      },
      edges: [
        "b379fb7a-9ceb-4ccd-9344-f82a7cd536c3",
        "74f85bcb-c912-4280-bc5a-f96f35d4ef15",
      ],
      bottom: "a81725cb-6c64-45d3-bf5a-554fa40bf2a2",
      top: "c0af936a-08eb-4d1b-a918-4a96f87d4004",
    },
    {
      id: "abff4747-e9bc-449a-90aa-5b47f61fac4a",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 3120,
        y: 4680,
      },
      edges: [
        "1dc36f91-521a-4cb1-a3f2-2dc0afc3d49a",
        "4f998171-ef14-4560-828d-4895bdaee5f3",
      ],
      bottom: "3240154c-f8e1-4f37-a626-5019f6889de9",
      top: "f0e7f5dc-d7ca-4776-9bbf-559f952558d5",
    },
    {
      id: "f0e7f5dc-d7ca-4776-9bbf-559f952558d5",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 3180,
        y: 4060,
      },
      edges: [
        "4f998171-ef14-4560-828d-4895bdaee5f3",
        "a8583430-14e2-4476-aa7f-c77c0afb0b76",
      ],
      bottom: "abff4747-e9bc-449a-90aa-5b47f61fac4a",
      left: "afe4c05d-2f74-44fa-99d4-fc8735dcdbe7",
    },
    {
      id: "c0af936a-08eb-4d1b-a918-4a96f87d4004",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 4180,
        y: 4060,
      },
      edges: [
        "74f85bcb-c912-4280-bc5a-f96f35d4ef15",
        "403f388c-baf7-4603-bbb9-38577ad89536",
      ],
      bottom: "441d0a9a-fe4f-4130-aa25-ca6a3c43b823",
      right: "56da99a1-345c-4e36-9b76-63f85e4f076e",
    },
    {
      id: "afe4c05d-2f74-44fa-99d4-fc8735dcdbe7",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 2660,
        y: 4060,
      },
      edges: [
        "a8583430-14e2-4476-aa7f-c77c0afb0b76",
        "09e41a16-6a22-4076-b400-ecc0bed8560b",
        "a3674a3b-92bd-43b1-9225-3b2c6c9a8498",
      ],
      right: "f0e7f5dc-d7ca-4776-9bbf-559f952558d5",
      left: "5d06fa1f-648c-4ff4-b151-54e5609e7892",
      top: "d9a40154-009b-4dbb-ae05-626144cbabec",
    },
    {
      id: "5d06fa1f-648c-4ff4-b151-54e5609e7892",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 1700,
        y: 4060,
      },
      edges: [
        "09e41a16-6a22-4076-b400-ecc0bed8560b",
        "95bef32a-8912-47b2-a584-c32fbef7cf3f",
      ],
      right: "afe4c05d-2f74-44fa-99d4-fc8735dcdbe7",
      top: "fea9175a-45e7-4ded-be5b-f6587b5ae1ae",
    },
    {
      id: "fea9175a-45e7-4ded-be5b-f6587b5ae1ae",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 1700,
        y: 3520,
      },
      edges: [
        "95bef32a-8912-47b2-a584-c32fbef7cf3f",
        "54ea642c-b23f-4dc2-949c-a539aed9eebc",
      ],
      bottom: "5d06fa1f-648c-4ff4-b151-54e5609e7892",
      right: "62a12247-7fb7-49b3-bced-68679ec7a6a9",
    },
    {
      id: "62a12247-7fb7-49b3-bced-68679ec7a6a9",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 2180,
        y: 3560,
      },
      edges: [
        "54ea642c-b23f-4dc2-949c-a539aed9eebc",
        "57558785-9209-4744-b5aa-b367b994447e",
      ],
      left: "fea9175a-45e7-4ded-be5b-f6587b5ae1ae",
      right: "d9a40154-009b-4dbb-ae05-626144cbabec",
    },
    {
      id: "d9a40154-009b-4dbb-ae05-626144cbabec",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 2660,
        y: 3520,
      },
      edges: [
        "57558785-9209-4744-b5aa-b367b994447e",
        "a3674a3b-92bd-43b1-9225-3b2c6c9a8498",
        "390dd190-a84d-41ef-ba18-9456d27aff72",
      ],
      left: "62a12247-7fb7-49b3-bced-68679ec7a6a9",
      bottom: "afe4c05d-2f74-44fa-99d4-fc8735dcdbe7",
      right: "756c3190-fd06-4201-a9ab-9753660d1387",
    },
    {
      id: "756c3190-fd06-4201-a9ab-9753660d1387",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 3260,
        y: 3520,
      },
      edges: [
        "390dd190-a84d-41ef-ba18-9456d27aff72",
        "005553fe-8c6d-4121-a1e9-f5684ff376c1",
        "85c82df3-fd99-424a-9f1b-f136820b45d3",
      ],
      left: "d9a40154-009b-4dbb-ae05-626144cbabec",
      right: "e8ee3b78-9b89-40ef-9105-2f60312c8b70",
      top: "27f1be05-928e-48ba-8bb8-37dd93f38c00",
    },
    {
      id: "e8ee3b78-9b89-40ef-9105-2f60312c8b70",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 4120,
        y: 3520,
      },
      edges: [
        "005553fe-8c6d-4121-a1e9-f5684ff376c1",
        "8e7c75bf-a7dd-4d19-841a-64774ccb7964",
        "5ad9b68c-c6f2-4c40-93b1-c05ccca14133",
      ],
      left: "756c3190-fd06-4201-a9ab-9753660d1387",
      right: "21f55603-2200-4a8b-815a-668829b85de9",
      top: "4f54c668-66c9-4b1a-8ef1-dc5e61aa5645",
    },
    {
      id: "21f55603-2200-4a8b-815a-668829b85de9",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 4780,
        y: 3520,
      },
      edges: [
        "8e7c75bf-a7dd-4d19-841a-64774ccb7964",
        "a6855e15-b871-4c42-a7cd-e8b4eb0f3ab0",
        "fbba417e-cfb8-4516-a6a0-6d68f3daa8c6",
      ],
      left: "e8ee3b78-9b89-40ef-9105-2f60312c8b70",
      bottom: "56da99a1-345c-4e36-9b76-63f85e4f076e",
      right: "58a8dbae-9013-4fab-a07c-624392c2be83",
    },
    {
      id: "56da99a1-345c-4e36-9b76-63f85e4f076e",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 4780,
        y: 4040,
      },
      edges: [
        "a6855e15-b871-4c42-a7cd-e8b4eb0f3ab0",
        "403f388c-baf7-4603-bbb9-38577ad89536",
        "9097ad02-6a74-4419-a58c-a5d00c1690fb",
      ],
      top: "21f55603-2200-4a8b-815a-668829b85de9",
      left: "c0af936a-08eb-4d1b-a918-4a96f87d4004",
      right: "ff1c4391-b05b-476e-81c8-dd63903753dd",
    },
    {
      id: "58a8dbae-9013-4fab-a07c-624392c2be83",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 5760,
        y: 3520,
      },
      edges: [
        "fbba417e-cfb8-4516-a6a0-6d68f3daa8c6",
        "f69fa2e4-df91-4ee5-89e3-b4257d96b119",
      ],
      left: "21f55603-2200-4a8b-815a-668829b85de9",
      bottom: "83dcaea9-6551-4cb1-abd8-d56eccdd3720",
    },
    {
      id: "ff1c4391-b05b-476e-81c8-dd63903753dd",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 5260,
        y: 4080,
      },
      edges: [
        "9097ad02-6a74-4419-a58c-a5d00c1690fb",
        "4de9a07d-6120-442a-82d2-f3fee91d31fd",
      ],
      left: "56da99a1-345c-4e36-9b76-63f85e4f076e",
      right: "83dcaea9-6551-4cb1-abd8-d56eccdd3720",
    },
    {
      id: "83dcaea9-6551-4cb1-abd8-d56eccdd3720",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 5780,
        y: 4040,
      },
      edges: [
        "4de9a07d-6120-442a-82d2-f3fee91d31fd",
        "f69fa2e4-df91-4ee5-89e3-b4257d96b119",
      ],
      left: "ff1c4391-b05b-476e-81c8-dd63903753dd",
      top: "58a8dbae-9013-4fab-a07c-624392c2be83",
    },
    {
      id: "27f1be05-928e-48ba-8bb8-37dd93f38c00",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 3260,
        y: 2940,
      },
      edges: [
        "85c82df3-fd99-424a-9f1b-f136820b45d3",
        "f3df1f1e-b925-49c3-912b-94bad7d30516",
      ],
      bottom: "756c3190-fd06-4201-a9ab-9753660d1387",
      right: "e7ef98f6-d1b5-414f-920e-4e54c7f18053",
    },
    {
      id: "e7ef98f6-d1b5-414f-920e-4e54c7f18053",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 3700,
        y: 2980,
      },
      edges: [
        "f3df1f1e-b925-49c3-912b-94bad7d30516",
        "2d5de207-d780-41cb-9142-4b1c863d39be",
        "fcbb6e15-2c38-4891-a4f6-2475cfbb1c87",
      ],
      left: "27f1be05-928e-48ba-8bb8-37dd93f38c00",
      right: "4f54c668-66c9-4b1a-8ef1-dc5e61aa5645",
      top: "dd210e8a-ab1e-4b76-ac16-233c5937cae2",
    },
    {
      id: "4f54c668-66c9-4b1a-8ef1-dc5e61aa5645",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 4120,
        y: 2940,
      },
      edges: [
        "2d5de207-d780-41cb-9142-4b1c863d39be",
        "5ad9b68c-c6f2-4c40-93b1-c05ccca14133",
      ],
      left: "e7ef98f6-d1b5-414f-920e-4e54c7f18053",
      bottom: "e8ee3b78-9b89-40ef-9105-2f60312c8b70",
    },
    {
      id: "dd210e8a-ab1e-4b76-ac16-233c5937cae2",
      area: "HawaiianIslandsCaveB2Center",
      name: "DamageField",
      position: {
        x: 3800,
        y: 2200,
      },
      edges: [
        "fcbb6e15-2c38-4891-a4f6-2475cfbb1c87",
        "299a3896-2ca4-4630-b832-0f3812d0c9b4",
      ],
      bottom: "e7ef98f6-d1b5-414f-920e-4e54c7f18053",
      top: "ae568340-2971-4dca-8213-d29ee877a511",
    },
    {
      id: "ae568340-2971-4dca-8213-d29ee877a511",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 3800,
        y: 1640,
      },
      edges: [
        "299a3896-2ca4-4630-b832-0f3812d0c9b4",
        "f72c34a4-c314-45ca-8318-760a9101334a",
      ],
      bottom: "dd210e8a-ab1e-4b76-ac16-233c5937cae2",
      top: "5a207537-6c85-4b76-a876-3c9214134c73",
    },
    {
      id: "5a207537-6c85-4b76-a876-3c9214134c73",
      area: "HawaiianIslandsCaveB2Center",
      name: "RedTreasureField",
      position: {
        x: 3800,
        y: 1120,
      },
      edges: [
        "f72c34a4-c314-45ca-8318-760a9101334a",
        "efbeaedf-aeaf-4e60-ba49-002a9d2c1677",
      ],
      bottom: "ae568340-2971-4dca-8213-d29ee877a511",
      top: "72bc0e42-d1fe-479a-818e-242839e5fd0b",
    },
    {
      id: "72bc0e42-d1fe-479a-818e-242839e5fd0b",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 3800,
        y: 580,
      },
      edges: [
        "efbeaedf-aeaf-4e60-ba49-002a9d2c1677",
        "f34d9a38-5196-41dc-b268-532bea0df8a2",
      ],
      bottom: "5a207537-6c85-4b76-a876-3c9214134c73",
      top: "8277b405-be4d-4f35-a127-f9835f5e8dcb",
    },
    {
      id: "8277b405-be4d-4f35-a127-f9835f5e8dcb",
      area: "HawaiianIslandsCaveB2Center",
      name: "CaveField",
      position: {
        x: 3800,
        y: 40,
      },
      edges: ["f34d9a38-5196-41dc-b268-532bea0df8a2"],
      bottom: "72bc0e42-d1fe-479a-818e-242839e5fd0b",
    },
    {
      id: "bc2e7fb0-4c22-4db0-9e32-0f432fb34a1e",
      area: "HawaiianIslandsCaveB2Center",
      name: "CaveField",
      position: {
        x: 1680,
        y: 7500,
      },
      edges: ["c6f5d7b4-27d3-4014-96a3-54acdc064ecc"],
      top: "c41f3c74-abef-4412-9b9e-f1931c221cf4",
    },
    {
      id: "c41f3c74-abef-4412-9b9e-f1931c221cf4",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 1680,
        y: 6980,
      },
      edges: [
        "c6f5d7b4-27d3-4014-96a3-54acdc064ecc",
        "8b4c1814-f170-485d-b6c1-7e31f681c213",
        "2fc3f7d4-37e1-4441-8233-089b868e7806",
      ],
      bottom: "bc2e7fb0-4c22-4db0-9e32-0f432fb34a1e",
      top: "b39f45f0-2c34-4d5a-a811-e165d4843153",
      left: "02a2a096-403f-4ec1-955f-bac06afd9396",
    },
    {
      id: "b39f45f0-2c34-4d5a-a811-e165d4843153",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 1680,
        y: 6440,
      },
      edges: [
        "8b4c1814-f170-485d-b6c1-7e31f681c213",
        "b6dd8ef2-8587-4da2-8f8c-e7b187ea2cf4",
      ],
      bottom: "c41f3c74-abef-4412-9b9e-f1931c221cf4",
      left: "b35cd38a-904f-41a4-8ef7-95b19bcbb0ef",
    },
    {
      id: "b35cd38a-904f-41a4-8ef7-95b19bcbb0ef",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 660,
        y: 6440,
      },
      edges: [
        "b6dd8ef2-8587-4da2-8f8c-e7b187ea2cf4",
        "3be7b94c-f6f8-4907-a5ff-fe25af0d4a09",
      ],
      right: "b39f45f0-2c34-4d5a-a811-e165d4843153",
      bottom: "a0ee2b55-c2e7-41c2-976a-832d76cfeafb",
    },
    {
      id: "a0ee2b55-c2e7-41c2-976a-832d76cfeafb",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 660,
        y: 6980,
      },
      edges: [
        "3be7b94c-f6f8-4907-a5ff-fe25af0d4a09",
        "470048ec-8197-4d56-8929-e43b279c0005",
        "a9143214-9cdd-42b6-b34a-0ed297db93df",
      ],
      top: "b35cd38a-904f-41a4-8ef7-95b19bcbb0ef",
      right: "02a2a096-403f-4ec1-955f-bac06afd9396",
      left: "f9a50109-08f3-4167-8ff2-879be94230ad",
    },
    {
      id: "02a2a096-403f-4ec1-955f-bac06afd9396",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 1160,
        y: 7000,
      },
      edges: [
        "470048ec-8197-4d56-8929-e43b279c0005",
        "2fc3f7d4-37e1-4441-8233-089b868e7806",
      ],
      left: "a0ee2b55-c2e7-41c2-976a-832d76cfeafb",
      right: "c41f3c74-abef-4412-9b9e-f1931c221cf4",
    },
    {
      id: "f9a50109-08f3-4167-8ff2-879be94230ad",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 80,
        y: 7000,
      },
      edges: [
        "a9143214-9cdd-42b6-b34a-0ed297db93df",
        "726241a3-4510-4eed-a94e-179f71fc83e3",
      ],
      right: "a0ee2b55-c2e7-41c2-976a-832d76cfeafb",
      top: "737ef28c-ce15-49e4-a460-c3b224fe5394",
    },
    {
      id: "737ef28c-ce15-49e4-a460-c3b224fe5394",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 80,
        y: 6400,
      },
      edges: [
        "726241a3-4510-4eed-a94e-179f71fc83e3",
        "967b6386-5fed-46a6-a5e9-1889c471e68e",
      ],
      bottom: "f9a50109-08f3-4167-8ff2-879be94230ad",
      top: "7b963933-acc3-4fff-8e7c-16193fb76734",
    },
    {
      id: "7b963933-acc3-4fff-8e7c-16193fb76734",
      area: "HawaiianIslandsCaveB2Center",
      name: "RedTreasureField",
      position: {
        x: 80,
        y: 5860,
      },
      edges: [
        "967b6386-5fed-46a6-a5e9-1889c471e68e",
        "3340bf39-981e-42f6-9904-f85411fb8cb5",
      ],
      bottom: "737ef28c-ce15-49e4-a460-c3b224fe5394",
      top: "d128e873-22a1-4305-b03d-98350e3fac5a",
    },
    {
      id: "d128e873-22a1-4305-b03d-98350e3fac5a",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 80,
        y: 5340,
      },
      edges: [
        "3340bf39-981e-42f6-9904-f85411fb8cb5",
        "de4dabe6-b265-49ca-9592-f147cc41a911",
      ],
      bottom: "7b963933-acc3-4fff-8e7c-16193fb76734",
      top: "8eb04ba7-0576-4247-a33f-7e7937854a4e",
    },
    {
      id: "8eb04ba7-0576-4247-a33f-7e7937854a4e",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 100,
        y: 4860,
      },
      edges: [
        "de4dabe6-b265-49ca-9592-f147cc41a911",
        "3b00b4af-a63d-4807-988e-db8e6f107218",
      ],
      bottom: "d128e873-22a1-4305-b03d-98350e3fac5a",
      top: "d5b69f2a-7f9c-4abc-871e-2179a7038b46",
    },
    {
      id: "d5b69f2a-7f9c-4abc-871e-2179a7038b46",
      area: "HawaiianIslandsCaveB2Center",
      name: "DamageField",
      position: {
        x: 40,
        y: 4320,
      },
      edges: [
        "3b00b4af-a63d-4807-988e-db8e6f107218",
        "e121553a-9621-4a18-b585-ccb82680c1ab",
      ],
      bottom: "8eb04ba7-0576-4247-a33f-7e7937854a4e",
      top: "14959377-a2f1-4783-8a52-eef6350a20c9",
    },
    {
      id: "14959377-a2f1-4783-8a52-eef6350a20c9",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 100,
        y: 3820,
      },
      edges: [
        "e121553a-9621-4a18-b585-ccb82680c1ab",
        "e14a98d8-48c1-41ec-a417-3b63695cbada",
      ],
      bottom: "d5b69f2a-7f9c-4abc-871e-2179a7038b46",
      top: "3dd1e3e4-9dae-42be-a371-8924cfc54df0",
    },
    {
      id: "3dd1e3e4-9dae-42be-a371-8924cfc54df0",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 40,
        y: 3300,
      },
      edges: [
        "e14a98d8-48c1-41ec-a417-3b63695cbada",
        "0d23cf51-46a0-4ca6-aa73-b5ce6048d98c",
      ],
      bottom: "14959377-a2f1-4783-8a52-eef6350a20c9",
      top: "90084a9d-79e2-47f4-bd55-ccb4e2105346",
    },
    {
      id: "90084a9d-79e2-47f4-bd55-ccb4e2105346",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 100,
        y: 2820,
      },
      edges: [
        "0d23cf51-46a0-4ca6-aa73-b5ce6048d98c",
        "2297f134-1849-4b2f-b1f2-258f70dd536c",
      ],
      bottom: "3dd1e3e4-9dae-42be-a371-8924cfc54df0",
      top: "d024e8d4-2b18-43cd-8c02-a00e3b44bd1b",
    },
    {
      id: "d024e8d4-2b18-43cd-8c02-a00e3b44bd1b",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 40,
        y: 2320,
      },
      edges: [
        "2297f134-1849-4b2f-b1f2-258f70dd536c",
        "bf17a098-5954-40d4-8cd0-7f1bf98c90c9",
        "095db4b4-b8e3-4e66-aab7-1c7808830921",
      ],
      bottom: "90084a9d-79e2-47f4-bd55-ccb4e2105346",
      top: "9f907b37-19f1-4b82-a38f-31ef2fbf8bd5",
      right: "e7395235-85e5-444d-8afa-2c4bee156c94",
    },
    {
      id: "9f907b37-19f1-4b82-a38f-31ef2fbf8bd5",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 60,
        y: 1760,
      },
      edges: [
        "bf17a098-5954-40d4-8cd0-7f1bf98c90c9",
        "8ca3bf39-83d2-4f66-b9f3-3789a9f7b7bb",
      ],
      bottom: "d024e8d4-2b18-43cd-8c02-a00e3b44bd1b",
      right: "acc13049-c769-4c17-9539-f77e245c5aba",
    },
    {
      id: "acc13049-c769-4c17-9539-f77e245c5aba",
      area: "HawaiianIslandsCaveB2Center",
      name: "MagicBookField",
      position: {
        x: 1060,
        y: 1760,
      },
      edges: [
        "8ca3bf39-83d2-4f66-b9f3-3789a9f7b7bb",
        "96e5a8d3-4dd4-4bf8-bbb3-815c99dde031",
        "75da04d6-b6d4-41f3-84e8-88bb9824a52d",
      ],
      left: "9f907b37-19f1-4b82-a38f-31ef2fbf8bd5",
      bottom: "5e2a0e1d-0d28-44ea-9cdd-7a14fda26c3b",
      right: "cd5fb475-7e70-45f5-9b58-34d2ee1274b2",
    },
    {
      id: "e7395235-85e5-444d-8afa-2c4bee156c94",
      area: "HawaiianIslandsCaveB2Center",
      name: "DamageField",
      position: {
        x: 580,
        y: 2300,
      },
      edges: [
        "095db4b4-b8e3-4e66-aab7-1c7808830921",
        "21630c45-50ad-4604-acde-70c7d88cb34b",
      ],
      left: "d024e8d4-2b18-43cd-8c02-a00e3b44bd1b",
      right: "5e2a0e1d-0d28-44ea-9cdd-7a14fda26c3b",
    },
    {
      id: "5e2a0e1d-0d28-44ea-9cdd-7a14fda26c3b",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 1080,
        y: 2320,
      },
      edges: [
        "21630c45-50ad-4604-acde-70c7d88cb34b",
        "96e5a8d3-4dd4-4bf8-bbb3-815c99dde031",
        "8ccd8d72-2de4-428c-80d7-49e3989c4df1",
      ],
      left: "e7395235-85e5-444d-8afa-2c4bee156c94",
      top: "acc13049-c769-4c17-9539-f77e245c5aba",
      right: "28cf8132-3a3f-4b87-b826-c939e803a9a3",
    },
    {
      id: "28cf8132-3a3f-4b87-b826-c939e803a9a3",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 1600,
        y: 2300,
      },
      edges: [
        "8ccd8d72-2de4-428c-80d7-49e3989c4df1",
        "273dd4cd-9846-49f4-8052-239983cd9339",
      ],
      left: "5e2a0e1d-0d28-44ea-9cdd-7a14fda26c3b",
      right: "d27b6101-9800-4181-b1a5-e3d3d357ad71",
    },
    {
      id: "d27b6101-9800-4181-b1a5-e3d3d357ad71",
      area: "HawaiianIslandsCaveB2Center",
      name: "KeyTreasureField",
      position: {
        x: 2160,
        y: 2340,
      },
      edges: ["273dd4cd-9846-49f4-8052-239983cd9339"],
      left: "28cf8132-3a3f-4b87-b826-c939e803a9a3",
    },
    {
      id: "cd5fb475-7e70-45f5-9b58-34d2ee1274b2",
      area: "HawaiianIslandsCaveB2Center",
      name: "TreasureField",
      position: {
        x: 1960,
        y: 1760,
      },
      edges: [
        "75da04d6-b6d4-41f3-84e8-88bb9824a52d",
        "feb15098-6484-48d5-a5a1-d01159535312",
      ],
      left: "acc13049-c769-4c17-9539-f77e245c5aba",
      top: "0c3c3804-0ce7-47d4-9332-82cf2ee73152",
    },
    {
      id: "0c3c3804-0ce7-47d4-9332-82cf2ee73152",
      area: "HawaiianIslandsCaveB2Center",
      name: "DamageField",
      position: {
        x: 1960,
        y: 1180,
      },
      edges: [
        "feb15098-6484-48d5-a5a1-d01159535312",
        "9ff58cc6-ee76-4703-825c-61d58f9601d9",
      ],
      bottom: "cd5fb475-7e70-45f5-9b58-34d2ee1274b2",
      top: "05b37d35-456d-4f43-a960-25f1b70f55da",
    },
    {
      id: "05b37d35-456d-4f43-a960-25f1b70f55da",
      area: "HawaiianIslandsCaveB2Center",
      name: "BattleField",
      position: {
        x: 1960,
        y: 660,
      },
      edges: [
        "9ff58cc6-ee76-4703-825c-61d58f9601d9",
        "18923ced-aa90-4451-a14c-2628733d856e",
      ],
      bottom: "0c3c3804-0ce7-47d4-9332-82cf2ee73152",
      top: "e30d3804-f872-4cc6-9e94-48362744d4da",
    },
    {
      id: "e30d3804-f872-4cc6-9e94-48362744d4da",
      area: "HawaiianIslandsCaveB2Center",
      name: "CaveField",
      position: {
        x: 1960,
        y: 80,
      },
      edges: ["18923ced-aa90-4451-a14c-2628733d856e"],
      bottom: "05b37d35-456d-4f43-a960-25f1b70f55da",
    },
  ],
  edges: [
    {
      start: {
        x: 5180,
        y: 6980,
      },
      startId: "e469812f-8a26-470b-a963-0417e52d69f8",
      end: {
        x: 5180,
        y: 6420,
      },
      endId: "de43a84b-fab8-4450-94df-4352818d71e9",
      name: "TwoWayVEdge",
      id: "c249e473-8416-4960-b158-6d65d9942a15",
    },
    {
      start: {
        x: 5180,
        y: 6420,
      },
      startId: "de43a84b-fab8-4450-94df-4352818d71e9",
      end: {
        x: 5800,
        y: 6400,
      },
      endId: "7c06e959-e728-4793-9d01-fa9228af040a",
      name: "TwoWayHEdge",
      id: "2f3d6b4c-0b0e-48a5-9cf7-a6b8b0d5440c",
    },
    {
      start: {
        x: 5180,
        y: 6980,
      },
      startId: "e469812f-8a26-470b-a963-0417e52d69f8",
      end: {
        x: 5180,
        y: 7520,
      },
      endId: "71fb1a9d-b885-493b-b7b8-16b2a179a069",
      name: "TwoWayVEdge",
      id: "35e58080-3c15-4951-a9ba-d04a2c689938",
    },
    {
      start: {
        x: 5800,
        y: 6400,
      },
      startId: "7c06e959-e728-4793-9d01-fa9228af040a",
      end: {
        x: 6380,
        y: 6420,
      },
      endId: "a28f87d3-5fae-450b-874c-82ceb839af5d",
      name: "TwoWayHEdge",
      id: "845858bb-d80b-4815-9c22-26d823dea017",
    },
    {
      start: {
        x: 5180,
        y: 6980,
      },
      startId: "e469812f-8a26-470b-a963-0417e52d69f8",
      end: {
        x: 6380,
        y: 6980,
      },
      endId: "5dc932fd-4e44-44c6-a267-3004a1d146fe",
      name: "TwoWayHEdge",
      id: "e224162a-8fd1-46dc-bb5f-ff35b42cf408",
    },
    {
      start: {
        x: 6380,
        y: 6420,
      },
      startId: "a28f87d3-5fae-450b-874c-82ceb839af5d",
      end: {
        x: 6380,
        y: 6980,
      },
      endId: "5dc932fd-4e44-44c6-a267-3004a1d146fe",
      name: "TwoWayVEdge",
      id: "2b5f3b12-5698-4105-a9a2-7568e9ccf845",
    },
    {
      start: {
        x: 6380,
        y: 6980,
      },
      startId: "5dc932fd-4e44-44c6-a267-3004a1d146fe",
      end: {
        x: 6960,
        y: 6960,
      },
      endId: "c6864fb7-b953-435f-9c05-dad6e9b5b656",
      name: "TwoWayHEdge",
      id: "1d676049-2ad7-4896-8290-d7ef1984d329",
    },
    {
      start: {
        x: 6960,
        y: 6960,
      },
      startId: "c6864fb7-b953-435f-9c05-dad6e9b5b656",
      end: {
        x: 6980,
        y: 6420,
      },
      endId: "55ed7e8e-ab9a-4678-9374-eb166a380b86",
      name: "TwoWayVEdge",
      id: "43d74d53-101d-42bf-804b-5e8057574428",
    },
    {
      start: {
        x: 6980,
        y: 6420,
      },
      startId: "55ed7e8e-ab9a-4678-9374-eb166a380b86",
      end: {
        x: 6960,
        y: 5860,
      },
      endId: "1dd61898-0f88-4707-94ea-46a7751870b6",
      name: "TwoWayVEdge",
      id: "7d99ef4a-4303-4cb2-af54-f08c367db46b",
    },
    {
      start: {
        x: 6960,
        y: 5860,
      },
      startId: "1dd61898-0f88-4707-94ea-46a7751870b6",
      end: {
        x: 7000,
        y: 5300,
      },
      endId: "33be92d3-de38-47ad-b892-d008fc77fdf5",
      name: "TwoWayVEdge",
      id: "c6294adb-acee-4d75-9bcc-b8969216b95c",
    },
    {
      start: {
        x: 7000,
        y: 5300,
      },
      startId: "33be92d3-de38-47ad-b892-d008fc77fdf5",
      end: {
        x: 6940,
        y: 4780,
      },
      endId: "8da0dcc5-5576-4caa-a4b0-6ccb92c6704c",
      name: "TwoWayVEdge",
      id: "90b2fe31-306a-4516-9407-5b14ae6c1e7d",
    },
    {
      start: {
        x: 6940,
        y: 4780,
      },
      startId: "8da0dcc5-5576-4caa-a4b0-6ccb92c6704c",
      end: {
        x: 7000,
        y: 4260,
      },
      endId: "0ac0b986-e0fe-498f-b632-e9fcc1703554",
      name: "TwoWayVEdge",
      id: "5dadb993-1b5b-4133-9b4b-a60ba7679d9f",
    },
    {
      start: {
        x: 7000,
        y: 4260,
      },
      startId: "0ac0b986-e0fe-498f-b632-e9fcc1703554",
      end: {
        x: 6940,
        y: 3740,
      },
      endId: "7e44bb00-1966-4a99-9b04-ca902c4bdb5e",
      name: "TwoWayVEdge",
      id: "7937b608-c129-4130-b6ac-1efc642ff712",
    },
    {
      start: {
        x: 6940,
        y: 3740,
      },
      startId: "7e44bb00-1966-4a99-9b04-ca902c4bdb5e",
      end: {
        x: 7000,
        y: 3220,
      },
      endId: "f2875f5d-5e91-4d61-b808-cd4cb29c58b2",
      name: "TwoWayVEdge",
      id: "d9e4fa59-c8e5-40da-bdab-28929d53d286",
    },
    {
      start: {
        x: 7000,
        y: 3220,
      },
      startId: "f2875f5d-5e91-4d61-b808-cd4cb29c58b2",
      end: {
        x: 6920,
        y: 2700,
      },
      endId: "dd384adb-fdd8-4661-b2fd-dbaefe224eea",
      name: "TwoWayVEdge",
      id: "2dc2f32d-a18d-4cc5-bcc2-1a9cb21c7615",
    },
    {
      start: {
        x: 6920,
        y: 2700,
      },
      startId: "dd384adb-fdd8-4661-b2fd-dbaefe224eea",
      end: {
        x: 6980,
        y: 2180,
      },
      endId: "5a9ca774-3ad4-4ae4-bfe1-edce61926fb5",
      name: "TwoWayVEdge",
      id: "5d8f98be-945f-4273-ba88-46720e3da87e",
    },
    {
      start: {
        x: 6980,
        y: 2180,
      },
      startId: "5a9ca774-3ad4-4ae4-bfe1-edce61926fb5",
      end: {
        x: 6900,
        y: 1640,
      },
      endId: "680fb5ac-6e94-4246-9582-463fb515668f",
      name: "TwoWayVEdge",
      id: "17bd8206-bae8-4536-b322-81cbf691f203",
    },
    {
      start: {
        x: 6900,
        y: 1640,
      },
      startId: "680fb5ac-6e94-4246-9582-463fb515668f",
      end: {
        x: 6360,
        y: 1600,
      },
      endId: "d7c5e7f9-c4c2-4fe3-8027-5b02f929b9f4",
      name: "TwoWayHEdge",
      id: "6185d913-9290-41cd-aaae-4cdce662a90e",
    },
    {
      start: {
        x: 6360,
        y: 1600,
      },
      startId: "d7c5e7f9-c4c2-4fe3-8027-5b02f929b9f4",
      end: {
        x: 5860,
        y: 1640,
      },
      endId: "5c45eea2-a6e7-47cb-858f-7ad1a0a91d2e",
      name: "TwoWayHEdge",
      id: "480af18b-e77b-45c0-a401-f2b799c67f44",
    },
    {
      start: {
        x: 5860,
        y: 1640,
      },
      startId: "5c45eea2-a6e7-47cb-858f-7ad1a0a91d2e",
      end: {
        x: 5820,
        y: 2200,
      },
      endId: "eb1ab3c8-6512-4fdf-90cd-43bfcb7e120c",
      name: "TwoWayVEdge",
      id: "7e8c4100-7571-454a-98f1-2d312141e13c",
    },
    {
      start: {
        x: 5820,
        y: 2200,
      },
      startId: "eb1ab3c8-6512-4fdf-90cd-43bfcb7e120c",
      end: {
        x: 6980,
        y: 2180,
      },
      endId: "5a9ca774-3ad4-4ae4-bfe1-edce61926fb5",
      name: "TwoWayHEdge",
      id: "f694cb30-228c-41cc-b31b-186030522fa6",
    },
    {
      start: {
        x: 5860,
        y: 1640,
      },
      startId: "5c45eea2-a6e7-47cb-858f-7ad1a0a91d2e",
      end: {
        x: 4840,
        y: 1640,
      },
      endId: "448abc25-e25f-4183-b750-1ecfb4f97ed9",
      name: "TwoWayHEdge",
      id: "f509e9bd-f6f2-4207-9da4-6bee59731647",
    },
    {
      start: {
        x: 5820,
        y: 2200,
      },
      startId: "eb1ab3c8-6512-4fdf-90cd-43bfcb7e120c",
      end: {
        x: 5300,
        y: 2160,
      },
      endId: "a100d594-0e58-43ed-a629-1dda65fabf1f",
      name: "TwoWayHEdge",
      id: "968e8ba1-316c-4abb-8cd6-0dcb465385f9",
    },
    {
      start: {
        x: 5300,
        y: 2160,
      },
      startId: "a100d594-0e58-43ed-a629-1dda65fabf1f",
      end: {
        x: 4820,
        y: 2200,
      },
      endId: "fedf7a1b-dc88-476d-9986-e39afc5a24ab",
      name: "TwoWayHEdge",
      id: "858defed-26af-4fe8-9f21-060e5a56d627",
    },
    {
      start: {
        x: 4840,
        y: 1640,
      },
      startId: "448abc25-e25f-4183-b750-1ecfb4f97ed9",
      end: {
        x: 4840,
        y: 1120,
      },
      endId: "1d646024-3cf5-433e-9285-da5eb537342d",
      name: "TwoWayVEdge",
      id: "e78c3753-0354-4106-ab76-bacc4509dc93",
    },
    {
      start: {
        x: 4840,
        y: 1120,
      },
      startId: "1d646024-3cf5-433e-9285-da5eb537342d",
      end: {
        x: 4840,
        y: 600,
      },
      endId: "c71e4f31-686c-4444-b3d6-3b7731471696",
      name: "TwoWayVEdge",
      id: "89f89cb9-8916-498b-866f-c92d29e88d71",
    },
    {
      start: {
        x: 4840,
        y: 600,
      },
      startId: "c71e4f31-686c-4444-b3d6-3b7731471696",
      end: {
        x: 4840,
        y: 40,
      },
      endId: "3403df36-57b5-4d5c-a9f9-ce116fde7f2d",
      name: "TwoWayVEdge",
      id: "a0a539e5-5ea6-44f7-bf3d-e5b606d7dcee",
    },
    {
      start: {
        x: 3680,
        y: 6960,
      },
      startId: "c716eec3-b54e-401a-bdb6-7b658546e5d1",
      end: {
        x: 3680,
        y: 7500,
      },
      endId: "219819e4-0c88-4ecb-970d-0a9ee80a98bc",
      name: "TwoWayVEdge",
      id: "7f0e846b-c8c7-4510-9367-25b780073a61",
    },
    {
      start: {
        x: 3680,
        y: 6960,
      },
      startId: "c716eec3-b54e-401a-bdb6-7b658546e5d1",
      end: {
        x: 3680,
        y: 6440,
      },
      endId: "3dbefca2-3a1c-4641-9165-ef17d570dfd4",
      name: "TwoWayVEdge",
      id: "20802fa0-38ae-4446-beb6-18effe7a4494",
    },
    {
      start: {
        x: 3680,
        y: 6440,
      },
      startId: "3dbefca2-3a1c-4641-9165-ef17d570dfd4",
      end: {
        x: 3680,
        y: 5840,
      },
      endId: "ee496063-89bf-43d8-8bd6-03f42d86e749",
      name: "TwoWayVEdge",
      id: "d61ac6c2-2906-4d5e-9ea2-1c2b8cc7fbe9",
    },
    {
      start: {
        x: 3680,
        y: 5840,
      },
      startId: "ee496063-89bf-43d8-8bd6-03f42d86e749",
      end: {
        x: 4220,
        y: 5820,
      },
      endId: "1fdcdd5e-eec7-4916-8acb-9a98fa00ab90",
      name: "TwoWayHEdge",
      id: "30c9e29f-a4ba-4f84-9208-eb0654a139ad",
    },
    {
      start: {
        x: 3680,
        y: 5840,
      },
      startId: "ee496063-89bf-43d8-8bd6-03f42d86e749",
      end: {
        x: 3140,
        y: 5820,
      },
      endId: "f6d59c80-9927-41ac-814c-3716ab9873a7",
      name: "TwoWayHEdge",
      id: "10d0d34f-2529-4fcd-abd5-d42170df98cf",
    },
    {
      start: {
        x: 4220,
        y: 5820,
      },
      startId: "1fdcdd5e-eec7-4916-8acb-9a98fa00ab90",
      end: {
        x: 4180,
        y: 5260,
      },
      endId: "a81725cb-6c64-45d3-bf5a-554fa40bf2a2",
      name: "TwoWayVEdge",
      id: "396e550b-db3e-4b5b-aa57-ffd97cd3cd87",
    },
    {
      start: {
        x: 3140,
        y: 5820,
      },
      startId: "f6d59c80-9927-41ac-814c-3716ab9873a7",
      end: {
        x: 3200,
        y: 5260,
      },
      endId: "3240154c-f8e1-4f37-a626-5019f6889de9",
      name: "TwoWayVEdge",
      id: "992898f5-cd9d-4502-98e5-29a9bad72583",
    },
    {
      start: {
        x: 3200,
        y: 5260,
      },
      startId: "3240154c-f8e1-4f37-a626-5019f6889de9",
      end: {
        x: 3120,
        y: 4680,
      },
      endId: "abff4747-e9bc-449a-90aa-5b47f61fac4a",
      name: "TwoWayVEdge",
      id: "1dc36f91-521a-4cb1-a3f2-2dc0afc3d49a",
    },
    {
      start: {
        x: 4180,
        y: 5260,
      },
      startId: "a81725cb-6c64-45d3-bf5a-554fa40bf2a2",
      end: {
        x: 4240,
        y: 4680,
      },
      endId: "441d0a9a-fe4f-4130-aa25-ca6a3c43b823",
      name: "TwoWayVEdge",
      id: "b379fb7a-9ceb-4ccd-9344-f82a7cd536c3",
    },
    {
      start: {
        x: 3120,
        y: 4680,
      },
      startId: "abff4747-e9bc-449a-90aa-5b47f61fac4a",
      end: {
        x: 3180,
        y: 4060,
      },
      endId: "f0e7f5dc-d7ca-4776-9bbf-559f952558d5",
      name: "TwoWayVEdge",
      id: "4f998171-ef14-4560-828d-4895bdaee5f3",
    },
    {
      start: {
        x: 4240,
        y: 4680,
      },
      startId: "441d0a9a-fe4f-4130-aa25-ca6a3c43b823",
      end: {
        x: 4180,
        y: 4060,
      },
      endId: "c0af936a-08eb-4d1b-a918-4a96f87d4004",
      name: "TwoWayVEdge",
      id: "74f85bcb-c912-4280-bc5a-f96f35d4ef15",
    },
    {
      start: {
        x: 3180,
        y: 4060,
      },
      startId: "f0e7f5dc-d7ca-4776-9bbf-559f952558d5",
      end: {
        x: 2660,
        y: 4060,
      },
      endId: "afe4c05d-2f74-44fa-99d4-fc8735dcdbe7",
      name: "TwoWayHEdge",
      id: "a8583430-14e2-4476-aa7f-c77c0afb0b76",
    },
    {
      start: {
        x: 2660,
        y: 4060,
      },
      startId: "afe4c05d-2f74-44fa-99d4-fc8735dcdbe7",
      end: {
        x: 1700,
        y: 4060,
      },
      endId: "5d06fa1f-648c-4ff4-b151-54e5609e7892",
      name: "TwoWayHEdge",
      id: "09e41a16-6a22-4076-b400-ecc0bed8560b",
    },
    {
      start: {
        x: 1700,
        y: 4060,
      },
      startId: "5d06fa1f-648c-4ff4-b151-54e5609e7892",
      end: {
        x: 1700,
        y: 3520,
      },
      endId: "fea9175a-45e7-4ded-be5b-f6587b5ae1ae",
      name: "TwoWayVEdge",
      id: "95bef32a-8912-47b2-a584-c32fbef7cf3f",
    },
    {
      start: {
        x: 1700,
        y: 3520,
      },
      startId: "fea9175a-45e7-4ded-be5b-f6587b5ae1ae",
      end: {
        x: 2180,
        y: 3560,
      },
      endId: "62a12247-7fb7-49b3-bced-68679ec7a6a9",
      name: "TwoWayHEdge",
      id: "54ea642c-b23f-4dc2-949c-a539aed9eebc",
    },
    {
      start: {
        x: 2180,
        y: 3560,
      },
      startId: "62a12247-7fb7-49b3-bced-68679ec7a6a9",
      end: {
        x: 2660,
        y: 3520,
      },
      endId: "d9a40154-009b-4dbb-ae05-626144cbabec",
      name: "TwoWayHEdge",
      id: "57558785-9209-4744-b5aa-b367b994447e",
    },
    {
      start: {
        x: 2660,
        y: 3520,
      },
      startId: "d9a40154-009b-4dbb-ae05-626144cbabec",
      end: {
        x: 2660,
        y: 4060,
      },
      endId: "afe4c05d-2f74-44fa-99d4-fc8735dcdbe7",
      name: "TwoWayVEdge",
      id: "a3674a3b-92bd-43b1-9225-3b2c6c9a8498",
    },
    {
      start: {
        x: 2660,
        y: 3520,
      },
      startId: "d9a40154-009b-4dbb-ae05-626144cbabec",
      end: {
        x: 3260,
        y: 3520,
      },
      endId: "756c3190-fd06-4201-a9ab-9753660d1387",
      name: "TwoWayHEdge",
      id: "390dd190-a84d-41ef-ba18-9456d27aff72",
    },
    {
      start: {
        x: 3260,
        y: 3520,
      },
      startId: "756c3190-fd06-4201-a9ab-9753660d1387",
      end: {
        x: 4120,
        y: 3520,
      },
      endId: "e8ee3b78-9b89-40ef-9105-2f60312c8b70",
      name: "TwoWayHEdge",
      id: "005553fe-8c6d-4121-a1e9-f5684ff376c1",
    },
    {
      start: {
        x: 4120,
        y: 3520,
      },
      startId: "e8ee3b78-9b89-40ef-9105-2f60312c8b70",
      end: {
        x: 4780,
        y: 3520,
      },
      endId: "21f55603-2200-4a8b-815a-668829b85de9",
      name: "TwoWayHEdge",
      id: "8e7c75bf-a7dd-4d19-841a-64774ccb7964",
    },
    {
      start: {
        x: 4780,
        y: 3520,
      },
      startId: "21f55603-2200-4a8b-815a-668829b85de9",
      end: {
        x: 4780,
        y: 4040,
      },
      endId: "56da99a1-345c-4e36-9b76-63f85e4f076e",
      name: "TwoWayVEdge",
      id: "a6855e15-b871-4c42-a7cd-e8b4eb0f3ab0",
    },
    {
      start: {
        x: 4180,
        y: 4060,
      },
      startId: "c0af936a-08eb-4d1b-a918-4a96f87d4004",
      end: {
        x: 4780,
        y: 4040,
      },
      endId: "56da99a1-345c-4e36-9b76-63f85e4f076e",
      name: "TwoWayHEdge",
      id: "403f388c-baf7-4603-bbb9-38577ad89536",
    },
    {
      start: {
        x: 4780,
        y: 3520,
      },
      startId: "21f55603-2200-4a8b-815a-668829b85de9",
      end: {
        x: 5760,
        y: 3520,
      },
      endId: "58a8dbae-9013-4fab-a07c-624392c2be83",
      name: "TwoWayHEdge",
      id: "fbba417e-cfb8-4516-a6a0-6d68f3daa8c6",
    },
    {
      start: {
        x: 4780,
        y: 4040,
      },
      startId: "56da99a1-345c-4e36-9b76-63f85e4f076e",
      end: {
        x: 5260,
        y: 4080,
      },
      endId: "ff1c4391-b05b-476e-81c8-dd63903753dd",
      name: "TwoWayHEdge",
      id: "9097ad02-6a74-4419-a58c-a5d00c1690fb",
    },
    {
      start: {
        x: 5260,
        y: 4080,
      },
      startId: "ff1c4391-b05b-476e-81c8-dd63903753dd",
      end: {
        x: 5780,
        y: 4040,
      },
      endId: "83dcaea9-6551-4cb1-abd8-d56eccdd3720",
      name: "TwoWayHEdge",
      id: "4de9a07d-6120-442a-82d2-f3fee91d31fd",
    },
    {
      start: {
        x: 5760,
        y: 3520,
      },
      startId: "58a8dbae-9013-4fab-a07c-624392c2be83",
      end: {
        x: 5780,
        y: 4040,
      },
      endId: "83dcaea9-6551-4cb1-abd8-d56eccdd3720",
      name: "TwoWayVEdge",
      id: "f69fa2e4-df91-4ee5-89e3-b4257d96b119",
    },
    {
      start: {
        x: 3260,
        y: 3520,
      },
      startId: "756c3190-fd06-4201-a9ab-9753660d1387",
      end: {
        x: 3260,
        y: 2940,
      },
      endId: "27f1be05-928e-48ba-8bb8-37dd93f38c00",
      name: "TwoWayVEdge",
      id: "85c82df3-fd99-424a-9f1b-f136820b45d3",
    },
    {
      start: {
        x: 3260,
        y: 2940,
      },
      startId: "27f1be05-928e-48ba-8bb8-37dd93f38c00",
      end: {
        x: 3700,
        y: 2980,
      },
      endId: "e7ef98f6-d1b5-414f-920e-4e54c7f18053",
      name: "TwoWayHEdge",
      id: "f3df1f1e-b925-49c3-912b-94bad7d30516",
    },
    {
      start: {
        x: 3700,
        y: 2980,
      },
      startId: "e7ef98f6-d1b5-414f-920e-4e54c7f18053",
      end: {
        x: 4120,
        y: 2940,
      },
      endId: "4f54c668-66c9-4b1a-8ef1-dc5e61aa5645",
      name: "TwoWayHEdge",
      id: "2d5de207-d780-41cb-9142-4b1c863d39be",
    },
    {
      start: {
        x: 4120,
        y: 2940,
      },
      startId: "4f54c668-66c9-4b1a-8ef1-dc5e61aa5645",
      end: {
        x: 4120,
        y: 3520,
      },
      endId: "e8ee3b78-9b89-40ef-9105-2f60312c8b70",
      name: "TwoWayVEdge",
      id: "5ad9b68c-c6f2-4c40-93b1-c05ccca14133",
    },
    {
      start: {
        x: 3700,
        y: 2980,
      },
      startId: "e7ef98f6-d1b5-414f-920e-4e54c7f18053",
      end: {
        x: 3800,
        y: 2200,
      },
      endId: "dd210e8a-ab1e-4b76-ac16-233c5937cae2",
      name: "TwoWayVEdge",
      id: "fcbb6e15-2c38-4891-a4f6-2475cfbb1c87",
    },
    {
      start: {
        x: 3800,
        y: 2200,
      },
      startId: "dd210e8a-ab1e-4b76-ac16-233c5937cae2",
      end: {
        x: 3800,
        y: 1640,
      },
      endId: "ae568340-2971-4dca-8213-d29ee877a511",
      name: "TwoWayVEdge",
      id: "299a3896-2ca4-4630-b832-0f3812d0c9b4",
    },
    {
      start: {
        x: 3800,
        y: 1640,
      },
      startId: "ae568340-2971-4dca-8213-d29ee877a511",
      end: {
        x: 3800,
        y: 1120,
      },
      endId: "5a207537-6c85-4b76-a876-3c9214134c73",
      name: "TwoWayVEdge",
      id: "f72c34a4-c314-45ca-8318-760a9101334a",
    },
    {
      start: {
        x: 3800,
        y: 1120,
      },
      startId: "5a207537-6c85-4b76-a876-3c9214134c73",
      end: {
        x: 3800,
        y: 580,
      },
      endId: "72bc0e42-d1fe-479a-818e-242839e5fd0b",
      name: "TwoWayVEdge",
      id: "efbeaedf-aeaf-4e60-ba49-002a9d2c1677",
    },
    {
      start: {
        x: 3800,
        y: 580,
      },
      startId: "72bc0e42-d1fe-479a-818e-242839e5fd0b",
      end: {
        x: 3800,
        y: 40,
      },
      endId: "8277b405-be4d-4f35-a127-f9835f5e8dcb",
      name: "TwoWayVEdge",
      id: "f34d9a38-5196-41dc-b268-532bea0df8a2",
    },
    {
      start: {
        x: 1680,
        y: 7500,
      },
      startId: "bc2e7fb0-4c22-4db0-9e32-0f432fb34a1e",
      end: {
        x: 1680,
        y: 6980,
      },
      endId: "c41f3c74-abef-4412-9b9e-f1931c221cf4",
      name: "TwoWayVEdge",
      id: "c6f5d7b4-27d3-4014-96a3-54acdc064ecc",
    },
    {
      start: {
        x: 1680,
        y: 6980,
      },
      startId: "c41f3c74-abef-4412-9b9e-f1931c221cf4",
      end: {
        x: 1680,
        y: 6440,
      },
      endId: "b39f45f0-2c34-4d5a-a811-e165d4843153",
      name: "TwoWayVEdge",
      id: "8b4c1814-f170-485d-b6c1-7e31f681c213",
    },
    {
      start: {
        x: 1680,
        y: 6440,
      },
      startId: "b39f45f0-2c34-4d5a-a811-e165d4843153",
      end: {
        x: 660,
        y: 6440,
      },
      endId: "b35cd38a-904f-41a4-8ef7-95b19bcbb0ef",
      name: "TwoWayHEdge",
      id: "b6dd8ef2-8587-4da2-8f8c-e7b187ea2cf4",
    },
    {
      start: {
        x: 660,
        y: 6440,
      },
      startId: "b35cd38a-904f-41a4-8ef7-95b19bcbb0ef",
      end: {
        x: 660,
        y: 6980,
      },
      endId: "a0ee2b55-c2e7-41c2-976a-832d76cfeafb",
      name: "TwoWayVEdge",
      id: "3be7b94c-f6f8-4907-a5ff-fe25af0d4a09",
    },
    {
      start: {
        x: 660,
        y: 6980,
      },
      startId: "a0ee2b55-c2e7-41c2-976a-832d76cfeafb",
      end: {
        x: 1160,
        y: 7000,
      },
      endId: "02a2a096-403f-4ec1-955f-bac06afd9396",
      name: "TwoWayHEdge",
      id: "470048ec-8197-4d56-8929-e43b279c0005",
    },
    {
      start: {
        x: 1160,
        y: 7000,
      },
      startId: "02a2a096-403f-4ec1-955f-bac06afd9396",
      end: {
        x: 1680,
        y: 6980,
      },
      endId: "c41f3c74-abef-4412-9b9e-f1931c221cf4",
      name: "TwoWayHEdge",
      id: "2fc3f7d4-37e1-4441-8233-089b868e7806",
    },
    {
      start: {
        x: 660,
        y: 6980,
      },
      startId: "a0ee2b55-c2e7-41c2-976a-832d76cfeafb",
      end: {
        x: 80,
        y: 7000,
      },
      endId: "f9a50109-08f3-4167-8ff2-879be94230ad",
      name: "TwoWayHEdge",
      id: "a9143214-9cdd-42b6-b34a-0ed297db93df",
    },
    {
      start: {
        x: 80,
        y: 7000,
      },
      startId: "f9a50109-08f3-4167-8ff2-879be94230ad",
      end: {
        x: 80,
        y: 6400,
      },
      endId: "737ef28c-ce15-49e4-a460-c3b224fe5394",
      name: "TwoWayVEdge",
      id: "726241a3-4510-4eed-a94e-179f71fc83e3",
    },
    {
      start: {
        x: 80,
        y: 6400,
      },
      startId: "737ef28c-ce15-49e4-a460-c3b224fe5394",
      end: {
        x: 80,
        y: 5860,
      },
      endId: "7b963933-acc3-4fff-8e7c-16193fb76734",
      name: "TwoWayVEdge",
      id: "967b6386-5fed-46a6-a5e9-1889c471e68e",
    },
    {
      start: {
        x: 80,
        y: 5860,
      },
      startId: "7b963933-acc3-4fff-8e7c-16193fb76734",
      end: {
        x: 80,
        y: 5340,
      },
      endId: "d128e873-22a1-4305-b03d-98350e3fac5a",
      name: "TwoWayVEdge",
      id: "3340bf39-981e-42f6-9904-f85411fb8cb5",
    },
    {
      start: {
        x: 80,
        y: 5340,
      },
      startId: "d128e873-22a1-4305-b03d-98350e3fac5a",
      end: {
        x: 100,
        y: 4860,
      },
      endId: "8eb04ba7-0576-4247-a33f-7e7937854a4e",
      name: "TwoWayVEdge",
      id: "de4dabe6-b265-49ca-9592-f147cc41a911",
    },
    {
      start: {
        x: 100,
        y: 4860,
      },
      startId: "8eb04ba7-0576-4247-a33f-7e7937854a4e",
      end: {
        x: 40,
        y: 4320,
      },
      endId: "d5b69f2a-7f9c-4abc-871e-2179a7038b46",
      name: "TwoWayVEdge",
      id: "3b00b4af-a63d-4807-988e-db8e6f107218",
    },
    {
      start: {
        x: 40,
        y: 4320,
      },
      startId: "d5b69f2a-7f9c-4abc-871e-2179a7038b46",
      end: {
        x: 100,
        y: 3820,
      },
      endId: "14959377-a2f1-4783-8a52-eef6350a20c9",
      name: "TwoWayVEdge",
      id: "e121553a-9621-4a18-b585-ccb82680c1ab",
    },
    {
      start: {
        x: 100,
        y: 3820,
      },
      startId: "14959377-a2f1-4783-8a52-eef6350a20c9",
      end: {
        x: 40,
        y: 3300,
      },
      endId: "3dd1e3e4-9dae-42be-a371-8924cfc54df0",
      name: "TwoWayVEdge",
      id: "e14a98d8-48c1-41ec-a417-3b63695cbada",
    },
    {
      start: {
        x: 40,
        y: 3300,
      },
      startId: "3dd1e3e4-9dae-42be-a371-8924cfc54df0",
      end: {
        x: 100,
        y: 2820,
      },
      endId: "90084a9d-79e2-47f4-bd55-ccb4e2105346",
      name: "TwoWayVEdge",
      id: "0d23cf51-46a0-4ca6-aa73-b5ce6048d98c",
    },
    {
      start: {
        x: 100,
        y: 2820,
      },
      startId: "90084a9d-79e2-47f4-bd55-ccb4e2105346",
      end: {
        x: 40,
        y: 2320,
      },
      endId: "d024e8d4-2b18-43cd-8c02-a00e3b44bd1b",
      name: "TwoWayVEdge",
      id: "2297f134-1849-4b2f-b1f2-258f70dd536c",
    },
    {
      start: {
        x: 40,
        y: 2320,
      },
      startId: "d024e8d4-2b18-43cd-8c02-a00e3b44bd1b",
      end: {
        x: 60,
        y: 1760,
      },
      endId: "9f907b37-19f1-4b82-a38f-31ef2fbf8bd5",
      name: "TwoWayVEdge",
      id: "bf17a098-5954-40d4-8cd0-7f1bf98c90c9",
    },
    {
      start: {
        x: 60,
        y: 1760,
      },
      startId: "9f907b37-19f1-4b82-a38f-31ef2fbf8bd5",
      end: {
        x: 1060,
        y: 1760,
      },
      endId: "acc13049-c769-4c17-9539-f77e245c5aba",
      name: "TwoWayHEdge",
      id: "8ca3bf39-83d2-4f66-b9f3-3789a9f7b7bb",
    },
    {
      start: {
        x: 40,
        y: 2320,
      },
      startId: "d024e8d4-2b18-43cd-8c02-a00e3b44bd1b",
      end: {
        x: 580,
        y: 2300,
      },
      endId: "e7395235-85e5-444d-8afa-2c4bee156c94",
      name: "TwoWayHEdge",
      id: "095db4b4-b8e3-4e66-aab7-1c7808830921",
    },
    {
      start: {
        x: 580,
        y: 2300,
      },
      startId: "e7395235-85e5-444d-8afa-2c4bee156c94",
      end: {
        x: 1080,
        y: 2320,
      },
      endId: "5e2a0e1d-0d28-44ea-9cdd-7a14fda26c3b",
      name: "TwoWayHEdge",
      id: "21630c45-50ad-4604-acde-70c7d88cb34b",
    },
    {
      start: {
        x: 1060,
        y: 1760,
      },
      startId: "acc13049-c769-4c17-9539-f77e245c5aba",
      end: {
        x: 1080,
        y: 2320,
      },
      endId: "5e2a0e1d-0d28-44ea-9cdd-7a14fda26c3b",
      name: "TwoWayVEdge",
      id: "96e5a8d3-4dd4-4bf8-bbb3-815c99dde031",
    },
    {
      start: {
        x: 1080,
        y: 2320,
      },
      startId: "5e2a0e1d-0d28-44ea-9cdd-7a14fda26c3b",
      end: {
        x: 1600,
        y: 2300,
      },
      endId: "28cf8132-3a3f-4b87-b826-c939e803a9a3",
      name: "TwoWayHEdge",
      id: "8ccd8d72-2de4-428c-80d7-49e3989c4df1",
    },
    {
      start: {
        x: 1600,
        y: 2300,
      },
      startId: "28cf8132-3a3f-4b87-b826-c939e803a9a3",
      end: {
        x: 2160,
        y: 2340,
      },
      endId: "d27b6101-9800-4181-b1a5-e3d3d357ad71",
      name: "TwoWayHEdge",
      id: "273dd4cd-9846-49f4-8052-239983cd9339",
    },
    {
      start: {
        x: 1060,
        y: 1760,
      },
      startId: "acc13049-c769-4c17-9539-f77e245c5aba",
      end: {
        x: 1960,
        y: 1760,
      },
      endId: "cd5fb475-7e70-45f5-9b58-34d2ee1274b2",
      name: "TwoWayHEdge",
      id: "75da04d6-b6d4-41f3-84e8-88bb9824a52d",
    },
    {
      start: {
        x: 1960,
        y: 1760,
      },
      startId: "cd5fb475-7e70-45f5-9b58-34d2ee1274b2",
      end: {
        x: 1960,
        y: 1180,
      },
      endId: "0c3c3804-0ce7-47d4-9332-82cf2ee73152",
      name: "TwoWayVEdge",
      id: "feb15098-6484-48d5-a5a1-d01159535312",
    },
    {
      start: {
        x: 1960,
        y: 1180,
      },
      startId: "0c3c3804-0ce7-47d4-9332-82cf2ee73152",
      end: {
        x: 1960,
        y: 660,
      },
      endId: "05b37d35-456d-4f43-a960-25f1b70f55da",
      name: "TwoWayVEdge",
      id: "9ff58cc6-ee76-4703-825c-61d58f9601d9",
    },
    {
      start: {
        x: 1960,
        y: 660,
      },
      startId: "05b37d35-456d-4f43-a960-25f1b70f55da",
      end: {
        x: 1960,
        y: 80,
      },
      endId: "e30d3804-f872-4cc6-9e94-48362744d4da",
      name: "TwoWayVEdge",
      id: "18923ced-aa90-4451-a14c-2628733d856e",
    },
  ],
};
export default hawaiianIslandsCaveB2Map;
