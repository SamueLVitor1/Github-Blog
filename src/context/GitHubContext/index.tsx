import { ReactNode, createContext, useState } from "react";


// vou tipar as coisas que vou enviar do contexto
interface GitHContextType {
  handleSetNamePublication:(text: string) => void,
  namePublication: string,
  handleSetNumberQuantityPublications: (number: number) => void,
  numberQuantityPublications: number
}

interface GitHContextProviderProps {
  children: ReactNode;
}

// criando context  
export const GitHContext = createContext({} as GitHContextType);

export function GitHContextProvider({ children }: GitHContextProviderProps) {
  const [namePublication, setNamePublication] = useState("")

  const [numberQuantityPublications, setNumberQuantityPublications] = useState(0)

  function handleSetNamePublication(text: string){
    setNamePublication(text)
  }

  function handleSetNumberQuantityPublications(number: number){
    setNumberQuantityPublications(number)
  }

  
  return (
    <GitHContext.Provider
      value={{
        handleSetNamePublication,
        namePublication,
        handleSetNumberQuantityPublications,
        numberQuantityPublications
      }}
    >
      {children}
    </GitHContext.Provider>
  );
}