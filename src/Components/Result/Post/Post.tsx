import { useEvent } from "effector-react";
import { Link } from "react-router-dom";
import { showAuthorQuestions as authorQuestions, showPopularTags as popularTags } from "../../../Stores/StateStore";
import Style from "./Post.module.css";

const Post = ({ post, forceUpdate, setUserId, setTag, setQuestionId }: any) => {
  const showAuthorQuestions = useEvent(authorQuestions);
  const showPopularTags = useEvent(popularTags);

  return (
    <div className={Style.Post_wrapper} key={post?.question_id} >
      <div className={Style.Post_author} onClick={() => setUserId(post?.owner.user_id)}>
        <div className={Style.Author_avatar}><img src={post?.owner.profile_image} /></div>
        <div className={Style.Author_name} onClick={forceUpdate}>
          <div onClick={showAuthorQuestions}>
            {post?.owner.display_name}
          </div>
        </div>
      </div>
      
      <div className={Style.Post_title} onClick={() => setQuestionId(post?.question_id)}>
        <Link to='/post-info' >
          {post?.title}
        </Link>
      </div>
      
      <div className={Style.Post_answer_count} onClick={() => setQuestionId(post?.question_id)}>
        <Link to='/post-info' >
        {
          post?.answer_count === 0 ? 'Нет ответов' :
            post?.answer_count === 1 ? `${post?.answer_count} ответ` : 
              post?.answer_count >= 2 && post?.answer_count < 5 ? `${post?.answer_count} ответа` : 
                `${post?.answer_count} ответов`
        }
        </Link>
      </div>
      
      <div className={Style.Post_tags} onClick={forceUpdate}>
        Теги:
          <ul onClick={showPopularTags}>
            {post?.tags?.map((tag: any) => (
              <li className={Style.Post_tag} onClick={() => setTag(tag)} >
                {tag}
              </li>
            ))}
          </ul>
      </div>
    </div>
  );
};

export default Post;

// Комопнент для рендера каждого отдельного поста