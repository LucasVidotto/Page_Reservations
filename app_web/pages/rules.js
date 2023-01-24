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
                        Pool table rules
            </RulesPoolTable>
        </RulesCard>
        </>
    )
}