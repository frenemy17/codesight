import React from 'react'
import { FileCard } from './FileCard';
import codeMeta from '@/data/codeMeta.json';
import { calculateStressScore, normalizeScore } from '@/lib/stressUtils';

function Filegrid() {
  return (
    <div className="w-full py-12 px-4 sm:px-8 md:px-12 lg:px-20 xl:px-32 bg-gradient-to-b from-zinc-950 to-zinc-900">
    <h2 className="text-3xl font-bold text-white mb-8 text-center tracking-tight">
      Your Code File Stress Grid
    </h2>
  
    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
      {codeMeta.map((file, index) => (
        <FileCard
          key={index}
          fileName={file.fileName}
          edits={file.edits}
          bugs={file.bugs}
          todos={file.todos}
          lintErrors={file.lintErrors}
          score={normalizeScore(calculateStressScore(file))
            
          }
        />
      ))}
    </div>
  </div>
  )
}

export default Filegrid
