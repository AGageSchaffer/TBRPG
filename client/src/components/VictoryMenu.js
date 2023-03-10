function VictoryMenu({handleBattleVictory}) {
    return (
        <div id='victory-menu'>
            <h1>VICTORY!</h1>
            <button className='button' onClick={handleBattleVictory}>Back To Hub</button>
        </div>
    )
}

export default VictoryMenu;