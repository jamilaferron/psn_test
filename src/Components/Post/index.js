import React from 'react';
import dateFormat from 'dateformat';
import './Post.css';

const Post = ({item}) => {     
    return (
        <div className="post_container">
            <a className="post_item" href={`https://www.globalcyclingnetwork.com/video/${item.urlTitle}`}>
                <img alt={item.title} className="post_img" src={`https://img.youtube.com/vi/${item._id}/mqdefault.jpg`} />
                <h6 className="post_date">{dateFormat(new Date(item.publishDate),"dS mmmm yyyy")}</h6>
                <h4 className="post_title">{item.title}</h4>
            </a> 
        </div>  
    );
}

export default Post;
