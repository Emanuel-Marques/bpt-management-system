import Header from "../../components/header";
import Table from "../../components/table";
import horario from "../../assets/horario-banner.jpg";

export default function Schedule() {
    return (
        <>
            <Header
                title="Horário de aula"
                banner={horario}
                isMainPage={false}
            />
            <div className="p-32 flex flex-col gap-5">
                <p>Na Academia <span className="font-bold">Brazilian Power Team - Lobito</span>, oferecemos uma ampla variedade de horários para que você possa encaixar sua rotina de treinos de maneira conveniente e flexível. Confira abaixo nossos horários das aulas de grupo. Estamos aqui para ajudar você a alcançar seus objetivos de saúde e bem-estar, com professor e instrutores dedicados e uma infraestrutura completa à sua disposição. Se precisar de ajuda para escolher as aulas certas para o seu perfil, fale com nossa equipe!</p>
                <Table />
            </div>
        </>
    );
}