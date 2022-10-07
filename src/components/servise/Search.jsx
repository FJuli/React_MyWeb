import axios from 'axios';
import React, { useState, useEffect, useMemo } from 'react'
import s from '../../styles/Search.module.css'
import MyInput from '../UI/MyInput/MyInput';
import MySelect from '../UI/MySelect/MySelect';
import PostList from './PostList';


const Search = () => {
    const [searchPost, setSearchPost] = useState([]);
    const [selectedSort, setSelectedSort] = useState('');
    const [searchQuery, setSearchQuery] = useState('');


    useEffect(() => {
        feachPosts();
    }, []);

    const sortedPosts = useMemo(() => {
        if (selectedSort) {
            return [...searchPost].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
        }
        return searchPost;
    }, [selectedSort, searchPost])

    const sortedAndSearchedPOsts = useMemo(() => {
        return sortedPosts.filter(searchPost => searchPost.title.toLowerCase().includes(searchQuery))
    }, [searchQuery, sortedPosts])


    async function feachPosts() {
        const response = await axios.get('https://jsonplaceholder.typicode.com/posts')
        setSearchPost(response.data)
    }

    const removePost = (post) => {
        setSearchPost(searchPost.filter(p => p.id !== post.id))
    }

    const sortPosts = (sort) => {
        setSelectedSort(sort);
    }


    return (
        <div className={s.body}>
            <div className={s.input}>
                <MyInput
                    value={searchQuery}
                    onChange={e => setSearchQuery(e.target.value)}
                    type="text"
                    placeholder='Введите значение поиска' />
            </div>
            <div className={s.block}>
                <div className={s.select}>
                    <MySelect
                        defaultValue='Сортировка по'
                        onChange={sortPosts}
                        option={[
                            { value: 'title', name: 'По названию' },
                            { value: 'body', name: 'По описанию ' },
                        ]} />
                </div>
            </div>
            <div className={s.searchPost}>
                {sortedAndSearchedPOsts.length !== 0
                    ? <PostList posts={sortedAndSearchedPOsts} remove={removePost} />
                    : <h2>Посты не найдены! Попробуйте изменить запрос</h2>
                }
            </div>
        </div>
    );
}


export default Search;
