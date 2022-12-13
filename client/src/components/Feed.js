// axios is used to made http request from the browser to a particular url
import axios from "axios";

import React, { useState, useEffect, useContext } from "react";
import { UserContext } from "../Routes.js";
// just bringing out the article component here
import Article from "./Article.js";
import CreateNotice from "./CreateNotice";
import NoticeCarousel from "./NoticeCarousel.js";

const Feed = (props) => {

  // destructuring from props
  const { newQuestion, articles, setArticles, isShowSignup, setIsShowSignup } = props;
  // console.log(isAdmin);
  const host = "http://localhost:5000";
  const [deleteQuestion, setDeleteQuestion] = useState(false);
  const { user } = useContext(UserContext);

  // const isAdmin =  ?? false;
  // as soon as a user entered into the site the already questions and answers present
  // there can be shown to the user by using iseEffect
  async function fetchArticles() {
    let ArticleList;
    if (!user?.isAdmin) {
      console.log(user?.isAdmin, 'by');
      ArticleList = await axios.get(
        `${host}/api/questions`
      );
    }
    else {
      console.log(user?.isAdmin, "hi");
      ArticleList = await axios.get(`${host}/api/questions/toVerify`)
    }
    setArticles(ArticleList.data);

  }

  useEffect(() => fetchArticles(), []);

  useEffect(() => {
    if (deleteQuestion) {
      fetchArticles();
      setDeleteQuestion(false);
    }

  }, [deleteQuestion]);

  return (
    <div className="articles">
      {!user?.isAdmin ?
        <>
          <h2 style={{ marginTop: '50px' }}>Notices</h2>
          <NoticeCarousel />
          <h2>Frequently Asked Questions</h2>
        </>
        :
        <>
          <h2>Welcome To Admin Panel</h2>
          <CreateNotice />
        </>
      }
      {articles.map((article) => (
        <Article
          // key is the meccessaty whenever i am using .map function
          key={article._id}
          question={article._id}
          isAdmin={user?.isAdmin}
          user={article.user}
          title={article.title}
          questionBody={article.questionBody}
          tags={article.tags}
          votes={article.votes}
          deleteQuestion={deleteQuestion}
          setDeleteQuestion={setDeleteQuestion}
          isShowSignup={isShowSignup}
          setIsShowSignup={setIsShowSignup}
        />
      ))}
    </div>
  );
};

export default Feed;