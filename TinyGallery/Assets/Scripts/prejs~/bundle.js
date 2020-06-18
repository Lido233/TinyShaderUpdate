var laya = (function (exports) {
	'use strict';

	var commonjsGlobal = typeof globalThis !== 'undefined' ? globalThis : typeof window !== 'undefined' ? window : typeof global !== 'undefined' ? global : typeof self !== 'undefined' ? self : {};

	function commonjsRequire () {
		throw new Error('Dynamic requires are not currently supported by rollup-plugin-commonjs');
	}

	function unwrapExports (x) {
		return x && x.__esModule && Object.prototype.hasOwnProperty.call(x, 'default') ? x['default'] : x;
	}

	function createCommonjsModule(fn, module) {
		return module = { exports: {} }, fn(module, module.exports), module.exports;
	}

	var moment = createCommonjsModule(function (module, exports) {
	(function (global, factory) {
	     module.exports = factory() ;
	}(commonjsGlobal, (function () {
	    var hookCallback;

	    function hooks () {
	        return hookCallback.apply(null, arguments);
	    }

	    // This is done to register the method called with moment()
	    // without creating circular dependencies.
	    function setHookCallback (callback) {
	        hookCallback = callback;
	    }

	    function isArray(input) {
	        return input instanceof Array || Object.prototype.toString.call(input) === '[object Array]';
	    }

	    function isObject(input) {
	        // IE8 will treat undefined and null as object if it wasn't for
	        // input != null
	        return input != null && Object.prototype.toString.call(input) === '[object Object]';
	    }

	    function isObjectEmpty(obj) {
	        if (Object.getOwnPropertyNames) {
	            return (Object.getOwnPropertyNames(obj).length === 0);
	        } else {
	            var k;
	            for (k in obj) {
	                if (obj.hasOwnProperty(k)) {
	                    return false;
	                }
	            }
	            return true;
	        }
	    }

	    function isUndefined(input) {
	        return input === void 0;
	    }
	    function isNumber(input) {
	        return typeof input === 'number' || Object.prototype.toString.call(input) === '[object Number]';
	    }
	    function isDate(input) {
	        return input instanceof Date || Object.prototype.toString.call(input) === '[object Date]';
	    }
	    function map(arr, fn) {
	        var res = [], i;
	        for (i = 0; i < arr.length; ++i) {
	            res.push(fn(arr[i], i));
	        }
	        return res;
	    }
	    function hasOwnProp(a, b) {
	        return Object.prototype.hasOwnProperty.call(a, b);
	    }
	    function extend(a, b) {
	        for (var i in b) {
	            if (hasOwnProp(b, i)) {
	                a[i] = b[i];
	            }
	        }
	        if (hasOwnProp(b, 'toString')) {
	            a.toString = b.toString;
	        }
	        if (hasOwnProp(b, 'valueOf')) {
	            a.valueOf = b.valueOf;
	        }
	        return a;
	    }
	    function createUTC (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, true).utc();
	    }
	    function defaultParsingFlags() {
	        // We need to deep clone this object.
	        return {
	            empty           : false,
	            unusedTokens    : [],
	            unusedInput     : [],
	            overflow        : -2,
	            charsLeftOver   : 0,
	            nullInput       : false,
	            invalidMonth    : null,
	            invalidFormat   : false,
	            userInvalidated : false,
	            iso             : false,
	            parsedDateParts : [],
	            meridiem        : null,
	            rfc2822         : false,
	            weekdayMismatch : false
	        };
	    }
	    function getParsingFlags(m) {
	        if (m._pf == null) {
	            m._pf = defaultParsingFlags();
	        }
	        return m._pf;
	    }
	    var some;
	    if (Array.prototype.some) {
	        some = Array.prototype.some;
	    } else {
	        some = function (fun) {
	            var t = Object(this);
	            var len = t.length >>> 0;
	            for (var i = 0; i < len; i++) {
	                if (i in t && fun.call(this, t[i], i, t)) {
	                    return true;
	                }
	            }
	            return false;
	        };
	    }
	    function isValid(m) {
	        if (m._isValid == null) {
	            var flags = getParsingFlags(m);
	            var parsedParts = some.call(flags.parsedDateParts, function (i) {
	                return i != null;
	            });
	            var isNowValid = !isNaN(m._d.getTime()) &&
	                flags.overflow < 0 &&
	                !flags.empty &&
	                !flags.invalidMonth &&
	                !flags.invalidWeekday &&
	                !flags.weekdayMismatch &&
	                !flags.nullInput &&
	                !flags.invalidFormat &&
	                !flags.userInvalidated &&
	                (!flags.meridiem || (flags.meridiem && parsedParts));
	            if (m._strict) {
	                isNowValid = isNowValid &&
	                    flags.charsLeftOver === 0 &&
	                    flags.unusedTokens.length === 0 &&
	                    flags.bigHour === undefined;
	            }
	            if (Object.isFrozen == null || !Object.isFrozen(m)) {
	                m._isValid = isNowValid;
	            }
	            else {
	                return isNowValid;
	            }
	        }
	        return m._isValid;
	    }
	    function createInvalid (flags) {
	        var m = createUTC(NaN);
	        if (flags != null) {
	            extend(getParsingFlags(m), flags);
	        }
	        else {
	            getParsingFlags(m).userInvalidated = true;
	        }
	        return m;
	    }
	    // Plugins that add properties should also add the key here (null value),
	    // so we can properly clone ourselves.
	    var momentProperties = hooks.momentProperties = [];
	    function copyConfig(to, from) {
	        var i, prop, val;
	        if (!isUndefined(from._isAMomentObject)) {
	            to._isAMomentObject = from._isAMomentObject;
	        }
	        if (!isUndefined(from._i)) {
	            to._i = from._i;
	        }
	        if (!isUndefined(from._f)) {
	            to._f = from._f;
	        }
	        if (!isUndefined(from._l)) {
	            to._l = from._l;
	        }
	        if (!isUndefined(from._strict)) {
	            to._strict = from._strict;
	        }
	        if (!isUndefined(from._tzm)) {
	            to._tzm = from._tzm;
	        }
	        if (!isUndefined(from._isUTC)) {
	            to._isUTC = from._isUTC;
	        }
	        if (!isUndefined(from._offset)) {
	            to._offset = from._offset;
	        }
	        if (!isUndefined(from._pf)) {
	            to._pf = getParsingFlags(from);
	        }
	        if (!isUndefined(from._locale)) {
	            to._locale = from._locale;
	        }
	        if (momentProperties.length > 0) {
	            for (i = 0; i < momentProperties.length; i++) {
	                prop = momentProperties[i];
	                val = from[prop];
	                if (!isUndefined(val)) {
	                    to[prop] = val;
	                }
	            }
	        }
	        return to;
	    }
	    var updateInProgress = false;
	    // Moment prototype object
	    function Moment(config) {
	        copyConfig(this, config);
	        this._d = new Date(config._d != null ? config._d.getTime() : NaN);
	        if (!this.isValid()) {
	            this._d = new Date(NaN);
	        }
	        // Prevent infinite loop in case updateOffset creates new moment
	        // objects.
	        if (updateInProgress === false) {
	            updateInProgress = true;
	            hooks.updateOffset(this);
	            updateInProgress = false;
	        }
	    }
	    function isMoment (obj) {
	        return obj instanceof Moment || (obj != null && obj._isAMomentObject != null);
	    }
	    function absFloor (number) {
	        if (number < 0) {
	            // -0 -> 0
	            return Math.ceil(number) || 0;
	        } else {
	            return Math.floor(number);
	        }
	    }
	    function toInt(argumentForCoercion) {
	        var coercedNumber = +argumentForCoercion,
	            value = 0;
	        if (coercedNumber !== 0 && isFinite(coercedNumber)) {
	            value = absFloor(coercedNumber);
	        }
	        return value;
	    }
	    // compare two arrays, return the number of differences
	    function compareArrays(array1, array2, dontConvert) {
	        var len = Math.min(array1.length, array2.length),
	            lengthDiff = Math.abs(array1.length - array2.length),
	            diffs = 0,
	            i;
	        for (i = 0; i < len; i++) {
	            if ((dontConvert && array1[i] !== array2[i]) ||
	                (!dontConvert && toInt(array1[i]) !== toInt(array2[i]))) {
	                diffs++;
	            }
	        }
	        return diffs + lengthDiff;
	    }
	    function warn(msg) {
	        if (hooks.suppressDeprecationWarnings === false &&
	                (typeof console !==  'undefined') && console.warn) {
	            console.warn('Deprecation warning: ' + msg);
	        }
	    }
	    function deprecate(msg, fn) {
	        var firstTime = true;
	        return extend(function () {
	            if (hooks.deprecationHandler != null) {
	                hooks.deprecationHandler(null, msg);
	            }
	            if (firstTime) {
	                var args = [];
	                var arg;
	                for (var i = 0; i < arguments.length; i++) {
	                    arg = '';
	                    if (typeof arguments[i] === 'object') {
	                        arg += '\n[' + i + '] ';
	                        for (var key in arguments[0]) {
	                            arg += key + ': ' + arguments[0][key] + ', ';
	                        }
	                        arg = arg.slice(0, -2); // Remove trailing comma and space
	                    } else {
	                        arg = arguments[i];
	                    }
	                    args.push(arg);
	                }
	                warn(msg + '\nArguments: ' + Array.prototype.slice.call(args).join('') + '\n' + (new Error()).stack);
	                firstTime = false;
	            }
	            return fn.apply(this, arguments);
	        }, fn);
	    }
	    var deprecations = {};
	    function deprecateSimple(name, msg) {
	        if (hooks.deprecationHandler != null) {
	            hooks.deprecationHandler(name, msg);
	        }
	        if (!deprecations[name]) {
	            warn(msg);
	            deprecations[name] = true;
	        }
	    }
	    hooks.suppressDeprecationWarnings = false;
	    hooks.deprecationHandler = null;
	    function isFunction(input) {
	        return input instanceof Function || Object.prototype.toString.call(input) === '[object Function]';
	    }
	    function set (config) {
	        var prop, i;
	        for (i in config) {
	            prop = config[i];
	            if (isFunction(prop)) {
	                this[i] = prop;
	            } else {
	                this['_' + i] = prop;
	            }
	        }
	        this._config = config;
	        // Lenient ordinal parsing accepts just a number in addition to
	        // number + (possibly) stuff coming from _dayOfMonthOrdinalParse.
	        // TODO: Remove "ordinalParse" fallback in next major release.
	        this._dayOfMonthOrdinalParseLenient = new RegExp(
	            (this._dayOfMonthOrdinalParse.source || this._ordinalParse.source) +
	                '|' + (/\d{1,2}/).source);
	    }
	    function mergeConfigs(parentConfig, childConfig) {
	        var res = extend({}, parentConfig), prop;
	        for (prop in childConfig) {
	            if (hasOwnProp(childConfig, prop)) {
	                if (isObject(parentConfig[prop]) && isObject(childConfig[prop])) {
	                    res[prop] = {};
	                    extend(res[prop], parentConfig[prop]);
	                    extend(res[prop], childConfig[prop]);
	                } else if (childConfig[prop] != null) {
	                    res[prop] = childConfig[prop];
	                } else {
	                    delete res[prop];
	                }
	            }
	        }
	        for (prop in parentConfig) {
	            if (hasOwnProp(parentConfig, prop) &&
	                    !hasOwnProp(childConfig, prop) &&
	                    isObject(parentConfig[prop])) {
	                // make sure changes to properties don't modify parent config
	                res[prop] = extend({}, res[prop]);
	            }
	        }
	        return res;
	    }
	    function Locale(config) {
	        if (config != null) {
	            this.set(config);
	        }
	    }
	    var keys;
	    if (Object.keys) {
	        keys = Object.keys;
	    } else {
	        keys = function (obj) {
	            var i, res = [];
	            for (i in obj) {
	                if (hasOwnProp(obj, i)) {
	                    res.push(i);
	                }
	            }
	            return res;
	        };
	    }
	    var defaultCalendar = {
	        sameDay : '[Today at] LT',
	        nextDay : '[Tomorrow at] LT',
	        nextWeek : 'dddd [at] LT',
	        lastDay : '[Yesterday at] LT',
	        lastWeek : '[Last] dddd [at] LT',
	        sameElse : 'L'
	    };
	    function calendar (key, mom, now) {
	        var output = this._calendar[key] || this._calendar['sameElse'];
	        return isFunction(output) ? output.call(mom, now) : output;
	    }
	    var defaultLongDateFormat = {
	        LTS  : 'h:mm:ss A',
	        LT   : 'h:mm A',
	        L    : 'MM/DD/YYYY',
	        LL   : 'MMMM D, YYYY',
	        LLL  : 'MMMM D, YYYY h:mm A',
	        LLLL : 'dddd, MMMM D, YYYY h:mm A'
	    };
	    function longDateFormat (key) {
	        var format = this._longDateFormat[key],
	            formatUpper = this._longDateFormat[key.toUpperCase()];
	        if (format || !formatUpper) {
	            return format;
	        }
	        this._longDateFormat[key] = formatUpper.replace(/MMMM|MM|DD|dddd/g, function (val) {
	            return val.slice(1);
	        });
	        return this._longDateFormat[key];
	    }
	    var defaultInvalidDate = 'Invalid date';
	    function invalidDate () {
	        return this._invalidDate;
	    }
	    var defaultOrdinal = '%d';
	    var defaultDayOfMonthOrdinalParse = /\d{1,2}/;
	    function ordinal (number) {
	        return this._ordinal.replace('%d', number);
	    }
	    var defaultRelativeTime = {
	        future : 'in %s',
	        past   : '%s ago',
	        s  : 'a few seconds',
	        ss : '%d seconds',
	        m  : 'a minute',
	        mm : '%d minutes',
	        h  : 'an hour',
	        hh : '%d hours',
	        d  : 'a day',
	        dd : '%d days',
	        M  : 'a month',
	        MM : '%d months',
	        y  : 'a year',
	        yy : '%d years'
	    };
	    function relativeTime (number, withoutSuffix, string, isFuture) {
	        var output = this._relativeTime[string];
	        return (isFunction(output)) ?
	            output(number, withoutSuffix, string, isFuture) :
	            output.replace(/%d/i, number);
	    }
	    function pastFuture (diff, output) {
	        var format = this._relativeTime[diff > 0 ? 'future' : 'past'];
	        return isFunction(format) ? format(output) : format.replace(/%s/i, output);
	    }
	    var aliases = {};
	    function addUnitAlias (unit, shorthand) {
	        var lowerCase = unit.toLowerCase();
	        aliases[lowerCase] = aliases[lowerCase + 's'] = aliases[shorthand] = unit;
	    }
	    function normalizeUnits(units) {
	        return typeof units === 'string' ? aliases[units] || aliases[units.toLowerCase()] : undefined;
	    }
	    function normalizeObjectUnits(inputObject) {
	        var normalizedInput = {},
	            normalizedProp,
	            prop;
	        for (prop in inputObject) {
	            if (hasOwnProp(inputObject, prop)) {
	                normalizedProp = normalizeUnits(prop);
	                if (normalizedProp) {
	                    normalizedInput[normalizedProp] = inputObject[prop];
	                }
	            }
	        }
	        return normalizedInput;
	    }
	    var priorities = {};
	    function addUnitPriority(unit, priority) {
	        priorities[unit] = priority;
	    }
	    function getPrioritizedUnits(unitsObj) {
	        var units = [];
	        for (var u in unitsObj) {
	            units.push({unit: u, priority: priorities[u]});
	        }
	        units.sort(function (a, b) {
	            return a.priority - b.priority;
	        });
	        return units;
	    }
	    function zeroFill(number, targetLength, forceSign) {
	        var absNumber = '' + Math.abs(number),
	            zerosToFill = targetLength - absNumber.length,
	            sign = number >= 0;
	        return (sign ? (forceSign ? '+' : '') : '-') +
	            Math.pow(10, Math.max(0, zerosToFill)).toString().substr(1) + absNumber;
	    }
	    var formattingTokens = /(\[[^\[]*\])|(\\)?([Hh]mm(ss)?|Mo|MM?M?M?|Do|DDDo|DD?D?D?|ddd?d?|do?|w[o|w]?|W[o|W]?|Qo?|YYYYYY|YYYYY|YYYY|YY|gg(ggg?)?|GG(GGG?)?|e|E|a|A|hh?|HH?|kk?|mm?|ss?|S{1,9}|x|X|zz?|ZZ?|.)/g;
	    var localFormattingTokens = /(\[[^\[]*\])|(\\)?(LTS|LT|LL?L?L?|l{1,4})/g;
	    var formatFunctions = {};
	    var formatTokenFunctions = {};
	    // token:    'M'
	    // padded:   ['MM', 2]
	    // ordinal:  'Mo'
	    // callback: function () { this.month() + 1 }
	    function addFormatToken (token, padded, ordinal, callback) {
	        var func = callback;
	        if (typeof callback === 'string') {
	            func = function () {
	                return this[callback]();
	            };
	        }
	        if (token) {
	            formatTokenFunctions[token] = func;
	        }
	        if (padded) {
	            formatTokenFunctions[padded[0]] = function () {
	                return zeroFill(func.apply(this, arguments), padded[1], padded[2]);
	            };
	        }
	        if (ordinal) {
	            formatTokenFunctions[ordinal] = function () {
	                return this.localeData().ordinal(func.apply(this, arguments), token);
	            };
	        }
	    }
	    function removeFormattingTokens(input) {
	        if (input.match(/\[[\s\S]/)) {
	            return input.replace(/^\[|\]$/g, '');
	        }
	        return input.replace(/\\/g, '');
	    }
	    function makeFormatFunction(format) {
	        var array = format.match(formattingTokens), i, length;
	        for (i = 0, length = array.length; i < length; i++) {
	            if (formatTokenFunctions[array[i]]) {
	                array[i] = formatTokenFunctions[array[i]];
	            } else {
	                array[i] = removeFormattingTokens(array[i]);
	            }
	        }
	        return function (mom) {
	            var output = '', i;
	            for (i = 0; i < length; i++) {
	                output += isFunction(array[i]) ? array[i].call(mom, format) : array[i];
	            }
	            return output;
	        };
	    }
	    // format date using native date object
	    function formatMoment(m, format) {
	        if (!m.isValid()) {
	            return m.localeData().invalidDate();
	        }
	        format = expandFormat(format, m.localeData());
	        formatFunctions[format] = formatFunctions[format] || makeFormatFunction(format);
	        return formatFunctions[format](m);
	    }
	    function expandFormat(format, locale) {
	        var i = 5;
	        function replaceLongDateFormatTokens(input) {
	            return locale.longDateFormat(input) || input;
	        }
	        localFormattingTokens.lastIndex = 0;
	        while (i >= 0 && localFormattingTokens.test(format)) {
	            format = format.replace(localFormattingTokens, replaceLongDateFormatTokens);
	            localFormattingTokens.lastIndex = 0;
	            i -= 1;
	        }
	        return format;
	    }
	    var match1         = /\d/;            //       0 - 9
	    var match2         = /\d\d/;          //      00 - 99
	    var match3         = /\d{3}/;         //     000 - 999
	    var match4         = /\d{4}/;         //    0000 - 9999
	    var match6         = /[+-]?\d{6}/;    // -999999 - 999999
	    var match1to2      = /\d\d?/;         //       0 - 99
	    var match3to4      = /\d\d\d\d?/;     //     999 - 9999
	    var match5to6      = /\d\d\d\d\d\d?/; //   99999 - 999999
	    var match1to3      = /\d{1,3}/;       //       0 - 999
	    var match1to4      = /\d{1,4}/;       //       0 - 9999
	    var match1to6      = /[+-]?\d{1,6}/;  // -999999 - 999999
	    var matchUnsigned  = /\d+/;           //       0 - inf
	    var matchSigned    = /[+-]?\d+/;      //    -inf - inf
	    var matchOffset    = /Z|[+-]\d\d:?\d\d/gi; // +00:00 -00:00 +0000 -0000 or Z
	    var matchShortOffset = /Z|[+-]\d\d(?::?\d\d)?/gi; // +00 -00 +00:00 -00:00 +0000 -0000 or Z
	    var matchTimestamp = /[+-]?\d+(\.\d{1,3})?/; // 123456789 123456789.123
	    // any word (or two) characters or numbers including two/three word month in arabic.
	    // includes scottish gaelic two word and hyphenated months
	    var matchWord = /[0-9]{0,256}['a-z\u00A0-\u05FF\u0700-\uD7FF\uF900-\uFDCF\uFDF0-\uFF07\uFF10-\uFFEF]{1,256}|[\u0600-\u06FF\/]{1,256}(\s*?[\u0600-\u06FF]{1,256}){1,2}/i;
	    var regexes = {};
	    function addRegexToken (token, regex, strictRegex) {
	        regexes[token] = isFunction(regex) ? regex : function (isStrict, localeData) {
	            return (isStrict && strictRegex) ? strictRegex : regex;
	        };
	    }
	    function getParseRegexForToken (token, config) {
	        if (!hasOwnProp(regexes, token)) {
	            return new RegExp(unescapeFormat(token));
	        }
	        return regexes[token](config._strict, config._locale);
	    }
	    // Code from http://stackoverflow.com/questions/3561493/is-there-a-regexp-escape-function-in-javascript
	    function unescapeFormat(s) {
	        return regexEscape(s.replace('\\', '').replace(/\\(\[)|\\(\])|\[([^\]\[]*)\]|\\(.)/g, function (matched, p1, p2, p3, p4) {
	            return p1 || p2 || p3 || p4;
	        }));
	    }
	    function regexEscape(s) {
	        return s.replace(/[-\/\\^$*+?.()|[\]{}]/g, '\\$&');
	    }
	    var tokens = {};
	    function addParseToken (token, callback) {
	        var i, func = callback;
	        if (typeof token === 'string') {
	            token = [token];
	        }
	        if (isNumber(callback)) {
	            func = function (input, array) {
	                array[callback] = toInt(input);
	            };
	        }
	        for (i = 0; i < token.length; i++) {
	            tokens[token[i]] = func;
	        }
	    }
	    function addWeekParseToken (token, callback) {
	        addParseToken(token, function (input, array, config, token) {
	            config._w = config._w || {};
	            callback(input, config._w, config, token);
	        });
	    }
	    function addTimeToArrayFromToken(token, input, config) {
	        if (input != null && hasOwnProp(tokens, token)) {
	            tokens[token](input, config._a, config, token);
	        }
	    }
	    var YEAR = 0;
	    var MONTH = 1;
	    var DATE = 2;
	    var HOUR = 3;
	    var MINUTE = 4;
	    var SECOND = 5;
	    var MILLISECOND = 6;
	    var WEEK = 7;
	    var WEEKDAY = 8;
	    // FORMATTING
	    addFormatToken('Y', 0, 0, function () {
	        var y = this.year();
	        return y <= 9999 ? '' + y : '+' + y;
	    });
	    addFormatToken(0, ['YY', 2], 0, function () {
	        return this.year() % 100;
	    });
	    addFormatToken(0, ['YYYY',   4],       0, 'year');
	    addFormatToken(0, ['YYYYY',  5],       0, 'year');
	    addFormatToken(0, ['YYYYYY', 6, true], 0, 'year');
	    // ALIASES
	    addUnitAlias('year', 'y');
	    // PRIORITIES
	    addUnitPriority('year', 1);
	    // PARSING
	    addRegexToken('Y',      matchSigned);
	    addRegexToken('YY',     match1to2, match2);
	    addRegexToken('YYYY',   match1to4, match4);
	    addRegexToken('YYYYY',  match1to6, match6);
	    addRegexToken('YYYYYY', match1to6, match6);
	    addParseToken(['YYYYY', 'YYYYYY'], YEAR);
	    addParseToken('YYYY', function (input, array) {
	        array[YEAR] = input.length === 2 ? hooks.parseTwoDigitYear(input) : toInt(input);
	    });
	    addParseToken('YY', function (input, array) {
	        array[YEAR] = hooks.parseTwoDigitYear(input);
	    });
	    addParseToken('Y', function (input, array) {
	        array[YEAR] = parseInt(input, 10);
	    });
	    // HELPERS
	    function daysInYear(year) {
	        return isLeapYear(year) ? 366 : 365;
	    }
	    function isLeapYear(year) {
	        return (year % 4 === 0 && year % 100 !== 0) || year % 400 === 0;
	    }
	    // HOOKS
	    hooks.parseTwoDigitYear = function (input) {
	        return toInt(input) + (toInt(input) > 68 ? 1900 : 2000);
	    };
	    // MOMENTS
	    var getSetYear = makeGetSet('FullYear', true);
	    function getIsLeapYear () {
	        return isLeapYear(this.year());
	    }
	    function makeGetSet (unit, keepTime) {
	        return function (value) {
	            if (value != null) {
	                set$1(this, unit, value);
	                hooks.updateOffset(this, keepTime);
	                return this;
	            } else {
	                return get(this, unit);
	            }
	        };
	    }
	    function get (mom, unit) {
	        return mom.isValid() ?
	            mom._d['get' + (mom._isUTC ? 'UTC' : '') + unit]() : NaN;
	    }
	    function set$1 (mom, unit, value) {
	        if (mom.isValid() && !isNaN(value)) {
	            if (unit === 'FullYear' && isLeapYear(mom.year()) && mom.month() === 1 && mom.date() === 29) {
	                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value, mom.month(), daysInMonth(value, mom.month()));
	            }
	            else {
	                mom._d['set' + (mom._isUTC ? 'UTC' : '') + unit](value);
	            }
	        }
	    }
	    // MOMENTS
	    function stringGet (units) {
	        units = normalizeUnits(units);
	        if (isFunction(this[units])) {
	            return this[units]();
	        }
	        return this;
	    }
	    function stringSet (units, value) {
	        if (typeof units === 'object') {
	            units = normalizeObjectUnits(units);
	            var prioritized = getPrioritizedUnits(units);
	            for (var i = 0; i < prioritized.length; i++) {
	                this[prioritized[i].unit](units[prioritized[i].unit]);
	            }
	        } else {
	            units = normalizeUnits(units);
	            if (isFunction(this[units])) {
	                return this[units](value);
	            }
	        }
	        return this;
	    }
	    function mod(n, x) {
	        return ((n % x) + x) % x;
	    }
	    var indexOf;
	    if (Array.prototype.indexOf) {
	        indexOf = Array.prototype.indexOf;
	    } else {
	        indexOf = function (o) {
	            // I know
	            var i;
	            for (i = 0; i < this.length; ++i) {
	                if (this[i] === o) {
	                    return i;
	                }
	            }
	            return -1;
	        };
	    }
	    function daysInMonth(year, month) {
	        if (isNaN(year) || isNaN(month)) {
	            return NaN;
	        }
	        var modMonth = mod(month, 12);
	        year += (month - modMonth) / 12;
	        return modMonth === 1 ? (isLeapYear(year) ? 29 : 28) : (31 - modMonth % 7 % 2);
	    }
	    // FORMATTING
	    addFormatToken('M', ['MM', 2], 'Mo', function () {
	        return this.month() + 1;
	    });
	    addFormatToken('MMM', 0, 0, function (format) {
	        return this.localeData().monthsShort(this, format);
	    });
	    addFormatToken('MMMM', 0, 0, function (format) {
	        return this.localeData().months(this, format);
	    });
	    // ALIASES
	    addUnitAlias('month', 'M');
	    // PRIORITY
	    addUnitPriority('month', 8);
	    // PARSING
	    addRegexToken('M',    match1to2);
	    addRegexToken('MM',   match1to2, match2);
	    addRegexToken('MMM',  function (isStrict, locale) {
	        return locale.monthsShortRegex(isStrict);
	    });
	    addRegexToken('MMMM', function (isStrict, locale) {
	        return locale.monthsRegex(isStrict);
	    });
	    addParseToken(['M', 'MM'], function (input, array) {
	        array[MONTH] = toInt(input) - 1;
	    });
	    addParseToken(['MMM', 'MMMM'], function (input, array, config, token) {
	        var month = config._locale.monthsParse(input, token, config._strict);
	        // if we didn't find a month name, mark the date as invalid.
	        if (month != null) {
	            array[MONTH] = month;
	        } else {
	            getParsingFlags(config).invalidMonth = input;
	        }
	    });
	    // LOCALES
	    var MONTHS_IN_FORMAT = /D[oD]?(\[[^\[\]]*\]|\s)+MMMM?/;
	    var defaultLocaleMonths = 'January_February_March_April_May_June_July_August_September_October_November_December'.split('_');
	    function localeMonths (m, format) {
	        if (!m) {
	            return isArray(this._months) ? this._months :
	                this._months['standalone'];
	        }
	        return isArray(this._months) ? this._months[m.month()] :
	            this._months[(this._months.isFormat || MONTHS_IN_FORMAT).test(format) ? 'format' : 'standalone'][m.month()];
	    }
	    var defaultLocaleMonthsShort = 'Jan_Feb_Mar_Apr_May_Jun_Jul_Aug_Sep_Oct_Nov_Dec'.split('_');
	    function localeMonthsShort (m, format) {
	        if (!m) {
	            return isArray(this._monthsShort) ? this._monthsShort :
	                this._monthsShort['standalone'];
	        }
	        return isArray(this._monthsShort) ? this._monthsShort[m.month()] :
	            this._monthsShort[MONTHS_IN_FORMAT.test(format) ? 'format' : 'standalone'][m.month()];
	    }
	    function handleStrictParse(monthName, format, strict) {
	        var i, ii, mom, llc = monthName.toLocaleLowerCase();
	        if (!this._monthsParse) {
	            // this is not used
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	            for (i = 0; i < 12; ++i) {
	                mom = createUTC([2000, i]);
	                this._shortMonthsParse[i] = this.monthsShort(mom, '').toLocaleLowerCase();
	                this._longMonthsParse[i] = this.months(mom, '').toLocaleLowerCase();
	            }
	        }
	        if (strict) {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'MMM') {
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._longMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._longMonthsParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortMonthsParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	    function localeMonthsParse (monthName, format, strict) {
	        var i, mom, regex;
	        if (this._monthsParseExact) {
	            return handleStrictParse.call(this, monthName, format, strict);
	        }
	        if (!this._monthsParse) {
	            this._monthsParse = [];
	            this._longMonthsParse = [];
	            this._shortMonthsParse = [];
	        }
	        // TODO: add sorting
	        // Sorting makes sure if one month (or abbr) is a prefix of another
	        // see sorting in computeMonthsParse
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, i]);
	            if (strict && !this._longMonthsParse[i]) {
	                this._longMonthsParse[i] = new RegExp('^' + this.months(mom, '').replace('.', '') + '$', 'i');
	                this._shortMonthsParse[i] = new RegExp('^' + this.monthsShort(mom, '').replace('.', '') + '$', 'i');
	            }
	            if (!strict && !this._monthsParse[i]) {
	                regex = '^' + this.months(mom, '') + '|^' + this.monthsShort(mom, '');
	                this._monthsParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'MMMM' && this._longMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (strict && format === 'MMM' && this._shortMonthsParse[i].test(monthName)) {
	                return i;
	            } else if (!strict && this._monthsParse[i].test(monthName)) {
	                return i;
	            }
	        }
	    }
	    // MOMENTS
	    function setMonth (mom, value) {
	        var dayOfMonth;
	        if (!mom.isValid()) {
	            // No op
	            return mom;
	        }
	        if (typeof value === 'string') {
	            if (/^\d+$/.test(value)) {
	                value = toInt(value);
	            } else {
	                value = mom.localeData().monthsParse(value);
	                // TODO: Another silent failure?
	                if (!isNumber(value)) {
	                    return mom;
	                }
	            }
	        }
	        dayOfMonth = Math.min(mom.date(), daysInMonth(mom.year(), value));
	        mom._d['set' + (mom._isUTC ? 'UTC' : '') + 'Month'](value, dayOfMonth);
	        return mom;
	    }
	    function getSetMonth (value) {
	        if (value != null) {
	            setMonth(this, value);
	            hooks.updateOffset(this, true);
	            return this;
	        } else {
	            return get(this, 'Month');
	        }
	    }
	    function getDaysInMonth () {
	        return daysInMonth(this.year(), this.month());
	    }
	    var defaultMonthsShortRegex = matchWord;
	    function monthsShortRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsShortStrictRegex;
	            } else {
	                return this._monthsShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsShortRegex')) {
	                this._monthsShortRegex = defaultMonthsShortRegex;
	            }
	            return this._monthsShortStrictRegex && isStrict ?
	                this._monthsShortStrictRegex : this._monthsShortRegex;
	        }
	    }
	    var defaultMonthsRegex = matchWord;
	    function monthsRegex (isStrict) {
	        if (this._monthsParseExact) {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                computeMonthsParse.call(this);
	            }
	            if (isStrict) {
	                return this._monthsStrictRegex;
	            } else {
	                return this._monthsRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_monthsRegex')) {
	                this._monthsRegex = defaultMonthsRegex;
	            }
	            return this._monthsStrictRegex && isStrict ?
	                this._monthsStrictRegex : this._monthsRegex;
	        }
	    }
	    function computeMonthsParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	        var shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom;
	        for (i = 0; i < 12; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, i]);
	            shortPieces.push(this.monthsShort(mom, ''));
	            longPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.months(mom, ''));
	            mixedPieces.push(this.monthsShort(mom, ''));
	        }
	        // Sorting makes sure if one month (or abbr) is a prefix of another it
	        // will match the longer piece.
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 12; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	        }
	        for (i = 0; i < 24; i++) {
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	        this._monthsRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._monthsShortRegex = this._monthsRegex;
	        this._monthsStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._monthsShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	    }
	    function createDate (y, m, d, h, M, s, ms) {
	        // can't just apply() to create a date:
	        // https://stackoverflow.com/q/181348
	        var date;
	        // the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            // preserve leap years using a full 400 year cycle, then reset
	            date = new Date(y + 400, m, d, h, M, s, ms);
	            if (isFinite(date.getFullYear())) {
	                date.setFullYear(y);
	            }
	        } else {
	            date = new Date(y, m, d, h, M, s, ms);
	        }
	        return date;
	    }
	    function createUTCDate (y) {
	        var date;
	        // the Date.UTC function remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            var args = Array.prototype.slice.call(arguments);
	            // preserve leap years using a full 400 year cycle, then reset
	            args[0] = y + 400;
	            date = new Date(Date.UTC.apply(null, args));
	            if (isFinite(date.getUTCFullYear())) {
	                date.setUTCFullYear(y);
	            }
	        } else {
	            date = new Date(Date.UTC.apply(null, arguments));
	        }
	        return date;
	    }
	    // start-of-first-week - start-of-year
	    function firstWeekOffset(year, dow, doy) {
	        var // first-week day -- which january is always in the first week (4 for iso, 1 for other)
	            fwd = 7 + dow - doy,
	            // first-week day local weekday -- which local weekday is fwd
	            fwdlw = (7 + createUTCDate(year, 0, fwd).getUTCDay() - dow) % 7;
	        return -fwdlw + fwd - 1;
	    }
	    // https://en.wikipedia.org/wiki/ISO_week_date#Calculating_a_date_given_the_year.2C_week_number_and_weekday
	    function dayOfYearFromWeeks(year, week, weekday, dow, doy) {
	        var localWeekday = (7 + weekday - dow) % 7,
	            weekOffset = firstWeekOffset(year, dow, doy),
	            dayOfYear = 1 + 7 * (week - 1) + localWeekday + weekOffset,
	            resYear, resDayOfYear;
	        if (dayOfYear <= 0) {
	            resYear = year - 1;
	            resDayOfYear = daysInYear(resYear) + dayOfYear;
	        } else if (dayOfYear > daysInYear(year)) {
	            resYear = year + 1;
	            resDayOfYear = dayOfYear - daysInYear(year);
	        } else {
	            resYear = year;
	            resDayOfYear = dayOfYear;
	        }
	        return {
	            year: resYear,
	            dayOfYear: resDayOfYear
	        };
	    }
	    function weekOfYear(mom, dow, doy) {
	        var weekOffset = firstWeekOffset(mom.year(), dow, doy),
	            week = Math.floor((mom.dayOfYear() - weekOffset - 1) / 7) + 1,
	            resWeek, resYear;
	        if (week < 1) {
	            resYear = mom.year() - 1;
	            resWeek = week + weeksInYear(resYear, dow, doy);
	        } else if (week > weeksInYear(mom.year(), dow, doy)) {
	            resWeek = week - weeksInYear(mom.year(), dow, doy);
	            resYear = mom.year() + 1;
	        } else {
	            resYear = mom.year();
	            resWeek = week;
	        }
	        return {
	            week: resWeek,
	            year: resYear
	        };
	    }
	    function weeksInYear(year, dow, doy) {
	        var weekOffset = firstWeekOffset(year, dow, doy),
	            weekOffsetNext = firstWeekOffset(year + 1, dow, doy);
	        return (daysInYear(year) - weekOffset + weekOffsetNext) / 7;
	    }
	    // FORMATTING
	    addFormatToken('w', ['ww', 2], 'wo', 'week');
	    addFormatToken('W', ['WW', 2], 'Wo', 'isoWeek');
	    // ALIASES
	    addUnitAlias('week', 'w');
	    addUnitAlias('isoWeek', 'W');
	    // PRIORITIES
	    addUnitPriority('week', 5);
	    addUnitPriority('isoWeek', 5);
	    // PARSING
	    addRegexToken('w',  match1to2);
	    addRegexToken('ww', match1to2, match2);
	    addRegexToken('W',  match1to2);
	    addRegexToken('WW', match1to2, match2);
	    addWeekParseToken(['w', 'ww', 'W', 'WW'], function (input, week, config, token) {
	        week[token.substr(0, 1)] = toInt(input);
	    });
	    // HELPERS
	    // LOCALES
	    function localeWeek (mom) {
	        return weekOfYear(mom, this._week.dow, this._week.doy).week;
	    }
	    var defaultLocaleWeek = {
	        dow : 0, // Sunday is the first day of the week.
	        doy : 6  // The week that contains Jan 6th is the first week of the year.
	    };
	    function localeFirstDayOfWeek () {
	        return this._week.dow;
	    }
	    function localeFirstDayOfYear () {
	        return this._week.doy;
	    }
	    // MOMENTS
	    function getSetWeek (input) {
	        var week = this.localeData().week(this);
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	    function getSetISOWeek (input) {
	        var week = weekOfYear(this, 1, 4).week;
	        return input == null ? week : this.add((input - week) * 7, 'd');
	    }
	    // FORMATTING
	    addFormatToken('d', 0, 'do', 'day');
	    addFormatToken('dd', 0, 0, function (format) {
	        return this.localeData().weekdaysMin(this, format);
	    });
	    addFormatToken('ddd', 0, 0, function (format) {
	        return this.localeData().weekdaysShort(this, format);
	    });
	    addFormatToken('dddd', 0, 0, function (format) {
	        return this.localeData().weekdays(this, format);
	    });
	    addFormatToken('e', 0, 0, 'weekday');
	    addFormatToken('E', 0, 0, 'isoWeekday');
	    // ALIASES
	    addUnitAlias('day', 'd');
	    addUnitAlias('weekday', 'e');
	    addUnitAlias('isoWeekday', 'E');
	    // PRIORITY
	    addUnitPriority('day', 11);
	    addUnitPriority('weekday', 11);
	    addUnitPriority('isoWeekday', 11);
	    // PARSING
	    addRegexToken('d',    match1to2);
	    addRegexToken('e',    match1to2);
	    addRegexToken('E',    match1to2);
	    addRegexToken('dd',   function (isStrict, locale) {
	        return locale.weekdaysMinRegex(isStrict);
	    });
	    addRegexToken('ddd',   function (isStrict, locale) {
	        return locale.weekdaysShortRegex(isStrict);
	    });
	    addRegexToken('dddd',   function (isStrict, locale) {
	        return locale.weekdaysRegex(isStrict);
	    });
	    addWeekParseToken(['dd', 'ddd', 'dddd'], function (input, week, config, token) {
	        var weekday = config._locale.weekdaysParse(input, token, config._strict);
	        // if we didn't get a weekday name, mark the date as invalid
	        if (weekday != null) {
	            week.d = weekday;
	        } else {
	            getParsingFlags(config).invalidWeekday = input;
	        }
	    });
	    addWeekParseToken(['d', 'e', 'E'], function (input, week, config, token) {
	        week[token] = toInt(input);
	    });
	    // HELPERS
	    function parseWeekday(input, locale) {
	        if (typeof input !== 'string') {
	            return input;
	        }
	        if (!isNaN(input)) {
	            return parseInt(input, 10);
	        }
	        input = locale.weekdaysParse(input);
	        if (typeof input === 'number') {
	            return input;
	        }
	        return null;
	    }
	    function parseIsoWeekday(input, locale) {
	        if (typeof input === 'string') {
	            return locale.weekdaysParse(input) % 7 || 7;
	        }
	        return isNaN(input) ? null : input;
	    }
	    // LOCALES
	    function shiftWeekdays (ws, n) {
	        return ws.slice(n, 7).concat(ws.slice(0, n));
	    }
	    var defaultLocaleWeekdays = 'Sunday_Monday_Tuesday_Wednesday_Thursday_Friday_Saturday'.split('_');
	    function localeWeekdays (m, format) {
	        var weekdays = isArray(this._weekdays) ? this._weekdays :
	            this._weekdays[(m && m !== true && this._weekdays.isFormat.test(format)) ? 'format' : 'standalone'];
	        return (m === true) ? shiftWeekdays(weekdays, this._week.dow)
	            : (m) ? weekdays[m.day()] : weekdays;
	    }
	    var defaultLocaleWeekdaysShort = 'Sun_Mon_Tue_Wed_Thu_Fri_Sat'.split('_');
	    function localeWeekdaysShort (m) {
	        return (m === true) ? shiftWeekdays(this._weekdaysShort, this._week.dow)
	            : (m) ? this._weekdaysShort[m.day()] : this._weekdaysShort;
	    }
	    var defaultLocaleWeekdaysMin = 'Su_Mo_Tu_We_Th_Fr_Sa'.split('_');
	    function localeWeekdaysMin (m) {
	        return (m === true) ? shiftWeekdays(this._weekdaysMin, this._week.dow)
	            : (m) ? this._weekdaysMin[m.day()] : this._weekdaysMin;
	    }
	    function handleStrictParse$1(weekdayName, format, strict) {
	        var i, ii, mom, llc = weekdayName.toLocaleLowerCase();
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._minWeekdaysParse = [];
	            for (i = 0; i < 7; ++i) {
	                mom = createUTC([2000, 1]).day(i);
	                this._minWeekdaysParse[i] = this.weekdaysMin(mom, '').toLocaleLowerCase();
	                this._shortWeekdaysParse[i] = this.weekdaysShort(mom, '').toLocaleLowerCase();
	                this._weekdaysParse[i] = this.weekdays(mom, '').toLocaleLowerCase();
	            }
	        }
	        if (strict) {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        } else {
	            if (format === 'dddd') {
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else if (format === 'ddd') {
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            } else {
	                ii = indexOf.call(this._minWeekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._weekdaysParse, llc);
	                if (ii !== -1) {
	                    return ii;
	                }
	                ii = indexOf.call(this._shortWeekdaysParse, llc);
	                return ii !== -1 ? ii : null;
	            }
	        }
	    }
	    function localeWeekdaysParse (weekdayName, format, strict) {
	        var i, mom, regex;
	        if (this._weekdaysParseExact) {
	            return handleStrictParse$1.call(this, weekdayName, format, strict);
	        }
	        if (!this._weekdaysParse) {
	            this._weekdaysParse = [];
	            this._minWeekdaysParse = [];
	            this._shortWeekdaysParse = [];
	            this._fullWeekdaysParse = [];
	        }
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, 1]).day(i);
	            if (strict && !this._fullWeekdaysParse[i]) {
	                this._fullWeekdaysParse[i] = new RegExp('^' + this.weekdays(mom, '').replace('.', '\\.?') + '$', 'i');
	                this._shortWeekdaysParse[i] = new RegExp('^' + this.weekdaysShort(mom, '').replace('.', '\\.?') + '$', 'i');
	                this._minWeekdaysParse[i] = new RegExp('^' + this.weekdaysMin(mom, '').replace('.', '\\.?') + '$', 'i');
	            }
	            if (!this._weekdaysParse[i]) {
	                regex = '^' + this.weekdays(mom, '') + '|^' + this.weekdaysShort(mom, '') + '|^' + this.weekdaysMin(mom, '');
	                this._weekdaysParse[i] = new RegExp(regex.replace('.', ''), 'i');
	            }
	            // test the regex
	            if (strict && format === 'dddd' && this._fullWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'ddd' && this._shortWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (strict && format === 'dd' && this._minWeekdaysParse[i].test(weekdayName)) {
	                return i;
	            } else if (!strict && this._weekdaysParse[i].test(weekdayName)) {
	                return i;
	            }
	        }
	    }
	    // MOMENTS
	    function getSetDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var day = this._isUTC ? this._d.getUTCDay() : this._d.getDay();
	        if (input != null) {
	            input = parseWeekday(input, this.localeData());
	            return this.add(input - day, 'd');
	        } else {
	            return day;
	        }
	    }
	    function getSetLocaleDayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        var weekday = (this.day() + 7 - this.localeData()._week.dow) % 7;
	        return input == null ? weekday : this.add(input - weekday, 'd');
	    }
	    function getSetISODayOfWeek (input) {
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        // behaves the same as moment#day except
	        // as a getter, returns 7 instead of 0 (1-7 range instead of 0-6)
	        // as a setter, sunday should belong to the previous week.
	        if (input != null) {
	            var weekday = parseIsoWeekday(input, this.localeData());
	            return this.day(this.day() % 7 ? weekday : weekday - 7);
	        } else {
	            return this.day() || 7;
	        }
	    }
	    var defaultWeekdaysRegex = matchWord;
	    function weekdaysRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysStrictRegex;
	            } else {
	                return this._weekdaysRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                this._weekdaysRegex = defaultWeekdaysRegex;
	            }
	            return this._weekdaysStrictRegex && isStrict ?
	                this._weekdaysStrictRegex : this._weekdaysRegex;
	        }
	    }
	    var defaultWeekdaysShortRegex = matchWord;
	    function weekdaysShortRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysShortStrictRegex;
	            } else {
	                return this._weekdaysShortRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysShortRegex')) {
	                this._weekdaysShortRegex = defaultWeekdaysShortRegex;
	            }
	            return this._weekdaysShortStrictRegex && isStrict ?
	                this._weekdaysShortStrictRegex : this._weekdaysShortRegex;
	        }
	    }
	    var defaultWeekdaysMinRegex = matchWord;
	    function weekdaysMinRegex (isStrict) {
	        if (this._weekdaysParseExact) {
	            if (!hasOwnProp(this, '_weekdaysRegex')) {
	                computeWeekdaysParse.call(this);
	            }
	            if (isStrict) {
	                return this._weekdaysMinStrictRegex;
	            } else {
	                return this._weekdaysMinRegex;
	            }
	        } else {
	            if (!hasOwnProp(this, '_weekdaysMinRegex')) {
	                this._weekdaysMinRegex = defaultWeekdaysMinRegex;
	            }
	            return this._weekdaysMinStrictRegex && isStrict ?
	                this._weekdaysMinStrictRegex : this._weekdaysMinRegex;
	        }
	    }
	    function computeWeekdaysParse () {
	        function cmpLenRev(a, b) {
	            return b.length - a.length;
	        }
	        var minPieces = [], shortPieces = [], longPieces = [], mixedPieces = [],
	            i, mom, minp, shortp, longp;
	        for (i = 0; i < 7; i++) {
	            // make the regex if we don't have it already
	            mom = createUTC([2000, 1]).day(i);
	            minp = this.weekdaysMin(mom, '');
	            shortp = this.weekdaysShort(mom, '');
	            longp = this.weekdays(mom, '');
	            minPieces.push(minp);
	            shortPieces.push(shortp);
	            longPieces.push(longp);
	            mixedPieces.push(minp);
	            mixedPieces.push(shortp);
	            mixedPieces.push(longp);
	        }
	        // Sorting makes sure if one weekday (or abbr) is a prefix of another it
	        // will match the longer piece.
	        minPieces.sort(cmpLenRev);
	        shortPieces.sort(cmpLenRev);
	        longPieces.sort(cmpLenRev);
	        mixedPieces.sort(cmpLenRev);
	        for (i = 0; i < 7; i++) {
	            shortPieces[i] = regexEscape(shortPieces[i]);
	            longPieces[i] = regexEscape(longPieces[i]);
	            mixedPieces[i] = regexEscape(mixedPieces[i]);
	        }
	        this._weekdaysRegex = new RegExp('^(' + mixedPieces.join('|') + ')', 'i');
	        this._weekdaysShortRegex = this._weekdaysRegex;
	        this._weekdaysMinRegex = this._weekdaysRegex;
	        this._weekdaysStrictRegex = new RegExp('^(' + longPieces.join('|') + ')', 'i');
	        this._weekdaysShortStrictRegex = new RegExp('^(' + shortPieces.join('|') + ')', 'i');
	        this._weekdaysMinStrictRegex = new RegExp('^(' + minPieces.join('|') + ')', 'i');
	    }
	    // FORMATTING
	    function hFormat() {
	        return this.hours() % 12 || 12;
	    }
	    function kFormat() {
	        return this.hours() || 24;
	    }
	    addFormatToken('H', ['HH', 2], 0, 'hour');
	    addFormatToken('h', ['hh', 2], 0, hFormat);
	    addFormatToken('k', ['kk', 2], 0, kFormat);
	    addFormatToken('hmm', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2);
	    });
	    addFormatToken('hmmss', 0, 0, function () {
	        return '' + hFormat.apply(this) + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	    addFormatToken('Hmm', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2);
	    });
	    addFormatToken('Hmmss', 0, 0, function () {
	        return '' + this.hours() + zeroFill(this.minutes(), 2) +
	            zeroFill(this.seconds(), 2);
	    });
	    function meridiem (token, lowercase) {
	        addFormatToken(token, 0, 0, function () {
	            return this.localeData().meridiem(this.hours(), this.minutes(), lowercase);
	        });
	    }
	    meridiem('a', true);
	    meridiem('A', false);
	    // ALIASES
	    addUnitAlias('hour', 'h');
	    // PRIORITY
	    addUnitPriority('hour', 13);
	    // PARSING
	    function matchMeridiem (isStrict, locale) {
	        return locale._meridiemParse;
	    }
	    addRegexToken('a',  matchMeridiem);
	    addRegexToken('A',  matchMeridiem);
	    addRegexToken('H',  match1to2);
	    addRegexToken('h',  match1to2);
	    addRegexToken('k',  match1to2);
	    addRegexToken('HH', match1to2, match2);
	    addRegexToken('hh', match1to2, match2);
	    addRegexToken('kk', match1to2, match2);
	    addRegexToken('hmm', match3to4);
	    addRegexToken('hmmss', match5to6);
	    addRegexToken('Hmm', match3to4);
	    addRegexToken('Hmmss', match5to6);
	    addParseToken(['H', 'HH'], HOUR);
	    addParseToken(['k', 'kk'], function (input, array, config) {
	        var kInput = toInt(input);
	        array[HOUR] = kInput === 24 ? 0 : kInput;
	    });
	    addParseToken(['a', 'A'], function (input, array, config) {
	        config._isPm = config._locale.isPM(input);
	        config._meridiem = input;
	    });
	    addParseToken(['h', 'hh'], function (input, array, config) {
	        array[HOUR] = toInt(input);
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	        getParsingFlags(config).bigHour = true;
	    });
	    addParseToken('Hmm', function (input, array, config) {
	        var pos = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos));
	        array[MINUTE] = toInt(input.substr(pos));
	    });
	    addParseToken('Hmmss', function (input, array, config) {
	        var pos1 = input.length - 4;
	        var pos2 = input.length - 2;
	        array[HOUR] = toInt(input.substr(0, pos1));
	        array[MINUTE] = toInt(input.substr(pos1, 2));
	        array[SECOND] = toInt(input.substr(pos2));
	    });
	    // LOCALES
	    function localeIsPM (input) {
	        // IE8 Quirks Mode & IE7 Standards Mode do not allow accessing strings like arrays
	        // Using charAt should be more compatible.
	        return ((input + '').toLowerCase().charAt(0) === 'p');
	    }
	    var defaultLocaleMeridiemParse = /[ap]\.?m?\.?/i;
	    function localeMeridiem (hours, minutes, isLower) {
	        if (hours > 11) {
	            return isLower ? 'pm' : 'PM';
	        } else {
	            return isLower ? 'am' : 'AM';
	        }
	    }
	    // MOMENTS
	    // Setting the hour should keep the time, because the user explicitly
	    // specified which hour they want. So trying to maintain the same hour (in
	    // a new timezone) makes sense. Adding/subtracting hours does not follow
	    // this rule.
	    var getSetHour = makeGetSet('Hours', true);
	    var baseConfig = {
	        calendar: defaultCalendar,
	        longDateFormat: defaultLongDateFormat,
	        invalidDate: defaultInvalidDate,
	        ordinal: defaultOrdinal,
	        dayOfMonthOrdinalParse: defaultDayOfMonthOrdinalParse,
	        relativeTime: defaultRelativeTime,
	        months: defaultLocaleMonths,
	        monthsShort: defaultLocaleMonthsShort,
	        week: defaultLocaleWeek,
	        weekdays: defaultLocaleWeekdays,
	        weekdaysMin: defaultLocaleWeekdaysMin,
	        weekdaysShort: defaultLocaleWeekdaysShort,
	        meridiemParse: defaultLocaleMeridiemParse
	    };
	    // internal storage for locale config files
	    var locales = {};
	    var localeFamilies = {};
	    var globalLocale;
	    function normalizeLocale(key) {
	        return key ? key.toLowerCase().replace('_', '-') : key;
	    }
	    // pick the locale from the array
	    // try ['en-au', 'en-gb'] as 'en-au', 'en-gb', 'en', as in move through the list trying each
	    // substring from most specific to least, but move to the next array item if it's a more specific variant than the current root
	    function chooseLocale(names) {
	        var i = 0, j, next, locale, split;
	        while (i < names.length) {
	            split = normalizeLocale(names[i]).split('-');
	            j = split.length;
	            next = normalizeLocale(names[i + 1]);
	            next = next ? next.split('-') : null;
	            while (j > 0) {
	                locale = loadLocale(split.slice(0, j).join('-'));
	                if (locale) {
	                    return locale;
	                }
	                if (next && next.length >= j && compareArrays(split, next, true) >= j - 1) {
	                    //the next array item is better than a shallower substring of this one
	                    break;
	                }
	                j--;
	            }
	            i++;
	        }
	        return globalLocale;
	    }
	    function loadLocale(name) {
	        var oldLocale = null;
	        // TODO: Find a better way to register and load all the locales in Node
	        if (!locales[name] && ('object' !== 'undefined') &&
	                module && module.exports) {
	            try {
	                oldLocale = globalLocale._abbr;
	                var aliasedRequire = commonjsRequire;
	                aliasedRequire('./locale/' + name);
	                getSetGlobalLocale(oldLocale);
	            } catch (e) {}
	        }
	        return locales[name];
	    }
	    // This function will load locale and then set the global locale.  If
	    // no arguments are passed in, it will simply return the current global
	    // locale key.
	    function getSetGlobalLocale (key, values) {
	        var data;
	        if (key) {
	            if (isUndefined(values)) {
	                data = getLocale(key);
	            }
	            else {
	                data = defineLocale(key, values);
	            }
	            if (data) {
	                // moment.duration._locale = moment._locale = data;
	                globalLocale = data;
	            }
	            else {
	                if ((typeof console !==  'undefined') && console.warn) {
	                    //warn user if arguments are passed but the locale could not be set
	                    console.warn('Locale ' + key +  ' not found. Did you forget to load it?');
	                }
	            }
	        }
	        return globalLocale._abbr;
	    }
	    function defineLocale (name, config) {
	        if (config !== null) {
	            var locale, parentConfig = baseConfig;
	            config.abbr = name;
	            if (locales[name] != null) {
	                deprecateSimple('defineLocaleOverride',
	                        'use moment.updateLocale(localeName, config) to change ' +
	                        'an existing locale. moment.defineLocale(localeName, ' +
	                        'config) should only be used for creating a new locale ' +
	                        'See http://momentjs.com/guides/#/warnings/define-locale/ for more info.');
	                parentConfig = locales[name]._config;
	            } else if (config.parentLocale != null) {
	                if (locales[config.parentLocale] != null) {
	                    parentConfig = locales[config.parentLocale]._config;
	                } else {
	                    locale = loadLocale(config.parentLocale);
	                    if (locale != null) {
	                        parentConfig = locale._config;
	                    } else {
	                        if (!localeFamilies[config.parentLocale]) {
	                            localeFamilies[config.parentLocale] = [];
	                        }
	                        localeFamilies[config.parentLocale].push({
	                            name: name,
	                            config: config
	                        });
	                        return null;
	                    }
	                }
	            }
	            locales[name] = new Locale(mergeConfigs(parentConfig, config));
	            if (localeFamilies[name]) {
	                localeFamilies[name].forEach(function (x) {
	                    defineLocale(x.name, x.config);
	                });
	            }
	            // backwards compat for now: also set the locale
	            // make sure we set the locale AFTER all child locales have been
	            // created, so we won't end up with the child locale set.
	            getSetGlobalLocale(name);
	            return locales[name];
	        } else {
	            // useful for testing
	            delete locales[name];
	            return null;
	        }
	    }
	    function updateLocale(name, config) {
	        if (config != null) {
	            var locale, tmpLocale, parentConfig = baseConfig;
	            // MERGE
	            tmpLocale = loadLocale(name);
	            if (tmpLocale != null) {
	                parentConfig = tmpLocale._config;
	            }
	            config = mergeConfigs(parentConfig, config);
	            locale = new Locale(config);
	            locale.parentLocale = locales[name];
	            locales[name] = locale;
	            // backwards compat for now: also set the locale
	            getSetGlobalLocale(name);
	        } else {
	            // pass null for config to unupdate, useful for tests
	            if (locales[name] != null) {
	                if (locales[name].parentLocale != null) {
	                    locales[name] = locales[name].parentLocale;
	                } else if (locales[name] != null) {
	                    delete locales[name];
	                }
	            }
	        }
	        return locales[name];
	    }
	    // returns locale data
	    function getLocale (key) {
	        var locale;
	        if (key && key._locale && key._locale._abbr) {
	            key = key._locale._abbr;
	        }
	        if (!key) {
	            return globalLocale;
	        }
	        if (!isArray(key)) {
	            //short-circuit everything else
	            locale = loadLocale(key);
	            if (locale) {
	                return locale;
	            }
	            key = [key];
	        }
	        return chooseLocale(key);
	    }
	    function listLocales() {
	        return keys(locales);
	    }
	    function checkOverflow (m) {
	        var overflow;
	        var a = m._a;
	        if (a && getParsingFlags(m).overflow === -2) {
	            overflow =
	                a[MONTH]       < 0 || a[MONTH]       > 11  ? MONTH :
	                a[DATE]        < 1 || a[DATE]        > daysInMonth(a[YEAR], a[MONTH]) ? DATE :
	                a[HOUR]        < 0 || a[HOUR]        > 24 || (a[HOUR] === 24 && (a[MINUTE] !== 0 || a[SECOND] !== 0 || a[MILLISECOND] !== 0)) ? HOUR :
	                a[MINUTE]      < 0 || a[MINUTE]      > 59  ? MINUTE :
	                a[SECOND]      < 0 || a[SECOND]      > 59  ? SECOND :
	                a[MILLISECOND] < 0 || a[MILLISECOND] > 999 ? MILLISECOND :
	                -1;
	            if (getParsingFlags(m)._overflowDayOfYear && (overflow < YEAR || overflow > DATE)) {
	                overflow = DATE;
	            }
	            if (getParsingFlags(m)._overflowWeeks && overflow === -1) {
	                overflow = WEEK;
	            }
	            if (getParsingFlags(m)._overflowWeekday && overflow === -1) {
	                overflow = WEEKDAY;
	            }
	            getParsingFlags(m).overflow = overflow;
	        }
	        return m;
	    }
	    // Pick the first defined of two or three arguments.
	    function defaults(a, b, c) {
	        if (a != null) {
	            return a;
	        }
	        if (b != null) {
	            return b;
	        }
	        return c;
	    }
	    function currentDateArray(config) {
	        // hooks is actually the exported moment object
	        var nowValue = new Date(hooks.now());
	        if (config._useUTC) {
	            return [nowValue.getUTCFullYear(), nowValue.getUTCMonth(), nowValue.getUTCDate()];
	        }
	        return [nowValue.getFullYear(), nowValue.getMonth(), nowValue.getDate()];
	    }
	    // convert an array to a date.
	    // the array should mirror the parameters below
	    // note: all values past the year are optional and will default to the lowest possible value.
	    // [year, month, day , hour, minute, second, millisecond]
	    function configFromArray (config) {
	        var i, date, input = [], currentDate, expectedWeekday, yearToUse;
	        if (config._d) {
	            return;
	        }
	        currentDate = currentDateArray(config);
	        //compute day of the year from weeks and weekdays
	        if (config._w && config._a[DATE] == null && config._a[MONTH] == null) {
	            dayOfYearFromWeekInfo(config);
	        }
	        //if the day of the year is set, figure out what it is
	        if (config._dayOfYear != null) {
	            yearToUse = defaults(config._a[YEAR], currentDate[YEAR]);
	            if (config._dayOfYear > daysInYear(yearToUse) || config._dayOfYear === 0) {
	                getParsingFlags(config)._overflowDayOfYear = true;
	            }
	            date = createUTCDate(yearToUse, 0, config._dayOfYear);
	            config._a[MONTH] = date.getUTCMonth();
	            config._a[DATE] = date.getUTCDate();
	        }
	        // Default to current date.
	        // * if no year, month, day of month are given, default to today
	        // * if day of month is given, default month and year
	        // * if month is given, default only year
	        // * if year is given, don't default anything
	        for (i = 0; i < 3 && config._a[i] == null; ++i) {
	            config._a[i] = input[i] = currentDate[i];
	        }
	        // Zero out whatever was not defaulted, including time
	        for (; i < 7; i++) {
	            config._a[i] = input[i] = (config._a[i] == null) ? (i === 2 ? 1 : 0) : config._a[i];
	        }
	        // Check for 24:00:00.000
	        if (config._a[HOUR] === 24 &&
	                config._a[MINUTE] === 0 &&
	                config._a[SECOND] === 0 &&
	                config._a[MILLISECOND] === 0) {
	            config._nextDay = true;
	            config._a[HOUR] = 0;
	        }
	        config._d = (config._useUTC ? createUTCDate : createDate).apply(null, input);
	        expectedWeekday = config._useUTC ? config._d.getUTCDay() : config._d.getDay();
	        // Apply timezone offset from input. The actual utcOffset can be changed
	        // with parseZone.
	        if (config._tzm != null) {
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	        }
	        if (config._nextDay) {
	            config._a[HOUR] = 24;
	        }
	        // check for mismatching day of week
	        if (config._w && typeof config._w.d !== 'undefined' && config._w.d !== expectedWeekday) {
	            getParsingFlags(config).weekdayMismatch = true;
	        }
	    }
	    function dayOfYearFromWeekInfo(config) {
	        var w, weekYear, week, weekday, dow, doy, temp, weekdayOverflow;
	        w = config._w;
	        if (w.GG != null || w.W != null || w.E != null) {
	            dow = 1;
	            doy = 4;
	            // TODO: We need to take the current isoWeekYear, but that depends on
	            // how we interpret now (local, utc, fixed offset). So create
	            // a now version of current config (take local/utc/offset flags, and
	            // create now).
	            weekYear = defaults(w.GG, config._a[YEAR], weekOfYear(createLocal(), 1, 4).year);
	            week = defaults(w.W, 1);
	            weekday = defaults(w.E, 1);
	            if (weekday < 1 || weekday > 7) {
	                weekdayOverflow = true;
	            }
	        } else {
	            dow = config._locale._week.dow;
	            doy = config._locale._week.doy;
	            var curWeek = weekOfYear(createLocal(), dow, doy);
	            weekYear = defaults(w.gg, config._a[YEAR], curWeek.year);
	            // Default to current week.
	            week = defaults(w.w, curWeek.week);
	            if (w.d != null) {
	                // weekday -- low day numbers are considered next week
	                weekday = w.d;
	                if (weekday < 0 || weekday > 6) {
	                    weekdayOverflow = true;
	                }
	            } else if (w.e != null) {
	                // local weekday -- counting starts from beginning of week
	                weekday = w.e + dow;
	                if (w.e < 0 || w.e > 6) {
	                    weekdayOverflow = true;
	                }
	            } else {
	                // default to beginning of week
	                weekday = dow;
	            }
	        }
	        if (week < 1 || week > weeksInYear(weekYear, dow, doy)) {
	            getParsingFlags(config)._overflowWeeks = true;
	        } else if (weekdayOverflow != null) {
	            getParsingFlags(config)._overflowWeekday = true;
	        } else {
	            temp = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy);
	            config._a[YEAR] = temp.year;
	            config._dayOfYear = temp.dayOfYear;
	        }
	    }
	    // iso 8601 regex
	    // 0000-00-00 0000-W00 or 0000-W00-0 + T + 00 or 00:00 or 00:00:00 or 00:00:00.000 + +00:00 or +0000 or +00)
	    var extendedIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})-(?:\d\d-\d\d|W\d\d-\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?::\d\d(?::\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
	    var basicIsoRegex = /^\s*((?:[+-]\d{6}|\d{4})(?:\d\d\d\d|W\d\d\d|W\d\d|\d\d\d|\d\d))(?:(T| )(\d\d(?:\d\d(?:\d\d(?:[.,]\d+)?)?)?)([\+\-]\d\d(?::?\d\d)?|\s*Z)?)?$/;
	    var tzRegex = /Z|[+-]\d\d(?::?\d\d)?/;
	    var isoDates = [
	        ['YYYYYY-MM-DD', /[+-]\d{6}-\d\d-\d\d/],
	        ['YYYY-MM-DD', /\d{4}-\d\d-\d\d/],
	        ['GGGG-[W]WW-E', /\d{4}-W\d\d-\d/],
	        ['GGGG-[W]WW', /\d{4}-W\d\d/, false],
	        ['YYYY-DDD', /\d{4}-\d{3}/],
	        ['YYYY-MM', /\d{4}-\d\d/, false],
	        ['YYYYYYMMDD', /[+-]\d{10}/],
	        ['YYYYMMDD', /\d{8}/],
	        // YYYYMM is NOT allowed by the standard
	        ['GGGG[W]WWE', /\d{4}W\d{3}/],
	        ['GGGG[W]WW', /\d{4}W\d{2}/, false],
	        ['YYYYDDD', /\d{7}/]
	    ];
	    // iso time formats and regexes
	    var isoTimes = [
	        ['HH:mm:ss.SSSS', /\d\d:\d\d:\d\d\.\d+/],
	        ['HH:mm:ss,SSSS', /\d\d:\d\d:\d\d,\d+/],
	        ['HH:mm:ss', /\d\d:\d\d:\d\d/],
	        ['HH:mm', /\d\d:\d\d/],
	        ['HHmmss.SSSS', /\d\d\d\d\d\d\.\d+/],
	        ['HHmmss,SSSS', /\d\d\d\d\d\d,\d+/],
	        ['HHmmss', /\d\d\d\d\d\d/],
	        ['HHmm', /\d\d\d\d/],
	        ['HH', /\d\d/]
	    ];
	    var aspNetJsonRegex = /^\/?Date\((\-?\d+)/i;
	    // date from iso format
	    function configFromISO(config) {
	        var i, l,
	            string = config._i,
	            match = extendedIsoRegex.exec(string) || basicIsoRegex.exec(string),
	            allowTime, dateFormat, timeFormat, tzFormat;
	        if (match) {
	            getParsingFlags(config).iso = true;
	            for (i = 0, l = isoDates.length; i < l; i++) {
	                if (isoDates[i][1].exec(match[1])) {
	                    dateFormat = isoDates[i][0];
	                    allowTime = isoDates[i][2] !== false;
	                    break;
	                }
	            }
	            if (dateFormat == null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[3]) {
	                for (i = 0, l = isoTimes.length; i < l; i++) {
	                    if (isoTimes[i][1].exec(match[3])) {
	                        // match[2] should be 'T' or space
	                        timeFormat = (match[2] || ' ') + isoTimes[i][0];
	                        break;
	                    }
	                }
	                if (timeFormat == null) {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            if (!allowTime && timeFormat != null) {
	                config._isValid = false;
	                return;
	            }
	            if (match[4]) {
	                if (tzRegex.exec(match[4])) {
	                    tzFormat = 'Z';
	                } else {
	                    config._isValid = false;
	                    return;
	                }
	            }
	            config._f = dateFormat + (timeFormat || '') + (tzFormat || '');
	            configFromStringAndFormat(config);
	        } else {
	            config._isValid = false;
	        }
	    }
	    // RFC 2822 regex: For details see https://tools.ietf.org/html/rfc2822#section-3.3
	    var rfc2822 = /^(?:(Mon|Tue|Wed|Thu|Fri|Sat|Sun),?\s)?(\d{1,2})\s(Jan|Feb|Mar|Apr|May|Jun|Jul|Aug|Sep|Oct|Nov|Dec)\s(\d{2,4})\s(\d\d):(\d\d)(?::(\d\d))?\s(?:(UT|GMT|[ECMP][SD]T)|([Zz])|([+-]\d{4}))$/;
	    function extractFromRFC2822Strings(yearStr, monthStr, dayStr, hourStr, minuteStr, secondStr) {
	        var result = [
	            untruncateYear(yearStr),
	            defaultLocaleMonthsShort.indexOf(monthStr),
	            parseInt(dayStr, 10),
	            parseInt(hourStr, 10),
	            parseInt(minuteStr, 10)
	        ];
	        if (secondStr) {
	            result.push(parseInt(secondStr, 10));
	        }
	        return result;
	    }
	    function untruncateYear(yearStr) {
	        var year = parseInt(yearStr, 10);
	        if (year <= 49) {
	            return 2000 + year;
	        } else if (year <= 999) {
	            return 1900 + year;
	        }
	        return year;
	    }
	    function preprocessRFC2822(s) {
	        // Remove comments and folding whitespace and replace multiple-spaces with a single space
	        return s.replace(/\([^)]*\)|[\n\t]/g, ' ').replace(/(\s\s+)/g, ' ').replace(/^\s\s*/, '').replace(/\s\s*$/, '');
	    }
	    function checkWeekday(weekdayStr, parsedInput, config) {
	        if (weekdayStr) {
	            // TODO: Replace the vanilla JS Date object with an indepentent day-of-week check.
	            var weekdayProvided = defaultLocaleWeekdaysShort.indexOf(weekdayStr),
	                weekdayActual = new Date(parsedInput[0], parsedInput[1], parsedInput[2]).getDay();
	            if (weekdayProvided !== weekdayActual) {
	                getParsingFlags(config).weekdayMismatch = true;
	                config._isValid = false;
	                return false;
	            }
	        }
	        return true;
	    }
	    var obsOffsets = {
	        UT: 0,
	        GMT: 0,
	        EDT: -4 * 60,
	        EST: -5 * 60,
	        CDT: -5 * 60,
	        CST: -6 * 60,
	        MDT: -6 * 60,
	        MST: -7 * 60,
	        PDT: -7 * 60,
	        PST: -8 * 60
	    };
	    function calculateOffset(obsOffset, militaryOffset, numOffset) {
	        if (obsOffset) {
	            return obsOffsets[obsOffset];
	        } else if (militaryOffset) {
	            // the only allowed military tz is Z
	            return 0;
	        } else {
	            var hm = parseInt(numOffset, 10);
	            var m = hm % 100, h = (hm - m) / 100;
	            return h * 60 + m;
	        }
	    }
	    // date and time from ref 2822 format
	    function configFromRFC2822(config) {
	        var match = rfc2822.exec(preprocessRFC2822(config._i));
	        if (match) {
	            var parsedArray = extractFromRFC2822Strings(match[4], match[3], match[2], match[5], match[6], match[7]);
	            if (!checkWeekday(match[1], parsedArray, config)) {
	                return;
	            }
	            config._a = parsedArray;
	            config._tzm = calculateOffset(match[8], match[9], match[10]);
	            config._d = createUTCDate.apply(null, config._a);
	            config._d.setUTCMinutes(config._d.getUTCMinutes() - config._tzm);
	            getParsingFlags(config).rfc2822 = true;
	        } else {
	            config._isValid = false;
	        }
	    }
	    // date from iso format or fallback
	    function configFromString(config) {
	        var matched = aspNetJsonRegex.exec(config._i);
	        if (matched !== null) {
	            config._d = new Date(+matched[1]);
	            return;
	        }
	        configFromISO(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	        } else {
	            return;
	        }
	        configFromRFC2822(config);
	        if (config._isValid === false) {
	            delete config._isValid;
	        } else {
	            return;
	        }
	        // Final attempt, use Input Fallback
	        hooks.createFromInputFallback(config);
	    }
	    hooks.createFromInputFallback = deprecate(
	        'value provided is not in a recognized RFC2822 or ISO format. moment construction falls back to js Date(), ' +
	        'which is not reliable across all browsers and versions. Non RFC2822/ISO date formats are ' +
	        'discouraged and will be removed in an upcoming major release. Please refer to ' +
	        'http://momentjs.com/guides/#/warnings/js-date/ for more info.',
	        function (config) {
	            config._d = new Date(config._i + (config._useUTC ? ' UTC' : ''));
	        }
	    );
	    // constant that refers to the ISO standard
	    hooks.ISO_8601 = function () {};
	    // constant that refers to the RFC 2822 form
	    hooks.RFC_2822 = function () {};
	    // date from string and format string
	    function configFromStringAndFormat(config) {
	        // TODO: Move this to another part of the creation flow to prevent circular deps
	        if (config._f === hooks.ISO_8601) {
	            configFromISO(config);
	            return;
	        }
	        if (config._f === hooks.RFC_2822) {
	            configFromRFC2822(config);
	            return;
	        }
	        config._a = [];
	        getParsingFlags(config).empty = true;
	        // This array is used to make a Date, either with `new Date` or `Date.UTC`
	        var string = '' + config._i,
	            i, parsedInput, tokens, token, skipped,
	            stringLength = string.length,
	            totalParsedInputLength = 0;
	        tokens = expandFormat(config._f, config._locale).match(formattingTokens) || [];
	        for (i = 0; i < tokens.length; i++) {
	            token = tokens[i];
	            parsedInput = (string.match(getParseRegexForToken(token, config)) || [])[0];
	            // console.log('token', token, 'parsedInput', parsedInput,
	            //         'regex', getParseRegexForToken(token, config));
	            if (parsedInput) {
	                skipped = string.substr(0, string.indexOf(parsedInput));
	                if (skipped.length > 0) {
	                    getParsingFlags(config).unusedInput.push(skipped);
	                }
	                string = string.slice(string.indexOf(parsedInput) + parsedInput.length);
	                totalParsedInputLength += parsedInput.length;
	            }
	            // don't parse if it's not a known token
	            if (formatTokenFunctions[token]) {
	                if (parsedInput) {
	                    getParsingFlags(config).empty = false;
	                }
	                else {
	                    getParsingFlags(config).unusedTokens.push(token);
	                }
	                addTimeToArrayFromToken(token, parsedInput, config);
	            }
	            else if (config._strict && !parsedInput) {
	                getParsingFlags(config).unusedTokens.push(token);
	            }
	        }
	        // add remaining unparsed input length to the string
	        getParsingFlags(config).charsLeftOver = stringLength - totalParsedInputLength;
	        if (string.length > 0) {
	            getParsingFlags(config).unusedInput.push(string);
	        }
	        // clear _12h flag if hour is <= 12
	        if (config._a[HOUR] <= 12 &&
	            getParsingFlags(config).bigHour === true &&
	            config._a[HOUR] > 0) {
	            getParsingFlags(config).bigHour = undefined;
	        }
	        getParsingFlags(config).parsedDateParts = config._a.slice(0);
	        getParsingFlags(config).meridiem = config._meridiem;
	        // handle meridiem
	        config._a[HOUR] = meridiemFixWrap(config._locale, config._a[HOUR], config._meridiem);
	        configFromArray(config);
	        checkOverflow(config);
	    }
	    function meridiemFixWrap (locale, hour, meridiem) {
	        var isPm;
	        if (meridiem == null) {
	            // nothing to do
	            return hour;
	        }
	        if (locale.meridiemHour != null) {
	            return locale.meridiemHour(hour, meridiem);
	        } else if (locale.isPM != null) {
	            // Fallback
	            isPm = locale.isPM(meridiem);
	            if (isPm && hour < 12) {
	                hour += 12;
	            }
	            if (!isPm && hour === 12) {
	                hour = 0;
	            }
	            return hour;
	        } else {
	            // this is not supposed to happen
	            return hour;
	        }
	    }
	    // date from string and array of format strings
	    function configFromStringAndArray(config) {
	        var tempConfig,
	            bestMoment,
	            scoreToBeat,
	            i,
	            currentScore;
	        if (config._f.length === 0) {
	            getParsingFlags(config).invalidFormat = true;
	            config._d = new Date(NaN);
	            return;
	        }
	        for (i = 0; i < config._f.length; i++) {
	            currentScore = 0;
	            tempConfig = copyConfig({}, config);
	            if (config._useUTC != null) {
	                tempConfig._useUTC = config._useUTC;
	            }
	            tempConfig._f = config._f[i];
	            configFromStringAndFormat(tempConfig);
	            if (!isValid(tempConfig)) {
	                continue;
	            }
	            // if there is any input that was not parsed add a penalty for that format
	            currentScore += getParsingFlags(tempConfig).charsLeftOver;
	            //or tokens
	            currentScore += getParsingFlags(tempConfig).unusedTokens.length * 10;
	            getParsingFlags(tempConfig).score = currentScore;
	            if (scoreToBeat == null || currentScore < scoreToBeat) {
	                scoreToBeat = currentScore;
	                bestMoment = tempConfig;
	            }
	        }
	        extend(config, bestMoment || tempConfig);
	    }
	    function configFromObject(config) {
	        if (config._d) {
	            return;
	        }
	        var i = normalizeObjectUnits(config._i);
	        config._a = map([i.year, i.month, i.day || i.date, i.hour, i.minute, i.second, i.millisecond], function (obj) {
	            return obj && parseInt(obj, 10);
	        });
	        configFromArray(config);
	    }
	    function createFromConfig (config) {
	        var res = new Moment(checkOverflow(prepareConfig(config)));
	        if (res._nextDay) {
	            // Adding is smart enough around DST
	            res.add(1, 'd');
	            res._nextDay = undefined;
	        }
	        return res;
	    }
	    function prepareConfig (config) {
	        var input = config._i,
	            format = config._f;
	        config._locale = config._locale || getLocale(config._l);
	        if (input === null || (format === undefined && input === '')) {
	            return createInvalid({nullInput: true});
	        }
	        if (typeof input === 'string') {
	            config._i = input = config._locale.preparse(input);
	        }
	        if (isMoment(input)) {
	            return new Moment(checkOverflow(input));
	        } else if (isDate(input)) {
	            config._d = input;
	        } else if (isArray(format)) {
	            configFromStringAndArray(config);
	        } else if (format) {
	            configFromStringAndFormat(config);
	        }  else {
	            configFromInput(config);
	        }
	        if (!isValid(config)) {
	            config._d = null;
	        }
	        return config;
	    }
	    function configFromInput(config) {
	        var input = config._i;
	        if (isUndefined(input)) {
	            config._d = new Date(hooks.now());
	        } else if (isDate(input)) {
	            config._d = new Date(input.valueOf());
	        } else if (typeof input === 'string') {
	            configFromString(config);
	        } else if (isArray(input)) {
	            config._a = map(input.slice(0), function (obj) {
	                return parseInt(obj, 10);
	            });
	            configFromArray(config);
	        } else if (isObject(input)) {
	            configFromObject(config);
	        } else if (isNumber(input)) {
	            // from milliseconds
	            config._d = new Date(input);
	        } else {
	            hooks.createFromInputFallback(config);
	        }
	    }
	    function createLocalOrUTC (input, format, locale, strict, isUTC) {
	        var c = {};
	        if (locale === true || locale === false) {
	            strict = locale;
	            locale = undefined;
	        }
	        if ((isObject(input) && isObjectEmpty(input)) ||
	                (isArray(input) && input.length === 0)) {
	            input = undefined;
	        }
	        // object construction must be done this way.
	        // https://github.com/moment/moment/issues/1423
	        c._isAMomentObject = true;
	        c._useUTC = c._isUTC = isUTC;
	        c._l = locale;
	        c._i = input;
	        c._f = format;
	        c._strict = strict;
	        return createFromConfig(c);
	    }
	    function createLocal (input, format, locale, strict) {
	        return createLocalOrUTC(input, format, locale, strict, false);
	    }
	    var prototypeMin = deprecate(
	        'moment().min is deprecated, use moment.max instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other < this ? this : other;
	            } else {
	                return createInvalid();
	            }
	        }
	    );
	    var prototypeMax = deprecate(
	        'moment().max is deprecated, use moment.min instead. http://momentjs.com/guides/#/warnings/min-max/',
	        function () {
	            var other = createLocal.apply(null, arguments);
	            if (this.isValid() && other.isValid()) {
	                return other > this ? this : other;
	            } else {
	                return createInvalid();
	            }
	        }
	    );
	    // Pick a moment m from moments so that m[fn](other) is true for all
	    // other. This relies on the function fn to be transitive.
	    //
	    // moments should either be an array of moment objects or an array, whose
	    // first element is an array of moment objects.
	    function pickBy(fn, moments) {
	        var res, i;
	        if (moments.length === 1 && isArray(moments[0])) {
	            moments = moments[0];
	        }
	        if (!moments.length) {
	            return createLocal();
	        }
	        res = moments[0];
	        for (i = 1; i < moments.length; ++i) {
	            if (!moments[i].isValid() || moments[i][fn](res)) {
	                res = moments[i];
	            }
	        }
	        return res;
	    }
	    // TODO: Use [].sort instead?
	    function min () {
	        var args = [].slice.call(arguments, 0);
	        return pickBy('isBefore', args);
	    }
	    function max () {
	        var args = [].slice.call(arguments, 0);
	        return pickBy('isAfter', args);
	    }
	    var now = function () {
	        return Date.now ? Date.now() : +(new Date());
	    };
	    var ordering = ['year', 'quarter', 'month', 'week', 'day', 'hour', 'minute', 'second', 'millisecond'];
	    function isDurationValid(m) {
	        for (var key in m) {
	            if (!(indexOf.call(ordering, key) !== -1 && (m[key] == null || !isNaN(m[key])))) {
	                return false;
	            }
	        }
	        var unitHasDecimal = false;
	        for (var i = 0; i < ordering.length; ++i) {
	            if (m[ordering[i]]) {
	                if (unitHasDecimal) {
	                    return false; // only allow non-integers for smallest unit
	                }
	                if (parseFloat(m[ordering[i]]) !== toInt(m[ordering[i]])) {
	                    unitHasDecimal = true;
	                }
	            }
	        }
	        return true;
	    }
	    function isValid$1() {
	        return this._isValid;
	    }
	    function createInvalid$1() {
	        return createDuration(NaN);
	    }
	    function Duration (duration) {
	        var normalizedInput = normalizeObjectUnits(duration),
	            years = normalizedInput.year || 0,
	            quarters = normalizedInput.quarter || 0,
	            months = normalizedInput.month || 0,
	            weeks = normalizedInput.week || normalizedInput.isoWeek || 0,
	            days = normalizedInput.day || 0,
	            hours = normalizedInput.hour || 0,
	            minutes = normalizedInput.minute || 0,
	            seconds = normalizedInput.second || 0,
	            milliseconds = normalizedInput.millisecond || 0;
	        this._isValid = isDurationValid(normalizedInput);
	        // representation for dateAddRemove
	        this._milliseconds = +milliseconds +
	            seconds * 1e3 + // 1000
	            minutes * 6e4 + // 1000 * 60
	            hours * 1000 * 60 * 60; //using 1000 * 60 * 60 instead of 36e5 to avoid floating point rounding errors https://github.com/moment/moment/issues/2978
	        // Because of dateAddRemove treats 24 hours as different from a
	        // day when working around DST, we need to store them separately
	        this._days = +days +
	            weeks * 7;
	        // It is impossible to translate months into days without knowing
	        // which months you are are talking about, so we have to store
	        // it separately.
	        this._months = +months +
	            quarters * 3 +
	            years * 12;
	        this._data = {};
	        this._locale = getLocale();
	        this._bubble();
	    }
	    function isDuration (obj) {
	        return obj instanceof Duration;
	    }
	    function absRound (number) {
	        if (number < 0) {
	            return Math.round(-1 * number) * -1;
	        } else {
	            return Math.round(number);
	        }
	    }
	    // FORMATTING
	    function offset (token, separator) {
	        addFormatToken(token, 0, 0, function () {
	            var offset = this.utcOffset();
	            var sign = '+';
	            if (offset < 0) {
	                offset = -offset;
	                sign = '-';
	            }
	            return sign + zeroFill(~~(offset / 60), 2) + separator + zeroFill(~~(offset) % 60, 2);
	        });
	    }
	    offset('Z', ':');
	    offset('ZZ', '');
	    // PARSING
	    addRegexToken('Z',  matchShortOffset);
	    addRegexToken('ZZ', matchShortOffset);
	    addParseToken(['Z', 'ZZ'], function (input, array, config) {
	        config._useUTC = true;
	        config._tzm = offsetFromString(matchShortOffset, input);
	    });
	    // HELPERS
	    // timezone chunker
	    // '+10:00' > ['10',  '00']
	    // '-1530'  > ['-15', '30']
	    var chunkOffset = /([\+\-]|\d\d)/gi;
	    function offsetFromString(matcher, string) {
	        var matches = (string || '').match(matcher);
	        if (matches === null) {
	            return null;
	        }
	        var chunk   = matches[matches.length - 1] || [];
	        var parts   = (chunk + '').match(chunkOffset) || ['-', 0, 0];
	        var minutes = +(parts[1] * 60) + toInt(parts[2]);
	        return minutes === 0 ?
	          0 :
	          parts[0] === '+' ? minutes : -minutes;
	    }
	    // Return a moment from input, that is local/utc/zone equivalent to model.
	    function cloneWithOffset(input, model) {
	        var res, diff;
	        if (model._isUTC) {
	            res = model.clone();
	            diff = (isMoment(input) || isDate(input) ? input.valueOf() : createLocal(input).valueOf()) - res.valueOf();
	            // Use low-level api, because this fn is low-level api.
	            res._d.setTime(res._d.valueOf() + diff);
	            hooks.updateOffset(res, false);
	            return res;
	        } else {
	            return createLocal(input).local();
	        }
	    }
	    function getDateOffset (m) {
	        // On Firefox.24 Date#getTimezoneOffset returns a floating point.
	        // https://github.com/moment/moment/pull/1871
	        return -Math.round(m._d.getTimezoneOffset() / 15) * 15;
	    }
	    // HOOKS
	    // This function will be called whenever a moment is mutated.
	    // It is intended to keep the offset in sync with the timezone.
	    hooks.updateOffset = function () {};
	    // MOMENTS
	    // keepLocalTime = true means only change the timezone, without
	    // affecting the local hour. So 5:31:26 +0300 --[utcOffset(2, true)]-->
	    // 5:31:26 +0200 It is possible that 5:31:26 doesn't exist with offset
	    // +0200, so we adjust the time as needed, to be valid.
	    //
	    // Keeping the time actually adds/subtracts (one hour)
	    // from the actual represented time. That is why we call updateOffset
	    // a second time. In case it wants us to change the offset again
	    // _changeInProgress == true case, then we have to adjust, because
	    // there is no such time in the given timezone.
	    function getSetOffset (input, keepLocalTime, keepMinutes) {
	        var offset = this._offset || 0,
	            localAdjust;
	        if (!this.isValid()) {
	            return input != null ? this : NaN;
	        }
	        if (input != null) {
	            if (typeof input === 'string') {
	                input = offsetFromString(matchShortOffset, input);
	                if (input === null) {
	                    return this;
	                }
	            } else if (Math.abs(input) < 16 && !keepMinutes) {
	                input = input * 60;
	            }
	            if (!this._isUTC && keepLocalTime) {
	                localAdjust = getDateOffset(this);
	            }
	            this._offset = input;
	            this._isUTC = true;
	            if (localAdjust != null) {
	                this.add(localAdjust, 'm');
	            }
	            if (offset !== input) {
	                if (!keepLocalTime || this._changeInProgress) {
	                    addSubtract(this, createDuration(input - offset, 'm'), 1, false);
	                } else if (!this._changeInProgress) {
	                    this._changeInProgress = true;
	                    hooks.updateOffset(this, true);
	                    this._changeInProgress = null;
	                }
	            }
	            return this;
	        } else {
	            return this._isUTC ? offset : getDateOffset(this);
	        }
	    }
	    function getSetZone (input, keepLocalTime) {
	        if (input != null) {
	            if (typeof input !== 'string') {
	                input = -input;
	            }
	            this.utcOffset(input, keepLocalTime);
	            return this;
	        } else {
	            return -this.utcOffset();
	        }
	    }
	    function setOffsetToUTC (keepLocalTime) {
	        return this.utcOffset(0, keepLocalTime);
	    }
	    function setOffsetToLocal (keepLocalTime) {
	        if (this._isUTC) {
	            this.utcOffset(0, keepLocalTime);
	            this._isUTC = false;
	            if (keepLocalTime) {
	                this.subtract(getDateOffset(this), 'm');
	            }
	        }
	        return this;
	    }
	    function setOffsetToParsedOffset () {
	        if (this._tzm != null) {
	            this.utcOffset(this._tzm, false, true);
	        } else if (typeof this._i === 'string') {
	            var tZone = offsetFromString(matchOffset, this._i);
	            if (tZone != null) {
	                this.utcOffset(tZone);
	            }
	            else {
	                this.utcOffset(0, true);
	            }
	        }
	        return this;
	    }
	    function hasAlignedHourOffset (input) {
	        if (!this.isValid()) {
	            return false;
	        }
	        input = input ? createLocal(input).utcOffset() : 0;
	        return (this.utcOffset() - input) % 60 === 0;
	    }
	    function isDaylightSavingTime () {
	        return (
	            this.utcOffset() > this.clone().month(0).utcOffset() ||
	            this.utcOffset() > this.clone().month(5).utcOffset()
	        );
	    }
	    function isDaylightSavingTimeShifted () {
	        if (!isUndefined(this._isDSTShifted)) {
	            return this._isDSTShifted;
	        }
	        var c = {};
	        copyConfig(c, this);
	        c = prepareConfig(c);
	        if (c._a) {
	            var other = c._isUTC ? createUTC(c._a) : createLocal(c._a);
	            this._isDSTShifted = this.isValid() &&
	                compareArrays(c._a, other.toArray()) > 0;
	        } else {
	            this._isDSTShifted = false;
	        }
	        return this._isDSTShifted;
	    }
	    function isLocal () {
	        return this.isValid() ? !this._isUTC : false;
	    }
	    function isUtcOffset () {
	        return this.isValid() ? this._isUTC : false;
	    }
	    function isUtc () {
	        return this.isValid() ? this._isUTC && this._offset === 0 : false;
	    }
	    // ASP.NET json date format regex
	    var aspNetRegex = /^(\-|\+)?(?:(\d*)[. ])?(\d+)\:(\d+)(?:\:(\d+)(\.\d*)?)?$/;
	    // from http://docs.closure-library.googlecode.com/git/closure_goog_date_date.js.source.html
	    // somewhat more in line with 4.4.3.2 2004 spec, but allows decimal anywhere
	    // and further modified to allow for strings containing both week and day
	    var isoRegex = /^(-|\+)?P(?:([-+]?[0-9,.]*)Y)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)W)?(?:([-+]?[0-9,.]*)D)?(?:T(?:([-+]?[0-9,.]*)H)?(?:([-+]?[0-9,.]*)M)?(?:([-+]?[0-9,.]*)S)?)?$/;
	    function createDuration (input, key) {
	        var duration = input,
	            // matching against regexp is expensive, do it on demand
	            match = null,
	            sign,
	            ret,
	            diffRes;
	        if (isDuration(input)) {
	            duration = {
	                ms : input._milliseconds,
	                d  : input._days,
	                M  : input._months
	            };
	        } else if (isNumber(input)) {
	            duration = {};
	            if (key) {
	                duration[key] = input;
	            } else {
	                duration.milliseconds = input;
	            }
	        } else if (!!(match = aspNetRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y  : 0,
	                d  : toInt(match[DATE])                         * sign,
	                h  : toInt(match[HOUR])                         * sign,
	                m  : toInt(match[MINUTE])                       * sign,
	                s  : toInt(match[SECOND])                       * sign,
	                ms : toInt(absRound(match[MILLISECOND] * 1000)) * sign // the millisecond decimal point is included in the match
	            };
	        } else if (!!(match = isoRegex.exec(input))) {
	            sign = (match[1] === '-') ? -1 : 1;
	            duration = {
	                y : parseIso(match[2], sign),
	                M : parseIso(match[3], sign),
	                w : parseIso(match[4], sign),
	                d : parseIso(match[5], sign),
	                h : parseIso(match[6], sign),
	                m : parseIso(match[7], sign),
	                s : parseIso(match[8], sign)
	            };
	        } else if (duration == null) {// checks for null or undefined
	            duration = {};
	        } else if (typeof duration === 'object' && ('from' in duration || 'to' in duration)) {
	            diffRes = momentsDifference(createLocal(duration.from), createLocal(duration.to));
	            duration = {};
	            duration.ms = diffRes.milliseconds;
	            duration.M = diffRes.months;
	        }
	        ret = new Duration(duration);
	        if (isDuration(input) && hasOwnProp(input, '_locale')) {
	            ret._locale = input._locale;
	        }
	        return ret;
	    }
	    createDuration.fn = Duration.prototype;
	    createDuration.invalid = createInvalid$1;
	    function parseIso (inp, sign) {
	        // We'd normally use ~~inp for this, but unfortunately it also
	        // converts floats to ints.
	        // inp may be undefined, so careful calling replace on it.
	        var res = inp && parseFloat(inp.replace(',', '.'));
	        // apply sign while we're at it
	        return (isNaN(res) ? 0 : res) * sign;
	    }
	    function positiveMomentsDifference(base, other) {
	        var res = {};
	        res.months = other.month() - base.month() +
	            (other.year() - base.year()) * 12;
	        if (base.clone().add(res.months, 'M').isAfter(other)) {
	            --res.months;
	        }
	        res.milliseconds = +other - +(base.clone().add(res.months, 'M'));
	        return res;
	    }
	    function momentsDifference(base, other) {
	        var res;
	        if (!(base.isValid() && other.isValid())) {
	            return {milliseconds: 0, months: 0};
	        }
	        other = cloneWithOffset(other, base);
	        if (base.isBefore(other)) {
	            res = positiveMomentsDifference(base, other);
	        } else {
	            res = positiveMomentsDifference(other, base);
	            res.milliseconds = -res.milliseconds;
	            res.months = -res.months;
	        }
	        return res;
	    }
	    // TODO: remove 'name' arg after deprecation is removed
	    function createAdder(direction, name) {
	        return function (val, period) {
	            var dur, tmp;
	            //invert the arguments, but complain about it
	            if (period !== null && !isNaN(+period)) {
	                deprecateSimple(name, 'moment().' + name  + '(period, number) is deprecated. Please use moment().' + name + '(number, period). ' +
	                'See http://momentjs.com/guides/#/warnings/add-inverted-param/ for more info.');
	                tmp = val; val = period; period = tmp;
	            }
	            val = typeof val === 'string' ? +val : val;
	            dur = createDuration(val, period);
	            addSubtract(this, dur, direction);
	            return this;
	        };
	    }
	    function addSubtract (mom, duration, isAdding, updateOffset) {
	        var milliseconds = duration._milliseconds,
	            days = absRound(duration._days),
	            months = absRound(duration._months);
	        if (!mom.isValid()) {
	            // No op
	            return;
	        }
	        updateOffset = updateOffset == null ? true : updateOffset;
	        if (months) {
	            setMonth(mom, get(mom, 'Month') + months * isAdding);
	        }
	        if (days) {
	            set$1(mom, 'Date', get(mom, 'Date') + days * isAdding);
	        }
	        if (milliseconds) {
	            mom._d.setTime(mom._d.valueOf() + milliseconds * isAdding);
	        }
	        if (updateOffset) {
	            hooks.updateOffset(mom, days || months);
	        }
	    }
	    var add      = createAdder(1, 'add');
	    var subtract = createAdder(-1, 'subtract');
	    function getCalendarFormat(myMoment, now) {
	        var diff = myMoment.diff(now, 'days', true);
	        return diff < -6 ? 'sameElse' :
	                diff < -1 ? 'lastWeek' :
	                diff < 0 ? 'lastDay' :
	                diff < 1 ? 'sameDay' :
	                diff < 2 ? 'nextDay' :
	                diff < 7 ? 'nextWeek' : 'sameElse';
	    }
	    function calendar$1 (time, formats) {
	        // We want to compare the start of today, vs this.
	        // Getting start-of-today depends on whether we're local/utc/offset or not.
	        var now = time || createLocal(),
	            sod = cloneWithOffset(now, this).startOf('day'),
	            format = hooks.calendarFormat(this, sod) || 'sameElse';
	        var output = formats && (isFunction(formats[format]) ? formats[format].call(this, now) : formats[format]);
	        return this.format(output || this.localeData().calendar(format, this, createLocal(now)));
	    }
	    function clone () {
	        return new Moment(this);
	    }
	    function isAfter (input, units) {
	        var localInput = isMoment(input) ? input : createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units) || 'millisecond';
	        if (units === 'millisecond') {
	            return this.valueOf() > localInput.valueOf();
	        } else {
	            return localInput.valueOf() < this.clone().startOf(units).valueOf();
	        }
	    }
	    function isBefore (input, units) {
	        var localInput = isMoment(input) ? input : createLocal(input);
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units) || 'millisecond';
	        if (units === 'millisecond') {
	            return this.valueOf() < localInput.valueOf();
	        } else {
	            return this.clone().endOf(units).valueOf() < localInput.valueOf();
	        }
	    }
	    function isBetween (from, to, units, inclusivity) {
	        var localFrom = isMoment(from) ? from : createLocal(from),
	            localTo = isMoment(to) ? to : createLocal(to);
	        if (!(this.isValid() && localFrom.isValid() && localTo.isValid())) {
	            return false;
	        }
	        inclusivity = inclusivity || '()';
	        return (inclusivity[0] === '(' ? this.isAfter(localFrom, units) : !this.isBefore(localFrom, units)) &&
	            (inclusivity[1] === ')' ? this.isBefore(localTo, units) : !this.isAfter(localTo, units));
	    }
	    function isSame (input, units) {
	        var localInput = isMoment(input) ? input : createLocal(input),
	            inputMs;
	        if (!(this.isValid() && localInput.isValid())) {
	            return false;
	        }
	        units = normalizeUnits(units) || 'millisecond';
	        if (units === 'millisecond') {
	            return this.valueOf() === localInput.valueOf();
	        } else {
	            inputMs = localInput.valueOf();
	            return this.clone().startOf(units).valueOf() <= inputMs && inputMs <= this.clone().endOf(units).valueOf();
	        }
	    }
	    function isSameOrAfter (input, units) {
	        return this.isSame(input, units) || this.isAfter(input, units);
	    }
	    function isSameOrBefore (input, units) {
	        return this.isSame(input, units) || this.isBefore(input, units);
	    }
	    function diff (input, units, asFloat) {
	        var that,
	            zoneDelta,
	            output;
	        if (!this.isValid()) {
	            return NaN;
	        }
	        that = cloneWithOffset(input, this);
	        if (!that.isValid()) {
	            return NaN;
	        }
	        zoneDelta = (that.utcOffset() - this.utcOffset()) * 6e4;
	        units = normalizeUnits(units);
	        switch (units) {
	            case 'year': output = monthDiff(this, that) / 12; break;
	            case 'month': output = monthDiff(this, that); break;
	            case 'quarter': output = monthDiff(this, that) / 3; break;
	            case 'second': output = (this - that) / 1e3; break; // 1000
	            case 'minute': output = (this - that) / 6e4; break; // 1000 * 60
	            case 'hour': output = (this - that) / 36e5; break; // 1000 * 60 * 60
	            case 'day': output = (this - that - zoneDelta) / 864e5; break; // 1000 * 60 * 60 * 24, negate dst
	            case 'week': output = (this - that - zoneDelta) / 6048e5; break; // 1000 * 60 * 60 * 24 * 7, negate dst
	            default: output = this - that;
	        }
	        return asFloat ? output : absFloor(output);
	    }
	    function monthDiff (a, b) {
	        // difference in months
	        var wholeMonthDiff = ((b.year() - a.year()) * 12) + (b.month() - a.month()),
	            // b is in (anchor - 1 month, anchor + 1 month)
	            anchor = a.clone().add(wholeMonthDiff, 'months'),
	            anchor2, adjust;
	        if (b - anchor < 0) {
	            anchor2 = a.clone().add(wholeMonthDiff - 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor - anchor2);
	        } else {
	            anchor2 = a.clone().add(wholeMonthDiff + 1, 'months');
	            // linear across the month
	            adjust = (b - anchor) / (anchor2 - anchor);
	        }
	        //check for negative zero, return zero if negative zero
	        return -(wholeMonthDiff + adjust) || 0;
	    }
	    hooks.defaultFormat = 'YYYY-MM-DDTHH:mm:ssZ';
	    hooks.defaultFormatUtc = 'YYYY-MM-DDTHH:mm:ss[Z]';
	    function toString () {
	        return this.clone().locale('en').format('ddd MMM DD YYYY HH:mm:ss [GMT]ZZ');
	    }
	    function toISOString(keepOffset) {
	        if (!this.isValid()) {
	            return null;
	        }
	        var utc = keepOffset !== true;
	        var m = utc ? this.clone().utc() : this;
	        if (m.year() < 0 || m.year() > 9999) {
	            return formatMoment(m, utc ? 'YYYYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYYYY-MM-DD[T]HH:mm:ss.SSSZ');
	        }
	        if (isFunction(Date.prototype.toISOString)) {
	            // native implementation is ~50x faster, use it when we can
	            if (utc) {
	                return this.toDate().toISOString();
	            } else {
	                return new Date(this.valueOf() + this.utcOffset() * 60 * 1000).toISOString().replace('Z', formatMoment(m, 'Z'));
	            }
	        }
	        return formatMoment(m, utc ? 'YYYY-MM-DD[T]HH:mm:ss.SSS[Z]' : 'YYYY-MM-DD[T]HH:mm:ss.SSSZ');
	    }
	    /**
	     * Return a human readable representation of a moment that can
	     * also be evaluated to get a new moment which is the same
	     *
	     * @link https://nodejs.org/dist/latest/docs/api/util.html#util_custom_inspect_function_on_objects
	     */
	    function inspect () {
	        if (!this.isValid()) {
	            return 'moment.invalid(/* ' + this._i + ' */)';
	        }
	        var func = 'moment';
	        var zone = '';
	        if (!this.isLocal()) {
	            func = this.utcOffset() === 0 ? 'moment.utc' : 'moment.parseZone';
	            zone = 'Z';
	        }
	        var prefix = '[' + func + '("]';
	        var year = (0 <= this.year() && this.year() <= 9999) ? 'YYYY' : 'YYYYYY';
	        var datetime = '-MM-DD[T]HH:mm:ss.SSS';
	        var suffix = zone + '[")]';
	        return this.format(prefix + year + datetime + suffix);
	    }
	    function format (inputString) {
	        if (!inputString) {
	            inputString = this.isUtc() ? hooks.defaultFormatUtc : hooks.defaultFormat;
	        }
	        var output = formatMoment(this, inputString);
	        return this.localeData().postformat(output);
	    }
	    function from (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 createLocal(time).isValid())) {
	            return createDuration({to: this, from: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	    function fromNow (withoutSuffix) {
	        return this.from(createLocal(), withoutSuffix);
	    }
	    function to (time, withoutSuffix) {
	        if (this.isValid() &&
	                ((isMoment(time) && time.isValid()) ||
	                 createLocal(time).isValid())) {
	            return createDuration({from: this, to: time}).locale(this.locale()).humanize(!withoutSuffix);
	        } else {
	            return this.localeData().invalidDate();
	        }
	    }
	    function toNow (withoutSuffix) {
	        return this.to(createLocal(), withoutSuffix);
	    }
	    // If passed a locale key, it will set the locale for this
	    // instance.  Otherwise, it will return the locale configuration
	    // variables for this instance.
	    function locale (key) {
	        var newLocaleData;
	        if (key === undefined) {
	            return this._locale._abbr;
	        } else {
	            newLocaleData = getLocale(key);
	            if (newLocaleData != null) {
	                this._locale = newLocaleData;
	            }
	            return this;
	        }
	    }
	    var lang = deprecate(
	        'moment().lang() is deprecated. Instead, use moment().localeData() to get the language configuration. Use moment().locale() to change languages.',
	        function (key) {
	            if (key === undefined) {
	                return this.localeData();
	            } else {
	                return this.locale(key);
	            }
	        }
	    );
	    function localeData () {
	        return this._locale;
	    }
	    var MS_PER_SECOND = 1000;
	    var MS_PER_MINUTE = 60 * MS_PER_SECOND;
	    var MS_PER_HOUR = 60 * MS_PER_MINUTE;
	    var MS_PER_400_YEARS = (365 * 400 + 97) * 24 * MS_PER_HOUR;
	    // actual modulo - handles negative numbers (for dates before 1970):
	    function mod$1(dividend, divisor) {
	        return (dividend % divisor + divisor) % divisor;
	    }
	    function localStartOfDate(y, m, d) {
	        // the date constructor remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            // preserve leap years using a full 400 year cycle, then reset
	            return new Date(y + 400, m, d) - MS_PER_400_YEARS;
	        } else {
	            return new Date(y, m, d).valueOf();
	        }
	    }
	    function utcStartOfDate(y, m, d) {
	        // Date.UTC remaps years 0-99 to 1900-1999
	        if (y < 100 && y >= 0) {
	            // preserve leap years using a full 400 year cycle, then reset
	            return Date.UTC(y + 400, m, d) - MS_PER_400_YEARS;
	        } else {
	            return Date.UTC(y, m, d);
	        }
	    }
	    function startOf (units) {
	        var time;
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond' || !this.isValid()) {
	            return this;
	        }
	        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
	        switch (units) {
	            case 'year':
	                time = startOfDate(this.year(), 0, 1);
	                break;
	            case 'quarter':
	                time = startOfDate(this.year(), this.month() - this.month() % 3, 1);
	                break;
	            case 'month':
	                time = startOfDate(this.year(), this.month(), 1);
	                break;
	            case 'week':
	                time = startOfDate(this.year(), this.month(), this.date() - this.weekday());
	                break;
	            case 'isoWeek':
	                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1));
	                break;
	            case 'day':
	            case 'date':
	                time = startOfDate(this.year(), this.month(), this.date());
	                break;
	            case 'hour':
	                time = this._d.valueOf();
	                time -= mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR);
	                break;
	            case 'minute':
	                time = this._d.valueOf();
	                time -= mod$1(time, MS_PER_MINUTE);
	                break;
	            case 'second':
	                time = this._d.valueOf();
	                time -= mod$1(time, MS_PER_SECOND);
	                break;
	        }
	        this._d.setTime(time);
	        hooks.updateOffset(this, true);
	        return this;
	    }
	    function endOf (units) {
	        var time;
	        units = normalizeUnits(units);
	        if (units === undefined || units === 'millisecond' || !this.isValid()) {
	            return this;
	        }
	        var startOfDate = this._isUTC ? utcStartOfDate : localStartOfDate;
	        switch (units) {
	            case 'year':
	                time = startOfDate(this.year() + 1, 0, 1) - 1;
	                break;
	            case 'quarter':
	                time = startOfDate(this.year(), this.month() - this.month() % 3 + 3, 1) - 1;
	                break;
	            case 'month':
	                time = startOfDate(this.year(), this.month() + 1, 1) - 1;
	                break;
	            case 'week':
	                time = startOfDate(this.year(), this.month(), this.date() - this.weekday() + 7) - 1;
	                break;
	            case 'isoWeek':
	                time = startOfDate(this.year(), this.month(), this.date() - (this.isoWeekday() - 1) + 7) - 1;
	                break;
	            case 'day':
	            case 'date':
	                time = startOfDate(this.year(), this.month(), this.date() + 1) - 1;
	                break;
	            case 'hour':
	                time = this._d.valueOf();
	                time += MS_PER_HOUR - mod$1(time + (this._isUTC ? 0 : this.utcOffset() * MS_PER_MINUTE), MS_PER_HOUR) - 1;
	                break;
	            case 'minute':
	                time = this._d.valueOf();
	                time += MS_PER_MINUTE - mod$1(time, MS_PER_MINUTE) - 1;
	                break;
	            case 'second':
	                time = this._d.valueOf();
	                time += MS_PER_SECOND - mod$1(time, MS_PER_SECOND) - 1;
	                break;
	        }
	        this._d.setTime(time);
	        hooks.updateOffset(this, true);
	        return this;
	    }
	    function valueOf () {
	        return this._d.valueOf() - ((this._offset || 0) * 60000);
	    }
	    function unix () {
	        return Math.floor(this.valueOf() / 1000);
	    }
	    function toDate () {
	        return new Date(this.valueOf());
	    }
	    function toArray () {
	        var m = this;
	        return [m.year(), m.month(), m.date(), m.hour(), m.minute(), m.second(), m.millisecond()];
	    }
	    function toObject () {
	        var m = this;
	        return {
	            years: m.year(),
	            months: m.month(),
	            date: m.date(),
	            hours: m.hours(),
	            minutes: m.minutes(),
	            seconds: m.seconds(),
	            milliseconds: m.milliseconds()
	        };
	    }
	    function toJSON () {
	        // new Date(NaN).toJSON() === null
	        return this.isValid() ? this.toISOString() : null;
	    }
	    function isValid$2 () {
	        return isValid(this);
	    }
	    function parsingFlags () {
	        return extend({}, getParsingFlags(this));
	    }
	    function invalidAt () {
	        return getParsingFlags(this).overflow;
	    }
	    function creationData() {
	        return {
	            input: this._i,
	            format: this._f,
	            locale: this._locale,
	            isUTC: this._isUTC,
	            strict: this._strict
	        };
	    }
	    // FORMATTING
	    addFormatToken(0, ['gg', 2], 0, function () {
	        return this.weekYear() % 100;
	    });
	    addFormatToken(0, ['GG', 2], 0, function () {
	        return this.isoWeekYear() % 100;
	    });
	    function addWeekYearFormatToken (token, getter) {
	        addFormatToken(0, [token, token.length], 0, getter);
	    }
	    addWeekYearFormatToken('gggg',     'weekYear');
	    addWeekYearFormatToken('ggggg',    'weekYear');
	    addWeekYearFormatToken('GGGG',  'isoWeekYear');
	    addWeekYearFormatToken('GGGGG', 'isoWeekYear');
	    // ALIASES
	    addUnitAlias('weekYear', 'gg');
	    addUnitAlias('isoWeekYear', 'GG');
	    // PRIORITY
	    addUnitPriority('weekYear', 1);
	    addUnitPriority('isoWeekYear', 1);
	    // PARSING
	    addRegexToken('G',      matchSigned);
	    addRegexToken('g',      matchSigned);
	    addRegexToken('GG',     match1to2, match2);
	    addRegexToken('gg',     match1to2, match2);
	    addRegexToken('GGGG',   match1to4, match4);
	    addRegexToken('gggg',   match1to4, match4);
	    addRegexToken('GGGGG',  match1to6, match6);
	    addRegexToken('ggggg',  match1to6, match6);
	    addWeekParseToken(['gggg', 'ggggg', 'GGGG', 'GGGGG'], function (input, week, config, token) {
	        week[token.substr(0, 2)] = toInt(input);
	    });
	    addWeekParseToken(['gg', 'GG'], function (input, week, config, token) {
	        week[token] = hooks.parseTwoDigitYear(input);
	    });
	    // MOMENTS
	    function getSetWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input,
	                this.week(),
	                this.weekday(),
	                this.localeData()._week.dow,
	                this.localeData()._week.doy);
	    }
	    function getSetISOWeekYear (input) {
	        return getSetWeekYearHelper.call(this,
	                input, this.isoWeek(), this.isoWeekday(), 1, 4);
	    }
	    function getISOWeeksInYear () {
	        return weeksInYear(this.year(), 1, 4);
	    }
	    function getWeeksInYear () {
	        var weekInfo = this.localeData()._week;
	        return weeksInYear(this.year(), weekInfo.dow, weekInfo.doy);
	    }
	    function getSetWeekYearHelper(input, week, weekday, dow, doy) {
	        var weeksTarget;
	        if (input == null) {
	            return weekOfYear(this, dow, doy).year;
	        } else {
	            weeksTarget = weeksInYear(input, dow, doy);
	            if (week > weeksTarget) {
	                week = weeksTarget;
	            }
	            return setWeekAll.call(this, input, week, weekday, dow, doy);
	        }
	    }
	    function setWeekAll(weekYear, week, weekday, dow, doy) {
	        var dayOfYearData = dayOfYearFromWeeks(weekYear, week, weekday, dow, doy),
	            date = createUTCDate(dayOfYearData.year, 0, dayOfYearData.dayOfYear);
	        this.year(date.getUTCFullYear());
	        this.month(date.getUTCMonth());
	        this.date(date.getUTCDate());
	        return this;
	    }
	    // FORMATTING
	    addFormatToken('Q', 0, 'Qo', 'quarter');
	    // ALIASES
	    addUnitAlias('quarter', 'Q');
	    // PRIORITY
	    addUnitPriority('quarter', 7);
	    // PARSING
	    addRegexToken('Q', match1);
	    addParseToken('Q', function (input, array) {
	        array[MONTH] = (toInt(input) - 1) * 3;
	    });
	    // MOMENTS
	    function getSetQuarter (input) {
	        return input == null ? Math.ceil((this.month() + 1) / 3) : this.month((input - 1) * 3 + this.month() % 3);
	    }
	    // FORMATTING
	    addFormatToken('D', ['DD', 2], 'Do', 'date');
	    // ALIASES
	    addUnitAlias('date', 'D');
	    // PRIORITY
	    addUnitPriority('date', 9);
	    // PARSING
	    addRegexToken('D',  match1to2);
	    addRegexToken('DD', match1to2, match2);
	    addRegexToken('Do', function (isStrict, locale) {
	        // TODO: Remove "ordinalParse" fallback in next major release.
	        return isStrict ?
	          (locale._dayOfMonthOrdinalParse || locale._ordinalParse) :
	          locale._dayOfMonthOrdinalParseLenient;
	    });
	    addParseToken(['D', 'DD'], DATE);
	    addParseToken('Do', function (input, array) {
	        array[DATE] = toInt(input.match(match1to2)[0]);
	    });
	    // MOMENTS
	    var getSetDayOfMonth = makeGetSet('Date', true);
	    // FORMATTING
	    addFormatToken('DDD', ['DDDD', 3], 'DDDo', 'dayOfYear');
	    // ALIASES
	    addUnitAlias('dayOfYear', 'DDD');
	    // PRIORITY
	    addUnitPriority('dayOfYear', 4);
	    // PARSING
	    addRegexToken('DDD',  match1to3);
	    addRegexToken('DDDD', match3);
	    addParseToken(['DDD', 'DDDD'], function (input, array, config) {
	        config._dayOfYear = toInt(input);
	    });
	    // HELPERS
	    // MOMENTS
	    function getSetDayOfYear (input) {
	        var dayOfYear = Math.round((this.clone().startOf('day') - this.clone().startOf('year')) / 864e5) + 1;
	        return input == null ? dayOfYear : this.add((input - dayOfYear), 'd');
	    }
	    // FORMATTING
	    addFormatToken('m', ['mm', 2], 0, 'minute');
	    // ALIASES
	    addUnitAlias('minute', 'm');
	    // PRIORITY
	    addUnitPriority('minute', 14);
	    // PARSING
	    addRegexToken('m',  match1to2);
	    addRegexToken('mm', match1to2, match2);
	    addParseToken(['m', 'mm'], MINUTE);
	    // MOMENTS
	    var getSetMinute = makeGetSet('Minutes', false);
	    // FORMATTING
	    addFormatToken('s', ['ss', 2], 0, 'second');
	    // ALIASES
	    addUnitAlias('second', 's');
	    // PRIORITY
	    addUnitPriority('second', 15);
	    // PARSING
	    addRegexToken('s',  match1to2);
	    addRegexToken('ss', match1to2, match2);
	    addParseToken(['s', 'ss'], SECOND);
	    // MOMENTS
	    var getSetSecond = makeGetSet('Seconds', false);
	    // FORMATTING
	    addFormatToken('S', 0, 0, function () {
	        return ~~(this.millisecond() / 100);
	    });
	    addFormatToken(0, ['SS', 2], 0, function () {
	        return ~~(this.millisecond() / 10);
	    });
	    addFormatToken(0, ['SSS', 3], 0, 'millisecond');
	    addFormatToken(0, ['SSSS', 4], 0, function () {
	        return this.millisecond() * 10;
	    });
	    addFormatToken(0, ['SSSSS', 5], 0, function () {
	        return this.millisecond() * 100;
	    });
	    addFormatToken(0, ['SSSSSS', 6], 0, function () {
	        return this.millisecond() * 1000;
	    });
	    addFormatToken(0, ['SSSSSSS', 7], 0, function () {
	        return this.millisecond() * 10000;
	    });
	    addFormatToken(0, ['SSSSSSSS', 8], 0, function () {
	        return this.millisecond() * 100000;
	    });
	    addFormatToken(0, ['SSSSSSSSS', 9], 0, function () {
	        return this.millisecond() * 1000000;
	    });
	    // ALIASES
	    addUnitAlias('millisecond', 'ms');
	    // PRIORITY
	    addUnitPriority('millisecond', 16);
	    // PARSING
	    addRegexToken('S',    match1to3, match1);
	    addRegexToken('SS',   match1to3, match2);
	    addRegexToken('SSS',  match1to3, match3);
	    var token;
	    for (token = 'SSSS'; token.length <= 9; token += 'S') {
	        addRegexToken(token, matchUnsigned);
	    }
	    function parseMs(input, array) {
	        array[MILLISECOND] = toInt(('0.' + input) * 1000);
	    }
	    for (token = 'S'; token.length <= 9; token += 'S') {
	        addParseToken(token, parseMs);
	    }
	    // MOMENTS
	    var getSetMillisecond = makeGetSet('Milliseconds', false);
	    // FORMATTING
	    addFormatToken('z',  0, 0, 'zoneAbbr');
	    addFormatToken('zz', 0, 0, 'zoneName');
	    // MOMENTS
	    function getZoneAbbr () {
	        return this._isUTC ? 'UTC' : '';
	    }
	    function getZoneName () {
	        return this._isUTC ? 'Coordinated Universal Time' : '';
	    }
	    var proto = Moment.prototype;
	    proto.add               = add;
	    proto.calendar          = calendar$1;
	    proto.clone             = clone;
	    proto.diff              = diff;
	    proto.endOf             = endOf;
	    proto.format            = format;
	    proto.from              = from;
	    proto.fromNow           = fromNow;
	    proto.to                = to;
	    proto.toNow             = toNow;
	    proto.get               = stringGet;
	    proto.invalidAt         = invalidAt;
	    proto.isAfter           = isAfter;
	    proto.isBefore          = isBefore;
	    proto.isBetween         = isBetween;
	    proto.isSame            = isSame;
	    proto.isSameOrAfter     = isSameOrAfter;
	    proto.isSameOrBefore    = isSameOrBefore;
	    proto.isValid           = isValid$2;
	    proto.lang              = lang;
	    proto.locale            = locale;
	    proto.localeData        = localeData;
	    proto.max               = prototypeMax;
	    proto.min               = prototypeMin;
	    proto.parsingFlags      = parsingFlags;
	    proto.set               = stringSet;
	    proto.startOf           = startOf;
	    proto.subtract          = subtract;
	    proto.toArray           = toArray;
	    proto.toObject          = toObject;
	    proto.toDate            = toDate;
	    proto.toISOString       = toISOString;
	    proto.inspect           = inspect;
	    proto.toJSON            = toJSON;
	    proto.toString          = toString;
	    proto.unix              = unix;
	    proto.valueOf           = valueOf;
	    proto.creationData      = creationData;
	    proto.year       = getSetYear;
	    proto.isLeapYear = getIsLeapYear;
	    proto.weekYear    = getSetWeekYear;
	    proto.isoWeekYear = getSetISOWeekYear;
	    proto.quarter = proto.quarters = getSetQuarter;
	    proto.month       = getSetMonth;
	    proto.daysInMonth = getDaysInMonth;
	    proto.week           = proto.weeks        = getSetWeek;
	    proto.isoWeek        = proto.isoWeeks     = getSetISOWeek;
	    proto.weeksInYear    = getWeeksInYear;
	    proto.isoWeeksInYear = getISOWeeksInYear;
	    proto.date       = getSetDayOfMonth;
	    proto.day        = proto.days             = getSetDayOfWeek;
	    proto.weekday    = getSetLocaleDayOfWeek;
	    proto.isoWeekday = getSetISODayOfWeek;
	    proto.dayOfYear  = getSetDayOfYear;
	    proto.hour = proto.hours = getSetHour;
	    proto.minute = proto.minutes = getSetMinute;
	    proto.second = proto.seconds = getSetSecond;
	    proto.millisecond = proto.milliseconds = getSetMillisecond;
	    proto.utcOffset            = getSetOffset;
	    proto.utc                  = setOffsetToUTC;
	    proto.local                = setOffsetToLocal;
	    proto.parseZone            = setOffsetToParsedOffset;
	    proto.hasAlignedHourOffset = hasAlignedHourOffset;
	    proto.isDST                = isDaylightSavingTime;
	    proto.isLocal              = isLocal;
	    proto.isUtcOffset          = isUtcOffset;
	    proto.isUtc                = isUtc;
	    proto.isUTC                = isUtc;
	    proto.zoneAbbr = getZoneAbbr;
	    proto.zoneName = getZoneName;
	    proto.dates  = deprecate('dates accessor is deprecated. Use date instead.', getSetDayOfMonth);
	    proto.months = deprecate('months accessor is deprecated. Use month instead', getSetMonth);
	    proto.years  = deprecate('years accessor is deprecated. Use year instead', getSetYear);
	    proto.zone   = deprecate('moment().zone is deprecated, use moment().utcOffset instead. http://momentjs.com/guides/#/warnings/zone/', getSetZone);
	    proto.isDSTShifted = deprecate('isDSTShifted is deprecated. See http://momentjs.com/guides/#/warnings/dst-shifted/ for more information', isDaylightSavingTimeShifted);
	    function createUnix (input) {
	        return createLocal(input * 1000);
	    }
	    function createInZone () {
	        return createLocal.apply(null, arguments).parseZone();
	    }
	    function preParsePostFormat (string) {
	        return string;
	    }
	    var proto$1 = Locale.prototype;
	    proto$1.calendar        = calendar;
	    proto$1.longDateFormat  = longDateFormat;
	    proto$1.invalidDate     = invalidDate;
	    proto$1.ordinal         = ordinal;
	    proto$1.preparse        = preParsePostFormat;
	    proto$1.postformat      = preParsePostFormat;
	    proto$1.relativeTime    = relativeTime;
	    proto$1.pastFuture      = pastFuture;
	    proto$1.set             = set;
	    proto$1.months            =        localeMonths;
	    proto$1.monthsShort       =        localeMonthsShort;
	    proto$1.monthsParse       =        localeMonthsParse;
	    proto$1.monthsRegex       = monthsRegex;
	    proto$1.monthsShortRegex  = monthsShortRegex;
	    proto$1.week = localeWeek;
	    proto$1.firstDayOfYear = localeFirstDayOfYear;
	    proto$1.firstDayOfWeek = localeFirstDayOfWeek;
	    proto$1.weekdays       =        localeWeekdays;
	    proto$1.weekdaysMin    =        localeWeekdaysMin;
	    proto$1.weekdaysShort  =        localeWeekdaysShort;
	    proto$1.weekdaysParse  =        localeWeekdaysParse;
	    proto$1.weekdaysRegex       =        weekdaysRegex;
	    proto$1.weekdaysShortRegex  =        weekdaysShortRegex;
	    proto$1.weekdaysMinRegex    =        weekdaysMinRegex;
	    proto$1.isPM = localeIsPM;
	    proto$1.meridiem = localeMeridiem;
	    function get$1 (format, index, field, setter) {
	        var locale = getLocale();
	        var utc = createUTC().set(setter, index);
	        return locale[field](utc, format);
	    }
	    function listMonthsImpl (format, index, field) {
	        if (isNumber(format)) {
	            index = format;
	            format = undefined;
	        }
	        format = format || '';
	        if (index != null) {
	            return get$1(format, index, field, 'month');
	        }
	        var i;
	        var out = [];
	        for (i = 0; i < 12; i++) {
	            out[i] = get$1(format, i, field, 'month');
	        }
	        return out;
	    }
	    // ()
	    // (5)
	    // (fmt, 5)
	    // (fmt)
	    // (true)
	    // (true, 5)
	    // (true, fmt, 5)
	    // (true, fmt)
	    function listWeekdaysImpl (localeSorted, format, index, field) {
	        if (typeof localeSorted === 'boolean') {
	            if (isNumber(format)) {
	                index = format;
	                format = undefined;
	            }
	            format = format || '';
	        } else {
	            format = localeSorted;
	            index = format;
	            localeSorted = false;
	            if (isNumber(format)) {
	                index = format;
	                format = undefined;
	            }
	            format = format || '';
	        }
	        var locale = getLocale(),
	            shift = localeSorted ? locale._week.dow : 0;
	        if (index != null) {
	            return get$1(format, (index + shift) % 7, field, 'day');
	        }
	        var i;
	        var out = [];
	        for (i = 0; i < 7; i++) {
	            out[i] = get$1(format, (i + shift) % 7, field, 'day');
	        }
	        return out;
	    }
	    function listMonths (format, index) {
	        return listMonthsImpl(format, index, 'months');
	    }
	    function listMonthsShort (format, index) {
	        return listMonthsImpl(format, index, 'monthsShort');
	    }
	    function listWeekdays (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdays');
	    }
	    function listWeekdaysShort (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysShort');
	    }
	    function listWeekdaysMin (localeSorted, format, index) {
	        return listWeekdaysImpl(localeSorted, format, index, 'weekdaysMin');
	    }
	    getSetGlobalLocale('en', {
	        dayOfMonthOrdinalParse: /\d{1,2}(th|st|nd|rd)/,
	        ordinal : function (number) {
	            var b = number % 10,
	                output = (toInt(number % 100 / 10) === 1) ? 'th' :
	                (b === 1) ? 'st' :
	                (b === 2) ? 'nd' :
	                (b === 3) ? 'rd' : 'th';
	            return number + output;
	        }
	    });
	    // Side effect imports
	    hooks.lang = deprecate('moment.lang is deprecated. Use moment.locale instead.', getSetGlobalLocale);
	    hooks.langData = deprecate('moment.langData is deprecated. Use moment.localeData instead.', getLocale);
	    var mathAbs = Math.abs;
	    function abs () {
	        var data           = this._data;
	        this._milliseconds = mathAbs(this._milliseconds);
	        this._days         = mathAbs(this._days);
	        this._months       = mathAbs(this._months);
	        data.milliseconds  = mathAbs(data.milliseconds);
	        data.seconds       = mathAbs(data.seconds);
	        data.minutes       = mathAbs(data.minutes);
	        data.hours         = mathAbs(data.hours);
	        data.months        = mathAbs(data.months);
	        data.years         = mathAbs(data.years);
	        return this;
	    }
	    function addSubtract$1 (duration, input, value, direction) {
	        var other = createDuration(input, value);
	        duration._milliseconds += direction * other._milliseconds;
	        duration._days         += direction * other._days;
	        duration._months       += direction * other._months;
	        return duration._bubble();
	    }
	    // supports only 2.0-style add(1, 's') or add(duration)
	    function add$1 (input, value) {
	        return addSubtract$1(this, input, value, 1);
	    }
	    // supports only 2.0-style subtract(1, 's') or subtract(duration)
	    function subtract$1 (input, value) {
	        return addSubtract$1(this, input, value, -1);
	    }
	    function absCeil (number) {
	        if (number < 0) {
	            return Math.floor(number);
	        } else {
	            return Math.ceil(number);
	        }
	    }
	    function bubble () {
	        var milliseconds = this._milliseconds;
	        var days         = this._days;
	        var months       = this._months;
	        var data         = this._data;
	        var seconds, minutes, hours, years, monthsFromDays;
	        // if we have a mix of positive and negative values, bubble down first
	        // check: https://github.com/moment/moment/issues/2166
	        if (!((milliseconds >= 0 && days >= 0 && months >= 0) ||
	                (milliseconds <= 0 && days <= 0 && months <= 0))) {
	            milliseconds += absCeil(monthsToDays(months) + days) * 864e5;
	            days = 0;
	            months = 0;
	        }
	        // The following code bubbles up values, see the tests for
	        // examples of what that means.
	        data.milliseconds = milliseconds % 1000;
	        seconds           = absFloor(milliseconds / 1000);
	        data.seconds      = seconds % 60;
	        minutes           = absFloor(seconds / 60);
	        data.minutes      = minutes % 60;
	        hours             = absFloor(minutes / 60);
	        data.hours        = hours % 24;
	        days += absFloor(hours / 24);
	        // convert days to months
	        monthsFromDays = absFloor(daysToMonths(days));
	        months += monthsFromDays;
	        days -= absCeil(monthsToDays(monthsFromDays));
	        // 12 months -> 1 year
	        years = absFloor(months / 12);
	        months %= 12;
	        data.days   = days;
	        data.months = months;
	        data.years  = years;
	        return this;
	    }
	    function daysToMonths (days) {
	        // 400 years have 146097 days (taking into account leap year rules)
	        // 400 years have 12 months === 4800
	        return days * 4800 / 146097;
	    }
	    function monthsToDays (months) {
	        // the reverse of daysToMonths
	        return months * 146097 / 4800;
	    }
	    function as (units) {
	        if (!this.isValid()) {
	            return NaN;
	        }
	        var days;
	        var months;
	        var milliseconds = this._milliseconds;
	        units = normalizeUnits(units);
	        if (units === 'month' || units === 'quarter' || units === 'year') {
	            days = this._days + milliseconds / 864e5;
	            months = this._months + daysToMonths(days);
	            switch (units) {
	                case 'month':   return months;
	                case 'quarter': return months / 3;
	                case 'year':    return months / 12;
	            }
	        } else {
	            // handle milliseconds separately because of floating point math errors (issue #1867)
	            days = this._days + Math.round(monthsToDays(this._months));
	            switch (units) {
	                case 'week'   : return days / 7     + milliseconds / 6048e5;
	                case 'day'    : return days         + milliseconds / 864e5;
	                case 'hour'   : return days * 24    + milliseconds / 36e5;
	                case 'minute' : return days * 1440  + milliseconds / 6e4;
	                case 'second' : return days * 86400 + milliseconds / 1000;
	                // Math.floor prevents floating point math errors here
	                case 'millisecond': return Math.floor(days * 864e5) + milliseconds;
	                default: throw new Error('Unknown unit ' + units);
	            }
	        }
	    }
	    // TODO: Use this.as('ms')?
	    function valueOf$1 () {
	        if (!this.isValid()) {
	            return NaN;
	        }
	        return (
	            this._milliseconds +
	            this._days * 864e5 +
	            (this._months % 12) * 2592e6 +
	            toInt(this._months / 12) * 31536e6
	        );
	    }
	    function makeAs (alias) {
	        return function () {
	            return this.as(alias);
	        };
	    }
	    var asMilliseconds = makeAs('ms');
	    var asSeconds      = makeAs('s');
	    var asMinutes      = makeAs('m');
	    var asHours        = makeAs('h');
	    var asDays         = makeAs('d');
	    var asWeeks        = makeAs('w');
	    var asMonths       = makeAs('M');
	    var asQuarters     = makeAs('Q');
	    var asYears        = makeAs('y');
	    function clone$1 () {
	        return createDuration(this);
	    }
	    function get$2 (units) {
	        units = normalizeUnits(units);
	        return this.isValid() ? this[units + 's']() : NaN;
	    }
	    function makeGetter(name) {
	        return function () {
	            return this.isValid() ? this._data[name] : NaN;
	        };
	    }
	    var milliseconds = makeGetter('milliseconds');
	    var seconds      = makeGetter('seconds');
	    var minutes      = makeGetter('minutes');
	    var hours        = makeGetter('hours');
	    var days         = makeGetter('days');
	    var months       = makeGetter('months');
	    var years        = makeGetter('years');
	    function weeks () {
	        return absFloor(this.days() / 7);
	    }
	    var round = Math.round;
	    var thresholds = {
	        ss: 44,         // a few seconds to seconds
	        s : 45,         // seconds to minute
	        m : 45,         // minutes to hour
	        h : 22,         // hours to day
	        d : 26,         // days to month
	        M : 11          // months to year
	    };
	    // helper function for moment.fn.from, moment.fn.fromNow, and moment.duration.fn.humanize
	    function substituteTimeAgo(string, number, withoutSuffix, isFuture, locale) {
	        return locale.relativeTime(number || 1, !!withoutSuffix, string, isFuture);
	    }
	    function relativeTime$1 (posNegDuration, withoutSuffix, locale) {
	        var duration = createDuration(posNegDuration).abs();
	        var seconds  = round(duration.as('s'));
	        var minutes  = round(duration.as('m'));
	        var hours    = round(duration.as('h'));
	        var days     = round(duration.as('d'));
	        var months   = round(duration.as('M'));
	        var years    = round(duration.as('y'));
	        var a = seconds <= thresholds.ss && ['s', seconds]  ||
	                seconds < thresholds.s   && ['ss', seconds] ||
	                minutes <= 1             && ['m']           ||
	                minutes < thresholds.m   && ['mm', minutes] ||
	                hours   <= 1             && ['h']           ||
	                hours   < thresholds.h   && ['hh', hours]   ||
	                days    <= 1             && ['d']           ||
	                days    < thresholds.d   && ['dd', days]    ||
	                months  <= 1             && ['M']           ||
	                months  < thresholds.M   && ['MM', months]  ||
	                years   <= 1             && ['y']           || ['yy', years];
	        a[2] = withoutSuffix;
	        a[3] = +posNegDuration > 0;
	        a[4] = locale;
	        return substituteTimeAgo.apply(null, a);
	    }
	    // This function allows you to set the rounding function for relative time strings
	    function getSetRelativeTimeRounding (roundingFunction) {
	        if (roundingFunction === undefined) {
	            return round;
	        }
	        if (typeof(roundingFunction) === 'function') {
	            round = roundingFunction;
	            return true;
	        }
	        return false;
	    }
	    // This function allows you to set a threshold for relative time strings
	    function getSetRelativeTimeThreshold (threshold, limit) {
	        if (thresholds[threshold] === undefined) {
	            return false;
	        }
	        if (limit === undefined) {
	            return thresholds[threshold];
	        }
	        thresholds[threshold] = limit;
	        if (threshold === 's') {
	            thresholds.ss = limit - 1;
	        }
	        return true;
	    }
	    function humanize (withSuffix) {
	        if (!this.isValid()) {
	            return this.localeData().invalidDate();
	        }
	        var locale = this.localeData();
	        var output = relativeTime$1(this, !withSuffix, locale);
	        if (withSuffix) {
	            output = locale.pastFuture(+this, output);
	        }
	        return locale.postformat(output);
	    }
	    var abs$1 = Math.abs;
	    function sign(x) {
	        return ((x > 0) - (x < 0)) || +x;
	    }
	    function toISOString$1() {
	        // for ISO strings we do not use the normal bubbling rules:
	        //  * milliseconds bubble up until they become hours
	        //  * days do not bubble at all
	        //  * months bubble up until they become years
	        // This is because there is no context-free conversion between hours and days
	        // (think of clock changes)
	        // and also not between days and months (28-31 days per month)
	        if (!this.isValid()) {
	            return this.localeData().invalidDate();
	        }
	        var seconds = abs$1(this._milliseconds) / 1000;
	        var days         = abs$1(this._days);
	        var months       = abs$1(this._months);
	        var minutes, hours, years;
	        // 3600 seconds -> 60 minutes -> 1 hour
	        minutes           = absFloor(seconds / 60);
	        hours             = absFloor(minutes / 60);
	        seconds %= 60;
	        minutes %= 60;
	        // 12 months -> 1 year
	        years  = absFloor(months / 12);
	        months %= 12;
	        // inspired by https://github.com/dordille/moment-isoduration/blob/master/moment.isoduration.js
	        var Y = years;
	        var M = months;
	        var D = days;
	        var h = hours;
	        var m = minutes;
	        var s = seconds ? seconds.toFixed(3).replace(/\.?0+$/, '') : '';
	        var total = this.asSeconds();
	        if (!total) {
	            // this is the same as C#'s (Noda) and python (isodate)...
	            // but not other JS (goog.date)
	            return 'P0D';
	        }
	        var totalSign = total < 0 ? '-' : '';
	        var ymSign = sign(this._months) !== sign(total) ? '-' : '';
	        var daysSign = sign(this._days) !== sign(total) ? '-' : '';
	        var hmsSign = sign(this._milliseconds) !== sign(total) ? '-' : '';
	        return totalSign + 'P' +
	            (Y ? ymSign + Y + 'Y' : '') +
	            (M ? ymSign + M + 'M' : '') +
	            (D ? daysSign + D + 'D' : '') +
	            ((h || m || s) ? 'T' : '') +
	            (h ? hmsSign + h + 'H' : '') +
	            (m ? hmsSign + m + 'M' : '') +
	            (s ? hmsSign + s + 'S' : '');
	    }
	    var proto$2 = Duration.prototype;
	    proto$2.isValid        = isValid$1;
	    proto$2.abs            = abs;
	    proto$2.add            = add$1;
	    proto$2.subtract       = subtract$1;
	    proto$2.as             = as;
	    proto$2.asMilliseconds = asMilliseconds;
	    proto$2.asSeconds      = asSeconds;
	    proto$2.asMinutes      = asMinutes;
	    proto$2.asHours        = asHours;
	    proto$2.asDays         = asDays;
	    proto$2.asWeeks        = asWeeks;
	    proto$2.asMonths       = asMonths;
	    proto$2.asQuarters     = asQuarters;
	    proto$2.asYears        = asYears;
	    proto$2.valueOf        = valueOf$1;
	    proto$2._bubble        = bubble;
	    proto$2.clone          = clone$1;
	    proto$2.get            = get$2;
	    proto$2.milliseconds   = milliseconds;
	    proto$2.seconds        = seconds;
	    proto$2.minutes        = minutes;
	    proto$2.hours          = hours;
	    proto$2.days           = days;
	    proto$2.weeks          = weeks;
	    proto$2.months         = months;
	    proto$2.years          = years;
	    proto$2.humanize       = humanize;
	    proto$2.toISOString    = toISOString$1;
	    proto$2.toString       = toISOString$1;
	    proto$2.toJSON         = toISOString$1;
	    proto$2.locale         = locale;
	    proto$2.localeData     = localeData;
	    proto$2.toIsoString = deprecate('toIsoString() is deprecated. Please use toISOString() instead (notice the capitals)', toISOString$1);
	    proto$2.lang = lang;
	    // Side effect imports
	    // FORMATTING
	    addFormatToken('X', 0, 0, 'unix');
	    addFormatToken('x', 0, 0, 'valueOf');
	    // PARSING
	    addRegexToken('x', matchSigned);
	    addRegexToken('X', matchTimestamp);
	    addParseToken('X', function (input, array, config) {
	        config._d = new Date(parseFloat(input, 10) * 1000);
	    });
	    addParseToken('x', function (input, array, config) {
	        config._d = new Date(toInt(input));
	    });
	    // Side effect imports
	    hooks.version = '2.24.0';
	    setHookCallback(createLocal);
	    hooks.fn                    = proto;
	    hooks.min                   = min;
	    hooks.max                   = max;
	    hooks.now                   = now;
	    hooks.utc                   = createUTC;
	    hooks.unix                  = createUnix;
	    hooks.months                = listMonths;
	    hooks.isDate                = isDate;
	    hooks.locale                = getSetGlobalLocale;
	    hooks.invalid               = createInvalid;
	    hooks.duration              = createDuration;
	    hooks.isMoment              = isMoment;
	    hooks.weekdays              = listWeekdays;
	    hooks.parseZone             = createInZone;
	    hooks.localeData            = getLocale;
	    hooks.isDuration            = isDuration;
	    hooks.monthsShort           = listMonthsShort;
	    hooks.weekdaysMin           = listWeekdaysMin;
	    hooks.defineLocale          = defineLocale;
	    hooks.updateLocale          = updateLocale;
	    hooks.locales               = listLocales;
	    hooks.weekdaysShort         = listWeekdaysShort;
	    hooks.normalizeUnits        = normalizeUnits;
	    hooks.relativeTimeRounding  = getSetRelativeTimeRounding;
	    hooks.relativeTimeThreshold = getSetRelativeTimeThreshold;
	    hooks.calendarFormat        = getCalendarFormat;
	    hooks.prototype             = proto;
	    // currently HTML5 input type only supports 24-hour formats
	    hooks.HTML5_FMT = {
	        DATETIME_LOCAL: 'YYYY-MM-DDTHH:mm',             // <input type="datetime-local" />
	        DATETIME_LOCAL_SECONDS: 'YYYY-MM-DDTHH:mm:ss',  // <input type="datetime-local" step="1" />
	        DATETIME_LOCAL_MS: 'YYYY-MM-DDTHH:mm:ss.SSS',   // <input type="datetime-local" step="0.001" />
	        DATE: 'YYYY-MM-DD',                             // <input type="date" />
	        TIME: 'HH:mm',                                  // <input type="time" />
	        TIME_SECONDS: 'HH:mm:ss',                       // <input type="time" step="1" />
	        TIME_MS: 'HH:mm:ss.SSS',                        // <input type="time" step="0.001" />
	        WEEK: 'GGGG-[W]WW',                             // <input type="week" />
	        MONTH: 'YYYY-MM'                                // <input type="month" />
	    };
	    return hooks;	})));	});	var tdrTools = createCommonjsModule(function (module, exports) {	(function (root, factory) {	  {
	    // Node, CommonJS-like
	    module.exports = factory();	  }	}(commonjsGlobal, function () {	  /**	   * wasm optimizations, to do native i64 multiplication and divide	   */	  var wasm = null;	  try {
	    wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
	      0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
	    ])), {}).exports;	  } catch (e) {
	    // no wasm support :(	  }	  /**	   * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.	   *  See the from* functions below for more convenient ways of constructing Longs.	   * @exports Long	   * @class A Long class for representing a 64 bit two's-complement integer value.	   * @param {number} low The low (signed) 32 bits of the long	   * @param {number} high The high (signed) 32 bits of the long	   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed	   * @constructor	   */	  function Long(low, high, unsigned) {
	    /**
	     * The low 32 bits as a signed value.
	     * @type {number}
	     */
	    this.low = low | 0;
	    /**
	     * The high 32 bits as a signed value.
	     * @type {number}
	     */
	    this.high = high | 0;
	    /**
	     * Whether unsigned or not.
	     * @type {boolean}
	     */
	    this.unsigned = !!unsigned;	  }	  // The internal representation of a long is the two given signed, 32-bit values.	  // We use 32-bit pieces because these are the size of integers on which	  // Javascript performs bit-operations.  For operations like addition and	  // multiplication, we split each number into 16 bit pieces, which can easily be	  // multiplied within Javascript's floating-point representation without overflow	  // or change in sign.	  //	  // In the algorithms below, we frequently reduce the negative case to the	  // positive case by negating the input(s) and then post-processing the result.	  // Note that we must ALWAYS check specially whether those values are MIN_VALUE	  // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as	  // a positive number, it overflows back into a negative).  Not handling this	  // case would often result in infinite recursion.	  //	  // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*	  // methods on which they depend.	  /**	   * An indicator used to reliably determine if an object is a Long or not.	   * @type {boolean}	   * @const	   * @private	   */	  Long.prototype.__isLong__;	  Object.defineProperty(Long.prototype, "__isLong__", {value: true});	  /**	   * @function	   * @param {*} obj Object	   * @returns {boolean}	   * @inner	   */	  function isLong(obj) {
	    return (obj && obj["__isLong__"]) === true;	  }	  /**	   * Tests if the specified object is a Long.	   * @function	   * @param {*} obj Object	   * @returns {boolean}	   */	  Long.isLong = isLong;	  /**	   * A cache of the Long representations of small integer values.	   * @type {!Object}	   * @inner	   */	  var INT_CACHE = {};	  /**	   * A cache of the Long representations of small unsigned integer values.	   * @type {!Object}	   * @inner	   */	  var UINT_CACHE = {};	  /**	   * @param {number} value	   * @param {boolean=} unsigned	   * @returns {!Long}	   * @inner	   */	  function fromInt(value, unsigned) {
	    var obj, cachedObj, cache;
	    if (unsigned) {
	      value >>>= 0;
	      if (cache = (0 <= value && value < 256)) {
	        cachedObj = UINT_CACHE[value];
	        if (cachedObj)
	          return cachedObj;
	      }
	      obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
	      if (cache)
	        UINT_CACHE[value] = obj;
	      return obj;
	    } else {
	      value |= 0;
	      if (cache = (-128 <= value && value < 128)) {
	        cachedObj = INT_CACHE[value];
	        if (cachedObj)
	          return cachedObj;
	      }
	      obj = fromBits(value, value < 0 ? -1 : 0, false);
	      if (cache)
	        INT_CACHE[value] = obj;
	      return obj;
	    }	  }	  /**	   * Returns a Long representing the given 32 bit integer value.	   * @function	   * @param {number} value The 32 bit integer in question	   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed	   * @returns {!Long} The corresponding Long value	   */	  Long.fromInt = fromInt;	  /**	   * @param {number} value	   * @param {boolean=} unsigned	   * @returns {!Long}	   * @inner	   */	  function fromNumber(value, unsigned) {
	    if (isNaN(value))
	      return unsigned ? UZERO : ZERO;
	    if (unsigned) {
	      if (value < 0)
	        return UZERO;
	      if (value >= TWO_PWR_64_DBL)
	        return MAX_UNSIGNED_VALUE;
	    } else {
	      if (value <= -TWO_PWR_63_DBL)
	        return MIN_VALUE;
	      if (value + 1 >= TWO_PWR_63_DBL)
	        return MAX_VALUE;
	    }
	    if (value < 0)
	      return fromNumber(-value, unsigned).neg();
	    return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);	  }	  /**	   * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.	   * @function	   * @param {number} value The number in question	   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed	   * @returns {!Long} The corresponding Long value	   */	  Long.fromNumber = fromNumber;	  /**	   * @param {number} lowBits	   * @param {number} highBits	   * @param {boolean=} unsigned	   * @returns {!Long}	   * @inner	   */	  function fromBits(lowBits, highBits, unsigned) {
	    return new Long(lowBits, highBits, unsigned);	  }	  /**	   * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is	   *  assumed to use 32 bits.	   * @function	   * @param {number} lowBits The low 32 bits	   * @param {number} highBits The high 32 bits	   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed	   * @returns {!Long} The corresponding Long value	   */	  Long.fromBits = fromBits;	  /**	   * @function	   * @param {number} base	   * @param {number} exponent	   * @returns {number}	   * @inner	   */	  var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)	  /**	   * @param {string} str	   * @param {(boolean|number)=} unsigned	   * @param {number=} radix	   * @returns {!Long}	   * @inner	   */	  function fromString(str, unsigned, radix) {
	    if (str.length === 0)
	      throw Error('empty string');
	    if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
	      return ZERO;
	    if (typeof unsigned === 'number') {
	      // For goog.math.long compatibility
	      radix = unsigned,
	          unsigned = false;
	    } else {
	      unsigned = !!unsigned;
	    }
	    radix = radix || 10;
	    if (radix < 2 || 36 < radix)
	      throw RangeError('radix');
	    var p;
	    if ((p = str.indexOf('-')) > 0)
	      throw Error('interior hyphen');
	    else if (p === 0) {
	      return fromString(str.substring(1), unsigned, radix).neg();
	    }
	    // Do several (8) digits each time through the loop, so as to
	    // minimize the calls to the very expensive emulated div.
	    var radixToPower = fromNumber(pow_dbl(radix, 8));
	    var result = ZERO;
	    for (var i = 0; i < str.length; i += 8) {
	      var size = Math.min(8, str.length - i),
	          value = parseInt(str.substring(i, i + size), radix);
	      if (size < 8) {
	        var power = fromNumber(pow_dbl(radix, size));
	        result = result.mul(power).add(fromNumber(value));
	      } else {
	        result = result.mul(radixToPower);
	        result = result.add(fromNumber(value));
	      }
	    }
	    result.unsigned = unsigned;
	    return result;	  }	  /**	   * Returns a Long representation of the given string, written using the specified radix.	   * @function	   * @param {string} str The textual representation of the Long	   * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed	   * @param {number=} radix The radix in which the text is written (2-36), defaults to 10	   * @returns {!Long} The corresponding Long value	   */	  Long.fromString = fromString;	  /**	   * @function	   * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val	   * @param {boolean=} unsigned	   * @returns {!Long}	   * @inner	   */	  function fromValue(val, unsigned) {
	    if (typeof val === 'number')
	      return fromNumber(val, unsigned);
	    if (typeof val === 'string')
	      return fromString(val, unsigned);
	    // Throws for non-objects, converts non-instanceof Long:
	    return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);	  }	  /**	   * Converts the specified value to a Long using the appropriate from* function for its type.	   * @function	   * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value	   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed	   * @returns {!Long}	   */	  Long.fromValue = fromValue;	  // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be	  // no runtime penalty for these.	  /**	   * @type {number}	   * @const	   * @inner	   */	  var TWO_PWR_16_DBL = 1 << 16;	  /**	   * @type {number}	   * @const	   * @inner	   */	  var TWO_PWR_24_DBL = 1 << 24;	  /**	   * @type {number}	   * @const	   * @inner	   */	  var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;	  /**	   * @type {number}	   * @const	   * @inner	   */	  var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;	  /**	   * @type {number}	   * @const	   * @inner	   */	  var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;	  /**	   * @type {!Long}	   * @const	   * @inner	   */	  var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);	  /**	   * @type {!Long}	   * @inner	   */	  var ZERO = fromInt(0);	  /**	   * Signed zero.	   * @type {!Long}	   */	  Long.ZERO = ZERO;	  /**	   * @type {!Long}	   * @inner	   */	  var UZERO = fromInt(0, true);	  /**	   * Unsigned zero.	   * @type {!Long}	   */	  Long.UZERO = UZERO;	  /**	   * @type {!Long}	   * @inner	   */	  var ONE = fromInt(1);	  /**	   * Signed one.	   * @type {!Long}	   */	  Long.ONE = ONE;	  /**	   * @type {!Long}	   * @inner	   */	  var UONE = fromInt(1, true);	  /**	   * Unsigned one.	   * @type {!Long}	   */	  Long.UONE = UONE;	  /**	   * @type {!Long}	   * @inner	   */	  var NEG_ONE = fromInt(-1);	  /**	   * Signed negative one.	   * @type {!Long}	   */	  Long.NEG_ONE = NEG_ONE;	  /**	   * @type {!Long}	   * @inner	   */	  var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);	  /**	   * Maximum signed value.	   * @type {!Long}	   */	  Long.MAX_VALUE = MAX_VALUE;	  /**	   * @type {!Long}	   * @inner	   */	  var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);	  /**	   * Maximum unsigned value.	   * @type {!Long}	   */	  Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;	  /**	   * @type {!Long}	   * @inner	   */	  var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);	  /**	   * Minimum signed value.	   * @type {!Long}	   */	  Long.MIN_VALUE = MIN_VALUE;	  /**	   * @alias Long.prototype	   * @inner	   */	  var LongPrototype = Long.prototype;	  /**	   * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.	   * @returns {number}	   */	  LongPrototype.toInt = function toInt() {
	    return this.unsigned ? this.low >>> 0 : this.low;	  };	  /**	   * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).	   * @returns {number}	   */	  LongPrototype.toNumber = function toNumber() {
	    if (this.unsigned)
	      return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
	    return this.high * TWO_PWR_32_DBL + (this.low >>> 0);	  };	  /**	   * Converts the Long to a string written in the specified radix.	   * @param {number=} radix Radix (2-36), defaults to 10	   * @returns {string}	   * @override	   * @throws {RangeError} If `radix` is out of range	   */	  LongPrototype.toString = function toString(radix) {
	    radix = radix || 10;
	    if (radix < 2 || 36 < radix)
	      throw RangeError('radix');
	    if (this.isZero())
	      return '0';
	    if (this.isNegative()) { // Unsigned Longs are never negative
	      if (this.eq(MIN_VALUE)) {
	        // We need to change the Long value before it can be negated, so we remove
	        // the bottom-most digit in this base and then recurse to do the rest.
	        var radixLong = fromNumber(radix),
	            div = this.div(radixLong),
	            rem1 = div.mul(radixLong).sub(this);
	        return div.toString(radix) + rem1.toInt().toString(radix);
	      } else
	        return '-' + this.neg().toString(radix);
	    }
	    // Do several (6) digits each time through the loop, so as to
	    // minimize the calls to the very expensive emulated div.
	    var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned),
	        rem = this;
	    var result = '';
	    while (true) {
	      var remDiv = rem.div(radixToPower),
	          intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0,
	          digits = intval.toString(radix);
	      rem = remDiv;
	      if (rem.isZero())
	        return digits + result;
	      else {
	        while (digits.length < 6)
	          digits = '0' + digits;
	        result = '' + digits + result;
	      }
	    }	  };	  /**	   * Gets the high 32 bits as a signed integer.	   * @returns {number} Signed high bits	   */	  LongPrototype.getHighBits = function getHighBits() {
	    return this.high;	  };	  /**	   * Gets the high 32 bits as an unsigned integer.	   * @returns {number} Unsigned high bits	   */	  LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
	    return this.high >>> 0;	  };	  /**	   * Gets the low 32 bits as a signed integer.	   * @returns {number} Signed low bits	   */	  LongPrototype.getLowBits = function getLowBits() {
	    return this.low;	  };	  /**	   * Gets the low 32 bits as an unsigned integer.	   * @returns {number} Unsigned low bits	   */	  LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
	    return this.low >>> 0;	  };	  /**	   * Gets the number of bits needed to represent the absolute value of this Long.	   * @returns {number}	   */	  LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
	    if (this.isNegative()) // Unsigned Longs are never negative
	      return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
	    var val = this.high != 0 ? this.high : this.low;
	    for (var bit = 31; bit > 0; bit--)
	      if ((val & (1 << bit)) != 0)
	        break;
	    return this.high != 0 ? bit + 33 : bit + 1;	  };	  /**	   * Tests if this Long's value equals zero.	   * @returns {boolean}	   */	  LongPrototype.isZero = function isZero() {
	    return this.high === 0 && this.low === 0;	  };	  /**	   * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.	   * @returns {boolean}	   */	  LongPrototype.eqz = LongPrototype.isZero;	  /**	   * Tests if this Long's value is negative.	   * @returns {boolean}	   */	  LongPrototype.isNegative = function isNegative() {
	    return !this.unsigned && this.high < 0;	  };	  /**	   * Tests if this Long's value is positive.	   * @returns {boolean}	   */	  LongPrototype.isPositive = function isPositive() {
	    return this.unsigned || this.high >= 0;	  };	  /**	   * Tests if this Long's value is odd.	   * @returns {boolean}	   */	  LongPrototype.isOdd = function isOdd() {
	    return (this.low & 1) === 1;	  };	  /**	   * Tests if this Long's value is even.	   * @returns {boolean}	   */	  LongPrototype.isEven = function isEven() {
	    return (this.low & 1) === 0;	  };	  /**	   * Tests if this Long's value equals the specified's.	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.equals = function equals(other) {
	    if (!isLong(other))
	      other = fromValue(other);
	    if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
	      return false;
	    return this.high === other.high && this.low === other.low;	  };	  /**	   * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.	   * @function	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.eq = LongPrototype.equals;	  /**	   * Tests if this Long's value differs from the specified's.	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.notEquals = function notEquals(other) {
	    return !this.eq(/* validates */ other);	  };	  /**	   * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.	   * @function	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.neq = LongPrototype.notEquals;	  /**	   * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.	   * @function	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.ne = LongPrototype.notEquals;	  /**	   * Tests if this Long's value is less than the specified's.	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.lessThan = function lessThan(other) {
	    return this.comp(/* validates */ other) < 0;	  };	  /**	   * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.	   * @function	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.lt = LongPrototype.lessThan;	  /**	   * Tests if this Long's value is less than or equal the specified's.	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
	    return this.comp(/* validates */ other) <= 0;	  };	  /**	   * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.	   * @function	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.lte = LongPrototype.lessThanOrEqual;	  /**	   * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.	   * @function	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.le = LongPrototype.lessThanOrEqual;	  /**	   * Tests if this Long's value is greater than the specified's.	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.greaterThan = function greaterThan(other) {
	    return this.comp(/* validates */ other) > 0;	  };	  /**	   * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.	   * @function	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.gt = LongPrototype.greaterThan;	  /**	   * Tests if this Long's value is greater than or equal the specified's.	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
	    return this.comp(/* validates */ other) >= 0;	  };	  /**	   * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.	   * @function	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.gte = LongPrototype.greaterThanOrEqual;	  /**	   * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.	   * @function	   * @param {!Long|number|string} other Other value	   * @returns {boolean}	   */	  LongPrototype.ge = LongPrototype.greaterThanOrEqual;	  /**	   * Compares this Long's value with the specified's.	   * @param {!Long|number|string} other Other value	   * @returns {number} 0 if they are the same, 1 if the this is greater and -1	   *  if the given one is greater	   */	  LongPrototype.compare = function compare(other) {
	    if (!isLong(other))
	      other = fromValue(other);
	    if (this.eq(other))
	      return 0;
	    var thisNeg = this.isNegative(),
	        otherNeg = other.isNegative();
	    if (thisNeg && !otherNeg)
	      return -1;
	    if (!thisNeg && otherNeg)
	      return 1;
	    // At this point the sign bits are the same
	    if (!this.unsigned)
	      return this.sub(other).isNegative() ? -1 : 1;
	    // Both are positive if at least one is unsigned
	    return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;	  };	  /**	   * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.	   * @function	   * @param {!Long|number|string} other Other value	   * @returns {number} 0 if they are the same, 1 if the this is greater and -1	   *  if the given one is greater	   */	  LongPrototype.comp = LongPrototype.compare;	  /**	   * Negates this Long's value.	   * @returns {!Long} Negated Long	   */	  LongPrototype.negate = function negate() {
	    if (!this.unsigned && this.eq(MIN_VALUE))
	      return MIN_VALUE;
	    return this.not().add(ONE);	  };	  /**	   * Negates this Long's value. This is an alias of {@link Long#negate}.	   * @function	   * @returns {!Long} Negated Long	   */	  LongPrototype.neg = LongPrototype.negate;	  /**	   * Returns the sum of this and the specified Long.	   * @param {!Long|number|string} addend Addend	   * @returns {!Long} Sum	   */	  LongPrototype.add = function add(addend) {
	    if (!isLong(addend))
	      addend = fromValue(addend);
	    // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
	    var a48 = this.high >>> 16;
	    var a32 = this.high & 0xFFFF;
	    var a16 = this.low >>> 16;
	    var a00 = this.low & 0xFFFF;
	    var b48 = addend.high >>> 16;
	    var b32 = addend.high & 0xFFFF;
	    var b16 = addend.low >>> 16;
	    var b00 = addend.low & 0xFFFF;
	    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	    c00 += a00 + b00;
	    c16 += c00 >>> 16;
	    c00 &= 0xFFFF;
	    c16 += a16 + b16;
	    c32 += c16 >>> 16;
	    c16 &= 0xFFFF;
	    c32 += a32 + b32;
	    c48 += c32 >>> 16;
	    c32 &= 0xFFFF;
	    c48 += a48 + b48;
	    c48 &= 0xFFFF;
	    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);	  };	  /**	   * Returns the difference of this and the specified Long.	   * @param {!Long|number|string} subtrahend Subtrahend	   * @returns {!Long} Difference	   */	  LongPrototype.subtract = function subtract(subtrahend) {
	    if (!isLong(subtrahend))
	      subtrahend = fromValue(subtrahend);
	    return this.add(subtrahend.neg());	  };	  /**	   * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.	   * @function	   * @param {!Long|number|string} subtrahend Subtrahend	   * @returns {!Long} Difference	   */	  LongPrototype.sub = LongPrototype.subtract;	  /**	   * Returns the product of this and the specified Long.	   * @param {!Long|number|string} multiplier Multiplier	   * @returns {!Long} Product	   */	  LongPrototype.multiply = function multiply(multiplier) {
	    if (this.isZero())
	      return ZERO;
	    if (!isLong(multiplier))
	      multiplier = fromValue(multiplier);
	    // use wasm support if present
	    if (wasm) {
	      var low = wasm.mul(this.low,
	          this.high,
	          multiplier.low,
	          multiplier.high);
	      return fromBits(low, wasm.get_high(), this.unsigned);
	    }
	    if (multiplier.isZero())
	      return ZERO;
	    if (this.eq(MIN_VALUE))
	      return multiplier.isOdd() ? MIN_VALUE : ZERO;
	    if (multiplier.eq(MIN_VALUE))
	      return this.isOdd() ? MIN_VALUE : ZERO;
	    if (this.isNegative()) {
	      if (multiplier.isNegative())
	        return this.neg().mul(multiplier.neg());
	      else
	        return this.neg().mul(multiplier).neg();
	    } else if (multiplier.isNegative())
	      return this.mul(multiplier.neg()).neg();
	    // If both longs are small, use float multiplication
	    if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
	      return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
	    // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
	    // We can skip products that would overflow.
	    var a48 = this.high >>> 16;
	    var a32 = this.high & 0xFFFF;
	    var a16 = this.low >>> 16;
	    var a00 = this.low & 0xFFFF;
	    var b48 = multiplier.high >>> 16;
	    var b32 = multiplier.high & 0xFFFF;
	    var b16 = multiplier.low >>> 16;
	    var b00 = multiplier.low & 0xFFFF;
	    var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	    c00 += a00 * b00;
	    c16 += c00 >>> 16;
	    c00 &= 0xFFFF;
	    c16 += a16 * b00;
	    c32 += c16 >>> 16;
	    c16 &= 0xFFFF;
	    c16 += a00 * b16;
	    c32 += c16 >>> 16;
	    c16 &= 0xFFFF;
	    c32 += a32 * b00;
	    c48 += c32 >>> 16;
	    c32 &= 0xFFFF;
	    c32 += a16 * b16;
	    c48 += c32 >>> 16;
	    c32 &= 0xFFFF;
	    c32 += a00 * b32;
	    c48 += c32 >>> 16;
	    c32 &= 0xFFFF;
	    c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
	    c48 &= 0xFFFF;
	    return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);	  };	  /**	   * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.	   * @function	   * @param {!Long|number|string} multiplier Multiplier	   * @returns {!Long} Product	   */	  LongPrototype.mul = LongPrototype.multiply;	  /**	   * Returns this Long divided by the specified. The result is signed if this Long is signed or	   *  unsigned if this Long is unsigned.	   * @param {!Long|number|string} divisor Divisor	   * @returns {!Long} Quotient	   */	  LongPrototype.divide = function divide(divisor) {
	    if (!isLong(divisor))
	      divisor = fromValue(divisor);
	    if (divisor.isZero())
	      throw Error('division by zero');
	    // use wasm support if present
	    if (wasm) {
	      // guard against signed division overflow: the largest
	      // negative number / -1 would be 1 larger than the largest
	      // positive number, due to two's complement.
	      if (!this.unsigned &&
	          this.high === -0x80000000 &&
	          divisor.low === -1 && divisor.high === -1) {
	        // be consistent with non-wasm code path
	        return this;
	      }
	      var low = (this.unsigned ? wasm.div_u : wasm.div_s)(
	          this.low,
	          this.high,
	          divisor.low,
	          divisor.high
	      );
	      return fromBits(low, wasm.get_high(), this.unsigned);
	    }
	    if (this.isZero())
	      return this.unsigned ? UZERO : ZERO;
	    var approx, rem, res;
	    if (!this.unsigned) {
	      // This section is only relevant for signed longs and is derived from the
	      // closure library as a whole.
	      if (this.eq(MIN_VALUE)) {
	        if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
	          return MIN_VALUE;  // recall that -MIN_VALUE == MIN_VALUE
	        else if (divisor.eq(MIN_VALUE))
	          return ONE;
	        else {
	          // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
	          var halfThis = this.shr(1);
	          approx = halfThis.div(divisor).shl(1);
	          if (approx.eq(ZERO)) {
	            return divisor.isNegative() ? ONE : NEG_ONE;
	          } else {
	            rem = this.sub(divisor.mul(approx));
	            res = approx.add(rem.div(divisor));
	            return res;
	          }
	        }
	      } else if (divisor.eq(MIN_VALUE))
	        return this.unsigned ? UZERO : ZERO;
	      if (this.isNegative()) {
	        if (divisor.isNegative())
	          return this.neg().div(divisor.neg());
	        return this.neg().div(divisor).neg();
	      } else if (divisor.isNegative())
	        return this.div(divisor.neg()).neg();
	      res = ZERO;
	    } else {
	      // The algorithm below has not been made for unsigned longs. It's therefore
	      // required to take special care of the MSB prior to running it.
	      if (!divisor.unsigned)
	        divisor = divisor.toUnsigned();
	      if (divisor.gt(this))
	        return UZERO;
	      if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
	        return UONE;
	      res = UZERO;
	    }
	    // Repeat the following until the remainder is less than other:  find a
	    // floating-point that approximates remainder / other *from below*, add this
	    // into the result, and subtract it from the remainder.  It is critical that
	    // the approximate value is less than or equal to the real value so that the
	    // remainder never becomes negative.
	    rem = this;
	    while (rem.gte(divisor)) {
	      // Approximate the result of division. This may be a little greater or
	      // smaller than the actual value.
	      approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
	      // We will tweak the approximate result by changing it in the 48-th digit or
	      // the smallest non-fractional digit, whichever is larger.
	      var log2 = Math.ceil(Math.log(approx) / Math.LN2),
	          delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48),
	          // Decrease the approximation until it is smaller than the remainder.  Note
	          // that if it is too large, the product overflows and is negative.
	          approxRes = fromNumber(approx),
	          approxRem = approxRes.mul(divisor);
	      while (approxRem.isNegative() || approxRem.gt(rem)) {
	        approx -= delta;
	        approxRes = fromNumber(approx, this.unsigned);
	        approxRem = approxRes.mul(divisor);
	      }
	      // We know the answer can't be zero... and actually, zero would cause
	      // infinite recursion since we would make no progress.
	      if (approxRes.isZero())
	        approxRes = ONE;
	      res = res.add(approxRes);
	      rem = rem.sub(approxRem);
	    }
	    return res;	  };	  /**	   * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.	   * @function	   * @param {!Long|number|string} divisor Divisor	   * @returns {!Long} Quotient	   */	  LongPrototype.div = LongPrototype.divide;	  /**	   * Returns this Long modulo the specified.	   * @param {!Long|number|string} divisor Divisor	   * @returns {!Long} Remainder	   */	  LongPrototype.modulo = function modulo(divisor) {
	    if (!isLong(divisor))
	      divisor = fromValue(divisor);
	    // use wasm support if present
	    if (wasm) {
	      var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(
	          this.low,
	          this.high,
	          divisor.low,
	          divisor.high
	      );
	      return fromBits(low, wasm.get_high(), this.unsigned);
	    }
	    return this.sub(this.div(divisor).mul(divisor));	  };	  /**	   * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.	   * @function	   * @param {!Long|number|string} divisor Divisor	   * @returns {!Long} Remainder	   */	  LongPrototype.mod = LongPrototype.modulo;	  /**	   * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.	   * @function	   * @param {!Long|number|string} divisor Divisor	   * @returns {!Long} Remainder	   */	  LongPrototype.rem = LongPrototype.modulo;	  /**	   * Returns the bitwise NOT of this Long.	   * @returns {!Long}	   */	  LongPrototype.not = function not() {
	    return fromBits(~this.low, ~this.high, this.unsigned);	  };	  /**	   * Returns the bitwise AND of this Long and the specified.	   * @param {!Long|number|string} other Other Long	   * @returns {!Long}	   */	  LongPrototype.and = function and(other) {
	    if (!isLong(other))
	      other = fromValue(other);
	    return fromBits(this.low & other.low, this.high & other.high, this.unsigned);	  };	  /**	   * Returns the bitwise OR of this Long and the specified.	   * @param {!Long|number|string} other Other Long	   * @returns {!Long}	   */	  LongPrototype.or = function or(other) {
	    if (!isLong(other))
	      other = fromValue(other);
	    return fromBits(this.low | other.low, this.high | other.high, this.unsigned);	  };	  /**	   * Returns the bitwise XOR of this Long and the given one.	   * @param {!Long|number|string} other Other Long	   * @returns {!Long}	   */	  LongPrototype.xor = function xor(other) {
	    if (!isLong(other))
	      other = fromValue(other);
	    return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);	  };	  /**	   * Returns this Long with bits shifted to the left by the given amount.	   * @param {number|!Long} numBits Number of bits	   * @returns {!Long} Shifted Long	   */	  LongPrototype.shiftLeft = function shiftLeft(numBits) {
	    if (isLong(numBits))
	      numBits = numBits.toInt();
	    if ((numBits &= 63) === 0)
	      return this;
	    else if (numBits < 32)
	      return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
	    else
	      return fromBits(0, this.low << (numBits - 32), this.unsigned);	  };	  /**	   * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.	   * @function	   * @param {number|!Long} numBits Number of bits	   * @returns {!Long} Shifted Long	   */	  LongPrototype.shl = LongPrototype.shiftLeft;	  /**	   * Returns this Long with bits arithmetically shifted to the right by the given amount.	   * @param {number|!Long} numBits Number of bits	   * @returns {!Long} Shifted Long	   */	  LongPrototype.shiftRight = function shiftRight(numBits) {
	    if (isLong(numBits))
	      numBits = numBits.toInt();
	    if ((numBits &= 63) === 0)
	      return this;
	    else if (numBits < 32)
	      return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
	    else
	      return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);	  };	  /**	   * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.	   * @function	   * @param {number|!Long} numBits Number of bits	   * @returns {!Long} Shifted Long	   */	  LongPrototype.shr = LongPrototype.shiftRight;	  /**	   * Returns this Long with bits logically shifted to the right by the given amount.	   * @param {number|!Long} numBits Number of bits	   * @returns {!Long} Shifted Long	   */	  LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
	    if (isLong(numBits))
	      numBits = numBits.toInt();
	    numBits &= 63;
	    if (numBits === 0)
	      return this;
	    else {
	      var high = this.high;
	      if (numBits < 32) {
	        var low = this.low;
	        return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
	      } else if (numBits === 32)
	        return fromBits(high, 0, this.unsigned);
	      else
	        return fromBits(high >>> (numBits - 32), 0, this.unsigned);
	    }	  };	  /**	   * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.	   * @function	   * @param {number|!Long} numBits Number of bits	   * @returns {!Long} Shifted Long	   */	  LongPrototype.shru = LongPrototype.shiftRightUnsigned;	  /**	   * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.	   * @function	   * @param {number|!Long} numBits Number of bits	   * @returns {!Long} Shifted Long	   */	  LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;	  /**	   * Converts this Long to signed.	   * @returns {!Long} Signed long	   */	  LongPrototype.toSigned = function toSigned() {
	    if (!this.unsigned)
	      return this;
	    return fromBits(this.low, this.high, false);	  };	  /**	   * Converts this Long to unsigned.	   * @returns {!Long} Unsigned long	   */	  LongPrototype.toUnsigned = function toUnsigned() {
	    if (this.unsigned)
	      return this;
	    return fromBits(this.low, this.high, true);	  };	  /**	   * Converts this Long to its byte representation.	   * @param {boolean=} le Whether little or big endian, defaults to big endian	   * @returns {!Array.<number>} Byte representation	   */	  LongPrototype.toBytes = function toBytes(le) {
	    return le ? this.toBytesLE() : this.toBytesBE();	  };	  /**	   * Converts this Long to its little endian byte representation.	   * @returns {!Array.<number>} Little endian byte representation	   */	  LongPrototype.toBytesLE = function toBytesLE() {
	    var hi = this.high,
	        lo = this.low;
	    return [
	      lo & 0xff,
	      lo >>> 8 & 0xff,
	      lo >>> 16 & 0xff,
	      lo >>> 24,
	      hi & 0xff,
	      hi >>> 8 & 0xff,
	      hi >>> 16 & 0xff,
	      hi >>> 24
	    ];	  };	  /**	   * Converts this Long to its big endian byte representation.	   * @returns {!Array.<number>} Big endian byte representation	   */	  LongPrototype.toBytesBE = function toBytesBE() {
	    var hi = this.high,
	        lo = this.low;
	    return [
	      hi >>> 24,
	      hi >>> 16 & 0xff,
	      hi >>> 8 & 0xff,
	      hi & 0xff,
	      lo >>> 24,
	      lo >>> 16 & 0xff,
	      lo >>> 8 & 0xff,
	      lo & 0xff
	    ];	  };	  /**	   * Creates a Long from its byte representation.	   * @param {!Array.<number>} bytes Byte representation	   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed	   * @param {boolean=} le Whether little or big endian, defaults to big endian	   * @returns {Long} The corresponding Long value	   */	  Long.fromBytes = function fromBytes(bytes, unsigned, le) {
	    return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);	  };	  /**	   * Creates a Long from its little endian byte representation.	   * @param {!Array.<number>} bytes Little endian byte representation	   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed	   * @returns {Long} The corresponding Long value	   */	  Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
	    return new Long(
	        bytes[0] |
	        bytes[1] << 8 |
	        bytes[2] << 16 |
	        bytes[3] << 24,
	        bytes[4] |
	        bytes[5] << 8 |
	        bytes[6] << 16 |
	        bytes[7] << 24,
	        unsigned
	    );	  };	  /**	   * Creates a Long from its big endian byte representation.	   * @param {!Array.<number>} bytes Big endian byte representation	   * @param {boolean=} unsigned Whether unsigned or not, defaults to signed	   * @returns {Long} The corresponding Long value	   */	  Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
	    return new Long(
	        bytes[4] << 24 |
	        bytes[5] << 16 |
	        bytes[6] << 8 |
	        bytes[7],
	        bytes[0] << 24 |
	        bytes[1] << 16 |
	        bytes[2] << 8 |
	        bytes[3],
	        unsigned
	    );	  };	  var Tools = {};	  Tools.printValue = function (str_list, name, value, indent) {
	    if (indent < 0) {
	      indent = 2;
	    }
	    var tmp_str = "";
	    for (var i = 0; i < indent; ++i)
	      tmp_str += " ";
	    tmp_str = tmp_str + "[" + name + "]: " + value.toString() + "\n";
	    str_list.push(tmp_str);	  };	  // exports.Tools = Tools;	  // pack[unpack] helper function, cfgData start	  var TDR_DATA_TYPE = {
	    /** char ~ uint64 ~ float64 的数值定义与TSBuffer.DATA_TYPE一致 */
	    char: 0,
	    int8: 1,
	    uint8: 2,
	    int16: 3,
	    uint16: 4,
	    int32: 5,
	    uint32: 6,
	    int64: 7,
	    uint64: 8,
	    float32: 9,
	    float64: 10,
	    /** 嵌入的另外一个tdr的结构体, 构成协议的时候直接引用协议就可以了 */
	    tdr: 11,
	    string: 12	  };	  var WRITE_FUNC_MAP = [
	    "writeInt8",
	    "writeInt8",
	    "writeUInt8",
	    "writeInt16",
	    "writeUInt16",
	    "writeInt32",
	    "writeUInt32",
	    "writeInt64",
	    "writeUInt64",
	    "writeFloat",
	    "writeDouble"	  ];	  var WRITE_VAR_FUNC_MAP = [
	    "",
	    "",
	    "",
	    "writeVarInt16",
	    "writeVarUInt16",
	    "writeVarInt32",
	    "writeVarUInt32",
	    "writeVarInt64",
	    "writeVarUInt64",
	    "",
	    ""	  ];	  var READ_FUNC_MAP = [
	    "readInt8",
	    "readInt8",
	    "readUInt8",
	    "readInt16",
	    "readUInt16",
	    "readInt32",
	    "readUInt32",
	    "readInt64",
	    "readUInt64",
	    "readFloat",
	    "readDouble"	  ];	  var READ_VAR_FUNC_MAP = [
	    "",
	    "",
	    "",
	    "readVarInt16",
	    "readVarUInt16",
	    "readVarInt32",
	    "readVarUInt32",
	    "readVarInt64",
	    "readVarUInt64",
	    "",
	    ""	  ];	  var TDR_TLV_TYPE = [
	    "TDR_TYPE_ID_1_BYTE",
	    "TDR_TYPE_ID_1_BYTE",
	    "TDR_TYPE_ID_1_BYTE",
	    "TDR_TYPE_ID_2_BYTE",
	    "TDR_TYPE_ID_2_BYTE",
	    "TDR_TYPE_ID_4_BYTE",
	    "TDR_TYPE_ID_4_BYTE",
	    "TDR_TYPE_ID_8_BYTE",
	    "TDR_TYPE_ID_8_BYTE",
	    "TDR_TYPE_ID_4_BYTE",
	    "TDR_TYPE_ID_8_BYTE",
	    "TDR_TYPE_ID_LENGTH_DELIMITED",
	    "TDR_TYPE_ID_LENGTH_DELIMITED",
	    "TDR_TYPE_ID_LENGTH_DELIMITED",
	    "TDR_TYPE_ID_LENGTH_DELIMITED",
	    "TDR_TYPE_ID_LENGTH_DELIMITED",
	    "TDR_TYPE_ID_LENGTH_DELIMITED"	  ];	  var genReadTLVTdr = function (nouse_desc, tdr, entry, nouse_indent, read, useVarInt) {
	    let ret = new TdrReadRet();
	    /* read struct/union length */
	    let iMetaLength = read.readInt32(ret);
	    if (ErrorType.TDR_NO_ERROR != ret.ret) return ret
	    /* read value */
	    let ref;
	    if (tdr.select) {
	      ref = {selector: 0};
	      ret.ret = entry.unpackDetailTLV(ref, read, iMetaLength, useVarInt);
	    }
	    else {
	      ret.ret = entry.unpackDetailTLV(read, iMetaLength, useVarInt);
	    }
	    if (ErrorType.TDR_NO_ERROR != ret.ret) return ret
	    if (tdr.select)
	      this[tdr.select] = ref.selector;
	    return ret	  };	  var genReadTLVType = function (nouse_desc, tdr, route, nouse_indent, read, useVarInt) {
	    let ret = new TdrReadRet();
	    var map = useVarInt ? READ_VAR_FUNC_MAP : READ_FUNC_MAP;
	    /* read value */
	    // trans meta-prog only support two level
	    if (route.indexOf(';') > -1) {
	      let [r1, r2] = route.split(';');
	      this[r1][r2] = read[map[tdr.dataType]](ret);
	    } else {
	      this[route] = read[map[tdr.dataType]](ret);
	    }
	    if (ErrorType.TDR_NO_ERROR != ret.ret) return ret
	    return ret	  };	  var genTLVTagid = function (nouse_desc, tdr, nouse_indent, index, useVarInt, write) {
	    /* write tagid */
	    let iTagid, ret;
	    iTagid = TdrTLV.makeTag(index, useVarInt ? TdrTLVTypeId.TDR_TYPE_ID_VARINT : TdrTLVTypeId[TDR_TLV_TYPE[tdr.dataType]]);
	    ret = write.writeVarUInt32(iTagid);
	    if (ErrorType.TDR_NO_ERROR != ret)
	      return ret;
	    // final success
	    return ret;	  };	  var genTLVType = function (nouse_desc, tdr, nouse_indent, index, useVarInt, write) {
	    let map = useVarInt ? WRITE_VAR_FUNC_MAP : WRITE_FUNC_MAP;
	    let ret;
	    ret = genTLVTagid.bind(this)(null, tdr, 0, index, useVarInt, write);
	    if (ErrorType.TDR_NO_ERROR != ret)
	      return ret;
	    /* write value */
	    ret = write[map[tdr.dataType]](this[tdr.name]);
	    if (ErrorType.TDR_NO_ERROR != ret)
	      return ret;
	    // final success
	    return ret;	  };	  var genTLVArr = function (nouse_desc, tdr, nouse_indent, index, useVarInt, write) {
	    let ret;
	    let map = useVarInt ? WRITE_VAR_FUNC_MAP : WRITE_FUNC_MAP;
	    if (this[tdr.refer] > 0) {
	      ret = genTLVTagid.bind(this)(null, tdr, 0, index, useVarInt, write);
	      if (ErrorType.TDR_NO_ERROR != ret)
	        return ret;
	    }
	    /* reserve for array length */
	    let iArrayPos = write.getUsedSize();
	    ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	    if (ErrorType.TDR_NO_ERROR != ret) return ret;
	    for (let myrefer_n = 0; myrefer_n < this[tdr.refer]; ++myrefer_n) {
	      if (tdr.dataType < map.length) {
	        /* write value */
	        ret = write[map[tdr.dataType]](this[tdr.name][myrefer_n]);
	        if (ErrorType.TDR_NO_ERROR != ret)
	          return ret;
	      }
	      else {
	        /* reserve for struct/union length */
	        let iMetaPos = write.getUsedSize();
	        ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	        if (ErrorType.TDR_NO_ERROR != ret)
	          return ret;
	        /* write value */
	        // union or struct
	        if (typeof tdr.select !== 'undefined') {
	          let select;
	          let ss = tdr.select.split('.');
	          if (ss.length > 1) {
	            select = this[ss[0]][ss[1]];
	          } else {
	            select = this[tdr.select];
	          }
	          ret = this[tdr.name][myrefer_n].packDetailTLV(select, write, useVarInt);
	        } else {
	          ret = this[tdr.name][myrefer_n].packDetailTLV(write, useVarInt);
	        }
	        if (ErrorType.TDR_NO_ERROR != ret)
	          return ret;
	        /* write struct/union length */
	        let iMetaSize = write.getUsedSize() - iMetaPos - Int32Array.BYTES_PER_ELEMENT;
	        ret = write.writeInt32(iMetaSize, iMetaPos);
	        if (ErrorType.TDR_NO_ERROR != ret)
	          return ret;
	      }
	    }
	    /* write array length */
	    let iArraySize = write.getUsedSize() - iArrayPos - Int32Array.BYTES_PER_ELEMENT;
	    ret = write.writeInt32(iArraySize, iArrayPos);
	    if (ErrorType.TDR_NO_ERROR != ret)
	      return ret;
	    // final success
	    return ret;	  };	  // pack[unpack] helper end	  var StructTdr = (function () {
	    function StructTdr() {
	    }
	    StructTdr.prototype.packTLV = function (data, useVarInt) {
	      useVarInt = (useVarInt === undefined) ? true : useVarInt;
	      if (data.arrayBuffer == undefined || data.arrayBuffer.byteLength == 0 || data.size > data.arrayBuffer.byteLength)
	        return ErrorType.TDR_ERR_INVALID_BUFFER_PARAMETER;
	      var ret = ErrorType.TDR_NO_ERROR;
	      var write = new TdrWriteBuf(data.arrayBuffer, data.size, data.offset);
	      /* write the TLV magic */
	      if (useVarInt)
	        ret = write.writeUInt8(TLV_MAGIC.TLV_MAGIC_VARINT);
	      else
	        ret = write.writeUInt8(TLV_MAGIC.TLV_MAGIC_NOVARINT);
	      if (ErrorType.TDR_NO_ERROR != ret)
	        return ret;
	      /* reserve for struct length */
	      var pos = write.getUsedSize();
	      ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	      if (ErrorType.TDR_NO_ERROR != ret)
	        return ret;
	      ret = this.packDetailTLV(write, useVarInt);
	      if (ErrorType.TDR_NO_ERROR != ret)
	        return ret;
	      /* write struct length */
	      write.writeInt32(write.getUsedSize(), pos);
	      data.usedSize = write.getUsedSize();
	      return ret;
	    };
	    StructTdr.prototype.unpackTLV = function (data) {
	      if (data.arrayBuffer == undefined || data.arrayBuffer.byteLength == 0 || data.size > data.arrayBuffer.byteLength)
	        return ErrorType.TDR_ERR_INVALID_BUFFER_PARAMETER;
	      if (data.size < TdrTLV.TLV_MSG_MIN_SIZE)
	        return ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	      var read = new TdrReadBuf(data.arrayBuffer, data.size, data.offset);
	      var ret = new TdrReadRet();
	      var useVarInt = true;
	      var tlvMagic = read.readUInt8(ret);
	      if (ErrorType.TDR_NO_ERROR != ret.ret)
	        return ret.ret;
	      if (TLV_MAGIC.TLV_MAGIC_VARINT == tlvMagic) {
	        useVarInt = true;
	      }
	      else if (TLV_MAGIC.TLV_MAGIC_NOVARINT == tlvMagic) {
	        useVarInt = false;
	      }
	      else {
	        return ErrorType.TDR_ERR_BAD_TLV_MAGIC;
	      }
	      var iMsgSize = read.readInt32(ret);
	      if (data.size < iMsgSize)
	        return ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	      ret.ret = this.unpackDetailTLV(read, iMsgSize - TdrTLV.TLV_MSG_MIN_SIZE, useVarInt);
	      if (ErrorType.TDR_NO_ERROR != ret.ret)
	        return ret.ret;
	      data.usedSize = read.getUsedSize();
	      return ret.ret;
	    };
	    StructTdr.prototype._packDetailTLV = function (write, useVarInt) {
	      var ret = ErrorType.TDR_NO_ERROR;
	      for (let i = 0; i < this._propsInfo.length; i++) {
	        let tdr = this._propsInfo[i];
	        /* packTLV member: xx */
	        if (tdr.count) {
	          if (tdr.refer) {
	            if (this[tdr.refer] > tdr.countValue) {
	              return ErrorType.TDR_ERR_REFER_SURPASS_COUNT;
	            }
	            // varInt
	            let useVarRunTime = WRITE_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	            ret = genTLVArr.bind(this)(null, tdr, null, tdr.id, useVarRunTime, write);
	            if (ErrorType.TDR_NO_ERROR != ret)
	              return ret;
	          }
	        }
	        else if (tdr.stringSize) {
	          ret = genTLVTagid.bind(this)(null, tdr, null, tdr.id, false, write);
	          if (ErrorType.TDR_NO_ERROR != ret)
	            return ret;
	          /* reserve for string length */
	          let iStringPos = write.getUsedSize();
	          ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	          /* check the string length */
	          let encodeString = TdrUtil.utf8Encode(this[tdr.name]);
	          let iStringLength = TdrUtil.cstrlen(encodeString);
	          if (iStringLength >= tdr.stringSizeValue) return ErrorType.TDR_ERR_STR_LEN_TOO_BIG;
	          ret = write.writeCString(encodeString, iStringLength);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	          /* write string length */
	          let iStringSize = write.getUsedSize() - iStringPos - Int32Array.BYTES_PER_ELEMENT;
	          ret = write.writeInt32(iStringSize, iStringPos);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	        }
	        else if (tdr.dataType === TDR_DATA_TYPE.tdr) {
	          ret = genTLVTagid.bind(this)(null, tdr, null, tdr.id, false, write);
	          if (ErrorType.TDR_NO_ERROR != ret)
	            return ret;
	          /* reserve for struct/union length */
	          let iMetaPos = write.getUsedSize();
	          ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	          /* write value */
	          // union or struct
	          if (typeof tdr.select !== 'undefined') {
	            let select;
	            let ss = tdr.select.split('.');
	            if (ss.length > 1) {
	              select = this[ss[0]][ss[1]];
	            } else {
	              select = this[tdr.select];
	            }
	            ret = this[tdr.name].packDetailTLV(select, write, useVarInt);
	            // ret = this[tdr.name].packDetailTLV(this[tdr.select], write, useVarInt);
	          } else {
	            ret = this[tdr.name].packDetailTLV(write, useVarInt);
	          }
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	          /* write struct/union length */
	          let iMetaSize = write.getUsedSize() - iMetaPos - Int32Array.BYTES_PER_ELEMENT;
	          ret = write.writeInt32(iMetaSize, iMetaPos);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	        }
	        else {
	          // varInt
	          let useVarRunTime = WRITE_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	          ret = genTLVType.bind(this)(null, tdr, null, tdr.id, useVarRunTime, write);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	        }
	      }
	      return ret;
	    };
	    StructTdr.prototype._unpackDetailTLV = function (read, length, useVarInt) {
	      if (null == read || length <= 0)
	        return ErrorType.TDR_ERR_ARG_IS_NULL;
	      let ret = new TdrReadRet();
	      let iTagId = 0;
	      let iFiledId = 0;
	      let iUsed = read.getUsedSize();
	      while (read.getUsedSize() < iUsed + length) {
	        /* read tagid */
	        iTagId = read.readVarUInt32(ret);
	        if (ErrorType.TDR_NO_ERROR != ret.ret)
	          return ret.ret;
	        iFiledId = TdrTLV.getFieldId(iTagId);
	        let tdr = this._propsInfo.find(t => t.id === iFiledId);
	        if (tdr) {
	          /* unpackTLV member: xx */
	          if (tdr.count) {
	            /* read array length */
	            let iArraryLen = read.readInt32(ret);
	            if (ErrorType.TDR_NO_ERROR != ret.ret)
	              return ret.ret;
	            /* check if array is null */
	            if (0 == iArraryLen)
	              return ErrorType.TDR_ERR_NULL_ARRAY;
	            let iArrayUsed = read.getUsedSize();
	            for (let myarray_i = 0; myarray_i < tdr.countValue; ++myarray_i) {
	              let entry = this[tdr.name][myarray_i];
	              if (tdr.dataType == TDR_DATA_TYPE.tdr) {
	                let ret = genReadTLVTdr.bind(this)(null, tdr, entry, 0, read, useVarInt);
	                if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	              }
	              else {
	                // varInt
	                let useVarRunTime = READ_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	                ret = genReadTLVType.bind(this)(null, tdr, `${tdr.name};${myarray_i}`, 0, read, useVarRunTime);
	                if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	              }
	              if (read.getUsedSize() > iArrayUsed + iArraryLen)
	                return ErrorType.TDR_ERR_UNMATCHED_LENGTH;
	              if (tdr.refer) {
	                if (read.getUsedSize() == iArrayUsed + iArraryLen) {
	                  this[tdr.refer] = myarray_i + 1;
	                  break;
	                }
	              }
	            }
	          }
	          else if (tdr.stringSize) {
	            /* read string length */
	            let iStringLength = read.readInt32(ret);
	            if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	            /* check string length */
	            if (iStringLength >= tdr.stringSizeValue)
	              return ErrorType.TDR_ERR_STR_LEN_TOO_BIG;
	            /* read value */
	            this[tdr.name] = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	            if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	          }
	          else if (tdr.dataType == TDR_DATA_TYPE.tdr) {
	            let ret = genReadTLVTdr.bind(this)(null, tdr, this[tdr.name], 0, read, useVarInt);
	            if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	          }
	          else {
	            // varInt
	            let useVarRunTime = READ_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	            ret = genReadTLVType.bind(this)(null, tdr, tdr.name, 0, read, useVarRunTime);
	            if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	          }
	        } else {
	          return ErrorType.TDR_ERR_UNKNOWN_TYPE_ID
	        }
	      }
	      return ret.ret
	    };
	    StructTdr.prototype.load = function (data) {
	      if (data.arrayBuffer == undefined || data.arrayBuffer.byteLength == 0 || data.size > data.arrayBuffer.byteLength)
	        return ErrorType.TDR_ERR_INVALID_BUFFER_PARAMETER;
	      var srcBuf = new TdrReadBuf(data.arrayBuffer, data.size, data.offset);
	      var ret = this.loadDetail(srcBuf);
	      data.usedSize = srcBuf.getUsedSize();
	      return ret;
	    };
	    StructTdr.prototype.visualize = function (indent) {
	      var ret = ErrorType.TDR_NO_ERROR;
	      var msg_list = new Array();
	      var curr_indent = indent;
	      var fixed_indent = indent;
	      ret = this.visualizeDetail(msg_list, curr_indent, fixed_indent);
	      console.log(msg_list.join());
	      return msg_list.join();
	    };
	    return StructTdr;	  }());	  var UnionTdr = (function () {
	    function UnionTdr() {
	    }
	    UnionTdr.prototype.packTLV = function (selector, data, useVarInt) {
	      useVarInt = (useVarInt === undefined) ? true : useVarInt;
	      if (data.arrayBuffer == undefined || data.arrayBuffer.byteLength == 0 || data.size > data.arrayBuffer.byteLength)
	        return ErrorType.TDR_ERR_INVALID_BUFFER_PARAMETER;
	      var ret = ErrorType.TDR_NO_ERROR;
	      var write = new TdrWriteBuf(data.arrayBuffer, data.size, data.offset);
	      /* write the TLV magic */
	      if (useVarInt)
	        ret = write.writeUInt8(TLV_MAGIC.TLV_MAGIC_VARINT);
	      else
	        ret = write.writeUInt8(TLV_MAGIC.TLV_MAGIC_NOVARINT);
	      if (ErrorType.TDR_NO_ERROR != ret)
	        return ret;
	      /* reserve for union length */
	      var pos = write.getUsedSize();
	      ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	      if (ErrorType.TDR_NO_ERROR != ret)
	        return ret;
	      ret = this.packDetailTLV(selector, write, useVarInt);
	      if (ErrorType.TDR_NO_ERROR != ret)
	        return ret;
	      /* write union length */
	      write.writeInt32(write.getUsedSize(), pos);
	      data.usedSize = write.getUsedSize();
	      return ret;
	    };
	    UnionTdr.prototype._packDetailTLV = function (selector, write, useVarInt) {
	      var ret = ErrorType.TDR_NO_ERROR;
	      /* packTLV member: xx */
	      // console.log('--->tdrTools.selector:', selector)
	      let tdr = this._propsInfo.find(t => t.id === selector);
	      // console.log('--->tdrTools.,this._propsInfo:', this._propsInfo)
	      if (tdr) {
	        if (tdr.count) {
	          if (tdr.refer) {
	            if (this[tdr.refer] > tdr.countValue) {
	              return ErrorType.TDR_ERR_REFER_SURPASS_COUNT;
	            }
	            //has varInt
	            let useVarRunTime = WRITE_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	            ret = genTLVArr.bind(this)(null, tdr, null, tdr.id, useVarRunTime, write);
	            if (ErrorType.TDR_NO_ERROR != ret)
	              return ret;
	          }
	        }
	        else if (tdr.stringSize) {
	          ret = genTLVTagid.bind(this)(null, tdr, null, tdr.id, false, write);
	          if (ErrorType.TDR_NO_ERROR != ret)
	            return ret;
	          /* reserve for string length */
	          let iStringPos = write.getUsedSize();
	          ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	          /* check the string length */
	          let encodeString = TdrUtil.utf8Encode(this[tdr.name]);
	          let iStringLength = TdrUtil.cstrlen(encodeString);
	          if (iStringLength >= tdr.stringSizeValue) return ErrorType.TDR_ERR_STR_LEN_TOO_BIG;
	          ret = write.writeCString(encodeString, iStringLength);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	          /* write string length */
	          let iStringSize = write.getUsedSize() - iStringPos - Int32Array.BYTES_PER_ELEMENT;
	          ret = write.writeInt32(iStringSize, iStringPos);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	        }
	        else if (tdr.dataType === TDR_DATA_TYPE.tdr) {
	          ret = genTLVTagid.bind(this)(null, tdr, null, tdr.id, false, write);
	          if (ErrorType.TDR_NO_ERROR != ret)
	            return ret;
	          /* reserve for struct/union length */
	          let iMetaPos = write.getUsedSize();
	          ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	          /* write value */
	          // union or struct
	          if (typeof tdr.select !== 'undefined') {
	            // union嵌套union , 不可能?
	            let select;
	            let ss = tdr.select.split('.');
	            if (ss.length > 1) {
	              select = this[ss[0]][ss[1]];
	            } else {
	              select = this[tdr.select];
	            }
	            ret = this[tdr.name].packDetailTLV(select, write, useVarInt);
	            // ret = this[tdr.name].packDetailTLV(this[tdr.select], write, useVarInt);
	          } else {
	            ret = this[tdr.name].packDetailTLV(write, useVarInt);
	          }
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	          /* write struct/union length */
	          let iMetaSize = write.getUsedSize() - iMetaPos - Int32Array.BYTES_PER_ELEMENT;
	          ret = write.writeInt32(iMetaSize, iMetaPos);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	        }
	        else {
	          //has varInt
	          let useVarRunTime = WRITE_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	          ret = genTLVType.bind(this)(null, tdr, null, tdr.id, useVarRunTime, write);
	          if (ErrorType.TDR_NO_ERROR != ret) return ret;
	        }
	      } else {
	        return ErrorType.TDR_ERR_UNION_SELECTE_FIELD_IS_NULL
	      }
	      return ret;
	    };
	    UnionTdr.prototype.unpackTLV = function (selector, data) {
	      if (data.arrayBuffer == undefined || data.arrayBuffer.byteLength == 0 || data.size > data.arrayBuffer.byteLength)
	        return ErrorType.TDR_ERR_INVALID_BUFFER_PARAMETER;
	      if (data.size < TdrTLV.TLV_MSG_MIN_SIZE)
	        return ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	      var read = new TdrReadBuf(data.arrayBuffer, data.size, data.offset);
	      var ret = new TdrReadRet();
	      var useVarInt = true;
	      var tlvMagic = read.readUInt8(ret);
	      if (ErrorType.TDR_NO_ERROR != ret.ret)
	        return ret.ret;
	      if (TLV_MAGIC.TLV_MAGIC_VARINT == tlvMagic) {
	        useVarInt = true;
	      }
	      else if (TLV_MAGIC.TLV_MAGIC_NOVARINT == tlvMagic) {
	        useVarInt = false;
	      }
	      else {
	        return ErrorType.TDR_ERR_BAD_TLV_MAGIC;
	      }
	      var iMsgSize = read.readInt32(ret);
	      if (data.size < iMsgSize)
	        return ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	      ret.ret = this.unpackDetailTLV(selector, read, iMsgSize - TdrTLV.TLV_MSG_MIN_SIZE, useVarInt);
	      if (ErrorType.TDR_NO_ERROR != ret.ret)
	        return ret.ret;
	      data.usedSize = read.getUsedSize();
	      return ret.ret;
	    };
	    UnionTdr.prototype._unpackDetailTLV = function (selector, read, length, useVarInt) {
	      if (null == read || length <= 0)
	        return ErrorType.TDR_ERR_ARG_IS_NULL;
	      let ret = new TdrReadRet();
	      let iTagId = 0;
	      let iFiledId = 0;
	      let iUsed = read.getUsedSize();
	      /* read tagid */
	      iTagId = read.readVarUInt32(ret);
	      if (ErrorType.TDR_NO_ERROR != ret.ret)
	        return ret.ret;
	      iFiledId = TdrTLV.getFieldId(iTagId);
	      /* unpackTLV member: xxxx */
	      // get select
	      let tdr = this._propsInfo.find(t => t.id === iFiledId);
	      if (tdr) {
	        if (tdr.count) {
	          /* read array length */
	          let iArraryLen = read.readInt32(ret);
	          if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	          /* check if array is null */
	          if (0 == iArraryLen)
	            return ErrorType.TDR_ERR_NULL_ARRAY;
	          let iArrayUsed = read.getUsedSize();
	          for (let myarray_i = 0; myarray_i < tdr.countValue; ++myarray_i) {
	            let entry = this[tdr.name][myarray_i];
	            if (tdr.dataType === TDR_DATA_TYPE.tdr) {
	              let ret = genReadTLVTdr.bind(this)(null, tdr, entry, 0, read, useVarInt);
	              if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	            }
	            else {
	              // varInt
	              let useVarRunTime = READ_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	              ret = genReadTLVType.bind(this)(null, tdr, `${tdr.name};${myarray_i}`, 0, read, useVarRunTime);
	              if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	            }
	            if (read.getUsedSize() > iArrayUsed + iArraryLen)
	              return ErrorType.TDR_ERR_UNMATCHED_LENGTH;
	            if (tdr.refer) {
	              if (read.getUsedSize() == iArrayUsed + iArraryLen) {
	                this[tdr.refer] = myarray_i + 1;
	                break;
	              }
	            }
	          }
	        }
	        else if (tdr.stringSize) {
	          /* read string length */
	          let iStringLength = read.readInt32(ret);
	          if (ErrorType.TDR_NO_ERROR != ret.ret)
	            return ret.ret;
	          /* check string length */
	          if (iStringLength >= tdr.stringSizeValue)
	            return ErrorType.TDR_ERR_STR_LEN_TOO_BIG;
	          /* read value */
	          this[tdr.name] = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	          if (ErrorType.TDR_NO_ERROR != ret.ret)
	            return ret.ret;
	        }
	        else if (tdr.dataType === TDR_DATA_TYPE.tdr) {
	          let ret = genReadTLVTdr.bind(this)(null, tdr, this[tdr.name], 0, read, useVarInt);
	          if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	        }
	        else {
	          // varInt
	          let useVarRunTime = READ_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	          ret = genReadTLVType.bind(this)(null, tdr, tdr.name, 0, read, useVarRunTime);
	          if (ErrorType.TDR_NO_ERROR != ret.ret) return ret.ret;
	        }
	      } else {
	        return ErrorType.TDR_ERR_UNKNOWN_TYPE_ID;
	      }
	      if (read.getUsedSize() > iUsed + length)
	        return ErrorType.TDR_ERR_UNMATCHED_LENGTH;
	      selector.selector = iFiledId;
	      return ret.ret;
	    };
	    UnionTdr.prototype.visualize = function (indent) {
	      var ret = ErrorType.TDR_NO_ERROR;
	      ret = this.visualizeDetail(indent);
	      return ret;
	    };
	    return UnionTdr;	  }());	  	  /// <reference path="TdrTLV.ts" />	  var ErrorType;	  (function (ErrorType) {
	    ErrorType[ErrorType["TDR_NO_ERROR"] = 0] = "TDR_NO_ERROR";
	    ErrorType[ErrorType["TDR_ERR_SHORT_BUF_FOR_WRITE"] = -1] = "TDR_ERR_SHORT_BUF_FOR_WRITE";
	    ErrorType[ErrorType["TDR_ERR_SHORT_BUF_FOR_READ"] = -2] = "TDR_ERR_SHORT_BUF_FOR_READ";
	    ErrorType[ErrorType["TDR_ERR_STR_LEN_TOO_BIG"] = -3] = "TDR_ERR_STR_LEN_TOO_BIG";
	    ErrorType[ErrorType["TDR_ERR_STR_LEN_TOO_SMALL"] = -4] = "TDR_ERR_STR_LEN_TOO_SMALL";
	    ErrorType[ErrorType["TDR_ERR_STR_LEN_CONFLICT"] = -5] = "TDR_ERR_STR_LEN_CONFLICT";
	    ErrorType[ErrorType["TDR_ERR_MINUS_REFER_VALUE"] = -6] = "TDR_ERR_MINUS_REFER_VALUE";
	    ErrorType[ErrorType["TDR_ERR_REFER_SURPASS_COUNT"] = -7] = "TDR_ERR_REFER_SURPASS_COUNT";
	    ErrorType[ErrorType["TDR_ERR_ARG_IS_NULL"] = -8] = "TDR_ERR_ARG_IS_NULL";
	    ErrorType[ErrorType["TDR_ERR_CUTVER_TOO_SMALL"] = -9] = "TDR_ERR_CUTVER_TOO_SMALL";
	    ErrorType[ErrorType["TDR_ERR_CUTVER_CONFILICT"] = -10] = "TDR_ERR_CUTVER_CONFILICT";
	    ErrorType[ErrorType["TDR_ERR_PARSE_TDRIP_FAILED"] = -11] = "TDR_ERR_PARSE_TDRIP_FAILED";
	    ErrorType[ErrorType["TDR_ERR_INVALID_TDRIP_VALUE"] = -12] = "TDR_ERR_INVALID_TDRIP_VALUE";
	    ErrorType[ErrorType["TDR_ERR_INVALID_TDRTIME_VALUE"] = -13] = "TDR_ERR_INVALID_TDRTIME_VALUE";
	    ErrorType[ErrorType["TDR_ERR_INVALID_TDRDATE_VALUE"] = -14] = "TDR_ERR_INVALID_TDRDATE_VALUE";
	    ErrorType[ErrorType["TDR_ERR_INVALID_TDRDATETIME_VALUE"] = -15] = "TDR_ERR_INVALID_TDRDATETIME_VALUE";
	    ErrorType[ErrorType["TDR_ERR_FUNC_LOCALTIME_FAILED"] = -16] = "TDR_ERR_FUNC_LOCALTIME_FAILED";
	    ErrorType[ErrorType["TDR_ERR_INVALID_HEX_STR_LEN"] = -17] = "TDR_ERR_INVALID_HEX_STR_LEN";
	    ErrorType[ErrorType["TDR_ERR_INVALID_HEX_STR_FORMAT"] = -18] = "TDR_ERR_INVALID_HEX_STR_FORMAT";
	    ErrorType[ErrorType["TDR_ERR_INVALID_BUFFER_PARAMETER"] = -19] = "TDR_ERR_INVALID_BUFFER_PARAMETER";
	    ErrorType[ErrorType["TDR_ERR_NET_CUTVER_INVALID"] = -20] = "TDR_ERR_NET_CUTVER_INVALID";
	    ErrorType[ErrorType["TDR_ERR_ACCESS_VILOATION_EXCEPTION"] = -21] = "TDR_ERR_ACCESS_VILOATION_EXCEPTION";
	    ErrorType[ErrorType["TDR_ERR_ARGUMENT_NULL_EXCEPTION"] = -22] = "TDR_ERR_ARGUMENT_NULL_EXCEPTION";
	    ErrorType[ErrorType["TDR_ERR_USE_HAVE_NOT_INIT_VARIABLE_ARRAY"] = -23] = "TDR_ERR_USE_HAVE_NOT_INIT_VARIABLE_ARRAY";
	    ErrorType[ErrorType["TDR_ERR_INVALID_FORMAT"] = -24] = "TDR_ERR_INVALID_FORMAT";
	    ErrorType[ErrorType["TDR_ERR_HAVE_NOT_SET_SIZEINFO"] = -25] = "TDR_ERR_HAVE_NOT_SET_SIZEINFO";
	    ErrorType[ErrorType["TDR_ERR_VAR_STRING_LENGTH_CONFILICT"] = -26] = "TDR_ERR_VAR_STRING_LENGTH_CONFILICT";
	    ErrorType[ErrorType["TDR_ERR_VAR_ARRAY_CONFLICT"] = -27] = "TDR_ERR_VAR_ARRAY_CONFLICT";
	    ErrorType[ErrorType["TDR_ERR_BAD_TLV_MAGIC"] = -28] = "TDR_ERR_BAD_TLV_MAGIC";
	    ErrorType[ErrorType["TDR_ERR_UNMATCHED_LENGTH"] = -29] = "TDR_ERR_UNMATCHED_LENGTH";
	    ErrorType[ErrorType["TDR_ERR_UNION_SELECTE_FIELD_IS_NULL"] = -30] = "TDR_ERR_UNION_SELECTE_FIELD_IS_NULL";
	    ErrorType[ErrorType["TDR_ERR_SUSPICIOUS_SELECTOR"] = -31] = "TDR_ERR_SUSPICIOUS_SELECTOR";
	    ErrorType[ErrorType["TDR_ERR_UNKNOWN_TYPE_ID"] = -32] = "TDR_ERR_UNKNOWN_TYPE_ID";
	    ErrorType[ErrorType["TDR_ERR_LOST_REQUIRED_FIELD"] = -33] = "TDR_ERR_LOST_REQUIRED_FIELD";
	    ErrorType[ErrorType["TDR_ERR_NULL_ARRAY"] = -34] = "TDR_ERR_NULL_ARRAY";
	    ErrorType[ErrorType["TDR_ERR_ARRAY_FAIL"] = -35] = "TDR_ERR_ARRAY_FAIL";	  })(ErrorType || (ErrorType = {}));	  var DATA_TYPE;	  (function (DATA_TYPE) {
	    DATA_TYPE[DATA_TYPE["char"] = 0] = "char";
	    DATA_TYPE[DATA_TYPE["int8"] = 1] = "int8";
	    DATA_TYPE[DATA_TYPE["uint8"] = 2] = "uint8";
	    DATA_TYPE[DATA_TYPE["int16"] = 3] = "int16";
	    DATA_TYPE[DATA_TYPE["uint16"] = 4] = "uint16";
	    DATA_TYPE[DATA_TYPE["int32"] = 5] = "int32";
	    DATA_TYPE[DATA_TYPE["uint32"] = 6] = "uint32";
	    DATA_TYPE[DATA_TYPE["int64"] = 7] = "int64";
	    DATA_TYPE[DATA_TYPE["uint64"] = 8] = "uint64";
	    DATA_TYPE[DATA_TYPE["float32"] = 9] = "float32";
	    DATA_TYPE[DATA_TYPE["float64"] = 10] = "float64";	  })(DATA_TYPE || (DATA_TYPE = {}));	  /** Tdr���ݱ����� */	  var TdrData = (function () {
	    function TdrData(obj, offset) {
	      if (offset === void 0) {
	        offset = 0;
	      }
	      if (obj instanceof ArrayBuffer) {
	        this.arrayBuffer = obj;
	        this.size = obj.byteLength - offset;
	        this.offset = offset;
	      }
	      else {
	        this.arrayBuffer = new ArrayBuffer(obj);
	        if (this.arrayBuffer.byteLength == obj) {
	          this.size = obj;
	        }
	        else {
	          this.size = 0;
	          this.arrayBuffer = null;
	        }
	      }
	      this.usedSize = 0;
	    }
	    TdrData.prototype.clear = function () {
	      var type = new Uint8Array(this.arrayBuffer);
	      if (!Uint8Array.prototype.fill) {
	        for (var i = this.offset; i < this.offset + this.usedSize; i++)
	          type[i] = 0;
	      }
	      else {
	        type.fill(0, this.offset, this.offset + this.usedSize);
	      }
	      this.usedSize = 0;
	    };
	    return TdrData;	  }());	  /** TDRдBuff�� */	  var TdrWriteBuf = (function () {
	    function TdrWriteBuf(ptr, len, offset) {
	      // console.log('TdrWriteBuf:', ptr)
	      if (offset === void 0) {
	        offset = 0;
	      }
	      this._begin = ptr;
	      this._view = new DataView(this._begin, offset);
	      this._pos = 0;
	      this._length = 0;
	      if (null != this._begin) {
	        this._length = len;
	      }
	    }
	    /** ͨ��write���� */
	    TdrWriteBuf.prototype.write = function (src, byte_length, set_func, offset) {
	      if (null == this._begin) {
	        return ErrorType.TDR_ERR_ARG_IS_NULL;
	      }
	      if (byte_length >= this.getLeftSize()) {
	        return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	      }
	      var append = offset === undefined;
	      if (append) {
	        offset = this._pos;
	        this._pos += byte_length;
	      }
	      set_func(offset, src, !TdrUtil.isLittleEndian);
	      return ErrorType.TDR_NO_ERROR;
	    };
	    /** ��ʹ�ó��� */
	    TdrWriteBuf.prototype.getUsedSize = function () {
	      return this._pos;
	    };
	    /** �ܳ��� */
	    TdrWriteBuf.prototype.getTotalSize = function () {
	      return this._length;
	    };
	    /** ʣ�೤�� */
	    TdrWriteBuf.prototype.getLeftSize = function () {
	      return this._length - this._pos;
	    };
	    /** Ԥ��gap���� */
	    TdrWriteBuf.prototype.reserve = function (gap) {
	      if (this._pos > this._length) {
	        return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	      }
	      if (gap > this.getLeftSize()) {
	        return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	      }
	      this._pos += gap;
	      return ErrorType.TDR_NO_ERROR;
	    };
	    TdrWriteBuf.prototype.writeInt8 = function (src, pos) {
	      var _this = this;
	      return this.write(src, Int8Array.BYTES_PER_ELEMENT, function (a, b) {
	        _this._view.setInt8(a, b);
	      }, pos);
	    };
	    TdrWriteBuf.prototype.writeUInt8 = function (src, pos) {
	      var _this = this;
	      return this.write(src, Uint8Array.BYTES_PER_ELEMENT, function (a, b) {
	        _this._view.setUint8(a, b);
	      }, pos);
	    };
	    TdrWriteBuf.prototype.writeInt16 = function (src, pos) {
	      var _this = this;
	      return this.write(src, Int16Array.BYTES_PER_ELEMENT, function (a, b, c) {
	        _this._view.setInt16(a, b, c);
	      }, pos);
	    };
	    TdrWriteBuf.prototype.writeUInt16 = function (src, pos) {
	      var _this = this;
	      return this.write(src, Uint16Array.BYTES_PER_ELEMENT, function (a, b, c) {
	        _this._view.setUint16(a, b, c);
	      }, pos);
	    };
	    TdrWriteBuf.prototype.writeInt32 = function (src, pos) {
	      var _this = this;
	      return this.write(src, Int32Array.BYTES_PER_ELEMENT, function (a, b, c) {
	        _this._view.setInt32(a, b, c);
	      }, pos);
	    };
	    TdrWriteBuf.prototype.writeUInt32 = function (src, pos) {
	      var _this = this;
	      return this.write(src, Uint32Array.BYTES_PER_ELEMENT, function (a, b, c) {
	        _this._view.setUint32(a, b, c);
	      }, pos);
	    };
	    TdrWriteBuf.prototype.writeInt64 = function (src, pos) {
	      return this.writeUInt64(src, pos);
	    };
	    TdrWriteBuf.prototype.writeUInt64 = function (src, pos) {
	      var _begin = this._begin;
	      return this.write(src, 8, function (a, b, c) {
	        if (typeof b === "number")
	          b = new UInt64(0, b);
	        var arr = b.writeToArrayBuffer(c);
	        new Uint8Array(_begin).set(new Uint8Array(arr), a);
	      }, pos);
	    };
	    TdrWriteBuf.prototype.writeFloat = function (src, pos) {
	      var _this = this;
	      return this.write(src, Float32Array.BYTES_PER_ELEMENT, function (a, b, c) {
	        _this._view.setFloat32(a, b, c);
	      }, pos);
	    };
	    TdrWriteBuf.prototype.writeDouble = function (src, pos) {
	      var _this = this;
	      return this.write(src, Float64Array.BYTES_PER_ELEMENT, function (a, b, c) {
	        _this._view.setFloat64(a, b, c);
	      }, pos);
	    };
	    TdrWriteBuf.prototype.writeVarUInt16 = function (src) {
	      if (null == this._begin)
	        return ErrorType.TDR_ERR_ARG_IS_NULL;
	      var base128 = 0;
	      var buf = new ArrayBuffer(2);
	      if (buf.byteLength != 2)
	        return ErrorType.TDR_ERR_ARRAY_FAIL;
	      if (!TdrUtil.isLittleEndian) {
	        src = TdrUtil.hostToNetworkOrder(src, DATA_TYPE.uint16);
	      }
	      do {
	        if (this.getLeftSize() <= 0) {
	          return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	        }
	        var view16 = new Uint16Array(buf);
	        view16[0] = src;
	        var view8 = new Uint8Array(buf);
	        base128 = view8[0] & 0x7F;
	        src = src >> 7;
	        if (src != 0) {
	          base128 |= 0x80;
	        }
	        this._view.setUint8(this._pos++, base128);
	      } while (src != 0);
	      return ErrorType.TDR_NO_ERROR;
	    };
	    TdrWriteBuf.prototype.writeVarInt16 = function (src) {
	      if (null == this._begin)
	        return ErrorType.TDR_ERR_ARG_IS_NULL;
	      if (!TdrUtil.isLittleEndian) {
	        src = TdrUtil.hostToNetworkOrder(src, DATA_TYPE.int16);
	      }
	      src = (src << 1) ^ (src >> 15);
	      var base128 = 0;
	      var buf = new ArrayBuffer(2);
	      if (buf.byteLength != 2)
	        return ErrorType.TDR_ERR_ARRAY_FAIL;
	      do {
	        if (this.getLeftSize() <= 0) {
	          return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	        }
	        var view16 = new Uint16Array(buf);
	        view16[0] = src;
	        var view8 = new Uint8Array(buf);
	        base128 = view8[0] & 0x7F;
	        src = src >> 7;
	        if (src != 0) {
	          base128 |= 0x80;
	        }
	        this._view.setUint8(this._pos++, base128);
	      } while (src != 0);
	      return ErrorType.TDR_NO_ERROR;
	    };
	    TdrWriteBuf.prototype.writeVarUInt32 = function (src) {
	      if (null == this._begin)
	        return ErrorType.TDR_ERR_ARG_IS_NULL;
	      if (!TdrUtil.isLittleEndian) {
	        src = TdrUtil.hostToNetworkOrder(src, DATA_TYPE.uint32);
	      }
	      var base128 = 0;
	      var buf = new ArrayBuffer(Uint32Array.BYTES_PER_ELEMENT);
	      if (buf.byteLength != Uint32Array.BYTES_PER_ELEMENT)
	        return ErrorType.TDR_ERR_ARRAY_FAIL;
	      do {
	        if (this.getLeftSize() <= 0) {
	          return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	        }
	        var viewOrg = new Uint32Array(buf);
	        viewOrg[0] = src;
	        var view8 = new Uint8Array(buf);
	        base128 = view8[0] & 0x7F;
	        src = src >>> 7;
	        if (src != 0) {
	          base128 |= 0x80;
	        }
	        this._view.setUint8(this._pos++, base128);
	      } while (src != 0);
	      return ErrorType.TDR_NO_ERROR;
	    };
	    TdrWriteBuf.prototype.writeVarInt32 = function (src) {
	      if (null == this._begin)
	        return ErrorType.TDR_ERR_ARG_IS_NULL;
	      if (!TdrUtil.isLittleEndian) {
	        src = TdrUtil.hostToNetworkOrder(src, DATA_TYPE.int32);
	      }
	      src = (src << 1) ^ (src >> 31);
	      var base128 = 0;
	      var buf = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
	      if (buf.byteLength != Int32Array.BYTES_PER_ELEMENT)
	        return ErrorType.TDR_ERR_ARRAY_FAIL;
	      do {
	        if (this.getLeftSize() <= 0) {
	          return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	        }
	        var viewOrg = new Uint16Array(buf);
	        viewOrg[0] = src;
	        var view8 = new Uint8Array(buf);
	        base128 = view8[0] & 0x7F;
	        src = src >>> 7;
	        if (src != 0) {
	          base128 |= 0x80;
	        }
	        this._view.setUint8(this._pos++, base128);
	      } while (src != 0);
	      return ErrorType.TDR_NO_ERROR;
	    };
	    TdrWriteBuf.prototype.writeCString = function (byte_src, count) {
	      if (null == this._begin)
	        return ErrorType.TDR_ERR_ARG_IS_NULL;
	      if (count > this.getLeftSize())
	        return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	      var arr = new Uint8Array(byte_src);
	      for (var i = 0; i < count; i++) {
	        this._view.setUint8(this._pos++, arr[i]);
	      }
	      return ErrorType.TDR_NO_ERROR;
	    };
	    TdrWriteBuf.prototype.calculateVarint64 = function (value) {
	      //? LONG('value');
	      // ref: src/google/protobuf/io/coded_stream.cc
	      var part0 = value.toInt() >>> 0,
	          part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
	          part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	      if (part2 == 0) {
	        if (part1 == 0) {
	          if (part0 < 1 << 14)
	            return part0 < 1 << 7 ? 1 : 2;
	          else
	            return part0 < 1 << 21 ? 3 : 4;
	        } else {
	          if (part1 < 1 << 14)
	            return part1 < 1 << 7 ? 5 : 6;
	          else
	            return part1 < 1 << 21 ? 7 : 8;
	        }
	      } else
	        return part2 < 1 << 7 ? 9 : 10;
	    };
	    TdrWriteBuf.prototype.var64bitsEncode = function (value) {
	      if (typeof value === "number")
	        value = Long.fromValue(value, true);
	      var size = this.calculateVarint64(value),
	          part0 = value.toInt() >>> 0,
	          part1 = value.shiftRightUnsigned(28).toInt() >>> 0,
	          part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	      if (this.getLeftSize() < size) {
	        return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	      }
	      switch (size) {
	        case 10:
	          this._view.setUint8(this._pos + 9, (part2 >>> 7) & 0x01);
	        case 9:
	          this._view.setUint8(this._pos + 8, size !== 9 ? (part2) | 0x80 : (part2) & 0x7F);
	        case 8:
	          this._view.setUint8(this._pos + 7, size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F);
	        case 7:
	          this._view.setUint8(this._pos + 6, size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F);
	        case 6:
	          this._view.setUint8(this._pos + 5, size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F);
	        case 5:
	          this._view.setUint8(this._pos + 4, size !== 5 ? (part1) | 0x80 : (part1) & 0x7F);
	        case 4:
	          this._view.setUint8(this._pos + 3, size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F);
	        case 3:
	          this._view.setUint8(this._pos + 2, size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F);
	        case 2:
	          this._view.setUint8(this._pos + 1, size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F);
	        case 1:
	          this._view.setUint8(this._pos, size !== 1 ? (part0) | 0x80 : (part0) & 0x7F);
	          this._pos += size;
	      }
	      return ErrorType.TDR_NO_ERROR;
	    };
	    TdrWriteBuf.prototype.zigZagEncode64 = function (value) {
	      //? LONG('value', false);
	      // ref: src/google/protobuf/wire_format_lite.h
	      return value.shiftLeft(1).xor(value.shiftRight(63)).toUnsigned();
	    };
	    TdrWriteBuf.prototype.writeVarUInt64 = function (value) {
	      if (typeof value === "number")
	        value = Long.fromValue(value, true);
	      return this.var64bitsEncode(value);
	    };
	    TdrWriteBuf.prototype.writeVarInt64 = function (value) {
	      if (typeof value === "number")
	        value = Long.fromValue(value, false);
	      return this.var64bitsEncode(this.zigZagEncode64(value));
	    };
	    return TdrWriteBuf;	  }());	  var TdrReadRet = (function () {
	    function TdrReadRet(init) {
	      this.ret = init || ErrorType.TDR_NO_ERROR;
	    }
	    return TdrReadRet;	  }());	  /** TDR��Buff�� */	  var TdrReadBuf = (function () {
	    function TdrReadBuf(buf, len, offset) {
	      if (offset === void 0) {
	        offset = 0;
	      }
	      this._begin = buf;
	      this._pos = 0;
	      this._length = 0;
	      this._view = null;
	      this._isNetEndian = true;
	      if (null != this._begin) {
	        this._length = len;
	        this._view = new DataView(this._begin, offset);
	      }
	    }
	    TdrReadBuf.prototype.read = function (ret, byte_length, get_func, offset) {
	      ret.ret = ErrorType.TDR_NO_ERROR;
	      if (null == this._begin) {
	        ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	        return null;
	      }
	      if (byte_length > this.getLeftSize()) {
	        ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	        return null;
	      }
	      var append = offset === undefined;
	      if (append) {
	        offset = this._pos;
	        this._pos += byte_length;
	      }
	      return get_func(offset, !(this._isNetEndian && TdrUtil.isLittleEndian));
	    };
	    TdrReadBuf.prototype.setPosition = function (position) {
	      this._pos = position;
	    };
	    TdrReadBuf.prototype.getUsedSize = function () {
	      return this._pos;
	    };
	    TdrReadBuf.prototype.getTotalSize = function () {
	      return this._length;
	    };
	    TdrReadBuf.prototype.getLeftSize = function () {
	      return this._length - this._pos;
	    };
	    TdrReadBuf.prototype.getBeginPtr = function () {
	      return this._begin;
	    };
	    TdrReadBuf.prototype.disableEndian = function () {
	      this._isNetEndian = false;
	    };
	    TdrReadBuf.prototype.readInt8 = function (ret, offset) {
	      var _this = this;
	      return this.read(ret, Int8Array.BYTES_PER_ELEMENT, function (a, b) {
	        return _this._view.getInt8(a);
	      }, offset);
	    };
	    TdrReadBuf.prototype.readUInt8 = function (ret, offset) {
	      var _this = this;
	      return this.read(ret, Uint8Array.BYTES_PER_ELEMENT, function (a, b) {
	        return _this._view.getUint8(a);
	      }, offset);
	    };
	    TdrReadBuf.prototype.readInt16 = function (ret, offset) {
	      var _this = this;
	      return this.read(ret, Int16Array.BYTES_PER_ELEMENT, function (a, b) {
	        return _this._view.getInt16(a, b);
	      }, offset);
	    };
	    TdrReadBuf.prototype.readUInt16 = function (ret, offset) {
	      var _this = this;
	      return this.read(ret, Uint16Array.BYTES_PER_ELEMENT, function (a, b) {
	        return _this._view.getUint16(a, b);
	      }, offset);
	    };
	    TdrReadBuf.prototype.readInt32 = function (ret, offset) {
	      var _this = this;
	      return this.read(ret, Int32Array.BYTES_PER_ELEMENT, function (a, b) {
	        return _this._view.getInt32(a, b);
	      }, offset);
	    };
	    TdrReadBuf.prototype.readUInt32 = function (ret, offset) {
	      var _this = this;
	      return this.read(ret, Uint32Array.BYTES_PER_ELEMENT, function (a, b) {
	        return _this._view.getUint32(a, b);
	      }, offset);
	    };
	    TdrReadBuf.prototype.readInt64 = function (ret, offset) {
	      return this.readUInt64(ret, offset);
	    };
	    TdrReadBuf.prototype.readUInt64 = function (ret, offset) {
	      var _begin = this._begin;
	      return this.read(ret, 8, function (a, b) {
	        var dest = new UInt64();
	        dest.readFromArrayBuffer(_begin, a, b);
	        return dest;
	      }, offset) >>> 0;
	    };
	    TdrReadBuf.prototype.readFloat = function (ret, offset) {
	      var _this = this;
	      return this.read(ret, Float32Array.BYTES_PER_ELEMENT, function (a, b) {
	        return _this._view.getFloat32(a, b);
	      }, offset);
	    };
	    TdrReadBuf.prototype.readDouble = function (ret, offset) {
	      var _this = this;
	      return this.read(ret, Float64Array.BYTES_PER_ELEMENT, function (a, b) {
	        return _this._view.getFloat64(a, b);
	      }, offset);
	    };
	    TdrReadBuf.prototype.readVarUInt16 = function (ret) {
	      ret.ret = ErrorType.TDR_NO_ERROR;
	      if (null == this._begin) {
	        ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	        return null;
	      }
	      var dest = 0;
	      var lshift = 0;
	      var flag = 0;
	      var base128 = 0;
	      do {
	        if (this.getLeftSize() <= 0) {
	          ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	          return null;
	        }
	        base128 = this._view.getUint8(this._pos++);
	        dest |= (base128 & 0x7F) << 7 * lshift;
	        ++lshift;
	        flag = base128 & 0x80;
	      } while (flag != 0);
	      if (!TdrUtil.isLittleEndian)
	        dest = TdrUtil.networkToHostOrder(dest, DATA_TYPE.uint16);
	      return dest >>> 0;
	    };
	    TdrReadBuf.prototype.readVarInt16 = function (ret) {
	      ret.ret = ErrorType.TDR_NO_ERROR;
	      if (null == this._begin) {
	        ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	        return null;
	      }
	      var dest = 0;
	      var lshift = 0;
	      var flag = 0;
	      var base128 = 0;
	      do {
	        if (this.getLeftSize() <= 0) {
	          ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	          return null;
	        }
	        base128 = this._view.getUint8(this._pos++);
	        dest |= (base128 & 0x7F) << 7 * lshift;
	        ++lshift;
	        flag = base128 & 0x80;
	      } while (flag != 0);
	      if ((dest & 0x1) != 0)
	        dest = (((dest ^ 0xFFFF) >> 1) & ~0x8000) | ((dest & 0x1) << 15);
	      else
	        dest = ((dest >> 1) & ~0x8000) | ((dest & 0x1) << 15);
	      if (!TdrUtil.isLittleEndian)
	        dest = TdrUtil.networkToHostOrder(dest, DATA_TYPE.int16);
	      var buffer = new ArrayBuffer(Uint16Array.BYTES_PER_ELEMENT);
	      var write = new Uint16Array(buffer);
	      write[0] = dest;
	      var read = new Int16Array(buffer);
	      dest = read[0];
	      return dest;
	    };
	    TdrReadBuf.prototype.readVarUInt32 = function (ret) {
	      ret.ret = ErrorType.TDR_NO_ERROR;
	      if (null == this._begin) {
	        ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	        return null;
	      }
	      var dest = 0;
	      var lshift = 0;
	      var flag = 0;
	      var base128 = 0;
	      do {
	        if (this.getLeftSize() <= 0) {
	          ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	          return null;
	        }
	        base128 = this._view.getUint8(this._pos++);
	        dest |= (base128 & 0x7F) << 7 * lshift;
	        ++lshift;
	        flag = base128 & 0x80;
	      } while (flag != 0);
	      if (!TdrUtil.isLittleEndian)
	        dest = TdrUtil.networkToHostOrder(dest, DATA_TYPE.uint32);
	      return dest >>> 0;
	    };
	    TdrReadBuf.prototype.readVarInt32 = function (ret) {
	      ret.ret = ErrorType.TDR_NO_ERROR;
	      if (null == this._begin) {
	        ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	        return null;
	      }
	      var dest = 0;
	      var lshift = 0;
	      var flag = 0;
	      var base128 = 0;
	      do {
	        if (this.getLeftSize() <= 0) {
	          ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	          return null;
	        }
	        base128 = this._view.getUint8(this._pos++);
	        dest |= (base128 & 0x7F) << 7 * lshift;
	        ++lshift;
	        flag = base128 & 0x80;
	      } while (flag != 0);
	      var tmp;
	      if ((dest & 0x1) != 0) {
	        tmp = (dest ^ 0xFFFFFFFF) >> 1;
	        tmp &= ~0x80000000;
	        dest = tmp | ((dest & 0x1) << 31);
	      }
	      else {
	        tmp = (dest >> 1) & ~0x80000000;
	        dest = tmp | ((dest & 0x1) << 31);
	      }
	      if (!TdrUtil.isLittleEndian)
	        dest = TdrUtil.networkToHostOrder(dest, DATA_TYPE.int32);
	      var buffer = new ArrayBuffer(Uint32Array.BYTES_PER_ELEMENT);
	      var write = new Uint32Array(buffer);
	      write[0] = dest;
	      var read = new Int32Array(buffer);
	      dest = read[0];
	      return dest;
	    };
	    TdrReadBuf.prototype.skipForward = function (step) {
	      if (this.getLeftSize() < step)
	        return ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	      this._pos += step;
	      return ErrorType.TDR_NO_ERROR;
	    };
	    TdrReadBuf.prototype.readCString = function (ret, count, offset) {
	      ret.ret = ErrorType.TDR_NO_ERROR;
	      if (null == this._begin) {
	        ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	        return null;
	      }
	      var append = offset === undefined;
	      var _offset = append ? this._pos : offset;
	      if (count > this._length - _offset) {
	        ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	        return null;
	      }
	      if (append)
	        this._pos += count;
	      return this._begin.slice(_offset, _offset + count);
	    };
	    TdrReadBuf.prototype.var64bitsDecode = function (ret) {
	      var part0 = 0,
	          part1 = 0,
	          part2 = 0,
	          b = 0;
	      b = this._view.getUint8(this._pos++);
	      part0 = (b & 0x7F);
	      if (b & 0x80) {
	        b = this._view.getUint8(this._pos++);
	        part0 |= (b & 0x7F) << 7;
	        if (b & 0x80) {
	          b = this._view.getUint8(this._pos++);
	          part0 |= (b & 0x7F) << 14;
	          if (b & 0x80) {
	            b = this._view.getUint8(this._pos++);
	            part0 |= (b & 0x7F) << 21;
	            if (b & 0x80) {
	              b = this._view.getUint8(this._pos++);
	              part1 = (b & 0x7F);
	              if (b & 0x80) {
	                b = this._view.getUint8(this._pos++);
	                part1 |= (b & 0x7F) << 7;
	                if (b & 0x80) {
	                  b = this._view.getUint8(this._pos++);
	                  part1 |= (b & 0x7F) << 14;
	                  if (b & 0x80) {
	                    b = this._view.getUint8(this._pos++);
	                    part1 |= (b & 0x7F) << 21;
	                    if (b & 0x80) {
	                      b = this._view.getUint8(this._pos++);
	                      part2 = (b & 0x7F);
	                      if (b & 0x80) {
	                        b = this._view.getUint8(this._pos++);
	                        part2 |= (b & 0x7F) << 7;
	                        if (b & 0x80) {
	                          ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	                          return null;
	                        }
	                      }
	                    }
	                  }
	                }
	              }
	            }
	          }
	        }
	      }
	      var value = Long.fromBits(part0 | (part1 << 28), (part1 >>> 4) | (part2) << 24, true); // source code is false here, unknow why
	      return value;
	    };
	    TdrReadBuf.prototype.zigZagDecode64 = function (value) {
	      // ref: src/google/protobuf/wire_format_lite.h
	      return value.shiftRightUnsigned(1).xor(value.and(Long.ONE).toSigned().negate()).toSigned();
	    };
	    TdrReadBuf.prototype.readVarUInt64 = function (ret) {
	      ret.ret = ErrorType.TDR_NO_ERROR;
	      if (null == this._begin) {
	        ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	        return null;
	      }
	      return this.var64bitsDecode(ret);
	    };
	    TdrReadBuf.prototype.readVarInt64 = function (ret) {
	      var val = this.var64bitsDecode(ret);
	      if (ret.ret)
	        return null;
	      return this.zigZagDecode64(val);
	    };
	    return TdrReadBuf;	  }());	  var TLV_MAGIC;	  (function (TLV_MAGIC) {
	    TLV_MAGIC[TLV_MAGIC["TLV_MAGIC_VARINT"] = 170] = "TLV_MAGIC_VARINT";
	    TLV_MAGIC[TLV_MAGIC["TLV_MAGIC_NOVARINT"] = 153] = "TLV_MAGIC_NOVARINT";	  })(TLV_MAGIC || (TLV_MAGIC = {}));	  var TdrTLVTypeId;	  (function (TdrTLVTypeId) {
	    TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_VARINT"] = 0] = "TDR_TYPE_ID_VARINT";
	    TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_1_BYTE"] = 1] = "TDR_TYPE_ID_1_BYTE";
	    TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_2_BYTE"] = 2] = "TDR_TYPE_ID_2_BYTE";
	    TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_4_BYTE"] = 3] = "TDR_TYPE_ID_4_BYTE";
	    TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_8_BYTE"] = 4] = "TDR_TYPE_ID_8_BYTE";
	    TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_LENGTH_DELIMITED"] = 5] = "TDR_TYPE_ID_LENGTH_DELIMITED";	  })(TdrTLVTypeId || (TdrTLVTypeId = {}));	  var TdrTLV = (function () {
	    function TdrTLV() {
	    }
	    TdrTLV.makeTag = function (id, type) {
	      return id << 4 | type;
	    };
	    TdrTLV.getFieldId = function (tagid) {
	      return tagid >> 4;
	    };
	    TdrTLV.getTypeId = function (tagid) {
	      return tagid & 0xF;
	    };
	    TdrTLV.TLV_MSG_MAGIC_SIZE = 1;
	    TdrTLV.TLV_MSG_MIN_SIZE = 5;
	    return TdrTLV;	  }());	  var TdrUtil = (function () {
	    function TdrUtil() {
	    }
	    TdrUtil.cstrlen = function (byte_str) {
	      var count = 0;
	      var view = new Uint8Array(byte_str);
	      for (var i = 0; i < view.length; i++) {
	        if (0 == view[i])
	          break;
	        count++;
	      }
	      return count;
	    };
	    TdrUtil.utf8Encode = function (str) {
	      var utf8 = encodeURIComponent(str).match(/(%\w{2}|.)/g);
	      if (utf8 == null)
	        return new ArrayBuffer(0);
	      var arr = new ArrayBuffer(utf8.length);
	      var type = new Uint8Array(arr);
	      for (var i = 0; i < utf8.length; i++) {
	        if (utf8[i].indexOf("%") === 0)
	          type[i] = parseInt("0x" + utf8[i].substr(1));
	        else
	          type[i] = utf8[i].charCodeAt(0);
	      }
	      return arr;
	    };
	    TdrUtil.utf8Decode = function (arraybuffer) {
	      if (!arraybuffer)
	        return "";
	      var u8 = new Uint8Array(arraybuffer);
	      var url = [];
	      var i = 0;
	      while (i < u8.byteLength) {
	        var b = u8[i];
	        if (b == 0)
	          break;
	        else if (b > 0 && b <= 0x7F) {
	          url.push(String.fromCharCode(b));
	        }
	        else {
	          url.push("%" + b.toString(16));
	        }
	        i++;
	      }
	      return decodeURIComponent(url.join(""));
	    };
	    TdrUtil.hostToNetworkOrder = function (src, type_index) {
	      var arr = null;
	      switch (type_index) {
	        case DATA_TYPE.int16:
	          arr = new ArrayBuffer(Int16Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setInt16(0, src, true);
	          return new DataView(arr).getInt16(0, false);
	        case DATA_TYPE.uint16:
	          arr = new ArrayBuffer(Uint16Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setUint16(0, src, true);
	          return new DataView(arr).getUint16(0, false);
	        case DATA_TYPE.int32:
	          arr = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setInt32(0, src, true);
	          return new DataView(arr).getInt32(0, false);
	        case DATA_TYPE.uint32:
	          arr = new ArrayBuffer(Uint32Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setUint32(0, src, true);
	          return new DataView(arr).getInt32(0, false);
	        case DATA_TYPE.float32:
	          arr = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setFloat32(0, src, true);
	          return new DataView(arr).getFloat32(0, false);
	        case DATA_TYPE.float64:
	          arr = new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setFloat64(0, src, true);
	          return new DataView(arr).getFloat64(0, false);
	      }
	      return src;
	    };
	    TdrUtil.networkToHostOrder = function (src, type_index) {
	      var arr = null;
	      switch (type_index) {
	        case DATA_TYPE.int16:
	          arr = new ArrayBuffer(Int16Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setInt16(0, src, false);
	          return new DataView(arr).getInt16(0, true);
	        case DATA_TYPE.uint16:
	          arr = new ArrayBuffer(Uint16Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setUint16(0, src, false);
	          return new DataView(arr).getUint16(0, true);
	        case DATA_TYPE.int32:
	          arr = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setInt32(0, src, false);
	          return new DataView(arr).getInt32(0, true);
	        case DATA_TYPE.uint32:
	          arr = new ArrayBuffer(Uint32Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setUint32(0, src, false);
	          return new DataView(arr).getInt32(0, true);
	        case DATA_TYPE.float32:
	          arr = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setFloat32(0, src, false);
	          return new DataView(arr).getFloat32(0, true);
	        case DATA_TYPE.float64:
	          arr = new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT);
	          new DataView(arr).setFloat64(0, src, false);
	          return new DataView(arr).getFloat64(0, true);
	      }
	      return src;
	    };
	    TdrUtil.isLittleEndian = (function () {
	      var buffer = new ArrayBuffer(2);
	      new DataView(buffer).setInt16(0, 256, true);
	      return new Int16Array(buffer)[0] === 256;
	    })();
	    return TdrUtil;	  }());	  	  var __extends = (this && this.__extends) || function (d, b) {
	    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
	    function __() {
	      this.constructor = d;
	    }
	    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());	  };	  /** 简单初始化传入的协议js文件	   * 加载机制,文件缓存机制等依赖外部	   * @method */	  var create = function (protoObj) {
	    // support broswer global?
	    // muilt proto ?
	    // init it
	    return protoObj.init(exportObj)	  };	  let exportObj =  {
	    TdrData: TdrData,
	    Long: Long,
	    ErrorType: ErrorType,
	    // 暂时直接暴露给 xx_proto.js
	    StructTdr: StructTdr,
	    UnionTdr: UnionTdr,
	    DATA_TYPE: DATA_TYPE,
	    TdrWriteBuf: TdrWriteBuf,
	    TdrReadRet: TdrReadRet,
	    TdrReadBuf: TdrReadBuf,
	    TLV_MAGIC: TLV_MAGIC,
	    TdrTLVTypeId: TdrTLVTypeId,
	    TdrTLV: TdrTLV,
	    TdrUtil: TdrUtil,
	    Tools: Tools,
	    create	  };	  return exportObj	}));	var UInt64 = /** @class */ (function () {
	    function UInt64(high, low) {
	        if (high === void 0) { high = 0; }
	        if (low === void 0) { low = 0; }
	        this.init(high, low);
	    }
	    Object.defineProperty(UInt64.prototype, "high", {
	        get: function () { return this._high; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UInt64.prototype, "low", {
	        get: function () { return this._low; },
	        enumerable: true,
	        configurable: true
	    });
	    UInt64.prototype.init = function (high, low) {
	        var tmp = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
	        var u32 = new Uint32Array(tmp);
	        u32[0] = high;
	        this._high = u32[0];
	        u32[0] = low;
	        this._low = u32[0];
	    };
	    UInt64.set_per = function (view, pos, src, isLittleEndian) {
	        var array = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
	        var u32 = new DataView(array);
	        u32.setUint32(0, src, true);
	        var offset = 0;
	        while (offset < Int32Array.BYTES_PER_ELEMENT) {
	            if (u32.getUint8(offset) == 0)
	                break;
	            offset++;
	        }
	        switch (offset) {
	            case 1:
	                view.setUint8(pos, src);
	                break;
	            case 2:
	                view.setUint16(pos, src, isLittleEndian);
	                break;
	            default:
	                view.setUint32(pos, src, isLittleEndian);
	                break;
	        }
	        return offset;
	    };
	    UInt64.prototype.writeToArrayBuffer = function (isLittleEndian) {
	        var arr = new ArrayBuffer(2 * Int32Array.BYTES_PER_ELEMENT);
	        if (arr.byteLength == 2 * Int32Array.BYTES_PER_ELEMENT) {
	            var view = new DataView(arr);
	            var offset_low = void 0, offset_high = void 0;
	            if (!isLittleEndian) {
	                offset_low = UInt64.set_per(view, 0, this.low, true);
	                offset_high = UInt64.set_per(view, offset_low, this.high, true);
	            }
	            else {
	                offset_low = UInt64.set_per(view, 0, this.high, false);
	                offset_high = UInt64.set_per(view, offset_low, this.low, false);
	            }
	            return arr.slice(0, offset_low + offset_high);
	        }
	        return null;
	    };
	    UInt64.prototype.readFromArrayBuffer = function (arrayBuffer, offset, isLittleEndian) {
	        // console.log('--->UInt64.readFromArrayBuffer', arrayBuffer)
	        var view = new DataView(arrayBuffer);
	        var _offset = offset || 0;
	        var _isLittleEndian = isLittleEndian === undefined ? true : isLittleEndian;
	        // console.log('--->UInt64._isLittleEndian', _isLittleEndian)
	        if (!_isLittleEndian) {
	            this._low = view.getUint32(_offset, true);
	            this._high = view.getUint32(_offset + Int32Array.BYTES_PER_ELEMENT, true);
	        }
	        else {
	            this._high = view.getUint32(_offset, false);
	            this._low = view.getUint32(_offset + Int32Array.BYTES_PER_ELEMENT, false);
	        }
	    };
	    UInt64.prototype.equal = function (other) {
	        return this.high == other.high && this.low == other.low;
	    };
	    UInt64.isEqual = function (a, b) {
	        return a.equal(b);
	    };
	    UInt64.prototype.moveRight = function (offset) {
	        /* 避免第一位是1时右移出负数*/
	        var flag = (this._low & 0x80000000) != 0;
	        var tmp_low = this._low;
	        if (flag) {
	            tmp_low &= ~0x80000000;
	        }
	        var low = tmp_low >> offset;
	        if (flag) {
	            low |= 0x1000000;
	        }
	        low |= this._high << (32 - offset);
	        var high = this._high >> offset;
	        return new UInt64(high, low);
	    };
	    UInt64.prototype.moveLeft = function (offset) {
	        var low = this._low << offset;
	        var high = this._high << offset | (this._low >> (32 - offset));
	        return new UInt64(high, low);
	    };
	    UInt64.prototype.byteXOR = function (other) {
	        return new UInt64(this._high ^ other.high, this._low ^ other.low);
	    };
	    UInt64.prototype.byteAND = function (other) {
	        return new UInt64(this._high & other.high, this._low & other.low);
	    };
	    UInt64.prototype.byteOR = function (other) {
	        return new UInt64(this._high | other.high, this._low | other.low);
	    };
	    return UInt64;	}());	});	var demo_protocol_tlv = createCommonjsModule(function (module, exports) {	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };	})();	(function (factory) {
	    {
	        var v = factory(commonjsRequire, exports);
	        if (v !== undefined) module.exports = v;
	    }	})(function (require, exports) {
	    exports.__esModule = true;
	    var demo_proto;
	    (function (demo_proto) {
	        function init(tdrTools) {
	            var Long = tdrTools.Long;
	            var StructTdr = tdrTools.StructTdr;
	            var UnionTdr = tdrTools.UnionTdr;
	            var DATA_TYPE = tdrTools.DATA_TYPE;
	            var TdrWriteBuf = tdrTools.TdrWriteBuf;
	            var TdrReadRet = tdrTools.TdrReadRet;
	            var TdrReadBuf = tdrTools.TdrReadBuf;
	            var TLV_MAGIC = tdrTools.TLV_MAGIC;
	            var TdrTLVTypeId = tdrTools.TdrTLVTypeId;
	            var TdrTLV = tdrTools.TdrTLV;
	            var TdrUtil = tdrTools.TdrUtil;
	            var ErrorType = tdrTools.ErrorType;
	            var TdrData = tdrTools.TdrData;
	            var Tools = tdrTools.Tools;
	            /** @const */
	            demo_proto.DEMO_USER_ACCESS_INFO_LEN = 1024;
	            /** @const */
	            demo_proto.DEMO_ERROR_MSG_LEN = 1024;
	            /** @const */
	            demo_proto.DEMO_MAX_USER_COUNT = 20;
	            /** @const */
	            demo_proto.DEMO_MSG_JOIN_ROOM_REQ = 0xA1; // ���뷿������
	            /** @const */
	            demo_proto.DEMO_MSG_JOIN_ROOM_RES = 0xA2; // ���뷿����Ӧ
	            /** @const */
	            demo_proto.DEMO_MSG_CLOSE_ROOM_REQ = 0xA3; // �رշ�������
	            /** @const */
	            demo_proto.DEMO_MSG_CLOSE_ROOM_RES = 0xA4; // ���뷿����Ӧ
	            /** @const */
	            demo_proto.DEMO_MSG_JOIN_ROOM_SPECIFY_RELAYSVR_REQ = 0xA5; // ָ��RelaysvrID���뷿��
	            /** @const */
	            demo_proto.DEMO_MSG_CREATE_ROOM_REQ = 0xB1; // ������������
	            /** @const */
	            demo_proto.DEMO_MSG_INTO_ROOM_REQ = 0xB2; // ���뷿������
	            /** @const */
	            demo_proto.NOTIFY_DATA_MAX_LEN = 1024;
	            /** @const */
	            demo_proto.DEMO_MSG_REMOTE_CALL_REQ = 0xC1; // �ͻ��˵�������
	            /** @const */
	            demo_proto.REMOTE_CALL_CMD_MAX_LEN = 64; // ��������
	            /** @const */
	            demo_proto.REMOTE_CALL_BODY_MAX_LEN = 1024; // ���ò���
	            var DemoMsgHead = /** @class */ (function (_super) {
	                __extends(DemoMsgHead, _super);
	                function DemoMsgHead() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Version = 0;
	                    _this.CmdId = 0;
	                    _this.CallBack = 0;
	                    _this.PkgLen = 0;
	                    _this.init();
	                    return _this;
	                }
	                DemoMsgHead.prototype.init = function () {
	                    this.Version = 0;
	                    this.CmdId = 0;
	                    this.CallBack = 0;
	                    this.PkgLen = 0;
	                    this._propsInfo = [{ "id": 1, "name": "Version", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 2, "name": "CmdId", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 3, "name": "CallBack", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 4, "name": "PkgLen", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 5 }];
	                };
	                DemoMsgHead.getNewOne = function () { return new DemoMsgHead(); };
	                DemoMsgHead.prototype.getName = function () { return "demo_proto.DemoMsgHead"; };
	                DemoMsgHead.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Version */
	                    Tools.printValue(msg_str, "Version", this.Version, curr_indent);
	                    /* visualize member: CmdId */
	                    Tools.printValue(msg_str, "CmdId", this.CmdId, curr_indent);
	                    /* visualize member: CallBack */
	                    Tools.printValue(msg_str, "CallBack", this.CallBack, curr_indent);
	                    /* visualize member: PkgLen */
	                    Tools.printValue(msg_str, "PkgLen", this.PkgLen, curr_indent);
	                    return ret;
	                };
	                DemoMsgHead.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                DemoMsgHead.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                DemoMsgHead.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Version */
	                    {
	                        {
	                            /* read value */
	                            this.Version = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.CmdId */
	                    {
	                        {
	                            /* read value */
	                            this.CmdId = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.CallBack */
	                    {
	                        {
	                            /* read value */
	                            this.CallBack = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.PkgLen */
	                    {
	                        {
	                            /* read value */
	                            this.PkgLen = read.readInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return DemoMsgHead;
	            }(StructTdr));
	            demo_proto.DemoMsgHead = DemoMsgHead;
	            var DemoJoinRoomReq = /** @class */ (function (_super) {
	                __extends(DemoJoinRoomReq, _super);
	                function DemoJoinRoomReq() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.GameSvrRoomID = 0;
	                    _this.UserID = 0;
	                    _this.UserCount = 0;
	                    _this.init();
	                    return _this;
	                }
	                DemoJoinRoomReq.prototype.init = function () {
	                    this.GameSvrRoomID = 0;
	                    this.UserID = 0;
	                    this.UserCount = 0;
	                    this._propsInfo = [{ "id": 1, "name": "GameSvrRoomID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "UserID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 3, "name": "UserCount", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                DemoJoinRoomReq.getNewOne = function () { return new DemoJoinRoomReq(); };
	                DemoJoinRoomReq.prototype.getName = function () { return "demo_proto.DemoJoinRoomReq"; };
	                DemoJoinRoomReq.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: GameSvrRoomID */
	                    Tools.printValue(msg_str, "GameSvrRoomID", this.GameSvrRoomID, curr_indent);
	                    /* visualize member: UserID */
	                    Tools.printValue(msg_str, "UserID", this.UserID, curr_indent);
	                    /* visualize member: UserCount */
	                    Tools.printValue(msg_str, "UserCount", this.UserCount, curr_indent);
	                    return ret;
	                };
	                DemoJoinRoomReq.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                DemoJoinRoomReq.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                DemoJoinRoomReq.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.GameSvrRoomID */
	                    {
	                        {
	                            /* read value */
	                            this.GameSvrRoomID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.UserID */
	                    {
	                        {
	                            /* read value */
	                            this.UserID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.UserCount */
	                    {
	                        {
	                            /* read value */
	                            this.UserCount = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return DemoJoinRoomReq;
	            }(StructTdr));
	            demo_proto.DemoJoinRoomReq = DemoJoinRoomReq;
	            var DemoJoinRoomReqSpecifyRelaysvr = /** @class */ (function (_super) {
	                __extends(DemoJoinRoomReqSpecifyRelaysvr, _super);
	                function DemoJoinRoomReqSpecifyRelaysvr() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.GameSvrRoomID = 0;
	                    _this.UserID = 0;
	                    _this.UserCount = 0;
	                    _this.SpecifyRelaySvr = 0;
	                    _this.RelaySvrID = 0;
	                    _this.init();
	                    return _this;
	                }
	                DemoJoinRoomReqSpecifyRelaysvr.prototype.init = function () {
	                    this.GameSvrRoomID = 0;
	                    this.UserID = 0;
	                    this.UserCount = 0;
	                    this.SpecifyRelaySvr = 0;
	                    this.RelaySvrID = 0;
	                    this._propsInfo = [{ "id": 1, "name": "GameSvrRoomID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "UserID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 3, "name": "UserCount", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 4, "name": "SpecifyRelaySvr", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 5, "name": "RelaySvrID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                DemoJoinRoomReqSpecifyRelaysvr.getNewOne = function () { return new DemoJoinRoomReqSpecifyRelaysvr(); };
	                DemoJoinRoomReqSpecifyRelaysvr.prototype.getName = function () { return "demo_proto.DemoJoinRoomReqSpecifyRelaysvr"; };
	                DemoJoinRoomReqSpecifyRelaysvr.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: GameSvrRoomID */
	                    Tools.printValue(msg_str, "GameSvrRoomID", this.GameSvrRoomID, curr_indent);
	                    /* visualize member: UserID */
	                    Tools.printValue(msg_str, "UserID", this.UserID, curr_indent);
	                    /* visualize member: UserCount */
	                    Tools.printValue(msg_str, "UserCount", this.UserCount, curr_indent);
	                    /* visualize member: SpecifyRelaySvr */
	                    Tools.printValue(msg_str, "SpecifyRelaySvr", this.SpecifyRelaySvr, curr_indent);
	                    /* visualize member: RelaySvrID */
	                    Tools.printValue(msg_str, "RelaySvrID", this.RelaySvrID, curr_indent);
	                    return ret;
	                };
	                DemoJoinRoomReqSpecifyRelaysvr.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                DemoJoinRoomReqSpecifyRelaysvr.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                DemoJoinRoomReqSpecifyRelaysvr.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.GameSvrRoomID */
	                    {
	                        {
	                            /* read value */
	                            this.GameSvrRoomID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.UserID */
	                    {
	                        {
	                            /* read value */
	                            this.UserID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.UserCount */
	                    {
	                        {
	                            /* read value */
	                            this.UserCount = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.SpecifyRelaySvr */
	                    {
	                        {
	                            /* read value */
	                            this.SpecifyRelaySvr = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RelaySvrID */
	                    {
	                        {
	                            /* read value */
	                            this.RelaySvrID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return DemoJoinRoomReqSpecifyRelaysvr;
	            }(StructTdr));
	            demo_proto.DemoJoinRoomReqSpecifyRelaysvr = DemoJoinRoomReqSpecifyRelaysvr;
	            var DemoJoinRoomRes = /** @class */ (function (_super) {
	                __extends(DemoJoinRoomRes, _super);
	                function DemoJoinRoomRes() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Ret = 0;
	                    _this.RetMsg = "";
	                    _this.GameSvrRoomID = 0;
	                    _this.RoomID = new Long(0, 0, true);
	                    _this.InnerUserID = 0;
	                    _this.UserAccessInfoLen = 0;
	                    _this.UserAccessInfo = new Array();
	                    _this.RoomUserCount = 0;
	                    _this.LockstepPlayerIDList = new Array();
	                    _this.init();
	                    return _this;
	                }
	                DemoJoinRoomRes.prototype.init = function () {
	                    this.Ret = 0;
	                    this.RetMsg = "";
	                    this.GameSvrRoomID = 0;
	                    this.RoomID = new Long(0, 0, true);
	                    this.InnerUserID = 0;
	                    this.UserAccessInfoLen = 0;
	                    this.UserAccessInfo = new Array();
	                    this.RoomUserCount = 0;
	                    this.LockstepPlayerIDList = new Array();
	                    this._propsInfo = [{ "id": 1, "name": "Ret", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 5 }, { "id": 2, "name": "RetMsg", "lawType": "string", "stringSize": "demo_proto.DEMO_ERROR_MSG_LEN", "countValue": null, "stringSizeValue": 1024, "dataType": 12 }, { "id": 3, "name": "GameSvrRoomID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 4, "name": "RoomID", "lawType": "uint64", "countValue": null, "stringSizeValue": null, "dataType": 8 }, { "id": 5, "name": "InnerUserID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 6, "name": "UserAccessInfoLen", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 4 }, { "id": 7, "name": "UserAccessInfo", "lawType": "Array<number>", "refer": "UserAccessInfoLen", "count": "demo_proto.DEMO_USER_ACCESS_INFO_LEN", "countValue": 1024, "stringSizeValue": null, "dataType": 2 }, { "id": 8, "name": "RoomUserCount", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 9, "name": "LockstepPlayerIDList", "lawType": "Array<number>", "refer": "RoomUserCount", "count": "demo_proto.DEMO_MAX_USER_COUNT", "countValue": 20, "stringSizeValue": null, "dataType": 6 }];
	                };
	                DemoJoinRoomRes.getNewOne = function () { return new DemoJoinRoomRes(); };
	                DemoJoinRoomRes.prototype.getName = function () { return "demo_proto.DemoJoinRoomRes"; };
	                DemoJoinRoomRes.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Ret */
	                    Tools.printValue(msg_str, "Ret", this.Ret, curr_indent);
	                    /* visualize member: RetMsg */
	                    Tools.printValue(msg_str, "RetMsg", this.RetMsg.substr(0, Math.min(this.RetMsg.length, demo_proto.DEMO_ERROR_MSG_LEN)), curr_indent);
	                    /* visualize member: GameSvrRoomID */
	                    Tools.printValue(msg_str, "GameSvrRoomID", this.GameSvrRoomID, curr_indent);
	                    /* visualize member: RoomID */
	                    Tools.printValue(msg_str, "RoomID", this.RoomID.toString(), curr_indent);
	                    /* visualize member: InnerUserID */
	                    Tools.printValue(msg_str, "InnerUserID", this.InnerUserID, curr_indent);
	                    /* visualize member: UserAccessInfoLen */
	                    Tools.printValue(msg_str, "UserAccessInfoLen", this.UserAccessInfoLen, curr_indent);
	                    /* visualize member: UserAccessInfo */
	                    Tools.printValue(msg_str, "[UserAccessInfo]:", this.UserAccessInfo.join(" "), curr_indent);
	                    /* visualize member: RoomUserCount */
	                    Tools.printValue(msg_str, "RoomUserCount", this.RoomUserCount, curr_indent);
	                    /* visualize member: LockstepPlayerIDList */
	                    Tools.printValue(msg_str, "[LockstepPlayerIDList]:", this.LockstepPlayerIDList.join(" "), curr_indent);
	                    return ret;
	                };
	                DemoJoinRoomRes.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                DemoJoinRoomRes.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                DemoJoinRoomRes.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Ret */
	                    {
	                        {
	                            /* read value */
	                            this.Ret = read.readInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RetMsg */
	                    {
	                        var iStringLength = demo_proto.DEMO_ERROR_MSG_LEN;
	                        /* read value */
	                        this.RetMsg = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.GameSvrRoomID */
	                    {
	                        {
	                            /* read value */
	                            this.GameSvrRoomID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RoomID */
	                    {
	                        {
	                            /* read value */
	                            this.RoomID = read.readUInt64(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.InnerUserID */
	                    {
	                        {
	                            /* read value */
	                            this.InnerUserID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.UserAccessInfoLen */
	                    {
	                        {
	                            /* read value */
	                            this.UserAccessInfoLen = read.readUInt16(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.UserAccessInfo */
	                    {
	                        for (var UserAccessInfo_i = 0; UserAccessInfo_i < demo_proto.DEMO_USER_ACCESS_INFO_LEN; ++UserAccessInfo_i) {
	                            {
	                                /* read value */
	                                this.UserAccessInfo[UserAccessInfo_i] = read.readUInt8(ret);
	                                if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                    return ret.ret;
	                            }
	                        }
	                    }
	                    /* load member: this.RoomUserCount */
	                    {
	                        {
	                            /* read value */
	                            this.RoomUserCount = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.LockstepPlayerIDList */
	                    {
	                        for (var LockstepPlayerIDList_i = 0; LockstepPlayerIDList_i < demo_proto.DEMO_MAX_USER_COUNT; ++LockstepPlayerIDList_i) {
	                            {
	                                /* read value */
	                                this.LockstepPlayerIDList[LockstepPlayerIDList_i] = read.readUInt32(ret);
	                                if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                    return ret.ret;
	                            }
	                        }
	                    }
	                    return ret.ret;
	                };
	                return DemoJoinRoomRes;
	            }(StructTdr));
	            demo_proto.DemoJoinRoomRes = DemoJoinRoomRes;
	            var DemoCloseRoomReq = /** @class */ (function (_super) {
	                __extends(DemoCloseRoomReq, _super);
	                function DemoCloseRoomReq() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.GameSvrRoomID = 0;
	                    _this.LockstepRoomID = new Long(0, 0, true);
	                    _this.init();
	                    return _this;
	                }
	                DemoCloseRoomReq.prototype.init = function () {
	                    this.GameSvrRoomID = 0;
	                    this.LockstepRoomID = new Long(0, 0, true);
	                    this._propsInfo = [{ "id": 1, "name": "GameSvrRoomID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "LockstepRoomID", "lawType": "uint64", "countValue": null, "stringSizeValue": null, "dataType": 8 }];
	                };
	                DemoCloseRoomReq.getNewOne = function () { return new DemoCloseRoomReq(); };
	                DemoCloseRoomReq.prototype.getName = function () { return "demo_proto.DemoCloseRoomReq"; };
	                DemoCloseRoomReq.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: GameSvrRoomID */
	                    Tools.printValue(msg_str, "GameSvrRoomID", this.GameSvrRoomID, curr_indent);
	                    /* visualize member: LockstepRoomID */
	                    Tools.printValue(msg_str, "LockstepRoomID", this.LockstepRoomID.toString(), curr_indent);
	                    return ret;
	                };
	                DemoCloseRoomReq.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                DemoCloseRoomReq.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                DemoCloseRoomReq.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.GameSvrRoomID */
	                    {
	                        {
	                            /* read value */
	                            this.GameSvrRoomID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.LockstepRoomID */
	                    {
	                        {
	                            /* read value */
	                            this.LockstepRoomID = read.readUInt64(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return DemoCloseRoomReq;
	            }(StructTdr));
	            demo_proto.DemoCloseRoomReq = DemoCloseRoomReq;
	            var DemoCloseRoomRes = /** @class */ (function (_super) {
	                __extends(DemoCloseRoomRes, _super);
	                function DemoCloseRoomRes() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Ret = 0;
	                    _this.RetMsg = "";
	                    _this.GameSvrRoomID = 0;
	                    _this.LockstepRoomID = new Long(0, 0, true);
	                    _this.init();
	                    return _this;
	                }
	                DemoCloseRoomRes.prototype.init = function () {
	                    this.Ret = 0;
	                    this.RetMsg = "";
	                    this.GameSvrRoomID = 0;
	                    this.LockstepRoomID = new Long(0, 0, true);
	                    this._propsInfo = [{ "id": 1, "name": "Ret", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 5 }, { "id": 2, "name": "RetMsg", "lawType": "string", "stringSize": "demo_proto.DEMO_ERROR_MSG_LEN", "countValue": null, "stringSizeValue": 1024, "dataType": 12 }, { "id": 3, "name": "GameSvrRoomID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 4, "name": "LockstepRoomID", "lawType": "uint64", "countValue": null, "stringSizeValue": null, "dataType": 8 }];
	                };
	                DemoCloseRoomRes.getNewOne = function () { return new DemoCloseRoomRes(); };
	                DemoCloseRoomRes.prototype.getName = function () { return "demo_proto.DemoCloseRoomRes"; };
	                DemoCloseRoomRes.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Ret */
	                    Tools.printValue(msg_str, "Ret", this.Ret, curr_indent);
	                    /* visualize member: RetMsg */
	                    Tools.printValue(msg_str, "RetMsg", this.RetMsg.substr(0, Math.min(this.RetMsg.length, demo_proto.DEMO_ERROR_MSG_LEN)), curr_indent);
	                    /* visualize member: GameSvrRoomID */
	                    Tools.printValue(msg_str, "GameSvrRoomID", this.GameSvrRoomID, curr_indent);
	                    /* visualize member: LockstepRoomID */
	                    Tools.printValue(msg_str, "LockstepRoomID", this.LockstepRoomID.toString(), curr_indent);
	                    return ret;
	                };
	                DemoCloseRoomRes.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                DemoCloseRoomRes.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                DemoCloseRoomRes.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Ret */
	                    {
	                        {
	                            /* read value */
	                            this.Ret = read.readInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RetMsg */
	                    {
	                        var iStringLength = demo_proto.DEMO_ERROR_MSG_LEN;
	                        /* read value */
	                        this.RetMsg = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.GameSvrRoomID */
	                    {
	                        {
	                            /* read value */
	                            this.GameSvrRoomID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.LockstepRoomID */
	                    {
	                        {
	                            /* read value */
	                            this.LockstepRoomID = read.readUInt64(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return DemoCloseRoomRes;
	            }(StructTdr));
	            demo_proto.DemoCloseRoomRes = DemoCloseRoomRes;
	            var DemoRemoteCallReq = /** @class */ (function (_super) {
	                __extends(DemoRemoteCallReq, _super);
	                function DemoRemoteCallReq() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Command = "";
	                    _this.Id = 0;
	                    _this.BodyLen = 0;
	                    _this.Body = "";
	                    _this.init();
	                    return _this;
	                }
	                DemoRemoteCallReq.prototype.init = function () {
	                    this.Command = "";
	                    this.Id = 0;
	                    this.BodyLen = 0;
	                    this.Body = "";
	                    this._propsInfo = [{ "id": 1, "name": "Command", "lawType": "string", "stringSize": "demo_proto.REMOTE_CALL_CMD_MAX_LEN", "countValue": null, "stringSizeValue": 64, "dataType": 12 }, { "id": 2, "name": "Id", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 3, "name": "BodyLen", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 4, "name": "Body", "lawType": "string", "stringSize": "demo_proto.REMOTE_CALL_BODY_MAX_LEN", "countValue": null, "stringSizeValue": 1024, "dataType": 12 }];
	                };
	                DemoRemoteCallReq.getNewOne = function () { return new DemoRemoteCallReq(); };
	                DemoRemoteCallReq.prototype.getName = function () { return "demo_proto.DemoRemoteCallReq"; };
	                DemoRemoteCallReq.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Command */
	                    Tools.printValue(msg_str, "Command", this.Command.substr(0, Math.min(this.Command.length, demo_proto.REMOTE_CALL_CMD_MAX_LEN)), curr_indent);
	                    /* visualize member: Id */
	                    Tools.printValue(msg_str, "Id", this.Id, curr_indent);
	                    /* visualize member: BodyLen */
	                    Tools.printValue(msg_str, "BodyLen", this.BodyLen, curr_indent);
	                    /* visualize member: Body */
	                    Tools.printValue(msg_str, "Body", this.Body.substr(0, Math.min(this.Body.length, demo_proto.REMOTE_CALL_BODY_MAX_LEN)), curr_indent);
	                    return ret;
	                };
	                DemoRemoteCallReq.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                DemoRemoteCallReq.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                DemoRemoteCallReq.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Command */
	                    {
	                        var iStringLength = demo_proto.REMOTE_CALL_CMD_MAX_LEN;
	                        /* read value */
	                        this.Command = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.Id */
	                    {
	                        {
	                            /* read value */
	                            this.Id = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.BodyLen */
	                    {
	                        {
	                            /* read value */
	                            this.BodyLen = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.Body */
	                    {
	                        var iStringLength = demo_proto.REMOTE_CALL_BODY_MAX_LEN;
	                        /* read value */
	                        this.Body = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    return ret.ret;
	                };
	                return DemoRemoteCallReq;
	            }(StructTdr));
	            demo_proto.DemoRemoteCallReq = DemoRemoteCallReq;
	            var DemoMsgBody = /** @class */ (function (_super) {
	                __extends(DemoMsgBody, _super);
	                function DemoMsgBody() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.DemoJoinRoomReq = new demo_proto.DemoJoinRoomReq();
	                    _this.DemoJoinRoomRes = new demo_proto.DemoJoinRoomRes();
	                    _this.DemoCloseRoomReq = new demo_proto.DemoCloseRoomReq();
	                    _this.DemoCloseRoomRes = new demo_proto.DemoCloseRoomRes();
	                    _this.DemoJoinRoomReqSpecifyRelaysvr = new demo_proto.DemoJoinRoomReqSpecifyRelaysvr();
	                    _this.DemoCreateRoomReq = new demo_proto.DemoJoinRoomReq();
	                    _this.DemoIntoRoomReq = new demo_proto.DemoJoinRoomReq();
	                    _this.DemoRemoteCallReq = new demo_proto.DemoRemoteCallReq();
	                    _this.init();
	                    return _this;
	                }
	                DemoMsgBody.getNewOne = function () { return new DemoMsgBody(); };
	                DemoMsgBody.prototype.init = function () {
	                    this.DemoJoinRoomReq = new demo_proto.DemoJoinRoomReq();
	                    this.DemoJoinRoomRes = new demo_proto.DemoJoinRoomRes();
	                    this.DemoCloseRoomReq = new demo_proto.DemoCloseRoomReq();
	                    this.DemoCloseRoomRes = new demo_proto.DemoCloseRoomRes();
	                    this.DemoJoinRoomReqSpecifyRelaysvr = new demo_proto.DemoJoinRoomReqSpecifyRelaysvr();
	                    this.DemoCreateRoomReq = new demo_proto.DemoJoinRoomReq();
	                    this.DemoIntoRoomReq = new demo_proto.DemoJoinRoomReq();
	                    this.DemoRemoteCallReq = new demo_proto.DemoRemoteCallReq();
	                    this._propsInfo = [{ "id": 161, "name": "DemoJoinRoomReq", "lawType": "demo_proto.DemoJoinRoomReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 162, "name": "DemoJoinRoomRes", "lawType": "demo_proto.DemoJoinRoomRes", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 163, "name": "DemoCloseRoomReq", "lawType": "demo_proto.DemoCloseRoomReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 164, "name": "DemoCloseRoomRes", "lawType": "demo_proto.DemoCloseRoomRes", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 165, "name": "DemoJoinRoomReqSpecifyRelaysvr", "lawType": "demo_proto.DemoJoinRoomReqSpecifyRelaysvr", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 177, "name": "DemoCreateRoomReq", "lawType": "demo_proto.DemoJoinRoomReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 178, "name": "DemoIntoRoomReq", "lawType": "demo_proto.DemoJoinRoomReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 193, "name": "DemoRemoteCallReq", "lawType": "demo_proto.DemoRemoteCallReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }];
	                };
	                DemoMsgBody.prototype.getName = function () { return "demo_proto.DemoMsgBody"; };
	                DemoMsgBody.prototype.visualizeDetail = function (msg_str, selector, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) { fixed_indent = 2; }
	                    var ret = new TdrReadRet();
	                    switch (selector) {
	                        /* visualize member: DemoJoinRoomReq */
	                        case 0xA1:
	                            {
	                                Tools.printValue(msg_str, "DemoJoinRoomReq", "", curr_indent);
	                                this.DemoJoinRoomReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: DemoJoinRoomRes */
	                        case 0xA2:
	                            {
	                                Tools.printValue(msg_str, "DemoJoinRoomRes", "", curr_indent);
	                                this.DemoJoinRoomRes.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: DemoCloseRoomReq */
	                        case 0xA3:
	                            {
	                                Tools.printValue(msg_str, "DemoCloseRoomReq", "", curr_indent);
	                                this.DemoCloseRoomReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: DemoCloseRoomRes */
	                        case 0xA4:
	                            {
	                                Tools.printValue(msg_str, "DemoCloseRoomRes", "", curr_indent);
	                                this.DemoCloseRoomRes.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: DemoJoinRoomReqSpecifyRelaysvr */
	                        case 0xA5:
	                            {
	                                Tools.printValue(msg_str, "DemoJoinRoomReqSpecifyRelaysvr", "", curr_indent);
	                                this.DemoJoinRoomReqSpecifyRelaysvr.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: DemoCreateRoomReq */
	                        case 0xB1:
	                            {
	                                Tools.printValue(msg_str, "DemoCreateRoomReq", "", curr_indent);
	                                this.DemoCreateRoomReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: DemoIntoRoomReq */
	                        case 0xB2:
	                            {
	                                Tools.printValue(msg_str, "DemoIntoRoomReq", "", curr_indent);
	                                this.DemoIntoRoomReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: DemoRemoteCallReq */
	                        case 0xC1:
	                            {
	                                Tools.printValue(msg_str, "DemoRemoteCallReq", "", curr_indent);
	                                this.DemoRemoteCallReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                    }
	                    return ret;
	                };
	                DemoMsgBody.prototype.packDetailTLV = function (selector, write, useVarInt) {
	                    return this._packDetailTLV(selector, write, useVarInt);
	                };
	                DemoMsgBody.prototype.unpackDetailTLV = function (selector, read, length, useVarInt) {
	                    return this._unpackDetailTLV(selector, read, length, useVarInt);
	                };
	                return DemoMsgBody;
	            }(UnionTdr));
	            demo_proto.DemoMsgBody = DemoMsgBody;
	            var DemoMsg = /** @class */ (function (_super) {
	                __extends(DemoMsg, _super);
	                function DemoMsg() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Head = new demo_proto.DemoMsgHead();
	                    _this.Body = new demo_proto.DemoMsgBody();
	                    _this.init();
	                    return _this;
	                }
	                DemoMsg.prototype.init = function () {
	                    this.Head = new demo_proto.DemoMsgHead();
	                    this.Body = new demo_proto.DemoMsgBody();
	                    this._propsInfo = [{ "id": 1, "name": "Head", "lawType": "demo_proto.DemoMsgHead", "countValue": null, "stringSizeValue": null, "dataType": 11 }, { "id": 2, "name": "Body", "lawType": "demo_proto.DemoMsgBody", "countValue": null, "stringSizeValue": null, "select": "Head.CmdId", "dataType": 11 }];
	                };
	                DemoMsg.getNewOne = function () { return new DemoMsg(); };
	                DemoMsg.prototype.getName = function () { return "demo_proto.DemoMsg"; };
	                DemoMsg.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) { fixed_indent = 2; }
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Head */
	                    Tools.printValue(msg_str, "Head", "", curr_indent);
	                    this.Head.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                    /* visualize member: Body */
	                    Tools.printValue(msg_str, "Body", "", curr_indent);
	                    this.Body.visualizeDetail(msg_str, this.Head.CmdId, curr_indent + fixed_indent, fixed_indent);
	                    return ret;
	                };
	                DemoMsg.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                DemoMsg.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                DemoMsg.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Head */
	                    {
	                        ret.ret = this.Head.loadDetail(read);
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    return ret.ret;
	                };
	                return DemoMsg;
	            }(StructTdr));
	            demo_proto.DemoMsg = DemoMsg;
	            var ServerNotifyData = /** @class */ (function (_super) {
	                __extends(ServerNotifyData, _super);
	                function ServerNotifyData() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.RoomID = new Long(0, 0, true);
	                    _this.UserID = 0;
	                    _this.NotifyDataLen = 0;
	                    _this.NotifyData = new Array();
	                    _this.init();
	                    return _this;
	                }
	                ServerNotifyData.prototype.init = function () {
	                    this.RoomID = new Long(0, 0, true);
	                    this.UserID = 0;
	                    this.NotifyDataLen = 0;
	                    this.NotifyData = new Array();
	                    this._propsInfo = [{ "id": 1, "name": "RoomID", "lawType": "uint64", "countValue": null, "stringSizeValue": null, "dataType": 8 }, { "id": 2, "name": "UserID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 3, "name": "NotifyDataLen", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 4 }, { "id": 4, "name": "NotifyData", "lawType": "Array<number>", "refer": "NotifyDataLen", "count": "demo_proto.NOTIFY_DATA_MAX_LEN", "countValue": 1024, "stringSizeValue": null, "dataType": 2 }];
	                };
	                ServerNotifyData.getNewOne = function () { return new ServerNotifyData(); };
	                ServerNotifyData.prototype.getName = function () { return "demo_proto.ServerNotifyData"; };
	                ServerNotifyData.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: RoomID */
	                    Tools.printValue(msg_str, "RoomID", this.RoomID.toString(), curr_indent);
	                    /* visualize member: UserID */
	                    Tools.printValue(msg_str, "UserID", this.UserID, curr_indent);
	                    /* visualize member: NotifyDataLen */
	                    Tools.printValue(msg_str, "NotifyDataLen", this.NotifyDataLen, curr_indent);
	                    /* visualize member: NotifyData */
	                    Tools.printValue(msg_str, "[NotifyData]:", this.NotifyData.join(" "), curr_indent);
	                    return ret;
	                };
	                ServerNotifyData.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                ServerNotifyData.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                ServerNotifyData.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.RoomID */
	                    {
	                        {
	                            /* read value */
	                            this.RoomID = read.readUInt64(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.UserID */
	                    {
	                        {
	                            /* read value */
	                            this.UserID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.NotifyDataLen */
	                    {
	                        {
	                            /* read value */
	                            this.NotifyDataLen = read.readUInt16(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.NotifyData */
	                    {
	                        for (var NotifyData_i = 0; NotifyData_i < demo_proto.NOTIFY_DATA_MAX_LEN; ++NotifyData_i) {
	                            {
	                                /* read value */
	                                this.NotifyData[NotifyData_i] = read.readUInt8(ret);
	                                if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                    return ret.ret;
	                            }
	                        }
	                    }
	                    return ret.ret;
	                };
	                return ServerNotifyData;
	            }(StructTdr));
	            demo_proto.ServerNotifyData = ServerNotifyData;
	            return demo_proto;
	        }
	        exports.init = init;
	    })(demo_proto = exports.demo_proto || (exports.demo_proto = {}));	});	});	unwrapExports(demo_protocol_tlv);	var mock_room = createCommonjsModule(function (module, exports) {	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);	};	Object.defineProperty(exports, "__esModule", { value: true });	var DemoProto = tdrTools.create(demo_protocol_tlv);	var noop = function () { };	var Config = {
	    WXAppid: 'wx51f01c9fd3065d7f',
	    QQAppid: '1106303575',
	    GameSvrHost: "wss://testweb.cymini.qq.com/relay_game_1",
	    TimeOut: 5000,
	    HeartBeat: 5000,
	    MaxConnectRetry: 10,
	    FrameDuplicate: 1,
	    ShowLog: false,	};	var Room = (function () {
	    function Room() {
	        this.Userinfo = {
	            uid: '1178868483',
	            openid: '1DFBB0138089DE4DD4DFC7EA5902E6DC',
	            accessToken: '9F9A6F53331941FAA860974D23105E5C',
	            platform: 'qq',
	            devicePlatform: 102,
	        };
	        this.socket = null;
	        this.buff = null;
	        this.lockStepInfo = {
	            playerCount: 0,
	            gameRoomID: 0,
	            gameUserID: 0,
	            roomUserCount: 0,
	            lockstepPlayerIDList: [],
	            innerUserID: 0,
	            frameIntervalMs: 0,
	            relayUrlList: [],
	            relayRoomID: 0,
	            relaySvrRoomID: "",
	            userID: 0,
	            userIDKey: "",
	            userOpenID: "",
	            question: "",
	            sigBuf: "",
	            wait_time: 10000,
	            UserID: 0,
	        };
	        this.nextHandle = "";
	        this.joinPro = null;
	        this.joinRes = null;
	        this.joinRej = null;
	        this.showLog = null;
	        this.HeiheiLog = { log: noop };
	    }
	    Room.prototype.genRoomSvrUrl = function () {
	        var host = Config.GameSvrHost;
	        var openid = this.Userinfo.openid;
	        var accessToken = this.Userinfo.accessToken;
	        var devicePlatform = this.Userinfo.devicePlatform;
	        var accountType = 0;
	        var appid = '';
	        if (this.Userinfo.platform == 'qq') {
	            accountType = 4099;
	            appid = Config.QQAppid;
	        }
	        else {
	            accountType = 4098;
	            appid = Config.WXAppid;
	        }
	        host += "?account_value=" + openid + "&account_type=" + accountType + "&token=" + accessToken + "&appid=" + appid + "&client_type=" + devicePlatform;
	        return host;
	    };
	    Room.prototype.mockConsole = function () {
	        var _this = this;
	        var _console = Object.assign({}, console);
	        ['log', 'info', 'warn', 'error', 'debug'].map(function (method) {
	            _this.HeiheiLog[method] = function () {
	                var args = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    args[_i] = arguments[_i];
	                }
	                _this.showLog && _console && _console[method].apply(_console, args);
	            };
	        });
	    };
	    Room.prototype.init = function (_a) {
	        var _this = this;
	        var onInit = _a.onInit, userInfo = _a.userInfo, showLog = _a.showLog;
	        this.showLog = showLog;
	        this.mockConsole();
	        this.Userinfo = __assign(__assign({}, this.Userinfo), userInfo);
	        var connectUrl = this.genRoomSvrUrl();
	        this.socket = new WebSocket(connectUrl);
	        this.socket.binaryType = "arraybuffer";
	        this.socket.onopen = function () {
	            _this.buff = new ArrayBuffer(20480);
	        };
	        this.socket.onmessage = function (e) {
	            var data = e.data;
	            if (typeof data === 'string') {
	                data = JSON.parse(data);
	            }
	            else {
	                data = _this.dataDecode(data);
	            }
	            if (data.tws_notify_type) {
	                if (data.tws_notify_type == 'pass') {
	                    onInit && onInit();
	                }
	                else if (data.tws_notify_type == 'close') {
	                    _this.HeiheiLog.log("websocket server tell close, ", data.detail);
	                }
	            }
	            else {
	                _this.notifyCb(data);
	            }
	        };
	        this.socket.onerror = function () {
	            _this.close();
	        };
	        this.socket.onclose = function () {
	            _this.close();
	        };
	    };
	    Room.prototype.send = function (msg) {
	        if (this.socket) {
	            msg = this.dataEncode(msg);
	            this.socket.send(msg);
	        }
	    };
	    Room.prototype.dataEncode = function (msg) {
	        var data = new tdrTools.TdrData(this.buff, 0);
	        var ret = msg.packTLV(data, false);
	        if (ret != tdrTools.ErrorType.TDR_NO_ERROR) {
	            this.HeiheiLog.error("socket data encode failed", ret);
	            return ret;
	        }
	        var newBuff = new ArrayBuffer(data.usedSize);
	        var msgBodyDv = new Uint8Array(newBuff, 0, data.usedSize);
	        msgBodyDv.set(new Uint8Array(data.arrayBuffer.slice(0, data.usedSize)));
	        return newBuff;
	    };
	    Room.prototype.dataDecode = function (data) {
	        var msgBodyTdrData = {
	            arrayBuffer: data,
	            size: data.byteLength,
	            offset: 0,
	            usedSize: 0,
	        };
	        var out_pkg = DemoProto.DemoMsg.getNewOne();
	        var ret = out_pkg.unpackTLV(msgBodyTdrData);
	        if (ret != tdrTools.ErrorType.TDR_NO_ERROR) {
	            this.HeiheiLog.error("socket data decode failed", ret);
	            return ret;
	        }
	        return out_pkg;
	    };
	    Room.prototype.close = function () {
	        if (this.socket) {
	            this.socket.onopen = null;
	            this.socket.onmessage = null;
	            this.socket.onclose = null;
	            this.socket.onerror = null;
	            this.socket.close();
	            this.socket = null;
	        }
	    };
	    Room.prototype.reconnectCb = function (res) {
	        this.HeiheiLog.log('reconnectCb', res);
	    };
	    Room.prototype.errorCodeCb = function (res) {
	        this.HeiheiLog.log('errorCodeCb', res);
	    };
	    Room.prototype.notifyCb = function (res) {
	        this.HeiheiLog.log('notifyCb', res);
	        var cmdId = res.Head.CmdId;
	        switch (cmdId) {
	            case DemoProto.DEMO_MSG_REMOTE_CALL_REQ: {
	                this.onRemoteCallResp(res.Body.DemoRemoteCallReq);
	                break;
	            }
	            case DemoProto.DEMO_MSG_JOIN_ROOM_RES: {
	                this.joinRoomRes(res.Body.DemoJoinRoomRes);
	                break;
	            }
	            default: {
	                this.HeiheiLog.log("default case");
	            }
	        }
	    };
	    Room.prototype.remoteCallReq = function (command) {
	        var msgHead = DemoProto.DemoMsgHead.getNewOne();
	        msgHead.Version = 1;
	        msgHead.CmdId = DemoProto.DEMO_MSG_REMOTE_CALL_REQ;
	        var remoteCall = DemoProto.DemoRemoteCallReq.getNewOne();
	        var json = {
	            RoomID: +this.lockStepInfo.gameRoomID,
	            PlayerCount: +this.lockStepInfo.playerCount,
	            UserID: +this.lockStepInfo.UserID,
	            RoomOption: {
	                frame_interval_ms: +this.lockStepInfo.frameIntervalMs || 60,
	                wait_time: +this.lockStepInfo.wait_time || 10000,
	                min_user_count: 255,
	                room_life_time: 0,
	                broadcast_to_self: 1,
	            },
	        };
	        console.log('remoteCallReq', json, command, new Date().getMinutes() + "\u5206 " + new Date().getSeconds() + "\u79D2");
	        var json_str = JSON.stringify(json);
	        remoteCall.Body = json_str;
	        remoteCall.BodyLen = json_str.length;
	        remoteCall.Command = command;
	        var msgBody = DemoProto.DemoMsgBody.getNewOne();
	        msgBody.DemoRemoteCallReq = remoteCall;
	        var msg = DemoProto.DemoMsg.getNewOne();
	        msg.Head = msgHead;
	        msg.Body = msgBody;
	        this.send(msg);
	    };
	    Room.prototype.onRemoteCallResp = function (res) {
	        var bodyObj = JSON.parse(res.Body);
	        if (bodyObj.Code != 0) {
	            console.error("--->remote call error!", res);
	            return;
	        }
	        console.log("--->onRemoteCallResp", res);
	        if (res.Command == "demo_svr_enum_room") {
	            var tagList = [];
	            for (var i = 0; i < bodyObj.RoomID.length; i++) {
	                var roomID = bodyObj.RoomID[i];
	                tagList[roomID - 1] = true;
	            }
	            for (var i = 0; i < tagList.length + 1; i++) {
	                if (!tagList[i]) {
	                    this.lockStepInfo.gameRoomID = i + 1;
	                    console.log("--->createRoomID:", this.lockStepInfo.gameRoomID);
	                    break;
	                }
	            }
	            if (this.nextHandle) {
	                this.remoteCallReq(this.nextHandle);
	                this.nextHandle = null;
	            }
	        }
	        if (res.Command == "demo_svr_leave_room") {
	            this.joinRes(res);
	        }
	    };
	    Room.prototype.joinRoomRes = function (res) {
	        this.HeiheiLog.log("--->joinRoomRes", res);
	        if (res.UserAccessInfoLen > 0) {
	            var accessStr = this.convertArrayToString(res.UserAccessInfo);
	            var accessObj = JSON.parse(accessStr);
	            var accessInfo = accessObj.info;
	            this.HeiheiLog.log('--->accessInfo:', accessInfo);
	            this.lockStepInfo.roomUserCount = res.RoomUserCount;
	            this.lockStepInfo.lockstepPlayerIDList = res.LockstepPlayerIDList;
	            this.lockStepInfo.innerUserID = res.InnerUserID;
	            this.lockStepInfo.frameIntervalMs = accessInfo.frame_interval_ms;
	            this.lockStepInfo.relaySvrRoomID = accessInfo.m_svr_roomid;
	            this.lockStepInfo.relayRoomID = parseInt(accessInfo.room_id);
	            this.lockStepInfo.userID = parseInt(accessInfo.user_id);
	            this.lockStepInfo.userIDKey = accessInfo.user_id_key;
	            this.lockStepInfo.userOpenID = accessInfo.user_openid;
	            var urlList = [];
	            for (var i = 0; i < accessInfo.tcp_access_ip.length; i++) {
	                urlList.push(accessInfo.tcp_access_ip[i]);
	            }
	            this.lockStepInfo.relayUrlList = urlList;
	        }
	        this.joinRes(accessInfo);
	    };
	    Room.prototype.convertArrayToString = function (list) {
	        var ret = [];
	        for (var i = 0; i < list.length; i++) {
	            var item = list[i];
	            var asciiCode = parseInt(item, 10);
	            var charValue = String.fromCharCode(asciiCode);
	            ret.push(charValue);
	        }
	        ret.pop();
	        return ret.join('');
	    };
	    Room.prototype.createRoom = function (data) {
	        var _this = this;
	        if (!this.socket) {
	            return;
	        }
	        this.lockStepInfo.playerCount = data.playerCount;
	        this.lockStepInfo.UserID = data.UserID;
	        this.joinPro = new Promise(function (res, rej) {
	            _this.joinRes = res;
	            _this.joinRej = rej;
	        });
	        this.remoteCallReq("demo_svr_enum_room");
	        this.nextHandle = "demo_svr_create_room";
	        return this.joinPro;
	    };
	    Room.prototype.createAsyncRoom = function (data) {
	        var _this = this;
	        if (!this.socket) {
	            return;
	        }
	        this.lockStepInfo.playerCount = data.playerCount;
	        this.lockStepInfo.UserID = data.UserID;
	        this.lockStepInfo.frameIntervalMs = data.frameIntervalMS;
	        this.lockStepInfo.wait_time = data.wait_time;
	        this.joinPro = new Promise(function (res, rej) {
	            _this.joinRes = res;
	            _this.joinRej = rej;
	        });
	        if (data.roomID) {
	            this.lockStepInfo.gameRoomID = data.roomID;
	            this.remoteCallReq('demo_svr_AsynCreateRoom');
	        }
	        else {
	            this.remoteCallReq("demo_svr_enum_room");
	            this.nextHandle = "demo_svr_AsynCreateRoom";
	        }
	        return this.joinPro;
	    };
	    Room.prototype.joinRoom = function (data) {
	        var _this = this;
	        if (!this.socket) {
	            return;
	        }
	        this.lockStepInfo.gameRoomID = data.roomID;
	        this.lockStepInfo.playerCount = data.playerCount;
	        this.lockStepInfo.UserID = data.UserID;
	        this.joinPro = new Promise(function (res, rej) {
	            _this.joinRes = res;
	            _this.joinRej = rej;
	        });
	        this.remoteCallReq("demo_svr_join_room");
	        return this.joinPro;
	    };
	    Room.prototype.leaveRoom = function (data) {
	        var _this = this;
	        if (!this.socket) {
	            return;
	        }
	        this.lockStepInfo.gameRoomID = data.roomID;
	        this.lockStepInfo.playerCount = data.playerCount;
	        this.lockStepInfo.UserID = data.UserID;
	        this.joinPro = new Promise(function (res, rej) {
	            _this.joinRes = res;
	            _this.joinRej = rej;
	        });
	        this.remoteCallReq("demo_svr_leave_room");
	        return this.joinPro;
	    };
	    return Room;	}());	exports.default = new Room();	});	unwrapExports(mock_room);	var mock_data = createCommonjsModule(function (module, exports) {	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);	};	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });	};	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }	};	Object.defineProperty(exports, "__esModule", { value: true });	var noop = function () { };	var MockDataClass = (function () {
	    function MockDataClass() {
	        this.globalConfig = {
	            gameId: 'web-test',
	            openID: '1DFBB0138089DE4DD4DFC7EA5902E6DC',
	            accessToken: '9F9A6F53331941FAA860974D23105E5C',
	            uid: '1178868483',
	            platform: 'qq',
	            devicePlatform: 102,
	        };
	        this.baseGameStatus = {};
	        this.baseRes = {
	            ret: 0,
	            data: {},
	            msg: '',
	            version: 'web-test'
	        };
	        this.uid_list = [];
	        this.userInfoMap = {};
	        this.userRelationMap = {};
	        this.webGameGradeInfo = [];
	        this.roomPlayerList = [];
	        this.eventMap = {};
	        this.showLog = true;
	        this.HeiheiLog = { log: noop };
	        this.fakeUserList = [{
	                token: this.globalConfig.accessToken,
	                openId: this.globalConfig.openID,
	                platform: this.globalConfig.platform,
	                uid: this.globalConfig.uid,
	            }, {
	                uid: '1112395175',
	                openId: '06609552A71C7EC85DC4CBFC9F93D2C2',
	                token: '55A9B11AEA1ED5FD49A6CC5628517165',
	                headUrl: 'https://piccdn.cymini.qq.com/cy_head/176172415/bfb5f56015d88949c59d474a709dd02e/128'
	            }, {
	                uid: '1958477247',
	                openId: 'oEEEQ0g-DRSzZ5_nNOtt19mN8TlQ',
	                token: '28_qe-wljNezCXNe0Y0Qn33JB8byUNRj1ItGI_m-wsYOmDEy0zlC-J9SHH2yw_B6x_DzGFbIsHVeaBVCX4dSvvoeyFPM_jP8Oc_Or9ZeeM2FZ4',
	                headUrl: 'https://piccdn.cymini.qq.com/cy_head/645954596/8fc01085d281967560d2427105fc3cbe/128'
	            }, {
	                uid: '1363939088',
	                openId: '46923B51FED7376EE8719C04656C0275',
	                token: '04DD183D20B09A525FC57AD6E62A0224',
	                headUrl: 'https://piccdn.cymini.qq.com/cy_head/308817152/7cd920e9846c17312a3647c9ac39569e/128'
	            }, {
	                uid: '314953744',
	                openId: 'FB0427301C93A34653DB063382BAD9E7',
	                token: '299671E7EC1F314BD4BCE0D0148678AE',
	                headUrl: 'https://piccdn.cymini.qq.com/cy_head/492691880/4cd732125e480f618b41153008231a2f/128'
	            }, {
	                uid: '119468568',
	                openId: '9B202A226959206C2EB0CA4951797F8D',
	                token: '7E5026493EEDD4A30137FADD51FF0750',
	                headUrl: 'https://piccdn.cymini.qq.com/cy_head/441867336/236215263bf383a46f6d4b08136ea6dc/128'
	            }, {
	                uid: '2033570448',
	                openId: '8B46E06FA91B2501B7D66E01DACB8395',
	                token: 'ECF988ACF349053C6AA11E1F3B8D8258',
	                headUrl: 'https://piccdn.cymini.qq.com/cy_head/824723537/ac7b11faa62af253420f20eda54a5ff6/128'
	            }];
	    }
	    MockDataClass.prototype.initFakeData = function () {
	        var _this = this;
	        var fakeuid = "" + this.globalConfig.uid;
	        this.userRelationMap = {
	            '2116923515': {
	                "uid": "2116923515",
	                "relation": 1
	            },
	            '1112395175': {
	                "uid": "1112395175",
	                "relation": 2
	            },
	            fakeuid: {
	                "uid": fakeuid,
	                "relation": 3
	            },
	            '1956777675': {
	                "uid": "1956777675",
	                "relation": 4
	            }
	        };
	        this.userInfoMap = {
	            '2116923515': {
	                "headUrl": "http:\/\/119.28.89.96\/cyminiproxy.php?url=http:\/\/183.57.50.47:80\/cy_head\/463004946\/bf1db8c6957f6b0941a00356ef2586fd\/128",
	                "uid": "2116923515",
	                "nick": "stev",
	                "gender": 2
	            },
	            fakeuid: {
	                "headUrl": "http://q.qlogo.cn/qqapp/1106303575/1DFBB0138089DE4DD4DFC7EA5902E6DC/100",
	                "uid": fakeuid,
	                "nick": "ranpeng",
	                "gender": 1
	            },
	            '1956777675': {
	                "headUrl": "http:\/\/119.28.89.96\/cyminiproxy.php?url=http:\/\/183.57.50.47:80\/cy_head\/463004946\/bf1db8c6957f6b0941a00356ef2586fd\/128",
	                "uid": "1956777675",
	                "nick": "bill",
	                "gender": 2
	            },
	            '1112395175': {
	                "headUrl": "http:\/\/119.28.89.96\/cyminiproxy.php?url=http:\/\/183.57.50.47:80\/cy_head\/463004946\/bf1db8c6957f6b0941a00356ef2586fd\/128",
	                "uid": "1112395175",
	                "nick": "aguang",
	                "gender": 2
	            },
	            '1958477247': {
	                'uid': '1958477247',
	                'nick': "test1",
	                'headUrl': 'https://piccdn.cymini.qq.com/cy_head/645954596/8fc01085d281967560d2427105fc3cbe/128',
	                "gender": 2
	            },
	            '1363939088': {
	                'uid': '1363939088',
	                'nick': "test2",
	                'headUrl': 'https://piccdn.cymini.qq.com/cy_head/308817152/7cd920e9846c17312a3647c9ac39569e/128',
	                "gender": 2
	            },
	            '314953744': {
	                'uid': '314953744',
	                'nick': "test3",
	                'headUrl': 'https://piccdn.cymini.qq.com/cy_head/492691880/4cd732125e480f618b41153008231a2f/128',
	                "gender": 2
	            },
	            '119468568': {
	                'uid': '119468568',
	                'nick': "test4",
	                'headUrl': 'https://piccdn.cymini.qq.com/cy_head/441867336/236215263bf383a46f6d4b08136ea6dc/128',
	                "gender": 2
	            },
	            '2033570448': {
	                'uid': '2033570448',
	                'nick': "test5",
	                'headUrl': 'https://piccdn.cymini.qq.com/cy_head/824723537/ac7b11faa62af253420f20eda54a5ff6/128',
	                "gender": 2
	            }
	        };
	        this.uid_list = [2116923515, 1112395175, this.globalConfig.uid, 1956777675, 0, 0, 0];
	        this.uid_list.forEach(function (uid, i) {
	            _this.roomPlayerList.push({
	                "isEmptyPosition": 0,
	                "isMicOpen": 0,
	                "uid": uid,
	                "gameId": _this.globalConfig.gameId,
	                "gameStatus": 0,
	                "posOpenStatus": 0,
	                "isMicClosedByHost": 0,
	                "positionId": i,
	            });
	            uid && _this.webGameGradeInfo.push({
	                "seasonId": 1,
	                "gradeScore": 10000 * i,
	                "uid": uid
	            });
	        });
	    };
	    MockDataClass.prototype.init = function (_a) {
	        var _this = this;
	        var gameId = _a.gameId, tag = _a.tag, version = _a.version, userInfo = _a.userInfo, showLog = _a.showLog;
	        this.showLog = showLog;
	        this.mockConsole();
	        this.HeiheiLog.log(gameId, tag, version, userInfo);
	        if (userInfo) {
	            this.globalConfig = __assign({ gameId: gameId }, userInfo);
	        }
	        else {
	            this.globalConfig.gameId = gameId;
	        }
	        this.baseGameStatus = {
	            gameRoute: {
	                gameSvrId: 1,
	                gameRoomId: '2',
	                gameId: this.globalConfig.gameId,
	            },
	            gameStatus: 1,
	            openId: this.globalConfig.openID,
	            token: this.globalConfig.accessToken,
	            maybeInvalidate: false,
	        };
	        this.initFakeData();
	        window['dsBridge'] = {
	            call: function (name, params, cb) {
	                if (_this[name]) {
	                    _this[name](params, cb);
	                }
	                else {
	                    cb(JSON.stringify(__assign({}, _this.baseRes)));
	                }
	            },
	            register: function (name, cb) {
	                _this.eventMap[name] = cb;
	            }
	        };
	    };
	    MockDataClass.prototype.mockConsole = function () {
	        var _this = this;
	        var _console = Object.assign({}, console);
	        ['log', 'info', 'warn', 'error', 'debug'].map(function (method) {
	            _this.HeiheiLog[method] = function () {
	                var args = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    args[_i] = arguments[_i];
	                }
	                _this.showLog && _console && _console[method].apply(_console, args);
	            };
	        });
	    };
	    MockDataClass.prototype.getRoomInfoV2 = function (params, cb) {
	        this.HeiheiLog.log(params);
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { data: {
	                "roomId": "1",
	                "selfUid": this.globalConfig.uid,
	                "hostUid": this.globalConfig.uid,
	                "isHost": true,
	            } })));
	    };
	    MockDataClass.prototype.getUserInfo = function (params, cb) {
	        this.HeiheiLog.log(params);
	        var userInfo = [];
	        for (var key in this.userInfoMap) {
	            userInfo.push(this.userInfoMap[key]);
	        }
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { data: {
	                list: userInfo
	            } })));
	    };
	    MockDataClass.prototype.getFriendRelation = function (params, cb) {
	        this.HeiheiLog.log(params);
	        var userRelation = [];
	        for (var key in this.userRelationMap) {
	            userRelation.push(this.userRelationMap[key]);
	        }
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": {
	                "selfUid": this.globalConfig.uid,
	                "list": userRelation
	            } })));
	    };
	    MockDataClass.prototype.getUserStatus = function (params, cb) {
	        this.HeiheiLog.log(params);
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": {
	                list: this.roomPlayerList,
	                changeType: 1
	            } })));
	    };
	    MockDataClass.prototype.getGameStatus = function (params, cb) {
	        this.HeiheiLog.log(params);
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": __assign(__assign({}, this.baseGameStatus), { gameStatus: this.baseGameStatus.gameStatus }) })));
	    };
	    MockDataClass.prototype.getDeviceInfo = function (params, cb) {
	        this.HeiheiLog.log(params);
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": {
	                "version": "webtest70",
	                "serverType": "daily",
	                "loginType": 2,
	                "platform": 0,
	                "model": "IOS_Apple_iPhone8,1_11.4.1_0.0.170.1_RDMJB_CN"
	            } })));
	    };
	    MockDataClass.prototype.userReady = function (params, cb) {
	        var uid = params.uid;
	        var player = this.roomPlayerList.find(function (p) { return p.uid == uid; });
	        player.gameStatus = 1;
	        cb(JSON.stringify(__assign({}, this.baseRes)));
	        window['HeiheiJSBridge'].onUserStatusUpdate(__assign({}, this.baseRes));
	    };
	    MockDataClass.prototype.userFollow = function (params, cb) {
	        var uid = params.uid;
	        this.userRelationMap[uid].relation = 2;
	        cb(JSON.stringify(__assign({}, this.baseRes)));
	        window['HeiheiJSBridge'].onRelationChange(__assign({}, this.baseRes));
	    };
	    MockDataClass.prototype.startGame = function (params, cb) {
	        this.HeiheiLog.log(params);
	        this.baseGameStatus.gameStatus = 2;
	        this.baseGameStatus.gameRoute.gameRoomId = '123';
	        cb(JSON.stringify(__assign({}, this.baseRes)));
	        window['HeiheiJSBridge'].onGameStatusUpdate(__assign({}, this.baseRes));
	    };
	    MockDataClass.prototype.joinMic = function (params, cb) {
	        var uid = params.uid;
	        var player = this.roomPlayerList.find(function (p) { return p.uid == uid; });
	        player.isMicOpen = 1;
	        cb(JSON.stringify(__assign({}, this.baseRes)));
	        window['HeiheiJSBridge'].onUserStatusUpdate(__assign({}, this.baseRes));
	    };
	    MockDataClass.prototype.getWebGameGradeInfo = function (params, cb) {
	        this.HeiheiLog.log(params);
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": this.webGameGradeInfo })));
	    };
	    MockDataClass.prototype.getLoginUserInfo = function (params, cb) {
	        var needOpenId = params.needOpenId, needAccessToken = params.needAccessToken, needLoginPlatform = params.needLoginPlatform, needCoinAmount = params.needCoinAmount;
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": {
	                "headUrl": "http://q.qlogo.cn/qqapp/1106303575/1DFBB0138089DE4DD4DFC7EA5902E6DC/100",
	                "uid": this.globalConfig.uid,
	                "nick": "ranpeng",
	                "gender": 1,
	                "openId": needOpenId && this.globalConfig.openID,
	                "accessToken": needAccessToken && this.globalConfig.accessToken,
	                "loginPlatform": needLoginPlatform && 1,
	                "coinAmount": needCoinAmount && 5000,
	            } })));
	    };
	    MockDataClass.prototype.getNetworkState = function (params, cb) {
	        this.HeiheiLog.log(params);
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": {
	                "isConnected": true,
	                "networkType": "wifi"
	            } })));
	    };
	    MockDataClass.prototype.sendGift = function (params, cb) {
	        this.HeiheiLog.log(params);
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": {
	                "remainCoinAmount": 100
	            } })));
	    };
	    MockDataClass.prototype.getConsoleGameLoginRankInfo = function (params, cb) {
	        this.HeiheiLog.log(params);
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": {
	                "score": "10200",
	                "rank": "200",
	            } })));
	    };
	    MockDataClass.prototype['battle.getBattleInfo'] = function (params, cb) {
	        return __awaiter(this, void 0, void 0, function () {
	            var _this = this;
	            return __generator(this, function (_a) {
	                this.HeiheiLog.log(params);
	                mock_room.default.init({
	                    onInit: function () { return __awaiter(_this, void 0, void 0, function () {
	                        var createRoomRes, joinRoomRes, _a, createRoom, joinRoom, _b, playerCount, _c, playerId, _d, roomID, _e, wait_time, _f, frameIntervalMS, UserID, accessInfo, userList, i, user1, userInfo, res;
	                        return __generator(this, function (_g) {
	                            switch (_g.label) {
	                                case 0:
	                                    _a = this.searchToObject(window.location.search.slice(1)) || {}, createRoom = _a.createRoom, joinRoom = _a.joinRoom, _b = _a.playerCount, playerCount = _b === void 0 ? 1 : _b, _c = _a.playerId, playerId = _c === void 0 ? 1 : _c, _d = _a.roomID, roomID = _d === void 0 ? null : _d, _e = _a.wait_time, wait_time = _e === void 0 ? 10000 : _e, _f = _a.frameIntervalMS, frameIntervalMS = _f === void 0 ? 60 : _f;
	                                    UserID = this.fakeUserList[playerId - 1].uid;
	                                    if (!(createRoom || joinRoom)) return [3, 10];
	                                    if (!createRoom) return [3, 7];
	                                    if (!roomID) return [3, 3];
	                                    return [4, mock_room.default.leaveRoom({ playerCount: playerCount, roomID: roomID })];
	                                case 1:
	                                    _g.sent();
	                                    return [4, mock_room.default.createAsyncRoom({ playerCount: playerCount, wait_time: wait_time, frameIntervalMS: frameIntervalMS, roomID: roomID, UserID: UserID })];
	                                case 2:
	                                    createRoomRes = _g.sent();
	                                    return [3, 5];
	                                case 3: return [4, mock_room.default.createAsyncRoom({ playerCount: playerCount, wait_time: wait_time, frameIntervalMS: frameIntervalMS, UserID: UserID })];
	                                case 4:
	                                    createRoomRes = _g.sent();
	                                    _g.label = 5;
	                                case 5:
	                                    if (!(createRoomRes == 202)) return [3, 7];
	                                    return [4, mock_room.default.joinRoom({ playerCount: playerCount, UserID: UserID })];
	                                case 6:
	                                    createRoomRes = _g.sent();
	                                    _g.label = 7;
	                                case 7:
	                                    if (!joinRoom) return [3, 9];
	                                    return [4, mock_room.default.joinRoom({ playerCount: playerCount, roomID: roomID, UserID: UserID })];
	                                case 8:
	                                    joinRoomRes = _g.sent();
	                                    _g.label = 9;
	                                case 9: return [3, 12];
	                                case 10: return [4, mock_room.default.createAsyncRoom({ playerCount: 1, wait_time: wait_time, frameIntervalMS: frameIntervalMS, UserID: UserID })];
	                                case 11:
	                                    createRoomRes = _g.sent();
	                                    _g.label = 12;
	                                case 12:
	                                    accessInfo = createRoomRes || joinRoomRes;
	                                    userList = [];
	                                    for (i = 0; i < playerCount; i++) {
	                                        user1 = this.fakeUserList[i];
	                                        userList.push({
	                                            campId: 0,
	                                            isAi: 0,
	                                            matchFromInfo: {
	                                                chatRoomId: user1.uid,
	                                                inviteId: "0",
	                                                userFrom: 1
	                                            },
	                                            uid: user1.uid
	                                        });
	                                    }
	                                    userInfo = {
	                                        accessToken: this.fakeUserList[playerId - 1].token,
	                                        loginType: 2,
	                                        openId: this.fakeUserList[playerId - 1].openId,
	                                        platform: this.globalConfig.platform,
	                                        uid: this.fakeUserList[playerId - 1].uid,
	                                        headUrl: this.fakeUserList[playerId - 1].headUrl,
	                                        coinAmount: 0,
	                                    };
	                                    res = {
	                                        battleInfo: {
	                                            battleAccessInfo: {
	                                                battleAccessInfo: "",
	                                                gameRouteInfo: {
	                                                    gameId: 203,
	                                                    gameRoomId: "1188787996120453120",
	                                                    gameSvrId: 1
	                                                }
	                                            },
	                                            battleId: "1188787996120453120",
	                                            battleType: 2,
	                                            userAccessInfoList: [
	                                                {
	                                                    lockstepPlayerId: accessInfo.user_id,
	                                                    uid: userInfo.uid,
	                                                    userAccessInfo: JSON.stringify({
	                                                        version: "0.1.1",
	                                                        type: "apollo_relay_room_client_access_url",
	                                                        info: accessInfo
	                                                    })
	                                                }
	                                            ]
	                                        },
	                                        matchResult: {
	                                            gameId: 203,
	                                            modeId: 2,
	                                            userList: userList
	                                        },
	                                        userInfo: userInfo,
	                                        returnInfo: {
	                                            "type": "room",
	                                            "data": ""
	                                        }
	                                    };
	                                    cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": __assign({}, res) })));
	                                    return [2];
	                            }
	                        });
	                    }); },
	                    userInfo: this.globalConfig,
	                    showLog: this.showLog
	                });
	                return [2];
	            });
	        });
	    };
	    MockDataClass.prototype.commitLSGameResult = function (params, cb) {
	        this.HeiheiLog.log(params);
	        cb(JSON.stringify(__assign({}, this.baseRes)));
	        window['HeiheiJSBridge'].onReceivedBattleResultInfo(__assign(__assign({}, this.baseRes), { data: {
	                gameId: this.globalConfig.gameId,
	                battleId: 'web-test-battle-id',
	                userResult: {
	                    uid: this.globalConfig.uid,
	                    campId: 1,
	                    score: 2345,
	                    rank: 2,
	                    result: 1,
	                    userResultFlag: 0,
	                    seasonId: 2,
	                    oldGradeScore: 1234,
	                    newGradeScore: 2345,
	                    punishmentFlag: 0,
	                    continueWinNum: 1,
	                }
	            } }));
	    };
	    MockDataClass.prototype.onGameStatusUpdate = function () {
	        this.eventMap['onGameStatusUpdate'](JSON.stringify(__assign(__assign({}, this.baseRes), { "data": {
	                "score": "10200",
	                "rank": "200",
	            } })));
	    };
	    MockDataClass.prototype.createUdpWebSocket = function (params, cb) {
	        this.HeiheiLog.log(params);
	        cb(JSON.stringify(__assign(__assign({}, this.baseRes), { "data": {
	                host: params.host,
	                port: params.port,
	                url: 'ws://localhost:9557'
	            } })));
	    };
	    MockDataClass.prototype.searchToObject = function (url) {
	        var pairs = url.split("&"), obj = {}, pair, i;
	        for (i in pairs) {
	            if (pairs[i] === "")
	                continue;
	            pair = pairs[i].split("=");
	            obj[decodeURIComponent(pair[0])] = decodeURIComponent(pair[1]);
	        }
	        return obj;
	    };
	    return MockDataClass;	}());	var MockData = new MockDataClass();	window['MockData'] = MockData;	exports.default = MockData;	});	unwrapExports(mock_data);	var heihei_js_bridge = createCommonjsModule(function (module, exports) {	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);	};	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });	};	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }	};	Object.defineProperty(exports, "__esModule", { value: true });	var empty = {};	var noop = function () { };	function stringify(obj, replacer, spaces, cycleReplacer) {
	    return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);	}	function serializer(replacer, cycleReplacer) {
	    var stack = [], keys = [];
	    if (cycleReplacer == null)
	        cycleReplacer = function (key, value) {
	            if (stack[0] === value)
	                return "[Circular ~]";
	            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
	        };
	    return function (key, value) {
	        if (stack.length > 0) {
	            var thisPos = stack.indexOf(this);
	            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
	            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
	            if (~stack.indexOf(value))
	                value = cycleReplacer.call(this, key, value);
	        }
	        else
	            stack.push(value);
	        return replacer == null ? value : replacer.call(this, key, value);
	    };	}	var HeiheiJSBridgeClass = (function () {
	    function HeiheiJSBridgeClass() {
	        var _this = this;
	        this.dsBridge = null;
	        this.isAPKVersion = false;
	        this.needWriteClientLog = false;
	        this.jsbridgeCompleteInit = noop;
	        this.isJSFunctionRegist = false;
	        this.baseParams = {
	            gameId: null,
	            version: null
	        };
	        this.gameTag = null;
	        this.userInfo = null;
	        this.showLog = null;
	        this.HeiheiLog = { log: noop };
	        this.mockConsole();
	        if (window['jsb']) {
	            this.isAPKVersion = true;
	        }
	        window["onHeiHeiReady"] = function () {
	            console.log('onHeiHeiReady');
	            _this.registerJSFunction();
	        };
	        window['HeiheiJSBridge'] = {};
	    }
	    HeiheiJSBridgeClass.prototype.init = function (config) {
	        if (config === void 0) { config = {}; }
	        var gameId = config.gameId, tag = config.tag, version = config.version, _a = config.complete, complete = _a === void 0 ? noop : _a, userInfo = config.userInfo, _b = config.showLog, showLog = _b === void 0 ? true : _b, _c = config.needWriteClientLog, needWriteClientLog = _c === void 0 ? false : _c, _d = config.needWriteLogType, needWriteLogType = _d === void 0 ? ['log', 'info', 'warn', 'error', 'debug'] : _d;
	        this.baseParams.gameId = gameId;
	        this.gameTag = tag;
	        this.baseParams.version = version;
	        this.jsbridgeCompleteInit = complete;
	        this.userInfo = userInfo;
	        this.showLog = showLog;
	        this.needWriteClientLog = needWriteClientLog;
	        this.needWriteLogType = needWriteLogType;
	        console.log("jsbridge init tnpm package version: 0.5.35");
	        if (/cymini/i.test(navigator.userAgent.toLowerCase())) {
	            this.checkClientIsReady();
	        }
	        else {
	            this.initAdapterJsBridge();
	        }
	    };
	    HeiheiJSBridgeClass.prototype.initAdapterJsBridge = function () {
	        this.HeiheiLog.log('initAdapterJsBridge');
	        mock_data.default.init({
	            gameId: this.baseParams.gameId,
	            tag: this.gameTag,
	            version: this.baseParams.version,
	            userInfo: this.userInfo,
	            showLog: this.showLog
	        });
	        this.registerJSFunction();
	        this.needWriteClientLog = false;
	    };
	    HeiheiJSBridgeClass.prototype.checkClientIsReady = function () {
	        if (window["dsBridge"]) {
	            this.registerJSFunction();
	            this.writeLogToClient(this.needWriteLogType);
	        }
	    };
	    HeiheiJSBridgeClass.prototype.registerJSFunction = function () {
	        if (!this.dsBridge && !this.isJSFunctionRegist) {
	            this.dsBridge = window["dsBridge"];
	            this.registerGameStatusUpdate();
	            this.registerUserStatusUpdate();
	            this.registerNetworkChange();
	            this.registerOnMessage();
	            this.registerVoiceChange();
	            this.registerRelationChange();
	            this.registerAppEnterForeground();
	            this.registerAppEnterBackground();
	            this.registerConsoleGameSoundEnableChange();
	            this.registerGameSoundEnableChange();
	            this.registerAccessTokenChanged();
	            this.registerCoinAmountChanged();
	            this.registerReceivedBattleUserMessage();
	            this.registerReceivedBattleResultInfo();
	            this.registerReceived1v1Invite();
	            this.registerCanceled1v1Invite();
	            this.registerRejected1v1Invite();
	            this.registerNeedRefreshGame();
	            this.registerReceivedGameInvite();
	            this.registerUserExitLsGame();
	            this.registerBackPressed();
	            this.registerWorkerMessage();
	            this.registerWorkerClose();
	            this.registerDownLoadFileProgress();
	            this.registerUnzipProgress();
	            this.registerUdpRecv();
	            this.jsbridgeCompleteInit();
	            this.isJSFunctionRegist = true;
	            this.jsbridgeCompleteInit = noop;
	            console.log("jsBridge registerJSFunction success");
	        }
	        if (this.isJSFunctionRegist) {
	            this.jsbridgeCompleteInit();
	            this.jsbridgeCompleteInit = noop;
	        }
	    };
	    HeiheiJSBridgeClass.prototype.mockConsole = function () {
	        var _this = this;
	        var _console = Object.assign({}, console);
	        ['log', 'info', 'warn', 'error', 'debug'].map(function (method) {
	            _this.HeiheiLog[method] = function () {
	                var args = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    args[_i] = arguments[_i];
	                }
	                _this.showLog && _console && _console[method].apply(_console, args);
	            };
	        });
	    };
	    HeiheiJSBridgeClass.prototype.writeLogToClient = function (logType) {
	        var _this = this;
	        if (logType === void 0) { logType = ['log', 'info', 'warn', 'error', 'debug']; }
	        if (this.needWriteClientLog) {
	            var clientLogType_1 = { log: 5, info: 4, warn: 3, error: 2, debug: 1 };
	            var _console_1 = Object.assign({}, console);
	            logType.map(function (method) {
	                window.console[method] = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i] = arguments[_i];
	                    }
	                    _console_1 && _console_1[method].apply(_console_1, args);
	                    var log_str = method + " ";
	                    for (var i = 0; i < args.length; i++) {
	                        if (typeof (args[i]) === 'object') {
	                            log_str += stringify(args[i], null, 0, null);
	                        }
	                        else {
	                            log_str += args[i];
	                        }
	                    }
	                    _this.writeLog({ type: clientLogType_1[method], text: log_str });
	                };
	            });
	        }
	    };
	    HeiheiJSBridgeClass.prototype.preregister = function (methodName, callback) {
	        var _this = this;
	        this.HeiheiLog.log("preregister methodName: " + methodName);
	        this.dsBridge.register(methodName, function (res) {
	            var data = JSON.parse(res);
	            _this.logNeedFilter(methodName) || _this.HeiheiLog.log("client notify " + methodName, data);
	            callback(data);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerGameStatusUpdate = function () {
	        this.preregister('onGameStatusUpdate', function (res) {
	            window['HeiheiJSBridge'].onGameStatusUpdate && window['HeiheiJSBridge'].onGameStatusUpdate(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerUserStatusUpdate = function () {
	        this.preregister('onUserStatusUpdate', function (res) {
	            window['HeiheiJSBridge'].onUserStatusUpdate && window['HeiheiJSBridge'].onUserStatusUpdate(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerNetworkChange = function () {
	        this.preregister('onNetworkChange', function (res) {
	            window['HeiheiJSBridge'].onNetworkChange && window['HeiheiJSBridge'].onNetworkChange(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerOnMessage = function () {
	        this.preregister('onMessage', function (res) {
	            window['HeiheiJSBridge'].onMessage && window['HeiheiJSBridge'].onMessage(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerVoiceChange = function () {
	        this.preregister('onVoiceChange', function (res) {
	            window['HeiheiJSBridge'].onVoiceChange && window['HeiheiJSBridge'].onVoiceChange(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerRelationChange = function () {
	        this.preregister('onRelationChangeV2', function (res) {
	            window['HeiheiJSBridge'].onRelationChange && window['HeiheiJSBridge'].onRelationChange(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerAppEnterForeground = function () {
	        this.preregister('onApplicationEnterForeground', function (res) {
	            window['HeiheiJSBridge'].onApplicationEnterForeground && window['HeiheiJSBridge'].onApplicationEnterForeground(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerAppEnterBackground = function () {
	        this.preregister('onApplicationEnterBackground', function (res) {
	            window['HeiheiJSBridge'].onApplicationEnterBackground && window['HeiheiJSBridge'].onApplicationEnterBackground(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerConsoleGameSoundEnableChange = function () {
	        this.preregister('onConsoleGameSoundEnableChange', function (res) {
	            window['HeiheiJSBridge'].onConsoleGameSoundEnableChange && window['HeiheiJSBridge'].onConsoleGameSoundEnableChange(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerGameSoundEnableChange = function () {
	        this.preregister('onGameSoundEnableChange', function (res) {
	            window['HeiheiJSBridge'].onGameSoundEnableChange && window['HeiheiJSBridge'].onGameSoundEnableChange(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerAccessTokenChanged = function () {
	        this.preregister('onAccessTokenChanged', function (res) {
	            window['HeiheiJSBridge'].onAccessTokenChanged && window['HeiheiJSBridge'].onAccessTokenChanged(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerCoinAmountChanged = function () {
	        this.preregister('onCoinAmountChanged', function (res) {
	            window['HeiheiJSBridge'].onCoinAmountChanged && window['HeiheiJSBridge'].onCoinAmountChanged(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerReceivedBattleUserMessage = function () {
	        this.preregister('onReceivedBattleUserMessage', function (res) {
	            window['HeiheiJSBridge'].onReceivedBattleUserMessage && window['HeiheiJSBridge'].onReceivedBattleUserMessage(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerReceivedBattleResultInfo = function () {
	        this.preregister('onReceivedBattleResultInfo', function (res) {
	            window['HeiheiJSBridge'].onReceivedBattleResultInfo && window['HeiheiJSBridge'].onReceivedBattleResultInfo(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerUdpRecv = function () {
	        this.preregister('onUdpRecv', function (res) {
	            window['HeiheiJSBridge'].onUdpRecv && window['HeiheiJSBridge'].onUdpRecv(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerDownLoadFileProgress = function () {
	        this.preregister('onDownLoadFileProgress', function (res) {
	            window['HeiheiJSBridge'].onDownLoadFileProgress && window['HeiheiJSBridge'].onDownLoadFileProgress(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerUnzipProgress = function () {
	        this.preregister('onUnzipProgress', function (res) {
	            window['HeiheiJSBridge'].onUnzipProgress && window['HeiheiJSBridge'].onUnzipProgress(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerReceived1v1Invite = function () {
	        this.preregister('onReceived1v1Invite', function (res) {
	            window['HeiheiJSBridge'].onReceived1v1Invite && window['HeiheiJSBridge'].onReceived1v1Invite(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerCanceled1v1Invite = function () {
	        this.preregister('onCanceled1v1Invite', function (res) {
	            window['HeiheiJSBridge'].onCanceled1v1Invite && window['HeiheiJSBridge'].onCanceled1v1Invite(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerRejected1v1Invite = function () {
	        this.preregister('onRejected1v1Invite', function (res) {
	            window['HeiheiJSBridge'].onRejected1v1Invite && window['HeiheiJSBridge'].onRejected1v1Invite(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerNeedRefreshGame = function () {
	        this.preregister('onNeedRefreshGame', function (res) {
	            window['HeiheiJSBridge'].onNeedRefreshGame && window['HeiheiJSBridge'].onNeedRefreshGame(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerReceivedGameInvite = function () {
	        this.preregister('onReceivedGameInvite', function (res) {
	            window['HeiheiJSBridge'].onReceivedGameInvite && window['HeiheiJSBridge'].onReceivedGameInvite(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerUserExitLsGame = function () {
	        this.preregister('onUserExitLsGame', function (res) {
	            window['HeiheiJSBridge'].onUserExitLsGame && window['HeiheiJSBridge'].onUserExitLsGame(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerBackPressed = function () {
	        this.preregister('onBackPressed', function (res) {
	            window['HeiheiJSBridge'].onBackPressed && window['HeiheiJSBridge'].onBackPressed(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerWorkerMessage = function () {
	        this.preregister('onWorkerMessage', function (res) {
	            window['HeiheiJSBridge'].onWorkerMessage && window['HeiheiJSBridge'].onWorkerMessage(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerWorkerClose = function () {
	        this.preregister('onWorkerClosed', function (res) {
	            window['HeiheiJSBridge'].onWorkerClosed && window['HeiheiJSBridge'].onWorkerClosed(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.precall = function (methodName, params) {
	        var _this = this;
	        if (params === void 0) { params = {}; }
	        params = __assign(__assign({}, params), this.baseParams);
	        return new Promise(function (resolve) {
	            if (_this.isAPKVersion) ;
	            else {
	                _this.logNeedFilter(methodName) || _this.HeiheiLog.log("call client method: " + methodName + ", params: " + JSON.stringify(params));
	                if (_this.dsBridge) {
	                    _this.dsBridge.call(methodName, params, function (res) {
	                        var data = JSON.parse(res);
	                        _this.HeiheiLog.log("call client method " + methodName + " success", data);
	                        resolve(data);
	                    });
	                }
	                else {
	                    console.warn('dsBridge is undefined, please ensure jsbridge has initialized');
	                }
	            }
	        });
	    };
	    HeiheiJSBridgeClass.prototype.logNeedFilter = function (methodName) {
	        var filterList = ['shareImageOrStructMessage', 'onVoiceChange', 'writeLog'];
	        return filterList.includes(methodName);
	    };
	    HeiheiJSBridgeClass.prototype.closeH5 = function (_a) {
	        var _b = (_a === void 0 ? empty : _a).doubleCheckType, doubleCheckType = _b === void 0 ? 0 : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('closeH5', { doubleCheckType: doubleCheckType })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showKeyBoard = function (_a) {
	        var _b = _a.placeholder, placeholder = _b === void 0 ? '请输入答案' : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('showKeyBoard', { placeholder: placeholder })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getRoomInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getRoomInfoV2')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getUserInfo = function (_a) {
	        var _b = _a.uids, uids = _b === void 0 ? [] : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('getUserInfo', { uids: uids })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getUserStatus = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getUserStatus')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getGameStatus = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getGameStatus')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getFriendRelation = function (_a) {
	        var _b = _a.uids, uids = _b === void 0 ? [] : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('getFriendRelation', { uids: uids })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getDeviceInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getDeviceInfo')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.writeLog = function (_a) {
	        var type = _a.type, text = _a.text;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('writeLog', __assign(__assign({ type: type, text: text }, this.baseParams), { tag: this.gameTag }))];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.userReady = function (_a) {
	        var uid = _a.uid, status = _a.status;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('userReady', { uid: uid, status: status })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.userFollow = function (_a) {
	        var uid = _a.uid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('userFollow', { uid: uid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.userUnFollow = function (_a) {
	        var uid = _a.uid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('userUnFollow', { uid: uid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.postMessage = function (_a) {
	        var _b = _a.sendUid, sendUid = _b === void 0 ? null : _b, _c = _a.recieveUid, recieveUid = _c === void 0 ? null : _c, type = _a.type, _d = _a.text, text = _d === void 0 ? null : _d, _e = _a.image, image = _e === void 0 ? null : _e, _f = _a.needHead, needHead = _f === void 0 ? null : _f, _g = _a.needFollow, needFollow = _g === void 0 ? null : _g, _h = _a.description, description = _h === void 0 ? null : _h;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_j) {
	                switch (_j.label) {
	                    case 0: return [4, this.precall('postMessage', { sendUid: sendUid, recieveUid: recieveUid, type: type, text: text, image: image, needHead: needHead, needFollow: needFollow, description: description })];
	                    case 1: return [2, _j.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.startGame = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('startGame')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.dismissGame = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('dismissGame')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.switchGame = function (_a) {
	        var toGameId = _a.toGameId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('switchGame', { toGameId: toGameId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.joinMic = function (_a) {
	        var status = _a.status;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('joinMic', { status: status })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.share = function (_a) {
	        var _b = _a.uid, uid = _b === void 0 ? null : _b, _c = _a.imageUrl, imageUrl = _c === void 0 ? null : _c, _d = _a.imageUrlWithQrcode, imageUrlWithQrcode = _d === void 0 ? null : _d, _e = _a.title, title = _e === void 0 ? '' : _e, _f = _a.text, text = _f === void 0 ? '' : _f;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_g) {
	                switch (_g.label) {
	                    case 0: return [4, this.precall('share', { uid: uid, imageUrl: imageUrl, imageUrlWithQrcode: imageUrlWithQrcode, title: title, text: text })];
	                    case 1: return [2, _g.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.completeInit = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('completeInit')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.toast = function (_a) {
	        var _b = _a.text, text = _b === void 0 ? '' : _b, _c = _a.duration, duration = _c === void 0 ? 3000 : _c;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_d) {
	                switch (_d.label) {
	                    case 0: return [4, this.precall('toast', { text: text, duration: duration })];
	                    case 1: return [2, _d.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showDialog = function (_a) {
	        var _b = _a.title, title = _b === void 0 ? null : _b, _c = _a.desc, desc = _c === void 0 ? '' : _c, _d = _a.buttons, buttons = _d === void 0 ? [] : _d, _e = _a.key, key = _e === void 0 ? 1 : _e;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_f) {
	                switch (_f.label) {
	                    case 0: return [4, this.precall('showDialog', { title: title, desc: desc, buttons: buttons, key: key })];
	                    case 1: return [2, _f.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.playVibrate = function (_a) {
	        var _b = _a.millisecond, millisecond = _b === void 0 ? 1000 : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('playVibrate', { millisecond: millisecond })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.userClick = function (_a) {
	        var uid = _a.uid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('userClick', { uid: uid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.openAllSpeakingVoiceStatus = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('openAllSpeakingVoiceStatus')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.switchMicVoiceStatus = function (_a) {
	        var micOpen = _a.micOpen, openTillTime = _a.openTillTime, battleId = _a.battleId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('switchMicVoiceStatus', { micOpen: micOpen, openTillTime: openTillTime, battleId: battleId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setVoiceBlackList = function (_a) {
	        var uids = _a.uids;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setVoiceBlackList', { uids: uids })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setCanMinimize = function (_a) {
	        var canMinimize = _a.canMinimize;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setCanMinimize', { canMinimize: canMinimize })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setCanNormalQuit = function (_a) {
	        var canNormalQuit = _a.canNormalQuit;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setCanNormalQuit', { canNormalQuit: canNormalQuit })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.trackCustomEvent = function (_a) {
	        var key = _a.key, propsJsonStr = _a.propsJsonStr;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        if (!(typeof propsJsonStr == "object")) return [3, 2];
	                        return [4, this.precall('trackCustomEvent', { key: key, propsJsonStr: JSON.stringify(propsJsonStr) })];
	                    case 1: return [2, _b.sent()];
	                    case 2: return [4, this.precall('trackCustomEvent', { key: key, propsJsonStr: propsJsonStr })];
	                    case 3: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.needRefreshToken = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('needRefreshToken')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getWebGameGradeInfo = function (_a) {
	        var uids = _a.uids;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('getWebGameGradeInfo', { uids: uids })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.trackBeginPage = function (_a) {
	        var pageName = _a.pageName;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('trackBeginPage', { pageName: pageName })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.trackEndPage = function (_a) {
	        var pageName = _a.pageName;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('trackEndPage', { pageName: pageName })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getLoginUserInfo = function (_a) {
	        var _b = _a.needOpenId, needOpenId = _b === void 0 ? false : _b, _c = _a.needAccessToken, needAccessToken = _c === void 0 ? false : _c, _d = _a.needLoginPlatform, needLoginPlatform = _d === void 0 ? false : _d, _e = _a.needCoinAmount, needCoinAmount = _e === void 0 ? false : _e;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_f) {
	                switch (_f.label) {
	                    case 0: return [4, this.precall('getLoginUserInfo', { needOpenId: needOpenId, needAccessToken: needAccessToken, needLoginPlatform: needLoginPlatform, needCoinAmount: needCoinAmount })];
	                    case 1: return [2, _f.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getNetworkState = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getNetworkState')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.shareImageOrStructMessage = function (_a) {
	        var type = _a.type, image = _a.image, structMessage = _a.structMessage, _b = _a.needImagePreview, needImagePreview = _b === void 0 ? false : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('shareImageOrStructMessage', { type: type, image: image, structMessage: structMessage, needImagePreview: needImagePreview })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.saveImageToFile = function (_a) {
	        var image = _a.image;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('saveImageToFile', { image: image })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.webPageReady = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('webPageReady')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.modifyTitleBar = function (_a) {
	        var _b = _a.titleBarStyle, titleBarStyle = _b === void 0 ? 0 : _b, _c = _a.titleText, titleText = _c === void 0 ? '' : _c;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_d) {
	                switch (_d.label) {
	                    case 0: return [4, this.precall('modifyTitleBar', { titleBarStyle: titleBarStyle, titleText: titleText })];
	                    case 1: return [2, _d.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.sendGift = function (_a) {
	        var receiverId = _a.receiverId, giftId = _a.giftId, num = _a.num;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('sendGift', { receiverId: receiverId, giftId: giftId, num: num })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showShareDialog = function (_a) {
	        var cardList = _a.cardList, _b = _a.defaultFocusIndex, defaultFocusIndex = _b === void 0 ? null : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('showShareDialog', { cardList: cardList, defaultFocusIndex: defaultFocusIndex })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.recommendGame = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('recommendGame')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.launchProfilePage = function (_a) {
	        var uid = _a.uid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('launchProfilePage', { uid: uid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.commitGameScore = function (_a) {
	        var score = _a.score, startTimestamp = _a.startTimestamp, gameDuration = _a.gameDuration, webVersion = _a.webVersion, _b = _a.infoList, infoList = _b === void 0 ? null : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('commitGameScore', { score: score, startTimestamp: startTimestamp, gameDuration: gameDuration, webVersion: webVersion, infoList: infoList })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.isGameSoundEnable = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('isGameSoundEnable')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setGameSoundEnable = function (_a) {
	        var enable = _a.enable;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setGameSoundEnable', { enable: enable })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showGameRankList = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('showGameRankList')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getGameLoginRankInfo = function (_a) {
	        var _b = _a.dateType, dateType = _b === void 0 ? 0 : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('getGameLoginRankInfo', { dateType: dateType })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getGameType = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getGameType')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.isBetaGame = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('isBetaGame')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showFeedback = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('showFeedback')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.commitConsoleGameScore = function (_a) {
	        var score = _a.score, startTimestamp = _a.startTimestamp, gameDuration = _a.gameDuration, webVersion = _a.webVersion, _b = _a.infoList, infoList = _b === void 0 ? null : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('commitConsoleGameScore', { score: score, startTimestamp: startTimestamp, gameDuration: gameDuration, webVersion: webVersion, infoList: infoList })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.isConsoleGameSoundEnable = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('isConsoleGameSoundEnable')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setConsoleGameSoundEnable = function (_a) {
	        var enable = _a.enable;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setConsoleGameSoundEnable', { enable: enable })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setConsoleGameStatus = function (_a) {
	        var status = _a.status;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setConsoleGameStatus', { status: status })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showConsoleGameRankList = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('showConsoleGameRankList')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.shareConsoleGame = function (_a) {
	        var cardList = _a.cardList, _b = _a.defaultFocusIndex, defaultFocusIndex = _b === void 0 ? null : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('shareConsoleGame', { cardList: cardList, defaultFocusIndex: defaultFocusIndex })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getConsoleGameLoginRankInfo = function (_a) {
	        var _b = _a.dateType, dateType = _b === void 0 ? 0 : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('getConsoleGameLoginRankInfo', { dateType: dateType })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.refreshAccessToken = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('refreshAccessToken')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setFullScreen = function (_a) {
	        var enable = _a.enable;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setFullScreen', { enable: enable })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setGameStatus = function (_a) {
	        var status = _a.status;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setGameStatus', { status: status })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.commitLSGameResult = function (_a) {
	        var battleResultFlag = _a.battleResultFlag, gameRoute = _a.gameRoute, gameResult = _a.gameResult;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.commitLSGameResult', { battleResultFlag: battleResultFlag, gameRoute: gameRoute, gameResult: gameResult })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.commitLockStepGameResult = function (_a) {
	        var battleResultFlag = _a.battleResultFlag, gameRoute = _a.gameRoute, gameResult = _a.gameResult;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.commitLSGameResult', { battleResultFlag: battleResultFlag, gameRoute: gameRoute, gameResult: gameResult })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.returnToApp = function (_a) {
	        var returnInfo = _a.returnInfo;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.returnToApp', { returnInfo: returnInfo })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showProfileCard = function (_a) {
	        var uid = _a.uid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.showProfileCard', { uid: uid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.sendBattleUserMessage = function (_a) {
	        var battleId = _a.battleId, msgType = _a.msgType, msgId = _a.msgId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.sendBattleUserMessage', { battleId: battleId, msgType: msgType, msgId: msgId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.exitLSGame = function (_a) {
	        var gameRoute = _a.gameRoute, exitFlag = _a.exitFlag;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.exitLSGame', { gameRoute: gameRoute, exitFlag: exitFlag })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.exitLockStepGame = function (_a) {
	        var gameRoute = _a.gameRoute, exitFlag = _a.exitFlag;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.exitLSGame', { gameRoute: gameRoute, exitFlag: exitFlag })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.exitGameRoom = function (_a) {
	        var returnInfo = _a.returnInfo;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.exitGameRoom', { returnInfo: returnInfo })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.invite1v1 = function (_a) {
	        var modeId = _a.modeId, invitedUid = _a.invitedUid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.invite1v1', { modeId: modeId, invitedUid: invitedUid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.accept1v1Invite = function (_a) {
	        var modeId = _a.modeId, invitedUid = _a.invitedUid, inviteUid = _a.inviteUid, inviteId = _a.inviteId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.accept1v1Invite', { modeId: modeId, invitedUid: invitedUid, inviteUid: inviteUid, inviteId: inviteId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.reject1v1Invite = function (_a) {
	        var modeId = _a.modeId, invitedUid = _a.invitedUid, inviteUid = _a.inviteUid, inviteId = _a.inviteId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.reject1v1Invite', { modeId: modeId, invitedUid: invitedUid, inviteUid: inviteUid, inviteId: inviteId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.cancel1v1Invite = function (_a) {
	        var modeId = _a.modeId, invitedUid = _a.invitedUid, inviteUid = _a.inviteUid, inviteId = _a.inviteId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.cancel1v1Invite', { modeId: modeId, invitedUid: invitedUid, inviteUid: inviteUid, inviteId: inviteId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.inviteMoreGames = function (_a) {
	        var returnInfo = _a.returnInfo;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.inviteMoreGames', { returnInfo: returnInfo })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.acceptGameInvite = function (_a) {
	        var gameInviteParam = _a.gameInviteParam;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.acceptGameInvite', { gameInviteParam: gameInviteParam })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getBattleInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('battle.getBattleInfo')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getDeviceHost = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.getDeviceHost')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.downloadFile = function (_a) {
	        var _b = _a.filePath, filePath = _b === void 0 ? "" : _b, _c = _a.savePath, savePath = _c === void 0 ? undefined : _c, taskId = _a.taskId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_d) {
	                switch (_d.label) {
	                    case 0: return [4, this.precall('fileSystem.downloadFile', { filePath: filePath, savePath: savePath, taskId: taskId })];
	                    case 1: return [2, _d.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.saveFile = function (_a) {
	        var tempFilePath = _a.tempFilePath, destPath = _a.destPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.saveFile', { tempFilePath: tempFilePath, destPath: destPath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.removeSavedFile = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.removeSavedFile', { filePath: filePath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getSavedFileList = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.getSavedFileList')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getSavedFileInfo = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.getSavedFileInfo', { filePath: filePath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getFileInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.getFileInfo')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemAccess = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.access', { filePath: filePath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemCopyFile = function (_a) {
	        var srcPath = _a.srcPath, destPath = _a.destPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.copyFile', { srcPath: srcPath, destPath: destPath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemMkdir = function (_a) {
	        var dirPath = _a.dirPath, _b = _a.recursive, recursive = _b === void 0 ? false : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('fileSystem.mkdir', { dirPath: dirPath, recursive: recursive })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemReaddir = function (_a) {
	        var dirPath = _a.dirPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.readdir', { dirPath: dirPath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemReadFile = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.readFile')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemRmdir = function (_a) {
	        var dirPath = _a.dirPath, _b = _a.recursive, recursive = _b === void 0 ? false : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('fileSystem.rmdir', { dirPath: dirPath, recursive: recursive })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemStat = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.stat', { filePath: filePath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemUnzip = function (_a) {
	        var zipFilePath = _a.zipFilePath, targetPath = _a.targetPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.unzip', { zipFilePath: zipFilePath, targetPath: targetPath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getStorage = function (_a) {
	        var key = _a.key;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.getStorage', { key: key })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setStorage = function (_a) {
	        var key = _a.key, value = _a.value;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.setStorage', { key: key, value: value })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.removeStorage = function (_a) {
	        var key = _a.key;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.removeStorage', { key: key })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getStorageInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.getStorageInfo')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.clearStorage = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.clearStorage')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.createUdpWebSocket = function (_a) {
	        var host = _a.host, port = _a.port, binaryType = _a.binaryType;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('createUdpWebSocket', { host: host, port: port, binaryType: binaryType })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.udpCreate = function (_a) {
	        var host = _a.host, port = _a.port;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('udpCreate', { host: host, port: port })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.udpSend = function (_a) {
	        var udpId = _a.udpId, text = _a.text;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('udpSend', { udpId: udpId, text: text })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.workerCreateWorker = function (_a) {
	        var scriptPath = _a.scriptPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('worker.createWorker', { scriptPath: scriptPath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.workerPostMessage = function (_a) {
	        var workerId = _a.workerId, message = _a.message;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('worker.postMessage', { workerId: workerId, message: message })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.workerTerminate = function (_a) {
	        var workerId = _a.workerId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('worker.terminate', { workerId: workerId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.gmGetIdata = function (_a) {
	        var date = _a.date, method = _a.method;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('gmGetIdata', { date: date, method: method })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    return HeiheiJSBridgeClass;	}());	exports.default = HeiheiJSBridgeClass;	});	unwrapExports(heihei_js_bridge);	var config = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	//全局变量	var Config = /** @class */ (function () {
	    function Config() {
	        //微信下黑黑id
	        this.WXAppid = 'wx51f01c9fd3065d7f';
	        //手Q下黑黑id
	        this.QQAppid = '1106303575';
	        //Room服务url
	        this.GameSvrHost = "wss://testweb.cymini.qq.com/relay_game_1";
	        //请求超时时间
	        this.TimeOut = 4000;
	        //心跳请求间隔
	        this.HeartBeat = 6000;
	        //发送空帧间隔
	        this.InputTimeout = 30000;
	        //登录锁的延迟
	        this.LoginLockTimeout = 2000;
	        //最大重连次数
	        this.MaxConnectRetry = 14400;
	        //每轮最大的sync循环个数
	        this.MaxSyncLoopCount = 50;
	        //每个sync最大的帧数量
	        this.MaxSyncFrameCount = 5;
	        //最多向前检查的sync数量
	        this.SyncForwardFrameNum = 100;
	        // 显示Log
	        this.ShowLog = false;
	        // 房间参数 (for debug)
	        this.RoomOption = {
	            frame_interval_ms: 60,
	            wait_time: 15000,
	            min_user_count: 255,
	            room_life_time: 0,
	            broadcast_to_self: 1,
	        };
	        // for debug.存放房间号
	        this.tmpRoomID = 1;
	        this.tmpPlayerCount = 1;
	    }
	    return Config;	}());	exports.default = new Config();	});	unwrapExports(config);	var tdrTools$1 = createCommonjsModule(function (module, exports) {	(function (root, factory) {
	    {
	        // Node, CommonJS-like
	        module.exports = factory();
	    }	}(commonjsGlobal, function () {
	    /**
	     * wasm optimizations, to do native i64 multiplication and divide
	     */
	    var wasm = null;
	    try {
	        wasm = new WebAssembly.Instance(new WebAssembly.Module(new Uint8Array([
	            0, 97, 115, 109, 1, 0, 0, 0, 1, 13, 2, 96, 0, 1, 127, 96, 4, 127, 127, 127, 127, 1, 127, 3, 7, 6, 0, 1, 1, 1, 1, 1, 6, 6, 1, 127, 1, 65, 0, 11, 7, 50, 6, 3, 109, 117, 108, 0, 1, 5, 100, 105, 118, 95, 115, 0, 2, 5, 100, 105, 118, 95, 117, 0, 3, 5, 114, 101, 109, 95, 115, 0, 4, 5, 114, 101, 109, 95, 117, 0, 5, 8, 103, 101, 116, 95, 104, 105, 103, 104, 0, 0, 10, 191, 1, 6, 4, 0, 35, 0, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 126, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 127, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 128, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 129, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11, 36, 1, 1, 126, 32, 0, 173, 32, 1, 173, 66, 32, 134, 132, 32, 2, 173, 32, 3, 173, 66, 32, 134, 132, 130, 34, 4, 66, 32, 135, 167, 36, 0, 32, 4, 167, 11
	        ])), {}).exports;
	    }
	    catch (e) {
	        // no wasm support :(
	    }
	    /**
	     * Constructs a 64 bit two's-complement integer, given its low and high 32 bit values as *signed* integers.
	     *  See the from* functions below for more convenient ways of constructing Longs.
	     * @exports Long
	     * @class A Long class for representing a 64 bit two's-complement integer value.
	     * @param {number} low The low (signed) 32 bits of the long
	     * @param {number} high The high (signed) 32 bits of the long
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	     * @constructor
	     */
	    function Long(low, high, unsigned) {
	        /**
	         * The low 32 bits as a signed value.
	         * @type {number}
	         */
	        this.low = low | 0;
	        /**
	         * The high 32 bits as a signed value.
	         * @type {number}
	         */
	        this.high = high | 0;
	        /**
	         * Whether unsigned or not.
	         * @type {boolean}
	         */
	        this.unsigned = !!unsigned;
	    }
	    // The internal representation of a long is the two given signed, 32-bit values.
	    // We use 32-bit pieces because these are the size of integers on which
	    // Javascript performs bit-operations.  For operations like addition and
	    // multiplication, we split each number into 16 bit pieces, which can easily be
	    // multiplied within Javascript's floating-point representation without overflow
	    // or change in sign.
	    //
	    // In the algorithms below, we frequently reduce the negative case to the
	    // positive case by negating the input(s) and then post-processing the result.
	    // Note that we must ALWAYS check specially whether those values are MIN_VALUE
	    // (-2^63) because -MIN_VALUE == MIN_VALUE (since 2^63 cannot be represented as
	    // a positive number, it overflows back into a negative).  Not handling this
	    // case would often result in infinite recursion.
	    //
	    // Common constant values ZERO, ONE, NEG_ONE, etc. are defined below the from*
	    // methods on which they depend.
	    /**
	     * An indicator used to reliably determine if an object is a Long or not.
	     * @type {boolean}
	     * @const
	     * @private
	     */
	    Long.prototype.__isLong__;
	    Object.defineProperty(Long.prototype, "__isLong__", { value: true });
	    /**
	     * @function
	     * @param {*} obj Object
	     * @returns {boolean}
	     * @inner
	     */
	    function isLong(obj) {
	        return (obj && obj["__isLong__"]) === true;
	    }
	    /**
	     * Tests if the specified object is a Long.
	     * @function
	     * @param {*} obj Object
	     * @returns {boolean}
	     */
	    Long.isLong = isLong;
	    /**
	     * A cache of the Long representations of small integer values.
	     * @type {!Object}
	     * @inner
	     */
	    var INT_CACHE = {};
	    /**
	     * A cache of the Long representations of small unsigned integer values.
	     * @type {!Object}
	     * @inner
	     */
	    var UINT_CACHE = {};
	    /**
	     * @param {number} value
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromInt(value, unsigned) {
	        var obj, cachedObj, cache;
	        if (unsigned) {
	            value >>>= 0;
	            if (cache = (0 <= value && value < 256)) {
	                cachedObj = UINT_CACHE[value];
	                if (cachedObj)
	                    return cachedObj;
	            }
	            obj = fromBits(value, (value | 0) < 0 ? -1 : 0, true);
	            if (cache)
	                UINT_CACHE[value] = obj;
	            return obj;
	        }
	        else {
	            value |= 0;
	            if (cache = (-128 <= value && value < 128)) {
	                cachedObj = INT_CACHE[value];
	                if (cachedObj)
	                    return cachedObj;
	            }
	            obj = fromBits(value, value < 0 ? -1 : 0, false);
	            if (cache)
	                INT_CACHE[value] = obj;
	            return obj;
	        }
	    }
	    /**
	     * Returns a Long representing the given 32 bit integer value.
	     * @function
	     * @param {number} value The 32 bit integer in question
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromInt = fromInt;
	    /**
	     * @param {number} value
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromNumber(value, unsigned) {
	        if (isNaN(value))
	            return unsigned ? UZERO : ZERO;
	        if (unsigned) {
	            if (value < 0)
	                return UZERO;
	            if (value >= TWO_PWR_64_DBL)
	                return MAX_UNSIGNED_VALUE;
	        }
	        else {
	            if (value <= -TWO_PWR_63_DBL)
	                return MIN_VALUE;
	            if (value + 1 >= TWO_PWR_63_DBL)
	                return MAX_VALUE;
	        }
	        if (value < 0)
	            return fromNumber(-value, unsigned).neg();
	        return fromBits((value % TWO_PWR_32_DBL) | 0, (value / TWO_PWR_32_DBL) | 0, unsigned);
	    }
	    /**
	     * Returns a Long representing the given value, provided that it is a finite number. Otherwise, zero is returned.
	     * @function
	     * @param {number} value The number in question
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromNumber = fromNumber;
	    /**
	     * @param {number} lowBits
	     * @param {number} highBits
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromBits(lowBits, highBits, unsigned) {
	        return new Long(lowBits, highBits, unsigned);
	    }
	    /**
	     * Returns a Long representing the 64 bit integer that comes by concatenating the given low and high bits. Each is
	     *  assumed to use 32 bits.
	     * @function
	     * @param {number} lowBits The low 32 bits
	     * @param {number} highBits The high 32 bits
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromBits = fromBits;
	    /**
	     * @function
	     * @param {number} base
	     * @param {number} exponent
	     * @returns {number}
	     * @inner
	     */
	    var pow_dbl = Math.pow; // Used 4 times (4*8 to 15+4)
	    /**
	     * @param {string} str
	     * @param {(boolean|number)=} unsigned
	     * @param {number=} radix
	     * @returns {!Long}
	     * @inner
	     */
	    function fromString(str, unsigned, radix) {
	        if (str.length === 0)
	            throw Error('empty string');
	        if (str === "NaN" || str === "Infinity" || str === "+Infinity" || str === "-Infinity")
	            return ZERO;
	        if (typeof unsigned === 'number') {
	            // For goog.math.long compatibility
	            radix = unsigned,
	                unsigned = false;
	        }
	        else {
	            unsigned = !!unsigned;
	        }
	        radix = radix || 10;
	        if (radix < 2 || 36 < radix)
	            throw RangeError('radix');
	        var p;
	        if ((p = str.indexOf('-')) > 0)
	            throw Error('interior hyphen');
	        else if (p === 0) {
	            return fromString(str.substring(1), unsigned, radix).neg();
	        }
	        // Do several (8) digits each time through the loop, so as to
	        // minimize the calls to the very expensive emulated div.
	        var radixToPower = fromNumber(pow_dbl(radix, 8));
	        var result = ZERO;
	        for (var i = 0; i < str.length; i += 8) {
	            var size = Math.min(8, str.length - i), value = parseInt(str.substring(i, i + size), radix);
	            if (size < 8) {
	                var power = fromNumber(pow_dbl(radix, size));
	                result = result.mul(power).add(fromNumber(value));
	            }
	            else {
	                result = result.mul(radixToPower);
	                result = result.add(fromNumber(value));
	            }
	        }
	        result.unsigned = unsigned;
	        return result;
	    }
	    /**
	     * Returns a Long representation of the given string, written using the specified radix.
	     * @function
	     * @param {string} str The textual representation of the Long
	     * @param {(boolean|number)=} unsigned Whether unsigned or not, defaults to signed
	     * @param {number=} radix The radix in which the text is written (2-36), defaults to 10
	     * @returns {!Long} The corresponding Long value
	     */
	    Long.fromString = fromString;
	    /**
	     * @function
	     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val
	     * @param {boolean=} unsigned
	     * @returns {!Long}
	     * @inner
	     */
	    function fromValue(val, unsigned) {
	        if (typeof val === 'number')
	            return fromNumber(val, unsigned);
	        if (typeof val === 'string')
	            return fromString(val, unsigned);
	        // Throws for non-objects, converts non-instanceof Long:
	        return fromBits(val.low, val.high, typeof unsigned === 'boolean' ? unsigned : val.unsigned);
	    }
	    /**
	     * Converts the specified value to a Long using the appropriate from* function for its type.
	     * @function
	     * @param {!Long|number|string|!{low: number, high: number, unsigned: boolean}} val Value
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	     * @returns {!Long}
	     */
	    Long.fromValue = fromValue;
	    // NOTE: the compiler should inline these constant values below and then remove these variables, so there should be
	    // no runtime penalty for these.
	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_16_DBL = 1 << 16;
	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_24_DBL = 1 << 24;
	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_32_DBL = TWO_PWR_16_DBL * TWO_PWR_16_DBL;
	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_64_DBL = TWO_PWR_32_DBL * TWO_PWR_32_DBL;
	    /**
	     * @type {number}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_63_DBL = TWO_PWR_64_DBL / 2;
	    /**
	     * @type {!Long}
	     * @const
	     * @inner
	     */
	    var TWO_PWR_24 = fromInt(TWO_PWR_24_DBL);
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var ZERO = fromInt(0);
	    /**
	     * Signed zero.
	     * @type {!Long}
	     */
	    Long.ZERO = ZERO;
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var UZERO = fromInt(0, true);
	    /**
	     * Unsigned zero.
	     * @type {!Long}
	     */
	    Long.UZERO = UZERO;
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var ONE = fromInt(1);
	    /**
	     * Signed one.
	     * @type {!Long}
	     */
	    Long.ONE = ONE;
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var UONE = fromInt(1, true);
	    /**
	     * Unsigned one.
	     * @type {!Long}
	     */
	    Long.UONE = UONE;
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var NEG_ONE = fromInt(-1);
	    /**
	     * Signed negative one.
	     * @type {!Long}
	     */
	    Long.NEG_ONE = NEG_ONE;
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MAX_VALUE = fromBits(0xFFFFFFFF | 0, 0x7FFFFFFF | 0, false);
	    /**
	     * Maximum signed value.
	     * @type {!Long}
	     */
	    Long.MAX_VALUE = MAX_VALUE;
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MAX_UNSIGNED_VALUE = fromBits(0xFFFFFFFF | 0, 0xFFFFFFFF | 0, true);
	    /**
	     * Maximum unsigned value.
	     * @type {!Long}
	     */
	    Long.MAX_UNSIGNED_VALUE = MAX_UNSIGNED_VALUE;
	    /**
	     * @type {!Long}
	     * @inner
	     */
	    var MIN_VALUE = fromBits(0, 0x80000000 | 0, false);
	    /**
	     * Minimum signed value.
	     * @type {!Long}
	     */
	    Long.MIN_VALUE = MIN_VALUE;
	    /**
	     * @alias Long.prototype
	     * @inner
	     */
	    var LongPrototype = Long.prototype;
	    /**
	     * Converts the Long to a 32 bit integer, assuming it is a 32 bit integer.
	     * @returns {number}
	     */
	    LongPrototype.toInt = function toInt() {
	        return this.unsigned ? this.low >>> 0 : this.low;
	    };
	    /**
	     * Converts the Long to a the nearest floating-point representation of this value (double, 53 bit mantissa).
	     * @returns {number}
	     */
	    LongPrototype.toNumber = function toNumber() {
	        if (this.unsigned)
	            return ((this.high >>> 0) * TWO_PWR_32_DBL) + (this.low >>> 0);
	        return this.high * TWO_PWR_32_DBL + (this.low >>> 0);
	    };
	    /**
	     * Converts the Long to a string written in the specified radix.
	     * @param {number=} radix Radix (2-36), defaults to 10
	     * @returns {string}
	     * @override
	     * @throws {RangeError} If `radix` is out of range
	     */
	    LongPrototype.toString = function toString(radix) {
	        radix = radix || 10;
	        if (radix < 2 || 36 < radix)
	            throw RangeError('radix');
	        if (this.isZero())
	            return '0';
	        if (this.isNegative()) { // Unsigned Longs are never negative
	            if (this.eq(MIN_VALUE)) {
	                // We need to change the Long value before it can be negated, so we remove
	                // the bottom-most digit in this base and then recurse to do the rest.
	                var radixLong = fromNumber(radix), div = this.div(radixLong), rem1 = div.mul(radixLong).sub(this);
	                return div.toString(radix) + rem1.toInt().toString(radix);
	            }
	            else
	                return '-' + this.neg().toString(radix);
	        }
	        // Do several (6) digits each time through the loop, so as to
	        // minimize the calls to the very expensive emulated div.
	        var radixToPower = fromNumber(pow_dbl(radix, 6), this.unsigned), rem = this;
	        var result = '';
	        while (true) {
	            var remDiv = rem.div(radixToPower), intval = rem.sub(remDiv.mul(radixToPower)).toInt() >>> 0, digits = intval.toString(radix);
	            rem = remDiv;
	            if (rem.isZero())
	                return digits + result;
	            else {
	                while (digits.length < 6)
	                    digits = '0' + digits;
	                result = '' + digits + result;
	            }
	        }
	    };
	    /**
	     * Gets the high 32 bits as a signed integer.
	     * @returns {number} Signed high bits
	     */
	    LongPrototype.getHighBits = function getHighBits() {
	        return this.high;
	    };
	    /**
	     * Gets the high 32 bits as an unsigned integer.
	     * @returns {number} Unsigned high bits
	     */
	    LongPrototype.getHighBitsUnsigned = function getHighBitsUnsigned() {
	        return this.high >>> 0;
	    };
	    /**
	     * Gets the low 32 bits as a signed integer.
	     * @returns {number} Signed low bits
	     */
	    LongPrototype.getLowBits = function getLowBits() {
	        return this.low;
	    };
	    /**
	     * Gets the low 32 bits as an unsigned integer.
	     * @returns {number} Unsigned low bits
	     */
	    LongPrototype.getLowBitsUnsigned = function getLowBitsUnsigned() {
	        return this.low >>> 0;
	    };
	    /**
	     * Gets the number of bits needed to represent the absolute value of this Long.
	     * @returns {number}
	     */
	    LongPrototype.getNumBitsAbs = function getNumBitsAbs() {
	        if (this.isNegative()) // Unsigned Longs are never negative
	            return this.eq(MIN_VALUE) ? 64 : this.neg().getNumBitsAbs();
	        var val = this.high != 0 ? this.high : this.low;
	        for (var bit = 31; bit > 0; bit--)
	            if ((val & (1 << bit)) != 0)
	                break;
	        return this.high != 0 ? bit + 33 : bit + 1;
	    };
	    /**
	     * Tests if this Long's value equals zero.
	     * @returns {boolean}
	     */
	    LongPrototype.isZero = function isZero() {
	        return this.high === 0 && this.low === 0;
	    };
	    /**
	     * Tests if this Long's value equals zero. This is an alias of {@link Long#isZero}.
	     * @returns {boolean}
	     */
	    LongPrototype.eqz = LongPrototype.isZero;
	    /**
	     * Tests if this Long's value is negative.
	     * @returns {boolean}
	     */
	    LongPrototype.isNegative = function isNegative() {
	        return !this.unsigned && this.high < 0;
	    };
	    /**
	     * Tests if this Long's value is positive.
	     * @returns {boolean}
	     */
	    LongPrototype.isPositive = function isPositive() {
	        return this.unsigned || this.high >= 0;
	    };
	    /**
	     * Tests if this Long's value is odd.
	     * @returns {boolean}
	     */
	    LongPrototype.isOdd = function isOdd() {
	        return (this.low & 1) === 1;
	    };
	    /**
	     * Tests if this Long's value is even.
	     * @returns {boolean}
	     */
	    LongPrototype.isEven = function isEven() {
	        return (this.low & 1) === 0;
	    };
	    /**
	     * Tests if this Long's value equals the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.equals = function equals(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        if (this.unsigned !== other.unsigned && (this.high >>> 31) === 1 && (other.high >>> 31) === 1)
	            return false;
	        return this.high === other.high && this.low === other.low;
	    };
	    /**
	     * Tests if this Long's value equals the specified's. This is an alias of {@link Long#equals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.eq = LongPrototype.equals;
	    /**
	     * Tests if this Long's value differs from the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.notEquals = function notEquals(other) {
	        return !this.eq(/* validates */ other);
	    };
	    /**
	     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.neq = LongPrototype.notEquals;
	    /**
	     * Tests if this Long's value differs from the specified's. This is an alias of {@link Long#notEquals}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.ne = LongPrototype.notEquals;
	    /**
	     * Tests if this Long's value is less than the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lessThan = function lessThan(other) {
	        return this.comp(/* validates */ other) < 0;
	    };
	    /**
	     * Tests if this Long's value is less than the specified's. This is an alias of {@link Long#lessThan}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lt = LongPrototype.lessThan;
	    /**
	     * Tests if this Long's value is less than or equal the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lessThanOrEqual = function lessThanOrEqual(other) {
	        return this.comp(/* validates */ other) <= 0;
	    };
	    /**
	     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.lte = LongPrototype.lessThanOrEqual;
	    /**
	     * Tests if this Long's value is less than or equal the specified's. This is an alias of {@link Long#lessThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.le = LongPrototype.lessThanOrEqual;
	    /**
	     * Tests if this Long's value is greater than the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.greaterThan = function greaterThan(other) {
	        return this.comp(/* validates */ other) > 0;
	    };
	    /**
	     * Tests if this Long's value is greater than the specified's. This is an alias of {@link Long#greaterThan}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.gt = LongPrototype.greaterThan;
	    /**
	     * Tests if this Long's value is greater than or equal the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.greaterThanOrEqual = function greaterThanOrEqual(other) {
	        return this.comp(/* validates */ other) >= 0;
	    };
	    /**
	     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.gte = LongPrototype.greaterThanOrEqual;
	    /**
	     * Tests if this Long's value is greater than or equal the specified's. This is an alias of {@link Long#greaterThanOrEqual}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {boolean}
	     */
	    LongPrototype.ge = LongPrototype.greaterThanOrEqual;
	    /**
	     * Compares this Long's value with the specified's.
	     * @param {!Long|number|string} other Other value
	     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	     *  if the given one is greater
	     */
	    LongPrototype.compare = function compare(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        if (this.eq(other))
	            return 0;
	        var thisNeg = this.isNegative(), otherNeg = other.isNegative();
	        if (thisNeg && !otherNeg)
	            return -1;
	        if (!thisNeg && otherNeg)
	            return 1;
	        // At this point the sign bits are the same
	        if (!this.unsigned)
	            return this.sub(other).isNegative() ? -1 : 1;
	        // Both are positive if at least one is unsigned
	        return (other.high >>> 0) > (this.high >>> 0) || (other.high === this.high && (other.low >>> 0) > (this.low >>> 0)) ? -1 : 1;
	    };
	    /**
	     * Compares this Long's value with the specified's. This is an alias of {@link Long#compare}.
	     * @function
	     * @param {!Long|number|string} other Other value
	     * @returns {number} 0 if they are the same, 1 if the this is greater and -1
	     *  if the given one is greater
	     */
	    LongPrototype.comp = LongPrototype.compare;
	    /**
	     * Negates this Long's value.
	     * @returns {!Long} Negated Long
	     */
	    LongPrototype.negate = function negate() {
	        if (!this.unsigned && this.eq(MIN_VALUE))
	            return MIN_VALUE;
	        return this.not().add(ONE);
	    };
	    /**
	     * Negates this Long's value. This is an alias of {@link Long#negate}.
	     * @function
	     * @returns {!Long} Negated Long
	     */
	    LongPrototype.neg = LongPrototype.negate;
	    /**
	     * Returns the sum of this and the specified Long.
	     * @param {!Long|number|string} addend Addend
	     * @returns {!Long} Sum
	     */
	    LongPrototype.add = function add(addend) {
	        if (!isLong(addend))
	            addend = fromValue(addend);
	        // Divide each number into 4 chunks of 16 bits, and then sum the chunks.
	        var a48 = this.high >>> 16;
	        var a32 = this.high & 0xFFFF;
	        var a16 = this.low >>> 16;
	        var a00 = this.low & 0xFFFF;
	        var b48 = addend.high >>> 16;
	        var b32 = addend.high & 0xFFFF;
	        var b16 = addend.low >>> 16;
	        var b00 = addend.low & 0xFFFF;
	        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	        c00 += a00 + b00;
	        c16 += c00 >>> 16;
	        c00 &= 0xFFFF;
	        c16 += a16 + b16;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c32 += a32 + b32;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c48 += a48 + b48;
	        c48 &= 0xFFFF;
	        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	    };
	    /**
	     * Returns the difference of this and the specified Long.
	     * @param {!Long|number|string} subtrahend Subtrahend
	     * @returns {!Long} Difference
	     */
	    LongPrototype.subtract = function subtract(subtrahend) {
	        if (!isLong(subtrahend))
	            subtrahend = fromValue(subtrahend);
	        return this.add(subtrahend.neg());
	    };
	    /**
	     * Returns the difference of this and the specified Long. This is an alias of {@link Long#subtract}.
	     * @function
	     * @param {!Long|number|string} subtrahend Subtrahend
	     * @returns {!Long} Difference
	     */
	    LongPrototype.sub = LongPrototype.subtract;
	    /**
	     * Returns the product of this and the specified Long.
	     * @param {!Long|number|string} multiplier Multiplier
	     * @returns {!Long} Product
	     */
	    LongPrototype.multiply = function multiply(multiplier) {
	        if (this.isZero())
	            return ZERO;
	        if (!isLong(multiplier))
	            multiplier = fromValue(multiplier);
	        // use wasm support if present
	        if (wasm) {
	            var low = wasm.mul(this.low, this.high, multiplier.low, multiplier.high);
	            return fromBits(low, wasm.get_high(), this.unsigned);
	        }
	        if (multiplier.isZero())
	            return ZERO;
	        if (this.eq(MIN_VALUE))
	            return multiplier.isOdd() ? MIN_VALUE : ZERO;
	        if (multiplier.eq(MIN_VALUE))
	            return this.isOdd() ? MIN_VALUE : ZERO;
	        if (this.isNegative()) {
	            if (multiplier.isNegative())
	                return this.neg().mul(multiplier.neg());
	            else
	                return this.neg().mul(multiplier).neg();
	        }
	        else if (multiplier.isNegative())
	            return this.mul(multiplier.neg()).neg();
	        // If both longs are small, use float multiplication
	        if (this.lt(TWO_PWR_24) && multiplier.lt(TWO_PWR_24))
	            return fromNumber(this.toNumber() * multiplier.toNumber(), this.unsigned);
	        // Divide each long into 4 chunks of 16 bits, and then add up 4x4 products.
	        // We can skip products that would overflow.
	        var a48 = this.high >>> 16;
	        var a32 = this.high & 0xFFFF;
	        var a16 = this.low >>> 16;
	        var a00 = this.low & 0xFFFF;
	        var b48 = multiplier.high >>> 16;
	        var b32 = multiplier.high & 0xFFFF;
	        var b16 = multiplier.low >>> 16;
	        var b00 = multiplier.low & 0xFFFF;
	        var c48 = 0, c32 = 0, c16 = 0, c00 = 0;
	        c00 += a00 * b00;
	        c16 += c00 >>> 16;
	        c00 &= 0xFFFF;
	        c16 += a16 * b00;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c16 += a00 * b16;
	        c32 += c16 >>> 16;
	        c16 &= 0xFFFF;
	        c32 += a32 * b00;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c32 += a16 * b16;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c32 += a00 * b32;
	        c48 += c32 >>> 16;
	        c32 &= 0xFFFF;
	        c48 += a48 * b00 + a32 * b16 + a16 * b32 + a00 * b48;
	        c48 &= 0xFFFF;
	        return fromBits((c16 << 16) | c00, (c48 << 16) | c32, this.unsigned);
	    };
	    /**
	     * Returns the product of this and the specified Long. This is an alias of {@link Long#multiply}.
	     * @function
	     * @param {!Long|number|string} multiplier Multiplier
	     * @returns {!Long} Product
	     */
	    LongPrototype.mul = LongPrototype.multiply;
	    /**
	     * Returns this Long divided by the specified. The result is signed if this Long is signed or
	     *  unsigned if this Long is unsigned.
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Quotient
	     */
	    LongPrototype.divide = function divide(divisor) {
	        if (!isLong(divisor))
	            divisor = fromValue(divisor);
	        if (divisor.isZero())
	            throw Error('division by zero');
	        // use wasm support if present
	        if (wasm) {
	            // guard against signed division overflow: the largest
	            // negative number / -1 would be 1 larger than the largest
	            // positive number, due to two's complement.
	            if (!this.unsigned &&
	                this.high === -0x80000000 &&
	                divisor.low === -1 && divisor.high === -1) {
	                // be consistent with non-wasm code path
	                return this;
	            }
	            var low = (this.unsigned ? wasm.div_u : wasm.div_s)(this.low, this.high, divisor.low, divisor.high);
	            return fromBits(low, wasm.get_high(), this.unsigned);
	        }
	        if (this.isZero())
	            return this.unsigned ? UZERO : ZERO;
	        var approx, rem, res;
	        if (!this.unsigned) {
	            // This section is only relevant for signed longs and is derived from the
	            // closure library as a whole.
	            if (this.eq(MIN_VALUE)) {
	                if (divisor.eq(ONE) || divisor.eq(NEG_ONE))
	                    return MIN_VALUE; // recall that -MIN_VALUE == MIN_VALUE
	                else if (divisor.eq(MIN_VALUE))
	                    return ONE;
	                else {
	                    // At this point, we have |other| >= 2, so |this/other| < |MIN_VALUE|.
	                    var halfThis = this.shr(1);
	                    approx = halfThis.div(divisor).shl(1);
	                    if (approx.eq(ZERO)) {
	                        return divisor.isNegative() ? ONE : NEG_ONE;
	                    }
	                    else {
	                        rem = this.sub(divisor.mul(approx));
	                        res = approx.add(rem.div(divisor));
	                        return res;
	                    }
	                }
	            }
	            else if (divisor.eq(MIN_VALUE))
	                return this.unsigned ? UZERO : ZERO;
	            if (this.isNegative()) {
	                if (divisor.isNegative())
	                    return this.neg().div(divisor.neg());
	                return this.neg().div(divisor).neg();
	            }
	            else if (divisor.isNegative())
	                return this.div(divisor.neg()).neg();
	            res = ZERO;
	        }
	        else {
	            // The algorithm below has not been made for unsigned longs. It's therefore
	            // required to take special care of the MSB prior to running it.
	            if (!divisor.unsigned)
	                divisor = divisor.toUnsigned();
	            if (divisor.gt(this))
	                return UZERO;
	            if (divisor.gt(this.shru(1))) // 15 >>> 1 = 7 ; with divisor = 8 ; true
	                return UONE;
	            res = UZERO;
	        }
	        // Repeat the following until the remainder is less than other:  find a
	        // floating-point that approximates remainder / other *from below*, add this
	        // into the result, and subtract it from the remainder.  It is critical that
	        // the approximate value is less than or equal to the real value so that the
	        // remainder never becomes negative.
	        rem = this;
	        while (rem.gte(divisor)) {
	            // Approximate the result of division. This may be a little greater or
	            // smaller than the actual value.
	            approx = Math.max(1, Math.floor(rem.toNumber() / divisor.toNumber()));
	            // We will tweak the approximate result by changing it in the 48-th digit or
	            // the smallest non-fractional digit, whichever is larger.
	            var log2 = Math.ceil(Math.log(approx) / Math.LN2), delta = (log2 <= 48) ? 1 : pow_dbl(2, log2 - 48), 
	            // Decrease the approximation until it is smaller than the remainder.  Note
	            // that if it is too large, the product overflows and is negative.
	            approxRes = fromNumber(approx), approxRem = approxRes.mul(divisor);
	            while (approxRem.isNegative() || approxRem.gt(rem)) {
	                approx -= delta;
	                approxRes = fromNumber(approx, this.unsigned);
	                approxRem = approxRes.mul(divisor);
	            }
	            // We know the answer can't be zero... and actually, zero would cause
	            // infinite recursion since we would make no progress.
	            if (approxRes.isZero())
	                approxRes = ONE;
	            res = res.add(approxRes);
	            rem = rem.sub(approxRem);
	        }
	        return res;
	    };
	    /**
	     * Returns this Long divided by the specified. This is an alias of {@link Long#divide}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Quotient
	     */
	    LongPrototype.div = LongPrototype.divide;
	    /**
	     * Returns this Long modulo the specified.
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.modulo = function modulo(divisor) {
	        if (!isLong(divisor))
	            divisor = fromValue(divisor);
	        // use wasm support if present
	        if (wasm) {
	            var low = (this.unsigned ? wasm.rem_u : wasm.rem_s)(this.low, this.high, divisor.low, divisor.high);
	            return fromBits(low, wasm.get_high(), this.unsigned);
	        }
	        return this.sub(this.div(divisor).mul(divisor));
	    };
	    /**
	     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.mod = LongPrototype.modulo;
	    /**
	     * Returns this Long modulo the specified. This is an alias of {@link Long#modulo}.
	     * @function
	     * @param {!Long|number|string} divisor Divisor
	     * @returns {!Long} Remainder
	     */
	    LongPrototype.rem = LongPrototype.modulo;
	    /**
	     * Returns the bitwise NOT of this Long.
	     * @returns {!Long}
	     */
	    LongPrototype.not = function not() {
	        return fromBits(~this.low, ~this.high, this.unsigned);
	    };
	    /**
	     * Returns the bitwise AND of this Long and the specified.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.and = function and(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low & other.low, this.high & other.high, this.unsigned);
	    };
	    /**
	     * Returns the bitwise OR of this Long and the specified.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.or = function or(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low | other.low, this.high | other.high, this.unsigned);
	    };
	    /**
	     * Returns the bitwise XOR of this Long and the given one.
	     * @param {!Long|number|string} other Other Long
	     * @returns {!Long}
	     */
	    LongPrototype.xor = function xor(other) {
	        if (!isLong(other))
	            other = fromValue(other);
	        return fromBits(this.low ^ other.low, this.high ^ other.high, this.unsigned);
	    };
	    /**
	     * Returns this Long with bits shifted to the left by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftLeft = function shiftLeft(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        if ((numBits &= 63) === 0)
	            return this;
	        else if (numBits < 32)
	            return fromBits(this.low << numBits, (this.high << numBits) | (this.low >>> (32 - numBits)), this.unsigned);
	        else
	            return fromBits(0, this.low << (numBits - 32), this.unsigned);
	    };
	    /**
	     * Returns this Long with bits shifted to the left by the given amount. This is an alias of {@link Long#shiftLeft}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shl = LongPrototype.shiftLeft;
	    /**
	     * Returns this Long with bits arithmetically shifted to the right by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftRight = function shiftRight(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        if ((numBits &= 63) === 0)
	            return this;
	        else if (numBits < 32)
	            return fromBits((this.low >>> numBits) | (this.high << (32 - numBits)), this.high >> numBits, this.unsigned);
	        else
	            return fromBits(this.high >> (numBits - 32), this.high >= 0 ? 0 : -1, this.unsigned);
	    };
	    /**
	     * Returns this Long with bits arithmetically shifted to the right by the given amount. This is an alias of {@link Long#shiftRight}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shr = LongPrototype.shiftRight;
	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount.
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shiftRightUnsigned = function shiftRightUnsigned(numBits) {
	        if (isLong(numBits))
	            numBits = numBits.toInt();
	        numBits &= 63;
	        if (numBits === 0)
	            return this;
	        else {
	            var high = this.high;
	            if (numBits < 32) {
	                var low = this.low;
	                return fromBits((low >>> numBits) | (high << (32 - numBits)), high >>> numBits, this.unsigned);
	            }
	            else if (numBits === 32)
	                return fromBits(high, 0, this.unsigned);
	            else
	                return fromBits(high >>> (numBits - 32), 0, this.unsigned);
	        }
	    };
	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shru = LongPrototype.shiftRightUnsigned;
	    /**
	     * Returns this Long with bits logically shifted to the right by the given amount. This is an alias of {@link Long#shiftRightUnsigned}.
	     * @function
	     * @param {number|!Long} numBits Number of bits
	     * @returns {!Long} Shifted Long
	     */
	    LongPrototype.shr_u = LongPrototype.shiftRightUnsigned;
	    /**
	     * Converts this Long to signed.
	     * @returns {!Long} Signed long
	     */
	    LongPrototype.toSigned = function toSigned() {
	        if (!this.unsigned)
	            return this;
	        return fromBits(this.low, this.high, false);
	    };
	    /**
	     * Converts this Long to unsigned.
	     * @returns {!Long} Unsigned long
	     */
	    LongPrototype.toUnsigned = function toUnsigned() {
	        if (this.unsigned)
	            return this;
	        return fromBits(this.low, this.high, true);
	    };
	    /**
	     * Converts this Long to its byte representation.
	     * @param {boolean=} le Whether little or big endian, defaults to big endian
	     * @returns {!Array.<number>} Byte representation
	     */
	    LongPrototype.toBytes = function toBytes(le) {
	        return le ? this.toBytesLE() : this.toBytesBE();
	    };
	    /**
	     * Converts this Long to its little endian byte representation.
	     * @returns {!Array.<number>} Little endian byte representation
	     */
	    LongPrototype.toBytesLE = function toBytesLE() {
	        var hi = this.high, lo = this.low;
	        return [
	            lo & 0xff,
	            lo >>> 8 & 0xff,
	            lo >>> 16 & 0xff,
	            lo >>> 24,
	            hi & 0xff,
	            hi >>> 8 & 0xff,
	            hi >>> 16 & 0xff,
	            hi >>> 24
	        ];
	    };
	    /**
	     * Converts this Long to its big endian byte representation.
	     * @returns {!Array.<number>} Big endian byte representation
	     */
	    LongPrototype.toBytesBE = function toBytesBE() {
	        var hi = this.high, lo = this.low;
	        return [
	            hi >>> 24,
	            hi >>> 16 & 0xff,
	            hi >>> 8 & 0xff,
	            hi & 0xff,
	            lo >>> 24,
	            lo >>> 16 & 0xff,
	            lo >>> 8 & 0xff,
	            lo & 0xff
	        ];
	    };
	    /**
	     * Creates a Long from its byte representation.
	     * @param {!Array.<number>} bytes Byte representation
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	     * @param {boolean=} le Whether little or big endian, defaults to big endian
	     * @returns {Long} The corresponding Long value
	     */
	    Long.fromBytes = function fromBytes(bytes, unsigned, le) {
	        return le ? Long.fromBytesLE(bytes, unsigned) : Long.fromBytesBE(bytes, unsigned);
	    };
	    /**
	     * Creates a Long from its little endian byte representation.
	     * @param {!Array.<number>} bytes Little endian byte representation
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	     * @returns {Long} The corresponding Long value
	     */
	    Long.fromBytesLE = function fromBytesLE(bytes, unsigned) {
	        return new Long(bytes[0] |
	            bytes[1] << 8 |
	            bytes[2] << 16 |
	            bytes[3] << 24, bytes[4] |
	            bytes[5] << 8 |
	            bytes[6] << 16 |
	            bytes[7] << 24, unsigned);
	    };
	    /**
	     * Creates a Long from its big endian byte representation.
	     * @param {!Array.<number>} bytes Big endian byte representation
	     * @param {boolean=} unsigned Whether unsigned or not, defaults to signed
	     * @returns {Long} The corresponding Long value
	     */
	    Long.fromBytesBE = function fromBytesBE(bytes, unsigned) {
	        return new Long(bytes[4] << 24 |
	            bytes[5] << 16 |
	            bytes[6] << 8 |
	            bytes[7], bytes[0] << 24 |
	            bytes[1] << 16 |
	            bytes[2] << 8 |
	            bytes[3], unsigned);
	    };
	    var Tools = {};
	    Tools.printValue = function (str_list, name, value, indent) {
	        if (indent < 0) {
	            indent = 2;
	        }
	        var tmp_str = "";
	        for (var i = 0; i < indent; ++i)
	            tmp_str += " ";
	        tmp_str = tmp_str + "[" + name + "]: " + value.toString() + "\n";
	        str_list.push(tmp_str);
	    };
	    // exports.Tools = Tools;
	    // pack[unpack] helper function, cfgData start
	    var TDR_DATA_TYPE = {
	        /** char ~ uint64 ~ float64 的数值定义与TSBuffer.DATA_TYPE一致 */
	        char: 0,
	        int8: 1,
	        uint8: 2,
	        int16: 3,
	        uint16: 4,
	        int32: 5,
	        uint32: 6,
	        int64: 7,
	        uint64: 8,
	        float32: 9,
	        float64: 10,
	        /** 嵌入的另外一个tdr的结构体, 构成协议的时候直接引用协议就可以了 */
	        tdr: 11,
	        string: 12
	    };
	    var WRITE_FUNC_MAP = [
	        "writeInt8",
	        "writeInt8",
	        "writeUInt8",
	        "writeInt16",
	        "writeUInt16",
	        "writeInt32",
	        "writeUInt32",
	        "writeInt64",
	        "writeUInt64",
	        "writeFloat",
	        "writeDouble"
	    ];
	    var WRITE_VAR_FUNC_MAP = [
	        "",
	        "",
	        "",
	        "writeVarInt16",
	        "writeVarUInt16",
	        "writeVarInt32",
	        "writeVarUInt32",
	        "writeVarInt64",
	        "writeVarUInt64",
	        "",
	        ""
	    ];
	    var READ_FUNC_MAP = [
	        "readInt8",
	        "readInt8",
	        "readUInt8",
	        "readInt16",
	        "readUInt16",
	        "readInt32",
	        "readUInt32",
	        "readInt64",
	        "readUInt64",
	        "readFloat",
	        "readDouble"
	    ];
	    var READ_VAR_FUNC_MAP = [
	        "",
	        "",
	        "",
	        "readVarInt16",
	        "readVarUInt16",
	        "readVarInt32",
	        "readVarUInt32",
	        "readVarInt64",
	        "readVarUInt64",
	        "",
	        ""
	    ];
	    var TDR_TLV_TYPE = [
	        "TDR_TYPE_ID_1_BYTE",
	        "TDR_TYPE_ID_1_BYTE",
	        "TDR_TYPE_ID_1_BYTE",
	        "TDR_TYPE_ID_2_BYTE",
	        "TDR_TYPE_ID_2_BYTE",
	        "TDR_TYPE_ID_4_BYTE",
	        "TDR_TYPE_ID_4_BYTE",
	        "TDR_TYPE_ID_8_BYTE",
	        "TDR_TYPE_ID_8_BYTE",
	        "TDR_TYPE_ID_4_BYTE",
	        "TDR_TYPE_ID_8_BYTE",
	        "TDR_TYPE_ID_LENGTH_DELIMITED",
	        "TDR_TYPE_ID_LENGTH_DELIMITED",
	        "TDR_TYPE_ID_LENGTH_DELIMITED",
	        "TDR_TYPE_ID_LENGTH_DELIMITED",
	        "TDR_TYPE_ID_LENGTH_DELIMITED",
	        "TDR_TYPE_ID_LENGTH_DELIMITED"
	    ];
	    var genReadTLVTdr = function (nouse_desc, tdr, entry, nouse_indent, read, useVarInt) {
	        var ret = new TdrReadRet();
	        /* read struct/union length */
	        var iMetaLength = read.readInt32(ret);
	        if (ErrorType.TDR_NO_ERROR != ret.ret)
	            return ret;
	        /* read value */
	        var ref;
	        if (tdr.select) {
	            ref = { selector: 0 };
	            ret.ret = entry.unpackDetailTLV(ref, read, iMetaLength, useVarInt);
	        }
	        else {
	            ret.ret = entry.unpackDetailTLV(read, iMetaLength, useVarInt);
	        }
	        if (ErrorType.TDR_NO_ERROR != ret.ret)
	            return ret;
	        if (tdr.select)
	            this[tdr.select] = ref.selector;
	        return ret;
	    };
	    var genReadTLVType = function (nouse_desc, tdr, route, nouse_indent, read, useVarInt) {
	        var ret = new TdrReadRet();
	        var map = useVarInt ? READ_VAR_FUNC_MAP : READ_FUNC_MAP;
	        /* read value */
	        // trans meta-prog only support two level
	        if (route.indexOf(';') > -1) {
	            var _a = route.split(';'), r1 = _a[0], r2 = _a[1];
	            this[r1][r2] = read[map[tdr.dataType]](ret);
	        }
	        else {
	            this[route] = read[map[tdr.dataType]](ret);
	        }
	        if (ErrorType.TDR_NO_ERROR != ret.ret)
	            return ret;
	        return ret;
	    };
	    var genTLVTagid = function (nouse_desc, tdr, nouse_indent, index, useVarInt, write) {
	        /* write tagid */
	        var iTagid, ret;
	        iTagid = TdrTLV.makeTag(index, useVarInt ? TdrTLVTypeId.TDR_TYPE_ID_VARINT : TdrTLVTypeId[TDR_TLV_TYPE[tdr.dataType]]);
	        ret = write.writeVarUInt32(iTagid);
	        if (ErrorType.TDR_NO_ERROR != ret)
	            return ret;
	        // final success
	        return ret;
	    };
	    var genTLVType = function (nouse_desc, tdr, nouse_indent, index, useVarInt, write) {
	        var map = useVarInt ? WRITE_VAR_FUNC_MAP : WRITE_FUNC_MAP;
	        var ret;
	        ret = genTLVTagid.bind(this)(null, tdr, 0, index, useVarInt, write);
	        if (ErrorType.TDR_NO_ERROR != ret)
	            return ret;
	        /* write value */
	        ret = write[map[tdr.dataType]](this[tdr.name]);
	        if (ErrorType.TDR_NO_ERROR != ret)
	            return ret;
	        // final success
	        return ret;
	    };
	    var genTLVArr = function (nouse_desc, tdr, nouse_indent, index, useVarInt, write) {
	        var ret;
	        var map = useVarInt ? WRITE_VAR_FUNC_MAP : WRITE_FUNC_MAP;
	        if (this[tdr.refer] > 0) {
	            ret = genTLVTagid.bind(this)(null, tdr, 0, index, useVarInt, write);
	            if (ErrorType.TDR_NO_ERROR != ret)
	                return ret;
	        }
	        /* reserve for array length */
	        var iArrayPos = write.getUsedSize();
	        ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	        if (ErrorType.TDR_NO_ERROR != ret)
	            return ret;
	        for (var myrefer_n = 0; myrefer_n < this[tdr.refer]; ++myrefer_n) {
	            if (tdr.dataType < map.length) {
	                /* write value */
	                ret = write[map[tdr.dataType]](this[tdr.name][myrefer_n]);
	                if (ErrorType.TDR_NO_ERROR != ret)
	                    return ret;
	            }
	            else {
	                /* reserve for struct/union length */
	                var iMetaPos = write.getUsedSize();
	                ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	                if (ErrorType.TDR_NO_ERROR != ret)
	                    return ret;
	                /* write value */
	                // union or struct
	                if (typeof tdr.select !== 'undefined') {
	                    var select = void 0;
	                    var ss = tdr.select.split('.');
	                    if (ss.length > 1) {
	                        select = this[ss[0]][ss[1]];
	                    }
	                    else {
	                        select = this[tdr.select];
	                    }
	                    ret = this[tdr.name][myrefer_n].packDetailTLV(select, write, useVarInt);
	                }
	                else {
	                    ret = this[tdr.name][myrefer_n].packDetailTLV(write, useVarInt);
	                }
	                if (ErrorType.TDR_NO_ERROR != ret)
	                    return ret;
	                /* write struct/union length */
	                var iMetaSize = write.getUsedSize() - iMetaPos - Int32Array.BYTES_PER_ELEMENT;
	                ret = write.writeInt32(iMetaSize, iMetaPos);
	                if (ErrorType.TDR_NO_ERROR != ret)
	                    return ret;
	            }
	        }
	        /* write array length */
	        var iArraySize = write.getUsedSize() - iArrayPos - Int32Array.BYTES_PER_ELEMENT;
	        ret = write.writeInt32(iArraySize, iArrayPos);
	        if (ErrorType.TDR_NO_ERROR != ret)
	            return ret;
	        // final success
	        return ret;
	    };
	    // pack[unpack] helper end
	    var StructTdr = (function () {
	        function StructTdr() {
	        }
	        StructTdr.prototype.packTLV = function (data, useVarInt) {
	            useVarInt = (useVarInt === undefined) ? true : useVarInt;
	            if (data.arrayBuffer == undefined || data.arrayBuffer.byteLength == 0 || data.size > data.arrayBuffer.byteLength)
	                return ErrorType.TDR_ERR_INVALID_BUFFER_PARAMETER;
	            var ret = ErrorType.TDR_NO_ERROR;
	            var write = new TdrWriteBuf(data.arrayBuffer, data.size, data.offset);
	            /* write the TLV magic */
	            if (useVarInt)
	                ret = write.writeUInt8(TLV_MAGIC.TLV_MAGIC_VARINT);
	            else
	                ret = write.writeUInt8(TLV_MAGIC.TLV_MAGIC_NOVARINT);
	            if (ErrorType.TDR_NO_ERROR != ret)
	                return ret;
	            /* reserve for struct length */
	            var pos = write.getUsedSize();
	            ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	            if (ErrorType.TDR_NO_ERROR != ret)
	                return ret;
	            ret = this.packDetailTLV(write, useVarInt);
	            if (ErrorType.TDR_NO_ERROR != ret)
	                return ret;
	            /* write struct length */
	            write.writeInt32(write.getUsedSize(), pos);
	            data.usedSize = write.getUsedSize();
	            return ret;
	        };
	        StructTdr.prototype.unpackTLV = function (data) {
	            if (data.arrayBuffer == undefined || data.arrayBuffer.byteLength == 0 || data.size > data.arrayBuffer.byteLength)
	                return ErrorType.TDR_ERR_INVALID_BUFFER_PARAMETER;
	            if (data.size < TdrTLV.TLV_MSG_MIN_SIZE)
	                return ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	            var read = new TdrReadBuf(data.arrayBuffer, data.size, data.offset);
	            var ret = new TdrReadRet();
	            var useVarInt = true;
	            var tlvMagic = read.readUInt8(ret);
	            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                return ret.ret;
	            if (TLV_MAGIC.TLV_MAGIC_VARINT == tlvMagic) {
	                useVarInt = true;
	            }
	            else if (TLV_MAGIC.TLV_MAGIC_NOVARINT == tlvMagic) {
	                useVarInt = false;
	            }
	            else {
	                return ErrorType.TDR_ERR_BAD_TLV_MAGIC;
	            }
	            var iMsgSize = read.readInt32(ret);
	            if (data.size < iMsgSize)
	                return ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	            ret.ret = this.unpackDetailTLV(read, iMsgSize - TdrTLV.TLV_MSG_MIN_SIZE, useVarInt);
	            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                return ret.ret;
	            data.usedSize = read.getUsedSize();
	            return ret.ret;
	        };
	        StructTdr.prototype._packDetailTLV = function (write, useVarInt) {
	            var ret = ErrorType.TDR_NO_ERROR;
	            for (var i = 0; i < this._propsInfo.length; i++) {
	                var tdr = this._propsInfo[i];
	                /* packTLV member: xx */
	                if (tdr.count) {
	                    if (tdr.refer) {
	                        if (this[tdr.refer] > tdr.countValue) {
	                            return ErrorType.TDR_ERR_REFER_SURPASS_COUNT;
	                        }
	                        // varInt
	                        var useVarRunTime = WRITE_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	                        ret = genTLVArr.bind(this)(null, tdr, null, tdr.id, useVarRunTime, write);
	                        if (ErrorType.TDR_NO_ERROR != ret)
	                            return ret;
	                    }
	                }
	                else if (tdr.stringSize) {
	                    ret = genTLVTagid.bind(this)(null, tdr, null, tdr.id, false, write);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* reserve for string length */
	                    var iStringPos = write.getUsedSize();
	                    ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* check the string length */
	                    var encodeString = TdrUtil.utf8Encode(this[tdr.name]);
	                    var iStringLength = TdrUtil.cstrlen(encodeString);
	                    if (iStringLength >= tdr.stringSizeValue)
	                        return ErrorType.TDR_ERR_STR_LEN_TOO_BIG;
	                    ret = write.writeCString(encodeString, iStringLength);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* write string length */
	                    var iStringSize = write.getUsedSize() - iStringPos - Int32Array.BYTES_PER_ELEMENT;
	                    ret = write.writeInt32(iStringSize, iStringPos);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                }
	                else if (tdr.dataType === TDR_DATA_TYPE.tdr) {
	                    ret = genTLVTagid.bind(this)(null, tdr, null, tdr.id, false, write);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* reserve for struct/union length */
	                    var iMetaPos = write.getUsedSize();
	                    ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* write value */
	                    // union or struct
	                    if (typeof tdr.select !== 'undefined') {
	                        var select = void 0;
	                        var ss = tdr.select.split('.');
	                        if (ss.length > 1) {
	                            select = this[ss[0]][ss[1]];
	                        }
	                        else {
	                            select = this[tdr.select];
	                        }
	                        ret = this[tdr.name].packDetailTLV(select, write, useVarInt);
	                        // ret = this[tdr.name].packDetailTLV(this[tdr.select], write, useVarInt);
	                    }
	                    else {
	                        ret = this[tdr.name].packDetailTLV(write, useVarInt);
	                    }
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* write struct/union length */
	                    var iMetaSize = write.getUsedSize() - iMetaPos - Int32Array.BYTES_PER_ELEMENT;
	                    ret = write.writeInt32(iMetaSize, iMetaPos);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                }
	                else {
	                    // varInt
	                    var useVarRunTime = WRITE_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	                    ret = genTLVType.bind(this)(null, tdr, null, tdr.id, useVarRunTime, write);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                }
	            }
	            return ret;
	        };
	        StructTdr.prototype._unpackDetailTLV = function (read, length, useVarInt) {
	            if (null == read || length <= 0)
	                return ErrorType.TDR_ERR_ARG_IS_NULL;
	            var ret = new TdrReadRet();
	            var iTagId = 0;
	            var iFiledId = 0;
	            var iUsed = read.getUsedSize();
	            while (read.getUsedSize() < iUsed + length) {
	                /* read tagid */
	                iTagId = read.readVarUInt32(ret);
	                if (ErrorType.TDR_NO_ERROR != ret.ret)
	                    return ret.ret;
	                iFiledId = TdrTLV.getFieldId(iTagId);
	                var tdr = this._propsInfo.find(function (t) { return t.id === iFiledId; });
	                if (tdr) {
	                    /* unpackTLV member: xx */
	                    if (tdr.count) {
	                        /* read array length */
	                        var iArraryLen = read.readInt32(ret);
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                        /* check if array is null */
	                        if (0 == iArraryLen)
	                            return ErrorType.TDR_ERR_NULL_ARRAY;
	                        var iArrayUsed = read.getUsedSize();
	                        for (var myarray_i = 0; myarray_i < tdr.countValue; ++myarray_i) {
	                            var entry = this[tdr.name][myarray_i];
	                            if (tdr.dataType == TDR_DATA_TYPE.tdr) {
	                                var ret_1 = genReadTLVTdr.bind(this)(null, tdr, entry, 0, read, useVarInt);
	                                if (ErrorType.TDR_NO_ERROR != ret_1.ret)
	                                    return ret_1.ret;
	                            }
	                            else {
	                                // varInt
	                                var useVarRunTime = READ_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	                                ret = genReadTLVType.bind(this)(null, tdr, tdr.name + ";" + myarray_i, 0, read, useVarRunTime);
	                                if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                    return ret.ret;
	                            }
	                            if (read.getUsedSize() > iArrayUsed + iArraryLen)
	                                return ErrorType.TDR_ERR_UNMATCHED_LENGTH;
	                            if (tdr.refer) {
	                                if (read.getUsedSize() == iArrayUsed + iArraryLen) {
	                                    this[tdr.refer] = myarray_i + 1;
	                                    break;
	                                }
	                            }
	                        }
	                    }
	                    else if (tdr.stringSize) {
	                        /* read string length */
	                        var iStringLength = read.readInt32(ret);
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                        /* check string length */
	                        if (iStringLength >= tdr.stringSizeValue)
	                            return ErrorType.TDR_ERR_STR_LEN_TOO_BIG;
	                        /* read value */
	                        this[tdr.name] = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    else if (tdr.dataType == TDR_DATA_TYPE.tdr) {
	                        var ret_2 = genReadTLVTdr.bind(this)(null, tdr, this[tdr.name], 0, read, useVarInt);
	                        if (ErrorType.TDR_NO_ERROR != ret_2.ret)
	                            return ret_2.ret;
	                    }
	                    else {
	                        // varInt
	                        var useVarRunTime = READ_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	                        ret = genReadTLVType.bind(this)(null, tdr, tdr.name, 0, read, useVarRunTime);
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                }
	                else {
	                    return ErrorType.TDR_ERR_UNKNOWN_TYPE_ID;
	                }
	            }
	            return ret.ret;
	        };
	        StructTdr.prototype.load = function (data) {
	            if (data.arrayBuffer == undefined || data.arrayBuffer.byteLength == 0 || data.size > data.arrayBuffer.byteLength)
	                return ErrorType.TDR_ERR_INVALID_BUFFER_PARAMETER;
	            var srcBuf = new TdrReadBuf(data.arrayBuffer, data.size, data.offset);
	            var ret = this.loadDetail(srcBuf);
	            data.usedSize = srcBuf.getUsedSize();
	            return ret;
	        };
	        StructTdr.prototype.visualize = function (indent) {
	            var ret = ErrorType.TDR_NO_ERROR;
	            var msg_list = new Array();
	            var curr_indent = indent;
	            var fixed_indent = indent;
	            ret = this.visualizeDetail(msg_list, curr_indent, fixed_indent);
	            console.log(msg_list.join());
	            return msg_list.join();
	        };
	        return StructTdr;
	    }());
	    var UnionTdr = (function () {
	        function UnionTdr() {
	        }
	        UnionTdr.prototype.packTLV = function (selector, data, useVarInt) {
	            useVarInt = (useVarInt === undefined) ? true : useVarInt;
	            if (data.arrayBuffer == undefined || data.arrayBuffer.byteLength == 0 || data.size > data.arrayBuffer.byteLength)
	                return ErrorType.TDR_ERR_INVALID_BUFFER_PARAMETER;
	            var ret = ErrorType.TDR_NO_ERROR;
	            var write = new TdrWriteBuf(data.arrayBuffer, data.size, data.offset);
	            /* write the TLV magic */
	            if (useVarInt)
	                ret = write.writeUInt8(TLV_MAGIC.TLV_MAGIC_VARINT);
	            else
	                ret = write.writeUInt8(TLV_MAGIC.TLV_MAGIC_NOVARINT);
	            if (ErrorType.TDR_NO_ERROR != ret)
	                return ret;
	            /* reserve for union length */
	            var pos = write.getUsedSize();
	            ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	            if (ErrorType.TDR_NO_ERROR != ret)
	                return ret;
	            ret = this.packDetailTLV(selector, write, useVarInt);
	            if (ErrorType.TDR_NO_ERROR != ret)
	                return ret;
	            /* write union length */
	            write.writeInt32(write.getUsedSize(), pos);
	            data.usedSize = write.getUsedSize();
	            return ret;
	        };
	        UnionTdr.prototype._packDetailTLV = function (selector, write, useVarInt) {
	            var ret = ErrorType.TDR_NO_ERROR;
	            /* packTLV member: xx */
	            // console.log('--->tdrTools.selector:', selector)
	            var tdr = this._propsInfo.find(function (t) { return t.id === selector; });
	            // console.log('--->tdrTools.,this._propsInfo:', this._propsInfo)
	            if (tdr) {
	                if (tdr.count) {
	                    if (tdr.refer) {
	                        if (this[tdr.refer] > tdr.countValue) {
	                            return ErrorType.TDR_ERR_REFER_SURPASS_COUNT;
	                        }
	                        //has varInt
	                        var useVarRunTime = WRITE_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	                        ret = genTLVArr.bind(this)(null, tdr, null, tdr.id, useVarRunTime, write);
	                        if (ErrorType.TDR_NO_ERROR != ret)
	                            return ret;
	                    }
	                }
	                else if (tdr.stringSize) {
	                    ret = genTLVTagid.bind(this)(null, tdr, null, tdr.id, false, write);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* reserve for string length */
	                    var iStringPos = write.getUsedSize();
	                    ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* check the string length */
	                    var encodeString = TdrUtil.utf8Encode(this[tdr.name]);
	                    var iStringLength = TdrUtil.cstrlen(encodeString);
	                    if (iStringLength >= tdr.stringSizeValue)
	                        return ErrorType.TDR_ERR_STR_LEN_TOO_BIG;
	                    ret = write.writeCString(encodeString, iStringLength);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* write string length */
	                    var iStringSize = write.getUsedSize() - iStringPos - Int32Array.BYTES_PER_ELEMENT;
	                    ret = write.writeInt32(iStringSize, iStringPos);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                }
	                else if (tdr.dataType === TDR_DATA_TYPE.tdr) {
	                    ret = genTLVTagid.bind(this)(null, tdr, null, tdr.id, false, write);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* reserve for struct/union length */
	                    var iMetaPos = write.getUsedSize();
	                    ret = write.reserve(Int32Array.BYTES_PER_ELEMENT);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* write value */
	                    // union or struct
	                    if (typeof tdr.select !== 'undefined') {
	                        // union嵌套union , 不可能?
	                        var select = void 0;
	                        var ss = tdr.select.split('.');
	                        if (ss.length > 1) {
	                            select = this[ss[0]][ss[1]];
	                        }
	                        else {
	                            select = this[tdr.select];
	                        }
	                        ret = this[tdr.name].packDetailTLV(select, write, useVarInt);
	                        // ret = this[tdr.name].packDetailTLV(this[tdr.select], write, useVarInt);
	                    }
	                    else {
	                        ret = this[tdr.name].packDetailTLV(write, useVarInt);
	                    }
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                    /* write struct/union length */
	                    var iMetaSize = write.getUsedSize() - iMetaPos - Int32Array.BYTES_PER_ELEMENT;
	                    ret = write.writeInt32(iMetaSize, iMetaPos);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                }
	                else {
	                    //has varInt
	                    var useVarRunTime = WRITE_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	                    ret = genTLVType.bind(this)(null, tdr, null, tdr.id, useVarRunTime, write);
	                    if (ErrorType.TDR_NO_ERROR != ret)
	                        return ret;
	                }
	            }
	            else {
	                return ErrorType.TDR_ERR_UNION_SELECTE_FIELD_IS_NULL;
	            }
	            return ret;
	        };
	        UnionTdr.prototype.unpackTLV = function (selector, data) {
	            if (data.arrayBuffer == undefined || data.arrayBuffer.byteLength == 0 || data.size > data.arrayBuffer.byteLength)
	                return ErrorType.TDR_ERR_INVALID_BUFFER_PARAMETER;
	            if (data.size < TdrTLV.TLV_MSG_MIN_SIZE)
	                return ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	            var read = new TdrReadBuf(data.arrayBuffer, data.size, data.offset);
	            var ret = new TdrReadRet();
	            var useVarInt = true;
	            var tlvMagic = read.readUInt8(ret);
	            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                return ret.ret;
	            if (TLV_MAGIC.TLV_MAGIC_VARINT == tlvMagic) {
	                useVarInt = true;
	            }
	            else if (TLV_MAGIC.TLV_MAGIC_NOVARINT == tlvMagic) {
	                useVarInt = false;
	            }
	            else {
	                return ErrorType.TDR_ERR_BAD_TLV_MAGIC;
	            }
	            var iMsgSize = read.readInt32(ret);
	            if (data.size < iMsgSize)
	                return ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	            ret.ret = this.unpackDetailTLV(selector, read, iMsgSize - TdrTLV.TLV_MSG_MIN_SIZE, useVarInt);
	            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                return ret.ret;
	            data.usedSize = read.getUsedSize();
	            return ret.ret;
	        };
	        UnionTdr.prototype._unpackDetailTLV = function (selector, read, length, useVarInt) {
	            if (null == read || length <= 0)
	                return ErrorType.TDR_ERR_ARG_IS_NULL;
	            var ret = new TdrReadRet();
	            var iTagId = 0;
	            var iFiledId = 0;
	            var iUsed = read.getUsedSize();
	            /* read tagid */
	            iTagId = read.readVarUInt32(ret);
	            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                return ret.ret;
	            iFiledId = TdrTLV.getFieldId(iTagId);
	            /* unpackTLV member: xxxx */
	            // get select
	            var tdr = this._propsInfo.find(function (t) { return t.id === iFiledId; });
	            if (tdr) {
	                if (tdr.count) {
	                    /* read array length */
	                    var iArraryLen = read.readInt32(ret);
	                    if (ErrorType.TDR_NO_ERROR != ret.ret)
	                        return ret.ret;
	                    /* check if array is null */
	                    if (0 == iArraryLen)
	                        return ErrorType.TDR_ERR_NULL_ARRAY;
	                    var iArrayUsed = read.getUsedSize();
	                    for (var myarray_i = 0; myarray_i < tdr.countValue; ++myarray_i) {
	                        var entry = this[tdr.name][myarray_i];
	                        if (tdr.dataType === TDR_DATA_TYPE.tdr) {
	                            var ret_3 = genReadTLVTdr.bind(this)(null, tdr, entry, 0, read, useVarInt);
	                            if (ErrorType.TDR_NO_ERROR != ret_3.ret)
	                                return ret_3.ret;
	                        }
	                        else {
	                            // varInt
	                            var useVarRunTime = READ_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	                            ret = genReadTLVType.bind(this)(null, tdr, tdr.name + ";" + myarray_i, 0, read, useVarRunTime);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                        if (read.getUsedSize() > iArrayUsed + iArraryLen)
	                            return ErrorType.TDR_ERR_UNMATCHED_LENGTH;
	                        if (tdr.refer) {
	                            if (read.getUsedSize() == iArrayUsed + iArraryLen) {
	                                this[tdr.refer] = myarray_i + 1;
	                                break;
	                            }
	                        }
	                    }
	                }
	                else if (tdr.stringSize) {
	                    /* read string length */
	                    var iStringLength = read.readInt32(ret);
	                    if (ErrorType.TDR_NO_ERROR != ret.ret)
	                        return ret.ret;
	                    /* check string length */
	                    if (iStringLength >= tdr.stringSizeValue)
	                        return ErrorType.TDR_ERR_STR_LEN_TOO_BIG;
	                    /* read value */
	                    this[tdr.name] = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                    if (ErrorType.TDR_NO_ERROR != ret.ret)
	                        return ret.ret;
	                }
	                else if (tdr.dataType === TDR_DATA_TYPE.tdr) {
	                    var ret_4 = genReadTLVTdr.bind(this)(null, tdr, this[tdr.name], 0, read, useVarInt);
	                    if (ErrorType.TDR_NO_ERROR != ret_4.ret)
	                        return ret_4.ret;
	                }
	                else {
	                    // varInt
	                    var useVarRunTime = READ_VAR_FUNC_MAP[tdr.dataType] != "" && useVarInt;
	                    ret = genReadTLVType.bind(this)(null, tdr, tdr.name, 0, read, useVarRunTime);
	                    if (ErrorType.TDR_NO_ERROR != ret.ret)
	                        return ret.ret;
	                }
	            }
	            else {
	                return ErrorType.TDR_ERR_UNKNOWN_TYPE_ID;
	            }
	            if (read.getUsedSize() > iUsed + length)
	                return ErrorType.TDR_ERR_UNMATCHED_LENGTH;
	            selector.selector = iFiledId;
	            return ret.ret;
	        };
	        UnionTdr.prototype.visualize = function (indent) {
	            var ret = ErrorType.TDR_NO_ERROR;
	            ret = this.visualizeDetail(indent);
	            return ret;
	        };
	        return UnionTdr;
	    }());
	    
	    /// <reference path="TdrTLV.ts" />
	    var ErrorType;
	    (function (ErrorType) {
	        ErrorType[ErrorType["TDR_NO_ERROR"] = 0] = "TDR_NO_ERROR";
	        ErrorType[ErrorType["TDR_ERR_SHORT_BUF_FOR_WRITE"] = -1] = "TDR_ERR_SHORT_BUF_FOR_WRITE";
	        ErrorType[ErrorType["TDR_ERR_SHORT_BUF_FOR_READ"] = -2] = "TDR_ERR_SHORT_BUF_FOR_READ";
	        ErrorType[ErrorType["TDR_ERR_STR_LEN_TOO_BIG"] = -3] = "TDR_ERR_STR_LEN_TOO_BIG";
	        ErrorType[ErrorType["TDR_ERR_STR_LEN_TOO_SMALL"] = -4] = "TDR_ERR_STR_LEN_TOO_SMALL";
	        ErrorType[ErrorType["TDR_ERR_STR_LEN_CONFLICT"] = -5] = "TDR_ERR_STR_LEN_CONFLICT";
	        ErrorType[ErrorType["TDR_ERR_MINUS_REFER_VALUE"] = -6] = "TDR_ERR_MINUS_REFER_VALUE";
	        ErrorType[ErrorType["TDR_ERR_REFER_SURPASS_COUNT"] = -7] = "TDR_ERR_REFER_SURPASS_COUNT";
	        ErrorType[ErrorType["TDR_ERR_ARG_IS_NULL"] = -8] = "TDR_ERR_ARG_IS_NULL";
	        ErrorType[ErrorType["TDR_ERR_CUTVER_TOO_SMALL"] = -9] = "TDR_ERR_CUTVER_TOO_SMALL";
	        ErrorType[ErrorType["TDR_ERR_CUTVER_CONFILICT"] = -10] = "TDR_ERR_CUTVER_CONFILICT";
	        ErrorType[ErrorType["TDR_ERR_PARSE_TDRIP_FAILED"] = -11] = "TDR_ERR_PARSE_TDRIP_FAILED";
	        ErrorType[ErrorType["TDR_ERR_INVALID_TDRIP_VALUE"] = -12] = "TDR_ERR_INVALID_TDRIP_VALUE";
	        ErrorType[ErrorType["TDR_ERR_INVALID_TDRTIME_VALUE"] = -13] = "TDR_ERR_INVALID_TDRTIME_VALUE";
	        ErrorType[ErrorType["TDR_ERR_INVALID_TDRDATE_VALUE"] = -14] = "TDR_ERR_INVALID_TDRDATE_VALUE";
	        ErrorType[ErrorType["TDR_ERR_INVALID_TDRDATETIME_VALUE"] = -15] = "TDR_ERR_INVALID_TDRDATETIME_VALUE";
	        ErrorType[ErrorType["TDR_ERR_FUNC_LOCALTIME_FAILED"] = -16] = "TDR_ERR_FUNC_LOCALTIME_FAILED";
	        ErrorType[ErrorType["TDR_ERR_INVALID_HEX_STR_LEN"] = -17] = "TDR_ERR_INVALID_HEX_STR_LEN";
	        ErrorType[ErrorType["TDR_ERR_INVALID_HEX_STR_FORMAT"] = -18] = "TDR_ERR_INVALID_HEX_STR_FORMAT";
	        ErrorType[ErrorType["TDR_ERR_INVALID_BUFFER_PARAMETER"] = -19] = "TDR_ERR_INVALID_BUFFER_PARAMETER";
	        ErrorType[ErrorType["TDR_ERR_NET_CUTVER_INVALID"] = -20] = "TDR_ERR_NET_CUTVER_INVALID";
	        ErrorType[ErrorType["TDR_ERR_ACCESS_VILOATION_EXCEPTION"] = -21] = "TDR_ERR_ACCESS_VILOATION_EXCEPTION";
	        ErrorType[ErrorType["TDR_ERR_ARGUMENT_NULL_EXCEPTION"] = -22] = "TDR_ERR_ARGUMENT_NULL_EXCEPTION";
	        ErrorType[ErrorType["TDR_ERR_USE_HAVE_NOT_INIT_VARIABLE_ARRAY"] = -23] = "TDR_ERR_USE_HAVE_NOT_INIT_VARIABLE_ARRAY";
	        ErrorType[ErrorType["TDR_ERR_INVALID_FORMAT"] = -24] = "TDR_ERR_INVALID_FORMAT";
	        ErrorType[ErrorType["TDR_ERR_HAVE_NOT_SET_SIZEINFO"] = -25] = "TDR_ERR_HAVE_NOT_SET_SIZEINFO";
	        ErrorType[ErrorType["TDR_ERR_VAR_STRING_LENGTH_CONFILICT"] = -26] = "TDR_ERR_VAR_STRING_LENGTH_CONFILICT";
	        ErrorType[ErrorType["TDR_ERR_VAR_ARRAY_CONFLICT"] = -27] = "TDR_ERR_VAR_ARRAY_CONFLICT";
	        ErrorType[ErrorType["TDR_ERR_BAD_TLV_MAGIC"] = -28] = "TDR_ERR_BAD_TLV_MAGIC";
	        ErrorType[ErrorType["TDR_ERR_UNMATCHED_LENGTH"] = -29] = "TDR_ERR_UNMATCHED_LENGTH";
	        ErrorType[ErrorType["TDR_ERR_UNION_SELECTE_FIELD_IS_NULL"] = -30] = "TDR_ERR_UNION_SELECTE_FIELD_IS_NULL";
	        ErrorType[ErrorType["TDR_ERR_SUSPICIOUS_SELECTOR"] = -31] = "TDR_ERR_SUSPICIOUS_SELECTOR";
	        ErrorType[ErrorType["TDR_ERR_UNKNOWN_TYPE_ID"] = -32] = "TDR_ERR_UNKNOWN_TYPE_ID";
	        ErrorType[ErrorType["TDR_ERR_LOST_REQUIRED_FIELD"] = -33] = "TDR_ERR_LOST_REQUIRED_FIELD";
	        ErrorType[ErrorType["TDR_ERR_NULL_ARRAY"] = -34] = "TDR_ERR_NULL_ARRAY";
	        ErrorType[ErrorType["TDR_ERR_ARRAY_FAIL"] = -35] = "TDR_ERR_ARRAY_FAIL";
	    })(ErrorType || (ErrorType = {}));
	    var DATA_TYPE;
	    (function (DATA_TYPE) {
	        DATA_TYPE[DATA_TYPE["char"] = 0] = "char";
	        DATA_TYPE[DATA_TYPE["int8"] = 1] = "int8";
	        DATA_TYPE[DATA_TYPE["uint8"] = 2] = "uint8";
	        DATA_TYPE[DATA_TYPE["int16"] = 3] = "int16";
	        DATA_TYPE[DATA_TYPE["uint16"] = 4] = "uint16";
	        DATA_TYPE[DATA_TYPE["int32"] = 5] = "int32";
	        DATA_TYPE[DATA_TYPE["uint32"] = 6] = "uint32";
	        DATA_TYPE[DATA_TYPE["int64"] = 7] = "int64";
	        DATA_TYPE[DATA_TYPE["uint64"] = 8] = "uint64";
	        DATA_TYPE[DATA_TYPE["float32"] = 9] = "float32";
	        DATA_TYPE[DATA_TYPE["float64"] = 10] = "float64";
	    })(DATA_TYPE || (DATA_TYPE = {}));
	    /** Tdr���ݱ����� */
	    var TdrData = (function () {
	        function TdrData(obj, offset) {
	            if (offset === void 0) {
	                offset = 0;
	            }
	            if (obj instanceof ArrayBuffer) {
	                this.arrayBuffer = obj;
	                this.size = obj.byteLength - offset;
	                this.offset = offset;
	            }
	            else {
	                this.arrayBuffer = new ArrayBuffer(obj);
	                if (this.arrayBuffer.byteLength == obj) {
	                    this.size = obj;
	                }
	                else {
	                    this.size = 0;
	                    this.arrayBuffer = null;
	                }
	            }
	            this.usedSize = 0;
	        }
	        TdrData.prototype.clear = function () {
	            var type = new Uint8Array(this.arrayBuffer);
	            if (!Uint8Array.prototype.fill) {
	                for (var i = this.offset; i < this.offset + this.usedSize; i++)
	                    type[i] = 0;
	            }
	            else {
	                type.fill(0, this.offset, this.offset + this.usedSize);
	            }
	            this.usedSize = 0;
	        };
	        return TdrData;
	    }());
	    /** TDRдBuff�� */
	    var TdrWriteBuf = (function () {
	        function TdrWriteBuf(ptr, len, offset) {
	            // console.log('TdrWriteBuf:', ptr)
	            if (offset === void 0) {
	                offset = 0;
	            }
	            this._begin = ptr;
	            this._view = new DataView(this._begin, offset);
	            this._pos = 0;
	            this._length = 0;
	            if (null != this._begin) {
	                this._length = len;
	            }
	        }
	        /** ͨ��write���� */
	        TdrWriteBuf.prototype.write = function (src, byte_length, set_func, offset) {
	            if (null == this._begin) {
	                return ErrorType.TDR_ERR_ARG_IS_NULL;
	            }
	            if (byte_length >= this.getLeftSize()) {
	                return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	            }
	            var append = offset === undefined;
	            if (append) {
	                offset = this._pos;
	                this._pos += byte_length;
	            }
	            set_func(offset, src, !TdrUtil.isLittleEndian);
	            return ErrorType.TDR_NO_ERROR;
	        };
	        /** ��ʹ�ó��� */
	        TdrWriteBuf.prototype.getUsedSize = function () {
	            return this._pos;
	        };
	        /** �ܳ��� */
	        TdrWriteBuf.prototype.getTotalSize = function () {
	            return this._length;
	        };
	        /** ʣ�೤�� */
	        TdrWriteBuf.prototype.getLeftSize = function () {
	            return this._length - this._pos;
	        };
	        /** Ԥ��gap���� */
	        TdrWriteBuf.prototype.reserve = function (gap) {
	            if (this._pos > this._length) {
	                return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	            }
	            if (gap > this.getLeftSize()) {
	                return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	            }
	            this._pos += gap;
	            return ErrorType.TDR_NO_ERROR;
	        };
	        TdrWriteBuf.prototype.writeInt8 = function (src, pos) {
	            var _this = this;
	            return this.write(src, Int8Array.BYTES_PER_ELEMENT, function (a, b) {
	                _this._view.setInt8(a, b);
	            }, pos);
	        };
	        TdrWriteBuf.prototype.writeUInt8 = function (src, pos) {
	            var _this = this;
	            return this.write(src, Uint8Array.BYTES_PER_ELEMENT, function (a, b) {
	                _this._view.setUint8(a, b);
	            }, pos);
	        };
	        TdrWriteBuf.prototype.writeInt16 = function (src, pos) {
	            var _this = this;
	            return this.write(src, Int16Array.BYTES_PER_ELEMENT, function (a, b, c) {
	                _this._view.setInt16(a, b, c);
	            }, pos);
	        };
	        TdrWriteBuf.prototype.writeUInt16 = function (src, pos) {
	            var _this = this;
	            return this.write(src, Uint16Array.BYTES_PER_ELEMENT, function (a, b, c) {
	                _this._view.setUint16(a, b, c);
	            }, pos);
	        };
	        TdrWriteBuf.prototype.writeInt32 = function (src, pos) {
	            var _this = this;
	            return this.write(src, Int32Array.BYTES_PER_ELEMENT, function (a, b, c) {
	                _this._view.setInt32(a, b, c);
	            }, pos);
	        };
	        TdrWriteBuf.prototype.writeUInt32 = function (src, pos) {
	            var _this = this;
	            return this.write(src, Uint32Array.BYTES_PER_ELEMENT, function (a, b, c) {
	                _this._view.setUint32(a, b, c);
	            }, pos);
	        };
	        TdrWriteBuf.prototype.writeInt64 = function (src, pos) {
	            return this.writeUInt64(src, pos);
	        };
	        TdrWriteBuf.prototype.writeUInt64 = function (src, pos) {
	            var _begin = this._begin;
	            return this.write(src, 8, function (a, b, c) {
	                if (typeof b === "number")
	                    b = new UInt64(0, b);
	                var arr = b.writeToArrayBuffer(c);
	                new Uint8Array(_begin).set(new Uint8Array(arr), a);
	            }, pos);
	        };
	        TdrWriteBuf.prototype.writeFloat = function (src, pos) {
	            var _this = this;
	            return this.write(src, Float32Array.BYTES_PER_ELEMENT, function (a, b, c) {
	                _this._view.setFloat32(a, b, c);
	            }, pos);
	        };
	        TdrWriteBuf.prototype.writeDouble = function (src, pos) {
	            var _this = this;
	            return this.write(src, Float64Array.BYTES_PER_ELEMENT, function (a, b, c) {
	                _this._view.setFloat64(a, b, c);
	            }, pos);
	        };
	        TdrWriteBuf.prototype.writeVarUInt16 = function (src) {
	            if (null == this._begin)
	                return ErrorType.TDR_ERR_ARG_IS_NULL;
	            var base128 = 0;
	            var buf = new ArrayBuffer(2);
	            if (buf.byteLength != 2)
	                return ErrorType.TDR_ERR_ARRAY_FAIL;
	            if (!TdrUtil.isLittleEndian) {
	                src = TdrUtil.hostToNetworkOrder(src, DATA_TYPE.uint16);
	            }
	            do {
	                if (this.getLeftSize() <= 0) {
	                    return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	                }
	                var view16 = new Uint16Array(buf);
	                view16[0] = src;
	                var view8 = new Uint8Array(buf);
	                base128 = view8[0] & 0x7F;
	                src = src >> 7;
	                if (src != 0) {
	                    base128 |= 0x80;
	                }
	                this._view.setUint8(this._pos++, base128);
	            } while (src != 0);
	            return ErrorType.TDR_NO_ERROR;
	        };
	        TdrWriteBuf.prototype.writeVarInt16 = function (src) {
	            if (null == this._begin)
	                return ErrorType.TDR_ERR_ARG_IS_NULL;
	            if (!TdrUtil.isLittleEndian) {
	                src = TdrUtil.hostToNetworkOrder(src, DATA_TYPE.int16);
	            }
	            src = (src << 1) ^ (src >> 15);
	            var base128 = 0;
	            var buf = new ArrayBuffer(2);
	            if (buf.byteLength != 2)
	                return ErrorType.TDR_ERR_ARRAY_FAIL;
	            do {
	                if (this.getLeftSize() <= 0) {
	                    return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	                }
	                var view16 = new Uint16Array(buf);
	                view16[0] = src;
	                var view8 = new Uint8Array(buf);
	                base128 = view8[0] & 0x7F;
	                src = src >> 7;
	                if (src != 0) {
	                    base128 |= 0x80;
	                }
	                this._view.setUint8(this._pos++, base128);
	            } while (src != 0);
	            return ErrorType.TDR_NO_ERROR;
	        };
	        TdrWriteBuf.prototype.writeVarUInt32 = function (src) {
	            if (null == this._begin)
	                return ErrorType.TDR_ERR_ARG_IS_NULL;
	            if (!TdrUtil.isLittleEndian) {
	                src = TdrUtil.hostToNetworkOrder(src, DATA_TYPE.uint32);
	            }
	            var base128 = 0;
	            var buf = new ArrayBuffer(Uint32Array.BYTES_PER_ELEMENT);
	            if (buf.byteLength != Uint32Array.BYTES_PER_ELEMENT)
	                return ErrorType.TDR_ERR_ARRAY_FAIL;
	            do {
	                if (this.getLeftSize() <= 0) {
	                    return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	                }
	                var viewOrg = new Uint32Array(buf);
	                viewOrg[0] = src;
	                var view8 = new Uint8Array(buf);
	                base128 = view8[0] & 0x7F;
	                src = src >>> 7;
	                if (src != 0) {
	                    base128 |= 0x80;
	                }
	                this._view.setUint8(this._pos++, base128);
	            } while (src != 0);
	            return ErrorType.TDR_NO_ERROR;
	        };
	        TdrWriteBuf.prototype.writeVarInt32 = function (src) {
	            if (null == this._begin)
	                return ErrorType.TDR_ERR_ARG_IS_NULL;
	            if (!TdrUtil.isLittleEndian) {
	                src = TdrUtil.hostToNetworkOrder(src, DATA_TYPE.int32);
	            }
	            src = (src << 1) ^ (src >> 31);
	            var base128 = 0;
	            var buf = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
	            if (buf.byteLength != Int32Array.BYTES_PER_ELEMENT)
	                return ErrorType.TDR_ERR_ARRAY_FAIL;
	            do {
	                if (this.getLeftSize() <= 0) {
	                    return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	                }
	                var viewOrg = new Uint16Array(buf);
	                viewOrg[0] = src;
	                var view8 = new Uint8Array(buf);
	                base128 = view8[0] & 0x7F;
	                src = src >>> 7;
	                if (src != 0) {
	                    base128 |= 0x80;
	                }
	                this._view.setUint8(this._pos++, base128);
	            } while (src != 0);
	            return ErrorType.TDR_NO_ERROR;
	        };
	        TdrWriteBuf.prototype.writeCString = function (byte_src, count) {
	            if (null == this._begin)
	                return ErrorType.TDR_ERR_ARG_IS_NULL;
	            if (count > this.getLeftSize())
	                return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	            var arr = new Uint8Array(byte_src);
	            for (var i = 0; i < count; i++) {
	                this._view.setUint8(this._pos++, arr[i]);
	            }
	            return ErrorType.TDR_NO_ERROR;
	        };
	        TdrWriteBuf.prototype.calculateVarint64 = function (value) {
	            //? LONG('value');
	            // ref: src/google/protobuf/io/coded_stream.cc
	            var part0 = value.toInt() >>> 0, part1 = value.shiftRightUnsigned(28).toInt() >>> 0, part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	            if (part2 == 0) {
	                if (part1 == 0) {
	                    if (part0 < 1 << 14)
	                        return part0 < 1 << 7 ? 1 : 2;
	                    else
	                        return part0 < 1 << 21 ? 3 : 4;
	                }
	                else {
	                    if (part1 < 1 << 14)
	                        return part1 < 1 << 7 ? 5 : 6;
	                    else
	                        return part1 < 1 << 21 ? 7 : 8;
	                }
	            }
	            else
	                return part2 < 1 << 7 ? 9 : 10;
	        };
	        TdrWriteBuf.prototype.var64bitsEncode = function (value) {
	            if (typeof value === "number")
	                value = Long.fromValue(value, true);
	            var size = this.calculateVarint64(value), part0 = value.toInt() >>> 0, part1 = value.shiftRightUnsigned(28).toInt() >>> 0, part2 = value.shiftRightUnsigned(56).toInt() >>> 0;
	            if (this.getLeftSize() < size) {
	                return ErrorType.TDR_ERR_SHORT_BUF_FOR_WRITE;
	            }
	            switch (size) {
	                case 10:
	                    this._view.setUint8(this._pos + 9, (part2 >>> 7) & 0x01);
	                case 9:
	                    this._view.setUint8(this._pos + 8, size !== 9 ? (part2) | 0x80 : (part2) & 0x7F);
	                case 8:
	                    this._view.setUint8(this._pos + 7, size !== 8 ? (part1 >>> 21) | 0x80 : (part1 >>> 21) & 0x7F);
	                case 7:
	                    this._view.setUint8(this._pos + 6, size !== 7 ? (part1 >>> 14) | 0x80 : (part1 >>> 14) & 0x7F);
	                case 6:
	                    this._view.setUint8(this._pos + 5, size !== 6 ? (part1 >>> 7) | 0x80 : (part1 >>> 7) & 0x7F);
	                case 5:
	                    this._view.setUint8(this._pos + 4, size !== 5 ? (part1) | 0x80 : (part1) & 0x7F);
	                case 4:
	                    this._view.setUint8(this._pos + 3, size !== 4 ? (part0 >>> 21) | 0x80 : (part0 >>> 21) & 0x7F);
	                case 3:
	                    this._view.setUint8(this._pos + 2, size !== 3 ? (part0 >>> 14) | 0x80 : (part0 >>> 14) & 0x7F);
	                case 2:
	                    this._view.setUint8(this._pos + 1, size !== 2 ? (part0 >>> 7) | 0x80 : (part0 >>> 7) & 0x7F);
	                case 1:
	                    this._view.setUint8(this._pos, size !== 1 ? (part0) | 0x80 : (part0) & 0x7F);
	                    this._pos += size;
	            }
	            return ErrorType.TDR_NO_ERROR;
	        };
	        TdrWriteBuf.prototype.zigZagEncode64 = function (value) {
	            //? LONG('value', false);
	            // ref: src/google/protobuf/wire_format_lite.h
	            return value.shiftLeft(1).xor(value.shiftRight(63)).toUnsigned();
	        };
	        TdrWriteBuf.prototype.writeVarUInt64 = function (value) {
	            if (typeof value === "number")
	                value = Long.fromValue(value, true);
	            return this.var64bitsEncode(value);
	        };
	        TdrWriteBuf.prototype.writeVarInt64 = function (value) {
	            if (typeof value === "number")
	                value = Long.fromValue(value, false);
	            return this.var64bitsEncode(this.zigZagEncode64(value));
	        };
	        return TdrWriteBuf;
	    }());
	    var TdrReadRet = (function () {
	        function TdrReadRet(init) {
	            this.ret = init || ErrorType.TDR_NO_ERROR;
	        }
	        return TdrReadRet;
	    }());
	    /** TDR��Buff�� */
	    var TdrReadBuf = (function () {
	        function TdrReadBuf(buf, len, offset) {
	            if (offset === void 0) {
	                offset = 0;
	            }
	            this._begin = buf;
	            this._pos = 0;
	            this._length = 0;
	            this._view = null;
	            this._isNetEndian = true;
	            if (null != this._begin) {
	                this._length = len;
	                this._view = new DataView(this._begin, offset);
	            }
	        }
	        TdrReadBuf.prototype.read = function (ret, byte_length, get_func, offset) {
	            ret.ret = ErrorType.TDR_NO_ERROR;
	            if (null == this._begin) {
	                ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	                return null;
	            }
	            if (byte_length > this.getLeftSize()) {
	                ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	                return null;
	            }
	            var append = offset === undefined;
	            if (append) {
	                offset = this._pos;
	                this._pos += byte_length;
	            }
	            return get_func(offset, !(this._isNetEndian && TdrUtil.isLittleEndian));
	        };
	        TdrReadBuf.prototype.setPosition = function (position) {
	            this._pos = position;
	        };
	        TdrReadBuf.prototype.getUsedSize = function () {
	            return this._pos;
	        };
	        TdrReadBuf.prototype.getTotalSize = function () {
	            return this._length;
	        };
	        TdrReadBuf.prototype.getLeftSize = function () {
	            return this._length - this._pos;
	        };
	        TdrReadBuf.prototype.getBeginPtr = function () {
	            return this._begin;
	        };
	        TdrReadBuf.prototype.disableEndian = function () {
	            this._isNetEndian = false;
	        };
	        TdrReadBuf.prototype.readInt8 = function (ret, offset) {
	            var _this = this;
	            return this.read(ret, Int8Array.BYTES_PER_ELEMENT, function (a, b) {
	                return _this._view.getInt8(a);
	            }, offset);
	        };
	        TdrReadBuf.prototype.readUInt8 = function (ret, offset) {
	            var _this = this;
	            return this.read(ret, Uint8Array.BYTES_PER_ELEMENT, function (a, b) {
	                return _this._view.getUint8(a);
	            }, offset);
	        };
	        TdrReadBuf.prototype.readInt16 = function (ret, offset) {
	            var _this = this;
	            return this.read(ret, Int16Array.BYTES_PER_ELEMENT, function (a, b) {
	                return _this._view.getInt16(a, b);
	            }, offset);
	        };
	        TdrReadBuf.prototype.readUInt16 = function (ret, offset) {
	            var _this = this;
	            return this.read(ret, Uint16Array.BYTES_PER_ELEMENT, function (a, b) {
	                return _this._view.getUint16(a, b);
	            }, offset);
	        };
	        TdrReadBuf.prototype.readInt32 = function (ret, offset) {
	            var _this = this;
	            return this.read(ret, Int32Array.BYTES_PER_ELEMENT, function (a, b) {
	                return _this._view.getInt32(a, b);
	            }, offset);
	        };
	        TdrReadBuf.prototype.readUInt32 = function (ret, offset) {
	            var _this = this;
	            return this.read(ret, Uint32Array.BYTES_PER_ELEMENT, function (a, b) {
	                return _this._view.getUint32(a, b);
	            }, offset);
	        };
	        TdrReadBuf.prototype.readInt64 = function (ret, offset) {
	            return this.readUInt64(ret, offset);
	        };
	        TdrReadBuf.prototype.readUInt64 = function (ret, offset) {
	            var _begin = this._begin;
	            return this.read(ret, 8, function (a, b) {
	                var dest = new UInt64();
	                dest.readFromArrayBuffer(_begin, a, b);
	                return dest;
	            }, offset) >>> 0;
	        };
	        TdrReadBuf.prototype.readFloat = function (ret, offset) {
	            var _this = this;
	            return this.read(ret, Float32Array.BYTES_PER_ELEMENT, function (a, b) {
	                return _this._view.getFloat32(a, b);
	            }, offset);
	        };
	        TdrReadBuf.prototype.readDouble = function (ret, offset) {
	            var _this = this;
	            return this.read(ret, Float64Array.BYTES_PER_ELEMENT, function (a, b) {
	                return _this._view.getFloat64(a, b);
	            }, offset);
	        };
	        TdrReadBuf.prototype.readVarUInt16 = function (ret) {
	            ret.ret = ErrorType.TDR_NO_ERROR;
	            if (null == this._begin) {
	                ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	                return null;
	            }
	            var dest = 0;
	            var lshift = 0;
	            var flag = 0;
	            var base128 = 0;
	            do {
	                if (this.getLeftSize() <= 0) {
	                    ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	                    return null;
	                }
	                base128 = this._view.getUint8(this._pos++);
	                dest |= (base128 & 0x7F) << 7 * lshift;
	                ++lshift;
	                flag = base128 & 0x80;
	            } while (flag != 0);
	            if (!TdrUtil.isLittleEndian)
	                dest = TdrUtil.networkToHostOrder(dest, DATA_TYPE.uint16);
	            return dest >>> 0;
	        };
	        TdrReadBuf.prototype.readVarInt16 = function (ret) {
	            ret.ret = ErrorType.TDR_NO_ERROR;
	            if (null == this._begin) {
	                ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	                return null;
	            }
	            var dest = 0;
	            var lshift = 0;
	            var flag = 0;
	            var base128 = 0;
	            do {
	                if (this.getLeftSize() <= 0) {
	                    ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	                    return null;
	                }
	                base128 = this._view.getUint8(this._pos++);
	                dest |= (base128 & 0x7F) << 7 * lshift;
	                ++lshift;
	                flag = base128 & 0x80;
	            } while (flag != 0);
	            if ((dest & 0x1) != 0)
	                dest = (((dest ^ 0xFFFF) >> 1) & ~0x8000) | ((dest & 0x1) << 15);
	            else
	                dest = ((dest >> 1) & ~0x8000) | ((dest & 0x1) << 15);
	            if (!TdrUtil.isLittleEndian)
	                dest = TdrUtil.networkToHostOrder(dest, DATA_TYPE.int16);
	            var buffer = new ArrayBuffer(Uint16Array.BYTES_PER_ELEMENT);
	            var write = new Uint16Array(buffer);
	            write[0] = dest;
	            var read = new Int16Array(buffer);
	            dest = read[0];
	            return dest;
	        };
	        TdrReadBuf.prototype.readVarUInt32 = function (ret) {
	            ret.ret = ErrorType.TDR_NO_ERROR;
	            if (null == this._begin) {
	                ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	                return null;
	            }
	            var dest = 0;
	            var lshift = 0;
	            var flag = 0;
	            var base128 = 0;
	            do {
	                if (this.getLeftSize() <= 0) {
	                    ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	                    return null;
	                }
	                base128 = this._view.getUint8(this._pos++);
	                dest |= (base128 & 0x7F) << 7 * lshift;
	                ++lshift;
	                flag = base128 & 0x80;
	            } while (flag != 0);
	            if (!TdrUtil.isLittleEndian)
	                dest = TdrUtil.networkToHostOrder(dest, DATA_TYPE.uint32);
	            return dest >>> 0;
	        };
	        TdrReadBuf.prototype.readVarInt32 = function (ret) {
	            ret.ret = ErrorType.TDR_NO_ERROR;
	            if (null == this._begin) {
	                ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	                return null;
	            }
	            var dest = 0;
	            var lshift = 0;
	            var flag = 0;
	            var base128 = 0;
	            do {
	                if (this.getLeftSize() <= 0) {
	                    ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	                    return null;
	                }
	                base128 = this._view.getUint8(this._pos++);
	                dest |= (base128 & 0x7F) << 7 * lshift;
	                ++lshift;
	                flag = base128 & 0x80;
	            } while (flag != 0);
	            var tmp;
	            if ((dest & 0x1) != 0) {
	                tmp = (dest ^ 0xFFFFFFFF) >> 1;
	                tmp &= ~0x80000000;
	                dest = tmp | ((dest & 0x1) << 31);
	            }
	            else {
	                tmp = (dest >> 1) & ~0x80000000;
	                dest = tmp | ((dest & 0x1) << 31);
	            }
	            if (!TdrUtil.isLittleEndian)
	                dest = TdrUtil.networkToHostOrder(dest, DATA_TYPE.int32);
	            var buffer = new ArrayBuffer(Uint32Array.BYTES_PER_ELEMENT);
	            var write = new Uint32Array(buffer);
	            write[0] = dest;
	            var read = new Int32Array(buffer);
	            dest = read[0];
	            return dest;
	        };
	        TdrReadBuf.prototype.skipForward = function (step) {
	            if (this.getLeftSize() < step)
	                return ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	            this._pos += step;
	            return ErrorType.TDR_NO_ERROR;
	        };
	        TdrReadBuf.prototype.readCString = function (ret, count, offset) {
	            ret.ret = ErrorType.TDR_NO_ERROR;
	            if (null == this._begin) {
	                ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	                return null;
	            }
	            var append = offset === undefined;
	            var _offset = append ? this._pos : offset;
	            if (count > this._length - _offset) {
	                ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	                return null;
	            }
	            if (append)
	                this._pos += count;
	            return this._begin.slice(_offset, _offset + count);
	        };
	        TdrReadBuf.prototype.var64bitsDecode = function (ret) {
	            var part0 = 0, part1 = 0, part2 = 0, b = 0;
	            b = this._view.getUint8(this._pos++);
	            part0 = (b & 0x7F);
	            if (b & 0x80) {
	                b = this._view.getUint8(this._pos++);
	                part0 |= (b & 0x7F) << 7;
	                if (b & 0x80) {
	                    b = this._view.getUint8(this._pos++);
	                    part0 |= (b & 0x7F) << 14;
	                    if (b & 0x80) {
	                        b = this._view.getUint8(this._pos++);
	                        part0 |= (b & 0x7F) << 21;
	                        if (b & 0x80) {
	                            b = this._view.getUint8(this._pos++);
	                            part1 = (b & 0x7F);
	                            if (b & 0x80) {
	                                b = this._view.getUint8(this._pos++);
	                                part1 |= (b & 0x7F) << 7;
	                                if (b & 0x80) {
	                                    b = this._view.getUint8(this._pos++);
	                                    part1 |= (b & 0x7F) << 14;
	                                    if (b & 0x80) {
	                                        b = this._view.getUint8(this._pos++);
	                                        part1 |= (b & 0x7F) << 21;
	                                        if (b & 0x80) {
	                                            b = this._view.getUint8(this._pos++);
	                                            part2 = (b & 0x7F);
	                                            if (b & 0x80) {
	                                                b = this._view.getUint8(this._pos++);
	                                                part2 |= (b & 0x7F) << 7;
	                                                if (b & 0x80) {
	                                                    ret.ret = ErrorType.TDR_ERR_SHORT_BUF_FOR_READ;
	                                                    return null;
	                                                }
	                                            }
	                                        }
	                                    }
	                                }
	                            }
	                        }
	                    }
	                }
	            }
	            var value = Long.fromBits(part0 | (part1 << 28), (part1 >>> 4) | (part2) << 24, true); // source code is false here, unknow why
	            return value;
	        };
	        TdrReadBuf.prototype.zigZagDecode64 = function (value) {
	            // ref: src/google/protobuf/wire_format_lite.h
	            return value.shiftRightUnsigned(1).xor(value.and(Long.ONE).toSigned().negate()).toSigned();
	        };
	        TdrReadBuf.prototype.readVarUInt64 = function (ret) {
	            ret.ret = ErrorType.TDR_NO_ERROR;
	            if (null == this._begin) {
	                ret.ret = ErrorType.TDR_ERR_ARG_IS_NULL;
	                return null;
	            }
	            return this.var64bitsDecode(ret);
	        };
	        TdrReadBuf.prototype.readVarInt64 = function (ret) {
	            var val = this.var64bitsDecode(ret);
	            if (ret.ret)
	                return null;
	            return this.zigZagDecode64(val);
	        };
	        return TdrReadBuf;
	    }());
	    var TLV_MAGIC;
	    (function (TLV_MAGIC) {
	        TLV_MAGIC[TLV_MAGIC["TLV_MAGIC_VARINT"] = 170] = "TLV_MAGIC_VARINT";
	        TLV_MAGIC[TLV_MAGIC["TLV_MAGIC_NOVARINT"] = 153] = "TLV_MAGIC_NOVARINT";
	    })(TLV_MAGIC || (TLV_MAGIC = {}));
	    var TdrTLVTypeId;
	    (function (TdrTLVTypeId) {
	        TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_VARINT"] = 0] = "TDR_TYPE_ID_VARINT";
	        TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_1_BYTE"] = 1] = "TDR_TYPE_ID_1_BYTE";
	        TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_2_BYTE"] = 2] = "TDR_TYPE_ID_2_BYTE";
	        TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_4_BYTE"] = 3] = "TDR_TYPE_ID_4_BYTE";
	        TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_8_BYTE"] = 4] = "TDR_TYPE_ID_8_BYTE";
	        TdrTLVTypeId[TdrTLVTypeId["TDR_TYPE_ID_LENGTH_DELIMITED"] = 5] = "TDR_TYPE_ID_LENGTH_DELIMITED";
	    })(TdrTLVTypeId || (TdrTLVTypeId = {}));
	    var TdrTLV = (function () {
	        function TdrTLV() {
	        }
	        TdrTLV.makeTag = function (id, type) {
	            return id << 4 | type;
	        };
	        TdrTLV.getFieldId = function (tagid) {
	            return tagid >> 4;
	        };
	        TdrTLV.getTypeId = function (tagid) {
	            return tagid & 0xF;
	        };
	        TdrTLV.TLV_MSG_MAGIC_SIZE = 1;
	        TdrTLV.TLV_MSG_MIN_SIZE = 5;
	        return TdrTLV;
	    }());
	    var TdrUtil = (function () {
	        function TdrUtil() {
	        }
	        TdrUtil.cstrlen = function (byte_str) {
	            var count = 0;
	            var view = new Uint8Array(byte_str);
	            for (var i = 0; i < view.length; i++) {
	                if (0 == view[i])
	                    break;
	                count++;
	            }
	            return count;
	        };
	        TdrUtil.utf8Encode = function (str) {
	            var utf8 = encodeURIComponent(str).match(/(%\w{2}|.)/g);
	            if (utf8 == null)
	                return new ArrayBuffer(0);
	            var arr = new ArrayBuffer(utf8.length);
	            var type = new Uint8Array(arr);
	            for (var i = 0; i < utf8.length; i++) {
	                if (utf8[i].indexOf("%") === 0)
	                    type[i] = parseInt("0x" + utf8[i].substr(1));
	                else
	                    type[i] = utf8[i].charCodeAt(0);
	            }
	            return arr;
	        };
	        TdrUtil.utf8Decode = function (arraybuffer) {
	            if (!arraybuffer)
	                return "";
	            var u8 = new Uint8Array(arraybuffer);
	            var url = [];
	            var i = 0;
	            while (i < u8.byteLength) {
	                var b = u8[i];
	                if (b == 0)
	                    break;
	                else if (b > 0 && b <= 0x7F) {
	                    url.push(String.fromCharCode(b));
	                }
	                else {
	                    url.push("%" + b.toString(16));
	                }
	                i++;
	            }
	            return decodeURIComponent(url.join(""));
	        };
	        TdrUtil.hostToNetworkOrder = function (src, type_index) {
	            var arr = null;
	            switch (type_index) {
	                case DATA_TYPE.int16:
	                    arr = new ArrayBuffer(Int16Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setInt16(0, src, true);
	                    return new DataView(arr).getInt16(0, false);
	                case DATA_TYPE.uint16:
	                    arr = new ArrayBuffer(Uint16Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setUint16(0, src, true);
	                    return new DataView(arr).getUint16(0, false);
	                case DATA_TYPE.int32:
	                    arr = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setInt32(0, src, true);
	                    return new DataView(arr).getInt32(0, false);
	                case DATA_TYPE.uint32:
	                    arr = new ArrayBuffer(Uint32Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setUint32(0, src, true);
	                    return new DataView(arr).getInt32(0, false);
	                case DATA_TYPE.float32:
	                    arr = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setFloat32(0, src, true);
	                    return new DataView(arr).getFloat32(0, false);
	                case DATA_TYPE.float64:
	                    arr = new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setFloat64(0, src, true);
	                    return new DataView(arr).getFloat64(0, false);
	            }
	            return src;
	        };
	        TdrUtil.networkToHostOrder = function (src, type_index) {
	            var arr = null;
	            switch (type_index) {
	                case DATA_TYPE.int16:
	                    arr = new ArrayBuffer(Int16Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setInt16(0, src, false);
	                    return new DataView(arr).getInt16(0, true);
	                case DATA_TYPE.uint16:
	                    arr = new ArrayBuffer(Uint16Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setUint16(0, src, false);
	                    return new DataView(arr).getUint16(0, true);
	                case DATA_TYPE.int32:
	                    arr = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setInt32(0, src, false);
	                    return new DataView(arr).getInt32(0, true);
	                case DATA_TYPE.uint32:
	                    arr = new ArrayBuffer(Uint32Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setUint32(0, src, false);
	                    return new DataView(arr).getInt32(0, true);
	                case DATA_TYPE.float32:
	                    arr = new ArrayBuffer(Float32Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setFloat32(0, src, false);
	                    return new DataView(arr).getFloat32(0, true);
	                case DATA_TYPE.float64:
	                    arr = new ArrayBuffer(Float64Array.BYTES_PER_ELEMENT);
	                    new DataView(arr).setFloat64(0, src, false);
	                    return new DataView(arr).getFloat64(0, true);
	            }
	            return src;
	        };
	        TdrUtil.isLittleEndian = (function () {
	            var buffer = new ArrayBuffer(2);
	            new DataView(buffer).setInt16(0, 256, true);
	            return new Int16Array(buffer)[0] === 256;
	        })();
	        return TdrUtil;
	    }());
	    
	    var __extends = (this && this.__extends) || function (d, b) {
	        for (var p in b)
	            if (b.hasOwnProperty(p))
	                d[p] = b[p];
	        function __() {
	            this.constructor = d;
	        }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };
	    /** 简单初始化传入的协议js文件
	     * 加载机制,文件缓存机制等依赖外部
	     * @method */
	    var create = function (protoObj) {
	        // support broswer global?
	        // muilt proto ?
	        // init it
	        return protoObj.init(exportObj);
	    };
	    var exportObj = {
	        TdrData: TdrData,
	        Long: Long,
	        ErrorType: ErrorType,
	        // 暂时直接暴露给 xx_proto.js
	        StructTdr: StructTdr,
	        UnionTdr: UnionTdr,
	        DATA_TYPE: DATA_TYPE,
	        TdrWriteBuf: TdrWriteBuf,
	        TdrReadRet: TdrReadRet,
	        TdrReadBuf: TdrReadBuf,
	        TLV_MAGIC: TLV_MAGIC,
	        TdrTLVTypeId: TdrTLVTypeId,
	        TdrTLV: TdrTLV,
	        TdrUtil: TdrUtil,
	        Tools: Tools,
	        create: create
	    };
	    return exportObj;	}));	var UInt64 = /** @class */ (function () {
	    function UInt64(high, low) {
	        if (high === void 0) {
	            high = 0;
	        }
	        if (low === void 0) {
	            low = 0;
	        }
	        this.init(high, low);
	    }
	    Object.defineProperty(UInt64.prototype, "high", {
	        get: function () { return this._high; },
	        enumerable: true,
	        configurable: true
	    });
	    Object.defineProperty(UInt64.prototype, "low", {
	        get: function () { return this._low; },
	        enumerable: true,
	        configurable: true
	    });
	    UInt64.prototype.init = function (high, low) {
	        var tmp = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
	        var u32 = new Uint32Array(tmp);
	        u32[0] = high;
	        this._high = u32[0];
	        u32[0] = low;
	        this._low = u32[0];
	    };
	    UInt64.set_per = function (view, pos, src, isLittleEndian) {
	        var array = new ArrayBuffer(Int32Array.BYTES_PER_ELEMENT);
	        var u32 = new DataView(array);
	        u32.setUint32(0, src, true);
	        var offset = 0;
	        while (offset < Int32Array.BYTES_PER_ELEMENT) {
	            if (u32.getUint8(offset) == 0)
	                break;
	            offset++;
	        }
	        switch (offset) {
	            case 1:
	                view.setUint8(pos, src);
	                break;
	            case 2:
	                view.setUint16(pos, src, isLittleEndian);
	                break;
	            default:
	                view.setUint32(pos, src, isLittleEndian);
	                break;
	        }
	        return offset;
	    };
	    UInt64.prototype.writeToArrayBuffer = function (isLittleEndian) {
	        var arr = new ArrayBuffer(2 * Int32Array.BYTES_PER_ELEMENT);
	        if (arr.byteLength == 2 * Int32Array.BYTES_PER_ELEMENT) {
	            var view = new DataView(arr);
	            var offset_low = void 0, offset_high = void 0;
	            if (!isLittleEndian) {
	                offset_low = UInt64.set_per(view, 0, this.low, true);
	                offset_high = UInt64.set_per(view, offset_low, this.high, true);
	            }
	            else {
	                offset_low = UInt64.set_per(view, 0, this.high, false);
	                offset_high = UInt64.set_per(view, offset_low, this.low, false);
	            }
	            return arr.slice(0, offset_low + offset_high);
	        }
	        return null;
	    };
	    UInt64.prototype.readFromArrayBuffer = function (arrayBuffer, offset, isLittleEndian) {
	        // console.log('--->UInt64.readFromArrayBuffer', arrayBuffer)
	        var view = new DataView(arrayBuffer);
	        var _offset = offset || 0;
	        var _isLittleEndian = isLittleEndian === undefined ? true : isLittleEndian;
	        // console.log('--->UInt64._isLittleEndian', _isLittleEndian)
	        if (!_isLittleEndian) {
	            this._low = view.getUint32(_offset, true);
	            this._high = view.getUint32(_offset + Int32Array.BYTES_PER_ELEMENT, true);
	        }
	        else {
	            this._high = view.getUint32(_offset, false);
	            this._low = view.getUint32(_offset + Int32Array.BYTES_PER_ELEMENT, false);
	        }
	    };
	    UInt64.prototype.equal = function (other) {
	        return this.high == other.high && this.low == other.low;
	    };
	    UInt64.isEqual = function (a, b) {
	        return a.equal(b);
	    };
	    UInt64.prototype.moveRight = function (offset) {
	        /* 避免第一位是1时右移出负数*/
	        var flag = (this._low & 0x80000000) != 0;
	        var tmp_low = this._low;
	        if (flag) {
	            tmp_low &= ~0x80000000;
	        }
	        var low = tmp_low >> offset;
	        if (flag) {
	            low |= 0x1000000;
	        }
	        low |= this._high << (32 - offset);
	        var high = this._high >> offset;
	        return new UInt64(high, low);
	    };
	    UInt64.prototype.moveLeft = function (offset) {
	        var low = this._low << offset;
	        var high = this._high << offset | (this._low >> (32 - offset));
	        return new UInt64(high, low);
	    };
	    UInt64.prototype.byteXOR = function (other) {
	        return new UInt64(this._high ^ other.high, this._low ^ other.low);
	    };
	    UInt64.prototype.byteAND = function (other) {
	        return new UInt64(this._high & other.high, this._low & other.low);
	    };
	    UInt64.prototype.byteOR = function (other) {
	        return new UInt64(this._high | other.high, this._low | other.low);
	    };
	    return UInt64;	}());	});	var relay_cs_tlv = createCommonjsModule(function (module, exports) {	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b)
	                if (b.hasOwnProperty(p))
	                    d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };	})();	(function (factory) {
	    {
	        var v = factory(commonjsRequire, exports);
	        if (v !== undefined)
	            module.exports = v;
	    }	})(function (require, exports) {
	    exports.__esModule = true;
	    var cs_relay_msg;
	    (function (cs_relay_msg) {
	        function init(tdrTools) {
	            var Long = tdrTools.Long;
	            var StructTdr = tdrTools.StructTdr;
	            var UnionTdr = tdrTools.UnionTdr;
	            var DATA_TYPE = tdrTools.DATA_TYPE;
	            var TdrWriteBuf = tdrTools.TdrWriteBuf;
	            var TdrReadRet = tdrTools.TdrReadRet;
	            var TdrReadBuf = tdrTools.TdrReadBuf;
	            var TLV_MAGIC = tdrTools.TLV_MAGIC;
	            var TdrTLVTypeId = tdrTools.TdrTLVTypeId;
	            var TdrTLV = tdrTools.TdrTLV;
	            var TdrUtil = tdrTools.TdrUtil;
	            var ErrorType = tdrTools.ErrorType;
	            var TdrData = tdrTools.TdrData;
	            var Tools = tdrTools.Tools;
	            /** @const */
	            cs_relay_msg.CS_RELAY_MSG_MAGIC = 0xA1F2;
	            /** @const */
	            cs_relay_msg.CS_INPUT_DATA_LENGTH = 1024;
	            /** @const */
	            cs_relay_msg.CS_RELAY_FRAME_REDUNDANCY = 3;
	            /** @const */
	            cs_relay_msg.CS_SIG_BUFF_LENGTH = 1024;
	            /** @const */
	            cs_relay_msg.CS_RELAY_MAX_BUSINESS_ID_LEN = 64;
	            /** @const */
	            cs_relay_msg.CS_RELAY_MAX_BUSINESS_KEY_LEN = 64;
	            /** @const */
	            cs_relay_msg.CS_RELAY_MAX_USER_COUNT = 20;
	            /** @const */
	            cs_relay_msg.CS_RELAY_MAX_USER_ID_LEN = 256;
	            /** @const */
	            cs_relay_msg.CS_RELAY_MAX_USER_IP_LEN = 64;
	            /** @const */
	            cs_relay_msg.CS_RELAY_USER_ACCESS_TOKEN_LEN = 1024;
	            /** @enum */
	            var cs_cmd;
	            (function (cs_cmd) {
	                cs_cmd[cs_cmd["CS_RELAY_MSG_LOGIN_REQ"] = 161] = "CS_RELAY_MSG_LOGIN_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_LOGIN_RES"] = 162] = "CS_RELAY_MSG_LOGIN_RES";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_START_REQ"] = 163] = "CS_RELAY_MSG_START_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_START_RES"] = 164] = "CS_RELAY_MSG_START_RES";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_INPUTING"] = 165] = "CS_RELAY_MSG_INPUTING";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_RELAYING"] = 166] = "CS_RELAY_MSG_RELAYING";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_LOCKSTEP"] = 167] = "CS_RELAY_MSG_LOCKSTEP";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_SYNC_REQ"] = 168] = "CS_RELAY_MSG_SYNC_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_SYNC_RES"] = 169] = "CS_RELAY_MSG_SYNC_RES";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_STOP_REQ"] = 174] = "CS_RELAY_MSG_STOP_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_STOP_RES"] = 175] = "CS_RELAY_MSG_STOP_RES";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_SEEK_PLAY_REQ"] = 182] = "CS_RELAY_MSG_SEEK_PLAY_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_SEEK_PLAY_RES"] = 183] = "CS_RELAY_MSG_SEEK_PLAY_RES";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_HEART_BEAT_REQ"] = 184] = "CS_RELAY_MSG_HEART_BEAT_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_HEART_BEAT_RES"] = 185] = "CS_RELAY_MSG_HEART_BEAT_RES";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_BROADCAST_REQ"] = 186] = "CS_RELAY_MSG_BROADCAST_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_BROADCAST_CHECK_REQ"] = 189] = "CS_RELAY_MSG_BROADCAST_CHECK_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_CHECK_REQ"] = 190] = "CS_RELAY_MSG_CHECK_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_BROADCAST_RES"] = 187] = "CS_RELAY_MSG_BROADCAST_RES";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_INPUT_CHECK_REQ"] = 188] = "CS_RELAY_MSG_INPUT_CHECK_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_INPUT_MULTY_REQ"] = 195] = "CS_RELAY_MSG_INPUT_MULTY_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_STAT_USER_REQ"] = 191] = "CS_RELAY_MSG_STAT_USER_REQ";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_STAT_USER_RES"] = 192] = "CS_RELAY_MSG_STAT_USER_RES";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_RELOGIN_NOTIFY"] = 193] = "CS_RELAY_MSG_RELOGIN_NOTIFY";
	                cs_cmd[cs_cmd["CS_RELAY_MSG_ERROR"] = 194] = "CS_RELAY_MSG_ERROR";
	            })(cs_cmd = cs_relay_msg.cs_cmd || (cs_relay_msg.cs_cmd = {}));
	            /** @enum */
	            var broadcast_duplicate_methods;
	            (function (broadcast_duplicate_methods) {
	                broadcast_duplicate_methods[broadcast_duplicate_methods["breadcast_duplicate_1"] = 1] = "breadcast_duplicate_1";
	                broadcast_duplicate_methods[broadcast_duplicate_methods["breadcast_duplicate_2"] = 2] = "breadcast_duplicate_2";
	                broadcast_duplicate_methods[broadcast_duplicate_methods["breadcast_duplicate_3"] = 3] = "breadcast_duplicate_3";
	                broadcast_duplicate_methods[broadcast_duplicate_methods["breadcast_duplicate_4"] = 4] = "breadcast_duplicate_4";
	                broadcast_duplicate_methods[broadcast_duplicate_methods["breadcast_duplicate_5"] = 5] = "breadcast_duplicate_5";
	                broadcast_duplicate_methods[broadcast_duplicate_methods["breadcast_reliable"] = 6] = "breadcast_reliable";
	                broadcast_duplicate_methods[broadcast_duplicate_methods["broadcast_duplicate_by_svr"] = 7] = "broadcast_duplicate_by_svr";
	            })(broadcast_duplicate_methods = cs_relay_msg.broadcast_duplicate_methods || (cs_relay_msg.broadcast_duplicate_methods = {}));
	            /** @enum */
	            var CSRelayErrorCodes;
	            (function (CSRelayErrorCodes) {
	                CSRelayErrorCodes[CSRelayErrorCodes["CS_RELAY_MSG_NOERR"] = 0] = "CS_RELAY_MSG_NOERR";
	                CSRelayErrorCodes[CSRelayErrorCodes["CS_RELAY_MSG_NETWORK"] = -1] = "CS_RELAY_MSG_NETWORK";
	                CSRelayErrorCodes[CSRelayErrorCodes["CS_RELAY_MSG_UNKNOW"] = -2] = "CS_RELAY_MSG_UNKNOW";
	                CSRelayErrorCodes[CSRelayErrorCodes["CS_RELAY_ERROR_FAILED_TO_FIND_ROOM"] = -3] = "CS_RELAY_ERROR_FAILED_TO_FIND_ROOM";
	                CSRelayErrorCodes[CSRelayErrorCodes["CS_RELAY_ERROR_FAILED_TO_FIND_USR"] = -4] = "CS_RELAY_ERROR_FAILED_TO_FIND_USR";
	                CSRelayErrorCodes[CSRelayErrorCodes["CS_RELAY_ERROR_FAILED_TO_PASS_AUTH"] = -5] = "CS_RELAY_ERROR_FAILED_TO_PASS_AUTH";
	                CSRelayErrorCodes[CSRelayErrorCodes["CS_RELAY_ERROR_START_LARGER_THAN_END"] = -6] = "CS_RELAY_ERROR_START_LARGER_THAN_END";
	                CSRelayErrorCodes[CSRelayErrorCodes["em_relay_svr_seror_failed_to_dispatch_cmd"] = 1] = "em_relay_svr_seror_failed_to_dispatch_cmd";
	                CSRelayErrorCodes[CSRelayErrorCodes["em_relay_svr_error_should_not_input_for_the_room_is_not_ready"] = 77] = "em_relay_svr_error_should_not_input_for_the_room_is_not_ready";
	                CSRelayErrorCodes[CSRelayErrorCodes["em_relay_svr_error_failed_to_find_room"] = 78] = "em_relay_svr_error_failed_to_find_room";
	                CSRelayErrorCodes[CSRelayErrorCodes["em_relay_svr_error_failed_to_find_user"] = 79] = "em_relay_svr_error_failed_to_find_user";
	                CSRelayErrorCodes[CSRelayErrorCodes["em_relay_svr_error_start_larger_than_end"] = 80] = "em_relay_svr_error_start_larger_than_end";
	                CSRelayErrorCodes[CSRelayErrorCodes["em_relay_svr_error_failed_to_pass_roomid_check"] = 90] = "em_relay_svr_error_failed_to_pass_roomid_check";
	                CSRelayErrorCodes[CSRelayErrorCodes["em_relay_svr_error_repeat_login"] = 91] = "em_relay_svr_error_repeat_login";
	                CSRelayErrorCodes[CSRelayErrorCodes["em_relay_svr_error_failed_to_pass_auth_check"] = 999] = "em_relay_svr_error_failed_to_pass_auth_check";
	            })(CSRelayErrorCodes = cs_relay_msg.CSRelayErrorCodes || (cs_relay_msg.CSRelayErrorCodes = {}));
	            var CSRelayData = /** @class */ (function (_super) {
	                __extends(CSRelayData, _super);
	                function CSRelayData() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.ObjectId = 0;
	                    _this.RelayLen = 0;
	                    _this.RelayBuf = "";
	                    _this.UserStatusFlag = 0;
	                    _this.Sequance = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayData.prototype.init = function () {
	                    this.ObjectId = 0;
	                    this.RelayLen = 0;
	                    this.RelayBuf = "";
	                    this.UserStatusFlag = 0;
	                    this.Sequance = 0;
	                    this._propsInfo = [{ "id": 1, "name": "ObjectId", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "RelayLen", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 4 }, { "id": 3, "name": "RelayBuf", "lawType": "string", "stringSize": "cs_relay_msg.CS_INPUT_DATA_LENGTH", "countValue": null, "stringSizeValue": 1024, "dataType": 12 }, { "id": 4, "name": "UserStatusFlag", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 5, "name": "Sequance", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 4 }];
	                };
	                CSRelayData.getNewOne = function () { return new CSRelayData(); };
	                CSRelayData.prototype.getName = function () { return "cs_relay_msg.CSRelayData"; };
	                CSRelayData.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: ObjectId */
	                    Tools.printValue(msg_str, "ObjectId", this.ObjectId, curr_indent);
	                    /* visualize member: RelayLen */
	                    Tools.printValue(msg_str, "RelayLen", this.RelayLen, curr_indent);
	                    /* visualize member: RelayBuf */
	                    Tools.printValue(msg_str, "RelayBuf", this.RelayBuf.substr(0, Math.min(this.RelayBuf.length, cs_relay_msg.CS_INPUT_DATA_LENGTH)), curr_indent);
	                    /* visualize member: UserStatusFlag */
	                    Tools.printValue(msg_str, "UserStatusFlag", this.UserStatusFlag, curr_indent);
	                    /* visualize member: Sequance */
	                    Tools.printValue(msg_str, "Sequance", this.Sequance, curr_indent);
	                    return ret;
	                };
	                CSRelayData.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayData.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayData.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.ObjectId */
	                    {
	                        {
	                            /* read value */
	                            this.ObjectId = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RelayLen */
	                    {
	                        {
	                            /* read value */
	                            this.RelayLen = read.readUInt16(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RelayBuf */
	                    {
	                        var iStringLength = cs_relay_msg.CS_INPUT_DATA_LENGTH;
	                        /* read value */
	                        this.RelayBuf = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.UserStatusFlag */
	                    {
	                        {
	                            /* read value */
	                            this.UserStatusFlag = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.Sequance */
	                    {
	                        {
	                            /* read value */
	                            this.Sequance = read.readUInt16(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayData;
	            }(StructTdr));
	            cs_relay_msg.CSRelayData = CSRelayData;
	            var CSRelayInput = /** @class */ (function (_super) {
	                __extends(CSRelayInput, _super);
	                function CSRelayInput() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.RelayData = new cs_relay_msg.CSRelayData();
	                    _this.RepeatCount = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayInput.prototype.init = function () {
	                    this.RelayData = new cs_relay_msg.CSRelayData();
	                    this.RepeatCount = 0;
	                    this._propsInfo = [{ "id": 1, "name": "RelayData", "lawType": "cs_relay_msg.CSRelayData", "countValue": null, "stringSizeValue": null, "dataType": 11 }, { "id": 2, "name": "RepeatCount", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }];
	                };
	                CSRelayInput.getNewOne = function () { return new CSRelayInput(); };
	                CSRelayInput.prototype.getName = function () { return "cs_relay_msg.CSRelayInput"; };
	                CSRelayInput.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) {
	                        fixed_indent = 2;
	                    }
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: RelayData */
	                    Tools.printValue(msg_str, "RelayData", "", curr_indent);
	                    this.RelayData.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                    /* visualize member: RepeatCount */
	                    Tools.printValue(msg_str, "RepeatCount", this.RepeatCount, curr_indent);
	                    return ret;
	                };
	                CSRelayInput.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayInput.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayInput.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.RelayData */
	                    {
	                        ret.ret = this.RelayData.loadDetail(read);
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.RepeatCount */
	                    {
	                        {
	                            /* read value */
	                            this.RepeatCount = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayInput;
	            }(StructTdr));
	            cs_relay_msg.CSRelayInput = CSRelayInput;
	            var CSRelayInputMulty = /** @class */ (function (_super) {
	                __extends(CSRelayInputMulty, _super);
	                function CSRelayInputMulty() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.FrameCount = 0;
	                    _this.RelayData = new Array();
	                    _this.init();
	                    return _this;
	                }
	                CSRelayInputMulty.prototype.init = function () {
	                    this.FrameCount = 0;
	                    this.RelayData = new Array();
	                    this._propsInfo = [{ "id": 1, "name": "FrameCount", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 2, "name": "RelayData", "lawType": "Array<cs_relay_msg.CSRelayData>", "refer": "FrameCount", "count": "10", "countValue": "10", "stringSizeValue": null, "dataType": 11 }];
	                    for (var RelayData_i = 0; RelayData_i < 10; RelayData_i++) {
	                        this.RelayData.push(new cs_relay_msg.CSRelayData());
	                    }
	                };
	                CSRelayInputMulty.getNewOne = function () { return new CSRelayInputMulty(); };
	                CSRelayInputMulty.prototype.getName = function () { return "cs_relay_msg.CSRelayInputMulty"; };
	                CSRelayInputMulty.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) {
	                        fixed_indent = 2;
	                    }
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: FrameCount */
	                    Tools.printValue(msg_str, "FrameCount", this.FrameCount, curr_indent);
	                    /* visualize member: RelayData */
	                    var num_eles = Math.min(this.FrameCount, 10);
	                    Tools.printValue(msg_str, "RelayData", "", curr_indent);
	                    for (var i = 0; i < num_eles; ++i) {
	                        Tools.printValue(msg_str, i.toString(), "", curr_indent + fixed_indent);
	                        this.RelayData[i].visualizeDetail(msg_str, curr_indent + fixed_indent + fixed_indent, fixed_indent);
	                    }
	                    return ret;
	                };
	                CSRelayInputMulty.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayInputMulty.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayInputMulty.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.FrameCount */
	                    {
	                        {
	                            /* read value */
	                            this.FrameCount = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RelayData */
	                    {
	                        for (var RelayData_i = 0; RelayData_i < 10; ++RelayData_i) {
	                            ret.ret = this.RelayData[RelayData_i].loadDetail(read);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayInputMulty;
	            }(StructTdr));
	            cs_relay_msg.CSRelayInputMulty = CSRelayInputMulty;
	            var CSRelayFrame = /** @class */ (function (_super) {
	                __extends(CSRelayFrame, _super);
	                function CSRelayFrame() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.FrameId = 0;
	                    _this.Count = 0;
	                    _this.RelayData = new Array();
	                    _this.LastHasDataFrameId = 0;
	                    _this.TimeStamp = new Long(0, 0, true);
	                    _this.init();
	                    return _this;
	                }
	                CSRelayFrame.prototype.init = function () {
	                    this.FrameId = 0;
	                    this.Count = 0;
	                    this.RelayData = new Array();
	                    this.LastHasDataFrameId = 0;
	                    this.TimeStamp = new Long(0, 0, true);
	                    this._propsInfo = [{ "id": 1, "name": "FrameId", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "Count", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 3, "name": "RelayData", "lawType": "Array<cs_relay_msg.CSRelayData>", "refer": "Count", "count": "20", "countValue": "20", "stringSizeValue": null, "dataType": 11 }, { "id": 4, "name": "LastHasDataFrameId", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 5, "name": "TimeStamp", "lawType": "uint64", "countValue": null, "stringSizeValue": null, "dataType": 8 }];
	                    for (var RelayData_i = 0; RelayData_i < 20; RelayData_i++) {
	                        this.RelayData.push(new cs_relay_msg.CSRelayData());
	                    }
	                };
	                CSRelayFrame.getNewOne = function () { return new CSRelayFrame(); };
	                CSRelayFrame.prototype.getName = function () { return "cs_relay_msg.CSRelayFrame"; };
	                CSRelayFrame.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) {
	                        fixed_indent = 2;
	                    }
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: FrameId */
	                    Tools.printValue(msg_str, "FrameId", this.FrameId, curr_indent);
	                    /* visualize member: Count */
	                    Tools.printValue(msg_str, "Count", this.Count, curr_indent);
	                    /* visualize member: RelayData */
	                    var num_eles = Math.min(this.Count, 20);
	                    Tools.printValue(msg_str, "RelayData", "", curr_indent);
	                    for (var i = 0; i < num_eles; ++i) {
	                        Tools.printValue(msg_str, i.toString(), "", curr_indent + fixed_indent);
	                        this.RelayData[i].visualizeDetail(msg_str, curr_indent + fixed_indent + fixed_indent, fixed_indent);
	                    }
	                    /* visualize member: LastHasDataFrameId */
	                    Tools.printValue(msg_str, "LastHasDataFrameId", this.LastHasDataFrameId, curr_indent);
	                    /* visualize member: TimeStamp */
	                    Tools.printValue(msg_str, "TimeStamp", this.TimeStamp.toString(), curr_indent);
	                    return ret;
	                };
	                CSRelayFrame.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayFrame.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayFrame.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.FrameId */
	                    {
	                        {
	                            /* read value */
	                            this.FrameId = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.Count */
	                    {
	                        {
	                            /* read value */
	                            this.Count = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RelayData */
	                    {
	                        for (var RelayData_i = 0; RelayData_i < 20; ++RelayData_i) {
	                            ret.ret = this.RelayData[RelayData_i].loadDetail(read);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.LastHasDataFrameId */
	                    {
	                        {
	                            /* read value */
	                            this.LastHasDataFrameId = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.TimeStamp */
	                    {
	                        {
	                            /* read value */
	                            this.TimeStamp = read.readUInt64(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayFrame;
	            }(StructTdr));
	            cs_relay_msg.CSRelayFrame = CSRelayFrame;
	            var CSRelayFrame2 = /** @class */ (function (_super) {
	                __extends(CSRelayFrame2, _super);
	                function CSRelayFrame2() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.FrameId = 0;
	                    _this.Count = 0;
	                    _this.RelayData = new Array();
	                    _this.init();
	                    return _this;
	                }
	                CSRelayFrame2.prototype.init = function () {
	                    this.FrameId = 0;
	                    this.Count = 0;
	                    this.RelayData = new Array();
	                    this._propsInfo = [{ "id": 1, "name": "FrameId", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "Count", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 3, "name": "RelayData", "lawType": "Array<cs_relay_msg.CSRelayData>", "refer": "Count", "count": "20", "countValue": "20", "stringSizeValue": null, "dataType": 11 }];
	                    for (var RelayData_i = 0; RelayData_i < 20; RelayData_i++) {
	                        this.RelayData.push(new cs_relay_msg.CSRelayData());
	                    }
	                };
	                CSRelayFrame2.getNewOne = function () { return new CSRelayFrame2(); };
	                CSRelayFrame2.prototype.getName = function () { return "cs_relay_msg.CSRelayFrame2"; };
	                CSRelayFrame2.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) {
	                        fixed_indent = 2;
	                    }
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: FrameId */
	                    Tools.printValue(msg_str, "FrameId", this.FrameId, curr_indent);
	                    /* visualize member: Count */
	                    Tools.printValue(msg_str, "Count", this.Count, curr_indent);
	                    /* visualize member: RelayData */
	                    var num_eles = Math.min(this.Count, 20);
	                    Tools.printValue(msg_str, "RelayData", "", curr_indent);
	                    for (var i = 0; i < num_eles; ++i) {
	                        Tools.printValue(msg_str, i.toString(), "", curr_indent + fixed_indent);
	                        this.RelayData[i].visualizeDetail(msg_str, curr_indent + fixed_indent + fixed_indent, fixed_indent);
	                    }
	                    return ret;
	                };
	                CSRelayFrame2.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayFrame2.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayFrame2.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.FrameId */
	                    {
	                        {
	                            /* read value */
	                            this.FrameId = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.Count */
	                    {
	                        {
	                            /* read value */
	                            this.Count = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RelayData */
	                    {
	                        for (var RelayData_i = 0; RelayData_i < 20; ++RelayData_i) {
	                            ret.ret = this.RelayData[RelayData_i].loadDetail(read);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayFrame2;
	            }(StructTdr));
	            cs_relay_msg.CSRelayFrame2 = CSRelayFrame2;
	            var CSRelayFramePack = /** @class */ (function (_super) {
	                __extends(CSRelayFramePack, _super);
	                function CSRelayFramePack() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Count = 0;
	                    _this.RelayData = new Array();
	                    _this.init();
	                    return _this;
	                }
	                CSRelayFramePack.prototype.init = function () {
	                    this.Count = 0;
	                    this.RelayData = new Array();
	                    this._propsInfo = [{ "id": 1, "name": "Count", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 2, "name": "RelayData", "lawType": "Array<cs_relay_msg.CSRelayFrame>", "refer": "Count", "count": "5", "countValue": "5", "stringSizeValue": null, "dataType": 11 }];
	                    for (var RelayData_i = 0; RelayData_i < 5; RelayData_i++) {
	                        this.RelayData.push(new cs_relay_msg.CSRelayFrame());
	                    }
	                };
	                CSRelayFramePack.getNewOne = function () { return new CSRelayFramePack(); };
	                CSRelayFramePack.prototype.getName = function () { return "cs_relay_msg.CSRelayFramePack"; };
	                CSRelayFramePack.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) {
	                        fixed_indent = 2;
	                    }
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Count */
	                    Tools.printValue(msg_str, "Count", this.Count, curr_indent);
	                    /* visualize member: RelayData */
	                    var num_eles = Math.min(this.Count, 5);
	                    Tools.printValue(msg_str, "RelayData", "", curr_indent);
	                    for (var i = 0; i < num_eles; ++i) {
	                        Tools.printValue(msg_str, i.toString(), "", curr_indent + fixed_indent);
	                        this.RelayData[i].visualizeDetail(msg_str, curr_indent + fixed_indent + fixed_indent, fixed_indent);
	                    }
	                    return ret;
	                };
	                CSRelayFramePack.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayFramePack.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayFramePack.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Count */
	                    {
	                        {
	                            /* read value */
	                            this.Count = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RelayData */
	                    {
	                        for (var RelayData_i = 0; RelayData_i < 5; ++RelayData_i) {
	                            ret.ret = this.RelayData[RelayData_i].loadDetail(read);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayFramePack;
	            }(StructTdr));
	            cs_relay_msg.CSRelayFramePack = CSRelayFramePack;
	            var CSRelayMsgHead = /** @class */ (function (_super) {
	                __extends(CSRelayMsgHead, _super);
	                function CSRelayMsgHead() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.UserID = 0;
	                    _this.RoomID = 0;
	                    _this.Version = 0;
	                    _this.AsyncID = 0;
	                    _this.CmdId = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgHead.prototype.init = function () {
	                    this.UserID = 0;
	                    this.RoomID = 0;
	                    this.Version = 0;
	                    this.AsyncID = 0;
	                    this.CmdId = 0;
	                    this._propsInfo = [{ "id": 1, "name": "UserID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "RoomID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 3, "name": "Version", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 4, "name": "AsyncID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 4 }, { "id": 5, "name": "CmdId", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }];
	                };
	                CSRelayMsgHead.getNewOne = function () { return new CSRelayMsgHead(); };
	                CSRelayMsgHead.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgHead"; };
	                CSRelayMsgHead.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: UserID */
	                    Tools.printValue(msg_str, "UserID", this.UserID, curr_indent);
	                    /* visualize member: RoomID */
	                    Tools.printValue(msg_str, "RoomID", this.RoomID, curr_indent);
	                    /* visualize member: Version */
	                    Tools.printValue(msg_str, "Version", this.Version, curr_indent);
	                    /* visualize member: AsyncID */
	                    Tools.printValue(msg_str, "AsyncID", this.AsyncID, curr_indent);
	                    /* visualize member: CmdId */
	                    Tools.printValue(msg_str, "CmdId", this.CmdId, curr_indent);
	                    return ret;
	                };
	                CSRelayMsgHead.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgHead.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgHead.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.UserID */
	                    {
	                        {
	                            /* read value */
	                            this.UserID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RoomID */
	                    {
	                        {
	                            /* read value */
	                            this.RoomID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.Version */
	                    {
	                        {
	                            /* read value */
	                            this.Version = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.AsyncID */
	                    {
	                        {
	                            /* read value */
	                            this.AsyncID = read.readUInt16(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.CmdId */
	                    {
	                        {
	                            /* read value */
	                            this.CmdId = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgHead;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgHead = CSRelayMsgHead;
	            var CSRelayMsgLoginReq = /** @class */ (function (_super) {
	                __extends(CSRelayMsgLoginReq, _super);
	                function CSRelayMsgLoginReq() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.SigBuf = "";
	                    _this.Reserve = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgLoginReq.prototype.init = function () {
	                    this.SigBuf = "";
	                    this.Reserve = 0;
	                    this._propsInfo = [{ "id": 1, "name": "SigBuf", "lawType": "string", "stringSize": "128", "countValue": null, "stringSizeValue": "128", "dataType": 12 }, { "id": 2, "name": "Reserve", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                CSRelayMsgLoginReq.getNewOne = function () { return new CSRelayMsgLoginReq(); };
	                CSRelayMsgLoginReq.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgLoginReq"; };
	                CSRelayMsgLoginReq.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: SigBuf */
	                    Tools.printValue(msg_str, "SigBuf", this.SigBuf.substr(0, Math.min(this.SigBuf.length, 128)), curr_indent);
	                    /* visualize member: Reserve */
	                    Tools.printValue(msg_str, "Reserve", this.Reserve, curr_indent);
	                    return ret;
	                };
	                CSRelayMsgLoginReq.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgLoginReq.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgLoginReq.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.SigBuf */
	                    {
	                        var iStringLength = 128;
	                        /* read value */
	                        this.SigBuf = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.Reserve */
	                    {
	                        {
	                            /* read value */
	                            this.Reserve = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgLoginReq;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgLoginReq = CSRelayMsgLoginReq;
	            var CSRelayMsgLoginRes = /** @class */ (function (_super) {
	                __extends(CSRelayMsgLoginRes, _super);
	                function CSRelayMsgLoginRes() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Reserve = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgLoginRes.prototype.init = function () {
	                    this.Reserve = 0;
	                    this._propsInfo = [{ "id": 1, "name": "Reserve", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                CSRelayMsgLoginRes.getNewOne = function () { return new CSRelayMsgLoginRes(); };
	                CSRelayMsgLoginRes.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgLoginRes"; };
	                CSRelayMsgLoginRes.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Reserve */
	                    Tools.printValue(msg_str, "Reserve", this.Reserve, curr_indent);
	                    return ret;
	                };
	                CSRelayMsgLoginRes.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgLoginRes.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgLoginRes.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Reserve */
	                    {
	                        {
	                            /* read value */
	                            this.Reserve = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgLoginRes;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgLoginRes = CSRelayMsgLoginRes;
	            var CSRelayMsgStartReq = /** @class */ (function (_super) {
	                __extends(CSRelayMsgStartReq, _super);
	                function CSRelayMsgStartReq() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Reserve = 0;
	                    _this.NeedSeek = 0;
	                    _this.SeekFrameID = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgStartReq.prototype.init = function () {
	                    this.Reserve = 0;
	                    this.NeedSeek = 0;
	                    this.SeekFrameID = 0;
	                    this._propsInfo = [{ "id": 1, "name": "Reserve", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "NeedSeek", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 3, "name": "SeekFrameID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                CSRelayMsgStartReq.getNewOne = function () { return new CSRelayMsgStartReq(); };
	                CSRelayMsgStartReq.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgStartReq"; };
	                CSRelayMsgStartReq.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Reserve */
	                    Tools.printValue(msg_str, "Reserve", this.Reserve, curr_indent);
	                    /* visualize member: NeedSeek */
	                    Tools.printValue(msg_str, "NeedSeek", this.NeedSeek, curr_indent);
	                    /* visualize member: SeekFrameID */
	                    Tools.printValue(msg_str, "SeekFrameID", this.SeekFrameID, curr_indent);
	                    return ret;
	                };
	                CSRelayMsgStartReq.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgStartReq.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgStartReq.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Reserve */
	                    {
	                        {
	                            /* read value */
	                            this.Reserve = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.NeedSeek */
	                    {
	                        {
	                            /* read value */
	                            this.NeedSeek = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.SeekFrameID */
	                    {
	                        {
	                            /* read value */
	                            this.SeekFrameID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgStartReq;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgStartReq = CSRelayMsgStartReq;
	            var CSRelayMsgStartRes = /** @class */ (function (_super) {
	                __extends(CSRelayMsgStartRes, _super);
	                function CSRelayMsgStartRes() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Result = 0;
	                    _this.ErrorDesc = "";
	                    _this.BeginFrameID = 0;
	                    _this.NeedToPlayFromFrame0 = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgStartRes.prototype.init = function () {
	                    this.Result = 0;
	                    this.ErrorDesc = "";
	                    this.BeginFrameID = 0;
	                    this.NeedToPlayFromFrame0 = 0;
	                    this._propsInfo = [{ "id": 1, "name": "Result", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 5 }, { "id": 2, "name": "ErrorDesc", "lawType": "string", "stringSize": "256", "countValue": null, "stringSizeValue": "256", "dataType": 12 }, { "id": 3, "name": "BeginFrameID", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 4, "name": "NeedToPlayFromFrame0", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }];
	                };
	                CSRelayMsgStartRes.getNewOne = function () { return new CSRelayMsgStartRes(); };
	                CSRelayMsgStartRes.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgStartRes"; };
	                CSRelayMsgStartRes.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Result */
	                    Tools.printValue(msg_str, "Result", this.Result, curr_indent);
	                    /* visualize member: ErrorDesc */
	                    Tools.printValue(msg_str, "ErrorDesc", this.ErrorDesc.substr(0, Math.min(this.ErrorDesc.length, 256)), curr_indent);
	                    /* visualize member: BeginFrameID */
	                    Tools.printValue(msg_str, "BeginFrameID", this.BeginFrameID, curr_indent);
	                    /* visualize member: NeedToPlayFromFrame0 */
	                    Tools.printValue(msg_str, "NeedToPlayFromFrame0", this.NeedToPlayFromFrame0, curr_indent);
	                    return ret;
	                };
	                CSRelayMsgStartRes.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgStartRes.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgStartRes.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Result */
	                    {
	                        {
	                            /* read value */
	                            this.Result = read.readInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.ErrorDesc */
	                    {
	                        var iStringLength = 256;
	                        /* read value */
	                        this.ErrorDesc = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.BeginFrameID */
	                    {
	                        {
	                            /* read value */
	                            this.BeginFrameID = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.NeedToPlayFromFrame0 */
	                    {
	                        {
	                            /* read value */
	                            this.NeedToPlayFromFrame0 = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgStartRes;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgStartRes = CSRelayMsgStartRes;
	            var CSRelayMsgStopReq = /** @class */ (function (_super) {
	                __extends(CSRelayMsgStopReq, _super);
	                function CSRelayMsgStopReq() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Reserve = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgStopReq.prototype.init = function () {
	                    this.Reserve = 0;
	                    this._propsInfo = [{ "id": 1, "name": "Reserve", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                CSRelayMsgStopReq.getNewOne = function () { return new CSRelayMsgStopReq(); };
	                CSRelayMsgStopReq.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgStopReq"; };
	                CSRelayMsgStopReq.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Reserve */
	                    Tools.printValue(msg_str, "Reserve", this.Reserve, curr_indent);
	                    return ret;
	                };
	                CSRelayMsgStopReq.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgStopReq.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgStopReq.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Reserve */
	                    {
	                        {
	                            /* read value */
	                            this.Reserve = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgStopReq;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgStopReq = CSRelayMsgStopReq;
	            var CSRelayMsgStopRes = /** @class */ (function (_super) {
	                __extends(CSRelayMsgStopRes, _super);
	                function CSRelayMsgStopRes() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Result = 0;
	                    _this.Reserve = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgStopRes.prototype.init = function () {
	                    this.Result = 0;
	                    this.Reserve = 0;
	                    this._propsInfo = [{ "id": 1, "name": "Result", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 5 }, { "id": 2, "name": "Reserve", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                CSRelayMsgStopRes.getNewOne = function () { return new CSRelayMsgStopRes(); };
	                CSRelayMsgStopRes.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgStopRes"; };
	                CSRelayMsgStopRes.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Result */
	                    Tools.printValue(msg_str, "Result", this.Result, curr_indent);
	                    /* visualize member: Reserve */
	                    Tools.printValue(msg_str, "Reserve", this.Reserve, curr_indent);
	                    return ret;
	                };
	                CSRelayMsgStopRes.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgStopRes.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgStopRes.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Result */
	                    {
	                        {
	                            /* read value */
	                            this.Result = read.readInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.Reserve */
	                    {
	                        {
	                            /* read value */
	                            this.Reserve = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgStopRes;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgStopRes = CSRelayMsgStopRes;
	            var CSRelayMsgSyncReq = /** @class */ (function (_super) {
	                __extends(CSRelayMsgSyncReq, _super);
	                function CSRelayMsgSyncReq() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.FrameIdBegin = 0;
	                    _this.FrameIdEnd = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgSyncReq.prototype.init = function () {
	                    this.FrameIdBegin = 0;
	                    this.FrameIdEnd = 0;
	                    this._propsInfo = [{ "id": 1, "name": "FrameIdBegin", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "FrameIdEnd", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                CSRelayMsgSyncReq.getNewOne = function () { return new CSRelayMsgSyncReq(); };
	                CSRelayMsgSyncReq.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgSyncReq"; };
	                CSRelayMsgSyncReq.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: FrameIdBegin */
	                    Tools.printValue(msg_str, "FrameIdBegin", this.FrameIdBegin, curr_indent);
	                    /* visualize member: FrameIdEnd */
	                    Tools.printValue(msg_str, "FrameIdEnd", this.FrameIdEnd, curr_indent);
	                    return ret;
	                };
	                CSRelayMsgSyncReq.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgSyncReq.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgSyncReq.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.FrameIdBegin */
	                    {
	                        {
	                            /* read value */
	                            this.FrameIdBegin = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.FrameIdEnd */
	                    {
	                        {
	                            /* read value */
	                            this.FrameIdEnd = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgSyncReq;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgSyncReq = CSRelayMsgSyncReq;
	            var CSRelayMsgSyncRes = /** @class */ (function (_super) {
	                __extends(CSRelayMsgSyncRes, _super);
	                function CSRelayMsgSyncRes() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Result = 0;
	                    _this.SyncData = new cs_relay_msg.CSRelayFrame();
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgSyncRes.prototype.init = function () {
	                    this.Result = 0;
	                    this.SyncData = new cs_relay_msg.CSRelayFrame();
	                    this._propsInfo = [{ "id": 1, "name": "Result", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 5 }, { "id": 2, "name": "SyncData", "lawType": "cs_relay_msg.CSRelayFrame", "countValue": null, "stringSizeValue": null, "dataType": 11 }];
	                };
	                CSRelayMsgSyncRes.getNewOne = function () { return new CSRelayMsgSyncRes(); };
	                CSRelayMsgSyncRes.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgSyncRes"; };
	                CSRelayMsgSyncRes.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) {
	                        fixed_indent = 2;
	                    }
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Result */
	                    Tools.printValue(msg_str, "Result", this.Result, curr_indent);
	                    /* visualize member: SyncData */
	                    Tools.printValue(msg_str, "SyncData", "", curr_indent);
	                    this.SyncData.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                    return ret;
	                };
	                CSRelayMsgSyncRes.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgSyncRes.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgSyncRes.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Result */
	                    {
	                        {
	                            /* read value */
	                            this.Result = read.readInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.SyncData */
	                    {
	                        ret.ret = this.SyncData.loadDetail(read);
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgSyncRes;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgSyncRes = CSRelayMsgSyncRes;
	            var CSRelayMsgReloginNotify = /** @class */ (function (_super) {
	                __extends(CSRelayMsgReloginNotify, _super);
	                function CSRelayMsgReloginNotify() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Reserve = 0;
	                    _this.Question = new Long(0, 0, true);
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgReloginNotify.prototype.init = function () {
	                    this.Reserve = 0;
	                    this.Question = new Long(0, 0, true);
	                    this._propsInfo = [{ "id": 1, "name": "Reserve", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "Question", "lawType": "uint64", "countValue": null, "stringSizeValue": null, "dataType": 8 }];
	                };
	                CSRelayMsgReloginNotify.getNewOne = function () { return new CSRelayMsgReloginNotify(); };
	                CSRelayMsgReloginNotify.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgReloginNotify"; };
	                CSRelayMsgReloginNotify.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Reserve */
	                    Tools.printValue(msg_str, "Reserve", this.Reserve, curr_indent);
	                    /* visualize member: Question */
	                    Tools.printValue(msg_str, "Question", this.Question.toString(), curr_indent);
	                    return ret;
	                };
	                CSRelayMsgReloginNotify.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgReloginNotify.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgReloginNotify.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Reserve */
	                    {
	                        {
	                            /* read value */
	                            this.Reserve = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.Question */
	                    {
	                        {
	                            /* read value */
	                            this.Question = read.readUInt64(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgReloginNotify;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgReloginNotify = CSRelayMsgReloginNotify;
	            var CSRelayError = /** @class */ (function (_super) {
	                __extends(CSRelayError, _super);
	                function CSRelayError() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.error_code = 0;
	                    _this.error_code_str = "";
	                    _this.error_svr_url = "";
	                    _this.request_cmd_code = 0;
	                    _this.isFatalError = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayError.prototype.init = function () {
	                    this.error_code = 0;
	                    this.error_code_str = "";
	                    this.error_svr_url = "";
	                    this.request_cmd_code = 0;
	                    this.isFatalError = 0;
	                    this._propsInfo = [{ "id": 1, "name": "error_code", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "error_code_str", "lawType": "string", "stringSize": "cs_relay_msg.CS_SIG_BUFF_LENGTH", "countValue": null, "stringSizeValue": 1024, "dataType": 12 }, { "id": 3, "name": "error_svr_url", "lawType": "string", "stringSize": "cs_relay_msg.CS_SIG_BUFF_LENGTH", "countValue": null, "stringSizeValue": 1024, "dataType": 12 }, { "id": 4, "name": "request_cmd_code", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }, { "id": 5, "name": "isFatalError", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 2 }];
	                };
	                CSRelayError.getNewOne = function () { return new CSRelayError(); };
	                CSRelayError.prototype.getName = function () { return "cs_relay_msg.CSRelayError"; };
	                CSRelayError.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: error_code */
	                    Tools.printValue(msg_str, "error_code", this.error_code, curr_indent);
	                    /* visualize member: error_code_str */
	                    Tools.printValue(msg_str, "error_code_str", this.error_code_str.substr(0, Math.min(this.error_code_str.length, cs_relay_msg.CS_SIG_BUFF_LENGTH)), curr_indent);
	                    /* visualize member: error_svr_url */
	                    Tools.printValue(msg_str, "error_svr_url", this.error_svr_url.substr(0, Math.min(this.error_svr_url.length, cs_relay_msg.CS_SIG_BUFF_LENGTH)), curr_indent);
	                    /* visualize member: request_cmd_code */
	                    Tools.printValue(msg_str, "request_cmd_code", this.request_cmd_code, curr_indent);
	                    /* visualize member: isFatalError */
	                    Tools.printValue(msg_str, "isFatalError", this.isFatalError, curr_indent);
	                    return ret;
	                };
	                CSRelayError.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayError.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayError.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.error_code */
	                    {
	                        {
	                            /* read value */
	                            this.error_code = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.error_code_str */
	                    {
	                        var iStringLength = cs_relay_msg.CS_SIG_BUFF_LENGTH;
	                        /* read value */
	                        this.error_code_str = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.error_svr_url */
	                    {
	                        var iStringLength = cs_relay_msg.CS_SIG_BUFF_LENGTH;
	                        /* read value */
	                        this.error_svr_url = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.request_cmd_code */
	                    {
	                        {
	                            /* read value */
	                            this.request_cmd_code = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.isFatalError */
	                    {
	                        {
	                            /* read value */
	                            this.isFatalError = read.readUInt8(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayError;
	            }(StructTdr));
	            cs_relay_msg.CSRelayError = CSRelayError;
	            var CreateRoomUserInfo = /** @class */ (function (_super) {
	                __extends(CreateRoomUserInfo, _super);
	                function CreateRoomUserInfo() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.user_id = "";
	                    _this.user_ip = "";
	                    _this.init();
	                    return _this;
	                }
	                CreateRoomUserInfo.prototype.init = function () {
	                    this.user_id = "";
	                    this.user_ip = "";
	                    this._propsInfo = [{ "id": 1, "name": "user_id", "lawType": "string", "stringSize": "cs_relay_msg.CS_RELAY_MAX_USER_ID_LEN", "countValue": null, "stringSizeValue": 256, "dataType": 12 }, { "id": 2, "name": "user_ip", "lawType": "string", "stringSize": "cs_relay_msg.CS_RELAY_MAX_USER_IP_LEN", "countValue": null, "stringSizeValue": 64, "dataType": 12 }];
	                };
	                CreateRoomUserInfo.getNewOne = function () { return new CreateRoomUserInfo(); };
	                CreateRoomUserInfo.prototype.getName = function () { return "cs_relay_msg.CreateRoomUserInfo"; };
	                CreateRoomUserInfo.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: user_id */
	                    Tools.printValue(msg_str, "user_id", this.user_id.substr(0, Math.min(this.user_id.length, cs_relay_msg.CS_RELAY_MAX_USER_ID_LEN)), curr_indent);
	                    /* visualize member: user_ip */
	                    Tools.printValue(msg_str, "user_ip", this.user_ip.substr(0, Math.min(this.user_ip.length, cs_relay_msg.CS_RELAY_MAX_USER_IP_LEN)), curr_indent);
	                    return ret;
	                };
	                CreateRoomUserInfo.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CreateRoomUserInfo.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CreateRoomUserInfo.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.user_id */
	                    {
	                        var iStringLength = cs_relay_msg.CS_RELAY_MAX_USER_ID_LEN;
	                        /* read value */
	                        this.user_id = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.user_ip */
	                    {
	                        var iStringLength = cs_relay_msg.CS_RELAY_MAX_USER_IP_LEN;
	                        /* read value */
	                        this.user_ip = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    return ret.ret;
	                };
	                return CreateRoomUserInfo;
	            }(StructTdr));
	            cs_relay_msg.CreateRoomUserInfo = CreateRoomUserInfo;
	            var CSRelayMsgHeartBeatReq = /** @class */ (function (_super) {
	                __extends(CSRelayMsgHeartBeatReq, _super);
	                function CSRelayMsgHeartBeatReq() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Unused = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgHeartBeatReq.prototype.init = function () {
	                    this.Unused = 0;
	                    this._propsInfo = [{ "id": 1, "name": "Unused", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                CSRelayMsgHeartBeatReq.getNewOne = function () { return new CSRelayMsgHeartBeatReq(); };
	                CSRelayMsgHeartBeatReq.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgHeartBeatReq"; };
	                CSRelayMsgHeartBeatReq.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Unused */
	                    Tools.printValue(msg_str, "Unused", this.Unused, curr_indent);
	                    return ret;
	                };
	                CSRelayMsgHeartBeatReq.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgHeartBeatReq.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgHeartBeatReq.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Unused */
	                    {
	                        {
	                            /* read value */
	                            this.Unused = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgHeartBeatReq;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgHeartBeatReq = CSRelayMsgHeartBeatReq;
	            var CSRelayMsgHeartBeatRes = /** @class */ (function (_super) {
	                __extends(CSRelayMsgHeartBeatRes, _super);
	                function CSRelayMsgHeartBeatRes() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.HeartBeatIntervalMs = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgHeartBeatRes.prototype.init = function () {
	                    this.HeartBeatIntervalMs = 0;
	                    this._propsInfo = [{ "id": 1, "name": "HeartBeatIntervalMs", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                CSRelayMsgHeartBeatRes.getNewOne = function () { return new CSRelayMsgHeartBeatRes(); };
	                CSRelayMsgHeartBeatRes.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgHeartBeatRes"; };
	                CSRelayMsgHeartBeatRes.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: HeartBeatIntervalMs */
	                    Tools.printValue(msg_str, "HeartBeatIntervalMs", this.HeartBeatIntervalMs, curr_indent);
	                    return ret;
	                };
	                CSRelayMsgHeartBeatRes.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsgHeartBeatRes.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsgHeartBeatRes.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.HeartBeatIntervalMs */
	                    {
	                        {
	                            /* read value */
	                            this.HeartBeatIntervalMs = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsgHeartBeatRes;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsgHeartBeatRes = CSRelayMsgHeartBeatRes;
	            var ReplayPieceInof = /** @class */ (function (_super) {
	                __extends(ReplayPieceInof, _super);
	                function ReplayPieceInof() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.StartFrame = 0;
	                    _this.FrameCount = 0;
	                    _this.init();
	                    return _this;
	                }
	                ReplayPieceInof.prototype.init = function () {
	                    this.StartFrame = 0;
	                    this.FrameCount = 0;
	                    this._propsInfo = [{ "id": 1, "name": "StartFrame", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "FrameCount", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                ReplayPieceInof.getNewOne = function () { return new ReplayPieceInof(); };
	                ReplayPieceInof.prototype.getName = function () { return "cs_relay_msg.ReplayPieceInof"; };
	                ReplayPieceInof.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: StartFrame */
	                    Tools.printValue(msg_str, "StartFrame", this.StartFrame, curr_indent);
	                    /* visualize member: FrameCount */
	                    Tools.printValue(msg_str, "FrameCount", this.FrameCount, curr_indent);
	                    return ret;
	                };
	                ReplayPieceInof.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                ReplayPieceInof.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                ReplayPieceInof.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.StartFrame */
	                    {
	                        {
	                            /* read value */
	                            this.StartFrame = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.FrameCount */
	                    {
	                        {
	                            /* read value */
	                            this.FrameCount = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return ReplayPieceInof;
	            }(StructTdr));
	            cs_relay_msg.ReplayPieceInof = ReplayPieceInof;
	            var CSRelaySeekPlayReq = /** @class */ (function (_super) {
	                __extends(CSRelaySeekPlayReq, _super);
	                function CSRelaySeekPlayReq() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.FrameIntervalMs = 0;
	                    _this.StartFrame = 0;
	                    _this.FrameCount = 0;
	                    _this.ReplayPieceInofCount = 0;
	                    _this.ReplayPieceInof = new Array();
	                    _this.init();
	                    return _this;
	                }
	                CSRelaySeekPlayReq.prototype.init = function () {
	                    this.FrameIntervalMs = 0;
	                    this.StartFrame = 0;
	                    this.FrameCount = 0;
	                    this.ReplayPieceInofCount = 0;
	                    this.ReplayPieceInof = new Array();
	                    this._propsInfo = [{ "id": 1, "name": "FrameIntervalMs", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "StartFrame", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 3, "name": "FrameCount", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 4, "name": "ReplayPieceInofCount", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 5, "name": "ReplayPieceInof", "lawType": "Array<cs_relay_msg.ReplayPieceInof>", "refer": "ReplayPieceInofCount", "count": "10", "countValue": "10", "stringSizeValue": null, "dataType": 11 }];
	                    for (var ReplayPieceInof_i = 0; ReplayPieceInof_i < 10; ReplayPieceInof_i++) {
	                        this.ReplayPieceInof.push(new cs_relay_msg.ReplayPieceInof());
	                    }
	                };
	                CSRelaySeekPlayReq.getNewOne = function () { return new CSRelaySeekPlayReq(); };
	                CSRelaySeekPlayReq.prototype.getName = function () { return "cs_relay_msg.CSRelaySeekPlayReq"; };
	                CSRelaySeekPlayReq.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) {
	                        fixed_indent = 2;
	                    }
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: FrameIntervalMs */
	                    Tools.printValue(msg_str, "FrameIntervalMs", this.FrameIntervalMs, curr_indent);
	                    /* visualize member: StartFrame */
	                    Tools.printValue(msg_str, "StartFrame", this.StartFrame, curr_indent);
	                    /* visualize member: FrameCount */
	                    Tools.printValue(msg_str, "FrameCount", this.FrameCount, curr_indent);
	                    /* visualize member: ReplayPieceInofCount */
	                    Tools.printValue(msg_str, "ReplayPieceInofCount", this.ReplayPieceInofCount, curr_indent);
	                    /* visualize member: ReplayPieceInof */
	                    var num_eles = Math.min(this.ReplayPieceInofCount, 10);
	                    Tools.printValue(msg_str, "ReplayPieceInof", "", curr_indent);
	                    for (var i = 0; i < num_eles; ++i) {
	                        Tools.printValue(msg_str, i.toString(), "", curr_indent + fixed_indent);
	                        this.ReplayPieceInof[i].visualizeDetail(msg_str, curr_indent + fixed_indent + fixed_indent, fixed_indent);
	                    }
	                    return ret;
	                };
	                CSRelaySeekPlayReq.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelaySeekPlayReq.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelaySeekPlayReq.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.FrameIntervalMs */
	                    {
	                        {
	                            /* read value */
	                            this.FrameIntervalMs = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.StartFrame */
	                    {
	                        {
	                            /* read value */
	                            this.StartFrame = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.FrameCount */
	                    {
	                        {
	                            /* read value */
	                            this.FrameCount = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.ReplayPieceInofCount */
	                    {
	                        {
	                            /* read value */
	                            this.ReplayPieceInofCount = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.ReplayPieceInof */
	                    {
	                        for (var ReplayPieceInof_i = 0; ReplayPieceInof_i < 10; ++ReplayPieceInof_i) {
	                            ret.ret = this.ReplayPieceInof[ReplayPieceInof_i].loadDetail(read);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelaySeekPlayReq;
	            }(StructTdr));
	            cs_relay_msg.CSRelaySeekPlayReq = CSRelaySeekPlayReq;
	            var CSRelaySeekPlayRes = /** @class */ (function (_super) {
	                __extends(CSRelaySeekPlayRes, _super);
	                function CSRelaySeekPlayRes() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.RetCode = 0;
	                    _this.RetStr = "";
	                    _this.init();
	                    return _this;
	                }
	                CSRelaySeekPlayRes.prototype.init = function () {
	                    this.RetCode = 0;
	                    this.RetStr = "";
	                    this._propsInfo = [{ "id": 1, "name": "RetCode", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }, { "id": 2, "name": "RetStr", "lawType": "string", "stringSize": "1024", "countValue": null, "stringSizeValue": "1024", "dataType": 12 }];
	                };
	                CSRelaySeekPlayRes.getNewOne = function () { return new CSRelaySeekPlayRes(); };
	                CSRelaySeekPlayRes.prototype.getName = function () { return "cs_relay_msg.CSRelaySeekPlayRes"; };
	                CSRelaySeekPlayRes.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: RetCode */
	                    Tools.printValue(msg_str, "RetCode", this.RetCode, curr_indent);
	                    /* visualize member: RetStr */
	                    Tools.printValue(msg_str, "RetStr", this.RetStr.substr(0, Math.min(this.RetStr.length, 1024)), curr_indent);
	                    return ret;
	                };
	                CSRelaySeekPlayRes.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelaySeekPlayRes.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelaySeekPlayRes.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.RetCode */
	                    {
	                        {
	                            /* read value */
	                            this.RetCode = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    /* load member: this.RetStr */
	                    {
	                        var iStringLength = 1024;
	                        /* read value */
	                        this.RetStr = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    return ret.ret;
	                };
	                return CSRelaySeekPlayRes;
	            }(StructTdr));
	            cs_relay_msg.CSRelaySeekPlayRes = CSRelaySeekPlayRes;
	            var CSRelayStatReq = /** @class */ (function (_super) {
	                __extends(CSRelayStatReq, _super);
	                function CSRelayStatReq() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.RetCode = 0;
	                    _this.init();
	                    return _this;
	                }
	                CSRelayStatReq.prototype.init = function () {
	                    this.RetCode = 0;
	                    this._propsInfo = [{ "id": 1, "name": "RetCode", "lawType": "number", "countValue": null, "stringSizeValue": null, "dataType": 6 }];
	                };
	                CSRelayStatReq.getNewOne = function () { return new CSRelayStatReq(); };
	                CSRelayStatReq.prototype.getName = function () { return "cs_relay_msg.CSRelayStatReq"; };
	                CSRelayStatReq.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: RetCode */
	                    Tools.printValue(msg_str, "RetCode", this.RetCode, curr_indent);
	                    return ret;
	                };
	                CSRelayStatReq.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayStatReq.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayStatReq.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.RetCode */
	                    {
	                        {
	                            /* read value */
	                            this.RetCode = read.readUInt32(ret);
	                            if (ErrorType.TDR_NO_ERROR != ret.ret)
	                                return ret.ret;
	                        }
	                    }
	                    return ret.ret;
	                };
	                return CSRelayStatReq;
	            }(StructTdr));
	            cs_relay_msg.CSRelayStatReq = CSRelayStatReq;
	            var CSRelayStatRes = /** @class */ (function (_super) {
	                __extends(CSRelayStatRes, _super);
	                function CSRelayStatRes() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.RoomRetStr = "";
	                    _this.UserRetStr = "";
	                    _this.ProcessRetStr = "";
	                    _this.init();
	                    return _this;
	                }
	                CSRelayStatRes.prototype.init = function () {
	                    this.RoomRetStr = "";
	                    this.UserRetStr = "";
	                    this.ProcessRetStr = "";
	                    this._propsInfo = [{ "id": 1, "name": "RoomRetStr", "lawType": "string", "stringSize": "4096", "countValue": null, "stringSizeValue": "4096", "dataType": 12 }, { "id": 2, "name": "UserRetStr", "lawType": "string", "stringSize": "4096", "countValue": null, "stringSizeValue": "4096", "dataType": 12 }, { "id": 3, "name": "ProcessRetStr", "lawType": "string", "stringSize": "4096", "countValue": null, "stringSizeValue": "4096", "dataType": 12 }];
	                };
	                CSRelayStatRes.getNewOne = function () { return new CSRelayStatRes(); };
	                CSRelayStatRes.prototype.getName = function () { return "cs_relay_msg.CSRelayStatRes"; };
	                CSRelayStatRes.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: RoomRetStr */
	                    Tools.printValue(msg_str, "RoomRetStr", this.RoomRetStr.substr(0, Math.min(this.RoomRetStr.length, 4096)), curr_indent);
	                    /* visualize member: UserRetStr */
	                    Tools.printValue(msg_str, "UserRetStr", this.UserRetStr.substr(0, Math.min(this.UserRetStr.length, 4096)), curr_indent);
	                    /* visualize member: ProcessRetStr */
	                    Tools.printValue(msg_str, "ProcessRetStr", this.ProcessRetStr.substr(0, Math.min(this.ProcessRetStr.length, 4096)), curr_indent);
	                    return ret;
	                };
	                CSRelayStatRes.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayStatRes.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayStatRes.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.RoomRetStr */
	                    {
	                        var iStringLength = 4096;
	                        /* read value */
	                        this.RoomRetStr = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.UserRetStr */
	                    {
	                        var iStringLength = 4096;
	                        /* read value */
	                        this.UserRetStr = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    /* load member: this.ProcessRetStr */
	                    {
	                        var iStringLength = 4096;
	                        /* read value */
	                        this.ProcessRetStr = TdrUtil.utf8Decode(read.readCString(ret, iStringLength));
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    return ret.ret;
	                };
	                return CSRelayStatRes;
	            }(StructTdr));
	            cs_relay_msg.CSRelayStatRes = CSRelayStatRes;
	            var CSRelayMsgBody = /** @class */ (function (_super) {
	                __extends(CSRelayMsgBody, _super);
	                function CSRelayMsgBody() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.RelayLoginReq = new cs_relay_msg.CSRelayMsgLoginReq();
	                    _this.RelayLoginRes = new cs_relay_msg.CSRelayMsgLoginRes();
	                    _this.RelayStartReq = new cs_relay_msg.CSRelayMsgStartReq();
	                    _this.RelayStartRes = new cs_relay_msg.CSRelayMsgStartRes();
	                    _this.RelayStopReq = new cs_relay_msg.CSRelayMsgStopReq();
	                    _this.RelayStopRes = new cs_relay_msg.CSRelayMsgStopRes();
	                    _this.RelayInputing = new cs_relay_msg.CSRelayInput();
	                    _this.RelayInputMulty = new cs_relay_msg.CSRelayInputMulty();
	                    _this.RelayLockStep = new cs_relay_msg.CSRelayFramePack();
	                    _this.RelayBroadCastReq = new cs_relay_msg.CSRelayInput();
	                    _this.RelayBroadCastCheckReq = new cs_relay_msg.CSRelayInput();
	                    _this.RelayCheckReq = new cs_relay_msg.CSRelayInput();
	                    _this.RelayBroadCastRes = new cs_relay_msg.CSRelayFramePack();
	                    _this.RelayInputCheckReq = new cs_relay_msg.CSRelayInput();
	                    _this.RelaySyncReq = new cs_relay_msg.CSRelayMsgSyncReq();
	                    _this.RelaySyncRes = new cs_relay_msg.CSRelayMsgSyncRes();
	                    _this.CSRelaySeekPlayReq = new cs_relay_msg.CSRelaySeekPlayReq();
	                    _this.CSRelaySeekPlayRes = new cs_relay_msg.CSRelaySeekPlayRes();
	                    _this.CSRelayMsgHeartBeatReq = new cs_relay_msg.CSRelayMsgHeartBeatReq();
	                    _this.CSRelayMsgHeartBeatRes = new cs_relay_msg.CSRelayMsgHeartBeatRes();
	                    _this.CSRelayMsgStatUserReq = new cs_relay_msg.CSRelayStatReq();
	                    _this.CSRelayMsgStatUserRes = new cs_relay_msg.CSRelayStatRes();
	                    _this.RelayReloginNotify = new cs_relay_msg.CSRelayMsgReloginNotify();
	                    _this.RelayError = new cs_relay_msg.CSRelayError();
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsgBody.getNewOne = function () { return new CSRelayMsgBody(); };
	                CSRelayMsgBody.prototype.init = function () {
	                    this.RelayLoginReq = new cs_relay_msg.CSRelayMsgLoginReq();
	                    this.RelayLoginRes = new cs_relay_msg.CSRelayMsgLoginRes();
	                    this.RelayStartReq = new cs_relay_msg.CSRelayMsgStartReq();
	                    this.RelayStartRes = new cs_relay_msg.CSRelayMsgStartRes();
	                    this.RelayStopReq = new cs_relay_msg.CSRelayMsgStopReq();
	                    this.RelayStopRes = new cs_relay_msg.CSRelayMsgStopRes();
	                    this.RelayInputing = new cs_relay_msg.CSRelayInput();
	                    this.RelayInputMulty = new cs_relay_msg.CSRelayInputMulty();
	                    this.RelayLockStep = new cs_relay_msg.CSRelayFramePack();
	                    this.RelayBroadCastReq = new cs_relay_msg.CSRelayInput();
	                    this.RelayBroadCastCheckReq = new cs_relay_msg.CSRelayInput();
	                    this.RelayCheckReq = new cs_relay_msg.CSRelayInput();
	                    this.RelayBroadCastRes = new cs_relay_msg.CSRelayFramePack();
	                    this.RelayInputCheckReq = new cs_relay_msg.CSRelayInput();
	                    this.RelaySyncReq = new cs_relay_msg.CSRelayMsgSyncReq();
	                    this.RelaySyncRes = new cs_relay_msg.CSRelayMsgSyncRes();
	                    this.CSRelaySeekPlayReq = new cs_relay_msg.CSRelaySeekPlayReq();
	                    this.CSRelaySeekPlayRes = new cs_relay_msg.CSRelaySeekPlayRes();
	                    this.CSRelayMsgHeartBeatReq = new cs_relay_msg.CSRelayMsgHeartBeatReq();
	                    this.CSRelayMsgHeartBeatRes = new cs_relay_msg.CSRelayMsgHeartBeatRes();
	                    this.CSRelayMsgStatUserReq = new cs_relay_msg.CSRelayStatReq();
	                    this.CSRelayMsgStatUserRes = new cs_relay_msg.CSRelayStatRes();
	                    this.RelayReloginNotify = new cs_relay_msg.CSRelayMsgReloginNotify();
	                    this.RelayError = new cs_relay_msg.CSRelayError();
	                    this._propsInfo = [{ "id": 161, "name": "RelayLoginReq", "lawType": "cs_relay_msg.CSRelayMsgLoginReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 162, "name": "RelayLoginRes", "lawType": "cs_relay_msg.CSRelayMsgLoginRes", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 163, "name": "RelayStartReq", "lawType": "cs_relay_msg.CSRelayMsgStartReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 164, "name": "RelayStartRes", "lawType": "cs_relay_msg.CSRelayMsgStartRes", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 174, "name": "RelayStopReq", "lawType": "cs_relay_msg.CSRelayMsgStopReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 175, "name": "RelayStopRes", "lawType": "cs_relay_msg.CSRelayMsgStopRes", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 165, "name": "RelayInputing", "lawType": "cs_relay_msg.CSRelayInput", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 195, "name": "RelayInputMulty", "lawType": "cs_relay_msg.CSRelayInputMulty", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 167, "name": "RelayLockStep", "lawType": "cs_relay_msg.CSRelayFramePack", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 186, "name": "RelayBroadCastReq", "lawType": "cs_relay_msg.CSRelayInput", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 189, "name": "RelayBroadCastCheckReq", "lawType": "cs_relay_msg.CSRelayInput", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 190, "name": "RelayCheckReq", "lawType": "cs_relay_msg.CSRelayInput", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 187, "name": "RelayBroadCastRes", "lawType": "cs_relay_msg.CSRelayFramePack", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 188, "name": "RelayInputCheckReq", "lawType": "cs_relay_msg.CSRelayInput", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 168, "name": "RelaySyncReq", "lawType": "cs_relay_msg.CSRelayMsgSyncReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 169, "name": "RelaySyncRes", "lawType": "cs_relay_msg.CSRelayMsgSyncRes", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 182, "name": "CSRelaySeekPlayReq", "lawType": "cs_relay_msg.CSRelaySeekPlayReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 183, "name": "CSRelaySeekPlayRes", "lawType": "cs_relay_msg.CSRelaySeekPlayRes", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 184, "name": "CSRelayMsgHeartBeatReq", "lawType": "cs_relay_msg.CSRelayMsgHeartBeatReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 185, "name": "CSRelayMsgHeartBeatRes", "lawType": "cs_relay_msg.CSRelayMsgHeartBeatRes", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 191, "name": "CSRelayMsgStatUserReq", "lawType": "cs_relay_msg.CSRelayStatReq", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 192, "name": "CSRelayMsgStatUserRes", "lawType": "cs_relay_msg.CSRelayStatRes", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 193, "name": "RelayReloginNotify", "lawType": "cs_relay_msg.CSRelayMsgReloginNotify", "stringSizeValue": null, "countValue": null, "dataType": 11 }, { "id": 194, "name": "RelayError", "lawType": "cs_relay_msg.CSRelayError", "stringSizeValue": null, "countValue": null, "dataType": 11 }];
	                };
	                CSRelayMsgBody.prototype.getName = function () { return "cs_relay_msg.CSRelayMsgBody"; };
	                CSRelayMsgBody.prototype.visualizeDetail = function (msg_str, selector, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) {
	                        fixed_indent = 2;
	                    }
	                    var ret = new TdrReadRet();
	                    switch (selector) {
	                        /* visualize member: RelayLoginReq */
	                        case 0xA1:
	                            {
	                                Tools.printValue(msg_str, "RelayLoginReq", "", curr_indent);
	                                this.RelayLoginReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayLoginRes */
	                        case 0xA2:
	                            {
	                                Tools.printValue(msg_str, "RelayLoginRes", "", curr_indent);
	                                this.RelayLoginRes.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayStartReq */
	                        case 0xA3:
	                            {
	                                Tools.printValue(msg_str, "RelayStartReq", "", curr_indent);
	                                this.RelayStartReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayStartRes */
	                        case 0xA4:
	                            {
	                                Tools.printValue(msg_str, "RelayStartRes", "", curr_indent);
	                                this.RelayStartRes.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayStopReq */
	                        case 0xAE:
	                            {
	                                Tools.printValue(msg_str, "RelayStopReq", "", curr_indent);
	                                this.RelayStopReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayStopRes */
	                        case 0xAF:
	                            {
	                                Tools.printValue(msg_str, "RelayStopRes", "", curr_indent);
	                                this.RelayStopRes.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayInputing */
	                        case 0xA5:
	                            {
	                                Tools.printValue(msg_str, "RelayInputing", "", curr_indent);
	                                this.RelayInputing.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayInputMulty */
	                        case 195:
	                            {
	                                Tools.printValue(msg_str, "RelayInputMulty", "", curr_indent);
	                                this.RelayInputMulty.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayLockStep */
	                        case 0xA7:
	                            {
	                                Tools.printValue(msg_str, "RelayLockStep", "", curr_indent);
	                                this.RelayLockStep.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayBroadCastReq */
	                        case 0xBA:
	                            {
	                                Tools.printValue(msg_str, "RelayBroadCastReq", "", curr_indent);
	                                this.RelayBroadCastReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayBroadCastCheckReq */
	                        case 0xBD:
	                            {
	                                Tools.printValue(msg_str, "RelayBroadCastCheckReq", "", curr_indent);
	                                this.RelayBroadCastCheckReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayCheckReq */
	                        case 0xBE:
	                            {
	                                Tools.printValue(msg_str, "RelayCheckReq", "", curr_indent);
	                                this.RelayCheckReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayBroadCastRes */
	                        case 0xBB:
	                            {
	                                Tools.printValue(msg_str, "RelayBroadCastRes", "", curr_indent);
	                                this.RelayBroadCastRes.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayInputCheckReq */
	                        case 0xBC:
	                            {
	                                Tools.printValue(msg_str, "RelayInputCheckReq", "", curr_indent);
	                                this.RelayInputCheckReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelaySyncReq */
	                        case 0xA8:
	                            {
	                                Tools.printValue(msg_str, "RelaySyncReq", "", curr_indent);
	                                this.RelaySyncReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelaySyncRes */
	                        case 0xA9:
	                            {
	                                Tools.printValue(msg_str, "RelaySyncRes", "", curr_indent);
	                                this.RelaySyncRes.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: CSRelaySeekPlayReq */
	                        case 0xB6:
	                            {
	                                Tools.printValue(msg_str, "CSRelaySeekPlayReq", "", curr_indent);
	                                this.CSRelaySeekPlayReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: CSRelaySeekPlayRes */
	                        case 0xB7:
	                            {
	                                Tools.printValue(msg_str, "CSRelaySeekPlayRes", "", curr_indent);
	                                this.CSRelaySeekPlayRes.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: CSRelayMsgHeartBeatReq */
	                        case 0xB8:
	                            {
	                                Tools.printValue(msg_str, "CSRelayMsgHeartBeatReq", "", curr_indent);
	                                this.CSRelayMsgHeartBeatReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: CSRelayMsgHeartBeatRes */
	                        case 0xB9:
	                            {
	                                Tools.printValue(msg_str, "CSRelayMsgHeartBeatRes", "", curr_indent);
	                                this.CSRelayMsgHeartBeatRes.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: CSRelayMsgStatUserReq */
	                        case 191:
	                            {
	                                Tools.printValue(msg_str, "CSRelayMsgStatUserReq", "", curr_indent);
	                                this.CSRelayMsgStatUserReq.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: CSRelayMsgStatUserRes */
	                        case 192:
	                            {
	                                Tools.printValue(msg_str, "CSRelayMsgStatUserRes", "", curr_indent);
	                                this.CSRelayMsgStatUserRes.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayReloginNotify */
	                        case 0xC1:
	                            {
	                                Tools.printValue(msg_str, "RelayReloginNotify", "", curr_indent);
	                                this.RelayReloginNotify.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                        /* visualize member: RelayError */
	                        case 0xC2:
	                            {
	                                Tools.printValue(msg_str, "RelayError", "", curr_indent);
	                                this.RelayError.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                            }
	                    }
	                    return ret;
	                };
	                CSRelayMsgBody.prototype.packDetailTLV = function (selector, write, useVarInt) {
	                    return this._packDetailTLV(selector, write, useVarInt);
	                };
	                CSRelayMsgBody.prototype.unpackDetailTLV = function (selector, read, length, useVarInt) {
	                    return this._unpackDetailTLV(selector, read, length, useVarInt);
	                };
	                return CSRelayMsgBody;
	            }(UnionTdr));
	            cs_relay_msg.CSRelayMsgBody = CSRelayMsgBody;
	            var CSRelayMsg = /** @class */ (function (_super) {
	                __extends(CSRelayMsg, _super);
	                function CSRelayMsg() {
	                    var _this = this;
	                    _this._propsInfo = [];
	                    _this.Head = new cs_relay_msg.CSRelayMsgHead();
	                    _this.Body = new cs_relay_msg.CSRelayMsgBody();
	                    _this.init();
	                    return _this;
	                }
	                CSRelayMsg.prototype.init = function () {
	                    this.Head = new cs_relay_msg.CSRelayMsgHead();
	                    this.Body = new cs_relay_msg.CSRelayMsgBody();
	                    this._propsInfo = [{ "id": 1, "name": "Head", "lawType": "cs_relay_msg.CSRelayMsgHead", "countValue": null, "stringSizeValue": null, "dataType": 11 }, { "id": 2, "name": "Body", "lawType": "cs_relay_msg.CSRelayMsgBody", "countValue": null, "stringSizeValue": null, "select": "Head.CmdId", "dataType": 11 }];
	                };
	                CSRelayMsg.getNewOne = function () { return new CSRelayMsg(); };
	                CSRelayMsg.prototype.getName = function () { return "cs_relay_msg.CSRelayMsg"; };
	                CSRelayMsg.prototype.visualizeDetail = function (msg_str, curr_indent, fixed_indent) {
	                    if (fixed_indent === void 0) {
	                        fixed_indent = 2;
	                    }
	                    var ret = ErrorType.TDR_NO_ERROR;
	                    /* visualize member: Head */
	                    Tools.printValue(msg_str, "Head", "", curr_indent);
	                    this.Head.visualizeDetail(msg_str, curr_indent + fixed_indent, fixed_indent);
	                    /* visualize member: Body */
	                    Tools.printValue(msg_str, "Body", "", curr_indent);
	                    this.Body.visualizeDetail(msg_str, this.Head.CmdId, curr_indent + fixed_indent, fixed_indent);
	                    return ret;
	                };
	                CSRelayMsg.prototype.packDetailTLV = function (write, useVarInt) {
	                    return this._packDetailTLV(write, useVarInt);
	                };
	                CSRelayMsg.prototype.unpackDetailTLV = function (read, length, useVarInt) {
	                    return this._unpackDetailTLV(read, length, useVarInt);
	                };
	                CSRelayMsg.prototype.loadDetail = function (read) {
	                    read.disableEndian();
	                    var ret = new TdrReadRet();
	                    /* load member: this.Head */
	                    {
	                        ret.ret = this.Head.loadDetail(read);
	                        if (ErrorType.TDR_NO_ERROR != ret.ret)
	                            return ret.ret;
	                    }
	                    return ret.ret;
	                };
	                return CSRelayMsg;
	            }(StructTdr));
	            cs_relay_msg.CSRelayMsg = CSRelayMsg;
	            return cs_relay_msg;
	        }
	        exports.init = init;
	    })(cs_relay_msg = exports.cs_relay_msg || (exports.cs_relay_msg = {}));	});	});	unwrapExports(relay_cs_tlv);	var md5 = createCommonjsModule(function (module, exports) {	(function (factory) { {
	    module.exports = factory();	} })(function (undefined$1) {
	    var hex_chr = ["0", "1", "2", "3", "4", "5", "6", "7", "8", "9", "a", "b", "c", "d", "e", "f"];
	    function md5cycle(x, k) { var a = x[0], b = x[1], c = x[2], d = x[3]; a += (b & c | ~b & d) + k[0] - 680876936 | 0; a = (a << 7 | a >>> 25) + b | 0; d += (a & b | ~a & c) + k[1] - 389564586 | 0; d = (d << 12 | d >>> 20) + a | 0; c += (d & a | ~d & b) + k[2] + 606105819 | 0; c = (c << 17 | c >>> 15) + d | 0; b += (c & d | ~c & a) + k[3] - 1044525330 | 0; b = (b << 22 | b >>> 10) + c | 0; a += (b & c | ~b & d) + k[4] - 176418897 | 0; a = (a << 7 | a >>> 25) + b | 0; d += (a & b | ~a & c) + k[5] + 1200080426 | 0; d = (d << 12 | d >>> 20) + a | 0; c += (d & a | ~d & b) + k[6] - 1473231341 | 0; c = (c << 17 | c >>> 15) + d | 0; b += (c & d | ~c & a) + k[7] - 45705983 | 0; b = (b << 22 | b >>> 10) + c | 0; a += (b & c | ~b & d) + k[8] + 1770035416 | 0; a = (a << 7 | a >>> 25) + b | 0; d += (a & b | ~a & c) + k[9] - 1958414417 | 0; d = (d << 12 | d >>> 20) + a | 0; c += (d & a | ~d & b) + k[10] - 42063 | 0; c = (c << 17 | c >>> 15) + d | 0; b += (c & d | ~c & a) + k[11] - 1990404162 | 0; b = (b << 22 | b >>> 10) + c | 0; a += (b & c | ~b & d) + k[12] + 1804603682 | 0; a = (a << 7 | a >>> 25) + b | 0; d += (a & b | ~a & c) + k[13] - 40341101 | 0; d = (d << 12 | d >>> 20) + a | 0; c += (d & a | ~d & b) + k[14] - 1502002290 | 0; c = (c << 17 | c >>> 15) + d | 0; b += (c & d | ~c & a) + k[15] + 1236535329 | 0; b = (b << 22 | b >>> 10) + c | 0; a += (b & d | c & ~d) + k[1] - 165796510 | 0; a = (a << 5 | a >>> 27) + b | 0; d += (a & c | b & ~c) + k[6] - 1069501632 | 0; d = (d << 9 | d >>> 23) + a | 0; c += (d & b | a & ~b) + k[11] + 643717713 | 0; c = (c << 14 | c >>> 18) + d | 0; b += (c & a | d & ~a) + k[0] - 373897302 | 0; b = (b << 20 | b >>> 12) + c | 0; a += (b & d | c & ~d) + k[5] - 701558691 | 0; a = (a << 5 | a >>> 27) + b | 0; d += (a & c | b & ~c) + k[10] + 38016083 | 0; d = (d << 9 | d >>> 23) + a | 0; c += (d & b | a & ~b) + k[15] - 660478335 | 0; c = (c << 14 | c >>> 18) + d | 0; b += (c & a | d & ~a) + k[4] - 405537848 | 0; b = (b << 20 | b >>> 12) + c | 0; a += (b & d | c & ~d) + k[9] + 568446438 | 0; a = (a << 5 | a >>> 27) + b | 0; d += (a & c | b & ~c) + k[14] - 1019803690 | 0; d = (d << 9 | d >>> 23) + a | 0; c += (d & b | a & ~b) + k[3] - 187363961 | 0; c = (c << 14 | c >>> 18) + d | 0; b += (c & a | d & ~a) + k[8] + 1163531501 | 0; b = (b << 20 | b >>> 12) + c | 0; a += (b & d | c & ~d) + k[13] - 1444681467 | 0; a = (a << 5 | a >>> 27) + b | 0; d += (a & c | b & ~c) + k[2] - 51403784 | 0; d = (d << 9 | d >>> 23) + a | 0; c += (d & b | a & ~b) + k[7] + 1735328473 | 0; c = (c << 14 | c >>> 18) + d | 0; b += (c & a | d & ~a) + k[12] - 1926607734 | 0; b = (b << 20 | b >>> 12) + c | 0; a += (b ^ c ^ d) + k[5] - 378558 | 0; a = (a << 4 | a >>> 28) + b | 0; d += (a ^ b ^ c) + k[8] - 2022574463 | 0; d = (d << 11 | d >>> 21) + a | 0; c += (d ^ a ^ b) + k[11] + 1839030562 | 0; c = (c << 16 | c >>> 16) + d | 0; b += (c ^ d ^ a) + k[14] - 35309556 | 0; b = (b << 23 | b >>> 9) + c | 0; a += (b ^ c ^ d) + k[1] - 1530992060 | 0; a = (a << 4 | a >>> 28) + b | 0; d += (a ^ b ^ c) + k[4] + 1272893353 | 0; d = (d << 11 | d >>> 21) + a | 0; c += (d ^ a ^ b) + k[7] - 155497632 | 0; c = (c << 16 | c >>> 16) + d | 0; b += (c ^ d ^ a) + k[10] - 1094730640 | 0; b = (b << 23 | b >>> 9) + c | 0; a += (b ^ c ^ d) + k[13] + 681279174 | 0; a = (a << 4 | a >>> 28) + b | 0; d += (a ^ b ^ c) + k[0] - 358537222 | 0; d = (d << 11 | d >>> 21) + a | 0; c += (d ^ a ^ b) + k[3] - 722521979 | 0; c = (c << 16 | c >>> 16) + d | 0; b += (c ^ d ^ a) + k[6] + 76029189 | 0; b = (b << 23 | b >>> 9) + c | 0; a += (b ^ c ^ d) + k[9] - 640364487 | 0; a = (a << 4 | a >>> 28) + b | 0; d += (a ^ b ^ c) + k[12] - 421815835 | 0; d = (d << 11 | d >>> 21) + a | 0; c += (d ^ a ^ b) + k[15] + 530742520 | 0; c = (c << 16 | c >>> 16) + d | 0; b += (c ^ d ^ a) + k[2] - 995338651 | 0; b = (b << 23 | b >>> 9) + c | 0; a += (c ^ (b | ~d)) + k[0] - 198630844 | 0; a = (a << 6 | a >>> 26) + b | 0; d += (b ^ (a | ~c)) + k[7] + 1126891415 | 0; d = (d << 10 | d >>> 22) + a | 0; c += (a ^ (d | ~b)) + k[14] - 1416354905 | 0; c = (c << 15 | c >>> 17) + d | 0; b += (d ^ (c | ~a)) + k[5] - 57434055 | 0; b = (b << 21 | b >>> 11) + c | 0; a += (c ^ (b | ~d)) + k[12] + 1700485571 | 0; a = (a << 6 | a >>> 26) + b | 0; d += (b ^ (a | ~c)) + k[3] - 1894986606 | 0; d = (d << 10 | d >>> 22) + a | 0; c += (a ^ (d | ~b)) + k[10] - 1051523 | 0; c = (c << 15 | c >>> 17) + d | 0; b += (d ^ (c | ~a)) + k[1] - 2054922799 | 0; b = (b << 21 | b >>> 11) + c | 0; a += (c ^ (b | ~d)) + k[8] + 1873313359 | 0; a = (a << 6 | a >>> 26) + b | 0; d += (b ^ (a | ~c)) + k[15] - 30611744 | 0; d = (d << 10 | d >>> 22) + a | 0; c += (a ^ (d | ~b)) + k[6] - 1560198380 | 0; c = (c << 15 | c >>> 17) + d | 0; b += (d ^ (c | ~a)) + k[13] + 1309151649 | 0; b = (b << 21 | b >>> 11) + c | 0; a += (c ^ (b | ~d)) + k[4] - 145523070 | 0; a = (a << 6 | a >>> 26) + b | 0; d += (b ^ (a | ~c)) + k[11] - 1120210379 | 0; d = (d << 10 | d >>> 22) + a | 0; c += (a ^ (d | ~b)) + k[2] + 718787259 | 0; c = (c << 15 | c >>> 17) + d | 0; b += (d ^ (c | ~a)) + k[9] - 343485551 | 0; b = (b << 21 | b >>> 11) + c | 0; x[0] = a + x[0] | 0; x[1] = b + x[1] | 0; x[2] = c + x[2] | 0; x[3] = d + x[3] | 0; }
	    function md5blk(s) { var md5blks = [], i; for (i = 0; i < 64; i += 4) {
	        md5blks[i >> 2] = s.charCodeAt(i) + (s.charCodeAt(i + 1) << 8) + (s.charCodeAt(i + 2) << 16) + (s.charCodeAt(i + 3) << 24);
	    } return md5blks; }
	    function md5blk_array(a) { var md5blks = [], i; for (i = 0; i < 64; i += 4) {
	        md5blks[i >> 2] = a[i] + (a[i + 1] << 8) + (a[i + 2] << 16) + (a[i + 3] << 24);
	    } return md5blks; }
	    function md51(s) { var n = s.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi; for (i = 64; i <= n; i += 64) {
	        md5cycle(state, md5blk(s.substring(i - 64, i)));
	    } s = s.substring(i - 64); length = s.length; tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; for (i = 0; i < length; i += 1) {
	        tail[i >> 2] |= s.charCodeAt(i) << (i % 4 << 3);
	    } tail[i >> 2] |= 128 << (i % 4 << 3); if (i > 55) {
	        md5cycle(state, tail);
	        for (i = 0; i < 16; i += 1) {
	            tail[i] = 0;
	        }
	    } tmp = n * 8; tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/); lo = parseInt(tmp[2], 16); hi = parseInt(tmp[1], 16) || 0; tail[14] = lo; tail[15] = hi; md5cycle(state, tail); return state; }
	    function md51_array(a) { var n = a.length, state = [1732584193, -271733879, -1732584194, 271733878], i, length, tail, tmp, lo, hi; for (i = 64; i <= n; i += 64) {
	        md5cycle(state, md5blk_array(a.subarray(i - 64, i)));
	    } a = i - 64 < n ? a.subarray(i - 64) : new Uint8Array(0); length = a.length; tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0]; for (i = 0; i < length; i += 1) {
	        tail[i >> 2] |= a[i] << (i % 4 << 3);
	    } tail[i >> 2] |= 128 << (i % 4 << 3); if (i > 55) {
	        md5cycle(state, tail);
	        for (i = 0; i < 16; i += 1) {
	            tail[i] = 0;
	        }
	    } tmp = n * 8; tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/); lo = parseInt(tmp[2], 16); hi = parseInt(tmp[1], 16) || 0; tail[14] = lo; tail[15] = hi; md5cycle(state, tail); return state; }
	    function rhex(n) { var s = "", j; for (j = 0; j < 4; j += 1) {
	        s += hex_chr[n >> j * 8 + 4 & 15] + hex_chr[n >> j * 8 & 15];
	    } return s; }
	    function hex(x) { var i; for (i = 0; i < x.length; i += 1) {
	        x[i] = rhex(x[i]);
	    } return x.join(""); }
	    if (hex(md51("hello")) !== "5d41402abc4b2a76b9719d911017c592") ;
	    if (typeof ArrayBuffer !== "undefined" && !ArrayBuffer.prototype.slice) {
	        (function () { function clamp(val, length) { val = val | 0 || 0; if (val < 0) {
	            return Math.max(val + length, 0);
	        } return Math.min(val, length); } ArrayBuffer.prototype.slice = function (from, to) { var length = this.byteLength, begin = clamp(from, length), end = length, num, target, targetArray, sourceArray; if (to !== undefined$1) {
	            end = clamp(to, length);
	        } if (begin > end) {
	            return new ArrayBuffer(0);
	        } num = end - begin; target = new ArrayBuffer(num); targetArray = new Uint8Array(target); sourceArray = new Uint8Array(this, begin, num); targetArray.set(sourceArray); return target; }; })();
	    }
	    function toUtf8(str) { if (/[\u0080-\uFFFF]/.test(str)) {
	        str = unescape(encodeURIComponent(str));
	    } return str; }
	    function utf8Str2ArrayBuffer(str, returnUInt8Array) { var length = str.length, buff = new ArrayBuffer(length), arr = new Uint8Array(buff), i; for (i = 0; i < length; i += 1) {
	        arr[i] = str.charCodeAt(i);
	    } return returnUInt8Array ? arr : buff; }
	    function arrayBuffer2Utf8Str(buff) { return String.fromCharCode.apply(null, new Uint8Array(buff)); }
	    function concatenateArrayBuffers(first, second, returnUInt8Array) { var result = new Uint8Array(first.byteLength + second.byteLength); result.set(new Uint8Array(first)); result.set(new Uint8Array(second), first.byteLength); return returnUInt8Array ? result : result.buffer; }
	    function hexToBinaryString(hex) { var bytes = [], length = hex.length, x; for (x = 0; x < length - 1; x += 2) {
	        bytes.push(parseInt(hex.substr(x, 2), 16));
	    } return String.fromCharCode.apply(String, bytes); }
	    function SparkMD5() { this.reset(); }
	    SparkMD5.prototype.append = function (str) { this.appendBinary(toUtf8(str)); return this; };
	    SparkMD5.prototype.appendBinary = function (contents) { this._buff += contents; this._length += contents.length; var length = this._buff.length, i; for (i = 64; i <= length; i += 64) {
	        md5cycle(this._hash, md5blk(this._buff.substring(i - 64, i)));
	    } this._buff = this._buff.substring(i - 64); return this; };
	    SparkMD5.prototype.end = function (raw) { var buff = this._buff, length = buff.length, i, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], ret; for (i = 0; i < length; i += 1) {
	        tail[i >> 2] |= buff.charCodeAt(i) << (i % 4 << 3);
	    } this._finish(tail, length); ret = hex(this._hash); if (raw) {
	        ret = hexToBinaryString(ret);
	    } this.reset(); return ret; };
	    SparkMD5.prototype.reset = function () { this._buff = ""; this._length = 0; this._hash = [1732584193, -271733879, -1732584194, 271733878]; return this; };
	    SparkMD5.prototype.getState = function () { return { buff: this._buff, length: this._length, hash: this._hash }; };
	    SparkMD5.prototype.setState = function (state) { this._buff = state.buff; this._length = state.length; this._hash = state.hash; return this; };
	    SparkMD5.prototype.destroy = function () { delete this._hash; delete this._buff; delete this._length; };
	    SparkMD5.prototype._finish = function (tail, length) { var i = length, tmp, lo, hi; tail[i >> 2] |= 128 << (i % 4 << 3); if (i > 55) {
	        md5cycle(this._hash, tail);
	        for (i = 0; i < 16; i += 1) {
	            tail[i] = 0;
	        }
	    } tmp = this._length * 8; tmp = tmp.toString(16).match(/(.*?)(.{0,8})$/); lo = parseInt(tmp[2], 16); hi = parseInt(tmp[1], 16) || 0; tail[14] = lo; tail[15] = hi; md5cycle(this._hash, tail); };
	    SparkMD5.hash = function (str, raw) { return SparkMD5.hashBinary(toUtf8(str), raw); };
	    SparkMD5.hashBinary = function (content, raw) { var hash = md51(content), ret = hex(hash); return raw ? hexToBinaryString(ret) : ret; };
	    SparkMD5.ArrayBuffer = function () { this.reset(); };
	    SparkMD5.ArrayBuffer.prototype.append = function (arr) { var buff = concatenateArrayBuffers(this._buff.buffer, arr, true), length = buff.length, i; this._length += arr.byteLength; for (i = 64; i <= length; i += 64) {
	        md5cycle(this._hash, md5blk_array(buff.subarray(i - 64, i)));
	    } this._buff = i - 64 < length ? new Uint8Array(buff.buffer.slice(i - 64)) : new Uint8Array(0); return this; };
	    SparkMD5.ArrayBuffer.prototype.end = function (raw) { var buff = this._buff, length = buff.length, tail = [0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0, 0], i, ret; for (i = 0; i < length; i += 1) {
	        tail[i >> 2] |= buff[i] << (i % 4 << 3);
	    } this._finish(tail, length); ret = hex(this._hash); if (raw) {
	        ret = hexToBinaryString(ret);
	    } this.reset(); return ret; };
	    SparkMD5.ArrayBuffer.prototype.reset = function () { this._buff = new Uint8Array(0); this._length = 0; this._hash = [1732584193, -271733879, -1732584194, 271733878]; return this; };
	    SparkMD5.ArrayBuffer.prototype.getState = function () { var state = SparkMD5.prototype.getState.call(this); state.buff = arrayBuffer2Utf8Str(state.buff); return state; };
	    SparkMD5.ArrayBuffer.prototype.setState = function (state) { state.buff = utf8Str2ArrayBuffer(state.buff, true); return SparkMD5.prototype.setState.call(this, state); };
	    SparkMD5.ArrayBuffer.prototype.destroy = SparkMD5.prototype.destroy;
	    SparkMD5.ArrayBuffer.prototype._finish = SparkMD5.prototype._finish;
	    SparkMD5.ArrayBuffer.hash = function (arr, raw) { var hash = md51_array(new Uint8Array(arr)), ret = hex(hash); return raw ? hexToBinaryString(ret) : ret; };
	    return SparkMD5;	});	});	var lib = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	exports.TdrTools = tdrTools$1;	var RelayProto = tdrTools$1.create(relay_cs_tlv);	exports.RelayProto = RelayProto;	exports.MD5 = md5;	});	unwrapExports(lib);	var lib_1 = lib.TdrTools;	var lib_2 = lib.RelayProto;	var lib_3 = lib.MD5;	var socket = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	//websocket封装	var Socket = /** @class */ (function () {
	    function Socket() {
	        // WebSocket连接
	        this.socket = null;
	        // 封包用的ArrayBuffer
	        this.buff = null;
	        // 封包用的TdrTools.TdrData对象
	        this.tdrData = null;
	        // 解包用的RelayProto.CSRelayMsg对象
	        this.relayProto = null;
	    }
	    //建立websocket连接
	    Socket.prototype.connect = function (_a) {
	        var _this = this;
	        var connectUrl = _a.connectUrl, onOpen = _a.onOpen, onMessage = _a.onMessage, onError = _a.onError, onClose = _a.onClose;
	        this.close();
	        this.socket = new WebSocket(connectUrl);
	        this.socket.binaryType = "arraybuffer";
	        //websocket连接建立成功
	        this.socket.onopen = function () {
	            _this.buff = new ArrayBuffer(512);
	            onOpen && onOpen();
	        };
	        //websocket收到消息
	        this.socket.onmessage = function (e) {
	            if (onMessage) {
	                var data = e.data;
	                if (typeof data === 'string') {
	                    data = JSON.parse(data);
	                }
	                else {
	                    data = _this.dataDecode(data);
	                }
	                onMessage(data);
	            }
	        };
	        //websocket错误
	        this.socket.onerror = function () {
	            _this.close();
	            onError && onError();
	        };
	        //websocket关闭
	        this.socket.onclose = function () {
	            _this.close();
	            onClose && onClose();
	        };
	    };
	    //发送请求
	    Socket.prototype.send = function (msg) {
	        if (this.socket) {
	            msg = this.dataEncode(msg);
	            this.socket.send(msg);
	        }
	    };
	    //数据封包
	    Socket.prototype.dataEncode = function (msg) {
	        var data = this.getTdrData();
	        var ret = msg.packTLV(data, false);
	        if (ret != lib.TdrTools.ErrorType.TDR_NO_ERROR) {
	            console.error("socket data encode failed", ret);
	            return ret;
	        }
	        var newBuff = new ArrayBuffer(data.usedSize);
	        var msgBodyDv = new Uint8Array(newBuff, 0, data.usedSize);
	        msgBodyDv.set(new Uint8Array(data.arrayBuffer.slice(0, data.usedSize)));
	        return newBuff;
	    };
	    //数据解包
	    Socket.prototype.dataDecode = function (data) {
	        var msgBodyTdrData = {
	            arrayBuffer: data,
	            size: data.byteLength,
	            offset: 0,
	            usedSize: 0,
	        };
	        var out_pkg = this.getRelayProto();
	        var ret = out_pkg.unpackTLV(msgBodyTdrData);
	        if (ret != lib.TdrTools.ErrorType.TDR_NO_ERROR) {
	            console.error("socket data decode failed", ret);
	            return ret;
	        }
	        return out_pkg;
	    };
	    Socket.prototype.getTdrData = function () {
	        if (!this.tdrData) {
	            this.tdrData = new lib.TdrTools.TdrData(this.buff, 0);
	        }
	        return this.tdrData;
	    };
	    Socket.prototype.getRelayProto = function () {
	        if (!this.relayProto) {
	            this.relayProto = lib.RelayProto.CSRelayMsg.getNewOne();
	        }
	        return this.relayProto;
	    };
	    //断开websocket连接
	    Socket.prototype.close = function () {
	        if (this.socket) {
	            this.socket.onopen = null;
	            this.socket.onmessage = null;
	            this.socket.onclose = null;
	            this.socket.onerror = null;
	            this.socket.close();
	            this.socket = null;
	        }
	    };
	    return Socket;	}());	exports.default = new Socket();	});	unwrapExports(socket);	var transceiver = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	//收发器	var Transceiver = /** @class */ (function () {
	    function Transceiver() {
	        //0是未连接,1是正在连接,2是连接成功,3是允许发请求
	        this.status = 0;
	        //后台url
	        this.connectUrl = "";
	        //各种回调
	        this.connectSuccCb = null;
	        this.notifyCb = null;
	        this.errorCodeCb = null;
	        this.reconnectCb = null;
	        //请求超时时间
	        this.socketTimer = null;
	        //websocket重连重试次数
	        this.maxConnectRetry = 0;
	        //自增ID
	        this.asyncID = 0;
	        //发送消息队列
	        this.sendQueue = [];
	        //回调Map
	        this.callBackMap = {};
	        //请求超时Map
	        this.timeOutMap = {};
	    }
	    Transceiver.prototype.init = function () {
	        this.status = 0;
	        this.maxConnectRetry = config.default.MaxConnectRetry;
	        this.sendQueue = [];
	        this.callBackMap = {};
	        this.timeOutMap = {};
	    };
	    //建立连接
	    Transceiver.prototype.connect = function (_a) {
	        var _this = this;
	        var connectUrl = _a.connectUrl, connectSuccCb = _a.connectSuccCb, notifyCb = _a.notifyCb, errorCodeCb = _a.errorCodeCb, reconnectCb = _a.reconnectCb;
	        if (this.status == 0) {
	            console.log("websocket connect:", connectUrl);
	            this.status = 1;
	            this.connectUrl = connectUrl;
	            this.connectSuccCb = connectSuccCb;
	            this.notifyCb = notifyCb;
	            this.errorCodeCb = errorCodeCb;
	            this.reconnectCb = reconnectCb;
	            this.checkConnectTimeout();
	            socket.default.connect({
	                connectUrl: connectUrl,
	                onOpen: function () { _this.onOpen(); },
	                onMessage: function (data) { _this.onMessage(data); },
	                onError: function () { _this.onError; },
	                onClose: function () { _this.onClose; }
	            });
	        }
	    };
	    //检查连接是否超时
	    Transceiver.prototype.checkConnectTimeout = function () {
	        var _this = this;
	        clearTimeout(this.socketTimer);
	        this.socketTimer = setTimeout(function () {
	            console.error("websocket connet timeout");
	            _this.closeConn();
	            _this.reconnect();
	        }, config.default.TimeOut);
	    };
	    //重新建立连接
	    Transceiver.prototype.reconnect = function (reset) {
	        if (reset === void 0) { reset = null; }
	        if (reset) {
	            this.maxConnectRetry = config.default.MaxConnectRetry;
	        }
	        if (this.maxConnectRetry < 0) {
	            console.error("websocket reconnect limit, retry max connect");
	            this.reconnectCb(false);
	            return;
	        }
	        if (this.status == 0) {
	            console.log("websocket reconnect:", this.connectUrl);
	            this.reconnectCb(true);
	            this.maxConnectRetry--;
	            this.connect({
	                connectUrl: this.connectUrl,
	                connectSuccCb: this.connectSuccCb,
	                notifyCb: this.notifyCb,
	                errorCodeCb: this.errorCodeCb,
	                reconnectCb: this.reconnectCb,
	            });
	        }
	    };
	    //主动关闭连接
	    Transceiver.prototype.closeConn = function () {
	        console.log("websocket close connect");
	        this.status = 0;
	        socket.default.close();
	    };
	    //连接建立成功
	    Transceiver.prototype.onOpen = function () {
	        console.log("websocket connect success");
	        clearTimeout(this.socketTimer);
	        this.status = 2;
	        this.maxConnectRetry = config.default.MaxConnectRetry;
	    };
	    //收到后台消息
	    Transceiver.prototype.onMessage = function (data) {
	        if (data.tws_notify_type) {
	            //连接建立成功
	            if (data.tws_notify_type == 'pass') {
	                this.connectSuccCb && this.connectSuccCb();
	                //服务器主动关闭连接
	            }
	            else if (data.tws_notify_type == 'close') {
	                console.error("websocket server tell close, ", data.detail);
	                this.closeConn();
	            }
	        }
	        else if (data.Head) {
	            //先判断cmd是否要走异常流程
	            var cbKey = data.Head.UserID + "_" + data.Head.AsyncID;
	            if (data.Head.CmdId == lib.RelayProto.cs_cmd.CS_RELAY_MSG_ERROR || data.Head.CmdId == lib.RelayProto.cs_cmd.CS_RELAY_MSG_RELOGIN_NOTIFY || data.Head.CmdId == lib.RelayProto.cs_cmd.CS_RELAY_MSG_STOP_RES) {
	                this.errorCodeCb(data);
	            }
	            if (this.callBackMap[cbKey]) {
	                this.callBackMap[cbKey](data);
	                delete this.callBackMap[cbKey];
	                clearTimeout(this.timeOutMap[cbKey]);
	            }
	            else {
	                this.notifyCb(data);
	            }
	        }
	    };
	    //连接错误
	    Transceiver.prototype.onError = function () {
	        console.log("websocket on error");
	        this.status = 0;
	    };
	    //连接关闭
	    Transceiver.prototype.onClose = function () {
	        console.log("websocket on close");
	        clearTimeout(this.socketTimer);
	        this.status = 0;
	    };
	    //将请求推出队列中
	    Transceiver.prototype.send = function (option, onSucc) {
	        if (onSucc === void 0) { onSucc = null; }
	        this.sendQueue.push({ option: option, onSucc: onSucc });
	        this.triggerSend();
	    };
	    //是否允许真正发送请求
	    Transceiver.prototype.allowSend = function (allow) {
	        if (this.status >= 2) {
	            if (!allow) {
	                this.status = 2;
	            }
	            else {
	                this.status = 3;
	                this.triggerSend();
	            }
	        }
	    };
	    //发送请求
	    Transceiver.prototype.triggerSend = function () {
	        //处理发送队列
	        if (this.status == 3 && this.sendQueue.length > 0) {
	            for (var i = 0; i < 100; i++) {
	                var msgInfo = this.sendQueue.shift();
	                if (!msgInfo) {
	                    break;
	                }
	                this.sendMsg(msgInfo.option, msgInfo.onSucc);
	            }
	        }
	    };
	    //发送请求
	    Transceiver.prototype.sendMsg = function (option, onSucc) {
	        var _this = this;
	        if (onSucc === void 0) { onSucc = null; }
	        var asyncID = ++this.asyncID;
	        var cbKey = option.Head.UserID + "_" + asyncID;
	        option.Head.AsyncID = asyncID;
	        if (typeof onSucc == 'function') {
	            this.callBackMap[cbKey] = onSucc;
	            //请求超时处理
	            this.timeOutMap[cbKey] = setTimeout(function () {
	                console.error("websocket send timeout", option);
	                _this.callBackMap[cbKey]({ timeout: true });
	                delete _this.callBackMap[cbKey];
	                clearTimeout(_this.timeOutMap[cbKey]);
	            }, config.default.TimeOut);
	        }
	        socket.default.send(option);
	    };
	    return Transceiver;	}());	exports.default = new Transceiver();	});	unwrapExports(transceiver);	var statistic = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	var FrameProfile = /** @class */ (function () {
	    function FrameProfile() {
	        this.frameID = 0;
	        this.alreadyPeeked = false; /* 是否被应用取出 */
	        this.inputCount = 0; /* 该帧当前用户的input数量 */
	        this.minInputSeqID = 0; /* 该帧当前用户最小的input seqID */
	        this.maxInputSeqID = 0; /* 该帧当前用户最大的input seqID */
	        this.lastMaxInputSeqID = 0; /* 已收到的最大input seqID */
	        this.lostInputCount = 0; /* 丢失的input数量（乱序算作丢包，算上冗余发包后最终的丢包效果） */
	        this.lostFrameCount = 0; /* 丢失的frame数量（乱序算作丢包，算上冗余发包后最终的丢包效果） */
	        this.recvTickTime = 0; /* recv的时刻 */
	        this.peekTickTime = 0; /* peek的时刻 */
	        this.inputIntervalMS = 0; /* 距上次input的间隔 */
	        this.recvIntervalMS = 0; /* 距上个连续帧recv的间隔 */
	        this.peekIntervalMS = 0; /* 距上帧peek的间隔 */
	        this.recvTimeMS = 0; /* 发送到接收的时间（如果有，取最早的input） */
	        this.peekTimeMS = 0; /* recv到peek的时间 */
	        this.inputQueueLen = 0; /* input时接收队列长度 */
	        this.inputQueueValidLen = 0; /* input时接收队列的有效长度（连续的帧，不含空洞） */
	        this.recvQueueLen = 0; /* recv时接收队列长度 */
	        this.recvQueueValidLen = 0; /* recv时接收队列的有效长度（连续的帧，不含空洞） */
	        this.peekQueueLen = 0; /* peek时接收队列长度 */
	        this.peekQueueValidLen = 0; /* peek时接收队列的有效长度（连续的帧，不含空洞） */
	        this.inputSpeedMS = 0; /* input时刻的测速 */
	        this.recvSpeedMS = 0; /* recv时刻的测速 */
	        this.isLost = 0; /* 是否丢失过 */
	        this.isLoading = 0; /* 是否在加载 */
	    }
	    FrameProfile.prototype.toString = function () {
	        var arr = [this.frameID, this.inputCount, this.minInputSeqID, this.maxInputSeqID,
	            this.lostInputCount, this.lostFrameCount, this.inputIntervalMS, this.recvIntervalMS,
	            this.peekIntervalMS, this.recvTimeMS, this.peekTimeMS, this.inputQueueLen, this.inputQueueValidLen,
	            this.recvQueueLen, this.recvQueueValidLen, this.peekQueueLen, this.peekQueueValidLen,
	            this.inputSpeedMS, this.recvSpeedMS, this.alreadyPeeked ? 1 : 0, this.isLost, this.isLoading
	        ];
	        var str = arr.join(",");
	        // if (str[0] == ",") {
	        //     str = str.substr(1);
	        // }
	        return str;
	    };
	    return FrameProfile;	}());	var InputProfile = /** @class */ (function () {
	    function InputProfile() {
	        this.seqID = 0;
	        this.intputTimeTick = 0; /* input的时刻 */
	        this.intputIntervalMS = 0; /* 距上次input的间隔 */
	        this.queueLen = 0; /* input时接收队列长度 */
	        this.queueValidLen = 0; /* input时接收队列的有效长度（连续的帧，不含空洞） */
	        this.inputSpeedMS = 0; /* input时刻的测速 */
	    }
	    return InputProfile;	}());	var Statistic = /** @class */ (function () {
	    function Statistic() {
	        // 是否开启profile
	        this._enableProfiling = true;
	        // 心跳速度
	        this._heartSpeed = 0;
	        // 心跳记录仪
	        this._heartTimer = {};
	        // 唯一识别字符串
	        this._identifier = "";
	        // FrameProfile列表
	        this._frameProfiles = [];
	        // InputProfile列表
	        this._inputProfiles = [];
	    }
	    // 获得当前时间(单位：毫秒)
	    Statistic.prototype.getTimeTick = function () {
	        return Date.now();
	    };
	    Statistic.prototype.toFrameStr = function () {
	        var ret = ["Ver=1\n"];
	        for (var i = 0; i < this._frameProfiles.length; i++) {
	            var frame = this._frameProfiles[i];
	            if (frame) {
	                ret.push(frame.toString() + "\n");
	            }
	        }
	        return ret.join("");
	    };
	    // 设置profile开关
	    Statistic.prototype.enableProfiling = function (enable) {
	        this._enableProfiling = enable;
	    };
	    // 初始化
	    Statistic.prototype.init = function (svrRoomID, roomID, playerID) {
	        this._identifier = svrRoomID + "_" + roomID + "_" + playerID;
	        this._frameProfiles.length = 0;
	        this._inputProfiles.length = 0;
	        if (config.default.ShowLog) {
	            console.log('--->Statistic.identifier:', this._identifier);
	        }
	    };
	    // 设置心跳周期
	    Statistic.prototype.setHearBeatSpeed = function (delay) {
	        this._heartSpeed = delay;
	        return;
	        if (config.default.ShowLog) {
	            console.log('--->Statistic.heartSpeed:', this._heartSpeed);
	        }
	    };
	    Statistic.prototype.onRecvFrame = function (frameID, inputCount, minInputSeqID, maxInputSeqID, queueLen) {
	        return;
	        if (!this._enableProfiling || frameID < 0) {
	            return;
	        }
	        var frameProfile = new FrameProfile();
	        this._frameProfiles[frameID] = frameProfile;
	        var curTick = this.getTimeTick();
	        frameProfile.frameID = frameID;
	        frameProfile.inputCount = inputCount;
	        frameProfile.minInputSeqID = minInputSeqID;
	        frameProfile.maxInputSeqID = maxInputSeqID;
	        frameProfile.recvTickTime = curTick;
	        frameProfile.peekTickTime = 0;
	        var prevFrameProfile = this._frameProfiles[frameID - 1];
	        if (!prevFrameProfile) {
	            frameProfile.lastMaxInputSeqID = frameProfile.inputCount ? frameProfile.maxInputSeqID : 0;
	            frameProfile.lostFrameCount = 0;
	        }
	        else {
	            if (!frameProfile.inputCount) {
	                frameProfile.lastMaxInputSeqID = prevFrameProfile.lastMaxInputSeqID;
	                frameProfile.lostInputCount = 0;
	            }
	            else {
	                if (!prevFrameProfile.lastMaxInputSeqID) {
	                    frameProfile.lastMaxInputSeqID = frameProfile.maxInputSeqID;
	                    frameProfile.lostInputCount = 0;
	                }
	                else {
	                    frameProfile.lastMaxInputSeqID = Math.max(frameProfile.maxInputSeqID, prevFrameProfile.lastMaxInputSeqID);
	                    frameProfile.lostInputCount = Math.max(frameProfile.minInputSeqID - prevFrameProfile.lastMaxInputSeqID - 1, 0);
	                }
	            }
	        }
	        frameProfile.lostFrameCount = 0;
	        frameProfile.recvIntervalMS = prevFrameProfile ? (curTick - prevFrameProfile.recvTickTime) : 0;
	        frameProfile.peekIntervalMS = 0;
	        frameProfile.recvTimeMS = 0;
	        if (inputCount) {
	            var foundInput = false;
	            var seqID = minInputSeqID;
	            if (seqID > 0 && seqID <= this._inputProfiles.length) {
	                var inputProfile = this._inputProfiles[seqID - 1];
	                if (inputProfile && inputProfile.seqID == seqID) {
	                    foundInput = true;
	                    frameProfile.inputIntervalMS = inputProfile.intputIntervalMS;
	                    frameProfile.recvTimeMS = (curTick - inputProfile.intputTimeTick);
	                    frameProfile.inputQueueLen = inputProfile.queueLen;
	                    frameProfile.inputQueueValidLen = inputProfile.queueValidLen;
	                    frameProfile.inputSpeedMS = inputProfile.inputSpeedMS;
	                }
	            }
	            if (!foundInput) {
	                frameProfile.inputCount = 0;
	            }
	        }
	        frameProfile.peekTimeMS = 0;
	        frameProfile.recvQueueLen = queueLen;
	        frameProfile.recvQueueValidLen = queueLen;
	        frameProfile.peekQueueLen = 0;
	        frameProfile.peekQueueValidLen = 0;
	        frameProfile.recvSpeedMS = this._heartSpeed;
	    };
	    Statistic.prototype.onPopFrame = function (frameID, queueLen) {
	        return;
	        if (!this._enableProfiling || frameID < 0 || frameID >= this._frameProfiles.length) {
	            return;
	        }
	        var frameProfile = this._frameProfiles[frameID];
	        var curTick = this.getTimeTick();
	        frameProfile.alreadyPeeked = true;
	        frameProfile.peekTickTime = curTick;
	        frameProfile.peekTimeMS = (curTick - frameProfile.recvTickTime) || 0;
	        frameProfile.peekQueueLen = queueLen;
	        frameProfile.peekQueueValidLen = queueLen;
	        var prevFrameProfile = this._frameProfiles[frameID - 1];
	        if (prevFrameProfile) {
	            frameProfile.peekIntervalMS = (curTick - prevFrameProfile.peekTickTime) || 0;
	        }
	    };
	    Statistic.prototype.onSendInput = function (seq, queueLen) {
	        return;
	        if (!this._enableProfiling) {
	            return;
	        }
	        var seqIdx = seq - 1; // because seq is [1, n)
	        var inputProfile = new InputProfile();
	        this._inputProfiles[seq - 1] = inputProfile;
	        var curTick = this.getTimeTick();
	        inputProfile.seqID = seq;
	        inputProfile.intputTimeTick = curTick;
	        var prevInputProfile = this._inputProfiles[seqIdx - 1];
	        inputProfile.intputIntervalMS = prevInputProfile ? (curTick - prevInputProfile.intputTimeTick) : 0;
	        inputProfile.queueLen = queueLen;
	        inputProfile.queueValidLen = queueLen;
	        inputProfile.inputSpeedMS = this._heartSpeed;
	    };
	    Statistic.prototype.onLogout = function () {
	        return;
	        if (!this._enableProfiling) {
	            return;
	        }
	        var timeStr = new Date().toLocaleString();
	        var frameProfileFileName = "frame_profile_" + this._identifier + "_" + timeStr + ".dat";
	        var inputProfileFileName = "input_profile_" + this._identifier + "_" + timeStr + ".dat";
	        if (config.default.ShowLog) {
	            console.log("--->inputProfiles:", this._inputProfiles);
	            console.log("--->frameProfiles:", this._frameProfiles);
	            console.error("--->frameFileName:", frameProfileFileName);
	            console.error(this.toFrameStr());
	            localStorage.setItem("frame_profile", this.toFrameStr());
	        }
	    };
	    return Statistic;	}());	exports.default = new Statistic();	});	unwrapExports(statistic);	var timer = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	// 定时器类	var Timer = /** @class */ (function () {
	    function Timer() {
	        // 帧间隔时间(单位: 毫秒)
	        this.frameIntervalMS = 60;
	        // 当前帧号
	        this.curFrameID = 0;
	        // 自增定时器ID
	        this.timerID = 0;
	        // timer定时器, 按timerID为key
	        this.timerMap = {};
	        // 定时器中心状态. 
	        this.status = 2 /* STOP */;
	    }
	    // 初始化
	    Timer.prototype.init = function (frameIntervalMS) {
	        this.resume();
	        this.frameIntervalMS = frameIntervalMS;
	        this.curFrameID = 0;
	        this.timerID = 0;
	        this.timerMap = {};
	        console.log("timer init success");
	    };
	    // 恢复定时器
	    Timer.prototype.resume = function () {
	        this.status = 1 /* RUNNING */;
	    };
	    // 停止定时器
	    Timer.prototype.stop = function () {
	        this.status = 2 /* STOP */;
	    };
	    // 清空所有定时器
	    Timer.prototype.clear = function () {
	        this.stop();
	        this.timerMap = {};
	    };
	    // 设置定时器
	    // @param callFunc: 回调函数
	    // @param interval: 间隔时间(单位：毫秒)
	    // @param repeat: 重复次数，默认为1
	    // @param delay: 延迟时间(单位：毫秒)
	    // @return timerID: 定时器ID
	    Timer.prototype.startTimer = function (callFunc, interval, repeat, delay) {
	        if (repeat === void 0) { repeat = 1; }
	        if (delay === void 0) { delay = 0; }
	        this.timerID++;
	        var startFrameID = this.curFrameID + Math.ceil(delay / this.frameIntervalMS);
	        var endFrameID = startFrameID + Math.ceil(interval / this.frameIntervalMS);
	        var timerInfo = { callFunc: callFunc, interval: interval, repeat: repeat, startFrameID: startFrameID, endFrameID: endFrameID, count: 0 };
	        this.timerMap[this.timerID] = timerInfo;
	        return this.timerID;
	    };
	    // 删除定时器
	    // @param timerID: 定时器ID
	    // @return ret: 成功或失败
	    Timer.prototype.stopTimer = function (timerID) {
	        if (timerID && this.timerMap[timerID]) {
	            delete this.timerMap[timerID];
	            return true;
	        }
	        else {
	            return false;
	        }
	    };
	    // 触发定时器回调
	    Timer.prototype.update = function (frameID) {
	        this.curFrameID = frameID;
	        if (this.status != 1 /* RUNNING */) {
	            return;
	        }
	        var delIDList = [];
	        for (var timerID in this.timerMap) {
	            var timerInfo = this.timerMap[timerID];
	            if (this.curFrameID >= timerInfo.endFrameID) {
	                timerInfo.callFunc && timerInfo.callFunc();
	                timerInfo.count++;
	                if (timerInfo.count < timerInfo.repeat) {
	                    var next = timerInfo.interval * (timerInfo.count + 1) / this.frameIntervalMS;
	                    timerInfo.endFrameID = timerInfo.startFrameID + Math.ceil(next);
	                }
	                else {
	                    delIDList.push(timerID);
	                }
	            }
	        }
	        for (var i = 0, len = delIDList.length; i < len; i++) {
	            var timerID = delIDList[i];
	            delete this.timerMap[timerID];
	        }
	    };
	    return Timer;	}());	exports.default = new Timer();	});	unwrapExports(timer);	var util = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	// 工具类	var Util = /** @class */ (function () {
	    function Util() {
	        // 随机数种子
	        this.seed = 1;
	        // 房间号
	        this.svrRoomID = 1;
	        // 本地存储的key
	        this.localStorageKey = "lockStepKey";
	    }
	    Util.prototype.init = function (svrRoomIDStr) {
	        var svrRoomID = +(svrRoomIDStr.slice(-9));
	        console.log("--->util.init, svrRoomID:", svrRoomID);
	        this.svrRoomID = svrRoomID;
	        this.seed = svrRoomID % 1000000;
	    };
	    // 获取随机数，取值为0 - 1
	    Util.prototype.random = function () {
	        this.seed = (this.seed * 9301 + 49297) % 233280;
	        var rand = this.seed / 233280.0;
	        return rand;
	    };
	    // 保存游戏快照
	    // @param gameData: 保存的游戏数据
	    // @param gameFrameID: 对应的帧序号
	    Util.prototype.saveGameData = function (gameData, gameFrameID) {
	        var savedData = {
	            gameData: gameData,
	            gameFrameID: gameFrameID,
	            svrRoomID: this.svrRoomID,
	            seed: this.seed,
	        };
	        return localStorage.setItem(this.localStorageKey, JSON.stringify(savedData));
	    };
	    // 加载游戏快照
	    // @return gameData: 所保存的游戏数据
	    Util.prototype.loadGameData = function () {
	        var str = localStorage.getItem(this.localStorageKey);
	        if (str) {
	            var savedData = JSON.parse(str);
	            if (savedData.svrRoomID != this.svrRoomID) {
	                return null;
	            }
	            this.seed = savedData.seed;
	            return {
	                gameData: savedData.gameData,
	                gameFrameID: savedData.gameFrameID,
	            };
	        }
	        else {
	            return null;
	        }
	    };
	    // for debug
	    Util.prototype.setSeed = function (seed) {
	        this.seed = seed;
	    };
	    Util.prototype.getSeed = function () {
	        return this.seed;
	    };
	    return Util;	}());	exports.default = new Util();	});	unwrapExports(util);	var framecache = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	// 数据帧中的单个玩家数据	var RelayData = /** @class */ (function () {
	    function RelayData() {
	        this.userID = "0"; // 玩家ID
	        this.statusFlag = true; // 玩家在线状态, true表示在线       
	        this.data = ""; // 自定义的数据
	        this.seqID = 0; // 序号
	        this.inputMS = 0; // input发出到收到返回数据的时间.(毫秒)
	        this.popMS = 0; // 收到返回数据到游戏pop出的时间.(毫秒)
	    }
	    return RelayData;	}());	// 数据帧	var RelayFrame = /** @class */ (function () {
	    function RelayFrame() {
	        this.frameID = 0; // 帧序号
	        this.tickMS = 0; // 当前帧与上一帧的间隔时间.(毫秒)
	        this.lagFrameNum = 0; // 滞后的帧数量
	        this.timeStamp = 0; // 服务器时间戳
	        this.dataList = []; // 玩家数据列表
	    }
	    return RelayFrame;	}());	// 帧缓存区	var FrameCache = /** @class */ (function () {
	    function FrameCache() {
	        this.popTimeout = null; // pop的倒计时
	        this.playerID = 0; // 本玩家ID
	        this.idMap = {};
	        this.frameList = []; // 当前存储的帧列表
	        this.curFrameID = 0; // 当前待提取的帧号
	        this.curNetFrameID = 0; // 当前已收到的网络包最大帧号
	        this.curSyncHoleID = 0; // 当前已Sync的空洞帧号
	        this.nextHoleID = 0; // 下一个空洞的帧号
	        // input的时间Map
	        this.inputTimeMap = {};
	    }
	    // //请求超时Map
	    // timeOutMap = {};
	    // //请求超时回调Map
	    // callBackMap = {};
	    FrameCache.prototype.init = function (playerID, idMap) {
	        this.playerID = playerID;
	        this.idMap = idMap;
	        this.frameList = [];
	        // 帧序号相关
	        this.curFrameID = 0;
	        this.curNetFrameID = 0;
	        this.curSyncHoleID = 0;
	        this.nextHoleID = 0;
	        // this.timeOutMap = {};
	        // this.callBackMap = {};
	    };
	    FrameCache.prototype.setStartFrame = function (start) {
	        if (start > this.curFrameID) {
	            for (var i = 0; i < start - this.curFrameID; i++) {
	                if (this.frameList.length > 0) {
	                    this.frameList.shift();
	                }
	                else {
	                    break;
	                }
	            }
	            this.curFrameID = start;
	            this.nextHoleID = start;
	        }
	        this.resetHole();
	    };
	    FrameCache.prototype.addFrame = function (frame, tick) {
	        if (frame.FrameId < this.curFrameID) {
	            console.log("--->old Frame, need to drop", frame.FrameId);
	            return;
	        }
	        if (this.frameExists(frame.FrameId)) {
	            console.log("--->duplicate frame, need to drop", frame.FrameId);
	            return;
	        }
	        if (frame.FrameId > this.curNetFrameID) {
	            this.curNetFrameID = frame.FrameId;
	        }
	        if (frame.FrameId == this.nextHoleID) {
	            do {
	                this.nextHoleID++;
	                if (!this.frameExists(this.nextHoleID)) {
	                    break;
	                }
	            } while (true);
	        }
	        if (this.curSyncHoleID < this.nextHoleID) {
	            this.curSyncHoleID = this.nextHoleID;
	        }
	        // 统计相关
	        var inputCount = 0;
	        var minInputSeqID = 0;
	        var maxInputSeqID = 0;
	        for (var i = 0; i < frame.Count; i++) {
	            var relayData = frame.RelayData[i];
	            if (relayData.ObjectId == this.playerID && relayData.Sequance > 0) {
	                if (inputCount == 0) {
	                    minInputSeqID = relayData.Sequance;
	                    maxInputSeqID = relayData.Sequance;
	                }
	                else {
	                    minInputSeqID = Math.min(relayData.Sequance, minInputSeqID);
	                    maxInputSeqID = Math.max(relayData.Sequance, maxInputSeqID);
	                }
	                inputCount++;
	            }
	        }
	        var queueLen = this.frameList.length;
	        statistic.default.onRecvFrame(frame.FrameId, inputCount, minInputSeqID, maxInputSeqID, queueLen);
	        // 将数据帧加入帧缓冲区
	        var frameInfo = this.genFrameInfo(frame, tick);
	        this.frameList[frame.FrameId - this.curFrameID] = frameInfo;
	        return frameInfo;
	    };
	    FrameCache.prototype.genFrameInfo = function (frame, tick) {
	        var frameInfo = new RelayFrame();
	        frameInfo.frameID = frame.FrameId;
	        frameInfo.tickMS = tick;
	        if (frame.TimeStamp) {
	            frameInfo.timeStamp = +frame.TimeStamp.toString();
	        }
	        frameInfo.dataList = [];
	        for (var i = 0; i < frame.Count; i++) {
	            var relayData = frame.RelayData[i];
	            var data = new RelayData();
	            var userID = relayData.ObjectId + "";
	            if (this.idMap[userID]) {
	                userID = this.idMap[userID];
	            }
	            data.userID = userID;
	            data.data = relayData.RelayBuf.substr(0, relayData.RelayLen);
	            data.seqID = relayData.Sequance;
	            data.statusFlag = !!relayData.UserStatusFlag;
	            if (this.inputTimeMap[data.seqID]) {
	                var getTime = Date.now();
	                data.inputMS = getTime - this.inputTimeMap[data.seqID];
	                this.inputTimeMap[data.seqID] = getTime;
	            }
	            // //清掉需要重试的方法和timer
	            // if (this.callBackMap[relayData.Sequance]) {
	            //     delete this.callBackMap[relayData.Sequance];
	            //     clearInterval(this.timeOutMap[relayData.Sequance]);
	            //     this.timeOutMap[relayData.Sequance] = null;
	            // }
	            frameInfo.dataList.push(data);
	        }
	        return frameInfo;
	    };
	    FrameCache.prototype.popFrame = function () {
	        if (this.frameList.length == 0 || !this.frameList[0]) {
	            return null;
	        }
	        else {
	            var frameInfo = this.frameList.shift();
	            frameInfo.lagFrameNum = this.curNetFrameID - this.curFrameID;
	            for (var i = 0; i < frameInfo.dataList.length; i++) {
	                var data = frameInfo.dataList[i];
	                if (this.inputTimeMap[data.seqID]) {
	                    var popTime = Date.now();
	                    data.popMS = popTime - this.inputTimeMap[data.seqID];
	                    delete this.inputTimeMap[data.seqID];
	                }
	            }
	            timer.default.update(frameInfo.frameID);
	            statistic.default.onPopFrame(frameInfo.frameID, this.frameList.length);
	            this.setPopTimeout();
	            this.curFrameID++;
	            return frameInfo;
	        }
	    };
	    FrameCache.prototype.setPopTimeout = function () {
	        var _this = this;
	        clearInterval(this.popTimeout);
	        this.popTimeout = setInterval(function () {
	            _this.resetHole();
	        }, 2000);
	    };
	    FrameCache.prototype.frameExists = function (frameID) {
	        return frameID >= this.curFrameID
	            && frameID < this.curFrameID + this.frameList.length
	            && this.frameList[frameID - this.curFrameID];
	    };
	    FrameCache.prototype.needSyncFrame = function () {
	        if (this.curSyncHoleID >= Math.min(this.curNetFrameID, this.curFrameID + config.default.SyncForwardFrameNum)) {
	            return null;
	        }
	        if (this.nextHoleID < this.curFrameID) {
	            this.nextHoleID = this.curFrameID;
	        }
	        if (this.curSyncHoleID < this.nextHoleID) {
	            this.curSyncHoleID = this.nextHoleID;
	        }
	        var begin = -1, end = -1;
	        var startID = this.curSyncHoleID, endID = this.curSyncHoleID + config.default.MaxSyncFrameCount;
	        for (var id = startID; id < endID; id++) {
	            if (id > this.curNetFrameID) {
	                break;
	            }
	            this.curSyncHoleID = id + 1;
	            if (!this.frameExists(id)) {
	                if (begin == -1) {
	                    begin = id;
	                }
	                end = id;
	            }
	            else {
	                if (begin == -1) {
	                    continue;
	                }
	                else {
	                    break;
	                }
	            }
	        }
	        if (begin != -1) {
	            return { begin: begin, end: end };
	        }
	        else {
	            return null;
	        }
	    };
	    FrameCache.prototype.sendInput = function (seqID) {
	        this.inputTimeMap[seqID] = Date.now();
	        statistic.default.onSendInput(seqID, this.frameList.length);
	    };
	    // addInputRetry({sequance, callback}) {
	    //     this.callBackMap[sequance] = callback;
	    //     //请求超时处理
	    //     this.timeOutMap[sequance] = setInterval(()=>{
	    //         console.error("relay input timeout ", sequance);
	    //         this.callBackMap[sequance]();
	    //     }, Config.TimeOut);
	    // }
	    // clearAllRetry(){
	    //     for (let i in this.timeOutMap) {
	    //         delete this.callBackMap[i];
	    //         clearInterval(this.timeOutMap[i]);
	    //         this.timeOutMap[i] = null;
	    //     }
	    // }
	    FrameCache.prototype.resetHole = function () {
	        this.curSyncHoleID = this.nextHoleID;
	    };
	    FrameCache.prototype.saveGameData = function (gameData) {
	        return util.default.saveGameData(gameData, this.curFrameID);
	    };
	    FrameCache.prototype.loadGameData = function () {
	        var ret = util.default.loadGameData();
	        if (ret) {
	            this.setStartFrame(ret.gameFrameID);
	            return ret.gameData;
	        }
	        else {
	            return null;
	        }
	    };
	    return FrameCache;	}());	exports.default = new FrameCache();	});	unwrapExports(framecache);	var relaysvr = createCommonjsModule(function (module, exports) {	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);	};	Object.defineProperty(exports, "__esModule", { value: true });	var Relay = /** @class */ (function () {
	    function Relay() {
	        //心跳interval
	        this.HBInterval = null;
	        //心跳超时计时器
	        this.HBTimeout = null;
	        //模拟发空帧计时器
	        this.IBTimeout = null;
	        //cmd对应回包字段
	        this.cmdToBody = {
	            184: 'CSRelayMsgHeartBeatReq',
	            161: 'RelayLoginReq',
	            163: 'RelayStartReq',
	            186: 'RelayBroadCastReq',
	            165: 'RelayInputing',
	            168: 'RelaySyncReq',
	        };
	        //自己的用户信息
	        this.userInfo = {
	            uid: "",
	            openId: "",
	            accessToken: "",
	            //1是wechat,2是qq
	            loginType: 1,
	            //0是ios,1是android
	            platform: 1,
	            // 用户信息
	            userAccessInfo: {
	                access_ip: [],
	                broadcast_to_self: "1",
	                dwTcpEncMethod: "0",
	                dwTcpKeyMethod: "0",
	                dwUdpEncMethod: "0",
	                dwUdpKeyMethod: "0",
	                frame_interval_ms: "60",
	                m_client_duplicate_count_by_gamesvr: "0",
	                m_duplicate_broadcast_count: "0",
	                m_duplicate_input_count: "0",
	                m_svr_roomid: "0",
	                need_frame_0: "1",
	                room_id: "0",
	                server_id: "0",
	                tcp_access_ip: [],
	                user_id: "",
	                user_id_key: "",
	                user_openid: "",
	            },
	            //帧同步后台登录用的校验码
	            sigBuf: "",
	        };
	        //所有玩家的信息，以黑黑ID为key
	        this.allUserInfo = {};
	        //帧同步userid转黑黑userid，以帧同步ID为key
	        this.idMap = {};
	        //房间信息
	        this.gameRouteInfo = {};
	        //自增广播 ID
	        this.gBroadcastSeqID = 1;
	        //自增input ID
	        this.gInputSeqID = 1;
	        //连接成功回调
	        this.onInit = null;
	        //游戏开始回调
	        this.onGameStart = null;
	        //广播回调
	        this.onBroadcast = null;
	        //lockstep连接错误回调
	        this.onError = null;
	        //第一次登录
	        this.firstLogin = true;
	        //上次数据帧的tick时刻
	        this.lastDataFrameTick = 0;
	        //上次广播的tick时刻
	        this.lastBroadcastTick = 0;
	        //是否准备完毕
	        this.isReady = false;
	        //是否游戏开始
	        this.isStart = false;
	        // login锁
	        this.loginLock = false;
	        // 心跳间隔
	        this.heartBeatInterval = 0;
	        // 帧间隔时间
	        this.frameIntervalMS = 0;
	        // 平均的帧间隔时间
	        this.lastTickDiff = 60;
	        // roomData game sdk传入的 data
	        this.roomData = null;
	    }
	    Relay.prototype.init = function (_a) {
	        var _this = this;
	        var roomData = _a.roomData, onInit = _a.onInit, onGameStart = _a.onGameStart, onBroadcast = _a.onBroadcast, onError = _a.onError;
	        //初始化数据
	        this.gBroadcastSeqID = 1;
	        this.gInputSeqID = 1;
	        this.firstLogin = true;
	        //连接成功回调
	        this.onInit = onInit;
	        this.onGameStart = onGameStart;
	        this.onBroadcast = onBroadcast;
	        this.onError = onError;
	        this.roomData = roomData;
	        //连接帧同步后台所需参数，需要走客户端接口拉取
	        this.formatData(roomData);
	        // 初始化缓存区
	        framecache.default.init(+this.userInfo.userAccessInfo.user_id, this.idMap);
	        // 初始化定时器
	        this.frameIntervalMS = +this.userInfo.userAccessInfo.frame_interval_ms;
	        timer.default.init(this.frameIntervalMS);
	        // 初始化Util工具, 设置随机数种子
	        util.default.init(this.userInfo.userAccessInfo.m_svr_roomid);
	        //收发器初始化
	        transceiver.default.init();
	        transceiver.default.connect({
	            connectUrl: this.genRelaySvrUrl(),
	            connectSuccCb: function () { _this.heartBeat(); },
	            notifyCb: function (res) { _this.notifyCb(res); },
	            errorCodeCb: function (res) { _this.errorCodeCb(res); },
	            reconnectCb: function (res) { _this.reconnectCb(res); }
	        });
	    };
	    //数据整理
	    Relay.prototype.formatData = function (data) {
	        //自己的用户信息
	        this.userInfo = data.userInfo;
	        if (data.allUserInfo) {
	            this.allUserInfo = data.allUserInfo;
	        }
	        if (data.idMap) {
	            this.idMap = data.idMap;
	        }
	        if (data.gameRouteInfo) {
	            this.gameRouteInfo = data.gameRouteInfo;
	        }
	        // if (data.matchResult) {
	        //     //所有玩家的信息
	        //     for (let i = 0, len = data.matchResult.userList.length; i < len; i++) {
	        //         let item = data.matchResult.userList[i];
	        //         this.allUserInfo[item.uid] = {
	        //             uid: item.uid,
	        //             campId: item.campId,
	        //             isAi: item.isAi,
	        //             gradeScore: item.gradeScore,
	        //         }
	        //     }
	        // }
	        // if (data.battleInfo) {
	        //     //所有玩家的accessInfo
	        //     for (let i = 0, len = data.battleInfo.userAccessInfoList.length; i < len; i++) {
	        //         let item = data.battleInfo.userAccessInfoList[i];
	        //         this.allUserInfo[item.uid]["lockstepPlayerId"] = item.lockstepPlayerId;
	        //         this.idMap[item.lockstepPlayerId] = item.uid;
	        //         if (this.userInfo.uid == item.uid) {
	        //             let userAccessInfo = JSON.parse(item.userAccessInfo);
	        //             this.userInfo["userAccessInfo"] = userAccessInfo.info;
	        //         }
	        //     }
	        //     //房间信息
	        //     this.gameRouteInfo = data.battleInfo.battleAccessInfo.gameRouteInfo;
	        //     this.gameRouteInfo["returnInfo"] = data.returnInfo;
	        //     this.gameRouteInfo["battleId"] = data.battleInfo.battleId;
	        // }
	    };
	    //获取帧同步url
	    Relay.prototype.genRelaySvrUrl = function () {
	        var host = this.userInfo.userAccessInfo.tcp_access_ip[0];
	        var openid = this.userInfo.openId;
	        var access_token = this.userInfo.accessToken;
	        var appid = '';
	        var accountType = 0;
	        var devicePlatform = 0;
	        //登录的1是wechat,2是qq
	        if (this.userInfo.loginType == 1) {
	            accountType = 4098;
	            appid = config.default.WXAppid;
	        }
	        else {
	            accountType = 4099;
	            appid = config.default.QQAppid;
	        }
	        //登录的0是ios,1是android
	        if (this.userInfo.platform == 0) {
	            devicePlatform = 102;
	        }
	        else {
	            devicePlatform = 101;
	        }
	        host += "?account_value=" + openid + "&account_type=" + accountType + "&token=" + access_token + "&appid=" + appid + "&client_type=" + devicePlatform;
	        return host;
	    };
	    //调用收发器发送请求
	    Relay.prototype.send = function (_a) {
	        var cmd = _a.cmd, body = _a.body, _b = _a.cb, cb = _b === void 0 ? null : _b;
	        //通用请求头
	        var msgHead = lib.RelayProto.CSRelayMsgHead.getNewOne();
	        msgHead.UserID = this.userInfo.userAccessInfo.user_id;
	        msgHead.RoomID = this.userInfo.userAccessInfo.room_id;
	        msgHead.Version = 1;
	        msgHead.CmdId = cmd;
	        //通用请求体
	        var msgBody = lib.RelayProto.CSRelayMsgBody.getNewOne();
	        msgBody[this.cmdToBody[cmd]] = body;
	        //完整请求
	        var msg = lib.RelayProto.CSRelayMsg.getNewOne();
	        msg.Head = msgHead;
	        msg.Body = msgBody;
	        //心跳和登录直接发送，不走队列
	        if (cmd == lib.RelayProto.cs_cmd.CS_RELAY_MSG_HEART_BEAT_REQ || cmd == lib.RelayProto.cs_cmd.CS_RELAY_MSG_LOGIN_REQ) {
	            transceiver.default.sendMsg(msg, cb);
	        }
	        else {
	            transceiver.default.send(msg, cb);
	        }
	    };
	    //开始发送心跳包
	    Relay.prototype.startHeartBeat = function () {
	        var _this = this;
	        console.log('relay start heartbeat');
	        clearTimeout(this.HBTimeout);
	        clearInterval(this.HBInterval);
	        this.HBInterval = setInterval(function () {
	            var beginTime = Date.now();
	            _this.heartBeat().then(function () {
	                var endTime = Date.now();
	                var diffTime = endTime - beginTime;
	                _this.heartBeatInterval = diffTime;
	                console.log("--->HeartBeat", _this.heartBeatInterval);
	                statistic.default.setHearBeatSpeed(diffTime);
	            });
	        }, config.default.HeartBeat);
	    };
	    //发送心跳包
	    Relay.prototype.heartBeat = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.checkHBTimeout();
	            var cmd = lib.RelayProto.cs_cmd.CS_RELAY_MSG_HEART_BEAT_REQ;
	            var body = lib.RelayProto.CSRelayMsgHeartBeatReq.getNewOne();
	            _this.send({
	                cmd: cmd,
	                body: body,
	                cb: function (res) {
	                    if (config.default.ShowLog) {
	                        console.log('relay send heartBeat cb');
	                    }
	                    if (!res.timeout) {
	                        clearTimeout(_this.HBTimeout);
	                    }
	                    resolve();
	                }
	            });
	        });
	    };
	    //检查心跳是否超时
	    Relay.prototype.checkHBTimeout = function () {
	        var _this = this;
	        clearTimeout(this.HBTimeout);
	        this.HBTimeout = setTimeout(function () {
	            console.log('relay heartBeat timeout');
	            _this.doReconnect(false);
	        }, config.default.TimeOut);
	    };
	    //玩家登录
	    Relay.prototype.login = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            if (_this.loginLock) {
	                return;
	            }
	            _this.loginLock = true;
	            setTimeout(function () {
	                _this.loginLock = false;
	            }, config.default.LoginLockTimeout);
	            _this.checkHBTimeout();
	            var cmd = lib.RelayProto.cs_cmd.CS_RELAY_MSG_LOGIN_REQ;
	            var body = lib.RelayProto.CSRelayMsgLoginReq.getNewOne();
	            body.SigBuf = _this.userInfo.sigBuf;
	            _this.lastBroadcastTick = Date.now();
	            _this.lastDataFrameTick = Date.now();
	            _this.send({
	                cmd: cmd,
	                body: body,
	                cb: function (res) {
	                    if (config.default.ShowLog) {
	                        console.log('relay send login cb');
	                    }
	                    if (res.timeout) {
	                        return;
	                    }
	                    clearTimeout(_this.HBTimeout);
	                    //设置允许发送请求
	                    transceiver.default.allowSend(true);
	                    var reserve = res.Body.RelayLoginRes.Reserve;
	                    var lastInputSeqID = (reserve & 0xFFFF0000) >> 16;
	                    var lastBroadcastSeqID = reserve & 0x0000FFFF;
	                    _this.gInputSeqID = lastInputSeqID;
	                    _this.gBroadcastSeqID = lastBroadcastSeqID;
	                    // console.log("---->inputSeqID,", reserve, this.gInputSeqID, this.gBroadcastSeqID);
	                    if (_this.firstLogin) {
	                        _this.firstLogin = false;
	                        _this.onInit(__assign({}, _this.roomData, { userInfo: _this.userInfo, allUserInfo: _this.allUserInfo, gameRouteInfo: _this.gameRouteInfo }));
	                    }
	                    _this.startHeartBeat();
	                    // FrameCache.clearAllRetry();
	                    framecache.default.resetHole();
	                    framecache.default.setPopTimeout();
	                    resolve();
	                }
	            });
	        });
	    };
	    //玩家准备
	    Relay.prototype.ready = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            var cmd = lib.RelayProto.cs_cmd.CS_RELAY_MSG_START_REQ;
	            var body = lib.RelayProto.CSRelayMsgStartReq.getNewOne();
	            body.NeedSeek = 0;
	            body.SeekFrameID = 0;
	            _this.send({
	                cmd: cmd,
	                body: body,
	                cb: function (res) {
	                    if (config.default.ShowLog) {
	                        console.log('relay send start cb');
	                    }
	                    if (res.timeout) {
	                        return;
	                    }
	                    framecache.default.setStartFrame(res.Body.RelayStartRes.BeginFrameID);
	                    _this.isReady = true;
	                    resolve();
	                }
	            });
	        });
	    };
	    //玩家广播
	    Relay.prototype.broadcast = function (msg) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            var cmd = lib.RelayProto.cs_cmd.CS_RELAY_MSG_BROADCAST_REQ;
	            var body = lib.RelayProto.CSRelayInput.getNewOne();
	            var relayData = lib.RelayProto.CSRelayData.getNewOne();
	            relayData.ObjectId = _this.userInfo.userAccessInfo.user_id;
	            relayData.RelayLen = msg.length;
	            relayData.RelayBuf = msg;
	            relayData.UserStatusFlag = 1;
	            relayData.Sequance = _this.generateBroadcastSeqID();
	            body.RelayData = relayData;
	            _this.send({
	                cmd: cmd,
	                body: body,
	            });
	            resolve();
	        });
	    };
	    //玩家帧同步发送
	    Relay.prototype.input = function (msg, retry) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            _this.startInputBlank();
	            var cmd = lib.RelayProto.cs_cmd.CS_RELAY_MSG_INPUTING;
	            var body = lib.RelayProto.CSRelayInput.getNewOne();
	            var relayData = lib.RelayProto.CSRelayData.getNewOne();
	            relayData.ObjectId = _this.userInfo.userAccessInfo.user_id;
	            relayData.RelayLen = msg.length;
	            relayData.RelayBuf = msg;
	            relayData.UserStatusFlag = 1;
	            relayData.Sequance = _this.generateInputSeqID();
	            body.RelayData = relayData;
	            framecache.default.sendInput(relayData.Sequance);
	            // //需要重试的请求
	            // if (retry) {
	            //     FrameCache.addInputRetry({
	            //         sequance: relayData.Sequance,
	            //         callback: ()=>{
	            //             this.send({cmd: cmd,body: body});
	            //         }
	            //     });
	            // }
	            _this.send({
	                cmd: cmd,
	                body: body,
	            });
	            resolve();
	        });
	    };
	    Relay.prototype.startInputBlank = function () {
	        var _this = this;
	        clearInterval(this.IBTimeout);
	        this.IBTimeout = setInterval(function () {
	            _this.input("");
	        }, config.default.InputTimeout);
	    };
	    Relay.prototype.popFrame = function () {
	        if (this.isReady) {
	            this.checkSyncFrame();
	            return framecache.default.popFrame();
	        }
	        else {
	            return null;
	        }
	    };
	    // 检查是否需要补帧
	    Relay.prototype.checkSyncFrame = function () {
	        for (var i = 0; i < config.default.MaxSyncLoopCount; i++) {
	            var ret = framecache.default.needSyncFrame();
	            if (!ret) {
	                break;
	            }
	            this.syncFrame(ret.begin, ret.end);
	        }
	    };
	    // 补帧
	    Relay.prototype.syncFrame = function (begin, end) {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            var cmd = lib.RelayProto.cs_cmd.CS_RELAY_MSG_SYNC_REQ;
	            var body = lib.RelayProto.CSRelayMsgSyncReq.getNewOne();
	            body.FrameIdBegin = begin;
	            body.FrameIdEnd = end;
	            // console.log("--->syncFrame", begin, end);
	            _this.send({
	                cmd: cmd,
	                body: body,
	            });
	            resolve();
	        });
	    };
	    //关闭帧同步
	    Relay.prototype.close = function () {
	        var _this = this;
	        return new Promise(function (resolve, reject) {
	            clearTimeout(_this.HBTimeout);
	            clearInterval(_this.HBInterval);
	            transceiver.default.closeConn();
	            statistic.default.onLogout();
	            resolve();
	        });
	    };
	    // 保存游戏快照
	    Relay.prototype.saveGameData = function (gameData) {
	        return framecache.default.saveGameData(gameData);
	    };
	    // 加载游戏快照
	    Relay.prototype.loadGameData = function () {
	        return framecache.default.loadGameData();
	    };
	    //自动生成广播ID
	    Relay.prototype.generateBroadcastSeqID = function () {
	        return ++this.gBroadcastSeqID;
	    };
	    //自动生成帧同步ID
	    Relay.prototype.generateInputSeqID = function () {
	        return ++this.gInputSeqID;
	    };
	    //重连回调
	    Relay.prototype.reconnectCb = function (res) {
	        console.log('relay reconnectCb');
	        // FrameCache.clearAllRetry();
	        framecache.default.resetHole();
	        framecache.default.setPopTimeout();
	        if (!res) {
	            console.log("---->重连超过次数");
	            this.onError("reconnectError");
	        }
	    };
	    //去重连
	    Relay.prototype.doReconnect = function (reset) {
	        console.log("---> relaysvr.doReconnect");
	        if (reset) {
	            if (transceiver.default.status == 0) {
	                this.close();
	                transceiver.default.reconnect(reset);
	            }
	        }
	        else {
	            this.close();
	            transceiver.default.reconnect();
	        }
	    };
	    //错误回调
	    Relay.prototype.errorCodeCb = function (res) {
	        var Body = res.Body, Head = res.Head;
	        switch (Head.CmdId) {
	            case lib.RelayProto.cs_cmd.CS_RELAY_MSG_RELOGIN_NOTIFY: {
	                if (config.default.ShowLog) {
	                    console.log("--->onReloginNotify");
	                }
	                this.onReloginNotify(Body.RelayReloginNotify);
	                break;
	            }
	            case lib.RelayProto.cs_cmd.CS_RELAY_MSG_ERROR: {
	                //todo
	                // FrameCache.clearAllRetry();
	                framecache.default.resetHole();
	                framecache.default.setPopTimeout();
	                console.log('--------->relaysvrrelaysvr', Body.RelayError);
	                if (Body.RelayError.error_code == 78) {
	                    this.close();
	                    this.onError("roomError");
	                }
	                break;
	            }
	            case lib.RelayProto.cs_cmd.CS_RELAY_MSG_STOP_RES: {
	                this.close();
	                console.log("---->服务器主动关闭");
	                this.onError("serverError");
	                break;
	            }
	        }
	    };
	    //通知回调
	    Relay.prototype.notifyCb = function (res) {
	        var Body = res.Body, Head = res.Head;
	        switch (Head.CmdId) {
	            case lib.RelayProto.cs_cmd.CS_RELAY_MSG_BROADCAST_RES: {
	                var data = Body.RelayBroadCastRes;
	                if (data) {
	                    for (var i = 0; i < data.Count; i++) {
	                        var relayFrame = data.RelayData[i];
	                        var newTick = Date.now();
	                        var tickDiff = newTick - this.lastBroadcastTick;
	                        this.lastBroadcastTick = newTick;
	                        var frameInfo = framecache.default.genFrameInfo(relayFrame, tickDiff);
	                        this.onBroadcast && this.onBroadcast(frameInfo);
	                    }
	                }
	                break;
	            }
	            case lib.RelayProto.cs_cmd.CS_RELAY_MSG_LOCKSTEP: {
	                var data = Body.RelayLockStep;
	                if (data) {
	                    for (var i = 0; i < data.Count; i++) {
	                        var relayFrame = data.RelayData[i];
	                        var newTick = Date.now();
	                        var tickDiff = newTick - this.lastDataFrameTick;
	                        this.lastTickDiff = tickDiff;
	                        this.lastDataFrameTick = newTick;
	                        var frameInfo = framecache.default.addFrame(relayFrame, tickDiff);
	                        if (!this.isStart && this.isReady && frameInfo && this.onGameStart) {
	                            this.isStart = true;
	                            this.onGameStart();
	                            this.startInputBlank();
	                        }
	                    }
	                }
	                clearTimeout(this.HBTimeout);
	                break;
	            }
	        }
	    };
	    //重新登录
	    Relay.prototype.onReloginNotify = function (res) {
	        var question = res.Question.toString();
	        var str = "[" + question + "." + this.userInfo.userAccessInfo.user_id_key + "]";
	        this.userInfo.sigBuf = lib.MD5.hash(str, false);
	        this.login();
	    };
	    /**
	     * 返回当前帧率
	     */
	    Relay.prototype.getIntervalFrameMS = function () {
	        return this.frameIntervalMS;
	    };
	    Relay.prototype.getHeartBeatIntervalMS = function () {
	        return this.heartBeatInterval;
	    };
	    Relay.prototype.getPing = function () {
	        var tick = Date.now() - this.lastDataFrameTick;
	        var diff;
	        if (tick >= this.frameIntervalMS) {
	            diff = tick - this.frameIntervalMS;
	        }
	        else {
	            diff = this.lastTickDiff - this.frameIntervalMS;
	        }
	        return Math.max(this.heartBeatInterval + diff, 40);
	    };
	    return Relay;	}());	exports.default = new Relay();	});	unwrapExports(relaysvr);	var lockstep = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	var LockStep = /** @class */ (function () {
	    function LockStep() {
	        //初始化回调
	        this.onInit = null;
	        //游戏开始回调
	        this.onGameStart = null;
	        //广播回调
	        this.onBroadcast = null;
	        //lockstep连接错误
	        this.onError = null;
	    }
	    // 游戏初始化
	    LockStep.prototype.init = function (_a) {
	        var _this = this;
	        var _b = _a.roomData, roomData = _b === void 0 ? null : _b, _c = _a.onInit, onInit = _c === void 0 ? null : _c, _d = _a.onGameStart, onGameStart = _d === void 0 ? null : _d, _e = _a.onBroadcast, onBroadcast = _e === void 0 ? null : _e, _f = _a.onError, onError = _f === void 0 ? null : _f, _g = _a.cfg, cfg = _g === void 0 ? {} : _g;
	        this.onInit = onInit;
	        this.onGameStart = onGameStart;
	        this.onBroadcast = onBroadcast;
	        this.onError = onError;
	        this.updateCfg(cfg);
	        relaysvr.default.init({
	            roomData: roomData,
	            onInit: function (data) { _this.onInit && _this.onInit(data); },
	            onGameStart: function (data) { _this.onGameStart && _this.onGameStart(data); },
	            onBroadcast: function (data) { _this.onBroadcast && _this.onBroadcast(data); },
	            onError: function (data) { _this.onError && _this.onError(data); },
	        });
	    };
	    LockStep.prototype.updateCfg = function (cfg) {
	        // 写日志
	        if (cfg.needWriteClientLog != null) {
	            config.default.ShowLog = cfg.needWriteClientLog;
	        }
	        // 修改房间参数
	        var opt = cfg.roomOption;
	        if (opt != null) {
	            if (opt.frame_interval_ms) {
	                config.default.RoomOption.frame_interval_ms = opt.frame_interval_ms;
	            }
	            if (opt.wait_time) {
	                config.default.RoomOption.wait_time = opt.wait_time;
	            }
	            if (opt.min_user_count) {
	                config.default.RoomOption.min_user_count = opt.min_user_count;
	            }
	            if (opt.room_life_time) {
	                config.default.RoomOption.room_life_time = opt.room_life_time;
	            }
	        }
	    };
	    // 游戏准备
	    LockStep.prototype.ready = function () {
	        return relaysvr.default.ready();
	    };
	    // 发送广播
	    LockStep.prototype.broadcast = function (data) {
	        return relaysvr.default.broadcast(data);
	    };
	    // 发送数据帧
	    LockStep.prototype.input = function (data) {
	        return relaysvr.default.input(data);
	    };
	    // 取帧
	    LockStep.prototype.popFrame = function () {
	        return relaysvr.default.popFrame();
	    };
	    // 返回帧率（单位：毫秒）
	    LockStep.prototype.getFrameIntervalMS = function () {
	        return +relaysvr.default.getIntervalFrameMS();
	    };
	    // 退出房间
	    LockStep.prototype.close = function () {
	        return relaysvr.default.close();
	    };
	    // ================== 扩展接口 ======================
	    // 获取随机数，取值为0 - 1。（已设置统一的随机数种子）
	    LockStep.prototype.random = function () {
	        return util.default.random();
	    };
	    // 保存游戏快照
	    // @param gameData: 保存的游戏数据
	    LockStep.prototype.saveGameData = function (gameData) {
	        return relaysvr.default.saveGameData(gameData);
	    };
	    // 加载游戏快照
	    // @return gameData
	    LockStep.prototype.loadGameData = function () {
	        return relaysvr.default.loadGameData();
	    };
	    // 设置定时器
	    // @param callFunc: 回调函数
	    // @param interval: 间隔时间(单位：毫秒)
	    // @param repeat: 重复次数，默认为1
	    // @param delay: 延迟开始时间(单位：毫秒)
	    // @return timerID: 定时器ID
	    LockStep.prototype.startTimer = function (callFunc, interval, repeat, delay) {
	        if (repeat === void 0) { repeat = 1; }
	        if (delay === void 0) { delay = 0; }
	        return timer.default.startTimer(callFunc, interval, repeat, delay);
	    };
	    // 删除定时器
	    // @param timerID: 定时器ID
	    // @return ret: 成功或失败
	    LockStep.prototype.stopTimer = function (timerID) {
	        return timer.default.stopTimer(timerID);
	    };
	    // 清空所有定时器
	    LockStep.prototype.clearAllTimers = function () {
	        timer.default.clear();
	    };
	    // ================== 内部SDK接口 ======================
	    // 重连
	    LockStep.prototype.doReconnect = function (reset) {
	        relaysvr.default.doReconnect(reset);
	    };
	    // 获得心跳延迟
	    LockStep.prototype.getHeartBeatIntervalMS = function () {
	        return relaysvr.default.getHeartBeatIntervalMS();
	    };
	    LockStep.prototype.getPing = function () {
	        return relaysvr.default.getPing();
	    };
	    // 指定种子
	    LockStep.prototype.setSeed = function (seed) {
	        return util.default.setSeed(seed);
	    };
	    // 获取种子
	    LockStep.prototype.getSeed = function () {
	        return util.default.getSeed();
	    };
	    return LockStep;	}());	exports.default = new LockStep();	});	var LockStep = unwrapExports(lockstep);	var msg_center = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	//消息中心	var MsgCenter = /** @class */ (function () {
	    function MsgCenter() {
	        //消息队列
	        this.msgQueue = [];
	        //自增消息Id
	        this.listenId = 0;
	        //消息监听Map，按listenId为key
	        this.handlerMapById = {};
	        //消息监听Map，按cmd为key
	        this.handlerMapByCmd = {};
	        //消息中心状态，1是running，2是stop
	        this.status = 2;
	    }
	    //初始化
	    MsgCenter.prototype.init = function () {
	        this.resume();
	        this.msgQueue = [];
	        this.listenId = 0;
	        this.handlerMapById = {};
	        this.handlerMapByCmd = {};
	        console.log("msgCenter init success");
	    };
	    //运行消息中心
	    MsgCenter.prototype.resume = function () {
	        this.status = 1;
	    };
	    //停止消息中心
	    MsgCenter.prototype.stop = function () {
	        this.status = 2;
	    };
	    //增加消息监听
	    MsgCenter.prototype.addMsgListener = function (_a) {
	        var cmd = _a.cmd, callback = _a.callback;
	        if (!cmd) {
	            return;
	        }
	        this.listenId = this.listenId + 1;
	        var msgInfo = { cmd: cmd, callback: callback };
	        this.handlerMapById[this.listenId] = msgInfo;
	        if (!this.handlerMapByCmd[cmd]) {
	            this.handlerMapByCmd[cmd] = {};
	        }
	        this.handlerMapByCmd[cmd][this.listenId] = msgInfo;
	        return this.listenId;
	    };
	    //移除消息监听
	    MsgCenter.prototype.removeMsgListener = function (listenId) {
	        if (!listenId) {
	            return;
	        }
	        if (this.handlerMapById[listenId]) {
	            var cmd = this.handlerMapById[listenId]["cmd"];
	            delete this.handlerMapById[listenId];
	            delete this.handlerMapByCmd[cmd][listenId];
	        }
	    };
	    //发送消息
	    MsgCenter.prototype.sendMsg = function (_a) {
	        var cmd = _a.cmd, data = _a.data;
	        if (!cmd) {
	            return;
	        }
	        this.msgQueue.push({ cmd: cmd, data: data });
	        this.triggerMsg();
	    };
	    //触发广播消息
	    MsgCenter.prototype.triggerMsg = function () {
	        if (this.status == 2) {
	            return;
	        }
	        for (var i = 0; i < 100; i++) {
	            var msgInfo = this.msgQueue.shift();
	            if (!msgInfo) {
	                break;
	            }
	            var listerArray = this.handlerMapByCmd[msgInfo.cmd];
	            if (!listerArray) {
	                continue;
	            }
	            for (var j in listerArray) {
	                listerArray[j].callback && listerArray[j].callback(msgInfo.data);
	            }
	        }
	    };
	    return MsgCenter;	}());	exports.default = new MsgCenter();	});	unwrapExports(msg_center);	var udp = createCommonjsModule(function (module, exports) {	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });	};	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }	};	Object.defineProperty(exports, "__esModule", { value: true });	var empty = {};	var Udp = /** @class */ (function () {
	    function Udp(heihei_js_bridge) {
	        this.heihei_js_bridge = null;
	        this.heihei_js_bridge = heihei_js_bridge || window['heihei_js_bridge'];
	    }
	    Udp.prototype.create = function (_a) {
	        var host = _a.host, port = _a.port, _b = _a.onOpen, onOpen = _b === void 0 ? null : _b, _c = _a.onError, onError = _c === void 0 ? null : _c, _d = _a.onClose, onClose = _d === void 0 ? null : _d, _e = _a.binaryType, binaryType = _e === void 0 ? null : _e;
	        return __awaiter(this, void 0, void 0, function () {
	            var _f, url, _g, ret, udp;
	            return __generator(this, function (_h) {
	                switch (_h.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.createUdpWebSocket({ host: host, port: port, binaryType: binaryType })];
	                    case 1:
	                        _f = _h.sent(), url = _f.data.url, _g = _f.ret, ret = _g === void 0 ? 0 : _g;
	                        if (ret != -1) {
	                            udp = new Network({ host: url, pb: binaryType ? true : false });
	                            udp.open({
	                                onOpen: function (e) {
	                                    onOpen && onOpen(e);
	                                },
	                                onError: function (e) {
	                                    onError && onError(e);
	                                },
	                                onClose: function (e) {
	                                    onClose && onClose(e);
	                                },
	                            });
	                            return [2 /*return*/, udp];
	                        }
	                        return [2 /*return*/, null];
	                }
	            });
	        });
	    };
	    return Udp;	}());	var Network = /** @class */ (function () {
	    function Network(options) {
	        if (options === void 0) { options = empty; }
	        this.options = {
	            host: '',
	            pb: false
	        };
	        this.socket = null;
	        this.connecting = false;
	        this.onMessageCallback = null;
	        for (var key in options) {
	            options[key] && (this.options[key] = options[key]);
	        }
	    }
	    Network.prototype.open = function (_a) {
	        var _this = this;
	        var _b = _a.onOpen, onOpen = _b === void 0 ? null : _b, _c = _a.onError, onError = _c === void 0 ? null : _c, _d = _a.onClose, onClose = _d === void 0 ? null : _d;
	        if (this.socket) {
	            this.close();
	        }
	        console.log('new websocket', 'host: ', this.options.host);
	        this.connecting = true;
	        this.socket = new WebSocket(this.options.host);
	        if (this.options.pb) {
	            this.socket.binaryType = 'arraybuffer';
	        }
	        this.socket.onopen = function (e) {
	            _this.connecting = false;
	            onOpen && onOpen(e);
	        };
	        this.socket.onmessage = function (e) {
	            _this.onMessageCallback(e.data);
	        };
	        this.socket.onerror = function (e) {
	            if (e === void 0) { e = empty; }
	            console.error('network onerror', e);
	            _this.connecting = false;
	            _this.close();
	            onError && onError(e);
	        };
	        this.socket.onclose = function (e) {
	            if (e === void 0) { e = empty; }
	            console.warn('network onclose', e);
	            _this.connecting = false;
	            _this.close();
	            onClose && onClose(e);
	        };
	    };
	    Network.prototype.send = function (_a) {
	        var msg = _a.msg;
	        if (this.connecting) {
	            console.log("socket is now connecting, " + msg + " returned");
	            return false;
	        }
	        if (this.socket && this.socket.readyState == WebSocket.OPEN) {
	            try {
	                this.socket.send(msg);
	                return true;
	            }
	            catch (e) {
	                e = e || empty;
	                var errStr = 'send异常(' + e.name + ': ' + e.message + ')';
	                console.log('network onmessage', errStr);
	                return false;
	            }
	        }
	        else {
	            //this.options.reconnectFun && this.options.reconnectFun(msg)
	            return false;
	        }
	    };
	    Network.prototype.close = function () {
	        if (this.socket) {
	            this.socket.onopen = null;
	            this.socket.onmessage = null;
	            this.socket.onclose = null;
	            this.socket.onerror = null;
	            this.socket.close();
	            console.log('network: 主动close');
	        }
	        this.socket = null;
	    };
	    Network.prototype.onMessage = function (_a) {
	        var callback = _a.callback;
	        this.onMessageCallback = callback;
	    };
	    return Network;	}());	exports.default = Udp;	});	unwrapExports(udp);	var file_system = createCommonjsModule(function (module, exports) {	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });	};	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }	};	Object.defineProperty(exports, "__esModule", { value: true });	var ERROR;	(function (ERROR) {
	    //httpServer启动失败
	    ERROR[ERROR["ERROR_HTTP_SERVER_FAILED"] = -10000] = "ERROR_HTTP_SERVER_FAILED";
	    //文件路径不合法（空、指向游戏沙箱外等）
	    ERROR[ERROR["ERROR_FILE_PATH_ILLEGAL"] = -10001] = "ERROR_FILE_PATH_ILLEGAL";
	    //文件不存在
	    ERROR[ERROR["ERROR_FILE_NOT_EXISTS"] = -10002] = "ERROR_FILE_NOT_EXISTS";
	    //文件已存在
	    ERROR[ERROR["ERROR_FILE_ALREADY_EXISTS"] = -10003] = "ERROR_FILE_ALREADY_EXISTS";
	    //文件类型为文件夹
	    ERROR[ERROR["ERROR_FILE_IS_DIRECTORY"] = -10004] = "ERROR_FILE_IS_DIRECTORY";
	    //文件类型不是文件夹
	    ERROR[ERROR["ERROR_FILE_IS_NOT_DIRECTORY"] = -10005] = "ERROR_FILE_IS_NOT_DIRECTORY";
	    //复制失败
	    ERROR[ERROR["ERROR_FILE_COPY_FAILED"] = -10006] = "ERROR_FILE_COPY_FAILED";
	    //删除失败
	    ERROR[ERROR["ERROR_FILE_DELETE_FAILED"] = -10007] = "ERROR_FILE_DELETE_FAILED";
	    //创建目录失败
	    ERROR[ERROR["ERROR_MKDIR_FAILED"] = -10008] = "ERROR_MKDIR_FAILED";
	    //unzip失败
	    ERROR[ERROR["ERROR_UNZIP_FAILED"] = -10009] = "ERROR_UNZIP_FAILED";	})(ERROR || (ERROR = {}));	var FileSystem = /** @class */ (function () {
	    function FileSystem(heihei_js_bridge) {
	        this.deviceInfo = {
	            host: null,
	            port: null,
	            token: null
	        };
	        this.ERROR = ERROR;
	        this.heihei_js_bridge = null;
	        this.maxLimit = 10; // 最大并发请求数
	        this.currentConcurrent = 0; // 当前并发量数目
	        this.requestQueue = []; // 请求队列,若当前请求并发量已经超过maxLimit,则将该请求加入到请求队列中
	        this.taskId = 1;
	        this.heihei_js_bridge = heihei_js_bridge || window['heihei_js_bridge'];
	        // this.hijackImage()
	    }
	    FileSystem.prototype.hijackImage = function () {
	        if (!window["hijack_Image"]) {
	            var origin_Image_1 = window["Image"];
	            var hijack_Image = function () {
	                var o = new origin_Image_1();
	                o.crossOrigin = 'anonymous';
	                Object.defineProperties(o, {
	                    'crossOrigin': {
	                        get: function () { },
	                        set: function () { },
	                    }
	                });
	                return o;
	            };
	            hijack_Image.prototype = origin_Image_1.prototype;
	            if (window["Image"]) {
	                window["Image"] = hijack_Image;
	            }
	        }
	    };
	    FileSystem.prototype.doDownload = function (_a) {
	        var filePath = _a.filePath, _b = _a.savePath, savePath = _b === void 0 ? undefined : _b, taskId = _a.taskId;
	        return __awaiter(this, void 0, void 0, function () {
	            var result, err_1;
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0:
	                        if (!(this.currentConcurrent >= this.maxLimit)) return [3 /*break*/, 2];
	                        return [4 /*yield*/, this.startBlocking()];
	                    case 1:
	                        _c.sent();
	                        _c.label = 2;
	                    case 2:
	                        _c.trys.push([2, 4, 5, 6]);
	                        this.currentConcurrent++;
	                        return [4 /*yield*/, this.heihei_js_bridge.downloadFile({
	                                filePath: filePath,
	                                savePath: savePath,
	                                taskId: taskId
	                            })
	                            // const result = await new Promise((resolve) => {
	                            //     setTimeout(() => {
	                            //         resolve(filePath)
	                            //     }, 3000);
	                            // })
	                        ];
	                    case 3:
	                        result = _c.sent();
	                        // const result = await new Promise((resolve) => {
	                        //     setTimeout(() => {
	                        //         resolve(filePath)
	                        //     }, 3000);
	                        // })
	                        return [2 /*return*/, Promise.resolve(result)];
	                    case 4:
	                        err_1 = _c.sent();
	                        return [2 /*return*/, Promise.reject(err_1)];
	                    case 5:
	                        // console.log('currentConcurrent:', this.currentConcurrent);
	                        this.currentConcurrent--;
	                        this.nextTask();
	                        return [7 /*endfinally*/];
	                    case 6: return [2 /*return*/];
	                }
	            });
	        });
	    };
	    // 新建一个promise,并且将该reolsve函数放入到requestQueue队列里。
	    // 当调用next函数的时候，会从队列里取出一个resolve函数并执行。
	    FileSystem.prototype.startBlocking = function () {
	        var _resolve;
	        var promise2 = new Promise(function (resolve, reject) { return _resolve = resolve; });
	        this.requestQueue.push(_resolve);
	        return promise2;
	    };
	    // 从请求队列里取出队首的resolve并执行。
	    FileSystem.prototype.nextTask = function () {
	        if (this.requestQueue.length <= 0)
	            return;
	        var _resolve = this.requestQueue.shift();
	        _resolve();
	    };
	    FileSystem.prototype.downloadFile = function (_a) {
	        var filePath = _a.filePath, _b = _a.savePath, savePath = _b === void 0 ? undefined : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            var task, tempFilePath;
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0:
	                        task = {
	                            taskId: this.taskId,
	                            filePath: filePath,
	                            savePath: savePath
	                        };
	                        return [4 /*yield*/, this.doDownload(task)];
	                    case 1:
	                        tempFilePath = (_c.sent()).data.filePath;
	                        this.taskId++;
	                        return [2 /*return*/, tempFilePath];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.getDeviceHost = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            var _a, host, port, token;
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.getDeviceHost()];
	                    case 1:
	                        _a = (_b.sent()).data, host = _a.host, port = _a.port, token = _a.token;
	                        this.deviceInfo.host = host;
	                        this.deviceInfo.port = port;
	                        this.deviceInfo.token = token;
	                        return [2 /*return*/];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.getFileUrl = function (_a) {
	        var _b = _a.filePath, filePath = _b === void 0 ? "" : _b;
	        var _c = this.deviceInfo, host = _c.host, port = _c.port, token = _c.token;
	        return "https://" + host + ":" + port + "/getFile?filePath=" + encodeURIComponent(filePath) + "&gameId=2&token=" + token;
	    };
	    FileSystem.prototype.saveFile = function (_a) {
	        var tempFilePath = _a.tempFilePath, destPath = _a.destPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.saveFile({ tempFilePath: tempFilePath, destPath: destPath })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.removeSavedFile = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.removeSavedFile({ filePath: filePath })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.getSavedFileList = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.getSavedFileList()];
	                    case 1: return [2 /*return*/, _a.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.access = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.fileSystemAccess({ filePath: filePath })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.copyFile = function (_a) {
	        var srcPath = _a.srcPath, destPath = _a.destPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.fileSystemCopyFile({ srcPath: srcPath, destPath: destPath })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.mkdir = function (_a) {
	        var dirPath = _a.dirPath, recursive = _a.recursive;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.fileSystemMkdir({ dirPath: dirPath, recursive: recursive })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.readdir = function (_a) {
	        var dirPath = _a.dirPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.fileSystemReaddir({ dirPath: dirPath })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.rmdir = function (_a) {
	        var dirPath = _a.dirPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.fileSystemRmdir({ dirPath: dirPath })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.stat = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.fileSystemStat({ filePath: filePath })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.unzip = function (_a) {
	        var zipFilePath = _a.zipFilePath, targetPath = _a.targetPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.fileSystemUnzip({ zipFilePath: zipFilePath, targetPath: targetPath })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.getStorage = function (_a) {
	        var key = _a.key;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.getStorage({ key: key })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.setStorage = function (_a) {
	        var key = _a.key, value = _a.value;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.setStorage({ key: key, value: value })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.removeStorage = function (_a) {
	        var key = _a.key;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.removeStorage({ key: key })];
	                    case 1: return [2 /*return*/, _b.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.getStorageInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.getStorageInfo()];
	                    case 1: return [2 /*return*/, _a.sent()];
	                }
	            });
	        });
	    };
	    FileSystem.prototype.clearStorage = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4 /*yield*/, this.heihei_js_bridge.clearStorage()];
	                    case 1: return [2 /*return*/, _a.sent()];
	                }
	            });
	        });
	    };
	    return FileSystem;	}());	exports.default = FileSystem;	});	unwrapExports(file_system);	var worker = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	var Webworker = /** @class */ (function () {
	    function Webworker(heihei_js_bridge) {
	        this.heihei_js_bridge = null;
	        this.workerId = null;
	        this.heihei_js_bridge = heihei_js_bridge || window['heihei_js_bridge'];
	    }
	    Webworker.prototype.create = function (_a) {
	        var _this = this;
	        var scriptPath = _a.scriptPath;
	        if (window['jsb']) {
	            this.heihei_js_bridge.workerCreateWorker({ scriptPath: scriptPath }).then(function (_a) {
	                var workerId = _a.data.workerId;
	                _this.workerId = workerId;
	            });
	        }
	        else {
	            return new Worker(scriptPath);
	        }
	    };
	    return Webworker;	}());	exports.default = Webworker;	});	unwrapExports(worker);	var game_data = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	//游戏信息	var GameData = /** @class */ (function () {
	    function GameData() {
	        this.gameResult = {};
	        this.gameModeId = null;
	    }
	    //设置结算信息
	    GameData.prototype.initGameResult = function (data) {
	        this.gameResult = data;
	    };
	    GameData.prototype.initGameModeId = function (data) {
	        this.gameModeId = data;
	    };
	    return GameData;	}());	exports.default = new GameData();	});	unwrapExports(game_data);	var user_data = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	//游戏用户信息	var UsersData = /** @class */ (function () {
	    function UsersData() {
	        //自己的信息
	        this.selfInfo = {
	            uid: "",
	        };
	        //游戏玩家列表
	        this.userList = [];
	        //游戏玩家map
	        this.userObj = {};
	        //离开游戏玩家列表
	        this.leftUserlist = [];
	        //离开游戏玩家map
	        this.leftUserObj = {};
	        //AI用户
	        this.aiNum = 0;
	    }
	    //初始化自己的信息
	    UsersData.prototype.initSelfInfo = function (data) {
	        this.selfInfo = data;
	    };
	    //初始化所有玩家信息
	    UsersData.prototype.initAllUser = function (data) {
	        this.aiNum = 0;
	        this.userObj = {};
	        var user_list = [];
	        for (var i in data) {
	            var item = data[i];
	            if (item.isAi == 1) {
	                this.aiNum = this.aiNum + 1;
	            }
	            user_list.push(item);
	            this.userObj[i] = item;
	        }
	        this.userList = user_list;
	    };
	    //增加逃跑玩家
	    UsersData.prototype.addLeftUser = function (data) {
	        if (!this.leftUserObj[data.uid]) {
	            this.leftUserlist.push(data);
	            this.leftUserObj[data.uid] = data;
	        }
	        return this.leftUserlist.length;
	    };
	    return UsersData;	}());	exports.default = new UsersData();	});	unwrapExports(user_data);	var room_data = createCommonjsModule(function (module, exports) {	Object.defineProperty(exports, "__esModule", { value: true });	//房间信息	var RoomData = /** @class */ (function () {
	    function RoomData() {
	        this.roomInfo = {
	            gameId: 0,
	            gameRoomId: "",
	            gameSvrId: 0,
	            returnInfo: {
	                type: "",
	                data: "",
	            },
	            battleId: "",
	        };
	    }
	    //初始化房间信息
	    RoomData.prototype.initRoomInfo = function (data) {
	        this.roomInfo = data;
	    };
	    return RoomData;	}());	exports.default = new RoomData();	});	unwrapExports(room_data);	var heihei_js_bridge$1 = createCommonjsModule(function (module, exports) {	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);	};	var __awaiter = (commonjsGlobal && commonjsGlobal.__awaiter) || function (thisArg, _arguments, P, generator) {
	    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
	    return new (P || (P = Promise))(function (resolve, reject) {
	        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
	        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
	        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
	        step((generator = generator.apply(thisArg, _arguments || [])).next());
	    });	};	var __generator = (commonjsGlobal && commonjsGlobal.__generator) || function (thisArg, body) {
	    var _ = { label: 0, sent: function() { if (t[0] & 1) throw t[1]; return t[1]; }, trys: [], ops: [] }, f, y, t, g;
	    return g = { next: verb(0), "throw": verb(1), "return": verb(2) }, typeof Symbol === "function" && (g[Symbol.iterator] = function() { return this; }), g;
	    function verb(n) { return function (v) { return step([n, v]); }; }
	    function step(op) {
	        if (f) throw new TypeError("Generator is already executing.");
	        while (_) try {
	            if (f = 1, y && (t = op[0] & 2 ? y["return"] : op[0] ? y["throw"] || ((t = y["return"]) && t.call(y), 0) : y.next) && !(t = t.call(y, op[1])).done) return t;
	            if (y = 0, t) op = [op[0] & 2, t.value];
	            switch (op[0]) {
	                case 0: case 1: t = op; break;
	                case 4: _.label++; return { value: op[1], done: false };
	                case 5: _.label++; y = op[1]; op = [0]; continue;
	                case 7: op = _.ops.pop(); _.trys.pop(); continue;
	                default:
	                    if (!(t = _.trys, t = t.length > 0 && t[t.length - 1]) && (op[0] === 6 || op[0] === 2)) { _ = 0; continue; }
	                    if (op[0] === 3 && (!t || (op[1] > t[0] && op[1] < t[3]))) { _.label = op[1]; break; }
	                    if (op[0] === 6 && _.label < t[1]) { _.label = t[1]; t = op; break; }
	                    if (t && _.label < t[2]) { _.label = t[2]; _.ops.push(op); break; }
	                    if (t[2]) _.ops.pop();
	                    _.trys.pop(); continue;
	            }
	            op = body.call(thisArg, _);
	        } catch (e) { op = [6, e]; y = 0; } finally { f = t = 0; }
	        if (op[0] & 5) throw op[1]; return { value: op[0] ? op[1] : void 0, done: true };
	    }	};	Object.defineProperty(exports, "__esModule", { value: true });	var empty = {};	var noop = function () { };	function stringify(obj, replacer, spaces, cycleReplacer) {
	    return JSON.stringify(obj, serializer(replacer, cycleReplacer), spaces);	}	function serializer(replacer, cycleReplacer) {
	    var stack = [], keys = [];
	    if (cycleReplacer == null)
	        cycleReplacer = function (key, value) {
	            if (stack[0] === value)
	                return "[Circular ~]";
	            return "[Circular ~." + keys.slice(0, stack.indexOf(value)).join(".") + "]";
	        };
	    return function (key, value) {
	        if (stack.length > 0) {
	            var thisPos = stack.indexOf(this);
	            ~thisPos ? stack.splice(thisPos + 1) : stack.push(this);
	            ~thisPos ? keys.splice(thisPos, Infinity, key) : keys.push(key);
	            if (~stack.indexOf(value))
	                value = cycleReplacer.call(this, key, value);
	        }
	        else
	            stack.push(value);
	        return replacer == null ? value : replacer.call(this, key, value);
	    };	}	var HeiheiJSBridgeClass = (function () {
	    function HeiheiJSBridgeClass() {
	        var _this = this;
	        this.dsBridge = null;
	        this.isAPKVersion = false;
	        this.needWriteClientLog = false;
	        this.jsbridgeCompleteInit = noop;
	        this.isJSFunctionRegist = false;
	        this.baseParams = {
	            gameId: null,
	            version: null
	        };
	        this.gameTag = null;
	        this.userInfo = null;
	        this.showLog = null;
	        this.HeiheiLog = { log: noop };
	        this.mockConsole();
	        if (window['jsb']) {
	            this.isAPKVersion = true;
	        }
	        window["onHeiHeiReady"] = function () {
	            console.log('onHeiHeiReady');
	            _this.registerJSFunction();
	        };
	        window['HeiheiJSBridge'] = {};
	    }
	    HeiheiJSBridgeClass.prototype.init = function (config) {
	        if (config === void 0) { config = {}; }
	        var gameId = config.gameId, tag = config.tag, version = config.version, _a = config.complete, complete = _a === void 0 ? noop : _a, userInfo = config.userInfo, _b = config.showLog, showLog = _b === void 0 ? true : _b, _c = config.needWriteClientLog, needWriteClientLog = _c === void 0 ? false : _c, _d = config.needWriteLogType, needWriteLogType = _d === void 0 ? ['log', 'info', 'warn', 'error', 'debug'] : _d;
	        this.baseParams.gameId = gameId;
	        this.gameTag = tag;
	        this.baseParams.version = version;
	        this.jsbridgeCompleteInit = complete;
	        this.userInfo = userInfo;
	        this.showLog = showLog;
	        this.needWriteClientLog = needWriteClientLog;
	        this.needWriteLogType = needWriteLogType;
	        console.log("jsbridge init tnpm package version: 0.5.35");
	        if (/cymini/i.test(navigator.userAgent.toLowerCase())) {
	            this.checkClientIsReady();
	        }
	        else {
	            this.initAdapterJsBridge();
	        }
	    };
	    HeiheiJSBridgeClass.prototype.initAdapterJsBridge = function () {
	        this.HeiheiLog.log('initAdapterJsBridge');
	        mock_data.default.init({
	            gameId: this.baseParams.gameId,
	            tag: this.gameTag,
	            version: this.baseParams.version,
	            userInfo: this.userInfo,
	            showLog: this.showLog
	        });
	        this.registerJSFunction();
	        this.needWriteClientLog = false;
	    };
	    HeiheiJSBridgeClass.prototype.checkClientIsReady = function () {
	        if (window["dsBridge"]) {
	            this.registerJSFunction();
	            this.writeLogToClient(this.needWriteLogType);
	        }
	    };
	    HeiheiJSBridgeClass.prototype.registerJSFunction = function () {
	        if (!this.dsBridge && !this.isJSFunctionRegist) {
	            this.dsBridge = window["dsBridge"];
	            this.registerGameStatusUpdate();
	            this.registerUserStatusUpdate();
	            this.registerNetworkChange();
	            this.registerOnMessage();
	            this.registerVoiceChange();
	            this.registerRelationChange();
	            this.registerAppEnterForeground();
	            this.registerAppEnterBackground();
	            this.registerConsoleGameSoundEnableChange();
	            this.registerGameSoundEnableChange();
	            this.registerAccessTokenChanged();
	            this.registerCoinAmountChanged();
	            this.registerReceivedBattleUserMessage();
	            this.registerReceivedBattleResultInfo();
	            this.registerReceived1v1Invite();
	            this.registerCanceled1v1Invite();
	            this.registerRejected1v1Invite();
	            this.registerNeedRefreshGame();
	            this.registerReceivedGameInvite();
	            this.registerUserExitLsGame();
	            this.registerBackPressed();
	            this.registerWorkerMessage();
	            this.registerWorkerClose();
	            this.registerDownLoadFileProgress();
	            this.registerUnzipProgress();
	            this.registerUdpRecv();
	            this.jsbridgeCompleteInit();
	            this.isJSFunctionRegist = true;
	            this.jsbridgeCompleteInit = noop;
	            console.log("jsBridge registerJSFunction success");
	        }
	        if (this.isJSFunctionRegist) {
	            this.jsbridgeCompleteInit();
	            this.jsbridgeCompleteInit = noop;
	        }
	    };
	    HeiheiJSBridgeClass.prototype.mockConsole = function () {
	        var _this = this;
	        var _console = Object.assign({}, console);
	        ['log', 'info', 'warn', 'error', 'debug'].map(function (method) {
	            _this.HeiheiLog[method] = function () {
	                var args = [];
	                for (var _i = 0; _i < arguments.length; _i++) {
	                    args[_i] = arguments[_i];
	                }
	                _this.showLog && _console && _console[method].apply(_console, args);
	            };
	        });
	    };
	    HeiheiJSBridgeClass.prototype.writeLogToClient = function (logType) {
	        var _this = this;
	        if (logType === void 0) { logType = ['log', 'info', 'warn', 'error', 'debug']; }
	        if (this.needWriteClientLog) {
	            var clientLogType_1 = { log: 5, info: 4, warn: 3, error: 2, debug: 1 };
	            var _console_1 = Object.assign({}, console);
	            logType.map(function (method) {
	                window.console[method] = function () {
	                    var args = [];
	                    for (var _i = 0; _i < arguments.length; _i++) {
	                        args[_i] = arguments[_i];
	                    }
	                    _console_1 && _console_1[method].apply(_console_1, args);
	                    var log_str = method + " ";
	                    for (var i = 0; i < args.length; i++) {
	                        if (typeof (args[i]) === 'object') {
	                            log_str += stringify(args[i], null, 0, null);
	                        }
	                        else {
	                            log_str += args[i];
	                        }
	                    }
	                    _this.writeLog({ type: clientLogType_1[method], text: log_str });
	                };
	            });
	        }
	    };
	    HeiheiJSBridgeClass.prototype.preregister = function (methodName, callback) {
	        var _this = this;
	        this.HeiheiLog.log("preregister methodName: " + methodName);
	        this.dsBridge.register(methodName, function (res) {
	            var data = JSON.parse(res);
	            _this.logNeedFilter(methodName) || _this.HeiheiLog.log("client notify " + methodName, data);
	            callback(data);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerGameStatusUpdate = function () {
	        this.preregister('onGameStatusUpdate', function (res) {
	            window['HeiheiJSBridge'].onGameStatusUpdate && window['HeiheiJSBridge'].onGameStatusUpdate(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerUserStatusUpdate = function () {
	        this.preregister('onUserStatusUpdate', function (res) {
	            window['HeiheiJSBridge'].onUserStatusUpdate && window['HeiheiJSBridge'].onUserStatusUpdate(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerNetworkChange = function () {
	        this.preregister('onNetworkChange', function (res) {
	            window['HeiheiJSBridge'].onNetworkChange && window['HeiheiJSBridge'].onNetworkChange(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerOnMessage = function () {
	        this.preregister('onMessage', function (res) {
	            window['HeiheiJSBridge'].onMessage && window['HeiheiJSBridge'].onMessage(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerVoiceChange = function () {
	        this.preregister('onVoiceChange', function (res) {
	            window['HeiheiJSBridge'].onVoiceChange && window['HeiheiJSBridge'].onVoiceChange(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerRelationChange = function () {
	        this.preregister('onRelationChangeV2', function (res) {
	            window['HeiheiJSBridge'].onRelationChange && window['HeiheiJSBridge'].onRelationChange(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerAppEnterForeground = function () {
	        this.preregister('onApplicationEnterForeground', function (res) {
	            window['HeiheiJSBridge'].onApplicationEnterForeground && window['HeiheiJSBridge'].onApplicationEnterForeground(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerAppEnterBackground = function () {
	        this.preregister('onApplicationEnterBackground', function (res) {
	            window['HeiheiJSBridge'].onApplicationEnterBackground && window['HeiheiJSBridge'].onApplicationEnterBackground(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerConsoleGameSoundEnableChange = function () {
	        this.preregister('onConsoleGameSoundEnableChange', function (res) {
	            window['HeiheiJSBridge'].onConsoleGameSoundEnableChange && window['HeiheiJSBridge'].onConsoleGameSoundEnableChange(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerGameSoundEnableChange = function () {
	        this.preregister('onGameSoundEnableChange', function (res) {
	            window['HeiheiJSBridge'].onGameSoundEnableChange && window['HeiheiJSBridge'].onGameSoundEnableChange(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerAccessTokenChanged = function () {
	        this.preregister('onAccessTokenChanged', function (res) {
	            window['HeiheiJSBridge'].onAccessTokenChanged && window['HeiheiJSBridge'].onAccessTokenChanged(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerCoinAmountChanged = function () {
	        this.preregister('onCoinAmountChanged', function (res) {
	            window['HeiheiJSBridge'].onCoinAmountChanged && window['HeiheiJSBridge'].onCoinAmountChanged(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerReceivedBattleUserMessage = function () {
	        this.preregister('onReceivedBattleUserMessage', function (res) {
	            window['HeiheiJSBridge'].onReceivedBattleUserMessage && window['HeiheiJSBridge'].onReceivedBattleUserMessage(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerReceivedBattleResultInfo = function () {
	        this.preregister('onReceivedBattleResultInfo', function (res) {
	            window['HeiheiJSBridge'].onReceivedBattleResultInfo && window['HeiheiJSBridge'].onReceivedBattleResultInfo(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerUdpRecv = function () {
	        this.preregister('onUdpRecv', function (res) {
	            window['HeiheiJSBridge'].onUdpRecv && window['HeiheiJSBridge'].onUdpRecv(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerDownLoadFileProgress = function () {
	        this.preregister('onDownLoadFileProgress', function (res) {
	            window['HeiheiJSBridge'].onDownLoadFileProgress && window['HeiheiJSBridge'].onDownLoadFileProgress(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerUnzipProgress = function () {
	        this.preregister('onUnzipProgress', function (res) {
	            window['HeiheiJSBridge'].onUnzipProgress && window['HeiheiJSBridge'].onUnzipProgress(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerReceived1v1Invite = function () {
	        this.preregister('onReceived1v1Invite', function (res) {
	            window['HeiheiJSBridge'].onReceived1v1Invite && window['HeiheiJSBridge'].onReceived1v1Invite(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerCanceled1v1Invite = function () {
	        this.preregister('onCanceled1v1Invite', function (res) {
	            window['HeiheiJSBridge'].onCanceled1v1Invite && window['HeiheiJSBridge'].onCanceled1v1Invite(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerRejected1v1Invite = function () {
	        this.preregister('onRejected1v1Invite', function (res) {
	            window['HeiheiJSBridge'].onRejected1v1Invite && window['HeiheiJSBridge'].onRejected1v1Invite(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerNeedRefreshGame = function () {
	        this.preregister('onNeedRefreshGame', function (res) {
	            window['HeiheiJSBridge'].onNeedRefreshGame && window['HeiheiJSBridge'].onNeedRefreshGame(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerReceivedGameInvite = function () {
	        this.preregister('onReceivedGameInvite', function (res) {
	            window['HeiheiJSBridge'].onReceivedGameInvite && window['HeiheiJSBridge'].onReceivedGameInvite(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerUserExitLsGame = function () {
	        this.preregister('onUserExitLsGame', function (res) {
	            window['HeiheiJSBridge'].onUserExitLsGame && window['HeiheiJSBridge'].onUserExitLsGame(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerBackPressed = function () {
	        this.preregister('onBackPressed', function (res) {
	            window['HeiheiJSBridge'].onBackPressed && window['HeiheiJSBridge'].onBackPressed(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerWorkerMessage = function () {
	        this.preregister('onWorkerMessage', function (res) {
	            window['HeiheiJSBridge'].onWorkerMessage && window['HeiheiJSBridge'].onWorkerMessage(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.registerWorkerClose = function () {
	        this.preregister('onWorkerClosed', function (res) {
	            window['HeiheiJSBridge'].onWorkerClosed && window['HeiheiJSBridge'].onWorkerClosed(res);
	        });
	    };
	    HeiheiJSBridgeClass.prototype.precall = function (methodName, params) {
	        var _this = this;
	        if (params === void 0) { params = {}; }
	        params = __assign(__assign({}, params), this.baseParams);
	        return new Promise(function (resolve) {
	            if (_this.isAPKVersion) ;
	            else {
	                _this.logNeedFilter(methodName) || _this.HeiheiLog.log("call client method: " + methodName + ", params: " + JSON.stringify(params));
	                if (_this.dsBridge) {
	                    _this.dsBridge.call(methodName, params, function (res) {
	                        var data = JSON.parse(res);
	                        _this.HeiheiLog.log("call client method " + methodName + " success", data);
	                        resolve(data);
	                    });
	                }
	                else {
	                    console.warn('dsBridge is undefined, please ensure jsbridge has initialized');
	                }
	            }
	        });
	    };
	    HeiheiJSBridgeClass.prototype.logNeedFilter = function (methodName) {
	        var filterList = ['shareImageOrStructMessage', 'onVoiceChange', 'writeLog'];
	        return filterList.includes(methodName);
	    };
	    HeiheiJSBridgeClass.prototype.closeH5 = function (_a) {
	        var _b = (_a === void 0 ? empty : _a).doubleCheckType, doubleCheckType = _b === void 0 ? 0 : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('closeH5', { doubleCheckType: doubleCheckType })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showKeyBoard = function (_a) {
	        var _b = _a.placeholder, placeholder = _b === void 0 ? '请输入答案' : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('showKeyBoard', { placeholder: placeholder })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getRoomInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getRoomInfoV2')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getUserInfo = function (_a) {
	        var _b = _a.uids, uids = _b === void 0 ? [] : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('getUserInfo', { uids: uids })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getUserStatus = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getUserStatus')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getGameStatus = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getGameStatus')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getFriendRelation = function (_a) {
	        var _b = _a.uids, uids = _b === void 0 ? [] : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('getFriendRelation', { uids: uids })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getDeviceInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getDeviceInfo')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.writeLog = function (_a) {
	        var type = _a.type, text = _a.text;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('writeLog', __assign(__assign({ type: type, text: text }, this.baseParams), { tag: this.gameTag }))];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.userReady = function (_a) {
	        var uid = _a.uid, status = _a.status;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('userReady', { uid: uid, status: status })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.userFollow = function (_a) {
	        var uid = _a.uid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('userFollow', { uid: uid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.userUnFollow = function (_a) {
	        var uid = _a.uid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('userUnFollow', { uid: uid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.postMessage = function (_a) {
	        var _b = _a.sendUid, sendUid = _b === void 0 ? null : _b, _c = _a.recieveUid, recieveUid = _c === void 0 ? null : _c, type = _a.type, _d = _a.text, text = _d === void 0 ? null : _d, _e = _a.image, image = _e === void 0 ? null : _e, _f = _a.needHead, needHead = _f === void 0 ? null : _f, _g = _a.needFollow, needFollow = _g === void 0 ? null : _g, _h = _a.description, description = _h === void 0 ? null : _h;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_j) {
	                switch (_j.label) {
	                    case 0: return [4, this.precall('postMessage', { sendUid: sendUid, recieveUid: recieveUid, type: type, text: text, image: image, needHead: needHead, needFollow: needFollow, description: description })];
	                    case 1: return [2, _j.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.startGame = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('startGame')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.dismissGame = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('dismissGame')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.switchGame = function (_a) {
	        var toGameId = _a.toGameId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('switchGame', { toGameId: toGameId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.joinMic = function (_a) {
	        var status = _a.status;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('joinMic', { status: status })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.share = function (_a) {
	        var _b = _a.uid, uid = _b === void 0 ? null : _b, _c = _a.imageUrl, imageUrl = _c === void 0 ? null : _c, _d = _a.imageUrlWithQrcode, imageUrlWithQrcode = _d === void 0 ? null : _d, _e = _a.title, title = _e === void 0 ? '' : _e, _f = _a.text, text = _f === void 0 ? '' : _f;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_g) {
	                switch (_g.label) {
	                    case 0: return [4, this.precall('share', { uid: uid, imageUrl: imageUrl, imageUrlWithQrcode: imageUrlWithQrcode, title: title, text: text })];
	                    case 1: return [2, _g.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.completeInit = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('completeInit')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.toast = function (_a) {
	        var _b = _a.text, text = _b === void 0 ? '' : _b, _c = _a.duration, duration = _c === void 0 ? 3000 : _c;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_d) {
	                switch (_d.label) {
	                    case 0: return [4, this.precall('toast', { text: text, duration: duration })];
	                    case 1: return [2, _d.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showDialog = function (_a) {
	        var _b = _a.title, title = _b === void 0 ? null : _b, _c = _a.desc, desc = _c === void 0 ? '' : _c, _d = _a.buttons, buttons = _d === void 0 ? [] : _d, _e = _a.key, key = _e === void 0 ? 1 : _e;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_f) {
	                switch (_f.label) {
	                    case 0: return [4, this.precall('showDialog', { title: title, desc: desc, buttons: buttons, key: key })];
	                    case 1: return [2, _f.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.playVibrate = function (_a) {
	        var _b = _a.millisecond, millisecond = _b === void 0 ? 1000 : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('playVibrate', { millisecond: millisecond })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.userClick = function (_a) {
	        var uid = _a.uid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('userClick', { uid: uid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.openAllSpeakingVoiceStatus = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('openAllSpeakingVoiceStatus')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.switchMicVoiceStatus = function (_a) {
	        var micOpen = _a.micOpen, openTillTime = _a.openTillTime, battleId = _a.battleId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('switchMicVoiceStatus', { micOpen: micOpen, openTillTime: openTillTime, battleId: battleId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setVoiceBlackList = function (_a) {
	        var uids = _a.uids;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setVoiceBlackList', { uids: uids })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setCanMinimize = function (_a) {
	        var canMinimize = _a.canMinimize;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setCanMinimize', { canMinimize: canMinimize })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setCanNormalQuit = function (_a) {
	        var canNormalQuit = _a.canNormalQuit;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setCanNormalQuit', { canNormalQuit: canNormalQuit })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.trackCustomEvent = function (_a) {
	        var key = _a.key, propsJsonStr = _a.propsJsonStr;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0:
	                        if (!(typeof propsJsonStr == "object")) return [3, 2];
	                        return [4, this.precall('trackCustomEvent', { key: key, propsJsonStr: JSON.stringify(propsJsonStr) })];
	                    case 1: return [2, _b.sent()];
	                    case 2: return [4, this.precall('trackCustomEvent', { key: key, propsJsonStr: propsJsonStr })];
	                    case 3: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.needRefreshToken = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('needRefreshToken')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getWebGameGradeInfo = function (_a) {
	        var uids = _a.uids;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('getWebGameGradeInfo', { uids: uids })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.trackBeginPage = function (_a) {
	        var pageName = _a.pageName;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('trackBeginPage', { pageName: pageName })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.trackEndPage = function (_a) {
	        var pageName = _a.pageName;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('trackEndPage', { pageName: pageName })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getLoginUserInfo = function (_a) {
	        var _b = _a.needOpenId, needOpenId = _b === void 0 ? false : _b, _c = _a.needAccessToken, needAccessToken = _c === void 0 ? false : _c, _d = _a.needLoginPlatform, needLoginPlatform = _d === void 0 ? false : _d, _e = _a.needCoinAmount, needCoinAmount = _e === void 0 ? false : _e;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_f) {
	                switch (_f.label) {
	                    case 0: return [4, this.precall('getLoginUserInfo', { needOpenId: needOpenId, needAccessToken: needAccessToken, needLoginPlatform: needLoginPlatform, needCoinAmount: needCoinAmount })];
	                    case 1: return [2, _f.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getNetworkState = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getNetworkState')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.shareImageOrStructMessage = function (_a) {
	        var type = _a.type, image = _a.image, structMessage = _a.structMessage, _b = _a.needImagePreview, needImagePreview = _b === void 0 ? false : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('shareImageOrStructMessage', { type: type, image: image, structMessage: structMessage, needImagePreview: needImagePreview })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.saveImageToFile = function (_a) {
	        var image = _a.image;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('saveImageToFile', { image: image })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.webPageReady = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('webPageReady')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.modifyTitleBar = function (_a) {
	        var _b = _a.titleBarStyle, titleBarStyle = _b === void 0 ? 0 : _b, _c = _a.titleText, titleText = _c === void 0 ? '' : _c;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_d) {
	                switch (_d.label) {
	                    case 0: return [4, this.precall('modifyTitleBar', { titleBarStyle: titleBarStyle, titleText: titleText })];
	                    case 1: return [2, _d.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.sendGift = function (_a) {
	        var receiverId = _a.receiverId, giftId = _a.giftId, num = _a.num;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('sendGift', { receiverId: receiverId, giftId: giftId, num: num })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showShareDialog = function (_a) {
	        var cardList = _a.cardList, _b = _a.defaultFocusIndex, defaultFocusIndex = _b === void 0 ? null : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('showShareDialog', { cardList: cardList, defaultFocusIndex: defaultFocusIndex })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.recommendGame = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('recommendGame')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.launchProfilePage = function (_a) {
	        var uid = _a.uid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('launchProfilePage', { uid: uid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.commitGameScore = function (_a) {
	        var score = _a.score, startTimestamp = _a.startTimestamp, gameDuration = _a.gameDuration, webVersion = _a.webVersion, _b = _a.infoList, infoList = _b === void 0 ? null : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('commitGameScore', { score: score, startTimestamp: startTimestamp, gameDuration: gameDuration, webVersion: webVersion, infoList: infoList })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.isGameSoundEnable = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('isGameSoundEnable')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setGameSoundEnable = function (_a) {
	        var enable = _a.enable;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setGameSoundEnable', { enable: enable })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showGameRankList = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('showGameRankList')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getGameLoginRankInfo = function (_a) {
	        var _b = _a.dateType, dateType = _b === void 0 ? 0 : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('getGameLoginRankInfo', { dateType: dateType })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getGameType = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('getGameType')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.isBetaGame = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('isBetaGame')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showFeedback = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('showFeedback')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.commitConsoleGameScore = function (_a) {
	        var score = _a.score, startTimestamp = _a.startTimestamp, gameDuration = _a.gameDuration, webVersion = _a.webVersion, _b = _a.infoList, infoList = _b === void 0 ? null : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('commitConsoleGameScore', { score: score, startTimestamp: startTimestamp, gameDuration: gameDuration, webVersion: webVersion, infoList: infoList })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.isConsoleGameSoundEnable = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('isConsoleGameSoundEnable')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setConsoleGameSoundEnable = function (_a) {
	        var enable = _a.enable;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setConsoleGameSoundEnable', { enable: enable })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setConsoleGameStatus = function (_a) {
	        var status = _a.status;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setConsoleGameStatus', { status: status })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showConsoleGameRankList = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('showConsoleGameRankList')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.shareConsoleGame = function (_a) {
	        var cardList = _a.cardList, _b = _a.defaultFocusIndex, defaultFocusIndex = _b === void 0 ? null : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('shareConsoleGame', { cardList: cardList, defaultFocusIndex: defaultFocusIndex })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getConsoleGameLoginRankInfo = function (_a) {
	        var _b = _a.dateType, dateType = _b === void 0 ? 0 : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('getConsoleGameLoginRankInfo', { dateType: dateType })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.refreshAccessToken = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('refreshAccessToken')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setFullScreen = function (_a) {
	        var enable = _a.enable;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setFullScreen', { enable: enable })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setGameStatus = function (_a) {
	        var status = _a.status;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('setGameStatus', { status: status })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.commitLSGameResult = function (_a) {
	        var battleResultFlag = _a.battleResultFlag, gameRoute = _a.gameRoute, gameResult = _a.gameResult;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.commitLSGameResult', { battleResultFlag: battleResultFlag, gameRoute: gameRoute, gameResult: gameResult })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.commitLockStepGameResult = function (_a) {
	        var battleResultFlag = _a.battleResultFlag, gameRoute = _a.gameRoute, gameResult = _a.gameResult;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.commitLSGameResult', { battleResultFlag: battleResultFlag, gameRoute: gameRoute, gameResult: gameResult })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.returnToApp = function (_a) {
	        var returnInfo = _a.returnInfo;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.returnToApp', { returnInfo: returnInfo })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.showProfileCard = function (_a) {
	        var uid = _a.uid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.showProfileCard', { uid: uid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.sendBattleUserMessage = function (_a) {
	        var battleId = _a.battleId, msgType = _a.msgType, msgId = _a.msgId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.sendBattleUserMessage', { battleId: battleId, msgType: msgType, msgId: msgId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.exitLSGame = function (_a) {
	        var gameRoute = _a.gameRoute, exitFlag = _a.exitFlag;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.exitLSGame', { gameRoute: gameRoute, exitFlag: exitFlag })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.exitLockStepGame = function (_a) {
	        var gameRoute = _a.gameRoute, exitFlag = _a.exitFlag;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.exitLSGame', { gameRoute: gameRoute, exitFlag: exitFlag })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.exitGameRoom = function (_a) {
	        var returnInfo = _a.returnInfo;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.exitGameRoom', { returnInfo: returnInfo })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.invite1v1 = function (_a) {
	        var modeId = _a.modeId, invitedUid = _a.invitedUid;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.invite1v1', { modeId: modeId, invitedUid: invitedUid })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.accept1v1Invite = function (_a) {
	        var modeId = _a.modeId, invitedUid = _a.invitedUid, inviteUid = _a.inviteUid, inviteId = _a.inviteId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.accept1v1Invite', { modeId: modeId, invitedUid: invitedUid, inviteUid: inviteUid, inviteId: inviteId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.reject1v1Invite = function (_a) {
	        var modeId = _a.modeId, invitedUid = _a.invitedUid, inviteUid = _a.inviteUid, inviteId = _a.inviteId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.reject1v1Invite', { modeId: modeId, invitedUid: invitedUid, inviteUid: inviteUid, inviteId: inviteId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.cancel1v1Invite = function (_a) {
	        var modeId = _a.modeId, invitedUid = _a.invitedUid, inviteUid = _a.inviteUid, inviteId = _a.inviteId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.cancel1v1Invite', { modeId: modeId, invitedUid: invitedUid, inviteUid: inviteUid, inviteId: inviteId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.inviteMoreGames = function (_a) {
	        var returnInfo = _a.returnInfo;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.inviteMoreGames', { returnInfo: returnInfo })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.acceptGameInvite = function (_a) {
	        var gameInviteParam = _a.gameInviteParam;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('battle.acceptGameInvite', { gameInviteParam: gameInviteParam })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getBattleInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('battle.getBattleInfo')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getDeviceHost = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.getDeviceHost')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.downloadFile = function (_a) {
	        var _b = _a.filePath, filePath = _b === void 0 ? "" : _b, _c = _a.savePath, savePath = _c === void 0 ? undefined : _c, taskId = _a.taskId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_d) {
	                switch (_d.label) {
	                    case 0: return [4, this.precall('fileSystem.downloadFile', { filePath: filePath, savePath: savePath, taskId: taskId })];
	                    case 1: return [2, _d.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.saveFile = function (_a) {
	        var tempFilePath = _a.tempFilePath, destPath = _a.destPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.saveFile', { tempFilePath: tempFilePath, destPath: destPath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.removeSavedFile = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.removeSavedFile', { filePath: filePath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getSavedFileList = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.getSavedFileList')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getSavedFileInfo = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.getSavedFileInfo', { filePath: filePath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getFileInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.getFileInfo')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemAccess = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.access', { filePath: filePath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemCopyFile = function (_a) {
	        var srcPath = _a.srcPath, destPath = _a.destPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.copyFile', { srcPath: srcPath, destPath: destPath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemMkdir = function (_a) {
	        var dirPath = _a.dirPath, _b = _a.recursive, recursive = _b === void 0 ? false : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('fileSystem.mkdir', { dirPath: dirPath, recursive: recursive })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemReaddir = function (_a) {
	        var dirPath = _a.dirPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.readdir', { dirPath: dirPath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemReadFile = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.readFile')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemRmdir = function (_a) {
	        var dirPath = _a.dirPath, _b = _a.recursive, recursive = _b === void 0 ? false : _b;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_c) {
	                switch (_c.label) {
	                    case 0: return [4, this.precall('fileSystem.rmdir', { dirPath: dirPath, recursive: recursive })];
	                    case 1: return [2, _c.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemStat = function (_a) {
	        var filePath = _a.filePath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.stat', { filePath: filePath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.fileSystemUnzip = function (_a) {
	        var zipFilePath = _a.zipFilePath, targetPath = _a.targetPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.unzip', { zipFilePath: zipFilePath, targetPath: targetPath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getStorage = function (_a) {
	        var key = _a.key;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.getStorage', { key: key })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.setStorage = function (_a) {
	        var key = _a.key, value = _a.value;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.setStorage', { key: key, value: value })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.removeStorage = function (_a) {
	        var key = _a.key;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('fileSystem.removeStorage', { key: key })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.getStorageInfo = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.getStorageInfo')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.clearStorage = function () {
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_a) {
	                switch (_a.label) {
	                    case 0: return [4, this.precall('fileSystem.clearStorage')];
	                    case 1: return [2, _a.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.createUdpWebSocket = function (_a) {
	        var host = _a.host, port = _a.port, binaryType = _a.binaryType;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('createUdpWebSocket', { host: host, port: port, binaryType: binaryType })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.udpCreate = function (_a) {
	        var host = _a.host, port = _a.port;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('udpCreate', { host: host, port: port })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.udpSend = function (_a) {
	        var udpId = _a.udpId, text = _a.text;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('udpSend', { udpId: udpId, text: text })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.workerCreateWorker = function (_a) {
	        var scriptPath = _a.scriptPath;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('worker.createWorker', { scriptPath: scriptPath })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.workerPostMessage = function (_a) {
	        var workerId = _a.workerId, message = _a.message;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('worker.postMessage', { workerId: workerId, message: message })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.workerTerminate = function (_a) {
	        var workerId = _a.workerId;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('worker.terminate', { workerId: workerId })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    HeiheiJSBridgeClass.prototype.gmGetIdata = function (_a) {
	        var date = _a.date, method = _a.method;
	        return __awaiter(this, void 0, void 0, function () {
	            return __generator(this, function (_b) {
	                switch (_b.label) {
	                    case 0: return [4, this.precall('gmGetIdata', { date: date, method: method })];
	                    case 1: return [2, _b.sent()];
	                }
	            });
	        });
	    };
	    return HeiheiJSBridgeClass;	}());	exports.default = HeiheiJSBridgeClass;	});	unwrapExports(heihei_js_bridge$1);	var game_sdk = createCommonjsModule(function (module, exports) {	var __extends = (commonjsGlobal && commonjsGlobal.__extends) || (function () {
	    var extendStatics = function (d, b) {
	        extendStatics = Object.setPrototypeOf ||
	            ({ __proto__: [] } instanceof Array && function (d, b) { d.__proto__ = b; }) ||
	            function (d, b) { for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p]; };
	        return extendStatics(d, b);
	    };
	    return function (d, b) {
	        extendStatics(d, b);
	        function __() { this.constructor = d; }
	        d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
	    };	})();	var __assign = (commonjsGlobal && commonjsGlobal.__assign) || function () {
	    __assign = Object.assign || function(t) {
	        for (var s, i = 1, n = arguments.length; i < n; i++) {
	            s = arguments[i];
	            for (var p in s) if (Object.prototype.hasOwnProperty.call(s, p))
	                t[p] = s[p];
	        }
	        return t;
	    };
	    return __assign.apply(this, arguments);	};	Object.defineProperty(exports, "__esModule", { value: true });	var GameSDK = /** @class */ (function (_super) {
	    __extends(GameSDK, _super);
	    //继承jsBridge方法
	    function GameSDK() {
	        var _this = _super.call(this) || this;
	        //初始化回调
	        _this.onInit = null;
	        //广播回调
	        _this.onBroadcast = null;
	        //游戏开始回调
	        _this.onGameReady = null;
	        //游戏结束回调
	        _this.onGameEnd = null;
	        //SDK异常回调
	        _this.onError = null;
	        //游戏是否开始
	        _this.isGameReady = false;
	        //游戏是否结束
	        _this.isGameEnd = false;
	        //是否连接到网络
	        _this.isConnected = true;
	        //是否使用帧同步服务
	        _this.useLockStep = false;
	        //lockStep超时计时器
	        _this.lockstepTimeout = null;
	        //lockStep的实例
	        _this.lockStep = null;
	        //udp的实例
	        _this.udp = null;
	        //fileSystem的实例
	        _this.fileSystem = null;
	        //worker的实例
	        _this.worker = null;
	        //初始化GameSDK消息中心
	        msg_center.default.init();
	        // udp初始化
	        _this.udpInit();
	        // filesystem初始化
	        _this.fileSystemInit();
	        // worker初始化
	        _this.workerInit();
	        return _this;
	    }
	    //GameSDK初始化
	    GameSDK.prototype.init = function (_a) {
	        var _this = this;
	        var _b = _a.showLog, showLog = _b === void 0 ? true : _b, _c = _a.needWriteClientLog, needWriteClientLog = _c === void 0 ? false : _c, // 是否需要往客户端写日志
	        _d = _a.needWriteLogType, // 是否需要往客户端写日志
	        needWriteLogType = _d === void 0 ? ['log', 'info', 'warn', 'error', 'debug'] : _d, // 过滤日志类型
	        _e = _a.roomOption, // 过滤日志类型
	        roomOption = _e === void 0 ? {} : _e, // 帧同步房间控制
	        gameInfo = _a.gameInfo, onInit = _a.onInit, _f = _a.onGameEnd, onGameEnd = _f === void 0 ? null : _f, _g = _a.onError, onError = _g === void 0 ? null : _g, _h = _a.lockStep, _j = _h.useLockStep, useLockStep = _j === void 0 ? false : _j, _k = _h.onBroadcast, onBroadcast = _k === void 0 ? null : _k;
	        this.isGameReady = false;
	        this.isGameEnd = false;
	        this.isConnected = true;
	        this.lockStep = lockstep.default;
	        this.onInit = onInit;
	        this.onGameEnd = onGameEnd;
	        this.onBroadcast = onBroadcast;
	        this.onError = onError;
	        this.useLockStep = useLockStep;
	        //jsBridge的初始化
	        _super.prototype.init.call(this, {
	            gameId: gameInfo.gameId || 999,
	            tag: gameInfo.tag || "GameSDK",
	            version: gameInfo.version || "1.0",
	            userInfo: gameInfo.userInfo,
	            showLog: showLog,
	            needWriteClientLog: needWriteClientLog,
	            needWriteLogType: needWriteLogType,
	            complete: function () {
	                //帧同步初始化
	                _this.checkLockStepInit(needWriteClientLog, roomOption);
	                _this.lockStepInit({ needWriteClientLog: needWriteClientLog, roomOption: roomOption });
	            }
	        });
	        //监听jsBridge往window上注册的事件，调用消息中心转发出去
	        this.listenJsBridge();
	    };
	    //监听jsBridge往window上注册的事件
	    GameSDK.prototype.listenJsBridge = function () {
	        var _this = this;
	        //监听onNetworkChange
	        window['HeiheiJSBridge'].onNetworkChange = function (data) {
	            _this.emit({ cmd: "onNetworkChange", data: data });
	        };
	        //监听onMessage
	        window['HeiheiJSBridge'].onMessage = function (data) {
	            _this.emit({ cmd: "onMessage", data: data });
	        };
	        //监听onUserStatusUpdate
	        window['HeiheiJSBridge'].onUserStatusUpdate = function (data) {
	            _this.emit({ cmd: "onUserStatusUpdate", data: data });
	        };
	        //监听onReceivedBattleUserMessage
	        window['HeiheiJSBridge'].onReceivedBattleUserMessage = function (data) {
	            _this.emit({ cmd: "onReceivedBattleUserMessage", data: data });
	        };
	        //监听onVoiceChange
	        window['HeiheiJSBridge'].onVoiceChange = function (data) {
	            _this.emit({ cmd: "onVoiceChange", data: data });
	        };
	        //监听onRelationChange
	        window['HeiheiJSBridge'].onRelationChange = function (data) {
	            _this.emit({ cmd: "onRelationChange", data: data });
	        };
	        //监听onApplicationEnterForeground
	        window['HeiheiJSBridge'].onApplicationEnterForeground = function (data) {
	            _this.emit({ cmd: "onApplicationEnterForeground", data: data });
	        };
	        //监听onApplicationEnterBackground
	        window['HeiheiJSBridge'].onApplicationEnterBackground = function (data) {
	            _this.emit({ cmd: "onApplicationEnterBackground", data: data });
	        };
	        //监听onGameSoundEnableChange
	        window['HeiheiJSBridge'].onGameSoundEnableChange = function (data) {
	            _this.emit({ cmd: "onGameSoundEnableChange", data: data });
	        };
	        //监听onReceivedBattleResultInfo
	        window['HeiheiJSBridge'].onReceivedBattleResultInfo = function (data) {
	            _this.emit({ cmd: "onReceivedBattleResultInfo", data: data });
	        };
	        // 监听收到1v1邀请
	        window['HeiheiJSBridge'].onReceived1v1Invite = function (data) {
	            _this.emit({ cmd: "onReceived1v1Invite", data: data });
	        };
	        // 监听取消1v1邀请
	        window['HeiheiJSBridge'].onCanceled1v1Invite = function (data) {
	            _this.emit({ cmd: "onCanceled1v1Invite", data: data });
	        };
	        // 监听拒绝1v1邀请
	        window['HeiheiJSBridge'].onRejected1v1Invite = function (data) {
	            _this.emit({ cmd: "onRejected1v1Invite", data: data });
	        };
	        // 监听需要刷新游戏
	        window['HeiheiJSBridge'].onNeedRefreshGame = function (data) {
	            _this.emit({ cmd: "onNeedRefreshGame", data: data });
	        };
	        //监听结算消息推送
	        this.addListener({
	            cmd: "onReceivedBattleResultInfo",
	            callback: function (data) {
	                _this.HeiheiLog.log("onReceivedBattleResultInfo", data);
	                _this.isGameEnd = true;
	                game_data.default.initGameResult(data);
	                _this.onGameEnd && _this.onGameEnd(data);
	            }
	        });
	        //监听网络变化
	        this.addListener({
	            cmd: "onNetworkChange",
	            callback: function (data) {
	                _this.HeiheiLog.log("onNetworkChange", data);
	                //网络状态变化
	                if (_this.isConnected != data.data.isConnected) {
	                    _this.isConnected = data.data.isConnected;
	                    //如果连上了网络，尝试重连
	                    if (_this.isConnected && _this.useLockStep) {
	                        _this.lockStep.doReconnect(true);
	                    }
	                }
	            }
	        });
	        //监听客户端切前台
	        this.addListener({
	            cmd: "onApplicationEnterForeground",
	            callback: function (data) {
	                _this.HeiheiLog.log("onApplicationEnterForeground", data);
	                //如果连上了网络，尝试重连
	                if (_this.isConnected && _this.useLockStep) {
	                    _this.lockStep.doReconnect(true);
	                }
	            }
	        });
	    };
	    // 初始化udp
	    GameSDK.prototype.udpInit = function () {
	        this.udp = new udp.default(this);
	    };
	    // filesystem初始化
	    GameSDK.prototype.fileSystemInit = function () {
	        this.fileSystem = new file_system.default(this);
	    };
	    // worker初始化
	    GameSDK.prototype.workerInit = function () {
	        this.worker = new worker.default(this);
	    };
	    // 检查帧同步连接建立是否成功
	    GameSDK.prototype.checkLockStepInit = function (needWriteClientLog, roomOption) {
	        var _this = this;
	        clearTimeout(this.lockstepTimeout);
	        this.lockstepTimeout = setTimeout(function () {
	            console.log('lockstep init Timeout');
	            _this.lockStepInit({ needWriteClientLog: needWriteClientLog, roomOption: roomOption });
	        }, 10000);
	    };
	    //连接帧同步后台
	    GameSDK.prototype.lockStepInit = function (_a) {
	        var _this = this;
	        var _b = _a.needWriteClientLog, needWriteClientLog = _b === void 0 ? false : _b, roomOption = _a.roomOption;
	        this.HeiheiLog.log("sdk lockStepInit start" + new Date().getMinutes() + "分" + new Date().getSeconds() + "秒");
	        this.getBattleInfo().then(function (res) {
	            _this.HeiheiLog.log('JsBridge getBattleInfo res:', res);
	            clearTimeout(_this.lockstepTimeout);
	            var data = {
	                userInfo: {},
	                allUserInfo: {},
	                gameRouteInfo: {},
	                modeId: 0,
	            };
	            if (res.data) {
	                data = _this.formatData(res.data);
	                user_data.default.initSelfInfo(data.userInfo);
	                user_data.default.initAllUser(data.allUserInfo);
	                game_data.default.initGameModeId(data.modeId);
	                room_data.default.initRoomInfo(data.gameRouteInfo);
	            }
	            if (_this.useLockStep) {
	                //帧同步初始化
	                _this.lockStep.init({
	                    roomData: data,
	                    cfg: {
	                        needWriteClientLog: needWriteClientLog,
	                        roomOption: roomOption
	                    },
	                    onInit: function (data) {
	                        _this.HeiheiLog.log("Lockstep init success", data);
	                        _this.onInit && _this.onInit(data);
	                    },
	                    onBroadcast: function (data) {
	                        _this.filterBroadcast(data);
	                        _this.onBroadcast && _this.onBroadcast(data);
	                    },
	                    onGameStart: function () {
	                        _this.isGameReady = true;
	                        _this.HeiheiLog.log("GameSDK gameReady end");
	                        _this.HeiheiLog.log("sdk gameReady end" + new Date().getMinutes() + "分" + new Date().getSeconds() + "秒");
	                        _this.onGameReady && _this.onGameReady({ readyUser: [] });
	                    },
	                    onError: function (data) {
	                        _this.onError && _this.onError(data);
	                    }
	                });
	            }
	            else {
	                _this.isGameReady = true;
	                _this.onInit && _this.onInit(data);
	            }
	        });
	    };
	    //格式化getBattleInfo的数据
	    GameSDK.prototype.formatData = function (tmp) {
	        var data = {
	            userInfo: {},
	            allUserInfo: {},
	            gameRouteInfo: {},
	            modeId: 0,
	            idMap: {},
	            battleInfo: {}
	        };
	        //自己的用户信息
	        if (tmp.userInfo) {
	            data.userInfo = tmp.userInfo;
	        }
	        //所有玩家的信息
	        if (tmp.matchResult) {
	            for (var i = 0, len = tmp.matchResult.userList.length; i < len; i++) {
	                var item = tmp.matchResult.userList[i];
	                data.allUserInfo[item.uid] = __assign({ uid: item.uid, campId: item.campId, isAi: item.isAi, gradeScore: item.gradeScore }, item);
	            }
	            if (tmp.matchResult.modeId) {
	                data.modeId = tmp.matchResult.modeId;
	            }
	        }
	        //房间信息
	        if (tmp.battleInfo) {
	            //所有玩家的accessInfo
	            for (var i_1 = 0, len_1 = tmp.battleInfo.userAccessInfoList.length; i_1 < len_1; i_1++) {
	                var item_1 = tmp.battleInfo.userAccessInfoList[i_1];
	                data.allUserInfo[item_1.uid]["lockstepPlayerId"] = item_1.lockstepPlayerId;
	                data.idMap[item_1.lockstepPlayerId] = item_1.uid;
	                if (data.userInfo.uid == item_1.uid) {
	                    try {
	                        var userAccessInfo = JSON.parse(item_1.userAccessInfo);
	                        data.userInfo["userAccessInfo"] = userAccessInfo.info;
	                    }
	                    catch (error) {
	                        console.log(error);
	                        data.userInfo["userAccessInfo"] = item_1.userAccessInfo;
	                    }
	                }
	            }
	            // 写battleInfo
	            data.battleInfo = tmp.battleInfo;
	            // 写gameRouteInfo
	            data.gameRouteInfo = tmp.battleInfo.battleAccessInfo.gameRouteInfo || {};
	            data.gameRouteInfo["returnInfo"] = tmp.returnInfo;
	            data.gameRouteInfo["battleId"] = tmp.battleInfo.battleId;
	        }
	        return data;
	    };
	    //过滤广播消息
	    GameSDK.prototype.filterBroadcast = function (data) {
	        var dataList = data.dataList;
	        for (var i = 0, len = dataList.length; i < len; i++) {
	            var item = dataList[0];
	            var obj = JSON.parse(item.data);
	            if (obj.type == "GameSDK") {
	                this.emit({
	                    cmd: obj.subType,
	                    data: obj
	                });
	            }
	        }
	    };
	    //游戏准备
	    GameSDK.prototype.gameReady = function (_a) {
	        var onGameReady = _a.onGameReady;
	        this.HeiheiLog.log("sdk gameReady start" + new Date().getMinutes() + "分" + new Date().getSeconds() + "秒");
	        this.onGameReady = onGameReady;
	        this.lockStep.ready();
	    };
	    //游戏结束
	    GameSDK.prototype.gameEnd = function (_a) {
	        var _this = this;
	        var reportData = _a.reportData, _b = _a.battleResultFlag, battleResultFlag = _b === void 0 ? 0 : _b;
	        //游戏上报
	        this.gameEndReport(reportData, battleResultFlag).then(function (res) {
	            _this.HeiheiLog.log("sdk gameEnd res", res);
	            if (res.ret != 0 && res.ret != 2402001) {
	                setTimeout(function () { _this.gameEnd({ reportData: reportData, battleResultFlag: battleResultFlag }); }, 1000);
	            }
	        });
	    };
	    //游戏结束上报
	    GameSDK.prototype.gameEndReport = function (reportData, battleResultFlag) {
	        //玩家上报的数据
	        var playerResultList = [];
	        try {
	            this.HeiheiLog.log(" gameEndReport", reportData, user_data.default.userObj);
	            //每个阵营的分数
	            var campScoreMap = {};
	            //阵营个数
	            var campCount = 0;
	            //最高阵营的分数
	            var highestScore = -1;
	            //最高分的阵营
	            var HighestCamp = {};
	            //最高分的阵营有几个
	            var HighestCount = 0;
	            for (var i = 0, len = reportData.length; i < len; i++) {
	                var item = reportData[i];
	                var campId = user_data.default.userObj[item.uid].campId;
	                if (!campScoreMap[campId]) {
	                    campScoreMap[campId] = { "score": 0 };
	                    campCount = campCount + 1;
	                }
	                campScoreMap[campId]["score"] = campScoreMap[campId]["score"] + item.score;
	                if (campScoreMap[campId]["score"] > highestScore) {
	                    highestScore = campScoreMap[campId]["score"];
	                }
	                var playFlag = 0;
	                var punishmentFlag = 0;
	                if (item.escape && item.escape == 1) {
	                    playFlag = 3;
	                    punishmentFlag = 1;
	                }
	                if (typeof (item.playFlag) == "number") {
	                    playFlag = item.playFlag;
	                }
	                playerResultList.push({
	                    uid: item.uid,
	                    campId: campId,
	                    score: item.score,
	                    result: -1,
	                    dataList: item.dataList,
	                    punishmentFlag: punishmentFlag,
	                    playFlag: playFlag,
	                });
	            }
	            for (var i in campScoreMap) {
	                if (campScoreMap[i]["score"] == highestScore) {
	                    HighestCamp[i] = true;
	                    HighestCount = HighestCount + 1;
	                }
	            }
	            //给每个玩家排名
	            var rank = 0, lastScore = -1, jumpNum = 0;
	            playerResultList.sort(function (a, b) { return b.score - a.score; });
	            for (var i = 0, len = playerResultList.length; i < len; i++) {
	                var item = playerResultList[i];
	                if (lastScore != item.score) {
	                    lastScore = item.score;
	                    rank = rank + 1 + jumpNum;
	                    jumpNum = 0;
	                }
	                else {
	                    jumpNum = jumpNum + 1;
	                }
	                if (HighestCamp[item.campId]) {
	                    //1是胜，0是凭据，-1是败
	                    item["result"] = HighestCount == 1 ? 1 : 0;
	                }
	                item["rank"] = rank;
	                if (campCount >= 2) {
	                    if (HighestCamp[item.campId]) {
	                        item["rank"] = 1;
	                    }
	                    else {
	                        item["rank"] = 2;
	                    }
	                }
	            }
	        }
	        catch (e) {
	            this.HeiheiLog.log("gameEndReport error", reportData, user_data.default.userObj);
	            playerResultList = [];
	        }
	        var option = {
	            battleResultFlag: battleResultFlag,
	            gameRoute: {
	                gameSvrId: room_data.default.roomInfo.gameSvrId,
	                gameRoomId: room_data.default.roomInfo.gameRoomId,
	                gameId: room_data.default.roomInfo.gameId
	            },
	            gameResult: {
	                playerResultList: playerResultList,
	            }
	        };
	        return _super.prototype.commitLSGameResult.call(this, option);
	    };
	    //获取GameSDK现在的状态ready,playing,over
	    GameSDK.prototype.getSDKGameStatus = function () {
	        if (this.isGameReady) {
	            if (this.isGameEnd) {
	                return "over";
	            }
	            else {
	                return "playing";
	            }
	        }
	        else {
	            return "ready";
	        }
	    };
	    //监听GameSDK抛出的事件，或者玩家调用emit抛出的事件。
	    GameSDK.prototype.addListener = function (_a) {
	        var cmd = _a.cmd, callback = _a.callback;
	        return msg_center.default.addMsgListener({ cmd: cmd, callback: callback });
	    };
	    //移除监听GameSDK抛出的事件，玩家调用emit抛出的事件
	    GameSDK.prototype.removeListener = function (listenId) {
	        return msg_center.default.removeMsgListener(listenId);
	    };
	    //抛出事件
	    GameSDK.prototype.emit = function (_a) {
	        var cmd = _a.cmd, data = _a.data;
	        return msg_center.default.sendMsg({ cmd: cmd, data: data });
	    };
	    //获取自己的用户信息
	    GameSDK.prototype.getSelfUserInfo = function () {
	        return user_data.default.selfInfo;
	    };
	    //获取该对局所有用户信息
	    GameSDK.prototype.getAllUserInfo = function () {
	        return user_data.default.userObj;
	    };
	    //获取该对局的房间信息
	    GameSDK.prototype.getSDKRoomInfo = function () {
	        return room_data.default.roomInfo;
	    };
	    //获取该对决结算信息
	    GameSDK.prototype.getGameResult = function () {
	        return game_data.default.gameResult;
	    };
	    GameSDK.prototype.getGameModeId = function () {
	        return game_data.default.gameModeId;
	    };
	    return GameSDK;	}(heihei_js_bridge$1.default));	exports.default = new GameSDK();	});	var GameSDK = unwrapExports(game_sdk);	function SetMsgHandler(cbOnInit) {
	    Main.msgHandler = cbOnInit;	}	function SDKInit(isMultiPlayers) {
	    console.log("[TS] SDKInit(isMultiPlayers=", isMultiPlayers, ")");
	    Main.isMultiPlayers = isMultiPlayers;
	    InitListeners();
	    GameSDK.init({
	        onInit: (res) => {
	            GameSDK.setFullScreen({ enable: true });
	            Main.initRes = res;
	            console.log("[TS] ", Main.initRes);
	            console.log("[TS] ", res.userInfo);
	            console.log("[TS] ", res.allUserInfo);
	            console.log("[TS] ", res.gameRouteInfo);
	            LockStep.random();
	            var camp = res.allUserInfo[res.userInfo.uid].campId;
	            var anyAi = 0;
	            var playTimes = 0;
	            if (!Main.isMultiPlayers) {
	                anyAi = 1;
	            }
	            else {
	                var realPlayerAmount = 0;
	                Main.enemyUid = '';
	                for (const key in res.allUserInfo) {
	                    const element = res.allUserInfo[key];
	                    if (element.uid != res.userInfo.uid) {
	                        Main.enemyUid = element.uid;
	                    }
	                    else if (element['playTimes'] != undefined) {
	                        playTimes = element['playTimes'];
	                    }
	                    if (!element.isAi) {
	                        realPlayerAmount++;
	                    }
	                }
	                anyAi = realPlayerAmount < 2 ? 1 : 0;
	            }
	            Main.msgHandler("OnSDKInit", [Main.isMultiPlayers ? 1 : 0, LockStep.getSeed(), camp, anyAi, playTimes]);
	            Main.msgHandler("Other", null, null, toCharArray("WTF"));
	        },
	        onGameEnd: (res) => {
	            console.log("[TS] onGameEnd", res.endUser);
	        },
	        gameInfo: {
	            gameId: 1503,
	            tag: 'test_web',
	            version: '0.0.0.1'
	        },
	        lockStep: {
	            useLockStep: Main.isMultiPlayers,
	            onBroadcast: (res) => {
	                Main.msgHandler("OnBroadcast", null, null, toCharArray(res));
	            }
	        },
	        needWriteClientLog: false, showLog: false
	    });	}	function CloseGame() {
	    let key = 1;
	    let desc = '是否退出游戏？\n游戏未结束，不再等等吗？';
	    let buttons = ['继续游戏', '离开游戏'];
	    if (GameSDK.getSDKGameStatus() === "playing") {
	        desc = '是否退出游戏？\n退出本局记为认输，是否退出';
	        buttons = ['继续游戏', '认输退出'];
	        GameSDK.showDialog({
	            title: '退出游戏',
	            desc: desc,
	            buttons: buttons,
	            key: key,
	        }).then(({ data }) => {
	            if (!data)
	                return;
	            if (data.key == key && data.index == 1) {
	                GameSDK.emit({ cmd: "exitConfirmed", data: {} });
	            }
	        });
	    }
	    else {
	        GameSDK.emit({ cmd: "exitConfirmed", data: {} });
	    }	}	function GameReady() {
	    console.log("[TS] GameReady()");
	    GameSDK.gameReady({
	        onGameReady: (res) => {
	            let frameIntervalMs = LockStep.getFrameIntervalMS();
	            console.log("[TS] frameIntervalMs:", frameIntervalMs);
	            Main.msgHandler("OnGameReady", [frameIntervalMs]);
	        }
	    });	}	function GameEnd(win) {
	    var res = Main.initRes;
	    var params = { reportData: [] };
	    var myCamp = res.allUserInfo[res.userInfo.uid].campId == '0' ? '0' : '1';
	    var otherCamp = myCamp == '0' ? '1' : '0';
	    var winCamp = win ? myCamp : otherCamp;
	    for (const key in res.allUserInfo) {
	        const element = res.allUserInfo[key];
	        var score = element.campId == winCamp ? 1 : 0;
	        params.reportData = params.reportData.concat({ uid: element.uid, score: score, escape: 0, dataList: [] });
	    }
	    console.log("[TS] reportData:", params.reportData);
	    GameSDK.gameEnd({
	        reportData: params.reportData,
	    });	}	function SendInput(content) {
	    LockStep.input(content);	}	function Broadcast(content) {
	    LockStep.broadcast(content);	}	function PopFrame(content) {
	    let frame = LockStep.popFrame();
	    if (frame != null) {
	        if (frame.dataList.length == 0) {
	            Main.msgHandler("OnPopFrame", [frame.frameID]);
	        }
	        else {
	            for (let index = 0; index < frame.dataList.length; index++) {
	                let relayData = frame.dataList[index];
	                let userID = relayData.userID;
	                let data = relayData.data;
	                let commands = data.split("|");
	                Main.msgHandler("OnPopFrame", [frame.frameID, userID], commands, toCharArray(data));
	            }
	        }
	    }	}	function PlayOther() {
	    let roomInfo = GameSDK.getSDKRoomInfo();
	    console.log("[TS] PlayOther ", "roomInfo:", roomInfo);
	    GameSDK.inviteMoreGames({ returnInfo: roomInfo.returnInfo });	}	function PlayAgain() {
	    let mId = GameSDK.getGameModeId();
	    console.log("[TS] PlayAgain ", "modeId:", mId, " invitedUid:", Main.enemyUid);
	    if (Main.waitingStatus == 0) {
	        GameSDK.invite1v1({ modeId: mId, invitedUid: Main.enemyUid }).then((res) => {
	            CallbackInvite(res.data);
	        });
	    }
	    else if (Main.waitingStatus == 2) {
	        GameSDK.accept1v1Invite({ modeId: mId, invitedUid: GameSDK.getSelfUserInfo().uid, inviteUid: Main.enemyUid, inviteId: Main.inviteId });
	    }
	    else {
	        CloseGame();
	    }	}	function ChangeMic(useMic) {
	    console.log("[TS] ChangeMic", useMic);
	    let roomInfo = GameSDK.getSDKRoomInfo();
	    GameSDK.switchMicVoiceStatus({
	        micOpen: useMic ? 1 : 0,
	        openTillTime: -1,
	        battleId: roomInfo.battleId
	    });	}	function RefreshMicStatus() {
	    let statusInfoList;
	    GameSDK.getUserStatus().then((status) => {
	        statusInfoList = status.data.list;
	        let micStatusList = [];
	        var myIndex;
	        var enemyIndex;
	        let selfuid = Main.initRes.userInfo.uid;
	        for (let i = 0, len = statusInfoList.length; i < len; i++) {
	            let item = statusInfoList[i];
	            if (item.uid == selfuid) {
	                myIndex = i;
	                Main.micStatus = item.isMicOpen;
	            }
	            if (item.uid == Main.enemyUid) {
	                enemyIndex = i;
	            }
	            micStatusList[i] = item.isMicOpen;
	        }
	        Main.msgHandler("OnRefreshMicStatus", micStatusList, [myIndex, enemyIndex]);
	    });	}	class Main {
	    constructor() {
	        this.onConfigLoaded();
	    }
	    onConfigLoaded() {
	        console.log(moment().format('MMMM Do YYYY, h:mm:ss a'));
	        console.log("[TS] GameSDK worked! " + GameSDK);
	    }	}	Main.waitingStatus = 0;	Main.enemyUid = '';	Main.inviteId = '';	new Main();	function InitListeners() {
	    GameSDK.addListener({ cmd: 'onReceived1v1Invite', callback: OnReceived1v1Invite });
	    GameSDK.addListener({ cmd: 'onNeedRefreshGame', callback: OnNeedRefreshGame });
	    GameSDK.addListener({ cmd: 'exitConfirmed', callback: OnExitConfirmed });
	    GameSDK.addListener({ cmd: 'onUserStatusUpdate', callback: OnUserStatusUpdate });
	    GameSDK.addListener({ cmd: 'onApplicationEnterBackground', callback: OnApplicationEnterBackground });
	    GameSDK.addListener({ cmd: 'onApplicationEnterForeground', callback: OnApplicationEnterForeground });	}	function OnApplicationEnterBackground() {
	    console.log("[TS] OnApplicationEnterBackground");
	    Main.preMicStatus = Main.micStatus;
	    ChangeMic(false);
	    GameSDK.setGameSoundEnable({ enable: false });
	    Main.msgHandler("OnApplicationEnterBackground");	}	function OnApplicationEnterForeground() {
	    console.log("[TS] OnApplicationEnterForeground");
	    ChangeMic(Main.preMicStatus == 1);
	    GameSDK.setGameSoundEnable({ enable: true });
	    Main.msgHandler("OnApplicationEnterForeground");
	}
	function CallbackInvite(data) {
	    Main.inviteId = data.inviteId;
	    Main.waitingStatus = 1;
	    ShowWaitingMsg(data, "等待对方");
	}
	function OnReceived1v1Invite(data) {
	    if (Main.waitingStatus == 3 || Main.waitingStatus == 5 ||
	        Main.waitingStatus == 4 || GameSDK.getSDKRoomInfo().gameId != data.gameId ||
	        data.inviteUid != Main.enemyUid) {
	        return;
	    }
	    Main.inviteId = data.inviteId;
	    Main.waitingStatus = 2;
	    ShowWaitingMsg(data, "接受挑战");
	}
	function ShowWaitingMsg(data, desc) {
	    let waitSecs = Math.floor(data.expireTimestamp);
	    let startClock = Math.floor(new Date().getTime() / 1000);
	    let text = desc + "(" + (waitSecs) + ")";
	    GameSDK.toast({ text: text, duration: 800 });
	    setInterval(() => {
	        let now = Math.floor(new Date().getTime() / 1000);
	        let period = now - startClock;
	        text = desc + "(" + (waitSecs - period) + ")";
	        GameSDK.toast({ text: text, duration: 800 });
	        if (waitSecs <= period) {
	            CloseGame();
	        }
	    }, 1000);
	}
	function OnNeedRefreshGame() {
	    GameSDK.toast({ text: "等待重新开始...", duration: 5000 });
	    window.location.reload();
	}
	function OnExitConfirmed() {
	    let roomInfo = GameSDK.getSDKRoomInfo();
	    let gameRoute = {
	        gameSvrId: roomInfo.gameSvrId,
	        gameRoomId: roomInfo.gameRoomId,
	        gameId: roomInfo.gameId
	    };
	    setTimeout(() => {
	        GameSDK.exitLSGame({ gameRoute, exitFlag: 2 });
	        GameSDK.exitGameRoom({ returnInfo: roomInfo.returnInfo });
	    }, 100);
	}
	function OnUserStatusUpdate(res) {
	    if (!res || res.ret != 0) {
	        return;
	    }
	    RefreshMicStatus();
	}
	let toCharArray = function (str) {
	    let arr = [];
	    for (let i = 0; i < str.length; i++) {
	        let charCode = str.charCodeAt(i);
	        if (charCode > 255)
	            return false;
	        arr[i] = charCode;
	    }
	    return arr;
	};

	exports.Broadcast = Broadcast;
	exports.ChangeMic = ChangeMic;
	exports.CloseGame = CloseGame;
	exports.GameEnd = GameEnd;
	exports.GameReady = GameReady;
	exports.PlayAgain = PlayAgain;
	exports.PlayOther = PlayOther;
	exports.PopFrame = PopFrame;
	exports.RefreshMicStatus = RefreshMicStatus;
	exports.SDKInit = SDKInit;
	exports.SendInput = SendInput;
	exports.SetMsgHandler = SetMsgHandler;

	return exports;
}({}));