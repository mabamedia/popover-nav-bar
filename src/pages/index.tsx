export default function Home() {
  return (
    <>
      <div></div>

      <div
        popover="auto"
        id="menu"
        className="ring-[1px] ring-[rgba(255,255,255,0.2)] ring-inset"
      >
        <div className="content">
          <div className="content__content"></div>

          <ul aria-hidden="true">
            <li style={{ "--i": 0 }}>Logo</li>
            <li style={{ "--i": 1 }}>Menu</li>
          </ul>
        </div>
      </div>

      <div id="cta">
        <nav className="nav ring-[1px] ring-[rgba(255,255,255,0.2)] ring-inset">
          <ul>
            <li>Logo</li>

            <li>
              <button popoverTarget="menu" popoverTargetAction="toggle">
                Menu
              </button>
            </li>
          </ul>
        </nav>
      </div>
    </>
  );
}
