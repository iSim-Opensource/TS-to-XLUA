import * as tstl from "typescript-to-lua";

testDatarefHandler = function () { };
testDataref = create_dataref("iSim/testVal", "number", testDatarefHandler);

testCommandHandler = function testCommandHandler(this: void, phase: number, duration: number): void {
    if (phase === 0)
        // testDataref += 1;
        stop_timer(timerfunc)
};

testCommand = create_command("iSim/testCommand", "A test command", testCommandHandler);
// testCommand.once();
// testCommand.begin();
// testCommand.end();


timerfunc = function () {
    testDataref += 1
}

after_physics = function () {
    // testDataref += 1 * SIM_PERIOD
};

flight_start = function () {
    run_at_interval(timerfunc, 1)
};