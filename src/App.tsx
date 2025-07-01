import { useState } from "react";

import reactLogo from "./assets/react.svg";
import wish from "./assets/wish.jpg";
import viteLogo from "/vite.svg";
import "./App.css";
import {
  Sheet,
  SheetContent,
  SheetDescription,
  SheetHeader,
  SheetTitle,
  SheetTrigger,
} from "@/components/ui/sheet";
import {
  DropdownMenu,
  DropdownMenuTrigger,
  DropdownMenuLabel,
  DropdownMenuItem,
  DropdownMenuContent,
  DropdownMenuSeparator,
} from "@/components/ui/dropdown-menu";
import { AppSidebar } from "@/components/app-sidebar";

function App(): JSX.Element {
  return (
    <div className="App">
      <Sheet>
        <SheetTrigger>Menu</SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] side:top">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
      {/* <AppSidebar /> */}
      <DropdownMenu>
        <DropdownMenuTrigger>ChatGPT</DropdownMenuTrigger>
        <DropdownMenuContent>
          <DropdownMenuLabel>GPT-4o</DropdownMenuLabel>
          <DropdownMenuSeparator />
          <DropdownMenuItem>o3</DropdownMenuItem>
          <DropdownMenuItem>o4-mini</DropdownMenuItem>
          <DropdownMenuItem>o4-mini-high</DropdownMenuItem>
        </DropdownMenuContent>
      </DropdownMenu>
    </div>
  );
}

export default App;
