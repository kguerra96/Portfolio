import React from 'react'

function BlogCards(props) {
    const blogObj = props.blogObject

    const titleHandler = (title) => {
        let blogTitle = title

        if (blogTitle.includes("&amp")) {
            let titleString = title.split(" ")
            let newTitle = []

            for (let i=0; i < titleString.length; i++) {
                if (titleString[i] === "&amp;") {
                    newTitle[i] = "&"
                }
                else {
                    newTitle[i] = titleString[i]
                }
            }
            return newTitle.join(" ")
        }
        else {
            return title;
        }
    }

    const dateHandler = (date) => {
        let dateString = date.split(" ")
        let dateArr = dateString[0]
        let arr = dateArr.split("-")

        let month = arr[1]
        let day = arr[2]
        let year = arr[0]

        return `${month}/${day}/${year}`

    }

    return (
        <div>
            <h1>{titleHandler(blogObj.title)}</h1>
            <img src={blogObj.thumbnail} width="470" height="250" />
            <p> {dateHandler(blogObj.pubDate)}</p>
            

        </div>
    )
}

export default BlogCards