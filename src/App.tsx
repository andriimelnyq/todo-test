import './App.scss';
import { Form } from './components/Form';
import { TodosList } from './components/TodosList';

function App() {
  return (
    <section className="app">
      <div className="app__main">
        <h1 className="app__title">Shoping List</h1>

        <Form />

        <TodosList />
      </div>

      <img
        className="app__background"
        src="https://res.cloudinary.com/dueujks79/image/upload/v1700691940/background_v3xfdk.png"
        alt="background"
      />
    </section>
  )
}

export default App
