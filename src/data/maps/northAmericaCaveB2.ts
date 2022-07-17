import { Vertex, Edge } from "../global";

const northAmericaCaveB2: { vertices: Vertex[]; edges: Edge[] } = {
  vertices: [
    {
      position: {
        x: 0,
        y: 0,
      },
      name: "BattleField",
      id: "d4b0ef05-03f8-4e0c-89ae-60d59c455ee5",
      edges: [
        "b4c57aa5-9458-40bf-9b9f-e4bf9a1ddbdd",
        "a483cfd5-f0f3-4c99-8130-58310c2b32b7",
      ],
      top: "ae8733c9-ec73-4fac-91c1-31b22ac7c1d4",
      right: "e9a424fc-5022-4a6e-a109-0d314d7b7a8f",
    },
    {
      id: "ae8733c9-ec73-4fac-91c1-31b22ac7c1d4",
      name: "MagicField",
      position: {
        x: -40,
        y: -540,
      },
      edges: [
        "b4c57aa5-9458-40bf-9b9f-e4bf9a1ddbdd",
        "b23ca14f-573b-47f8-af73-5340cd5f402a",
      ],
      bottom: "d4b0ef05-03f8-4e0c-89ae-60d59c455ee5",
      top: "a8254735-a7ae-4e2c-abc2-0386b1766e74",
    },
    {
      id: "a8254735-a7ae-4e2c-abc2-0386b1766e74",
      name: "CaveField",
      position: {
        x: 20,
        y: -1080,
      },
      edges: ["b23ca14f-573b-47f8-af73-5340cd5f402a"],
      bottom: "ae8733c9-ec73-4fac-91c1-31b22ac7c1d4",
    },
    {
      id: "e9a424fc-5022-4a6e-a109-0d314d7b7a8f",
      name: "RedTreasureField",
      position: {
        x: 680,
        y: -20,
      },
      edges: [
        "a483cfd5-f0f3-4c99-8130-58310c2b32b7",
        "6c45ca99-27b4-4adf-b599-772f16c6acf7",
      ],
      left: "d4b0ef05-03f8-4e0c-89ae-60d59c455ee5",
      right: "480e3fcf-391d-4f9d-9ce3-62933025acb1",
    },
    {
      id: "480e3fcf-391d-4f9d-9ce3-62933025acb1",
      name: "DamageField",
      position: {
        x: 1360,
        y: 0,
      },
      edges: [
        "6c45ca99-27b4-4adf-b599-772f16c6acf7",
        "ab55a8c0-602f-41ca-bbc5-574c34685d46",
      ],
      left: "e9a424fc-5022-4a6e-a109-0d314d7b7a8f",
      bottom: "efa8bb70-3cbc-4cb5-ad2b-b62a072d1f6d",
    },
    {
      id: "efa8bb70-3cbc-4cb5-ad2b-b62a072d1f6d",
      name: "BattleField",
      position: {
        x: 1440,
        y: 520,
      },
      edges: [
        "ab55a8c0-602f-41ca-bbc5-574c34685d46",
        "5adb958d-81cc-446f-be37-683beac88631",
        "ce5534cd-aec2-4659-b14f-c44718184a60",
      ],
      top: "480e3fcf-391d-4f9d-9ce3-62933025acb1",
      left: "1954ef64-121c-46b7-b45e-d42b08697130",
      right: "25b26359-165a-4740-8cdc-0a72614d2fb5",
    },
    {
      id: "1954ef64-121c-46b7-b45e-d42b08697130",
      name: "TreasureField",
      position: {
        x: 780,
        y: 560,
      },
      edges: [
        "5adb958d-81cc-446f-be37-683beac88631",
        "4171fca1-cc3e-44cd-9a02-15d650a6e942",
      ],
      right: "efa8bb70-3cbc-4cb5-ad2b-b62a072d1f6d",
      bottom: "ef5056c8-af12-4ba5-a12d-4426798d00a1",
    },
    {
      id: "ef5056c8-af12-4ba5-a12d-4426798d00a1",
      name: "BattleField",
      position: {
        x: 720,
        y: 1020,
      },
      edges: [
        "4171fca1-cc3e-44cd-9a02-15d650a6e942",
        "9517df94-1df1-4b41-a7f8-5a24db4e7d08",
        "0454d9dc-aeeb-4335-b792-e9aef60c1fd4",
      ],
      top: "1954ef64-121c-46b7-b45e-d42b08697130",
      right: "b6ff19e9-d200-451d-9a1d-4b5d05163b7b",
      left: "4d6defeb-6bea-4078-8aed-7ee0bad1cb5c",
    },
    {
      id: "25b26359-165a-4740-8cdc-0a72614d2fb5",
      name: "DamageField",
      position: {
        x: 2120,
        y: 560,
      },
      edges: [
        "ce5534cd-aec2-4659-b14f-c44718184a60",
        "58ca1ebe-5302-408a-a52d-d6049cfbc7fe",
      ],
      left: "efa8bb70-3cbc-4cb5-ad2b-b62a072d1f6d",
      bottom: "ba46b29b-70e7-4080-ae23-4c5eaa3cfc2b",
    },
    {
      id: "ba46b29b-70e7-4080-ae23-4c5eaa3cfc2b",
      name: "MagicField",
      position: {
        x: 2180,
        y: 1040,
      },
      edges: [
        "58ca1ebe-5302-408a-a52d-d6049cfbc7fe",
        "ccfd1149-cb4a-4c60-9443-df4bf3955a0a",
      ],
      top: "25b26359-165a-4740-8cdc-0a72614d2fb5",
      left: "c70182aa-a316-4a3b-87b4-72aba56c72d9",
    },
    {
      id: "b6ff19e9-d200-451d-9a1d-4b5d05163b7b",
      name: "DamageField",
      position: {
        x: 1140,
        y: 1100,
      },
      edges: [
        "9517df94-1df1-4b41-a7f8-5a24db4e7d08",
        "c59656a5-fefc-485a-b130-21b2634b453a",
      ],
      left: "ef5056c8-af12-4ba5-a12d-4426798d00a1",
      right: "c70182aa-a316-4a3b-87b4-72aba56c72d9",
    },
    {
      id: "c70182aa-a316-4a3b-87b4-72aba56c72d9",
      name: "BattleField",
      position: {
        x: 1680,
        y: 1100,
      },
      edges: [
        "c59656a5-fefc-485a-b130-21b2634b453a",
        "ccfd1149-cb4a-4c60-9443-df4bf3955a0a",
        "71ffa283-62e5-4865-aa61-e818f24e3d0b",
      ],
      left: "b6ff19e9-d200-451d-9a1d-4b5d05163b7b",
      right: "ba46b29b-70e7-4080-ae23-4c5eaa3cfc2b",
      bottom: "9e4a0e43-e166-4db3-b45d-8af1678e3b5f",
    },
    {
      id: "4d6defeb-6bea-4078-8aed-7ee0bad1cb5c",
      name: "TreasureField",
      position: {
        x: -360,
        y: 840,
      },
      edges: [
        "0454d9dc-aeeb-4335-b792-e9aef60c1fd4",
        "48e5a065-5497-4caf-aeab-23c5899709fc",
      ],
      right: "ef5056c8-af12-4ba5-a12d-4426798d00a1",
      bottom: "bb2df3a4-6402-416a-8f60-301e03ad2c01",
    },
    {
      id: "bb2df3a4-6402-416a-8f60-301e03ad2c01",
      name: "BattleField",
      position: {
        x: -320,
        y: 1280,
      },
      edges: [
        "48e5a065-5497-4caf-aeab-23c5899709fc",
        "c0578ca1-e89d-4044-886e-3fe3ecd32a8f",
      ],
      top: "4d6defeb-6bea-4078-8aed-7ee0bad1cb5c",
      bottom: "1c96ef30-8879-4847-bb3d-51e783fbc940",
    },
    {
      id: "1c96ef30-8879-4847-bb3d-51e783fbc940",
      name: "BattleField",
      position: {
        x: -380,
        y: 1720,
      },
      edges: [
        "c0578ca1-e89d-4044-886e-3fe3ecd32a8f",
        "fdbffd0c-be08-40b9-bba2-45490ada1ccc",
      ],
      top: "bb2df3a4-6402-416a-8f60-301e03ad2c01",
      bottom: "68de4b32-0790-41dc-afe9-fbd4b95a10bb",
    },
    {
      id: "68de4b32-0790-41dc-afe9-fbd4b95a10bb",
      name: "KeyTreasureField",
      position: {
        x: -440,
        y: 2180,
      },
      edges: [
        "fdbffd0c-be08-40b9-bba2-45490ada1ccc",
        "16fab3b5-dbd0-4803-8c83-4639363ce8eb",
        "cbf111d6-6167-41cb-b290-285056173503",
      ],
      top: "1c96ef30-8879-4847-bb3d-51e783fbc940",
      right: "92ee87ac-f1fd-4cac-b59f-3b73aa4dfc67",
      left: "28d000bd-f2b8-449a-9df8-f60cd607fbff",
    },
    {
      id: "28d000bd-f2b8-449a-9df8-f60cd607fbff",
      name: "BattleField",
      position: {
        x: -960,
        y: 2180,
      },
      edges: [
        "cbf111d6-6167-41cb-b290-285056173503",
        "7286ef6c-fba6-4823-b5f4-cc7c7cd401db",
      ],
      right: "68de4b32-0790-41dc-afe9-fbd4b95a10bb",
      bottom: "41c56cdf-2ef4-4dfa-ad48-f2998515c163",
    },
    {
      id: "92ee87ac-f1fd-4cac-b59f-3b73aa4dfc67",
      name: "TreasureField",
      position: {
        x: 140,
        y: 2180,
      },
      edges: [
        "16fab3b5-dbd0-4803-8c83-4639363ce8eb",
        "a0a18081-7579-4dae-a581-83d5f8e4314b",
      ],
      left: "68de4b32-0790-41dc-afe9-fbd4b95a10bb",
      bottom: "6c3d374c-2577-4bf4-8928-3e419d1654b2",
    },
    {
      id: "41c56cdf-2ef4-4dfa-ad48-f2998515c163",
      name: "TreasureField",
      position: {
        x: -940,
        y: 2620,
      },
      edges: [
        "7286ef6c-fba6-4823-b5f4-cc7c7cd401db",
        "f99f8c9b-96d8-44b8-a52c-c62c3e648b40",
      ],
      top: "28d000bd-f2b8-449a-9df8-f60cd607fbff",
      right: "6c3d374c-2577-4bf4-8928-3e419d1654b2",
    },
    {
      id: "6c3d374c-2577-4bf4-8928-3e419d1654b2",
      name: "CollectMoneyField",
      position: {
        x: 120,
        y: 2620,
      },
      edges: [
        "f99f8c9b-96d8-44b8-a52c-c62c3e648b40",
        "a0a18081-7579-4dae-a581-83d5f8e4314b",
      ],
      left: "41c56cdf-2ef4-4dfa-ad48-f2998515c163",
      top: "92ee87ac-f1fd-4cac-b59f-3b73aa4dfc67",
    },
    {
      id: "9e4a0e43-e166-4db3-b45d-8af1678e3b5f",
      name: "TreasureField",
      position: {
        x: 1680,
        y: 1500,
      },
      edges: [
        "71ffa283-62e5-4865-aa61-e818f24e3d0b",
        "0d302c69-9a7c-40a6-bbb7-f90eaddfdcc1",
      ],
      top: "c70182aa-a316-4a3b-87b4-72aba56c72d9",
      bottom: "5a9bf65b-f559-476f-bd8c-ea46084e9b9a",
    },
    {
      id: "5a9bf65b-f559-476f-bd8c-ea46084e9b9a",
      name: "BattleField",
      position: {
        x: 1680,
        y: 1900,
      },
      edges: [
        "0d302c69-9a7c-40a6-bbb7-f90eaddfdcc1",
        "51358794-a1b1-4fb7-a041-cac42322bde2",
      ],
      top: "9e4a0e43-e166-4db3-b45d-8af1678e3b5f",
      right: "5aa6f309-c198-41ae-98da-de4583faf89d",
    },
    {
      id: "5aa6f309-c198-41ae-98da-de4583faf89d",
      name: "MagicField",
      position: {
        x: 2200,
        y: 1920,
      },
      edges: [
        "51358794-a1b1-4fb7-a041-cac42322bde2",
        "470f4b67-a44c-4b29-87f5-b35dce25d8fd",
      ],
      left: "5a9bf65b-f559-476f-bd8c-ea46084e9b9a",
      bottom: "c110454d-beab-4a86-8614-c66382a1f982",
    },
    {
      id: "c110454d-beab-4a86-8614-c66382a1f982",
      name: "DamageField",
      position: {
        x: 2220,
        y: 2440,
      },
      edges: [
        "470f4b67-a44c-4b29-87f5-b35dce25d8fd",
        "2bfd3fce-4747-4b1f-9471-f07ddfd5c2e8",
      ],
      top: "5aa6f309-c198-41ae-98da-de4583faf89d",
      right: "b9d95974-d4cd-4b4f-9cbc-4bfdca379008",
    },
    {
      id: "b9d95974-d4cd-4b4f-9cbc-4bfdca379008",
      name: "BattleField",
      position: {
        x: 2820,
        y: 2460,
      },
      edges: [
        "2bfd3fce-4747-4b1f-9471-f07ddfd5c2e8",
        "a8b900dc-611a-4b5c-ae60-6ec78e594265",
      ],
      left: "c110454d-beab-4a86-8614-c66382a1f982",
      bottom: "3ac46be2-227c-4fd2-b532-55d22bc5ecd2",
    },
    {
      id: "3ac46be2-227c-4fd2-b532-55d22bc5ecd2",
      name: "BattleField",
      position: {
        x: 2860,
        y: 2880,
      },
      edges: [
        "a8b900dc-611a-4b5c-ae60-6ec78e594265",
        "c6628065-f592-4697-8334-68b3d0cb04a9",
        "e4901f96-c591-4592-ad68-9698c16bc266",
        "f6cbd7da-77ec-460e-bebb-b3aa2816d1b3",
      ],
      top: "b9d95974-d4cd-4b4f-9cbc-4bfdca379008",
      right: "deecf3a2-f249-4727-a8a5-0bb0fb70de72",
      bottom: "26b03910-bb65-46d7-ae87-d7cc9d7adc10",
      left: "d755353d-05dc-4ab2-9e06-2b2e72a9cbcb",
    },
    {
      id: "26b03910-bb65-46d7-ae87-d7cc9d7adc10",
      name: "TreasureField",
      position: {
        x: 2780,
        y: 3400,
      },
      edges: [
        "e4901f96-c591-4592-ad68-9698c16bc266",
        "988534be-b413-4f05-9c7c-bc84f78d3dd1",
      ],
      top: "3ac46be2-227c-4fd2-b532-55d22bc5ecd2",
      right: "09c11be5-a025-4464-823b-7ed085ea7d86",
    },
    {
      id: "d755353d-05dc-4ab2-9e06-2b2e72a9cbcb",
      name: "RedTreasureField",
      position: {
        x: 2240,
        y: 2880,
      },
      edges: [
        "f6cbd7da-77ec-460e-bebb-b3aa2816d1b3",
        "867463d0-4e49-46d6-9c67-52746e51493a",
      ],
      right: "3ac46be2-227c-4fd2-b532-55d22bc5ecd2",
      bottom: "8330822e-43f0-49c3-b047-5596ee062278",
    },
    {
      id: "8330822e-43f0-49c3-b047-5596ee062278",
      name: "BattleField",
      position: {
        x: 2180,
        y: 3400,
      },
      edges: [
        "867463d0-4e49-46d6-9c67-52746e51493a",
        "3f68b299-9625-4927-9fa9-ba93b075d167",
      ],
      top: "d755353d-05dc-4ab2-9e06-2b2e72a9cbcb",
      left: "fcf536c4-3e06-4f88-ab10-f0d5a5cd2c65",
    },
    {
      id: "fcf536c4-3e06-4f88-ab10-f0d5a5cd2c65",
      name: "BattleField",
      position: {
        x: 1560,
        y: 3400,
      },
      edges: [
        "3f68b299-9625-4927-9fa9-ba93b075d167",
        "4d78b2fa-a16d-468b-9e8d-a4d84c3baa92",
      ],
      right: "8330822e-43f0-49c3-b047-5596ee062278",
      top: "cad69427-5805-4118-98d3-ade94c364851",
    },
    {
      id: "cad69427-5805-4118-98d3-ade94c364851",
      name: "DamageField",
      position: {
        x: 1620,
        y: 2880,
      },
      edges: [
        "4d78b2fa-a16d-468b-9e8d-a4d84c3baa92",
        "b84470c6-92a3-4b18-a2e4-8bdc1bfc9321",
      ],
      bottom: "fcf536c4-3e06-4f88-ab10-f0d5a5cd2c65",
      top: "81ae304c-a25c-463a-a0e1-3f5703fa9f05",
    },
    {
      id: "81ae304c-a25c-463a-a0e1-3f5703fa9f05",
      name: "CollectAllMoneyField",
      position: {
        x: 1580,
        y: 2440,
      },
      edges: ["b84470c6-92a3-4b18-a2e4-8bdc1bfc9321"],
      bottom: "cad69427-5805-4118-98d3-ade94c364851",
    },
    {
      id: "deecf3a2-f249-4727-a8a5-0bb0fb70de72",
      name: "MagicField",
      position: {
        x: 4000,
        y: 2880,
      },
      edges: [
        "c6628065-f592-4697-8334-68b3d0cb04a9",
        "7a7a90a0-d60d-48a2-b5e3-bbaa892bd84c",
        "bd87d784-b496-489a-b76b-fd02cd0773ca",
      ],
      left: "3ac46be2-227c-4fd2-b532-55d22bc5ecd2",
      bottom: "e50bb6de-c3a4-49c5-9c2d-35bb73b0ffc9",
      right: "4b3cd5f1-9979-4a0c-bc70-2f7c5989f29e",
    },
    {
      id: "09c11be5-a025-4464-823b-7ed085ea7d86",
      name: "BattleField",
      position: {
        x: 3380,
        y: 3360,
      },
      edges: [
        "988534be-b413-4f05-9c7c-bc84f78d3dd1",
        "9da574f3-ad0a-4021-8e67-9adb4fac9e8c",
      ],
      left: "26b03910-bb65-46d7-ae87-d7cc9d7adc10",
      right: "e50bb6de-c3a4-49c5-9c2d-35bb73b0ffc9",
    },
    {
      id: "e50bb6de-c3a4-49c5-9c2d-35bb73b0ffc9",
      name: "TreasureField",
      position: {
        x: 3980,
        y: 3420,
      },
      edges: [
        "9da574f3-ad0a-4021-8e67-9adb4fac9e8c",
        "7a7a90a0-d60d-48a2-b5e3-bbaa892bd84c",
      ],
      left: "09c11be5-a025-4464-823b-7ed085ea7d86",
      top: "deecf3a2-f249-4727-a8a5-0bb0fb70de72",
    },
    {
      id: "4b3cd5f1-9979-4a0c-bc70-2f7c5989f29e",
      name: "BattleField",
      position: {
        x: 4680,
        y: 2880,
      },
      edges: [
        "bd87d784-b496-489a-b76b-fd02cd0773ca",
        "1ad4b832-9d97-465a-8609-1eb634ef1577",
        "abbfa66d-6e5a-4e26-80c2-1c6d6ab228ae",
      ],
      left: "deecf3a2-f249-4727-a8a5-0bb0fb70de72",
      right: "d652268c-843b-4906-88e6-27c0aae5afbc",
      bottom: "4b724f10-d8e3-4cb2-ae9f-b416fecc4b31",
    },
    {
      id: "d652268c-843b-4906-88e6-27c0aae5afbc",
      name: "TreasureField",
      position: {
        x: 5340,
        y: 2880,
      },
      edges: [
        "1ad4b832-9d97-465a-8609-1eb634ef1577",
        "57fb865d-bc2c-4ddf-b67e-4e499943bc0e",
      ],
      left: "4b3cd5f1-9979-4a0c-bc70-2f7c5989f29e",
      bottom: "a78c29bf-b716-439a-af50-65ee2678e07b",
    },
    {
      id: "4b724f10-d8e3-4cb2-ae9f-b416fecc4b31",
      name: "GoldTreasureField",
      position: {
        x: 4660,
        y: 3420,
      },
      edges: [
        "abbfa66d-6e5a-4e26-80c2-1c6d6ab228ae",
        "762775da-047c-4849-bcba-0e727fa0b48b",
      ],
      top: "4b3cd5f1-9979-4a0c-bc70-2f7c5989f29e",
      bottom: "45529d6f-7ac7-4f08-91aa-9957e133c879",
    },
    {
      id: "45529d6f-7ac7-4f08-91aa-9957e133c879",
      name: "DamageField",
      position: {
        x: 4700,
        y: 3800,
      },
      edges: [
        "762775da-047c-4849-bcba-0e727fa0b48b",
        "ef6cf911-e15a-4d8a-8f8f-385d15c1df7c",
      ],
      top: "4b724f10-d8e3-4cb2-ae9f-b416fecc4b31",
      right: "a78c29bf-b716-439a-af50-65ee2678e07b",
    },
    {
      id: "a78c29bf-b716-439a-af50-65ee2678e07b",
      name: "BattleField",
      position: {
        x: 5320,
        y: 3800,
      },
      edges: [
        "ef6cf911-e15a-4d8a-8f8f-385d15c1df7c",
        "57fb865d-bc2c-4ddf-b67e-4e499943bc0e",
      ],
      left: "45529d6f-7ac7-4f08-91aa-9957e133c879",
      top: "d652268c-843b-4906-88e6-27c0aae5afbc",
    },
  ],
  edges: [
    {
      start: {
        x: 0,
        y: 0,
      },
      startId: "d4b0ef05-03f8-4e0c-89ae-60d59c455ee5",
      end: {
        x: -40,
        y: -540,
      },
      endId: "ae8733c9-ec73-4fac-91c1-31b22ac7c1d4",
      name: "TwoWayVEdge",
      id: "b4c57aa5-9458-40bf-9b9f-e4bf9a1ddbdd",
    },
    {
      start: {
        x: -40,
        y: -540,
      },
      startId: "ae8733c9-ec73-4fac-91c1-31b22ac7c1d4",
      end: {
        x: 20,
        y: -1080,
      },
      endId: "a8254735-a7ae-4e2c-abc2-0386b1766e74",
      name: "TwoWayVEdge",
      id: "b23ca14f-573b-47f8-af73-5340cd5f402a",
    },
    {
      start: {
        x: 0,
        y: 0,
      },
      startId: "d4b0ef05-03f8-4e0c-89ae-60d59c455ee5",
      end: {
        x: 680,
        y: -20,
      },
      endId: "e9a424fc-5022-4a6e-a109-0d314d7b7a8f",
      name: "TwoWayHEdge",
      id: "a483cfd5-f0f3-4c99-8130-58310c2b32b7",
    },
    {
      start: {
        x: 680,
        y: -20,
      },
      startId: "e9a424fc-5022-4a6e-a109-0d314d7b7a8f",
      end: {
        x: 1360,
        y: 0,
      },
      endId: "480e3fcf-391d-4f9d-9ce3-62933025acb1",
      name: "TwoWayHEdge",
      id: "6c45ca99-27b4-4adf-b599-772f16c6acf7",
    },
    {
      start: {
        x: 1360,
        y: 0,
      },
      startId: "480e3fcf-391d-4f9d-9ce3-62933025acb1",
      end: {
        x: 1440,
        y: 520,
      },
      endId: "efa8bb70-3cbc-4cb5-ad2b-b62a072d1f6d",
      name: "TwoWayVEdge",
      id: "ab55a8c0-602f-41ca-bbc5-574c34685d46",
    },
    {
      start: {
        x: 1440,
        y: 520,
      },
      startId: "efa8bb70-3cbc-4cb5-ad2b-b62a072d1f6d",
      end: {
        x: 780,
        y: 560,
      },
      endId: "1954ef64-121c-46b7-b45e-d42b08697130",
      name: "TwoWayHEdge",
      id: "5adb958d-81cc-446f-be37-683beac88631",
    },
    {
      start: {
        x: 780,
        y: 560,
      },
      startId: "1954ef64-121c-46b7-b45e-d42b08697130",
      end: {
        x: 720,
        y: 1020,
      },
      endId: "ef5056c8-af12-4ba5-a12d-4426798d00a1",
      name: "TwoWayVEdge",
      id: "4171fca1-cc3e-44cd-9a02-15d650a6e942",
    },
    {
      start: {
        x: 1440,
        y: 520,
      },
      startId: "efa8bb70-3cbc-4cb5-ad2b-b62a072d1f6d",
      end: {
        x: 2120,
        y: 560,
      },
      endId: "25b26359-165a-4740-8cdc-0a72614d2fb5",
      name: "TwoWayHEdge",
      id: "ce5534cd-aec2-4659-b14f-c44718184a60",
    },
    {
      start: {
        x: 2120,
        y: 560,
      },
      startId: "25b26359-165a-4740-8cdc-0a72614d2fb5",
      end: {
        x: 2180,
        y: 1040,
      },
      endId: "ba46b29b-70e7-4080-ae23-4c5eaa3cfc2b",
      name: "TwoWayVEdge",
      id: "58ca1ebe-5302-408a-a52d-d6049cfbc7fe",
    },
    {
      start: {
        x: 720,
        y: 1020,
      },
      startId: "ef5056c8-af12-4ba5-a12d-4426798d00a1",
      end: {
        x: 1140,
        y: 1100,
      },
      endId: "b6ff19e9-d200-451d-9a1d-4b5d05163b7b",
      name: "TwoWayHEdge",
      id: "9517df94-1df1-4b41-a7f8-5a24db4e7d08",
    },
    {
      start: {
        x: 1140,
        y: 1100,
      },
      startId: "b6ff19e9-d200-451d-9a1d-4b5d05163b7b",
      end: {
        x: 1680,
        y: 1100,
      },
      endId: "c70182aa-a316-4a3b-87b4-72aba56c72d9",
      name: "TwoWayHEdge",
      id: "c59656a5-fefc-485a-b130-21b2634b453a",
    },
    {
      start: {
        x: 1680,
        y: 1100,
      },
      startId: "c70182aa-a316-4a3b-87b4-72aba56c72d9",
      end: {
        x: 2180,
        y: 1040,
      },
      endId: "ba46b29b-70e7-4080-ae23-4c5eaa3cfc2b",
      name: "TwoWayHEdge",
      id: "ccfd1149-cb4a-4c60-9443-df4bf3955a0a",
    },
    {
      start: {
        x: 720,
        y: 1020,
      },
      startId: "ef5056c8-af12-4ba5-a12d-4426798d00a1",
      end: {
        x: -360,
        y: 840,
      },
      endId: "4d6defeb-6bea-4078-8aed-7ee0bad1cb5c",
      name: "TwoWayHEdge",
      id: "0454d9dc-aeeb-4335-b792-e9aef60c1fd4",
    },
    {
      start: {
        x: -360,
        y: 840,
      },
      startId: "4d6defeb-6bea-4078-8aed-7ee0bad1cb5c",
      end: {
        x: -320,
        y: 1280,
      },
      endId: "bb2df3a4-6402-416a-8f60-301e03ad2c01",
      name: "TwoWayVEdge",
      id: "48e5a065-5497-4caf-aeab-23c5899709fc",
    },
    {
      start: {
        x: -320,
        y: 1280,
      },
      startId: "bb2df3a4-6402-416a-8f60-301e03ad2c01",
      end: {
        x: -380,
        y: 1720,
      },
      endId: "1c96ef30-8879-4847-bb3d-51e783fbc940",
      name: "TwoWayVEdge",
      id: "c0578ca1-e89d-4044-886e-3fe3ecd32a8f",
    },
    {
      start: {
        x: -380,
        y: 1720,
      },
      startId: "1c96ef30-8879-4847-bb3d-51e783fbc940",
      end: {
        x: -440,
        y: 2180,
      },
      endId: "68de4b32-0790-41dc-afe9-fbd4b95a10bb",
      name: "TwoWayVEdge",
      id: "fdbffd0c-be08-40b9-bba2-45490ada1ccc",
    },
    {
      start: {
        x: -440,
        y: 2180,
      },
      startId: "68de4b32-0790-41dc-afe9-fbd4b95a10bb",
      end: {
        x: 140,
        y: 2180,
      },
      endId: "92ee87ac-f1fd-4cac-b59f-3b73aa4dfc67",
      name: "TwoWayHEdge",
      id: "16fab3b5-dbd0-4803-8c83-4639363ce8eb",
    },
    {
      start: {
        x: -440,
        y: 2180,
      },
      startId: "68de4b32-0790-41dc-afe9-fbd4b95a10bb",
      end: {
        x: -960,
        y: 2180,
      },
      endId: "28d000bd-f2b8-449a-9df8-f60cd607fbff",
      name: "TwoWayHEdge",
      id: "cbf111d6-6167-41cb-b290-285056173503",
    },
    {
      start: {
        x: -960,
        y: 2180,
      },
      startId: "28d000bd-f2b8-449a-9df8-f60cd607fbff",
      end: {
        x: -940,
        y: 2620,
      },
      endId: "41c56cdf-2ef4-4dfa-ad48-f2998515c163",
      name: "TwoWayVEdge",
      id: "7286ef6c-fba6-4823-b5f4-cc7c7cd401db",
    },
    {
      start: {
        x: -940,
        y: 2620,
      },
      startId: "41c56cdf-2ef4-4dfa-ad48-f2998515c163",
      end: {
        x: 120,
        y: 2620,
      },
      endId: "6c3d374c-2577-4bf4-8928-3e419d1654b2",
      name: "TwoWayHEdge",
      id: "f99f8c9b-96d8-44b8-a52c-c62c3e648b40",
    },
    {
      start: {
        x: 140,
        y: 2180,
      },
      startId: "92ee87ac-f1fd-4cac-b59f-3b73aa4dfc67",
      end: {
        x: 120,
        y: 2620,
      },
      endId: "6c3d374c-2577-4bf4-8928-3e419d1654b2",
      name: "TwoWayVEdge",
      id: "a0a18081-7579-4dae-a581-83d5f8e4314b",
    },
    {
      start: {
        x: 1680,
        y: 1100,
      },
      startId: "c70182aa-a316-4a3b-87b4-72aba56c72d9",
      end: {
        x: 1680,
        y: 1500,
      },
      endId: "9e4a0e43-e166-4db3-b45d-8af1678e3b5f",
      name: "TwoWayVEdge",
      id: "71ffa283-62e5-4865-aa61-e818f24e3d0b",
    },
    {
      start: {
        x: 1680,
        y: 1500,
      },
      startId: "9e4a0e43-e166-4db3-b45d-8af1678e3b5f",
      end: {
        x: 1680,
        y: 1900,
      },
      endId: "5a9bf65b-f559-476f-bd8c-ea46084e9b9a",
      name: "TwoWayVEdge",
      id: "0d302c69-9a7c-40a6-bbb7-f90eaddfdcc1",
    },
    {
      start: {
        x: 1680,
        y: 1900,
      },
      startId: "5a9bf65b-f559-476f-bd8c-ea46084e9b9a",
      end: {
        x: 2200,
        y: 1920,
      },
      endId: "5aa6f309-c198-41ae-98da-de4583faf89d",
      name: "TwoWayHEdge",
      id: "51358794-a1b1-4fb7-a041-cac42322bde2",
    },
    {
      start: {
        x: 2200,
        y: 1920,
      },
      startId: "5aa6f309-c198-41ae-98da-de4583faf89d",
      end: {
        x: 2220,
        y: 2440,
      },
      endId: "c110454d-beab-4a86-8614-c66382a1f982",
      name: "TwoWayVEdge",
      id: "470f4b67-a44c-4b29-87f5-b35dce25d8fd",
    },
    {
      start: {
        x: 2220,
        y: 2440,
      },
      startId: "c110454d-beab-4a86-8614-c66382a1f982",
      end: {
        x: 2820,
        y: 2460,
      },
      endId: "b9d95974-d4cd-4b4f-9cbc-4bfdca379008",
      name: "TwoWayHEdge",
      id: "2bfd3fce-4747-4b1f-9471-f07ddfd5c2e8",
    },
    {
      start: {
        x: 2820,
        y: 2460,
      },
      startId: "b9d95974-d4cd-4b4f-9cbc-4bfdca379008",
      end: {
        x: 2860,
        y: 2880,
      },
      endId: "3ac46be2-227c-4fd2-b532-55d22bc5ecd2",
      name: "TwoWayVEdge",
      id: "a8b900dc-611a-4b5c-ae60-6ec78e594265",
    },
    {
      start: {
        x: 2860,
        y: 2880,
      },
      startId: "3ac46be2-227c-4fd2-b532-55d22bc5ecd2",
      end: {
        x: 4000,
        y: 2880,
      },
      endId: "deecf3a2-f249-4727-a8a5-0bb0fb70de72",
      name: "TwoWayHEdge",
      id: "c6628065-f592-4697-8334-68b3d0cb04a9",
    },
    {
      start: {
        x: 2860,
        y: 2880,
      },
      startId: "3ac46be2-227c-4fd2-b532-55d22bc5ecd2",
      end: {
        x: 2780,
        y: 3400,
      },
      endId: "26b03910-bb65-46d7-ae87-d7cc9d7adc10",
      name: "TwoWayVEdge",
      id: "e4901f96-c591-4592-ad68-9698c16bc266",
    },
    {
      start: {
        x: 2860,
        y: 2880,
      },
      startId: "3ac46be2-227c-4fd2-b532-55d22bc5ecd2",
      end: {
        x: 2240,
        y: 2880,
      },
      endId: "d755353d-05dc-4ab2-9e06-2b2e72a9cbcb",
      name: "TwoWayHEdge",
      id: "f6cbd7da-77ec-460e-bebb-b3aa2816d1b3",
    },
    {
      start: {
        x: 2240,
        y: 2880,
      },
      startId: "d755353d-05dc-4ab2-9e06-2b2e72a9cbcb",
      end: {
        x: 2180,
        y: 3400,
      },
      endId: "8330822e-43f0-49c3-b047-5596ee062278",
      name: "TwoWayVEdge",
      id: "867463d0-4e49-46d6-9c67-52746e51493a",
    },
    {
      start: {
        x: 2180,
        y: 3400,
      },
      startId: "8330822e-43f0-49c3-b047-5596ee062278",
      end: {
        x: 1560,
        y: 3400,
      },
      endId: "fcf536c4-3e06-4f88-ab10-f0d5a5cd2c65",
      name: "TwoWayHEdge",
      id: "3f68b299-9625-4927-9fa9-ba93b075d167",
    },
    {
      start: {
        x: 1560,
        y: 3400,
      },
      startId: "fcf536c4-3e06-4f88-ab10-f0d5a5cd2c65",
      end: {
        x: 1620,
        y: 2880,
      },
      endId: "cad69427-5805-4118-98d3-ade94c364851",
      name: "TwoWayVEdge",
      id: "4d78b2fa-a16d-468b-9e8d-a4d84c3baa92",
    },
    {
      start: {
        x: 1620,
        y: 2880,
      },
      startId: "cad69427-5805-4118-98d3-ade94c364851",
      end: {
        x: 1580,
        y: 2440,
      },
      endId: "81ae304c-a25c-463a-a0e1-3f5703fa9f05",
      name: "TwoWayVEdge",
      id: "b84470c6-92a3-4b18-a2e4-8bdc1bfc9321",
    },
    {
      start: {
        x: 2780,
        y: 3400,
      },
      startId: "26b03910-bb65-46d7-ae87-d7cc9d7adc10",
      end: {
        x: 3380,
        y: 3360,
      },
      endId: "09c11be5-a025-4464-823b-7ed085ea7d86",
      name: "TwoWayHEdge",
      id: "988534be-b413-4f05-9c7c-bc84f78d3dd1",
    },
    {
      start: {
        x: 3380,
        y: 3360,
      },
      startId: "09c11be5-a025-4464-823b-7ed085ea7d86",
      end: {
        x: 3980,
        y: 3420,
      },
      endId: "e50bb6de-c3a4-49c5-9c2d-35bb73b0ffc9",
      name: "TwoWayHEdge",
      id: "9da574f3-ad0a-4021-8e67-9adb4fac9e8c",
    },
    {
      start: {
        x: 4000,
        y: 2880,
      },
      startId: "deecf3a2-f249-4727-a8a5-0bb0fb70de72",
      end: {
        x: 3980,
        y: 3420,
      },
      endId: "e50bb6de-c3a4-49c5-9c2d-35bb73b0ffc9",
      name: "TwoWayVEdge",
      id: "7a7a90a0-d60d-48a2-b5e3-bbaa892bd84c",
    },
    {
      start: {
        x: 4000,
        y: 2880,
      },
      startId: "deecf3a2-f249-4727-a8a5-0bb0fb70de72",
      end: {
        x: 4680,
        y: 2880,
      },
      endId: "4b3cd5f1-9979-4a0c-bc70-2f7c5989f29e",
      name: "TwoWayHEdge",
      id: "bd87d784-b496-489a-b76b-fd02cd0773ca",
    },
    {
      start: {
        x: 4680,
        y: 2880,
      },
      startId: "4b3cd5f1-9979-4a0c-bc70-2f7c5989f29e",
      end: {
        x: 5340,
        y: 2880,
      },
      endId: "d652268c-843b-4906-88e6-27c0aae5afbc",
      name: "TwoWayHEdge",
      id: "1ad4b832-9d97-465a-8609-1eb634ef1577",
    },
    {
      start: {
        x: 4680,
        y: 2880,
      },
      startId: "4b3cd5f1-9979-4a0c-bc70-2f7c5989f29e",
      end: {
        x: 4660,
        y: 3420,
      },
      endId: "4b724f10-d8e3-4cb2-ae9f-b416fecc4b31",
      name: "TwoWayVEdge",
      id: "abbfa66d-6e5a-4e26-80c2-1c6d6ab228ae",
    },
    {
      start: {
        x: 4660,
        y: 3420,
      },
      startId: "4b724f10-d8e3-4cb2-ae9f-b416fecc4b31",
      end: {
        x: 4700,
        y: 3800,
      },
      endId: "45529d6f-7ac7-4f08-91aa-9957e133c879",
      name: "TwoWayVEdge",
      id: "762775da-047c-4849-bcba-0e727fa0b48b",
    },
    {
      start: {
        x: 4700,
        y: 3800,
      },
      startId: "45529d6f-7ac7-4f08-91aa-9957e133c879",
      end: {
        x: 5320,
        y: 3800,
      },
      endId: "a78c29bf-b716-439a-af50-65ee2678e07b",
      name: "TwoWayHEdge",
      id: "ef6cf911-e15a-4d8a-8f8f-385d15c1df7c",
    },
    {
      start: {
        x: 5340,
        y: 2880,
      },
      startId: "d652268c-843b-4906-88e6-27c0aae5afbc",
      end: {
        x: 5320,
        y: 3800,
      },
      endId: "a78c29bf-b716-439a-af50-65ee2678e07b",
      name: "TwoWayVEdge",
      id: "57fb865d-bc2c-4ddf-b67e-4e499943bc0e",
    },
  ],
};
export default northAmericaCaveB2;
