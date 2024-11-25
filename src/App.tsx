import CardBlock from "./components/CardBlock"
import Header from "./components/Header"
import LinksBlock from "./components/LinksBlock"


const App: React.FC = () => {

  return (
    <>
      <Header />
      <main>
        <LinksBlock />
        <CardBlock />
      </main>
    </>
  )
}

export default App
