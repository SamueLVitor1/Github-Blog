import { ReactNode, createContext, useState } from "react";


// vou tipar as coisas que vou enviar do contexto
interface GitHContextType {
  handleSetNamePublication:(text: string) => void,
  namePublication: string
}

interface GitHContextProviderProps {
  children: ReactNode;
}

// criando context  
export const GitHContext = createContext({} as GitHContextType);

export function GitHContextProvider({ children }: GitHContextProviderProps) {
  const [namePublication, setNamePublication] = useState("")

  function handleSetNamePublication(text: string){
    setNamePublication(text)
  }

  
  return (
    <GitHContext.Provider
      value={{
        handleSetNamePublication,
        namePublication
      }}
    >
      {children}
    </GitHContext.Provider>
  );
}