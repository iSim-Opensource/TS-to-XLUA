import * as tstl from "typescript-to-lua";

let x = 2;

// Commands
function testCommandHandler(this: void, phase: number, duration: number) { };
const myCommand = create_command("CRJ200/testCommand", "A test command", testCommandHandler);
myCommand.once();

// Datarefs
function CRJ200_weather_radar_test_scan_L_handler(this: void) { }
create_dataref("CRJ200/rain_test_scan_L", "number", CRJ200_weather_radar_test_scan_L_handler);

/** @noSelf **/
function after_physics() {
    console.log('asdf');

    x = x + 1 * SIM_PERIOD;
}


const numbers = [1, 2, 3, 4, 5, 6, 7];

for (let number of numbers) {
    console.log(number);
}