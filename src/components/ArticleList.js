import Article from "./Article";

const ArticleList = ({posts, title, date, preview}) => {
    //map over posts and create Article  for each
    const postsArray = posts.map(post =>{
        return(
            <Article key={post.id} post={post} title={title} date={date} preview={preview}/>
        )
    })

    return (
        <main>
            {postsArray}
        </main>
    )
}

export default ArticleList;