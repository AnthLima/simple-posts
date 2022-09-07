import './Post.css';

export function Post({author, description}) {
    return (
        <div className='containerPosts'>
            <div className='containerPost'>
                <strong>{author}</strong>
                <p>{description}</p>
            </div>
        </div>
    )

}
