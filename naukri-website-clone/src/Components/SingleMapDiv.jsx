import React, { useState } from 'react'
import styled from "./MapResults.module.css"
//import { AuthContext } from '../Register/AuthContextProvider'
import { Link } from "react-router-dom"
import  {BsFillGeoAltFill} from "react-icons/bs"
export const SingleMapDiv = ({ id, companyName, skill, rating, experience, salary, location, description, date }) => {
//console.log("details",id,companyName,skill,rating,experience,salary,location,description,date)
    // const [isSave, setIsSave] = useState(false)
    // const { setCount } = useContext(AuthContext)

    // const handleSaveAndCount = (key) => {
    //     setIsSave(prev => !prev)
    //     if (isSave) {
    //         setCount(prev => prev + 1)
    //     }
    // }

    return (
        <>
       
      <Link to={`/search/${skill}/${id}`}>
         <div className={styled.box} key={id}>
                 <h2 className={styled.companyName}>{companyName}</h2>
             {/* <Link to={`/search/${skill}/${id}`} push >
           </Link> */}
             <div className={styled.ratingDiv}>
                 <h5 className={styled.skill} >{skill}</h5>
                 <div className={styled.ratingDivTwo}>
                     <div><h5 className={`${styled.skill} ${styled.rating}`}>{rating}</h5></div>
                     <div> <img className={styled.img} src="https://img.icons8.com/emoji/48/000000/star-emoji.png" alt="star" /></div>
                 </div>
             </div>

             <div className={styled.flex}>
                 <div className={styled.flex}>
                     <div>
                         <img className={styled.img} src="https://img.icons8.com/android/24/000000/suitcase.png" alt="1" />
                     </div>
                     <div className={styled.subs}>{experience} Yrs</div>
                 </div>
                 <div className={styled.flex}>
                     <div>
                         <img className={styled.img} src="https://img.icons8.com/material-sharp/24/000000/rupee.png" alt="2" />
                     </div>
                     <div className={styled.subs}>{salary}</div>
                 </div>
                 <div className={styled.flex}>
                     <div>
                        < BsFillGeoAltFill style={{marginTop:"42%"}}/>
                         {/* <img className={styled.img} src="https://image.flaticon.com/icons/png/128/484/484167.png" alt="" /> */}
                     </div>
                 <div className={styled.subs}>{location}</div>
                 </div>
             </div>
             <div className={styled.flex}>
                 <div>
                     <img className={styled.img} src="https://img.icons8.com/pastel-glyph/32/000000/regular-document--v1.png" alt="4" />
                 </div>
                 <div className={styled.subs}>{description}</div>
             </div>
             <div className={styled.flex}>
                 <div className={styled.flex}>
                    <div>
                         <img className={styled.img} src="https://img.icons8.com/android/50/000000/clock.png" alt="" />
                    </div>
                    <div className={styled.dateDiv}>
                         <div className={styled.subs}>{date} days ago</div>
                    </div>
                 </div>
                 <div className={styled.flex} >
                     {/* <div>{el.techStack[0]}</div> */}
                     {/* {  (el.techStack.map(e=> (<div>{e}</div>)))} */}
                     {/* {el.techStack.map(e => (<div style={{ marginTop: "-10px" }}>{e.techStack} <ul><li> {e.techStack} </li></ul></div>))} */}
                     {/* {el.techStack.forEach(element =>  (<div>{element}hi</div>)
                               
        //                    )} */}
                 </div>

                {/* <div className={styled.flex} style={{ marginLeft: "61%" }}>
                     <div>
                         {isSave ? <img className={styled.img} alt="logo" src="https://img.icons8.com/material-sharp/24/000000/star.png" /> : <img className={styled.img} src="https://img.icons8.com/metro/50/000000/star.png" alt="logo" />}
                     </div>
                     <div onClick={handleSaveAndCount} className={styled.subs}>
                         {isSave ? 'Saved' : 'Save'}
                    </div>
                 </div> */}
             </div>
         </div>
         </Link>
        </>

    )
}
