
import { updateBlog } from "../../redux/actions/blogActions"


const upadateBlogData = (blog, id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`https://javascript-blogs-using-redux-server.vercel.app/blog/${id}`, {
            method: "PATCH",
            body: JSON.stringify(blog),
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()

        if (data.modifiedCount) {
            dispatch(updateBlog({
                _id: id,
                ...blog,
            }))
        }
    }
}

export default upadateBlogData;