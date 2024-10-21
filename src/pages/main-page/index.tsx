import InfoCard from "../../components/info-card";
import { cardInfoData } from "../../data/info-card-data";
import girls from "../../assets/girls.jpg";
import Header from "../../components/header";
import banner from "../../assets/main-banner.jpg";

export default function MainPage() {
    return (
        <>
            <Header
                banner={banner}
                isMainPage={true}
            />
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
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#008999" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                                Programa de treinos personalizado (competidor e não competidor)
                            </li>
                            <li className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#008999" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                                Variedade de horários de aula
                            </li>
                            <li className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#008999" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                                Faça parte da nossa família
                            </li>
                            <li className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#008999" className="w-6 h-6">
                                    <path stroke-linecap="round" stroke-linejoin="round" d="M4.5 12.75l6 6 9-13.5"></path>
                                </svg>
                                Histórico comprovado (melhor academia de Jiu Jitsu no Lobito)
                            </li>
                            <li className="flex">
                                <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke-width="2" stroke="#008999" className="w-6 h-6">
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
            {
                cardInfoData.map((cardInfo, index) => (
                    <InfoCard
                        model={cardInfo.model}
                        key={index}
                        title={cardInfo.title}
                        content={cardInfo.content}
                        img={cardInfo.img}
                    />
                ))
            }
        </>
    );
}