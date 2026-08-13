import { ReactNode } from "react";

import { getDatabase } from "@report/WorkerWrapper";
import { LazyImage } from "@report/components/core/LazyImage";

import discord_author_avatar_0 from "@assets/images/platforms/discord/avatars/author_avatar_0.png";
import discord_author_avatar_1 from "@assets/images/platforms/discord/avatars/author_avatar_1.png";
import discord_author_avatar_2 from "@assets/images/platforms/discord/avatars/author_avatar_2.png";
import discord_author_avatar_3 from "@assets/images/platforms/discord/avatars/author_avatar_3.png";
import discord_author_avatar_4 from "@assets/images/platforms/discord/avatars/author_avatar_4.png";

const DiscordDefaultDMAvatars = [
    discord_author_avatar_0,
    discord_author_avatar_1,
    discord_author_avatar_2,
    discord_author_avatar_3,
    discord_author_avatar_4,
];

const RawImg = (src: any) => (
    <img
        src={src}
        style={{
            width: "100%",
            height: "100%",
        }}
    />
);

export const AuthorAvatar = ({ index }: { index: number }) => {
    const db = getDatabase();
    const author = db.authors[index];

    let url: string | undefined;
    let discriminator = 0;
    const num = author.n.split("#").pop();
    if (num && num.length === 4) discriminator = parseInt(num);

    if (author.a) {
        if (!author.a.includes(".")) {
            // author.a is the "user_id/user_avatar" of the avatar URL
            // for example "840286670888370206/7a0ce959e13e749f4f4d93ea4b314b9c"
            url = `https://cdn.discordapp.com/avatars/${author.a}.png?size=64`;
        } else {
            // author.a is the full path to the avatar (probably locally stored)
            url = author.a;
        }
    }
    const placeholder: ReactNode = RawImg(DiscordDefaultDMAvatars[discriminator % 5]);

    return (
        <div className="Avatar">
            <LazyImage src={url} placeholder={placeholder} />
        </div>
    );
};
