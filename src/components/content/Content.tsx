import "./content.scss";

interface IContentProps {
    children: React.ReactNode;
}

const mainClass = "content";

export const Content = ({ children }: IContentProps) => {
    return (
        <p className={mainClass}>
            {children}
        </p>
    )
}
