import axios from "axios";
import React, { Component } from "react";

import { TodoItem } from "../../models/todo-item.interface";
import { SearchBox } from "../../components/search-box/search-box.component";


interface ITodoPageState {
    todoList: TodoItem[];
    searchField: string;
}

export default class TodoPage extends Component<{}, ITodoPageState> {
    constructor(props: ITodoPageState) {
        super(props);

        this.state = {
            todoList: [],
            searchField: "",
        };
    }

    async componentDidMount() {
        try {
            console.log("trying to mount");
            const res = await axios.get(
                "https://localhost:44392/api/TodoItem?isCompleted=false"
            );
            this.setState({ todoList: res.data });
        } catch (error) {
            console.error(error);
        }
    }

    handleChange = (e: any) => {
        this.setState({ searchField: e.target.value });
    }

    render() {
        const { todoList, searchField } = this.state;

        const filteredItems = todoList.filter(item => {
            return item.title.toLowerCase().includes(searchField.toLowerCase());
        });

        return (
            <div className="TodoPage">
                <h1>Todo List</h1>
                <SearchBox
                    placeHolder="search not completed items"
                    handleChange={this.handleChange}
                />
                <TodoList items={filteredItems} />
            </div>
        );
    }
}
