import { useState } from 'react'
import Card from './components/Card';
import AddBlog from './components/AddBlog';
import Footer from './components/Footer';
import { posts } from './data/posts';

function App() {
  const [article, setArticle] = useState(posts)
  let lastId = 5 + 1;
  function addArticle(newTitle) {
    const newPost = {
      id: lastId,
      title: newTitle,
      image: undefined,
      content: '',
      tags: [],
      published: true,
    }
    lastId = lastId + 1;
    setArticle([...article, newPost]);
  }
  let published = article.filter((post) => post.published === true)
  return (
    <>
      <header>
        <h1>Il mio blog</h1>
      </header>
      <main className='container'>
        {published.map((post) => (
          <Card key={post.id} title={post.title} content={post.content} image={post.image || '../img/placeholder.jpg'} tags={post.tags} />
        ))}
        <AddBlog onSubmit={(title) => addArticle(title)} />
      </main>
      <Footer />
    </>
  )
}

export default App
