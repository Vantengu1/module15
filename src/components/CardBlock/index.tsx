import React, { useState } from "react"
import styled from 'styled-components'
import PostCard from "../../components/PostCard"

interface Post {
  id: number;
  title: string;
  description: string;
  link?: string;
}

const Container = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  max-width: 1640px;
  margin: 0 auto;
  padding: 40px;
  background: var(--background);
  border-radius: 10px;

    @media (max-width: 786px) {
      padding: 20px;
      max-width: 90%;
    }

    @media (max-width: 390px) {
      flex-direction: column;
      padding: 20px;
      max-width: 80%;
    }
`

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
        <Container>
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
    </Container>
    );
};

export default CardBlock;