import { ThemeProvider } from "@/components/theme-provider"

import viteLogo from "/vite.svg";

import { Link, Outlet } from "react-router-dom";

// import { ModeToggle } from "./components/mode-toggle";
// import Reveal from "./components/animation/reveal";
import { ModeToggle } from "./components/mode-toggle";

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

     <div className=" bg-background min-h-screen w-full overflow-hidden flex flex-col  items-center">
      
      <nav className=" animate__animated animate__slideInDown  z-20 bg-background/0 fixed flex justify-between items-center w-full max-w-[1468px] py-5 border-b-[0px] border-accent \ ">
        <Link className=" ml-5" to="/react-vite-supreme" >
          <img src={viteLogo} className="logo " alt="Vite logo" />
        </Link>
      

        

        


        <div className="mr-5">
          <ModeToggle />
        </div>
        
  
       
      </nav>
 

      

      <Outlet />
     
    </div>
    </ThemeProvider>
  )
}



export default App
