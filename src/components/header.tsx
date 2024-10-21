import { HeaderProps } from "../utils/types";
import { Navbar } from "./navbar";

export default function Header({ banner, isMainPage, title } : HeaderProps) {
    if(isMainPage) {
      return (
        <header className="">
        <div className="relative w-full h-4/5 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-4 text-white flex flex-col gap-10">
            <Navbar />
            <div className="w-1/2 mx-64">
              <p className="text-sm uppercase leading-6">JIU JITSU BRASILEIRO PARA ADULTOS E CRIANÇAS</p>
              <h1 className="text-4xl font-bold mb-2">Descubra uma nova paixão e desenvolva seu potencial na BPT Lobito.</h1>
              <p className="mt-6 text-lg">Somos mais do que apenas uma academia de artes marciais – somos uma família de guerreiros e um centro para aqueles apaixonados por dominar o Jiu Jitsu brasileiro.</p>
              <button className="bg-[#012db3] text-white px-4 py-2 mt-4 rounded cursor-pointer hover:bg-blue-800">Saiba mais</button>
            </div>
          </div>
        </div>
      </header>
      )
    }
    return (
        <header className="">
        <div className="relative w-full h-4/5 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
          <div className="absolute inset-0 bg-black opacity-50"></div>
          <div className="relative z-10 p-4 text-white flex flex-col gap-10">
            <Navbar />
            <div className=" mx-64 flex justify-center px-12 pb-20">
              <h1 className="text-4xl font-bold mb-2">{title}</h1>
            </div>
          </div>
        </div>
      </header>
    );
}