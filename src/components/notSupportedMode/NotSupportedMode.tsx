import { Title } from "@components/title";
import { Content } from "@components/content";
import { DICTIONARY } from "@shared/consts/dictionary";

import "./notSupportedMode.scss";

const mainClass = "not-supported-mode";

export const NotSuportedMode = () => {
    return (
        <div className={mainClass}>
            <Title tag="h3" position="center" invert upper>
                {DICTIONARY.PAGES.NOT_SUPPORTED_MODE.TITLE}
            </Title>
            <div className={`${mainClass}__image-wrapper`}>
                <div className={`${mainClass}__image`}></div>
            </div>
            <Content>
                {DICTIONARY.PAGES.NOT_SUPPORTED_MODE.DESCRIPTION}
            </Content>
        </div>
    )
}
