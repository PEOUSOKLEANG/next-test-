'use client'
// import NonAuthLayoutWrapper from "@/app/Auth/components/NonAuthLayoutWrapper";

import { Link } from "react-router-dom";
import { Container, Row, Col } from "reactstrap";
import Sidebar from "./components/Sidebar";
interface NonAuth{
    children:React.ReactNode ;
}
// import Login from "./components/Login";

export default function Page(props:NonAuth){
    return (
        <>
            {/* <div className="flex min-h-screen flex-col items-center justify-between p-24">
                
                <Container fluid className="p-0">
                    <Row className="g-0">
                        <Col xl={3} lg={4}></Col>
                        hello
                    </Row>
                </Container>
                
               
            </div> */}
            
            <Sidebar/>

        </>
    //     <>
    //     <div className="auth-bg">
    //       <Container fluid className="p-0">
    //         <Row className=" g-0">
    //           <Col xl={3} lg={4}>
    //             <div className="p-4 pb-0 p-lg-5 pb-lg-0 auth-logo-section">
    //               <div className="text-white-50">
    //                 <h3>
    //                   <Link to="/" className="text-white">
    //                     <i className="bx bxs-message-alt-detail align-middle text-white h3 mb-1 me-2"></i>{" "}
    //                     Doot
    //                   </Link>
    //                 </h3>
    //                 <p className="font-size-16">
    //                   Responsive Bootstrap 5 Chat App
    //                 </p>
    //               </div>
    //               <div className="mt-auto">
    //                   h
    //                 {/* <img src={authImage} alt="auth" className="auth-img" /> */}
    //               </div>
    //             </div>
    //           </Col>
  
    //           <Col xl={9} lg={8}>
    //             <div className="authentication-page-content">
    //               <div className="d-flex flex-column h-100 px-4 pt-4">
    //                 {props.children}
  
    //                 <Row className="">
    //                   <Col xl={12}>
    //                     <div className="text-center text-muted p-4">
    //                       <p className="mb-0">
    //                         &copy; {new Date().getFullYear()} Doot. Crafted with{" "}
    //                         <i className="mdi mdi-heart text-danger"></i> by
    //                         Themesbrand
    //                       </p>
    //                     </div>
    //                   </Col>
    //                 </Row>
    //               </div>
    //             </div>
    //           </Col>
    //         </Row>
    //       </Container>
    //     </div>
    //   </>
    )
}