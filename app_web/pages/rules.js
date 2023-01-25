import {RulesCard} from '../styles/styledComponents/rulesStyle'
import {RulesPool} from '../styles/styledComponents/rulesStyle'
import {RulesSpan} from '../styles/styledComponents/rulesStyle'
import {LI} from '../styles/styledComponents/rulesStyle'
import {RulesPoolTable} from '../styles/styledComponents/rulesStyle'
export default function Rules(){
    return(
        <>
        <RulesCard >
            <RulesPool >
                <RulesSpan>
                    Pool Rules
                </RulesSpan>
                    <ol>
                        <LI>It is forbidden to use any kind of glass on the edge or inside the pool 
                            (CUP, BOTTLE, ETC...).</LI>
                        <LI>When using skin products 
                            (protector or tanning) it is necessary to go through the shower.</LI>
                        <LI>It is forbidden to place any type of object inside the pool, 
                            such as a chair, etc... (even on the little beach).</LI>
                        <LI>The pool motor is automatic, so there is no need 
                            to handle it.</LI>
                        <LI>It is allowed to use balls, balls, etc...</LI>
                    </ol>
            </RulesPool>
            <RulesPoolTable>
                <RulesSpan>
                    Pool table rules
                </RulesSpan>
                <ol>
                        <LI>Proibido sentar/andar em cima da mesa.</LI>
                        <LI>Colocar copos/caneca de vidros ou de pláticos na borda ou 
                            no centro.</LI>
                        <LI>Passar qualquer tipo de produto no veludo(no quarto de casal 
                            tem um aspiradorde pó caso seja necessário fazer uma limpeza.</LI>
                        <LI>Ao fim do jogo recolher todas
                             as bolas e colocar dentro da caixa espeficica.</LI>
                        <LI>A utilização dos tacos é somente para o jogo, 
                            cuidado ao manusear (custo de cada unidade R$ 200,00)</LI>
                    </ol>
                        
            </RulesPoolTable>
        </RulesCard>
        </>
    )
}