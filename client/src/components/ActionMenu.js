function ActionMenu({attacker, target, onAttackSubmit, handleBattleDelete}) {

    const handleClick = () => {
        onAttackSubmit()
    }

    return (
        <div id='action-menu'>
            {target ? <h3>{target.name}</h3> : null}
            <button id='attack' onClick={handleClick} className='battle-button'>Attack</button>
            {attacker ? <h3>{attacker.name}</h3> : null}
        </div>
    )
}

export default ActionMenu;