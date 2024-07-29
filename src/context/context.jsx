import { createContext } from "react";

const ReleaseContext = createContext()

const ReleaseProvider = ({children}) => {
  const filter = []

  return(
    <ReleaseContext.Provider value={filter}>
      {children}
    </ReleaseContext.Provider>
  )
}

export {ReleaseContext, ReleaseProvider}

