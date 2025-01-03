import { Screen } from "@components/screen";
import { Title } from "@components/title";
import { DICTIONARY } from "@shared/consts/dictionary";

import { LEVEL_POINTS } from '@shared/consts/level';
import { useLevels } from "@shared/hooks/useLevels";
import { useManage } from '@shared/hooks/useManage';

import "./game.scss";

const mainClass = 'game';
const screens = [LEVEL_POINTS.START, LEVEL_POINTS.FINISH];

export const Game = () => {
    const { currentLevel, finished, startLevel } = useManage();
    const { levels } = useLevels();
    
    if (screens.includes(currentLevel) || finished) {
        return (
            <Screen 
                currentLevel={currentLevel}
                startLevel={startLevel}
                levels={levels}
            />
        )
    }

    return (
        <div className={mainClass}>
            <Title tag="h3" position="center">
                {`${DICTIONARY.PAGES.LEVEL.TITLE} ${currentLevel}`}
            </Title>
        </div>
    )
}
