react-sigplot
===============

SigPlot wrapper component for ReactJS.

Source: https://lgsinnovations.gitlab.com/axios/react-sigplot

Install: `npm install --save react-sigplot`

## What is it?

Provides a component that wraps the SigPlot library.

## Properties

## Usage

### Basic

```js
/** Default plot an array three different ways
 * 1. As a standard array
 * 2. As a pipe
 * 3. As a file/url
 */
<div>
  <SigPlot options={{autol:1}}>
    <ArrayLayer data={this.state.rasterData}/>
  </SigPlot>
  <SigPlot>
    <PipeLayer options={{type: 2000, subsize: 1000}} 
      data={this.state.rasterData}/>
  </SigPlot>
  <SigPlot>
    <HrefLayer
      href={this.state.href}/>
  </SigPlot>
</div>
```

## Example Preview

If you run

```
$ webpack
$ python -m SimpleHTTPServer 8888
```

and in a browser, navigate to http://0.0.0.0:8888, you 
should see the following

![React Sigplot](docs/example.gif)
