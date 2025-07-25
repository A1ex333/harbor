import { useStoredState } from "./useStoredState";

export const useLocalUrls = () => {
    return useStoredState(
        "useLocalUrls",
        false,
    );
};
