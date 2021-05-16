import React from "react";
import PreviewContainer from "../../component/PreviewContainer";
import PostContainer from "../../component/PostContainer";

export default function () {
    return (
        <div style={{ display: "flex" }}>
            <div style={{ width: 150 }}>
                <PreviewContainer />
            </div>

            <div style={{ flex: 1 }}>
                <PostContainer />
            </div>
        </div>
    );
}
