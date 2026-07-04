import "./Widgetlg.css";
import { transactions } from "../../datas";

export default function Widgetlg() {
  const Button = ({ type }) => {
    return <button className={`Widgetlgbtn ${type}`}>{type}</button>;
  };

  return (
    <div className="Widgetlg">
      <div className="Widgetlgheader">
        <div>
          <h3 className="Widgetlgtitle">Latest Transactions</h3>
          <p className="Widgetlgsubtitle">Recent customer transactions</p>
        </div>

        <button type="button" className="Widgetlgviewbtn">
          View All
        </button>
      </div>

      <div className="Widgetlgtablewrapper">
        <table className="Widgetlgtable">
          <thead>
            <tr className="Widgetlgtr">
              <th className="Widgetlgth">Customer</th>
              <th className="Widgetlgth">Date</th>
              <th className="Widgetlgth">Amount</th>
              <th className="Widgetlgth">Status</th>
            </tr>
          </thead>

          <tbody>
            {transactions.map((transaction) => (
              <tr key={transaction.id} className="Widgetlgtr">
                <td className="Widgetlguser">
                  <img
                    src={transaction.img}
                    className="Widgetlgimg"
                    alt={transaction.username}
                  />

                  <span className="Widgetlgname">{transaction.username}</span>
                </td>

                <td className="Widgetlgdate">{transaction.date}</td>

                <td className="Widgetlgamount">{transaction.amount}</td>

                <td className="Widgetlgstatus">
                  <Button type={transaction.stauts} />
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
