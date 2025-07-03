import { Menu } from "lucide-react";
import Link from "next/link";
import { cn } from "@/lib/utils";
import Logoo from "@/components/logos/logoo";
import { Button } from "@/components/ui/button";
import {
  Navbar as NavbarComponent,
  NavbarLeft,
  NavbarRight,
} from "@/components/ui/navbar";
import { Sheet, SheetContent, SheetTrigger } from "@/components/ui/sheet";

interface NavbarProps {
  className?: string;
}

export default function Navbar({ className }: NavbarProps) {
  return (
    <header
      className={cn(
        "fixed top-4 left-1/2 -translate-x-1/2 z-50 px-3 py-1 rounded-full bg-gradient-to-r from-white/10 via-zinc-800/20 to-white/10 backdrop-blur-md shadow-md shadow-black/20 max-w-[1400px] w-[95%] mix-blend-luminosity",
        className
      )}
    >
      <div className="max-w-container mx-auto px-4">
        <NavbarComponent>
          <NavbarLeft>
            <Link
              href="/"
              className="flex items-center gap-3 text-xl font-semibold text-white"
            >
              <Logoo />
              CodeSight
            </Link>

            <nav className="hidden md:flex items-center gap-6 text-sm text-zinc-300">
              <Link href="#visualizer" className="hover:text-white transition-colors">
                Visualizer
              </Link>
              <Link href="#score" className="hover:text-white transition-colors">
                Scoring
              </Link>
              <Link href="#about" className="hover:text-white transition-colors">
                About
              </Link>
            </nav>
          </NavbarLeft>

          <NavbarRight>
            <Button variant="secondary" asChild>
              <Link href="https://github.com/your-repo" target="_blank">
                GitHub Repo
              </Link>
            </Button>

            <Sheet>
              <SheetTrigger asChild>
                <Button variant="ghost" size="icon" className="shrink-0 md:hidden">
                  <Menu className="size-5" />
                  <span className="sr-only">Toggle navigation menu</span>
                </Button>
              </SheetTrigger>
              <SheetContent side="right">
                <nav className="grid gap-6 text-lg font-medium">
                  <Link href="/" className="text-xl font-bold">CodeSight</Link>
                  <Link href="#visualizer" className="hover:text-white transition-colors">
                    Visualizer
                  </Link>
                  <Link href="#score" className="hover:text-white transition-colors">
                    Scoring
                  </Link>
                  <Link href="#about" className="hover:text-white transition-colors">
                    About
                  </Link>
                  <Link href="https://github.com/your-repo" className="hover:text-white transition-colors">
                    GitHub
                  </Link>
                </nav>
              </SheetContent>
            </Sheet>
          </NavbarRight>
        </NavbarComponent>
      </div>

      {/* Subtle Glow Line */}
      <div className="absolute bottom-0 left-1/2 h-[2px] w-[60%] -translate-x-1/2 bg-gradient-to-r from-purple-500 via-pink-500 to-indigo-500 opacity-30 blur-sm rounded-full" />
    </header>
  );
}
