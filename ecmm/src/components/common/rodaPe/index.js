import { Div } from './styled';
import Titulo from '../titulo/index';

export default function rodaPe() {
    return (
        <Div>
            <div className="roda-pe">
                <div className="cima">
                    <div className="coluna1">
                        <div className="c-titulo">
                            INFORMAÇÕES DA EMPRESA
                        </div>

                        <div className="c-info">
                            Sobre ecommodas  
                        </div>
                    </div>

                    <div className="coluna1">
                        <div className="c-titulo">
                            AJUDA E SUPORTE     
                        </div>

                        <div className="c-info">
                            Preço De Envio
                        </div>

                        <div className="c-info">
                            Devolução
                        </div>

                        <div className="c-info">
                            Como Pedir
                        </div>

                        <div className="c-info">
                            Como Rastrear
                        </div>

                        <div className="c-info">
                            Guia De Tamanhos
                        </div>
                    </div>

                    <div className="coluna1">
                        <div className="c-titulo">
                            ATENDIMENTO AO CLIENTE     
                        </div>

                        <div className="c-info">
                            Contate-Nos
                        </div>

                        <div className="c-info">
                            Método De Pagamento
                        </div>
                    </div>

                    <div className="coluna4">
                        <div className="pt-1">
                            <div className="c-titulo">
                                ENCONTRE-NOS EM:    
                            </div>

                            <div className="c-img">
                                <div className="img1">
                                    imagem
                                </div>

                                <div className="img1">
                                    imagem
                                </div>

                                <div className="img1">
                                    imagem
                                </div>

                                <div className="img1">
                                    imagem
                                </div>
                            </div>
                        </div>

                        <div className="pt-2">
                            <div className="c-titulo">
                                PAGAMENTO:
                            </div>
                            
                            <div className="c-img">
                                <div className="img1">
                                    imagem
                                </div>

                                <div className="img1">
                                    imagem
                                </div>

                                <div className="img1">
                                    imagem
                                </div>

                                <div className="img1">
                                    imagem
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

                <div className="baixo">
                    <Titulo />
                </div>
            </div>
        </Div>
    );
}