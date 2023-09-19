import { OrganizationSwitcher, SignOutButton, SignedIn } from "@clerk/nextjs";
import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
    const isUserLoggedIn = true;

    return (
        <>
            <nav className="topbar">
                <Link href='/' className="flex item-center gap-4">
                    <Image src='/assets/logo.svg' alt="logo" width={28} height={28} />

                    <p className="text-headings3-bold text-light-1 max-xs:hidden">Khido</p>
                </Link>

                <div className="flex items-center gap-1">
                    <div className="block md:hidden">
                        <SignedIn>
                            <SignOutButton>
                                <div className="flex cursor-pointer">
                                    <Image
                                    src='/assets/logout.svg'
                                    alt="logout"
                                    width={24}
                                    height={24}
                                    />
                                </div>
                            </SignOutButton>
                        </SignedIn>
                    </div>

                <OrganizationSwitcher 
                    appearance={
                        {
                            elements: {
                                button: {
                                    organizationSwitcherTrigger:
                                    'py-2 px-4'
                                }
                            }
                        }
                    }
                
                />
                </div>
            </nav>
        </>
    )
}