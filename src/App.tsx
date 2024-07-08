import { ThemeProvider } from "@/components/theme-provider"

import viteLogo from "/vite.svg";

import { Link, Outlet } from "react-router-dom";

// import { ModeToggle } from "./components/mode-toggle";
// import Reveal from "./components/animation/reveal";
import { ModeToggle } from "./components/mode-toggle";
import { useEffect } from "react";

function App() {

  useEffect(()=>{
    localStorage.getItem('CurrentFersons')==null?localStorage.setItem('CurrentFersons',JSON.stringify([
      {
        "id":"MayorEmmanuel",
        "name":"Hon. Emmanuel L. Jamis",
        "position":"ALUIJID - Mayor"
      },
      {
        "id":"ViceMayorAlvin",
        "name":"Hon. Alvin Giovanni A. Labis",
        "position":"ALUBIJID - Vice Mayor"
      },
      {
        "id":"MayorAlexis",
        "name":"Hon. Alexis S. Quina",
        "position":"BALINGASAG - Mayor"
      },
      {
        "id":"ViceMayorFelix",
        "name":"Hon. Vice Mayor Felix H. Borromeo",
        "position":"BALINGASAG - Vice Mayor"
      },
      {
        "id":"MayorAaron",
        "name":"Hon. Mayor Aaron Paul S. Unabia",
        "position":"BALINGOAN - Mayor"
      },
      {
        "id":"ViceMayorFranklin",
        "name":"Hon. Franklin C. Panulaya",
        "position":"BALINGOAN - Vice Mayor"
      },
      {
        "id":"MayorDann",
        "name":"Hon. Mayor Dann Isaiah D. Lusterio",
        "position":"BINUANGAN - Mayor"
      },
      {
        "id":"ViceMayorMichelle",
        "name":"Hon. Michelle C. Abao",
        "position":"BINUANGAN - Vice Mayor"
      },
      {
        "id":"MayorEdgar",
        "name":"Hon. Mayor Edgar Lignes",
        "position":"EL SALVADOR CITY - Mayor"
      },
      {
        "id":"ViceMayorMark",
        "name":"Hon.  Mark William U. Tan",
        "position":"EL SALVADOR CITY - Vice Mayor"
      },
      {
        "id":"MayorEric",
        "name":"Hon. Mayor Eric G. Canosa",
        "position":"GINGOOG CITY - Mayor"
      },
      {
        "id":"ViceMayorThaddeus",
        "name":"Hon.  Thaddeus “Tadoy” Lugod",
        "position":"GINGOOG CITY - Vice Mayor"
      },
      {
        "id":"MayorMeraluna",
        "name":"Hon. Meraluna S. Abrogar",
        "position":"CLAVERIA - Mayor"
      },
      {
        "id":"ViceMayorReynante",
        "name":"Hon. Reynante L. Salvaleon",
        "position":"CLAVERIA - Vice Mayor"
      },
      {
        "id":"MayorMugot",
        "name":"Hon. Mayor Emmanuel Mugot",
        "position":"GITAGUM - Mayor"
      },
      {
        "id":"ViceMayorRudy",
        "name":"Hon. Rudy O. Damasing",
        "position":"GITAGUM - Vice Mayor"
      },
      {
        "id":"MayorMercy",
        "name":"Hon. Mayor Mercy Grace “Gagay” J. Acain",
        "position":"INITAO - Mayor"
      },
      {
        "id":"ViceMayorEnerito",
        "name":"Hon. Vice Mayor Enerito “Gogoy” J. Acain V",
        "position":"INITAO - Vice Mayor"
      },
      {
        "id":"MayorRedentor",
        "name":"Hon. Mayor Redentor “Red” S. Jardin",
        "position":"JASAAN - Mayor"
      },
      {
        "id":"ViceMayorJannus",
        "name":"Hon. Vice Mayor Jannus Ray Acas Estor",
        "position":"JASAAN - Vice Mayor"
      },
      {
        "id":"MayorDanilo",
        "name":"Hon. Danilo “Junjun” Artadi Lagbas Jr.",
        "position":"KINOGUITAN - Mayor"
      },
      {
        "id":"ViceMayorTomas",
        "name":"Hon. Vice Mayor Tomas M. Zarate",
        "position":"KINOGUITAN - Vice Mayor"
      },
      {
        "id":"MayorJay",
        "name":"Hon. Mayor Jay Albert C. Puertas",
        "position":"LAGONGLONG - Mayor"
      },
      {
        "id":"ViceMayorMarita",
        "name":"Hon. Vice Mayor Marita D. Ramonal",
        "position":"LAGONGLONG - Vice Mayor"
      },
      {
        "id":"MayorDiosdado",
        "name":"Hon. Mayor Diosdado T. Obsioma",
        "position":"LAGUINDINGAN - Mayor"
      },
      {
        "id":"ViceMayorRoy",
        "name":"Hon. Vice Mayor Roy I. Macua",
        "position":"LAGUINDINGAN - Vice Mayor"
      },
      {
        "id":"Nico",
        "name":"Ian Nico Caulin",
        "position":"Gwapo"
      },
      {
        "id":"Mark",
        "name":"Mark Gil Rusiana",
        "position":"OJT - Black white blue red hacker"
      },
      {
        "id":"Alvin",
        "name":"Alvin Nuska",
        "position":"Gwapo King"
      },
      {
        "id":"DICTMisOr.PD-Nideliza",
        "name":"DICT Mis Or. PD-Nideliza Fe O. Nacilla",
        "position":"DICT Mis. Or. Provincial Director"
      },
      {
        "id":"DICT10RD-Ms.Sittie",
        "name":"DICT 10 RD-Ms. Sittie Rahma Alawi",
        "position":"DICT Region 10 Director"
      },
      {
        "id":"Sarah",
        "name":"Sarah Margaha",
        "position":"My Everything"
      },
      {
        "id":"PGMOBMD2Bliss",
        "name":"Bliss Francis “Panky” Acain",
        "position":"PGMO - Board Members District 2"
      },
      {
        "id":"PGMOBMD2Dexter",
        "name":"Dexter Yasay",
        "position":"PGMO - Board Members District 2"
      },
      {
        "id":"PGMOBMD1Fredrick",
        "name":"Fredrick “Erick” Yu Khu",
        "position":"PGMO - Board Members District 1"
      },
      {
        "id":"PGMOBMD2Gerardo",
        "name":"Gerardo “Boboy” Sabal III",
        "position":"PGMO - Board Members District 2"
      },
      {
        "id":"PGMOGovernorUnabia",
        "name":"Hon.Peter Unabia",
        "position":"PGMO - Governor"
      },
      {
        "id":"PGMOViceGovernorJeremy",
        "name":"Hon.Jeremy Jonahmar Pelaez",
        "position":"PGMO - Vice Governor"
      },
      {
        "id":"PGMOBMD1Jabi",
        "name":"Jabi “Abing” Bernaldez",
        "position":"PGMO - Board Members District 1"
      },
      {
        "id":"PGMOBMD2Princess",
        "name":"Princess Nacional Emano",
        "position":"PGMO - Board Members District 2"
      },
      {
        "id":"PGMOBMD1Rey",
        "name":"Rey Buhisan",
        "position":"PGMO - Board Members District 1"
      },
      {
        "id":"PGMOBMD2Syremae",
        "name":"Syremae “Say-say” Neri Emano ",
        "position":"PGMO - Board Members District 2"
      },
      {
        "id":"PGMOBMD1Wayne",
        "name":"Wayne “Win” Militante",
        "position":"PGMO - Board Members District 1"
      },
      {
        "id":"PGMOBMD1Marlon",
        "name":"Marlon Chan Kho",
        "position":"PGMO - Board Members District 1"
      },
      {
        "id":"MayorLeonardo",
        "name":"Hon. Mayor Leonardo L. Uy",
        "position":"LIBERTAD-Mayor"
      },
      {
        "id":"ViceMayorSharon",
        "name":"Hon. Vice Mayor Sharon M. Ballangan",
        "position":"LIBERTAD-Vice Mayor "
      },
      {
        "id":"MayorWellie",
        "name":"Hon. Mayor Wellie G. Lim",
        "position":"LUGAIT-Mayor "
      }
      ,
      {
        "id":"ViceMayorRoger",
        "name":"Hon. Vice Mayor Roger G. Lim",
        "position":"LUGAIT-Vice Mayor "
      },
      {
        "id":"MayorCharlie",
        "name":"Hon. Mayor Charlie B. Buhisan",
        "position":"MAGSAYSAY(LINUGOS)-Mayor"
      },
      {
        "id":"ViceMayorGrace",
        "name":"Hon. Vice Mayor Grace B. Abao",
        "position":"MAGSAYSAY(LINUGOS)-ViceMayor"
      },
      {
        "id":"MayorStephen",
        "name":"Hon. Mayor Stephen S. Tan",
        "position":"MANTICAO-Mayor"
      },
      {
        "id":"ViceMayorRoberto",
        "name":"Hon. Vice Mayor Roberto M. Lagrosas",
        "position":"MANTICAO-ViceMayor"
      },
      {
        "id":"MayorDonato",
        "name":"Hon. Mayor Donato N. Chan",
        "position":"MEDINA-Mayor"
      },
      {
        "id":"ViceMayorPaulo",
        "name":"Hon. Vice Mayor Paulo B. Magallanes",
        "position":"MEDINA-ViceMayor"
      },
  
  
  
  
  
      {
        "id":"MayorDennis",
        "name":"Hon. Mayor Dennis L. Roa",
        "position":"NAAWAN-Mayor"
      },
      {
        "id":"ViceMayorAllan",
        "name":"Hon. Vice Mayor Allan B. Roa",
        "position":"NAAWAN-ViceMayor"
      },
      {
        "id":"MayorJayfrancis",
        "name":"Hon. Mayor Jayfrancis D. Bago",
        "position":"OPOL-Mayor"
      },
      {
        "id":"ViceMayorDanilo",
        "name":"Hon. Vice Mayor Danilo E. Daroy",
        "position":"OPOL-ViceMayor"
      },
      {
        "id":"MayorAngelo",
        "name":"Hon. Mayor Angelo G. Capistrano",
        "position":"SALAY-Mayor"
      },
      {
        "id":"ViceMayorRey",
        "name":"Hon. Vice Mayor Rey Amelto K. Tan",
        "position":"SALAY-ViceMayor"
      },
      {
        "id":"MayorMildred",
        "name":"Hon. Mayor Mildred L. Mondigo",
        "position":"SUGBONGCOGON-Mayor"
      },
      {
        "id":"ViceMayorIvan",
        "name":"Hon. Vice Mayor Ivan Chester E. Lagbas",
        "position":"SUGBONGCOGON-ViceMayor"
      },
      {
        "id":"MayorNadya",
        "name":"Hon. Mayor Nadya B. Emano-Elipe",
        "position":"TAGOLOAN-Mayor"
      },
      {
        "id":"ViceMayorRobinson",
        "name":"Hon. Vice Mayor Robinson V. Sabio",
        "position":"TAGOLOAN-ViceMayor"
      },
      {
        "id":"MayorJennie",
        "name":"Hon. Mayor Jennie Rosalie U. Mendez",
        "position":"VILLANUEVA-Mayor"
      },
      {
        "id":"ViceMayorJeric",
        "name":"Hon. Vice Mayor Jeric G. Emano",
        "position":"VILLANUEVA-ViceMayor"
      },
      {
        "id":"MayorRico",
        "name":"Hon. Mayor Rico T. Taray",
        "position":"TALISAYAN-Mayor"
      },
      {
        "id":"ViceMayorRommel",
        "name":"Hon. Vice Mayor Rommel C. Maslog",
        "position":"TALISAYAN-ViceMayor"
      },
      
  
  
  ])):""
  })


  return (
    <ThemeProvider defaultTheme="light" storageKey="vite-ui-theme">

     <div className="  bg-background min-h-screen w-full overflow-hidden flex flex-col  items-center">
      
      <nav className=" pointer-events-none animate__animated animate__slideInDown  z-20 bg-background/0 fixed flex justify-between items-center w-full max-w-[1468px] py-5 border-b-[0px] border-accent \ ">
        <Link className=" ml-5" to="/react-vite-supreme" >
          <img src={viteLogo} className="logo " alt="Vite logo" />
        </Link>
      

        

        


        <div className="mr-5 pointer-events-auto">
          <ModeToggle />
        </div>
        
  
       
      </nav>
 

      

      <Outlet />
     
    </div>
    </ThemeProvider>
  )
}



export default App
