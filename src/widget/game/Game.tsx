import { useLevels } from "@shared/hooks/useLevels"
import { useManage } from "@shared/hooks/useManage";

export const Game = () => {
    const { levels } = useLevels();
    const { data, addGuessedWord } = useManage();

    return (
        <div>

        </div>
    )
}
