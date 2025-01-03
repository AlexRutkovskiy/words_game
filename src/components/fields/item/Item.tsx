import clsx from 'clsx';
import './item.scss';

interface IItemProps {
    value: string;
    open: boolean;
    small: boolean;
}

const mainClass = 'item';

export const Item = ({ value, open, small }: IItemProps) => {
    return (
        <div 
            className={clsx(mainClass, small && `${mainClass}--small`, open && `${mainClass}--open`)}
        >
            <span className={`${mainClass}_letter`}>
                {open ? value : ''}
            </span>
        </div>
    )
}
