import {create} from 'zustand';
type FileMeta = {
    fileName: string;
    edits: number;
    bugs: number;
    todos: number;
    lintErrors: number;
    score: number;
  };

interface FileState {
    selectedFile: FileMeta | null;
    setSelectedFile: (file: FileMeta | null) => void;
    isOpen: boolean;
    setIsOpen: (value: boolean) => void;

}

export const useFileStore = create<FileState>((set) => ({
    selectedFile: null,
    setSelectedFile: (file) => set({ selectedFile: file }),
    isOpen: false,
    setIsOpen: (value) => set({ isOpen: value }),
}));