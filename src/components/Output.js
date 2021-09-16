import React from 'react'
import { OutputContainer } from './styles'
import DateTime from './Clock'

export default function Output({input}) {
    const Result = () =>{

        if(input){
            if(input.is_Array()){
                return (
                    <ul>
                    {input.map((item) => (
                        <li>
                            {item}
                        </li>
                    ))}
                    </ul>
                )
            }
            else{
                return(
                    <div>
                        {input}
                    </div>
                )
            }
         
        }
        else{           
            return(
                <div>
                    <DateTime/>
                </div>
            )
        }

    }
    return (
        <OutputContainer>
            <Result/>
        </OutputContainer>
    )
}
