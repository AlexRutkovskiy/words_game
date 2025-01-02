import clsx from "clsx";
import "./content.scss";

interface IContentProps {
    children: React.ReactNode;
    invert?: boolean;
}

const mainClass = "content";

export const Content = ({ children, invert }: IContentProps) => {
    return (
        <p className={clsx(mainClass, invert && `${mainClass}--invert`)}>
            {children}
        </p>
    )
}
