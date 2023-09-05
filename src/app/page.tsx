// import Image from 'next/image'

// export default function Home() {
//   return (
//     <main className="flex min-h-screen flex-col items-center justify-between p-24">
//      Home page
//     </main>
//   )
// }
'use client'

import Sidebar from "./Auth/components/Sidebar";

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
    )
}
