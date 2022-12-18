
import { addBlog } from "../../redux/actions/blogActions"


const addBlogData = (blog) => {
    return async (dispatch, getState) => {
        const res = await fetch("http://localhost:5000/blog", {
            method: "PATCH",
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()

        if (data.modifiedCount) {
            dispatch(addBlog({
                _id: data.insertedId,
                ...blog,
            }))
        }
    }
}

export default addBlogData;