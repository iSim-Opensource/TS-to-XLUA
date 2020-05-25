/** @noSelfInFile **/

declare type Command = {
    once: () => void;
    begin: () => void;
    end: () => void;
};

declare const SIM_PERIOD: number;

declare function create_dataref(dataref: string, type: string, handler: () => void): number;

declare function find_dataref(dataref: string): number;

declare function find_command(command: string): Command;

declare function create_command(command: string, description: string, handler: (phase: number, duration: number) => void): Command;

declare function is_timer_scheduled(handler: () => void): boolean;

declare function run_after_time(handler: () => void, delay: number): void;

declare function run_at_interval(handler: () => void, delay: number): void;

declare function stop_timer(handler: () => void): void;

declare function run_timer(handler: () => void, delay: number, inteval: number): void;