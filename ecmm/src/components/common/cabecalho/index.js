import { Div } from './styled';
import Titulo from '../titulo/index';

export default function cabecalho() {
    return (
        <Div>
            <div className="cabecalho">
                <Titulo />

                <div className="conjunto">
                    <div className="inp">
                        <input type="text" placeholder="Pesquisar..." ></input>
                    </div>

                    <div className="botao">
                        <button>
                            imagem
                        </button>
                    </div>

                    <div className="botao">
                        <button>imagem</button>
                    </div>

                    <div className="botao">
                        <button>imagem</button>
                    </div>
                </div>
            </div>
        </Div>
    );
}