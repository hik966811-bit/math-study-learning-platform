import React, { useState } from 'react';
import { BookOpen, Search, CheckCircle2, ShieldCheck } from 'lucide-react';
import { sound } from '../../utils/audio';

interface StealthOverlayProps {
  isActive: boolean;
  onDeactivate: () => void;
}

export const StealthOverlay: React.FC<StealthOverlayProps> = ({ isActive, onDeactivate }) => {
  const [tab, setTab] = useState<'notes' | 'wiki' | 'calc'>('notes');
  const [calcInput, setCalcInput] = useState<string>('');
  const [calcResult, setCalcResult] = useState<string>('');

  if (!isActive) return null;

  const handleExit = () => {
    sound.playClick();
    onDeactivate();
  };

  const handleCalcBtn = (val: string) => {
    if (val === 'C') {
      setCalcInput('');
      setCalcResult('');
    } else if (val === '=') {
      try {
        const sanitized = calcInput.replace(/[^0-9+\-*/.]/g, '');
        // eslint-disable-next-line no-eval
        const res = Function(`'use strict'; return (${sanitized})`)();
        setCalcResult(String(res));
      } catch {
        setCalcResult('Ошибка');
      }
    } else {
      setCalcInput((prev) => prev + val);
    }
  };

  return (
    <div className="fixed inset-0 z-50 bg-white text-slate-800 flex flex-col font-sans select-text">
      {/* Top Academic Header */}
      <header className="bg-slate-100 border-b border-slate-300 px-6 py-3 flex items-center justify-between shadow-sm">
        <div className="flex items-center gap-3">
          <div className="w-8 h-8 rounded bg-blue-600 flex items-center justify-center text-white">
            <BookOpen className="w-5 h-5" />
          </div>
          <div>
            <h1 className="text-sm font-semibold text-slate-900 leading-none">
              Электронная База Знаний • Материалы к урокам
            </h1>
            <span className="text-xs text-slate-500">Информатика и Основы Алгоритмизации (10–11 классы)</span>
          </div>
        </div>

        <div className="flex items-center gap-3">
          <div className="flex items-center gap-1 bg-slate-200/80 p-1 rounded-lg text-xs font-medium text-slate-700">
            <button
              onClick={() => setTab('notes')}
              className={`px-3 py-1 rounded transition-colors ${tab === 'notes' ? 'bg-white shadow-sm font-semibold text-blue-700' : 'hover:bg-slate-300'}`}
            >
              Конспект урока
            </button>
            <button
              onClick={() => setTab('wiki')}
              className={`px-3 py-1 rounded transition-colors ${tab === 'wiki' ? 'bg-white shadow-sm font-semibold text-blue-700' : 'hover:bg-slate-300'}`}
            >
              Справочник терминов
            </button>
            <button
              onClick={() => setTab('calc')}
              className={`px-3 py-1 rounded transition-colors ${tab === 'calc' ? 'bg-white shadow-sm font-semibold text-blue-700' : 'hover:bg-slate-300'}`}
            >
              Научный калькулятор
            </button>
          </div>

          <button
            onClick={handleExit}
            title="Нажмите ESC или эту кнопку для возврата"
            className="flex items-center gap-1.5 px-3 py-1.5 bg-slate-200 hover:bg-slate-300 text-slate-600 rounded-lg text-xs transition-colors"
          >
            <ShieldCheck className="w-4 h-4 text-emerald-600" />
            <span>Вернуться (ESC)</span>
          </button>
        </div>
      </header>

      {/* Main Content Area */}
      <main className="flex-1 overflow-y-auto p-8 max-w-5xl mx-auto w-full">
        {tab === 'notes' && (
          <div className="space-y-6">
            <div className="border-b border-slate-200 pb-4">
              <span className="text-xs font-bold uppercase tracking-wider text-blue-600">Тема 4.2</span>
              <h2 className="text-2xl font-bold text-slate-900 mt-1">
                Архитектура современных вычислительных систем и графических конвейеров
              </h2>
              <p className="text-sm text-slate-500 mt-1">Дата обновления: 25 августа 2026 г. • Автор: Методический отдел</p>
            </div>

            <article className="prose prose-slate max-w-none text-sm leading-relaxed text-slate-700 space-y-4">
              <p>
                <strong>Графический процессор (GPU)</strong> представляет собой специализированную интегральную схему, оптимизированную для параллельного выполнения математических операций, необходимых для растеризации трехмерных объектов, обработки шейдеров и визуализации двумерных спрайтов на экранах высокого разрешения.
              </p>

              <div className="bg-blue-50 border-l-4 border-blue-500 p-4 rounded-r-lg">
                <h4 className="font-semibold text-blue-900 mb-1">Основные этапы графического конвейера (Rendering Pipeline):</h4>
                <ul className="list-disc list-inside space-y-1 text-blue-800">
                  <li><strong>Сборка вершин (Vertex Assembly)</strong> — преобразование локальных координат полигонов в мировое пространство;</li>
                  <li><strong>Вершинный шейдер (Vertex Shader)</strong> — вычисление позиций вершин и матричных трансформаций;</li>
                  <li><strong>Растеризация (Rasterization)</strong> — перевод непрерывных геометрических примитивов в дискретную сетку пикселей (фрагментов);</li>
                  <li><strong>Фрагментный/Пиксельный шейдер (Pixel Shader)</strong> — расчет итогового цвета, освещения, отражений и текстурирования;</li>
                  <li><strong>Смешивание и вывод (Frame Buffer Blending)</strong> — запись готового кадра в видеопамять (VRAM).</li>
                </ul>
              </div>

              <h3 className="text-lg font-bold text-slate-900 pt-2">Контрольные вопросы для самопроверки:</h3>
              <div className="space-y-2">
                <div className="flex items-start gap-2 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900">Вопрос 1:</span> В чем ключевое отличие архитектуры SIMD от MIMD при параллельных вычислениях?
                  </div>
                </div>
                <div className="flex items-start gap-2 p-3 bg-slate-50 border border-slate-200 rounded-lg">
                  <CheckCircle2 className="w-5 h-5 text-emerald-500 shrink-0 mt-0.5" />
                  <div>
                    <span className="font-medium text-slate-900">Вопрос 2:</span> Каким образом буфер глубины (Z-Buffer) решает проблему видимости перекрывающихся полигонов?
                  </div>
                </div>
              </div>
            </article>
          </div>
        )}

        {tab === 'wiki' && (
          <div className="space-y-4">
            <div className="relative">
              <Search className="w-4 h-4 text-slate-400 absolute left-3 top-3" />
              <input
                type="text"
                placeholder="Поиск по терминам..."
                className="w-full pl-9 pr-4 py-2 bg-slate-100 border border-slate-300 rounded-lg text-sm text-slate-800 focus:outline-none focus:border-blue-500"
              />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4 pt-2">
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-900">Алгоритм Дейкстры</h3>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  Алгоритм поиска кратчайших путей во взвешенном графе с неотрицательными весами ребер от одной из вершин до всех остальных.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-900">Сложность O(N log N)</h3>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  Квазилинейная временная сложность, характерная для эффективных алгоритмов сортировки.
                </p>
              </div>
              <div className="p-4 bg-slate-50 border border-slate-200 rounded-lg">
                <h3 className="font-bold text-slate-900">Двоичное дерево поиска (BST)</h3>
                <p className="text-xs text-slate-600 mt-1 leading-normal">
                  Иерархическая структура данных, в которой левое поддерево содержит значения меньше корня, а правое — больше или равные.
                </p>
              </div>
            </div>
          </div>
        )}

        {tab === 'calc' && (
          <div className="max-w-xs mx-auto bg-slate-100 p-4 border border-slate-300 rounded-2xl shadow-md">
            <div className="bg-white p-3 border border-slate-300 rounded-xl mb-3 text-right">
              <div className="text-xs text-slate-400 font-mono h-4">{calcInput || '0'}</div>
              <div className="text-xl font-bold font-mono text-slate-800 h-7">{calcResult || calcInput || '0'}</div>
            </div>
            <div className="grid grid-cols-4 gap-2 text-sm font-semibold">
              {['C', '(', ')', '/', '7', '8', '9', '*', '4', '5', '6', '-', '1', '2', '3', '+', '0', '.', '%', '='].map((btn) => (
                <button
                  key={btn}
                  onClick={() => handleCalcBtn(btn)}
                  className={`p-3 rounded-lg border transition-colors ${
                    btn === '='
                      ? 'bg-blue-600 text-white border-blue-700 col-span-1'
                      : btn === 'C'
                      ? 'bg-rose-100 text-rose-700 border-rose-200'
                      : 'bg-white hover:bg-slate-200 border-slate-300 text-slate-800'
                  }`}
                >
                  {btn}
                </button>
              ))}
            </div>
          </div>
        )}
      </main>

      <footer className="bg-slate-100 border-t border-slate-300 px-6 py-2 flex items-center justify-between text-xs text-slate-500">
        <span>Федеральный образовательный портал</span>
        <span>Нажмите ESC для закрытия</span>
      </footer>
    </div>
  );
};
