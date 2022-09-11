import { ThumbsUp, Trash } from 'phosphor-react';
import { Avatar } from '../Avatar/Avatar';
import styles from './Comment.module.css';
export function Comment() {
    return (
        <div className={styles.comment}>
            <Avatar hasBorder={false} src="https://github.com/AnthLima.png"/>
            <div className={styles.commentBox}>
                <div className={styles.commentContent}>
                    <header>
                        <div className={styles.authorAndTime}>
                            <strong>Anthony Lima</strong>
                            <time title="May 11 at 08:13h" dateTime="2022-05-11 08:13:33">
                                Publish 2hr ago
                            </time>
                            
                        </div>
                        <button title="Delete comment">
                            <Trash size={24} />
                        </button>
                    </header>
                    <p>
                        Very nice devon, congratulations! 👏👏 
                    </p>
                </div>
                <footer>
                    <button>
                        <ThumbsUp/>
                        Applaud <span>23</span>
                    </button>    
                    
                </footer>
            </div>
        </div>
    );
}