import {isMobile, useMobileOrientation} from 'react-device-detect';

interface BrowserDetectProps {
    children: React.ReactNode;
    fallback:React.ReactNode;
}

export const BrowserDetect = ({ children, fallback }: BrowserDetectProps) => {
    const { isLandscape } = useMobileOrientation();

    if (isMobile && isLandscape) {
        return fallback;
    }

    return children;
}
