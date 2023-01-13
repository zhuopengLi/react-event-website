import React, { useState } from 'react'
import List from './subComponents/List'

export default function useMain() {

    const [showEvents, setShowEvents] = useState(true)

    const [events, setEvents] = useState([
        { title: "Ea veniam aute ipsum nulla proident in anim fugiat voluptate qui consectetur.", location: "Guangzhou", date: "2023-01-05", id: 1 },
        { title: "Exercitation proident duis elit ex eu laborum esse.", location: "Aachen", date: "1991-01-05", id: 2 },
        { title: "Esse aliqua et excepteur Lorem officia tempor anim ea in exercitation incididunt laboris.", location: "New York", date: "2000-01-01", id: 3 },
    ])

    const addEvent = event => {
        setEvents(prev => {
            return [...prev, event]
        })
    }

    return {
        addEvent,
        Main: (
            <main>
                {showEvents && <List events={events} setEvents={setEvents} />}

                {!showEvents && (
                    <p>Events hidden</p>
                )}

                {events.length !== 0 ? <button onClick={() => setShowEvents(prev => !prev)}>Toggle show events</button> : <p>No events</p>}
            </main>
        )
    }
}