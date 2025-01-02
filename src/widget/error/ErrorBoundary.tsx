import React from 'react';
import './errorBoundary.scss';

import { DICTIONARY } from '@shared/consts/dictionary'

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

const mainClass = 'error-page';

export class ErrorBoundary extends React.Component<Props, State> {

    constructor(props: Props) {
        super(props);
        this.state = {
            hasError: false
        }
    }

    componentDidCatch(error: Error, errorInfo: React.ErrorInfo): void {
        console.error('ErrorBoundary caught an error: ', error, errorInfo);
        this.setState({ hasError: true });
    }

    render() {
        if (this.state.hasError) {
            return (
                <div className={mainClass}>
                    <h1 className={`${mainClass}__title`}>
                        {DICTIONARY.PAGES.ERROR_PAGE.TITLE}
                    </h1>
                </div>
            )
        }

        return this.props.children;
    }
}
