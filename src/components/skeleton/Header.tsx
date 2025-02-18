import { cn } from "@/lib/utils";

interface HeaderProps {
    title: string;
    className?: string;
}

export function Header({ title, className }: HeaderProps) {
    return (
        <header className={cn("text-black ", className)}>
            <h1>{title}</h1>
        </header>
    );
}
