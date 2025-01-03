import Link from "next/link";
import { MdOutlineCalendarMonth } from "react-icons/md";
import { client } from "@/sanity/lib/client";

const getData = async () => {
  const res = await client.fetch(`*[_type == "post"]{
    id,
    title,
    slug,
    subheading,
    publishedAt
  }`);
  return res;
};

export default async function BlogListing() {
  const data = await getData();

  return (
    <div id="bloglist" className=" py-12">
      <div className="max-w-7xl mx-auto px-6">
        <h2 className="text-4xl font-bold text-center mb-12 text-[#EDEDED]">
          Latest Blog Posts
        </h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {data.map((blog: any) => (
            <div key={blog.id} className="bg-white shadow-lg rounded-lg p-6">
              <h3 className="text-2xl font-semibold text-teal-500">
                {blog.title}
              </h3>
              <p className="text-lg text-gray-700 mt-4">{blog.subheading}</p>
              <div className="flex justify-between items-center mt-4">
                <Link href={`/blogs/${blog.slug.current}`}>
                  <p className="text-teal-500 hover:text-teal-700">Read more</p>
                </Link>
                <div className="flex items-center text-gray-500">
                  <MdOutlineCalendarMonth className="w-5 h-5 text-teal-500 mr-2" />
                  <span>{blog.publishedAt}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
