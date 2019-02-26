import MDPostGETCall from 'components/posts/MDPostGETCall';

// Example useage:
// const P = Post('http://localhost:5000/post/Hello_world');
// <P />

const Post = url => MDPostGETCall(url);

export default Post;
