export const lightColors = {
    RED: "red",
    YELLOW: "yellow",
    GREEN: "green",
} as const;

export const lightStyles = {
    [lightColors.RED]: "bg-red-500",
    [lightColors.YELLOW]: "bg-yellow-500",
    [lightColors.GREEN]: "bg-green-500",
} as const;