import React from 'react'
import classes from './../Post.module.css'
import {NavLink} from 'react-router-dom'
import { connect } from "react-redux";
import { requestApiPost } from "../../../../actions";


class PostSingle extends React.Component {
  componentDidMount() {
    this.props.requestApiPost(this.props.match.params.postId);
  }

  render() {
    const backgroundImg = ''
    return (
      <div className={classes.PostArea}>
      {(this.props.data.post || []).map((item,index)=>{
          return (
          <React.Fragment>
            <div key={"post"} className={classes.Post}>
              <div className={classes.PostImage} style={{backgroundImage: 'url('+backgroundImg+')'}}></div>
                  <div className={classes.PostContent}>
                    <div className={classes.PostAuthor}>{item.user.username}</div>
                    <h2>{item.post.title}</h2>
                    <p>{item.post.body}</p>
                    </div>
            </div>
              <div key={"user"} className={classes.User}>
                  	<div className={classes.UserRow}>
                  		<div className={classes.UserImg}></div>
                  		<div className={classes.UserCol}>
                  			<div className={classes.UserName}>{item.user.name}</div>
                  			<div className={classes.UserField}>{item.user.email}</div>
                  		</div>
                      <div className={classes.UserInfo}>
                        <div className={classes.UserField}>{item.user.website}</div>
                        <div className={classes.UserField}>{item.user.company.name}</div>
                        <div className={classes.UserField}>{item.user.phone}</div>
                        <div className={classes.UserField}>{item.user.address.city}, {item.user.address.street}, {item.user.address.suite}</div>
                      </div>
                  	</div>
              </div>
              <div key={"comment"} className={classes.Comments}>
              {(item.comments || []).map((comment, index)=>{
                return (
                    <div key={comment.postId} className={classes.Comment}>
                      <div className={classes.CommentHead}>
                        <div className={classes.CommentImg}></div>
                        {comment.email}
                      </div>
                      <div className={classes.CommentTitle}>{comment.name}</div>
                      <p>{comment.body}</p>
                    </div>
                )
              })}
              </div>
              <NavLink to="/" exact className={classes.GoHome}>All Posts</NavLink>
          </React.Fragment>
        )})}
      </div>
    )
  }
}
const mapStateToProps = state => ({data: state.data});
const mapDispatchToProps = (dispatch) => {
  return {
    requestApiPost: (id)=>{dispatch(requestApiPost(id))},
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(PostSingle)
