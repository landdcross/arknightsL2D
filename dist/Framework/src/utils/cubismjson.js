/******/ (function(modules) { // webpackBootstrap
/******/ 	// The module cache
/******/ 	var installedModules = {};
/******/
/******/ 	// The require function
/******/ 	function __webpack_require__(moduleId) {
/******/
/******/ 		// Check if module is in cache
/******/ 		if(installedModules[moduleId]) {
/******/ 			return installedModules[moduleId].exports;
/******/ 		}
/******/ 		// Create a new module (and put it into the cache)
/******/ 		var module = installedModules[moduleId] = {
/******/ 			i: moduleId,
/******/ 			l: false,
/******/ 			exports: {}
/******/ 		};
/******/
/******/ 		// Execute the module function
/******/ 		modules[moduleId].call(module.exports, module, module.exports, __webpack_require__);
/******/
/******/ 		// Flag the module as loaded
/******/ 		module.l = true;
/******/
/******/ 		// Return the exports of the module
/******/ 		return module.exports;
/******/ 	}
/******/
/******/
/******/ 	// expose the modules object (__webpack_modules__)
/******/ 	__webpack_require__.m = modules;
/******/
/******/ 	// expose the module cache
/******/ 	__webpack_require__.c = installedModules;
/******/
/******/ 	// define getter function for harmony exports
/******/ 	__webpack_require__.d = function(exports, name, getter) {
/******/ 		if(!__webpack_require__.o(exports, name)) {
/******/ 			Object.defineProperty(exports, name, { enumerable: true, get: getter });
/******/ 		}
/******/ 	};
/******/
/******/ 	// define __esModule on exports
/******/ 	__webpack_require__.r = function(exports) {
/******/ 		if(typeof Symbol !== 'undefined' && Symbol.toStringTag) {
/******/ 			Object.defineProperty(exports, Symbol.toStringTag, { value: 'Module' });
/******/ 		}
/******/ 		Object.defineProperty(exports, '__esModule', { value: true });
/******/ 	};
/******/
/******/ 	// create a fake namespace object
/******/ 	// mode & 1: value is a module id, require it
/******/ 	// mode & 2: merge all properties of value into the ns
/******/ 	// mode & 4: return value when already ns object
/******/ 	// mode & 8|1: behave like require
/******/ 	__webpack_require__.t = function(value, mode) {
/******/ 		if(mode & 1) value = __webpack_require__(value);
/******/ 		if(mode & 8) return value;
/******/ 		if((mode & 4) && typeof value === 'object' && value && value.__esModule) return value;
/******/ 		var ns = Object.create(null);
/******/ 		__webpack_require__.r(ns);
/******/ 		Object.defineProperty(ns, 'default', { enumerable: true, value: value });
/******/ 		if(mode & 2 && typeof value != 'string') for(var key in value) __webpack_require__.d(ns, key, function(key) { return value[key]; }.bind(null, key));
/******/ 		return ns;
/******/ 	};
/******/
/******/ 	// getDefaultExport function for compatibility with non-harmony modules
/******/ 	__webpack_require__.n = function(module) {
/******/ 		var getter = module && module.__esModule ?
/******/ 			function getDefault() { return module['default']; } :
/******/ 			function getModuleExports() { return module; };
/******/ 		__webpack_require__.d(getter, 'a', getter);
/******/ 		return getter;
/******/ 	};
/******/
/******/ 	// Object.prototype.hasOwnProperty.call
/******/ 	__webpack_require__.o = function(object, property) { return Object.prototype.hasOwnProperty.call(object, property); };
/******/
/******/ 	// __webpack_public_path__
/******/ 	__webpack_require__.p = "";
/******/
/******/
/******/ 	// Load entry module and return exports
/******/ 	return __webpack_require__(__webpack_require__.s = "./Framework/utils/cubismjson.ts");
/******/ })
/************************************************************************/
/******/ ({

/***/ "./Framework/cubismframeworkconfig.ts":
/*!********************************************!*\
  !*** ./Framework/cubismframeworkconfig.ts ***!
  \********************************************/
/*! exports provided: CSM_LOG_LEVEL_VERBOSE, CSM_LOG_LEVEL_DEBUG, CSM_LOG_LEVEL_INFO, CSM_LOG_LEVEL_WARNING, CSM_LOG_LEVEL_ERROR, CSM_LOG_LEVEL_OFF, CSM_LOG_LEVEL */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_VERBOSE", function() { return CSM_LOG_LEVEL_VERBOSE; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_DEBUG", function() { return CSM_LOG_LEVEL_DEBUG; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_INFO", function() { return CSM_LOG_LEVEL_INFO; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_WARNING", function() { return CSM_LOG_LEVEL_WARNING; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_ERROR", function() { return CSM_LOG_LEVEL_ERROR; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL_OFF", function() { return CSM_LOG_LEVEL_OFF; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_LOG_LEVEL", function() { return CSM_LOG_LEVEL; });
/*
* Copyright(c) Live2D Inc. All rights reserved.
*
* Use of this source code is governed by the Live2D Open Software license
* that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
*/
//========================================================
//  ログ出力関数の設定
//========================================================
//---------- ログ出力レベル 選択項目 定義 ----------
/// 詳細ログ出力設定
var CSM_LOG_LEVEL_VERBOSE = 0;
/// デバッグログ出力設定
var CSM_LOG_LEVEL_DEBUG = 1;
/// Infoログ出力設定
var CSM_LOG_LEVEL_INFO = 2;
/// 警告ログ出力設定
var CSM_LOG_LEVEL_WARNING = 3;
/// エラーログ出力設定
var CSM_LOG_LEVEL_ERROR = 4;
/// ログ出力オフ設定
var CSM_LOG_LEVEL_OFF = 5;
/**
* ログ出力レベル設定。
*
* 強制的にログ出力レベルを変える時に定義を有効にする。
* CSM_LOG_LEVEL_VERBOSE ～ CSM_LOG_LEVEL_OFF を選択する。
*/
var CSM_LOG_LEVEL = CSM_LOG_LEVEL_VERBOSE;


/***/ }),

/***/ "./Framework/id/cubismid.ts":
/*!**********************************!*\
  !*** ./Framework/id/cubismid.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmString;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * パラメータ名・パーツ名・Drawable名を保持
     *
     * パラメータ名・パーツ名・Drawable名を保持するクラス。
     */
    var CubismId = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismId(id) {
            if (typeof (id) === 'string') {
                this._id = new csmString(id);
                return;
            }
            this._id = id;
        }
        /**
         * ID名を取得する
         */
        CubismId.prototype.getString = function () {
            return this._id;
        };
        /**
         * idを比較
         * @param c 比較するid
         * @return 同じならばtrue,異なっていればfalseを返す
         */
        CubismId.prototype.isEqual = function (c) {
            if (typeof (c) === 'string') {
                return this._id.isEqual(c);
            }
            else if (c instanceof csmString) {
                return this._id.isEqual(c.s);
            }
            else if (c instanceof CubismId) {
                return this._id.isEqual(c._id.s);
            }
            return false;
        };
        /**
         * idを比較
         * @param c 比較するid
         * @return 同じならばtrue,異なっていればfalseを返す
         */
        CubismId.prototype.isNotEqual = function (c) {
            if (typeof (c) == 'string') {
                return !this._id.isEqual(c);
            }
            else if (c instanceof csmString) {
                return !this._id.isEqual(c.s);
            }
            else if (c instanceof CubismId) {
                return !this._id.isEqual(c._id.s);
            }
            return false;
        };
        return CubismId;
    }());
    Live2DCubismFramework.CubismId = CubismId;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/id/cubismidmanager.ts":
/*!*****************************************!*\
  !*** ./Framework/id/cubismidmanager.ts ***!
  \*****************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _cubismid__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./cubismid */ "./Framework/id/cubismid.ts");
/*
* Copyright(c) Live2D Inc. All rights reserved.
*
* Use of this source code is governed by the Live2D Open Software license
* that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
*/


var CubismId = _cubismid__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismId;
var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmVector;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * ID名の管理
     *
     * ID名を管理する。
     */
    var CubismIdManager = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismIdManager() {
            this._ids = new csmVector();
        }
        /**
         * デストラクタ相当の処理
         */
        CubismIdManager.prototype.release = function () {
            for (var i = 0; i < this._ids.getSize(); ++i) {
                this._ids.set(i, void 0);
            }
            this._ids = null;
        };
        /**
         * ID名をリストから登録
         *
         * @param ids ID名リスト
         * @param count IDの個数
         */
        CubismIdManager.prototype.registerIds = function (ids) {
            for (var i = 0; i < ids.length; i++) {
                this.registerId(ids[i]);
            }
        };
        /**
         * ID名を登録
         *
         * @param id ID名
         */
        CubismIdManager.prototype.registerId = function (id) {
            var result = null;
            if ('string' == typeof (id)) {
                if ((result = this.findId(id)) != null) {
                    return result;
                }
                result = new CubismId(id);
                this._ids.pushBack(result);
            }
            else {
                return this.registerId(id.s);
            }
            return result;
        };
        /**
         * ID名からIDを取得する
         *
         * @param id ID名
         */
        CubismIdManager.prototype.getId = function (id) {
            return this.registerId(id);
        };
        /**
         * ID名からIDの確認
         *
         * @return true 存在する
         * @return false 存在しない
         */
        CubismIdManager.prototype.isExist = function (id) {
            if ('string' == typeof (id)) {
                return (this.findId(id) != null);
            }
            return this.isExist(id.s);
        };
        /**
         * ID名からIDを検索する。
         *
         * @param id ID名
         * @return 登録されているID。なければNULL。
         */
        CubismIdManager.prototype.findId = function (id) {
            for (var i = 0; i < this._ids.getSize(); ++i) {
                if (this._ids.at(i).getString().isEqual(id)) {
                    return this._ids.at(i);
                }
            }
            return null;
        };
        return CubismIdManager;
    }());
    Live2DCubismFramework.CubismIdManager = CubismIdManager;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/live2dcubismframework.ts":
/*!********************************************!*\
  !*** ./Framework/live2dcubismframework.ts ***!
  \********************************************/
/*! exports provided: strtod, Live2DCubismFramework, Option, LogLevel */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "strtod", function() { return strtod; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Option", function() { return Option; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "LogLevel", function() { return LogLevel; });
/* harmony import */ var _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ./utils/cubismjson */ "./Framework/utils/cubismjson.ts");
/* harmony import */ var _id_cubismidmanager__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ./id/cubismidmanager */ "./Framework/id/cubismidmanager.ts");
/* harmony import */ var _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ./rendering/cubismrenderer */ "./Framework/rendering/cubismrenderer.ts");
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
/// <reference path="../Core/live2dcubismcore.d.ts" />




var Value = _utils_cubismjson__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].Value;
var CubismIdManager = _id_cubismidmanager__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].CubismIdManager;
var CubismRenderer = _rendering_cubismrenderer__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].CubismRenderer;
function strtod(s, endPtr) {
    var index = 0;
    for (var i = 1;; i++) {
        var testC = s.slice(i - 1, i);
        // 指数・マイナスの可能性があるのでスキップする
        if (testC == 'e' || testC == '-' || testC == 'E') {
            continue;
        }
        // 文字列の範囲を広げていく
        var test = s.substring(0, i);
        var number = Number(test);
        if (isNaN(number)) {
            // 数値として認識できなくなったので終了
            break;
        }
        // 最後に数値としてできたindexを格納しておく
        index = i;
    }
    var d = parseFloat(s); // パースした数値
    if (isNaN(d)) {
        // 数値として認識できなくなったので終了
        d = NaN;
    }
    endPtr[0] = s.slice(index); // 後続の文字列
    return d;
}
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // ファイルスコープの変数を初期化
    var s_isStarted = false;
    var s_isInitialized = false;
    var s_option = null;
    var s_cubismIdManager = null;
    /**
     * Framework内で使う定数の宣言
     */
    var Constant;
    (function (Constant) {
        Constant.vertexOffset = 0; // メッシュ頂点のオフセット値
        Constant.vertexStep = 2; // メッシュ頂点のステップ値
    })(Constant = Live2DCubismFramework.Constant || (Live2DCubismFramework.Constant = {}));
    function csmDelete(address) {
        if (!address) {
            return;
        }
        address = void 0;
    }
    Live2DCubismFramework.csmDelete = csmDelete;
    /**
     * Live2D Cubism3 Original Workflow SDKのエントリポイント
     * 利用開始時はCubismFramework.initialize()を呼び、CubismFramework.dispose()で終了する。
     */
    var CubismFramework = /** @class */ (function () {
        /**
         * 静的クラスとして使用する
         * インスタンス化させない
         */
        function CubismFramework() {
        }
        /**
         * Cubism FrameworkのAPIを使用可能にする。
         *  APIを実行する前に必ずこの関数を実行すること。
         *  一度準備が完了して以降は、再び実行しても内部処理がスキップされます。
         *
         * @param    option      Optionクラスのインスタンス
         *
         * @return   準備処理が完了したらtrueが返ります。
         */
        CubismFramework.startUp = function (option) {
            if (option === void 0) { option = null; }
            if (s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.startUp() is already done.");
                return s_isStarted;
            }
            s_option = option;
            if (s_option != null) {
                Live2DCubismCore.Logging.csmSetLogFunction(s_option.logFunction);
            }
            s_isStarted = true;
            // Live2D Cubism Coreバージョン情報を表示
            if (s_isStarted) {
                var version = Live2DCubismCore.Version.csmGetVersion();
                var major = ((version & 0xFF000000) >> 24);
                var minor = ((version & 0x00FF0000) >> 16);
                var patch = ((version & 0x0000FFFF));
                var versionNumber = version;
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("Live2D Cubism Core version: {0}.{1}.{2} ({3})", ('00' + major).slice(-2), ('00' + minor).slice(-2), ('0000' + patch).slice(-4), versionNumber);
            }
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.startUp() is complete.");
            return s_isStarted;
        };
        /**
         * StartUp()で初期化したCubismFrameworkの各パラメータをクリアします。
         * Dispose()したCubismFrameworkを再利用する際に利用してください。
         */
        CubismFramework.cleanUp = function () {
            s_isStarted = false;
            s_isInitialized = false;
            s_option = null;
            s_cubismIdManager = null;
        };
        /**
         * Cubism Framework内のリソースを初期化してモデルを表示可能な状態にします。<br>
         *     再度Initialize()するには先にDispose()を実行する必要があります。
         */
        CubismFramework.initialize = function () {
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CSM_ASSERT"])(s_isStarted);
            if (!s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework is not started.");
                return;
            }
            // --- s_isInitializedによる連続初期化ガード ---
            // 連続してリソース確保が行われないようにする。
            // 再度Initialize()するには先にDispose()を実行する必要がある。
            if (s_isInitialized) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework.initialize() skipped, already initialized.");
                return;
            }
            //---- static 初期化 ----
            Value.staticInitializeNotForClientCall();
            s_cubismIdManager = new CubismIdManager();
            s_isInitialized = true;
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.initialize() is complete.");
        };
        /**
         * Cubism Framework内の全てのリソースを解放します。
         *      ただし、外部で確保されたリソースについては解放しません。
         *      外部で適切に破棄する必要があります。
         */
        CubismFramework.dispose = function () {
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CSM_ASSERT"])(s_isStarted);
            if (!s_isStarted) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework is not started.");
                return;
            }
            // --- s_isInitializedによる未初期化解放ガード ---
            // dispose()するには先にinitialize()を実行する必要がある。
            if (!s_isInitialized) // false...リソース未確保の場合
             {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogWarning"])("CubismFramework.dispose() skipped, not initialized.");
                return;
            }
            Value.staticReleaseNotForClientCall();
            s_cubismIdManager.release();
            s_cubismIdManager = null;
            // レンダラの静的リソース（シェーダプログラム他）を解放する
            CubismRenderer.staticRelease();
            s_isInitialized = false;
            Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("CubismFramework.dispose() is complete.");
        };
        /**
         * Cubism FrameworkのAPIを使用する準備が完了したかどうか
         * @return APIを使用する準備が完了していればtrueが返ります。
         */
        CubismFramework.isStarted = function () {
            return s_isStarted;
        };
        /**
         * Cubism Frameworkのリソース初期化がすでに行われているかどうか
         * @return リソース確保が完了していればtrueが返ります
         */
        CubismFramework.isInitialized = function () {
            return s_isInitialized;
        };
        /**
         * Core APIにバインドしたログ関数を実行する
         *
         * @praram message ログメッセージ
         */
        CubismFramework.coreLogFunction = function (message) {
            // Return if logging not possible.
            if (!Live2DCubismCore.Logging.csmGetLogFunction()) {
                return;
            }
            Live2DCubismCore.Logging.csmGetLogFunction()(message);
        };
        /**
         * 現在のログ出力レベル設定の値を返す。
         *
         * @return  現在のログ出力レベル設定の値
         */
        CubismFramework.getLoggingLevel = function () {
            if (s_option != null) {
                return s_option.loggingLevel;
            }
            return LogLevel.LogLevel_Off;
        };
        /**
         * IDマネージャのインスタンスを取得する
         * @return CubismManagerクラスのインスタンス
         */
        CubismFramework.getIdManager = function () {
            return s_cubismIdManager;
        };
        return CubismFramework;
    }());
    Live2DCubismFramework.CubismFramework = CubismFramework;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));
var Option = /** @class */ (function () {
    function Option() {
    }
    return Option;
}());

/**
 * ログ出力のレベル
 */
var LogLevel;
(function (LogLevel) {
    LogLevel[LogLevel["LogLevel_Verbose"] = 0] = "LogLevel_Verbose";
    LogLevel[LogLevel["LogLevel_Debug"] = 1] = "LogLevel_Debug";
    LogLevel[LogLevel["LogLevel_Info"] = 2] = "LogLevel_Info";
    LogLevel[LogLevel["LogLevel_Warning"] = 3] = "LogLevel_Warning";
    LogLevel[LogLevel["LogLevel_Error"] = 4] = "LogLevel_Error";
    LogLevel[LogLevel["LogLevel_Off"] = 5] = "LogLevel_Off"; // ログ出力無効
})(LogLevel || (LogLevel = {}));


/***/ }),

/***/ "./Framework/math/cubismmatrix44.ts":
/*!******************************************!*\
  !*** ./Framework/math/cubismmatrix44.ts ***!
  \******************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 4x4の行列
     *
     * 4x4行列の便利クラス。
     */
    var CubismMatrix44 = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismMatrix44() {
            this._tr = new Float32Array(16); // 4 * 4のサイズ
            this.loadIdentity();
        }
        /**
         * 受け取った２つの行列の乗算を行う。
         *
         * @param a 行列a
         * @param b 行列b
         * @return 乗算結果の行列
         */
        CubismMatrix44.multiply = function (a, b, dst) {
            var c = new Float32Array([
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0,
                0.0, 0.0, 0.0, 0.0
            ]);
            var n = 4;
            for (var i = 0; i < n; ++i) {
                for (var j = 0; j < n; ++j) {
                    for (var k = 0; k < n; ++k) {
                        c[j + i * 4] += a[k + i * 4] * b[j + k * 4];
                    }
                }
            }
            for (var i = 0; i < 16; ++i) {
                dst[i] = c[i];
            }
        };
        /**
         * 単位行列に初期化する
         */
        CubismMatrix44.prototype.loadIdentity = function () {
            var c = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            ]);
            this.setMatrix(c);
        };
        /**
         * 行列を設定
         *
         * @param tr 16個の浮動小数点数で表される4x4の行列
         */
        CubismMatrix44.prototype.setMatrix = function (tr) {
            for (var i = 0; i < 16; ++i) {
                this._tr[i] = tr[i];
            }
        };
        /**
         * 行列を浮動小数点数の配列で取得
         *
         * @return 16個の浮動小数点数で表される4x4の行列
         */
        CubismMatrix44.prototype.getArray = function () {
            return this._tr;
        };
        /**
         * X軸の拡大率を取得
         * @return X軸の拡大率
         */
        CubismMatrix44.prototype.getScaleX = function () {
            return this._tr[0];
        };
        /**
         * Y軸の拡大率を取得する
         *
         * @return Y軸の拡大率
         */
        CubismMatrix44.prototype.getScaleY = function () {
            return this._tr[5];
        };
        /**
         * X軸の移動量を取得
         * @return X軸の移動量
         */
        CubismMatrix44.prototype.getTranslateX = function () {
            return this._tr[12];
        };
        /**
         * Y軸の移動量を取得
         * @return Y軸の移動量
         */
        CubismMatrix44.prototype.getTranslateY = function () {
            return this._tr[13];
        };
        /**
         * X軸の値を現在の行列で計算
         *
         * @param src X軸の値
         * @return 現在の行列で計算されたX軸の値
         */
        CubismMatrix44.prototype.transformX = function (src) {
            return this._tr[0] * src + this._tr[12];
        };
        /**
         * Y軸の値を現在の行列で計算
         *
         * @param src Y軸の値
         * @return　現在の行列で計算されたY軸の値
         */
        CubismMatrix44.prototype.transformY = function (src) {
            return this._tr[5] * src + this._tr[13];
        };
        /**
         * X軸の値を現在の行列で逆計算
         */
        CubismMatrix44.prototype.invertTransformX = function (src) {
            return (src - this._tr[12]) / this._tr[0];
        };
        /**
         * Y軸の値を現在の行列で逆計算
         */
        CubismMatrix44.prototype.invertTransformY = function (src) {
            return (src - this._tr[13]) / this._tr[5];
        };
        /**
         * 現在の行列の位置を起点にして移動
         *
         * 現在の行列の位置を起点にして相対的に移動する。
         *
         * @param x X軸の移動量
         * @param y Y軸の移動量
         */
        CubismMatrix44.prototype.translateRelative = function (x, y) {
            var tr1 = new Float32Array([
                1.0, 0.0, 0.0, 0.0,
                0.0, 1.0, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                x, y, 0.0, 1.0
            ]);
            CubismMatrix44.multiply(tr1, this._tr, this._tr);
        };
        /**
         * 現在の行列の位置を移動
         *
         * 現在の行列の位置を指定した位置へ移動する
         *
         * @param x X軸の移動量
         * @param y y軸の移動量
         */
        CubismMatrix44.prototype.translate = function (x, y) {
            this._tr[12] = x;
            this._tr[13] = y;
        };
        /**
         * 現在の行列のX軸の位置を指定した位置へ移動する
         *
         * @param x X軸の移動量
         */
        CubismMatrix44.prototype.translateX = function (x) {
            this._tr[12] = x;
        };
        /**
         * 現在の行列のY軸の位置を指定した位置へ移動する
         *
         * @param y Y軸の移動量
         */
        CubismMatrix44.prototype.translateY = function (y) {
            this._tr[13] = y;
        };
        /**
         * 現在の行列の拡大率を相対的に設定する
         *
         * @param x X軸の拡大率
         * @param y Y軸の拡大率
         */
        CubismMatrix44.prototype.scaleRelative = function (x, y) {
            var tr1 = new Float32Array([
                x, 0.0, 0.0, 0.0,
                0.0, y, 0.0, 0.0,
                0.0, 0.0, 1.0, 0.0,
                0.0, 0.0, 0.0, 1.0
            ]);
            CubismMatrix44.multiply(tr1, this._tr, this._tr);
        };
        /**
         * 現在の行列の拡大率を指定した倍率に設定する
         *
         * @param x X軸の拡大率
         * @param y Y軸の拡大率
         */
        CubismMatrix44.prototype.scale = function (x, y) {
            this._tr[0] = x;
            this._tr[5] = y;
        };
        /**
         * 現在の行列に行列を乗算
         *
         * @param m 行列
         */
        CubismMatrix44.prototype.multiplyByMatrix = function (m) {
            CubismMatrix44.multiply(m.getArray(), this._tr, this._tr);
        };
        /**
         * オブジェクトのコピーを生成する
         */
        CubismMatrix44.prototype.clone = function () {
            var cloneMatrix = new CubismMatrix44();
            for (var i = 0; i < this._tr.length; i++) {
                cloneMatrix._tr[i] = this._tr[i];
            }
            return cloneMatrix;
        };
        return CubismMatrix44;
    }());
    Live2DCubismFramework.CubismMatrix44 = CubismMatrix44;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/rendering/cubismrenderer.ts":
/*!***********************************************!*\
  !*** ./Framework/rendering/cubismrenderer.ts ***!
  \***********************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../math/cubismmatrix44 */ "./Framework/math/cubismmatrix44.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var CubismMatrix44 = _math_cubismmatrix44__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismMatrix44;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * モデル描画を処理するレンダラ
     *
     * サブクラスに環境依存の描画命令を記述する。
     */
    var CubismRenderer = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismRenderer() {
            this._isCulling = false;
            this._isPremultipliedAlpha = false;
            this._anisortopy = 0.0;
            this._model = null;
            this._modelColor = new CubismTextureColor();
            // 単位行列に初期化
            this._mvpMatrix4x4 = new CubismMatrix44();
            this._mvpMatrix4x4.loadIdentity();
        }
        /**
         * レンダラのインスタンスを生成して取得する
         *
         * @return レンダラのインスタンス
         */
        CubismRenderer.create = function () {
            return null;
        };
        /**
         * レンダラのインスタンスを解放する
         */
        CubismRenderer.delete = function (renderer) {
            renderer = null;
        };
        /**
         * レンダラの初期化処理を実行する
         * 引数に渡したモデルからレンダラの初期化処理に必要な情報を取り出すことができる
         * @param model モデルのインスタンス
         */
        CubismRenderer.prototype.initialize = function (model) {
            this._model = model;
        };
        /**
         * モデルを描画する
         */
        CubismRenderer.prototype.drawModel = function () {
            if (this.getModel() == null)
                return;
            this.doDrawModel();
        };
        /**
         * Model-View-Projection 行列をセットする
         * 配列は複製されるので、元の配列は外で破棄して良い
         * @param matrix44 Model-View-Projection 行列
         */
        CubismRenderer.prototype.setMvpMatrix = function (matrix44) {
            this._mvpMatrix4x4.setMatrix(matrix44.getArray());
        };
        /**
         * Model-View-Projection 行列を取得する
         * @return Model-View-Projection 行列
         */
        CubismRenderer.prototype.getMvpMatrix = function () {
            return this._mvpMatrix4x4;
        };
        /**
         * モデルの色をセットする
         * 各色0.0~1.0の間で指定する（1.0が標準の状態）
         * @param red 赤チャンネルの値
         * @param green 緑チャンネルの値
         * @param blue 青チャンネルの値
         * @param alpha αチャンネルの値
         */
        CubismRenderer.prototype.setModelColor = function (red, green, blue, alpha) {
            if (red < 0.0) {
                red = 0.0;
            }
            else if (red > 1.0) {
                red = 1.0;
            }
            if (green < 0.0) {
                green = 0.0;
            }
            else if (green > 1.0) {
                green = 1.0;
            }
            if (blue < 0.0) {
                blue = 0.0;
            }
            else if (blue > 1.0) {
                blue = 1.0;
            }
            if (alpha < 0.0) {
                alpha = 0.0;
            }
            else if (alpha > 1.0) {
                alpha = 1.0;
            }
            this._modelColor.R = red;
            this._modelColor.G = green;
            this._modelColor.B = blue;
            this._modelColor.A = alpha;
        };
        /**
         * モデルの色を取得する
         * 各色0.0~1.0の間で指定する(1.0が標準の状態)
         *
         * @return RGBAのカラー情報
         */
        CubismRenderer.prototype.getModelColor = function () {
            return JSON.parse(JSON.stringify(this._modelColor));
        };
        /**
         * 乗算済みαの有効・無効をセットする
         * 有効にするならtrue、無効にするならfalseをセットする
         */
        CubismRenderer.prototype.setIsPremultipliedAlpha = function (enable) {
            this._isPremultipliedAlpha = enable;
        };
        /**
         * 乗算済みαの有効・無効を取得する
         * @return true 乗算済みのα有効
         * @return false 乗算済みのα無効
         */
        CubismRenderer.prototype.isPremultipliedAlpha = function () {
            return this._isPremultipliedAlpha;
        };
        /**
         * カリング（片面描画）の有効・無効をセットする。
         * 有効にするならtrue、無効にするならfalseをセットする
         */
        CubismRenderer.prototype.setIsCulling = function (culling) {
            this._isCulling = culling;
        };
        /**
         * カリング（片面描画）の有効・無効を取得する。
         * @return true カリング有効
         * @return false カリング無効
         */
        CubismRenderer.prototype.isCulling = function () {
            return this._isCulling;
        };
        /**
         * テクスチャの異方性フィルタリングのパラメータをセットする
         * パラメータ値の影響度はレンダラの実装に依存する
         * @param n パラメータの値
         */
        CubismRenderer.prototype.setAnisotropy = function (n) {
            this._anisortopy = n;
        };
        /**
         * テクスチャの異方性フィルタリングのパラメータをセットする
         * @return 異方性フィルタリングのパラメータ
         */
        CubismRenderer.prototype.getAnisotropy = function () {
            return this._anisortopy;
        };
        /**
         * レンダリングするモデルを取得する
         * @return レンダリングするモデル
         */
        CubismRenderer.prototype.getModel = function () {
            return this._model;
        };
        return CubismRenderer;
    }());
    Live2DCubismFramework.CubismRenderer = CubismRenderer;
    var CubismBlendMode;
    (function (CubismBlendMode) {
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Normal"] = 0] = "CubismBlendMode_Normal";
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Additive"] = 1] = "CubismBlendMode_Additive";
        CubismBlendMode[CubismBlendMode["CubismBlendMode_Multiplicative"] = 2] = "CubismBlendMode_Multiplicative";
    })(CubismBlendMode = Live2DCubismFramework.CubismBlendMode || (Live2DCubismFramework.CubismBlendMode = {}));
    ;
    /**
     * テクスチャの色をRGBAで扱うためのクラス
     */
    var CubismTextureColor = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismTextureColor() {
            this.R = 1.0;
            this.G = 1.0;
            this.B = 1.0;
            this.A = 1.0;
        }
        return CubismTextureColor;
    }());
    Live2DCubismFramework.CubismTextureColor = CubismTextureColor;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmmap.ts":
/*!**********************************!*\
  !*** ./Framework/type/csmmap.ts ***!
  \**********************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../utils/cubismdebug */ "./Framework/utils/cubismdebug.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */

var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * Key-Valueのペアを定義するクラス
     * csmMapクラスの内部データで使用する。
     */
    var csmPair = /** @class */ (function () {
        /**
         * コンストラクタ
         * @param key Keyとしてセットする値
         * @param value Valueとしてセットする値
         */
        function csmPair(key, value) {
            this.first = (key == undefined)
                ? null
                : key;
            this.second = (value == undefined)
                ? null
                : value;
        }
        return csmPair;
    }());
    Live2DCubismFramework.csmPair = csmPair;
    /**
     * マップ型
     */
    var csmMap = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         * @param size 初期化時点で確保するサイズ
         */
        function csmMap(size) {
            if (size != undefined) {
                if (size < 1) {
                    this._keyValues = new Array();
                    this._dummyValue = null;
                    this._size = 0;
                }
                else {
                    this._keyValues = new Array(size);
                    this._size = size;
                }
            }
            else {
                this._keyValues = new Array();
                this._dummyValue = null;
                this._size = 0;
            }
        }
        /**
         * デストラクタ
         */
        csmMap.prototype.release = function () {
            this.clear();
        };
        /**
         * キーを追加する
         * @param key 新たに追加するキー
         */
        csmMap.prototype.appendKey = function (key) {
            // 新しくKey/Valueのペアを作る
            this.prepareCapacity(this._size + 1, false); // 1つ以上入る隙間を作る
            // 新しいkey/valueのインデックスは_size
            this._keyValues[this._size] = new csmPair(key);
            this._size += 1;
        };
        /**
         * 添字演算子[key]のオーバーロード(get)
         * @param key 添字から特定されるValue値
         */
        csmMap.prototype.getValue = function (key) {
            var found = -1;
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    found = i;
                    break;
                }
            }
            if (found >= 0) {
                return this._keyValues[found].second;
            }
            else {
                this.appendKey(key); // 新規キーを追加
                return this._keyValues[this._size - 1].second;
            }
        };
        /**
         * 添字演算子[key]のオーバーロード(set)
         * @param key 添字から特定されるValue値
         * @param value 代入するValue値
         */
        csmMap.prototype.setValue = function (key, value) {
            var found = -1;
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    found = i;
                    break;
                }
            }
            if (found >= 0) {
                this._keyValues[found].second = value;
            }
            else {
                this.appendKey(key); // 新規キーを追加
                this._keyValues[this._size - 1].second = value;
            }
        };
        /**
         * 引数で渡したKeyを持つ要素が存在するか
         * @param key 存在を確認するkey
         * @return true 引数で渡したkeyを持つ要素が存在する
         * @return false 引数で渡したkeyを持つ要素が存在しない
         */
        csmMap.prototype.isExist = function (key) {
            for (var i = 0; i < this._size; i++) {
                if (this._keyValues[i].first == key) {
                    return true;
                }
            }
            return false;
        };
        /**
         * keyValueのポインタを全て解放する
         */
        csmMap.prototype.clear = function () {
            this._keyValues = void 0;
            this._keyValues = null;
            this._keyValues = new Array();
            this._size = 0;
        };
        /**
         * コンテナのサイズを取得する
         *
         * @return コンテナのサイズ
         */
        csmMap.prototype.getSize = function () {
            return this._size;
        };
        /**
         * コンテナのキャパシティを確保する
         * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない。
         * @param fitToSize trueなら指定したサイズに合わせる。falseならサイズを2倍確保しておく。
         */
        csmMap.prototype.prepareCapacity = function (newSize, fitToSize) {
            if (newSize > this._keyValues.length) {
                if (this._keyValues.length == 0) {
                    if (!fitToSize && newSize < csmMap.DefaultSize)
                        newSize = csmMap.DefaultSize;
                    this._keyValues.length = newSize;
                }
                else {
                    if (!fitToSize && newSize < this._keyValues.length * 2)
                        newSize = this._keyValues.length * 2;
                    this._keyValues.length = newSize;
                }
            }
        };
        /**
         * コンテナの先頭要素を返す
         */
        csmMap.prototype.begin = function () {
            var ite = new iterator(this, 0);
            return ite;
        };
        /**
         * コンテナの終端要素を返す
         */
        csmMap.prototype.end = function () {
            var ite = new iterator(this, this._size); // 終了
            return ite;
        };
        /**
         * コンテナから要素を削除する
         *
         * @param ite 削除する要素
         */
        csmMap.prototype.erase = function (ite) {
            var index = ite._index;
            if (index < 0 || this._size <= index) {
                return ite; // 削除範囲外
            }
            // 削除
            this._keyValues.splice(index, 1);
            --this._size;
            var ite2 = new iterator(this, index); // 終了
            return ite2;
        };
        /**
         * コンテナの値を32ビット符号付き整数型でダンプする
         */
        csmMap.prototype.dumpAsInt = function () {
            for (var i = 0; i < this._size; i++) {
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__["CubismLogDebug"])("{0} ,", this._keyValues[i]);
                Object(_utils_cubismdebug__WEBPACK_IMPORTED_MODULE_0__["CubismLogDebug"])("\n");
            }
        };
        csmMap.DefaultSize = 10; // コンテナの初期化のデフォルトサイズ
        return csmMap;
    }());
    Live2DCubismFramework.csmMap = csmMap;
    /**
     * csmMap<T>のイテレータ
     */
    var iterator = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function iterator(v, idx) {
            this._map = (v != undefined)
                ? v
                : new csmMap();
            this._index = (idx != undefined)
                ? idx
                : 0;
        }
        /**
         * =演算子のオーバーロード
         */
        iterator.prototype.set = function (ite) {
            this._index = ite._index;
            this._map = ite._map;
            return this;
        };
        /**
         * 前置き++演算子のオーバーロード
         */
        iterator.prototype.preIncrement = function () {
            ++this._index;
            return this;
        };
        /**
         * 前置き--演算子のオーバーロード
         */
        iterator.prototype.preDecrement = function () {
            --this._index;
            return this;
        };
        /**
         * 後置き++演算子のオーバーロード
         */
        iterator.prototype.increment = function () {
            var iteold = new iterator(this._map, this._index++); // 古い値を保存
            this._map = iteold._map;
            this._index = iteold._index;
            return this;
        };
        /**
         * 後置き--演算子のオーバーロード
         */
        iterator.prototype.decrement = function () {
            var iteold = new iterator(this._map, this._index); // 古い値を保存
            this._map = iteold._map;
            this._index = iteold._index;
            return this;
        };
        /**
         * *演算子のオーバーロード
         */
        iterator.prototype.ptr = function () {
            return this._map._keyValues[this._index];
        };
        /**
         * !=演算
         */
        iterator.prototype.notEqual = function (ite) {
            return (this._index != ite._index) || (this._map != ite._map);
        };
        return iterator;
    }());
    Live2DCubismFramework.iterator = iterator;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmstring.ts":
/*!*************************************!*\
  !*** ./Framework/type/csmstring.ts ***!
  \*************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * 文字列クラス。
     */
    var csmString = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         */
        function csmString(s) {
            this.s = s;
        }
        /**
         * 文字列を後方に追加する
         *
         * @param c 追加する文字列
         * @return 更新された文字列
         */
        csmString.prototype.append = function (c, length) {
            this.s += (length !== undefined)
                ? c.substr(0, length)
                : c;
            return this;
        };
        /**
         * 文字サイズを拡張して文字を埋める
         * @param length    拡張する文字数
         * @param v         埋める文字
         * @return 更新された文字列
         */
        csmString.prototype.expansion = function (length, v) {
            var ret = this;
            for (var i = 0; i < length; i++) {
                ret.append(v);
            }
            return ret;
        };
        /**
         * 文字列の長さをバイト数で取得する
         */
        csmString.prototype.getBytes = function () {
            return encodeURIComponent(this.s).replace(/%../g, "x").length;
        };
        /**
         * 文字列の長さを返す
         */
        csmString.prototype.getLength = function () {
            return this.s.length;
        };
        /**
         * 文字列比較　<
         * @param s 比較する文字列
         * @return true:    比較する文字列より小さい
         * @return false:   比較する文字列より大きい
         */
        csmString.prototype.isLess = function (s) {
            return this.s < s.s;
        };
        /**
         * 文字列比較 >
         * @param s 比較する文字列
         * @return true:    比較する文字列より大きい
         * @return false:   比較する文字列より小さい
         */
        csmString.prototype.isGreat = function (s) {
            return this.s > s.s;
        };
        /**
         * 文字列比較 ==
         * @param s 比較する文字列
         * @return true:    比較する文字列と等しい
         * @return false:   比較する文字列と異なる
         */
        csmString.prototype.isEqual = function (s) {
            return this.s == s;
        };
        /**
         * 文字列が空かどうか
         * @return true: 空の文字列
         * @return false: 値が設定されている
         */
        csmString.prototype.isEmpty = function () {
            return this.s.length == 0;
        };
        return csmString;
    }());
    Live2DCubismFramework.csmString = csmString;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/type/csmvector.ts":
/*!*************************************!*\
  !*** ./Framework/type/csmvector.ts ***!
  \*************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * ベクター型（可変配列型）
     */
    var csmVector = /** @class */ (function () {
        /**
         * 引数付きコンストラクタ
         * @param iniitalCapacity 初期化後のキャパシティ。データサイズは_capacity * sizeof(T)
         * @param zeroClear trueなら初期化時に確保した領域を0で埋める
         */
        function csmVector(initialCapacity) {
            if (initialCapacity === void 0) { initialCapacity = 0; }
            if (initialCapacity < 1) {
                this._ptr = new Array();
                this._capacity = 0;
                this._size = 0;
            }
            else {
                this._ptr = new Array(initialCapacity);
                this._capacity = initialCapacity;
                this._size = 0;
            }
        }
        /**
         * インデックスで指定した要素を返す
         */
        csmVector.prototype.at = function (index) {
            return this._ptr[index];
        };
        /**
         * 要素をセット
         * @param index 要素をセットするインデックス
         * @param value セットする要素
         */
        csmVector.prototype.set = function (index, value) {
            this._ptr[index] = value;
        };
        /**
         * コンテナを取得する
         */
        csmVector.prototype.get = function (offset) {
            if (offset === void 0) { offset = 0; }
            var ret = new Array();
            for (var i = offset; i < this._size; i++) {
                ret.push(this._ptr[i]);
            }
            return ret;
        };
        /**
         * pushBack処理、コンテナに新たな要素を追加する
         * @param value PushBack処理で追加する値
         */
        csmVector.prototype.pushBack = function (value) {
            if (this._size >= this._capacity) {
                this.prepareCapacity(this._capacity == 0 ? csmVector.s_defaultSize : this._capacity * 2);
            }
            this._ptr[this._size++] = value;
        };
        /**
         * コンテナの全要素を解放する
         */
        csmVector.prototype.clear = function () {
            this._ptr.length = 0;
            this._size = 0;
        };
        /**
         * コンテナの要素数を返す
         * @return コンテナの要素数
         */
        csmVector.prototype.getSize = function () {
            return this._size;
        };
        /**
         * コンテナの全要素に対して代入処理を行う
         * @param newSize 代入処理後のサイズ
         * @param value 要素に代入する値
         */
        csmVector.prototype.assign = function (newSize, value) {
            var curSize = this._size;
            if (curSize < newSize) {
                this.prepareCapacity(newSize); // capacity更新
            }
            for (var i = 0; i < newSize; i++) {
                this._ptr[i] = value;
            }
            this._size = newSize;
        };
        /**
         * サイズ変更
         */
        csmVector.prototype.resize = function (newSize, value) {
            if (value === void 0) { value = null; }
            this.updateSize(newSize, value, true);
        };
        /**
         * サイズ変更
         */
        csmVector.prototype.updateSize = function (newSize, value, callPlacementNew) {
            if (value === void 0) { value = null; }
            if (callPlacementNew === void 0) { callPlacementNew = true; }
            var curSize = this._size;
            if (curSize < newSize) {
                this.prepareCapacity(newSize); // capacity更新
                if (callPlacementNew) {
                    for (var i = this._size; i < newSize; i++) {
                        if (typeof value == 'function') // new
                         {
                            this._ptr[i] = JSON.parse(JSON.stringify(new value()));
                        }
                        else // プリミティブ型なので値渡し
                         {
                            this._ptr[i] = value;
                        }
                    }
                }
                else {
                    for (var i = this._size; i < newSize; i++) {
                        this._ptr[i] = value;
                    }
                }
            }
            else {
                // newSize <= this._size
                //---
                var sub = this._size - newSize;
                this._ptr.splice(this._size - sub, sub); // 不要なので破棄する
            }
            this._size = newSize;
        };
        /**
         * コンテナにコンテナ要素を挿入する
         * @param position 挿入する位置
         * @param begin　挿入するコンテナの開始位置
         * @param end 挿入するコンテナの終端位置
         */
        csmVector.prototype.insert = function (position, begin, end) {
            var dstSi = position._index;
            var srcSi = begin._index;
            var srcEi = end._index;
            var addCount = srcEi - srcSi;
            this.prepareCapacity(this._size + addCount);
            // 挿入用の既存データをシフトして隙間を作る
            var addSize = this._size - dstSi;
            if (addSize > 0) {
                for (var i = 0; i < addSize; i++) {
                    this._ptr.splice(dstSi + i, 0, null);
                }
            }
            for (var i = srcSi; i < srcEi; i++, dstSi++) {
                this._ptr[dstSi] = begin._vector._ptr[i];
            }
            this._size = this._size + addCount;
        };
        /**
         * コンテナからインデックスで指定した要素を削除する
         * @param index インデックス値
         * @return true 削除実行
         * @return false 削除範囲外
         */
        csmVector.prototype.remove = function (index) {
            if (index < 0 || this._size <= index) {
                return false; // 削除範囲外
            }
            this._ptr.splice(index, 1);
            --this._size;
            return true;
        };
        /**
         * コンテナから要素を削除して他の要素をシフトする
         * @param ite 削除する要素
         */
        csmVector.prototype.erase = function (ite) {
            var index = ite._index;
            if (index < 0 || this._size <= index) {
                return ite; // 削除範囲外
            }
            // 削除
            this._ptr.splice(index, 1);
            --this._size;
            var ite2 = new iterator(this, index); // 終了
            return ite2;
        };
        /**
         * コンテナのキャパシティを確保する
         * @param newSize 新たなキャパシティ。引数の値が現在のサイズ未満の場合は何もしない.
         */
        csmVector.prototype.prepareCapacity = function (newSize) {
            if (newSize > this._capacity) {
                if (this._capacity == 0) {
                    this._ptr = new Array(newSize);
                    this._capacity = newSize;
                }
                else {
                    this._ptr.length = newSize;
                    this._capacity = newSize;
                }
            }
        };
        /**
         * コンテナの先頭要素を返す
         */
        csmVector.prototype.begin = function () {
            var ite = (this._size == 0)
                ? this.end()
                : new iterator(this, 0);
            return ite;
        };
        /**
         * コンテナの終端要素を返す
         */
        csmVector.prototype.end = function () {
            var ite = new iterator(this, this._size);
            return ite;
        };
        csmVector.prototype.getOffset = function (offset) {
            var newVector = new csmVector();
            newVector._ptr = this.get(offset);
            newVector._size = this.get(offset).length;
            newVector._capacity = this.get(offset).length;
            return newVector;
        };
        csmVector.s_defaultSize = 10; // コンテナ初期化のデフォルトサイズ
        return csmVector;
    }());
    Live2DCubismFramework.csmVector = csmVector;
    var iterator = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function iterator(v, index) {
            this._vector = (v != undefined) ? v : null;
            this._index = (index != undefined) ? index : 0;
        }
        /**
         * 代入
         */
        iterator.prototype.set = function (ite) {
            this._index = ite._index;
            this._vector = ite._vector;
            return this;
        };
        /**
         * 前置き++演算
         */
        iterator.prototype.preIncrement = function () {
            ++this._index;
            return this;
        };
        /**
         * 前置き--演算
         */
        iterator.prototype.preDecrement = function () {
            --this._index;
            return this;
        };
        /**
         * 後置き++演算子
         */
        iterator.prototype.increment = function () {
            var iteold = new iterator(this._vector, this._index++);
            this._vector = iteold._vector;
            this._index = iteold._index;
            return this;
        };
        /**
         * 後置き--演算子
         */
        iterator.prototype.decrement = function () {
            var iteold = new iterator(this._vector, this._index--); // 古い値を保存
            this._vector = iteold._vector;
            this._index = iteold._index;
            return this;
        };
        /**
         * ptr
         */
        iterator.prototype.ptr = function () {
            return this._vector._ptr[this._index];
        };
        /**
         * =演算子のオーバーロード
         */
        iterator.prototype.substitution = function (ite) {
            this._index = ite._index;
            this._vector = ite._vector;
            return this;
        };
        /**
         * !=演算子のオーバーロード
         */
        iterator.prototype.notEqual = function (ite) {
            return (this._index != ite._index) || (this._vector != ite._vector);
        };
        return iterator;
    }());
    Live2DCubismFramework.iterator = iterator;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ }),

/***/ "./Framework/utils/cubismdebug.ts":
/*!****************************************!*\
  !*** ./Framework/utils/cubismdebug.ts ***!
  \****************************************/
/*! exports provided: CubismLogPrint, CubismLogPrintIn, CSM_ASSERT, CubismLogVerbose, CubismLogDebug, CubismLogInfo, CubismLogWarning, CubismLogError, Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogPrint", function() { return CubismLogPrint; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogPrintIn", function() { return CubismLogPrintIn; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CSM_ASSERT", function() { return CSM_ASSERT; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogVerbose", function() { return CubismLogVerbose; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogDebug", function() { return CubismLogDebug; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogInfo", function() { return CubismLogInfo; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogWarning", function() { return CubismLogWarning; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "CubismLogError", function() { return CubismLogError; });
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/* harmony import */ var _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../cubismframeworkconfig */ "./Framework/cubismframeworkconfig.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */


var CubismLogPrint = function (level, fmt, args) {
    Live2DCubismFramework.CubismDebug.print(level, "[CSM]" + fmt, args);
};
var CubismLogPrintIn = function (level, fmt, args) {
    CubismLogPrint(level, fmt + "\n", args);
};
var CSM_ASSERT = function (expr) {
    console.assert(expr);
};
var CubismLogVerbose = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogDebug = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogInfo = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogWarning = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
var CubismLogError = function (fmt) {
    var args = [];
    for (var _i = 1; _i < arguments.length; _i++) {
        args[_i - 1] = arguments[_i];
    }
};
if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] <= _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_VERBOSE"]) {
    CubismLogVerbose = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Verbose, "[V]" + fmt, args);
    };
    CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Debug, "[D]" + fmt, args);
    };
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_DEBUG"]) {
    CubismLogDebug = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Debug, "[D]" + fmt, args);
    };
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_INFO"]) {
    CubismLogInfo = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Info, "[I]" + fmt, args);
    };
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_WARNING"]) {
    CubismLogWarning = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Warning, "[W]" + fmt, args);
    };
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
else if (_cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL"] == _cubismframeworkconfig__WEBPACK_IMPORTED_MODULE_1__["CSM_LOG_LEVEL_ERROR"]) {
    CubismLogError = function (fmt) {
        var args = [];
        for (var _i = 1; _i < arguments.length; _i++) {
            args[_i - 1] = arguments[_i];
        }
        CubismLogPrintIn(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["LogLevel"].LogLevel_Error, "[E]" + fmt, args);
    };
}
//------------ LIVE2D NAMESPACE ------------
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    /**
     * デバッグ用のユーティリティクラス。
     * ログの出力、バイトのダンプなど
     */
    var CubismDebug = /** @class */ (function () {
        /**
         * private コンストラクタ
         */
        function CubismDebug() {
        }
        /**
         * ログを出力する。第一引数にログレベルを設定する。
         * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
         *
         * @param logLevel ログレベルの設定
         * @param format 書式付き文字列
         * @param args 可変長引数
         */
        CubismDebug.print = function (logLevel, format, args) {
            // オプションで設定されたログ出力レベルを下回る場合はログに出さない
            if (logLevel < _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework.getLoggingLevel()) {
                return;
            }
            var logPrint = _live2dcubismframework__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].CubismFramework.coreLogFunction;
            if (!logPrint)
                return;
            var buffer = format.replace(/\{(\d+)\}/g, function (m, k) {
                return args[k];
            });
            logPrint(buffer);
        };
        /**
         * データから指定した長さだけダンプ出力する。
         * CubismFramework.initialize()時にオプションで設定されたログ出力レベルを下回る場合はログに出さない。
         *
         * @param logLevel ログレベルの設定
         * @param data ダンプするデータ
         * @param length ダンプする長さ
         */
        CubismDebug.dumpBytes = function (logLevel, data, length) {
            for (var i = 0; i < length; i++) {
                if (i % 16 == 0 && i > 0)
                    this.print(logLevel, "\n");
                else if (i % 8 == 0 && i > 0)
                    this.print(logLevel, "  ");
                this.print(logLevel, "{0} ", [(data[i] & 0xFF)]);
            }
            this.print(logLevel, "\n");
        };
        return CubismDebug;
    }());
    Live2DCubismFramework.CubismDebug = CubismDebug;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));
//------------ LIVE2D NAMESPACE ------------


/***/ }),

/***/ "./Framework/utils/cubismjson.ts":
/*!***************************************!*\
  !*** ./Framework/utils/cubismjson.ts ***!
  \***************************************/
/*! exports provided: Live2DCubismFramework */
/***/ (function(module, __webpack_exports__, __webpack_require__) {

"use strict";
__webpack_require__.r(__webpack_exports__);
/* harmony export (binding) */ __webpack_require__.d(__webpack_exports__, "Live2DCubismFramework", function() { return Live2DCubismFramework; });
/* harmony import */ var _type_csmstring__WEBPACK_IMPORTED_MODULE_0__ = __webpack_require__(/*! ../type/csmstring */ "./Framework/type/csmstring.ts");
/* harmony import */ var _type_csmmap__WEBPACK_IMPORTED_MODULE_1__ = __webpack_require__(/*! ../type/csmmap */ "./Framework/type/csmmap.ts");
/* harmony import */ var _type_csmvector__WEBPACK_IMPORTED_MODULE_2__ = __webpack_require__(/*! ../type/csmvector */ "./Framework/type/csmvector.ts");
/* harmony import */ var _cubismdebug__WEBPACK_IMPORTED_MODULE_3__ = __webpack_require__(/*! ./cubismdebug */ "./Framework/utils/cubismdebug.ts");
/* harmony import */ var _live2dcubismframework__WEBPACK_IMPORTED_MODULE_4__ = __webpack_require__(/*! ../live2dcubismframework */ "./Framework/live2dcubismframework.ts");
/*
 * Copyright(c) Live2D Inc. All rights reserved.
 *
 * Use of this source code is governed by the Live2D Open Software license
 * that can be found at http://live2d.com/eula/live2d-open-software-license-agreement_en.html.
 */
var __extends = (undefined && undefined.__extends) || (function () {
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
    };
})();





var csmVector = _type_csmvector__WEBPACK_IMPORTED_MODULE_2__["Live2DCubismFramework"].csmVector;
var csmMap = _type_csmmap__WEBPACK_IMPORTED_MODULE_1__["Live2DCubismFramework"].csmMap;
var csmString = _type_csmstring__WEBPACK_IMPORTED_MODULE_0__["Live2DCubismFramework"].csmString;
var Live2DCubismFramework;
(function (Live2DCubismFramework) {
    // StaticInitializeNotForClientCall()で初期化する
    var CSM_JSON_ERROR_TYPE_MISMATCH = "Error: type mismatch";
    var CSM_JSON_ERROR_INDEX_OF_BOUNDS = "Error: index out of bounds";
    /**
     * パースしたJSONエレメントの要素の基底クラス。
     */
    var Value = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function Value() {
        }
        /**
         * 要素を文字列型で返す(string)
         */
        Value.prototype.getRawString = function (defaultValue, indent) {
            return this.getString(defaultValue, indent);
        };
        /**
         * 要素を数値型で返す(number)
         */
        Value.prototype.toInt = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return defaultValue;
        };
        /**
         * 要素を数値型で返す(number)
         */
        Value.prototype.toFloat = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return defaultValue;
        };
        /**
         * 要素を真偽値で返す(boolean)
         */
        Value.prototype.toBoolean = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            return defaultValue;
        };
        /**
         * サイズを返す
         */
        Value.prototype.getSize = function () {
            return 0;
        };
        /**
         * 要素を配列で返す(Value[])
         */
        Value.prototype.getArray = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = null; }
            return defaultValue;
        };
        /**
         * 要素をコンテナで返す(array)
         */
        Value.prototype.getVector = function (defaultValue) {
            return defaultValue;
        };
        /**
         * 要素をマップで返す(csmMap<csmString, Value>)
         */
        Value.prototype.getMap = function (defaultValue) {
            return defaultValue;
        };
        /**
         * 添字演算子[index]
         */
        Value.prototype.getValueByIndex = function (index) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 添字演算子[string | csmString]
         */
        Value.prototype.getValueByString = function (s) {
            return Value.nullValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * マップのキー一覧をコンテナで返す
         *
         * @return マップのキーの一覧
         */
        Value.prototype.getKeys = function () {
            return Value.s_dummyKeys;
        };
        /**
         * Valueの種類がエラー値ならtrue
         */
        Value.prototype.isError = function () {
            return false;
        };
        /**
         * Valueの種類がnullならtrue
         */
        Value.prototype.isNull = function () {
            return false;
        };
        /**
         * Valueの種類が真偽値ならtrue
         */
        Value.prototype.isBool = function () {
            return false;
        };
        /**
         * Valueの種類が数値型ならtrue
         */
        Value.prototype.isFloat = function () {
            return false;
        };
        /**
         * Valueの種類が文字列ならtrue
         */
        Value.prototype.isString = function () {
            return false;
        };
        /**
         * Valueの種類が配列ならtrue
         */
        Value.prototype.isArray = function () {
            return false;
        };
        /**
         * Valueの種類がマップ型ならtrue
         */
        Value.prototype.isMap = function () {
            return false;
        };
        Value.prototype.equals = function (value) {
            return false;
        };
        /**
         * Valueの値が静的ならtrue、静的なら解放しない
         */
        Value.prototype.isStatic = function () {
            return false;
        };
        /**
         * Valueにエラー値をセットする
         */
        Value.prototype.setErrorNotForClientCall = function (errorStr) {
            return JsonError.errorValue;
        };
        /**
         * 初期化用メソッド
         */
        Value.staticInitializeNotForClientCall = function () {
            JsonBoolean.trueValue = new JsonBoolean(true);
            JsonBoolean.falseValue = new JsonBoolean(false);
            JsonError.errorValue = new JsonError("ERROR", true);
            this.nullValue = new JsonNullvalue();
            Value.s_dummyKeys = new csmVector();
        };
        /**
         * リリース用メソッド
         */
        Value.staticReleaseNotForClientCall = function () {
            JsonBoolean.trueValue = null;
            JsonBoolean.falseValue = null;
            JsonError.errorValue = null;
            Value.nullValue = null;
            Value.s_dummyKeys = null;
            JsonBoolean.trueValue = null;
            JsonBoolean.falseValue = null;
            JsonError.errorValue = null;
            Value.nullValue = null;
            Value.s_dummyKeys = null;
        };
        return Value;
    }());
    Live2DCubismFramework.Value = Value;
    /**
     * Ascii文字のみ対応した最小限の軽量JSONパーサ。
     * 仕様はJSONのサブセットとなる。
     * 設定ファイル(model3.json)などのロード用
     *
     * [未対応項目]
     * ・日本語などの非ASCII文字
     * ・eによる指数表現
     */
    var CubismJson = /** @class */ (function () {
        /**
         * コンストラクタ
         */
        function CubismJson(buffer, length) {
            this._error = null;
            this._lineCount = 0;
            this._root = null;
            if (buffer != undefined) {
                this.parseBytes(buffer, length);
            }
        }
        /**
         * バイトデータから直接ロードしてパースする
         *
         * @param buffer バッファ
         * @param size バッファサイズ
         * @return CubismJsonクラスのインスタンス。失敗したらNULL
         */
        CubismJson.create = function (buffer, size) {
            var json = new CubismJson();
            var succeeded = json.parseBytes(buffer, size);
            if (!succeeded) {
                CubismJson.delete(json);
                return null;
            }
            else {
                return json;
            }
        };
        /**
         * パースしたJSONオブジェクトの解放処理
         *
         * @param instance CubismJsonクラスのインスタンス
         */
        CubismJson.delete = function (instance) {
            instance = null;
        };
        /**
         * パースしたJSONのルート要素を返す
         */
        CubismJson.prototype.getRoot = function () {
            return this._root;
        };
        /**
         *  UnicodeのバイナリをStringに変換
         *
         * @param buffer 変換するバイナリデータ
         * @return 変換後の文字列
         */
        CubismJson.prototype.arrayBufferToString = function (buffer) {
            var uint8Array = new Uint8Array(buffer);
            var str = "";
            for (var i = 0, len = uint8Array.length; i < len; ++i) {
                str += ("%" + this.pad(uint8Array[i].toString(16)));
            }
            str = decodeURIComponent(str);
            return str;
        };
        /**
         * エンコード、パディング
         */
        CubismJson.prototype.pad = function (n) {
            return n.length < 2
                ? "0" + n
                : n;
        };
        ;
        /**
         * JSONのパースを実行する
         * @param buffer    パース対象のデータバイト
         * @param size      データバイトのサイズ
         * return true : 成功
         * return false: 失敗
         */
        CubismJson.prototype.parseBytes = function (buffer, size) {
            var endPos = new Array(1); // 参照渡しにするため配列
            var decodeBuffer = this.arrayBufferToString(buffer);
            this._root = this.parseValue(decodeBuffer, size, 0, endPos);
            if (this._error) {
                var strbuf = '\0';
                strbuf = "Json parse error : @line " + (this._lineCount + 1) + "\n";
                this._root = new JsonString(strbuf);
                Object(_cubismdebug__WEBPACK_IMPORTED_MODULE_3__["CubismLogInfo"])("{0}", this._root.getRawString());
                return false;
            }
            else if (this._root == null) {
                this._root = new JsonError(new csmString(this._error), false); // rootは解放されるのでエラーオブジェクトを別途作成する
                return false;
            }
            return true;
        };
        /**
         * パース時のエラー値を返す
         */
        CubismJson.prototype.getParseError = function () {
            return this._error;
        };
        /**
         * ルート要素の次の要素がファイルの終端だったらtrueを返す
         */
        CubismJson.prototype.checkEndOfFile = function () {
            return this._root.getArray()[1].equals("EOF");
        };
        /**
         * JSONエレメントからValue(float,String,Value*,Array,null,true,false)をパースする
         * エレメントの書式に応じて内部でParseString(), ParseObject(), ParseArray()を呼ぶ
         *
         * @param   buffer      JSONエレメントのバッファ
         * @param   length      パースする長さ
         * @param   begin       パースを開始する位置
         * @param   outEndPos   パース終了時の位置
         * @return      パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseValue = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var o = null;
            var i = begin;
            var f;
            for (; i < length; i++) {
                var c = buffer[i];
                switch (c) {
                    case '-':
                    case '.':
                    case '0':
                    case '1':
                    case '2':
                    case '3':
                    case '4':
                    case '5':
                    case '6':
                    case '7':
                    case '8':
                    case '9':
                        {
                            var afterString = new Array(1); // 参照渡しにするため
                            f = Object(_live2dcubismframework__WEBPACK_IMPORTED_MODULE_4__["strtod"])(buffer.slice(i), afterString);
                            outEndPos[0] = buffer.indexOf(afterString[0]);
                            return new JsonFloat(f);
                        }
                    case '\"':
                        return new JsonString(this.parseString(buffer, length, i + 1, outEndPos)); // \"の次の文字から
                    case '[':
                        o = this.parseArray(buffer, length, i + 1, outEndPos);
                        return o;
                    case '{':
                        o = this.parseObject(buffer, length, i + 1, outEndPos);
                        return o;
                    case 'n': // null以外にない
                        if (i + 3 < length) {
                            o = new JsonNullvalue(); // 解放できるようにする
                            outEndPos[0] = i + 4;
                        }
                        else {
                            this._error = "parse null";
                        }
                        return o;
                    case 't': // true以外にない
                        if (i + 3 < length) {
                            o = JsonBoolean.trueValue;
                            outEndPos[0] = i + 4;
                        }
                        else {
                            this._error = "parse true";
                        }
                        return o;
                    case 'f': // false以外にない
                        if (i + 4 < length) {
                            o = JsonBoolean.falseValue;
                            outEndPos[0] = i + 5;
                        }
                        else {
                            this._error = "illegal ',' position";
                        }
                        return o;
                    case ',': // Array separator
                        this._error = "illegal ',' position";
                        return null;
                    case ']': // 不正な｝だがスキップする。配列の最後に不要な , があると思われる
                        outEndPos[0] = i; // 同じ文字を再処理
                        return null;
                    case '\n':
                        this._lineCount++;
                    case ' ':
                    case '\t':
                    case '\r':
                    default: // スキップ
                        break;
                }
            }
            this._error = "illegal end of value";
            return null;
        };
        /**
         * 次の「"」までの文字列をパースする。
         *
         * @param   string  ->  パース対象の文字列
         * @param   length  ->  パースする長さ
         * @param   begin   ->  パースを開始する位置
         * @param  outEndPos   ->  パース終了時の位置
         * @return      パースした文F字列要素
         */
        CubismJson.prototype.parseString = function (string, length, begin, outEndPos) {
            if (this._error)
                return null;
            var i = begin;
            var c, c2;
            var ret = new csmString("");
            var bufStart = begin; // sbufに登録されていない文字の開始位置
            for (; i < length; i++) {
                c = string[i];
                switch (c) {
                    case '\"': // 終端の”、エスケープ文字は別に処理されるのでここに来ない
                        {
                            outEndPos[0] = i + 1; // ”の次の文字
                            ret.append(string.slice(bufStart), (i - bufStart)); // 前の文字までを登録する
                            return ret.s;
                        }
                    case '//': // エスケープの場合
                        {
                            i++; // ２文字をセットで扱う
                            if (i - 1 > bufStart) {
                                ret.append(string.slice(bufStart), (i - bufStart)); // 前の文字までを登録する
                            }
                            bufStart = i + 1; // エスケープ（２文字)の次の文字から
                            if (i < length) {
                                c2 = string[i];
                                switch (c2) {
                                    case '\\':
                                        ret.expansion(1, '\\');
                                        break;
                                    case '\"':
                                        ret.expansion(1, '\"');
                                        break;
                                    case '/':
                                        ret.expansion(1, '/');
                                        break;
                                    case 'b':
                                        ret.expansion(1, '\b');
                                        break;
                                    case 'f':
                                        ret.expansion(1, '\f');
                                        break;
                                    case 'n':
                                        ret.expansion(1, '\n');
                                        break;
                                    case 'r':
                                        ret.expansion(1, '\r');
                                        break;
                                    case 't':
                                        ret.expansion(1, '\t');
                                        break;
                                    case 'u':
                                        this._error = "parse string/unicord escape not supported";
                                        break;
                                    default:
                                        break;
                                }
                            }
                            else {
                                this._error = "parse string/escape error";
                            }
                        }
                    default:
                        {
                            break;
                        }
                }
            }
            this._error = "parse string/illegal end";
            return null;
        };
        /**
         * JSONのオブジェクトエレメントをパースしてValueオブジェクトを返す
         *
         * @param buffer    JSONエレメントのバッファ
         * @param length    パースする長さ
         * @param begin     パースを開始する位置
         * @param outEndPos パース終了時の位置
         * @return パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseObject = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var ret = new JsonMap();
            // Key: Value
            var key = "";
            var i = begin;
            var c = "";
            var localRetEndPos2 = Array(1);
            var ok = false;
            // , が続く限りループ
            for (; i < length; i++) {
                FOR_LOOP: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case '\"':
                            key = this.parseString(buffer, length, i + 1, localRetEndPos2);
                            if (this._error) {
                                return null;
                            }
                            i = localRetEndPos2[0];
                            ok = true;
                            break FOR_LOOP; //-- loopから出る
                        case '}': // 閉じカッコ
                            outEndPos[0] = i + 1;
                            return ret; // 空
                        case ':':
                            this._error = "illegal ':' position";
                            break;
                        case '\n':
                            this._lineCount++;
                        default:
                            break; // スキップする文字
                    }
                }
                if (!ok) {
                    this._error = "key not found";
                    return null;
                }
                ok = false;
                // : をチェック
                FOR_LOOP2: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ':':
                            ok = true;
                            i++;
                            break FOR_LOOP2;
                        case '}':
                            this._error = "illegal '}' position";
                            break;
                        case '\n': this._lineCount++;
                        // case ' ': case '\t' : case '\r':
                        default:
                            break; // スキップする文字
                    }
                }
                if (!ok) {
                    this._error = "':' not found";
                    return null;
                }
                // 値をチェック
                var value = this.parseValue(buffer, length, i, localRetEndPos2);
                if (this._error) {
                    return null;
                }
                i = localRetEndPos2[0];
                // ret.put(key, value);
                ret.put(key, value);
                FOR_LOOP3: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ',':
                            break FOR_LOOP3;
                        case '}':
                            outEndPos[0] = i + 1;
                            return ret; // 正常終了
                        case '\n':
                            this._lineCount++;
                        default:
                            break; // スキップ
                    }
                }
            }
            this._error = "illegal end of perseObject";
            return null;
        };
        /**
         * 次の「"」までの文字列をパースする。
         * @param buffer    JSONエレメントのバッファ
         * @param length    パースする長さ
         * @param begin     パースを開始する位置
         * @param outEndPos パース終了時の位置
         * @return パースから取得したValueオブジェクト
         */
        CubismJson.prototype.parseArray = function (buffer, length, begin, outEndPos) {
            if (this._error)
                return null;
            var ret = new JsonArray();
            // key : value
            var i = begin;
            var c;
            var localRetEndpos2 = new Array(1);
            // , が続く限りループ
            for (; i < length; i++) {
                // : をチェック
                var value = this.parseValue(buffer, length, i, localRetEndpos2);
                if (this._error) {
                    return null;
                }
                i = localRetEndpos2[0];
                if (value) {
                    ret.add(value);
                }
                // FOR_LOOP3:
                // boolean breakflag = false;
                FOR_LOOP: for (; i < length; i++) {
                    c = buffer[i];
                    switch (c) {
                        case ',':
                            // breakflag = true;
                            // break; // 次のKEY, VAlUEへ
                            break FOR_LOOP;
                        case ']':
                            outEndPos[0] = i + 1;
                            return ret; // 終了
                        case '\n':
                            ++this._lineCount;
                        //case ' ': case '\t': case '\r':
                        default:
                            break; // スキップ
                    }
                }
            }
            ret = void 0;
            this._error = "illegal end of parseObject";
            return null;
        };
        return CubismJson;
    }());
    Live2DCubismFramework.CubismJson = CubismJson;
    /**
     * パースしたJSONの要素をfloat値として扱う
     */
    var JsonFloat = /** @class */ (function (_super) {
        __extends(JsonFloat, _super);
        /**
         * コンストラクタ
         */
        function JsonFloat(v) {
            var _this = _super.call(this) || this;
            _this._value = v;
            return _this;
        }
        /**
         * Valueの種類が数値型ならtrue
         */
        JsonFloat.prototype.isFloat = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonFloat.prototype.getString = function (defaultValue, indent) {
            var strbuf = '\0';
            this._value = parseFloat(strbuf);
            this._stringBuffer = strbuf;
            return this._stringBuffer;
        };
        /**
         * 要素を数値型で返す(number)
         */
        JsonFloat.prototype.toInt = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0; }
            return parseInt(this._value.toString());
        };
        /**
         * 要素を数値型で返す(number)
         */
        JsonFloat.prototype.toFloat = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = 0.0; }
            return this._value;
        };
        JsonFloat.prototype.equals = function (value) {
            if ('number' === typeof (value)) {
                // int
                if (Math.round(value)) {
                    return false;
                }
                // float
                else {
                    return value == this._value;
                }
            }
            return false;
        };
        return JsonFloat;
    }(Value));
    Live2DCubismFramework.JsonFloat = JsonFloat;
    /**
     * パースしたJSONの要素を真偽値として扱う
     */
    var JsonBoolean = /** @class */ (function (_super) {
        __extends(JsonBoolean, _super);
        /**
         * 引数付きコンストラクタ
         */
        function JsonBoolean(v) {
            var _this = _super.call(this) || this;
            _this._boolValue = v;
            return _this;
        }
        /**
         * Valueの種類が真偽値ならtrue
         */
        JsonBoolean.prototype.isBool = function () {
            return true;
        };
        /**
         * 要素を真偽値で返す(boolean)
         */
        JsonBoolean.prototype.toBoolean = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = false; }
            return this._boolValue;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonBoolean.prototype.getString = function (defaultValue, indent) {
            this._stringBuffer = this._boolValue
                ? "true"
                : "false";
            return this._stringBuffer;
        };
        JsonBoolean.prototype.equals = function (value) {
            if ('boolean' === typeof (value)) {
                return value == this._boolValue;
            }
            return false;
        };
        /**
         * Valueの値が静的ならtrue, 静的なら解放しない
         */
        JsonBoolean.prototype.isStatic = function () {
            return true;
        };
        return JsonBoolean;
    }(Value));
    Live2DCubismFramework.JsonBoolean = JsonBoolean;
    /**
     * パースしたJSONの要素を文字列として扱う
     */
    var JsonString = /** @class */ (function (_super) {
        __extends(JsonString, _super);
        function JsonString(s) {
            var _this = _super.call(this) || this;
            if ('string' === typeof (s)) {
                _this._stringBuffer = s;
            }
            if (s instanceof csmString) {
                _this._stringBuffer = s.s;
            }
            return _this;
        }
        /**
         * Valueの種類が文字列ならtrue
         */
        JsonString.prototype.isString = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonString.prototype.getString = function (defaultValue, indent) {
            return this._stringBuffer;
        };
        JsonString.prototype.equals = function (value) {
            if ('string' === typeof (value)) {
                return this._stringBuffer == value;
            }
            if (value instanceof csmString) {
                return (this._stringBuffer == value.s);
            }
            return false;
        };
        return JsonString;
    }(Value));
    Live2DCubismFramework.JsonString = JsonString;
    /**
     * JSONパース時のエラー結果。文字列型のようにふるまう
     */
    var JsonError = /** @class */ (function (_super) {
        __extends(JsonError, _super);
        /**
         * 引数付きコンストラクタ
         */
        function JsonError(s, isStatic) {
            var _this = this;
            if ("string" === typeof (s)) {
                _this = _super.call(this, s) || this;
            }
            else {
                _this = _super.call(this, s) || this;
            }
            _this._isStatic = isStatic;
            return _this;
        }
        /**
         * Valueの値が静的ならtrue、静的なら解放しない
         */
        JsonError.prototype.isStatic = function () {
            return this._isStatic;
        };
        /**
         * エラー情報をセットする
         */
        JsonError.prototype.setErrorNotForClientCall = function (s) {
            this._stringBuffer = s;
            return this;
        };
        /**
         * Valueの種類がエラー値ならtrue
         */
        JsonError.prototype.isError = function () {
            return true;
        };
        return JsonError;
    }(JsonString));
    Live2DCubismFramework.JsonError = JsonError;
    /**
     * パースしたJSONの要素をNULL値として持つ
     */
    var JsonNullvalue = /** @class */ (function (_super) {
        __extends(JsonNullvalue, _super);
        /**
         * コンストラクタ
         */
        function JsonNullvalue() {
            var _this = _super.call(this) || this;
            _this._stringBuffer = "NullValue";
            return _this;
        }
        /**
         * Valueの種類がNULL値ならtrue
         */
        JsonNullvalue.prototype.isNull = function () {
            return true;
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonNullvalue.prototype.getString = function (defaultValue, indent) {
            return this._stringBuffer;
        };
        /**
         * Valueの値が静的ならtrue, 静的なら解放しない
         */
        JsonNullvalue.prototype.isStatic = function () {
            return true;
        };
        return JsonNullvalue;
    }(Value));
    Live2DCubismFramework.JsonNullvalue = JsonNullvalue;
    /**
     * パースしたJSONの要素を配列として持つ
     */
    var JsonArray = /** @class */ (function (_super) {
        __extends(JsonArray, _super);
        /**
         * コンストラクタ
         */
        function JsonArray() {
            var _this = _super.call(this) || this;
            _this._array = new csmVector();
            return _this;
        }
        /**
         * デストラクタ相当の処理
         */
        JsonArray.prototype.release = function () {
            for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.preIncrement()) {
                var v = ite.ptr();
                if (v && !v.isStatic()) {
                    v = void 0;
                    v = null;
                }
            }
        };
        /**
         * Valueの種類が配列ならtrue
         */
        JsonArray.prototype.isArray = function () {
            return true;
        };
        /**
         * 添字演算子[index]
         */
        JsonArray.prototype.getValueByIndex = function (index) {
            if (index < 0 || this._array.getSize() <= index) {
                return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_INDEX_OF_BOUNDS);
            }
            var v = this._array.at(index);
            if (v == null) {
                return Value.nullValue;
            }
            return v;
        };
        /**
         * 添字演算子[string | csmString]
         */
        JsonArray.prototype.getValueByString = function (s) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonArray.prototype.getString = function (defaultValue, indent) {
            var stringBuffer = indent + "[\n";
            for (var ite = this._array.begin(); ite.notEqual(this._array.end()); ite.increment()) {
                var v = ite.ptr();
                this._stringBuffer += indent + "" + v.getString(indent + " ") + "\n";
            }
            this._stringBuffer = stringBuffer + indent + "]\n";
            return this._stringBuffer;
        };
        /**
         * 配列要素を追加する
         * @param v 追加する要素
         */
        JsonArray.prototype.add = function (v) {
            this._array.pushBack(v);
        };
        /**
         * 要素をコンテナで返す(csmVector<Value>)
         */
        JsonArray.prototype.getVector = function (defaultValue) {
            if (defaultValue === void 0) { defaultValue = null; }
            return this._array;
        };
        /**
         * 要素の数を返す
         */
        JsonArray.prototype.getSize = function () {
            return this._array.getSize();
        };
        return JsonArray;
    }(Value));
    Live2DCubismFramework.JsonArray = JsonArray;
    /**
     * パースしたJSONの要素をマップとして持つ
     */
    var JsonMap = /** @class */ (function (_super) {
        __extends(JsonMap, _super);
        /**
         * コンストラクタ
         */
        function JsonMap() {
            var _this = _super.call(this) || this;
            _this._map = new csmMap();
            return _this;
        }
        /**
         * デストラクタ相当の処理
         */
        JsonMap.prototype.release = function () {
            var ite = this._map.begin();
            while (ite.notEqual(this._map.end())) {
                var v = ite.ptr().second;
                if (v && !v.isStatic()) {
                    v = void 0;
                    v = null;
                }
                ite.preIncrement();
            }
        };
        /**
         * Valueの値がMap型ならtrue
         */
        JsonMap.prototype.isMap = function () {
            return true;
        };
        /**
         * 添字演算子[string | csmString]
         */
        JsonMap.prototype.getValueByString = function (s) {
            if (s instanceof csmString) {
                var ret = this._map.getValue(s.s);
                if (ret == null) {
                    return Value.nullValue;
                }
                return ret;
            }
            for (var iter = this._map.begin(); iter.notEqual(this._map.end()); iter.preIncrement()) {
                if (iter.ptr().first == s) {
                    if (iter.ptr().second == null) {
                        return Value.nullValue;
                    }
                    return iter.ptr().second;
                }
            }
            return Value.nullValue;
        };
        /**
         * 添字演算子[index]
         */
        JsonMap.prototype.getValueByIndex = function (index) {
            return Value.errorValue.setErrorNotForClientCall(CSM_JSON_ERROR_TYPE_MISMATCH);
        };
        /**
         * 要素を文字列で返す(csmString型)
         */
        JsonMap.prototype.getString = function (defaultValue, indent) {
            this._stringBuffer = indent + "{\n";
            var ite = this._map.begin();
            while (ite.notEqual(this._map.end())) {
                var key = ite.ptr().first;
                var v = ite.ptr().second;
                this._stringBuffer += indent + " " + key + " : " + v.getString(indent + "   ") + " \n";
                ite.preIncrement();
            }
            this._stringBuffer += indent + "}\n";
            return this._stringBuffer;
        };
        /**
         * 要素をMap型で返す
         */
        JsonMap.prototype.getMap = function (defaultValue) {
            return this._map;
        };
        /**
         * Mapに要素を追加する
         */
        JsonMap.prototype.put = function (key, v) {
            this._map.setValue(key, v);
        };
        /**
         * Mapからキーのリストを取得する
         */
        JsonMap.prototype.getKeys = function () {
            if (!this._keys) {
                this._keys = new csmVector();
                var ite = this._map.begin();
                while (ite.notEqual(this._map.end())) {
                    var key = ite.ptr().first;
                    this._keys.pushBack(key);
                    ite.preIncrement();
                }
            }
            return this._keys;
        };
        /**
         * Mapの要素数を取得する
         */
        JsonMap.prototype.getSize = function () {
            return this._keys.getSize();
        };
        return JsonMap;
    }(Value));
    Live2DCubismFramework.JsonMap = JsonMap;
})(Live2DCubismFramework || (Live2DCubismFramework = {}));


/***/ })

/******/ });
//# sourceMappingURL=data:application/json;charset=utf-8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbIndlYnBhY2s6Ly8vd2VicGFjay9ib290c3RyYXAiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2N1YmlzbWZyYW1ld29ya2NvbmZpZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvaWQvY3ViaXNtaWQudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL2lkL2N1YmlzbWlkbWFuYWdlci50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvbGl2ZTJkY3ViaXNtZnJhbWV3b3JrLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9tYXRoL2N1YmlzbW1hdHJpeDQ0LnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXIudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3R5cGUvY3NtbWFwLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay90eXBlL2NzbXN0cmluZy50cyIsIndlYnBhY2s6Ly8vLi9GcmFtZXdvcmsvdHlwZS9jc212ZWN0b3IudHMiLCJ3ZWJwYWNrOi8vLy4vRnJhbWV3b3JrL3V0aWxzL2N1YmlzbWRlYnVnLnRzIiwid2VicGFjazovLy8uL0ZyYW1ld29yay91dGlscy9jdWJpc21qc29uLnRzIl0sIm5hbWVzIjpbXSwibWFwcGluZ3MiOiI7QUFBQTtBQUNBOztBQUVBO0FBQ0E7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7O0FBRUE7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTs7O0FBR0E7QUFDQTs7QUFFQTtBQUNBOztBQUVBO0FBQ0E7QUFDQTtBQUNBLGtEQUEwQyxnQ0FBZ0M7QUFDMUU7QUFDQTs7QUFFQTtBQUNBO0FBQ0E7QUFDQSxnRUFBd0Qsa0JBQWtCO0FBQzFFO0FBQ0EseURBQWlELGNBQWM7QUFDL0Q7O0FBRUE7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBO0FBQ0E7QUFDQTtBQUNBLGlEQUF5QyxpQ0FB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QyxLQUFLLEVBQUUsQ0FBQztnQkFFOUQsT0FBTSxHQUFHLENBQUMsUUFBUSxDQUFDLElBQUksQ0FBQyxJQUFJLENBQUMsR0FBRyxFQUFFLENBQUMsRUFDbkM7b0JBQ0ksSUFBTSxHQUFHLEdBQVcsR0FBRyxDQUFDLEdBQUcsRUFBRSxDQUFDLEtBQUssQ0FBQztvQkFDcEMsSUFBSSxDQUFDLEtBQUssQ0FBQyxRQUFRLENBQUMsR0FBRyxDQUFDLENBQUM7b0JBQ3pCLEdBQUcsQ0FBQyxZQUFZLEVBQUUsQ0FBQztpQkFDdEI7YUFDSjtZQUNELE9BQU8sSUFBSSxDQUFDLEtBQUssQ0FBQztRQUN0QixDQUFDO1FBRUQ7O1dBRUc7UUFDSSx5QkFBTyxHQUFkO1lBRUksT0FBTyxJQUFJLENBQUMsS0FBSyxDQUFDLE9BQU8sRUFBRSxDQUFDO1FBQ2hDLENBQUM7UUFLTCxjQUFDO0lBQUQsQ0FBQyxDQXBKNEIsS0FBSyxHQW9KakM7SUFwSlksNkJBQU8sVUFvSm5CO0FBQ0wsQ0FBQyxFQTd6Q2dCLHFCQUFxQixLQUFyQixxQkFBcUIsUUE2ekNyQyIsImZpbGUiOiIvdXRpbHMvY3ViaXNtanNvbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIiBcdC8vIFRoZSBtb2R1bGUgY2FjaGVcbiBcdHZhciBpbnN0YWxsZWRNb2R1bGVzID0ge307XG5cbiBcdC8vIFRoZSByZXF1aXJlIGZ1bmN0aW9uXG4gXHRmdW5jdGlvbiBfX3dlYnBhY2tfcmVxdWlyZV9fKG1vZHVsZUlkKSB7XG5cbiBcdFx0Ly8gQ2hlY2sgaWYgbW9kdWxlIGlzIGluIGNhY2hlXG4gXHRcdGlmKGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdKSB7XG4gXHRcdFx0cmV0dXJuIGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdLmV4cG9ydHM7XG4gXHRcdH1cbiBcdFx0Ly8gQ3JlYXRlIGEgbmV3IG1vZHVsZSAoYW5kIHB1dCBpdCBpbnRvIHRoZSBjYWNoZSlcbiBcdFx0dmFyIG1vZHVsZSA9IGluc3RhbGxlZE1vZHVsZXNbbW9kdWxlSWRdID0ge1xuIFx0XHRcdGk6IG1vZHVsZUlkLFxuIFx0XHRcdGw6IGZhbHNlLFxuIFx0XHRcdGV4cG9ydHM6IHt9XG4gXHRcdH07XG5cbiBcdFx0Ly8gRXhlY3V0ZSB0aGUgbW9kdWxlIGZ1bmN0aW9uXG4gXHRcdG1vZHVsZXNbbW9kdWxlSWRdLmNhbGwobW9kdWxlLmV4cG9ydHMsIG1vZHVsZSwgbW9kdWxlLmV4cG9ydHMsIF9fd2VicGFja19yZXF1aXJlX18pO1xuXG4gXHRcdC8vIEZsYWcgdGhlIG1vZHVsZSBhcyBsb2FkZWRcbiBcdFx0bW9kdWxlLmwgPSB0cnVlO1xuXG4gXHRcdC8vIFJldHVybiB0aGUgZXhwb3J0cyBvZiB0aGUgbW9kdWxlXG4gXHRcdHJldHVybiBtb2R1bGUuZXhwb3J0cztcbiBcdH1cblxuXG4gXHQvLyBleHBvc2UgdGhlIG1vZHVsZXMgb2JqZWN0IChfX3dlYnBhY2tfbW9kdWxlc19fKVxuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5tID0gbW9kdWxlcztcblxuIFx0Ly8gZXhwb3NlIHRoZSBtb2R1bGUgY2FjaGVcbiBcdF9fd2VicGFja19yZXF1aXJlX18uYyA9IGluc3RhbGxlZE1vZHVsZXM7XG5cbiBcdC8vIGRlZmluZSBnZXR0ZXIgZnVuY3Rpb24gZm9yIGhhcm1vbnkgZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5kID0gZnVuY3Rpb24oZXhwb3J0cywgbmFtZSwgZ2V0dGVyKSB7XG4gXHRcdGlmKCFfX3dlYnBhY2tfcmVxdWlyZV9fLm8oZXhwb3J0cywgbmFtZSkpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgbmFtZSwgeyBlbnVtZXJhYmxlOiB0cnVlLCBnZXQ6IGdldHRlciB9KTtcbiBcdFx0fVxuIFx0fTtcblxuIFx0Ly8gZGVmaW5lIF9fZXNNb2R1bGUgb24gZXhwb3J0c1xuIFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yID0gZnVuY3Rpb24oZXhwb3J0cykge1xuIFx0XHRpZih0eXBlb2YgU3ltYm9sICE9PSAndW5kZWZpbmVkJyAmJiBTeW1ib2wudG9TdHJpbmdUYWcpIHtcbiBcdFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgU3ltYm9sLnRvU3RyaW5nVGFnLCB7IHZhbHVlOiAnTW9kdWxlJyB9KTtcbiBcdFx0fVxuIFx0XHRPYmplY3QuZGVmaW5lUHJvcGVydHkoZXhwb3J0cywgJ19fZXNNb2R1bGUnLCB7IHZhbHVlOiB0cnVlIH0pO1xuIFx0fTtcblxuIFx0Ly8gY3JlYXRlIGEgZmFrZSBuYW1lc3BhY2Ugb2JqZWN0XG4gXHQvLyBtb2RlICYgMTogdmFsdWUgaXMgYSBtb2R1bGUgaWQsIHJlcXVpcmUgaXRcbiBcdC8vIG1vZGUgJiAyOiBtZXJnZSBhbGwgcHJvcGVydGllcyBvZiB2YWx1ZSBpbnRvIHRoZSBuc1xuIFx0Ly8gbW9kZSAmIDQ6IHJldHVybiB2YWx1ZSB3aGVuIGFscmVhZHkgbnMgb2JqZWN0XG4gXHQvLyBtb2RlICYgOHwxOiBiZWhhdmUgbGlrZSByZXF1aXJlXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLnQgPSBmdW5jdGlvbih2YWx1ZSwgbW9kZSkge1xuIFx0XHRpZihtb2RlICYgMSkgdmFsdWUgPSBfX3dlYnBhY2tfcmVxdWlyZV9fKHZhbHVlKTtcbiBcdFx0aWYobW9kZSAmIDgpIHJldHVybiB2YWx1ZTtcbiBcdFx0aWYoKG1vZGUgJiA0KSAmJiB0eXBlb2YgdmFsdWUgPT09ICdvYmplY3QnICYmIHZhbHVlICYmIHZhbHVlLl9fZXNNb2R1bGUpIHJldHVybiB2YWx1ZTtcbiBcdFx0dmFyIG5zID0gT2JqZWN0LmNyZWF0ZShudWxsKTtcbiBcdFx0X193ZWJwYWNrX3JlcXVpcmVfXy5yKG5zKTtcbiBcdFx0T2JqZWN0LmRlZmluZVByb3BlcnR5KG5zLCAnZGVmYXVsdCcsIHsgZW51bWVyYWJsZTogdHJ1ZSwgdmFsdWU6IHZhbHVlIH0pO1xuIFx0XHRpZihtb2RlICYgMiAmJiB0eXBlb2YgdmFsdWUgIT0gJ3N0cmluZycpIGZvcih2YXIga2V5IGluIHZhbHVlKSBfX3dlYnBhY2tfcmVxdWlyZV9fLmQobnMsIGtleSwgZnVuY3Rpb24oa2V5KSB7IHJldHVybiB2YWx1ZVtrZXldOyB9LmJpbmQobnVsbCwga2V5KSk7XG4gXHRcdHJldHVybiBucztcbiBcdH07XG5cbiBcdC8vIGdldERlZmF1bHRFeHBvcnQgZnVuY3Rpb24gZm9yIGNvbXBhdGliaWxpdHkgd2l0aCBub24taGFybW9ueSBtb2R1bGVzXG4gXHRfX3dlYnBhY2tfcmVxdWlyZV9fLm4gPSBmdW5jdGlvbihtb2R1bGUpIHtcbiBcdFx0dmFyIGdldHRlciA9IG1vZHVsZSAmJiBtb2R1bGUuX19lc01vZHVsZSA/XG4gXHRcdFx0ZnVuY3Rpb24gZ2V0RGVmYXVsdCgpIHsgcmV0dXJuIG1vZHVsZVsnZGVmYXVsdCddOyB9IDpcbiBcdFx0XHRmdW5jdGlvbiBnZXRNb2R1bGVFeHBvcnRzKCkgeyByZXR1cm4gbW9kdWxlOyB9O1xuIFx0XHRfX3dlYnBhY2tfcmVxdWlyZV9fLmQoZ2V0dGVyLCAnYScsIGdldHRlcik7XG4gXHRcdHJldHVybiBnZXR0ZXI7XG4gXHR9O1xuXG4gXHQvLyBPYmplY3QucHJvdG90eXBlLmhhc093blByb3BlcnR5LmNhbGxcbiBcdF9fd2VicGFja19yZXF1aXJlX18ubyA9IGZ1bmN0aW9uKG9iamVjdCwgcHJvcGVydHkpIHsgcmV0dXJuIE9iamVjdC5wcm90b3R5cGUuaGFzT3duUHJvcGVydHkuY2FsbChvYmplY3QsIHByb3BlcnR5KTsgfTtcblxuIFx0Ly8gX193ZWJwYWNrX3B1YmxpY19wYXRoX19cbiBcdF9fd2VicGFja19yZXF1aXJlX18ucCA9IFwiXCI7XG5cblxuIFx0Ly8gTG9hZCBlbnRyeSBtb2R1bGUgYW5kIHJldHVybiBleHBvcnRzXG4gXHRyZXR1cm4gX193ZWJwYWNrX3JlcXVpcmVfXyhfX3dlYnBhY2tfcmVxdWlyZV9fLnMgPSBcIi4vRnJhbWV3b3JrL3V0aWxzL2N1YmlzbWpzb24udHNcIik7XG4iLCIvKlxuKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbipcbiogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuKi9cblxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuLy8gIOODreOCsOWHuuWKm+mWouaVsOOBruioreWumlxuLy89PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PT09PVxuXG4vLy0tLS0tLS0tLS0g44Ot44Kw5Ye65Yqb44Os44OZ44OrIOmBuOaKnumgheebriDlrprnvqkgLS0tLS0tLS0tLVxuLy8vIOips+e0sOODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfVkVSQk9TRTogbnVtYmVyID0gMDtcbi8vLyDjg4fjg5Djg4PjgrDjg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0RFQlVHOiBudW1iZXIgPSAxO1xuLy8vIEluZm/jg63jgrDlh7rlipvoqK3lrppcbmV4cG9ydCBjb25zdCBDU01fTE9HX0xFVkVMX0lORk86IG51bWJlciA9IDI7XG4vLy8g6K2m5ZGK44Ot44Kw5Ye65Yqb6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9XQVJOSU5HOiBudW1iZXIgPSAzO1xuLy8vIOOCqOODqeODvOODreOCsOWHuuWKm+ioreWumlxuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUxfRVJST1I6IG51bWJlciA9IDQ7XG4vLy8g44Ot44Kw5Ye65Yqb44Kq44OV6Kit5a6aXG5leHBvcnQgY29uc3QgQ1NNX0xPR19MRVZFTF9PRkY6IG51bWJlciA9IDU7XG5cbi8qKlxuKiDjg63jgrDlh7rlipvjg6zjg5njg6voqK3lrprjgIJcbipcbiog5by35Yi255qE44Gr44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5aSJ44GI44KL5pmC44Gr5a6a576p44KS5pyJ5Yq544Gr44GZ44KL44CCXG4qIENTTV9MT0dfTEVWRUxfVkVSQk9TRSDvvZ4gQ1NNX0xPR19MRVZFTF9PRkYg44KS6YG45oqe44GZ44KL44CCXG4qL1xuZXhwb3J0IGNvbnN0IENTTV9MT0dfTEVWRUw6IG51bWJlciA9IENTTV9MT0dfTEVWRUxfVkVSQk9TRTsiLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21zdHJpbmd9IGZyb20gXCIuLi90eXBlL2NzbXN0cmluZ1wiO1xuaW1wb3J0IGNzbVN0cmluZyA9IGNzbXN0cmluZy5jc21TdHJpbmc7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44OR44Op44Oh44O844K/5ZCN44O744OR44O844OE5ZCN44O7RHJhd2FibGXlkI3jgpLkv53mjIFcbiAgICAgKiBcbiAgICAgKiDjg5Hjg6njg6Hjg7zjgr/lkI3jg7vjg5Hjg7zjg4TlkI3jg7tEcmF3YWJsZeWQjeOCkuS/neaMgeOBmeOCi+OCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21JZFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKCk6IGNzbVN0cmluZ1xuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faWQ7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihpZDogc3RyaW5nIHwgY3NtU3RyaW5nKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0eXBlb2YoaWQpID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZCA9IG5ldyBjc21TdHJpbmcoaWQpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIFxuICAgICAgICAgICAgdGhpcy5faWQgPSBpZDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZOOCkuavlOi8g1xuICAgICAgICAgKiBAcGFyYW0gYyDmr5TovIPjgZnjgotpZFxuICAgICAgICAgKiBAcmV0dXJuIOWQjOOBmOOBquOCieOBsHRydWUs55Ww44Gq44Gj44Gm44GE44KM44GwZmFsc2XjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKGM6IHN0cmluZyB8IGNzbVN0cmluZyB8IEN1YmlzbUlkKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKGMpID09PSAnc3RyaW5nJylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lkLmlzRXF1YWwoYy5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBDdWJpc21JZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdGhpcy5faWQuaXNFcXVhbChjLl9pZC5zKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBpZOOCkuavlOi8g1xuICAgICAgICAgKiBAcGFyYW0gYyDmr5TovIPjgZnjgotpZFxuICAgICAgICAgKiBAcmV0dXJuIOWQjOOBmOOBquOCieOBsHRydWUs55Ww44Gq44Gj44Gm44GE44KM44GwZmFsc2XjgpLov5TjgZlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc05vdEVxdWFsKGM6IHN0cmluZyB8IGNzbVN0cmluZyB8IEN1YmlzbUlkKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAodHlwZW9mKGMpID09ICdzdHJpbmcnKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAhdGhpcy5faWQuaXNFcXVhbChjKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYgKGMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMucyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlIGlmIChjIGluc3RhbmNlb2YgQ3ViaXNtSWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuICF0aGlzLl9pZC5pc0VxdWFsKGMuX2lkLnMpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJpdmF0ZSBfaWQ6IGNzbVN0cmluZzsgLy8gSUTlkI1cbiAgICB9XG5cbiAgICBleHBvcnQgZGVjbGFyZSB0eXBlIEN1YmlzbUlkSGFuZGxlID0gQ3ViaXNtSWQ7XG59IiwiLypcbiogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4qXG4qIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4qIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXZlY3Rvcn0gZnJvbSBcIi4uL3R5cGUvY3NtdmVjdG9yXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21pZH0gZnJvbSBcIi4vY3ViaXNtaWRcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcbmltcG9ydCBDdWJpc21JZCA9IGN1YmlzbWlkLkN1YmlzbUlkO1xuaW1wb3J0IGNzbVZlY3RvciA9IGNzbXZlY3Rvci5jc21WZWN0b3I7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICogSUTlkI3jga7nrqHnkIZcbiAgICAgKiBcbiAgICAgKiBJROWQjeOCkueuoeeQhuOBmeOCi+OAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21JZE1hbmFnZXJcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lkcyA9IG5ldyBjc21WZWN0b3I8Q3ViaXNtSWQ+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX2lkcy5nZXRTaXplKCk7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9pZHMuc2V0KGksIHZvaWQgMCk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pZHMgPSAgbnVsbDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44KS44Oq44K544OI44GL44KJ55m76YyyXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gaWRzIElE5ZCN44Oq44K544OIXG4gICAgICAgICAqIEBwYXJhbSBjb3VudCBJROOBruWAi+aVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlZ2lzdGVySWRzKGlkczogc3RyaW5nW10gfCBjc21TdHJpbmdbXSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgaWRzLmxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucmVnaXN0ZXJJZChpZHNbaV0pO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44KS55m76YyyXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gaWQgSUTlkI1cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWdpc3RlcklkKGlkOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBDdWJpc21JZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgcmVzdWx0OiBDdWJpc21JZCA9IG51bGw7XG5cbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YoaWQpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmICgocmVzdWx0ID0gdGhpcy5maW5kSWQoaWQpKSAhPSBudWxsKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJlc3VsdDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICByZXN1bHQgPSBuZXcgQ3ViaXNtSWQoaWQpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2lkcy5wdXNoQmFjayhyZXN1bHQpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySWQoaWQucyk7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiByZXN1bHQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0SWQoaWQ6IGNzbVN0cmluZyB8IHN0cmluZyk6IEN1YmlzbUlkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLnJlZ2lzdGVySWQoaWQpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIElE5ZCN44GL44KJSUTjga7norroqo1cbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDlrZjlnKjjgZnjgotcbiAgICAgICAgICogQHJldHVybiBmYWxzZSDlrZjlnKjjgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0V4aXN0KGlkOiBjc21TdHJpbmcgfCBzdHJpbmcpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICgnc3RyaW5nJyA9PSB0eXBlb2YoaWQpKSBcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gKHRoaXMuZmluZElkKGlkKSAhPSBudWxsKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0aGlzLmlzRXhpc3QoaWQucyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTlkI3jgYvjgolJROOCkuaknOe0ouOBmeOCi+OAglxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGlkIElE5ZCNXG4gICAgICAgICAqIEByZXR1cm4g55m76Yyy44GV44KM44Gm44GE44KLSUTjgILjgarjgZHjgozjgbBOVUxM44CCXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIGZpbmRJZChpZDogc3RyaW5nKTogQ3ViaXNtSWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgdGhpcy5faWRzLmdldFNpemUoKTsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2lkcy5hdChpKS5nZXRTdHJpbmcoKS5pc0VxdWFsKGlkKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9pZHMuYXQoaSk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2lkczogY3NtVmVjdG9yPEN1YmlzbUlkPjsgICAvLyDnmbvpjLLjgZXjgozjgabjgYTjgotJROOBruODquOCueODiFxuICAgIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG4vLy8gPHJlZmVyZW5jZSBwYXRoPVwiLi4vQ29yZS9saXZlMmRjdWJpc21jb3JlLmQudHNcIiAvPlxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtanNvbn0gZnJvbSBcIi4vdXRpbHMvY3ViaXNtanNvblwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtaWRtYW5hZ2VyfSBmcm9tIFwiLi9pZC9jdWJpc21pZG1hbmFnZXJcIjtcbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGN1YmlzbXJlbmRlcmVyfSBmcm9tIFwiLi9yZW5kZXJpbmcvY3ViaXNtcmVuZGVyZXJcIjtcbmltcG9ydCB7Q3ViaXNtTG9nSW5mbywgQ3ViaXNtTG9nV2FybmluZywgQ1NNX0FTU0VSVH0gZnJvbSBcIi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcbmltcG9ydCBWYWx1ZSA9IGN1YmlzbWpzb24uVmFsdWU7XG5pbXBvcnQgQ3ViaXNtSWRNYW5hZ2VyID0gY3ViaXNtaWRtYW5hZ2VyLkN1YmlzbUlkTWFuYWdlcjtcbmltcG9ydCBDdWJpc21SZW5kZXJlciA9IGN1YmlzbXJlbmRlcmVyLkN1YmlzbVJlbmRlcmVyO1xuXG5leHBvcnQgZnVuY3Rpb24gc3RydG9kKHM6IHN0cmluZywgZW5kUHRyOiBzdHJpbmdbXSk6IG51bWJlclxue1xuICAgIGxldCBpbmRleDogbnVtYmVyID0gMDtcbiAgICBmb3IobGV0IGk6IG51bWJlciA9IDE7IDsgaSsrKVxuICAgIHtcbiAgICAgICAgbGV0IHRlc3RDOiBzdHJpbmcgPSBzLnNsaWNlKGkgLSAxLCBpKTtcblxuICAgICAgICAvLyDmjIfmlbDjg7vjg57jgqTjg4rjgrnjga7lj6/og73mgKfjgYzjgYLjgovjga7jgafjgrnjgq3jg4Pjg5fjgZnjgotcbiAgICAgICAgaWYodGVzdEM9PSdlJyB8fCB0ZXN0Qz09Jy0nIHx8IHRlc3RDID09ICdFJylcbiAgICAgICAge1xuICAgICAgICAgICAgY29udGludWU7XG4gICAgICAgIH1cblxu44CA44CA44CAICAvLyDmloflrZfliJfjga7nr4Tlm7LjgpLluoPjgZLjgabjgYTjgY9cbiAgICAgICAgbGV0IHRlc3Q6IHN0cmluZyA9IHMuc3Vic3RyaW5nKDAsIGkpO1xuICAgICAgICBsZXQgbnVtYmVyOiBudW1iZXIgPSBOdW1iZXIodGVzdCk7XG4gICAgICAgIGlmKGlzTmFOKG51bWJlcikpXG4gICAgICAgIHtcbuOAgOOAgOOAgOOAgCAgICAvLyDmlbDlgKTjgajjgZfjgaboqo3orZjjgafjgY3jgarjgY/jgarjgaPjgZ/jga7jgafntYLkuoZcbiAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICB9XG5cbuOAgOOAgOOAgCAvLyDmnIDlvozjgavmlbDlgKTjgajjgZfjgabjgafjgY3jgZ9pbmRleOOCkuagvOe0jeOBl+OBpuOBiuOBj1xuICAgICAgICBpbmRleCA9IGk7XG4gICAgfVxuICAgIGxldCBkID0gcGFyc2VGbG9hdChzKTsgIC8vIOODkeODvOOCueOBl+OBn+aVsOWApFxuXG4gICAgaWYoaXNOYU4oZCkpXG4gICAge1xu44CA44CA44CA44CAIC8vIOaVsOWApOOBqOOBl+OBpuiqjeitmOOBp+OBjeOBquOBj+OBquOBo+OBn+OBruOBp+e1guS6hlxuICAgICAgICBkID0gTmFOO1xuICAgIH1cblxuICAgIGVuZFB0clswXSA9IHMuc2xpY2UoaW5kZXgpO+OAgC8vIOW+jOe2muOBruaWh+Wtl+WIl1xuXG4gICAgcmV0dXJuIGQ7XG59XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLy8g44OV44Kh44Kk44Or44K544Kz44O844OX44Gu5aSJ5pWw44KS5Yid5pyf5YyWXG4gICAgXG4gICAgbGV0IHNfaXNTdGFydGVkOiBib29sZWFuID0gZmFsc2U7XG4gICAgbGV0IHNfaXNJbml0aWFsaXplZDogYm9vbGVhbiA9IGZhbHNlO1xuICAgIGxldCBzX29wdGlvbjogT3B0aW9uID0gbnVsbDtcbiAgICBsZXQgc19jdWJpc21JZE1hbmFnZXI6IEN1YmlzbUlkTWFuYWdlciA9IG51bGw7XG4gICAgXG4gICAgLyoqXG4gICAgICogRnJhbWV3b3Jr5YaF44Gn5L2/44GG5a6a5pWw44Gu5a6j6KiAXG4gICAgICovXG4gICAgZXhwb3J0IG5hbWVzcGFjZSBDb25zdGFudFxuICAgIHtcbiAgICAgICAgZXhwb3J0IGNvbnN0IHZlcnRleE9mZnNldDogbnVtYmVyID0gMDsgICAgIC8vIOODoeODg+OCt+ODpemggueCueOBruOCquODleOCu+ODg+ODiOWApFxuICAgICAgICBleHBvcnQgY29uc3QgdmVydGV4U3RlcDogbnVtYmVyID0gMjsgICAgICAgLy8g44Oh44OD44K344Ol6aCC54K544Gu44K544OG44OD44OX5YCkXG4gICAgfVxuXG4gICAgZXhwb3J0IGZ1bmN0aW9uIGNzbURlbGV0ZTxUPihhZGRyZXNzOiBUKTogdm9pZFxuICAgIHtcbiAgICAgICAgaWYoIWFkZHJlc3MpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgfVxuXG4gICAgICAgIGFkZHJlc3MgPSB2b2lkIDA7XG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogTGl2ZTJEIEN1YmlzbTMgT3JpZ2luYWwgV29ya2Zsb3cgU0RL44Gu44Ko44Oz44OI44Oq44Od44Kk44Oz44OIXG4gICAgICog5Yip55So6ZaL5aeL5pmC44GvQ3ViaXNtRnJhbWV3b3JrLmluaXRpYWxpemUoKeOCkuWRvOOBs+OAgUN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCnjgafntYLkuobjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgQ3ViaXNtRnJhbWV3b3JrXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICogQ3ViaXNtIEZyYW1ld29ya+OBrkFQSeOCkuS9v+eUqOWPr+iDveOBq+OBmeOCi+OAglxuICAgICAgICAgKiAgQVBJ44KS5a6f6KGM44GZ44KL5YmN44Gr5b+F44Ga44GT44Gu6Zai5pWw44KS5a6f6KGM44GZ44KL44GT44Go44CCXG4gICAgICAgICAqICDkuIDluqbmupblgpnjgYzlrozkuobjgZfjgabku6XpmY3jga/jgIHlho3jgbPlrp/ooYzjgZfjgabjgoLlhoXpg6jlh6bnkIbjgYzjgrnjgq3jg4Pjg5fjgZXjgozjgb7jgZnjgIJcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICAgIG9wdGlvbiAgICAgIE9wdGlvbuOCr+ODqeOCueOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKlxuICAgICAgICAgKiBAcmV0dXJuICAg5rqW5YKZ5Yem55CG44GM5a6M5LqG44GX44Gf44KJdHJ1ZeOBjOi/lOOCiuOBvuOBmeOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGFydFVwKG9wdGlvbjogT3B0aW9uID0gbnVsbCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYoc19pc1N0YXJ0ZWQpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5zdGFydFVwKCkgaXMgYWxyZWFkeSBkb25lLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNfb3B0aW9uID0gb3B0aW9uO1xuXG4gICAgICAgICAgICBpZihzX29wdGlvbiAhPSBudWxsKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21TZXRMb2dGdW5jdGlvbihzX29wdGlvbi5sb2dGdW5jdGlvbik7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHNfaXNTdGFydGVkID0gdHJ1ZTtcblxuICAgICAgICAgICAgLy8gTGl2ZTJEIEN1YmlzbSBDb3Jl44OQ44O844K444On44Oz5oOF5aCx44KS6KGo56S6XG4gICAgICAgICAgICBpZihzX2lzU3RhcnRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCB2ZXJzaW9uOiBudW1iZXIgPSBMaXZlMkRDdWJpc21Db3JlLlZlcnNpb24uY3NtR2V0VmVyc2lvbigpO1xuICAgICAgICAgICAgICAgIGNvbnN0IG1ham9yOiBudW1iZXIgPSAoKHZlcnNpb24gJiAweEZGMDAwMDAwKSA+PiAyNCk7XG4gICAgICAgICAgICAgICAgY29uc3QgbWlub3I6IG51bWJlciA9ICgodmVyc2lvbiAmIDB4MDBGRjAwMDApID4+IDE2KTtcbiAgICAgICAgICAgICAgICBjb25zdCBwYXRjaDogbnVtYmVyID0gKCh2ZXJzaW9uICYgMHgwMDAwRkZGRikpO1xuICAgICAgICAgICAgICAgIGNvbnN0IHZlcnNpb25OdW1iZXI6IG51bWJlciA9IHZlcnNpb247XG5cbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dJbmZvKGBMaXZlMkQgQ3ViaXNtIENvcmUgdmVyc2lvbjogezB9LnsxfS57Mn0gKHszfSlgLCBcbiAgICAgICAgICAgICAgICAgICAgKCcwMCcgKyBtYWpvcikuc2xpY2UoLTIpLFxuICAgICAgICAgICAgICAgICAgICAoJzAwJyArIG1pbm9yKS5zbGljZSgtMiksXG4gICAgICAgICAgICAgICAgICAgICgnMDAwMCcgKyBwYXRjaCkuc2xpY2UoLTQpLFxuICAgICAgICAgICAgICAgICAgICB2ZXJzaW9uTnVtYmVyXG4gICAgICAgICAgICAgICAgKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgQ3ViaXNtTG9nSW5mbyhcIkN1YmlzbUZyYW1ld29yay5zdGFydFVwKCkgaXMgY29tcGxldGUuXCIpO1xuXG4gICAgICAgICAgICByZXR1cm4gc19pc1N0YXJ0ZWQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogU3RhcnRVcCgp44Gn5Yid5pyf5YyW44GX44GfQ3ViaXNtRnJhbWV3b3Jr44Gu5ZCE44OR44Op44Oh44O844K/44KS44Kv44Oq44Ki44GX44G+44GZ44CCXG4gICAgICAgICAqIERpc3Bvc2UoKeOBl+OBn0N1YmlzbUZyYW1ld29ya+OCkuWGjeWIqeeUqOOBmeOCi+mam+OBq+WIqeeUqOOBl+OBpuOBj+OBoOOBleOBhOOAglxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjbGVhblVwKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgc19pc1N0YXJ0ZWQgPSBmYWxzZTtcbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuICAgICAgICAgICAgc19vcHRpb24gPSBudWxsO1xuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvlhoXjga7jg6rjgr3jg7zjgrnjgpLliJ3mnJ/ljJbjgZfjgabjg6Ljg4fjg6vjgpLooajnpLrlj6/og73jgarnirbmhYvjgavjgZfjgb7jgZnjgII8YnI+XG4gICAgICAgICAqICAgICDlho3luqZJbml0aWFsaXplKCnjgZnjgovjgavjga/lhYjjgatEaXNwb3NlKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgorjgb7jgZnjgIJcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgaW5pdGlhbGl6ZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIENTTV9BU1NFUlQoc19pc1N0YXJ0ZWQpO1xuICAgICAgICAgICAgaWYoIXNfaXNTdGFydGVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsgaXMgbm90IHN0YXJ0ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8gLS0tIHNfaXNJbml0aWFsaXplZOOBq+OCiOOCi+mAo+e2muWIneacn+WMluOCrOODvOODiSAtLS1cbiAgICAgICAgICAgIC8vIOmAo+e2muOBl+OBpuODquOCveODvOOCueeiuuS/neOBjOihjOOCj+OCjOOBquOBhOOCiOOBhuOBq+OBmeOCi+OAglxuICAgICAgICAgICAgLy8g5YaN5bqmSW5pdGlhbGl6ZSgp44GZ44KL44Gr44Gv5YWI44GrRGlzcG9zZSgp44KS5a6f6KGM44GZ44KL5b+F6KaB44GM44GC44KL44CCXG4gICAgICAgICAgICBpZiAoc19pc0luaXRpYWxpemVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ1dhcm5pbmcoXCJDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgpIHNraXBwZWQsIGFscmVhZHkgaW5pdGlhbGl6ZWQuXCIpO1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgLy8tLS0tIHN0YXRpYyDliJ3mnJ/ljJYgLS0tLVxuICAgICAgICAgICAgVmFsdWUuc3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKTtcblxuICAgICAgICAgICAgc19jdWJpc21JZE1hbmFnZXIgPSBuZXcgQ3ViaXNtSWRNYW5hZ2VyKCk7XG5cbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IHRydWU7XG5cbiAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgpIGlzIGNvbXBsZXRlLlwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBDdWJpc20gRnJhbWV3b3Jr5YaF44Gu5YWo44Gm44Gu44Oq44K944O844K544KS6Kej5pS+44GX44G+44GZ44CCXG4gICAgICAgICAqICAgICAg44Gf44Gg44GX44CB5aSW6YOo44Gn56K65L+d44GV44KM44Gf44Oq44K944O844K544Gr44Gk44GE44Gm44Gv6Kej5pS+44GX44G+44Gb44KT44CCXG4gICAgICAgICAqICAgICAg5aSW6YOo44Gn6YGp5YiH44Gr56C05qOE44GZ44KL5b+F6KaB44GM44GC44KK44G+44GZ44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGRpc3Bvc2UoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBDU01fQVNTRVJUKHNfaXNTdGFydGVkKTtcbiAgICAgICAgICAgIGlmKCFzX2lzU3RhcnRlZClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBDdWJpc21Mb2dXYXJuaW5nKFwiQ3ViaXNtRnJhbWV3b3JrIGlzIG5vdCBzdGFydGVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIC0tLSBzX2lzSW5pdGlhbGl6ZWTjgavjgojjgovmnKrliJ3mnJ/ljJbop6PmlL7jgqzjg7zjg4kgLS0tXG4gICAgICAgICAgICAvLyBkaXNwb3NlKCnjgZnjgovjgavjga/lhYjjgatpbml0aWFsaXplKCnjgpLlrp/ooYzjgZnjgovlv4XopoHjgYzjgYLjgovjgIJcbiAgICAgICAgICAgIGlmKCFzX2lzSW5pdGlhbGl6ZWQpICAgIC8vIGZhbHNlLi4u44Oq44K944O844K55pyq56K65L+d44Gu5aC05ZCIXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nV2FybmluZyhcIkN1YmlzbUZyYW1ld29yay5kaXNwb3NlKCkgc2tpcHBlZCwgbm90IGluaXRpYWxpemVkLlwiKTtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIFZhbHVlLnN0YXRpY1JlbGVhc2VOb3RGb3JDbGllbnRDYWxsKCk7XG5cbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyLnJlbGVhc2UoKTtcbiAgICAgICAgICAgIHNfY3ViaXNtSWRNYW5hZ2VyID0gbnVsbDtcblxuICAgICAgICAgICAgLy8g44Os44Oz44OA44Op44Gu6Z2Z55qE44Oq44K944O844K577yI44K344Kn44O844OA44OX44Ot44Kw44Op44Og5LuW77yJ44KS6Kej5pS+44GZ44KLXG4gICAgICAgICAgICBDdWJpc21SZW5kZXJlci5zdGF0aWNSZWxlYXNlKCk7XG5cbiAgICAgICAgICAgIHNfaXNJbml0aWFsaXplZCA9IGZhbHNlO1xuXG4gICAgICAgICAgICBDdWJpc21Mb2dJbmZvKFwiQ3ViaXNtRnJhbWV3b3JrLmRpc3Bvc2UoKSBpcyBjb21wbGV0ZS5cIik7XG4gICAgICAgIH1cblxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga5BUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgZ/jgYvjganjgYbjgYtcbiAgICAgICAgICogQHJldHVybiBBUEnjgpLkvb/nlKjjgZnjgovmupblgpnjgYzlrozkuobjgZfjgabjgYTjgozjgbB0cnVl44GM6L+U44KK44G+44GZ44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGlzU3RhcnRlZCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBzX2lzU3RhcnRlZDtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIEN1YmlzbSBGcmFtZXdvcmvjga7jg6rjgr3jg7zjgrnliJ3mnJ/ljJbjgYzjgZnjgafjgavooYzjgo/jgozjgabjgYTjgovjgYvjganjgYbjgYtcbiAgICAgICAgICogQHJldHVybiDjg6rjgr3jg7zjgrnnorrkv53jgYzlrozkuobjgZfjgabjgYTjgozjgbB0cnVl44GM6L+U44KK44G+44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGlzSW5pdGlhbGl6ZWQoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gc19pc0luaXRpYWxpemVkO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIENvcmUgQVBJ44Gr44OQ44Kk44Oz44OJ44GX44Gf44Ot44Kw6Zai5pWw44KS5a6f6KGM44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcHJhcmFtIG1lc3NhZ2Ug44Ot44Kw44Oh44OD44K744O844K4XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGNvcmVMb2dGdW5jdGlvbihtZXNzYWdlOiBzdHJpbmcpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIFJldHVybiBpZiBsb2dnaW5nIG5vdCBwb3NzaWJsZS5cbiAgICAgICAgICAgIGlmKCFMaXZlMkRDdWJpc21Db3JlLkxvZ2dpbmcuY3NtR2V0TG9nRnVuY3Rpb24oKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm47XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIExpdmUyREN1YmlzbUNvcmUuTG9nZ2luZy5jc21HZXRMb2dGdW5jdGlvbigpKG1lc3NhZ2UpO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu44Ot44Kw5Ye65Yqb44Os44OZ44Or6Kit5a6a44Gu5YCk44KS6L+U44GZ44CCXG4gICAgICAgICAqXG4gICAgICAgICAqIEByZXR1cm4gIOePvuWcqOOBruODreOCsOWHuuWKm+ODrOODmeODq+ioreWumuOBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBnZXRMb2dnaW5nTGV2ZWwoKTogTG9nTGV2ZWxcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHNfb3B0aW9uICE9IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHNfb3B0aW9uLmxvZ2dpbmdMZXZlbDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBMb2dMZXZlbC5Mb2dMZXZlbF9PZmY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSUTjg57jg43jg7zjgrjjg6Pjga7jgqTjg7Pjgrnjgr/jg7PjgrnjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiBDdWJpc21NYW5hZ2Vy44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGdldElkTWFuYWdlcigpOiBDdWJpc21JZE1hbmFnZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHNfY3ViaXNtSWRNYW5hZ2VyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmdmeeahOOCr+ODqeOCueOBqOOBl+OBpuS9v+eUqOOBmeOCi1xuICAgICAgICAgKiDjgqTjg7Pjgrnjgr/jg7PjgrnljJbjgZXjgZvjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHByaXZhdGUgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuICAgIH1cbn1cblxuZXhwb3J0IGNsYXNzIE9wdGlvblxue1xuICAgIGxvZ0Z1bmN0aW9uOiBMaXZlMkRDdWJpc21Db3JlLmNzbUxvZ0Z1bmN0aW9uOyAgIC8vIOODreOCsOWHuuWKm+OBrumWouaVsOOCquODluOCuOOCp+OCr+ODiFxuICAgIGxvZ2dpbmdMZXZlbDogTG9nTGV2ZWw7ICAvLyDjg63jgrDlh7rlipvjg6zjg5njg6vjga7oqK3lrppcbn1cblxuLyoqXG4gKiDjg63jgrDlh7rlipvjga7jg6zjg5njg6tcbiAqL1xuZXhwb3J0IGVudW0gTG9nTGV2ZWxcbntcbiAgICBMb2dMZXZlbF9WZXJib3NlID0gMCwgICAvLyDoqbPntLDjg63jgrBcbiAgICBMb2dMZXZlbF9EZWJ1ZywgICAgICAgICAvLyDjg4fjg5Djg4PjgrDjg63jgrBcbiAgICBMb2dMZXZlbF9JbmZvLCAgICAgICAgICAvLyBJbmZv44Ot44KwXG4gICAgTG9nTGV2ZWxfV2FybmluZywgICAgICAgLy8g6K2m5ZGK44Ot44KwXG4gICAgTG9nTGV2ZWxfRXJyb3IsICAgICAgICAgLy8g44Ko44Op44O844Ot44KwXG4gICAgTG9nTGV2ZWxfT2ZmICAgICAgICAgICAgLy8g44Ot44Kw5Ye65Yqb54Sh5Yq5XG59XG4iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5leHBvcnQgbmFtZXNwYWNlIExpdmUyREN1YmlzbUZyYW1ld29ya1xue1xuICAgIC8qKlxuICAgICAqIDR4NOOBruihjOWIl1xuICAgICAqIFxuICAgICAqIDR4NOihjOWIl+OBruS+v+WIqeOCr+ODqeOCueOAglxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21NYXRyaXg0NFxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHIgPSBuZXcgRmxvYXQzMkFycmF5KDE2KTsgICAgLy8gNCAqIDTjga7jgrXjgqTjgrpcbiAgICAgICAgICAgIHRoaXMubG9hZElkZW50aXR5KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5Y+X44GR5Y+W44Gj44Gf77yS44Gk44Gu6KGM5YiX44Gu5LmX566X44KS6KGM44GG44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYSDooYzliJdhXG4gICAgICAgICAqIEBwYXJhbSBiIOihjOWIl2JcbiAgICAgICAgICogQHJldHVybiDkuZfnrpfntZDmnpzjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgbXVsdGlwbHkoYTogRmxvYXQzMkFycmF5LCBiOiBGbG9hdDMyQXJyYXksIGRzdDogRmxvYXQzMkFycmF5KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgYzogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDAuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAwLjAsIDAuMFxuICAgICAgICAgICAgICAgIF1cbiAgICAgICAgICAgICk7XG5cbiAgICAgICAgICAgIGxldCBuOiBudW1iZXIgPSA0O1xuXG4gICAgICAgICAgICBmb3IgKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgajogbnVtYmVyID0gMDsgaiA8IG47ICsrailcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvcihsZXQgazogbnVtYmVyID0gMDsgayA8IG47ICsraylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgY1tqICsgaSAqIDRdICs9IGFbayArIGkgKiA0XSAqIGJbaiArIGsgKiA0XTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgMTY7ICsraSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBkc3RbaV0gPSBjW2ldO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOWNmOS9jeihjOWIl+OBq+WIneacn+WMluOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGxvYWRJZGVudGl0eSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBjOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAwLjAsIDAuMCwgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsIDEuMCwgMC4wLCAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgMC4wLCAxLjAsIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAwLjAsIDAuMCwgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgdGhpcy5zZXRNYXRyaXgoYyk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KGM5YiX44KS6Kit5a6aXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gdHIgMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRNYXRyaXgodHI6IEZsb2F0MzJBcnJheSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpID0gMDsgaSA8IDE2OyArK2kpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fdHJbaV0gPSB0cltpXTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDooYzliJfjgpLmta7li5XlsI/mlbDngrnmlbDjga7phY3liJfjgaflj5blvpdcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4gMTblgIvjga7mta7li5XlsI/mlbDngrnmlbDjgafooajjgZXjgozjgos0eDTjga7ooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRBcnJheSgpOiBGbG9hdDMyQXJyYXlcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFjou7jjga7mi6HlpKfnjofjgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBY6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVYKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruaLoeWkp+eOh+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2NhbGVZKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruenu+WLlemHj+OCkuWPluW+l1xuICAgICAgICAgKiBAcmV0dXJuIFjou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRUcmFuc2xhdGVYKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMTJdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFnou7jjga7np7vli5Xph4/jgpLlj5blvpdcbiAgICAgICAgICogQHJldHVybiBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VHJhbnNsYXRlWSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3RyWzEzXTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBY6Lu444Gu5YCk44KS54++5Zyo44Gu6KGM5YiX44Gn6KiI566XXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gc3JjIFjou7jjga7lgKRcbiAgICAgICAgICogQHJldHVybiDnj77lnKjjga7ooYzliJfjgafoqIjnrpfjgZXjgozjgZ9Y6Lu444Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWChzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbMF0gKiBzcmMgKyB0aGlzLl90clsxMl07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+ioiOeul1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIHNyYyBZ6Lu444Gu5YCkXG4gICAgICAgICAqIEByZXR1cm7jgIDnj77lnKjjga7ooYzliJfjgafoqIjnrpfjgZXjgozjgZ9Z6Lu444Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNmb3JtWShzcmM6IG51bWJlcik6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdHJbNV0gKiBzcmMgKyB0aGlzLl90clsxM107XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWOi7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+mAhuioiOeul1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGludmVydFRyYW5zZm9ybVgoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxMl0pIC8gdGhpcy5fdHJbMF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogWei7uOOBruWApOOCkuePvuWcqOOBruihjOWIl+OBp+mAhuioiOeul1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGludmVydFRyYW5zZm9ybVkoc3JjOiBudW1iZXIpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIChzcmMgLSB0aGlzLl90clsxM10pIC8gdGhpcy5fdHJbNV07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS6LW354K544Gr44GX44Gm56e75YuVXG4gICAgICAgICAqIFxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7kvY3nva7jgpLotbfngrnjgavjgZfjgabnm7jlr77nmoTjgavnp7vli5XjgZnjgovjgIJcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruenu+WLlemHj1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRyYW5zbGF0ZVJlbGF0aXZlKHg6IG51bWJlciwgeTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgdHIxOiBGbG9hdDMyQXJyYXkgPSBuZXcgRmxvYXQzMkFycmF5KFxuICAgICAgICAgICAgICAgIFtcbiAgICAgICAgICAgICAgICAgICAgMS4wLCAgICAwLjAsICAgIDAuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDEuMCwgICAgMC4wLCAgICAwLjAsXG4gICAgICAgICAgICAgICAgICAgIDAuMCwgICAgMC4wLCAgICAxLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgeCwgICAgICB5LCAgICAgIDAuMCwgICAgMS4wXG4gICAgICAgICAgICAgICAgXVxuICAgICAgICAgICAgKTtcblxuICAgICAgICAgICAgQ3ViaXNtTWF0cml4NDQubXVsdGlwbHkodHIxLCB0aGlzLl90ciwgdGhpcy5fdHIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBruS9jee9ruOCkuenu+WLlVxuICAgICAgICAgKiBcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqIEBwYXJhbSB5IHnou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGUoeDogbnVtYmVyLCB5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEyXSA9IHg7XG4gICAgICAgICAgICB0aGlzLl90clsxM10gPSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBrljou7jjga7kvY3nva7jgpLmjIflrprjgZfjgZ/kvY3nva7jgbjnp7vli5XjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7np7vli5Xph49cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0cmFuc2xhdGVYKHg6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMTJdID0geDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga5Z6Lu444Gu5L2N572u44KS5oyH5a6a44GX44Gf5L2N572u44G456e75YuV44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0geSBZ6Lu444Gu56e75YuV6YePXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdHJhbnNsYXRlWSh5OiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3RyWzEzXSA9IHk7XG4gICAgICAgIH1cblxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDnj77lnKjjga7ooYzliJfjga7mi6HlpKfnjofjgpLnm7jlr77nmoTjgavoqK3lrprjgZnjgotcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSB4IFjou7jjga7mi6HlpKfnjodcbiAgICAgICAgICogQHBhcmFtIHkgWei7uOOBruaLoeWkp+eOh1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNjYWxlUmVsYXRpdmUoeDogbnVtYmVyLCB5Om51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHRyMTogRmxvYXQzMkFycmF5ID0gbmV3IEZsb2F0MzJBcnJheShcbiAgICAgICAgICAgICAgICBbXG4gICAgICAgICAgICAgICAgICAgIHgsICAgICAgMC4wLCAgICAwLjAsICAgIDAuMCxcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICB5LCAgICAgIDAuMCwgICAgMC4wLCBcbiAgICAgICAgICAgICAgICAgICAgMC4wLCAgICAwLjAsICAgIDEuMCwgICAgMC4wLFxuICAgICAgICAgICAgICAgICAgICAwLjAsICAgIDAuMCwgICAgMC4wLCAgICAxLjBcbiAgICAgICAgICAgICAgICBdXG4gICAgICAgICAgICApO1xuXG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseSh0cjEsIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog54++5Zyo44Gu6KGM5YiX44Gu5ouh5aSn546H44KS5oyH5a6a44GX44Gf5YCN546H44Gr6Kit5a6a44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0geCBY6Lu444Gu5ouh5aSn546HXG4gICAgICAgICAqIEBwYXJhbSB5IFnou7jjga7mi6HlpKfnjodcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzY2FsZSh4OiBudW1iZXIsIHk6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdHJbMF0gPSB4O1xuICAgICAgICAgICAgdGhpcy5fdHJbNV0gPSB5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOePvuWcqOOBruihjOWIl+OBq+ihjOWIl+OCkuS5l+eul1xuICAgICAgICAgKlxuICAgICAgICAgKiBAcGFyYW0gbSDooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBtdWx0aXBseUJ5TWF0cml4KG06IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBDdWJpc21NYXRyaXg0NC5tdWx0aXBseShtLmdldEFycmF5KCksIHRoaXMuX3RyLCB0aGlzLl90cik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kq44OW44K444Kn44Kv44OI44Gu44Kz44OU44O844KS55Sf5oiQ44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xvbmUoKTogQ3ViaXNtTWF0cml4NDRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGNsb25lTWF0cml4OiBDdWJpc21NYXRyaXg0NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xuXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl90ci5sZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjbG9uZU1hdHJpeC5fdHJbaV0gPSB0aGlzLl90cltpXTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIGNsb25lTWF0cml4O1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIF90cjogRmxvYXQzMkFycmF5OyAgICAvLyA0eDTooYzliJfjg4fjg7zjgr9cbiAgICB9XG59IiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbWF0cml4NDR9IGZyb20gJy4uL21hdGgvY3ViaXNtbWF0cml4NDQnO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3ViaXNtbW9kZWx9IGZyb20gJy4uL21vZGVsL2N1YmlzbW1vZGVsJztcbmltcG9ydCBDdWJpc21Nb2RlbCA9IGN1YmlzbW1vZGVsLkN1YmlzbU1vZGVsO1xuaW1wb3J0IEN1YmlzbU1hdHJpeDQ0ID0gY3ViaXNtbWF0cml4NDQuQ3ViaXNtTWF0cml4NDQ7XG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44Oi44OH44Or5o+P55S744KS5Yem55CG44GZ44KL44Os44Oz44OA44OpXG4gICAgICogXG4gICAgICog44K144OW44Kv44Op44K544Gr55Kw5aKD5L6d5a2Y44Gu5o+P55S75ZG95Luk44KS6KiY6L+w44GZ44KL44CCXG4gICAgICovXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIEN1YmlzbVJlbmRlcmVyXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K544KS55Sf5oiQ44GX44Gm5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODqeOBruOCpOODs+OCueOCv+ODs+OCuVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoKTogQ3ViaXNtUmVuZGVyZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Os44Oz44OA44Op44Gu44Kk44Oz44K544K/44Oz44K544KS6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc3RhdGljIGRlbGV0ZShyZW5kZXJlcjogQ3ViaXNtUmVuZGVyZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJlbmRlcmVyID0gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6zjg7Pjg4Djg6njga7liJ3mnJ/ljJblh6bnkIbjgpLlrp/ooYzjgZnjgotcbiAgICAgICAgICog5byV5pWw44Gr5rih44GX44Gf44Oi44OH44Or44GL44KJ44Os44Oz44OA44Op44Gu5Yid5pyf5YyW5Yem55CG44Gr5b+F6KaB44Gq5oOF5aCx44KS5Y+W44KK5Ye644GZ44GT44Go44GM44Gn44GN44KLXG4gICAgICAgICAqIEBwYXJhbSBtb2RlbCDjg6Ljg4fjg6vjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbml0aWFsaXplKG1vZGVsOiBDdWJpc21Nb2RlbCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbW9kZWwgPSBtb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6Ljg4fjg6vjgpLmj4/nlLvjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkcmF3TW9kZWwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLmdldE1vZGVsKCkgPT0gbnVsbCkgcmV0dXJuO1xuXG4gICAgICAgICAgICB0aGlzLmRvRHJhd01vZGVsKCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDphY3liJfjga/opIfoo73jgZXjgozjgovjga7jgafjgIHlhYPjga7phY3liJfjga/lpJbjgafnoLTmo4TjgZfjgaboia/jgYRcbiAgICAgICAgICogQHBhcmFtIG1hdHJpeDQ0IE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRNdnBNYXRyaXgobWF0cml4NDQ6IEN1YmlzbU1hdHJpeDQ0KTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tdnBNYXRyaXg0eDQuc2V0TWF0cml4KG1hdHJpeDQ0LmdldEFycmF5KCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIE1vZGVsLVZpZXctUHJvamVjdGlvbiDooYzliJfjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICogQHJldHVybiBNb2RlbC1WaWV3LVByb2plY3Rpb24g6KGM5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0TXZwTWF0cml4KCk6IEN1YmlzbU1hdHJpeDQ0XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tdnBNYXRyaXg0eDQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Oi44OH44Or44Gu6Imy44KS44K744OD44OI44GZ44KLXG4gICAgICAgICAqIOWQhOiJsjAuMH4xLjDjga7plpPjgafmjIflrprjgZnjgovvvIgxLjDjgYzmqJnmupbjga7nirbmhYvvvIlcbiAgICAgICAgICogQHBhcmFtIHJlZCDotaTjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcbiAgICAgICAgICogQHBhcmFtIGdyZWVuIOe3keODgeODo+ODs+ODjeODq+OBruWApFxuICAgICAgICAgKiBAcGFyYW0gYmx1ZSDpnZLjg4Hjg6Pjg7Pjg43jg6vjga7lgKRcbiAgICAgICAgICogQHBhcmFtIGFscGhhIM6x44OB44Oj44Oz44ON44Or44Gu5YCkXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgc2V0TW9kZWxDb2xvcihyZWQ6IG51bWJlciwgZ3JlZW46IG51bWJlciwgYmx1ZTogbnVtYmVyLCBhbHBoYTogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZihyZWQgPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVkID0gMC4wO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZihyZWQgPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmVkID0gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihncmVlbiA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBncmVlbiA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoZ3JlZW4gPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgZ3JlZW4gPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGlmKGJsdWUgPCAwLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYmx1ZSA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYmx1ZSA+IDEuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBibHVlID0gMS4wO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBpZihhbHBoYSA8IDAuMClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBhbHBoYSA9IDAuMDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIGVsc2UgaWYoYWxwaGEgPiAxLjApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgYWxwaGEgPSAxLjA7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuUiA9IHJlZDtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuRyA9IGdyZWVuO1xuICAgICAgICAgICAgdGhpcy5fbW9kZWxDb2xvci5CID0gYmx1ZTtcbiAgICAgICAgICAgIHRoaXMuX21vZGVsQ29sb3IuQSA9IGFscGhhO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+OBruiJsuOCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiDlkIToibIwLjB+MS4w44Gu6ZaT44Gn5oyH5a6a44GZ44KLKDEuMOOBjOaomea6luOBrueKtuaFiylcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4gUkdCQeOBruOCq+ODqeODvOaDheWgsVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vZGVsQ29sb3IoKTogQ3ViaXNtVGV4dHVyZUNvbG9yXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBKU09OLnBhcnNlKEpTT04uc3RyaW5naWZ5KHRoaXMuX21vZGVsQ29sb3IpKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDkuZfnrpfmuIjjgb/OseOBruacieWKueODu+eEoeWKueOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiDmnInlirnjgavjgZnjgovjgarjgol0cnVl44CB54Sh5Yq544Gr44GZ44KL44Gq44KJZmFsc2XjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRJc1ByZW11bHRpcGxpZWRBbHBoYShlbmFibGU6IGJvb2xlYW4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzUHJlbXVsdGlwbGllZEFscGhhID0gZW5hYmxlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOS5l+eul+a4iOOBv86x44Gu5pyJ5Yq544O754Sh5Yq544KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gdHJ1ZSDkuZfnrpfmuIjjgb/jga7OseacieWKuVxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOS5l+eul+a4iOOBv+OBrs6x54Sh5Yq5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNQcmVtdWx0aXBsaWVkQWxwaGEoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGE7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kr44Oq44Oz44Kw77yI54mH6Z2i5o+P55S777yJ44Gu5pyJ5Yq544O754Sh5Yq544KS44K744OD44OI44GZ44KL44CCXG4gICAgICAgICAqIOacieWKueOBq+OBmeOCi+OBquOCiXRydWXjgIHnhKHlirnjgavjgZnjgovjgarjgolmYWxzZeOCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldElzQ3VsbGluZyhjdWxsaW5nOiBib29sZWFuKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9pc0N1bGxpbmcgPSBjdWxsaW5nO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCq+ODquODs+OCsO+8iOeJh+mdouaPj+eUu++8ieOBruacieWKueODu+eEoeWKueOCkuWPluW+l+OBmeOCi+OAglxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg44Kr44Oq44Oz44Kw5pyJ5Yq5XG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug44Kr44Oq44Oz44Kw54Sh5Yq5XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNDdWxsaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2lzQ3VsbGluZztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr/jgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICog44OR44Op44Oh44O844K/5YCk44Gu5b2x6Z+/5bqm44Gv44Os44Oz44OA44Op44Gu5a6f6KOF44Gr5L6d5a2Y44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBuIOODkeODqeODoeODvOOCv+OBruWApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldEFuaXNvdHJvcHkobjogbnVtYmVyKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9hbmlzb3J0b3B5ID0gbjtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODhuOCr+OCueODgeODo+OBrueVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv+OCkuOCu+ODg+ODiOOBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOeVsOaWueaAp+ODleOCo+ODq+OCv+ODquODs+OCsOOBruODkeODqeODoeODvOOCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEFuaXNvdHJvcHkoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9hbmlzb3J0b3B5O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODquODs+OCsOOBmeOCi+ODouODh+ODq+OCkuWPluW+l+OBmeOCi1xuICAgICAgICAgKiBAcmV0dXJuIOODrOODs+ODgOODquODs+OCsOOBmeOCi+ODouODh+ODq1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1vZGVsKCk6IEN1YmlzbU1vZGVsXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tb2RlbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2lzQ3VsbGluZyA9IGZhbHNlO1xuICAgICAgICAgICAgdGhpcy5faXNQcmVtdWx0aXBsaWVkQWxwaGEgPSBmYWxzZTtcbiAgICAgICAgICAgIHRoaXMuX2FuaXNvcnRvcHkgPSAwLjA7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbCA9IG51bGw7XG4gICAgICAgICAgICB0aGlzLl9tb2RlbENvbG9yID0gbmV3IEN1YmlzbVRleHR1cmVDb2xvcigpO1xuXG4gICAgICAgICAgICAvLyDljZjkvY3ooYzliJfjgavliJ3mnJ/ljJZcbiAgICAgICAgICAgIHRoaXMuX212cE1hdHJpeDR4NCA9IG5ldyBDdWJpc21NYXRyaXg0NCgpO1xuICAgICAgICAgICAgdGhpcy5fbXZwTWF0cml4NHg0LmxvYWRJZGVudGl0eSgpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODouODh+ODq+aPj+eUu+OBruWun+ijhVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGRvRHJhd01vZGVsKCk6IHZvaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaPj+eUu+OCquODluOCuOOCp+OCr+ODiO+8iOOCouODvOODiOODoeODg+OCt+ODpe+8ieOCkuaPj+eUu+OBmeOCi1xuICAgICAgICAgKiDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjgajjg4bjgq/jgrnjg4Hjg6Pnlarlj7fjgpLjgrvjg4Pjg4jjgafmuKHjgZnjgIJcbiAgICAgICAgICogQHBhcmFtIHRleHR1cmVObyDmj4/nlLvjgZnjgovjg4bjgq/jgrnjg4Hjg6Pnlarlj7dcbiAgICAgICAgICogQHBhcmFtIGluZGV4Q291bnQg5o+P55S744Kq44OW44K444Kn44Kv44OI44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhDb3VudCDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjga7poILngrnmlbBcbiAgICAgICAgICogQHBhcmFtIGluZGV4QXJyYXkg44Od44Oq44K044Oz44Oh44OD44K344Ol6aCC54K544Gu44Kk44Oz44OH44OD44Kv44K56YWN5YiXXG4gICAgICAgICAqIEBwYXJhbSB2ZXJ0ZXhBcnJheSDjg53jg6rjgrTjg7Pjg6Hjg4Pjgrfjg6Xjga7poILngrnphY3liJdcbiAgICAgICAgICogQHBhcmFtIHV2QXJyYXkgdXbphY3liJdcbiAgICAgICAgICogQHBhcmFtIG9wYWNpdHkg5LiN6YCP5piO5bqmXG4gICAgICAgICAqIEBwYXJhbSBjb2xvckJsZW5kTW9kZSDjgqvjg6njg7zjg5bjg6zjg7Pjg4fjgqPjg7PjgrDjga7jgr/jgqTjg5dcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhYnN0cmFjdCBkcmF3TWVzaCh0ZXh0dXJlTm86IG51bWJlciwgaW5kZXhDb3VudDogbnVtYmVyLCB2ZXJ0ZXhDb3VudDogbnVtYmVyLFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgaW5kZXhBcnJheTogVWludDE2QXJyYXksIHZlcnRleEFycmF5OiBGbG9hdDMyQXJyYXksIHV2QXJyYXk6IEZsb2F0MzJBcnJheSxcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIG9wYWNpdHk6IG51bWJlciwgY29sb3JCbGVuZE1vZGU6IEN1YmlzbUJsZW5kTW9kZSk6IHZvaWQ7XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODrOODs+ODgOODqeOBjOS/neaMgeOBmeOCi+mdmeeahOOBquODquOCveODvOOCueOCkumWi+aUvuOBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBzdGF0aWNSZWxlYXNlOiBGdW5jdGlvbjtcblxuICAgICAgICBwcm90ZWN0ZWQgX212cE1hdHJpeDR4NDogQ3ViaXNtTWF0cml4NDQ7ICAgICAgICAgICAgICAgICAgLy8gTW9kZWwtVmlldy1Qcm9qZWN0aW9uIOihjOWIl1xuICAgICAgICBwcm90ZWN0ZWQgX21vZGVsQ29sb3I6IEN1YmlzbVRleHR1cmVDb2xvcjsgICAgICAgICAgICAgICAgLy8g44Oi44OH44Or6Ieq5L2T44Gu44Kr44Op44O877yIUkdCQe+8iVxuICAgICAgICBwcm90ZWN0ZWQgX2lzQ3VsbGluZzogYm9vbGVhbjsgICAgICAgICAgICAgICAgICAgICAgICAgICAgLy8g44Kr44Oq44Oz44Kw44GM5pyJ5Yq544Gq44KJdHJ1ZVxuICAgICAgICBwcm90ZWN0ZWQgX2lzUHJlbXVsdGlwbGllZEFscGhhOiBib29sZWFuOyAgICAgICAgICAgICAgICAgLy8g5LmX566X5riI44G/zrHjgarjgol0cnVlXG4gICAgICAgIHByb3RlY3RlZCBfYW5pc29ydG9weTogYW55OyAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyDjg4bjgq/jgrnjg4Hjg6Pjga7nlbDmlrnmgKfjg5XjgqPjg6vjgr/jg6rjg7PjgrDjga7jg5Hjg6njg6Hjg7zjgr9cbiAgICAgICAgcHJvdGVjdGVkIF9tb2RlbDogQ3ViaXNtTW9kZWw7ICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIOODrOODs+ODgOODquODs+OCsOWvvuixoeOBruODouODh+ODq1xuICAgIH1cblxuICAgIGV4cG9ydCBlbnVtIEN1YmlzbUJsZW5kTW9kZVxuICAgIHtcbiAgICAgICAgQ3ViaXNtQmxlbmRNb2RlX05vcm1hbCA9IDAsICAgICAgICAgLy8g6YCa5bi4XG4gICAgICAgIEN1YmlzbUJsZW5kTW9kZV9BZGRpdGl2ZSA9IDEsICAgICAgIC8vIOWKoOeul1xuICAgICAgICBDdWJpc21CbGVuZE1vZGVfTXVsdGlwbGljYXRpdmUgPSAyLCAvLyDkuZfnrpdcbiAgICB9O1xuXG4gICAgLyoqXG4gICAgICog44OG44Kv44K544OB44Oj44Gu6Imy44KSUkdCQeOBp+aJseOBhuOBn+OCgeOBruOCr+ODqeOCuVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21UZXh0dXJlQ29sb3JcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5SID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5HID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5CID0gMS4wO1xuICAgICAgICAgICAgdGhpcy5BID0gMS4wO1xuICAgICAgICB9XG5cbiAgICAgICAgUjogbnVtYmVyOyAgLy8g6LWk44OB44Oj44Oz44ON44OrXG4gICAgICAgIEc6IG51bWJlcjsgIC8vIOe3keODgeODo+ODs+ODjeODq1xuICAgICAgICBCOiBudW1iZXI7ICAvLyDpnZLjg4Hjg6Pjg7Pjg43jg6tcbiAgICAgICAgQTogbnVtYmVyOyAgLy8gzrHjg4Hjg6Pjg7Pjg43jg6tcbiAgICB9XG59IiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuaW1wb3J0IHsgQ3ViaXNtTG9nRGVidWcgfSBmcm9tIFwiLi4vdXRpbHMvY3ViaXNtZGVidWdcIjtcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiBLZXktVmFsdWXjga7jg5rjgqLjgpLlrprnvqnjgZnjgovjgq/jg6njgrlcbiAgICAgKiBjc21NYXDjgq/jg6njgrnjga7lhoXpg6jjg4fjg7zjgr/jgafkvb/nlKjjgZnjgovjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBrZXkgS2V544Go44GX44Gm44K744OD44OI44GZ44KL5YCkXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBWYWx1ZeOBqOOBl+OBpuOCu+ODg+ODiOOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKGtleT86IF9LZXlULCB2YWx1ZT86IF9WYWxUKVxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLmZpcnN0ID0gKGtleSA9PSB1bmRlZmluZWQpIFxuICAgICAgICAgICAgICAgID8gbnVsbCBcbiAgICAgICAgICAgICAgICA6IGtleTtcblxuICAgICAgICAgICAgdGhpcy5zZWNvbmQgPSAodmFsdWUgPT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gbnVsbFxuICAgICAgICAgICAgICAgIDogdmFsdWU7ICAgXG4gICAgICAgIH1cblxuICAgICAgICBwdWJsaWMgZmlyc3Q6IF9LZXlUOyAgIC8vIGtleeOBqOOBl+OBpueUqOOBhOOCi+WkieaVsFxuICAgICAgICBwdWJsaWMgc2Vjb25kOiBfVmFsVDsgIC8vIHZhbHVl44Go44GX44Gm55So44GE44KL5aSJ5pWwXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44Oe44OD44OX5Z6LXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbU1hcDxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw5LuY44GN44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqIEBwYXJhbSBzaXplIOWIneacn+WMluaZgueCueOBp+eiuuS/neOBmeOCi+OCteOCpOOCulxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHNpemU/OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHNpemUgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmKHNpemUgPCAxKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2R1bW15VmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gMDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KHNpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9zaXplID0gc2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fZHVtbXlWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICAgICAgdGhpcy5fc2l6ZSA9IDA7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuY2xlYXIoKTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCreODvOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0ga2V5IOaWsOOBn+OBq+i/veWKoOOBmeOCi+OCreODvFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFwcGVuZEtleShrZXk6IF9LZXlUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICAvLyDmlrDjgZfjgY9LZXkvVmFsdWXjga7jg5rjgqLjgpLkvZzjgotcbiAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX3NpemUgKyAxLCBmYWxzZSk7IC8vIDHjgaTku6XkuIrlhaXjgovpmpnplpPjgpLkvZzjgotcbiAgICAgICAgICAgIC8vIOaWsOOBl+OBhGtleS92YWx1ZeOBruOCpOODs+ODh+ODg+OCr+OCueOBr19zaXplXG5cbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1t0aGlzLl9zaXplXSA9IG5ldyBjc21QYWlyPF9LZXlULCBfVmFsVD4oa2V5KTtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgKz0gMTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmt7vlrZfmvJTnrpflrZBba2V5XeOBruOCquODvOODkOODvOODreODvOODiShnZXQpXG4gICAgICAgICAqIEBwYXJhbSBrZXkg5re75a2X44GL44KJ54m55a6a44GV44KM44KLVmFsdWXlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZShrZXk6IF9LZXlUKTogX1ZhbFRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGZvdW5kID0gLTE7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IHRoaXMuX3NpemU7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXNbaV0uZmlyc3QgPT0ga2V5KVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgZm91bmQgPSBpO1xuICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGZvdW5kID49IDApXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleVZhbHVlc1tmb3VuZF0uc2Vjb25kO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuYXBwZW5kS2V5KGtleSk7IC8vIOaWsOimj+OCreODvOOCkui/veWKoFxuICAgICAgICAgICAgICAgIHJldHVybiB0aGlzLl9rZXlWYWx1ZXNbdGhpcy5fc2l6ZSAtIDFdLnNlY29uZDtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtrZXld44Gu44Kq44O844OQ44O844Ot44O844OJKHNldClcbiAgICAgICAgICogQHBhcmFtIGtleSDmt7vlrZfjgYvjgonnibnlrprjgZXjgozjgotWYWx1ZeWApFxuICAgICAgICAgKiBAcGFyYW0gdmFsdWUg5Luj5YWl44GZ44KLVmFsdWXlgKRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRWYWx1ZShrZXk6IF9LZXlULCB2YWx1ZTogX1ZhbFQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBmb3VuZCA9IC0xO1xuICAgICAgICAgICAgXG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGZvdW5kID0gaTtcbiAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgXG4gICAgICAgICAgICBpZihmb3VuZCA+PSAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlc1tmb3VuZF0uc2Vjb25kID0gdmFsdWU7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5hcHBlbmRLZXkoa2V5KTsgLy8g5paw6KaP44Kt44O844KS6L+95YqgXG4gICAgICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzW3RoaXMuX3NpemUgLSAxXS5zZWNvbmQgPSB2YWx1ZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBp+a4oeOBl+OBn0tleeOCkuaMgeOBpOimgee0oOOBjOWtmOWcqOOBmeOCi+OBi1xuICAgICAgICAgKiBAcGFyYW0ga2V5IOWtmOWcqOOCkueiuuiqjeOBmeOCi2tleVxuICAgICAgICAgKiBAcmV0dXJuIHRydWUg5byV5pWw44Gn5rih44GX44Gfa2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GZ44KLXG4gICAgICAgICAqIEByZXR1cm4gZmFsc2Ug5byV5pWw44Gn5rih44GX44Gfa2V544KS5oyB44Gk6KaB57Sg44GM5a2Y5Zyo44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFeGlzdChrZXk6IF9LZXlUKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgaWYodGhpcy5fa2V5VmFsdWVzW2ldLmZpcnN0ID09IGtleSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuICAgICAgICBcbiAgICAgICAgLyoqXG4gICAgICAgICAqIGtleVZhbHVl44Gu44Od44Kk44Oz44K/44KS5YWo44Gm6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSB2b2lkIDA7XG4gICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fa2V5VmFsdWVzID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu44K144Kk44K644KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcmV0dXJuIOOCs+ODs+ODhuODiuOBruOCteOCpOOCulxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruOCreODo+ODkeOCt+ODhuOCo+OCkueiuuS/neOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDmlrDjgZ/jgarjgq3jg6Pjg5Hjgrfjg4bjgqPjgILlvJXmlbDjga7lgKTjgYznj77lnKjjga7jgrXjgqTjgrrmnKrmuoDjga7loLTlkIjjga/kvZXjgoLjgZfjgarjgYTjgIJcbiAgICAgICAgICogQHBhcmFtIGZpdFRvU2l6ZSB0cnVl44Gq44KJ5oyH5a6a44GX44Gf44K144Kk44K644Gr5ZCI44KP44Gb44KL44CCZmFsc2XjgarjgonjgrXjgqTjgrrjgpIy5YCN56K65L+d44GX44Gm44GK44GP44CCXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcHJlcGFyZUNhcGFjaXR5KG5ld1NpemU6IG51bWJlciwgZml0VG9TaXplOiBib29sZWFuKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZihuZXdTaXplID4gdGhpcy5fa2V5VmFsdWVzLmxlbmd0aClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID09IDApXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZighZml0VG9TaXplICYmIG5ld1NpemUgPCBjc21NYXAuRGVmYXVsdFNpemUpIG5ld1NpemUgPSBjc21NYXAuRGVmYXVsdFNpemU7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5sZW5ndGggPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZighZml0VG9TaXplICYmIG5ld1NpemUgPCB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoICogMikgbmV3U2l6ZSA9IHRoaXMuX2tleVZhbHVlcy5sZW5ndGggKiAyO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9rZXlWYWx1ZXMubGVuZ3RoID0gbmV3U2l6ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWI6aCt6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYmVnaW4oKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+ID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcywgMCk7XG4gICAgICAgICAgICByZXR1cm4gaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBrue1guerr+imgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVuZCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4gPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLCB0aGlzLl9zaXplKTsgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBi+OCieimgee0oOOCkuWJiumZpOOBmeOCi1xuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpbmRleDogbnVtYmVyID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIGlmKGluZGV4IDwgMCB8fCB0aGlzLl9zaXplIDw9IGluZGV4KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiBpdGU7IC8vIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAvLyDliYrpmaRcbiAgICAgICAgICAgIHRoaXMuX2tleVZhbHVlcy5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICBsZXQgaXRlMjogaXRlcmF0b3I8X0tleVQsIF9WYWxUPiA9IG5ldyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+KHRoaXMsIGluZGV4KTsgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7lgKTjgpIzMuODk+ODg+ODiOespuWPt+S7mOOBjeaVtOaVsOWei+OBp+ODgOODs+ODl+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGR1bXBBc0ludCgpXG4gICAgICAgIHtcbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCB0aGlzLl9zaXplOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtTG9nRGVidWcoXCJ7MH0gLFwiLCB0aGlzLl9rZXlWYWx1ZXNbaV0pO1xuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0RlYnVnKFwiXFxuXCIpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgcHVibGljIHN0YXRpYyByZWFkb25seSBEZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rjga7liJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcbiAgICAgICAgcHVibGljIF9rZXlWYWx1ZXM6IGNzbVBhaXI8X0tleVQsIF9WYWxUPltdOy8vIGtleS12YWx1ZeODmuOCouOBrumFjeWIl1xuICAgICAgICBwdWJsaWMgX2R1bW15VmFsdWU6IF9WYWxUOyAgLy8g56m644Gu5YCk44KS6L+U44GZ54K644Gu44OA44Of44O8XG4gICAgICAgIHB1YmxpYyBfc2l6ZTogbnVtYmVyOyAgICAgICAvLyDjgrPjg7Pjg4bjg4rjga7opoHntKDmlbBcbiAgICB9XG5cblxuICAgIC8qKlxuICAgICAqIGNzbU1hcDxUPuOBruOCpOODhuODrOODvOOCv1xuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih2PzogY3NtTWFwPF9LZXlULCBfVmFsVD4sIGlkeD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fbWFwID0gKHYgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAgICAgID8gdlxuICAgICAgICAgICAgICAgIDogbmV3IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+KCk7XG5cbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gKGlkeCAhPSB1bmRlZmluZWQpXG4gICAgICAgICAgICAgICAgPyBpZHhcbiAgICAgICAgICAgICAgICA6IDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHNldChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX21hcCA9IGl0ZS5fbWFwO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICArK3RoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICAtLXRoaXMuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNKyvmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbmNyZW1lbnQoKTogaXRlcmF0b3I8X0tleVQsIF9WYWxUPlxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgaXRlb2xkID0gbmV3IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4odGhpcy5fbWFwLCB0aGlzLl9pbmRleCsrKTsgIC8vIOWPpOOBhOWApOOCkuS/neWtmFxuICAgICAgICAgICAgdGhpcy5fbWFwID0gaXRlb2xkLl9tYXA7XG4gICAgICAgICAgICB0aGlzLl9pbmRleCA9IGl0ZW9sZC5faW5kZXg7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvoznva7jgY0tLea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGRlY3JlbWVudCgpOiBpdGVyYXRvcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8X0tleVQsIF9WYWxUPih0aGlzLl9tYXAsIHRoaXMuX2luZGV4KTsgLy8g5Y+k44GE5YCk44KS5L+d5a2YXG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBpdGVvbGQuX21hcDtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqICrmvJTnrpflrZDjga7jgqrjg7zjg5Djg7zjg63jg7zjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdHIoKTogY3NtUGFpcjxfS2V5VCwgX1ZhbFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9tYXAuX2tleVZhbHVlc1t0aGlzLl9pbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIT3mvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBub3RFcXVhbChpdGU6IGl0ZXJhdG9yPF9LZXlULCBfVmFsVD4pOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX21hcCAhPSBpdGUuX21hcCk7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgICAgICAgICAgICAgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgIF9tYXA6IGNzbU1hcDxfS2V5VCwgX1ZhbFQ+OyAvLyDjgrPjg7Pjg4bjg4pcbiAgICB9XG59IiwiLypcbiAqIENvcHlyaWdodChjKSBMaXZlMkQgSW5jLiBBbGwgcmlnaHRzIHJlc2VydmVkLlxuICpcbiAqIFVzZSBvZiB0aGlzIHNvdXJjZSBjb2RlIGlzIGdvdmVybmVkIGJ5IHRoZSBMaXZlMkQgT3BlbiBTb2Z0d2FyZSBsaWNlbnNlXG4gKiB0aGF0IGNhbiBiZSBmb3VuZCBhdCBodHRwOi8vbGl2ZTJkLmNvbS9ldWxhL2xpdmUyZC1vcGVuLXNvZnR3YXJlLWxpY2Vuc2UtYWdyZWVtZW50X2VuLmh0bWwuXG4gKi9cblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvKipcbiAgICAgKiDmloflrZfliJfjgq/jg6njgrnjgIJcbiAgICAgKi9cbiAgICBleHBvcnQgY2xhc3MgY3NtU3RyaW5nXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX44KS5b6M5pa544Gr6L+95Yqg44GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYyDov73liqDjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiDmm7TmlrDjgZXjgozjgZ/mloflrZfliJdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhcHBlbmQoYzogc3RyaW5nLCBsZW5ndGg/OiBudW1iZXIpOiBjc21TdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5zICs9IChsZW5ndGggIT09IHVuZGVmaW5lZClcbiAgICAgICAgICAgICAgICA/IGMuc3Vic3RyKDAsIGxlbmd0aClcbiAgICAgICAgICAgICAgICA6IGM7XG5cbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+OCteOCpOOCuuOCkuaLoeW8teOBl+OBpuaWh+Wtl+OCkuWfi+OCgeOCi1xuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoICAgIOaLoeW8teOBmeOCi+aWh+Wtl+aVsFxuICAgICAgICAgKiBAcGFyYW0gdiAgICAgICAgIOWfi+OCgeOCi+aWh+Wtl1xuICAgICAgICAgKiBAcmV0dXJuIOabtOaWsOOBleOCjOOBn+aWh+Wtl+WIl1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGV4cGFuc2lvbihsZW5ndGg6IG51bWJlciwgdjogc3RyaW5nKTogY3NtU3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IGNzbVN0cmluZyA9IHRoaXM7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaSA9IDA7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXQuYXBwZW5kKHYpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkuODkOOCpOODiOaVsOOBp+WPluW+l+OBmeOCi1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldEJ5dGVzKCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZW5jb2RlVVJJQ29tcG9uZW50KHRoaXMucykgLnJlcGxhY2UoLyUuLi9nLCBcInhcIikubGVuZ3RoO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBrumVt+OBleOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldExlbmd0aCgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucy5sZW5ndGg7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5paH5a2X5YiX5q+U6LyD44CAPFxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlsI/jgZXjgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgojjgorlpKfjgY3jgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0xlc3MoczogY3NtU3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zIDwgcy5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA+XG4gICAgICAgICAqIEBwYXJhbSBzIOavlOi8g+OBmeOCi+aWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIHRydWU6ICAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWkp+OBjeOBhFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiAgIOavlOi8g+OBmeOCi+aWh+Wtl+WIl+OCiOOCiuWwj+OBleOBhFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzR3JlYXQoczogY3NtU3RyaW5nKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5zID4gcy5zO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+avlOi8gyA9PVxuICAgICAgICAgKiBAcGFyYW0gcyDmr5TovIPjgZnjgovmloflrZfliJdcbiAgICAgICAgICogQHJldHVybiB0cnVlOiAgICDmr5TovIPjgZnjgovmloflrZfliJfjgajnrYnjgZfjgYRcbiAgICAgICAgICogQHJldHVybiBmYWxzZTogICDmr5TovIPjgZnjgovmloflrZfliJfjgajnlbDjgarjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VxdWFsKHM6IHN0cmluZyk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucyA9PSBzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOaWh+Wtl+WIl+OBjOepuuOBi+OBqeOBhuOBi1xuICAgICAgICAgKiBAcmV0dXJuIHRydWU6IOepuuOBruaWh+Wtl+WIl1xuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlOiDlgKTjgYzoqK3lrprjgZXjgozjgabjgYTjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0VtcHR5KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMucy5sZW5ndGggPT0gMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMucyA9IHM7XG4gICAgICAgIH1cblxuICAgICAgICBzOiBzdHJpbmc7XG4gICAgfVxufSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmV4cG9ydCBuYW1lc3BhY2UgTGl2ZTJEQ3ViaXNtRnJhbWV3b3JrXG57XG4gICAgLyoqXG4gICAgICog44OZ44Kv44K/44O85Z6L77yI5Y+v5aSJ6YWN5YiX5Z6L77yJXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIGNzbVZlY3RvcjxUPlxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKiBAcGFyYW0gaW5paXRhbENhcGFjaXR5IOWIneacn+WMluW+jOOBruOCreODo+ODkeOCt+ODhuOCo+OAguODh+ODvOOCv+OCteOCpOOCuuOBr19jYXBhY2l0eSAqIHNpemVvZihUKVxuICAgICAgICAgKiBAcGFyYW0gemVyb0NsZWFyIHRydWXjgarjgonliJ3mnJ/ljJbmmYLjgavnorrkv53jgZfjgZ/poJjln5/jgpIw44Gn5Z+L44KB44KLXG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcihpbml0aWFsQ2FwYWNpdHk6IG51bWJlciA9IDApXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKGluaXRpYWxDYXBhY2l0eSA8IDEpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KCk7XG4gICAgICAgICAgICAgICAgdGhpcy5fY2FwYWNpdHkgPSAwO1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ciA9IG5ldyBBcnJheShpbml0aWFsQ2FwYWNpdHkpO1xuICAgICAgICAgICAgICAgIHRoaXMuX2NhcGFjaXR5ID0gaW5pdGlhbENhcGFjaXR5O1xuICAgICAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCpOODs+ODh+ODg+OCr+OCueOBp+aMh+WumuOBl+OBn+imgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGF0KGluZGV4OiBudW1iZXIpOiBUXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9wdHJbaW5kZXhdO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuOCu+ODg+ODiFxuICAgICAgICAgKiBAcGFyYW0gaW5kZXgg6KaB57Sg44KS44K744OD44OI44GZ44KL44Kk44Oz44OH44OD44Kv44K5XG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSDjgrvjg4Pjg4jjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaW5kZXg6IG51bWJlciwgdmFsdWU6IFQpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3B0cltpbmRleF0gPSB2YWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXQob2Zmc2V0OiBudW1iZXIgPSAwKTogVFtdXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCByZXQ6IFRbXSA9IG5ldyBBcnJheTxUPigpO1xuICAgICAgICAgICAgZm9yKGxldCBpID0gb2Zmc2V0OyBpIDwgdGhpcy5fc2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldC5wdXNoKHRoaXMuX3B0cltpXSk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gcmV0O1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHB1c2hCYWNr5Yem55CG44CB44Kz44Oz44OG44OK44Gr5paw44Gf44Gq6KaB57Sg44KS6L+95Yqg44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSB2YWx1ZSBQdXNoQmFja+WHpueQhuOBp+i/veWKoOOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB1c2hCYWNrKHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBpZih0aGlzLl9zaXplID49IHRoaXMuX2NhcGFjaXR5KVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KHRoaXMuX2NhcGFjaXR5ID09IDAgPyBjc21WZWN0b3Iuc19kZWZhdWx0U2l6ZSA6IHRoaXMuX2NhcGFjaXR5ICogMik7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3B0clt0aGlzLl9zaXplKytdID0gdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu5YWo6KaB57Sg44KS6Kej5pS+44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY2xlYXIoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9wdHIubGVuZ3RoID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSAwO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruimgee0oOaVsOOCkui/lOOBmVxuICAgICAgICAgKiBAcmV0dXJuIOOCs+ODs+ODhuODiuOBruimgee0oOaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFNpemUoKTogbnVtYmVyXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zaXplO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFqOimgee0oOOBq+WvvuOBl+OBpuS7o+WFpeWHpueQhuOCkuihjOOBhlxuICAgICAgICAgKiBAcGFyYW0gbmV3U2l6ZSDku6PlhaXlh6bnkIblvozjga7jgrXjgqTjgrpcbiAgICAgICAgICogQHBhcmFtIHZhbHVlIOimgee0oOOBq+S7o+WFpeOBmeOCi+WApFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFzc2lnbihuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBUKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQgY3VyU2l6ZSA9IHRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgZm9yKGxldCBpOiBudW1iZXIgPSAwOyBpIDwgbmV3U2l6ZTsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrXjgqTjgrrlpInmm7RcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZXNpemUobmV3U2l6ZTogbnVtYmVyLCB2YWx1ZTogVCA9IG51bGwpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMudXBkYXRlU2l6ZShuZXdTaXplLCB2YWx1ZSwgdHJ1ZSk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K65aSJ5pu0XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdXBkYXRlU2l6ZShuZXdTaXplOiBudW1iZXIsIHZhbHVlOiBhbnkgPSBudWxsLCBjYWxsUGxhY2VtZW50TmV3OiBib29sZWFuID0gdHJ1ZSk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGN1clNpemU6IG51bWJlciA9IHRoaXMuX3NpemU7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKGN1clNpemUgPCBuZXdTaXplKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucHJlcGFyZUNhcGFjaXR5KG5ld1NpemUpOyAgLy8gY2FwYWNpdHnmm7TmlrBcblxuICAgICAgICAgICAgICAgIGlmKGNhbGxQbGFjZW1lbnROZXcpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHR5cGVvZiB2YWx1ZSA9PSAnZnVuY3Rpb24nKSAgLy8gbmV3XG4gICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyW2ldID0gSlNPTi5wYXJzZShKU09OLnN0cmluZ2lmeShuZXcgdmFsdWUoKSkpO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZSAvLyDjg5fjg6rjg5/jg4bjgqPjg5blnovjgarjga7jgaflgKTmuKHjgZdcbiAgICAgICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9wdHJbaV0gPSB2YWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBmb3IobGV0IGk6IG51bWJlciA9IHRoaXMuX3NpemU7IGkgPCBuZXdTaXplOyBpKyspXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0cltpXSA9IHZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIG5ld1NpemUgPD0gdGhpcy5fc2l6ZVxuICAgICAgICAgICAgICAgIC8vLS0tXG4gICAgICAgICAgICAgICAgbGV0IHN1YiA9IHRoaXMuX3NpemUgLSBuZXdTaXplO1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UodGhpcy5fc2l6ZSAtIHN1Yiwgc3ViKTsgICAgLy8g5LiN6KaB44Gq44Gu44Gn56C05qOE44GZ44KLXG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9zaXplID0gbmV3U2l6ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgavjgrPjg7Pjg4bjg4ropoHntKDjgpLmjL/lhaXjgZnjgotcbiAgICAgICAgICogQHBhcmFtIHBvc2l0aW9uIOaMv+WFpeOBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gYmVnaW7jgIDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7plovlp4vkvY3nva5cbiAgICAgICAgICogQHBhcmFtIGVuZCDmjL/lhaXjgZnjgovjgrPjg7Pjg4bjg4rjga7ntYLnq6/kvY3nva5cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpbnNlcnQocG9zaXRpb246IGl0ZXJhdG9yPFQ+LCBiZWdpbjogaXRlcmF0b3I8VD4sIGVuZDogaXRlcmF0b3I8VD4pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBkc3RTaTogbnVtYmVyID0gcG9zaXRpb24uX2luZGV4O1xuICAgICAgICAgICAgbGV0IHNyY1NpOiBudW1iZXIgPSBiZWdpbi5faW5kZXg7XG4gICAgICAgICAgICBsZXQgc3JjRWk6IG51bWJlciA9IGVuZC5faW5kZXg7XG5cbiAgICAgICAgICAgIGxldCBhZGRDb3VudDogbnVtYmVyID0gc3JjRWkgLSBzcmNTaTtcblxuICAgICAgICAgICAgdGhpcy5wcmVwYXJlQ2FwYWNpdHkodGhpcy5fc2l6ZSArIGFkZENvdW50KTtcblxuICAgICAgICAgICAgLy8g5oy/5YWl55So44Gu5pei5a2Y44OH44O844K/44KS44K344OV44OI44GX44Gm6ZqZ6ZaT44KS5L2c44KLXG4gICAgICAgICAgICBsZXQgYWRkU2l6ZSA9IHRoaXMuX3NpemUgLSBkc3RTaTtcbiAgICAgICAgICAgIGlmKGFkZFNpemUgPiAwKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMDsgaSA8IGFkZFNpemU7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoZHN0U2kgKyBpLCAwLCBudWxsKTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gc3JjU2k7IGkgPCBzcmNFaTsgaSsrLCBkc3RTaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3B0cltkc3RTaV0gPSBiZWdpbi5fdmVjdG9yLl9wdHJbaV07XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3NpemUgPSB0aGlzLl9zaXplICsgYWRkQ291bnQ7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44GL44KJ44Kk44Oz44OH44OD44Kv44K544Gn5oyH5a6a44GX44Gf6KaB57Sg44KS5YmK6Zmk44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBpbmRleCDjgqTjg7Pjg4fjg4Pjgq/jgrnlgKRcbiAgICAgICAgICogQHJldHVybiB0cnVlIOWJiumZpOWun+ihjFxuICAgICAgICAgKiBAcmV0dXJuIGZhbHNlIOWJiumZpOevhOWbsuWkllxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHJlbW92ZShpbmRleDogbnVtYmVyKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZihpbmRleCA8IDAgfHwgdGhpcy5fc2l6ZSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gZmFsc2U7ICAgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHRoaXMuX3B0ci5zcGxpY2UoaW5kZXgsIDEpO1xuICAgICAgICAgICAgLS10aGlzLl9zaXplO1xuXG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjgYvjgonopoHntKDjgpLliYrpmaTjgZfjgabku5bjga7opoHntKDjgpLjgrfjg5Xjg4jjgZnjgotcbiAgICAgICAgICogQHBhcmFtIGl0ZSDliYrpmaTjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcmFzZShpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGluZGV4OiBudW1iZXIgPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX3NpemUgPD0gaW5kZXgpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGl0ZTsgLy8g5YmK6Zmk56+E5Zuy5aSWXG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIC8vIOWJiumZpFxuICAgICAgICAgICAgdGhpcy5fcHRyLnNwbGljZShpbmRleCwgMSk7XG4gICAgICAgICAgICAtLXRoaXMuX3NpemU7XG5cbiAgICAgICAgICAgIGxldCBpdGUyOiBpdGVyYXRvcjxUPiA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLCBpbmRleCk7ICAgLy8g57WC5LqGXG4gICAgICAgICAgICByZXR1cm4gaXRlMjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqPjgpLnorrkv53jgZnjgotcbiAgICAgICAgICogQHBhcmFtIG5ld1NpemUg5paw44Gf44Gq44Kt44Oj44OR44K344OG44Kj44CC5byV5pWw44Gu5YCk44GM54++5Zyo44Gu44K144Kk44K65pyq5rqA44Gu5aC05ZCI44Gv5L2V44KC44GX44Gq44GELlxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHByZXBhcmVDYXBhY2l0eShuZXdTaXplOiBudW1iZXIpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKG5ld1NpemUgPiB0aGlzLl9jYXBhY2l0eSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZih0aGlzLl9jYXBhY2l0eSA9PSAwKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fcHRyID0gbmV3IEFycmF5KG5ld1NpemUpO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX3B0ci5sZW5ndGggPSBuZXdTaXplO1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9jYXBhY2l0eSA9IG5ld1NpemU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+ODhuODiuOBruWFiOmgreimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGJlZ2luKCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gKHRoaXMuX3NpemUgPT0gMCkgXG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgID8gdGhpcy5lbmQoKVxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICA6IG5ldyBpdGVyYXRvcjxUPih0aGlzLCAwKTtcbiAgICAgICAgICAgIHJldHVybiBpdGU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44OG44OK44Gu57WC56uv6KaB57Sg44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZW5kKCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGU6IGl0ZXJhdG9yPFQ+ID0gbmV3IGl0ZXJhdG9yPFQ+KHRoaXMsIHRoaXMuX3NpemUpO1xuICAgICAgICAgICAgcmV0dXJuIGl0ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIHB1YmxpYyBnZXRPZmZzZXQob2Zmc2V0OiBudW1iZXIpOiBjc21WZWN0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IG5ld1ZlY3RvciA9IG5ldyBjc21WZWN0b3I8VD4oKTtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fcHRyID0gdGhpcy5nZXQob2Zmc2V0KTtcbiAgICAgICAgICAgIG5ld1ZlY3Rvci5fc2l6ZSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xuICAgICAgICAgICAgbmV3VmVjdG9yLl9jYXBhY2l0eSA9IHRoaXMuZ2V0KG9mZnNldCkubGVuZ3RoO1xuXG4gICAgICAgICAgICByZXR1cm4gbmV3VmVjdG9yO1xuICAgICAgICB9XG5cbiAgICAgICAgX3B0cjogVFtdOyAgICAvLyDjgrPjg7Pjg4bjg4rjga7lhYjpoK3jgqLjg4njg6zjgrlcbiAgICAgICAgX3NpemU6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu6KaB57Sg5pWwXG4gICAgICAgIF9jYXBhY2l0eTogbnVtYmVyOyAvLyDjgrPjg7Pjg4bjg4rjga7jgq3jg6Pjg5Hjgrfjg4bjgqNcblxuICAgICAgICBzdGF0aWMgcmVhZG9ubHkgc19kZWZhdWx0U2l6ZSA9IDEwOyAvLyDjgrPjg7Pjg4bjg4rliJ3mnJ/ljJbjga7jg4fjg5Xjgqnjg6vjg4jjgrXjgqTjgrpcbiAgICB9XG5cbiAgICBleHBvcnQgY2xhc3MgaXRlcmF0b3I8VD5cbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2PzogY3NtVmVjdG9yPFQ+LCBpbmRleD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gKHYgIT0gdW5kZWZpbmVkKSA/IHYgOiBudWxsO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSAoaW5kZXggIT0gdW5kZWZpbmVkKSA/IGluZGV4IDogMDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDku6PlhaVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXQoaXRlOiBpdGVyYXRvcjxUPik6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlLl9pbmRleDtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZS5fdmVjdG9yO1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNKyvmvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVJbmNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgKyt0aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG4gICAgICAgIFxuICAgICAgICAvKipcbiAgICAgICAgICog5YmN572u44GNLS3mvJTnrpdcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwcmVEZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgLS10aGlzLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW+jOe9ruOBjSsr5ryU566X5a2QXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaW5jcmVtZW50KCk6IGl0ZXJhdG9yPFQ+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBpdGVvbGQgPSBuZXcgaXRlcmF0b3I8VD4odGhpcy5fdmVjdG9yLCB0aGlzLl9pbmRleCsrKTtcbiAgICAgICAgICAgIHRoaXMuX3ZlY3RvciA9IGl0ZW9sZC5fdmVjdG9yO1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGVvbGQuX2luZGV4O1xuICAgICAgICAgICAgcmV0dXJuIHRoaXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5b6M572u44GNLS3mvJTnrpflrZBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBkZWNyZW1lbnQoKTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IGl0ZW9sZCA9IG5ldyBpdGVyYXRvcjxUPih0aGlzLl92ZWN0b3IsIHRoaXMuX2luZGV4LS0pOyAgLy8g5Y+k44GE5YCk44KS5L+d5a2YXG4gICAgICAgICAgICB0aGlzLl92ZWN0b3IgPSBpdGVvbGQuX3ZlY3RvcjtcbiAgICAgICAgICAgIHRoaXMuX2luZGV4ID0gaXRlb2xkLl9pbmRleDtcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIHB0clxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHB0cigpOiBUXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl92ZWN0b3IuX3B0clt0aGlzLl9pbmRleF07XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN1YnN0aXR1dGlvbihpdGU6IGl0ZXJhdG9yPFQ+KTogaXRlcmF0b3I8VD5cbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5faW5kZXggPSBpdGUuX2luZGV4O1xuICAgICAgICAgICAgdGhpcy5fdmVjdG9yID0gaXRlLl92ZWN0b3I7XG4gICAgICAgICAgICByZXR1cm4gdGhpcztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiAhPea8lOeul+WtkOOBruOCquODvOODkOODvOODreODvOODiVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIG5vdEVxdWFsKGl0ZTogaXRlcmF0b3I8VD4pOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiAodGhpcy5faW5kZXggIT0gaXRlLl9pbmRleCkgfHwgKHRoaXMuX3ZlY3RvciAhPSBpdGUuX3ZlY3Rvcik7XG4gICAgICAgIH1cblxuICAgICAgICBfaW5kZXg6IG51bWJlcjsgLy8g44Kz44Oz44OG44OK44Gu44Kk44Oz44OH44OD44Kv44K55YCkXG4gICAgICAgIF92ZWN0b3I6IGNzbVZlY3RvcjxUPjsgIC8vIOOCs+ODs+ODhuODilxuICAgIH1cbn0iLCIvKlxuICogQ29weXJpZ2h0KGMpIExpdmUyRCBJbmMuIEFsbCByaWdodHMgcmVzZXJ2ZWQuXG4gKlxuICogVXNlIG9mIHRoaXMgc291cmNlIGNvZGUgaXMgZ292ZXJuZWQgYnkgdGhlIExpdmUyRCBPcGVuIFNvZnR3YXJlIGxpY2Vuc2VcbiAqIHRoYXQgY2FuIGJlIGZvdW5kIGF0IGh0dHA6Ly9saXZlMmQuY29tL2V1bGEvbGl2ZTJkLW9wZW4tc29mdHdhcmUtbGljZW5zZS1hZ3JlZW1lbnRfZW4uaHRtbC5cbiAqL1xuXG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjdWJpc21mcmFtZXdvcmssIExvZ0xldmVsfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XG5pbXBvcnQge0NTTV9MT0dfTEVWRUwsIENTTV9MT0dfTEVWRUxfVkVSQk9TRSwgQ1NNX0xPR19MRVZFTF9ERUJVRywgQ1NNX0xPR19MRVZFTF9JTkZPLCBDU01fTE9HX0xFVkVMX1dBUk5JTkcsIENTTV9MT0dfTEVWRUxfRVJST1J9IGZyb20gXCIuLi9jdWJpc21mcmFtZXdvcmtjb25maWdcIjtcblxuXG5leHBvcnQgY29uc3QgQ3ViaXNtTG9nUHJpbnQgPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+IFxue1xuICAgIExpdmUyREN1YmlzbUZyYW1ld29yay5DdWJpc21EZWJ1Zy5wcmludChsZXZlbCwgXCJbQ1NNXVwiICsgZm10LCBhcmdzKTtcbn1cblxuZXhwb3J0IGNvbnN0IEN1YmlzbUxvZ1ByaW50SW4gPSAobGV2ZWw6IExvZ0xldmVsLCBmbXQ6IHN0cmluZywgYXJnczogYW55W10pID0+XG57XG4gICAgQ3ViaXNtTG9nUHJpbnQobGV2ZWwsIGZtdCArIFwiXFxuXCIsIGFyZ3MpO1xufVxuXG5leHBvcnQgbGV0IENTTV9BU1NFUlQgPSAoZXhwcjogYW55KSA9Plxue1xuICAgIGNvbnNvbGUuYXNzZXJ0KGV4cHIpO1xufTtcblxuXG5leHBvcnQgbGV0IEN1YmlzbUxvZ1ZlcmJvc2UgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT4ge307XG5leHBvcnQgbGV0IEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+IHt9O1xuZXhwb3J0IGxldCBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PiB7fTtcblxuaWYoQ1NNX0xPR19MRVZFTCA8PSBDU01fTE9HX0xFVkVMX1ZFUkJPU0UpXG57XG4gICAgQ3ViaXNtTG9nVmVyYm9zZSA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9WZXJib3NlLCBcIltWXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRGVidWcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRGVidWcsIFwiW0RdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dJbmZvID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0luZm8sIFwiW0ldXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0RFQlVHKVxue1xuICAgIEN1YmlzbUxvZ0RlYnVnID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0RlYnVnLCBcIltEXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nSW5mbyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9JbmZvLCBcIltJXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nV2FybmluZyA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9XYXJuaW5nLCBcIltXXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xuXG4gICAgQ3ViaXNtTG9nRXJyb3IgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfRXJyb3IsIFwiW0VdXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG59XG5lbHNlIGlmKENTTV9MT0dfTEVWRUwgPT0gQ1NNX0xPR19MRVZFTF9JTkZPKVxue1xuICAgIEN1YmlzbUxvZ0luZm8gPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfSW5mbywgXCJbSV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ1dhcm5pbmcgPSAoZm10OiBzdHJpbmcsIC4uLiBhcmdzOiBhbnlbXSkgPT5cbiAgICB7XG4gICAgICAgIEN1YmlzbUxvZ1ByaW50SW4oTG9nTGV2ZWwuTG9nTGV2ZWxfV2FybmluZywgXCJbV11cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcblxuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuZWxzZSBpZihDU01fTE9HX0xFVkVMID09IENTTV9MT0dfTEVWRUxfV0FSTklORylcbntcbiAgICBDdWJpc21Mb2dXYXJuaW5nID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX1dhcm5pbmcsIFwiW1ddXCIgKyBmbXQsIGFyZ3MpO1xuICAgIH07XG5cbiAgICBDdWJpc21Mb2dFcnJvciA9IChmbXQ6IHN0cmluZywgLi4uIGFyZ3M6IGFueVtdKSA9PlxuICAgIHtcbiAgICAgICAgQ3ViaXNtTG9nUHJpbnRJbihMb2dMZXZlbC5Mb2dMZXZlbF9FcnJvciwgXCJbRV1cIiArIGZtdCwgYXJncyk7XG4gICAgfTtcbn1cbmVsc2UgaWYoQ1NNX0xPR19MRVZFTCA9PSBDU01fTE9HX0xFVkVMX0VSUk9SKVxue1xuICAgIEN1YmlzbUxvZ0Vycm9yID0gKGZtdDogc3RyaW5nLCAuLi4gYXJnczogYW55W10pID0+XG4gICAge1xuICAgICAgICBDdWJpc21Mb2dQcmludEluKExvZ0xldmVsLkxvZ0xldmVsX0Vycm9yLCBcIltFXVwiICsgZm10LCBhcmdzKTtcbiAgICB9O1xufVxuXG4vLy0tLS0tLS0tLS0tLSBMSVZFMkQgTkFNRVNQQUNFIC0tLS0tLS0tLS0tLVxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcblxuICAgIC8qKlxuICAgICAqIOODh+ODkOODg+OCsOeUqOOBruODpuODvOODhuOCo+ODquODhuOCo+OCr+ODqeOCueOAglxuICAgICAqIOODreOCsOOBruWHuuWKm+OAgeODkOOCpOODiOOBruODgOODs+ODl+OBquOBqVxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21EZWJ1Z1xuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODreOCsOOCkuWHuuWKm+OBmeOCi+OAguesrOS4gOW8leaVsOOBq+ODreOCsOODrOODmeODq+OCkuioreWumuOBmeOCi+OAglxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBmb3JtYXQg5pu45byP5LuY44GN5paH5a2X5YiXXG4gICAgICAgICAqIEBwYXJhbSBhcmdzIOWPr+WkiemVt+W8leaVsFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBwcmludChsb2dMZXZlbDogTG9nTGV2ZWwsIGZvcm1hdDogc3RyaW5nLCBhcmdzPzogYW55W10pOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIC8vIOOCquODl+OCt+ODp+ODs+OBp+ioreWumuOBleOCjOOBn+ODreOCsOWHuuWKm+ODrOODmeODq+OCkuS4i+WbnuOCi+WgtOWQiOOBr+ODreOCsOOBq+WHuuOBleOBquOBhFxuICAgICAgICAgICAgaWYobG9nTGV2ZWwgPCBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmdldExvZ2dpbmdMZXZlbCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybjtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgY29uc3QgbG9nUHJpbnQ6IExpdmUyREN1YmlzbUNvcmUuY3NtTG9nRnVuY3Rpb24gPSBjdWJpc21mcmFtZXdvcmsuQ3ViaXNtRnJhbWV3b3JrLmNvcmVMb2dGdW5jdGlvbjtcblxuICAgICAgICAgICAgaWYgKCFsb2dQcmludClcbiAgICAgICAgICAgICAgICByZXR1cm47XG5cbiAgICAgICAgICAgIGxldCBidWZmZXI6IHN0cmluZyA9IFxuICAgICAgICAgICAgICAgIGZvcm1hdC5yZXBsYWNlKFxuICAgICAgICAgICAgICAgICAgICAvXFx7KFxcZCspXFx9L2csXG4gICAgICAgICAgICAgICAgICAgIChtLCBrKSA9PlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gYXJnc1trXTtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICk7XG4gICAgICAgICAgICBsb2dQcmludChidWZmZXIpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODh+ODvOOCv+OBi+OCieaMh+WumuOBl+OBn+mVt+OBleOBoOOBkeODgOODs+ODl+WHuuWKm+OBmeOCi+OAglxuICAgICAgICAgKiBDdWJpc21GcmFtZXdvcmsuaW5pdGlhbGl6ZSgp5pmC44Gr44Kq44OX44K344On44Oz44Gn6Kit5a6a44GV44KM44Gf44Ot44Kw5Ye65Yqb44Os44OZ44Or44KS5LiL5Zue44KL5aC05ZCI44Gv44Ot44Kw44Gr5Ye644GV44Gq44GE44CCXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gbG9nTGV2ZWwg44Ot44Kw44Os44OZ44Or44Gu6Kit5a6aXG4gICAgICAgICAqIEBwYXJhbSBkYXRhIOODgOODs+ODl+OBmeOCi+ODh+ODvOOCv1xuICAgICAgICAgKiBAcGFyYW0gbGVuZ3RoIOODgOODs+ODl+OBmeOCi+mVt+OBlVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBkdW1wQnl0ZXMobG9nTGV2ZWw6IExvZ0xldmVsLCBkYXRhOiBVaW50OEFycmF5LCBsZW5ndGg6IG51bWJlcik6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yIChsZXQgaTogbnVtYmVyID0gMDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGlmIChpICUgMTYgPT0gMCAmJiBpID4gMCkgdGhpcy5wcmludChsb2dMZXZlbCwgXCJcXG5cIik7XG4gICAgICAgICAgICAgICAgZWxzZSBpZiAoaSAlIDggPT0gMCAmJiBpID4gMCkgdGhpcy5wcmludChsb2dMZXZlbCwgXCIgIFwiKTtcbiAgICAgICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcInswfSBcIiwgWyhkYXRhW2ldICYgMHhGRildKTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgICAgICB0aGlzLnByaW50KGxvZ0xldmVsLCBcIlxcblwiKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBwcml2YXRlIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHJpdmF0ZSBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcblxuICAgICAgICB9XG4gICAgfVxufVxuXG4vLy0tLS0tLS0tLS0tLSBMSVZFMkQgTkFNRVNQQUNFIC0tLS0tLS0tLS0tLSIsIi8qXG4gKiBDb3B5cmlnaHQoYykgTGl2ZTJEIEluYy4gQWxsIHJpZ2h0cyByZXNlcnZlZC5cbiAqXG4gKiBVc2Ugb2YgdGhpcyBzb3VyY2UgY29kZSBpcyBnb3Zlcm5lZCBieSB0aGUgTGl2ZTJEIE9wZW4gU29mdHdhcmUgbGljZW5zZVxuICogdGhhdCBjYW4gYmUgZm91bmQgYXQgaHR0cDovL2xpdmUyZC5jb20vZXVsYS9saXZlMmQtb3Blbi1zb2Z0d2FyZS1saWNlbnNlLWFncmVlbWVudF9lbi5odG1sLlxuICovXG5cbmltcG9ydCB7TGl2ZTJEQ3ViaXNtRnJhbWV3b3JrIGFzIGNzbXN0cmluZ30gZnJvbSBcIi4uL3R5cGUvY3Ntc3RyaW5nXCI7XG5pbXBvcnQge0xpdmUyREN1YmlzbUZyYW1ld29yayBhcyBjc21tYXB9IGZyb20gXCIuLi90eXBlL2NzbW1hcFwiO1xuaW1wb3J0IHtMaXZlMkRDdWJpc21GcmFtZXdvcmsgYXMgY3NtdmVjdG9yfSBmcm9tIFwiLi4vdHlwZS9jc212ZWN0b3JcIjtcbmltcG9ydCB7Q3ViaXNtTG9nSW5mb30gZnJvbSBcIi4vY3ViaXNtZGVidWdcIjtcbmltcG9ydCB7c3RydG9kfSBmcm9tIFwiLi4vbGl2ZTJkY3ViaXNtZnJhbWV3b3JrXCI7XG5pbXBvcnQgY3NtVmVjdG9yID0gY3NtdmVjdG9yLmNzbVZlY3RvcjtcbmltcG9ydCBjc21WZWN0b3JfaXRlcmF0b3IgPSBjc212ZWN0b3IuaXRlcmF0b3I7XG5pbXBvcnQgY3NtTWFwID0gY3NtbWFwLmNzbU1hcDtcbmltcG9ydCBjc21NYXBfaXRlcmF0b3IgPSBjc21tYXAuaXRlcmF0b3I7XG5pbXBvcnQgY3NtU3RyaW5nID0gY3Ntc3RyaW5nLmNzbVN0cmluZztcblxuZXhwb3J0IG5hbWVzcGFjZSBMaXZlMkRDdWJpc21GcmFtZXdvcmtcbntcbiAgICAvLyBTdGF0aWNJbml0aWFsaXplTm90Rm9yQ2xpZW50Q2FsbCgp44Gn5Yid5pyf5YyW44GZ44KLXG4gICAgY29uc3QgQ1NNX0pTT05fRVJST1JfVFlQRV9NSVNNQVRDSDogc3RyaW5nID0gXCJFcnJvcjogdHlwZSBtaXNtYXRjaFwiO1xuICAgIGNvbnN0IENTTV9KU09OX0VSUk9SX0lOREVYX09GX0JPVU5EUzogc3RyaW5nID0gXCJFcnJvcjogaW5kZXggb3V0IG9mIGJvdW5kc1wiO1xuXG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Ko44Os44Oh44Oz44OI44Gu6KaB57Sg44Gu5Z+65bqV44Kv44Op44K544CCXG4gICAgICovXG4gICAgZXhwb3J0IGFic3RyYWN0IGNsYXNzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoKVxuICAgICAgICB7XG5cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJflnovjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGFic3RyYWN0IGdldFN0cmluZyhkZWZhdWx0VmFsdWU/OiBzdHJpbmcsIGluZGVudD86IHN0cmluZyk6IHN0cmluZztcblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX5Z6L44Gn6L+U44GZKHN0cmluZylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRSYXdTdHJpbmcoZGVmYXVsdFZhbHVlPzogc3RyaW5nLCBpbmRlbnQ/OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZSwgaW5kZW50KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmlbDlgKTlnovjgafov5TjgZkobnVtYmVyKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHRvSW50KGRlZmF1bHRWYWx1ZTogbnVtYmVyID0gMCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZGVmYXVsdFZhbHVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0Jvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44K144Kk44K644KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIDA7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS6YWN5YiX44Gn6L+U44GZKFZhbHVlW10pXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0QXJyYXkoZGVmYXVsdFZhbHVlOiBWYWx1ZVtdID0gbnVsbCk6IFZhbHVlW11cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGRlZmF1bHRWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZkoYXJyYXkpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmVjdG9yKGRlZmF1bHRWYWx1ZT86IGNzbVZlY3RvcjxWYWx1ZT4pOiBjc21WZWN0b3I8VmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS44Oe44OD44OX44Gn6L+U44GZKGNzbU1hcDxjc21TdHJpbmcsIFZhbHVlPilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRNYXAoZGVmYXVsdFZhbHVlPzogY3NtTWFwPHN0cmluZywgVmFsdWU+KTogY3NtTWFwPHN0cmluZywgVmFsdWU+XG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBkZWZhdWx0VmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOa3u+Wtl+a8lOeul+WtkFtzdHJpbmcgfCBjc21TdHJpbmddXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0VmFsdWVCeVN0cmluZyhzOiBzdHJpbmcgfCBjc21TdHJpbmcpOiBWYWx1ZVxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg57jg4Pjg5fjga7jgq3jg7zkuIDopqfjgpLjgrPjg7Pjg4bjg4rjgafov5TjgZlcbiAgICAgICAgICogXG4gICAgICAgICAqIEByZXR1cm4g44Oe44OD44OX44Gu44Kt44O844Gu5LiA6KanXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0S2V5cygpOiBjc21WZWN0b3I8c3RyaW5nPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gVmFsdWUuc19kdW1teUtleXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjgqjjg6njg7zlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNFcnJvcigpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjG51bGzjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM55yf5YG95YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQm9vbCgpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM6YWN5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzQXJyYXkoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7nqK7poZ7jgYzjg57jg4Pjg5flnovjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNNYXAoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVl44CB6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjgavjgqjjg6njg7zlgKTjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoZXJyb3JTdHI6IHN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBKc29uRXJyb3IuZXJyb3JWYWx1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDliJ3mnJ/ljJbnlKjjg6Hjgr3jg4Pjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljSW5pdGlhbGl6ZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBuZXcgSnNvbkJvb2xlYW4odHJ1ZSk7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi5mYWxzZVZhbHVlID0gbmV3IEpzb25Cb29sZWFuKGZhbHNlKTtcblxuICAgICAgICAgICAgSnNvbkVycm9yLmVycm9yVmFsdWUgPSBuZXcgSnNvbkVycm9yKFwiRVJST1JcIiwgdHJ1ZSk7XG4gICAgICAgICAgICB0aGlzLm51bGxWYWx1ZSA9IG5ldyBKc29uTnVsbHZhbHVlKCk7XG5cbiAgICAgICAgICAgIFZhbHVlLnNfZHVtbXlLZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XG4gICAgICAgIH1cbiAgICAgICAgXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg6rjg6rjg7zjgrnnlKjjg6Hjgr3jg4Pjg4lcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgc3RhdGljUmVsZWFzZU5vdEZvckNsaWVudENhbGwoKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBudWxsO1xuXG4gICAgICAgICAgICBKc29uQm9vbGVhbi50cnVlVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBKc29uRXJyb3IuZXJyb3JWYWx1ZSA9IG51bGw7XG4gICAgICAgICAgICBWYWx1ZS5udWxsVmFsdWUgPSBudWxsO1xuICAgICAgICAgICAgVmFsdWUuc19kdW1teUtleXMgPSBudWxsO1xuICAgICAgICB9XG5cbiAgICAgICAgcHJvdGVjdGVkIF9zdHJpbmdCdWZmZXI6IHN0cmluZzsgLy8g5paH5a2X5YiX44OQ44OD44OV44KhXG5cbiAgICAgICAgcHJpdmF0ZSBzdGF0aWMgc19kdW1teUtleXM6IGNzbVZlY3RvcjxzdHJpbmc+OyAvLyDjg4Djg5/jg7zjgq3jg7xcblxuICAgICAgICBwdWJsaWMgc3RhdGljIGVycm9yVmFsdWU6IFZhbHVlOyAgIC8vIOS4gOaZgueahOOBqui/lOOCiuWApOOBqOOBl+OBpui/lOOBmeOCqOODqeODvOOAgiBDdWJpc21GcmFtZXdvcms6OkRpc3Bvc2XjgZnjgovjgb7jgafjga9kZWxldGXjgZfjgarjgYRcbiAgICAgICAgcHVibGljIHN0YXRpYyBudWxsVmFsdWU6IFZhbHVlOyAgICAvLyDkuIDmmYLnmoTjgarov5TjgorlgKTjgajjgZfjgabov5TjgZlOVUxM44CCICAgQ3ViaXNtRnJhbWV3b3JrOjpEaXNwb3Nl44GZ44KL44G+44Gn44GvZGVsZXRl44GX44Gq44GEXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICogQXNjaWnmloflrZfjga7jgb/lr77lv5zjgZfjgZ/mnIDlsI/pmZDjga7ou73ph49KU09O44OR44O844K144CCXG4gICAgICog5LuV5qeY44GvSlNPTuOBruOCteODluOCu+ODg+ODiOOBqOOBquOCi+OAglxuICAgICAqIOioreWumuODleOCoeOCpOODqyhtb2RlbDMuanNvbinjgarjganjga7jg63jg7zjg4nnlKhcbiAgICAgKiBcbiAgICAgKiBb5pyq5a++5b+c6aCF55uuXVxuICAgICAqIOODu+aXpeacrOiqnuOBquOBqeOBrumdnkFTQ0lJ5paH5a2XXG4gICAgICog44O7ZeOBq+OCiOOCi+aMh+aVsOihqOePvlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBDdWJpc21Kc29uXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoYnVmZmVyPzogQXJyYXlCdWZmZXIsIGxlbmd0aD86IG51bWJlcilcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBudWxsO1xuICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50ID0gMDtcbiAgICAgICAgICAgIHRoaXMuX3Jvb3QgPSBudWxsO1xuXG4gICAgICAgICAgICBpZihidWZmZXIgIT0gdW5kZWZpbmVkKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMucGFyc2VCeXRlcyhidWZmZXIsIGxlbmd0aCk7XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OQ44Kk44OI44OH44O844K/44GL44KJ55u05o6l44Ot44O844OJ44GX44Gm44OR44O844K544GZ44KLXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyIOODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gc2l6ZSDjg5Djg4Pjg5XjgqHjgrXjgqTjgrpcbiAgICAgICAgICogQHJldHVybiBDdWJpc21Kc29u44Kv44Op44K544Gu44Kk44Oz44K544K/44Oz44K544CC5aSx5pWX44GX44Gf44KJTlVMTFxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIHN0YXRpYyBjcmVhdGUoYnVmZmVyOiBBcnJheUJ1ZmZlciwgc2l6ZTogbnVtYmVyKVxuICAgICAgICB7XG4gICAgICAgICAgICBsZXQganNvbiA9IG5ldyBDdWJpc21Kc29uKCk7XG4gICAgICAgICAgICBjb25zdCBzdWNjZWVkZWQ6IGJvb2xlYW4gPSBqc29uLnBhcnNlQnl0ZXMoYnVmZmVyLCBzaXplKTtcblxuICAgICAgICAgICAgaWYoIXN1Y2NlZWRlZCkgXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgQ3ViaXNtSnNvbi5kZWxldGUoanNvbik7XG4gICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGpzb247XG4gICAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOCquODluOCuOOCp+OCr+ODiOOBruino+aUvuWHpueQhlxuICAgICAgICAgKiBcbiAgICAgICAgICogQHBhcmFtIGluc3RhbmNlIEN1YmlzbUpzb27jgq/jg6njgrnjga7jgqTjg7Pjgrnjgr/jg7PjgrlcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzdGF0aWMgZGVsZXRlKGluc3RhbmNlOiBDdWJpc21Kc29uKVxuICAgICAgICB7XG4gICAgICAgICAgICBpbnN0YW5jZSA9IG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OR44O844K544GX44GfSlNPTuOBruODq+ODvOODiOimgee0oOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFJvb3QoKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3Q7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogIFVuaWNvZGXjga7jg5DjgqTjg4rjg6rjgpJTdHJpbmfjgavlpInmj5tcbiAgICAgICAgICogXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIg5aSJ5o+b44GZ44KL44OQ44Kk44OK44Oq44OH44O844K/XG4gICAgICAgICAqIEByZXR1cm4g5aSJ5o+b5b6M44Gu5paH5a2X5YiXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXI6IEFycmF5QnVmZmVyKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCB1aW50OEFycmF5OiBVaW50OEFycmF5ID0gbmV3IFVpbnQ4QXJyYXkoYnVmZmVyKTtcbiAgICAgICAgICAgIGxldCBzdHI6IHN0cmluZyA9IFwiXCI7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaTogbnVtYmVyID0gMCwgbGVuOiBudW1iZXIgPSB1aW50OEFycmF5Lmxlbmd0aDsgaSA8IGxlbjsgKytpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHN0ciArPSAoXCIlXCIgKyB0aGlzLnBhZCh1aW50OEFycmF5W2ldLnRvU3RyaW5nKDE2KSkpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICBzdHIgPSBkZWNvZGVVUklDb21wb25lbnQoc3RyKTtcbiAgICAgICAgICAgIHJldHVybiBzdHI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Ko44Oz44Kz44O844OJ44CB44OR44OH44Kj44Oz44KwXG4gICAgICAgICAqL1xuICAgICAgICBwcml2YXRlIHBhZChuOiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIG4ubGVuZ3RoIDwgMlxuICAgICAgICAgICAgICAgID8gXCIwXCIgKyBuXG4gICAgICAgICAgICAgICAgOiBuO1xuICAgICAgICB9O1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBKU09O44Gu44OR44O844K544KS5a6f6KGM44GZ44KLXG4gICAgICAgICAqIEBwYXJhbSBidWZmZXIgICAg44OR44O844K55a++6LGh44Gu44OH44O844K/44OQ44Kk44OIXG4gICAgICAgICAqIEBwYXJhbSBzaXplICAgICAg44OH44O844K/44OQ44Kk44OI44Gu44K144Kk44K6XG4gICAgICAgICAqIHJldHVybiB0cnVlIDog5oiQ5YqfXG4gICAgICAgICAqIHJldHVybiBmYWxzZTog5aSx5pWXXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcGFyc2VCeXRlcyhidWZmZXI6IEFycmF5QnVmZmVyLCBzaXplOiBudW1iZXIpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBlbmRQb3M6IG51bWJlcltdID0gbmV3IEFycmF5KDEpOyAvLyDlj4LnhafmuKHjgZfjgavjgZnjgovjgZ/jgoHphY3liJdcbiAgICAgICAgICAgIGxldCBkZWNvZGVCdWZmZXI6IHN0cmluZyA9IHRoaXMuYXJyYXlCdWZmZXJUb1N0cmluZyhidWZmZXIpO1xuICAgICAgICAgICAgdGhpcy5fcm9vdCA9IHRoaXMucGFyc2VWYWx1ZShkZWNvZGVCdWZmZXIsIHNpemUsIDAsIGVuZFBvcyk7XG5cbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCBzdHJidWY6IHN0cmluZyA9ICdcXDAnO1xuICAgICAgICAgICAgICAgIHN0cmJ1ZiA9IFwiSnNvbiBwYXJzZSBlcnJvciA6IEBsaW5lIFwiICsgKHRoaXMuX2xpbmVDb3VudCArIDEpICsgXCJcXG5cIjtcbiAgICAgICAgICAgICAgICB0aGlzLl9yb290ID0gbmV3IEpzb25TdHJpbmcoc3RyYnVmKTtcblxuICAgICAgICAgICAgICAgIEN1YmlzbUxvZ0luZm8oXCJ7MH1cIiwgdGhpcy5fcm9vdC5nZXRSYXdTdHJpbmcoKSk7XG4gICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgZWxzZSBpZih0aGlzLl9yb290ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fcm9vdCA9IG5ldyBKc29uRXJyb3IobmV3IGNzbVN0cmluZyh0aGlzLl9lcnJvciksIGZhbHNlKTsgLy8gcm9vdOOBr+ino+aUvuOBleOCjOOCi+OBruOBp+OCqOODqeODvOOCquODluOCuOOCp+OCr+ODiOOCkuWIpemAlOS9nOaIkOOBmeOCi1xuICAgICAgICAgICAgICAgIHJldHVybiBmYWxzZTtcbiAgICAgICAgICAgIH1cbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOODkeODvOOCueaZguOBruOCqOODqeODvOWApOOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFBhcnNlRXJyb3IoKTogc3RyaW5nIFxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fZXJyb3I7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44Or44O844OI6KaB57Sg44Gu5qyh44Gu6KaB57Sg44GM44OV44Kh44Kk44Or44Gu57WC56uv44Gg44Gj44Gf44KJdHJ1ZeOCkui/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNoZWNrRW5kT2ZGaWxlKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3Jvb3QuZ2V0QXJyYXkoKVsxXS5lcXVhbHMoXCJFT0ZcIik7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSlNPTuOCqOODrOODoeODs+ODiOOBi+OCiVZhbHVlKGZsb2F0LFN0cmluZyxWYWx1ZSosQXJyYXksbnVsbCx0cnVlLGZhbHNlKeOCkuODkeODvOOCueOBmeOCi1xuICAgICAgICAgKiDjgqjjg6zjg6Hjg7Pjg4jjga7mm7jlvI/jgavlv5zjgZjjgablhoXpg6jjgadQYXJzZVN0cmluZygpLCBQYXJzZU9iamVjdCgpLCBQYXJzZUFycmF5KCnjgpLlkbzjgbZcbiAgICAgICAgICpcbiAgICAgICAgICogQHBhcmFtICAgYnVmZmVyICAgICAgSlNPTuOCqOODrOODoeODs+ODiOOBruODkOODg+ODleOCoVxuICAgICAgICAgKiBAcGFyYW0gICBsZW5ndGggICAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtICAgYmVnaW4gICAgICAg44OR44O844K544KS6ZaL5aeL44GZ44KL5L2N572uXG4gICAgICAgICAqIEBwYXJhbSAgIG91dEVuZFBvcyAgIOODkeODvOOCuee1guS6huaZguOBruS9jee9rlxuICAgICAgICAgKiBAcmV0dXJuICAgICAg44OR44O844K544GL44KJ5Y+W5b6X44GX44GfVmFsdWXjgqrjg5bjgrjjgqfjgq/jg4hcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVZhbHVlKGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSlcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIFxuICAgICAgICAgICAgbGV0IG86IFZhbHVlID0gbnVsbDtcbiAgICAgICAgICAgIGxldCBpOiBudW1iZXIgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBmOiBudW1iZXI7XG5cbiAgICAgICAgICAgIGZvciAoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IGM6IHN0cmluZyA9IGJ1ZmZlcltpXTtcbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnLSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnLic6XG4gICAgICAgICAgICAgICAgY2FzZSAnMCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnMSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnMic6XG4gICAgICAgICAgICAgICAgY2FzZSAnMyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNSc6XG4gICAgICAgICAgICAgICAgY2FzZSAnNic6XG4gICAgICAgICAgICAgICAgY2FzZSAnNyc6XG4gICAgICAgICAgICAgICAgY2FzZSAnOCc6XG4gICAgICAgICAgICAgICAgY2FzZSAnOSc6XG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGxldCBhZnRlclN0cmluZzogc3RyaW5nW10gPSBuZXcgQXJyYXkoMSk7IC8vIOWPgueFp+a4oeOBl+OBq+OBmeOCi+OBn+OCgVxuICAgICAgICAgICAgICAgICAgICAgICAgZiA9IHN0cnRvZChidWZmZXIuc2xpY2UoaSksIGFmdGVyU3RyaW5nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGJ1ZmZlci5pbmRleE9mKGFmdGVyU3RyaW5nWzBdKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSnNvbkZsb2F0KGYpO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBuZXcgSnNvblN0cmluZyh0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgb3V0RW5kUG9zKSk7IC8vIFxcXCLjga7mrKHjga7mloflrZfjgYvjgolcbiAgICAgICAgICAgICAgICBjYXNlICdbJzpcbiAgICAgICAgICAgICAgICAgICAgbyA9IHRoaXMucGFyc2VBcnJheShidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ3snOlxuICAgICAgICAgICAgICAgICAgICBvID0gdGhpcy5wYXJzZU9iamVjdChidWZmZXIsIGxlbmd0aCwgaSArIDEsIG91dEVuZFBvcyk7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBvO1xuICAgICAgICAgICAgICAgIGNhc2UgJ24nOiAvLyBudWxs5Lul5aSW44Gr44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyAzIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gbmV3IEpzb25OdWxsdmFsdWUoKTsgICAgLy8g6Kej5pS+44Gn44GN44KL44KI44GG44Gr44GZ44KLXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBudWxsXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAndCc6IC8vIHRydWXku6XlpJbjgavjgarjgYRcbiAgICAgICAgICAgICAgICAgICAgaWYoaSArIDMgPCBsZW5ndGgpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIG8gPSBKc29uQm9vbGVhbi50cnVlVmFsdWU7XG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgNDtcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSB0cnVlXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAnZic6IC8vIGZhbHNl5Lul5aSW44Gr44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIGlmKGkgKyA0IDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBvID0gSnNvbkJvb2xlYW4uZmFsc2VWYWx1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIG91dEVuZFBvc1swXSA9IGkgKyA1O1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgJywnIHBvc2l0aW9uXCI7XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG87XG4gICAgICAgICAgICAgICAgY2FzZSAnLCc6IC8vIEFycmF5IHNlcGFyYXRvclxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnLCcgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgY2FzZSAnXSc6IC8vIOS4jeato+OBqu+9neOBoOOBjOOCueOCreODg+ODl+OBmeOCi+OAgumFjeWIl+OBruacgOW+jOOBq+S4jeimgeOBqiAsIOOBjOOBguOCi+OBqOaAneOCj+OCjOOCi1xuICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpOyAgLy8g5ZCM44GY5paH5a2X44KS5YaN5Yem55CGXG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IFxuICAgICAgICAgICAgICAgICAgICB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICBjYXNlICcgJzpcbiAgICAgICAgICAgICAgICBjYXNlICdcXHQnOlxuICAgICAgICAgICAgICAgIGNhc2UgJ1xccic6XG4gICAgICAgICAgICAgICAgZGVmYXVsdDogLy8g44K544Kt44OD44OXXG4gICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHZhbHVlXCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKiAgICAgIFxuICAgICAgICAgKiBAcGFyYW0gICBzdHJpbmcgIC0+ICDjg5Hjg7zjgrnlr77osaHjga7mloflrZfliJdcbiAgICAgICAgICogQHBhcmFtICAgbGVuZ3RoICAtPiAg44OR44O844K544GZ44KL6ZW344GVXG4gICAgICAgICAqIEBwYXJhbSAgIGJlZ2luICAgLT4gIOODkeODvOOCueOCkumWi+Wni+OBmeOCi+S9jee9rlxuICAgICAgICAgKiBAcGFyYW0gIG91dEVuZFBvcyAgIC0+ICDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiAgICAgIOODkeODvOOCueOBl+OBn+aWh0blrZfliJfopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHByb3RlY3RlZCBwYXJzZVN0cmluZyhzdHJpbmc6IHN0cmluZywgbGVuZ3RoOiBudW1iZXIsIGJlZ2luOiBudW1iZXIsIG91dEVuZFBvczogbnVtYmVyW10pOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcblxuICAgICAgICAgICAgbGV0IGkgPSBiZWdpbjtcbiAgICAgICAgICAgIGxldCBjOiBzdHJpbmcsIGMyOiBzdHJpbmc7XG4gICAgICAgICAgICBsZXQgcmV0OiBjc21TdHJpbmcgPSBuZXcgY3NtU3RyaW5nKFwiXCIpO1xuICAgICAgICAgICAgbGV0IGJ1ZlN0YXJ0OiBudW1iZXIgPSBiZWdpbjsgLy8gc2J1ZuOBq+eZu+mMsuOBleOCjOOBpuOBhOOBquOBhOaWh+Wtl+OBrumWi+Wni+S9jee9rlxuXG4gICAgICAgICAgICBmb3IgKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGMgPSBzdHJpbmdbaV07XG5cbiAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgY2FzZSAnXFxcIic644CALy8g57WC56uv44Gu4oCd44CB44Ko44K544Kx44O844OX5paH5a2X44Gv5Yil44Gr5Yem55CG44GV44KM44KL44Gu44Gn44GT44GT44Gr5p2l44Gq44GEXG4gICAgICAgICAgICAgICAgICAgIHsgXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTsgIC8vIOKAneOBruasoeOBruaWh+Wtl1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmFwcGVuZChzdHJpbmcuc2xpY2UoYnVmU3RhcnQpLCAoaSAtIGJ1ZlN0YXJ0KSk7IC8vIOWJjeOBruaWh+Wtl+OBvuOBp+OCkueZu+mMsuOBmeOCi1xuICAgICAgICAgICAgICAgICAgICAgICAgcmV0dXJuIHJldC5zO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgY2FzZSAnLy8nOiAgLy8g44Ko44K544Kx44O844OX44Gu5aC05ZCIXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKzsgLy8g77yS5paH5a2X44KS44K744OD44OI44Gn5omx44GGXG4gICAgXG4gICAgICAgICAgICAgICAgICAgICAgICBpZihpIC0gMSA+IGJ1ZlN0YXJ0KVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5hcHBlbmQoc3RyaW5nLnNsaWNlKGJ1ZlN0YXJ0KSwgKGkgLSBidWZTdGFydCkpOyAvLyDliY3jga7mloflrZfjgb7jgafjgpLnmbvpjLLjgZnjgotcbiAgICAgICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAgICAgICAgIGJ1ZlN0YXJ0ID0gaSArIDE7IC8vIOOCqOOCueOCseODvOODl++8iO+8kuaWh+Wtlynjga7mrKHjga7mloflrZfjgYvjgolcbiAgICBcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmIChpIDwgbGVuZ3RoKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGMyID0gc3RyaW5nW2ldO1xuICAgIFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHN3aXRjaChjMilcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcXCc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcXFwnKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcXCInKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnLyc6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJy8nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAnYic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xcYicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICdmJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFxmJyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ24nOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXQuZXhwYW5zaW9uKDEsICdcXG4nKTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgY2FzZSAncic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldC5leHBhbnNpb24oMSwgJ1xccicpO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBjYXNlICd0JzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgcmV0LmV4cGFuc2lvbigxLCAnXFx0Jyk7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ3UnOlxuICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwicGFyc2Ugc3RyaW5nL3VuaWNvcmQgZXNjYXBlIG5vdCBzdXBwb3J0ZWRcIjtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgICAgICAgICAgZWxzZVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJwYXJzZSBzdHJpbmcvZXNjYXBlIGVycm9yXCI7XG4gICAgICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhaztcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcInBhcnNlIHN0cmluZy9pbGxlZ2FsIGVuZFwiO1xuICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogSlNPTuOBruOCquODluOCuOOCp+OCr+ODiOOCqOODrOODoeODs+ODiOOCkuODkeODvOOCueOBl+OBplZhbHVl44Kq44OW44K444Kn44Kv44OI44KS6L+U44GZXG4gICAgICAgICAqIFxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtIGJlZ2luICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlT2JqZWN0KGJ1ZmZlcjogc3RyaW5nLCBsZW5ndGg6IG51bWJlciwgYmVnaW46IG51bWJlciwgb3V0RW5kUG9zOiBudW1iZXJbXSk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKSByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXQ6IEpzb25NYXAgPSBuZXcgSnNvbk1hcCgpO1xuXG4gICAgICAgICAgICAvLyBLZXk6IFZhbHVlXG4gICAgICAgICAgICBsZXQga2V5OiBzdHJpbmcgPSBcIlwiO1xuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xuICAgICAgICAgICAgbGV0IGM6IHN0cmluZyA9IFwiXCI7XG4gICAgICAgICAgICBsZXQgbG9jYWxSZXRFbmRQb3MyOiBudW1iZXJbXSA9IEFycmF5KDEpO1xuICAgICAgICAgICAgbGV0IG9rOiBib29sZWFuID0gZmFsc2U7XG5cbiAgICAgICAgICAgIC8vICwg44GM57aa44GP6ZmQ44KK44Or44O844OXXG4gICAgICAgICAgICBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgRk9SX0xPT1A6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxcIic6XG4gICAgICAgICAgICAgICAgICAgICAgICBrZXkgPSB0aGlzLnBhcnNlU3RyaW5nKGJ1ZmZlciwgbGVuZ3RoLCBpICsgMSwgbG9jYWxSZXRFbmRQb3MyKTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgICAgICAgICBpID0gbG9jYWxSZXRFbmRQb3MyWzBdO1xuICAgICAgICAgICAgICAgICAgICAgICAgb2sgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1A7IC8vLS0gbG9vcOOBi+OCieWHuuOCi1xuICAgICAgICAgICAgICAgICAgICBjYXNlICd9JzogLy8g6ZaJ44GY44Kr44OD44KzXG4gICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgIHJldHVybiByZXQ7IC8vIOepulxuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJpbGxlZ2FsICc6JyBwb3NpdGlvblwiO1xuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6IFxuICAgICAgICAgICAgICAgICAgICAgICAgdGhpcy5fbGluZUNvdW50Kys7XG4gICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhazsgIC8vIOOCueOCreODg+ODl+OBmeOCi+aWh+Wtl1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGlmKCFvaylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHRoaXMuX2Vycm9yID0gXCJrZXkgbm90IGZvdW5kXCI7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBudWxsO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIG9rID0gZmFsc2U7XG5cbiAgICAgICAgICAgICAgICAvLyA6IOOCkuODgeOCp+ODg+OCr1xuICAgICAgICAgICAgICAgIEZPUl9MT09QMjogZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgYyA9IGJ1ZmZlcltpXTtcblxuICAgICAgICAgICAgICAgICAgICBzd2l0Y2goYylcbiAgICAgICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjYXNlICc6JzpcbiAgICAgICAgICAgICAgICAgICAgICAgIG9rID0gdHJ1ZTtcbiAgICAgICAgICAgICAgICAgICAgICAgIGkrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrIEZPUl9MT09QMjtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnfSc6XG4gICAgICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiaWxsZWdhbCAnfScgcG9zaXRpb25cIjtcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrO1xuICAgICAgICAgICAgICAgICAgICBjYXNlICdcXG4nOiB0aGlzLl9saW5lQ291bnQrKztcbiAgICAgICAgICAgICAgICAgICAgICAgIC8vIGNhc2UgJyAnOiBjYXNlICdcXHQnIDogY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICAgICAgZGVmYXVsdDpcbiAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAgLy8g44K544Kt44OD44OX44GZ44KL5paH5a2XXG4gICAgICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICBpZighb2spXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICB0aGlzLl9lcnJvciA9IFwiJzonIG5vdCBmb3VuZFwiO1xuICAgICAgICAgICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgICAgICB9XG5cbiAgICAgICAgICAgICAgICAvLyDlgKTjgpLjg4Hjgqfjg4Pjgq9cbiAgICAgICAgICAgICAgICBsZXQgdmFsdWU6IFZhbHVlID0gdGhpcy5wYXJzZVZhbHVlKGJ1ZmZlciwgbGVuZ3RoLCBpLCBsb2NhbFJldEVuZFBvczIpO1xuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfSBcblxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZFBvczJbMF07XG5cbiAgICAgICAgICAgICAgICAvLyByZXQucHV0KGtleSwgdmFsdWUpO1xuICAgICAgICAgICAgICAgIHJldC5wdXQoa2V5LCB2YWx1ZSk7XG5cbiAgICAgICAgICAgICAgICBGT1JfTE9PUDM6IGZvcig7IGkgPCBsZW5ndGg7IGkrKylcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIGMgPSBidWZmZXJbaV07XG5cbiAgICAgICAgICAgICAgICAgICAgc3dpdGNoKGMpXG4gICAgICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnLCc6XG4gICAgICAgICAgICAgICAgICAgICAgICBicmVhayBGT1JfTE9PUDM7XG4gICAgICAgICAgICAgICAgICAgIGNhc2UgJ30nOlxuICAgICAgICAgICAgICAgICAgICAgICAgb3V0RW5kUG9zWzBdID0gaSArIDE7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDmraPluLjntYLkuoZcbiAgICAgICAgICAgICAgICAgICAgY2FzZSAnXFxuJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIHRoaXMuX2xpbmVDb3VudCsrO1xuICAgICAgICAgICAgICAgICAgICBkZWZhdWx0OlxuICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWs7ICAvLyDjgrnjgq3jg4Pjg5dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBlcnNlT2JqZWN0XCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDmrKHjga7jgIxcIuOAjeOBvuOBp+OBruaWh+Wtl+WIl+OCkuODkeODvOOCueOBmeOCi+OAglxuICAgICAgICAgKiBAcGFyYW0gYnVmZmVyICAgIEpTT07jgqjjg6zjg6Hjg7Pjg4jjga7jg5Djg4Pjg5XjgqFcbiAgICAgICAgICogQHBhcmFtIGxlbmd0aCAgICDjg5Hjg7zjgrnjgZnjgovplbfjgZVcbiAgICAgICAgICogQHBhcmFtIGJlZ2luICAgICDjg5Hjg7zjgrnjgpLplovlp4vjgZnjgovkvY3nva5cbiAgICAgICAgICogQHBhcmFtIG91dEVuZFBvcyDjg5Hjg7zjgrnntYLkuobmmYLjga7kvY3nva5cbiAgICAgICAgICogQHJldHVybiDjg5Hjg7zjgrnjgYvjgonlj5blvpfjgZfjgZ9WYWx1ZeOCquODluOCuOOCp+OCr+ODiFxuICAgICAgICAgKi9cbiAgICAgICAgcHJvdGVjdGVkIHBhcnNlQXJyYXkoYnVmZmVyOiBzdHJpbmcsIGxlbmd0aDogbnVtYmVyLCBiZWdpbjogbnVtYmVyLCBvdXRFbmRQb3M6IG51bWJlcltdKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYodGhpcy5fZXJyb3IpICByZXR1cm4gbnVsbDtcbiAgICAgICAgICAgIGxldCByZXQ6SnNvbkFycmF5ID0gbmV3IEpzb25BcnJheSgpO1xuXG4gICAgICAgICAgICAvLyBrZXkgOiB2YWx1ZVxuICAgICAgICAgICAgbGV0IGk6IG51bWJlciA9IGJlZ2luO1xuICAgICAgICAgICAgbGV0IGM6IHN0cmluZztcbiAgICAgICAgICAgIGxldCBsb2NhbFJldEVuZHBvczI6IG51bWJlcltdID0gbmV3IEFycmF5KDEpO1xuXG4gICAgICAgICAgICAvLyAsIOOBjOe2muOBj+mZkOOCiuODq+ODvOODl1xuICAgICAgICAgICAgZm9yKDsgaSA8IGxlbmd0aDsgaSsrKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIC8vIDog44KS44OB44Kn44OD44KvXG4gICAgICAgICAgICAgICAgbGV0IHZhbHVlOiBWYWx1ZSA9IHRoaXMucGFyc2VWYWx1ZShidWZmZXIsIGxlbmd0aCwgaSwgbG9jYWxSZXRFbmRwb3MyKTtcblxuICAgICAgICAgICAgICAgIGlmKHRoaXMuX2Vycm9yKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIG51bGw7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIGkgPSBsb2NhbFJldEVuZHBvczJbMF07XG5cbiAgICAgICAgICAgICAgICBpZih2YWx1ZSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldC5hZGQodmFsdWUpO1xuICAgICAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgICAgIC8vIEZPUl9MT09QMzpcbiAgICAgICAgICAgICAgICAvLyBib29sZWFuIGJyZWFrZmxhZyA9IGZhbHNlO1xuICAgICAgICAgICAgICAgIEZPUl9MT09QOiBmb3IoOyBpIDwgbGVuZ3RoOyBpKyspXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjID0gYnVmZmVyW2ldO1xuXG4gICAgICAgICAgICAgICAgICAgIHN3aXRjaChjKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICcsJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICAvLyBicmVha2ZsYWcgPSB0cnVlO1xuICAgICAgICAgICAgICAgICAgICAgICAgICAgIC8vIGJyZWFrOyAvLyDmrKHjga5LRVksIFZBbFVF44G4XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgYnJlYWsgRk9SX0xPT1A7XG4gICAgICAgICAgICAgICAgICAgICAgICBjYXNlICddJzpcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICBvdXRFbmRQb3NbMF0gPSBpICsgMTtcbiAgICAgICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gcmV0OyAvLyDntYLkuoZcbiAgICAgICAgICAgICAgICAgICAgICAgIGNhc2UgJ1xcbic6XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgKyt0aGlzLl9saW5lQ291bnQ7XG4gICAgICAgICAgICAgICAgICAgICAgICAgICAgLy9jYXNlICcgJzogY2FzZSAnXFx0JzogY2FzZSAnXFxyJzpcbiAgICAgICAgICAgICAgICAgICAgICAgIGRlZmF1bHQ6IFxuICAgICAgICAgICAgICAgICAgICAgICAgICAgIGJyZWFrOyAvLyDjgrnjgq3jg4Pjg5dcbiAgICAgICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0ID0gdm9pZCAwO1xuICAgICAgICAgICAgdGhpcy5fZXJyb3IgPSBcImlsbGVnYWwgZW5kIG9mIHBhcnNlT2JqZWN0XCI7XG4gICAgICAgICAgICByZXR1cm4gbnVsbDtcbiAgICAgICAgfVxuXG4gICAgICAgIF9lcnJvcjogc3RyaW5nOyAgICAgLy8g44OR44O844K55pmC44Gu44Ko44Op44O8XG4gICAgICAgIF9saW5lQ291bnQ6IG51bWJlcjsgLy8g44Ko44Op44O85aCx5ZGK44Gr55So44GE44KL6KGM5pWw44Kr44Km44Oz44OIXG4gICAgICAgIF9yb290OiBWYWx1ZTsgICAgICAgLy8g44OR44O844K544GV44KM44Gf44Or44O844OI6KaB57SgXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkmZsb2F05YCk44Go44GX44Gm5omx44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25GbG9hdCBleHRlbmRzIFZhbHVlXG4gICAge1xuICAgICAgICAvKipcbiAgICAgICAgICog44Kz44Oz44K544OI44Op44Kv44K/XG4gICAgICAgICAqL1xuICAgICAgICBjb25zdHJ1Y3Rvcih2OiBudW1iZXIpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG5cbiAgICAgICAgICAgIHRoaXMuX3ZhbHVlID0gdjtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOaVsOWApOWei+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Zsb2F0KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIGxldCBzdHJidWY6IHN0cmluZyA9ICdcXDAnO1xuICAgICAgICAgICAgdGhpcy5fdmFsdWUgPSBwYXJzZUZsb2F0KHN0cmJ1Zik7XG4gICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgPSBzdHJidWY7XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5pWw5YCk5Z6L44Gn6L+U44GZKG51bWJlcilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0ludChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDApOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHBhcnNlSW50KHRoaXMuX3ZhbHVlLnRvU3RyaW5nKCkpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaVsOWApOWei+OBp+i/lOOBmShudW1iZXIpXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgdG9GbG9hdChkZWZhdWx0VmFsdWU6IG51bWJlciA9IDAuMCk6IG51bWJlclxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fdmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ251bWJlcicgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgLy8gaW50XG4gICAgICAgICAgICAgICAgaWYgKE1hdGgucm91bmQodmFsdWUpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgICAgICAvLyBmbG9hdFxuICAgICAgICAgICAgICAgIGVsc2VcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiB2YWx1ZSA9PSB0aGlzLl92YWx1ZTtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cblxuICAgICAgICBwcml2YXRlIF92YWx1ZTogbnVtYmVyOyAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuecn+WBveWApOOBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uQm9vbGVhbiBleHRlbmRzIFZhbHVlXG4gICAge1xuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOecn+WBveWApOOBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0Jvb2woKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLnnJ/lgb3lgKTjgafov5TjgZkoYm9vbGVhbilcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyB0b0Jvb2xlYW4oZGVmYXVsdFZhbHVlOiBib29sZWFuID0gZmFsc2UpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9ib29sVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHRoaXMuX2Jvb2xWYWx1ZVxuICAgICAgICAgICAgICAgICAgICA/IFwidHJ1ZVwiXG4gICAgICAgICAgICAgICAgICAgIDogXCJmYWxzZVwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOOBruWApOOBqOetieOBl+OBkeOCjOOBsHRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGNzbVN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IHN0cmluZyk6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IG51bWJlcik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGJvb2xlYW4pOiBib29sZWFuO1xuICAgICAgICBwdWJsaWMgZXF1YWxzKHZhbHVlOiBhbnkpOmJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgaWYgKCdib29sZWFuJyA9PT0gdHlwZW9mKHZhbHVlKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gdmFsdWUgPT0gdGhpcy5fYm9vbFZhbHVlO1xuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GM6Z2Z55qE44Gq44KJdHJ1ZSwg6Z2Z55qE44Gq44KJ6Kej5pS+44GX44Gq44GEXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNTdGF0aWMoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3Rvcih2OiBib29sZWFuKVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICB0aGlzLl9ib29sVmFsdWUgPSB2O1xuICAgICAgICB9XG5cbiAgICAgICAgc3RhdGljIHRydWVWYWx1ZTogSnNvbkJvb2xlYW47ICAvLyB0cnVlXG4gICAgICAgIHN0YXRpYyBmYWxzZVZhbHVlOiBKc29uQm9vbGVhbjsgLy8gZmFsc2VcblxuICAgICAgICBwcml2YXRlIF9ib29sVmFsdWU6IGJvb2xlYW47IC8vIEpTT07opoHntKDjga7lgKRcbiAgICB9XG4gICAgXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuaWh+Wtl+WIl+OBqOOBl+OBpuaJseOBhlxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uU3RyaW5nIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDlvJXmlbDku5jjgY3jgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcihzOiBzdHJpbmcpO1xuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogY3NtU3RyaW5nKVxuICAgICAgICBwdWJsaWMgY29uc3RydWN0b3IoczogYW55KVxuICAgICAgICB7XG4gICAgICAgICAgICBzdXBlcigpO1xuXG4gICAgICAgICAgICBpZignc3RyaW5nJyA9PT0gdHlwZW9mKHMpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHM7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcy5zO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM5paH5a2X5YiX44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzU3RyaW5nKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5byV5pWw44Gu5YCk44Go562J44GX44GR44KM44GwdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogY3NtU3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogc3RyaW5nKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogbnVtYmVyKTogYm9vbGVhbjtcbiAgICAgICAgcHVibGljIGVxdWFscyh2YWx1ZTogYm9vbGVhbik6IGJvb2xlYW47XG4gICAgICAgIHB1YmxpYyBlcXVhbHModmFsdWU6IGFueSk6Ym9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICBpZiAoJ3N0cmluZycgPT09IHR5cGVvZih2YWx1ZSkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIHRoaXMuX3N0cmluZ0J1ZmZlciA9PSB2YWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgaWYgKHZhbHVlIGluc3RhbmNlb2YgY3NtU3RyaW5nKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIHJldHVybiAodGhpcy5fc3RyaW5nQnVmZmVyID09IHZhbHVlLnMpO1xuICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICByZXR1cm4gZmFsc2U7XG4gICAgICAgIH1cbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiBKU09O44OR44O844K55pmC44Gu44Ko44Op44O857WQ5p6c44CC5paH5a2X5YiX5Z6L44Gu44KI44GG44Gr44G144KL44G+44GGXG4gICAgICovXG4gICAgZXhwb3J0IGNsYXNzIEpzb25FcnJvciBleHRlbmRzIEpzb25TdHJpbmdcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBruWApOOBjOmdmeeahOOBquOCiXRydWXjgIHpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9pc1N0YXRpYztcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgqjjg6njg7zmg4XloLHjgpLjgrvjg4Pjg4jjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBzZXRFcnJvck5vdEZvckNsaWVudENhbGwoczogc3RyaW5nKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gcztcbiAgICAgICAgICAgIHJldHVybiB0aGlzO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOW8leaVsOS7mOOBjeOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKHM6IGNzbVN0cmluZ3xzdHJpbmcsIGlzU3RhdGljOiBib29sZWFuKVxuICAgICAgICB7XG4gICAgICAgICAgICBpZihcInN0cmluZ1wiID09PSB0eXBlb2YocykpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBlbHNlXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgc3VwZXIocyk7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICB0aGlzLl9pc1N0YXRpYyA9IGlzU3RhdGljO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu56iu6aGe44GM44Ko44Op44O85YCk44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzRXJyb3IoKTogYm9vbGVhblxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdHJ1ZTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgcHJvdGVjdGVkIF9pc1N0YXRpYzogYm9vbGVhbjsgLy8g6Z2Z55qE44GqVmFsdWXjgYvjganjgYbjgYtcbiAgICB9XG5cbiAgICAvKipcbiAgICAgKiDjg5Hjg7zjgrnjgZfjgZ9KU09O44Gu6KaB57Sg44KSTlVMTOWApOOBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uTnVsbHZhbHVlIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjE5VTEzlgKTjgarjgol0cnVlXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgaXNOdWxsKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44KS5paH5a2X5YiX44Gn6L+U44GZKGNzbVN0cmluZ+WeiylcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRTdHJpbmcoZGVmYXVsdFZhbHVlOiBzdHJpbmcsIGluZGVudDogc3RyaW5nKTogc3RyaW5nXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0aGlzLl9zdHJpbmdCdWZmZXI7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogVmFsdWXjga7lgKTjgYzpnZnnmoTjgarjgol0cnVlLCDpnZnnmoTjgarjgonop6PmlL7jgZfjgarjgYRcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc1N0YXRpYygpOiBib29sZWFuXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiB0cnVlO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gXCJOdWxsVmFsdWVcIjtcbiAgICAgICAgfVxuXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkumFjeWIl+OBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uQXJyYXkgZXh0ZW5kcyBWYWx1ZVxuICAgIHtcbiAgICAgICAgLyoqXG4gICAgICAgICAqIOOCs+ODs+OCueODiOODqeOCr+OCv1xuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGNvbnN0cnVjdG9yKClcbiAgICAgICAge1xuICAgICAgICAgICAgc3VwZXIoKTtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5ID0gbmV3IGNzbVZlY3RvcjxWYWx1ZT4oKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjg4fjgrnjg4jjg6njgq/jgr/nm7jlvZPjga7lh6bnkIZcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyByZWxlYXNlKCk6IHZvaWRcbiAgICAgICAge1xuICAgICAgICAgICAgZm9yKGxldCBpdGU6IGNzbVZlY3Rvcl9pdGVyYXRvcjxWYWx1ZT4gPSB0aGlzLl9hcnJheS5iZWdpbigpOyBpdGUubm90RXF1YWwodGhpcy5fYXJyYXkuZW5kKCkpOyBpdGUucHJlSW5jcmVtZW50KCkpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpO1xuICAgICAgICAgICAgICAgIFxuICAgICAgICAgICAgICAgIGlmKHYgJiYgIXYuaXNTdGF0aWMoKSlcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHYgPSB2b2lkIDA7XG4gICAgICAgICAgICAgICAgICAgIHYgPSBudWxsO1xuICAgICAgICAgICAgICAgIH1cbiAgICAgICAgICAgIH1cbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBWYWx1ZeOBrueorumhnuOBjOmFjeWIl+OBquOCiXRydWVcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBpc0FycmF5KCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgaWYoaW5kZXggPCAwIHx8IHRoaXMuX2FycmF5LmdldFNpemUoKSA8PSBpbmRleClcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUuZXJyb3JWYWx1ZS5zZXRFcnJvck5vdEZvckNsaWVudENhbGwoQ1NNX0pTT05fRVJST1JfSU5ERVhfT0ZfQk9VTkRTKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gdGhpcy5fYXJyYXkuYXQoaW5kZXgpO1xuXG4gICAgICAgICAgICBpZih2ID09IG51bGwpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgcmV0dXJuIFZhbHVlLm51bGxWYWx1ZTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgcmV0dXJuIHY7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5lcnJvclZhbHVlLnNldEVycm9yTm90Rm9yQ2xpZW50Q2FsbChDU01fSlNPTl9FUlJPUl9UWVBFX01JU01BVENIKTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiDopoHntKDjgpLmloflrZfliJfjgafov5TjgZkoY3NtU3RyaW5n5Z6LKVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFN0cmluZyhkZWZhdWx0VmFsdWU6IHN0cmluZywgaW5kZW50OiBzdHJpbmcpOiBzdHJpbmdcbiAgICAgICAge1xuICAgICAgICAgICAgbGV0IHN0cmluZ0J1ZmZlcjogc3RyaW5nID0gaW5kZW50ICsgXCJbXFxuXCI7XG5cbiAgICAgICAgICAgIGZvcihsZXQgaXRlOiBjc21WZWN0b3JfaXRlcmF0b3I8VmFsdWU+ID0gdGhpcy5fYXJyYXkuYmVnaW4oKTsgaXRlLm5vdEVxdWFsKHRoaXMuX2FycmF5LmVuZCgpKTsgaXRlLmluY3JlbWVudCgpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKTtcbiAgICAgICAgICAgICAgICB0aGlzLl9zdHJpbmdCdWZmZXIgKz0gaW5kZW50ICsgXCJcIiArIHYuZ2V0U3RyaW5nKGluZGVudCArIFwiIFwiKSArIFwiXFxuXCI7XG4gICAgICAgICAgICB9XG4gICAgICAgICAgICBcbiAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciA9IHN0cmluZ0J1ZmZlciArIGluZGVudCArIFwiXVxcblwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOmFjeWIl+imgee0oOOCkui/veWKoOOBmeOCi1xuICAgICAgICAgKiBAcGFyYW0gdiDov73liqDjgZnjgovopoHntKBcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBhZGQodjogVmFsdWUpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIHRoaXMuX2FycmF5LnB1c2hCYWNrKHYpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuOCs+ODs+ODhuODiuOBp+i/lOOBmShjc21WZWN0b3I8VmFsdWU+KVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZlY3RvcihkZWZhdWx0VmFsdWU6IGNzbVZlY3RvcjxWYWx1ZT4gPSBudWxsKTogY3NtVmVjdG9yPFZhbHVlPlxuICAgICAgICB7XG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fYXJyYXk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog6KaB57Sg44Gu5pWw44KS6L+U44GZXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2FycmF5LmdldFNpemUoKTtcbiAgICAgICAgfVxuXG4gICAgICAgIHByaXZhdGUgX2FycmF5OiBjc21WZWN0b3I8VmFsdWU+OyAvLyBKU09O6KaB57Sg44Gu5YCkXG4gICAgfVxuXG4gICAgLyoqXG4gICAgICog44OR44O844K544GX44GfSlNPTuOBruimgee0oOOCkuODnuODg+ODl+OBqOOBl+OBpuaMgeOBpFxuICAgICAqL1xuICAgIGV4cG9ydCBjbGFzcyBKc29uTWFwIGV4dGVuZHMgVmFsdWVcbiAgICB7XG4gICAgICAgIC8qKlxuICAgICAgICAgKiDjgrPjg7Pjgrnjg4jjg6njgq/jgr9cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBjb25zdHJ1Y3RvcigpXG4gICAgICAgIHtcbiAgICAgICAgICAgIHN1cGVyKCk7XG4gICAgICAgICAgICB0aGlzLl9tYXAgPSBuZXcgY3NtTWFwPHN0cmluZywgVmFsdWU+KCk7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog44OH44K544OI44Op44Kv44K/55u45b2T44Gu5Yem55CGXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgcmVsZWFzZSgpOiB2b2lkXG4gICAgICAgIHtcbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XG5cbiAgICAgICAgICAgIHdoaWxlKGl0ZS5ub3RFcXVhbCh0aGlzLl9tYXAuZW5kKCkpKVxuICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgIGxldCB2OiBWYWx1ZSA9IGl0ZS5wdHIoKS5zZWNvbmQ7XG4gICAgICAgICAgICAgICAgXG4gICAgICAgICAgICAgICAgaWYodiAmJiAhdi5pc1N0YXRpYygpKVxuICAgICAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICAgICAgdiA9IHZvaWQgMDtcbiAgICAgICAgICAgICAgICAgICAgdiA9IG51bGw7XG4gICAgICAgICAgICAgICAgfVxuXG4gICAgICAgICAgICAgICAgaXRlLnByZUluY3JlbWVudCgpO1xuICAgICAgICAgICAgfVxuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIFZhbHVl44Gu5YCk44GMTWFw5Z6L44Gq44KJdHJ1ZVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGlzTWFwKCk6IGJvb2xlYW5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRydWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW3N0cmluZyB8IGNzbVN0cmluZ11cbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRWYWx1ZUJ5U3RyaW5nKHM6IHN0cmluZyB8IGNzbVN0cmluZyk6IFZhbHVlXG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmKHMgaW5zdGFuY2VvZiBjc21TdHJpbmcpXG4gICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgbGV0IHJldDogVmFsdWUgPSB0aGlzLl9tYXAuZ2V0VmFsdWUocy5zKTtcbiAgICAgICAgICAgICAgICBpZihyZXQgPT0gbnVsbClcbiAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgICAgIHJldHVybiByZXQ7XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIGZvcihsZXQgaXRlcjogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7IGl0ZXIubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKTsgaXRlci5wcmVJbmNyZW1lbnQoKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBpZihpdGVyLnB0cigpLmZpcnN0ID09IHMpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBpZihpdGVyLnB0cigpLnNlY29uZCA9PSBudWxsKVxuICAgICAgICAgICAgICAgICAgICB7XG4gICAgICAgICAgICAgICAgICAgICAgICByZXR1cm4gVmFsdWUubnVsbFZhbHVlO1xuICAgICAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICAgICAgICAgIHJldHVybiBpdGVyLnB0cigpLnNlY29uZDtcbiAgICAgICAgICAgICAgICB9XG4gICAgICAgICAgICB9XG5cbiAgICAgICAgICAgIHJldHVybiBWYWx1ZS5udWxsVmFsdWU7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICog5re75a2X5ryU566X5a2QW2luZGV4XVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldFZhbHVlQnlJbmRleChpbmRleDogbnVtYmVyKTogVmFsdWVcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIFZhbHVlLmVycm9yVmFsdWUuc2V0RXJyb3JOb3RGb3JDbGllbnRDYWxsKENTTV9KU09OX0VSUk9SX1RZUEVfTUlTTUFUQ0gpO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkuaWh+Wtl+WIl+OBp+i/lOOBmShjc21TdHJpbmflnospXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U3RyaW5nKGRlZmF1bHRWYWx1ZTogc3RyaW5nLCBpbmRlbnQ6IHN0cmluZylcbiAgICAgICAge1xuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyID0gaW5kZW50ICsgXCJ7XFxuXCI7XG5cbiAgICAgICAgICAgIGNvbnN0IGl0ZTogY3NtTWFwX2l0ZXJhdG9yPHN0cmluZywgVmFsdWU+ID0gdGhpcy5fbWFwLmJlZ2luKCk7XG4gICAgICAgICAgICB3aGlsZShpdGUubm90RXF1YWwodGhpcy5fbWFwLmVuZCgpKSlcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICBjb25zdCBrZXkgPSBpdGUucHRyKCkuZmlyc3Q7XG4gICAgICAgICAgICAgICAgbGV0IHY6IFZhbHVlID0gaXRlLnB0cigpLnNlY29uZDtcblxuICAgICAgICAgICAgICAgIHRoaXMuX3N0cmluZ0J1ZmZlciArPSBpbmRlbnQgKyBcIiBcIiArIGtleSArIFwiIDogXCIgKyB2LmdldFN0cmluZyhpbmRlbnQgKyBcIiAgIFwiKSArIFwiIFxcblwiO1xuICAgICAgICAgICAgICAgIGl0ZS5wcmVJbmNyZW1lbnQoKTtcbiAgICAgICAgICAgIH1cblxuICAgICAgICAgICAgdGhpcy5fc3RyaW5nQnVmZmVyICs9IGluZGVudCArIFwifVxcblwiO1xuXG4gICAgICAgICAgICByZXR1cm4gdGhpcy5fc3RyaW5nQnVmZmVyO1xuICAgICAgICB9XG5cbiAgICAgICAgLyoqXG4gICAgICAgICAqIOimgee0oOOCkk1hcOWei+OBp+i/lOOBmVxuICAgICAgICAgKi9cbiAgICAgICAgcHVibGljIGdldE1hcChkZWZhdWx0VmFsdWU/OiBjc21NYXA8c3RyaW5nLCBWYWx1ZT4pOiBjc21NYXA8c3RyaW5nLCBWYWx1ZT5cbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX21hcDtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXDjgavopoHntKDjgpLov73liqDjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBwdXQoa2V5OiBzdHJpbmcsIHY6IFZhbHVlKTogdm9pZFxuICAgICAgICB7XG4gICAgICAgICAgICB0aGlzLl9tYXAuc2V0VmFsdWUoa2V5LCB2KTtcbiAgICAgICAgfVxuXG4gICAgICAgIC8qKlxuICAgICAgICAgKiBNYXDjgYvjgonjgq3jg7zjga7jg6rjgrnjg4jjgpLlj5blvpfjgZnjgotcbiAgICAgICAgICovXG4gICAgICAgIHB1YmxpYyBnZXRLZXlzKCk6IGNzbVZlY3RvcjxzdHJpbmc+XG4gICAgICAgIHtcbiAgICAgICAgICAgIGlmICghdGhpcy5fa2V5cylcbiAgICAgICAgICAgIHtcbiAgICAgICAgICAgICAgICB0aGlzLl9rZXlzID0gbmV3IGNzbVZlY3RvcjxzdHJpbmc+KCk7XG5cbiAgICAgICAgICAgICAgICBjb25zdCBpdGU6IGNzbU1hcF9pdGVyYXRvcjxzdHJpbmcsIFZhbHVlPiA9IHRoaXMuX21hcC5iZWdpbigpO1xuXG4gICAgICAgICAgICAgICAgd2hpbGUoaXRlLm5vdEVxdWFsKHRoaXMuX21hcC5lbmQoKSkpXG4gICAgICAgICAgICAgICAge1xuICAgICAgICAgICAgICAgICAgICBjb25zdCBrZXk6IHN0cmluZyA9IGl0ZS5wdHIoKS5maXJzdDtcbiAgICAgICAgICAgICAgICAgICAgdGhpcy5fa2V5cy5wdXNoQmFjayhrZXkpO1xuICAgICAgICAgICAgICAgICAgICBpdGUucHJlSW5jcmVtZW50KCk7XG4gICAgICAgICAgICAgICAgfVxuICAgICAgICAgICAgfVxuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXM7XG4gICAgICAgIH1cblxuICAgICAgICAvKipcbiAgICAgICAgICogTWFw44Gu6KaB57Sg5pWw44KS5Y+W5b6X44GZ44KLXG4gICAgICAgICAqL1xuICAgICAgICBwdWJsaWMgZ2V0U2l6ZSgpOiBudW1iZXJcbiAgICAgICAge1xuICAgICAgICAgICAgcmV0dXJuIHRoaXMuX2tleXMuZ2V0U2l6ZSgpO1xuICAgICAgICB9XG4gICAgICAgIFxuXG4gICAgICAgIHByaXZhdGUgX21hcDogY3NtTWFwPHN0cmluZywgVmFsdWU+OyAgIC8vIEpTT07opoHntKDjga7lgKRcbiAgICAgICAgcHJpdmF0ZSBfa2V5czogY3NtVmVjdG9yPHN0cmluZz47ICAgICAgICAgICAgICAgLy8gSlNPTuimgee0oOOBruWApFxuICAgIH1cbn0iXSwic291cmNlUm9vdCI6IiJ9