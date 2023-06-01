import './win-or-lose.css'
import { useContext } from "react"
import { GameContext } from "../../context/GameContext"
import { Aux } from '../../data/game-functions'


export default function WinOrLose() {
  const { scoreBar, setScoreBar, initScore } = useContext(GameContext)

  const lose = {
    score: Aux.score(scoreBar, false, 3),
    sign: <span>Perdiste <br /> 😔</span>
  }
  const win = {
    score: Aux.score(scoreBar, true, 7),
    sign: <span>¡Ganaste! <br /> 😎</span>
  }

  function sign(str1, str2) {
    if (lose.score) { return str1 }
    if (win.score) { return str2 }
  }


  return (
    (lose.score || win.score) &&
    <div className='sign'>
      <div className={sign('message lose', 'message win')}>
        {sign(lose.sign, win.sign)}
        <button
          className='btn-win-lose'
          onClick={() => setScoreBar(initScore)}
        >
          Volver a Jugar
        </button>
      </div>
    </div>
  )
}