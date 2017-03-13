"use strict";
var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : new P(function (resolve) { resolve(result.value); }).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
Object.defineProperty(exports, "__esModule", { value: true });
const module_1 = require("magnet-core/module");
const caporal = require("caporal");
const caporal_1 = require("./config/caporal");
class Caporal extends module_1.Module {
    setup() {
        return __awaiter(this, void 0, void 0, function* () {
            const config = this.prepareConfig('caporal', caporal_1.default);
            this.app.caporal = caporal;
            if (config.version) {
                this.app.caporal = caporal.version(config.version);
            }
            if (config.description) {
                this.app.caporal = caporal.description(config.description);
            }
        });
    }
}
exports.default = Caporal;
//# sourceMappingURL=index.js.map