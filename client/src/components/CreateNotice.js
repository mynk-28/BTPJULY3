// useRef used to reference something
import React, { useState, useRef } from "react";

// axios is used to make HTTP request from node.js
import axios from "axios";
import "../styles/AddQuestion.css";
import { useNavigate } from "react-router-dom";

const CreateNotice = (props) => {

    const navigate = useNavigate();

    const [title, setTitle] = useState("");
    const [body, setBody] = useState("");

    const titleRef = useRef(null);
    const bodyRef = useRef(null);

    const host = 'http://localhost:5000'

    const noticeHandler = async () => {
        const token = window.sessionStorage.getItem("x-auth-token");

        axios
            .post(
                `${host}/api/notices`,
                { title, body },
                { headers: { "x-auth-token": token } }
            )
            .then(() => {
                // after making a new question everything now will be initialised with empty
                setTitle("");
                setBody("");
                window.alert("Notice posted successfully!");
            })
            .catch((e) => {
                navigate('/login');
            });
    };

    const handleTitle = (e) => {
        setTitle(e.target.value)
    }

    const handleBody = (e) => {
        setBody(e.target.value);
    }


    return (
        <div className="add-question">
            <form className="question-form">

                <input
                    type="text"
                    onChange={handleTitle}
                    className="title"
                    ref={titleRef}
                    value={title}
                    placeholder="Title of notice"
                />

                <textarea
                    type="text"
                    onChange={handleBody}
                    className="question-body"
                    ref={bodyRef}
                    value={body}
                    placeholder="Some details about the notice"
                />

                <button type="button" onClick={noticeHandler} className="ask-button">
                    Post Notice
                </button>
            </form>
        </div>
    );
};

export default CreateNotice;