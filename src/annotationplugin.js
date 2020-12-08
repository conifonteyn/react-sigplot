import React from "react"; // eslint-disable-line no-unused-vars
import Plugin from "./plugin";
//import { AnnotationPlugin } from "sigplot";
var AnnotationPlugin = require("../node_modules/sigplot/js/plugins.js")
  .AnnotationPlugin;

/**
 * AnnotationPlugin wrapper for sigplot.
 *
 *   <SigPlot>
 *     <AnnotationPlugin pluginOptions={}/>
 *   </SigPlot>
 */
export default class WAnnotationPlugin extends Plugin {
  componentDidMount() {
    const { pluginOptions } = this.props;
    this.plugin = new AnnotationPlugin();
    this.plot.add_plugin(this.plugin, 1);
    this.plugin.add_annotation(pluginOptions);

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
      this.plot.reload(this.plugin, nextPluginOptions, currentPluginOptions);
    }

    return false;
  }
}
