import React from 'react'

function RedirectPayment() {
  return (
    <>
      
    <h1>You're all set!</h1>
    <div className="card">
    <a href="fulfill://PaymentComplete">
        Back to app
      </a>
      
    </div>
   
  </>
  )
}

export default RedirectPayment