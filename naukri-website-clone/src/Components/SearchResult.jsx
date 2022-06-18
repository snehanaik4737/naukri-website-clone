import React from "react";
import { MapResults } from "./MapResults";
import { useDispatch, useSelector } from "react-redux";
import { Navbar2 } from "./Navbar2";
import { Box } from "@chakra-ui/react";
import { useLocation, useParams } from "react-router-dom";
import { useSearchParams } from "react-router-dom";
import { BsSearch } from "react-icons/bs";
import styles from "./SeacrhResults.module.css";
import { FilterComponent } from "./FilterComponent";
import { getJobs } from "../Redux/JobsSearching/action";
import { useEffect } from "react";
import { SalaryComponent } from "./SalaryComponent";
import { Footer } from "./Footer";
export const SearchResult = () => {
 const dispatch=useDispatch()
    const data = useSelector((store) => store.job.jobs)
    console.log("data",data)
  const { job } = useParams();

  const [searchParams]=useSearchParams()


//   useEffect(()=>{
//     if(data?.length===0){
//       let params={
//         location:searchParams.getAll("location")
//       }
//       dispatch(getJobs(params))

//     }
//   },[dispatch,data?.length,searchParams])

  return (
    <>
      <Navbar2 />
      <Box className={styles.show_search_for_box}>
        <Box display={'flex'} padding={"1%"}>
          <BsSearch className={styles.search_icon} />
          <h3 className={styles.heading_show_search_for}>
            Showing jobs for '{job}'
          </h3>
        </Box>
      </Box>
        <Box display={'flex'}>
            <Box >
            <FilterComponent/>
            {/* <SalaryComponent/> */}

            </Box>
            <Box >

           <MapResults />
            </Box>
            <Box 
            w={'30%'}
            marginLeft={'60%'}
             marginTop={'2%'}
            p={'1%'}
            border={'1px solid black'}
            >
              <h3 style={{fontSize:"1rem",fontWeight:"bold"}}>See 130 jobs in Featured Companies</h3>
           
           
           <Box display={'flex'}>
            <Box w={'50%'} marginRight={'1%'}>
              <img style={{width:'100%',}} src='https://img.naukimg.com/fc_images/v2/1695328.gif' alt=""/>
            </Box>
            <Box w={'50%'}>
              <img  style={{width:'100%'}} src='https://img.naukimg.com/fc_images/v2/10676.gif' alt=''/>
            </Box>
           </Box>

           <Box display={'flex'}>

            <Box w={'50%'} marginRight={'1%'}>
              <img   style={{width:'100%'}} src='https://img.naukimg.com/fc_images/v2/2079768.gif' alt=''/> 
            </Box>
            <Box w={'50%'}>
              <img  style={{width:'100%'}} src='https://img.naukimg.com/fc_images/v2/1398152.gif' alt=''/>
            </Box>

           </Box>
           <Box display={'flex'}>
            <Box  w={'50%'} marginRight={'1%'}>
              <img  style={{width:'100%'}} src='https://img.naukimg.com/fc_images/v2/4113192.gif' alt=''/>
            </Box>
            <Box w={'50%'} marginRight={'1%'}>
              <img  style={{width:'100%'}} src='https://img.naukimg.com/fc_images/v2/196760.gif' alt=''/>
            </Box>
           </Box>

           <Box display={'flex'}>
            <Box w={'50%'} marginRight={'1%'}>
              <img  style={{width:'100%'}} src='https://img.naukimg.com/fc_images/v2/719011.gif' alt=''/>
            </Box>
            <Box w={'50%'} marginRight={'1%'}>
              <img style={{width:'100%'}} src='https://img.naukimg.com/fc_images/v2/63124.gif' alt=''/>
            </Box>
           </Box>
           <Box display={'flex'}>
            <Box w={'50%'} marginRight={'1%'}>
              <img style={{width:'100%'}}  src='https://img.naukimg.com/fc_images/v2/24468.gif' alt=''/>
            </Box>
            <Box w={'50%'} marginRight={'1%'}>
              <img style={{width:'100%'}}  src='https://img.naukimg.com/fc_images/v2/6411.gif' alt=''/>
            </Box>

           </Box>

            </Box>
        </Box>
     
       
    </>
  );
};
