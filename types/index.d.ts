// Types for node-neutralino package

export declare class NeutralinoApp {
  constructor(params: { url: string; windowOptions: WindowOptions });
  init(): void;
  close(): void;

  // ----------------- Native Methods -----------------

  exit(code?: number): Promise<void>;
  killProcess(): Promise<void>;
  getConfig(): Promise<any>;
  broadcast(event: string, data?: any): Promise<void>;
  readProcessInput(readAll?: boolean): Promise<string>;
  writeProcessOutput(data: string): Promise<void>;
  writeProcessError(data: string): Promise<void>;

  // ------------ clipboard ------------

  clipboard: {
    getFormat(): Promise<ClipboardFormat>;
    readText(): Promise<string>;
    readImage(): Promise<ClipboardImage | null>;
    writeText(data: string): Promise<void>;
    writeImage(image: ClipboardImage): Promise<void>;
    clear(): Promise<void>;
  };

  // ------------ computer ------------

  computer: {
    getMemoryInfo(): Promise<MemoryInfo>;
    getArch(): Promise<string>;
    getKernelInfo(): Promise<KernelInfo>;
    getOSInfo(): Promise<OSInfo>;
    getCPUInfo(): Promise<CPUInfo>;
    getDisplays(): Promise<Display[]>;
    getMousePosition(): Promise<MousePosition>;
  };

  // ------------ custom ------------

  custom: {
    getMethods(): Promise<string[]>;
  };

  // ------------ debug ------------

  debug: {
    log(message: string, type?: LoggerType): Promise<void>;
  };

  // ------------ events ------------

  events: {
    broadcast(event: string, data?: any): Promise<void>;
    on(event: string, handler: (ev: CustomEvent) => void): Promise<Response>;
    off(event: string, handler: (ev: CustomEvent) => void): Promise<Response>;
    dispatch(event: string, data?: any): Promise<Response>;
  };

  // ------------ extensions ------------

  extensions: {
    dispatch(extensionId: string, event: string, data?: any): Promise<void>;
    broadcast(event: string, data?: any): Promise<void>;
    getStats(): Promise<ExtensionStats>;
  };

  // ------------ filesystem ------------

  filesystem: {
    createDirectory(path: string): Promise<void>;
    remove(path: string): Promise<void>;
    writeFile(path: string, data: string): Promise<void>;
    appendFile(path: string, data: string): Promise<void>;
    writeBinaryFile(path: string, data: ArrayBuffer): Promise<void>;
    appendBinaryFile(path: string, data: ArrayBuffer): Promise<void>;
    readFile(path: string, options?: FileReaderOptions): Promise<string>;
    readBinaryFile(
      path: string,
      options?: FileReaderOptions
    ): Promise<ArrayBuffer>;
    openFile(path: string): Promise<number>;
    createWatcher(path: string): Promise<number>;
    removeWatcher(id: number): Promise<number>;
    getWatchers(): Promise<Watcher[]>;
    updateOpenedFile(id: number, event: string, data?: any): Promise<void>;
    getOpenedFileInfo(id: number): Promise<OpenedFile>;
    readDirectory(
      path: string,
      options?: DirectoryReaderOptions
    ): Promise<DirectoryEntry[]>;
    copy(
      source: string,
      destination: string,
      options?: CopyOptions
    ): Promise<void>;
    move(source: string, destination: string): Promise<void>;
    getStats(path: string): Promise<Stats>;
  };

  // ------------ os ------------

  os: {
    execCommand(
      command: string,
      options?: ExecCommandOptions
    ): Promise<ExecCommandResult>;
    spawnProcess(command: string, cwd?: string): Promise<SpawnedProcess>;
    updateSpawnedProcess(id: number, event: string, data?: any): Promise<void>;
    getSpawnedProcesses(): Promise<SpawnedProcess[]>;
    getEnv(key: string): Promise<string>;
    getEnvs(): Promise<Envs>;
    showOpenDialog(
      title?: string,
      options?: OpenDialogOptions
    ): Promise<string[]>;
    showFolderDialog(
      title?: string,
      options?: FolderDialogOptions
    ): Promise<string>;
    showSaveDialog(
      title?: string,
      options?: SaveDialogOptions
    ): Promise<string>;
    showNotification(
      title: string,
      content: string,
      icon?: Icon
    ): Promise<void>;
    showMessageBox(
      title: string,
      content: string,
      choice?: MessageBoxChoice,
      icon?: Icon
    ): Promise<string>;
    setTray(options: TrayOptions): Promise<void>;
    open(url: string): Promise<void>;
    getPath(name: KnownPath): Promise<string>;
  };

  // ------------ storage ------------

  storage: {
    setData(key: string, data: string): Promise<void>;
    getData(key: string): Promise<string>;
    getKeys(): Promise<string[]>;
  };

  // ------------ updater ------------

  updater: {
    checkForUpdates(url: string): Promise<Manifest>;
    install(manifest: Manifest): Promise<void>;
  };

  // ------------ window ------------

  window: {
    setTitle(title: string): Promise<void>;
    getTitle(): Promise<string>;
    maximize(): Promise<void>;
    unmaximize(): Promise<void>;
    isMaximized(): Promise<boolean>;
    minimize(): Promise<void>;
    setFullScreen(): Promise<void>;
    exitFullScreen(): Promise<void>;
    isFullScreen(): Promise<boolean>;
    show(): Promise<void>;
    hide(): Promise<void>;
    isVisible(): Promise<boolean>;
    focus(): Promise<void>;
    setIcon(icon: string): Promise<void>;
    move(x: number, y: number): Promise<void>;
    center(): Promise<void>;
    setDraggableRegion(domElementOrId: string | HTMLElement): Promise<void>;
    unsetDraggableRegion(domElementOrId: string | HTMLElement): Promise<void>;
    setSize(options: WindowSizeOptions): Promise<void>;
    getSize(): Promise<WindowSizeOptions>;
    getPosition(): Promise<WindowPosOptions>;
    setAlwaysOnTop(onTop: boolean): Promise<void>;
  };
}

interface ClipboardImage {
  width: number;
  height: number;
  bpp: number;
  bpr: number;
  redMask: number;
  greenMask: number;
  blueMask: number;
  redShift: number;
  greenShift: number;
  blueShift: number;
  data: ArrayBuffer;
}

enum ClipboardFormat {
  unknown,
  text,
  image,
}

interface MemoryInfo {
  physical: {
    total: number;
    available: number;
  };
  virtual: {
    total: number;
    available: number;
  };
}

interface KernelInfo {
  variant: string;
  version: string;
}

interface OSInfo {
  name: string;
  description: string;
  version: string;
}

interface CPUInfo {
  vendor: string;
  model: string;
  frequency: number;
  architecture: string;
  logicalThreads: number;
  physicalCores: number;
  physicalUnits: number;
}

interface Display {
  id: number;
  resolution: Resolution;
  dpi: number;
  bpp: number;
  refreshRate: number;
}

interface Resolution {
  width: number;
  height: number;
}

interface MousePosition {
  x: number;
  y: number;
}

enum LoggerType {
  WARNING = "WARNING",
  ERROR = "ERROR",
  INFO = "INFO",
}

interface Response {
  success: boolean;
  message: string;
}

interface ExtensionStats {
  loaded: string[];
  connected: string[];
}

interface DirectoryEntry {
  entry: string;
  path: string;
  type: string;
}

interface FileReaderOptions {
  pos: number;
  size: number;
}

interface DirectoryReaderOptions {
  recursive: boolean;
}

interface OpenedFile {
  id: number;
  eof: boolean;
  pos: number;
  lastRead: number;
}

interface Stats {
  size: number;
  isFile: boolean;
  isDirectory: boolean;
  createdAt: number;
  modifiedAt: number;
}

interface Watcher {
  id: number;
  path: string;
}

interface CopyOptions {
  recursive: boolean;
  overwrite: boolean;
  skip: boolean;
}

interface ExecCommandOptions {
  stdIn?: string;
  background?: boolean;
  cwd?: string;
}

interface ExecCommandResult {
  pid: number;
  stdOut: string;
  stdErr: string;
  exitCode: number;
}

interface SpawnedProcess {
  id: number;
  pid: number;
}

interface Envs {
  [key: string]: string;
}

interface OpenDialogOptions {
  multiSelections?: boolean;
  filters?: Filter[];
  defaultPath?: string;
}

interface FolderDialogOptions {
  defaultPath?: string;
}

interface SaveDialogOptions {
  forceOverwrite?: boolean;
  filters?: Filter[];
  defaultPath?: string;
}

interface Filter {
  name: string;
  extensions: string[];
}

interface TrayOptions {
  icon: string;
  menuItems: TrayMenuItem[];
}

interface TrayMenuItem {
  id?: string;
  text: string;
  isDisabled?: boolean;
  isChecked?: boolean;
}

type KnownPath =
  | "config"
  | "data"
  | "cache"
  | "documents"
  | "pictures"
  | "music"
  | "video"
  | "downloads"
  | "savedGames1"
  | "savedGames2";

enum Icon {
  WARNING = "WARNING",
  ERROR = "ERROR",
  INFO = "INFO",
  QUESTION = "QUESTION",
}

enum MessageBoxChoice {
  OK = "OK",
  OK_CANCEL = "OK_CANCEL",
  YES_NO = "YES_NO",
  YES_NO_CANCEL = "YES_NO_CANCEL",
  RETRY_CANCEL = "RETRY_CANCEL",
  ABORT_RETRY_IGNORE = "ABORT_RETRY_IGNORE",
}

interface Manifest {
  applicationId: string;
  version: string;
  resourcesURL: string;
}

interface WindowOptions extends WindowSizeOptions, WindowPosOptions {
  title?: string;
  icon?: string;
  fullScreen?: boolean;
  alwaysOnTop?: boolean;
  enableInspector?: boolean;
  borderless?: boolean;
  maximize?: boolean;
  hidden?: boolean;
  maximizable?: boolean;
  useSavedState?: boolean;
  exitProcessOnClose?: boolean;
  extendUserAgentWith?: string;
  processArgs?: string;
}

interface WindowSizeOptions {
  width?: number;
  height?: number;
  minWidth?: number;
  minHeight?: number;
  maxWidth?: number;
  maxHeight?: number;
  resizable?: boolean;
}

interface WindowPosOptions {
  x: number;
  y: number;
}
