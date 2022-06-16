
import styles from "./Navbar.module.css"
import { Link } from "react-router-dom"

export function Navbar() {


    return (
        <>
            <div className={styles.background}
              //  style={{ backgroundImage: `url("https://static.naukimg.com/s/7/109/assets/images/homepagebgImage.d92f90dc.webp")` }}
                
              >
                <header className={styles.header}>
                    <ul className={styles.navbar} >
                        <div className={styles.image}>
                           <Link to ="/"><img style={{marginTop:"20px"}} src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png" alt="logo" /></Link> 
                        </div>
                        <li className={styles.drop_one}>
                            <span >JOBS</span>
                            <div className={styles.menu_experiment}>
                                <div className={styles.menu_one}>
                                    <ul>
                                      <h3>Popular categories</h3>
                                        <li>IT jobs</li>
                                        <li>Sales jobs</li>
                                        <li>Marketing jobs</li>
                                        <li>Data Science jobs</li>
                                        <li>HR jobs</li>
                                        <li>Engineering jobs</li>
                                    </ul>
                                    <ul>
                                      <h3>Jobs in demand</h3>
                                        <li>Fresher jobs</li>
                                        <li>MNC jobs</li>
                                        <li>Remote jobs</li>
                                        <li>JWork From Home jobs</li>
                                        <li>Walk-in jobs</li>
                                        <li>Prt-Time jobs</li>
                                     
                                    </ul>
                                    <ul>
                                      <h3>Explore more jobs</h3>
                                        <li>Jobs by category</li>
                                        <li>Jobs by skill</li>
                                        <li>Jobs by location</li>
                                        <li>Jobs by designation</li>
                                        <li>Create free job alert</li>
                                      
                                     
                                    </ul>
                                    <ul>
                                      <h3>Jobs by location</h3>
                                        <li>Jobs in Delhi</li>
                                        <li>Jobs in Mumbai</li>
                                        <li>Jobs in Pune</li>
                                        <li>Jobs in Banglore</li>
                                        <li>Jobs in Hyderabad</li>
                                        <li>Jobs in Chennai</li>
                                     
                                    </ul>

                                </div>
                            </div>
                        </li>
                        {/* <li className={styles.drop_two}>
                          <Link to="/recruiter">   <span>RECRUITERS</span></Link> 
                            <div className={styles.menu_experiment}>
                                <div className={styles.menu_two}>
                                    <ul>
                                        <li>Browse All Recruiters</li>
                                        <li>SPECIAL OFFERS</li>
                                        <li>NEW REDEFINE</li>
                                    </ul>
                                </div>
                            </div>
                        </li> */}
                        <li className={styles.drop_three}>
                            <span>COMPANIES</span>
                            <div className={styles.menu_experiment}>
                                <div className={styles.menu_three}>
                                    <ul>
                                      <h2>Explore categories</h2>
                                        <li>Unicorn</li>
                                        <li>MNCs</li>
                                        <li>Startup</li>
                                        <li>Product based</li>
                                        <li>Internet</li>
                                        
                                    </ul>
                                    <ul>
                                      <h3>Explore collections</h3>
                                        <li>Top companies</li>
                                        <li>Fintech companies</li>
                                        <li>Edtech companies</li>
                                        <li>Featured companies</li>
                                        
                                        <li>Sponsored companies </li>
                                       
                                    </ul>
                                    <ul>
                                      <h3>Research companies</h3>
                                      
                                        <li>About Companies</li>
                                        <li>Interview Questions</li>
                                      
                                        <li>Company Reviews </li>
                                        <li>Company Salaries</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* <li className={styles.drop_four}>
                            <span>TOOLS</span>
                            <div className={styles.menu_experiment}>
                                <div className={styles.menu_four}>
                                    <ul>
                                        <li>Career Dashboard</li>
                                        <li>Your next Career</li>
                                        <li>Skills Trend</li>
                                        <li>Naukri Lab </li>
                                    </ul>
                                </div>
                            </div>
                        </li> */}
                        <li className={styles.drop_five}>
                            <span>SERVICES</span>
                            <div className={styles.menu_experiment}>
                                <div className={styles.menu_five}>
                                    <ul>
                                        <li><h3> Resume writing</h3></li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                        <li>Resume critiquc</li>
                                      
                                        <li><h3>Find jobs</h3></li>
                                       <li> Jobs4u</li>
                                          <li>Priority applicant</li>
                                     
                                    </ul>
                                    <ul>
                                        <li><h3>Get recruiter's attention</h3></li>
                                        <li>Resume display</li>
                                        <li>Recruiter connection</li>
                                        <li>Job search booster</li>
                                        
                                        <li><h3>Monthly subscriptions</h3></li>
                                        <li>Basic and premium plans</li>
                                      
                                    </ul>
                                    <ul>
                                        <li><h3>Learn & upskill</h3></li>

                                      <li> Data Science courses</li>
                                         <li>   Technology courses</li>  
                                     <li>Management courses</li>  
                                     <li> Finance courses</li>
                                     <li>Design courses</li> 
                                     <li> Healthcare courses</li>
                                     <li>Degree programs</li> 
                                       
                                    </ul>
                                </div>
                            </div>
                        </li>
                        {/* <li className={styles.drop_six}>
                            <span>MORE</span>
                            <div className={styles.menu_experiment}>
                                <div className={styles.menu_six}>
                                    <ul>
                                        <li><h3>Writing Resume</h3></li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                        <li><h3>Writing Resume</h3></li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                    </ul>
                                    <ul>
                                        <li><h3>Writing Resume</h3></li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                        <li><h3>Writing Resume</h3></li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                    </ul>
                                    <ul>
                                        <li><h3>Writing Resume</h3></li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                        <li><h3>Writing Resume</h3></li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                        <li>Text Resume</li>
                                        <li>Visual Resume</li>
                                    </ul>
                                </div>
                            </div>
                        </li> */}
                        {/* <li><span> {data.length !== 0 ? <Link style={{ color: 'white' }} to="/profile">{data[0].name} </Link> : <Link style={{ color: 'white' }} to="/login">LOGIN</Link>} </span></li> */}
                        {/* <li style={{ marginLeft: 100 }} className={styles.drop_seven}>
                       
                            <div className={styles.menu_experiment}>
                                <div className={styles.menu_seven}>
                                    <ul>
                                        <li>Job recommendations</li>
                                    </ul>
                                </div>
                            </div>
                        </li> */}
                     

                        <button style={{paddingTop:"10px", paddingBottom:"10px",paddingLeft:"25px",paddingRight:"25px", borderRadius:"23px", color:"blue",fontSize:"1rem",border:"0.5px solid blue",background:"none",margin:"5px" }}>Login</button>

                        <Link to="/register">

                        <button style={{paddingTop:"10px", paddingBottom:"10px",paddingLeft:"25px",paddingRight:"25px", borderRadius:"23px", color:"white",fontSize:"1rem",border:"none",background:'rgb(255,117,85)' }}>Register</button>
                    
                        </Link>
                        <li className={styles.drop_four}>
                            <span>FOR EMPLOYERS</span>
                            <div className={styles.menu_experiment}>
                                <div style={{ marginLeft: -70, paddingRight: 85, paddingLeft: 20 }} className={styles.menu_four}>
                                    <ul>
                                        <li>Buy Online</li>
                                        <li>Employer Online</li>
                                    </ul>
                                </div>
                            </div>
                        </li>
                    </ul>
                </header>
            </div>
        </>
    )

}


