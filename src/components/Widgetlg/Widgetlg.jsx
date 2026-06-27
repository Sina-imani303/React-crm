import React from 'react'
import "./Widgetlg.css"
 import { transactions } from '../../datas'
export default function Widgetlg() {
    const Button = ({type})=>{
        return <button className={'Widgetlgbtn ' + type}> {type}</button>
    }
  return (
    <div className='Widgetlg'>
       <h3 className="Widgetlgtitle">
        Latest TransActions
       </h3>
       <table className="Widgetlgtable">
        <tr className="Widgetlgtr">
           <th className="Widgetlgth">Customer</th> 
           <th className="Widgetlgth">Date</th> 
           <th className="Widgetlgth">Amount</th> 
           <th className="Widgetlgth">Status</th> 
        </tr>

         {transactions.map(transaction=>(
        <tr key={transaction.id} className="Widgetlgtr">
            <td className="Widgetlguser">
                <img src={transaction.img} className='Widgetlgimg' alt="" />
                <span className="Widgetlgname">{transaction.username}</span>
            </td>
            <td className="Widgetlgdate">
                 {transaction.date}
            </td>

            <td className="Widgetlgamount">
               {transaction.amount}
            </td>
            <td className="Widgetlgstauts">
               <Button type={transaction.stauts}/>
            </td>
        </tr>

         ))}
        
       </table>
    </div>
  )
}
