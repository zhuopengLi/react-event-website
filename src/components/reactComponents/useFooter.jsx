import React, { useState, useEffect } from "react";

export default function useFooter() {

    const [clock, setClock] = useState('')

    const [showModal, setShowModal] = useState(true)

    useEffect(() => {
        const interval = setInterval(() => {
            let time = new Date
            let h = time.getHours().toString().padStart(2, "0")
            let m = time.getMinutes().toString().padStart(2, "0")
            let s = time.getSeconds().toString().padStart(2, "0")

            setClock(`${h}:${m}:${s}`)
        }, 1000);
        return () => clearInterval(interval);
    }, []);

    return {
        showModal,
        setShowModal,
        Footer: (
            <footer>
                <p className="footer">Cheer up, now is <span>{clock}</span></p>
                {!showModal && <button onClick={() => setShowModal(prev => !prev)}>Reopen modal</button>}
            </footer>
        )
    }
}