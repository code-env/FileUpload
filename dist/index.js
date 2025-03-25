"use strict";
var __create = Object.create;
var __defProp = Object.defineProperty;
var __getOwnPropDesc = Object.getOwnPropertyDescriptor;
var __getOwnPropNames = Object.getOwnPropertyNames;
var __getProtoOf = Object.getPrototypeOf;
var __hasOwnProp = Object.prototype.hasOwnProperty;
var __export = (target, all) => {
  for (var name in all)
    __defProp(target, name, { get: all[name], enumerable: true });
};
var __copyProps = (to, from, except, desc) => {
  if (from && typeof from === "object" || typeof from === "function") {
    for (let key of __getOwnPropNames(from))
      if (!__hasOwnProp.call(to, key) && key !== except)
        __defProp(to, key, { get: () => from[key], enumerable: !(desc = __getOwnPropDesc(from, key)) || desc.enumerable });
  }
  return to;
};
var __toESM = (mod, isNodeMode, target) => (target = mod != null ? __create(__getProtoOf(mod)) : {}, __copyProps(
  // If the importer is in node compatibility mode or this is not an ESM
  // file that has been converted to a CommonJS file using a Babel-
  // compatible transform (i.e. "__esModule" has not been set), then set
  // "default" to the CommonJS "module.exports" for node compatibility.
  isNodeMode || !mod || !mod.__esModule ? __defProp(target, "default", { value: mod, enumerable: true }) : target,
  mod
));
var __toCommonJS = (mod) => __copyProps(__defProp({}, "__esModule", { value: true }), mod);

// src/index.ts
var index_exports = {};
__export(index_exports, {
  uploadRouter: () => uploadRouter
});
module.exports = __toCommonJS(index_exports);
var import_express = __toESM(require("express"));
var import_express2 = require("uploadthing/express");
var import_dotenv = __toESM(require("dotenv"));
var app = (0, import_express.default)();
var port = 3e3;
import_dotenv.default.config();
app.use(import_express.default.json());
var uploadthing = (0, import_express2.createUploadthing)();
var uploadRouter = {
  imageUploader: uploadthing({
    image: {
      maxFileSize: "1024MB",
      maxFileCount: 5
    }
  }).onUploadComplete((data) => {
    console.log(data);
  })
};
app.use("/upload", (0, import_express2.createRouteHandler)({ router: uploadRouter, config: { token: process.env.UPLOADTHING_TOKEN } }));
app.listen(() => {
  console.log(`sever running on port ${port}`);
});
// Annotate the CommonJS export names for ESM import in node:
0 && (module.exports = {
  uploadRouter
});
