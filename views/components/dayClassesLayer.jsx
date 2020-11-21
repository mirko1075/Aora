const React = require("react");

function dayClassesLayer(props) {
  Class.findOne({ scheduled: props.scheduled });
}

module.exports = dayClassesLayer;
