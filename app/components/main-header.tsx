import { SheetTrigger, SheetContent, Sheet } from "@/components/ui/sheet"
import Link from "next/link"
import { ModeToggle } from "./mode-toggle"
import { TypographyH3, TypographyH4 } from "./typography"
import { Separator } from "@/components/ui/separator"
import { Button } from "@/components/ui/button"
import { type ComponentPropsWithoutRef } from "react"
import NavMenu from "./nav-menu"

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

          <NavMenu menuClasses="hidden lg:flex" />
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
              <NavMenu listClasses="flex flex-col items-start gap-2 py-6" />
            </SheetContent>
          </Sheet>

          <ModeToggle />
        </div>
      </div>
      <Separator />
    </header>
  )
}
