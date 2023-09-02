"use client"
import {sidebarLinks} from "@/constants";
import Link from "next/link";
import Image from "next/image";
import {useRouter, usePathname} from "next/navigation";

function Bottombar(){
    const router = useRouter()
    const pathname = usePathname()

    return <section className={"bottombar"}>
        <div className={"bottombar_container"}>
            {
                sidebarLinks.map((sideBarLink, index)=> {

                    const isActive = (pathname.includes(sideBarLink.route) && pathname.length > 1) || pathname === sideBarLink.route
                    return(
                        <Link
                            href={sideBarLink.route}
                            key={index}
                            className={`leftsidebar_link ${ isActive && 'bg-primary-500'} hover:bg-gray-800`}
                        >
                            <Image
                                src={sideBarLink.imgURL}
                                alt={"img"}
                                height={24}
                                width={24}
                            />
                        </Link>)
                })
            }
        </div>
    </section>
}

export default Bottombar