import "@assets/styles/Button.less";

type Props = {
    hueColor: [number, number, number];
} & (React.AnchorHTMLAttributes<HTMLAnchorElement> | React.ButtonHTMLAttributes<HTMLButtonElement>);

// hand-drawn wobbly rounded-rect variants, viewBox 0 0 100 40
const CHALK_VARIANTS = [
    "M5,4 C 25,1 55,0.5 95,3.5 C 98,10 97.5,18 98,22 C 98.5,28 97,33 95.5,36 C 65,38.5 30,39 4,35.5 C 2,29 2.5,20 2,15 C 1.5,10 3,7 5,4 Z",
    "M4,3 C 35,0.5 70,1.5 96,4 C 97.5,12 97,17 97.5,21 C 98,27 96.5,32 95,37 C 60,39.5 25,38.5 5,36 C 3.5,30 4,24 3.5,19 C 3,13 2,8 4,3 Z",
    "M6,2.5 C 30,0.8 65,0.8 94,4.5 C 96.5,11 96,19 96.5,23 C 97,29 98,33 94.5,35.5 C 62,39 28,37.5 3.5,34.5 C 2,28 3,21 2.5,16 C 2,11 3.5,6 6,2.5 Z",
];

const chalkVariantFor = (hueColor: [number, number, number]) => {
    const [h, s, l] = hueColor;
    const idx = Math.abs(h + s + l) % CHALK_VARIANTS.length;
    return CHALK_VARIANTS[idx];
};

export const Button = ({ hueColor, className, style, children, ...rest }: Props & { children?: React.ReactNode }) => {
    const [h, s, l] = hueColor;

    const cssStyles = {
        "--default-color": `hsl(${h}, ${s}%, ${l}%)`,
        "--hover-color": `hsl(${h}, ${s}%, ${l - 5}%)`,
        "--chalk-hover-color": `hsl(${h}, ${s}%, ${Math.min(l + 8, 95)}%)`,
        "--disable-color": `hsl(${h}, 0%, ${l}%)`,
        ...style,
    } as React.CSSProperties;

    const classes = `Button ${className || ""}`;
    const chalkPath = chalkVariantFor(hueColor);
    const hatchId = `Button__hatch-${h}-${s}-${l}`;

    const content = (
        <>
            <svg className="Button__chalk-shadow" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
                <defs>
                    <pattern id={hatchId} patternUnits="userSpaceOnUse" width="4" height="4" patternTransform="rotate(45)">
                        <line x1="0" y1="0" x2="0" y2="4" stroke="#ffffff" strokeWidth="1.4" />
                    </pattern>
                </defs>
                <path d={chalkPath} fill={`url(#${hatchId})`} />
            </svg>
            <svg className="Button__chalk-fill" viewBox="0 0 100 40" preserveAspectRatio="none" aria-hidden="true">
                <path d={chalkPath} vectorEffect="non-scaling-stroke" />
            </svg>
            <span className="Button__label">{children}</span>
        </>
    );

    return "href" in rest ? (
        <a className={classes} style={cssStyles} {...rest}>
            {content}
        </a>
    ) : (
        // @ts-ignore
        <button className={classes} style={cssStyles} {...rest}>
            {content}
        </button>
    );
};
