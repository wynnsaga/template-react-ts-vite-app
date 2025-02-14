import { Timeline } from "@/components/ui/timeline";

export function TimelineDemo() {
    const data = [
        {
            title: "2024",
            content: <div className="h-56 bg-red-300"></div>,
        },
        {
            title: "2023",
            content: <div className="h-56 bg-red-300"></div>,
        },
        {
            title: "2023",
            content: <div className="h-56 bg-red-300"></div>,
        },
        {
            title: "2021",
            content: <div className="h-56 bg-red-300"></div>,
        },
    ];
    return (
        <div className="w-full">
            <Timeline data={data} />
        </div>
    );
}
