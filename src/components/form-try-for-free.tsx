export default function FormTryForFree() {
    return (
        <form action="" className="border-t-2 border-t-slate-300 border-b-2 flex flex-col items-center justify-center py-10 px-40 gap-4">
            <h1 className="font-bold text-3xl">Experimente as aulas gratuitamente</h1>
            <p className="font-normal text-lg">Preencha o formulário para ganhar uma semana gratuita de aulas experimentais.</p>
            <div className="flex w-full justify-between">
                <input className="border border-gray-400 rounded-lg p-2 w-80" placeholder="Primeiro nome" type="text" name="" id="" />
                <input className="border border-gray-400 rounded-lg p-2 w-80" placeholder="Último nome" type="text" name="" id="" />
                <input className="border border-gray-400 rounded-lg p-2 w-80" placeholder="Email" type="email" name="" id="" />
                <input className="border border-gray-400 rounded-lg p-2 w-80" placeholder="Telefone" type="text" name="" id="" />
            </div>
            <input className="bg-[#012db3] text-white w-full px-4 py-2 mt-4 rounded cursor-pointer hover:bg-blue-800" type="submit" name="" id="" value="Enviar" />
        </form>
    )
}