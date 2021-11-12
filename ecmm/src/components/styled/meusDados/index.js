import { Div } from './styled';

export default function dados() {
    return (
        <Div>
            <div className="dados">
                <div className="f1-quadrado1">
                    <div className="f1-titulo">
                        Meus Dados
                    </div>

                    <div className="meusDados">
                        <div className="f1-MDcaixa">
                            <div className="aglomerado1">
                                <div className="img">
                                    <img src="/assets/images/perfil2.png" alt=""/>
                                </div>

                                <div className="A1-nome">
                                    <div className="f1-nome">
                                        Nome
                                    </div>

                                    <div className="sair">
                                        <button>Sair</button>
                                    </div>
                                </div>
                            </div>
                        </div>
                        
                        <div className="mConta">
                            Minha Conta
                        </div>

                        <div className="mConta">
                            Meus Perdidos
                        </div>

                        <div className="mConta">
                            Lista De Desejos
                        </div>
                    </div>
                </div>
            </div>
        </Div>
    );
}