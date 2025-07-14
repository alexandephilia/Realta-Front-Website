
sessionStorage.setItem('App_path_root', App_path_root);
var enableBrancGrup = false;
var Lmoengage = false;
var ObjDataTable;
var ses_ctoken;
var ses_companyid;
var ses_emailid;
var ses_fullname;
var ses_lang;
var table;
var selectedDataOrder = [];

var loginPageUrl = "Login/Index";
//var dataToken_serviceBaseUrl="eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJjb2lkIjoiR0NISiIsInVzZXJpZCI6IlJoYXBzb2R5Iiwicm9sZSI6IjNyZFBhcnR5IiwibmJmIjoxNjU3NzkyOTU2LCJleHAiOjE2NTc4NzkzNTYsImlhdCI6MTY1Nzc5Mjk1NiwiaXNzIjoiaHR0cDovL3Bvc2FwaS5jb20iLCJhdWQiOiJodHRwOi8vcG9zYXBpLmNvbSJ9.w39LIdSbBJugshNv6mxRRvQ8BkA8k5Iu6dio-XeOj9Y";
//var dataClient_id_serviceBaseUrl="0066f6816c4d427fa613e48f3642b48a";

sessionStorage.setItem('R_JwtToken', ses_ctoken);
//sessionStorage.setItem('CSecretKey', CSecretKey);
sessionStorage.setItem('R_CompanyId', ses_companyid);
sessionStorage.setItem('R_UserId', ses_emailid);
sessionStorage.setItem('R_UserName', ses_fullname);
sessionStorage.setItem('R_Lang', ses_lang);
//sessionStorage.setItem('R_CompanyName', ses_co_name);

var maxUploadImgValue = 1000000;

window.$rweb = (function () {
	_callApi = function (pcMethod, pcUrl, poData, peSuccessHandler, peErrorHandler, peBeforeSendHandler, poContext) {
		return $.ajax({
			type: pcMethod,
			url: pcUrl,
			data: JSON.stringify(poData),
			contentType: "application/json; charset=utf-8",
			dataType: "json",
			context: poContext,
			success: peSuccessHandler,
			error: peErrorHandler,
			beforeSend: peBeforeSendHandler
		});
	};

	_callApiProgress = function (pcMethod, pcUrl, poData, peSuccessHandler, peProgress, peErrorHandler, peBeforeSendHandler, poContext) {
		return $.ajax({
			type: pcMethod,
			url: pcUrl,
			data: JSON.stringify(poData),
			contentType: "application/json; charset=utf-8",
			xhrFields: {
				responseType: 'blob'
			},
			dataType: "json",
			context: poContext,
			success: peSuccessHandler,
			progress: peProgress,
			error: peErrorHandler,
			beforeSend: peBeforeSendHandler
		});
	};

	_saveToken = function (token) {
		sessionStorage.setItem('R_JwtToken', token);
	};

	return {};
})();

/**
 * Call Web API with JWT token
 * @param {string} pcMethod 
 * @param {string} pcUrl 
 * @param {*} poData 
 * @param {function} peSuccessHandler
 * @param {function} peErrorHandler
 * @param {*} poContext 
 */
$rweb.callApiWithToken = function (pcMethod, pcUrl, poData, peSuccessHandler, peErrorHandler, poContext) {
	var that = this,
		peUserHandler = peErrorHandler,
		lcToken = sessionStorage.getItem('R_JwtToken'),
		lcLang = sessionStorage.getItem("R_Lang");

	return _callApi(
		pcMethod,
		pcUrl,
		poData,
		peSuccessHandler,
		function (xhr, status, error) {
			switch (xhr.status) {
				case 401:
					that.logout();
					alert("your session has timeout");
					window.location.replace(App_path_root + loginPageUrl);
					break;
				case 419:
					_saveToken(xhr.responseJSON);
					that.callApiWithToken(pcMethod, pcUrl, poData, peSuccessHandler, peErrorHandler, poContext);
					break;
				default:
					var err;
					if (xhr.responseText) {
						err = $.parseJSON(xhr.responseText);

						if (!err.Errors) {
							err = {
								"Errors": [{
									"Code": xhr.status,
									"Message": err.Message
								}]
							};
						}
					} else {
						err = {
							"Errors": [{
								"Code": xhr.status,
								"Message": "Please check your network connection"
							}]
						};
					}

					if (peUserHandler) {
						peUserHandler(err.Errors);
					} else {
						alert(err.Errors);
					}
			}
		},
		function (xhr) {
			xhr.setRequestHeader('Authorization', lcToken);
			xhr.setRequestHeader('Accept-Language', lcLang);
			xhr.setRequestHeader('CompanyId', $rweb.getCompanyId());
			xhr.setRequestHeader('UserId', $rweb.getUserId());
			xhr.setRequestHeader('CSecretKey', sessionStorage.getItem('CSecretKey'));
		},
		poContext
	);
};

/**
 * Call Web API with JWT token
 * @param {string} pcMethod 
 * @param {string} pcUrl 
 * @param {*} poData 
 * @param {function} peSuccessHandler
 * @param {function} peErrorHandler
 * @param {*} poContext 
 */
$rweb.callApiWithTokenProgress = function (pcMethod, pcUrl, poData, peSuccessHandler, peProgress, peErrorHandler, poContext) {
	var that = this,
		peUserHandler = peErrorHandler,
		lcToken = sessionStorage.getItem('R_JwtToken'),
		lcLang = sessionStorage.getItem("R_Lang");

	return _callApiProgress(
		pcMethod,
		pcUrl,
		poData,
		peSuccessHandler,
		peProgress,
		function (xhr, status, error) {
			switch (xhr.status) {
				case 401:
					that.logout();
					alert("your session has timeout");
					window.location.replace(App_path_root + loginPageUrl);
					break;
				case 419:
					_saveToken(xhr.responseJSON);
					that.callApiWithToken(pcMethod, pcUrl, poData, peSuccessHandler, peErrorHandler, poContext);
					break;
				default:
					var err;
					if (xhr.responseText) {
						//err = $.parseJSON(xhr.responseText);
						err = xhr.responseText
						//if(!err.Errors) {
						//    err = {
						//        "Errors": [{
						//            "Code": xhr.status,
						//            "Message": err.Message
						//        }]
						//    };
						//}
					} else {
						err = {
							"Errors": [{
								"Code": xhr.status,
								"Message": "Please check your network connection"
							}]
						};
					}

					if (peUserHandler) {
						peUserHandler(err.Errors);
					} else {
						alert(err.Errors);
					}
			}
		},
		function (xhr) {
			xhr.setRequestHeader('Authorization', lcToken);
			xhr.setRequestHeader('Accept-Language', lcLang);
			xhr.setRequestHeader('CompanyId', $rweb.getCompanyId());
			xhr.setRequestHeader('UserId', $rweb.getUserId());
			xhr.setRequestHeader('CSecretKey', sessionStorage.getItem('CSecretKey'));
		},
		poContext
	);
};

$rweb.callApiWithTokenThrid = function (pcMethod, pcUrl, poData, poToken, peSuccessHandler, peErrorHandler, poContext) {
	var that = this,
		peUserHandler = peErrorHandler,
		lcToken = poToken,
		lcLang = sessionStorage.getItem("R_Lang");

	return _callApi(
		pcMethod,
		pcUrl,
		poData,
		peSuccessHandler,
		function (xhr, status, error) {
			switch (xhr.status) {
				case 401:
					that.logout();
					alert("your session has timeout");
					//window.location.replace(App_path_root+loginPageUrl);
					break;
				case 419:
					_saveToken(xhr.responseJSON);
					that.callApiWithToken(pcMethod, pcUrl, poData, peSuccessHandler, peErrorHandler, poContext);
					break;
				default:
					var err;
					if (xhr.responseText) {
						err = $.parseJSON(xhr.responseText);

						if (!err.Errors) {
							err = {
								"Errors": [{
									"Code": xhr.status,
									"Message": err.Message
								}]
							};
						}
					} else {
						err = {
							"Errors": [{
								"Code": xhr.status,
								"Message": "Please check your network connection"
							}]
						};
					}

					if (peUserHandler) {
						peUserHandler(err.Errors);
					} else {
						alert(err.Errors);
					}
			}
		},
		function (xhr) {
			xhr.setRequestHeader('Authorization', "Bearer " + lcToken);
			xhr.setRequestHeader('Accept-Language', lcLang);
			xhr.setRequestHeader('CLIENT_ID', dataClient_id_serviceBaseUrl);
		},
		poContext
	);
};

/**
 * Call Web API without JWT token. Use this for login and to get first token.
 * @param {string} pcMethod 
 * @param {string} pcUrl 
 * @param {*} poData 
 * @param {function} peSuccessHandler 
 * @param {function} peErrorHandler
 * @param {*} poContext 
 */
$rweb.callApiWithoutToken = function (pcMethod, pcUrl, poData, peSuccessHandler, peErrorHandler, poContext) {
	var that = this,
		peUserHandler = peErrorHandler;

	return _callApi(
		pcMethod,
		pcUrl,
		poData,
		peSuccessHandler,
		function (xhr, status, error) {
			let err = $.parseJSON(xhr.responseText);

			if (!err.Errors) {
				err = {
					"Errors": [{
						"Code": xhr.status,
						"Message": err.Message
					}]
				};
			}

			peUserHandler(err.Errors);
		},
		undefined,
		poContext
	);
};

/**
 * 
 * @param {string} token 
 * @param {string} companyId 
 * @param {string} userId 
 * @param {string} userName
 * @param {string} roleId
 * @param {string} lang
 * @param {string} sponsorUserId 
 */
$rweb.saveLogin = function (token, companyId, userId, userName, roleId, lang, sponsorUserId = "", coname = "") {
	_saveToken(token);
	sessionStorage.setItem('R_CompanyId', companyId);
	sessionStorage.setItem('R_UserId', userId);
	sessionStorage.setItem('R_UserName', userName);
	sessionStorage.setItem("R_RoleId", roleId);
	sessionStorage.setItem('R_Lang', lang);
	sessionStorage.setItem('R_SponsorUserId', sponsorUserId);
	sessionStorage.setItem('R_CompanyName', coname);
	//$rweb.SaveWebActivityLog();
	//window.location.replace("index.html");
};

$rweb.logout = function () {
	var loginMode = (sessionStorage.getItem('R_LoginMode')) ? sessionStorage.getItem('R_LoginMode') : "";
	if (loginMode == "admin") { loginPageUrl = "login.html"; } else
		if (loginMode == "sponsor") { loginPageUrl = "login_sponsor.html"; } else
			if (loginMode == "investor") { loginPageUrl = "login_investor.html"; }
	sessionStorage.clear();
	//window.location.replace(App_path_root+loginPageUrl);
};

$rweb.getUserId = function () {
	lcToken = sessionStorage.getItem('R_JwtToken');
	lcUserId = sessionStorage.getItem('R_UserId');

	if (lcToken === null || lcUserId === null) {
		this.logout();
		//window.location.replace(App_path_root+loginPageUrl);
	} else {
		return lcUserId;
	}
};

$rweb.getCompanyId = function () {
	return sessionStorage.getItem('R_CompanyId');
};
$rweb.getCompanyName = function () {
	return sessionStorage.getItem('R_CompanyName');
};

$rweb.getUserName = function () {
	return sessionStorage.getItem('R_UserName');
};

$rweb.getLang = function () {
	return sessionStorage.getItem('R_Lang');
};

$rweb.getRoleId = function () {
	return sessionStorage.getItem('R_RoleId');
};
$rweb.getSponsorUserId = function () {
	return sessionStorage.getItem('R_SponsorUserId');
};
$rweb.SetErrorSession = function (errType = "e", msg) {
	if (errType == "s") {
		sessionStorage.setItem('R_Notif_Success', msg);
	} else if (errType == "e") {
		sessionStorage.setItem('R_Notif_Error', msg);
	}

};
$rweb.showConsole = function (e, coment = "showConsole") {
	if (debugFlag == true) {
		console.log(coment,e);
	}
};

/**
 * 
 * @param {string} comboSelector 
 * @param {array} data 
 * @param {string} valueField 
 * @param {string} displayField
 */
$rweb.loadComboBox = function (comboSelector, data, valueField, displayField, dataObjectField) {
	stringBuilder = "";

	for (let index = 0; index < data.length; index++) {
		const element = data[index];
		stringBuilder += `<option value='${element[valueField].trim()}' data-object='${JSON.stringify(element[dataObjectField])}'>${element[displayField].trim()}</option>`;
	}

	$(comboSelector).html(stringBuilder);
};

/**
 * 
 * @param {string} comboSelector 
 * @param {array} data 
 * @param {string} valueField 
 * @param {string} displayField
 * @param {object} dataObjectField
 * @param {string} option0
 */
$rweb.loadComboBoxOption = function (comboSelector, data, valueField, displayField, dataObjectField = null, option0 = "") {
	let resSelector = comboSelector.replace("#", "");
	if (option0 == "") {
		stringBuilder = `<option value="">please select</option>`;
	} else {
		stringBuilder = option0;
	}
	for (let index = 0; index < data.length; index++) {
		const element = data[index];
		stringBuilder += `<option id="${resSelector}${element[valueField].trim()}" value='${element[valueField].trim()}' data-object='${JSON.stringify(element[dataObjectField])}'>${element[displayField].trim()}</option>`;
	}
	$(comboSelector).html(stringBuilder);
};

/**
 * 
 * @param {string} comboSelector 
 * @param {array} data 
 * @param {string} valueField 
 * @param {string} displayField
 * @param {string} option0
 */
$rweb.loadComboBoxObject = function (comboSelector, data, valueField, displayField, option0 = "") {
	let resSelector = comboSelector.replace("#", "");
	if (option0 == "") {
		stringBuilder = `<option value=""></option>`;
	} else {
		stringBuilder = option0;
	}
	for (let index = 0; index < data.length; index++) {
		const element = data[index];
		stringBuilder += `<option id="${resSelector}${element[valueField].trim()}" value='${element[valueField].trim()}' data-object='${JSON.stringify(element)}'>${element[displayField].trim()}</option>`;
	}
	$(comboSelector).html(stringBuilder);
};

/**
 * 
 * @param {string} tbodySelector 
 * @param {array} data 
 * @param {function} peTemplate 
 */
$rweb.loadTable = function (tbodySelector, data, peTemplate) {
	$(tbodySelector).empty();

	var stringBuilder = "";
	let resSelector = tbodySelector.replace("#", "");

	if (data.length > 0) {
		for (let index = 0; index < data.length; index++) {
			stringBuilder += `<tr id="${resSelector}${index}">`;
			stringBuilder += peTemplate(data[index]);
			stringBuilder += "</tr>";
		}
	} else {
		stringBuilder = "<tr><td colspan='9' style='text-align: center;'>No Data</td></tr>";
	}

	$(tbodySelector).append(stringBuilder);
};

/**
 * 
 * @param {string} tbodySelector 
 * @param {array} data 
 * @param {function} peTemplate 
 * @param {string} fieldFilter 
 * @param {string} fieldValue 
 */
$rweb.loadTableFilter = function (tbodySelector, data, peTemplate, fieldFilter = "", fieldValue = "") {
	$(tbodySelector).empty();

	var stringBuilder = "";
	//$rweb.showConsole(data,"fieldFilter");
	if (data.length > 0) {
		for (let index = 0; index < data.length; index++) {
			if (fieldFilter == "") {
				stringBuilder += "<tr>";
				stringBuilder += peTemplate(data[index]);
				stringBuilder += "</tr>";
			} else {
				if (data[index][fieldFilter] == fieldValue) {
					stringBuilder += "<tr>";
					stringBuilder += peTemplate(data[index]);
					stringBuilder += "</tr>";
				}
			}
		}
	} else {
		stringBuilder = "<tr><td colspan='9' style='text-align: center;'>No Data</td></tr>";
	}

	$(tbodySelector).append(stringBuilder);
};

    $rweb.GetHeaderDate = function (idTag){
        let listColumnDate=[];
        $(idTag+' thead th').each(function(index, th) {
            if ($(th).text().toLowerCase().includes('date')) {
                listColumnDate.push({
                    targets: index,
                    type: 'date'
                })
            }
        });
        return listColumnDate;
    }

/**
		* 
		* @param {string} idTableSelector 
		* @param {string} tbodySelector 
		* @param {array} data 
		* @param {function} peTemplate 
		*/


/**
 * 
 * @param {string} paginationSelector 
 * @param {*} data 
 * @param {number} currentPage 
 * @param {function} peGetListRecord 
 */
$rweb.loadPagination = function (paginationSelector, data, currentPage, peReload) {
	var iMaxPage = 0;

	if (data.length > 0) {
		iMaxPage = data[0]["IPAGE"];

		$(paginationSelector).twbsPagination('destroy');
		$(paginationSelector).twbsPagination({
			totalPages: iMaxPage,
			startPage: currentPage,
			visiblePages: 6,
			cssStyle: '',
			first: '<span class="fas fa-chevron-left" ></span><span class="fas fa-chevron-left"></span>',
			last: '<span class="fas fa-chevron-right"> </span><span class="fas fa-chevron-right"> </span>',
			prev: '<span class="fas fa-chevron-left"></span>',
			next: '<span class="fas fa-chevron-right"> </span>',
			initiateStartPageClick: false,
			onPageClick: function (event, page) {
				peReload(page);
			}
		}).on('page', function (event, page) {
		});
		$(paginationSelector).show();
	} else {
		$(paginationSelector).hide();
	}
};



/**
 * 
 * @param {string} alertSelector 
 * @param {string} alertType
 * @param {array} errors 
 * @param {string} langCode if errors is null or undefined, get message from resource using langCode
 */
$rweb.alert = function (alertSelector, alertType, errors, langCode) {
	$(alertSelector).empty();

	var stringBuilder =
		`<div class="alert alert-${alertType} alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>`;

	if (errors) {
		var arrayBuilder = [];
		for (let index = 0; index < errors.length; index++) {
			arrayBuilder.push(`${errors[index].Message}`);
			$rweb.showConsole(`[RWeb.Alert] ${errors[index].Code}: ${errors[index].Message}`, "alert-error");
		}
		stringBuilder += arrayBuilder.join("<hr>");
	} else {
		stringBuilder += $rweb.getResourceById(langCode, $rweb.getLang());
		$rweb.showConsole(`[RWeb.Alert] ${langCode}: ${$rweb.getResourceById(langCode, $rweb.getLang())}`, "alert");
	}

	stringBuilder += "</div>";

	$(alertSelector).html(stringBuilder);
};

/**
 * 
 * @param {string} alertSelector 
 * @param {string} content 
 */
$rweb.succesAlert = function (alertSelector, content) {
	$(alertSelector).empty();

	var stringBuilder =
		`<div class="alert alert-success alert-dismissible" role="alert">
    <button type="button" class="close" data-dismiss="alert" aria-label="Close"><span aria-hidden="true">&times;</span></button>
    ${content}
    </div>`;

	$(alertSelector).html(stringBuilder);
};

$rweb.showLoading = function () {
	Swal.fire({
		title: 'Wait ...',
		showCancelButton: false,
		showConfirmButton: false,
		allowEscapeKey: false,
		allowOutsideClick: false,
	});
	Swal.showLoading();

};

$rweb.SwalError = function (title = "", text = "", textOk = "", textCancel = "") {
	if (title == "") {
		title = $rweb.getResourceById("lang_Error");
	}
	if (textOk == "") {
		textOk = $rweb.getResourceById("lang_CloseOk");
	}
	Swal.fire({
		title: `<p class=''><img src='${App_path_root}Scripts/assets/media/icons/failed-icon.png' /></p><h2 class='fw-bolder'>${title}</h2>`,
		text: text,
		icon: "",
		showCancelButton: (textCancel == "") ? false : true,
		confirmButtonText: (textCancel == "") ? "" : textCancel,
		buttonsStyling: !1,
		confirmButtonText: textOk,
		customClass: {
			confirmButton: "btn rounded-pill btn-primary btn-block text-white"
		}
	});

};
$rweb.SwalErrorThen = function (title = "", pageRedirect = "", text = "", textOk = "", textCancel = "") {
	if (title == "") {
		title = $rweb.getResourceById("lang_Error");
	}
	if (textOk == "") {
		textOk = $rweb.getResourceById("lang_CloseOk");
	}
	Swal.fire({
		title: `<p class=''><img src='${App_path_root}Scripts/assets/media/icons/failed-icon.png' /></p><h2 class='fw-bolder'>${title}</h2>`,
		text: text,
		icon: "",
		showCancelButton: (textCancel == "") ? false : true,
		confirmButtonText: (textCancel == "") ? "" : textCancel,
		buttonsStyling: !1,
		confirmButtonText: textOk,
		customClass: {
			confirmButton: "btn rounded-pill btn-primary btn-block text-white"
		}
	}).then(function () {
		if (pageRedirect != "") {
			changePage(pageRedirect, pageRedirect);
		}

	});

};

$rweb.SwalErrorThenVal = function (title = "", text = "", textOk = "", textCancel = "") {
	if (title == "") {
		title = $rweb.getResourceById("lang_Error");
	}
	if (textOk == "") {
		textOk = $rweb.getResourceById("lang_CloseOk");
	}
	Swal.fire({
		title: `<p class=''><img src='${App_path_root}Scripts/assets/media/icons/failed-icon.png' /></p><h2 class='fw-bolder'>${title}</h2>`,
		text: text,
		icon: "",
		showCancelButton: (textCancel == "") ? false : true,
		cancelButtonText: (textCancel == "") ? "" : textCancel,
		buttonsStyling: !1,
		confirmButtonText: textOk,
		customClass: {
			confirmButton: "btn btn-falcon-primary float-end margipPop ",
			cancelButton: 'btn btn-falcon-default ',
		}
	}).then((result) => {

		if (result.value) {
			$("#upload").modal("hide");
			LValUpload = 1;
		} else {

		}

	});

};

/**
* 
* @param {string} title 
* @param {string} text
* @param {string} textOk 
* @param {string} textCancel 
* @param {fuction} onOk
*/
$rweb.SwalWarningThen = function (title = "", text = "", textOk = "", textCancel = "", onOk) {

	if (title == "") {
		title = $rweb.getResourceById("lang_Warning");
	}
	if (textOk == "") {
		textOk = $rweb.getResourceById("lang_CloseOk");
	}
	if (textCancel == "") {
		textCancel = $rweb.getResourceById("lang_Cancel");
	}
	Swal.fire({
		title: `<p class=''><img src='${App_path_root}Scripts/assets/media/icons/failed-icon.png' /></p><h2 class='fw-bolder'>${title}</h2>`,
		text: text,
		icon: "",
		showCancelButton: (textCancel == "") ? false : true,
		confirmButtonText: (textCancel == "") ? "" : textCancel,
		buttonsStyling: !1,
		confirmButtonText: textOk,
		customClass: {
			confirmButton: "btn rounded-pill btn-primary btn-block text-white",
			cancelButton: 'btn rounded-pill btn-falcon-default m-2'
		}
	}).then(function (result) {
		if (result.value) {
			if (onOk) {
				onOk();
			}
		}


	});
};

$rweb.SwalSuccess = function (title = "", text = "", textOk = "", textCancel = "") {
	if (title == "") {
		title = $rweb.getResourceById("lang_Success");
	}
	if (textOk == "") {
		textOk = $rweb.getResourceById("lang_CloseOk");
	}
	Swal.fire({
		title: `<p class=''><img src='${App_path_root}Scripts/assets/media/icons/berhasil-icon.png' /></p><h2 class='fw-bolder'>${title}</h2>`,
		text: text,
		icon: "",
		showCancelButton: (textCancel == "") ? false : true,
		confirmButtonText: (textCancel == "") ? "" : textCancel,
		buttonsStyling: !1,
		confirmButtonText: textOk,
		customClass: {
			confirmButton: "btn rounded-pill btn-primary btn-block text-white"

		}
	});

};

/**
 * 
 * @param {number} n 
 * @param {number} decimalPlaces
 */
$rweb.formatMoney = function (n, decimalPlaces) {
	// var c = decimalPlaces;
	// var d = '.';
	// var t = ',';

	// c = isNaN(c = Math.abs(c)) ? 0 : c,
	// d = d == undefined ? "." : d,
	// t = t == undefined ? "," : t,
	// s = n < 0 ? "-" : "",
	// i = String(parseInt(n = Math.abs(Number(n) || 0).toFixed(c))),
	// j = (j = i.length) > 3 ? j % 3 : 0;

	// return s + (j ? i.substr(0, j) + t : "") + i.substr(j).replace(/(\d{3})(?=\d)/g, "$1" + t) + (c ? d + Math.abs(n - i).toFixed(c).slice(2) : "");
	return parseFloat(Math.round(n * 100) / 100).toLocaleString($rweb.getLang());
};

/**
 * 
 * @param {*} e eventArgs
 */
$rweb.numberOnly = function (e) {
	$(e.target).val($(e.target).val().replace(/[^0-9.]/g, '').replace(/(\..*)\./g, '$1'));
};

/**
 * 
 * @param {*} e eventArgs
 */
$rweb.UpperCaseWord = function (e) {
	e = e.toLowerCase().replace(/\b[a-z]/g, function (letter) {
		return letter.toUpperCase();
	});
	return e;
};

/**
 * 
 * @param {string} lang 
 * @param {string} urlXl 
 */
$rweb.setResource = function (lang, urlXl) {
	var langId = lang;
	var url = `${App_path_root}Scripts/lang/${urlXl}.xlsx`;
	var oReq = new XMLHttpRequest();
	oReq.open("GET", url, true);
	oReq.responseType = "arraybuffer";


	oReq.onload = function (e) {
		var arraybuffer = oReq.response;

		/* convert data to binary string */
		var data = new Uint8Array(arraybuffer);
		var arr = new Array();
		for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
		var bstr = arr.join("");

		/* Call XLSX */
		var workbook = XLSX.read(bstr, { type: "binary" });

		/* DO SOMETHING WITH workbook HERE */
		var first_sheet_name = workbook.SheetNames[0];
		/* Get worksheet */
		var worksheet = workbook.Sheets[first_sheet_name];
		$rweb.showConsole(XLSX.utils.sheet_to_json(worksheet, { raw: true }), "setResource");
		//console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
		dataLang = XLSX.utils.sheet_to_json(worksheet, { raw: true });

		//set label
		for (var label in dataLang) {
			var CSS_Class = dataLang[label].CSS_Class;
			$("." + CSS_Class).html(dataLang[label][langId]);
			$("input." + CSS_Class).attr("placeholder", dataLang[label][langId]);
			$("textarea." + CSS_Class).attr("placeholder", dataLang[label][langId]);
		}
	}

	oReq.send();
};

/**
 * 
 * @param {string} langCode error code
 * @param {string} langId language ID ('en', 'id', dll.)
 */
$rweb.getResourceById = function (langCode, langId = sessionStorage.getItem('R_Lang')) {
	//$rweb.showConsole(langCode,"getResourceById langCode");
	var groubPingCSS = _.indexBy(dataLang, "CSS_Class");
	//$rweb.showConsole(groubPingCSS,"getResourceById");

	return groubPingCSS[langCode] ? groubPingCSS[langCode][langId] : "";
};

/**
 * 
 * @param {string} lang 
 * @param {string} urlXl 
 */
$rweb.setErrorCode = function (lang, urlXl) {
	var langId = lang;
	var url = `${App_path_root}Scripts/lang/${urlXl}.xlsx`;
	var oReq = new XMLHttpRequest();
	oReq.open("GET", url, true);
	oReq.responseType = "arraybuffer";


	oReq.onload = function (e) {
		var arraybuffer = oReq.response;

		/* convert data to binary string */
		var data = new Uint8Array(arraybuffer);
		var arr = new Array();
		for (var i = 0; i != data.length; ++i) arr[i] = String.fromCharCode(data[i]);
		var bstr = arr.join("");

		/* Call XLSX */
		var workbook = XLSX.read(bstr, { type: "binary" });

		/* DO SOMETHING WITH workbook HERE */
		var first_sheet_name = workbook.SheetNames[0];
		/* Get worksheet */
		var worksheet = workbook.Sheets[first_sheet_name];
		$rweb.showConsole(XLSX.utils.sheet_to_json(worksheet, { raw: true }), "setResource");
		//console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
		dataErrorCode = XLSX.utils.sheet_to_json(worksheet, { raw: true });
		for (var label in dataErrorCode) {
			var CSS_Class = dataErrorCode[label].CSS_Class;
			$("." + CSS_Class).html(dataErrorCode[label][langId]);
		}

	}

	oReq.send();
};

/**
		* 
		* @param {string} lang 
		* @param {string} urlXl 
		*/
$rweb.validcolumnHeader = function (e) {
	var reader = new FileReader();
	reader.readAsArrayBuffer(e.target.files[0]);
	reader.onload = function (e) {
		var data = new Uint8Array(reader.result);
		var workbook = XLSX.read(data, { type: 'array' });
		var first_sheet_name = workbook.SheetNames[0];
		/* Get worksheet */
		var worksheet = workbook.Sheets[first_sheet_name];
		$rweb.showConsole(XLSX.utils.sheet_to_json(worksheet, { raw: true }), "setResource");
		//console.log(XLSX.utils.sheet_to_json(worksheet,{raw:true}));
		dataHeaderExcel = XLSX.utils.sheet_to_json(worksheet, { raw: true });
		dataHeaderExcel = dataHeaderExcel[0];
		dataHeaderExcel = _.keys(dataHeaderExcel);
		$rweb.showConsole(dataHeaderExcel, "dataHeaderExcel");
		$rweb.showConsole(listHeaderTableExcel, "listHeaderTableExcel");
		let dataDifference = _.difference(dataHeaderExcel, listHeaderTableExcel);
		$rweb.showConsole(dataDifference, "dataDifference");
		if (dataDifference.length > 0) {
			if (dataDifference.length == 1 && dataDifference[0] == "ERROR_DESCRIPTION") {

			} else {
				$rweb.SwalError("", $rweb.getResourceById("lang_formatColumn"));
				$('#uploadFile').val("");
				$('#btnUpload').prop("disabled", true);
				return;
			}

		}
		$('#btnUpload').prop("disabled", false);
	}
};

$rweb.getErrorCodeById = function (langCode, langId = sessionStorage.getItem('R_Lang')) {
	//$rweb.showConsole(langCode,"getResourceById langCode");
	if (langId == "undefined" || langId == "") {
		langId = "en";
	}
	var groubPingCSS = _.indexBy(dataErrorCode, "CSS_Class");
	//$rweb.showConsole(groubPingCSS,"getResourceById");

	return groubPingCSS[langCode] ? groubPingCSS[langCode][langId] : "";
};

/**
* 
* @param {string} idInputFile 
* @param {int} maxUploadImgValue 
* @param {function} callback 
*/
$rweb.getFileData = function (idInputFile, maxUploadImgValue = 0, callback) {
	var fileInput = document.getElementById(idInputFile);
	if (fileInput.files.length === 0) {
		$rweb.SwalError("", "Please select a file.");
		return false;
	}
	var file = fileInput.files[0];
	var match = ["image/jpeg", "image/png", "image/jpg"];
	if (file.size > maxUploadImgValue) {
		$rweb.SwalError("", "file size maximum is 1Mb");
		return false;
	}
	if (!((file.type == match[0]) || (file.type == match[1]) || (file.type == match[2]))) {
		$rweb.SwalError("tipe file tidak valid");
		return false;
	}

	var fileName = file.name;
	var fileExtension = fileName.split('.').pop(); // Get the file extension
	var fileNameWithoutExtension = fileName.split('.').slice(0, -1).join('.'); // Get the file name without extension
	var fileType = file.type;

	var reader = new FileReader();
	reader.onload = function (e) {
		var base64String = e.target.result.split(',')[1];

		// Create an object with the file data
		var fileData = {
			base64String: base64String,
			fileName: fileName,
			fileType: fileType,
			fileExtension: fileExtension,
			fileNameWithoutExtension: fileNameWithoutExtension
		};

		// Invoke the callback function with the file data
		callback(fileData);
	};
	reader.readAsDataURL(file);
};

// Example usage
//$rweb.getFileData("idInput", 100000,function(fileData) {
//    console.log(fileData); // Access the file data properties here
//});


$rweb.SaveWebActivityLog = function (activityCode = "") {
	var nVer = navigator.appVersion;
	var nAgt = navigator.userAgent;
	var browserName = navigator.appName;
	var fullVersion = '' + parseFloat(navigator.appVersion);
	var majorVersion = parseInt(navigator.appVersion, 10);
	var nameOffset, verOffset, ix;

	// In Opera, the true version is after "Opera" or after "Version"
	if ((verOffset = nAgt.indexOf("Opera")) != -1) {
		browserName = "Opera";
		fullVersion = nAgt.substring(verOffset + 6);
		if ((verOffset = nAgt.indexOf("Version")) != -1)
			fullVersion = nAgt.substring(verOffset + 8);
	}
	// In MSIE, the true version is after "MSIE" in userAgent
	else if ((verOffset = nAgt.indexOf("MSIE")) != -1) {
		browserName = "Microsoft Internet Explorer";
		fullVersion = nAgt.substring(verOffset + 5);
	}
	// In Chrome, the true version is after "Chrome" 
	else if ((verOffset = nAgt.indexOf("Chrome")) != -1) {
		browserName = "Chrome";
		fullVersion = nAgt.substring(verOffset + 7);
	}
	// In Safari, the true version is after "Safari" or after "Version" 
	else if ((verOffset = nAgt.indexOf("Safari")) != -1) {
		browserName = "Safari";
		fullVersion = nAgt.substring(verOffset + 7);
		if ((verOffset = nAgt.indexOf("Version")) != -1)
			fullVersion = nAgt.substring(verOffset + 8);
	}
	// In Firefox, the true version is after "Firefox" 
	else if ((verOffset = nAgt.indexOf("Firefox")) != -1) {
		browserName = "Firefox";
		fullVersion = nAgt.substring(verOffset + 8);
	}
	// In most other browsers, "name/version" is at the end of userAgent 
	else if ((nameOffset = nAgt.lastIndexOf(' ') + 1) <
		(verOffset = nAgt.lastIndexOf('/'))) {
		browserName = nAgt.substring(nameOffset, verOffset);
		fullVersion = nAgt.substring(verOffset + 1);
		if (browserName.toLowerCase() == browserName.toUpperCase()) {
			browserName = navigator.appName;
		}
	}
	// trim the fullVersion string at semicolon/space if present
	if ((ix = fullVersion.indexOf(";")) != -1)
		fullVersion = fullVersion.substring(0, ix);
	if ((ix = fullVersion.indexOf(" ")) != -1)
		fullVersion = fullVersion.substring(0, ix);

	majorVersion = parseInt('' + fullVersion, 10);
	if (isNaN(majorVersion)) {
		fullVersion = '' + parseFloat(navigator.appVersion);
		majorVersion = parseInt(navigator.appVersion, 10);
	}

	$rweb.showConsole('Browser name  = ' + browserName + '<br>'
		+ 'Full version  = ' + fullVersion + '<br>'
		+ 'Major version = ' + majorVersion + '<br>'
		+ 'navigator.appName = ' + navigator.appName + '<br>'
		+ 'navigator.userAgent = ' + navigator.userAgent + '<br>', "GetAllAnswerTypeList");

	var OSName = "Unknown OS";
	if (navigator.appVersion.indexOf("Win") != -1) OSName = "Windows";
	if (navigator.appVersion.indexOf("Mac") != -1) OSName = "MacOS";
	if (navigator.appVersion.indexOf("X11") != -1) OSName = "UNIX";
	if (navigator.appVersion.indexOf("Linux") != -1) OSName = "Linux";
	if (navigator.appVersion.indexOf("Android") != -1) OSName = "Android";
	if (navigator.appVersion.indexOf("like Mac") != -1) OSName = "iOS";

	console.log('Your OS: ' + OSName);

	var CAPPLICATION_TYPE = "";
	var CACTIVITY_CODE = "";
	if (sessionStorage.getItem('R_LoginMode') == "admin") {
		CAPPLICATION_TYPE = "ADMIN";
		CACTIVITY_CODE = "ADM_LOGIN";
	} else if (sessionStorage.getItem('R_LoginMode') == "investor") {
		CAPPLICATION_TYPE = "INVESTOR";
		CACTIVITY_CODE = "INV_LOGIN";
	} else {
		CAPPLICATION_TYPE = "SPONSOR";
		CACTIVITY_CODE = "SPS_LOGIN";
	}

	var paramActivity = {
		"CCO_ID": gcCoId,
		"CPARENT_ID": (CAPPLICATION_TYPE == "ADMIN") ? "" : sessionStorage.getItem('R_UserId'),
		"CLOGIN_ID": (CAPPLICATION_TYPE == "ADMIN") ? sessionStorage.getItem('R_UserId') : sessionStorage.getItem('R_SponsorUserId'),
		"CAPPLICATION_TYPE": CAPPLICATION_TYPE,
		"CACTIVITY_CODE": (activityCode != "") ? activityCode : CACTIVITY_CODE,
		"CBROWSER_NAME": browserName,
		"CBROWSER_VERSION": fullVersion,
		"COS_VERSION": OSName
	}

	$rweb.showConsole(paramActivity, "paramActivity");
	$rweb.callApiWithToken(
		"POST",
		serviceBaseUrl + "WSV00100/SaveWebActivityLog", paramActivity,
		function (data, status, xhr) {
			if (sessionStorage.getItem('R_LoginMode') == "investor") {
				//window.location.replace("investor.html");
			} else {
				//window.location.replace("index.html");
			}


		},
		function (errors) {
			$rweb.alert("#divAlert", "danger", errors);
		}
	);
};


if (sessionStorage.getItem('R_Notif_Success')) {
	if (sessionStorage.getItem('R_Notif_Success') != "") {
		$rweb.SwalSuccess(sessionStorage.getItem('R_Notif_Success'));
		sessionStorage.setItem('R_Notif_Success', "");
	}
}

if (sessionStorage.getItem('R_Notif_Error')) {
	if (sessionStorage.getItem('R_Notif_Error') != "") {
		$rweb.SwalError(sessionStorage.getItem('R_Notif_Success'));
		sessionStorage.setItem('R_Notif_Success', "");
	}
}




function UploadFile(TargetFile, PartId = "") {
	// create array to store the buffer chunks  
	var FileChunk = [];
	// the file object itself that we will work with  
	var file = TargetFile[0];
	// set up other initial vars  
	var MaxFileSizeMB = 1;
	var BufferChunkSize = MaxFileSizeMB * (200 * 200);
	var ReadBuffer_Size = 200;
	var FileStreamPos = 0;
	// set the initial chunk length  
	var EndPos = BufferChunkSize;
	var Size = file.size;



	// add to the FileChunk array until we get to the end of the file  
	while (FileStreamPos < Size) {
		// "slice" the file from the starting position/offset, to  the required length  
		FileChunk.push(file.slice(FileStreamPos, EndPos));
		FileStreamPos = EndPos; // jump by the amount read  
		EndPos = FileStreamPos + BufferChunkSize; // set next chunk length  
	}
	// get total number of "files" we will be sending  
	var TotalParts = FileChunk.length;
	var PartCount = 0;
	//var time = moment().format("YYYYMMDDHHmmss");
	// loop through, pulling the first item from the array each time and sending it  
	Source_File_Name = file.name;
	while (chunk = FileChunk.shift()) {
		PartCount++;
		// file name convention  
		let FileNameOrigin = file.name;
		FileNameOrigin_arr = FileNameOrigin.split(".");
		_fileNamePatern = fileNamePatern;
		//let _fileNamePatern=fileNamePatern+"_"+FileNameOrigin_arr[0];;
		var FilePartName = _fileNamePatern + "_" + FileNameOrigin_arr[0] + ".part_" + PartCount + "." + TotalParts;
		// send the file  
		if (PartId == "") {
			UploadFileChunk(chunk, FilePartName, TotalParts, PartCount, _fileNamePatern, file.name);
		} else if (PartId == PartCount) {
			UploadFileChunk(chunk, FilePartName, TotalParts, PartCount, _fileNamePatern, file.name);
		}

	}
}

function getPreviousDay(date = new Date()) {
	const previous = new Date(date.getTime());
	previous.setDate(date.getDate() - 7);

	return previous;
}

function uploadLoader(PartId, TotPart, Statust, StatustCode = "") {
	if (dataUpload.length == 0) {
		dataUpload.push({ "PartId": PartId, "TotPart": TotPart, "Statust": Statust, "StatustCode": StatustCode });
	} else {
		let check_partId = 0;
		for (let i = 0; i < dataUpload.length; i++) {

			if (dataUpload[i].PartId == PartId) {
				dataUpload[i].Statust = Statust;
				check_partId = 1;
			}
		}
		if (check_partId == 0) {
			dataUpload.push({ "PartId": PartId, "TotPart": TotPart, "Statust": Statust });
		}
	}

	let totSuccess = 0;
	for (let i = 0; i < dataUpload.length; i++) {

		if (dataUpload[i].Statust == "success") {
			totSuccess = totSuccess + 1;
		}
		if (dataUpload.length == dataUpload[0].TotPart) {

			if (dataUpload[i].Statust == "failed") {
				if (dataUpload[i].StatustCode != "5") {
					$("#btnResume").show();
				}
				$('#btnUpload').prop("disabled", false);
				$("#boxNotComplete").show();
				Swal.close();
			}
		}
	}

	let PersenUpload = (totSuccess / dataUpload[0].TotPart) * 100;
	console.log("PersenUpload= " + totSuccess + " / " + dataUpload[0].TotPart);
	console.log("PersenUpload= " + PersenUpload);
	$("#progress-toggle").css("width", PersenUpload + "%");
	if (totSuccess == dataUpload[0].TotPart) {
		$("#btnResume").hide();
		$("#boxLoader").hide();
		$("#boxSuccess").show();
		$("#btnValidate").prop("disabled", false);
	}
}

function split_string(data, i) {
	var myvar = '';
	if (data != null) {
		var mystr = data;
		var myarr = mystr.split(",");
		myvar = myarr[i];
	}
	return myvar;
}

const convertBase64 = (file) => {
	return new Promise((resolve, reject) => {
		const fileReader = new FileReader();
		fileReader.readAsDataURL(file);

		fileReader.onload = () => {
			resolve(fileReader.result);
		};

		fileReader.onerror = (error) => {
			reject(error);
		};
	});
};

const uploadImage = async (event) => {
	const file = event.target.files[0];

	var match = ["image/jpeg", "image/png", "image/jpg", "application/pdf"];
	fileSize1 = file.size;
	CDOC_FILENAME = file.name;
	if (file.size > maxUploadImgValue) {
		//$rweb.SwalError(sessionStorage.getItem('R_Notif_Success'));
		$rweb.SwalError("file size maximum");
		return false;
	}
	if (!((file.type == match[0]) || (file.type == match[1]) || (file.type == match[2]) || (file.type == match[3]))) {
		// showError("File type .jpg / .jpeg / .png ", false);
		//$rweb.alert("#divAlertDetail", "danger", [{"Code":"Validation","Message": "File type .jpg / .jpeg / .png "}]);
		$rweb.SwalError("tipe file tidak valid");
		//imgPreview.prop('src', 'assets/img/thumb_error.jpg');
		return false;
	}

	if (file.type == match[0]) {
		CDOC_EXTENSION = "jpeg";
	}
	if (file.type == match[1]) {
		CDOC_EXTENSION = "png";
	}
	if (file.type == match[2]) {
		CDOC_EXTENSION = "jpg";
	}
	if (file.type == match[3]) {
		CDOC_EXTENSION = "pdf";
	}

	Filebase64 = await convertBase64(file);
	Filebase64 = split_string(Filebase64, 1);
};

const uploadImagePhoto = async (event) => {
	const file = event.target.files[0];

	var match = ["image/jpeg", "image/png", "image/jpg"];
	fileSize1 = file.size;
	CDOC_FILENAME = file.name;
	if (file.size > maxUploadImgValue) {
		//$rweb.SwalError(sessionStorage.getItem('R_Notif_Success'));
		$rweb.SwalError("", "file size maximum is 1Mb");
		return false;
	}
	if (!((file.type == match[0]) || (file.type == match[1]) || (file.type == match[2]))) {
		// showError("File type .jpg / .jpeg / .png ", false);
		//$rweb.alert("#divAlertDetail", "danger", [{"Code":"Validation","Message": "File type .jpg / .jpeg / .png "}]);
		$rweb.SwalError("tipe file tidak valid");
		//imgPreview.prop('src', 'assets/img/thumb_error.jpg');
		return false;
	}

	if (file.type == match[0]) {
		CDOC_EXTENSION = "jpeg";
	}
	if (file.type == match[1]) {
		CDOC_EXTENSION = "png";
	}
	if (file.type == match[2]) {
		CDOC_EXTENSION = "jpg";
	}

	Filebase64 = await convertBase64(file);
	Filebase64 = split_string(Filebase64, 1);
};

function CheckErrResponse(xhr) {
	let err;
	if (xhr.responseText) {
		err = $.parseJSON(xhr.responseText);

		if (!err.Errors) {
			err = {
				"Errors": [{
					"Code": xhr.status,
					"Message": err.Message
				}]
			};
		}
	} else {
		err = {
			"Errors": [{
				"Code": xhr.status,
				"Message": "Please check your network connection"
			}]
		};
	}
	return err;
}

function checkCookie() {
	var cookieEnabled = navigator.cookieEnabled;
	if (!cookieEnabled) {
		$rweb.showConsole("testcookie", "testcookie");
		document.cookie = "testcookie";
		cookieEnabled = document.cookie.indexOf("testcookie") != -1;
	}
	return cookieEnabled || showCookieFail();
}

function showCookieFail() {
	$rweb.SwalError("Please Enable your Cookies to use remember me");
}

function setpaging(perpage, listDtPg) {
	var j = 1; var gr = []; var ch = [];
	for (x = 0; x < listDtPg.length; x++) {
		let k = x + 1;
		listDtPg[x].IPAGE = Math.ceil(listDtPg.length / perpage);
		if (j == perpage) {
			if (x < listDtPg.length) {
				ch.push(listDtPg[x])
			}
			if (ch.length > 0) {
				gr.push(ch);
			}
			ch = [];
			j = 0;
		} else if (k == listDtPg.length) {
			//debugger;
			if (ch.length == perpage) {
				gr.push(ch);
				ch = [];
				if (x < listDtPg.length) {
					ch.push(listDtPg[x])
				}
				if (ch.length > 0) {
					gr.push(ch);
				}
			} else {
				if (x < listDtPg.length) {
					ch.push(listDtPg[x])
				}
				if (ch.length > 0) {
					gr.push(ch);
				}

			}
		} else {
			if (x < listDtPg.length) {
				ch.push(listDtPg[x])
			}

		}
		j++;
	}
	return gr;
}