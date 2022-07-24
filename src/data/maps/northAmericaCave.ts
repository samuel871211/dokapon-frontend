import { Vertex, Edge } from "global";

const northAmericaCave: { vertices: Vertex[]; edges: Edge[] } = {
  vertices: [
    {
      area: "NorthAmericaCave",
      position: {
        x: 40,
        y: 0,
      },
      name: "BattleField",
      id: "198ed2de-4ec6-43d8-8a26-62cb81366583",
      edges: [
        "c9c78de0-82a7-4ce4-bc8f-4ce8bb420539",
        "c0dbb465-26b8-44ea-83f2-b276692c4b7e",
        "3529d19b-a7ab-41f6-bd7c-4d9ce4fc2344",
      ],
      top: "773e3fb0-e470-42e0-93da-c214246bd3c3",
      left: "bab1a948-3cdb-454d-91d4-830cfc0973e7",
      bottom: "7b613abf-b3fc-4adf-bdfe-1d4b52a9568d",
    },
    {
      id: "773e3fb0-e470-42e0-93da-c214246bd3c3",

      area: "NorthAmericaCave",
      name: "TreasureField",
      position: {
        x: 80,
        y: -440,
      },
      edges: [
        "c9c78de0-82a7-4ce4-bc8f-4ce8bb420539",
        "b6d37c22-923c-4bb0-8769-7a08816dd4d2",
      ],
      bottom: "198ed2de-4ec6-43d8-8a26-62cb81366583",
      right: "89f81f54-47c9-4220-9bf3-a17511abedb3",
    },
    {
      id: "89f81f54-47c9-4220-9bf3-a17511abedb3",

      area: "NorthAmericaCave",
      name: "CaveField",
      position: {
        x: 940,
        y: -460,
      },
      edges: ["b6d37c22-923c-4bb0-8769-7a08816dd4d2"],
      left: "773e3fb0-e470-42e0-93da-c214246bd3c3",
    },
    {
      id: "bab1a948-3cdb-454d-91d4-830cfc0973e7",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -840,
        y: 20,
      },
      edges: [
        "c0dbb465-26b8-44ea-83f2-b276692c4b7e",
        "fcb77e67-ce06-414e-819f-ae7997ba9525",
      ],
      right: "198ed2de-4ec6-43d8-8a26-62cb81366583",
      bottom: "ff0c10a0-1089-4307-a2d1-c1f2e09cd1ea",
    },
    {
      id: "ff0c10a0-1089-4307-a2d1-c1f2e09cd1ea",

      area: "NorthAmericaCave",
      name: "TreasureField",
      position: {
        x: -940,
        y: 500,
      },
      edges: [
        "fcb77e67-ce06-414e-819f-ae7997ba9525",
        "97296afa-0e9f-434c-be10-41086edf8d1e",
      ],
      top: "bab1a948-3cdb-454d-91d4-830cfc0973e7",
      right: "d7acc9c3-7f0a-4392-924c-a31284292f2a",
    },
    {
      id: "d7acc9c3-7f0a-4392-924c-a31284292f2a",

      area: "NorthAmericaCave",
      name: "MagicField",
      position: {
        x: -420,
        y: 460,
      },
      edges: [
        "97296afa-0e9f-434c-be10-41086edf8d1e",
        "83ab0d32-95fb-4c9f-af1f-33a26bb6292f",
      ],
      left: "ff0c10a0-1089-4307-a2d1-c1f2e09cd1ea",
      right: "7b613abf-b3fc-4adf-bdfe-1d4b52a9568d",
    },
    {
      id: "7b613abf-b3fc-4adf-bdfe-1d4b52a9568d",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: 120,
        y: 500,
      },
      edges: [
        "83ab0d32-95fb-4c9f-af1f-33a26bb6292f",
        "3529d19b-a7ab-41f6-bd7c-4d9ce4fc2344",
        "4b09c228-d213-48e5-abf4-c354d670342a",
      ],
      left: "d7acc9c3-7f0a-4392-924c-a31284292f2a",
      top: "198ed2de-4ec6-43d8-8a26-62cb81366583",
      bottom: "a0464df8-7ac1-4723-92fa-8fad47ed9214",
    },
    {
      id: "a0464df8-7ac1-4723-92fa-8fad47ed9214",

      area: "NorthAmericaCave",
      name: "MagicField",
      position: {
        x: 100,
        y: 1020,
      },
      edges: [
        "4b09c228-d213-48e5-abf4-c354d670342a",
        "797db4d3-f52c-4cd5-9aff-2341375d283e",
      ],
      top: "7b613abf-b3fc-4adf-bdfe-1d4b52a9568d",
      left: "66fcb9d2-d411-4b2c-bad8-eb52fffff44e",
    },
    {
      id: "66fcb9d2-d411-4b2c-bad8-eb52fffff44e",

      area: "NorthAmericaCave",
      name: "DamageField",
      position: {
        x: -520,
        y: 1000,
      },
      edges: [
        "797db4d3-f52c-4cd5-9aff-2341375d283e",
        "43878990-307f-4aad-9304-654a32209639",
      ],
      right: "a0464df8-7ac1-4723-92fa-8fad47ed9214",
      left: "d0727e13-5541-41ba-96ac-0b6a7b619064",
    },
    {
      id: "d0727e13-5541-41ba-96ac-0b6a7b619064",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -1200,
        y: 1020,
      },
      edges: [
        "43878990-307f-4aad-9304-654a32209639",
        "560df729-c59c-4a52-9b09-dcdcd0be0333",
      ],
      right: "66fcb9d2-d411-4b2c-bad8-eb52fffff44e",
      bottom: "00f3432a-34a0-4542-a073-aa40c2328d88",
    },
    {
      id: "00f3432a-34a0-4542-a073-aa40c2328d88",

      area: "NorthAmericaCave",
      name: "TreasureField",
      position: {
        x: -1200,
        y: 1420,
      },
      edges: [
        "560df729-c59c-4a52-9b09-dcdcd0be0333",
        "f34535a6-d63f-48df-886a-8e57c8021daf",
        "a320e478-489c-4a81-8b8e-86495fe66185",
      ],
      top: "d0727e13-5541-41ba-96ac-0b6a7b619064",
      right: "8ec96330-b237-48cb-9646-4ee77984bd63",
      left: "c7aa53f0-7fb9-40dd-85d6-0eb339035574",
    },
    {
      id: "8ec96330-b237-48cb-9646-4ee77984bd63",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -640,
        y: 1400,
      },
      edges: [
        "f34535a6-d63f-48df-886a-8e57c8021daf",
        "5b40e85e-e18e-4aaa-b5ee-8b76dfe75a13",
      ],
      left: "00f3432a-34a0-4542-a073-aa40c2328d88",
      bottom: "bd935092-ecf7-4ab9-882d-a608b4ed6ab9",
    },
    {
      id: "bd935092-ecf7-4ab9-882d-a608b4ed6ab9",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -680,
        y: 1800,
      },
      edges: [
        "5b40e85e-e18e-4aaa-b5ee-8b76dfe75a13",
        "a67aa36c-f7a2-4ad2-8685-3705e51b1d0b",
      ],
      top: "8ec96330-b237-48cb-9646-4ee77984bd63",
      right: "0c9f60cc-1586-420b-9d63-fdda06143c6e",
    },
    {
      id: "c7aa53f0-7fb9-40dd-85d6-0eb339035574",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -1740,
        y: 1400,
      },
      edges: [
        "a320e478-489c-4a81-8b8e-86495fe66185",
        "7c55f12e-3a36-4d6a-962c-ff29a48c2fa5",
      ],
      right: "00f3432a-34a0-4542-a073-aa40c2328d88",
      bottom: "ec84d02b-8ee8-4401-b4ab-f70e1321b88f",
    },
    {
      id: "ec84d02b-8ee8-4401-b4ab-f70e1321b88f",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -1780,
        y: 1800,
      },
      edges: [
        "7c55f12e-3a36-4d6a-962c-ff29a48c2fa5",
        "d38e24db-3125-4e16-97e9-ff019a43ee4b",
      ],
      top: "c7aa53f0-7fb9-40dd-85d6-0eb339035574",
      left: "d62787b5-24da-49d3-9bdc-fdeeab14744b",
    },
    {
      id: "0c9f60cc-1586-420b-9d63-fdda06143c6e",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: 120,
        y: 1840,
      },
      edges: [
        "a67aa36c-f7a2-4ad2-8685-3705e51b1d0b",
        "451898b0-f95c-4718-af4e-5a74909a7d4f",
        "c067fda6-a345-48ed-817c-d45b62c204eb",
      ],
      left: "bd935092-ecf7-4ab9-882d-a608b4ed6ab9",
      right: "4aad9e53-b86d-4610-b7dc-d03d71a535cd",
      bottom: "492d0bc3-44a9-490a-9752-2e251e143fc5",
    },
    {
      id: "4aad9e53-b86d-4610-b7dc-d03d71a535cd",

      area: "NorthAmericaCave",
      name: "TreasureField",
      position: {
        x: 720,
        y: 1840,
      },
      edges: [
        "451898b0-f95c-4718-af4e-5a74909a7d4f",
        "b7ffd2f7-0b2b-40e1-9878-1ef767d71118",
      ],
      left: "0c9f60cc-1586-420b-9d63-fdda06143c6e",
      bottom: "954fe1e3-79c9-4ba2-b851-2b69248bb3bc",
    },
    {
      id: "492d0bc3-44a9-490a-9752-2e251e143fc5",

      area: "NorthAmericaCave",
      name: "RedTreasureField",
      position: {
        x: 100,
        y: 2700,
      },
      edges: [
        "c067fda6-a345-48ed-817c-d45b62c204eb",
        "61be463b-603e-48fa-b843-6821a0166c87",
      ],
      top: "0c9f60cc-1586-420b-9d63-fdda06143c6e",
      right: "b1c2b54c-9e3d-441a-af0c-8a69cbcc7459",
    },
    {
      id: "b1c2b54c-9e3d-441a-af0c-8a69cbcc7459",

      area: "NorthAmericaCave",
      name: "RedTreasureField",
      position: {
        x: 740,
        y: 2680,
      },
      edges: [
        "61be463b-603e-48fa-b843-6821a0166c87",
        "ec880e8b-c307-43d8-b618-eab674c33020",
      ],
      left: "492d0bc3-44a9-490a-9752-2e251e143fc5",
      top: "954fe1e3-79c9-4ba2-b851-2b69248bb3bc",
    },
    {
      id: "954fe1e3-79c9-4ba2-b851-2b69248bb3bc",

      area: "NorthAmericaCave",
      name: "RedTreasureField",
      position: {
        x: 780,
        y: 2260,
      },
      edges: [
        "b7ffd2f7-0b2b-40e1-9878-1ef767d71118",
        "ec880e8b-c307-43d8-b618-eab674c33020",
      ],
      top: "4aad9e53-b86d-4610-b7dc-d03d71a535cd",
      bottom: "b1c2b54c-9e3d-441a-af0c-8a69cbcc7459",
    },
    {
      id: "d62787b5-24da-49d3-9bdc-fdeeab14744b",

      area: "NorthAmericaCave",
      name: "MagicField",
      position: {
        x: -2340,
        y: 1780,
      },
      edges: [
        "d38e24db-3125-4e16-97e9-ff019a43ee4b",
        "57bc5b36-8edd-429a-bb7e-40bf70440d5b",
      ],
      right: "ec84d02b-8ee8-4401-b4ab-f70e1321b88f",
      bottom: "9499e72b-efea-4936-8084-8c04746f3ac4",
    },
    {
      id: "9499e72b-efea-4936-8084-8c04746f3ac4",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -2400,
        y: 2380,
      },
      edges: [
        "57bc5b36-8edd-429a-bb7e-40bf70440d5b",
        "53718a27-242e-4206-b30b-8daf6cc45cde",
      ],
      top: "d62787b5-24da-49d3-9bdc-fdeeab14744b",
      left: "8bfe80c3-80f9-4bc0-a9fd-4366be4d3149",
    },
    {
      id: "8bfe80c3-80f9-4bc0-a9fd-4366be4d3149",

      area: "NorthAmericaCave",
      name: "GoldTreasureField",
      position: {
        x: -3660,
        y: 2380,
      },
      edges: [
        "53718a27-242e-4206-b30b-8daf6cc45cde",
        "b8b8ea3b-acba-4f22-9bcc-af18ab30f4c4",
      ],
      right: "9499e72b-efea-4936-8084-8c04746f3ac4",
      top: "805a80bf-e0f9-4fd3-977d-b8c16fb78cdb",
    },
    {
      id: "805a80bf-e0f9-4fd3-977d-b8c16fb78cdb",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -3680,
        y: 1900,
      },
      edges: [
        "b8b8ea3b-acba-4f22-9bcc-af18ab30f4c4",
        "d5ee206a-20bb-4f5e-a1a0-24a1b8fd7081",
        "45a92569-6cb9-4bdc-ad5b-7efbfaf2f618",
      ],
      bottom: "8bfe80c3-80f9-4bc0-a9fd-4366be4d3149",
      right: "084f9749-63f1-4d92-8d15-e3d86a73e346",
      left: "05b2fff5-f5a1-47bf-a682-db75ba748f81",
    },
    {
      id: "084f9749-63f1-4d92-8d15-e3d86a73e346",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -3020,
        y: 1860,
      },
      edges: [
        "d5ee206a-20bb-4f5e-a1a0-24a1b8fd7081",
        "a5c08bba-04c5-4e08-98e7-31dbdb08152a",
      ],
      left: "805a80bf-e0f9-4fd3-977d-b8c16fb78cdb",
      top: "4129fa7e-57de-4d77-9d86-fef76a3950fd",
    },
    {
      id: "4129fa7e-57de-4d77-9d86-fef76a3950fd",

      area: "NorthAmericaCave",
      name: "TreasureField",
      position: {
        x: -3080,
        y: 1340,
      },
      edges: [
        "a5c08bba-04c5-4e08-98e7-31dbdb08152a",
        "dc523980-3ccc-401e-a7e0-53f4708a5082",
      ],
      bottom: "084f9749-63f1-4d92-8d15-e3d86a73e346",
      left: "fedd2aaf-b218-40d9-9b16-01471ab4bee1",
    },
    {
      id: "fedd2aaf-b218-40d9-9b16-01471ab4bee1",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -4200,
        y: 1340,
      },
      edges: [
        "dc523980-3ccc-401e-a7e0-53f4708a5082",
        "58e5c6c2-4433-4a25-a8f6-70db26e0d668",
      ],
      right: "4129fa7e-57de-4d77-9d86-fef76a3950fd",
      bottom: "05b2fff5-f5a1-47bf-a682-db75ba748f81",
    },
    {
      id: "05b2fff5-f5a1-47bf-a682-db75ba748f81",

      area: "NorthAmericaCave",
      name: "RedTreasureField",
      position: {
        x: -4280,
        y: 1860,
      },
      edges: [
        "58e5c6c2-4433-4a25-a8f6-70db26e0d668",
        "45a92569-6cb9-4bdc-ad5b-7efbfaf2f618",
        "aa9331eb-aa3e-45fd-8d8c-702fcde6f14f",
      ],
      top: "fedd2aaf-b218-40d9-9b16-01471ab4bee1",
      right: "805a80bf-e0f9-4fd3-977d-b8c16fb78cdb",
      left: "fc5bc28f-1e7b-4e6d-b65f-eaf2bd5a6f79",
    },
    {
      id: "fc5bc28f-1e7b-4e6d-b65f-eaf2bd5a6f79",

      area: "NorthAmericaCave",
      name: "TreasureField",
      position: {
        x: -5000,
        y: 1880,
      },
      edges: [
        "aa9331eb-aa3e-45fd-8d8c-702fcde6f14f",
        "5acacb1e-24cb-4571-b501-de4c36b50d09",
      ],
      right: "05b2fff5-f5a1-47bf-a682-db75ba748f81",
      top: "aaded592-fc71-4e99-9b65-395b29b7e25c",
    },
    {
      id: "aaded592-fc71-4e99-9b65-395b29b7e25c",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -4960,
        y: 1300,
      },
      edges: [
        "5acacb1e-24cb-4571-b501-de4c36b50d09",
        "8ccbc733-fce1-49cc-8e49-3ec610b6388d",
      ],
      bottom: "fc5bc28f-1e7b-4e6d-b65f-eaf2bd5a6f79",
      top: "86debcd8-b59e-477b-9ec0-b330f9846644",
    },
    {
      id: "86debcd8-b59e-477b-9ec0-b330f9846644",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -5000,
        y: 760,
      },
      edges: [
        "8ccbc733-fce1-49cc-8e49-3ec610b6388d",
        "9e48fc8c-a813-431b-af1a-4a1d4ef870ea",
      ],
      bottom: "aaded592-fc71-4e99-9b65-395b29b7e25c",
      top: "9e5e9ded-6e63-4fd2-8a8d-6e510b3aae71",
    },
    {
      id: "9e5e9ded-6e63-4fd2-8a8d-6e510b3aae71",

      area: "NorthAmericaCave",
      name: "MagicField",
      position: {
        x: -4860,
        y: 200,
      },
      edges: [
        "9e48fc8c-a813-431b-af1a-4a1d4ef870ea",
        "d5734239-ef42-4bc1-ac46-f78f379731bd",
      ],
      bottom: "86debcd8-b59e-477b-9ec0-b330f9846644",
      top: "329498ba-4ce7-4dc0-ac24-917ebd8898c2",
    },
    {
      id: "329498ba-4ce7-4dc0-ac24-917ebd8898c2",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -4440,
        y: -300,
      },
      edges: [
        "d5734239-ef42-4bc1-ac46-f78f379731bd",
        "f6ce1b08-66e9-40b2-ae3a-52688f43b97e",
      ],
      bottom: "9e5e9ded-6e63-4fd2-8a8d-6e510b3aae71",
      right: "dfdd77f7-ef6b-46d8-9ce8-e68dcfa5ad44",
    },
    {
      id: "dfdd77f7-ef6b-46d8-9ce8-e68dcfa5ad44",

      area: "NorthAmericaCave",
      name: "TreasureField",
      position: {
        x: -3260,
        y: -300,
      },
      edges: [
        "f6ce1b08-66e9-40b2-ae3a-52688f43b97e",
        "ffe076af-c230-4a59-a839-d2394b3aed9d",
        "8f97fb21-0fb0-4dd8-a1f5-de8bb158c86d",
      ],
      left: "329498ba-4ce7-4dc0-ac24-917ebd8898c2",
      top: "dd293679-46e4-425e-b1c0-c052469fecf3",
      right: "049c91cd-c92f-411c-8ee3-a1e6f541e89a",
    },
    {
      id: "dd293679-46e4-425e-b1c0-c052469fecf3",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -3300,
        y: -720,
      },
      edges: [
        "ffe076af-c230-4a59-a839-d2394b3aed9d",
        "51c6de67-32cc-485f-bcef-3202181d07e1",
        "b5324cf1-e361-4a65-a20e-bc08bf3ecb9c",
      ],
      bottom: "dfdd77f7-ef6b-46d8-9ce8-e68dcfa5ad44",
      top: "48772076-2562-4d65-a049-db9f64d715cb",
      left: "c629381d-8bf0-4148-ae12-bcaf2456beef",
    },
    {
      id: "049c91cd-c92f-411c-8ee3-a1e6f541e89a",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -2580,
        y: -300,
      },
      edges: [
        "8f97fb21-0fb0-4dd8-a1f5-de8bb158c86d",
        "9add6213-5c16-43bd-a87a-c42f975aedec",
        "af8360c0-1759-41dc-8750-a1b1ec522d40",
      ],
      left: "dfdd77f7-ef6b-46d8-9ce8-e68dcfa5ad44",
      bottom: "03033d7e-e97b-4cc1-9778-2edccc324155",
      top: "9cff4590-fb10-4e7f-a1d2-8e79e63b53c3",
    },
    {
      id: "03033d7e-e97b-4cc1-9778-2edccc324155",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -2620,
        y: 40,
      },
      edges: [
        "9add6213-5c16-43bd-a87a-c42f975aedec",
        "e2ed397f-2768-4a0f-8288-a9fb9ef118f2",
      ],
      top: "049c91cd-c92f-411c-8ee3-a1e6f541e89a",
      right: "03722474-d675-4c16-8bb5-b4ace339dfd8",
    },
    {
      id: "9cff4590-fb10-4e7f-a1d2-8e79e63b53c3",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -2600,
        y: -1180,
      },
      edges: [
        "af8360c0-1759-41dc-8750-a1b1ec522d40",
        "5a128b6a-7c06-460d-a856-481414bd3453",
      ],
      bottom: "049c91cd-c92f-411c-8ee3-a1e6f541e89a",
      left: "48772076-2562-4d65-a049-db9f64d715cb",
    },
    {
      id: "03722474-d675-4c16-8bb5-b4ace339dfd8",

      area: "NorthAmericaCave",
      name: "TreasureField",
      position: {
        x: -2000,
        y: 20,
      },
      edges: [
        "e2ed397f-2768-4a0f-8288-a9fb9ef118f2",
        "c3c024a6-1689-4f83-a76a-6a9a7e8a9859",
      ],
      left: "03033d7e-e97b-4cc1-9778-2edccc324155",
      top: "4a990ade-9e0e-4d80-bf98-8ff0a9151c22",
    },
    {
      id: "4a990ade-9e0e-4d80-bf98-8ff0a9151c22",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -1900,
        y: -580,
      },
      edges: [
        "c3c024a6-1689-4f83-a76a-6a9a7e8a9859",
        "c2bdbec3-2313-4799-881b-6406a92393f0",
      ],
      bottom: "03722474-d675-4c16-8bb5-b4ace339dfd8",
      top: "be331816-0826-4f63-a193-5047d1cbdd2a",
    },
    {
      id: "48772076-2562-4d65-a049-db9f64d715cb",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -3220,
        y: -1200,
      },
      edges: [
        "51c6de67-32cc-485f-bcef-3202181d07e1",
        "5a128b6a-7c06-460d-a856-481414bd3453",
      ],
      bottom: "dd293679-46e4-425e-b1c0-c052469fecf3",
      right: "9cff4590-fb10-4e7f-a1d2-8e79e63b53c3",
    },
    {
      id: "be331816-0826-4f63-a193-5047d1cbdd2a",

      area: "NorthAmericaCave",
      name: "GoldTreasureField",
      position: {
        x: -2040,
        y: -1160,
      },
      edges: [
        "c2bdbec3-2313-4799-881b-6406a92393f0",
        "5f3f20d0-cffc-4c34-a37d-f58bd5aa6ae1",
      ],
      bottom: "4a990ade-9e0e-4d80-bf98-8ff0a9151c22",
      top: "beef17f8-efb7-4890-be94-6d3b4f1a9156",
    },
    {
      id: "beef17f8-efb7-4890-be94-6d3b4f1a9156",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -1980,
        y: -1740,
      },
      edges: [
        "5f3f20d0-cffc-4c34-a37d-f58bd5aa6ae1",
        "6a6b4ed4-fc91-4d3f-b7e1-18ceb1ca4c8c",
      ],
      bottom: "be331816-0826-4f63-a193-5047d1cbdd2a",
      left: "faa0285c-b497-4e1c-a23c-18eaf2f75237",
    },
    {
      id: "faa0285c-b497-4e1c-a23c-18eaf2f75237",

      area: "NorthAmericaCave",
      name: "DamageField",
      position: {
        x: -2600,
        y: -1760,
      },
      edges: [
        "6a6b4ed4-fc91-4d3f-b7e1-18ceb1ca4c8c",
        "b28afd1a-de6d-4dad-b8e7-59ee4372affd",
      ],
      right: "beef17f8-efb7-4890-be94-6d3b4f1a9156",
      left: "d5565a57-5654-4e89-bacd-81c19c0dd792",
    },
    {
      id: "d5565a57-5654-4e89-bacd-81c19c0dd792",

      area: "NorthAmericaCave",
      name: "KeyTreasureField",
      position: {
        x: -3220,
        y: -1720,
      },
      edges: ["b28afd1a-de6d-4dad-b8e7-59ee4372affd"],
      right: "faa0285c-b497-4e1c-a23c-18eaf2f75237",
    },
    {
      id: "c629381d-8bf0-4148-ae12-bcaf2456beef",

      area: "NorthAmericaCave",
      name: "MagicField",
      position: {
        x: -4060,
        y: -680,
      },
      edges: [
        "b5324cf1-e361-4a65-a20e-bc08bf3ecb9c",
        "df045320-696a-4e2b-bc15-0a79cc85e2d3",
      ],
      right: "dd293679-46e4-425e-b1c0-c052469fecf3",
      top: "86737677-1950-403d-b909-f4aa1600315e",
    },
    {
      id: "86737677-1950-403d-b909-f4aa1600315e",

      area: "NorthAmericaCave",
      name: "BattleField",
      position: {
        x: -4100,
        y: -1300,
      },
      edges: [
        "df045320-696a-4e2b-bc15-0a79cc85e2d3",
        "0bc8df66-67dc-4289-ae01-8606ee1d260a",
      ],
      bottom: "c629381d-8bf0-4148-ae12-bcaf2456beef",
      top: "b822d8a9-a374-44d9-b8b9-c4e850f50302",
    },
    {
      id: "b822d8a9-a374-44d9-b8b9-c4e850f50302",

      area: "NorthAmericaCave",
      name: "CaveField",
      position: {
        x: -3980,
        y: -1900,
      },
      edges: ["0bc8df66-67dc-4289-ae01-8606ee1d260a"],
      bottom: "86737677-1950-403d-b909-f4aa1600315e",
    },
  ],
  edges: [
    {
      start: {
        x: 40,
        y: 0,
      },
      startId: "198ed2de-4ec6-43d8-8a26-62cb81366583",
      end: {
        x: 80,
        y: -440,
      },
      endId: "773e3fb0-e470-42e0-93da-c214246bd3c3",
      name: "TwoWayVEdge",
      id: "c9c78de0-82a7-4ce4-bc8f-4ce8bb420539",
    },
    {
      start: {
        x: 80,
        y: -440,
      },
      startId: "773e3fb0-e470-42e0-93da-c214246bd3c3",
      end: {
        x: 940,
        y: -460,
      },
      endId: "89f81f54-47c9-4220-9bf3-a17511abedb3",
      name: "TwoWayHEdge",
      id: "b6d37c22-923c-4bb0-8769-7a08816dd4d2",
    },
    {
      start: {
        x: 40,
        y: 0,
      },
      startId: "198ed2de-4ec6-43d8-8a26-62cb81366583",
      end: {
        x: -840,
        y: 20,
      },
      endId: "bab1a948-3cdb-454d-91d4-830cfc0973e7",
      name: "TwoWayHEdge",
      id: "c0dbb465-26b8-44ea-83f2-b276692c4b7e",
    },
    {
      start: {
        x: -840,
        y: 20,
      },
      startId: "bab1a948-3cdb-454d-91d4-830cfc0973e7",
      end: {
        x: -940,
        y: 500,
      },
      endId: "ff0c10a0-1089-4307-a2d1-c1f2e09cd1ea",
      name: "TwoWayVEdge",
      id: "fcb77e67-ce06-414e-819f-ae7997ba9525",
    },
    {
      start: {
        x: -940,
        y: 500,
      },
      startId: "ff0c10a0-1089-4307-a2d1-c1f2e09cd1ea",
      end: {
        x: -420,
        y: 460,
      },
      endId: "d7acc9c3-7f0a-4392-924c-a31284292f2a",
      name: "TwoWayHEdge",
      id: "97296afa-0e9f-434c-be10-41086edf8d1e",
    },
    {
      start: {
        x: -420,
        y: 460,
      },
      startId: "d7acc9c3-7f0a-4392-924c-a31284292f2a",
      end: {
        x: 120,
        y: 500,
      },
      endId: "7b613abf-b3fc-4adf-bdfe-1d4b52a9568d",
      name: "TwoWayHEdge",
      id: "83ab0d32-95fb-4c9f-af1f-33a26bb6292f",
    },
    {
      start: {
        x: 40,
        y: 0,
      },
      startId: "198ed2de-4ec6-43d8-8a26-62cb81366583",
      end: {
        x: 120,
        y: 500,
      },
      endId: "7b613abf-b3fc-4adf-bdfe-1d4b52a9568d",
      name: "TwoWayVEdge",
      id: "3529d19b-a7ab-41f6-bd7c-4d9ce4fc2344",
    },
    {
      start: {
        x: 120,
        y: 500,
      },
      startId: "7b613abf-b3fc-4adf-bdfe-1d4b52a9568d",
      end: {
        x: 100,
        y: 1020,
      },
      endId: "a0464df8-7ac1-4723-92fa-8fad47ed9214",
      name: "TwoWayVEdge",
      id: "4b09c228-d213-48e5-abf4-c354d670342a",
    },
    {
      start: {
        x: 100,
        y: 1020,
      },
      startId: "a0464df8-7ac1-4723-92fa-8fad47ed9214",
      end: {
        x: -520,
        y: 1000,
      },
      endId: "66fcb9d2-d411-4b2c-bad8-eb52fffff44e",
      name: "TwoWayHEdge",
      id: "797db4d3-f52c-4cd5-9aff-2341375d283e",
    },
    {
      start: {
        x: -520,
        y: 1000,
      },
      startId: "66fcb9d2-d411-4b2c-bad8-eb52fffff44e",
      end: {
        x: -1200,
        y: 1020,
      },
      endId: "d0727e13-5541-41ba-96ac-0b6a7b619064",
      name: "TwoWayHEdge",
      id: "43878990-307f-4aad-9304-654a32209639",
    },
    {
      start: {
        x: -1200,
        y: 1020,
      },
      startId: "d0727e13-5541-41ba-96ac-0b6a7b619064",
      end: {
        x: -1200,
        y: 1420,
      },
      endId: "00f3432a-34a0-4542-a073-aa40c2328d88",
      name: "TwoWayVEdge",
      id: "560df729-c59c-4a52-9b09-dcdcd0be0333",
    },
    {
      start: {
        x: -1200,
        y: 1420,
      },
      startId: "00f3432a-34a0-4542-a073-aa40c2328d88",
      end: {
        x: -640,
        y: 1400,
      },
      endId: "8ec96330-b237-48cb-9646-4ee77984bd63",
      name: "TwoWayHEdge",
      id: "f34535a6-d63f-48df-886a-8e57c8021daf",
    },
    {
      start: {
        x: -640,
        y: 1400,
      },
      startId: "8ec96330-b237-48cb-9646-4ee77984bd63",
      end: {
        x: -680,
        y: 1800,
      },
      endId: "bd935092-ecf7-4ab9-882d-a608b4ed6ab9",
      name: "TwoWayVEdge",
      id: "5b40e85e-e18e-4aaa-b5ee-8b76dfe75a13",
    },
    {
      start: {
        x: -1200,
        y: 1420,
      },
      startId: "00f3432a-34a0-4542-a073-aa40c2328d88",
      end: {
        x: -1740,
        y: 1400,
      },
      endId: "c7aa53f0-7fb9-40dd-85d6-0eb339035574",
      name: "TwoWayHEdge",
      id: "a320e478-489c-4a81-8b8e-86495fe66185",
    },
    {
      start: {
        x: -1740,
        y: 1400,
      },
      startId: "c7aa53f0-7fb9-40dd-85d6-0eb339035574",
      end: {
        x: -1780,
        y: 1800,
      },
      endId: "ec84d02b-8ee8-4401-b4ab-f70e1321b88f",
      name: "TwoWayVEdge",
      id: "7c55f12e-3a36-4d6a-962c-ff29a48c2fa5",
    },
    {
      start: {
        x: -680,
        y: 1800,
      },
      startId: "bd935092-ecf7-4ab9-882d-a608b4ed6ab9",
      end: {
        x: 120,
        y: 1840,
      },
      endId: "0c9f60cc-1586-420b-9d63-fdda06143c6e",
      name: "TwoWayHEdge",
      id: "a67aa36c-f7a2-4ad2-8685-3705e51b1d0b",
    },
    {
      start: {
        x: 120,
        y: 1840,
      },
      startId: "0c9f60cc-1586-420b-9d63-fdda06143c6e",
      end: {
        x: 720,
        y: 1840,
      },
      endId: "4aad9e53-b86d-4610-b7dc-d03d71a535cd",
      name: "TwoWayHEdge",
      id: "451898b0-f95c-4718-af4e-5a74909a7d4f",
    },
    {
      start: {
        x: 120,
        y: 1840,
      },
      startId: "0c9f60cc-1586-420b-9d63-fdda06143c6e",
      end: {
        x: 100,
        y: 2700,
      },
      endId: "492d0bc3-44a9-490a-9752-2e251e143fc5",
      name: "TwoWayVEdge",
      id: "c067fda6-a345-48ed-817c-d45b62c204eb",
    },
    {
      start: {
        x: 100,
        y: 2700,
      },
      startId: "492d0bc3-44a9-490a-9752-2e251e143fc5",
      end: {
        x: 740,
        y: 2680,
      },
      endId: "b1c2b54c-9e3d-441a-af0c-8a69cbcc7459",
      name: "TwoWayHEdge",
      id: "61be463b-603e-48fa-b843-6821a0166c87",
    },
    {
      start: {
        x: 720,
        y: 1840,
      },
      startId: "4aad9e53-b86d-4610-b7dc-d03d71a535cd",
      end: {
        x: 780,
        y: 2260,
      },
      endId: "954fe1e3-79c9-4ba2-b851-2b69248bb3bc",
      name: "TwoWayVEdge",
      id: "b7ffd2f7-0b2b-40e1-9878-1ef767d71118",
    },
    {
      start: {
        x: 780,
        y: 2260,
      },
      startId: "954fe1e3-79c9-4ba2-b851-2b69248bb3bc",
      end: {
        x: 740,
        y: 2680,
      },
      endId: "b1c2b54c-9e3d-441a-af0c-8a69cbcc7459",
      name: "TwoWayVEdge",
      id: "ec880e8b-c307-43d8-b618-eab674c33020",
    },
    {
      start: {
        x: -1780,
        y: 1800,
      },
      startId: "ec84d02b-8ee8-4401-b4ab-f70e1321b88f",
      end: {
        x: -2340,
        y: 1780,
      },
      endId: "d62787b5-24da-49d3-9bdc-fdeeab14744b",
      name: "TwoWayHEdge",
      id: "d38e24db-3125-4e16-97e9-ff019a43ee4b",
    },
    {
      start: {
        x: -2340,
        y: 1780,
      },
      startId: "d62787b5-24da-49d3-9bdc-fdeeab14744b",
      end: {
        x: -2400,
        y: 2380,
      },
      endId: "9499e72b-efea-4936-8084-8c04746f3ac4",
      name: "TwoWayVEdge",
      id: "57bc5b36-8edd-429a-bb7e-40bf70440d5b",
    },
    {
      start: {
        x: -2400,
        y: 2380,
      },
      startId: "9499e72b-efea-4936-8084-8c04746f3ac4",
      end: {
        x: -3660,
        y: 2380,
      },
      endId: "8bfe80c3-80f9-4bc0-a9fd-4366be4d3149",
      name: "TwoWayHEdge",
      id: "53718a27-242e-4206-b30b-8daf6cc45cde",
    },
    {
      start: {
        x: -3660,
        y: 2380,
      },
      startId: "8bfe80c3-80f9-4bc0-a9fd-4366be4d3149",
      end: {
        x: -3680,
        y: 1900,
      },
      endId: "805a80bf-e0f9-4fd3-977d-b8c16fb78cdb",
      name: "TwoWayVEdge",
      id: "b8b8ea3b-acba-4f22-9bcc-af18ab30f4c4",
    },
    {
      start: {
        x: -3680,
        y: 1900,
      },
      startId: "805a80bf-e0f9-4fd3-977d-b8c16fb78cdb",
      end: {
        x: -3020,
        y: 1860,
      },
      endId: "084f9749-63f1-4d92-8d15-e3d86a73e346",
      name: "TwoWayHEdge",
      id: "d5ee206a-20bb-4f5e-a1a0-24a1b8fd7081",
    },
    {
      start: {
        x: -3020,
        y: 1860,
      },
      startId: "084f9749-63f1-4d92-8d15-e3d86a73e346",
      end: {
        x: -3080,
        y: 1340,
      },
      endId: "4129fa7e-57de-4d77-9d86-fef76a3950fd",
      name: "TwoWayVEdge",
      id: "a5c08bba-04c5-4e08-98e7-31dbdb08152a",
    },
    {
      start: {
        x: -3080,
        y: 1340,
      },
      startId: "4129fa7e-57de-4d77-9d86-fef76a3950fd",
      end: {
        x: -4200,
        y: 1340,
      },
      endId: "fedd2aaf-b218-40d9-9b16-01471ab4bee1",
      name: "TwoWayHEdge",
      id: "dc523980-3ccc-401e-a7e0-53f4708a5082",
    },
    {
      start: {
        x: -4200,
        y: 1340,
      },
      startId: "fedd2aaf-b218-40d9-9b16-01471ab4bee1",
      end: {
        x: -4280,
        y: 1860,
      },
      endId: "05b2fff5-f5a1-47bf-a682-db75ba748f81",
      name: "TwoWayVEdge",
      id: "58e5c6c2-4433-4a25-a8f6-70db26e0d668",
    },
    {
      start: {
        x: -4280,
        y: 1860,
      },
      startId: "05b2fff5-f5a1-47bf-a682-db75ba748f81",
      end: {
        x: -3680,
        y: 1900,
      },
      endId: "805a80bf-e0f9-4fd3-977d-b8c16fb78cdb",
      name: "TwoWayHEdge",
      id: "45a92569-6cb9-4bdc-ad5b-7efbfaf2f618",
    },
    {
      start: {
        x: -4280,
        y: 1860,
      },
      startId: "05b2fff5-f5a1-47bf-a682-db75ba748f81",
      end: {
        x: -5000,
        y: 1880,
      },
      endId: "fc5bc28f-1e7b-4e6d-b65f-eaf2bd5a6f79",
      name: "TwoWayHEdge",
      id: "aa9331eb-aa3e-45fd-8d8c-702fcde6f14f",
    },
    {
      start: {
        x: -5000,
        y: 1880,
      },
      startId: "fc5bc28f-1e7b-4e6d-b65f-eaf2bd5a6f79",
      end: {
        x: -4960,
        y: 1300,
      },
      endId: "aaded592-fc71-4e99-9b65-395b29b7e25c",
      name: "TwoWayVEdge",
      id: "5acacb1e-24cb-4571-b501-de4c36b50d09",
    },
    {
      start: {
        x: -4960,
        y: 1300,
      },
      startId: "aaded592-fc71-4e99-9b65-395b29b7e25c",
      end: {
        x: -5000,
        y: 760,
      },
      endId: "86debcd8-b59e-477b-9ec0-b330f9846644",
      name: "TwoWayVEdge",
      id: "8ccbc733-fce1-49cc-8e49-3ec610b6388d",
    },
    {
      start: {
        x: -5000,
        y: 760,
      },
      startId: "86debcd8-b59e-477b-9ec0-b330f9846644",
      end: {
        x: -4860,
        y: 200,
      },
      endId: "9e5e9ded-6e63-4fd2-8a8d-6e510b3aae71",
      name: "TwoWayVEdge",
      id: "9e48fc8c-a813-431b-af1a-4a1d4ef870ea",
    },
    {
      start: {
        x: -4860,
        y: 200,
      },
      startId: "9e5e9ded-6e63-4fd2-8a8d-6e510b3aae71",
      end: {
        x: -4440,
        y: -300,
      },
      endId: "329498ba-4ce7-4dc0-ac24-917ebd8898c2",
      name: "TwoWayVEdge",
      id: "d5734239-ef42-4bc1-ac46-f78f379731bd",
    },
    {
      start: {
        x: -4440,
        y: -300,
      },
      startId: "329498ba-4ce7-4dc0-ac24-917ebd8898c2",
      end: {
        x: -3260,
        y: -300,
      },
      endId: "dfdd77f7-ef6b-46d8-9ce8-e68dcfa5ad44",
      name: "TwoWayHEdge",
      id: "f6ce1b08-66e9-40b2-ae3a-52688f43b97e",
    },
    {
      start: {
        x: -3260,
        y: -300,
      },
      startId: "dfdd77f7-ef6b-46d8-9ce8-e68dcfa5ad44",
      end: {
        x: -3300,
        y: -720,
      },
      endId: "dd293679-46e4-425e-b1c0-c052469fecf3",
      name: "TwoWayVEdge",
      id: "ffe076af-c230-4a59-a839-d2394b3aed9d",
    },
    {
      start: {
        x: -3260,
        y: -300,
      },
      startId: "dfdd77f7-ef6b-46d8-9ce8-e68dcfa5ad44",
      end: {
        x: -2580,
        y: -300,
      },
      endId: "049c91cd-c92f-411c-8ee3-a1e6f541e89a",
      name: "TwoWayHEdge",
      id: "8f97fb21-0fb0-4dd8-a1f5-de8bb158c86d",
    },
    {
      start: {
        x: -2580,
        y: -300,
      },
      startId: "049c91cd-c92f-411c-8ee3-a1e6f541e89a",
      end: {
        x: -2620,
        y: 40,
      },
      endId: "03033d7e-e97b-4cc1-9778-2edccc324155",
      name: "TwoWayVEdge",
      id: "9add6213-5c16-43bd-a87a-c42f975aedec",
    },
    {
      start: {
        x: -2580,
        y: -300,
      },
      startId: "049c91cd-c92f-411c-8ee3-a1e6f541e89a",
      end: {
        x: -2600,
        y: -1180,
      },
      endId: "9cff4590-fb10-4e7f-a1d2-8e79e63b53c3",
      name: "TwoWayVEdge",
      id: "af8360c0-1759-41dc-8750-a1b1ec522d40",
    },
    {
      start: {
        x: -2620,
        y: 40,
      },
      startId: "03033d7e-e97b-4cc1-9778-2edccc324155",
      end: {
        x: -2000,
        y: 20,
      },
      endId: "03722474-d675-4c16-8bb5-b4ace339dfd8",
      name: "TwoWayHEdge",
      id: "e2ed397f-2768-4a0f-8288-a9fb9ef118f2",
    },
    {
      start: {
        x: -2000,
        y: 20,
      },
      startId: "03722474-d675-4c16-8bb5-b4ace339dfd8",
      end: {
        x: -1900,
        y: -580,
      },
      endId: "4a990ade-9e0e-4d80-bf98-8ff0a9151c22",
      name: "TwoWayVEdge",
      id: "c3c024a6-1689-4f83-a76a-6a9a7e8a9859",
    },
    {
      start: {
        x: -3300,
        y: -720,
      },
      startId: "dd293679-46e4-425e-b1c0-c052469fecf3",
      end: {
        x: -3220,
        y: -1200,
      },
      endId: "48772076-2562-4d65-a049-db9f64d715cb",
      name: "TwoWayVEdge",
      id: "51c6de67-32cc-485f-bcef-3202181d07e1",
    },
    {
      start: {
        x: -3220,
        y: -1200,
      },
      startId: "48772076-2562-4d65-a049-db9f64d715cb",
      end: {
        x: -2600,
        y: -1180,
      },
      endId: "9cff4590-fb10-4e7f-a1d2-8e79e63b53c3",
      name: "TwoWayHEdge",
      id: "5a128b6a-7c06-460d-a856-481414bd3453",
    },
    {
      start: {
        x: -1900,
        y: -580,
      },
      startId: "4a990ade-9e0e-4d80-bf98-8ff0a9151c22",
      end: {
        x: -2040,
        y: -1160,
      },
      endId: "be331816-0826-4f63-a193-5047d1cbdd2a",
      name: "TwoWayVEdge",
      id: "c2bdbec3-2313-4799-881b-6406a92393f0",
    },
    {
      start: {
        x: -2040,
        y: -1160,
      },
      startId: "be331816-0826-4f63-a193-5047d1cbdd2a",
      end: {
        x: -1980,
        y: -1740,
      },
      endId: "beef17f8-efb7-4890-be94-6d3b4f1a9156",
      name: "TwoWayVEdge",
      id: "5f3f20d0-cffc-4c34-a37d-f58bd5aa6ae1",
    },
    {
      start: {
        x: -1980,
        y: -1740,
      },
      startId: "beef17f8-efb7-4890-be94-6d3b4f1a9156",
      end: {
        x: -2600,
        y: -1760,
      },
      endId: "faa0285c-b497-4e1c-a23c-18eaf2f75237",
      name: "TwoWayHEdge",
      id: "6a6b4ed4-fc91-4d3f-b7e1-18ceb1ca4c8c",
    },
    {
      start: {
        x: -2600,
        y: -1760,
      },
      startId: "faa0285c-b497-4e1c-a23c-18eaf2f75237",
      end: {
        x: -3220,
        y: -1720,
      },
      endId: "d5565a57-5654-4e89-bacd-81c19c0dd792",
      name: "TwoWayHEdge",
      id: "b28afd1a-de6d-4dad-b8e7-59ee4372affd",
    },
    {
      start: {
        x: -3300,
        y: -720,
      },
      startId: "dd293679-46e4-425e-b1c0-c052469fecf3",
      end: {
        x: -4060,
        y: -680,
      },
      endId: "c629381d-8bf0-4148-ae12-bcaf2456beef",
      name: "TwoWayHEdge",
      id: "b5324cf1-e361-4a65-a20e-bc08bf3ecb9c",
    },
    {
      start: {
        x: -4060,
        y: -680,
      },
      startId: "c629381d-8bf0-4148-ae12-bcaf2456beef",
      end: {
        x: -4100,
        y: -1300,
      },
      endId: "86737677-1950-403d-b909-f4aa1600315e",
      name: "TwoWayVEdge",
      id: "df045320-696a-4e2b-bc15-0a79cc85e2d3",
    },
    {
      start: {
        x: -4100,
        y: -1300,
      },
      startId: "86737677-1950-403d-b909-f4aa1600315e",
      end: {
        x: -3980,
        y: -1900,
      },
      endId: "b822d8a9-a374-44d9-b8b9-c4e850f50302",
      name: "TwoWayVEdge",
      id: "0bc8df66-67dc-4289-ae01-8606ee1d260a",
    },
  ],
};
export default northAmericaCave;
