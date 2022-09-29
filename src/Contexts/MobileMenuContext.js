import { createContext,useState } from "react"; 

const MobileMenuContext = createContext(null);


 function MobileMenuContextProvider({ children }) {
    
    const [menuBtn, setMenuBtn] = useState(false);


    return (
        <MobileMenuContext.Provider value={[menuBtn, setMenuBtn]}>
            {children}

        </MobileMenuContext.Provider>
    )
}



export default MobileMenuContext;
export { MobileMenuContextProvider };
