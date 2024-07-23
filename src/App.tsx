import { Navbar } from "./components/navbar";
import banner from "./assets/banner.jpeg";
import girls from "./assets/girls.jpg";

function App() {
  return (
    <>
      <header className="">
        <div className="relative w-full h-3/4 bg-cover bg-center" style={{ backgroundImage: `url(${banner})` }}>
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
      <div className="flex items-center justify-center py-20 px-12 gap-20">
        <div className="w-1/3">
          <h1 className="text-3xl font-semibold mb-6">Descubra do que você é capaz.</h1>
          <p className="text-lg">Quer você seja um iniciante pisando nos tatames pela primeira vez ou um praticante experiente em busca de aprimorar suas habilidades, nossa academia é o lugar perfeito para você crescer, aprender e liberar todo o seu potencial.</p>
        </div>
        <img src={girls} alt="girls" className="h-3/4 w-96 rounded" />
      </div>
      <div className=" flex items-center justify-center flex-col py-12 gap-8" style={{ backgroundColor: "rgba(0,11,45,0.95)" }}>
        <h1 className="text-4xl text-white font-semibold">Porque treinar conosco ?</h1>
        <div className="flex gap-6">
          <div className="bg-slate-50 rounded-lg px-8 py-8 border-gray-600 border">
            <h4 className="text-2xl font-bold mb-4 text-slate-800">Nossa academia</h4>
            <ul className="text-slate-800">
              <li className="flex ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#008999" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
                Programa de treinos personalizado (competidor e não competidor)
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#008999" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
                Variedade de horários de aula
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#008999" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
                Faça parte da nossa família
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#008999" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
                Histórico comprovado (melhor academia de Jiu Jitsu no Lobito)
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#008999" class="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                </svg>
                Linhagem respeitada
              </li>
            </ul>
          </div>
          <div className="bg-slate-50 rounded-lg px-8 py-8 shadow-lg " style={{ backgroundColor: "rgba(1,23,90,1)" }}>
            <h4 className="text-2xl font-bold mb-4 text-white">Outros...</h4>
            <ul className="text-white">
              <li className="flex ">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#dd6a6a" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Horários de treinamento limitado
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#dd6a6a" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Abordagem única para todos
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#dd6a6a" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Faça parte da nossa família
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#dd6a6a" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Histórico comprovado (melhor academia de Jiu Jitsu no Lobito)
              </li>
              <li className="flex">
                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#dd6a6a" className="w-6 h-6">
                  <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12"></path>
                </svg>
                Linhagem respeitada
              </li>
            </ul>
          </div>
        </div>
      </div>

    </>
  )
}

export default App
