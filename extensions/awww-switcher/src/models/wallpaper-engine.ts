import { ImageLike, WindowManagement as wm } from "@vicinae/api";

export interface WallpaperEngineMetadata {
  name: string;
  icon: ImageLike;
  id: string;
}

export interface WallpaperEngine {
  setWallpaper(path: string, monitor?: wm.Screen): Promise<void>;
  serverIsRunning(): boolean;
}
