import {FC} from "react";


type HTMLRendererProps = {
    html: string;
};


export const HTMLRenderer: FC<HTMLRendererProps> = ({ html}) => {
    const createMarkup = () => {
        return { __html: html };
    };

    return <div dangerouslySetInnerHTML={createMarkup()} />;
};