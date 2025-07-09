import {
  __toESM,
  require_react
} from "./chunk-5WQJO2FO.js";

// node_modules/orsys-tjs-meme/dist/index.modern.js
var import_react = __toESM(require_react());
var DummyMeme = {
  titre: "",
  text: "",
  x: 0,
  y: 17,
  fontWeight: "500",
  fontSize: 30,
  underline: false,
  italic: false,
  imageId: 0,
  color: "#000000",
  frameSizeX: 0,
  frameSizeY: 0
};
var style = { "MemeViewer": "_2qh23" };
var MemeViewer = function MemeViewer2(props) {
  return import_react.default.createElement("svg", {
    className: style.MemeViewer,
    "data-testid": "MemeViewer",
    viewBox: "0 0 " + (props.image ? props.image.w : "1000") + " " + (props.image ? props.image.h : "1000")
  }, void 0 !== props.image && import_react.default.createElement("image", {
    href: "" + props.basePath + props.image.url,
    x: "0",
    y: "0"
  }), import_react.default.createElement("text", {
    x: props.meme.x,
    y: props.meme.y,
    fontSize: props.meme.fontSize,
    fill: props.meme.color,
    textDecoration: props.meme.underline ? "underline" : "none",
    fontStyle: props.meme.italic ? "italic" : "normal",
    fontWeight: props.meme.fontWeight
  }, props.meme.text));
};
MemeViewer.defaultProps = {
  basePath: "/img/"
};
var style$1 = { "MemeThumbnail": "_iI0vo" };
var MemeThumbnail = function MemeThumbnail2(props) {
  return import_react.default.createElement("div", {
    className: style$1.MemeThumbnail
  }, props.memes.map(function(e, i) {
    return import_react.default.createElement(MemeViewer, {
      key: i,
      meme: e,
      image: props.images.find(function(img) {
        return img.id === e.imageId;
      }),
      basePath: props.basePath
    });
  }));
};
MemeThumbnail.defaultProps = {
  basePath: "/img/"
};
var MemeSVGViewer = MemeViewer;
var MemeSVGThumbnail = MemeThumbnail;
var emptyMeme = DummyMeme;
export {
  MemeSVGThumbnail,
  MemeSVGViewer,
  emptyMeme
};
//# sourceMappingURL=orsys-tjs-meme.js.map
