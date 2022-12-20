// import { loadProduct } from "../../actions/productAction"
import { loadBlogs } from "../../redux/actions/blogActions"

const loadBlogsData = () => {
    return async (dispatch, getState) => {
        const res = await fetch("https://javascript-blogs-using-redux-server.vercel.app/blogs")
        const data = await res.json()
        console.log(data)
        if (data.data.length) {
            dispatch(loadBlogs(data.data))
        }
    }
}

export default loadBlogsData;