import { useState } from "react";

import "@assets/styles/AuthorNote.less";

// hand-drawn ink pen icon, viewBox 0 0 60 40
const PEN_ICON_PATH =
    "M8,32 C 7,33 6,34 7,35 C 9,36 12,35 13,33 " +
    "L38,10 C 40,8 40,5 38,4 C 36,2 33,2 31,4 L7,27 C 6,28 6,30 8,31 Z " +
    "M31,4 L38,10 " +
    "M13,26 L17,30";

export const AuthorNote = () => {
    const [expanded, setExpanded] = useState(false);
    const [hasInteracted, setHasInteracted] = useState(false);

    const toggle = () => {
        setExpanded((prev) => !prev);
        setHasInteracted(true);
    };

    return (
        <div className={`AuthorNote ${expanded ? "AuthorNote--expanded" : ""}`}>
            <button
                className={`AuthorNote__trigger ${hasInteracted ? "AuthorNote__trigger--settled" : ""}`}
                onClick={toggle}
                aria-expanded={expanded}
            >
                <svg
                    className="AuthorNote__trigger-icon"
                    viewBox="0 0 60 40"
                    preserveAspectRatio="xMidYMid meet"
                    aria-hidden="true"
                >
                    <path d={PEN_ICON_PATH} />
                </svg>
                <span>Why I built this project</span>
            </button>

            <div className="AuthorNote__panel">
                <div className="AuthorNote__panel-inner">
                    <div className="AuthorNote__panel-curl AuthorNote__panel-curl--top" aria-hidden="true" />
                    <div className="AuthorNote__panel-content">
                        <p>
                            I've been a long time contributor to the open source community at The Linux Foundation.
                            Building community taught me how little I could actually see: who the champions are, what
                            developers are asking for, where the conversation is heading, and where the Foundation
                            should be investing resources.
                        </p>
                        <p>
                            I wanted a simple, interactive, private way to understand the servers I care about. So I
                            built DiscordPulseGod to understand my community's pulse. I no longer had to send
                            messages to a third-party service for insights.
                        </p>
                        <p>
                            And because I care about how software feels to use, DiscordPulseGod generates visuals
                            that you explore, not just a static report you skim!
                        </p>
                    </div>
                    <div className="AuthorNote__panel-curl AuthorNote__panel-curl--bottom" aria-hidden="true" />
                </div>
            </div>
        </div>
    );
};
