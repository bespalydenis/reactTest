import React from 'react'
import { bindActionCreators } from "redux";
import { connect } from "react-redux";
import { requestApiData } from "../../actions";
import Post from './Post/Post'
import classes from './Posts.module.css'

class Posts extends React.Component {

  constructor(props) {
    super(props)
    this.state = {
      search: '',
      currentData: null
    }
  }

  componentDidMount() {
    this.props.requestApiData();
  }


  filterPosts = (event) => {
    if(event.target.value.length < 1) {
      console.log(event.target.value.length)
     this.setState({ currentData: null });
     return
    }
    let searchResult = this.props.data.posts;
    const searchQuery = event.target.value.toLowerCase();
    if(searchResult !== undefined) {
      searchResult = searchResult.filter(function(i){
        return (i.body.toLowerCase().indexOf(/searchQuery/i) > -1 || i.title.toLowerCase().indexOf(searchQuery) > -1)
      })
    }
    this.setState({ currentData: searchResult })
  }


  posts = (key, index) => (
      <Post key={index} userId={key.userId} postId={key.id} title={key.title} body={key.body} />
  )

  postsOnSearch = (key, index) => (
      <Post key={index} userId={key.userId} postId={key.id} title={key.title} body={key.body} />
  )

  render() {
    return (

      <div className={classes.Posts}>
        <div className={classes.Search}>
          <input type="text" onChange={this.filterPosts} placeholder={"Search..."}/>
        </div>
          { (this.state.currentData === null) ? (this.props.data.posts || []).map(this.posts) : (this.state.currentData || []).map(this.postsOnSearch)}
      </div>

    )
  }
}

const mapStateToProps = state => ({data: state.data});
const mapDispatchToProps = dispatch => bindActionCreators({requestApiData}, dispatch)

export default connect(mapStateToProps, mapDispatchToProps)(Posts)
