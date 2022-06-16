import { Image, Box, Button, Heading} from "@chakra-ui/react";
import { CheckCircleIcon } from "@chakra-ui/icons";
import React, { useState } from "react";
import "./Register.css";
import { Link } from "react-router-dom";
export const Register1 = () => {
  const [firstName, setFirstName] = useState("");
  // const [lastName,setLastName] =useState("");
  const [email, setEmail] = useState("");
  const [phoneNo, setPhoneNo] = useState("");
  const [password, setPassword] = useState("");

  return (
    <Box>
      <Box
        width={"100%"}
        height={"50px"}
        boxShadow={"rgba(149, 157, 165, 0.2) 0px 8px 24px"}
      >
        <Link to="/">
          <Image
            src="https://static.naukimg.com/s/4/100/i/naukri_Logo.png"
            padding={3}
          ></Image>
        </Link>
      </Box>
      <Box display={"flex"} w={"100%"}>
        <Box w={"30%"} marginTop={'15%'} p={"5%"}>
            <Image
            h={"30%"}
            w={'70%'}
            src={"https://static.naukimg.com/s/7/104/assets/images/green-boy.c8b59289.svg"}></Image>

            <h3>On registering, you can</h3>
            <Box display={'flex'} marginTop={'5%'}>

            <CheckCircleIcon style={{marginRight:"5%"}}/>
            <p>Build your profile and let recruiters find you</p>
            </Box>
           
<Box display={'flex'}>

            <CheckCircleIcon style={{marginRight:"5%"}}/>
            <p>Get job postings delivered right to your email</p>
</Box>
            <br></br>

            <CheckCircleIcon/>
        </Box>
        <Box w={"70%"} marginTop={"5%"}>
          <Heading as="h4" fontSize={"36px"} marginBottom={"5%"}>
            Find a job & grow your career
          </Heading>

          <form
            className="form"
            encType="multipart/form-data"

            //   onSubmit={formSubmit}
          >
            <div style={{ marginBottom: "2%" }}>
              <h3
              // style={{fontSize:"20px"}}
              >
                *Full Name :
              </h3>

              <input
                type="text"
                className="inputs"
                placeholder="What is your name?"
                required
                value={firstName}
                onChange={(e) => setFirstName(e.target.value)}
              />
            </div>

            {/* <div>
                <h3 >*Last Name :</h3>
                 <input type="text"
                 placeholder='Last Name'
                 required
                 value={lastName}
                 onChange={(e)=>setLastName(e.target.value)}

                 />
              </div> */}

            <div style={{ marginBottom: "2%" }}>
              <h3>*Email Id :</h3>

              <input
                type="text"
                className="inputs"
                placeholder="Tell us your Email Id"
                required
                value={email}
                onChange={(e) => setEmail(e.target.value)}
              />
            </div>
            <div style={{ marginBottom: "2%" }}>
              <h3>*Password :</h3>
              <input
                type="text"
                className="inputs"
                placeholder="Create a password for your account"
                required
                value={password}
                onChange={(e) => setPassword(e.target.value)}
              />
            </div>

            <div style={{ marginBottom: "2%" }}>
              <h3>*Phone No :</h3>
              <input
                type="number"
                placeholder="Phone Number"
                className="inputs"
                required
                value={phoneNo}
                onChange={(e) => setPhoneNo(e.target.value)}
                size="10"
              />
            </div>

            <h3>Work Status</h3>
            <div style={{ display: "flex", marginBottom: "2%" }}>
              <div
                style={{
                  width: "35%",
                  border: "1px solid gray",
                  height: "100px",
                  marginRight: "2%",
                  borderRadius: "15px",
                  padding: "1%",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                  hover:
                    "box-shadow: rgba(0, 0, 0, 0.25) 0px 54px 55px, rgba(0, 0, 0, 0.12) 0px -12px 30px, rgba(0, 0, 0, 0.12) 0px 4px 6px, rgba(0, 0, 0, 0.17) 0px 12px 13px, rgba(0, 0, 0, 0.09) 0px -3px 5px",
                }}
              >
                <h4 style={{ color: "blue" }}>I'm Experienced</h4>
                <p>I have work experience (excluding internships)</p>
              </div>
              <div
                style={{
                  width: "35%",
                  border: "1px solid gray",
                  height: "100px",
                  borderRadius: "15px",
                  padding: "1%",
                  boxShadow: "rgba(149, 157, 165, 0.2) 0px 8px 24px",
                }}
              >
                <h4 style={{ color: "blue" }}>I'm a Fresher</h4>
                <p>I am a student/ Haven't worked after graduation</p>
              </div>
            </div>
            {/* <h3>Resume</h3> */}

            <p>
              By clicking Register, you agree to the Terms and Conditions &
              Privacy Policy of Naukri.com
            </p>

            <input type="submit" value="Register" className="Btn"></input>
          </form>
        </Box>
      </Box>
    </Box>
  );
};
