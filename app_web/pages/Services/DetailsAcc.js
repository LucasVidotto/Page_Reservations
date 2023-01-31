import {CardDetail} from '../../styles/styledComponents/service'
import {Details} from '../../styles/styledComponents/service'
import {Types} from'./types';

export default function DetailsAcc(){
    return(
        <>
            <CardDetail >
                {Types.map((types,index) =>{
                    return(
                        <Details key={index}><span>{types.name}</span></Details>
                    )
                })}  
            </CardDetail>
        </>
    )
}