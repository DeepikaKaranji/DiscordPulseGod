import { getDatabase } from "@report/WorkerWrapper";
import { LazyImage } from "@report/components/core/LazyImage";
import { PlatformAvatar } from "@report/components/core/avatars/PlatformAvatar";
import { TextAvatar } from "@report/components/core/avatars/TextAvatar";

export const GuildAvatar = ({ index }: { index: number }) => {
    const db = getDatabase();
    const guild = db.guilds[index];

    if (guild.name === "Direct Messages") {
        return <PlatformAvatar />;
    }

    const placeholder = <TextAvatar text={guild.name} background="#36393f" color="#DCDDDE" useInitials={11} />;

    return (
        <div className="Avatar">
            <LazyImage src={guild.avatar} placeholder={placeholder} />
        </div>
    );
};
