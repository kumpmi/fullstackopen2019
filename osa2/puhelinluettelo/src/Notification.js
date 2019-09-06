import React from 'react'

const Notification = ({ message }) => {
  
  console.log('Notification',message)
  
  if (message === null) {
      return null
    }

    console.log(message)
  
    return (
      <div className={message.type}>
        {message.string}
      </div>
    ) 

  
  }

 export default Notification 