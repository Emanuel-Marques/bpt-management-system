import { AthleteCardProps } from "../utils/types";

export default function AthleteCard({ name, belt, image, description } : AthleteCardProps) {
    return (
        <div className="flex flex-col shadow-xl w-80 rounded-b-lg hover:cursor-pointer">
            <img src={image} className="rounded-t-lg" alt="imagem do atleta" width={362.66}/>
            <div className="p-6">
                <h3 className="font-bold text-xl">{name}</h3>
                <p className="text-[#6B7280]">FAIXA {belt.toUpperCase()}</p>
                <p>{description}</p>
            </div>
        </div>
    )
}