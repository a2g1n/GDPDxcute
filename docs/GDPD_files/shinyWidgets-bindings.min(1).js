var AirPickerInputBinding=new Shiny.InputBinding;function getFormattedDate(e){var n=e.getFullYear(),t=e.getMonth()+1,i=e.getDate();return t>9?i>9?n+"-"+t+"-"+i:n+"-"+t+"-0"+i:i>9?n+"-0"+t+"-"+i:n+"-0"+t+"-0"+i}$.extend(AirPickerInputBinding,{initialize:function(e){var n=$(e).parent().parent().find('script[data-for="'+e.id+'"]'),t=(n=JSON.parse(n.html())).options;if(n.hasOwnProperty("value")){for(var i=n.value,a=[],r=0;r<i.length;r++)a[r]=new Date(i[r]);n.value=a}t.hasOwnProperty("minDate")&&(t.minDate=new Date(t.minDate)),t.hasOwnProperty("maxDate")&&(t.maxDate=new Date(t.maxDate)),t.hasOwnProperty("startDate")&&(t.startDate=new Date(t.startDate)),n.todayButtonAsDate&&(t.todayButton=new Date(t.todayButton));var o=[];n.hasOwnProperty("disabledDates")&&(o=n.disabledDates);var s=[];n.hasOwnProperty("highlightedDates")&&(s=n.highlightedDates),t.onRenderCell=function(e,n){if("day"==n){var t,i,a=getFormattedDate(e);t=o.filter((function(e){return e==a})).length,i=s.filter((function(e){return e==a})).length;var r=e.getDate(),u="";return i>0&&(r=e.getDate()+'<span class="dp-note"></span>',u="airdatepicker-highlighted"),{html:r,classes:u,disabled:t}}},"close"==n.updateOn?t.onHide=function(n,t){t&&$(e).trigger("change")}:t.onSelect=function(n,t,i){$(e).trigger("change")};var u=$(e).airdatepicker(t).data("airdatepicker");u.selectDate(n.value),n.hasOwnProperty("startView")&&(u.date=new Date(n.startView))},find:function(e){return $(e).find(".sw-air-picker")},getId:function(e){return $(e).attr("id")},getType:function(e){return"false"!==$(e).attr("data-timepicker")?"air.datetime":"air.date"},getValue:function(e){var n=$(e).airdatepicker().data("airdatepicker").selectedDates,t=$(e).attr("data-timepicker");function i(e,n){for(var t=e.toString();t.length<n;)t="0"+t;return t}return void 0!==n&&n.length>0?"false"===t?n.map((function(e){return(n=e)instanceof Date?n.getFullYear()+"-"+i(n.getMonth()+1,2)+"-"+i(n.getDate(),2):null;var n})):n.map((function(e){return e.valueOf()})):null},setValue:function(e,n){n=JSON.parse(n);for(var t=[],i=0;i<n.length;i++)t[i]=new Date(n[i]);$(e).airdatepicker().data("airdatepicker").selectDate(t)},subscribe:function(e,n){$(e).on("change",(function(e){n()}))},unsubscribe:function(e){$(e).off(".AirPickerInputBinding")},receiveMessage:function(e,n){var t=$(e).airdatepicker().data("airdatepicker");if(n.clear&&t.clear(),n.show&&t.show(),n.hide&&t.hide(),n.hasOwnProperty("value")&&this.setValue(e,n.value),n.hasOwnProperty("label")&&$(e).parent().parent().find('label[for="'+n.id+'"]').text(n.label),n.hasOwnProperty("options")){var i=n.options;if(i.hasOwnProperty("minDate")&&(i.minDate=new Date(i.minDate)),i.hasOwnProperty("maxDate")&&(i.maxDate=new Date(i.maxDate)),i.hasOwnProperty("disabledDates")|i.hasOwnProperty("highlightedDates")){var a=[];i.hasOwnProperty("disabledDates")&&(a=i.disabledDates);var r=[];i.hasOwnProperty("highlightedDates")&&(r=i.highlightedDates),i.onRenderCell=function(e,n){if("day"==n){var t,i,o=getFormattedDate(e);t=a.filter((function(e){return e==o})).length,i=r.filter((function(e){return e==o})).length;var s=e.getDate(),u="";return i>0&&(s=e.getDate()+'<span class="dp-note"></span>',u="airdatepicker-highlighted"),{html:s,classes:u,disabled:t}}}}if($(e).airdatepicker().data("airdatepicker").update(i),i.hasOwnProperty("startView"))$(e).airdatepicker().data("airdatepicker").date=new Date(i.startView)}n.hasOwnProperty("placeholder")&&($("#"+n.id)[0].placeholder=n.placeholder),$(e).trigger("change")}}),Shiny.inputBindings.register(AirPickerInputBinding,"shinyWidgets.AirPickerInput"),Date.prototype.yyyymmdd=function(){var e=this.getMonth()+1,n=this.getDate();return[this.getFullYear(),(e>9?"":"0")+e,(n>9?"":"0")+n].join("-")},Shiny.InputBinding.prototype.store=[],Shiny.InputBinding.prototype.updateStore=function(e,n){this.store[e.id]=n};var autonumericInputBinding=new Shiny.InputBinding;$.extend(autonumericInputBinding,{find:function(e){return $(e).find(".autonumeric-input")},initialize:function(e){var n,t,i=$(e).parent().find('script[data-for="'+e.id+'"]');(i=JSON.parse(i.html())).hasOwnProperty("format")?(n=new AutoNumeric(e,i.format),t=i.format.emptyInputBehavior):(n=new AutoNumeric(e,i.options),t=i.options.emptyInputBehavior),""===$(e).val()&"null"===t&&n.set(null),this.updateStore(e,n)},getValue:function(e){return this.getAutonumeric(e).getNumber()},subscribe:function(e,n){$(e).on("change.autonumericInputBinding keyup.autonumericInputBinding input.autonumericInputBinding",(function(e){n()}))},unsubscribe:function(e){$(e).off(".autonumericInputBinding")},receiveMessage:function(e,n){var t=this.getAutonumeric(e);n.hasOwnProperty("value")&&t.set(n.value),n.hasOwnProperty("format")&&t.update(n.format),n.hasOwnProperty("options")&&t.update(n.options),n.hasOwnProperty("label")&&$(e).parent().parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(n.label),$(e).trigger("change")},getState:function(e){var n=this.getAutonumeric(e);return{label:$(e).parent().parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(),value:n.getNumber(),options:n.getSettings()}},getRatePolicy:function(){return{policy:"debounce",delay:500}},getAutonumeric:function(e){return this.store[e.id]}}),Shiny.inputBindings.register(autonumericInputBinding,"shinyWidgets.autonumericInput");var awesomeCheckboxBinding=new Shiny.InputBinding;$.extend(awesomeCheckboxBinding,{find:function(e){return $(e).find(".awesome-checkbox-class")},getId:function(e){return e.id},getValue:function(e){return $('input:checkbox[name="'+Shiny.$escape(e.id)+'"]:checked').val()},setValue:function(e,n){$('input:checkbox[name="'+Shiny.$escape(e.id)+'"][value="'+Shiny.$escape(n)+'"]').prop("checked",!0)},subscribe:function(e,n){$(e).on("change.awesomeCheckboxBinding",(function(e){n()}))},unsubscribe:function(e){$(e).off(".awesomeCheckboxBinding")},getState:function(e){for(var n=$('input:checkbox[name="'+Shiny.$escape(e.id)+'"]'),t=new Array(n.length),i=0;i<t.length;i++)t[i]={value:n[i].value,label:this._getLabel(n[i])};return{label:$(e).parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(),value:this.getValue(e),options:t}},receiveMessage:function(e,n){var t=$(e);n.hasOwnProperty("options")&&(t.find("div.shiny-options-group").remove(),t.find("label.checkbox").remove(),t.append(n.options)),n.hasOwnProperty("value")&&this.setValue(e,n.value),n.hasOwnProperty("label")&&$(e).find('label[for="'+Shiny.$escape(e.id)+Shiny.$escape(n.value)+'"]').text(n.label),$(e).trigger("change")}}),Shiny.inputBindings.register(awesomeCheckboxBinding,"shinyWidgets.awesomeCheckbox");var awesomeRadioBinding=new Shiny.InputBinding;$.extend(awesomeRadioBinding,{find:function(e){return $(e).find(".awesome-bootstrap-radio")},getId:function(e){return e.id},getValue:function(e){return $('input:radio[name="'+Shiny.$escape(e.id)+'"]:checked').val()},setValue:function(e,n){$('input:radio[name="'+Shiny.$escape(e.id)+'"][value="'+Shiny.$escape(n)+'"]').prop("checked",!0)},subscribe:function(e,n){$(e).on("change.awesomeRadioBinding",(function(e){n()}))},unsubscribe:function(e){$(e).off(".awesomeRadioBinding")},getState:function(e){for(var n=$('input:radio[name="'+Shiny.$escape(e.id)+'"]'),t=new Array(n.length),i=0;i<t.length;i++)t[i]={value:n[i].value,label:this._getLabel(n[i])};return{label:$(e).parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(),value:this.getValue(e),options:t}},receiveMessage:function(e,n){var t=$(e);n.hasOwnProperty("options")&&(t.find("div.shiny-options-group").remove(),t.find("label.radio").remove(),t.append(n.options)),n.hasOwnProperty("value")&&this.setValue(e,n.value),n.hasOwnProperty("label")&&$(e).parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(n.label),$(e).trigger("change")}}),Shiny.inputBindings.register(awesomeRadioBinding,"shinyWidgets.awesomeRadio");var pickerInputBinding=new Shiny.InputBinding;$.extend(pickerInputBinding,{find:function(e){return $(e).find(".selectpicker")},getId:function(e){return e.id},getValue:function(e){return $(e).val()},setValue:function(e,n){$(e).val(n),$(e).selectpicker("refresh")},getState:function(e){for(var n=new Array(e.length),t=0;t<e.length;t++)n[t]={value:e[t].value,label:e[t].label};return{label:$(e).parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(),value:this.getValue(e),options:n}},receiveMessage:function(e,n){var t=$(e);if(n.hasOwnProperty("options")){var i=$(e).data("callback");if($(e).selectpicker("destroy"),n.clearOptions){var a=$(e).data("shinyInputBinding");$(e).removeData(),$(e).data("callback",i),$(e).data("shinyInputBinding",a)}$(e).data(n.options),$(e).selectpicker(),$(e).on("changed.bs.select.pickerInput",(function(e){i()}))}n.hasOwnProperty("choices")&&(t.empty().append(n.choices),$(e).selectpicker("refresh")),n.hasOwnProperty("value")&&this.setValue(e,n.value),n.hasOwnProperty("label")&&$(e).parent().parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(n.label),$(e).selectpicker("refresh"),$(e).trigger("change")},subscribe:function(e,n){$(e).data("callback",n),$(e).on("changed.bs.select.pickerInput",(function(e){n()}))},unsubscribe:function(e){$(e).off(".pickerInput")},initialize:function(e){$(e).selectpicker(),$(e).on("shown.bs.select",(function(n){Shiny.setInputValue(e.id+"_open",!0)})),$(e).on("hidden.bs.select",(function(n){Shiny.setInputValue(e.id+"_open",!1)})),$(document).off("focusout.dropdown.data-api")}}),Shiny.inputBindings.register(pickerInputBinding,"shinyWidgets.pickerInput"),$((function(){$(".sw-switchInput").each((function(){$(this).bootstrapSwitch()}))}));var switchInputBinding=new Shiny.InputBinding;$.extend(switchInputBinding,{find:function(e){return $(e).find(".sw-switchInput")},getId:function(e){return e.id},getValue:function(e){return e.checked},setValue:function(e,n){e.checked=n},subscribe:function(e,n){$(e).on("switchChange.bootstrapSwitch",(function(e){n(!1)}))},unsubscribe:function(e){$(e).off(".switchInputBinding")},getState:function(e){return{value:e.checked}},receiveMessage:function(e,n){n.hasOwnProperty("value")&&(e.checked=n.value),n.hasOwnProperty("label")&&$(e).bootstrapSwitch("labelText",n.label),n.hasOwnProperty("offLabel")&&$(e).bootstrapSwitch("offText",n.offLabel),n.hasOwnProperty("onLabel")&&$(e).bootstrapSwitch("onText",n.onLabel),n.hasOwnProperty("onStatus")&&$(e).bootstrapSwitch("onColor",n.onStatus),n.hasOwnProperty("offStatus")&&$(e).bootstrapSwitch("offColor",n.offStatus),n.hasOwnProperty("disabled")&&$(e).bootstrapSwitch("disabled",n.disabled,n.disabled),$(e).trigger("change")},initialize:function(e){$(e).bootstrapSwitch()}}),Shiny.inputBindings.register(switchInputBinding,"shinyWidgets.switchInput"),document.addEventListener("click",(function(e){"[object HTMLButtonElement]"==document.activeElement.toString()&document.activeElement.classList.contains("checkbtn")&&document.activeElement.blur()}));var checkboxGroupButtonsBinding=new Shiny.InputBinding;$.extend(checkboxGroupButtonsBinding,{find:function(e){return $(e).find(".checkbox-group-buttons")},getId:function(e){return e.id},getValue:function(e){for(var n=$('input:checkbox[name="'+Shiny.$escape(e.id)+'"]:checked'),t=new Array(n.length),i=0;i<n.length;i++)t[i]=n[i].value;return t},setValue:function(e,n){if($('input:checkbox[name="'+Shiny.$escape(e.id)+'"]').prop("checked",!1),$('input:checkbox[name="'+Shiny.$escape(e.id)+'"]').parent().removeClass("active"),$('input:checkbox[name="'+Shiny.$escape(e.id)+'"]').parent().blur(),n instanceof Array)for(var t=0;t<n.length;t++)$('input:checkbox[name="'+Shiny.$escape(e.id)+'"][value="'+Shiny.$escape(n[t])+'"]').parent().addClass("active"),$('input:checkbox[name="'+Shiny.$escape(e.id)+'"][value="'+Shiny.$escape(n[t])+'"]').prop("checked",!0);else $('input:checkbox[name="'+Shiny.$escape(e.id)+'"][value="'+Shiny.$escape(n)+'"]').parent().addClass("active"),$('input:checkbox[name="'+Shiny.$escape(e.id)+'"][value="'+Shiny.$escape(n)+'"]').prop("checked",!0)},subscribe:function(e,n){$(e).on("change.checkboxGroupButtonsBinding",(function(e){n()}))},unsubscribe:function(e){$(e).off(".checkboxGroupButtonsBinding")},getState:function(e){for(var n=$('input:checkbox[name="'+Shiny.$escape(e.id)+'"]'),t=new Array(n.length),i=0;i<t.length;i++)t[i]={value:n[i].value};return{value:this.getValue(e),options:t}},receiveMessage:function(e,n){var t=$(e);if(n.hasOwnProperty("options")&&(t.find("div.btn-group-container-sw").empty(),t.find("div.btn-group-container-sw").append(n.options)),n.hasOwnProperty("selected")&&this.setValue(e,n.selected),n.hasOwnProperty("label")&&t.find('label[for="'+Shiny.$escape(e.id)+'"]').text(n.label),n.disabled?(t.find("button").attr("disabled","disabled"),t.find("button").addClass("disabled"),t.find("label").addClass("disabled")):(t.find("button").removeAttr("disabled"),t.find("button").removeClass("disabled"),t.find("label").removeClass("disabled")),n.hasOwnProperty("disabledChoices"))for(var i=0;i<n.disabledChoices.length;i++){var a=$('input:checkbox[name="'+Shiny.$escape(e.id)+'"][value="'+Shiny.$escape(n.disabledChoices[i])+'"]');a.next("label").addClass("disabled"),a.parent().attr("disabled","disabled").addClass("disabled")}$(e).trigger("change")}}),Shiny.inputBindings.register(checkboxGroupButtonsBinding,"shinyWidgets.checkboxGroupButtonsInput");var radioGroupButtonsBinding=new Shiny.InputBinding;function updateLabel(e,n){if(void 0!==e){if(1!==n.length)throw new Error("labelNode must be of length 1");$.isArray(e)&&0===e.length?n.addClass("shiny-label-null"):(n.text(e),n.removeClass("shiny-label-null"))}}function addError(e){$(e).parent().parent().addClass("has-error"),$(e).addClass("is-invalid")}function removeError(e){$(e).parent().parent().removeClass("has-error is-invalid"),$(e).removeClass("is-invalid")}function showHelp(e){$(e).parent().parent().find(".help-block").removeClass("hidden d-none").addClass("show d-block")}function hideHelp(e){$(e).parent().parent().find(".help-block").removeClass("show d-block").addClass("hidden d-none")}$.extend(radioGroupButtonsBinding,{find:function(e){return $(e).find(".radio-group-buttons")},getId:function(e){return e.id},getValue:function(e){var n=$('input:radio[name="'+Shiny.$escape(e.id)+'"]:checked').val();return void 0===n?null:n},setValue:function(e,n){$('input:radio[name="'+Shiny.$escape(e.id)+'"]').parent().removeClass("active"),$('input:radio[name="'+Shiny.$escape(e.id)+'"]').prop("checked",!1),n.length>0&&($('input:radio[name="'+Shiny.$escape(e.id)+'"][value="'+Shiny.$escape(n)+'"]').prop("checked",!0),$('input:radio[name="'+Shiny.$escape(e.id)+'"][value="'+Shiny.$escape(n)+'"]').parent().addClass("active"))},subscribe:function(e,n){$(e).on("change.radioGroupButtonsBinding",(function(e){n()}))},unsubscribe:function(e){$(e).off(".radioGroupButtonsBinding")},getState:function(e){for(var n=$('input:radio[name="'+Shiny.$escape(e.id)+'"]'),t=new Array(n.length),i=0;i<t.length;i++)t[i]={value:n[i].value,label:this._getLabel(n[i])};return{label:$(e).parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(),value:this.getValue(e),options:t}},receiveMessage:function(e,n){var t=$(e);if(n.hasOwnProperty("options")&&(t.find("div.btn-group-container-sw").empty(),t.find("div.btn-group-container-sw").append(n.options)),n.hasOwnProperty("selected")&&this.setValue(e,n.selected),n.hasOwnProperty("label")&&$(e).parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(n.label),n.disabled?(t.find("button").attr("disabled","disabled"),t.find("button").addClass("disabled"),t.find("label").addClass("disabled")):(t.find("button").removeAttr("disabled"),t.find("button").removeClass("disabled"),t.find("label").removeClass("disabled")),n.hasOwnProperty("disabledChoices"))for(var i=0;i<n.disabledChoices.length;i++){var a=$('input:radio[name="'+Shiny.$escape(e.id)+'"][value="'+Shiny.$escape(n.disabledChoices[i])+'"]');a.next("label").addClass("disabled"),a.parent().attr("disabled","disabled").addClass("disabled")}$(e).trigger("change")}}),Shiny.inputBindings.register(radioGroupButtonsBinding,"shinyWidgets.radioGroupButtonsInput");var numericInputIconBinding=new Shiny.InputBinding;function updateLabel(e,n){if(void 0!==e){if(1!==n.length)throw new Error("labelNode must be of length 1");$.isArray(e)&&0===e.length?n.addClass("shiny-label-null"):(n.text(e),n.removeClass("shiny-label-null"))}}$.extend(numericInputIconBinding,{find:function(e){return $(e).find(".numeric-input-icon")},getValue:function(e){var n=$(e).val(),t=$(e).attr("min");t=void 0!==t&&!1!==t?+t:-1/0;var i=$(e).attr("max");return i=void 0!==i&&!1!==i?+i:1/0,/^\s*$/.test(n)?null:(isNaN(n)||(n=+n),n>i?(addError(e),showHelp(e),n=i):n<t?(addError(e),showHelp(e),n=t):(hideHelp(e),removeError(e)),n)},setValue:function(e,n){e.value=n},subscribe:function(e,n){$(e).on("keyup.numericInputIconBinding input.numericInputIconBinding",(function(e){n(!0)})),$(e).on("change.numericInputIconBinding",(function(e){n(!1)}))},unsubscribe:function(e){$(e).off(".numericInputIconBinding")},getType:function(e){return"shiny.number"},receiveMessage:function(e,n){n.hasOwnProperty("value")&&(e.value=n.value),n.hasOwnProperty("min")&&(e.min=n.min),n.hasOwnProperty("max")&&(e.max=n.max),n.hasOwnProperty("step")&&(e.step=n.step),updateLabel(n.label,this._getLabelNode(e)),n.hasOwnProperty("left")&&$(e).prev(".sw-input-icon").replaceWith(n.left),n.hasOwnProperty("right")&&$(e).next(".sw-input-icon").replaceWith(n.right),$(e).trigger("change")},getState:function(e){return{label:this._getLabelNode(e).text(),value:this.getValue(e),min:Number(e.min),max:Number(e.max),step:Number(e.step)}},_getLabelNode:function(e){return $(e).parent().find('label[for="'+Shiny.$escape(e.id)+'"]')}}),Shiny.inputBindings.register(numericInputIconBinding,"shinyWidgets.numericInputIcon");var textInputIconBinding=new Shiny.InputBinding;function tron_skin(){if("tron"==this.$.data("skin")){this.cursorExt=.3;var e,n=this.arc(this.cv);return this.g.lineWidth=this.lineWidth,this.o.displayPrevious&&(e=this.arc(this.v),this.g.beginPath(),this.g.strokeStyle=this.pColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth,e.s,e.e,e.d),this.g.stroke()),this.g.beginPath(),this.g.strokeStyle=this.o.fgColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth,n.s,n.e,n.d),this.g.stroke(),this.g.lineWidth=2,this.g.beginPath(),this.g.strokeStyle=this.o.fgColor,this.g.arc(this.xy,this.xy,this.radius-this.lineWidth+1+2*this.lineWidth/3,0,2*Math.PI,!1),this.g.stroke(),!1}}$.extend(textInputIconBinding,{find:function(e){return $(e).find(".text-input-icon")},getValue:function(e){return e.value},setValue:function(e,n){e.value=n},subscribe:function(e,n){$(e).on("keyup.textInputIconBinding input.textInputIconBinding",(function(e){n(!0)})),$(e).on("change.textInputIconBinding",(function(e){n(!1)}))},unsubscribe:function(e){$(e).off(".textInputIconBinding")},receiveMessage:function(e,n){n.hasOwnProperty("value")&&this.setValue(e,n.value),updateLabel(n.label,this._getLabelNode(e)),n.hasOwnProperty("placeholder")&&(e.placeholder=n.placeholder),n.hasOwnProperty("left")&&$(e).prev(".sw-input-icon").replaceWith(n.left),n.hasOwnProperty("right")&&$(e).next(".sw-input-icon").replaceWith(n.right),$(e).trigger("change")},getState:function(e){return{label:this._getLabelNode(e).text(),value:e.value,placeholder:e.placeholder}},getRatePolicy:function(){return{policy:"debounce",delay:250}},_getLabelNode:function(e){return $(e).parent().find('label[for="'+Shiny.$escape(e.id)+'"]')}}),Shiny.inputBindings.register(textInputIconBinding,"shinyWidgets.textInputIcon");var knobInputBinding=new Shiny.InputBinding;$.extend(knobInputBinding,{find:function(e){return $(e).find(".knob-input")},initialize:function(e){var n=$(e).data("value"),t=$(e).data("post");t=void 0===t?"":t;var i,a=$(e).data("pre");a=void 0===a?"":a,e.value=n,i="tron"===$(e).data("skin")?tron_skin:function(){this.i.val(a+this.cv+t)},$(e).knob({draw:i,format:function(e){return a+e+t}})},getValue:function(e){var n=e.value,t=$(e).data("pre");if(void 0!==t){var i=new RegExp("^"+t);n=n.replace(i,"")}var a=$(e).data("post");if(void 0!==a){var r=new RegExp(a+"$");n=n.replace(r,"")}return parseFloat(n)},subscribe:function(e,n){$(e).data("immediate")?($(e).on("keyup.knobInputBinding",(function(e){n(!0)})),$(e).trigger("configure",{change:function(e){n(!0)},release:function(e){n(!1)}}),$(e).on("change.knobInputBinding",(function(e){n(!0)}))):($(e).on("keyup.knobInputBinding",(function(e){n(!0)})),$(e).trigger("configure",{release:function(e){n(!1)}}))},unsubscribe:function(e){$(e).off(".knobInputBinding")},receiveMessage:function(e,n){n.hasOwnProperty("value")&&$(e).val(n.value).trigger("change"),n.hasOwnProperty("readOnly")&&$(e).trigger("configure",{readOnly:n.readOnly}),n.hasOwnProperty("options")&&$(e).trigger("configure",n.options),n.hasOwnProperty("label")&&$(e).parent().parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(n.label),$(e).trigger("change")},getState:function(e){return{label:$(e).parent().parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(),value:e.value}},getRatePolicy:function(){return{policy:"debounce",delay:500}}}),Shiny.inputBindings.register(knobInputBinding,"shinyWidgets.knobInput");var multiInputBinding=new Shiny.InputBinding;$.extend(multiInputBinding,{initialize:function(e){var n=$(e).parent().find('script[data-for="'+Shiny.$escape(e.id)+'"]');n=JSON.parse(n.html()),$(e).multi(n),$(e).trigger("change")},find:function(e){return $(e).find(".multijs")},getId:function(e){return e.id},getValue:function(e){return $(e).val()},setValue:function(e,n){$(e).val(n),$(e).multi(),$(e).trigger("change")},getState:function(e){for(var n=new Array(e.length),t=0;t<e.length;t++)n[t]={value:e[t].value,label:e[t].label};return{label:$(e).parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(),value:this.getValue(e),options:n}},receiveMessage:function(e,n){var t=$(e);n.hasOwnProperty("options")&&t.empty().append(n.options),n.hasOwnProperty("value")&&this.setValue(e,n.value),n.hasOwnProperty("label")&&$(e).parent().parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(n.label);var i=new Event("change");$(e).multi(),t.get(0).dispatchEvent(i),t.trigger("change")},subscribe:function(e,n){$(e).on("change",(function(e){n()}))},unsubscribe:function(e){$(e).off(".multiInputBinding")}}),Shiny.inputBindings.register(multiInputBinding,"shinyWidgets.multiInput");var noUiSliderBinding=new Shiny.InputBinding;$.extend(noUiSliderBinding,{find:function(e){return $(e).find(".sw-no-ui-slider")},getId:function(e){return e.id},getType:function(e){var n=$(e).data("data-type");return"date"===n?"shiny.date":"datetime"===n&&"shiny.datetime"},getValue:function(e){var n,t=document.getElementById(e.id).noUiSlider.get(),i=$(e).parent().find('script[data-for="'+Shiny.$escape(e.id)+'"]');if(void 0!==(i=JSON.parse(i.html())).format){var a=wNumb(i.format);n=Array.isArray(t)?t.map(a.from):a.from(t)}else n=Array.isArray(t)?t.map(Number):Number(t);return n},setValue:function(e,n){document.getElementById(e.id).noUiSlider.set(n)},subscribe:function(e,n){var t=document.getElementById(e.id);"end"==$("#"+e.id).data("update")?(t.noUiSlider.on("change",(function(e){n()})),t.noUiSlider.on("set",(function(e){n()}))):(t.noUiSlider.on("slide",(function(e){n()})),t.noUiSlider.on("set",(function(e){n()})))},unsubscribe:function(e){$(e).off(".noUiSliderBinding")},receiveMessage:function(e,n){var t=document.getElementById(e.id);n.disable?t.setAttribute("disabled",!0):t.removeAttribute("disabled"),n.hasOwnProperty("range")&&t.noUiSlider.updateOptions({range:{min:n.range[0],max:n.range[1]}}),t.noUiSlider.set(n.value),$(e).trigger("change")},getRatePolicy:function(){return{policy:"debounce",delay:250}},getState:function(e){},initialize:function(e){var n=$(e).parent().find('script[data-for="'+Shiny.$escape(e.id)+'"]');(n=JSON.parse(n.html())).hasOwnProperty("format")&&(n.format=wNumb(n.format)),n.hasOwnProperty("pips")&&(n.pips.hasOwnProperty("format")&&(n.pips.format=wNumb(n.pips.format)),n.pips.hasOwnProperty("size")&&(n.pips.filter=function(e,t){return t>0?n.pips.size:t}));var t=document.getElementById(e.id);"vertical"===n.orientation&&(t.style.margin="0 auto 30px"),noUiSlider.create(t,n)}}),Shiny.inputBindings.register(noUiSliderBinding,"shinyWidgets.noUiSlider");var numericRangeInputBinding=new Shiny.InputBinding;$.extend(numericRangeInputBinding,{find:function(e){return $(e).find(".shiny-numeric-range-input")},getType:function(e){return"sw.numericRange"},getValue:function(e){var n=$(e).find("input"),t=n[0].value,i=n[1].value;return[t=/^\s*$/.test(t)?null:isNaN(t)?t:+t,i=/^\s*$/.test(i)?null:isNaN(i)?i:+i]},setValue:function(e,n){e.find("input")[0].value=n[0],e.find("input")[1].value=n[1]},subscribe:function(e,n){$(e).on("change.numericRangeInputBinding",(function(e){n()}))},receiveMessage:function(e,n){var t=$(e);n.hasOwnProperty("label")&&t.find('label[for="'+Shiny.$escape(e.id)+'"]').text(n.label),n.hasOwnProperty("value")&&this.setValue(t,n.value),$(e).trigger("change")},unsubscribe:function(e){$(e).off(".numericRangeInputBinding")}}),Shiny.inputBindings.register(numericRangeInputBinding,"shinyWidgets.numericRange"),Shiny.InputBinding.prototype.store=[],Shiny.InputBinding.prototype.updateStore=function(e,n){this.store[e.id]=n};var pickrColorBinding=new Shiny.InputBinding;function getCorrectTextColor(e){function n(e){return"#"==e.charAt(0)?e.substring(1,7):e}return(299*parseInt(n(e).substring(0,2),16)+587*function(e){return parseInt(n(e).substring(2,4),16)}(e)+114*function(e){return parseInt(n(e).substring(4,6),16)}(e))/1e3>130?"#000000":"#ffffff"}$.extend(pickrColorBinding,{find:function(e){return $(e).find(".pickr-color")},getId:function(e){return $(e).attr("id")},getValue:function(e){return this.getPickr(e).getColor().toHEXA().toString(0)},setValue:function(e,n){this.getPickr(e).setColor(n)},subscribe:function(e,n){var t=this.getPickr(e);t.on("init",(function(e,t){n()}));var i=this.getUpdate(e),a=this.getHideOnSave(e);"change"==i?t.on(i,(function(e,t,i){n()})):(t.on(i,(function(e,t){!0===a&"changestop"!=i&&t.hide(),n()})),"changestop"==i&&t.on("swatchselect",(function(e,t){n()})))},unsubscribe:function(e){},receiveMessage:function(e,n){var t=this.getPickr(e);n.hasOwnProperty("value")&&t.setColor(n.value),n.hasOwnProperty("action")&&("enable"==n.action&&t.enable(),"disable"==n.action&&t.disable(),"show"==n.action&&t.show(),"hide"==n.action&&t.hide())},getState:function(e){},initialize:function(e){var n=$(e).parent().find('script[data-for="'+e.id+'"]'),t=(n=JSON.parse(n.html())).options;t.el=e,e.value=t.default,t.appClass="pickr-color";var i=new Pickr(t);i.setColor(t.default);var a=i.getRoot();n.hasOwnProperty("width")&&(a.app.style.width=n.width),!1===t.useAsButton?(a.button.parentNode.style.display="inline",a.button.id=e.id,a.button.classList.add("pickr-color"),n.inline&&(a.button.style.display="none")):(e.style.backgroundColor=t.default,e.style.color=getCorrectTextColor(t.default),"changestop"==n.update?i.on(n.update,(function(n,t){var i=t.getColor();e.value=i.toHEXA().toString(0),e.style.backgroundColor=i.toHEXA().toString(0),e.style.color=getCorrectTextColor(i.toHEXA().toString(0))})):i.on(n.update,(function(n){e.value=n.toHEXA().toString(0),e.style.backgroundColor=n.toHEXA().toString(0),e.style.color=getCorrectTextColor(n.toHEXA().toString(0))}))),i.options.color=t.default,i.options.inline=n.inline,i.options.update=n.update,i.options.hideOnSave=n.hideOnSave,this.updateStore(e,i)},getPickr:function(e){return this.store[e.id]},getUpdate:function(e){return this.store[e.id].options.update},getHideOnSave:function(e){return this.store[e.id].options.hideOnSave},getColor:function(e){return this.store[e.id].options.color},isInline:function(e){return this.store[e.id].options.inline}}),Shiny.inputBindings.register(pickrColorBinding,"shinyWidgets.colorPickr"),Shiny.addCustomMessageHandler("update-progressBar-shinyWidgets",(function(e){var n,t=e.id,i=document.getElementById(t),a=document.getElementById(t+"-value"),r=document.getElementById(t+"-total"),o=document.getElementById(t+"-title"),s=e.total,u=Math.round(e.value);s>0?(n=Math.round(u/s*100),null!==a&&(a.innerText=e.commas?u.toLocaleString("en-US"):u),null!==r&&(r.innerText=e.commas?s.toLocaleString("en-US"):s),u=Math.round(u/s*100)):n=e.percent>0?e.percent:u,i.style.width=n+"%",""!==i.innerText&&(i.innerText=u+e.unit_mark),null!==e.status&&(i.className="",i.classList.add("progress-bar"),i.classList.add("progress-bar-"+e.status)),null!==e.title&&(o.innerText=e.title)}));var searchInputBinding=new Shiny.InputBinding;function forceIonSliderTextUpdate(e){e.$cache&&e.$cache.input?e.$cache.input.trigger("change"):console.log("Couldn't force ion slider to update")}$.extend(searchInputBinding,{find:function(e){return $(e).find(".search-text")},getId:function(e){return $(e).attr("id")},getValue:function(e){return $("#"+Shiny.$escape(e.id)+"_text").val()},setValue:function(e,n){$("#"+Shiny.$escape(e.id)+"_text").val(n)},subscribe:function(e,n){$("#"+Shiny.$escape(e.id)+"_text").on("keyup.searchInputBinding input.searchInputBinding",(function(e){13==e.keyCode&&n()})),$("#"+Shiny.$escape(e.id)+"_search").on("click",(function(e){n()})),$("#"+Shiny.$escape(e.id)+"_reset").on("click",(function(t){if("TRUE"==$("#"+Shiny.$escape(e.id)).data("reset")){var i=$("#"+Shiny.$escape(e.id)).data("reset-value");$("#"+Shiny.$escape(e.id)+"_text").val(i)}n()}))},unsubscribe:function(e){$(e).off(".searchInputBinding")},receiveMessage:function(e,n){n.hasOwnProperty("value")&&this.setValue(e,n.value),n.hasOwnProperty("label")&&$(e).parent().find('label[for="'+e.id+'"]').text(n.label),n.hasOwnProperty("placeholder")&&($("#"+e.id+"_text")[0].placeholder=n.placeholder),n.trigger&&$("#"+e.id+"_search").click(),$(e).trigger("change")},getState:function(e){return{value:this.getValue(e)}},getRatePolicy:function(){return{policy:"debounce",delay:250}}}),Shiny.inputBindings.register(searchInputBinding,"shinyWidgets.searchInput");var sliderTextBinding=new Shiny.InputBinding;$.extend(sliderTextBinding,{find:function(e){return $.fn.ionRangeSlider?$(e).find(".sw-slider-text"):[]},getType:function(e){var n=$(e).data("data-type");return"date"===n?"shiny.date":"datetime"===n&&"shiny.datetime"},getValue:function(e){var n=$(e).data("ionRangeSlider"),t=n.result,i=n.options.values;return"text"===$(e).data("data-type")?2===this._numValues(e)?[i[t.from].toString(),i[t.to].toString()]:i[t.from].toString():2===this._numValues(e)?[i[t.from],i[t.to]]:i[t.from]},setValue:function(e,n){var t=$(e),i=t.data("ionRangeSlider");t.data("immediate",!0);try{2===this._numValues(e)&&n instanceof Array?i.update({from:n[0],to:n[1]}):i.update({from:n}),forceIonSliderTextUpdate(i)}finally{t.data("immediate",!1)}},subscribe:function(e,n){$(e).on("change.sliderInputBinding",(function(t){n(!$(e).data("immediate")&&!$(e).data("animating"))}))},unsubscribe:function(e){$(e).off(".sliderInputBinding")},receiveMessage:function(e,n){var t=$(e),i=t.data("ionRangeSlider"),a={},r=i.options.values;n.hasOwnProperty("choices")&&(a.values=n.choices,r=n.choices),n.hasOwnProperty("selected")&&(2===this._numValues(e)&&n.selected instanceof Array?(a.from=r.indexOf(n.selected[0]),a.to=r.indexOf(n.selected[1])):a.from=r.indexOf(n.selected)),n.hasOwnProperty("from_fixed")&&(a.from_fixed=n.from_fixed),n.hasOwnProperty("to_fixed")&&(a.to_fixed=n.to_fixed),n.hasOwnProperty("label")&&t.parent().find('label[for="'+Shiny.$escape(e.id)+'"]').text(n.label),t.data("immediate",!0);try{i.update(a),forceIonSliderTextUpdate(i)}finally{t.data("immediate",!1)}},getRatePolicy:function(){return{policy:"debounce",delay:250}},getState:function(e){},initialize:function(e){var n={},t=$(e),i=$(e).data("swvalues");n.values=i,t.ionRangeSlider(n)},_numValues:function(e){return"double"===$(e).data("ionRangeSlider").options.type?2:1}}),Shiny.inputBindings.register(sliderTextBinding,"shiny.sliderText");var spectrumInputBinding=new Shiny.InputBinding;$.extend(spectrumInputBinding,{find:function(e){return $(e).find(".sw-spectrum")},getId:function(e){return $(e).attr("id")},getValue:function(e){return $(e).spectrum("get").toHexString()},setValue:function(e,n){$(e).spectrum("set",n)},subscribe:function(e,n){$(e).on("change",(function(e){n()}))},unsubscribe:function(e){$(e).off(".spectrumInputBinding")},receiveMessage:function(e,n){n.hasOwnProperty("value")&&this.setValue(e,n.value),$(e).trigger("change")},getState:function(e){return{value:this.getValue(e)}},initialize:function(e){var n={},t=$(e).attr("data-update-on");$(e).removeAttr("data-update-on"),"dragstop"==t&&$(e).on("dragstop.spectrum",(function(n){$(e).trigger("change")})),"move"==t&&(n.move=function(){$(e).trigger("change")}),"change"==t&&(n.change=function(){$(e).trigger("change")}),$(e).spectrum(n)},getRatePolicy:function(){return{policy:"debounce",delay:250}}}),Shiny.inputBindings.register(spectrumInputBinding,"shinyWidgets.spectrumInput");var dropMenuInputBinding=new Shiny.InputBinding;$.extend(dropMenuInputBinding,{find:function(e){return $(e).find(".drop-menu-input")},getId:function(e){return e.id},getValue:function(e){return this["instance"+e.id].state.isShown},setValue:function(e,n){},subscribe:function(e,n){var t=this["onHidden"+e.id];this["instance"+e.id].setProps({onShown:function(e){n()},onHidden:function(e){t(e),n()}})},unsubscribe:function(e){$(e).off(".dropMenuInputBinding")},receiveMessage:function(e,n){n.hasOwnProperty("action")&&("enable"==n.action&&this["instance"+e.id].enable(),"disable"==n.action&&this["instance"+e.id].disable(),"show"==n.action&&this["instance"+e.id].show(),"hide"==n.action&&this["instance"+e.id].hide())},getState:function(e){},initialize:function(e){var n=document.getElementById(e.id),t=n.querySelector('script[data-for="'+e.id+'"]');t=JSON.parse(t.innerHTML);var i=document.getElementById(n.dataset.target);t.options.interactive=!0,t.options.onShow=function(e){var t=document.getElementById(n.dataset.template);t.style.display="block",Shiny.bindAll(t,!0),e.setContent(t)},this["onHidden"+e.id]=function(e){var t=e.props.content;t.style.display="none",n.appendChild(t),e.setContent("")},this["instance"+e.id]=tippy(i,t.options)}}),Shiny.inputBindings.register(dropMenuInputBinding,"shinyWidgets.dropMenuInput");var shinyMode=void 0!==window.Shiny&&!!window.Shiny.inputBindings;if(shinyMode){var VerticalTabInputBinding=new Shiny.InputBinding;$.extend(VerticalTabInputBinding,{initialize:function(e){$(e).on("click","> *",(function(e){e.preventDefault(),$(this).siblings("a.active").removeClass("active"),$(this).addClass("active"),$(this).css("display","");var n=$(this).index();$(this).parents(".vrtc-tab-panel-container").find("div.vrtc-tab-panel>div.vrtc-tab-panel-content").removeClass("active"),$(this).parents(".vrtc-tab-panel-container").find("div.vrtc-tab-panel>div.vrtc-tab-panel-content").eq(n).addClass("active")}))},find:function(e){return $(e).find(".vertical-tab-panel")},getId:function(e){return e.id},getValue:function(e){return $(e).find(".active").attr("data-value")},setValue:function(e,n){},receiveMessage:function(e,n){var t=$(e);if(n.hasOwnProperty("value"))t.find("[data-value='"+n.value+"']").click();else if(n.hasOwnProperty("validate"))0===t.children(".active").length&&t.children().length>0&&t.children().last().click();else if(n.hasOwnProperty("reorder")){var i=t.children();i.detach(),t.append($.map(n.reorder,(function(e){return i[e-1]})))}},subscribe:function(e,n){$(e).on("click",(function(e){n()}))},unsubscribe:function(e){$(e).off(".VerticalTabInputBinding")}}),Shiny.inputBindings.register(VerticalTabInputBinding,"shinyWidgets.VerticalTabInput")}else $(document).ready((function(){$("div.vrtc-tab-panel-menu>div.list-group").on("click","> *",(function(e){e.preventDefault(),$(this).siblings("a.active").removeClass("active"),$(this).addClass("active"),$(this).css("display","");var n=$(this).index();$(this).parents(".vrtc-tab-panel-container").find("div.vrtc-tab-panel>div.vrtc-tab-panel-content").removeClass("active"),$(this).parents(".vrtc-tab-panel-container").find("div.vrtc-tab-panel>div.vrtc-tab-panel-content").eq(n).addClass("active")}))}));
