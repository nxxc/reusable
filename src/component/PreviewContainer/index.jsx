import React from "react";
import {useSelector} from "react-redux";
import ButtonToPostForm from "../ButtonToPostForm";
import Preview from "../Preview";

export default function () {
    const { posts } = useSelector(state => state.post);

    return (
        <div>
            <header>
                <ButtonToPostForm />
            </header>

            <section>
                {posts.map(post => <Preview key={post.id} post={post} />)}
            </section>
        </div>
    );
}
