import PropTypes from 'prop-types';
import React from 'react';
interface IPropsType {
    children: JSX.Element;
    url: string;
    responseType?: string;
    headers: {
        [key: string]: string;
    };
    fileName: string;
    fileMIMEType: string;
}
declare class RcDownload extends React.Component<IPropsType> {
    static propTypes: {
        children: PropTypes.Requireable<any>;
        url: PropTypes.Requireable<string>;
        responseType: PropTypes.Requireable<string>;
        headers: PropTypes.Requireable<object>;
        fileName: PropTypes.Requireable<string>;
        fileMIMEType: PropTypes.Requireable<string>;
    };
    static defaultProps: {
        responseType: string;
        headers: {};
        fileMIMEType: string;
    };
    _fireOriginalClick: (e: MouseEvent) => void;
    _onClick: (e: MouseEvent) => void;
    render(): React.FunctionComponentElement<any>;
}
export default RcDownload;
