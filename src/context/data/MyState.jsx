import React from 'react'
import MyContext from './MyContext'

function MyState(props) {
    const state = {
        name: "Kulveer Singh",
        rollno: "7"
    }

  return (
    <MyContext.Provider value={state}>
      {props.children}
    </MyContext.Provider>
  )
}

export default MyState;

