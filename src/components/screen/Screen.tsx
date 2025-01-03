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

interface ITypography {
    title: string;
    description: string;
    buttonLabel: string;
}

const mainClass = "screen";

export const Screen = ({currentLevel, startLevel, levels}: IScreenProps) => {

    const typography: ITypography = useMemo(() => {
        const res = {
            buttonLabel: "",
            description: "",
            title: ""
        } as ITypography;

        const props = (currentLevel === LEVEL_POINTS.START) ? "START" : "CURRENT";
        res.buttonLabel = DICTIONARY.PAGES.SCREENS[props].BUTTON;
        res.description = DICTIONARY.PAGES.SCREENS[props].DESCRIPTION;
        res.title = DICTIONARY.PAGES.SCREENS[props].TITLE;

        return res;
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
            {typography.title && (
                <Title tag="h1" upper position="center">
                    {typography.title}
                </Title>
            )}
            {typography.description && (
                <Content invert>
                    {typography.description}
                </Content>
            )}
            {typography.buttonLabel && (
                <Button onClick={handleButtonClick}>
                    {typography.buttonLabel}
                </Button>
            )}
        </div>
    )
}
