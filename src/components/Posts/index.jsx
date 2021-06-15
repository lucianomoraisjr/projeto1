import { PostCard } from '../postCard';

export const Posts =({posts})=>(
<div className="posts">
{ posts.map(posts =>(
 <PostCard
 key={posts.id}
 title = {posts.title}
 body = {posts.body}
 id= {posts.id} 
 cover= {posts.cover} />

))}
</div>
 );