import { AwsomeFooter } from "@/components/miscs/awsome-footer";
import { IconBrandGithub, IconBrandTwitter } from "@tabler/icons-react";
import { Logo } from "./Logo";

function Footer() {
    return (
        <div className="w-full">
            <AwsomeFooter
                logo={<Logo />}
                brandName="Sea Light"
                socialLinks={[
                    {
                        icon: <IconBrandTwitter className="h-5 w-5" />,
                        href: "https://twitter.com",
                        label: "Twitter",
                    },
                    {
                        icon: <IconBrandGithub className="h-5 w-5" />,
                        href: "https://github.com",
                        label: "GitHub",
                    },
                ]}
                mainLinks={[
                    { href: "/home", label: "Home" },
                    { href: "/blog", label: "Blog" },
                    { href: "/about", label: "About" },
                    { href: "/contact", label: "Contact" },
                ]}
                legalLinks={[
                    { href: "/privacy", label: "Privacy" },
                    { href: "/terms", label: "Terms" },
                ]}
                copyright={{
                    text: "© 2024 Sea Light",
                    license: "All rights reserved",
                }}
            />
        </div>
    );
}

export { Footer };
