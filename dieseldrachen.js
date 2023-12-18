import { dieseldrachen } from "./module/config.js";
import DieseldrachenItemsheet from "./module/sheets/dieseldrachenItemSheet.js";

Hooks.once("init", function () {
    console.log("Dieseldrachen | Let of some fumes!");

    CONFIG.dieseldrachen= dieseldrachen;
    
    Items.unregisterSheet("core", ItemSheet);
    Items.registerSheet("dieseldrachen", DieseldrachenItemsheet, {makeDefault: true});
});
