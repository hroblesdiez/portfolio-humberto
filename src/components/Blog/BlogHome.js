import useLastThreePosts from "./useLastThreePosts";
import SectionTitle from "../General/SectionTitle";
import { Link } from "react-router-dom";
import readableDate from "../../utils/readableDate";
import { useEffect } from "react";
import { BsCalendar3 } from "react-icons/bs";
import { FaUserSecret, FaBlogger } from "react-icons/fa";

export default function BlogHome() {
  const [posts, isLoading] = useLastThreePosts();

  const renderPosts = () => {
    if (isLoading) return <p>Loading...</p>;
    return posts.map((post) => (
      <Link
        className="relative flex flex-col justify-start border-none break-words rounded-[0.25rem] md:flex-50 lg:max-w-[50%] lg:flex-33 lg:max-w-[33%] w-full shadow-xl mx-4 my-4 group overflow-hidden"
        key={post.sys.id}
        to={post.fields.slug}
      >
        <div className="relative rounded-t-[calc(0.25rem-1px)] p-0 mb-0 bg-[0,0,0,0.03]">
          <img
            className="posts__post__img__container__img group-hover:scale-110 transition-all ease-in duration-300"
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
      <div className="posts__container">
        <SectionTitle icon={<FaBlogger size="28" />} text="Blog" />
        <div className="pb-40 px-6 flex flex-wrap justify-between">
          {renderPosts()}
        </div>
      </div>
    </div>
  );
}
