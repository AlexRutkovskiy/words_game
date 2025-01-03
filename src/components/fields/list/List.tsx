import { Row } from '../row';
import './list.scss';

interface IList {
    level: string[];
    guessedWords: string[];
}

const mainClass = 'list';

export const List = ({ level, guessedWords }: IList) => {
    return (
        <div role="list" className={mainClass}>
            {level.map((word) => {
                return (
                    <Row 
                        key={word}
                        word={word}
                        isGuessed={guessedWords.includes(word)}
                    />
                )
            })}
        </div>
    )
}
