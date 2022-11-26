import type { GraphJSON } from "global";

const arcticCaveB2Map: GraphJSON = {
  vertices: [
    {
      position: {
        x: 0,
        y: 0,
      },
      name: "BattleField",
      id: "30fa332c-0971-4b0e-a15b-cd4e7c431c3a",
      edges: [
        "96664dd8-989e-4ee9-95ea-e6a76aeb13cc",
        "38dbc0c0-b7a8-4151-800c-ff5bfc589efb",
      ],
      area: "ArcticCaveB2",
      top: "2af5f213-5681-4e2d-83c0-f89bab648c63",
      bottom: "3795f595-1710-4d09-b848-f3e46aafced6",
    },
    {
      id: "2af5f213-5681-4e2d-83c0-f89bab648c63",
      name: "BattleField",
      position: {
        x: 40,
        y: -500,
      },
      edges: [
        "96664dd8-989e-4ee9-95ea-e6a76aeb13cc",
        "f8521c38-c83a-4533-b912-29d902bf3c53",
      ],
      area: "ArcticCaveB2",
      bottom: "30fa332c-0971-4b0e-a15b-cd4e7c431c3a",
      right: "ef27d34a-ed96-466b-8c83-52782143cef7",
    },
    {
      id: "3795f595-1710-4d09-b848-f3e46aafced6",
      name: "CaveField",
      position: {
        x: 20,
        y: 520,
      },
      edges: ["38dbc0c0-b7a8-4151-800c-ff5bfc589efb"],
      area: "ArcticCaveB2",
      top: "30fa332c-0971-4b0e-a15b-cd4e7c431c3a",
    },
    {
      id: "ef27d34a-ed96-466b-8c83-52782143cef7",
      name: "RedTreasureField",
      position: {
        x: 580,
        y: -480,
      },
      edges: [
        "f8521c38-c83a-4533-b912-29d902bf3c53",
        "a4852d69-95c0-445c-9f2e-d29ccb7754ce",
      ],
      area: "ArcticCaveB2",
      left: "2af5f213-5681-4e2d-83c0-f89bab648c63",
      right: "3e5b64a8-4ae6-40aa-94ed-3525584ac7d1",
    },
    {
      id: "3e5b64a8-4ae6-40aa-94ed-3525584ac7d1",
      name: "TreasureField",
      position: {
        x: 1120,
        y: -500,
      },
      edges: [
        "a4852d69-95c0-445c-9f2e-d29ccb7754ce",
        "f6d5967e-9cfc-406b-b5d3-e02d1aaa53df",
        "412d3b28-a959-4f8e-ba06-a77b26f6a6dc",
      ],
      area: "ArcticCaveB2",
      left: "ef27d34a-ed96-466b-8c83-52782143cef7",
      right: "7cd49acb-6478-45bf-a081-72712b093b02",
      bottom: "a241ac31-c51b-4efc-8ca0-a424e708409b",
    },
    {
      id: "7cd49acb-6478-45bf-a081-72712b093b02",
      name: "BattleField",
      position: {
        x: 2060,
        y: -500,
      },
      edges: [
        "f6d5967e-9cfc-406b-b5d3-e02d1aaa53df",
        "f00f3be6-68b4-457b-a2a2-eedcf889b0df",
        "72591930-77ff-4611-bb27-170aecd3d2d2",
      ],
      area: "ArcticCaveB2",
      left: "3e5b64a8-4ae6-40aa-94ed-3525584ac7d1",
      bottom: "e135baa3-f5cc-4406-8a1f-4bb01d4903ab",
      right: "0b4c9995-134e-454a-beee-82d72acba0fa",
    },
    {
      id: "a241ac31-c51b-4efc-8ca0-a424e708409b",
      name: "BattleField",
      position: {
        x: 1080,
        y: -40,
      },
      edges: [
        "412d3b28-a959-4f8e-ba06-a77b26f6a6dc",
        "c60ed13b-abcb-4e0f-8ea0-cb0a2914232c",
      ],
      area: "ArcticCaveB2",
      top: "3e5b64a8-4ae6-40aa-94ed-3525584ac7d1",
      right: "a0865336-63e1-4c5e-98bb-fd7e45c324a6",
    },
    {
      id: "a0865336-63e1-4c5e-98bb-fd7e45c324a6",
      name: "BattleField",
      position: {
        x: 1600,
        y: 0,
      },
      edges: [
        "c60ed13b-abcb-4e0f-8ea0-cb0a2914232c",
        "87cf7ad4-4661-4abc-9d8c-82170941c9a8",
      ],
      area: "ArcticCaveB2",
      left: "a241ac31-c51b-4efc-8ca0-a424e708409b",
      right: "e135baa3-f5cc-4406-8a1f-4bb01d4903ab",
    },
    {
      id: "e135baa3-f5cc-4406-8a1f-4bb01d4903ab",
      name: "TreasureField",
      position: {
        x: 2100,
        y: -40,
      },
      edges: [
        "87cf7ad4-4661-4abc-9d8c-82170941c9a8",
        "f00f3be6-68b4-457b-a2a2-eedcf889b0df",
      ],
      area: "ArcticCaveB2",
      left: "a0865336-63e1-4c5e-98bb-fd7e45c324a6",
      top: "7cd49acb-6478-45bf-a081-72712b093b02",
    },
    {
      id: "0b4c9995-134e-454a-beee-82d72acba0fa",
      name: "BattleField",
      position: {
        x: 2640,
        y: -500,
      },
      edges: [
        "72591930-77ff-4611-bb27-170aecd3d2d2",
        "95802da1-c1a4-4e1e-b10c-98a5aafe0be8",
        "fdfa964c-3452-4ed1-a327-bfd13f4738e6",
      ],
      area: "ArcticCaveB2",
      left: "7cd49acb-6478-45bf-a081-72712b093b02",
      right: "dbbab863-4c29-4632-96f2-145959c19592",
      bottom: "61ba65e4-1332-4f96-aab7-b8b51a706b34",
    },
    {
      id: "dbbab863-4c29-4632-96f2-145959c19592",
      name: "TreasureField",
      position: {
        x: 3200,
        y: -460,
      },
      edges: [
        "95802da1-c1a4-4e1e-b10c-98a5aafe0be8",
        "a5e1992a-e0fb-4582-98c0-ea6a8b4a9589",
        "5c27916e-6192-423f-8dbe-f045820f45e9",
      ],
      area: "ArcticCaveB2",
      left: "0b4c9995-134e-454a-beee-82d72acba0fa",
      bottom: "edfbc5f8-1b48-4973-a95b-2e28bf096ae7",
      top: "86d9e109-f454-4590-b4cb-d59f0eea09ca",
    },
    {
      id: "61ba65e4-1332-4f96-aab7-b8b51a706b34",
      name: "RedTreasureField",
      position: {
        x: 2680,
        y: -20,
      },
      edges: [
        "fdfa964c-3452-4ed1-a327-bfd13f4738e6",
        "43fab879-ba71-41b0-bc53-ac6b503d1af6",
      ],
      area: "ArcticCaveB2",
      top: "0b4c9995-134e-454a-beee-82d72acba0fa",
      right: "edfbc5f8-1b48-4973-a95b-2e28bf096ae7",
    },
    {
      id: "edfbc5f8-1b48-4973-a95b-2e28bf096ae7",
      name: "BattleField",
      position: {
        x: 3260,
        y: 60,
      },
      edges: [
        "43fab879-ba71-41b0-bc53-ac6b503d1af6",
        "a5e1992a-e0fb-4582-98c0-ea6a8b4a9589",
        "9aa2fa75-256c-4eb8-ab90-416ef332fb7d",
      ],
      area: "ArcticCaveB2",
      left: "61ba65e4-1332-4f96-aab7-b8b51a706b34",
      top: "dbbab863-4c29-4632-96f2-145959c19592",
      right: "9b62b68a-7dfa-4852-b342-a7d00663c007",
    },
    {
      id: "9b62b68a-7dfa-4852-b342-a7d00663c007",
      name: "MagicBookField",
      position: {
        x: 3860,
        y: 20,
      },
      edges: [
        "9aa2fa75-256c-4eb8-ab90-416ef332fb7d",
        "b191948e-bf36-4bbc-a0e9-105a6d411f59",
      ],
      area: "ArcticCaveB2",
      left: "edfbc5f8-1b48-4973-a95b-2e28bf096ae7",
      top: "6a45f6d3-566c-4365-a62f-ab2a038b1406",
    },
    {
      id: "86d9e109-f454-4590-b4cb-d59f0eea09ca",
      name: "DamageField",
      position: {
        x: 3240,
        y: -980,
      },
      edges: [
        "5c27916e-6192-423f-8dbe-f045820f45e9",
        "c94a42c1-764e-4fd5-8d75-643b6dc402b3",
        "3ed47998-76b3-4b6b-a8e9-6775af2306a1",
      ],
      area: "ArcticCaveB2",
      bottom: "dbbab863-4c29-4632-96f2-145959c19592",
      right: "6a45f6d3-566c-4365-a62f-ab2a038b1406",
      left: "df4fb1f7-0853-434c-a3f4-dd77bae87ca6",
    },
    {
      id: "6a45f6d3-566c-4365-a62f-ab2a038b1406",
      name: "BattleField",
      position: {
        x: 3780,
        y: -980,
      },
      edges: [
        "c94a42c1-764e-4fd5-8d75-643b6dc402b3",
        "b191948e-bf36-4bbc-a0e9-105a6d411f59",
        "cf8baf32-677d-411c-a2d4-6101e73137a9",
      ],
      area: "ArcticCaveB2",
      left: "86d9e109-f454-4590-b4cb-d59f0eea09ca",
      bottom: "9b62b68a-7dfa-4852-b342-a7d00663c007",
      top: "2a551428-f02e-4cdd-bbb9-d24b817097fc",
    },
    {
      id: "df4fb1f7-0853-434c-a3f4-dd77bae87ca6",
      name: "BattleField",
      position: {
        x: 2660,
        y: -980,
      },
      edges: [
        "3ed47998-76b3-4b6b-a8e9-6775af2306a1",
        "76a43636-e0fe-4c9c-94fb-9e64127a3a7a",
      ],
      area: "ArcticCaveB2",
      right: "86d9e109-f454-4590-b4cb-d59f0eea09ca",
      left: "b0b31fb7-7a77-4055-8ec1-fd6fb51d119d",
    },
    {
      id: "b0b31fb7-7a77-4055-8ec1-fd6fb51d119d",
      name: "TreasureField",
      position: {
        x: 2100,
        y: -960,
      },
      edges: [
        "76a43636-e0fe-4c9c-94fb-9e64127a3a7a",
        "7d378ddf-d6fe-451a-b598-ec95dec3848a",
      ],
      area: "ArcticCaveB2",
      right: "df4fb1f7-0853-434c-a3f4-dd77bae87ca6",
      left: "58e38251-5f8b-4f43-a917-32a3f87e021c",
    },
    {
      id: "58e38251-5f8b-4f43-a917-32a3f87e021c",
      name: "BattleField",
      position: {
        x: 1620,
        y: -1000,
      },
      edges: [
        "7d378ddf-d6fe-451a-b598-ec95dec3848a",
        "a81d2e46-5d57-469e-afd1-73880d1bed9c",
      ],
      area: "ArcticCaveB2",
      right: "b0b31fb7-7a77-4055-8ec1-fd6fb51d119d",
      left: "d589f529-318a-4e5c-b339-766a34fe0ea4",
    },
    {
      id: "d589f529-318a-4e5c-b339-766a34fe0ea4",
      name: "MagicBookField",
      position: {
        x: 1120,
        y: -960,
      },
      edges: [
        "a81d2e46-5d57-469e-afd1-73880d1bed9c",
        "ffd9835a-496e-4638-a476-b0babdc567cf",
      ],
      area: "ArcticCaveB2",
      right: "58e38251-5f8b-4f43-a917-32a3f87e021c",
      left: "28f722fc-d138-4c53-8130-8971d95875e4",
    },
    {
      id: "28f722fc-d138-4c53-8130-8971d95875e4",
      name: "DamageField",
      position: {
        x: 580,
        y: -1000,
      },
      edges: [
        "ffd9835a-496e-4638-a476-b0babdc567cf",
        "105c243f-7eda-46ca-adb2-9a2ec692ce5a",
      ],
      area: "ArcticCaveB2",
      right: "d589f529-318a-4e5c-b339-766a34fe0ea4",
      left: "c25e7d28-3b49-4cda-85a7-0744d280df6b",
    },
    {
      id: "c25e7d28-3b49-4cda-85a7-0744d280df6b",
      name: "TreasureField",
      position: {
        x: 60,
        y: -980,
      },
      edges: [
        "105c243f-7eda-46ca-adb2-9a2ec692ce5a",
        "61999d00-d288-45f0-a394-def8f571f736",
      ],
      area: "ArcticCaveB2",
      right: "28f722fc-d138-4c53-8130-8971d95875e4",
      top: "abbfef2b-c6c1-47eb-a456-a989841d038d",
    },
    {
      id: "abbfef2b-c6c1-47eb-a456-a989841d038d",
      name: "RedTreasureField",
      position: {
        x: 20,
        y: -1500,
      },
      edges: [
        "61999d00-d288-45f0-a394-def8f571f736",
        "a7f079b1-ba9c-4bb7-878f-5087cbbbfe20",
      ],
      area: "ArcticCaveB2",
      bottom: "c25e7d28-3b49-4cda-85a7-0744d280df6b",
      top: "46f94d49-47b4-4fb1-b15e-754e17875127",
    },
    {
      id: "46f94d49-47b4-4fb1-b15e-754e17875127",
      name: "TreasureField",
      position: {
        x: 80,
        y: -2040,
      },
      edges: [
        "a7f079b1-ba9c-4bb7-878f-5087cbbbfe20",
        "58a7332e-5e2d-4cac-bc96-ea5acdc38e1b",
        "af394628-29b3-4665-8ce5-26ca6c7552a2",
      ],
      area: "ArcticCaveB2",
      bottom: "abbfef2b-c6c1-47eb-a456-a989841d038d",
      top: "0542bcfe-a83a-4cb6-933a-ba9baa52cdef",
      right: "cb70968b-fec5-4d31-9ae1-96cd253a0dc9",
    },
    {
      id: "0542bcfe-a83a-4cb6-933a-ba9baa52cdef",
      name: "BattleField",
      position: {
        x: 0,
        y: -2520,
      },
      edges: [
        "58a7332e-5e2d-4cac-bc96-ea5acdc38e1b",
        "8e251cb4-cbd4-4b4b-9a83-b0231e377b5a",
        "b40ef517-ef1d-4118-97cf-256ee8d3c919",
      ],
      area: "ArcticCaveB2",
      bottom: "46f94d49-47b4-4fb1-b15e-754e17875127",
      right: "d9a41f3d-ab21-48c7-bafc-143e794d8ee1",
      left: "3887323b-523d-44c8-978d-4b2a5b0d229f",
    },
    {
      id: "cb70968b-fec5-4d31-9ae1-96cd253a0dc9",
      name: "BattleField",
      position: {
        x: 820,
        y: -2040,
      },
      edges: [
        "af394628-29b3-4665-8ce5-26ca6c7552a2",
        "a44de7be-6380-4007-910a-bdfc0a302e2e",
        "be3ed072-f50e-41e7-a760-18aebef9668e",
      ],
      area: "ArcticCaveB2",
      left: "46f94d49-47b4-4fb1-b15e-754e17875127",
      top: "6e664013-9e53-430f-a116-1be1baf65570",
      right: "09213251-865c-4c4a-8bbd-8bf01adaa1a7",
    },
    {
      id: "6e664013-9e53-430f-a116-1be1baf65570",
      name: "BattleField",
      position: {
        x: 920,
        y: -2520,
      },
      edges: [
        "a44de7be-6380-4007-910a-bdfc0a302e2e",
        "ebcb2245-211e-4a34-b18e-092b1ac4f9c2",
        "551e7318-7782-461a-9b38-af8d26db4ba8",
      ],
      area: "ArcticCaveB2",
      bottom: "cb70968b-fec5-4d31-9ae1-96cd253a0dc9",
      left: "d9a41f3d-ab21-48c7-bafc-143e794d8ee1",
      right: "0a17d48c-bd93-4002-be38-c62865dbbffa",
    },
    {
      id: "d9a41f3d-ab21-48c7-bafc-143e794d8ee1",
      name: "TreasureField",
      position: {
        x: 460,
        y: -2560,
      },
      edges: [
        "8e251cb4-cbd4-4b4b-9a83-b0231e377b5a",
        "ebcb2245-211e-4a34-b18e-092b1ac4f9c2",
      ],
      area: "ArcticCaveB2",
      left: "0542bcfe-a83a-4cb6-933a-ba9baa52cdef",
      right: "6e664013-9e53-430f-a116-1be1baf65570",
    },
    {
      id: "0a17d48c-bd93-4002-be38-c62865dbbffa",
      name: "KeyTreasureField",
      position: {
        x: 1420,
        y: -2540,
      },
      edges: ["551e7318-7782-461a-9b38-af8d26db4ba8"],
      area: "ArcticCaveB2",
      left: "6e664013-9e53-430f-a116-1be1baf65570",
    },
    {
      id: "09213251-865c-4c4a-8bbd-8bf01adaa1a7",
      name: "BattleField",
      position: {
        x: 1600,
        y: -2060,
      },
      edges: [
        "be3ed072-f50e-41e7-a760-18aebef9668e",
        "8558f06b-83e0-4233-a133-a61ec4f35306",
      ],
      area: "ArcticCaveB2",
      left: "cb70968b-fec5-4d31-9ae1-96cd253a0dc9",
      right: "8bc48820-d856-4482-b32e-337af064c66b",
    },
    {
      id: "8bc48820-d856-4482-b32e-337af064c66b",
      name: "TreasureField",
      position: {
        x: 2120,
        y: -2040,
      },
      edges: [
        "8558f06b-83e0-4233-a133-a61ec4f35306",
        "e593f73c-2b87-4fd2-af49-b5a0f1d801f6",
        "bcc23143-5257-48eb-8e15-de4f91cf1d3f",
      ],
      area: "ArcticCaveB2",
      left: "09213251-865c-4c4a-8bbd-8bf01adaa1a7",
      top: "4dc0fa75-7e52-4816-8fac-4bd029a42de2",
      right: "fe9bdc45-2755-4091-807d-e5891ff9170c",
    },
    {
      id: "4dc0fa75-7e52-4816-8fac-4bd029a42de2",
      name: "BattleField",
      position: {
        x: 2040,
        y: -2540,
      },
      edges: [
        "e593f73c-2b87-4fd2-af49-b5a0f1d801f6",
        "1ce6fc05-81bc-429c-bb44-6436b301a2b9",
        "429bea19-8f5d-42d1-9b63-4e9484d410fe",
      ],
      area: "ArcticCaveB2",
      bottom: "8bc48820-d856-4482-b32e-337af064c66b",
      right: "786a7379-d1bc-429e-9426-e015af8c5ab9",
      top: "4fc2956f-e8b0-4193-9790-b4b0f94684a2",
    },
    {
      id: "786a7379-d1bc-429e-9426-e015af8c5ab9",
      name: "DamageField",
      position: {
        x: 2640,
        y: -2580,
      },
      edges: [
        "1ce6fc05-81bc-429c-bb44-6436b301a2b9",
        "7b32a56f-2f50-4899-84f3-71ff26b6f105",
      ],
      area: "ArcticCaveB2",
      left: "4dc0fa75-7e52-4816-8fac-4bd029a42de2",
      right: "2aaa43d0-8106-42b8-a9cb-c54e0b1c37e2",
    },
    {
      id: "2aaa43d0-8106-42b8-a9cb-c54e0b1c37e2",
      name: "BattleField",
      position: {
        x: 3240,
        y: -2540,
      },
      edges: [
        "7b32a56f-2f50-4899-84f3-71ff26b6f105",
        "286abc1f-b90a-4d97-80b6-ea70378683b4",
        "8eb80a8e-fe89-4192-8b20-6968f5982033",
      ],
      area: "ArcticCaveB2",
      left: "786a7379-d1bc-429e-9426-e015af8c5ab9",
      bottom: "fe9bdc45-2755-4091-807d-e5891ff9170c",
      right: "5d8b0fcf-8c09-4a86-a0c3-6fff9e2e80ce",
    },
    {
      id: "fe9bdc45-2755-4091-807d-e5891ff9170c",
      name: "BattleField",
      position: {
        x: 3160,
        y: -2040,
      },
      edges: [
        "bcc23143-5257-48eb-8e15-de4f91cf1d3f",
        "286abc1f-b90a-4d97-80b6-ea70378683b4",
        "adddefc5-d3c3-47db-a945-1d673da04b10",
      ],
      area: "ArcticCaveB2",
      left: "8bc48820-d856-4482-b32e-337af064c66b",
      top: "2aaa43d0-8106-42b8-a9cb-c54e0b1c37e2",
      right: "5b82cd41-6ac1-416e-87dd-049c4f8bb98b",
    },
    {
      id: "2a551428-f02e-4cdd-bbb9-d24b817097fc",
      name: "RedTreasureField",
      position: {
        x: 3820,
        y: -1500,
      },
      edges: [
        "cf8baf32-677d-411c-a2d4-6101e73137a9",
        "5f44a51f-9cdf-4b2c-96f6-a2384597d580",
      ],
      area: "ArcticCaveB2",
      bottom: "6a45f6d3-566c-4365-a62f-ab2a038b1406",
      top: "5b82cd41-6ac1-416e-87dd-049c4f8bb98b",
    },
    {
      id: "5b82cd41-6ac1-416e-87dd-049c4f8bb98b",
      name: "BattleField",
      position: {
        x: 3760,
        y: -2020,
      },
      edges: [
        "5f44a51f-9cdf-4b2c-96f6-a2384597d580",
        "adddefc5-d3c3-47db-a945-1d673da04b10",
      ],
      area: "ArcticCaveB2",
      bottom: "2a551428-f02e-4cdd-bbb9-d24b817097fc",
      left: "fe9bdc45-2755-4091-807d-e5891ff9170c",
    },
    {
      id: "5d8b0fcf-8c09-4a86-a0c3-6fff9e2e80ce",
      name: "BattleField",
      position: {
        x: 3760,
        y: -2540,
      },
      edges: [
        "8eb80a8e-fe89-4192-8b20-6968f5982033",
        "a7139531-7a16-434e-8070-1e643cccb7ed",
      ],
      area: "ArcticCaveB2",
      left: "2aaa43d0-8106-42b8-a9cb-c54e0b1c37e2",
      top: "6449df8d-f89f-42e0-b7e2-d1c0debf19f1",
    },
    {
      id: "6449df8d-f89f-42e0-b7e2-d1c0debf19f1",
      name: "TreasureField",
      position: {
        x: 3780,
        y: -3020,
      },
      edges: [
        "a7139531-7a16-434e-8070-1e643cccb7ed",
        "685682cb-df9b-43a3-ab51-83949ff55e4b",
      ],
      area: "ArcticCaveB2",
      bottom: "5d8b0fcf-8c09-4a86-a0c3-6fff9e2e80ce",
      top: "4222846f-09d4-46a0-97c2-90a8a27f8207",
    },
    {
      id: "4222846f-09d4-46a0-97c2-90a8a27f8207",
      name: "BattleField",
      position: {
        x: 3680,
        y: -3440,
      },
      edges: [
        "685682cb-df9b-43a3-ab51-83949ff55e4b",
        "32433d7b-b994-4893-8e32-cc4e393ef1e9",
      ],
      area: "ArcticCaveB2",
      bottom: "6449df8d-f89f-42e0-b7e2-d1c0debf19f1",
      top: "0bbc725b-361b-4338-87c9-1a0d1316fb5f",
    },
    {
      id: "0bbc725b-361b-4338-87c9-1a0d1316fb5f",
      name: "BattleField",
      position: {
        x: 3740,
        y: -3900,
      },
      edges: [
        "32433d7b-b994-4893-8e32-cc4e393ef1e9",
        "7e898df4-0626-46b9-80d4-3a6fcadb80e0",
      ],
      area: "ArcticCaveB2",
      bottom: "4222846f-09d4-46a0-97c2-90a8a27f8207",
      top: "1d09a544-ba5d-4631-be61-36c9cdec0852",
    },
    {
      id: "1d09a544-ba5d-4631-be61-36c9cdec0852",
      name: "CaveField",
      position: {
        x: 3600,
        y: -4340,
      },
      edges: ["7e898df4-0626-46b9-80d4-3a6fcadb80e0"],
      area: "ArcticCaveB2",
      bottom: "0bbc725b-361b-4338-87c9-1a0d1316fb5f",
    },
    {
      id: "4fc2956f-e8b0-4193-9790-b4b0f94684a2",
      name: "MagicBookField",
      position: {
        x: 2100,
        y: -3180,
      },
      edges: [
        "429bea19-8f5d-42d1-9b63-4e9484d410fe",
        "0b942aef-e7f4-4982-aec9-6d0820bac0b7",
      ],
      area: "ArcticCaveB2",
      bottom: "4dc0fa75-7e52-4816-8fac-4bd029a42de2",
      top: "1d970eb2-264b-4bd9-97b5-14bdc2527eaf",
    },
    {
      id: "1d970eb2-264b-4bd9-97b5-14bdc2527eaf",
      name: "BattleField",
      position: {
        x: 2180,
        y: -3760,
      },
      edges: [
        "0b942aef-e7f4-4982-aec9-6d0820bac0b7",
        "296bdc85-4677-4a37-bdde-9c6d73d0b37f",
      ],
      area: "ArcticCaveB2",
      bottom: "4fc2956f-e8b0-4193-9790-b4b0f94684a2",
      left: "9e064c28-d13e-4048-9ee3-7c7900cf4e40",
    },
    {
      id: "9e064c28-d13e-4048-9ee3-7c7900cf4e40",
      name: "WhiteTreasureField",
      position: {
        x: 1640,
        y: -3740,
      },
      edges: [
        "296bdc85-4677-4a37-bdde-9c6d73d0b37f",
        "4c25ef76-de5d-4097-bdca-6d6721746adb",
      ],
      area: "ArcticCaveB2",
      right: "1d970eb2-264b-4bd9-97b5-14bdc2527eaf",
      top: "7cf72e78-c9c8-44bc-8bc2-103f92b93698",
    },
    {
      id: "7cf72e78-c9c8-44bc-8bc2-103f92b93698",
      name: "WeaponStoreField",
      position: {
        x: 1820,
        y: -4320,
      },
      edges: ["4c25ef76-de5d-4097-bdca-6d6721746adb"],
      area: "ArcticCaveB2",
      bottom: "9e064c28-d13e-4048-9ee3-7c7900cf4e40",
    },
    {
      id: "3887323b-523d-44c8-978d-4b2a5b0d229f",
      name: "BattleField",
      position: {
        x: -480,
        y: -2540,
      },
      edges: [
        "b40ef517-ef1d-4118-97cf-256ee8d3c919",
        "ca04b1dc-c97a-4c24-a9f9-dfa5580c6961",
      ],
      area: "ArcticCaveB2",
      right: "0542bcfe-a83a-4cb6-933a-ba9baa52cdef",
      top: "69e13776-d54c-4466-96fd-98bc6c73e9d6",
    },
    {
      id: "69e13776-d54c-4466-96fd-98bc6c73e9d6",
      name: "TreasureField",
      position: {
        x: -580,
        y: -3120,
      },
      edges: [
        "ca04b1dc-c97a-4c24-a9f9-dfa5580c6961",
        "72570542-8cd3-468f-bfcb-9bf7a7107c48",
      ],
      area: "ArcticCaveB2",
      bottom: "3887323b-523d-44c8-978d-4b2a5b0d229f",
      top: "a97eaebc-f053-4906-b6d4-4f9e8d8ee5fe",
    },
    {
      id: "a97eaebc-f053-4906-b6d4-4f9e8d8ee5fe",
      name: "BattleField",
      position: {
        x: -440,
        y: -3720,
      },
      edges: [
        "72570542-8cd3-468f-bfcb-9bf7a7107c48",
        "e519318c-1e6d-41a3-8df9-854405d8df06",
      ],
      area: "ArcticCaveB2",
      bottom: "69e13776-d54c-4466-96fd-98bc6c73e9d6",
      top: "699c2453-bb9d-4eae-b6ac-7f3664da32e7",
    },
    {
      id: "699c2453-bb9d-4eae-b6ac-7f3664da32e7",
      name: "CaveField",
      position: {
        x: -540,
        y: -4300,
      },
      edges: ["e519318c-1e6d-41a3-8df9-854405d8df06"],
      area: "ArcticCaveB2",
      bottom: "a97eaebc-f053-4906-b6d4-4f9e8d8ee5fe",
    },
  ],
  edges: [
    {
      start: {
        x: 0,
        y: 0,
      },
      startId: "30fa332c-0971-4b0e-a15b-cd4e7c431c3a",
      end: {
        x: 40,
        y: -500,
      },
      endId: "2af5f213-5681-4e2d-83c0-f89bab648c63",
      name: "TwoWayVEdge",
      id: "96664dd8-989e-4ee9-95ea-e6a76aeb13cc",
    },
    {
      start: {
        x: 0,
        y: 0,
      },
      startId: "30fa332c-0971-4b0e-a15b-cd4e7c431c3a",
      end: {
        x: 20,
        y: 520,
      },
      endId: "3795f595-1710-4d09-b848-f3e46aafced6",
      name: "TwoWayVEdge",
      id: "38dbc0c0-b7a8-4151-800c-ff5bfc589efb",
    },
    {
      start: {
        x: 40,
        y: -500,
      },
      startId: "2af5f213-5681-4e2d-83c0-f89bab648c63",
      end: {
        x: 580,
        y: -480,
      },
      endId: "ef27d34a-ed96-466b-8c83-52782143cef7",
      name: "TwoWayHEdge",
      id: "f8521c38-c83a-4533-b912-29d902bf3c53",
    },
    {
      start: {
        x: 580,
        y: -480,
      },
      startId: "ef27d34a-ed96-466b-8c83-52782143cef7",
      end: {
        x: 1120,
        y: -500,
      },
      endId: "3e5b64a8-4ae6-40aa-94ed-3525584ac7d1",
      name: "TwoWayHEdge",
      id: "a4852d69-95c0-445c-9f2e-d29ccb7754ce",
    },
    {
      start: {
        x: 1120,
        y: -500,
      },
      startId: "3e5b64a8-4ae6-40aa-94ed-3525584ac7d1",
      end: {
        x: 2060,
        y: -500,
      },
      endId: "7cd49acb-6478-45bf-a081-72712b093b02",
      name: "TwoWayHEdge",
      id: "f6d5967e-9cfc-406b-b5d3-e02d1aaa53df",
    },
    {
      start: {
        x: 1120,
        y: -500,
      },
      startId: "3e5b64a8-4ae6-40aa-94ed-3525584ac7d1",
      end: {
        x: 1080,
        y: -40,
      },
      endId: "a241ac31-c51b-4efc-8ca0-a424e708409b",
      name: "TwoWayVEdge",
      id: "412d3b28-a959-4f8e-ba06-a77b26f6a6dc",
    },
    {
      start: {
        x: 1080,
        y: -40,
      },
      startId: "a241ac31-c51b-4efc-8ca0-a424e708409b",
      end: {
        x: 1600,
        y: 0,
      },
      endId: "a0865336-63e1-4c5e-98bb-fd7e45c324a6",
      name: "TwoWayHEdge",
      id: "c60ed13b-abcb-4e0f-8ea0-cb0a2914232c",
    },
    {
      start: {
        x: 1600,
        y: 0,
      },
      startId: "a0865336-63e1-4c5e-98bb-fd7e45c324a6",
      end: {
        x: 2100,
        y: -40,
      },
      endId: "e135baa3-f5cc-4406-8a1f-4bb01d4903ab",
      name: "TwoWayHEdge",
      id: "87cf7ad4-4661-4abc-9d8c-82170941c9a8",
    },
    {
      start: {
        x: 2060,
        y: -500,
      },
      startId: "7cd49acb-6478-45bf-a081-72712b093b02",
      end: {
        x: 2100,
        y: -40,
      },
      endId: "e135baa3-f5cc-4406-8a1f-4bb01d4903ab",
      name: "TwoWayVEdge",
      id: "f00f3be6-68b4-457b-a2a2-eedcf889b0df",
    },
    {
      start: {
        x: 2060,
        y: -500,
      },
      startId: "7cd49acb-6478-45bf-a081-72712b093b02",
      end: {
        x: 2640,
        y: -500,
      },
      endId: "0b4c9995-134e-454a-beee-82d72acba0fa",
      name: "TwoWayHEdge",
      id: "72591930-77ff-4611-bb27-170aecd3d2d2",
    },
    {
      start: {
        x: 2640,
        y: -500,
      },
      startId: "0b4c9995-134e-454a-beee-82d72acba0fa",
      end: {
        x: 3200,
        y: -460,
      },
      endId: "dbbab863-4c29-4632-96f2-145959c19592",
      name: "TwoWayHEdge",
      id: "95802da1-c1a4-4e1e-b10c-98a5aafe0be8",
    },
    {
      start: {
        x: 2640,
        y: -500,
      },
      startId: "0b4c9995-134e-454a-beee-82d72acba0fa",
      end: {
        x: 2680,
        y: -20,
      },
      endId: "61ba65e4-1332-4f96-aab7-b8b51a706b34",
      name: "TwoWayVEdge",
      id: "fdfa964c-3452-4ed1-a327-bfd13f4738e6",
    },
    {
      start: {
        x: 2680,
        y: -20,
      },
      startId: "61ba65e4-1332-4f96-aab7-b8b51a706b34",
      end: {
        x: 3260,
        y: 60,
      },
      endId: "edfbc5f8-1b48-4973-a95b-2e28bf096ae7",
      name: "TwoWayHEdge",
      id: "43fab879-ba71-41b0-bc53-ac6b503d1af6",
    },
    {
      start: {
        x: 3200,
        y: -460,
      },
      startId: "dbbab863-4c29-4632-96f2-145959c19592",
      end: {
        x: 3260,
        y: 60,
      },
      endId: "edfbc5f8-1b48-4973-a95b-2e28bf096ae7",
      name: "TwoWayVEdge",
      id: "a5e1992a-e0fb-4582-98c0-ea6a8b4a9589",
    },
    {
      start: {
        x: 3260,
        y: 60,
      },
      startId: "edfbc5f8-1b48-4973-a95b-2e28bf096ae7",
      end: {
        x: 3860,
        y: 20,
      },
      endId: "9b62b68a-7dfa-4852-b342-a7d00663c007",
      name: "TwoWayHEdge",
      id: "9aa2fa75-256c-4eb8-ab90-416ef332fb7d",
    },
    {
      start: {
        x: 3200,
        y: -460,
      },
      startId: "dbbab863-4c29-4632-96f2-145959c19592",
      end: {
        x: 3240,
        y: -980,
      },
      endId: "86d9e109-f454-4590-b4cb-d59f0eea09ca",
      name: "TwoWayVEdge",
      id: "5c27916e-6192-423f-8dbe-f045820f45e9",
    },
    {
      start: {
        x: 3240,
        y: -980,
      },
      startId: "86d9e109-f454-4590-b4cb-d59f0eea09ca",
      end: {
        x: 3780,
        y: -980,
      },
      endId: "6a45f6d3-566c-4365-a62f-ab2a038b1406",
      name: "TwoWayHEdge",
      id: "c94a42c1-764e-4fd5-8d75-643b6dc402b3",
    },
    {
      start: {
        x: 3780,
        y: -980,
      },
      startId: "6a45f6d3-566c-4365-a62f-ab2a038b1406",
      end: {
        x: 3860,
        y: 20,
      },
      endId: "9b62b68a-7dfa-4852-b342-a7d00663c007",
      name: "TwoWayVEdge",
      id: "b191948e-bf36-4bbc-a0e9-105a6d411f59",
    },
    {
      start: {
        x: 3240,
        y: -980,
      },
      startId: "86d9e109-f454-4590-b4cb-d59f0eea09ca",
      end: {
        x: 2660,
        y: -980,
      },
      endId: "df4fb1f7-0853-434c-a3f4-dd77bae87ca6",
      name: "TwoWayHEdge",
      id: "3ed47998-76b3-4b6b-a8e9-6775af2306a1",
    },
    {
      start: {
        x: 2660,
        y: -980,
      },
      startId: "df4fb1f7-0853-434c-a3f4-dd77bae87ca6",
      end: {
        x: 2100,
        y: -960,
      },
      endId: "b0b31fb7-7a77-4055-8ec1-fd6fb51d119d",
      name: "TwoWayHEdge",
      id: "76a43636-e0fe-4c9c-94fb-9e64127a3a7a",
    },
    {
      start: {
        x: 2100,
        y: -960,
      },
      startId: "b0b31fb7-7a77-4055-8ec1-fd6fb51d119d",
      end: {
        x: 1620,
        y: -1000,
      },
      endId: "58e38251-5f8b-4f43-a917-32a3f87e021c",
      name: "TwoWayHEdge",
      id: "7d378ddf-d6fe-451a-b598-ec95dec3848a",
    },
    {
      start: {
        x: 1620,
        y: -1000,
      },
      startId: "58e38251-5f8b-4f43-a917-32a3f87e021c",
      end: {
        x: 1120,
        y: -960,
      },
      endId: "d589f529-318a-4e5c-b339-766a34fe0ea4",
      name: "TwoWayHEdge",
      id: "a81d2e46-5d57-469e-afd1-73880d1bed9c",
    },
    {
      start: {
        x: 1120,
        y: -960,
      },
      startId: "d589f529-318a-4e5c-b339-766a34fe0ea4",
      end: {
        x: 580,
        y: -1000,
      },
      endId: "28f722fc-d138-4c53-8130-8971d95875e4",
      name: "TwoWayHEdge",
      id: "ffd9835a-496e-4638-a476-b0babdc567cf",
    },
    {
      start: {
        x: 580,
        y: -1000,
      },
      startId: "28f722fc-d138-4c53-8130-8971d95875e4",
      end: {
        x: 60,
        y: -980,
      },
      endId: "c25e7d28-3b49-4cda-85a7-0744d280df6b",
      name: "TwoWayHEdge",
      id: "105c243f-7eda-46ca-adb2-9a2ec692ce5a",
    },
    {
      start: {
        x: 60,
        y: -980,
      },
      startId: "c25e7d28-3b49-4cda-85a7-0744d280df6b",
      end: {
        x: 20,
        y: -1500,
      },
      endId: "abbfef2b-c6c1-47eb-a456-a989841d038d",
      name: "TwoWayVEdge",
      id: "61999d00-d288-45f0-a394-def8f571f736",
    },
    {
      start: {
        x: 20,
        y: -1500,
      },
      startId: "abbfef2b-c6c1-47eb-a456-a989841d038d",
      end: {
        x: 80,
        y: -2040,
      },
      endId: "46f94d49-47b4-4fb1-b15e-754e17875127",
      name: "TwoWayVEdge",
      id: "a7f079b1-ba9c-4bb7-878f-5087cbbbfe20",
    },
    {
      start: {
        x: 80,
        y: -2040,
      },
      startId: "46f94d49-47b4-4fb1-b15e-754e17875127",
      end: {
        x: 0,
        y: -2520,
      },
      endId: "0542bcfe-a83a-4cb6-933a-ba9baa52cdef",
      name: "TwoWayVEdge",
      id: "58a7332e-5e2d-4cac-bc96-ea5acdc38e1b",
    },
    {
      start: {
        x: 80,
        y: -2040,
      },
      startId: "46f94d49-47b4-4fb1-b15e-754e17875127",
      end: {
        x: 820,
        y: -2040,
      },
      endId: "cb70968b-fec5-4d31-9ae1-96cd253a0dc9",
      name: "TwoWayHEdge",
      id: "af394628-29b3-4665-8ce5-26ca6c7552a2",
    },
    {
      start: {
        x: 820,
        y: -2040,
      },
      startId: "cb70968b-fec5-4d31-9ae1-96cd253a0dc9",
      end: {
        x: 920,
        y: -2520,
      },
      endId: "6e664013-9e53-430f-a116-1be1baf65570",
      name: "TwoWayVEdge",
      id: "a44de7be-6380-4007-910a-bdfc0a302e2e",
    },
    {
      start: {
        x: 0,
        y: -2520,
      },
      startId: "0542bcfe-a83a-4cb6-933a-ba9baa52cdef",
      end: {
        x: 460,
        y: -2560,
      },
      endId: "d9a41f3d-ab21-48c7-bafc-143e794d8ee1",
      name: "TwoWayHEdge",
      id: "8e251cb4-cbd4-4b4b-9a83-b0231e377b5a",
    },
    {
      start: {
        x: 460,
        y: -2560,
      },
      startId: "d9a41f3d-ab21-48c7-bafc-143e794d8ee1",
      end: {
        x: 920,
        y: -2520,
      },
      endId: "6e664013-9e53-430f-a116-1be1baf65570",
      name: "TwoWayHEdge",
      id: "ebcb2245-211e-4a34-b18e-092b1ac4f9c2",
    },
    {
      start: {
        x: 920,
        y: -2520,
      },
      startId: "6e664013-9e53-430f-a116-1be1baf65570",
      end: {
        x: 1420,
        y: -2540,
      },
      endId: "0a17d48c-bd93-4002-be38-c62865dbbffa",
      name: "TwoWayHEdge",
      id: "551e7318-7782-461a-9b38-af8d26db4ba8",
    },
    {
      start: {
        x: 820,
        y: -2040,
      },
      startId: "cb70968b-fec5-4d31-9ae1-96cd253a0dc9",
      end: {
        x: 1600,
        y: -2060,
      },
      endId: "09213251-865c-4c4a-8bbd-8bf01adaa1a7",
      name: "TwoWayHEdge",
      id: "be3ed072-f50e-41e7-a760-18aebef9668e",
    },
    {
      start: {
        x: 1600,
        y: -2060,
      },
      startId: "09213251-865c-4c4a-8bbd-8bf01adaa1a7",
      end: {
        x: 2120,
        y: -2040,
      },
      endId: "8bc48820-d856-4482-b32e-337af064c66b",
      name: "TwoWayHEdge",
      id: "8558f06b-83e0-4233-a133-a61ec4f35306",
    },
    {
      start: {
        x: 2120,
        y: -2040,
      },
      startId: "8bc48820-d856-4482-b32e-337af064c66b",
      end: {
        x: 2040,
        y: -2540,
      },
      endId: "4dc0fa75-7e52-4816-8fac-4bd029a42de2",
      name: "TwoWayVEdge",
      id: "e593f73c-2b87-4fd2-af49-b5a0f1d801f6",
    },
    {
      start: {
        x: 2040,
        y: -2540,
      },
      startId: "4dc0fa75-7e52-4816-8fac-4bd029a42de2",
      end: {
        x: 2640,
        y: -2580,
      },
      endId: "786a7379-d1bc-429e-9426-e015af8c5ab9",
      name: "TwoWayHEdge",
      id: "1ce6fc05-81bc-429c-bb44-6436b301a2b9",
    },
    {
      start: {
        x: 2640,
        y: -2580,
      },
      startId: "786a7379-d1bc-429e-9426-e015af8c5ab9",
      end: {
        x: 3240,
        y: -2540,
      },
      endId: "2aaa43d0-8106-42b8-a9cb-c54e0b1c37e2",
      name: "TwoWayHEdge",
      id: "7b32a56f-2f50-4899-84f3-71ff26b6f105",
    },
    {
      start: {
        x: 2120,
        y: -2040,
      },
      startId: "8bc48820-d856-4482-b32e-337af064c66b",
      end: {
        x: 3160,
        y: -2040,
      },
      endId: "fe9bdc45-2755-4091-807d-e5891ff9170c",
      name: "TwoWayHEdge",
      id: "bcc23143-5257-48eb-8e15-de4f91cf1d3f",
    },
    {
      start: {
        x: 3160,
        y: -2040,
      },
      startId: "fe9bdc45-2755-4091-807d-e5891ff9170c",
      end: {
        x: 3240,
        y: -2540,
      },
      endId: "2aaa43d0-8106-42b8-a9cb-c54e0b1c37e2",
      name: "TwoWayVEdge",
      id: "286abc1f-b90a-4d97-80b6-ea70378683b4",
    },
    {
      start: {
        x: 3780,
        y: -980,
      },
      startId: "6a45f6d3-566c-4365-a62f-ab2a038b1406",
      end: {
        x: 3820,
        y: -1500,
      },
      endId: "2a551428-f02e-4cdd-bbb9-d24b817097fc",
      name: "TwoWayVEdge",
      id: "cf8baf32-677d-411c-a2d4-6101e73137a9",
    },
    {
      start: {
        x: 3820,
        y: -1500,
      },
      startId: "2a551428-f02e-4cdd-bbb9-d24b817097fc",
      end: {
        x: 3760,
        y: -2020,
      },
      endId: "5b82cd41-6ac1-416e-87dd-049c4f8bb98b",
      name: "TwoWayVEdge",
      id: "5f44a51f-9cdf-4b2c-96f6-a2384597d580",
    },
    {
      start: {
        x: 3160,
        y: -2040,
      },
      startId: "fe9bdc45-2755-4091-807d-e5891ff9170c",
      end: {
        x: 3760,
        y: -2020,
      },
      endId: "5b82cd41-6ac1-416e-87dd-049c4f8bb98b",
      name: "TwoWayHEdge",
      id: "adddefc5-d3c3-47db-a945-1d673da04b10",
    },
    {
      start: {
        x: 3240,
        y: -2540,
      },
      startId: "2aaa43d0-8106-42b8-a9cb-c54e0b1c37e2",
      end: {
        x: 3760,
        y: -2540,
      },
      endId: "5d8b0fcf-8c09-4a86-a0c3-6fff9e2e80ce",
      name: "TwoWayHEdge",
      id: "8eb80a8e-fe89-4192-8b20-6968f5982033",
    },
    {
      start: {
        x: 3760,
        y: -2540,
      },
      startId: "5d8b0fcf-8c09-4a86-a0c3-6fff9e2e80ce",
      end: {
        x: 3780,
        y: -3020,
      },
      endId: "6449df8d-f89f-42e0-b7e2-d1c0debf19f1",
      name: "TwoWayVEdge",
      id: "a7139531-7a16-434e-8070-1e643cccb7ed",
    },
    {
      start: {
        x: 3780,
        y: -3020,
      },
      startId: "6449df8d-f89f-42e0-b7e2-d1c0debf19f1",
      end: {
        x: 3680,
        y: -3440,
      },
      endId: "4222846f-09d4-46a0-97c2-90a8a27f8207",
      name: "TwoWayVEdge",
      id: "685682cb-df9b-43a3-ab51-83949ff55e4b",
    },
    {
      start: {
        x: 3680,
        y: -3440,
      },
      startId: "4222846f-09d4-46a0-97c2-90a8a27f8207",
      end: {
        x: 3740,
        y: -3900,
      },
      endId: "0bbc725b-361b-4338-87c9-1a0d1316fb5f",
      name: "TwoWayVEdge",
      id: "32433d7b-b994-4893-8e32-cc4e393ef1e9",
    },
    {
      start: {
        x: 3740,
        y: -3900,
      },
      startId: "0bbc725b-361b-4338-87c9-1a0d1316fb5f",
      end: {
        x: 3600,
        y: -4340,
      },
      endId: "1d09a544-ba5d-4631-be61-36c9cdec0852",
      name: "TwoWayVEdge",
      id: "7e898df4-0626-46b9-80d4-3a6fcadb80e0",
    },
    {
      start: {
        x: 2040,
        y: -2540,
      },
      startId: "4dc0fa75-7e52-4816-8fac-4bd029a42de2",
      end: {
        x: 2100,
        y: -3180,
      },
      endId: "4fc2956f-e8b0-4193-9790-b4b0f94684a2",
      name: "TwoWayVEdge",
      id: "429bea19-8f5d-42d1-9b63-4e9484d410fe",
    },
    {
      start: {
        x: 2100,
        y: -3180,
      },
      startId: "4fc2956f-e8b0-4193-9790-b4b0f94684a2",
      end: {
        x: 2180,
        y: -3760,
      },
      endId: "1d970eb2-264b-4bd9-97b5-14bdc2527eaf",
      name: "TwoWayVEdge",
      id: "0b942aef-e7f4-4982-aec9-6d0820bac0b7",
    },
    {
      start: {
        x: 2180,
        y: -3760,
      },
      startId: "1d970eb2-264b-4bd9-97b5-14bdc2527eaf",
      end: {
        x: 1640,
        y: -3740,
      },
      endId: "9e064c28-d13e-4048-9ee3-7c7900cf4e40",
      name: "TwoWayHEdge",
      id: "296bdc85-4677-4a37-bdde-9c6d73d0b37f",
    },
    {
      start: {
        x: 1640,
        y: -3740,
      },
      startId: "9e064c28-d13e-4048-9ee3-7c7900cf4e40",
      end: {
        x: 1820,
        y: -4320,
      },
      endId: "7cf72e78-c9c8-44bc-8bc2-103f92b93698",
      name: "TwoWayVEdge",
      id: "4c25ef76-de5d-4097-bdca-6d6721746adb",
    },
    {
      start: {
        x: 0,
        y: -2520,
      },
      startId: "0542bcfe-a83a-4cb6-933a-ba9baa52cdef",
      end: {
        x: -480,
        y: -2540,
      },
      endId: "3887323b-523d-44c8-978d-4b2a5b0d229f",
      name: "TwoWayHEdge",
      id: "b40ef517-ef1d-4118-97cf-256ee8d3c919",
    },
    {
      start: {
        x: -480,
        y: -2540,
      },
      startId: "3887323b-523d-44c8-978d-4b2a5b0d229f",
      end: {
        x: -580,
        y: -3120,
      },
      endId: "69e13776-d54c-4466-96fd-98bc6c73e9d6",
      name: "TwoWayVEdge",
      id: "ca04b1dc-c97a-4c24-a9f9-dfa5580c6961",
    },
    {
      start: {
        x: -580,
        y: -3120,
      },
      startId: "69e13776-d54c-4466-96fd-98bc6c73e9d6",
      end: {
        x: -440,
        y: -3720,
      },
      endId: "a97eaebc-f053-4906-b6d4-4f9e8d8ee5fe",
      name: "TwoWayVEdge",
      id: "72570542-8cd3-468f-bfcb-9bf7a7107c48",
    },
    {
      start: {
        x: -440,
        y: -3720,
      },
      startId: "a97eaebc-f053-4906-b6d4-4f9e8d8ee5fe",
      end: {
        x: -540,
        y: -4300,
      },
      endId: "699c2453-bb9d-4eae-b6ac-7f3664da32e7",
      name: "TwoWayVEdge",
      id: "e519318c-1e6d-41a3-8df9-854405d8df06",
    },
  ],
};
export default arcticCaveB2Map;
