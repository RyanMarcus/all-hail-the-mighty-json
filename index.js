#!/usr/local/bin/node

"use strict";

/*
Copyright 2016 Ryan Marcus

 This program is free software: you can redistribute it and/or modify
    it under the terms of the GNU General Public License as published by
    the Free Software Foundation, either version 3 of the License, or
    (at your option) any later version.

    This program is distributed in the hope that it will be useful,
    but WITHOUT ANY WARRANTY; without even the implied warranty of
    MERCHANTABILITY or FITNESS FOR A PARTICULAR PURPOSE.  See the
    GNU General Public License for more details.

    You should have received a copy of the GNU General Public License
    along with this program.  If not, see <http://www.gnu.org/licenses/>.

*/

function execute(lst) {
    if (!Array.isArray(lst)) {
	if (this && lst in this)
	    return this[lst];
	return eval(lst);
    }


    // first, collect the function
    let f = resolveFunction(lst.shift());

    if (lst.length == 0)
	return f;

    if (f == cond) {
	// evaluate the boolean
	let branchCond = execute.bind(this, lst[0])();
	let branchIdx = (branchCond ? 1 : 2);
	return execute.bind(this, lst[branchIdx])();
    }
    
    // collect the parameters
    let params = lst.map((args) => execute.bind(this, args)());

    
    return f.apply(this, params);
}


const cond = () => {};


function last() {
    return arguments[arguments.length - 1];
}

function defun(name, obj) {
    let argsList = obj.args;
    let code = obj.body;

    global[name] = function () {
	let scope = {};
	argsList.forEach((itm, idx) => {
	    scope[itm] = arguments[idx];
	});



	// JSON hack to make sure we get a deep copy
	return execute.bind(scope, JSON.parse(JSON.stringify(code)))();
    };

    
}

function resolveFunction(fname) {
    try {
	if (this && fname in this) {
	    return this[fname];
	}
	return eval(fname);
    } catch (e) {
	// return an infix function
	return eval("(a, b) => a " + fname + " b");
    }
}



const args = process.argv;
const fs = require('fs');
fs.readFile(args[2], 'utf8', (err, data) => execute(JSON.parse(data)));

	    
