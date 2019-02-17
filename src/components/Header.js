import React from 'react'
import '../App.css';

export default function Header() {
  return (
    <div>
       <table className="logoBlock">
          <tbody>
            <tr>
              <td>
                <img width="50"  src="primary-green.svg" alt="logo"/>
              </td>
              <td>
                <h2>Movie app</h2> 
              </td>
            </tr>
          </tbody>
        </table>
    </div>
  )
}
