// import React from 'react'

// Imports Shadcn
import { Button } from "@/components/ui/button";

const MainApp = () => {
    return (
        <div className="app bg-accent-foreground flex flex-col items-center justify-center">
            <h1 className='text-2xl text-accent font-bold underline mb-4'> Main Page </h1>
            <Button variant="secondary"> Finalizar Compra </Button>
        </div>
    );
}

export default MainApp;
