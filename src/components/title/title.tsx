import { ReactNode } from "react";
import clsx from "clsx";
import "./title.scss";

type Tag = 'h1' | 'h2' | 'h3' | 'h4' | 'h5' | 'h6';
type Position = 'left' | 'center' | 'right';

interface ITitleProps {
    tag: Tag;
    children: ReactNode;
    invert?: boolean;
    position?: Position;
    upper?: boolean;
}

const mainClass = 'title';

export const Title = ({ 
    tag = 'h1', 
    children,
    invert,
    upper,
    position = 'left'
}: ITitleProps) => {
    const Component = tag;
    return (
        <Component 
            className={
                clsx(mainClass, `${mainClass}--${tag}`, 
                    invert && `${mainClass}--invert`, 
                    upper && `${mainClass}--upper`,
                    `${mainClass}--${position}`,
                )
            }
        >
            {children}
        </Component>
    )
}
