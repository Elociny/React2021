import { Div } from "./styled";

export default function produto() {
    return (
        <Div>
            <div className="container">
                <div class="f1-caixa">
                    <div class="f1-imagem">
                        <img src="/assets/images/camiseta.png" alt=""/>
                    </div>

                    <div class="f1-nome">
                        Simples ocasional Camiseta
 
                    </div>

                    <div class="f1-preco">
                        R$34,90
                    </div>
                </div>
            </div>
        </Div>
    );
}