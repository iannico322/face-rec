import { ThemeProvider } from "@/components/theme-provider"
import { Outlet } from "react-router-dom";

// import { ModeToggle } from "./components/mode-toggle";
// import Reveal from "./components/animation/reveal";
import { ModeToggle } from "./components/mode-toggle";

function App() {


  return (
    <ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">

     <div className=" bg-background min-h-full w-full flex flex-col items-center">
      
      <nav className=" pointer-events-none animate__animated animate__slideInDown  z-20 bg-background/0 fixed flex justify-between items-center w-full max-w-[1468px] py-5 border-b-[0px] border-accent \ ">
          <div></div>
      

        

        


        <div className="mr-5 pointer-events-auto">
          <ModeToggle />
        </div>
        
  
       
      </nav>
 

      
      <div className=" w-screen h-screen bg-background overflow-x-hidden">

        <Outlet />
      </div>
      
     
    </div>
    </ThemeProvider>
  )
}



export default App
