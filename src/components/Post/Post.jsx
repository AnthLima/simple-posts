import styles from './Post.module.css';
import { Comment } from '../Comment/Comment';
export function Post() {
    return (
        <article className={styles.post}>
            <header>
                <div className={styles.author}> 
                    <img className={styles.avatar} src="https://github.com/AnthLima.png"/>
                    <div className={styles.authorInfo}>
                        <strong>Anthony Lima</strong>
                        <span>Web Developer</span>
                    </div>
                </div>
                <time title="May 11 at 08:13h" dateTime="2022-05-11 08:13:33">
                    Publish 1hr ago
                </time>
            </header>

            <div className={styles.content}>
                <p>Hey guys 👋</p>

                <p>I just uploaded another project in my portfolio. It's a project I did at NLW Return, Rocketseat event. The name of the project is DoctorCare 🚀</p>

                <p><a href='#'>👉{' '} jane.design/doctorcare</a></p>

                <p>
                    <a href='#'>#newproject </a>{' '}
                    <a href='#'>#nlw </a>{' '}
                    <a href='#'>#rocketseat</a>{' '}
                </p>
                
            </div>
            <form className={styles.commentForm}>
                <strong>Deixe seu feedback</strong>

                <textarea 
                    placeholder='Deixe um comentário'
                />

                <footer>
                    <button type='submit' >Comentar</button>
                </footer>


            </form>
            <div className={styles.commentList}>
                <Comment/>
                <Comment/>
                <Comment/>

            </div>
        </article>
    )

}

