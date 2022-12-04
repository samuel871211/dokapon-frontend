import type { GraphJSON } from "global";

const antarcticaCaveB2Map: GraphJSON = {
  vertices: [
    {
      position: {
        x: 4640,
        y: 5040,
      },
      name: "BattleField",
      id: "923bc7a0-ba19-4481-b5be-2bbd68515476",
      edges: [
        "f8955788-4f60-4add-9c76-48f3618fb31e",
        "ec5ee784-32ec-4fa0-828f-eaddf4531126",
      ],
      area: "Africa",
      top: "c9c35337-0499-4f02-afe2-6643276240e9",
      right: "d31ad649-f3c4-4ea0-8210-657dd95ffd95",
    },
    {
      id: "c9c35337-0499-4f02-afe2-6643276240e9",
      name: "CaveField",
      position: {
        x: 4600,
        y: 4520,
      },
      edges: ["f8955788-4f60-4add-9c76-48f3618fb31e"],
      area: "AntarcticaCaveB2",
      bottom: "923bc7a0-ba19-4481-b5be-2bbd68515476",
    },
    {
      id: "d31ad649-f3c4-4ea0-8210-657dd95ffd95",
      name: "BattleField",
      position: {
        x: 5180,
        y: 5060,
      },
      edges: [
        "ec5ee784-32ec-4fa0-828f-eaddf4531126",
        "e3d8b9dc-19f1-42c3-9647-3addd7959706",
      ],
      area: "AntarcticaCaveB2",
      left: "923bc7a0-ba19-4481-b5be-2bbd68515476",
      bottom: "3409b6ad-c806-40b4-860f-7216fd742c49",
    },
    {
      id: "3409b6ad-c806-40b4-860f-7216fd742c49",
      name: "TreasureField",
      position: {
        x: 5120,
        y: 5460,
      },
      edges: [
        "e3d8b9dc-19f1-42c3-9647-3addd7959706",
        "8a993d40-10b6-4bbc-96a8-d06c5e4781b0",
        "6029a7fa-ff50-4b1a-92d9-72d0403b4c63",
      ],
      area: "AntarcticaCaveB2",
      top: "d31ad649-f3c4-4ea0-8210-657dd95ffd95",
      left: "00943e9e-1c4f-4766-91ec-7fd24baa3d0e",
      right: "de41e3e4-e19c-4001-a3b1-17b3404a960a",
    },
    {
      id: "00943e9e-1c4f-4766-91ec-7fd24baa3d0e",
      name: "BattleField",
      position: {
        x: 4560,
        y: 5500,
      },
      edges: [
        "8a993d40-10b6-4bbc-96a8-d06c5e4781b0",
        "9fcd3eca-e19e-4d33-9ce2-b8fea189b007",
      ],
      area: "AntarcticaCaveB2",
      right: "3409b6ad-c806-40b4-860f-7216fd742c49",
      bottom: "c97b0d51-e45d-4fcc-88e5-f7249fcd26c4",
    },
    {
      id: "de41e3e4-e19c-4001-a3b1-17b3404a960a",
      name: "BattleField",
      position: {
        x: 5680,
        y: 5500,
      },
      edges: [
        "6029a7fa-ff50-4b1a-92d9-72d0403b4c63",
        "f545da08-418f-40f3-8876-9e8846c46715",
      ],
      area: "AntarcticaCaveB2",
      left: "3409b6ad-c806-40b4-860f-7216fd742c49",
      bottom: "6fe274c8-a6ae-45b4-b3da-2c3dfea1dd4b",
    },
    {
      id: "c97b0d51-e45d-4fcc-88e5-f7249fcd26c4",
      name: "MagicBookField",
      position: {
        x: 4600,
        y: 5920,
      },
      edges: [
        "9fcd3eca-e19e-4d33-9ce2-b8fea189b007",
        "a0d60cf7-aff8-42ae-8a5c-b3de91ec294b",
      ],
      area: "AntarcticaCaveB2",
      top: "00943e9e-1c4f-4766-91ec-7fd24baa3d0e",
      right: "6fe274c8-a6ae-45b4-b3da-2c3dfea1dd4b",
    },
    {
      id: "6fe274c8-a6ae-45b4-b3da-2c3dfea1dd4b",
      name: "BattleField",
      position: {
        x: 5640,
        y: 5920,
      },
      edges: [
        "a0d60cf7-aff8-42ae-8a5c-b3de91ec294b",
        "f545da08-418f-40f3-8876-9e8846c46715",
        "570b4133-1dfe-47bc-b8e4-10b261bfd120",
      ],
      area: "AntarcticaCaveB2",
      left: "c97b0d51-e45d-4fcc-88e5-f7249fcd26c4",
      top: "de41e3e4-e19c-4001-a3b1-17b3404a960a",
      right: "e80074a5-90d0-4782-8869-327ade18a637",
    },
    {
      id: "e80074a5-90d0-4782-8869-327ade18a637",
      name: "BattleField",
      position: {
        x: 6240,
        y: 5900,
      },
      edges: [
        "570b4133-1dfe-47bc-b8e4-10b261bfd120",
        "6fa68865-d312-4194-910d-a59fe6439d54",
      ],
      area: "AntarcticaCaveB2",
      left: "6fe274c8-a6ae-45b4-b3da-2c3dfea1dd4b",
      top: "c9bfddf6-147f-4c03-88a3-819e995d29b4",
    },
    {
      id: "c9bfddf6-147f-4c03-88a3-819e995d29b4",
      name: "TreasureField",
      position: {
        x: 6300,
        y: 5500,
      },
      edges: [
        "6fa68865-d312-4194-910d-a59fe6439d54",
        "2ec819e2-65c6-4dd2-8bae-ce33625386af",
      ],
      area: "AntarcticaCaveB2",
      bottom: "e80074a5-90d0-4782-8869-327ade18a637",
      right: "76e47a4f-dd0d-4d74-8a7f-0c55c3bae076",
    },
    {
      id: "76e47a4f-dd0d-4d74-8a7f-0c55c3bae076",
      name: "BattleField",
      position: {
        x: 6840,
        y: 5480,
      },
      edges: [
        "2ec819e2-65c6-4dd2-8bae-ce33625386af",
        "8f604234-9cd7-4f3e-a374-c02340734ec3",
      ],
      area: "AntarcticaCaveB2",
      left: "c9bfddf6-147f-4c03-88a3-819e995d29b4",
      right: "d5180504-07a2-43b1-a863-6bc8a73bf493",
    },
    {
      id: "d5180504-07a2-43b1-a863-6bc8a73bf493",
      name: "CaveField",
      position: {
        x: 7360,
        y: 5500,
      },
      edges: ["8f604234-9cd7-4f3e-a374-c02340734ec3"],
      area: "AntarcticaCaveB2",
      left: "76e47a4f-dd0d-4d74-8a7f-0c55c3bae076",
    },
    {
      id: "78cdbb3d-cf17-46b4-8278-bdd5d9e11ff8",
      name: "WeaponStoreField",
      position: {
        x: 7160,
        y: 280,
      },
      edges: ["eefdb310-811b-4f1f-87ae-ec8b6ef2d5c2"],
      area: "AntarcticaCaveB2",
      bottom: "0d0651cc-6264-4450-8e37-10da16804302",
    },
    {
      id: "0d0651cc-6264-4450-8e37-10da16804302",
      name: "RedTreasureField",
      position: {
        x: 7240,
        y: 700,
      },
      edges: [
        "eefdb310-811b-4f1f-87ae-ec8b6ef2d5c2",
        "60644e87-5f93-4ac3-830a-67ef054c4143",
        "d189f1fe-7216-45f6-bdc4-6f37c2d253b6",
      ],
      area: "AntarcticaCaveB2",
      top: "78cdbb3d-cf17-46b4-8278-bdd5d9e11ff8",
      left: "4be589d7-1496-4776-98fb-da4fb1a54e31",
      bottom: "b129a23a-4cf7-4507-a36e-11445ead0f76",
    },
    {
      id: "4be589d7-1496-4776-98fb-da4fb1a54e31",
      name: "BattleField",
      position: {
        x: 6700,
        y: 660,
      },
      edges: [
        "60644e87-5f93-4ac3-830a-67ef054c4143",
        "b4951ba9-8e6e-4c1e-915d-78ea886384cb",
      ],
      area: "AntarcticaCaveB2",
      right: "0d0651cc-6264-4450-8e37-10da16804302",
      bottom: "9cb528ef-3161-4303-8a01-b1285a03ad51",
    },
    {
      id: "9cb528ef-3161-4303-8a01-b1285a03ad51",
      name: "TreasureField",
      position: {
        x: 6640,
        y: 1100,
      },
      edges: [
        "b4951ba9-8e6e-4c1e-915d-78ea886384cb",
        "aef57e18-3fb5-4da1-aba6-c8d0dee8d646",
        "9b465436-2347-4195-99a5-81d11019adba",
      ],
      area: "AntarcticaCaveB2",
      top: "4be589d7-1496-4776-98fb-da4fb1a54e31",
      bottom: "b7966459-b41d-4935-a596-ca5d99ce8d34",
      left: "de76f8f3-9ffb-4359-80dd-d77838b51da6",
    },
    {
      id: "b7966459-b41d-4935-a596-ca5d99ce8d34",
      name: "RedTreasureField",
      position: {
        x: 6700,
        y: 1560,
      },
      edges: [
        "aef57e18-3fb5-4da1-aba6-c8d0dee8d646",
        "db9469c6-6792-4cd5-853f-91cf14b1c5fe",
      ],
      area: "AntarcticaCaveB2",
      top: "9cb528ef-3161-4303-8a01-b1285a03ad51",
      right: "b129a23a-4cf7-4507-a36e-11445ead0f76",
    },
    {
      id: "b129a23a-4cf7-4507-a36e-11445ead0f76",
      name: "DamageField",
      position: {
        x: 7320,
        y: 1540,
      },
      edges: [
        "db9469c6-6792-4cd5-853f-91cf14b1c5fe",
        "d189f1fe-7216-45f6-bdc4-6f37c2d253b6",
        "c57020fc-e82a-49b3-95d7-d7b163147682",
      ],
      area: "AntarcticaCaveB2",
      left: "b7966459-b41d-4935-a596-ca5d99ce8d34",
      top: "0d0651cc-6264-4450-8e37-10da16804302",
      bottom: "82803bb8-304e-49d5-badf-4f5d71bdb10d",
    },
    {
      id: "82803bb8-304e-49d5-badf-4f5d71bdb10d",
      name: "CollectAllMoneyField",
      position: {
        x: 7280,
        y: 2060,
      },
      edges: ["c57020fc-e82a-49b3-95d7-d7b163147682"],
      area: "AntarcticaCaveB2",
      top: "b129a23a-4cf7-4507-a36e-11445ead0f76",
    },
    {
      id: "de76f8f3-9ffb-4359-80dd-d77838b51da6",
      name: "RedTreasureField",
      position: {
        x: 6060,
        y: 1120,
      },
      edges: [
        "9b465436-2347-4195-99a5-81d11019adba",
        "40dc700b-0276-4cf6-a64a-961ddb9f4782",
      ],
      area: "AntarcticaCaveB2",
      right: "9cb528ef-3161-4303-8a01-b1285a03ad51",
      bottom: "a3172493-264f-4cc6-af72-deee4bcdbe5b",
    },
    {
      id: "a3172493-264f-4cc6-af72-deee4bcdbe5b",
      name: "BattleField",
      position: {
        x: 6040,
        y: 1600,
      },
      edges: [
        "40dc700b-0276-4cf6-a64a-961ddb9f4782",
        "0622fc77-debb-4bf9-a37a-7b788d25b552",
        "391d43e5-69c1-469c-a41e-4dfa91b9df9e",
      ],
      area: "AntarcticaCaveB2",
      top: "de76f8f3-9ffb-4359-80dd-d77838b51da6",
      bottom: "819f2c98-d4b9-4b03-a80f-b4fd97da2baa",
      left: "b6fa94bb-761e-440e-b914-04f8c3449062",
    },
    {
      id: "819f2c98-d4b9-4b03-a80f-b4fd97da2baa",
      name: "RedTreasureField",
      position: {
        x: 6120,
        y: 2080,
      },
      edges: [
        "0622fc77-debb-4bf9-a37a-7b788d25b552",
        "ac49670c-be6b-4230-b7ba-12c0a9cd17bd",
      ],
      area: "AntarcticaCaveB2",
      top: "a3172493-264f-4cc6-af72-deee4bcdbe5b",
      right: "26a85de7-86f7-46a7-adb9-ab88e5bff0c9",
    },
    {
      id: "26a85de7-86f7-46a7-adb9-ab88e5bff0c9",
      name: "KeyTreasureField",
      position: {
        x: 6700,
        y: 2100,
      },
      edges: ["ac49670c-be6b-4230-b7ba-12c0a9cd17bd"],
      area: "AntarcticaCaveB2",
      left: "819f2c98-d4b9-4b03-a80f-b4fd97da2baa",
    },
    {
      id: "b6fa94bb-761e-440e-b914-04f8c3449062",
      name: "BattleField",
      position: {
        x: 5420,
        y: 1600,
      },
      edges: [
        "391d43e5-69c1-469c-a41e-4dfa91b9df9e",
        "e6c36f7f-a4a1-42ae-a612-da868d46bb98",
      ],
      area: "AntarcticaCaveB2",
      right: "a3172493-264f-4cc6-af72-deee4bcdbe5b",
      left: "dc92590d-386a-435c-805e-3b2df842afea",
    },
    {
      id: "dc92590d-386a-435c-805e-3b2df842afea",
      name: "BattleField",
      position: {
        x: 3940,
        y: 1600,
      },
      edges: [
        "e6c36f7f-a4a1-42ae-a612-da868d46bb98",
        "b17cc143-341d-4d6d-ae99-a3a32b931559",
      ],
      area: "AntarcticaCaveB2",
      right: "b6fa94bb-761e-440e-b914-04f8c3449062",
      left: "0bea3dbe-b853-464f-ba8e-458799351b77",
    },
    {
      id: "0bea3dbe-b853-464f-ba8e-458799351b77",
      name: "BattleField",
      position: {
        x: 3140,
        y: 1600,
      },
      edges: [
        "b17cc143-341d-4d6d-ae99-a3a32b931559",
        "3fe92360-4c97-4de9-99b1-bc76bb9b906a",
      ],
      area: "AntarcticaCaveB2",
      right: "dc92590d-386a-435c-805e-3b2df842afea",
      bottom: "ce4a4444-7268-4bfb-aa8c-c5bb9c468d2f",
    },
    {
      id: "ce4a4444-7268-4bfb-aa8c-c5bb9c468d2f",
      name: "BattleField",
      position: {
        x: 3100,
        y: 2060,
      },
      edges: [
        "3fe92360-4c97-4de9-99b1-bc76bb9b906a",
        "e4da0f88-985d-474e-ac28-a372458a8546",
      ],
      area: "AntarcticaCaveB2",
      top: "0bea3dbe-b853-464f-ba8e-458799351b77",
      bottom: "1d9f1e83-f5c9-43ab-a0ac-fe3958bbbf83",
    },
    {
      id: "1d9f1e83-f5c9-43ab-a0ac-fe3958bbbf83",
      name: "TreasureField",
      position: {
        x: 3040,
        y: 2560,
      },
      edges: [
        "e4da0f88-985d-474e-ac28-a372458a8546",
        "4c67a0af-e30a-470c-9868-c2a0b87f7e12",
      ],
      area: "AntarcticaCaveB2",
      top: "ce4a4444-7268-4bfb-aa8c-c5bb9c468d2f",
      left: "3ff20a5a-3d3a-4af4-b4f0-5b04d9e79ad6",
    },
    {
      id: "3ff20a5a-3d3a-4af4-b4f0-5b04d9e79ad6",
      name: "BattleField",
      position: {
        x: 2160,
        y: 2540,
      },
      edges: [
        "4c67a0af-e30a-470c-9868-c2a0b87f7e12",
        "2a3d71e6-15b7-4df1-969a-c1a2680166bc",
        "81cd2159-b324-4d82-899b-1858f30c68f4",
        "dc7fbe3a-fdf1-4e39-93b2-f882b47966a9",
      ],
      area: "AntarcticaCaveB2",
      right: "1d9f1e83-f5c9-43ab-a0ac-fe3958bbbf83",
      top: "d072fd59-290f-4103-b376-a5cd12397267",
      left: "fc428243-957f-4912-b7b8-f935b446014b",
      bottom: "7876f4a2-4881-4938-80f2-0faa4b8555c5",
    },
    {
      id: "d072fd59-290f-4103-b376-a5cd12397267",
      name: "TreasureField",
      position: {
        x: 2140,
        y: 2060,
      },
      edges: [
        "2a3d71e6-15b7-4df1-969a-c1a2680166bc",
        "305dbdcc-4f45-4c51-8537-d19f59364632",
        "2067d186-bcfa-48b6-a984-5ab9d4da4f11",
      ],
      area: "AntarcticaCaveB2",
      bottom: "3ff20a5a-3d3a-4af4-b4f0-5b04d9e79ad6",
      top: "f3efe459-8d87-49ad-8f4a-2897a276cb31",
      left: "96dca330-4527-4f57-ae6a-4100fbd053b2",
    },
    {
      id: "f3efe459-8d87-49ad-8f4a-2897a276cb31",
      name: "BattleField",
      position: {
        x: 2240,
        y: 1600,
      },
      edges: [
        "305dbdcc-4f45-4c51-8537-d19f59364632",
        "4f3cb74a-7037-4582-91c6-b96dcffd008c",
        "063c2fa5-a1c5-4422-b8e7-59136ae89283",
      ],
      area: "AntarcticaCaveB2",
      bottom: "d072fd59-290f-4103-b376-a5cd12397267",
      left: "b5d8b86b-fec4-4349-9fc5-a0bfae8b1a40",
      top: "bc5a170a-e6fc-49ed-bcce-5a164823e4f6",
    },
    {
      id: "96dca330-4527-4f57-ae6a-4100fbd053b2",
      name: "BattleField",
      position: {
        x: 1140,
        y: 2040,
      },
      edges: [
        "2067d186-bcfa-48b6-a984-5ab9d4da4f11",
        "e1a39d25-a344-4b24-a08f-4b53a962bc42",
      ],
      area: "AntarcticaCaveB2",
      right: "d072fd59-290f-4103-b376-a5cd12397267",
      top: "3f24abd9-d81f-48dd-a4de-c5c02f4d00b7",
    },
    {
      id: "3f24abd9-d81f-48dd-a4de-c5c02f4d00b7",
      name: "RedTreasureField",
      position: {
        x: 1060,
        y: 1580,
      },
      edges: [
        "e1a39d25-a344-4b24-a08f-4b53a962bc42",
        "ab9144d1-3533-4cd0-a12f-6ef5e8726d97",
        "85fbe4f4-5f60-414e-84f3-8eeb0c06ebf0",
      ],
      area: "AntarcticaCaveB2",
      bottom: "96dca330-4527-4f57-ae6a-4100fbd053b2",
      right: "b5d8b86b-fec4-4349-9fc5-a0bfae8b1a40",
      top: "38c1fd07-14e9-44df-b55e-2090fa75d06d",
    },
    {
      id: "b5d8b86b-fec4-4349-9fc5-a0bfae8b1a40",
      name: "BattleField",
      position: {
        x: 1640,
        y: 1540,
      },
      edges: [
        "ab9144d1-3533-4cd0-a12f-6ef5e8726d97",
        "4f3cb74a-7037-4582-91c6-b96dcffd008c",
      ],
      area: "AntarcticaCaveB2",
      left: "3f24abd9-d81f-48dd-a4de-c5c02f4d00b7",
      right: "f3efe459-8d87-49ad-8f4a-2897a276cb31",
    },
    {
      id: "38c1fd07-14e9-44df-b55e-2090fa75d06d",
      name: "CaveField",
      position: {
        x: 1020,
        y: 1060,
      },
      edges: ["85fbe4f4-5f60-414e-84f3-8eeb0c06ebf0"],
      area: "AntarcticaCaveB2",
      bottom: "3f24abd9-d81f-48dd-a4de-c5c02f4d00b7",
    },
    {
      id: "bc5a170a-e6fc-49ed-bcce-5a164823e4f6",
      name: "MagicBookField",
      position: {
        x: 2200,
        y: 1100,
      },
      edges: [
        "063c2fa5-a1c5-4422-b8e7-59136ae89283",
        "2a2ab27d-98a1-4ca6-b353-e783b7fa230f",
      ],
      area: "AntarcticaCaveB2",
      bottom: "f3efe459-8d87-49ad-8f4a-2897a276cb31",
      top: "75d97b64-fb26-4ecc-94b6-12b05a293b46",
    },
    {
      id: "75d97b64-fb26-4ecc-94b6-12b05a293b46",
      name: "DamageField",
      position: {
        x: 2260,
        y: 580,
      },
      edges: [
        "2a2ab27d-98a1-4ca6-b353-e783b7fa230f",
        "69c34a65-f06a-4e1f-a699-8f1b46ab65c8",
      ],
      area: "AntarcticaCaveB2",
      bottom: "bc5a170a-e6fc-49ed-bcce-5a164823e4f6",
      top: "343b6c6c-ef79-443e-bd7f-6938df1de858",
    },
    {
      id: "343b6c6c-ef79-443e-bd7f-6938df1de858",
      name: "TreasureField",
      position: {
        x: 2180,
        y: 60,
      },
      edges: [
        "69c34a65-f06a-4e1f-a699-8f1b46ab65c8",
        "62fab388-46fc-4378-a18e-57fcc01f9c40",
      ],
      area: "AntarcticaCaveB2",
      bottom: "75d97b64-fb26-4ecc-94b6-12b05a293b46",
      right: "b592f617-f44b-4d1d-9bbb-00d7a5ac133f",
    },
    {
      id: "b592f617-f44b-4d1d-9bbb-00d7a5ac133f",
      name: "BattleField",
      position: {
        x: 2800,
        y: 40,
      },
      edges: [
        "62fab388-46fc-4378-a18e-57fcc01f9c40",
        "e66d2faf-6566-4787-acf8-5e07a43ccb82",
      ],
      area: "AntarcticaCaveB2",
      left: "343b6c6c-ef79-443e-bd7f-6938df1de858",
      right: "e4f4503b-88cd-4788-bb1a-465c3cf9bc42",
    },
    {
      id: "e4f4503b-88cd-4788-bb1a-465c3cf9bc42",
      name: "BattleField",
      position: {
        x: 3400,
        y: 40,
      },
      edges: [
        "e66d2faf-6566-4787-acf8-5e07a43ccb82",
        "93dac080-c8f9-4f3c-b08c-7fd44eb817b7",
      ],
      area: "AntarcticaCaveB2",
      left: "b592f617-f44b-4d1d-9bbb-00d7a5ac133f",
      right: "92f518fa-ec81-4711-945b-8bafd30f5e61",
    },
    {
      id: "92f518fa-ec81-4711-945b-8bafd30f5e61",
      name: "MagicBookField",
      position: {
        x: 4060,
        y: 80,
      },
      edges: [
        "93dac080-c8f9-4f3c-b08c-7fd44eb817b7",
        "38f3dbcd-e09d-43fa-8761-6cdac46ca96d",
      ],
      area: "AntarcticaCaveB2",
      left: "e4f4503b-88cd-4788-bb1a-465c3cf9bc42",
      right: "e228ec63-144a-4d8c-a56e-3f1065ebb5e4",
    },
    {
      id: "e228ec63-144a-4d8c-a56e-3f1065ebb5e4",
      name: "BattleField",
      position: {
        x: 4680,
        y: 60,
      },
      edges: [
        "38f3dbcd-e09d-43fa-8761-6cdac46ca96d",
        "3f47c69d-c930-46cc-bf6c-06432edcb295",
      ],
      area: "AntarcticaCaveB2",
      left: "92f518fa-ec81-4711-945b-8bafd30f5e61",
      right: "59a8f7fd-5461-4b70-b8c4-726059766c63",
    },
    {
      id: "59a8f7fd-5461-4b70-b8c4-726059766c63",
      name: "TreasureField",
      position: {
        x: 5280,
        y: 60,
      },
      edges: [
        "3f47c69d-c930-46cc-bf6c-06432edcb295",
        "8f848713-2723-4d93-a005-6e2a0315337d",
      ],
      area: "AntarcticaCaveB2",
      left: "e228ec63-144a-4d8c-a56e-3f1065ebb5e4",
      right: "710e2f68-60ab-4d5a-b0d3-0645020957b3",
    },
    {
      id: "710e2f68-60ab-4d5a-b0d3-0645020957b3",
      name: "CaveField",
      position: {
        x: 5900,
        y: 80,
      },
      edges: ["8f848713-2723-4d93-a005-6e2a0315337d"],
      area: "AntarcticaCaveB2",
      left: "59a8f7fd-5461-4b70-b8c4-726059766c63",
    },
    {
      id: "fc428243-957f-4912-b7b8-f935b446014b",
      name: "BattleField",
      position: {
        x: 1240,
        y: 2560,
      },
      edges: [
        "81cd2159-b324-4d82-899b-1858f30c68f4",
        "98a47295-cb6d-4083-9092-3eec902c8205",
      ],
      area: "AntarcticaCaveB2",
      right: "3ff20a5a-3d3a-4af4-b4f0-5b04d9e79ad6",
      bottom: "1ce64371-5227-4d19-b3c3-802604479e83",
    },
    {
      id: "1ce64371-5227-4d19-b3c3-802604479e83",
      name: "DamageField",
      position: {
        x: 1160,
        y: 3040,
      },
      edges: [
        "98a47295-cb6d-4083-9092-3eec902c8205",
        "69682f22-bbd7-4627-96e1-ff1c1ba0d259",
      ],
      area: "AntarcticaCaveB2",
      top: "fc428243-957f-4912-b7b8-f935b446014b",
      right: "bce16b20-0e43-4c80-b962-149880c71a64",
    },
    {
      id: "bce16b20-0e43-4c80-b962-149880c71a64",
      name: "TreasureField",
      position: {
        x: 1700,
        y: 3120,
      },
      edges: [
        "69682f22-bbd7-4627-96e1-ff1c1ba0d259",
        "b96076d4-c844-445d-9440-6d6e77343f9a",
        "b5220081-32db-4644-95f5-f017f4c69539",
      ],
      area: "AntarcticaCaveB2",
      left: "1ce64371-5227-4d19-b3c3-802604479e83",
      right: "7876f4a2-4881-4938-80f2-0faa4b8555c5",
      bottom: "e7d4eaea-c253-4c39-b416-c861300ffd18",
    },
    {
      id: "7876f4a2-4881-4938-80f2-0faa4b8555c5",
      name: "DamageField",
      position: {
        x: 2240,
        y: 3060,
      },
      edges: [
        "b96076d4-c844-445d-9440-6d6e77343f9a",
        "dc7fbe3a-fdf1-4e39-93b2-f882b47966a9",
      ],
      area: "AntarcticaCaveB2",
      left: "bce16b20-0e43-4c80-b962-149880c71a64",
      top: "3ff20a5a-3d3a-4af4-b4f0-5b04d9e79ad6",
    },
    {
      id: "e7d4eaea-c253-4c39-b416-c861300ffd18",
      name: "TreasureField",
      position: {
        x: 1680,
        y: 3560,
      },
      edges: [
        "b5220081-32db-4644-95f5-f017f4c69539",
        "84bb5362-66dd-4d93-b5db-34741e28a878",
        "f2798560-18b9-493a-8bc6-052d3b92de71",
      ],
      area: "AntarcticaCaveB2",
      top: "bce16b20-0e43-4c80-b962-149880c71a64",
      bottom: "9ac7b626-9610-443b-9549-f02060c02fab",
      left: "8b8f1818-8213-4d6c-9584-24ea2b039b8c",
    },
    {
      id: "9ac7b626-9610-443b-9549-f02060c02fab",
      name: "BattleField",
      position: {
        x: 1740,
        y: 3960,
      },
      edges: [
        "84bb5362-66dd-4d93-b5db-34741e28a878",
        "a9cf5427-e793-4fd5-a546-eef07dc4ad3a",
        "f0570145-3c54-4838-91e3-e0e402dddc0a",
      ],
      area: "AntarcticaCaveB2",
      top: "e7d4eaea-c253-4c39-b416-c861300ffd18",
      bottom: "d0ca7558-9633-4028-8fe5-f5b7234243da",
      right: "4fc6429f-e69b-415e-add5-495ebea66cbd",
    },
    {
      id: "d0ca7558-9633-4028-8fe5-f5b7234243da",
      name: "RedTreasureField",
      position: {
        x: 1700,
        y: 4400,
      },
      edges: [
        "a9cf5427-e793-4fd5-a546-eef07dc4ad3a",
        "a12e2dd8-85d8-40f1-8ec3-822089972aa6",
      ],
      area: "AntarcticaCaveB2",
      top: "9ac7b626-9610-443b-9549-f02060c02fab",
      left: "033660e3-0d97-4897-96ac-c49416547a0f",
    },
    {
      id: "8b8f1818-8213-4d6c-9584-24ea2b039b8c",
      name: "BattleField",
      position: {
        x: 1120,
        y: 3600,
      },
      edges: [
        "f2798560-18b9-493a-8bc6-052d3b92de71",
        "e8672c1a-1d98-4fda-bbec-a6bbcca80e03",
      ],
      area: "AntarcticaCaveB2",
      right: "e7d4eaea-c253-4c39-b416-c861300ffd18",
      bottom: "033660e3-0d97-4897-96ac-c49416547a0f",
    },
    {
      id: "033660e3-0d97-4897-96ac-c49416547a0f",
      name: "BattleField",
      position: {
        x: 1180,
        y: 4420,
      },
      edges: [
        "e8672c1a-1d98-4fda-bbec-a6bbcca80e03",
        "a12e2dd8-85d8-40f1-8ec3-822089972aa6",
        "dad96783-1dcd-452b-b51b-e3966e9b9d2e",
        "8e85dc86-8b89-46f6-8ff0-d94e0c3f0519",
      ],
      area: "AntarcticaCaveB2",
      top: "8b8f1818-8213-4d6c-9584-24ea2b039b8c",
      right: "d0ca7558-9633-4028-8fe5-f5b7234243da",
      left: "6b7b9838-7565-4b60-a389-907c56a57131",
      bottom: "d719a536-6958-4e0d-a09f-5d69ce0d8438",
    },
    {
      id: "6b7b9838-7565-4b60-a389-907c56a57131",
      name: "BattleField",
      position: {
        x: 620,
        y: 4440,
      },
      edges: [
        "dad96783-1dcd-452b-b51b-e3966e9b9d2e",
        "4d7d5734-6786-47cd-a699-975474405856",
      ],
      area: "AntarcticaCaveB2",
      right: "033660e3-0d97-4897-96ac-c49416547a0f",
      left: "d12b45ad-324f-4ae8-b710-14340e0b73ad",
    },
    {
      id: "d12b45ad-324f-4ae8-b710-14340e0b73ad",
      name: "CaveField",
      position: {
        x: 40,
        y: 4420,
      },
      edges: ["4d7d5734-6786-47cd-a699-975474405856"],
      area: "AntarcticaCaveB2",
      right: "6b7b9838-7565-4b60-a389-907c56a57131",
    },
    {
      id: "4fc6429f-e69b-415e-add5-495ebea66cbd",
      name: "MagicBookField",
      position: {
        x: 2360,
        y: 3960,
      },
      edges: [
        "f0570145-3c54-4838-91e3-e0e402dddc0a",
        "361e0d6b-f7b2-42f2-af04-3efeaf732a07",
        "e9f48e94-b16d-462e-96e0-79583fd393dc",
      ],
      area: "AntarcticaCaveB2",
      left: "9ac7b626-9610-443b-9549-f02060c02fab",
      right: "82105f12-d78a-493e-a4f2-adc8ef31c404",
      top: "ea5b0827-120f-4ae3-9215-8c45d0b7c3e3",
    },
    {
      id: "82105f12-d78a-493e-a4f2-adc8ef31c404",
      name: "BattleField",
      position: {
        x: 3320,
        y: 3960,
      },
      edges: [
        "361e0d6b-f7b2-42f2-af04-3efeaf732a07",
        "6bf8eee7-d5df-45b1-8918-094a2bfdc05d",
        "a23c9b67-1324-469d-a590-617a6ed5211d",
      ],
      area: "AntarcticaCaveB2",
      left: "4fc6429f-e69b-415e-add5-495ebea66cbd",
      top: "85e2af8d-29ab-4c40-944d-cb87688d53c6",
      bottom: "a9e95a19-e9d2-423e-b771-6f46b1bc5280",
    },
    {
      id: "ea5b0827-120f-4ae3-9215-8c45d0b7c3e3",
      name: "BattleField",
      position: {
        x: 2300,
        y: 3520,
      },
      edges: [
        "e9f48e94-b16d-462e-96e0-79583fd393dc",
        "1e33a37f-015d-4116-ac26-04dd86bd0127",
      ],
      area: "AntarcticaCaveB2",
      bottom: "4fc6429f-e69b-415e-add5-495ebea66cbd",
      right: "801a8268-d03f-471e-87aa-1b4ef58458c9",
    },
    {
      id: "801a8268-d03f-471e-87aa-1b4ef58458c9",
      name: "TreasureField",
      position: {
        x: 2860,
        y: 3460,
      },
      edges: [
        "1e33a37f-015d-4116-ac26-04dd86bd0127",
        "ba7a5c2a-6636-400f-8c78-fee354c6e8f2",
      ],
      area: "AntarcticaCaveB2",
      left: "ea5b0827-120f-4ae3-9215-8c45d0b7c3e3",
      right: "85e2af8d-29ab-4c40-944d-cb87688d53c6",
    },
    {
      id: "85e2af8d-29ab-4c40-944d-cb87688d53c6",
      name: "DamageField",
      position: {
        x: 3420,
        y: 3520,
      },
      edges: [
        "ba7a5c2a-6636-400f-8c78-fee354c6e8f2",
        "6bf8eee7-d5df-45b1-8918-094a2bfdc05d",
      ],
      area: "AntarcticaCaveB2",
      left: "801a8268-d03f-471e-87aa-1b4ef58458c9",
      bottom: "82105f12-d78a-493e-a4f2-adc8ef31c404",
    },
    {
      id: "d719a536-6958-4e0d-a09f-5d69ce0d8438",
      name: "BattleField",
      position: {
        x: 1140,
        y: 4920,
      },
      edges: [
        "8e85dc86-8b89-46f6-8ff0-d94e0c3f0519",
        "0164079a-ea04-4996-904f-ab7fdd8e821e",
      ],
      area: "AntarcticaCaveB2",
      top: "033660e3-0d97-4897-96ac-c49416547a0f",
      right: "03e98c6b-cc91-4224-9db2-bb2f395fab14",
    },
    {
      id: "03e98c6b-cc91-4224-9db2-bb2f395fab14",
      name: "BattleField",
      position: {
        x: 1660,
        y: 4940,
      },
      edges: [
        "0164079a-ea04-4996-904f-ab7fdd8e821e",
        "aebb327a-5889-467a-9969-de17dee7557a",
      ],
      area: "AntarcticaCaveB2",
      left: "d719a536-6958-4e0d-a09f-5d69ce0d8438",
      right: "140189c8-44a6-442e-a165-c442e1e9b7a3",
    },
    {
      id: "140189c8-44a6-442e-a165-c442e1e9b7a3",
      name: "DamageField",
      position: {
        x: 2300,
        y: 4960,
      },
      edges: [
        "aebb327a-5889-467a-9969-de17dee7557a",
        "eeed3c72-112b-44f9-a9c7-1130f97873e5",
      ],
      area: "AntarcticaCaveB2",
      left: "03e98c6b-cc91-4224-9db2-bb2f395fab14",
      top: "63c35a32-75dc-4454-85ac-808b70b243b0",
    },
    {
      id: "63c35a32-75dc-4454-85ac-808b70b243b0",
      name: "TreasureField",
      position: {
        x: 2260,
        y: 4500,
      },
      edges: [
        "eeed3c72-112b-44f9-a9c7-1130f97873e5",
        "4381706b-0ffa-4a16-b2b6-8ae3d6b53d45",
      ],
      area: "AntarcticaCaveB2",
      bottom: "140189c8-44a6-442e-a165-c442e1e9b7a3",
      right: "4db8878c-514a-4f1b-a78b-527a553729e9",
    },
    {
      id: "4db8878c-514a-4f1b-a78b-527a553729e9",
      name: "BattleField",
      position: {
        x: 2820,
        y: 4540,
      },
      edges: [
        "4381706b-0ffa-4a16-b2b6-8ae3d6b53d45",
        "0e0b4cc3-1ba4-4206-943e-f33b8109dcdf",
      ],
      area: "AntarcticaCaveB2",
      left: "63c35a32-75dc-4454-85ac-808b70b243b0",
      right: "a9e95a19-e9d2-423e-b771-6f46b1bc5280",
    },
    {
      id: "a9e95a19-e9d2-423e-b771-6f46b1bc5280",
      name: "DamageField",
      position: {
        x: 3400,
        y: 4520,
      },
      edges: [
        "0e0b4cc3-1ba4-4206-943e-f33b8109dcdf",
        "a23c9b67-1324-469d-a590-617a6ed5211d",
      ],
      area: "AntarcticaCaveB2",
      left: "4db8878c-514a-4f1b-a78b-527a553729e9",
      top: "82105f12-d78a-493e-a4f2-adc8ef31c404",
    },
  ],
  edges: [
    {
      start: {
        x: 4640,
        y: 5040,
      },
      startId: "923bc7a0-ba19-4481-b5be-2bbd68515476",
      end: {
        x: 4600,
        y: 4520,
      },
      endId: "c9c35337-0499-4f02-afe2-6643276240e9",
      name: "TwoWayVEdge",
      id: "f8955788-4f60-4add-9c76-48f3618fb31e",
    },
    {
      start: {
        x: 4640,
        y: 5040,
      },
      startId: "923bc7a0-ba19-4481-b5be-2bbd68515476",
      end: {
        x: 5180,
        y: 5060,
      },
      endId: "d31ad649-f3c4-4ea0-8210-657dd95ffd95",
      name: "TwoWayHEdge",
      id: "ec5ee784-32ec-4fa0-828f-eaddf4531126",
    },
    {
      start: {
        x: 5180,
        y: 5060,
      },
      startId: "d31ad649-f3c4-4ea0-8210-657dd95ffd95",
      end: {
        x: 5120,
        y: 5460,
      },
      endId: "3409b6ad-c806-40b4-860f-7216fd742c49",
      name: "TwoWayVEdge",
      id: "e3d8b9dc-19f1-42c3-9647-3addd7959706",
    },
    {
      start: {
        x: 5120,
        y: 5460,
      },
      startId: "3409b6ad-c806-40b4-860f-7216fd742c49",
      end: {
        x: 4560,
        y: 5500,
      },
      endId: "00943e9e-1c4f-4766-91ec-7fd24baa3d0e",
      name: "TwoWayHEdge",
      id: "8a993d40-10b6-4bbc-96a8-d06c5e4781b0",
    },
    {
      start: {
        x: 5120,
        y: 5460,
      },
      startId: "3409b6ad-c806-40b4-860f-7216fd742c49",
      end: {
        x: 5680,
        y: 5500,
      },
      endId: "de41e3e4-e19c-4001-a3b1-17b3404a960a",
      name: "TwoWayHEdge",
      id: "6029a7fa-ff50-4b1a-92d9-72d0403b4c63",
    },
    {
      start: {
        x: 4560,
        y: 5500,
      },
      startId: "00943e9e-1c4f-4766-91ec-7fd24baa3d0e",
      end: {
        x: 4600,
        y: 5920,
      },
      endId: "c97b0d51-e45d-4fcc-88e5-f7249fcd26c4",
      name: "TwoWayVEdge",
      id: "9fcd3eca-e19e-4d33-9ce2-b8fea189b007",
    },
    {
      start: {
        x: 4600,
        y: 5920,
      },
      startId: "c97b0d51-e45d-4fcc-88e5-f7249fcd26c4",
      end: {
        x: 5640,
        y: 5920,
      },
      endId: "6fe274c8-a6ae-45b4-b3da-2c3dfea1dd4b",
      name: "TwoWayHEdge",
      id: "a0d60cf7-aff8-42ae-8a5c-b3de91ec294b",
    },
    {
      start: {
        x: 5680,
        y: 5500,
      },
      startId: "de41e3e4-e19c-4001-a3b1-17b3404a960a",
      end: {
        x: 5640,
        y: 5920,
      },
      endId: "6fe274c8-a6ae-45b4-b3da-2c3dfea1dd4b",
      name: "TwoWayVEdge",
      id: "f545da08-418f-40f3-8876-9e8846c46715",
    },
    {
      start: {
        x: 5640,
        y: 5920,
      },
      startId: "6fe274c8-a6ae-45b4-b3da-2c3dfea1dd4b",
      end: {
        x: 6240,
        y: 5900,
      },
      endId: "e80074a5-90d0-4782-8869-327ade18a637",
      name: "TwoWayHEdge",
      id: "570b4133-1dfe-47bc-b8e4-10b261bfd120",
    },
    {
      start: {
        x: 6240,
        y: 5900,
      },
      startId: "e80074a5-90d0-4782-8869-327ade18a637",
      end: {
        x: 6300,
        y: 5500,
      },
      endId: "c9bfddf6-147f-4c03-88a3-819e995d29b4",
      name: "TwoWayVEdge",
      id: "6fa68865-d312-4194-910d-a59fe6439d54",
    },
    {
      start: {
        x: 6300,
        y: 5500,
      },
      startId: "c9bfddf6-147f-4c03-88a3-819e995d29b4",
      end: {
        x: 6840,
        y: 5480,
      },
      endId: "76e47a4f-dd0d-4d74-8a7f-0c55c3bae076",
      name: "TwoWayHEdge",
      id: "2ec819e2-65c6-4dd2-8bae-ce33625386af",
    },
    {
      start: {
        x: 6840,
        y: 5480,
      },
      startId: "76e47a4f-dd0d-4d74-8a7f-0c55c3bae076",
      end: {
        x: 7360,
        y: 5500,
      },
      endId: "d5180504-07a2-43b1-a863-6bc8a73bf493",
      name: "TwoWayHEdge",
      id: "8f604234-9cd7-4f3e-a374-c02340734ec3",
    },
    {
      start: {
        x: 7160,
        y: 280,
      },
      startId: "78cdbb3d-cf17-46b4-8278-bdd5d9e11ff8",
      end: {
        x: 7240,
        y: 700,
      },
      endId: "0d0651cc-6264-4450-8e37-10da16804302",
      name: "TwoWayVEdge",
      id: "eefdb310-811b-4f1f-87ae-ec8b6ef2d5c2",
    },
    {
      start: {
        x: 7240,
        y: 700,
      },
      startId: "0d0651cc-6264-4450-8e37-10da16804302",
      end: {
        x: 6700,
        y: 660,
      },
      endId: "4be589d7-1496-4776-98fb-da4fb1a54e31",
      name: "TwoWayHEdge",
      id: "60644e87-5f93-4ac3-830a-67ef054c4143",
    },
    {
      start: {
        x: 6700,
        y: 660,
      },
      startId: "4be589d7-1496-4776-98fb-da4fb1a54e31",
      end: {
        x: 6640,
        y: 1100,
      },
      endId: "9cb528ef-3161-4303-8a01-b1285a03ad51",
      name: "TwoWayVEdge",
      id: "b4951ba9-8e6e-4c1e-915d-78ea886384cb",
    },
    {
      start: {
        x: 6640,
        y: 1100,
      },
      startId: "9cb528ef-3161-4303-8a01-b1285a03ad51",
      end: {
        x: 6700,
        y: 1560,
      },
      endId: "b7966459-b41d-4935-a596-ca5d99ce8d34",
      name: "TwoWayVEdge",
      id: "aef57e18-3fb5-4da1-aba6-c8d0dee8d646",
    },
    {
      start: {
        x: 6700,
        y: 1560,
      },
      startId: "b7966459-b41d-4935-a596-ca5d99ce8d34",
      end: {
        x: 7320,
        y: 1540,
      },
      endId: "b129a23a-4cf7-4507-a36e-11445ead0f76",
      name: "TwoWayHEdge",
      id: "db9469c6-6792-4cd5-853f-91cf14b1c5fe",
    },
    {
      start: {
        x: 7240,
        y: 700,
      },
      startId: "0d0651cc-6264-4450-8e37-10da16804302",
      end: {
        x: 7320,
        y: 1540,
      },
      endId: "b129a23a-4cf7-4507-a36e-11445ead0f76",
      name: "TwoWayVEdge",
      id: "d189f1fe-7216-45f6-bdc4-6f37c2d253b6",
    },
    {
      start: {
        x: 7320,
        y: 1540,
      },
      startId: "b129a23a-4cf7-4507-a36e-11445ead0f76",
      end: {
        x: 7280,
        y: 2060,
      },
      endId: "82803bb8-304e-49d5-badf-4f5d71bdb10d",
      name: "TwoWayVEdge",
      id: "c57020fc-e82a-49b3-95d7-d7b163147682",
    },
    {
      start: {
        x: 6640,
        y: 1100,
      },
      startId: "9cb528ef-3161-4303-8a01-b1285a03ad51",
      end: {
        x: 6060,
        y: 1120,
      },
      endId: "de76f8f3-9ffb-4359-80dd-d77838b51da6",
      name: "TwoWayHEdge",
      id: "9b465436-2347-4195-99a5-81d11019adba",
    },
    {
      start: {
        x: 6060,
        y: 1120,
      },
      startId: "de76f8f3-9ffb-4359-80dd-d77838b51da6",
      end: {
        x: 6040,
        y: 1600,
      },
      endId: "a3172493-264f-4cc6-af72-deee4bcdbe5b",
      name: "TwoWayVEdge",
      id: "40dc700b-0276-4cf6-a64a-961ddb9f4782",
    },
    {
      start: {
        x: 6040,
        y: 1600,
      },
      startId: "a3172493-264f-4cc6-af72-deee4bcdbe5b",
      end: {
        x: 6120,
        y: 2080,
      },
      endId: "819f2c98-d4b9-4b03-a80f-b4fd97da2baa",
      name: "TwoWayVEdge",
      id: "0622fc77-debb-4bf9-a37a-7b788d25b552",
    },
    {
      start: {
        x: 6120,
        y: 2080,
      },
      startId: "819f2c98-d4b9-4b03-a80f-b4fd97da2baa",
      end: {
        x: 6700,
        y: 2100,
      },
      endId: "26a85de7-86f7-46a7-adb9-ab88e5bff0c9",
      name: "TwoWayHEdge",
      id: "ac49670c-be6b-4230-b7ba-12c0a9cd17bd",
    },
    {
      start: {
        x: 6040,
        y: 1600,
      },
      startId: "a3172493-264f-4cc6-af72-deee4bcdbe5b",
      end: {
        x: 5420,
        y: 1600,
      },
      endId: "b6fa94bb-761e-440e-b914-04f8c3449062",
      name: "TwoWayHEdge",
      id: "391d43e5-69c1-469c-a41e-4dfa91b9df9e",
    },
    {
      start: {
        x: 5420,
        y: 1600,
      },
      startId: "b6fa94bb-761e-440e-b914-04f8c3449062",
      end: {
        x: 3940,
        y: 1600,
      },
      endId: "dc92590d-386a-435c-805e-3b2df842afea",
      name: "TwoWayHEdge",
      id: "e6c36f7f-a4a1-42ae-a612-da868d46bb98",
    },
    {
      start: {
        x: 3940,
        y: 1600,
      },
      startId: "dc92590d-386a-435c-805e-3b2df842afea",
      end: {
        x: 3140,
        y: 1600,
      },
      endId: "0bea3dbe-b853-464f-ba8e-458799351b77",
      name: "TwoWayHEdge",
      id: "b17cc143-341d-4d6d-ae99-a3a32b931559",
    },
    {
      start: {
        x: 3140,
        y: 1600,
      },
      startId: "0bea3dbe-b853-464f-ba8e-458799351b77",
      end: {
        x: 3100,
        y: 2060,
      },
      endId: "ce4a4444-7268-4bfb-aa8c-c5bb9c468d2f",
      name: "TwoWayVEdge",
      id: "3fe92360-4c97-4de9-99b1-bc76bb9b906a",
    },
    {
      start: {
        x: 3100,
        y: 2060,
      },
      startId: "ce4a4444-7268-4bfb-aa8c-c5bb9c468d2f",
      end: {
        x: 3040,
        y: 2560,
      },
      endId: "1d9f1e83-f5c9-43ab-a0ac-fe3958bbbf83",
      name: "TwoWayVEdge",
      id: "e4da0f88-985d-474e-ac28-a372458a8546",
    },
    {
      start: {
        x: 3040,
        y: 2560,
      },
      startId: "1d9f1e83-f5c9-43ab-a0ac-fe3958bbbf83",
      end: {
        x: 2160,
        y: 2540,
      },
      endId: "3ff20a5a-3d3a-4af4-b4f0-5b04d9e79ad6",
      name: "TwoWayHEdge",
      id: "4c67a0af-e30a-470c-9868-c2a0b87f7e12",
    },
    {
      start: {
        x: 2160,
        y: 2540,
      },
      startId: "3ff20a5a-3d3a-4af4-b4f0-5b04d9e79ad6",
      end: {
        x: 2140,
        y: 2060,
      },
      endId: "d072fd59-290f-4103-b376-a5cd12397267",
      name: "TwoWayVEdge",
      id: "2a3d71e6-15b7-4df1-969a-c1a2680166bc",
    },
    {
      start: {
        x: 2140,
        y: 2060,
      },
      startId: "d072fd59-290f-4103-b376-a5cd12397267",
      end: {
        x: 2240,
        y: 1600,
      },
      endId: "f3efe459-8d87-49ad-8f4a-2897a276cb31",
      name: "TwoWayVEdge",
      id: "305dbdcc-4f45-4c51-8537-d19f59364632",
    },
    {
      start: {
        x: 2140,
        y: 2060,
      },
      startId: "d072fd59-290f-4103-b376-a5cd12397267",
      end: {
        x: 1140,
        y: 2040,
      },
      endId: "96dca330-4527-4f57-ae6a-4100fbd053b2",
      name: "TwoWayHEdge",
      id: "2067d186-bcfa-48b6-a984-5ab9d4da4f11",
    },
    {
      start: {
        x: 1140,
        y: 2040,
      },
      startId: "96dca330-4527-4f57-ae6a-4100fbd053b2",
      end: {
        x: 1060,
        y: 1580,
      },
      endId: "3f24abd9-d81f-48dd-a4de-c5c02f4d00b7",
      name: "TwoWayVEdge",
      id: "e1a39d25-a344-4b24-a08f-4b53a962bc42",
    },
    {
      start: {
        x: 1060,
        y: 1580,
      },
      startId: "3f24abd9-d81f-48dd-a4de-c5c02f4d00b7",
      end: {
        x: 1640,
        y: 1540,
      },
      endId: "b5d8b86b-fec4-4349-9fc5-a0bfae8b1a40",
      name: "TwoWayHEdge",
      id: "ab9144d1-3533-4cd0-a12f-6ef5e8726d97",
    },
    {
      start: {
        x: 1640,
        y: 1540,
      },
      startId: "b5d8b86b-fec4-4349-9fc5-a0bfae8b1a40",
      end: {
        x: 2240,
        y: 1600,
      },
      endId: "f3efe459-8d87-49ad-8f4a-2897a276cb31",
      name: "TwoWayHEdge",
      id: "4f3cb74a-7037-4582-91c6-b96dcffd008c",
    },
    {
      start: {
        x: 1060,
        y: 1580,
      },
      startId: "3f24abd9-d81f-48dd-a4de-c5c02f4d00b7",
      end: {
        x: 1020,
        y: 1060,
      },
      endId: "38c1fd07-14e9-44df-b55e-2090fa75d06d",
      name: "TwoWayVEdge",
      id: "85fbe4f4-5f60-414e-84f3-8eeb0c06ebf0",
    },
    {
      start: {
        x: 2240,
        y: 1600,
      },
      startId: "f3efe459-8d87-49ad-8f4a-2897a276cb31",
      end: {
        x: 2200,
        y: 1100,
      },
      endId: "bc5a170a-e6fc-49ed-bcce-5a164823e4f6",
      name: "TwoWayVEdge",
      id: "063c2fa5-a1c5-4422-b8e7-59136ae89283",
    },
    {
      start: {
        x: 2200,
        y: 1100,
      },
      startId: "bc5a170a-e6fc-49ed-bcce-5a164823e4f6",
      end: {
        x: 2260,
        y: 580,
      },
      endId: "75d97b64-fb26-4ecc-94b6-12b05a293b46",
      name: "TwoWayVEdge",
      id: "2a2ab27d-98a1-4ca6-b353-e783b7fa230f",
    },
    {
      start: {
        x: 2260,
        y: 580,
      },
      startId: "75d97b64-fb26-4ecc-94b6-12b05a293b46",
      end: {
        x: 2180,
        y: 60,
      },
      endId: "343b6c6c-ef79-443e-bd7f-6938df1de858",
      name: "TwoWayVEdge",
      id: "69c34a65-f06a-4e1f-a699-8f1b46ab65c8",
    },
    {
      start: {
        x: 2180,
        y: 60,
      },
      startId: "343b6c6c-ef79-443e-bd7f-6938df1de858",
      end: {
        x: 2800,
        y: 40,
      },
      endId: "b592f617-f44b-4d1d-9bbb-00d7a5ac133f",
      name: "TwoWayHEdge",
      id: "62fab388-46fc-4378-a18e-57fcc01f9c40",
    },
    {
      start: {
        x: 2800,
        y: 40,
      },
      startId: "b592f617-f44b-4d1d-9bbb-00d7a5ac133f",
      end: {
        x: 3400,
        y: 40,
      },
      endId: "e4f4503b-88cd-4788-bb1a-465c3cf9bc42",
      name: "TwoWayHEdge",
      id: "e66d2faf-6566-4787-acf8-5e07a43ccb82",
    },
    {
      start: {
        x: 3400,
        y: 40,
      },
      startId: "e4f4503b-88cd-4788-bb1a-465c3cf9bc42",
      end: {
        x: 4060,
        y: 80,
      },
      endId: "92f518fa-ec81-4711-945b-8bafd30f5e61",
      name: "TwoWayHEdge",
      id: "93dac080-c8f9-4f3c-b08c-7fd44eb817b7",
    },
    {
      start: {
        x: 4060,
        y: 80,
      },
      startId: "92f518fa-ec81-4711-945b-8bafd30f5e61",
      end: {
        x: 4680,
        y: 60,
      },
      endId: "e228ec63-144a-4d8c-a56e-3f1065ebb5e4",
      name: "TwoWayHEdge",
      id: "38f3dbcd-e09d-43fa-8761-6cdac46ca96d",
    },
    {
      start: {
        x: 4680,
        y: 60,
      },
      startId: "e228ec63-144a-4d8c-a56e-3f1065ebb5e4",
      end: {
        x: 5280,
        y: 60,
      },
      endId: "59a8f7fd-5461-4b70-b8c4-726059766c63",
      name: "TwoWayHEdge",
      id: "3f47c69d-c930-46cc-bf6c-06432edcb295",
    },
    {
      start: {
        x: 5280,
        y: 60,
      },
      startId: "59a8f7fd-5461-4b70-b8c4-726059766c63",
      end: {
        x: 5900,
        y: 80,
      },
      endId: "710e2f68-60ab-4d5a-b0d3-0645020957b3",
      name: "TwoWayHEdge",
      id: "8f848713-2723-4d93-a005-6e2a0315337d",
    },
    {
      start: {
        x: 2160,
        y: 2540,
      },
      startId: "3ff20a5a-3d3a-4af4-b4f0-5b04d9e79ad6",
      end: {
        x: 1240,
        y: 2560,
      },
      endId: "fc428243-957f-4912-b7b8-f935b446014b",
      name: "TwoWayHEdge",
      id: "81cd2159-b324-4d82-899b-1858f30c68f4",
    },
    {
      start: {
        x: 1240,
        y: 2560,
      },
      startId: "fc428243-957f-4912-b7b8-f935b446014b",
      end: {
        x: 1160,
        y: 3040,
      },
      endId: "1ce64371-5227-4d19-b3c3-802604479e83",
      name: "TwoWayVEdge",
      id: "98a47295-cb6d-4083-9092-3eec902c8205",
    },
    {
      start: {
        x: 1160,
        y: 3040,
      },
      startId: "1ce64371-5227-4d19-b3c3-802604479e83",
      end: {
        x: 1700,
        y: 3120,
      },
      endId: "bce16b20-0e43-4c80-b962-149880c71a64",
      name: "TwoWayHEdge",
      id: "69682f22-bbd7-4627-96e1-ff1c1ba0d259",
    },
    {
      start: {
        x: 1700,
        y: 3120,
      },
      startId: "bce16b20-0e43-4c80-b962-149880c71a64",
      end: {
        x: 2240,
        y: 3060,
      },
      endId: "7876f4a2-4881-4938-80f2-0faa4b8555c5",
      name: "TwoWayHEdge",
      id: "b96076d4-c844-445d-9440-6d6e77343f9a",
    },
    {
      start: {
        x: 2160,
        y: 2540,
      },
      startId: "3ff20a5a-3d3a-4af4-b4f0-5b04d9e79ad6",
      end: {
        x: 2240,
        y: 3060,
      },
      endId: "7876f4a2-4881-4938-80f2-0faa4b8555c5",
      name: "TwoWayVEdge",
      id: "dc7fbe3a-fdf1-4e39-93b2-f882b47966a9",
    },
    {
      start: {
        x: 1700,
        y: 3120,
      },
      startId: "bce16b20-0e43-4c80-b962-149880c71a64",
      end: {
        x: 1680,
        y: 3560,
      },
      endId: "e7d4eaea-c253-4c39-b416-c861300ffd18",
      name: "TwoWayVEdge",
      id: "b5220081-32db-4644-95f5-f017f4c69539",
    },
    {
      start: {
        x: 1680,
        y: 3560,
      },
      startId: "e7d4eaea-c253-4c39-b416-c861300ffd18",
      end: {
        x: 1740,
        y: 3960,
      },
      endId: "9ac7b626-9610-443b-9549-f02060c02fab",
      name: "TwoWayVEdge",
      id: "84bb5362-66dd-4d93-b5db-34741e28a878",
    },
    {
      start: {
        x: 1740,
        y: 3960,
      },
      startId: "9ac7b626-9610-443b-9549-f02060c02fab",
      end: {
        x: 1700,
        y: 4400,
      },
      endId: "d0ca7558-9633-4028-8fe5-f5b7234243da",
      name: "TwoWayVEdge",
      id: "a9cf5427-e793-4fd5-a546-eef07dc4ad3a",
    },
    {
      start: {
        x: 1680,
        y: 3560,
      },
      startId: "e7d4eaea-c253-4c39-b416-c861300ffd18",
      end: {
        x: 1120,
        y: 3600,
      },
      endId: "8b8f1818-8213-4d6c-9584-24ea2b039b8c",
      name: "TwoWayHEdge",
      id: "f2798560-18b9-493a-8bc6-052d3b92de71",
    },
    {
      start: {
        x: 1120,
        y: 3600,
      },
      startId: "8b8f1818-8213-4d6c-9584-24ea2b039b8c",
      end: {
        x: 1180,
        y: 4420,
      },
      endId: "033660e3-0d97-4897-96ac-c49416547a0f",
      name: "TwoWayVEdge",
      id: "e8672c1a-1d98-4fda-bbec-a6bbcca80e03",
    },
    {
      start: {
        x: 1180,
        y: 4420,
      },
      startId: "033660e3-0d97-4897-96ac-c49416547a0f",
      end: {
        x: 1700,
        y: 4400,
      },
      endId: "d0ca7558-9633-4028-8fe5-f5b7234243da",
      name: "TwoWayHEdge",
      id: "a12e2dd8-85d8-40f1-8ec3-822089972aa6",
    },
    {
      start: {
        x: 1180,
        y: 4420,
      },
      startId: "033660e3-0d97-4897-96ac-c49416547a0f",
      end: {
        x: 620,
        y: 4440,
      },
      endId: "6b7b9838-7565-4b60-a389-907c56a57131",
      name: "TwoWayHEdge",
      id: "dad96783-1dcd-452b-b51b-e3966e9b9d2e",
    },
    {
      start: {
        x: 620,
        y: 4440,
      },
      startId: "6b7b9838-7565-4b60-a389-907c56a57131",
      end: {
        x: 40,
        y: 4420,
      },
      endId: "d12b45ad-324f-4ae8-b710-14340e0b73ad",
      name: "TwoWayHEdge",
      id: "4d7d5734-6786-47cd-a699-975474405856",
    },
    {
      start: {
        x: 1740,
        y: 3960,
      },
      startId: "9ac7b626-9610-443b-9549-f02060c02fab",
      end: {
        x: 2360,
        y: 3960,
      },
      endId: "4fc6429f-e69b-415e-add5-495ebea66cbd",
      name: "TwoWayHEdge",
      id: "f0570145-3c54-4838-91e3-e0e402dddc0a",
    },
    {
      start: {
        x: 2360,
        y: 3960,
      },
      startId: "4fc6429f-e69b-415e-add5-495ebea66cbd",
      end: {
        x: 3320,
        y: 3960,
      },
      endId: "82105f12-d78a-493e-a4f2-adc8ef31c404",
      name: "TwoWayHEdge",
      id: "361e0d6b-f7b2-42f2-af04-3efeaf732a07",
    },
    {
      start: {
        x: 2360,
        y: 3960,
      },
      startId: "4fc6429f-e69b-415e-add5-495ebea66cbd",
      end: {
        x: 2300,
        y: 3520,
      },
      endId: "ea5b0827-120f-4ae3-9215-8c45d0b7c3e3",
      name: "TwoWayVEdge",
      id: "e9f48e94-b16d-462e-96e0-79583fd393dc",
    },
    {
      start: {
        x: 2300,
        y: 3520,
      },
      startId: "ea5b0827-120f-4ae3-9215-8c45d0b7c3e3",
      end: {
        x: 2860,
        y: 3460,
      },
      endId: "801a8268-d03f-471e-87aa-1b4ef58458c9",
      name: "TwoWayHEdge",
      id: "1e33a37f-015d-4116-ac26-04dd86bd0127",
    },
    {
      start: {
        x: 2860,
        y: 3460,
      },
      startId: "801a8268-d03f-471e-87aa-1b4ef58458c9",
      end: {
        x: 3420,
        y: 3520,
      },
      endId: "85e2af8d-29ab-4c40-944d-cb87688d53c6",
      name: "TwoWayHEdge",
      id: "ba7a5c2a-6636-400f-8c78-fee354c6e8f2",
    },
    {
      start: {
        x: 3420,
        y: 3520,
      },
      startId: "85e2af8d-29ab-4c40-944d-cb87688d53c6",
      end: {
        x: 3320,
        y: 3960,
      },
      endId: "82105f12-d78a-493e-a4f2-adc8ef31c404",
      name: "TwoWayVEdge",
      id: "6bf8eee7-d5df-45b1-8918-094a2bfdc05d",
    },
    {
      start: {
        x: 1180,
        y: 4420,
      },
      startId: "033660e3-0d97-4897-96ac-c49416547a0f",
      end: {
        x: 1140,
        y: 4920,
      },
      endId: "d719a536-6958-4e0d-a09f-5d69ce0d8438",
      name: "TwoWayVEdge",
      id: "8e85dc86-8b89-46f6-8ff0-d94e0c3f0519",
    },
    {
      start: {
        x: 1140,
        y: 4920,
      },
      startId: "d719a536-6958-4e0d-a09f-5d69ce0d8438",
      end: {
        x: 1660,
        y: 4940,
      },
      endId: "03e98c6b-cc91-4224-9db2-bb2f395fab14",
      name: "TwoWayHEdge",
      id: "0164079a-ea04-4996-904f-ab7fdd8e821e",
    },
    {
      start: {
        x: 1660,
        y: 4940,
      },
      startId: "03e98c6b-cc91-4224-9db2-bb2f395fab14",
      end: {
        x: 2300,
        y: 4960,
      },
      endId: "140189c8-44a6-442e-a165-c442e1e9b7a3",
      name: "TwoWayHEdge",
      id: "aebb327a-5889-467a-9969-de17dee7557a",
    },
    {
      start: {
        x: 2300,
        y: 4960,
      },
      startId: "140189c8-44a6-442e-a165-c442e1e9b7a3",
      end: {
        x: 2260,
        y: 4500,
      },
      endId: "63c35a32-75dc-4454-85ac-808b70b243b0",
      name: "TwoWayVEdge",
      id: "eeed3c72-112b-44f9-a9c7-1130f97873e5",
    },
    {
      start: {
        x: 2260,
        y: 4500,
      },
      startId: "63c35a32-75dc-4454-85ac-808b70b243b0",
      end: {
        x: 2820,
        y: 4540,
      },
      endId: "4db8878c-514a-4f1b-a78b-527a553729e9",
      name: "TwoWayHEdge",
      id: "4381706b-0ffa-4a16-b2b6-8ae3d6b53d45",
    },
    {
      start: {
        x: 2820,
        y: 4540,
      },
      startId: "4db8878c-514a-4f1b-a78b-527a553729e9",
      end: {
        x: 3400,
        y: 4520,
      },
      endId: "a9e95a19-e9d2-423e-b771-6f46b1bc5280",
      name: "TwoWayHEdge",
      id: "0e0b4cc3-1ba4-4206-943e-f33b8109dcdf",
    },
    {
      start: {
        x: 3320,
        y: 3960,
      },
      startId: "82105f12-d78a-493e-a4f2-adc8ef31c404",
      end: {
        x: 3400,
        y: 4520,
      },
      endId: "a9e95a19-e9d2-423e-b771-6f46b1bc5280",
      name: "TwoWayVEdge",
      id: "a23c9b67-1324-469d-a590-617a6ed5211d",
    },
  ],
};
export default antarcticaCaveB2Map;
