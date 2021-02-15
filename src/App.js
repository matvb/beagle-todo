import React from 'react';
import Header from './components/Header';
import Footer from './components/Footer';
import './App.css';
import beagleLogo from './assets/images/beagle-logo.png';
import { TodoList } from './features/todo/TodoList';
import { AddTodoField } from './features/todo/AddTodoField';

function App() {
  return (
    <div className="App">
      <Header title="The Beagle Todo List" titleMobile="Beagle Todo" logo={beagleLogo} />
      <section className="main-content">
        <AddTodoField />
        <TodoList />
      </section>
      <Footer author="Mateus Villas Boas" />
    </div>
  );
}

export default App;
