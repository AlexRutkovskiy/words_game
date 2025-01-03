import { ILevels, ILevel } from "@shared/types/level";

export async function loadLevels(): Promise<ILevels> {
    const res = {} as ILevels;

    try {
        const data = import.meta.glob('@shared/assets/dictionary/*.json');
        let index = 1;

        for (const p in data) {
            const value = await data[p]();
            res[index] = {words: (value as ILevel).words};
            index++;
        }
    } catch(e) {
        console.log(e)
    }

    return res;
}
