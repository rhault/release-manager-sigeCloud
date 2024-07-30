import { createContext, useEffect } from "react";
import { useState } from "react";

const ReleaseContext = createContext()

const ReleaseProvider = ({children}) => {
  const [filterReleaseData, setFilterReleaseData] = useState({})

  return(
    <ReleaseContext.Provider value={{filterReleaseData, setFilterReleaseData}}>
      {children}
    </ReleaseContext.Provider>
  )
}

export {ReleaseContext, ReleaseProvider}

