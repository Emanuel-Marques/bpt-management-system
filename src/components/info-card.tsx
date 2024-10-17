type infoCardPropType = {
    title: string;
    content: string;
    img: string;
    model: number;
}
export default function InfoCard({ title, content, img, model }: infoCardPropType) {

    if (model != 1) {
        return (
            <div className="flex items-center justify-center pb-10 px-52 gap-9 bg-slate-100">
                <div className="flex flex-col gap-9">
                    <h1 className="font-bold text-3xl">
                        {title}
                    </h1>
                    <p className="font-normal text-lg">
                        {content}
                    </p>
                    <button className="bg-[#012db3] w-28 text-white px-4 py-2 mt-4 rounded cursor-pointer hover:bg-blue-800">Saiba mais</button>
                </div>
                <img src={img} alt="" className="rounded" width={600} height={400} />
            </div>
        )
    }
    return (
        <div className="flex items-center justify-center pt-10 pb-11 px-52 gap-9 bg-slate-100">
            <img src={img} alt="" className="rounded" width={600} height={400}  />
            <div className="flex flex-col gap-9">
                <h1 className="font-bold text-3xl">
                    {title}
                </h1>
                <p className="font-normal text-lg">
                    {content}
                </p>
                <button className="bg-[#012db3] w-28 text-white px-4 py-2 mt-4 rounded cursor-pointer hover:bg-blue-800">Saiba mais</button>
            </div>
        </div>
    );
}