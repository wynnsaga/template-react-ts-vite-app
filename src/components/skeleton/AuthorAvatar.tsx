import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { basic } from "@/configs/site.config";

export function AuthorAvatar() {
    const avatarUrl = basic.avatar;
    const fallBack = basic.author.toLocaleUpperCase();

    return (
        <Avatar>
            <AvatarImage src={avatarUrl}></AvatarImage>
            <AvatarFallback>{fallBack}</AvatarFallback>
        </Avatar>
    );
}
