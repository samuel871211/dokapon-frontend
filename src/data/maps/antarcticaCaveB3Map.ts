import type { GraphJSON } from "global";

const antarcticaCaveB3Map: GraphJSON = {
  vertices: [
    {
      position: {
        x: 140,
        y: 0,
      },
      name: "BattleField",
      id: "4b36b206-9e45-4efd-9f71-7abd39a9e072",
      edges: [
        "470b5200-bee3-4ab9-8725-41d9430f56cd",
        "839d2042-e446-4e1f-b197-5ed5c546de2f",
      ],
      area: "AntarcticaCaveB3",
      right: "bb2f3157-ac8c-42d1-b90b-6c54437b1692",
      left: "b7b1397f-2695-43a2-a173-d2b3c419fce2",
    },
    {
      id: "bb2f3157-ac8c-42d1-b90b-6c54437b1692",
      name: "CaveField",
      position: {
        x: 760,
        y: 20,
      },
      edges: ["470b5200-bee3-4ab9-8725-41d9430f56cd"],
      area: "AntarcticaCaveB3",
      left: "4b36b206-9e45-4efd-9f71-7abd39a9e072",
    },
    {
      id: "b7b1397f-2695-43a2-a173-d2b3c419fce2",
      name: "TreasureField",
      position: {
        x: -400,
        y: 20,
      },
      edges: [
        "839d2042-e446-4e1f-b197-5ed5c546de2f",
        "362ed72c-0f18-4d8c-9672-a8ef0976ec6c",
      ],
      area: "AntarcticaCaveB3",
      right: "4b36b206-9e45-4efd-9f71-7abd39a9e072",
      top: "12e66a49-9c9d-49ba-8e3f-a7adc1ef4180",
    },
    {
      id: "12e66a49-9c9d-49ba-8e3f-a7adc1ef4180",
      name: "BattleField",
      position: {
        x: -380,
        y: -480,
      },
      edges: [
        "362ed72c-0f18-4d8c-9672-a8ef0976ec6c",
        "7639ffd0-470c-4ad3-955a-26727ee8e6f8",
      ],
      area: "AntarcticaCaveB3",
      bottom: "b7b1397f-2695-43a2-a173-d2b3c419fce2",
      left: "eb4b2684-25cf-41c6-89ea-c58012db6b54",
    },
    {
      id: "eb4b2684-25cf-41c6-89ea-c58012db6b54",
      name: "BattleField",
      position: {
        x: -900,
        y: -460,
      },
      edges: [
        "7639ffd0-470c-4ad3-955a-26727ee8e6f8",
        "a34decab-787b-4bb7-a984-222fe59ae5af",
        "0da68160-27fa-451b-8b25-69b482c800f3",
      ],
      area: "AntarcticaCaveB3",
      right: "12e66a49-9c9d-49ba-8e3f-a7adc1ef4180",
      top: "0d79379b-4324-4756-bf72-14fb3f4c644b",
      left: "3df2b644-f893-48e5-8a16-8397c4f584f3",
    },
    {
      id: "0d79379b-4324-4756-bf72-14fb3f4c644b",
      name: "BattleField",
      position: {
        x: -860,
        y: -940,
      },
      edges: [
        "a34decab-787b-4bb7-a984-222fe59ae5af",
        "c81aa031-3062-4f1d-acf9-265b49979533",
      ],
      area: "AntarcticaCaveB3",
      bottom: "eb4b2684-25cf-41c6-89ea-c58012db6b54",
      top: "dbfb0e2c-2cfd-43b5-a7b1-880e090bc170",
    },
    {
      id: "dbfb0e2c-2cfd-43b5-a7b1-880e090bc170",
      name: "RedTreasureField",
      position: {
        x: -920,
        y: -1440,
      },
      edges: [
        "c81aa031-3062-4f1d-acf9-265b49979533",
        "d3ec86ee-59bd-4583-8dd9-5c69315e2a60",
      ],
      area: "AntarcticaCaveB3",
      bottom: "0d79379b-4324-4756-bf72-14fb3f4c644b",
      top: "9bf1c92e-6e3d-4f00-8076-6e576e7ef6df",
    },
    {
      id: "9bf1c92e-6e3d-4f00-8076-6e576e7ef6df",
      name: "TreasureField",
      position: {
        x: -880,
        y: -1920,
      },
      edges: [
        "d3ec86ee-59bd-4583-8dd9-5c69315e2a60",
        "01d1010b-f49f-4916-93f4-744065f77387",
      ],
      area: "AntarcticaCaveB3",
      bottom: "dbfb0e2c-2cfd-43b5-a7b1-880e090bc170",
      top: "9cadaa6e-a783-4dc0-8dcf-dd1f1db2a9ff",
    },
    {
      id: "3df2b644-f893-48e5-8a16-8397c4f584f3",
      name: "MagicBookField",
      position: {
        x: -1420,
        y: -480,
      },
      edges: [
        "0da68160-27fa-451b-8b25-69b482c800f3",
        "6f166e17-fb1f-429f-a554-a73d7211163e",
      ],
      area: "AntarcticaCaveB3",
      right: "eb4b2684-25cf-41c6-89ea-c58012db6b54",
      left: "2606e8fe-06c4-4c7e-95d3-509cba5c2be2",
    },
    {
      id: "2606e8fe-06c4-4c7e-95d3-509cba5c2be2",
      name: "TreasureField",
      position: {
        x: -1900,
        y: -460,
      },
      edges: [
        "6f166e17-fb1f-429f-a554-a73d7211163e",
        "fb5bb869-9cf4-4c12-8b07-1125d9cbd6bb",
      ],
      area: "AntarcticaCaveB3",
      right: "3df2b644-f893-48e5-8a16-8397c4f584f3",
      left: "26ebe477-2f54-4f2b-a9ad-b21e510fd4ec",
    },
    {
      id: "9cadaa6e-a783-4dc0-8dcf-dd1f1db2a9ff",
      name: "DamageField",
      position: {
        x: -920,
        y: -2420,
      },
      edges: [
        "01d1010b-f49f-4916-93f4-744065f77387",
        "539c6236-3cd8-4867-addf-4ae1cfa2c0f3",
        "d1d3929a-6743-4c40-97d9-241343943899",
      ],
      area: "AntarcticaCaveB3",
      bottom: "9bf1c92e-6e3d-4f00-8076-6e576e7ef6df",
      right: "a6adfd5e-3d62-48aa-87e2-27467bec64de",
      left: "fff3f3b6-0567-4860-b764-47da3b62cf52",
    },
    {
      id: "26ebe477-2f54-4f2b-a9ad-b21e510fd4ec",
      name: "BattleField",
      position: {
        x: -2400,
        y: -480,
      },
      edges: [
        "fb5bb869-9cf4-4c12-8b07-1125d9cbd6bb",
        "977c4940-257b-4270-a8af-d85c7ad9ceef",
      ],
      area: "AntarcticaCaveB3",
      right: "2606e8fe-06c4-4c7e-95d3-509cba5c2be2",
      top: "40969df2-b1bb-42cc-8bf0-93539b852121",
    },
    {
      id: "40969df2-b1bb-42cc-8bf0-93539b852121",
      name: "BattleField",
      position: {
        x: -2440,
        y: -940,
      },
      edges: [
        "977c4940-257b-4270-a8af-d85c7ad9ceef",
        "923bd9f9-e08d-4af3-aa9a-060e787aacbc",
      ],
      area: "AntarcticaCaveB3",
      bottom: "26ebe477-2f54-4f2b-a9ad-b21e510fd4ec",
      top: "f905c751-af90-44f1-81ce-9a4a3424572d",
    },
    {
      id: "f905c751-af90-44f1-81ce-9a4a3424572d",
      name: "TreasureField",
      position: {
        x: -2400,
        y: -1440,
      },
      edges: [
        "923bd9f9-e08d-4af3-aa9a-060e787aacbc",
        "70bec263-de2f-4e10-b69b-f63951ec90a8",
      ],
      area: "AntarcticaCaveB3",
      bottom: "40969df2-b1bb-42cc-8bf0-93539b852121",
      top: "ee5aaac6-bc25-49fe-9da1-49693ce20967",
    },
    {
      id: "ee5aaac6-bc25-49fe-9da1-49693ce20967",
      name: "BattleField",
      position: {
        x: -2380,
        y: -1940,
      },
      edges: [
        "70bec263-de2f-4e10-b69b-f63951ec90a8",
        "24b1b5a1-f214-49da-ab24-8a8f43052625",
      ],
      area: "AntarcticaCaveB3",
      bottom: "f905c751-af90-44f1-81ce-9a4a3424572d",
      top: "064fe2f6-be18-43ae-a240-74ad8d8d0b39",
    },
    {
      id: "064fe2f6-be18-43ae-a240-74ad8d8d0b39",
      name: "DamageField",
      position: {
        x: -2420,
        y: -2400,
      },
      edges: [
        "24b1b5a1-f214-49da-ab24-8a8f43052625",
        "d6b33a67-bbe1-4256-8de1-44e848af4d8b",
      ],
      area: "AntarcticaCaveB3",
      bottom: "ee5aaac6-bc25-49fe-9da1-49693ce20967",
      left: "654135f7-1d18-4b75-a7a4-4b1ec4e7b6eb",
    },
    {
      id: "a6adfd5e-3d62-48aa-87e2-27467bec64de",
      name: "BattleField",
      position: {
        x: -320,
        y: -2420,
      },
      edges: [
        "539c6236-3cd8-4867-addf-4ae1cfa2c0f3",
        "97537f30-b249-4dc0-b5ff-ef041493cf95",
      ],
      area: "AntarcticaCaveB3",
      left: "9cadaa6e-a783-4dc0-8dcf-dd1f1db2a9ff",
      top: "1f2a17f7-f11b-4aa5-bf0c-21c16eac930f",
    },
    {
      id: "1f2a17f7-f11b-4aa5-bf0c-21c16eac930f",
      name: "RedTreasureField",
      position: {
        x: -420,
        y: -2860,
      },
      edges: [
        "97537f30-b249-4dc0-b5ff-ef041493cf95",
        "23765559-2994-485c-8564-76f1e53320fa",
      ],
      area: "AntarcticaCaveB3",
      bottom: "a6adfd5e-3d62-48aa-87e2-27467bec64de",
      left: "a4e17439-0e75-4ee5-b574-10dbfc030e9a",
    },
    {
      id: "fff3f3b6-0567-4860-b764-47da3b62cf52",
      name: "RedTreasureField",
      position: {
        x: -1460,
        y: -2440,
      },
      edges: [
        "d1d3929a-6743-4c40-97d9-241343943899",
        "186f0fd9-1c80-42e2-a25b-35f1fa93af12",
      ],
      area: "AntarcticaCaveB3",
      right: "9cadaa6e-a783-4dc0-8dcf-dd1f1db2a9ff",
      top: "a4e17439-0e75-4ee5-b574-10dbfc030e9a",
    },
    {
      id: "a4e17439-0e75-4ee5-b574-10dbfc030e9a",
      name: "TreasureField",
      position: {
        x: -1440,
        y: -2900,
      },
      edges: [
        "186f0fd9-1c80-42e2-a25b-35f1fa93af12",
        "23765559-2994-485c-8564-76f1e53320fa",
        "10043db9-9cc6-4341-82f9-1624fb72c891",
      ],
      area: "AntarcticaCaveB3",
      bottom: "fff3f3b6-0567-4860-b764-47da3b62cf52",
      right: "1f2a17f7-f11b-4aa5-bf0c-21c16eac930f",
      left: "5e48c509-0dec-4c7d-9406-ec60401679de",
    },
    {
      id: "5e48c509-0dec-4c7d-9406-ec60401679de",
      name: "BattleField",
      position: {
        x: -2040,
        y: -2880,
      },
      edges: [
        "10043db9-9cc6-4341-82f9-1624fb72c891",
        "4439003d-89c6-4998-b00e-50db2ecb52e2",
      ],
      area: "AntarcticaCaveB3",
      right: "a4e17439-0e75-4ee5-b574-10dbfc030e9a",
      left: "2168b657-514d-42dc-bad7-7c3d694c00a2",
    },
    {
      id: "2168b657-514d-42dc-bad7-7c3d694c00a2",
      name: "MagicBookField",
      position: {
        x: -2640,
        y: -2900,
      },
      edges: [
        "4439003d-89c6-4998-b00e-50db2ecb52e2",
        "6e097eb6-1036-4b69-8d6a-1bbc4124a653",
      ],
      area: "AntarcticaCaveB3",
      right: "5e48c509-0dec-4c7d-9406-ec60401679de",
      top: "9fc08099-0431-438f-8662-bd793907a12c",
    },
    {
      id: "9fc08099-0431-438f-8662-bd793907a12c",
      name: "BattleField",
      position: {
        x: -2580,
        y: -3420,
      },
      edges: ["6e097eb6-1036-4b69-8d6a-1bbc4124a653"],
      area: "AntarcticaCaveB3",
      bottom: "2168b657-514d-42dc-bad7-7c3d694c00a2",
    },
    {
      id: "654135f7-1d18-4b75-a7a4-4b1ec4e7b6eb",
      name: "DamageField",
      position: {
        x: -3300,
        y: -2420,
      },
      edges: [
        "d6b33a67-bbe1-4256-8de1-44e848af4d8b",
        "1cb6bccf-aa55-4d4f-a05b-9ef9bbd9d8cc",
      ],
      area: "AntarcticaCaveB3",
      right: "064fe2f6-be18-43ae-a240-74ad8d8d0b39",
      left: "ff32de1a-d21e-45db-b374-72c1bada9b97",
    },
    {
      id: "ff32de1a-d21e-45db-b374-72c1bada9b97",
      name: "RedTreasureField",
      position: {
        x: -4140,
        y: -2440,
      },
      edges: [
        "1cb6bccf-aa55-4d4f-a05b-9ef9bbd9d8cc",
        "e2c8ea50-c042-430f-9a91-45331c6cea71",
      ],
      area: "AntarcticaCaveB3",
      right: "654135f7-1d18-4b75-a7a4-4b1ec4e7b6eb",
      left: "80d87560-06a7-464d-8dca-3000dd5e1f8b",
    },
    {
      id: "80d87560-06a7-464d-8dca-3000dd5e1f8b",
      name: "BattleField",
      position: {
        x: -5240,
        y: -2420,
      },
      edges: [
        "e2c8ea50-c042-430f-9a91-45331c6cea71",
        "40869773-a57f-4dea-886d-4f6e165d0632",
        "0976abd6-cb4d-4234-81df-9a69daed280c",
        "914a6ce7-955c-4aec-b771-e751169927e3",
      ],
      area: "AntarcticaCaveB3",
      right: "ff32de1a-d21e-45db-b374-72c1bada9b97",
      bottom: "5c7950c6-b701-4563-83d8-86cfd6eb4c42",
      left: "57e69d02-80b5-47d8-be59-57852dd77d89",
      top: "d4bbda80-99be-4ee9-84b2-160d7777205b",
    },
    {
      id: "5c7950c6-b701-4563-83d8-86cfd6eb4c42",
      name: "BattleField",
      position: {
        x: -5220,
        y: -1960,
      },
      edges: [
        "40869773-a57f-4dea-886d-4f6e165d0632",
        "ff41e850-4295-4ed3-abaf-118b49210645",
        "fe1b027a-aee7-415c-9fc4-f3ad66bfff89",
      ],
      area: "AntarcticaCaveB3",
      top: "80d87560-06a7-464d-8dca-3000dd5e1f8b",
      bottom: "9eef2eda-11b4-466a-b9a4-b773fe536058",
      right: "7ef4515c-89fc-4c8e-b4b2-a5d7d7399017",
    },
    {
      id: "57e69d02-80b5-47d8-be59-57852dd77d89",
      name: "TreasureField",
      position: {
        x: -5880,
        y: -2420,
      },
      edges: [
        "0976abd6-cb4d-4234-81df-9a69daed280c",
        "fa6c9916-5096-449b-b35a-ae7e84ca0623",
      ],
      area: "AntarcticaCaveB3",
      right: "80d87560-06a7-464d-8dca-3000dd5e1f8b",
      bottom: "8e5dad93-2cb0-4d4c-b7a7-e75794ea4711",
    },
    {
      id: "8e5dad93-2cb0-4d4c-b7a7-e75794ea4711",
      name: "BattleField",
      position: {
        x: -5860,
        y: -1480,
      },
      edges: [
        "fa6c9916-5096-449b-b35a-ae7e84ca0623",
        "e79d3da5-a14b-4379-bbd4-70066c2c9bd4",
      ],
      area: "AntarcticaCaveB3",
      top: "57e69d02-80b5-47d8-be59-57852dd77d89",
      right: "9eef2eda-11b4-466a-b9a4-b773fe536058",
    },
    {
      id: "9eef2eda-11b4-466a-b9a4-b773fe536058",
      name: "TreasureField",
      position: {
        x: -5260,
        y: -1460,
      },
      edges: [
        "ff41e850-4295-4ed3-abaf-118b49210645",
        "e79d3da5-a14b-4379-bbd4-70066c2c9bd4",
        "1261cce7-59d8-4907-bb0c-c33adab71248",
      ],
      area: "AntarcticaCaveB3",
      top: "5c7950c6-b701-4563-83d8-86cfd6eb4c42",
      left: "8e5dad93-2cb0-4d4c-b7a7-e75794ea4711",
      bottom: "b8db2cbf-dfeb-45b5-971b-3de41c53de30",
    },
    {
      id: "7ef4515c-89fc-4c8e-b4b2-a5d7d7399017",
      name: "BattleField",
      position: {
        x: -4600,
        y: -1920,
      },
      edges: [
        "fe1b027a-aee7-415c-9fc4-f3ad66bfff89",
        "57305d8e-074c-46e2-81d8-80561113d4c2",
      ],
      area: "AntarcticaCaveB3",
      left: "5c7950c6-b701-4563-83d8-86cfd6eb4c42",
      bottom: "bd479dd6-7742-4e3c-98ee-839bd644721a",
    },
    {
      id: "b8db2cbf-dfeb-45b5-971b-3de41c53de30",
      name: "BattleField",
      position: {
        x: -5200,
        y: -1040,
      },
      edges: [
        "1261cce7-59d8-4907-bb0c-c33adab71248",
        "f0eb1dfa-b78b-49e4-b203-6cd66151cd4b",
      ],
      area: "AntarcticaCaveB3",
      top: "9eef2eda-11b4-466a-b9a4-b773fe536058",
      right: "bd479dd6-7742-4e3c-98ee-839bd644721a",
    },
    {
      id: "bd479dd6-7742-4e3c-98ee-839bd644721a",
      name: "MagicBookField",
      position: {
        x: -4620,
        y: -1020,
      },
      edges: [
        "f0eb1dfa-b78b-49e4-b203-6cd66151cd4b",
        "57305d8e-074c-46e2-81d8-80561113d4c2",
        "9fa8410f-770c-41fb-95c7-14809d138d6b",
      ],
      area: "AntarcticaCaveB3",
      left: "b8db2cbf-dfeb-45b5-971b-3de41c53de30",
      top: "7ef4515c-89fc-4c8e-b4b2-a5d7d7399017",
      right: "3d1235b4-21a5-4c1d-a81c-e9c8bbddb947",
    },
    {
      id: "3d1235b4-21a5-4c1d-a81c-e9c8bbddb947",
      name: "DamageField",
      position: {
        x: -4100,
        y: -1000,
      },
      edges: [
        "9fa8410f-770c-41fb-95c7-14809d138d6b",
        "41c2bb0e-a47f-4476-8ae0-651b1c4bf1db",
      ],
      area: "AntarcticaCaveB3",
      left: "bd479dd6-7742-4e3c-98ee-839bd644721a",
      right: "1dd68c70-fed9-42b7-9a3d-be46ed34f68d",
    },
    {
      id: "1dd68c70-fed9-42b7-9a3d-be46ed34f68d",
      name: "BattleField",
      position: {
        x: -3540,
        y: -980,
      },
      edges: [
        "41c2bb0e-a47f-4476-8ae0-651b1c4bf1db",
        "1fc8e2e0-da72-4a69-af0d-a90d65d5cab2",
      ],
      area: "AntarcticaCaveB3",
      left: "3d1235b4-21a5-4c1d-a81c-e9c8bbddb947",
      bottom: "0884984b-ca04-4f94-8f37-3fb995e746cf",
    },
    {
      id: "0884984b-ca04-4f94-8f37-3fb995e746cf",
      name: "KeyTreasureField",
      position: {
        x: -3520,
        y: -480,
      },
      edges: ["1fc8e2e0-da72-4a69-af0d-a90d65d5cab2"],
      area: "AntarcticaCaveB3",
      top: "1dd68c70-fed9-42b7-9a3d-be46ed34f68d",
    },
    {
      id: "d4bbda80-99be-4ee9-84b2-160d7777205b",
      name: "BattleField",
      position: {
        x: -5280,
        y: -3280,
      },
      edges: [
        "914a6ce7-955c-4aec-b771-e751169927e3",
        "bb86c6d8-596d-42bf-aa9e-5bd274c01c56",
        "877a18ad-e96f-4437-bfa7-94eaac1a1391",
      ],
      area: "AntarcticaCaveB3",
      bottom: "80d87560-06a7-464d-8dca-3000dd5e1f8b",
      right: "987bf887-b060-440b-804d-3442cd09225c",
      left: "2d967202-9ea5-4290-9619-db6bfd687830",
    },
    {
      id: "987bf887-b060-440b-804d-3442cd09225c",
      name: "TreasureField",
      position: {
        x: -4640,
        y: -3340,
      },
      edges: [
        "bb86c6d8-596d-42bf-aa9e-5bd274c01c56",
        "8f9f7229-f642-4c4a-ab3c-87abe4033847",
      ],
      area: "AntarcticaCaveB3",
      left: "d4bbda80-99be-4ee9-84b2-160d7777205b",
      top: "d9513211-a08d-43ff-b562-028af0bf8329",
    },
    {
      id: "2d967202-9ea5-4290-9619-db6bfd687830",
      name: "MagicBookField",
      position: {
        x: -5880,
        y: -3320,
      },
      edges: [
        "877a18ad-e96f-4437-bfa7-94eaac1a1391",
        "df98dcbe-75d8-4afa-88bc-55fe5127375c",
      ],
      area: "AntarcticaCaveB3",
      right: "d4bbda80-99be-4ee9-84b2-160d7777205b",
      top: "f214782b-9216-4beb-b214-e1235529ba41",
    },
    {
      id: "f214782b-9216-4beb-b214-e1235529ba41",
      name: "BattleField",
      position: {
        x: -5940,
        y: -3800,
      },
      edges: [
        "df98dcbe-75d8-4afa-88bc-55fe5127375c",
        "acaf87e8-95b0-4d1f-94e3-6d510aa2cb3f",
        "42b42df1-be60-49c1-b348-a43e0e481762",
      ],
      area: "AntarcticaCaveB3",
      bottom: "2d967202-9ea5-4290-9619-db6bfd687830",
      top: "64046f89-e3aa-4bed-a2fd-5b126d1f362c",
      right: "7fce86b7-4ceb-4e4a-9166-46aeacee442c",
    },
    {
      id: "64046f89-e3aa-4bed-a2fd-5b126d1f362c",
      name: "BattleField",
      position: {
        x: -5880,
        y: -4240,
      },
      edges: [
        "acaf87e8-95b0-4d1f-94e3-6d510aa2cb3f",
        "b5e94db2-d9d8-4e99-9ecf-14496050fe32",
      ],
      area: "AntarcticaCaveB3",
      bottom: "f214782b-9216-4beb-b214-e1235529ba41",
      top: "9008cb75-f580-4687-baf5-09d81298168e",
    },
    {
      id: "9008cb75-f580-4687-baf5-09d81298168e",
      name: "TreasureField",
      position: {
        x: -5920,
        y: -4660,
      },
      edges: [
        "b5e94db2-d9d8-4e99-9ecf-14496050fe32",
        "8d3db283-ea43-41da-90d7-cfa082e1a54b",
        "926ed99d-31a2-4e6b-821e-fa9aeff9768f",
      ],
      area: "AntarcticaCaveB3",
      bottom: "64046f89-e3aa-4bed-a2fd-5b126d1f362c",
      right: "7b976d12-4ea3-4e39-bafd-31aa70aea0c3",
      top: "8b52adda-6fa2-44db-bcb9-eb24f55b7c9a",
    },
    {
      id: "7b976d12-4ea3-4e39-bafd-31aa70aea0c3",
      name: "DamageField",
      position: {
        x: -5300,
        y: -4660,
      },
      edges: [
        "8d3db283-ea43-41da-90d7-cfa082e1a54b",
        "838e6e5c-7e4c-4b68-bdc9-d08fa1d1be83",
      ],
      area: "AntarcticaCaveB3",
      left: "9008cb75-f580-4687-baf5-09d81298168e",
      bottom: "7fce86b7-4ceb-4e4a-9166-46aeacee442c",
    },
    {
      id: "7fce86b7-4ceb-4e4a-9166-46aeacee442c",
      name: "TreasureField",
      position: {
        x: -5360,
        y: -3860,
      },
      edges: [
        "838e6e5c-7e4c-4b68-bdc9-d08fa1d1be83",
        "42b42df1-be60-49c1-b348-a43e0e481762",
      ],
      area: "AntarcticaCaveB3",
      top: "7b976d12-4ea3-4e39-bafd-31aa70aea0c3",
      left: "f214782b-9216-4beb-b214-e1235529ba41",
    },
    {
      id: "d9513211-a08d-43ff-b562-028af0bf8329",
      name: "BattleField",
      position: {
        x: -4540,
        y: -4180,
      },
      edges: [
        "8f9f7229-f642-4c4a-ab3c-87abe4033847",
        "4657b747-1332-4cf4-aa35-2cae652148f6",
      ],
      area: "AntarcticaCaveB3",
      bottom: "987bf887-b060-440b-804d-3442cd09225c",
      top: "03d6112b-ecfd-43bb-b153-2f659f33bae6",
    },
    {
      id: "03d6112b-ecfd-43bb-b153-2f659f33bae6",
      name: "MagicBookField",
      position: {
        x: -4620,
        y: -5120,
      },
      edges: [
        "4657b747-1332-4cf4-aa35-2cae652148f6",
        "0d67a6ed-b372-42c6-93f8-e0a55c094513",
      ],
      area: "AntarcticaCaveB3",
      bottom: "d9513211-a08d-43ff-b562-028af0bf8329",
      left: "7755a23a-92a9-4b7b-954f-9d2a72ff10fb",
    },
    {
      id: "8b52adda-6fa2-44db-bcb9-eb24f55b7c9a",
      name: "BattleField",
      position: {
        x: -5840,
        y: -5140,
      },
      edges: [
        "926ed99d-31a2-4e6b-821e-fa9aeff9768f",
        "f95ad1cc-b883-4f0e-a71e-78f5282d83bf",
      ],
      area: "AntarcticaCaveB3",
      bottom: "9008cb75-f580-4687-baf5-09d81298168e",
      right: "7755a23a-92a9-4b7b-954f-9d2a72ff10fb",
    },
    {
      id: "7755a23a-92a9-4b7b-954f-9d2a72ff10fb",
      name: "BattleField",
      position: {
        x: -5220,
        y: -5120,
      },
      edges: [
        "f95ad1cc-b883-4f0e-a71e-78f5282d83bf",
        "0d67a6ed-b372-42c6-93f8-e0a55c094513",
        "c6800f6c-0e21-4e25-89ed-290e93972dc8",
      ],
      area: "AntarcticaCaveB3",
      left: "8b52adda-6fa2-44db-bcb9-eb24f55b7c9a",
      right: "03d6112b-ecfd-43bb-b153-2f659f33bae6",
      top: "a44279a4-f904-42c3-ab8a-78ebcf1e611f",
    },
    {
      id: "a44279a4-f904-42c3-ab8a-78ebcf1e611f",
      name: "TreasureField",
      position: {
        x: -5180,
        y: -5620,
      },
      edges: [
        "c6800f6c-0e21-4e25-89ed-290e93972dc8",
        "00ca1cb9-930f-45e3-bf8c-cdd1274e614e",
      ],
      area: "AntarcticaCaveB3",
      bottom: "7755a23a-92a9-4b7b-954f-9d2a72ff10fb",
      right: "55cc133f-0d2c-471f-9218-d7c2f5c2ce02",
    },
    {
      id: "55cc133f-0d2c-471f-9218-d7c2f5c2ce02",
      name: "BattleField",
      position: {
        x: -3980,
        y: -5560,
      },
      edges: [
        "00ca1cb9-930f-45e3-bf8c-cdd1274e614e",
        "5a218ddd-5f05-4b74-93d3-b58f827ddf71",
      ],
      area: "AntarcticaCaveB3",
      left: "a44279a4-f904-42c3-ab8a-78ebcf1e611f",
      right: "03458e55-c8dc-464a-a409-dc251a34429d",
    },
    {
      id: "03458e55-c8dc-464a-a409-dc251a34429d",
      name: "TreasureField",
      position: {
        x: -2840,
        y: -5600,
      },
      edges: [
        "5a218ddd-5f05-4b74-93d3-b58f827ddf71",
        "1def015a-35ad-4836-a012-7a48301fc244",
      ],
      area: "AntarcticaCaveB3",
      left: "55cc133f-0d2c-471f-9218-d7c2f5c2ce02",
      bottom: "dcd5eca1-d405-49f8-8903-f02353fe3c60",
    },
    {
      id: "dcd5eca1-d405-49f8-8903-f02353fe3c60",
      name: "BattleField",
      position: {
        x: -2760,
        y: -5160,
      },
      edges: [
        "1def015a-35ad-4836-a012-7a48301fc244",
        "4beda4e7-2521-4308-9725-9ed52292d510",
      ],
      area: "AntarcticaCaveB3",
      top: "03458e55-c8dc-464a-a409-dc251a34429d",
      bottom: "aab50f48-1d9e-47d8-b9f2-3e9086169894",
    },
    {
      id: "aab50f48-1d9e-47d8-b9f2-3e9086169894",
      name: "DamageField",
      position: {
        x: -2820,
        y: -4700,
      },
      edges: [
        "4beda4e7-2521-4308-9725-9ed52292d510",
        "fd761611-64f6-4d9b-982f-be88ef46d362",
        "ee76d295-35d7-461d-a91c-5ae364677671",
      ],
      area: "AntarcticaCaveB3",
      top: "dcd5eca1-d405-49f8-8903-f02353fe3c60",
      bottom: "f61cd429-f5b0-4232-8aa2-d703615682f9",
      right: "85279553-d219-41d0-93fc-dc3503d82073",
    },
    {
      id: "f61cd429-f5b0-4232-8aa2-d703615682f9",
      name: "BattleField",
      position: {
        x: -2680,
        y: -4260,
      },
      edges: [
        "fd761611-64f6-4d9b-982f-be88ef46d362",
        "d799afcc-36be-4d35-b54f-9b89743e43c4",
      ],
      area: "AntarcticaCaveB3",
      top: "aab50f48-1d9e-47d8-b9f2-3e9086169894",
      bottom: "e3ff174f-c378-469b-9708-44945a85210b",
    },
    {
      id: "e3ff174f-c378-469b-9708-44945a85210b",
      name: "BattleField",
      position: {
        x: -2720,
        y: -3780,
      },
      edges: ["d799afcc-36be-4d35-b54f-9b89743e43c4"],
      area: "AntarcticaCaveB3",
      top: "f61cd429-f5b0-4232-8aa2-d703615682f9",
    },
    {
      id: "85279553-d219-41d0-93fc-dc3503d82073",
      name: "DamageField",
      position: {
        x: -2180,
        y: -4740,
      },
      edges: [
        "ee76d295-35d7-461d-a91c-5ae364677671",
        "0e79ea36-cf76-419a-bf78-b239806e14c7",
      ],
      area: "AntarcticaCaveB3",
      left: "aab50f48-1d9e-47d8-b9f2-3e9086169894",
      top: "2c9291d3-8542-45e4-939c-b741930e923d",
    },
    {
      id: "2c9291d3-8542-45e4-939c-b741930e923d",
      name: "DamageField",
      position: {
        x: -2060,
        y: -5180,
      },
      edges: [
        "0e79ea36-cf76-419a-bf78-b239806e14c7",
        "2b16209b-a24e-4cae-9632-606d92c03e65",
      ],
      area: "AntarcticaCaveB3",
      bottom: "85279553-d219-41d0-93fc-dc3503d82073",
      right: "cd00cf83-f626-454a-a8ba-51afe761c0a4",
    },
    {
      id: "cd00cf83-f626-454a-a8ba-51afe761c0a4",
      name: "BattleField",
      position: {
        x: -1440,
        y: -5200,
      },
      edges: [
        "2b16209b-a24e-4cae-9632-606d92c03e65",
        "c91eeb52-fcd3-409a-b6d9-6dddc361a30c",
        "9ea5a968-f17c-4d16-8c8e-27c043e17b64",
        "4047f079-e29d-4575-bb33-ff733cdd1981",
      ],
      area: "AntarcticaCaveB3",
      left: "2c9291d3-8542-45e4-939c-b741930e923d",
      right: "dc3e3085-c323-4fc7-a002-8240c48f1037",
      bottom: "207efc52-5114-4d1a-bcc5-089e300bb58e",
      top: "99312529-51fb-4f90-a6eb-9c6423eaab8c",
    },
    {
      id: "dc3e3085-c323-4fc7-a002-8240c48f1037",
      name: "BattleField",
      position: {
        x: -740,
        y: -5220,
      },
      edges: [
        "c91eeb52-fcd3-409a-b6d9-6dddc361a30c",
        "e7b32c34-4ac6-448e-9918-4a3a1d301338",
      ],
      area: "AntarcticaCaveB3",
      left: "cd00cf83-f626-454a-a8ba-51afe761c0a4",
      bottom: "87ab67f5-85c0-4ad4-b23e-07747ad4f0e8",
    },
    {
      id: "207efc52-5114-4d1a-bcc5-089e300bb58e",
      name: "BattleField",
      position: {
        x: -1400,
        y: -4420,
      },
      edges: [
        "9ea5a968-f17c-4d16-8c8e-27c043e17b64",
        "617386bc-15cc-494c-b424-03894a579669",
      ],
      area: "AntarcticaCaveB3",
      top: "cd00cf83-f626-454a-a8ba-51afe761c0a4",
      right: "c0e4e44f-86af-4f34-b3e8-03bb0fa27a23",
    },
    {
      id: "c0e4e44f-86af-4f34-b3e8-03bb0fa27a23",
      name: "BattleField",
      position: {
        x: -720,
        y: -4360,
      },
      edges: [
        "617386bc-15cc-494c-b424-03894a579669",
        "f1b7ddb4-3953-4d0a-8856-6ed104056a07",
      ],
      area: "AntarcticaCaveB3",
      left: "207efc52-5114-4d1a-bcc5-089e300bb58e",
      top: "87ab67f5-85c0-4ad4-b23e-07747ad4f0e8",
    },
    {
      id: "87ab67f5-85c0-4ad4-b23e-07747ad4f0e8",
      name: "TreasureField",
      position: {
        x: -640,
        y: -4780,
      },
      edges: [
        "e7b32c34-4ac6-448e-9918-4a3a1d301338",
        "f1b7ddb4-3953-4d0a-8856-6ed104056a07",
      ],
      area: "AntarcticaCaveB3",
      top: "dc3e3085-c323-4fc7-a002-8240c48f1037",
      bottom: "c0e4e44f-86af-4f34-b3e8-03bb0fa27a23",
    },
    {
      id: "99312529-51fb-4f90-a6eb-9c6423eaab8c",
      name: "TreasureField",
      position: {
        x: -1400,
        y: -5660,
      },
      edges: [
        "4047f079-e29d-4575-bb33-ff733cdd1981",
        "45e919d5-f3f6-4ec9-be4e-4965d0167140",
      ],
      area: "AntarcticaCaveB3",
      bottom: "cd00cf83-f626-454a-a8ba-51afe761c0a4",
      right: "26901b05-063f-4e08-b604-117e1e391623",
    },
    {
      id: "26901b05-063f-4e08-b604-117e1e391623",
      name: "BattleField",
      position: {
        x: -800,
        y: -5680,
      },
      edges: [
        "45e919d5-f3f6-4ec9-be4e-4965d0167140",
        "22ffb35f-7391-4e73-96e1-54dd423dda69",
      ],
      area: "AntarcticaCaveB3",
      left: "99312529-51fb-4f90-a6eb-9c6423eaab8c",
      top: "87b88e87-7443-43fd-a736-e317bd2b290a",
    },
    {
      id: "87b88e87-7443-43fd-a736-e317bd2b290a",
      name: "CaveField",
      position: {
        x: -760,
        y: -6180,
      },
      edges: ["22ffb35f-7391-4e73-96e1-54dd423dda69"],
      area: "AntarcticaCaveB3",
      bottom: "26901b05-063f-4e08-b604-117e1e391623",
    },
  ],
  edges: [
    {
      start: {
        x: 140,
        y: 0,
      },
      startId: "4b36b206-9e45-4efd-9f71-7abd39a9e072",
      end: {
        x: 760,
        y: 20,
      },
      endId: "bb2f3157-ac8c-42d1-b90b-6c54437b1692",
      name: "TwoWayHEdge",
      id: "470b5200-bee3-4ab9-8725-41d9430f56cd",
    },
    {
      start: {
        x: 140,
        y: 0,
      },
      startId: "4b36b206-9e45-4efd-9f71-7abd39a9e072",
      end: {
        x: -400,
        y: 20,
      },
      endId: "b7b1397f-2695-43a2-a173-d2b3c419fce2",
      name: "TwoWayHEdge",
      id: "839d2042-e446-4e1f-b197-5ed5c546de2f",
    },
    {
      start: {
        x: -400,
        y: 20,
      },
      startId: "b7b1397f-2695-43a2-a173-d2b3c419fce2",
      end: {
        x: -380,
        y: -480,
      },
      endId: "12e66a49-9c9d-49ba-8e3f-a7adc1ef4180",
      name: "TwoWayVEdge",
      id: "362ed72c-0f18-4d8c-9672-a8ef0976ec6c",
    },
    {
      start: {
        x: -380,
        y: -480,
      },
      startId: "12e66a49-9c9d-49ba-8e3f-a7adc1ef4180",
      end: {
        x: -900,
        y: -460,
      },
      endId: "eb4b2684-25cf-41c6-89ea-c58012db6b54",
      name: "TwoWayHEdge",
      id: "7639ffd0-470c-4ad3-955a-26727ee8e6f8",
    },
    {
      start: {
        x: -900,
        y: -460,
      },
      startId: "eb4b2684-25cf-41c6-89ea-c58012db6b54",
      end: {
        x: -860,
        y: -940,
      },
      endId: "0d79379b-4324-4756-bf72-14fb3f4c644b",
      name: "TwoWayVEdge",
      id: "a34decab-787b-4bb7-a984-222fe59ae5af",
    },
    {
      start: {
        x: -860,
        y: -940,
      },
      startId: "0d79379b-4324-4756-bf72-14fb3f4c644b",
      end: {
        x: -920,
        y: -1440,
      },
      endId: "dbfb0e2c-2cfd-43b5-a7b1-880e090bc170",
      name: "TwoWayVEdge",
      id: "c81aa031-3062-4f1d-acf9-265b49979533",
    },
    {
      start: {
        x: -920,
        y: -1440,
      },
      startId: "dbfb0e2c-2cfd-43b5-a7b1-880e090bc170",
      end: {
        x: -880,
        y: -1920,
      },
      endId: "9bf1c92e-6e3d-4f00-8076-6e576e7ef6df",
      name: "TwoWayVEdge",
      id: "d3ec86ee-59bd-4583-8dd9-5c69315e2a60",
    },
    {
      start: {
        x: -900,
        y: -460,
      },
      startId: "eb4b2684-25cf-41c6-89ea-c58012db6b54",
      end: {
        x: -1420,
        y: -480,
      },
      endId: "3df2b644-f893-48e5-8a16-8397c4f584f3",
      name: "TwoWayHEdge",
      id: "0da68160-27fa-451b-8b25-69b482c800f3",
    },
    {
      start: {
        x: -1420,
        y: -480,
      },
      startId: "3df2b644-f893-48e5-8a16-8397c4f584f3",
      end: {
        x: -1900,
        y: -460,
      },
      endId: "2606e8fe-06c4-4c7e-95d3-509cba5c2be2",
      name: "TwoWayHEdge",
      id: "6f166e17-fb1f-429f-a554-a73d7211163e",
    },
    {
      start: {
        x: -880,
        y: -1920,
      },
      startId: "9bf1c92e-6e3d-4f00-8076-6e576e7ef6df",
      end: {
        x: -920,
        y: -2420,
      },
      endId: "9cadaa6e-a783-4dc0-8dcf-dd1f1db2a9ff",
      name: "TwoWayVEdge",
      id: "01d1010b-f49f-4916-93f4-744065f77387",
    },
    {
      start: {
        x: -1900,
        y: -460,
      },
      startId: "2606e8fe-06c4-4c7e-95d3-509cba5c2be2",
      end: {
        x: -2400,
        y: -480,
      },
      endId: "26ebe477-2f54-4f2b-a9ad-b21e510fd4ec",
      name: "TwoWayHEdge",
      id: "fb5bb869-9cf4-4c12-8b07-1125d9cbd6bb",
    },
    {
      start: {
        x: -2400,
        y: -480,
      },
      startId: "26ebe477-2f54-4f2b-a9ad-b21e510fd4ec",
      end: {
        x: -2440,
        y: -940,
      },
      endId: "40969df2-b1bb-42cc-8bf0-93539b852121",
      name: "TwoWayVEdge",
      id: "977c4940-257b-4270-a8af-d85c7ad9ceef",
    },
    {
      start: {
        x: -2440,
        y: -940,
      },
      startId: "40969df2-b1bb-42cc-8bf0-93539b852121",
      end: {
        x: -2400,
        y: -1440,
      },
      endId: "f905c751-af90-44f1-81ce-9a4a3424572d",
      name: "TwoWayVEdge",
      id: "923bd9f9-e08d-4af3-aa9a-060e787aacbc",
    },
    {
      start: {
        x: -2400,
        y: -1440,
      },
      startId: "f905c751-af90-44f1-81ce-9a4a3424572d",
      end: {
        x: -2380,
        y: -1940,
      },
      endId: "ee5aaac6-bc25-49fe-9da1-49693ce20967",
      name: "TwoWayVEdge",
      id: "70bec263-de2f-4e10-b69b-f63951ec90a8",
    },
    {
      start: {
        x: -2380,
        y: -1940,
      },
      startId: "ee5aaac6-bc25-49fe-9da1-49693ce20967",
      end: {
        x: -2420,
        y: -2400,
      },
      endId: "064fe2f6-be18-43ae-a240-74ad8d8d0b39",
      name: "TwoWayVEdge",
      id: "24b1b5a1-f214-49da-ab24-8a8f43052625",
    },
    {
      start: {
        x: -920,
        y: -2420,
      },
      startId: "9cadaa6e-a783-4dc0-8dcf-dd1f1db2a9ff",
      end: {
        x: -320,
        y: -2420,
      },
      endId: "a6adfd5e-3d62-48aa-87e2-27467bec64de",
      name: "TwoWayHEdge",
      id: "539c6236-3cd8-4867-addf-4ae1cfa2c0f3",
    },
    {
      start: {
        x: -320,
        y: -2420,
      },
      startId: "a6adfd5e-3d62-48aa-87e2-27467bec64de",
      end: {
        x: -420,
        y: -2860,
      },
      endId: "1f2a17f7-f11b-4aa5-bf0c-21c16eac930f",
      name: "TwoWayVEdge",
      id: "97537f30-b249-4dc0-b5ff-ef041493cf95",
    },
    {
      start: {
        x: -920,
        y: -2420,
      },
      startId: "9cadaa6e-a783-4dc0-8dcf-dd1f1db2a9ff",
      end: {
        x: -1460,
        y: -2440,
      },
      endId: "fff3f3b6-0567-4860-b764-47da3b62cf52",
      name: "TwoWayHEdge",
      id: "d1d3929a-6743-4c40-97d9-241343943899",
    },
    {
      start: {
        x: -1460,
        y: -2440,
      },
      startId: "fff3f3b6-0567-4860-b764-47da3b62cf52",
      end: {
        x: -1440,
        y: -2900,
      },
      endId: "a4e17439-0e75-4ee5-b574-10dbfc030e9a",
      name: "TwoWayVEdge",
      id: "186f0fd9-1c80-42e2-a25b-35f1fa93af12",
    },
    {
      start: {
        x: -1440,
        y: -2900,
      },
      startId: "a4e17439-0e75-4ee5-b574-10dbfc030e9a",
      end: {
        x: -420,
        y: -2860,
      },
      endId: "1f2a17f7-f11b-4aa5-bf0c-21c16eac930f",
      name: "TwoWayHEdge",
      id: "23765559-2994-485c-8564-76f1e53320fa",
    },
    {
      start: {
        x: -1440,
        y: -2900,
      },
      startId: "a4e17439-0e75-4ee5-b574-10dbfc030e9a",
      end: {
        x: -2040,
        y: -2880,
      },
      endId: "5e48c509-0dec-4c7d-9406-ec60401679de",
      name: "TwoWayHEdge",
      id: "10043db9-9cc6-4341-82f9-1624fb72c891",
    },
    {
      start: {
        x: -2040,
        y: -2880,
      },
      startId: "5e48c509-0dec-4c7d-9406-ec60401679de",
      end: {
        x: -2640,
        y: -2900,
      },
      endId: "2168b657-514d-42dc-bad7-7c3d694c00a2",
      name: "TwoWayHEdge",
      id: "4439003d-89c6-4998-b00e-50db2ecb52e2",
    },
    {
      start: {
        x: -2640,
        y: -2900,
      },
      startId: "2168b657-514d-42dc-bad7-7c3d694c00a2",
      end: {
        x: -2580,
        y: -3420,
      },
      endId: "9fc08099-0431-438f-8662-bd793907a12c",
      name: "TwoWayVEdge",
      id: "6e097eb6-1036-4b69-8d6a-1bbc4124a653",
    },
    {
      start: {
        x: -2420,
        y: -2400,
      },
      startId: "064fe2f6-be18-43ae-a240-74ad8d8d0b39",
      end: {
        x: -3300,
        y: -2420,
      },
      endId: "654135f7-1d18-4b75-a7a4-4b1ec4e7b6eb",
      name: "TwoWayHEdge",
      id: "d6b33a67-bbe1-4256-8de1-44e848af4d8b",
    },
    {
      start: {
        x: -3300,
        y: -2420,
      },
      startId: "654135f7-1d18-4b75-a7a4-4b1ec4e7b6eb",
      end: {
        x: -4140,
        y: -2440,
      },
      endId: "ff32de1a-d21e-45db-b374-72c1bada9b97",
      name: "TwoWayHEdge",
      id: "1cb6bccf-aa55-4d4f-a05b-9ef9bbd9d8cc",
    },
    {
      start: {
        x: -4140,
        y: -2440,
      },
      startId: "ff32de1a-d21e-45db-b374-72c1bada9b97",
      end: {
        x: -5240,
        y: -2420,
      },
      endId: "80d87560-06a7-464d-8dca-3000dd5e1f8b",
      name: "TwoWayHEdge",
      id: "e2c8ea50-c042-430f-9a91-45331c6cea71",
    },
    {
      start: {
        x: -5240,
        y: -2420,
      },
      startId: "80d87560-06a7-464d-8dca-3000dd5e1f8b",
      end: {
        x: -5220,
        y: -1960,
      },
      endId: "5c7950c6-b701-4563-83d8-86cfd6eb4c42",
      name: "TwoWayVEdge",
      id: "40869773-a57f-4dea-886d-4f6e165d0632",
    },
    {
      start: {
        x: -5240,
        y: -2420,
      },
      startId: "80d87560-06a7-464d-8dca-3000dd5e1f8b",
      end: {
        x: -5880,
        y: -2420,
      },
      endId: "57e69d02-80b5-47d8-be59-57852dd77d89",
      name: "TwoWayHEdge",
      id: "0976abd6-cb4d-4234-81df-9a69daed280c",
    },
    {
      start: {
        x: -5880,
        y: -2420,
      },
      startId: "57e69d02-80b5-47d8-be59-57852dd77d89",
      end: {
        x: -5860,
        y: -1480,
      },
      endId: "8e5dad93-2cb0-4d4c-b7a7-e75794ea4711",
      name: "TwoWayVEdge",
      id: "fa6c9916-5096-449b-b35a-ae7e84ca0623",
    },
    {
      start: {
        x: -5220,
        y: -1960,
      },
      startId: "5c7950c6-b701-4563-83d8-86cfd6eb4c42",
      end: {
        x: -5260,
        y: -1460,
      },
      endId: "9eef2eda-11b4-466a-b9a4-b773fe536058",
      name: "TwoWayVEdge",
      id: "ff41e850-4295-4ed3-abaf-118b49210645",
    },
    {
      start: {
        x: -5860,
        y: -1480,
      },
      startId: "8e5dad93-2cb0-4d4c-b7a7-e75794ea4711",
      end: {
        x: -5260,
        y: -1460,
      },
      endId: "9eef2eda-11b4-466a-b9a4-b773fe536058",
      name: "TwoWayHEdge",
      id: "e79d3da5-a14b-4379-bbd4-70066c2c9bd4",
    },
    {
      start: {
        x: -5220,
        y: -1960,
      },
      startId: "5c7950c6-b701-4563-83d8-86cfd6eb4c42",
      end: {
        x: -4600,
        y: -1920,
      },
      endId: "7ef4515c-89fc-4c8e-b4b2-a5d7d7399017",
      name: "TwoWayHEdge",
      id: "fe1b027a-aee7-415c-9fc4-f3ad66bfff89",
    },
    {
      start: {
        x: -5260,
        y: -1460,
      },
      startId: "9eef2eda-11b4-466a-b9a4-b773fe536058",
      end: {
        x: -5200,
        y: -1040,
      },
      endId: "b8db2cbf-dfeb-45b5-971b-3de41c53de30",
      name: "TwoWayVEdge",
      id: "1261cce7-59d8-4907-bb0c-c33adab71248",
    },
    {
      start: {
        x: -5200,
        y: -1040,
      },
      startId: "b8db2cbf-dfeb-45b5-971b-3de41c53de30",
      end: {
        x: -4620,
        y: -1020,
      },
      endId: "bd479dd6-7742-4e3c-98ee-839bd644721a",
      name: "TwoWayHEdge",
      id: "f0eb1dfa-b78b-49e4-b203-6cd66151cd4b",
    },
    {
      start: {
        x: -4600,
        y: -1920,
      },
      startId: "7ef4515c-89fc-4c8e-b4b2-a5d7d7399017",
      end: {
        x: -4620,
        y: -1020,
      },
      endId: "bd479dd6-7742-4e3c-98ee-839bd644721a",
      name: "TwoWayVEdge",
      id: "57305d8e-074c-46e2-81d8-80561113d4c2",
    },
    {
      start: {
        x: -4620,
        y: -1020,
      },
      startId: "bd479dd6-7742-4e3c-98ee-839bd644721a",
      end: {
        x: -4100,
        y: -1000,
      },
      endId: "3d1235b4-21a5-4c1d-a81c-e9c8bbddb947",
      name: "TwoWayHEdge",
      id: "9fa8410f-770c-41fb-95c7-14809d138d6b",
    },
    {
      start: {
        x: -4100,
        y: -1000,
      },
      startId: "3d1235b4-21a5-4c1d-a81c-e9c8bbddb947",
      end: {
        x: -3540,
        y: -980,
      },
      endId: "1dd68c70-fed9-42b7-9a3d-be46ed34f68d",
      name: "TwoWayHEdge",
      id: "41c2bb0e-a47f-4476-8ae0-651b1c4bf1db",
    },
    {
      start: {
        x: -3540,
        y: -980,
      },
      startId: "1dd68c70-fed9-42b7-9a3d-be46ed34f68d",
      end: {
        x: -3520,
        y: -480,
      },
      endId: "0884984b-ca04-4f94-8f37-3fb995e746cf",
      name: "TwoWayVEdge",
      id: "1fc8e2e0-da72-4a69-af0d-a90d65d5cab2",
    },
    {
      start: {
        x: -5240,
        y: -2420,
      },
      startId: "80d87560-06a7-464d-8dca-3000dd5e1f8b",
      end: {
        x: -5280,
        y: -3280,
      },
      endId: "d4bbda80-99be-4ee9-84b2-160d7777205b",
      name: "TwoWayVEdge",
      id: "914a6ce7-955c-4aec-b771-e751169927e3",
    },
    {
      start: {
        x: -5280,
        y: -3280,
      },
      startId: "d4bbda80-99be-4ee9-84b2-160d7777205b",
      end: {
        x: -4640,
        y: -3340,
      },
      endId: "987bf887-b060-440b-804d-3442cd09225c",
      name: "TwoWayHEdge",
      id: "bb86c6d8-596d-42bf-aa9e-5bd274c01c56",
    },
    {
      start: {
        x: -5280,
        y: -3280,
      },
      startId: "d4bbda80-99be-4ee9-84b2-160d7777205b",
      end: {
        x: -5880,
        y: -3320,
      },
      endId: "2d967202-9ea5-4290-9619-db6bfd687830",
      name: "TwoWayHEdge",
      id: "877a18ad-e96f-4437-bfa7-94eaac1a1391",
    },
    {
      start: {
        x: -5880,
        y: -3320,
      },
      startId: "2d967202-9ea5-4290-9619-db6bfd687830",
      end: {
        x: -5940,
        y: -3800,
      },
      endId: "f214782b-9216-4beb-b214-e1235529ba41",
      name: "TwoWayVEdge",
      id: "df98dcbe-75d8-4afa-88bc-55fe5127375c",
    },
    {
      start: {
        x: -5940,
        y: -3800,
      },
      startId: "f214782b-9216-4beb-b214-e1235529ba41",
      end: {
        x: -5880,
        y: -4240,
      },
      endId: "64046f89-e3aa-4bed-a2fd-5b126d1f362c",
      name: "TwoWayVEdge",
      id: "acaf87e8-95b0-4d1f-94e3-6d510aa2cb3f",
    },
    {
      start: {
        x: -5880,
        y: -4240,
      },
      startId: "64046f89-e3aa-4bed-a2fd-5b126d1f362c",
      end: {
        x: -5920,
        y: -4660,
      },
      endId: "9008cb75-f580-4687-baf5-09d81298168e",
      name: "TwoWayVEdge",
      id: "b5e94db2-d9d8-4e99-9ecf-14496050fe32",
    },
    {
      start: {
        x: -5920,
        y: -4660,
      },
      startId: "9008cb75-f580-4687-baf5-09d81298168e",
      end: {
        x: -5300,
        y: -4660,
      },
      endId: "7b976d12-4ea3-4e39-bafd-31aa70aea0c3",
      name: "TwoWayHEdge",
      id: "8d3db283-ea43-41da-90d7-cfa082e1a54b",
    },
    {
      start: {
        x: -5300,
        y: -4660,
      },
      startId: "7b976d12-4ea3-4e39-bafd-31aa70aea0c3",
      end: {
        x: -5360,
        y: -3860,
      },
      endId: "7fce86b7-4ceb-4e4a-9166-46aeacee442c",
      name: "TwoWayVEdge",
      id: "838e6e5c-7e4c-4b68-bdc9-d08fa1d1be83",
    },
    {
      start: {
        x: -5940,
        y: -3800,
      },
      startId: "f214782b-9216-4beb-b214-e1235529ba41",
      end: {
        x: -5360,
        y: -3860,
      },
      endId: "7fce86b7-4ceb-4e4a-9166-46aeacee442c",
      name: "TwoWayHEdge",
      id: "42b42df1-be60-49c1-b348-a43e0e481762",
    },
    {
      start: {
        x: -4640,
        y: -3340,
      },
      startId: "987bf887-b060-440b-804d-3442cd09225c",
      end: {
        x: -4540,
        y: -4180,
      },
      endId: "d9513211-a08d-43ff-b562-028af0bf8329",
      name: "TwoWayVEdge",
      id: "8f9f7229-f642-4c4a-ab3c-87abe4033847",
    },
    {
      start: {
        x: -4540,
        y: -4180,
      },
      startId: "d9513211-a08d-43ff-b562-028af0bf8329",
      end: {
        x: -4620,
        y: -5120,
      },
      endId: "03d6112b-ecfd-43bb-b153-2f659f33bae6",
      name: "TwoWayVEdge",
      id: "4657b747-1332-4cf4-aa35-2cae652148f6",
    },
    {
      start: {
        x: -5920,
        y: -4660,
      },
      startId: "9008cb75-f580-4687-baf5-09d81298168e",
      end: {
        x: -5840,
        y: -5140,
      },
      endId: "8b52adda-6fa2-44db-bcb9-eb24f55b7c9a",
      name: "TwoWayVEdge",
      id: "926ed99d-31a2-4e6b-821e-fa9aeff9768f",
    },
    {
      start: {
        x: -5840,
        y: -5140,
      },
      startId: "8b52adda-6fa2-44db-bcb9-eb24f55b7c9a",
      end: {
        x: -5220,
        y: -5120,
      },
      endId: "7755a23a-92a9-4b7b-954f-9d2a72ff10fb",
      name: "TwoWayHEdge",
      id: "f95ad1cc-b883-4f0e-a71e-78f5282d83bf",
    },
    {
      start: {
        x: -5220,
        y: -5120,
      },
      startId: "7755a23a-92a9-4b7b-954f-9d2a72ff10fb",
      end: {
        x: -4620,
        y: -5120,
      },
      endId: "03d6112b-ecfd-43bb-b153-2f659f33bae6",
      name: "TwoWayHEdge",
      id: "0d67a6ed-b372-42c6-93f8-e0a55c094513",
    },
    {
      start: {
        x: -5220,
        y: -5120,
      },
      startId: "7755a23a-92a9-4b7b-954f-9d2a72ff10fb",
      end: {
        x: -5180,
        y: -5620,
      },
      endId: "a44279a4-f904-42c3-ab8a-78ebcf1e611f",
      name: "TwoWayVEdge",
      id: "c6800f6c-0e21-4e25-89ed-290e93972dc8",
    },
    {
      start: {
        x: -5180,
        y: -5620,
      },
      startId: "a44279a4-f904-42c3-ab8a-78ebcf1e611f",
      end: {
        x: -3980,
        y: -5560,
      },
      endId: "55cc133f-0d2c-471f-9218-d7c2f5c2ce02",
      name: "TwoWayHEdge",
      id: "00ca1cb9-930f-45e3-bf8c-cdd1274e614e",
    },
    {
      start: {
        x: -3980,
        y: -5560,
      },
      startId: "55cc133f-0d2c-471f-9218-d7c2f5c2ce02",
      end: {
        x: -2840,
        y: -5600,
      },
      endId: "03458e55-c8dc-464a-a409-dc251a34429d",
      name: "TwoWayHEdge",
      id: "5a218ddd-5f05-4b74-93d3-b58f827ddf71",
    },
    {
      start: {
        x: -2840,
        y: -5600,
      },
      startId: "03458e55-c8dc-464a-a409-dc251a34429d",
      end: {
        x: -2760,
        y: -5160,
      },
      endId: "dcd5eca1-d405-49f8-8903-f02353fe3c60",
      name: "TwoWayVEdge",
      id: "1def015a-35ad-4836-a012-7a48301fc244",
    },
    {
      start: {
        x: -2760,
        y: -5160,
      },
      startId: "dcd5eca1-d405-49f8-8903-f02353fe3c60",
      end: {
        x: -2820,
        y: -4700,
      },
      endId: "aab50f48-1d9e-47d8-b9f2-3e9086169894",
      name: "TwoWayVEdge",
      id: "4beda4e7-2521-4308-9725-9ed52292d510",
    },
    {
      start: {
        x: -2820,
        y: -4700,
      },
      startId: "aab50f48-1d9e-47d8-b9f2-3e9086169894",
      end: {
        x: -2680,
        y: -4260,
      },
      endId: "f61cd429-f5b0-4232-8aa2-d703615682f9",
      name: "TwoWayVEdge",
      id: "fd761611-64f6-4d9b-982f-be88ef46d362",
    },
    {
      start: {
        x: -2680,
        y: -4260,
      },
      startId: "f61cd429-f5b0-4232-8aa2-d703615682f9",
      end: {
        x: -2720,
        y: -3780,
      },
      endId: "e3ff174f-c378-469b-9708-44945a85210b",
      name: "TwoWayVEdge",
      id: "d799afcc-36be-4d35-b54f-9b89743e43c4",
    },
    {
      start: {
        x: -2820,
        y: -4700,
      },
      startId: "aab50f48-1d9e-47d8-b9f2-3e9086169894",
      end: {
        x: -2180,
        y: -4740,
      },
      endId: "85279553-d219-41d0-93fc-dc3503d82073",
      name: "TwoWayHEdge",
      id: "ee76d295-35d7-461d-a91c-5ae364677671",
    },
    {
      start: {
        x: -2180,
        y: -4740,
      },
      startId: "85279553-d219-41d0-93fc-dc3503d82073",
      end: {
        x: -2060,
        y: -5180,
      },
      endId: "2c9291d3-8542-45e4-939c-b741930e923d",
      name: "TwoWayVEdge",
      id: "0e79ea36-cf76-419a-bf78-b239806e14c7",
    },
    {
      start: {
        x: -2060,
        y: -5180,
      },
      startId: "2c9291d3-8542-45e4-939c-b741930e923d",
      end: {
        x: -1440,
        y: -5200,
      },
      endId: "cd00cf83-f626-454a-a8ba-51afe761c0a4",
      name: "TwoWayHEdge",
      id: "2b16209b-a24e-4cae-9632-606d92c03e65",
    },
    {
      start: {
        x: -1440,
        y: -5200,
      },
      startId: "cd00cf83-f626-454a-a8ba-51afe761c0a4",
      end: {
        x: -740,
        y: -5220,
      },
      endId: "dc3e3085-c323-4fc7-a002-8240c48f1037",
      name: "TwoWayHEdge",
      id: "c91eeb52-fcd3-409a-b6d9-6dddc361a30c",
    },
    {
      start: {
        x: -1440,
        y: -5200,
      },
      startId: "cd00cf83-f626-454a-a8ba-51afe761c0a4",
      end: {
        x: -1400,
        y: -4420,
      },
      endId: "207efc52-5114-4d1a-bcc5-089e300bb58e",
      name: "TwoWayVEdge",
      id: "9ea5a968-f17c-4d16-8c8e-27c043e17b64",
    },
    {
      start: {
        x: -1400,
        y: -4420,
      },
      startId: "207efc52-5114-4d1a-bcc5-089e300bb58e",
      end: {
        x: -720,
        y: -4360,
      },
      endId: "c0e4e44f-86af-4f34-b3e8-03bb0fa27a23",
      name: "TwoWayHEdge",
      id: "617386bc-15cc-494c-b424-03894a579669",
    },
    {
      start: {
        x: -740,
        y: -5220,
      },
      startId: "dc3e3085-c323-4fc7-a002-8240c48f1037",
      end: {
        x: -640,
        y: -4780,
      },
      endId: "87ab67f5-85c0-4ad4-b23e-07747ad4f0e8",
      name: "TwoWayVEdge",
      id: "e7b32c34-4ac6-448e-9918-4a3a1d301338",
    },
    {
      start: {
        x: -640,
        y: -4780,
      },
      startId: "87ab67f5-85c0-4ad4-b23e-07747ad4f0e8",
      end: {
        x: -720,
        y: -4360,
      },
      endId: "c0e4e44f-86af-4f34-b3e8-03bb0fa27a23",
      name: "TwoWayVEdge",
      id: "f1b7ddb4-3953-4d0a-8856-6ed104056a07",
    },
    {
      start: {
        x: -1440,
        y: -5200,
      },
      startId: "cd00cf83-f626-454a-a8ba-51afe761c0a4",
      end: {
        x: -1400,
        y: -5660,
      },
      endId: "99312529-51fb-4f90-a6eb-9c6423eaab8c",
      name: "TwoWayVEdge",
      id: "4047f079-e29d-4575-bb33-ff733cdd1981",
    },
    {
      start: {
        x: -1400,
        y: -5660,
      },
      startId: "99312529-51fb-4f90-a6eb-9c6423eaab8c",
      end: {
        x: -800,
        y: -5680,
      },
      endId: "26901b05-063f-4e08-b604-117e1e391623",
      name: "TwoWayHEdge",
      id: "45e919d5-f3f6-4ec9-be4e-4965d0167140",
    },
    {
      start: {
        x: -800,
        y: -5680,
      },
      startId: "26901b05-063f-4e08-b604-117e1e391623",
      end: {
        x: -760,
        y: -6180,
      },
      endId: "87b88e87-7443-43fd-a736-e317bd2b290a",
      name: "TwoWayVEdge",
      id: "22ffb35f-7391-4e73-96e1-54dd423dda69",
    },
  ],
};
export default antarcticaCaveB3Map;
