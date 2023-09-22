export enum LogLevel {
    Off = 0,
    Error = 1,
    Warning = 2,
    Information = 3,
    Debug = 4,
    Trace = 5,
}

export interface ILogger {

    LogLevel: LogLevel;

    Debug(message: any): string;

    Error(message: any): string;

    Information(message: any): string;

    Trace(message: any): string;

    Warning(message: any): string;
}

export interface ILoggerProvider {
    CreateLogger (categoryName: String): ILogger;
}