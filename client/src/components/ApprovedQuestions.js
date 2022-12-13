// axios is used to made http request from the browser to a particular url
import axios from "axios";

import React, { useState, useEffect } from "react";
// just bringing out the article component here
import Article from "./Article.js";
import Nav from "./Nav";


const ApprovedQuestions = () => {
    const host = "http://localhost:5000";
    const [deleteQuestion, setDeleteQuestion] = useState(false);
    const [articles, setArticles] = useState([]);

    useEffect(() => {
        async function fetchArticles() {
            let ArticleList;
            ArticleList = await axios.get(
                `${host}/api/questions`
            );
            let UserQuestionList = [];
            let userId = window.sessionStorage.getItem("userId")
            console.log(ArticleList.data.length);
            for (var i = 0; i < ArticleList.data.length; i++) {
                if (ArticleList.data[i].user == userId)
                    UserQuestionList.push(ArticleList.data[i]);
            }
            setArticles(UserQuestionList);

        }
        fetchArticles();
    }, [deleteQuestion, setArticles, articles]);

    return (
        <div className="articles">
            <Nav />
            <h2>Approved Questions</h2>
            {articles.map((article) => (
                <Article
                    key={article._id}
                    question={article._id}
                    user={article.user}
                    title={article.title}
                    questionBody={article.questionBody}
                    tags={article.tags}
                    votes={article.votes}
                    deleteQuestion={deleteQuestion}
                    setDeleteQuestion={setDeleteQuestion}
                />
            ))}
        </div>
    );
};

export default ApprovedQuestions;