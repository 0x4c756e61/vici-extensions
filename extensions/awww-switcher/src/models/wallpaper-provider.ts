import { ImageLike, WindowManagement as wm } from "@vicinae/api";

export interface WallpaperProviderMetadata {
  name: string;
  icon: ImageLike;
  id: string;
}

export interface WallpaperProvider {
  setWallpaper(path: string, monitor?: wm.Screen): Promise<void>;
  serverIsRunning(): boolean;
}
