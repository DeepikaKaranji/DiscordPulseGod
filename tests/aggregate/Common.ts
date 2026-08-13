import { generateDatabase } from "@pipeline/index";

import { TestEnv, loadSamples } from "@tests/samples";

export const loadTestDatabase = async () => {
    const samples = await loadSamples(["discord/DM_2A_2M.json", "discord/GC_3A_5M.json", "discord/SV_5A_5M.json"]);
    return await generateDatabase(
        samples.map((s) => s.input),
        { platform: "discord" },
        TestEnv
    );
};
