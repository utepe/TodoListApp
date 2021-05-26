import React from "react";

import { TodoItem } from "../../models/todo-item.interface";
import Card from "../card/card.component";

import './card-list.styles.css'

interface ICardListProps {
    items: TodoItem[];
    onRemove: any;
}

export const CardList = ({ items, onRemove }: ICardListProps, ) => {
    return (
        <div className="card-list">
            {items.map(({ ...item }: TodoItem) => (
                <Card key={item.id} {...item} onRemove={onRemove} />
            ))}
        </div>
    );
};
