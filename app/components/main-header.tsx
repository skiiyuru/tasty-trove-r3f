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
import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { TypographyH3, TypographyH4 } from "./typography"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { type ComponentPropsWithoutRef } from "react"

type SvgProps = ComponentPropsWithoutRef<"svg">

function MenuIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <line x1="4" x2="20" y1="12" y2="12" />
      <line x1="4" x2="20" y1="6" y2="6" />
      <line x1="4" x2="20" y1="18" y2="18" />
    </svg>
  )
}

function MountainIcon(props: SvgProps) {
  return (
    <svg
      {...props}
      xmlns="http://www.w3.org/2000/svg"
      width="24"
      height="24"
      viewBox="0 0 24 24"
      fill="none"
      stroke="currentColor"
      strokeWidth="2"
      strokeLinecap="round"
      strokeLinejoin="round"
    >
      <path d="m8 3 4 8 5-5 5 15H2L8 3z" />
    </svg>
  )
}

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

export default function MainHeader() {
  return (
    <header
      className="sticky top-0 z-10 bg-white dark:bg-[#020817] 
      backdrop-filter backdrop-blur-lg bg-opacity-30
      firefox:bg-opacity-90"
    >
      <div
        className="flex h-16  md:h-20 w-full shrink-0 
        items-center px-4 md:px-6 justify-between"
      >
        <div className="flex items-center">
          <Link className="mr-6 flex items-center gap-2" href="/">
            <MountainIcon className="h-6 w-6" />
            <TypographyH4>Tasty Trove</TypographyH4>
            <span className="sr-only">Tasty Trove</span>
          </Link>

          <NavigationMenu className="hidden lg:flex">
            <NavigationMenuList>
              {NavItems.map((i) => {
                return (
                  <NavigationMenuItem key={i.label}>
                    <Link href={i.link} legacyBehavior passHref>
                      <NavigationMenuLink
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
        </div>

        <div className="flex items-center">
          <Sheet>
            <SheetTrigger asChild>
              <Button className="lg:hidden" size="icon" variant="ghost">
                <MenuIcon className="h-6 w-6" />
                <span className="sr-only">Toggle navigation menu</span>
              </Button>
            </SheetTrigger>

            <SheetContent side="right">
              <Link className="mr-6 hidden lg:flex" href="/">
                <MountainIcon className="h-6 w-6" />
                <TypographyH3>Tasty Trove</TypographyH3>
                <span className="sr-only">Tasty Trove</span>
              </Link>

              <div className="grid gap-2 py-6">
                {NavItems.map((i) => {
                  return (
                    <Link
                      key={i.label}
                      className="flex w-full items-center py-2 text-lg font-semibold"
                      href={i.link}
                    >
                      {i.label}
                    </Link>
                  )
                })}
              </div>
            </SheetContent>
          </Sheet>

          <ModeToggle />
        </div>
      </div>
      <Separator />
    </header>
  )
}
