
// Imports CSS
import './App.css'

// Shadcn Components
import { Button } from "@/components/ui/button"

const App = () => {

  return (
    <div className="app flex flex-col items-center justify-center">
      <h1 className='text-3xl font-bold underline mb-4'> My App </h1>
      <Button> Finalizar Compra </Button>
    </div>
  );
}

export default App;
