import "./DesktopBar.css";

export default function DesktopBar() {

    return (
        <div className='desktop-top-bar'>
            <a href='/' >Home</a>
            <a href='/trade-history' >Trade History</a>
            <a href='#'>CRA Investors  </a>
            <a href='#'>Impact Investors  </a>
            <a href='#'>Contact Us  </a>
        </div>
    )
}