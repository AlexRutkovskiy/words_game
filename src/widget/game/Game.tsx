import { useLevels } from "@shared/hooks/useLevels"
import { useManage } from "@shared/hooks/useManage";

import { FieldList } from '@components/fields';

export const Game = () => {
    const { levels } = useLevels();
    const { data } = useManage();

    return (
        <div>
            <FieldList 
                level={levels[data.currentLevel]}
                guessedWords={data.guessedWords}
            />
            
        </div>
    )
}
