"use client";

import { useTheme } from "next-themes";
import Image from "next/image";
import { useEffect, useState } from "react";
import darkIcon from "@/public/icons/darkmode.svg"
import { cn } from "@/lib/utils";

export function ThemeSwitcher() {
    const [mounted, setMounted] = useState(false)
    const { setTheme, resolvedTheme } = useTheme()

    useEffect(() => {
        setMounted(true)
    }, [])

    if (!mounted) return null;
    else return <Image
        onClick={() => {setTheme(resolvedTheme === "dark" ? "light" : "dark"); console.log(resolvedTheme)}}
        className={cn("cursor-pointer",resolvedTheme === "dark" ? "invert" : "invert-0")}
        src={darkIcon}
        width={36}
        height={36}
        sizes="36x36"
        alt="Loading Light/Dark Toggle"
        priority={false}
    />
};