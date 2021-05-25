import axios from "axios";
import React, { Component } from "react";

import { TodoItem } from "../../models/todo-item.interface";
import { SearchBox } from "../../components/search-box/search-box.component";
import { CardList } from "../../components/card-list/card-list.component";

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
            // TODO: determine if we wanna filter when caling the api or in the front end
            const res = await axios.get(
                "https://localhost:44392/api/TodoItem?isCompleted=false"
            );
            this.setState({ todoList: res.data });
        } catch (error) {
            console.error(error);
        }
    }

    // shouldComponentUpdate(prevState: ITodoPageState) {
    //     return (
    //         JSON.stringify(prevState.todoList) !==
    //         JSON.stringify(this.state.todoList)
    //     );
    // }

    // // TODO: this method
    // componentDidUpdate(prevState: ITodoPageState) {
    //     if (
    //         JSON.stringify(prevState.todoList) !==
    //         JSON.stringify(this.state.todoList)
    //     ) {
    //         console.log("did update?");
    //     }
    // }

    handleSearchChange = (e: any) => {
        this.setState({ searchField: e.target.value });
    };

    handleIsCompletedChange = (id: string) => {
        const newTodoList = this.state.todoList.filter(item => item.id !== id);
        this.setState({ todoList: newTodoList });

        // TODO: handling the click will also update the database -> call axios put method and remove from the TODO Page
    };

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
                    handleChange={this.handleSearchChange}
                />
                <CardList
                    items={filteredItems}
                    onRemove={this.handleIsCompletedChange}
                />
            </div>
        );
    }
}
