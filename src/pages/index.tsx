export default function Home() {
  return (
    <>
      <div popover="auto" id="menu">
        <div className="content">
          <div className="content__content"></div>
          <ul aria-hidden="true">
            <li style={{ "--i": 0 }}>Logo</li>
            <li style={{ "--i": 1 }}>Menu</li>
          </ul>
        </div>
      </div>

      <nav className="nav">
        <ul>
          <li>Logo</li>

          <li>
            <button popoverTarget="menu" popoverTargetAction="toggle">
              Menu
            </button>
          </li>
        </ul>
      </nav>
    </>
  );
}
