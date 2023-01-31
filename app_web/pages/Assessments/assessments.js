import Styled from '../../styles/assessments.module.css'
import { useState } from 'react'

export default function Assessments(){
    const [number, setNumber] = useState(0)
    const [total,setTotal] = useState(0);
    const [result,setResult] = useState(0);
    const random = (Math.floor(Math.random()* 100)).toString() + '%'
    const [percent,setPercent]= useState(0)
    const [porcentagem,setPorcentagem]=useState('')
    const completed = {
        width: percent >= 0 ? porcentagem: '10%',
        height: "100%",
        margin: "0",
        borderRadius: "10px",
        background: "#0dcf0d",
      }
      

      function changeNumber(){
        setResult(result + number)
        setTotal(total + 1)
        setPercent(Math.floor(result/total)) 
        setPorcentagem(percent + "%") 
        console.log(total)
      }
      const handleChange = event => {
        let {  min, max } = event.target;
        const value = Math.max(min, Math.min(max, Number(event.target.value)));
        setNumber(value);
      };
    return(
        <>
            <div className={Styled.cardglobal}>
                <div className={Styled.layoutGraph}>
                    <div style={completed}>
                        
                    </div>
                </div>
                <div className={Styled.cardback}>
                    <div className={Styled.DInput}>
                        <label htmlFor='nota'>{percent}</label>
                        <input 
                        type="number"
                        value={number}
                        placeholder="0-100"
                        min="0"
                        max="100"
                        onChange={(e)=>handleChange(e)}/>

                        <button 
                        type="button"
                        onClick={changeNumber}
                        >Save Here</button>
                    </div>
                </div>
            </div>
        </>
    )
}