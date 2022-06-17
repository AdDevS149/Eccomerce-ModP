// import { useSelector } from 'react-redux'
// import { selectPostById } from './productsSlice'

// import PostProduct from './PostProduct';
// import TimeAgo from "./TimeAgo";
// import ReactionButtons from "./ReactionButtons";

// import { useParams } from 'react-router-dom';
// import { Link } from 'react-router-dom';

// const SingleProduct = () => {
//     const { postId } = useParams()

//     const post = useSelector((state) => selectPostById(state, Number(postId)))

//     if (!post) {
//         return (
//             <section>
//                 <h2>Post not found!</h2>
//             </section>
//         )
//     }

//     return (
//         <article>
//             <h2>{post.title}</h2>
//             <p>{post.body}</p>
//             <p className="postCredit">
//                 <Link to={`/post/edit/${post.id}`}>Edit Post</Link>
//                 <PostProduct userId={post.userId} />
//                 <TimeAgo timestamp={post.date} />
//             </p>
//             <ReactionButtons post={post} />
//         </article>
//     )
// }

// export default SingleProduct