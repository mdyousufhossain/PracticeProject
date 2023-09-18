import Image from "next/image";
import Link from "next/link";

export default function Topbar() {
    return (
        <>
            <nav className="topbar">
                <Link href='/' className="flex item-center gap-4">
                    <Image src='/assets/logo.svg' alt="logo" width={28} height={28} />

                    <p className="text-headings3-bold text-light-1 max-xs:hidden">Khido</p>
                </Link>
            </nav>
        </>
    )
}