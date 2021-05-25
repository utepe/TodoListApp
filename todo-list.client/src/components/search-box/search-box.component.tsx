import React from "react";

import "./search-box.styles.css";

interface ISearchBoxProps {
    placeHolder: string;
    handleChange: any
}

export const SearchBox = ({ placeHolder, handleChange }: ISearchBoxProps) => {
    return (
        <input
            className="search"
            type="search"
            placeholder={placeHolder}
            onChange={handleChange}
        />
    );
};
