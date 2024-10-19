/*
Copyright 2024 New Vector Ltd.
Copyright 2017 Vector Creations Ltd

SPDX-License-Identifier: AGPL-3.0-only OR GPL-3.0-only
Please see LICENSE files in the repository root for full details.
*/

import { IndexedDBStoreWorker } from "matrix-js-sdk/src/indexeddb-worker";

const remoteWorker = new IndexedDBStoreWorker(postMessage as InstanceType<typeof Worker>["postMessage"]);

global.onmessage = remoteWorker.onMessage;