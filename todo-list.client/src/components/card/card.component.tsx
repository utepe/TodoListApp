import axios from "axios";
import React from "react";
import Checkbox from "@material-ui/core/Checkbox";
import SimpleMenu from "../simple-menu/simple-menu.component";

import './card.styles.css'

export const Card = ({ onRemove, ...item }: ICardProps) => {
    // FIXME: Fix this the CORS issue
    // async function updateCard() {
    //     try {
    //         const updatedCard = {
    //             id: item.id,
    //             title: item.title,
    //             description: item.description,
    //             isCompleted: !item.isCompleted,
    //             updated: Date.now().toString(),
    //         };
    //         const res = await axios({
    //             method: "PUT",
    //             url: `https://localhost:44392/api/TodoItem/${item.id}`,
    //             data: updatedCard,
    //             headers: {
    //                 "Content-Type": "application/json",
    //             },
    //         });
    //         console.log(res);
    //     } catch (error) {
    //         console.error(error);
    //     }
    // }

    return (
        <div className="card-container">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>
                Completed:
                <Checkbox
                    color="default"
                    inputProps={{ "aria-label": "checkbox with default color" }}
                    onClick={() => {
                        onRemove(item.id);
                        // FIXME: this update method
                        // updateCard();
                    }}
                />
            </p>
            <SimpleMenu />
        </div>
    );
};

interface ICardProps {
    id: string;
    title: string;
    description: string;
    isCompleted: boolean;
    updated: string;
    onRemove: any;
}

export default Card;
