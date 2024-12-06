import { useEffect, useState } from "react"
import faq from "../API/faq.json"
import FAQ from "./UI/FAQ";

export const Accordion = ()=>{
    const[data, setData] = useState([]);
    const [activeId, setActiveId] = useState(false);



    useEffect(()=>{
        setData(faq);
    },[]);

    const handleButton =(id)=>{
        // getting prev id and id match then get false and else live it
        setActiveId((prevId)=> (prevId === id ? false : id));

    }


    return(
      <>
      <h1>The Accordion</h1>
        <ul className="section-accordion">
            {
                 data.map((curElem)=>{
                    // console.log(curElem);
                    
                    return( 
                        <FAQ key={curElem.id}
                         curData={curElem}  
                         isActive={activeId==curElem.id}
                         onToogle={()=>handleButton(curElem.id)}/>
                    );
                 })
            }
        </ul>
      </>
    )
  }
  
   