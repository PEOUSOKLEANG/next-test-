'use client'

import { Alert, Button, Col, Form, Label, Row } from "reactstrap";
import NonAuthLayoutWrapper from "./components/NonAuthLayoutWrapper";
import Link from "next/link";
import AuthHeader from "./components/AuthHeader";
import FormInput from "./components/FromInput";
// validation 
import { useForm } from "react-hook-form";
import { yupResolver } from "@hookform/resolvers/yup";
import * as yup from "yup";


interface NonAuth{
    children:React.ReactNode ;
}
// import Login from "./components/Login";


// const methods = useForm({defaultValues});


export default function Page(props:NonAuth){
    return (
        <>
            <NonAuthLayoutWrapper>
            <Row className=" justify-content-center my-auto">
        <Col sm={8} lg={6} xl={5} className="col-xxl-4">
          <div className="py-md-5 py-4">
            <AuthHeader
            // here this line to when login
              title="Welcome Back !"
              subtitle="Sign in to continue to Doot."
            />

          

            <Form
            //   onSubmit={handleSubmit(onSubmitForm)}
            //   className="position-relative"
            >
              {/* {loginLoading && <Loader />} */}
              {/* login input  */}
              <div className="mb-3">
                <FormInput
                  label="Username"
                  type="text"
                  name="email"
                  labelClassName="form-label"
                  placeholder="Enter username"
                  className="form-control"
                />
              </div>

              <div className="mb-3">
                <FormInput
                  label="Password"
                  type="password"
                  name="password"
                  labelClassName="form-label"
                  className="form-control pe-5"
                  placeholder="Enter Password"
                />
              </div>
              {/* check box */}
              <div className="form-check form-check-info font-size-16">
                <input
                  className="form-check-input"
                  type="checkbox"
                  id="remember-check"
                />
                <Label
                  className="form-check-label font-size-14"
                  htmlFor="remember-check"
                >
                  Remember me
                </Label>
              </div>

              <div className="text-center mt-4">
                <Button color="primary" className="w-100" type="submit">
                  Log In
                </Button>
              </div>

              <div className="mt-4 text-center">
                <div className="signin-other-title">
                  {/* this line we dont need */}
                  <h5 className="font-size-14 mb-4 title">Sign in with</h5>
                </div>
               
              </div>
            </Form>
              {/* switch to register   */}
            <div className="mt-5 text-center text-muted">
              <p>
                Don't have an account ?{" "}
                <Link
                  href="/auth-register"
                  className="fw-medium text-decoration-underline"
                >
                  {" "}
                  Register
                </Link>
              </p>
            </div>
          </div>
        </Col>
      </Row>

            </NonAuthLayoutWrapper >
            
           

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

function dispatch(arg0: any) {
    throw new Error("Function not implemented.");
}


function loginUser(values: object): any {
    throw new Error("Function not implemented.");
}
