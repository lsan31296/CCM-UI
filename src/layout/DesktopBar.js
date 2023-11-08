import "./DesktopBar.css";

export default function DesktopBar() {

    return (
        <div className='desktop-top-bar'>
            <a href='/' >Home</a>
            <a href='/trade-history' >Trade History</a>
            <a href='/performance'>Performance</a>
            <a href='/shareholders'>Shareholders</a>
        </div>
    )
}