import { Title } from "@components/title";
import { Content } from "@components/content";
import { Button } from "@components/button";

import { LEVEL_POINTS } from "@shared/consts/level";
import { DICTIONARY } from "@shared/consts/dictionary";

import "./screen.scss";
import { useCallback, useMemo } from "react";
import { getNextLevelNumber } from "@shared/utils/getNextLevelNumber";
import { IMapLevels } from "@shared/types/level";

interface IScreenProps {
    currentLevel: string;
    levels: IMapLevels;
    startLevel: (nextLevel: string) => void;
}

const mainClass = "screen";

export const Screen = ({currentLevel, startLevel, levels}: IScreenProps) => {

    const buttonLabel = useMemo(() => {
        if (currentLevel === LEVEL_POINTS.START) {
            return DICTIONARY.PAGES.SCREENS.START.BUTTON;
        }

        return DICTIONARY.PAGES.SCREENS.CURRENT.BUTTON;
    }, [currentLevel])
    
    const handleButtonClick = useCallback(() => {
        const nextLevel = getNextLevelNumber(currentLevel, levels);
        if (nextLevel === LEVEL_POINTS.ERROR) {
            throw new Error('')
        }

        startLevel(nextLevel);
    }, [currentLevel, startLevel, levels])

    if (currentLevel === LEVEL_POINTS.FINISH) {
        return (
            <div className={`${mainClass}__finish`}>
                <Title tag="h1" upper position="center">
                    {DICTIONARY.PAGES.SCREENS.FINISH.TITLE}
                </Title>
                <Content invert>
                    {DICTIONARY.PAGES.SCREENS.FINISH.DESCRIPTION}
                </Content>
            </div>
        )
    }

    return (
        <div className={mainClass}>
            <Title tag="h1" upper position="center">
                {DICTIONARY.PAGES.SCREENS.START.TITLE}
            </Title>
            <Content invert>
                {DICTIONARY.PAGES.SCREENS.START.DESCRIPTION}
            </Content>
            <Button onClick={handleButtonClick}>
                {buttonLabel}
            </Button>
        </div>
    )
}
