"use client";
import { useEffect, useState } from "react";
import React from "react";
import {
  Dialog,
  DialogContent,
  DialogHeader,
  DialogTitle,
  DialogDescription,
} from "@/components/ui/dialog";
import { Button } from "@/components/ui/button";
import { normalizeScore } from "@/lib/stressUtils";
import { useFileStore } from "@/lib/store";

interface FileMeta {
  fileName: string;
  edits: number;
  bugs: number;
  todos: number;
  lintErrors: number;
  score: number;
}

export default function FileModal() {
  const { selectedFile, setSelectedFile } = useFileStore();
  const [insight, setInsight] = useState("");
  const [loading, setLoading] = useState(false);
  useEffect(() => {
    if (selectedFile) {
      setInsight("");
      fetchInsight(selectedFile);
    }
  }, [selectedFile]);

  if (!selectedFile) return null;

  const normalizedScore = normalizeScore(selectedFile.score);

  let riskLabel = "Low";
  if (normalizedScore > 70) riskLabel = "High";
  else if (normalizedScore > 40) riskLabel = "Moderate";

  async function fetchInsight(file: FileMeta) {
    setLoading(true);
    try {
      const res = await fetch("/api/insight", {
        method: "POST",
        headers: { "Content-Type": "application/json" },
        body: JSON.stringify(file),
      });

      const data = await res.json();
      setInsight(data.insight || "No insight available.");
    } catch (err) {
      setInsight("Error fetching insight.");
    } finally {
      setLoading(false);
    }
  }

 

  return (
    <Dialog open={!!selectedFile} onOpenChange={() => setSelectedFile(null)}>
      <DialogContent className="rounded-xl bg-zinc-900/90 backdrop-blur-md text-white shadow-2xl max-w-md mx-auto border border-zinc-700/40">
        <DialogHeader>
          <DialogTitle className="text-xl font-bold">{selectedFile.fileName}</DialogTitle>
          <DialogDescription className="text-sm text-zinc-400">
            File stress insights — {riskLabel} Risk
          </DialogDescription>
        </DialogHeader>

        <div className="space-y-2 text-sm text-zinc-300 font-mono mt-2">
          <p>📝 Edits: <span className="text-white">{selectedFile.edits}</span></p>
          <p>🐛 Bugs: <span className="text-white">{selectedFile.bugs}</span></p>
          <p>❗ TODOs: <span className="text-white">{selectedFile.todos}</span></p>
          <p>🧹 Lint Errors: <span className="text-white">{selectedFile.lintErrors}</span></p>
          <p>🔥 Score: <span className="text-white">{normalizedScore}</span></p>
        </div>

        <div className="mt-4 text-sm text-zinc-300">
          {loading ? (
            <p className="animate-pulse text-indigo-400">Generating insight...</p>
          ) : (
            <p>💡 Insight: <span className="text-white">{insight}</span></p>
          )}
        </div>

        <div className="pt-4 text-right">
          <Button variant="secondary" onClick={() => setSelectedFile(null)}>
            Close
          </Button>
        </div>
      </DialogContent>
    </Dialog>
  );
}
