'use client'
import Link from 'next/link'
import { usePathname } from 'next/navigation'
import React from 'react'

const LinkDate = [
    {name: "About", link: "/about"},
    {name: "Blog", link: "/blog"},
    {name: "Contact", link: "/contact"},
]

const accessLink=['/','/about','/blog','/contact']
export default function Header() {
    const pathname = usePathname()
    if(!accessLink.includes(pathname)) return null
    return (
    <div className="flex justify-between container mx-auto p-8">
        <Link className="text-3xl font-bold" href="/">Home</Link>
        <div className="text-xl space-x-4">
            {LinkDate.map((date => (
                <Link 
                    key={date.name} 
                    className={pathname === date.link ? "text-purple-500" : ""}
                    href={date.link}>
                        {date.name}
                </Link>)))
            }
        </div>
    </div>
  )
}
