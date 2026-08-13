import { ReactNode } from "react";

import { Platform } from "@pipeline/Platforms";

import DiscordLogo from "@assets/images/logos/discord.svg";

export const PlatformLogos: {
    [key in Platform]: ReactNode;
} = {
    discord: <img src={DiscordLogo} alt="" />,
};
