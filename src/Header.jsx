export default function Header() {
  return (
    <header>
      <a href="https://amaranoc.am">
        <img className="logo" src="logo.svg" alt="amaranoclogo" />
      </a>

      <nav className="allOptions">
        <a className="option1" href="https://amaranoc.am/am">Գլխավոր</a>
        <a className="option2" href="https://amaranoc.am/am/sales">Զեղչեր</a>
        <a className="option3" href="https://amaranoc.am/am/services">Ծառայություններ</a>
        <a className="option4" href="https://amaranoc.am/am/about-us">Մեր մասին</a>
      </nav>

      <div className="headerRightPlaceholder">
        <div className="mainIcons">
          <i className="fa-solid fa-globe"></i>
          <i className="fa fa-user" aria-hidden="true"></i>
        </div>

        <div className="inputPlaceholder">
          <input type="text" placeholder="Որոնում" className="inputToSearch" />
          <i className="fa fa-search" aria-hidden="true"></i>
        </div>
      </div>
    </header>
  )
}