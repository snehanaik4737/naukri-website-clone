import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate, useParams } from "react-router-dom";
import { getJobById } from "../Redux/JobDescription/action";
import { Navbar2 } from "./Navbar2";
import { SideBarItem } from "./SideBarItem";
import styles from "./SearchDetails.module.css";
import {
  BsFillGeoAltFill,
  BsFillBagFill,
  BsFillWalletFill,
} from "react-icons/bs";
import { Box, Button } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { StarIcon } from "@chakra-ui/icons";
import { Footer } from "./Footer";
export const SearchDetails = () => {
  const details = useSelector((store) => store.jobDetails.jobs);
  console.log("details", details);

  const navigate=useNavigate()

  const { id } = useParams();

  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(getJobById(id));
  }, [dispatch, id]);

  const handleApply = () => {
    alert("Applied successfully");
   navigate("/home",{replace:true})
  };

  return (
    <>
      <Navbar2 />
      <div className={styles.background}>
        <p
          style={{
            color: "grey",
            position: "relative",
            marginLeft: 80,
            padding: 20,
          }}
        >
          <Link to="/home">Home</Link>
          {`>${details.location}`}
        </p>
      </div>
      <Box display={"flex"} w={"100%"}>
        <Box w={"60%"} marginBottom={"2%"}>
          <div style={{ display: "flex" }}>
            <div className={styles.box1}>
              <div className={styles.container}>
                <h3 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                  {details.companyName}
                </h3>
                <div className={styles.container1}>
                  <p> {details.skill}</p>
                  <p>{details.rating}</p>
                  <img
                    style={{ marginLeft: -12 }}
                    src="https://img.icons8.com/emoji/20/000000/star-emoji.png"
                    alt="star"
                  />
                  <p>{`(${details.reviews} Reviews)`}</p>
                </div>
                <div style={{ marginTop: 10 }}>
                  <Box display={"flex"}>
                    <Box>
                      <BsFillBagFill />
                    </Box>
                    <Box>{`0-${details.experience} years`}</Box>
                  </Box>
                </div>
                <div className={styles.container3}>
                  <Box display={"flex"}>
                    <Box>
                      <BsFillWalletFill />
                    </Box>
                    <Box>{`₹${details.salary} P.A.`}</Box>
                  </Box>

                  <Box display={"flex"}>
                    <Box>
                      <BsFillGeoAltFill />
                    </Box>
                    <Box>{details.location}</Box>
                  </Box>
                  <Button
                    style={{
                      padding: "3%",
                      marginLeft: "25%",
                      color: "white",
                      background: "blue",
                    }}
                    onClick={handleApply}
                  >
                    Apply
                  </Button>
                </div>
                <div className={styles.line}></div>
                <div className={styles.container4}>
                  <div>
                    <p>
                      Posted:{" "}
                      {Number(`${details.date}`) > 1
                        ? `${details.date} days ago`
                        : `${details.date} day ago`}
                    </p>
                  </div>
                  <div>
                    <p>Openings:{}</p>
                  </div>
                  <div>
                    <p>Job Applicants:{}</p>
                  </div>
                </div>
              </div>
            </div>
          </div>
          <div style={{ marginTop: 26 }} className={styles.container5}>
            <h3>Job description</h3>
            <h4 style={{ marginTop: 8 }}>Roles and Responsibilities</h4>
            <ul
              style={{
                marginLeft: 30,
                fontSize: 14,
                marginTop: 27,
                lineHeight: 1.5,
              }}
            >
              <li>Hands on Experience in ADA Compliance - Must</li>
              <li>writing Copy decks, technical documents, including SOPs, </li>
              <li>
                User manuals for developed software, API documentations, Mobile
                Application Documentations,
              </li>
              <li>
                ITIL Documentations, Release notes, Research papers, White
                papers,{" "}
              </li>
              <li>
                Knowledge Management documentations & Social media,
                Presentations, Blogs and Web content.,{" "}
              </li>
              <li>
                Ensure brand creation and consistency across all content and
                communication,{" "}
              </li>
              <li>
                Strong communication skills for interacting with all the levels
                of Project organization.{" "}
              </li>
              <li>Ability to work as individual contributor,</li>
              <li>
                Ability to write in a variety of styles and formats for multiple
                audiences and for a variety of media including social, print,
                video, and online
              </li>
            </ul>
            <div className={styles.roles}>
              <SideBarItem label="IT/Technical Content Developer">
                <div style={{ marginRight: 80 }}>Role:</div>
              </SideBarItem>
              <SideBarItem label="IT-Software, Software Services">
                <div style={{ marginRight: 15 }}>Industry Type:</div>
              </SideBarItem>
              <SideBarItem label="IT Software - Application Programming, Maintenance">
                Functional Area:
              </SideBarItem>
              <SideBarItem label="Full Time, Permanent">
                Employment Type:
              </SideBarItem>
              <SideBarItem label="Other">Role Category:</SideBarItem>
            </div>
            <h4 style={{ marginTop: 20 }}>Key Skills</h4>
            <div className={styles.skills}>
              {details.techStack?.map((item) => {
                return (
                  <>
                    <div className={styles.content}>{item}</div>
                  </>
                );
              })}
            </div>
            <div className={styles.line}></div>
          </div>
        </Box>

        <Box w={"35%"} marginLeft={"4%"}>
          <Box
            margin={"auto"}
            w={"100%"}
            boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            border={"1px solid black"}
            marginTop={"4%"}
          >
            <Box p={"5%"} borderBottom={"1px solid black"}>
              <h4 style={{ fontSize: "1.2rem", fontWeight: "bold" }}>
                Jobs you might be interested in
              </h4>
              <h3>Front-End Developer</h3>
              <Box display={"flex"}>
                <p>Moshi Moshi</p>
                <p>3.6</p>
                <StarIcon marginTop={"1%"} color={"orange"} />
              </Box>
              <Box display={"flex"} marginTop={"2%"} marginBottom={"2%"}>
                <BsFillGeoAltFill />
                <p>Bangalore/Bengaluru</p>
              </Box>
            </Box>

            <Box p={"5%"} borderBottom={"1px solid black"}>
              <h4>Senior React.js Developer | Lead Frontend Developer</h4>
              <h3>4bell Technology</h3>
              <Box display={"flex"} marginTop={"2%"} marginBottom={"2%"}>
                <BsFillGeoAltFill />
                <p>Mumbai</p>
              </Box>
            </Box>
            <Box p={"5%"}>
              <h4>Tracxn - SDE II - Front End - React.js (1-5 yrs)</h4>

              <Box display={"flex"} marginTop={"2%"} marginBottom={"2%"}>
                <p>Tracxn</p>
                <p>3.0</p>
                <StarIcon marginTop={"1%"} color={"orange"} />
              </Box>
              <Box display={"flex"}>
                <BsFillGeoAltFill />
                <p>Bangalore/Bengaluru</p>
              </Box>
            </Box>
          </Box>

          <Box
            margin={"auto"}
            w={"100%"}
            boxShadow={" rgba(0, 0, 0, 0.24) 0px 3px 8px"}
            border={"1px solid black"}
            marginTop={"4%"}
          >
            <Box p={"4%"} borderBottom={"1px solid black"}>
              <h4
                style={{
                  fontSize: "1.2rem",
                  fontWeight: "bold",
                  marginBottom: "3%",
                }}
              >
                Suggested Courses for you
              </h4>
              <p style={{ marginBottom: "5%" }}>
                Professionals like you are taking up these certifications.
                Enroll Now
              </p>
              <h3
                style={{
                  fontSize: "1rem",
                  fontWeight: "bold",
                  marginBottom: "3%",
                }}
              >
                E&ICT Academy IIT Roorkee - Advanced Certificate Program in Full
                Stack Software Development
              </h3>
              <p style={{ marginBottom: "5%" }}>
                Become proficient in building end-to-end web applications
                handling all the areas of the tech-stack
              </p>
            </Box>
            <Box p={"4%"}>
              <h4 style={{ fontSize: "1rem", fontWeight: "bold" }}>
                Master's Certification Program in Full Stack Web Development
              </h4>
              <p>
                The Master's Certification Program in Full Stack Web Development
                is a 8-month long Job-Leading Program for Computer Science
                students.
              </p>
            </Box>
          </Box>
        </Box>
      </Box>

      <Footer />
    </>
  );
};
