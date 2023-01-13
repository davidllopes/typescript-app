import { useEffect, useState } from "react";

const Header = () => {
    const [isLogged, setIsLogged] = useState(false);
    useEffect(() => {
        setIsLogged(true);

        return () => {
            setIsLogged(false);
        };
    }, [isLogged]);

    if (isLogged) {
        console.log("do it");
    }
};

export default Header;
