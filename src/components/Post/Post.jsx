import { useState } from 'react';
import styles from './Post.module.css';
import { Comment } from '../Comment/Comment';
import { Avatar } from '../Avatar/Avatar';
import { LinkedinLogo } from 'phosphor-react';
export function Post({author, publishedAt, content }) {
    const [comments, setComments] = useState([]);
    
    const [newCommentText, setNewCommentText] = useState('');
    
    function handleCreateNewComment(e) {
        e.preventDefault();
        
        setComments([...comments, newCommentText]);
        setNewCommentText('');
    }

    function handleNewCommentChange (e) {
        setNewCommentText(e.target.value);
        
    }

    const publishedDateFomatted = new Intl.DateTimeFormat('en-Us', {
        day: '2-digit',
        month: 'long',
        hour: '2-digit',
        minute: '2-digit'
    }).format(publishedAt);

    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}> 
                    <Avatar src={author.avatarUrl}/>
                    <div className={styles.authorInfo}>
                        <strong>{author.name}</strong>
                        <span>{author.role}</span>
                    </div>
                </div>
                <time title={publishedDateFomatted} dateTime={publishedAt.toISOString()}>
                    {publishedDateFomatted}
                </time>
            </header>

            <div className={styles.content}>
                {content.map(line => {
                    if(line.type === 'paragraph'){
                        return <p key={line.content} >{line.content}</p>
                    } else if(line.type === 'link'){
                        return  <p key={line.content}><a href='#'>{line.content}</a></p>
                    }
                })}
            </div>
            <form onSubmit={handleCreateNewComment} className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea
                    onChange={handleNewCommentChange} 
                    name="comment"
                    value={newCommentText}
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit' >Comentar</button>
                </footer>


            </form>
            <div className={styles.commentList}>
                {comments.map(comment => {
                    return <Comment key={comment} content={comment} />
                })}

            </div>
        </article>
    )

}

