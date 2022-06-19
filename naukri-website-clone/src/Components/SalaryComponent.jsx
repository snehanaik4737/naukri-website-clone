import React, { useEffect } from 'react'
import { Box } from '@chakra-ui/react'
import { Checkbox, CheckboxGroup ,Flex} from '@chakra-ui/react'
import { VStack } from '@chakra-ui/react'
import { Text } from '@chakra-ui/react'
import { useState } from 'react'
import {
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  MenuItemOption,
  MenuGroup,
  MenuOptionGroup,
  MenuDivider,
  Button
} from '@chakra-ui/react'
import { useParams, useSearchParams } from 'react-router-dom'

import { useDispatch } from 'react-redux'
import { getJobs, getJobsByLocation, getJobsBySalary } from '../Redux/JobsSearching/action'
export const SalaryComponent = () => {
  const dispatch=useDispatch()
const [searchParams,setSearchParams]=useSearchParams();
  const [salaryValues,setSalaryValues]=useState(searchParams.getAll("salary")|| []);

  const {job} =useParams();
 
  const salaryHandler=(values)=>{
    
    setSalaryValues(values)
  
  }

 

  useEffect(()=>{
if(salaryValues){
  setSearchParams({salary:salaryValues},{replace:true})
  let params={
    salary:searchParams.getAll("salary")
  }
  // let location={
  //   location:searchParams.getAll("location")
  // }
  
  dispatch(getJobsBySalary(job,params))
}
  },[salaryValues,setSearchParams,searchParams,dispatch])
  return (
   <Box>
     <Box display={{base:"none",md:"block"}}
     boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
     marginLeft={'5%'}
     marginTop={'25%'}
     p="1rem 2rem">
       <Text fontSize="2xl">Salary</Text>
     

       <CheckboxGroup colorScheme='green' defaultValue={salaryValues} onChange={salaryHandler}>
  <VStack alignItems={"baseline"} >
    <Checkbox value="0">0-3 Lakhs</Checkbox>
    <Checkbox value= "3">3-6 Lakhs</Checkbox>
    <Checkbox value='6'>6-10Lakhs</Checkbox>
    <Checkbox value='10'>10-15 Lakhs</Checkbox>
 
  </VStack>
</CheckboxGroup>
     </Box>
    
   </Box>
  )
}
