import AthleteCard from "../../components/athleteCard";
import FormTryForFree from "../../components/form-try-for-free";
import { athleteInfo } from "../../data/athlete-info";

export default function AboutOurAcademy() {
    return (
        <>
            <div className="p-32 flex flex-col gap-5">
                <p>
                    Estabelecida com uma visão enraizada na paixão pelo Jiu-Jitsu Brasileiro e no compromisso com a comunidade, a Brazilian Power Team Lobito tem uma rica história de moldar indivíduos em praticantes habilidosos e disciplinados.
                </p>
                <p>
                    Fundada nos princípios de respeito, integridade e constante aprimoramento, nossa academia, localizada no bairro Compão, no Colégio Gustave Eiffel, sob a liderança do <span className="font-bold">Mestre Ricardo Marcelino</span>, tem sido um marco na jornada de inúmeros alunos em busca de crescimento pessoal. Ao longo dos anos, cultivamos um legado que vai além do treinamento físico, enfatizando o desenvolvimento do caráter e um forte senso de camaradagem entre nossos membros.
                </p>
                <p>
                    De nossas origens humildes até nos tornarmos um centro próspero para entusiastas de Jiu-Jitsu, a Brazilian Power Team Lobito continua a evoluir, inspirando-se na tradição e inovação para oferecer uma experiência enriquecedora a cada participante. Junte-se a nós para celebrar uma história construída com dedicação, resiliência e a busca incansável pela excelência.
                </p>
            </div>
            <div className="p-6 flex flex-col justify-center align-center" style={{ backgroundColor: "#F9FAFB" }}>
                <h1 className="font-bold text-4xl text-center">Nosso professor e instructores</h1>
                <p className="px-20 py-3 text-center">Na Brazilian Power Team Lobito, contamos com uma equipe de instrutores altamente qualificados e dedicados, que trazem consigo uma vasta experiência no Jiu-Jitsu Brasileiro e um compromisso com o desenvolvimento de cada aluno. Liderados pelo Mestre Ricardo Marcelino, um faixa preta com anos de prática e competições de alto nível, nossos instrutores se destacam não apenas pela técnica apurada, mas também pelo foco em ensinar valores como disciplina, respeito e perseverança.</p>
                <div className="flex justify-center gap-10">
                    {athleteInfo.filter((athlete) => athlete.role === "Professor" ||  athlete.role === "Instrutor").map((athlete, index) => (
                        <AthleteCard 
                            key={index}
                            name={athlete.name}
                            belt={athlete.belt}
                            image={athlete.image}
                            description={athlete.description}
                        />
                    ))}
                </div>
            </div>
            <FormTryForFree />
        </>
    );
}