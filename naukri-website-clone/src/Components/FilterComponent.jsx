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
import { getJobs, getJobsByLocation } from '../Redux/JobsSearching/action'
export const FilterComponent = () => {
  const dispatch=useDispatch()
const [searchParams,setSearchParams]=useSearchParams();
  const [categoryValues,setCategoryValues]=useState(searchParams.getAll("location")|| []);

  const {job} =useParams();
 
  const categoryHandler=(values)=>{
    
    setCategoryValues(values)
  
  }

 
console.log("cat",categoryValues)
  useEffect(()=>{
if(categoryValues){
  setSearchParams({location:categoryValues},{replace:true})
  let params={
    location:searchParams.getAll("location"),

  }
  dispatch(getJobsByLocation(job,params))
}
  },[categoryValues,setSearchParams,searchParams,dispatch])
  return (
   <Box>
     <Box display={{base:"none",md:"block"}}
     boxShadow={'rgba(0, 0, 0, 0.24) 0px 3px 8px'}
     marginLeft={'5%'}
     marginTop={'25%'}
     p="1rem 2rem">
       <Text fontSize="2xl">Location</Text>
     

       <CheckboxGroup colorScheme='green' defaultValue={categoryValues} onChange={categoryHandler}>
  <VStack alignItems={"baseline"} >
    <Checkbox value="pune">Pune</Checkbox>
    <Checkbox value= "mumbai">Mumbai /Bombay</Checkbox>
    <Checkbox value='bangalore'>Bangalore/Bengaluru</Checkbox>
    <Checkbox value='delhi'>Delhi/NCR</Checkbox>
 
  </VStack>
</CheckboxGroup>
     </Box>
    
   </Box>
  )
}
