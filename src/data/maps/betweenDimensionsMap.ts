import type { GraphJSON } from "global";

const betweenDimensionsMap: GraphJSON = {
  vertices: [
    {
      position: {
        x: 600,
        y: 6460,
      },
      name: "BattleField",
      id: "a02a3d84-8cdd-430e-a1b7-89313e2742ff",
      edges: ["99f65d75-d425-444e-be8f-6e867b75b47d"],
      area: "BetweenDimensions",
      top: "788dbbf6-9b3b-48bf-a63d-6971c306635c",
    },
    {
      id: "788dbbf6-9b3b-48bf-a63d-6971c306635c",
      name: "TreasureField",
      position: {
        x: 620,
        y: 5980,
      },
      edges: [
        "99f65d75-d425-444e-be8f-6e867b75b47d",
        "29c71810-f2c4-4db2-a476-466957356c5c",
        "87667531-790c-4dc0-8acf-18876a234c1b",
      ],
      area: "Atlantis",
      bottom: "a02a3d84-8cdd-430e-a1b7-89313e2742ff",
      top: "8b1db4d4-1c9e-4043-b13a-3a2323b1468b",
      left: "81ff65cc-5ff7-4da6-a71b-e3c4c310f878",
    },
    {
      id: "8b1db4d4-1c9e-4043-b13a-3a2323b1468b",
      name: "BattleField",
      position: {
        x: 620,
        y: 5140,
      },
      edges: [
        "29c71810-f2c4-4db2-a476-466957356c5c",
        "349e7194-a0db-4819-8052-8ad7031b10f7",
        "956a8e2a-bde3-4998-a46e-b7fef2528acd",
      ],
      area: "Atlantis",
      bottom: "788dbbf6-9b3b-48bf-a63d-6971c306635c",
      left: "9f794350-788c-4d7c-812d-ed11e5b937ac",
      top: "32cd5892-b152-4339-b5af-83b70485e564",
    },
    {
      id: "81ff65cc-5ff7-4da6-a71b-e3c4c310f878",
      name: "MagicBookField",
      position: {
        x: 140,
        y: 6000,
      },
      edges: [
        "87667531-790c-4dc0-8acf-18876a234c1b",
        "115b0408-fd58-466c-80c6-6cc7b452fa92",
      ],
      area: "Atlantis",
      right: "788dbbf6-9b3b-48bf-a63d-6971c306635c",
      top: "ee6b83e4-0da6-42d8-8ef1-7a9b2688e9b1",
    },
    {
      id: "ee6b83e4-0da6-42d8-8ef1-7a9b2688e9b1",
      name: "BattleField",
      position: {
        x: 200,
        y: 5580,
      },
      edges: [
        "115b0408-fd58-466c-80c6-6cc7b452fa92",
        "6f8e610f-96e2-48ba-bf6a-ee202c5cf2ca",
      ],
      area: "Atlantis",
      bottom: "81ff65cc-5ff7-4da6-a71b-e3c4c310f878",
      top: "9f794350-788c-4d7c-812d-ed11e5b937ac",
    },
    {
      id: "9f794350-788c-4d7c-812d-ed11e5b937ac",
      name: "BattleField",
      position: {
        x: 100,
        y: 5140,
      },
      edges: [
        "6f8e610f-96e2-48ba-bf6a-ee202c5cf2ca",
        "349e7194-a0db-4819-8052-8ad7031b10f7",
      ],
      area: "Atlantis",
      bottom: "ee6b83e4-0da6-42d8-8ef1-7a9b2688e9b1",
      right: "8b1db4d4-1c9e-4043-b13a-3a2323b1468b",
    },
    {
      id: "32cd5892-b152-4339-b5af-83b70485e564",
      name: "BattleField",
      position: {
        x: 620,
        y: 4620,
      },
      edges: [
        "956a8e2a-bde3-4998-a46e-b7fef2528acd",
        "23593c6b-3a25-4e2a-a497-62ba5824846b",
      ],
      area: "Atlantis",
      bottom: "8b1db4d4-1c9e-4043-b13a-3a2323b1468b",
      left: "381a4eed-5231-4a6b-be26-db1e02652880",
    },
    {
      id: "381a4eed-5231-4a6b-be26-db1e02652880",
      name: "TreasureField",
      position: {
        x: 100,
        y: 4700,
      },
      edges: [
        "23593c6b-3a25-4e2a-a497-62ba5824846b",
        "2336fe3b-9201-4e89-a592-895a9cf8d665",
      ],
      area: "Atlantis",
      right: "32cd5892-b152-4339-b5af-83b70485e564",
      top: "303ee5a6-eece-44ae-afc8-7718335557b9",
    },
    {
      id: "303ee5a6-eece-44ae-afc8-7718335557b9",
      name: "BattleField",
      position: {
        x: 100,
        y: 4140,
      },
      edges: [
        "2336fe3b-9201-4e89-a592-895a9cf8d665",
        "a83dce42-9726-4437-b330-99129b7df9ff",
      ],
      area: "Atlantis",
      bottom: "381a4eed-5231-4a6b-be26-db1e02652880",
      right: "10ea2781-e45f-4c26-a78d-558282034940",
    },
    {
      id: "10ea2781-e45f-4c26-a78d-558282034940",
      name: "MagicBookField",
      position: {
        x: 620,
        y: 4060,
      },
      edges: [
        "a83dce42-9726-4437-b330-99129b7df9ff",
        "6b8e2dc3-e081-4e0d-bbc5-5129424b06c4",
      ],
      area: "Atlantis",
      left: "303ee5a6-eece-44ae-afc8-7718335557b9",
      top: "f975643e-5103-4e51-a8a0-d9b28aa4b84e",
    },
    {
      id: "f975643e-5103-4e51-a8a0-d9b28aa4b84e",
      name: "BattleField",
      position: {
        x: 500,
        y: 3580,
      },
      edges: [
        "6b8e2dc3-e081-4e0d-bbc5-5129424b06c4",
        "15d809dc-4927-4a49-8789-d145ff2bc9ae",
        "93e9c66e-12d6-43ff-a488-e65e95450dfe",
      ],
      area: "Atlantis",
      bottom: "10ea2781-e45f-4c26-a78d-558282034940",
      right: "963e5820-9dbf-4421-a8af-451686c0b60c",
      top: "639fbf88-6324-4a7c-ae50-115b7e8c6b19",
    },
    {
      id: "963e5820-9dbf-4421-a8af-451686c0b60c",
      name: "BattleField",
      position: {
        x: 1020,
        y: 3500,
      },
      edges: [
        "15d809dc-4927-4a49-8789-d145ff2bc9ae",
        "8a3d5c5d-4753-41d8-a0f7-4654be7391a1",
      ],
      area: "Atlantis",
      left: "f975643e-5103-4e51-a8a0-d9b28aa4b84e",
      top: "65485ce3-8f8a-4ba3-8914-954bcfc226bf",
    },
    {
      id: "65485ce3-8f8a-4ba3-8914-954bcfc226bf",
      name: "TreasureField",
      position: {
        x: 1020,
        y: 3040,
      },
      edges: [
        "8a3d5c5d-4753-41d8-a0f7-4654be7391a1",
        "f99ed172-9b26-45b2-8432-309eea48026a",
      ],
      area: "Atlantis",
      bottom: "963e5820-9dbf-4421-a8af-451686c0b60c",
      top: "8d877751-327c-4936-9ba7-3339a79fd646",
    },
    {
      id: "639fbf88-6324-4a7c-ae50-115b7e8c6b19",
      name: "BattleField",
      position: {
        x: 500,
        y: 2660,
      },
      edges: [
        "93e9c66e-12d6-43ff-a488-e65e95450dfe",
        "773ee7d2-e801-4d14-82bf-efb9ec305798",
        "62b10d26-3871-42f6-9527-1b6eaf605ded",
      ],
      area: "Atlantis",
      bottom: "f975643e-5103-4e51-a8a0-d9b28aa4b84e",
      right: "8d877751-327c-4936-9ba7-3339a79fd646",
      left: "1a1bccfd-7c92-424a-a679-0269dc4c755b",
    },
    {
      id: "8d877751-327c-4936-9ba7-3339a79fd646",
      name: "BattleField",
      position: {
        x: 1020,
        y: 2580,
      },
      edges: [
        "f99ed172-9b26-45b2-8432-309eea48026a",
        "773ee7d2-e801-4d14-82bf-efb9ec305798",
      ],
      area: "Atlantis",
      bottom: "65485ce3-8f8a-4ba3-8914-954bcfc226bf",
      left: "639fbf88-6324-4a7c-ae50-115b7e8c6b19",
    },
    {
      id: "1a1bccfd-7c92-424a-a679-0269dc4c755b",
      name: "BattleField",
      position: {
        x: 40,
        y: 2600,
      },
      edges: [
        "62b10d26-3871-42f6-9527-1b6eaf605ded",
        "bfeac308-a00f-4dfb-a453-e12a52d8d3ac",
      ],
      area: "Atlantis",
      right: "639fbf88-6324-4a7c-ae50-115b7e8c6b19",
      top: "ef04fc2b-cd87-4a8c-ad0e-7832bfed71b0",
    },
    {
      id: "ef04fc2b-cd87-4a8c-ad0e-7832bfed71b0",
      name: "TreasureField",
      position: {
        x: 40,
        y: 1760,
      },
      edges: [
        "bfeac308-a00f-4dfb-a453-e12a52d8d3ac",
        "a204c3ac-a0e5-46ae-bda7-ba6783d269e0",
        "a66c8dd8-fc71-4b5f-af4b-83d9a7381042",
      ],
      area: "Atlantis",
      bottom: "1a1bccfd-7c92-424a-a679-0269dc4c755b",
      right: "15a76267-b66f-4afe-bdf0-9a3fe5a668cc",
      top: "05ebd15b-24db-44fb-a81c-8318a2c522ee",
    },
    {
      id: "15a76267-b66f-4afe-bdf0-9a3fe5a668cc",
      name: "BattleField",
      position: {
        x: 840,
        y: 1740,
      },
      edges: [
        "a204c3ac-a0e5-46ae-bda7-ba6783d269e0",
        "6ec07a69-72b9-496c-ac74-93e41e6f33e4",
      ],
      area: "Atlantis",
      left: "ef04fc2b-cd87-4a8c-ad0e-7832bfed71b0",
      top: "778b7545-6e2c-4e38-a9cb-4fb96e7b86d3",
    },
    {
      id: "05ebd15b-24db-44fb-a81c-8318a2c522ee",
      name: "BattleField",
      position: {
        x: 160,
        y: 1220,
      },
      edges: [
        "a66c8dd8-fc71-4b5f-af4b-83d9a7381042",
        "e14ba4d0-4b02-40b5-bef1-4149249da862",
      ],
      area: "Atlantis",
      bottom: "ef04fc2b-cd87-4a8c-ad0e-7832bfed71b0",
      top: "30886bac-9e3f-4aa8-8805-64d5724de9e8",
    },
    {
      id: "30886bac-9e3f-4aa8-8805-64d5724de9e8",
      name: "BattleField",
      position: {
        x: 40,
        y: 720,
      },
      edges: [
        "e14ba4d0-4b02-40b5-bef1-4149249da862",
        "8af201b3-4f0c-4fd1-b7c7-a9588b6ced4d",
      ],
      area: "Atlantis",
      bottom: "05ebd15b-24db-44fb-a81c-8318a2c522ee",
      right: "778b7545-6e2c-4e38-a9cb-4fb96e7b86d3",
    },
    {
      id: "778b7545-6e2c-4e38-a9cb-4fb96e7b86d3",
      name: "TreasureField",
      position: {
        x: 880,
        y: 660,
      },
      edges: [
        "8af201b3-4f0c-4fd1-b7c7-a9588b6ced4d",
        "6ec07a69-72b9-496c-ac74-93e41e6f33e4",
        "c0d699fc-6b06-4726-98d2-b825d8f4dfcb",
      ],
      area: "Atlantis",
      left: "30886bac-9e3f-4aa8-8805-64d5724de9e8",
      bottom: "15a76267-b66f-4afe-bdf0-9a3fe5a668cc",
      top: "e4fafa13-3c4e-496f-8edb-dbb700c49063",
    },
    {
      id: "e4fafa13-3c4e-496f-8edb-dbb700c49063",
      name: "CaveField",
      position: {
        x: 700,
        y: 40,
      },
      edges: ["c0d699fc-6b06-4726-98d2-b825d8f4dfcb"],
      area: "Atlantis",
      bottom: "778b7545-6e2c-4e38-a9cb-4fb96e7b86d3",
    },
  ],
  edges: [
    {
      start: {
        x: 600,
        y: 6460,
      },
      startId: "a02a3d84-8cdd-430e-a1b7-89313e2742ff",
      end: {
        x: 620,
        y: 5980,
      },
      endId: "788dbbf6-9b3b-48bf-a63d-6971c306635c",
      name: "TwoWayVEdge",
      id: "99f65d75-d425-444e-be8f-6e867b75b47d",
    },
    {
      start: {
        x: 620,
        y: 5980,
      },
      startId: "788dbbf6-9b3b-48bf-a63d-6971c306635c",
      end: {
        x: 620,
        y: 5140,
      },
      endId: "8b1db4d4-1c9e-4043-b13a-3a2323b1468b",
      name: "TwoWayVEdge",
      id: "29c71810-f2c4-4db2-a476-466957356c5c",
    },
    {
      start: {
        x: 620,
        y: 5980,
      },
      startId: "788dbbf6-9b3b-48bf-a63d-6971c306635c",
      end: {
        x: 140,
        y: 6000,
      },
      endId: "81ff65cc-5ff7-4da6-a71b-e3c4c310f878",
      name: "TwoWayHEdge",
      id: "87667531-790c-4dc0-8acf-18876a234c1b",
    },
    {
      start: {
        x: 140,
        y: 6000,
      },
      startId: "81ff65cc-5ff7-4da6-a71b-e3c4c310f878",
      end: {
        x: 200,
        y: 5580,
      },
      endId: "ee6b83e4-0da6-42d8-8ef1-7a9b2688e9b1",
      name: "TwoWayVEdge",
      id: "115b0408-fd58-466c-80c6-6cc7b452fa92",
    },
    {
      start: {
        x: 200,
        y: 5580,
      },
      startId: "ee6b83e4-0da6-42d8-8ef1-7a9b2688e9b1",
      end: {
        x: 100,
        y: 5140,
      },
      endId: "9f794350-788c-4d7c-812d-ed11e5b937ac",
      name: "TwoWayVEdge",
      id: "6f8e610f-96e2-48ba-bf6a-ee202c5cf2ca",
    },
    {
      start: {
        x: 100,
        y: 5140,
      },
      startId: "9f794350-788c-4d7c-812d-ed11e5b937ac",
      end: {
        x: 620,
        y: 5140,
      },
      endId: "8b1db4d4-1c9e-4043-b13a-3a2323b1468b",
      name: "TwoWayHEdge",
      id: "349e7194-a0db-4819-8052-8ad7031b10f7",
    },
    {
      start: {
        x: 620,
        y: 5140,
      },
      startId: "8b1db4d4-1c9e-4043-b13a-3a2323b1468b",
      end: {
        x: 620,
        y: 4620,
      },
      endId: "32cd5892-b152-4339-b5af-83b70485e564",
      name: "TwoWayVEdge",
      id: "956a8e2a-bde3-4998-a46e-b7fef2528acd",
    },
    {
      start: {
        x: 620,
        y: 4620,
      },
      startId: "32cd5892-b152-4339-b5af-83b70485e564",
      end: {
        x: 100,
        y: 4700,
      },
      endId: "381a4eed-5231-4a6b-be26-db1e02652880",
      name: "TwoWayHEdge",
      id: "23593c6b-3a25-4e2a-a497-62ba5824846b",
    },
    {
      start: {
        x: 100,
        y: 4700,
      },
      startId: "381a4eed-5231-4a6b-be26-db1e02652880",
      end: {
        x: 100,
        y: 4140,
      },
      endId: "303ee5a6-eece-44ae-afc8-7718335557b9",
      name: "TwoWayVEdge",
      id: "2336fe3b-9201-4e89-a592-895a9cf8d665",
    },
    {
      start: {
        x: 100,
        y: 4140,
      },
      startId: "303ee5a6-eece-44ae-afc8-7718335557b9",
      end: {
        x: 620,
        y: 4060,
      },
      endId: "10ea2781-e45f-4c26-a78d-558282034940",
      name: "TwoWayHEdge",
      id: "a83dce42-9726-4437-b330-99129b7df9ff",
    },
    {
      start: {
        x: 620,
        y: 4060,
      },
      startId: "10ea2781-e45f-4c26-a78d-558282034940",
      end: {
        x: 500,
        y: 3580,
      },
      endId: "f975643e-5103-4e51-a8a0-d9b28aa4b84e",
      name: "TwoWayVEdge",
      id: "6b8e2dc3-e081-4e0d-bbc5-5129424b06c4",
    },
    {
      start: {
        x: 500,
        y: 3580,
      },
      startId: "f975643e-5103-4e51-a8a0-d9b28aa4b84e",
      end: {
        x: 1020,
        y: 3500,
      },
      endId: "963e5820-9dbf-4421-a8af-451686c0b60c",
      name: "TwoWayHEdge",
      id: "15d809dc-4927-4a49-8789-d145ff2bc9ae",
    },
    {
      start: {
        x: 1020,
        y: 3500,
      },
      startId: "963e5820-9dbf-4421-a8af-451686c0b60c",
      end: {
        x: 1020,
        y: 3040,
      },
      endId: "65485ce3-8f8a-4ba3-8914-954bcfc226bf",
      name: "TwoWayVEdge",
      id: "8a3d5c5d-4753-41d8-a0f7-4654be7391a1",
    },
    {
      start: {
        x: 500,
        y: 3580,
      },
      startId: "f975643e-5103-4e51-a8a0-d9b28aa4b84e",
      end: {
        x: 500,
        y: 2660,
      },
      endId: "639fbf88-6324-4a7c-ae50-115b7e8c6b19",
      name: "TwoWayVEdge",
      id: "93e9c66e-12d6-43ff-a488-e65e95450dfe",
    },
    {
      start: {
        x: 1020,
        y: 3040,
      },
      startId: "65485ce3-8f8a-4ba3-8914-954bcfc226bf",
      end: {
        x: 1020,
        y: 2580,
      },
      endId: "8d877751-327c-4936-9ba7-3339a79fd646",
      name: "TwoWayVEdge",
      id: "f99ed172-9b26-45b2-8432-309eea48026a",
    },
    {
      start: {
        x: 1020,
        y: 2580,
      },
      startId: "8d877751-327c-4936-9ba7-3339a79fd646",
      end: {
        x: 500,
        y: 2660,
      },
      endId: "639fbf88-6324-4a7c-ae50-115b7e8c6b19",
      name: "TwoWayHEdge",
      id: "773ee7d2-e801-4d14-82bf-efb9ec305798",
    },
    {
      start: {
        x: 500,
        y: 2660,
      },
      startId: "639fbf88-6324-4a7c-ae50-115b7e8c6b19",
      end: {
        x: 40,
        y: 2600,
      },
      endId: "1a1bccfd-7c92-424a-a679-0269dc4c755b",
      name: "TwoWayHEdge",
      id: "62b10d26-3871-42f6-9527-1b6eaf605ded",
    },
    {
      start: {
        x: 40,
        y: 2600,
      },
      startId: "1a1bccfd-7c92-424a-a679-0269dc4c755b",
      end: {
        x: 40,
        y: 1760,
      },
      endId: "ef04fc2b-cd87-4a8c-ad0e-7832bfed71b0",
      name: "TwoWayVEdge",
      id: "bfeac308-a00f-4dfb-a453-e12a52d8d3ac",
    },
    {
      start: {
        x: 40,
        y: 1760,
      },
      startId: "ef04fc2b-cd87-4a8c-ad0e-7832bfed71b0",
      end: {
        x: 840,
        y: 1740,
      },
      endId: "15a76267-b66f-4afe-bdf0-9a3fe5a668cc",
      name: "TwoWayHEdge",
      id: "a204c3ac-a0e5-46ae-bda7-ba6783d269e0",
    },
    {
      start: {
        x: 40,
        y: 1760,
      },
      startId: "ef04fc2b-cd87-4a8c-ad0e-7832bfed71b0",
      end: {
        x: 160,
        y: 1220,
      },
      endId: "05ebd15b-24db-44fb-a81c-8318a2c522ee",
      name: "TwoWayVEdge",
      id: "a66c8dd8-fc71-4b5f-af4b-83d9a7381042",
    },
    {
      start: {
        x: 160,
        y: 1220,
      },
      startId: "05ebd15b-24db-44fb-a81c-8318a2c522ee",
      end: {
        x: 40,
        y: 720,
      },
      endId: "30886bac-9e3f-4aa8-8805-64d5724de9e8",
      name: "TwoWayVEdge",
      id: "e14ba4d0-4b02-40b5-bef1-4149249da862",
    },
    {
      start: {
        x: 40,
        y: 720,
      },
      startId: "30886bac-9e3f-4aa8-8805-64d5724de9e8",
      end: {
        x: 880,
        y: 660,
      },
      endId: "778b7545-6e2c-4e38-a9cb-4fb96e7b86d3",
      name: "TwoWayHEdge",
      id: "8af201b3-4f0c-4fd1-b7c7-a9588b6ced4d",
    },
    {
      start: {
        x: 880,
        y: 660,
      },
      startId: "778b7545-6e2c-4e38-a9cb-4fb96e7b86d3",
      end: {
        x: 840,
        y: 1740,
      },
      endId: "15a76267-b66f-4afe-bdf0-9a3fe5a668cc",
      name: "TwoWayVEdge",
      id: "6ec07a69-72b9-496c-ac74-93e41e6f33e4",
    },
    {
      start: {
        x: 880,
        y: 660,
      },
      startId: "778b7545-6e2c-4e38-a9cb-4fb96e7b86d3",
      end: {
        x: 700,
        y: 40,
      },
      endId: "e4fafa13-3c4e-496f-8edb-dbb700c49063",
      name: "TwoWayVEdge",
      id: "c0d699fc-6b06-4726-98d2-b825d8f4dfcb",
    },
  ],
};
export default betweenDimensionsMap;
