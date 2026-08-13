import { Platform } from "@pipeline/Platforms";
import { Parser } from "@pipeline/parse/Parser";
import { DiscordParser } from "@pipeline/parse/parsers/DiscordParser";

export const createParser = (platform: Platform): Parser => {
    switch (platform) {
        case "discord":
            return new DiscordParser();
    }
};
