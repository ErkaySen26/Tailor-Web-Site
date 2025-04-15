import React from "react";
import "./Blog.css";

const blogPosts = [
  {
    id: 1,
    title: "Kişiye Özel Dikim Takım Elbise",
    excerpt: "Kişiye özel dikim takım elbiseler ile tarzınızı yansıtın...",
    image: "/images/suit1.jpg",
    date: "15 Nisan 2024",
    category: "Moda",
    content:
      "Kişiye özel dikim takım elbiseler, sizin vücut ölçülerinize göre özel olarak hazırlanır. Bu sayede mükemmel uyum ve konforu bir arada yaşarsınız...",
  },
  {
    id: 2,
    title: "Kumaş Seçiminin Önemi",
    excerpt: "Doğru kumaş seçimi ile kıyafetlerinizin kalitesini artırın...",
    image: "/images/tailor1.jpg",
    date: "10 Nisan 2024",
    category: "Kumaşlar",
    content:
      "Kaliteli bir kıyafetin en önemli unsurlarından biri kumaş seçimidir. Doğru kumaş seçimi ile hem şık hem de dayanıklı kıyafetlere sahip olabilirsiniz...",
  },
  {
    id: 3,
    title: "Mevsime Göre Giyim",
    excerpt: "Her mevsim için doğru kıyafet seçimi nasıl yapılır?",
    image: "/images/tailor2.jpg",
    date: "5 Nisan 2024",
    category: "Stil Önerileri",
    content:
      "Mevsime uygun kıyafet seçimi hem konfor hem de şıklık açısından önemlidir. Her mevsim için doğru kumaş ve model seçimi yaparak tarzınızı koruyabilirsiniz...",
  },
];

const Blog = () => {
  return (
    <div className="blog-container">
      <div className="blog-header">
        <h1>Blog</h1>
        <p>Moda ve stil hakkında en güncel yazılar</p>
      </div>

      <div className="blog-grid">
        {blogPosts.map((post) => (
          <article key={post.id} className="blog-card">
            <div className="blog-card-image">
              <img src={post.image} alt={post.title} />
              <span className="blog-category">{post.category}</span>
            </div>

            <div className="blog-card-content">
              <div className="blog-meta">
                <span className="blog-date">{post.date}</span>
              </div>

              <h2>{post.title}</h2>
              <p>{post.excerpt}</p>

              <button className="read-more">
                Devamını Oku
                <i className="fas fa-arrow-right"></i>
              </button>
            </div>
          </article>
        ))}
      </div>
    </div>
  );
};

export default Blog;
