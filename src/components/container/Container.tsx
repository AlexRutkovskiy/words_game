import './container.scss';

const className = 'container'

interface IContainer {
    children: React.ReactNode;
}

export const Container = ({ children }: IContainer) => {
    return (
        <div className={className}>
            <div className={`${className}__wrapper`}>
                <div className={`${className}__content`}>
                    {children}
                </div>
            </div>
        </div>
    )
}