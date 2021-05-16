import React from "react";
import PreviewList from "../../component/PreviewList";
import PostContainer from "../../component/PostContainer";

export default function () {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: 150 }}>
                <div>
                    <button>new</button>
                </div>
                <hr />
                <PreviewList />
            </div>

            <div style={{ flex: 1 }}>
                <PostContainer />
            </div>
        </div>
    );
}
