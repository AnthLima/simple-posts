import './Post.css';

export function Post({author, description}) {
    return (
        <div >
            <div >
                <strong>{author}</strong>
                <p>{description}</p>
            </div>
        </div>
    )

}
