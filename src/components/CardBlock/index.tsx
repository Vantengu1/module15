import React, { useState } from "react"
import style from './css.module.css'
import PostCard from "../PostCard/PostCard"

interface Post {
  id: number;
  title: string;
  description: string;
  link?: string;
}

const CardBlock: React.FC = () => {

    const [posts, setPosts] = useState<Post[]>([
        {
          id: 1,
          title: "Друг для друга",
          description: "Дока — это документация для разработчиков на понятном языке. Её пишет сообщество, чтобы помогать друг другу. Ваши знания и опыт важны. Делитесь ими, мы поможем.",
          link: "⭐Наша Дока"
        },
        {
          id: 2,
          title: "Дока ищет партнёров",
          description: "Партнёрство с Докой полезно компаниям и проектам, которые разделяют ценности open-source. Предоставляя Доке полную или частичную поддержку, вы помогаете развивать русскоязычное фронтенд-сообщество."
        },
      ])

    const handleDeletePost = (id: number) => {
      setPosts(posts.filter((post) => post.id !== id));
    } 

    return(
        <div className={style.container}>
            {
                posts.map((post) => (
                <PostCard 
                key={post.id}
                id={post.id}
                title={post.title}
                description={post.description}
                link={post.link}
                oneDelete={handleDeletePost}
                />
                ))
            }
    </div>
    );
};

export default CardBlock;