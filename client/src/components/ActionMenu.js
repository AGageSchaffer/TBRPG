function ActionMenu({attacker}) {
    return (
        <div id='action-menu'>
            <button id='attack' onClick={() => console.log(attacker)}>Attack</button>
        </div>
    )
}

export default ActionMenu;