import { ReactNode } from "react";

import { Platform } from "@pipeline/Platforms";

// Discord
import DiscordChannels from "@assets/images/platforms/discord/instructions/discord_channels.png";
import DiscordExport from "@assets/images/platforms/discord/instructions/discord_export.gif";
import DiscordFormat from "@assets/images/platforms/discord/instructions/discord_format.png";

// All assets included in this file are NOT inlined

const DiscordInstructions = () => {
    return (
        <>
            <ol>
                <li>
                    Download the latest version of{" "}
                    <a href="https://github.com/Tyrrrz/DiscordChatExporter/releases/latest" target="_blank">
                        DiscordChatExporter
                    </a>
                    . You will need a Windows PC or use the CLI (Linux/Mac).
                </li>
                <li>
                    You will have to obtain a bot token or use your account's token. Refer to{" "}
                    <a
                        href="https://github.com/Tyrrrz/DiscordChatExporter/blob/master/.docs/Getting-started.md#using-the-gui"
                        target="_blank"
                    >
                        this guide
                    </a>{" "}
                    for more information.
                </li>
                <li>
                    Select the channels you want to export.
                    <img src={DiscordChannels} />
                </li>
                <li>Press the yellow button on the bottom right corner.</li>
                <li>
                    Select the format "JSON".
                    <img src={DiscordFormat} />
                </li>
                <li>
                    Go ahead and <b>click Export</b>.
                    <img src={DiscordExport} />
                </li>
            </ol>
        </>
    );
};

export const PlatformInstructions: {
    [key in Platform]: ReactNode;
} = {
    discord: <DiscordInstructions />,
};
