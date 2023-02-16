import { HTMLAttributes, useEffect, useState } from "react";

interface HeaderProps extends HTMLAttributes<HTMLElement> {
    titleStr: string | string[];
}

export const Header = ({ className, titleStr }: HeaderProps) => {
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
    return <div>{titleStr}</div>;
};
