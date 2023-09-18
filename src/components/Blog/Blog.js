import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import usePosts from "./usePosts";
import { Link } from "react-router-dom";
import readableDate from "../../utils/readableDate";
import { useEffect } from "react";
import projectsImages from "../../assets/projectsImages";
import { BsCalendar3 } from "react-icons/bs";
import { FaUserSecret } from "react-icons/fa";

export default function Blog() {
  const [posts, isLoading] = usePosts();

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;
    return posts.map((post) => (
      <Link
        className="relative flex flex-col justify-start border-none break-words rounded-[0.25rem] md:flex-50 lg:max-w-[50%] lg:flex-33 lg:max-w-[33%] w-full shadow-xl mx-4 my-4 group overflow-hidden"
        key={post.sys.id}
        to={post.fields.slug}
      >
        <div className="relative rounded-t-[calc(0.25rem-1px)] p-0 mb-0 bg-[0,0,0,0.03] h-64">
          <img
            className="posts__post__img__container__img group-hover:scale-110 transition-all ease-in duration-300 h-full object-cover"
            src={post.fields.image[0].fields.file.url}
            alt={post.fields.title}
          />
          <span className="absolute top-[20px] left-[20px] p-1 text-[14px] uppercase text-white bg-primary rounded-[4px]">
            {post.fields.category}
          </span>
        </div>
        <div className="p-8 rounded-b-[8px] border-solid border-2 border-[#eee] border-t-0 border-b-0">
          <h3 className="text-[1.25rem] font-bold m-0 p-0 leading-[28px]">
            {post.fields.title}
          </h3>
          <ul className="flex flex-wrap items-center justify-between mb-6 mt-2 p-0">
            <li className="flex justify-start items-center w-auto p-0 text-sm">
              <BsCalendar3 className="mr-2" />
              {readableDate(post.fields.date)}
            </li>
            <li className="flex justify-start items-center w-auto p-0 text-sm">
              <FaUserSecret className="mr-2" />
              Humberto
            </li>
          </ul>
          <p className="text-[#707070]">{post.fields.excerpt}</p>
        </div>
      </Link>
    ));
  };
  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      renderPosts();
    };
  });

  return (
    <div id="blog">
      <Navbar />
      <div className="posts__container">
        <div className="relative">
          <img
            src={projectsImages.banner_blog}
            alt="Blog"
            className="w-full max-h-[250px] object-cover"
          />
          <Link to="/blog">
            <h2 className="absolute left-[45%] top-[45%] font-nunito font-bold text-4xl text-white text-center">
              Blog
            </h2>
          </Link>
        </div>
        <div className="py-10 px-6 flex flex-wrap justify-evenly">
          {renderPosts()}
        </div>
      </div>
      <Footer />
    </div>
  );
}
