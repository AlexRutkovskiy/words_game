import React from 'react';
import './errorPage.scss';

interface Props {
    children: React.ReactNode;
}

interface State {
    hasError: boolean;
}

const mainClass = 'error-page';

export class ErrorPage extends React.Component<Props, State> {

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
                        Something went wrong.
                    </h1>
                </div>
            )
        }

        return this.props.children;
    }
}
