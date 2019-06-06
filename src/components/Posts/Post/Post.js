import React from 'react';
import classes from './Post.module.css'
import {withRouter} from 'react-router-dom'

const Post = props => {
  const text = props.body
  const backgroundImg = ''
  return (
    <a to="/" onClick={()=>props.history.push('/posts/'+props.postId)} className={classes.Post}>
      <div className={classes.PostImage} style={{backgroundImage: 'url('+backgroundImg+')'}}></div>
      <div className={classes.PostContent}>
        <h2>{props.title}</h2>
        <p>{text}</p>
        <div className={classes.PostNotRealButton}>Read More</div>
      </div>
    </a>
  )
}

export default withRouter(Post)
