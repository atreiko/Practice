import React, { useState } from 'react';
import './styles/App.css';
import PostList from './components/PostList';
import PostForm from './components/PostForm';
import MySelect from './components/UI/MySelect/MySelect';
import MyInput from './components/UI/input/MyInput';

function App() {
  const [posts, setPosts] = useState([
    {id: 1, title: 'First', body: 'Ball'},
    {id: 2, title: 'Second', body: 'Yellow'},
    {id: 3, title: 'Third', body: 'Table'}
  ])

  const [selectedSort, setSelectedSort] = useState('')
  const [searchQuery, setSearchQuery] = useState('')

  function getSortedPosts() {
    console.log('getSortedPosts function has already use')
    if (selectedSort) {
      return [...posts].sort((a, b) => a[selectedSort].localeCompare(b[selectedSort]))
    }
    return posts;
  }

  const sortedPost = getSortedPosts()

  const createPost = (newPost) => {
    setPosts([...posts, newPost])
  }

  const removePost = (post) => {
    setPosts(posts.filter(p => p.id !== post.id))
  }

  const sortPosts = (sort) => {
    setSelectedSort(sort)
  }

  return (
    <div className='App'>
      <PostForm create={createPost} />
      <hr style={{margin: '15px 0'}}/>
      <div>
        <MyInput 
          value={searchQuery}
          onChange={e => setSearchQuery(e.target.value)}
          placeholder='Search...'
        />
        <MySelect 
          onChange={sortPosts}
          value={selectedSort}
          defaultValue='Sort by'
          options={[
            {value: 'title', name: 'By name'},
            {value: 'body', name: 'By description'}
          ]} 
        />
      </div>
      {posts.length !== 0
        ? <PostList posts={sortedPost} title='Posts List 1' remove={removePost} />
        : <h2 style={{ textAlign: 'center', marginTop: '15px' }}>There are no posts</h2>
      }
    </div>
  );
}

export default App;
