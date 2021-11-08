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
                            <img src="/assets/images/VectorFavoritos.png" alt="" />
                        </button>
                    </div>

                    <div className="botao">
                        <button>
                            <img src="/assets/images/Sacola.png" alt="" />
                            </button>
                    </div>

                    <div className="botao">
                        <button>
                            <img src="/assets/images/Perfil.png" alt="" />
                        </button>
                    </div>
                </div>
            </div>
        </Div>
    );
}