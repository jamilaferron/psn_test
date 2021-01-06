import React, { useState } from 'react';
import { VideoData } from '../../Data/Data';
import dateFormat from 'dateformat';
import './Home.css';
import Post from '../../Components/Post';

const Home = () => {
    const dates_list = [...new Set(VideoData.map(item => dateFormat(new Date(item.publishDate),"dd mmmm yyyy")))];
    
    const [dropdown, setDropdown] = useState(dates_list[0])

    return (
        <div>
            <div className="video">
                <iframe
                    src={`https://www.youtube.com/embed/${VideoData[0]._id}`}
                    frameBorder="0"
                />
            </div>
            <div className='main-title'>
                <h1>Latest videos</h1>
            </div>
            <div className='date-dropdown'>
                <select value={dropdown} onChange={(e)=>{setDropdown(e.target.value)}}>
                    {dates_list.map((date, index) => {
                        return(
                            <option value={date} key={index}>{date}</option>
                        )
                    })}
                </select>
            </div>
            <div className='posts'>
                {VideoData.filter((post) => dateFormat(new Date(post.publishDate),"dd mmmm yyyy") === dropdown).map((post, index) => {
                    return(
                        <Post item={post} key={index}/>
                    )
                })} 
            </div>
        </div>
    );
}

export default Home;