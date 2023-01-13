import React from 'react'
import Title from './reactComponents/Title'
import useFooter from './reactComponents/useFooter'
import useMain from './reactComponents/useMain'
import Modal from './reactComponents/Modal'


export default function App() {

  const {Main, addEvent} = useMain()

  const {Footer, showModal, setShowModal} = useFooter()

  return (
    <div className="App">

      <Title title="Events" subtitle="LOLLOL" />

      {Main}

      {Footer}

      <Modal showModal={showModal} setShowModal={setShowModal} addEvent={addEvent} />

    </div>
  )
}