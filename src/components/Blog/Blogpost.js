import Navbar from "../Navbar/Navbar";
import Footer from "../Footer/Footer";
import useSinglePost from "./useSinglePost";
import { useEffect } from "react";
import { useParams } from "react-router-dom";
import readableDate from "../../utils/readableDate";
import projectsImages from "../../assets/projectsImages";
import { BsCalendar3 } from "react-icons/bs";
import { FaUserSecret, FaGithub, FaEye } from "react-icons/fa";
import ReactMarkdown from "react-markdown";
import { Link } from "react-router-dom";

export default function Blogpost() {
  const { slug } = useParams();

  const [post, isLoading] = useSinglePost(slug);

  const renderPost = () => {
    if (isLoading) return <p>Loading...</p>;

    return (
      <div className="lg:max-w-[50%] lg:flex-50 flex flex-col items-center mx-auto mt-20">
        <div className="w-full mb-6">
          <img
            className="object-cover w-full max-w-full rounded-lg block"
            src={post.image[0].fields.file.url}
            alt={post.title}
          />
          <h2 className="font-extrabold text-[1.25rem] mt-6">{post.title}</h2>
          <ul className="flex flex-wrap items-center justify-between mb-6 mt-2 p-0">
            <div className="flex items-center space-x-4">
              <li className="flex justify-start items-center w-auto p-0 text-sm">
                <BsCalendar3 className="mr-2" />
                {readableDate(post.date)}
              </li>
              <li className="flex justify-start items-center w-auto p-0 text-sm">
                <FaUserSecret className="mr-2" />
                Humberto
              </li>
            </div>
            <div className="flex items-center space-x-4">
              <a
                href={post.netlify}
                rel="noreferrer"
                target="_blank"
                className="flex justify-start items-center w-auto p-0 text-sm"
              >
                <FaEye className="mr-2 w-6 h-6" />
              </a>
              <a
                href={post.github}
                rel="noreferrer"
                target="_blank"
                className="flex justify-start items-center w-auto p-0 text-sm"
              >
                <FaGithub className="mr-2 w-6 h-6" />
              </a>
            </div>
          </ul>
          <p className="">{post.description}</p>
        </div>
        <ReactMarkdown className="w-full mb-10 prose prose-h4:text-[1.15rem] prose-a:no-underline prose-a:not-italic prose-p:cursor-default">
          {post.content}
        </ReactMarkdown>
      </div>
    );
  };

  useEffect(() => {
    window.scrollTo(0, 0);
    return () => {
      renderPost();
    };
  });

  return (
    <div className="">
      <Navbar />
      <div className="w-screen relative max-h-[250px]">
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
      {renderPost()}
      <Footer />
    </div>
  );
}
