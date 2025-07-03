interface FileMeta {
    fileName: string;
    edits: number;
    bugs: number;
    todos: number;
    lintErrors: number;
  }
  
  export function calculateStressScore(file: FileMeta): number {
    return file.edits * 2 + file.bugs * 3 + file.todos * 1 + file.lintErrors * 1.5;
  }
  

  export function normalizeScore(score: number, maxScore = 100): number {
    return Math.min(100, Math.round((score / maxScore) * 100));
  }
  