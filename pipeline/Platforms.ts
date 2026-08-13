/** Available platforms */
export type Platform = "discord";

interface PlatformInformation {
    name: string;
    color: [number, number, number]; // HSL
    defaultFilename: string;
    support: {
        stickers: boolean;
        reactions: boolean;
        replies: boolean;
        edits: boolean;
        calls: boolean;
    };
}

export const PlatformsInfo: {
    [key in Platform]: PlatformInformation;
} = {
    discord: {
        name: "Discord",
        color: [235, 86, 65],
        defaultFilename: "<guild> - <channel> [ID].json",
        support: {
            stickers: true,
            reactions: true,
            replies: true,
            edits: true,
            calls: true,
        },
    },
};
