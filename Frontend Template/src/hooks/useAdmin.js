import React, { useState } from "react";

const useAdmin = () => {
  const [admin, setAdmin] = useState(true);
  
  return [admin];
};

export default useAdmin;
