import React from "react"; // eslint-disable-line no-unused-vars
import Plugin from "./plugin";
//import { AnnotationPlugin } from "sigplot";
var AccordionPlugin = require("../node_modules/sigplot/js/plugins.js")
  .AccordionPlugin;

/**
 * AnnotationPlugin wrapper for sigplot.
 *
 *   <SigPlot>
 *     <AnnotationPlugin pluginOptions={}/>
 *   </SigPlot>
 */
export default class WAccordionPlugin extends Plugin {
  componentDidMount() {
    const { pluginOptions } = this.props;
    this.accplugin = new AccordionPlugin(pluginOptions);
    this.plot.add_plugin(this.accplugin, 2);
    this.accplugin.addListener("accordiontag", function (evt) {});
    this.accplugin.set_center(0.6);
    this.accplugin.set_width(0.25);
    // this.annotations.add_annotation({
    //     x: 0,
    //     y: 0,
    //     value: img,
    //     absolute_placement: true
    // });

    // this.annotations.add_annotation({
    //     x: img.width + 50,
    //     y: 20,
    //     value: "Absolutely Placed Annotation",
    //     absolute_placement: true
    // });

    // this.annotations.add_annotation({
    //     x: 0.0,
    //     y: 5.0,
    //     value: "Relative Annotation @ (0.0,5.0)",
    // });

    //this.annPlugin = this.plot.add_plugin(pluginOptions); //this.accPlugin = this.sigplot.AccordionPlugin(pluginOptions); //this.accPlugin = this.plot.AccordionPlugin(pluginOptions);
  }
  /**
   * Handles new properties being passed into <AccordionPlugin/>
   *
   * This will be replaced by
   *
   *     static getDerivedStateFromProps(nextProps, prevState)
   *
   * in React 17.
   *
   * This sits in the lifecycle right before `shouldComponentUpdate`,
   * `componentWillUpdate`, and most importantly `render`, so this is
   * where we will call the plot's `reload` and `headermod` methods.
   *
   * @param nextProps    the newly received properties
   */

  UNSAFE_componentWillReceiveProps(nextProps) {
    const { pluginOptions: currentPluginOptions } = this.props;

    const { pluginOptions: nextPluginOptions } = nextProps; // if the data changes, we'll go ahead // and do a full `reload`; // otherwise, we only need to headermod // with the new options

    if (nextPluginOptions !== currentPluginOptions) {
      this.plot.reload(this.accplugin, nextPluginOptions, currentPluginOptions);
    }

    return false;
  }
}
