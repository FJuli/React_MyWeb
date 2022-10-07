import React, { useState } from 'react'
import s from '../../styles/Post.module.css'
import MyInput from '../UI/MyInput/MyInput';
import MyButtonBlack from '../UI/MyButton/MyButtonBlack';
import PostList from './PostList';


const Post = () => {
    const [posts, setPosts] = useState([
        { id: 1, title: 'React', body: 'это JavaScript-библиотека для создания пользовательских интерфейсов' },
        { id: 2, title: 'Sass', body: 'это метаязык (язык для описания другого языка), который упрощает и ускоряет написание CSS-кода' },
        { id: 3, title: 'Git', body: 'распределённая система управления версиями' },
    ]);

    const [post, setPost] = useState({ title: '', body: '' });

    const addNewPost = (e) => {
        e.preventDefault()
        setPosts([...posts, { ...post, id: Date.now() }]);
        setPost({ title: '', body: '' })
    }

    const removePost = (post) => {
        setPosts(posts.filter(p => p.id !== post.id))
    }

    const buttonText = 'добавить пост';

    return (
        <div className={s.body}>
            <div className={s.block}>
                <MyInput
                    value={post.title}
                    onChange={e => setPost({ ...post, title: e.target.value })}
                    type="text"
                    placeholder='Название поста' />
                <MyInput
                    value={post.body}
                    onChange={e => setPost({ ...post, body: e.target.value })}
                    type="text"
                    placeholder='Описание поста' />
            </div>
            <div className={s.button_block}>
                <MyButtonBlack className={s.button} onClick={addNewPost}> {buttonText} </MyButtonBlack>
            </div>
            {posts.length !== 0
                ? <PostList remove={removePost} posts={posts} />
                : <h2>Посты были удалены, но вы можете добавить новый нажав на кнопку "{buttonText}"</h2>
            }
        </div>
    );
}

export default Post;
