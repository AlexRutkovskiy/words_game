import { ButtonHTMLAttributes, ReactNode } from "react";
import "./button.scss";

interface IButtonProps extends ButtonHTMLAttributes<HTMLButtonElement> {
    children: ReactNode
}

const mainClass = "button";

export const Button = ({children, ...props}: IButtonProps) => {
    return (
        <button {...props} className={mainClass}>
            {children}
        </button>
    )
}
