"use client"

import Link from "next/link";
import Image from "next/image";
import {sidebarLinks} from "@/constants";
import {useRouter, usePathname} from "next/navigation"
import {SignedIn, SignOutButton} from "@clerk/nextjs";
//icon imports


function LeftSideBar(){
    const router = useRouter()
    const pathname = usePathname()
    return <section className={"custom-scrollbar leftsidebar"}>
            <div className={"flex w-full flex-1 flex-col gap-6 px-6"}>
                {
                    sidebarLinks.map((sideBarLink, index)=> {

                        const isActive = (pathname.includes(sideBarLink.route) && sideBarLink.route.length > 1) || pathname=== sideBarLink.route


                        return(
                        <Link
                            href={sideBarLink.route}
                            key={index}
                            className={`leftsidebar_link ${isActive && 'bg-primary-500'} hover:bg-gray-800`}
                        >
                            <Image
                                src={sideBarLink.imgURL}
                                alt={"img"}
                                height={24}
                                width={24}
                            />
                            <p
                                className={"text-light-1 max-lg:hidden"}
                            >{sideBarLink.label}</p>
                        </Link>)
                    })
                }
            </div>
        <div className={"mx-6"}>
            <SignedIn>
                <SignOutButton signOutCallback={()=> router.push("/sign-in")}>
                    <div className={"leftsidebar_link flex w-full flex-1 px-6 gap-6 cursor-pointer hover:bg-gray-800 "}>
                        <Image
                            src={"./logout.svg"}
                            alt={"logout svg"}
                            height={24}
                            width={24}
                        />
                        <p className={"text-light-1 max-lg:hidden"}>Logout</p>
                    </div>
                </SignOutButton>
            </SignedIn>
        </div>
    </section>
}

export default LeftSideBar