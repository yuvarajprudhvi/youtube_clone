import { create } from 'zustand';

interface AppState {
  sidebarOpen: boolean;
  searchQuery: string;
  currentVideo: string | null;
  toggleSidebar: () => void;
  setSearchQuery: (query: string) => void;
  setCurrentVideo: (videoId: string | null) => void;
}

export const useStore = create<AppState>((set) => ({
  sidebarOpen: true,
  searchQuery: '',
  currentVideo: null,
  toggleSidebar: () => set((state) => ({ sidebarOpen: !state.sidebarOpen })),
  setSearchQuery: (query) => set({ searchQuery: query }),
  setCurrentVideo: (videoId) => set({ currentVideo: videoId }),
}));