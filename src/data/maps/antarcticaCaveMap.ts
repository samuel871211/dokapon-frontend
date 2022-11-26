import type { GraphJSON } from "global";

const antarcticaCaveMap: GraphJSON = {
  vertices: [
    {
      position: {
        x: -140,
        y: -40,
      },
      name: "BattleField",
      id: "7ed20a52-f6eb-4e00-8f3f-3acb4e08ba49",
      edges: [
        "a7e49763-1287-43a6-b221-253760c3b07a",
        "0b8ce8fd-845b-4d9a-b6d8-ef9ec5fd0686",
      ],
      area: "Africa",
      right: "80bd7230-ff25-4635-99bb-d061baea64ac",
      bottom: "36ed16ab-da98-4323-b565-519e565fc2ea",
    },
    {
      id: "80bd7230-ff25-4635-99bb-d061baea64ac",
      name: "MagicBookField",
      position: {
        x: 420,
        y: -80,
      },
      edges: [
        "a7e49763-1287-43a6-b221-253760c3b07a",
        "fc003f69-c510-43be-9e59-abb66cec28fc",
      ],
      area: "AntarcticaCave",
      left: "7ed20a52-f6eb-4e00-8f3f-3acb4e08ba49",
      right: "d7323103-7077-4316-99a1-9ec678408650",
    },
    {
      id: "d7323103-7077-4316-99a1-9ec678408650",
      name: "CaveField",
      position: {
        x: 1060,
        y: -20,
      },
      edges: ["fc003f69-c510-43be-9e59-abb66cec28fc"],
      area: "AntarcticaCave",
      left: "80bd7230-ff25-4635-99bb-d061baea64ac",
    },
    {
      id: "36ed16ab-da98-4323-b565-519e565fc2ea",
      name: "BattleField",
      position: {
        x: -80,
        y: 440,
      },
      edges: [
        "0b8ce8fd-845b-4d9a-b6d8-ef9ec5fd0686",
        "569e9550-d8b2-463b-9d46-cd20a9cecdeb",
      ],
      area: "AntarcticaCave",
      top: "7ed20a52-f6eb-4e00-8f3f-3acb4e08ba49",
      bottom: "01d676f7-f85d-46ba-9306-60ab7f75f7af",
    },
    {
      id: "01d676f7-f85d-46ba-9306-60ab7f75f7af",
      name: "TreasureField",
      position: {
        x: -140,
        y: 920,
      },
      edges: [
        "569e9550-d8b2-463b-9d46-cd20a9cecdeb",
        "cc0a48ed-ccdf-4ab0-8abe-48cc975c1488",
        "c34fd8c6-1dab-4cab-8adb-31eb9dbff53d",
      ],
      area: "AntarcticaCave",
      top: "36ed16ab-da98-4323-b565-519e565fc2ea",
      bottom: "e8a143f0-5e9b-4133-aff1-14a604ce85df",
      left: "cc933621-3362-4939-aa55-db69b494b62d",
    },
    {
      id: "e8a143f0-5e9b-4133-aff1-14a604ce85df",
      name: "BattleField",
      position: {
        x: -60,
        y: 1380,
      },
      edges: [
        "cc0a48ed-ccdf-4ab0-8abe-48cc975c1488",
        "1f9b46e1-29d7-4e6e-97c0-83bf4a2ee4af",
        "249bdb06-52b7-4c68-b31a-469585ed235d",
      ],
      area: "AntarcticaCave",
      top: "01d676f7-f85d-46ba-9306-60ab7f75f7af",
      left: "2cede1e6-1801-4617-bd80-277c1aaa30b5",
      bottom: "c7fd9829-ef91-405c-bff8-fb06dc8859ef",
    },
    {
      id: "cc933621-3362-4939-aa55-db69b494b62d",
      name: "BattleField",
      position: {
        x: -1220,
        y: 920,
      },
      edges: [
        "c34fd8c6-1dab-4cab-8adb-31eb9dbff53d",
        "b40af585-5a06-4141-9169-2342bea7b1e7",
        "ad33ca88-3bf2-4613-8b82-7b7682a06bc1",
      ],
      area: "AntarcticaCave",
      right: "01d676f7-f85d-46ba-9306-60ab7f75f7af",
      bottom: "9f9fad09-1e6d-41a3-b482-bcecd5471f8c",
      top: "0f1ffc9b-d03e-4bf9-b4f4-deb60594fa9f",
    },
    {
      id: "9f9fad09-1e6d-41a3-b482-bcecd5471f8c",
      name: "TreasureField",
      position: {
        x: -1260,
        y: 1400,
      },
      edges: [
        "b40af585-5a06-4141-9169-2342bea7b1e7",
        "db0bc8cf-d6ac-41df-9dd9-073d5c49b29f",
      ],
      area: "AntarcticaCave",
      top: "cc933621-3362-4939-aa55-db69b494b62d",
      right: "2cede1e6-1801-4617-bd80-277c1aaa30b5",
    },
    {
      id: "2cede1e6-1801-4617-bd80-277c1aaa30b5",
      name: "DamageField",
      position: {
        x: -680,
        y: 1360,
      },
      edges: [
        "db0bc8cf-d6ac-41df-9dd9-073d5c49b29f",
        "1f9b46e1-29d7-4e6e-97c0-83bf4a2ee4af",
      ],
      area: "AntarcticaCave",
      left: "9f9fad09-1e6d-41a3-b482-bcecd5471f8c",
      right: "e8a143f0-5e9b-4133-aff1-14a604ce85df",
    },
    {
      id: "0f1ffc9b-d03e-4bf9-b4f4-deb60594fa9f",
      name: "BattleField",
      position: {
        x: -1260,
        y: 440,
      },
      edges: [
        "ad33ca88-3bf2-4613-8b82-7b7682a06bc1",
        "1035f313-4bc2-4e0b-802a-3f23f6ab5fee",
      ],
      area: "AntarcticaCave",
      bottom: "cc933621-3362-4939-aa55-db69b494b62d",
      top: "edc9940d-12b2-4c9a-b058-f0931f82269d",
    },
    {
      id: "edc9940d-12b2-4c9a-b058-f0931f82269d",
      name: "DamageField",
      position: {
        x: -1180,
        y: -40,
      },
      edges: [
        "1035f313-4bc2-4e0b-802a-3f23f6ab5fee",
        "42421042-fb2d-4807-a10c-f5ced6a85fa1",
      ],
      area: "AntarcticaCave",
      bottom: "0f1ffc9b-d03e-4bf9-b4f4-deb60594fa9f",
      left: "1f1577eb-661e-47e7-bed4-193cf2d8a3e0",
    },
    {
      id: "1f1577eb-661e-47e7-bed4-193cf2d8a3e0",
      name: "DamageField",
      position: {
        x: -2100,
        y: -20,
      },
      edges: [
        "42421042-fb2d-4807-a10c-f5ced6a85fa1",
        "0d7c2f3f-3d49-479e-831f-a1a56eaa6be7",
      ],
      area: "AntarcticaCave",
      right: "edc9940d-12b2-4c9a-b058-f0931f82269d",
      left: "d1a4538e-6e1c-4574-80ff-9ce479ab2f4b",
    },
    {
      id: "d1a4538e-6e1c-4574-80ff-9ce479ab2f4b",
      name: "TreasureField",
      position: {
        x: -3000,
        y: -60,
      },
      edges: [
        "0d7c2f3f-3d49-479e-831f-a1a56eaa6be7",
        "d331d4ee-cb80-4857-8ac1-5450cca5e12b",
      ],
      area: "AntarcticaCave",
      right: "1f1577eb-661e-47e7-bed4-193cf2d8a3e0",
      left: "5876b1ce-05b5-48fb-9ebe-3ae86ed6a8bc",
    },
    {
      id: "5876b1ce-05b5-48fb-9ebe-3ae86ed6a8bc",
      name: "DamageField",
      position: {
        x: -3940,
        y: -40,
      },
      edges: [
        "d331d4ee-cb80-4857-8ac1-5450cca5e12b",
        "2391b2b3-d323-4cfa-bd4d-de80ab08a458",
      ],
      area: "AntarcticaCave",
      right: "d1a4538e-6e1c-4574-80ff-9ce479ab2f4b",
      bottom: "e98fa16e-d853-4eb5-8603-f468282d0a72",
    },
    {
      id: "c7fd9829-ef91-405c-bff8-fb06dc8859ef",
      name: "RedTreasureField",
      position: {
        x: -100,
        y: 1860,
      },
      edges: [
        "249bdb06-52b7-4c68-b31a-469585ed235d",
        "fbc97498-8d0e-4ca0-8385-e99b8c9cacdd",
      ],
      area: "AntarcticaCave",
      top: "e8a143f0-5e9b-4133-aff1-14a604ce85df",
      bottom: "1b8da0b2-c5de-4b93-8df7-1e9f82dba116",
    },
    {
      id: "1b8da0b2-c5de-4b93-8df7-1e9f82dba116",
      name: "BattleField",
      position: {
        x: -20,
        y: 2360,
      },
      edges: [
        "fbc97498-8d0e-4ca0-8385-e99b8c9cacdd",
        "474bff8c-5772-4927-aa00-fbaab063121e",
      ],
      area: "AntarcticaCave",
      top: "c7fd9829-ef91-405c-bff8-fb06dc8859ef",
      left: "9014b475-537d-4e3c-acc9-a039b9a1789a",
    },
    {
      id: "9014b475-537d-4e3c-acc9-a039b9a1789a",
      name: "TreasureField",
      position: {
        x: -540,
        y: 2380,
      },
      edges: [
        "474bff8c-5772-4927-aa00-fbaab063121e",
        "7dcdfc74-3ed1-4bda-8de6-1ace144cd783",
      ],
      area: "AntarcticaCave",
      right: "1b8da0b2-c5de-4b93-8df7-1e9f82dba116",
      bottom: "98287c94-2082-4161-ac74-7a1751de4339",
    },
    {
      id: "98287c94-2082-4161-ac74-7a1751de4339",
      name: "BattleField",
      position: {
        x: -580,
        y: 2840,
      },
      edges: [
        "7dcdfc74-3ed1-4bda-8de6-1ace144cd783",
        "1f4d059e-9277-4814-94b4-dab3d248e0cf",
      ],
      area: "AntarcticaCave",
      top: "9014b475-537d-4e3c-acc9-a039b9a1789a",
      bottom: "7654c33d-ccfc-4562-9404-10fbe3dbad05",
    },
    {
      id: "7654c33d-ccfc-4562-9404-10fbe3dbad05",
      name: "BattleField",
      position: {
        x: -500,
        y: 3320,
      },
      edges: [
        "1f4d059e-9277-4814-94b4-dab3d248e0cf",
        "4d658879-9a19-4bbf-8113-ad90e2c560c3",
        "3a777ea6-fe8a-49d5-9aff-312834cf28f1",
      ],
      area: "AntarcticaCave",
      top: "98287c94-2082-4161-ac74-7a1751de4339",
      right: "948136da-60d5-45a7-a81a-96c10f4f4d00",
      left: "d0a4bd79-c42a-4048-a59c-7cbf83d77f02",
    },
    {
      id: "948136da-60d5-45a7-a81a-96c10f4f4d00",
      name: "MagicBookField",
      position: {
        x: 60,
        y: 3340,
      },
      edges: [
        "4d658879-9a19-4bbf-8113-ad90e2c560c3",
        "644908c6-e443-420e-8c0d-d5074685f5a0",
      ],
      area: "AntarcticaCave",
      left: "7654c33d-ccfc-4562-9404-10fbe3dbad05",
      bottom: "df44a768-e658-47b0-a063-80e7d0b2bd3f",
    },
    {
      id: "df44a768-e658-47b0-a063-80e7d0b2bd3f",
      name: "DamageField",
      position: {
        x: 120,
        y: 3840,
      },
      edges: [
        "644908c6-e443-420e-8c0d-d5074685f5a0",
        "99084f94-0580-47e7-a532-d5657169e22d",
      ],
      area: "AntarcticaCave",
      top: "948136da-60d5-45a7-a81a-96c10f4f4d00",
      bottom: "ca77f159-97a2-4112-8d10-319f32273b8f",
    },
    {
      id: "ca77f159-97a2-4112-8d10-319f32273b8f",
      name: "TreasureField",
      position: {
        x: 60,
        y: 4340,
      },
      edges: [
        "99084f94-0580-47e7-a532-d5657169e22d",
        "3c79c24f-3195-43ea-bc62-bf1a50d21718",
      ],
      area: "AntarcticaCave",
      top: "df44a768-e658-47b0-a063-80e7d0b2bd3f",
      left: "6dc6c5a3-6a16-4122-8e4f-25efeeb8d0f4",
    },
    {
      id: "6dc6c5a3-6a16-4122-8e4f-25efeeb8d0f4",
      name: "RedTreasureField",
      position: {
        x: -600,
        y: 4360,
      },
      edges: [
        "3c79c24f-3195-43ea-bc62-bf1a50d21718",
        "6813954f-bf99-4e30-bdff-1887d1deff9a",
      ],
      area: "AntarcticaCave",
      right: "ca77f159-97a2-4112-8d10-319f32273b8f",
      bottom: "ead143bd-95c9-4d10-b981-4b175a62e070",
    },
    {
      id: "ead143bd-95c9-4d10-b981-4b175a62e070",
      name: "DamageField",
      position: {
        x: -620,
        y: 4840,
      },
      edges: [
        "6813954f-bf99-4e30-bdff-1887d1deff9a",
        "df01bf7e-5ea1-4fff-a3d1-0e9c961b3149",
      ],
      area: "AntarcticaCave",
      top: "6dc6c5a3-6a16-4122-8e4f-25efeeb8d0f4",
      left: "10c807f5-1452-446c-9f1d-95562395180b",
    },
    {
      id: "10c807f5-1452-446c-9f1d-95562395180b",
      name: "TreasureField",
      position: {
        x: -1200,
        y: 4900,
      },
      edges: [
        "df01bf7e-5ea1-4fff-a3d1-0e9c961b3149",
        "d7971151-875d-451a-b788-e5d94cbb9c6f",
      ],
      area: "AntarcticaCave",
      right: "ead143bd-95c9-4d10-b981-4b175a62e070",
      left: "bbd829cc-f4a9-40a0-9aad-6171c2554ab9",
    },
    {
      id: "bbd829cc-f4a9-40a0-9aad-6171c2554ab9",
      name: "RedTreasureField",
      position: {
        x: -1760,
        y: 4840,
      },
      edges: [
        "d7971151-875d-451a-b788-e5d94cbb9c6f",
        "105b0384-2212-4d90-9371-c4ab5cd4ff02",
      ],
      area: "AntarcticaCave",
      right: "10c807f5-1452-446c-9f1d-95562395180b",
      left: "9171d2e9-70e9-47d6-893d-52dcc0dc7faf",
    },
    {
      id: "9171d2e9-70e9-47d6-893d-52dcc0dc7faf",
      name: "BattleField",
      position: {
        x: -2320,
        y: 4880,
      },
      edges: [
        "105b0384-2212-4d90-9371-c4ab5cd4ff02",
        "d72e528b-c96c-45e0-b63d-97ff1991adba",
        "2f82f3b4-c10e-4257-9feb-3023e20c07ca",
      ],
      area: "AntarcticaCave",
      right: "bbd829cc-f4a9-40a0-9aad-6171c2554ab9",
      top: "bf9c8237-0d44-48bb-9d28-ea33a45384c2",
      left: "d2fc3bcc-8966-4d08-a9c6-981ca58379c9",
    },
    {
      id: "bf9c8237-0d44-48bb-9d28-ea33a45384c2",
      name: "CaveField",
      position: {
        x: -2340,
        y: 4400,
      },
      edges: ["d72e528b-c96c-45e0-b63d-97ff1991adba"],
      area: "AntarcticaCave",
      bottom: "9171d2e9-70e9-47d6-893d-52dcc0dc7faf",
    },
    {
      id: "d2fc3bcc-8966-4d08-a9c6-981ca58379c9",
      name: "BattleField",
      position: {
        x: -2960,
        y: 4840,
      },
      edges: [
        "2f82f3b4-c10e-4257-9feb-3023e20c07ca",
        "2b85c8aa-1cd3-46b7-8bb0-dc2f47d92c24",
      ],
      area: "AntarcticaCave",
      right: "9171d2e9-70e9-47d6-893d-52dcc0dc7faf",
      left: "8df3e740-9958-4334-b219-b847593ada85",
    },
    {
      id: "8df3e740-9958-4334-b219-b847593ada85",
      name: "BattleField",
      position: {
        x: -3520,
        y: 4880,
      },
      edges: [
        "2b85c8aa-1cd3-46b7-8bb0-dc2f47d92c24",
        "8b8ed064-f3dd-4cee-bd59-357a3d5c3d07",
      ],
      area: "AntarcticaCave",
      right: "d2fc3bcc-8966-4d08-a9c6-981ca58379c9",
      top: "dfdad6e9-7745-42dd-849d-09c1ecbc2b4b",
    },
    {
      id: "dfdad6e9-7745-42dd-849d-09c1ecbc2b4b",
      name: "TreasureField",
      position: {
        x: -3560,
        y: 4360,
      },
      edges: [
        "8b8ed064-f3dd-4cee-bd59-357a3d5c3d07",
        "18292434-ed88-4ac3-8eb9-7ec304bfaf8a",
      ],
      area: "AntarcticaCave",
      bottom: "8df3e740-9958-4334-b219-b847593ada85",
      top: "3af414a5-7a11-4699-bdc9-9b4573853011",
    },
    {
      id: "e98fa16e-d853-4eb5-8603-f468282d0a72",
      name: "BattleField",
      position: {
        x: -3980,
        y: 440,
      },
      edges: [
        "2391b2b3-d323-4cfa-bd4d-de80ab08a458",
        "64d8670f-8ff3-4fef-9c5c-6e7e8065b7f6",
      ],
      area: "AntarcticaCave",
      top: "5876b1ce-05b5-48fb-9ebe-3ae86ed6a8bc",
      bottom: "437d1c63-f9dc-4bf8-b875-fd50df84b945",
    },
    {
      id: "437d1c63-f9dc-4bf8-b875-fd50df84b945",
      name: "BattleField",
      position: {
        x: -3920,
        y: 920,
      },
      edges: [
        "64d8670f-8ff3-4fef-9c5c-6e7e8065b7f6",
        "a60574fe-0c37-49b7-ba11-9fb123d82e57",
      ],
      area: "AntarcticaCave",
      top: "e98fa16e-d853-4eb5-8603-f468282d0a72",
      bottom: "c144f1e3-d2e3-4a18-a04c-27ef8d3c6816",
    },
    {
      id: "c144f1e3-d2e3-4a18-a04c-27ef8d3c6816",
      name: "TreasureField",
      position: {
        x: -3980,
        y: 1400,
      },
      edges: [
        "a60574fe-0c37-49b7-ba11-9fb123d82e57",
        "293aa3fd-7f0f-459d-83c8-d4497c22fc37",
        "7ace322f-1ee7-4c80-94d7-aeeef4d0d9d1",
        "8182804e-94b8-4edc-9513-d7eee86954e5",
      ],
      area: "AntarcticaCave",
      top: "437d1c63-f9dc-4bf8-b875-fd50df84b945",
      right: "09a6115a-489e-4a27-a566-ffcea58934aa",
      left: "ca65154a-8b76-4ca8-979a-d6fd907e60dc",
      bottom: "18979f18-8c13-4230-8b0d-000ff417b25f",
    },
    {
      id: "09a6115a-489e-4a27-a566-ffcea58934aa",
      name: "BattleField",
      position: {
        x: -3400,
        y: 1420,
      },
      edges: [
        "293aa3fd-7f0f-459d-83c8-d4497c22fc37",
        "00d45112-6340-4b78-b599-a7eda149f01e",
      ],
      area: "AntarcticaCave",
      left: "c144f1e3-d2e3-4a18-a04c-27ef8d3c6816",
      right: "b7fcc1fc-31ee-4868-ad1a-106b0607ce4a",
    },
    {
      id: "b7fcc1fc-31ee-4868-ad1a-106b0607ce4a",
      name: "MagicStoreField",
      position: {
        x: -2760,
        y: 1400,
      },
      edges: ["00d45112-6340-4b78-b599-a7eda149f01e"],
      area: "AntarcticaCave",
      left: "09a6115a-489e-4a27-a566-ffcea58934aa",
    },
    {
      id: "ca65154a-8b76-4ca8-979a-d6fd907e60dc",
      name: "BattleField",
      position: {
        x: -4600,
        y: 1420,
      },
      edges: [
        "7ace322f-1ee7-4c80-94d7-aeeef4d0d9d1",
        "4d0bbd89-b7ba-41fa-944b-d136d851a9c9",
      ],
      area: "AntarcticaCave",
      right: "c144f1e3-d2e3-4a18-a04c-27ef8d3c6816",
      bottom: "7d2ffa21-5805-4cc7-8ad7-16fc06c0aaa7",
    },
    {
      id: "18979f18-8c13-4230-8b0d-000ff417b25f",
      name: "MagicBookField",
      position: {
        x: -3920,
        y: 1860,
      },
      edges: [
        "8182804e-94b8-4edc-9513-d7eee86954e5",
        "90b3437c-cc1d-44fa-813d-9f9e75212fac",
      ],
      area: "AntarcticaCave",
      top: "c144f1e3-d2e3-4a18-a04c-27ef8d3c6816",
      bottom: "8d1da453-af47-4bb1-8679-4d5edef80312",
    },
    {
      id: "8d1da453-af47-4bb1-8679-4d5edef80312",
      name: "BattleField",
      position: {
        x: -3960,
        y: 2320,
      },
      edges: [
        "90b3437c-cc1d-44fa-813d-9f9e75212fac",
        "927db115-38ea-43d2-8b38-7bbe309a54d5",
      ],
      area: "AntarcticaCave",
      top: "18979f18-8c13-4230-8b0d-000ff417b25f",
      left: "7d2ffa21-5805-4cc7-8ad7-16fc06c0aaa7",
    },
    {
      id: "7d2ffa21-5805-4cc7-8ad7-16fc06c0aaa7",
      name: "TreasureField",
      position: {
        x: -4640,
        y: 2360,
      },
      edges: [
        "927db115-38ea-43d2-8b38-7bbe309a54d5",
        "4d0bbd89-b7ba-41fa-944b-d136d851a9c9",
        "63c28102-670b-41fa-bffc-140d6714d571",
      ],
      area: "AntarcticaCave",
      right: "8d1da453-af47-4bb1-8679-4d5edef80312",
      top: "ca65154a-8b76-4ca8-979a-d6fd907e60dc",
      bottom: "4ac2ca7b-351b-4c08-a710-6bde6da9bf77",
    },
    {
      id: "4ac2ca7b-351b-4c08-a710-6bde6da9bf77",
      name: "BattleField",
      position: {
        x: -4740,
        y: 2780,
      },
      edges: [
        "63c28102-670b-41fa-bffc-140d6714d571",
        "fa801e16-8b02-45d2-9ecf-f3865413b1fc",
        "392744a8-3940-49e6-8f10-70eee6f42ba5",
        "5ec8e749-e8f1-4604-9cdc-84cc56f2af98",
      ],
      area: "AntarcticaCave",
      top: "7d2ffa21-5805-4cc7-8ad7-16fc06c0aaa7",
      right: "18a4eeb2-10ac-4c95-9cd9-932620ba615e",
      left: "7a26bea7-2721-4229-baa7-a2c8a77cff35",
      bottom: "80a42441-2e9c-491f-9fa1-ac82a6b38f23",
    },
    {
      id: "18a4eeb2-10ac-4c95-9cd9-932620ba615e",
      name: "DamageField",
      position: {
        x: -4300,
        y: 2780,
      },
      edges: [
        "fa801e16-8b02-45d2-9ecf-f3865413b1fc",
        "6f99ffab-ebaf-4172-8240-f8b6f3db7f82",
      ],
      area: "AntarcticaCave",
      left: "4ac2ca7b-351b-4c08-a710-6bde6da9bf77",
      bottom: "8154aea8-5305-472b-81a2-e2cad268327b",
    },
    {
      id: "7a26bea7-2721-4229-baa7-a2c8a77cff35",
      name: "DamageField",
      position: {
        x: -5220,
        y: 2800,
      },
      edges: [
        "392744a8-3940-49e6-8f10-70eee6f42ba5",
        "aff8363f-b9fa-4ec4-9d33-585f09560f91",
      ],
      area: "AntarcticaCave",
      right: "4ac2ca7b-351b-4c08-a710-6bde6da9bf77",
      top: "95edb9ab-d42e-4b4b-9718-f7f51e416cac",
    },
    {
      id: "95edb9ab-d42e-4b4b-9718-f7f51e416cac",
      name: "TreasureField",
      position: {
        x: -5280,
        y: 2260,
      },
      edges: [
        "aff8363f-b9fa-4ec4-9d33-585f09560f91",
        "10fb59d6-3875-4d41-a2cb-fdbd7eea6317",
      ],
      area: "AntarcticaCave",
      bottom: "7a26bea7-2721-4229-baa7-a2c8a77cff35",
      top: "3482c43f-1125-4d8f-a0fa-dfd8fd6a11a5",
    },
    {
      id: "80a42441-2e9c-491f-9fa1-ac82a6b38f23",
      name: "BattleField",
      position: {
        x: -4780,
        y: 3260,
      },
      edges: [
        "5ec8e749-e8f1-4604-9cdc-84cc56f2af98",
        "a4c03f28-560f-48b5-aa4a-b3626c9bf6b9",
        "f734df30-ee0a-4f0b-bd74-13e3c3e67a52",
      ],
      area: "AntarcticaCave",
      top: "4ac2ca7b-351b-4c08-a710-6bde6da9bf77",
      bottom: "36d01c04-2041-4fd5-b4e5-eaea9193b08f",
      left: "3e7c80c5-ac02-4f26-9633-c1bc791b5d1a",
    },
    {
      id: "36d01c04-2041-4fd5-b4e5-eaea9193b08f",
      name: "TreasureField",
      position: {
        x: -4720,
        y: 3720,
      },
      edges: [
        "a4c03f28-560f-48b5-aa4a-b3626c9bf6b9",
        "a5193a83-0ba4-429a-8380-04ac366343a0",
      ],
      area: "AntarcticaCave",
      top: "80a42441-2e9c-491f-9fa1-ac82a6b38f23",
      bottom: "0943d19e-3ce1-4fde-8346-7b6f45a52254",
    },
    {
      id: "0943d19e-3ce1-4fde-8346-7b6f45a52254",
      name: "MagicBookField",
      position: {
        x: -4760,
        y: 4200,
      },
      edges: [
        "a5193a83-0ba4-429a-8380-04ac366343a0",
        "3e51504c-2e10-4212-adf6-e5689f05afc3",
      ],
      area: "AntarcticaCave",
      top: "36d01c04-2041-4fd5-b4e5-eaea9193b08f",
      left: "5cd3ec91-e581-4d8c-a4a9-48e112632ea6",
    },
    {
      id: "5cd3ec91-e581-4d8c-a4a9-48e112632ea6",
      name: "BattleField",
      position: {
        x: -5320,
        y: 4180,
      },
      edges: [
        "3e51504c-2e10-4212-adf6-e5689f05afc3",
        "45dd75eb-0115-4b47-8094-43b119eb212b",
        "6c6e7f1e-9f84-4f94-ae73-8e9cfcf8a84f",
      ],
      area: "AntarcticaCave",
      right: "0943d19e-3ce1-4fde-8346-7b6f45a52254",
      top: "3e7c80c5-ac02-4f26-9633-c1bc791b5d1a",
      left: "8f843a9c-f454-4753-a3a0-de6248786781",
    },
    {
      id: "3e7c80c5-ac02-4f26-9633-c1bc791b5d1a",
      name: "BattleField",
      position: {
        x: -5360,
        y: 3320,
      },
      edges: [
        "45dd75eb-0115-4b47-8094-43b119eb212b",
        "f734df30-ee0a-4f0b-bd74-13e3c3e67a52",
      ],
      area: "AntarcticaCave",
      bottom: "5cd3ec91-e581-4d8c-a4a9-48e112632ea6",
      right: "80a42441-2e9c-491f-9fa1-ac82a6b38f23",
    },
    {
      id: "8f843a9c-f454-4753-a3a0-de6248786781",
      name: "DamageField",
      position: {
        x: -5840,
        y: 4220,
      },
      edges: [
        "6c6e7f1e-9f84-4f94-ae73-8e9cfcf8a84f",
        "76a726d3-f447-4ce7-8746-3909b776fc16",
      ],
      area: "AntarcticaCave",
      right: "5cd3ec91-e581-4d8c-a4a9-48e112632ea6",
      left: "7886972f-cedd-4e33-aa84-15613795d7fb",
    },
    {
      id: "7886972f-cedd-4e33-aa84-15613795d7fb",
      name: "CaveField",
      position: {
        x: -6420,
        y: 4200,
      },
      edges: ["76a726d3-f447-4ce7-8746-3909b776fc16"],
      area: "AntarcticaCave",
      right: "8f843a9c-f454-4753-a3a0-de6248786781",
    },
    {
      id: "8154aea8-5305-472b-81a2-e2cad268327b",
      name: "BattleField",
      position: {
        x: -4280,
        y: 3260,
      },
      edges: [
        "6f99ffab-ebaf-4172-8240-f8b6f3db7f82",
        "babc470e-4ac1-4656-9f1a-8d326c3b62f0",
      ],
      area: "AntarcticaCave",
      top: "18a4eeb2-10ac-4c95-9cd9-932620ba615e",
      right: "37a11700-b82e-4a59-a01b-ecbd9dd75240",
    },
    {
      id: "37a11700-b82e-4a59-a01b-ecbd9dd75240",
      name: "MagicBookField",
      position: {
        x: -3900,
        y: 3240,
      },
      edges: [
        "babc470e-4ac1-4656-9f1a-8d326c3b62f0",
        "5d888e56-8681-46fe-9b4a-d42ea4a40657",
      ],
      area: "AntarcticaCave",
      left: "8154aea8-5305-472b-81a2-e2cad268327b",
      right: "7bcb1ffd-db8a-4b8e-8fca-2ab44217c137",
    },
    {
      id: "7bcb1ffd-db8a-4b8e-8fca-2ab44217c137",
      name: "TreasureField",
      position: {
        x: -3520,
        y: 3280,
      },
      edges: [
        "5d888e56-8681-46fe-9b4a-d42ea4a40657",
        "a0077e3b-b90d-455c-814a-f1287b08b5f2",
        "f317fd13-77fa-4aae-8b18-e405eb050c01",
      ],
      area: "AntarcticaCave",
      left: "37a11700-b82e-4a59-a01b-ecbd9dd75240",
      bottom: "3af414a5-7a11-4699-bdc9-9b4573853011",
      right: "b8a7a256-e1ed-4aff-84db-d3a306b96965",
    },
    {
      id: "3af414a5-7a11-4699-bdc9-9b4573853011",
      name: "BattleField",
      position: {
        x: -3440,
        y: 3800,
      },
      edges: [
        "a0077e3b-b90d-455c-814a-f1287b08b5f2",
        "18292434-ed88-4ac3-8eb9-7ec304bfaf8a",
      ],
      area: "AntarcticaCave",
      top: "7bcb1ffd-db8a-4b8e-8fca-2ab44217c137",
      bottom: "dfdad6e9-7745-42dd-849d-09c1ecbc2b4b",
    },
    {
      id: "d0a4bd79-c42a-4048-a59c-7cbf83d77f02",
      name: "TreasureField",
      position: {
        x: -1160,
        y: 3280,
      },
      edges: [
        "3a777ea6-fe8a-49d5-9aff-312834cf28f1",
        "2a544e3e-5a9c-4680-b376-0980152b76d1",
      ],
      area: "AntarcticaCave",
      right: "7654c33d-ccfc-4562-9404-10fbe3dbad05",
      left: "fa099f47-4c4a-463e-9530-e9afb7b16f60",
    },
    {
      id: "fa099f47-4c4a-463e-9530-e9afb7b16f60",
      name: "BattleField",
      position: {
        x: -1760,
        y: 3300,
      },
      edges: [
        "2a544e3e-5a9c-4680-b376-0980152b76d1",
        "011cfc85-32e5-4f53-bca7-c53fc8d4c092",
      ],
      area: "AntarcticaCave",
      right: "d0a4bd79-c42a-4048-a59c-7cbf83d77f02",
      left: "de4778c8-555f-46a0-a3f0-a2ad86f22a87",
    },
    {
      id: "de4778c8-555f-46a0-a3f0-a2ad86f22a87",
      name: "RedTreasureField",
      position: {
        x: -2320,
        y: 3300,
      },
      edges: [
        "011cfc85-32e5-4f53-bca7-c53fc8d4c092",
        "fbebd00e-bc07-4448-a0fb-33bbbc71b17a",
      ],
      area: "AntarcticaCave",
      right: "fa099f47-4c4a-463e-9530-e9afb7b16f60",
      left: "b8a7a256-e1ed-4aff-84db-d3a306b96965",
    },
    {
      id: "b8a7a256-e1ed-4aff-84db-d3a306b96965",
      name: "BattleField",
      position: {
        x: -2920,
        y: 3300,
      },
      edges: [
        "fbebd00e-bc07-4448-a0fb-33bbbc71b17a",
        "f317fd13-77fa-4aae-8b18-e405eb050c01",
      ],
      area: "AntarcticaCave",
      right: "de4778c8-555f-46a0-a3f0-a2ad86f22a87",
      left: "7bcb1ffd-db8a-4b8e-8fca-2ab44217c137",
    },
    {
      id: "3482c43f-1125-4d8f-a0fa-dfd8fd6a11a5",
      name: "BattleField",
      position: {
        x: -5320,
        y: 1660,
      },
      edges: [
        "10fb59d6-3875-4d41-a2cb-fdbd7eea6317",
        "40a9a274-6ed3-4660-949c-58144920189b",
      ],
      area: "AntarcticaCave",
      bottom: "95edb9ab-d42e-4b4b-9718-f7f51e416cac",
      top: "821ba520-b58f-40fb-bdd4-7f9a76a4c431",
    },
    {
      id: "821ba520-b58f-40fb-bdd4-7f9a76a4c431",
      name: "BattleField",
      position: {
        x: -5340,
        y: 1020,
      },
      edges: [
        "40a9a274-6ed3-4660-949c-58144920189b",
        "a122e034-0f57-437a-9228-669444d63c86",
      ],
      area: "AntarcticaCave",
      bottom: "3482c43f-1125-4d8f-a0fa-dfd8fd6a11a5",
      top: "3982c290-a308-4f1b-aabb-02d36428f9b4",
    },
    {
      id: "3982c290-a308-4f1b-aabb-02d36428f9b4",
      name: "CaveField",
      position: {
        x: -5240,
        y: 440,
      },
      edges: ["a122e034-0f57-437a-9228-669444d63c86"],
      area: "AntarcticaCave",
      bottom: "821ba520-b58f-40fb-bdd4-7f9a76a4c431",
    },
  ],
  edges: [
    {
      start: {
        x: -140,
        y: -40,
      },
      startId: "7ed20a52-f6eb-4e00-8f3f-3acb4e08ba49",
      end: {
        x: 420,
        y: -80,
      },
      endId: "80bd7230-ff25-4635-99bb-d061baea64ac",
      name: "TwoWayHEdge",
      id: "a7e49763-1287-43a6-b221-253760c3b07a",
    },
    {
      start: {
        x: 420,
        y: -80,
      },
      startId: "80bd7230-ff25-4635-99bb-d061baea64ac",
      end: {
        x: 1060,
        y: -20,
      },
      endId: "d7323103-7077-4316-99a1-9ec678408650",
      name: "TwoWayHEdge",
      id: "fc003f69-c510-43be-9e59-abb66cec28fc",
    },
    {
      start: {
        x: -140,
        y: -40,
      },
      startId: "7ed20a52-f6eb-4e00-8f3f-3acb4e08ba49",
      end: {
        x: -80,
        y: 440,
      },
      endId: "36ed16ab-da98-4323-b565-519e565fc2ea",
      name: "TwoWayVEdge",
      id: "0b8ce8fd-845b-4d9a-b6d8-ef9ec5fd0686",
    },
    {
      start: {
        x: -80,
        y: 440,
      },
      startId: "36ed16ab-da98-4323-b565-519e565fc2ea",
      end: {
        x: -140,
        y: 920,
      },
      endId: "01d676f7-f85d-46ba-9306-60ab7f75f7af",
      name: "TwoWayVEdge",
      id: "569e9550-d8b2-463b-9d46-cd20a9cecdeb",
    },
    {
      start: {
        x: -140,
        y: 920,
      },
      startId: "01d676f7-f85d-46ba-9306-60ab7f75f7af",
      end: {
        x: -60,
        y: 1380,
      },
      endId: "e8a143f0-5e9b-4133-aff1-14a604ce85df",
      name: "TwoWayVEdge",
      id: "cc0a48ed-ccdf-4ab0-8abe-48cc975c1488",
    },
    {
      start: {
        x: -140,
        y: 920,
      },
      startId: "01d676f7-f85d-46ba-9306-60ab7f75f7af",
      end: {
        x: -1220,
        y: 920,
      },
      endId: "cc933621-3362-4939-aa55-db69b494b62d",
      name: "TwoWayHEdge",
      id: "c34fd8c6-1dab-4cab-8adb-31eb9dbff53d",
    },
    {
      start: {
        x: -1220,
        y: 920,
      },
      startId: "cc933621-3362-4939-aa55-db69b494b62d",
      end: {
        x: -1260,
        y: 1400,
      },
      endId: "9f9fad09-1e6d-41a3-b482-bcecd5471f8c",
      name: "TwoWayVEdge",
      id: "b40af585-5a06-4141-9169-2342bea7b1e7",
    },
    {
      start: {
        x: -1260,
        y: 1400,
      },
      startId: "9f9fad09-1e6d-41a3-b482-bcecd5471f8c",
      end: {
        x: -680,
        y: 1360,
      },
      endId: "2cede1e6-1801-4617-bd80-277c1aaa30b5",
      name: "TwoWayHEdge",
      id: "db0bc8cf-d6ac-41df-9dd9-073d5c49b29f",
    },
    {
      start: {
        x: -680,
        y: 1360,
      },
      startId: "2cede1e6-1801-4617-bd80-277c1aaa30b5",
      end: {
        x: -60,
        y: 1380,
      },
      endId: "e8a143f0-5e9b-4133-aff1-14a604ce85df",
      name: "TwoWayHEdge",
      id: "1f9b46e1-29d7-4e6e-97c0-83bf4a2ee4af",
    },
    {
      start: {
        x: -1220,
        y: 920,
      },
      startId: "cc933621-3362-4939-aa55-db69b494b62d",
      end: {
        x: -1260,
        y: 440,
      },
      endId: "0f1ffc9b-d03e-4bf9-b4f4-deb60594fa9f",
      name: "TwoWayVEdge",
      id: "ad33ca88-3bf2-4613-8b82-7b7682a06bc1",
    },
    {
      start: {
        x: -1260,
        y: 440,
      },
      startId: "0f1ffc9b-d03e-4bf9-b4f4-deb60594fa9f",
      end: {
        x: -1180,
        y: -40,
      },
      endId: "edc9940d-12b2-4c9a-b058-f0931f82269d",
      name: "TwoWayVEdge",
      id: "1035f313-4bc2-4e0b-802a-3f23f6ab5fee",
    },
    {
      start: {
        x: -1180,
        y: -40,
      },
      startId: "edc9940d-12b2-4c9a-b058-f0931f82269d",
      end: {
        x: -2100,
        y: -20,
      },
      endId: "1f1577eb-661e-47e7-bed4-193cf2d8a3e0",
      name: "TwoWayHEdge",
      id: "42421042-fb2d-4807-a10c-f5ced6a85fa1",
    },
    {
      start: {
        x: -2100,
        y: -20,
      },
      startId: "1f1577eb-661e-47e7-bed4-193cf2d8a3e0",
      end: {
        x: -3000,
        y: -60,
      },
      endId: "d1a4538e-6e1c-4574-80ff-9ce479ab2f4b",
      name: "TwoWayHEdge",
      id: "0d7c2f3f-3d49-479e-831f-a1a56eaa6be7",
    },
    {
      start: {
        x: -3000,
        y: -60,
      },
      startId: "d1a4538e-6e1c-4574-80ff-9ce479ab2f4b",
      end: {
        x: -3940,
        y: -40,
      },
      endId: "5876b1ce-05b5-48fb-9ebe-3ae86ed6a8bc",
      name: "TwoWayHEdge",
      id: "d331d4ee-cb80-4857-8ac1-5450cca5e12b",
    },
    {
      start: {
        x: -60,
        y: 1380,
      },
      startId: "e8a143f0-5e9b-4133-aff1-14a604ce85df",
      end: {
        x: -100,
        y: 1860,
      },
      endId: "c7fd9829-ef91-405c-bff8-fb06dc8859ef",
      name: "TwoWayVEdge",
      id: "249bdb06-52b7-4c68-b31a-469585ed235d",
    },
    {
      start: {
        x: -100,
        y: 1860,
      },
      startId: "c7fd9829-ef91-405c-bff8-fb06dc8859ef",
      end: {
        x: -20,
        y: 2360,
      },
      endId: "1b8da0b2-c5de-4b93-8df7-1e9f82dba116",
      name: "TwoWayVEdge",
      id: "fbc97498-8d0e-4ca0-8385-e99b8c9cacdd",
    },
    {
      start: {
        x: -20,
        y: 2360,
      },
      startId: "1b8da0b2-c5de-4b93-8df7-1e9f82dba116",
      end: {
        x: -540,
        y: 2380,
      },
      endId: "9014b475-537d-4e3c-acc9-a039b9a1789a",
      name: "TwoWayHEdge",
      id: "474bff8c-5772-4927-aa00-fbaab063121e",
    },
    {
      start: {
        x: -540,
        y: 2380,
      },
      startId: "9014b475-537d-4e3c-acc9-a039b9a1789a",
      end: {
        x: -580,
        y: 2840,
      },
      endId: "98287c94-2082-4161-ac74-7a1751de4339",
      name: "TwoWayVEdge",
      id: "7dcdfc74-3ed1-4bda-8de6-1ace144cd783",
    },
    {
      start: {
        x: -580,
        y: 2840,
      },
      startId: "98287c94-2082-4161-ac74-7a1751de4339",
      end: {
        x: -500,
        y: 3320,
      },
      endId: "7654c33d-ccfc-4562-9404-10fbe3dbad05",
      name: "TwoWayVEdge",
      id: "1f4d059e-9277-4814-94b4-dab3d248e0cf",
    },
    {
      start: {
        x: -500,
        y: 3320,
      },
      startId: "7654c33d-ccfc-4562-9404-10fbe3dbad05",
      end: {
        x: 60,
        y: 3340,
      },
      endId: "948136da-60d5-45a7-a81a-96c10f4f4d00",
      name: "TwoWayHEdge",
      id: "4d658879-9a19-4bbf-8113-ad90e2c560c3",
    },
    {
      start: {
        x: 60,
        y: 3340,
      },
      startId: "948136da-60d5-45a7-a81a-96c10f4f4d00",
      end: {
        x: 120,
        y: 3840,
      },
      endId: "df44a768-e658-47b0-a063-80e7d0b2bd3f",
      name: "TwoWayVEdge",
      id: "644908c6-e443-420e-8c0d-d5074685f5a0",
    },
    {
      start: {
        x: 120,
        y: 3840,
      },
      startId: "df44a768-e658-47b0-a063-80e7d0b2bd3f",
      end: {
        x: 60,
        y: 4340,
      },
      endId: "ca77f159-97a2-4112-8d10-319f32273b8f",
      name: "TwoWayVEdge",
      id: "99084f94-0580-47e7-a532-d5657169e22d",
    },
    {
      start: {
        x: 60,
        y: 4340,
      },
      startId: "ca77f159-97a2-4112-8d10-319f32273b8f",
      end: {
        x: -600,
        y: 4360,
      },
      endId: "6dc6c5a3-6a16-4122-8e4f-25efeeb8d0f4",
      name: "TwoWayHEdge",
      id: "3c79c24f-3195-43ea-bc62-bf1a50d21718",
    },
    {
      start: {
        x: -600,
        y: 4360,
      },
      startId: "6dc6c5a3-6a16-4122-8e4f-25efeeb8d0f4",
      end: {
        x: -620,
        y: 4840,
      },
      endId: "ead143bd-95c9-4d10-b981-4b175a62e070",
      name: "TwoWayVEdge",
      id: "6813954f-bf99-4e30-bdff-1887d1deff9a",
    },
    {
      start: {
        x: -620,
        y: 4840,
      },
      startId: "ead143bd-95c9-4d10-b981-4b175a62e070",
      end: {
        x: -1200,
        y: 4900,
      },
      endId: "10c807f5-1452-446c-9f1d-95562395180b",
      name: "TwoWayHEdge",
      id: "df01bf7e-5ea1-4fff-a3d1-0e9c961b3149",
    },
    {
      start: {
        x: -1200,
        y: 4900,
      },
      startId: "10c807f5-1452-446c-9f1d-95562395180b",
      end: {
        x: -1760,
        y: 4840,
      },
      endId: "bbd829cc-f4a9-40a0-9aad-6171c2554ab9",
      name: "TwoWayHEdge",
      id: "d7971151-875d-451a-b788-e5d94cbb9c6f",
    },
    {
      start: {
        x: -1760,
        y: 4840,
      },
      startId: "bbd829cc-f4a9-40a0-9aad-6171c2554ab9",
      end: {
        x: -2320,
        y: 4880,
      },
      endId: "9171d2e9-70e9-47d6-893d-52dcc0dc7faf",
      name: "TwoWayHEdge",
      id: "105b0384-2212-4d90-9371-c4ab5cd4ff02",
    },
    {
      start: {
        x: -2320,
        y: 4880,
      },
      startId: "9171d2e9-70e9-47d6-893d-52dcc0dc7faf",
      end: {
        x: -2340,
        y: 4400,
      },
      endId: "bf9c8237-0d44-48bb-9d28-ea33a45384c2",
      name: "TwoWayVEdge",
      id: "d72e528b-c96c-45e0-b63d-97ff1991adba",
    },
    {
      start: {
        x: -2320,
        y: 4880,
      },
      startId: "9171d2e9-70e9-47d6-893d-52dcc0dc7faf",
      end: {
        x: -2960,
        y: 4840,
      },
      endId: "d2fc3bcc-8966-4d08-a9c6-981ca58379c9",
      name: "TwoWayHEdge",
      id: "2f82f3b4-c10e-4257-9feb-3023e20c07ca",
    },
    {
      start: {
        x: -2960,
        y: 4840,
      },
      startId: "d2fc3bcc-8966-4d08-a9c6-981ca58379c9",
      end: {
        x: -3520,
        y: 4880,
      },
      endId: "8df3e740-9958-4334-b219-b847593ada85",
      name: "TwoWayHEdge",
      id: "2b85c8aa-1cd3-46b7-8bb0-dc2f47d92c24",
    },
    {
      start: {
        x: -3520,
        y: 4880,
      },
      startId: "8df3e740-9958-4334-b219-b847593ada85",
      end: {
        x: -3560,
        y: 4360,
      },
      endId: "dfdad6e9-7745-42dd-849d-09c1ecbc2b4b",
      name: "TwoWayVEdge",
      id: "8b8ed064-f3dd-4cee-bd59-357a3d5c3d07",
    },
    {
      start: {
        x: -3940,
        y: -40,
      },
      startId: "5876b1ce-05b5-48fb-9ebe-3ae86ed6a8bc",
      end: {
        x: -3980,
        y: 440,
      },
      endId: "e98fa16e-d853-4eb5-8603-f468282d0a72",
      name: "TwoWayVEdge",
      id: "2391b2b3-d323-4cfa-bd4d-de80ab08a458",
    },
    {
      start: {
        x: -3980,
        y: 440,
      },
      startId: "e98fa16e-d853-4eb5-8603-f468282d0a72",
      end: {
        x: -3920,
        y: 920,
      },
      endId: "437d1c63-f9dc-4bf8-b875-fd50df84b945",
      name: "TwoWayVEdge",
      id: "64d8670f-8ff3-4fef-9c5c-6e7e8065b7f6",
    },
    {
      start: {
        x: -3920,
        y: 920,
      },
      startId: "437d1c63-f9dc-4bf8-b875-fd50df84b945",
      end: {
        x: -3980,
        y: 1400,
      },
      endId: "c144f1e3-d2e3-4a18-a04c-27ef8d3c6816",
      name: "TwoWayVEdge",
      id: "a60574fe-0c37-49b7-ba11-9fb123d82e57",
    },
    {
      start: {
        x: -3980,
        y: 1400,
      },
      startId: "c144f1e3-d2e3-4a18-a04c-27ef8d3c6816",
      end: {
        x: -3400,
        y: 1420,
      },
      endId: "09a6115a-489e-4a27-a566-ffcea58934aa",
      name: "TwoWayHEdge",
      id: "293aa3fd-7f0f-459d-83c8-d4497c22fc37",
    },
    {
      start: {
        x: -3400,
        y: 1420,
      },
      startId: "09a6115a-489e-4a27-a566-ffcea58934aa",
      end: {
        x: -2760,
        y: 1400,
      },
      endId: "b7fcc1fc-31ee-4868-ad1a-106b0607ce4a",
      name: "TwoWayHEdge",
      id: "00d45112-6340-4b78-b599-a7eda149f01e",
    },
    {
      start: {
        x: -3980,
        y: 1400,
      },
      startId: "c144f1e3-d2e3-4a18-a04c-27ef8d3c6816",
      end: {
        x: -4600,
        y: 1420,
      },
      endId: "ca65154a-8b76-4ca8-979a-d6fd907e60dc",
      name: "TwoWayHEdge",
      id: "7ace322f-1ee7-4c80-94d7-aeeef4d0d9d1",
    },
    {
      start: {
        x: -3980,
        y: 1400,
      },
      startId: "c144f1e3-d2e3-4a18-a04c-27ef8d3c6816",
      end: {
        x: -3920,
        y: 1860,
      },
      endId: "18979f18-8c13-4230-8b0d-000ff417b25f",
      name: "TwoWayVEdge",
      id: "8182804e-94b8-4edc-9513-d7eee86954e5",
    },
    {
      start: {
        x: -3920,
        y: 1860,
      },
      startId: "18979f18-8c13-4230-8b0d-000ff417b25f",
      end: {
        x: -3960,
        y: 2320,
      },
      endId: "8d1da453-af47-4bb1-8679-4d5edef80312",
      name: "TwoWayVEdge",
      id: "90b3437c-cc1d-44fa-813d-9f9e75212fac",
    },
    {
      start: {
        x: -3960,
        y: 2320,
      },
      startId: "8d1da453-af47-4bb1-8679-4d5edef80312",
      end: {
        x: -4640,
        y: 2360,
      },
      endId: "7d2ffa21-5805-4cc7-8ad7-16fc06c0aaa7",
      name: "TwoWayHEdge",
      id: "927db115-38ea-43d2-8b38-7bbe309a54d5",
    },
    {
      start: {
        x: -4600,
        y: 1420,
      },
      startId: "ca65154a-8b76-4ca8-979a-d6fd907e60dc",
      end: {
        x: -4640,
        y: 2360,
      },
      endId: "7d2ffa21-5805-4cc7-8ad7-16fc06c0aaa7",
      name: "TwoWayVEdge",
      id: "4d0bbd89-b7ba-41fa-944b-d136d851a9c9",
    },
    {
      start: {
        x: -4640,
        y: 2360,
      },
      startId: "7d2ffa21-5805-4cc7-8ad7-16fc06c0aaa7",
      end: {
        x: -4740,
        y: 2780,
      },
      endId: "4ac2ca7b-351b-4c08-a710-6bde6da9bf77",
      name: "TwoWayVEdge",
      id: "63c28102-670b-41fa-bffc-140d6714d571",
    },
    {
      start: {
        x: -4740,
        y: 2780,
      },
      startId: "4ac2ca7b-351b-4c08-a710-6bde6da9bf77",
      end: {
        x: -4300,
        y: 2780,
      },
      endId: "18a4eeb2-10ac-4c95-9cd9-932620ba615e",
      name: "TwoWayHEdge",
      id: "fa801e16-8b02-45d2-9ecf-f3865413b1fc",
    },
    {
      start: {
        x: -4740,
        y: 2780,
      },
      startId: "4ac2ca7b-351b-4c08-a710-6bde6da9bf77",
      end: {
        x: -5220,
        y: 2800,
      },
      endId: "7a26bea7-2721-4229-baa7-a2c8a77cff35",
      name: "TwoWayHEdge",
      id: "392744a8-3940-49e6-8f10-70eee6f42ba5",
    },
    {
      start: {
        x: -5220,
        y: 2800,
      },
      startId: "7a26bea7-2721-4229-baa7-a2c8a77cff35",
      end: {
        x: -5280,
        y: 2260,
      },
      endId: "95edb9ab-d42e-4b4b-9718-f7f51e416cac",
      name: "TwoWayVEdge",
      id: "aff8363f-b9fa-4ec4-9d33-585f09560f91",
    },
    {
      start: {
        x: -4740,
        y: 2780,
      },
      startId: "4ac2ca7b-351b-4c08-a710-6bde6da9bf77",
      end: {
        x: -4780,
        y: 3260,
      },
      endId: "80a42441-2e9c-491f-9fa1-ac82a6b38f23",
      name: "TwoWayVEdge",
      id: "5ec8e749-e8f1-4604-9cdc-84cc56f2af98",
    },
    {
      start: {
        x: -4780,
        y: 3260,
      },
      startId: "80a42441-2e9c-491f-9fa1-ac82a6b38f23",
      end: {
        x: -4720,
        y: 3720,
      },
      endId: "36d01c04-2041-4fd5-b4e5-eaea9193b08f",
      name: "TwoWayVEdge",
      id: "a4c03f28-560f-48b5-aa4a-b3626c9bf6b9",
    },
    {
      start: {
        x: -4720,
        y: 3720,
      },
      startId: "36d01c04-2041-4fd5-b4e5-eaea9193b08f",
      end: {
        x: -4760,
        y: 4200,
      },
      endId: "0943d19e-3ce1-4fde-8346-7b6f45a52254",
      name: "TwoWayVEdge",
      id: "a5193a83-0ba4-429a-8380-04ac366343a0",
    },
    {
      start: {
        x: -4760,
        y: 4200,
      },
      startId: "0943d19e-3ce1-4fde-8346-7b6f45a52254",
      end: {
        x: -5320,
        y: 4180,
      },
      endId: "5cd3ec91-e581-4d8c-a4a9-48e112632ea6",
      name: "TwoWayHEdge",
      id: "3e51504c-2e10-4212-adf6-e5689f05afc3",
    },
    {
      start: {
        x: -5320,
        y: 4180,
      },
      startId: "5cd3ec91-e581-4d8c-a4a9-48e112632ea6",
      end: {
        x: -5360,
        y: 3320,
      },
      endId: "3e7c80c5-ac02-4f26-9633-c1bc791b5d1a",
      name: "TwoWayVEdge",
      id: "45dd75eb-0115-4b47-8094-43b119eb212b",
    },
    {
      start: {
        x: -5360,
        y: 3320,
      },
      startId: "3e7c80c5-ac02-4f26-9633-c1bc791b5d1a",
      end: {
        x: -4780,
        y: 3260,
      },
      endId: "80a42441-2e9c-491f-9fa1-ac82a6b38f23",
      name: "TwoWayHEdge",
      id: "f734df30-ee0a-4f0b-bd74-13e3c3e67a52",
    },
    {
      start: {
        x: -5320,
        y: 4180,
      },
      startId: "5cd3ec91-e581-4d8c-a4a9-48e112632ea6",
      end: {
        x: -5840,
        y: 4220,
      },
      endId: "8f843a9c-f454-4753-a3a0-de6248786781",
      name: "TwoWayHEdge",
      id: "6c6e7f1e-9f84-4f94-ae73-8e9cfcf8a84f",
    },
    {
      start: {
        x: -5840,
        y: 4220,
      },
      startId: "8f843a9c-f454-4753-a3a0-de6248786781",
      end: {
        x: -6420,
        y: 4200,
      },
      endId: "7886972f-cedd-4e33-aa84-15613795d7fb",
      name: "TwoWayHEdge",
      id: "76a726d3-f447-4ce7-8746-3909b776fc16",
    },
    {
      start: {
        x: -4300,
        y: 2780,
      },
      startId: "18a4eeb2-10ac-4c95-9cd9-932620ba615e",
      end: {
        x: -4280,
        y: 3260,
      },
      endId: "8154aea8-5305-472b-81a2-e2cad268327b",
      name: "TwoWayVEdge",
      id: "6f99ffab-ebaf-4172-8240-f8b6f3db7f82",
    },
    {
      start: {
        x: -4280,
        y: 3260,
      },
      startId: "8154aea8-5305-472b-81a2-e2cad268327b",
      end: {
        x: -3900,
        y: 3240,
      },
      endId: "37a11700-b82e-4a59-a01b-ecbd9dd75240",
      name: "TwoWayHEdge",
      id: "babc470e-4ac1-4656-9f1a-8d326c3b62f0",
    },
    {
      start: {
        x: -3900,
        y: 3240,
      },
      startId: "37a11700-b82e-4a59-a01b-ecbd9dd75240",
      end: {
        x: -3520,
        y: 3280,
      },
      endId: "7bcb1ffd-db8a-4b8e-8fca-2ab44217c137",
      name: "TwoWayHEdge",
      id: "5d888e56-8681-46fe-9b4a-d42ea4a40657",
    },
    {
      start: {
        x: -3520,
        y: 3280,
      },
      startId: "7bcb1ffd-db8a-4b8e-8fca-2ab44217c137",
      end: {
        x: -3440,
        y: 3800,
      },
      endId: "3af414a5-7a11-4699-bdc9-9b4573853011",
      name: "TwoWayVEdge",
      id: "a0077e3b-b90d-455c-814a-f1287b08b5f2",
    },
    {
      start: {
        x: -3440,
        y: 3800,
      },
      startId: "3af414a5-7a11-4699-bdc9-9b4573853011",
      end: {
        x: -3560,
        y: 4360,
      },
      endId: "dfdad6e9-7745-42dd-849d-09c1ecbc2b4b",
      name: "TwoWayVEdge",
      id: "18292434-ed88-4ac3-8eb9-7ec304bfaf8a",
    },
    {
      start: {
        x: -500,
        y: 3320,
      },
      startId: "7654c33d-ccfc-4562-9404-10fbe3dbad05",
      end: {
        x: -1160,
        y: 3280,
      },
      endId: "d0a4bd79-c42a-4048-a59c-7cbf83d77f02",
      name: "TwoWayHEdge",
      id: "3a777ea6-fe8a-49d5-9aff-312834cf28f1",
    },
    {
      start: {
        x: -1160,
        y: 3280,
      },
      startId: "d0a4bd79-c42a-4048-a59c-7cbf83d77f02",
      end: {
        x: -1760,
        y: 3300,
      },
      endId: "fa099f47-4c4a-463e-9530-e9afb7b16f60",
      name: "TwoWayHEdge",
      id: "2a544e3e-5a9c-4680-b376-0980152b76d1",
    },
    {
      start: {
        x: -1760,
        y: 3300,
      },
      startId: "fa099f47-4c4a-463e-9530-e9afb7b16f60",
      end: {
        x: -2320,
        y: 3300,
      },
      endId: "de4778c8-555f-46a0-a3f0-a2ad86f22a87",
      name: "TwoWayHEdge",
      id: "011cfc85-32e5-4f53-bca7-c53fc8d4c092",
    },
    {
      start: {
        x: -2320,
        y: 3300,
      },
      startId: "de4778c8-555f-46a0-a3f0-a2ad86f22a87",
      end: {
        x: -2920,
        y: 3300,
      },
      endId: "b8a7a256-e1ed-4aff-84db-d3a306b96965",
      name: "TwoWayHEdge",
      id: "fbebd00e-bc07-4448-a0fb-33bbbc71b17a",
    },
    {
      start: {
        x: -2920,
        y: 3300,
      },
      startId: "b8a7a256-e1ed-4aff-84db-d3a306b96965",
      end: {
        x: -3520,
        y: 3280,
      },
      endId: "7bcb1ffd-db8a-4b8e-8fca-2ab44217c137",
      name: "TwoWayHEdge",
      id: "f317fd13-77fa-4aae-8b18-e405eb050c01",
    },
    {
      start: {
        x: -5280,
        y: 2260,
      },
      startId: "95edb9ab-d42e-4b4b-9718-f7f51e416cac",
      end: {
        x: -5320,
        y: 1660,
      },
      endId: "3482c43f-1125-4d8f-a0fa-dfd8fd6a11a5",
      name: "TwoWayVEdge",
      id: "10fb59d6-3875-4d41-a2cb-fdbd7eea6317",
    },
    {
      start: {
        x: -5320,
        y: 1660,
      },
      startId: "3482c43f-1125-4d8f-a0fa-dfd8fd6a11a5",
      end: {
        x: -5340,
        y: 1020,
      },
      endId: "821ba520-b58f-40fb-bdd4-7f9a76a4c431",
      name: "TwoWayVEdge",
      id: "40a9a274-6ed3-4660-949c-58144920189b",
    },
    {
      start: {
        x: -5340,
        y: 1020,
      },
      startId: "821ba520-b58f-40fb-bdd4-7f9a76a4c431",
      end: {
        x: -5240,
        y: 440,
      },
      endId: "3982c290-a308-4f1b-aabb-02d36428f9b4",
      name: "TwoWayVEdge",
      id: "a122e034-0f57-437a-9228-669444d63c86",
    },
  ],
};
export default antarcticaCaveMap;
