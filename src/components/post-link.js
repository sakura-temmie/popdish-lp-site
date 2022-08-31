import React from "react"
import "../styles/post-link.css"

export default function PostLink({ post }) {
    const title = post.title
  const body = post.body
  const date = String(post.date).slice(0, 10)

    return (
        <div className="post-link">
          <div className="post-link-text">
            <h2>{title}</h2>
            <p className="post-link-body">{date}</p>
            <p className="post-link-date">{body}</p>
          </div>
        </div>
  )
}
