import { jsx } from 'react/jsx-runtime';

var classnames = {exports: {}};

/*!
  Copyright (c) 2018 Jed Watson.
  Licensed under the MIT License (MIT), see
  http://jedwatson.github.io/classnames
*/

(function (module) {
	/* global define */

	(function () {

		var hasOwn = {}.hasOwnProperty;

		function classNames() {
			var classes = [];

			for (var i = 0; i < arguments.length; i++) {
				var arg = arguments[i];
				if (!arg) continue;

				var argType = typeof arg;

				if (argType === 'string' || argType === 'number') {
					classes.push(arg);
				} else if (Array.isArray(arg)) {
					if (arg.length) {
						var inner = classNames.apply(null, arg);
						if (inner) {
							classes.push(inner);
						}
					}
				} else if (argType === 'object') {
					if (arg.toString === Object.prototype.toString) {
						for (var key in arg) {
							if (hasOwn.call(arg, key) && arg[key]) {
								classes.push(key);
							}
						}
					} else {
						classes.push(arg.toString());
					}
				}
			}

			return classes.join(' ');
		}

		if (module.exports) {
			classNames.default = classNames;
			module.exports = classNames;
		} else {
			window.classNames = classNames;
		}
	}());
} (classnames));

var classNames = classnames.exports;

function styleInject(css, ref) {
  if ( ref === void 0 ) ref = {};
  var insertAt = ref.insertAt;

  if (!css || typeof document === 'undefined') { return; }

  var head = document.head || document.getElementsByTagName('head')[0];
  var style = document.createElement('style');
  style.type = 'text/css';

  if (insertAt === 'top') {
    if (head.firstChild) {
      head.insertBefore(style, head.firstChild);
    } else {
      head.appendChild(style);
    }
  } else {
    head.appendChild(style);
  }

  if (style.styleSheet) {
    style.styleSheet.cssText = css;
  } else {
    style.appendChild(document.createTextNode(css));
  }
}

var css_248z = ".Button-module_button__xDdzH {\r\n    display: inline-block;\r\n    padding: 0.5rem 1rem;\r\n    border: 1px solid #ccc;\r\n    border-radius: 4px;\r\n    font-size: 1rem;\r\n}\r\n\r\n.Button-module_variant-primary__jsUbx {\r\n    background-color: #ccc;\r\n    color: #000,\r\n}\r\n\r\n.Button-module_variant-secondary__QwNMp {\r\n    background-color: #000;\r\n    color: #fff,\r\n}";
styleInject(css_248z);

const Button = ({ children, onClick, variant }) => {
    return jsx("button", { onClick: onClick, className: classNames("button", {
            [`variant-${variant}`]: variant
        }), children: children });
};

export { Button };
//# sourceMappingURL=index.esm.js.map
