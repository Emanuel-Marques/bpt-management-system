import logo from '../assets/Imagem.png'
export default function Footer() {
    return (
        <footer className="">
            <div className="flex items-center justify-center gap-40 py-20">
                <img src={logo} alt="logtipo bpt" width={100} />
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-xl">BPT Lobito</h3>
                    <p>Colégio Gustave Eiffel, bairro Compão</p>
                    <p>Lobito, Benguela</p>
                    <p>Angola</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-xl">Funcionamento</h3>
                    <p>Segunda a Sexta</p>
                    <p>08:00 - 17:00</p>
                    <p>----------</p>
                </div>
                <div className="flex flex-col gap-1">
                    <h3 className="font-bold text-xl">Contacto</h3>
                    <p>bptlobito@gmail.com</p>
                    <a className="hover:font-bold" href='https://www.instagram.com/bpt_lobito_bjj__/' target='_blank'>@bpt_lobito_bjj__</a>
                    <p>(+244) 946 902 448</p>
                </div>
            </div>
            <div className="text-center p-10" style={{ backgroundColor: "rgba(0,11,45,0.95)" }}>
                <p className="text-white"> &copy; 2024 Brazilian Power Team Lobito - Todos os direitos reservados.</p>
            </div>
        </footer>
    );
}