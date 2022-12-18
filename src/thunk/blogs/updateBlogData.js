
import { updateBlog } from "../../redux/actions/blogActions"


const upadateBlogData = (blog, id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: "PATCH",
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()

        if (data.modifiedCount) {
            dispatch(updateBlog({
                ...blog,
            }))
        }
    }
}

export default upadateBlogData;