import { AuthorAvatar } from "./AuthorAvatar";
import { Meteors } from "../magicui/meteors";

export function Header() {
    return (
        <header className="sticky flex flex-row bg-white text-black px-1 py-2">
            <Meteors className="border-x-2 border-[#7CA4A1]-300"></Meteors>
            {/* left */}
            <div className="px-4">
                <AuthorAvatar></AuthorAvatar>
            </div>
            {/* center */}
            <div className="flex-1">empty</div>
            {/* right */}
            <div>menu</div>
        </header>
    );
}
