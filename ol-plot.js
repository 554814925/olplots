function WMapMarkPlot(map, options) {

    // if (typeof options.markType == "undefined") { options.markType = "Point" }

    if (typeof options.pointRadius == "undefined") {
        options.pointRadius = 7
    }
    //填充颜色
    if (typeof options.fillColor === "undefined") {
        options.fillColor = "rgb(67, 110, 239)";
    }

    if (typeof options.fillOpacity == "undefined") {
        options.fillOpacity = 0.4
    }
    //线条颜色
    if (typeof options.strokeColor == "undefined") {
        options.strokeColor = "rgb(67, 110, 239)"
    }

    if (typeof options.strokeOpacity == "undefined") {
        options.strokeOpacity = 0.6
    }
    //宽度虚线
    if (typeof options.lineWidth == "undefined") {
        options.lineWidth = 2
    }

    if (typeof options.lineDash == "undefined" || options.lineDash == false) {
        options.lineDash = [0, 0, 0]
    }
    if (options.lineDash == true) {
        options.lineDash = [10, 10, 10]
    }

    window.RADIUS = options.pointRadius

    //填充颜色
    var fill = ol.color.asArray(options.fillColor)

    fill[3] = options.fillOpacity

    window.FILL = fill
        // console.log("填充颜色" + FILL)

    //线条颜色
    var stroke = ol.color.asArray(options.strokeColor)

    stroke[3] = options.strokeOpacity;

    window.STROKE = stroke;

    // console.log("线条颜色" + stroke);

    //宽度，虚线
    window.WIDTH = options.lineWidth;
    window.LINEDASH = options.lineDash;


    /*!
     * ol-plot v2.1.2
     * LICENSE : MIT
     * (c) 2016-2018 https://sakitam-fdd.github.io/ol-plot
     */
    (function(global, factory) {
        typeof exports === 'object' && typeof module !== 'undefined' ? module.exports = factory(require('openlayers')) :
            typeof define === 'function' && define.amd ? define(['openlayers'], factory) :
            (global.olPlot = factory(global.ol));
    }(this, (function(ol) {
        'use strict';

        ol = ol && ol.hasOwnProperty('default') ? ol['default'] : ol;

        var toString = {}.toString;

        var _cof = function(it) {
            return toString.call(it).slice(8, -1);
        };

        var commonjsGlobal = typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};





        function createCommonjsModule(fn, module) {
            return module = { exports: {} }, fn(module, module.exports), module.exports;
        }

        var _global = createCommonjsModule(function(module) {
            // https://github.com/zloirock/core-js/issues/86#issuecomment-115759028
            var global = module.exports = typeof window != 'undefined' && window.Math == Math ?
                window : typeof self != 'undefined' && self.Math == Math ? self
                // eslint-disable-next-line no-new-func
                :
                Function('return this')();
            if (typeof __g == 'number') __g = global; // eslint-disable-line no-undef
        });

        var SHARED = '__core-js_shared__';
        var store = _global[SHARED] || (_global[SHARED] = {});
        var _shared = function(key) {
            return store[key] || (store[key] = {});
        };

        var id = 0;
        var px = Math.random();
        var _uid = function(key) {
            return 'Symbol('.concat(key === undefined ? '' : key, ')_', (++id + px).toString(36));
        };

        var _wks = createCommonjsModule(function(module) {
            var store = _shared('wks');

            var Symbol = _global.Symbol;
            var USE_SYMBOL = typeof Symbol == 'function';

            var $exports = module.exports = function(name) {
                return store[name] || (store[name] =
                    USE_SYMBOL && Symbol[name] || (USE_SYMBOL ? Symbol : _uid)('Symbol.' + name));
            };

            $exports.store = store;
        });

        // getting tag from 19.1.3.6 Object.prototype.toString()

        var TAG = _wks('toStringTag');
        // ES3 wrong here
        var ARG = _cof(function() { return arguments; }()) == 'Arguments';

        // fallback for IE11 Script Access Denied error
        var tryGet = function(it, key) {
            try {
                return it[key];
            } catch (e) { /* empty */ }
        };

        var _classof = function(it) {
            var O, T, B;
            return it === undefined ? 'Undefined' : it === null ? 'Null'
                // @@toStringTag case
                :
                typeof(T = tryGet(O = Object(it), TAG)) == 'string' ? T
                // builtinTag case
                :
                ARG ? _cof(O)
                // ES3 arguments fallback
                :
                (B = _cof(O)) == 'Object' && typeof O.callee == 'function' ? 'Arguments' : B;
        };

        var _isObject = function(it) {
            return typeof it === 'object' ? it !== null : typeof it === 'function';
        };

        var _anObject = function(it) {
            if (!_isObject(it)) throw TypeError(it + ' is not an object!');
            return it;
        };

        var _fails = function(exec) {
            try {
                return !!exec();
            } catch (e) {
                return true;
            }
        };

        // Thank's IE8 for his funny defineProperty
        var _descriptors = !_fails(function() {
            return Object.defineProperty({}, 'a', { get: function() { return 7; } }).a != 7;
        });

        var document$1 = _global.document;
        // typeof document.createElement is 'object' in old IE
        var is = _isObject(document$1) && _isObject(document$1.createElement);
        var _domCreate = function(it) {
            return is ? document$1.createElement(it) : {};
        };

        var _ie8DomDefine = !_descriptors && !_fails(function() {
            return Object.defineProperty(_domCreate('div'), 'a', { get: function() { return 7; } }).a != 7;
        });

        // 7.1.1 ToPrimitive(input [, PreferredType])

        // instead of the ES6 spec version, we didn't implement @@toPrimitive case
        // and the second argument - flag - preferred type is a string
        var _toPrimitive = function(it, S) {
            if (!_isObject(it)) return it;
            var fn, val;
            if (S && typeof(fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
            if (typeof(fn = it.valueOf) == 'function' && !_isObject(val = fn.call(it))) return val;
            if (!S && typeof(fn = it.toString) == 'function' && !_isObject(val = fn.call(it))) return val;
            throw TypeError("Can't convert object to primitive value");
        };

        var dP = Object.defineProperty;

        var f = _descriptors ? Object.defineProperty : function defineProperty(O, P, Attributes) {
            _anObject(O);
            P = _toPrimitive(P, true);
            _anObject(Attributes);
            if (_ie8DomDefine) try {
                return dP(O, P, Attributes);
            } catch (e) { /* empty */ }
            if ('get' in Attributes || 'set' in Attributes) throw TypeError('Accessors not supported!');
            if ('value' in Attributes) O[P] = Attributes.value;
            return O;
        };

        var _objectDp = {
            f: f
        };

        var _propertyDesc = function(bitmap, value) {
            return {
                enumerable: !(bitmap & 1),
                configurable: !(bitmap & 2),
                writable: !(bitmap & 4),
                value: value
            };
        };

        var _hide = _descriptors ? function(object, key, value) {
            return _objectDp.f(object, key, _propertyDesc(1, value));
        } : function(object, key, value) {
            object[key] = value;
            return object;
        };

        var hasOwnProperty = {}.hasOwnProperty;
        var _has = function(it, key) {
            return hasOwnProperty.call(it, key);
        };

        var _core = createCommonjsModule(function(module) {
            var core = module.exports = { version: '2.5.3' };
            if (typeof __e == 'number') __e = core; // eslint-disable-line no-undef
        });

        var _redefine = createCommonjsModule(function(module) {
            var SRC = _uid('src');
            var TO_STRING = 'toString';
            var $toString = Function[TO_STRING];
            var TPL = ('' + $toString).split(TO_STRING);

            _core.inspectSource = function(it) {
                return $toString.call(it);
            };

            (module.exports = function(O, key, val, safe) {
                var isFunction = typeof val == 'function';
                if (isFunction) _has(val, 'name') || _hide(val, 'name', key);
                if (O[key] === val) return;
                if (isFunction) _has(val, SRC) || _hide(val, SRC, O[key] ? '' + O[key] : TPL.join(String(key)));
                if (O === _global) {
                    O[key] = val;
                } else if (!safe) {
                    delete O[key];
                    _hide(O, key, val);
                } else if (O[key]) {
                    O[key] = val;
                } else {
                    _hide(O, key, val);
                }
                // add fake Function#toString for correct work wrapped methods / constructors with methods like LoDash isNative
            })(Function.prototype, TO_STRING, function toString() {
                return typeof this == 'function' && this[SRC] || $toString.call(this);
            });
        });

        'use strict';
        // 19.1.3.6 Object.prototype.toString()

        var test = {};
        test[_wks('toStringTag')] = 'z';
        if (test + '' != '[object z]') {
            _redefine(Object.prototype, 'toString', function toString() {
                return '[object ' + _classof(this) + ']';
            }, true);
        }

        // 7.1.4 ToInteger
        var ceil = Math.ceil;
        var floor = Math.floor;
        var _toInteger = function(it) {
            return isNaN(it = +it) ? 0 : (it > 0 ? floor : ceil)(it);
        };

        // 7.2.1 RequireObjectCoercible(argument)
        var _defined = function(it) {
            if (it == undefined) throw TypeError("Can't call method on  " + it);
            return it;
        };

        // true  -> String#at
        // false -> String#codePointAt
        var _stringAt = function(TO_STRING) {
            return function(that, pos) {
                var s = String(_defined(that));
                var i = _toInteger(pos);
                var l = s.length;
                var a, b;
                if (i < 0 || i >= l) return TO_STRING ? '' : undefined;
                a = s.charCodeAt(i);
                return a < 0xd800 || a > 0xdbff || i + 1 === l || (b = s.charCodeAt(i + 1)) < 0xdc00 || b > 0xdfff ?
                    TO_STRING ? s.charAt(i) : a :
                    TO_STRING ? s.slice(i, i + 2) : (a - 0xd800 << 10) + (b - 0xdc00) + 0x10000;
            };
        };

        var _library = false;

        var _aFunction = function(it) {
            if (typeof it != 'function') throw TypeError(it + ' is not a function!');
            return it;
        };

        // optional / simple context binding

        var _ctx = function(fn, that, length) {
            _aFunction(fn);
            if (that === undefined) return fn;
            switch (length) {
                case 1:
                    return function(a) {
                        return fn.call(that, a);
                    };
                case 2:
                    return function(a, b) {
                        return fn.call(that, a, b);
                    };
                case 3:
                    return function(a, b, c) {
                        return fn.call(that, a, b, c);
                    };
            }
            return function( /* ...args */ ) {
                return fn.apply(that, arguments);
            };
        };

        var PROTOTYPE = 'prototype';

        var $export = function(type, name, source) {
            var IS_FORCED = type & $export.F;
            var IS_GLOBAL = type & $export.G;
            var IS_STATIC = type & $export.S;
            var IS_PROTO = type & $export.P;
            var IS_BIND = type & $export.B;
            var target = IS_GLOBAL ? _global : IS_STATIC ? _global[name] || (_global[name] = {}) : (_global[name] || {})[PROTOTYPE];
            var exports = IS_GLOBAL ? _core : _core[name] || (_core[name] = {});
            var expProto = exports[PROTOTYPE] || (exports[PROTOTYPE] = {});
            var key, own, out, exp;
            if (IS_GLOBAL) source = name;
            for (key in source) {
                // contains in native
                own = !IS_FORCED && target && target[key] !== undefined;
                // export native or passed
                out = (own ? target : source)[key];
                // bind timers to global for call from export context
                exp = IS_BIND && own ? _ctx(out, _global) : IS_PROTO && typeof out == 'function' ? _ctx(Function.call, out) : out;
                // extend global
                if (target) _redefine(target, key, out, type & $export.U);
                // export
                if (exports[key] != out) _hide(exports, key, exp);
                if (IS_PROTO && expProto[key] != out) expProto[key] = out;
            }
        };
        _global.core = _core;
        // type bitmap
        $export.F = 1; // forced
        $export.G = 2; // global
        $export.S = 4; // static
        $export.P = 8; // proto
        $export.B = 16; // bind
        $export.W = 32; // wrap
        $export.U = 64; // safe
        $export.R = 128; // real proto method for `library`
        var _export = $export;

        var _iterators = {};

        // fallback for non-array-like ES3 and non-enumerable old V8 strings

        // eslint-disable-next-line no-prototype-builtins
        var _iobject = Object('z').propertyIsEnumerable(0) ? Object : function(it) {
            return _cof(it) == 'String' ? it.split('') : Object(it);
        };

        // to indexed object, toObject with fallback for non-array-like ES3 strings


        var _toIobject = function(it) {
            return _iobject(_defined(it));
        };

        // 7.1.15 ToLength

        var min = Math.min;
        var _toLength = function(it) {
            return it > 0 ? min(_toInteger(it), 0x1fffffffffffff) : 0; // pow(2, 53) - 1 == 9007199254740991
        };

        var max = Math.max;
        var min$1 = Math.min;
        var _toAbsoluteIndex = function(index, length) {
            index = _toInteger(index);
            return index < 0 ? max(index + length, 0) : min$1(index, length);
        };

        // false -> Array#indexOf
        // true  -> Array#includes



        var _arrayIncludes = function(IS_INCLUDES) {
            return function($this, el, fromIndex) {
                var O = _toIobject($this);
                var length = _toLength(O.length);
                var index = _toAbsoluteIndex(fromIndex, length);
                var value;
                // Array#includes uses SameValueZero equality algorithm
                // eslint-disable-next-line no-self-compare
                if (IS_INCLUDES && el != el)
                    while (length > index) {
                        value = O[index++];
                        // eslint-disable-next-line no-self-compare
                        if (value != value) return true;
                        // Array#indexOf ignores holes, Array#includes - not
                    } else
                        for (; length > index; index++)
                            if (IS_INCLUDES || index in O) {
                                if (O[index] === el) return IS_INCLUDES || index || 0;
                            }
                return !IS_INCLUDES && -1;
            };
        };

        var shared$1 = _shared('keys');

        var _sharedKey = function(key) {
            return shared$1[key] || (shared$1[key] = _uid(key));
        };

        var arrayIndexOf = _arrayIncludes(false);
        var IE_PROTO$1 = _sharedKey('IE_PROTO');

        var _objectKeysInternal = function(object, names) {
            var O = _toIobject(object);
            var i = 0;
            var result = [];
            var key;
            for (key in O)
                if (key != IE_PROTO$1) _has(O, key) && result.push(key);
                // Don't enum bug & hidden keys
            while (names.length > i)
                if (_has(O, key = names[i++])) {
                    ~arrayIndexOf(result, key) || result.push(key);
                }
            return result;
        };

        // IE 8- don't enum bug keys
        var _enumBugKeys = (
            'constructor,hasOwnProperty,isPrototypeOf,propertyIsEnumerable,toLocaleString,toString,valueOf'
        ).split(',');

        // 19.1.2.14 / 15.2.3.14 Object.keys(O)



        var _objectKeys = Object.keys || function keys(O) {
            return _objectKeysInternal(O, _enumBugKeys);
        };

        var _objectDps = _descriptors ? Object.defineProperties : function defineProperties(O, Properties) {
            _anObject(O);
            var keys = _objectKeys(Properties);
            var length = keys.length;
            var i = 0;
            var P;
            while (length > i) _objectDp.f(O, P = keys[i++], Properties[P]);
            return O;
        };

        var document$2 = _global.document;
        var _html = document$2 && document$2.documentElement;

        // 19.1.2.2 / 15.2.3.5 Object.create(O [, Properties])



        var IE_PROTO = _sharedKey('IE_PROTO');
        var Empty = function() { /* empty */ };
        var PROTOTYPE$1 = 'prototype';

        // Create object with fake `null` prototype: use iframe Object with cleared prototype
        var createDict = function() {
            // Thrash, waste and sodomy: IE GC bug
            var iframe = _domCreate('iframe');
            var i = _enumBugKeys.length;
            var lt = '<';
            var gt = '>';
            var iframeDocument;
            iframe.style.display = 'none';
            _html.appendChild(iframe);
            iframe.src = 'javascript:'; // eslint-disable-line no-script-url
            // createDict = iframe.contentWindow.Object;
            // html.removeChild(iframe);
            iframeDocument = iframe.contentWindow.document;
            iframeDocument.open();
            iframeDocument.write(lt + 'script' + gt + 'document.F=Object' + lt + '/script' + gt);
            iframeDocument.close();
            createDict = iframeDocument.F;
            while (i--) delete createDict[PROTOTYPE$1][_enumBugKeys[i]];
            return createDict();
        };

        var _objectCreate = Object.create || function create(O, Properties) {
            var result;
            if (O !== null) {
                Empty[PROTOTYPE$1] = _anObject(O);
                result = new Empty();
                Empty[PROTOTYPE$1] = null;
                // add "__proto__" for Object.getPrototypeOf polyfill
                result[IE_PROTO] = O;
            } else result = createDict();
            return Properties === undefined ? result : _objectDps(result, Properties);
        };

        var def = _objectDp.f;

        var TAG$1 = _wks('toStringTag');

        var _setToStringTag = function(it, tag, stat) {
            if (it && !_has(it = stat ? it : it.prototype, TAG$1)) def(it, TAG$1, { configurable: true, value: tag });
        };

        'use strict';



        var IteratorPrototype = {};

        // 25.1.2.1.1 %IteratorPrototype%[@@iterator]()
        _hide(IteratorPrototype, _wks('iterator'), function() { return this; });

        var _iterCreate = function(Constructor, NAME, next) {
            Constructor.prototype = _objectCreate(IteratorPrototype, { next: _propertyDesc(1, next) });
            _setToStringTag(Constructor, NAME + ' Iterator');
        };

        // 7.1.13 ToObject(argument)

        var _toObject = function(it) {
            return Object(_defined(it));
        };

        // 19.1.2.9 / 15.2.3.2 Object.getPrototypeOf(O)


        var IE_PROTO$2 = _sharedKey('IE_PROTO');
        var ObjectProto = Object.prototype;

        var _objectGpo = Object.getPrototypeOf || function(O) {
            O = _toObject(O);
            if (_has(O, IE_PROTO$2)) return O[IE_PROTO$2];
            if (typeof O.constructor == 'function' && O instanceof O.constructor) {
                return O.constructor.prototype;
            }
            return O instanceof Object ? ObjectProto : null;
        };

        'use strict';









        var ITERATOR = _wks('iterator');
        var BUGGY = !([].keys && 'next' in [].keys()); // Safari has buggy iterators w/o `next`
        var FF_ITERATOR = '@@iterator';
        var KEYS = 'keys';
        var VALUES = 'values';

        var returnThis = function() { return this; };

        var _iterDefine = function(Base, NAME, Constructor, next, DEFAULT, IS_SET, FORCED) {
            _iterCreate(Constructor, NAME, next);
            var getMethod = function(kind) {
                if (!BUGGY && kind in proto) return proto[kind];
                switch (kind) {
                    case KEYS:
                        return function keys() { return new Constructor(this, kind); };
                    case VALUES:
                        return function values() { return new Constructor(this, kind); };
                }
                return function entries() { return new Constructor(this, kind); };
            };
            var TAG = NAME + ' Iterator';
            var DEF_VALUES = DEFAULT == VALUES;
            var VALUES_BUG = false;
            var proto = Base.prototype;
            var $native = proto[ITERATOR] || proto[FF_ITERATOR] || DEFAULT && proto[DEFAULT];
            var $default = (!BUGGY && $native) || getMethod(DEFAULT);
            var $entries = DEFAULT ? !DEF_VALUES ? $default : getMethod('entries') : undefined;
            var $anyNative = NAME == 'Array' ? proto.entries || $native : $native;
            var methods, key, IteratorPrototype;
            // Fix native
            if ($anyNative) {
                IteratorPrototype = _objectGpo($anyNative.call(new Base()));
                if (IteratorPrototype !== Object.prototype && IteratorPrototype.next) {
                    // Set @@toStringTag to native iterators
                    _setToStringTag(IteratorPrototype, TAG, true);
                    // fix for some old engines
                    if (!_library && !_has(IteratorPrototype, ITERATOR)) _hide(IteratorPrototype, ITERATOR, returnThis);
                }
            }
            // fix Array#{values, @@iterator}.name in V8 / FF
            if (DEF_VALUES && $native && $native.name !== VALUES) {
                VALUES_BUG = true;
                $default = function values() { return $native.call(this); };
            }
            // Define iterator
            if ((!_library || FORCED) && (BUGGY || VALUES_BUG || !proto[ITERATOR])) {
                _hide(proto, ITERATOR, $default);
            }
            // Plug for library
            _iterators[NAME] = $default;
            _iterators[TAG] = returnThis;
            if (DEFAULT) {
                methods = {
                    values: DEF_VALUES ? $default : getMethod(VALUES),
                    keys: IS_SET ? $default : getMethod(KEYS),
                    entries: $entries
                };
                if (FORCED)
                    for (key in methods) {
                        if (!(key in proto)) _redefine(proto, key, methods[key]);
                    } else _export(_export.P + _export.F * (BUGGY || VALUES_BUG), NAME, methods);
            }
            return methods;
        };

        'use strict';
        var $at = _stringAt(true);

        // 21.1.3.27 String.prototype[@@iterator]()
        _iterDefine(String, 'String', function(iterated) {
            this._t = String(iterated); // target
            this._i = 0; // next index
            // 21.1.5.2.1 %StringIteratorPrototype%.next()
        }, function() {
            var O = this._t;
            var index = this._i;
            var point;
            if (index >= O.length) return { value: undefined, done: true };
            point = $at(O, index);
            this._i += point.length;
            return { value: point, done: false };
        });

        // 22.1.3.31 Array.prototype[@@unscopables]
        var UNSCOPABLES = _wks('unscopables');
        var ArrayProto = Array.prototype;
        if (ArrayProto[UNSCOPABLES] == undefined) _hide(ArrayProto, UNSCOPABLES, {});
        var _addToUnscopables = function(key) {
            ArrayProto[UNSCOPABLES][key] = true;
        };

        var _iterStep = function(done, value) {
            return { value: value, done: !!done };
        };

        'use strict';





        // 22.1.3.4 Array.prototype.entries()
        // 22.1.3.13 Array.prototype.keys()
        // 22.1.3.29 Array.prototype.values()
        // 22.1.3.30 Array.prototype[@@iterator]()
        var es6_array_iterator = _iterDefine(Array, 'Array', function(iterated, kind) {
            this._t = _toIobject(iterated); // target
            this._i = 0; // next index
            this._k = kind; // kind
            // 22.1.5.2.1 %ArrayIteratorPrototype%.next()
        }, function() {
            var O = this._t;
            var kind = this._k;
            var index = this._i++;
            if (!O || index >= O.length) {
                this._t = undefined;
                return _iterStep(1);
            }
            if (kind == 'keys') return _iterStep(0, index);
            if (kind == 'values') return _iterStep(0, O[index]);
            return _iterStep(0, [index, O[index]]);
        }, 'values');

        // argumentsList[@@iterator] is %ArrayProto_values% (9.4.4.6, 9.4.4.7)
        _iterators.Arguments = _iterators.Array;

        _addToUnscopables('keys');
        _addToUnscopables('values');
        _addToUnscopables('entries');

        var ITERATOR$1 = _wks('iterator');
        var TO_STRING_TAG = _wks('toStringTag');
        var ArrayValues = _iterators.Array;

        var DOMIterables = {
            CSSRuleList: true, // TODO: Not spec compliant, should be false.
            CSSStyleDeclaration: false,
            CSSValueList: false,
            ClientRectList: false,
            DOMRectList: false,
            DOMStringList: false,
            DOMTokenList: true,
            DataTransferItemList: false,
            FileList: false,
            HTMLAllCollection: false,
            HTMLCollection: false,
            HTMLFormElement: false,
            HTMLSelectElement: false,
            MediaList: true, // TODO: Not spec compliant, should be false.
            MimeTypeArray: false,
            NamedNodeMap: false,
            NodeList: true,
            PaintRequestList: false,
            Plugin: false,
            PluginArray: false,
            SVGLengthList: false,
            SVGNumberList: false,
            SVGPathSegList: false,
            SVGPointList: false,
            SVGStringList: false,
            SVGTransformList: false,
            SourceBufferList: false,
            StyleSheetList: true, // TODO: Not spec compliant, should be false.
            TextTrackCueList: false,
            TextTrackList: false,
            TouchList: false
        };

        for (var collections = _objectKeys(DOMIterables), i = 0; i < collections.length; i++) {
            var NAME = collections[i];
            var explicit = DOMIterables[NAME];
            var Collection = _global[NAME];
            var proto = Collection && Collection.prototype;
            var key;
            if (proto) {
                if (!proto[ITERATOR$1]) _hide(proto, ITERATOR$1, ArrayValues);
                if (!proto[TO_STRING_TAG]) _hide(proto, TO_STRING_TAG, NAME);
                _iterators[NAME] = ArrayValues;
                if (explicit)
                    for (key in es6_array_iterator)
                        if (!proto[key]) _redefine(proto, key, es6_array_iterator[key], true);
            }
        }

        var _redefineAll = function(target, src, safe) {
            for (var key in src) _redefine(target, key, src[key], safe);
            return target;
        };

        var _anInstance = function(it, Constructor, name, forbiddenField) {
            if (!(it instanceof Constructor) || (forbiddenField !== undefined && forbiddenField in it)) {
                throw TypeError(name + ': incorrect invocation!');
            }
            return it;
        };

        // call something on iterator step with safe closing on error

        var _iterCall = function(iterator, fn, value, entries) {
            try {
                return entries ? fn(_anObject(value)[0], value[1]) : fn(value);
                // 7.4.6 IteratorClose(iterator, completion)
            } catch (e) {
                var ret = iterator['return'];
                if (ret !== undefined) _anObject(ret.call(iterator));
                throw e;
            }
        };

        // check on default Array iterator

        var ITERATOR$2 = _wks('iterator');
        var ArrayProto$1 = Array.prototype;

        var _isArrayIter = function(it) {
            return it !== undefined && (_iterators.Array === it || ArrayProto$1[ITERATOR$2] === it);
        };

        var ITERATOR$3 = _wks('iterator');

        var core_getIteratorMethod = _core.getIteratorMethod = function(it) {
            if (it != undefined) return it[ITERATOR$3] ||
                it['@@iterator'] ||
                _iterators[_classof(it)];
        };

        var _forOf = createCommonjsModule(function(module) {
            var BREAK = {};
            var RETURN = {};
            var exports = module.exports = function(iterable, entries, fn, that, ITERATOR) {
                var iterFn = ITERATOR ? function() { return iterable; } : core_getIteratorMethod(iterable);
                var f = _ctx(fn, that, entries ? 2 : 1);
                var index = 0;
                var length, step, iterator, result;
                if (typeof iterFn != 'function') throw TypeError(iterable + ' is not iterable!');
                // fast case for arrays with default iterator
                if (_isArrayIter(iterFn))
                    for (length = _toLength(iterable.length); length > index; index++) {
                        result = entries ? f(_anObject(step = iterable[index])[0], step[1]) : f(iterable[index]);
                        if (result === BREAK || result === RETURN) return result;
                    } else
                        for (iterator = iterFn.call(iterable); !(step = iterator.next()).done;) {
                            result = _iterCall(iterator, f, step.value, entries);
                            if (result === BREAK || result === RETURN) return result;
                        }
            };
            exports.BREAK = BREAK;
            exports.RETURN = RETURN;
        });

        'use strict';



        var SPECIES = _wks('species');

        var _setSpecies = function(KEY) {
            var C = _global[KEY];
            if (_descriptors && C && !C[SPECIES]) _objectDp.f(C, SPECIES, {
                configurable: true,
                get: function() { return this; }
            });
        };

        var _meta = createCommonjsModule(function(module) {
            var META = _uid('meta');


            var setDesc = _objectDp.f;
            var id = 0;
            var isExtensible = Object.isExtensible || function() {
                return true;
            };
            var FREEZE = !_fails(function() {
                return isExtensible(Object.preventExtensions({}));
            });
            var setMeta = function(it) {
                setDesc(it, META, {
                    value: {
                        i: 'O' + ++id, // object ID
                        w: {} // weak collections IDs
                    }
                });
            };
            var fastKey = function(it, create) {
                // return primitive with prefix
                if (!_isObject(it)) return typeof it == 'symbol' ? it : (typeof it == 'string' ? 'S' : 'P') + it;
                if (!_has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return 'F';
                    // not necessary to add metadata
                    if (!create) return 'E';
                    // add missing metadata
                    setMeta(it);
                    // return object ID
                }
                return it[META].i;
            };
            var getWeak = function(it, create) {
                if (!_has(it, META)) {
                    // can't set metadata to uncaught frozen object
                    if (!isExtensible(it)) return true;
                    // not necessary to add metadata
                    if (!create) return false;
                    // add missing metadata
                    setMeta(it);
                    // return hash weak collections IDs
                }
                return it[META].w;
            };
            // add metadata on freeze-family methods calling
            var onFreeze = function(it) {
                if (FREEZE && meta.NEED && isExtensible(it) && !_has(it, META)) setMeta(it);
                return it;
            };
            var meta = module.exports = {
                KEY: META,
                NEED: false,
                fastKey: fastKey,
                getWeak: getWeak,
                onFreeze: onFreeze
            };
        });

        var _validateCollection = function(it, TYPE) {
            if (!_isObject(it) || it._t !== TYPE) throw TypeError('Incompatible receiver, ' + TYPE + ' required!');
            return it;
        };

        'use strict';
        var dP$2 = _objectDp.f;









        var fastKey = _meta.fastKey;

        var SIZE = _descriptors ? '_s' : 'size';

        var getEntry = function(that, key) {
            // fast case
            var index = fastKey(key);
            var entry;
            if (index !== 'F') return that._i[index];
            // frozen object case
            for (entry = that._f; entry; entry = entry.n) {
                if (entry.k == key) return entry;
            }
        };

        var _collectionStrong = {
            getConstructor: function(wrapper, NAME, IS_MAP, ADDER) {
                var C = wrapper(function(that, iterable) {
                    _anInstance(that, C, NAME, '_i');
                    that._t = NAME; // collection type
                    that._i = _objectCreate(null); // index
                    that._f = undefined; // first entry
                    that._l = undefined; // last entry
                    that[SIZE] = 0; // size
                    if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
                });
                _redefineAll(C.prototype, {
                    // 23.1.3.1 Map.prototype.clear()
                    // 23.2.3.2 Set.prototype.clear()
                    clear: function clear() {
                        for (var that = _validateCollection(this, NAME), data = that._i, entry = that._f; entry; entry = entry.n) {
                            entry.r = true;
                            if (entry.p) entry.p = entry.p.n = undefined;
                            delete data[entry.i];
                        }
                        that._f = that._l = undefined;
                        that[SIZE] = 0;
                    },
                    // 23.1.3.3 Map.prototype.delete(key)
                    // 23.2.3.4 Set.prototype.delete(value)
                    'delete': function(key) {
                        var that = _validateCollection(this, NAME);
                        var entry = getEntry(that, key);
                        if (entry) {
                            var next = entry.n;
                            var prev = entry.p;
                            delete that._i[entry.i];
                            entry.r = true;
                            if (prev) prev.n = next;
                            if (next) next.p = prev;
                            if (that._f == entry) that._f = next;
                            if (that._l == entry) that._l = prev;
                            that[SIZE]--;
                        }
                        return !!entry;
                    },
                    // 23.2.3.6 Set.prototype.forEach(callbackfn, thisArg = undefined)
                    // 23.1.3.5 Map.prototype.forEach(callbackfn, thisArg = undefined)
                    forEach: function forEach(callbackfn /* , that = undefined */ ) {
                        _validateCollection(this, NAME);
                        var f = _ctx(callbackfn, arguments.length > 1 ? arguments[1] : undefined, 3);
                        var entry;
                        while (entry = entry ? entry.n : this._f) {
                            f(entry.v, entry.k, this);
                            // revert to the last existing entry
                            while (entry && entry.r) entry = entry.p;
                        }
                    },
                    // 23.1.3.7 Map.prototype.has(key)
                    // 23.2.3.7 Set.prototype.has(value)
                    has: function has(key) {
                        return !!getEntry(_validateCollection(this, NAME), key);
                    }
                });
                if (_descriptors) dP$2(C.prototype, 'size', {
                    get: function() {
                        return _validateCollection(this, NAME)[SIZE];
                    }
                });
                return C;
            },
            def: function(that, key, value) {
                var entry = getEntry(that, key);
                var prev, index;
                // change existing entry
                if (entry) {
                    entry.v = value;
                    // create new entry
                } else {
                    that._l = entry = {
                        i: index = fastKey(key, true), // <- index
                        k: key, // <- key
                        v: value, // <- value
                        p: prev = that._l, // <- previous entry
                        n: undefined, // <- next entry
                        r: false // <- removed
                    };
                    if (!that._f) that._f = entry;
                    if (prev) prev.n = entry;
                    that[SIZE]++;
                    // add to index
                    if (index !== 'F') that._i[index] = entry;
                }
                return that;
            },
            getEntry: getEntry,
            setStrong: function(C, NAME, IS_MAP) {
                // add .keys, .values, .entries, [@@iterator]
                // 23.1.3.4, 23.1.3.8, 23.1.3.11, 23.1.3.12, 23.2.3.5, 23.2.3.8, 23.2.3.10, 23.2.3.11
                _iterDefine(C, NAME, function(iterated, kind) {
                    this._t = _validateCollection(iterated, NAME); // target
                    this._k = kind; // kind
                    this._l = undefined; // previous
                }, function() {
                    var that = this;
                    var kind = that._k;
                    var entry = that._l;
                    // revert to the last existing entry
                    while (entry && entry.r) entry = entry.p;
                    // get next entry
                    if (!that._t || !(that._l = entry = entry ? entry.n : that._t._f)) {
                        // or finish the iteration
                        that._t = undefined;
                        return _iterStep(1);
                    }
                    // return step by kind
                    if (kind == 'keys') return _iterStep(0, entry.k);
                    if (kind == 'values') return _iterStep(0, entry.v);
                    return _iterStep(0, [entry.k, entry.v]);
                }, IS_MAP ? 'entries' : 'values', !IS_MAP, true);

                // add [@@species], 23.1.2.2, 23.2.2.2
                _setSpecies(NAME);
            }
        };

        var ITERATOR$4 = _wks('iterator');
        var SAFE_CLOSING = false;

        try {
            var riter = [7][ITERATOR$4]();
            riter['return'] = function() { SAFE_CLOSING = true; };
            // eslint-disable-next-line no-throw-literal

        } catch (e) { /* empty */ }

        var _iterDetect = function(exec, skipClosing) {
            if (!skipClosing && !SAFE_CLOSING) return false;
            var safe = false;
            try {
                var arr = [7];
                var iter = arr[ITERATOR$4]();
                iter.next = function() { return { done: safe = true }; };
                arr[ITERATOR$4] = function() { return iter; };
                exec(arr);
            } catch (e) { /* empty */ }
            return safe;
        };

        var f$2 = {}.propertyIsEnumerable;

        var _objectPie = {
            f: f$2
        };

        var gOPD = Object.getOwnPropertyDescriptor;

        var f$1 = _descriptors ? gOPD : function getOwnPropertyDescriptor(O, P) {
            O = _toIobject(O);
            P = _toPrimitive(P, true);
            if (_ie8DomDefine) try {
                return gOPD(O, P);
            } catch (e) { /* empty */ }
            if (_has(O, P)) return _propertyDesc(!_objectPie.f.call(O, P), O[P]);
        };

        var _objectGopd = {
            f: f$1
        };

        // Works with __proto__ only. Old v8 can't work with null proto objects.
        /* eslint-disable no-proto */


        var check = function(O, proto) {
            _anObject(O);
            if (!_isObject(proto) && proto !== null) throw TypeError(proto + ": can't set as prototype!");
        };
        var _setProto = {
            set: Object.setPrototypeOf || ('__proto__' in {} ? // eslint-disable-line
                function(test, buggy, set) {
                    try {
                        set = _ctx(Function.call, _objectGopd.f(Object.prototype, '__proto__').set, 2);
                        set(test, []);
                        buggy = !(test instanceof Array);
                    } catch (e) { buggy = true; }
                    return function setPrototypeOf(O, proto) {
                        check(O, proto);
                        if (buggy) O.__proto__ = proto;
                        else set(O, proto);
                        return O;
                    };
                }({}, false) : undefined),
            check: check
        };

        var setPrototypeOf = _setProto.set;
        var _inheritIfRequired = function(that, target, C) {
            var S = target.constructor;
            var P;
            if (S !== C && typeof S == 'function' && (P = S.prototype) !== C.prototype && _isObject(P) && setPrototypeOf) {
                setPrototypeOf(that, P);
            }
            return that;
        };

        'use strict';













        var _collection = function(NAME, wrapper, methods, common, IS_MAP, IS_WEAK) {
            var Base = _global[NAME];
            var C = Base;
            var ADDER = IS_MAP ? 'set' : 'add';
            var proto = C && C.prototype;
            var O = {};
            var fixMethod = function(KEY) {
                var fn = proto[KEY];
                _redefine(proto, KEY,
                    KEY == 'delete' ? function(a) {
                        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'has' ? function has(a) {
                        return IS_WEAK && !_isObject(a) ? false : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'get' ? function get(a) {
                        return IS_WEAK && !_isObject(a) ? undefined : fn.call(this, a === 0 ? 0 : a);
                    } : KEY == 'add' ? function add(a) { fn.call(this, a === 0 ? 0 : a); return this; } :
                    function set(a, b) { fn.call(this, a === 0 ? 0 : a, b); return this; }
                );
            };
            if (typeof C != 'function' || !(IS_WEAK || proto.forEach && !_fails(function() {
                    new C().entries().next();
                }))) {
                // create collection constructor
                C = common.getConstructor(wrapper, NAME, IS_MAP, ADDER);
                _redefineAll(C.prototype, methods);
                _meta.NEED = true;
            } else {
                var instance = new C();
                // early implementations not supports chaining
                var HASNT_CHAINING = instance[ADDER](IS_WEAK ? {} : -0, 1) != instance;
                // V8 ~  Chromium 40- weak-collections throws on primitives, but should return false
                var THROWS_ON_PRIMITIVES = _fails(function() { instance.has(1); });
                // most early implementations doesn't supports iterables, most modern - not close it correctly
                var ACCEPT_ITERABLES = _iterDetect(function(iter) { new C(iter); }); // eslint-disable-line no-new
                // for early implementations -0 and +0 not the same
                var BUGGY_ZERO = !IS_WEAK && _fails(function() {
                    // V8 ~ Chromium 42- fails only with 5+ elements
                    var $instance = new C();
                    var index = 5;
                    while (index--) $instance[ADDER](index, index);
                    return !$instance.has(-0);
                });
                if (!ACCEPT_ITERABLES) {
                    C = wrapper(function(target, iterable) {
                        _anInstance(target, C, NAME);
                        var that = _inheritIfRequired(new Base(), target, C);
                        if (iterable != undefined) _forOf(iterable, IS_MAP, that[ADDER], that);
                        return that;
                    });
                    C.prototype = proto;
                    proto.constructor = C;
                }
                if (THROWS_ON_PRIMITIVES || BUGGY_ZERO) {
                    fixMethod('delete');
                    fixMethod('has');
                    IS_MAP && fixMethod('get');
                }
                if (BUGGY_ZERO || HASNT_CHAINING) fixMethod(ADDER);
                // weak collections should not contains .clear method
                if (IS_WEAK && proto.clear) delete proto.clear;
            }

            _setToStringTag(C, NAME);

            O[NAME] = C;
            _export(_export.G + _export.W + _export.F * (C != Base), O);

            if (!IS_WEAK) common.setStrong(C, NAME, IS_MAP);

            return C;
        };

        'use strict';


        var SET = 'Set';

        // 23.2 Set Objects
        var es6_set = _collection(SET, function(get) {
            return function Set() { return get(this, arguments.length > 0 ? arguments[0] : undefined); };
        }, {
            // 23.2.3.1 Set.prototype.add(value)
            add: function add(value) {
                return _collectionStrong.def(_validateCollection(this, SET), value = value === 0 ? 0 : value, value);
            }
        }, _collectionStrong);

        var f$3 = _wks;

        var _wksExt = {
            f: f$3
        };

        var defineProperty = _objectDp.f;
        var _wksDefine = function(name) {
            var $Symbol = _core.Symbol || (_core.Symbol = _library ? {} : _global.Symbol || {});
            if (name.charAt(0) != '_' && !(name in $Symbol)) defineProperty($Symbol, name, { value: _wksExt.f(name) });
        };

        var f$4 = Object.getOwnPropertySymbols;

        var _objectGops = {
            f: f$4
        };

        // all enumerable object keys, includes symbols



        var _enumKeys = function(it) {
            var result = _objectKeys(it);
            var getSymbols = _objectGops.f;
            if (getSymbols) {
                var symbols = getSymbols(it);
                var isEnum = _objectPie.f;
                var i = 0;
                var key;
                while (symbols.length > i)
                    if (isEnum.call(it, key = symbols[i++])) result.push(key);
            }
            return result;
        };

        // 7.2.2 IsArray(argument)

        var _isArray = Array.isArray || function isArray(arg) {
            return _cof(arg) == 'Array';
        };

        // 19.1.2.7 / 15.2.3.4 Object.getOwnPropertyNames(O)

        var hiddenKeys = _enumBugKeys.concat('length', 'prototype');

        var f$6 = Object.getOwnPropertyNames || function getOwnPropertyNames(O) {
            return _objectKeysInternal(O, hiddenKeys);
        };

        var _objectGopn = {
            f: f$6
        };

        // fallback for IE11 buggy Object.getOwnPropertyNames with iframe and window

        var gOPN$1 = _objectGopn.f;
        var toString$1 = {}.toString;

        var windowNames = typeof window == 'object' && window && Object.getOwnPropertyNames ?
            Object.getOwnPropertyNames(window) : [];

        var getWindowNames = function(it) {
            try {
                return gOPN$1(it);
            } catch (e) {
                return windowNames.slice();
            }
        };

        var f$5 = function getOwnPropertyNames(it) {
            return windowNames && toString$1.call(it) == '[object Window]' ? getWindowNames(it) : gOPN$1(_toIobject(it));
        };

        var _objectGopnExt = {
            f: f$5
        };

        'use strict';
        // ECMAScript 6 symbols shim





        var META = _meta.KEY;



















        var gOPD$2 = _objectGopd.f;
        var dP$3 = _objectDp.f;
        var gOPN = _objectGopnExt.f;
        var $Symbol = _global.Symbol;
        var $JSON = _global.JSON;
        var _stringify = $JSON && $JSON.stringify;
        var PROTOTYPE$2 = 'prototype';
        var HIDDEN = _wks('_hidden');
        var TO_PRIMITIVE = _wks('toPrimitive');
        var isEnum = {}.propertyIsEnumerable;
        var SymbolRegistry = _shared('symbol-registry');
        var AllSymbols = _shared('symbols');
        var OPSymbols = _shared('op-symbols');
        var ObjectProto$1 = Object[PROTOTYPE$2];
        var USE_NATIVE = typeof $Symbol == 'function';
        var QObject = _global.QObject;
        // Don't use setters in Qt Script, https://github.com/zloirock/core-js/issues/173
        var setter = !QObject || !QObject[PROTOTYPE$2] || !QObject[PROTOTYPE$2].findChild;

        // fallback for old Android, https://code.google.com/p/v8/issues/detail?id=687
        var setSymbolDesc = _descriptors && _fails(function() {
            return _objectCreate(dP$3({}, 'a', {
                get: function() { return dP$3(this, 'a', { value: 7 }).a; }
            })).a != 7;
        }) ? function(it, key, D) {
            var protoDesc = gOPD$2(ObjectProto$1, key);
            if (protoDesc) delete ObjectProto$1[key];
            dP$3(it, key, D);
            if (protoDesc && it !== ObjectProto$1) dP$3(ObjectProto$1, key, protoDesc);
        } : dP$3;

        var wrap = function(tag) {
            var sym = AllSymbols[tag] = _objectCreate($Symbol[PROTOTYPE$2]);
            sym._k = tag;
            return sym;
        };

        var isSymbol = USE_NATIVE && typeof $Symbol.iterator == 'symbol' ? function(it) {
            return typeof it == 'symbol';
        } : function(it) {
            return it instanceof $Symbol;
        };

        var $defineProperty = function defineProperty(it, key, D) {
            if (it === ObjectProto$1) $defineProperty(OPSymbols, key, D);
            _anObject(it);
            key = _toPrimitive(key, true);
            _anObject(D);
            if (_has(AllSymbols, key)) {
                if (!D.enumerable) {
                    if (!_has(it, HIDDEN)) dP$3(it, HIDDEN, _propertyDesc(1, {}));
                    it[HIDDEN][key] = true;
                } else {
                    if (_has(it, HIDDEN) && it[HIDDEN][key]) it[HIDDEN][key] = false;
                    D = _objectCreate(D, { enumerable: _propertyDesc(0, false) });
                }
                return setSymbolDesc(it, key, D);
            }
            return dP$3(it, key, D);
        };
        var $defineProperties = function defineProperties(it, P) {
            _anObject(it);
            var keys = _enumKeys(P = _toIobject(P));
            var i = 0;
            var l = keys.length;
            var key;
            while (l > i) $defineProperty(it, key = keys[i++], P[key]);
            return it;
        };
        var $create = function create(it, P) {
            return P === undefined ? _objectCreate(it) : $defineProperties(_objectCreate(it), P);
        };
        var $propertyIsEnumerable = function propertyIsEnumerable(key) {
            var E = isEnum.call(this, key = _toPrimitive(key, true));
            if (this === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return false;
            return E || !_has(this, key) || !_has(AllSymbols, key) || _has(this, HIDDEN) && this[HIDDEN][key] ? E : true;
        };
        var $getOwnPropertyDescriptor = function getOwnPropertyDescriptor(it, key) {
            it = _toIobject(it);
            key = _toPrimitive(key, true);
            if (it === ObjectProto$1 && _has(AllSymbols, key) && !_has(OPSymbols, key)) return;
            var D = gOPD$2(it, key);
            if (D && _has(AllSymbols, key) && !(_has(it, HIDDEN) && it[HIDDEN][key])) D.enumerable = true;
            return D;
        };
        var $getOwnPropertyNames = function getOwnPropertyNames(it) {
            var names = gOPN(_toIobject(it));
            var result = [];
            var i = 0;
            var key;
            while (names.length > i) {
                if (!_has(AllSymbols, key = names[i++]) && key != HIDDEN && key != META) result.push(key);
            }
            return result;
        };
        var $getOwnPropertySymbols = function getOwnPropertySymbols(it) {
            var IS_OP = it === ObjectProto$1;
            var names = gOPN(IS_OP ? OPSymbols : _toIobject(it));
            var result = [];
            var i = 0;
            var key;
            while (names.length > i) {
                if (_has(AllSymbols, key = names[i++]) && (IS_OP ? _has(ObjectProto$1, key) : true)) result.push(AllSymbols[key]);
            }
            return result;
        };

        // 19.4.1.1 Symbol([description])
        if (!USE_NATIVE) {
            $Symbol = function Symbol() {
                if (this instanceof $Symbol) throw TypeError('Symbol is not a constructor!');
                var tag = _uid(arguments.length > 0 ? arguments[0] : undefined);
                var $set = function(value) {
                    if (this === ObjectProto$1) $set.call(OPSymbols, value);
                    if (_has(this, HIDDEN) && _has(this[HIDDEN], tag)) this[HIDDEN][tag] = false;
                    setSymbolDesc(this, tag, _propertyDesc(1, value));
                };
                if (_descriptors && setter) setSymbolDesc(ObjectProto$1, tag, { configurable: true, set: $set });
                return wrap(tag);
            };
            _redefine($Symbol[PROTOTYPE$2], 'toString', function toString() {
                return this._k;
            });

            _objectGopd.f = $getOwnPropertyDescriptor;
            _objectDp.f = $defineProperty;
            _objectGopn.f = _objectGopnExt.f = $getOwnPropertyNames;
            _objectPie.f = $propertyIsEnumerable;
            _objectGops.f = $getOwnPropertySymbols;

            if (_descriptors && !_library) {
                _redefine(ObjectProto$1, 'propertyIsEnumerable', $propertyIsEnumerable, true);
            }

            _wksExt.f = function(name) {
                return wrap(_wks(name));
            };
        }

        _export(_export.G + _export.W + _export.F * !USE_NATIVE, { Symbol: $Symbol });

        for (var es6Symbols = (
                // 19.4.2.2, 19.4.2.3, 19.4.2.4, 19.4.2.6, 19.4.2.8, 19.4.2.9, 19.4.2.10, 19.4.2.11, 19.4.2.12, 19.4.2.13, 19.4.2.14
                'hasInstance,isConcatSpreadable,iterator,match,replace,search,species,split,toPrimitive,toStringTag,unscopables'
            ).split(','), j = 0; es6Symbols.length > j;) _wks(es6Symbols[j++]);

        for (var wellKnownSymbols = _objectKeys(_wks.store), k = 0; wellKnownSymbols.length > k;) _wksDefine(wellKnownSymbols[k++]);

        _export(_export.S + _export.F * !USE_NATIVE, 'Symbol', {
            // 19.4.2.1 Symbol.for(key)
            'for': function(key) {
                return _has(SymbolRegistry, key += '') ?
                    SymbolRegistry[key] :
                    SymbolRegistry[key] = $Symbol(key);
            },
            // 19.4.2.5 Symbol.keyFor(sym)
            keyFor: function keyFor(sym) {
                if (!isSymbol(sym)) throw TypeError(sym + ' is not a symbol!');
                for (var key in SymbolRegistry)
                    if (SymbolRegistry[key] === sym) return key;
            },
            useSetter: function() { setter = true; },
            useSimple: function() { setter = false; }
        });

        _export(_export.S + _export.F * !USE_NATIVE, 'Object', {
            // 19.1.2.2 Object.create(O [, Properties])
            create: $create,
            // 19.1.2.4 Object.defineProperty(O, P, Attributes)
            defineProperty: $defineProperty,
            // 19.1.2.3 Object.defineProperties(O, Properties)
            defineProperties: $defineProperties,
            // 19.1.2.6 Object.getOwnPropertyDescriptor(O, P)
            getOwnPropertyDescriptor: $getOwnPropertyDescriptor,
            // 19.1.2.7 Object.getOwnPropertyNames(O)
            getOwnPropertyNames: $getOwnPropertyNames,
            // 19.1.2.8 Object.getOwnPropertySymbols(O)
            getOwnPropertySymbols: $getOwnPropertySymbols
        });

        // 24.3.2 JSON.stringify(value [, replacer [, space]])
        $JSON && _export(_export.S + _export.F * (!USE_NATIVE || _fails(function() {
            var S = $Symbol();
            // MS Edge converts symbol values to JSON as {}
            // WebKit converts symbol values to JSON as null
            // V8 throws on boxed symbols
            return _stringify([S]) != '[null]' || _stringify({ a: S }) != '{}' || _stringify(Object(S)) != '{}';
        })), 'JSON', {
            stringify: function stringify(it) {
                var args = [it];
                var i = 1;
                var replacer, $replacer;
                while (arguments.length > i) args.push(arguments[i++]);
                $replacer = replacer = args[1];
                if (!_isObject(replacer) && it === undefined || isSymbol(it)) return; // IE8 returns string on undefined
                if (!_isArray(replacer)) replacer = function(key, value) {
                    if (typeof $replacer == 'function') value = $replacer.call(this, key, value);
                    if (!isSymbol(value)) return value;
                };
                args[1] = replacer;
                return _stringify.apply($JSON, args);
            }
        });

        // 19.4.3.4 Symbol.prototype[@@toPrimitive](hint)
        $Symbol[PROTOTYPE$2][TO_PRIMITIVE] || _hide($Symbol[PROTOTYPE$2], TO_PRIMITIVE, $Symbol[PROTOTYPE$2].valueOf);
        // 19.4.3.5 Symbol.prototype[@@toStringTag]
        _setToStringTag($Symbol, 'Symbol');
        // 20.2.1.9 Math[@@toStringTag]
        _setToStringTag(Math, 'Math', true);
        // 24.3.3 JSON[@@toStringTag]
        _setToStringTag(_global.JSON, 'JSON', true);

        // 26.1.1 Reflect.apply(target, thisArgument, argumentsList)



        var rApply = (_global.Reflect || {}).apply;
        var fApply = Function.apply;
        // MS Edge argumentsList argument is optional
        _export(_export.S + _export.F * !_fails(function() {
            rApply(function() { /* empty */ });
        }), 'Reflect', {
            apply: function apply(target, thisArgument, argumentsList) {
                var T = _aFunction(target);
                var L = _anObject(argumentsList);
                return rApply ? rApply(T, thisArgument, L) : fApply.call(T, thisArgument, L);
            }
        });

        // fast apply, http://jsperf.lnkit.com/fast-apply/5
        var _invoke = function(fn, args, that) {
            var un = that === undefined;
            switch (args.length) {
                case 0:
                    return un ? fn() :
                        fn.call(that);
                case 1:
                    return un ? fn(args[0]) :
                        fn.call(that, args[0]);
                case 2:
                    return un ? fn(args[0], args[1]) :
                        fn.call(that, args[0], args[1]);
                case 3:
                    return un ? fn(args[0], args[1], args[2]) :
                        fn.call(that, args[0], args[1], args[2]);
                case 4:
                    return un ? fn(args[0], args[1], args[2], args[3]) :
                        fn.call(that, args[0], args[1], args[2], args[3]);
            }
            return fn.apply(that, args);
        };

        'use strict';



        var arraySlice = [].slice;
        var factories = {};

        var construct = function(F, len, args) {
            if (!(len in factories)) {
                for (var n = [], i = 0; i < len; i++) n[i] = 'a[' + i + ']';
                // eslint-disable-next-line no-new-func
                factories[len] = Function('F,a', 'return new F(' + n.join(',') + ')');
            }
            return factories[len](F, args);
        };

        var _bind = Function.bind || function bind(that /* , ...args */ ) {
            var fn = _aFunction(this);
            var partArgs = arraySlice.call(arguments, 1);
            var bound = function( /* args... */ ) {
                var args = partArgs.concat(arraySlice.call(arguments));
                return this instanceof bound ? construct(fn, args.length, args) : _invoke(fn, args, that);
            };
            if (_isObject(fn.prototype)) bound.prototype = fn.prototype;
            return bound;
        };

        // 26.1.2 Reflect.construct(target, argumentsList [, newTarget])







        var rConstruct = (_global.Reflect || {}).construct;

        // MS Edge supports only 2 arguments and argumentsList argument is optional
        // FF Nightly sets third argument as `new.target`, but does not create `this` from it
        var NEW_TARGET_BUG = _fails(function() {
            function F() { /* empty */ }
            return !(rConstruct(function() { /* empty */ }, [], F) instanceof F);
        });
        var ARGS_BUG = !_fails(function() {
            rConstruct(function() { /* empty */ });
        });

        _export(_export.S + _export.F * (NEW_TARGET_BUG || ARGS_BUG), 'Reflect', {
            construct: function construct(Target, args /* , newTarget */ ) {
                _aFunction(Target);
                _anObject(args);
                var newTarget = arguments.length < 3 ? Target : _aFunction(arguments[2]);
                if (ARGS_BUG && !NEW_TARGET_BUG) return rConstruct(Target, args, newTarget);
                if (Target == newTarget) {
                    // w/o altered newTarget, optimization for 0-4 arguments
                    switch (args.length) {
                        case 0:
                            return new Target();
                        case 1:
                            return new Target(args[0]);
                        case 2:
                            return new Target(args[0], args[1]);
                        case 3:
                            return new Target(args[0], args[1], args[2]);
                        case 4:
                            return new Target(args[0], args[1], args[2], args[3]);
                    }
                    // w/o altered newTarget, lot of arguments case
                    var $args = [null];
                    $args.push.apply($args, args);
                    return new(_bind.apply(Target, $args))();
                }
                // with altered newTarget, not support built-in constructors
                var proto = newTarget.prototype;
                var instance = _objectCreate(_isObject(proto) ? proto : Object.prototype);
                var result = Function.apply.call(Target, instance, args);
                return _isObject(result) ? result : instance;
            }
        });

        // 26.1.3 Reflect.defineProperty(target, propertyKey, attributes)





        // MS Edge has broken Reflect.defineProperty - throwing instead of returning false
        _export(_export.S + _export.F * _fails(function() {
            // eslint-disable-next-line no-undef
            Reflect.defineProperty(_objectDp.f({}, 1, { value: 1 }), 1, { value: 2 });
        }), 'Reflect', {
            defineProperty: function defineProperty(target, propertyKey, attributes) {
                _anObject(target);
                propertyKey = _toPrimitive(propertyKey, true);
                _anObject(attributes);
                try {
                    _objectDp.f(target, propertyKey, attributes);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });

        // 26.1.4 Reflect.deleteProperty(target, propertyKey)

        var gOPD$3 = _objectGopd.f;


        _export(_export.S, 'Reflect', {
            deleteProperty: function deleteProperty(target, propertyKey) {
                var desc = gOPD$3(_anObject(target), propertyKey);
                return desc && !desc.configurable ? false : delete target[propertyKey];
            }
        });

        'use strict';
        // 26.1.5 Reflect.enumerate(target)


        var Enumerate = function(iterated) {
            this._t = _anObject(iterated); // target
            this._i = 0; // next index
            var keys = this._k = []; // keys
            var key;
            for (key in iterated) keys.push(key);
        };
        _iterCreate(Enumerate, 'Object', function() {
            var that = this;
            var keys = that._k;
            var key;
            do {
                if (that._i >= keys.length) return { value: undefined, done: true };
            } while (!((key = keys[that._i++]) in that._t));
            return { value: key, done: false };
        });

        _export(_export.S, 'Reflect', {
            enumerate: function enumerate(target) {
                return new Enumerate(target);
            }
        });

        // 26.1.6 Reflect.get(target, propertyKey [, receiver])







        function get(target, propertyKey /* , receiver */ ) {
            var receiver = arguments.length < 3 ? target : arguments[2];
            var desc, proto;
            if (_anObject(target) === receiver) return target[propertyKey];
            if (desc = _objectGopd.f(target, propertyKey)) return _has(desc, 'value') ?
                desc.value :
                desc.get !== undefined ?
                desc.get.call(receiver) :
                undefined;
            if (_isObject(proto = _objectGpo(target))) return get(proto, propertyKey, receiver);
        }

        _export(_export.S, 'Reflect', { get: get });

        // 26.1.7 Reflect.getOwnPropertyDescriptor(target, propertyKey)




        _export(_export.S, 'Reflect', {
            getOwnPropertyDescriptor: function getOwnPropertyDescriptor(target, propertyKey) {
                return _objectGopd.f(_anObject(target), propertyKey);
            }
        });

        // 26.1.8 Reflect.getPrototypeOf(target)




        _export(_export.S, 'Reflect', {
            getPrototypeOf: function getPrototypeOf(target) {
                return _objectGpo(_anObject(target));
            }
        });

        // 26.1.9 Reflect.has(target, propertyKey)


        _export(_export.S, 'Reflect', {
            has: function has(target, propertyKey) {
                return propertyKey in target;
            }
        });

        // 26.1.10 Reflect.isExtensible(target)


        var $isExtensible = Object.isExtensible;

        _export(_export.S, 'Reflect', {
            isExtensible: function isExtensible(target) {
                _anObject(target);
                return $isExtensible ? $isExtensible(target) : true;
            }
        });

        // all object keys, includes non-enumerable and symbols



        var Reflect$1 = _global.Reflect;
        var _ownKeys = Reflect$1 && Reflect$1.ownKeys || function ownKeys(it) {
            var keys = _objectGopn.f(_anObject(it));
            var getSymbols = _objectGops.f;
            return getSymbols ? keys.concat(getSymbols(it)) : keys;
        };

        // 26.1.11 Reflect.ownKeys(target)


        _export(_export.S, 'Reflect', { ownKeys: _ownKeys });

        // 26.1.12 Reflect.preventExtensions(target)


        var $preventExtensions = Object.preventExtensions;

        _export(_export.S, 'Reflect', {
            preventExtensions: function preventExtensions(target) {
                _anObject(target);
                try {
                    if ($preventExtensions) $preventExtensions(target);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });

        // 26.1.13 Reflect.set(target, propertyKey, V [, receiver])









        function set$2(target, propertyKey, V /* , receiver */ ) {
            var receiver = arguments.length < 4 ? target : arguments[3];
            var ownDesc = _objectGopd.f(_anObject(target), propertyKey);
            var existingDescriptor, proto;
            if (!ownDesc) {
                if (_isObject(proto = _objectGpo(target))) {
                    return set$2(proto, propertyKey, V, receiver);
                }
                ownDesc = _propertyDesc(0);
            }
            if (_has(ownDesc, 'value')) {
                if (ownDesc.writable === false || !_isObject(receiver)) return false;
                existingDescriptor = _objectGopd.f(receiver, propertyKey) || _propertyDesc(0);
                existingDescriptor.value = V;
                _objectDp.f(receiver, propertyKey, existingDescriptor);
                return true;
            }
            return ownDesc.set === undefined ? false : (ownDesc.set.call(receiver, V), true);
        }

        _export(_export.S, 'Reflect', { set: set$2 });

        // 26.1.14 Reflect.setPrototypeOf(target, proto)



        if (_setProto) _export(_export.S, 'Reflect', {
            setPrototypeOf: function setPrototypeOf(target, proto) {
                _setProto.check(target, proto);
                try {
                    _setProto.set(target, proto);
                    return true;
                } catch (e) {
                    return false;
                }
            }
        });

        var _typeof = typeof Symbol === "function" && typeof Symbol.iterator === "symbol" ? function(obj) {
            return typeof obj;
        } : function(obj) {
            return obj && typeof Symbol === "function" && obj.constructor === Symbol && obj !== Symbol.prototype ? "symbol" : typeof obj;
        };





        var asyncGenerator = function() {
            function AwaitValue(value) {
                this.value = value;
            }

            function AsyncGenerator(gen) {
                var front, back;

                function send(key, arg) {
                    return new Promise(function(resolve, reject) {
                        var request = {
                            key: key,
                            arg: arg,
                            resolve: resolve,
                            reject: reject,
                            next: null
                        };

                        if (back) {
                            back = back.next = request;
                        } else {
                            front = back = request;
                            resume(key, arg);
                        }
                    });
                }

                function resume(key, arg) {
                    try {
                        var result = gen[key](arg);
                        var value = result.value;

                        if (value instanceof AwaitValue) {
                            Promise.resolve(value.value).then(function(arg) {
                                resume("next", arg);
                            }, function(arg) {
                                resume("throw", arg);
                            });
                        } else {
                            settle(result.done ? "return" : "normal", result.value);
                        }
                    } catch (err) {
                        settle("throw", err);
                    }
                }

                function settle(type, value) {
                    switch (type) {
                        case "return":
                            front.resolve({
                                value: value,
                                done: true
                            });
                            break;

                        case "throw":
                            front.reject(value);
                            break;

                        default:
                            front.resolve({
                                value: value,
                                done: false
                            });
                            break;
                    }

                    front = front.next;

                    if (front) {
                        resume(front.key, front.arg);
                    } else {
                        back = null;
                    }
                }

                this._invoke = send;

                if (typeof gen.return !== "function") {
                    this.return = undefined;
                }
            }

            if (typeof Symbol === "function" && Symbol.asyncIterator) {
                AsyncGenerator.prototype[Symbol.asyncIterator] = function() {
                    return this;
                };
            }

            AsyncGenerator.prototype.next = function(arg) {
                return this._invoke("next", arg);
            };

            AsyncGenerator.prototype.throw = function(arg) {
                return this._invoke("throw", arg);
            };

            AsyncGenerator.prototype.return = function(arg) {
                return this._invoke("return", arg);
            };

            return {
                wrap: function(fn) {
                    return function() {
                        return new AsyncGenerator(fn.apply(this, arguments));
                    };
                },
                await: function(value) {
                    return new AwaitValue(value);
                }
            };
        }();





        var classCallCheck = function(instance, Constructor) {
            if (!(instance instanceof Constructor)) {
                throw new TypeError("Cannot call a class as a function");
            }
        };











        var inherits = function(subClass, superClass) {
            if (typeof superClass !== "function" && superClass !== null) {
                throw new TypeError("Super expression must either be null or a function, not " + typeof superClass);
            }

            subClass.prototype = Object.create(superClass && superClass.prototype, {
                constructor: {
                    value: subClass,
                    enumerable: false,
                    writable: true,
                    configurable: true
                }
            });
            if (superClass) Object.setPrototypeOf ? Object.setPrototypeOf(subClass, superClass) : subClass.__proto__ = superClass;
        };











        var possibleConstructorReturn = function(self, call) {
            if (!self) {
                throw new ReferenceError("this hasn't been initialised - super() hasn't been called");
            }

            return call && (typeof call === "object" || typeof call === "function") ? call : self;
        };

        var copyProperties = function copyProperties(target, source) {
            for (var _iterator = Reflect.ownKeys(source), _isArray = Array.isArray(_iterator), _i = 0, _iterator = _isArray ? _iterator : _iterator[Symbol.iterator]();;) {
                var _ref;

                if (_isArray) {
                    if (_i >= _iterator.length) break;
                    _ref = _iterator[_i++];
                } else {
                    _i = _iterator.next();
                    if (_i.done) break;
                    _ref = _i.value;
                }

                var key = _ref;

                if (!key.match(/^(?:constructor|prototype|arguments|caller|name|bind|call|apply|toString|length)$/)) {
                    var desc = Object.getOwnPropertyDescriptor(source, key);
                    Object.defineProperty(target, key, desc);
                }
            }
        };

        var mixin = function mixin() {
            for (var _len = arguments.length, mixins = Array(_len), _key = 0; _key < _len; _key++) {
                mixins[_key] = arguments[_key];
            }

            var Mix = function Mix() {
                classCallCheck(this, Mix);
            };

            for (var key in mixins) {
                var _mixin = mixins[key];
                copyProperties(Mix, _mixin);
                copyProperties(Mix.prototype, _mixin.prototype);
            }
            return Mix;
        };

        var FITTING_COUNT = 100;
        var HALF_PI = Math.PI / 2;
        var ZERO_TOLERANCE = 0.0001;

        var BASE_LAYERNAME = 'ol-plot-vector-layer';
        var BASE_HELP_CONTROL_POINT_ID = 'plot-helper-control-point-div';
        var BASE_HELP_HIDDEN = 'plot-helper-hidden-div';
        var DEF_TEXT_STYEL = {
            borderRadius: '2px',
            fontSize: '12px',
            outline: 0,
            boxSizing: 'border-box',
            border: '1px solid #eeeeee',
            fontFamily: 'Helvetica Neue,Helvetica,PingFang SC,Hiragino Sans GB,Microsoft YaHei,Noto Sans CJK SC,WenQuanYi Micro Hei,Arial,sans-serif',
            color: '#010500',
            fontWeight: 400,
            padding: '3px',
            fontStretch: 'normal',
            lineHeight: 'normal',
            textAlign: 'left',
            marginLeft: 'auto',
            marginRight: 'auto',
            width: 'auto',
            height: 'auto',
            background: 'rgb(255, 255, 255)',
            fontStyle: '',
            fontVariant: ''
        };

        var MathDistance = function MathDistance(pnt1, pnt2) {
            return Math.sqrt(Math.pow(pnt1[0] - pnt2[0], 2) + Math.pow(pnt1[1] - pnt2[1], 2));
        };

        var wholeDistance = function wholeDistance(points) {
            var distance = 0;
            if (points && Array.isArray(points) && points.length > 0) {
                points.forEach(function(item, index) {
                    if (index < points.length - 1) {
                        distance += MathDistance(item, points[index + 1]);
                    }
                });
            }
            return distance;
        };

        var getBaseLength = function getBaseLength(points) {
            return Math.pow(wholeDistance(points), 0.99);
        };

        var Mid = function Mid(point1, point2) {
            return [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
        };

        var getCircleCenterOfThreePoints = function getCircleCenterOfThreePoints(point1, point2, point3) {
            var pntA = [(point1[0] + point2[0]) / 2, (point1[1] + point2[1]) / 2];
            var pntB = [pntA[0] - point1[1] + point2[1], pntA[1] + point1[0] - point2[0]];
            var pntC = [(point1[0] + point3[0]) / 2, (point1[1] + point3[1]) / 2];
            var pntD = [pntC[0] - point1[1] + point3[1], pntC[1] + point1[0] - point3[0]];
            return getIntersectPoint(pntA, pntB, pntC, pntD);
        };

        var getIntersectPoint = function getIntersectPoint(pntA, pntB, pntC, pntD) {
            if (pntA[1] === pntB[1]) {
                var _f = (pntD[0] - pntC[0]) / (pntD[1] - pntC[1]);
                var _x = _f * (pntA[1] - pntC[1]) + pntC[0];
                var _y = pntA[1];
                return [_x, _y];
            }
            if (pntC[1] === pntD[1]) {
                var _e = (pntB[0] - pntA[0]) / (pntB[1] - pntA[1]);
                var _x2 = _e * (pntC[1] - pntA[1]) + pntA[0];
                var _y2 = pntC[1];
                return [_x2, _y2];
            }
            var e = (pntB[0] - pntA[0]) / (pntB[1] - pntA[1]);
            var f = (pntD[0] - pntC[0]) / (pntD[1] - pntC[1]);
            var y = (e * pntA[1] - pntA[0] - f * pntC[1] + pntC[0]) / (e - f);
            var x = e * y - e * pntA[1] + pntA[0];
            return [x, y];
        };

        var getAzimuth = function getAzimuth(startPoint, endPoint) {
            var azimuth = void 0;
            var angle = Math.asin(Math.abs(endPoint[1] - startPoint[1]) / MathDistance(startPoint, endPoint));
            if (endPoint[1] >= startPoint[1] && endPoint[0] >= startPoint[0]) {
                azimuth = angle + Math.PI;
            } else if (endPoint[1] >= startPoint[1] && endPoint[0] < startPoint[0]) {
                azimuth = Math.PI * 2 - angle;
            } else if (endPoint[1] < startPoint[1] && endPoint[0] < startPoint[0]) {
                azimuth = angle;
            } else if (endPoint[1] < startPoint[1] && endPoint[0] >= startPoint[0]) {
                azimuth = Math.PI - angle;
            }
            return azimuth;
        };

        var getAngleOfThreePoints = function getAngleOfThreePoints(pntA, pntB, pntC) {
            var angle = getAzimuth(pntB, pntA) - getAzimuth(pntB, pntC);
            return angle < 0 ? angle + Math.PI * 2 : angle;
        };

        var isClockWise = function isClockWise(pnt1, pnt2, pnt3) {
            return (pnt3[1] - pnt1[1]) * (pnt2[0] - pnt1[0]) > (pnt2[1] - pnt1[1]) * (pnt3[0] - pnt1[0]);
        };



        var getCubicValue = function getCubicValue(t, startPnt, cPnt1, cPnt2, endPnt) {
            t = Math.max(Math.min(t, 1), 0);
            var tp = 1 - t,
                t2 = t * t;

            var t3 = t2 * t;
            var tp2 = tp * tp;
            var tp3 = tp2 * tp;
            var x = tp3 * startPnt[0] + 3 * tp2 * t * cPnt1[0] + 3 * tp * t2 * cPnt2[0] + t3 * endPnt[0];
            var y = tp3 * startPnt[1] + 3 * tp2 * t * cPnt1[1] + 3 * tp * t2 * cPnt2[1] + t3 * endPnt[1];
            return [x, y];
        };

        var getThirdPoint = function getThirdPoint(startPnt, endPnt, angle, distance, clockWise) {
            var azimuth = getAzimuth(startPnt, endPnt);
            var alpha = clockWise ? azimuth + angle : azimuth - angle;
            var dx = distance * Math.cos(alpha);
            var dy = distance * Math.sin(alpha);
            return [endPnt[0] + dx, endPnt[1] + dy];
        };



        var getArcPoints = function getArcPoints(center, radius, startAngle, endAngle) {
            var x = null,
                y = null,
                pnts = [],
                angleDiff = endAngle - startAngle;

            angleDiff = angleDiff < 0 ? angleDiff + Math.PI * 2 : angleDiff;
            for (var i = 0; i <= 100; i++) {
                var angle = startAngle + angleDiff * i / 100;
                x = center[0] + radius * Math.cos(angle);
                y = center[1] + radius * Math.sin(angle);
                pnts.push([x, y]);
            }
            return pnts;
        };

        var getBisectorNormals = function getBisectorNormals(t, pnt1, pnt2, pnt3) {
            var normal = getNormal(pnt1, pnt2, pnt3);
            var bisectorNormalRight = null,
                bisectorNormalLeft = null,
                dt = null,
                x = null,
                y = null;

            var dist = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1]);
            var uX = normal[0] / dist;
            var uY = normal[1] / dist;
            var d1 = MathDistance(pnt1, pnt2);
            var d2 = MathDistance(pnt2, pnt3);
            if (dist > ZERO_TOLERANCE) {
                if (isClockWise(pnt1, pnt2, pnt3)) {
                    dt = t * d1;
                    x = pnt2[0] - dt * uY;
                    y = pnt2[1] + dt * uX;
                    bisectorNormalRight = [x, y];
                    dt = t * d2;
                    x = pnt2[0] + dt * uY;
                    y = pnt2[1] - dt * uX;
                    bisectorNormalLeft = [x, y];
                } else {
                    dt = t * d1;
                    x = pnt2[0] + dt * uY;
                    y = pnt2[1] - dt * uX;
                    bisectorNormalRight = [x, y];
                    dt = t * d2;
                    x = pnt2[0] - dt * uY;
                    y = pnt2[1] + dt * uX;
                    bisectorNormalLeft = [x, y];
                }
            } else {
                x = pnt2[0] + t * (pnt1[0] - pnt2[0]);
                y = pnt2[1] + t * (pnt1[1] - pnt2[1]);
                bisectorNormalRight = [x, y];
                x = pnt2[0] + t * (pnt3[0] - pnt2[0]);
                y = pnt2[1] + t * (pnt3[1] - pnt2[1]);
                bisectorNormalLeft = [x, y];
            }
            return [bisectorNormalRight, bisectorNormalLeft];
        };

        var getNormal = function getNormal(pnt1, pnt2, pnt3) {
            var dX1 = pnt1[0] - pnt2[0];
            var dY1 = pnt1[1] - pnt2[1];
            var d1 = Math.sqrt(dX1 * dX1 + dY1 * dY1);
            dX1 /= d1;
            dY1 /= d1;
            var dX2 = pnt3[0] - pnt2[0];
            var dY2 = pnt3[1] - pnt2[1];
            var d2 = Math.sqrt(dX2 * dX2 + dY2 * dY2);
            dX2 /= d2;
            dY2 /= d2;
            var uX = dX1 + dX2;
            var uY = dY1 + dY2;
            return [uX, uY];
        };

        var getLeftMostControlPoint = function getLeftMostControlPoint(controlPoints, t) {
            var _ref = [controlPoints[0], controlPoints[1], controlPoints[2], null, null],
                pnt1 = _ref[0],
                pnt2 = _ref[1],
                pnt3 = _ref[2],
                controlX = _ref[3],
                controlY = _ref[4];

            var pnts = getBisectorNormals(0, pnt1, pnt2, pnt3);
            var normalRight = pnts[0];
            var normal = getNormal(pnt1, pnt2, pnt3);
            var dist = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1]);
            if (dist > ZERO_TOLERANCE) {
                var mid = Mid(pnt1, pnt2);
                var pX = pnt1[0] - mid[0];
                var pY = pnt1[1] - mid[1];
                var d1 = MathDistance(pnt1, pnt2);
                var n = 2.0 / d1;
                var nX = -n * pY;
                var nY = n * pX;
                var a11 = nX * nX - nY * nY;
                var a12 = 2 * nX * nY;
                var a22 = nY * nY - nX * nX;
                var dX = normalRight[0] - mid[0];
                var dY = normalRight[1] - mid[1];
                controlX = mid[0] + a11 * dX + a12 * dY;
                controlY = mid[1] + a12 * dX + a22 * dY;
            } else {
                controlX = pnt1[0] + t * (pnt2[0] - pnt1[0]);
                controlY = pnt1[1] + t * (pnt2[1] - pnt1[1]);
            }
            return [controlX, controlY];
        };

        var getRightMostControlPoint = function getRightMostControlPoint(controlPoints, t) {
            var count = controlPoints.length;
            var pnt1 = controlPoints[count - 3];
            var pnt2 = controlPoints[count - 2];
            var pnt3 = controlPoints[count - 1];
            var pnts = getBisectorNormals(0, pnt1, pnt2, pnt3);
            var normalLeft = pnts[1];
            var normal = getNormal(pnt1, pnt2, pnt3);
            var dist = Math.sqrt(normal[0] * normal[0] + normal[1] * normal[1]);
            var controlX = null,
                controlY = null;

            if (dist > ZERO_TOLERANCE) {
                var mid = Mid(pnt2, pnt3);
                var pX = pnt3[0] - mid[0];
                var pY = pnt3[1] - mid[1];
                var d1 = MathDistance(pnt2, pnt3);
                var n = 2.0 / d1;
                var nX = -n * pY;
                var nY = n * pX;
                var a11 = nX * nX - nY * nY;
                var a12 = 2 * nX * nY;
                var a22 = nY * nY - nX * nX;
                var dX = normalLeft[0] - mid[0];
                var dY = normalLeft[1] - mid[1];
                controlX = mid[0] + a11 * dX + a12 * dY;
                controlY = mid[1] + a12 * dX + a22 * dY;
            } else {
                controlX = pnt3[0] + t * (pnt2[0] - pnt3[0]);
                controlY = pnt3[1] + t * (pnt2[1] - pnt3[1]);
            }
            return [controlX, controlY];
        };

        var getCurvePoints = function getCurvePoints(t, controlPoints) {
            var leftControl = getLeftMostControlPoint(controlPoints, t);
            var pnt1 = null,
                pnt2 = null,
                pnt3 = null,
                normals = [leftControl],
                points = [];

            for (var i = 0; i < controlPoints.length - 2; i++) {
                var _ref2 = [controlPoints[i], controlPoints[i + 1], controlPoints[i + 2]];
                pnt1 = _ref2[0];
                pnt2 = _ref2[1];
                pnt3 = _ref2[2];

                var normalPoints = getBisectorNormals(t, pnt1, pnt2, pnt3);
                normals = normals.concat(normalPoints);
            }
            var rightControl = getRightMostControlPoint(controlPoints, t);
            if (rightControl) {
                normals.push(rightControl);
            }
            for (var _i = 0; _i < controlPoints.length - 1; _i++) {
                pnt1 = controlPoints[_i];
                pnt2 = controlPoints[_i + 1];
                points.push(pnt1);
                for (var _t = 0; _t < FITTING_COUNT; _t++) {
                    var pnt = getCubicValue(_t / FITTING_COUNT, pnt1, normals[_i * 2], normals[_i * 2 + 1], pnt2);
                    points.push(pnt);
                }
                points.push(pnt2);
            }
            return points;
        };

        var getBezierPoints = function getBezierPoints(points) {
            if (points.length <= 2) {
                return points;
            } else {
                var bezierPoints = [];
                var n = points.length - 1;
                for (var t = 0; t <= 1; t += 0.01) {
                    var x = 0,
                        y = 0;

                    for (var index = 0; index <= n; index++) {
                        var factor = getBinomialFactor(n, index);
                        var a = Math.pow(t, index);
                        var b = Math.pow(1 - t, n - index);
                        x += factor * a * b * points[index][0];
                        y += factor * a * b * points[index][1];
                    }
                    bezierPoints.push([x, y]);
                }
                bezierPoints.push(points[n]);
                return bezierPoints;
            }
        };

        var getFactorial = function getFactorial(n) {
            var result = 1;
            switch (n) {
                case n <= 1:
                    result = 1;
                    break;
                case n === 2:
                    result = 2;
                    break;
                case n === 3:
                    result = 6;
                    break;
                case n === 24:
                    result = 24;
                    break;
                case n === 5:
                    result = 120;
                    break;
                default:
                    for (var i = 1; i <= n; i++) {
                        result *= i;
                    }
                    break;
            }
            return result;
        };

        var getBinomialFactor = function getBinomialFactor(n, index) {
            return getFactorial(n) / (getFactorial(index) * getFactorial(n - index));
        };

        var getQBSplinePoints = function getQBSplinePoints(points) {
            if (points.length <= 2) {
                return points;
            } else {
                var n = 2,
                    bSplinePoints = [];

                var m = points.length - n - 1;
                bSplinePoints.push(points[0]);
                for (var i = 0; i <= m; i++) {
                    for (var t = 0; t <= 1; t += 0.05) {
                        var x = 0,
                            y = 0;

                        for (var k = 0; k <= n; k++) {
                            var factor = getQuadricBSplineFactor(k, t);
                            x += factor * points[i + k][0];
                            y += factor * points[i + k][1];
                        }
                        bSplinePoints.push([x, y]);
                    }
                }
                bSplinePoints.push(points[points.length - 1]);
                return bSplinePoints;
            }
        };

        var getQuadricBSplineFactor = function getQuadricBSplineFactor(k, t) {
            var res = 0;
            if (k === 0) {
                res = Math.pow(t - 1, 2) / 2;
            } else if (k === 1) {
                res = (-2 * Math.pow(t, 2) + 2 * t + 1) / 2;
            } else if (k === 2) {
                res = Math.pow(t, 2) / 2;
            }
            return res;
        };

        var getuuid = function getuuid() {
            var s = [],
                hexDigits = '0123456789abcdef';

            for (var i = 0; i < 36; i++) {
                s[i] = hexDigits.substr(Math.floor(Math.random() * 0x10), 1);
            }
            s[14] = '4';
            s[19] = hexDigits.substr(s[19] & 0x3 | 0x8, 1);
            s[8] = s[13] = s[18] = s[23] = '-';
            return s.join('');
        };







        function preventDefault(e) {
            e = e || window.event;
            if (e.preventDefault) {
                e.preventDefault();
            } else {
                e.returnValue = false;
            }
        }

        var TextArea = 'TextArea';
        var ARC = 'Arc';
        var CURVE = 'Curve';
        var GATHERING_PLACE = 'GatheringPlace';
        var POLYLINE = 'Polyline';
        var FREE_LINE = 'FreeLine';
        var POINT = 'Point';
        var PENNANT = 'Pennant';
        var RECTANGLE = 'RectAngle';
        var CIRCLE = 'Circle';
        var ELLIPSE = 'Ellipse';
        var LUNE = 'Lune';
        var SECTOR = 'Sector';
        var CLOSED_CURVE = 'ClosedCurve';
        var POLYGON = 'Polygon';
        var FREE_POLYGON = 'FreePolygon';
        var ATTACK_ARROW = 'AttackArrow';
        var DOUBLE_ARROW = 'DoubleArrow';
        var STRAIGHT_ARROW = 'StraightArrow';
        var FINE_ARROW = 'FineArrow';
        var ASSAULT_DIRECTION = 'AssaultDirection';
        var TAILED_ATTACK_ARROW = 'TailedAttackArrow';
        var SQUAD_COMBAT = 'SquadCombat';
        var TAILED_SQUAD_COMBAT = 'TailedSquadCombat';
        var RECTFLAG = 'RectFlag';
        var TRIANGLEFLAG = 'TriangleFlag';
        var CURVEFLAG = 'CurveFlag';


        var PlotTypes = Object.freeze({
            TextArea: TextArea,
            ARC: ARC,
            CURVE: CURVE,
            GATHERING_PLACE: GATHERING_PLACE,
            POLYLINE: POLYLINE,
            FREE_LINE: FREE_LINE,
            POINT: POINT,
            PENNANT: PENNANT,
            RECTANGLE: RECTANGLE,
            CIRCLE: CIRCLE,
            ELLIPSE: ELLIPSE,
            LUNE: LUNE,
            SECTOR: SECTOR,
            CLOSED_CURVE: CLOSED_CURVE,
            POLYGON: POLYGON,
            FREE_POLYGON: FREE_POLYGON,
            ATTACK_ARROW: ATTACK_ARROW,
            DOUBLE_ARROW: DOUBLE_ARROW,
            STRAIGHT_ARROW: STRAIGHT_ARROW,
            FINE_ARROW: FINE_ARROW,
            ASSAULT_DIRECTION: ASSAULT_DIRECTION,
            TAILED_SQUAD_COMBAT: TAILED_SQUAD_COMBAT,
            TAILED_ATTACK_ARROW: TAILED_ATTACK_ARROW,
            SQUAD_COMBAT: SQUAD_COMBAT,
            RECTFLAG: RECTFLAG,
            TRIANGLEFLAG: TRIANGLEFLAG,
            CURVEFLAG: CURVEFLAG
        });

        const Observable = function() {
            this.Events = {};
            this.__cnt = 0;
        };

        Observable.hasOwnKey = Function.call.bind(Object.hasOwnProperty);

        Observable.slice = Function.call.bind(Array.prototype.slice);

        /**
         * 事件分发
         * @param eventName
         * @param callback
         * @param context
         * @returns {(*|*)[]}
         */
        Observable.prototype.on = function(eventName, callback, context) {
            return (this.bindEvent(eventName, callback, 0, context))
        };

        /**
         * 取消监听
         * @param event
         * @returns {boolean}
         */
        Observable.prototype.un = function(event) {
            var eventName = '';
            var key = '';
            var r = false;
            var type = typeof event;
            var that = this;
            if (type === 'string') {
                if (Observable.hasOwnKey(this.Events, event)) {
                    delete this.Events[event];
                    return true
                }
                return false
            } else if (type === 'object') {
                eventName = event[0];
                key = event[1];
                if (Observable.hasOwnKey(this.Events, eventName) && Observable.hasOwnKey(this.Events[eventName], key)) {
                    delete this.Events[eventName][key];
                    return true
                }
                return false
            } else if (type === 'function') {
                that.eachEvent(that.Events, function(keyA, itemA) {
                    that.eachEvent(itemA, function(keyB, itemB) {
                        if (itemB[0] === event) {
                            delete that.Events[keyA][keyB];
                            r = true;
                        }
                    });
                });
                return r
            }
            return true
        };

        /**
         * 事件监听（只触发一次）
         * @param eventName
         * @param callback
         * @param context
         * @returns {(*|*)[]}
         */
        Observable.prototype.once = function(eventName, callback, context) {
            return (this.bindEvent(eventName, callback, 1, context))
        };

        /**
         * 响应事件
         * @param eventName
         * @param args
         */
        Observable.prototype.action = function(eventName, args) {
            if (Observable.hasOwnKey(this.Events, eventName)) {
                this.eachEvent(this.Events[eventName], function(key, item) {
                    item[0].apply(item[2], args);
                    if (item[1]) {
                        delete this.Events[eventName][key];
                    }
                });
            }
        };

        /**
         * 实时触发响应
         * @param eventName
         */
        Observable.prototype.dispatch = function(eventName) {
            var that = this;
            var args = Observable.slice(arguments, 1);
            setTimeout(function() {
                that.action(eventName, args);
            });
        };

        /**
         * 延后触发响应
         * @param eventName
         */
        Observable.prototype.dispatchSync = function(eventName) {
            this.action(eventName, Observable.slice(arguments, 1));
        };

        /**
         * 清空发布中心
         */
        Observable.prototype.clear = function() {
            this.Events = {};
        };

        /**
         * 绑定事件
         * @param eventName
         * @param callback
         * @param isOne
         * @param context
         * @returns {[*,*]}
         */
        Observable.prototype.bindEvent = function(eventName, callback, isOne, context) {
            if (typeof eventName !== 'string' || typeof callback !== 'function') {
                throw new Error('传入的事件名称和回调函数有误！')
            }
            if (!Observable.hasOwnKey(this.Events, eventName)) {
                this.Events[eventName] = {};
            }
            this.Events[eventName][++this.__cnt] = [callback, isOne, context];
            return [eventName, this.__cnt]
        };

        /**
         * 循环触发事件
         * @param obj
         * @param callback
         */
        Observable.prototype.eachEvent = function(obj, callback) {
            for (var key in obj) {
                if (Observable.hasOwnKey(obj, key)) {
                    callback(key, obj[key]);
                }
            }
        };

        var Point = function(_ol$geom$Point) {
            inherits(Point, _ol$geom$Point);

            function Point(coordinates, point, params) {
                classCallCheck(this, Point);

                var _this = possibleConstructorReturn(this, _ol$geom$Point.call(this, []));

                _this.type = POINT;
                _this.options = params || {};
                _this.set('params', _this.options);
                _this.fixPointCount = 1;
                if (point && point.length > 0) {
                    _this.setPoints(point);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            Point.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            Point.prototype.generate = function generate() {
                var pnt = this.points[0];
                this.setCoordinates(pnt);
            };

            Point.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            Point.prototype.getMap = function getMap() {
                return this.map;
            };

            Point.prototype.isPlot = function isPlot() {
                return true;
            };

            Point.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            Point.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            Point.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            Point.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            Point.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            Point.prototype.finishDrawing = function finishDrawing() {};

            return Point;
        }(ol.geom.Point);

        var Pennant = function(_ol$geom$Point) {
            inherits(Pennant, _ol$geom$Point);

            function Pennant(coordinates, point, params) {
                classCallCheck(this, Pennant);

                var _this = possibleConstructorReturn(this, _ol$geom$Point.call(this, []));

                _this.type = PENNANT;
                _this.options = params || {};
                _this.set('params', _this.options);
                if (point && point.length > 0) {
                    _this.setPoints(point);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            Pennant.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            Pennant.prototype.generate = function generate() {
                this.setCoordinates(this.points);
            };

            Pennant.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            Pennant.prototype.getMap = function getMap() {
                return this.map;
            };

            Pennant.prototype.isPlot = function isPlot() {
                return true;
            };

            Pennant.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            Pennant.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            Pennant.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            Pennant.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            Pennant.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            Pennant.prototype.finishDrawing = function finishDrawing() {};

            return Pennant;
        }(ol.geom.Point);

        var Polyline = function(_ol$geom$LineString) {
            inherits(Polyline, _ol$geom$LineString);

            function Polyline(coordinates, points, params) {
                classCallCheck(this, Polyline);

                var _this = possibleConstructorReturn(this, _ol$geom$LineString.call(this, []));

                _this.type = POLYLINE;
                _this.freehand = false;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            Polyline.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            Polyline.prototype.generate = function generate() {
                this.setCoordinates(this.points);
            };

            Polyline.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            Polyline.prototype.getMap = function getMap() {
                return this.map;
            };

            Polyline.prototype.isPlot = function isPlot() {
                return true;
            };

            Polyline.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            Polyline.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            Polyline.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            Polyline.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            Polyline.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            Polyline.prototype.finishDrawing = function finishDrawing() {};

            return Polyline;
        }(ol.geom.LineString);

        var Arc = function(_ol$geom$LineString) {
            inherits(Arc, _ol$geom$LineString);

            function Arc(coordinates, points, params) {
                classCallCheck(this, Arc);

                var _this = possibleConstructorReturn(this, _ol$geom$LineString.call(this, []));

                _this.type = ARC;
                _this.fixPointCount = 3;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            Arc.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            Arc.prototype.generate = function generate() {
                var count = this.getPointCount();
                if (count < 2) return;
                if (count === 2) {
                    this.setCoordinates(this.points);
                } else {
                    var _ref = [this.points[0], this.points[1], this.points[2], null, null],
                        pnt1 = _ref[0],
                        pnt2 = _ref[1],
                        pnt3 = _ref[2],
                        startAngle = _ref[3],
                        endAngle = _ref[4];

                    var center = getCircleCenterOfThreePoints(pnt1, pnt2, pnt3);
                    var radius = MathDistance(pnt1, center);
                    var angle1 = getAzimuth(pnt1, center);
                    var angle2 = getAzimuth(pnt2, center);
                    if (isClockWise(pnt1, pnt2, pnt3)) {
                        startAngle = angle2;
                        endAngle = angle1;
                    } else {
                        startAngle = angle1;
                        endAngle = angle2;
                    }
                    this.setCoordinates(getArcPoints(center, radius, startAngle, endAngle));
                }
            };

            Arc.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            Arc.prototype.getMap = function getMap() {
                return this.map;
            };

            Arc.prototype.isPlot = function isPlot() {
                return true;
            };

            Arc.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            Arc.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            Arc.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            Arc.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            Arc.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            Arc.prototype.finishDrawing = function finishDrawing() {};

            return Arc;
        }(ol.geom.LineString);

        var Circle = function(_ol$geom$Polygon) {
            inherits(Circle, _ol$geom$Polygon);

            function Circle(coordinates, points, params) {
                classCallCheck(this, Circle);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = CIRCLE;
                _this.fixPointCount = 2;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            Circle.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            Circle.prototype.generate = function generate() {
                var count = this.getPointCount();
                if (count < 2) {
                    return false;
                } else {
                    var center = this.points[0];
                    var radius = MathDistance(center, this.points[1]);
                    this.setCoordinates([this.generatePoints(center, radius)]);
                }
            };

            Circle.prototype.generatePoints = function generatePoints(center, radius) {
                var x = null,
                    y = null,
                    angle = null,
                    points = [];

                for (var i = 0; i <= 100; i++) {
                    angle = Math.PI * 2 * i / 100;
                    x = center[0] + radius * Math.cos(angle);
                    y = center[1] + radius * Math.sin(angle);
                    points.push([x, y]);
                }
                return points;
            };

            Circle.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            Circle.prototype.getMap = function getMap() {
                return this.map;
            };

            Circle.prototype.isPlot = function isPlot() {
                return true;
            };

            Circle.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            Circle.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            Circle.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            Circle.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            Circle.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            Circle.prototype.finishDrawing = function finishDrawing() {};

            return Circle;
        }(ol.geom.Polygon);

        var Curve = function(_ol$geom$LineString) {
            inherits(Curve, _ol$geom$LineString);

            function Curve(coordinates, points, params) {
                classCallCheck(this, Curve);

                var _this = possibleConstructorReturn(this, _ol$geom$LineString.call(this, []));

                _this.type = CURVE;
                _this.t = 0.3;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            Curve.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            Curve.prototype.generate = function generate() {
                var count = this.getPointCount();
                if (count < 2) {
                    return false;
                } else if (count === 2) {
                    this.setCoordinates(this.points);
                } else {
                    var points = getCurvePoints(this.t, this.points);
                    this.setCoordinates(points);
                }
            };

            Curve.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            Curve.prototype.getMap = function getMap() {
                return this.map;
            };

            Curve.prototype.isPlot = function isPlot() {
                return true;
            };

            Curve.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            Curve.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            Curve.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            Curve.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            Curve.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            Curve.prototype.finishDrawing = function finishDrawing() {};

            return Curve;
        }(ol.geom.LineString);

        var FreeHandLine = function(_ol$geom$LineString) {
            inherits(FreeHandLine, _ol$geom$LineString);

            function FreeHandLine(coordinates, points, params) {
                classCallCheck(this, FreeHandLine);

                var _this = possibleConstructorReturn(this, _ol$geom$LineString.call(this, []));

                _this.type = FREE_LINE;
                _this.freehand = true;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            FreeHandLine.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            FreeHandLine.prototype.generate = function generate() {
                this.setCoordinates(this.points);
            };

            FreeHandLine.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            FreeHandLine.prototype.getMap = function getMap() {
                return this.map;
            };

            FreeHandLine.prototype.isPlot = function isPlot() {
                return true;
            };

            FreeHandLine.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            FreeHandLine.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            FreeHandLine.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            FreeHandLine.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            FreeHandLine.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            FreeHandLine.prototype.finishDrawing = function finishDrawing() {};

            return FreeHandLine;
        }(ol.geom.LineString);

        var RectAngle = function(_ol$geom$Polygon) {
            inherits(RectAngle, _ol$geom$Polygon);

            function RectAngle(coordinates, points, params) {
                classCallCheck(this, RectAngle);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = RECTANGLE;
                _this.fixPointCount = 2;
                _this.set('params', params);
                _this.isFill = params['isFill'] === false ? params['isFill'] : true;
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            RectAngle.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            RectAngle.prototype.generate = function generate() {
                if (this.points.length === 2) {
                    var coordinates = [];
                    if (this.isFill) {
                        var extent = ol.extent.boundingExtent(this.points);
                        var polygon = ol.geom.Polygon.fromExtent(extent);
                        coordinates = polygon.getCoordinates();
                    } else {
                        var start = this.points[0];
                        var end = this.points[1];
                        coordinates = [start, [start[0], end[1]], end, [end[0], start[1]], start];
                    }
                    this.setCoordinates(coordinates);
                }
            };

            RectAngle.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            RectAngle.prototype.getMap = function getMap() {
                return this.map;
            };

            RectAngle.prototype.isPlot = function isPlot() {
                return true;
            };

            RectAngle.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            RectAngle.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            RectAngle.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            RectAngle.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            RectAngle.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            RectAngle.prototype.finishDrawing = function finishDrawing() {};

            return RectAngle;
        }(ol.geom.Polygon);

        var Ellipse = function(_ol$geom$Polygon) {
            inherits(Ellipse, _ol$geom$Polygon);

            function Ellipse(coordinates, points, params) {
                classCallCheck(this, Ellipse);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = ELLIPSE;
                _this.fixPointCount = 2;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            Ellipse.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            Ellipse.prototype.generate = function generate() {
                if (this.getPointCount() < 2) {
                    return false;
                } else {
                    var _ref = [this.points[0], this.points[1]],
                        pnt1 = _ref[0],
                        pnt2 = _ref[1];

                    var center = Mid(pnt1, pnt2);
                    var majorRadius = Math.abs((pnt1[0] - pnt2[0]) / 2);
                    var minorRadius = Math.abs((pnt1[1] - pnt2[1]) / 2);
                    var res = this.generatePoints(center, majorRadius, minorRadius);
                    this.setCoordinates([res]);
                }
            };

            Ellipse.prototype.generatePoints = function generatePoints(center, majorRadius, minorRadius) {
                var x = null,
                    y = null,
                    angle = null,
                    points = [];

                for (var i = 0; i <= FITTING_COUNT; i++) {
                    angle = Math.PI * 2 * i / FITTING_COUNT;
                    x = center[0] + majorRadius * Math.cos(angle);
                    y = center[1] + minorRadius * Math.sin(angle);
                    points.push([x, y]);
                }
                return points;
            };

            Ellipse.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            Ellipse.prototype.getMap = function getMap() {
                return this.map;
            };

            Ellipse.prototype.isPlot = function isPlot() {
                return true;
            };

            Ellipse.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            Ellipse.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            Ellipse.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            Ellipse.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            Ellipse.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            Ellipse.prototype.finishDrawing = function finishDrawing() {};

            return Ellipse;
        }(ol.geom.Polygon);

        var Lune = function(_ol$geom$Polygon) {
            inherits(Lune, _ol$geom$Polygon);

            function Lune(coordinates, points, params) {
                classCallCheck(this, Lune);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = LUNE;
                _this.fixPointCount = 3;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            Lune.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            Lune.prototype.generate = function generate() {
                if (this.getPointCount() < 2) {
                    return false;
                } else {
                    var pnts = this.getPoints();
                    if (this.getPointCount() === 2) {
                        var mid = Mid(pnts[0], pnts[1]);
                        var d = MathDistance(pnts[0], mid);
                        var pnt = getThirdPoint(pnts[0], mid, HALF_PI, d);
                        pnts.push(pnt);
                    }
                    var _ref = [pnts[0], pnts[1], pnts[2], undefined, undefined],
                        pnt1 = _ref[0],
                        pnt2 = _ref[1],
                        pnt3 = _ref[2],
                        startAngle = _ref[3],
                        endAngle = _ref[4];

                    var center = getCircleCenterOfThreePoints(pnt1, pnt2, pnt3);
                    var radius = MathDistance(pnt1, center);
                    var angle1 = getAzimuth(pnt1, center);
                    var angle2 = getAzimuth(pnt2, center);
                    if (isClockWise(pnt1, pnt2, pnt3)) {
                        startAngle = angle2;
                        endAngle = angle1;
                    } else {
                        startAngle = angle1;
                        endAngle = angle2;
                    }
                    pnts = getArcPoints(center, radius, startAngle, endAngle);
                    pnts.push(pnts[0]);
                    this.setCoordinates([pnts]);
                }
            };

            Lune.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            Lune.prototype.getMap = function getMap() {
                return this.map;
            };

            Lune.prototype.isPlot = function isPlot() {
                return true;
            };

            Lune.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            Lune.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            Lune.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            Lune.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            Lune.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            Lune.prototype.finishDrawing = function finishDrawing() {};

            return Lune;
        }(ol.geom.Polygon);

        var Sector = function(_ol$geom$Polygon) {
            inherits(Sector, _ol$geom$Polygon);

            function Sector(coordinates, points, params) {
                classCallCheck(this, Sector);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = SECTOR;
                _this.fixPointCount = 3;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            Sector.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            Sector.prototype.generate = function generate() {
                var points = this.getPointCount();
                if (points < 2) {
                    return false;
                } else if (points === 2) {
                    this.setCoordinates([this.points]);
                } else {
                    var pnts = this.getPoints();
                    var _ref = [pnts[0], pnts[1], pnts[2]],
                        center = _ref[0],
                        pnt2 = _ref[1],
                        pnt3 = _ref[2];

                    var radius = MathDistance(pnt2, center);
                    var startAngle = getAzimuth(pnt2, center);
                    var endAngle = getAzimuth(pnt3, center);
                    var pList = getArcPoints(center, radius, startAngle, endAngle);
                    pList.push(center, pList[0]);
                    this.setCoordinates([pList]);
                }
            };

            Sector.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            Sector.prototype.getMap = function getMap() {
                return this.map;
            };

            Sector.prototype.isPlot = function isPlot() {
                return true;
            };

            Sector.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            Sector.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            Sector.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            Sector.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            Sector.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            Sector.prototype.finishDrawing = function finishDrawing() {};

            return Sector;
        }(ol.geom.Polygon);

        var ClosedCurve = function(_ol$geom$Polygon) {
            inherits(ClosedCurve, _ol$geom$Polygon);

            function ClosedCurve(coordinates, points, params) {
                classCallCheck(this, ClosedCurve);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = CLOSED_CURVE;
                _this.t = 0.3;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            ClosedCurve.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            ClosedCurve.prototype.generate = function generate() {
                var points = this.getPointCount();
                if (points < 2) {
                    return false;
                } else if (points === 2) {
                    this.setCoordinates([this.points]);
                } else {
                    var pnts = this.getPoints();
                    pnts.push(pnts[0], pnts[1]);
                    var normals = [],
                        pList = [];

                    for (var i = 0; i < pnts.length - 2; i++) {
                        var normalPoints = getBisectorNormals(this.t, pnts[i], pnts[i + 1], pnts[i + 2]);
                        normals = normals.concat(normalPoints);
                    }
                    var count = normals.length;
                    normals = [normals[count - 1]].concat(normals.slice(0, count - 1));
                    for (var _i = 0; _i < pnts.length - 2; _i++) {
                        var pnt1 = pnts[_i];
                        var pnt2 = pnts[_i + 1];
                        pList.push(pnt1);
                        for (var t = 0; t <= FITTING_COUNT; t++) {
                            var pnt = getCubicValue(t / FITTING_COUNT, pnt1, normals[_i * 2], normals[_i * 2 + 1], pnt2);
                            pList.push(pnt);
                        }
                        pList.push(pnt2);
                    }
                    this.setCoordinates([pList]);
                }
            };

            ClosedCurve.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            ClosedCurve.prototype.getMap = function getMap() {
                return this.map;
            };

            ClosedCurve.prototype.isPlot = function isPlot() {
                return true;
            };

            ClosedCurve.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            ClosedCurve.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            ClosedCurve.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            ClosedCurve.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            ClosedCurve.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            ClosedCurve.prototype.finishDrawing = function finishDrawing() {};

            return ClosedCurve;
        }(ol.geom.Polygon);

        var Polygon = function(_ol$geom$Polygon) {
            inherits(Polygon, _ol$geom$Polygon);

            function Polygon(coordinates, points, params) {
                classCallCheck(this, Polygon);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = POLYGON;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            Polygon.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            Polygon.prototype.generate = function generate() {
                var count = this.getPointCount();
                if (count < 2) {
                    return false;
                } else {
                    this.setCoordinates([this.points]);
                }
            };

            Polygon.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            Polygon.prototype.getMap = function getMap() {
                return this.map;
            };

            Polygon.prototype.isPlot = function isPlot() {
                return true;
            };

            Polygon.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            Polygon.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            Polygon.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            Polygon.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            Polygon.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            Polygon.prototype.finishDrawing = function finishDrawing() {};

            return Polygon;
        }(ol.geom.Polygon);

        var FreePolygon = function(_ol$geom$Polygon) {
            inherits(FreePolygon, _ol$geom$Polygon);

            function FreePolygon(coordinates, points, params) {
                classCallCheck(this, FreePolygon);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = FREE_POLYGON;
                _this.freehand = true;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            FreePolygon.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            FreePolygon.prototype.generate = function generate() {
                this.setCoordinates([this.points]);
            };

            FreePolygon.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            FreePolygon.prototype.getMap = function getMap() {
                return this.map;
            };

            FreePolygon.prototype.isPlot = function isPlot() {
                return true;
            };

            FreePolygon.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            FreePolygon.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            FreePolygon.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            FreePolygon.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            FreePolygon.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            FreePolygon.prototype.finishDrawing = function finishDrawing() {};

            return FreePolygon;
        }(ol.geom.Polygon);

        var AttackArrow = function(_ol$geom$Polygon) {
            inherits(AttackArrow, _ol$geom$Polygon);

            function AttackArrow(coordinates, points, params) {
                classCallCheck(this, AttackArrow);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = ATTACK_ARROW;
                _this.headHeightFactor = 0.18;
                _this.headWidthFactor = 0.3;
                _this.neckHeightFactor = 0.85;
                _this.neckWidthFactor = 0.15;
                _this.headTailFactor = 0.8;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            AttackArrow.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            AttackArrow.prototype.generate = function generate() {
                try {
                    var points = this.getPointCount();
                    if (points < 2) {
                        return false;
                    } else if (points === 2) {
                        this.setCoordinates([this.points]);
                    } else {
                        var pnts = this.getPoints();
                        var _ref = [pnts[0], pnts[1]],
                            tailLeft = _ref[0],
                            tailRight = _ref[1];

                        if (isClockWise(pnts[0], pnts[1], pnts[2])) {
                            tailLeft = pnts[1];
                            tailRight = pnts[0];
                        }
                        var midTail = Mid(tailLeft, tailRight);
                        var bonePnts = [midTail].concat(pnts.slice(2));
                        var headPnts = this.getArrowHeadPoints(bonePnts, tailLeft, tailRight);
                        var _ref2 = [headPnts[0], headPnts[4]],
                            neckLeft = _ref2[0],
                            neckRight = _ref2[1];

                        var tailWidthFactor = MathDistance(tailLeft, tailRight) / getBaseLength(bonePnts);
                        var bodyPnts = this.getArrowBodyPoints(bonePnts, neckLeft, neckRight, tailWidthFactor);
                        var count = bodyPnts.length;
                        var leftPnts = [tailLeft].concat(bodyPnts.slice(0, count / 2));
                        leftPnts.push(neckLeft);
                        var rightPnts = [tailRight].concat(bodyPnts.slice(count / 2, count));
                        rightPnts.push(neckRight);
                        leftPnts = getQBSplinePoints(leftPnts);
                        rightPnts = getQBSplinePoints(rightPnts);
                        this.setCoordinates([leftPnts.concat(headPnts, rightPnts.reverse())]);
                    }
                } catch (e) {
                    console.log(e);
                }
            };

            AttackArrow.prototype.getArrowPoints = function getArrowPoints(pnt1, pnt2, pnt3, clockWise) {
                var midPnt = Mid(pnt1, pnt2);
                var len = MathDistance(midPnt, pnt3);
                var midPnt1 = getThirdPoint(pnt3, midPnt, 0, len * 0.3, true);
                var midPnt2 = getThirdPoint(pnt3, midPnt, 0, len * 0.5, true);
                midPnt1 = getThirdPoint(midPnt, midPnt1, HALF_PI, len / 5, clockWise);
                midPnt2 = getThirdPoint(midPnt, midPnt2, HALF_PI, len / 4, clockWise);
                var points = [midPnt, midPnt1, midPnt2, pnt3];
                var arrowPnts = this.getArrowHeadPoints(points);
                if (arrowPnts && Array.isArray(arrowPnts) && arrowPnts.length > 0) {
                    var _ref3 = [arrowPnts[0], arrowPnts[4]],
                        neckLeftPoint = _ref3[0],
                        neckRightPoint = _ref3[1];

                    var tailWidthFactor = MathDistance(pnt1, pnt2) / getBaseLength(points) / 2;
                    var bodyPnts = this.getArrowBodyPoints(points, neckLeftPoint, neckRightPoint, tailWidthFactor);
                    if (bodyPnts) {
                        var n = bodyPnts.length;
                        var lPoints = bodyPnts.slice(0, n / 2);
                        var rPoints = bodyPnts.slice(n / 2, n);
                        lPoints.push(neckLeftPoint);
                        rPoints.push(neckRightPoint);
                        lPoints = lPoints.reverse();
                        lPoints.push(pnt2);
                        rPoints = rPoints.reverse();
                        rPoints.push(pnt1);
                        return lPoints.reverse().concat(arrowPnts, rPoints);
                    }
                } else {
                    throw new Error('插值出错');
                }
            };

            AttackArrow.prototype.getArrowHeadPoints = function getArrowHeadPoints(points, tailLeft, tailRight) {
                try {
                    var len = getBaseLength(points);
                    var headHeight = len * this.headHeightFactor;
                    var headPnt = points[points.length - 1];
                    len = MathDistance(headPnt, points[points.length - 2]);
                    var tailWidth = MathDistance(tailLeft, tailRight);
                    if (headHeight > tailWidth * this.headTailFactor) {
                        headHeight = tailWidth * this.headTailFactor;
                    }
                    var headWidth = headHeight * this.headWidthFactor;
                    var neckWidth = headHeight * this.neckWidthFactor;
                    headHeight = headHeight > len ? len : headHeight;
                    var neckHeight = headHeight * this.neckHeightFactor;
                    var headEndPnt = getThirdPoint(points[points.length - 2], headPnt, 0, headHeight, true);
                    var neckEndPnt = getThirdPoint(points[points.length - 2], headPnt, 0, neckHeight, true);
                    var headLeft = getThirdPoint(headPnt, headEndPnt, HALF_PI, headWidth, false);
                    var headRight = getThirdPoint(headPnt, headEndPnt, HALF_PI, headWidth, true);
                    var neckLeft = getThirdPoint(headPnt, neckEndPnt, HALF_PI, neckWidth, false);
                    var neckRight = getThirdPoint(headPnt, neckEndPnt, HALF_PI, neckWidth, true);
                    return [neckLeft, headLeft, headPnt, headRight, neckRight];
                } catch (e) {
                    console.log(e);
                }
            };

            AttackArrow.prototype.getArrowBodyPoints = function getArrowBodyPoints(points, neckLeft, neckRight, tailWidthFactor) {
                var allLen = wholeDistance(points);
                var len = getBaseLength(points);
                var tailWidth = len * tailWidthFactor;
                var neckWidth = MathDistance(neckLeft, neckRight);
                var widthDif = (tailWidth - neckWidth) / 2;
                var tempLen = 0,
                    leftBodyPnts = [],
                    rightBodyPnts = [];

                for (var i = 1; i < points.length - 1; i++) {
                    var angle = getAngleOfThreePoints(points[i - 1], points[i], points[i + 1]) / 2;
                    tempLen += MathDistance(points[i - 1], points[i]);
                    var w = (tailWidth / 2 - tempLen / allLen * widthDif) / Math.sin(angle);
                    var left = getThirdPoint(points[i - 1], points[i], Math.PI - angle, w, true);
                    var right = getThirdPoint(points[i - 1], points[i], angle, w, false);
                    leftBodyPnts.push(left);
                    rightBodyPnts.push(right);
                }
                return leftBodyPnts.concat(rightBodyPnts);
            };

            AttackArrow.prototype.getTempPoint4 = function getTempPoint4(linePnt1, linePnt2, point) {
                try {
                    var midPnt = Mid(linePnt1, linePnt2);
                    var len = MathDistance(midPnt, point);
                    var angle = getAngleOfThreePoints(linePnt1, midPnt, point);
                    var symPnt = undefined,
                        distance1 = undefined,
                        distance2 = undefined,
                        mid = undefined;

                    if (angle < HALF_PI) {
                        distance1 = len * Math.sin(angle);
                        distance2 = len * Math.cos(angle);
                        mid = getThirdPoint(linePnt1, midPnt, HALF_PI, distance1, false);
                        symPnt = getThirdPoint(midPnt, mid, HALF_PI, distance2, true);
                    } else if (angle >= HALF_PI && angle < Math.PI) {
                        distance1 = len * Math.sin(Math.PI - angle);
                        distance2 = len * Math.cos(Math.PI - angle);
                        mid = getThirdPoint(linePnt1, midPnt, HALF_PI, distance1, false);
                        symPnt = getThirdPoint(midPnt, mid, HALF_PI, distance2, false);
                    } else if (angle >= Math.PI && angle < Math.PI * 1.5) {
                        distance1 = len * Math.sin(angle - Math.PI);
                        distance2 = len * Math.cos(angle - Math.PI);
                        mid = getThirdPoint(linePnt1, midPnt, HALF_PI, distance1, true);
                        symPnt = getThirdPoint(midPnt, mid, HALF_PI, distance2, true);
                    } else {
                        distance1 = len * Math.sin(Math.PI * 2 - angle);
                        distance2 = len * Math.cos(Math.PI * 2 - angle);
                        mid = getThirdPoint(linePnt1, midPnt, HALF_PI, distance1, true);
                        symPnt = getThirdPoint(midPnt, mid, HALF_PI, distance2, false);
                    }
                    return symPnt;
                } catch (e) {
                    console.log(e);
                }
            };

            AttackArrow.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            AttackArrow.prototype.getMap = function getMap() {
                return this.map;
            };

            AttackArrow.prototype.isPlot = function isPlot() {
                return true;
            };

            AttackArrow.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            AttackArrow.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            AttackArrow.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            AttackArrow.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            AttackArrow.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            AttackArrow.prototype.finishDrawing = function finishDrawing() {};

            return AttackArrow;
        }(ol.geom.Polygon);

        var DoubleArrow = function(_ol$geom$Polygon) {
            inherits(DoubleArrow, _ol$geom$Polygon);

            function DoubleArrow(coordinates, points, params) {
                classCallCheck(this, DoubleArrow);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = DOUBLE_ARROW;
                _this.headHeightFactor = 0.25;
                _this.headWidthFactor = 0.3;
                _this.neckHeightFactor = 0.85;
                _this.neckWidthFactor = 0.15;
                _this.connPoint = null;
                _this.tempPoint4 = null;
                _this.fixPointCount = 4;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            DoubleArrow.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            DoubleArrow.prototype.generate = function generate() {
                try {
                    var count = this.getPointCount();
                    if (count < 2) {
                        return false;
                    } else if (count === 2) {
                        this.setCoordinates([this.points]);
                        return false;
                    }
                    if (count > 2) {
                        var _ref = [this.points[0], this.points[1], this.points[2]],
                            pnt1 = _ref[0],
                            pnt2 = _ref[1],
                            pnt3 = _ref[2];

                        if (count === 3) {
                            this.tempPoint4 = this.getTempPoint4(pnt1, pnt2, pnt3);
                            this.connPoint = Mid(pnt1, pnt2);
                        } else if (count === 4) {
                            this.tempPoint4 = this.points[3];
                            this.connPoint = Mid(pnt1, pnt2);
                        } else {
                            this.tempPoint4 = this.points[3];
                            this.connPoint = this.points[4];
                        }
                        var leftArrowPnts = undefined,
                            rightArrowPnts = undefined;

                        if (isClockWise(pnt1, pnt2, pnt3)) {
                            leftArrowPnts = this.getArrowPoints(pnt1, this.connPoint, this.tempPoint4, false);
                            rightArrowPnts = this.getArrowPoints(this.connPoint, pnt2, pnt3, true);
                        } else {
                            leftArrowPnts = this.getArrowPoints(pnt2, this.connPoint, pnt3, false);
                            rightArrowPnts = this.getArrowPoints(this.connPoint, pnt1, this.tempPoint4, true);
                        }
                        var m = leftArrowPnts.length;
                        var t = (m - 5) / 2;
                        var llBodyPnts = leftArrowPnts.slice(0, t);
                        var lArrowPnts = leftArrowPnts.slice(t, t + 5);
                        var lrBodyPnts = leftArrowPnts.slice(t + 5, m);
                        var rlBodyPnts = rightArrowPnts.slice(0, t);
                        var rArrowPnts = rightArrowPnts.slice(t, t + 5);
                        var rrBodyPnts = rightArrowPnts.slice(t + 5, m);
                        rlBodyPnts = getBezierPoints(rlBodyPnts);
                        var bodyPnts = getBezierPoints(rrBodyPnts.concat(llBodyPnts.slice(1)));
                        lrBodyPnts = getBezierPoints(lrBodyPnts);
                        var pnts = rlBodyPnts.concat(rArrowPnts, bodyPnts, lArrowPnts, lrBodyPnts);
                        this.setCoordinates([pnts]);
                    }
                } catch (e) {
                    console.log(e);
                }
            };

            DoubleArrow.prototype.getArrowPoints = function getArrowPoints(pnt1, pnt2, pnt3, clockWise) {
                var midPnt = Mid(pnt1, pnt2);
                var len = MathDistance(midPnt, pnt3);
                var midPnt1 = getThirdPoint(pnt3, midPnt, 0, len * 0.3, true);
                var midPnt2 = getThirdPoint(pnt3, midPnt, 0, len * 0.5, true);
                midPnt1 = getThirdPoint(midPnt, midPnt1, HALF_PI, len / 5, clockWise);
                midPnt2 = getThirdPoint(midPnt, midPnt2, HALF_PI, len / 4, clockWise);
                var points = [midPnt, midPnt1, midPnt2, pnt3];
                var arrowPnts = this.getArrowHeadPoints(points);
                if (arrowPnts && Array.isArray(arrowPnts) && arrowPnts.length > 0) {
                    var _ref2 = [arrowPnts[0], arrowPnts[4]],
                        neckLeftPoint = _ref2[0],
                        neckRightPoint = _ref2[1];

                    var tailWidthFactor = MathDistance(pnt1, pnt2) / getBaseLength(points) / 2;
                    var bodyPnts = this.getArrowBodyPoints(points, neckLeftPoint, neckRightPoint, tailWidthFactor);
                    if (bodyPnts) {
                        var n = bodyPnts.length;
                        var lPoints = bodyPnts.slice(0, n / 2);
                        var rPoints = bodyPnts.slice(n / 2, n);
                        lPoints.push(neckLeftPoint);
                        rPoints.push(neckRightPoint);
                        lPoints = lPoints.reverse();
                        lPoints.push(pnt2);
                        rPoints = rPoints.reverse();
                        rPoints.push(pnt1);
                        return lPoints.reverse().concat(arrowPnts, rPoints);
                    }
                } else {
                    throw new Error('插值出错');
                }
            };

            DoubleArrow.prototype.getArrowHeadPoints = function getArrowHeadPoints(points) {
                try {
                    var len = getBaseLength(points);
                    var headHeight = len * this.headHeightFactor;
                    var headPnt = points[points.length - 1];
                    var headWidth = headHeight * this.headWidthFactor;
                    var neckWidth = headHeight * this.neckWidthFactor;
                    var neckHeight = headHeight * this.neckHeightFactor;
                    var headEndPnt = getThirdPoint(points[points.length - 2], headPnt, 0, headHeight, true);
                    var neckEndPnt = getThirdPoint(points[points.length - 2], headPnt, 0, neckHeight, true);
                    var headLeft = getThirdPoint(headPnt, headEndPnt, HALF_PI, headWidth, false);
                    var headRight = getThirdPoint(headPnt, headEndPnt, HALF_PI, headWidth, true);
                    var neckLeft = getThirdPoint(headPnt, neckEndPnt, HALF_PI, neckWidth, false);
                    var neckRight = getThirdPoint(headPnt, neckEndPnt, HALF_PI, neckWidth, true);
                    return [neckLeft, headLeft, headPnt, headRight, neckRight];
                } catch (e) {
                    console.log(e);
                }
            };

            DoubleArrow.prototype.getArrowBodyPoints = function getArrowBodyPoints(points, neckLeft, neckRight, tailWidthFactor) {
                var allLen = wholeDistance(points);
                var len = getBaseLength(points);
                var tailWidth = len * tailWidthFactor;
                var neckWidth = MathDistance(neckLeft, neckRight);
                var widthDif = (tailWidth - neckWidth) / 2;
                var tempLen = 0,
                    leftBodyPnts = [],
                    rightBodyPnts = [];

                for (var i = 1; i < points.length - 1; i++) {
                    var angle = getAngleOfThreePoints(points[i - 1], points[i], points[i + 1]) / 2;
                    tempLen += MathDistance(points[i - 1], points[i]);
                    var w = (tailWidth / 2 - tempLen / allLen * widthDif) / Math.sin(angle);
                    var left = getThirdPoint(points[i - 1], points[i], Math.PI - angle, w, true);
                    var right = getThirdPoint(points[i - 1], points[i], angle, w, false);
                    leftBodyPnts.push(left);
                    rightBodyPnts.push(right);
                }
                return leftBodyPnts.concat(rightBodyPnts);
            };

            DoubleArrow.prototype.getTempPoint4 = function getTempPoint4(linePnt1, linePnt2, point) {
                try {
                    var midPnt = Mid(linePnt1, linePnt2);
                    var len = MathDistance(midPnt, point);
                    var angle = getAngleOfThreePoints(linePnt1, midPnt, point);
                    var symPnt = undefined,
                        distance1 = undefined,
                        distance2 = undefined,
                        mid = undefined;

                    if (angle < HALF_PI) {
                        distance1 = len * Math.sin(angle);
                        distance2 = len * Math.cos(angle);
                        mid = getThirdPoint(linePnt1, midPnt, HALF_PI, distance1, false);
                        symPnt = getThirdPoint(midPnt, mid, HALF_PI, distance2, true);
                    } else if (angle >= HALF_PI && angle < Math.PI) {
                        distance1 = len * Math.sin(Math.PI - angle);
                        distance2 = len * Math.cos(Math.PI - angle);
                        mid = getThirdPoint(linePnt1, midPnt, HALF_PI, distance1, false);
                        symPnt = getThirdPoint(midPnt, mid, HALF_PI, distance2, false);
                    } else if (angle >= Math.PI && angle < Math.PI * 1.5) {
                        distance1 = len * Math.sin(angle - Math.PI);
                        distance2 = len * Math.cos(angle - Math.PI);
                        mid = getThirdPoint(linePnt1, midPnt, HALF_PI, distance1, true);
                        symPnt = getThirdPoint(midPnt, mid, HALF_PI, distance2, true);
                    } else {
                        distance1 = len * Math.sin(Math.PI * 2 - angle);
                        distance2 = len * Math.cos(Math.PI * 2 - angle);
                        mid = getThirdPoint(linePnt1, midPnt, HALF_PI, distance1, true);
                        symPnt = getThirdPoint(midPnt, mid, HALF_PI, distance2, false);
                    }
                    return symPnt;
                } catch (e) {
                    console.log(e);
                }
            };

            DoubleArrow.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            DoubleArrow.prototype.getMap = function getMap() {
                return this.map;
            };

            DoubleArrow.prototype.isPlot = function isPlot() {
                return true;
            };

            DoubleArrow.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            DoubleArrow.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            DoubleArrow.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            DoubleArrow.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            DoubleArrow.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            DoubleArrow.prototype.finishDrawing = function finishDrawing() {
                if (this.getPointCount() === 3 && this.tempPoint4 !== null) {
                    this.points.push(this.tempPoint4);
                }
                if (this.connPoint !== null) {
                    this.points.push(this.connPoint);
                }
            };

            return DoubleArrow;
        }(ol.geom.Polygon);

        var StraightArrow = function(_ol$geom$LineString) {
            inherits(StraightArrow, _ol$geom$LineString);

            function StraightArrow(coordinates, points, params) {
                classCallCheck(this, StraightArrow);

                var _this = possibleConstructorReturn(this, _ol$geom$LineString.call(this, []));

                _this.type = STRAIGHT_ARROW;
                _this.fixPointCount = 2;
                _this.maxArrowLength = 3000000;
                _this.arrowLengthScale = 5;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            StraightArrow.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            StraightArrow.prototype.generate = function generate() {
                try {
                    var count = this.getPointCount();
                    if (count < 2) {
                        return false;
                    } else {
                        var pnts = this.getPoints();
                        var _ref = [pnts[0], pnts[1]],
                            pnt1 = _ref[0],
                            pnt2 = _ref[1];

                        var distance = MathDistance(pnt1, pnt2);
                        var len = distance / this.arrowLengthScale;
                        len = len > this.maxArrowLength ? this.maxArrowLength : len;
                        var leftPnt = getThirdPoint(pnt1, pnt2, Math.PI / 6, len, false);
                        var rightPnt = getThirdPoint(pnt1, pnt2, Math.PI / 6, len, true);
                        this.setCoordinates([pnt1, pnt2, leftPnt, pnt2, rightPnt]);
                    }
                } catch (e) {
                    console.log(e);
                }
            };

            StraightArrow.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            StraightArrow.prototype.getMap = function getMap() {
                return this.map;
            };

            StraightArrow.prototype.isPlot = function isPlot() {
                return true;
            };

            StraightArrow.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            StraightArrow.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            StraightArrow.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            StraightArrow.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            StraightArrow.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            StraightArrow.prototype.finishDrawing = function finishDrawing() {};

            return StraightArrow;
        }(ol.geom.LineString);

        var FineArrow = function(_ol$geom$Polygon) {
            inherits(FineArrow, _ol$geom$Polygon);

            function FineArrow(coordinates, points, params) {
                classCallCheck(this, FineArrow);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = FINE_ARROW;
                _this.tailWidthFactor = 0.1;
                _this.neckWidthFactor = 0.2;
                _this.headWidthFactor = 0.25;
                _this.headAngle = Math.PI / 8.5;
                _this.neckAngle = Math.PI / 13;
                _this.fixPointCount = 2;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            FineArrow.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            FineArrow.prototype.generate = function generate() {
                try {
                    var cont = this.getPointCount();
                    if (cont < 2) {
                        return false;
                    } else {
                        var pnts = this.getPoints();
                        var _ref = [pnts[0], pnts[1]],
                            pnt1 = _ref[0],
                            pnt2 = _ref[1];

                        var len = getBaseLength(pnts);
                        var tailWidth = len * this.tailWidthFactor;
                        var neckWidth = len * this.neckWidthFactor;
                        var headWidth = len * this.headWidthFactor;
                        var tailLeft = getThirdPoint(pnt2, pnt1, HALF_PI, tailWidth, true);
                        var tailRight = getThirdPoint(pnt2, pnt1, HALF_PI, tailWidth, false);
                        var headLeft = getThirdPoint(pnt1, pnt2, this.headAngle, headWidth, false);
                        var headRight = getThirdPoint(pnt1, pnt2, this.headAngle, headWidth, true);
                        var neckLeft = getThirdPoint(pnt1, pnt2, this.neckAngle, neckWidth, false);
                        var neckRight = getThirdPoint(pnt1, pnt2, this.neckAngle, neckWidth, true);
                        var pList = [tailLeft, neckLeft, headLeft, pnt2, headRight, neckRight, tailRight];
                        this.setCoordinates([pList]);
                    }
                } catch (e) {
                    console.log(e);
                }
            };

            FineArrow.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            FineArrow.prototype.getMap = function getMap() {
                return this.map;
            };

            FineArrow.prototype.isPlot = function isPlot() {
                return true;
            };

            FineArrow.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            FineArrow.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            FineArrow.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            FineArrow.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            FineArrow.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            FineArrow.prototype.finishDrawing = function finishDrawing() {};

            return FineArrow;
        }(ol.geom.Polygon);

        var AssaultDirection = function(_FineArrow) {
            inherits(AssaultDirection, _FineArrow);

            function AssaultDirection(coordinates, points, params) {
                classCallCheck(this, AssaultDirection);

                var _this = possibleConstructorReturn(this, _FineArrow.call(this, coordinates, points, params));

                _this.tailWidthFactor = 0.05;
                _this.neckWidthFactor = 0.1;
                _this.headWidthFactor = 0.15;
                _this.type = ASSAULT_DIRECTION;
                _this.headAngle = Math.PI / 4;
                _this.neckAngle = Math.PI * 0.17741;
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                _this.set('params', params);
                return _this;
            }

            return AssaultDirection;
        }(FineArrow);

        var TailedAttackArrow = function(_AttackArrow) {
            inherits(TailedAttackArrow, _AttackArrow);

            function TailedAttackArrow(coordinates, points, params) {
                classCallCheck(this, TailedAttackArrow);

                var _this = possibleConstructorReturn(this, _AttackArrow.call(this, coordinates, points, params));

                _this.type = TAILED_ATTACK_ARROW;
                _this.headHeightFactor = 0.18;
                _this.headWidthFactor = 0.3;
                _this.neckHeightFactor = 0.85;
                _this.neckWidthFactor = 0.15;
                _this.tailWidthFactor = 0.1;
                _this.headTailFactor = 0.8;
                _this.swallowTailFactor = 1;
                _this.swallowTailPnt = null;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            TailedAttackArrow.prototype.generate = function generate() {
                try {
                    var points = this.getPointCount();
                    if (points < 2) {
                        return false;
                    } else if (points === 2) {
                        this.setCoordinates([this.points]);
                        return false;
                    } else {
                        var pnts = this.getPoints();
                        var _ref = [pnts[0], pnts[1]],
                            tailLeft = _ref[0],
                            tailRight = _ref[1];

                        if (isClockWise(pnts[0], pnts[1], pnts[2])) {
                            tailLeft = pnts[1];
                            tailRight = pnts[0];
                        }
                        var midTail = Mid(tailLeft, tailRight);
                        var bonePnts = [midTail].concat(pnts.slice(2));
                        var headPnts = this.getArrowHeadPoints(bonePnts, tailLeft, tailRight);
                        var _ref2 = [headPnts[0], headPnts[4]],
                            neckLeft = _ref2[0],
                            neckRight = _ref2[1];

                        var tailWidth = MathDistance(tailLeft, tailRight);
                        var allLen = getBaseLength(bonePnts);
                        var len = allLen * this.tailWidthFactor * this.swallowTailFactor;
                        this.swallowTailPnt = getThirdPoint(bonePnts[1], bonePnts[0], 0, len, true);
                        var factor = tailWidth / allLen;
                        var bodyPnts = this.getArrowBodyPoints(bonePnts, neckLeft, neckRight, factor);
                        var count = bodyPnts.length;
                        var leftPnts = [tailLeft].concat(bodyPnts.slice(0, count / 2));
                        leftPnts.push(neckLeft);
                        var rightPnts = [tailRight].concat(bodyPnts.slice(count / 2, count));
                        rightPnts.push(neckRight);
                        leftPnts = getQBSplinePoints(leftPnts);
                        rightPnts = getQBSplinePoints(rightPnts);
                        this.setCoordinates([leftPnts.concat(headPnts, rightPnts.reverse(), [this.swallowTailPnt, leftPnts[0]])]);
                    }
                } catch (e) {
                    console.log(e);
                }
            };

            return TailedAttackArrow;
        }(AttackArrow);

        var SquadCombat = function(_AttackArrow) {
            inherits(SquadCombat, _AttackArrow);

            function SquadCombat(coordinates, points, params) {
                classCallCheck(this, SquadCombat);

                var _this = possibleConstructorReturn(this, _AttackArrow.call(this, coordinates, points, params));

                _this.type = SQUAD_COMBAT;
                _this.headHeightFactor = 0.18;
                _this.headWidthFactor = 0.3;
                _this.neckHeightFactor = 0.85;
                _this.neckWidthFactor = 0.15;
                _this.tailWidthFactor = 0.1;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            SquadCombat.prototype.generate = function generate() {
                try {
                    var count = this.getPointCount();
                    if (count < 2) {
                        return false;
                    } else {
                        var pnts = this.getPoints();
                        var tailPnts = this.getTailPoints(pnts);
                        var headPnts = this.getArrowHeadPoints(pnts, tailPnts[0], tailPnts[1]);
                        var neckLeft = headPnts[0];
                        var neckRight = headPnts[4];
                        var bodyPnts = this.getArrowBodyPoints(pnts, neckLeft, neckRight, this.tailWidthFactor);
                        var _count = bodyPnts.length;
                        var leftPnts = [tailPnts[0]].concat(bodyPnts.slice(0, _count / 2));
                        leftPnts.push(neckLeft);
                        var rightPnts = [tailPnts[1]].concat(bodyPnts.slice(_count / 2, _count));
                        rightPnts.push(neckRight);
                        leftPnts = getQBSplinePoints(leftPnts);
                        rightPnts = getQBSplinePoints(rightPnts);
                        this.setCoordinates([leftPnts.concat(headPnts, rightPnts.reverse())]);
                    }
                } catch (e) {
                    console.log(e);
                }
            };

            SquadCombat.prototype.getTailPoints = function getTailPoints(points) {
                var allLen = getBaseLength(points);
                var tailWidth = allLen * this.tailWidthFactor;
                var tailLeft = getThirdPoint(points[1], points[0], HALF_PI, tailWidth, false);
                var tailRight = getThirdPoint(points[1], points[0], HALF_PI, tailWidth, true);
                return [tailLeft, tailRight];
            };

            return SquadCombat;
        }(AttackArrow);

        var TailedSquadCombat = function(_AttackArrow) {
            inherits(TailedSquadCombat, _AttackArrow);

            function TailedSquadCombat(coordinates, points, params) {
                classCallCheck(this, TailedSquadCombat);

                var _this = possibleConstructorReturn(this, _AttackArrow.call(this, coordinates, points, params));

                _this.type = TAILED_SQUAD_COMBAT;
                _this.headHeightFactor = 0.18;
                _this.headWidthFactor = 0.3;
                _this.neckHeightFactor = 0.85;
                _this.neckWidthFactor = 0.15;
                _this.tailWidthFactor = 0.1;
                _this.swallowTailFactor = 1;
                _this.swallowTailPnt = null;
                _this.fixPointCount = 2;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            TailedSquadCombat.prototype.generate = function generate() {
                try {
                    var count = this.getPointCount();
                    if (count < 2) {
                        return false;
                    } else {
                        var pnts = this.getPoints();
                        var tailPnts = this.getTailPoints(pnts);
                        var headPnts = this.getArrowHeadPoints(pnts, tailPnts[0], tailPnts[2]);
                        var neckLeft = headPnts[0];
                        var neckRight = headPnts[4];
                        var bodyPnts = this.getArrowBodyPoints(pnts, neckLeft, neckRight, this.tailWidthFactor);
                        var _count = bodyPnts.length;
                        var leftPnts = [tailPnts[0]].concat(bodyPnts.slice(0, _count / 2));
                        leftPnts.push(neckLeft);
                        var rightPnts = [tailPnts[2]].concat(bodyPnts.slice(_count / 2, _count));
                        rightPnts.push(neckRight);
                        leftPnts = getQBSplinePoints(leftPnts);
                        rightPnts = getQBSplinePoints(rightPnts);
                        this.setCoordinates([leftPnts.concat(headPnts, rightPnts.reverse(), [tailPnts[1], leftPnts[0]])]);
                    }
                } catch (e) {
                    console.log(e);
                }
            };

            TailedSquadCombat.prototype.getTailPoints = function getTailPoints(points) {
                var allLen = getBaseLength(points);
                var tailWidth = allLen * this.tailWidthFactor;
                var tailLeft = getThirdPoint(points[1], points[0], HALF_PI, tailWidth, false);
                var tailRight = getThirdPoint(points[1], points[0], HALF_PI, tailWidth, true);
                var len = tailWidth * this.swallowTailFactor;
                var swallowTailPnt = getThirdPoint(points[1], points[0], 0, len, true);
                return [tailLeft, swallowTailPnt, tailRight];
            };

            return TailedSquadCombat;
        }(AttackArrow);

        var GatheringPlace = function(_ol$geom$Polygon) {
            inherits(GatheringPlace, _ol$geom$Polygon);

            function GatheringPlace(coordinates, points, params) {
                classCallCheck(this, GatheringPlace);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = GATHERING_PLACE;
                _this.t = 0.4;
                _this.fixPointCount = 3;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            GatheringPlace.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            GatheringPlace.prototype.generate = function generate() {
                var pnts = this.getPoints();
                var points = this.getPointCount();
                if (pnts.length < 2) {
                    return false;
                } else {
                    if (points === 2) {
                        var _mid = Mid(pnts[0], pnts[1]);
                        var d = MathDistance(pnts[0], _mid) / 0.9;
                        var pnt = getThirdPoint(pnts[0], _mid, HALF_PI, d, true);
                        pnts = [pnts[0], pnt, pnts[1]];
                    }
                    var mid = Mid(pnts[0], pnts[2]);
                    pnts.push(mid, pnts[0], pnts[1]);
                    var normals = [],
                        pnt1 = undefined,
                        pnt2 = undefined,
                        pnt3 = undefined,
                        pList = [];

                    for (var i = 0; i < pnts.length - 2; i++) {
                        pnt1 = pnts[i];
                        pnt2 = pnts[i + 1];
                        pnt3 = pnts[i + 2];
                        var normalPoints = getBisectorNormals(this.t, pnt1, pnt2, pnt3);
                        normals = normals.concat(normalPoints);
                    }
                    var count = normals.length;
                    normals = [normals[count - 1]].concat(normals.slice(0, count - 1));
                    for (var _i = 0; _i < pnts.length - 2; _i++) {
                        pnt1 = pnts[_i];
                        pnt2 = pnts[_i + 1];
                        pList.push(pnt1);
                        for (var t = 0; t <= FITTING_COUNT; t++) {
                            var _pnt = getCubicValue(t / FITTING_COUNT, pnt1, normals[_i * 2], normals[_i * 2 + 1], pnt2);
                            pList.push(_pnt);
                        }
                        pList.push(pnt2);
                    }
                    this.setCoordinates([pList]);
                }
            };

            GatheringPlace.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            GatheringPlace.prototype.getMap = function getMap() {
                return this.map;
            };

            GatheringPlace.prototype.isPlot = function isPlot() {
                return true;
            };

            GatheringPlace.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            GatheringPlace.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            GatheringPlace.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            GatheringPlace.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            GatheringPlace.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            GatheringPlace.prototype.finishDrawing = function finishDrawing() {};

            return GatheringPlace;
        }(ol.geom.Polygon);

        var RectFlag = function(_ol$geom$Polygon) {
            inherits(RectFlag, _ol$geom$Polygon);

            function RectFlag(coordinates, points, params) {
                classCallCheck(this, RectFlag);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = RECTFLAG;
                _this.fixPointCount = 2;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            RectFlag.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            RectFlag.prototype.generate = function generate() {
                var count = this.getPointCount();
                if (count < 2) {
                    return false;
                } else {
                    this.setCoordinates([this.calculatePonits(this.points)]);
                }
            };

            RectFlag.prototype.calculatePonits = function calculatePonits(points) {
                var components = [];

                if (points.length > 1) {
                    var startPoint = points[0];

                    var endPoint = points[points.length - 1];
                    var point1 = [endPoint[0], startPoint[1]];
                    var point2 = [endPoint[0], (startPoint[1] + endPoint[1]) / 2];
                    var point3 = [startPoint[0], (startPoint[1] + endPoint[1]) / 2];
                    var point4 = [startPoint[0], endPoint[1]];
                    components = [startPoint, point1, point2, point3, point4];
                }
                return components;
            };

            RectFlag.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            RectFlag.prototype.getMap = function getMap() {
                return this.map;
            };

            RectFlag.prototype.isPlot = function isPlot() {
                return true;
            };

            RectFlag.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            RectFlag.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            RectFlag.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            RectFlag.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            RectFlag.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            RectFlag.prototype.finishDrawing = function finishDrawing() {};

            return RectFlag;
        }(ol.geom.Polygon);

        var TriangleFlag = function(_ol$geom$Polygon) {
            inherits(TriangleFlag, _ol$geom$Polygon);

            function TriangleFlag(coordinates, points, params) {
                classCallCheck(this, TriangleFlag);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = TRIANGLEFLAG;
                _this.fixPointCount = 2;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            TriangleFlag.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            TriangleFlag.prototype.generate = function generate() {
                var count = this.getPointCount();
                if (count < 2) {
                    return false;
                } else {
                    this.setCoordinates([this.calculatePonits(this.points)]);
                }
            };

            TriangleFlag.prototype.calculatePonits = function calculatePonits(points) {
                var components = [];

                if (points.length > 1) {
                    var startPoint = points[0];

                    var endPoint = points[points.length - 1];
                    var point1 = [endPoint[0], (startPoint[1] + endPoint[1]) / 2];
                    var point2 = [startPoint[0], (startPoint[1] + endPoint[1]) / 2];
                    var point3 = [startPoint[0], endPoint[1]];
                    components = [startPoint, point1, point2, point3];
                }
                return components;
            };

            TriangleFlag.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            TriangleFlag.prototype.getMap = function getMap() {
                return this.map;
            };

            TriangleFlag.prototype.isPlot = function isPlot() {
                return true;
            };

            TriangleFlag.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            TriangleFlag.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            TriangleFlag.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            TriangleFlag.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            TriangleFlag.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            TriangleFlag.prototype.finishDrawing = function finishDrawing() {};

            return TriangleFlag;
        }(ol.geom.Polygon);

        var CurveFlag = function(_ol$geom$Polygon) {
            inherits(CurveFlag, _ol$geom$Polygon);

            function CurveFlag(coordinates, points, params) {
                classCallCheck(this, CurveFlag);

                var _this = possibleConstructorReturn(this, _ol$geom$Polygon.call(this, []));

                _this.type = CURVEFLAG;
                _this.fixPointCount = 2;
                _this.set('params', params);
                if (points && points.length > 0) {
                    _this.setPoints(points);
                } else if (coordinates && coordinates.length > 0) {
                    _this.setCoordinates(coordinates);
                }
                return _this;
            }

            CurveFlag.prototype.getPlotType = function getPlotType() {
                return this.type;
            };

            CurveFlag.prototype.generate = function generate() {
                var count = this.getPointCount();
                if (count < 2) {
                    return false;
                } else {
                    this.setCoordinates([this.calculatePonits(this.points)]);
                }
            };

            CurveFlag.prototype.calculatePonits = function calculatePonits(points) {
                var components = [];

                if (points.length > 1) {
                    var startPoint = points[0];

                    var endPoint = points[points.length - 1];

                    var point1 = startPoint;

                    var point2 = [(endPoint[0] - startPoint[0]) / 4 + startPoint[0], (endPoint[1] - startPoint[1]) / 8 + startPoint[1]];

                    var point3 = [(startPoint[0] + endPoint[0]) / 2, startPoint[1]];

                    var point4 = [(endPoint[0] - startPoint[0]) * 3 / 4 + startPoint[0], -(endPoint[1] - startPoint[1]) / 8 + startPoint[1]];

                    var point5 = [endPoint[0], startPoint[1]];

                    var point6 = [endPoint[0], (startPoint[1] + endPoint[1]) / 2];

                    var point7 = [(endPoint[0] - startPoint[0]) * 3 / 4 + startPoint[0], (endPoint[1] - startPoint[1]) * 3 / 8 + startPoint[1]];

                    var point8 = [(startPoint[0] + endPoint[0]) / 2, (startPoint[1] + endPoint[1]) / 2];

                    var point9 = [(endPoint[0] - startPoint[0]) / 4 + startPoint[0], (endPoint[1] - startPoint[1]) * 5 / 8 + startPoint[1]];

                    var point10 = [startPoint[0], (startPoint[1] + endPoint[1]) / 2];

                    var point11 = [startPoint[0], endPoint[1]];

                    var curve1 = getBezierPoints([point1, point2, point3, point4, point5]);

                    var curve2 = getBezierPoints([point6, point7, point8, point9, point10]);

                    components = curve1.concat(curve2);
                    components.push(point11);
                }
                return components;
            };

            CurveFlag.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            CurveFlag.prototype.getMap = function getMap() {
                return this.map;
            };

            CurveFlag.prototype.isPlot = function isPlot() {
                return true;
            };

            CurveFlag.prototype.setPoints = function setPoints(value) {
                this.points = !value ? [] : value;
                if (this.points.length >= 1) {
                    this.generate();
                }
            };

            CurveFlag.prototype.getPoints = function getPoints() {
                return this.points.slice(0);
            };

            CurveFlag.prototype.getPointCount = function getPointCount() {
                return this.points.length;
            };

            CurveFlag.prototype.updatePoint = function updatePoint(point, index) {
                if (index >= 0 && index < this.points.length) {
                    this.points[index] = point;
                    this.generate();
                }
            };

            CurveFlag.prototype.updateLastPoint = function updateLastPoint(point) {
                this.updatePoint(point, this.points.length - 1);
            };

            CurveFlag.prototype.finishDrawing = function finishDrawing() {};

            return CurveFlag;
        }(ol.geom.Polygon);



        var Geometry = Object.freeze({
            Point: Point,
            Pennant: Pennant,
            Polyline: Polyline,
            Arc: Arc,
            Circle: Circle,
            Curve: Curve,
            FreeHandLine: FreeHandLine,
            RectAngle: RectAngle,
            Ellipse: Ellipse,
            Lune: Lune,
            Sector: Sector,
            ClosedCurve: ClosedCurve,
            Polygon: Polygon,
            FreePolygon: FreePolygon,
            AttackArrow: AttackArrow,
            DoubleArrow: DoubleArrow,
            StraightArrow: StraightArrow,
            FineArrow: FineArrow,
            AssaultDirection: AssaultDirection,
            TailedAttackArrow: TailedAttackArrow,
            SquadCombat: SquadCombat,
            TailedSquadCombat: TailedSquadCombat,
            GatheringPlace: GatheringPlace,
            RectFlag: RectFlag,
            TriangleFlag: TriangleFlag,
            CurveFlag: CurveFlag
        });

        var PlotFactory = function() {
            function PlotFactory(map) {
                classCallCheck(this, PlotFactory);

                this.version = '1.0.0';
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('缺少地图对象！');
                }
            }

            PlotFactory.prototype.createPlot = function createPlot(type, points, _params) {
                var params = _params || {};
                switch (type) {
                    case TextArea:
                        return 'TextArea';
                    case POINT:
                        return new Point([], points, params);
                    case PENNANT:
                        return new Pennant([], points, params);
                    case POLYLINE:
                        return new Polyline([], points, params);
                    case ARC:
                        return new Arc([], points, params);
                    case CIRCLE:
                        return new Circle([], points, params);
                    case CURVE:
                        return new Curve([], points, params);
                    case FREE_LINE:
                        return new FreeHandLine([], points, params);
                    case RECTANGLE:
                        return new RectAngle([], points, params);
                    case ELLIPSE:
                        return new Ellipse([], points, params);
                    case LUNE:
                        return new Lune([], points, params);
                    case SECTOR:
                        return new Sector([], points, params);
                    case CLOSED_CURVE:
                        return new ClosedCurve([], points, params);
                    case POLYGON:
                        return new Polygon([], points, params);
                    case ATTACK_ARROW:
                        return new AttackArrow([], points, params);
                    case FREE_POLYGON:
                        return new FreePolygon([], points, params);
                    case DOUBLE_ARROW:
                        return new DoubleArrow([], points, params);
                    case STRAIGHT_ARROW:
                        return new StraightArrow([], points, params);
                    case FINE_ARROW:
                        return new FineArrow([], points, params);
                    case ASSAULT_DIRECTION:
                        return new AssaultDirection([], points, params);
                    case TAILED_ATTACK_ARROW:
                        return new TailedAttackArrow([], points, params);
                    case SQUAD_COMBAT:
                        return new SquadCombat([], points, params);
                    case TAILED_SQUAD_COMBAT:
                        return new TailedSquadCombat([], points, params);
                    case GATHERING_PLACE:
                        return new GatheringPlace([], points, params);
                    case RECTFLAG:
                        return new RectFlag([], points, params);
                    case TRIANGLEFLAG:
                        return new TriangleFlag([], points, params);
                    case CURVEFLAG:
                        return new CurveFlag([], points, params);
                }
                return null;
            };

            PlotFactory.prototype.setMap = function setMap(map) {
                if (map && map instanceof ol.Map) {
                    this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
            };

            PlotFactory.prototype.getMap = function getMap() {
                return this.map;
            };

            return PlotFactory;
        }();

        var autosize = createCommonjsModule(function(module, exports) {
            /*!
            	Autosize 4.0.0
            	license: MIT
            	http://www.jacklmoore.com/autosize
            */
            (function(global, factory) {
                if (typeof undefined === 'function' && undefined.amd) {
                    undefined(['exports', 'module'], factory);
                } else {
                    factory(exports, module);
                }
            })(commonjsGlobal, function(exports, module) {
                'use strict';

                var map = typeof Map === "function" ? new Map() : (function() {
                    var keys = [];
                    var values = [];

                    return {
                        has: function has(key) {
                            return keys.indexOf(key) > -1;
                        },
                        get: function get(key) {
                            return values[keys.indexOf(key)];
                        },
                        set: function set(key, value) {
                            if (keys.indexOf(key) === -1) {
                                keys.push(key);
                                values.push(value);
                            }
                        },
                        'delete': function _delete(key) {
                            var index = keys.indexOf(key);
                            if (index > -1) {
                                keys.splice(index, 1);
                                values.splice(index, 1);
                            }
                        }
                    };
                })();

                var createEvent = function createEvent(name) {
                    return new Event(name, { bubbles: true });
                };
                try {
                    new Event('test');
                } catch (e) {
                    // IE does not support `new Event()`
                    createEvent = function(name) {
                        var evt = document.createEvent('Event');
                        evt.initEvent(name, true, false);
                        return evt;
                    };
                }

                function assign(ta) {
                    if (!ta || !ta.nodeName || ta.nodeName !== 'TEXTAREA' || map.has(ta)) return;

                    var heightOffset = null;
                    var clientWidth = ta.clientWidth;
                    var cachedHeight = null;

                    function init() {
                        var style = window.getComputedStyle(ta, null);

                        if (style.resize === 'vertical') {
                            ta.style.resize = 'none';
                        } else if (style.resize === 'both') {
                            ta.style.resize = 'horizontal';
                        }

                        if (style.boxSizing === 'content-box') {
                            heightOffset = -(parseFloat(style.paddingTop) + parseFloat(style.paddingBottom));
                        } else {
                            heightOffset = parseFloat(style.borderTopWidth) + parseFloat(style.borderBottomWidth);
                        }
                        // Fix when a textarea is not on document body and heightOffset is Not a Number
                        if (isNaN(heightOffset)) {
                            heightOffset = 0;
                        }

                        update();
                    }

                    function changeOverflow(value) {
                        {
                            // Chrome/Safari-specific fix:
                            // When the textarea y-overflow is hidden, Chrome/Safari do not reflow the text to account for the space
                            // made available by removing the scrollbar. The following forces the necessary text reflow.
                            var width = ta.style.width;
                            ta.style.width = '0px';
                            // Force reflow:
                            /* jshint ignore:start */
                            ta.offsetWidth;
                            /* jshint ignore:end */
                            ta.style.width = width;
                        }

                        ta.style.overflowY = value;
                    }

                    function getParentOverflows(el) {
                        var arr = [];

                        while (el && el.parentNode && el.parentNode instanceof Element) {
                            if (el.parentNode.scrollTop) {
                                arr.push({
                                    node: el.parentNode,
                                    scrollTop: el.parentNode.scrollTop
                                });
                            }
                            el = el.parentNode;
                        }

                        return arr;
                    }

                    function resize() {
                        var originalHeight = ta.style.height;
                        var overflows = getParentOverflows(ta);
                        var docTop = document.documentElement && document.documentElement.scrollTop; // Needed for Mobile IE (ticket #240)

                        ta.style.height = '';

                        var endHeight = ta.scrollHeight + heightOffset;

                        if (ta.scrollHeight === 0) {
                            // If the scrollHeight is 0, then the element probably has display:none or is detached from the DOM.
                            ta.style.height = originalHeight;
                            return;
                        }

                        ta.style.height = endHeight + 'px';

                        // used to check if an update is actually necessary on window.resize
                        clientWidth = ta.clientWidth;

                        // prevents scroll-position jumping
                        overflows.forEach(function(el) {
                            el.node.scrollTop = el.scrollTop;
                        });

                        if (docTop) {
                            document.documentElement.scrollTop = docTop;
                        }
                    }

                    function update() {
                        resize();

                        var styleHeight = Math.round(parseFloat(ta.style.height));
                        var computed = window.getComputedStyle(ta, null);

                        // Using offsetHeight as a replacement for computed.height in IE, because IE does not account use of border-box
                        var actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(computed.height)) : ta.offsetHeight;

                        // The actual height not matching the style height (set via the resize method) indicates that
                        // the max-height has been exceeded, in which case the overflow should be allowed.
                        if (actualHeight !== styleHeight) {
                            if (computed.overflowY === 'hidden') {
                                changeOverflow('scroll');
                                resize();
                                actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
                            }
                        } else {
                            // Normally keep overflow set to hidden, to avoid flash of scrollbar as the textarea expands.
                            if (computed.overflowY !== 'hidden') {
                                changeOverflow('hidden');
                                resize();
                                actualHeight = computed.boxSizing === 'content-box' ? Math.round(parseFloat(window.getComputedStyle(ta, null).height)) : ta.offsetHeight;
                            }
                        }

                        if (cachedHeight !== actualHeight) {
                            cachedHeight = actualHeight;
                            var evt = createEvent('autosize:resized');
                            try {
                                ta.dispatchEvent(evt);
                            } catch (err) {
                                // Firefox will throw an error on dispatchEvent for a detached element
                                // https://bugzilla.mozilla.org/show_bug.cgi?id=889376
                            }
                        }
                    }

                    var pageResize = function pageResize() {
                        if (ta.clientWidth !== clientWidth) {
                            update();
                        }
                    };

                    var destroy = (function(style) {
                        window.removeEventListener('resize', pageResize, false);
                        ta.removeEventListener('input', update, false);
                        ta.removeEventListener('keyup', update, false);
                        ta.removeEventListener('autosize:destroy', destroy, false);
                        ta.removeEventListener('autosize:update', update, false);

                        Object.keys(style).forEach(function(key) {
                            ta.style[key] = style[key];
                        });

                        map['delete'](ta);
                    }).bind(ta, {
                        height: ta.style.height,
                        resize: ta.style.resize,
                        overflowY: ta.style.overflowY,
                        overflowX: ta.style.overflowX,
                        wordWrap: ta.style.wordWrap
                    });

                    ta.addEventListener('autosize:destroy', destroy, false);

                    // IE9 does not fire onpropertychange or oninput for deletions,
                    // so binding to onkeyup to catch most of those events.
                    // There is no way that I know of to detect something like 'cut' in IE9.
                    if ('onpropertychange' in ta && 'oninput' in ta) {
                        ta.addEventListener('keyup', update, false);
                    }

                    window.addEventListener('resize', pageResize, false);
                    ta.addEventListener('input', update, false);
                    ta.addEventListener('autosize:update', update, false);
                    ta.style.overflowX = 'hidden';
                    ta.style.wordWrap = 'break-word';

                    map.set(ta, {
                        destroy: destroy,
                        update: update
                    });

                    init();
                }

                function destroy(ta) {
                    var methods = map.get(ta);
                    if (methods) {
                        methods.destroy();
                    }
                }

                function update(ta) {
                    var methods = map.get(ta);
                    if (methods) {
                        methods.update();
                    }
                }

                var autosize = null;

                // Do nothing in Node.js environment and IE8 (or lower)
                if (typeof window === 'undefined' || typeof window.getComputedStyle !== 'function') {
                    autosize = function(el) {
                        return el;
                    };
                    autosize.destroy = function(el) {
                        return el;
                    };
                    autosize.update = function(el) {
                        return el;
                    };
                } else {
                    autosize = function(el, options) {
                        if (el) {
                            Array.prototype.forEach.call(el.length ? el : [el], function(x) {
                                return assign(x, options);
                            });
                        }
                        return el;
                    };
                    autosize.destroy = function(el) {
                        if (el) {
                            Array.prototype.forEach.call(el.length ? el : [el], destroy);
                        }
                        return el;
                    };
                    autosize.update = function(el) {
                        if (el) {
                            Array.prototype.forEach.call(el.length ? el : [el], update);
                        }
                        return el;
                    };
                }

                module.exports = autosize;
            });
        });

        var SPECIAL_CHARS_REGEXP = /([\:\-\_]+(.))/g;
        var MOZ_HACK_REGEXP = /^moz([A-Z])/;

        var create$1 = function create(tagName, className, container, id) {
            var el = document.createElement(tagName);
            el.className = className || '';
            if (id) {
                el.id = id;
            }
            if (container) {
                container.appendChild(el);
            }
            return el;
        };

        var getElement = function getElement(id) {
            return typeof id === 'string' ? document.getElementById(id) : id;
        };

        var remove = function remove(el) {
            var parent = el.parentNode;
            if (parent) {
                parent.removeChild(el);
            }
        };



        var createHidden = function createHidden(tagName, parent, id) {
            var element = document.createElement(tagName);
            element.style.display = 'none';
            if (id) {
                element.id = id;
            }
            if (parent) {
                parent.appendChild(element);
            }
            return element;
        };

        var camelCase = function camelCase(name) {
            return name.replace(SPECIAL_CHARS_REGEXP, function(_, separator, letter, offset) {
                return offset ? letter.toUpperCase() : letter;
            }).replace(MOZ_HACK_REGEXP, 'Moz$1');
        };

        var on = function() {
            if (document.addEventListener) {
                return function(element, event, handler) {
                    if (element && event && handler) {
                        element.addEventListener(event, handler, false);
                    }
                };
            }
        }();

        var off = function() {
            if (document.removeEventListener) {
                return function(element, event, handler) {
                    if (element && event) {
                        element.removeEventListener(event, handler, false);
                    }
                };
            }
        }();









        function getStyle(element, styleName) {

            if (!element || !styleName) return null;
            styleName = camelCase(styleName);
            if (styleName === 'float') {
                styleName = 'cssFloat';
            }
            try {
                var computed = document.defaultView.getComputedStyle(element, '');
                return element.style[styleName] || computed ? computed[styleName] : null;
            } catch (e) {
                return element.style[styleName];
            }
        }

        function setStyle(element, styleName, value) {

            if (!element || !styleName) return;

            if ((typeof styleName === 'undefined' ? 'undefined' : _typeof(styleName)) === 'object') {
                for (var prop in styleName) {
                    if (styleName.hasOwnProperty(prop)) {
                        setStyle(element, prop, styleName[prop]);
                    }
                }
            } else {
                styleName = camelCase(styleName);
                if (styleName === 'opacity') {
                    element.style.filter = isNaN(value) ? '' : 'alpha(opacity=' + value * 100 + ')';
                } else {
                    element.style[styleName] = value;
                }
            }
        }

        var $DrawInteraction = ol.interaction.Draw;
        var $DragPan = ol.interaction.DragPan;
        var $Overlay = ol.Overlay;
        var $Style = ol.style.Style;
        var $Icon = ol.style.Icon;
        var $Stroke = ol.style.Stroke;
        var $Fill = ol.style.Fill;

        var PlotText = function(_Observable) {
            inherits(PlotText, _Observable);

            function PlotText(map) {
                var options = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};
                classCallCheck(this, PlotText);

                var _this = possibleConstructorReturn(this, _Observable.call(this));

                if (map && map instanceof ol.Map) {
                    _this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
                _this.options = options;

                _this.draw = null;

                _this.center = [];

                _this._uuid = getuuid();

                _this.preCursor_ = null;

                _this.dragging_ = false;

                _this.isClick_ = false;

                _this.mapDragPan = null;

                _this.textOverlay = null;

                _this.content = null;

                _this.activeInteraction();

                Observable.call(_this);
                return _this;
            }

            PlotText.prototype.activeInteraction = function activeInteraction() {
                this.draw = new $DrawInteraction({
                    style: new $Style({
                        fill: new $Fill({
                            color: FILL
                        }),
                        stroke: new $Stroke({
                            color: STROKE,
                            width: WIDTH
                        }),
                        image: new $Icon({
                            anchor: [1, 1],
                            anchorXUnits: 'fraction',
                            anchorYUnits: 'fraction',
                            opacity: 0.75,
                            src: 'data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAABAAAAAQCAYAAAAf8/9hAAABgklEQVQ4T41T0W3CQAy1lfwRqR0h/CE5UhkBJmiZADpB0wlKJwA2aDegE5QR+Igl/noj9OPuLydXPuXQEYUKS5FyPvvd87ONRDRFxEdr7c4Y8ws3WFmW90VRvIjIF1ZVtQaANxH59N6v8zwvRaQEgCMATDu88I+Ipm1bk2XZHhEfAOAdFW00Gh2YOQafOeidHoaYEdGHc65GDZhMJuXpdDJ99hqkPmZe9e9iTgCoqmrWNM0hDerq/FGftXbcZxFzAgARrZg5vBaNiGpE3OhZRF6Zedu7DzkRYMrMKlQKYBBRQVVgw8zj3n3IGWSg9ESkds6tiqJQbe4AYJ6WGVkPAqh4+romdP9LbXMqZh/gXIKqm+d5EK9vbduOY7d0AAdL6AYLmqbRAQtGRMc4ONF/wSC2RF/PsuwbABapqLEjKqb3fq4sLtoYh6Lbiydr7TbtuwYDgH5qB9XmPEjdKG+Y+Xmo7ms+Lcs5N0uX6ei9X9y4TGtEXIZlukb7PzbdmNcisv8DtQILak2vZsYAAAAASUVORK5CYII='
                        })
                    }),
                    type: 'Circle',
                    geometryFunction: $DrawInteraction.createBox()
                });
                this.map.addInteraction(this.draw);
                this.draw.on('drawend', this.drawEnd, this);
            };

            PlotText.prototype.disActiveInteraction = function disActiveInteraction() {
                if (this.draw) {
                    this.map.removeInteraction(this.draw);
                    this.draw = null;
                }
            };

            PlotText.prototype.drawEnd = function drawEnd(event) {
                if (event && event.feature) {
                    this.map.removeInteraction(this.draw);
                    var extent = event.feature.getGeometry().getExtent();
                    this.center = [(extent[0] + extent[2]) / 2, (extent[1] + extent[3]) / 2];
                    var topLeft = this.map.getPixelFromCoordinate([extent[0], extent[1]]);
                    var bottomRight = this.map.getPixelFromCoordinate([extent[2], extent[3]]);
                    this.creatTextArea({
                        center: this.center,
                        width: parseInt(Math.abs(topLeft[0] - bottomRight[0])),
                        height: parseInt(Math.abs(topLeft[1] - bottomRight[1]))
                    });
                } else {
                    console.info('未获取到要素！');
                }
            };

            PlotText.prototype.creatTextArea = function creatTextArea(params) {
                var _className = this.options.className || 'ol-plot-text-editor';
                this.content = document.createElement('textarea');
                this.content.className = _className;
                this.setStyle(DEF_TEXT_STYEL);
                this.content.style.width = params['width'] + 'px';
                this.content.style.minHeight = params['height'] + 'px';
                this.content.setAttribute('id', this._uuid);
                this.content.setAttribute('contenteditable', true);
                autosize(this.content);
                on(this.content, 'click', this.handleClick_.bind(this));
                on(window, 'click', this.handleClick_.bind(this));
                on(this.content, 'mousedown', this.handleDraggerStart_.bind(this));
                on(window, 'mouseup', this.handleDraggerEnd_.bind(this));
                this.textOverlay = new $Overlay({
                    isPlotText: true,
                    id: this._uuid,
                    element: this.content,
                    position: params['center'],
                    positioning: 'center-center',
                    stopEvent: true,
                    insertFirst: false
                });
                this.textOverlay.set('isPlotText', true);
                this.map.addOverlay(this.textOverlay);
                this.map.render();
                this.dispatch('TextAreaDrawEnd', {
                    source: this,
                    overlay: this.textOverlay,
                    element: this.content,
                    uuid: this._uuid
                });
            };

            PlotText.prototype.handleDraggerStart_ = function handleDraggerStart_() {
                var _this2 = this;

                if (!this.dragging_) {
                    window.setTimeout(function() {
                        if (!_this2.isClick_) {
                            _this2.dragging_ = true;
                            _this2.disableMapDragPan();
                            _this2.preCursor_ = _this2.content.style.cursor;
                            on(_this2.map.getViewport(), 'mousemove', _this2.handleDraggerDrag_.bind(_this2));
                            on(_this2.content, 'mouseup', _this2.handleDraggerEnd_.bind(_this2));
                        }
                    }, 300);
                }
            };

            PlotText.prototype.handleDraggerDrag_ = function handleDraggerDrag_(event) {
                if (this.dragging_) {
                    this.content.style.cursor = 'move';
                    this.center = this.map.getCoordinateFromPixel([event.clientX, event.clientY]);
                    this.textOverlay.setPosition(this.center);
                }
            };

            PlotText.prototype.handleDraggerEnd_ = function handleDraggerEnd_() {
                this.isClick_ = false;
                if (this.dragging_) {
                    this.dragging_ = false;
                    this.enableMapDragPan();
                    this.content.style.cursor = this.preCursor_;
                    off(this.map.getViewport(), 'mousemove', this.handleDraggerDrag_.bind(this));
                    off(this.content, 'mouseup', this.handleDraggerEnd_.bind(this));
                }
            };

            PlotText.prototype.handleClick_ = function handleClick_(event) {
                if (event.target === this.content) {
                    this.isClick_ = true;
                } else {}
            };

            PlotText.prototype.setStyle = function setStyle$$1() {
                var style = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : {};

                if (this.content) {
                    for (var key in style) {
                        if (style[key]) {
                            this.content.style[key] = style[key];
                        }
                    }
                }
            };

            PlotText.prototype.getStyle = function getStyle$$1() {
                var _style = {};
                if (this.content) {
                    for (var key in DEF_TEXT_STYEL) {
                        _style[key] = this.content.style[key];
                    }
                }
                return _style;
            };

            PlotText.prototype.enableMapDragPan = function enableMapDragPan() {
                if (this.mapDragPan && this.mapDragPan instanceof $DragPan) {
                    this.map.addInteraction(this.mapDragPan);
                    this.mapDragPan = null;
                }
            };

            PlotText.prototype.disableMapDragPan = function disableMapDragPan() {
                var _this3 = this;

                var interactions = this.map.getInteractions().getArray();
                interactions.every(function(item) {
                    if (item instanceof $DragPan) {
                        _this3.mapDragPan = item;
                        _this3.map.removeInteraction(item);
                        return false;
                    } else {
                        return true;
                    }
                });
            };

            return PlotText;
        }(Observable);

        var $Map = ol.Map;
        var $Group = ol.layer.Group;
        var $VectorLayer = ol.layer.Vector;
        var $VectorSource = ol.source.Vector;
        var $Style$1 = ol.style.Style;
        var $Stroke$1 = ol.style.Stroke;
        var $Text$1 = ol.style.Text;
        var $Circle = ol.style.Circle;
        var $Fill$1 = ol.style.Fill;
        var $LayerUtils = function $LayerUtils(map) {
            if (map && map instanceof $Map) {
                this.map = map;
            } else {
                throw new Error('传入的不是地图对象！');
            }
        };

        $LayerUtils.prototype.getLayerByLayerName = function(layerName) {
            try {
                // var targetLayer = null;
                if (this.map) {

                    var layers = this.map.getLayers().getArray();
                    var layer = this.map.getLayers()
                        // console.log(layer)
                        // console.log(layers[1])

                    var targetLayer = this.getLayerInternal(layers, 'layerName', layerName);
                    // console.log(targetLayer)
                }
                return targetLayer;
            } catch (e) {
                console.log(e);
            }
        };

        $LayerUtils.prototype.getLayerInternal = function(layers, key, value) {
            var _this = this;

            var _target = null;
            if (layers.length > 0) {

                layers.every(function(layer) {
                    if (layer instanceof $Group) {
                        // console.log("AAAA")
                        var _layers = layer.getLayers().getArray();
                        _target = _this.getLayerInternal(_layers, key, value);
                        if (_target) {
                            return false;
                        } else {
                            return true;
                        }
                    } else if (layer.get(key) === value) {
                        // console.log("BBBB")
                        _target = layer;
                        return false;
                    } else {
                        // console.log("CCCC")
                        return true;
                    }
                });
            }
            return _target;
        };

        $LayerUtils.prototype.getLayersArrayInternal = function(layers, key, value) {
            var _this2 = this;

            var _target = [];
            if (layers.length > 0) {
                layers.forEach(function(layer) {
                    if (layer instanceof $Group) {
                        var _layers2 = layer.getLayers().getArray();
                        var _layer = _this2.getLayersArrayInternal(_layers2, key, value);
                        if (_layer) {
                            _target = _target.concat(_layer);
                        }
                    } else if (layer.get(key) === value) {
                        _target.push(layer);
                    }
                });
            }
            return _target;
        };

        $LayerUtils.prototype.getLayerByKeyValue = function(key, value) {
            try {
                var targetLayer = null;
                if (this.map) {
                    var layers = this.map.getLayers().getArray();
                    targetLayer = this.getLayerInternal(layers, key, value);
                }
                return targetLayer;
            } catch (e) {
                console.log(e);
            }
        };

        $LayerUtils.prototype.getLayersArrayByKeyValue = function(key, value) {
            try {
                var targetLayers = [];
                if (this.map) {
                    var layers = this.map.getLayers().getArray();
                    targetLayers = this.getLayersArrayInternal(layers, key, value);
                }
                return targetLayers;
            } catch (e) {
                console.log(e);
            }
        };

        $LayerUtils.prototype.createVectorLayer = function(layerName, params) {
            try {
                if (this.map) {

                    var vectorLayer = this.getLayerByLayerName(layerName);

                    // 重置图层
                    // if (!(vectorLayer instanceof $VectorLayer)) {
                    //     console.log("0")
                    //     vectorLayer = null;
                    // }

                    if (!vectorLayer) {


                        if (params && params.create) {

                            vectorLayer = new $VectorLayer({
                                layerName: layerName,
                                params: params,
                                layerType: 'vector',
                                source: new $VectorSource({
                                    wrapX: false
                                }),

                                /* style: new $Style$1({
                                    fill: new $Fill$1({
                                        color: FILL,

                                    }),
                                    stroke: new $Stroke$1({
                                        color: STROKE,
                                        lineDash: LINEDASH,

                                        width: WIDTH
                                    }),

                                    image: new $Circle({
                                        radius: RADIUS,
                                        fill: new $Fill$1({
                                            color: FILL
                                        })
                                    })
                                }) */
                            });
                        }
                    }
                    //if (this.map && vectorLayer) {
                    if (this.map) {
                        if (params && params.hasOwnProperty('selectable')) {
                            vectorLayer.set('selectable', params.selectable);
                        }

                        var _vectorLayer = this.getLayerByLayerName(layerName);
                        if (!_vectorLayer || !(_vectorLayer instanceof $VectorLayer)) {
                            this.map.addLayer(vectorLayer);
                        }
                    }
                    //console.log(vectorLayer)
                    return vectorLayer;
                }
            } catch (e) {
                console.log(e);
            }
        };


        var PlotDraw = function(_mixin) {
            inherits(PlotDraw, _mixin);

            function PlotDraw(map, params) {
                classCallCheck(this, PlotDraw);

                var _this = possibleConstructorReturn(this, _mixin.call(this));

                if (map && map instanceof ol.Map) {
                    _this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }
                _this.options = params || {};

                _this.points = null;

                _this.plot = null;

                _this.feature = null;

                _this.plotType = null;

                _this.plotParams = null;

                _this.mapViewport = _this.map.getViewport();

                _this.dblClickZoomInteraction = null;

                _this.drawOverlay = null;

                _this.textInter = null;

                _this.layerName = _this.options && _this.options['layerName'] ? _this.options['layerName'] : BASE_LAYERNAME;


                _this.drawLayer = _this.createVectorLayer(_this.layerName, {
                    create: true
                });




                _this.drawLayer.setZIndex(_this.options['zIndex'] || 99);

                _this.textAreas = [];
                _this.addWindowEventListener();
                Observable.call(_this);
                $LayerUtils.call(_this, _this.map);
                return _this;
            }

            PlotDraw.prototype.active = function active(type) {
                var _this2 = this;

                var params = arguments.length > 1 && arguments[1] !== undefined ? arguments[1] : {};

                this.disActive();
                this.deactiveMapTools();
                this.plotType = type;
                this.plotParams = params;
                //alert("a")
                if (type === 'TextArea') {
                    if (this.textInter) {
                        this.textInter.disActiveInteraction();
                    }
                    this.textInter = new PlotText(this.map, params);
                    this.textInter.on('TextAreaDrawEnd', function(event) {
                        _this2.textAreas.push(event);
                        _this2.disActive();
                    });
                } else {
                    this.map.on('click', this.mapFirstClickHandler, this);
                }
            };

            PlotDraw.prototype.addWindowEventListener = function addWindowEventListener() {
                var _this3 = this;

                if (this.map) {
                    document.querySelector('.ol-overlaycontainer-stopevent').addEventListener('click', function(event) {
                        var ev = event || window.event;
                        var target = ev.target || ev.srcElement;
                        if (target.nodeName.toLowerCase() === 'textarea') {
                            if (_this3.textAreas && _this3.textAreas.length > 0) {
                                _this3.textAreas.every(function(item) {
                                    if (item['uuid'] === target.id) {
                                        _this3.dispatch('active_textArea', item);
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                            }
                        }
                    });
                    document.querySelector('.ol-overlaycontainer-stopevent').addEventListener('contextmenu', function(event) {
                        var ev = event || window.event;
                        var target = ev.target || ev.srcElement;
                        if (target.nodeName.toLowerCase() === 'textarea') {
                            if (_this3.textAreas && _this3.textAreas.length > 0) {
                                _this3.textAreas.every(function(item) {
                                    if (item['uuid'] === target.id) {
                                        _this3.dispatch('active_textArea', item);
                                        return false;
                                    } else {
                                        return true;
                                    }
                                });
                            }
                        }
                        preventDefault(ev);
                    });
                } else {
                    console.warn('地图对象不存在！');
                }
            };

            PlotDraw.prototype.disActive = function disActive() {
                this.removeEventHandlers();
                this.map.removeOverlay(this.drawOverlay);
                if (this.textInter) {
                    this.textInter.disActiveInteraction();
                }
                this.points = [];
                this.plot = null;
                this.feature = null;
                this.plotType = null;
                this.plotParams = null;
                this.activateMapTools();
            };

            PlotDraw.prototype.isDrawing = function isDrawing() {
                return !!this.plotType;
            };

            PlotDraw.prototype.mapFirstClickHandler = function mapFirstClickHandler(event) {
                this.map.un('click', this.mapFirstClickHandler, this);
                this.points.push(event.coordinate);
                this.plot = this.createPlot(this.plotType, this.points, this.plotParams);
                this.plot.setMap(this.map);
                this.feature = new ol.Feature(this.plot);
                this.feature.set('isPlot', true);
                var newFeature = this.feature

                //点击地图绘制时设置feature颜色
                newFeature.setStyle(new ol.style.Style({
                    fill: new ol.style.Fill({ //矢量图层填充颜色，以及透明度
                        color: FILL
                    }),
                    stroke: new ol.style.Stroke({ //边界样式
                        color: STROKE,
                        lineDash: LINEDASH,
                        width: WIDTH
                    }),
                    image: new ol.style.Circle({
                        radius: RADIUS,
                        fill: new ol.style.Fill({ //矢量图层填充颜色，以及透明度
                            color: FILL
                        }),
                        stroke: new ol.style.Stroke({ //边界样式
                            color: STROKE,
                            lineDash: LINEDASH,
                            width: WIDTH
                        }),

                    })
                }));


                //mark
                this.drawLayer.getSource().addFeature(this.feature);
                if (this.plotType === POINT || this.plotType === PENNANT) {
                    this.plot.finishDrawing();
                    this.drawEnd(event);
                } else {
                    this.map.on('click', this.mapNextClickHandler, this);
                    if (!this.plot.freehand) {
                        this.map.on('dblclick', this.mapDoubleClickHandler, this);
                    }
                    this.map.un('pointermove', this.mapMouseMoveHandler, this);
                    this.map.on('pointermove', this.mapMouseMoveHandler, this);
                }
                if (this.plotType && this.feature) {
                    this.plotParams['plotType'] = this.plotType;
                    this.feature.setProperties(this.plotParams);
                }
            };

            PlotDraw.prototype.mapNextClickHandler = function mapNextClickHandler(event) {
                if (!this.plot.freehand) {
                    if (MathDistance(event.coordinate, this.points[this.points.length - 1]) < 0.0001) {
                        return false;
                    }
                }
                this.points.push(event.coordinate);
                this.plot.setPoints(this.points);
                if (this.plot.fixPointCount === this.plot.getPointCount()) {
                    this.mapDoubleClickHandler(event);
                }
                if (this.plot && this.plot.freehand) {
                    this.mapDoubleClickHandler(event);
                }
            };

            PlotDraw.prototype.mapDoubleClickHandler = function mapDoubleClickHandler(event) {
                event.preventDefault();
                this.plot.finishDrawing();
                this.drawEnd(event);
            };

            PlotDraw.prototype.mapMouseMoveHandler = function mapMouseMoveHandler(event) {
                var coordinate = event.coordinate;
                if (MathDistance(coordinate, this.points[this.points.length - 1]) < 0.0001) {
                    return false;
                }
                if (!this.plot.freehand) {
                    var pnts = this.points.concat([coordinate]);
                    this.plot.setPoints(pnts);
                } else {
                    this.points.push(coordinate);
                    this.plot.setPoints(this.points);
                }
            };

            PlotDraw.prototype.removeEventHandlers = function removeEventHandlers() {
                this.map.un('click', this.mapFirstClickHandler, this);
                this.map.un('click', this.mapNextClickHandler, this);
                this.map.un('pointermove', this.mapMouseMoveHandler, this);
                this.map.un('dblclick', this.mapDoubleClickHandler, this);
            };

            PlotDraw.prototype.drawEnd = function drawEnd(event) {
                this.dispatchSync('drawEnd', {
                    type: 'drawEnd',
                    originalEvent: event,
                    feature: this.feature
                });
                if (this.feature && this.options['isClear']) {
                    this.drawLayer.getSource().removeFeature(this.feature);
                }
                this.activateMapTools();
                this.removeEventHandlers();
                this.map.removeOverlay(this.drawOverlay);
                this.points = [];
                this.plot = null;
                this.plotType = null;
                this.plotParams = null;
                this.feature = null;
            };

            PlotDraw.prototype.getTextAreas = function getTextAreas() {
                return this.textAreas;
            };

            PlotDraw.prototype.addFeature = function addFeature() {
                this.feature = new ol.Feature(this.plot);
                if (this.feature && this.drawLayer) {
                    this.drawLayer.getSource().addFeature(this.feature);
                }
            };

            PlotDraw.prototype.deactiveMapTools = function deactiveMapTools() {
                var _this4 = this;

                var interactions = this.map.getInteractions().getArray();
                interactions.every(function(item) {
                    if (item instanceof ol.interaction.DoubleClickZoom) {
                        _this4.dblClickZoomInteraction = item;
                        _this4.map.removeInteraction(item);
                        return false;
                    } else {
                        return true;
                    }
                });
            };

            PlotDraw.prototype.activateMapTools = function activateMapTools() {
                if (this.dblClickZoomInteraction && this.dblClickZoomInteraction instanceof ol.interaction.DoubleClickZoom) {
                    this.map.addInteraction(this.dblClickZoomInteraction);
                    this.dblClickZoomInteraction = null;
                }
            };

            return PlotDraw;
        }(mixin(PlotFactory, Observable, $LayerUtils));

        var PlotEdit = function(_Observable) {
            inherits(PlotEdit, _Observable);

            function PlotEdit(map) {
                classCallCheck(this, PlotEdit);

                var _this = possibleConstructorReturn(this, _Observable.call(this));

                if (map && map instanceof ol.Map) {
                    _this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }

                _this.mapViewport = _this.map.getViewport();

                _this.activePlot = null;

                _this.startPoint = null;

                _this.ghostControlPoints = null;

                _this.controlPoints = null;

                _this.mouseOver = false;

                _this.elementTable = {};

                _this.activeControlPointId = null;

                _this.mapDragPan = null;

                _this.previousCursor_ = null;
                Observable.call(_this);
                return _this;
            }

            PlotEdit.prototype.initHelperDom = function initHelperDom() {
                var _this2 = this;

                if (!this.map || !this.activePlot) {
                    return false;
                }
                var parent = this.getMapParentElement();
                if (!parent) {
                    return false;
                } else {
                    var hiddenDiv = createHidden('div', parent, BASE_HELP_HIDDEN);
                    var cPnts = this.getControlPoints();
                    if (cPnts && Array.isArray(cPnts) && cPnts.length > 0) {
                        cPnts.forEach(function(item, index) {
                            var id = BASE_HELP_CONTROL_POINT_ID + '-' + index;
                            create$1('div', BASE_HELP_CONTROL_POINT_ID, hiddenDiv, id);
                            _this2.elementTable[id] = index;
                        });
                    }
                }
            };

            PlotEdit.prototype.getMapParentElement = function getMapParentElement() {
                var mapElement = this.map.getTargetElement();
                if (!mapElement) {
                    return false;
                } else {
                    return mapElement.parentNode;
                }
            };

            PlotEdit.prototype.destroyHelperDom = function destroyHelperDom() {
                var _this3 = this;

                if (this.controlPoints && Array.isArray(this.controlPoints) && this.controlPoints.length > 0) {
                    this.controlPoints.forEach(function(item, index) {
                        if (item && item instanceof ol.Overlay) {
                            _this3.map.removeOverlay(item);
                        }
                        var element = getElement(BASE_HELP_CONTROL_POINT_ID + '-' + index);
                        if (element) {
                            off(element, 'mousedown', _this3.controlPointMouseDownHandler.bind(_this3));
                            off(element, 'mousemove', _this3.controlPointMouseMoveHandler2.bind(_this3));
                        }
                    });
                    this.controlPoints = [];
                }
                var parent = this.getMapParentElement();
                var hiddenDiv = getElement(BASE_HELP_HIDDEN);
                if (hiddenDiv && parent) {
                    remove(hiddenDiv, parent);
                }
            };

            PlotEdit.prototype.initControlPoints = function initControlPoints() {
                var _this4 = this;

                this.controlPoints = [];
                var cPnts = this.getControlPoints();
                if (cPnts && Array.isArray(cPnts) && cPnts.length > 0) {
                    cPnts.forEach(function(item, index) {
                        var id = BASE_HELP_CONTROL_POINT_ID + '-' + index;
                        _this4.elementTable[id] = index;
                        var element = getElement(id);
                        var pnt = new ol.Overlay({
                            id: id,
                            position: cPnts[index],
                            positioning: 'center-center',
                            element: element
                        });
                        _this4.controlPoints.push(pnt);
                        _this4.map.addOverlay(pnt);
                        _this4.map.render();
                        on(element, 'mousedown', _this4.controlPointMouseDownHandler.bind(_this4));
                        on(element, 'mousemove', _this4.controlPointMouseMoveHandler2.bind(_this4));
                    });
                }
            };

            PlotEdit.prototype.controlPointMouseMoveHandler2 = function controlPointMouseMoveHandler2(e) {
                e.stopImmediatePropagation();
            };

            PlotEdit.prototype.controlPointMouseDownHandler = function controlPointMouseDownHandler(e) {
                this.activeControlPointId = e.target.id;
                this.map.on('pointermove', this.controlPointMouseMoveHandler, this);
                on(this.mapViewport, 'mouseup', this.controlPointMouseUpHandler.bind(this));
            };

            PlotEdit.prototype.controlPointMouseMoveHandler = function controlPointMouseMoveHandler(event) {
                var coordinate = event.coordinate;
                if (this.activeControlPointId) {
                    var plot = this.activePlot.getGeometry();
                    var index = this.elementTable[this.activeControlPointId];
                    plot.updatePoint(coordinate, index);
                    var overlay = this.map.getOverlayById(this.activeControlPointId);
                    if (overlay) {
                        overlay.setPosition(coordinate);
                    }
                }
            };

            PlotEdit.prototype.controlPointMouseUpHandler = function controlPointMouseUpHandler(event) {
                this.map.un('pointermove', this.controlPointMouseMoveHandler, this);
                off(this.mapViewport, 'mouseup', this.controlPointMouseUpHandler.bind(this));
            };

            PlotEdit.prototype.activate = function activate(plot) {
                var _this5 = this;

                if (plot && plot instanceof ol.Feature && plot.get('isPlot') && plot.getGeometry().isPlot && plot !== this.activePlot) {
                    this.deactivate();
                    this.activePlot = plot;
                    this.previousCursor_ = this.map.getTargetElement().style.cursor;
                    window.setTimeout(function() {
                        _this5.dispatch('active_plot_change', _this5.activePlot);
                    }, 500);
                    this.map.on('pointermove', this.plotMouseOverOutHandler, this);
                    this.initHelperDom();
                    this.initControlPoints();
                }
            };

            PlotEdit.prototype.getControlPoints = function getControlPoints() {
                var points = [];
                if (this.activePlot) {
                    var geom = this.activePlot.getGeometry();
                    if (geom) {
                        points = geom.getPoints();
                    }
                }
                return points;
            };

            PlotEdit.prototype.plotMouseOverOutHandler = function plotMouseOverOutHandler(e) {
                var feature = this.map.forEachFeatureAtPixel(e.pixel, function(feature) {
                    return feature;
                });
                if (feature && feature === this.activePlot) {
                    if (!this.mouseOver) {
                        this.mouseOver = true;
                        this.map.getTargetElement().style.cursor = 'move';
                        this.map.on('pointerdown', this.plotMouseDownHandler, this);
                    }
                } else {
                    if (this.mouseOver) {
                        this.mouseOver = false;
                        this.map.getTargetElement().style.cursor = 'default';
                        this.map.un('pointerdown', this.plotMouseDownHandler, this);
                    }
                }
                return feature;
            };

            PlotEdit.prototype.plotMouseDownHandler = function plotMouseDownHandler(event) {
                this.ghostControlPoints = this.getControlPoints();
                this.startPoint = event.coordinate;
                this.disableMapDragPan();
                this.map.on('pointerup', this.plotMouseUpHandler, this);
                this.map.on('pointerdrag', this.plotMouseMoveHandler, this);
            };

            PlotEdit.prototype.plotMouseMoveHandler = function plotMouseMoveHandler(event) {
                var deltaX = event.coordinate[0] - this.startPoint[0],
                    deltaY = event.coordinate[1] - this.startPoint[1],
                    newPoints = [];

                if (this.ghostControlPoints && Array.isArray(this.ghostControlPoints) && this.ghostControlPoints.length > 0) {
                    for (var i = 0; i < this.ghostControlPoints.length; i++) {
                        var coordinate = [this.ghostControlPoints[i][0] + deltaX, this.ghostControlPoints[i][1] + deltaY];
                        newPoints.push(coordinate);
                        var id = BASE_HELP_CONTROL_POINT_ID + '-' + i;
                        var overlay = this.map.getOverlayById(id);
                        if (overlay) {
                            overlay.setPosition(coordinate);
                            overlay.setPositioning('center-center');
                        }
                    }
                }
                var _geometry = this.activePlot.getGeometry();
                _geometry.setPoints(newPoints);
            };

            PlotEdit.prototype.plotMouseUpHandler = function plotMouseUpHandler(event) {
                this.enableMapDragPan();
                this.map.un('pointerup', this.plotMouseUpHandler, this);
                this.map.un('pointerdrag', this.plotMouseMoveHandler, this);
            };

            PlotEdit.prototype.disconnectEventHandlers = function disconnectEventHandlers() {
                this.map.un('pointermove', this.plotMouseOverOutHandler, this);
                this.map.un('pointermove', this.controlPointMouseMoveHandler, this);
                off(this.mapViewport, 'mouseup', this.controlPointMouseUpHandler.bind(this));
                this.map.un('pointerdown', this.plotMouseDownHandler, this);
                this.map.un('pointerup', this.plotMouseUpHandler, this);
                this.map.un('pointerdrag', this.plotMouseMoveHandler, this);
            };

            PlotEdit.prototype.deactivate = function deactivate() {
                this.activePlot = null;
                this.mouseOver = false;
                this.map.getTargetElement().style.cursor = this.previousCursor_;
                this.previousCursor_ = null;
                this.destroyHelperDom();
                this.disconnectEventHandlers();
                this.enableMapDragPan();
                this.elementTable = {};
                this.activeControlPointId = null;
                this.startPoint = null;
            };

            PlotEdit.prototype.disableMapDragPan = function disableMapDragPan() {
                var _this6 = this;

                var interactions = this.map.getInteractions().getArray();
                interactions.every(function(item) {
                    if (item instanceof ol.interaction.DragPan) {
                        _this6.mapDragPan = item;
                        _this6.map.removeInteraction(item);
                        return false;
                    } else {
                        return true;
                    }
                });
            };

            PlotEdit.prototype.enableMapDragPan = function enableMapDragPan() {
                if (this.mapDragPan && this.mapDragPan instanceof ol.interaction.DragPan) {
                    this.map.addInteraction(this.mapDragPan);
                    this.mapDragPan = null;
                }
            };

            return PlotEdit;
        }(Observable);

        var StyleFactory = function StyleFactory(options) {
            var option = options && (typeof options === 'undefined' ? 'undefined' : _typeof(options)) === 'object' ? options : {};
            var style = new ol.style.Style({});
            if (option['geometry'] && option['geometry'] instanceof ol.geom.Geometry) {
                style.setGeometry(option['geometry']);
            }
            if (option['zIndex'] && typeof option['zIndex'] === 'number') {
                style.setZIndex(option['zIndex']);
            }
            if (option['fill'] && _typeof(option['fill']) === 'object') {
                style.setFill(this._getFill(option['fill']));
            }
            if (option['image'] && _typeof(option['image']) === 'object') {
                style.setImage(this._getImage(option['image']));
            }
            if (option['stroke'] && _typeof(option['stroke']) === 'object') {
                style.setStroke(this._getStroke(option['stroke']));
            }
            if (option['text'] && _typeof(option['text']) === 'object') {
                style.setText(this._getText(option['text']));
            }
            return style;
        };

        StyleFactory.prototype._getRegularShape = function(options) {
            try {
                var regularShape = new ol.style.RegularShape({
                    fill: this._getFill(options['fill']) || undefined,
                    points: typeof options['points'] === 'number' ? options['points'] : 1,
                    radius: typeof options['radius'] === 'number' ? options['radius'] : undefined,
                    radius1: typeof options['radius1'] === 'number' ? options['radius1'] : undefined,
                    radius2: typeof options['radius2'] === 'number' ? options['radius2'] : undefined,
                    angle: typeof options['angle'] === 'number' ? options['angle'] : 0,
                    snapToPixel: typeof options['snapToPixel'] === 'boolean' ? options['snapToPixel'] : true,
                    stroke: this._getStroke(options['stroke']) || undefined,
                    rotation: typeof options['rotation'] === 'number' ? options['rotation'] : 0,
                    rotateWithView: typeof options['rotateWithView'] === 'boolean' ? options['rotateWithView'] : false,
                    atlasManager: options['atlasManager'] ? options['atlasManager'] : undefined
                });
                return regularShape;
            } catch (e) {
                console.log(e);
            }
        };

        StyleFactory.prototype._getImage = function(options) {
            try {
                var image = void 0;
                options = options || {};
                if (options['type'] === 'icon') {
                    image = this._getIcon(options['image']);
                } else {
                    image = this._getRegularShape(options['image']);
                }
                return image;
            } catch (e) {
                console.log(e);
            }
        };

        StyleFactory.prototype._getIcon = function(options) {
            try {
                options = options || {};
                var icon = new ol.style.Icon({
                    anchor: options['imageAnchor'] ? options['imageAnchor'] : [0.5, 0.5],
                    anchorXUnits: options['imageAnchorXUnits'] ? options['imageAnchorXUnits'] : 'fraction',
                    anchorYUnits: options['imageAnchorYUnits'] ? options['imageAnchorYUnits'] : 'fraction',
                    anchorOrigin: options['imageAnchorOrigin'] ? options['imageAnchorYUnits'] : 'top-left',
                    color: options['imageColor'] ? options['imageColor'] : undefined,
                    crossOrigin: options['crossOrigin'] ? options['crossOrigin'] : undefined,
                    img: options['img'] ? options['img'] : undefined,
                    offset: options['offset'] && Array.isArray(options['offset']) && options['offset'].length === 2 ? options['offset'] : [0, 0],
                    offsetOrigin: options['offsetOrigin'] ? options['offsetOrigin'] : 'top-left',
                    scale: typeof options['scale'] === 'number' ? options['scale'] : 1,
                    snapToPixel: typeof options['snapToPixel'] === 'boolean' ? options['snapToPixel'] : true,
                    rotateWithView: typeof options['rotateWithView'] === 'boolean' ? options['rotateWithView'] : false,
                    opacity: typeof options['imageOpacity'] === 'number' ? options['imageOpacity'] : 1,
                    rotation: typeof options['imageRotation'] === 'number' ? options['imageRotation'] : 0,
                    size: options['size'] && Array.isArray(options['size']) && options['size'].length === 2 ? options['size'] : undefined,
                    imgSize: options['imgSize'] && Array.isArray(options['imgSize']) && options['imgSize'].length === 2 ? options['imgSize'] : undefined,
                    src: options['imageSrc'] ? options['imageSrc'] : undefined
                });
                return icon;
            } catch (error) {
                console.log(error);
            }
        };

        StyleFactory.prototype._getStroke = function(options) {
            try {
                options = options || {};
                var stroke = new ol.style.Stroke({
                    color: options['strokeColor'] ? options['strokeColor'] : undefined,
                    lineCap: options['strokeLineCap'] && typeof options['strokeLineCap'] === 'string' ? options['strokeLineCap'] : 'round',
                    lineJoin: options['strokeLineJoin'] && typeof options['strokeLineJoin'] === 'string' ? options['strokeLineJoin'] : 'round',
                    lineDash: options['strokeLineDash'] ? options['strokeLineDash'] : undefined,
                    lineDashOffset: typeof options['strokeLineDashOffset'] === 'number' ? options['strokeLineDashOffset'] : '0',
                    miterLimit: typeof options['strokeMiterLimit'] === 'number' ? options['strokeMiterLimit'] : 10,
                    width: typeof options['strokeWidth'] === 'number' ? options['strokeWidth'] : undefined
                });
                return stroke;
            } catch (error) {
                console.log(error);
            }
        };

        StyleFactory.prototype._getText = function(options) {
            try {
                var text = new ol.style.Text({
                    font: options['textFont'] && typeof options['textFont'] === 'string' ? options['textFont'] : '10px sans-serif',
                    offsetX: typeof options['textOffsetX'] === 'number' ? options['textOffsetX'] : 0,
                    offsetY: typeof options['textOffsetY'] === 'number' ? options['textOffsetY'] : 0,
                    scale: typeof options['textScale'] === 'number' ? options['textScale'] : undefined,
                    rotation: typeof options['textRotation'] === 'number' ? options['textRotation'] : 0,
                    text: options['text'] && typeof options['text'] === 'string' ? options['text'] : undefined,
                    textAlign: options['textAlign'] && typeof options['textAlign'] === 'string' ? options['textAlign'] : 'start',
                    textBaseline: options['textBaseline'] && typeof options['textBaseline'] === 'string' ? options['textBaseline'] : 'alphabetic',
                    rotateWithView: typeof options['rotateWithView'] === 'boolean' ? options['rotateWithView'] : false,
                    fill: this._getFill(options['textFill']),
                    stroke: this._getStroke(options['textStroke'])
                });
                return text;
            } catch (error) {
                console.log(error);
            }
        };

        StyleFactory.prototype._getFill = function(options) {
            try {
                options = options || {};
                var fill = new ol.style.Fill({
                    color: options['fillColor'] ? options['fillColor'] : undefined
                });
                return fill;
            } catch (error) {
                console.log(error);
            }
        };

        var PlotUtils = function(_mixin) {
            inherits(PlotUtils, _mixin);

            function PlotUtils(map, options) {
                classCallCheck(this, PlotUtils);

                var _this = possibleConstructorReturn(this, _mixin.call(this));

                if (map && map instanceof ol.Map) {
                    _this.map = map;
                } else {
                    throw new Error('传入的不是地图对象！');
                }

                _this.options = options;
                _this.layerName = _this.options && _this.options['layerName'] ? _this.options['layerName'] : BASE_LAYERNAME;
                return _this;
            }

            PlotUtils.prototype.getBaseStyle = function getBaseStyle(feature) {
                var style = feature.getStyle();
                if (!style) {
                    var layer = this.getLayerByLayerName(this.layerName);
                    if (layer && layer instanceof ol.layer.Vector) {
                        style = layer.getStyle();
                    } else {
                        return false;
                    }
                }
                return style;
            };

            PlotUtils.prototype.setIcon = function setIcon(feature, image) {
                try {
                    if (feature && feature instanceof ol.Feature) {
                        var style = this.getBaseStyle(feature);
                        var tempStyle = style.clone();
                        var _image = this._getImage(image);
                        if (_image) {
                            tempStyle.setImage(_image);
                            feature.setStyle(tempStyle);
                        }
                    }
                } catch (e) {
                    console.warn(e);
                }
            };

            PlotUtils.prototype.setBackgroundColor = function setBackgroundColor(feature, backgroundColor) {
                try {
                    if (feature && feature instanceof ol.Feature) {
                        var style = this.getBaseStyle(feature);
                        var tempStyle = style.clone();
                        var fill = tempStyle.getFill();
                        var color = fill.getColor();
                        if (color) {
                            var tempColor = ol.color.asArray(color);
                            var _color = ol.color.asArray(backgroundColor);
                            var currentColor = this.handleBackgroundColor(_color, tempColor[3]);
                            fill.setColor(currentColor);
                            feature.setStyle(tempStyle);
                        }
                    }
                } catch (e) {
                    console.warn(e);
                }
            };

            PlotUtils.prototype.setOpacity = function setOpacity(feature, opacity) {
                try {
                    if (feature && feature instanceof ol.Feature) {
                        var style = this.getBaseStyle(feature);
                        if (style) {
                            var tempStyle = style.clone();
                            var fill = tempStyle.getFill();
                            var color = fill.getColor();
                            if (color) {
                                var tempColor = ol.color.asArray(color);
                                tempColor[3] = opacity;
                                var currentColor = 'rgba(' + tempColor.join(',') + ')';
                                fill.setColor(currentColor);
                                feature.setStyle(tempStyle);
                            }
                        }
                    }
                } catch (e) {
                    console.warn(e);
                }
            };

            PlotUtils.prototype.setBorderColor = function setBorderColor(feature, borderColor) {
                try {
                    if (feature && feature instanceof ol.Feature) {
                        var style = this.getBaseStyle(feature);
                        var tempStyle = style.clone();
                        var stroke = tempStyle.getStroke();
                        stroke.setColor(borderColor);
                        feature.setStyle(tempStyle);
                    }
                } catch (e) {
                    console.warn(e);
                }
            };

            PlotUtils.prototype.setBorderWidth = function setBorderWidth(feature, borderWidth) {
                try {
                    if (feature && feature instanceof ol.Feature) {
                        var style = this.getBaseStyle(feature);
                        var tempStyle = style.clone();
                        var stroke = tempStyle.getStroke();
                        stroke.setWidth(borderWidth);
                        feature.setStyle(tempStyle);
                    }
                } catch (e) {
                    console.warn(e);
                }
            };

            PlotUtils.prototype.handleBackgroundColor = function handleBackgroundColor(color, opacity) {
                try {
                    if (!opacity) opacity = 1;
                    var tempColor = ol.color.asArray(color);
                    tempColor[3] = opacity;
                    return 'rgba(' + tempColor.join(',') + ')';
                } catch (e) {
                    console.warn(e);
                }
            };

            PlotUtils.prototype.getColor = function getColor(color) {
                try {
                    var colorTarget = ol.color.asArray(color);
                    return ol.color.asString(colorTarget);
                } catch (e) {
                    console.warn(e);
                }
            };

            PlotUtils.prototype.fixObject = function fixObject(obj) {
                if (obj && (typeof obj === 'undefined' ? 'undefined' : _typeof(obj)) === 'object') {
                    for (var key in obj) {
                        if (key && typeof obj[key] === 'undefined') {
                            delete obj[key];
                        }
                    }
                }
                return obj;
            };

            PlotUtils.prototype.getStroke_ = function getStroke_(style) {
                var stroke = null;
                if (style) {
                    var olStyle_ = style.getStroke();
                    if (olStyle_) {
                        stroke = {};
                        stroke['strokeColor'] = this.getColor(olStyle_.getColor());
                        stroke['strokeWidth'] = olStyle_.getWidth();
                        stroke['strokeLineDash'] = olStyle_.getLineDash();
                        stroke['lineDashOffset'] = olStyle_.getLineDashOffset();
                        stroke['strokeLineCap'] = olStyle_.getLineCap();
                        stroke['strokeLineJoin'] = olStyle_.getLineJoin();
                        stroke['strokeMiterLimit'] = olStyle_.getMiterLimit();
                    }
                }
                return this.fixObject(stroke);
            };

            PlotUtils.prototype.getFill_ = function getFill_(style) {
                var fill = null;
                if (style) {
                    var olStyle_ = style.getFill();
                    if (olStyle_) {
                        fill = {};
                        var color = olStyle_.getColor();
                        fill['fillColor'] = this.getColor(color);
                    }
                }
                return this.fixObject(fill);
            };

            PlotUtils.prototype.getText_ = function getText_(style) {
                var text = null;
                if (style) {
                    var olStyle_ = style.getText();
                    if (olStyle_) {
                        text = {};
                        text['textFont'] = olStyle_.getFont();
                        text['textOffsetX'] = olStyle_.getOffsetX();
                        text['textOffsetY'] = olStyle_.getOffsetY();
                        text['textScale'] = olStyle_.getScale();
                        text['textRotation'] = olStyle_.getRotation();
                        text['text'] = olStyle_.getText();
                        text['textAlign'] = olStyle_.getTextAlign();
                        text['textBaseline'] = olStyle_.getTextBaseline();
                        text['rotateWithView'] = olStyle_.getRotateWithView();
                        text['textFill'] = this.getFill_(olStyle_);
                        text['textStroke'] = this.getStroke_(olStyle_);
                    }
                }
                return this.fixObject(text);
            };

            PlotUtils.prototype.getImage_ = function getImage_(style) {
                var image = null;
                if (style) {
                    var olStyle_ = style.getImage();
                    if (olStyle_) {
                        image = {};
                        if (olStyle_ instanceof ol.style.Icon) {
                            image['type'] = 'icon';
                            image['image'] = {};
                            image['image']['imageAnchor'] = olStyle_.getAnchor();
                            image['image']['imageColor'] = olStyle_.getColor();
                            image['image']['imageSrc'] = olStyle_.getSrc();
                            image['image']['imgSize'] = olStyle_.getSize();
                            image['image']['scale'] = olStyle_.getScale();
                            image['image']['imageRotation'] = olStyle_.getRotation();
                            image['image']['rotateWithView'] = olStyle_.getRotateWithView();
                            image['image']['imageOpacity'] = olStyle_.getOpacity();
                            image['image']['snapToPixel'] = olStyle_.getSnapToPixel();
                            image['image']['offset'] = olStyle_.getOrigin();
                        } else if (olStyle_ instanceof ol.style.RegularShape) {
                            image['type'] = '';
                            image['image'] = {};
                            image['image']['fill'] = this.getFill_(olStyle_);
                            image['image']['points'] = olStyle_.getPoints();
                            image['image']['radius'] = olStyle_.getRadius();
                            image['image']['radius2'] = olStyle_.getRadius2();
                            image['image']['angle'] = olStyle_.getAngle();
                            image['image']['stroke'] = this.getStroke_(olStyle_);
                            image['image']['rotateWithView'] = olStyle_.getRotateWithView();
                            image['image']['snapToPixel'] = olStyle_.getSnapToPixel();
                        }
                    }
                }
                return this.fixObject(image);
            };

            PlotUtils.prototype.getStyleCode = function getStyleCode(feature) {
                try {
                    if (feature && feature instanceof ol.Feature) {
                        var style = this.getBaseStyle(feature);
                        if (style && style instanceof ol.style.Style) {
                            var fill = this.getFill_(style);
                            var _ref = [1, null],
                                opacity = _ref[0],
                                rgbaArray = _ref[1],
                                backgroundColor = _ref[2];

                            if (fill && fill['fillColor']) {
                                rgbaArray = ol.color.asArray(fill['fillColor']);
                                opacity = parseFloat(rgbaArray[3]);
                                if (rgbaArray && typeof opacity === 'number') {
                                    backgroundColor = this.handleBackgroundColor(ol.color.asString(rgbaArray), opacity);
                                }
                            }

                            var stroke = this.getStroke_(style);

                            var text = this.getText_(style);

                            var icon = this.getImage_(style);
                            return {
                                fill: {
                                    fillColor: backgroundColor,
                                    //opacity: opacity
                                    opacity: opacity
                                },
                                stroke: stroke,
                                image: icon,
                                text: text
                            };
                        }
                    }
                } catch (e) {
                    console.warn(e);
                }
            };

            PlotUtils.prototype.getPlotTextStyleCode = function getPlotTextStyleCode(overlay) {
                var ele = overlay.getElement();
                var _style = {};
                if (ele) {
                    for (var key in DEF_TEXT_STYEL) {
                        _style[key] = getStyle(ele, key);
                    }
                }
                return _style;
            };

            PlotUtils.prototype.getPlotTextValue = function getPlotTextValue(overlay) {
                var ele = overlay.getElement();
                if (ele) {
                    return ele.value;
                }
                return '';
            };

            PlotUtils.prototype.setPlotTextStyle = function setPlotTextStyle(overlay, style) {
                if (overlay) {
                    var ele = overlay.getElement();
                    for (var key in style) {
                        if (DEF_TEXT_STYEL.hasOwnProperty(key) && style[key]) {
                            setStyle(ele, key, style[key]);
                        }
                    }
                }
                return overlay;
            };

            PlotUtils.prototype.setPlotTextValue = function setPlotTextValue(overlay, value) {
                var ele = overlay.getElement();
                if (ele) {
                    ele.value = value;
                    overlay.setElement(ele);
                }
                return overlay;
            };

            PlotUtils.prototype.removeAllFeatures = function removeAllFeatures() {
                var layer = this.getLayerByLayerName(this.layerName);
                var overlays_ = this.map.getOverlays().getArray();
                if (layer) {
                    var source = layer.getSource();
                    source.clear();
                }
                if (overlays_ && overlays_.length > 0) {
                    var len = overlays_.length;
                    for (var i = 0; i < len; i++) {
                        if (overlays_[i] && overlays_[i].get('isPlotText')) {
                            this.map.removeOverlay(overlays_[i]);
                            i--;
                        }
                    }
                }
            };

            PlotUtils.prototype.getFeatures = function getFeatures() {
                var _this2 = this;

                var rFeatures = [];
                var layer = this.getLayerByLayerName(this.layerName);
                if (layer) {
                    var source = layer.getSource();
                    if (source && source instanceof ol.source.Vector) {
                        var features = source.getFeatures();
                        if (features && features.length > 0) {
                            features.forEach(function(feature, index) {
                                if (feature && feature.getGeometry) {
                                    var geom = feature.getGeometry();
                                    if (geom && geom.getCoordinates) {
                                        var type = geom.getType();
                                        var coordinates = geom.getCoordinates();
                                        rFeatures.push({
                                            'type': 'Feature',
                                            'geometry': {
                                                'type': type,
                                                'coordinates': coordinates
                                            },
                                            'properties': {
                                                'type': feature.getGeometry().getPlotType(),
                                                'style': _this2.getStyleCode(feature),
                                                'points': feature.getGeometry().getPoints()
                                            }
                                        });
                                    }
                                }
                            });
                        }
                    }
                }
                var overlays_ = this.map.getOverlays().getArray();
                overlays_.forEach(function(overlay) {
                    if (overlay.get('isPlotText')) {
                        rFeatures.push({
                            'type': 'Feature',
                            'geometry': {
                                'type': 'PlotText',
                                'coordinates': overlay.getPosition()
                            },
                            'properties': {
                                'id': overlay.getId(),
                                'style': _this2.getPlotTextStyleCode(overlay),
                                'value': _this2.getPlotTextValue(overlay)
                            }
                        });
                    }
                });
                // console.log(rFeatures)
                return rFeatures;
            };

            PlotUtils.prototype.addFeatures = function addFeatures(features) {
                var _this3 = this;

                if (features && Array.isArray(features) && features.length > 0) {
                    var layer = this.getLayerByLayerName(this.layerName);
                    if (!layer) {

                        layer = this.createVectorLayer(this.layerName, {
                            create: true
                        });


                        layer.setZIndex(this.options['zIndex'] || 99);
                    }
                    if (layer) {
                        var source = layer.getSource();
                        if (source && source instanceof ol.source.Vector) {
                            var _extents = [];
                            features.forEach(function(feature) {
                                if (feature && feature['geometry'] && feature['geometry']['type'] !== 'PlotText') {
                                    if (feature['properties']['type'] && Geometry[feature['properties']['type']]) {
                                        var feat = new ol.Feature({
                                            geometry: new Geometry[feature['properties']['type']]([], feature['properties']['points'], feature['properties'])
                                        });
                                        feat.set('isPlot', true);
                                        _extents.push(feat.getGeometry().getExtent());
                                        if (feature['properties']['style']) {
                                            var style_ = new StyleFactory(feature['properties']['style']);
                                            if (style_) {
                                                feat.setStyle(style_);
                                            }
                                        }
                                        source.addFeature(feat);
                                    } else {
                                        console.warn('不存在的标绘类型！');
                                    }
                                } else if (feature && feature['geometry'] && feature['geometry']['type'] === 'PlotText') {
                                    _this3.createPlotText(feature);
                                }
                            });

                            /* if (this.options[zoomToExtent] && _extents && _extents.length > 0) {
                                alert("A")
                                var _extent = this._getExtent(_extents);
                                var size = this.map.getSize();
                                this.map.getView().fit(_extent, {。
                                    size: size,
                                    duration: 800
                                });
                            } */
                        }
                    }
                }
            };

            PlotUtils.prototype.createPlotText = function createPlotText(feature) {
                var _className = this.options.className || 'ol-plot-text-editor';
                var content = document.createElement('textarea');
                content.className = _className;
                content.style.width = feature.properties.style['width'];
                content.style.minHeight = feature.properties.style['height'];
                content.setAttribute('id', feature.properties.id);
                content.value = feature.properties.value;
                for (var key in feature.properties.style) {
                    if (DEF_TEXT_STYEL.hasOwnProperty(key) && feature.properties.style[key]) {
                        setStyle(content, key, feature.properties.style[key]);
                    }
                }
                autosize(content);
                var textOverlay = new ol.Overlay({
                    isPlotText: true,
                    id: feature.properties.id,
                    element: content,
                    position: feature.geometry['coordinates'],
                    positioning: 'center-center',
                    stopEvent: true,
                    insertFirst: false
                });
                textOverlay.set('isPlotText', true);
                this.map.addOverlay(textOverlay);
                this.map.render();
            };

            PlotUtils.prototype._getExtent = function _getExtent(extents) {
                var bbox = [Number.POSITIVE_INFINITY, Number.POSITIVE_INFINITY, Number.NEGATIVE_INFINITY, Number.NEGATIVE_INFINITY];
                return extents.reduce(function(prev, coord) {
                    return [Math.min(coord[0], prev[0]), Math.min(coord[1], prev[1]), Math.max(coord[2], prev[2]), Math.max(coord[3], prev[3])];
                }, bbox);
            };

            return PlotUtils;
        }(mixin($LayerUtils, StyleFactory));

        var olPlot = function olPlot(map, options) {
            classCallCheck(this, olPlot);

            this.plotDraw = new PlotDraw(map, options);
            this.plotEdit = new PlotEdit(map, options);
            this.plotUtils = new PlotUtils(map, options);
        };

        olPlot.PlotTypes = PlotTypes;
        olPlot.Geometry = Geometry;

        return olPlot;

    })));

    //function WMapMarkPlot(map, MARKTYPE, fillcolor, strokecolor) {


    function set(map, options) {




        var plot = new olPlot(map)

        map.on('click', function(event) {
            //console.log(event);
            var feature = map.forEachFeatureAtPixel(event.pixel, function(feature) {
                return feature;
            });

            if (feature && feature.get('isPlot') && !plot.plotDraw.isDrawing()) {
                plot.plotEdit.activate(feature);
            } else {
                plot.plotEdit.deactivate();
            }
        });


        // 绘制结束，添加显示
        function onDrawEnd(event) {
            var feature = event.feature;
            // 编辑
            plot.plotEdit.activate(feature);

            return { feature }
        }



        plot.plotDraw.on('drawEnd', onDrawEnd)

        // 标绘类型，开始绘制。
        function activate(type) {

            plot.plotEdit.deactivate();
            plot.plotDraw.active(type);

        }

        // console.log(options.markType);

        //activate(options.markType);
        //绘制图像入口
        function draw(type) {
            //deactivate()
            activate(type);
        }

        draw(options.markType)

        //获取图像属性
        function getFeatures() {
            Features = plot.plotUtils.getFeatures()

            //console.log(Features)
            return Features
        }


        //添加图像
        function addFeatures(Array) {
            plot.plotUtils.addFeatures(Array)
        }
        //移除绘制图像
        function removeAllFeatures() {
            plot.plotEdit.deactivate()
            plot.plotUtils.removeAllFeatures()
        }



        return {
            olPlot,
            FILL,
            getFeatures: getFeatures,
            addFeatures: addFeatures,
            removeAllFeatures: removeAllFeatures,

        }

    }


    var draw = set(map, options)

    function getFeatures() {
        return draw.getFeatures()
    }

    function addFeatures(Array) {
        draw.addFeatures(Array)
    }

    function removeAllFeatures() {
        draw.removeAllFeatures()
    }

    function printProperty() {
        var s = draw.getFeatures()
        window.q = []

        //console.log(x.getFeatures())
        for (i = 0; i < 100; i++) {
            if (typeof s[i] != "undefined") {
                // q[i] = ["points:" + s[i].properties.points, s[i].properties.type]
                q[i] = [{
                        spatialType: s[i].geometry.type,
                        points: s[i].properties.points,
                        type: s[i].properties.type,
                        fillColor: s[i].properties.style.fill.fillColor,
                        strokeColor: s[i].properties.style.stroke.strokeColor,
                        strokeWidth: s[i].properties.style.stroke.strokeWidth,
                        strokeLineDash: s[i].properties.style.stroke.strokeLineDash,
                    }]
                    // console.log(s[i].properties.points)
            }
        }

        console.log(q)
    }

    function addFeaturesByProperty(option) {

        if (typeof option.pointRadius == "undefined") {
            option.pointRadius = 7
        }
        //填充颜色
        if (typeof option.fillColor == "undefined") {
            option.fillColor = "rgb(67, 110, 239)";
        }

        if (typeof option.fillOpacity == "undefined") {

            option.fillOpacity = 0.4
        }
        //线条颜色
        if (typeof option.strokeColor == "undefined") {
            option.strokeColor = "rgb(67, 110, 239)"
        }

        if (typeof option.strokeOpacity == "undefined") {
            option.strokeOpacity = 0.6
        }
        //宽度虚线
        if (typeof option.lineWidth == "undefined") {
            option.lineWidth = 2
        }

        if (typeof option.lineDash == "undefined" || option.lineDash == false) {
            option.lineDash = [0, 0, 0]
        }

        if (option.lineDash == true) {
            option.lineDash = [10, 10, 10]
        }



        //填充颜色
        var fill = ol.color.asArray(option.fillColor)
        fill = fill.slice();
        console.log(fill[3])
        fill[3] = option.fillOpacity


        var FILL1 = fill
            // console.log("填充颜色" + FILL)

        //线条颜色
        var stroke = ol.color.asArray(option.strokeColor)
        stroke = stroke.slice();
        stroke[3] = option.strokeOpacity;

        var STROKE1 = stroke;

        // console.log("线条颜色" + stroke);

        //宽度，虚线



        ////////////////////




        // spatialType, type, points, fillColor, strokeColor, strokeWidth, strokeLineDash
        if (option.spatialType == "Point") {
            var property = [{
                // type: "Feature",
                geometry: {
                    type: "Point",
                    coordinates: option.points,
                },
                properties: {
                    type: "Point",
                    points: option.points,
                    style: {
                        fill: {
                            fillColor: FILL1,
                        },
                        // text: null,
                        image: {
                            image: {
                                angle: 0,
                                fill: {
                                    fillColor: FILL1,
                                },
                                points: Infinity,
                                radius: option.pointRadius,

                                rotateWithView: false,
                                snapToPixel: true,

                            },
                        },
                        stroke: {
                            strokeColor: STROKE1,
                            strokeLineDash: option.lineDash,
                            strokeWidth: option.lineWidth,
                        }

                    }

                }
            }]
            draw.addFeatures(property)
        }

        if (option.spatialType == "Polygon") {
            var property = [{
                // type: "Feature",
                geometry: {
                    type: "Polygon",
                    coordinates: option.points,
                },
                properties: {
                    type: option.type,
                    points: option.points,
                    style: {
                        fill: {
                            fillColor: FILL1,
                        },

                        stroke: {
                            strokeColor: STROKE1,
                            strokeLineDash: option.lineDash,
                            strokeWidth: option.lineWidth,
                        }

                    }

                }
            }]
            draw.addFeatures(property)
        }

        if (option.spatialType == "LineString") {
            var property = [{
                // type: "Feature",
                geometry: {
                    type: "LineString",
                    coordinates: option.points,
                },
                properties: {
                    type: option.type,
                    points: option.points,
                    style: {
                        fill: {
                            fillColor: FILL1,
                        },

                        stroke: {
                            strokeColor: STROKE1,
                            strokeLineDash: option.lineDash,
                            strokeWidth: option.lineWidth,
                        }

                    }

                }
            }]
            draw.addFeatures(property)
        }
    }





    return WMapMarkPlot, {
        addFeaturesByProperty: addFeaturesByProperty,
        printProperty: printProperty,
        addFeatures: addFeatures,
        removeAllFeatures: removeAllFeatures,
        getFeatures: getFeatures
    }
}

/* 
        Point: Point,
        Polyline: Polyline,
        Arc: Arc,
        Circle: Circle,
        Curve: Curve,
        FreeLine: FreeLine,
        TextArea：TextArea,
        RectAngle: RectAngle,
        Ellipse: Ellipse,
        Lune: Lune,
        Sector: Sector,
        ClosedCurve: ClosedCurve,
        Polygon: Polygon,
        FreePolygon: FreePolygon,
        AttackArrow: AttackArrow,
        DoubleArrow: DoubleArrow,
        StraightArrow: StraightArrow,
        FineArrow: FineArrow,
        AssaultDirection: AssaultDirection,
        TailedAttackArrow: TailedAttackArrow,
        SquadCombat: SquadCombat,
        TailedSquadCombat: TailedSquadCombat,
        GatheringPlace: GatheringPlace,
        RectFlag: RectFlag,
        TriangleFlag: TriangleFlag,
        CurveFlag: CurveFlag

 */

/* 
   var tt = [{
            // type: "Feature",
            geometry: {
                type: "Point",
                coordinates: [118.13323, 24.49607],
            },
            properties: {
                type: "Point",
                points: [
                    [118.13323, 24.49607],
                ],
                style: {
                    fill: {
                        fillColor: "rgba(67,110,144,0.5)",
                    },
                    // text: null,
                    image: {
                        image: {
                            angle: 0,
                            fill: {
                                fillColor: "rgba(67,110,144,0.5)"
                            },
                            points: Infinity,
                            radius: 7,

                            rotateWithView: false,
                            snapToPixel: true,

                        },
                    },
                    stroke: {
                        strokeColor: "rgba(124,0,124,1)",
                        strokeLineDash: [10, 10, 10],
                        strokeWidth: 2
                    }

                }

            }
        }]

 */


/* 
var tt = [{
           // type: "Feature",
           geometry: {
               type: "Polygon",
           },
           properties: {
               type: "Circle",
               points: [
                   [118.13323, 24.49607],
                   [118.03848, 24.42741]
               ],
               style: {

                   fill: {
                       fillColor: "rgba(67,110,144,0.5)",
                   },
                   // text: null,
                   
                   stroke: {
                       strokeColor: "rgba(124,0,124,1)",
                       strokeLineDash: [10, 10, 10],
                       strokeWidth: 2
                   }

               }

           }
       }]

*/

/* 

 var tt = [{
            // type: "Feature",
            geometry: {
                type: "LineString",
            },
            properties: {
                type: "Polyline",
                points: [
                    [118.13323, 24.49607],
                    [118.03848, 24.42741]
                ],
                style: {

                    fill: {
                        fillColor: "rgba(67,110,144,0.5)",
                    },
                    // text: null,
                    
                    stroke: {
                        strokeColor: "rgba(124,0,124,1)",
                        strokeLineDash: [10, 10, 10],
                        strokeWidth: 2
                    }

                }

            }
        }]



*/