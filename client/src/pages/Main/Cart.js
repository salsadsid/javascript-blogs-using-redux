import { useSelector } from "react-redux";
import BlogCard from "../../components/BlogCard";


const Cart = () => {
    const cart = useSelector((state) => state.blog.cart);
    return (
        <div className='grid grid-cols-1 md:grid-cols-2 max-w-7xl gap-14 mx-auto my-10'>
            {cart
                .sort((a, b) => a.cartPosition - b.cartPosition)
                .map((blog) => (
                    <BlogCard key={blog._id} blog={blog}></BlogCard>
                ))}
        </div>
    );
};
export default Cart;