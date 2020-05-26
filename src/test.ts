import * as tstl from "typescript-to-lua";

testDatarefHandler = function () { };
testDataref = create_dataref("iSim/testVal", "number", testDatarefHandler);

testCommandHandler = function testCommandHandler(this: void, phase: number, duration: number): void {
    if (phase === 0)
        testDataref += 1;
};

testCommand = create_command("CRJ200/testCommand", "A test command", testCommandHandler);
testCommand.once();
