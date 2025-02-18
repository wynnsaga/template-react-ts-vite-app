interface StackLableProps {
    text: string;
    icon: React.ReactNode;
    bgColor?: string;
    textColor?: string;
}

export function StackLabel({ text, icon, bgColor = "#ffffff", textColor = "#000000" }: StackLableProps) {
    return (
        <span
            style={{ backgroundColor: bgColor, color: textColor }}
            className={`flex flex-grow-0 h-fit justify-between items-center gap-4 font-bold py-2 px-4  rounded-xl`}>
            {icon}
            <span>{text}</span>
        </span>
    );
}
