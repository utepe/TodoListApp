import React from "react";
import TextField from "@material-ui/core/TextField"
import "./search-box.styles.css";

interface ISearchBoxProps {
    placeHolder: string;
    handleChange: any
}

export const SearchBox = ({ placeHolder, handleChange }: ISearchBoxProps) => {
    return (
        <TextField className="search" id="standard-basic" label={placeHolder} variant="standard" onChange={handleChange} />
    );
};
