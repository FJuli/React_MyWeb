import React from 'react';
import MyButtonBlack from '../UI/MyButton/MyButtonBlack';
import s from '../../styles/Post.module.css'


const PostItem = (props) => {
    return (
        <div className={s.blockPosts}>
            <div className={s.postItem}>
                <div className={s.titlePost}>{props.number}. {props.post.title}</div>
                <div className={s.textPost}>{props.post.body}</div>
            </div>
            <div className={s.btnDel_block}>
                <MyButtonBlack className={s.btnDel} onClick={() => props.remove(props.post)}>Удалить</MyButtonBlack>
            </div>
        </div>
    );
}

export default PostItem;
