import Conta from "../types/Conta.js";
import { FormatoData } from "../types/FormatoData.js";
import { formatarData } from "../utils/formatters.js";
const elementoDataAcesso = document.querySelector('.block-saldo time');
function renderizarDataAcesso() {
    if (elementoDataAcesso !== null) {
        elementoDataAcesso.textContent = formatarData(Conta.getDataAcesso(), FormatoData.DIA_SEMANA_DIA_MES_ANO);
    }
}
const DataAcessoComponent = {
    atualizar() {
        renderizarDataAcesso();
    }
};
export default DataAcessoComponent;
