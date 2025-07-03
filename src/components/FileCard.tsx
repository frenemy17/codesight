"use client";

import React from 'react';
import { useFileStore } from "@/lib/store";
import { motion } from "framer-motion";
import { Pencil, Bug, StickyNote, Brush } from "lucide-react";

import {
  Card,
  CardHeader,
  CardFooter,
  CardTitle,
  CardAction,
  CardDescription,
  CardContent,
} from "@/components/ui/card";

import { cn } from '@/lib/utils';

interface FileCardProps {
  fileName: string;
  edits: number;
  bugs: number;
  todos: number;
  lintErrors: number;
  score: number;
}

function getCardGlow(score: number): string {
  if (score >= 70) return "border-red-500/30 shadow-red-500/20";
  if (score >= 40) return "border-yellow-400/30 shadow-yellow-400/20";
  return "border-green-400/30 shadow-green-400/20";
}

export function FileCard({
  fileName,
  edits,
  bugs,
  todos,
  lintErrors,
  score,
}: FileCardProps) {
  const { setSelectedFile } = useFileStore();

  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      whileHover={{ scale: 1.015 }}
      transition={{
        duration: 0.5,
        type: "spring",
        stiffness: 12,
        damping: 80,
      }}
      className="relative"
    >
      <Card
        className={cn(
          "rounded-xl border bg-background/90 backdrop-blur-lg px-5 py-5 shadow-sm transition-all duration-300 hover:border-foreground/20 bg-gradient-to-br from-purple-800/1 to-purple-900/5",
          getCardGlow(score)
        )}
      >
        <CardHeader>
          <CardTitle className="text-base font-bold text-foreground text-gray-300 fontsize-20 bg-gradient-to-r from-zinc-100 to-zinc-900 bg-clip-text text-transparent">
            {fileName}
          </CardTitle>
          <CardDescription className="text-sm text-zinc-500 tracking-normal">
  Code Stress Overview
</CardDescription>
        </CardHeader>

        <CardContent className="mt-4 space-y-2 text-sm font-mono text-zinc-200">
  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Pencil size={14} strokeWidth={1.5} className="text-zinc-400" />
      <span className="font-semibold text-zinc-100">Edits</span>
    </div>
    <span className="font-medium text-white">{edits}</span>
  </div>

  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Bug size={14} strokeWidth={1.5} className="text-zinc-400" />
      <span className="font-semibold text-zinc-100">Bugs</span>
    </div>
    <span className="font-medium text-white">{bugs}</span>
  </div>

  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <StickyNote size={14} strokeWidth={1.5} className="text-zinc-400" />
      <span className="font-semibold text-zinc-100">TODOs</span>
    </div>
    <span className="font-medium text-white">{todos}</span>
  </div>

  <div className="flex justify-between items-center">
    <div className="flex items-center gap-2">
      <Brush size={14} strokeWidth={1.5} className="text-zinc-400" />
      <span className="font-semibold text-zinc-100">Lint</span>
    </div>
    <span className="font-medium text-white">{lintErrors}</span>
  </div>
</CardContent>

        <CardFooter className="mt-6 pt-4 border-t border-border flex items-center justify-between">
          <span className="text-xs text-muted-foreground font-medium text-zinc-300">
            Score: <span className="text-foreground text-gray-200">{score}</span>
          </span>
          <CardAction
            onClick={() => setSelectedFile({ fileName, edits, bugs, todos, lintErrors, score })}
            className="text-s font-medium text-brand hover:text-foreground transition-colors cursor-pointer text-zinc-400 hover:text-zinc-200"
          >
            View Details →
          </CardAction>
        </CardFooter>
      </Card>
    </motion.div>
  );
}

export default FileCard;
