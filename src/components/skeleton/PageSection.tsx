import { cn } from "@/lib/utils";

interface SectionProps {
    title: string;
    className?: string;
}

export function PageSection({ title, className }: SectionProps) {
    return <h3 className={cn("", className)}>{title}</h3>;
}
