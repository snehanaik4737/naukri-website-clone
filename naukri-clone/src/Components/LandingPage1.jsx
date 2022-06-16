import React from "react";
import { Box, Button, Input, Image} from "@chakra-ui/react";
import { Heading } from "@chakra-ui/react";
import { SearchIcon } from "@chakra-ui/icons";
import styles from "./LandingPage1.module.css"
import { Slider } from "./Slide";

export const LandingPage1 = () => {
  return (
    <Box>
      <Box display={"flex"} margin={"auto"}>
        <Heading as="h1" style={{ fontWeight: "bolder", margin: "auto" }}>
          Find your dream job now
        </Heading>
      </Box>
      <Box display={"flex"} margin={"auto"}>
        <p style={{ margin: "auto" }}>5 lakh+ jobs for you to explore</p>
      </Box>
      <Box
        w={"80%"}
        p={4}
        display="flex"
        margin="auto"
        border={"1px solid black"}
        borderRadius={"27px"}
        justifyContent={"space-around"}
        boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px;"}
      >
        <SearchIcon paddingTop={"0.5%"} height={"40px"} />
        <Input
          type="text"
          placeholder="Enter skills / designations / companies"
          padding={5}
          w={"80%"}
          border={"none"}
        />

        <Button background={"blue"} color={"white"} p={4} borderRadius={"10px"}>
          Search
        </Button>
      </Box>
      <Box
        w={"60%"}
        margin={"auto"}
        marginTop={"4%"}
        display={"flex"}
       
        borderRadius={'10px'} 
        border={'1.5px dotted gray'}
      >
        <Box w={"30%"} >
          <ol style={{padding:"25px"}}>
            <li style={{padding:"3px"}}>Get discoverd</li>
            <li style={{padding:"3px"}}>Get contacted</li>
            <li style={{padding:"3px"}}>Get hired</li>
          </ol>
        </Box>
        <Box w={"30%"} paddingTop={'30px'} >
            <Box display={'flex'} margin={'2px'} >
          <Image
            src={"https://img.naukimg.com/logo_images/groups/v1/166008.gif"}
            height={'20%'} width={'20%'}
          ></Image>
          <Image
            src={"https://img.naukimg.com/logo_images/groups/v1/224154.gif"}
            height={'20%'} width={'20%'}
          ></Image>
          </Box>
          <Box display={'flex'} margin={'2px'}>
          <Image
            src={"https://img.naukimg.com/logo_images/groups/v1/15932.gif"}
            height={'20%'} width={'20%'}
          ></Image>
          <Image
            src={"https://img.naukimg.com/logo_images/groups/v1/509622.gif"}
            height={'20%'} width={'20%'}
          ></Image>
          </Box>
        </Box>
        <Box>


          <h2>Become searchable by top companies in your domain</h2>
          
            <p>Companies search for candidate CVs directly for open positions</p>
            <Button background={'rgb(255,117,85)'} borderRadius={'20px'} color={'white'}>Register for free</Button>
        </Box>
      </Box>
      
            <Heading as='h4' textAlign={'center'} paddingTop={'20px'}>Jobs you may be interested in</Heading>
       

       <Box display={'flex'} margin={'auto'} 
       width={'50%'}
        p={'1%'}
      className={styles.jobsButton}
       >
        <Button>Full Stack Developer(308)</Button>
        <Button> Front End Developer(55)</Button>
        <Button>Back End Developer(89)</Button>
       </Box>
     <Slider/>
    </Box>
  );
};
