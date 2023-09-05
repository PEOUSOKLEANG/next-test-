import React from "react";

interface AuthHeaderProps {
  title: string;
  subtitle?: string;
}
const AuthHeader = ({ title, subtitle }: AuthHeaderProps) => {
  return (
    // div title that pass to to the front get from from log in file 
    // tilte and subtitle when after switch from log in to register  
    <div className="text-center mb-5">
      <h3>{title}</h3>
      {subtitle && <p className="text-muted">{subtitle}</p>}

      {/* Check true or false  */}
      {/* {subtitle ? <p className="text-muted">{subtitle}</p> : undefined} */}
      {/* false condition*/}
      {/* {subtitle ?? <p className="text-muted">{subtitle}</p> } */} 

      
    </div>
  );
};

export default AuthHeader;
