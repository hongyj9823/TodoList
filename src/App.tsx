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

function App(): JSX.Element {
  return (
    <div className="App">
      <h1> To do List</h1>
      <Sheet>
        <SheetTrigger>Menu</SheetTrigger>
        <SheetContent className="w-[400px] sm:w-[540px] side:left">
          <SheetHeader>
            <SheetTitle>Menu</SheetTitle>
            <SheetDescription>Description</SheetDescription>
          </SheetHeader>
        </SheetContent>
      </Sheet>
    </div>
  );
}

export default App;
