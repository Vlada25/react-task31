import React from 'react'
import { Button } from '@mui/material'

export default function Counter() {
    return (
        <div className="counter">
            <h1>0</h1>
            <Button>Increment</Button>
            <Button>Decrement</Button>
            <Button>Reset</Button>
        </div>
    )
}
