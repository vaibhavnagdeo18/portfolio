"use client"
// @ts-nocheck

import { useEffect, useMemo, useState } from "react"
import { useTheme } from "next-themes"
import {
    Cloud,
    fetchSimpleIcons,
    ICloud,
    renderSimpleIcon,
    SimpleIcon,
} from "react-icon-cloud"

export const cloudProps: Omit<ICloud, "children"> = {
    containerProps: {
        style: {
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            width: "100%",
            paddingTop: 40,
        },
    },
    options: {
        reverse: true,
        depth: 1,
        wheelZoom: false,
        imageScale: 2,
        activeCursor: "default",
        tooltip: "native",
        initial: [0.1, -0.1],
        clickToFront: 500,
        tooltipDelay: 0,
        outlineColour: "#0000",
        maxSpeed: 0.04,
        minSpeed: 0.02,
        // dragControl: false,
    },
}

export const renderCustomIcon = (icon: SimpleIcon, theme: string) => {
    const bgHex = theme === "light" ? "#f3f2ef" : "#080510"
    const fallbackHex = theme === "light" ? "#6e6e73" : "#ffffff"
    const minContrastRatio = theme === "dark" ? 2 : 1.2

    // List of icons that are naturally black and need to be white in dark mode
    const needsWhiteInDarkMode = [
        "nextdotjs",
        "github",
        "vercel",
        "prisma",
        "express"
    ]

    return renderSimpleIcon({
        icon,
        bgHex,
        fallbackHex,
        minContrastRatio,
        size: 42,
        aProps: {
            href: undefined,
            target: undefined,
            rel: undefined,
            onClick: (e: any) => e.preventDefault(),
            style: {
                // Force white fill if the theme is dark and the icon is naturally black
                fill: theme === "dark" && needsWhiteInDarkMode.includes(icon.slug) ? "#ffffff" : undefined
            }
        },
    })
}

export type DynamicCloudProps = {
    iconSlugs: string[]
}

type IconData = Awaited<ReturnType<typeof fetchSimpleIcons>>

export function IconCloud({ iconSlugs }: DynamicCloudProps) {
    const [data, setData] = useState<IconData | null>(null)
    const [mounted, setMounted] = useState(false)

    useEffect(() => {
        setMounted(true)
    }, [])

    useEffect(() => {
        fetchSimpleIcons({ slugs: iconSlugs }).then(setData)
    }, [iconSlugs])

    const renderedIcons = useMemo(() => {
        if (!data) return null

        return Object.values(data.simpleIcons).map((icon) =>
            renderCustomIcon(icon, "dark"),
        )
    }, [data])

    if (!mounted) {
        return <div style={{ height: cloudProps.containerProps?.style?.width || "100%", aspectRatio: 1 }} />
    }

    return (
        // @ts-ignore
        <Cloud {...cloudProps}>
            <>{renderedIcons}</>
        </Cloud>
    )
}
