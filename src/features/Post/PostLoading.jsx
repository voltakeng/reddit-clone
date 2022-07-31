import "./PostLoading.css";
import "./Post.css";
import Skeleton from 'react-loading-skeleton';
import 'react-loading-skeleton/dist/skeleton.css'
import {
    TiArrowUpOutline,
    TiArrowDownOutline,
    TiMessage,
} from 'react-icons/ti';

function PostLoading() {
    return (
        <article className="post">
            <div className="post-votes-container">
                <TiArrowUpOutline className="icon-action" />
                <Skeleton className="post-votes-value post-votes-value-loading" />
                <TiArrowDownOutline className="icon-action" />
            </div>
            <div className="post-container">
                <h3 className="post-title"><Skeleton width={100} /></h3>

                <div className="post-image-container">
                    <Skeleton height={250} />
                </div>

                <div className="post-details">
                    <span>
                        <Skeleton width={50} />
                    </span>

                    <span>
                        <Skeleton width={35} />
                    </span>

                    <span className="post-comments-container">
                        <TiMessage className="icon-action" />
                        <Skeleton width={20} />
                    </span>
                </div>
            </div>
        </article>

    )
}

export default PostLoading;