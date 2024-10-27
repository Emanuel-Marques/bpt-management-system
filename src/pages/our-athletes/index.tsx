import Header from "../../components/header";
import nossosAtletasBanner from "../../assets/atletas-banner.jpg";
import AthleteCard from "../../components/athleteCard";
import { athleteInfo } from "../../data/athlete-info";

export default function OurAthletes() {
    return (
        <>
            <Header
                title="Conheça os nossos atletas"
                banner={nossosAtletasBanner}
                isMainPage={false}
            />
            <div className="flex flex-wrap gap-8 justify-center p-12">
                {
                    athleteInfo.map((athlete, index) => (
                        <AthleteCard
                            key={index}
                            name={athlete.name}
                            belt={athlete.belt}
                            image={athlete.image}
                            description={athlete.description}
                        />
                    ))
                }
            </div>
        </>
    );
}