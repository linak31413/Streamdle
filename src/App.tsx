import { useMemo, useState } from 'react'
import { games, getPositivePercentage, roundPairs, type Game } from './data/games'

type Mode = 'daily' | 'random'

function makeRandomPairs(): [number, number][] {
  const available = [...games.keys()]
  for (let index = available.length - 1; index > 0; index -= 1) {
    const swapIndex = Math.floor(Math.random() * (index + 1))
    ;[available[index], available[swapIndex]] = [available[swapIndex], available[index]]
  }

  const pairs: [number, number][] = []
  while (available.length > 0) {
    const first = available.shift()!
    const firstRating = getPositivePercentage(games[first])
    const partnerIndex = available.findIndex((candidate) => getPositivePercentage(games[candidate]) !== firstRating)
    if (partnerIndex < 0) return makeRandomPairs()
    pairs.push([first, available.splice(partnerIndex, 1)[0]])
  }
  return pairs
}

function getTodayLabel() {
  return new Intl.DateTimeFormat('en-US', { month: 'long', day: 'numeric', year: 'numeric' }).format(new Date())
}

function BrandMark() {
  return (
    <a className="brand" href="#home" aria-label="Steamdle home">
      <span className="brand-icon" aria-hidden="true"><span /><span /><span /></span>
      <span>steam<span className="brand-accent">dle</span></span>
    </a>
  )
}

function GameCard({ game, side, selected, correct, revealed, onChoose }: {
  game: Game
  side: 'left' | 'right'
  selected: boolean
  correct: boolean
  revealed: boolean
  onChoose: () => void
}) {
  return (
    <article className={`game-card ${selected ? (correct ? 'is-correct' : 'is-wrong') : ''} ${revealed && correct ? 'has-answer' : ''}`}>
      <div className="card-topline">
        <span className="side-label">{side === 'left' ? 'A' : 'B'} <span className="side-rule" /></span>
        <span className="genre-tag">{game.subtitle.split(' · ')[0]}</span>
      </div>
      <div className="artwork-wrap" style={{ '--game-accent': game.accent } as React.CSSProperties}>
        <img className="game-artwork" src={game.artwork} alt={`${game.title} artwork`} />
        <div className="artwork-shade" />
        <span className="artwork-stamp">STEAM STORE <span>↗</span></span>
        <div className="game-heading">
          <span className="game-kicker">{game.subtitle}</span>
          <h2>{game.title}</h2>
        </div>
        <span className="artwork-corner" aria-hidden="true">✳</span>
      </div>
      <div className="game-meta">
        <div><span className="meta-label">CURRENT PRICE</span><strong>{game.price}</strong></div>
        {revealed ? <div className="review-result"><span className="meta-label">POSITIVE REVIEWS</span><strong>{getPositivePercentage(game).toFixed(1)}<small>%</small></strong></div> : <span className="mystery-mark">??<small>%</small></span>}
      </div>
      <div className="trailer" style={{ '--game-accent': game.accent } as React.CSSProperties}>
        <span className="trailer-play" aria-hidden="true">▶</span>
        <span className="trailer-copy"><span className="meta-label">IN THE SPOTLIGHT</span><span>{game.trailerLabel}</span></span>
        <span className="trailer-time">TRAILER <span>↗</span></span>
      </div>
      <button className="choose-button" onClick={onChoose} disabled={revealed} aria-label={`${game.title} 선택`}>
        {revealed ? <>{correct ? '정답이에요' : '선택한 게임'} <span>{correct ? '✓' : '—'}</span></> : <>이 게임 선택 <span>↗</span></>}
      </button>
    </article>
  )
}

function App() {
  const [mode, setMode] = useState<Mode>('daily')
  const [round, setRound] = useState(0)
  const [score, setScore] = useState(0)
  const [choice, setChoice] = useState<number | null>(null)
  const [randomPairs, setRandomPairs] = useState<[number, number][]>(makeRandomPairs)
  const [finished, setFinished] = useState(false)

  const pairs = mode === 'daily' ? roundPairs : randomPairs
  const [leftGame, rightGame] = useMemo(() => pairs[round].map((index) => games[index]) as [Game, Game], [pairs, round])
  const leftScore = getPositivePercentage(leftGame)
  const rightScore = getPositivePercentage(rightGame)
  const correctIndex = leftScore > rightScore ? 0 : 1

  const choose = (index: number) => {
    if (choice !== null) return
    setChoice(index)
    if (index === correctIndex) setScore((current) => current + 1)
  }

  const nextRound = () => {
    if (round === 9) setFinished(true)
    else {
      setRound((current) => current + 1)
      setChoice(null)
    }
  }

  const changeMode = (nextMode: Mode) => {
    if (nextMode === mode) return
    setMode(nextMode)
    setRound(0)
    setScore(0)
    setChoice(null)
    setFinished(false)
    if (nextMode === 'random') setRandomPairs(makeRandomPairs())
  }

  const replay = () => {
    setRound(0)
    setScore(0)
    setChoice(null)
    setFinished(false)
    if (mode === 'random') setRandomPairs(makeRandomPairs())
  }

  return (
    <main className="app-shell" id="home">
      <div className="ambient ambient-one" /><div className="ambient ambient-two" />
      <header className="site-header">
        <BrandMark />
        <div className="header-right">
          <span className="edition-label"><span className="live-dot" /> DAILY EDITION <i>·</i> {getTodayLabel()}</span>
          <span className="avatar-mark">S<span>.</span></span>
        </div>
      </header>

      <section className="game-shell">
        <div className="intro-row">
          <div className="intro-copy">
            <span className="eyebrow"><span className="eyebrow-star">✳</span> THE STEAM REVIEW GAME</span>
            <h1>Which game gets<br />the <em>better reviews?</em></h1>
            <p>두 게임 중 더 높은 평가를 받은 게임을 골라보세요.</p>
          </div>
          <div className="mode-picker" aria-label="게임 모드 선택">
            <button className={mode === 'daily' ? 'active' : ''} onClick={() => changeMode('daily')}><span className="mode-glyph">◷</span> Daily</button>
            <button className={mode === 'random' ? 'active' : ''} onClick={() => changeMode('random')}><span className="mode-glyph">⤨</span> Random</button>
          </div>
        </div>

        <section className="round-panel" aria-label="라운드 진행 상황">
          <div className="round-caption"><span>YOUR RUN</span><strong>{finished ? '10' : String(round + 1).padStart(2, '0')}<i> / 10</i></strong></div>
          <div className="round-track">{Array.from({ length: 10 }, (_, index) => <span key={index} className={`round-segment ${index < round ? 'complete' : ''} ${index === round && !finished ? 'current' : ''} ${index < round && choice !== null && index === round - 1 ? 'last-round' : ''}`} />)}</div>
          <div className="score-caption"><span>SCORE</span><strong>{score}<i> PTS</i></strong></div>
        </section>

        {finished ? (
          <section className="finish-panel">
            <span className="eyebrow"><span className="eyebrow-star">✳</span> RUN COMPLETE</span>
            <div className="finish-score">{score}<span> / 10</span></div>
            <h2>{score >= 8 ? 'You know your games.' : score >= 5 ? 'A solid run.' : 'One more round?'}</h2>
            <p>{mode === 'daily' ? '오늘의 데일리 챌린지를 마쳤어요.' : '랜덤 챌린지를 마쳤어요.'}</p>
            <button className="primary-action" onClick={replay}>{mode === 'daily' ? '다시 플레이' : '새로운 랜덤 게임'} <span>↗</span></button>
          </section>
        ) : (
          <>
            <div className="duel-topline"><span><span className="live-dot" /> ROUND {String(round + 1).padStart(2, '0')} <i>/</i> 10</span><span className="duel-hint">평가가 더 좋은 게임은? <b>↑</b></span><span className="data-badge"><span /> COMMUNITY RATING</span></div>
            <div className="cards-grid">
              <GameCard game={leftGame} side="left" selected={choice === 0} correct={correctIndex === 0} revealed={choice !== null} onChoose={() => choose(0)} />
              <div className="versus"><span>VS</span><i /></div>
              <GameCard game={rightGame} side="right" selected={choice === 1} correct={correctIndex === 1} revealed={choice !== null} onChoose={() => choose(1)} />
            </div>
            {choice === null ? <div className="choose-prompt"><span>↖</span> PICK A SIDE <span>↗</span></div> : (
              <div className="answer-bar">
                <div><span className="answer-check">{choice === correctIndex ? '✓' : '!'}</span><span><strong>{choice === correctIndex ? '정답입니다!' : '아쉬워요, 다음에는 맞혀봐요.'}</strong><small>{games[choice === correctIndex ? (choice === 0 ? pairs[round][0] : pairs[round][1]) : pairs[round][correctIndex]].title} 의 평가가 더 높아요.</small></span></div>
                <button className="next-button" onClick={nextRound}>{round === 9 ? '결과 보기' : '다음 라운드'} <span>→</span></button>
              </div>
            )}
          </>
        )}
        <footer className="game-footer"><span>STEAMDLE <i>©</i> 2026</span><span>MADE FOR THE LOVE OF GAMES <b>✳</b></span><span>DATA IS FOR DEMO PURPOSES</span></footer>
      </section>
    </main>
  )
}

export default App
