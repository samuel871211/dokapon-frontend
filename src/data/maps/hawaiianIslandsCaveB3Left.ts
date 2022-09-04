import { Vertex, Edge } from "global";

const hawaiianIslandsCaveB3Left: { vertices: Vertex[]; edges: Edge[] } = {
  vertices: [
    {
      area: "HawaiianIslandsCaveB3Left",
      position: {
        x: 0,
        y: 20,
      },
      name: "BattleField",
      id: "6a60042d-e15c-4b14-b831-2a0bae22fbca",
      edges: [
        "562443f5-0963-433a-966c-d5be287f80a8",
        "68b1e458-de3a-49b8-aced-867e63e14c2e",
        "7ef8b283-49d0-4e4b-8cd7-876d6ae7130a",
      ],
      top: "66c28e4b-44a6-4943-bd09-5ad445717eca",
      right: "bbd1bd51-947e-430e-831f-da6632218956",
      left: "0cfd3322-6a1a-49e6-a4a3-1a74a58c16d3",
    },
    {
      id: "66c28e4b-44a6-4943-bd09-5ad445717eca",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: 0,
        y: -780,
      },
      edges: [
        "562443f5-0963-433a-966c-d5be287f80a8",
        "94d81738-b46c-4267-b318-449bcee74a52",
      ],
      bottom: "6a60042d-e15c-4b14-b831-2a0bae22fbca",
      right: "29b5210d-4700-406e-abe5-5df20af0d21d",
    },
    {
      id: "bbd1bd51-947e-430e-831f-da6632218956",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: 540,
        y: 20,
      },
      edges: [
        "68b1e458-de3a-49b8-aced-867e63e14c2e",
        "00a6a349-2888-43be-991c-eaf9e734bc5e",
      ],
      left: "6a60042d-e15c-4b14-b831-2a0bae22fbca",
      top: "8155ec2b-f254-4fb5-9ff7-94f5e74345c6",
    },
    {
      id: "29b5210d-4700-406e-abe5-5df20af0d21d",

      area: "HawaiianIslandsCaveB3Left",
      name: "DamageField",
      position: {
        x: 540,
        y: -780,
      },
      edges: [
        "94d81738-b46c-4267-b318-449bcee74a52",
        "b980006c-0e23-418d-85a6-977b0b0ae828",
        "b45b8fcf-8792-4c0f-b2ae-f908b547e76b",
      ],
      left: "66c28e4b-44a6-4943-bd09-5ad445717eca",
      bottom: "8155ec2b-f254-4fb5-9ff7-94f5e74345c6",
      top: "60de19cd-764b-4e63-82c2-67c3e4889a92",
    },
    {
      id: "8155ec2b-f254-4fb5-9ff7-94f5e74345c6",

      area: "HawaiianIslandsCaveB3Left",
      name: "MagicBookField",
      position: {
        x: 640,
        y: -380,
      },
      edges: [
        "b980006c-0e23-418d-85a6-977b0b0ae828",
        "00a6a349-2888-43be-991c-eaf9e734bc5e",
      ],
      top: "29b5210d-4700-406e-abe5-5df20af0d21d",
      bottom: "bbd1bd51-947e-430e-831f-da6632218956",
    },
    {
      id: "0cfd3322-6a1a-49e6-a4a3-1a74a58c16d3",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -520,
        y: 40,
      },
      edges: [
        "7ef8b283-49d0-4e4b-8cd7-876d6ae7130a",
        "4db26d29-1ae8-4a7b-9f73-8e96872aecd9",
      ],
      right: "6a60042d-e15c-4b14-b831-2a0bae22fbca",
      left: "465aecae-9cb9-4ca5-bec8-667e9cf9c352",
    },
    {
      id: "465aecae-9cb9-4ca5-bec8-667e9cf9c352",

      area: "HawaiianIslandsCaveB3Left",
      name: "DamageField",
      position: {
        x: -1060,
        y: 0,
      },
      edges: [
        "4db26d29-1ae8-4a7b-9f73-8e96872aecd9",
        "b315625e-de8c-4aa5-91cc-58fbbe505006",
      ],
      right: "0cfd3322-6a1a-49e6-a4a3-1a74a58c16d3",
      bottom: "7a805c29-acec-4c12-9de4-a841a08e3a9b",
    },
    {
      id: "7a805c29-acec-4c12-9de4-a841a08e3a9b",

      area: "HawaiianIslandsCaveB3Left",
      name: "CaveField",
      position: {
        x: -1100,
        y: 520,
      },
      edges: ["b315625e-de8c-4aa5-91cc-58fbbe505006"],
      top: "465aecae-9cb9-4ca5-bec8-667e9cf9c352",
    },
    {
      id: "60de19cd-764b-4e63-82c2-67c3e4889a92",

      area: "HawaiianIslandsCaveB3Left",
      name: "DamageField",
      position: {
        x: 580,
        y: -1340,
      },
      edges: [
        "b45b8fcf-8792-4c0f-b2ae-f908b547e76b",
        "5b79facc-a9b4-4b99-a657-05f55561427a",
      ],
      bottom: "29b5210d-4700-406e-abe5-5df20af0d21d",
      top: "57e9e587-21c0-4cdc-a07a-c18d2ca4e09f",
    },
    {
      id: "57e9e587-21c0-4cdc-a07a-c18d2ca4e09f",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: 540,
        y: -1860,
      },
      edges: [
        "5b79facc-a9b4-4b99-a657-05f55561427a",
        "8787695e-00eb-41dc-9660-666886f38408",
      ],
      bottom: "60de19cd-764b-4e63-82c2-67c3e4889a92",
      left: "cd3507d7-6613-4492-a645-322630a7b578",
    },
    {
      id: "cd3507d7-6613-4492-a645-322630a7b578",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: 0,
        y: -1860,
      },
      edges: [
        "8787695e-00eb-41dc-9660-666886f38408",
        "5f03d74f-02f3-491d-84c0-a5aeaee5ae1b",
      ],
      right: "57e9e587-21c0-4cdc-a07a-c18d2ca4e09f",
      left: "b2ed744b-01df-470e-907e-a1547f71d9a5",
    },
    {
      id: "b2ed744b-01df-470e-907e-a1547f71d9a5",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -520,
        y: -1860,
      },
      edges: [
        "5f03d74f-02f3-491d-84c0-a5aeaee5ae1b",
        "311d931c-2a93-41f7-b4e6-2494e9db8279",
      ],
      right: "cd3507d7-6613-4492-a645-322630a7b578",
      left: "699cd32b-51c9-4830-97ff-067530534003",
    },
    {
      id: "699cd32b-51c9-4830-97ff-067530534003",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -1080,
        y: -1860,
      },
      edges: [
        "311d931c-2a93-41f7-b4e6-2494e9db8279",
        "9d9c28be-c53c-431f-a98e-f230813961bf",
      ],
      right: "b2ed744b-01df-470e-907e-a1547f71d9a5",
      left: "5b996246-7a45-457b-9954-e7ee6825c51a",
    },
    {
      id: "5b996246-7a45-457b-9954-e7ee6825c51a",

      area: "HawaiianIslandsCaveB3Left",
      name: "RedTreasureField",
      position: {
        x: -1660,
        y: -1860,
      },
      edges: [
        "9d9c28be-c53c-431f-a98e-f230813961bf",
        "5546eb2e-e639-46d4-9e0e-45a2cee57f36",
      ],
      right: "699cd32b-51c9-4830-97ff-067530534003",
      bottom: "82fb537d-cf0d-48bf-aa12-a6adb8c9a6a9",
    },
    {
      id: "82fb537d-cf0d-48bf-aa12-a6adb8c9a6a9",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -1660,
        y: -1360,
      },
      edges: [
        "5546eb2e-e639-46d4-9e0e-45a2cee57f36",
        "01f86005-6294-492a-9bd1-940a0efbfe8e",
      ],
      top: "5b996246-7a45-457b-9954-e7ee6825c51a",
      bottom: "7d501b23-f97d-4faa-be48-603009655c83",
    },
    {
      id: "7d501b23-f97d-4faa-be48-603009655c83",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -1660,
        y: -800,
      },
      edges: [
        "01f86005-6294-492a-9bd1-940a0efbfe8e",
        "3bdfe786-bde8-4385-856b-1239a0c5cd45",
      ],
      top: "82fb537d-cf0d-48bf-aa12-a6adb8c9a6a9",
      bottom: "e4037893-61f6-4dd3-94a0-75d3ec624c86",
    },
    {
      id: "e4037893-61f6-4dd3-94a0-75d3ec624c86",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -1660,
        y: -400,
      },
      edges: [
        "3bdfe786-bde8-4385-856b-1239a0c5cd45",
        "e1ef1ee0-36fc-427d-9042-a70b0f50bf9e",
      ],
      top: "7d501b23-f97d-4faa-be48-603009655c83",
      right: "5d37c170-2a53-4aeb-8333-b1fc6666e14a",
    },
    {
      id: "5d37c170-2a53-4aeb-8333-b1fc6666e14a",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -1160,
        y: -400,
      },
      edges: [
        "e1ef1ee0-36fc-427d-9042-a70b0f50bf9e",
        "d9c6ea60-6a8b-4477-b945-b54438c4f34b",
      ],
      left: "e4037893-61f6-4dd3-94a0-75d3ec624c86",
      top: "648cee56-fc1b-488c-8b79-11511e2a813e",
    },
    {
      id: "648cee56-fc1b-488c-8b79-11511e2a813e",

      area: "HawaiianIslandsCaveB3Left",
      name: "KeyTreasureField",
      position: {
        x: -1160,
        y: -800,
      },
      edges: ["d9c6ea60-6a8b-4477-b945-b54438c4f34b"],
      bottom: "5d37c170-2a53-4aeb-8333-b1fc6666e14a",
    },
    {
      id: "a2620028-72cc-4f87-8f3c-aa2d1a3c979d",

      area: "HawaiianIslandsCaveB3Left",
      name: "CaveField",
      position: {
        x: -2860,
        y: -240,
      },
      edges: ["a8da45ce-4a5c-4ceb-9278-56bcb35a90a6"],
      top: "dac2cf66-aeb1-4b1e-bab4-c52819fedc7b",
    },
    {
      id: "dac2cf66-aeb1-4b1e-bab4-c52819fedc7b",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -2800,
        y: -820,
      },
      edges: [
        "a8da45ce-4a5c-4ceb-9278-56bcb35a90a6",
        "92f90440-5fe0-4e83-8312-34b5548c025e",
      ],
      bottom: "a2620028-72cc-4f87-8f3c-aa2d1a3c979d",
      top: "19eeb4ab-7652-489f-93fe-47c6d4d63894",
    },
    {
      id: "19eeb4ab-7652-489f-93fe-47c6d4d63894",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -2860,
        y: -1340,
      },
      edges: [
        "92f90440-5fe0-4e83-8312-34b5548c025e",
        "5a078390-0bb3-4be5-851f-3f279f455745",
      ],
      bottom: "dac2cf66-aeb1-4b1e-bab4-c52819fedc7b",
      top: "9d74f747-5d17-4e3d-ab9a-4709640a3ada",
    },
    {
      id: "9d74f747-5d17-4e3d-ab9a-4709640a3ada",

      area: "HawaiianIslandsCaveB3Left",
      name: "WhiteTreasureField",
      position: {
        x: -2800,
        y: -1860,
      },
      edges: [
        "5a078390-0bb3-4be5-851f-3f279f455745",
        "a8e331ec-5c95-4e5a-b207-9f19eb09f143",
      ],
      bottom: "19eeb4ab-7652-489f-93fe-47c6d4d63894",
      top: "8790ddd7-c569-45d6-aa35-30f869e08047",
    },
    {
      id: "8790ddd7-c569-45d6-aa35-30f869e08047",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -2840,
        y: -2340,
      },
      edges: [
        "a8e331ec-5c95-4e5a-b207-9f19eb09f143",
        "2f31a345-7b3f-4b0c-b24c-f67ecdc7b70e",
      ],
      bottom: "9d74f747-5d17-4e3d-ab9a-4709640a3ada",
      top: "454bb599-5f59-4d87-b6f6-4604b8d4a08f",
    },
    {
      id: "454bb599-5f59-4d87-b6f6-4604b8d4a08f",

      area: "HawaiianIslandsCaveB3Left",
      name: "MagicBookField",
      position: {
        x: -2780,
        y: -2880,
      },
      edges: [
        "2f31a345-7b3f-4b0c-b24c-f67ecdc7b70e",
        "eb85fbf1-f7e0-49f5-b32a-cc4e440b88c3",
      ],
      bottom: "8790ddd7-c569-45d6-aa35-30f869e08047",
      top: "4e6b4997-f2db-4e2f-a868-22ca899c7b5e",
    },
    {
      id: "4e6b4997-f2db-4e2f-a868-22ca899c7b5e",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -2840,
        y: -3600,
      },
      edges: [
        "eb85fbf1-f7e0-49f5-b32a-cc4e440b88c3",
        "2f1d3dcc-56d0-45e6-a9d5-732e1ea6fcbf",
      ],
      bottom: "454bb599-5f59-4d87-b6f6-4604b8d4a08f",
      top: "88a3239d-207f-4faa-b629-8726b6b111eb",
    },
    {
      id: "88a3239d-207f-4faa-b629-8726b6b111eb",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -2760,
        y: -4280,
      },
      edges: [
        "2f1d3dcc-56d0-45e6-a9d5-732e1ea6fcbf",
        "5dd6b989-54ca-4a9f-a63e-2318294c4aaf",
        "2194daea-0105-4813-a3c1-e0d2c4980774",
      ],
      bottom: "4e6b4997-f2db-4e2f-a868-22ca899c7b5e",
      right: "1c654070-7c2a-4a44-9374-32bb944d37ff",
      left: "19f3cc42-b45f-44c2-b5b3-8533980d06dc",
    },
    {
      id: "1c654070-7c2a-4a44-9374-32bb944d37ff",

      area: "HawaiianIslandsCaveB3Left",
      name: "DamageField",
      position: {
        x: -2220,
        y: -4300,
      },
      edges: [
        "5dd6b989-54ca-4a9f-a63e-2318294c4aaf",
        "7b3ee597-e951-445a-a026-95662334285f",
      ],
      left: "88a3239d-207f-4faa-b629-8726b6b111eb",
      right: "aa7a7985-9489-4f4f-b906-2dfbb836e327",
    },
    {
      id: "aa7a7985-9489-4f4f-b906-2dfbb836e327",

      area: "HawaiianIslandsCaveB3Left",
      name: "DamageField",
      position: {
        x: -1700,
        y: -4260,
      },
      edges: [
        "7b3ee597-e951-445a-a026-95662334285f",
        "f0e78fd9-66ba-4a5e-bf1a-0a2cef67e335",
      ],
      left: "1c654070-7c2a-4a44-9374-32bb944d37ff",
      right: "5fa1fdfb-0b98-4db1-aac6-c6caa2e6420b",
    },
    {
      id: "5fa1fdfb-0b98-4db1-aac6-c6caa2e6420b",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -1160,
        y: -4300,
      },
      edges: [
        "f0e78fd9-66ba-4a5e-bf1a-0a2cef67e335",
        "c7c083c4-1777-48bf-81c5-6ac412235c2e",
      ],
      left: "aa7a7985-9489-4f4f-b906-2dfbb836e327",
      right: "473426a9-dadb-4ad4-a889-7bc5e6c52805",
    },
    {
      id: "473426a9-dadb-4ad4-a889-7bc5e6c52805",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -640,
        y: -4260,
      },
      edges: [
        "c7c083c4-1777-48bf-81c5-6ac412235c2e",
        "2fbc7fd2-4663-413e-9b2c-bb7e4aa89dc9",
      ],
      left: "5fa1fdfb-0b98-4db1-aac6-c6caa2e6420b",
      right: "a7df549e-3ddb-47ed-bdcd-99d6349bb243",
    },
    {
      id: "a7df549e-3ddb-47ed-bdcd-99d6349bb243",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -60,
        y: -4280,
      },
      edges: [
        "2fbc7fd2-4663-413e-9b2c-bb7e4aa89dc9",
        "9f3acc5b-c8ac-464e-b102-1f15ed51403d",
      ],
      left: "473426a9-dadb-4ad4-a889-7bc5e6c52805",
      top: "385b2c17-b386-4ffa-8f7a-9610e6895924",
    },
    {
      id: "385b2c17-b386-4ffa-8f7a-9610e6895924",

      area: "HawaiianIslandsCaveB3Left",
      name: "MagicBookField",
      position: {
        x: 0,
        y: -4660,
      },
      edges: [
        "9f3acc5b-c8ac-464e-b102-1f15ed51403d",
        "9b666011-6de4-4133-8784-8e02ba21aa0d",
      ],
      bottom: "a7df549e-3ddb-47ed-bdcd-99d6349bb243",
      top: "be4944f0-9142-43ac-a6bf-fb4eeccbae49",
    },
    {
      id: "be4944f0-9142-43ac-a6bf-fb4eeccbae49",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -80,
        y: -5040,
      },
      edges: [
        "9b666011-6de4-4133-8784-8e02ba21aa0d",
        "018f1363-0d9a-46a8-b936-bb650beeda52",
        "d53f749d-804b-43d5-8051-15606cdfd16e",
      ],
      bottom: "385b2c17-b386-4ffa-8f7a-9610e6895924",
      top: "d0c507db-f5b7-480b-ac71-e4b10b170897",
      left: "d4b4c560-9a65-43af-91ee-0e91c9be5742",
    },
    {
      id: "d0c507db-f5b7-480b-ac71-e4b10b170897",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: 0,
        y: -5520,
      },
      edges: [
        "018f1363-0d9a-46a8-b936-bb650beeda52",
        "c3488193-e0a0-470a-ab70-fe76a84e1325",
      ],
      bottom: "be4944f0-9142-43ac-a6bf-fb4eeccbae49",
      left: "7b96e7d4-04fe-4394-8d03-954a87b17f93",
    },
    {
      id: "7b96e7d4-04fe-4394-8d03-954a87b17f93",

      area: "HawaiianIslandsCaveB3Left",
      name: "MagicBookField",
      position: {
        x: -580,
        y: -5580,
      },
      edges: [
        "c3488193-e0a0-470a-ab70-fe76a84e1325",
        "c4f0ece0-30e2-4af4-a528-3d57dd9c6fed",
      ],
      right: "d0c507db-f5b7-480b-ac71-e4b10b170897",
      left: "89572100-5ed5-4320-9538-6769960ecc84",
    },
    {
      id: "89572100-5ed5-4320-9538-6769960ecc84",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -1160,
        y: -5540,
      },
      edges: [
        "c4f0ece0-30e2-4af4-a528-3d57dd9c6fed",
        "d3191b1e-fcbe-4000-9f04-f41fc9909a91",
        "fa2fc176-d3dd-4797-ae6c-baad04bcef70",
      ],
      right: "7b96e7d4-04fe-4394-8d03-954a87b17f93",
      bottom: "d4b4c560-9a65-43af-91ee-0e91c9be5742",
      left: "88707efe-20ad-46b6-aa85-7834c8b7443c",
    },
    {
      id: "d4b4c560-9a65-43af-91ee-0e91c9be5742",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -1100,
        y: -5020,
      },
      edges: [
        "d3191b1e-fcbe-4000-9f04-f41fc9909a91",
        "d53f749d-804b-43d5-8051-15606cdfd16e",
      ],
      top: "89572100-5ed5-4320-9538-6769960ecc84",
      right: "be4944f0-9142-43ac-a6bf-fb4eeccbae49",
    },
    {
      id: "88707efe-20ad-46b6-aa85-7834c8b7443c",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -1680,
        y: -5560,
      },
      edges: [
        "fa2fc176-d3dd-4797-ae6c-baad04bcef70",
        "bef2f449-a4b9-49d8-9f0b-6223aafb9c38",
      ],
      right: "89572100-5ed5-4320-9538-6769960ecc84",
      bottom: "b6b3a214-7c3d-42e4-ac17-af6d9954234a",
    },
    {
      id: "b6b3a214-7c3d-42e4-ac17-af6d9954234a",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -1740,
        y: -5060,
      },
      edges: [
        "bef2f449-a4b9-49d8-9f0b-6223aafb9c38",
        "68265f33-bfc8-45e9-9a35-50942a768a0f",
      ],
      top: "88707efe-20ad-46b6-aa85-7834c8b7443c",
      bottom: "2d89a2ef-7a82-4ecd-9513-e1caa123e164",
    },
    {
      id: "2d89a2ef-7a82-4ecd-9513-e1caa123e164",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -1680,
        y: -4640,
      },
      edges: [
        "68265f33-bfc8-45e9-9a35-50942a768a0f",
        "0d70a295-e12e-4895-92c7-f3ae02533a08",
      ],
      top: "b6b3a214-7c3d-42e4-ac17-af6d9954234a",
      left: "2feb1e98-ce96-4cba-bfec-a9d82f591f8d",
    },
    {
      id: "2feb1e98-ce96-4cba-bfec-a9d82f591f8d",

      area: "HawaiianIslandsCaveB3Left",
      name: "RedTreasureField",
      position: {
        x: -2200,
        y: -4660,
      },
      edges: [
        "0d70a295-e12e-4895-92c7-f3ae02533a08",
        "936107a3-147a-4ac9-8d35-631ff266d13f",
      ],
      right: "2d89a2ef-7a82-4ecd-9513-e1caa123e164",
      left: "25fd2858-c36a-406d-8209-d81d94041fc2",
    },
    {
      id: "25fd2858-c36a-406d-8209-d81d94041fc2",

      area: "HawaiianIslandsCaveB3Left",
      name: "WhiteTreasureField",
      position: {
        x: -2740,
        y: -4640,
      },
      edges: [
        "936107a3-147a-4ac9-8d35-631ff266d13f",
        "a6544469-9d55-4650-94dd-d4f07c239f21",
        "f6fbdd49-fb18-48ad-a187-9d95f5896a9a",
      ],
      right: "2feb1e98-ce96-4cba-bfec-a9d82f591f8d",
      left: "3c2f35b6-40b0-4bf2-8bec-6c1da24f7ea3",
      top: "07683313-933c-4a55-8935-98c15619d6b2",
    },
    {
      id: "3c2f35b6-40b0-4bf2-8bec-6c1da24f7ea3",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -3300,
        y: -4680,
      },
      edges: [
        "a6544469-9d55-4650-94dd-d4f07c239f21",
        "14d6521e-f95b-4ebe-9287-c6ae313b3713",
      ],
      right: "25fd2858-c36a-406d-8209-d81d94041fc2",
      left: "39905795-7356-4635-bef6-2e7ff063bb2c",
    },
    {
      id: "39905795-7356-4635-bef6-2e7ff063bb2c",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -3820,
        y: -4640,
      },
      edges: [
        "14d6521e-f95b-4ebe-9287-c6ae313b3713",
        "9dc1d71b-d132-4ea3-bb85-169d3006a5da",
      ],
      right: "3c2f35b6-40b0-4bf2-8bec-6c1da24f7ea3",
      top: "00fec3e3-36ef-4aef-bbe9-5083dad159e2",
    },
    {
      id: "19f3cc42-b45f-44c2-b5b3-8533980d06dc",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -3300,
        y: -4320,
      },
      edges: [
        "2194daea-0105-4813-a3c1-e0d2c4980774",
        "a505f441-82cf-4751-8a84-fe8f87aa54a5",
      ],
      right: "88a3239d-207f-4faa-b629-8726b6b111eb",
      left: "d1c9a6ad-211b-4a2e-876f-459ff14f949a",
    },
    {
      id: "d1c9a6ad-211b-4a2e-876f-459ff14f949a",

      area: "HawaiianIslandsCaveB3Left",
      name: "MagicBookField",
      position: {
        x: -3820,
        y: -4280,
      },
      edges: [
        "a505f441-82cf-4751-8a84-fe8f87aa54a5",
        "890c00b4-e22c-44f2-bbb2-703a1d293ca5",
      ],
      right: "19f3cc42-b45f-44c2-b5b3-8533980d06dc",
      left: "9a91bb59-c011-4cf6-baf4-cdc620c21007",
    },
    {
      id: "9a91bb59-c011-4cf6-baf4-cdc620c21007",

      area: "HawaiianIslandsCaveB3Left",
      name: "DamageField",
      position: {
        x: -4320,
        y: -4300,
      },
      edges: [
        "890c00b4-e22c-44f2-bbb2-703a1d293ca5",
        "be495a42-c1ca-4270-8193-2a7a45e01170",
      ],
      right: "d1c9a6ad-211b-4a2e-876f-459ff14f949a",
      left: "f8ed41de-32e7-43ba-8a82-39101782cb37",
    },
    {
      id: "00fec3e3-36ef-4aef-bbe9-5083dad159e2",

      area: "HawaiianIslandsCaveB3Left",
      name: "MagicBookField",
      position: {
        x: -3780,
        y: -5100,
      },
      edges: [
        "9dc1d71b-d132-4ea3-bb85-169d3006a5da",
        "08539111-c023-4e88-a3d5-be38dd72e0b4",
      ],
      bottom: "39905795-7356-4635-bef6-2e7ff063bb2c",
      top: "a8e445cf-6350-49db-a921-9f49ea22e0af",
    },
    {
      id: "a8e445cf-6350-49db-a921-9f49ea22e0af",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -3800,
        y: -5580,
      },
      edges: [
        "08539111-c023-4e88-a3d5-be38dd72e0b4",
        "e59e343f-d90d-4015-93ec-2e212be666db",
      ],
      bottom: "00fec3e3-36ef-4aef-bbe9-5083dad159e2",
      left: "1fe7530a-9058-405c-8485-6fd33ea3cce4",
    },
    {
      id: "1fe7530a-9058-405c-8485-6fd33ea3cce4",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -4320,
        y: -5580,
      },
      edges: [
        "e59e343f-d90d-4015-93ec-2e212be666db",
        "354694d4-728d-4188-832c-5a0f173cf8bf",
        "75b801a1-fe62-44a7-93c9-2911be0576be",
      ],
      right: "a8e445cf-6350-49db-a921-9f49ea22e0af",
      left: "b9e7d459-42f4-44bd-8331-1dc21b1f3264",
      bottom: "8e706390-4869-4963-b09c-a332c8efa717",
    },
    {
      id: "f8ed41de-32e7-43ba-8a82-39101782cb37",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -4800,
        y: -4280,
      },
      edges: [
        "be495a42-c1ca-4270-8193-2a7a45e01170",
        "dc7af0a4-9f8a-4d10-b66f-582363e72290",
      ],
      right: "9a91bb59-c011-4cf6-baf4-cdc620c21007",
      left: "22528f57-be9e-4ce9-96bd-0aceee1bd158",
    },
    {
      id: "22528f57-be9e-4ce9-96bd-0aceee1bd158",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -5320,
        y: -4300,
      },
      edges: [
        "dc7af0a4-9f8a-4d10-b66f-582363e72290",
        "fdaec531-0986-4e09-851d-0d33b3b224c5",
      ],
      right: "f8ed41de-32e7-43ba-8a82-39101782cb37",
      top: "6e901c9a-8907-44d8-a463-b8d300a8fdda",
    },
    {
      id: "6e901c9a-8907-44d8-a463-b8d300a8fdda",

      area: "HawaiianIslandsCaveB3Left",
      name: "RedTreasureField",
      position: {
        x: -5280,
        y: -4700,
      },
      edges: [
        "fdaec531-0986-4e09-851d-0d33b3b224c5",
        "f8111ec2-d442-4281-9be1-d86417212cbf",
      ],
      bottom: "22528f57-be9e-4ce9-96bd-0aceee1bd158",
      top: "c4a9b10d-054f-4d3c-98f2-07c267bc51e5",
    },
    {
      id: "c4a9b10d-054f-4d3c-98f2-07c267bc51e5",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -5200,
        y: -5100,
      },
      edges: [
        "f8111ec2-d442-4281-9be1-d86417212cbf",
        "a7bad774-9dbf-499c-9e5e-9b1752093ef1",
        "65252296-f26d-44c5-a8e1-8a0e9bec345d",
      ],
      bottom: "6e901c9a-8907-44d8-a463-b8d300a8fdda",
      top: "48c25429-53fe-40d1-9c9d-090a8b22cb13",
      right: "8e706390-4869-4963-b09c-a332c8efa717",
    },
    {
      id: "48c25429-53fe-40d1-9c9d-090a8b22cb13",

      area: "HawaiianIslandsCaveB3Left",
      name: "DamageField",
      position: {
        x: -5240,
        y: -5580,
      },
      edges: [
        "a7bad774-9dbf-499c-9e5e-9b1752093ef1",
        "668276bb-3c8f-452f-bbc4-796b3e6468c0",
      ],
      bottom: "c4a9b10d-054f-4d3c-98f2-07c267bc51e5",
      right: "b9e7d459-42f4-44bd-8331-1dc21b1f3264",
    },
    {
      id: "b9e7d459-42f4-44bd-8331-1dc21b1f3264",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -4780,
        y: -5600,
      },
      edges: [
        "668276bb-3c8f-452f-bbc4-796b3e6468c0",
        "354694d4-728d-4188-832c-5a0f173cf8bf",
      ],
      left: "48c25429-53fe-40d1-9c9d-090a8b22cb13",
      right: "1fe7530a-9058-405c-8485-6fd33ea3cce4",
    },
    {
      id: "8e706390-4869-4963-b09c-a332c8efa717",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -4340,
        y: -5100,
      },
      edges: [
        "65252296-f26d-44c5-a8e1-8a0e9bec345d",
        "75b801a1-fe62-44a7-93c9-2911be0576be",
      ],
      left: "c4a9b10d-054f-4d3c-98f2-07c267bc51e5",
      top: "1fe7530a-9058-405c-8485-6fd33ea3cce4",
    },
    {
      id: "07683313-933c-4a55-8935-98c15619d6b2",

      area: "HawaiianIslandsCaveB3Left",
      name: "MagicBookField",
      position: {
        x: -2720,
        y: -5080,
      },
      edges: [
        "f6fbdd49-fb18-48ad-a187-9d95f5896a9a",
        "0d4116e6-47bf-46e9-9df8-41b780a72ca5",
      ],
      bottom: "25fd2858-c36a-406d-8209-d81d94041fc2",
      top: "4921c6c9-b544-4c66-a2f8-23801b2a4675",
    },
    {
      id: "4921c6c9-b544-4c66-a2f8-23801b2a4675",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -2760,
        y: -5560,
      },
      edges: [
        "0d4116e6-47bf-46e9-9df8-41b780a72ca5",
        "ab8a037b-031d-4ce5-8bd2-cebd62a74c6e",
      ],
      bottom: "07683313-933c-4a55-8935-98c15619d6b2",
      top: "939e44cf-303c-4048-9231-fb2396cdf778",
    },
    {
      id: "939e44cf-303c-4048-9231-fb2396cdf778",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -2700,
        y: -6020,
      },
      edges: [
        "ab8a037b-031d-4ce5-8bd2-cebd62a74c6e",
        "3dce6522-15b3-4af7-a882-e1452962efb3",
      ],
      bottom: "4921c6c9-b544-4c66-a2f8-23801b2a4675",
      top: "b8ade494-5e0c-449a-9ca4-e09f4ff2f1ae",
    },
    {
      id: "b8ade494-5e0c-449a-9ca4-e09f4ff2f1ae",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -2740,
        y: -6480,
      },
      edges: [
        "3dce6522-15b3-4af7-a882-e1452962efb3",
        "0465faf8-78b7-4ef7-9ba8-e4a5c247cff9",
      ],
      bottom: "939e44cf-303c-4048-9231-fb2396cdf778",
      top: "09c4bad0-425b-4856-a4c9-0a08a387cc79",
    },
    {
      id: "09c4bad0-425b-4856-a4c9-0a08a387cc79",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -2680,
        y: -6980,
      },
      edges: [
        "0465faf8-78b7-4ef7-9ba8-e4a5c247cff9",
        "c5c29c37-065c-4ba9-9975-53ec52c87551",
      ],
      bottom: "b8ade494-5e0c-449a-9ca4-e09f4ff2f1ae",
      top: "5b8a434a-2ef4-477f-afe9-4f6d2a72f9d7",
    },
    {
      id: "5b8a434a-2ef4-477f-afe9-4f6d2a72f9d7",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -2760,
        y: -7440,
      },
      edges: [
        "c5c29c37-065c-4ba9-9975-53ec52c87551",
        "e6baaf70-7131-4da2-8ec9-e406edaab505",
      ],
      bottom: "09c4bad0-425b-4856-a4c9-0a08a387cc79",
      top: "56e4a6df-5b05-42d2-9636-a5533e45a163",
    },
    {
      id: "56e4a6df-5b05-42d2-9636-a5533e45a163",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -2700,
        y: -7960,
      },
      edges: [
        "e6baaf70-7131-4da2-8ec9-e406edaab505",
        "e7c7f596-4c9e-443d-9179-e1c09bd1d7af",
      ],
      bottom: "5b8a434a-2ef4-477f-afe9-4f6d2a72f9d7",
      top: "94d530da-d6fd-4967-80ef-957c651b1580",
    },
    {
      id: "94d530da-d6fd-4967-80ef-957c651b1580",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -2780,
        y: -8440,
      },
      edges: [
        "e7c7f596-4c9e-443d-9179-e1c09bd1d7af",
        "6c718884-5027-4d9f-a01c-063b663a42aa",
      ],
      bottom: "56e4a6df-5b05-42d2-9636-a5533e45a163",
      top: "09fd1edc-3ff9-4532-9ed6-1dc643154b63",
    },
    {
      id: "09fd1edc-3ff9-4532-9ed6-1dc643154b63",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -2700,
        y: -8920,
      },
      edges: ["6c718884-5027-4d9f-a01c-063b663a42aa"],
      bottom: "94d530da-d6fd-4967-80ef-957c651b1580",
    },
    {
      id: "f79ed00f-26fd-4a14-8772-bb6d914a1c69",

      area: "HawaiianIslandsCaveB3Left",
      name: "CaveField",
      position: {
        x: -4580,
        y: 460,
      },
      edges: ["764098ea-9abc-4807-a12b-1792925a78fc"],
      top: "5c1a618f-66d6-4ea4-8c24-7f3a91b8208c",
    },
    {
      id: "5c1a618f-66d6-4ea4-8c24-7f3a91b8208c",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -4600,
        y: -60,
      },
      edges: [
        "764098ea-9abc-4807-a12b-1792925a78fc",
        "09bf0c87-ce3d-493b-bc9b-20efadc5dead",
      ],
      bottom: "f79ed00f-26fd-4a14-8772-bb6d914a1c69",
      left: "9350c5ff-087a-4a7a-8f17-c8f3e5458138",
    },
    {
      id: "9350c5ff-087a-4a7a-8f17-c8f3e5458138",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -5080,
        y: -40,
      },
      edges: [
        "09bf0c87-ce3d-493b-bc9b-20efadc5dead",
        "662d2501-755a-4a79-9568-f8a897937277",
      ],
      right: "5c1a618f-66d6-4ea4-8c24-7f3a91b8208c",
      left: "907b7cd2-e2e3-4948-992a-13da506fd363",
    },
    {
      id: "907b7cd2-e2e3-4948-992a-13da506fd363",

      area: "HawaiianIslandsCaveB3Left",
      name: "DamageField",
      position: {
        x: -5580,
        y: -60,
      },
      edges: [
        "662d2501-755a-4a79-9568-f8a897937277",
        "72b26f96-2bc4-491e-8ae5-d1bd551cb006",
        "b8ea999b-90b9-4e04-87d8-bf45924efbf2",
      ],
      right: "9350c5ff-087a-4a7a-8f17-c8f3e5458138",
      left: "fe56d5d5-d729-4a43-8cf0-549b843f461c",
      top: "22f03d57-c089-4d12-bdca-dc3ce8748710",
    },
    {
      id: "fe56d5d5-d729-4a43-8cf0-549b843f461c",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -6080,
        y: -40,
      },
      edges: [
        "72b26f96-2bc4-491e-8ae5-d1bd551cb006",
        "57b37289-3c05-41b1-b9fe-7a0e08625689",
      ],
      right: "907b7cd2-e2e3-4948-992a-13da506fd363",
      top: "c8841ca8-5553-4e8c-98a8-7d561c0d5198",
    },
    {
      id: "c8841ca8-5553-4e8c-98a8-7d561c0d5198",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -6100,
        y: -480,
      },
      edges: [
        "57b37289-3c05-41b1-b9fe-7a0e08625689",
        "d8b9c370-667d-4536-a594-8af23385217c",
      ],
      bottom: "fe56d5d5-d729-4a43-8cf0-549b843f461c",
      top: "6dabc016-ac47-4893-acc5-33b69851864b",
    },
    {
      id: "6dabc016-ac47-4893-acc5-33b69851864b",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -6080,
        y: -920,
      },
      edges: [
        "d8b9c370-667d-4536-a594-8af23385217c",
        "854f3a87-d670-470b-9bb6-e0b5e061562e",
        "ee443ef4-25dc-433d-aa50-da3a3f03882d",
      ],
      bottom: "c8841ca8-5553-4e8c-98a8-7d561c0d5198",
      right: "22f03d57-c089-4d12-bdca-dc3ce8748710",
      top: "4b96b156-178c-461d-a9a5-ac62f3e2d9b1",
    },
    {
      id: "22f03d57-c089-4d12-bdca-dc3ce8748710",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -5540,
        y: -920,
      },
      edges: [
        "854f3a87-d670-470b-9bb6-e0b5e061562e",
        "b8ea999b-90b9-4e04-87d8-bf45924efbf2",
      ],
      left: "6dabc016-ac47-4893-acc5-33b69851864b",
      bottom: "907b7cd2-e2e3-4948-992a-13da506fd363",
    },
    {
      id: "4b96b156-178c-461d-a9a5-ac62f3e2d9b1",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -6080,
        y: -1420,
      },
      edges: [
        "ee443ef4-25dc-433d-aa50-da3a3f03882d",
        "d9b4cd77-28e5-4910-9413-722a83b8501a",
      ],
      bottom: "6dabc016-ac47-4893-acc5-33b69851864b",
      top: "ace15646-2f86-4609-9bfd-a8d04a8dab2e",
    },
    {
      id: "ace15646-2f86-4609-9bfd-a8d04a8dab2e",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -6080,
        y: -1880,
      },
      edges: [
        "d9b4cd77-28e5-4910-9413-722a83b8501a",
        "40a2b70f-f0c7-4c2a-b647-9adebda473a8",
      ],
      bottom: "4b96b156-178c-461d-a9a5-ac62f3e2d9b1",
      right: "a15f1509-02c5-43e1-9793-59a3219fda21",
    },
    {
      id: "a15f1509-02c5-43e1-9793-59a3219fda21",

      area: "HawaiianIslandsCaveB3Left",
      name: "DamageField",
      position: {
        x: -5560,
        y: -1880,
      },
      edges: [
        "40a2b70f-f0c7-4c2a-b647-9adebda473a8",
        "f9a04b92-0c3d-464c-9eb6-8a476b3cda26",
      ],
      left: "ace15646-2f86-4609-9bfd-a8d04a8dab2e",
      right: "a02fa542-5203-43c2-b36a-3a2a5625a130",
    },
    {
      id: "a02fa542-5203-43c2-b36a-3a2a5625a130",

      area: "HawaiianIslandsCaveB3Left",
      name: "RedTreasureField",
      position: {
        x: -5040,
        y: -1880,
      },
      edges: [
        "f9a04b92-0c3d-464c-9eb6-8a476b3cda26",
        "33bde82a-ff1f-4540-8747-0710dc9d5736",
      ],
      left: "a15f1509-02c5-43e1-9793-59a3219fda21",
      right: "188a2812-b14c-4276-a094-132564d86a62",
    },
    {
      id: "188a2812-b14c-4276-a094-132564d86a62",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -4560,
        y: -1880,
      },
      edges: [
        "33bde82a-ff1f-4540-8747-0710dc9d5736",
        "ef514c7e-79d2-412f-9e9a-bd7758e87714",
      ],
      left: "a02fa542-5203-43c2-b36a-3a2a5625a130",
      right: "0968ba65-15c8-4ea1-a551-9e56ac759fc4",
    },
    {
      id: "0968ba65-15c8-4ea1-a551-9e56ac759fc4",

      area: "HawaiianIslandsCaveB3Left",
      name: "TreasureField",
      position: {
        x: -4000,
        y: -1860,
      },
      edges: [
        "ef514c7e-79d2-412f-9e9a-bd7758e87714",
        "438ab6c4-1b80-4aff-afde-81b44a89f826",
      ],
      left: "188a2812-b14c-4276-a094-132564d86a62",
      bottom: "e01f502c-8394-4a1c-a9aa-c98684a686d6",
    },
    {
      id: "e01f502c-8394-4a1c-a9aa-c98684a686d6",

      area: "HawaiianIslandsCaveB3Left",
      name: "DamageField",
      position: {
        x: -3960,
        y: -1360,
      },
      edges: [
        "438ab6c4-1b80-4aff-afde-81b44a89f826",
        "4004dfb8-6386-4a95-a252-157503dfad2e",
      ],
      top: "0968ba65-15c8-4ea1-a551-9e56ac759fc4",
      bottom: "cb5057d6-f678-4bcd-9a7d-bac8f482d0c3",
    },
    {
      id: "cb5057d6-f678-4bcd-9a7d-bac8f482d0c3",

      area: "HawaiianIslandsCaveB3Left",
      name: "MagicBookField",
      position: {
        x: -4000,
        y: -840,
      },
      edges: [
        "4004dfb8-6386-4a95-a252-157503dfad2e",
        "5fb43710-aefa-4403-92e8-4d1d0ad0ecd3",
      ],
      top: "e01f502c-8394-4a1c-a9aa-c98684a686d6",
      bottom: "b13d49b8-f27f-4f73-b8c9-e37138ec49f4",
    },
    {
      id: "b13d49b8-f27f-4f73-b8c9-e37138ec49f4",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -3980,
        y: -440,
      },
      edges: [
        "5fb43710-aefa-4403-92e8-4d1d0ad0ecd3",
        "9ce51c10-363d-4d71-b064-1ba81993f6e9",
      ],
      top: "cb5057d6-f678-4bcd-9a7d-bac8f482d0c3",
      left: "e7ace51b-ed58-45e3-88b8-56327d14e628",
    },
    {
      id: "e7ace51b-ed58-45e3-88b8-56327d14e628",

      area: "HawaiianIslandsCaveB3Left",
      name: "BattleField",
      position: {
        x: -4520,
        y: -440,
      },
      edges: [
        "9ce51c10-363d-4d71-b064-1ba81993f6e9",
        "d56a76bd-7969-41f5-a134-c25dcfb0f0c0",
      ],
      right: "b13d49b8-f27f-4f73-b8c9-e37138ec49f4",
      top: "697775d0-cd32-4b03-96a5-965613cedeef",
    },
    {
      id: "697775d0-cd32-4b03-96a5-965613cedeef",

      area: "HawaiianIslandsCaveB3Left",
      name: "KeyTreasureField",
      position: {
        x: -4520,
        y: -860,
      },
      edges: ["d56a76bd-7969-41f5-a134-c25dcfb0f0c0"],
      bottom: "e7ace51b-ed58-45e3-88b8-56327d14e628",
    },
  ],
  edges: [
    {
      start: {
        x: 0,
        y: 20,
      },
      startId: "6a60042d-e15c-4b14-b831-2a0bae22fbca",
      end: {
        x: 0,
        y: -780,
      },
      endId: "66c28e4b-44a6-4943-bd09-5ad445717eca",
      name: "TwoWayVEdge",
      id: "562443f5-0963-433a-966c-d5be287f80a8",
    },
    {
      start: {
        x: 0,
        y: 20,
      },
      startId: "6a60042d-e15c-4b14-b831-2a0bae22fbca",
      end: {
        x: 540,
        y: 20,
      },
      endId: "bbd1bd51-947e-430e-831f-da6632218956",
      name: "TwoWayHEdge",
      id: "68b1e458-de3a-49b8-aced-867e63e14c2e",
    },
    {
      start: {
        x: 0,
        y: -780,
      },
      startId: "66c28e4b-44a6-4943-bd09-5ad445717eca",
      end: {
        x: 540,
        y: -780,
      },
      endId: "29b5210d-4700-406e-abe5-5df20af0d21d",
      name: "TwoWayHEdge",
      id: "94d81738-b46c-4267-b318-449bcee74a52",
    },
    {
      start: {
        x: 540,
        y: -780,
      },
      startId: "29b5210d-4700-406e-abe5-5df20af0d21d",
      end: {
        x: 640,
        y: -380,
      },
      endId: "8155ec2b-f254-4fb5-9ff7-94f5e74345c6",
      name: "TwoWayVEdge",
      id: "b980006c-0e23-418d-85a6-977b0b0ae828",
    },
    {
      start: {
        x: 640,
        y: -380,
      },
      startId: "8155ec2b-f254-4fb5-9ff7-94f5e74345c6",
      end: {
        x: 540,
        y: 20,
      },
      endId: "bbd1bd51-947e-430e-831f-da6632218956",
      name: "TwoWayVEdge",
      id: "00a6a349-2888-43be-991c-eaf9e734bc5e",
    },
    {
      start: {
        x: 0,
        y: 20,
      },
      startId: "6a60042d-e15c-4b14-b831-2a0bae22fbca",
      end: {
        x: -520,
        y: 40,
      },
      endId: "0cfd3322-6a1a-49e6-a4a3-1a74a58c16d3",
      name: "TwoWayHEdge",
      id: "7ef8b283-49d0-4e4b-8cd7-876d6ae7130a",
    },
    {
      start: {
        x: -520,
        y: 40,
      },
      startId: "0cfd3322-6a1a-49e6-a4a3-1a74a58c16d3",
      end: {
        x: -1060,
        y: 0,
      },
      endId: "465aecae-9cb9-4ca5-bec8-667e9cf9c352",
      name: "TwoWayHEdge",
      id: "4db26d29-1ae8-4a7b-9f73-8e96872aecd9",
    },
    {
      start: {
        x: -1060,
        y: 0,
      },
      startId: "465aecae-9cb9-4ca5-bec8-667e9cf9c352",
      end: {
        x: -1100,
        y: 520,
      },
      endId: "7a805c29-acec-4c12-9de4-a841a08e3a9b",
      name: "TwoWayVEdge",
      id: "b315625e-de8c-4aa5-91cc-58fbbe505006",
    },
    {
      start: {
        x: 540,
        y: -780,
      },
      startId: "29b5210d-4700-406e-abe5-5df20af0d21d",
      end: {
        x: 580,
        y: -1340,
      },
      endId: "60de19cd-764b-4e63-82c2-67c3e4889a92",
      name: "TwoWayVEdge",
      id: "b45b8fcf-8792-4c0f-b2ae-f908b547e76b",
    },
    {
      start: {
        x: 580,
        y: -1340,
      },
      startId: "60de19cd-764b-4e63-82c2-67c3e4889a92",
      end: {
        x: 540,
        y: -1860,
      },
      endId: "57e9e587-21c0-4cdc-a07a-c18d2ca4e09f",
      name: "TwoWayVEdge",
      id: "5b79facc-a9b4-4b99-a657-05f55561427a",
    },
    {
      start: {
        x: 540,
        y: -1860,
      },
      startId: "57e9e587-21c0-4cdc-a07a-c18d2ca4e09f",
      end: {
        x: 0,
        y: -1860,
      },
      endId: "cd3507d7-6613-4492-a645-322630a7b578",
      name: "TwoWayHEdge",
      id: "8787695e-00eb-41dc-9660-666886f38408",
    },
    {
      start: {
        x: 0,
        y: -1860,
      },
      startId: "cd3507d7-6613-4492-a645-322630a7b578",
      end: {
        x: -520,
        y: -1860,
      },
      endId: "b2ed744b-01df-470e-907e-a1547f71d9a5",
      name: "TwoWayHEdge",
      id: "5f03d74f-02f3-491d-84c0-a5aeaee5ae1b",
    },
    {
      start: {
        x: -520,
        y: -1860,
      },
      startId: "b2ed744b-01df-470e-907e-a1547f71d9a5",
      end: {
        x: -1080,
        y: -1860,
      },
      endId: "699cd32b-51c9-4830-97ff-067530534003",
      name: "TwoWayHEdge",
      id: "311d931c-2a93-41f7-b4e6-2494e9db8279",
    },
    {
      start: {
        x: -1080,
        y: -1860,
      },
      startId: "699cd32b-51c9-4830-97ff-067530534003",
      end: {
        x: -1660,
        y: -1860,
      },
      endId: "5b996246-7a45-457b-9954-e7ee6825c51a",
      name: "TwoWayHEdge",
      id: "9d9c28be-c53c-431f-a98e-f230813961bf",
    },
    {
      start: {
        x: -1660,
        y: -1860,
      },
      startId: "5b996246-7a45-457b-9954-e7ee6825c51a",
      end: {
        x: -1660,
        y: -1360,
      },
      endId: "82fb537d-cf0d-48bf-aa12-a6adb8c9a6a9",
      name: "TwoWayVEdge",
      id: "5546eb2e-e639-46d4-9e0e-45a2cee57f36",
    },
    {
      start: {
        x: -1660,
        y: -1360,
      },
      startId: "82fb537d-cf0d-48bf-aa12-a6adb8c9a6a9",
      end: {
        x: -1660,
        y: -800,
      },
      endId: "7d501b23-f97d-4faa-be48-603009655c83",
      name: "TwoWayVEdge",
      id: "01f86005-6294-492a-9bd1-940a0efbfe8e",
    },
    {
      start: {
        x: -1660,
        y: -800,
      },
      startId: "7d501b23-f97d-4faa-be48-603009655c83",
      end: {
        x: -1660,
        y: -400,
      },
      endId: "e4037893-61f6-4dd3-94a0-75d3ec624c86",
      name: "TwoWayVEdge",
      id: "3bdfe786-bde8-4385-856b-1239a0c5cd45",
    },
    {
      start: {
        x: -1660,
        y: -400,
      },
      startId: "e4037893-61f6-4dd3-94a0-75d3ec624c86",
      end: {
        x: -1160,
        y: -400,
      },
      endId: "5d37c170-2a53-4aeb-8333-b1fc6666e14a",
      name: "TwoWayHEdge",
      id: "e1ef1ee0-36fc-427d-9042-a70b0f50bf9e",
    },
    {
      start: {
        x: -1160,
        y: -400,
      },
      startId: "5d37c170-2a53-4aeb-8333-b1fc6666e14a",
      end: {
        x: -1160,
        y: -800,
      },
      endId: "648cee56-fc1b-488c-8b79-11511e2a813e",
      name: "TwoWayVEdge",
      id: "d9c6ea60-6a8b-4477-b945-b54438c4f34b",
    },
    {
      start: {
        x: -2860,
        y: -240,
      },
      startId: "a2620028-72cc-4f87-8f3c-aa2d1a3c979d",
      end: {
        x: -2800,
        y: -820,
      },
      endId: "dac2cf66-aeb1-4b1e-bab4-c52819fedc7b",
      name: "TwoWayVEdge",
      id: "a8da45ce-4a5c-4ceb-9278-56bcb35a90a6",
    },
    {
      start: {
        x: -2800,
        y: -820,
      },
      startId: "dac2cf66-aeb1-4b1e-bab4-c52819fedc7b",
      end: {
        x: -2860,
        y: -1340,
      },
      endId: "19eeb4ab-7652-489f-93fe-47c6d4d63894",
      name: "TwoWayVEdge",
      id: "92f90440-5fe0-4e83-8312-34b5548c025e",
    },
    {
      start: {
        x: -2860,
        y: -1340,
      },
      startId: "19eeb4ab-7652-489f-93fe-47c6d4d63894",
      end: {
        x: -2800,
        y: -1860,
      },
      endId: "9d74f747-5d17-4e3d-ab9a-4709640a3ada",
      name: "TwoWayVEdge",
      id: "5a078390-0bb3-4be5-851f-3f279f455745",
    },
    {
      start: {
        x: -2800,
        y: -1860,
      },
      startId: "9d74f747-5d17-4e3d-ab9a-4709640a3ada",
      end: {
        x: -2840,
        y: -2340,
      },
      endId: "8790ddd7-c569-45d6-aa35-30f869e08047",
      name: "TwoWayVEdge",
      id: "a8e331ec-5c95-4e5a-b207-9f19eb09f143",
    },
    {
      start: {
        x: -2840,
        y: -2340,
      },
      startId: "8790ddd7-c569-45d6-aa35-30f869e08047",
      end: {
        x: -2780,
        y: -2880,
      },
      endId: "454bb599-5f59-4d87-b6f6-4604b8d4a08f",
      name: "TwoWayVEdge",
      id: "2f31a345-7b3f-4b0c-b24c-f67ecdc7b70e",
    },
    {
      start: {
        x: -2780,
        y: -2880,
      },
      startId: "454bb599-5f59-4d87-b6f6-4604b8d4a08f",
      end: {
        x: -2840,
        y: -3600,
      },
      endId: "4e6b4997-f2db-4e2f-a868-22ca899c7b5e",
      name: "TwoWayVEdge",
      id: "eb85fbf1-f7e0-49f5-b32a-cc4e440b88c3",
    },
    {
      start: {
        x: -2840,
        y: -3600,
      },
      startId: "4e6b4997-f2db-4e2f-a868-22ca899c7b5e",
      end: {
        x: -2760,
        y: -4280,
      },
      endId: "88a3239d-207f-4faa-b629-8726b6b111eb",
      name: "TwoWayVEdge",
      id: "2f1d3dcc-56d0-45e6-a9d5-732e1ea6fcbf",
    },
    {
      start: {
        x: -2760,
        y: -4280,
      },
      startId: "88a3239d-207f-4faa-b629-8726b6b111eb",
      end: {
        x: -2220,
        y: -4300,
      },
      endId: "1c654070-7c2a-4a44-9374-32bb944d37ff",
      name: "TwoWayHEdge",
      id: "5dd6b989-54ca-4a9f-a63e-2318294c4aaf",
    },
    {
      start: {
        x: -2220,
        y: -4300,
      },
      startId: "1c654070-7c2a-4a44-9374-32bb944d37ff",
      end: {
        x: -1700,
        y: -4260,
      },
      endId: "aa7a7985-9489-4f4f-b906-2dfbb836e327",
      name: "TwoWayHEdge",
      id: "7b3ee597-e951-445a-a026-95662334285f",
    },
    {
      start: {
        x: -1700,
        y: -4260,
      },
      startId: "aa7a7985-9489-4f4f-b906-2dfbb836e327",
      end: {
        x: -1160,
        y: -4300,
      },
      endId: "5fa1fdfb-0b98-4db1-aac6-c6caa2e6420b",
      name: "TwoWayHEdge",
      id: "f0e78fd9-66ba-4a5e-bf1a-0a2cef67e335",
    },
    {
      start: {
        x: -1160,
        y: -4300,
      },
      startId: "5fa1fdfb-0b98-4db1-aac6-c6caa2e6420b",
      end: {
        x: -640,
        y: -4260,
      },
      endId: "473426a9-dadb-4ad4-a889-7bc5e6c52805",
      name: "TwoWayHEdge",
      id: "c7c083c4-1777-48bf-81c5-6ac412235c2e",
    },
    {
      start: {
        x: -640,
        y: -4260,
      },
      startId: "473426a9-dadb-4ad4-a889-7bc5e6c52805",
      end: {
        x: -60,
        y: -4280,
      },
      endId: "a7df549e-3ddb-47ed-bdcd-99d6349bb243",
      name: "TwoWayHEdge",
      id: "2fbc7fd2-4663-413e-9b2c-bb7e4aa89dc9",
    },
    {
      start: {
        x: -60,
        y: -4280,
      },
      startId: "a7df549e-3ddb-47ed-bdcd-99d6349bb243",
      end: {
        x: 0,
        y: -4660,
      },
      endId: "385b2c17-b386-4ffa-8f7a-9610e6895924",
      name: "TwoWayVEdge",
      id: "9f3acc5b-c8ac-464e-b102-1f15ed51403d",
    },
    {
      start: {
        x: 0,
        y: -4660,
      },
      startId: "385b2c17-b386-4ffa-8f7a-9610e6895924",
      end: {
        x: -80,
        y: -5040,
      },
      endId: "be4944f0-9142-43ac-a6bf-fb4eeccbae49",
      name: "TwoWayVEdge",
      id: "9b666011-6de4-4133-8784-8e02ba21aa0d",
    },
    {
      start: {
        x: -80,
        y: -5040,
      },
      startId: "be4944f0-9142-43ac-a6bf-fb4eeccbae49",
      end: {
        x: 0,
        y: -5520,
      },
      endId: "d0c507db-f5b7-480b-ac71-e4b10b170897",
      name: "TwoWayVEdge",
      id: "018f1363-0d9a-46a8-b936-bb650beeda52",
    },
    {
      start: {
        x: 0,
        y: -5520,
      },
      startId: "d0c507db-f5b7-480b-ac71-e4b10b170897",
      end: {
        x: -580,
        y: -5580,
      },
      endId: "7b96e7d4-04fe-4394-8d03-954a87b17f93",
      name: "TwoWayHEdge",
      id: "c3488193-e0a0-470a-ab70-fe76a84e1325",
    },
    {
      start: {
        x: -580,
        y: -5580,
      },
      startId: "7b96e7d4-04fe-4394-8d03-954a87b17f93",
      end: {
        x: -1160,
        y: -5540,
      },
      endId: "89572100-5ed5-4320-9538-6769960ecc84",
      name: "TwoWayHEdge",
      id: "c4f0ece0-30e2-4af4-a528-3d57dd9c6fed",
    },
    {
      start: {
        x: -1160,
        y: -5540,
      },
      startId: "89572100-5ed5-4320-9538-6769960ecc84",
      end: {
        x: -1100,
        y: -5020,
      },
      endId: "d4b4c560-9a65-43af-91ee-0e91c9be5742",
      name: "TwoWayVEdge",
      id: "d3191b1e-fcbe-4000-9f04-f41fc9909a91",
    },
    {
      start: {
        x: -1100,
        y: -5020,
      },
      startId: "d4b4c560-9a65-43af-91ee-0e91c9be5742",
      end: {
        x: -80,
        y: -5040,
      },
      endId: "be4944f0-9142-43ac-a6bf-fb4eeccbae49",
      name: "TwoWayHEdge",
      id: "d53f749d-804b-43d5-8051-15606cdfd16e",
    },
    {
      start: {
        x: -1160,
        y: -5540,
      },
      startId: "89572100-5ed5-4320-9538-6769960ecc84",
      end: {
        x: -1680,
        y: -5560,
      },
      endId: "88707efe-20ad-46b6-aa85-7834c8b7443c",
      name: "TwoWayHEdge",
      id: "fa2fc176-d3dd-4797-ae6c-baad04bcef70",
    },
    {
      start: {
        x: -1680,
        y: -5560,
      },
      startId: "88707efe-20ad-46b6-aa85-7834c8b7443c",
      end: {
        x: -1740,
        y: -5060,
      },
      endId: "b6b3a214-7c3d-42e4-ac17-af6d9954234a",
      name: "TwoWayVEdge",
      id: "bef2f449-a4b9-49d8-9f0b-6223aafb9c38",
    },
    {
      start: {
        x: -1740,
        y: -5060,
      },
      startId: "b6b3a214-7c3d-42e4-ac17-af6d9954234a",
      end: {
        x: -1680,
        y: -4640,
      },
      endId: "2d89a2ef-7a82-4ecd-9513-e1caa123e164",
      name: "TwoWayVEdge",
      id: "68265f33-bfc8-45e9-9a35-50942a768a0f",
    },
    {
      start: {
        x: -1680,
        y: -4640,
      },
      startId: "2d89a2ef-7a82-4ecd-9513-e1caa123e164",
      end: {
        x: -2200,
        y: -4660,
      },
      endId: "2feb1e98-ce96-4cba-bfec-a9d82f591f8d",
      name: "TwoWayHEdge",
      id: "0d70a295-e12e-4895-92c7-f3ae02533a08",
    },
    {
      start: {
        x: -2200,
        y: -4660,
      },
      startId: "2feb1e98-ce96-4cba-bfec-a9d82f591f8d",
      end: {
        x: -2740,
        y: -4640,
      },
      endId: "25fd2858-c36a-406d-8209-d81d94041fc2",
      name: "TwoWayHEdge",
      id: "936107a3-147a-4ac9-8d35-631ff266d13f",
    },
    {
      start: {
        x: -2740,
        y: -4640,
      },
      startId: "25fd2858-c36a-406d-8209-d81d94041fc2",
      end: {
        x: -3300,
        y: -4680,
      },
      endId: "3c2f35b6-40b0-4bf2-8bec-6c1da24f7ea3",
      name: "TwoWayHEdge",
      id: "a6544469-9d55-4650-94dd-d4f07c239f21",
    },
    {
      start: {
        x: -3300,
        y: -4680,
      },
      startId: "3c2f35b6-40b0-4bf2-8bec-6c1da24f7ea3",
      end: {
        x: -3820,
        y: -4640,
      },
      endId: "39905795-7356-4635-bef6-2e7ff063bb2c",
      name: "TwoWayHEdge",
      id: "14d6521e-f95b-4ebe-9287-c6ae313b3713",
    },
    {
      start: {
        x: -2760,
        y: -4280,
      },
      startId: "88a3239d-207f-4faa-b629-8726b6b111eb",
      end: {
        x: -3300,
        y: -4320,
      },
      endId: "19f3cc42-b45f-44c2-b5b3-8533980d06dc",
      name: "TwoWayHEdge",
      id: "2194daea-0105-4813-a3c1-e0d2c4980774",
    },
    {
      start: {
        x: -3300,
        y: -4320,
      },
      startId: "19f3cc42-b45f-44c2-b5b3-8533980d06dc",
      end: {
        x: -3820,
        y: -4280,
      },
      endId: "d1c9a6ad-211b-4a2e-876f-459ff14f949a",
      name: "TwoWayHEdge",
      id: "a505f441-82cf-4751-8a84-fe8f87aa54a5",
    },
    {
      start: {
        x: -3820,
        y: -4280,
      },
      startId: "d1c9a6ad-211b-4a2e-876f-459ff14f949a",
      end: {
        x: -4320,
        y: -4300,
      },
      endId: "9a91bb59-c011-4cf6-baf4-cdc620c21007",
      name: "TwoWayHEdge",
      id: "890c00b4-e22c-44f2-bbb2-703a1d293ca5",
    },
    {
      start: {
        x: -3820,
        y: -4640,
      },
      startId: "39905795-7356-4635-bef6-2e7ff063bb2c",
      end: {
        x: -3780,
        y: -5100,
      },
      endId: "00fec3e3-36ef-4aef-bbe9-5083dad159e2",
      name: "TwoWayVEdge",
      id: "9dc1d71b-d132-4ea3-bb85-169d3006a5da",
    },
    {
      start: {
        x: -3780,
        y: -5100,
      },
      startId: "00fec3e3-36ef-4aef-bbe9-5083dad159e2",
      end: {
        x: -3800,
        y: -5580,
      },
      endId: "a8e445cf-6350-49db-a921-9f49ea22e0af",
      name: "TwoWayVEdge",
      id: "08539111-c023-4e88-a3d5-be38dd72e0b4",
    },
    {
      start: {
        x: -3800,
        y: -5580,
      },
      startId: "a8e445cf-6350-49db-a921-9f49ea22e0af",
      end: {
        x: -4320,
        y: -5580,
      },
      endId: "1fe7530a-9058-405c-8485-6fd33ea3cce4",
      name: "TwoWayHEdge",
      id: "e59e343f-d90d-4015-93ec-2e212be666db",
    },
    {
      start: {
        x: -4320,
        y: -4300,
      },
      startId: "9a91bb59-c011-4cf6-baf4-cdc620c21007",
      end: {
        x: -4800,
        y: -4280,
      },
      endId: "f8ed41de-32e7-43ba-8a82-39101782cb37",
      name: "TwoWayHEdge",
      id: "be495a42-c1ca-4270-8193-2a7a45e01170",
    },
    {
      start: {
        x: -4800,
        y: -4280,
      },
      startId: "f8ed41de-32e7-43ba-8a82-39101782cb37",
      end: {
        x: -5320,
        y: -4300,
      },
      endId: "22528f57-be9e-4ce9-96bd-0aceee1bd158",
      name: "TwoWayHEdge",
      id: "dc7af0a4-9f8a-4d10-b66f-582363e72290",
    },
    {
      start: {
        x: -5320,
        y: -4300,
      },
      startId: "22528f57-be9e-4ce9-96bd-0aceee1bd158",
      end: {
        x: -5280,
        y: -4700,
      },
      endId: "6e901c9a-8907-44d8-a463-b8d300a8fdda",
      name: "TwoWayVEdge",
      id: "fdaec531-0986-4e09-851d-0d33b3b224c5",
    },
    {
      start: {
        x: -5280,
        y: -4700,
      },
      startId: "6e901c9a-8907-44d8-a463-b8d300a8fdda",
      end: {
        x: -5200,
        y: -5100,
      },
      endId: "c4a9b10d-054f-4d3c-98f2-07c267bc51e5",
      name: "TwoWayVEdge",
      id: "f8111ec2-d442-4281-9be1-d86417212cbf",
    },
    {
      start: {
        x: -5200,
        y: -5100,
      },
      startId: "c4a9b10d-054f-4d3c-98f2-07c267bc51e5",
      end: {
        x: -5240,
        y: -5580,
      },
      endId: "48c25429-53fe-40d1-9c9d-090a8b22cb13",
      name: "TwoWayVEdge",
      id: "a7bad774-9dbf-499c-9e5e-9b1752093ef1",
    },
    {
      start: {
        x: -4820,
        y: -5680,
      },
      startId: "",
      end: {
        x: -4820,
        y: -5680,
      },
      endId: "56fc316e-de13-4638-86a3-d3853402c2ab",
      name: "TwoWayHEdge",
      id: "8f49a197-6390-41c0-b5da-3cfa1e64a6d6",
    },
    {
      start: {
        x: -5240,
        y: -5580,
      },
      startId: "48c25429-53fe-40d1-9c9d-090a8b22cb13",
      end: {
        x: -4780,
        y: -5600,
      },
      endId: "b9e7d459-42f4-44bd-8331-1dc21b1f3264",
      name: "TwoWayHEdge",
      id: "668276bb-3c8f-452f-bbc4-796b3e6468c0",
    },
    {
      start: {
        x: -4780,
        y: -5600,
      },
      startId: "b9e7d459-42f4-44bd-8331-1dc21b1f3264",
      end: {
        x: -4320,
        y: -5580,
      },
      endId: "1fe7530a-9058-405c-8485-6fd33ea3cce4",
      name: "TwoWayHEdge",
      id: "354694d4-728d-4188-832c-5a0f173cf8bf",
    },
    {
      start: {
        x: -5200,
        y: -5100,
      },
      startId: "c4a9b10d-054f-4d3c-98f2-07c267bc51e5",
      end: {
        x: -4340,
        y: -5100,
      },
      endId: "8e706390-4869-4963-b09c-a332c8efa717",
      name: "TwoWayHEdge",
      id: "65252296-f26d-44c5-a8e1-8a0e9bec345d",
    },
    {
      start: {
        x: -4340,
        y: -5100,
      },
      startId: "8e706390-4869-4963-b09c-a332c8efa717",
      end: {
        x: -4320,
        y: -5580,
      },
      endId: "1fe7530a-9058-405c-8485-6fd33ea3cce4",
      name: "TwoWayVEdge",
      id: "75b801a1-fe62-44a7-93c9-2911be0576be",
    },
    {
      start: {
        x: -2740,
        y: -4640,
      },
      startId: "25fd2858-c36a-406d-8209-d81d94041fc2",
      end: {
        x: -2720,
        y: -5080,
      },
      endId: "07683313-933c-4a55-8935-98c15619d6b2",
      name: "TwoWayVEdge",
      id: "f6fbdd49-fb18-48ad-a187-9d95f5896a9a",
    },
    {
      start: {
        x: -2720,
        y: -5080,
      },
      startId: "07683313-933c-4a55-8935-98c15619d6b2",
      end: {
        x: -2760,
        y: -5560,
      },
      endId: "4921c6c9-b544-4c66-a2f8-23801b2a4675",
      name: "TwoWayVEdge",
      id: "0d4116e6-47bf-46e9-9df8-41b780a72ca5",
    },
    {
      start: {
        x: -2760,
        y: -5560,
      },
      startId: "4921c6c9-b544-4c66-a2f8-23801b2a4675",
      end: {
        x: -2700,
        y: -6020,
      },
      endId: "939e44cf-303c-4048-9231-fb2396cdf778",
      name: "TwoWayVEdge",
      id: "ab8a037b-031d-4ce5-8bd2-cebd62a74c6e",
    },
    {
      start: {
        x: -2700,
        y: -6020,
      },
      startId: "939e44cf-303c-4048-9231-fb2396cdf778",
      end: {
        x: -2740,
        y: -6480,
      },
      endId: "b8ade494-5e0c-449a-9ca4-e09f4ff2f1ae",
      name: "TwoWayVEdge",
      id: "3dce6522-15b3-4af7-a882-e1452962efb3",
    },
    {
      start: {
        x: -2740,
        y: -6480,
      },
      startId: "b8ade494-5e0c-449a-9ca4-e09f4ff2f1ae",
      end: {
        x: -2680,
        y: -6980,
      },
      endId: "09c4bad0-425b-4856-a4c9-0a08a387cc79",
      name: "TwoWayVEdge",
      id: "0465faf8-78b7-4ef7-9ba8-e4a5c247cff9",
    },
    {
      start: {
        x: -2680,
        y: -6980,
      },
      startId: "09c4bad0-425b-4856-a4c9-0a08a387cc79",
      end: {
        x: -2760,
        y: -7440,
      },
      endId: "5b8a434a-2ef4-477f-afe9-4f6d2a72f9d7",
      name: "TwoWayVEdge",
      id: "c5c29c37-065c-4ba9-9975-53ec52c87551",
    },
    {
      start: {
        x: -2760,
        y: -7440,
      },
      startId: "5b8a434a-2ef4-477f-afe9-4f6d2a72f9d7",
      end: {
        x: -2700,
        y: -7960,
      },
      endId: "56e4a6df-5b05-42d2-9636-a5533e45a163",
      name: "TwoWayVEdge",
      id: "e6baaf70-7131-4da2-8ec9-e406edaab505",
    },
    {
      start: {
        x: -2700,
        y: -7960,
      },
      startId: "56e4a6df-5b05-42d2-9636-a5533e45a163",
      end: {
        x: -2780,
        y: -8440,
      },
      endId: "94d530da-d6fd-4967-80ef-957c651b1580",
      name: "TwoWayVEdge",
      id: "e7c7f596-4c9e-443d-9179-e1c09bd1d7af",
    },
    {
      start: {
        x: -2780,
        y: -8440,
      },
      startId: "94d530da-d6fd-4967-80ef-957c651b1580",
      end: {
        x: -2700,
        y: -8920,
      },
      endId: "09fd1edc-3ff9-4532-9ed6-1dc643154b63",
      name: "TwoWayVEdge",
      id: "6c718884-5027-4d9f-a01c-063b663a42aa",
    },
    {
      start: {
        x: -4580,
        y: 460,
      },
      startId: "f79ed00f-26fd-4a14-8772-bb6d914a1c69",
      end: {
        x: -4600,
        y: -60,
      },
      endId: "5c1a618f-66d6-4ea4-8c24-7f3a91b8208c",
      name: "TwoWayVEdge",
      id: "764098ea-9abc-4807-a12b-1792925a78fc",
    },
    {
      start: {
        x: -4600,
        y: -60,
      },
      startId: "5c1a618f-66d6-4ea4-8c24-7f3a91b8208c",
      end: {
        x: -5080,
        y: -40,
      },
      endId: "9350c5ff-087a-4a7a-8f17-c8f3e5458138",
      name: "TwoWayHEdge",
      id: "09bf0c87-ce3d-493b-bc9b-20efadc5dead",
    },
    {
      start: {
        x: -5080,
        y: -40,
      },
      startId: "9350c5ff-087a-4a7a-8f17-c8f3e5458138",
      end: {
        x: -5580,
        y: -60,
      },
      endId: "907b7cd2-e2e3-4948-992a-13da506fd363",
      name: "TwoWayHEdge",
      id: "662d2501-755a-4a79-9568-f8a897937277",
    },
    {
      start: {
        x: -5580,
        y: -60,
      },
      startId: "907b7cd2-e2e3-4948-992a-13da506fd363",
      end: {
        x: -6080,
        y: -40,
      },
      endId: "fe56d5d5-d729-4a43-8cf0-549b843f461c",
      name: "TwoWayHEdge",
      id: "72b26f96-2bc4-491e-8ae5-d1bd551cb006",
    },
    {
      start: {
        x: -6080,
        y: -40,
      },
      startId: "fe56d5d5-d729-4a43-8cf0-549b843f461c",
      end: {
        x: -6100,
        y: -480,
      },
      endId: "c8841ca8-5553-4e8c-98a8-7d561c0d5198",
      name: "TwoWayVEdge",
      id: "57b37289-3c05-41b1-b9fe-7a0e08625689",
    },
    {
      start: {
        x: -6100,
        y: -480,
      },
      startId: "c8841ca8-5553-4e8c-98a8-7d561c0d5198",
      end: {
        x: -6080,
        y: -920,
      },
      endId: "6dabc016-ac47-4893-acc5-33b69851864b",
      name: "TwoWayVEdge",
      id: "d8b9c370-667d-4536-a594-8af23385217c",
    },
    {
      start: {
        x: -6080,
        y: -920,
      },
      startId: "6dabc016-ac47-4893-acc5-33b69851864b",
      end: {
        x: -5540,
        y: -920,
      },
      endId: "22f03d57-c089-4d12-bdca-dc3ce8748710",
      name: "TwoWayHEdge",
      id: "854f3a87-d670-470b-9bb6-e0b5e061562e",
    },
    {
      start: {
        x: -5540,
        y: -920,
      },
      startId: "22f03d57-c089-4d12-bdca-dc3ce8748710",
      end: {
        x: -5580,
        y: -60,
      },
      endId: "907b7cd2-e2e3-4948-992a-13da506fd363",
      name: "TwoWayVEdge",
      id: "b8ea999b-90b9-4e04-87d8-bf45924efbf2",
    },
    {
      start: {
        x: -6080,
        y: -920,
      },
      startId: "6dabc016-ac47-4893-acc5-33b69851864b",
      end: {
        x: -6080,
        y: -1420,
      },
      endId: "4b96b156-178c-461d-a9a5-ac62f3e2d9b1",
      name: "TwoWayVEdge",
      id: "ee443ef4-25dc-433d-aa50-da3a3f03882d",
    },
    {
      start: {
        x: -6080,
        y: -1420,
      },
      startId: "4b96b156-178c-461d-a9a5-ac62f3e2d9b1",
      end: {
        x: -6080,
        y: -1880,
      },
      endId: "ace15646-2f86-4609-9bfd-a8d04a8dab2e",
      name: "TwoWayVEdge",
      id: "d9b4cd77-28e5-4910-9413-722a83b8501a",
    },
    {
      start: {
        x: -6080,
        y: -1880,
      },
      startId: "ace15646-2f86-4609-9bfd-a8d04a8dab2e",
      end: {
        x: -5560,
        y: -1880,
      },
      endId: "a15f1509-02c5-43e1-9793-59a3219fda21",
      name: "TwoWayHEdge",
      id: "40a2b70f-f0c7-4c2a-b647-9adebda473a8",
    },
    {
      start: {
        x: -5560,
        y: -1880,
      },
      startId: "a15f1509-02c5-43e1-9793-59a3219fda21",
      end: {
        x: -5040,
        y: -1880,
      },
      endId: "a02fa542-5203-43c2-b36a-3a2a5625a130",
      name: "TwoWayHEdge",
      id: "f9a04b92-0c3d-464c-9eb6-8a476b3cda26",
    },
    {
      start: {
        x: -5040,
        y: -1880,
      },
      startId: "a02fa542-5203-43c2-b36a-3a2a5625a130",
      end: {
        x: -4560,
        y: -1880,
      },
      endId: "188a2812-b14c-4276-a094-132564d86a62",
      name: "TwoWayHEdge",
      id: "33bde82a-ff1f-4540-8747-0710dc9d5736",
    },
    {
      start: {
        x: -4560,
        y: -1880,
      },
      startId: "188a2812-b14c-4276-a094-132564d86a62",
      end: {
        x: -4000,
        y: -1860,
      },
      endId: "0968ba65-15c8-4ea1-a551-9e56ac759fc4",
      name: "TwoWayHEdge",
      id: "ef514c7e-79d2-412f-9e9a-bd7758e87714",
    },
    {
      start: {
        x: -4000,
        y: -1860,
      },
      startId: "0968ba65-15c8-4ea1-a551-9e56ac759fc4",
      end: {
        x: -3960,
        y: -1360,
      },
      endId: "e01f502c-8394-4a1c-a9aa-c98684a686d6",
      name: "TwoWayVEdge",
      id: "438ab6c4-1b80-4aff-afde-81b44a89f826",
    },
    {
      start: {
        x: -3960,
        y: -1360,
      },
      startId: "e01f502c-8394-4a1c-a9aa-c98684a686d6",
      end: {
        x: -4000,
        y: -840,
      },
      endId: "cb5057d6-f678-4bcd-9a7d-bac8f482d0c3",
      name: "TwoWayVEdge",
      id: "4004dfb8-6386-4a95-a252-157503dfad2e",
    },
    {
      start: {
        x: -4000,
        y: -840,
      },
      startId: "cb5057d6-f678-4bcd-9a7d-bac8f482d0c3",
      end: {
        x: -3980,
        y: -440,
      },
      endId: "b13d49b8-f27f-4f73-b8c9-e37138ec49f4",
      name: "TwoWayVEdge",
      id: "5fb43710-aefa-4403-92e8-4d1d0ad0ecd3",
    },
    {
      start: {
        x: -3980,
        y: -440,
      },
      startId: "b13d49b8-f27f-4f73-b8c9-e37138ec49f4",
      end: {
        x: -4520,
        y: -440,
      },
      endId: "e7ace51b-ed58-45e3-88b8-56327d14e628",
      name: "TwoWayHEdge",
      id: "9ce51c10-363d-4d71-b064-1ba81993f6e9",
    },
    {
      start: {
        x: -4520,
        y: -440,
      },
      startId: "e7ace51b-ed58-45e3-88b8-56327d14e628",
      end: {
        x: -4520,
        y: -860,
      },
      endId: "697775d0-cd32-4b03-96a5-965613cedeef",
      name: "TwoWayVEdge",
      id: "d56a76bd-7969-41f5-a134-c25dcfb0f0c0",
    },
  ],
};
export default hawaiianIslandsCaveB3Left;
