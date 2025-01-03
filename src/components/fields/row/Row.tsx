import { memo } from 'react';

import { Item } from '../item'
import './row.scss';

interface IRowProps {
    word: string;
    isGuessed: boolean;
    isSmall?: boolean;
}

const mainClass = 'row';

export const Row = memo(({word, isGuessed, isSmall = false}: IRowProps) => {
    const letters = word.split('');

    return (
        <div className={mainClass}>
            {letters.map((l, index) => {
                return (
                    <Item 
                        value={l} 
                        open={isGuessed}
                        small={isSmall}
                        key={`${l}_${index}`} 
                    />
                )
            })}
        </div>
    )
})
