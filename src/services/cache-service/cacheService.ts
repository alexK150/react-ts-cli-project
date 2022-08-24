import localforage from "localforage";

export const fileCache = localforage.createInstance({
    name: 'filecache'
})
