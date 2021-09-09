# VSC 1.60.0 Debugger Bug

The VSC 1.60.0 debugger is not respecting source maps in this example project.
It works as expected in VSC 1.59.0
Verified on Windows and Linux.
Node version 15.10.0.

To reproduce:
* `npm i`
* open in VSC
* Set a breakpoint, e.g. in `test/App.test.ts`
* Debug with launch configuration "Mocha"
