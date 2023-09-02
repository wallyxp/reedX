"use client"
import {OrganizationSwitcher, SignedIn, SignOutButton, UserButton} from "@clerk/nextjs"
import Image from "next/image"
import Link from "next/link"
import {useRouter} from "next/navigation";

function Topbar(){
    const router = useRouter()
    return (
        <nav className="topbar flex justify-between">
            <Link href="/" className="flex items-center gap-4">
                <Image 
                    src={"./logo.svg"} 
                    width={28} 
                    height={28}
                    alt="applogo"
                />
                <p className="text-heading3-bold text-white max-xs:hidden">reedX</p>
            </Link>
            <div className={"flex items-center gap-1"}>
                <div className={"md:hidden"}>
                    <SignedIn>
                        <SignOutButton signOutCallback={()=> router.push('/sign-in')}>
                            <div>
                                <Image
                                    src={"./logout.svg"}
                                    alt={"logoutimg"}
                                    height={24}
                                    width={24}
                                />
                            </div>
                        </SignOutButton>
                    </SignedIn>
                </div>
                <OrganizationSwitcher
                    appearance={{
                        elements :{
                            organizationSwitcherTrigger: "py-2 px-4 text-white"
                        }
                    }}
                />
            </div>
        </nav>
    )
}

export default Topbar