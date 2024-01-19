"use client"

import {
  NavigationMenu,
  NavigationMenuContent,
  NavigationMenuIndicator,
  NavigationMenuItem,
  NavigationMenuLink,
  NavigationMenuList,
  NavigationMenuTrigger,
  NavigationMenuViewport,
  navigationMenuTriggerStyle,
} from "@/components/ui/navigation-menu"
import Link from "next/link"
import { usePathname } from "next/navigation"
import { type ComponentPropsWithoutRef } from "react"

type NavItem = { link: string; label: string }

const NavItems: NavItem[] = [
  {
    link: "/meals",
    label: "Browse Meals",
  },
  {
    link: "/community",
    label: "Trove Community",
  },
]

type NavMenuProps = {
  menuClasses?: ComponentPropsWithoutRef<"div">["className"]
  listClasses?: ComponentPropsWithoutRef<"div">["className"]
}

export default function NavMenu({ menuClasses, listClasses }: NavMenuProps) {
  const path = usePathname()

  return (
    <NavigationMenu className={menuClasses}>
      <NavigationMenuList className={listClasses}>
        {NavItems.map((i) => {
          return (
            <NavigationMenuItem key={i.label}>
              <Link href={i.link} legacyBehavior passHref>
                <NavigationMenuLink
                  active={path.startsWith(i.link)}
                  className={navigationMenuTriggerStyle()}
                >
                  {i.label}
                </NavigationMenuLink>
              </Link>
            </NavigationMenuItem>
          )
        })}
      </NavigationMenuList>
    </NavigationMenu>
  )
}
