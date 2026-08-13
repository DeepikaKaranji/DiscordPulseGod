import { Button } from "@app/components/Button";

import Lock from "@assets/images/icons/lock.svg";
import "@assets/styles/Landing.less";

interface Props {
    onStart: () => void;
}

export const Landing = ({ onStart }: Props) => {
    return (
        <div className="Landing">
            <h1 className="Landing__title">All-seeing insights about your server.</h1>
            <div className="Landing__desc">
                <div className="Landing__sameline">
                    <p className="Landing__browser">Know everything about your discord server and channel- top topics, sentiment, top contributors.</p>
                    <span className="Landing__secure">
                        <img src={Lock} alt="Lock" />
                        <p>.</p>
                    </span>
                </div>
                <br />
                <p>
                    Analyze millions of messages with DiscordPulseGod's interactive dashboard! <b>Free and open source ❤️</b>
                </p>
            </div>
            <div className="Landing__buttons">
                <Button hueColor={[258, 90, 61]} className="Landing__cta" onClick={onStart}>
                    Generate a report
                </Button>
                <Button
                    hueColor={[244, 90, 61]}
                    href={env.isSelfHosted ? "https://chatanalytics.app/demo" : env.isDev ? "/report.html" : "/demo"}
                    target="_blank"
                >
                    View Demo
                </Button>
            </div>
        </div>
    );
};
