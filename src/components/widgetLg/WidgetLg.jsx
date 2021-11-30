import './widgetLg.css'
import { Visibility } from '@material-ui/icons';

export default function WidgetLg() {
    const Button = ({ type }) => {
        return (
          <button className={`widgetLgButton ${type}`}>
            <Visibility className='widgetLgIcon' />
            {type}
          </button>
        );
    };

    return (
      <div className='widgetLg'>
        <h3 className='widgetLgTitle'>Daily app usage time per user</h3>
        <table className='widgetLgTable'>
          <tr className='widgetLgTr'>
            <th className='widgetLgTh'>User</th>
            <th className='widgetLgTh'>Date</th>
            <th className='widgetLgTh'>Time Spent</th>
            <th className='widgetLgTh'>Details</th>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.unsplash.com/photo-1604426633861-11b2faead63c?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=464&q=80'
                alt=''
                className='widgetLgImage'
              />
              <span className='widgetLgName'>Arya Najib</span>
            </td>
            <td className='widgetLgDate'>25 Nov 2021</td>
            <td className='widgetLgTime'>59m 30s</td>
            <td className='widgetLgDetails'>
              <Button type='Display' />
            </td>
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.unsplash.com/photo-1546456073-92b9f0a8d413?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=387&q=80'
                alt=''
                className='widgetLgImage'
              />
              <span className='widgetLgName'>Ben Storm</span>
            </td>
            <td className='widgetLgDate'>25 Nov 2021</td>
            <td className='widgetLgTime'>50m 30s</td>
            <Button type='Display' />
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.unsplash.com/photo-1509967419530-da38b4704bc6?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=895&q=80'
                alt=''
                className='widgetLgImage'
              />
              <span className='widgetLgName'>Anna May</span>
            </td>
            <td className='widgetLgDate'>25 Nov 2021</td>
            <td className='widgetLgTime'>33m 19s</td>
            <Button type='Display' />
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80'
                alt=''
                className='widgetLgImage'
              />
              <span className='widgetLgName'>Nikki Price</span>
            </td>
            <td className='widgetLgDate'>25 Nov 2021</td>
            <td className='widgetLgTime'>32m 30s</td>
            <Button type='Display' />
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80'
                alt=''
                className='widgetLgImage'
              />
              <span className='widgetLgName'>Jane Doe</span>
            </td>
            <td className='widgetLgDate'>25 Nov 2021</td>
            <td className='widgetLgTime'>29m 21s</td>
            <Button type='Display' />
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80'
                alt=''
                className='widgetLgImage'
              />
              <span className='widgetLgName'>Tracy Depp</span>
            </td>
            <td className='widgetLgDate'>25 Nov 2021</td>
            <td className='widgetLgTime'>26m 30s</td>
            <Button type='Display' />
          </tr>
          <tr className='widgetLgTr'>
            <td className='widgetLgUser'>
              <img
                src='https://images.unsplash.com/photo-1580489944761-15a19d654956?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=461&q=80'
                alt=''
                className='widgetLgImage'
              />
              <span className='widgetLgName'>Viola Lake</span>
            </td>
            <td className='widgetLgDate'>25 Nov 2021</td>
            <td className='widgetLgTime'>20m 45s</td>
            <Button type='Display' />
          </tr>
        </table>
      </div>
    );
}
