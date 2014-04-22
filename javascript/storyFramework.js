var storyNS = storyNS || {};

storyNS.init = function() {
    storyNS.renderNode(storyNS.storyNodes[storyNS.FIRST_NODE],true);
    $("#title").text("Choose Your Own Adventure");
};

storyNS.renderNode = function(storyNode, isStart) {
    var text = "";
    var paragraphs = storyNode.text();

    for (var paragraphIndex in paragraphs) {
        text = text+"<div><p>" + paragraphs[paragraphIndex] + "</p></div>";
    }

    if (isStart){
        $(".story-segment").html(text);
        populateList();
    } else {
        $("#story-choices").fadeOut(200, function() {
            populateList(function() {
                $("#story-choices").fadeIn(200);
            });
        });

        $(".story-segment").fadeOut(200,function() {
            $(".story-segment").html(text);
            $(".story-segment").fadeIn(200);
        });
    }

    function populateList(callback) {
        $("#story-choices").html("");
        for (var linkIndex in storyNode.links) {
            $("#story-choices").append(
                    '<li>' +
                    '<i class="fa fa-long-arrow-right"></i>'+
                    '<a onclick="storyNS.renderNode('+
                'storyNS.storyNodes['+ storyNode.links[linkIndex].link + '],false)">'+
                    storyNode.links[linkIndex].linkText +
                    '</a>' +
                    '</li>');
        }
        if ($("#story-choices").html() === ""){
            $("#story-choices").append(
                '<li>' +
                '<a onclick="storyNS.renderNode('+
                    'storyNS.storyNodes[storyNS.FIRST_NODE],false)">'+
                    'Try Again' +
                '</a>' +
                '</li>');
        }

        if (callback) {
            callback();
        }
    }

};

$(document).ready(storyNS.init);
