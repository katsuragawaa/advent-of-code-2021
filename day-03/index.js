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
function readFile() {
    return __awaiter(this, void 0, void 0, function () {
        var rl, input;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0:
                    rl = (0, readline_1.createInterface)({
                        input: (0, fs_1.createReadStream)('input.txt'),
                        crlfDelay: Infinity
                    });
                    input = [];
                    rl.on('line', function (line) {
                        input.push(line);
                    });
                    return [4 /*yield*/, (0, events_1.once)(rl, 'close')];
                case 1:
                    _a.sent();
                    return [2 /*return*/, input];
            }
        });
    });
}
function partOne() {
    return __awaiter(this, void 0, void 0, function () {
        var report, zeroBitsOnIndex, r, i, gammaBits, epsilonBits, gamma, epsilon;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readFile()];
                case 1:
                    report = _a.sent();
                    zeroBitsOnIndex = {};
                    for (r = 0; r < report.length; r++) {
                        for (i = 0; i < report[r].length; i++) {
                            if (report[r][i] === '1')
                                continue;
                            if (zeroBitsOnIndex[i]) {
                                zeroBitsOnIndex[i]++;
                            }
                            else {
                                zeroBitsOnIndex[i] = 1;
                            }
                        }
                    }
                    gammaBits = '';
                    epsilonBits = '';
                    Object.keys(zeroBitsOnIndex).forEach(function (index) {
                        if (zeroBitsOnIndex[index] > report.length / 2) {
                            gammaBits += '0';
                            epsilonBits += '1';
                        }
                        else {
                            gammaBits += '1';
                            epsilonBits += '0';
                        }
                    });
                    gamma = parseInt(gammaBits, 2);
                    epsilon = parseInt(epsilonBits, 2);
                    console.log(gamma * epsilon);
                    return [2 /*return*/];
            }
        });
    });
}
function partTwo() {
    return __awaiter(this, void 0, void 0, function () {
        var reports, oxygen, co2;
        return __generator(this, function (_a) {
            switch (_a.label) {
                case 0: return [4 /*yield*/, readFile()];
                case 1:
                    reports = _a.sent();
                    oxygen = parseInt(oxygenRating(reports, 0), 2);
                    co2 = parseInt(co2Rating(reports, 0), 2);
                    console.log(oxygen * co2);
                    return [2 /*return*/];
            }
        });
    });
}
function oxygenRating(reports, index) {
    if (reports.length === 1)
        return reports[0];
    var zeroBitReports = reports.filter(function (report) { return report[index] == '0'; });
    var oneBitReports = reports.filter(function (report) { return report[index] == '1'; });
    var filteredReports = zeroBitReports.length > oneBitReports.length
        ? zeroBitReports
        : oneBitReports;
    return oxygenRating(filteredReports, index + 1);
}
function co2Rating(reports, index) {
    if (reports.length === 1)
        return reports[0];
    var zeroBitReports = reports.filter(function (report) { return report[index] == '0'; });
    var oneBitReports = reports.filter(function (report) { return report[index] == '1'; });
    var filteredReports = zeroBitReports.length <= oneBitReports.length
        ? zeroBitReports
        : oneBitReports;
    return co2Rating(filteredReports, index + 1);
}
partTwo();
