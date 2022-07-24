import { Vertex, Edge } from "global";

const europeCaveLibrary: { vertices: Vertex[]; edges: Edge[] } = {
  vertices: [
    {
      area: "EuropeCaveLibrary",
      position: {
        x: -40,
        y: -1100,
      },
      name: "BattleField",
      id: "1716f94f-e9b0-4e2b-bfb0-5c32f171fd84",
      edges: [
        "64d026cf-3201-412e-bbd8-ec82b71b570e",
        "f2bc8d0d-69f9-4fe1-a7c9-c3b3aff9d026",
        "88e05000-75a8-4d8b-92fa-43323b0ab5fa",
      ],
      top: "8f652175-8285-452e-a391-9989fb2b8f18",
      bottom: "2eef6509-902e-4a86-85f0-2acf1249a977",
      left: "f4b90509-c317-4b3d-bc53-ebc5b77cdc91",
    },
    {
      id: "2eef6509-902e-4a86-85f0-2acf1249a977",

      area: "EuropeCaveLibrary",
      name: "MagicField",
      position: {
        x: -40,
        y: -580,
      },
      edges: [
        "f2bc8d0d-69f9-4fe1-a7c9-c3b3aff9d026",
        "6376ca84-c4e8-4b18-a22e-b65b751d32ce",
      ],
      top: "1716f94f-e9b0-4e2b-bfb0-5c32f171fd84",
      bottom: "e8b5ecdf-9f5b-46fd-956e-808c76f0c0ab",
    },
    {
      id: "e8b5ecdf-9f5b-46fd-956e-808c76f0c0ab",

      area: "EuropeCaveLibrary",
      name: "CaveField",
      position: {
        x: -40,
        y: 0,
      },
      edges: ["6376ca84-c4e8-4b18-a22e-b65b751d32ce"],
      top: "2eef6509-902e-4a86-85f0-2acf1249a977",
    },
    {
      id: "8f652175-8285-452e-a391-9989fb2b8f18",

      area: "EuropeCaveLibrary",
      name: "DamageField",
      position: {
        x: -20,
        y: -1680,
      },
      edges: [
        "64d026cf-3201-412e-bbd8-ec82b71b570e",
        "981e0e0f-9f58-4e0d-800c-a25e843e13f1",
      ],
      bottom: "1716f94f-e9b0-4e2b-bfb0-5c32f171fd84",
      right: "cbb4920d-cfa3-47a5-be18-a4252be8a843",
    },
    {
      id: "f4b90509-c317-4b3d-bc53-ebc5b77cdc91",

      area: "EuropeCaveLibrary",
      name: "TreasureField",
      position: {
        x: -560,
        y: -1100,
      },
      edges: [
        "88e05000-75a8-4d8b-92fa-43323b0ab5fa",
        "4209eac2-2e53-415a-b38a-91badf2c60a6",
      ],
      right: "1716f94f-e9b0-4e2b-bfb0-5c32f171fd84",
      left: "33d9f8f2-3af3-42ea-b331-99afaed61f46",
    },
    {
      id: "33d9f8f2-3af3-42ea-b331-99afaed61f46",

      area: "EuropeCaveLibrary",
      name: "BattleField",
      position: {
        x: -1100,
        y: -1100,
      },
      edges: [
        "4209eac2-2e53-415a-b38a-91badf2c60a6",
        "06e9a616-b99d-458a-a3d5-ee6d0ed13c58",
      ],
      right: "f4b90509-c317-4b3d-bc53-ebc5b77cdc91",
      top: "b803ec64-1749-4df5-8155-ff716fa6afcf",
    },
    {
      id: "b803ec64-1749-4df5-8155-ff716fa6afcf",

      area: "EuropeCaveLibrary",
      name: "DamageField",
      position: {
        x: -1060,
        y: -1540,
      },
      edges: [
        "06e9a616-b99d-458a-a3d5-ee6d0ed13c58",
        "2dc4c685-33f7-4785-a234-e1e58267ce19",
      ],
      bottom: "33d9f8f2-3af3-42ea-b331-99afaed61f46",
      top: "db164d66-2138-472f-a7cf-ebe2ac88bb2b",
    },
    {
      id: "db164d66-2138-472f-a7cf-ebe2ac88bb2b",

      area: "EuropeCaveLibrary",
      name: "DamageField",
      position: {
        x: -1120,
        y: -1920,
      },
      edges: [
        "2dc4c685-33f7-4785-a234-e1e58267ce19",
        "887e9ed4-0007-4d42-ac37-17fda2b4fa61",
      ],
      bottom: "b803ec64-1749-4df5-8155-ff716fa6afcf",
      top: "c3e5da6c-7abe-4b94-a109-aadeea884ad9",
    },
    {
      id: "c3e5da6c-7abe-4b94-a109-aadeea884ad9",

      area: "EuropeCaveLibrary",
      name: "CollectMoneyField",
      position: {
        x: -1080,
        y: -2340,
      },
      edges: ["887e9ed4-0007-4d42-ac37-17fda2b4fa61"],
      bottom: "db164d66-2138-472f-a7cf-ebe2ac88bb2b",
    },
    {
      id: "cbb4920d-cfa3-47a5-be18-a4252be8a843",

      area: "EuropeCaveLibrary",
      name: "BattleField",
      position: {
        x: 440,
        y: -1740,
      },
      edges: [
        "981e0e0f-9f58-4e0d-800c-a25e843e13f1",
        "3efcd4c8-3510-4887-bbaf-47a9c0b389d1",
      ],
      left: "8f652175-8285-452e-a391-9989fb2b8f18",
      top: "7248e179-2e3a-4f9c-95f1-94e866df422c",
    },
    {
      id: "7248e179-2e3a-4f9c-95f1-94e866df422c",

      area: "EuropeCaveLibrary",
      name: "DamageField",
      position: {
        x: 460,
        y: -2200,
      },
      edges: [
        "3efcd4c8-3510-4887-bbaf-47a9c0b389d1",
        "69a8804b-1bca-43f3-bf65-bd7449212cec",
        "7406100c-0de9-4885-9939-2fe57193930b",
      ],
      bottom: "cbb4920d-cfa3-47a5-be18-a4252be8a843",
      top: "92270427-0d94-40ec-9b9d-cee4b13c380f",
      right: "9a9f89e6-5e0b-4c17-b735-7c32c140c27b",
    },
    {
      id: "92270427-0d94-40ec-9b9d-cee4b13c380f",

      area: "EuropeCaveLibrary",
      name: "BattleField",
      position: {
        x: 460,
        y: -2960,
      },
      edges: [
        "69a8804b-1bca-43f3-bf65-bd7449212cec",
        "5cfee17a-dd6e-4c5e-a314-dbb5cee75227",
        "78383cec-8b5a-4f21-b736-1fa989294ffb",
      ],
      bottom: "7248e179-2e3a-4f9c-95f1-94e866df422c",
      right: "d338b0e6-a945-4fc9-a31c-0eb036a0d8e1",
      left: "80274b43-0585-4e0f-be23-c8b2068b1e38",
    },
    {
      id: "d338b0e6-a945-4fc9-a31c-0eb036a0d8e1",

      area: "EuropeCaveLibrary",
      name: "DamageField",
      position: {
        x: 880,
        y: -2980,
      },
      edges: [
        "5cfee17a-dd6e-4c5e-a314-dbb5cee75227",
        "7ce4bc75-0b07-4b37-a438-cb65018b29f2",
        "388bad08-2dba-4ed5-b150-cb1a7761e4c7",
      ],
      left: "92270427-0d94-40ec-9b9d-cee4b13c380f",
      bottom: "589bde7b-1afd-4656-9b97-f07991dfa4e2",
      top: "f9ff34e7-f921-4e8d-8f17-8611a145e177",
    },
    {
      id: "589bde7b-1afd-4656-9b97-f07991dfa4e2",

      area: "EuropeCaveLibrary",
      name: "DamageField",
      position: {
        x: 960,
        y: -2580,
      },
      edges: [
        "7ce4bc75-0b07-4b37-a438-cb65018b29f2",
        "133ba471-1e1d-435a-aaf5-294bc33da4e5",
      ],
      top: "d338b0e6-a945-4fc9-a31c-0eb036a0d8e1",
      bottom: "9a9f89e6-5e0b-4c17-b735-7c32c140c27b",
    },
    {
      id: "9a9f89e6-5e0b-4c17-b735-7c32c140c27b",

      area: "EuropeCaveLibrary",
      name: "TreasureField",
      position: {
        x: 940,
        y: -2160,
      },
      edges: [
        "133ba471-1e1d-435a-aaf5-294bc33da4e5",
        "7406100c-0de9-4885-9939-2fe57193930b",
      ],
      top: "589bde7b-1afd-4656-9b97-f07991dfa4e2",
      left: "7248e179-2e3a-4f9c-95f1-94e866df422c",
    },
    {
      id: "f9ff34e7-f921-4e8d-8f17-8611a145e177",

      area: "EuropeCaveLibrary",
      name: "DamageField",
      position: {
        x: 880,
        y: -3420,
      },
      edges: [
        "388bad08-2dba-4ed5-b150-cb1a7761e4c7",
        "87386ca7-9b31-45f6-846e-bbe4cc94d1e0",
      ],
      bottom: "d338b0e6-a945-4fc9-a31c-0eb036a0d8e1",
      top: "1e8b5056-8581-4eda-bf93-3a04e97de84e",
    },
    {
      id: "1e8b5056-8581-4eda-bf93-3a04e97de84e",

      area: "EuropeCaveLibrary",
      name: "TreasureField",
      position: {
        x: 880,
        y: -3840,
      },
      edges: [
        "87386ca7-9b31-45f6-846e-bbe4cc94d1e0",
        "a4666a70-83ae-4857-a795-91482a29d907",
      ],
      bottom: "f9ff34e7-f921-4e8d-8f17-8611a145e177",
      left: "c24af123-4402-4f4b-962d-84d0e8d47283",
    },
    {
      id: "c24af123-4402-4f4b-962d-84d0e8d47283",

      area: "EuropeCaveLibrary",
      name: "DamageField",
      position: {
        x: 420,
        y: -3840,
      },
      edges: [
        "a4666a70-83ae-4857-a795-91482a29d907",
        "9a6405ac-b51e-4bc8-bdcb-75605defdf79",
      ],
      right: "1e8b5056-8581-4eda-bf93-3a04e97de84e",
      left: "e8bb5a02-c985-4fc6-afe2-336ed67a2bc1",
    },
    {
      id: "e8bb5a02-c985-4fc6-afe2-336ed67a2bc1",

      area: "EuropeCaveLibrary",
      name: "BattleField",
      position: {
        x: -40,
        y: -3840,
      },
      edges: [
        "9a6405ac-b51e-4bc8-bdcb-75605defdf79",
        "bf58eac3-0cab-4523-912c-f36ac7f66c72",
      ],
      right: "c24af123-4402-4f4b-962d-84d0e8d47283",
      left: "7807e3da-632c-4a5a-af6f-4a330d510d1c",
    },
    {
      id: "7807e3da-632c-4a5a-af6f-4a330d510d1c",

      area: "EuropeCaveLibrary",
      name: "BattleField",
      position: {
        x: -520,
        y: -3840,
      },
      edges: ["bf58eac3-0cab-4523-912c-f36ac7f66c72"],
      right: "e8bb5a02-c985-4fc6-afe2-336ed67a2bc1",
    },
    {
      id: "80274b43-0585-4e0f-be23-c8b2068b1e38",

      area: "EuropeCaveLibrary",
      name: "GoldTreasureField",
      position: {
        x: 0,
        y: -2960,
      },
      edges: [
        "78383cec-8b5a-4f21-b736-1fa989294ffb",
        "461038ad-e30a-49a5-97d3-548bd3ddaa70",
        "82c6dc12-9b8c-40ae-98e4-239c2b50981a",
        "097e858e-1c6c-429c-a2e4-c5619482fe08",
      ],
      right: "92270427-0d94-40ec-9b9d-cee4b13c380f",
      top: "127b7953-73ff-4d8a-882e-4f39d4de7fa4",
      left: "3cf1bc16-4382-4755-880f-c10380e86b3c",
      bottom: "9de0fe76-b712-4c3d-a732-de9b3f3c5f2f",
    },
    {
      id: "9de0fe76-b712-4c3d-a732-de9b3f3c5f2f",

      area: "EuropeCaveLibrary",
      name: "BattleField",
      position: {
        x: -40,
        y: -2580,
      },
      edges: [
        "097e858e-1c6c-429c-a2e4-c5619482fe08",
        "e04a096e-0dc7-4aae-9e2e-8e12fb7e9956",
      ],
      top: "80274b43-0585-4e0f-be23-c8b2068b1e38",
      bottom: "3bedffcf-365f-4a35-ad5c-e78b91d3524d",
    },
    {
      id: "3bedffcf-365f-4a35-ad5c-e78b91d3524d",

      area: "EuropeCaveLibrary",
      name: "RedTreasureField",
      position: {
        x: 20,
        y: -2200,
      },
      edges: [
        "e04a096e-0dc7-4aae-9e2e-8e12fb7e9956",
        "236341a2-5782-4992-ae76-3334776f2076",
      ],
      top: "9de0fe76-b712-4c3d-a732-de9b3f3c5f2f",
      left: "842f7fe9-db31-490f-b782-29a896c20052",
    },
    {
      id: "842f7fe9-db31-490f-b782-29a896c20052",

      area: "EuropeCaveLibrary",
      name: "BattleField",
      position: {
        x: -460,
        y: -2220,
      },
      edges: [
        "236341a2-5782-4992-ae76-3334776f2076",
        "63a21755-9418-42de-aac1-cd59df98eafa",
      ],
      right: "3bedffcf-365f-4a35-ad5c-e78b91d3524d",
      top: "3cf1bc16-4382-4755-880f-c10380e86b3c",
    },
    {
      id: "3cf1bc16-4382-4755-880f-c10380e86b3c",

      area: "EuropeCaveLibrary",
      name: "BattleField",
      position: {
        x: -440,
        y: -2920,
      },
      edges: [
        "63a21755-9418-42de-aac1-cd59df98eafa",
        "82c6dc12-9b8c-40ae-98e4-239c2b50981a",
        "42a2fb34-fcc3-4ff8-8536-c31831ec409b",
      ],
      bottom: "842f7fe9-db31-490f-b782-29a896c20052",
      right: "80274b43-0585-4e0f-be23-c8b2068b1e38",
      left: "a812fdc7-b14c-4519-b768-739498b15021",
    },
    {
      id: "127b7953-73ff-4d8a-882e-4f39d4de7fa4",

      area: "EuropeCaveLibrary",
      name: "BattleField",
      position: {
        x: -80,
        y: -3360,
      },
      edges: [
        "461038ad-e30a-49a5-97d3-548bd3ddaa70",
        "d56fb75c-3422-43ca-85f1-c5751469a078",
      ],
      bottom: "80274b43-0585-4e0f-be23-c8b2068b1e38",
      left: "5958b669-eaeb-4f7c-88b9-a033d880543d",
    },
    {
      id: "5958b669-eaeb-4f7c-88b9-a033d880543d",

      area: "EuropeCaveLibrary",
      name: "BattleField",
      position: {
        x: -820,
        y: -3360,
      },
      edges: [
        "d56fb75c-3422-43ca-85f1-c5751469a078",
        "bfc0919e-66a1-45d3-a37c-7134d42e899c",
      ],
      right: "127b7953-73ff-4d8a-882e-4f39d4de7fa4",
      bottom: "a812fdc7-b14c-4519-b768-739498b15021",
    },
    {
      id: "a812fdc7-b14c-4519-b768-739498b15021",

      area: "EuropeCaveLibrary",
      name: "TreasureField",
      position: {
        x: -900,
        y: -2940,
      },
      edges: [
        "bfc0919e-66a1-45d3-a37c-7134d42e899c",
        "42a2fb34-fcc3-4ff8-8536-c31831ec409b",
      ],
      top: "5958b669-eaeb-4f7c-88b9-a033d880543d",
      right: "3cf1bc16-4382-4755-880f-c10380e86b3c",
    },
  ],
  edges: [
    {
      start: {
        x: -40,
        y: -1100,
      },
      startId: "1716f94f-e9b0-4e2b-bfb0-5c32f171fd84",
      end: {
        x: -20,
        y: -1680,
      },
      endId: "8f652175-8285-452e-a391-9989fb2b8f18",
      name: "TwoWayVEdge",
      id: "64d026cf-3201-412e-bbd8-ec82b71b570e",
    },
    {
      start: {
        x: -40,
        y: -1100,
      },
      startId: "1716f94f-e9b0-4e2b-bfb0-5c32f171fd84",
      end: {
        x: -40,
        y: -580,
      },
      endId: "2eef6509-902e-4a86-85f0-2acf1249a977",
      name: "TwoWayVEdge",
      id: "f2bc8d0d-69f9-4fe1-a7c9-c3b3aff9d026",
    },
    {
      start: {
        x: -40,
        y: -580,
      },
      startId: "2eef6509-902e-4a86-85f0-2acf1249a977",
      end: {
        x: -40,
        y: 0,
      },
      endId: "e8b5ecdf-9f5b-46fd-956e-808c76f0c0ab",
      name: "TwoWayVEdge",
      id: "6376ca84-c4e8-4b18-a22e-b65b751d32ce",
    },
    {
      start: {
        x: -40,
        y: -1100,
      },
      startId: "1716f94f-e9b0-4e2b-bfb0-5c32f171fd84",
      end: {
        x: -560,
        y: -1100,
      },
      endId: "f4b90509-c317-4b3d-bc53-ebc5b77cdc91",
      name: "TwoWayHEdge",
      id: "88e05000-75a8-4d8b-92fa-43323b0ab5fa",
    },
    {
      start: {
        x: -560,
        y: -1100,
      },
      startId: "f4b90509-c317-4b3d-bc53-ebc5b77cdc91",
      end: {
        x: -1100,
        y: -1100,
      },
      endId: "33d9f8f2-3af3-42ea-b331-99afaed61f46",
      name: "TwoWayHEdge",
      id: "4209eac2-2e53-415a-b38a-91badf2c60a6",
    },
    {
      start: {
        x: -1100,
        y: -1100,
      },
      startId: "33d9f8f2-3af3-42ea-b331-99afaed61f46",
      end: {
        x: -1060,
        y: -1540,
      },
      endId: "b803ec64-1749-4df5-8155-ff716fa6afcf",
      name: "TwoWayVEdge",
      id: "06e9a616-b99d-458a-a3d5-ee6d0ed13c58",
    },
    {
      start: {
        x: -1060,
        y: -1540,
      },
      startId: "b803ec64-1749-4df5-8155-ff716fa6afcf",
      end: {
        x: -1120,
        y: -1920,
      },
      endId: "db164d66-2138-472f-a7cf-ebe2ac88bb2b",
      name: "TwoWayVEdge",
      id: "2dc4c685-33f7-4785-a234-e1e58267ce19",
    },
    {
      start: {
        x: -1120,
        y: -1920,
      },
      startId: "db164d66-2138-472f-a7cf-ebe2ac88bb2b",
      end: {
        x: -1080,
        y: -2340,
      },
      endId: "c3e5da6c-7abe-4b94-a109-aadeea884ad9",
      name: "TwoWayVEdge",
      id: "887e9ed4-0007-4d42-ac37-17fda2b4fa61",
    },
    {
      start: {
        x: -20,
        y: -1680,
      },
      startId: "8f652175-8285-452e-a391-9989fb2b8f18",
      end: {
        x: 440,
        y: -1740,
      },
      endId: "cbb4920d-cfa3-47a5-be18-a4252be8a843",
      name: "TwoWayHEdge",
      id: "981e0e0f-9f58-4e0d-800c-a25e843e13f1",
    },
    {
      start: {
        x: 440,
        y: -1740,
      },
      startId: "cbb4920d-cfa3-47a5-be18-a4252be8a843",
      end: {
        x: 460,
        y: -2200,
      },
      endId: "7248e179-2e3a-4f9c-95f1-94e866df422c",
      name: "TwoWayVEdge",
      id: "3efcd4c8-3510-4887-bbaf-47a9c0b389d1",
    },
    {
      start: {
        x: 460,
        y: -2200,
      },
      startId: "7248e179-2e3a-4f9c-95f1-94e866df422c",
      end: {
        x: 460,
        y: -2960,
      },
      endId: "92270427-0d94-40ec-9b9d-cee4b13c380f",
      name: "TwoWayVEdge",
      id: "69a8804b-1bca-43f3-bf65-bd7449212cec",
    },
    {
      start: {
        x: 460,
        y: -2960,
      },
      startId: "92270427-0d94-40ec-9b9d-cee4b13c380f",
      end: {
        x: 880,
        y: -2980,
      },
      endId: "d338b0e6-a945-4fc9-a31c-0eb036a0d8e1",
      name: "TwoWayHEdge",
      id: "5cfee17a-dd6e-4c5e-a314-dbb5cee75227",
    },
    {
      start: {
        x: 880,
        y: -2980,
      },
      startId: "d338b0e6-a945-4fc9-a31c-0eb036a0d8e1",
      end: {
        x: 960,
        y: -2580,
      },
      endId: "589bde7b-1afd-4656-9b97-f07991dfa4e2",
      name: "TwoWayVEdge",
      id: "7ce4bc75-0b07-4b37-a438-cb65018b29f2",
    },
    {
      start: {
        x: 960,
        y: -2580,
      },
      startId: "589bde7b-1afd-4656-9b97-f07991dfa4e2",
      end: {
        x: 940,
        y: -2160,
      },
      endId: "9a9f89e6-5e0b-4c17-b735-7c32c140c27b",
      name: "TwoWayVEdge",
      id: "133ba471-1e1d-435a-aaf5-294bc33da4e5",
    },
    {
      start: {
        x: 460,
        y: -2200,
      },
      startId: "7248e179-2e3a-4f9c-95f1-94e866df422c",
      end: {
        x: 940,
        y: -2160,
      },
      endId: "9a9f89e6-5e0b-4c17-b735-7c32c140c27b",
      name: "TwoWayHEdge",
      id: "7406100c-0de9-4885-9939-2fe57193930b",
    },
    {
      start: {
        x: 880,
        y: -2980,
      },
      startId: "d338b0e6-a945-4fc9-a31c-0eb036a0d8e1",
      end: {
        x: 880,
        y: -3420,
      },
      endId: "f9ff34e7-f921-4e8d-8f17-8611a145e177",
      name: "TwoWayVEdge",
      id: "388bad08-2dba-4ed5-b150-cb1a7761e4c7",
    },
    {
      start: {
        x: 880,
        y: -3420,
      },
      startId: "f9ff34e7-f921-4e8d-8f17-8611a145e177",
      end: {
        x: 880,
        y: -3840,
      },
      endId: "1e8b5056-8581-4eda-bf93-3a04e97de84e",
      name: "TwoWayVEdge",
      id: "87386ca7-9b31-45f6-846e-bbe4cc94d1e0",
    },
    {
      start: {
        x: 880,
        y: -3840,
      },
      startId: "1e8b5056-8581-4eda-bf93-3a04e97de84e",
      end: {
        x: 420,
        y: -3840,
      },
      endId: "c24af123-4402-4f4b-962d-84d0e8d47283",
      name: "TwoWayHEdge",
      id: "a4666a70-83ae-4857-a795-91482a29d907",
    },
    {
      start: {
        x: 420,
        y: -3840,
      },
      startId: "c24af123-4402-4f4b-962d-84d0e8d47283",
      end: {
        x: -40,
        y: -3840,
      },
      endId: "e8bb5a02-c985-4fc6-afe2-336ed67a2bc1",
      name: "TwoWayHEdge",
      id: "9a6405ac-b51e-4bc8-bdcb-75605defdf79",
    },
    {
      start: {
        x: -40,
        y: -3840,
      },
      startId: "e8bb5a02-c985-4fc6-afe2-336ed67a2bc1",
      end: {
        x: -520,
        y: -3840,
      },
      endId: "7807e3da-632c-4a5a-af6f-4a330d510d1c",
      name: "TwoWayHEdge",
      id: "bf58eac3-0cab-4523-912c-f36ac7f66c72",
    },
    {
      start: {
        x: 460,
        y: -2960,
      },
      startId: "92270427-0d94-40ec-9b9d-cee4b13c380f",
      end: {
        x: 0,
        y: -2960,
      },
      endId: "80274b43-0585-4e0f-be23-c8b2068b1e38",
      name: "TwoWayHEdge",
      id: "78383cec-8b5a-4f21-b736-1fa989294ffb",
    },
    {
      start: {
        x: 0,
        y: -2960,
      },
      startId: "80274b43-0585-4e0f-be23-c8b2068b1e38",
      end: {
        x: -80,
        y: -3360,
      },
      endId: "127b7953-73ff-4d8a-882e-4f39d4de7fa4",
      name: "TwoWayVEdge",
      id: "461038ad-e30a-49a5-97d3-548bd3ddaa70",
    },
    {
      start: {
        x: 0,
        y: -2960,
      },
      startId: "80274b43-0585-4e0f-be23-c8b2068b1e38",
      end: {
        x: -440,
        y: -2920,
      },
      endId: "3cf1bc16-4382-4755-880f-c10380e86b3c",
      name: "TwoWayHEdge",
      id: "82c6dc12-9b8c-40ae-98e4-239c2b50981a",
    },
    {
      start: {
        x: 0,
        y: -2960,
      },
      startId: "80274b43-0585-4e0f-be23-c8b2068b1e38",
      end: {
        x: -40,
        y: -2580,
      },
      endId: "9de0fe76-b712-4c3d-a732-de9b3f3c5f2f",
      name: "TwoWayVEdge",
      id: "097e858e-1c6c-429c-a2e4-c5619482fe08",
    },
    {
      start: {
        x: -40,
        y: -2580,
      },
      startId: "9de0fe76-b712-4c3d-a732-de9b3f3c5f2f",
      end: {
        x: 20,
        y: -2200,
      },
      endId: "3bedffcf-365f-4a35-ad5c-e78b91d3524d",
      name: "TwoWayVEdge",
      id: "e04a096e-0dc7-4aae-9e2e-8e12fb7e9956",
    },
    {
      start: {
        x: 20,
        y: -2200,
      },
      startId: "3bedffcf-365f-4a35-ad5c-e78b91d3524d",
      end: {
        x: -460,
        y: -2220,
      },
      endId: "842f7fe9-db31-490f-b782-29a896c20052",
      name: "TwoWayHEdge",
      id: "236341a2-5782-4992-ae76-3334776f2076",
    },
    {
      start: {
        x: -460,
        y: -2220,
      },
      startId: "842f7fe9-db31-490f-b782-29a896c20052",
      end: {
        x: -440,
        y: -2920,
      },
      endId: "3cf1bc16-4382-4755-880f-c10380e86b3c",
      name: "TwoWayVEdge",
      id: "63a21755-9418-42de-aac1-cd59df98eafa",
    },
    {
      start: {
        x: -80,
        y: -3360,
      },
      startId: "127b7953-73ff-4d8a-882e-4f39d4de7fa4",
      end: {
        x: -820,
        y: -3360,
      },
      endId: "5958b669-eaeb-4f7c-88b9-a033d880543d",
      name: "TwoWayHEdge",
      id: "d56fb75c-3422-43ca-85f1-c5751469a078",
    },
    {
      start: {
        x: -820,
        y: -3360,
      },
      startId: "5958b669-eaeb-4f7c-88b9-a033d880543d",
      end: {
        x: -900,
        y: -2940,
      },
      endId: "a812fdc7-b14c-4519-b768-739498b15021",
      name: "TwoWayVEdge",
      id: "bfc0919e-66a1-45d3-a37c-7134d42e899c",
    },
    {
      start: {
        x: -900,
        y: -2940,
      },
      startId: "a812fdc7-b14c-4519-b768-739498b15021",
      end: {
        x: -440,
        y: -2920,
      },
      endId: "3cf1bc16-4382-4755-880f-c10380e86b3c",
      name: "TwoWayHEdge",
      id: "42a2fb34-fcc3-4ff8-8536-c31831ec409b",
    },
  ],
};
export default europeCaveLibrary;
