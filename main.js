let modules;
$.ajax("modules.json", {
    dataType: "json",
    success: function (data) {
        modules = data;
        console.log("Modules loaded")
    }
});

$(document).ready(function () {

    $("#input").bind('input propertychange', function () {
        let content = $(this).val();

        let module;
        for (module in modules) {
            if (!modules.hasOwnProperty(module)) continue;
            content = content.replace(new RegExp(module, 'g'), modules[module]);
        }

        $("#output").val(content);
    });

});