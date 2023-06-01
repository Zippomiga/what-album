import './score-bar.css'
import { useContext } from 'react'
import { GameContext } from '../../context/GameContext'


export default function ScoreBar() {
  const { scoreBar } = useContext(GameContext)

  const scoreClass = point => (
    point === null ? 'empty' : point ? 'correct' : 'incorrect'
  )

  return (
    <footer className='score-bar'>
      {
        scoreBar?.map((score, i) => (
          <div className="score" key={i}>
            {score.image &&
              <img
                className='score-pic'
                src={score.image}
                alt=""
              />}
            <span
              className={'score-point ' + scoreClass(score.point)}
            />
          </div>
        ))
      }
    </footer>
  )
}