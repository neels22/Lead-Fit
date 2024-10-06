import { atom, selector } from "recoil";

// Atoms
export const networkAtom = atom({
    key: "networkAtom",
    default: 104,
});

export const JobsAtom = atom({
    key: "JobsAtom",
    default: 0,
});

export const NotiAtom = atom({
    key: "NotiAtom",
    default: 0,
});

export const MsgAtom = atom({
    key: "MsgAtom",
    default: 12,
});

// Selector
export const totalNoti = selector({
    key: "totalNoti",
    get: ({ get }) => {
        const networkCount = get(networkAtom);  // Renamed to avoid shadowing
        const msgCount = get(MsgAtom);          // Renamed to avoid shadowing
        const jobsCount = get(JobsAtom);        // Renamed to avoid shadowing
        const notiCount = get(NotiAtom);        // Renamed to avoid shadowing

        return networkCount + msgCount + jobsCount + notiCount;
    },
});
