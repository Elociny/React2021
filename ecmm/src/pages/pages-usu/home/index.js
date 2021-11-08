import { Div } from './styled';

import Cabecalho from '../../../components/common/cabecalho/index';
import RodaPe from '../../../components/common/rodaPe/index';

export default function home() {
    return (
        <Div>
            <div className="Pai">
                <Cabecalho />
                <RodaPe />
            </div>
        </Div>
    );
}
