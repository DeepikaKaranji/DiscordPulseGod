<div align="center">

![DiscordPulseGod logo](assets/images/logos/app_dark.png)

<h3>All-seeing insights about your server.</h3>

DiscordPulseGod turns your Discord chat exports into a single interactive HTML report — messages, language, emoji, links, calls, interaction, sentiment, and timeline, all explorable in your browser.

</div>

---

## What it does

Point DiscordPulseGod at a Discord export and it generates a self-contained HTML report you can open, explore, and share. Everything runs client-side in your browser — your messages are never uploaded anywhere.

| 💬 Messages | 🅰️ Language | 😃 Emoji | 🔗 Links | 📞 Calls | 🌀 Interaction | 💙 Sentiment | 📅 Timeline |
|---|---|---|---|---|---|---|---|
| Activity over time, per-author and per-channel breakdowns | Language detection across your community | Most-used emoji and stickers | Most-shared domains and links | Call frequency and duration | Who talks to whom | Sentiment trends over time | A full activity timeline |

## Getting started

1. Export your Discord chat history as JSON using [DiscordChatExporter](https://github.com/Tyrrrz/DiscordChatExporter).
2. Open the app and click **Generate a report**.
3. Follow the in-app instructions to select your exported file(s).
4. Get a single downloadable HTML report — open it locally or share the file with your community.

Discord is the only supported platform. You can combine multiple exported files (e.g. several channels from the same server) into a single report.

## Privacy

Your chat data never leaves your device. Parsing, analysis, and report generation all happen locally in your browser via a background worker — there is no server, no upload, and no third-party service that ever sees your messages.

The resulting report HTML file does contain the message data used to build it (so people you share it with can see the underlying content), so only share reports with people you trust.

## Why I built this

I've been a long-time contributor to the open source community at [The Linux Foundation](https://www.linuxfoundation.org/). Building community taught me how little I could actually see: who the champions are, what developers are asking for, where the conversation is heading, and where the Foundation should be investing resources.

I wanted a simple, interactive, private way to understand the servers I care about. So I built DiscordPulseGod to understand my community's pulse — without sending anyone's messages to a third-party service.

And because I care about how software feels to use, DiscordPulseGod generates visuals that you explore, not just a static report you skim.

## Acknowledgements

DiscordPulseGod is inspired by Marti Lombardo and uses:

* [FastText](https://fasttext.cc/), a library by Facebook for efficient sentence classification. MIT licensed.
* [lid.176.ftz model](https://fasttext.cc/docs/en/language-identification.html), provided by FastText developers for language identification. Distributed under [CC BY-SA 3.0](https://creativecommons.org/licenses/by-sa/3.0/).
* [multilang-sentiment](https://github.com/marcellobarile/multilang-sentiment), for the translated AFINN database. MIT licensed.
* Emoji sentiment data from the work of Kralj Novak, Petra; Smailović, Jasmina; Sluban, Borut and Mozetič, Igor, 2015, Emoji Sentiment Ranking 1.0, Slovenian language resource repository CLARIN.SI, http://hdl.handle.net/11356/1048. Licensed with [CC BY-SA 4.0](https://creativecommons.org/licenses/by-sa/4.0/).
* [stopwords-iso](https://github.com/stopwords-iso/stopwords-iso) for a collection of stopwords in a variety of languages. MIT licensed.
* [DiscordChatExporter](https://github.com/Tyrrrz/DiscordChatExporter), used to export Discord chat history into the JSON format this app parses.

## License

AGPLv3. See [LICENSE](LICENSE).
