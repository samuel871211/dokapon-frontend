import type { GraphJSON } from "global";

const southAmericaCaveB2Map: GraphJSON = {
  vertices: [
    {
      area: "SouthAmericaCaveB2",
      position: {
        x: 5180,
        y: 3640,
      },
      name: "BattleField",
      id: "8d8088b5-8894-4d59-af6c-4a557da93402",
      edges: [
        "7dc49d5b-c35a-4e6f-a2ff-905cc1b15560",
        "b595376b-c672-4e74-9cb2-91e0f10ca8c6",
        "83b8393b-fc7d-4507-b674-ca8b6ebb0cdd",
      ],
      bottom: "3eac7d6c-348a-4a42-934f-5b4689daa3ea",
      left: "31bc8ef3-c848-4204-b1dd-e267f32c553f",
      right: "d1c1042e-95df-4e73-ba5a-8fb05494cf0f",
    },
    {
      id: "3eac7d6c-348a-4a42-934f-5b4689daa3ea",
      area: "SouthAmericaCaveB2",
      name: "CaveField",
      position: {
        x: 5100,
        y: 4220,
      },
      edges: ["7dc49d5b-c35a-4e6f-a2ff-905cc1b15560"],
      top: "8d8088b5-8894-4d59-af6c-4a557da93402",
    },
    {
      id: "31bc8ef3-c848-4204-b1dd-e267f32c553f",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 4420,
        y: 3580,
      },
      edges: [
        "b595376b-c672-4e74-9cb2-91e0f10ca8c6",
        "d66de249-ab3e-485b-80bc-8363baab3907",
      ],
      right: "8d8088b5-8894-4d59-af6c-4a557da93402",
      top: "f5b81273-13a8-446b-9012-80e990e98cff",
    },
    {
      id: "f5b81273-13a8-446b-9012-80e990e98cff",
      area: "SouthAmericaCaveB2",
      name: "DamageField",
      position: {
        x: 4360,
        y: 3100,
      },
      edges: [
        "d66de249-ab3e-485b-80bc-8363baab3907",
        "349b3fa8-e543-4bd2-a806-4d215cdbe6f2",
        "4304e2f6-f88b-4f3a-9111-54806e9781bd",
        "c68d2715-ba7d-4cb0-a40d-fe191263d8cf",
      ],
      bottom: "31bc8ef3-c848-4204-b1dd-e267f32c553f",
      right: "2228cee4-d6cb-47c8-9a9c-6b8c9c650b82",
      top: "d3222f62-2050-4cce-b7d0-a2fe017cb934",
      left: "b0ba4c4d-4ade-4761-bc76-b5146788da20",
    },
    {
      id: "2228cee4-d6cb-47c8-9a9c-6b8c9c650b82",
      area: "SouthAmericaCaveB2",
      name: "CollectMoneyField",
      position: {
        x: 4940,
        y: 3040,
      },
      edges: [
        "349b3fa8-e543-4bd2-a806-4d215cdbe6f2",
        "509c4059-5cec-40b9-a489-5c819c2b12f4",
      ],
      left: "f5b81273-13a8-446b-9012-80e990e98cff",
      top: "c3235f53-4cd5-4bc6-8f92-a8c4d1426fa9",
    },
    {
      id: "d3222f62-2050-4cce-b7d0-a2fe017cb934",
      area: "SouthAmericaCaveB2",
      name: "MagicBookField",
      position: {
        x: 4440,
        y: 2180,
      },
      edges: [
        "4304e2f6-f88b-4f3a-9111-54806e9781bd",
        "a8561cdc-a03a-4c2e-b4e7-0a20721acb80",
      ],
      bottom: "f5b81273-13a8-446b-9012-80e990e98cff",
      right: "1765f288-70c7-4512-babf-4d0eceef1275",
    },
    {
      id: "1765f288-70c7-4512-babf-4d0eceef1275",
      area: "SouthAmericaCaveB2",
      name: "TreasureField",
      position: {
        x: 5040,
        y: 2140,
      },
      edges: [
        "a8561cdc-a03a-4c2e-b4e7-0a20721acb80",
        "b1d5e99e-b014-413f-839e-df8c98b4d500",
        "bae142b5-59dd-404b-8ee0-ca48fbec1da5",
      ],
      left: "d3222f62-2050-4cce-b7d0-a2fe017cb934",
      bottom: "c3235f53-4cd5-4bc6-8f92-a8c4d1426fa9",
      top: "f1a21495-a17e-44a7-bbf0-f44a21f7f60b",
    },
    {
      id: "c3235f53-4cd5-4bc6-8f92-a8c4d1426fa9",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 4840,
        y: 2600,
      },
      edges: [
        "b1d5e99e-b014-413f-839e-df8c98b4d500",
        "509c4059-5cec-40b9-a489-5c819c2b12f4",
        "e9096c18-07cb-4b27-9869-bc48a8aa6ff5",
      ],
      top: "1765f288-70c7-4512-babf-4d0eceef1275",
      bottom: "2228cee4-d6cb-47c8-9a9c-6b8c9c650b82",
      right: "a45f28aa-d026-4d9a-843f-42bfdf765fcd",
    },
    {
      id: "a45f28aa-d026-4d9a-843f-42bfdf765fcd",
      area: "SouthAmericaCaveB2",
      name: "TreasureField",
      position: {
        x: 5380,
        y: 2540,
      },
      edges: [
        "e9096c18-07cb-4b27-9869-bc48a8aa6ff5",
        "becd9e33-41d9-4d9c-bdd7-62621ba29cbc",
      ],
      left: "c3235f53-4cd5-4bc6-8f92-a8c4d1426fa9",
      top: "14c924c1-28cf-4a1f-8a01-1ac4d441b051",
    },
    {
      id: "f1a21495-a17e-44a7-bbf0-f44a21f7f60b",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 4840,
        y: 1720,
      },
      edges: [
        "bae142b5-59dd-404b-8ee0-ca48fbec1da5",
        "3c419898-4af6-48cc-ba83-3900a5ed2094",
      ],
      bottom: "1765f288-70c7-4512-babf-4d0eceef1275",
      right: "14c924c1-28cf-4a1f-8a01-1ac4d441b051",
    },
    {
      id: "14c924c1-28cf-4a1f-8a01-1ac4d441b051",
      area: "SouthAmericaCaveB2",
      name: "RedTreasureField",
      position: {
        x: 5480,
        y: 1660,
      },
      edges: [
        "3c419898-4af6-48cc-ba83-3900a5ed2094",
        "becd9e33-41d9-4d9c-bdd7-62621ba29cbc",
      ],
      left: "f1a21495-a17e-44a7-bbf0-f44a21f7f60b",
      bottom: "a45f28aa-d026-4d9a-843f-42bfdf765fcd",
    },
    {
      id: "d1c1042e-95df-4e73-ba5a-8fb05494cf0f",
      area: "SouthAmericaCaveB2",
      name: "DamageField",
      position: {
        x: 5900,
        y: 3560,
      },
      edges: [
        "83b8393b-fc7d-4507-b674-ca8b6ebb0cdd",
        "2a43b818-c0f5-472c-9e56-d1fee4f26d0d",
        "ffd442e3-a9c7-4279-aac0-5f6549123897",
      ],
      left: "8d8088b5-8894-4d59-af6c-4a557da93402",
      top: "333360d6-19bc-44a8-a90c-09ec4374161e",
      bottom: "65fb45a3-3e1b-4185-846e-995ae28a4a95",
    },
    {
      id: "333360d6-19bc-44a8-a90c-09ec4374161e",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 6020,
        y: 3140,
      },
      edges: [
        "2a43b818-c0f5-472c-9e56-d1fee4f26d0d",
        "1bf06785-4611-4adf-90f5-5cfb3b36711f",
        "bcce90d6-fa81-4a24-bad1-a3d97dd75f51",
      ],
      bottom: "d1c1042e-95df-4e73-ba5a-8fb05494cf0f",
      left: "fd8f37b0-d018-4b4e-839b-e5d1a8ce2026",
      right: "5ccdac71-2e8b-403f-bc50-23f8d12ecb63",
    },
    {
      id: "fd8f37b0-d018-4b4e-839b-e5d1a8ce2026",
      area: "SouthAmericaCaveB2",
      name: "TreasureField",
      position: {
        x: 5400,
        y: 3200,
      },
      edges: [
        "1bf06785-4611-4adf-90f5-5cfb3b36711f",
        "dafb5ca2-e5ea-4b21-ba6d-52e53217a03f",
      ],
      right: "333360d6-19bc-44a8-a90c-09ec4374161e",
      top: "aa8c7094-99ed-423c-9b0b-0f98f979ffe2",
    },
    {
      id: "aa8c7094-99ed-423c-9b0b-0f98f979ffe2",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 5480,
        y: 2720,
      },
      edges: [
        "dafb5ca2-e5ea-4b21-ba6d-52e53217a03f",
        "08a42b7a-4c2e-4778-9ea3-df0c7fe34cf4",
      ],
      bottom: "fd8f37b0-d018-4b4e-839b-e5d1a8ce2026",
      right: "53fe641d-5287-4955-9d56-09c39ec7a0a0",
    },
    {
      id: "65fb45a3-3e1b-4185-846e-995ae28a4a95",
      area: "SouthAmericaCaveB2",
      name: "TreasureField",
      position: {
        x: 5980,
        y: 4060,
      },
      edges: [
        "ffd442e3-a9c7-4279-aac0-5f6549123897",
        "06736ab8-c1e8-4b7c-bd64-45a8050f0336",
      ],
      top: "d1c1042e-95df-4e73-ba5a-8fb05494cf0f",
      right: "5f9e4638-21ed-4644-bbe9-cb4fdd184f99",
    },
    {
      id: "5f9e4638-21ed-4644-bbe9-cb4fdd184f99",
      area: "SouthAmericaCaveB2",
      name: "DamageField",
      position: {
        x: 6740,
        y: 4020,
      },
      edges: [
        "06736ab8-c1e8-4b7c-bd64-45a8050f0336",
        "806206e5-576f-4723-ac2f-134c15e9f3b5",
      ],
      left: "65fb45a3-3e1b-4185-846e-995ae28a4a95",
      top: "5ccdac71-2e8b-403f-bc50-23f8d12ecb63",
    },
    {
      id: "5ccdac71-2e8b-403f-bc50-23f8d12ecb63",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 6740,
        y: 3160,
      },
      edges: [
        "bcce90d6-fa81-4a24-bad1-a3d97dd75f51",
        "806206e5-576f-4723-ac2f-134c15e9f3b5",
        "f0827023-f847-4e62-b8bf-1cbf8f831a20",
      ],
      left: "333360d6-19bc-44a8-a90c-09ec4374161e",
      bottom: "5f9e4638-21ed-4644-bbe9-cb4fdd184f99",
      top: "53fe641d-5287-4955-9d56-09c39ec7a0a0",
    },
    {
      id: "53fe641d-5287-4955-9d56-09c39ec7a0a0",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 6640,
        y: 2660,
      },
      edges: [
        "f0827023-f847-4e62-b8bf-1cbf8f831a20",
        "08a42b7a-4c2e-4778-9ea3-df0c7fe34cf4",
        "30a76955-68d1-49c2-a699-63362e0f624f",
      ],
      bottom: "5ccdac71-2e8b-403f-bc50-23f8d12ecb63",
      left: "aa8c7094-99ed-423c-9b0b-0f98f979ffe2",
      top: "fbe9457e-d3b4-4558-a134-9b3857e158dc",
    },
    {
      id: "fbe9457e-d3b4-4558-a134-9b3857e158dc",
      area: "SouthAmericaCaveB2",
      name: "GoldTreasureField",
      position: {
        x: 6720,
        y: 2120,
      },
      edges: [
        "30a76955-68d1-49c2-a699-63362e0f624f",
        "aeeaf479-e819-4740-a89d-994052000ff3",
      ],
      bottom: "53fe641d-5287-4955-9d56-09c39ec7a0a0",
      top: "913ad48a-2d6d-429c-867c-db3dba0de83f",
    },
    {
      id: "913ad48a-2d6d-429c-867c-db3dba0de83f",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 6600,
        y: 1580,
      },
      edges: [
        "aeeaf479-e819-4740-a89d-994052000ff3",
        "96cba4ca-5482-4a5c-8169-6be262590d83",
      ],
      bottom: "fbe9457e-d3b4-4558-a134-9b3857e158dc",
      top: "89322cd8-949f-4844-bfe4-976a76fa61dd",
    },
    {
      id: "89322cd8-949f-4844-bfe4-976a76fa61dd",
      area: "SouthAmericaCaveB2",
      name: "CaveField",
      position: {
        x: 6700,
        y: 1020,
      },
      edges: ["96cba4ca-5482-4a5c-8169-6be262590d83"],
      bottom: "913ad48a-2d6d-429c-867c-db3dba0de83f",
    },
    {
      id: "b0ba4c4d-4ade-4761-bc76-b5146788da20",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 3780,
        y: 3040,
      },
      edges: [
        "c68d2715-ba7d-4cb0-a40d-fe191263d8cf",
        "30e586ba-d466-4843-9041-63a5040aee4f",
      ],
      right: "f5b81273-13a8-446b-9012-80e990e98cff",
      left: "357a7373-9899-4817-8005-63946db6bcf4",
    },
    {
      id: "357a7373-9899-4817-8005-63946db6bcf4",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 3220,
        y: 2980,
      },
      edges: [
        "30e586ba-d466-4843-9041-63a5040aee4f",
        "e5aaaeff-2e69-4a5d-8a02-aec94be9b74d",
        "f71860c6-5242-463a-b562-151ef3788253",
      ],
      right: "b0ba4c4d-4ade-4761-bc76-b5146788da20",
      top: "5a027fcf-c954-433e-87e1-abbc0a6736bc",
      left: "87a3de88-87ce-4850-be9b-3398648e8e22",
    },
    {
      id: "5a027fcf-c954-433e-87e1-abbc0a6736bc",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 3340,
        y: 2440,
      },
      edges: [
        "e5aaaeff-2e69-4a5d-8a02-aec94be9b74d",
        "64231682-f036-4a9c-933b-947df2928e06",
      ],
      bottom: "357a7373-9899-4817-8005-63946db6bcf4",
      top: "471c8f4f-d669-491c-b873-c477da8161e8",
    },
    {
      id: "471c8f4f-d669-491c-b873-c477da8161e8",
      area: "SouthAmericaCaveB2",
      name: "RedTreasureField",
      position: {
        x: 3320,
        y: 1960,
      },
      edges: [
        "64231682-f036-4a9c-933b-947df2928e06",
        "d6f838ba-eb51-451d-b7e7-3657e763965d",
      ],
      bottom: "5a027fcf-c954-433e-87e1-abbc0a6736bc",
      top: "8b1d6a5c-b1bb-4af1-a322-974bdf14d47c",
    },
    {
      id: "8b1d6a5c-b1bb-4af1-a322-974bdf14d47c",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 3420,
        y: 1500,
      },
      edges: [
        "d6f838ba-eb51-451d-b7e7-3657e763965d",
        "0d352621-5d4d-454e-9603-1182c2492900",
      ],
      bottom: "471c8f4f-d669-491c-b873-c477da8161e8",
      top: "5e006a9f-1254-487d-a769-4dc34d7a111a",
    },
    {
      id: "5e006a9f-1254-487d-a769-4dc34d7a111a",
      area: "SouthAmericaCaveB2",
      name: "KeyTreasureField",
      position: {
        x: 3360,
        y: 1020,
      },
      edges: ["0d352621-5d4d-454e-9603-1182c2492900"],
      bottom: "8b1d6a5c-b1bb-4af1-a322-974bdf14d47c",
    },
    {
      id: "87a3de88-87ce-4850-be9b-3398648e8e22",
      area: "SouthAmericaCaveB2",
      name: "MagicBookField",
      position: {
        x: 2660,
        y: 3040,
      },
      edges: [
        "f71860c6-5242-463a-b562-151ef3788253",
        "50af39c4-587b-42c7-b626-8ff1156d93a4",
      ],
      right: "357a7373-9899-4817-8005-63946db6bcf4",
      left: "444269da-17df-4142-8a7c-2f4664e4093a",
    },
    {
      id: "444269da-17df-4142-8a7c-2f4664e4093a",
      area: "SouthAmericaCaveB2",
      name: "TreasureField",
      position: {
        x: 2100,
        y: 2980,
      },
      edges: [
        "50af39c4-587b-42c7-b626-8ff1156d93a4",
        "80e1d911-57ec-4c6a-b135-984f29922698",
        "89487fa8-ab03-4b56-823b-3e5d2216d137",
      ],
      right: "87a3de88-87ce-4850-be9b-3398648e8e22",
      top: "627dd83a-44ba-451c-91b6-cea12647ddbf",
      bottom: "cf3afbc0-0686-40a2-a849-ccc16f060c83",
    },
    {
      id: "627dd83a-44ba-451c-91b6-cea12647ddbf",
      area: "SouthAmericaCaveB2",
      name: "DamageField",
      position: {
        x: 2220,
        y: 2320,
      },
      edges: [
        "80e1d911-57ec-4c6a-b135-984f29922698",
        "d3cd3885-4f3d-493c-ab4a-41dd815deb19",
      ],
      bottom: "444269da-17df-4142-8a7c-2f4664e4093a",
      left: "d23c585c-54cb-4e48-9b0d-0e3c5979a184",
    },
    {
      id: "d23c585c-54cb-4e48-9b0d-0e3c5979a184",
      area: "SouthAmericaCaveB2",
      name: "DamageField",
      position: {
        x: 1680,
        y: 2240,
      },
      edges: [
        "d3cd3885-4f3d-493c-ab4a-41dd815deb19",
        "edc4b4c8-94d6-4dff-952e-4af4923a37f1",
        "2bdbc765-b502-4560-a50c-ac760f2742c5",
      ],
      right: "627dd83a-44ba-451c-91b6-cea12647ddbf",
      left: "0183ebd4-0325-46ae-bc73-c34b2091670f",
      bottom: "3427761c-0339-45a5-989f-f76347205eba",
    },
    {
      id: "cf3afbc0-0686-40a2-a849-ccc16f060c83",
      area: "SouthAmericaCaveB2",
      name: "CaveField",
      position: {
        x: 1960,
        y: 3500,
      },
      edges: ["89487fa8-ab03-4b56-823b-3e5d2216d137"],
      top: "444269da-17df-4142-8a7c-2f4664e4093a",
    },
    {
      id: "0183ebd4-0325-46ae-bc73-c34b2091670f",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 1120,
        y: 2280,
      },
      edges: [
        "edc4b4c8-94d6-4dff-952e-4af4923a37f1",
        "a948029c-3e66-4344-bfa9-bd405f3db51e",
      ],
      right: "d23c585c-54cb-4e48-9b0d-0e3c5979a184",
      left: "d6314eea-e587-4f92-9b56-fe23a81e14e5",
    },
    {
      id: "d6314eea-e587-4f92-9b56-fe23a81e14e5",
      area: "SouthAmericaCaveB2",
      name: "TreasureField",
      position: {
        x: 580,
        y: 2160,
      },
      edges: [
        "a948029c-3e66-4344-bfa9-bd405f3db51e",
        "6e241090-19bc-4f0c-a576-e2fc91818d6b",
        "2f6b36a3-45e4-4b9f-a5ac-f82970ddf1a5",
      ],
      right: "0183ebd4-0325-46ae-bc73-c34b2091670f",
      bottom: "cbfba813-bbc4-43d1-9b39-141f7ea4f413",
      left: "a43f7ab0-1da1-4afc-a371-8e4a4d74b411",
    },
    {
      id: "cbfba813-bbc4-43d1-9b39-141f7ea4f413",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 500,
        y: 2760,
      },
      edges: [
        "6e241090-19bc-4f0c-a576-e2fc91818d6b",
        "aea57045-4457-4dc9-9ee8-fc1f011e0fc5",
      ],
      top: "d6314eea-e587-4f92-9b56-fe23a81e14e5",
      right: "3427761c-0339-45a5-989f-f76347205eba",
    },
    {
      id: "3427761c-0339-45a5-989f-f76347205eba",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 1600,
        y: 2760,
      },
      edges: [
        "aea57045-4457-4dc9-9ee8-fc1f011e0fc5",
        "2bdbc765-b502-4560-a50c-ac760f2742c5",
      ],
      left: "cbfba813-bbc4-43d1-9b39-141f7ea4f413",
      top: "d23c585c-54cb-4e48-9b0d-0e3c5979a184",
    },
    {
      id: "a43f7ab0-1da1-4afc-a371-8e4a4d74b411",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 40,
        y: 2160,
      },
      edges: [
        "2f6b36a3-45e4-4b9f-a5ac-f82970ddf1a5",
        "6dde08b7-e28a-4723-8476-cafc67eef683",
      ],
      right: "d6314eea-e587-4f92-9b56-fe23a81e14e5",
      top: "5fb7c4c9-c0e5-41f7-a6d0-7d9b8de3a4d5",
    },
    {
      id: "5fb7c4c9-c0e5-41f7-a6d0-7d9b8de3a4d5",
      area: "SouthAmericaCaveB2",
      name: "TreasureField",
      position: {
        x: 100,
        y: 1620,
      },
      edges: [
        "6dde08b7-e28a-4723-8476-cafc67eef683",
        "105a455f-aa81-4ab8-a6f6-0c2127d92a99",
      ],
      bottom: "a43f7ab0-1da1-4afc-a371-8e4a4d74b411",
      top: "0998479f-81a5-446e-8796-cabcc3bfce21",
    },
    {
      id: "0998479f-81a5-446e-8796-cabcc3bfce21",
      area: "SouthAmericaCaveB2",
      name: "DamageField",
      position: {
        x: 260,
        y: 1120,
      },
      edges: [
        "105a455f-aa81-4ab8-a6f6-0c2127d92a99",
        "4b2e4c7f-c74e-4599-9c01-ffb67597bd0f",
      ],
      bottom: "5fb7c4c9-c0e5-41f7-a6d0-7d9b8de3a4d5",
      top: "549e6acf-830a-4cfd-b965-35ef64db0af7",
    },
    {
      id: "549e6acf-830a-4cfd-b965-35ef64db0af7",
      area: "SouthAmericaCaveB2",
      name: "BattleField",
      position: {
        x: 360,
        y: 600,
      },
      edges: [
        "4b2e4c7f-c74e-4599-9c01-ffb67597bd0f",
        "3600169c-8f0b-49a4-8dd2-c2d0a418533f",
      ],
      bottom: "0998479f-81a5-446e-8796-cabcc3bfce21",
      right: "4fe6193c-cb73-4cdc-bc1a-d058bdea8f14",
    },
    {
      id: "4fe6193c-cb73-4cdc-bc1a-d058bdea8f14",
      area: "SouthAmericaCaveB2",
      name: "GoldTreasureField",
      position: {
        x: 940,
        y: 580,
      },
      edges: [
        "3600169c-8f0b-49a4-8dd2-c2d0a418533f",
        "b66cddb1-1ff6-4afd-816b-c8d648a7dc06",
      ],
      left: "549e6acf-830a-4cfd-b965-35ef64db0af7",
      top: "16641c6d-872c-4082-a948-3105c1419628",
    },
    {
      id: "16641c6d-872c-4082-a948-3105c1419628",
      area: "SouthAmericaCaveB2",
      name: "CaveField",
      position: {
        x: 980,
        y: 40,
      },
      edges: ["b66cddb1-1ff6-4afd-816b-c8d648a7dc06"],
      bottom: "4fe6193c-cb73-4cdc-bc1a-d058bdea8f14",
    },
  ],
  edges: [
    {
      start: {
        x: 5180,
        y: 3640,
      },
      startId: "8d8088b5-8894-4d59-af6c-4a557da93402",
      end: {
        x: 5100,
        y: 4220,
      },
      endId: "3eac7d6c-348a-4a42-934f-5b4689daa3ea",
      name: "TwoWayVEdge",
      id: "7dc49d5b-c35a-4e6f-a2ff-905cc1b15560",
    },
    {
      start: {
        x: 5180,
        y: 3640,
      },
      startId: "8d8088b5-8894-4d59-af6c-4a557da93402",
      end: {
        x: 4420,
        y: 3580,
      },
      endId: "31bc8ef3-c848-4204-b1dd-e267f32c553f",
      name: "TwoWayHEdge",
      id: "b595376b-c672-4e74-9cb2-91e0f10ca8c6",
    },
    {
      start: {
        x: 4420,
        y: 3580,
      },
      startId: "31bc8ef3-c848-4204-b1dd-e267f32c553f",
      end: {
        x: 4360,
        y: 3100,
      },
      endId: "f5b81273-13a8-446b-9012-80e990e98cff",
      name: "TwoWayVEdge",
      id: "d66de249-ab3e-485b-80bc-8363baab3907",
    },
    {
      start: {
        x: 4360,
        y: 3100,
      },
      startId: "f5b81273-13a8-446b-9012-80e990e98cff",
      end: {
        x: 4940,
        y: 3040,
      },
      endId: "2228cee4-d6cb-47c8-9a9c-6b8c9c650b82",
      name: "TwoWayHEdge",
      id: "349b3fa8-e543-4bd2-a806-4d215cdbe6f2",
    },
    {
      start: {
        x: 4360,
        y: 3100,
      },
      startId: "f5b81273-13a8-446b-9012-80e990e98cff",
      end: {
        x: 4440,
        y: 2180,
      },
      endId: "d3222f62-2050-4cce-b7d0-a2fe017cb934",
      name: "TwoWayVEdge",
      id: "4304e2f6-f88b-4f3a-9111-54806e9781bd",
    },
    {
      start: {
        x: 4440,
        y: 2180,
      },
      startId: "d3222f62-2050-4cce-b7d0-a2fe017cb934",
      end: {
        x: 5040,
        y: 2140,
      },
      endId: "1765f288-70c7-4512-babf-4d0eceef1275",
      name: "TwoWayHEdge",
      id: "a8561cdc-a03a-4c2e-b4e7-0a20721acb80",
    },
    {
      start: {
        x: 5040,
        y: 2140,
      },
      startId: "1765f288-70c7-4512-babf-4d0eceef1275",
      end: {
        x: 4840,
        y: 2600,
      },
      endId: "c3235f53-4cd5-4bc6-8f92-a8c4d1426fa9",
      name: "TwoWayVEdge",
      id: "b1d5e99e-b014-413f-839e-df8c98b4d500",
    },
    {
      start: {
        x: 4840,
        y: 2600,
      },
      startId: "c3235f53-4cd5-4bc6-8f92-a8c4d1426fa9",
      end: {
        x: 4940,
        y: 3040,
      },
      endId: "2228cee4-d6cb-47c8-9a9c-6b8c9c650b82",
      name: "TwoWayVEdge",
      id: "509c4059-5cec-40b9-a489-5c819c2b12f4",
    },
    {
      start: {
        x: 4840,
        y: 2600,
      },
      startId: "c3235f53-4cd5-4bc6-8f92-a8c4d1426fa9",
      end: {
        x: 5380,
        y: 2540,
      },
      endId: "a45f28aa-d026-4d9a-843f-42bfdf765fcd",
      name: "TwoWayHEdge",
      id: "e9096c18-07cb-4b27-9869-bc48a8aa6ff5",
    },
    {
      start: {
        x: 5040,
        y: 2140,
      },
      startId: "1765f288-70c7-4512-babf-4d0eceef1275",
      end: {
        x: 4840,
        y: 1720,
      },
      endId: "f1a21495-a17e-44a7-bbf0-f44a21f7f60b",
      name: "TwoWayVEdge",
      id: "bae142b5-59dd-404b-8ee0-ca48fbec1da5",
    },
    {
      start: {
        x: 4840,
        y: 1720,
      },
      startId: "f1a21495-a17e-44a7-bbf0-f44a21f7f60b",
      end: {
        x: 5480,
        y: 1660,
      },
      endId: "14c924c1-28cf-4a1f-8a01-1ac4d441b051",
      name: "TwoWayHEdge",
      id: "3c419898-4af6-48cc-ba83-3900a5ed2094",
    },
    {
      start: {
        x: 5480,
        y: 1660,
      },
      startId: "14c924c1-28cf-4a1f-8a01-1ac4d441b051",
      end: {
        x: 5380,
        y: 2540,
      },
      endId: "a45f28aa-d026-4d9a-843f-42bfdf765fcd",
      name: "TwoWayVEdge",
      id: "becd9e33-41d9-4d9c-bdd7-62621ba29cbc",
    },
    {
      start: {
        x: 5180,
        y: 3640,
      },
      startId: "8d8088b5-8894-4d59-af6c-4a557da93402",
      end: {
        x: 5900,
        y: 3560,
      },
      endId: "d1c1042e-95df-4e73-ba5a-8fb05494cf0f",
      name: "TwoWayHEdge",
      id: "83b8393b-fc7d-4507-b674-ca8b6ebb0cdd",
    },
    {
      start: {
        x: 5900,
        y: 3560,
      },
      startId: "d1c1042e-95df-4e73-ba5a-8fb05494cf0f",
      end: {
        x: 6020,
        y: 3140,
      },
      endId: "333360d6-19bc-44a8-a90c-09ec4374161e",
      name: "TwoWayVEdge",
      id: "2a43b818-c0f5-472c-9e56-d1fee4f26d0d",
    },
    {
      start: {
        x: 6020,
        y: 3140,
      },
      startId: "333360d6-19bc-44a8-a90c-09ec4374161e",
      end: {
        x: 5400,
        y: 3200,
      },
      endId: "fd8f37b0-d018-4b4e-839b-e5d1a8ce2026",
      name: "TwoWayHEdge",
      id: "1bf06785-4611-4adf-90f5-5cfb3b36711f",
    },
    {
      start: {
        x: 5400,
        y: 3200,
      },
      startId: "fd8f37b0-d018-4b4e-839b-e5d1a8ce2026",
      end: {
        x: 5480,
        y: 2720,
      },
      endId: "aa8c7094-99ed-423c-9b0b-0f98f979ffe2",
      name: "TwoWayVEdge",
      id: "dafb5ca2-e5ea-4b21-ba6d-52e53217a03f",
    },
    {
      start: {
        x: 5900,
        y: 3560,
      },
      startId: "d1c1042e-95df-4e73-ba5a-8fb05494cf0f",
      end: {
        x: 5980,
        y: 4060,
      },
      endId: "65fb45a3-3e1b-4185-846e-995ae28a4a95",
      name: "TwoWayVEdge",
      id: "ffd442e3-a9c7-4279-aac0-5f6549123897",
    },
    {
      start: {
        x: 5980,
        y: 4060,
      },
      startId: "65fb45a3-3e1b-4185-846e-995ae28a4a95",
      end: {
        x: 6740,
        y: 4020,
      },
      endId: "5f9e4638-21ed-4644-bbe9-cb4fdd184f99",
      name: "TwoWayHEdge",
      id: "06736ab8-c1e8-4b7c-bd64-45a8050f0336",
    },
    {
      start: {
        x: 6020,
        y: 3140,
      },
      startId: "333360d6-19bc-44a8-a90c-09ec4374161e",
      end: {
        x: 6740,
        y: 3160,
      },
      endId: "5ccdac71-2e8b-403f-bc50-23f8d12ecb63",
      name: "TwoWayHEdge",
      id: "bcce90d6-fa81-4a24-bad1-a3d97dd75f51",
    },
    {
      start: {
        x: 6740,
        y: 3160,
      },
      startId: "5ccdac71-2e8b-403f-bc50-23f8d12ecb63",
      end: {
        x: 6740,
        y: 4020,
      },
      endId: "5f9e4638-21ed-4644-bbe9-cb4fdd184f99",
      name: "TwoWayVEdge",
      id: "806206e5-576f-4723-ac2f-134c15e9f3b5",
    },
    {
      start: {
        x: 6740,
        y: 3160,
      },
      startId: "5ccdac71-2e8b-403f-bc50-23f8d12ecb63",
      end: {
        x: 6640,
        y: 2660,
      },
      endId: "53fe641d-5287-4955-9d56-09c39ec7a0a0",
      name: "TwoWayVEdge",
      id: "f0827023-f847-4e62-b8bf-1cbf8f831a20",
    },
    {
      start: {
        x: 6640,
        y: 2660,
      },
      startId: "53fe641d-5287-4955-9d56-09c39ec7a0a0",
      end: {
        x: 5480,
        y: 2720,
      },
      endId: "aa8c7094-99ed-423c-9b0b-0f98f979ffe2",
      name: "TwoWayHEdge",
      id: "08a42b7a-4c2e-4778-9ea3-df0c7fe34cf4",
    },
    {
      start: {
        x: 6640,
        y: 2660,
      },
      startId: "53fe641d-5287-4955-9d56-09c39ec7a0a0",
      end: {
        x: 6720,
        y: 2120,
      },
      endId: "fbe9457e-d3b4-4558-a134-9b3857e158dc",
      name: "TwoWayVEdge",
      id: "30a76955-68d1-49c2-a699-63362e0f624f",
    },
    {
      start: {
        x: 6720,
        y: 2120,
      },
      startId: "fbe9457e-d3b4-4558-a134-9b3857e158dc",
      end: {
        x: 6600,
        y: 1580,
      },
      endId: "913ad48a-2d6d-429c-867c-db3dba0de83f",
      name: "TwoWayVEdge",
      id: "aeeaf479-e819-4740-a89d-994052000ff3",
    },
    {
      start: {
        x: 6600,
        y: 1580,
      },
      startId: "913ad48a-2d6d-429c-867c-db3dba0de83f",
      end: {
        x: 6700,
        y: 1020,
      },
      endId: "89322cd8-949f-4844-bfe4-976a76fa61dd",
      name: "TwoWayVEdge",
      id: "96cba4ca-5482-4a5c-8169-6be262590d83",
    },
    {
      start: {
        x: 4360,
        y: 3100,
      },
      startId: "f5b81273-13a8-446b-9012-80e990e98cff",
      end: {
        x: 3780,
        y: 3040,
      },
      endId: "b0ba4c4d-4ade-4761-bc76-b5146788da20",
      name: "TwoWayHEdge",
      id: "c68d2715-ba7d-4cb0-a40d-fe191263d8cf",
    },
    {
      start: {
        x: 3780,
        y: 3040,
      },
      startId: "b0ba4c4d-4ade-4761-bc76-b5146788da20",
      end: {
        x: 3220,
        y: 2980,
      },
      endId: "357a7373-9899-4817-8005-63946db6bcf4",
      name: "TwoWayHEdge",
      id: "30e586ba-d466-4843-9041-63a5040aee4f",
    },
    {
      start: {
        x: 3220,
        y: 2980,
      },
      startId: "357a7373-9899-4817-8005-63946db6bcf4",
      end: {
        x: 3340,
        y: 2440,
      },
      endId: "5a027fcf-c954-433e-87e1-abbc0a6736bc",
      name: "TwoWayVEdge",
      id: "e5aaaeff-2e69-4a5d-8a02-aec94be9b74d",
    },
    {
      start: {
        x: 3340,
        y: 2440,
      },
      startId: "5a027fcf-c954-433e-87e1-abbc0a6736bc",
      end: {
        x: 3320,
        y: 1960,
      },
      endId: "471c8f4f-d669-491c-b873-c477da8161e8",
      name: "TwoWayVEdge",
      id: "64231682-f036-4a9c-933b-947df2928e06",
    },
    {
      start: {
        x: 3320,
        y: 1960,
      },
      startId: "471c8f4f-d669-491c-b873-c477da8161e8",
      end: {
        x: 3420,
        y: 1500,
      },
      endId: "8b1d6a5c-b1bb-4af1-a322-974bdf14d47c",
      name: "TwoWayVEdge",
      id: "d6f838ba-eb51-451d-b7e7-3657e763965d",
    },
    {
      start: {
        x: 3420,
        y: 1500,
      },
      startId: "8b1d6a5c-b1bb-4af1-a322-974bdf14d47c",
      end: {
        x: 3360,
        y: 1020,
      },
      endId: "5e006a9f-1254-487d-a769-4dc34d7a111a",
      name: "TwoWayVEdge",
      id: "0d352621-5d4d-454e-9603-1182c2492900",
    },
    {
      start: {
        x: 3220,
        y: 2980,
      },
      startId: "357a7373-9899-4817-8005-63946db6bcf4",
      end: {
        x: 2660,
        y: 3040,
      },
      endId: "87a3de88-87ce-4850-be9b-3398648e8e22",
      name: "TwoWayHEdge",
      id: "f71860c6-5242-463a-b562-151ef3788253",
    },
    {
      start: {
        x: 2660,
        y: 3040,
      },
      startId: "87a3de88-87ce-4850-be9b-3398648e8e22",
      end: {
        x: 2100,
        y: 2980,
      },
      endId: "444269da-17df-4142-8a7c-2f4664e4093a",
      name: "TwoWayHEdge",
      id: "50af39c4-587b-42c7-b626-8ff1156d93a4",
    },
    {
      start: {
        x: 2100,
        y: 2980,
      },
      startId: "444269da-17df-4142-8a7c-2f4664e4093a",
      end: {
        x: 2220,
        y: 2320,
      },
      endId: "627dd83a-44ba-451c-91b6-cea12647ddbf",
      name: "TwoWayVEdge",
      id: "80e1d911-57ec-4c6a-b135-984f29922698",
    },
    {
      start: {
        x: 2220,
        y: 2320,
      },
      startId: "627dd83a-44ba-451c-91b6-cea12647ddbf",
      end: {
        x: 1680,
        y: 2240,
      },
      endId: "d23c585c-54cb-4e48-9b0d-0e3c5979a184",
      name: "TwoWayHEdge",
      id: "d3cd3885-4f3d-493c-ab4a-41dd815deb19",
    },
    {
      start: {
        x: 2100,
        y: 2980,
      },
      startId: "444269da-17df-4142-8a7c-2f4664e4093a",
      end: {
        x: 1960,
        y: 3500,
      },
      endId: "cf3afbc0-0686-40a2-a849-ccc16f060c83",
      name: "TwoWayVEdge",
      id: "89487fa8-ab03-4b56-823b-3e5d2216d137",
    },
    {
      start: {
        x: 1680,
        y: 2240,
      },
      startId: "d23c585c-54cb-4e48-9b0d-0e3c5979a184",
      end: {
        x: 1120,
        y: 2280,
      },
      endId: "0183ebd4-0325-46ae-bc73-c34b2091670f",
      name: "TwoWayHEdge",
      id: "edc4b4c8-94d6-4dff-952e-4af4923a37f1",
    },
    {
      start: {
        x: 1120,
        y: 2280,
      },
      startId: "0183ebd4-0325-46ae-bc73-c34b2091670f",
      end: {
        x: 580,
        y: 2160,
      },
      endId: "d6314eea-e587-4f92-9b56-fe23a81e14e5",
      name: "TwoWayHEdge",
      id: "a948029c-3e66-4344-bfa9-bd405f3db51e",
    },
    {
      start: {
        x: 580,
        y: 2160,
      },
      startId: "d6314eea-e587-4f92-9b56-fe23a81e14e5",
      end: {
        x: 500,
        y: 2760,
      },
      endId: "cbfba813-bbc4-43d1-9b39-141f7ea4f413",
      name: "TwoWayVEdge",
      id: "6e241090-19bc-4f0c-a576-e2fc91818d6b",
    },
    {
      start: {
        x: 500,
        y: 2760,
      },
      startId: "cbfba813-bbc4-43d1-9b39-141f7ea4f413",
      end: {
        x: 1600,
        y: 2760,
      },
      endId: "3427761c-0339-45a5-989f-f76347205eba",
      name: "TwoWayHEdge",
      id: "aea57045-4457-4dc9-9ee8-fc1f011e0fc5",
    },
    {
      start: {
        x: 1600,
        y: 2760,
      },
      startId: "3427761c-0339-45a5-989f-f76347205eba",
      end: {
        x: 1680,
        y: 2240,
      },
      endId: "d23c585c-54cb-4e48-9b0d-0e3c5979a184",
      name: "TwoWayVEdge",
      id: "2bdbc765-b502-4560-a50c-ac760f2742c5",
    },
    {
      start: {
        x: 580,
        y: 2160,
      },
      startId: "d6314eea-e587-4f92-9b56-fe23a81e14e5",
      end: {
        x: 40,
        y: 2160,
      },
      endId: "a43f7ab0-1da1-4afc-a371-8e4a4d74b411",
      name: "TwoWayHEdge",
      id: "2f6b36a3-45e4-4b9f-a5ac-f82970ddf1a5",
    },
    {
      start: {
        x: 40,
        y: 2160,
      },
      startId: "a43f7ab0-1da1-4afc-a371-8e4a4d74b411",
      end: {
        x: 100,
        y: 1620,
      },
      endId: "5fb7c4c9-c0e5-41f7-a6d0-7d9b8de3a4d5",
      name: "TwoWayVEdge",
      id: "6dde08b7-e28a-4723-8476-cafc67eef683",
    },
    {
      start: {
        x: 100,
        y: 1620,
      },
      startId: "5fb7c4c9-c0e5-41f7-a6d0-7d9b8de3a4d5",
      end: {
        x: 260,
        y: 1120,
      },
      endId: "0998479f-81a5-446e-8796-cabcc3bfce21",
      name: "TwoWayVEdge",
      id: "105a455f-aa81-4ab8-a6f6-0c2127d92a99",
    },
    {
      start: {
        x: 260,
        y: 1120,
      },
      startId: "0998479f-81a5-446e-8796-cabcc3bfce21",
      end: {
        x: 360,
        y: 600,
      },
      endId: "549e6acf-830a-4cfd-b965-35ef64db0af7",
      name: "TwoWayVEdge",
      id: "4b2e4c7f-c74e-4599-9c01-ffb67597bd0f",
    },
    {
      start: {
        x: 360,
        y: 600,
      },
      startId: "549e6acf-830a-4cfd-b965-35ef64db0af7",
      end: {
        x: 940,
        y: 580,
      },
      endId: "4fe6193c-cb73-4cdc-bc1a-d058bdea8f14",
      name: "TwoWayHEdge",
      id: "3600169c-8f0b-49a4-8dd2-c2d0a418533f",
    },
    {
      start: {
        x: 940,
        y: 580,
      },
      startId: "4fe6193c-cb73-4cdc-bc1a-d058bdea8f14",
      end: {
        x: 980,
        y: 40,
      },
      endId: "16641c6d-872c-4082-a948-3105c1419628",
      name: "TwoWayVEdge",
      id: "b66cddb1-1ff6-4afd-816b-c8d648a7dc06",
    },
  ],
};
export default southAmericaCaveB2Map;
