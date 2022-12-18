
import { removeBlog } from "../../redux/actions/blogActions"

const deleteBlog = (id) => {
    return async (dispatch, getState) => {
        const res = await fetch(`http://localhost:5000/blog/${id}`, {
            method: "DELETE",
            headers: {
                "Content-type": "application/json"
            }
        })
        const data = await res.json()

        if (data.acknowledged) {
            dispatch(removeBlog(id))
        }
    }
}

export default deleteBlog;