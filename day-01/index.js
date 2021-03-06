"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
var __generator = (this && this.__generator) || function (thisArg, body) {
    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
    function verb(n) { return function (v) { return step([n, v]); }; }
    function step(op) {
        if (f) throw new TypeError("Generator is already executing.");
        while (_) try {
            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
            if (y = 0, t) op = [op[0] & 2, t.value];
            switch (op[0]) {
                case 0: case 1: t = op; break;
                case 4: _.label++; return { value: op[1], done: false };
                case 5: _.label++; y = op[1]; op = [0]; continue;
                case 7: op = _.ops.pop(); _.trys.pop(); continue;
                default:
                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
                    if (t[2]) _.ops.pop();
                    _.trys.pop(); continue;
            }
            op = body.call(thisArg, _);
        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
    }
};
exports.__esModule = true;
var events_1 = require("events");
var fs_1 = require("fs");
var readline_1 = require("readline");
function partOne() {
    return __awaiter(this, void 0, void 0, function () {
        var rl, depths_1, counter_1, err_1;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    rl = (0, readline_1.createInterface)({
                        input: (0, fs_1.createReadStream)('input.txt'),
                        crlfDelay: Infinity
                    });
                    depths_1 = [];
                    counter_1 = 0;
                    rl.on('line', function (line) {
                        var currentDepth = parseInt(line);
                        var previousDepth = depths_1.at(-1);
                        depths_1.push(currentDepth);
                        if (depths_1.length === 1)
                            return;
                        if (currentDepth > previousDepth)
                            counter_1++;
                    });
                    return [4 /*yield*/, (0, events_1.once)(rl, 'close')];
                case 1:
                    _a.sent();
                    console.log(counter_1);
                    return [3 /*break*/, 3];
                case 2:
                    err_1 = _a.sent();
                    console.error(err_1);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function partTwo() {
    return __awaiter(this, void 0, void 0, function () {
        var rl, depths_2, slidingWindows_1, counter_2, err_2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    _a.trys.push([0, 2, , 3]);
                    rl = (0, readline_1.createInterface)({
                        input: (0, fs_1.createReadStream)('input.txt'),
                        crlfDelay: Infinity
                    });
                    depths_2 = [];
                    slidingWindows_1 = [];
                    counter_2 = 0;
                    rl.on('line', function (line) {
                        var currentWindow = [parseInt(line), depths_2.at(-1), depths_2.at(-2)];
                        depths_2.push(parseInt(line));
                        if (depths_2.length < 3)
                            return;
                        var previousWindow = slidingWindows_1.at(-1);
                        slidingWindows_1.push(currentWindow);
                        if (slidingWindows_1.length === 1)
                            return;
                        if (sum(currentWindow) > sum(previousWindow))
                            counter_2++;
                    });
                    return [4 /*yield*/, (0, events_1.once)(rl, 'close')];
                case 1:
                    _a.sent();
                    console.log(counter_2);
                    return [3 /*break*/, 3];
                case 2:
                    err_2 = _a.sent();
                    console.error(err_2);
                    return [3 /*break*/, 3];
                case 3: return [2 /*return*/];
            }
        });
    });
}
function sum(arr) {
    return arr.reduce(function (acc, number) { return acc + number; }, 0);
}
partOne();
partTwo();
