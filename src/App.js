import { RouterProvider } from 'react-router-dom/dist';
import './App.css';
import router from './components/Routes';



function App() {
  return (
    <div className="App">
      <RouterProvider router={router}></RouterProvider>

    </div>
  );
}

export default App;
