interface Blog {
    title: string;
    image: string;
    date: string;
  }
  
  const blogs: Blog[] = [
    { title: 'Student Nightlife on a Budget', image: '/images/card-1.avif', date: '16th Nov 2024' },
    { title: 'Student Nightlife on a Budget', image: '/images/card-1.avif', date: '16th Nov 2024' },
    { title: 'Student Nightlife on a Budget', image: '/images/card-1.avif', date: '16th Nov 2024' },
  ];
  
  export default function Blogs() {
    return (
      <section className="max-w-6xl mx-auto px-4 py-12">
        <div className="text-center">
          <p className="text-orange-500 font-semibold">Our Blogs</p>
          <h2 className="text-3xl font-bold mt-1">Nightlife Guides & Tips</h2>
        </div>
        <div className="grid md:grid-cols-3 gap-6 mt-10">
          {blogs.map((blog, index) => (
            <div key={index} className="bg-white rounded-xl shadow-lg overflow-hidden">
              <img src={blog.image} alt={blog.title} className="w-full h-56 object-cover" />
              <div className="p-5">
                <div className="flex items-center text-gray-500 text-sm space-x-3">
                  <span>👤 By Admin</span>
                  <span>📅 {blog.date}</span>
                </div>
                <h3 className="font-bold text-lg mt-3">{blog.title}</h3>
                <p className="text-gray-600 mt-2 text-sm">
                  Lorem Ipsum is simply dummy text of the printing and typesetting industry. Lorem Ipsum has been...
                </p>
                <a href="#" className="inline-block mt-4 text-orange-500 font-semibold hover:underline">Read more →</a>
              </div>
            </div>
          ))}
        </div>
      </section>
    );
  }