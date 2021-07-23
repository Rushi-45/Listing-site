import { useState } from 'react';
import logo from '../assets/images/logo.jpg';
import { BrowserRouter as Router } from 'react-router-dom';
import '../assets/styles/searchbar.css';
import SearchBar1 from './SearchBar1';
import Announcer from './Announcer';

const posts = [
    { id: '1', name: 'This first post is about React' },
    { id: '2', name: 'This next post is about Preact' },
    { id: '3', name: 'We have yet another React post!' },
    { id: '4', name: 'This is the fourth and final post' },
];

const filterPosts = (posts, query) => {
    if (!query) {
        return posts;
    }

    return posts.filter((post) => {
        const postName = post.name.toLowerCase();
        return postName.includes(query);
    });
};

const SearchBar = () => {
    const { search } = window.location;
    const query = new URLSearchParams(search).get('s');
    const [searchQuery, setSearchQuery] = useState(query || '');
    const filteredPosts = filterPosts(posts, searchQuery);

    return (
        <Router>
            <div className="App">
                <Announcer
                    message={`${filteredPosts.length} posts`}
                />
                {/* <img src={logo} className="App-logo" alt="logo" />   */}
                <SearchBar1
                    searchQuery={searchQuery}
                    setSearchQuery={setSearchQuery}
                />
                <ul>
                    {filteredPosts.map((post) => (
                        <li key={post.id}>{post.name}</li>
                    ))}
                </ul>
            </div>
        </Router>
    );
};

export default SearchBar;