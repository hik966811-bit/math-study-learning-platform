import React, { useState, useEffect, useCallback } from 'react';
import { RotateCcw, Undo2, ArrowUp, ArrowLeft, ArrowDown, ArrowRight } from 'lucide-react';
import { sound } from '../../../utils/audio';

interface Cyber2048Props {
  onGameOver: (score: number) => void;
  onScoreUpdate?: (score: number) => void;
}

type Board = number[][];

export const Cyber2048: React.FC<Cyber2048Props> = ({ onGameOver, onScoreUpdate }) => {
  const [board, setBoard] = useState<Board>([
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
    [0, 0, 0, 0],
  ]);
  const [score, setScore] = useState<number>(0);
  const [bestScore, setBestScore] = useState<number>(0);
  const [history, setHistory] = useState<{ board: Board; score: number } | null>(null);
  const [gameOver, setGameOver] = useState<boolean>(false);
  const [won, setWon] = useState<boolean>(false);

  const addRandomTile = (currentBoard: Board): Board => {
    const emptyCells: Array<{ r: number; c: number }> = [];
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (currentBoard[r][c] === 0) {
          emptyCells.push({ r, c });
        }
      }
    }
    if (emptyCells.length === 0) return currentBoard;

    const { r, c } = emptyCells[Math.floor(Math.random() * emptyCells.length)];
    const newBoard = currentBoard.map((row) => [...row]);
    newBoard[r][c] = Math.random() < 0.9 ? 2 : 4;
    return newBoard;
  };

  const initGame = useCallback(() => {
    let newBoard: Board = [
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
      [0, 0, 0, 0],
    ];
    newBoard = addRandomTile(newBoard);
    newBoard = addRandomTile(newBoard);
    setBoard(newBoard);
    setScore(0);
    setHistory(null);
    setGameOver(false);
    setWon(false);
    sound.playClick();
  }, []);

  useEffect(() => {
    initGame();
  }, [initGame]);

  const checkGameOver = (b: Board): boolean => {
    for (let r = 0; r < 4; r++) {
      for (let c = 0; c < 4; c++) {
        if (b[r][c] === 0) return false;
        if (r < 3 && b[r][c] === b[r + 1][c]) return false;
        if (c < 3 && b[r][c] === b[r][c + 1]) return false;
      }
    }
    return true;
  };

  const slideRow = (row: number[]): { newRow: number[]; gained: number } => {
    let arr = row.filter((val) => val !== 0);
    let gained = 0;
    for (let i = 0; i < arr.length - 1; i++) {
      if (arr[i] === arr[i + 1]) {
        arr[i] *= 2;
        gained += arr[i];
        arr[i + 1] = 0;
      }
    }
    arr = arr.filter((val) => val !== 0);
    while (arr.length < 4) {
      arr.push(0);
    }
    return { newRow: arr, gained };
  };

  const move = useCallback(
    (direction: 'left' | 'right' | 'up' | 'down') => {
      if (gameOver) return;

      let gainedTotal = 0;
      let rotated = board.map((row) => [...row]);

      const prevBoard = board.map((row) => [...row]);
      const prevScore = score;

      if (direction === 'up' || direction === 'down') {
        rotated = rotated[0].map((_, colIndex) => rotated.map((row) => row[colIndex]));
      }

      if (direction === 'right' || direction === 'down') {
        rotated = rotated.map((row) => row.reverse());
      }

      let changed = false;
      const newGrid = rotated.map((row) => {
        const { newRow, gained } = slideRow(row);
        gainedTotal += gained;
        if (JSON.stringify(newRow) !== JSON.stringify(row)) changed = true;
        return newRow;
      });

      let finalBoard = newGrid;
      if (direction === 'right' || direction === 'down') {
        finalBoard = finalBoard.map((row) => row.reverse());
      }
      if (direction === 'up' || direction === 'down') {
        finalBoard = finalBoard[0].map((_, colIndex) => finalBoard.map((row) => row[colIndex]));
      }

      if (changed) {
        sound.playHover();
        if (gainedTotal > 0) {
          sound.playCoin();
        }

        const withNewTile = addRandomTile(finalBoard);
        const newScore = score + gainedTotal;
        setHistory({ board: prevBoard, score: prevScore });
        setBoard(withNewTile);
        setScore(newScore);
        setBestScore((prev) => Math.max(prev, newScore));
        onScoreUpdate?.(newScore);

        if (!won && withNewTile.some((row) => row.some((val) => val >= 2048))) {
          sound.playLevelUp();
          setWon(true);
        }

        if (checkGameOver(withNewTile)) {
          sound.playGameOver();
          setGameOver(true);
          onGameOver(newScore);
        }
      }
    },
    [board, score, gameOver, won, onGameOver, onScoreUpdate]
  );

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (['ArrowLeft', 'KeyA'].includes(e.code)) {
        e.preventDefault();
        move('left');
      } else if (['ArrowRight', 'KeyD'].includes(e.code)) {
        e.preventDefault();
        move('right');
      } else if (['ArrowUp', 'KeyW'].includes(e.code)) {
        e.preventDefault();
        move('up');
      } else if (['ArrowDown', 'KeyS'].includes(e.code)) {
        e.preventDefault();
        move('down');
      } else if (e.code === 'KeyU') {
        handleUndo();
      } else if (e.code === 'KeyR') {
        initGame();
      }
    };

    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [move, initGame]);

  const handleUndo = () => {
    if (history) {
      setBoard(history.board);
      setScore(history.score);
      setHistory(null);
      setGameOver(false);
      sound.playClick();
    }
  };

  const getTileStyle = (val: number) => {
    switch (val) {
      case 2:
        return 'bg-blue-950 text-blue-200 border-blue-800';
      case 4:
        return 'bg-blue-900 text-blue-100 border-blue-700';
      case 8:
        return 'bg-indigo-900 text-white border-indigo-700';
      case 16:
        return 'bg-indigo-800 text-white border-indigo-600';
      case 32:
        return 'bg-blue-700 text-white border-blue-500 font-bold';
      case 64:
        return 'bg-blue-600 text-white border-blue-400 font-bold';
      case 128:
        return 'bg-sky-600 text-white border-sky-400 font-bold';
      case 256:
        return 'bg-sky-500 text-slate-950 border-sky-300 font-extrabold';
      case 512:
        return 'bg-teal-500 text-slate-950 border-teal-300 font-extrabold';
      case 1024:
        return 'bg-emerald-500 text-slate-950 border-emerald-300 font-black';
      case 2048:
        return 'bg-white text-blue-900 border-white font-black shadow-lg';
      default:
        return 'bg-white/[0.04] text-slate-700 border-white/5';
    }
  };

  return (
    <div className="flex flex-col items-center justify-center w-full max-w-md mx-auto p-4 select-none">
      {/* Top Bar */}
      <div className="flex items-center justify-between w-full mb-4">
        <div>
          <h2 className="text-xl font-bold text-white">2048</h2>
          <span className="text-xs text-slate-400">Соединяйте одинаковые числа</span>
        </div>
        <div className="flex gap-2">
          <div className="bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 text-center">
            <span className="text-[10px] text-blue-300 font-mono block">ОЧКИ</span>
            <span className="text-base font-bold font-mono text-white">{score}</span>
          </div>
          <div className="bg-white/5 px-3 py-1.5 rounded-xl border border-white/10 text-center">
            <span className="text-[10px] text-slate-400 font-mono block">РЕКОРД</span>
            <span className="text-base font-bold font-mono text-slate-200">{bestScore}</span>
          </div>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="flex justify-between w-full mb-4">
        <button
          onClick={handleUndo}
          disabled={!history}
          className={`flex items-center gap-1.5 px-3 py-1.5 rounded-xl text-xs font-semibold border transition-all ${
            history
              ? 'bg-white/10 border-white/20 text-white hover:bg-white/20'
              : 'bg-white/[0.02] border-white/5 text-slate-600 cursor-not-allowed'
          }`}
        >
          <Undo2 className="w-3.5 h-3.5" /> Отмена (U)
        </button>
        <button
          onClick={initGame}
          className="flex items-center gap-1.5 px-3 py-1.5 bg-white/10 hover:bg-white/20 border border-white/15 text-white rounded-xl text-xs font-semibold transition-all"
        >
          <RotateCcw className="w-3.5 h-3.5" /> Заново (R)
        </button>
      </div>

      {/* 2048 Grid */}
      <div className="relative w-full aspect-square bg-slate-950/90 rounded-2xl p-3 border border-white/10 shadow-2xl grid grid-cols-4 grid-rows-4 gap-2.5">
        {board.map((row, r) =>
          row.map((val, c) => (
            <div
              key={`${r}-${c}`}
              className={`flex items-center justify-center rounded-xl border text-xl sm:text-2xl font-mono transition-all duration-150 transform ${getTileStyle(
                val
              )}`}
            >
              {val !== 0 && val}
            </div>
          ))
        )}

        {/* Game Over */}
        {gameOver && (
          <div className="absolute inset-0 bg-black/85 backdrop-blur-md rounded-2xl flex flex-col items-center justify-center p-6 text-center z-10 animate-fade-in">
            <h3 className="text-2xl font-bold text-white mb-2">ХОДОВ БОЛЬШЕ НЕТ</h3>
            <p className="text-sm text-slate-300 mb-4">
              Итоговый счет: <span className="text-blue-400 font-bold font-mono">{score}</span>
            </p>
            <button
              onClick={initGame}
              className="px-6 py-2.5 bg-blue-600 hover:bg-blue-500 text-white font-bold text-xs rounded-xl shadow-lg transition-all"
            >
              Сыграть Снова
            </button>
          </div>
        )}
      </div>

      {/* Mobile Swipe Buttons */}
      <div className="grid grid-cols-3 gap-2 mt-4 w-full max-w-[220px] sm:hidden">
        <div />
        <button
          onClick={() => move('up')}
          className="p-2.5 bg-white/10 border border-white/10 text-white rounded-xl flex items-center justify-center"
        >
          <ArrowUp className="w-4 h-4" />
        </button>
        <div />
        <button
          onClick={() => move('left')}
          className="p-2.5 bg-white/10 border border-white/10 text-white rounded-xl flex items-center justify-center"
        >
          <ArrowLeft className="w-4 h-4" />
        </button>
        <button
          onClick={() => move('down')}
          className="p-2.5 bg-white/10 border border-white/10 text-white rounded-xl flex items-center justify-center"
        >
          <ArrowDown className="w-4 h-4" />
        </button>
        <button
          onClick={() => move('right')}
          className="p-2.5 bg-white/10 border border-white/10 text-white rounded-xl flex items-center justify-center"
        >
          <ArrowRight className="w-4 h-4" />
        </button>
      </div>
    </div>
  );
};
