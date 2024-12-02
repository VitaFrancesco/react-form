import Card from './components/Card';
import Footer from './components/Footer';
import { posts } from './data/posts';

function App() {
  const published = posts.filter((post) => post.published === true)
  return (
    <>
      <header>
        <h1>Il mio blog</h1>
      </header>
      <main className='container'>
        {published.map((post) => (
          <Card key={post.id} title={post.title} content={post.content} image={post.image || '../img/placeholder.jpg'} tags={post.tags} />
        ))}
      </main>
      <Footer />
    </>
  )
}

export default App
