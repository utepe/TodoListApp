import axios from "axios";
import React from "react";

export const Card = ({ onRemove, ...item }: ICardProps) => {
    async function updateCard() {
        try {
            const updatedCard = {
                id: item.id,
                title: item.title,
                description: item.description,
                isCompleted: !item.isCompleted,
                updated: Date.now().toString(),
            };
            // FIXME: Fix this the CORS issue
            const res = await axios({
                method: "PUT",
                url: `https://localhost:44392/api/TodoItem/${item.id}`,
                data: updatedCard,
                headers: {
                    "Content-Type": "application/json",
                },
            });
            console.log(res);
        } catch (error) {
            console.error(error);
        }
    }

    return (
        <div className="card-container">
            <h4>{item.title}</h4>
            <p>{item.description}</p>
            <p>
                Completed:
                <input
                    type="checkbox"
                    onClick={() => {
                        onRemove(item.id);
                        updateCard();
                    }}
                />
            </p>
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

// interface ICardState {
//     title: string;
//     description: string;
//     isCompleted: boolean;
// }

export default Card;

//  Card  {
//     return <div className="card-container">
//         <h4>{props.title}</h4>
//         <p>{props.description}</p>
//         <p>Completed:
//             <input type="checkbox" name="" id="" />
//         </p>
//     </div>;
// };
