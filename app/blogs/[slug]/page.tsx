import { client } from "../../../sanity/lib/client";

const getData = async () => {
  const res = await client.fetch(`*[_type == "post"]{
    title,
    subheading,
    body,
    publishedAt,
    slug
  }`);
  return res;
};

interface Blog {
  id: string;
  title: string;
  slug: { current: string };
  subheading: string;
  publishedAt: string;
}

export default async function BlogDetail({
  params,
}: {
  params: { slug: string };
}) {
  const blogs = await getData();
  const selectedBlog = blogs.find(
    (blog: Blog) => blog.slug.current === params.slug
  );
  if (!selectedBlog) {
    return <div className="text-center py-20">Blog not found.</div>;
  }

  return (
    <div className="flex flex-col justify-center items-center lg:text-center text-left px-2 py-10 min-h-screen">
      <h1 className="lg:text-4xl text-2xl font-bold bg-clip-text text-transparent bg-gradient-to-r from-yellow-400 to-pink-500">
        {selectedBlog.title}
      </h1>
      <p className="lg:text-lg text-sm lg:mt-10 lg:mb-10 mt-5 mb-5 max-w-4xl">
        {selectedBlog.body}
      </p>
      <p className="lg:text-sm text-xs text-teal-500">
        Published on: {selectedBlog.publishedAt}
      </p>
    </div>
  );
}
